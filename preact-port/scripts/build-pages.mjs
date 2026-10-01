import {copyFileSync, mkdirSync, rmSync, writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {port, run, site} from './pages-tools.mjs';

// A clean output directory makes removed assets visible to Git as deletions.
rmSync(site, {recursive: true, force: true});
run(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'build'], {cwd: port});
run(process.execPath, ['scripts/ssr-page.mjs'], {cwd: port});
run(
  process.execPath,
  [
    'node_modules/parcel/lib/bin.js',
    'build',
    '--target',
    'pages',
    '--no-cache',
    '--no-scope-hoist',
    '--no-optimize',
    '--no-autoinstall'
  ],
  {cwd: port}
);
mkdirSync(site, {recursive: true});
writeFileSync(new URL('../site/.nojekyll', import.meta.url), '');
copyFileSync(
  fileURLToPath(new URL('../LICENSE', import.meta.url)),
  new URL('../site/LICENSE', import.meta.url)
);
console.log('Static examples built in preact-port/site. Commit this directory before pushing.');
