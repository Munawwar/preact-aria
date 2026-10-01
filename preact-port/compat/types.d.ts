/** Types for the React-shaped component API, backed entirely by Preact. */
import type * as Native from 'preact';
import type PreactCompat from 'preact/compat';
import type {
  JSX as NativeJSX,
  ComponentChildren,
  ComponentType as NativeComponentType,
  VNode,
  RefObject as NativeRefObject,
  Context as NativeContext
} from 'preact';

type Unsignal<T> = T extends Native.SignalLike<infer V> ? V : T;
type NativeEvent<E> = E extends globalThis.AnimationEvent
  ? globalThis.AnimationEvent
  : E extends globalThis.TransitionEvent
    ? globalThis.TransitionEvent
    : E extends globalThis.CompositionEvent
      ? globalThis.CompositionEvent
      : E extends globalThis.InputEvent
        ? globalThis.InputEvent
        : E extends globalThis.WheelEvent
          ? globalThis.WheelEvent
          : E extends globalThis.PointerEvent
            ? globalThis.PointerEvent & {pointerType: 'mouse' | 'pen' | 'touch'}
            : E extends globalThis.DragEvent
              ? globalThis.DragEvent
              : E extends globalThis.MouseEvent
                ? globalThis.MouseEvent
                : E extends globalThis.KeyboardEvent
                  ? globalThis.KeyboardEvent
                  : E extends globalThis.FocusEvent
                    ? globalThis.FocusEvent
                    : E extends globalThis.TouchEvent
                      ? globalThis.TouchEvent
                      : E extends globalThis.ClipboardEvent
                        ? globalThis.ClipboardEvent
                        : E extends globalThis.UIEvent
                          ? globalThis.UIEvent
                          : Event;
type CompatEvent<T> = T extends (event: infer E) => any
  ? E extends Event
    ? EventHandler<SyntheticEvent<any, NativeEvent<E>>>
    : T
  : T;
/** Aria internally shares props across DOM tags; preserve that API's broad DOM attributes. */
export type PlainAttributes<T> = {
  [K in keyof T as K extends 'ref' ? never : K]: K extends 'value'
    ? string | number | readonly string[] | undefined
    : K extends 'onFocus' | 'onFocusCapture' | 'onBlur' | 'onBlurCapture'
      ? FocusEventHandler<any> | undefined
      : K extends 'draggable'
        ? boolean | 'true' | 'false' | undefined
        : K extends 'onClose'
          ? (() => void) | undefined
          : K extends 'hidden'
            ? boolean | undefined
            : K extends 'style'
              ? CSSProperties | undefined
              : K extends 'onTouchStart' | 'onTouchEnd' | 'onTouchMove' | 'onTouchCancel'
                ? TouchEventHandler<any> | undefined
                : K extends 'onScroll' | 'onScrollCapture'
                  ? UIEventHandler<Element> | undefined
                  : K extends 'role' | 'dir' | 'type'
                    ? string | undefined
                    : K extends 'slot'
                      ? string | null | undefined
                      : K extends 'translate'
                        ? 'yes' | 'no' | undefined
                        : K extends 'cellPadding' | 'cellSpacing'
                          ? string | number | undefined
                          : K extends `on${string}`
                            ? CompatEvent<Unsignal<T[K]>>
                            : Unsignal<T[K]>;
};
export namespace JSX {
  type Element = VNode<any>;
  type IntrinsicElements = {
    [K in keyof NativeJSX.IntrinsicElements]: PlainAttributes<NativeJSX.IntrinsicElements[K]> & {
      ref?: Ref<any>;
      suppressHydrationWarning?: boolean;
    };
  };
}
export type ReactNode = ComponentChildren;
export type ReactElement<P = any, T = any> = VNode<P>;
export type ReactPortal = VNode<any>;
export type ComponentType<P = {}> = NativeComponentType<P>;
export type Context<T> = NativeContext<T>;
export type Ref<T> = RefCallback<T> | NativeRefObject<T | null> | null;
export type RefObject<T> = NativeRefObject<T>;
export type MutableRefObject<T> = {current: T};
export type RefCallback<T> = {
  bivarianceHack(instance: T | null): void | (() => void);
}['bivarianceHack'];
export type ForwardedRef<T> = Ref<T>;
export type RefAttributes<T> = {ref?: Ref<T>};
export type ForwardRefExoticComponent<P> = NativeComponentType<P>;
export type JSXElementConstructor<P> = NativeComponentType<P>;
export type ElementType<P = any> = keyof JSX.IntrinsicElements | NativeComponentType<P>;
export type Dispatch<T> = (value: T) => void;
export type SetStateAction<T> = T | ((previous: T) => T);
export type EffectCallback = PreactCompat.EffectCallback;
export type CSSProperties = Native.CSSProperties;
export type AriaAttributes = PlainAttributes<Native.AriaAttributes>;
export type AriaRole = Native.AriaRole | (string & {});
export type HTMLAttributeAnchorTarget = Native.HTMLAttributeAnchorTarget;
export type HTMLAttributeReferrerPolicy = Native.HTMLAttributeReferrerPolicy;
export type HTMLAttributes<T extends EventTarget = HTMLElement> = PlainAttributes<
  Native.HTMLAttributes<T>
