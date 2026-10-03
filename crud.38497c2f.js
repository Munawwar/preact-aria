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
})({"6U4dx":[function(require,module,exports,__globalThis) {
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
 * Handles drop interactions for an element, with support for traditional mouse and touch
 * based drag and drop, in addition to full parity for keyboard and screen reader users.
 */ parcelHelpers.export(exports, "useDrop", ()=>useDrop);
var _react = require("react");
var _dragManager = require("./DragManager");
var _utils = require("./utils");
var _constants = require("./constants");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _platform = require("../utils/platform");
var _useEffectEvent = require("../utils/useEffectEvent");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _useVirtualDrop = require("./useVirtualDrop");
const DROP_ACTIVATE_TIMEOUT = 800;
function useDrop(options) {
    let { hasDropButton, isDisabled } = options;
    let [isDropTarget, setDropTarget] = (0, _react.useState)(false);
    let state = (0, _react.useRef)({
        x: 0,
        y: 0,
        dragOverElements: new Set(),
        dropEffect: 'none',
        allowedOperations: (0, _constants.DROP_OPERATION).all,
        dropActivateTimer: undefined
    }).current;
    let fireDropEnter = (e)=>{
        setDropTarget(true);
        if (typeof options.onDropEnter === 'function') {
            let rect = e.currentTarget.getBoundingClientRect();
            options.onDropEnter({
                type: 'dropenter',
                x: e.clientX - rect.x,
                y: e.clientY - rect.y
            });
        }
    };
    let fireDropExit = (e)=>{
        setDropTarget(false);
        if (typeof options.onDropExit === 'function') {
            let rect = e.currentTarget.getBoundingClientRect();
            options.onDropExit({
                type: 'dropexit',
                x: e.clientX - rect.x,
                y: e.clientY - rect.y
            });
        }
    };
    let onDragOver = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        let allowedOperations = getAllowedOperations(e);
        if (e.clientX === state.x && e.clientY === state.y && allowedOperations === state.allowedOperations) {
            e.dataTransfer.dropEffect = state.dropEffect;
            return;
        }
        state.x = e.clientX;
        state.y = e.clientY;
        let prevDropEffect = state.dropEffect;
        // Update drop effect if allowed drop operations changed (e.g. user pressed modifier key).
        if (allowedOperations !== state.allowedOperations) {
            let allowedOps = allowedOperationsToArray(allowedOperations);
            let dropOperation = allowedOps[0];
            if (typeof options.getDropOperation === 'function') {
                let types = new (0, _utils.DragTypes)(e.dataTransfer);
                dropOperation = getDropOperation(allowedOperations, options.getDropOperation(types, allowedOps));
            }
            state.dropEffect = (0, _constants.DROP_OPERATION_TO_DROP_EFFECT)[dropOperation] || 'none';
        }
        if (typeof options.getDropOperationForPoint === 'function') {
            let types = new (0, _utils.DragTypes)(e.dataTransfer);
            let rect = e.currentTarget.getBoundingClientRect();
            let dropOperation = getDropOperation(allowedOperations, options.getDropOperationForPoint(types, allowedOperationsToArray(allowedOperations), state.x - rect.x, state.y - rect.y));
            state.dropEffect = (0, _constants.DROP_OPERATION_TO_DROP_EFFECT)[dropOperation] || 'none';
        }
        state.allowedOperations = allowedOperations;
        e.dataTransfer.dropEffect = state.dropEffect;
        // If the drop operation changes, update state and fire events appropriately.
        if (state.dropEffect === 'none' && prevDropEffect !== 'none') fireDropExit(e);
        else if (state.dropEffect !== 'none' && prevDropEffect === 'none') fireDropEnter(e);
        if (typeof options.onDropMove === 'function' && state.dropEffect !== 'none') {
            let rect = e.currentTarget.getBoundingClientRect();
            options.onDropMove({
                type: 'dropmove',
                x: state.x - rect.x,
                y: state.y - rect.y
            });
        }
        clearTimeout(state.dropActivateTimer);
        if (options.onDropActivate && typeof options.onDropActivate === 'function' && state.dropEffect !== 'none') {
            let onDropActivateOptions = options.onDropActivate;
            let rect = e.currentTarget.getBoundingClientRect();
            state.dropActivateTimer = setTimeout(()=>{
                onDropActivateOptions({
                    type: 'dropactivate',
                    x: state.x - rect.x,
                    y: state.y - rect.y
                });
            }, DROP_ACTIVATE_TIMEOUT);
        }
    };
    let onDragEnter = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        state.dragOverElements.add((0, _domfunctions.getEventTarget)(e));
        if (state.dragOverElements.size > 1) return;
        let allowedOperationsBits = getAllowedOperations(e);
        let allowedOperations = allowedOperationsToArray(allowedOperationsBits);
        let dropOperation = allowedOperations[0];
        if (typeof options.getDropOperation === 'function') {
            let types = new (0, _utils.DragTypes)(e.dataTransfer);
            dropOperation = getDropOperation(allowedOperationsBits, options.getDropOperation(types, allowedOperations));
        }
        if (typeof options.getDropOperationForPoint === 'function') {
            let types = new (0, _utils.DragTypes)(e.dataTransfer);
            let rect = e.currentTarget.getBoundingClientRect();
            dropOperation = getDropOperation(allowedOperationsBits, options.getDropOperationForPoint(types, allowedOperations, e.clientX - rect.x, e.clientY - rect.y));
        }
        state.x = e.clientX;
        state.y = e.clientY;
        state.allowedOperations = allowedOperationsBits;
        state.dropEffect = (0, _constants.DROP_OPERATION_TO_DROP_EFFECT)[dropOperation] || 'none';
        e.dataTransfer.dropEffect = state.dropEffect;
        if (dropOperation !== 'cancel') fireDropEnter(e);
    };
    let onDragLeave = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        // We would use e.relatedTarget to detect if the drag is still inside the drop target,
        // but it is always null in WebKit. https://bugs.webkit.org/show_bug.cgi?id=66547
        // Instead, we track all of the targets of dragenter events in a set, and remove them
        // in dragleave. When the set becomes empty, we've left the drop target completely.
        // We must also remove any elements that are no longer in the DOM, because dragleave
        // events will never be fired for these. This can happen, for example, with drop
        // indicators between items, which disappear when the drop target changes.
        let target = (0, _domfunctions.getEventTarget)(e);
        state.dragOverElements.delete(target);
        // Only remove stale elements when leaving the drop target itself.
        // Avoids issues with portal children bubbling dragleave events through the React tree.
        if (target === e.currentTarget) {
            for (let element of state.dragOverElements)if (!(0, _domfunctions.nodeContains)(e.currentTarget, element)) state.dragOverElements.delete(element);
        }
        if (state.dragOverElements.size > 0) return;
        if (state.dropEffect !== 'none') fireDropExit(e);
        clearTimeout(state.dropActivateTimer);
    };
    let onDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        // Track drop effect in global state for Chrome Android. https://bugs.chromium.org/p/chromium/issues/detail?id=1353951
        // Android onDragEnd always returns "none" as its drop effect.
        (0, _utils.setGlobalDropEffect)(state.dropEffect);
        if (typeof options.onDrop === 'function') {
            let dropOperation = (0, _constants.DROP_EFFECT_TO_DROP_OPERATION)[state.dropEffect];
            let items = (0, _utils.readFromDataTransfer)(e.dataTransfer);
            let rect = e.currentTarget.getBoundingClientRect();
            let event = {
                type: 'drop',
                x: e.clientX - rect.x,
                y: e.clientY - rect.y,
                items,
                dropOperation
            };
            options.onDrop(event);
        }
        let dndStateSnapshot = {
            ...(0, _utils.globalDndState)
        };
        state.dragOverElements.clear();
        fireDropExit(e);
        clearTimeout(state.dropActivateTimer);
        // If there wasn't a collection being tracked as a dragged collection, then we are in a case where a non RSP drag is dropped on a
        // RSP collection and thus we don't need to preserve the global drop effect
        if (dndStateSnapshot.draggingCollectionRef == null) (0, _utils.setGlobalDropEffect)(undefined);
        else // Otherwise we need to preserve the global dnd state for onDragEnd's isInternal check.
        // At the moment fireDropExit may clear dropCollectionRef (i.e. useDroppableCollection's provided onDropExit, required to clear dropCollectionRef when exiting a valid drop target)
        (0, _utils.setGlobalDnDState)(dndStateSnapshot);
    };
    let onDropEnter = (0, _useEffectEvent.useEffectEvent)((e)=>{
        if (typeof options.onDropEnter === 'function') options.onDropEnter(e);
    });
    let onDropExit = (0, _useEffectEvent.useEffectEvent)((e)=>{
        if (typeof options.onDropExit === 'function') options.onDropExit(e);
    });
    let onDropActivate = (0, _useEffectEvent.useEffectEvent)((e)=>{
        if (typeof options.onDropActivate === 'function') options.onDropActivate(e);
    });
    let onKeyboardDrop = (0, _useEffectEvent.useEffectEvent)((e)=>{
        if (typeof options.onDrop === 'function') options.onDrop(e);
    });
    let getDropOperationKeyboard = (0, _useEffectEvent.useEffectEvent)((types, allowedOperations)=>{
        if (options.getDropOperation) return options.getDropOperation(types, allowedOperations);
        return allowedOperations[0];
    });
    let { ref } = options;
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (isDisabled || !ref.current) return;
        return _dragManager.registerDropTarget({
            element: ref.current,
            getDropOperation: getDropOperationKeyboard,
            onDropEnter (e) {
                setDropTarget(true);
                onDropEnter(e);
            },
            onDropExit (e) {
                setDropTarget(false);
                onDropExit(e);
            },
            onDrop: onKeyboardDrop,
            onDropActivate
        });
    }, [
        isDisabled,
        ref
    ]);
    let { dropProps } = (0, _useVirtualDrop.useVirtualDrop)();
    if (isDisabled) return {
        dropProps: {},
        dropButtonProps: {
            isDisabled: true
        },
        isDropTarget: false
    };
    return {
        dropProps: {
            ...!hasDropButton && dropProps,
            onDragEnter,
            onDragOver,
            onDragLeave,
            onDrop
        },
        dropButtonProps: {
            ...hasDropButton && dropProps
        },
        isDropTarget
    };
}
function getAllowedOperations(e) {
    let allowedOperations = (0, _constants.DROP_OPERATION_ALLOWED)[e.dataTransfer.effectAllowed];
    // WebKit always sets effectAllowed to "copyMove" on macOS, and "all" on iOS, regardless of what was
    // set during the dragstart event: https://bugs.webkit.org/show_bug.cgi?id=178058
    //
    // Android Chrome also sets effectAllowed to "copyMove" in all cases: https://bugs.chromium.org/p/chromium/issues/detail?id=1359182
    //
    // If the drag started within the page, we can use a global variable to get the real allowed operations.
    // This needs to be intersected with the actual effectAllowed, which may have been filtered based on modifier keys.
    // Unfortunately, this means that link operations do not work at all in Safari.
    if (0, _utils.globalAllowedDropOperations) allowedOperations &= (0, _utils.globalAllowedDropOperations);
    // Chrome and Safari on macOS will automatically filter effectAllowed when pressing modifier keys,
    // allowing the user to switch between move, link, and copy operations. Firefox on macOS and all
    // Windows browsers do not do this, so do it ourselves instead. The exact keys are platform dependent.
    // https://ux.stackexchange.com/questions/83748/what-are-the-most-common-modifier-keys-for-dragging-objects-with-a-mouse
    //
    // Note that none of these modifiers are ever set in WebKit due to a bug: https://bugs.webkit.org/show_bug.cgi?id=77465
    // However, Safari does update effectAllowed correctly, so we can just rely on that.
    let allowedModifiers = (0, _constants.DROP_OPERATION).none;
    if ((0, _platform.isMac)()) {
        if (e.altKey) allowedModifiers |= (0, _constants.DROP_OPERATION).copy;
        // Chrome and Safari both use the Control key for link, even though Finder uses Command + Option.
        // iPadOS doesn't support link operations and will not fire the drop event at all if dropEffect is set to link.
        // https://bugs.webkit.org/show_bug.cgi?id=244701
        if (e.ctrlKey && !(0, _platform.isIPad)()) allowedModifiers |= (0, _constants.DROP_OPERATION).link;
        if (e.metaKey) allowedModifiers |= (0, _constants.DROP_OPERATION).move;
    } else {
        if (e.altKey) allowedModifiers |= (0, _constants.DROP_OPERATION).link;
        if (e.shiftKey) allowedModifiers |= (0, _constants.DROP_OPERATION).move;
        if (e.ctrlKey) allowedModifiers |= (0, _constants.DROP_OPERATION).copy;
    }
    if (allowedModifiers) return allowedOperations & allowedModifiers;
    return allowedOperations;
}
function allowedOperationsToArray(allowedOperationsBits) {
    let allowedOperations = [];
    if (allowedOperationsBits & (0, _constants.DROP_OPERATION).move) allowedOperations.push('move');
    if (allowedOperationsBits & (0, _constants.DROP_OPERATION).copy) allowedOperations.push('copy');
    if (allowedOperationsBits & (0, _constants.DROP_OPERATION).link) allowedOperations.push('link');
    return allowedOperations;
}
function getDropOperation(allowedOperations, operation) {
    let op = (0, _constants.DROP_OPERATION)[operation];
    return allowedOperations & op ? operation : 'cancel';
}

},{"react":"gOP0N","./DragManager":"9KS88","./utils":"UrIm3","./constants":"2D91w","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/platform":"eBqgD","../utils/useEffectEvent":"grBNM","../utils/useLayoutEffect":"h7M6K","./useVirtualDrop":"kh2nc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9KS88":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "registerDropTarget", ()=>registerDropTarget);
parcelHelpers.export(exports, "registerDropItem", ()=>registerDropItem);
parcelHelpers.export(exports, "beginDragging", ()=>beginDragging);
parcelHelpers.export(exports, "useDragSession", ()=>useDragSession);
/** @private */ parcelHelpers.export(exports, "isVirtualDragging", ()=>isVirtualDragging);
parcelHelpers.export(exports, "isValidDropTarget", ()=>isValidDropTarget);
var _liveAnnouncer = require("../live-announcer/LiveAnnouncer");
var _ariaHideOutside = require("../overlays/ariaHideOutside");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _utils = require("./utils");
var _isVirtualEvent = require("../utils/isVirtualEvent");
var _react = require("react");
let dropTargets = new Map();
let dropItems = new Map();
let dragSession = null;
let subscriptions = new Set();
function registerDropTarget(target) {
    dropTargets.set(target.element, target);
    dragSession?.updateValidDropTargets();
    return ()=>{
        dropTargets.delete(target.element);
        dragSession?.updateValidDropTargets();
    };
}
function registerDropItem(item) {
    dropItems.set(item.element, item);
    return ()=>{
        dropItems.delete(item.element);
    };
}
function beginDragging(target, stringFormatter) {
    if (dragSession) throw new Error('Cannot begin dragging while already dragging');
    dragSession = new DragSession(target, stringFormatter);
    requestAnimationFrame(()=>{
        if (dragSession) {
            dragSession.setup();
            if ((0, _utils.getDragModality)() === 'keyboard') dragSession.next();
        }
    });
    for (let cb of subscriptions)cb();
}
function useDragSession() {
    let [session, setSession] = (0, _react.useState)(dragSession);
    (0, _react.useEffect)(()=>{
        let cb = ()=>setSession(dragSession);
        subscriptions.add(cb);
        return ()=>{
            subscriptions.delete(cb);
        };
    }, []);
    return session;
}
function isVirtualDragging() {
    return !!dragSession;
}
function endDragging() {
    dragSession = null;
    for (let cb of subscriptions)cb();
}
function isValidDropTarget(element) {
    for (let target of dropTargets.keys()){
        if ((0, _domfunctions.nodeContains)(target, element)) return true;
    }
    return false;
}
const CANCELED_EVENTS = [
    'pointerdown',
    'pointermove',
    'pointerenter',
    'pointerleave',
    'pointerover',
    'pointerout',
    'pointerup',
    'mousedown',
    'mousemove',
    'mouseenter',
    'mouseleave',
    'mouseover',
    'mouseout',
    'mouseup',
    'touchstart',
    'touchmove',
    'touchend',
    'focusin',
    'focusout'
];
const CLICK_EVENTS = [
    'pointerup',
    'mouseup',
    'touchend'
];
const MESSAGES = {
    keyboard: 'dragStartedKeyboard',
    touch: 'dragStartedTouch',
    virtual: 'dragStartedVirtual'
};
class DragSession {
    dragTarget;
    validDropTargets = [];
    currentDropTarget = null;
    currentDropItem = null;
    dropOperation = null;
    mutationObserver = null;
    restoreAriaHidden = null;
    stringFormatter;
    isVirtualClick = false;
    initialFocused;
    constructor(target, stringFormatter){
        this.dragTarget = target;
        this.stringFormatter = stringFormatter;
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onPointerDown = this.onPointerDown.bind(this);
        this.cancelEvent = this.cancelEvent.bind(this);
        this.initialFocused = false;
    }
    setup() {
        document.addEventListener('keydown', this.onKeyDown, true);
        document.addEventListener('keyup', this.onKeyUp, true);
        window.addEventListener('focus', this.onFocus, true);
        window.addEventListener('blur', this.onBlur, true);
        document.addEventListener('click', this.onClick, true);
        document.addEventListener('pointerdown', this.onPointerDown, true);
        for (let event of CANCELED_EVENTS)document.addEventListener(event, this.cancelEvent, true);
        this.mutationObserver = new MutationObserver(()=>this.updateValidDropTargets());
        this.updateValidDropTargets();
        (0, _liveAnnouncer.announce)(this.stringFormatter.format(MESSAGES[(0, _utils.getDragModality)()]));
    }
    teardown() {
        document.removeEventListener('keydown', this.onKeyDown, true);
        document.removeEventListener('keyup', this.onKeyUp, true);
        window.removeEventListener('focus', this.onFocus, true);
        window.removeEventListener('blur', this.onBlur, true);
        document.removeEventListener('click', this.onClick, true);
        document.removeEventListener('pointerdown', this.onPointerDown, true);
        for (let event of CANCELED_EVENTS)document.removeEventListener(event, this.cancelEvent, true);
        this.mutationObserver?.disconnect();
        this.restoreAriaHidden?.();
    }
    onKeyDown(e) {
        this.cancelEvent(e);
        if (e.key === 'Escape') {
            this.cancel();
            return;
        }
        if (e.key === 'Tab' && !(e.metaKey || e.altKey || e.ctrlKey)) {
            if (e.shiftKey) this.previous();
            else this.next();
        }
        if (typeof this.currentDropTarget?.onKeyDown === 'function') this.currentDropTarget.onKeyDown(e, this.dragTarget);
    }
    onKeyUp(e) {
        this.cancelEvent(e);
        if (e.key === 'Enter') {
            if (e.altKey || (0, _domfunctions.nodeContains)(this.getCurrentActivateButton(), (0, _domfunctions.getEventTarget)(e))) this.activate(this.currentDropTarget, this.currentDropItem);
            else this.drop();
        }
    }
    getCurrentActivateButton() {
        return this.currentDropItem?.activateButtonRef?.current ?? this.currentDropTarget?.activateButtonRef?.current ?? null;
    }
    onFocus(e) {
        let activateButton = this.getCurrentActivateButton();
        let eventTarget = (0, _domfunctions.getEventTarget)(e);
        if (eventTarget === activateButton) {
            // TODO: canceling this breaks the focus ring. Revisit when we support tabbing.
            this.cancelEvent(e);
            return;
        }
        // Prevent focus events, except to the original drag target.
        if (eventTarget !== this.dragTarget.element) this.cancelEvent(e);
        // Ignore focus events on the window/document (JSDOM). Will be handled in onBlur, below.
        if (!(eventTarget instanceof HTMLElement) || eventTarget === this.dragTarget.element) return;
        let dropTarget = this.validDropTargets.find((target)=>target.element === eventTarget) || this.validDropTargets.find((target)=>(0, _domfunctions.nodeContains)(target.element, eventTarget));
        if (!dropTarget) {
            // if (e.target === activateButton) {
            //   activateButton.focus();
            // }
            if (this.currentDropTarget) this.currentDropTarget.element.focus();
            else this.dragTarget.element.focus();
            return;
        }
        let item = dropItems.get(eventTarget);
        if (dropTarget) this.setCurrentDropTarget(dropTarget, item);
    }
    onBlur(e) {
        let activateButton = this.getCurrentActivateButton();
        // Guard activateButton non-null so this doesn't trip on the case where
        // there's no activate button and the focused element loses focus to nothing
        // (browsers and jsdom 26+ both set relatedTarget to null in that case).
        if (activateButton && e.relatedTarget === activateButton) {
            this.cancelEvent(e);
            return;
        }
        if ((0, _domfunctions.getEventTarget)(e) !== this.dragTarget.element) this.cancelEvent(e);
        // If nothing is gaining focus, or e.relatedTarget is the window/document (JSDOM),
        // restore focus back to the current drop target if any, or the original drag target.
        if (!e.relatedTarget || !(e.relatedTarget instanceof HTMLElement)) {
            if (this.currentDropTarget) this.currentDropTarget.element.focus();
            else this.dragTarget.element.focus();
        }
    }
    onClick(e) {
        this.cancelEvent(e);
        if ((0, _isVirtualEvent.isVirtualClick)(e) || this.isVirtualClick) {
            let dropElements = dropItems.values();
            let eventTarget = (0, _domfunctions.getEventTarget)(e);
            let item = [
                ...dropElements
            ].find((item)=>item.element === eventTarget || (0, _domfunctions.nodeContains)(item.activateButtonRef?.current, eventTarget));
            let dropTarget = this.validDropTargets.find((target)=>(0, _domfunctions.nodeContains)(target.element, eventTarget));
            let activateButton = item?.activateButtonRef?.current ?? dropTarget?.activateButtonRef?.current;
            if ((0, _domfunctions.nodeContains)(activateButton, eventTarget) && dropTarget) {
                this.activate(dropTarget, item);
                return;
            }
            if ((0, _domfunctions.getEventTarget)(e) === this.dragTarget.element) {
                this.cancel();
                return;
            }
            if (dropTarget) {
                this.setCurrentDropTarget(dropTarget, item);
                this.drop(item);
            }
        }
    }
    onPointerDown(e) {
        // Android Talkback double tap has e.detail = 1 for onClick. Detect the virtual click in onPointerDown before onClick fires
        // so we can properly perform cancel and drop operations.
        this.cancelEvent(e);
        this.isVirtualClick = (0, _isVirtualEvent.isVirtualPointerEvent)(e);
    }
    cancelEvent(e) {
        // Allow focusin and focusout on the drag target so focus ring works properly.
        let eventTarget = (0, _domfunctions.getEventTarget)(e);
        if ((e.type === 'focusin' || e.type === 'focusout') && (eventTarget === this.dragTarget?.element || eventTarget === this.getCurrentActivateButton())) return;
        // Allow default for events that might cancel a click event
        if (!CLICK_EVENTS.includes(e.type)) e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
    }
    updateValidDropTargets() {
        if (!this.mutationObserver) return;
        this.mutationObserver.disconnect();
        if (this.restoreAriaHidden) this.restoreAriaHidden();
        this.validDropTargets = findValidDropTargets(this.dragTarget);
        // Shuffle drop target order based on starting drag target.
        if (this.validDropTargets.length > 0) {
            let nearestIndex = this.findNearestDropTarget();
            this.validDropTargets = [
                ...this.validDropTargets.slice(nearestIndex),
                ...this.validDropTargets.slice(0, nearestIndex)
            ];
        }
        if (this.currentDropTarget && !this.validDropTargets.includes(this.currentDropTarget)) this.setCurrentDropTarget(this.validDropTargets[0]);
        // Find valid drop items within collections
        let types = (0, _utils.getTypes)(this.dragTarget.items);
        let validDropItems = [
            ...dropItems.values()
        ].filter((item)=>{
            if (typeof item.getDropOperation === 'function') return item.getDropOperation(types, this.dragTarget.allowedDropOperations) !== 'cancel';
            return true;
        });
        // Filter out drop targets that contain valid items. We don't want to stop hiding elements
        // other than the drop items that exist inside the collection.
        let visibleDropTargets = this.validDropTargets.filter((target)=>!validDropItems.some((item)=>(0, _domfunctions.nodeContains)(target.element, item.element)));
        this.restoreAriaHidden = (0, _ariaHideOutside.ariaHideOutside)([
            this.dragTarget.element,
            ...validDropItems.flatMap((item)=>item.activateButtonRef?.current ? [
                    item.element,
                    item.activateButtonRef?.current
                ] : [
                    item.element
                ]),
            ...visibleDropTargets.flatMap((target)=>target.activateButtonRef?.current ? [
                    target.element,
                    target.activateButtonRef?.current
                ] : [
                    target.element
                ])
        ], {
            shouldUseInert: true
        });
        this.mutationObserver.observe(document.body, {
            subtree: true,
            attributes: true,
            attributeFilter: [
                'aria-hidden',
                'inert'
            ]
        });
    }
    next() {
        // TODO: Allow tabbing to the activate button. Revisit once we fix the focus ring.
        // For now, the activate button is reachable by screen readers and ArrowLeft/ArrowRight
        // is usable specifically by Tree. Will need tabbing for other components.
        // let activateButton = this.getCurrentActivateButton();
        // if (activateButton && document.activeElement !== activateButton) {
        //   activateButton.focus();
        //   return;
        // }
        if (!this.currentDropTarget) {
            this.setCurrentDropTarget(this.validDropTargets[0]);
            return;
        }
        let index = this.validDropTargets.indexOf(this.currentDropTarget);
        if (index < 0) {
            this.setCurrentDropTarget(this.validDropTargets[0]);
            return;
        }
        // If we've reached the end of the valid drop targets, cycle back to the original drag target.
        // This lets the user cancel the drag in case they don't have an Escape key (e.g. iPad keyboard case).
        if (index === this.validDropTargets.length - 1) {
            if (!this.dragTarget.element.closest('[aria-hidden="true"], [inert]')) {
                this.setCurrentDropTarget(null);
                this.dragTarget.element.focus();
            } else this.setCurrentDropTarget(this.validDropTargets[0]);
        } else this.setCurrentDropTarget(this.validDropTargets[index + 1]);
    }
    previous() {
        // let activateButton = this.getCurrentActivateButton();
        // if (activateButton && document.activeElement === activateButton) {
        //   let target = this.currentDropItem ?? this.currentDropTarget;
        //   if (target) {
        //     target.element.focus();
        //     return;
        //   }
        // }
        if (!this.currentDropTarget) {
            this.setCurrentDropTarget(this.validDropTargets[this.validDropTargets.length - 1]);
            return;
        }
        let index = this.validDropTargets.indexOf(this.currentDropTarget);
        if (index < 0) {
            this.setCurrentDropTarget(this.validDropTargets[this.validDropTargets.length - 1]);
            return;
        }
        // If we've reached the start of the valid drop targets, cycle back to the original drag target.
        // This lets the user cancel the drag in case they don't have an Escape key (e.g. iPad keyboard case).
        if (index === 0) {
            if (!this.dragTarget.element.closest('[aria-hidden="true"], [inert]')) {
                this.setCurrentDropTarget(null);
                this.dragTarget.element.focus();
            } else this.setCurrentDropTarget(this.validDropTargets[this.validDropTargets.length - 1]);
        } else this.setCurrentDropTarget(this.validDropTargets[index - 1]);
    }
    findNearestDropTarget() {
        let dragTargetRect = this.dragTarget.element.getBoundingClientRect();
        let minDistance = Infinity;
        let nearest = -1;
        let ancestor = -1;
        for(let i = 0; i < this.validDropTargets.length; i++){
            let dropTarget = this.validDropTargets[i];
            if (ancestor < 0 && (0, _domfunctions.nodeContains)(dropTarget.element, this.dragTarget.element)) ancestor = i;
            let rect = dropTarget.element.getBoundingClientRect();
            let dx = rect.left - dragTargetRect.left;
            let dy = rect.top - dragTargetRect.top;
            let dist = dx * dx + dy * dy;
            if (dist < minDistance) {
                minDistance = dist;
                nearest = i;
            }
        }
        return ancestor >= 0 ? ancestor : nearest;
    }
    setCurrentDropTarget(dropTarget, item) {
        if (dropTarget !== this.currentDropTarget) {
            if (this.currentDropTarget && typeof this.currentDropTarget.onDropExit === 'function') {
                let rect = this.currentDropTarget.element.getBoundingClientRect();
                this.currentDropTarget.onDropExit({
                    type: 'dropexit',
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2
                });
            }
            this.currentDropTarget = dropTarget;
            if (dropTarget) {
                if (typeof dropTarget.onDropEnter === 'function') {
                    let rect = dropTarget.element.getBoundingClientRect();
                    dropTarget.onDropEnter({
                        type: 'dropenter',
                        x: rect.left + rect.width / 2,
                        y: rect.top + rect.height / 2
                    }, this.dragTarget);
                }
                if (!item) dropTarget?.element.focus();
            }
        }
        if (item != null && item !== this.currentDropItem) {
            if (this.currentDropTarget && typeof this.currentDropTarget.onDropTargetEnter === 'function') this.currentDropTarget.onDropTargetEnter(item.target);
            item.element.focus();
            this.currentDropItem = item;
            // Announce first drop target after drag start announcement finishes.
            // Otherwise, it will never get announced because drag start announcement is assertive.
            if (!this.initialFocused) {
                let label = item?.element.getAttribute('aria-label');
                if (label) (0, _liveAnnouncer.announce)(label, 'polite');
                this.initialFocused = true;
            }
        }
    }
    end() {
        this.teardown();
        endDragging();
        if (typeof this.dragTarget.onDragEnd === 'function') {
            let target = this.currentDropTarget && this.dropOperation !== 'cancel' ? this.currentDropTarget : this.dragTarget;
            let rect = target.element.getBoundingClientRect();
            this.dragTarget.onDragEnd({
                type: 'dragend',
                x: rect.x + rect.width / 2,
                y: rect.y + rect.height / 2,
                dropOperation: this.dropOperation || 'cancel'
            });
        }
        if (this.currentDropTarget && !this.currentDropTarget.preventFocusOnDrop) // Re-trigger focus event on active element, since it will not have received it during dragging (see cancelEvent).
        // This corrects state such as whether focus ring should appear.
        // useDroppableCollection handles this itself, so this is only for standalone drop zones.
        (0, _domfunctions.getActiveElement)()?.dispatchEvent(new FocusEvent('focusin', {
            bubbles: true
        }));
        this.setCurrentDropTarget(null);
    }
    cancel() {
        this.setCurrentDropTarget(null);
        this.end();
        if (!this.dragTarget.element.closest('[aria-hidden="true"], [inert]')) this.dragTarget.element.focus();
        // Re-trigger focus event on active element, since it will not have received it during dragging (see cancelEvent).
        (0, _domfunctions.getActiveElement)()?.dispatchEvent(new FocusEvent('focusin', {
            bubbles: true
        }));
        (0, _liveAnnouncer.announce)(this.stringFormatter.format('dropCanceled'));
    }
    drop(item) {
        if (!this.currentDropTarget) {
            this.cancel();
            return;
        }
        if (typeof item?.getDropOperation === 'function') {
            let types = (0, _utils.getTypes)(this.dragTarget.items);
            this.dropOperation = item.getDropOperation(types, this.dragTarget.allowedDropOperations);
        } else if (typeof this.currentDropTarget.getDropOperation === 'function') {
            let types = (0, _utils.getTypes)(this.dragTarget.items);
            this.dropOperation = this.currentDropTarget.getDropOperation(types, this.dragTarget.allowedDropOperations);
        } else // TODO: show menu ??
        this.dropOperation = this.dragTarget.allowedDropOperations[0];
        if (typeof this.currentDropTarget.onDrop === 'function') {
            let items = this.dragTarget.items.map((item)=>({
                    kind: 'text',
                    types: new Set(Object.keys(item)),
                    getText: (type)=>Promise.resolve(item[type])
                }));
            let rect = this.currentDropTarget.element.getBoundingClientRect();
            this.currentDropTarget.onDrop({
                type: 'drop',
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
                items,
                dropOperation: this.dropOperation
            }, item?.target ?? null);
        }
        this.end();
        (0, _liveAnnouncer.announce)(this.stringFormatter.format('dropComplete'));
    }
    activate(dropTarget, dropItem) {
        if (dropTarget && typeof dropTarget.onDropActivate === 'function') {
            let target = dropItem?.target ?? null;
            let rect = dropTarget.element.getBoundingClientRect();
            dropTarget.onDropActivate({
                type: 'dropactivate',
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            }, target);
        }
    }
}
function findValidDropTargets(options) {
    let types = (0, _utils.getTypes)(options.items);
    return [
        ...dropTargets.values()
    ].filter((target)=>{
        if (target.element.closest('[aria-hidden="true"], [inert]')) return false;
        if (typeof target.getDropOperation === 'function') return target.getDropOperation(types, options.allowedDropOperations) !== 'cancel';
        return true;
    });
}

},{"../live-announcer/LiveAnnouncer":"gQ2k2","../overlays/ariaHideOutside":"bOGar","../utils/shadowdom/DOMFunctions":"8kfpz","./utils":"UrIm3","../utils/isVirtualEvent":"dtScK","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kh2nc":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useVirtualDrop", ()=>useVirtualDrop);
var _dragManager = require("./DragManager");
var _indexJs = require("../../intl/dnd/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _useDescription = require("../utils/useDescription");
var _utils = require("./utils");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
const MESSAGES = {
    keyboard: 'dropDescriptionKeyboard',
    touch: 'dropDescriptionTouch',
    virtual: 'dropDescriptionVirtual'
};
function useVirtualDrop() {
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/dnd');
    let modality = (0, _utils.useDragModality)();
    let dragSession = _dragManager.useDragSession();
    let descriptionProps = (0, _useDescription.useDescription)(dragSession ? stringFormatter.format(MESSAGES[modality]) : '');
    return {
        dropProps: {
            ...descriptionProps,
            // Mobile Safari does not properly bubble click events on elements except links or inputs
            // unless there is an onclick handler bound directly to the element itself. By adding this
            // handler, React will take care of adding that for us, and we are able to handle document
            // level click events in the DragManager.
            // See https://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
            onClick: ()=>{}
        }
    };
}

},{"./DragManager":"9KS88","../../intl/dnd/index.js":"ccBG3","../utils/useDescription":"1bivM","./utils":"UrIm3","../i18n/useLocalizedStringFormatter":"8lll3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ccBG3":[function(require,module,exports,__globalThis) {
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

},{"./ar-AE.js":"eYzSF","./bg-BG.js":"9xWJi","./cs-CZ.js":"3ebxv","./da-DK.js":"1Uhm1","./de-DE.js":"5YwEj","./el-GR.js":"8wC7l","./en-US.js":"h68ua","./es-ES.js":"048Gx","./et-EE.js":"jDxev","./fi-FI.js":"lWPYG","./fr-FR.js":"7kzBw","./he-IL.js":"iuLQC","./hr-HR.js":"1sa48","./hu-HU.js":"in1pr","./it-IT.js":"5Pk0A","./ja-JP.js":"d54tn","./ko-KR.js":"bnVZv","./lt-LT.js":"gLLEG","./lv-LV.js":"oTRzZ","./nb-NO.js":"lnDVI","./nl-NL.js":"7Tqo5","./pl-PL.js":"asMbo","./pt-BR.js":"k8e8n","./pt-PT.js":"58nXX","./ro-RO.js":"8K3V8","./ru-RU.js":"7hO9y","./sk-SK.js":"9xRyp","./sl-SI.js":"bDjDE","./sr-SP.js":"hwYJv","./sv-SE.js":"2tt6s","./tr-TR.js":"2PWSH","./uk-UA.js":"3GCRJ","./zh-CN.js":"dWnI2","./zh-TW.js":"e8km7","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eYzSF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `\u{627}\u{636}\u{63A}\u{637} Enter \u{644}\u{628}\u{62F}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "dragDescriptionKeyboardAlt": `\u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} Alt + Enter \u{644}\u{628}\u{62F}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "dragDescriptionLongPress": `\u{627}\u{636}\u{63A}\u{637} \u{628}\u{627}\u{633}\u{62A}\u{645}\u{631}\u{627}\u{631} \u{644}\u{628}\u{62F}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "dragDescriptionTouch": `\u{627}\u{636}\u{63A}\u{637} \u{645}\u{631}\u{62A}\u{64A}\u{646} \u{644}\u{628}\u{62F}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "dragDescriptionVirtual": `\u{627}\u{646}\u{642}\u{631} \u{644}\u{628}\u{62F}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "dragItem": (args)=>`\u{627}\u{633}\u{62D}\u{628} ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`\u{627}\u{633}\u{62D}\u{628} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{639}\u{646}\u{635}\u{631} \u{645}\u{62D}\u{62F}\u{62F}`,
            other: ()=>`${formatter.number(args.count)} \u{639}\u{646}\u{627}\u{635}\u{631} \u{645}\u{62D}\u{62F}\u{62F}\u{629}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`\u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} Enter \u{644}\u{644}\u{633}\u{62D}\u{628} ${formatter.plural(args.count, {
            one: `\u{639}\u{62F}\u{62F} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62E}\u{62A}\u{627}\u{631}\u{629}`,
            other: `\u{639}\u{62F}\u{62F} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62E}\u{62A}\u{627}\u{631}\u{629}`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`\u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} \u{645}\u{641}\u{62A}\u{627}\u{62D}\u{64A} Alt + Enter \u{644}\u{644}\u{633}\u{62D}\u{628} ${formatter.plural(args.count, {
            one: `\u{639}\u{62F}\u{62F} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62E}\u{62A}\u{627}\u{631}\u{629}`,
            other: `\u{639}\u{62F}\u{62F} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62E}\u{62A}\u{627}\u{631}\u{629}`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`\u{627}\u{636}\u{63A}\u{637} \u{628}\u{627}\u{633}\u{62A}\u{645}\u{631}\u{627}\u{631} \u{644}\u{644}\u{633}\u{62D}\u{628} ${formatter.plural(args.count, {
            one: `\u{639}\u{62F}\u{62F} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62E}\u{62A}\u{627}\u{631}\u{629}`,
            other: `\u{639}\u{62F}\u{62F} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62E}\u{62A}\u{627}\u{631}\u{629}`
        })}.`,
    "dragStartedKeyboard": `\u{628}\u{62F}\u{623} \u{627}\u{644}\u{633}\u{62D}\u{628}. \u{627}\u{636}\u{63A}\u{637} Tab \u{644}\u{644}\u{627}\u{646}\u{62A}\u{642}\u{627}\u{644} \u{625}\u{644}\u{649} \u{645}\u{648}\u{636}\u{639} \u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}\u{60C} \u{62B}\u{645} \u{627}\u{636}\u{63A}\u{637} Enter \u{644}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}\u{60C} \u{623}\u{648} \u{627}\u{636}\u{63A}\u{637} Escape \u{644}\u{644}\u{625}\u{644}\u{63A}\u{627}\u{621}.`,
    "dragStartedTouch": `\u{628}\u{62F}\u{623} \u{627}\u{644}\u{633}\u{62D}\u{628}. \u{627}\u{646}\u{62A}\u{642}\u{644} \u{625}\u{644}\u{649} \u{645}\u{648}\u{636}\u{639} \u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}\u{60C} \u{62B}\u{645} \u{627}\u{636}\u{63A}\u{637} \u{645}\u{631}\u{62A}\u{64A}\u{646} \u{644}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}.`,
    "dragStartedVirtual": `\u{628}\u{62F}\u{623} \u{627}\u{644}\u{633}\u{62D}\u{628}. \u{627}\u{646}\u{62A}\u{642}\u{644} \u{625}\u{644}\u{649} \u{645}\u{643}\u{627}\u{646} \u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}\u{60C} \u{62B}\u{645} \u{627}\u{646}\u{642}\u{631} \u{623}\u{648} \u{627}\u{636}\u{63A}\u{637} Enter \u{644}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}.`,
    "dropCanceled": `\u{62A}\u{645} \u{625}\u{644}\u{63A}\u{627}\u{621} \u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}.`,
    "dropComplete": `\u{627}\u{643}\u{62A}\u{645}\u{644} \u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}.`,
    "dropDescriptionKeyboard": `\u{627}\u{636}\u{63A}\u{637} Enter \u{644}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}. \u{627}\u{636}\u{63A}\u{637} Escape \u{644}\u{625}\u{644}\u{63A}\u{627}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "dropDescriptionTouch": `\u{627}\u{636}\u{63A}\u{637} \u{645}\u{631}\u{62A}\u{64A}\u{646} \u{644}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}.`,
    "dropDescriptionVirtual": `\u{627}\u{646}\u{642}\u{631} \u{644}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}.`,
    "dropIndicator": `\u{645}\u{624}\u{634}\u{631} \u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}`,
    "dropOnItem": (args)=>`\u{625}\u{641}\u{644}\u{627}\u{62A} ${args.itemText}`,
    "dropOnRoot": `\u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}`,
    "endDragKeyboard": `\u{627}\u{644}\u{633}\u{62D}\u{628}. \u{627}\u{636}\u{63A}\u{637} Enter \u{644}\u{625}\u{644}\u{63A}\u{627}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "endDragTouch": `\u{627}\u{644}\u{633}\u{62D}\u{628}. \u{627}\u{636}\u{63A}\u{637} \u{645}\u{631}\u{62A}\u{64A}\u{646} \u{644}\u{625}\u{644}\u{63A}\u{627}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "endDragVirtual": `\u{627}\u{644}\u{633}\u{62D}\u{628}. \u{627}\u{646}\u{642}\u{631} \u{644}\u{625}\u{644}\u{63A}\u{627}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "insertAfter": (args)=>`\u{623}\u{62F}\u{62E}\u{644} \u{628}\u{639}\u{62F} ${args.itemText}`,
    "insertBefore": (args)=>`\u{623}\u{62F}\u{62E}\u{644} \u{642}\u{628}\u{644} ${args.itemText}`,
    "insertBetween": (args)=>`\u{623}\u{62F}\u{62E}\u{644} \u{628}\u{64A}\u{646} ${args.beforeItemText} \u{648} ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9xWJi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{201E}Enter\u{201C}, \u{437}\u{430} \u{434}\u{430} \u{437}\u{430}\u{43F}\u{43E}\u{447}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{442}\u{435}.`,
    "dragDescriptionKeyboardAlt": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Alt + Enter, \u{437}\u{430} \u{434}\u{430} \u{437}\u{430}\u{43F}\u{43E}\u{447}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{442}\u{435}.`,
    "dragDescriptionLongPress": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{43E}\u{434}\u{44A}\u{43B}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{43D}\u{43E}, \u{437}\u{430} \u{434}\u{430} \u{437}\u{430}\u{43F}\u{43E}\u{447}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{442}\u{435}.`,
    "dragDescriptionTouch": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{432}\u{443}\u{43A}\u{440}\u{430}\u{442}\u{43D}\u{43E}, \u{437}\u{430} \u{434}\u{430} \u{437}\u{430}\u{43F}\u{43E}\u{447}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{442}\u{435}.`,
    "dragDescriptionVirtual": `\u{429}\u{440}\u{430}\u{43A}\u{43D}\u{435}\u{442}\u{435}, \u{437}\u{430} \u{434}\u{430} \u{437}\u{430}\u{43F}\u{43E}\u{447}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{442}\u{435}.`,
    "dragItem": (args)=>`\u{41F}\u{43B}\u{44A}\u{437}\u{43D}\u{438} ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`\u{41F}\u{43B}\u{44A}\u{437}\u{43D}\u{438} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{430}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Enter, \u{437}\u{430} \u{434}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{43D}\u{435}\u{442}\u{435} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438}`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Alt \u{438} Enter, \u{437}\u{430} \u{434}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{43D}\u{435}\u{442}\u{435} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438}`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{43E}\u{434}\u{44A}\u{43B}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{43D}\u{43E}, \u{437}\u{430} \u{434}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{43D}\u{435}\u{442}\u{435} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438}`
        })}.`,
    "dragStartedKeyboard": `\u{417}\u{430}\u{43F}\u{43E}\u{447}\u{43D}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{43D}\u{435}. \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{201E}Tab\u{201C}, \u{437}\u{430} \u{434}\u{430} \u{441}\u{435} \u{43F}\u{440}\u{438}\u{434}\u{432}\u{438}\u{436}\u{438}\u{442}\u{435} \u{434}\u{43E} \u{446}\u{435}\u{43B}\u{442}\u{430}, \u{441}\u{43B}\u{435}\u{434} \u{43A}\u{43E}\u{435}\u{442}\u{43E} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{201E}Enter\u{201C} \u{437}\u{430} \u{43F}\u{443}\u{441}\u{43A}\u{430}\u{43D}\u{435} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{201E}Escape\u{201C} \u{437}\u{430} \u{43E}\u{442}\u{43C}\u{44F}\u{43D}\u{430}.`,
    "dragStartedTouch": `\u{417}\u{430}\u{43F}\u{43E}\u{447}\u{43D}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{43D}\u{435}. \u{41F}\u{440}\u{438}\u{434}\u{432}\u{438}\u{436}\u{435}\u{442}\u{435} \u{441}\u{435} \u{434}\u{43E} \u{446}\u{435}\u{43B}\u{442}\u{430}, \u{441}\u{43B}\u{435}\u{434} \u{43A}\u{43E}\u{435}\u{442}\u{43E} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{432}\u{443}\u{43A}\u{440}\u{430}\u{442}\u{43D}\u{43E}, \u{437}\u{430} \u{434}\u{430} \u{43F}\u{443}\u{441}\u{43D}\u{435}\u{442}\u{435}.`,
    "dragStartedVirtual": `\u{417}\u{430}\u{43F}\u{43E}\u{447}\u{43D}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{43D}\u{435}. \u{41F}\u{440}\u{438}\u{434}\u{432}\u{438}\u{436}\u{435}\u{442}\u{435} \u{441}\u{435} \u{434}\u{43E} \u{446}\u{435}\u{43B}\u{442}\u{430}, \u{441}\u{43B}\u{435}\u{434} \u{43A}\u{43E}\u{435}\u{442}\u{43E} \u{449}\u{440}\u{430}\u{43A}\u{43D}\u{435}\u{442}\u{435} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{201E}Enter\u{201C} \u{437}\u{430} \u{43F}\u{443}\u{441}\u{43A}\u{430}\u{43D}\u{435}.`,
    "dropCanceled": `\u{41F}\u{443}\u{441}\u{43A}\u{430}\u{43D}\u{435}\u{442}\u{43E} \u{435} \u{43E}\u{442}\u{43C}\u{435}\u{43D}\u{435}\u{43D}\u{43E}.`,
    "dropComplete": `\u{41F}\u{443}\u{441}\u{43A}\u{430}\u{43D}\u{435}\u{442}\u{43E} \u{435} \u{437}\u{430}\u{432}\u{44A}\u{440}\u{448}\u{435}\u{43D}\u{43E}.`,
    "dropDescriptionKeyboard": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{201E}Enter\u{201C} \u{437}\u{430} \u{43F}\u{443}\u{441}\u{43A}\u{430}\u{43D}\u{435}. \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{201E}Escape\u{201C} \u{437}\u{430} \u{43E}\u{442}\u{43C}\u{44F}\u{43D}\u{430} \u{43D}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{43D}\u{435}\u{442}\u{43E}.`,
    "dropDescriptionTouch": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{432}\u{443}\u{43A}\u{440}\u{430}\u{442}\u{43D}\u{43E} \u{437}\u{430} \u{43F}\u{443}\u{441}\u{43A}\u{430}\u{43D}\u{435}.`,
    "dropDescriptionVirtual": `\u{429}\u{440}\u{430}\u{43A}\u{43D}\u{435}\u{442}\u{435} \u{437}\u{430} \u{43F}\u{443}\u{441}\u{43A}\u{430}\u{43D}\u{435}.`,
    "dropIndicator": `\u{438}\u{43D}\u{434}\u{438}\u{43A}\u{430}\u{442}\u{43E}\u{440} \u{437}\u{430} \u{43F}\u{443}\u{441}\u{43A}\u{430}\u{43D}\u{435}`,
    "dropOnItem": (args)=>`\u{41F}\u{443}\u{441}\u{43D}\u{438} \u{432}\u{44A}\u{440}\u{445}\u{443} ${args.itemText}`,
    "dropOnRoot": `\u{41F}\u{443}\u{441}\u{43D}\u{438} \u{432}\u{44A}\u{440}\u{445}\u{443}`,
    "endDragKeyboard": `\u{41F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{43D}\u{435}. \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{201E}Enter\u{201C} \u{437}\u{430} \u{43E}\u{442}\u{43C}\u{44F}\u{43D}\u{430} \u{43D}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{43D}\u{435}\u{442}\u{43E}.`,
    "endDragTouch": `\u{41F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{43D}\u{435}. \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{432}\u{443}\u{43A}\u{440}\u{430}\u{442}\u{43D}\u{43E} \u{437}\u{430} \u{43E}\u{442}\u{43C}\u{44F}\u{43D}\u{430} \u{43D}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{43D}\u{435}\u{442}\u{43E}.`,
    "endDragVirtual": `\u{41F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{43D}\u{435}. \u{429}\u{440}\u{430}\u{43A}\u{43D}\u{435}\u{442}\u{435} \u{437}\u{430} \u{43E}\u{442}\u{43C}\u{44F}\u{43D}\u{430}.`,
    "insertAfter": (args)=>`\u{412}\u{43C}\u{44A}\u{43A}\u{43D}\u{438} \u{441}\u{43B}\u{435}\u{434} ${args.itemText}`,
    "insertBefore": (args)=>`\u{412}\u{43C}\u{44A}\u{43A}\u{43D}\u{438} \u{43F}\u{440}\u{435}\u{434}\u{438} ${args.itemText}`,
    "insertBetween": (args)=>`\u{412}\u{43C}\u{44A}\u{43A}\u{43D}\u{438} \u{43C}\u{435}\u{436}\u{434}\u{443} ${args.beforeItemText} \u{438} ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3ebxv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Stisknut\xedm kl\xe1vesy Enter za\u{10D}nete s p\u{159}etahov\xe1n\xedm.`,
    "dragDescriptionKeyboardAlt": `Stisknut\xedm Alt + Enter zah\xe1j\xedte p\u{159}etahov\xe1n\xed.`,
    "dragDescriptionLongPress": `Dlouh\xfdm stisknut\xedm zah\xe1j\xedte p\u{159}etahov\xe1n\xed.`,
    "dragDescriptionTouch": `Poklep\xe1n\xedm za\u{10D}nete s p\u{159}etahov\xe1n\xedm.`,
    "dragDescriptionVirtual": `Kliknut\xedm za\u{10D}nete s p\u{159}etahov\xe1n\xedm.`,
    "dragItem": (args)=>`P\u{159}et\xe1hnout ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`P\u{159}et\xe1hnout ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} vybranou polo\u{17E}ku`,
            few: ()=>`${formatter.number(args.count)} vybran\xe9 polo\u{17E}ky`,
            other: ()=>`${formatter.number(args.count)} vybran\xfdch polo\u{17E}ek`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Stisknut\xedm kl\xe1vesy Enter p\u{159}et\xe1hn\u{11B}te ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} vybranou polo\u{17E}ku`,
            other: ()=>`${formatter.number(args.count)} vybran\xe9 polo\u{17E}ky`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Stisknut\xedm Alt + Enter p\u{159}et\xe1hn\u{11B}te ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} vybranou polo\u{17E}ku`,
            other: ()=>`${formatter.number(args.count)} vybran\xe9 polo\u{17E}ky`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Dlouh\xfdm stisknut\xedm p\u{159}et\xe1hnete ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} vybranou polo\u{17E}ku`,
            other: ()=>`${formatter.number(args.count)} vybran\xe9 polo\u{17E}ky`
        })}.`,
    "dragStartedKeyboard": `Za\u{10D}n\u{11B}te s p\u{159}etahov\xe1n\xedm. Po stisknut\xed kl\xe1vesy Tab najd\u{11B}te po\u{17E}adovan\xfd c\xedl a stisknut\xedm kl\xe1vesy Enter p\u{159}eta\u{17E}en\xed dokon\u{10D}ete nebo stisknut\xedm kl\xe1vesy Esc akci zru\u{161}te.`,
    "dragStartedTouch": `Za\u{10D}n\u{11B}te s p\u{159}etahov\xe1n\xedm. Najd\u{11B}te po\u{17E}adovan\xfd c\xedl a poklep\xe1n\xedm p\u{159}eta\u{17E}en\xed dokon\u{10D}ete.`,
    "dragStartedVirtual": `Za\u{10D}n\u{11B}te s p\u{159}etahov\xe1n\xedm. Najd\u{11B}te po\u{17E}adovan\xfd c\xedl a kliknut\xedm nebo stisknut\xedm kl\xe1vesy Enter p\u{159}eta\u{17E}en\xed dokon\u{10D}ete.`,
    "dropCanceled": `P\u{159}eta\u{17E}en\xed bylo zru\u{161}eno.`,
    "dropComplete": `P\u{159}eta\u{17E}en\xed bylo dokon\u{10D}eno.`,
    "dropDescriptionKeyboard": `Stisknut\xedm kl\xe1vesy Enter p\u{159}eta\u{17E}en\xed dokon\u{10D}ete nebo stisknut\xedm kl\xe1vesy Esc akci zru\u{161}te.`,
    "dropDescriptionTouch": `Poklep\xe1n\xedm p\u{159}eta\u{17E}en\xed dokon\u{10D}ete.`,
    "dropDescriptionVirtual": `Kliknut\xedm objekt p\u{159}et\xe1hn\u{11B}te.`,
    "dropIndicator": `indik\xe1tor p\u{159}eta\u{17E}en\xed`,
    "dropOnItem": (args)=>`P\u{159}et\xe1hnout na ${args.itemText}`,
    "dropOnRoot": `P\u{159}et\xe1hnout na`,
    "endDragKeyboard": `Prob\xedh\xe1 p\u{159}etahov\xe1n\xed. Stisknut\xedm kl\xe1vesy Enter p\u{159}eta\u{17E}en\xed zru\u{161}\xedte.`,
    "endDragTouch": `Prob\xedh\xe1 p\u{159}etahov\xe1n\xed. Poklep\xe1n\xedm p\u{159}eta\u{17E}en\xed zru\u{161}\xedte.`,
    "endDragVirtual": `Prob\xedh\xe1 p\u{159}etahov\xe1n\xed. Kliknut\xedm p\u{159}eta\u{17E}en\xed zru\u{161}\xedte.`,
    "insertAfter": (args)=>`Vlo\u{17E}it za ${args.itemText}`,
    "insertBefore": (args)=>`Vlo\u{17E}it p\u{159}ed ${args.itemText}`,
    "insertBetween": (args)=>`Vlo\u{17E}it mezi ${args.beforeItemText} a ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1Uhm1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Tryk p\xe5 Enter for at starte med at tr\xe6kke.`,
    "dragDescriptionKeyboardAlt": `Tryk p\xe5 Alt + Enter for at starte med at tr\xe6kke.`,
    "dragDescriptionLongPress": `Tryk l\xe6nge for at starte med at tr\xe6kke.`,
    "dragDescriptionTouch": `Dobbelttryk for at starte med at tr\xe6kke.`,
    "dragDescriptionVirtual": `Klik for at starte med at tr\xe6kke.`,
    "dragItem": (args)=>`Tr\xe6k ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Tr\xe6k ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valgt element`,
            other: ()=>`${formatter.number(args.count)} valgte elementer`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Tryk p\xe5 Enter for at tr\xe6kke ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valgte element`,
            other: ()=>`${formatter.number(args.count)} valgte elementer`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Tryk p\xe5 Alt + Enter for at tr\xe6kke ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valgte element`,
            other: ()=>`${formatter.number(args.count)} valgte elementer`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Tryk l\xe6nge for at tr\xe6kke ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valgte element`,
            other: ()=>`${formatter.number(args.count)} valgte elementer`
        })}.`,
    "dragStartedKeyboard": `Startet med at tr\xe6kke. Tryk p\xe5 Tab for at g\xe5 til et slip-m\xe5l, tryk derefter p\xe5 Enter for at slippe, eller tryk p\xe5 Escape for at annullere.`,
    "dragStartedTouch": `Startet med at tr\xe6kke. G\xe5 til et slip-m\xe5l, og dobbelttryk derefter for at slippe.`,
    "dragStartedVirtual": `Startet med at tr\xe6kke. G\xe5 til et slip-m\xe5l, og klik eller tryk derefter p\xe5 enter for at slippe.`,
    "dropCanceled": `Slip annulleret.`,
    "dropComplete": `Slip fuldf\xf8rt.`,
    "dropDescriptionKeyboard": `Tryk p\xe5 Enter for at slippe. Tryk p\xe5 Escape for at annullere tr\xe6kning.`,
    "dropDescriptionTouch": `Dobbelttryk for at slippe.`,
    "dropDescriptionVirtual": `Klik for at slippe.`,
    "dropIndicator": `slip-indikator`,
    "dropOnItem": (args)=>`Slip p\xe5 ${args.itemText}`,
    "dropOnRoot": `Slip p\xe5`,
    "endDragKeyboard": `Tr\xe6kning. Tryk p\xe5 enter for at annullere tr\xe6k.`,
    "endDragTouch": `Tr\xe6kning. Dobbelttryk for at annullere tr\xe6k.`,
    "endDragVirtual": `Tr\xe6kning. Klik for at annullere tr\xe6kning.`,
    "insertAfter": (args)=>`Inds\xe6t efter ${args.itemText}`,
    "insertBefore": (args)=>`Inds\xe6t f\xf8r ${args.itemText}`,
    "insertBetween": (args)=>`Inds\xe6t mellem ${args.beforeItemText} og ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5YwEj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Dr\xfccken Sie die Eingabetaste, um den Ziehvorgang zu starten.`,
    "dragDescriptionKeyboardAlt": `Alt + Eingabe dr\xfccken, um den Ziehvorgang zu starten.`,
    "dragDescriptionLongPress": `Lang dr\xfccken, um mit dem Ziehen zu beginnen.`,
    "dragDescriptionTouch": `Tippen Sie doppelt, um den Ziehvorgang zu starten.`,
    "dragDescriptionVirtual": `Zum Starten des Ziehvorgangs klicken.`,
    "dragItem": (args)=>`${args.itemText} ziehen`,
    "dragSelectedItems": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} ausgew\xe4hltes Objekt`,
            other: ()=>`${formatter.number(args.count)} ausgew\xe4hlte Objekte`
        })} ziehen`,
    "dragSelectedKeyboard": (args, formatter)=>`Eingabetaste dr\xfccken, um ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} ausgew\xe4hltes Element`,
            other: ()=>`${formatter.number(args.count)} ausgew\xe4hlte Elemente`
        })} zu ziehen.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Alt + Eingabetaste dr\xfccken, um ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} ausgew\xe4hltes Element`,
            other: ()=>`${formatter.number(args.count)} ausgew\xe4hlte Elemente`
        })} zu ziehen.`,
    "dragSelectedLongPress": (args, formatter)=>`Lang dr\xfccken, um ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} ausgew\xe4hltes Element`,
            other: ()=>`${formatter.number(args.count)} ausgew\xe4hlte Elemente`
        })} zu ziehen.`,
    "dragStartedKeyboard": `Ziehvorgang gestartet. Dr\xfccken Sie die Tabulatortaste, um zu einem Ablegeziel zu navigieren und dr\xfccken Sie dann die Eingabetaste, um das Objekt abzulegen, oder Escape, um den Vorgang abzubrechen.`,
    "dragStartedTouch": `Ziehvorgang gestartet. Navigieren Sie zu einem Ablegeziel und tippen Sie doppelt, um das Objekt abzulegen.`,
    "dragStartedVirtual": `Ziehvorgang gestartet. Navigieren Sie zu einem Ablegeziel und klicken Sie oder dr\xfccken Sie die Eingabetaste, um das Objekt abzulegen.`,
    "dropCanceled": `Ablegen abgebrochen.`,
    "dropComplete": `Ablegen abgeschlossen.`,
    "dropDescriptionKeyboard": `Dr\xfccken Sie die Eingabetaste, um das Objekt abzulegen. Dr\xfccken Sie Escape, um den Vorgang abzubrechen.`,
    "dropDescriptionTouch": `Tippen Sie doppelt, um das Objekt abzulegen.`,
    "dropDescriptionVirtual": `Zum Ablegen klicken.`,
    "dropIndicator": `Ablegeanzeiger`,
    "dropOnItem": (args)=>`Auf ${args.itemText} ablegen`,
    "dropOnRoot": `Ablegen auf`,
    "endDragKeyboard": `Ziehvorgang l\xe4uft. Dr\xfccken Sie die Eingabetaste, um den Vorgang abzubrechen.`,
    "endDragTouch": `Ziehvorgang l\xe4uft. Tippen Sie doppelt, um den Vorgang abzubrechen.`,
    "endDragVirtual": `Ziehvorgang l\xe4uft. Klicken Sie, um den Vorgang abzubrechen.`,
    "insertAfter": (args)=>`Nach ${args.itemText} einf\xfcgen`,
    "insertBefore": (args)=>`Vor ${args.itemText} einf\xfcgen`,
    "insertBetween": (args)=>`Zwischen ${args.beforeItemText} und ${args.afterItemText} einf\xfcgen`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8wC7l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Enter \u{3B3}\u{3B9}\u{3B1} \u{3AD}\u{3BD}\u{3B1}\u{3C1}\u{3BE}\u{3B7} \u{3C4}\u{3B7}\u{3C2} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC}\u{3C2}.`,
    "dragDescriptionKeyboardAlt": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Alt + Enter \u{3B3}\u{3B9}\u{3B1} \u{3AD}\u{3BD}\u{3B1}\u{3C1}\u{3BE}\u{3B7} \u{3C4}\u{3B7}\u{3C2} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC}\u{3C2}.`,
    "dragDescriptionLongPress": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{3C0}\u{3B1}\u{3C1}\u{3B1}\u{3C4}\u{3B5}\u{3C4}\u{3B1}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BE}\u{3B5}\u{3BA}\u{3B9}\u{3BD}\u{3AE}\u{3C3}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3B7} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC}.`,
    "dragDescriptionTouch": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{3B4}\u{3CD}\u{3BF} \u{3C6}\u{3BF}\u{3C1}\u{3AD}\u{3C2} \u{3B3}\u{3B9}\u{3B1} \u{3AD}\u{3BD}\u{3B1}\u{3C1}\u{3BE}\u{3B7} \u{3C4}\u{3B7}\u{3C2} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC}\u{3C2}.`,
    "dragDescriptionVirtual": `\u{39A}\u{3AC}\u{3BD}\u{3C4}\u{3B5} \u{3BA}\u{3BB}\u{3B9}\u{3BA} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BE}\u{3B5}\u{3BA}\u{3B9}\u{3BD}\u{3AE}\u{3C3}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3B7} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC}.`,
    "dragItem": (args)=>`\u{39C}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC} ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`\u{39C}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC} \u{3C3}\u{3B5} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF}`,
            other: ()=>`${formatter.number(args.count)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3B1}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Enter \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3C3}\u{3CD}\u{3C1}\u{3B5}\u{3C4}\u{3B5} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF}`,
            other: ()=>`${formatter.number(args.count)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3B1}`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Alt + Enter \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3C3}\u{3CD}\u{3C1}\u{3B5}\u{3C4}\u{3B5} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF}`,
            other: ()=>`${formatter.number(args.count)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3B1}`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{3C0}\u{3B1}\u{3C1}\u{3B1}\u{3C4}\u{3B5}\u{3C4}\u{3B1}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3C3}\u{3CD}\u{3C1}\u{3B5}\u{3C4}\u{3B5} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF}`,
            other: ()=>`${formatter.number(args.count)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3B1}`
        })}.`,
    "dragStartedKeyboard": `\u{397} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC} \u{3BE}\u{3B5}\u{3BA}\u{3AF}\u{3BD}\u{3B7}\u{3C3}\u{3B5}. \u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{3C4}\u{3BF} \u{3C0}\u{3BB}\u{3AE}\u{3BA}\u{3C4}\u{3C1}\u{3BF} Tab \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3B2}\u{3B5}\u{3AF}\u{3C4}\u{3B5} \u{3C3}\u{3B5} \u{3AD}\u{3BD}\u{3B1}\u{3BD} \u{3C0}\u{3C1}\u{3BF}\u{3BF}\u{3C1}\u{3B9}\u{3C3}\u{3BC}\u{3CC} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7}\u{3C2} \u{3BA}\u{3B1}\u{3B9}, \u{3C3}\u{3C4}\u{3B7} \u{3C3}\u{3C5}\u{3BD}\u{3AD}\u{3C7}\u{3B5}\u{3B9}\u{3B1}, \u{3C0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Enter \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7} \u{3AE} \u{3C0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Escape \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3BA}\u{3CD}\u{3C1}\u{3C9}\u{3C3}\u{3B7}.`,
    "dragStartedTouch": `\u{397} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC} \u{3BE}\u{3B5}\u{3BA}\u{3AF}\u{3BD}\u{3B7}\u{3C3}\u{3B5}. \u{39C}\u{3B5}\u{3C4}\u{3B1}\u{3B2}\u{3B5}\u{3AF}\u{3C4}\u{3B5} \u{3C3}\u{3B5} \u{3AD}\u{3BD}\u{3B1}\u{3BD} \u{3C0}\u{3C1}\u{3BF}\u{3BF}\u{3C1}\u{3B9}\u{3C3}\u{3BC}\u{3CC} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7}\u{3C2} \u{3BA}\u{3B1}\u{3B9}, \u{3C3}\u{3C4}\u{3B7} \u{3C3}\u{3C5}\u{3BD}\u{3AD}\u{3C7}\u{3B5}\u{3B9}\u{3B1}, \u{3C0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{3B4}\u{3CD}\u{3BF} \u{3C6}\u{3BF}\u{3C1}\u{3AD}\u{3C2} \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7}.`,
    "dragStartedVirtual": `\u{397} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC} \u{3BE}\u{3B5}\u{3BA}\u{3AF}\u{3BD}\u{3B7}\u{3C3}\u{3B5}. \u{39C}\u{3B5}\u{3C4}\u{3B1}\u{3B2}\u{3B5}\u{3AF}\u{3C4}\u{3B5} \u{3C3}\u{3B5} \u{3AD}\u{3BD}\u{3B1}\u{3BD} \u{3C0}\u{3C1}\u{3BF}\u{3BF}\u{3C1}\u{3B9}\u{3C3}\u{3BC}\u{3CC} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7}\u{3C2} \u{3BA}\u{3B1}\u{3B9}, \u{3C3}\u{3C4}\u{3B7} \u{3C3}\u{3C5}\u{3BD}\u{3AD}\u{3C7}\u{3B5}\u{3B9}\u{3B1}, \u{3BA}\u{3AC}\u{3BD}\u{3C4}\u{3B5} \u{3BA}\u{3BB}\u{3B9}\u{3BA} \u{3AE} \u{3C0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Enter \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7}.`,
    "dropCanceled": `\u{397} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7} \u{3B1}\u{3BA}\u{3C5}\u{3C1}\u{3CE}\u{3B8}\u{3B7}\u{3BA}\u{3B5}.`,
    "dropComplete": `\u{397} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7} \u{3BF}\u{3BB}\u{3BF}\u{3BA}\u{3BB}\u{3B7}\u{3C1}\u{3CE}\u{3B8}\u{3B7}\u{3BA}\u{3B5}.`,
    "dropDescriptionKeyboard": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Enter \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7}. \u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Escape \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3BA}\u{3CD}\u{3C1}\u{3C9}\u{3C3}\u{3B7} \u{3C4}\u{3B7}\u{3C2} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC}\u{3C2}.`,
    "dropDescriptionTouch": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{3B4}\u{3CD}\u{3BF} \u{3C6}\u{3BF}\u{3C1}\u{3AD}\u{3C2} \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7}.`,
    "dropDescriptionVirtual": `\u{39A}\u{3AC}\u{3BD}\u{3C4}\u{3B5} \u{3BA}\u{3BB}\u{3B9}\u{3BA} \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7}.`,
    "dropIndicator": `\u{3B4}\u{3B5}\u{3AF}\u{3BA}\u{3C4}\u{3B7}\u{3C2} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7}\u{3C2}`,
    "dropOnItem": (args)=>`\u{391}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7} \u{3C3}\u{3B5} ${args.itemText}`,
    "dropOnRoot": `\u{391}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7} \u{3C3}\u{3B5}`,
    "endDragKeyboard": `\u{39C}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC} \u{3C3}\u{3B5} \u{3B5}\u{3BE}\u{3AD}\u{3BB}\u{3B9}\u{3BE}\u{3B7}. \u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Enter \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3BA}\u{3CD}\u{3C1}\u{3C9}\u{3C3}\u{3B7} \u{3C4}\u{3B7}\u{3C2} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC}\u{3C2}.`,
    "endDragTouch": `\u{39C}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC} \u{3C3}\u{3B5} \u{3B5}\u{3BE}\u{3AD}\u{3BB}\u{3B9}\u{3BE}\u{3B7}. \u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{3B4}\u{3CD}\u{3BF} \u{3C6}\u{3BF}\u{3C1}\u{3AD}\u{3C2} \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3BA}\u{3CD}\u{3C1}\u{3C9}\u{3C3}\u{3B7} \u{3C4}\u{3B7}\u{3C2} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC}\u{3C2}.`,
    "endDragVirtual": `\u{39C}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC} \u{3C3}\u{3B5} \u{3B5}\u{3BE}\u{3AD}\u{3BB}\u{3B9}\u{3BE}\u{3B7}. \u{39A}\u{3AC}\u{3BD}\u{3C4}\u{3B5} \u{3BA}\u{3BB}\u{3B9}\u{3BA} \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3BA}\u{3CD}\u{3C1}\u{3C9}\u{3C3}\u{3B7} \u{3C4}\u{3B7}\u{3C2} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC}\u{3C2}.`,
    "insertAfter": (args)=>`\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3C9}\u{3B3}\u{3AE} \u{3BC}\u{3B5}\u{3C4}\u{3AC} \u{3B1}\u{3C0}\u{3CC} ${args.itemText}`,
    "insertBefore": (args)=>`\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3C9}\u{3B3}\u{3AE} \u{3C0}\u{3C1}\u{3B9}\u{3BD} \u{3B1}\u{3C0}\u{3CC} ${args.itemText}`,
    "insertBetween": (args)=>`\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3C9}\u{3B3}\u{3AE} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3BE}\u{3CD} ${args.beforeItemText} \u{3BA}\u{3B1}\u{3B9} ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h68ua":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragItem": (args)=>`Drag ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Drag ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} selected item`,
            other: ()=>`${formatter.number(args.count)} selected items`
        })}`,
    "dragDescriptionKeyboard": `Press Enter to start dragging.`,
    "dragDescriptionKeyboardAlt": `Press Alt + Enter to start dragging.`,
    "dragDescriptionTouch": `Double tap to start dragging.`,
    "dragDescriptionVirtual": `Click to start dragging.`,
    "dragDescriptionLongPress": `Long press to start dragging.`,
    "dragSelectedKeyboard": (args, formatter)=>`Press Enter to drag ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} selected item`,
            other: ()=>`${formatter.number(args.count)} selected items`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Press Alt + Enter to drag ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} selected item`,
            other: ()=>`${formatter.number(args.count)} selected items`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Long press to drag ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} selected item`,
            other: ()=>`${formatter.number(args.count)} selected items`
        })}.`,
    "dragStartedKeyboard": `Started dragging. Press Tab to navigate to a drop target, then press Enter to drop, or press Escape to cancel.`,
    "dragStartedTouch": `Started dragging. Navigate to a drop target, then double tap to drop.`,
    "dragStartedVirtual": `Started dragging. Navigate to a drop target, then click or press Enter to drop.`,
    "endDragKeyboard": `Dragging. Press Enter to cancel drag.`,
    "endDragTouch": `Dragging. Double tap to cancel drag.`,
    "endDragVirtual": `Dragging. Click to cancel drag.`,
    "dropDescriptionKeyboard": `Press Enter to drop. Press Escape to cancel drag.`,
    "dropDescriptionTouch": `Double tap to drop.`,
    "dropDescriptionVirtual": `Click to drop.`,
    "dropCanceled": `Drop canceled.`,
    "dropComplete": `Drop complete.`,
    "dropIndicator": `drop indicator`,
    "dropOnRoot": `Drop on`,
    "dropOnItem": (args)=>`Drop on ${args.itemText}`,
    "insertBefore": (args)=>`Insert before ${args.itemText}`,
    "insertBetween": (args)=>`Insert between ${args.beforeItemText} and ${args.afterItemText}`,
    "insertAfter": (args)=>`Insert after ${args.itemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"048Gx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Pulse Intro para empezar a arrastrar.`,
    "dragDescriptionKeyboardAlt": `Pulse Intro para empezar a arrastrar.`,
    "dragDescriptionLongPress": `Mantenga pulsado para comenzar a arrastrar.`,
    "dragDescriptionTouch": `Pulse dos veces para iniciar el arrastre.`,
    "dragDescriptionVirtual": `Haga clic para iniciar el arrastre.`,
    "dragItem": (args)=>`Arrastrar ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Arrastrar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} elemento seleccionado`,
            other: ()=>`${formatter.number(args.count)} elementos seleccionados`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Pulse Intro para arrastrar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} elemento seleccionado`,
            other: ()=>`${formatter.number(args.count)} elementos seleccionados`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Pulse Alt + Intro para arrastrar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} elemento seleccionado`,
            other: ()=>`${formatter.number(args.count)} elementos seleccionados`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Mantenga pulsado para arrastrar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} elemento seleccionado`,
            other: ()=>`${formatter.number(args.count)} elementos seleccionados`
        })}.`,
    "dragStartedKeyboard": `Se ha empezado a arrastrar. Pulse el tabulador para ir al destino donde se vaya a colocar y, a continuaci\xf3n, pulse Intro para soltar, o pulse Escape para cancelar.`,
    "dragStartedTouch": `Se ha empezado a arrastrar. Vaya al destino donde se vaya a colocar y, a continuaci\xf3n, pulse dos veces para soltar.`,
    "dragStartedVirtual": `Se ha empezado a arrastrar. Vaya al destino donde se vaya a colocar y, a continuaci\xf3n, haga clic o pulse Intro para soltar.`,
    "dropCanceled": `Se ha cancelado la colocaci\xf3n.`,
    "dropComplete": `Colocaci\xf3n finalizada.`,
    "dropDescriptionKeyboard": `Pulse Intro para soltar. Pulse Escape para cancelar el arrastre.`,
    "dropDescriptionTouch": `Pulse dos veces para soltar.`,
    "dropDescriptionVirtual": `Haga clic para soltar.`,
    "dropIndicator": `indicador de colocaci\xf3n`,
    "dropOnItem": (args)=>`Soltar en ${args.itemText}`,
    "dropOnRoot": `Soltar en`,
    "endDragKeyboard": `Arrastrando. Pulse Intro para cancelar el arrastre.`,
    "endDragTouch": `Arrastrando. Pulse dos veces para cancelar el arrastre.`,
    "endDragVirtual": `Arrastrando. Haga clic para cancelar el arrastre.`,
    "insertAfter": (args)=>`Insertar despu\xe9s de ${args.itemText}`,
    "insertBefore": (args)=>`Insertar antes de ${args.itemText}`,
    "insertBetween": (args)=>`Insertar entre ${args.beforeItemText} y ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jDxev":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Lohistamise alustamiseks vajutage klahvi Enter.`,
    "dragDescriptionKeyboardAlt": `Lohistamise alustamiseks vajutage klahvikombinatsiooni Alt + Enter.`,
    "dragDescriptionLongPress": `Vajutage pikalt lohistamise alustamiseks.`,
    "dragDescriptionTouch": `Topeltpuudutage lohistamise alustamiseks.`,
    "dragDescriptionVirtual": `Kl\xf5psake lohistamise alustamiseks.`,
    "dragItem": (args)=>`Lohista ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Lohista ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valitud \xfcksust`,
            other: ()=>`${formatter.number(args.count)} valitud \xfcksust`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valitud \xfcksuse`,
            other: ()=>`${formatter.number(args.count)} valitud \xfcksuse`
        })} lohistamiseks vajutage sisestusklahvi Enter.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Lohistamiseks vajutage klahvikombinatsiooni Alt + Enter ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valitud \xfcksuse`,
            other: ()=>`${formatter.number(args.count)} valitud \xfcksuse`
        })} jaoks.`,
    "dragSelectedLongPress": (args, formatter)=>`Pikk vajutus ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valitud \xfcksuse`,
            other: ()=>`${formatter.number(args.count)} valitud \xfcksuse`
        })} lohistamiseks.`,
    "dragStartedKeyboard": `Alustati lohistamist. Kukutamise sihtm\xe4rgi juurde navigeerimiseks vajutage klahvi Tab, seej\xe4rel vajutage kukutamiseks klahvi Enter v\xf5i loobumiseks klahvi Escape.`,
    "dragStartedTouch": `Alustati lohistamist. Navigeerige kukutamise sihtm\xe4rgi juurde ja topeltpuudutage kukutamiseks.`,
    "dragStartedVirtual": `Alustati lohistamist. Navigeerige kukutamise sihtm\xe4rgi juurde ja kukutamiseks kl\xf5psake v\xf5i vajutage klahvi Enter.`,
    "dropCanceled": `Lohistamisest loobuti.`,
    "dropComplete": `Lohistamine on tehtud.`,
    "dropDescriptionKeyboard": `Kukutamiseks vajutage klahvi Enter. Lohistamisest loobumiseks vajutage klahvi Escape.`,
    "dropDescriptionTouch": `Kukutamiseks topeltpuudutage.`,
    "dropDescriptionVirtual": `Kukutamiseks kl\xf5psake.`,
    "dropIndicator": `lohistamise indikaator`,
    "dropOnItem": (args)=>`Kukuta asukohta ${args.itemText}`,
    "dropOnRoot": `Kukuta asukohta`,
    "endDragKeyboard": `Lohistamine. Lohistamisest loobumiseks vajutage klahvi Enter.`,
    "endDragTouch": `Lohistamine. Lohistamisest loobumiseks topeltpuudutage.`,
    "endDragVirtual": `Lohistamine. Lohistamisest loobumiseks kl\xf5psake.`,
    "insertAfter": (args)=>`Sisesta ${args.itemText} j\xe4rele`,
    "insertBefore": (args)=>`Sisesta ${args.itemText} ette`,
    "insertBetween": (args)=>`Sisesta ${args.beforeItemText} ja ${args.afterItemText} vahele`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lWPYG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Aloita vet\xe4minen painamalla Enter-n\xe4pp\xe4int\xe4.`,
    "dragDescriptionKeyboardAlt": `Aloita vet\xe4minen painamalla Alt + Enter -n\xe4pp\xe4inyhdistelm\xe4\xe4.`,
    "dragDescriptionLongPress": `Aloita vet\xe4minen pit\xe4m\xe4ll\xe4 painettuna.`,
    "dragDescriptionTouch": `Aloita vet\xe4minen kaksoisnapauttamalla.`,
    "dragDescriptionVirtual": `Aloita vet\xe4minen napsauttamalla.`,
    "dragItem": (args)=>`Ved\xe4 kohdetta ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Ved\xe4 ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valittua kohdetta`,
            other: ()=>`${formatter.number(args.count)} valittua kohdetta`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Ved\xe4 painamalla Enter ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valittu kohde`,
            other: ()=>`${formatter.number(args.count)} valittua kohdetta`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Ved\xe4 painamalla Alt + Enter ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valittu kohde`,
            other: ()=>`${formatter.number(args.count)} valittua kohdetta`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Ved\xe4 pit\xe4m\xe4ll\xe4 painettuna ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valittu kohde`,
            other: ()=>`${formatter.number(args.count)} valittua kohdetta`
        })}.`,
    "dragStartedKeyboard": `Vet\xe4minen aloitettu. Siirry pudotuskohteeseen painamalla sarkainn\xe4pp\xe4int\xe4 ja sitten pudota painamalla Enter-n\xe4pp\xe4int\xe4 tai peruuta painamalla Escape-n\xe4pp\xe4int\xe4.`,
    "dragStartedTouch": `Vet\xe4minen aloitettu. Siirry pudotuskohteeseen ja pudota kaksoisnapauttamalla.`,
    "dragStartedVirtual": `Vet\xe4minen aloitettu. Siirry pudotuskohteeseen ja pudota napsauttamalla tai painamalla Enter-n\xe4pp\xe4int\xe4.`,
    "dropCanceled": `Pudotus peruutettu.`,
    "dropComplete": `Pudotus suoritettu.`,
    "dropDescriptionKeyboard": `Pudota painamalla Enter-n\xe4pp\xe4int\xe4. Peruuta vet\xe4minen painamalla Escape-n\xe4pp\xe4int\xe4.`,
    "dropDescriptionTouch": `Pudota kaksoisnapauttamalla.`,
    "dropDescriptionVirtual": `Pudota napsauttamalla.`,
    "dropIndicator": `pudotuksen ilmaisin`,
    "dropOnItem": (args)=>`Pudota kohteeseen ${args.itemText}`,
    "dropOnRoot": `Pudota kohteeseen`,
    "endDragKeyboard": `Vedet\xe4\xe4n. Peruuta vet\xe4minen painamalla Enter-n\xe4pp\xe4int\xe4.`,
    "endDragTouch": `Vedet\xe4\xe4n. Peruuta vet\xe4minen kaksoisnapauttamalla.`,
    "endDragVirtual": `Vedet\xe4\xe4n. Peruuta vet\xe4minen napsauttamalla.`,
    "insertAfter": (args)=>`Lis\xe4\xe4 kohteen ${args.itemText} j\xe4lkeen`,
    "insertBefore": (args)=>`Lis\xe4\xe4 ennen kohdetta ${args.itemText}`,
    "insertBetween": (args)=>`Lis\xe4\xe4 kohteiden ${args.beforeItemText} ja ${args.afterItemText} v\xe4liin`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7kzBw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Appuyez sur Entr\xe9e pour commencer le d\xe9placement.`,
    "dragDescriptionKeyboardAlt": `Appuyez sur Alt\xa0+\xa0Entr\xe9e pour commencer \xe0 faire glisser.`,
    "dragDescriptionLongPress": `Appuyez de mani\xe8re prolong\xe9e pour commencer \xe0 faire glisser.`,
    "dragDescriptionTouch": `Touchez deux fois pour commencer le d\xe9placement.`,
    "dragDescriptionVirtual": `Cliquez pour commencer le d\xe9placement.`,
    "dragItem": (args)=>`D\xe9placer ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`D\xe9placer ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,
            other: ()=>`${formatter.number(args.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Appuyez sur Entr\xe9e pour faire glisser ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,
            other: ()=>`${formatter.number(args.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Appuyez sur Alt\xa0+\xa0Entr\xe9e pour faire glisser ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,
            other: ()=>`${formatter.number(args.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Appuyez de mani\xe8re prolong\xe9e pour faire glisser ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,
            other: ()=>`${formatter.number(args.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`
        })}.`,
    "dragStartedKeyboard": `D\xe9placement commenc\xe9. Appuyez sur Tabulation pour acc\xe9der \xe0 une cible de d\xe9p\xf4t, puis appuyez sur Entr\xe9e pour d\xe9poser, ou appuyez sur \xc9chap pour annuler.`,
    "dragStartedTouch": `D\xe9placement commenc\xe9. Acc\xe9dez \xe0 une cible de d\xe9p\xf4t, puis touchez deux fois pour d\xe9poser.`,
    "dragStartedVirtual": `D\xe9placement commenc\xe9. Acc\xe9dez \xe0 une cible de d\xe9p\xf4t, puis cliquez ou appuyez sur Entr\xe9e pour d\xe9poser.`,
    "dropCanceled": `D\xe9p\xf4t annul\xe9.`,
    "dropComplete": `D\xe9p\xf4t termin\xe9.`,
    "dropDescriptionKeyboard": `Appuyez sur Entr\xe9e pour d\xe9poser. Appuyez sur \xc9chap pour annuler le d\xe9placement.`,
    "dropDescriptionTouch": `Touchez deux fois pour d\xe9poser.`,
    "dropDescriptionVirtual": `Cliquez pour d\xe9poser.`,
    "dropIndicator": `indicateur de d\xe9p\xf4t`,
    "dropOnItem": (args)=>`D\xe9poser sur ${args.itemText}`,
    "dropOnRoot": `D\xe9poser sur`,
    "endDragKeyboard": `D\xe9placement. Appuyez sur Entr\xe9e pour annuler le d\xe9placement.`,
    "endDragTouch": `D\xe9placement. Touchez deux fois pour annuler le d\xe9placement.`,
    "endDragVirtual": `D\xe9placement. Cliquez pour annuler le d\xe9placement.`,
    "insertAfter": (args)=>`Ins\xe9rer apr\xe8s ${args.itemText}`,
    "insertBefore": (args)=>`Ins\xe9rer avant ${args.itemText}`,
    "insertBetween": (args)=>`Ins\xe9rer entre ${args.beforeItemText} et ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iuLQC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `\u{5D4}\u{5E7}\u{5E9} \u{5E2}\u{5DC} Enter \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5EA}\u{5D7}\u{5D9}\u{5DC} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8}.`,
    "dragDescriptionKeyboardAlt": `\u{5D4}\u{5E7}\u{5E9} Alt + Enter \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5EA}\u{5D7}\u{5D9}\u{5DC} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8}.`,
    "dragDescriptionLongPress": `\u{5DC}\u{5D7}\u{5E5} \u{5DC}\u{5D7}\u{5D9}\u{5E6}\u{5D4} \u{5D0}\u{5E8}\u{5D5}\u{5DB}\u{5D4} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5EA}\u{5D7}\u{5D9}\u{5DC} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8}.`,
    "dragDescriptionTouch": `\u{5D4}\u{5E7}\u{5E9} \u{5E4}\u{5E2}\u{5DE}\u{5D9}\u{5D9}\u{5DD} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5EA}\u{5D7}\u{5D9}\u{5DC} \u{5D1}\u{5D2}\u{5E8}\u{5D9}\u{5E8}\u{5D4}.`,
    "dragDescriptionVirtual": `\u{5DC}\u{5D7}\u{5E5} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5EA}\u{5D7}\u{5D9}\u{5DC} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8}.`,
    "dragItem": (args)=>`\u{5D2}\u{5E8}\u{5D5}\u{5E8} \u{5D0}\u{5EA} ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`\u{5D2}\u{5E8}\u{5D5}\u{5E8} ${formatter.plural(args.count, {
            one: ()=>`\u{5E4}\u{5E8}\u{5D9}\u{5D8} \u{5E0}\u{5D1}\u{5D7}\u{5E8} ${formatter.number(args.count)}`,
            other: ()=>`${formatter.number(args.count)} \u{5E4}\u{5E8}\u{5D9}\u{5D8}\u{5D9}\u{5DD} \u{5E9}\u{5E0}\u{5D1}\u{5D7}\u{5E8}\u{5D5}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`\u{5D4}\u{5E7}\u{5E9} \u{5E2}\u{5DC} Enter \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{5E4}\u{5E8}\u{5D9}\u{5D8} \u{5E9}\u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
            other: ()=>`${formatter.number(args.count)} \u{5E4}\u{5E8}\u{5D9}\u{5D8}\u{5D9}\u{5DD} \u{5E9}\u{5E0}\u{5D1}\u{5D7}\u{5E8}\u{5D5}`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`\u{5D4}\u{5E7}\u{5E9} Alt + Enter \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{5E4}\u{5E8}\u{5D9}\u{5D8} \u{5E9}\u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
            other: ()=>`${formatter.number(args.count)} \u{5E4}\u{5E8}\u{5D9}\u{5D8}\u{5D9}\u{5DD} \u{5E9}\u{5E0}\u{5D1}\u{5D7}\u{5E8}\u{5D5}`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`\u{5DC}\u{5D7}\u{5E5} \u{5DC}\u{5D7}\u{5D9}\u{5E6}\u{5D4} \u{5D0}\u{5E8}\u{5D5}\u{5DB}\u{5D4} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{5E4}\u{5E8}\u{5D9}\u{5D8} \u{5E9}\u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
            other: ()=>`${formatter.number(args.count)} \u{5E4}\u{5E8}\u{5D9}\u{5D8}\u{5D9}\u{5DD} \u{5E9}\u{5E0}\u{5D1}\u{5D7}\u{5E8}\u{5D5}`
        })}.`,
    "dragStartedKeyboard": `\u{5D4}\u{5EA}\u{5D7}\u{5DC}\u{5EA} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8}. \u{5D4}\u{5E7}\u{5E9} \u{5E2}\u{5DC} Tab \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E0}\u{5D5}\u{5D5}\u{5D8} \u{5DC}\u{5E0}\u{5E7}\u{5D5}\u{5D3}\u{5EA} \u{5D4}\u{5D2}\u{5E8}\u{5D9}\u{5E8}\u{5D4} \u{5D5}\u{5DC}\u{5D0}\u{5D7}\u{5E8} \u{5DE}\u{5DB}\u{5DF} \u{5D4}\u{5E7}\u{5E9} \u{5E2}\u{5DC} Enter \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E9}\u{5D7}\u{5E8}\u{5E8} \u{5D0}\u{5D5} \u{5E2}\u{5DC} Escape \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D1}\u{5D8}\u{5DC}.`,
    "dragStartedTouch": `\u{5D4}\u{5EA}\u{5D7}\u{5DC}\u{5EA} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8}. \u{5E0}\u{5D5}\u{5D5}\u{5D8} \u{5DC}\u{5E0}\u{5E7}\u{5D5}\u{5D3}\u{5EA} \u{5D4}\u{5E9}\u{5D7}\u{5E8}\u{5D5}\u{5E8} \u{5D5}\u{5DC}\u{5D0}\u{5D7}\u{5E8} \u{5DE}\u{5DB}\u{5DF} \u{5D4}\u{5E7}\u{5E9} \u{5E4}\u{5E2}\u{5DE}\u{5D9}\u{5D9}\u{5DD} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E9}\u{5D7}\u{5E8}\u{5E8}.`,
    "dragStartedVirtual": `\u{5D4}\u{5EA}\u{5D7}\u{5DC}\u{5EA} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8}. \u{5E0}\u{5D5}\u{5D5}\u{5D8} \u{5DC}\u{5E0}\u{5E7}\u{5D5}\u{5D3}\u{5EA} \u{5D4}\u{5E9}\u{5D7}\u{5E8}\u{5D5}\u{5E8} \u{5D5}\u{5DC}\u{5D0}\u{5D7}\u{5E8} \u{5DE}\u{5DB}\u{5DF} \u{5DC}\u{5D7}\u{5E5} \u{5D0}\u{5D5} \u{5D4}\u{5E7}\u{5E9} \u{5E2}\u{5DC} Enter \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E9}\u{5D7}\u{5E8}\u{5E8}.`,
    "dropCanceled": `\u{5D4}\u{5E9}\u{5D7}\u{5E8}\u{5D5}\u{5E8} \u{5D1}\u{5D5}\u{5D8}\u{5DC}.`,
    "dropComplete": `\u{5D4}\u{5E9}\u{5D7}\u{5E8}\u{5D5}\u{5E8} \u{5D4}\u{5D5}\u{5E9}\u{5DC}\u{5DD}.`,
    "dropDescriptionKeyboard": `\u{5D4}\u{5E7}\u{5E9} \u{5E2}\u{5DC} Enter \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E9}\u{5D7}\u{5E8}\u{5E8}. \u{5D4}\u{5E7}\u{5E9} \u{5E2}\u{5DC} Escape \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D1}\u{5D8}\u{5DC} \u{5D0}\u{5EA} \u{5D4}\u{5D2}\u{5E8}\u{5D9}\u{5E8}\u{5D4}.`,
    "dropDescriptionTouch": `\u{5D4}\u{5E7}\u{5E9} \u{5E4}\u{5E2}\u{5DE}\u{5D9}\u{5D9}\u{5DD} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E9}\u{5D7}\u{5E8}\u{5E8}.`,
    "dropDescriptionVirtual": `\u{5DC}\u{5D7}\u{5E5} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E9}\u{5D7}\u{5E8}\u{5E8}.`,
    "dropIndicator": `\u{5DE}\u{5D7}\u{5D5}\u{5D5}\u{5DF} \u{5E9}\u{5D7}\u{5E8}\u{5D5}\u{5E8}`,
    "dropOnItem": (args)=>`\u{5E9}\u{5D7}\u{5E8}\u{5E8} \u{5E2}\u{5DC} ${args.itemText}`,
    "dropOnRoot": `\u{5E9}\u{5D7}\u{5E8}\u{5E8} \u{5E2}\u{5DC}`,
    "endDragKeyboard": `\u{5D2}\u{5D5}\u{5E8}\u{5E8}. \u{5D4}\u{5E7}\u{5E9} \u{5E2}\u{5DC} Enter \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D1}\u{5D8}\u{5DC} \u{5D0}\u{5EA} \u{5D4}\u{5D2}\u{5E8}\u{5D9}\u{5E8}\u{5D4}.`,
    "endDragTouch": `\u{5D2}\u{5D5}\u{5E8}\u{5E8}. \u{5D4}\u{5E7}\u{5E9} \u{5E4}\u{5E2}\u{5DE}\u{5D9}\u{5D9}\u{5DD} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D1}\u{5D8}\u{5DC} \u{5D0}\u{5EA} \u{5D4}\u{5D2}\u{5E8}\u{5D9}\u{5E8}\u{5D4}.`,
    "endDragVirtual": `\u{5D2}\u{5D5}\u{5E8}\u{5E8}. \u{5DC}\u{5D7}\u{5E5} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D1}\u{5D8}\u{5DC} \u{5D0}\u{5EA} \u{5D4}\u{5D2}\u{5E8}\u{5D9}\u{5E8}\u{5D4}.`,
    "insertAfter": (args)=>`\u{5D4}\u{5D5}\u{5E1}\u{5E3} \u{5D0}\u{5D7}\u{5E8}\u{5D9} ${args.itemText}`,
    "insertBefore": (args)=>`\u{5D4}\u{5D5}\u{5E1}\u{5E3} \u{5DC}\u{5E4}\u{5E0}\u{5D9} ${args.itemText}`,
    "insertBetween": (args)=>`\u{5D4}\u{5D5}\u{5E1}\u{5E3} \u{5D1}\u{5D9}\u{5DF} ${args.beforeItemText} \u{5DC}\u{5D1}\u{5D9}\u{5DF} ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1sa48":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Pritisnite Enter da biste po\u{10D}eli povla\u{10D}iti.`,
    "dragDescriptionKeyboardAlt": `Pritisnite Alt + Enter za po\u{10D}etak povla\u{10D}enja.`,
    "dragDescriptionLongPress": `Dugo pritisnite za po\u{10D}etak povla\u{10D}enja.`,
    "dragDescriptionTouch": `Dvaput dodirnite da biste po\u{10D}eli povla\u{10D}iti.`,
    "dragDescriptionVirtual": `Kliknite da biste po\u{10D}eli povla\u{10D}iti.`,
    "dragItem": (args)=>`Povucite stavku ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Povucite ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} odabranu stavku`,
            other: ()=>`ovoliko odabranih stavki: ${formatter.number(args.count)}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Pritisnite Enter za povla\u{10D}enje ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} odabrana stavka`,
            other: ()=>`${formatter.number(args.count)} odabrane stavke`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Pritisnite Alt + Enter za povla\u{10D}enje ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} odabrana stavka`,
            other: ()=>`${formatter.number(args.count)} odabrane stavke`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Dugo pritisnite za povla\u{10D}enje ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} odabrana stavka`,
            other: ()=>`${formatter.number(args.count)} odabrane stavke`
        })}.`,
    "dragStartedKeyboard": `Po\u{10D}eli ste povla\u{10D}iti. Pritisnite tipku tabulatora da biste do\u{161}li do cilja ispu\u{161}tanja, a zatim Enter da biste ispustili stavku ili Escape da biste prekinuli povla\u{10D}enje.`,
    "dragStartedTouch": `Po\u{10D}eli ste povla\u{10D}iti. Do\u{111}ite do cilja ispu\u{161}tanja, a zatim dvaput dodirnite da biste ispustili stavku.`,
    "dragStartedVirtual": `Po\u{10D}eli ste povla\u{10D}iti. Do\u{111}ite do cilja ispu\u{161}tanja, a zatim kliknite ili pritisnite Enter da biste ispustili stavku.`,
    "dropCanceled": `Povla\u{10D}enje je prekinuto.`,
    "dropComplete": `Ispu\u{161}tanje je dovr\u{161}eno.`,
    "dropDescriptionKeyboard": `Pritisnite Enter da biste ispustili stavku. Pritisnite Escape da biste prekinuli povla\u{10D}enje.`,
    "dropDescriptionTouch": `Dvaput dodirnite da biste ispustili stavku.`,
    "dropDescriptionVirtual": `Kliknite da biste ispustili stavku.`,
    "dropIndicator": `pokazatelj ispu\u{161}tanja`,
    "dropOnItem": (args)=>`Ispustite na stavku ${args.itemText}`,
    "dropOnRoot": `Ispustite na`,
    "endDragKeyboard": `Povla\u{10D}enje. Pritisnite Enter da biste prekinuli povla\u{10D}enje.`,
    "endDragTouch": `Povla\u{10D}enje. Dvaput dodirnite da biste prekinuli povla\u{10D}enje.`,
    "endDragVirtual": `Povla\u{10D}enje. Kliknite da biste prekinuli povla\u{10D}enje.`,
    "insertAfter": (args)=>`Umetnite iza stavke ${args.itemText}`,
    "insertBefore": (args)=>`Ispustite ispred stavke ${args.itemText}`,
    "insertBetween": (args)=>`Umetnite izme\u{111}u stavki ${args.beforeItemText} i ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"in1pr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Nyomja le az Enter billenty\u{171}t a h\xfaz\xe1s megkezd\xe9s\xe9hez.`,
    "dragDescriptionKeyboardAlt": `Nyomja le az Alt + Enter billenty\u{171}ket a h\xfaz\xe1s megkezd\xe9s\xe9hez.`,
    "dragDescriptionLongPress": `Hosszan nyomja meg a h\xfaz\xe1s elind\xedt\xe1s\xe1hoz.`,
    "dragDescriptionTouch": `Koppintson dupl\xe1n a h\xfaz\xe1s megkezd\xe9s\xe9hez.`,
    "dragDescriptionVirtual": `Kattintson a h\xfaz\xe1s megkezd\xe9s\xe9hez.`,
    "dragItem": (args)=>`${args.itemText} h\xfaz\xe1sa`,
    "dragSelectedItems": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} kijel\xf6lt elem`,
            other: ()=>`${formatter.number(args.count)} kijel\xf6lt elem`
        })} h\xfaz\xe1sa`,
    "dragSelectedKeyboard": (args, formatter)=>`Nyomja meg az Entert ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} kijel\xf6lt elem`,
            other: ()=>`${formatter.number(args.count)} kijel\xf6lt elem`
        })} h\xfaz\xe1s\xe1hoz.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Nyomja meg az Alt + Enter billenty\u{171}ket ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} kijel\xf6lt elem`,
            other: ()=>`${formatter.number(args.count)} kijel\xf6lt elem`
        })} h\xfaz\xe1s\xe1hoz.`,
    "dragSelectedLongPress": (args, formatter)=>`Tartsa lenyomva hosszan ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} kijel\xf6lt elem`,
            other: ()=>`${formatter.number(args.count)} kijel\xf6lt elem`
        })} h\xfaz\xe1s\xe1hoz.`,
    "dragStartedKeyboard": `H\xfaz\xe1s megkezdve. Nyomja le a Tab billenty\u{171}t az elenged\xe9si c\xe9lhoz navig\xe1l\xe1s\xe1hoz, majd nyomja le az Enter billenty\u{171}t az elenged\xe9shez, vagy nyomja le az Escape billenty\u{171}t a megszak\xedt\xe1shoz.`,
    "dragStartedTouch": `H\xfaz\xe1s megkezdve. Navig\xe1ljon egy elenged\xe9si c\xe9lhoz, majd koppintson dupl\xe1n az elenged\xe9shez.`,
    "dragStartedVirtual": `H\xfaz\xe1s megkezdve. Navig\xe1ljon egy elenged\xe9si c\xe9lhoz, majd kattintson vagy nyomja le az Enter billenty\u{171}t az elenged\xe9shez.`,
    "dropCanceled": `Elenged\xe9s megszak\xedtva.`,
    "dropComplete": `Elenged\xe9s teljes\xedtve.`,
    "dropDescriptionKeyboard": `Nyomja le az Enter billenty\u{171}t az elenged\xe9shez. Nyomja le az Escape billenty\u{171}t a h\xfaz\xe1s megszak\xedt\xe1s\xe1hoz.`,
    "dropDescriptionTouch": `Koppintson dupl\xe1n az elenged\xe9shez.`,
    "dropDescriptionVirtual": `Kattintson az elenged\xe9shez.`,
    "dropIndicator": `elenged\xe9sjelz\u{151}`,
    "dropOnItem": (args)=>`Elenged\xe9s erre: ${args.itemText}`,
    "dropOnRoot": `Elenged\xe9s erre:`,
    "endDragKeyboard": `H\xfaz\xe1s folyamatban. Nyomja le az Enter billenty\u{171}t a h\xfaz\xe1s megszak\xedt\xe1s\xe1hoz.`,
    "endDragTouch": `H\xfaz\xe1s folyamatban. Koppintson dupl\xe1n a h\xfaz\xe1s megszak\xedt\xe1s\xe1hoz.`,
    "endDragVirtual": `H\xfaz\xe1s folyamatban. Kattintson a h\xfaz\xe1s megszak\xedt\xe1s\xe1hoz.`,
    "insertAfter": (args)=>`Besz\xfar\xe1s ${args.itemText} ut\xe1n`,
    "insertBefore": (args)=>`Besz\xfar\xe1s ${args.itemText} el\xe9`,
    "insertBetween": (args)=>`Besz\xfar\xe1s ${args.beforeItemText} \xe9s ${args.afterItemText} k\xf6z\xe9`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5Pk0A":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Premi Invio per iniziare a trascinare.`,
    "dragDescriptionKeyboardAlt": `Premi Alt + Invio per iniziare a trascinare.`,
    "dragDescriptionLongPress": `Premi a lungo per iniziare a trascinare.`,
    "dragDescriptionTouch": `Tocca due volte per iniziare a trascinare.`,
    "dragDescriptionVirtual": `Fai clic per iniziare a trascinare.`,
    "dragItem": (args)=>`Trascina ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Trascina ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} altro elemento selezionato`,
            other: ()=>`${formatter.number(args.count)} altri elementi selezionati`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Premi Invio per trascinare ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} elemento selezionato`,
            other: ()=>`${formatter.number(args.count)} elementi selezionati`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Premi Alt + Invio per trascinare ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} elemento selezionato`,
            other: ()=>`${formatter.number(args.count)} elementi selezionati`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Premi a lungo per trascinare ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} elemento selezionato`,
            other: ()=>`${formatter.number(args.count)} elementi selezionati`
        })}.`,
    "dragStartedKeyboard": `Hai iniziato a trascinare. Premi Tab per arrivare sull\u{2019}area di destinazione, quindi premi Invio per rilasciare o Esc per annullare.`,
    "dragStartedTouch": `Hai iniziato a trascinare. Arriva sull\u{2019}area di destinazione, quindi tocca due volte per rilasciare.`,
    "dragStartedVirtual": `Hai iniziato a trascinare. Arriva sull\u{2019}area di destinazione, quindi fai clic o premi Invio per rilasciare.`,
    "dropCanceled": `Rilascio annullato.`,
    "dropComplete": `Rilascio completato.`,
    "dropDescriptionKeyboard": `Premi Invio per rilasciare. Premi Esc per annullare.`,
    "dropDescriptionTouch": `Tocca due volte per rilasciare.`,
    "dropDescriptionVirtual": `Fai clic per rilasciare.`,
    "dropIndicator": `indicatore di rilascio`,
    "dropOnItem": (args)=>`Rilascia su ${args.itemText}`,
    "dropOnRoot": `Rilascia su`,
    "endDragKeyboard": `Trascinamento. Premi Invio per annullare.`,
    "endDragTouch": `Trascinamento. Tocca due volte per annullare.`,
    "endDragVirtual": `Trascinamento. Fai clic per annullare.`,
    "insertAfter": (args)=>`Inserisci dopo ${args.itemText}`,
    "insertBefore": (args)=>`Inserisci prima di ${args.itemText}`,
    "insertBetween": (args)=>`Inserisci tra ${args.beforeItemText} e ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"d54tn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Enter \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{958B}\u{59CB}\u{3057}\u{3066}\u{304F}\u{3060}\u{3055}\u{3044}\u{3002}`,
    "dragDescriptionKeyboardAlt": `Alt+Enter \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{958B}\u{59CB}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dragDescriptionLongPress": `\u{9577}\u{62BC}\u{3057}\u{3057}\u{3066}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{958B}\u{59CB}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dragDescriptionTouch": `\u{30C0}\u{30D6}\u{30EB}\u{30BF}\u{30C3}\u{30D7}\u{3057}\u{3066}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{958B}\u{59CB}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dragDescriptionVirtual": `\u{30AF}\u{30EA}\u{30C3}\u{30AF}\u{3057}\u{3066}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{958B}\u{59CB}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dragItem": (args)=>`${args.itemText} \u{3092}\u{30C9}\u{30E9}\u{30C3}\u{30B0}`,
    "dragSelectedItems": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{500B}\u{306E}\u{9078}\u{629E}\u{9805}\u{76EE}`,
            other: ()=>`${formatter.number(args.count)} \u{500B}\u{306E}\u{9078}\u{629E}\u{9805}\u{76EE}`
        })} \u{3092}\u{30C9}\u{30E9}\u{30C3}\u{30B0}`,
    "dragSelectedKeyboard": (args, formatter)=>`Enter \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{3001}${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{9078}\u{629E}\u{3057}\u{305F}\u{9805}\u{76EE}`,
            other: ()=>`${formatter.number(args.count)} \u{9078}\u{629E}\u{3057}\u{305F}\u{9805}\u{76EE}`
        })}\u{3092}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Alt+Enter \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{3001}${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{9078}\u{629E}\u{3057}\u{305F}\u{9805}\u{76EE}`,
            other: ()=>`${formatter.number(args.count)} \u{9078}\u{629E}\u{3057}\u{305F}\u{9805}\u{76EE}`
        })}\u{3092}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dragSelectedLongPress": (args, formatter)=>`\u{9577}\u{62BC}\u{3057}\u{3057}\u{3066}\u{3001}${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{9078}\u{629E}\u{3057}\u{305F}\u{9805}\u{76EE}`,
            other: ()=>`${formatter.number(args.count)} \u{9078}\u{629E}\u{3057}\u{305F}\u{9805}\u{76EE}`
        })}\u{3092}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dragStartedKeyboard": `\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{958B}\u{59CB}\u{3057}\u{307E}\u{3059}\u{3002}Tab \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{30BF}\u{30FC}\u{30B2}\u{30C3}\u{30C8}\u{306B}\u{3044}\u{3069}\u{3046}\u{3057}\u{3001}Enter \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{3059}\u{308B}\u{304B}\u{3001}Esc \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30AD}\u{30E3}\u{30F3}\u{30BB}\u{30EB}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dragStartedTouch": `\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{958B}\u{59CB}\u{3057}\u{307E}\u{3057}\u{305F}\u{3002}\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{306E}\u{30BF}\u{30FC}\u{30B2}\u{30C3}\u{30C8}\u{306B}\u{79FB}\u{52D5}\u{3057}\u{3001}\u{30C0}\u{30D6}\u{30EB}\u{30BF}\u{30C3}\u{30D7}\u{3057}\u{3066}\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dragStartedVirtual": `\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{958B}\u{59CB}\u{3057}\u{307E}\u{3057}\u{305F}\u{3002}\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{306E}\u{30BF}\u{30FC}\u{30B2}\u{30C3}\u{30C8}\u{306B}\u{79FB}\u{52D5}\u{3057}\u{3001}\u{30AF}\u{30EA}\u{30C3}\u{30AF}\u{307E}\u{305F}\u{306F} Enter \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dropCanceled": `\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{304C}\u{30AD}\u{30E3}\u{30F3}\u{30BB}\u{30EB}\u{3055}\u{308C}\u{307E}\u{3057}\u{305F}\u{3002}`,
    "dropComplete": `\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{304C}\u{5B8C}\u{4E86}\u{3057}\u{307E}\u{3057}\u{305F}\u{3002}`,
    "dropDescriptionKeyboard": `Enter \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{3057}\u{307E}\u{3059}\u{3002}Esc \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{30AD}\u{30E3}\u{30F3}\u{30BB}\u{30EB}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dropDescriptionTouch": `\u{30C0}\u{30D6}\u{30EB}\u{30BF}\u{30C3}\u{30D7}\u{3057}\u{3066}\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dropDescriptionVirtual": `\u{30AF}\u{30EA}\u{30C3}\u{30AF}\u{3057}\u{3066}\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dropIndicator": `\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{30A4}\u{30F3}\u{30B8}\u{30B1}\u{30FC}\u{30BF}\u{30FC}`,
    "dropOnItem": (args)=>`${args.itemText} \u{306B}\u{30C9}\u{30ED}\u{30C3}\u{30D7}`,
    "dropOnRoot": `\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{5834}\u{6240}`,
    "endDragKeyboard": `\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3057}\u{3066}\u{3044}\u{307E}\u{3059}\u{3002}Enter \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{30AD}\u{30E3}\u{30F3}\u{30BB}\u{30EB}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "endDragTouch": `\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3057}\u{3066}\u{3044}\u{307E}\u{3059}\u{3002}\u{30C0}\u{30D6}\u{30EB}\u{30BF}\u{30C3}\u{30D7}\u{3057}\u{3066}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{30AD}\u{30E3}\u{30F3}\u{30BB}\u{30EB}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "endDragVirtual": `\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3057}\u{3066}\u{3044}\u{307E}\u{3059}\u{3002}\u{30AF}\u{30EA}\u{30C3}\u{30AF}\u{3057}\u{3066}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{30AD}\u{30E3}\u{30F3}\u{30BB}\u{30EB}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "insertAfter": (args)=>`${args.itemText} \u{306E}\u{5F8C}\u{306B}\u{633F}\u{5165}`,
    "insertBefore": (args)=>`${args.itemText} \u{306E}\u{524D}\u{306B}\u{633F}\u{5165}`,
    "insertBetween": (args)=>`${args.beforeItemText} \u{3068} ${args.afterItemText} \u{306E}\u{9593}\u{306B}\u{633F}\u{5165}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bnVZv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `\u{B4DC}\u{B798}\u{ADF8}\u{B97C} \u{C2DC}\u{C791}\u{D558}\u{B824}\u{BA74} Enter\u{B97C} \u{B204}\u{B974}\u{C138}\u{C694}.`,
    "dragDescriptionKeyboardAlt": `\u{B4DC}\u{B798}\u{ADF8}\u{B97C} \u{C2DC}\u{C791}\u{D558}\u{B824}\u{BA74} Alt + Enter\u{B97C} \u{B204}\u{B974}\u{C2ED}\u{C2DC}\u{C624}.`,
    "dragDescriptionLongPress": `\u{B4DC}\u{B798}\u{ADF8}\u{B97C} \u{C2DC}\u{C791}\u{D558}\u{B824}\u{BA74} \u{AE38}\u{AC8C} \u{B204}\u{B974}\u{C2ED}\u{C2DC}\u{C624}.`,
    "dragDescriptionTouch": `\u{B4DC}\u{B798}\u{ADF8}\u{B97C} \u{C2DC}\u{C791}\u{D558}\u{B824}\u{BA74} \u{B354}\u{BE14} \u{D0ED}\u{D558}\u{C138}\u{C694}.`,
    "dragDescriptionVirtual": `\u{B4DC}\u{B798}\u{ADF8}\u{B97C} \u{C2DC}\u{C791}\u{D558}\u{B824}\u{BA74} \u{D074}\u{B9AD}\u{D558}\u{C138}\u{C694}.`,
    "dragItem": (args)=>`${args.itemText} \u{B4DC}\u{B798}\u{ADF8}`,
    "dragSelectedItems": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C120}\u{D0DD} \u{D56D}\u{BAA9}`,
            other: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C120}\u{D0DD} \u{D56D}\u{BAA9}`
        })} \u{B4DC}\u{B798}\u{ADF8}`,
    "dragSelectedKeyboard": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C120}\u{D0DD} \u{D56D}\u{BAA9}`,
            other: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C120}\u{D0DD} \u{D56D}\u{BAA9}`
        })}\u{C744} \u{B4DC}\u{B798}\u{ADF8}\u{D558}\u{B824}\u{BA74} Enter\u{B97C} \u{B204}\u{B974}\u{C2ED}\u{C2DC}\u{C624}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C120}\u{D0DD} \u{D56D}\u{BAA9}`,
            other: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C120}\u{D0DD} \u{D56D}\u{BAA9}`
        })}\u{C744} \u{B4DC}\u{B798}\u{ADF8}\u{D558}\u{B824}\u{BA74} Alt + Enter\u{B97C} \u{B204}\u{B974}\u{C2ED}\u{C2DC}\u{C624}.`,
    "dragSelectedLongPress": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C120}\u{D0DD} \u{D56D}\u{BAA9}`,
            other: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C120}\u{D0DD} \u{D56D}\u{BAA9}`
        })}\u{C744} \u{B4DC}\u{B798}\u{ADF8}\u{D558}\u{B824}\u{BA74} \u{AE38}\u{AC8C} \u{B204}\u{B974}\u{C2ED}\u{C2DC}\u{C624}.`,
    "dragStartedKeyboard": `\u{B4DC}\u{B798}\u{ADF8}\u{AC00} \u{C2DC}\u{C791}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}. Tab\u{C744} \u{B20C}\u{B7EC} \u{B4DC}\u{B86D} \u{B300}\u{C0C1}\u{C73C}\u{B85C} \u{C774}\u{B3D9}\u{D55C} \u{B2E4}\u{C74C} Enter\u{B97C} \u{B20C}\u{B7EC} \u{B4DC}\u{B86D}\u{D558}\u{AC70}\u{B098} Esc\u{B97C} \u{B20C}\u{B7EC} \u{CDE8}\u{C18C}\u{D558}\u{C138}\u{C694}.`,
    "dragStartedTouch": `\u{B4DC}\u{B798}\u{ADF8}\u{AC00} \u{C2DC}\u{C791}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}. \u{B4DC}\u{B86D} \u{B300}\u{C0C1}\u{C73C}\u{B85C} \u{C774}\u{B3D9}\u{D55C} \u{B2E4}\u{C74C} \u{B354}\u{BE14} \u{D0ED}\u{D558}\u{C5EC} \u{B4DC}\u{B86D}\u{D558}\u{C138}\u{C694}.`,
    "dragStartedVirtual": `\u{B4DC}\u{B798}\u{ADF8}\u{AC00} \u{C2DC}\u{C791}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}. \u{B4DC}\u{B86D} \u{B300}\u{C0C1}\u{C73C}\u{B85C} \u{C774}\u{B3D9}\u{D55C} \u{B2E4}\u{C74C} \u{D074}\u{B9AD}\u{D558}\u{AC70}\u{B098} Enter\u{B97C} \u{B20C}\u{B7EC} \u{B4DC}\u{B86D}\u{D558}\u{C138}\u{C694}.`,
    "dropCanceled": `\u{B4DC}\u{B86D}\u{C774} \u{CDE8}\u{C18C}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}.`,
    "dropComplete": `\u{B4DC}\u{B86D}\u{C774} \u{C644}\u{B8CC}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}.`,
    "dropDescriptionKeyboard": `\u{B4DC}\u{B86D}\u{D558}\u{B824}\u{BA74} Enter\u{B97C} \u{B204}\u{B974}\u{C138}\u{C694}. \u{B4DC}\u{B798}\u{ADF8}\u{B97C} \u{CDE8}\u{C18C}\u{D558}\u{B824}\u{BA74} Esc\u{B97C} \u{B204}\u{B974}\u{C138}\u{C694}.`,
    "dropDescriptionTouch": `\u{B354}\u{BE14} \u{D0ED}\u{D558}\u{C5EC} \u{B4DC}\u{B86D}\u{D558}\u{C138}\u{C694}.`,
    "dropDescriptionVirtual": `\u{B4DC}\u{B86D}\u{D558}\u{B824}\u{BA74} \u{D074}\u{B9AD}\u{D558}\u{C138}\u{C694}.`,
    "dropIndicator": `\u{B4DC}\u{B86D} \u{D45C}\u{C2DC}\u{AE30}`,
    "dropOnItem": (args)=>`${args.itemText}\u{C5D0} \u{B4DC}\u{B86D}`,
    "dropOnRoot": `\u{B4DC}\u{B86D} \u{B300}\u{C0C1}`,
    "endDragKeyboard": `\u{B4DC}\u{B798}\u{ADF8} \u{C911}\u{C785}\u{B2C8}\u{B2E4}. \u{B4DC}\u{B798}\u{ADF8}\u{B97C} \u{CDE8}\u{C18C}\u{D558}\u{B824}\u{BA74} Enter\u{B97C} \u{B204}\u{B974}\u{C138}\u{C694}.`,
    "endDragTouch": `\u{B4DC}\u{B798}\u{ADF8} \u{C911}\u{C785}\u{B2C8}\u{B2E4}. \u{B4DC}\u{B798}\u{ADF8}\u{B97C} \u{CDE8}\u{C18C}\u{D558}\u{B824}\u{BA74} \u{B354}\u{BE14} \u{D0ED}\u{D558}\u{C138}\u{C694}.`,
    "endDragVirtual": `\u{B4DC}\u{B798}\u{ADF8} \u{C911}\u{C785}\u{B2C8}\u{B2E4}. \u{B4DC}\u{B798}\u{ADF8}\u{B97C} \u{CDE8}\u{C18C}\u{D558}\u{B824}\u{BA74} \u{D074}\u{B9AD}\u{D558}\u{C138}\u{C694}.`,
    "insertAfter": (args)=>`${args.itemText} \u{C774}\u{D6C4}\u{C5D0} \u{C0BD}\u{C785}`,
    "insertBefore": (args)=>`${args.itemText} \u{C774}\u{C804}\u{C5D0} \u{C0BD}\u{C785}`,
    "insertBetween": (args)=>`${args.beforeItemText} \u{BC0F} ${args.afterItemText} \u{C0AC}\u{C774}\u{C5D0} \u{C0BD}\u{C785}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gLLEG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Paspauskite \u{201E}Enter\u{201C}, kad prad\u{117}tum\u{117}te vilkti.`,
    "dragDescriptionKeyboardAlt": `Paspauskite \u{201E}Alt + Enter\u{201C}, kad prad\u{117}tum\u{117}te vilkti.`,
    "dragDescriptionLongPress": `Palaikykite nuspaud\u{119}, kad prad\u{117}tum\u{117}te vilkti.`,
    "dragDescriptionTouch": `Palieskite dukart, kad prad\u{117}tum\u{117}te vilkti.`,
    "dragDescriptionVirtual": `Spustel\u{117}kite, kad prad\u{117}tum\u{117}te vilkti.`,
    "dragItem": (args)=>`Vilkti ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Vilkti ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} pasirinkt\u{105} element\u{105}`,
            other: ()=>`${formatter.number(args.count)} pasirinktus elementus`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Paspauskite \u{201E}Enter\u{201C}, jei norite nuvilkti ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} pasirinkt\u{105} element\u{105}`,
            other: ()=>`${formatter.number(args.count)} pasirinktus elementus`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Paspauskite \u{201E}Alt + Enter\u{201C}, kad nuvilktum\u{117}te ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} pasirinkt\u{105} element\u{105}`,
            other: ()=>`${formatter.number(args.count)} pasirinktus elementus`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Nuspaud\u{119} palaikykite, kad nuvilktum\u{117}te ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} pasirinkt\u{105} element\u{105}`,
            other: ()=>`${formatter.number(args.count)} pasirinktus elementus`
        })}.`,
    "dragStartedKeyboard": `Prad\u{117}ta vilkti. Paspauskite \u{201E}Tab\u{201C}, kad pereitum\u{117}te \u{12F} tiesiogin\u{119} paskirties viet\u{105}, tada paspauskite \u{201E}Enter\u{201C}, kad numestum\u{117}te, arba \u{201E}Escape\u{201C}, kad at\u{161}auktum\u{117}te.`,
    "dragStartedTouch": `Prad\u{117}ta vilkti. Eikite \u{12F} tiesiogin\u{119} paskirties viet\u{105}, tada palieskite dukart, kad numestum\u{117}te.`,
    "dragStartedVirtual": `Prad\u{117}ta vilkti. Eikite \u{12F} tiesiogin\u{119} paskirties viet\u{105} ir spustel\u{117}kite arba paspauskite \u{201E}Enter\u{201C}, kad numestum\u{117}te.`,
    "dropCanceled": `Numetimas at\u{161}auktas.`,
    "dropComplete": `Numesta.`,
    "dropDescriptionKeyboard": `Paspauskite \u{201E}Enter\u{201C}, kad numestum\u{117}te. Paspauskite \u{201E}Escape\u{201C}, kad at\u{161}auktum\u{117}te vilkim\u{105}.`,
    "dropDescriptionTouch": `Palieskite dukart, kad numestum\u{117}te.`,
    "dropDescriptionVirtual": `Spustel\u{117}kite, kad numestum\u{117}te.`,
    "dropIndicator": `numetimo indikatorius`,
    "dropOnItem": (args)=>`Numesti ant ${args.itemText}`,
    "dropOnRoot": `Numesti ant`,
    "endDragKeyboard": `Velkama. Paspauskite \u{201E}Enter\u{201C}, kad at\u{161}auktum\u{117}te vilkim\u{105}.`,
    "endDragTouch": `Velkama. Spustel\u{117}kite dukart, kad at\u{161}auktum\u{117}te vilkim\u{105}.`,
    "endDragVirtual": `Velkama. Spustel\u{117}kite, kad at\u{161}auktum\u{117}te vilkim\u{105}.`,
    "insertAfter": (args)=>`\u{12E}terpti po ${args.itemText}`,
    "insertBefore": (args)=>`\u{12E}terpti prie\u{161} ${args.itemText}`,
    "insertBetween": (args)=>`\u{12E}terpti tarp ${args.beforeItemText} ir ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"oTRzZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Nospiediet Enter, lai s\u{101}ktu vilk\u{161}anu.`,
    "dragDescriptionKeyboardAlt": `Nospiediet tausti\u{146}u kombin\u{101}ciju Alt+Enter, lai s\u{101}ktu vilk\u{161}anu.`,
    "dragDescriptionLongPress": `Turiet nospiestu, lai s\u{101}ktu vilk\u{161}anu.`,
    "dragDescriptionTouch": `Veiciet dubultsk\u{101}rienu, lai s\u{101}ktu vilk\u{161}anu.`,
    "dragDescriptionVirtual": `Noklik\u{161}\u{137}iniet, lai s\u{101}ktu vilk\u{161}anu.`,
    "dragItem": (args)=>`Velciet ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Velciet ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} atlas\u{12B}to vienumu`,
            other: ()=>`${formatter.number(args.count)} atlas\u{12B}tos vienumus`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Nospiediet tausti\u{146}u Enter, lai vilktu ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} atlas\u{12B}to vienumu`,
            other: ()=>`${formatter.number(args.count)} atlas\u{12B}tos vienumus`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Nospiediet tausti\u{146}u kombin\u{101}ciju Alt+Enter, lai vilktu ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} atlas\u{12B}to vienumu`,
            other: ()=>`${formatter.number(args.count)} atlas\u{12B}tos vienumus`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Turiet nospiestu, lai vilktu ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} atlas\u{12B}to vienumu`,
            other: ()=>`${formatter.number(args.count)} atlas\u{12B}tos vienumus`
        })}.`,
    "dragStartedKeyboard": `Uzs\u{101}kta vilk\u{161}ana. Nospiediet tausti\u{146}u Tab, lai p\u{101}rietu uz nome\u{161}anas m\u{113}r\u{137}i, p\u{113}c tam nospiediet Enter, lai nomestu, vai nospiediet Escape, lai atceltu.`,
    "dragStartedTouch": `Uzs\u{101}kta vilk\u{161}ana. P\u{101}rejiet uz nome\u{161}anas m\u{113}r\u{137}i, p\u{113}c tam veiciet dubultsk\u{101}rienu, lai nomestu.`,
    "dragStartedVirtual": `Uzs\u{101}kta vilk\u{161}ana. P\u{101}rejiet uz nome\u{161}anas m\u{113}r\u{137}i, p\u{113}c tam nospiediet Enter, lai nomestu.`,
    "dropCanceled": `Nome\u{161}ana atcelta.`,
    "dropComplete": `Nome\u{161}ana pabeigta.`,
    "dropDescriptionKeyboard": `Nospiediet Enter, lai nomestu. Nospiediet Escape, lai atceltu vilk\u{161}anu.`,
    "dropDescriptionTouch": `Veiciet dubultsk\u{101}rienu, lai nomestu.`,
    "dropDescriptionVirtual": `Noklik\u{161}\u{137}iniet, lai nomestu.`,
    "dropIndicator": `nome\u{161}anas indikators`,
    "dropOnItem": (args)=>`Nometiet uz ${args.itemText}`,
    "dropOnRoot": `Nometiet uz`,
    "endDragKeyboard": `Notiek vilk\u{161}ana. Nospiediet Enter, lai atceltu vilk\u{161}anu.`,
    "endDragTouch": `Notiek vilk\u{161}ana. Veiciet dubultsk\u{101}rienu, lai atceltu vilk\u{161}anu.`,
    "endDragVirtual": `Notiek vilk\u{161}ana. Noklik\u{161}\u{137}iniet, lai atceltu vilk\u{161}anu.`,
    "insertAfter": (args)=>`Ievietojiet p\u{113}c ${args.itemText}`,
    "insertBefore": (args)=>`Ievietojiet pirms ${args.itemText}`,
    "insertBetween": (args)=>`Ievietojiet starp ${args.beforeItemText} un ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lnDVI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Trykk p\xe5 Enter for \xe5 begynne \xe5 dra.`,
    "dragDescriptionKeyboardAlt": `Trykk p\xe5 Alt + Enter for \xe5 begynne \xe5 dra.`,
    "dragDescriptionLongPress": `Trykk lenge for \xe5 begynne \xe5 dra.`,
    "dragDescriptionTouch": `Dobbelttrykk for \xe5 begynne \xe5 dra.`,
    "dragDescriptionVirtual": `Klikk for \xe5 begynne \xe5 dra.`,
    "dragItem": (args)=>`Dra ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Dra ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} merket element`,
            other: ()=>`${formatter.number(args.count)} merkede elementer`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Trykk Enter for \xe5 dra ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valgt element`,
            other: ()=>`${formatter.number(args.count)} valgte elementer`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Trykk p\xe5 Alt + Enter for \xe5 dra ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valgt element`,
            other: ()=>`${formatter.number(args.count)} valgte elementer`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Trykk lenge for \xe5 dra ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valgt element`,
            other: ()=>`${formatter.number(args.count)} valgte elementer`
        })}.`,
    "dragStartedKeyboard": `Begynte \xe5 dra. Trykk p\xe5 Tab for \xe5 navigere til et m\xe5l, og trykk deretter p\xe5 Enter for \xe5 slippe eller p\xe5 Esc for \xe5 avbryte.`,
    "dragStartedTouch": `Begynte \xe5 dra. Naviger til et m\xe5l, og dobbelttrykk for \xe5 slippe.`,
    "dragStartedVirtual": `Begynte \xe5 dra. Naviger til et m\xe5l, og klikk eller trykk p\xe5 Enter for \xe5 slippe.`,
    "dropCanceled": `Avbr\xf8t slipping.`,
    "dropComplete": `Slippingen er fullf\xf8rt.`,
    "dropDescriptionKeyboard": `Trykk p\xe5 Enter for \xe5 slippe. Trykk p\xe5 Esc hvis du vil avbryte draingen.`,
    "dropDescriptionTouch": `Dobbelttrykk for \xe5 slippe.`,
    "dropDescriptionVirtual": `Klikk for \xe5 slippe.`,
    "dropIndicator": `slippeindikator`,
    "dropOnItem": (args)=>`Slipp p\xe5 ${args.itemText}`,
    "dropOnRoot": `Slipp p\xe5`,
    "endDragKeyboard": `Drar. Trykk p\xe5 Enter hvis du vil avbryte.`,
    "endDragTouch": `Drar. Dobbelttrykk hvis du vil avbryte.`,
    "endDragVirtual": `Drar. Klikk hvis du vil avbryte.`,
    "insertAfter": (args)=>`Sett inn etter ${args.itemText}`,
    "insertBefore": (args)=>`Sett inn f\xf8r ${args.itemText}`,
    "insertBetween": (args)=>`Sett inn mellom ${args.beforeItemText} og ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7Tqo5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Druk op Enter om te slepen.`,
    "dragDescriptionKeyboardAlt": `Druk op Alt + Enter om te slepen.`,
    "dragDescriptionLongPress": `Houd lang ingedrukt om te slepen.`,
    "dragDescriptionTouch": `Dubbeltik om te slepen.`,
    "dragDescriptionVirtual": `Klik om met slepen te starten.`,
    "dragItem": (args)=>`${args.itemText} slepen`,
    "dragSelectedItems": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} geselecteerd item`,
            other: ()=>`${formatter.number(args.count)} geselecteerde items`
        })} slepen`,
    "dragSelectedKeyboard": (args, formatter)=>`Druk op Enter om ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} geselecteerd item`,
            other: ()=>`${formatter.number(args.count)} geselecteerde items`
        })} te slepen.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Druk op Alt + Enter om ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} geselecteerd item`,
            other: ()=>`${formatter.number(args.count)} geselecteerde items`
        })} te slepen.`,
    "dragSelectedLongPress": (args, formatter)=>`Houd lang ingedrukt om ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} geselecteerd item`,
            other: ()=>`${formatter.number(args.count)} geselecteerde items`
        })} te slepen.`,
    "dragStartedKeyboard": `Begonnen met slepen. Druk op Tab om naar een locatie te gaan. Druk dan op Enter om neer te zetten, of op Esc om te annuleren.`,
    "dragStartedTouch": `Begonnen met slepen. Ga naar de gewenste locatie en dubbeltik om neer te zetten.`,
    "dragStartedVirtual": `Begonnen met slepen. Ga naar de gewenste locatie en klik of druk op Enter om neer te zetten.`,
    "dropCanceled": `Neerzetten geannuleerd.`,
    "dropComplete": `Neerzetten voltooid.`,
    "dropDescriptionKeyboard": `Druk op Enter om neer te zetten. Druk op Esc om het slepen te annuleren.`,
    "dropDescriptionTouch": `Dubbeltik om neer te zetten.`,
    "dropDescriptionVirtual": `Klik om neer te zetten.`,
    "dropIndicator": `aanwijzer voor neerzetten`,
    "dropOnItem": (args)=>`Neerzetten op ${args.itemText}`,
    "dropOnRoot": `Neerzetten op`,
    "endDragKeyboard": `Bezig met slepen. Druk op Enter om te annuleren.`,
    "endDragTouch": `Bezig met slepen. Dubbeltik om te annuleren.`,
    "endDragVirtual": `Bezig met slepen. Klik om te annuleren.`,
    "insertAfter": (args)=>`Plaatsen na ${args.itemText}`,
    "insertBefore": (args)=>`Plaatsen v\xf3\xf3r ${args.itemText}`,
    "insertBetween": (args)=>`Plaatsen tussen ${args.beforeItemText} en ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"asMbo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Naci\u{15B}nij Enter, aby rozpocz\u{105}\u{107} przeci\u{105}ganie.`,
    "dragDescriptionKeyboardAlt": `Naci\u{15B}nij Alt + Enter, aby rozpocz\u{105}\u{107} przeci\u{105}ganie.`,
    "dragDescriptionLongPress": `Naci\u{15B}nij i przytrzymaj, aby rozpocz\u{105}\u{107} przeci\u{105}ganie.`,
    "dragDescriptionTouch": `Dotknij dwukrotnie, aby rozpocz\u{105}\u{107} przeci\u{105}ganie.`,
    "dragDescriptionVirtual": `Kliknij, aby rozpocz\u{105}\u{107} przeci\u{105}ganie.`,
    "dragItem": (args)=>`Przeci\u{105}gnij ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Przeci\u{105}gnij ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} wybrany element`,
            other: ()=>`${formatter.number(args.count)} wybranych element\xf3w`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Naci\u{15B}nij Enter, aby przeci\u{105}gn\u{105}\u{107} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} wybrany element`,
            other: ()=>`${formatter.number(args.count)} wybrane(-ych) elementy(-\xf3w)`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Naci\u{15B}nij Alt + Enter, aby przeci\u{105}gn\u{105}\u{107} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} wybrany element`,
            other: ()=>`${formatter.number(args.count)} wybrane(-ych) elementy(-\xf3w)`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Naci\u{15B}nij i przytrzymaj, aby przeci\u{105}gn\u{105}\u{107} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} wybrany element`,
            other: ()=>`${formatter.number(args.count)} wybrane(-ych) elementy(-\xf3w)`
        })}.`,
    "dragStartedKeyboard": `Rozpocz\u{119}to przeci\u{105}ganie. Naci\u{15B}nij Tab, aby wybra\u{107} miejsce docelowe, a nast\u{119}pnie naci\u{15B}nij Enter, aby upu\u{15B}ci\u{107}, lub Escape, aby anulowa\u{107}.`,
    "dragStartedTouch": `Rozpocz\u{119}to przeci\u{105}ganie. Wybierz miejsce, w kt\xf3rym chcesz upu\u{15B}ci\u{107} element, a nast\u{119}pnie dotknij dwukrotnie, aby upu\u{15B}ci\u{107}.F`,
    "dragStartedVirtual": `Rozpocz\u{119}to przeci\u{105}ganie. Wybierz miejsce, w kt\xf3rym chcesz upu\u{15B}ci\u{107} element, a nast\u{119}pnie kliknij lub naci\u{15B}nij Enter, aby upu\u{15B}ci\u{107}.`,
    "dropCanceled": `Anulowano upuszczenie.`,
    "dropComplete": `Zako\u{144}czono upuszczanie.`,
    "dropDescriptionKeyboard": `Naci\u{15B}nij Enter, aby upu\u{15B}ci\u{107}. Naci\u{15B}nij Escape, aby anulowa\u{107} przeci\u{105}gni\u{119}cie.`,
    "dropDescriptionTouch": `Dotknij dwukrotnie, aby upu\u{15B}ci\u{107}.`,
    "dropDescriptionVirtual": `Kliknij, aby upu\u{15B}ci\u{107}.`,
    "dropIndicator": `wska\u{17A}nik upuszczenia`,
    "dropOnItem": (args)=>`Upu\u{15B}\u{107} na ${args.itemText}`,
    "dropOnRoot": `Upu\u{15B}\u{107}`,
    "endDragKeyboard": `Przeci\u{105}ganie. Naci\u{15B}nij Enter, aby anulowa\u{107} przeci\u{105}gni\u{119}cie.`,
    "endDragTouch": `Przeci\u{105}ganie. Kliknij dwukrotnie, aby anulowa\u{107} przeci\u{105}gni\u{119}cie.`,
    "endDragVirtual": `Przeci\u{105}ganie. Kliknij, aby anulowa\u{107} przeci\u{105}ganie.`,
    "insertAfter": (args)=>`Umie\u{15B}\u{107} za ${args.itemText}`,
    "insertBefore": (args)=>`Umie\u{15B}\u{107} przed ${args.itemText}`,
    "insertBetween": (args)=>`Umie\u{15B}\u{107} mi\u{119}dzy ${args.beforeItemText} i ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k8e8n":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Pressione Enter para come\xe7ar a arrastar.`,
    "dragDescriptionKeyboardAlt": `Pressione Alt + Enter para come\xe7ar a arrastar.`,
    "dragDescriptionLongPress": `Pressione e segure para come\xe7ar a arrastar.`,
    "dragDescriptionTouch": `Toque duas vezes para come\xe7ar a arrastar.`,
    "dragDescriptionVirtual": `Clique para come\xe7ar a arrastar.`,
    "dragItem": (args)=>`Arrastar ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Arrastar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} item selecionado`,
            other: ()=>`${formatter.number(args.count)} itens selecionados`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Pressione Enter para arrastar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} o item selecionado`,
            other: ()=>`${formatter.number(args.count)} os itens selecionados`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Pressione Alt + Enter para arrastar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} o item selecionado`,
            other: ()=>`${formatter.number(args.count)} os itens selecionados`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Pressione e segure para arrastar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} o item selecionado`,
            other: ()=>`${formatter.number(args.count)} os itens selecionados`
        })}.`,
    "dragStartedKeyboard": `Comece a arrastar. Pressione Tab para navegar at\xe9 um alvo e, em seguida, pressione Enter para soltar ou pressione Escape para cancelar.`,
    "dragStartedTouch": `Comece a arrastar. Navegue at\xe9 um alvo e toque duas vezes para soltar.`,
    "dragStartedVirtual": `Comece a arrastar. Navegue at\xe9 um alvo e clique ou pressione Enter para soltar.`,
    "dropCanceled": `Libera\xe7\xe3o cancelada.`,
    "dropComplete": `Libera\xe7\xe3o conclu\xedda.`,
    "dropDescriptionKeyboard": `Pressione Enter para soltar. Pressione Escape para cancelar.`,
    "dropDescriptionTouch": `Toque duas vezes para soltar.`,
    "dropDescriptionVirtual": `Clique para soltar.`,
    "dropIndicator": `indicador de libera\xe7\xe3o`,
    "dropOnItem": (args)=>`Soltar em ${args.itemText}`,
    "dropOnRoot": `Soltar`,
    "endDragKeyboard": `Arrastando. Pressione Enter para cancelar.`,
    "endDragTouch": `Arrastando. Toque duas vezes para cancelar.`,
    "endDragVirtual": `Arrastando. Clique para cancelar.`,
    "insertAfter": (args)=>`Inserir ap\xf3s ${args.itemText}`,
    "insertBefore": (args)=>`Inserir antes de ${args.itemText}`,
    "insertBetween": (args)=>`Inserir entre ${args.beforeItemText} e ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"58nXX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Prima Enter para iniciar o arrasto.`,
    "dragDescriptionKeyboardAlt": `Prima Alt + Enter para iniciar o arrasto.`,
    "dragDescriptionLongPress": `Prima longamente para come\xe7ar a arrastar.`,
    "dragDescriptionTouch": `Fa\xe7a duplo toque para come\xe7ar a arrastar.`,
    "dragDescriptionVirtual": `Clique para iniciar o arrasto.`,
    "dragItem": (args)=>`Arrastar ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Arrastar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} item selecionado`,
            other: ()=>`${formatter.number(args.count)} itens selecionados`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Prima Enter para arrastar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} o item selecionado`,
            other: ()=>`${formatter.number(args.count)} os itens selecionados`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Prima Alt + Enter para arrastar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} o item selecionado`,
            other: ()=>`${formatter.number(args.count)} os itens selecionados`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Prima longamente para arrastar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} o item selecionado`,
            other: ()=>`${formatter.number(args.count)} os itens selecionados`
        })}.`,
    "dragStartedKeyboard": `Arrasto iniciado. Prima a tecla de tabula\xe7\xe3o para navegar para um destino para largar, e em seguida prima Enter para largar ou prima Escape para cancelar.`,
    "dragStartedTouch": `Arrasto iniciado. Navegue para um destino para largar, e em seguida fa\xe7a duplo toque para largar.`,
    "dragStartedVirtual": `Arrasto iniciado. Navegue para um destino para largar, e em seguida clique ou prima Enter para largar.`,
    "dropCanceled": `Largar cancelado.`,
    "dropComplete": `Largar completo.`,
    "dropDescriptionKeyboard": `Prima Enter para largar. Prima Escape para cancelar o arrasto.`,
    "dropDescriptionTouch": `Fa\xe7a duplo toque para largar.`,
    "dropDescriptionVirtual": `Clique para largar.`,
    "dropIndicator": `Indicador de largar`,
    "dropOnItem": (args)=>`Largar em ${args.itemText}`,
    "dropOnRoot": `Largar em`,
    "endDragKeyboard": `A arrastar. Prima Enter para cancelar o arrasto.`,
    "endDragTouch": `A arrastar. Fa\xe7a duplo toque para cancelar o arrasto.`,
    "endDragVirtual": `A arrastar. Clique para cancelar o arrasto.`,
    "insertAfter": (args)=>`Inserir depois de ${args.itemText}`,
    "insertBefore": (args)=>`Inserir antes de ${args.itemText}`,
    "insertBetween": (args)=>`Inserir entre ${args.beforeItemText} e ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8K3V8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Ap\u{103}sa\u{21B}i pe Enter pentru a \xeencepe glisarea.`,
    "dragDescriptionKeyboardAlt": `Ap\u{103}sa\u{21B}i pe Alt + Enter pentru a \xeencepe glisarea.`,
    "dragDescriptionLongPress": `Ap\u{103}sa\u{21B}i lung pentru a \xeencepe glisarea.`,
    "dragDescriptionTouch": `Atinge\u{21B}i de dou\u{103} ori pentru a \xeencepe s\u{103} glisa\u{21B}i.`,
    "dragDescriptionVirtual": `Face\u{21B}i clic pentru a \xeencepe glisarea.`,
    "dragItem": (args)=>`Glisa\u{21B}i ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Glisa\u{21B}i ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} element selectat`,
            other: ()=>`${formatter.number(args.count)} elemente selectate`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Ap\u{103}sa\u{21B}i pe Enter pentru a glisa ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} element selectat`,
            other: ()=>`${formatter.number(args.count)} elemente selectate`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Ap\u{103}sa\u{21B}i pe Alt + Enter pentru a glisa ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} element selectat`,
            other: ()=>`${formatter.number(args.count)} elemente selectate`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Ap\u{103}sa\u{21B}i lung pentru a glisa ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} element selectat`,
            other: ()=>`${formatter.number(args.count)} elemente selectate`
        })}.`,
    "dragStartedKeyboard": `A \xeenceput glisarea. Ap\u{103}sa\u{21B}i pe Tab pentru a naviga la o \u{21B}int\u{103} de fixare, apoi ap\u{103}sa\u{21B}i pe Enter pentru a fixa sau ap\u{103}sa\u{21B}i pe Escape pentru a anula glisarea.`,
    "dragStartedTouch": `A \xeenceput glisarea. Naviga\u{21B}i la o \u{21B}int\u{103} de fixare, apoi atinge\u{21B}i de dou\u{103} ori pentru a fixa.`,
    "dragStartedVirtual": `A \xeenceput glisarea. Naviga\u{21B}i la o \u{21B}int\u{103} de fixare, apoi face\u{21B}i clic sau ap\u{103}sa\u{21B}i pe Enter pentru a fixa.`,
    "dropCanceled": `Fixare anulat\u{103}.`,
    "dropComplete": `Fixare finalizat\u{103}.`,
    "dropDescriptionKeyboard": `Ap\u{103}sa\u{21B}i pe Enter pentru a fixa. Ap\u{103}sa\u{21B}i pe Escape pentru a anula glisarea.`,
    "dropDescriptionTouch": `Atinge\u{21B}i de dou\u{103} ori pentru a fixa.`,
    "dropDescriptionVirtual": `Face\u{21B}i clic pentru a fixa.`,
    "dropIndicator": `indicator de fixare`,
    "dropOnItem": (args)=>`Fixa\u{21B}i pe ${args.itemText}`,
    "dropOnRoot": `Fixare pe`,
    "endDragKeyboard": `Se gliseaz\u{103}. Ap\u{103}sa\u{21B}i pe Enter pentru a anula glisarea.`,
    "endDragTouch": `Se gliseaz\u{103}. Atinge\u{21B}i de dou\u{103} ori pentru a anula glisarea.`,
    "endDragVirtual": `Se gliseaz\u{103}. Face\u{21B}i clic pentru a anula glisarea.`,
    "insertAfter": (args)=>`Insera\u{21B}i dup\u{103} ${args.itemText}`,
    "insertBefore": (args)=>`Insera\u{21B}i \xeenainte de ${args.itemText}`,
    "insertBetween": (args)=>`Insera\u{21B}i \xeentre ${args.beforeItemText} \u{219}i ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7hO9y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Enter \u{434}\u{43B}\u{44F} \u{43D}\u{430}\u{447}\u{430}\u{43B}\u{430} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{44F}.`,
    "dragDescriptionKeyboardAlt": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} Alt + Enter, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43D}\u{430}\u{447}\u{430}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{442}\u{44C}.`,
    "dragDescriptionLongPress": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{438} \u{443}\u{434}\u{435}\u{440}\u{436}\u{438}\u{432}\u{430}\u{439}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43D}\u{430}\u{447}\u{430}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{442}\u{44C}.`,
    "dragDescriptionTouch": `\u{414}\u{432}\u{430}\u{436}\u{434}\u{44B} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{434}\u{43B}\u{44F} \u{43D}\u{430}\u{447}\u{430}\u{43B}\u{430} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{44F}.`,
    "dragDescriptionVirtual": `\u{429}\u{435}\u{43B}\u{43A}\u{43D}\u{438}\u{442}\u{435} \u{434}\u{43B}\u{44F} \u{43D}\u{430}\u{447}\u{430}\u{43B}\u{430} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{44F}.`,
    "dragItem": (args)=>`\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{449}\u{438}\u{442}\u{44C} ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{449}\u{438}\u{442}\u{44C} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{445} \u{44D}\u{43B}\u{435}\u{43C}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} Enter \u{434}\u{43B}\u{44F} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{44F} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{43E}\u{433}\u{43E} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{430}`,
            other: ()=>`${formatter.number(args.count)} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{445} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432}`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} Alt + Enter \u{434}\u{43B}\u{44F} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{44F} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{43E}\u{433}\u{43E} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{430}`,
            other: ()=>`${formatter.number(args.count)} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{445} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432}`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{438} \u{443}\u{434}\u{435}\u{440}\u{436}\u{438}\u{432}\u{430}\u{439}\u{442}\u{435} \u{434}\u{43B}\u{44F} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{44F} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{43E}\u{433}\u{43E} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{430}`,
            other: ()=>`${formatter.number(args.count)} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{445} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432}`
        })}.`,
    "dragStartedKeyboard": `\u{41D}\u{430}\u{447}\u{430}\u{442}\u{43E} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}. \u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Tab \u{434}\u{43B}\u{44F} \u{432}\u{44B}\u{431}\u{43E}\u{440}\u{430} \u{446}\u{435}\u{43B}\u{438}, \u{437}\u{430}\u{442}\u{435}\u{43C} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Enter, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43F}\u{440}\u{438}\u{43C}\u{435}\u{43D}\u{438}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}, \u{438}\u{43B}\u{438} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Escape \u{434}\u{43B}\u{44F} \u{43E}\u{442}\u{43C}\u{435}\u{43D}\u{44B} \u{434}\u{435}\u{439}\u{441}\u{442}\u{432}\u{438}\u{44F}.`,
    "dragStartedTouch": `\u{41D}\u{430}\u{447}\u{430}\u{442}\u{43E} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}. \u{412}\u{44B}\u{431}\u{435}\u{440}\u{438}\u{442}\u{435} \u{446}\u{435}\u{43B}\u{44C}, \u{437}\u{430}\u{442}\u{435}\u{43C} \u{434}\u{432}\u{430}\u{436}\u{434}\u{44B} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43F}\u{440}\u{438}\u{43C}\u{435}\u{43D}\u{438}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}.`,
    "dragStartedVirtual": `\u{41D}\u{430}\u{447}\u{430}\u{442}\u{43E} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}. \u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Tab \u{434}\u{43B}\u{44F} \u{432}\u{44B}\u{431}\u{43E}\u{440}\u{430} \u{446}\u{435}\u{43B}\u{438}, \u{437}\u{430}\u{442}\u{435}\u{43C} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Enter, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43F}\u{440}\u{438}\u{43C}\u{435}\u{43D}\u{438}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}.`,
    "dropCanceled": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435} \u{43E}\u{442}\u{43C}\u{435}\u{43D}\u{435}\u{43D}\u{43E}.`,
    "dropComplete": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{43E}.`,
    "dropDescriptionKeyboard": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Enter, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43F}\u{440}\u{438}\u{43C}\u{435}\u{43D}\u{438}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}. \u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Escape \u{434}\u{43B}\u{44F} \u{43E}\u{442}\u{43C}\u{435}\u{43D}\u{44B}.`,
    "dropDescriptionTouch": `\u{414}\u{432}\u{430}\u{436}\u{434}\u{44B} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43F}\u{440}\u{438}\u{43C}\u{435}\u{43D}\u{438}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}.`,
    "dropDescriptionVirtual": `\u{429}\u{435}\u{43B}\u{43A}\u{43D}\u{438}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43F}\u{440}\u{438}\u{43C}\u{435}\u{43D}\u{438}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}.`,
    "dropIndicator": `\u{438}\u{43D}\u{434}\u{438}\u{43A}\u{430}\u{442}\u{43E}\u{440} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{44F}`,
    "dropOnItem": (args)=>`\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{449}\u{438}\u{442}\u{44C} \u{43D}\u{430} ${args.itemText}`,
    "dropOnRoot": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{449}\u{438}\u{442}\u{44C} \u{43D}\u{430}`,
    "endDragKeyboard": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}. \u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Enter \u{434}\u{43B}\u{44F} \u{43E}\u{442}\u{43C}\u{435}\u{43D}\u{44B}.`,
    "endDragTouch": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}. \u{414}\u{432}\u{430}\u{436}\u{434}\u{44B} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{434}\u{43B}\u{44F} \u{43E}\u{442}\u{43C}\u{435}\u{43D}\u{44B}.`,
    "endDragVirtual": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}. \u{429}\u{435}\u{43B}\u{43A}\u{43D}\u{438}\u{442}\u{435} \u{434}\u{43B}\u{44F} \u{43E}\u{442}\u{43C}\u{435}\u{43D}\u{44B}.`,
    "insertAfter": (args)=>`\u{412}\u{441}\u{442}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{43F}\u{43E}\u{441}\u{43B}\u{435} ${args.itemText}`,
    "insertBefore": (args)=>`\u{412}\u{441}\u{442}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{435}\u{434} ${args.itemText}`,
    "insertBetween": (args)=>`\u{412}\u{441}\u{442}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{43C}\u{435}\u{436}\u{434}\u{443} ${args.beforeItemText} \u{438} ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9xRyp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Stla\u{10D}en\xedm kl\xe1vesu Enter za\u{10D}nete pres\xfavanie.`,
    "dragDescriptionKeyboardAlt": `Stla\u{10D}en\xedm kl\xe1vesov Alt + Enter za\u{10D}nete pres\xfavanie.`,
    "dragDescriptionLongPress": `Dlh\xfdm stla\u{10D}en\xedm za\u{10D}nete pres\xfavanie.`,
    "dragDescriptionTouch": `Dvojit\xfdm kliknut\xedm za\u{10D}nete pres\xfavanie.`,
    "dragDescriptionVirtual": `Kliknut\xedm za\u{10D}nete pres\xfavanie.`,
    "dragItem": (args)=>`Presun\xfa\u{165} polo\u{17E}ku ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Presun\xfa\u{165} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} vybrat\xfa polo\u{17E}ku`,
            other: ()=>`${formatter.number(args.count)} vybrat\xe9 polo\u{17E}ky`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Stla\u{10D}en\xedm kl\xe1vesu Enter presuniete ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} vybrat\xfa polo\u{17E}ku`,
            other: ()=>`${formatter.number(args.count)} vybrat\xfdch polo\u{17E}iek`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Stla\u{10D}en\xedm kl\xe1vesov Alt + Enter presuniete ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} vybrat\xfa polo\u{17E}ku`,
            other: ()=>`${formatter.number(args.count)} vybrat\xfdch polo\u{17E}iek`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Dlh\xfdm stla\u{10D}en\xedm presuniete ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} vybrat\xfa polo\u{17E}ku`,
            other: ()=>`${formatter.number(args.count)} vybrat\xfdch polo\u{17E}iek`
        })}.`,
    "dragStartedKeyboard": `Pres\xfavanie sa za\u{10D}alo. Do cie\u{13E}ov\xe9ho umiestnenia prejdete stla\u{10D}en\xedm kl\xe1vesu Tab. Ak chcete polo\u{17E}ku umiestni\u{165}, stla\u{10D}te kl\xe1ves Enter alebo stla\u{10D}te kl\xe1ves Esc, ak chcete pres\xfavanie zru\u{161}i\u{165}.`,
    "dragStartedTouch": `Pres\xfavanie sa za\u{10D}alo. Prejdite na cie\u{13E}ov\xe9 umiestnenie a dvojit\xfdm kliknut\xedm umiestnite polo\u{17E}ku.`,
    "dragStartedVirtual": `Pres\xfavanie sa za\u{10D}alo. Prejdite na cie\u{13E}ov\xe9 umiestnenie a kliknut\xedm alebo stla\u{10D}en\xedm kl\xe1vesu Enter umiestnite polo\u{17E}ku.`,
    "dropCanceled": `Umiestnenie zru\u{161}en\xe9.`,
    "dropComplete": `Umiestnenie dokon\u{10D}en\xe9.`,
    "dropDescriptionKeyboard": `Stla\u{10D}en\xedm kl\xe1vesu Enter umiestnite polo\u{17E}ku. Stla\u{10D}en\xedm kl\xe1vesu Esc zru\u{161}\xedte pres\xfavanie.`,
    "dropDescriptionTouch": `Dvojit\xfdm kliknut\xedm umiestnite polo\u{17E}ku.`,
    "dropDescriptionVirtual": `Kliknut\xedm umiestnite polo\u{17E}ku.`,
    "dropIndicator": `indik\xe1tor umiestnenia`,
    "dropOnItem": (args)=>`Umiestni\u{165} na polo\u{17E}ku ${args.itemText}`,
    "dropOnRoot": `Umiestni\u{165} na`,
    "endDragKeyboard": `Prebieha pres\xfavanie. Ak ho chcete zru\u{161}i\u{165}, stla\u{10D}te kl\xe1ves Enter.`,
    "endDragTouch": `Prebieha pres\xfavanie. Dvojit\xfdm kliknut\xedm ho m\xf4\u{17E}ete zru\u{161}i\u{165}.`,
    "endDragVirtual": `Prebieha pres\xfavanie.`,
    "insertAfter": (args)=>`Vlo\u{17E}i\u{165} za polo\u{17E}ku ${args.itemText}`,
    "insertBefore": (args)=>`Vlo\u{17E}i\u{165} pred polo\u{17E}ku ${args.itemText}`,
    "insertBetween": (args)=>`Vlo\u{17E}i\u{165} medzi polo\u{17E}ky ${args.beforeItemText} a ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bDjDE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Pritisnite tipko Enter za za\u{10D}etek vle\u{10D}enja.`,
    "dragDescriptionKeyboardAlt": `Pritisnite tipki Alt + Enter za za\u{10D}etek vle\u{10D}enja.`,
    "dragDescriptionLongPress": `Pritisnite in zadr\u{17E}ite za za\u{10D}etek vle\u{10D}enja.`,
    "dragDescriptionTouch": `Dvotapnite za za\u{10D}etek vle\u{10D}enja.`,
    "dragDescriptionVirtual": `Kliknite za za\u{10D}etek vle\u{10D}enja.`,
    "dragItem": (args)=>`Povleci ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Povlecite ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} izbran element`,
            other: ()=>`izbrane elemente (${formatter.number(args.count)})`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Pritisnite tipko Enter, da povle\u{10D}ete ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} izbrani element`,
            other: ()=>`${formatter.number(args.count)} izbranih elementov`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Pritisnite tipki Alt + Enter, da povle\u{10D}ete ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} izbrani element`,
            other: ()=>`${formatter.number(args.count)} izbranih elementov`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Pritisnite in zadr\u{17E}ite, da povle\u{10D}ete ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} izbrani element`,
            other: ()=>`${formatter.number(args.count)} izbranih elementov`
        })}.`,
    "dragStartedKeyboard": `Vle\u{10D}enje se je za\u{10D}elo. Pritisnite tipko Tab za pomik na mesto, kamor \u{17E}elite spustiti elemente, in pritisnite tipko Enter, da jih spustite, ali tipko Escape, da prekli\u{10D}ete postopek.`,
    "dragStartedTouch": `Vle\u{10D}enje se je za\u{10D}elo. Pomaknite se na mesto, kamor \u{17E}elite spustiti elemente, in dvotapnite, da jih spustite.`,
    "dragStartedVirtual": `Vle\u{10D}enje se je za\u{10D}elo. Pomaknite se na mesto, kamor \u{17E}elite spustiti elemente, in kliknite ali pritisnite tipko Enter, da jih spustite.`,
    "dropCanceled": `Spust je preklican.`,
    "dropComplete": `Spust je kon\u{10D}an.`,
    "dropDescriptionKeyboard": `Pritisnite tipko Enter, da spustite. Pritisnite tipko Escape, da prekli\u{10D}ete vle\u{10D}enje.`,
    "dropDescriptionTouch": `Dvotapnite, da spustite.`,
    "dropDescriptionVirtual": `Kliknite, da spustite.`,
    "dropIndicator": `indikator spusta`,
    "dropOnItem": (args)=>`Spusti na mesto ${args.itemText}`,
    "dropOnRoot": `Spusti na mesto`,
    "endDragKeyboard": `Vle\u{10D}enje. Pritisnite tipko Enter za preklic vle\u{10D}enja.`,
    "endDragTouch": `Vle\u{10D}enje. Dvotapnite za preklic vle\u{10D}enja.`,
    "endDragVirtual": `Vle\u{10D}enje. Kliknite, da prekli\u{10D}ete vle\u{10D}enje.`,
    "insertAfter": (args)=>`Vstavi za ${args.itemText}`,
    "insertBefore": (args)=>`Vstavi pred ${args.itemText}`,
    "insertBetween": (args)=>`Vstavi med ${args.beforeItemText} in ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hwYJv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Pritisnite Enter da biste zapo\u{10D}eli prevla\u{10D}enje.`,
    "dragDescriptionKeyboardAlt": `Pritisnite Alt + Enter da biste zapo\u{10D}eli prevla\u{10D}enje.`,
    "dragDescriptionLongPress": `Pritisnite dugo da biste zapo\u{10D}eli prevla\u{10D}enje.`,
    "dragDescriptionTouch": `Dvaput dodirnite da biste zapo\u{10D}eli prevla\u{10D}enje.`,
    "dragDescriptionVirtual": `Kliknite da biste zapo\u{10D}eli prevla\u{10D}enje.`,
    "dragItem": (args)=>`Prevucite ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Prevucite ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} izabranu stavku`,
            other: ()=>`${formatter.number(args.count)} izabrane stavke`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Pritisnite Enter da biste prevukli ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} izabranu stavku`,
            other: ()=>`${formatter.number(args.count)} izabranih stavki`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Pritisnite Alt + Enter da biste prevukli ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} izabranu stavku`,
            other: ()=>`${formatter.number(args.count)} izabranih stavki`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Pritisnite dugo da biste prevukli ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} izabranu stavku`,
            other: ()=>`${formatter.number(args.count)} izabranih stavki`
        })}.`,
    "dragStartedKeyboard": `Prevla\u{10D}enje je zapo\u{10D}eto. Pritisnite Tab da biste oti\u{161}li do cilja za otpu\u{161}tanje, zatim pritisnite Enter za ispu\u{161}tanje ili pritisnite Escape za otkazivanje.`,
    "dragStartedTouch": `Prevla\u{10D}enje je zapo\u{10D}eto. Idite do cilja za otpu\u{161}tanje, a zatim dvaput dodirnite za otpu\u{161}tanje.`,
    "dragStartedVirtual": `Prevla\u{10D}enje je zapo\u{10D}eto. Idite do cilja za otpu\u{161}tanje, a zatim kliknite ili pritinite Enter za otpu\u{161}tanje.`,
    "dropCanceled": `Otpu\u{161}tanje je otkazano.`,
    "dropComplete": `Prevla\u{10D}enje je zavr\u{161}eno.`,
    "dropDescriptionKeyboard": `Pritisnite Enter da biste otpustili. Pritisnite Escape da biste otkazali prevla\u{10D}enje.`,
    "dropDescriptionTouch": `Dvaput dodirnite za otpu\u{161}tanje.`,
    "dropDescriptionVirtual": `Kliknite za otpu\u{161}tanje.`,
    "dropIndicator": `Indikator otpu\u{161}tanja`,
    "dropOnItem": (args)=>`Otpusti na ${args.itemText}`,
    "dropOnRoot": `Otpusti na`,
    "endDragKeyboard": `Prevla\u{10D}enje u toku. Pritisnite Enter da biste otkazali prevla\u{10D}enje.`,
    "endDragTouch": `Prevla\u{10D}enje u toku. Dvaput dodirnite da biste otkazali prevla\u{10D}enje.`,
    "endDragVirtual": `Prevla\u{10D}enje u toku. Kliknite da biste otkazali prevla\u{10D}enje.`,
    "insertAfter": (args)=>`Umetnite posle ${args.itemText}`,
    "insertBefore": (args)=>`Umetnite ispred ${args.itemText}`,
    "insertBetween": (args)=>`Umetnite izme\u{111}u ${args.beforeItemText} i ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2tt6s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `Tryck p\xe5 enter f\xf6r att b\xf6rja dra.`,
    "dragDescriptionKeyboardAlt": `Tryck p\xe5 Alt + Retur f\xf6r att b\xf6rja dra.`,
    "dragDescriptionLongPress": `Tryck l\xe4nge f\xf6r att b\xf6rja dra.`,
    "dragDescriptionTouch": `Dubbeltryck f\xf6r att b\xf6rja dra.`,
    "dragDescriptionVirtual": `Klicka f\xf6r att b\xf6rja dra.`,
    "dragItem": (args)=>`Dra ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Dra ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valt objekt`,
            other: ()=>`${formatter.number(args.count)} valda objekt`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Tryck p\xe5 Retur f\xf6r att dra ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} markerat objekt`,
            other: ()=>`${formatter.number(args.count)} markerade objekt`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Tryck p\xe5 Alt + Retur f\xf6r att dra ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} markerat objekt`,
            other: ()=>`${formatter.number(args.count)} markerade objekt`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Tryck l\xe4nge f\xf6r att dra ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} markerat objekt`,
            other: ()=>`${formatter.number(args.count)} markerade objekt`
        })}.`,
    "dragStartedKeyboard": `B\xf6rja dra. Tryck p\xe5 tabb f\xf6r att navigera till m\xe5let, tryck p\xe5 enter f\xf6r att sl\xe4ppa eller p\xe5 escape f\xf6r att avbryta.`,
    "dragStartedTouch": `B\xf6rja dra. Navigera till ett m\xe5l och dubbeltryck f\xf6r att sl\xe4ppa.`,
    "dragStartedVirtual": `B\xf6rja dra. Navigera till ett m\xe5l och klicka eller tryck p\xe5 enter f\xf6r att sl\xe4ppa.`,
    "dropCanceled": `Sl\xe4pp\xe5tg\xe4rd avbr\xf6ts.`,
    "dropComplete": `Sl\xe4pp\xe5tg\xe4rd klar.`,
    "dropDescriptionKeyboard": `Tryck p\xe5 enter f\xf6r att sl\xe4ppa. Tryck p\xe5 escape f\xf6r att avbryta drag\xe5tg\xe4rd.`,
    "dropDescriptionTouch": `Dubbeltryck f\xf6r att sl\xe4ppa.`,
    "dropDescriptionVirtual": `Klicka f\xf6r att sl\xe4ppa.`,
    "dropIndicator": `sl\xe4ppindikator`,
    "dropOnItem": (args)=>`Sl\xe4pp p\xe5 ${args.itemText}`,
    "dropOnRoot": `Sl\xe4pp p\xe5`,
    "endDragKeyboard": `Drar. Tryck p\xe5 enter f\xf6r att avbryta drag\xe5tg\xe4rd.`,
    "endDragTouch": `Drar. Dubbeltryck f\xf6r att avbryta drag\xe5tg\xe4rd.`,
    "endDragVirtual": `Drar. Klicka f\xf6r att avbryta drag\xe5tg\xe4rd.`,
    "insertAfter": (args)=>`Infoga efter ${args.itemText}`,
    "insertBefore": (args)=>`Infoga f\xf6re ${args.itemText}`,
    "insertBetween": (args)=>`Infoga mellan ${args.beforeItemText} och ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2PWSH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `S\xfcr\xfcklemeyi ba\u{15F}latmak i\xe7in Enter'a bas\u{131}n.`,
    "dragDescriptionKeyboardAlt": `S\xfcr\xfcklemeyi ba\u{15F}latmak i\xe7in Alt + Enter'a bas\u{131}n.`,
    "dragDescriptionLongPress": `S\xfcr\xfcklemeye ba\u{15F}lamak i\xe7in uzun bas\u{131}n.`,
    "dragDescriptionTouch": `S\xfcr\xfcklemeyi ba\u{15F}latmak i\xe7in \xe7ift t\u{131}klay\u{131}n.`,
    "dragDescriptionVirtual": `S\xfcr\xfcklemeyi ba\u{15F}latmak i\xe7in t\u{131}klay\u{131}n.`,
    "dragItem": (args)=>`${args.itemText}\u{2019}i s\xfcr\xfckle`,
    "dragSelectedItems": (args, formatter)=>`S\xfcr\xfckle ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} se\xe7ili \xf6ge`,
            other: ()=>`${formatter.number(args.count)} se\xe7ili \xf6ge`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} se\xe7ilmi\u{15F} \xf6\u{11F}e`,
            other: ()=>`${formatter.number(args.count)} se\xe7ilmi\u{15F} \xf6\u{11F}e`
        })} \xf6\u{11F}esini s\xfcr\xfcklemek i\xe7in Enter'a bas\u{131}n.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} se\xe7ilmi\u{15F} \xf6\u{11F}e`,
            other: ()=>`${formatter.number(args.count)} se\xe7ilmi\u{15F} \xf6\u{11F}e`
        })} \xf6\u{11F}esini s\xfcr\xfcklemek i\xe7in Alt + Enter tu\u{15F}una bas\u{131}n.`,
    "dragSelectedLongPress": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} se\xe7ilmi\u{15F} \xf6\u{11F}e`,
            other: ()=>`${formatter.number(args.count)} se\xe7ilmi\u{15F} \xf6\u{11F}e`
        })} \xf6\u{11F}esini s\xfcr\xfcklemek i\xe7in uzun bas\u{131}n.`,
    "dragStartedKeyboard": `S\xfcr\xfckleme ba\u{15F}lat\u{131}ld\u{131}. Bir b\u{131}rakma hedefine gitmek i\xe7in Tab\u{2019}a bas\u{131}n, ard\u{131}ndan b\u{131}rakmak i\xe7in Enter\u{2019}a bas\u{131}n veya iptal etmek i\xe7in Escape\u{2019}e bas\u{131}n.`,
    "dragStartedTouch": `S\xfcr\xfckleme ba\u{15F}lat\u{131}ld\u{131}. Bir b\u{131}rakma hedefine gidin, ard\u{131}ndan b\u{131}rakmak i\xe7in \xe7ift t\u{131}klay\u{131}n.`,
    "dragStartedVirtual": `S\xfcr\xfckleme ba\u{15F}lat\u{131}ld\u{131}. Bir b\u{131}rakma hedefine gidin, ard\u{131}ndan b\u{131}rakmak i\xe7in Enter\u{2019}a t\u{131}klay\u{131}n veya bas\u{131}n.`,
    "dropCanceled": `B\u{131}rakma iptal edildi.`,
    "dropComplete": `B\u{131}rakma tamamland\u{131}.`,
    "dropDescriptionKeyboard": `B\u{131}rakmak i\xe7in Enter'a bas\u{131}n. S\xfcr\xfcklemeyi iptal etmek i\xe7in Escape'e bas\u{131}n.`,
    "dropDescriptionTouch": `B\u{131}rakmak i\xe7in \xe7ift t\u{131}klay\u{131}n.`,
    "dropDescriptionVirtual": `B\u{131}rakmak i\xe7in t\u{131}klay\u{131}n.`,
    "dropIndicator": `b\u{131}rakma g\xf6stergesi`,
    "dropOnItem": (args)=>`${args.itemText} \xfczerine b\u{131}rak`,
    "dropOnRoot": `B\u{131}rak\u{131}n`,
    "endDragKeyboard": `S\xfcr\xfckleme. S\xfcr\xfcklemeyi iptal etmek i\xe7in Enter'a bas\u{131}n.`,
    "endDragTouch": `S\xfcr\xfckleme. S\xfcr\xfcklemeyi iptal etmek i\xe7in \xe7ift t\u{131}klay\u{131}n.`,
    "endDragVirtual": `S\xfcr\xfckleme. S\xfcr\xfcklemeyi iptal etmek i\xe7in t\u{131}klay\u{131}n.`,
    "insertAfter": (args)=>`${args.itemText}\u{2019}den sonra gir`,
    "insertBefore": (args)=>`${args.itemText}\u{2019}den \xf6nce gir`,
    "insertBetween": (args)=>`${args.beforeItemText} ve ${args.afterItemText} aras\u{131}na gir`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3GCRJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Enter, \u{449}\u{43E}\u{431} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}.`,
    "dragDescriptionKeyboardAlt": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Alt + Enter, \u{449}\u{43E}\u{431} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}.`,
    "dragDescriptionLongPress": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{456} \u{443}\u{442}\u{440}\u{438}\u{43C}\u{443}\u{439}\u{442}\u{435}, \u{449}\u{43E}\u{431} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}.`,
    "dragDescriptionTouch": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{434}\u{432}\u{456}\u{447}\u{456}, \u{449}\u{43E}\u{431} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}.`,
    "dragDescriptionVirtual": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C}, \u{449}\u{43E}\u{431} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}.`,
    "dragItem": (args)=>`\u{41F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438} ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`\u{41F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{456}\u{442}\u{44C} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{445} \u{435}\u{43B}\u{435}\u{43C}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Enter, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{445} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438}(-\u{456}\u{432})`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Alt + Enter, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{445} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438}(-\u{456}\u{432})`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`\u{423}\u{442}\u{440}\u{438}\u{43C}\u{443}\u{439}\u{442}\u{435}, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{445} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438}(-\u{456}\u{432})`
        })}.`,
    "dragStartedKeyboard": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F} \u{43F}\u{43E}\u{447}\u{430}\u{43B}\u{43E}\u{441}\u{44F}. \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Tab, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{439}\u{442}\u{438} \u{434}\u{43E} \u{446}\u{456}\u{43B}\u{456} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}, \u{43F}\u{43E}\u{442}\u{456}\u{43C} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Enter, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438}, \u{430}\u{431}\u{43E} Escape, \u{449}\u{43E}\u{431} \u{441}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438}.`,
    "dragStartedTouch": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F} \u{43F}\u{43E}\u{447}\u{430}\u{43B}\u{43E}\u{441}\u{44F}. \u{41F}\u{435}\u{440}\u{435}\u{439}\u{434}\u{456}\u{442}\u{44C} \u{434}\u{43E} \u{446}\u{456}\u{43B}\u{456} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}, \u{43F}\u{43E}\u{442}\u{456}\u{43C} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{434}\u{432}\u{456}\u{447}\u{456}, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438}.`,
    "dragStartedVirtual": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F} \u{43F}\u{43E}\u{447}\u{430}\u{43B}\u{43E}\u{441}\u{44F}. \u{41F}\u{435}\u{440}\u{435}\u{439}\u{434}\u{456}\u{442}\u{44C} \u{434}\u{43E} \u{446}\u{456}\u{43B}\u{456} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}, \u{43F}\u{43E}\u{442}\u{456}\u{43C} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Enter, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438}.`,
    "dropCanceled": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F} \u{441}\u{43A}\u{430}\u{441}\u{43E}\u{432}\u{430}\u{43D}\u{43E}.`,
    "dropComplete": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{43E}.`,
    "dropDescriptionKeyboard": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Enter, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438}. \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Escape, \u{449}\u{43E}\u{431} \u{441}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}.`,
    "dropDescriptionTouch": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{434}\u{432}\u{456}\u{447}\u{456}, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438}.`,
    "dropDescriptionVirtual": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C}, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438}.`,
    "dropIndicator": `\u{456}\u{43D}\u{434}\u{438}\u{43A}\u{430}\u{442}\u{43E}\u{440} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}`,
    "dropOnItem": (args)=>`\u{41F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438} \u{43D}\u{430} ${args.itemText}`,
    "dropOnRoot": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438} \u{43D}\u{430}`,
    "endDragKeyboard": `\u{422}\u{440}\u{438}\u{432}\u{430}\u{454} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}. \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Enter, \u{449}\u{43E}\u{431} \u{441}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}.`,
    "endDragTouch": `\u{422}\u{440}\u{438}\u{432}\u{430}\u{454} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}. \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{434}\u{432}\u{456}\u{447}\u{456}, \u{449}\u{43E}\u{431} \u{441}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}.`,
    "endDragVirtual": `\u{422}\u{440}\u{438}\u{432}\u{430}\u{454} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}. \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C}, \u{449}\u{43E}\u{431} \u{441}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}.`,
    "insertAfter": (args)=>`\u{412}\u{441}\u{442}\u{430}\u{432}\u{438}\u{442}\u{438} \u{43F}\u{456}\u{441}\u{43B}\u{44F} ${args.itemText}`,
    "insertBefore": (args)=>`\u{412}\u{441}\u{442}\u{430}\u{432}\u{438}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{434} ${args.itemText}`,
    "insertBetween": (args)=>`\u{412}\u{441}\u{442}\u{430}\u{432}\u{438}\u{442}\u{438} \u{43C}\u{456}\u{436} ${args.beforeItemText} \u{456} ${args.afterItemText}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dWnI2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `\u{6309} Enter \u{5F00}\u{59CB}\u{62D6}\u{52A8}\u{3002}`,
    "dragDescriptionKeyboardAlt": `\u{6309} Alt + Enter \u{5F00}\u{59CB}\u{62D6}\u{52A8}\u{3002}`,
    "dragDescriptionLongPress": `\u{957F}\u{6309}\u{4EE5}\u{5F00}\u{59CB}\u{62D6}\u{52A8}\u{3002}`,
    "dragDescriptionTouch": `\u{53CC}\u{51FB}\u{5F00}\u{59CB}\u{62D6}\u{52A8}\u{3002}`,
    "dragDescriptionVirtual": `\u{5355}\u{51FB}\u{5F00}\u{59CB}\u{62D6}\u{52A8}\u{3002}`,
    "dragItem": (args)=>`\u{62D6}\u{52A8} ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`\u{62D6}\u{52A8} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{9009}\u{4E2D}\u{9879}\u{76EE}`,
            other: ()=>`${formatter.number(args.count)} \u{9009}\u{4E2D}\u{9879}\u{76EE}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`\u{6309} Enter \u{4EE5}\u{62D6}\u{52A8} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{4E2A}\u{9009}\u{5B9A}\u{9879}`,
            other: ()=>`${formatter.number(args.count)} \u{4E2A}\u{9009}\u{5B9A}\u{9879}`
        })}\u{3002}`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`\u{6309} Alt + Enter \u{4EE5}\u{62D6}\u{52A8} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{4E2A}\u{9009}\u{5B9A}\u{9879}`,
            other: ()=>`${formatter.number(args.count)} \u{4E2A}\u{9009}\u{5B9A}\u{9879}`
        })}\u{3002}`,
    "dragSelectedLongPress": (args, formatter)=>`\u{957F}\u{6309}\u{4EE5}\u{62D6}\u{52A8} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{4E2A}\u{9009}\u{5B9A}\u{9879}`,
            other: ()=>`${formatter.number(args.count)} \u{4E2A}\u{9009}\u{5B9A}\u{9879}`
        })}\u{3002}`,
    "dragStartedKeyboard": `\u{5DF2}\u{5F00}\u{59CB}\u{62D6}\u{52A8}\u{3002}\u{6309} Tab \u{5BFC}\u{822A}\u{5230}\u{653E}\u{7F6E}\u{76EE}\u{6807}\u{FF0C}\u{7136}\u{540E}\u{6309} Enter \u{653E}\u{7F6E}\u{6216}\u{6309} Escape \u{53D6}\u{6D88}\u{3002}`,
    "dragStartedTouch": `\u{5DF2}\u{5F00}\u{59CB}\u{62D6}\u{52A8}\u{3002}\u{5BFC}\u{822A}\u{5230}\u{653E}\u{7F6E}\u{76EE}\u{6807}\u{FF0C}\u{7136}\u{540E}\u{53CC}\u{51FB}\u{653E}\u{7F6E}\u{3002}`,
    "dragStartedVirtual": `\u{5DF2}\u{5F00}\u{59CB}\u{62D6}\u{52A8}\u{3002}\u{5BFC}\u{822A}\u{5230}\u{653E}\u{7F6E}\u{76EE}\u{6807}\u{FF0C}\u{7136}\u{540E}\u{5355}\u{51FB}\u{6216}\u{6309} Enter \u{653E}\u{7F6E}\u{3002}`,
    "dropCanceled": `\u{653E}\u{7F6E}\u{5DF2}\u{53D6}\u{6D88}\u{3002}`,
    "dropComplete": `\u{653E}\u{7F6E}\u{5DF2}\u{5B8C}\u{6210}\u{3002}`,
    "dropDescriptionKeyboard": `\u{6309} Enter \u{653E}\u{7F6E}\u{3002}\u{6309} Escape \u{53D6}\u{6D88}\u{62D6}\u{52A8}\u{3002}`,
    "dropDescriptionTouch": `\u{53CC}\u{51FB}\u{653E}\u{7F6E}\u{3002}`,
    "dropDescriptionVirtual": `\u{5355}\u{51FB}\u{653E}\u{7F6E}\u{3002}`,
    "dropIndicator": `\u{653E}\u{7F6E}\u{6807}\u{8BB0}`,
    "dropOnItem": (args)=>`\u{653E}\u{7F6E}\u{4E8E} ${args.itemText}`,
    "dropOnRoot": `\u{653E}\u{7F6E}\u{4E8E}`,
    "endDragKeyboard": `\u{6B63}\u{5728}\u{62D6}\u{52A8}\u{3002}\u{6309} Enter \u{53D6}\u{6D88}\u{62D6}\u{52A8}\u{3002}`,
    "endDragTouch": `\u{6B63}\u{5728}\u{62D6}\u{52A8}\u{3002}\u{53CC}\u{51FB}\u{53D6}\u{6D88}\u{62D6}\u{52A8}\u{3002}`,
    "endDragVirtual": `\u{6B63}\u{5728}\u{62D6}\u{52A8}\u{3002}\u{5355}\u{51FB}\u{53D6}\u{6D88}\u{62D6}\u{52A8}\u{3002}`,
    "insertAfter": (args)=>`\u{63D2}\u{5165}\u{5230} ${args.itemText} \u{4E4B}\u{540E}`,
    "insertBefore": (args)=>`\u{63D2}\u{5165}\u{5230} ${args.itemText} \u{4E4B}\u{524D}`,
    "insertBetween": (args)=>`\u{63D2}\u{5165}\u{5230} ${args.beforeItemText} \u{548C} ${args.afterItemText} \u{4E4B}\u{95F4}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"e8km7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dragDescriptionKeyboard": `\u{6309} Enter \u{9375}\u{4EE5}\u{958B}\u{59CB}\u{62D6}\u{66F3}\u{3002}`,
    "dragDescriptionKeyboardAlt": `\u{6309} Alt+Enter \u{9375}\u{4EE5}\u{958B}\u{59CB}\u{62D6}\u{66F3}\u{3002}`,
    "dragDescriptionLongPress": `\u{9577}\u{6309}\u{4EE5}\u{958B}\u{59CB}\u{62D6}\u{66F3}\u{3002}`,
    "dragDescriptionTouch": `\u{8F15}\u{9EDE}\u{5169}\u{4E0B}\u{4EE5}\u{958B}\u{59CB}\u{62D6}\u{66F3}\u{3002}`,
    "dragDescriptionVirtual": `\u{6309}\u{4E00}\u{4E0B}\u{6ED1}\u{9F20}\u{4EE5}\u{958B}\u{59CB}\u{62D6}\u{66F3}\u{3002}`,
    "dragItem": (args)=>`\u{62D6}\u{66F3}\u{300C}${args.itemText}\u{300D}`,
    "dragSelectedItems": (args, formatter)=>`\u{62D6}\u{66F3} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{500B}\u{9078}\u{5B9A}\u{9805}\u{76EE}`,
            other: ()=>`${formatter.number(args.count)} \u{500B}\u{9078}\u{5B9A}\u{9805}\u{76EE}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`\u{6309} Enter \u{9375}\u{4EE5}\u{62D6}\u{66F3} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{500B}\u{9078}\u{5B9A}\u{9805}\u{76EE}`,
            other: ()=>`${formatter.number(args.count)} \u{500B}\u{9078}\u{5B9A}\u{9805}\u{76EE}`
        })}\u{3002}`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`\u{6309} Alt+Enter \u{9375}\u{4EE5}\u{62D6}\u{66F3} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{500B}\u{9078}\u{5B9A}\u{9805}\u{76EE}`,
            other: ()=>`${formatter.number(args.count)} \u{500B}\u{9078}\u{5B9A}\u{9805}\u{76EE}`
        })}\u{3002}`,
    "dragSelectedLongPress": (args, formatter)=>`\u{9577}\u{6309}\u{4EE5}\u{62D6}\u{66F3} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{500B}\u{9078}\u{5B9A}\u{9805}\u{76EE}`,
            other: ()=>`${formatter.number(args.count)} \u{500B}\u{9078}\u{5B9A}\u{9805}\u{76EE}`
        })}\u{3002}`,
    "dragStartedKeyboard": `\u{5DF2}\u{958B}\u{59CB}\u{62D6}\u{66F3}\u{3002}\u{6309} Tab \u{9375}\u{4EE5}\u{700F}\u{89BD}\u{81F3}\u{653E}\u{7F6E}\u{76EE}\u{6A19}\u{FF0C}\u{7136}\u{5F8C}\u{6309} Enter \u{9375}\u{4EE5}\u{653E}\u{7F6E}\u{FF0C}\u{6216}\u{6309} Escape \u{9375}\u{4EE5}\u{53D6}\u{6D88}\u{3002}`,
    "dragStartedTouch": `\u{5DF2}\u{958B}\u{59CB}\u{62D6}\u{66F3}\u{3002}\u{700F}\u{89BD}\u{81F3}\u{653E}\u{7F6E}\u{76EE}\u{6A19}\u{FF0C}\u{7136}\u{5F8C}\u{8F15}\u{9EDE}\u{5169}\u{4E0B}\u{4EE5}\u{653E}\u{7F6E}\u{3002}`,
    "dragStartedVirtual": `\u{5DF2}\u{958B}\u{59CB}\u{62D6}\u{66F3}\u{3002}\u{700F}\u{89BD}\u{81F3}\u{653E}\u{7F6E}\u{76EE}\u{6A19}\u{FF0C}\u{7136}\u{5F8C}\u{6309}\u{4E00}\u{4E0B}\u{6ED1}\u{9F20}\u{6216}\u{6309} Enter \u{9375}\u{4EE5}\u{653E}\u{7F6E}\u{3002}`,
    "dropCanceled": `\u{653E}\u{7F6E}\u{5DF2}\u{53D6}\u{6D88}\u{3002}`,
    "dropComplete": `\u{653E}\u{7F6E}\u{5DF2}\u{5B8C}\u{6210}\u{3002}`,
    "dropDescriptionKeyboard": `\u{6309} Enter \u{9375}\u{4EE5}\u{653E}\u{7F6E}\u{3002}\u{6309} Escape \u{9375}\u{4EE5}\u{53D6}\u{6D88}\u{62D6}\u{66F3}\u{3002}`,
    "dropDescriptionTouch": `\u{8F15}\u{9EDE}\u{5169}\u{4E0B}\u{4EE5}\u{653E}\u{7F6E}\u{3002}`,
    "dropDescriptionVirtual": `\u{6309}\u{4E00}\u{4E0B}\u{6ED1}\u{9F20}\u{4EE5}\u{653E}\u{7F6E}\u{3002}`,
    "dropIndicator": `\u{653E}\u{7F6E}\u{6307}\u{793A}\u{5668}`,
    "dropOnItem": (args)=>`\u{653E}\u{7F6E}\u{5728}\u{300C}${args.itemText}\u{300D}\u{4E0A}`,
    "dropOnRoot": `\u{653E}\u{7F6E}\u{5728}`,
    "endDragKeyboard": `\u{62D6}\u{66F3}\u{4E2D}\u{3002}\u{6309} Enter \u{9375}\u{4EE5}\u{53D6}\u{6D88}\u{62D6}\u{66F3}\u{3002}`,
    "endDragTouch": `\u{62D6}\u{66F3}\u{4E2D}\u{3002}\u{8F15}\u{9EDE}\u{5169}\u{4E0B}\u{4EE5}\u{53D6}\u{6D88}\u{62D6}\u{66F3}\u{3002}`,
    "endDragVirtual": `\u{62D6}\u{66F3}\u{4E2D}\u{3002}\u{6309}\u{4E00}\u{4E0B}\u{6ED1}\u{9F20}\u{4EE5}\u{53D6}\u{6D88}\u{62D6}\u{66F3}\u{3002}`,
    "insertAfter": (args)=>`\u{63D2}\u{5165}\u{81F3}\u{300C}${args.itemText}\u{300D}\u{4E4B}\u{5F8C}`,
    "insertBefore": (args)=>`\u{63D2}\u{5165}\u{81F3}\u{300C}${args.itemText}\u{300D}\u{4E4B}\u{524D}`,
    "insertBetween": (args)=>`\u{63D2}\u{5165}\u{81F3}\u{300C}${args.beforeItemText}\u{300D}\u{548C}\u{300C}${args.afterItemText}\u{300D}\u{4E4B}\u{9593}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

