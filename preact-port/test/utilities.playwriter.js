const observations = [];
const observe = async label => {
  const tree = await snapshot({page: state.page});
  const logs = await getLatestLogs({page: state.page, sinceLastCall: true});
  if (logs.some(x => /\[error\]|\[pageerror\]/i.test(x))) throw new Error(logs.join('\n'));
  observations.push({label, tree, logs});
};
await state.page.goto('http://localhost:4100/utilities.html', {timeout: 15000});
await state.page.getByRole('heading', {name: 'Upstream utilities with Preact aliases'}).waitFor();
await observe('initial alias utility page');
const check = async (label, count) => {
  await observe(label);
  if ((await state.page.getByTestId('utility-count').textContent()) !== String(count))
    throw new Error(`Both chained handlers did not run: expected ${count}`);
  const result = JSON.parse(await state.page.getByTestId('utility-result').textContent());
  for (const [key, value] of Object.entries(result))
    if (value !== true) throw new Error(`${key}: ${value}`);
  if (Object.keys(result).length !== 8) throw new Error('Missing utility assertions');
};
await state.page.getByRole('button', {name: 'Shadow action'}).click();
await check(
  'pointer action: native and synthetic targets, focus, containment, propagation, refs, ID and chained handlers',
  2
);
await state.page.getByRole('button', {name: 'Before shadow'}).click();
await observe('focus before shadow root');
await state.page.keyboard.press('Tab');
await observe('tab into shadow root');
await state.page.keyboard.press('Space');
await check('keyboard action through shadow root with both chained handlers', 4);
require('node:fs').writeFileSync(
  './preact-port/artifacts/utilities-observations.json',
  JSON.stringify(
    {
      status: 'pass',
      implementation: 'unchanged upstream utility source with aliases',
      observations
    },
    null,
    2
  )
);
console.log(
  'PASS upstream utilities: pointer, Tab, Space, native/synthetic shadow paths, focus, containment, propagation, refs, IDs and chained handlers'
);
