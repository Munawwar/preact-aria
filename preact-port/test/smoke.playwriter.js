state.smokeResults ||= [];
const names = state.smokeCases || (await state.page.evaluate(() => window.__examples));
for (const name of names) {
  await state.page.goto(`http://localhost:4100/?example=${name}`, {
    waitUntil: 'domcontentloaded',
    timeout: 15000
  });
  await state.page
    .getByRole('heading', {name: `${name} — Preact 11`, exact: true})
    .waitFor({timeout: 15000});
  const tree = await snapshot({page: state.page, showDiffSinceLastCall: false});
  const logs = await getLatestLogs({page: state.page, sinceLastCall: true});
  const error = (await state.page.getByTestId('error').count())
    ? await state.page.getByTestId('error').textContent()
    : null;
  const covered = await state.page.evaluate(name => window.__coverage[name], name);
  const entry = {
    name,
    covered,
    status: error || logs.some(x => /\[error\]|\[pageerror\]/i.test(x)) ? 'fail' : 'rendered',
    error,
    tree,
    logs
  };
  state.smokeResults = state.smokeResults.filter(x => x.name !== name).concat(entry);
  console.log(JSON.stringify({name, status: entry.status, error, logs}));
}
require('node:fs').writeFileSync(
  '/tmp/aria-smoke-results.json',
  JSON.stringify(state.smokeResults, null, 2)
);
