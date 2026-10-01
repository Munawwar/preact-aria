// Run from the repository root. Set state.upstreamBatch to priority, controls, colors, dates, drag, geometry, crud, or gallery.
const fs = require('node:fs');
state.page ||= await context.newPage();
state.page.setDefaultTimeout(15000);
state.page.setDefaultNavigationTimeout(30000);
state.checks ||= [];
state.equal = (actual, expected) => {
  if (actual !== expected) throw new Error(`Expected ${expected}, got ${actual}`);
};
state.observe = async label => {
  const tree = await snapshot({page: state.page, showDiffSinceLastCall: false});
  const logs = await getLatestLogs({page: state.page, sinceLastCall: true});
  if (
    (await state.page.getByTestId('error').count()) ||
    logs.some(log => /\[error\]|\[pageerror\]/i.test(log))
  )
    throw new Error(`Example error: ${state.currentExample} ${logs.join('\n')}`);
  state.checks.push({example: state.currentExample, label, url: state.page.url(), tree, logs});
  fs.mkdirSync('./preact-port/artifacts', {recursive: true});
  fs.writeFileSync(
    './preact-port/artifacts/upstream-interactions.json',
    JSON.stringify(state.checks, null, 2)
  );
  console.log(state.currentExample, label);
};
state.step = async (label, action, verify) => {
  await action();
  await state.observe(label);
  if (verify) await verify();
};
state.open = async id => {
  state.currentExample = id;
  await state.page.goto(`${state.baseURL || 'http://localhost:4100/'}?example=${id}`, {
    waitUntil: 'domcontentloaded'
  });
  await state.page
    .locator('.example-canvas')
    .filter({hasText: 'Loading example…'})
    .waitFor({state: 'hidden'});
  await state.observe('initial render');
};
switch (state.upstreamBatch || 'priority') {
  case 'priority': {
    await state.open('menu');
    await state.step(
      'pointer opens menu',
      () => state.page.getByRole('button', {name: 'Edit', exact: true}).click(),
      async () => state.equal(await state.page.getByRole('menuitem').count(), 4)
    );
    await state.step('hover opens nested Share menu', async () => {
      await state.page.getByRole('menuitem', {name: 'Share', exact: true}).hover();
      await state.page.getByRole('menuitem', {name: 'SMS', exact: true}).waitFor();
    });
    await state.step(
      'choose nested SMS item',
      () => state.page.getByRole('menuitem', {name: 'SMS', exact: true}).click(),
      async () =>
        state.page.getByRole('menu', {name: 'Edit', exact: true}).waitFor({state: 'hidden'})
    );
    await state.step('open menu for keyboard check', () =>
      state.page.getByRole('button', {name: 'Edit', exact: true}).click()
    );
    await state.step('End reaches Share', () => state.page.keyboard.press('End'));
    await state.step(
      'ArrowRight opens submenu',
      () => state.page.keyboard.press('ArrowRight'),
      async () => state.page.getByRole('menuitem', {name: 'SMS', exact: true}).waitFor()
    );
    await state.step('Escape closes submenu', () => state.page.keyboard.press('Escape'));
    await state.step(
      'Escape closes main menu',
      () => state.page.keyboard.press('Escape'),
      async () =>
        state.page.getByRole('menu', {name: 'Edit', exact: true}).waitFor({state: 'hidden'})
    );
    await state.open('popover');
    await state.step(
      'Help opens popover',
      () => state.page.getByRole('button', {name: 'Help', exact: true}).click(),
      async () => state.page.getByRole('dialog').waitFor()
    );
    await state.step(
      'Escape closes Help popover',
      () => state.page.keyboard.press('Escape'),
      async () => state.page.getByRole('dialog').waitFor({state: 'hidden'})
    );
    await state.open('select');
    await state.step('open ice cream select', () =>
      state.page.getByRole('button', {name: 'Select an item Ice cream flavor', exact: true}).click()
    );
    await state.step(
      'pointer selects Mint',
      () => state.page.getByRole('option', {name: 'Mint', exact: true}).click(),
      async () =>
        state.page.getByRole('button', {name: 'Mint Ice cream flavor', exact: true}).waitFor()
    );
    await state.page.getByRole('dialog').waitFor({state: 'hidden'});
    await state.step('open selected ice cream', () =>
      state.page.getByRole('button', {name: 'Mint Ice cream flavor', exact: true}).click()
    );
    await state.page.waitForFunction(
      () => document.activeElement?.getAttribute('role') === 'option'
    );
    await state.step('ArrowDown moves to Strawberry', () => state.page.keyboard.press('ArrowDown'));
    await state.page.waitForFunction(() => document.activeElement?.textContent === 'Strawberry');
    await state.step(
      'Enter commits Strawberry',
      () => state.page.keyboard.press('Enter'),
      async () =>
        state.page.getByRole('button', {name: 'Strawberry Ice cream flavor', exact: true}).waitFor()
    );
    await state.open('combobox');
    await state.step('focus flavor input', () =>
      state.page.getByRole('combobox', {name: 'Ice cream flavor'}).click()
    );
    await state.step(
      'filter flavor to Vanilla',
      () => state.page.getByRole('combobox', {name: 'Ice cream flavor'}).fill('Van'),
      async () => state.equal(await state.page.getByRole('option').count(), 1)
    );
    await state.step('ArrowDown focuses Vanilla', () =>
      state.page.getByRole('combobox').press('ArrowDown')
    );
    await state.step(
      'Enter selects Vanilla',
      () => state.page.getByRole('combobox').press('Enter'),
      async () => state.equal(await state.page.getByRole('combobox').inputValue(), 'Vanilla')
    );
    await state.open('datepicker');
    await state.step(
      'open Event date calendar',
      () => state.page.getByRole('button', {name: 'Calendar Event date'}).click(),
      async () => state.page.getByRole('dialog').waitFor()
    );

    break;
  }
  case 'controls': {
    await state.open('numberfield');
    await state.step(
      'increment Cookies',
      () => state.page.getByRole('button', {name: 'Increase Cookies'}).click(),
      async () =>
        state.equal(await state.page.getByRole('textbox', {name: 'Cookies'}).inputValue(), '0')
    );
    await state.open('searchfield');
    await state.step('focus Search', () =>
      state.page.getByRole('searchbox', {name: 'Search', exact: true}).click()
    );
    await state.step(
      'enter search text',
      () => state.page.getByRole('searchbox', {name: 'Search', exact: true}).fill('Preact'),
      async () => state.equal(await state.page.getByRole('searchbox').inputValue(), 'Preact')
    );
    await state.step(
      'clear search',
      () => state.page.getByRole('button', {name: 'Clear search'}).click(),
      async () => state.equal(await state.page.getByRole('searchbox').inputValue(), '')
    );
    await state.open('textfield');
    await state.step('focus field', () => state.page.getByRole('textbox').click());
    await state.step(
      'edit field',
      () => state.page.getByRole('textbox').fill('Preact input'),
      async () => state.equal(await state.page.getByRole('textbox').inputValue(), 'Preact input')
    );
    await state.open('form');
    await state.step(
      'required form rejects empty submit',
      () => state.page.getByRole('button', {name: 'Submit', exact: true}).click(),
      async () => {
        await state.page.locator('input[aria-invalid="true"]').waitFor();
      }
    );
    await state.open('table');
    await state.step(
      'select Games row',
      () =>
        state.page
          .locator('label')
          .filter({has: state.page.getByRole('checkbox', {name: 'Select Games', exact: true})})
          .click(),
      async () =>
        state.equal(
          await state.page.getByRole('checkbox', {name: 'Select Games', exact: true}).isChecked(),
          true
        )
    );
    await state.open('gridlist');
    await state.step(
      'select Desert Sunset',
      () =>
        state.page
          .locator('label')
          .filter({
            has: state.page.getByRole('checkbox', {name: 'Select Desert Sunset', exact: true})
          })
          .click(),
      async () =>
        state.equal(
          await state.page
            .getByRole('checkbox', {name: 'Select Desert Sunset', exact: true})
            .isChecked(),
          true
        )
    );
    await state.open('listbox');
    await state.step(
      'select Mint',
      () => state.page.getByRole('option', {name: 'Mint', exact: true}).click(),
      async () =>
        state.equal(
          await state.page
            .getByRole('option', {name: 'Mint', exact: true})
            .getAttribute('aria-selected'),
          'true'
        )
    );
    await state.open('tabs');
    await state.step(
      'select Empire tab',
      () => state.page.getByRole('tab', {name: 'Empire', exact: true}).click(),
      async () => state.page.getByRole('tabpanel').filter({hasText: 'Alea jacta est.'}).waitFor()
    );
    await state.open('tree');
    await state.step(
      'expand Documents',
      () => state.page.getByRole('button', {name: 'Expand Documents'}).click(),
      async () => state.page.getByRole('button', {name: 'Collapse Documents'}).waitFor()
    );
    await state.step(
      'collapse Documents by keyboard',
      () => state.page.getByRole('button', {name: 'Collapse Documents'}).press('Enter'),
      async () => state.page.getByRole('button', {name: 'Expand Documents'}).waitFor()
    );
    await state.open('navigationtree');
    await state.step(
      'collapse Files branch',
      () => state.page.getByRole('button', {name: 'Collapse Files'}).click(),
      async () => state.page.getByRole('button', {name: 'Expand Files'}).waitFor()
    );
    await state.step(
      'expand Shared branch',
      () => state.page.getByRole('button', {name: 'Expand Shared'}).click(),
      async () => state.page.getByRole('button', {name: 'Collapse Shared'}).waitFor()
    );
    await state.open('tooltip');
    await state.step('hover Save tooltip', async () => {
      await state.page.getByRole('heading', {name: 'Tooltip', exact: true}).hover();
      await state.page
        .getByRole('button')
        .filter({has: state.page.locator('svg')})
        .first()
        .hover();
      await state.page.getByRole('tooltip').waitFor();
    });

    break;
  }
  case 'colors': {
    await state.open('button');
    state.buttonAlert = null;
    state.page.once('dialog', async dialog => {
      state.buttonAlert = dialog.message();
      await dialog.accept();
    });
    await state.page.getByRole('button', {name: 'Press me'}).click();
    state.equal(state.buttonAlert, 'Hello world!');
    await state.observe('button activates original Hello world alert');
    await state.open('link');
    const popupPromise = state.page.waitForEvent('popup');
    await state.page.getByRole('link', {name: 'The missing link'}).click();
    const popup = await popupPromise;
    console.log('Original link opened new tab:', popup.url());
    await popup.close();
    await state.observe('link opens upstream target in separate tab');
    await state.open('breadcrumbs');
    if (!(await state.page.locator('.react-aria-Breadcrumbs').count()))
      throw new Error('Breadcrumbs missing');
    await state.observe('breadcrumb links render');
    await state.open('taggroup');
    await state.step(
      'select Mint tag',
      () => state.page.getByRole('gridcell', {name: 'Mint', exact: true}).click(),
      async () =>
        state.equal(
          await state.page
            .getByRole('row')
            .filter({has: state.page.getByRole('gridcell', {name: 'Mint', exact: true})})
            .getAttribute('aria-selected'),
          'true'
        )
    );
    await state.open('toolbar');
    await state.step(
      'toggle Bold in toolbar',
      () => state.page.getByRole('button', {name: 'Bold'}).click(),
      async () =>
        state.equal(
          await state.page.getByRole('button', {name: 'Bold'}).getAttribute('aria-pressed'),
          'true'
        )
    );
    await state.open('tokenfield');
    await state.step('focus Message token editor', () =>
      state.page.getByRole('textbox', {name: 'Message'}).click()
    );
    await state.step(
      'edit token field',
      () => state.page.getByRole('textbox', {name: 'Message'}).fill('Edited message'),
      async () =>
        state.equal(
          await state.page.getByRole('textbox', {name: 'Message'}).textContent(),
          'Edited message'
        )
    );
    await state.open('colorfield');
    await state.step('focus color text', () =>
      state.page.getByRole('textbox', {name: 'Color'}).click()
    );
    await state.step('enter hex color', () =>
      state.page.getByRole('textbox', {name: 'Color'}).fill('#336699')
    );
    await state.step(
      'commit color with Enter',
      () => state.page.getByRole('textbox', {name: 'Color'}).press('Enter'),
      async () =>
        state.equal(
          (await state.page.getByRole('textbox', {name: 'Color'}).inputValue()).toUpperCase(),
          '#336699'
        )
    );
    await state.open('colorslider');
    await state.step('focus opacity thumb', () =>
      state.page.locator('.react-aria-ColorThumb').click()
    );
    const opacity = Number(await state.page.getByRole('slider').inputValue());
    await state.step(
      'ArrowLeft changes color opacity',
      () => state.page.getByRole('slider').press('ArrowLeft'),
      async () => {
        if (Number(await state.page.getByRole('slider').inputValue()) >= opacity)
          throw new Error('Opacity did not decrease');
      }
    );
    await state.open('colorwheel');
    await state.step('focus wheel thumb', () =>
      state.page.locator('.react-aria-ColorThumb').click()
    );
    const hue = Number(await state.page.getByRole('slider').inputValue());
    await state.step(
      'ArrowRight changes wheel hue',
      () => state.page.getByRole('slider').press('ArrowRight'),
      async () => {
        if (Number(await state.page.getByRole('slider').inputValue()) === hue)
          throw new Error('Hue did not change');
      }
    );
    await state.open('colorarea');
    await state.step('focus color area thumb', () =>
      state.page.locator('.react-aria-ColorThumb').click()
    );
    const channel = Number(await state.page.getByRole('slider').first().inputValue());
    await state.step(
      'ArrowLeft changes color area channel',
      () => state.page.getByRole('slider').first().press('ArrowLeft'),
      async () => {
        if (Number(await state.page.getByRole('slider').first().inputValue()) === channel)
          throw new Error('Color area did not change');
      }
    );
    await state.open('colorswatchpicker');
    await state.step(
      'select third color swatch',
      () => state.page.getByRole('option').nth(2).click(),
      async () =>
        state.equal(
          await state.page.getByRole('option').nth(2).getAttribute('aria-selected'),
          'true'
        )
    );
    await state.open('colorswatch');
    await state.observe('color swatch exposes accessible color name');
    for (const id of ['meter', 'progressbar']) {
      await state.open(id);
      state.equal(
        await state.page
          .getByRole(id === 'meter' ? 'meter' : 'progressbar')
          .getAttribute('aria-valuenow'),
        '80'
      );
      await state.observe('read-only value is 80');
    }

    break;
  }
  case 'dates': {
    await state.open('datepicker');
    await state.step('open Event date calendar', () =>
      state.page.getByRole('button', {name: 'Calendar Event date'}).click()
    );
    await state.step(
      'choose October 15',
      () => state.page.getByRole('button', {name: /Thursday, October 15, 2026/}).click(),
      async () =>
        state.equal(
          await state.page
            .getByRole('spinbutton', {name: 'day, Event date', exact: true})
            .getAttribute('aria-valuenow'),
          '15'
        )
    );
    await state.step('focus date day', () =>
      state.page.getByRole('spinbutton', {name: 'day, Event date', exact: true}).click()
    );
    await state.step(
      'ArrowUp changes date to 16',
      () =>
        state.page.getByRole('spinbutton', {name: 'day, Event date', exact: true}).press('ArrowUp'),
      async () =>
        state.equal(
          await state.page
            .getByRole('spinbutton', {name: 'day, Event date', exact: true})
            .getAttribute('aria-valuenow'),
          '16'
        )
    );
    await state.open('calendar');
    await state.step(
      'next calendar month',
      () => state.page.locator('button[slot=next]').click(),
      async () => state.page.getByRole('heading', {name: 'November 2026'}).waitFor()
    );
    await state.step(
      'previous calendar month',
      () => state.page.locator('button[slot=previous]').click(),
      async () => state.page.getByRole('heading', {name: 'October 2026'}).waitFor()
    );
    await state.step('select October 15 in calendar', () =>
      state.page.getByRole('button', {name: /Thursday, October 15, 2026/}).click()
    );
    await state.open('rangecalendar');
    await state.step('select range start October 10', () =>
      state.page.getByRole('button', {name: /Saturday, October 10, 2026/}).click()
    );
    await state.step(
      'select range end October 15',
      () => state.page.getByRole('button', {name: /Thursday, October 15, 2026/}).click(),
      async () =>
        state.equal(await state.page.locator('[role="gridcell"][aria-selected="true"]').count(), 6)
    );
    await state.open('daterangepicker');
    await state.step('open date range calendar', () =>
      state.page.getByRole('button', {name: /Calendar Event date/}).click()
    );
    await state.step('pick range start October 10', () =>
      state.page.getByRole('button', {name: /Saturday, October 10, 2026/}).click()
    );
    await state.step(
      'pick range end October 15',
      () => state.page.getByRole('button', {name: /Thursday, October 15, 2026/}).click(),
      async () =>
        state.equal(await state.page.getByRole('spinbutton').filter({hasText: '15'}).count(), 1)
    );
    for (const id of ['dialog', 'modal']) {
      await state.open(id);
      await state.step(
        'open Sign up dialog',
        () => state.page.getByRole('button', {name: 'Sign up…'}).click(),
        async () => state.page.getByRole('dialog', {name: 'Sign up', exact: true}).waitFor()
      );
      await state.step('focus First Name', () =>
        state.page.getByRole('textbox', {name: 'First Name'}).click()
      );
      await state.step(
        'edit First Name',
        () => state.page.getByRole('textbox', {name: 'First Name'}).fill('Preact'),
        async () =>
          state.equal(
            await state.page.getByRole('textbox', {name: 'First Name'}).inputValue(),
            'Preact'
          )
      );
      await state.step(
        'Escape dismisses modal',
        () => state.page.keyboard.press('Escape'),
        async () => state.page.getByRole('dialog').waitFor({state: 'hidden'})
      );
    }
    await state.open('commandpalette');
    await state.step(
      'Ctrl+J opens command palette',
      () => state.page.keyboard.press('Control+j'),
      async () => state.page.getByRole('dialog').waitFor()
    );
    await state.page.getByRole('searchbox', {name: 'Search commands'}).click();
    await state.step(
      'filter commands',
      () => state.page.getByRole('searchbox').fill('folder'),
      async () => state.equal(await state.page.getByRole('menuitem').count(), 1)
    );
    await state.page.getByRole('searchbox').press('ArrowDown');
    await state.step(
      'Enter chooses command',
      () => state.page.keyboard.press('Enter'),
      async () => state.page.getByRole('dialog').waitFor({state: 'hidden'})
    );
    await state.page.getByRole('button', {name: /Open Command Palette/}).click();
    await state.page.getByRole('dialog').waitFor();
    await state.step(
      'Escape closes command palette',
      () => state.page.keyboard.press('Escape'),
      async () => state.page.getByRole('dialog').waitFor({state: 'hidden'})
    );

    break;
  }
  case 'drag': {
    state.page.setDefaultTimeout(15000);
    await state.open('kanban');
    await state.step(
      'pointer moves UI ticket to In Progress',
      () =>
        state.page
          .getByRole('row', {name: /^UI Button Alignment Issue/})
          .dragTo(state.page.getByRole('row', {name: /^Database Connection Error/}), {
            timeout: 20000
          }),
      async () =>
        state.page
          .getByRole('grid', {name: 'In Progress', exact: true})
          .getByRole('row', {name: /^UI Button Alignment Issue/})
          .waitFor()
    );
    await state.step('focus moved ticket', () =>
      state.page
        .getByRole('grid', {name: 'In Progress', exact: true})
        .getByRole('row', {name: /^UI Button Alignment Issue/})
        .click()
    );
    await state.step('Enter starts keyboard drag', () =>
      state.page
        .getByRole('button', {name: 'Drag UI Button Alignment Issue', exact: true})
        .press('Enter')
    );
    await state.step('Tab targets next list', () => state.page.keyboard.press('Tab'));

    await state.step(
      'Enter drops in Closed',
      () => state.page.keyboard.press('Enter'),
      async () =>
        state.page
          .getByRole('grid', {name: 'Closed', exact: true})
          .getByRole('row', {name: /^UI Button Alignment Issue/})
          .waitFor()
    );

    break;
  }
  case 'geometry': {
    await state.open('checkboxgroup');
    await state.step(
      'check group item',
      () => state.page.getByText('Soccer', {exact: true}).click(),
      async () =>
        state.equal(await state.page.getByRole('checkbox', {name: 'Soccer'}).isChecked(), true)
    );
    await state.open('radiogroup');
    await state.step(
      'pointer chooses Soccer',
      () => state.page.getByText('Soccer', {exact: true}).click(),
      async () =>
        state.equal(await state.page.getByRole('radio', {name: 'Soccer'}).isChecked(), true)
    );
    await state.step(
      'ArrowRight chooses Baseball',
      () => state.page.getByRole('radio', {name: 'Soccer'}).press('ArrowRight'),
      async () =>
        state.equal(await state.page.getByRole('radio', {name: 'Baseball'}).isChecked(), true)
    );
    await state.open('switch');
    await state.step(
      'pointer turns Wi-Fi on',
      () => state.page.getByText('Wi-Fi', {exact: true}).click(),
      async () => state.equal(await state.page.getByRole('switch').isChecked(), true)
    );
    await state.step(
      'Space turns Wi-Fi off',
      () => state.page.getByRole('switch').press('Space'),
      async () => state.equal(await state.page.getByRole('switch').isChecked(), false)
    );
    await state.open('togglebutton');
    await state.step(
      'Pin toggle selects',
      () => state.page.getByRole('button', {name: 'Pin', exact: true}).click(),
      async () =>
        state.equal(
          await state.page
            .getByRole('button', {name: 'Pin', exact: true})
            .getAttribute('aria-pressed'),
          'true'
        )
    );
    await state.open('togglebuttongroup');
    await state.step(
      'Center alignment selects',
      () => state.page.getByRole('radio', {name: 'Center'}).click(),
      async () =>
        state.equal(
          await state.page.getByRole('radio', {name: 'Center'}).getAttribute('aria-checked'),
          'true'
        )
    );
    await state.open('slider');
    await state.step('focus range start thumb', () =>
      state.page.locator('.react-aria-SliderThumb').first().click()
    );
    await state.step(
      'ArrowRight changes range start',
      () => state.page.getByRole('slider', {name: 'start Range'}).press('ArrowRight'),
      async () =>
        state.equal(await state.page.getByRole('slider', {name: 'start Range'}).inputValue(), '31')
    );
    const thumb = await state.page.locator('.react-aria-SliderThumb').first().boundingBox();
    const track = await state.page.locator('.react-aria-SliderTrack').boundingBox();
    state.equal(Math.round(thumb.y + thumb.height / 2 - (track.y + track.height / 2)), 0);
    await state.step(
      'pointer drags range start',
      async () => {
        await state.page.mouse.move(thumb.x + thumb.width / 2, thumb.y + thumb.height / 2);
        await state.page.mouse.down();
        await state.page.mouse.move(thumb.x + thumb.width / 2 + 30, thumb.y + thumb.height / 2, {
          steps: 10
        });
        await state.page.mouse.up();
      },
      async () => {
        if (Number(await state.page.getByRole('slider', {name: 'start Range'}).inputValue()) <= 31)
          throw new Error('Range thumb did not drag');
      }
    );
    await state.open('disclosure');
    const header = state.page.getByRole('button', {name: 'Manage your account'});
    await state.step(
      'pointer expands disclosure',
      () => header.click(),
      async () => state.equal(await header.getAttribute('aria-expanded'), 'true')
    );
    await state.step(
      'Enter collapses disclosure',
      () => header.press('Enter'),
      async () => state.equal(await header.getAttribute('aria-expanded'), 'false')
    );
    await state.page.waitForFunction(
      () =>
        document.querySelector('.react-aria-DisclosurePanel').getBoundingClientRect().height === 0
    );
    const panel = await state.page.locator('.react-aria-DisclosurePanel').boundingBox();
    state.equal(panel.height, 0);
    await state.open('disclosuregroup');
    await state.step(
      'open Billing Address',
      () => state.page.getByRole('button', {name: 'Billing Address'}).click(),
      async () =>
        state.equal(
          await state.page
            .getByRole('button', {name: 'Billing Address'})
            .getAttribute('aria-expanded'),
          'true'
        )
    );

    break;
  }
  case 'crud': {
    await state.open('crud');
    await state.step('focus plant search', () =>
      state.page.getByRole('searchbox', {name: 'Search plants'}).click()
    );
    await state.step(
      'filter to Aloe',
      () => state.page.getByRole('searchbox', {name: 'Search plants'}).fill('Aloe'),
      async () => state.equal(await state.page.getByRole('rowheader').count(), 1)
    );
    await state.step('open Aloe actions', () =>
      state.page.getByRole('button', {name: 'Actions', exact: true}).click()
    );
    await state.step(
      'open Edit Plant',
      () => state.page.getByRole('menuitem', {name: 'Edit…'}).click(),
      async () => state.page.getByRole('heading', {name: 'Edit Plant', exact: true}).waitFor()
    );
    await state.step('focus Common Name', () =>
      state.page.getByRole('combobox', {name: 'Common Name'}).click()
    );
    await state.step('edit common name', () =>
      state.page.getByRole('combobox', {name: 'Common Name'}).fill('Preact Aloe')
    );
    await state.step('commit custom name by blur', () =>
      state.page.getByRole('textbox', {name: 'Scientific Name'}).click()
    );
    await state.step(
      'save edited plant with native submit',
      () => state.page.getByRole('button', {name: 'Save', exact: true}).click(),
      async () => state.page.getByRole('rowheader', {name: /Preact Aloe/}).waitFor()
    );
    await state.step(
      'close Edit Plant after saving',
      () => state.page.getByRole('button', {name: 'Cancel', exact: true}).click(),
      async () => state.page.getByRole('dialog').waitFor({state: 'hidden'})
    );
    await state.step(
      'select edited plant',
      () =>
        state.page
          .locator('label')
          .filter({has: state.page.getByRole('checkbox', {name: /Select Preact Aloe/})})
          .click(),
      async () =>
        state.equal(
          await state.page.getByRole('checkbox', {name: /Select Preact Aloe/}).isChecked(),
          true
        )
    );
    await state.step('clear plant search', () =>
      state.page.getByRole('searchbox', {name: 'Search plants'}).click()
    );
    await state.step(
      'show all plants',
      () => state.page.getByRole('searchbox', {name: 'Search plants'}).fill(''),
      async () => state.equal(await state.page.getByRole('rowheader').count(), 20)
    );
    await state.step('open filters', () =>
      state.page.getByRole('button', {name: 'Filters', exact: true}).click()
    );

    break;
  }
  case 'gallery': {
    await state.open('emoji-picker');
    await state.step('open emoji picker', () =>
      state.page.getByRole('button', {name: 'Emoji'}).click()
    );
    await state.page.getByRole('searchbox').click();
    await state.step(
      'search rocket emojis',
      () => state.page.getByRole('searchbox').fill('rocket'),
      async () => state.equal(await state.page.getByRole('option').count(), 4)
    );
    await state.step(
      'choose rocket',
      () => state.page.getByRole('option', {name: '🚀', exact: true}).click(),
      async () => state.page.getByRole('button', {name: '🚀 Emoji'}).waitFor()
    );
    await state.open('sheet');
    await state.step(
      'open Motion sheet',
      () => state.page.getByRole('button', {name: 'Open sheet'}).click(),
      async () => state.page.getByRole('dialog').waitFor()
    );
    await state.page.waitForFunction(
      () => document.querySelector('[role=dialog]')?.parentElement.style.transform === 'none'
    );
    let sheet = await state.page.getByRole('dialog').boundingBox();
    await state.step(
      'drag dismisses sheet',
      async () => {
        await state.page.mouse.move(sheet.x + sheet.width / 2, sheet.y - 12);
        await state.page.mouse.down();
        await state.page.mouse.move(
          sheet.x + sheet.width / 2,
          (await state.page.viewportSize()).height - 10,
          {steps: 5}
        );
        await state.page.mouse.up();
      },
      async () => state.page.getByRole('dialog').waitFor({state: 'hidden'})
    );
    await state.open('swipeable-tabs');
    let panel = await state.page.getByRole('tabpanel').first().boundingBox();
    await state.step(
      'horizontal wheel selects Files',
      async () => {
        await state.page.mouse.move(panel.x + 100, panel.y + 100);
        await state.page.mouse.wheel(400, 0);
      },
      async () =>
        state.page
          .getByRole('tab', {name: 'Files', exact: true})
          .and(state.page.locator('[aria-selected=true]'))
          .waitFor()
    );
    await state.open('photos');
    await state.page.getByRole('searchbox').click();
    await state.step(
      'filter photos to pigeons',
      () => state.page.getByRole('searchbox').fill('pigeons'),
      async () =>
        state.equal(
          await state.page.getByRole('grid', {name: 'Photos'}).getByRole('row').count(),
          2
        )
    );
    await state.step(
      'open photo detail',
      () => state.page.getByRole('gridcell', {name: /Flock of pigeons Drag/}).dblclick(),
      async () => state.page.locator('.photo-detail').waitFor()
    );
    await state.step(
      'return to photo grid',
      () => state.page.locator('.photo-detail').locator('..').getByRole('button').first().click(),
      async () => state.page.getByRole('grid', {name: 'Photos'}).waitFor()
    );
    await state.step(
      'expand Nature folder',
      () => state.page.getByRole('button', {name: 'Expand Nature'}).click(),
      async () => state.page.getByRole('button', {name: 'Collapse Nature'}).waitFor()
    );
    await state.open('ios-list');
    await state.step('enter mailbox edit mode', () =>
      state.page.getByRole('button', {name: 'Edit', exact: true}).click()
    );
    await state.step(
      'select Emma message',
      () => state.page.getByRole('row', {name: /^Emma Johnson/}).click(),
      async () =>
        state.equal(
          await state.page.getByRole('row', {name: /^Emma Johnson/}).getAttribute('aria-selected'),
          'true'
        )
    );
    await state.step(
      'delete selected message',
      () => state.page.getByRole('button', {name: 'Delete', exact: true}).first().click(),
      async () => state.page.getByRole('row', {name: /^Emma Johnson/}).waitFor({state: 'hidden'})
    );
    const row = state.page.getByRole('row', {name: /^support@company/});
    const box = await row.boundingBox();
    await state.step('mouse swipe reveals delete action', async () => {
      await state.page.mouse.move(box.x + box.width - 40, box.y + box.height / 2);
      await state.page.mouse.down();
      await state.page.mouse.move(box.x + 80, box.y + box.height / 2, {steps: 12});
      await state.page.mouse.up();
    });
    await state.step(
      'delete swiped message',
      () => row.getByRole('button', {name: 'Delete', exact: true}).click(),
      async () => row.waitFor({state: 'hidden'})
    );

    break;
  }
  default:
    throw new Error('Unknown upstreamBatch');
}
