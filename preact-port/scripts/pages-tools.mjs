import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

export const port = fileURLToPath(new URL('../', import.meta.url));
export const repo = fileURLToPath(new URL('../../', import.meta.url));
export const sitePath = 'preact-port/site';
export const site = fileURLToPath(new URL('../site/', import.meta.url));

export function run(command, args, options = {}) {
  const result = spawnSync(command, args, {cwd: repo, stdio: 'inherit', ...options});
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${command} failed (exit ${result.status}).`);
  return result.stdout;
}

export function git(args, options = {}) {
  return run('git', args, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'inherit'],
    ...options
  }).trim();
}

export function assertCommittedSite(cwd = repo) {
  const changes = git(['status', '--porcelain', '--untracked-files=all', '--', sitePath], {cwd});
  const files = git(['ls-files', '--', sitePath], {cwd});
  if (changes || !files) {
    throw new Error(
      `Example build differs from the committed files. Push rejected.\n${changes}\n` +
        'Review the output, run git add -A preact-port/site, commit it, then push again.'
    );
  }
}

export function buildPages() {
  run(process.execPath, [fileURLToPath(new URL('./build-pages.mjs', import.meta.url))]);
}
