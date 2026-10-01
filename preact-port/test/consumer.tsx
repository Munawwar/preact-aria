import {createRef} from 'preact';
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
  Select,
  SelectValue,
  ComboBox,
  Input,
  ListBox,
  ListBoxItem,
  DatePicker,
  DateInput,
  DateSegment,
  Group,
  Label,
  Calendar,
  DropZone,
  useDragAndDrop
} from 'preact-aria-components';
import {CalendarDate} from '@internationalized/date';

const ref = createRef<HTMLButtonElement>();
export const app = (
  <>
    <MenuTrigger>
      <Button ref={ref}>Actions</Button>
      <Popover>
        <Menu onAction={key => console.log(key)}>
          <MenuItem id="copy">Copy</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
    <Select>
      <Label>Fruit</Label>
      <Button>
        <SelectValue />
      </Button>
      <Popover>
        <ListBox>
          <ListBoxItem id="a">Apple</ListBoxItem>
        </ListBox>
      </Popover>
    </Select>
    <ComboBox items={[{id: 'a', name: 'Apple'}]}>
      <Label>Fruit</Label>
      <Input />
      <Button>Open</Button>
      <Popover>
        <ListBox<{id: string; name: string}>>
          {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
        </ListBox>
      </Popover>
    </ComboBox>
    <DatePicker defaultValue={new CalendarDate(2026, 10, 1)}>
      <Label>Date</Label>
      <Group>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
        <Button>Open</Button>
      </Group>
      <Popover>
        <Calendar />
      </Popover>
    </DatePicker>
    <DropZone onDrop={event => console.log(event.items)} aria-label="Drop" />
  </>
);
export function Drag() {
  return useDragAndDrop({getItems: keys => [...keys].map(key => ({'text/plain': String(key)}))});
}
