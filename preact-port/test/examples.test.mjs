import assert from 'node:assert/strict';
import {readFile, readdir} from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);

test('the standalone catalog covers every upstream component story and gallery page', async () => {
  const inventory = JSON.parse(
    await readFile(new URL('examples/generated/inventory.json', root), 'utf8')
  );
  const stories = (await readdir(new URL('../starters/docs/stories/', root))).filter(name =>
    name.endsWith('.stories.tsx')
  );
  const gallery = (
    await readdir(new URL('../packages/dev/s2-docs/pages/react-aria/examples/', root))
  ).filter(name => name.endsWith('.mdx') && name !== 'index.mdx');
  assert.equal(inventory.filter(entry => entry.group === 'Components').length, stories.length);
  assert.equal(inventory.filter(entry => entry.group === 'Gallery').length, gallery.length);
  assert.equal(new Set(inventory.map(entry => entry.id)).size, inventory.length);
  const plantDialog = await readFile(
    new URL('examples/generated/gallery/plants/PlantDialog.tsx', root),
    'utf8'
  );
  assert.match(plantDialog, /onSubmit=\{event =>/);
  assert.doesNotMatch(plantDialog, /action=\{formData =>/);
  for (const entry of inventory) {
    assert(entry.stories.length, `${entry.title} has no story`);
    const module = await readFile(
      new URL(`examples/generated/${entry.module.slice(2)}`, root),
      'utf8'
    );
    assert(
      !/from ['"]react-aria-components(?:\/|['"])/.test(module),
      'Examples must exercise the Preact distribution'
    );
  }
  for (const name of (await readdir(new URL('../starters/docs/src/', root))).filter(name =>
    name.endsWith('.css')
  )) {
    assert.equal(
      await readFile(new URL(`examples/generated/vanilla/src/${name}`, root), 'utf8'),
      await readFile(new URL(`../starters/docs/src/${name}`, root), 'utf8'),
      `${name} differs from upstream styling`
    );
  }
});
