import {createElement as h} from 'preact';
import {useState} from 'preact/hooks';
import * as A from '../dist/index.js';
import {CalendarDate} from '@internationalized/date';

export function HydrationExample() {
  const [value, setValue] = useState('Server value');
  const [selected, setSelected] = useState(new Set(['a']));
  const [action, setAction] = useState('none');
  return h(
    'main',
    {},
    h('h1', {}, 'Hydration — Preact 11'),
    h(
      A.TextField,
      {value, onChange: setValue},
      h(A.Label, {}, 'Hydrated name'),
      h(A.Input, {'data-testid': 'hydrated-input'})
    ),
    h(
      A.MenuTrigger,
      {},
      h(A.Button, {}, 'Hydrated actions'),
      h(
        A.Popover,
        {},
        h(A.Menu, {onAction: key => setAction(String(key))}, h(A.MenuItem, {id: 'copy'}, 'Copy'))
      )
    ),
    h(
      A.ListBox,
      {
        'aria-label': 'Hydrated options',
        selectionMode: 'single',
        selectedKeys: selected,
        onSelectionChange: setSelected
      },
      h(A.ListBoxItem, {id: 'a'}, 'Alpha'),
      h(A.ListBoxItem, {id: 'b'}, 'Beta')
    ),
    h(
      A.DatePicker,
      {defaultValue: new CalendarDate(2026, 10, 1)},
      h(A.Label, {}, 'Hydrated date'),
      h(
        A.Group,
        {},
        h(A.DateInput, {}, segment => h(A.DateSegment, {segment})),
        h(A.Button, {}, 'Calendar')
      )
    ),
    h('output', {'data-testid': 'result'}, `${value}; ${[...selected]}; ${action}`)
  );
}
