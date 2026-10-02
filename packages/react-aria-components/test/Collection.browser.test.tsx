/*
 * Copyright 2026 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {Button} from '../src/Button';
import {expect, it} from 'vitest';
import {ListBox, ListBoxItem} from '../src/ListBox';
import {page, userEvent} from 'vitest/browser';
import React, {useState} from 'react';
import {render} from 'vitest-browser-react';

const initial = ['Four', 'Five', 'Six'].map(name => ({id: name, name}));

function CollectionExample() {
  let [items, setItems] = useState(initial);
  return (
    <>
      <Button
        onPress={() =>
          setItems([...['One', 'Two', 'Three'].map(name => ({id: name, name})), ...initial])
        }>
        Prepend
      </Button>
      <Button onPress={() => setItems([...initial].reverse())}>Reverse</Button>
      <ListBox
        aria-label="Numbers"
        items={items}
        selectionMode="single"
        defaultSelectedKeys={['Five']}>
        {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
      </ListBox>
    </>
  );
}

function optionNames() {
  return Array.from(
    page.getByRole('listbox', {name: 'Numbers'}).element().querySelectorAll('[role="option"]'),
    option => option.textContent
  );
}

it('inserts keyed collection items before existing items without losing selection', async () => {
  await render(<CollectionExample />);
  expect(optionNames()).toEqual(['Four', 'Five', 'Six']);
  await userEvent.click(page.getByRole('button', {name: 'Prepend'}));
  await expect.poll(optionNames).toEqual(['One', 'Two', 'Three', 'Four', 'Five', 'Six']);
  await expect
    .element(page.getByRole('option', {name: 'Five'}))
    .toHaveAttribute('aria-selected', 'true');
});

it('reorders existing keyed collection items without losing selection', async () => {
  await render(<CollectionExample />);
  await userEvent.click(page.getByRole('button', {name: 'Reverse'}));
  await expect.poll(optionNames).toEqual(['Six', 'Five', 'Four']);
  await expect
    .element(page.getByRole('option', {name: 'Five'}))
    .toHaveAttribute('aria-selected', 'true');
});
