import {cp, mkdir, readFile, readdir, rm, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import ts from 'typescript';
import {expandExamples} from './expand-examples.mjs';

const port = fileURLToPath(new URL('../', import.meta.url));
const repo = path.dirname(port);
const output = path.join(port, 'examples/generated');
const gallerySource = 'packages/dev/s2-docs/pages/react-aria/examples';
const patches = JSON.parse(await readFile(path.join(port, 'example-patches.json'), 'utf8'));
await rm(output, {recursive: true, force: true});
await mkdir(output, {recursive: true});

// Keep upstream files authoritative. Only module resolution changes in the generated copy.
function adapt(source, destination) {
  const relativePath = path.relative(output, destination).split(path.sep).join('/');
  for (const patch of patches.filter(patch => patch.path === relativePath)) {
    if (source.split(patch.before).length !== 2) {
      throw new Error(`Review the upstream example patch for ${patch.path}: its source changed.`);
    }
    source = source.replace(patch.before, patch.after);
  }
  return source.replace(/(from\s+|import\s*)(['"])([^'"]+)\2/g, (match, prefix, quote, name) => {
    let target;
    if (name === 'react-aria') {
      target = path.join(port, 'vendor/react-aria/exports/index.ts');
    } else if (/^(react-aria-components|react-aria|react-stately)(?:\/|$)/.test(name)) {
      const [pkg, ...rest] = name.split('/');
      target = path.join(port, 'vendor', pkg, 'exports', (rest.join('/') || 'index') + '.ts');
    } else if (name.startsWith('vanilla-starter/')) {
      target = path.join(output, 'vanilla/src', name.slice('vanilla-starter/'.length));
    } else if (name.startsWith('tailwind-starter/')) {
      target = path.join(output, 'tailwind/src', name.slice('tailwind-starter/'.length));
    } else if (name === 'storybook/test') {
      target = path.join(port, 'examples/story-actions.ts');
    } else {
      return match;
    }
    let relative = path.relative(path.dirname(destination), target).split(path.sep).join('/');
    if (!relative.startsWith('.')) relative = `./${relative}`;
    return `${prefix}${quote}${relative}${quote}`;
  });
}

async function copy(source, destination) {
  await cp(source, destination, {recursive: true});
  async function walk(directory) {
    for (const entry of await readdir(directory, {withFileTypes: true})) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) await walk(file);
      else if (/\.[jt]sx?$/.test(entry.name)) {
        await writeFile(file, adapt(await readFile(file, 'utf8'), file));
      }
    }
  }
  await walk(destination);
}

await copy(path.join(repo, 'starters/docs/src'), path.join(output, 'vanilla/src'));
await copy(path.join(repo, 'starters/docs/stories'), path.join(output, 'vanilla/stories'));
await copy(path.join(repo, 'starters/tailwind/src'), path.join(output, 'tailwind/src'));
await copy(path.join(repo, gallerySource), path.join(output, 'gallery'));

const entries = [];
const priorities = ['Menu', 'Popover', 'Select', 'ComboBox', 'DatePicker'];
const stories = (await readdir(path.join(output, 'vanilla/stories')))
  .filter(name => name.endsWith('.stories.tsx'))
  .sort((a, b) => {
    const rank = name => {
      const index = priorities.indexOf(name.replace('.stories.tsx', ''));
      return index < 0 ? priorities.length : index;
    };
    return rank(a) - rank(b) || a.localeCompare(b);
  });
for (const name of stories) {
  const text = await readFile(path.join(output, 'vanilla/stories', name), 'utf8');
  const ast = ts.createSourceFile(name, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const exports = ast.statements
    .filter(
      statement =>
        ts.isVariableStatement(statement) &&
        statement.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword)
    )
    .flatMap(statement =>
      statement.declarationList.declarations.map(declaration => declaration.name.getText(ast))
    );
  entries.push({
    id: name.replace('.stories.tsx', '').toLowerCase(),
    title: name.replace('.stories.tsx', ''),
    group: 'Components',
    source: `starters/docs/stories/${name}`,
    module: `./vanilla/stories/${name}`,
    stories: exports
  });
}

for (const name of (await readdir(path.join(repo, gallerySource)))
  .filter(name => name.endsWith('.mdx') && name !== 'index.mdx')
  .sort()) {
  const mdx = await readFile(path.join(repo, gallerySource, name), 'utf8');
  const id = name.replace('.mdx', '');
  const title = mdx.match(/^# (.+)$/m)?.[1];
  const description = mdx.match(/export const description = '(.+)';/)?.[1] || '';
  let code = mdx.match(/```tsx render[^\n]*\n([\s\S]*?)\n```/)?.[1];
  if (!code) {
    // Full applications are authored as ordinary TSX modules alongside the MDX page.
    const app = mdx.match(/import App from '([^']+)';/)?.[1];
    if (!app) throw new Error(`No executable upstream example found in ${name}`);
    code = `export {default} from '${app}';\n`;
  } else {
    const ast = ts.createSourceFile(name, code, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    const last = ast.statements.at(-1);
    if (last && ts.isExpressionStatement(last) && /^\s*</.test(last.expression.getText(ast))) {
      code = `${code.slice(0, last.getStart(ast))}\nexport default function Example() {\n  return (${last.expression.getText(ast)});\n}\n`;
    } else if (!/export default /.test(code)) {
      // The sheet's rendered component is selected by Adobe's docs renderer.
      if (id !== 'sheet') throw new Error(`Missing default example in ${name}`);
      code += '\nexport default Sheet;\n';
    }
  }
  const destination = path.join(output, 'gallery', `${id}.tsx`);
  if (mdx.includes('type="tailwind"') || ['crud', 'swipeable-tabs'].includes(id)) {
    code = `import '../tailwind.css';\n${code}`;
  }
  await writeFile(destination, adapt(code, destination));
  entries.push({
    id,
    title,
    description,
    group: 'Gallery',
    source: `${gallerySource}/${name}`,
    module: `./gallery/${id}.tsx`,
    stories: ['Example']
  });
}
await expandExamples({port, repo, output, entries});
const registry = entries
  .map(
    ({module, ...entry}) =>
      `{...${JSON.stringify(entry)}, ${entry.group === 'Gallery' ? `image: new URL('./gallery/${entry.id}.png', import.meta.url).href,` : ''} load: () => import(${JSON.stringify(module)})}`
  )
  .join(',\n');
await writeFile(
  path.join(output, 'registry.ts'),
  `// Generated from unchanged upstream example source.\nexport const examples = [\n${registry}\n];\n`
);
await writeFile(path.join(output, 'inventory.json'), JSON.stringify(entries, null, 2) + '\n');
console.log(
  `Synced ${entries.length} pages / ${entries.reduce((n, e) => n + e.stories.length, 0)} upstream variants: ${[...new Set(entries.map(e => e.group))].map(group => group + ' ' + entries.filter(e => e.group === group).reduce((n, e) => n + e.stories.length, 0)).join(', ')}.`
);
