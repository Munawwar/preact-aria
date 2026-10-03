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
})({"40B5D":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a color area component. Color area
 * allows users to adjust two channels of an RGB, HSL or HSB color value against a two-dimensional
 * gradient background.
 */ parcelHelpers.export(exports, "useColorArea", ()=>useColorArea);
var _focusWithoutScrolling = require("../utils/focusWithoutScrolling");
var _indexJs = require("../../intl/color/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _platform = require("../utils/platform");
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _useColorAreaGradient = require("./useColorAreaGradient");
var _useFocus = require("../interactions/useFocus");
var _useFocusWithin = require("../interactions/useFocusWithin");
var _useFormReset = require("../utils/useFormReset");
var _useGlobalListeners = require("../utils/useGlobalListeners");
var _useKeyboard = require("../interactions/useKeyboard");
var _useLabels = require("../utils/useLabels");
var _i18Nprovider = require("../i18n/I18nProvider");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
var _useMove = require("../interactions/useMove");
var _visuallyHidden = require("../visually-hidden/VisuallyHidden");
function useColorArea(props, state) {
    let { isDisabled, inputXRef, inputYRef, containerRef, 'aria-label': ariaLabel, xName, yName, form } = props;
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/color');
    let { addGlobalListener, removeGlobalListener } = (0, _useGlobalListeners.useGlobalListeners)();
    let { direction, locale } = (0, _i18Nprovider.useLocale)();
    let [focusedInput, setFocusedInput] = (0, _react.useState)(null);
    let focusInput = (0, _react.useCallback)((inputRef = inputXRef)=>{
        if (inputRef.current) (0, _focusWithoutScrolling.focusWithoutScrolling)(inputRef.current);
    }, [
        inputXRef
    ]);
    (0, _useFormReset.useFormReset)(inputXRef, state.defaultValue, state.setValue);
    let [valueChangedViaKeyboard, setValueChangedViaKeyboard] = (0, _react.useState)(false);
    let [valueChangedViaInputChangeEvent, setValueChangedViaInputChangeEvent] = (0, _react.useState)(false);
    let { xChannel, yChannel, zChannel } = state.channels;
    let xChannelStep = state.xChannelStep;
    let yChannelStep = state.yChannelStep;
    let currentPosition = (0, _react.useRef)(null);
    let keyboardUpdate = (cb, inputRef, input)=>{
        state.setDragging(true);
        setValueChangedViaKeyboard(true);
        cb();
        state.setDragging(false);
        focusInput(inputRef);
        setFocusedInput(input);
    };
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            PageUp: ()=>{
                return keyboardUpdate(()=>{
                    state.incrementY(state.yChannelPageStep);
                }, inputYRef, 'y');
            },
            PageDown: ()=>{
                return keyboardUpdate(()=>{
                    state.decrementY(state.yChannelPageStep);
                }, inputYRef, 'y');
            },
            Home: ()=>{
                return keyboardUpdate(()=>{
                    direction === 'rtl' ? state.incrementX(state.xChannelPageStep) : state.decrementX(state.xChannelPageStep);
                }, inputXRef, 'x');
            },
            End: ()=>{
                return keyboardUpdate(()=>{
                    direction === 'rtl' ? state.decrementX(state.xChannelPageStep) : state.incrementX(state.xChannelPageStep);
                }, inputXRef, 'x');
            }
        },
        allowRepeats: true
    });
    let moveHandler = {
        onMoveStart () {
            currentPosition.current = null;
            state.setDragging(true);
        },
        onMove ({ deltaX, deltaY, pointerType, shiftKey }) {
            let { incrementX, decrementX, incrementY, decrementY, xChannelPageStep, xChannelStep, yChannelPageStep, yChannelStep, getThumbPosition, setColorFromPoint } = state;
            if (currentPosition.current == null) currentPosition.current = getThumbPosition();
            let { width, height } = containerRef.current?.getBoundingClientRect() || {
                width: 0,
                height: 0
            };
            let valueChanged = deltaX !== 0 || deltaY !== 0;
            if (pointerType === 'keyboard') {
                let deltaXValue = shiftKey && xChannelPageStep > xChannelStep ? xChannelPageStep : xChannelStep;
                let deltaYValue = shiftKey && yChannelPageStep > yChannelStep ? yChannelPageStep : yChannelStep;
                if (deltaX > 0 && direction === 'ltr' || deltaX < 0 && direction === 'rtl') incrementX(deltaXValue);
                else if (deltaX < 0 && direction === 'ltr' || deltaX > 0 && direction === 'rtl') decrementX(deltaXValue);
                else if (deltaY > 0) decrementY(deltaYValue);
                else if (deltaY < 0) incrementY(deltaYValue);
                setValueChangedViaKeyboard(valueChanged);
                // set the focused input based on which axis has the greater delta
                // oxlint-disable-next-line react/react-compiler
                focusedInput = valueChanged && Math.abs(deltaY) > Math.abs(deltaX) ? 'y' : 'x';
                setFocusedInput(focusedInput);
            } else {
                currentPosition.current.x += (direction === 'rtl' ? -1 : 1) * deltaX / width;
                currentPosition.current.y += deltaY / height;
                setColorFromPoint(currentPosition.current.x, currentPosition.current.y);
            }
        },
        onMoveEnd () {
            isOnColorArea.current = false;
            state.setDragging(false);
            let input = focusedInput === 'x' ? inputXRef : inputYRef;
            focusInput(input);
        }
    };
    let { moveProps: movePropsThumb } = (0, _useMove.useMove)(moveHandler);
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)({
        onFocusWithinChange: (focusWithin)=>{
            if (!focusWithin) {
                setValueChangedViaKeyboard(false);
                setValueChangedViaInputChangeEvent(false);
            }
        }
    });
    let currentPointer = (0, _react.useRef)(undefined);
    let isOnColorArea = (0, _react.useRef)(false);
    let { moveProps: movePropsContainer } = (0, _useMove.useMove)({
        onMoveStart () {
            if (isOnColorArea.current) moveHandler.onMoveStart();
        },
        onMove (e) {
            if (isOnColorArea.current) moveHandler.onMove(e);
        },
        onMoveEnd () {
            if (isOnColorArea.current) moveHandler.onMoveEnd();
        }
    });
    let onThumbDown = (id)=>{
        if (!state.isDragging) {
            currentPointer.current = id;
            setValueChangedViaKeyboard(false);
            focusInput();
            state.setDragging(true);
            if (typeof PointerEvent !== 'undefined') addGlobalListener(window, 'pointerup', onThumbUp, false);
            else {
                addGlobalListener(window, 'mouseup', onThumbUp, false);
                addGlobalListener(window, 'touchend', onThumbUp, false);
            }
        }
    };
    let onThumbUp = (e)=>{
        let id = e.pointerId ?? e.changedTouches?.[0].identifier;
        if (id === currentPointer.current) {
            setValueChangedViaKeyboard(false);
            focusInput();
            state.setDragging(false);
            currentPointer.current = undefined;
            isOnColorArea.current = false;
            if (typeof PointerEvent !== 'undefined') removeGlobalListener(window, 'pointerup', onThumbUp, false);
            else {
                removeGlobalListener(window, 'mouseup', onThumbUp, false);
                removeGlobalListener(window, 'touchend', onThumbUp, false);
            }
        }
    };
    let onColorAreaDown = (colorArea, id, clientX, clientY)=>{
        let rect = colorArea.getBoundingClientRect();
        let { width, height } = rect;
        let x = (clientX - rect.x) / width;
        let y = (clientY - rect.y) / height;
        if (direction === 'rtl') x = 1 - x;
        if (x >= 0 && x <= 1 && y >= 0 && y <= 1 && !state.isDragging && currentPointer.current === undefined) {
            isOnColorArea.current = true;
            setValueChangedViaKeyboard(false);
            currentPointer.current = id;
            state.setColorFromPoint(x, y);
            focusInput();
            state.setDragging(true);
            if (typeof PointerEvent !== 'undefined') addGlobalListener(window, 'pointerup', onColorAreaUp, false);
            else {
                addGlobalListener(window, 'mouseup', onColorAreaUp, false);
                addGlobalListener(window, 'touchend', onColorAreaUp, false);
            }
        }
    };
    let onColorAreaUp = (e)=>{
        let id = e.pointerId ?? e.changedTouches?.[0].identifier;
        if (isOnColorArea.current && id === currentPointer.current) {
            isOnColorArea.current = false;
            setValueChangedViaKeyboard(false);
            currentPointer.current = undefined;
            state.setDragging(false);
            focusInput();
            if (typeof PointerEvent !== 'undefined') removeGlobalListener(window, 'pointerup', onColorAreaUp, false);
            else {
                removeGlobalListener(window, 'mouseup', onColorAreaUp, false);
                removeGlobalListener(window, 'touchend', onColorAreaUp, false);
            }
        }
    };
    let colorAreaInteractions = isDisabled ? {} : (0, _mergeProps.mergeProps)(// oxlint-disable-next-line react/react-compiler
    {
        ...typeof PointerEvent !== 'undefined' ? {
            onPointerDown: (e)=>{
                if (e.pointerType === 'mouse' && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey)) return;
                onColorAreaDown(e.currentTarget, e.pointerId, e.clientX, e.clientY);
            }
        } : {
            onMouseDown: (e)=>{
                if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
                onColorAreaDown(e.currentTarget, undefined, e.clientX, e.clientY);
            },
            onTouchStart: (e)=>{
                onColorAreaDown(e.currentTarget, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
            }
        }
    }, movePropsContainer);
    let thumbInteractions = isDisabled ? {} : (0, _mergeProps.mergeProps)(// oxlint-disable-next-line react/react-compiler
    {
        ...typeof PointerEvent !== 'undefined' ? {
            onPointerDown: (e)=>{
                if (e.pointerType === 'mouse' && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey)) return;
                onThumbDown(e.pointerId);
            }
        } : {
            onMouseDown: (e)=>{
                if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
                onThumbDown(undefined);
            },
            onTouchStart: (e)=>{
                onThumbDown(e.changedTouches[0].identifier);
            }
        }
    }, focusWithinProps, keyboardProps, movePropsThumb);
    let { focusProps: xInputFocusProps } = (0, _useFocus.useFocus)({
        onFocus: ()=>{
            setFocusedInput('x');
        }
    });
    let { focusProps: yInputFocusProps } = (0, _useFocus.useFocus)({
        onFocus: ()=>{
            setFocusedInput('y');
        }
    });
    const onChange = (e)=>{
        const { target } = e;
        setValueChangedViaInputChangeEvent(true);
        if (target === inputXRef.current) state.setXValue(parseFloat(target.value));
        else if (target === inputYRef.current) state.setYValue(parseFloat(target.value));
    };
    let isMobile = (0, _platform.isIOS)() || (0, _platform.isAndroid)();
    let value = state.getDisplayColor();
    const getAriaValueTextForChannel = (0, _react.useCallback)((channel)=>{
        const isAfterInput = valueChangedViaInputChangeEvent || valueChangedViaKeyboard;
        return `${isAfterInput ? stringFormatter.format('colorNameAndValue', {
            name: value.getChannelName(channel, locale),
            value: value.formatChannelValue(channel, locale)
        }) : [
            stringFormatter.format('colorNameAndValue', {
                name: value.getChannelName(channel, locale),
                value: value.formatChannelValue(channel, locale)
            }),
            stringFormatter.format('colorNameAndValue', {
                name: value.getChannelName(channel === yChannel ? xChannel : yChannel, locale),
                value: value.formatChannelValue(channel === yChannel ? xChannel : yChannel, locale)
            }),
            stringFormatter.format('colorNameAndValue', {
                name: value.getChannelName(zChannel, locale),
                value: value.formatChannelValue(zChannel, locale)
            })
        ].join(', ')}, ${value.getColorName(locale)}`;
    }, [
        locale,
        value,
        stringFormatter,
        valueChangedViaInputChangeEvent,
        valueChangedViaKeyboard,
        xChannel,
        yChannel,
        zChannel
    ]);
    let colorPickerLabel = stringFormatter.format('colorPicker');
    let xInputLabellingProps = (0, _useLabels.useLabels)({
        ...props,
        'aria-label': ariaLabel ? stringFormatter.format('colorInputLabel', {
            label: ariaLabel,
            channelLabel: colorPickerLabel
        }) : colorPickerLabel
    });
    let yInputLabellingProps = (0, _useLabels.useLabels)({
        ...props,
        'aria-label': ariaLabel ? stringFormatter.format('colorInputLabel', {
            label: ariaLabel,
            channelLabel: colorPickerLabel
        }) : colorPickerLabel
    });
    let colorAreaLabellingProps = (0, _useLabels.useLabels)({
        ...props,
        'aria-label': ariaLabel ? `${ariaLabel}, ${colorPickerLabel}` : undefined
    }, isMobile ? colorPickerLabel : undefined);
    let ariaRoleDescription = stringFormatter.format('twoDimensionalSlider');
    let { visuallyHiddenProps } = (0, _visuallyHidden.useVisuallyHidden)({
        style: {
            opacity: '0.0001',
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
        }
    });
    let { colorAreaStyleProps, thumbStyleProps } = (0, _useColorAreaGradient.useColorAreaGradient)({
        direction,
        state,
        xChannel,
        yChannel,
        zChannel
    });
    return {
        colorAreaProps: {
            ...colorAreaLabellingProps,
            ...colorAreaInteractions,
            ...colorAreaStyleProps,
            role: 'group'
        },
        thumbProps: {
            ...thumbInteractions,
            ...thumbStyleProps,
            role: 'presentation'
        },
        xInputProps: {
            ...xInputLabellingProps,
            ...visuallyHiddenProps,
            ...xInputFocusProps,
            type: 'range',
            min: state.value.getChannelRange(xChannel).minValue,
            max: state.value.getChannelRange(xChannel).maxValue,
            step: xChannelStep,
            'aria-roledescription': ariaRoleDescription,
            'aria-valuetext': getAriaValueTextForChannel(xChannel),
            'aria-orientation': 'horizontal',
            'aria-describedby': props['aria-describedby'],
            'aria-details': props['aria-details'],
            disabled: isDisabled,
            value: state.value.getChannelValue(xChannel),
            name: xName,
            form,
            tabIndex: isMobile || !focusedInput || focusedInput === 'x' ? undefined : -1,
            /*
        So that only a single "2d slider" control shows up when listing form elements for screen readers,
        add aria-hidden="true" to the unfocused control when the value has not changed via the keyboard,
        but remove aria-hidden to reveal the input for each channel when the value has changed with the keyboard.
      */ 'aria-hidden': isMobile || !focusedInput || focusedInput === 'x' || valueChangedViaKeyboard ? undefined : 'true',
            onChange
        },
        yInputProps: {
            ...yInputLabellingProps,
            ...visuallyHiddenProps,
            ...yInputFocusProps,
            type: 'range',
            min: state.value.getChannelRange(yChannel).minValue,
            max: state.value.getChannelRange(yChannel).maxValue,
            step: yChannelStep,
            'aria-roledescription': ariaRoleDescription,
            'aria-valuetext': getAriaValueTextForChannel(yChannel),
            'aria-orientation': 'vertical',
            'aria-describedby': props['aria-describedby'],
            'aria-details': props['aria-details'],
            disabled: isDisabled,
            value: state.value.getChannelValue(yChannel),
            name: yName,
            form,
            tabIndex: isMobile || focusedInput === 'y' ? undefined : -1,
            /*
        So that only a single "2d slider" control shows up when listing form elements for screen readers,
        add aria-hidden="true" to the unfocused input when the value has not changed via the keyboard,
        but remove aria-hidden to reveal the input for each channel when the value has changed with the keyboard.
      */ 'aria-hidden': isMobile || focusedInput === 'y' || valueChangedViaKeyboard ? undefined : 'true',
            onChange
        }
    };
}

},{"../utils/focusWithoutScrolling":"gcZ3w","../../intl/color/index.js":"2fq3u","../utils/platform":"eBqgD","../utils/mergeProps":"jycxS","react":"gOP0N","./useColorAreaGradient":"788I1","../interactions/useFocus":"9bXTE","../interactions/useFocusWithin":"bkSQo","../utils/useFormReset":"iDQvZ","../utils/useGlobalListeners":"jsdt1","../interactions/useKeyboard":"aHm7i","../utils/useLabels":"8ZwLJ","../i18n/I18nProvider":"czGuc","../i18n/useLocalizedStringFormatter":"8lll3","../interactions/useMove":"iFW04","../visually-hidden/VisuallyHidden":"cMf28","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"788I1":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useColorAreaGradient", ()=>useColorAreaGradient);
var _react = require("react");
var _color = require("react-stately/Color");
const hue = (color)=>[
        0,
        60,
        120,
        180,
        240,
        300,
        360
    ].map((hue)=>color.withChannelValue('hue', hue).toString('css')).join(', ');
