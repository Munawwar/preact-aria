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
})({"E8d3D":[function(require,module,exports,__globalThis) {
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
// This is a hacky DOM-based implementation of a FocusScope until this RFC lands in React:
// https://github.com/reactjs/rfcs/pull/109
/**
 * A FocusScope manages focus for its descendants. It supports containing focus inside
 * the scope, restoring focus to the previously focused element on unmount, and auto
 * focusing children on mount. It also acts as a container for a programmatic focus
 * management interface that can be used to move focus forward and back in response
 * to user events.
 */ parcelHelpers.export(exports, "FocusScope", ()=>FocusScope);
/**
 * Returns a FocusManager interface for the parent FocusScope.
 * A FocusManager can be used to programmatically move focus within
 * a FocusScope, e.g. in response to user events like keyboard navigation.
 */ parcelHelpers.export(exports, "useFocusManager", ()=>useFocusManager);
/** @private */ parcelHelpers.export(exports, "isElementInChildOfActiveScope", ()=>isElementInChildOfActiveScope);
/**
 * Create a [TreeWalker]{@link https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker}
 * that matches all focusable/tabbable elements.
 */ parcelHelpers.export(exports, "getFocusableTreeWalker", ()=>getFocusableTreeWalker);
/**
 * Creates a FocusManager object that can be used to move focus within an element.
 */ parcelHelpers.export(exports, "createFocusManager", ()=>createFocusManager);
parcelHelpers.export(exports, "focusScopeTree", ()=>focusScopeTree);
var _jsxRuntime = require("preact/jsx-runtime");
var _shadowTreeWalker = require("../utils/shadowdom/ShadowTreeWalker");
var _focusSafely = require("../interactions/focusSafely");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _domHelpers = require("../utils/domHelpers");
var _platform = require("../utils/platform");
var _isFocusable = require("../utils/isFocusable");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useLayoutEffect = require("../utils/useLayoutEffect");
const FocusContext = /*#__PURE__*/ (0, _reactDefault.default).createContext(null);
const RESTORE_FOCUS_EVENT = 'react-aria-focus-scope-restore';
let activeScope = null;
function FocusScope(props) {
    let { children, contain, restoreFocus, autoFocus } = props;
    let startRef = (0, _react.useRef)(null);
    let endRef = (0, _react.useRef)(null);
    let scopeRef = (0, _react.useRef)([]);
    let { parentNode } = (0, _react.useContext)(FocusContext) || {};
    // Create a tree node here so we can add children to it even before it is added to the tree.
    let node = (0, _react.useMemo)(()=>new TreeNode({
            scopeRef
        }), [
        scopeRef
    ]);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        // If a new scope mounts outside the active scope, (e.g. DialogContainer launched from a menu),
        // use the active scope as the parent instead of the parent from context. Layout effects run bottom
        // up, so if the parent is not yet added to the tree, don't do this. Only the outer-most FocusScope
        // that is being added should get the activeScope as its parent.
        let parent = parentNode || focusScopeTree.root;
        if (focusScopeTree.getTreeNode(parent.scopeRef) && activeScope && !isAncestorScope(activeScope, parent.scopeRef)) {
            let activeNode = focusScopeTree.getTreeNode(activeScope);
            if (activeNode) parent = activeNode;
        }
        // Add the node to the parent, and to the tree.
        parent.addChild(node);
        focusScopeTree.addNode(node);
    }, [
        node,
        parentNode
    ]);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        let node = focusScopeTree.getTreeNode(scopeRef);
        if (node) node.contain = !!contain;
    }, [
        contain
    ]);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        // Find all rendered nodes between the sentinels and add them to the scope.
        let node = startRef.current?.nextSibling;
        let nodes = [];
        let stopPropagation = (e)=>e.stopPropagation();
        while(node && node !== endRef.current){
            nodes.push(node);
            // Stop custom restore focus event from propagating to parent focus scopes.
            node.addEventListener(RESTORE_FOCUS_EVENT, stopPropagation);
            node = node.nextSibling;
        }
        scopeRef.current = nodes;
        return ()=>{
            for (let node of nodes)node.removeEventListener(RESTORE_FOCUS_EVENT, stopPropagation);
        };
    }, [
        children
    ]);
    useActiveScopeTracker(scopeRef, restoreFocus, contain);
    useFocusContainment(scopeRef, contain);
    useRestoreFocus(scopeRef, restoreFocus, contain);
    useAutoFocus(scopeRef, autoFocus);
    // This needs to be an effect so that activeScope is updated after the FocusScope tree is complete.
    // It cannot be a useLayoutEffect because the parent of this node hasn't been attached in the tree yet.
    (0, _react.useEffect)(()=>{
        const activeElement = (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(scopeRef.current ? scopeRef.current[0] : undefined));
        let scope = null;
        if (isElementInScope(activeElement, scopeRef.current)) {
            // We need to traverse the focusScope tree and find the bottom most scope that
            // contains the active element and set that as the activeScope.
            for (let node of focusScopeTree.traverse())if (node.scopeRef && isElementInScope(activeElement, node.scopeRef.current)) scope = node;
            if (scope === focusScopeTree.getTreeNode(scopeRef)) activeScope = scope.scopeRef;
        }
    }, [
        scopeRef
    ]);
    // This layout effect cleanup is so that the tree node is removed synchronously with react before the RAF
    // in useRestoreFocus cleanup runs.
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        return ()=>{
            // Scope may have been re-parented.
            let parentScope = focusScopeTree.getTreeNode(scopeRef)?.parent?.scopeRef ?? null;
            if ((scopeRef === activeScope || isAncestorScope(scopeRef, activeScope)) && (!parentScope || focusScopeTree.getTreeNode(parentScope))) activeScope = parentScope;
            focusScopeTree.removeTreeNode(scopeRef);
        };
    }, [
        scopeRef
    ]);
    // oxlint-disable-next-line react/react-compiler
    let focusManager = (0, _react.useMemo)(()=>createFocusManagerForScope(scopeRef), []);
    let value = (0, _react.useMemo)(()=>({
            focusManager,
            parentNode: node
        }), [
        node,
        focusManager
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)(FocusContext.Provider, {
        value: value,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                "data-focus-scope-start": true,
                hidden: true,
                ref: startRef
            }),
            children,
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                "data-focus-scope-end": true,
                hidden: true,
                ref: endRef
            })
        ]
    });
}
function useFocusManager() {
    return (0, _react.useContext)(FocusContext)?.focusManager;
}
function createFocusManagerForScope(scopeRef) {
    return {
        focusNext (opts = {}) {
            let scope = scopeRef.current;
            let { from, tabbable, wrap, accept } = opts;
            let node = from || (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(scope[0] ?? undefined));
            let sentinel = scope[0].previousElementSibling;
            let scopeRoot = getScopeRoot(scope);
            let walker = getFocusableTreeWalker(scopeRoot, {
                tabbable,
                accept
            }, scope);
            walker.currentNode = isElementInScope(node, scope) ? node : sentinel;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = sentinel;
                nextNode = walker.nextNode();
            }
            if (nextNode) focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = {}) {
            let scope = scopeRef.current;
            let { from, tabbable, wrap, accept } = opts;
            let node = from || (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(scope[0] ?? undefined));
            let sentinel = scope[scope.length - 1].nextElementSibling;
            let scopeRoot = getScopeRoot(scope);
            let walker = getFocusableTreeWalker(scopeRoot, {
                tabbable,
                accept
            }, scope);
            walker.currentNode = isElementInScope(node, scope) ? node : sentinel;
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = sentinel;
                previousNode = walker.previousNode();
            }
            if (previousNode) focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = {}) {
            let scope = scopeRef.current;
            let { tabbable, accept } = opts;
            let scopeRoot = getScopeRoot(scope);
            let walker = getFocusableTreeWalker(scopeRoot, {
                tabbable,
                accept
            }, scope);
            walker.currentNode = scope[0].previousElementSibling;
            let nextNode = walker.nextNode();
            if (nextNode) focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = {}) {
            let scope = scopeRef.current;
            let { tabbable, accept } = opts;
            let scopeRoot = getScopeRoot(scope);
            let walker = getFocusableTreeWalker(scopeRoot, {
                tabbable,
                accept
            }, scope);
            walker.currentNode = scope[scope.length - 1].nextElementSibling;
            let previousNode = walker.previousNode();
            if (previousNode) focusElement(previousNode, true);
            return previousNode;
        }
    };
}
function getScopeRoot(scope) {
    return scope[0].parentElement;
}
function shouldContainFocus(scopeRef) {
    let scope = focusScopeTree.getTreeNode(activeScope);
    while(scope && scope.scopeRef !== scopeRef){
        if (scope.contain) return false;
        scope = scope.parent;
    }
    return true;
}
function getRadiosInGroup(element) {
    if (!element.form) // Radio buttons outside a form - query the document
    return Array.from((0, _domHelpers.getOwnerDocument)(element).querySelectorAll(`input[type="radio"][name="${CSS.escape(element.name)}"]`)).filter((radio)=>!radio.form);
    // namedItem returns RadioNodeList (iterable) for 2+ elements, but a single Element for exactly 1.
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormControlsCollection/namedItem
    const radioList = element.form.elements.namedItem(element.name);
    let ownerWindow = (0, _domHelpers.getOwnerWindow)(element);
    if (radioList instanceof ownerWindow.RadioNodeList) return Array.from(radioList).filter((el)=>el instanceof ownerWindow.HTMLInputElement);
    if (radioList instanceof ownerWindow.HTMLInputElement) return [
        radioList
    ];
    return [];
}
function isTabbableRadio(element) {
    if (element.checked) return true;
    const radios = getRadiosInGroup(element);
    return radios.length > 0 && !radios.some((radio)=>radio.checked);
}
function useFocusContainment(scopeRef, contain) {
    let focusedNode = (0, _react.useRef)(undefined);
    let raf = (0, _react.useRef)(undefined);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        let scope = scopeRef.current;
        if (!contain) {
            // if contain was changed, then we should cancel any ongoing waits to pull focus back into containment
            if (raf.current) {
                cancelAnimationFrame(raf.current);
                raf.current = undefined;
            }
            return;
        }
        const ownerDocument = (0, _domHelpers.getOwnerDocument)(scope ? scope[0] : undefined);
        // Handle the Tab key to contain focus within the scope
        let onKeyDown = (e)=>{
            if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey || !shouldContainFocus(scopeRef) || e.isComposing) return;
            let focusedElement = (0, _domfunctions.getActiveElement)(ownerDocument);
            let scope = scopeRef.current;
            if (!scope || !isElementInScope(focusedElement, scope)) return;
            let scopeRoot = getScopeRoot(scope);
            let walker = getFocusableTreeWalker(scopeRoot, {
                tabbable: true
            }, scope);
            if (!focusedElement) return;
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!nextElement) {
                walker.currentNode = e.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
                nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            }
            e.preventDefault();
            if (nextElement) {
                focusElement(nextElement, true);
                if (nextElement instanceof (0, _domHelpers.getOwnerWindow)(nextElement).HTMLInputElement) nextElement.select();
            }
        };
        let onFocus = (e)=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if ((!activeScope || isAncestorScope(activeScope, scopeRef)) && isElementInScope((0, _domfunctions.getEventTarget)(e), scopeRef.current)) {
                activeScope = scopeRef;
                focusedNode.current = (0, _domfunctions.getEventTarget)(e);
            } else if (shouldContainFocus(scopeRef) && !isElementInChildScope((0, _domfunctions.getEventTarget)(e), scopeRef)) {
                // If a focus event occurs outside the active scope (e.g. user tabs from browser location bar),
                // restore focus to the previously focused node or the first tabbable element in the active scope.
                if (focusedNode.current) focusElement(focusedNode.current);
                else if (activeScope && activeScope.current) focusFirstInScope(activeScope.current);
            } else if (shouldContainFocus(scopeRef)) focusedNode.current = (0, _domfunctions.getEventTarget)(e);
        };
        let onBlur = (e)=>{
            // Firefox doesn't shift focus back to the Dialog properly without this
            if (raf.current) cancelAnimationFrame(raf.current);
            raf.current = requestAnimationFrame(()=>{
                // Patches infinite focus coersion loop for Android Talkback where the user isn't able to move the virtual cursor
                // if within a containing focus scope. Bug filed against Chrome: https://issuetracker.google.com/issues/384844019.
                // Note that this means focus can leave focus containing modals due to this, but it is isolated to Chrome Talkback.
                let modality = (0, _useFocusVisible.getInteractionModality)();
                let shouldSkipFocusRestore = (modality === 'virtual' || modality === null) && (0, _platform.isAndroid)() && (0, _platform.isChrome)();
                // Use document.activeElement instead of e.relatedTarget so we can tell if user clicked into iframe
                let activeElement = (0, _domfunctions.getActiveElement)(ownerDocument);
                if (!shouldSkipFocusRestore && activeElement && shouldContainFocus(scopeRef) && !isElementInChildScope(activeElement, scopeRef)) {
                    activeScope = scopeRef;
                    let target = (0, _domfunctions.getEventTarget)(e);
                    if (target && target.isConnected) {
                        focusedNode.current = target;
                        focusElement(focusedNode.current);
                    } else if (activeScope.current) focusFirstInScope(activeScope.current);
                }
            });
        };
        ownerDocument.addEventListener('keydown', onKeyDown, false);
        ownerDocument.addEventListener('focusin', onFocus, false);
        scope?.forEach((element)=>element.addEventListener('focusin', onFocus, false));
        scope?.forEach((element)=>element.addEventListener('focusout', onBlur, false));
        return ()=>{
            ownerDocument.removeEventListener('keydown', onKeyDown, false);
            ownerDocument.removeEventListener('focusin', onFocus, false);
            scope?.forEach((element)=>element.removeEventListener('focusin', onFocus, false));
            scope?.forEach((element)=>element.removeEventListener('focusout', onBlur, false));
        };
    }, [
        scopeRef,
        contain
    ]);
    // This is a useLayoutEffect so it is guaranteed to run before our async synthetic blur
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        return ()=>{
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, [
        raf
    ]);
}
function isElementInAnyScope(element) {
    return isElementInChildScope(element);
}
function isElementInScope(element, scope) {
    if (!element) return false;
    if (!scope) return false;
    return scope.some((node)=>(0, _domfunctions.nodeContains)(node, element));
}
function isElementInChildScope(element, scope = null) {
    // If the element is within a top layer element (e.g. toasts), always allow moving focus there.
    if (element instanceof Element && element.closest('[data-react-aria-top-layer]')) return true;
    // node.contains in isElementInScope covers child scopes that are also DOM children,
    // but does not cover child scopes in portals.
    for (let { scopeRef: s } of focusScopeTree.traverse(focusScopeTree.getTreeNode(scope))){
        if (s && isElementInScope(element, s.current)) return true;
    }
    return false;
}
function isElementInChildOfActiveScope(element) {
    return isElementInChildScope(element, activeScope);
}
function isAncestorScope(ancestor, scope) {
    let parent = focusScopeTree.getTreeNode(scope)?.parent;
    while(parent){
        if (parent.scopeRef === ancestor) return true;
        parent = parent.parent;
    }
    return false;
}
function focusElement(element, scroll = false) {
    if (element != null && !scroll) try {
        (0, _focusSafely.focusSafely)(element);
    } catch  {
    // ignore
    }
    else if (element != null) try {
        element.focus();
    } catch  {
    // ignore
    }
}
function getFirstInScope(scope, tabbable = true) {
    let sentinel = scope[0].previousElementSibling;
    let scopeRoot = getScopeRoot(scope);
    let walker = getFocusableTreeWalker(scopeRoot, {
        tabbable
    }, scope);
    walker.currentNode = sentinel;
    let nextNode = walker.nextNode();
    // If the scope does not contain a tabbable element, use the first focusable element.
    if (tabbable && !nextNode) {
        scopeRoot = getScopeRoot(scope);
        walker = getFocusableTreeWalker(scopeRoot, {
            tabbable: false
        }, scope);
        walker.currentNode = sentinel;
        nextNode = walker.nextNode();
    }
    // TreeWalker.nextNode() returns null when the scope contains no focusable element.
    return nextNode;
}
function focusFirstInScope(scope, tabbable = true) {
    focusElement(getFirstInScope(scope, tabbable));
}
function useAutoFocus(scopeRef, autoFocus) {
    const autoFocusRef = (0, _reactDefault.default).useRef(autoFocus);
    (0, _react.useEffect)(()=>{
        if (autoFocusRef.current) {
            activeScope = scopeRef;
            const ownerDocument = (0, _domHelpers.getOwnerDocument)(scopeRef.current ? scopeRef.current[0] : undefined);
            if (!isElementInScope((0, _domfunctions.getActiveElement)(ownerDocument), activeScope.current) && scopeRef.current) focusFirstInScope(scopeRef.current);
        }
        autoFocusRef.current = false;
    }, [
        scopeRef
    ]);
}
function useActiveScopeTracker(scopeRef, restore, contain) {
    // tracks the active scope, in case restore and contain are both false.
    // if either are true, this is tracked in useRestoreFocus or useFocusContainment.
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (restore || contain) return;
        let scope = scopeRef.current;
        const ownerDocument = (0, _domHelpers.getOwnerDocument)(scope ? scope[0] : undefined);
        let onFocus = (e)=>{
            let target = (0, _domfunctions.getEventTarget)(e);
            if (isElementInScope(target, scopeRef.current)) activeScope = scopeRef;
            else if (!isElementInAnyScope(target)) activeScope = null;
        };
        ownerDocument.addEventListener('focusin', onFocus, false);
        scope?.forEach((element)=>element.addEventListener('focusin', onFocus, false));
        return ()=>{
            ownerDocument.removeEventListener('focusin', onFocus, false);
            scope?.forEach((element)=>element.removeEventListener('focusin', onFocus, false));
        };
    }, [
        scopeRef,
        restore,
        contain
    ]);
}
function shouldRestoreFocus(scopeRef) {
    let scope = focusScopeTree.getTreeNode(activeScope);
    while(scope && scope.scopeRef !== scopeRef){
        if (scope.nodeToRestore) return false;
        scope = scope.parent;
    }
    return scope?.scopeRef === scopeRef;
}
function useRestoreFocus(scopeRef, restoreFocus, contain) {
    // create a ref during render instead of useLayoutEffect so the active element is saved before a child with autoFocus=true mounts.
    const nodeToRestoreRef = (0, _react.useRef)(typeof document !== 'undefined' ? (0, _domfunctions.getActiveElement)(// oxlint-disable-next-line react/react-compiler
    (0, _domHelpers.getOwnerDocument)(scopeRef.current ? scopeRef.current[0] : undefined)) : null);
    // restoring scopes should all track if they are active regardless of contain, but contain already tracks it plus logic to contain the focus
    // restoring-non-containing scopes should only care if they become active so they can perform the restore
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        let scope = scopeRef.current;
        const ownerDocument = (0, _domHelpers.getOwnerDocument)(scope ? scope[0] : undefined);
        if (!restoreFocus || contain) return;
        let onFocus = ()=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if ((!activeScope || isAncestorScope(activeScope, scopeRef)) && isElementInScope((0, _domfunctions.getActiveElement)(ownerDocument), scopeRef.current)) activeScope = scopeRef;
        };
        ownerDocument.addEventListener('focusin', onFocus, false);
        scope?.forEach((element)=>element.addEventListener('focusin', onFocus, false));
        return ()=>{
            ownerDocument.removeEventListener('focusin', onFocus, false);
            scope?.forEach((element)=>element.removeEventListener('focusin', onFocus, false));
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        scopeRef,
        contain
    ]);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        const ownerDocument = (0, _domHelpers.getOwnerDocument)(scopeRef.current ? scopeRef.current[0] : undefined);
        if (!restoreFocus) return;
        // Handle the Tab key so that tabbing out of the scope goes to the next element
        // after the node that had focus when the scope mounted. This is important when
        // using portals for overlays, so that focus goes to the expected element when
        // tabbing out of the overlay.
        let onKeyDown = (e)=>{
            if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey || !shouldContainFocus(scopeRef) || e.isComposing) return;
            let focusedElement = ownerDocument.activeElement;
            if (!isElementInChildScope(focusedElement, scopeRef) || !shouldRestoreFocus(scopeRef)) return;
            let treeNode = focusScopeTree.getTreeNode(scopeRef);
            if (!treeNode) return;
            let nodeToRestore = treeNode.nodeToRestore;
            // Create a DOM tree walker that matches all tabbable elements
            let walker = getFocusableTreeWalker(ownerDocument.body, {
                tabbable: true
            });
            // Find the next tabbable element after the currently focused element
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!nodeToRestore || !nodeToRestore.isConnected || nodeToRestore === ownerDocument.body) {
                nodeToRestore = undefined;
                treeNode.nodeToRestore = undefined;
            }
            // If there is no next element, or it is outside the current scope, move focus to the
            // next element after the node to restore to instead.
            if ((!nextElement || !isElementInChildScope(nextElement, scopeRef)) && nodeToRestore) {
                walker.currentNode = nodeToRestore;
                // Skip over elements within the scope, in case the scope immediately follows the node to restore.
                do nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
                while (isElementInChildScope(nextElement, scopeRef));
                e.preventDefault();
                e.stopPropagation();
                if (nextElement) focusElement(nextElement, true);
                else // If there is no next element and the nodeToRestore isn't within a FocusScope (i.e. we are leaving the top level focus scope)
                // then move focus to the body.
                // Otherwise restore focus to the nodeToRestore (e.g menu within a popover -> tabbing to close the menu should move focus to menu trigger)
                if (!isElementInAnyScope(nodeToRestore)) focusedElement.blur();
                else focusElement(nodeToRestore, true);
            }
        };
        if (!contain) ownerDocument.addEventListener('keydown', onKeyDown, true);
        return ()=>{
            if (!contain) ownerDocument.removeEventListener('keydown', onKeyDown, true);
        };
    }, [
        scopeRef,
        restoreFocus,
        contain
    ]);
    // useLayoutEffect instead of useEffect so the active element is saved synchronously instead of asynchronously.
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        const ownerDocument = (0, _domHelpers.getOwnerDocument)(scopeRef.current ? scopeRef.current[0] : undefined);
        if (!restoreFocus) return;
        let treeNode = focusScopeTree.getTreeNode(scopeRef);
        if (!treeNode) return;
        treeNode.nodeToRestore = nodeToRestoreRef.current ?? undefined;
        return ()=>{
            let treeNode = focusScopeTree.getTreeNode(scopeRef);
            if (!treeNode) return;
            let nodeToRestore = treeNode.nodeToRestore;
            // if we already lost focus to the body and this was the active scope, then we should attempt to restore
            let activeElement = (0, _domfunctions.getActiveElement)(ownerDocument);
            if (restoreFocus && nodeToRestore && (activeElement && isElementInChildScope(activeElement, scopeRef) || activeElement === ownerDocument.body && shouldRestoreFocus(scopeRef))) {
                // freeze the focusScopeTree so it persists after the raf, otherwise during unmount nodes are removed from it
                let clonedTree = focusScopeTree.clone();
                requestAnimationFrame(()=>{
                    // Only restore focus if we've lost focus to the body, the alternative is that focus has been purposefully moved elsewhere
                    if (ownerDocument.activeElement === ownerDocument.body) {
                        // look up the tree starting with our scope to find a nodeToRestore still in the DOM
                        let treeNode = clonedTree.getTreeNode(scopeRef);
                        while(treeNode){
                            if (treeNode.nodeToRestore && treeNode.nodeToRestore.isConnected) {
                                restoreFocusToElement(treeNode.nodeToRestore);
                                return;
                            }
                            treeNode = treeNode.parent;
                        }
                        // If no nodeToRestore was found, focus the first element in the nearest
                        // ancestor scope that is still in the tree.
                        treeNode = clonedTree.getTreeNode(scopeRef);
                        while(treeNode){
                            if (treeNode.scopeRef && // TODO: this is probably a false positive based on naming, it's not a real ref, rename.
                            // oxlint-disable-next-line react-hooks/exhaustive-deps
                            treeNode.scopeRef.current && focusScopeTree.getTreeNode(treeNode.scopeRef)) {
                                // oxlint-disable-next-line react-hooks/exhaustive-deps
                                let node = getFirstInScope(treeNode.scopeRef.current, true);
                                // The scope may have nothing focusable in it, e.g. if its focusable
                                // content was removed or hidden. Keep walking up in that case.
                                if (node) {
                                    restoreFocusToElement(node);
                                    return;
                                }
                            }
                            treeNode = treeNode.parent;
                        }
                    }
                });
            }
        };
    }, [
        scopeRef,
        restoreFocus
    ]);
}
function restoreFocusToElement(node) {
    // Dispatch a custom event that parent elements can intercept to customize focus restoration.
    // For example, virtualized collection components reuse DOM elements, so the original element
    // might still exist in the DOM but representing a different item.
    if (node.dispatchEvent(new CustomEvent(RESTORE_FOCUS_EVENT, {
        bubbles: true,
        cancelable: true
    }))) focusElement(node);
}
function getFocusableTreeWalker(root, opts, scope) {
    let filter = opts?.tabbable ? (0, _isFocusable.isTabbable) : (0, _isFocusable.isFocusable);
    // Ensure that root is an Element or fall back appropriately
    let rootElement = root?.nodeType === Node.ELEMENT_NODE ? root : null;
    // Determine the document to use
    let doc = (0, _domHelpers.getOwnerDocument)(rootElement);
    // Create a TreeWalker, ensuring the root is an Element or Document
    let walker = (0, _shadowTreeWalker.createShadowTreeWalker)(doc, root || doc, NodeFilter.SHOW_ELEMENT, {
        acceptNode (node) {
            // Skip nodes inside the starting node.
            if ((0, _domfunctions.nodeContains)(opts?.from, node)) return NodeFilter.FILTER_REJECT;
            if (opts?.tabbable && node.tagName === 'INPUT' && node.getAttribute('type') === 'radio') {
                // If the radio is in a form, we can get all the other radios by name
                if (!isTabbableRadio(node)) return NodeFilter.FILTER_REJECT;
                // If the radio is in the same group as the current node and none are selected, we can skip it
                if (walker.currentNode.tagName === 'INPUT' && walker.currentNode.type === 'radio' && walker.currentNode.name === node.name) return NodeFilter.FILTER_REJECT;
            }
            if (filter(node) && (!scope || isElementInScope(node, scope)) && (!opts?.accept || opts.accept(node))) return NodeFilter.FILTER_ACCEPT;
            return NodeFilter.FILTER_SKIP;
        }
    });
    if (opts?.from) walker.currentNode = opts.from;
    return walker;
}
function createFocusManager(ref, defaultOptions = {}) {
    return {
        focusNext (opts = {}) {
            let root = ref.current;
            if (!root) return null;
            let { from, tabbable = defaultOptions.tabbable, wrap = defaultOptions.wrap, accept = defaultOptions.accept } = opts;
            let node = from || (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(root));
            let walker = getFocusableTreeWalker(root, {
                tabbable,
                accept
            });
            if ((0, _domfunctions.nodeContains)(root, node)) walker.currentNode = node;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = root;
                nextNode = walker.nextNode();
            }
            if (nextNode) focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return null;
            let { from, tabbable = defaultOptions.tabbable, wrap = defaultOptions.wrap, accept = defaultOptions.accept } = opts;
            let node = from || (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(root));
            let walker = getFocusableTreeWalker(root, {
                tabbable,
                accept
            });
            if ((0, _domfunctions.nodeContains)(root, node)) walker.currentNode = node;
            else {
                let next = last(walker);
                if (next) focusElement(next, true);
                return next ?? null;
            }
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = root;
                let lastNode = last(walker);
                if (!lastNode) // couldn't wrap
                return null;
                previousNode = lastNode;
            }
            if (previousNode) focusElement(previousNode, true);
            return previousNode ?? null;
        },
        focusFirst (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return null;
            let { tabbable = defaultOptions.tabbable, accept = defaultOptions.accept } = opts;
            let walker = getFocusableTreeWalker(root, {
                tabbable,
                accept
            });
            let nextNode = walker.nextNode();
            if (nextNode) focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return null;
            let { tabbable = defaultOptions.tabbable, accept = defaultOptions.accept } = opts;
            let walker = getFocusableTreeWalker(root, {
                tabbable,
                accept
            });
            let next = last(walker);
            if (next) focusElement(next, true);
            return next ?? null;
        }
    };
}
function last(walker) {
    let next = undefined;
    let last;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last);
    return next;
}
class Tree {
    root;
    fastMap = new Map();
    constructor(){
        this.root = new TreeNode({
            scopeRef: null
        });
        this.fastMap.set(null, this.root);
    }
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(data) {
        return this.fastMap.get(data);
    }
    addTreeNode(scopeRef, parent, nodeToRestore) {
        let parentNode = this.fastMap.get(parent ?? null);
        if (!parentNode) return;
        let node = new TreeNode({
            scopeRef
        });
        parentNode.addChild(node);
        node.parent = parentNode;
        this.fastMap.set(scopeRef, node);
        if (nodeToRestore) node.nodeToRestore = nodeToRestore;
    }
    addNode(node) {
        this.fastMap.set(node.scopeRef, node);
    }
    removeTreeNode(scopeRef) {
        // never remove the root
        if (scopeRef === null) return;
        let node = this.fastMap.get(scopeRef);
        if (!node) return;
        let parentNode = node.parent;
        // when we remove a scope, check if any sibling scopes are trying to restore focus to something inside the scope we're removing
        // if we are, then replace the siblings restore with the restore from the scope we're removing
        for (let current of this.traverse())if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
        let children = node.children;
        if (parentNode) {
            parentNode.removeChild(node);
            if (children.size > 0) children.forEach((child)=>parentNode && parentNode.addChild(child));
        }
        this.fastMap.delete(node.scopeRef);
    }
    // Pre Order Depth First
    *traverse(node = this.root) {
        if (node.scopeRef != null) yield node;
        if (node.children.size > 0) for (let child of node.children)yield* this.traverse(child);
    }
    clone() {
        let newTree = new Tree();
        for (let node of this.traverse())newTree.addTreeNode(node.scopeRef, node.parent?.scopeRef ?? null, node.nodeToRestore);
        return newTree;
    }
}
class TreeNode {
    scopeRef;
    nodeToRestore;
    parent;
    children = new Set();
    contain = false;
    constructor(props){
        this.scopeRef = props.scopeRef;
    }
    addChild(node) {
        this.children.add(node);
        node.parent = this;
    }
    removeChild(node) {
        this.children.delete(node);
        node.parent = undefined;
    }
}
let focusScopeTree = new Tree();

},{"preact/jsx-runtime":"b2Fbn","../utils/shadowdom/ShadowTreeWalker":"grvf5","../interactions/focusSafely":"2xT6S","../utils/shadowdom/DOMFunctions":"8kfpz","../interactions/useFocusVisible":"aBfUW","../utils/domHelpers":"cYkFa","../utils/platform":"eBqgD","../utils/isFocusable":"dLPRV","react":"gOP0N","../utils/useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

