import {writeFile} from 'node:fs/promises';
import {createElement} from 'preact';
import render from 'preact-render-to-string';
import {HydrationExample} from '../diagnostics/hydration-component.mjs';

await writeFile(
  new URL('../examples/hydration.html', import.meta.url),
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Preact hydration verification</title></head><body><div id="app">${render(createElement(HydrationExample, {}))}</div><script type="module" src="../diagnostics/hydration.tsx"></script></body></html>`
);
console.log('Generated SSR hydration page from the distributable bundle.');
