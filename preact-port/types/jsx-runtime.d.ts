import type {JSX as AriaJSX} from '../compat/types';
import type {Component, VNode, ComponentChildren, ComponentType} from 'preact';
export namespace JSX {
  type Element = VNode<any>;
  type ElementType = keyof IntrinsicElements | ComponentType<any>;
  type IntrinsicElements = AriaJSX.IntrinsicElements;
  interface IntrinsicAttributes {
    key?: any;
  }
  interface ElementChildrenAttribute {
    children: any;
  }
  interface ElementAttributesProperty {
    props: any;
  }
  type ElementClass = Component<any, any>;
}
