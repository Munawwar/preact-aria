import {cpSync, mkdtempSync, readdirSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';
import {assertCommittedSite, buildPages, git, repo, run, site} from './pages-tools.mjs';

let temp;
let worktree;
let worktreeCreated = false;
try {
  buildPages();
  assertCommittedSite();
  if (git(['status', '--porcelain', '--untracked-files=all'])) {
    throw new Error('Commit your source changes before publishing the examples.');
  }
  const source = git(['rev-parse', 'HEAD']);
  git(['fetch', 'origin', 'main']);
  git(['merge-base', '--is-ancestor', source, 'FETCH_HEAD']);
  const remote = spawnSync('git', ['ls-remote', '--exit-code', '--heads', 'origin', 'gh-pages'], {
    cwd: repo,
    encoding: 'utf8'
  });
  if (remote.error) throw remote.error;
  if (![0, 2].includes(remote.status)) throw new Error(remote.stderr || 'Could not read gh-pages.');
  let previous;
  if (remote.status === 0) {
    git(['fetch', 'origin', 'gh-pages']);
    previous = git(['rev-parse', 'FETCH_HEAD']);
  }
  temp = mkdtempSync(join(tmpdir(), 'preact-aria-pages-'));
  worktree = join(temp, 'site');
  git(['worktree', 'add', '--detach', '--no-checkout', worktree, previous || source]);
  worktreeCreated = true;
  const inSite = args => git(args, {cwd: worktree});
  inSite(['read-tree', '--empty']);
  cpSync(site, worktree, {recursive: true});
  inSite(['add', '-A']);
  const tree = inSite(['write-tree']);
  if (previous && tree === git(['rev-parse', `${previous}^{tree}`])) {
    console.log('The committed examples are already published.');
  } else {
    const deployment = inSite([
      'commit-tree',
      tree,
      ...(previous ? ['-p', previous] : []),
      '-m',
      `chore: publish examples from ${source}`
    ]);
    // Push from the source checkout so the normal pre-push hook rebuilds and verifies it.
    run('git', ['push', 'origin', `${deployment}:refs/heads/gh-pages`]);
    console.log('Published: https://munawwar.github.io/preact-aria/');
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
} finally {
  if (worktreeCreated) {
    // Only generated files were copied here; remove them before removing the temporary worktree.
    for (const entry of readdirSync(worktree)) {
      if (entry !== '.git') rmSync(join(worktree, entry), {recursive: true, force: true});
    }
    run('git', ['worktree', 'remove', '--force', worktree]);
  }
  if (temp) rmSync(temp, {recursive: true, force: true});
}
