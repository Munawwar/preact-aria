import assert from 'node:assert/strict';

export function catalogTests({page, step, result, attr, focus}) {
  const button = name => page.getByRole('button', {name, exact: true});
  const text = name => page.getByText(name, {exact: true});
  // Inline labels have clipped input descendants; use the visible label's measured bounds.
  const clickLocator = async locator => {
    const p = await locator.evaluate(el => {
      const r = el.getBoundingClientRect();
      return {x: r.x + r.width / 2, y: r.y + r.height / 2};
    });
    await page.mouse.click(p.x, p.y);
  };
  const clickLabel = async name => {
    const point = await text(name).evaluate(el => {
      const r = el.getBoundingClientRect();
      return {x: r.x + r.width / 2, y: r.y + r.height / 2};
    });
    await page.mouse.click(point.x, point.y);
  };
  const present = locator => async () => locator.waitFor({timeout: 3000});
  const absent = locator => async () => locator.waitFor({state: 'hidden', timeout: 3000});
  const change = async (label, locator, action) => {
    const before = await page.getByTestId('result').textContent();
    await step(
      label,
      () => action(locator),
      async () => assert.notEqual(await page.getByTestId('result').textContent(), before)
    );
  };
  const tests = {
    async stately() {
      await step('async initial load', async () => {}, result('idle; items:Banana,Apple'));
      const toggle = button('Controlled toggle');
      await step(
        'controlled state becomes selected',
        () => toggle.click(),
        attr(toggle, 'aria-pressed', 'true')
      );
      await step(
        'controlled state becomes unselected',
        () => toggle.press('Space'),
        attr(toggle, 'aria-pressed', 'false')
      );
      await step(
        'async list selection',
        () => page.getByRole('option', {name: 'Apple', exact: true}).click(),
        result('selected:a')
      );
      await step(
        'async load more appends records',
        () => button('Load more records').click(),
        result('idle; items:Banana,Apple,Cherry')
      );
      await step(
        'async sort orders records',
        () => button('Sort records').click(),
        result('idle; items:Apple,Banana,Cherry')
      );
      const filter = page.getByRole('textbox', {name: 'Filter records'});
      await step('focus controlled filter', () => filter.click());
      await step(
        'async filter reloads records',
        () => filter.fill('App'),
        result('idle; items:Apple;')
      );
      await step(
        'clear filter reloads initial records',
        () => filter.fill(''),
        result('idle; items:Banana,Apple;')
      );
      await step(
        'append records before reload',
        () => button('Load more records').click(),
        result('idle; items:Banana,Apple,Cherry')
      );
      await step(
        'reload replaces appended records',
        () => button('Reload records').click(),
        result('idle; items:Banana,Apple;')
      );
    },
    async refs() {
      await step(
        'function component press ref',
        () => button('Function pressable').press('Space'),
        result('press ref preserved')
      );
      await step(
        'function component focus ref',
        () => button('Function pressable').press('Tab'),
        result('focus ref preserved')
      );
    },
    async button() {
      await step('pointer press', () => button('Press').click(), result('1'));
      await step('keyboard Space press', () => button('Press').press('Space'), result('2'));
      await step('disabled button', async () => {}, attr(button('Disabled'), 'disabled', ''));
    },
    async toggle() {
      await step(
        'independent toggle',
        () => button('Independent toggle').click(),
        attr(button('Independent toggle'), 'aria-pressed', 'true')
      );
      await step(
        'group selects Bold',
        () => page.getByRole('radio', {name: 'Bold'}).click(),
        result('a')
      );
      await step(
        'keyboard selects Italic',
        () => page.getByRole('radio', {name: 'Italic'}).press('Space'),
        result('b')
      );
    },
    async checkbox() {
      await step(
        'native checkbox via label',
        () => clickLabel('Independent checkbox'),
        async () =>
          assert(await page.getByRole('checkbox', {name: 'Independent checkbox'}).isChecked())
      );
      await step('composed CheckboxButton toggles', () => clickLabel('Beta'), result('b'));
      await step('group native checkbox via label', () => clickLabel('Alpha'), result('b,a'));
    },
    async radio() {
      await step('composed RadioButton selects', () => clickLabel('Beta'), result('b'));
    },
    async switch() {
      await step(
        'composed SwitchButton toggles',
        () => clickLabel('Notifications'),
        result('true')
      );
    },
    async textfield() {
      const input = page.getByRole('textbox', {name: 'Name'});
      await step('focus Name', () => input.click());
      await step('controlled input', () => input.fill('Ada'), result('Ada'));
      await step(
        'description association',
        async () => {},
        async () => assert(await input.getAttribute('aria-describedby'))
      );
    },
    async textarea() {
      const input = page.getByRole('textbox', {name: 'Notes'});
      await step('focus textarea', () => input.click());
      await step('multiline input', () => input.fill('First\nSecond'), result('First\nSecond'));
    },
    async search() {
      const input = page.getByRole('searchbox', {name: 'Search'});
      await step('focus search', () => input.click());
      await step('input updates', () => input.fill('Preact'), result('Preact'));
      await step(
        'clear search',
        () => button('Clear search').click(),
        async () => assert.equal(await input.inputValue(), '')
      );
    },
    async number() {
      await step('increment button', () => button('Increase Quantity').click(), result('6'));
      await step('decrement button', () => button('Decrease Quantity').click(), result('5'));
      await step(
        'ArrowUp spinbutton',
        () => page.getByRole('textbox', {name: 'Quantity'}).press('ArrowUp'),
        result('6')
      );
    },
    async slider() {
      const slider = page.getByRole('slider', {name: 'Volume'});
      const centered = async () => {
        const offset = await page.locator('.react-aria-SliderThumb').evaluate(thumb => {
          const t = thumb.getBoundingClientRect();
          const r = thumb.parentElement.querySelector('.slider-rail').getBoundingClientRect();
          return t.y + t.height / 2 - (r.y + r.height / 2);
        });
        assert(Math.abs(offset) < 0.5, `Slider thumb is ${offset}px off the rail center.`);
      };
      await step('thumb is centered on rail', async () => {}, centered);
      await step('keyboard increments slider', () => slider.press('ArrowRight'), result('41'));
      await step('End sets maximum', () => slider.press('End'), result('100'));
      await step('Home sets minimum', () => slider.press('Home'), result('0'));
      await step(
        'pointer click sets midpoint',
        () => page.locator('.react-aria-SliderTrack').click(),
        result('50')
      );
      await step('thumb stays centered after input', async () => {}, centered);
    },
    async meter() {
      await step(
        'meter exposes value',
        async () => {},
        attr(page.getByRole('meter', {name: 'Storage'}), 'aria-valuenow', '50')
      );
      await step(
        'progress exposes value',
        async () => {},
        attr(page.getByRole('progressbar', {name: 'Loading'}), 'aria-valuenow', '25')
      );
    },
    async tabs() {
      await step(
        'pointer changes tab',
        () => page.getByRole('tab', {name: 'Beta'}).click(),
        present(page.getByRole('tabpanel', {name: 'Beta'}))
      );
      await step(
        'ArrowLeft returns to Alpha',
        () => page.getByRole('tab', {name: 'Beta'}).press('ArrowLeft'),
        attr(page.getByRole('tab', {name: 'Alpha'}), 'aria-selected', 'true')
      );
    },
    async disclosure() {
      const collapsed = async () => {
        const heights = await page
          .locator('.react-aria-DisclosurePanel')
          .evaluateAll(panels => panels.map(panel => panel.getBoundingClientRect().height));
        assert(
          heights.length > 0 && heights.every(height => height === 0),
          `Closed accordion panels reserve space: ${heights.join(', ')}px.`
        );
      };
      await step('closed panels reserve no space', async () => {}, collapsed);
      await step(
        'expand panel',
        () => button('Alpha details').click(),
        present(text('Alpha panel'))
      );
      await step(
        'collapse with Enter',
        () => button('Alpha details').press('Enter'),
        attr(button('Alpha details'), 'aria-expanded', 'false')
      );
      await step('collapsed panels reserve no space after toggling', async () => {}, collapsed);
    },
    async modal() {
      const trigger = button('Open modal');
      await step(
        'open modal',
        () => trigger.click(),
        present(page.getByRole('dialog', {name: 'Modal details'}))
      );
      await step('Escape closes modal', () => page.keyboard.press('Escape'), focus(trigger));
      await step('reopen modal', () => trigger.click());
      await step('close button', () => button('Close').click(), focus(trigger));
    },
    async tooltip() {
      await step(
        'hover tooltip',
        async () => {
          await page.mouse.move(1, 1);
          await button('Help').hover();
        },
        present(page.getByRole('tooltip'))
      );
      await step(
        'leave hides tooltip',
        () => page.getByRole('heading', {name: /Preact 11/, includeHidden: true}).hover(),
        absent(page.getByRole('tooltip'))
      );
      await step(
        'keyboard focus tooltip',
        async () => {
          await page.getByRole('link', {name: 'Skip to example'}).press('Enter');
          await page.getByRole('main').press('Tab');
          await page.getByRole('tab', {name: 'Basic tests', exact: true}).press('Tab');
        },
        present(page.getByRole('tooltip'))
      );
      await step(
        'Escape closes tooltip',
        () => page.keyboard.press('Escape'),
        absent(page.getByRole('tooltip'))
      );
    },
    async preview() {
      await step(
        'hover preview',
        async () => {
          await page.mouse.move(1, 1);
          await button('Preview').hover();
        },
        present(page.getByRole('dialog', {name: 'Preview details'}))
      );
      await step(
        'Escape hides preview',
        () => page.keyboard.press('Escape'),
        absent(page.getByRole('dialog'))
      );
    },
    async breadcrumbs() {
      await step(
        'link navigation',
        () => page.getByRole('link', {name: 'Home', exact: true}).click(),
        async () => assert(page.url().endsWith('#home'))
      );
    },
    async toolbar() {
      await step(
        'keyboard toolbar navigation',
        () => button('Cut').press('ArrowRight'),
        focus(button('Bold'))
      );
      await step(
        'toggle in toolbar',
        () => button('Bold').press('Space'),
        attr(button('Bold'), 'aria-pressed', 'true')
      );
    },
    async listbox() {
      await step(
        'select Alpha',
        () => page.getByRole('option', {name: 'Alpha'}).click(),
        result('a')
      );
      await step(
        'multiple select Beta',
        () => page.getByRole('option', {name: 'Beta'}).click(),
        result('a,b')
      );
      await step(
        'Home keyboard focus',
        () => page.keyboard.press('Home'),
        focus(page.getByRole('option', {name: 'Alpha'}))
      );
    },
    async section() {
      await step(
        'legacy section selection',
        () => page.getByRole('option', {name: 'Alpha'}).click(),
        attr(page.getByRole('option', {name: 'Alpha'}), 'aria-selected', 'true')
      );
    },
    async gridlist() {
      await step(
        'select Alpha row',
        () => page.getByRole('row').filter({hasText: 'Alpha'}).click(),
        result('a')
      );
      await step(
        'select Beta checkbox via label',
        () => clickLocator(page.getByRole('row').filter({hasText: 'Beta'})),
        result('a,b')
      );
    },
    async tags() {
      await step(
        'remove middle tag',
        () => button('Remove Beta Beta').click(),
        result('Alpha,Gamma')
      );
      await step('remove first tag', () => button('Remove Alpha Alpha').click(), result('Gamma'));
    },
    async table() {
      await step(
        'sort column',
        () => page.getByRole('columnheader', {name: /Name/}).click(),
        result('descending')
      );
      await step(
        'select row',
        () => page.getByRole('rowheader', {name: 'Beta', exact: true}).click(),
        attr(page.getByRole('row').filter({hasText: 'Beta'}), 'aria-selected', 'true')
      );
      const resizer = page.getByRole('slider', {name: /Resize Name/});
      await step('Enter starts column resize', () => resizer.press('Enter'));
      const before = await resizer.inputValue();
      await step(
        'keyboard column resize',
        () => resizer.press('ArrowRight'),
        async () => assert.notEqual(await resizer.inputValue(), before)
      );
      await step('Escape ends column resize', () => resizer.press('Escape'));
    },
    async tree() {
      await step(
        'expand tree folder',
        () => button('Expand Folder Folder').click(),
        present(text('Child'))
      );
      await step(
        'keyboard collapse',
        () => page.getByRole('row').filter({hasText: 'Folder'}).press('ArrowLeft'),
        absent(text('Child'))
      );
    },
    async navigation() {
      await step(
        'expand navigation folder',
        () => button('Expand Folder Folder').click(),
        present(page.getByRole('link', {name: 'Child'}))
      );
      await step(
        'activate child link',
        () => page.getByRole('link', {name: 'Child'}).click(),
        async () => assert(page.url().endsWith('#child'))
      );
    },
    async datefield() {
      await step(
        'edit birthday day',
        () => page.getByRole('spinbutton', {name: 'day, Birthday'}).press('ArrowUp'),
        result('2026-10-02')
      );
      await step(
        'edit time minute',
        () => page.getByRole('spinbutton', {name: 'minute, Time'}).press('ArrowUp'),
        attr(page.getByRole('spinbutton', {name: 'minute, Time'}), 'aria-valuenow', '31')
      );
    },
    async daterange() {
      await step(
        'open range calendar',
        () => button('Calendar Trip').click(),
        present(page.getByRole('grid'))
      );
      await step('choose range start', () =>
        page.getByRole('button', {name: /October 10, 2026/}).click()
      );
      await step(
        'choose range end',
        () => page.getByRole('button', {name: /October 14, 2026/}).click(),
        result('2026-10-10 / 2026-10-14')
      );
    },
    async calendar() {
      await step(
        'change month picker',
        () => page.getByRole('combobox', {name: /Month/i}).selectOption('11'),
        present(page.getByRole('heading', {name: /November 2026/}).first())
      );
      await step(
        'change year picker',
        () => page.getByRole('combobox', {name: /Year/i}).selectOption('2027'),
        present(page.getByRole('heading', {name: /2027/}).first())
      );
    },
    async autocomplete() {
      const input = page.getByRole('searchbox', {name: 'Filter actions'});
      await step('focus filter', () => input.click());
      await step(
        'filter collection',
        () => input.fill('Be'),
        async () => {
          await page.getByRole('menuitem', {name: 'Beta'}).waitFor();
          assert.equal(await page.getByRole('menuitem').count(), 1);
        }
      );
      await step(
        'activate filtered item',
        () => page.getByRole('menuitem', {name: 'Beta'}).click(),
        result('b')
      );
    },
    async tokenfield() {
      const input = page.getByRole('textbox', {name: 'Message'});
      await step('focus token input', () => input.click());
      await step('append text after token', () => input.press('End'));
      await step('type alongside token', () => page.keyboard.type('world'), result('world'));
    },
    async colorfield() {
      const input = page.getByRole('textbox', {name: 'Color'});
      await step('focus color input', () => input.click());
      await step('enter blue', () => input.fill('#0000ff'));
      await step('commit blue', () => input.press('Tab'), result('#0000FF'));
    },
    async colorarea() {
      await change('keyboard changes saturation', page.getByRole('slider').first(), l =>
        l.press('ArrowLeft')
      );
    },
    async colorslider() {
      await change('keyboard changes hue', page.getByRole('slider'), l => l.press('ArrowRight'));
    },
    async colorwheel() {
      await change('keyboard changes wheel hue', page.getByRole('slider'), l =>
        l.press('ArrowRight')
      );
    },
    async colorswatch() {
      await step(
        'open color picker',
        () => page.getByRole('button', {name: /Choose color/}).click(),
        present(page.getByRole('dialog', {name: 'Color picker'}))
      );
      await step(
        'select blue swatch',
        () => page.getByRole('option').last().click(),
        result('#0000FF')
      );
    },
    async form() {
      await step(
        'required validation blocks submit',
        () => button('Submit').click(),
        attr(page.getByRole('textbox', {name: 'Email'}), 'aria-invalid', 'true')
      );
      const input = page.getByRole('textbox', {name: 'Email'});
      await step('focus email', () => input.click());
      await step('valid email', () => input.fill('ada@example.test'));
      await step(
        'submit reads native FormData',
        () => button('Submit').click(),
        result('ada@example.test')
      );
      await step(
        'reset form',
        () => button('Reset').click(),
        async () => assert.equal(await input.inputValue(), '')
      );
    },
    async file() {
      await step(
        'file chooser selection',
        async () => {
          const chooser = page.waitForEvent('filechooser');
          await button('Upload').click();
          await (
            await chooser
          ).setFiles({name: 'sample.txt', mimeType: 'text/plain', buffer: Buffer.from('Preact')});
        },
        result('sample.txt')
      );
    },
    async toast() {
      await step(
        'enqueue toast',
        () => button('Notify').click(),
        present(page.getByRole('alertdialog', {name: 'Saved'}))
      );
      await step(
        'dismiss toast',
        () => button('Close').click(),
        absent(page.getByRole('alertdialog'))
      );
    },
    async shared() {
      await step('move shared element', () => button('Move indicator').click(), result('true'));
      await step('move it back', () => button('Move indicator').click(), result('false'));
    },
    async providers() {
      await step(
        'context button props',
        () => button('Provided button').click(),
        result('provided')
      );
      await step(
        'Pressable wraps native button',
        () => button('Custom pressable').press('Space'),
        result('pressed')
      );
      await step(
        'Focusable keeps native focus',
        () => button('Custom focusable').press('Space'),
        focus(button('Custom focusable'))
      );
      await step(
        'router intercepts link',
        () => page.getByRole('link', {name: 'Navigate'}).click(),
        result('/destination')
      );
    },
    async loaders() {
      await step(
        'all five loading indicators render',
        async () => {},
        async () => {
          for (const name of [
            'Loading menu items',
            'Loading list items',
            'Loading grid items',
            'Loading tree items',
            'Loading table'
          ])
            await text(name).waitFor({timeout: 3000});
        }
      );
    }
  };
  for (const name of ['virtual-list', 'virtual-grid', 'virtual-waterfall', 'virtual-table']) {
    tests[name] = async () => {
      const container = page.getByRole(name === 'virtual-table' ? 'grid' : 'listbox');
      await step('virtualized first item renders', async () => {}, present(text('Item 0')));
      await step(
        'scroll virtual collection',
        async () => {
          await container.hover();
          await page.mouse.wheel(0, 2000);
        },
        async () => {
          await text('Item 0').waitFor({state: 'hidden', timeout: 3000});
          assert((await container.textContent()).includes('Item '));
        }
      );
      await step(
        'keyboard reaches last virtual item',
        () => container.press('End'),
        present(text('Item 99'))
      );
    };
  }
  return tests;
}
