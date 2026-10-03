import {readFile, writeFile} from 'node:fs/promises';
import {Marked} from 'marked';

const escape = text =>
  String(text).replace(
    /[&<>"']/g,
    char =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      })[char]
  );
const sections = [];
const headings = new Map();
const markdown = new Marked({
  renderer: {
    heading({depth, text, tokens}) {
      const slug = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      const count = headings.get(slug) || 0;
      headings.set(slug, count + 1);
      const id = slug + (count ? '-' + count : '');
      if (depth === 2) sections.push({id, text});
      return `<h${depth} id="${id}">${this.parser.parseInline(tokens)}</h${depth}>`;
    },
    link({href, title, tokens}) {
      if (href.startsWith('./')) {
        href = 'https://github.com/Munawwar/preact-aria/blob/main/preact-port/' + href.slice(2);
      }
      return `<a href="${escape(href)}"${title ? ` title="${escape(title)}"` : ''}>${this.parser.parseInline(tokens)}</a>`;
    },
    table(token) {
      const content = `<thead>${this.tablerow({text: token.header.map(cell => this.tablecell(cell)).join('')})}</thead><tbody>${token.rows.map(row => this.tablerow({text: row.map(cell => this.tablecell(cell)).join('')})).join('')}</tbody>`;
      return `<div class="guide-table" tabindex="0" role="region" aria-label="Compatibility table"><table>${content}</table></div>`;
    }
  }
});
const content = markdown.parse(
  await readFile(new URL('../COMPATIBILITY.md', import.meta.url), 'utf8')
);
const css = (
  await Promise.all(
    ['shell.css', 'compatibility.css'].map(file =>
      readFile(new URL('../examples/' + file, import.meta.url), 'utf8')
    )
  )
).join('\n');
await writeFile(
  new URL('../examples/compatibility.html', import.meta.url),
  `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="Using React Aria with Preact 11: package imports, component interfaces, styling, forms, SSR, and known compatibility limits.">
  <title>Preact compatibility guide · Preact Aria</title>
  <link rel="icon" href="data:,">
  <style>${css}</style>
</head>
<body>
  <div class="site-shell">
    <header class="site-header">
      <a class="skip-link" href="#guide">Skip to guide</a>
      <div><a class="site-title" href="./?example=menu">Preact Aria</a><p>React Aria components for Preact 11</p></div>
      <nav class="header-actions" aria-label="Site navigation">
        <a href="./?example=menu">Examples</a>
        <a href="https://react-aria.adobe.com/">React Aria docs ↗</a>
        <a href="https://github.com/Munawwar/preact-aria">GitHub</a>
      </nav>
    </header>
    <div class="workspace">
      <aside class="site-sidebar guide-sidebar">
        <nav aria-label="On this page"><h2>Compatibility</h2>${sections.map(section => `<a href="#${section.id}">${escape(section.text)}</a>`).join('')}</nav>
      </aside>
      <main id="guide" tabindex="-1" class="compatibility-content" aria-labelledby="preact-compatibility-guide">
        <p class="eyebrow">Compatibility reference · Preact 11 · Experimental</p>
        ${content}
        <footer class="page-footer"><a href="#guide">Back to top</a> · <a href="./?example=menu">Try the examples</a></footer>
      </main>
    </div>
  </div>
</body>
</html>
`
);
console.log('Generated static compatibility guide; no client JavaScript required.');
