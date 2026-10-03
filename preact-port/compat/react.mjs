// Parcel aliases upstream React imports here; Preact stays external in the library.
// Read members through the default object to avoid Parcel's external re-export bug.
import Compat from 'preact/compat';
const React = {...Compat};
export default React;
export const {
  Children,
  cloneElement,
  createContext,
  createElement,
  createPortal,
  forwardRef,
  Fragment,
  isValidElement,
  memo,
  flushSync,
  useId,
  useInsertionEffect,
  useDebugValue,
  Component,
  PureComponent,
  Suspense,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useImperativeHandle,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
  useSyncExternalStore,
  version
} = React;
