# Preact 11 port verification

Verified on October 1, 2026 against Preact 11.0.0. Upstream source is `adobe/react-spectrum@57c56b8`, with React Aria Components 1.21.1. The port is on branch `main`.

## Result

All 53 isolated pages passed 165 representative checks against the distributed `dist/index.js` bundle. Coverage maps 151 public component and collection helper exports to those pages. Every public UI component was attempted. Constants, geometry classes, layout classes, and the toast/token data models are listed separately in [results.json](./verification/results.json). Concrete layouts and both data models were exercised by their component pages. Context exports are consumed internally and through the provider examples. The added `stately` page verifies async initial loading, pagination, sorting, filtering, reloading, selection, and controlled toggle updates.

These results verify the configurations and actions listed in the report. They do not establish that every prop combination or accessibility interaction works.

### Requested priorities

| Family | Verified actions and states |
| --- | --- |
| Menu | Pointer open, disabled item, selection, Escape and focus restoration, ArrowDown, End, submenu ArrowRight and Enter, outside dismissal |
| Popover | Dialog content, typing inside, Escape, close button, restored focus, outside dismissal |
| Select | Disabled option, pointer selection, keyboard open, Home and Enter selection, Escape and preserved value |
| Combobox | Input filtering, filtered keyboard selection, full collection, pointer selection, Escape |
| Drag and drop | Keyboard reorder with Enter/ArrowDown/Enter, native pointer drag to a separate DropZone, dropped data |
| Date picker | Calendar open, date selection, next/previous month, Escape, direct keyboard segment editing |

Other pages cover buttons, checkbox/radio/switch compositions, inputs, sliders, meters, tabs, disclosure, modal, tooltip, preview, breadcrumbs, toolbar, collections, table resize/sort/selection, trees, tags, calendars, date ranges, time, autocomplete, tokens, all color controls, form validation/submission/reset, file selection, toast, shared elements, providers, loaders, refs, and virtualized list/grid/waterfall/table layouts. Exact per-page checks and component names are in the JSON report.

## Runtime and typing changes

- Preserved original React imports across Aria and Components and aliased them to Preact through `compat/react.mjs`. Stately and shared types are entirely unchanged from upstream `57c56b8`, as is Aria's utility directory. React, React DOM, and the external-store shim resolve through the adapter and are absent from the standalone consumer.
- Kept the Preact type bridge in `preact-port/compat/types.d.ts`; emitted declarations refer to local packaged files with explicit ESM extensions for NodeNext. Public upstream type names are retained.
- Extended the collection's fake DOM with `childNodes`, `remove`, and `createElementNS` for Preact 11 portals.
- Preserved inherited native keyboard event properties when wrapping events, including key and target information.
- Read refs from function component props under Preact 11 in Pressable and Focusable; both refs passed browser checks.
- Replaced React fiber based SSR detection with Preact compatible IDs and hydration detection. Removed the component entry's `client-only` import.
- Used boolean native `draggable` values. Stately reducer/action and collection-element type differences are handled in `compat/react.d.ts`, without source patches.

## Gates that passed

| Gate | Evidence |
| --- | --- |
| Parcel library build | 295 runtime exports; no React or React DOM runtime imports; consumer Preact remains external |
| Library declarations | All ported source compiles with `skipLibCheck: false`; source retains the configured `noImplicitAny: false` |
| Native Preact JSX consumer | Strict TypeScript in Bundler and NodeNext modes, `skipLibCheck: false`, six priority APIs, no React aliases or React type dependencies |
| Node tests | 3 passed: package runtime, SSR values/labels/IDs, SSR collection selection |
| Packed consumer | Fresh tarball install, strict TypeScript in both resolver modes, SSR fields/date segments and selected listbox; `npm ls react react-dom --all` is empty |
| Native hydration | Distributed bundle; original input, date segment, list item, and generated ID retained; input edit, list selection, menu action, and date segment edit passed |
| Harness formatting/lint | oxfmt and oxlint passed; `git diff --check` passed |

