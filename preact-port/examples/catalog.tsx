import React, {useState, useRef} from 'preact/compat';
import * as A from '../dist/index.js';
import {CalendarDate, Time} from '@internationalized/date';
import {CalendarParts} from './priority';
export const catalogCoverage = {};
export const catalog = {};
function add(name, components, render) {
  catalog[name] = render;
  catalogCoverage[name] = components.split(' ');
}
const Result = ({children}) => <output data-testid="result">{String(children)}</output>;
const items = [
  {id: 'a', name: 'Alpha'},
  {id: 'b', name: 'Beta'},
  {id: 'c', name: 'Gamma'}
];
add('button', 'Button', () => {
  const [n, set] = useState(0);
  return (
    <>
      <A.Button onPress={() => set(n + 1)}>Press</A.Button>
      <A.Button isDisabled>Disabled</A.Button>
      <Result>{n}</Result>
    </>
  );
});
add('toggle', 'ToggleButton ToggleButtonGroup SelectionIndicator', () => {
  const [keys, set] = useState(new Set());
  return (
    <>
      <A.ToggleButton>Independent toggle</A.ToggleButton>
      <A.ToggleButtonGroup selectionMode="single" selectedKeys={keys} onSelectionChange={set}>
        <A.ToggleButton id="a">
          Bold
          <A.SelectionIndicator />
        </A.ToggleButton>
        <A.ToggleButton id="b">
          Italic
          <A.SelectionIndicator />
        </A.ToggleButton>
      </A.ToggleButtonGroup>
      <Result>{[...keys].join(',')}</Result>
    </>
  );
});
add('checkbox', 'Checkbox CheckboxGroup CheckboxField CheckboxButton', () => {
  const [values, set] = useState([]);
  return (
    <>
      <A.Checkbox>Independent checkbox</A.Checkbox>
      <A.CheckboxGroup value={values} onChange={set}>
        <A.Label>Options</A.Label>
        <A.Checkbox value="a">Alpha</A.Checkbox>
        <A.CheckboxField value="b">
          <A.CheckboxButton>Beta</A.CheckboxButton>
          <A.Text slot="description">Button composition</A.Text>
        </A.CheckboxField>
      </A.CheckboxGroup>
      <Result>{values.join(',')}</Result>
    </>
  );
});
add('radio', 'RadioGroup Radio RadioField RadioButton', () => {
  const [v, set] = useState('a');
  return (
    <>
      <A.RadioGroup value={v} onChange={set}>
        <A.Label>Options</A.Label>
        <A.Radio value="a">Alpha</A.Radio>
        <A.RadioField value="b">
          <A.RadioButton>Beta</A.RadioButton>
        </A.RadioField>
      </A.RadioGroup>
      <Result>{v}</Result>
    </>
  );
});
add('switch', 'Switch SwitchField SwitchButton', () => {
  const [v, set] = useState(false);
  return (
    <>
      <A.Switch>Independent switch</A.Switch>
      <A.SwitchField isSelected={v} onChange={set}>
        <A.SwitchButton>Notifications</A.SwitchButton>
      </A.SwitchField>
      <Result>{v}</Result>
    </>
  );
});
add('textfield', 'TextField Input Label Text FieldError', () => {
  const [v, set] = useState('');
  return (
    <>
      <A.TextField value={v} onChange={set} isRequired>
        <A.Label>Name</A.Label>
        <A.Input />
        <A.Text slot="description">Enter your name.</A.Text>
        <A.FieldError />
      </A.TextField>
      <Result>{v}</Result>
    </>
  );
});
add('textarea', 'TextArea', () => {
  const [v, set] = useState('');
  return (
    <>
      <A.TextField value={v} onChange={set}>
        <A.Label>Notes</A.Label>
        <A.TextArea />
      </A.TextField>
      <Result>{v}</Result>
    </>
  );
});
add('search', 'SearchField', () => {
  const [v, set] = useState('');
  return (
    <>
      <A.SearchField value={v} onChange={set}>
        <A.Label>Search</A.Label>
        <A.Input />
        <A.Button>Clear</A.Button>
      </A.SearchField>
      <Result>{v}</Result>
    </>
  );
});
add('number', 'NumberField Group', () => {
  const [v, set] = useState(5);
  return (
    <>
      <A.NumberField value={v} onChange={set} minValue={0} maxValue={10}>
        <A.Label>Quantity</A.Label>
        <A.Group>
          <A.Button slot="decrement">Decrease</A.Button>
          <A.Input />
          <A.Button slot="increment">Increase</A.Button>
        </A.Group>
      </A.NumberField>
      <Result>{v}</Result>
    </>
  );
});
add('slider', 'Slider SliderTrack SliderThumb SliderFill SliderOutput', () => {
  const [v, set] = useState(40);
  return (
    <>
      <div className="slider-example">
        <A.Slider value={v} onChange={set}>
          <A.Label>Volume</A.Label>
          <A.SliderOutput />
          <A.SliderTrack>
            <div className="slider-rail" aria-hidden="true">
              <A.SliderFill />
            </div>
            <A.SliderThumb />
          </A.SliderTrack>
        </A.Slider>
        <div className="slider-limits" aria-hidden="true">
          <span>Quiet</span>
          <span>Loud</span>
        </div>
        <p>Drag the thumb, click the rail or use the arrow keys.</p>
      </div>
      <Result>{v}</Result>
    </>
  );
});
add('meter', 'Meter ProgressBar', () => (
  <>
    <A.Meter value={50}>
      {({percentage, valueText}) => (
        <>
          <A.Label>Storage</A.Label>
          <span className="meter-value">{valueText}</span>
          <div className="meter-track">
            <div className="meter-fill" style={{width: `${percentage}%`}} />
          </div>
        </>
      )}
    </A.Meter>
    <A.ProgressBar value={25}>
      {({percentage}) => (
        <>
          <A.Label>Loading</A.Label>
          <span className="meter-value">{percentage}%</span>
          <div className="meter-track">
            <div className="meter-fill" style={{width: `${percentage}%`}} />
          </div>
        </>
      )}
    </A.ProgressBar>
  </>
));
add('tabs', 'Tabs TabList Tab TabPanels TabPanel', () => (
  <A.Tabs>
    <A.TabList aria-label="Sections">
      <A.Tab id="a">Alpha</A.Tab>
      <A.Tab id="b">Beta</A.Tab>
    </A.TabList>
    <A.TabPanels>
      <A.TabPanel id="a">Alpha content</A.TabPanel>
      <A.TabPanel id="b">Beta content</A.TabPanel>
    </A.TabPanels>
  </A.Tabs>
));
add('disclosure', 'Disclosure DisclosureGroup DisclosurePanel Heading', () => (
  <A.DisclosureGroup>
    <A.Disclosure id="a">
      <A.Heading>
        <A.Button slot="trigger">Alpha details</A.Button>
      </A.Heading>
      <A.DisclosurePanel>
        <div>Alpha panel</div>
      </A.DisclosurePanel>
    </A.Disclosure>
    <A.Disclosure id="b">
      <A.Heading>
        <A.Button slot="trigger">Beta details</A.Button>
      </A.Heading>
      <A.DisclosurePanel>
        <div>Beta panel</div>
      </A.DisclosurePanel>
    </A.Disclosure>
  </A.DisclosureGroup>
));
add('modal', 'Modal ModalOverlay Dialog DialogTrigger', () => (
  <>
    <A.DialogTrigger>
      <A.Button>Open modal</A.Button>
      <A.ModalOverlay isDismissable>
        <A.Modal>
          <A.Dialog>
            {({close}) => (
              <>
                <A.Heading slot="title">Modal details</A.Heading>
                <A.Input aria-label="Inside modal" />
                <A.Button onPress={close}>Close</A.Button>
              </>
            )}
          </A.Dialog>
        </A.Modal>
      </A.ModalOverlay>
    </A.DialogTrigger>
    <A.Button>Outside</A.Button>
  </>
));
add('tooltip', 'Tooltip TooltipTrigger', () => (
  <A.TooltipTrigger delay={0} closeDelay={0}>
    <A.Button>Help</A.Button>
    <A.Tooltip>Helpful description</A.Tooltip>
  </A.TooltipTrigger>
));
add('preview', 'PreviewTrigger', () => (
  <A.PreviewTrigger delay={0} closeDelay={0}>
    <A.Button>Preview</A.Button>
    <A.Popover>
      <A.Dialog aria-label="Preview details">
        <A.Button>Inside preview</A.Button>
      </A.Dialog>
    </A.Popover>
  </A.PreviewTrigger>
));
add('breadcrumbs', 'Breadcrumbs Breadcrumb Link', () => (
  <A.Breadcrumbs>
    <A.Breadcrumb>
      <A.Link href="#home">Home</A.Link>
    </A.Breadcrumb>
    <A.Breadcrumb>
      <A.Link href="#current">Current</A.Link>
    </A.Breadcrumb>
  </A.Breadcrumbs>
));
add('toolbar', 'Toolbar', () => (
  <A.Toolbar aria-label="Formatting">
    <A.Button>Cut</A.Button>
    <A.ToggleButton>Bold</A.ToggleButton>
    <A.Separator orientation="vertical" />
    <A.Button>Paste</A.Button>
  </A.Toolbar>
));
add(
  'listbox',
  'ListBox ListBoxItem ListBoxSection Collection DefaultCollectionRenderer CollectionBuilder',
  () => {
    const [keys, set] = useState(new Set());
    return (
      <>
        <A.ListBox
          aria-label="Options"
          selectionMode="multiple"
          selectedKeys={keys}
          onSelectionChange={set}>
          <A.ListBoxSection>
            <A.Header>Letters</A.Header>
            <A.Collection items={items}>
              {item => <A.ListBoxItem id={item.id}>{item.name}</A.ListBoxItem>}
            </A.Collection>
          </A.ListBoxSection>
        </A.ListBox>
        <Result>{[...keys].join(',')}</Result>
      </>
    );
  }
);
add('section', 'Section', () => (
  <A.ListBox aria-label="Legacy section" selectionMode="single">
    <A.Section>
      <A.Header>Letters</A.Header>
      <A.ListBoxItem id="a">Alpha</A.ListBoxItem>
    </A.Section>
  </A.ListBox>
));
add('gridlist', 'GridList GridListItem GridListHeader GridListSection', () => {
  const [keys, set] = useState(new Set());
  return (
    <>
      <A.GridList
        aria-label="Options"
        selectionMode="multiple"
        selectedKeys={keys}
        onSelectionChange={set}>
        <A.GridListSection>
          <A.GridListHeader>Letters</A.GridListHeader>
          {items.map(item => (
            <A.GridListItem id={item.id} textValue={item.name}>
              <A.Checkbox slot="selection" />
              {item.name}
            </A.GridListItem>
          ))}
        </A.GridListSection>
      </A.GridList>
      <Result>{[...keys].join(',')}</Result>
    </>
  );
});
add('tags', 'TagGroup TagList Tag', () => {
  const list = A.useListData({initialItems: items});
  return (
    <>
      <A.TagGroup onRemove={keys => list.remove(...keys)}>
        <A.Label>Tags</A.Label>
        <A.TagList items={list.items}>
          {item => (
            <A.Tag id={item.id} textValue={item.name}>
              {item.name}
              <A.Button slot="remove" aria-label={`Remove ${item.name}`}>
                ×
              </A.Button>
            </A.Tag>
          )}
        </A.TagList>
      </A.TagGroup>
      <Result>{list.items.map(x => x.name).join(',')}</Result>
    </>
  );
});
function TableContent({footer = false, loader = false}) {
  return (
    <>
      <A.TableHeader>
        <A.Column id="name" isRowHeader allowsSorting defaultWidth={180}>
          Name
          <A.ColumnResizer aria-label="Resize Name" />
        </A.Column>
        <A.Column id="value" defaultWidth={180}>
          Value
          <A.ColumnResizer aria-label="Resize Value" />
        </A.Column>
      </A.TableHeader>
      <A.TableBody>
        {items.map((item, i) => (
          <A.Row id={item.id}>
            <A.Cell>{item.name}</A.Cell>
            <A.Cell>{i + 1}</A.Cell>
          </A.Row>
        ))}
        {loader && <A.TableLoadMoreItem isLoading>Loading table</A.TableLoadMoreItem>}
      </A.TableBody>
      {footer && (
        <A.TableFooter>
          <A.Row id="footer">
            <A.Cell>Total</A.Cell>
            <A.Cell>6</A.Cell>
          </A.Row>
        </A.TableFooter>
      )}
    </>
  );
}
add(
  'table',
  'Table Row Cell Column ColumnResizer TableHeader TableBody ResizableTableContainer TableFooter',
  () => {
    const [sort, set] = useState({column: 'name', direction: 'ascending'});
    return (
      <>
        <A.ResizableTableContainer>
          <A.Table
            aria-label="Letters"
            selectionMode="single"
            sortDescriptor={sort}
            onSortChange={set}>
            <TableContent footer />
          </A.Table>
        </A.ResizableTableContainer>
        <Result>{sort.direction}</Result>
      </>
    );
  }
);
add('tree', 'Tree TreeItem TreeItemContent TreeHeader TreeSection', () => (
  <A.Tree aria-label="Folders" selectionMode="single">
    <A.TreeSection>
      <A.TreeHeader>Files</A.TreeHeader>
      <A.TreeItem id="folder" textValue="Folder">
        <A.TreeItemContent>
          <A.Button slot="chevron" aria-label="Expand Folder">
            ▶
          </A.Button>
          Folder
        </A.TreeItemContent>
        <A.TreeItem id="child" textValue="Child">
          <A.TreeItemContent>Child</A.TreeItemContent>
        </A.TreeItem>
      </A.TreeItem>
    </A.TreeSection>
  </A.Tree>
));
add(
  'navigation',
  'NavigationTree NavigationTreeItem NavigationTreeItemContent NavigationTreeSection NavigationTreeHeader',
  () => (
    <A.NavigationTree aria-label="Navigation">
      <A.NavigationTreeSection>
        <A.NavigationTreeHeader>Projects</A.NavigationTreeHeader>
        <A.NavigationTreeItem id="folder" textValue="Folder">
          <A.NavigationTreeItemContent>
            <A.Button slot="chevron" aria-label="Expand Folder">
              ▶
            </A.Button>
            <A.Link href="#folder">Folder</A.Link>
          </A.NavigationTreeItemContent>
          <A.NavigationTreeItem id="child" textValue="Child" href="#child">
            <A.NavigationTreeItemContent>
              <A.Link>Child</A.Link>
            </A.NavigationTreeItemContent>
          </A.NavigationTreeItem>
        </A.NavigationTreeItem>
      </A.NavigationTreeSection>
    </A.NavigationTree>
  )
);
add('datefield', 'DateField TimeField', () => {
  const [v, set] = useState(new CalendarDate(2026, 10, 1));
  return (
    <>
      <A.DateField value={v} onChange={set}>
        <A.Label>Birthday</A.Label>
        <A.DateInput>{s => <A.DateSegment segment={s} />}</A.DateInput>
      </A.DateField>
      <A.TimeField defaultValue={new Time(12, 30)}>
        <A.Label>Time</A.Label>
        <A.DateInput>{s => <A.DateSegment segment={s} />}</A.DateInput>
      </A.TimeField>
      <Result>{v?.toString()}</Result>
    </>
  );
});
add('daterange', 'DateRangePicker RangeCalendar', () => {
  const [v, set] = useState({
    start: new CalendarDate(2026, 10, 1),
    end: new CalendarDate(2026, 10, 3)
  });
  return (
    <>
      <A.DateRangePicker value={v} onChange={set}>
        <A.Label>Trip</A.Label>
        <A.Group>
          <A.DateInput slot="start">{s => <A.DateSegment segment={s} />}</A.DateInput>
          <span> – </span>
          <A.DateInput slot="end">{s => <A.DateSegment segment={s} />}</A.DateInput>
          <A.Button>Choose range</A.Button>
        </A.Group>
        <A.Popover>
          <A.Dialog>
            <A.RangeCalendar>
              <CalendarParts />
            </A.RangeCalendar>
          </A.Dialog>
        </A.Popover>
      </A.DateRangePicker>
      <Result>{`${v?.start} / ${v?.end}`}</Result>
    </>
  );
});
add('calendar', 'CalendarMonthPicker CalendarYearPicker CalendarHeading', () => (
  <A.Calendar
    aria-label="Date"
    defaultValue={new CalendarDate(2026, 10, 1)}
    minValue={new CalendarDate(2020, 1, 1)}
    maxValue={new CalendarDate(2030, 12, 31)}>
    <A.CalendarHeading />
    <A.CalendarMonthPicker>
      {({items, value, onChange, 'aria-label': label}) => (
        <select aria-label={label} value={value} onChange={e => onChange(e.currentTarget.value)}>
          {items.map(i => (
            <option value={i.id}>{i.formatted}</option>
          ))}
        </select>
      )}
    </A.CalendarMonthPicker>
    <A.CalendarYearPicker>
      {({items, value, onChange, 'aria-label': label}) => (
        <select aria-label={label} value={value} onChange={e => onChange(e.currentTarget.value)}>
          {items.map(i => (
            <option value={i.id}>{i.formatted}</option>
          ))}
        </select>
      )}
    </A.CalendarYearPicker>
    <CalendarParts />
  </A.Calendar>
));
add('autocomplete', 'Autocomplete', () => {
  const [action, set] = useState('none');
  return (
    <A.Autocomplete
      filter={(text, input) => text.toLocaleLowerCase().includes(input.toLocaleLowerCase())}>
      <A.SearchField>
        <A.Label>Filter actions</A.Label>
        <A.Input />
      </A.SearchField>
      <A.Menu aria-label="Filtered actions" onAction={key => set(String(key))}>
        {items.map(i => (
          <A.MenuItem id={i.id}>{i.name}</A.MenuItem>
        ))}
      </A.Menu>
      <Result>{action}</Result>
    </A.Autocomplete>
  );
});
add('tokenfield', 'TokenField TokenInput Token', () => {
  const [v, set] = useState(
    new A.TokenFieldValue([
      {type: 'text', text: 'Hello '},
      {type: 'token', text: '@Ada', value: {id: 'ada'}},
      {type: 'text', text: ' '}
    ])
  );
  return (
    <>
      <A.TokenField value={v} onChange={set}>
        <A.Label>Message</A.Label>
        <A.TokenInput>{s => <A.Token>{s.text}</A.Token>}</A.TokenInput>
      </A.TokenField>
      <Result>{v.toString()}</Result>
    </>
  );
});
add('colorfield', 'ColorField', () => {
  const [v, set] = useState(A.parseColor('#ff0000'));
  return (
    <>
      <A.ColorField value={v} onChange={set}>
        <A.Label>Color</A.Label>
        <A.Input />
      </A.ColorField>
      <Result>{v?.toString('hex')}</Result>
    </>
  );
});
add('colorarea', 'ColorArea ColorThumb', () => {
  const [v, set] = useState(A.parseColor('hsb(0, 100%, 100%)'));
  return (
    <>
      <A.ColorArea value={v} onChange={set} xChannel="saturation" yChannel="brightness">
        <A.ColorThumb />
      </A.ColorArea>
      <Result>{v.toString('hsb')}</Result>
    </>
  );
});
add('colorslider', 'ColorSlider', () => {
  const [v, set] = useState(A.parseColor('hsb(0, 100%, 100%)'));
  return (
    <>
      <A.ColorSlider channel="hue" value={v} onChange={set}>
        <A.Label>Hue</A.Label>
        <A.SliderOutput />
        <A.SliderTrack>
          <A.ColorThumb />
        </A.SliderTrack>
      </A.ColorSlider>
      <Result>{v.toString('hsb')}</Result>
    </>
  );
});
add('colorwheel', 'ColorWheel ColorWheelTrack', () => {
  const [v, set] = useState(A.parseColor('hsb(0, 100%, 100%)'));
  return (
    <>
      <A.ColorWheel value={v} onChange={set} innerRadius={90} outerRadius={125}>
        <A.ColorWheelTrack />
        <A.ColorThumb />
      </A.ColorWheel>
      <Result>{v.toString('hsb')}</Result>
    </>
  );
});
add('colorswatch', 'ColorSwatch ColorSwatchPicker ColorSwatchPickerItem ColorPicker', () => {
  const [v, set] = useState(A.parseColor('#ff0000'));
  return (
    <>
      <A.ColorPicker value={v} onChange={set}>
        <A.DialogTrigger>
          <A.Button>
            Choose color
            <A.ColorSwatch />
          </A.Button>
          <A.Popover>
            <A.Dialog aria-label="Color picker">
              <A.ColorSwatchPicker aria-label="Colors">
                <A.ColorSwatchPickerItem color="#ff0000">
                  <A.ColorSwatch />
                </A.ColorSwatchPickerItem>
                <A.ColorSwatchPickerItem color="#0000ff">
                  <A.ColorSwatch />
                </A.ColorSwatchPickerItem>
              </A.ColorSwatchPicker>
            </A.Dialog>
          </A.Popover>
        </A.DialogTrigger>
      </A.ColorPicker>
      <Result>{v.toString('hex')}</Result>
    </>
  );
});
add('form', 'Form FieldError', () => {
  const [v, set] = useState('none');
  return (
    <>
      <A.Form
        onSubmit={e => {
          e.preventDefault();
          set(new FormData(e.currentTarget).get('email'));
        }}>
        <A.TextField name="email" type="email" isRequired>
          <A.Label>Email</A.Label>
          <A.Input />
          <A.FieldError />
        </A.TextField>
        <A.Button type="submit">Submit</A.Button>
        <A.Button type="reset">Reset</A.Button>
      </A.Form>
      <Result>{v}</Result>
    </>
  );
});
add('file', 'FileTrigger', () => {
  const [v, set] = useState('none');
  return (
    <>
      <A.FileTrigger onSelect={files => set(files?.[0]?.name || 'none')}>
        <A.Button>Upload</A.Button>
      </A.FileTrigger>
      <Result>{v}</Result>
    </>
  );
});
add('toast', 'UNSTABLE_Toast UNSTABLE_ToastRegion UNSTABLE_ToastList UNSTABLE_ToastContent', () => {
  const [queue] = useState(() => new A.UNSTABLE_ToastQueue({maxVisibleToasts: 3}));
  return (
    <>
      <A.Button onPress={() => queue.add({title: 'Saved', description: 'Changes stored.'})}>
        Notify
      </A.Button>
      <A.UNSTABLE_ToastRegion queue={queue}>
        <A.UNSTABLE_ToastList>
          {({toast}) => (
            <A.UNSTABLE_Toast toast={toast}>
              <A.UNSTABLE_ToastContent>
                <A.Text slot="title">{toast.content.title}</A.Text>
                <A.Text slot="description">{toast.content.description}</A.Text>
              </A.UNSTABLE_ToastContent>
              <A.Button slot="close">Dismiss toast</A.Button>
            </A.UNSTABLE_Toast>
          )}
        </A.UNSTABLE_ToastList>
      </A.UNSTABLE_ToastRegion>
    </>
  );
});
add('shared', 'SharedElementTransition SharedElement', () => {
  const [v, set] = useState(false);
  return (
    <>
      <A.Button onPress={() => set(!v)}>Move indicator</A.Button>
      <A.SharedElementTransition>
        <div className="marker-slot">
          <A.SharedElement name="marker" isVisible={!v}>
            <span className="marker">First marker</span>
          </A.SharedElement>
        </div>
        <div className="marker-slot">
          <A.SharedElement name="marker" isVisible={v}>
            <span className="marker">Second marker</span>
          </A.SharedElement>
        </div>
      </A.SharedElementTransition>
      <Result>{v}</Result>
    </>
  );
});
add(
  'providers',
  'Provider SSRProvider RouterProvider I18nProvider Pressable Focusable VisuallyHidden',
  () => {
    const [v, set] = useState('none');
    return (
      <A.SSRProvider>
        <A.I18nProvider locale="en-US">
          <A.RouterProvider navigate={path => set(path)}>
            <A.Provider values={[[A.ButtonContext, {onPress: () => set('provided')}]]}>
              <A.Button>Provided button</A.Button>
            </A.Provider>
            <A.Link href="/destination">Navigate</A.Link>
            <A.Pressable onPress={() => set('pressed')}>
              <button>Custom pressable</button>
            </A.Pressable>
            <A.Focusable>
              <button>Custom focusable</button>
            </A.Focusable>
            <A.VisuallyHidden>Screen reader text</A.VisuallyHidden>
            <Result>{v}</Result>
          </A.RouterProvider>
        </A.I18nProvider>
      </A.SSRProvider>
    );
  }
);
add(
  'loaders',
  'MenuLoadMoreItem ListBoxLoadMoreItem GridListLoadMoreItem TreeLoadMoreItem TableLoadMoreItem',
  () => (
    <>
      <A.Menu aria-label="Loading menu">
        <A.MenuItem id="m">Item</A.MenuItem>
        <A.MenuLoadMoreItem isLoading>Loading menu items</A.MenuLoadMoreItem>
      </A.Menu>
      <A.ListBox aria-label="Loading list" selectionMode="single">
        <A.ListBoxItem id="l">Item</A.ListBoxItem>
        <A.ListBoxLoadMoreItem isLoading>Loading list items</A.ListBoxLoadMoreItem>
      </A.ListBox>
      <A.GridList aria-label="Loading grid">
        <A.GridListItem id="g">Item</A.GridListItem>
        <A.GridListLoadMoreItem isLoading>Loading grid items</A.GridListLoadMoreItem>
      </A.GridList>
      <A.Tree aria-label="Loading tree">
        <A.TreeItem id="t" textValue="Item">
          <A.TreeItemContent>Item</A.TreeItemContent>
        </A.TreeItem>
        <A.TreeLoadMoreItem isLoading>Loading tree items</A.TreeLoadMoreItem>
      </A.Tree>
      <A.ResizableTableContainer>
        <A.Table aria-label="Loading table">
          <TableContent loader />
        </A.Table>
      </A.ResizableTableContainer>
    </>
  )
);
for (const [name, layout] of [
  ['virtual-list', A.ListLayout],
  ['virtual-grid', A.GridLayout],
  ['virtual-waterfall', A.WaterfallLayout]
]) {
  add(name, 'Virtualizer', () => (
    <A.Virtualizer layout={layout} layoutOptions={{rowHeight: 40, itemSize: new A.Size(160, 60)}}>
      <A.ListBox
        aria-label="Virtual options"
        selectionMode="single"
        items={Array.from({length: 100}, (_, i) => ({id: i, name: `Item ${i}`}))}
        style={{height: 240, overflow: 'auto'}}>
        {i => <A.ListBoxItem id={i.id}>{i.name}</A.ListBoxItem>}
      </A.ListBox>
    </A.Virtualizer>
  ));
}
add('virtual-table', 'Virtualizer', () => (
  <A.Virtualizer layout={A.TableLayout} layoutOptions={{rowHeight: 40, headingHeight: 40}}>
    <A.Table aria-label="Virtual table" style={{height: 240, overflow: 'auto'}}>
      <A.TableHeader>
        <A.Column isRowHeader id="name">
          Name
        </A.Column>
      </A.TableHeader>
      <A.TableBody items={Array.from({length: 100}, (_, i) => ({id: i, name: `Item ${i}`}))}>
        {i => (
          <A.Row id={i.id}>
            <A.Cell>{i.name}</A.Cell>
          </A.Row>
        )}
      </A.TableBody>
    </A.Table>
  </A.Virtualizer>
));

