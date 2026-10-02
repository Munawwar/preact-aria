import {execFileSync, spawnSync} from 'node:child_process';
import {mkdirSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {basename, dirname, resolve, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const [checkout, ...args] = process.argv.slice(2);
if (!checkout) {
  throw new Error(
    'Usage: node scripts/browser-reference.mjs <upstream-checkout> [vitest arguments]'
  );
}
const root = resolve(checkout);
const {baseline, patches} = JSON.parse(
  readFileSync(new URL('../upstream-patches.json', import.meta.url), 'utf8')
);
const git = (...args) => execFileSync('git', args, {cwd: root, encoding: 'utf8'}).trim();
if (git('rev-parse', 'HEAD') !== baseline || git('diff', 'HEAD') !== '') {
  throw new Error(`Reference checkout must have untouched tracked files at ${baseline}.`);
}
const output = join(root, 'dist/browser-baseline');
mkdirSync(output, {recursive: true});
const clipboard = fileURLToPath(new URL('../test/browser/clipboard.mjs', import.meta.url));
const reporter = fileURLToPath(new URL('../test/browser/reporter.mjs', import.meta.url));
const regressions = args.includes('--regressions');
if (regressions) {
  args.splice(args.indexOf('--regressions'), 1);
  const fixtures = join(output, 'fixtures');
  rmSync(fixtures, {recursive: true, force: true});
  mkdirSync(fixtures, {recursive: true});
  for (const patch of patches.filter(patch => patch.kind === 'test')) {
    const source = readFileSync(new URL(`../../${patch.path}`, import.meta.url), 'utf8');
    // Compile the same assertions against the reference checkout's source, not the fork.
    const redirected = source.replace(
      /(from\s+|import\s+)(['"])(\.[^'"]*)\2/g,
      (_, prefix, quote, specifier) =>
        prefix + quote + resolve(root, dirname(patch.path), specifier) + quote
    );
    writeFileSync(join(fixtures, basename(patch.path)), redirected);
  }
}
const config = join(output, regressions ? 'regressions.config.ts' : 'reference.config.ts');
// Write only an ignored test configuration; upstream's tracked files stay intact.
writeFileSync(
  config,
  `import {mergeConfig} from 'vitest/config';
import upstream from '../../vitest.browser.config';
import {clipboardCommands} from ${JSON.stringify(clipboard)};
export default mergeConfig(upstream, {test: {
  fileParallelism: false,
  ${regressions ? "include: ['dist/browser-baseline/fixtures/**/*.browser.test.tsx']," : ''}
  browser: {commands: clipboardCommands}
}});
`
);
const result = spawnSync(
  process.execPath,
  [
    join(root, 'node_modules/vitest/vitest.mjs'),
    'run',
    '--config',
    config,
    '--maxWorkers',
    '2',
    '--reporter=default',
    '--reporter=json',
    `--reporter=${reporter}`,
    `--outputFile=${join(output, regressions ? 'results-regressions.json' : 'results-supported.json')}`,
    ...(regressions ? ['dist/browser-baseline/fixtures'] : []),
    ...args
  ],
  {
    cwd: root,
    stdio: 'inherit',
    env: {
      ...process.env,
      BROWSER_REPORT:
        process.env.BROWSER_REPORT ||
        join(output, regressions ? 'regression-cases.json' : 'supported-cases.json')
    }
  }
);
if (result.error) {
  throw result.error;
}
process.exitCode = result.status ?? 1;
