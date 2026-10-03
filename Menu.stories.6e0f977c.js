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
})({"3S2KR":[function(require,module,exports,__globalThis) {
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
 * Handles press interactions across mouse, touch, keyboard, and screen readers.
 * It normalizes behavior across browsers and platforms, and handles many nuances
 * of dealing with pointer and keyboard events.
 */ parcelHelpers.export(exports, "usePress", ()=>usePress);
var _chain = require("../utils/chain");
var _utils = require("./utils");
var _textSelection = require("./textSelection");
var _reactDom = require("react-dom");
var _focusWithoutScrolling = require("../utils/focusWithoutScrolling");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _getNonce = require("../utils/getNonce");
var _domHelpers = require("../utils/domHelpers");
var _platform = require("../utils/platform");
var _isVirtualEvent = require("../utils/isVirtualEvent");
var _mergeProps = require("../utils/mergeProps");
var _openLink = require("../utils/openLink");
var _context = require("./context");
var _react = require("react");
var _useEffectEvent = require("../utils/useEffectEvent");
var _useGlobalListeners = require("../utils/useGlobalListeners");
var _useSyncRef = require("../utils/useSyncRef");
function usePressResponderContext(props) {
    // Consume context from <PressResponder> and merge with props.
    let context = (0, _react.useContext)((0, _context.PressResponderContext));
    if (context) {
        // Prevent mergeProps from merging ref.
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let { register, ref, ...contextProps } = context;
        props = (0, _mergeProps.mergeProps)(contextProps, props);
        register();
    }
    (0, _useSyncRef.useSyncRef)(context, props.ref);
    return props;
}
class PressEvent {
    type;
    pointerType;
    target;
    shiftKey;
    ctrlKey;
    metaKey;
    altKey;
    x;
    y;
    key;
    #shouldStopPropagation = true;
    constructor(type, pointerType, originalEvent, state){
        let currentTarget = state?.target ?? originalEvent.currentTarget;
        const rect = currentTarget?.getBoundingClientRect();
        let x, y = 0;
        let clientX, clientY = null;
        if (originalEvent.clientX != null && originalEvent.clientY != null) {
            clientX = originalEvent.clientX;
            clientY = originalEvent.clientY;
        }
        if (rect) {
            if (clientX != null && clientY != null) {
                x = clientX - rect.left;
                y = clientY - rect.top;
            } else {
                x = rect.width / 2;
                y = rect.height / 2;
            }
        }
        this.type = type;
        this.pointerType = pointerType;
        this.target = originalEvent.currentTarget;
        this.shiftKey = originalEvent.shiftKey;
        this.metaKey = originalEvent.metaKey;
        this.ctrlKey = originalEvent.ctrlKey;
        this.altKey = originalEvent.altKey;
        this.x = x;
        this.y = y;
        this.key = originalEvent.key;
    }
    continuePropagation() {
        this.#shouldStopPropagation = false;
    }
    get shouldStopPropagation() {
        return this.#shouldStopPropagation;
    }
}
const LINK_CLICKED = Symbol('linkClicked');
const STYLE_ID = 'react-aria-pressable-style';
const PRESSABLE_ATTRIBUTE = 'data-react-aria-pressable';
function usePress(props) {
    let { onPress, onPressChange, onPressStart, onPressEnd, onPressUp, onClick, isDisabled, isPressed: isPressedProp, preventFocusOnPress, shouldCancelOnPointerExit, allowTextSelectionOnPress, ref: domRef, ...domProps } = usePressResponderContext(props);
    let [isPressed, setPressed] = (0, _react.useState)(false);
    let ref = (0, _react.useRef)({
        isPressed: false,
        ignoreEmulatedMouseEvents: false,
        didFirePressStart: false,
        isTriggeringEvent: false,
        activePointerId: null,
        target: null,
        isOverTarget: false,
        pointerType: null,
        disposables: []
    });
    let { addGlobalListener, removeAllGlobalListeners } = (0, _useGlobalListeners.useGlobalListeners)();
    let triggerPressStart = (0, _react.useCallback)((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled || state.didFirePressStart) return false;
        let shouldStopPropagation = true;
        state.isTriggeringEvent = true;
        if (onPressStart) {
            let event = new PressEvent('pressstart', pointerType, originalEvent);
            onPressStart(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(true);
        state.isTriggeringEvent = false;
        state.didFirePressStart = true;
        setPressed(true);
        return shouldStopPropagation;
    }, [
        isDisabled,
        onPressStart,
        onPressChange
    ]);
    let triggerPressEnd = (0, _react.useCallback)((originalEvent, pointerType, wasPressed = true)=>{
        let state = ref.current;
        if (!state.didFirePressStart) return false;
        state.didFirePressStart = false;
        state.isTriggeringEvent = true;
        let shouldStopPropagation = true;
        if (onPressEnd) {
            let event = new PressEvent('pressend', pointerType, originalEvent);
            onPressEnd(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(false);
        setPressed(false);
        if (onPress && wasPressed && !isDisabled) {
            let event = new PressEvent('press', pointerType, originalEvent);
            onPress(event);
            shouldStopPropagation &&= event.shouldStopPropagation;
        }
        state.isTriggeringEvent = false;
        return shouldStopPropagation;
    }, [
        isDisabled,
        onPressEnd,
        onPressChange,
        onPress
    ]);
    let triggerPressEndEvent = (0, _useEffectEvent.useEffectEvent)(triggerPressEnd);
    let triggerPressUp = (0, _react.useCallback)((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled) return false;
        if (onPressUp) {
            state.isTriggeringEvent = true;
            let event = new PressEvent('pressup', pointerType, originalEvent);
            onPressUp(event);
            state.isTriggeringEvent = false;
            return event.shouldStopPropagation;
        }
        return true;
    }, [
        isDisabled,
        onPressUp
    ]);
    let triggerPressUpEvent = (0, _useEffectEvent.useEffectEvent)(triggerPressUp);
    let cancel = (0, _react.useCallback)((e)=>{
        let state = ref.current;
        if (state.isPressed && state.target) {
            if (state.didFirePressStart && state.pointerType != null) triggerPressEnd(createEvent(state.target, e), state.pointerType, false);
            state.isPressed = false;
            state.isOverTarget = false;
            state.activePointerId = null;
            state.pointerType = null;
            removeAllGlobalListeners();
            if (!allowTextSelectionOnPress) (0, _textSelection.restoreTextSelection)(state.target);
            for (let dispose of state.disposables)dispose();
            state.disposables = [];
        }
    }, [
        allowTextSelectionOnPress,
        removeAllGlobalListeners,
        triggerPressEnd
    ]);
    let cancelEvent = (0, _useEffectEvent.useEffectEvent)(cancel);
    (0, _react.useEffect)(()=>{
        if (isDisabled && ref.current.isPressed) cancelEvent({
            currentTarget: ref.current.target,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false,
            altKey: false
        });
    }, [
        isDisabled
    ]);
    let cancelOnPointerExit = (0, _react.useCallback)((e)=>{
        if (shouldCancelOnPointerExit) cancel(e);
    }, [
        shouldCancelOnPointerExit,
        cancel
    ]);
    let triggerClick = (0, _react.useCallback)((e)=>{
        if (isDisabled) return;
        onClick?.(e);
    }, [
        isDisabled,
        onClick
    ]);
    let triggerSyntheticClick = (0, _react.useCallback)((e, target)=>{
        if (isDisabled) return;
        // Some third-party libraries pass in onClick instead of onPress.
        // Create a fake mouse event and trigger onClick as well.
        // This matches the browser's native activation behavior for certain elements (e.g. button).
        // https://html.spec.whatwg.org/#activation
        // https://html.spec.whatwg.org/#fire-a-synthetic-pointer-event
        if (onClick) {
            let event = new MouseEvent('click', e);
            (0, _utils.setEventTarget)(event, target);
            onClick((0, _utils.createSyntheticEvent)(event));
        }
    }, [
        isDisabled,
        onClick
    ]);
    let pressProps = (0, _react.useMemo)(()=>{
        let state = ref.current;
        let pressProps = {
            onKeyDown (e) {
                if (isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && (0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) {
                    if (shouldPreventDefaultKeyboard((0, _domfunctions.getEventTarget)(e), e.key)) e.preventDefault();
                    // If the event is repeating, it may have started on a different element
                    // after which focus moved to the current element. Ignore these events and
                    // only handle the first key down event.
                    let shouldStopPropagation = true;
                    if (!state.isPressed && !e.repeat) {
                        state.target = e.currentTarget;
                        state.isPressed = true;
                        state.pointerType = 'keyboard';
                        shouldStopPropagation = triggerPressStart(e, 'keyboard');
                    }
                    // Focus may move before the key up event, so register the event on the document
                    // instead of the same element where the key down event occurred. Make it capturing so that it will trigger
                    // before stopPropagation from useKeyboard on a child element may happen and thus we can still call triggerPress for the parent element.
                    let originalTarget = e.currentTarget;
                    let pressUp = (e)=>{
                        if (isValidKeyboardEvent(e, originalTarget) && !e.repeat && (0, _domfunctions.nodeContains)(originalTarget, (0, _domfunctions.getEventTarget)(e)) && state.target) triggerPressUpEvent(createEvent(state.target, e), 'keyboard');
                    };
                    addGlobalListener((0, _domHelpers.getOwnerDocument)(e.currentTarget), 'keyup', (0, _chain.chain)(pressUp, onKeyUp), true);
                    if (shouldStopPropagation) e.stopPropagation();
                    // Keep track of the keydown events that occur while the Meta (e.g. Command) key is held.
                    // macOS has a bug where keyup events are not fired while the Meta key is down.
                    // When the Meta key itself is released we will get an event for that, and we'll act as if
                    // all of these other keys were released as well.
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1393524
                    // https://bugs.webkit.org/show_bug.cgi?id=55291
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=1299553
                    if (e.metaKey && (0, _platform.isMac)()) state.metaKeyEvents?.set(e.key, e.nativeEvent);
                } else if (e.key === 'Meta') state.metaKeyEvents = new Map();
            },
            onClick (e) {
                if (e && !(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) return;
                if (e && e.button === 0 && !state.isTriggeringEvent && !(0, _openLink.openLink).isOpening) {
                    let shouldStopPropagation = true;
                    if (isDisabled) e.preventDefault();
                    // If triggered from a screen reader or by using element.click(),
                    // trigger as if it were a keyboard click.
                    if (!state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === 'virtual' || (0, _isVirtualEvent.isVirtualClick)(e.nativeEvent))) {
                        let stopPressStart = triggerPressStart(e, 'virtual');
                        let stopPressUp = triggerPressUpEvent(e, 'virtual');
                        let stopPressEnd = triggerPressEndEvent(e, 'virtual');
                        triggerClick(e);
                        shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
                    } else if (state.isPressed && state.pointerType !== 'keyboard') {
                        let pointerType = state.pointerType || e.nativeEvent.pointerType || 'virtual';
                        let stopPressUp = triggerPressUpEvent(createEvent(e.currentTarget, e), pointerType);
                        let stopPressEnd = triggerPressEndEvent(createEvent(e.currentTarget, e), pointerType, true);
                        shouldStopPropagation = stopPressUp && stopPressEnd;
                        state.isOverTarget = false;
                        triggerClick(e);
                        // oxlint-disable-next-line react/react-compiler
                        cancelEvent(e);
                    }
                    state.ignoreEmulatedMouseEvents = false;
                    if (shouldStopPropagation) e.stopPropagation();
                }
            }
        };
        let onKeyUp = (e)=>{
            if (state.isPressed && state.target && isValidKeyboardEvent(e, state.target)) {
                if (shouldPreventDefaultKeyboard((0, _domfunctions.getEventTarget)(e), e.key)) e.preventDefault();
                let target = (0, _domfunctions.getEventTarget)(e);
                let wasPressed = (0, _domfunctions.nodeContains)(state.target, target);
                triggerPressEndEvent(createEvent(state.target, e), 'keyboard', wasPressed);
                if (wasPressed) triggerSyntheticClick(e, state.target);
                removeAllGlobalListeners();
                // If a link was triggered with a key other than Enter, open the URL ourselves.
                // This means the link has a role override, and the default browser behavior
                // only applies when using the Enter key.
                if (e.key !== 'Enter' && isHTMLAnchorLink(state.target) && (0, _domfunctions.nodeContains)(state.target, target) && !e[LINK_CLICKED]) {
                    // Store a hidden property on the event so we only trigger link click once,
                    // even if there are multiple usePress instances attached to the element.
                    e[LINK_CLICKED] = true;
                    (0, _openLink.openLink)(state.target, e, false);
                }
                state.isPressed = false;
                state.metaKeyEvents?.delete(e.key);
            } else if (e.key === 'Meta' && state.metaKeyEvents?.size) {
                // If we recorded keydown events that occurred while the Meta key was pressed,
                // and those haven't received keyup events already, fire keyup events ourselves.
                // See comment above for more info about the macOS bug causing this.
                let events = state.metaKeyEvents;
                state.metaKeyEvents = undefined;
                for (let event of events.values())state.target?.dispatchEvent(new KeyboardEvent('keyup', event));
            }
        };
        if (typeof PointerEvent !== 'undefined') {
            pressProps.onPointerDown = (e)=>{
                // Only handle left clicks, and ignore events that bubbled through portals.
                if (e.button !== 0 || !(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) return;
                // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
                // Ignore and let the onClick handler take care of it instead.
                // https://bugs.webkit.org/show_bug.cgi?id=222627
                // https://bugs.webkit.org/show_bug.cgi?id=223202
                if ((0, _isVirtualEvent.isVirtualPointerEvent)(e.nativeEvent)) {
                    state.pointerType = 'virtual';
                    return;
                }
                state.pointerType = e.pointerType;
                let shouldStopPropagation = true;
                if (!state.isPressed) {
                    state.isPressed = true;
                    state.isOverTarget = true;
                    state.activePointerId = e.pointerId;
                    state.target = e.currentTarget;
                    if (!allowTextSelectionOnPress) (0, _textSelection.disableTextSelection)(state.target);
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                    // Release pointer capture so that touch interactions can leave the original target.
                    // This enables onPointerLeave and onPointerEnter to fire.
                    let target = (0, _domfunctions.getEventTarget)(e);
                    if ('releasePointerCapture' in target) {
                        if ('hasPointerCapture' in target) {
                            if (target.hasPointerCapture(e.pointerId)) target.releasePointerCapture(e.pointerId);
                        } else target.releasePointerCapture(e.pointerId);
                    }
                    addGlobalListener((0, _domHelpers.getOwnerDocument)(e.currentTarget), 'pointerup', onPointerUp, false);
                    addGlobalListener((0, _domHelpers.getOwnerDocument)(e.currentTarget), 'pointercancel', onPointerCancel, false);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseDown = (e)=>{
                if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) return;
                if (e.button === 0) {
                    if (preventFocusOnPress) {
                        let dispose = (0, _utils.preventFocus)(e.target);
                        if (dispose) state.disposables.push(dispose);
                    }
                    e.stopPropagation();
                }
            };
            pressProps.onPointerUp = (e)=>{
                // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
                if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e)) || state.pointerType === 'virtual') return;
                // Only handle left clicks. If isPressed is true, delay until onClick.
                if (e.button === 0 && !state.isPressed) triggerPressUpEvent(e, state.pointerType || e.pointerType);
            };
            pressProps.onPointerEnter = (e)=>{
                if (e.pointerId === state.activePointerId && state.target && !state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = true;
                    triggerPressStart(createEvent(state.target, e), state.pointerType);
                }
            };
            pressProps.onPointerLeave = (e)=>{
                if (e.pointerId === state.activePointerId && state.target && state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = false;
                    triggerPressEndEvent(createEvent(state.target, e), state.pointerType, false);
                    cancelOnPointerExit(e);
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
                    if ((0, _domfunctions.nodeContains)(state.target, (0, _domfunctions.getEventTarget)(e)) && state.pointerType != null) {
                        // Wait for onClick to fire onPress. This avoids browser issues when the DOM
                        // is mutated between onPointerUp and onClick, and is more compatible with third party libraries.
                        // https://github.com/adobe/react-spectrum/issues/1513
                        // https://issues.chromium.org/issues/40732224
                        // However, iOS and Android do not focus or fire onClick after a long press.
                        // We work around this by triggering a click ourselves after a timeout.
                        // This timeout is canceled during the click event in case the real one fires first.
                        // The timeout must be at least 32ms, because Safari on iOS delays the click event on
                        // non-form elements without certain ARIA roles (for hover emulation).
                        // https://github.com/WebKit/WebKit/blob/dccfae42bb29bd4bdef052e469f604a9387241c0/Source/WebKit/WebProcess/WebPage/ios/WebPageIOS.mm#L875-L892
                        let clicked = false;
                        let timeout = setTimeout(()=>{
                            if (state.isPressed && state.target instanceof HTMLElement) {
                                if (clicked) cancelEvent(e);
                                else {
                                    (0, _focusWithoutScrolling.focusWithoutScrolling)(state.target);
                                    state.target.click();
                                }
                            }
                        }, 80);
                        // Use a capturing listener to track if a click occurred.
                        // If stopPropagation is called it may never reach our handler.
                        addGlobalListener(e.currentTarget, 'click', ()=>clicked = true, true);
                        state.disposables.push(()=>clearTimeout(timeout));
                    } else cancelEvent(e);
                    // Ignore subsequent onPointerLeave event before onClick on touch devices.
                    state.isOverTarget = false;
                }
            };
            let onPointerCancel = (e)=>{
                cancelEvent(e);
            };
            pressProps.onDragStart = (e)=>{
                if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) return;
                // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
                cancelEvent(e);
            };
        } else var e, e1, e2, e3, e4, e5, e6, e7, e8;
        return pressProps;
    }, [
        addGlobalListener,
        isDisabled,
        preventFocusOnPress,
        removeAllGlobalListeners,
        allowTextSelectionOnPress,
        cancelOnPointerExit,
        triggerPressStart,
        triggerClick,
        triggerSyntheticClick
    ]);
    // Avoid onClick delay for double tap to zoom by default.
    (0, _react.useEffect)(()=>{
        if (!domRef || false) return;
        const ownerDocument = (0, _domHelpers.getOwnerDocument)(domRef.current);
        if (!ownerDocument || !ownerDocument.head || ownerDocument.getElementById(STYLE_ID)) return;
        const style = ownerDocument.createElement('style');
        style.id = STYLE_ID;
        let nonce = (0, _getNonce.getNonce)(ownerDocument);
        if (nonce) style.nonce = nonce;
        // touchAction: 'manipulation' is supposed to be equivalent, but in
        // Safari it causes onPointerCancel not to fire on scroll.
        // https://bugs.webkit.org/show_bug.cgi?id=240917
        style.textContent = `
@layer {
  [${PRESSABLE_ATTRIBUTE}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim();
        ownerDocument.head.prepend(style);
    }, [
        domRef
    ]);
    // Remove user-select: none in case component unmounts immediately after pressStart
    (0, _react.useEffect)(()=>{
        let state = ref.current;
        return ()=>{
            if (!allowTextSelectionOnPress) (0, _textSelection.restoreTextSelection)(state.target ?? undefined);
            for (let dispose of state.disposables)dispose();
            state.disposables = [];
        };
    }, [
        allowTextSelectionOnPress
    ]);
    return {
        isPressed: isPressedProp || isPressed,
        // oxlint-disable-next-line react/react-compiler
        pressProps: (0, _mergeProps.mergeProps)(domProps, pressProps, {
            [PRESSABLE_ATTRIBUTE]: true
        })
    };
}
function isHTMLAnchorLink(target) {
    return target.tagName === 'A' && target.hasAttribute('href');
}
function isValidKeyboardEvent(event, currentTarget) {
    const { key, code } = event;
    const element = currentTarget;
    const role = element.getAttribute('role');
    // Accessibility for keyboards. Space and Enter only.
    // "Spacebar" is for IE 11
    return (key === 'Enter' || key === ' ' || key === 'Spacebar' || code === 'Space') && !(element instanceof (0, _domHelpers.getOwnerWindow)(element).HTMLInputElement && !isValidInputKey(element, key) || element instanceof (0, _domHelpers.getOwnerWindow)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
    !((role === 'link' || !role && isHTMLAnchorLink(element)) && key !== 'Enter');
}
function getTouchFromEvent(event) {
    const { targetTouches } = event;
    if (targetTouches.length > 0) return targetTouches[0];
    return null;
}
function getTouchById(event, pointerId) {
    const changedTouches = event.changedTouches;
    for(let i = 0; i < changedTouches.length; i++){
        const touch = changedTouches[i];
        if (touch.identifier === pointerId) return touch;
    }
    return null;
}
function createTouchEvent(target, e) {
    let clientX = 0;
    let clientY = 0;
    if (e.targetTouches && e.targetTouches.length === 1) {
        clientX = e.targetTouches[0].clientX;
        clientY = e.targetTouches[0].clientY;
    }
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        clientX,
        clientY
    };
}
function createEvent(target, e) {
    let clientX = e.clientX;
    let clientY = e.clientY;
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        clientX,
        clientY,
        key: e.key
    };
}
function getPointClientRect(point) {
    let offsetX = 0;
    let offsetY = 0;
    if (point.width !== undefined) offsetX = point.width / 2;
    else if (point.radiusX !== undefined) offsetX = point.radiusX;
    if (point.height !== undefined) offsetY = point.height / 2;
    else if (point.radiusY !== undefined) offsetY = point.radiusY;
    return {
        top: point.clientY - offsetY,
        right: point.clientX + offsetX,
        bottom: point.clientY + offsetY,
        left: point.clientX - offsetX
    };
}
function areRectanglesOverlapping(a, b) {
    // check if they cannot overlap on x axis
    if (a.left > b.right || b.left > a.right) return false;
    // check if they cannot overlap on y axis
    if (a.top > b.bottom || b.top > a.bottom) return false;
    return true;
}
function isOverTarget(point, target) {
    let rect = target.getBoundingClientRect();
    let pointRect = getPointClientRect(point);
    return areRectanglesOverlapping(rect, pointRect);
}
function shouldPreventDefaultUp(target) {
    if (target instanceof HTMLInputElement) return false;
    if (target instanceof HTMLButtonElement) return target.type !== 'submit' && target.type !== 'reset';
    if (isHTMLAnchorLink(target)) return false;
    return true;
}
function shouldPreventDefaultKeyboard(target, key) {
    // Don't prevent the contextmenu shortcut on mac.
    if ((0, _platform.isMac)() && key === 'Enter') return false;
    if (target instanceof HTMLInputElement) {
        if (key === 'Enter' && (target.type === 'checkbox' || target.type === 'radio')) // Enter on a checkbox or radio should do an implicit form submission, but not toggle the input.
        return false;
        return !isValidInputKey(target, key);
    }
    return shouldPreventDefaultUp(target);
}
const nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
function isValidInputKey(target, key) {
    // Only space should toggle checkboxes and radios, not enter.
    return target.type === 'checkbox' || target.type === 'radio' ? key === ' ' : nonTextInputTypes.has(target.type);
}

},{"../utils/chain":"bQmEj","./utils":"iOeVY","./textSelection":"3IKpx","react-dom":"gOP0N","../utils/focusWithoutScrolling":"gcZ3w","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/getNonce":"gQ9ws","../utils/domHelpers":"cYkFa","../utils/platform":"eBqgD","../utils/isVirtualEvent":"dtScK","../utils/mergeProps":"jycxS","../utils/openLink":"gH3wl","./context":"8Eyap","react":"gOP0N","../utils/useEffectEvent":"grBNM","../utils/useGlobalListeners":"jsdt1","../utils/useSyncRef":"8a0bK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gQ9ws":[function(require,module,exports,__globalThis) {
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
/** Reset the cached nonce value. Exported for testing only. */ parcelHelpers.export(exports, "resetNonceCache", ()=>resetNonceCache);
/**
 * Returns the CSP nonce, if configured via a `<meta property="csp-nonce">` tag or
 * `__webpack_nonce__`. This allows dynamically injected `<style>` elements to work with Content
 * Security Policy.
 */ parcelHelpers.export(exports, "getNonce", ()=>getNonce);
var _getMetaValue = require("./getMetaValue");
var _domHelpers = require("./domHelpers");
let nonceCache = new WeakMap();
function resetNonceCache() {
    nonceCache = new WeakMap();
}
function getNonce(doc) {
    let ownerDocument = (0, _domHelpers.getOwnerDocument)(doc);
    let nonce = nonceCache.get(ownerDocument);
    nonce ??= (0, _getMetaValue.getMetaValue)('csp-nonce', ownerDocument);
    if (nonce !== undefined) nonceCache.set(ownerDocument, nonce);
    return nonce;
}

},{"./getMetaValue":"jdK61","./domHelpers":"cYkFa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8Eyap":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "PressResponderContext", ()=>PressResponderContext);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const PressResponderContext = (0, _reactDefault.default).createContext({
    register: ()=>{}
});
PressResponderContext.displayName = 'PressResponderContext';

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