> & {suppressContentEditableWarning?: boolean};
export type AllHTMLAttributes<T extends EventTarget = HTMLElement> = PlainAttributes<
  Native.AllHTMLAttributes<T>
>;
export type DetailedHTMLProps<P, T extends EventTarget> = P & RefAttributes<T>;
export type AnchorHTMLAttributes<T extends EventTarget = HTMLAnchorElement> = PlainAttributes<
  Native.AnchorHTMLAttributes<T>
>;
export type ButtonHTMLAttributes<T extends EventTarget = HTMLButtonElement> = PlainAttributes<
  Native.ButtonHTMLAttributes<T>
>;
export type FormHTMLAttributes<T extends EventTarget = HTMLFormElement> = PlainAttributes<
  Native.FormHTMLAttributes<T>
>;
export type InputHTMLAttributes<T extends EventTarget = HTMLInputElement> = PlainAttributes<
  Native.InputHTMLAttributes<T>
>;
export type LabelHTMLAttributes<T extends EventTarget = HTMLLabelElement> = PlainAttributes<
  Native.LabelHTMLAttributes<T>
>;
export type OutputHTMLAttributes<T extends EventTarget = HTMLOutputElement> = PlainAttributes<
  Native.OutputHTMLAttributes<T>
>;
export type SelectHTMLAttributes<T extends EventTarget = HTMLSelectElement> = PlainAttributes<
  Native.SelectHTMLAttributes<T>
>;
export type TextareaHTMLAttributes<T extends EventTarget = HTMLTextAreaElement> = PlainAttributes<
  Native.TextareaHTMLAttributes<T>
>;
export type SyntheticEvent<T = Element, E = Event> = Omit<
  E,
  'target' | 'currentTarget' | 'composedPath'
> & {
  target: EventTarget & T;
  currentTarget: EventTarget & T;
  nativeEvent: E;
  isDefaultPrevented(): boolean;
  isPropagationStopped(): boolean;
  persist(): void;
};
export type ChangeEvent<T = Element> = SyntheticEvent<T>;
export type ClipboardEvent<T = Element> = SyntheticEvent<T, globalThis.ClipboardEvent>;
export type DragEvent<T = Element> = SyntheticEvent<T, globalThis.DragEvent> & {
  dataTransfer: DataTransfer;
};
export type FocusEvent<T = Element> = SyntheticEvent<T, globalThis.FocusEvent> & {
  relatedTarget: (EventTarget & T) | null;
};
export type FormEvent<T = Element> = SyntheticEvent<T>;
export type KeyboardEvent<T = Element> = SyntheticEvent<T, globalThis.KeyboardEvent>;
export type MouseEvent<T = Element> = SyntheticEvent<T, globalThis.MouseEvent>;
export type PointerEvent<T = Element> = SyntheticEvent<T, globalThis.PointerEvent> & {
  pointerType: 'mouse' | 'pen' | 'touch';
};
export type TouchEvent<T = Element> = SyntheticEvent<T, globalThis.TouchEvent>;
export type UIEvent<T = Element> = SyntheticEvent<T, globalThis.UIEvent>;
export type EventHandler<E> = {bivarianceHack(event: E): void}['bivarianceHack'];
export type ReactEventHandler<T = Element> = EventHandler<SyntheticEvent<T>>;
export type AnimationEventHandler<T = Element> = EventHandler<
  SyntheticEvent<T, globalThis.AnimationEvent>
>;
export type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;
export type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent<T>>;
export type CompositionEventHandler<T = Element> = EventHandler<
  SyntheticEvent<T, globalThis.CompositionEvent>
>;
export type FocusEventHandler<T = Element> = EventHandler<FocusEvent<T>>;
export type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;
export type InputEventHandler<T = Element> = EventHandler<SyntheticEvent<T, globalThis.InputEvent>>;
export type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent<T>>;
export type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
export type PointerEventHandler<T = Element> = EventHandler<PointerEvent<T>>;
export type TouchEventHandler<T = Element> = EventHandler<TouchEvent<T>>;
export type TransitionEventHandler<T = Element> = EventHandler<
  SyntheticEvent<T, globalThis.TransitionEvent>
>;
export type UIEventHandler<T = Element> = EventHandler<UIEvent<T>>;
export type WheelEventHandler<T = Element> = EventHandler<SyntheticEvent<T, globalThis.WheelEvent>>;
export type DOMAttributes<T = Element> = PlainAttributes<Native.DOMAttributes<T & EventTarget>>;
