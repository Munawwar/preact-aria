import {cp, mkdir, readdir, readFile, writeFile, rm} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist/types');
if (process.argv.includes('--clean')) {
  await rm(output, {recursive: true, force: true});
  process.exit(0);
}
await mkdir(path.join(output, 'compat'), {recursive: true});
await cp(path.join(root, 'compat/react.d.ts'), path.join(output, 'compat/react.d.ts'));
await cp(path.join(root, 'compat/types.d.ts'), path.join(output, 'compat/types.d.ts'));
await cp(
  path.join(root, 'vendor/@react-types/shared/src'),
  path.join(output, '@react-types/shared/src'),
  {recursive: true}
);
async function walk(dir) {
  for (const item of await readdir(dir, {withFileTypes: true})) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) {
      await walk(file);
      continue;
    }
    if (!file.endsWith('.d.ts')) continue;
    const source = await readFile(file, 'utf8');
    const local = source.replace(
      /(['"])(react-aria-components|react-aria|react-stately|@react-types\/shared|react-dom|react)([^'"]*)\1/g,
      (match, quote, name, subpath) => {
        const target =
          name === 'react' || name === 'react-dom'
            ? path.join(output, 'compat/react')
            : name === '@react-types/shared' && subpath === '/preact'
              ? path.join(output, 'compat/types')
              : name === '@react-types/shared'
                ? path.join(output, name, 'src', subpath ? subpath.slice(1) : 'index')
                : path.join(output, name, 'exports', subpath ? subpath.slice(1) : 'index');
        let relative = path.relative(path.dirname(file), target).split(path.sep).join('/');
        if (!relative.startsWith('.')) relative = './' + relative;
        return quote + relative + quote;
      }
    );
    // TypeScript's NodeNext resolver requires explicit ESM extensions, including
    // in declarations. A .js specifier resolves to the corresponding .d.ts file.
    const code = local.replace(
      /(\bfrom\s*|\bimport\s*\(\s*|\bimport\s*)(['"])(\.{1,2}\/[^'"]+)\2/g,
      (match, prefix, quote, specifier) => {
        if (path.extname(specifier)) return match;
        const target = path.resolve(path.dirname(file), specifier);
        let suffix;
        if (existsSync(target + '.d.ts')) suffix = '.js';
        else if (existsSync(path.join(target, 'index.d.ts'))) suffix = '/index.js';
        else throw new Error(`Unresolved declaration import ${specifier} in ${file}`);
        return prefix + quote + specifier.replace(/\/$/, '') + suffix + quote;
      }
    );
    await writeFile(file, code);
  }
}
await walk(output);
console.log('Made declarations self contained with explicit ESM extensions.');
