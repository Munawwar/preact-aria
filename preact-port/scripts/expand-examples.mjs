import {cp, mkdir, readFile, writeFile, stat} from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';
import {exampleControls} from './example-controls.mjs';
import {compileStrings} from '@internationalized/string-compiler';
import {files, documentation, executable, storyExports} from './example-inventory.mjs';

export async function expandExamples({port, repo, output, entries}) {
  const semanticPatches = [];
  const patches = JSON.parse(await readFile(path.join(port, 'documentation-patches.json'), 'utf8'));
  const applied = new Set();
  const copied = new Map(),
    dependencySources = [];
  const relative = (from, to) => {
    let name = path.relative(path.dirname(from), to).split(path.sep).join('/');
    return name.startsWith('.') ? name : './' + name;
  };
  const exists = async file => {
    try {
      return (await stat(file)).isFile();
    } catch {
      return false;
    }
  };
  async function resolveFile(p) {
    if (p.includes('*')) {
      const directory = path.dirname(p);
      const pattern = new RegExp(
        '^' + path.basename(p).replaceAll('.', '\\.').replaceAll('*', '.*') + '$'
      );
      for (const file of await files(directory))
        if (pattern.test(path.basename(file))) await copyFile(file);
      const destination = path.join(output, 'repository', path.relative(repo, p));
      copied.set(p, destination);
      return p;
    }
    for (const candidate of [
      p,
      ...['.tsx', '.ts', '.jsx', '.js', '.json', '.css', '.svg'].map(ext => p + ext),
      ...['index.tsx', 'index.ts', 'index.js'].map(file => path.join(p, file))
    ])
      if (await exists(candidate)) return candidate;
    throw new Error(`Missing upstream example dependency: ${path.relative(repo, p)}`);
  }
  async function resolveImport(name, original) {
    const protocol = name.match(/^(url|raw|data-url|bundle-text|illustration):(.+)$/);
    if (protocol) {
      const target = await resolveImport(protocol[2], original);
      return target ? protocol[1] + ':' + target : null;
    }
    if (['storybook/actions', 'storybook/test'].includes(name))
      return path.join(port, 'examples/story-actions.ts');
    const starter = name.match(/^(vanilla|tailwind|hooks)-starter\/(.+)$/);
    if (starter)
      return resolveFile(
        path.join(
          output,
          starter[1] === 'vanilla' ? 'vanilla/src' : starter[1] + '/src',
          starter[2]
        )
      );
    const core = name.match(/^(react-aria-components|react-aria|react-stately)(?:\/(.*))?$/);
    if (core) return resolveFile(path.join(port, 'vendor', core[1], 'exports', core[2] || 'index'));
    if (name.startsWith('.')) {
      const p = path.resolve(path.dirname(original), name);
      if (copied.has(p)) return copied.get(p);
      const coreSource = p.match(
        /\/packages\/(react-aria-components|react-aria|react-stately)\/(src|exports)\/(.+)/
      );
      if (coreSource)
        return resolveFile(path.join(port, 'vendor', coreSource[1], coreSource[2], coreSource[3]));
      return copyFile(await resolveFile(p));
    }
    if (name.startsWith('/packages/'))
      return copyFile(await resolveFile(path.join(repo, name.slice(1))));
    if (name.startsWith('@')) {
      const [scope, pkg, ...rest] = name.split('/'),
        directory = path.join(repo, 'packages', scope, pkg);
      if (await exists(path.join(directory, 'package.json'))) {
        if (name === '@react-types/shared' || name.startsWith('@react-types/shared/'))
          return path.join(port, 'vendor/@react-types/shared/src/index.d.ts');
        const manifest = JSON.parse(await readFile(path.join(directory, 'package.json'), 'utf8'));
        let p;
        if (scope === '@spectrum-icons' && rest.length) p = path.join(directory, 'src', ...rest);
        else if (rest[0] === 'private') p = path.join(directory, 'src', ...rest.slice(1));
        else if (rest.length) {
          const sub = './' + rest.join('/');
          const key = Object.keys(manifest.exports || {})
            .filter(
              k =>
                k === sub ||
                (k.includes('*') &&
                  sub.startsWith(k.split('*')[0]) &&
                  sub.endsWith(k.split('*')[1]))
            )
            .sort((a, b) => b.length - a.length)[0];
          const exp = manifest.exports?.[key],
            spec = typeof exp === 'string' ? exp : exp?.source || exp?.default;
          const replacement = key?.includes('*')
            ? sub.slice(key.indexOf('*'), sub.length - (key.split('*')[1].length || 0))
            : '';
          p = path.join(directory, spec ? spec.replace('*', replacement) : rest.join('/'));
        } else
          p = path.join(
            directory,
            manifest.source ||
              manifest.exports?.source ||
              manifest.exports?.['.']?.source ||
              'src/index.ts'
          );
        return copyFile(await resolveFile(p));
      }
    }
    return null;
  }
  async function adapt(text, destination, original) {
    const ast = ts.createSourceFile(
      original,
      text,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX
    );
    const specifiers = [];
    const visit = node => {
      if (
        (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) &&
        node.moduleSpecifier &&
        ts.isStringLiteral(node.moduleSpecifier)
      )
        specifiers.push(node.moduleSpecifier);
      if (
        ts.isCallExpression(node) &&
        (node.expression.kind === ts.SyntaxKind.ImportKeyword ||
          node.expression.getText(ast) === 'require') &&
        ts.isStringLiteral(node.arguments[0])
      )
        specifiers.push(node.arguments[0]);
      if (
        ts.isNewExpression(node) &&
        node.expression.getText(ast) === 'URL' &&
        ts.isStringLiteral(node.arguments?.[0])
      )
        specifiers.push(node.arguments[0]);
      ts.forEachChild(node, visit);
    };
    visit(ast);
    let result = '',
      cursor = 0;
    for (const spec of specifiers.sort((a, b) => a.pos - b.pos)) {
      const start = spec.getStart(ast),
        end = spec.end;
      result += text.slice(cursor, start);
      const target = await resolveImport(spec.text, original);
      const protocol = target?.match(/^(url|raw|data-url|bundle-text|illustration):(.+)$/);
      result += target
        ? JSON.stringify(
            protocol
              ? protocol[1] + ':' + relative(destination, protocol[2])
              : relative(destination, target)
          )
        : text.slice(start, end);
      cursor = end;
    }
    return result + text.slice(cursor);
  }
  async function copyFile(original) {
    if (copied.has(original)) return copied.get(original);
    const destination = path.join(output, 'repository', path.relative(repo, original));
    copied.set(original, destination);
    await mkdir(path.dirname(destination), {recursive: true});
    if (/\.(tsx?|jsx?|mjs)$/.test(original)) {
      let text = await readFile(original, 'utf8');
      text = text.replace(/(from\s+['"][^'"]*intl[^'"]*)\*\.json(['"])/g, '$1index.js$2');
      for (const match of text.matchAll(/from\s+['"]([^'"]*intl[^'"]*index\.js)['"]/g)) {
        const dir = path.resolve(path.dirname(original), path.dirname(match[1])),
          destDir = path.join(output, 'repository', path.relative(repo, dir));
        const dictionaries = (await files(dir)).filter(
          f => f.endsWith('.json') && path.dirname(f) === dir
        );
        await mkdir(destDir, {recursive: true});
        for (const file of dictionaries)
          await writeFile(
            path.join(destDir, path.basename(file, '.json') + '.js'),
            compileStrings(JSON.parse(await readFile(file, 'utf8')), {format: 'esm'})
          );
        await writeFile(
          path.join(destDir, 'index.js'),
          dictionaries
            .map((file, i) => `import l${i} from './${path.basename(file, '.json')}.js';`)
            .join('\n') +
            '\nexport default {' +
            dictionaries
              .map((file, i) => JSON.stringify(path.basename(file, '.json')) + `:l${i}`)
              .join(',') +
            '};\n'
        );
        copied.set(path.join(dir, 'index.js'), path.join(destDir, 'index.js'));
      }
      text = await adapt(text, destination, original);
      await writeFile(
        destination,
        `// Adapted for Preact Aria: standalone module paths. Original notices retained.\n${text}`
      );
      dependencySources.push(path.relative(repo, original));
    } else if (original.endsWith('.css')) {
      const text = await readFile(original, 'utf8'),
        localImports = new Set();
      for (const match of text.matchAll(/(?:@import\s*|url\(\s*)['"]?([^'"\s);]+)['"]?/g))
        if (
          !/^(?:https?:|data:|#|@)/.test(match[1]) &&
          (await exists(path.resolve(path.dirname(original), match[1])))
        ) {
          localImports.add(match[1]);
          await copyFile(await resolveFile(path.resolve(path.dirname(original), match[1])));
        }
      await writeFile(
        destination,
        text.replace(/(@import\s*['"])([^./][^'"]*\.css)(['"])/g, (match, prefix, name, suffix) =>
          localImports.has(name) ? prefix + './' + name + suffix : match
        )
      );
    } else await cp(original, destination);
    return destination;
  }
  await cp(path.join(repo, 'starters/hooks/src'), path.join(output, 'hooks/src'), {
    recursive: true
  });
  for (const p of await files(path.join(output, 'hooks/src')))
    if (/\.tsx?$/.test(p))
      await writeFile(
        p,
        await adapt(
          await readFile(p, 'utf8'),
          p,
          path.join(repo, 'starters/hooks/src', path.relative(path.join(output, 'hooks/src'), p))
        )
      );
  const roots = [
    ['packages/react-aria-components/stories', 'Storybook', 'stories'],
    ['packages/react-aria/stories', 'Hook stories', 'aria-stories'],
    ['packages/react-stately/stories', 'State stories', 'stately-stories'],
    ['starters/tailwind/stories', 'Tailwind', 'tailwind-stories'],
    ['starters/hooks/stories', 'Hooks', 'hooks-stories']
  ];
  for (const [directory, group, prefix] of roots)
    for (const original of (await files(path.join(repo, directory))).filter(f =>
      /\.stories\.[jt]sx?$/.test(f)
    )) {
      const source = path.relative(repo, original),
        text = await readFile(original, 'utf8'),
        {stories, excluded} = storyExports(text, original),
        destination = await copyFile(original);
      entries.push({
        id:
          prefix +
          '-' +
          path
            .relative(path.join(repo, directory), original)
            .replace(/\.stories\.[jt]sx?$/, '')
            .replaceAll('/', '-')
            .toLowerCase(),
        title: path.basename(original).replace(/\.stories\.[jt]sx?$/, ''),
        group,
        source,
        module: relative(path.join(output, 'registry.ts'), destination),
        stories,
        excluded,
        variants: stories.map(name => ({
          id: name,
          title: name.replace(/([a-z])([A-Z])/g, '$1 $2'),
          source
        }))
      });
    }
  const provider = await resolveImport(
    '@adobe/react-spectrum/Provider',
    path.join(repo, '.storybook/preview.js')
  );
  const constants = await copyFile(path.join(repo, '.storybook/constants.js'));
  await writeFile(
    path.join(output, 'providers.tsx'),
    `import React from 'react';\nimport {Provider} from ${JSON.stringify(relative(path.join(output, 'providers.tsx'), provider))};\nimport {defaultTheme, themes} from ${JSON.stringify(relative(path.join(output, 'providers.tsx'), constants))};\nexport function StoryProvider({children, locale, colorScheme='light', scale}) {return <Provider theme={themes[colorScheme] || defaultTheme} colorScheme={colorScheme} scale={scale} locale={locale}>{children}</Provider>;}\n`
  );
  const controlsFor = exampleControls(port);
  const docsRoot = path.join(repo, 'packages/dev/s2-docs/pages/react-aria'),
    audit = [];
  for (const original of (await files(docsRoot)).filter(
    f => f.endsWith('.mdx') && !f.includes('/examples/')
  )) {
    const text = await readFile(original, 'utf8'),
      {blocks, imports} = documentation(text),
      live = blocks.filter(b => b.language === 'tsx' || b.language === 'visual');
    if (!live.length) continue;
    const source = path.relative(repo, original),
      page = path.relative(docsRoot, original).replace(/\.mdx$/, ''),
      aggregator = path.join(output, 'documentation', page + '.stories.tsx');
    await mkdir(path.dirname(aggregator), {recursive: true});
    const exports = [],
      variants = [];
    let index = 0;
    for (const block of live) {
      const id = 'Example' + ++index,
        destination = path.join(output, 'documentation', page + '-' + index + '.tsx');
      let originalCode = block.code;
      for (const [patchIndex, patch] of patches.entries())
        if (patch.source === source && originalCode.includes(patch.before)) {
          if (originalCode.split(patch.before).length !== 2)
            throw new Error(`Review documentation patch: ${source}`);
          originalCode = originalCode.replace(patch.before, patch.after);
          applied.add(patchIndex);
          semanticPatches.push({source, line: block.line, reason: patch.reason});
        }
      let code = await adapt(
        executable(originalCode, block.metadata, imports, controlsFor(block.metadata)),
        destination,
        original
      );
      if (
        Object.values(block.metadata).some(v => v?.includes('tailwind')) ||
        block.code.includes('tailwind-starter')
      )
        code =
          `import ${JSON.stringify(relative(destination, path.join(output, 'tailwind.css')))};\n` +
          code;
      for (const css of blocks.filter(b => b.language === 'css')) {
        const styleFile = path.join(output, 'documentation', page + '-' + css.line + '.css');
        await mkdir(path.dirname(styleFile), {recursive: true});
        await writeFile(styleFile, css.code);
        code = `import ${JSON.stringify(relative(destination, styleFile))};\n` + code;
      }
      await writeFile(
        destination,
        `// Original example: ${source}:${block.line}. Apache-2.0, Adobe and contributors.\n// Adapted module paths and standalone renderer; upstream example body retained.\n${code}`
      );
      exports.push(
        `export {default as ${id}} from ${JSON.stringify(relative(aggregator, destination))};`
      );
      variants.push({
        id,
        title:
          block.heading +
          (block.component ? ' — ' + block.component : '') +
          (block.metadata.type ? ' — ' + JSON.parse(block.metadata.type) : ''),
        source,
        line: block.line,
        kind: block.language,
        controls: block.metadata.props || '[]',
        code: block.code
      });
      audit.push({source, line: block.line, component: block.component, kind: block.language, id});
    }
    await writeFile(aggregator, exports.join('\n') + '\nexport default {};\n');
    entries.push({
      id: 'docs-' + page.replaceAll('/', '-').toLowerCase(),
      title: text.match(/^# (.+)$/m)?.[1] || path.basename(page),
      group: 'Documentation',
      source,
      module: relative(path.join(output, 'registry.ts'), aggregator),
      stories: variants.map(v => v.id),
      variants
    });
  }
  if (applied.size !== patches.length)
    throw new Error('Review documentation patches: upstream source changed.');
  // The upstream style macro reads its package version to generate class names.
  const spectrumManifest = JSON.parse(
    await readFile(path.join(repo, 'packages/@react-spectrum/s2/package.json'), 'utf8')
  );
  await writeFile(
    path.join(output, 'repository/packages/@react-spectrum/s2/package.json'),
    JSON.stringify({
      name: spectrumManifest.name,
      version: spectrumManifest.version,
      private: true
    }) + '\n'
  );
  const cssConfig = path.join(
    output,
    'repository/packages/@adobe/spectrum-css-temp/postcss.config.cjs'
  );
  await mkdir(path.dirname(cssConfig), {recursive: true});
  await writeFile(
    cssConfig,
    `// Use the same CSS processors as upstream Storybook.\nmodule.exports = {plugins: require(${JSON.stringify(relative(cssConfig, path.join(repo, 'packages/@adobe/spectrum-css-builder-temp/css/processors.js')))}).processors};\n`
  );
  await writeFile(
    path.join(output, 'source-audit.json'),
    JSON.stringify(
      {
        documentation: audit,
        semanticPatches,
        dependencies: dependencySources.sort(),
        storyRoots: roots.map(([source]) => source)
      },
      null,
      2
    ) + '\n'
  );
}