Hydration used native `preact.hydrate`, with `preact-render-to-string@6.7.0` on the server. The hydrated result was `Client value; b; copy`; day segment editing changed October 1 to October 2. Browser snapshots and logs were checked after each action.

## Browser and harness notes

Interaction checks used Playwriter in the existing Chromium browser on Linux (reported Chrome 154). Form validation, successful submission through native FormData, and reset were rechecked with computer-use-linux desktop clicks and keyboard input after Playwriter disconnected during native invalid submission. AT-SPI exposed only the browser frame, so screenshots provided visual readback. Required submission showed the error and focused Email; keyboard input plus Tab cleared it; Enter submitted the value; Tab/Space reset the field. Earlier browser-control verification also checked native validity and aria-invalid.

Initial harness failures were corrected to use upstream accessible names, explicit autocomplete filtering, proper navigation tree composition, visible label coordinates, and layout appropriate scroll assertions. Tooltip checks include pointer hover, keyboard focus, and Escape. Table resize checks enter resize mode, verify a changed range value, and exit with Escape. Each virtualized layout scrolls away from Item 0 and reaches Item 99 with End.

The static example build disables Parcel scope hoisting: its bundled `preact/compat` re-exports otherwise produced invalid local identifiers in this harness. The library build keeps Preact external and passes normal Parcel library compilation.

Raw snapshots and logs are stored locally under ignored `artifacts/evidence/`, with hydration and utility observations in `artifacts/hydration-observations.json` and `artifacts/utilities-observations.json`. The committed report stores final statuses, coverage, and check names.

## Reproduce

From `preact-port`:

```sh
npm install --workspaces=false
npm run build
npm test
npm run test:types
npm run lint
npm run build:examples
python3 -m http.server 4100 --directory artifacts/site
```

With the Playwriter extension connected, run from the repository root in a separate terminal:

```sh
playwriter session new --tab-group aria
# Replace 1 with the returned session ID.
playwriter -s 1 --timeout 900000 -f preact-port/test/catalog.playwriter.js
playwriter -s 1 --timeout 120000 -f preact-port/test/hydration.playwriter.js
playwriter -s 1 --timeout 120000 -f preact-port/test/utilities.playwriter.js
```

The catalog script creates its own tab and tests 52 pages. This run hit the CLI timeout at 600 seconds after 51 pages, but its final Stately case continued and passed; final per-page files confirmed all 52 completed. The form page is separate because of the observed driver disconnect: submit empty, verify invalid state and FieldError, type `ada@example.test` using keyboard entry, submit, verify cleared validation and the result, then reset and verify the cleared value and validation.

To rerun a subset after initializing `state.page`, set `state.cases` and run `test/priority.playwriter.js`. The script fails if any selected page fails. `test/smoke.playwriter.js` provides a rendering pass over the registry.

`scripts/verification-report.mjs` regenerates the report from local evidence and refuses missing coverage, failed final page results, or failed hydration node retention. `npm pack --workspaces=false` creates the installable tarball.

## Remaining limits

- Upstream Jest and Storybook suites were not migrated or run. The full monorepo's original build/type/lint gates were not run; this work uses the standalone package gates above.
- Firefox, Safari, touch, screen readers, forced colors, and RTL interactions were not tested.
- Examples exercise representative configurations; deeper combinations such as cross-window drag, complex collection mutations, and every controlled/uncontrolled prop combination are not covered.
- Native hydration covers the listed components; streaming SSR and framework integration were not tested.
- The standalone package is ESM only. React Spectrum and unrelated monorepo packages are not ported.

## Demo styling review — October 2, 2026

All 53 isolated pages were opened in the browser and visually reviewed after the styling update. No page showed an error boundary or horizontal document overflow at the existing desktop viewport. The examples now include visible checkbox, radio and switch indicators, selected toggle buttons, calendar cells, slider fills, meter/progress tracks, collection states, table headers, tabs, disclosure panels, tags, overlays and toast cards. Styling belongs to the demo; the distributed components remain unstyled.

