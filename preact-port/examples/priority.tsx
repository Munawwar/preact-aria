import React, {useState} from 'preact/compat';
import * as A from '../dist/index.js';
import {CalendarDate} from '@internationalized/date';

export const priorityCoverage = {
  menu: [
    'MenuTrigger',
    'Menu',
    'MenuItem',
    'MenuSection',
    'SubmenuTrigger',
    'Keyboard',
    'Separator',
    'Header'
  ],
  popover: ['DialogTrigger', 'Popover', 'Dialog', 'Heading', 'OverlayArrow'],
  select: ['Select', 'SelectValue', 'ListBox', 'ListBoxItem', 'ListBoxSection', 'Label'],
  combobox: ['ComboBox', 'ComboBoxValue', 'Input', 'Button'],
  dnd: ['GridList', 'GridListItem', 'DropIndicator', 'DropZone'],
  datepicker: [
    'DatePicker',
    'Group',
    'DateInput',
    'DateSegment',
    'Calendar',
    'CalendarGrid',
    'CalendarGridHeader',
    'CalendarGridBody',
    'CalendarHeaderCell',
    'CalendarCell',
    'Text'
  ]
};

function Result({children}) {
  return <output data-testid="result">{children}</output>;
}
export function MenuExample() {
  const [action, setAction] = useState('none');
  const [selected, setSelected] = useState(new Set());
  return (
    <>
      <A.MenuTrigger>
        <A.Button>Actions</A.Button>
        <A.Popover>
          <A.Menu
            aria-label="Actions"
            onAction={key => setAction(String(key))}
            disabledKeys={['delete']}
            selectionMode="multiple"
            selectedKeys={selected}
            onSelectionChange={setSelected}>
            <A.MenuSection>
              <A.Header>Edit</A.Header>
              <A.MenuItem id="copy" textValue="Copy">
                <A.Text slot="label">Copy</A.Text>
                <A.Keyboard>Ctrl+C</A.Keyboard>
              </A.MenuItem>
              <A.MenuItem id="paste">Paste</A.MenuItem>
              <A.MenuItem id="delete">Delete</A.MenuItem>
            </A.MenuSection>
            <A.Separator />
            <A.SubmenuTrigger>
              <A.MenuItem id="share">Share</A.MenuItem>
              <A.Popover>
                <A.Menu aria-label="Share" onAction={key => setAction(String(key))}>
                  <A.MenuItem id="email">Email</A.MenuItem>
                  <A.MenuItem id="link">Copy link</A.MenuItem>
                </A.Menu>
              </A.Popover>
            </A.SubmenuTrigger>
          </A.Menu>
        </A.Popover>
      </A.MenuTrigger>
      <Result>
        {action}; selected:{[...selected].join(',')}
      </Result>
      <A.Button>Outside</A.Button>
    </>
  );
}
export function PopoverExample() {
  return (
    <>
      <A.DialogTrigger>
        <A.Button>Open popover</A.Button>
        <A.Popover>
          <A.OverlayArrow>
            <svg width="12" height="12">
              <path d="M0 0 L6 6 L12 0" />
            </svg>
          </A.OverlayArrow>
          <A.Dialog>
            {({close}) => (
              <>
                <A.Heading slot="title">Popover details</A.Heading>
                <A.Input aria-label="Inside popover" />
                <A.Button onPress={close}>Close</A.Button>
              </>
            )}
          </A.Dialog>
        </A.Popover>
      </A.DialogTrigger>
      <A.Button>Outside</A.Button>
    </>
  );
}
const fruits = [
  {id: 'apple', name: 'Apple'},
  {id: 'banana', name: 'Banana'},
  {id: 'cherry', name: 'Cherry'}
];
export function SelectExample() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <A.Select
        selectedKey={selected}
        onSelectionChange={setSelected}
        name="fruit"
        disabledKeys={['cherry']}>
        <A.Label>Fruit</A.Label>
        <A.Button>
          <A.SelectValue />
        </A.Button>
        <A.Popover>
          <A.ListBox>
            <A.ListBoxSection>
              <A.Header>Fruit options</A.Header>
              {fruits.map(f => (
                <A.ListBoxItem id={f.id}>{f.name}</A.ListBoxItem>
              ))}
            </A.ListBoxSection>
          </A.ListBox>
        </A.Popover>
      </A.Select>
      <Result>{selected || 'none'}</Result>
      <A.Button>Outside</A.Button>
    </>
  );
}
export function ComboBoxExample() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <A.ComboBox defaultItems={fruits} selectedKey={selected} onSelectionChange={setSelected}>
        <A.Label>Fruit</A.Label>
        <A.Input />
        <A.Button>Show fruits</A.Button>
        <A.Popover>
          <A.ListBox>{f => <A.ListBoxItem id={f.id}>{f.name}</A.ListBoxItem>}</A.ListBox>
        </A.Popover>
        <A.ComboBoxValue>{({selectedItems}) => selectedItems[0]?.name || 'none'}</A.ComboBoxValue>
      </A.ComboBox>
      <Result>{selected || 'none'}</Result>
    </>
  );
}
export function DragExample() {
  const list = A.useListData({initialItems: fruits});
  const [dropped, setDropped] = useState('none');
  const {dragAndDropHooks} = A.useDragAndDrop({
    getItems: keys => [...keys].map(key => ({'text/plain': list.getItem(key).name})),
    onReorder: e =>
      e.target.dropPosition === 'before'
        ? list.moveBefore(e.target.key, e.keys)
        : list.moveAfter(e.target.key, e.keys),
    renderDropIndicator: target => <A.DropIndicator target={target} />
  });
  return (
    <>
      <A.GridList
        aria-label="Reorder fruit"
        items={list.items}
        dragAndDropHooks={dragAndDropHooks}
        selectionMode="multiple">
        {item => (
          <A.GridListItem id={item.id} textValue={item.name}>
            <A.Button slot="drag" aria-label={`Drag ${item.name}`}>
              ↕
            </A.Button>
            <A.Checkbox slot="selection" />
            {item.name}
          </A.GridListItem>
        )}
      </A.GridList>
      <A.DropZone
        aria-label="Drop fruit"
        onDrop={async e => {
          const item = e.items.find(A.isTextDropItem);
          if (item) setDropped(await item.getText('text/plain'));
        }}>
        <A.Text slot="label">Drop fruit here</A.Text>
      </A.DropZone>
      <Result>
        {list.items.map(x => x.name).join(',')}; dropped:{dropped}
      </Result>
    </>
  );
}
export function CalendarParts() {
  return (
    <>
      <header>
        <A.Button slot="previous">Previous</A.Button>
        <A.Heading />
        <A.Button slot="next">Next</A.Button>
      </header>
      <A.CalendarGrid>
        <A.CalendarGridHeader>
          {day => <A.CalendarHeaderCell>{day}</A.CalendarHeaderCell>}
        </A.CalendarGridHeader>
        <A.CalendarGridBody>{date => <A.CalendarCell date={date} />}</A.CalendarGridBody>
      </A.CalendarGrid>
    </>
  );
}
export function DatePickerExample() {
  const [value, setValue] = useState(new CalendarDate(2026, 10, 1));
  return (
    <>
      <A.DatePicker value={value} onChange={setValue}>
        <A.Label>Appointment</A.Label>
        <A.Group>
          <A.DateInput>{segment => <A.DateSegment segment={segment} />}</A.DateInput>
          <A.Button>Choose date</A.Button>
        </A.Group>
        <A.Text slot="description">Pick an appointment date.</A.Text>
        <A.Popover>
          <A.Dialog>
            <A.Calendar>
              <CalendarParts />
            </A.Calendar>
          </A.Dialog>
        </A.Popover>
      </A.DatePicker>
      <Result>{value?.toString() || 'none'}</Result>
    </>
  );
}
export const priority = {
  menu: MenuExample,
  popover: PopoverExample,
  select: SelectExample,
  combobox: ComboBoxExample,
  dnd: DragExample,
  datepicker: DatePickerExample
};
