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
})({"gIefC":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a number field component. Number
 * fields allow users to enter a number, and increment or decrement the value using stepper
 * buttons.
 */ parcelHelpers.export(exports, "useNumberField", ()=>useNumberField);
var _liveAnnouncer = require("../live-announcer/LiveAnnouncer");
var _react = require("react");
var _filterDOMProps = require("../utils/filterDOMProps");
var _reactDom = require("react-dom");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _indexJs = require("../../intl/numberfield/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _platform = require("../utils/platform");
var _mergeProps = require("../utils/mergeProps");
var _useFormValidationState = require("react-stately/private/form/useFormValidationState");
var _useFocus = require("../interactions/useFocus");
var _useFocusWithin = require("../interactions/useFocusWithin");
var _useFormattedTextField = require("../textfield/useFormattedTextField");
var _useFormReset = require("../utils/useFormReset");
var _useId = require("../utils/useId");
var _useKeyboard = require("../interactions/useKeyboard");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
var _useNumberFormatter = require("../i18n/useNumberFormatter");
var _useScrollWheel = require("../interactions/useScrollWheel");
var _useSpinButton = require("../spinbutton/useSpinButton");
function useNumberField(props, state, inputRef) {
    let { id, decrementAriaLabel, incrementAriaLabel, isDisabled, isReadOnly, isRequired, minValue, maxValue, autoFocus, label, formatOptions, onBlur = ()=>{}, onFocus, onFocusChange, onKeyDown, onKeyUp, description, errorMessage, isWheelDisabled, ...otherProps } = props;
    let { increment, incrementToMax, decrement, decrementToMin, numberValue, inputValue, commit, commitValidation } = state;
    const stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/numberfield');
    let commitAndAnnounce = (0, _react.useCallback)(()=>{
        let oldValue = inputRef.current?.value ?? '';
        // Set input value to normalized valid value
        (0, _reactDom.flushSync)(()=>{
            commit();
        });
        if (inputRef.current?.value !== oldValue) (0, _liveAnnouncer.announce)(inputRef.current?.value ?? '', 'assertive');
    }, [
        commit,
        inputRef
    ]);
    let inputId = (0, _useId.useId)(id);
    let { focusProps } = (0, _useFocus.useFocus)({
        onBlur () {
            commitAndAnnounce();
        }
    });
    let numberFormatter = (0, _useNumberFormatter.useNumberFormatter)(formatOptions);
    let intlOptions = (0, _react.useMemo)(()=>numberFormatter.resolvedOptions(), [
        numberFormatter
    ]);
    // Replace negative textValue formatted using currencySign: 'accounting'
    // with a textValue that can be announced using a minus sign.
    let textValueFormatter = (0, _useNumberFormatter.useNumberFormatter)({
        ...formatOptions,
        currencySign: undefined
    });
    let textValue = (0, _react.useMemo)(()=>isNaN(numberValue) ? '' : textValueFormatter.format(numberValue), [
        textValueFormatter,
        numberValue
    ]);
    let { spinButtonProps, incrementButtonProps: incButtonProps, decrementButtonProps: decButtonProps } = (0, _useSpinButton.useSpinButton)({
        isDisabled,
        isReadOnly,
        isRequired,
        maxValue,
        minValue,
        onIncrement: increment,
        onIncrementToMax: incrementToMax,
        onDecrement: decrement,
        onDecrementToMin: decrementToMin,
        value: numberValue,
        textValue
    });
    let [focusWithin, setFocusWithin] = (0, _react.useState)(false);
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)({
        isDisabled,
        onFocusWithinChange: setFocusWithin
    });
    let onWheel = (0, _react.useCallback)((e)=>{
        // if on a trackpad, users can scroll in both X and Y at once, check the magnitude of the change
        // if it's mostly in the X direction, then just return, the user probably doesn't mean to inc/dec
        // this isn't perfect, events come in fast with small deltas and a part of the scroll may give a false indication
        // especially if the user is scrolling near 45deg
        if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
        if (e.deltaY > 0) increment();
        else if (e.deltaY < 0) decrement();
    }, [
        decrement,
        increment
    ]);
    // If the input isn't supposed to receive input, disable scrolling.
    let scrollingDisabled = isWheelDisabled || isDisabled || isReadOnly || !focusWithin;
    (0, _useScrollWheel.useScrollWheel)({
        onScroll: onWheel,
        isDisabled: scrollingDisabled
    }, inputRef);
    // The inputMode attribute influences the software keyboard that is shown on touch devices.
    // Browsers and operating systems are quite inconsistent about what keys are available, however.
    // We choose between numeric and decimal based on whether we allow negative and fractional numbers,
    // and based on testing on various devices to determine what keys are available in each inputMode.
    let hasDecimals = (intlOptions.maximumFractionDigits ?? 0) > 0;
    let hasNegative = state.minValue === undefined || isNaN(state.minValue) || state.minValue < 0;
    let inputMode = 'numeric';
    if ((0, _platform.isIPhone)()) {
        // iPhone doesn't have a minus sign in either numeric or decimal.
        // Note this is only for iPhone, not iPad, which always has both
        // minus and decimal in numeric.
        if (hasNegative) inputMode = 'text';
        else if (hasDecimals) inputMode = 'decimal';
    } else if ((0, _platform.isAndroid)()) {
        // Android numeric has both a decimal point and minus key.
        // decimal does not have a minus key.
        if (hasNegative) inputMode = 'numeric';
        else if (hasDecimals) inputMode = 'decimal';
    }
    let onChange = (value)=>{
        if (state.validate(value)) state.setInputValue(value);
    };
    let onPaste = (e)=>{
        props.onPaste?.(e);
        let inputElement = (0, _domfunctions.getEventTarget)(e);
        // we can only handle the case where the paste takes over the entire input, otherwise things get very complicated
        // trying to calculate the new string based on what the paste is replacing and where in the source string it is
        if (inputElement && (inputElement.selectionEnd ?? -1) - (inputElement.selectionStart ?? 0) === inputElement.value.length) {
            e.preventDefault();
            // commit so that the user gets to see what it formats to immediately
            // paste happens before inputRef's value is updated, so have to prevent the default and do it ourselves
            // spin button will then handle announcing the new value, this should work with controlled state as well
            // because the announcement is done as a result of the new rendered input value if there is one
            commit(e.clipboardData?.getData?.('text/plain')?.trim() ?? '');
        }
    };
    let domProps = (0, _filterDOMProps.filterDOMProps)(props);
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        isDisabled: isDisabled || isReadOnly,
        shortcuts: {
            Enter: ()=>{
                (0, _reactDom.flushSync)(()=>{
                    commit();
                });
                commitValidation();
                return {
                    shouldPreventDefault: false
                };
            }
        },
        onKeyDown,
        onKeyUp
    });
    let { isInvalid, validationErrors, validationDetails } = state.displayValidation;
    let { labelProps, inputProps: textFieldPropsFromHook, descriptionProps, errorMessageProps } = (0, _useFormattedTextField.useFormattedTextField)({
        ...otherProps,
        ...domProps,
        // These props are added to a hidden input rather than the formatted textfield.
        name: undefined,
        form: undefined,
        label,
        autoFocus,
        isDisabled,
        isReadOnly,
        isRequired,
        validate: undefined,
        [(0, _useFormValidationState.privateValidationStateProp)]: state,
        value: inputValue,
        defaultValue: '!',
        autoComplete: 'off',
        'aria-label': props['aria-label'] || undefined,
        'aria-labelledby': props['aria-labelledby'] || undefined,
        id: inputId,
        type: 'text',
        inputMode,
        onChange,
        onBlur,
        onFocus,
        onFocusChange,
        onPaste,
        description,
        errorMessage
    }, state, inputRef);
    // Merge outside useFormattedTextField so useKeyboard's createEventHandler is not nested inside
    // useTextField/useFocusable's createEventHandler (avoids redundant stopPropagation on RS events).
    // Shortcuts run first (mergeProps chains the second argument after the first).
    let textFieldProps = (0, _mergeProps.mergeProps)(keyboardProps, textFieldPropsFromHook);
    (0, _useFormReset.useFormReset)(inputRef, state.defaultNumberValue, state.setNumberValue);
    useNativeValidation(state, props.validationBehavior, props.commitBehavior, inputRef, state.minValue, state.maxValue, props.step, state.numberValue);
    let inputProps = (0, _mergeProps.mergeProps)(spinButtonProps, focusProps, textFieldProps, {
        // override the spinbutton role, we can't focus a spin button with VO
        role: null,
        // ignore aria-roledescription on iOS so that required state will announce when it is present
        'aria-roledescription': !(0, _platform.isIOS)() ? stringFormatter.format('numberField') : null,
        'aria-valuemax': null,
        'aria-valuemin': null,
        'aria-valuenow': null,
        'aria-valuetext': null,
        autoCorrect: 'off',
        spellCheck: 'false'
    });
    if (props.validationBehavior === 'native') inputProps['aria-required'] = undefined;
    let onButtonPressStart = (e)=>{
        // If focus is already on the input, keep it there so we don't hide the
        // software keyboard when tapping the increment/decrement buttons.
        if ((0, _domfunctions.getActiveElement)() === inputRef.current) return;
        // Otherwise, when using a mouse, move focus to the input.
        // On touch, or with a screen reader, focus the button so that the software
        // keyboard does not appear and the screen reader cursor is not moved off the button.
        if (e.pointerType === 'mouse') inputRef.current?.focus();
        else e.target.focus();
    };
    // Determine the label for the increment and decrement buttons. There are 4 cases:
    //
    // 1. With a visible label that is a string: aria-label: `Increase ${props.label}`
    // 2. With a visible label that is JSX: aria-label: 'Increase', aria-labelledby: '${incrementId} ${labelId}'
    // 3. With an aria-label: aria-label: `Increase ${props['aria-label']}`
    // 4. With an aria-labelledby: aria-label: 'Increase', aria-labelledby: `${incrementId} ${props['aria-labelledby']}`
    //
    // (1) and (2) could possibly be combined and both use aria-labelledby. However, placing the label in
    // the aria-label string rather than using aria-labelledby gives more flexibility to translators to change
    // the order or add additional words around the label if needed.
    let fieldLabel = props['aria-label'] || (typeof props.label === 'string' ? props.label : '');
    let ariaLabelledby;
    if (!fieldLabel) ariaLabelledby = props.label != null ? labelProps.id : props['aria-labelledby'];
    let incrementId = (0, _useId.useId)();
    let decrementId = (0, _useId.useId)();
    // oxlint-disable-next-line react/react-compiler
    let incrementButtonProps = (0, _mergeProps.mergeProps)(incButtonProps, {
        'aria-label': incrementAriaLabel || stringFormatter.format('increase', {
            fieldLabel
        }).trim(),
        id: ariaLabelledby && !incrementAriaLabel ? incrementId : null,
        'aria-labelledby': ariaLabelledby && !incrementAriaLabel ? `${incrementId} ${ariaLabelledby}` : null,
        'aria-controls': inputId,
        excludeFromTabOrder: true,
        preventFocusOnPress: true,
        allowFocusWhenDisabled: true,
        isDisabled: !state.canIncrement,
        onPressStart: onButtonPressStart
    });
    // oxlint-disable-next-line react/react-compiler
    let decrementButtonProps = (0, _mergeProps.mergeProps)(decButtonProps, {
        'aria-label': decrementAriaLabel || stringFormatter.format('decrease', {
            fieldLabel
        }).trim(),
        id: ariaLabelledby && !decrementAriaLabel ? decrementId : null,
        'aria-labelledby': ariaLabelledby && !decrementAriaLabel ? `${decrementId} ${ariaLabelledby}` : null,
        'aria-controls': inputId,
        excludeFromTabOrder: true,
        preventFocusOnPress: true,
        allowFocusWhenDisabled: true,
        isDisabled: !state.canDecrement,
        onPressStart: onButtonPressStart
    });
    return {
        groupProps: {
            ...focusWithinProps,
            role: 'group',
            'aria-disabled': isDisabled,
            'aria-invalid': isInvalid ? 'true' : undefined
        },
        labelProps,
        inputProps,
        incrementButtonProps,
        decrementButtonProps,
        errorMessageProps,
        descriptionProps,
        isInvalid,
        validationErrors,
        validationDetails
    };
}
let numberInput = null;
function useNativeValidation(state, validationBehavior, commitBehavior, inputRef, min, max, step, value) {
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        let input = inputRef.current;
        if (commitBehavior !== 'validate' || state.realtimeValidation.isInvalid || !input || input.disabled) return;
        // Create a native number input and use it to implement validation of min/max/step.
        // This lets us get the native validation message provided by the browser instead of needing our own translations.
        if (!numberInput && typeof document !== 'undefined') {
            numberInput = document.createElement('input');
            numberInput.type = 'number';
        }
        if (!numberInput) // For TypeScript.
        return;
        numberInput.min = min != null && !isNaN(min) ? String(min) : '';
        numberInput.max = max != null && !isNaN(max) ? String(max) : '';
        numberInput.step = step != null && !isNaN(step) ? String(step) : '';
        numberInput.value = value != null && !isNaN(value) ? String(value) : '';
        // Merge validity with the visible text input (for other validations like required).
        let valid = input.validity.valid && numberInput.validity.valid;
        let validationMessage = input.validationMessage || numberInput.validationMessage;
        let validity = {
            isInvalid: !valid,
            validationErrors: validationMessage ? [
                validationMessage
            ] : [],
            validationDetails: {
                badInput: input.validity.badInput,
                customError: input.validity.customError,
                patternMismatch: input.validity.patternMismatch,
                rangeOverflow: numberInput.validity.rangeOverflow,
                rangeUnderflow: numberInput.validity.rangeUnderflow,
                stepMismatch: numberInput.validity.stepMismatch,
                tooLong: input.validity.tooLong,
                tooShort: input.validity.tooShort,
                typeMismatch: input.validity.typeMismatch,
                valueMissing: input.validity.valueMissing,
                valid
            }
        };
        state.updateValidation(validity);
        // Block form submission if validation behavior is native.
        // This won't overwrite any user-defined validation message because we checked realtimeValidation above.
        if (validationBehavior === 'native' && !numberInput.validity.valid) input.setCustomValidity(numberInput.validationMessage);
    });
}

},{"../live-announcer/LiveAnnouncer":"gQ2k2","react":"gOP0N","../utils/filterDOMProps":"h4XHF","react-dom":"gOP0N","../utils/shadowdom/DOMFunctions":"8kfpz","../../intl/numberfield/index.js":"33nnB","../utils/platform":"eBqgD","../utils/mergeProps":"jycxS","react-stately/private/form/useFormValidationState":"491YW","../interactions/useFocus":"9bXTE","../interactions/useFocusWithin":"bkSQo","../textfield/useFormattedTextField":"cXIOE","../utils/useFormReset":"iDQvZ","../utils/useId":"fQAcb","../interactions/useKeyboard":"aHm7i","../utils/useLayoutEffect":"h7M6K","../i18n/useLocalizedStringFormatter":"8lll3","../i18n/useNumberFormatter":"5T1hV","../interactions/useScrollWheel":"DgAdc","../spinbutton/useSpinButton":"3nh3N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"33nnB":[function(require,module,exports,__globalThis) {
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

},{"./ar-AE.js":"duwTk","./bg-BG.js":"8na4m","./cs-CZ.js":"kRJXn","./da-DK.js":"3yLrR","./de-DE.js":"cejmY","./el-GR.js":"04vIH","./en-US.js":"gHjbn","./es-ES.js":"32iry","./et-EE.js":"41bIz","./fi-FI.js":"6JR3l","./fr-FR.js":"4zZNl","./he-IL.js":"hXxuD","./hr-HR.js":"a0WjR","./hu-HU.js":"5oX4X","./it-IT.js":"eiKCD","./ja-JP.js":"eibHd","./ko-KR.js":"1XxhQ","./lt-LT.js":"ffoqT","./lv-LV.js":"6J0gp","./nb-NO.js":"ieueD","./nl-NL.js":"aQTJ5","./pl-PL.js":"ij1qy","./pt-BR.js":"9CGuG","./pt-PT.js":"e9ovz","./ro-RO.js":"ij79d","./ru-RU.js":"kyN9d","./sk-SK.js":"Ky22A","./sl-SI.js":"372aH","./sr-SP.js":"d9DiX","./sv-SE.js":"biGWu","./tr-TR.js":"bIfBN","./uk-UA.js":"4lbaf","./zh-CN.js":"caADm","./zh-TW.js":"jb0Nu","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"duwTk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`\u{62E}\u{641}\u{636} ${args.fieldLabel}`,
    "increase": (args)=>`\u{632}\u{64A}\u{627}\u{62F}\u{629} ${args.fieldLabel}`,
    "numberField": `\u{62D}\u{642}\u{644} \u{631}\u{642}\u{645}\u{64A}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8na4m":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`\u{41D}\u{430}\u{43C}\u{430}\u{43B}\u{44F}\u{432}\u{430}\u{43D}\u{435} ${args.fieldLabel}`,
    "increase": (args)=>`\u{423}\u{441}\u{438}\u{43B}\u{432}\u{430}\u{43D}\u{435} ${args.fieldLabel}`,
    "numberField": `\u{41D}\u{43E}\u{43C}\u{435}\u{440} \u{43D}\u{430} \u{43F}\u{43E}\u{43B}\u{435}\u{442}\u{43E}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kRJXn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`Sn\xed\u{17E}it ${args.fieldLabel}`,
    "increase": (args)=>`Zv\xfd\u{161}it ${args.fieldLabel}`,
    "numberField": `\u{10C}\xedseln\xe9 pole`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3yLrR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`Reducer ${args.fieldLabel}`,
    "increase": (args)=>`\xd8g ${args.fieldLabel}`,
    "numberField": `Talfelt`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cejmY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`${args.fieldLabel} verringern`,
    "increase": (args)=>`${args.fieldLabel} erh\xf6hen`,
    "numberField": `Nummernfeld`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"04vIH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`\u{39C}\u{3B5}\u{3AF}\u{3C9}\u{3C3}\u{3B7} ${args.fieldLabel}`,
    "increase": (args)=>`\u{391}\u{3CD}\u{3BE}\u{3B7}\u{3C3}\u{3B7} ${args.fieldLabel}`,
    "numberField": `\u{3A0}\u{3B5}\u{3B4}\u{3AF}\u{3BF} \u{3B1}\u{3C1}\u{3B9}\u{3B8}\u{3BC}\u{3BF}\u{3CD}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gHjbn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`Decrease ${args.fieldLabel}`,
    "increase": (args)=>`Increase ${args.fieldLabel}`,
    "numberField": `Number field`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"32iry":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`Reducir ${args.fieldLabel}`,
    "increase": (args)=>`Aumentar ${args.fieldLabel}`,
    "numberField": `Campo de n\xfamero`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"41bIz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`V\xe4henda ${args.fieldLabel}`,
    "increase": (args)=>`Suurenda ${args.fieldLabel}`,
    "numberField": `Numbri v\xe4li`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6JR3l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`V\xe4henn\xe4 ${args.fieldLabel}`,
    "increase": (args)=>`Lis\xe4\xe4 ${args.fieldLabel}`,
    "numberField": `Numerokentt\xe4`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4zZNl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`Diminuer ${args.fieldLabel}`,
    "increase": (args)=>`Augmenter ${args.fieldLabel}`,
    "numberField": `Champ de nombre`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hXxuD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`\u{5D4}\u{5E7}\u{5D8}\u{5DF} ${args.fieldLabel}`,
    "increase": (args)=>`\u{5D4}\u{5D2}\u{5D3}\u{5DC} ${args.fieldLabel}`,
    "numberField": `\u{5E9}\u{5D3}\u{5D4} \u{5DE}\u{5E1}\u{5E4}\u{5E8}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"a0WjR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`Smanji ${args.fieldLabel}`,
    "increase": (args)=>`Pove\u{107}aj ${args.fieldLabel}`,
    "numberField": `Polje broja`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5oX4X":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`${args.fieldLabel} cs\xf6kkent\xe9se`,
    "increase": (args)=>`${args.fieldLabel} n\xf6vel\xe9se`,
    "numberField": `Sz\xe1mmez\u{151}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eiKCD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`Riduci ${args.fieldLabel}`,
    "increase": (args)=>`Aumenta ${args.fieldLabel}`,
    "numberField": `Campo numero`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eibHd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`${args.fieldLabel}\u{3092}\u{7E2E}\u{5C0F}`,
    "increase": (args)=>`${args.fieldLabel}\u{3092}\u{62E1}\u{5927}`,
    "numberField": `\u{6570}\u{5024}\u{30D5}\u{30A3}\u{30FC}\u{30EB}\u{30C9}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1XxhQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`${args.fieldLabel} \u{AC10}\u{C18C}`,
    "increase": (args)=>`${args.fieldLabel} \u{C99D}\u{AC00}`,
    "numberField": `\u{BC88}\u{D638} \u{D544}\u{B4DC}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ffoqT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`Suma\u{17E}inti ${args.fieldLabel}`,
    "increase": (args)=>`Padidinti ${args.fieldLabel}`,
    "numberField": `Numerio laukas`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6J0gp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`Samazin\u{101}\u{161}ana ${args.fieldLabel}`,
    "increase": (args)=>`Palielin\u{101}\u{161}ana ${args.fieldLabel}`,
    "numberField": `Skait\u{13C}u lauks`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ieueD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`Reduser ${args.fieldLabel}`,
    "increase": (args)=>`\xd8k ${args.fieldLabel}`,
    "numberField": `Tallfelt`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aQTJ5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`${args.fieldLabel} verlagen`,
    "increase": (args)=>`${args.fieldLabel} verhogen`,
    "numberField": `Getalveld`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ij1qy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`Zmniejsz ${args.fieldLabel}`,
    "increase": (args)=>`Zwi\u{119}ksz ${args.fieldLabel}`,
    "numberField": `Pole numeru`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9CGuG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`Diminuir ${args.fieldLabel}`,
    "increase": (args)=>`Aumentar ${args.fieldLabel}`,
    "numberField": `Campo de n\xfamero`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"e9ovz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`Diminuir ${args.fieldLabel}`,
    "increase": (args)=>`Aumentar ${args.fieldLabel}`,
    "numberField": `Campo num\xe9rico`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ij79d":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`Sc\u{103}dere ${args.fieldLabel}`,
    "increase": (args)=>`Cre\u{219}tere ${args.fieldLabel}`,
    "numberField": `C\xe2mp numeric`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kyN9d":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`\u{423}\u{43C}\u{435}\u{43D}\u{44C}\u{448}\u{435}\u{43D}\u{438}\u{435} ${args.fieldLabel}`,
    "increase": (args)=>`\u{423}\u{432}\u{435}\u{43B}\u{438}\u{447}\u{435}\u{43D}\u{438}\u{435} ${args.fieldLabel}`,
    "numberField": `\u{427}\u{438}\u{441}\u{43B}\u{43E}\u{432}\u{43E}\u{435} \u{43F}\u{43E}\u{43B}\u{435}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"Ky22A":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`Zn\xed\u{17E}i\u{165} ${args.fieldLabel}`,
    "increase": (args)=>`Zv\xfd\u{161}i\u{165} ${args.fieldLabel}`,
    "numberField": `\u{10C}\xedseln\xe9 pole`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"372aH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`Upadati ${args.fieldLabel}`,
    "increase": (args)=>`Pove\u{10D}ajte ${args.fieldLabel}`,
    "numberField": `\u{160}tevil\u{10D}no polje`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"d9DiX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`Smanji ${args.fieldLabel}`,
    "increase": (args)=>`Pove\u{107}aj ${args.fieldLabel}`,
    "numberField": `Polje broja`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"biGWu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`Minska ${args.fieldLabel}`,
    "increase": (args)=>`\xd6ka ${args.fieldLabel}`,
    "numberField": `Nummerf\xe4lt`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bIfBN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`${args.fieldLabel} azalt`,
    "increase": (args)=>`${args.fieldLabel} artt\u{131}r`,
    "numberField": `Say\u{131} alan\u{131}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4lbaf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`\u{417}\u{43C}\u{435}\u{43D}\u{448}\u{438}\u{442}\u{438} ${args.fieldLabel}`,
    "increase": (args)=>`\u{417}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{438}\u{442}\u{438} ${args.fieldLabel}`,
    "numberField": `\u{41F}\u{43E}\u{43B}\u{435} \u{43D}\u{43E}\u{43C}\u{435}\u{440}\u{430}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"caADm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`\u{964D}\u{4F4E} ${args.fieldLabel}`,
    "increase": (args)=>`\u{63D0}\u{9AD8} ${args.fieldLabel}`,
    "numberField": `\u{6570}\u{5B57}\u{5B57}\u{6BB5}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jb0Nu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "decrease": (args)=>`\u{7E2E}\u{5C0F} ${args.fieldLabel}`,
    "increase": (args)=>`\u{653E}\u{5927} ${args.fieldLabel}`,
    "numberField": `\u{6578}\u{5B57}\u{6B04}\u{4F4D}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"SROgQ":[function(require,module,exports,__globalThis) {
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
 * Provides state management for a number field component. Number fields allow users to enter a
 * number, and increment or decrement the value using stepper buttons.
 */ parcelHelpers.export(exports, "useNumberFieldState", ()=>useNumberFieldState);
var _number = require("../utils/number");
var _useFormValidationState = require("../form/useFormValidationState");
var _number1 = require("@internationalized/number");
var _react = require("react");
var _useControlledState = require("../utils/useControlledState");
function useNumberFieldState(props) {
    let { minValue, maxValue, step, formatOptions, value, defaultValue = NaN, onChange, locale, isDisabled, isReadOnly, commitBehavior = 'snap' } = props;
    if (value === null) value = NaN;
    let snapValue = (0, _react.useCallback)((value)=>{
        return step === undefined || isNaN(step) ? (0, _number.clamp)(value, minValue, maxValue) : (0, _number.snapValueToStep)(value, minValue, maxValue, step);
    }, [
        step,
        minValue,
        maxValue
    ]);
    if (value !== undefined && !isNaN(value) && commitBehavior === 'snap') value = snapValue(value);
    if (!isNaN(defaultValue) && commitBehavior === 'snap') defaultValue = snapValue(defaultValue);
    let [numberValue, setNumberValue] = (0, _useControlledState.useControlledState)(value, isNaN(defaultValue) ? NaN : defaultValue, onChange);
    let [initialValue] = (0, _react.useState)(numberValue);
    let [inputValue, setInputValue] = (0, _react.useState)(()=>isNaN(numberValue) ? '' : new (0, _number1.NumberFormatter)(locale, formatOptions).format(numberValue));
    let numberParser = (0, _react.useMemo)(()=>new (0, _number1.NumberParser)(locale, formatOptions), [
        locale,
        formatOptions
    ]);
    let numberingSystem = (0, _react.useMemo)(()=>numberParser.getNumberingSystem(inputValue), [
        numberParser,
        inputValue
    ]);
    let formatter = (0, _react.useMemo)(()=>new (0, _number1.NumberFormatter)(locale, {
            ...formatOptions,
            numberingSystem
        }), [
        locale,
        formatOptions,
        numberingSystem
    ]);
    let intlOptions = (0, _react.useMemo)(()=>formatter.resolvedOptions(), [
        formatter
    ]);
    let format = (0, _react.useCallback)((value)=>isNaN(value) || value === null ? '' : formatter.format(value), [
        formatter
    ]);
    let validation = (0, _useFormValidationState.useFormValidationState)({
        ...props,
        value: numberValue
    });
    let clampStep = step !== undefined && !isNaN(step) ? step : 1;
    if (intlOptions.style === 'percent' && (step === undefined || isNaN(step))) clampStep = 0.01;
    // Update the input value when the number value or format options change. This is done
    // in a useEffect so that the controlled behavior is correct and we only update the
    // textfield after prop changes.
    let [prevValue, setPrevValue] = (0, _react.useState)(numberValue);
    let [prevLocale, setPrevLocale] = (0, _react.useState)(locale);
    let [prevFormatOptions, setPrevFormatOptions] = (0, _react.useState)(formatOptions);
    if (!Object.is(numberValue, prevValue) || locale !== prevLocale || !isEqualFormatOptions(formatOptions, prevFormatOptions)) {
        setInputValue(format(numberValue));
        setPrevValue(numberValue);
        setPrevLocale(locale);
        setPrevFormatOptions(formatOptions);
    }
    let parsedValue = (0, _react.useMemo)(()=>numberParser.parse(inputValue), [
        numberParser,
        inputValue
    ]);
    let commit = (overrideValue)=>{
        let newInputValue = overrideValue === undefined ? inputValue : overrideValue;
        let newParsedValue = parsedValue;
        if (overrideValue !== undefined) newParsedValue = numberParser.parse(newInputValue);
        // Set to empty state if input value is empty
        if (!newInputValue.length) {
            setNumberValue(NaN);
            setInputValue(value === undefined ? '' : format(numberValue));
            return;
        }
        // if it failed to parse, then reset input to formatted version of current number
        if (isNaN(newParsedValue)) {
            setInputValue(format(numberValue));
            return;
        }
        // Clamp to min and max, round to the nearest step, and round to specified number of digits
        let clampedValue = commitBehavior === 'snap' ? snapValue(newParsedValue) : newParsedValue;
        clampedValue = numberParser.parse(format(clampedValue));
        let shouldValidate = clampedValue !== numberValue;
        setNumberValue(clampedValue);
        // in a controlled state, the numberValue won't change, so we won't go back to our old input without help
        setInputValue(format(value === undefined ? clampedValue : numberValue));
        if (shouldValidate) validation.commitValidation();
    };
    let safeNextStep = (operation, minMax = 0)=>{
        let prev = parsedValue;
        if (isNaN(prev)) {
            // if the input is empty, start from the min/max value when incrementing/decrementing,
            // or zero if there is no min/max value defined.
            let newValue = isNaN(minMax) ? 0 : minMax;
            return (0, _number.snapValueToStep)(newValue, minValue, maxValue, clampStep);
        } else {
            // otherwise, first snap the current value to the nearest step. if it moves in the direction
            // we're going, use that value, otherwise add the step and snap that value.
            let newValue = (0, _number.snapValueToStep)(prev, minValue, maxValue, clampStep);
            if (operation === '+' && newValue > prev || operation === '-' && newValue < prev) return newValue;
            return (0, _number.snapValueToStep)(handleDecimalOperation(operation, prev, clampStep), minValue, maxValue, clampStep);
        }
    };
    let increment = ()=>{
        let newValue = safeNextStep('+', minValue);
        // if we've arrived at the same value that was previously in the state, the
        // input value should be updated to match
        // ex type 4, press increment, highlight the number in the input, type 4 again, press increment
        // you'd be at 5, then incrementing to 5 again, so no re-render would happen and 4 would be left in the input
        if (newValue === numberValue) setInputValue(format(newValue));
        setNumberValue(newValue);
        validation.commitValidation();
    };
    let decrement = ()=>{
        let newValue = safeNextStep('-', maxValue);
        if (newValue === numberValue) setInputValue(format(newValue));
        setNumberValue(newValue);
        validation.commitValidation();
    };
    let incrementToMax = ()=>{
        if (maxValue != null) {
            setNumberValue((0, _number.snapValueToStep)(maxValue, minValue, maxValue, clampStep));
            validation.commitValidation();
        }
    };
    let decrementToMin = ()=>{
        if (minValue != null) {
            setNumberValue(minValue);
            validation.commitValidation();
        }
    };
    let canIncrement = (0, _react.useMemo)(()=>!isDisabled && !isReadOnly && (isNaN(parsedValue) || maxValue === undefined || isNaN(maxValue) || (0, _number.snapValueToStep)(parsedValue, minValue, maxValue, clampStep) > parsedValue || handleDecimalOperation('+', parsedValue, clampStep) <= maxValue), [
        isDisabled,
        isReadOnly,
        minValue,
        maxValue,
        clampStep,
        parsedValue
    ]);
    let canDecrement = (0, _react.useMemo)(()=>!isDisabled && !isReadOnly && (isNaN(parsedValue) || minValue === undefined || isNaN(minValue) || (0, _number.snapValueToStep)(parsedValue, minValue, maxValue, clampStep) < parsedValue || handleDecimalOperation('-', parsedValue, clampStep) >= minValue), [
        isDisabled,
        isReadOnly,
        minValue,
        maxValue,
        clampStep,
        parsedValue
    ]);
    let validate = (value)=>numberParser.isValidPartialNumber(value, minValue, maxValue);
    return {
        ...validation,
        validate,
        increment,
        incrementToMax,
        decrement,
        decrementToMin,
        canIncrement,
        canDecrement,
        minValue,
        maxValue,
        numberValue: parsedValue,
        defaultNumberValue: isNaN(defaultValue) ? initialValue : defaultValue,
        setNumberValue,
        setInputValue,
        inputValue,
        commit
    };
}
// Shallow equality is sufficient here because all values in Intl.NumberFormatOptions are primitives.
function isEqualFormatOptions(a, b) {
    if (a === b) return true;
    if (!a || !b) return false;
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (let key of aKeys){
        if (b[key] !== a[key]) return false;
    }
    return true;
}
function handleDecimalOperation(operator, value1, value2) {
    let result = operator === '+' ? value1 + value2 : value1 - value2;
    // Check if we have decimals
    if (value1 % 1 !== 0 || value2 % 1 !== 0) {
        const value1Decimal = value1.toString().split('.');
        const value2Decimal = value2.toString().split('.');
        const value1DecimalLength = value1Decimal[1] && value1Decimal[1].length || 0;
        const value2DecimalLength = value2Decimal[1] && value2Decimal[1].length || 0;
        const multiplier = Math.pow(10, Math.max(value1DecimalLength, value2DecimalLength));
        // Transform the decimals to integers based on the precision
        value1 = Math.round(value1 * multiplier);
        value2 = Math.round(value2 * multiplier);
        // Perform the operation on integers values to make sure we don't get a fancy decimal value
        result = operator === '+' ? value1 + value2 : value1 - value2;
        // Transform the integer result back to decimal
        result /= multiplier;
    }
    return result;
}

},{"../utils/number":"aEFFO","../form/useFormValidationState":"491YW","@internationalized/number":[["NumberFormatter","3OyUY"],["NumberParser","d8PNd"]],"react":"gOP0N","../utils/useControlledState":"8yNBD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

