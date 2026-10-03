// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"kFD1B":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Builds a `Collection` from the children provided to the `content` prop, and passes it to the
 * child render prop function.
 */ parcelHelpers.export(exports, "CollectionBuilder", ()=>CollectionBuilder);
parcelHelpers.export(exports, "createLeafComponent", ()=>createLeafComponent);
parcelHelpers.export(exports, "createBranchComponent", ()=>createBranchComponent);
/** A Collection renders a list of items, automatically managing caching and keys. */ parcelHelpers.export(exports, "Collection", ()=>Collection);
var _jsxRuntime = require("preact/jsx-runtime");
var _baseCollection = require("./BaseCollection");
var _document = require("./Document");
var _useCachedChildren = require("./useCachedChildren");
var _reactDom = require("react-dom");
var _useFocusable = require("../interactions/useFocusable");
var _hidden = require("./Hidden");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _ssrprovider = require("../ssr/SSRProvider");
var _indexJs = require("use-sync-external-store/shim/index.js");
const ShallowRenderContext = /*#__PURE__*/ (0, _react.createContext)(false);
const CollectionDocumentContext = /*#__PURE__*/ (0, _react.createContext)(null);
function CollectionBuilder(props) {
    // If a document was provided above us, we're already in a hidden tree. Just render the content.
    let doc = (0, _react.useContext)(CollectionDocumentContext);
    if (doc) // The React types prior to 18 did not allow returning ReactNode from components
    // even though the actual implementation since React 16 did.
    // We must return ReactElement so that TS does not complain that <CollectionBuilder>
    // is not a valid JSX element with React 16 and 17 types.
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20544
    return props.content;
    // Otherwise, render a hidden copy of the children so that we can build the collection before constructing the state.
    // This should always come before the real DOM content so we have built the collection by the time it renders during SSR.
    // This is fine. CollectionDocumentContext never changes after mounting.
    // oxlint-disable-next-line react/react-compiler, react-hooks/rules-of-hooks
    let { collection, document } = useCollectionDocument(props.createCollection);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _hidden.Hidden), {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionDocumentContext.Provider, {
                    value: document,
                    children: props.content
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionInner, {
                render: props.children,
                collection: collection
            })
        ]
    });
}
function CollectionInner({ collection, render }) {
    return render(collection);
}
// React 16 and 17 don't support useSyncExternalStore natively, and the shim provided by React does not support getServerSnapshot.
// This wrapper uses the shim, but additionally calls getServerSnapshot during SSR (according to SSRProvider).
function useSyncExternalStoreFallback(subscribe, getSnapshot, getServerSnapshot) {
    let isSSR = (0, _ssrprovider.useIsSSR)();
    let isSSRRef = (0, _react.useRef)(isSSR);
    // This is read immediately inside the wrapper, which also runs during render.
    // We just need a ref to avoid invalidating the callback itself, which
    // would cause React to re-run the callback more than necessary.
    // eslint-disable-next-line rsp-rules/pure-render
    // oxlint-disable-next-line react/react-compiler, rsp-rules/pure-render
    isSSRRef.current = isSSR;
    let getSnapshotWrapper = (0, _react.useCallback)(()=>{
        return isSSRRef.current ? getServerSnapshot() : getSnapshot();
    }, [
        getSnapshot,
        getServerSnapshot
    ]);
    return (0, _indexJs.useSyncExternalStore)(subscribe, getSnapshotWrapper);
}
const useSyncExternalStore = typeof (0, _reactDefault.default)['useSyncExternalStore'] === 'function' ? (0, _reactDefault.default)['useSyncExternalStore'] : useSyncExternalStoreFallback;
function useCollectionDocument(createCollection) {
    // The document instance is mutable, and should never change between renders.
    // useSyncExternalStore is used to subscribe to updates, which vends immutable Collection objects.
    let [document] = (0, _react.useState)(()=>new (0, _document.Document)(createCollection?.() || new (0, _baseCollection.BaseCollection)()));
    let subscribe = (0, _react.useCallback)((fn)=>document.subscribe(fn), [
        document
    ]);
    let getSnapshot = (0, _react.useCallback)(()=>{
        let collection = document.getCollection();
        if (document.isSSR) // After SSR is complete, reset the document to empty so it is ready for React to render the portal into.
        // We do this _after_ getting the collection above so that the collection still has content in it from SSR
        // during the current render, before React has finished the client render.
        document.resetAfterSSR();
        return collection;
    }, [
        document
    ]);
    let getServerSnapshot = (0, _react.useCallback)(()=>{
        // oxlint-disable-next-line react/react-compiler
        document.isSSR = true;
        return document.getCollection();
    }, [
        document
    ]);
    let collection = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    return {
        collection,
        document
    };
}
const SSRContext = /*#__PURE__*/ (0, _react.createContext)(null);
function createCollectionNodeClass(type) {
    let NodeClass = class extends (0, _baseCollection.CollectionNode) {
        static type = type;
    };
    return NodeClass;
}
function useSSRCollectionNode(CollectionNodeClass, props, ref, rendered, children, render) {
    // To prevent breaking change, if CollectionNodeClass is a string, create a CollectionNodeClass using the string as the type
    if (typeof CollectionNodeClass === 'string') // oxlint-disable-next-line react/react-compiler
    CollectionNodeClass = createCollectionNodeClass(CollectionNodeClass);
    // During SSR, portals are not supported, so the collection children will be wrapped in an SSRContext.
    // Since SSR occurs only once, we assume that the elements are rendered in order and never re-render.
    // Therefore we can create elements in our collection document during render so that they are in the
    // collection by the time we need to use the collection to render to the real DOM.
    // After hydration, we switch to client rendering using the portal.
    let itemRef = (0, _react.useCallback)((element)=>{
        element?.setProps(props, ref, CollectionNodeClass, rendered, render);
    }, [
        props,
        ref,
        rendered,
        render,
        CollectionNodeClass
    ]);
    let parentNode = (0, _react.useContext)(SSRContext);
    if (parentNode) {
        // Guard against double rendering in strict mode.
        let element = parentNode.ownerDocument.nodesByProps.get(props);
        if (!element) {
            element = parentNode.ownerDocument.createElement(CollectionNodeClass.type);
            element.setProps(props, ref, CollectionNodeClass, rendered, render);
            parentNode.appendChild(element);
            parentNode.ownerDocument.updateCollection();
            parentNode.ownerDocument.nodesByProps.set(props, element);
        }
        return children ? /*#__PURE__*/ (0, _jsxRuntime.jsx)(SSRContext.Provider, {
            value: element,
            children: children
        }) : null;
    }
    // @ts-ignore
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionNodeClass.type, {
        ref: itemRef,
        children: children
    });
}
function createLeafComponent(CollectionNodeClass, render) {
    let Component = ({ node })=>render(node.props, node.props.ref, node);
    let Result = (0, _react.forwardRef)((props, ref)=>{
        let focusableProps = (0, _react.useContext)((0, _useFocusable.FocusableContext));
        let isShallow = (0, _react.useContext)(ShallowRenderContext);
        if (!isShallow) {
            if (render.length >= 3) throw new Error(render.name + ' cannot be rendered outside a collection.');
            return render(props, ref);
        }
        return useSSRCollectionNode(CollectionNodeClass, props, ref, 'children' in props ? props.children : null, null, (node)=>// Forward FocusableContext to real DOM tree so tooltips work.
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _useFocusable.FocusableContext).Provider, {
                value: focusableProps,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
                    node: node
                })
            }));
    });
    // @ts-ignore
    Result.displayName = render.name;
    return Result;
}
function createBranchComponent(CollectionNodeClass, render, useChildren = useCollectionChildren) {
    let Component = ({ node })=>render(node.props, node.props.ref, node);
    let Result = (0, _react.forwardRef)((props, ref)=>{
        let children = useChildren(props);
        return useSSRCollectionNode(CollectionNodeClass, props, ref, null, children, (node)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
                node: node
            })) ?? /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {});
    });
    // @ts-ignore
    Result.displayName = render.name;
    return Result;
}
function useCollectionChildren(options) {
    return (0, _useCachedChildren.useCachedChildren)({
        ...options,
        addIdAndValue: true
    });
}
const CollectionContext = /*#__PURE__*/ (0, _react.createContext)(null);
function Collection(props) {
    let ctx = (0, _react.useContext)(CollectionContext);
    let dependencies = (ctx?.dependencies || []).concat(props.dependencies);
    let idScope = props.idScope ?? ctx?.idScope;
    let children = useCollectionChildren({
        ...props,
        idScope,
        dependencies
    });
    let doc = (0, _react.useContext)(CollectionDocumentContext);
    if (doc) children = /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionRoot, {
        children: children
    });
    // Propagate dependencies and idScope to child collections.
    ctx = (0, _react.useMemo)(()=>({
            // oxlint-disable-next-line react-hooks/exhaustive-deps
            dependencies,
            idScope
        }), // eslint-disable-next-line react-hooks/exhaustive-deps
    // oxlint-disable-next-line react/react-compiler, react-hooks/exhaustive-deps
    [
        idScope,
        ...dependencies
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionContext.Provider, {
        value: ctx,
        children: children
    });
}
function CollectionRoot({ children }) {
    let doc = (0, _react.useContext)(CollectionDocumentContext);
    let wrappedChildren = (0, _react.useMemo)(()=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionDocumentContext.Provider, {
            value: null,
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(ShallowRenderContext.Provider, {
                value: true,
                children: children
            })
        }), [
        children
    ]);
    // During SSR, we render the content directly, and append nodes to the document during render.
    // The collection children return null so that nothing is actually rendered into the HTML.
    return (0, _ssrprovider.useIsSSR)() ? /*#__PURE__*/ (0, _jsxRuntime.jsx)(SSRContext.Provider, {
        value: doc,
        children: wrappedChildren
    }) : /*#__PURE__*/ (0, _reactDom.createPortal)(wrappedChildren, doc);
}

},{"preact/jsx-runtime":"b2Fbn","./BaseCollection":"imRDY","./Document":"2xebB","./useCachedChildren":"5c0At","react-dom":"gOP0N","../interactions/useFocusable":"6IFKj","./Hidden":"iPJX7","react":"gOP0N","../ssr/SSRProvider":"2cndP","use-sync-external-store/shim/index.js":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"imRDY":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** An immutable object representing a Node in a Collection. */ parcelHelpers.export(exports, "CollectionNode", ()=>CollectionNode);
parcelHelpers.export(exports, "FilterableNode", ()=>FilterableNode);
parcelHelpers.export(exports, "HeaderNode", ()=>HeaderNode);
parcelHelpers.export(exports, "LoaderNode", ()=>LoaderNode);
parcelHelpers.export(exports, "ItemNode", ()=>ItemNode);
parcelHelpers.export(exports, "SectionNode", ()=>SectionNode);
/**
 * An immutable Collection implementation. Updates are only allowed
 * when it is not marked as frozen. This can be subclassed to implement
 * custom collection behaviors.
 */ parcelHelpers.export(exports, "BaseCollection", ()=>BaseCollection);
class CollectionNode {
    static type;
    type;
    key;
    value = null;
    level = 0;
    hasChildNodes = false;
    rendered = null;
    textValue = '';
    'aria-label' = undefined;
    index = 0;
    parentKey = null;
    prevKey = null;
    nextKey = null;
    firstChildKey = null;
    lastChildKey = null;
    props = {};
    render;
    colSpan = null;
    colIndex = null;
    constructor(key){
        this.type = this.constructor.type;
        this.key = key;
    }
    get childNodes() {
        throw new Error('childNodes is not supported');
    }
    clone() {
        let node = new this.constructor(this.key);
        node.value = this.value;
        node.level = this.level;
        node.hasChildNodes = this.hasChildNodes;
        node.rendered = this.rendered;
        node.textValue = this.textValue;
        node['aria-label'] = this['aria-label'];
        node.index = this.index;
        node.parentKey = this.parentKey;
        node.prevKey = this.prevKey;
        node.nextKey = this.nextKey;
        node.firstChildKey = this.firstChildKey;
        node.lastChildKey = this.lastChildKey;
        node.props = this.props;
        node.render = this.render;
        node.colSpan = this.colSpan;
        node.colIndex = this.colIndex;
        return node;
    }
    filter(collection, newCollection, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    filterFn) {
        let clone = this.clone();
        newCollection.addDescendants(clone, collection);
        return clone;
    }
}
class FilterableNode extends CollectionNode {
    filter(collection, newCollection, filterFn) {
        let [firstKey, lastKey] = filterChildren(collection, newCollection, this.firstChildKey, filterFn);
        let newNode = this.clone();
        newNode.firstChildKey = firstKey;
        newNode.lastChildKey = lastKey;
        return newNode;
    }
}
class HeaderNode extends CollectionNode {
    static type = 'header';
}
class LoaderNode extends CollectionNode {
    static type = 'loader';
}
class ItemNode extends FilterableNode {
    static type = 'item';
    filter(collection, newCollection, filterFn) {
        if (filterFn(this.textValue, this)) {
            let clone = this.clone();
            newCollection.addDescendants(clone, collection);
            return clone;
        }
        return null;
    }
}
class SectionNode extends FilterableNode {
    static type = 'section';
    filter(collection, newCollection, filterFn) {
        let filteredSection = super.filter(collection, newCollection, filterFn);
        if (filteredSection) {
            if (filteredSection.lastChildKey !== null) {
                let lastChild = collection.getItem(filteredSection.lastChildKey);
                if (lastChild && lastChild.type !== 'header') return filteredSection;
            }
        }
        return null;
    }
}
class BaseCollection {
    keyMap = new Map();
    firstKey = null;
    lastKey = null;
    frozen = false;
    itemCount = 0;
    get size() {
        return this.itemCount;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    *[Symbol.iterator]() {
        let node = this.firstKey != null ? this.keyMap.get(this.firstKey) : undefined;
        while(node){
            yield node;
            node = node.nextKey != null ? this.keyMap.get(node.nextKey) : undefined;
        }
    }
    getChildren(key) {
        let keyMap = this.keyMap;
        return {
            *[Symbol.iterator] () {
                let parent = keyMap.get(key);
                let node = parent?.firstChildKey != null ? keyMap.get(parent.firstChildKey) : null;
                while(node){
                    yield node;
                    node = node.nextKey != null ? keyMap.get(node.nextKey) : undefined;
                }
            }
        };
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        if (!node) return null;
        if (node.prevKey != null) {
            node = this.keyMap.get(node.prevKey);
            while(node && node.type !== 'item' && node.lastChildKey != null)node = this.keyMap.get(node.lastChildKey);
            return node?.key ?? null;
        }
        return node.parentKey;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        if (!node) return null;
        if (node.type !== 'item' && node.firstChildKey != null) return node.firstChildKey;
        while(node){
            if (node.nextKey != null) return node.nextKey;
            if (node.parentKey != null) node = this.keyMap.get(node.parentKey);
            else return null;
        }
        return null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        let node = this.lastKey != null ? this.keyMap.get(this.lastKey) : null;
        while(node?.lastChildKey != null)node = this.keyMap.get(node.lastChildKey);
        return node?.key ?? null;
    }
    getItem(key) {
        return this.keyMap.get(key) ?? null;
    }
    at() {
        throw new Error('Not implemented');
    }
    clone() {
        // We need to clone using this.constructor so that subclasses have the right prototype.
        // TypeScript isn't happy about this yet.
        // https://github.com/microsoft/TypeScript/issues/3841
        let Constructor = this.constructor;
        let collection = new Constructor();
        collection.keyMap = new Map(this.keyMap);
        collection.firstKey = this.firstKey;
        collection.lastKey = this.lastKey;
        collection.itemCount = this.itemCount;
        return collection;
    }
    addNode(node) {
        if (this.frozen) throw new Error('Cannot add a node to a frozen collection');
        if (node.type === 'item' && this.keyMap.get(node.key) == null) this.itemCount++;
        this.keyMap.set(node.key, node);
    }
    // Deeply add a node and its children to the collection from another collection, primarily used when filtering a collection
    addDescendants(node, oldCollection) {
        this.addNode(node);
        let children = oldCollection.getChildren(node.key);
        for (let child of children)this.addDescendants(child, oldCollection);
    }
    removeNode(key) {
        if (this.frozen) throw new Error('Cannot remove a node to a frozen collection');
        let node = this.keyMap.get(key);
        if (node != null && node.type === 'item') this.itemCount--;
        this.keyMap.delete(key);
    }
    commit(firstKey, lastKey, isSSR = false) {
        if (this.frozen) throw new Error('Cannot commit a frozen collection');
        this.firstKey = firstKey;
        this.lastKey = lastKey;
        this.frozen = !isSSR;
    }
    filter(filterFn) {
        let newCollection = new this.constructor();
        let [firstKey, lastKey] = filterChildren(this, newCollection, this.firstKey, filterFn);
        newCollection?.commit(firstKey, lastKey);
        return newCollection;
    }
}
function filterChildren(collection, newCollection, firstChildKey, filterFn) {
    // loop over the siblings for firstChildKey
    // create new nodes based on calling node.filter for each child
    // if it returns null then don't include it, otherwise update its prev/next keys
    // add them to the newCollection
    if (firstChildKey == null) return [
        null,
        null
    ];
    let firstNode = null;
    let lastNode = null;
    let currentNode = collection.getItem(firstChildKey);
    while(currentNode != null){
        let newNode = currentNode.filter(collection, newCollection, filterFn);
        if (newNode != null) {
            newNode.nextKey = null;
            if (lastNode) {
                newNode.prevKey = lastNode.key;
                lastNode.nextKey = newNode.key;
            }
            if (firstNode == null) firstNode = newNode;
            newCollection.addNode(newNode);
            lastNode = newNode;
        }
        currentNode = currentNode.nextKey != null ? collection.getItem(currentNode.nextKey) : null;
    }
    // TODO: this is pretty specific to dividers but doesn't feel like there is a good way to get around it since we only can know
    // to filter the last separator in a collection only after performing a filter for the rest of the contents after it
    // Its gross that it needs to live here, might be nice if somehow we could have this live in the separator code
    if (lastNode && lastNode.type === 'separator') {
        let prevKey = lastNode.prevKey;
        newCollection.removeNode(lastNode.key);
        if (prevKey != null) {
            lastNode = newCollection.getItem(prevKey);
            lastNode.nextKey = null;
        } else lastNode = null;
    }
    return [
        firstNode?.key ?? null,
        lastNode?.key ?? null
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2xebB":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This Collection implementation is perhaps a little unusual. It works by rendering the React tree into a
// Portal to a fake DOM implementation. This gives us efficient access to the tree of rendered objects, and
// supports React features like composition and context. We use this fake DOM to access the full set of elements
// before we render into the real DOM, which allows us to render a subset of the elements (e.g. virtualized scrolling),
// and compute properties like the total number of items. It also enables keyboard navigation, selection, and other features.
// React takes care of efficiently rendering components and updating the collection for us via this fake DOM.
//
// The DOM is a mutable API, and React expects the node instances to remain stable over time. So the implementation is split
// into two parts. Each mutable fake DOM node owns an instance of an immutable collection node. When a fake DOM node is updated,
// it queues a second render for the collection. Multiple updates to a collection can be queued at once. Collection nodes are
// lazily copied on write, so only the changed nodes need to be cloned. During the second render, the new immutable collection
// is finalized by updating the map of Key -> Node with the new cloned nodes. Then the new collection is frozen so it can no
// longer be mutated, and returned to the calling component to render.
/**
 * A mutable node in the fake DOM tree. When mutated, it marks itself as dirty
 * and queues an update with the owner document.
 */ parcelHelpers.export(exports, "BaseNode", ()=>BaseNode);
/**
 * A mutable element node in the fake DOM tree. It owns an immutable
 * Collection Node which is copied on write.
 */ parcelHelpers.export(exports, "ElementNode", ()=>ElementNode);
/**
 * A mutable Document in the fake DOM. It owns an immutable Collection instance,
 * which is lazily copied on write during updates.
 */ parcelHelpers.export(exports, "Document", ()=>Document);
class BaseNode {
    _firstChild = null;
    _lastChild = null;
    _previousSibling = null;
    _nextSibling = null;
    _parentNode = null;
    _minInvalidChildIndex = null;
    ownerDocument;
    constructor(ownerDocument){
        this.ownerDocument = ownerDocument;
    }
    *[Symbol.iterator]() {
        let node = this.firstChild;
        while(node){
            yield node;
            node = node.nextSibling;
        }
    }
    get firstChild() {
        return this._firstChild;
    }
    set firstChild(firstChild) {
        this._firstChild = firstChild;
        this.ownerDocument.markDirty(this);
    }
    get lastChild() {
        return this._lastChild;
    }
    set lastChild(lastChild) {
        this._lastChild = lastChild;
        this.ownerDocument.markDirty(this);
    }
    get previousSibling() {
        return this._previousSibling;
    }
    set previousSibling(previousSibling) {
        this._previousSibling = previousSibling;
        this.ownerDocument.markDirty(this);
    }
    get nextSibling() {
        return this._nextSibling;
    }
    set nextSibling(nextSibling) {
        this._nextSibling = nextSibling;
        this.ownerDocument.markDirty(this);
    }
    get parentNode() {
        return this._parentNode;
    }
    set parentNode(parentNode) {
        this._parentNode = parentNode;
        this.ownerDocument.markDirty(this);
    }
    get isConnected() {
        return this.parentNode?.isConnected || false;
    }
    invalidateChildIndices(child) {
        if (this._minInvalidChildIndex == null || !this._minInvalidChildIndex.isConnected || child.index < this._minInvalidChildIndex.index) {
            this._minInvalidChildIndex = child;
            this.ownerDocument.markDirty(this);
        }
    }
    updateChildIndices() {
        let node = this._minInvalidChildIndex;
        while(node){
            node.index = node.previousSibling ? node.previousSibling.index + 1 : 0;
            node = node.nextSibling;
        }
        this._minInvalidChildIndex = null;
    }
    appendChild(child) {
        if (child.parentNode) child.parentNode.removeChild(child);
        if (this.firstChild == null) this.firstChild = child;
        if (this.lastChild) {
            this.lastChild.nextSibling = child;
            child.index = this.lastChild.index + 1;
            child.previousSibling = this.lastChild;
        } else {
            child.previousSibling = null;
            child.index = 0;
        }
        child.parentNode = this;
        child.nextSibling = null;
        this.lastChild = child;
        this.ownerDocument.markDirty(this);
        if (this.isConnected) this.ownerDocument.queueUpdate();
    }
    insertBefore(newNode, referenceNode) {
        if (referenceNode == null) return this.appendChild(newNode);
        if (newNode.parentNode) newNode.parentNode.removeChild(newNode);
        newNode.nextSibling = referenceNode;
        newNode.previousSibling = referenceNode.previousSibling;
        // Ensure that the newNode's index is less than that of the reference node so that
        // invalidateChildIndices will properly use the newNode as the _minInvalidChildIndex, thus making sure
        // we will properly update the indexes of all sibiling nodes after the newNode. The value here doesn't matter
        // since updateChildIndices should calculate the proper indexes.
        newNode.index = referenceNode.index - 1;
        if (this.firstChild === referenceNode) this.firstChild = newNode;
        else if (referenceNode.previousSibling) referenceNode.previousSibling.nextSibling = newNode;
        referenceNode.previousSibling = newNode;
        newNode.parentNode = referenceNode.parentNode;
        this.invalidateChildIndices(newNode);
        if (this.isConnected) this.ownerDocument.queueUpdate();
    }
    removeChild(child) {
        if (child.parentNode !== this) return;
        if (this._minInvalidChildIndex === child) this._minInvalidChildIndex = null;
        if (child.nextSibling) {
            this.invalidateChildIndices(child.nextSibling);
            child.nextSibling.previousSibling = child.previousSibling;
        }
        if (child.previousSibling) child.previousSibling.nextSibling = child.nextSibling;
        if (this.firstChild === child) this.firstChild = child.nextSibling;
        if (this.lastChild === child) this.lastChild = child.previousSibling;
        child.parentNode = null;
        child.nextSibling = null;
        child.previousSibling = null;
        child.index = 0;
        this.ownerDocument.markDirty(child);
        if (this.isConnected) this.ownerDocument.queueUpdate();
    }
    addEventListener() {}
    removeEventListener() {}
    // Preact 11 reads childNodes when entering a portal and removes nodes using
    // ChildNode.remove(). Keep these operations on the collection document.
    get childNodes() {
        return [
            ...this
        ];
    }
    remove() {
        this.parentNode?.removeChild(this);
    }
    get previousVisibleSibling() {
        let node = this.previousSibling;
        while(node && node.isHidden)node = node.previousSibling;
        return node;
    }
    get nextVisibleSibling() {
        let node = this.nextSibling;
        while(node && node.isHidden)node = node.nextSibling;
        return node;
    }
    get firstVisibleChild() {
        let node = this.firstChild;
        while(node && node.isHidden)node = node.nextSibling;
        return node;
    }
    get lastVisibleChild() {
        let node = this.lastChild;
        while(node && node.isHidden)node = node.previousSibling;
        return node;
    }
}
class ElementNode extends BaseNode {
    // These are collection elements. Preact skips comment nodes when advancing
    // its insertion cursor, so marking items as comments breaks keyed reordering.
    nodeType = 1;
    node;
    isMutated = true;
    _index = 0;
    isHidden = false;
    constructor(type, ownerDocument){
        super(ownerDocument);
        this.node = null;
    }
    get index() {
        return this._index;
    }
    set index(index) {
        this._index = index;
        this.ownerDocument.markDirty(this);
    }
    get level() {
        if (this.parentNode instanceof ElementNode) return this.parentNode.level + (this.parentNode.node?.type === 'item' ? 1 : 0);
        return 0;
    }
    /**
   * Lazily gets a mutable instance of a Node. If the node has already
   * been cloned during this update cycle, it just returns the existing one.
   */ getMutableNode() {
        if (this.node == null) return null;
        if (!this.isMutated) {
            this.node = this.node.clone();
            this.isMutated = true;
        }
        this.ownerDocument.markDirty(this);
        return this.node;
    }
    updateNode() {
        let nextSibling = this.nextVisibleSibling;
        let node = this.getMutableNode();
        if (node == null) return;
        node.index = this.index;
        node.level = this.level;
        node.parentKey = this.parentNode instanceof ElementNode ? this.parentNode.node?.key ?? null : null;
        node.prevKey = this.previousVisibleSibling?.node?.key ?? null;
        node.nextKey = nextSibling?.node?.key ?? null;
        node.hasChildNodes = !!this.firstChild;
        node.firstChildKey = this.firstVisibleChild?.node?.key ?? null;
        node.lastChildKey = this.lastVisibleChild?.node?.key ?? null;
        // Update the colIndex of sibling nodes if this node has a colSpan.
        if ((node.colSpan != null || node.colIndex != null) && nextSibling) {
            // This queues the next sibling for update, which means this happens recursively.
            let nextColIndex = (node.colIndex ?? node.index) + (node.colSpan ?? 1);
            if (nextSibling.node != null && nextColIndex !== nextSibling.node.colIndex) {
                let siblingNode = nextSibling.getMutableNode();
                siblingNode.colIndex = nextColIndex;
            }
        }
    }
    setProps(obj, ref, CollectionNodeClass, rendered, render) {
        let node;
        let { value: value1, textValue, id, ...props } = obj;
        if (this.node == null) {
            node = new CollectionNodeClass(id ?? `react-aria-${++this.ownerDocument.nodeId}`);
            this.node = node;
        } else node = this.getMutableNode();
        props.ref = ref;
        node.props = props;
        node.rendered = rendered;
        node.render = render;
        node.value = value1;
        if (obj['aria-label']) node['aria-label'] = obj['aria-label'];
        node.textValue = textValue || (typeof props.children === 'string' ? props.children : '') || obj['aria-label'] || '';
        if (id != null && id !== node.key) throw new Error('Cannot change the id of an item');
        if (props.colSpan != null) node.colSpan = props.colSpan;
        if (this.isConnected) this.ownerDocument.queueUpdate();
    }
    get style() {
        // React sets display: none to hide elements during Suspense.
        // We'll handle this by setting the element to hidden and invalidating
        // its siblings/parent. Hidden elements remain in the Document, but
        // are removed from the Collection.
        let element = this;
        return {
            get display () {
                return element.isHidden ? 'none' : '';
            },
            set display (value){
                let isHidden = value === 'none';
                if (element.isHidden !== isHidden) {
                    // Mark parent node dirty if this element is currently the first or last visible child.
                    if (element.parentNode?.firstVisibleChild === element || element.parentNode?.lastVisibleChild === element) element.ownerDocument.markDirty(element.parentNode);
                    // Mark sibling visible elements dirty.
                    let prev = element.previousVisibleSibling;
                    let next = element.nextVisibleSibling;
                    if (prev) element.ownerDocument.markDirty(prev);
                    if (next) element.ownerDocument.markDirty(next);
                    // Mark self dirty.
                    element.isHidden = isHidden;
                    element.ownerDocument.markDirty(element);
                }
            }
        };
    }
    hasAttribute() {}
    setAttribute() {}
    setAttributeNS() {}
    removeAttribute() {}
}
class Document extends BaseNode {
    nodeType = 11;
    ownerDocument = this;
    dirtyNodes = new Set();
    isSSR = false;
    nodeId = 0;
    nodesByProps = new WeakMap();
    keyOwners = new Map();
    collection;
    nextCollection = null;
    subscriptions = new Set();
    queuedRender = false;
    inSubscription = false;
    constructor(collection){
        // @ts-ignore
        super(null);
        this.collection = collection;
        this.nextCollection = collection;
    }
    get isConnected() {
        return true;
    }
    createElement(type) {
        return new ElementNode(type, this);
    }
    createElementNS(_namespace, type) {
        return this.createElement(type);
    }
    getMutableCollection() {
        if (!this.nextCollection) this.nextCollection = this.collection.clone();
        return this.nextCollection;
    }
    markDirty(node) {
        this.dirtyNodes.add(node);
    }
    addNode(element) {
        if (element.isHidden || element.node == null) return;
        let collection = this.getMutableCollection();
        if (!collection.getItem(element.node.key)) for (let child of element)this.addNode(child);
        collection.addNode(element.node);
    }
    removeNode(node) {
        for (let child of node)this.removeNode(child);
        if (node.node) {
            let collection = this.getMutableCollection();
            collection.removeNode(node.node.key);
        }
    }
    /** Finalizes the collection update, updating all nodes and freezing the collection. */ getCollection() {
        // If in a subscription update, return return the existing collection.
        // React will call getCollection again during render, at which point all the updates will be complete.
        if (this.inSubscription) return this.collection;
        // Reset queuedRender to false when getCollection is called during render.
        this.queuedRender = false;
        this.updateCollection();
        return this.collection;
    }
    updateCollection() {
        // First, remove disconnected nodes and update the indices of dirty element children.
        for (let element of this.dirtyNodes)if (element instanceof ElementNode && (!element.isConnected || element.isHidden)) this.removeNode(element);
        else element.updateChildIndices();
        // Next, update dirty collection nodes.
        for (let element of this.dirtyNodes)if (element instanceof ElementNode) {
            if (element.isConnected && !element.isHidden) {
                element.updateNode();
                this.addNode(element);
            }
            if (element.node) this.dirtyNodes.delete(element);
            element.isMutated = false;
        } else this.dirtyNodes.delete(element);
        // Finally, update the collection.
        if (this.nextCollection) {
            this.nextCollection.commit(this.firstVisibleChild?.node?.key ?? null, this.lastVisibleChild?.node?.key ?? null, this.isSSR);
            if (!this.isSSR) {
                this.collection = this.nextCollection;
                this.nextCollection = null;
            }
        }
    }
    queueUpdate() {
        if (this.dirtyNodes.size === 0 || this.queuedRender) return;
        // Only trigger subscriptions once during an update, when the first item changes.
        // React's useSyncExternalStore will call getCollection immediately, to check whether the snapshot changed.
        // If so, React will queue a render to happen after the current commit to our fake DOM finishes.
        // We track whether getCollection is called in a subscription, and once it is called during render,
        // we reset queuedRender back to false.
        this.queuedRender = true;
        this.inSubscription = true;
        // Clone the collection to ensure that React queues a render. It will call getCollection again
        // during render, at which point all the updates will be complete and we can return
        // the new collection.
        if (!this.isSSR) this.collection = this.collection.clone();
        for (let fn of this.subscriptions)fn();
        this.inSubscription = false;
    }
    subscribe(fn) {
        this.subscriptions.add(fn);
        // Ensure that React reads the collection if we re-subscribe after updates were
        // already queued. When a hidden Activity is revealed, child nodes re-attach and call
        // queueUpdate before we can re-subscribe, so the notification is lost.
        if (this.queuedRender) fn();
        return ()=>this.subscriptions.delete(fn);
    }
    resetAfterSSR() {
        if (this.isSSR) {
            this.isSSR = false;
            this.firstChild = null;
            this.lastChild = null;
            this.nodeId = 0;
            this.keyOwners.clear();
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5c0At":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Maps over a list of items and renders React elements for them. Each rendered item is
 * cached based on object identity, and React keys are generated from the `key` or `id` property.
 */ parcelHelpers.export(exports, "useCachedChildren", ()=>useCachedChildren);
var _react = require("react");
function useCachedChildren(props) {
    let { children, items, idScope, addIdAndValue, dependencies = [] } = props;
    // In development, invalidate when the children function updates (e.g. HMR).
    let childrenString = (0, _react.useMemo)(()=>undefined, [
        children
    ]);
    // Invalidate the cache whenever dependencies change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // oxlint-disable-next-line react/react-compiler, react-hooks/exhaustive-deps
    let cache = (0, _react.useMemo)(()=>new WeakMap(), [
        ...dependencies,
        childrenString
    ]);
    return (0, _react.useMemo)(()=>{
        if (items && typeof children === 'function') {
            let res = [];
            for (let item of items){
                let cacheKey = isWeakKey(item) ? item : null;
                let rendered = cacheKey ? cache.get(cacheKey) : null;
                if (!rendered) {
                    rendered = children(item);
                    // @ts-ignore
                    let id = rendered.props.id ?? item?.key ?? item?.id;
                    if (idScope != null && rendered.props.id == null && id != null) id = idScope + ':' + id;
                    // If no id is inferred from data, use the index as the React key.
                    // An id will be generated by the collection document.
                    let key = id ?? res.length;
                    // Note: only works if wrapped Item passes through id...
                    rendered = (0, _react.cloneElement)(rendered, addIdAndValue ? {
                        key,
                        id,
                        value: item
                    } : {
                        key
                    });
                    if (cacheKey) cache.set(cacheKey, rendered);
                }
                res.push(rendered);
            }
            return res;
        } else if (typeof children !== 'function') return children;
    }, [
        children,
        items,
        cache,
        idScope,
        addIdAndValue
    ]);
}
function isWeakKey(value) {
    switch(typeof value){
        case 'object':
            return value != null;
        case 'function':
        case 'symbol':
            return true;
        default:
            return false;
    }
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

