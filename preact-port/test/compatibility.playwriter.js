const assert = require('node:assert').strict;
const fs = require('node:fs');
state.page ||= await context.newPage();
state.page.setDefaultTimeout(12000);
state.guideChecks = [];
const base = state.baseURL || 'http://localhost:4111/';
const observe = async label => {
  const logs = await getLatestLogs({page: state.page, sinceLastCall: true});
  assert.equal(logs.filter(log => /\[pageerror\]|\[error\]/i.test(log)).length, 0);
  state.guideChecks.push({label, url: state.page.url(), status: 'pass', logs});
  fs.writeFileSync(
    './preact-port/artifacts/compatibility-page.json',
    JSON.stringify(state.guideChecks, null, 2)
  );
  console.log('PASS', label, state.page.url());
  console.log(await snapshot({page: state.page, search: /navigation|heading|Skip to/}));
};
await state.page.setViewportSize({width: 1440, height: 1000});
await state.page.goto(base + '?example=menu', {waitUntil: 'domcontentloaded'});
await state.page.getByRole('button', {name: 'Edit', exact: true}).waitFor();
await observe('Examples render with the optimized build');
await state.page.getByRole('link', {name: 'Compatibility guide', exact: true}).click();
await state.page.getByRole('heading', {name: 'Preact compatibility guide', exact: true}).waitFor();
assert.equal(await state.page.locator('script').count(), 0);
assert.equal(await state.page.getByRole('table').count(), 3);
await observe('Header opens the static guide and its tables');
await state.page.screenshot({path: '/tmp/preact-compatibility-desktop.png', scale: 'css'});
await state.page.reload({waitUntil: 'domcontentloaded'});
await observe('Direct guide reload works');
await state.page.keyboard.press('Tab');
assert.equal(await state.page.locator(':focus').getAttribute('href'), '#guide');
await observe('First keyboard stop is Skip to guide');
await state.page.keyboard.press('Enter');
assert.equal(await state.page.locator(':focus').getAttribute('id'), 'guide');
await observe('Skip link focuses the guide');
await state.page
  .getByRole('navigation', {name: 'On this page'})
  .getByRole('link', {name: 'Component interfaces', exact: true})
  .click();
assert.equal(new URL(state.page.url()).hash, '#component-interfaces');
await observe('Sidebar jumps to the component interfaces');
await state.page.getByRole('link', {name: 'Back to top', exact: true}).click();
assert.equal(new URL(state.page.url()).hash, '#guide');
await observe('Back to top returns to the guide');
await state.page.setViewportSize({width: 390, height: 844});
await state.page.goto(base + 'compatibility.html', {waitUntil: 'domcontentloaded'});
const layout = await inspect({locator: state.page.locator('html')});
assert(!/Scroll X:.*overflowing=true/.test(layout), layout);
await observe('Mobile guide has no document horizontal overflow');
await state.page.screenshot({path: '/tmp/preact-compatibility-mobile.png', scale: 'css'});
await state.page.setViewportSize({width: 1440, height: 1000});
await state.page
  .getByRole('navigation', {name: 'Site navigation'})
  .getByRole('link', {name: 'Examples', exact: true})
  .click();
await state.page.getByRole('button', {name: 'Edit', exact: true}).waitFor();
await observe('Examples link returns to a working component');
console.log(`Compatibility page: ${state.guideChecks.length} checks passed.`);
