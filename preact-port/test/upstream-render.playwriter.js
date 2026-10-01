// Run from the repository root with Playwriter. Repeat until all variants are recorded.
const fs = require('node:fs');
state.page ||= await context.newPage();
state.page.setDefaultTimeout(15000);
const inventory = JSON.parse(
  fs.readFileSync('./preact-port/examples/generated/inventory.json', 'utf8')
);
state.renderResults ||= [];
let remaining = 15;
for (const entry of inventory) {
  for (const variant of entry.stories) {
    if (
      state.renderResults.some(
        result => result.id === entry.id && result.variant === variant && result.status === 'pass'
      )
    )
      continue;
    if (remaining-- <= 0) break;
    await state.page.goto(
      `${state.baseURL || 'http://localhost:4100/'}?example=${entry.id}&story=${variant}`,
      {waitUntil: 'domcontentloaded'}
    );
    const canvas = state.page.getByRole('region', {name: `${entry.title} example`, exact: true});
    await canvas.waitFor();
    await canvas.filter({hasText: 'Loading example…'}).waitFor({state: 'hidden'});
    const tree = await snapshot({page: state.page, locator: canvas});
    const logs = await getLatestLogs({page: state.page, sinceLastCall: true});
    const failed =
      (await state.page.getByTestId('error').count()) ||
      logs.some(log => /\[error\]|\[pageerror\]/i.test(log));
    state.renderResults = state.renderResults.filter(
      result => result.id !== entry.id || result.variant !== variant
    );
    state.renderResults.push({
      id: entry.id,
      variant,
      snapshot: tree,
      logs,
      status: failed ? 'fail' : 'pass'
    });
    fs.mkdirSync('./preact-port/artifacts', {recursive: true});
    fs.writeFileSync(
      './preact-port/artifacts/upstream-render.json',
      JSON.stringify(state.renderResults, null, 2)
    );
    console.log(entry.id, variant, failed ? 'fail' : 'pass');
    if (failed) throw new Error(`Render failure: ${entry.id}/${variant}`);
  }
}
console.log(
  `${state.renderResults.filter(result => result.status === 'pass').length} variants passed`
);
