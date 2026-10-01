import React, {Component, useState} from 'preact/compat';
import {render} from 'preact';
import * as A from '../dist/index.js';
import {priority, priorityCoverage} from './priority';
import {catalog, catalogCoverage} from './catalog';
import {showcases} from './showcase';
import './style.css';
import './showcase.css';

class Boundary extends Component {
  state = {error: null};
  componentDidCatch(error) {
    this.setState({error: String(error)});
  }
  render(props, state) {
    return state.error ? <pre data-testid="error">{state.error}</pre> : props.children;
  }
}
const examples = {...priority, ...catalog};
const name = new URLSearchParams(location.search).get('example') || 'menu';
const Example = examples[name];
Object.assign(window, {
  __coverage: {...priorityCoverage, ...catalogCoverage},
  __examples: Object.keys(examples),
  __showcases: Object.keys(showcases)
});
function App() {
  const Showcase = showcases[name];
  const [view, setView] = useState(
    Showcase && new URLSearchParams(location.search).get('view') === 'showcase'
      ? 'showcase'
      : 'basic'
  );
  const changeView = key => {
    setView(key);
    const url = new URL(location.href);
    if (key === 'showcase') url.searchParams.set('view', 'showcase');
    else url.searchParams.delete('view');
    history.replaceState(null, '', url);
  };
  return (
    <div className="app-shell">
      <header className="site-header">
        <div>
          <div className="site-title">Preact Aria</div>
          <p>Interactive component examples</p>
        </div>
        <div className="header-actions">
          <a className="skip-link" href="#example">
            Skip to example
          </a>
          <span className="version-badge">Preact 11</span>
        </div>
      </header>
      <div className="workspace">
        <aside className="sidebar" aria-labelledby="components-title">
          <h2 id="components-title">Components</h2>
          <nav aria-label="Examples">
            {Object.keys(examples).map(key => (
              <a
                href={`?example=${key}${view === 'showcase' && showcases[key] ? '&view=showcase' : ''}`}
                aria-current={key === name ? 'page' : undefined}>
                {key}
                {showcases[key] && <span className="showcase-dot" aria-hidden="true" />}
              </a>
            ))}
          </nav>
          <p className="sidebar-legend">
            <span className="showcase-dot" /> Showcase available
          </p>
        </aside>
        <main
          id="example"
          className="demo"
          tabIndex={-1}
          aria-labelledby="example-title"
          data-example={name}>
          <h1 id="example-title">{name} — Preact 11</h1>
          <A.Tabs selectedKey={view} onSelectionChange={changeView} className="example-views">
            <A.TabList aria-label="Example view" className="view-tabs">
              <A.Tab id="basic">Basic tests</A.Tab>
              <A.Tab id="showcase" isDisabled={!Showcase}>
                Showcase
              </A.Tab>
            </A.TabList>
            <A.TabPanel id="basic" className="demo-content">
              <Boundary>{Example ? <Example /> : <p>Unknown example</p>}</Boundary>
            </A.TabPanel>
            <A.TabPanel id="showcase" className="demo-content showcase">
              <Boundary>{Showcase && <Showcase />}</Boundary>
            </A.TabPanel>
          </A.Tabs>
        </main>
      </div>
    </div>
  );
}
render(<App />, document.getElementById('app')!);
