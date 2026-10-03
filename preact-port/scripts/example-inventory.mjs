import {readdir} from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';
import json5 from 'json5';

export async function files(directory) {
  const result = [];
  for (const item of await readdir(directory, {withFileTypes: true})) {
    const p = path.join(directory, item.name);
    if (item.isDirectory()) result.push(...(await files(p)));
    else result.push(p);
  }
  return result.sort();
}

export function attributes(text) {
  const ast = ts.createSourceFile(
    'attributes.tsx',
    `const el = (<Example ${text} />);`,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  );
  const element = ast.statements[0]?.declarationList?.declarations[0]?.initializer?.expression;
  return Object.fromEntries(
    (element?.attributes?.properties || [])
      .filter(ts.isJsxAttribute)
      .map(a => [
        a.name.text,
        !a.initializer
          ? 'true'
          : ts.isJsxExpression(a.initializer)
            ? a.initializer.expression?.getText(ast)
            : JSON.stringify(a.initializer.text)
      ])
  );
}

// Scan fenced blocks, including fences indented inside MDX example switchers.
// Keep offsets so imports, line links, switchers and stylesheet blocks retain their context.
export function documentation(text) {
  const blocks = [];
  const fence = /^([ \t]*)```(\w+)([^\n]*)\n([\s\S]*?)^\1```/gm;
  let match;
  while ((match = fence.exec(text))) {
    const [, indent, language, meta, raw] = match;
    if (!/\brender\b/.test(meta)) continue;
    const prefix = text.slice(0, match.index);
    const headings = [...prefix.matchAll(/^#{1,4} (.+)$/gm)];
    const heading = headings.at(-1)?.[1] || 'Example';
    const opening = prefix.lastIndexOf('<ExampleSwitcher');
    const closing = prefix.lastIndexOf('</ExampleSwitcher>');
    const switcher =
      opening > closing ? prefix.slice(opening).match(/^<ExampleSwitcher[^>]*>/)?.[0] : '';
    let components = [''];
    if (raw.includes('COMPONENT') && switcher?.includes('type="component"')) {
      components = json5.parse(switcher.match(/examples={(\[[\s\S]*?\])}/)[1]);
    }
    const code = raw
      .split('\n')
      .map(line => (line.startsWith(indent) ? line.slice(indent.length) : line))
      .join('\n');
    for (const component of components) {
      blocks.push({
        language,
        heading,
        component,
        code: code.replaceAll('COMPONENT', component),
        metadata: attributes(meta.replace(/^\s*render\b/, '').replaceAll('COMPONENT', component)),
        line: prefix.split('\n').length,
        offset: match.index
      });
    }
  }
  const withoutFences = text.replace(/^([ \t]*)```[^\n]*\n[\s\S]*?^\1```/gm, '');
  const imports = [
    ...withoutFences.matchAll(/^import\s+[\s\S]*?\sfrom\s*['"][^'"]+['"][^\n]*;?\s*$/gm)
  ]
    .map(m => m[0].trim())
    .filter(s => !/from\s*['"](?:docs:|docs-json:)/.test(s));
  const visual = /<VisualExample\s+([\s\S]*?)\/>/g;
  while ((match = visual.exec(withoutFences))) {
    const metadata = attributes(match[1]);
    if (!metadata.component) continue;
    const original = text.indexOf(match[0]);
    blocks.push({
      language: 'visual',
      heading: 'Overview',
      code: '',
      metadata,
      component: '',
      line: text.slice(0, original).split('\n').length,
      offset: original
    });
  }
  return {blocks: blocks.sort((a, b) => a.offset - b.offset), imports};
}

export function storyExports(text, file) {
  const ast = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const exports = ast.statements.flatMap(s => {
    if (!s.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword)) return [];
    if (ts.isFunctionDeclaration(s)) return s.name ? [s.name.text] : [];
    if (ts.isVariableStatement(s))
      return s.declarationList.declarations.map(d => d.name.getText(ast));
    return [];
  });
  const excluded = text.match(/excludeStories:\s*(\[[^\]]*\])/);
  const excludedNames = excluded ? json5.parse(excluded[1]) : [];
  return {stories: exports.filter(name => !excludedNames.includes(name)), excluded: excludedNames};
}

export function executable(code, metadata, imports = [], controlSchema = {}) {
  const used = new Set();
  const sourceAst = ts.createSourceFile(
    'references.tsx',
    code,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  );
  const collect = node => {
    if (ts.isIdentifier(node)) used.add(node.text);
    ts.forEachChild(node, collect);
  };
  collect(sourceAst);
  const extra = imports.filter(s => {
    const ast = ts.createSourceFile(
      'imports.tsx',
      s,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX
    );
    const i = ast.statements.find(ts.isImportDeclaration);
    const names = [
      i?.importClause?.name?.text,
      ...(i?.importClause?.namedBindings?.elements || []).map(e => e.name.text),
      i?.importClause?.namedBindings?.name?.text
    ].filter(Boolean);
    return (
      names.some(
        n =>
          used.has(n) ||
          ['component', 'initialProps', 'controlOptions'].some(key =>
            new RegExp(`\\b${n}\\b`).test(metadata[key] || '')
          )
      ) &&
      !names.some(n => new RegExp(`\\b${n}\\b`).test(code.match(/import[^;]*;/g)?.join('\n') || ''))
    );
  });
  let component;
  if (metadata.component) {
    component = metadata.component;
  } else {
    const ast = ts.createSourceFile(
      'example.tsx',
      code,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX
    );
    const expressions = ast.statements.filter(
      s =>
        ts.isExpressionStatement(s) &&
        (ts.isJsxElement(s.expression) ||
          ts.isJsxFragment(s.expression) ||
          ts.isJsxSelfClosingElement(s.expression) ||
          /^\s*</.test(s.expression.getText(ast)))
    );
    if (expressions.length) {
      const last = expressions.at(-1);
      code =
        code.slice(0, last.getStart(ast)) +
        `\nfunction ImportedExample(props) { return React.cloneElement((${last.expression.getText(ast)}), props); }\n` +
        code.slice(last.end);
      component = 'ImportedExample';
    } else if (/export default\b/.test(code)) {
      return [...extra, code].join('\n');
    } else {
      const functions = ast.statements
        .filter(ts.isFunctionDeclaration)
        .filter(s => /^[A-Z]/.test(s.name?.text || ''));
      component =
        functions.find(s => s.name.text === 'Example')?.name.text || functions[0]?.name.text;
      if (!component) {
        for (const s of ast.statements.filter(ts.isVariableStatement)) {
          const d = s.declarationList.declarations.find(
            d => /^[A-Z]/.test(d.name.getText(ast)) && d.initializer
          );
          if (d) {
            component = d.name.getText(ast);
            break;
          }
        }
      }
      if (!component) throw new Error('No rendered JSX or component found in upstream example');
    }
  }
  const declarations = [...extra, code].join('\n');
  const reactImport = /import\s+(?:React\b|\*\s+as\s+React\b)/.test(declarations)
    ? ''
    : "import React from 'react';\n";
  return `${reactImport}${declarations}\nexport default {render: ${component}, args: ${metadata.initialProps || '{}'}, controls: ${metadata.props || '[]'}, controlOptions: ${metadata.controlOptions || '{}'}, propsObject: ${metadata.propsObject || 'undefined'}, argTypes: ${JSON.stringify(controlSchema)}};\n`;
}
