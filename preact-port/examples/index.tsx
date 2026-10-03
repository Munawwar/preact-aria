import {Component, createElement, useEffect, useState} from 'preact/compat';
import {render} from 'preact';
import {examples} from './generated/registry';
import './shell.css';
import {StoryProvider} from './generated/providers';

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
  return <LoadedExample loaded={loaded} definition={definition} />;
}

function Fixture({Renderer, args, context}) {
  return typeof Renderer === 'string' || typeof Renderer !== 'function' ? (
    createElement(Renderer, args)
  ) : Renderer.prototype?.render ? (
    <Renderer {...args} />
  ) : (
    Renderer(args, context)
  );
}

function PropControl({name, spec, value, onChange}) {
  const [draft, setDraft] = useState('');
  const [invalid, setInvalid] = useState(false);
  const type = spec.control?.type || spec.control;
  const object = type === 'object' || (value !== null && typeof value === 'object');
  useEffect(() => {
    setDraft(object ? JSON.stringify(value ?? {}) : String(value ?? ''));
    setInvalid(false);
  }, [value, object]);
  const options = spec.options;
  const boolean =
    type === 'boolean' ||
    typeof value === 'boolean' ||
    /^(is|allows|disallow|should)[A-Z]/.test(name);
  const number =
    type === 'number' || type === 'range' || type === 'slider' || typeof value === 'number';
  return (
    <label title={spec.description}>
      {name}
      {options ? (
        <select
          value={options.findIndex(option => Object.is(spec.mapping?.[option] ?? option, value))}
          onChange={e => {
            const option = options[Number(e.currentTarget.value)];
            onChange(option === undefined ? undefined : (spec.mapping?.[option] ?? option));
          }}>
          <option value="-1">Default</option>
          {options.map((option, index) => (
            <option value={index}>{String(option)}</option>
          ))}
        </select>
      ) : boolean ? (
        <input
          type="checkbox"
          checked={value === true}
          onChange={e => onChange(e.currentTarget.checked)}
        />
      ) : object ? (
        <textarea
          aria-invalid={invalid || undefined}
          value={draft}
          onInput={e => setDraft(e.currentTarget.value)}
          onBlur={() => {
            try {
              onChange(JSON.parse(draft));
              setInvalid(false);
            } catch {
              setInvalid(true);
            }
          }}
        />
      ) : (
        <input
          type={number ? 'number' : 'text'}
          min={spec.min}
          max={spec.max}
          step={spec.step || 'any'}
          value={draft}
          onInput={e => {
            setDraft(e.currentTarget.value);
            if (!number || e.currentTarget.validity.valid)
              onChange(
                number
                  ? e.currentTarget.value === ''
                    ? undefined
                    : Number(e.currentTarget.value)
                  : e.currentTarget.value
              );
          }}
        />
      )}{' '}
      {invalid && <small role="alert">Enter valid JSON.</small>}
    </label>
  );
}

