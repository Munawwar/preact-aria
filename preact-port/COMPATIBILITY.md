# Preact compatibility guide

Use [React Aria's documentation](https://react-aria.adobe.com/) for component composition, accessibility, props, and styling. This guide describes how to apply it to this fork.

This guide covers `preact-aria-components@1.21.1-preact.0`, built for **Preact 11.0.0** from [Adobe's source at `57c56b8`](https://github.com/adobe/react-spectrum/tree/57c56b8cbfa65294fbaed528ab9580ade0d339cb). Adobe's public documentation can move ahead of that snapshot. Check the [pinned component exports](https://github.com/adobe/react-spectrum/blob/57c56b8cbfa65294fbaed528ab9580ade0d339cb/packages/react-aria-components/exports/index.ts) and this package's declarations when a current example uses an unfamiliar export or prop.

## Install and imports

Follow the [local build and installation instructions](./README.md#install-in-your-app). Install the generated tarball and `preact@11.0.0` in your application. This fork is not the Adobe npm package.

| In an Adobe example | In your Preact application |
| --- | --- |
| Import from `react-aria-components` | Import from `preact-aria-components` |
| Import from `react-aria-components/Menu`, `/Select`, or another component subpath | Import the same exported names from `preact-aria-components`; this package exposes only its root entry |
| Application hooks from `react` | Use `preact/hooks`, or `preact/compat` when adapting React-shaped wrapper code |
| `createRoot` from `react-dom/client` | Use `render` from `preact` for a client application |
| React JSX configuration | Set TypeScript's `jsxImportSource` to `preact` and use `jsx: "react-jsx"` |
| `useAsyncList`, `useListData`, or `useTreeData` from `react-stately` | These three helpers are also exported from `preact-aria-components` |

```tsx
import {render} from 'preact';
import {useState} from 'preact/hooks';
import {Button, MenuTrigger, Menu, MenuItem, Popover} from 'preact-aria-components';

function App() {
  const [action, setAction] = useState('None');
  return (
    <>
      <MenuTrigger>
        <Button>Actions</Button>
        <Popover>
          <Menu onAction={key => setAction(String(key))}>
            <MenuItem id="copy">Copy</MenuItem>
            <MenuItem id="rename">Rename</MenuItem>
          </Menu>
        </Popover>
      </MenuTrigger>
      <p>Last action: {action}</p>
    </>
  );
}

render(<App />, document.getElementById('app')!);
```

The packaged runtime resolves its own React imports through `preact/compat`. Your application does not need React, React DOM, or React aliases to use this package. Other React dependencies you choose to install may need their own compatibility setup.

## Component interfaces

There are **no intentional fork-specific changes to component prop names, callbacks, slots, or render-prop interfaces** against the pinned upstream source. Runtime fixes support Preact's events, refs, collection rendering, and hydration; they do not introduce replacement component APIs. This is an API target, not a claim that every behavior has been tested.

| Area | Upstream reference | What to account for in this fork |
| --- | --- | --- |
| Menu and submenus | [Menu](https://react-aria.adobe.com/Menu) | Keep `MenuTrigger`, `Menu`, `MenuItem`, and `SubmenuTrigger` composition and action/selection callbacks. Import all parts from the root package. |
| Popovers, dialogs, modals, tooltips | [Popover](https://react-aria.adobe.com/Popover), [Dialog and Modal](https://react-aria.adobe.com/Modal), [Tooltip](https://react-aria.adobe.com/Tooltip) | Keep trigger relationships, positioning, dismissal, and focus management props. A custom trigger wrapper must pass through its props and DOM ref. |
| Select | [Select](https://react-aria.adobe.com/Select) | Keep the pinned selection, controlled state, and form interfaces. Rapidly reopening during an exit animation has a known focus issue; see below. |
| ComboBox and autocomplete | [ComboBox](https://react-aria.adobe.com/ComboBox), [Autocomplete](https://react-aria.adobe.com/Autocomplete) | Keep input, selection, filtering, collection, and async-loading interfaces. Import exported data helpers from the root package. |
| Drag and drop | [Drag and Drop](https://react-aria.adobe.com/dnd), [DropZone](https://react-aria.adobe.com/DropZone) | `useDragAndDrop`, `useDrag`, and `useDrop` are root exports. Keep their item formats and callbacks; the native `draggable` adaptation is internal. |
| Date and time | [DatePicker](https://react-aria.adobe.com/DatePicker), [DateRangePicker](https://react-aria.adobe.com/DateRangePicker), [Calendar](https://react-aria.adobe.com/Calendar), [TimeField](https://react-aria.adobe.com/TimeField) | Keep the original date-value types, segments, constraints, and locale behavior. Date constructors still come from `@internationalized/date`. |
| Buttons and selection controls | [Button](https://react-aria.adobe.com/Button), [Checkbox](https://react-aria.adobe.com/Checkbox), [RadioGroup](https://react-aria.adobe.com/RadioGroup), [Switch](https://react-aria.adobe.com/Switch), [ToggleButton](https://react-aria.adobe.com/ToggleButton) | Keep `onPress` and each control's original value/selection callbacks. Components are unstyled. |
| Fields and forms | [TextField](https://react-aria.adobe.com/TextField), [NumberField](https://react-aria.adobe.com/NumberField), [Forms](https://react-aria.adobe.com/forms) | Keep component value and validation props. React function-valued form actions need adaptation; see below. |
| Sliders, colors, and progress | [Slider](https://react-aria.adobe.com/Slider), [ColorPicker](https://react-aria.adobe.com/ColorPicker), [ProgressBar](https://react-aria.adobe.com/ProgressBar), [Meter](https://react-aria.adobe.com/Meter) | Keep numeric/range values and color objects. Type-only Slider changes do not change its runtime interface. |
| Collections and virtualization | [Collections](https://react-aria.adobe.com/collections), [ListBox](https://react-aria.adobe.com/ListBox), [GridList](https://react-aria.adobe.com/GridList), [Table](https://react-aria.adobe.com/Table), [Tree](https://react-aria.adobe.com/Tree), [Virtualizer](https://react-aria.adobe.com/Virtualizer) | Keep item IDs, keys, render functions, selection, and layout contracts. Use one copy of this package for shared collection contexts. |
| Tabs, disclosures, and notifications | [Tabs](https://react-aria.adobe.com/Tabs), [DisclosureGroup](https://react-aria.adobe.com/DisclosureGroup), [Toast](https://react-aria.adobe.com/Toast) | Keep the pinned interfaces and export names, including any `UNSTABLE_` names. Toast's type adaptation does not add new props. |

For components not listed here, apply the same import changes and use the corresponding [Adobe component page](https://react-aria.adobe.com/). Confirm availability in the pinned exports rather than assuming every future Adobe feature is included.

## Copying styled examples

Adobe's examples often import a local wrapper such as `./Menu` or `./Select`. Those wrappers supply styling and sometimes additional props such as `label`. Copy the wrapper and its CSS or Tailwind setup too; those extra props are not automatically part of the underlying unstyled component.

Change the wrapper's library imports as described above. Copy referenced helpers and icons deliberately: an icon library that requires React does not become Preact-compatible just because the Aria components are ported. Adobe's shadcn registry and starter downloads install their original React dependencies; review their imports and dependencies before using them here.

Default `react-aria-*` classes, state data attributes, `className`/`style` render functions, and component slots retain their upstream contracts. You do not need to rename CSS selectors. See [Adobe's styling guide](https://react-aria.adobe.com/styling).

## Refs, events, and TypeScript

- Use Preact's `useRef` or `createRef`. Custom component wrappers must forward a ref to the actual DOM element; `forwardRef` from `preact/compat` can adapt a React-style wrapper.
- Keep Aria callbacks such as `onPress`, `onAction`, and component `onChange` in their documented roles. They are not interchangeable with raw DOM `onClick` or `onInput` handlers. On native Preact inputs, use `onInput` when you need updates for each keystroke.
- The event wrapper preserves native keyboard fields and methods. This is not a promise of React's complete synthetic-event implementation for arbitrary application handlers.
- Public declaration names such as `ReactNode` remain for source compatibility, but their packaged adapters use Preact types. Consumers do not need `@types/react` or TypeScript paths mapping React to Preact. Import component prop types from `preact-aria-components`; use `ComponentChildren`, `VNode`, and JSX types from Preact for your own code.
- Strict consumer checks cover both TypeScript Bundler and NodeNext resolution. Signals as component prop values have not been separately verified; ordinary values match the documented interface.

## React-specific examples that need changes

### Form actions

This port does not implement React 19's `useActionState` or function-valued native form `action` behavior. Preserve the validation/save logic and submit using Preact events and `FormData`:

```tsx
import {useState} from 'preact/hooks';
import {Button, Form, Input, Label, TextField} from 'preact-aria-components';

function Example() {
  const [saved, setSaved] = useState('');
  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setSaved(String(data.get('name') || ''));
      }}>
      <TextField name="name" isRequired>
        <Label>Name</Label>
        <Input />
      </TextField>
      <Button type="submit">Save</Button>
      <p>Saved: {saved}</p>
    </Form>
  );
}
```

For an asynchronous action, manage pending state and returned validation errors explicitly. Keep upstream accessibility and form validation props. The exact adaptations used in this fork's examples are recorded in [documentation-patches.json](./documentation-patches.json) and [example-patches.json](./example-patches.json). See [Adobe's forms guide](https://react-aria.adobe.com/forms) for the original patterns.

### SSR, hydration, and framework integrations

Standalone SSR and native Preact hydration have representative tests using `preact-render-to-string@6.7.0` and `hydrate` from `preact`. Keep the initial server/client trees consistent. `SSRProvider` is exported for API compatibility and is a pass-through here; generated IDs use Preact's `useId`. ID strings need not match React's strings.

This does not establish support for React Server Components, React streaming SSR, Next.js server actions, or other React framework integration. StrictMode lifecycle replay and React concurrent scheduling are not compatibility guarantees. The presence of an upstream React-shaped API in `preact/compat` does not mean its behavior is identical to React's.

## Package and source scope

| Area | Current scope |
| --- | --- |
| `react-aria-components` | Bundled as `preact-aria-components`, with Preact external |
| Aria hooks and utilities | Code reachable from the Components entry is bundled; only names exported by that entry are public |
| React Stately | Source unchanged from the pinned snapshot; reachable code is bundled and selected helpers are exported |
| Shared types and Aria utility source | Unchanged upstream source; Preact type adaptation lives in the build harness |
| `@internationalized/*` | Original framework-independent packages; install ones you import directly |
| Separate `react-aria`, `react-stately`, and `@react-aria/*` packages | This harness does not publish full standalone replacements; installing Adobe's packages is not the same as using the bundled port |
| React Spectrum and Spectrum icons | Outside the standalone unstyled distribution; use in internal fixtures is not a supported public Preact port |

The [patch inventory](./upstream-patches.json) records 13 implementation files across Aria and Components, plus browser test changes. Most implementation changes concern internal collection DOM, native event wrapping, refs, IDs/hydration, and `draggable`; the remaining changes adapt types or the entry marker. [The source audit](./README.md#upstream-source-through-aliases) checks that Stately, shared types, and Aria utility source remain unchanged.

## Known limits and verification

- **Select exit-animation race:** immediately reopening while the previous popup is animating closed can lose popup focus. Normal reopening after the popup disappears passed. Its behavior in the untouched React reference has not been compared; do not assume it is exclusive to this fork.
- **Browser tests:** the recorded upstream Preact run passed 408 cases across Chromium, Firefox, and WebKit, with 69 existing upstream skips. That suite does not cover every component/prop combination. WebKit on Linux is not a Safari-device certification.
- **Other test suites:** the original root React Jest and SSR runners remain unconfigured for this standalone Preact bridge. Their failures are separate from the passing browser suite and representative standalone SSR/hydration checks.
- **Unverified areas:** screen readers, touch, forced colors, exhaustive RTL interactions, external async services, and complete third-party framework integrations.

See [VERIFICATION.md](./VERIFICATION.md#upstream-browser-suite--october-3-2026) for provenance, test counts, skip reasons, and historical checks. For a discrepancy, record the component, props, Preact version, browser, and a minimal reproduction; compare with the pinned upstream source before treating the latest Adobe documentation as the exact baseline.
