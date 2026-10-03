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
})({"dHgny":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "AutocompleteContext", ()=>AutocompleteContext);
parcelHelpers.export(exports, "AutocompleteStateContext", ()=>AutocompleteStateContext);
parcelHelpers.export(exports, "SelectableCollectionContext", ()=>SelectableCollectionContext);
parcelHelpers.export(exports, "FieldInputContext", ()=>FieldInputContext);
/**
 * An autocomplete allows users to search or filter a list of suggestions.
 */ parcelHelpers.export(exports, "Autocomplete", ()=>Autocomplete);
var _jsxRuntime = require("preact/jsx-runtime");
var _useAutocomplete = require("react-aria/useAutocomplete");
var _useAutocompleteState = require("react-stately/private/autocomplete/useAutocompleteState");
var _utils = require("./utils");
var _mergeProps = require("react-aria/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const AutocompleteContext = /*#__PURE__*/ (0, _react.createContext)(null);
const AutocompleteStateContext = /*#__PURE__*/ (0, _react.createContext)(null);
const SelectableCollectionContext = /*#__PURE__*/ (0, _react.createContext)(null);
const FieldInputContext = /*#__PURE__*/ (0, _react.createContext)(null);
function Autocomplete(props) {
    let ctx = (0, _utils.useSlottedContext)(AutocompleteContext, props.slot);
    props = (0, _mergeProps.mergeProps)(ctx, props);
    let { filter, disableAutoFocusFirst } = props;
    let state = (0, _useAutocompleteState.useAutocompleteState)(props);
    let inputRef = (0, _react.useRef)(null);
    let collectionRef = (0, _react.useRef)(null);
    let { inputProps, collectionProps, collectionRef: mergedCollectionRef, filter: filterFn } = (0, _useAutocomplete.useAutocomplete)({
        ...(0, _utils.removeDataAttributes)(props),
        filter,
        disableAutoFocusFirst,
        inputRef,
        collectionRef
    }, state);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
        values: [
            [
                AutocompleteStateContext,
                state
            ],
            [
                FieldInputContext,
                {
                    ...inputProps,
                    ref: inputRef
                }
            ],
            [
                SelectableCollectionContext,
                {
                    ...collectionProps,
                    filter: filterFn,
                    ref: mergedCollectionRef
                }
            ]
        ],
        children: props.children
    });
}

},{"preact/jsx-runtime":"b2Fbn","react-aria/useAutocomplete":"erCzm","react-stately/private/autocomplete/useAutocompleteState":"hcXbj","./utils":"jtWJJ","react-aria/mergeProps":"jycxS","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"erCzm":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for an autocomplete component. An
 * autocomplete combines a text input with a collection, allowing users to filter the collection's
 * contents match a query.
 *
 * @param props - Props for the autocomplete.
 * @param state - State for the autocomplete, as returned by `useAutocompleteState`.
 */ parcelHelpers.export(exports, "useAutocomplete", ()=>useAutocomplete);
var _constants = require("../utils/constants");
var _virtualFocus = require("../focus/virtualFocus");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _domHelpers = require("../utils/domHelpers");
var _indexJs = require("../../intl/autocomplete/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _platform = require("../utils/platform");
var _keyboard = require("../utils/keyboard");
var _mergeProps = require("../utils/mergeProps");
var _mergeRefs = require("../utils/mergeRefs");
var _react = require("react");
var _useEffectEvent = require("../utils/useEffectEvent");
var _useEvent = require("../utils/useEvent");
var _useId = require("../utils/useId");
var _useLabels = require("../utils/useLabels");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
var _useObjectRef = require("../utils/useObjectRef");
function useAutocomplete(props, state) {
    let { inputRef, collectionRef, filter, disableAutoFocusFirst = false, disableVirtualFocus = false } = props;
    let collectionId = (0, _useId.useId)();
    let timeout = (0, _react.useRef)(undefined);
    let delayNextActiveDescendant = (0, _react.useRef)(false);
    let queuedActiveDescendant = (0, _react.useRef)(null);
    // For mobile screen readers, we don't want virtual focus, instead opting to disable FocusScope's restoreFocus and manually
    // moving focus back to the subtriggers
    let isMobileScreenReader = (0, _useFocusVisible.getInteractionModality)() === 'virtual' && ((0, _platform.isIOS)() || (0, _platform.isAndroid)());
    let [shouldUseVirtualFocus, setShouldUseVirtualFocus] = (0, _react.useState)(!isMobileScreenReader && !disableVirtualFocus);
    // Tracks if a collection has been connected to the autocomplete. If false, we don't want to add various attributes to the autocomplete input
    // since it isn't attached to a filterable collection (e.g. Tabs)
    let [hasCollection, setHasCollection] = (0, _react.useState)(false);
    let [autoFocusOnMount, setAutoFocusOnMount] = (0, _react.useState)(false);
    (0, _react.useEffect)(()=>{
        return ()=>clearTimeout(timeout.current);
    }, []);
    let updateActiveDescendantEvent = (0, _useEffectEvent.useEffectEvent)((e)=>{
        // Ensure input is focused if the user clicks on the collection directly.
        // don't trigger on touch so that mobile keyboard doesnt appear when tapping on options
        if (!e.isTrusted && shouldUseVirtualFocus && inputRef.current && (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(inputRef.current)) !== inputRef.current && (0, _useFocusVisible.getPointerType)() !== 'touch') inputRef.current.focus();
        let target = (0, _domfunctions.getEventTarget)(e);
        if (e.isTrusted || !target || queuedActiveDescendant.current === target.id) return;
        clearTimeout(timeout.current);
        if (target !== collectionRef.current) {
            if (delayNextActiveDescendant.current) {
                queuedActiveDescendant.current = target.id;
                timeout.current = setTimeout(()=>{
                    state.setFocusedNodeId(target.id);
                }, 500);
            } else {
                queuedActiveDescendant.current = target.id;
                state.setFocusedNodeId(target.id);
            }
        } else if (queuedActiveDescendant.current && !document.getElementById(queuedActiveDescendant.current)) {
            // If we recieve a focus event refocusing the collection, either we have newly refocused the input and are waiting for the
            // wrapped collection to refocus the previously focused node if any OR
            // we are in a state where we've filtered to such a point that there aren't any matching items in the collection to focus.
            // In this case we want to clear tracked item if any and clear active descendant
            queuedActiveDescendant.current = null;
            state.setFocusedNodeId(null);
        }
        delayNextActiveDescendant.current = false;
    });
    let [collectionNode, setCollectionNode] = (0, _react.useState)(null);
    let callbackRef = (0, _react.useCallback)((node)=>{
        setCollectionNode(node);
        if (node != null) {
            // If useSelectableCollection isn't passed shouldUseVirtualFocus even when useAutocomplete provides it
            // that means the collection doesn't support it (e.g. Table). If that is the case, we need to disable it here regardless
            // of what the user's provided so that the input doesn't recieve the onKeyDown and autocomplete props.
            if (node.getAttribute('tabindex') != null) setShouldUseVirtualFocus(false);
            setHasCollection(true);
        } else setHasCollection(false);
    }, []);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (collectionNode != null) // When typing forward, we want to delay the setting of active descendant to not interrupt the native screen reader announcement
        // of the letter you just typed. If we recieve another focus event then we clear the queued update
        collectionNode.addEventListener('focusin', updateActiveDescendantEvent);
        return ()=>{
            collectionNode?.removeEventListener('focusin', updateActiveDescendantEvent);
        };
    }, [
        collectionNode
    ]);
    // Make sure to memo so that React doesn't keep registering a new event listeners on every rerender of the wrapped collection
    let mergedCollectionRef = (0, _useObjectRef.useObjectRef)(// oxlint-disable-next-line react/react-compiler
    (0, _react.useMemo)(()=>(0, _mergeRefs.mergeRefs)(collectionRef, callbackRef), [
        collectionRef,
        callbackRef
    ]));
    let focusFirstItem = (0, _react.useCallback)(()=>{
        if (!collectionRef.current) {
            setAutoFocusOnMount(true);
            return;
        }
        delayNextActiveDescendant.current = true;
        collectionRef.current?.dispatchEvent(new CustomEvent((0, _constants.FOCUS_EVENT), {
            cancelable: true,
            bubbles: true,
            detail: {
                focusStrategy: 'first'
            }
        }));
    }, [
        collectionRef
    ]);
    let clearVirtualFocus = (0, _react.useCallback)((clearFocusKey)=>{
        setAutoFocusOnMount(false);
        (0, _virtualFocus.moveVirtualFocus)((0, _domfunctions.getActiveElement)());
        queuedActiveDescendant.current = null;
        state.setFocusedNodeId(null);
        let clearFocusEvent = new CustomEvent((0, _constants.CLEAR_FOCUS_EVENT), {
            cancelable: true,
            bubbles: true,
            detail: {
                clearFocusKey
            }
        });
        clearTimeout(timeout.current);
        delayNextActiveDescendant.current = false;
        collectionRef.current?.dispatchEvent(clearFocusEvent);
    }, [
        collectionRef,
        state
    ]);
    let lastInputType = (0, _react.useRef)('');
    (0, _useEvent.useEvent)(inputRef, 'beforeinput', (e)=>{
        let { inputType } = e;
        lastInputType.current = inputType;
    });
    let onChange = (value)=>{
        // Tell wrapped collection to focus the first element in the list when typing forward and to clear focused key when modifying the text via
        // copy paste/backspacing/undo/redo for screen reader announcements
        if ((lastInputType.current === 'insertText' || // IME composition (e.g. CJK input) reports 'insertCompositionText'/'insertFromComposition'
        // instead of 'insertText'. Treat these as forward typing so the first item gets virtual focus.
        lastInputType.current === 'insertCompositionText' || lastInputType.current === 'insertFromComposition') && !disableAutoFocusFirst) focusFirstItem();
        else if (lastInputType.current && (lastInputType.current.includes('insert') || lastInputType.current.includes('delete') || lastInputType.current.includes('history'))) {
            clearVirtualFocus(true);
            // If onChange was triggered before the timeout actually updated the activedescendant, we need to fire
            // our own dispatchVirtualFocus so focusVisible gets reapplied on the input
            if ((0, _virtualFocus.getVirtuallyFocusedElement)(document) === inputRef.current) (0, _virtualFocus.dispatchVirtualFocus)(inputRef.current, null);
        }
        state.setInputValue(value);
    };
    let keyDownTarget = (0, _react.useRef)(null);
    // For textfield specific keydown operations
    let onKeyDown = (e)=>{
        keyDownTarget.current = (0, _domfunctions.getEventTarget)(e);
        if (e.nativeEvent.isComposing) return;
        let focusedNodeId = queuedActiveDescendant.current;
        if (focusedNodeId !== null && (0, _domHelpers.getOwnerDocument)(inputRef.current).getElementById(focusedNodeId) == null) {
            // if the focused id doesn't exist in document, then we need to clear the tracked focused node, otherwise
            // we will be attempting to fire key events on a non-existing node instead of trying to focus the newly swapped wrapped collection.
            // This can happen if you are swapping out the Autocomplete wrapped collection component like in the docs search.
            queuedActiveDescendant.current = null;
            focusedNodeId = null;
        }
        switch(e.key){
            case 'a':
                if ((0, _keyboard.isCtrlKeyPressed)(e)) return;
                break;
            case 'Escape':
                // Early return for Escape here so it doesn't leak the Escape event from the simulated collection event below and
                // close the dialog prematurely. Ideally that should be up to the discretion of the input element hence the check
                // for isPropagationStopped
                if (e.isDefaultPrevented()) return;
                break;
            case ' ':
                // Space shouldn't trigger onAction so early return.
                return;
            case 'Tab':
                // Don't propogate Tab down to the collection, otherwise we will try to focus the collection via useSelectableCollection's Tab handler (aka shift tab logic)
                // We want FocusScope to handle Tab if one exists (aka sub dialog), so special casepropogate
                if ('continuePropagation' in e) e.continuePropagation();
                return;
            case 'Home':
            case 'End':
            case 'PageDown':
            case 'PageUp':
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowRight':
            case 'ArrowLeft':
                {
                    if ((e.key === 'Home' || e.key === 'End') && focusedNodeId == null && e.shiftKey) return;
                    // If there is text within the input field, we'll want continue propagating events down
                    // to the wrapped collection if there is a focused node so that a user can continue moving the
                    // virtual focus. However, if the user doesn't have a focus in the collection, just move the text
                    // cursor instead. They can move focus down into the collection via down/up arrow if need be
                    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                        if (focusedNodeId == null) {
                            if (!e.isPropagationStopped()) e.stopPropagation();
                            return;
                        }
                        break;
                    }
                    // Prevent these keys from moving the text cursor in the input
                    e.preventDefault();
                    // Move virtual focus into the wrapped collection
                    let focusCollection = new CustomEvent((0, _constants.FOCUS_EVENT), {
                        cancelable: true,
                        bubbles: true
                    });
                    collectionRef.current?.dispatchEvent(focusCollection);
                    break;
                }
        }
        // Emulate the keyboard events that happen in the input field in the wrapped collection. This is for triggering things like onAction via Enter
        // or moving focus from one item to another. Stop propagation on the input event if it isn't already stopped so it doesn't leak out. For events
        // like ESC, the dispatched event below will bubble out of the collection and be stopped if handled by useSelectableCollection, otherwise will bubble
        // as expected
        if (!e.isPropagationStopped()) e.stopPropagation();
        let shouldPerformDefaultAction = true;
        if (collectionRef.current !== null) {
            if (focusedNodeId == null) shouldPerformDefaultAction = collectionRef.current?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)) || false;
            else {
                let item = document.getElementById(focusedNodeId);
                if (item) shouldPerformDefaultAction = item?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)) || false;
            }
        }
        if (shouldPerformDefaultAction) switch(e.key){
            case 'ArrowLeft':
            case 'ArrowRight':
                // Clear the activedescendant so NVDA announcements aren't interrupted but retain the focused key in the collection so the
                // user's keyboard navigation restarts from where they left off
                clearVirtualFocus();
                break;
            case 'Enter':
                // Trigger click action on item when Enter key was pressed.
                if (focusedNodeId != null) {
                    let item = document.getElementById(focusedNodeId);
                    item?.dispatchEvent(new PointerEvent('click', e.nativeEvent));
                }
                break;
        }
        else // TODO: check if we can do this, want to stop textArea from using its default Enter behavior so items are properly triggered
        e.preventDefault();
    };
    let onKeyUpCapture = (0, _useEffectEvent.useEffectEvent)((e)=>{
        // Dispatch simulated key up events for things like triggering links in listbox
        // Make sure to stop the propagation of the input keyup event so that the simulated keyup/down pair
        // is detected by usePress instead of the original keyup originating from the input
        if ((0, _domfunctions.getEventTarget)(e) === keyDownTarget.current) {
            e.stopImmediatePropagation();
            let focusedNodeId = queuedActiveDescendant.current;
            if (focusedNodeId == null) collectionRef.current?.dispatchEvent(new KeyboardEvent(e.type, e));
            else {
                let item = document.getElementById(focusedNodeId);
                item?.dispatchEvent(new KeyboardEvent(e.type, e));
            }
        }
    });
    (0, _react.useEffect)(()=>{
        document.addEventListener('keyup', onKeyUpCapture, true);
        return ()=>{
            document.removeEventListener('keyup', onKeyUpCapture, true);
        };
    }, []);
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/autocomplete');
    let collectionProps = (0, _useLabels.useLabels)({
        id: collectionId,
        'aria-label': stringFormatter.format('collectionLabel')
    });
    let filterFn = (0, _react.useCallback)((nodeTextValue, node)=>{
        if (filter) return filter(nodeTextValue, state.inputValue, node);
        return true;
    }, [
        state.inputValue,
        filter
    ]);
    // Be sure to clear/restore the virtual + collection focus when blurring/refocusing the field so we only show the
    // focus ring on the virtually focused collection when are actually interacting with the Autocomplete
    let onBlur = (e)=>{
        if (!e.isTrusted) return;
        let lastFocusedNode = queuedActiveDescendant.current ? document.getElementById(queuedActiveDescendant.current) : null;
        if (lastFocusedNode) (0, _virtualFocus.dispatchVirtualBlur)(lastFocusedNode, e.relatedTarget);
    };
    let onFocus = (e)=>{
        if (!e.isTrusted) return;
        let curFocusedNode = queuedActiveDescendant.current ? document.getElementById(queuedActiveDescendant.current) : null;
        if (curFocusedNode) {
            let target = (0, _domfunctions.getEventTarget)(e);
            queueMicrotask(()=>{
                // instead of focusing the last focused node, just focus the collection instead and have the collection handle what item to focus via useSelectableCollection/Item
                (0, _virtualFocus.dispatchVirtualBlur)(target, collectionRef.current);
                (0, _virtualFocus.dispatchVirtualFocus)(collectionRef.current, target);
            });
        }
    };
    // Clicking back into the input can happen after focus moved elsewhere in the dialog, while
    // virtual focus is still on an option. Clear virtual focus on pointer down so mouse
    // interactions restore the input state before the click's focus handling runs.
    // Touch is excluded because touch interactions should not move focus back to the input.
    let onPointerDown = (e)=>{
        if (e.button !== 0 || e.pointerType === 'touch' || queuedActiveDescendant.current == null || inputRef.current == null) return;
        if ((0, _domfunctions.getEventTarget)(e) === inputRef.current) clearVirtualFocus();
    };
    // Only apply the autocomplete specific behaviors if the collection component wrapped by it is actually
    // being filtered/allows filtering by the Autocomplete.
    let inputProps = {
        value: state.inputValue,
        onChange
    };
    let virtualFocusProps = {
        onKeyDown,
        'aria-activedescendant': state.focusedNodeId ?? undefined,
        onBlur,
        onFocus,
        onPointerDown
    };
    inputProps = {
        ...inputProps,
        ...shouldUseVirtualFocus && hasCollection && virtualFocusProps,
        enterKeyHint: 'go',
        'aria-controls': hasCollection ? collectionId : undefined,
        // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
        'aria-autocomplete': 'list',
        // This disable's iOS's autocorrect suggestions, since the autocomplete provides its own suggestions.
        autoCorrect: 'off',
        // This disable's the macOS Safari spell check auto corrections.
        spellCheck: 'false',
        autoComplete: 'off'
    };
    return {
        inputProps,
        collectionProps: (0, _mergeProps.mergeProps)(collectionProps, {
            shouldUseVirtualFocus,
            disallowTypeAhead: shouldUseVirtualFocus,
            autoFocus: autoFocusOnMount ? 'first' : false
        }),
        collectionRef: mergedCollectionRef,
        filter: filter != null ? filterFn : undefined
    };
}

},{"../utils/constants":"5dXIN","../focus/virtualFocus":"hd0wy","../utils/shadowdom/DOMFunctions":"8kfpz","../interactions/useFocusVisible":"aBfUW","../utils/domHelpers":"cYkFa","../../intl/autocomplete/index.js":"il1AG","../utils/platform":"eBqgD","../utils/keyboard":"fXhXT","../utils/mergeProps":"jycxS","../utils/mergeRefs":"jspQh","react":"gOP0N","../utils/useEffectEvent":"grBNM","../utils/useEvent":"avf8K","../utils/useId":"fQAcb","../utils/useLabels":"8ZwLJ","../utils/useLayoutEffect":"h7M6K","../i18n/useLocalizedStringFormatter":"8lll3","../utils/useObjectRef":"ec0NJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"il1AG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arAEJs = require("./ar-AE.js");
var _arAEJsDefault = parcelHelpers.interopDefault(_arAEJs);
var _bgBGJs = require("./bg-BG.js");
var _bgBGJsDefault = parcelHelpers.interopDefault(_bgBGJs);
var _csCZJs = require("./cs-CZ.js");
var _csCZJsDefault = parcelHelpers.interopDefault(_csCZJs);
var _daDKJs = require("./da-DK.js");
var _daDKJsDefault = parcelHelpers.interopDefault(_daDKJs);
var _deDEJs = require("./de-DE.js");
var _deDEJsDefault = parcelHelpers.interopDefault(_deDEJs);
var _elGRJs = require("./el-GR.js");
var _elGRJsDefault = parcelHelpers.interopDefault(_elGRJs);
var _enUSJs = require("./en-US.js");
var _enUSJsDefault = parcelHelpers.interopDefault(_enUSJs);
var _esESJs = require("./es-ES.js");
var _esESJsDefault = parcelHelpers.interopDefault(_esESJs);
var _etEEJs = require("./et-EE.js");
var _etEEJsDefault = parcelHelpers.interopDefault(_etEEJs);
var _fiFIJs = require("./fi-FI.js");
var _fiFIJsDefault = parcelHelpers.interopDefault(_fiFIJs);
var _frFRJs = require("./fr-FR.js");
var _frFRJsDefault = parcelHelpers.interopDefault(_frFRJs);
var _heILJs = require("./he-IL.js");
var _heILJsDefault = parcelHelpers.interopDefault(_heILJs);
var _hrHRJs = require("./hr-HR.js");
var _hrHRJsDefault = parcelHelpers.interopDefault(_hrHRJs);
var _huHUJs = require("./hu-HU.js");
var _huHUJsDefault = parcelHelpers.interopDefault(_huHUJs);
var _itITJs = require("./it-IT.js");
var _itITJsDefault = parcelHelpers.interopDefault(_itITJs);
var _jaJPJs = require("./ja-JP.js");
var _jaJPJsDefault = parcelHelpers.interopDefault(_jaJPJs);
var _koKRJs = require("./ko-KR.js");
var _koKRJsDefault = parcelHelpers.interopDefault(_koKRJs);
var _ltLTJs = require("./lt-LT.js");
var _ltLTJsDefault = parcelHelpers.interopDefault(_ltLTJs);
var _lvLVJs = require("./lv-LV.js");
var _lvLVJsDefault = parcelHelpers.interopDefault(_lvLVJs);
var _nbNOJs = require("./nb-NO.js");
var _nbNOJsDefault = parcelHelpers.interopDefault(_nbNOJs);
var _nlNLJs = require("./nl-NL.js");
var _nlNLJsDefault = parcelHelpers.interopDefault(_nlNLJs);
var _plPLJs = require("./pl-PL.js");
var _plPLJsDefault = parcelHelpers.interopDefault(_plPLJs);
var _ptBRJs = require("./pt-BR.js");
var _ptBRJsDefault = parcelHelpers.interopDefault(_ptBRJs);
var _ptPTJs = require("./pt-PT.js");
var _ptPTJsDefault = parcelHelpers.interopDefault(_ptPTJs);
var _roROJs = require("./ro-RO.js");
var _roROJsDefault = parcelHelpers.interopDefault(_roROJs);
var _ruRUJs = require("./ru-RU.js");
var _ruRUJsDefault = parcelHelpers.interopDefault(_ruRUJs);
var _skSKJs = require("./sk-SK.js");
var _skSKJsDefault = parcelHelpers.interopDefault(_skSKJs);
var _slSIJs = require("./sl-SI.js");
var _slSIJsDefault = parcelHelpers.interopDefault(_slSIJs);
var _srSPJs = require("./sr-SP.js");
var _srSPJsDefault = parcelHelpers.interopDefault(_srSPJs);
var _svSEJs = require("./sv-SE.js");
var _svSEJsDefault = parcelHelpers.interopDefault(_svSEJs);
var _trTRJs = require("./tr-TR.js");
var _trTRJsDefault = parcelHelpers.interopDefault(_trTRJs);
var _ukUAJs = require("./uk-UA.js");
var _ukUAJsDefault = parcelHelpers.interopDefault(_ukUAJs);
var _zhCNJs = require("./zh-CN.js");
var _zhCNJsDefault = parcelHelpers.interopDefault(_zhCNJs);
var _zhTWJs = require("./zh-TW.js");
var _zhTWJsDefault = parcelHelpers.interopDefault(_zhTWJs);
exports.default = {
    "ar-AE": (0, _arAEJsDefault.default),
    "bg-BG": (0, _bgBGJsDefault.default),
    "cs-CZ": (0, _csCZJsDefault.default),
    "da-DK": (0, _daDKJsDefault.default),
    "de-DE": (0, _deDEJsDefault.default),
    "el-GR": (0, _elGRJsDefault.default),
    "en-US": (0, _enUSJsDefault.default),
    "es-ES": (0, _esESJsDefault.default),
    "et-EE": (0, _etEEJsDefault.default),
    "fi-FI": (0, _fiFIJsDefault.default),
    "fr-FR": (0, _frFRJsDefault.default),
    "he-IL": (0, _heILJsDefault.default),
    "hr-HR": (0, _hrHRJsDefault.default),
    "hu-HU": (0, _huHUJsDefault.default),
    "it-IT": (0, _itITJsDefault.default),
    "ja-JP": (0, _jaJPJsDefault.default),
    "ko-KR": (0, _koKRJsDefault.default),
    "lt-LT": (0, _ltLTJsDefault.default),
    "lv-LV": (0, _lvLVJsDefault.default),
    "nb-NO": (0, _nbNOJsDefault.default),
    "nl-NL": (0, _nlNLJsDefault.default),
    "pl-PL": (0, _plPLJsDefault.default),
    "pt-BR": (0, _ptBRJsDefault.default),
    "pt-PT": (0, _ptPTJsDefault.default),
    "ro-RO": (0, _roROJsDefault.default),
    "ru-RU": (0, _ruRUJsDefault.default),
    "sk-SK": (0, _skSKJsDefault.default),
    "sl-SI": (0, _slSIJsDefault.default),
    "sr-SP": (0, _srSPJsDefault.default),
    "sv-SE": (0, _svSEJsDefault.default),
    "tr-TR": (0, _trTRJsDefault.default),
    "uk-UA": (0, _ukUAJsDefault.default),
    "zh-CN": (0, _zhCNJsDefault.default),
    "zh-TW": (0, _zhTWJsDefault.default)
};

},{"./ar-AE.js":"fIAco","./bg-BG.js":"cMn7P","./cs-CZ.js":"eqL7E","./da-DK.js":"k4xqN","./de-DE.js":"1AqZS","./el-GR.js":"g2z6I","./en-US.js":"6SXYl","./es-ES.js":"a1DR7","./et-EE.js":"a0Ov2","./fi-FI.js":"3Eqbx","./fr-FR.js":"67CDN","./he-IL.js":"rpo6J","./hr-HR.js":"2F6SF","./hu-HU.js":"1grLQ","./it-IT.js":"l2pyY","./ja-JP.js":"tbVbu","./ko-KR.js":"4QL35","./lt-LT.js":"g7KpO","./lv-LV.js":"gVikJ","./nb-NO.js":"fZNzd","./nl-NL.js":"3Q6Iq","./pl-PL.js":"j4Fmh","./pt-BR.js":"lozqH","./pt-PT.js":"29YSP","./ro-RO.js":"9NoGz","./ru-RU.js":"hHSGJ","./sk-SK.js":"b0KuV","./sl-SI.js":"jlYlH","./sr-SP.js":"iloJG","./sv-SE.js":"6lUDg","./tr-TR.js":"1tun9","./uk-UA.js":"fP95C","./zh-CN.js":"7OxhQ","./zh-TW.js":"aMDog","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fIAco":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `\u{645}\u{642}\u{62A}\u{631}\u{62D}\u{627}\u{62A}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cMn7P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `\u{41F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eqL7E":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `N\xe1vrhy`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k4xqN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Forslag`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1AqZS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Empfehlungen`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"g2z6I":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `\u{3A0}\u{3C1}\u{3BF}\u{3C4}\u{3AC}\u{3C3}\u{3B5}\u{3B9}\u{3C2}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6SXYl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Suggestions`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"a1DR7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Sugerencias`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"a0Ov2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Soovitused`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3Eqbx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Ehdotukset`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"67CDN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Suggestions`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"rpo6J":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `\u{5D4}\u{5E6}\u{5E2}\u{5D5}\u{5EA}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2F6SF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Prijedlozi`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1grLQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Javaslatok`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"l2pyY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Suggerimenti`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"tbVbu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `\u{5019}\u{88DC}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4QL35":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `\u{C81C}\u{C548}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"g7KpO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Pasi\u{16B}lymai`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gVikJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Ieteikumi`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fZNzd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Forslag`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3Q6Iq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Suggesties`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j4Fmh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Sugestie`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lozqH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Sugest\xf5es`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"29YSP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Sugest\xf5es`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9NoGz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Sugestii`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hHSGJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `\u{41F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"b0KuV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `N\xe1vrhy`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jlYlH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Predlogi`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iloJG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `Predlozi`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6lUDg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `F\xf6rslag`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1tun9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `\xd6neriler`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fP95C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `\u{41F}\u{440}\u{43E}\u{43F}\u{43E}\u{437}\u{438}\u{446}\u{456}\u{457}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7OxhQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `\u{5EFA}\u{8BAE}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aMDog":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collectionLabel": `\u{5EFA}\u{8B70}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hcXbj":[function(require,module,exports,__globalThis) {
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
 * Provides state management for an autocomplete component.
 */ parcelHelpers.export(exports, "useAutocompleteState", ()=>useAutocompleteState);
var _react = require("react");
var _useControlledState = require("../utils/useControlledState");
function useAutocompleteState(props) {
    let { onInputChange: propsOnInputChange, inputValue: propsInputValue, defaultInputValue: propsDefaultInputValue = '' } = props;
    let onInputChange = (value)=>{
        if (propsOnInputChange) propsOnInputChange(value);
    };
    let [focusedNodeId, setFocusedNodeId] = (0, _react.useState)(null);
    let [inputValue, setInputValue] = (0, _useControlledState.useControlledState)(propsInputValue, propsDefaultInputValue, onInputChange);
    return {
        inputValue,
        setInputValue,
        focusedNodeId,
        setFocusedNodeId
    };
}

},{"react":"gOP0N","../utils/useControlledState":"8yNBD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

