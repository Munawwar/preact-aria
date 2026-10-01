import {chmodSync} from 'node:fs';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';
import {git, repo} from './pages-tools.mjs';

const root = git(['rev-parse', '--show-toplevel']);
if (root !== repo.replace(/\/$/, '')) throw new Error('Run this from the source repository.');
const current = spawnSync('git', ['config', '--get', 'core.hooksPath'], {
  cwd: repo,
  encoding: 'utf8'
});
if (current.error) throw current.error;
if (![0, 1].includes(current.status)) throw new Error('Could not read the existing hooks path.');
const hookPath = current.stdout.trim();
if (hookPath && hookPath !== '.githooks') {
  throw new Error(
    `Existing hooks path ${hookPath} must be integrated before installing these hooks.`
  );
}
chmodSync(join(repo, '.githooks/pre-push'), 0o755);
git(['config', '--local', 'core.hooksPath', '.githooks']);
console.log('Installed the rebuild-before-push hook for this clone.');
