# Preact Aria Components

Experimental source port of Adobe React Aria Components and its Aria/Stately dependencies to Preact 11.0.0. The original component API is retained, including its upstream `React*` type names. Runtime imports resolve to Preact and its own `preact/compat` module; React and React DOM are not required.

Upstream source: [adobe/react-spectrum at `57c56b8`](https://github.com/adobe/react-spectrum/commit/57c56b8), whose component package declares version 1.21.1. This fork is not an Adobe release.

Read the [Preact compatibility guide](./COMPATIBILITY.md) for import changes, component interfaces, copied styling examples, React-specific features, and known limits. Use [Adobe's documentation](https://react-aria.adobe.com/) for the full component reference.

## Install in your app

Build and pack the local port:

```sh
cd preact-port
npm install --workspaces=false
npm run build
npm test
npm run test:types
npm pack --workspaces=false
```

In your app, install the generated `preact-aria-components-1.21.1-preact.0.tgz` and Preact 11. Import components from `preact-aria-components` using Preact's JSX runtime:

```tsx
import {render} from 'preact';
import {Button} from 'preact-aria-components';

render(<Button onPress={() => console.log('pressed')}>Press</Button>, document.getElementById('app')!);
```

React aliases are unnecessary. Components retain the original API and are unstyled. The standalone package exposes an ESM entry and Preact based declarations. For server rendering, the tested renderer is `preact-render-to-string@6.7.0`; use native Preact `hydrate` on the client.

## Run the isolated pages

Install the root workspace dependencies once for the upstream examples' build tools and helpers:

```sh
# From the repository root:
node .yarn/releases/yarn-4.18.0.cjs install --immutable --mode=skip-build
npm ci --prefix preact-port --workspaces=false
cd preact-port
npm run build:examples
python3 -m http.server 4100 --directory artifacts/site
```

Open `http://localhost:4100/?example=menu`. The existing shell now contains **347 pages / 1,026 upstream variants**. Search the sidebar, choose a group, then choose a use case. The first keyboard stop is **Skip to example**: press Tab and Enter to bypass the sidebar. `npm start` runs the Parcel development server. Hydration and utility diagnostics remain at `/hydration.html` and `/utilities.html`.

## Upstream examples and use cases

| Group | Pages | Variants | Original source |
| --- | ---: | ---: | --- |
| Components | 49 | 54 | Vanilla CSS starter stories |
| Documentation | 131 | 490 | React Aria MDX render blocks and VisualExample instances, including hooks, guides, releases and blog examples |
| Storybook | 48 | 239 | React Aria Components stories |
| Hook stories | 29 | 123 | React Aria hook stories |
| State stories | 1 | 1 | React Stately stories |
| Tailwind | 48 | 78 | Tailwind starter stories |
| Hooks | 33 | 33 | Hooks starter stories |
| Gallery | 8 | 8 | React Aria's rich examples gallery |

The build reads the original upstream files. `npm run sync:examples` regenerates ignored copies under `examples/generated`, expands component switchers, imports referenced helpers/assets, and builds Tailwind utilities. Original story bodies and styles are retained, along with arguments and decorators. Documentation variants expose their original code and a link to the exact upstream source line. Prop controls use the library's declared enum, boolean, number and object types; JSON controls apply on blur. Virtualizer controls preserve the original nested `layoutOptions` object. Story previews provide locale, theme and scale settings using upstream Spectrum's Provider and themes.

The adapter changes module paths, wraps top-level JSX, and records Storybook actions in the console. All Aria/Components/Stately imports share one canonical copy of the ported source, avoiding duplicate contexts between component and hook examples. The packaged distribution is checked separately through strict consumer, SSR and hydration tests. Adobe's CSS processors and icon transformer are reused for stories that depend on Spectrum helpers.

Small semantic exceptions are recorded with exact source guards: [example-patches.json](./example-patches.json) covers the gallery's native form submission and shortcut context; [documentation-patches.json](./documentation-patches.json) adapts React 19's `useActionState` form example to native `onSubmit` and local state, retaining its original validation action. Upstream source files remain unchanged. Tests compare every imported story body with the original after normalizing module paths, and check the full documentation inventory.

This is a static fixture browser, not the Storybook manager or Adobe docs application. Storybook add-on panels, its React StrictMode switch, and documentation infrastructure are not included. Async examples retain their original external services; successful initial rendering does not verify those services, every prop combination, or every interaction. See [VERIFICATION.md](./VERIFICATION.md) for actual browser results and limits.

Open `http://localhost:4100/?example=gallery` for the gallery. The previous custom Basic/Showcase catalog remains in the tag [`backup/custom-examples-2026-10-02`](https://github.com/Munawwar/preact-aria/tree/backup/custom-examples-2026-10-02). Its historical report describes the archived fixtures.

## Publish the examples to GitHub Pages

Live examples: **https://munawwar.github.io/preact-aria/**. The source branch commits the static output in `preact-port/site`; GitHub Pages serves a separate `gh-pages` branch containing only that output. Source pushes do not deploy the website. Builds run locally; GitHub handles static deployment without installing or compiling this project.

Install the hook once per clone after installing the harness dependencies (Node 22.23.3 was used for verification):

```sh
cd preact-port
npm ci --workspaces=false
npm run hooks:install
```

Before pushing source changes:

```sh
npm run build:pages
cd ..
git add -A preact-port/site
# Stage your source changes too, then commit both.
git commit -m "feat: update examples"
git push origin HEAD:main
```

The tracked `.githooks/pre-push` rebuilds the complete library and examples on every push. It rejects build failures or any modified, deleted, staged or new file in `preact-port/site`. If rejected, review the rebuilt files, commit them and retry. It uses Git's actual file changes, with no checksum or fingerprint manifest. Check out the source commit you intend to push; unrelated old branch/tag commits are rejected because the current checkout cannot build them.

Publish explicitly **after committing and pushing your source to `main`**:

```sh
cd preact-port
npm run publish:pages
```

This requires a clean source checkout, rebuilds and checks the committed output, copies it into a temporary worktree, and pushes a static-only commit to `gh-pages`. The push hook runs again before that push and compares the deployment files with the committed site. If the output is already published, it skips creating another deployment. It never commits source changes automatically, force-pushes the deployment branch or adds build timestamps. To change Pages settings manually, select **Deploy from a branch → gh-pages → / (root)** in repository Settings → Pages.

Parcel's Pages target uses relative asset URLs and omits source maps. `.nojekyll` and the Apache license are included. The ordinary local example build still writes to ignored `artifacts/site`, so the existing localhost workflow is unchanged. Commit all deletions as well as additions when asset filenames change.

## Verification

The archived custom catalog passed its representative checks on all 53 pages, covering 151 component and collection helper exports with 165 checks. The separate utility page also passed pointer and Tab/Space checks, including both native and synthetic shadow-event target branches. Menu, popover, select, combobox, keyboard and pointer drag/drop, and date picker were verified first. The tarball also passed a separate strict TypeScript (Bundler and NodeNext) and SSR consumer with no React installed.

See [VERIFICATION.md](./VERIFICATION.md) for current upstream-example checks and [the historical component coverage report](./verification/results.json) for the archived fixture results and limits. The full upstream browser suite now passes on Chromium, Firefox and WebKit under Preact: **408 passed, 69 upstream skips** including new regressions. Touch and screen readers remain unverified, and the original React Jest/SSR runners still need Preact configuration. See the current browser report below.

## Run the upstream browser tests

Install both dependency sets. The original root postinstall builds React icons; skip it for this Preact browser harness:

```sh
# From the repository root, with Node 22 or newer:
node .yarn/releases/yarn-4.18.0.cjs install --immutable --mode=skip-build
npm ci --prefix preact-port --workspaces=false
node .yarn/releases/yarn-4.18.0.cjs test:browser:preact
```

Playwright installs its pinned Chromium, Firefox and WebKit. Linux may also require `node .yarn/releases/yarn-4.18.0.cjs playwright install-deps` with administrator privileges. Keep `CI` unset to run the upstream Chat checks that skip on CI. Results are written to ignored `preact-port/artifacts/browser/cases.json`.

This uses every upstream `*.browser.test.tsx` fixture, the real Preact runtime and its `act`, the original browser driver, and upstream console-error checks. Tests that use Adobe's synthetic DOM helper flush Preact's real effects after each event. Native focus/selection fixtures run serially, and a Node queue protects the actual OS clipboard. The React reference uses the same scheduling and clipboard helper. No new skips or fake framework APIs were introduced.

To compare against untouched React at the fork point:

```sh
git clone https://github.com/adobe/react-spectrum.git ../react-aria-upstream-baseline
git -C ../react-aria-upstream-baseline checkout 57c56b8cbfa65294fbaed528ab9580ade0d339cb
(cd ../react-aria-upstream-baseline && node .yarn/releases/yarn-4.18.0.cjs install --immutable)
node preact-port/scripts/browser-reference.mjs ../react-aria-upstream-baseline
node preact-port/scripts/browser-reference.mjs ../react-aria-upstream-baseline --regressions
```

The reference script rejects changed tracked files or the wrong commit. Its generated configuration and copied regression fixtures live only in the clone's ignored `dist` directory. [Current results and remaining limits](./VERIFICATION.md#upstream-browser-suite--october-3-2026) include the exact comparison and skip breakdown.

## Source development

The standalone build copies source from `../packages` into an ignored `vendor` directory, compiles localization dictionaries, bundles the component/hook/state code with Parcel, and emits self contained declarations. Make necessary Aria/component behavior fixes in `../packages`, then run `npm run build`. Keep import and type adaptation in the standalone harness. Stately, shared types, and Aria utilities remain unchanged from the upstream snapshot. React Spectrum and unrelated monorepo packages remain outside this port.

Use `npm run format` (oxfmt) and `npm run lint` (oxlint) for the standalone harness. Browser scripts run through Playwriter in an isolated session in the existing browser. The upstream examples are checked with Playwriter in the same browser.

## Why a separate build package?

`preact-port` is the development/build directory. The installable package is named `preact-aria-components`. It builds from the existing `../packages` source; the ignored `vendor` directory is regenerated and deleted source files are pruned. There is one maintained copy of each upstream implementation.

The directory isolates the Preact compiler, aliases, declarations, package metadata, and examples from the original React Spectrum monorepo's React builds, docs, icons, and tests. It also gives the distribution a distinct identity from Adobe's React package. A separate directory is a build choice, not a Preact requirement: these scripts could live at the repository root. Keeping them together makes upstream merges easier to review.

The single package bundles the Aria and Stately code reachable from the Components entry, with Preact external so it shares your application's runtime. It does **not** publish complete standalone Aria, Stately, utility, or icon packages. A hook absent from that entry is not automatically a public export. Adding public hook/utility entries is a separate distribution task; they should share the same runtime module so contexts and global state are not duplicated.

## Upstream source through aliases

The build aliases `react`, `react-dom`, and `use-sync-external-store/shim/index.js` to `compat/react.mjs`, which forwards the required APIs to `preact/compat`. A local entry works around Parcel's external alias/re-export handling. Consumer applications need no React aliases or installed React dependency.

TypeScript maps React imports to `compat/react.d.ts`; `compat/types.d.ts` supplies the Preact type bridge. These adapters handle reducer, element, child, ref, and namespace signatures. Generated declarations refer to packaged local adapters with explicit ESM extensions, so consumers need neither React types nor aliases.

| Package/family | Source status against `57c56b8` |
| --- | --- |
| `react-stately` | Entire package unchanged, including its manifest and external-store shim import |
| `@react-types/shared` | Entire package unchanged; Preact type bridge moved into this harness |
| `react-aria/src/utils` | Entire directory unchanged, including the native/synthetic shadow-event branches |
| `@react-aria/*`, `@react-stately/*` wrappers | Unchanged re-export source and metadata; not separately distributed by this harness |
| `@internationalized/*` | Used unchanged; no Preact-specific port required |
| `react-aria` and `react-aria-components` | 13 implementation files differ; original imports and manifests otherwise retained. Four browser test files also differ, including two new regressions |
| Spectrum components/icons | Icons use `@adobe/react-spectrum` rendering wrappers; outside this unstyled distribution and not ported or verified |

The remaining changes concern portal collection DOM, native event wrapping, refs, SSR IDs/hydration, boolean `draggable`, the entry marker, and a few type checks/dynamic tags. The exact files and reasons are tracked in [upstream-patches.json](./upstream-patches.json). The implementation delta dropped from 252 files after the Stately refactor to 13 files across two upstream workspaces. The inventory now also includes four browser test files; the AI workspace has a test-only change.

`npm run check:upstream` runs during the build. It verifies the unchanged trees and requires the source patch inventory to match the actual diff. It detects drift; it does not verify behavioral compatibility. The upstream manifests stay intact, and `sync` generates Preact metadata from this package's manifest.

`main` preserves the complete upstream Git history through `57c56b8`, followed by the Preact fork commit and subsequent fixes. That original upstream revision is also the source audit baseline. For an upstream update, fetch upstream and merge the chosen upstream revision into `main`, review those 13 patches and any conflicts, update the baseline/inventory deliberately, then rebuild, check the consumer declarations, and rerun the browser pages. New upstream React APIs may require additional adapter exports. The archived `stately` fixture exercised async loading, pagination, sorting, filtering, reloading, selection, and controlled toggle updates.
