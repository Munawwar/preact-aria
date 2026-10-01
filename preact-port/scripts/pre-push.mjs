import {readFileSync} from 'node:fs';
import {assertCommittedSite, buildPages, git, sitePath} from './pages-tools.mjs';

try {
  const updates = readFileSync(0, 'utf8')
    .trim()
    .split('\n')
    .filter(Boolean)
    .map(line => line.split(' '));
  console.log('pre-push: rebuilding the static examples...');
  buildPages();
  assertCommittedSite();
  const head = git(['rev-parse', 'HEAD']);
  for (const [, localSha, remoteRef] of updates) {
    if (/^0+$/.test(localSha)) continue;
    if (remoteRef === 'refs/heads/gh-pages') {
      // Compare actual committed files; no build fingerprints or checksum manifests.
      git(['diff', '--exit-code', '--name-only', `${head}:${sitePath}`, `${localSha}^{tree}`]);
    } else if (git(['rev-parse', `${localSha}^{commit}`]) !== head) {
      throw new Error(
        'Check out the source commit you are pushing so the hook can build that version.'
      );
    }
  }
  console.log('pre-push: example build matches the committed files.');
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