Fresh pointer and keyboard checks covered checkbox/radio/switch/toggle selection, menu selection and Escape, select options, combobox filtering and keyboard selection, date selection, popover editing/closing, modal closing, toast dismissal, keyboard drag reordering, table sorting/selection/resizing, tabs, disclosure and color-wheel hue changes. All four virtualized layouts reached Item 99 with End. The color-wheel fixture now supplies the required inner/outer radii so the track and thumb render correctly. These checks supplement the earlier full catalog run; that entire interaction suite was not rerun for this styling change.

The example/library build, lint, three Node tests and both strict consumer TypeScript modes passed. Local screenshots and observations are in the ignored `artifacts/styling/` directory.

## Stately alias comparison

The earlier import rewrites, reducer type edits, collection casts, dispatch argument, and toast shim replacement have been removed from `packages/react-stately/src`. This comparison is against the same upstream snapshot, not a newer upstream release:

```sh
git diff --exit-code 57c56b8cbfa6 -- packages/react-stately/src
```

Parcel and TypeScript adapters live under `preact-port/compat`; upstream manifests remain unchanged and the harness generates Preact package metadata. This establishes that the tested Stately paths work with unchanged upstream source and build-time aliasing/type adaptation. It does not establish independent coverage of every Stately hook.

## Utility and package scope audit

The same approach restored all Aria utilities and shared declarations. The original shadow-event fallback remains safe for native events because they take the `composedPath` branch; its separate synthetic fallback is retained. The browser catalog exercises integrated utility behavior such as labels/IDs, form reset, links, focus/ref composition, animation, keyboard handlers, resize, and virtualized loading. The separate utilities.html page compiles unchanged upstream utility source through aliases and passed pointer click, Tab, and Space: native composedPath and synthetic nativeEvent target branches, shadow focus, containment, propagation targets, callback/object merged refs, generated IDs, and both chained handlers. This is not a test of every exported utility or every shadow-DOM configuration.

The remaining source changes span only `react-aria` and `react-aria-components`: 13 files, listed with their reasons in [upstream-patches.json](./upstream-patches.json). `npm run check:upstream` verifies the exact unchanged Stately, shared-types, and utility trees, and fails for an unlisted source patch.

Historical `@react-aria/*` and `@react-stately/*` wrapper packages already re-export the consolidated packages and need no implementation changes. Their original React peer metadata is retained; the harness does not publish them independently. Framework-independent internationalization dependencies are unchanged. Spectrum/icon rendering packages are outside the unstyled distribution and were not ported or tested.

## Sidebar and showcase review — October 2, 2026

The shared layout now uses a sidebar and a first-focusable skip link. Browser checks verified Tab focuses **Skip to example**, Enter focuses the main example, and the next Tab reaches **Basic tests**. ArrowRight selects **Showcase** and updates the visible panel and URL. Unsupported entries return to Basic tests with Showcase disabled. The tooltip catalog regression now follows this skip route instead of assuming the last navigation link directly precedes the example.

All 53 Basic pages rendered without an error boundary or horizontal document overflow at the existing desktop viewport. All 19 showcase entries were opened and visually reviewed; they share 13 distinct use cases. Fresh mouse/keyboard interaction checks passed for each use case:

| Use case | Verified interactions |
| --- | --- |
| Documents | Rename dialog and save, duplicate, keyboard nested move menu, updated folder detail, archive |
| Team invitations | Valid email, role selection, prepare local invitation, close popover and show feedback |
| Preferences | Language option selection and save feedback |
| Task assignment | Filter to Leo, arrow navigation and Enter, assigned teammate updates |
| Roadmap | Enter starts drag, ArrowDown reorders, Tab targets archive and Enter drops/removes a task |
| Meeting scheduler | Calendar date selection, minute ArrowUp, duration selection and schedule feedback |
| Trip planner | Two-click date range, guest increment, Space on flexible dates and save feedback |
| Notifications | Checkbox and switch changes, save reflects category count and quiet hours |
| Plan picker | ArrowRight selects Business, Space changes billing period and prices/feedback |
| Writing studio | Italic and center controls, text editing, computed live preview style and text |
| Team directory | Search filtering, row selection/profile and keyboard column sorting |
| Workspace overview | Project selection, arrow navigation to Activity/Billing, annual billing changes price |
| Color studio | Swatch selection, hue and area arrow keys, hex editing, live preview accent updates |

