/** Build-time React signatures backed by Preact; preserves upstream source. */
import * as Compat from 'preact/compat';
import type {
  ReactElement,
  ReactNode,
  ForwardedRef,
  ForwardRefExoticComponent,
  RefAttributes
} from './types';
export {
  cloneElement,
  createContext,
  createPortal,
  Fragment,
  memo,
  flushSync,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState
} from 'preact/compat';
export * from './types';
export const version: string;
type PropsWithoutRef<P> = P extends any ? ('ref' extends keyof P ? Omit<P, 'ref'> : P) : P;
export function forwardRef<T, P = {}>(
  render: (props: PropsWithoutRef<P>, ref: ForwardedRef<T>) => ReactNode
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;

declare namespace React {
  type CSSProperties = import('./types').CSSProperties;
  type ComponentType<P = {}> = import('./types').ComponentType<P>;
  type Context<T> = import('./types').Context<T>;
  type Dispatch<T> = import('./types').Dispatch<T>;
  type ForwardRefExoticComponent<P> = import('./types').ForwardRefExoticComponent<P>;
  type HTMLAttributes<T extends EventTarget = HTMLElement> = import('./types').HTMLAttributes<T>;
  type InputHTMLAttributes<T extends EventTarget = HTMLInputElement> =
    import('./types').InputHTMLAttributes<T>;
  type JSXElementConstructor<P> = import('./types').JSXElementConstructor<P>;
  type KeyboardEvent<T = Element> = import('./types').KeyboardEvent<T>;
  type MouseEvent<T = Element> = import('./types').MouseEvent<T>;
  type PointerEvent<T = Element> = import('./types').PointerEvent<T>;
  type ReactElement<P = any, T = any> = import('./types').ReactElement<P, T>;
  type ReactNode = import('./types').ReactNode;
  type ReactPortal = import('./types').ReactPortal;
  type Ref<T> = import('./types').Ref<T>;
  type RefAttributes<T> = import('./types').RefAttributes<T>;
  type RefObject<T> = import('./types').RefObject<T>;
  type SelectHTMLAttributes<T extends EventTarget = HTMLSelectElement> =
    import('./types').SelectHTMLAttributes<T>;
  type SetStateAction<T> = import('./types').SetStateAction<T>;
  type SyntheticEvent<T = Element, E = Event> = import('./types').SyntheticEvent<T, E>;
  type TouchEvent<T = Element> = import('./types').TouchEvent<T>;
  type UIEvent<T = Element> = import('./types').UIEvent<T>;
  namespace JSX {
    type Element = import('./types').JSX.Element;
    type IntrinsicElements = import('./types').JSX.IntrinsicElements;
  }
}

export function isValidElement<P = any>(value: unknown): value is ReactElement<P>;
export const Children: Omit<typeof Compat.Children, 'forEach' | 'only'> & {
  only<P>(children: ReactElement<P>): ReactElement<P>;
  forEach(children: unknown, callback: (child: any, index: number) => void): void;
};
// React 19 models reducer arguments as a tuple; Preact models the action itself.
export function useReducer<S>(reducer: (state: S) => S, initialState: S): [S, () => void];
export function useReducer<S, A extends [] | [unknown]>(
  reducer: (state: S, ...args: A) => S,
  initialState: S
): [S, (...args: A) => void];

declare const React: Omit<typeof Compat, 'isValidElement' | 'Children' | 'useReducer'> & {
  isValidElement: typeof isValidElement;
  Children: typeof Children;
  useReducer: typeof useReducer;
};
export default React;
