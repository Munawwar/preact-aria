import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const source = await readFile(new URL('../dist/index.js', import.meta.url), 'utf8');
assert(
  !/from\s*['"](?:react(?:\/[^'"]*)?|react-dom(?:\/[^'"]*)?|react-aria(?:\/[^'"]*)?|react-stately(?:\/[^'"]*)?|use-sync-external-store(?:\/[^'"]*)?)['"]/.test(
    source
  ),
  'Unported runtime import in bundle'
);
assert(
  source.includes('from "preact/compat"'),
  'Preact must be external to share the consumer runtime'
);
const exports = await import('../dist/index.js');
assert(
  exports.Menu && exports.Select && exports.ComboBox && exports.DatePicker && exports.Virtualizer
);
console.log(`Verified ${Object.keys(exports).length} exports and no React runtime imports.`);
