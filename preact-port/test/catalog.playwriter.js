// Run from the repository root with an isolated Playwriter session.
state.page ||= await context.newPage();
await state.page.goto('http://localhost:4100/?example=menu', {timeout: 15000});
console.log(await snapshot({page: state.page}));
console.log(await getLatestLogs({page: state.page, sinceLastCall: true}));
const metadata = await state.page.evaluate(() => ({
  coverage: window.__coverage,
  examples: window.__examples,
  userAgent: navigator.userAgent
}));
require('node:fs').writeFileSync(
  './preact-port/artifacts/browser-coverage.json',
  JSON.stringify(metadata, null, 2)
);
// Native invalid form submission disconnected this browser's Playwriter extension.
// The form page was verified separately through the browser control API.
state.cases = metadata.examples.filter(name => name !== 'form');
const {run} = await import(`./preact-port/scripts/browser-suite.mjs?v=${Date.now()}`);
const results = await run({page: state.page, snapshot, getLatestLogs}, state.cases);
console.log(results.map(x => ({name: x.name, status: x.status})));
if (results.some(x => x.status === 'fail'))
  throw new Error(
    results
      .filter(x => x.status === 'fail')
      .map(x => `${x.name}: ${x.error}`)
      .join('\n')
  );
