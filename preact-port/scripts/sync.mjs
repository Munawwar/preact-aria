import {cp, mkdir, readFile, readdir, writeFile, symlink, lstat, rm} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {compileStrings} from '@internationalized/string-compiler';
const root = fileURLToPath(new URL('../', import.meta.url));
const manifest = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'));
async function writeChanged(file, content) {
  try {
    if ((await readFile(file, 'utf8')) === content) return;
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  await mkdir(path.dirname(file), {recursive: true});
  await writeFile(file, content);
}
async function walk(dir, visit) {
  for (const item of await readdir(dir, {withFileTypes: true})) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) await walk(file, visit);
    else await visit(file);
  }
}
for (const name of [
  'react-aria',
  'react-stately',
  'react-aria-components',
  '@react-types/shared'
]) {
  const source = path.join(root, '../packages', name),
    dest = path.join(root, 'vendor', name);
  const generated = new Set();
  const writeSource = async (file, code) => {
    generated.add(file);
    await writeChanged(file, code);
  };
  await mkdir(dest, {recursive: true});
  for (const dir of ['src', 'exports', 'intl']) {
    try {
      await walk(path.join(source, dir), async file => {
        const target = path.join(dest, path.relative(source, file)),
          code = await readFile(file, 'utf8');
        if (dir === 'intl' && file.endsWith('.json'))
          await writeSource(
            target.replace(/\.json$/, '.js'),
            compileStrings(JSON.parse(code), {format: 'esm'})
          );
        else
          await writeSource(
            target,
            code.replace(/(from\s+['"][^'"]*intl[^'"]*)\*\.json(['"])/g, '$1index.js$2')
          );
      });
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
  try {
    const intlRoot = path.join(source, 'intl'),
      dirs = [intlRoot];
    for (const item of await readdir(intlRoot, {withFileTypes: true}))
      if (item.isDirectory()) dirs.push(path.join(intlRoot, item.name));
    for (const dir of dirs) {
      const locales = (await readdir(dir)).filter(f => f.endsWith('.json')).sort();
      if (!locales.length) continue;
      const imports = locales
        .map((f, i) => `import l${i} from './${f.replace(/\.json$/, '.js')}';`)
        .join('\n');
      const values = locales
        .map((f, i) => `${JSON.stringify(f.replace(/\.json$/, ''))}: l${i}`)
        .join(',');
      await writeSource(
        path.join(dest, path.relative(source, dir), 'index.js'),
        `${imports}\nexport default {${values}};\n`
      );
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  const entry = name === '@react-types/shared' ? './src/index.d.ts' : './exports/index.ts';
  await writeSource(
    path.join(dest, 'package.json'),
    JSON.stringify(
      {
        name,
        version: '0.0.0',
        type: 'module',
        source: entry,
        main: entry,
        exports: {'.': entry, './*': './exports/*.ts'},
        sideEffects: false,
        alias: Object.fromEntries(
          Object.entries(manifest.alias).map(([name, target]) => [
            name,
            path.relative(dest, path.resolve(root, target))
          ])
        ),
        dependencies: manifest.dependencies,
        peerDependencies: manifest.peerDependencies
      },
      null,
      2
    )
  );
  // Remove deleted upstream files so an old copy cannot mask a missing import.
  await walk(dest, async file => {
    if (!generated.has(file)) await rm(file);
  });
  const link = path.join(root, 'node_modules', name);
  await mkdir(path.dirname(link), {recursive: true});
  try {
    await lstat(link);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    await symlink(dest, link, 'dir');
  }
}
await cp(path.join(root, '../LICENSE'), path.join(root, 'LICENSE'));
console.log('Synced ported sources and compiled all locales.');
