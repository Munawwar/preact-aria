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
import {expect, it, vi} from 'vitest';
import {page, userEvent} from 'vitest/browser';
import React from 'react';
import {render} from 'vitest-browser-react';

it('preserves keyboard fields and the dispatch target in wrapped native events', async () => {
  let onKeyDown = vi.fn();
  await render(<Button onKeyDown={onKeyDown}>Save</Button>);
  let button = page.getByRole('button', {name: 'Save'});
  await userEvent.click(button);
  await userEvent.keyboard('{Control>}k{/Control}');
  expect(onKeyDown).toHaveBeenCalledWith(
    expect.objectContaining({
      key: 'k',
      ctrlKey: true,
      target: button.element(),
      currentTarget: button.element()
    })
  );
});

it('preserves non-enumerable keyboard fields in programmatically dispatched events', async () => {
  let onKeyDown = vi.fn();
  await render(<Button onKeyDown={onKeyDown}>Save</Button>);
  let button = page.getByRole('button', {name: 'Save'}).element();
  let event = new KeyboardEvent('keydown', {bubbles: true, cancelable: true});
  // DOM event utilities and integrations can define their own non-enumerable fields.
  Object.defineProperties(event, {
    key: {value: 'k'},
    ctrlKey: {value: true}
  });
  button.dispatchEvent(event);
  expect(onKeyDown).toHaveBeenCalledWith(
    expect.objectContaining({
      key: 'k',
      ctrlKey: true,
      target: button,
      currentTarget: button
    })
  );
});
