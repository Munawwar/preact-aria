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
})({"25hLL":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
/*
 * Copyright 2020 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "OutsideBody", ()=>OutsideBody);
parcelHelpers.export(exports, "ClickingButtonShouldFireOnInteractOutside", ()=>ClickingButtonShouldFireOnInteractOutside);
var _jsxRuntime = require("preact/jsx-runtime");
var _storyActionsTs = require("../../../../../../story-actions.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useInteractOutsideTs = require("../../../../../../../vendor/react-aria/src/interactions/useInteractOutside.ts");
var _usePressTs = require("../../../../../../../vendor/react-aria/src/interactions/usePress.ts");
exports.default = {
    title: 'useInteractOutside'
};
const OutsideBody = {
    render: ()=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(Demo, {}),
    decorators: [
        (Story)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(BodyStyler, {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(Story, {})
            })
    ]
};
const ClickingButtonShouldFireOnInteractOutside = {
    render: ()=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(App, {})
};
function Demo() {
    let ref = (0, _react.useRef)(null);
    let onInteractOutside = (0, _storyActionsTs.action)('outside');
    (0, _useInteractOutsideTs.useInteractOutside)({
        ref,
        onInteractOutside
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        ref: ref,
        style: {
            marginInlineStart: '50px',
            marginBlockStart: '50px'
        },
        children: "Click anywhere but this text"
    });
}
function BodyStyler(props) {
    (0, _react.useEffect)(()=>{
        let story = document.querySelector('.react-spectrum-story');
        let prev = {
            body: {
                height: document.body.style.height,
                width: document.body.style.width
            },
            story: {
                minHeight: story.style.minHeight
            }
        };
        document.body.style.height = 'fit-content';
        document.body.style.width = 'fit-content';
        story.style.minHeight = 'initial';
        return ()=>{
            document.body.style.height = prev.body.height;
            document.body.style.width = prev.body.width;
            story.style.minHeight = prev.story.minHeight;
        };
    });
    return props.children;
}
function MyButton() {
    let ref = (0, _reactDefault.default).useRef(null);
    let { pressProps } = (0, _usePressTs.usePress)({
        ref
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
        ...pressProps,
        ref: ref,
        children: "My Button"
    });
}
function App() {
    let ref = (0, _reactDefault.default).useRef(null);
    (0, _useInteractOutsideTs.useInteractOutside)({
        // Clicking on "My Button" should fire this callback
        onInteractOutside: (0, _storyActionsTs.action)('clicked outside of orange div'),
        ref
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        className: "App",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                children: "Clicking 'My Button' should fire onInteractOutside"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                ref: ref,
                style: {
                    width: '100px',
                    height: '100px',
                    background: 'orange'
                }
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(MyButton, {})
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../../../story-actions.ts":"8bOu8","react":"gOP0N","../../../../../../../vendor/react-aria/src/interactions/useInteractOutside.ts":"fgkZg","../../../../../../../vendor/react-aria/src/interactions/usePress.ts":"3S2KR","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8bOu8":[function(require,module,exports,__globalThis) {
// Standalone replacement for Storybook's action recorder; example source stays unchanged.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fn", ()=>fn);
parcelHelpers.export(exports, "action", ()=>action);
function fn() {
    return (...args)=>console.log('Example action:', ...args);
}
const action = (name)=>(...args)=>console.log(name, ...args);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fgkZg":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Example, used in components like Dialogs and Popovers so they can close
 * when a user clicks outside them.
 */ parcelHelpers.export(exports, "useInteractOutside", ()=>useInteractOutside);
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _domHelpers = require("../utils/domHelpers");
var _react = require("react");
var _useEffectEvent = require("../utils/useEffectEvent");
function useInteractOutside(props) {
    let { ref, onInteractOutside, isDisabled, onInteractOutsideStart } = props;
    let stateRef = (0, _react.useRef)({
        isPointerDown: false,
        ignoreEmulatedMouseEvents: false
    });
    let onPointerDown = (0, _useEffectEvent.useEffectEvent)((e)=>{
        if (onInteractOutside && isValidEvent(e, ref)) {
            if (onInteractOutsideStart) onInteractOutsideStart(e);
            stateRef.current.isPointerDown = true;
        }
    });
    let triggerInteractOutside = (0, _useEffectEvent.useEffectEvent)((e)=>{
        if (onInteractOutside) onInteractOutside(e);
    });
    (0, _react.useEffect)(()=>{
        let state = stateRef.current;
        if (isDisabled) return;
        const element = ref.current;
        const documentObject = (0, _domHelpers.getOwnerDocument)(element);
        // Use pointer events if available. Otherwise, fall back to mouse and touch events.
        if (typeof PointerEvent !== 'undefined') {
            let onClick = (e)=>{
                if (state.isPointerDown && isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            // changing these to capture phase fixed combobox
            // Use click instead of pointerup to avoid Android Chrome issue
            // https://issues.chromium.org/issues/40732224
            documentObject.addEventListener('pointerdown', onPointerDown, true);
            documentObject.addEventListener('click', onClick, true);
            return ()=>{
                documentObject.removeEventListener('pointerdown', onPointerDown, true);
                documentObject.removeEventListener('click', onClick, true);
            };
        }
    }, [
        ref,
        isDisabled
    ]);
}
function isValidEvent(event, ref) {
    if (event.button > 0) return false;
    let target = (0, _domfunctions.getEventTarget)(event);
    if (target) {
        // if the event target is no longer in the document, ignore
        const ownerDocument = target.ownerDocument;
        if (!ownerDocument || !(0, _domfunctions.nodeContains)(ownerDocument.documentElement, target)) return false;
        // If the target is within a top layer element (e.g. toasts), ignore.
        if (target.closest('[data-react-aria-top-layer]')) return false;
    }
    if (!ref.current) return false;
    // When the event source is inside a Shadow DOM, event.target is just the shadow root.
    // Using event.composedPath instead means we can get the actual element inside the shadow root.
    // This only works if the shadow root is open, there is no way to detect if it is closed.
    // If the event composed path contains the ref, interaction is inside.
    return !event.composedPath().includes(ref.current);
}

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","react":"gOP0N","../utils/useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8kfpz":[function(require,module,exports,__globalThis) {
// Source: https://github.com/microsoft/tabster/blob/a89fc5d7e332d48f68d03b1ca6e344489d1c3898/src/Shadowdomize/DOMFunctions.ts#L16
/* eslint-disable rsp-rules/no-non-shadow-contains, rsp-rules/safe-event-target */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ShadowDOM safe version of Node.contains.
 */ parcelHelpers.export(exports, "nodeContains", ()=>nodeContains);
parcelHelpers.export(exports, "getActiveElement", ()=>getActiveElement);
// Possibly we can improve the types for this using https://github.com/adobe/react-spectrum/pull/8991/changes#diff-2d491c0c91701d28d08e1cf9fcadbdb21a030b67ab681460c9934140f29127b8R68 but it was more changes than I
// wanted to make to fix the function.
/**
 * ShadowDOM safe version of event.target.
 */ parcelHelpers.export(exports, "getEventTarget", ()=>getEventTarget);
/**
 * Returns the set of event targets a listener must be attached to in order to
 * globally observe an event.
 *
 * @param from - The target element to start from.
 * @param to - The element to stop at when bubbling. @default getOwnerWindow(from)
 *   `to` is generally going to be either `document` or `window`, but
 *   it can be any intermediate node.
 * @returns [global, ...shadowRoots]
 */ parcelHelpers.export(exports, "getPropagationTargets", ()=>getPropagationTargets);
/**
 * ShadowDOM safe fast version of node.contains(document.activeElement).
 *
 * @param node
 * @returns
 */ parcelHelpers.export(exports, "isFocusWithin", ()=>isFocusWithin);
var _domHelpers = require("../domHelpers");
var _flags = require("react-stately/private/flags/flags");
function nodeContains(node, otherNode) {
    if (!(0, _flags.shadowDOM)()) return otherNode && node ? node.contains(otherNode) : false;
    if (!node || !otherNode) return false;
    let currentNode = otherNode;
    while(currentNode != null){
        if (currentNode === node) return true;
        if (typeof currentNode.assignedElements !== 'function' && currentNode.assignedSlot?.parentNode) // Element is slotted
        currentNode = currentNode.assignedSlot.parentNode;
        else if ((0, _domHelpers.isShadowRoot)(currentNode)) // Element is in shadow root
        currentNode = currentNode.host;
        else currentNode = currentNode.parentNode;
    }
    return false;
}
const getActiveElement = (doc = document)=>{
    if (!(0, _flags.shadowDOM)()) return doc.activeElement;
    let activeElement = doc.activeElement;
    while(activeElement && 'shadowRoot' in activeElement && activeElement.shadowRoot?.activeElement)activeElement = activeElement.shadowRoot.activeElement;
    return activeElement;
};
function getEventTarget(event) {
    if ((0, _flags.shadowDOM)() && event.target instanceof Element && event.target.shadowRoot) {
        if ('composedPath' in event) return event.composedPath()[0] ?? null;
        else if ('composedPath' in event.nativeEvent) return event.nativeEvent.composedPath()[0] ?? null;
    }
    return event.target;
}
function getPropagationTargets(from, to) {
    // If `to` is coming from a ref, its type technically allows `null`.
    // In practice, this function will generally be called from within a useEffect.
    // If the ref has not resolved by that point, then a coding error has been made.
    // Better to return an empty array than `[window]`, which may appear to work
    // in the light DOM, but fail in the shadow DOM.
    if (to === null) return [];
    to = to ?? (0, _domHelpers.getOwnerWindow)(from);
    let targets = [
        to
    ];
    if (!(0, _flags.shadowDOM)() || !from || from === to) return targets;
    // The root `to` itself lives in. The event already reaches `to` once
    // it is inside this root, so we must NOT collect this root or anything above
    // it — only the shadow roots strictly between `refNode` and `to`.
    // `window` has no getRootNode; its boundary is the document, which the walk
    // reaches naturally (the document is not a ShadowRoot, so the loop exits).
    let toRoot = 'getRootNode' in to ? to.getRootNode() : null;
    let current = from.getRootNode() ?? null;
    while((0, _domHelpers.isShadowRoot)(current) && current !== toRoot){
        // order shouldn't matter
        targets.push(current);
        current = current.host.getRootNode();
    }
    return targets;
}
function isFocusWithin(node) {
    if (!node) return false;
    // Get the active element within the node's parent shadow root (or the document). Can return null.
    let root = node.getRootNode();
    let ownerWindow = (0, _domHelpers.getOwnerWindow)(node);
    if (!(root instanceof ownerWindow.Document || root instanceof ownerWindow.ShadowRoot)) return false;
    let activeElement = root.activeElement;
    // Check if the active element is within this node. These nodes are within the same shadow root.
    return activeElement != null && node.contains(activeElement);
}

},{"../domHelpers":"cYkFa","react-stately/private/flags/flags":"ahU3Z","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cYkFa":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2020 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "getOwnerDocument", ()=>getOwnerDocument);
parcelHelpers.export(exports, "getOwnerWindow", ()=>getOwnerWindow);
/**
 * Type guard that checks if a value is a Node. Verifies the presence and type of the nodeType
 * property.
 */ parcelHelpers.export(exports, "isNode", ()=>isNode);
/**
 * Type guard that checks if a value is a Document. Uses nodeType and host property checks to
 * distinguish Document from other values.
 */ parcelHelpers.export(exports, "isDocument", ()=>isDocument);
/**
 * Type guard that checks if a value is a ShadowRoot. Uses nodeType and host property checks to
 * distinguish ShadowRoot from other values.
 */ parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
/**
 * Attaches an event listener on target(s) and returns a cleanup function.
 */ parcelHelpers.export(exports, "addEvent", ()=>addEvent);
/**
 * Sets a CSS property on an element and returns a cleanup function.
 */ parcelHelpers.export(exports, "setStyle", ()=>setStyle);
const getOwnerDocument = (target)=>{
    if (isWindow(target)) return target.document;
    if (isDocument(target)) return target;
    // @ts-expect-error Ensure safe access in SSR environments.
    return target?.ownerDocument ?? (typeof document !== 'undefined' ? document : undefined);
};
const getOwnerWindow = (target)=>{
    let ownerDocument = getOwnerDocument(target);
    // @ts-expect-error Ensure safe access in SSR environments.
    return ownerDocument?.defaultView ?? (typeof window !== 'undefined' ? window : undefined);
};
function isNode(value) {
    return value !== null && typeof value === 'object' && 'nodeType' in value && typeof value.nodeType === 'number';
}
/**
 * Type guard that checks if a value is a Window. Uses window self reference checks to
 * distinguish Window from other values.
 */ function isWindow(value) {
    return typeof value === 'object' && value != null && 'window' in value && value.window === value;
}
function isDocument(value) {
    return isNode(value) && value.nodeType === 9;
}
function isShadowRoot(value) {
    // 11 = DOCUMENT_FRAGMENT_NODE
    return isNode(value) && value.nodeType === 11 && 'host' in value;
}
function addEvent(target, event, listener, options) {
    if (listener == null || target == null) return ()=>{};
    let eventTargets = Array.isArray(target) ? target : [
        target
    ];
    for (let eventTarget of eventTargets)eventTarget.addEventListener(event, listener, options);
    return ()=>{
        for (let eventTarget of eventTargets)eventTarget.removeEventListener(event, listener, options);
    };
}
function setStyle(target, property, value, priority) {
    if (target == null) return ()=>{};
    let restore = new Array();
    let styleTargets = Array.isArray(target) ? target : [
        target
    ];
    for (let styleTarget of styleTargets){
        let initialValue = styleTarget.style.getPropertyValue(property);
        let initialPriority = styleTarget.style.getPropertyPriority(property);
        styleTarget.style.setProperty(property, value, priority);
        restore.unshift(()=>{
            if (initialValue) styleTarget.style.setProperty(property, initialValue, initialPriority);
            else styleTarget.style.removeProperty(property);
        });
    }
    return ()=>{
        for (let cleanup of restore)cleanup();
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ahU3Z":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2023 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "enableTableNestedRows", ()=>enableTableNestedRows);
parcelHelpers.export(exports, "tableNestedRows", ()=>tableNestedRows);
parcelHelpers.export(exports, "enableShadowDOM", ()=>enableShadowDOM);
parcelHelpers.export(exports, "shadowDOM", ()=>shadowDOM);
let _tableNestedRows = false;
let _shadowDOM = false;
function enableTableNestedRows() {
    _tableNestedRows = true;
}
function tableNestedRows() {
    return _tableNestedRows;
}
function enableShadowDOM() {
    _shadowDOM = true;
}
function shadowDOM() {
    return _shadowDOM;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"grBNM":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2023 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "useEffectEvent", ()=>useEffectEvent);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useLayoutEffect = require("./useLayoutEffect");
// Use the earliest effect type possible. useInsertionEffect runs during the mutation phase,
// before all layout effects, but is available only in React 18 and later.
const useEarlyEffect = (0, _reactDefault.default)['useInsertionEffect'] ?? (0, _useLayoutEffect.useLayoutEffect);
function useEffectEvent(fn) {
    const ref = (0, _react.useRef)(null);
    useEarlyEffect(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    // @ts-ignore
    return (0, _react.useCallback)((...args)=>{
        const f = ref.current;
        return f?.(...args);
    }, []);
}

},{"react":"gOP0N","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h7M6K":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2020 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "useLayoutEffect", ()=>useLayoutEffect);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const useLayoutEffect = typeof document !== 'undefined' ? (0, _reactDefault.default).useLayoutEffect : ()=>{};

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jycxS":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2020 Adobe. All rights reserved.
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
 * Merges multiple props objects together. Event handlers are chained,
 * classNames are combined, ids are deduplicated, and refs are merged.
 * For all other props, the last prop object overrides all previous ones.
 *
 * @param args - Multiple sets of props to merge together.
 */ parcelHelpers.export(exports, "mergeProps", ()=>mergeProps);
var _chain = require("./chain");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _useId = require("./useId");
var _mergeRefs = require("./mergeRefs");
function mergeProps(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = (0, _chain.chain)(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = (0, _clsxDefault.default)(a, b);
            else if (key === 'id' && a && b) result.id = (0, _useId.mergeIds)(a, b);
            else if (key === 'ref' && a && b) result.ref = (0, _mergeRefs.mergeRefs)(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}

},{"./chain":"bQmEj","clsx":"5gQI0","./useId":"fQAcb","./mergeRefs":"jspQh","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bQmEj":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Calls all functions in the order they were chained with the same arguments.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chain", ()=>chain);
function chain(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fQAcb":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2020 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "idsUpdaterMap", ()=>idsUpdaterMap);
/**
 * If a default is not provided, generate an id.
 *
 * @param defaultId - Default component id.
 */ parcelHelpers.export(exports, "useId", ()=>useId);
/**
 * Merges two ids.
 * Different ids will trigger a side-effect and re-render components hooked up with `useId`.
 */ parcelHelpers.export(exports, "mergeIds", ()=>mergeIds);
/**
 * Used to generate an id, and after render, check if that id is rendered so we know
 * if we can use it in places such as labelledby.
 *
 * @param depArray - When to recalculate if the id is in the DOM.
 */ parcelHelpers.export(exports, "useSlotId", ()=>useSlotId);
var _react = require("react");
var _useLayoutEffect = require("./useLayoutEffect");
var _ssrprovider = require("../ssr/SSRProvider");
var _useValueEffect = require("./useValueEffect");
// copied from SSRProvider.tsx to reduce exports, if needed again, consider sharing
let canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
let idsUpdaterMap = new Map();
// This allows us to clean up the idsUpdaterMap when the id is no longer used.
// Map is a strong reference, so unused ids wouldn't be cleaned up otherwise.
// This can happen in suspended components where mount/unmount is not called.
let registry;
if (typeof FinalizationRegistry !== 'undefined') registry = new FinalizationRegistry((heldValue)=>{
    idsUpdaterMap.delete(heldValue);
});
let registeredIds = new WeakMap();
function useId(defaultId) {
    let [value, setValue] = (0, _react.useState)(defaultId);
    let nextId = (0, _react.useRef)(null);
    let res = (0, _ssrprovider.useSSRSafeId)(value);
    let cleanupRef = (0, _react.useRef)(null);
    // These are intentionally disabled the compiler, these functions just read the identity
    // of the ref, not the value inside current.
    // oxlint-disable-next-line react/react-compiler
    let registeredId = registeredIds.get(cleanupRef);
    if (registry && registeredId !== res) {
        if (registeredId != null) // oxlint-disable-next-line react/react-compiler
        registry.unregister(cleanupRef);
        // oxlint-disable-next-line react/react-compiler
        registry.register(cleanupRef, res, cleanupRef);
        // oxlint-disable-next-line react/react-compiler
        registeredIds.set(cleanupRef, res);
    }
    if (canUseDOM) {
        const cacheIdRef = idsUpdaterMap.get(res);
        // oxlint-disable-next-line react/react-compiler
        if (cacheIdRef && !cacheIdRef.includes(nextId)) // oxlint-disable-next-line react/react-compiler
        cacheIdRef.push(nextId);
        else // oxlint-disable-next-line react/react-compiler
        idsUpdaterMap.set(res, [
            nextId
        ]);
    }
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        let r = res;
        return ()=>{
            // In Suspense, the cleanup function may be not called
            // when it is though, also remove it from the finalization registry.
            if (registry) {
                registry.unregister(cleanupRef);
                registeredIds.delete(cleanupRef);
            }
            idsUpdaterMap.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is always cleaned up.
    // eslint-disable-next-line
    (0, _react.useEffect)(()=>{
        let newId = nextId.current;
        if (newId) setValue(newId);
        return ()=>{
            if (newId) nextId.current = null;
        };
    });
    return res;
}
function mergeIds(idA, idB) {
    if (idA === idB) return idA;
    let setIdsA = idsUpdaterMap.get(idA);
    if (setIdsA) {
        setIdsA.forEach((ref)=>ref.current = idB);
        return idB;
    }
    let setIdsB = idsUpdaterMap.get(idB);
    if (setIdsB) {
        setIdsB.forEach((ref)=>ref.current = idA);
        return idA;
    }
    return idB;
}
function useSlotId(depArray = []) {
    let id = useId();
    let [resolvedId, setResolvedId] = (0, _useValueEffect.useValueEffect)(id);
    let updateId = (0, _react.useCallback)(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : undefined;
        });
    // oxlint-disable-next-line react/react-compiler
    }, [
        id,
        setResolvedId
    ]);
    (0, _useLayoutEffect.useLayoutEffect)(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}

},{"react":"gOP0N","./useLayoutEffect":"h7M6K","../ssr/SSRProvider":"2cndP","./useValueEffect":"ksiVz","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ksiVz":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2020 Adobe. All rights reserved.
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
// This hook works like `useState`, but when setting the value, you pass a generator function
// that can yield multiple values. Each yielded value updates the state and waits for the next
// layout effect, then continues the generator. This allows sequential updates to state to be
// written linearly.
parcelHelpers.export(exports, "useValueEffect", ()=>useValueEffect);
var _react = require("react");
var _useLayoutEffect = require("./useLayoutEffect");
function useValueEffect(defaultValue) {
    let [value, setValue] = (0, _react.useState)(defaultValue);
    // Keep an up to date copy of value in a ref so we can access the current value in the generator.
    // This allows us to maintain a stable queue function.
    let currValue = (0, _react.useRef)(value);
    let effect = (0, _react.useRef)(null);
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = (0, _react.useRef)(()=>{
        if (!effect.current) return;
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (currValue.current === newValue.value) nextRef.current();
        else setValue(newValue.value);
    });
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        currValue.current = value;
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef.current();
    });
    let queue = (0, _react.useCallback)((fn)=>{
        effect.current = fn(currValue.current);
        nextRef.current();
    }, [
        nextRef
    ]);
    return [
        value,
        queue
    ];
}

},{"react":"gOP0N","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jspQh":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2020 Adobe. All rights reserved.
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
 * Merges multiple refs into one. Works with either callback or object refs.
 */ parcelHelpers.export(exports, "mergeRefs", ()=>mergeRefs);
function mergeRefs(...refs) {
    if (refs.length === 1 && refs[0]) return refs[0];
    return (value)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, value);
            hasCleanup ||= typeof cleanup == 'function';
            return cleanup;
        });
        if (hasCleanup) return ()=>{
            cleanups.forEach((cleanup, i)=>{
                if (typeof cleanup === 'function') cleanup();
                else setRef(refs[i], null);
            });
        };
    };
}
function setRef(ref, value) {
    if (typeof ref === 'function') return ref(value);
    else if (ref != null) ref.current = value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iOeVY":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2020 Adobe. All rights reserved.
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
// Turn a native event into a React synthetic event.
parcelHelpers.export(exports, "createSyntheticEvent", ()=>createSyntheticEvent);
parcelHelpers.export(exports, "setEventTarget", ()=>setEventTarget);
parcelHelpers.export(exports, "useSyntheticBlurEvent", ()=>useSyntheticBlurEvent);
parcelHelpers.export(exports, "ignoreFocusEvent", ()=>ignoreFocusEvent);
/**
 * This function prevents the next focus event fired on `target`, without using
 * `event.preventDefault()`. It works by waiting for the series of focus events to occur, and
 * reverts focus back to where it was before. It also makes these events mostly non-observable by
 * using a capturing listener on the window and stopping propagation.
 */ parcelHelpers.export(exports, "preventFocus", ()=>preventFocus);
var _focusWithoutScrolling = require("../utils/focusWithoutScrolling");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _domHelpers = require("../utils/domHelpers");
var _isFocusable = require("../utils/isFocusable");
var _react = require("react");
var _useLayoutEffect = require("../utils/useLayoutEffect");
function createSyntheticEvent(nativeEvent) {
    let event = nativeEvent;
    event.nativeEvent = nativeEvent;
    event.isDefaultPrevented = ()=>event.defaultPrevented;
    // cancelBubble is technically deprecated in the spec, but still supported in all browsers.
    event.isPropagationStopped = ()=>event.cancelBubble;
    event.persist = ()=>{};
    return event;
}
function setEventTarget(event, target) {
    Object.defineProperty(event, 'target', {
        value: target
    });
    Object.defineProperty(event, 'currentTarget', {
        value: target
    });
}
function useSyntheticBlurEvent(onBlur) {
    let stateRef = (0, _react.useRef)({
        isFocused: false,
        observer: null
    });
    // Clean up MutationObserver on unmount. See below.
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        const state = stateRef.current;
        return ()=>{
            if (state.observer) {
                state.observer.disconnect();
                state.observer = null;
            }
        };
    }, []);
    // This function is called during a React onFocus event.
    return (0, _react.useCallback)((e)=>{
        // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
        // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
        // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
        // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
        let eventTarget = (0, _domfunctions.getEventTarget)(e);
        if (eventTarget instanceof HTMLButtonElement || eventTarget instanceof HTMLInputElement || eventTarget instanceof HTMLTextAreaElement || eventTarget instanceof HTMLSelectElement) {
            stateRef.current.isFocused = true;
            let target = eventTarget;
            let onBlurHandler = (e)=>{
                stateRef.current.isFocused = false;
                if (target.disabled) {
                    // For backward compatibility, dispatch a (fake) React synthetic event.
                    let event = createSyntheticEvent(e);
                    onBlur?.(event);
                }
                // We no longer need the MutationObserver once the target is blurred.
                if (stateRef.current.observer) {
                    stateRef.current.observer.disconnect();
                    stateRef.current.observer = null;
                }
            };
            target.addEventListener('focusout', onBlurHandler, {
                once: true
            });
            stateRef.current.observer = new MutationObserver(()=>{
                if (stateRef.current.isFocused && target.disabled) {
                    stateRef.current.observer?.disconnect();
                    let relatedTargetEl = target === (0, _domfunctions.getActiveElement)() ? null : (0, _domfunctions.getActiveElement)();
                    target.dispatchEvent(new FocusEvent('blur', {
                        relatedTarget: relatedTargetEl
                    }));
                    target.dispatchEvent(new FocusEvent('focusout', {
                        bubbles: true,
                        relatedTarget: relatedTargetEl
                    }));
                }
            });
            stateRef.current.observer.observe(target, {
                attributes: true,
                attributeFilter: [
                    'disabled'
                ]
            });
        }
    }, [
        onBlur
    ]);
}
let ignoreFocusEvent = false;
function preventFocus(target) {
    // The browser will focus the nearest focusable ancestor of our target.
    while(target && !(0, _isFocusable.isFocusable)(target, {
        skipVisibilityCheck: true
    }))target = target.parentElement;
    let ownerWindow = (0, _domHelpers.getOwnerWindow)(target);
    let activeElement = (0, _domfunctions.getActiveElement)(ownerWindow.document);
    if (!activeElement || activeElement === target) return;
    // Listen on the target's root (document or shadow root) so we catch focus events inside
    // shadow DOM; they do not reach the main window.
    let targetRoot = target?.getRootNode();
    let root = targetRoot != null && (0, _domHelpers.isShadowRoot)(targetRoot) ? targetRoot : (0, _domHelpers.getOwnerWindow)(target);
    // Focus is "moving to target" when it moves to the button or to a descendant of the button
    // (e.g. SVG icon)
    let isFocusMovingToTarget = (focusTarget)=>focusTarget === target || (0, _domHelpers.isNode)(focusTarget) && (0, _domfunctions.nodeContains)(target, focusTarget);
    // Blur/focusout events have their target as the element losing focus. Stop propagation when
    // that is the previously focused element (activeElement) or a descendant (e.g. in shadow DOM).
    let isBlurFromActiveElement = (eventTarget)=>eventTarget === activeElement || activeElement != null && (0, _domHelpers.isNode)(eventTarget) && (0, _domfunctions.nodeContains)(activeElement, eventTarget);
    ignoreFocusEvent = true;
    let isRefocusing = false;
    let onBlur = (e)=>{
        if (isBlurFromActiveElement((0, _domfunctions.getEventTarget)(e)) || isRefocusing) e.stopImmediatePropagation();
    };
    let onFocusOut = (e)=>{
        if (isBlurFromActiveElement((0, _domfunctions.getEventTarget)(e)) || isRefocusing) {
            e.stopImmediatePropagation();
            // If there was no focusable ancestor, we don't expect a focus event.
            // Re-focus the original active element here.
            if (!target && !isRefocusing) {
                isRefocusing = true;
                (0, _focusWithoutScrolling.focusWithoutScrolling)(activeElement);
                cleanup();
            }
        }
    };
    let onFocus = (e)=>{
        if (isFocusMovingToTarget((0, _domfunctions.getEventTarget)(e)) || isRefocusing) e.stopImmediatePropagation();
    };
    let onFocusIn = (e)=>{
        if (isFocusMovingToTarget((0, _domfunctions.getEventTarget)(e)) || isRefocusing) {
            e.stopImmediatePropagation();
            if (!isRefocusing) {
                isRefocusing = true;
                (0, _focusWithoutScrolling.focusWithoutScrolling)(activeElement);
                cleanup();
            }
        }
    };
    root.addEventListener('blur', onBlur, true);
    root.addEventListener('focusout', onFocusOut, true);
    root.addEventListener('focusin', onFocusIn, true);
    root.addEventListener('focus', onFocus, true);
    let cleanup = ()=>{
        cancelAnimationFrame(raf);
        root.removeEventListener('blur', onBlur, true);
        root.removeEventListener('focusout', onFocusOut, true);
        root.removeEventListener('focusin', onFocusIn, true);
        root.removeEventListener('focus', onFocus, true);
        ignoreFocusEvent = false;
        isRefocusing = false;
    };
    let raf = requestAnimationFrame(cleanup);
    return cleanup;
}

},{"../utils/focusWithoutScrolling":"gcZ3w","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","../utils/isFocusable":"dLPRV","react":"gOP0N","../utils/useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dLPRV":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2025 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "isFocusable", ()=>isFocusable);
parcelHelpers.export(exports, "isTabbable", ()=>isTabbable);
var _domHelpers = require("./domHelpers");
var _isElementVisible = require("./isElementVisible");
const focusableElements = [
    'input:not([disabled]):not([type=hidden])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]:not([contenteditable^="false"])',
    'permission'
];
const FOCUSABLE_ELEMENT_SELECTOR = focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const TABBABLE_ELEMENT_SELECTOR = focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function isFocusable(element, options) {
    return element.matches(FOCUSABLE_ELEMENT_SELECTOR) && !isInert(element) && (options?.skipVisibilityCheck || (0, _isElementVisible.isElementVisible)(element));
}
function isTabbable(element) {
    return element.matches(TABBABLE_ELEMENT_SELECTOR) && (0, _isElementVisible.isElementVisible)(element) && !isInert(element);
}
function isInert(element) {
    let node = element;
    while(node != null){
        if (node instanceof (0, _domHelpers.getOwnerWindow)(node).HTMLElement && node.inert) return true;
        node = node.parentElement;
    }
    return false;
}

},{"./domHelpers":"cYkFa","./isElementVisible":"42Fr7","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"42Fr7":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2021 Adobe. All rights reserved.
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
 * Adapted from https://github.com/testing-library/jest-dom and
 * https://github.com/vuejs/vue-test-utils-next/.
 * Licensed under the MIT License.
 *
 * @param element - Element to evaluate for display or visibility.
 */ parcelHelpers.export(exports, "isElementVisible", ()=>isElementVisible);
var _domHelpers = require("./domHelpers");
const supportsCheckVisibility = typeof Element !== 'undefined' && 'checkVisibility' in Element.prototype;
function isStyleVisible(element) {
    const windowObject = (0, _domHelpers.getOwnerWindow)(element);
    if (!(element instanceof windowObject.HTMLElement) && !(element instanceof windowObject.SVGElement)) return false;
    let { display, visibility } = element.style;
    let isVisible = display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse';
    if (isVisible) {
        const { getComputedStyle } = (0, _domHelpers.getOwnerWindow)(element);
        let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
        isVisible = computedDisplay !== 'none' && computedVisibility !== 'hidden' && computedVisibility !== 'collapse';
    }
    return isVisible;
}
function isAttributeVisible(element, childElement) {
    return !element.hasAttribute('hidden') && // Ignore HiddenSelect when tree walking.
    !element.hasAttribute('data-react-aria-prevent-focus') && (element.nodeName === 'DETAILS' && childElement && childElement.nodeName !== 'SUMMARY' ? element.hasAttribute('open') : true);
}
function isElementVisible(element, childElement) {
    if (supportsCheckVisibility) return element.checkVisibility({
        visibilityProperty: true
    }) && !element.closest('[data-react-aria-prevent-focus]');
    return element.nodeName !== '#comment' && isStyleVisible(element) && isAttributeVisible(element, childElement) && (!element.parentElement || isElementVisible(element.parentElement, element));
}

},{"./domHelpers":"cYkFa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dtScK":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2022 Adobe. All rights reserved.
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
// Original licensing for the following method can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/blob/3c713d513195a53788b3f8bb4b70279d68b15bcc/packages/react-interactions/events/src/dom/shared/index.js#L74-L87
// Keyboards, Assistive Technologies, and element.click() all produce a "virtual"
// click event. This is a method of inferring such clicks. Every browser except
// IE 11 only sets a zero value of "detail" for click events that are "virtual".
// However, IE 11 uses a zero value for all click events. For IE 11 we rely on
// the quirk that it produces click events that are of type PointerEvent, and
// where only the "virtual" click lacks a pointerType field.
parcelHelpers.export(exports, "isVirtualClick", ()=>isVirtualClick);
parcelHelpers.export(exports, "isVirtualPointerEvent", ()=>isVirtualPointerEvent);
var _platform = require("./platform");
function isVirtualClick(event) {
    // JAWS/NVDA with Firefox.
    if (event.pointerType === '' && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if ((0, _platform.isAndroid)() && event.pointerType) return event.type === 'click' && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
    // Talkback double tap from Windows Firefox touch screen press
    return !(0, _platform.isAndroid)() && event.width === 0 && event.height === 0 || (0, _platform.isAndroid)() && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse';
}

},{"./platform":"eBqgD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k2HOw":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2020 Adobe. All rights reserved.
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
 * Delays a callback execution until all elements finished their transition.
 */ parcelHelpers.export(exports, "runAfterTransition", ()=>runAfterTransition);
var _domHelpers = require("./domHelpers");
var _domfunctions = require("./shadowdom/DOMFunctions");
// We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
const transitionsByElement = new Map();
const transitionCallbacks = new Set();
function isTransitionEvent(event) {
    return 'propertyName' in event;
}
function onTransitionStart(e) {
    let eventTarget = (0, _domfunctions.getEventTarget)(e);
    if (!isTransitionEvent(e) || !eventTarget) return;
    // Add the transitioning property to the list for this element.
    let transitions = transitionsByElement.get(eventTarget);
    if (!transitions) {
        transitions = new Set();
        transitionsByElement.set(eventTarget, transitions);
        // The transitioncancel event must be registered on the element itself, rather than as a global
        // event. This enables us to handle when the node is deleted from the document while it is transitioning.
        // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
        eventTarget.addEventListener('transitioncancel', onTransitionEnd, {
            once: true
        });
    }
    transitions.add(e.propertyName);
}
function onTransitionEnd(e) {
    let eventTarget = (0, _domfunctions.getEventTarget)(e);
    if (!isTransitionEvent(e) || !eventTarget) return;
    // Remove property from list of transitioning properties.
    let properties = transitionsByElement.get(eventTarget);
    if (!properties) return;
    properties.delete(e.propertyName);
    // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
    if (properties.size === 0) {
        eventTarget.removeEventListener('transitioncancel', onTransitionEnd);
        transitionsByElement.delete(eventTarget);
    }
    // If no transitioning elements, call all of the queued callbacks.
    if (transitionsByElement.size === 0) for (let callback of transitionCallbacks){
        callback(true);
        transitionCallbacks.delete(callback);
    }
}
function setupGlobalEvents() {
    (0, _domHelpers.addEvent)(document, 'transitionrun', onTransitionStart);
    (0, _domHelpers.addEvent)(document, 'transitionend', onTransitionEnd);
}
/**
 * Cleans up any elements that are no longer in the document.
 * This is necessary because we can't rely on transitionend events to fire
 * for elements that are removed from the document while transitioning.
 */ function cleanupDetachedElements() {
    for (const [eventTarget] of transitionsByElement)// Similar to `eventTarget instanceof Element && !eventTarget.isConnected`, but avoids
    // the explicit instanceof check, since it may be different in different contexts.
    if ('isConnected' in eventTarget && !eventTarget.isConnected) transitionsByElement.delete(eventTarget);
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') setupGlobalEvents();
    else (0, _domHelpers.addEvent)(document, 'DOMContentLoaded', setupGlobalEvents);
}
function runAfterTransition(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    let frame = window.requestAnimationFrame(()=>{
        cleanupDetachedElements();
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if (transitionsByElement.size === 0) return fn(false);
        transitionCallbacks.add(fn);
    });
    return ()=>{
        window.cancelAnimationFrame(frame);
        transitionCallbacks.delete(fn);
    };
}

},{"./domHelpers":"cYkFa","./shadowdom/DOMFunctions":"8kfpz","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8a0bK":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2020 Adobe. All rights reserved.
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
// Syncs ref from context with ref passed to hook
parcelHelpers.export(exports, "useSyncRef", ()=>useSyncRef);
var _useLayoutEffect = require("./useLayoutEffect");
function useSyncRef(context, ref) {
    // oxlint-disable-next-line react/react-compiler
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (context && context.ref && ref) {
            // oxlint-disable-next-line react/react-compiler
            context.ref.current = ref.current;
            return ()=>{
                if (context.ref) // oxlint-disable-next-line react-hooks/exhaustive-deps
                context.ref.current = null;
            };
        }
    });
}

},{"./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jdK61":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2026 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "getMetaValue", ()=>getMetaValue);
var _domHelpers = require("./domHelpers");
function getMetaValue(key, doc) {
    let ownerWindow = (0, _domHelpers.getOwnerWindow)(doc);
    let ownerDocument = (0, _domHelpers.getOwnerDocument)(doc);
    if (ownerDocument == null || ownerWindow == null) return;
    let content = undefined;
    let selector = `meta[name="${CSS.escape(key)}"], meta[property="${CSS.escape(key)}"]`;
    let meta = ownerDocument.querySelector(selector);
    if (meta && meta instanceof ownerWindow.HTMLMetaElement) {
        if (key === 'csp-nonce' && meta.nonce) content ??= meta.nonce || undefined;
        if (meta.content) content ??= meta.content || undefined;
    }
    if (key === 'csp-nonce') content ??= ownerWindow.__webpack_nonce__ || globalThis.__webpack_nonce__ || undefined;
    return content;
}

},{"./domHelpers":"cYkFa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jsdt1":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2020 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "useGlobalListeners", ()=>useGlobalListeners);
var _react = require("react");
function useGlobalListeners() {
    let globalListeners = (0, _react.useRef)(new Map());
    let addGlobalListener = (0, _react.useCallback)((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = options?.once ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type,
            eventTarget,
            fn,
            options
        });
        eventTarget.addEventListener(type, fn, options);
    }, []);
    let removeGlobalListener = (0, _react.useCallback)((eventTarget, type, listener, options)=>{
        let fn = globalListeners.current.get(listener)?.fn || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (0, _react.useCallback)(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    (0, _react.useEffect)(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener,
        removeGlobalListener,
        removeAllGlobalListeners
    };
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3IKpx":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2020 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "disableTextSelection", ()=>disableTextSelection);
parcelHelpers.export(exports, "restoreTextSelection", ()=>restoreTextSelection);
var _domHelpers = require("../utils/domHelpers");
var _platform = require("../utils/platform");
var _runAfterTransition = require("../utils/runAfterTransition");
// Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
// rather than at the document level so we just need to apply/remove user-select: none for each pressed element individually
let state = 'default';
let savedUserSelect = '';
let modifiedElementMap = new WeakMap();
function disableTextSelection(target) {
    if ((0, _platform.isIOS)() && (0, _platform.isWebKit)()) {
        if (state === 'default') {
            const documentObject = (0, _domHelpers.getOwnerDocument)(target);
            savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
            documentObject.documentElement.style.webkitUserSelect = 'none';
        }
        state = 'disabled';
    } else if (target instanceof HTMLElement || target instanceof SVGElement) {
        // If not iOS, store the target's original user-select and change to user-select: none
        // Ignore state since it doesn't apply for non iOS
        let property = 'userSelect' in target.style ? 'userSelect' : 'webkitUserSelect';
        modifiedElementMap.set(target, target.style[property]);
        target.style[property] = 'none';
    }
}
function restoreTextSelection(target) {
    if ((0, _platform.isIOS)() && (0, _platform.isWebKit)()) {
        // If the state is already default, there's nothing to do.
        // If it is restoring, then there's no need to queue a second restore.
        if (state !== 'disabled') return;
        state = 'restoring';
        // There appears to be a delay on iOS where selection still might occur
        // after pointer up, so wait a bit before removing user-select.
        setTimeout(()=>{
            // Wait for any CSS transitions to complete so we don't recompute style
            // for the whole page in the middle of the animation and cause jank.
            (0, _runAfterTransition.runAfterTransition)(()=>{
                // Avoid race conditions
                if (state === 'restoring') {
                    const documentObject = (0, _domHelpers.getOwnerDocument)(target);
                    if (documentObject.documentElement.style.webkitUserSelect === 'none') documentObject.documentElement.style.webkitUserSelect = savedUserSelect || '';
                    savedUserSelect = '';
                    state = 'default';
                }
            });
        }, 300);
    } else if (target instanceof HTMLElement || target instanceof SVGElement) // If not iOS, restore the target's original user-select if any
    // Ignore state since it doesn't apply for non iOS
    {
        if (target && modifiedElementMap.has(target)) {
            let targetOldUserSelect = modifiedElementMap.get(target);
            let property = 'userSelect' in target.style ? 'userSelect' : 'webkitUserSelect';
            if (target.style[property] === 'none') target.style[property] = targetOldUserSelect;
            if (target.getAttribute('style') === '') target.removeAttribute('style');
            modifiedElementMap.delete(target);
        }
    }
}

},{"../utils/domHelpers":"cYkFa","../utils/platform":"eBqgD","../utils/runAfterTransition":"k2HOw","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

