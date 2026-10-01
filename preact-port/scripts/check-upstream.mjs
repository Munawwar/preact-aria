import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';

const repo = fileURLToPath(new URL('../../', import.meta.url));
const {baseline, unchanged, patches} = JSON.parse(
  await readFile(new URL('../upstream-patches.json', import.meta.url), 'utf8')
);
const git = (...args) => execFileSync('git', args, {cwd: repo, encoding: 'utf8'});
for (const path of unchanged) {
  assert.equal(git('diff', baseline, '--', path), '', `${path} must match upstream`);
}
const actual = [
  git('diff', '--name-only', baseline, '--', 'packages'),
  git('ls-files', '--others', '--exclude-standard', '--', 'packages')
]
  .join('\n')
  .split('\n')
  .filter(Boolean)
  .sort();
assert.deepEqual(
  actual,
  patches.map(patch => patch.path).sort(),
  'Update the patch inventory when adding or removing an upstream source patch.'
);
console.log(
  `Upstream audit passed: ${patches.length} patched files; ${unchanged.join(', ')} unchanged.`
);
