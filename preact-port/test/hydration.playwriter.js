const observations = [];
const observe = async label => {
  const tree = await snapshot({page: state.page});
  const logs = await getLatestLogs({page: state.page, sinceLastCall: true});
  if (logs.some(x => /\[error\]|\[pageerror\]/i.test(x))) throw new Error(logs.join('\n'));
  observations.push({label, tree, logs});
  console.log(tree);
  console.log(logs);
};
await state.page.goto('http://localhost:4100/hydration.html', {timeout: 15000});
await observe('initial native hydrate');
console.log(await state.page.evaluate(() => window.__hydration));
const input = state.page.getByRole('textbox', {name: 'Hydrated name'});
await input.click();
await observe('focus hydrated input');
await input.fill('Client value');
await observe('edit hydrated input');
await state.page.getByRole('option', {name: 'Beta'}).click();
await observe('select hydrated collection item');
await state.page.getByRole('button', {name: 'Hydrated actions'}).click();
await observe('open hydrated menu');
await state.page.getByRole('menuitem', {name: 'Copy', exact: true}).click();
await observe('activate hydrated menu item');
const day = state.page.getByRole('spinbutton', {name: /day, Hydrated date/});
await day.press('ArrowUp');
await observe('edit hydrated date segment');
if ((await day.getAttribute('aria-valuenow')) !== '2')
  throw new Error('Hydrated date segment did not update');
const result = await state.page.getByTestId('result').textContent();
const hydration = await state.page.evaluate(() => window.__hydration);
if (
  !hydration.retainedOption ||
  !hydration.retainedSegment ||
  !hydration.retainedInput ||
  !hydration.retainedId ||
  result !== 'Client value; b; copy'
)
  throw new Error(JSON.stringify({hydration, result}));
require('node:fs').writeFileSync(
  '/tmp/aria-hydration-results.json',
  JSON.stringify({status: 'pass', hydration, result, checks: observations.map(x => x.label)})
);

require('node:fs').writeFileSync(
  './preact-port/artifacts/hydration-observations.json',
  JSON.stringify(observations, null, 2)
);