function LoadedExample({loaded, definition}) {
  const meta = entry.group === 'Gallery' ? {} : loaded.default || {};
  const initial = {...meta.args, ...definition?.story?.args, ...definition?.args};
  const [overrides, setOverrides] = useState({});
  const args = {...initial, ...overrides};
  const context = {
    args,
    initialArgs: initial,
    globals: {},
    parameters: {...meta.parameters, ...definition?.story?.parameters, ...definition?.parameters},
    id: `${entry.id}-${story}`,
    name: story
  };
  const Renderer =
    typeof definition === 'function'
      ? definition
      : definition?.render || meta.render || meta.component;
  if (!Renderer) throw new Error(`Missing renderer: ${entry.id}/${story}`);
  const renderArgs = definition?.propsObject ? {[definition.propsObject]: args} : args;
  let Story = () => <Fixture Renderer={Renderer} args={renderArgs} context={context} />;
  const decorators = [
    ...(definition?.decorators || definition?.story?.decorators || []),
    ...(meta.decorators || [])
  ];
  for (const decorator of decorators) {
    const Inner = Story;
    Story = () => decorator(Inner, context);
  }
  const controls = {...meta.argTypes, ...definition?.story?.argTypes, ...definition?.argTypes};
  for (const name of definition?.controls || []) controls[name] ||= {};
  const content = decorators.length ? (
    <Story />
  ) : (
    <Fixture Renderer={Renderer} args={renderArgs} context={context} />
  );
  const useProvider = ['Storybook', 'Hook stories', 'State stories'].includes(entry.group);
  return (
    <>
      {Object.keys(controls).length > 0 && (
        <fieldset className="example-controls">
          <legend>Example props</legend>
          {Object.entries(controls)
            .filter(([, spec]) => spec.control !== false && !spec.table?.disable)
            .map(([name, spec]) => (
              <PropControl
                key={name}
                name={name}
                spec={{...spec, ...definition?.controlOptions?.[name]}}
                value={args[name]}
                onChange={value => setOverrides({...overrides, [name]: value})}
              />
            ))}
          <button type="button" onClick={() => setOverrides({})}>
            Reset props
          </button>
        </fieldset>
      )}
      <div data-testid="example-ready" className="example-body react-spectrum-story">
        {useProvider ? (
          <StoryProvider
            locale={params.get('locale') || undefined}
            colorScheme={params.get('theme') || 'light'}
            scale={params.get('scale') || undefined}>
            {content}
          </StoryProvider>
        ) : (
          content
        )}
      </div>
    </>
  );
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
  const [filter, setFilter] = useState('');
  const groups = [
    'Components',
    'Documentation',
    'Storybook',
    'Hooks',
    'Tailwind',
    'Hook stories',
    'State stories',
    'Gallery'
  ];
  const variant = entry?.variants?.find(v => v.id === story);
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
          <a href="./compatibility.html">Compatibility guide</a>
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
          <label className="catalog-filter">
            Find examples
            <input type="search" value={filter} onInput={e => setFilter(e.currentTarget.value)} />
          </label>
          {groups.map(group => (
            <details open={!!filter || entry?.group === group}>
              <summary>{group}</summary>
              <nav aria-label={group}>
                <h2>{group}</h2>
                {examples
                  .filter(
                    example =>
                      example.group === group &&
                      example.title.toLowerCase().includes(filter.toLowerCase())
                  )
                  .map(example => (
                    <a
                      href={`?example=${example.id}`}
                      aria-current={name === example.id ? 'page' : undefined}>
                      {example.title}
                    </a>
                  ))}
              </nav>
            </details>
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
            <label className="variant-picker">
              Use case
              <select
                value={story}
                onChange={e => {
                  location.href = `?example=${entry.id}&story=${encodeURIComponent(e.currentTarget.value)}`;
                }}>
                {entry.stories.map((name, index) => (
                  <option value={name}>
                    {index + 1}.{' '}
                    {entry.variants?.find(v => v.id === name)?.title ||
                      name.replace(/([a-z])([A-Z])/g, '$1 $2')}
                  </option>
                ))}
              </select>
            </label>
          )}
          {entry && ['Storybook', 'Hook stories', 'State stories'].includes(entry.group) && (
            <details className="preview-environment">
              <summary>Preview environment</summary>
              <form method="get">
                <input type="hidden" name="example" value={entry.id} />
                <input type="hidden" name="story" value={story} />
                <label>
                  Locale
                  <input name="locale" defaultValue={params.get('locale') || 'en-US'} />
                </label>
                <label>
                  Theme
                  <select name="theme" defaultValue={params.get('theme') || 'light'}>
                    <option>light</option>
                    <option>dark</option>
                  </select>
                </label>
                <label>
                  Scale
                  <select name="scale" defaultValue={params.get('scale') || 'medium'}>
                    <option>medium</option>
                    <option>large</option>
                  </select>
                </label>
                <button type="submit">Apply environment</button>
              </form>
            </details>
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
              href={`https://github.com/adobe/react-spectrum/blob/57c56b8cbfa65294fbaed528ab9580ade0d339cb/${variant?.source || entry.source}${variant?.line ? '#L' + variant.line : ''}`}>
              Upstream source ↗
            </a>
          )}
          {variant?.code && (
            <details className="original-code">
              <summary>Original upstream example code</summary>
              <pre>
                <code>{variant.code}</code>
              </pre>
            </details>
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