function NativeRefButton({ref, ...props}) {
  return <button {...props} ref={ref} />;
}
add('refs', 'Pressable Focusable', () => {
  const pressRef = useRef(null),
    focusRef = useRef(null);
  const [value, set] = useState('none');
  return (
    <>
      <A.Pressable onPress={() => set(pressRef.current ? 'press ref preserved' : 'press ref lost')}>
        <NativeRefButton ref={pressRef}>Function pressable</NativeRefButton>
      </A.Pressable>
      <A.Focusable onFocus={() => set(focusRef.current ? 'focus ref preserved' : 'focus ref lost')}>
        <NativeRefButton ref={focusRef}>Function focusable</NativeRefButton>
      </A.Focusable>
      <Result>{value}</Result>
    </>
  );
});

add('stately', 'ListBox ListBoxItem TextField Label Input ToggleButton Button', () => {
  const [toggled, setToggled] = useState(false);
  const list = A.useAsyncList<{id: string; name: string}>({
    getKey: item => item.id,
    async load({cursor, filterText}) {
      // Exercise asynchronous reducer transitions without a network dependency.
      await new Promise(resolve => setTimeout(resolve, 25));
      const records = cursor
        ? [{id: 'c', name: 'Cherry'}]
        : [
            {id: 'b', name: 'Banana'},
            {id: 'a', name: 'Apple'}
          ];
      return {
        items: records.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase())),
        cursor: cursor ? undefined : 'next'
      };
    },
    async sort({items}) {
      return {items: [...items].sort((a, b) => a.name.localeCompare(b.name))};
    }
  });
  return (
    <>
      <A.ToggleButton isSelected={toggled} onChange={setToggled}>
        Controlled toggle
      </A.ToggleButton>
      <A.TextField value={list.filterText} onChange={list.setFilterText}>
        <A.Label>Filter records</A.Label>
        <A.Input />
      </A.TextField>
      <A.Button onPress={() => list.loadMore()}>Load more records</A.Button>
      <A.Button onPress={() => list.sort({column: 'name', direction: 'ascending'})}>
        Sort records
      </A.Button>
      <A.Button onPress={() => list.reload()}>Reload records</A.Button>
      <A.ListBox
        aria-label="Async records"
        items={list.items}
        selectionMode="single"
        selectedKeys={list.selectedKeys}
        onSelectionChange={list.setSelectedKeys}>
        {item => <A.ListBoxItem id={item.id}>{item.name}</A.ListBoxItem>}
      </A.ListBox>
      <Result>{`${list.loadingState}; items:${list.items.map(item => item.name).join(',')}; selected:${[...list.selectedKeys].join(',')}; toggle:${toggled}`}</Result>
    </>
  );
});