const saturation = (color)=>`${color.withChannelValue('saturation', 0)}, transparent`;
const hslChannels = {
    hue,
    saturation,
    lightness: ()=>'black, transparent, white'
};
const hsbChannels = {
    hue,
    saturation,
    brightness: ()=>'black, transparent'
};
function useColorAreaGradient({ direction, state, zChannel, xChannel, yChannel }) {
    let returnVal = (0, _react.useMemo)(()=>{
        let end = direction === 'rtl' ? 'left' : 'right';
        let colorAreaStyles = {};
        let zValue = state.value.getChannelValue(zChannel);
        switch(state.value.getColorSpace()){
            case 'rgb':
                {
                    let rgb = (0, _color.parseColor)('rgb(0, 0, 0)');
                    colorAreaStyles = {
                        background: [
                            // The screen blend mode multiplies the inverse of each channel, e.g. 1 - (1 - a) * (1 - b).
                            // Create a layer for each channel, with the other channels as 0. After blending, this should
                            // result in the gradients being combined channel by channel.
                            `linear-gradient(to ${end}, ${rgb.withChannelValue(xChannel, 0)}, ${rgb.withChannelValue(xChannel, 255)})`,
                            `linear-gradient(to top, ${rgb.withChannelValue(yChannel, 0)}, ${rgb.withChannelValue(yChannel, 255)})`,
                            rgb.withChannelValue(zChannel, zValue)
                        ].join(','),
                        backgroundBlendMode: 'screen'
                    };
                    break;
                }
            case 'hsl':
                {
                    let channels = state.value.getColorChannels();
                    let value = (0, _color.parseColor)('hsl(0, 100%, 50%)').withChannelValue(zChannel, zValue);
                    let bg = channels.filter((c)=>c !== zChannel).map((c)=>`linear-gradient(to ${c === xChannel ? end : 'top'}, ${hslChannels[c](value)})`).reverse();
                    if (zChannel === 'hue') bg.push(value.toString('css'));
                    colorAreaStyles = {
                        background: bg.join(', ')
                    };
                    break;
                }
            case 'hsb':
                {
                    let channels = state.value.getColorChannels();
                    let value = (0, _color.parseColor)('hsb(0, 100%, 100%)').withChannelValue(zChannel, zValue);
                    let bg = channels.filter((c)=>c !== zChannel).map((c)=>`linear-gradient(to ${c === xChannel ? end : 'top'}, ${hsbChannels[c](value)})`).reverse();
                    if (zChannel === 'hue') bg.push(value.toString('css'));
                    colorAreaStyles = {
                        background: bg.join(', ')
                    };
                    break;
                }
        }
        let { x, y } = state.getThumbPosition();
        if (direction === 'rtl') x = 1 - x;
        let forcedColorAdjustNoneStyle = {
            forcedColorAdjust: 'none'
        };
        return {
            colorAreaStyleProps: {
                style: {
                    position: 'relative',
                    touchAction: 'none',
                    ...forcedColorAdjustNoneStyle,
                    ...colorAreaStyles
                }
            },
            thumbStyleProps: {
                style: {
                    position: 'absolute',
                    left: `${x * 100}%`,
                    top: `${y * 100}%`,
                    transform: 'translate(-50%, -50%)',
                    touchAction: 'none',
                    ...forcedColorAdjustNoneStyle
                }
            }
        };
    }, [
        direction,
        state,
        zChannel,
        xChannel,
        yChannel
    ]);
    return returnVal;
}

},{"react":"gOP0N","react-stately/Color":"6ElIb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5kpo9":[function(require,module,exports,__globalThis) {
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
 * Provides state management for a color area component. Color area allows users to adjust two
 * channels of an HSL, HSB or RGB color value against a two-dimensional gradient background.
 */ parcelHelpers.export(exports, "useColorAreaState", ()=>useColorAreaState);
var _number = require("../utils/number");
var _color = require("./Color");
var _useControlledState = require("../utils/useControlledState");
var _react = require("react");
const DEFAULT_COLOR = (0, _color.parseColor)('#ffffff');
function useColorAreaState(props) {
    let { value, defaultValue, colorSpace, xChannel, yChannel, onChange, onChangeEnd } = props;
    if (!value && !defaultValue) defaultValue = DEFAULT_COLOR;
    if (value) value = (0, _color.normalizeColor)(value);
    if (defaultValue) defaultValue = (0, _color.normalizeColor)(defaultValue);
    // safe to cast value and defaultValue to Color, one of them will always be defined because if neither are, we assign a default
    let [colorValue, setColorState] = (0, _useControlledState.useControlledState)(value, defaultValue, onChange);
    let [initialValue] = (0, _react.useState)(colorValue);
    let color = (0, _react.useMemo)(()=>colorSpace && colorValue ? colorValue.toFormat(colorSpace) : colorValue, [
        colorValue,
        colorSpace
    ]);
    let valueRef = (0, _react.useRef)(color);
    let setColor = (color)=>{
        valueRef.current = color;
        setColorState(color);
    };
    let channels = (0, _react.useMemo)(()=>color.getColorSpaceAxes({
            xChannel,
            yChannel
        }), [
        color,
        xChannel,
        yChannel
    ]);
    let xChannelRange = color.getChannelRange(channels.xChannel);
    let yChannelRange = color.getChannelRange(channels.yChannel);
    let { minValue: minValueX, maxValue: maxValueX, step: stepX, pageSize: pageSizeX } = xChannelRange;
    let { minValue: minValueY, maxValue: maxValueY, step: stepY, pageSize: pageSizeY } = yChannelRange;
    let [isDragging, setDragging] = (0, _react.useState)(false);
    let isDraggingRef = (0, _react.useRef)(false);
    let xValue = color.getChannelValue(channels.xChannel);
    let yValue = color.getChannelValue(channels.yChannel);
    let setXValue = (v)=>{
        if (v === xValue) return;
        let newColor = color.withChannelValue(channels.xChannel, v);
        setColor(newColor);
    };
    let setYValue = (v)=>{
        if (v === yValue) return;
        let newColor = color.withChannelValue(channels.yChannel, v);
        setColor(newColor);
    };
    return {
        channels,
        xChannelStep: stepX,
        yChannelStep: stepY,
        xChannelPageStep: pageSizeX,
        yChannelPageStep: pageSizeY,
        value: color,
        defaultValue: value !== undefined ? initialValue : defaultValue,
        setValue (value) {
            setColor((0, _color.normalizeColor)(value));
        },
        xValue,
        setXValue,
        yValue,
        setYValue,
        setColorFromPoint (x, y) {
            let newXValue = minValueX + (0, _number.clamp)(x, 0, 1) * (maxValueX - minValueX);
            let newYValue = minValueY + (1 - (0, _number.clamp)(y, 0, 1)) * (maxValueY - minValueY);
            let newColor;
            if (newXValue !== xValue) {
                // Round new value to multiple of step, clamp value between min and max
                newXValue = (0, _number.snapValueToStep)(newXValue, minValueX, maxValueX, stepX);
                newColor = color.withChannelValue(channels.xChannel, newXValue);
            }
            if (newYValue !== yValue) {
                // Round new value to multiple of step, clamp value between min and max
                newYValue = (0, _number.snapValueToStep)(newYValue, minValueY, maxValueY, stepY);
                newColor = (newColor || color).withChannelValue(channels.yChannel, newYValue);
            }
            if (newColor) setColor(newColor);
        },
        getThumbPosition () {
            let x = (xValue - minValueX) / (maxValueX - minValueX);
            let y = 1 - (yValue - minValueY) / (maxValueY - minValueY);
            return {
                x,
                y
            };
        },
        incrementX (stepSize = 1) {
            setXValue(xValue + stepSize > maxValueX ? maxValueX : (0, _number.snapValueToStep)(xValue + stepSize, minValueX, maxValueX, stepX));
        },
        incrementY (stepSize = 1) {
            setYValue(yValue + stepSize > maxValueY ? maxValueY : (0, _number.snapValueToStep)(yValue + stepSize, minValueY, maxValueY, stepY));
        },
        decrementX (stepSize = 1) {
            setXValue((0, _number.snapValueToStep)(xValue - stepSize, minValueX, maxValueX, stepX));
        },
        decrementY (stepSize = 1) {
            setYValue((0, _number.snapValueToStep)(yValue - stepSize, minValueY, maxValueY, stepY));
        },
        setDragging (isDragging) {
            let wasDragging = isDraggingRef.current;
            isDraggingRef.current = isDragging;
            if (onChangeEnd && !isDragging && wasDragging) onChangeEnd(valueRef.current);
            setDragging(isDragging);
        },
        isDragging,
        getDisplayColor () {
            return color.withChannelValue('alpha', 1);
        }
    };
}

},{"../utils/number":"aEFFO","./Color":"6ElIb","../utils/useControlledState":"8yNBD","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