The color review found that RGB swatches broke a controlled HSB hue slider. The fixture now normalizes every input to HSB; swatch, hue, hex and area edits were rechecked together. These are demo-only changes. Library build/export checks, example build, lint, three Node tests, strict consumer types in both modes and the upstream source guard passed. Upstream source still differs in exactly 13 files. The entire older 165-check catalog suite was not rerun for this layout update; its previous results remain separate.

Local screenshots and render observations are stored under ignored `artifacts/showcase/`, including `workspace-final.jpg`, `preferences-final.jpg`, `color-verified.jpg` and `basic-render-check.json`. The browser review used Chromium/Brave on Linux at its existing desktop viewport; mobile, other browsers, screen readers and the limits above remain unverified.

## Committed Pages build and push guard — October 2, 2026

The static Pages target was built repeatedly from a clean output directory; the generated files matched the Git index with no diff. It uses relative asset URLs so it works at the project path `/preact-aria/`. Browser checks against a local server at that path passed menu open/duplicate, sidebar navigation, keyboard skip and switching between Basic tests and Showcase. This change does not alter component implementations.

A real `git push --dry-run` to a temporary bare repository invoked the installed pre-push hook and was rejected for staged, uncommitted site output. A Node integration test using a separate temporary Git repository verifies rejection of missing, modified, deleted, staged and new output, and acceptance after committing it. The harness now has four passing Node tests; library export/type checks, formatting, lint and the upstream guard also passed. The unchanged upstream trees remain unchanged and the patch count remains 13.

The hook is installed locally with `npm run hooks:install` in each clone. It rebuilds on every push and checks actual Git changes without fingerprints/checksum files. Published output lives on `gh-pages`, separate from the two-commit source history. Only an explicit `npm run publish:pages` updates that branch. Local rejection evidence is in ignored `artifacts/pages-hook-rejection.txt`.

GitHub Pages is configured through the CLI/API to serve `gh-pages` at `/` with HTTPS enforced. The first deployment succeeded ([deployment run](https://github.com/Munawwar/preact-aria/actions/runs/37018925193)); the live site is https://munawwar.github.io/preact-aria/. Browser checks on the live site passed first-Tab skip navigation, arrow navigation to Activity, menu open/duplicate, component navigation and switching to Basic tests. No browser warnings or errors were reported. The static native-hydration page was also checked locally: text editing and keyboard option selection updated the result with no warnings or errors. `npm run publish:pages` was run a second time and skipped creating another deployment because the committed files were already published. Screenshot proof is in ignored `artifacts/pages-live.jpg`.

## Slider and accordion layout fixes — October 2, 2026

The root README now links prominently to the live examples and Showcase. The Volume fixture uses a padded control card and separates its 8px painted rail from a 28px pointer interaction area. Horizontal slider and color-slider thumbs are centered vertically using `top: 50%`, retaining the upstream positioning transform. The accordion uses the upstream `--disclosure-panel-height` variable with clipped overflow and puts padding on an inner content wrapper, preserving `hidden="until-found"` behavior. This follows the structure of the upstream Vanilla CSS starter and requires no implementation changes in `packages`.

Browser measurements verified a zero-pixel thumb/rail center offset, arrow increment to 41, Home to 0, End to 100 and a pointer rail click to 50. The shared ColorSlider also measured a zero-pixel center offset and ArrowRight changed hue. Closed accordion panels previously measured 22px; both now measure 0px before and after toggling. Pointer expansion, Enter switching to the second panel and Space collapse passed; the expanded content retained its padding. New geometry and pointer/Home regression checks were added to the existing catalog script. These conditions were verified through the browser connection; the full older catalog suite was not rerun.

Library/Pages/local demo builds, formatting, lint and the upstream source guard passed. The published build is committed with its removed assets pruned. Local screenshots and numeric observations are in ignored `artifacts/layout-fixes/`.
