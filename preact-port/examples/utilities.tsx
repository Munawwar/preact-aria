// This fixture deliberately compiles unchanged utility source with React aliases.
// The component catalog separately tests the distributed Components bundle.
import {render} from 'preact';
import {useLayoutEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {enableShadowDOM} from '../vendor/react-stately/src/flags/flags';
import {
  getActiveElement,
  getEventTarget,
  getPropagationTargets,
  nodeContains
} from '../vendor/react-aria/src/utils/shadowdom/DOMFunctions';
import {mergeProps} from '../vendor/react-aria/src/utils/mergeProps';
import {mergeRefs} from '../vendor/react-aria/src/utils/mergeRefs';
import {useId} from '../vendor/react-aria/src/utils/useId';

enableShadowDOM();
function Utilities() {
  const host = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLButtonElement>(null);
  const callbackRef = useRef<HTMLButtonElement>(null);
  const [root, setRoot] = useState<ShadowRoot | null>(null);
  const [count, setCount] = useState(0);
  const [result, setResult] = useState({});
  const id = useId();
  useLayoutEffect(() => {
    const element = host.current!;
    const shadow = element.attachShadow({mode: 'open'});
    setRoot(shadow);
    const onClick = (event: MouseEvent) => {
      const target = getEventTarget(event);
      const synthetic = getEventTarget({target: event.target, nativeEvent: event} as any);
      const button = objectRef.current!;
      setResult({
        retargeted: event.target === element,
        nativeTarget: target === button,
        syntheticTarget: synthetic === button,
        focus: getActiveElement() === button,
        contains: nodeContains(element, button),
        propagation: getPropagationTargets(button).includes(shadow),
        refs: callbackRef.current === button,
        id: button.id === id
      });
    };
    element.addEventListener('click', onClick);
    return () => element.removeEventListener('click', onClick);
  }, []);
  const chained = mergeProps(
    {onClick: () => setCount(value => value + 1)},
    {onClick: () => setCount(value => value + 1)}
  );
  return (
    <main>
      <h1>Upstream utilities with Preact aliases</h1>
      <button>Before shadow</button>
      <div ref={host} />
      {root &&
        createPortal(
          <button
            {...chained}
            id={id}
            ref={mergeRefs(objectRef, element => {
              callbackRef.current = element;
            })}>
            Shadow action
          </button>,
          root
        )}
      <button>After shadow</button>
      <output data-testid="utility-count">{count}</output>
      <pre data-testid="utility-result">{JSON.stringify(result)}</pre>
    </main>
  );
}
render(<Utilities />, document.getElementById('app')!);
