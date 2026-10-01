import assert from 'node:assert/strict';
import {mkdir, readdir, readFile, writeFile} from 'node:fs/promises';
import * as exports from '../dist/index.js';

const root = new URL('../', import.meta.url);
const read = async path => JSON.parse(await readFile(new URL(path, root), 'utf8'));
const {coverage, examples, userAgent} = await read('artifacts/browser-coverage.json');
const results = new Map();
const paths = await readdir(new URL('artifacts/evidence/', root));
// Use individual results from the final runs, rather than intermediate batch archives.
for (const path of paths) {
  if (!path.endsWith('.json')) continue;
  const entry = await read(`artifacts/evidence/${path}`);
  if (!Array.isArray(entry)) results.set(entry.name, entry);
}
for (const file of ['examples/priority.tsx', 'examples/catalog.tsx'])
  assert((await readFile(new URL(file, root), 'utf8')).includes("from '../dist/index.js'"));
const support = {
  DEFAULT_SLOT: 'Context slot symbol',
  DIRECTORY_DRAG_TYPE: 'Drag data type constant',
  Layout: 'Abstract base used by the four concrete virtualized layouts',
  LayoutInfo: 'Internal virtualized layout geometry',
  Point: 'Internal virtualized layout geometry',
  Rect: 'Internal virtualized layout geometry',
  Size: 'Grid and waterfall layout options',
  ListLayout: 'virtual-list',
  GridLayout: 'virtual-grid',
  WaterfallLayout: 'virtual-waterfall',
  TableLayout: 'virtual-table',
  TokenFieldValue: 'tokenfield',
  UNSTABLE_ToastQueue: 'toast'
};
const componentNames = Object.keys(exports).filter(
  name => /^[A-Z]/.test(name) && !name.endsWith('Context') && !(name in support)
);
const mapping = Object.fromEntries(
  componentNames.map(name => {
    const pages = examples.filter(page => coverage[page].includes(name));
    assert(pages.length, `No component page for ${name}`);
    return [name, pages];
  })
);
const pages = examples.map(name => {
  const entry = results.get(name);
  assert(entry, `No interaction attempt for ${name}`);
  assert.equal(entry.status, 'pass', `${name}: ${entry.error}`);
  return {
    name,
    components: coverage[name],
    status: entry.status,
    driver: entry.driver || 'Playwriter',
    checks: entry.evidence.filter(x => x.label !== 'initial render').map(x => x.label),
    ...(entry.note ? {note: entry.note} : {})
  };
});
const hydration = JSON.parse(await readFile('/tmp/aria-hydration-results.json', 'utf8'));
const utilities = await read('artifacts/utilities-observations.json');
assert.equal(utilities.status, 'pass');
const sourceAudit = await read('upstream-patches.json');
assert.equal(hydration.status, 'pass');
for (const key of ['retainedInput', 'retainedId', 'retainedOption', 'retainedSegment'])
  assert.equal(hydration.hydration[key], true, key);
const report = {
  date: '2026-10-01',
  upstream: 'adobe/react-spectrum@57c56b8',
  preact: '11.0.0',
  componentImplementation: 'dist/index.js',
  upstreamSource: {
    ...sourceAudit,
    patchedFiles: sourceAudit.patches.length,
    runtimeAdapter: 'compat/react.mjs',
    typeAdapters: ['compat/react.d.ts', 'compat/types.d.ts']
  },
  utilities: {
    status: utilities.status,
    implementation: utilities.implementation,
    checks: utilities.observations.map(x => x.label)
  },
  stately: {
    source: 'packages/react-stately/src',
    sourceMatches: 'adobe/react-spectrum@57c56b8',
    sourcePatches: 0,
    runtimeAdapter: 'compat/react.mjs',
    typeAdapter: 'compat/react.d.ts'
  },
  userAgent,
  summary: {
    runtimeExports: Object.keys(exports).length,
    componentsAndCollectionHelpers: componentNames.length,
    pages: pages.length,
    passed: pages.filter(x => x.status === 'pass').length,
    checks: pages.reduce((n, page) => n + page.checks.length, 0)
  },
  hydration,
  componentPages: mapping,
  supportExports: support,
  pages,
  limitations: [
    'The upstream Jest and Storybook suites were not migrated or run.',
    'Browser interactions were exercised in Chromium on Linux; Firefox, Safari, touch and screen readers were not tested.',
    'Representative configurations were exercised; passing a page does not verify every prop or interaction combination.',
    'Hydration was exercised for text input, date segments, a listbox and a menu from the distributed bundle.',
    'The standalone package is ESM only; React Spectrum and unrelated monorepo packages remain outside the port.'
  ]
};
await mkdir(new URL('verification/', root), {recursive: true});
await writeFile(new URL('verification/results.json', root), JSON.stringify(report, null, 2) + '\n');
console.log(report.summary);
