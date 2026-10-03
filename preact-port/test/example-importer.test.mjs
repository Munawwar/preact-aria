import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';
import {documentation, executable, files, storyExports} from '../scripts/example-inventory.mjs';

const port = new URL('../', import.meta.url);
const repo = new URL('../../', import.meta.url);
function withoutModulePaths(text) {
  text = text.replace(/^\/\/ Adapted for Preact Aria[^\n]*\n/, '');
  const ast = ts.createSourceFile(
    'story.tsx',
    text,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  );
  const replacements = [];
  function visit(node) {
    if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier)
      replacements.push(node.moduleSpecifier);
    if (
      ts.isCallExpression(node) &&
      (node.expression.kind === ts.SyntaxKind.ImportKeyword ||
        node.expression.getText(ast) === 'require') &&
      ts.isStringLiteral(node.arguments[0])
    )
      replacements.push(node.arguments[0]);
    if (
      ts.isNewExpression(node) &&
      node.expression.getText(ast) === 'URL' &&
      ts.isStringLiteral(node.arguments?.[0])
    )
      replacements.push(node.arguments[0]);
    ts.forEachChild(node, visit);
  }
  visit(ast);
  for (const node of replacements.sort((a, b) => b.pos - a.pos))
    text = text.slice(0, node.getStart(ast)) + '"MODULE"' + text.slice(node.end);
  return text;
}

test('component switchers expand placeholders without duplicating explicit examples', () => {
  const result = documentation(
    '<ExampleSwitcher type="component" examples={["Menu", "ListBox"]}>\n  ```tsx render\n  <COMPONENT />\n  ```\n</ExampleSwitcher>\n'
  );
  assert.deepEqual(
    result.blocks.map(b => b.code.trim()),
    ['<Menu />', '<ListBox />']
  );
  assert.equal(
    documentation(
      '<ExampleSwitcher>\n```tsx render\n<Button />\n```\n```tsx render\n<Button />\n```\n</ExampleSwitcher>'
    ).blocks.length,
    2
  );
});

test('visual examples retain required imports, arguments and nested prop controls', () => {
  const result = executable(
    '',
    {
      component: 'VanillaButton',
      props: '["isDisabled"]',
      initialProps: '{isDisabled:true}',
      propsObject: '"layoutOptions"'
    },
    [
      "import {Button as VanillaButton} from 'vanilla-starter/Button';",
      "import {Layout} from './Layout';"
    ]
  );
  assert.match(result, /Button as VanillaButton/);
  assert.doesNotMatch(result, /import \{Layout\}/);
  assert.match(result, /args: \{isDisabled:true\}/);
  assert.match(result, /propsObject: "layoutOptions"/);
});

test('all RAC, hook, state and starter story bodies remain unchanged', async () => {
  const inventory = JSON.parse(
    await readFile(new URL('examples/generated/inventory.json', port), 'utf8')
  );
  for (const directory of [
    'packages/react-aria-components/stories',
    'packages/react-aria/stories',
    'packages/react-stately/stories',
    'starters/tailwind/stories',
    'starters/hooks/stories'
  ]) {
    const sources = (await files(new URL(directory, repo).pathname)).filter(f =>
      /\.stories\.[jt]sx?$/.test(f)
    );
    for (const file of sources) {
      const source = file.slice(repo.pathname.length);
      const entry = inventory.find(e => e.source === source);
      assert(entry, `Missing page: ${source}`);
      const original = await readFile(file, 'utf8');
      assert.deepEqual(entry.stories, storyExports(original, file).stories, source);
      const generated = await readFile(
        new URL('examples/generated/' + entry.module.slice(2), port),
        'utf8'
      );
      assert.equal(withoutModulePaths(generated), withoutModulePaths(original), source);
    }
  }
});

test('every runnable documentation fence and visual example is catalogued', async () => {
  const inventory = JSON.parse(
    await readFile(new URL('examples/generated/inventory.json', port), 'utf8')
  );
  const sources = (
    await files(new URL('packages/dev/s2-docs/pages/react-aria', repo).pathname)
  ).filter(f => f.endsWith('.mdx') && !f.includes('/examples/'));
  for (const file of sources) {
    const source = file.slice(repo.pathname.length);
    const blocks = documentation(await readFile(file, 'utf8')).blocks.filter(b =>
      ['tsx', 'visual'].includes(b.language)
    );
    if (!blocks.length) continue;
    const entry = inventory.find(e => e.source === source);
    assert(entry, `Missing documentation: ${source}`);
    assert.equal(entry.stories.length, blocks.length, source);
    for (let i = 0; i < blocks.length; i++)
      assert.equal(entry.variants[i].code, blocks[i].code, `${source}:${blocks[i].line}`);
  }
  const date = await readFile(
    new URL('examples/generated/documentation/DatePicker-1.tsx', port),
    'utf8'
  );
  assert.match(date, /"granularity":\{"description"[\s\S]*?"options":\[/);
  assert.match(date, /"day"/);
});
