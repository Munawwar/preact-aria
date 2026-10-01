import assert from 'node:assert/strict';
import {mkdirSync, mkdtempSync, rmSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {test} from 'node:test';
import {assertCommittedSite, git, sitePath} from '../scripts/pages-tools.mjs';

test('the push guard rejects missing, modified, deleted, staged and new example output', () => {
  const cwd = mkdtempSync(join(tmpdir(), 'preact-aria-push-test-'));
  const localGit = args => git(args, {cwd});
  const page = join(cwd, sitePath, 'index.html');
  const rejects = () => assert.throws(() => assertCommittedSite(cwd), /Push rejected/);
  try {
    localGit(['init', '--quiet']);
    localGit(['config', 'user.name', 'Pages test']);
    localGit(['config', 'user.email', 'pages@example.test']);
    rejects();
    mkdirSync(join(cwd, sitePath), {recursive: true});
    writeFileSync(page, 'Committed demo');
    localGit(['add', '.']);
    localGit(['commit', '--quiet', '-m', 'test: initial site']);
    assert.doesNotThrow(() => assertCommittedSite(cwd));

    writeFileSync(page, 'Rebuilt demo');
    rejects();
    localGit(['add', '.']);
    rejects();
    localGit(['reset', '--hard', '--quiet', 'HEAD']);

    rmSync(page);
    rejects();
    localGit(['add', '-A']);
    rejects();
    localGit(['reset', '--hard', '--quiet', 'HEAD']);

    const newPage = join(cwd, sitePath, 'new.html');
    writeFileSync(newPage, 'New demo');
    rejects();
    localGit(['add', '.']);
    rejects();
    localGit(['commit', '--quiet', '-m', 'test: commit updated site']);
    assert.doesNotThrow(() => assertCommittedSite(cwd));
  } finally {
    rmSync(cwd, {recursive: true, force: true});
  }
});
