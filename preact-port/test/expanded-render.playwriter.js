// Run with Playwriter from the repository root. Each variant uses a fresh navigation.
const fs = require('node:fs');
state.page ||= await context.newPage();
state.page.setDefaultTimeout(5000);
const inventory = JSON.parse(
  fs.readFileSync('./preact-port/examples/generated/inventory.json', 'utf8')
);
state.expandedResults ||= [];
state.page.on('dialog', dialog => dialog.dismiss());
const cases = inventory.flatMap(entry => entry.stories.map(variant => ({entry, variant})));
for (const {entry, variant} of cases) {
  if (state.expandedResults.some(r => r.id === entry.id && r.variant === variant)) continue;
  const result = {
    id: entry.id,
    variant,
    group: entry.group,
    source: entry.variants?.find(v => v.id === variant)?.source || entry.source
  };
  try {
    await state.page.goto(
      `${state.baseURL || 'http://localhost:4100/'}?example=${entry.id}&story=${encodeURIComponent(variant)}`,
      {waitUntil: 'domcontentloaded'}
    );
    await state.page
      .locator('.example-canvas')
      .filter({hasText: 'Loading example…'})
      .waitFor({state: 'hidden'});
    const errors = state.page.getByTestId('error');
    if (await errors.count()) throw new Error(await errors.innerText());
    await state.page.getByTestId('example-ready').waitFor({state: 'attached'});
    result.snapshot = await snapshot({
      page: state.page,
      locator: state.page.locator('.example-canvas'),
      showDiffSinceLastCall: false
    });
    result.logs = await getLatestLogs({page: state.page, sinceLastCall: true});
    const runtimeErrors = result.logs.filter(l => /\[pageerror\]/i.test(l));
    if (runtimeErrors.length) throw new Error(runtimeErrors.join('\n'));
    result.status = 'pass';
  } catch (error) {
    result.status = 'fail';
    result.error = String(error);
    result.logs ||= await getLatestLogs({page: state.page, sinceLastCall: true});
    console.log('FAIL', entry.id, variant, result.error.slice(0, 400));
  }
  state.expandedResults.push(result);
  fs.mkdirSync('./preact-port/artifacts', {recursive: true});
  fs.writeFileSync(
    './preact-port/artifacts/expanded-render.json',
    JSON.stringify(state.expandedResults, null, 2)
  );
  if (state.expandedResults.length % 50 === 0)
    console.log(
      'Checked',
      state.expandedResults.length,
      '/',
      cases.length,
      'failed',
      state.expandedResults.filter(r => r.status === 'fail').length
    );
}
console.log(
  'Completed',
  state.expandedResults.length,
  'failed',
  state.expandedResults.filter(r => r.status === 'fail').length
);
