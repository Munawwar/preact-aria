import assert from 'node:assert/strict';
const {catalogTests} = await import(
  new URL('./catalog-suite.mjs', import.meta.url).href + '?v=' + Date.now()
);
import {mkdirSync, writeFileSync} from 'node:fs';

export async function run({page, snapshot, getLatestLogs}, names = ['menu']) {
  mkdirSync(new URL('../artifacts/evidence/', import.meta.url), {recursive: true});
  page.setDefaultTimeout(3500);
  const results = [];
  let currentStep;
  const observe = async () => {
    const tree = await snapshot({page});
    const logs = await getLatestLogs({page, sinceLastCall: true});
    if (await page.getByTestId('error').count())
      throw new Error(await page.getByTestId('error').textContent());
    assert(!logs.some(x => /\[error\]|\[pageerror\]/i.test(x)), logs.join('\n'));
    return {url: page.url(), tree, logs};
  };
  let evidence;
  const step = async (label, action, verify) => {
    currentStep = label;
    await action();
    const observation = await observe();
    if (verify) await verify();
    evidence.push({label, ...observation});
    writeFileSync('/tmp/aria-current-steps.json', JSON.stringify({currentStep, evidence}, null, 2));
  };
  const result = text => async () => {
    await page
      .getByTestId('result')
      .filter({hasText: text})
      .waitFor({state: 'attached', timeout: 3000});
    assert((await page.getByTestId('result').textContent()).includes(text));
  };
  const attr = (locator, name, value) => async () => {
    await locator
      .and(page.locator(`[${name}="${value}"]`))
      .waitFor({state: 'attached', timeout: 3000});
    assert.equal(await locator.getAttribute(name), value);
  };
  const focus = locator => async () =>
    locator.and(page.locator(':focus')).waitFor({state: 'attached', timeout: 3000});
  const outside = async () => {
    const box = await page
      .getByRole('heading', {name: /Preact 11/, includeHidden: true})
      .boundingBox();
    assert(box);
    await page.mouse.click(box.x + 3, box.y + 3);
  };
  const tests = {
    ...catalogTests({page, step, result, attr, focus}),
    async menu() {
      const trigger = page.getByRole('button', {name: 'Actions', exact: true});
      await step(
        'pointer opens menu',
        () => trigger.click(),
        attr(trigger, 'aria-expanded', 'true')
      );
      await step(
        'disabled item exposes aria-disabled',
        async () => {},
        attr(page.getByRole('menuitemcheckbox', {name: 'Delete'}), 'aria-disabled', 'true')
      );
      await step(
        'pointer selects Copy',
        () => page.getByRole('menuitemcheckbox', {name: 'Copy', exact: true}).click(),
        result('copy; selected:copy')
      );
      await step(
        'Escape closes and restores trigger focus',
        () => page.keyboard.press('Escape'),
        focus(trigger)
      );
      await step('ArrowDown opens keyboard menu', () => trigger.press('ArrowDown'));
      await step(
        'End moves to Share',
        () => page.keyboard.press('End'),
        focus(page.getByRole('menuitem', {name: 'Share'}))
      );
      await step(
        'ArrowRight opens submenu',
        () => page.keyboard.press('ArrowRight'),
        async () => page.getByRole('menuitem', {name: 'Email', exact: true}).waitFor()
      );
      await step(
        'Enter activates submenu item',
        () => page.keyboard.press('Enter'),
        result('email')
      );
      await step('reopen after submenu action', () => trigger.click());
      await step('outside pointer dismisses', outside, attr(trigger, 'aria-expanded', 'false'));
    },
    async popover() {
      const trigger = page.getByRole('button', {name: 'Open popover'});
      await step(
        'open dialog popover',
        () => trigger.click(),
        async () => page.getByRole('dialog', {name: 'Popover details'}).waitFor()
      );
      await step('type inside popover', async () => {
        await page.getByRole('textbox', {name: 'Inside popover'}).click();
        await page.getByRole('textbox', {name: 'Inside popover'}).fill('preact');
      });
      await step(
        'Escape restores trigger focus',
        () => page.keyboard.press('Escape'),
        focus(trigger)
      );
      await step('reopen popover', () => trigger.click());
      await step(
        'close button restores focus',
        () => page.getByRole('button', {name: 'Close', exact: true}).click(),
        focus(trigger)
      );
      await step('reopen for outside dismissal', () => trigger.click());
      await step('outside dismissal', outside, async () =>
        assert.equal(await page.getByRole('dialog').count(), 0)
      );
    },
    async select() {
      const trigger = page.getByRole('button', {name: /Fruit/});
      await step('open select', () => trigger.click());
      await step(
        'disabled option',
        async () => {},
        attr(page.getByRole('option', {name: 'Cherry'}), 'aria-disabled', 'true')
      );
      await step(
        'select Banana',
        () => page.getByRole('option', {name: 'Banana'}).click(),
        result('banana')
      );
      await step('keyboard opens', () => trigger.press('ArrowDown'));
      await step('Home selects first focus', () => page.keyboard.press('Home'));
      await step('Enter selects Apple', () => page.keyboard.press('Enter'), result('apple'));
      await step('open for cancellation', () => trigger.click());
      await step(
        'Escape preserves value and returns focus',
        () => page.keyboard.press('Escape'),
        focus(trigger)
      );
    },
    async combobox() {
      const input = page.getByRole('combobox', {name: 'Fruit'});
      await step('focus input', () => input.click());
      await step(
        'filter by input',
        () => input.fill('Ba'),
        async () => {
          await page.getByRole('option', {name: 'Banana'}).waitFor();
          assert.equal(await page.getByRole('option').count(), 1);
        }
      );
      await step('keyboard focuses filtered option', () => input.press('ArrowDown'));
      await step('Enter selects Banana', () => input.press('Enter'), result('banana'));
      await step(
        'show full collection',
        () => page.getByRole('button', {name: 'Show suggestions Fruit'}).click(),
        async () => assert.equal(await page.getByRole('option').count(), 3)
      );
      await step(
        'pointer selects Apple',
        () => page.getByRole('option', {name: 'Apple'}).click(),
        result('apple')
      );
      await step('open for Escape', () =>
        page.getByRole('button', {name: 'Show suggestions Fruit'}).click()
      );
      await step(
        'Escape closes listbox',
        () => input.press('Escape'),
        attr(input, 'aria-expanded', 'false')
      );
    },
    async dnd() {
      const handle = page.getByRole('button', {name: 'Drag Apple', exact: true});

      await step('Enter enters drag mode', () => handle.press('Enter'));
      await step('next drop target', () => page.keyboard.press('ArrowDown'));
      await step(
        'drop with Enter',
        () => page.keyboard.press('Enter'),
        result('Banana,Apple,Cherry')
      );
      await step(
        'native pointer drag to drop zone',
        () =>
          page
            .getByRole('row', {name: /Apple/})
            .dragTo(page.getByText('Drop fruit here', {exact: true}), {timeout: 10000}),
        result('dropped:Apple')
      );
    },
    async datepicker() {
      await step('open calendar', () =>
        page.getByRole('button', {name: 'Calendar Appointment'}).click()
      );
      await step(
        'pick October 15',
        () => page.getByRole('button', {name: /Thursday, October 15, 2026/}).click(),
        result('2026-10-15')
      );
      await step('reopen calendar', () =>
        page.getByRole('button', {name: 'Calendar Appointment'}).click()
      );
      await step(
        'next month',
        () => page.getByRole('banner').getByRole('button', {name: 'Next', exact: true}).click(),
        async () => page.getByRole('heading', {name: 'November 2026'}).waitFor()
      );
      await step('previous month', () =>
        page.getByRole('banner').getByRole('button', {name: 'Previous', exact: true}).click()
      );
      await step('Escape closes calendar', () => page.keyboard.press('Escape'));
      const day = page.getByRole('spinbutton', {name: /day/});
      await step('focus day segment', () => day.click());
      await step('ArrowUp edits segment', () => day.press('ArrowUp'), result('2026-10-16'));
    }
  };
  for (const name of names) {
    evidence = [];
    try {
      await page.goto(`http://localhost:4100/?example=${name}`, {
        waitUntil: 'domcontentloaded',
        timeout: 15000
      });
      await page
        .getByRole('heading', {name: `${name} — Preact 11`, exact: true})
        .waitFor({timeout: 15000});
      evidence.push({label: 'initial render', ...(await observe())});
      await tests[name]();
      results.push({name, status: 'pass', evidence});
      writeFileSync('/tmp/aria-latest-tests.json', JSON.stringify(results, null, 2));
      writeFileSync(
        new URL(`../artifacts/evidence/${name}.json`, import.meta.url),
        JSON.stringify(results.at(-1), null, 2)
      );
      console.log(`PASS ${name} (${evidence.length - 1} interaction checks)`);
    } catch (error) {
      results.push({name, status: 'fail', error: `${currentStep}: ${error}`, evidence});
      writeFileSync('/tmp/aria-latest-tests.json', JSON.stringify(results, null, 2));
      writeFileSync(
        new URL(`../artifacts/evidence/${name}.json`, import.meta.url),
        JSON.stringify(results.at(-1), null, 2)
      );
      // Preserve the failure record even if navigation disconnected the driver.
      console.log(`FAIL ${name}: ${error}`);
      try {
        console.log(await snapshot({page}));
        console.log(await getLatestLogs({page, sinceLastCall: true}));
      } catch (observationError) {
        console.log(`Failure observation unavailable: ${observationError}`);
      }
    }
  }
  return results;
}
