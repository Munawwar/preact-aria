import {Component, useEffect, useState} from 'preact/compat';
import {render} from 'preact';
import {examples} from './generated/registry';
import './shell.css';

class Boundary extends Component {
  state = {error: null};
  componentDidCatch(error) {
    this.setState({error: String(error)});
  }
  render(props, state) {
    return state.error ? (
      <pre role="alert" data-testid="error">
        {state.error}
      </pre>
    ) : (
      props.children
    );
  }
}

const params = new URLSearchParams(location.search);
const aliases = {
  radio: 'radiogroup',
  toggle: 'togglebutton',
  number: 'numberfield',
  dnd: 'kanban',
  daterange: 'daterangepicker',
  textfield: 'textfield',
  search: 'searchfield',
  colorwheel: 'colorwheel',
  tokenfield: 'tokenfield'
};
const requested = params.get('example') || 'menu';
const name = aliases[requested] || requested;
const entry = examples.find(example => example.id === name);
const story = entry?.stories.includes(params.get('story'))
  ? params.get('story')
  : entry?.stories[0];

function Example() {
  const [loaded, setLoaded] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (entry) entry.load().then(setLoaded, error => setError(String(error)));
  }, []);
  if (error)
    return (
      <pre role="alert" data-testid="error">
        {error}
      </pre>
    );
  if (!loaded) return <p role="status">Loading example…</p>;
  const definition = entry.group === 'Gallery' ? loaded.default : loaded[story];
  const Story = typeof definition === 'function' ? definition : definition.render;
  const args = {...loaded.default?.args, ...definition.args};
  return <Story {...args} />;
}

function Gallery() {
  return (
    <div className="gallery-cards">
      {examples
        .filter(example => example.group === 'Gallery')
        .map(example => (
          <a href={`?example=${example.id}`} className="gallery-card">
            <img src={example.image} alt="" />
            <h2>{example.title}</h2>
            <p>{example.description}</p>
          </a>
        ))}
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="skip-link" href="#example">
          Skip to example
        </a>
        <div>
          <a className="site-title" href="?example=menu">
            Preact Aria
          </a>
          <p>Adobe’s examples, running on Preact 11</p>
        </div>
        <div className="header-actions">
          <a href="https://github.com/Munawwar/preact-aria">GitHub</a>
        </div>
      </header>
      <div className="workspace">
        <aside className="site-sidebar" aria-label="Example navigation">
          <a
            className="gallery-link"
            href="?example=gallery"
            aria-current={name === 'gallery' ? 'page' : undefined}>
            Examples gallery
          </a>
          {['Components', 'Gallery'].map(group => (
            <nav aria-label={group}>
              <h2>{group}</h2>
              {examples
                .filter(example => example.group === group)
                .map(example => (
                  <a
                    href={`?example=${example.id}`}
                    aria-current={name === example.id ? 'page' : undefined}>
                    {example.title}
                  </a>
                ))}
            </nav>
          ))}
        </aside>
        <main id="example" tabIndex={-1} aria-labelledby="example-title" data-example={name}>
          <div className="page-heading">
            <div>
              <p className="eyebrow">{entry?.group || 'Gallery'}</p>
              <h1 id="example-title">
                {entry?.title || (name === 'gallery' ? 'Examples' : 'Example not found')}
              </h1>
              {entry?.description && <p>{entry.description}</p>}
            </div>
          </div>
          {entry?.stories.length > 1 && (
            <nav className="story-navigation" aria-label="Example variants">
              {entry.stories.map(variant => (
                <a
                  href={`?example=${entry.id}&story=${variant}`}
                  aria-current={story === variant ? 'page' : undefined}>
                  {variant.replace(/([a-z])([A-Z])/g, '$1 $2')}
                </a>
              ))}
            </nav>
          )}
          {entry ? (
            <section
              className={`example-canvas ${entry.group === 'Gallery' ? 'gallery-example' : 'component-example'}`}
              aria-label={`${entry.title} example`}>
              <Boundary>
                <Example />
              </Boundary>
            </section>
          ) : name === 'gallery' ? (
            <Gallery />
          ) : (
            <p>Choose an example from the sidebar.</p>
          )}
          {entry && (
            <a
              className="source-link"
              href={`https://github.com/adobe/react-spectrum/blob/57c56b8cbfa65294fbaed528ab9580ade0d339cb/${entry.source}`}>
              Upstream source ↗
            </a>
          )}
          <footer className="page-footer">
            Examples and component styles by Adobe, Apache 2.0.{' '}
            <a href="https://react-aria.adobe.com/examples/">Original React Aria gallery</a>
          </footer>
        </main>
      </div>
    </div>
  );
}
render(<App />, document.getElementById('app'));
