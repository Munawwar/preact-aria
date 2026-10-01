import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createElement as h} from 'preact';
import render from 'preact-render-to-string';
import * as A from '../dist/index.js';
import {CalendarDate} from '@internationalized/date';

test('the package shares Preact with the consumer and imports without React', async () => {
  const source = await readFile(new URL('../dist/index.js', import.meta.url), 'utf8');
  assert.match(source, /from "preact\/compat"/);
  assert.doesNotMatch(source, /from ["'](?:react|react-dom)["']/);
  const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url)));
  assert.deepEqual(pkg.peerDependencies, {preact: '^11.0.0'});
  assert.equal(Object.keys(A).length, 295);
});

test('SSR fields preserve labels, values and hydration-safe generated ids', () => {
  const tree = h(
    A.SSRProvider,
    {},
    h(
      'form',
      {},
      h(A.TextField, {defaultValue: 'Ada'}, h(A.Label, {}, 'Name'), h(A.Input, {})),
      h(A.NumberField, {defaultValue: 3}, h(A.Label, {}, 'Quantity'), h(A.Input, {})),
      h(
        A.DatePicker,
        {defaultValue: new CalendarDate(2026, 10, 1)},
        h(A.Label, {}, 'Appointment'),
        h(
          A.Group,
          {},
          h(A.DateInput, {}, segment => h(A.DateSegment, {segment})),
          h(A.Button, {}, 'Choose date')
        )
      )
    )
  );
  const first = render(tree),
    second = render(tree);
  assert.equal(first, second);
  assert.match(first, /value="Ada"/);
  assert.match(first, /value="3"/);
  assert.match(first, /role="spinbutton"/);
  const labels = [...first.matchAll(/for="([^"]+)"/g)].map(match => match[1]);
  assert(labels.length >= 2);
  for (const id of labels) assert(first.includes(`id="${id}"`));
});

test('SSR collections expose items and selected state', () => {
  const html = render(
    h(
      A.ListBox,
      {'aria-label': 'Options', selectionMode: 'single', defaultSelectedKeys: ['b']},
      h(A.ListBoxItem, {id: 'a'}, 'Alpha'),
      h(A.ListBoxItem, {id: 'b'}, 'Beta')
    )
  );
  assert.match(html, /role="listbox"/);
  assert.match(html, /Alpha/);
  assert.match(html, /Beta/);
  assert.match(html, /aria-selected="true"/);
});
