const {run} = await import(`./preact-port/scripts/browser-suite.mjs?v=${Date.now()}`);
const batch = await run({page: state.page, snapshot, getLatestLogs}, state.cases || ['menu']);
state.results = (state.results || [])
  .filter(x => !batch.some(b => b.name === x.name))
  .concat(batch);
require('node:fs').writeFileSync(
  '/tmp/aria-priority-results.json',
  JSON.stringify(state.results, null, 2)
);

console.log(
  state.results.map(({name, status, error, evidence}) => ({
    name,
    status,
    error: error?.split('\n')[0],
    steps: evidence.length
  }))
);
if (batch.some(x => x.status === 'fail'))
  throw new Error(
    batch
      .filter(x => x.status === 'fail')
      .map(x => `${x.name}: ${x.error}`)
      .join('\n')
  );
