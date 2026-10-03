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
})({"4N86j":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a slider component representing one or
 * more values.
 *
 * @param props Props for the slider.
 * @param state State for the slider, as returned by `useSliderState`.
 * @param trackRef Ref for the "track" element.  The width of this element provides the "length"
 *   of the track -- the span of one dimensional space that the slider thumb can be.  It also
 *   accepts click and drag motions, so that the closest thumb will follow clicks and drags on
 *   the track.
 */ // oxlint-disable-next-line react/react-compiler
parcelHelpers.export(exports, "useSlider", ()=>useSlider);
var _number = require("react-stately/private/utils/number");
var _utils = require("./utils");
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _useGlobalListeners = require("../utils/useGlobalListeners");
var _useLabel = require("../label/useLabel");
var _i18Nprovider = require("../i18n/I18nProvider");
var _useMove = require("../interactions/useMove");
function useSlider(props, state, trackRef) {
    let { labelProps, fieldProps } = (0, _useLabel.useLabel)(props);
    let isVertical = props.orientation === 'vertical';
    // Attach id of the label to the state so it can be accessed by useSliderThumb.
    (0, _utils.sliderData).set(state, {
        id: labelProps.id ?? fieldProps.id,
        'aria-describedby': props['aria-describedby'],
        'aria-details': props['aria-details']
    });
    let { direction } = (0, _i18Nprovider.useLocale)();
    let { addGlobalListener, removeGlobalListener } = (0, _useGlobalListeners.useGlobalListeners)();
    // When the user clicks or drags the track, we want the motion to set and drag the
    // closest thumb.  Hence we also need to install useMove() on the track element.
    // Here, we keep track of which index is the "closest" to the drag start point.
    // It is set onMouseDown/onTouchDown; see trackProps below.
    const realTimeTrackDraggingIndex = (0, _react.useRef)(null);
    const reverseX = direction === 'rtl';
    const currentPosition = (0, _react.useRef)(null);
    const { moveProps } = (0, _useMove.useMove)({
        onMoveStart () {
            currentPosition.current = null;
        },
        onMove ({ deltaX, deltaY }) {
            if (!trackRef.current) return;
            let { height, width } = trackRef.current.getBoundingClientRect();
            let size = isVertical ? height : width;
            if (currentPosition.current == null && realTimeTrackDraggingIndex.current != null) currentPosition.current = state.getThumbPercent(realTimeTrackDraggingIndex.current) * size;
            let delta = isVertical ? deltaY : deltaX;
            if (isVertical || reverseX) delta = -delta;
            currentPosition.current += delta;
            if (realTimeTrackDraggingIndex.current != null && trackRef.current) {
                const percent = (0, _number.clamp)(currentPosition.current / size, 0, 1);
                state.setThumbPercent(realTimeTrackDraggingIndex.current, percent);
            }
        },
        onMoveEnd () {
            if (realTimeTrackDraggingIndex.current != null) {
                state.setThumbDragging(realTimeTrackDraggingIndex.current, false);
                realTimeTrackDraggingIndex.current = null;
            }
        }
    });
    let currentPointer = (0, _react.useRef)(undefined);
    let onDownTrack = (e, id, clientX, clientY)=>{
        // We only trigger track-dragging if the user clicks on the track itself and nothing is currently being dragged.
        if (trackRef.current && !props.isDisabled && state.values.every((_, i)=>!state.isThumbDragging(i))) {
            let { height, width, top, left } = trackRef.current.getBoundingClientRect();
            let size = isVertical ? height : width;
            // Find the closest thumb
            const trackPosition = isVertical ? top : left;
            const clickPosition = isVertical ? clientY : clientX;
            const offset = clickPosition - trackPosition;
            let percent = offset / size;
            if (direction === 'rtl' || isVertical) percent = 1 - percent;
            let value = state.getPercentValue(percent);
            // to find the closet thumb we split the array based on the first thumb position to the "right/end" of the click.
            let closestThumb;
            let split = state.values.findIndex((v)=>value - v < 0);
            if (split === 0) // If the index is zero then the closetThumb is the first one
            closestThumb = split;
            else if (split === -1) // If no index is found they've clicked past all the thumbs
            closestThumb = state.values.length - 1;
            else {
                let lastLeft = state.values[split - 1];
                let firstRight = state.values[split];
                // Pick the last left/start thumb, unless they are stacked on top of each other, then pick the right/end one
                if (Math.abs(lastLeft - value) < Math.abs(firstRight - value)) closestThumb = split - 1;
                else closestThumb = split;
            }
            // Confirm that the found closest thumb is editable, not disabled, and move it
            if (closestThumb >= 0 && state.isThumbEditable(closestThumb)) {
                // Don't unfocus anything
                e.preventDefault();
                realTimeTrackDraggingIndex.current = closestThumb;
                state.setFocusedThumb(closestThumb);
                currentPointer.current = id;
                state.setThumbDragging(realTimeTrackDraggingIndex.current, true);
                state.setThumbValue(closestThumb, value);
                addGlobalListener(window, 'mouseup', onUpTrack, false);
                addGlobalListener(window, 'touchend', onUpTrack, false);
                addGlobalListener(window, 'pointerup', onUpTrack, false);
            } else realTimeTrackDraggingIndex.current = null;
        }
    };
    let onUpTrack = (e)=>{
        let id = e.pointerId ?? e.changedTouches?.[0].identifier;
        if (id === currentPointer.current) {
            if (realTimeTrackDraggingIndex.current != null) {
                state.setThumbDragging(realTimeTrackDraggingIndex.current, false);
                realTimeTrackDraggingIndex.current = null;
            }
            removeGlobalListener(window, 'mouseup', onUpTrack, false);
            removeGlobalListener(window, 'touchend', onUpTrack, false);
            removeGlobalListener(window, 'pointerup', onUpTrack, false);
        }
    };
    if ('htmlFor' in labelProps && labelProps.htmlFor) {
        // Ideally the `for` attribute should point to the first thumb, but VoiceOver on iOS
        // causes this to override the `aria-labelledby` on the thumb. This causes the first
        // thumb to only be announced as the slider label rather than its individual name as well.
        // See https://bugs.webkit.org/show_bug.cgi?id=172464.
        delete labelProps.htmlFor;
        labelProps.onClick = ()=>{
            // Safari does not focus <input type="range"> elements when clicking on an associated <label>,
            // so do it manually. In addition, make sure we show the focus ring.
            document.getElementById((0, _utils.getSliderThumbId)(state, 0))?.focus();
            (0, _useFocusVisible.setInteractionModality)('keyboard');
        };
    }
    return {
        labelProps,
        // The root element of the Slider will have role="group" to group together
        // all the thumb inputs in the Slider.  The label of the Slider will
        // be used to label the group.
        groupProps: {
            role: 'group',
            ...fieldProps
        },
        trackProps: (0, _mergeProps.mergeProps)({
            onMouseDown (e) {
                if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
                onDownTrack(e, undefined, e.clientX, e.clientY);
            },
            onPointerDown (e) {
                if (e.pointerType === 'mouse' && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey)) return;
                onDownTrack(e, e.pointerId, e.clientX, e.clientY);
            },
            onTouchStart (e) {
                onDownTrack(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
            },
            style: {
                position: 'relative',
                touchAction: 'none'
            }
        }, moveProps),
        outputProps: {
            htmlFor: state.values.map((_, index)=>(0, _utils.getSliderThumbId)(state, index)).join(' '),
            'aria-live': 'off'
        }
    };
}

},{"react-stately/private/utils/number":"aEFFO","./utils":"esFJD","../utils/mergeProps":"jycxS","react":"gOP0N","../interactions/useFocusVisible":"aBfUW","../utils/useGlobalListeners":"jsdt1","../label/useLabel":"kMUgu","../i18n/I18nProvider":"czGuc","../interactions/useMove":"iFW04","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"esFJD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sliderData", ()=>sliderData);
parcelHelpers.export(exports, "getSliderThumbId", ()=>getSliderThumbId);
const sliderData = new WeakMap();
function getSliderThumbId(state, index) {
    let data = sliderData.get(state);
    if (!data) throw new Error('Unknown slider state');
    return `${data.id}-${index}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2kBIX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Provides behavior and accessibility for a thumb of a slider component.
 *
 * @param opts Options for this Slider thumb.
 * @param state Slider state, created via `useSliderState`.
 */ parcelHelpers.export(exports, "useSliderThumb", ()=>useSliderThumb);
var _number = require("react-stately/private/utils/number");
var _focusWithoutScrolling = require("../utils/focusWithoutScrolling");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _utils = require("./utils");
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _useFocusable = require("../interactions/useFocusable");
var _useFormReset = require("../utils/useFormReset");
var _useGlobalListeners = require("../utils/useGlobalListeners");
var _useKeyboard = require("../interactions/useKeyboard");
var _useLabel = require("../label/useLabel");
var _i18Nprovider = require("../i18n/I18nProvider");
var _useMove = require("../interactions/useMove");
function useSliderThumb(opts, state) {
    let { index = 0, isRequired, validationState, isInvalid, trackRef, inputRef, orientation = state.orientation, name, form } = opts;
    let isDisabled = opts.isDisabled || state.isDisabled;
    let isVertical = orientation === 'vertical';
    let { direction } = (0, _i18Nprovider.useLocale)();
    let { addGlobalListener, removeGlobalListener } = (0, _useGlobalListeners.useGlobalListeners)();
    let data = (0, _utils.sliderData).get(state);
    const { labelProps, fieldProps } = (0, _useLabel.useLabel)({
        ...opts,
        id: (0, _utils.getSliderThumbId)(state, index),
        'aria-labelledby': `${data.id} ${opts['aria-labelledby'] ?? ''}`.trim()
    });
    const value = state.values[index];
    const focusInput = (0, _react.useCallback)(()=>{
        if (inputRef.current) (0, _focusWithoutScrolling.focusWithoutScrolling)(inputRef.current);
    }, [
        inputRef
    ]);
    const isFocused = state.focusedThumb === index;
    (0, _react.useEffect)(()=>{
        if (isFocused) focusInput();
    }, [
        isFocused,
        focusInput
    ]);
    let reverseX = direction === 'rtl';
    let currentPosition = (0, _react.useRef)(null);
    let keyboardUpdate = (cb)=>{
        // remember to set this so that onChangeEnd is fired
        state.setThumbDragging(index, true);
        cb();
        state.setThumbDragging(index, false);
    };
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            PageUp: ()=>{
                return keyboardUpdate(()=>{
                    state.incrementThumb(index, state.pageSize);
                });
            },
            PageDown: ()=>{
                return keyboardUpdate(()=>{
                    state.decrementThumb(index, state.pageSize);
                });
            },
            Home: ()=>{
                return keyboardUpdate(()=>{
                    state.setThumbValue(index, state.getThumbMinValue(index));
                });
            },
            End: ()=>{
                return keyboardUpdate(()=>{
                    state.setThumbValue(index, state.getThumbMaxValue(index));
                });
            }
        },
        allowRepeats: true
    });
    let { moveProps } = (0, _useMove.useMove)({
        onMoveStart () {
            currentPosition.current = null;
            state.setThumbDragging(index, true);
        },
        onMove ({ deltaX, deltaY, pointerType, shiftKey }) {
            const { getThumbPercent, setThumbPercent, decrementThumb, incrementThumb, step, pageSize } = state;
            if (!trackRef.current) return;
            let { width, height } = trackRef.current.getBoundingClientRect();
            let size = isVertical ? height : width;
            if (currentPosition.current == null) currentPosition.current = getThumbPercent(index) * size;
            if (pointerType === 'keyboard') {
                if (deltaX > 0 && reverseX || deltaX < 0 && !reverseX || deltaY > 0) decrementThumb(index, shiftKey ? pageSize : step);
                else incrementThumb(index, shiftKey ? pageSize : step);
            } else {
                let delta = isVertical ? deltaY : deltaX;
                if (isVertical || reverseX) delta = -delta;
                currentPosition.current += delta;
                setThumbPercent(index, (0, _number.clamp)(currentPosition.current / size, 0, 1));
            }
        },
        onMoveEnd () {
            state.setThumbDragging(index, false);
        }
    });
    // Immediately register editability with the state
    state.setThumbEditable(index, !isDisabled);
    const { focusableProps } = (0, _useFocusable.useFocusable)((0, _mergeProps.mergeProps)(opts, {
        onFocus: ()=>state.setFocusedThumb(index),
        onBlur: ()=>state.setFocusedThumb(undefined)
    }), inputRef);
    let currentPointer = (0, _react.useRef)(undefined);
    let onDown = (id)=>{
        focusInput();
        currentPointer.current = id;
        state.setThumbDragging(index, true);
        addGlobalListener(window, 'mouseup', onUp, false);
        addGlobalListener(window, 'touchend', onUp, false);
        addGlobalListener(window, 'pointerup', onUp, false);
    };
    let onUp = (e)=>{
        let id = e.pointerId ?? e.changedTouches?.[0].identifier;
        if (id === currentPointer.current) {
            focusInput();
            state.setThumbDragging(index, false);
            removeGlobalListener(window, 'mouseup', onUp, false);
            removeGlobalListener(window, 'touchend', onUp, false);
            removeGlobalListener(window, 'pointerup', onUp, false);
        }
    };
    let thumbPosition = state.getThumbPercent(index);
    if (isVertical || direction === 'rtl') thumbPosition = 1 - thumbPosition;
    let interactions = !isDisabled ? (0, _mergeProps.mergeProps)(keyboardProps, moveProps, {
        onMouseDown: (e)=>{
            if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
            onDown();
        },
        onPointerDown: (e)=>{
            if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
            onDown(e.pointerId);
        },
        onTouchStart: (e)=>{
            onDown(e.changedTouches[0].identifier);
        }
    }) : {};
    (0, _useFormReset.useFormReset)(inputRef, state.defaultValues[index], (v)=>{
        state.setThumbValue(index, v);
    });
    // We install mouse handlers for the drag motion on the thumb div, but
    // not the key handler for moving the thumb with the slider.  Instead,
    // we focus the range input, and let the browser handle the keyboard
    // interactions; we then listen to input's onChange to update state.
    return {
        inputProps: (0, _mergeProps.mergeProps)(focusableProps, fieldProps, {
            type: 'range',
            tabIndex: !isDisabled ? 0 : undefined,
            min: state.getThumbMinValue(index),
            max: state.getThumbMaxValue(index),
            step: state.step,
            value: value,
            name,
            form,
            disabled: isDisabled,
            'aria-orientation': orientation,
            'aria-valuetext': state.getThumbValueLabel(index),
            'aria-required': isRequired || undefined,
            'aria-invalid': isInvalid || validationState === 'invalid' || undefined,
            'aria-errormessage': opts['aria-errormessage'],
            'aria-describedby': [
                data['aria-describedby'],
                opts['aria-describedby']
            ].filter(Boolean).join(' '),
            'aria-details': [
                data['aria-details'],
                opts['aria-details']
            ].filter(Boolean).join(' '),
            onChange: (e)=>{
                state.setThumbValue(index, parseFloat((0, _domfunctions.getEventTarget)(e).value));
            }
        }),
        thumbProps: {
            ...interactions,
            style: {
                position: 'absolute',
                [isVertical ? 'top' : 'left']: `${thumbPosition * 100}%`,
                transform: 'translate(-50%, -50%)',
                touchAction: 'none'
            }
        },
        labelProps,
        isDragging: state.isThumbDragging(index),
        isDisabled,
        isFocused
    };
}

},{"react-stately/private/utils/number":"aEFFO","../utils/focusWithoutScrolling":"gcZ3w","../utils/shadowdom/DOMFunctions":"8kfpz","./utils":"esFJD","../utils/mergeProps":"jycxS","react":"gOP0N","../interactions/useFocusable":"6IFKj","../utils/useFormReset":"iDQvZ","../utils/useGlobalListeners":"jsdt1","../interactions/useKeyboard":"aHm7i","../label/useLabel":"kMUgu","../i18n/I18nProvider":"czGuc","../interactions/useMove":"iFW04","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fqLVB":[function(require,module,exports,__globalThis) {
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
 * Provides state management for a slider component. Stores values for all thumbs,
 * formats values for localization, and provides methods to update the position
 * of any thumbs.
 *
 * @param props
 */ // oxlint-disable-next-line react/react-compiler
parcelHelpers.export(exports, "useSliderState", ()=>useSliderState);
var _number = require("../utils/number");
var _react = require("react");
var _useControlledState = require("../utils/useControlledState");
const DEFAULT_MIN_VALUE = 0;
const DEFAULT_MAX_VALUE = 100;
const DEFAULT_STEP_VALUE = 1;
function useSliderState(props) {
    const { isDisabled = false, minValue = DEFAULT_MIN_VALUE, maxValue = DEFAULT_MAX_VALUE, numberFormatter: formatter, step = DEFAULT_STEP_VALUE, orientation = 'horizontal' } = props;
    // Page step should be at least equal to step and always a multiple of the step.
    let pageSize = (0, _react.useMemo)(()=>{
        let calcPageSize = (maxValue - minValue) / 10;
        calcPageSize = (0, _number.snapValueToStep)(calcPageSize, 0, calcPageSize + step, step);
        return Math.max(calcPageSize, step);
    }, [
        step,
        maxValue,
        minValue
    ]);
    let restrictValues = (0, _react.useCallback)((values)=>values?.map((val, idx)=>{
            let min = idx === 0 ? minValue : values[idx - 1];
            let max = idx === values.length - 1 ? maxValue : values[idx + 1];
            return (0, _number.snapValueToStep)(val, min, max, step);
        }), [
        minValue,
        maxValue,
        step
    ]);
    let value = (0, _react.useMemo)(()=>restrictValues(convertValue(props.value)), [
        props.value,
        restrictValues
    ]);
    let defaultValue = (0, _react.useMemo)(()=>restrictValues(convertValue(props.defaultValue) ?? [
            minValue
        ]), [
        props.defaultValue,
        minValue,
        restrictValues
    ]);
    let onChange = createOnChange(props.value, props.defaultValue, props.onChange);
    let onChangeEnd = createOnChange(props.value, props.defaultValue, props.onChangeEnd);
    const [values, setValuesState] = (0, _useControlledState.useControlledState)(value, defaultValue, onChange);
    let [initialValues] = (0, _react.useState)(values);
    const [isDraggings, setDraggingsState] = (0, _react.useState)(new Array(values.length).fill(false));
    const isEditablesRef = (0, _react.useRef)(new Array(values.length).fill(true));
    const [focusedIndex, setFocusedIndex] = (0, _react.useState)(undefined);
    const valuesRef = (0, _react.useRef)(values);
    const isDraggingsRef = (0, _react.useRef)(isDraggings);
    let setValues = (values)=>{
        valuesRef.current = values;
        setValuesState(values);
    };
    let setDraggings = (draggings)=>{
        isDraggingsRef.current = draggings;
        setDraggingsState(draggings);
    };
    function getValuePercent(value) {
        return (value - minValue) / (maxValue - minValue);
    }
    function getThumbMinValue(index) {
        return index === 0 ? minValue : values[index - 1];
    }
    function getThumbMaxValue(index) {
        return index === values.length - 1 ? maxValue : values[index + 1];
    }
    function isThumbEditable(index) {
        return isEditablesRef.current[index];
    }
    function setThumbEditable(index, editable) {
        isEditablesRef.current[index] = editable;
    }
    function updateValue(index, value) {
        if (isDisabled || !isThumbEditable(index)) return;
        const thisMin = getThumbMinValue(index);
        const thisMax = getThumbMaxValue(index);
        // Round value to multiple of step, clamp value between min and max
        value = (0, _number.snapValueToStep)(value, thisMin, thisMax, step);
        let newValues = replaceIndex(valuesRef.current, index, value);
        setValues(newValues);
    }
    function updateDragging(index, dragging) {
        if (isDisabled || !isThumbEditable(index)) return;
        if (dragging) valuesRef.current = values;
        const wasDragging = isDraggingsRef.current[index];
        isDraggingsRef.current = replaceIndex(isDraggingsRef.current, index, dragging);
        setDraggings(isDraggingsRef.current);
        // Call onChangeEnd if no handles are dragging.
        if (onChangeEnd && wasDragging && !isDraggingsRef.current.some(Boolean)) onChangeEnd(valuesRef.current);
    }
    let listFormatRef = (0, _react.useRef)(null);
    function getFormattedValue(valueParam = values) {
        if (typeof valueParam === 'number') valueParam = [
            valueParam
        ];
        switch(valueParam.length){
            case 0:
                return '';
            case 1:
                return formatter.format(valueParam[0]);
            case 2:
                return formatter.formatRange(valueParam[0], valueParam[1]);
            default:
                {
                    let formatted = valueParam.map((value)=>formatter.format(value));
                    let listFormat = listFormatRef.current;
                    if (!listFormat || listFormat.resolvedOptions().locale !== formatter.resolvedOptions().locale) listFormat = listFormatRef.current = new Intl.ListFormat(formatter.resolvedOptions().locale, {
                        type: 'unit'
                    });
                    return listFormat.format(formatted);
                }
        }
    }
    function setThumbPercent(index, percent) {
        updateValue(index, getPercentValue(percent));
    }
    function getRoundedValue(value) {
        return Math.round((value - minValue) / step) * step + minValue;
    }
    function getPercentValue(percent) {
        const val = percent * (maxValue - minValue) + minValue;
        return (0, _number.clamp)(getRoundedValue(val), minValue, maxValue);
    }
    function incrementThumb(index, stepSize = 1) {
        let s = Math.max(stepSize, step);
        updateValue(index, (0, _number.snapValueToStep)(values[index] + s, minValue, maxValue, step));
    }
    function decrementThumb(index, stepSize = 1) {
        let s = Math.max(stepSize, step);
        updateValue(index, (0, _number.snapValueToStep)(values[index] - s, minValue, maxValue, step));
    }
    return {
        values: values,
        defaultValues: props.defaultValue !== undefined ? defaultValue : initialValues,
        getThumbValue: (index)=>values[index],
        setThumbValue: updateValue,
        setThumbPercent,
        isThumbDragging: (index)=>isDraggings[index],
        setThumbDragging: updateDragging,
        focusedThumb: focusedIndex,
        setFocusedThumb: setFocusedIndex,
        getThumbPercent: (index)=>getValuePercent(values[index]),
        getValuePercent,
        getThumbValueLabel: (index)=>getFormattedValue(values[index]),
        getFormattedValue,
        getThumbMinValue,
        getThumbMaxValue,
        getPercentValue,
        isThumbEditable,
        setThumbEditable,
        incrementThumb,
        decrementThumb,
        step,
        pageSize,
        orientation,
        isDisabled
    };
}
function replaceIndex(array, index, value) {
    if (array[index] === value) return array;
    return [
        ...array.slice(0, index),
        value,
        ...array.slice(index + 1)
    ];
}
function convertValue(value) {
    if (value == null) return undefined;
    return Array.isArray(value) ? value : [
        value
    ];
}
function createOnChange(value, defaultValue, onChange) {
    return (newValue)=>{
        if (typeof value === 'number' || typeof defaultValue === 'number') onChange?.(newValue[0]);
        else onChange?.(newValue);
    };
}

},{"../utils/number":"aEFFO","react":"gOP0N","../utils/useControlledState":"8yNBD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

