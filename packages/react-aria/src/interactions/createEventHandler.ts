/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {BaseEvent} from '@react-types/shared';
import {SyntheticEvent} from 'react';

/**
 * This function wraps a React event handler to make stopPropagation the default, and support
 * continuePropagation instead.
 */
export function createEventHandler<T extends SyntheticEvent>(
  handler?: (e: BaseEvent<T>) => void
): ((e: T) => void) | undefined {
  if (!handler) {
    return undefined;
  }

  return (e: T) => {
    let shouldStopPropagation = true;
    // Preact passes native DOM events. Their fields are enumerable on the
    // prototype, so object spread alone drops key, target, and currentTarget.
    // Events constructed with defineProperty may also have non-enumerable own
    // fields. Copy both sets of fields while the event is being dispatched.
    let eventProps: Record<string, unknown> = {};
    let keys = new Set(Object.getOwnPropertyNames(e));
    for (let key in e) {
      keys.add(key);
    }
    for (let key of keys) {
      let value = Reflect.get(e, key);
      eventProps[key] = typeof value === 'function' ? value.bind(e) : value;
    }
    let event: BaseEvent<T> = {
      ...e,
      ...eventProps,
      preventDefault() {
        e.preventDefault();
      },
      isDefaultPrevented() {
        return e.isDefaultPrevented();
      },
      stopPropagation() {
        if (shouldStopPropagation && process.env.NODE_ENV !== 'production') {
          console.error(
            'stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.'
          );
        } else {
          shouldStopPropagation = true;
        }
      },
      continuePropagation() {
        shouldStopPropagation = false;
        // nested createEventHandler might have set continue propagation so we should continue
        // propagation on wrappers
        if (typeof (e as any).continuePropagation === 'function') {
          (e as any).continuePropagation();
        }
      },
      isPropagationStopped() {
        return shouldStopPropagation;
      }
    };

    handler(event);

    // nested createEventHandler calls may already have stopped propagation
    if (
      shouldStopPropagation &&
      !(typeof e.isPropagationStopped === 'function' && e.isPropagationStopped())
    ) {
      e.stopPropagation();
    }
  };
}
