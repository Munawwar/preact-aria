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
})({"cg1hz":[function(require,module,exports,__globalThis) {
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
 * Handles interactions with selectable collections.
 */ parcelHelpers.export(exports, "useSelectableCollection", ()=>useSelectableCollection);
var _constants = require("../utils/constants");
var _virtualFocus = require("../focus/virtualFocus");
var _reactDom = require("react-dom");
var _react = require("react");
var _focusSafely = require("../interactions/focusSafely");
var _focusWithoutScrolling = require("../utils/focusWithoutScrolling");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _focusScope = require("../focus/FocusScope");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _utils = require("./utils");
var _keyboard = require("../utils/keyboard");
var _platform = require("../utils/platform");
var _isFocusable = require("../utils/isFocusable");
var _mergeProps = require("../utils/mergeProps");
var _scrollIntoView = require("../utils/scrollIntoView");
var _useEvent = require("../utils/useEvent");
var _useKeyboard = require("../interactions/useKeyboard");
var _i18Nprovider = require("../i18n/I18nProvider");
var _openLink = require("../utils/openLink");
var _useTypeSelect = require("./useTypeSelect");
var _useUpdateLayoutEffect = require("../utils/useUpdateLayoutEffect");
function useSelectableCollection(options) {
    let { selectionManager: manager, keyboardDelegate: delegate, ref, autoFocus = false, shouldFocusWrap = false, disallowEmptySelection = false, disallowSelectAll = false, escapeKeyBehavior = 'clearSelection', selectOnFocus = manager.selectionBehavior === 'replace', disallowTypeAhead = false, shouldUseVirtualFocus, allowsTabNavigation = false, // If no scrollRef is provided, assume the collection ref is the scrollable region
    scrollRef = ref, linkBehavior = 'action', UNSTABLE_focusOnEntry } = options;
    let { direction } = (0, _i18Nprovider.useLocale)();
    let router = (0, _openLink.useRouter)();
    const navigateToKey = (e, key, childFocus)=>{
        if (key != null) {
            if (manager.isLink(key) && linkBehavior === 'selection' && selectOnFocus && !(0, _utils.isNonContiguousSelectionModifier)(e)) {
                // Set focused key and re-render synchronously to bring item into view if needed.
                (0, _reactDom.flushSync)(()=>{
                    manager.setFocusedKey(key, childFocus);
                });
                let item = (0, _utils.getItemElement)(ref, key);
                let itemProps = manager.getItemProps(key);
                if (item) {
                    router.open(item, e, itemProps.href, itemProps.routerOptions);
                    return;
                }
                return false;
            }
            manager.setFocusedKey(key, childFocus);
            if (manager.isLink(key) && linkBehavior === 'override') return false;
            if (e.shiftKey && manager.selectionMode === 'multiple') {
                manager.extendSelection(key);
                return;
            } else if (selectOnFocus && !(0, _utils.isNonContiguousSelectionModifier)(e)) {
                manager.replaceSelection(key);
                return;
            }
        }
        return false;
    };
    let arrowDown = (e)=>{
        if (delegate.getKeyBelow) {
            let nextKey = manager.focusedKey != null ? delegate.getKeyBelow?.(manager.focusedKey) : delegate.getFirstKey?.();
            if (nextKey == null && shouldFocusWrap) nextKey = delegate.getFirstKey?.(manager.focusedKey);
            if (nextKey != null) {
                navigateToKey(e, nextKey);
                return;
            }
        }
        return false;
    };
    let arrowUp = (e)=>{
        if (delegate.getKeyAbove) {
            let nextKey = manager.focusedKey != null ? delegate.getKeyAbove?.(manager.focusedKey) : delegate.getLastKey?.();
            if (nextKey == null && shouldFocusWrap) nextKey = delegate.getLastKey?.(manager.focusedKey);
            if (nextKey != null) {
                navigateToKey(e, nextKey);
                return;
            }
        }
        return false;
    };
    let home = (e)=>{
        if (delegate.getFirstKey) {
            if (manager.focusedKey === null && e.shiftKey) return false;
            // TODO: should Home and End also be reversed in column reverse aka Home goes to top? Or should Home always to to the "first" (bottom)
            let firstKey = delegate.getFirstKey(manager.focusedKey, (0, _keyboard.isCtrlKeyPressed)(e));
            manager.setFocusedKey(firstKey);
            if (firstKey != null) {
                if ((0, _keyboard.isCtrlKeyPressed)(e) && e.shiftKey && manager.selectionMode === 'multiple') {
                    manager.extendSelection(firstKey);
                    return;
                } else if (selectOnFocus) {
                    manager.replaceSelection(firstKey);
                    return;
                }
            }
        }
        return false;
    };
    let arrowLeft = (e)=>{
        if (delegate.getKeyLeftOf) {
            let nextKey = manager.focusedKey != null ? delegate.getKeyLeftOf?.(manager.focusedKey) : delegate.getFirstKey?.();
            if (nextKey == null && shouldFocusWrap) nextKey = direction === 'rtl' ? delegate.getFirstKey?.(manager.focusedKey) : delegate.getLastKey?.(manager.focusedKey);
            if (nextKey != null) {
                navigateToKey(e, nextKey, direction === 'rtl' ? 'first' : 'last');
                return;
            }
        }
        return false;
    };
    let arrowRight = (e)=>{
        if (delegate.getKeyRightOf) {
            let nextKey = manager.focusedKey != null ? delegate.getKeyRightOf?.(manager.focusedKey) : delegate.getFirstKey?.();
            if (nextKey == null && shouldFocusWrap) nextKey = direction === 'rtl' ? delegate.getLastKey?.(manager.focusedKey) : delegate.getFirstKey?.(manager.focusedKey);
            if (nextKey != null) {
                navigateToKey(e, nextKey, direction === 'rtl' ? 'last' : 'first');
                return;
            }
        }
        return false;
    };
    let end = (e)=>{
        if (delegate.getLastKey) {
            if (manager.focusedKey === null && e.shiftKey) return false;
            let lastKey = delegate.getLastKey(manager.focusedKey, (0, _keyboard.isCtrlKeyPressed)(e));
            manager.setFocusedKey(lastKey);
            if (lastKey != null) {
                if ((0, _keyboard.isCtrlKeyPressed)(e) && e.shiftKey && manager.selectionMode === 'multiple') {
                    manager.extendSelection(lastKey);
                    return;
                } else if (selectOnFocus) {
                    manager.replaceSelection(lastKey);
                    return;
                }
            }
        }
        return false;
    };
    let pageDown = (e)=>{
        if (delegate.getKeyPageBelow && manager.focusedKey != null) {
            let nextKey = delegate.getKeyPageBelow(manager.focusedKey);
            if (nextKey != null) return navigateToKey(e, nextKey);
        }
        return false;
    };
    let pageUp = (e)=>{
        if (delegate.getKeyPageAbove && manager.focusedKey != null) {
            let nextKey = delegate.getKeyPageAbove(manager.focusedKey);
            if (nextKey != null) return navigateToKey(e, nextKey);
        }
        return false;
    };
    let aHandler = ()=>{
        if (manager.selectionMode === 'multiple' && disallowSelectAll !== true) {
            manager.selectAll();
            return;
        }
        return false;
    };
    let escape = ()=>{
        if (escapeKeyBehavior === 'clearSelection' && !disallowEmptySelection && manager.selectedKeys.size !== 0) {
            manager.clearSelection();
            return;
        }
        return false;
    };
    let tab = ()=>{
        if (!allowsTabNavigation && ref.current) {
            // There may be elements that are "tabbable" inside a collection (e.g. in a grid cell).
            // However, collections should be treated as a single tab stop, with arrow key navigation internally.
            // We don't control the rendering of these, so we can't override the tabIndex to prevent tabbing.
            // Instead, we handle the Tab key, and move focus manually to the first/last tabbable element
            // in the collection, so that the browser default behavior will apply starting from that element
            // rather than the currently focused one.
            let walker = (0, _focusScope.getFocusableTreeWalker)(ref.current, {
                tabbable: true
            });
            let next = undefined;
            let last;
            do {
                last = walker.lastChild();
                if (last) next = last;
            }while (last);
            // If the active element is NOT tabbable but is contained by an element that IS tabbable (aka the cell), the browser will actually move focus to
            // the containing element. We need to special case this so that tab will move focus out of the grid instead of looping between
            // focusing the containing cell and back to the non-tabbable child element
            let activeElement = (0, _domfunctions.getActiveElement)();
            if (next && (!(0, _domfunctions.isFocusWithin)(next) || activeElement && !(0, _isFocusable.isTabbable)(activeElement))) (0, _focusWithoutScrolling.focusWithoutScrolling)(next);
        }
        return {
            shouldContinuePropagation: true,
            shouldPreventDefault: false
        };
    };
    let shiftTab = ()=>{
        if (!allowsTabNavigation && ref.current) ref.current.focus();
        return {
            shouldContinuePropagation: true,
            shouldPreventDefault: false
        };
    };
    let withShiftSel = (key, callback)=>{
        return {
            [(0, _platform.isMac)() ? key + '+Shift+Alt' : key + '+Shift+Control']: callback,
            [key + '+Shift']: callback,
            [(0, _platform.isMac)() ? key + '+Alt' : key + '+Control']: callback,
            [key]: callback
        };
    };
    // oxlint-disable react/react-compiler
    let { keyboardProps: repeatKeyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            ...withShiftSel('ArrowDown', arrowDown),
            ...withShiftSel('ArrowUp', arrowUp),
            ...withShiftSel('ArrowLeft', arrowLeft),
            ...withShiftSel('ArrowRight', arrowRight),
            ...withShiftSel('PageDown', pageDown),
            ...withShiftSel('PageUp', pageUp)
        },
        allowRepeats: true
    });
    // oxlint-disable react/react-compiler
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            ...withShiftSel('Home', home),
            ...withShiftSel('End', end),
            'Mod+A': aHandler,
            Escape: escape,
            Tab: tab,
            'Tab+Shift': shiftTab
        }
    });
    // oxlint-enable react/react-compiler
    // Store the scroll position so we can restore it later.
    /// TODO: should this happen all the time??
    let scrollPos = (0, _react.useRef)({
        top: 0,
        left: 0
    });
    (0, _useEvent.useEvent)(scrollRef, 'scroll', ()=>{
        scrollPos.current = {
            top: scrollRef.current?.scrollTop ?? 0,
            left: scrollRef.current?.scrollLeft ?? 0
        };
    });
    let onFocus = (e)=>{
        if (manager.isFocused) {
            // If a focus event bubbled through a portal, reset focus state.
            if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) manager.setFocused(false);
            return;
        }
        // Focus events can bubble through portals. Ignore these events.
        if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) return;
        let modality = (0, _useFocusVisible.getInteractionModality)();
        manager.setFocused(true);
        let navigateToKey = (key)=>{
            if (key != null) {
                manager.setFocusedKey(key);
                if (selectOnFocus && !manager.isSelected(key)) manager.replaceSelection(key);
            }
        };
        // we need the "virtual" modality case checks here because shift tabbing from the prompt field's attachment card back into the
        // thread is a virtual focus event (the tab handler in onKeyDown focuses the ref of the attachmentList aka TagGroup via a focus() call, hence the virtual modality)
        if (UNSTABLE_focusOnEntry && (modality === 'keyboard' || modality === 'virtual')) // always go to the first item in the Thread when tabbing forwards/backwards into the collection
        // since it is probably more important to the user to see the new prompt reply rather than go to the last focused key
        navigateToKey(UNSTABLE_focusOnEntry === 'first' ? delegate.getFirstKey?.() : delegate.getLastKey?.());
        else if (manager.focusedKey == null) {
            // If the user hasn't yet interacted with the collection, there will be no focusedKey set.
            // Attempt to detect whether the user is tabbing forward or backward into the collection
            // and either focus the first or last item accordingly.
            let relatedTarget = e.relatedTarget;
            if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) navigateToKey(manager.lastSelectedKey ?? delegate.getLastKey?.());
            else navigateToKey(manager.firstSelectedKey ?? delegate.getFirstKey?.());
        } else if (scrollRef.current) {
            // Restore the scroll position to what it was before.
            scrollRef.current.scrollTop = scrollPos.current.top;
            scrollRef.current.scrollLeft = scrollPos.current.left;
        }
        if (manager.focusedKey != null && scrollRef.current) {
            // Refocus and scroll the focused item into view if it exists within the scrollable region.
            let element = (0, _utils.getItemElement)(ref, manager.focusedKey);
            if (element instanceof HTMLElement) {
                // This prevents a flash of focus on the first/last element in the collection, or the collection itself.
                if (!(0, _domfunctions.isFocusWithin)(element) && !shouldUseVirtualFocus) (0, _focusWithoutScrolling.focusWithoutScrolling)(element);
                if (modality === 'keyboard' || UNSTABLE_focusOnEntry && modality === 'virtual') (0, _scrollIntoView.scrollIntoViewport)(element, {
                    containingElement: ref.current
                });
            }
        }
    };
    let onBlur = (e)=>{
        // Don't set blurred and then focused again if moving focus within the collection.
        if (!(0, _domfunctions.nodeContains)(e.currentTarget, e.relatedTarget)) manager.setFocused(false);
    };
    // Ref to track whether the first item in the collection should be automatically focused. Specifically used for autocomplete when user types
    // to focus the first key AFTER the collection updates.
    // TODO: potentially expand the usage of this
    let shouldVirtualFocusFirst = (0, _react.useRef)(false);
    // Add event listeners for custom virtual events. These handle updating the focused key in response to various keyboard events
    // at the autocomplete level
    // TODO: fix type later
    (0, _useEvent.useEvent)(ref, (0, _constants.FOCUS_EVENT), !shouldUseVirtualFocus ? undefined : (e)=>{
        let { detail } = e;
        e.stopPropagation();
        manager.setFocused(true);
        // If the user is typing forwards, autofocus the first option in the list.
        if (detail?.focusStrategy === 'first') shouldVirtualFocusFirst.current = true;
    });
    // update active descendant
    let firstKey = delegate.getFirstKey?.() ?? null;
    (0, _useUpdateLayoutEffect.useUpdateLayoutEffect)(()=>{
        if (shouldVirtualFocusFirst.current) {
            // If no focusable items exist in the list, make sure to clear any activedescendant that may still exist and move focus back to
            // the original active element (e.g. the autocomplete input)
            if (firstKey == null) {
                let previousActiveElement = (0, _domfunctions.getActiveElement)();
                (0, _virtualFocus.moveVirtualFocus)(ref.current);
                (0, _virtualFocus.dispatchVirtualFocus)(previousActiveElement, null);
                // If there wasn't a focusable key but the collection had items, then that means we aren't in an intermediate load state and all keys are disabled.
                // Reset shouldVirtualFocusFirst so that we don't erronously autofocus an item when the collection is filtered again.
                if (manager.collection.size > 0) shouldVirtualFocusFirst.current = false;
            } else {
                manager.setFocusedKey(firstKey);
                // Only set shouldVirtualFocusFirst to false if we've successfully set the first key as the focused key
                // If there wasn't a key to focus, we might be in a temporary loading state so we'll want to still focus the first key
                // after the collection updates after load
                shouldVirtualFocusFirst.current = false;
            }
        }
    }, [
        firstKey,
        manager.collection.size
    ]);
    // reset focus first flag
    (0, _useUpdateLayoutEffect.useUpdateLayoutEffect)(()=>{
        // If user causes the focused key to change in any other way, clear shouldVirtualFocusFirst so we don't
        // accidentally move focus from under them. Skip this if the collection was empty because we might be in a load
        // state and will still want to focus the first item after load
        if (manager.collection.size > 0) shouldVirtualFocusFirst.current = false;
    }, [
        manager.focusedKey
    ]);
    (0, _useEvent.useEvent)(ref, (0, _constants.CLEAR_FOCUS_EVENT), !shouldUseVirtualFocus ? undefined : (e)=>{
        e.stopPropagation();
        manager.setFocused(false);
        if (e.detail?.clearFocusKey) manager.setFocusedKey(null);
    });
    const autoFocusRef = (0, _react.useRef)(autoFocus);
    const didAutoFocusRef = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (autoFocusRef.current) {
            let focusedKey = null;
            // Check focus strategy to determine which item to focus
            if (autoFocus === 'first') focusedKey = delegate.getFirstKey?.() ?? null;
            if (autoFocus === 'last') focusedKey = delegate.getLastKey?.() ?? null;
            // If there are any selected keys, make the first one the new focus target
            let selectedKeys = manager.selectedKeys;
            if (selectedKeys.size) {
                for (let key of selectedKeys)if (manager.canSelectItem(key)) {
                    focusedKey = key;
                    break;
                }
            }
            manager.setFocused(true);
            manager.setFocusedKey(focusedKey);
            if (focusedKey != null && selectOnFocus && !selectedKeys.size && manager.canSelectItem(focusedKey)) manager.replaceSelection(focusedKey);
            // If no default focus key is selected, focus the collection itself.
            if (focusedKey == null && !shouldUseVirtualFocus && ref.current) (0, _focusSafely.focusSafely)(ref.current);
            // Wait until the collection has items to autofocus.
            if (manager.collection.size > 0) {
                autoFocusRef.current = false;
                didAutoFocusRef.current = true;
            }
        }
    });
    // Scroll the focused element into view when the focusedKey changes.
    let lastFocusedKey = (0, _react.useRef)(manager.focusedKey);
    let raf = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        if (manager.isFocused && manager.focusedKey != null && (manager.focusedKey !== lastFocusedKey.current || didAutoFocusRef.current) && scrollRef.current && ref.current) {
            let modality = (0, _useFocusVisible.getInteractionModality)();
            let element = (0, _utils.getItemElement)(ref, manager.focusedKey);
            if (!(element instanceof HTMLElement)) // If item element wasn't found, return early (don't update autoFocusRef and lastFocusedKey).
            // The collection may initially be empty (e.g. virtualizer), so wait until the element exists.
            return;
            if (modality === 'keyboard' || didAutoFocusRef.current) {
                if (raf.current) cancelAnimationFrame(raf.current);
                raf.current = requestAnimationFrame(()=>{
                    if (scrollRef.current) {
                        (0, _scrollIntoView.scrollIntoView)(scrollRef.current, element);
                        // Avoid scroll in iOS VO, since it may cause overlay to close (i.e. RAC submenu)
                        if (modality !== 'virtual') (0, _scrollIntoView.scrollIntoViewport)(element, {
                            containingElement: ref.current
                        });
                    }
                });
            }
        }
        // If the focused key becomes null (e.g. the last item is deleted), focus the whole collection.
        if (!shouldUseVirtualFocus && manager.isFocused && manager.focusedKey == null && lastFocusedKey.current != null && ref.current) (0, _focusSafely.focusSafely)(ref.current);
        lastFocusedKey.current = manager.focusedKey;
        didAutoFocusRef.current = false;
    });
    (0, _react.useEffect)(()=>{
        return ()=>{
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, []);
    // Intercept FocusScope restoration since virtualized collections can reuse DOM nodes.
    (0, _useEvent.useEvent)(ref, 'react-aria-focus-scope-restore', (e)=>{
        e.preventDefault();
        manager.setFocused(true);
    });
    let handlers = {
        ...(0, _mergeProps.mergeProps)(keyboardProps, repeatKeyboardProps),
        onFocus,
        onBlur,
        onMouseDown (e) {
            // Ignore events that bubbled through portals.
            if (scrollRef.current === (0, _domfunctions.getEventTarget)(e)) // Prevent focus going to the collection when clicking on the scrollbar.
            e.preventDefault();
        }
    };
    let { typeSelectProps } = (0, _useTypeSelect.useTypeSelect)({
        keyboardDelegate: delegate,
        selectionManager: manager
    });
    if (!disallowTypeAhead) // oxlint-disable-next-line react/react-compiler
    handlers = (0, _mergeProps.mergeProps)(typeSelectProps, handlers);
    // If nothing is focused within the collection, make the collection itself tabbable.
    // This will be marshalled to either the first or last item depending on where focus came from.
    let tabIndex = undefined;
    if (!shouldUseVirtualFocus) tabIndex = manager.focusedKey == null ? 0 : -1;
    let collectionId = (0, _utils.useCollectionId)(manager.collection);
    return {
        // oxlint-disable-next-line react/react-compiler
        collectionProps: (0, _mergeProps.mergeProps)(handlers, {
            tabIndex,
            'data-collection': collectionId
        })
    };
}

},{"../utils/constants":"5dXIN","../focus/virtualFocus":"hd0wy","react-dom":"gOP0N","react":"gOP0N","../interactions/focusSafely":"2xT6S","../utils/focusWithoutScrolling":"gcZ3w","../utils/shadowdom/DOMFunctions":"8kfpz","../focus/FocusScope":"E8d3D","../interactions/useFocusVisible":"aBfUW","./utils":"jwa0D","../utils/keyboard":"fXhXT","../utils/platform":"eBqgD","../utils/isFocusable":"dLPRV","../utils/mergeProps":"jycxS","../utils/scrollIntoView":"5N7nL","../utils/useEvent":"avf8K","../interactions/useKeyboard":"aHm7i","../i18n/I18nProvider":"czGuc","../utils/openLink":"gH3wl","./useTypeSelect":"4tdKW","../utils/useUpdateLayoutEffect":"h42RT","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jwa0D":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "isNonContiguousSelectionModifier", ()=>isNonContiguousSelectionModifier);
parcelHelpers.export(exports, "getItemElement", ()=>getItemElement);
parcelHelpers.export(exports, "useCollectionId", ()=>useCollectionId);
parcelHelpers.export(exports, "getCollectionId", ()=>getCollectionId);
var _platform = require("../utils/platform");
var _useId = require("../utils/useId");
function isNonContiguousSelectionModifier(e) {
    // Ctrl + Arrow Up/Arrow Down has a system wide meaning on macOS, so use Alt instead.
    // On Windows and Ubuntu, Alt + Space has a system wide meaning.
    return (0, _platform.isAppleDevice)() ? e.altKey : e.ctrlKey;
}
function getItemElement(collectionRef, key) {
    let selector = `[data-key="${CSS.escape(String(key))}"]`;
    let collection = collectionRef.current?.dataset.collection;
    if (collection) selector = `[data-collection="${CSS.escape(collection)}"]${selector}`;
    return collectionRef.current?.querySelector(selector);
}
const collectionMap = new WeakMap();
function useCollectionId(collection) {
    let id = (0, _useId.useId)();
    collectionMap.set(collection, id);
    return id;
}
function getCollectionId(collection) {
    return collectionMap.get(collection);
}

},{"../utils/platform":"eBqgD","../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4tdKW":[function(require,module,exports,__globalThis) {
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
 * Handles typeahead interactions with collections.
 */ parcelHelpers.export(exports, "useTypeSelect", ()=>useTypeSelect);
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _react = require("react");
/**
 * Controls how long to wait before clearing the typeahead buffer.
 */ const TYPEAHEAD_DEBOUNCE_WAIT_MS = 1000; // 1 second
function useTypeSelect(options) {
    let { keyboardDelegate, selectionManager, onTypeSelect } = options;
    let state = (0, _react.useRef)({
        search: '',
        timeout: undefined
    });
    let onKeyDownCapture = (e)=>{
        // if we're in the middle of a search, then a spacebar should be treated as a search and we should not propagate the event
        // since we handle this one in a capture phase, we should ignore it in the bubble phase
        if (state.current.search.length > 0 && e.key === ' ') {
            e.preventDefault();
            if (!('continuePropagation' in e) || 'continuePropagation' in e && !e.isPropagationStopped()) e.stopPropagation();
            state.current.search += ' ';
            if (keyboardDelegate.getKeyForSearch != null) {
                // Use the delegate to find a key to focus.
                // Prioritize items after the currently focused item, falling back to searching the whole list.
                let key = keyboardDelegate.getKeyForSearch(state.current.search, selectionManager.focusedKey);
                // If no key found, search from the top.
                if (key == null) key = keyboardDelegate.getKeyForSearch(state.current.search);
                if (key != null) {
                    selectionManager.setFocusedKey(key);
                    if (onTypeSelect) onTypeSelect(key);
                }
            }
            clearTimeout(state.current.timeout);
            state.current.timeout = setTimeout(()=>{
                state.current.search = '';
            }, TYPEAHEAD_DEBOUNCE_WAIT_MS);
        }
    };
    let onKeyDown = (e)=>{
        let character = getStringForKey(e.key);
        if (!character || e.ctrlKey || e.metaKey || e.altKey || !(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e)) || state.current.search.length === 0 && character === ' ') return;
        state.current.search += character;
        if (keyboardDelegate.getKeyForSearch != null) {
            // Use the delegate to find a key to focus.
            // Prioritize items after the currently focused item, falling back to searching the whole list.
            let key = keyboardDelegate.getKeyForSearch(state.current.search, selectionManager.focusedKey);
            if (key == null) key = keyboardDelegate.getKeyForSearch(state.current.search);
            if (key != null) {
                selectionManager.setFocusedKey(key);
                if (onTypeSelect) onTypeSelect(key);
                e.preventDefault();
                if (!('continuePropagation' in e)) e.stopPropagation();
            } else {
                // if still nothing then the type to select is done and everything is reset
                state.current.search = '';
                clearTimeout(state.current.timeout);
                state.current.timeout = undefined;
                return;
            }
        }
        clearTimeout(state.current.timeout);
        state.current.timeout = setTimeout(()=>{
            state.current.search = '';
        }, TYPEAHEAD_DEBOUNCE_WAIT_MS);
    };
    (0, _react.useEffect)(()=>{
        let timeout = state.current.timeout;
        return ()=>{
            clearTimeout(timeout);
        };
    }, [
        state
    ]);
    return {
        typeSelectProps: {
            // Using a capturing listener to catch the keydown event before
            // other hooks in order to handle the Spacebar event.
            onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDownCapture : undefined,
            onKeyDown: keyboardDelegate.getKeyForSearch ? onKeyDown : undefined
        }
    };
}
function getStringForKey(key) {
    // If the key is of length 1, it is an ASCII value.
    // Otherwise, if there are no ASCII characters in the key name,
    // it is a Unicode character.
    // See https://www.w3.org/TR/uievents-key/
    if (key.length === 1 || !/^[A-Z]/i.test(key)) return key;
    return '';
}

},{"../utils/shadowdom/DOMFunctions":"8kfpz","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h42RT":[function(require,module,exports,__globalThis) {
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
// Like useLayoutEffect, but only called for updates after the initial render.
parcelHelpers.export(exports, "useUpdateLayoutEffect", ()=>useUpdateLayoutEffect);
var _react = require("react");
var _useLayoutEffect = require("./useLayoutEffect");
function useUpdateLayoutEffect(effect, dependencies) {
    const isInitialMount = (0, _react.useRef)(true);
    const lastDeps = (0, _react.useRef)(null);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        isInitialMount.current = true;
        return ()=>{
            isInitialMount.current = false;
        };
    }, []);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (isInitialMount.current) isInitialMount.current = false;
        else if (!lastDeps.current || dependencies.some((dep, i)=>!Object.is(dep, lastDeps[i]))) effect();
        lastDeps.current = dependencies;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}

},{"react":"gOP0N","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9KbhA":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "getChildNodes", ()=>getChildNodes);
parcelHelpers.export(exports, "getFirstItem", ()=>getFirstItem);
parcelHelpers.export(exports, "getNthItem", ()=>getNthItem);
parcelHelpers.export(exports, "getLastItem", ()=>getLastItem);
parcelHelpers.export(exports, "compareNodeOrder", ()=>compareNodeOrder);
function getChildNodes(node, collection) {
    // New API: call collection.getChildren with the node key.
    if (typeof collection.getChildren === 'function') return collection.getChildren(node.key);
    // Old API: access childNodes directly.
    return node.childNodes;
}
function getFirstItem(iterable) {
    return getNthItem(iterable, 0);
}
function getNthItem(iterable, index) {
    if (index < 0) return undefined;
    let i = 0;
    for (let item of iterable){
        if (i === index) return item;
        i++;
    }
}
function getLastItem(iterable) {
    let lastItem = undefined;
    for (let value of iterable)lastItem = value;
    return lastItem;
}
function compareNodeOrder(collection, a, b) {
    // If the two nodes have the same parent, compare their indices.
    if (a.parentKey === b.parentKey) return a.index - b.index;
    // Otherwise, collect all of the ancestors from each node, and find the first one that doesn't match starting from the root.
    // Include the base nodes in case we are comparing nodes of different levels so that we can compare the higher node to the lower level node's
    // ancestor of the same level
    let aAncestors = [
        ...getAncestors(collection, a),
        a
    ];
    let bAncestors = [
        ...getAncestors(collection, b),
        b
    ];
    let firstNonMatchingAncestor = aAncestors.slice(0, bAncestors.length).findIndex((a, i)=>a !== bAncestors[i]);
    if (firstNonMatchingAncestor !== -1) {
        // Compare the indices of two children within the common ancestor.
        a = aAncestors[firstNonMatchingAncestor];
        b = bAncestors[firstNonMatchingAncestor];
        return a.index - b.index;
    }
    // If there isn't a non matching ancestor, we might be in a case where one of the nodes is the ancestor of the other.
    if (aAncestors.findIndex((node)=>node === b) >= 0) return 1;
    else if (bAncestors.findIndex((node)=>node === a) >= 0) return -1;
    // 🤷
    return -1;
}
function getAncestors(collection, node) {
    let parents = [];
    let currNode = node;
    while(currNode?.parentKey != null){
        currNode = collection.getItem(currNode.parentKey);
        if (currNode) parents.unshift(currNode);
    }
    return parents;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3SFOH":[function(require,module,exports,__globalThis) {
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
 * Handles interactions with an item in a selectable collection.
 */ parcelHelpers.export(exports, "useSelectableItem", ()=>useSelectableItem);
var _chain = require("../utils/chain");
var _focusSafely = require("../interactions/focusSafely");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _utils = require("./utils");
var _keyboard = require("../utils/keyboard");
var _isFocusable = require("../utils/isFocusable");
var _mergeProps = require("../utils/mergeProps");
var _virtualFocus = require("../focus/virtualFocus");
var _openLink = require("../utils/openLink");
var _usePress = require("../interactions/usePress");
var _react = require("react");
var _useId = require("../utils/useId");
var _useLongPress = require("../interactions/useLongPress");
function useSelectableItem(options) {
    let { id, selectionManager: manager, key, ref, shouldSelectOnPressUp, shouldUseVirtualFocus, focus, isDisabled, onAction, allowsDifferentPressOrigin, linkBehavior = 'action' } = options;
    let router = (0, _openLink.useRouter)();
    id = (0, _useId.useId)(id);
    let onSelect = (e)=>{
        if (e.pointerType === 'keyboard' && (0, _utils.isNonContiguousSelectionModifier)(e)) manager.toggleSelection(key);
        else {
            if (manager.selectionMode === 'none') return;
            if (manager.isLink(key)) {
                if (linkBehavior === 'selection' && ref.current) {
                    let itemProps = manager.getItemProps(key);
                    router.open(ref.current, e, itemProps.href, itemProps.routerOptions);
                    // Always set selected keys back to what they were so that select and combobox close.
                    manager.setSelectedKeys(manager.selectedKeys);
                    return;
                } else if (linkBehavior === 'override' || linkBehavior === 'none') return;
            }
            if (manager.selectionMode === 'single') {
                if (manager.isSelected(key) && !manager.disallowEmptySelection) manager.toggleSelection(key);
                else manager.replaceSelection(key);
            } else if (e && e.shiftKey) manager.extendSelection(key);
            else if (manager.selectionBehavior === 'toggle' || e && ((0, _keyboard.isCtrlKeyPressed)(e) || e.pointerType === 'touch' || e.pointerType === 'virtual')) // if touch or virtual (VO) then we just want to toggle, otherwise it's impossible to multi select because they don't have modifier keys
            manager.toggleSelection(key);
            else manager.replaceSelection(key);
        }
    };
    // Focus the associated DOM node when this item becomes the focusedKey
    // TODO: can't make this useLayoutEffect bacause it breaks menus inside dialogs
    // However, if this is a useEffect, it runs twice and dispatches two blur events and immediately sets
    // aria-activeDescendant in useAutocomplete... I've worked around this for now
    (0, _react.useEffect)(()=>{
        let isFocused = key === manager.focusedKey;
        if (isFocused && manager.isFocused) {
            if (!shouldUseVirtualFocus) {
                if (focus) focus();
                else if ((0, _domfunctions.getActiveElement)() !== ref.current && ref.current) (0, _focusSafely.focusSafely)(ref.current);
            } else (0, _virtualFocus.moveVirtualFocus)(ref.current);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        ref,
        key,
        manager.focusedKey,
        manager.childFocusStrategy,
        manager.isFocused,
        shouldUseVirtualFocus
    ]);
    isDisabled = isDisabled || manager.isDisabled(key);
    // Set tabIndex to 0 if the element is focused, or -1 otherwise so that only the last focused
    // item is tabbable.  If using virtual focus, don't set a tabIndex at all so that VoiceOver
    // on iOS 14 doesn't try to move real DOM focus to the item anyway.
    let itemProps = {};
    if (!shouldUseVirtualFocus && !isDisabled) itemProps = {
        tabIndex: key === manager.focusedKey ? 0 : -1,
        onFocus (e) {
            if ((0, _domfunctions.getEventTarget)(e) === ref.current) manager.setFocusedKey(key);
        }
    };
    else if (isDisabled) itemProps.onMouseDown = (e)=>{
        // Prevent focus going to the body when clicking on a disabled item.
        e.preventDefault();
    };
    (0, _react.useEffect)(()=>{
        if (isDisabled && manager.focusedKey === key) manager.setFocusedKey(null);
    }, [
        manager,
        isDisabled,
        key
    ]);
    // With checkbox selection, onAction (i.e. navigation) becomes primary, and occurs on a single click of the row.
    // Clicking the checkbox enters selection mode, after which clicking anywhere on any row toggles selection for that row.
    // With highlight selection, onAction is secondary, and occurs on double click. Single click selects the row.
    // With touch, onAction occurs on single tap, and long press enters selection mode.
    let isLinkOverride = manager.isLink(key) && linkBehavior === 'override';
    let isActionOverride = onAction && options['UNSTABLE_itemBehavior'] === 'action';
    let hasLinkAction = manager.isLink(key) && linkBehavior !== 'selection' && linkBehavior !== 'none';
    let allowsSelection = !isDisabled && manager.canSelectItem(key) && !isLinkOverride && !isActionOverride;
    let allowsActions = (onAction || hasLinkAction) && !isDisabled;
    let hasPrimaryAction = allowsActions && (manager.selectionBehavior === 'replace' ? !allowsSelection : !allowsSelection || manager.isEmpty);
    let hasSecondaryAction = allowsActions && allowsSelection && manager.selectionBehavior === 'replace';
    let hasAction = hasPrimaryAction || hasSecondaryAction;
    let modality = (0, _react.useRef)(null);
    let longPressEnabled = hasAction && allowsSelection;
    let longPressEnabledOnPressStart = (0, _react.useRef)(false);
    let hadPrimaryActionOnPressStart = (0, _react.useRef)(false);
    let collectionItemProps = manager.getItemProps(key);
    let performAction = (e)=>{
        if (onAction) {
            onAction();
            ref.current?.dispatchEvent(new CustomEvent('react-aria-item-action', {
                bubbles: true
            }));
        }
        if (hasLinkAction && ref.current) router.open(ref.current, e, collectionItemProps.href, collectionItemProps.routerOptions);
    };
    // By default, selection occurs on pointer down. This can be strange if selecting an
    // item causes the UI to disappear immediately (e.g. menus).
    // If shouldSelectOnPressUp is true, we use onPressUp instead of onPressStart.
    // onPress requires a pointer down event on the same element as pointer up. For menus,
    // we want to be able to have the pointer down on the trigger that opens the menu and
    // the pointer up on the menu item rather than requiring a separate press.
    // For keyboard events, selection still occurs on key down.
    let itemPressProps = {
        ref
    };
    if (shouldSelectOnPressUp) {
        // oxlint-disable-next-line react/react-compiler
        itemPressProps.onPressStart = (e)=>{
            modality.current = e.pointerType;
            longPressEnabledOnPressStart.current = longPressEnabled;
            if (e.pointerType === 'keyboard' && (!hasAction || isSelectionKey(e.key))) onSelect(e);
        };
        // If allowsDifferentPressOrigin and interacting with mouse, make selection happen on pressUp (e.g. open menu on press down, selection on menu item happens on press up.)
        // Otherwise, have selection happen onPress (prevents listview row selection when clicking on interactable elements in the row)
        if (!allowsDifferentPressOrigin) // oxlint-disable-next-line react/react-compiler
        itemPressProps.onPress = (e)=>{
            if (hasPrimaryAction || hasSecondaryAction && e.pointerType !== 'mouse') {
                if (e.pointerType === 'keyboard' && !isActionKey(e.key)) return;
                performAction(e);
            } else if (e.pointerType !== 'keyboard' && allowsSelection) onSelect(e);
        };
        else {
            // oxlint-disable-next-line react/react-compiler
            itemPressProps.onPressUp = hasPrimaryAction ? undefined : (e)=>{
                if (e.pointerType === 'mouse' && allowsSelection) onSelect(e);
            };
            // oxlint-disable-next-line react/react-compiler
            itemPressProps.onPress = hasPrimaryAction ? performAction : (e)=>{
                if (e.pointerType !== 'keyboard' && e.pointerType !== 'mouse' && allowsSelection) onSelect(e);
            };
        }
    } else {
        // oxlint-disable-next-line react/react-compiler
        itemPressProps.onPressStart = (e)=>{
            modality.current = e.pointerType;
            longPressEnabledOnPressStart.current = longPressEnabled;
            hadPrimaryActionOnPressStart.current = hasPrimaryAction;
            // Select on mouse down unless there is a primary action which will occur on mouse up.
            // For keyboard, select on key down. If there is an action, the Space key selects on key down,
            // and the Enter key performs onAction on key up.
            if (allowsSelection && (e.pointerType === 'mouse' && !hasPrimaryAction || e.pointerType === 'keyboard' && (!allowsActions || isSelectionKey(e.key)))) onSelect(e);
        };
        // oxlint-disable-next-line react/react-compiler
        itemPressProps.onPress = (e)=>{
            // Selection occurs on touch up. Primary actions always occur on pointer up.
            // Both primary and secondary actions occur on Enter key up. The only exception
            // is secondary actions, which occur on double click with a mouse.
            if (e.pointerType === 'touch' || e.pointerType === 'pen' || e.pointerType === 'virtual' || e.pointerType === 'keyboard' && hasAction && isActionKey(e.key) || e.pointerType === 'mouse' && hadPrimaryActionOnPressStart.current) {
                if (hasAction) performAction(e);
                else if (allowsSelection) onSelect(e);
            }
        };
    }
    let collectionId = (0, _utils.getCollectionId)(manager.collection);
    itemProps['data-collection'] = collectionId;
    itemProps['data-key'] = key;
    // oxlint-disable-next-line react/react-compiler
    itemPressProps.preventFocusOnPress = shouldUseVirtualFocus;
    // When using virtual focus, make sure the focused key gets updated on press.
    if (shouldUseVirtualFocus) // oxlint-disable-next-line react/react-compiler
    itemPressProps = (0, _mergeProps.mergeProps)(itemPressProps, {
        onPressStart (e) {
            if (e.pointerType !== 'touch') {
                manager.setFocused(true);
                manager.setFocusedKey(key);
            }
        },
        onPress (e) {
            if (e.pointerType === 'touch') {
                manager.setFocused(true);
                manager.setFocusedKey(key);
            }
        }
    });
    if (collectionItemProps) {
        for (let key of [
            'onPressStart',
            'onPressEnd',
            'onPressChange',
            'onPress',
            'onPressUp',
            'onClick'
        ])if (collectionItemProps[key]) // oxlint-disable-next-line react/react-compiler
        itemPressProps[key] = (0, _chain.chain)(itemPressProps[key], collectionItemProps[key]);
    }
    let { pressProps, isPressed } = (0, _usePress.usePress)(itemPressProps);
    // Double clicking with a mouse with selectionBehavior = 'replace' performs an action.
    let onDoubleClick = hasSecondaryAction ? (e)=>{
        if (modality.current === 'mouse') {
            e.stopPropagation();
            e.preventDefault();
            performAction(e);
        }
    } : undefined;
    // Long pressing an item with touch when selectionBehavior = 'replace' switches the selection behavior
    // to 'toggle'. This changes the single tap behavior from performing an action (i.e. navigating) to
    // selecting, and may toggle the appearance of a UI affordance like checkboxes on each item.
    let { longPressProps } = (0, _useLongPress.useLongPress)({
        isDisabled: !longPressEnabled,
        onLongPress (e) {
            if (e.pointerType === 'touch') {
                onSelect(e);
                manager.setSelectionBehavior('toggle');
            }
        }
    });
    // Prevent native drag and drop on long press if we also select on long press.
    // Once the user is in selection mode, they can long press again to drag.
    // Use a capturing listener to ensure this runs before useDrag, regardless of
    // the order the props get merged.
    let onDragStartCapture = (e)=>{
        if (modality.current === 'touch' && longPressEnabledOnPressStart.current) e.preventDefault();
    };
    // Prevent default on link clicks so that we control exactly
    // when they open (to match selection behavior).
    let onClick = linkBehavior !== 'none' && manager.isLink(key) ? (e)=>{
        if (!(0, _openLink.openLink).isOpening) e.preventDefault();
    } : undefined;
    let mergedItemProps = (0, _mergeProps.mergeProps)(// oxlint-disable-next-line react/react-compiler
    itemProps, allowsSelection || hasPrimaryAction || shouldUseVirtualFocus && !isDisabled ? pressProps : {}, longPressEnabled ? longPressProps : {}, // oxlint-disable-next-line react/react-compiler
    {
        onDoubleClick,
        onDragStartCapture,
        onClick,
        id
    }, // Prevent DOM focus from moving on mouse down when using virtual focus
    shouldUseVirtualFocus ? {
        onMouseDown: (e)=>e.preventDefault()
    } : undefined);
    // Guard against presses triggering selection when they happen on interactive children or collection items from different collections
    // will need to trigger selection if the target is itself a collection item belonging to the same collection parent (aka a cell in a row) but
    // not if the target is a child of a different collections aka taggroup in table cell.
    let isChildInteraction = (target)=>{
        let el = target;
        while(el && el !== ref.current){
            let elCollection = el.getAttribute('data-collection');
            if (elCollection != null) return elCollection !== collectionId;
            el = el.parentElement;
        }
        return (0, _isFocusable.isTabbable)(target);
    };
    let baseOnPointerDown = mergedItemProps.onPointerDown;
    mergedItemProps.onPointerDown = (e)=>{
        let target = (0, _domfunctions.getEventTarget)(e);
        if (target && target !== ref.current && isChildInteraction(target)) {
            e.stopPropagation();
            return;
        }
        baseOnPointerDown?.(e);
    };
    let baseOnMouseDown = mergedItemProps.onMouseDown;
    mergedItemProps.onMouseDown = (e)=>{
        let target = (0, _domfunctions.getEventTarget)(e);
        if (target && target !== ref.current && isChildInteraction(target)) {
            e.stopPropagation();
            return;
        }
        baseOnMouseDown?.(e);
    };
    return {
        itemProps: mergedItemProps,
        isPressed,
        isSelected: manager.isSelected(key),
        isFocused: manager.isFocused && manager.focusedKey === key,
        isDisabled,
        allowsSelection,
        hasAction
    };
}
function isActionKey(key) {
    return key === 'Enter';
}
function isSelectionKey(key) {
    return key === ' ';
}

},{"../utils/chain":"bQmEj","../interactions/focusSafely":"2xT6S","../utils/shadowdom/DOMFunctions":"8kfpz","./utils":"jwa0D","../utils/keyboard":"fXhXT","../utils/isFocusable":"dLPRV","../utils/mergeProps":"jycxS","../focus/virtualFocus":"hd0wy","../utils/openLink":"gH3wl","../interactions/usePress":"3S2KR","react":"gOP0N","../utils/useId":"fQAcb","../interactions/useLongPress":"b7u5T","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4luyT":[function(require,module,exports,__globalThis) {
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
 * An interface for reading and updating multiple selection state.
 */ parcelHelpers.export(exports, "SelectionManager", ()=>SelectionManager);
var _getChildNodes = require("../collections/getChildNodes");
var _selection = require("./Selection");
class SelectionManager {
    collection;
    state;
    allowsCellSelection;
    _isSelectAll;
    layoutDelegate;
    fullCollection;
    constructor(collection, state, options){
        this.collection = collection;
        this.state = state;
        this.allowsCellSelection = options?.allowsCellSelection ?? false;
        this._isSelectAll = null;
        this.layoutDelegate = options?.layoutDelegate || null;
        this.fullCollection = options?.fullCollection || null;
    }
    /**
   * The type of selection that is allowed in the collection.
   */ get selectionMode() {
        return this.state.selectionMode;
    }
    /**
   * Whether the collection allows empty selection.
   */ get disallowEmptySelection() {
        return this.state.disallowEmptySelection;
    }
    /**
   * The selection behavior for the collection.
   */ get selectionBehavior() {
        return this.state.selectionBehavior;
    }
    /**
   * Sets the selection behavior for the collection.
   */ setSelectionBehavior(selectionBehavior) {
        this.state.setSelectionBehavior(selectionBehavior);
    }
    /**
   * Whether the collection is currently focused.
   */ get isFocused() {
        return this.state.isFocused;
    }
    /**
   * Sets whether the collection is focused.
   */ setFocused(isFocused) {
        this.state.setFocused(isFocused);
    }
    /**
   * The current focused key in the collection.
   */ get focusedKey() {
        return this.state.focusedKey;
    }
    /** Whether the first or last child of the focused key should receive focus. */ get childFocusStrategy() {
        return this.state.childFocusStrategy;
    }
    /**
   * Sets the focused key.
   */ setFocusedKey(key, childFocusStrategy) {
        if (key == null || this.collection.getItem(key)) this.state.setFocusedKey(key, childFocusStrategy);
    }
    /**
   * The currently selected keys in the collection.
   */ get selectedKeys() {
        return this.state.selectedKeys === 'all' ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
    }
    /**
   * The raw selection value for the collection.
   * Either 'all' for select all, or a set of keys.
   */ get rawSelection() {
        return this.state.selectedKeys;
    }
    /**
   * Returns whether a key is selected.
   */ isSelected(key) {
        if (this.state.selectionMode === 'none') return false;
        let mappedKey = this.getKey(key);
        if (mappedKey == null) return false;
        return this.state.selectedKeys === 'all' ? this.canSelectItem(mappedKey) : this.state.selectedKeys.has(mappedKey);
    }
    /**
   * Whether the selection is empty.
   */ get isEmpty() {
        return this.state.selectedKeys !== 'all' && this.state.selectedKeys.size === 0;
    }
    /**
   * Whether all items in the collection are selected.
   */ get isSelectAll() {
        if (this.isEmpty) return false;
        if (this.state.selectedKeys === 'all') return true;
        if (this._isSelectAll != null) return this._isSelectAll;
        let allKeys = this.getSelectAllKeys();
        let selectedKeys = this.state.selectedKeys;
        this._isSelectAll = allKeys.every((k)=>selectedKeys.has(k));
        return this._isSelectAll;
    }
    get firstSelectedKey() {
        let first = null;
        for (let key of this.state.selectedKeys){
            let item = this.collection.getItem(key);
            if (!first || item && (0, _getChildNodes.compareNodeOrder)(this.collection, item, first) < 0) first = item;
        }
        return first?.key ?? null;
    }
    get lastSelectedKey() {
        let last = null;
        for (let key of this.state.selectedKeys){
            let item = this.collection.getItem(key);
            if (!last || item && (0, _getChildNodes.compareNodeOrder)(this.collection, item, last) > 0) last = item;
        }
        return last?.key ?? null;
    }
    get disabledKeys() {
        return this.state.disabledKeys;
    }
    get disabledBehavior() {
        return this.state.disabledBehavior;
    }
    /**
   * Extends the selection to the given key.
   */ extendSelection(toKey) {
        if (this.selectionMode === 'none') return;
        if (this.selectionMode === 'single') {
            this.replaceSelection(toKey);
            return;
        }
        let mappedToKey = this.getKey(toKey);
        if (mappedToKey == null) return;
        let selection;
        // Only select the one key if coming from a select all.
        if (this.state.selectedKeys === 'all') selection = new (0, _selection.Selection)([
            mappedToKey
        ], mappedToKey, mappedToKey);
        else {
            let selectedKeys = this.state.selectedKeys;
            let anchorKey = selectedKeys.anchorKey ?? mappedToKey;
            selection = new (0, _selection.Selection)(selectedKeys, anchorKey, mappedToKey);
            for (let key of this.getKeyRange(anchorKey, selectedKeys.currentKey ?? mappedToKey))selection.delete(key);
            for (let key of this.getKeyRange(mappedToKey, anchorKey))if (this.canSelectItem(key)) selection.add(key);
        }
        this.state.setSelectedKeys(selection);
    }
    getKeyRange(from, to) {
        let fromItem = this.collection.getItem(from);
        let toItem = this.collection.getItem(to);
        if (fromItem && toItem) {
            if ((0, _getChildNodes.compareNodeOrder)(this.collection, fromItem, toItem) <= 0) return this.getKeyRangeInternal(from, to);
            return this.getKeyRangeInternal(to, from);
        }
        return [];
    }
    getKeyRangeInternal(from, to) {
        if (this.layoutDelegate?.getKeyRange) return this.layoutDelegate.getKeyRange(from, to);
        let keys = [];
        let key = from;
        while(key != null){
            let item = this.collection.getItem(key);
            if (item && (item.type === 'item' || item.type === 'cell' && this.allowsCellSelection)) keys.push(key);
            if (key === to) return keys;
            key = this.collection.getKeyAfter(key);
        }
        return [];
    }
    getKey(key) {
        let item = this.collection.getItem(key);
        if (!item) // ¯\_(ツ)_/¯
        return key;
        // If cell selection is allowed, just return the key.
        if (item.type === 'cell' && this.allowsCellSelection) return key;
        // Find a parent item to select
        while(item && item.type !== 'item' && item.parentKey != null)item = this.collection.getItem(item.parentKey);
        if (!item || item.type !== 'item') return null;
        return item.key;
    }
    /**
   * Toggles whether the given key is selected.
   */ toggleSelection(key) {
        if (this.selectionMode === 'none') return;
        if (this.selectionMode === 'single' && !this.isSelected(key)) {
            this.replaceSelection(key);
            return;
        }
        let mappedKey = this.getKey(key);
        if (mappedKey == null) return;
        let keys = new (0, _selection.Selection)(this.state.selectedKeys === 'all' ? this.getSelectAllKeys() : this.state.selectedKeys);
        if (keys.has(mappedKey)) keys.delete(mappedKey);
        else if (this.canSelectItem(mappedKey)) {
            keys.add(mappedKey);
            keys.anchorKey = mappedKey;
            keys.currentKey = mappedKey;
        }
        if (this.disallowEmptySelection && keys.size === 0) return;
        this.state.setSelectedKeys(keys);
    }
    /**
   * Replaces the selection with only the given key.
   */ replaceSelection(key) {
        if (this.selectionMode === 'none') return;
        let mappedKey = this.getKey(key);
        if (mappedKey == null) return;
        let selection = this.canSelectItem(mappedKey) ? new (0, _selection.Selection)([
            mappedKey
        ], mappedKey, mappedKey) : new (0, _selection.Selection)();
        this.state.setSelectedKeys(selection);
    }
    /**
   * Replaces the selection with the given keys.
   */ setSelectedKeys(keys) {
        if (this.selectionMode === 'none') return;
        let selection = new (0, _selection.Selection)();
        for (let key of keys){
            let mappedKey = this.getKey(key);
            if (mappedKey != null) {
                selection.add(mappedKey);
                if (this.selectionMode === 'single') break;
            }
        }
        this.state.setSelectedKeys(selection);
    }
    getSelectAllKeys() {
        // Use the full (unfiltered) collection when available so that materializing
        // the 'all' selection includes items that are currently filtered out (e.g. by Autocomplete).
        let collection = this.fullCollection ?? this.collection;
        let keys = [];
        let addKeys = (key)=>{
            while(key != null){
                if (this.canSelectItemIn(key, collection)) {
                    let item = collection.getItem(key);
                    if (item?.type === 'item') keys.push(key);
                    // Add child keys. If cell selection is allowed, then include item children too.
                    if (item?.hasChildNodes && (this.allowsCellSelection || item.type !== 'item')) addKeys((0, _getChildNodes.getFirstItem)((0, _getChildNodes.getChildNodes)(item, collection))?.key ?? null);
                }
                key = collection.getKeyAfter(key);
            }
        };
        addKeys(collection.getFirstKey());
        return keys;
    }
    /**
   * Selects all items in the collection.
   */ selectAll() {
        if (!this.isSelectAll && this.selectionMode === 'multiple') this.state.setSelectedKeys('all');
    }
    /**
   * Removes all keys from the selection.
   */ clearSelection() {
        if (!this.disallowEmptySelection && (this.state.selectedKeys === 'all' || this.state.selectedKeys.size > 0)) this.state.setSelectedKeys(new (0, _selection.Selection)());
    }
    /**
   * Toggles between select all and an empty selection.
   */ toggleSelectAll() {
        if (this.isSelectAll) this.clearSelection();
        else this.selectAll();
    }
    select(key, e) {
        if (this.selectionMode === 'none') return;
        if (this.selectionMode === 'single') {
            if (this.isSelected(key) && !this.disallowEmptySelection) this.toggleSelection(key);
            else this.replaceSelection(key);
        } else if (this.selectionBehavior === 'toggle' || e && (e.pointerType === 'touch' || e.pointerType === 'virtual')) // if touch or virtual (VO) then we just want to toggle, otherwise it's impossible to multi select because they don't have modifier keys
        this.toggleSelection(key);
        else this.replaceSelection(key);
    }
    /**
   * Returns whether the current selection is equal to the given selection.
   */ isSelectionEqual(selection) {
        if (selection === this.state.selectedKeys) return true;
        // Check if the set of keys match.
        let selectedKeys = this.selectedKeys;
        if (selection.size !== selectedKeys.size) return false;
        for (let key of selection){
            if (!selectedKeys.has(key)) return false;
        }
        for (let key of selectedKeys){
            if (!selection.has(key)) return false;
        }
        return true;
    }
    canSelectItem(key) {
        return this.canSelectItemIn(key, this.collection);
    }
    canSelectItemIn(key, collection) {
        if (this.state.selectionMode === 'none' || this.state.disabledKeys.has(key)) return false;
        let item = collection.getItem(key);
        if (!item || item?.props?.isDisabled || item.type === 'cell' && !this.allowsCellSelection) return false;
        return true;
    }
    isDisabled(key) {
        let item = this.collection.getItem(key);
        return this.state.disabledBehavior === 'all' && (this.state.disabledKeys.has(key) || !!item?.props?.isDisabled) && item?.props?.disabledBehavior !== 'selection';
    }
    isLink(key) {
        return !!this.collection.getItem(key)?.props?.href;
    }
    getItemProps(key) {
        return this.collection.getItem(key)?.props;
    }
    withCollection(collection) {
        return new SelectionManager(collection, this.state, {
            allowsCellSelection: this.allowsCellSelection,
            layoutDelegate: this.layoutDelegate || undefined,
            fullCollection: this.fullCollection ?? this.collection
        });
    }
}

},{"../collections/getChildNodes":"9KbhA","./Selection":"lf95v","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lf95v":[function(require,module,exports,__globalThis) {
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
 * A Selection is a special Set containing Keys, which also has an anchor
 * and current selected key for use when range selecting.
 */ parcelHelpers.export(exports, "Selection", ()=>Selection);
class Selection extends Set {
    anchorKey;
    currentKey;
    constructor(keys, anchorKey, currentKey){
        super(keys);
        if (keys instanceof Selection) {
            this.anchorKey = anchorKey ?? keys.anchorKey;
            this.currentKey = currentKey ?? keys.currentKey;
        } else {
            this.anchorKey = anchorKey ?? null;
            this.currentKey = currentKey ?? null;
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3hcm9":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useCollection", ()=>useCollection);
var _collectionBuilder = require("./CollectionBuilder");
var _react = require("react");
function useCollection(props, factory, context) {
    let builder = (0, _react.useMemo)(()=>new (0, _collectionBuilder.CollectionBuilder)(), []);
    let { children, items, collection } = props;
    let result = (0, _react.useMemo)(()=>{
        if (collection) return collection;
        let nodes = builder.build({
            children,
            items
        }, context);
        return factory(nodes);
    }, [
        builder,
        children,
        items,
        collection,
        context,
        factory
    ]);
    return result;
}

},{"./CollectionBuilder":"cdvSh","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cdvSh":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "CollectionBuilder", ()=>CollectionBuilder);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
class CollectionBuilder {
    context;
    cache = new WeakMap();
    build(props, context) {
        this.context = context;
        return iterable(()=>this.iterateCollection(props));
    }
    *iterateCollection(props) {
        let { children, items } = props;
        if ((0, _reactDefault.default).isValidElement(children) && children.type === (0, _reactDefault.default).Fragment) yield* this.iterateCollection({
            children: children.props.children,
            items
        });
        else if (typeof children === 'function') {
            if (!items) throw new Error('props.children was a function but props.items is missing');
            let index = 0;
            for (let item of items){
                yield* this.getFullNode({
                    value: item,
                    index
                }, {
                    renderer: children
                });
                index++;
            }
        } else {
            let items = [];
            (0, _reactDefault.default).Children.forEach(children, (child)=>{
                if (child) items.push(child);
            });
            let index = 0;
            for (let item of items){
                let nodes = this.getFullNode({
                    element: item,
                    index: index
                }, {});
                for (let node of nodes){
                    index++;
                    yield node;
                }
            }
        }
    }
    getKey(item, partialNode, state, parentKey) {
        if (item.key != null) return item.key;
        if (partialNode.type === 'cell' && partialNode.key != null) return `${parentKey}${partialNode.key}`;
        let v = partialNode.value;
        if (v != null) {
            let key = v.key ?? v.id;
            if (key == null) throw new Error('No key found for item');
            return key;
        }
        return parentKey ? `${parentKey}.${partialNode.index}` : `$.${partialNode.index}`;
    }
    getChildState(state, partialNode) {
        return {
            renderer: partialNode.renderer || state.renderer
        };
    }
    *getFullNode(partialNode, state, parentKey, parentNode) {
        if ((0, _reactDefault.default).isValidElement(partialNode.element) && partialNode.element.type === (0, _reactDefault.default).Fragment) {
            let children = [];
            (0, _reactDefault.default).Children.forEach(partialNode.element.props.children, (child)=>{
                children.push(child);
            });
            let index = partialNode.index ?? 0;
            for (const child of children)yield* this.getFullNode({
                element: child,
                index: index++
            }, state, parentKey, parentNode);
            return;
        }
        // If there's a value instead of an element on the node, and a parent renderer function is available,
        // use it to render an element for the value.
        let element = partialNode.element;
        if (!element && partialNode.value && state && state.renderer) {
            let cached = this.cache.get(partialNode.value);
            if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
                cached.index = partialNode.index;
                cached.parentKey = parentNode ? parentNode.key : null;
                yield cached;
                return;
            }
            element = state.renderer(partialNode.value);
        }
        // If there's an element with a getCollectionNode function on its type, then it's a supported component.
        // Call this function to get a partial node, and recursively build a full node from there.
        if ((0, _reactDefault.default).isValidElement(element)) {
            let type = element.type;
            if (typeof type !== 'function' && typeof type.getCollectionNode !== 'function') {
                let name = element.type;
                throw new Error(`Unknown element <${name}> in collection.`);
            }
            let childNodes = type.getCollectionNode(element.props, this.context);
            let index = partialNode.index ?? 0;
            let result = childNodes.next();
            while(!result.done && result.value){
                let childNode = result.value;
                partialNode.index = index;
                let nodeKey = childNode.key ?? null;
                if (nodeKey == null) nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
                let nodes = this.getFullNode({
                    ...childNode,
                    key: nodeKey,
                    index,
                    wrapper: compose(partialNode.wrapper, childNode.wrapper)
                }, this.getChildState(state, childNode), parentKey ? `${parentKey}${element.key}` : element.key, parentNode);
                let children = [
                    ...nodes
                ];
                for (let node of children){
                    // Cache the node based on its value
                    node.value = childNode.value ?? partialNode.value ?? null;
                    if (node.value) this.cache.set(node.value, node);
                    // The partial node may have specified a type for the child in order to specify a constraint.
                    // Verify that the full node that was built recursively matches this type.
                    if (partialNode.type && node.type !== partialNode.type) throw new Error(`Unsupported type <${capitalize(node.type)}> in <${capitalize(parentNode?.type ?? 'unknown parent type')}>. Only <${capitalize(partialNode.type)}> is supported.`);
                    index++;
                    yield node;
                }
                result = childNodes.next(children);
            }
            return;
        }
        // Ignore invalid elements
        if (partialNode.key == null || partialNode.type == null) return;
        // Create full node
        let builder = this;
        let node = {
            type: partialNode.type,
            props: partialNode.props,
            key: partialNode.key,
            parentKey: parentNode ? parentNode.key : null,
            value: partialNode.value ?? null,
            level: (parentNode?.level ?? 0) + (parentNode?.type === 'item' ? 1 : 0),
            index: partialNode.index,
            rendered: partialNode.rendered,
            textValue: partialNode.textValue ?? '',
            'aria-label': partialNode['aria-label'],
            wrapper: partialNode.wrapper,
            shouldInvalidate: partialNode.shouldInvalidate,
            hasChildNodes: partialNode.hasChildNodes || false,
            childNodes: iterable(function*() {
                if (!partialNode.hasChildNodes || !partialNode.childNodes) return;
                let index = 0;
                for (let child of partialNode.childNodes()){
                    // Ensure child keys are globally unique by prepending the parent node's key
                    if (child.key != null) // TODO: Remove this line entirely and enforce that users always provide unique keys.
                    // Currently this line will have issues when a parent has a key `a` and a child with key `bc`
                    // but another parent has key `ab` and its child has a key `c`. The combined keys would result in both
                    // children having a key of `abc`.
                    child.key = `${node.key}${child.key}`;
                    let nodes = builder.getFullNode({
                        ...child,
                        index
                    }, builder.getChildState(state, child), node.key, node);
                    for (let node of nodes){
                        index++;
                        yield node;
                    }
                }
            })
        };
        yield node;
    }
}
// Wraps an iterator function as an iterable object, and caches the results.
function iterable(iterator) {
    let cache = [];
    let iterable = null;
    return {
        *[Symbol.iterator] () {
            for (let item of cache)yield item;
            if (!iterable) iterable = iterator();
            for (let item of iterable){
                cache.push(item);
                yield item;
            }
        }
    };
}
function compose(outer, inner) {
    if (outer && inner) return (element)=>outer(inner(element));
    if (outer) return outer;
    if (inner) return inner;
}
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"c53PS":[function(require,module,exports,__globalThis) {
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
 * Manages state for multiple selection and focus in a collection.
 */ parcelHelpers.export(exports, "useMultipleSelectionState", ()=>useMultipleSelectionState);
var _selection = require("./Selection");
var _useControlledState = require("../utils/useControlledState");
var _react = require("react");
function equalSets(setA, setB) {
    if (setA.size !== setB.size) return false;
    for (let item of setA){
        if (!setB.has(item)) return false;
    }
    return true;
}
function useMultipleSelectionState(props) {
    let { selectionMode = 'none', disallowEmptySelection = false, allowDuplicateSelectionEvents, selectionBehavior: selectionBehaviorProp = 'toggle', disabledBehavior = 'all' } = props;
    // We want synchronous updates to `isFocused` and `focusedKey` after their setters are called.
    // But we also need to trigger a react re-render. So, we have both a ref (sync) and state (async).
    let isFocusedRef = (0, _react.useRef)(false);
    let [, setFocused] = (0, _react.useState)(false);
    let focusedKeyRef = (0, _react.useRef)(null);
    let childFocusStrategyRef = (0, _react.useRef)(null);
    let [, setFocusedKey] = (0, _react.useState)(null);
    let selectedKeysProp = (0, _react.useMemo)(()=>convertSelection(props.selectedKeys), [
        props.selectedKeys
    ]);
    let defaultSelectedKeys = (0, _react.useMemo)(()=>convertSelection(props.defaultSelectedKeys, new (0, _selection.Selection)()), [
        props.defaultSelectedKeys
    ]);
    let [selectedKeys, setSelectedKeys] = (0, _useControlledState.useControlledState)(selectedKeysProp, defaultSelectedKeys, props.onSelectionChange);
    let disabledKeysProp = (0, _react.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let [selectionBehavior, setSelectionBehavior] = (0, _react.useState)(selectionBehaviorProp);
    // If the selectionBehavior prop is set to replace, but the current state is toggle (e.g. due to long press
    // to enter selection mode on touch), and the selection becomes empty, reset the selection behavior.
    if (selectionBehaviorProp === 'replace' && selectionBehavior === 'toggle' && typeof selectedKeys === 'object' && selectedKeys.size === 0) setSelectionBehavior('replace');
    // If the selectionBehavior prop changes, update the state as well.
    let lastSelectionBehavior = (0, _react.useRef)(selectionBehaviorProp);
    (0, _react.useEffect)(()=>{
        if (selectionBehaviorProp !== lastSelectionBehavior.current) {
            setSelectionBehavior(selectionBehaviorProp);
            lastSelectionBehavior.current = selectionBehaviorProp;
        }
    }, [
        selectionBehaviorProp
    ]);
    return {
        selectionMode,
        disallowEmptySelection,
        selectionBehavior,
        setSelectionBehavior,
        get isFocused () {
            return isFocusedRef.current;
        },
        setFocused (f) {
            isFocusedRef.current = f;
            setFocused(f);
        },
        get focusedKey () {
            return focusedKeyRef.current;
        },
        get childFocusStrategy () {
            return childFocusStrategyRef.current;
        },
        setFocusedKey (k, childFocusStrategy = 'first') {
            focusedKeyRef.current = k;
            childFocusStrategyRef.current = childFocusStrategy;
            setFocusedKey(k);
        },
        selectedKeys,
        setSelectedKeys (keys) {
            if (allowDuplicateSelectionEvents || !equalSets(keys, selectedKeys)) setSelectedKeys(keys);
        },
        disabledKeys: disabledKeysProp,
        disabledBehavior
    };
}
function convertSelection(selection, defaultValue) {
    if (!selection) return defaultValue;
    return selection === 'all' ? 'all' : new (0, _selection.Selection)(selection);
}

},{"./Selection":"lf95v","../utils/useControlledState":"8yNBD","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

