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
})({"aXXNw":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a date picker component.
 * A date range picker combines two DateFields and a RangeCalendar popover to allow
 * users to enter or select a date and time range.
 */ parcelHelpers.export(exports, "useDateRangePicker", ()=>useDateRangePicker);
var _focusScope = require("../focus/FocusScope");
var _useFormValidationState = require("react-stately/private/form/useFormValidationState");
var _filterDOMProps = require("../utils/filterDOMProps");
var _useDateField = require("./useDateField");
var _indexJs = require("../../intl/datepicker/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mergeProps = require("../utils/mergeProps");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _useDatePickerGroup = require("./useDatePickerGroup");
var _useDescription = require("../utils/useDescription");
var _useField = require("../label/useField");
var _useFocusWithin = require("../interactions/useFocusWithin");
var _useId = require("../utils/useId");
var _i18Nprovider = require("../i18n/I18nProvider");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
var _react = require("react");
function useDateRangePicker(props, state, ref) {
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/datepicker');
    let { isInvalid, validationErrors, validationDetails } = state.displayValidation;
    let { labelProps, fieldProps, descriptionProps, errorMessageProps } = (0, _useField.useField)({
        ...props,
        labelElementType: 'span',
        isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let labelledBy = fieldProps['aria-labelledby'] || fieldProps.id;
    let { locale } = (0, _i18Nprovider.useLocale)();
    let range = state.formatValue(locale, {
        month: 'long'
    });
    let description = range ? stringFormatter.format('selectedRangeDescription', {
        startDate: range.start,
        endDate: range.end
    }) : '';
    let descProps = (0, _useDescription.useDescription)(description);
    let startFieldProps = {
        'aria-label': stringFormatter.format('startDate'),
        'aria-labelledby': labelledBy
    };
    let endFieldProps = {
        'aria-label': stringFormatter.format('endDate'),
        'aria-labelledby': labelledBy
    };
    let buttonId = (0, _useId.useId)();
    let dialogId = (0, _useId.useId)();
    let groupProps = (0, _useDatePickerGroup.useDatePickerGroup)(state, ref);
    let ariaDescribedBy = [
        descProps['aria-describedby'],
        fieldProps['aria-describedby']
    ].filter(Boolean).join(' ') || undefined;
    let focusManager = (0, _react.useMemo)(()=>(0, _focusScope.createFocusManager)(ref, {
            // Exclude the button from the focus manager.
            accept: (element)=>element.id !== buttonId
        }), [
        ref,
        buttonId
    ]);
    let commonFieldProps = {
        [(0, _useDateField.focusManagerSymbol)]: focusManager,
        [(0, _useDateField.roleSymbol)]: 'presentation',
        'aria-describedby': ariaDescribedBy,
        placeholderValue: props.placeholderValue,
        hideTimeZone: props.hideTimeZone,
        hourCycle: props.hourCycle,
        granularity: props.granularity,
        shouldForceLeadingZeros: props.shouldForceLeadingZeros,
        isDisabled: props.isDisabled,
        isReadOnly: props.isReadOnly,
        isRequired: props.isRequired,
        validationBehavior: props.validationBehavior
    };
    let domProps = (0, _filterDOMProps.filterDOMProps)(props);
    let isFocused = (0, _react.useRef)(false);
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)({
        ...props,
        isDisabled: state.isOpen,
        onBlurWithin: (e)=>{
            // Ignore when focus moves into the popover.
            let dialog = document.getElementById(dialogId);
            if (!(0, _domfunctions.nodeContains)(dialog, e.relatedTarget)) {
                isFocused.current = false;
                props.onBlur?.(e);
                props.onFocusChange?.(false);
            }
        },
        onFocusWithin: (e)=>{
            if (!isFocused.current) {
                isFocused.current = true;
                props.onFocus?.(e);
                props.onFocusChange?.(true);
            }
        }
    });
    let startFieldValidation = (0, _react.useRef)((0, _useFormValidationState.DEFAULT_VALIDATION_RESULT));
    let endFieldValidation = (0, _react.useRef)((0, _useFormValidationState.DEFAULT_VALIDATION_RESULT));
    return {
        groupProps: (0, _mergeProps.mergeProps)(domProps, groupProps, fieldProps, descProps, focusWithinProps, {
            role: 'group',
            'aria-disabled': props.isDisabled || null,
            'aria-describedby': ariaDescribedBy,
            onKeyDown (e) {
                if (state.isOpen) return;
                if (props.onKeyDown) props.onKeyDown(e);
            },
            onKeyUp (e) {
                if (state.isOpen) return;
                if (props.onKeyUp) props.onKeyUp(e);
            }
        }),
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                focusManager.focusFirst();
            }
        },
        buttonProps: {
            ...descProps,
            id: buttonId,
            'aria-haspopup': 'dialog',
            'aria-label': stringFormatter.format('calendar'),
            'aria-labelledby': `${buttonId} ${labelledBy}`,
            'aria-describedby': ariaDescribedBy,
            'aria-expanded': state.isOpen,
            isDisabled: props.isDisabled || props.isReadOnly,
            onPress: ()=>state.setOpen(true)
        },
        dialogProps: {
            id: dialogId,
            'aria-labelledby': `${buttonId} ${labelledBy}`
        },
        startFieldProps: {
            ...startFieldProps,
            ...commonFieldProps,
            value: state.value?.start ?? null,
            defaultValue: state.defaultValue?.start,
            onChange: (start)=>state.setDateTime('start', start),
            autoFocus: props.autoFocus,
            name: props.startName,
            form: props.form,
            [(0, _useFormValidationState.privateValidationStateProp)]: {
                realtimeValidation: state.realtimeValidation,
                displayValidation: state.displayValidation,
                updateValidation (e) {
                    startFieldValidation.current = e;
                    state.updateValidation((0, _useFormValidationState.mergeValidation)(e, endFieldValidation.current));
                },
                resetValidation: state.resetValidation,
                commitValidation: state.commitValidation
            }
        },
        endFieldProps: {
            ...endFieldProps,
            ...commonFieldProps,
            value: state.value?.end ?? null,
            defaultValue: state.defaultValue?.end,
            onChange: (end)=>state.setDateTime('end', end),
            name: props.endName,
            form: props.form,
            [(0, _useFormValidationState.privateValidationStateProp)]: {
                realtimeValidation: state.realtimeValidation,
                displayValidation: state.displayValidation,
                updateValidation (e) {
                    endFieldValidation.current = e;
                    state.updateValidation((0, _useFormValidationState.mergeValidation)(startFieldValidation.current, e));
                },
                resetValidation: state.resetValidation,
                commitValidation: state.commitValidation
            }
        },
        descriptionProps,
        errorMessageProps,
        calendarProps: {
            autoFocus: true,
            value: state.dateRange?.start && state.dateRange.end ? state.dateRange : null,
            onChange: state.setDateRange,
            minValue: props.minValue,
            maxValue: props.maxValue,
            isDisabled: props.isDisabled,
            isReadOnly: props.isReadOnly,
            isDateUnavailable: props.isDateUnavailable,
            allowsNonContiguousRanges: props.allowsNonContiguousRanges,
            defaultFocusedValue: state.dateRange ? undefined : props.placeholderValue,
            isInvalid: state.isInvalid,
            errorMessage: typeof props.errorMessage === 'function' ? props.errorMessage(state.displayValidation) : props.errorMessage || state.displayValidation.validationErrors.join(' '),
            firstDayOfWeek: props.firstDayOfWeek,
            pageBehavior: props.pageBehavior
        },
        isInvalid,
        validationErrors,
        validationDetails
    };
}

},{"../focus/FocusScope":"E8d3D","react-stately/private/form/useFormValidationState":"491YW","../utils/filterDOMProps":"h4XHF","./useDateField":"7sRe8","../../intl/datepicker/index.js":"anTmt","../utils/mergeProps":"jycxS","../utils/shadowdom/DOMFunctions":"8kfpz","./useDatePickerGroup":"8oueE","../utils/useDescription":"1bivM","../label/useField":"5Oeu9","../interactions/useFocusWithin":"bkSQo","../utils/useId":"fQAcb","../i18n/I18nProvider":"czGuc","../i18n/useLocalizedStringFormatter":"8lll3","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"l3LOG":[function(require,module,exports,__globalThis) {
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
 * Provides state management for a date range picker component.
 * A date range picker combines two DateFields and a RangeCalendar popover to allow
 * users to enter or select a date and time range.
 */ parcelHelpers.export(exports, "useDateRangePickerState", ()=>useDateRangePickerState);
var _date = require("@internationalized/date");
var _utils = require("./utils");
var _useFormValidationState = require("../form/useFormValidationState");
var _useOverlayTriggerState = require("../overlays/useOverlayTriggerState");
var _useControlledState = require("../utils/useControlledState");
var _react = require("react");
function useDateRangePickerState(props) {
    let overlayState = (0, _useOverlayTriggerState.useOverlayTriggerState)(props);
    let [controlledValue, setControlledValue] = (0, _useControlledState.useControlledState)(props.value, props.defaultValue || null, props.onChange);
    let [initialValue] = (0, _react.useState)(controlledValue);
    let [placeholderValue, setPlaceholderValue] = (0, _react.useState)(()=>controlledValue || {
            start: null,
            end: null
        });
    // Reset the placeholder if the value prop is set to null.
    if (controlledValue == null && placeholderValue.start && placeholderValue.end) {
        placeholderValue = {
            start: null,
            end: null
        };
        setPlaceholderValue(placeholderValue);
    }
    let value = controlledValue || placeholderValue;
    let setValue = (newValue)=>{
        // oxlint-disable-next-line react/react-compiler
        value = newValue || {
            start: null,
            end: null
        };
        setPlaceholderValue(value);
        if (isCompleteRange(value)) setControlledValue(value);
        else setControlledValue(null);
    };
    let v = value?.start || value?.end || props.placeholderValue || null;
    let [granularity, defaultTimeZone] = (0, _utils.useDefaultProps)(v, props.granularity);
    let hasTime = granularity === 'hour' || granularity === 'minute' || granularity === 'second';
    let shouldCloseOnSelect = props.shouldCloseOnSelect ?? true;
    let [dateRange, setSelectedDateRange] = (0, _react.useState)(null);
    let [timeRange, setSelectedTimeRange] = (0, _react.useState)(null);
    if (value && isCompleteRange(value)) {
        dateRange = value;
        if ('hour' in value.start) timeRange = value;
    }
    let commitValue = (dateRange, timeRange)=>{
        setValue({
            start: 'timeZone' in timeRange.start ? timeRange.start.set((0, _date.toCalendarDate)(dateRange.start)) : (0, _date.toCalendarDateTime)(dateRange.start, timeRange.start),
            end: 'timeZone' in timeRange.end ? timeRange.end.set((0, _date.toCalendarDate)(dateRange.end)) : (0, _date.toCalendarDateTime)(dateRange.end, timeRange.end)
        });
        setSelectedDateRange(null);
        setSelectedTimeRange(null);
        validation.commitValidation();
    };
    // Intercept setValue to make sure the Time section is not changed by date selection in Calendar
    let setDateRange = (range)=>{
        let shouldClose = typeof shouldCloseOnSelect === 'function' ? shouldCloseOnSelect() : shouldCloseOnSelect;
        if (hasTime) {
            // Set a placeholder time if the popover is closing so we don't leave the field in an incomplete state.
            if (isCompleteRange(range) && (shouldClose || timeRange?.start && timeRange?.end)) commitValue(range, {
                start: timeRange?.start || (0, _utils.getPlaceholderTime)(props.placeholderValue),
                end: timeRange?.end || (0, _utils.getPlaceholderTime)(props.placeholderValue)
            });
            else setSelectedDateRange(range);
        } else if (isCompleteRange(range)) {
            setValue(range);
            validation.commitValidation();
        } else setSelectedDateRange(range);
        if (shouldClose) overlayState.setOpen(false);
    };
    let setTimeRange = (range)=>{
        if (isCompleteRange(dateRange) && isCompleteRange(range)) commitValue(dateRange, range);
        else setSelectedTimeRange(range);
    };
    let showEra = value?.start?.calendar.identifier === 'gregory' && value.start.era === 'BC' || value?.end?.calendar.identifier === 'gregory' && value.end.era === 'BC';
    let formatOpts = (0, _react.useMemo)(()=>({
            granularity,
            timeZone: defaultTimeZone,
            hideTimeZone: props.hideTimeZone,
            hourCycle: props.hourCycle,
            shouldForceLeadingZeros: props.shouldForceLeadingZeros,
            showEra
        }), [
        granularity,
        props.hourCycle,
        props.shouldForceLeadingZeros,
        defaultTimeZone,
        props.hideTimeZone,
        showEra
    ]);
    let { minValue, maxValue, isDateUnavailable } = props;
    let builtinValidation = (0, _react.useMemo)(()=>(0, _utils.getRangeValidationResult)(value, minValue, maxValue, isDateUnavailable ? (date)=>isDateUnavailable(date, null) : undefined, formatOpts), [
        value,
        minValue,
        maxValue,
        isDateUnavailable,
        formatOpts
    ]);
    let validation = (0, _useFormValidationState.useFormValidationState)({
        ...props,
        value: controlledValue,
        name: (0, _react.useMemo)(()=>[
                props.startName,
                props.endName
            ].filter((n)=>n != null), [
            props.startName,
            props.endName
        ]),
        builtinValidation
    });
    let isValueInvalid = validation.displayValidation.isInvalid;
    let validationState = props.validationState || (isValueInvalid ? 'invalid' : null);
    return {
        ...validation,
        value,
        defaultValue: props.defaultValue ?? initialValue,
        setValue,
        dateRange,
        timeRange,
        granularity,
        hasTime,
        setDate (part, date) {
            if (part === 'start') setDateRange({
                start: date,
                end: dateRange?.end ?? null
            });
            else setDateRange({
                start: dateRange?.start ?? null,
                end: date
            });
        },
        setTime (part, time) {
            if (part === 'start') setTimeRange({
                start: time,
                end: timeRange?.end ?? null
            });
            else setTimeRange({
                start: timeRange?.start ?? null,
                end: time
            });
        },
        setDateTime (part, dateTime) {
            if (part === 'start') setValue({
                start: dateTime,
                end: value?.end ?? null
            });
            else setValue({
                start: value?.start ?? null,
                end: dateTime
            });
        },
        setDateRange,
        setTimeRange,
        ...overlayState,
        setOpen (isOpen) {
            // Commit the selected date range when the calendar is closed. Use a placeholder time if one wasn't set.
            // If only the time range was set and not the date range, don't commit. The state will be preserved until
            // the user opens the popover again.
            if (!isOpen && !(value?.start && value?.end) && isCompleteRange(dateRange) && hasTime) commitValue(dateRange, {
                start: timeRange?.start || (0, _utils.getPlaceholderTime)(props.placeholderValue),
                end: timeRange?.end || (0, _utils.getPlaceholderTime)(props.placeholderValue)
            });
            overlayState.setOpen(isOpen);
        },
        validationState,
        isInvalid: isValueInvalid,
        formatValue (locale, fieldOptions) {
            if (!value || !value.start || !value.end) return null;
            let startTimeZone = 'timeZone' in value.start ? value.start.timeZone : undefined;
            let startGranularity = props.granularity || (value.start && 'minute' in value.start ? 'minute' : 'day');
            let endTimeZone = 'timeZone' in value.end ? value.end.timeZone : undefined;
            let endGranularity = props.granularity || (value.end && 'minute' in value.end ? 'minute' : 'day');
            let startOptions = (0, _utils.getFormatOptions)(fieldOptions, {
                granularity: startGranularity,
                timeZone: startTimeZone,
                hideTimeZone: props.hideTimeZone,
                hourCycle: props.hourCycle,
                showEra: value.start.calendar.identifier === 'gregory' && value.start.era === 'BC' || value.end.calendar.identifier === 'gregory' && value.end.era === 'BC'
            });
            let startDate = value.start.toDate(startTimeZone || 'UTC');
            let endDate = value.end.toDate(endTimeZone || 'UTC');
            let startFormatter = new (0, _date.DateFormatter)(locale, startOptions);
            let endFormatter;
            if (startTimeZone === endTimeZone && startGranularity === endGranularity && value.start.compare(value.end) !== 0) {
                // Use formatRange, as it results in shorter output when some of the fields
                // are shared between the start and end dates (e.g. the same month).
                // Formatting will fail if the end date is before the start date. Fall back below when that happens.
                try {
                    let parts = startFormatter.formatRangeToParts(startDate, endDate);
                    // Find the separator between the start and end date. This is determined
                    // by finding the last shared literal before the end range.
                    let separatorIndex = -1;
                    for(let i = 0; i < parts.length; i++){
                        let part = parts[i];
                        if (part.source === 'shared' && part.type === 'literal') separatorIndex = i;
                        else if (part.source === 'endRange') break;
                    }
                    // Now we can combine the parts into start and end strings.
                    let start = '';
                    let end = '';
                    for(let i = 0; i < parts.length; i++){
                        if (i < separatorIndex) start += parts[i].value;
                        else if (i > separatorIndex) end += parts[i].value;
                    }
                    return {
                        start,
                        end
                    };
                } catch  {
                // ignore
                }
                endFormatter = startFormatter;
            } else {
                let endOptions = (0, _utils.getFormatOptions)(fieldOptions, {
                    granularity: endGranularity,
                    timeZone: endTimeZone,
                    hideTimeZone: props.hideTimeZone,
                    hourCycle: props.hourCycle
                });
                endFormatter = new (0, _date.DateFormatter)(locale, endOptions);
            }
            return {
                start: startFormatter.format(startDate),
                end: endFormatter.format(endDate)
            };
        },
        getDateFormatter (locale, formatOptions) {
            let newOptions = {
                ...formatOpts,
                ...formatOptions
            };
            let newFormatOptions = (0, _utils.getFormatOptions)({}, newOptions);
            return new (0, _date.DateFormatter)(locale, newFormatOptions);
        }
    };
}
function isCompleteRange(value) {
    return value?.start != null && value.end != null;
}

},{"@internationalized/date":[["DateFormatter","2kPpC"],["toCalendarDate","9JPzq"],["toCalendarDateTime","9JPzq"]],"./utils":"8a8CA","../form/useFormValidationState":"491YW","../overlays/useOverlayTriggerState":"457a8","../utils/useControlledState":"8yNBD","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

