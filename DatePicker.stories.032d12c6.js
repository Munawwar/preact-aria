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
})({"1bgos":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useCalendarBase", ()=>useCalendarBase);
var _liveAnnouncer = require("../live-announcer/LiveAnnouncer");
var _filterDOMProps = require("../utils/filterDOMProps");
var _utils = require("./utils");
var _indexJs = require("../../intl/calendar/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mergeProps = require("../utils/mergeProps");
var _useLabels = require("../utils/useLabels");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
var _useId = require("../utils/useId");
var _react = require("react");
var _useUpdateEffect = require("../utils/useUpdateEffect");
function useCalendarBase(props, state) {
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/calendar');
    let domProps = (0, _filterDOMProps.filterDOMProps)(props);
    let title = (0, _utils.useVisibleRangeDescription)(state.visibleRange.start, state.visibleRange.end, state.timeZone, false);
    let visibleRangeDescription = (0, _utils.useVisibleRangeDescription)(state.visibleRange.start, state.visibleRange.end, state.timeZone, true);
    // Announce when the visible date range changes
    (0, _useUpdateEffect.useUpdateEffect)(()=>{
        // only when pressing the Previous or Next button
        if (!state.isFocused) (0, _liveAnnouncer.announce)(visibleRangeDescription);
    }, [
        visibleRangeDescription
    ]);
    // Announce when the selected value changes
    let selectedDateDescription = (0, _utils.useSelectedDateDescription)(state);
    (0, _useUpdateEffect.useUpdateEffect)(()=>{
        if (selectedDateDescription) (0, _liveAnnouncer.announce)(selectedDateDescription, 'polite', 4000);
    // handle an update to the caption that describes the currently selected range, to announce the new value
    }, [
        selectedDateDescription
    ]);
    let errorMessageId = (0, _useId.useSlotId)([
        Boolean(props.errorMessage),
        props.isInvalid,
        props.validationState
    ]);
    // Pass the label to the child grid elements.
    (0, _utils.hookData).set(state, {
        ariaLabel: props['aria-label'],
        ariaLabelledBy: props['aria-labelledby'],
        errorMessageId,
        selectedDateDescription
    });
    // If the next or previous buttons become disabled while they are focused, move focus to the calendar body.
    let [nextFocused, setNextFocused] = (0, _react.useState)(false);
    let nextDisabled = props.isDisabled || state.isNextVisibleRangeInvalid();
    if (nextDisabled && nextFocused) {
        setNextFocused(false);
        state.setFocused(true);
    }
    let [previousFocused, setPreviousFocused] = (0, _react.useState)(false);
    let previousDisabled = props.isDisabled || state.isPreviousVisibleRangeInvalid();
    if (previousDisabled && previousFocused) {
        setPreviousFocused(false);
        state.setFocused(true);
    }
    let labelProps = (0, _useLabels.useLabels)({
        id: props['id'],
        'aria-label': [
            props['aria-label'],
            visibleRangeDescription
        ].filter(Boolean).join(', '),
        'aria-labelledby': props['aria-labelledby']
    });
    return {
        calendarProps: (0, _mergeProps.mergeProps)(domProps, labelProps, {
            role: 'application',
            'aria-details': props['aria-details'] || undefined,
            'aria-describedby': props['aria-describedby'] || undefined
        }),
        nextButtonProps: {
            onPress: ()=>state.focusNextPage(),
            'aria-label': stringFormatter.format('next'),
            isDisabled: nextDisabled,
            onFocusChange: setNextFocused
        },
        prevButtonProps: {
            onPress: ()=>state.focusPreviousPage(),
            'aria-label': stringFormatter.format('previous'),
            isDisabled: previousDisabled,
            onFocusChange: setPreviousFocused
        },
        errorMessageProps: {
            id: errorMessageId
        },
        title
    };
}

},{"../live-announcer/LiveAnnouncer":"gQ2k2","../utils/filterDOMProps":"h4XHF","./utils":"gGPA0","../../intl/calendar/index.js":"k2790","../utils/mergeProps":"jycxS","../utils/useLabels":"8ZwLJ","../i18n/useLocalizedStringFormatter":"8lll3","../utils/useId":"fQAcb","react":"gOP0N","../utils/useUpdateEffect":"9WaKh","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gGPA0":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "hookData", ()=>hookData);
parcelHelpers.export(exports, "getEraFormat", ()=>getEraFormat);
parcelHelpers.export(exports, "useSelectedDateDescription", ()=>useSelectedDateDescription);
parcelHelpers.export(exports, "useVisibleRangeDescription", ()=>useVisibleRangeDescription);
var _date = require("@internationalized/date");
var _indexJs = require("../../intl/calendar/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _useDateFormatter = require("../i18n/useDateFormatter");
var _i18Nprovider = require("../i18n/I18nProvider");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
var _react = require("react");
const hookData = new WeakMap();
function getEraFormat(date) {
    return date?.calendar.identifier === 'gregory' && date.era === 'BC' ? 'short' : undefined;
}
function useSelectedDateDescription(state) {
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/calendar');
    let start, end;
    if ('highlightedRange' in state) ({ start, end } = state.highlightedRange || {});
    else {
        start = Array.isArray(state.value) ? state.value[0] : state.value ?? undefined;
        end = Array.isArray(state.value) ? state.value.at(-1) : state.value ?? undefined;
    }
    let dateFormatter = (0, _useDateFormatter.useDateFormatter)({
        weekday: 'long',
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        era: getEraFormat(start) || getEraFormat(end),
        timeZone: state.timeZone
    });
    let { locale } = (0, _i18Nprovider.useLocale)();
    let listFormatter = (0, _react.useMemo)(()=>new Intl.ListFormat(locale), [
        locale
    ]);
    let anchorDate = 'anchorDate' in state ? state.anchorDate : null;
    return (0, _react.useMemo)(()=>{
        // No message if currently selecting a range, or there is nothing highlighted.
        if (!anchorDate && start && end) {
            // Use a single date message if the start and end dates are the same day,
            // otherwise include both dates.
            if ((0, _date.isSameDay)(start, end)) {
                let date = dateFormatter.format(start.toDate(state.timeZone));
                return stringFormatter.format('selectedDateDescription', {
                    date
                });
            } else if ('highlightedRange' in state) {
                let dateRange = formatRange(dateFormatter, stringFormatter, start, end, state.timeZone);
                return stringFormatter.format('selectedRangeDescription', {
                    dateRange
                });
            } else if (Array.isArray(state.value)) {
                let dates = state.value.map((date)=>dateFormatter.format(date.toDate(state.timeZone)));
                let formatted = listFormatter.format(dates);
                return stringFormatter.format('selectedDateDescription', {
                    date: formatted
                });
            }
        }
        return '';
    }, [
        start,
        end,
        anchorDate,
        state,
        stringFormatter,
        dateFormatter,
        listFormatter
    ]);
}
function useVisibleRangeDescription(startDate, endDate, timeZone, isAria) {
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/calendar');
    let era = getEraFormat(startDate) || getEraFormat(endDate);
    let monthFormatter = (0, _useDateFormatter.useDateFormatter)({
        month: 'long',
        year: 'numeric',
        era,
        calendar: startDate.calendar.identifier,
        timeZone
    });
    let dateFormatter = (0, _useDateFormatter.useDateFormatter)({
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        era,
        calendar: startDate.calendar.identifier,
        timeZone
    });
    return (0, _react.useMemo)(()=>{
        // Special case for month granularity. Format as a single month if only a
        // single month is visible, otherwise format as a range of months.
        if ((0, _date.isSameDay)(startDate, (0, _date.startOfMonth)(startDate))) {
            let startMonth = startDate;
            let endMonth = endDate;
            if (startDate.calendar.getFormattableMonth) startMonth = startDate.calendar.getFormattableMonth(startDate);
            if (endDate.calendar.getFormattableMonth) endMonth = endDate.calendar.getFormattableMonth(endDate);
            if ((0, _date.isSameDay)(endDate, (0, _date.endOfMonth)(startDate))) return monthFormatter.format(startMonth.toDate(timeZone));
            else if ((0, _date.isSameDay)(endDate, (0, _date.endOfMonth)(endDate))) return isAria ? formatRange(monthFormatter, stringFormatter, startMonth, endMonth, timeZone) : monthFormatter.formatRange(startMonth.toDate(timeZone), endMonth.toDate(timeZone));
        }
        return isAria ? formatRange(dateFormatter, stringFormatter, startDate, endDate, timeZone) : dateFormatter.formatRange(startDate.toDate(timeZone), endDate.toDate(timeZone));
    }, [
        startDate,
        endDate,
        monthFormatter,
        dateFormatter,
        stringFormatter,
        timeZone,
        isAria
    ]);
}
function formatRange(dateFormatter, stringFormatter, start, end, timeZone) {
    let parts = dateFormatter.formatRangeToParts(start.toDate(timeZone), end.toDate(timeZone));
    // Find the separator between the start and end date. This is determined
    // by finding the last shared literal before the end range.
    let separatorIndex = -1;
    for(let i = 0; i < parts.length; i++){
        let part = parts[i];
        if (part.source === 'shared' && part.type === 'literal') separatorIndex = i;
        else if (part.source === 'endRange') break;
    }
    // Now we can combine the parts into start and end strings.
    let startValue = '';
    let endValue = '';
    for(let i = 0; i < parts.length; i++){
        if (i < separatorIndex) startValue += parts[i].value;
        else if (i > separatorIndex) endValue += parts[i].value;
    }
    return stringFormatter.format('dateRange', {
        startDate: startValue,
        endDate: endValue
    });
}

},{"@internationalized/date":"aHOFb","../../intl/calendar/index.js":"k2790","../i18n/useDateFormatter":"ey0mQ","../i18n/I18nProvider":"czGuc","../i18n/useLocalizedStringFormatter":"8lll3","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k2790":[function(require,module,exports,__globalThis) {
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

},{"./ar-AE.js":"1EQTg","./bg-BG.js":"hLUYT","./cs-CZ.js":"11y5v","./da-DK.js":"d36av","./de-DE.js":"2Mqio","./el-GR.js":"2bLi0","./en-US.js":"38gTF","./es-ES.js":"h5j4Z","./et-EE.js":"hepuh","./fi-FI.js":"4qrvY","./fr-FR.js":"36SxS","./he-IL.js":"ieWKh","./hr-HR.js":"5NQxf","./hu-HU.js":"amXvO","./it-IT.js":"2XygA","./ja-JP.js":"4OhxJ","./ko-KR.js":"13Sak","./lt-LT.js":"g6wB6","./lv-LV.js":"6LD54","./nb-NO.js":"flkhH","./nl-NL.js":"aHlxD","./pl-PL.js":"46FG6","./pt-BR.js":"29n5T","./pt-PT.js":"kz6MS","./ro-RO.js":"b9kQ0","./ru-RU.js":"j1z8P","./sk-SK.js":"41U2a","./sl-SI.js":"bcyrM","./sr-SP.js":"aST23","./sv-SE.js":"5ih3B","./tr-TR.js":"gqxTt","./uk-UA.js":"ixRVC","./zh-CN.js":"7X5B0","./zh-TW.js":"cAUCh","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1EQTg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} \u{625}\u{644}\u{649} ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`,
    "finishRangeSelectionPrompt": `\u{627}\u{646}\u{642}\u{631} \u{644}\u{625}\u{646}\u{647}\u{627}\u{621} \u{639}\u{645}\u{644}\u{64A}\u{629} \u{62A}\u{62D}\u{62F}\u{64A}\u{62F} \u{646}\u{637}\u{627}\u{642} \u{627}\u{644}\u{62A}\u{627}\u{631}\u{64A}\u{62E}`,
    "maximumDate": `\u{622}\u{62E}\u{631} \u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62A}\u{627}\u{62D}`,
    "minimumDate": `\u{623}\u{648}\u{644} \u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62A}\u{627}\u{62D}`,
    "next": `\u{627}\u{644}\u{62A}\u{627}\u{644}\u{64A}`,
    "previous": `\u{627}\u{644}\u{633}\u{627}\u{628}\u{642}`,
    "selectedDateDescription": (args)=>`\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{627}\u{646}\u{642}\u{631} \u{644}\u{628}\u{62F}\u{621} \u{639}\u{645}\u{644}\u{64A}\u{629} \u{62A}\u{62D}\u{62F}\u{64A}\u{62F} \u{646}\u{637}\u{627}\u{642} \u{627}\u{644}\u{62A}\u{627}\u{631}\u{64A}\u{62E}`,
    "todayDate": (args)=>`\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${args.date}`,
    "todayDateSelected": (args)=>`\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${args.date} \u{645}\u{62D}\u{62F}\u{62F}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hLUYT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} \u{434}\u{43E} ${args.endDate}`,
    "dateSelected": (args)=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{435} ${args.date}`,
    "finishRangeSelectionPrompt": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435}, \u{437}\u{430} \u{434}\u{430} \u{434}\u{43E}\u{432}\u{44A}\u{440}\u{448}\u{438}\u{442}\u{435} \u{438}\u{437}\u{431}\u{43E}\u{440}\u{430} \u{43D}\u{430} \u{432}\u{440}\u{435}\u{43C}\u{435}\u{432}\u{438} \u{438}\u{43D}\u{442}\u{435}\u{440}\u{432}\u{430}\u{43B}`,
    "maximumDate": `\u{41F}\u{43E}\u{441}\u{43B}\u{435}\u{434}\u{43D}\u{430} \u{43D}\u{430}\u{43B}\u{438}\u{447}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
    "minimumDate": `\u{41F}\u{44A}\u{440}\u{432}\u{430} \u{43D}\u{430}\u{43B}\u{438}\u{447}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
    "next": `\u{41D}\u{430}\u{43F}\u{440}\u{435}\u{434}`,
    "previous": `\u{41D}\u{430}\u{437}\u{430}\u{434}`,
    "selectedDateDescription": (args)=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435}, \u{437}\u{430} \u{434}\u{430} \u{43F}\u{440}\u{438}\u{441}\u{442}\u{44A}\u{43F}\u{438}\u{442}\u{435} \u{43A}\u{44A}\u{43C} \u{438}\u{437}\u{431}\u{43E}\u{440}\u{430} \u{43D}\u{430} \u{432}\u{440}\u{435}\u{43C}\u{435}\u{432}\u{438} \u{438}\u{43D}\u{442}\u{435}\u{440}\u{432}\u{430}\u{43B}`,
    "todayDate": (args)=>`\u{414}\u{43D}\u{435}\u{441}, ${args.date}`,
    "todayDateSelected": (args)=>`\u{414}\u{43D}\u{435}\u{441}, ${args.date} \u{441}\u{430} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"11y5v":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} a\u{17E} ${args.endDate}`,
    "dateSelected": (args)=>`Vybr\xe1no ${args.date}`,
    "finishRangeSelectionPrompt": `Kliknut\xedm dokon\u{10D}\xedte v\xfdb\u{11B}r rozsahu dat`,
    "maximumDate": `Posledn\xed dostupn\xe9 datum`,
    "minimumDate": `Prvn\xed dostupn\xe9 datum`,
    "next": `Dal\u{161}\xed`,
    "previous": `P\u{159}edchoz\xed`,
    "selectedDateDescription": (args)=>`Vybran\xe9 datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Vybran\xe9 obdob\xed: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kliknut\xedm zah\xe1j\xedte v\xfdb\u{11B}r rozsahu dat`,
    "todayDate": (args)=>`Dnes, ${args.date}`,
    "todayDateSelected": (args)=>`Dnes, vybr\xe1no ${args.date}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"d36av":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} til ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} valgt`,
    "finishRangeSelectionPrompt": `Klik for at fuldf\xf8re valg af datoomr\xe5de`,
    "maximumDate": `Sidste ledige dato`,
    "minimumDate": `F\xf8rste ledige dato`,
    "next": `N\xe6ste`,
    "previous": `Forrige`,
    "selectedDateDescription": (args)=>`Valgt dato: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valgt interval: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Klik for at starte valg af datoomr\xe5de`,
    "todayDate": (args)=>`I dag, ${args.date}`,
    "todayDateSelected": (args)=>`I dag, ${args.date} valgt`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2Mqio":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} bis ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} ausgew\xe4hlt`,
    "finishRangeSelectionPrompt": `Klicken, um die Auswahl des Datumsbereichs zu beenden`,
    "maximumDate": `Letztes verf\xfcgbares Datum`,
    "minimumDate": `Erstes verf\xfcgbares Datum`,
    "next": `Weiter`,
    "previous": `Zur\xfcck`,
    "selectedDateDescription": (args)=>`Ausgew\xe4hltes Datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Ausgew\xe4hlter Bereich: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Klicken, um die Auswahl des Datumsbereichs zu beginnen`,
    "todayDate": (args)=>`Heute, ${args.date}`,
    "todayDateSelected": (args)=>`Heute, ${args.date} ausgew\xe4hlt`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2bLi0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} \u{3AD}\u{3C9}\u{3C2} ${args.endDate}`,
    "dateSelected": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} ${args.date}`,
    "finishRangeSelectionPrompt": `\u{39A}\u{3AC}\u{3BD}\u{3C4}\u{3B5} \u{3BA}\u{3BB}\u{3B9}\u{3BA} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BF}\u{3BB}\u{3BF}\u{3BA}\u{3BB}\u{3B7}\u{3C1}\u{3CE}\u{3C3}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3B7}\u{3BD} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C5}\u{3C2} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3B9}\u{3CE}\u{3BD}`,
    "maximumDate": `\u{3A4}\u{3B5}\u{3BB}\u{3B5}\u{3C5}\u{3C4}\u{3B1}\u{3AF}\u{3B1} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}`,
    "minimumDate": `\u{3A0}\u{3C1}\u{3CE}\u{3C4}\u{3B7} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}`,
    "next": `\u{395}\u{3C0}\u{3CC}\u{3BC}\u{3B5}\u{3BD}\u{3BF}`,
    "previous": `\u{3A0}\u{3C1}\u{3BF}\u{3B7}\u{3B3}\u{3BF}\u{3CD}\u{3BC}\u{3B5}\u{3BD}\u{3BF}`,
    "selectedDateDescription": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{39A}\u{3AC}\u{3BD}\u{3C4}\u{3B5} \u{3BA}\u{3BB}\u{3B9}\u{3BA} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BE}\u{3B5}\u{3BA}\u{3B9}\u{3BD}\u{3AE}\u{3C3}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3B7}\u{3BD} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C5}\u{3C2} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3B9}\u{3CE}\u{3BD}`,
    "todayDate": (args)=>`\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, ${args.date}`,
    "todayDateSelected": (args)=>`\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3C4}\u{3B7}\u{3BA}\u{3B5} ${args.date}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"38gTF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "previous": `Previous`,
    "next": `Next`,
    "selectedDateDescription": (args)=>`Selected Date: ${args.date}`,
    "selectedRangeDescription": (args)=>`Selected Range: ${args.dateRange}`,
    "todayDate": (args)=>`Today, ${args.date}`,
    "todayDateSelected": (args)=>`Today, ${args.date} selected`,
    "dateSelected": (args)=>`${args.date} selected`,
    "startRangeSelectionPrompt": `Click to start selecting date range`,
    "finishRangeSelectionPrompt": `Click to finish selecting date range`,
    "minimumDate": `First available date`,
    "maximumDate": `Last available date`,
    "dateRange": (args)=>`${args.startDate} to ${args.endDate}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h5j4Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} a ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} seleccionado`,
    "finishRangeSelectionPrompt": `Haga clic para terminar de seleccionar rango de fechas`,
    "maximumDate": `\xdaltima fecha disponible`,
    "minimumDate": `Primera fecha disponible`,
    "next": `Siguiente`,
    "previous": `Anterior`,
    "selectedDateDescription": (args)=>`Fecha seleccionada: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervalo seleccionado: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Haga clic para comenzar a seleccionar un rango de fechas`,
    "todayDate": (args)=>`Hoy, ${args.date}`,
    "todayDateSelected": (args)=>`Hoy, ${args.date} seleccionado`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hepuh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} kuni ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} valitud`,
    "finishRangeSelectionPrompt": `Kl\xf5psake kuup\xe4evavahemiku valimise l\xf5petamiseks`,
    "maximumDate": `Viimane saadaolev kuup\xe4ev`,
    "minimumDate": `Esimene saadaolev kuup\xe4ev`,
    "next": `J\xe4rgmine`,
    "previous": `Eelmine`,
    "selectedDateDescription": (args)=>`Valitud kuup\xe4ev: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valitud vahemik: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kl\xf5psake kuup\xe4evavahemiku valimiseks`,
    "todayDate": (args)=>`T\xe4na, ${args.date}`,
    "todayDateSelected": (args)=>`T\xe4na, ${args.date} valitud`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4qrvY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} \u{2013} ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} valittu`,
    "finishRangeSelectionPrompt": `Lopeta p\xe4iv\xe4m\xe4\xe4r\xe4alueen valinta napsauttamalla t\xe4t\xe4.`,
    "maximumDate": `Viimeinen varattavissa oleva p\xe4iv\xe4m\xe4\xe4r\xe4`,
    "minimumDate": `Ensimm\xe4inen varattavissa oleva p\xe4iv\xe4m\xe4\xe4r\xe4`,
    "next": `Seuraava`,
    "previous": `Edellinen`,
    "selectedDateDescription": (args)=>`Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valittu aikav\xe4li: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Aloita p\xe4iv\xe4m\xe4\xe4r\xe4alueen valinta napsauttamalla t\xe4t\xe4.`,
    "todayDate": (args)=>`T\xe4n\xe4\xe4n, ${args.date}`,
    "todayDateSelected": (args)=>`T\xe4n\xe4\xe4n, ${args.date} valittu`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"36SxS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} \xe0 ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} s\xe9lectionn\xe9`,
    "finishRangeSelectionPrompt": `Cliquer pour finir de s\xe9lectionner la plage de dates`,
    "maximumDate": `Derni\xe8re date disponible`,
    "minimumDate": `Premi\xe8re date disponible`,
    "next": `Suivant`,
    "previous": `Pr\xe9c\xe9dent`,
    "selectedDateDescription": (args)=>`Date s\xe9lectionn\xe9e\xa0: ${args.date}`,
    "selectedRangeDescription": (args)=>`Plage s\xe9lectionn\xe9e\xa0: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Cliquer pour commencer \xe0 s\xe9lectionner la plage de dates`,
    "todayDate": (args)=>`Aujourd'hui, ${args.date}`,
    "todayDateSelected": (args)=>`Aujourd\u{2019}hui, ${args.date} s\xe9lectionn\xe9`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ieWKh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} \u{5E2}\u{5D3} ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
    "finishRangeSelectionPrompt": `\u{5D7}\u{5E5} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E1}\u{5D9}\u{5D9}\u{5DD} \u{5D0}\u{5EA} \u{5D1}\u{5D7}\u{5D9}\u{5E8}\u{5EA} \u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5D4}\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DB}\u{5D9}\u{5DD}`,
    "maximumDate": `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E4}\u{5E0}\u{5D5}\u{5D9} \u{5D0}\u{5D7}\u{5E8}\u{5D5}\u{5DF}`,
    "minimumDate": `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E4}\u{5E0}\u{5D5}\u{5D9} \u{5E8}\u{5D0}\u{5E9}\u{5D5}\u{5DF}`,
    "next": `\u{5D4}\u{5D1}\u{5D0}`,
    "previous": `\u{5D4}\u{5E7}\u{5D5}\u{5D3}\u{5DD}`,
    "selectedDateDescription": (args)=>`\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{5DC}\u{5D7}\u{5E5} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5EA}\u{5D7}\u{5D9}\u{5DC} \u{5D1}\u{5D1}\u{5D7}\u{5D9}\u{5E8}\u{5EA} \u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5D4}\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DB}\u{5D9}\u{5DD}`,
    "todayDate": (args)=>`\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${args.date}`,
    "todayDateSelected": (args)=>`\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${args.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5NQxf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} do ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} odabran`,
    "finishRangeSelectionPrompt": `Kliknite da dovr\u{161}ite raspon odabranih datuma`,
    "maximumDate": `Posljednji raspolo\u{17E}ivi datum`,
    "minimumDate": `Prvi raspolo\u{17E}ivi datum`,
    "next": `Sljede\u{107}i`,
    "previous": `Prethodni`,
    "selectedDateDescription": (args)=>`Odabrani datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Odabrani raspon: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kliknite da zapo\u{10D}nete raspon odabranih datuma`,
    "todayDate": (args)=>`Danas, ${args.date}`,
    "todayDateSelected": (args)=>`Danas, odabran ${args.date}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"amXvO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate}\u{2013}${args.endDate}`,
    "dateSelected": (args)=>`${args.date} kiv\xe1lasztva`,
    "finishRangeSelectionPrompt": `Kattintson a d\xe1tumtartom\xe1ny kijel\xf6l\xe9s\xe9nek befejez\xe9s\xe9hez`,
    "maximumDate": `Utols\xf3 el\xe9rhet\u{151} d\xe1tum`,
    "minimumDate": `Az els\u{151} el\xe9rhet\u{151} d\xe1tum`,
    "next": `K\xf6vetkez\u{151}`,
    "previous": `El\u{151}z\u{151}`,
    "selectedDateDescription": (args)=>`Kijel\xf6lt d\xe1tum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Kijel\xf6lt tartom\xe1ny: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kattintson a d\xe1tumtartom\xe1ny kijel\xf6l\xe9s\xe9nek ind\xedt\xe1s\xe1hoz`,
    "todayDate": (args)=>`Ma, ${args.date}`,
    "todayDateSelected": (args)=>`Ma, ${args.date} kijel\xf6lve`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2XygA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`Da ${args.startDate} a ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} selezionata`,
    "finishRangeSelectionPrompt": `Fai clic per completare la selezione dell\u{2019}intervallo di date`,
    "maximumDate": `Ultima data disponibile`,
    "minimumDate": `Prima data disponibile`,
    "next": `Successivo`,
    "previous": `Precedente`,
    "selectedDateDescription": (args)=>`Data selezionata: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervallo selezionato: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Fai clic per selezionare l\u{2019}intervallo di date`,
    "todayDate": (args)=>`Oggi, ${args.date}`,
    "todayDateSelected": (args)=>`Oggi, ${args.date} selezionata`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4OhxJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} \u{304B}\u{3089} ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} \u{3092}\u{9078}\u{629E}`,
    "finishRangeSelectionPrompt": `\u{30AF}\u{30EA}\u{30C3}\u{30AF}\u{3057}\u{3066}\u{65E5}\u{4ED8}\u{7BC4}\u{56F2}\u{306E}\u{9078}\u{629E}\u{3092}\u{7D42}\u{4E86}`,
    "maximumDate": `\u{6700}\u{7D42}\u{5229}\u{7528}\u{53EF}\u{80FD}\u{65E5}`,
    "minimumDate": `\u{6700}\u{521D}\u{306E}\u{5229}\u{7528}\u{53EF}\u{80FD}\u{65E5}`,
    "next": `\u{6B21}\u{3078}`,
    "previous": `\u{524D}\u{3078}`,
    "selectedDateDescription": (args)=>`\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{30AF}\u{30EA}\u{30C3}\u{30AF}\u{3057}\u{3066}\u{65E5}\u{4ED8}\u{7BC4}\u{56F2}\u{306E}\u{9078}\u{629E}\u{3092}\u{958B}\u{59CB}`,
    "todayDate": (args)=>`\u{672C}\u{65E5}\u{3001}${args.date}`,
    "todayDateSelected": (args)=>`\u{672C}\u{65E5}\u{3001}${args.date} \u{3092}\u{9078}\u{629E}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"13Sak":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} ~ ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} \u{C120}\u{D0DD}\u{B428}`,
    "finishRangeSelectionPrompt": `\u{B0A0}\u{C9DC} \u{BC94}\u{C704} \u{C120}\u{D0DD}\u{C744} \u{C644}\u{B8CC}\u{D558}\u{B824}\u{BA74} \u{D074}\u{B9AD}\u{D558}\u{C2ED}\u{C2DC}\u{C624}.`,
    "maximumDate": `\u{B9C8}\u{C9C0}\u{B9C9}\u{C73C}\u{B85C} \u{C0AC}\u{C6A9} \u{AC00}\u{B2A5}\u{D55C} \u{C77C}\u{C790}`,
    "minimumDate": `\u{CC98}\u{C74C}\u{C73C}\u{B85C} \u{C0AC}\u{C6A9} \u{AC00}\u{B2A5}\u{D55C} \u{C77C}\u{C790}`,
    "next": `\u{B2E4}\u{C74C}`,
    "previous": `\u{C774}\u{C804}`,
    "selectedDateDescription": (args)=>`\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{B0A0}\u{C9DC} \u{BC94}\u{C704} \u{C120}\u{D0DD}\u{C744} \u{C2DC}\u{C791}\u{D558}\u{B824}\u{BA74} \u{D074}\u{B9AD}\u{D558}\u{C2ED}\u{C2DC}\u{C624}.`,
    "todayDate": (args)=>`\u{C624}\u{B298}, ${args.date}`,
    "todayDateSelected": (args)=>`\u{C624}\u{B298}, ${args.date} \u{C120}\u{D0DD}\u{B428}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"g6wB6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`Nuo ${args.startDate} iki ${args.endDate}`,
    "dateSelected": (args)=>`Pasirinkta ${args.date}`,
    "finishRangeSelectionPrompt": `Spustel\u{117}kite, kad baigtum\u{117}te pasirinkti dat\u{173} interval\u{105}`,
    "maximumDate": `Paskutin\u{117} galima data`,
    "minimumDate": `Pirmoji galima data`,
    "next": `Paskesnis`,
    "previous": `Ankstesnis`,
    "selectedDateDescription": (args)=>`Pasirinkta data: ${args.date}`,
    "selectedRangeDescription": (args)=>`Pasirinktas intervalas: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Spustel\u{117}kite, kad prad\u{117}tum\u{117}te pasirinkti dat\u{173} interval\u{105}`,
    "todayDate": (args)=>`\u{160}iandien, ${args.date}`,
    "todayDateSelected": (args)=>`\u{160}iandien, pasirinkta ${args.date}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6LD54":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`No ${args.startDate} l\u{12B}dz ${args.endDate}`,
    "dateSelected": (args)=>`Atlas\u{12B}ts: ${args.date}`,
    "finishRangeSelectionPrompt": `Noklik\u{161}\u{137}iniet, lai pabeigtu datumu diapazona atlasi`,
    "maximumDate": `P\u{113}d\u{113}jais pieejamais datums`,
    "minimumDate": `Pirmais pieejamais datums`,
    "next": `T\u{101}l\u{101}k`,
    "previous": `Atpaka\u{13C}`,
    "selectedDateDescription": (args)=>`Atlas\u{12B}tais datums: ${args.date}`,
    "selectedRangeDescription": (args)=>`Atlas\u{12B}tais diapazons: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Noklik\u{161}\u{137}iniet, lai s\u{101}ktu datumu diapazona atlasi`,
    "todayDate": (args)=>`\u{160}odien, ${args.date}`,
    "todayDateSelected": (args)=>`Atlas\u{12B}ta \u{161}odiena, ${args.date}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"flkhH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} til ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} valgt`,
    "finishRangeSelectionPrompt": `Klikk for \xe5 fullf\xf8re valg av datoomr\xe5de`,
    "maximumDate": `Siste tilgjengelige dato`,
    "minimumDate": `F\xf8rste tilgjengelige dato`,
    "next": `Neste`,
    "previous": `Forrige`,
    "selectedDateDescription": (args)=>`Valgt dato: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valgt omr\xe5de: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Klikk for \xe5 starte valg av datoomr\xe5de`,
    "todayDate": (args)=>`I dag, ${args.date}`,
    "todayDateSelected": (args)=>`I dag, ${args.date} valgt`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aHlxD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} tot ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} geselecteerd`,
    "finishRangeSelectionPrompt": `Klik om de selectie van het datumbereik te voltooien`,
    "maximumDate": `Laatste beschikbare datum`,
    "minimumDate": `Eerste beschikbare datum`,
    "next": `Volgende`,
    "previous": `Vorige`,
    "selectedDateDescription": (args)=>`Geselecteerde datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Geselecteerd bereik: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Klik om het datumbereik te selecteren`,
    "todayDate": (args)=>`Vandaag, ${args.date}`,
    "todayDateSelected": (args)=>`Vandaag, ${args.date} geselecteerd`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"46FG6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} do ${args.endDate}`,
    "dateSelected": (args)=>`Wybrano ${args.date}`,
    "finishRangeSelectionPrompt": `Kliknij, aby zako\u{144}czy\u{107} wyb\xf3r zakresu dat`,
    "maximumDate": `Ostatnia dost\u{119}pna data`,
    "minimumDate": `Pierwsza dost\u{119}pna data`,
    "next": `Dalej`,
    "previous": `Wstecz`,
    "selectedDateDescription": (args)=>`Wybrana data: ${args.date}`,
    "selectedRangeDescription": (args)=>`Wybrany zakres: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kliknij, aby rozpocz\u{105}\u{107} wyb\xf3r zakresu dat`,
    "todayDate": (args)=>`Dzisiaj, ${args.date}`,
    "todayDateSelected": (args)=>`Dzisiaj wybrano ${args.date}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"29n5T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} a ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} selecionado`,
    "finishRangeSelectionPrompt": `Clique para concluir a sele\xe7\xe3o do intervalo de datas`,
    "maximumDate": `\xdaltima data dispon\xedvel`,
    "minimumDate": `Primeira data dispon\xedvel`,
    "next": `Pr\xf3ximo`,
    "previous": `Anterior`,
    "selectedDateDescription": (args)=>`Data selecionada: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervalo selecionado: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Clique para iniciar a sele\xe7\xe3o do intervalo de datas`,
    "todayDate": (args)=>`Hoje, ${args.date}`,
    "todayDateSelected": (args)=>`Hoje, ${args.date} selecionado`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kz6MS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} a ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} selecionado`,
    "finishRangeSelectionPrompt": `Clique para terminar de selecionar o intervalo de datas`,
    "maximumDate": `\xdaltima data dispon\xedvel`,
    "minimumDate": `Primeira data dispon\xedvel`,
    "next": `Pr\xf3ximo`,
    "previous": `Anterior`,
    "selectedDateDescription": (args)=>`Data selecionada: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervalo selecionado: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Clique para come\xe7ar a selecionar o intervalo de datas`,
    "todayDate": (args)=>`Hoje, ${args.date}`,
    "todayDateSelected": (args)=>`Hoje, ${args.date} selecionado`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"b9kQ0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`De la ${args.startDate} p\xe2n\u{103} la ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} selectat\u{103}`,
    "finishRangeSelectionPrompt": `Ap\u{103}sa\u{163}i pentru a finaliza selec\u{163}ia razei pentru dat\u{103}`,
    "maximumDate": `Ultima dat\u{103} disponibil\u{103}`,
    "minimumDate": `Prima dat\u{103} disponibil\u{103}`,
    "next": `Urm\u{103}torul`,
    "previous": `\xcenainte`,
    "selectedDateDescription": (args)=>`Dat\u{103} selectat\u{103}: ${args.date}`,
    "selectedRangeDescription": (args)=>`Interval selectat: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Ap\u{103}sa\u{163}i pentru a \xeencepe selec\u{163}ia razei pentru dat\u{103}`,
    "todayDate": (args)=>`Ast\u{103}zi, ${args.date}`,
    "todayDateSelected": (args)=>`Azi, ${args.date} selectat\u{103}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j1z8P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`\u{421} ${args.startDate} \u{43F}\u{43E} ${args.endDate}`,
    "dateSelected": (args)=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${args.date}`,
    "finishRangeSelectionPrompt": `\u{429}\u{435}\u{43B}\u{43A}\u{43D}\u{438}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{438}\u{442}\u{44C} \u{432}\u{44B}\u{431}\u{43E}\u{440} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{430} \u{434}\u{430}\u{442}`,
    "maximumDate": `\u{41F}\u{43E}\u{441}\u{43B}\u{435}\u{434}\u{43D}\u{44F}\u{44F} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}`,
    "minimumDate": `\u{41F}\u{435}\u{440}\u{432}\u{430}\u{44F} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}`,
    "next": `\u{414}\u{430}\u{43B}\u{435}\u{435}`,
    "previous": `\u{41D}\u{430}\u{437}\u{430}\u{434}`,
    "selectedDateDescription": (args)=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{429}\u{435}\u{43B}\u{43A}\u{43D}\u{438}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43D}\u{430}\u{447}\u{430}\u{442}\u{44C} \u{432}\u{44B}\u{431}\u{43E}\u{440} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{430} \u{434}\u{430}\u{442}`,
    "todayDate": (args)=>`\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, ${args.date}`,
    "todayDateSelected": (args)=>`\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${args.date}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"41U2a":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`Od ${args.startDate} do ${args.endDate}`,
    "dateSelected": (args)=>`Vybrat\xfd d\xe1tum ${args.date}`,
    "finishRangeSelectionPrompt": `Kliknut\xedm dokon\u{10D}\xedte v\xfdber rozsahu d\xe1tumov`,
    "maximumDate": `Posledn\xfd dostupn\xfd d\xe1tum`,
    "minimumDate": `Prv\xfd dostupn\xfd d\xe1tum`,
    "next": `Nasleduj\xface`,
    "previous": `Predch\xe1dzaj\xface`,
    "selectedDateDescription": (args)=>`Vybrat\xfd d\xe1tum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Vybrat\xfd rozsah: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kliknut\xedm spust\xedte v\xfdber rozsahu d\xe1tumov`,
    "todayDate": (args)=>`Dnes ${args.date}`,
    "todayDateSelected": (args)=>`Vybrat\xfd dne\u{161}n\xfd d\xe1tum ${args.date}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bcyrM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} do ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} izbrano`,
    "finishRangeSelectionPrompt": `Kliknite za dokon\u{10D}anje izbire datumskega obsega`,
    "maximumDate": `Zadnji razpolo\u{17E}ljivi datum`,
    "minimumDate": `Prvi razpolo\u{17E}ljivi datum`,
    "next": `Naprej`,
    "previous": `Nazaj`,
    "selectedDateDescription": (args)=>`Izbrani datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Izbrano obmo\u{10D}je: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kliknite za za\u{10D}etek izbire datumskega obsega`,
    "todayDate": (args)=>`Danes, ${args.date}`,
    "todayDateSelected": (args)=>`Danes, ${args.date} izbrano`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aST23":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} do ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} izabran`,
    "finishRangeSelectionPrompt": `Kliknite da dovr\u{161}ite opseg izabranih datuma`,
    "maximumDate": `Zadnji raspolo\u{17E}ivi datum`,
    "minimumDate": `Prvi raspolo\u{17E}ivi datum`,
    "next": `Slede\u{107}i`,
    "previous": `Prethodni`,
    "selectedDateDescription": (args)=>`Izabrani datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Izabrani period: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kliknite da zapo\u{10D}nete opseg izabranih datuma`,
    "todayDate": (args)=>`Danas, ${args.date}`,
    "todayDateSelected": (args)=>`Danas, izabran ${args.date}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5ih3B":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} till ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} har valts`,
    "finishRangeSelectionPrompt": `Klicka f\xf6r att avsluta val av datumintervall`,
    "maximumDate": `Sista tillg\xe4ngliga datum`,
    "minimumDate": `F\xf6rsta tillg\xe4ngliga datum`,
    "next": `N\xe4sta`,
    "previous": `F\xf6reg\xe5ende`,
    "selectedDateDescription": (args)=>`Valt datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valt intervall: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Klicka f\xf6r att v\xe4lja datumintervall`,
    "todayDate": (args)=>`Idag, ${args.date}`,
    "todayDateSelected": (args)=>`Idag, ${args.date} har valts`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gqxTt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} - ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} se\xe7ildi`,
    "finishRangeSelectionPrompt": `Tarih aral\u{131}\u{11F}\u{131} se\xe7imini tamamlamak i\xe7in t\u{131}klay\u{131}n`,
    "maximumDate": `Son m\xfcsait tarih`,
    "minimumDate": `\u{130}lk m\xfcsait tarih`,
    "next": `Sonraki`,
    "previous": `\xd6nceki`,
    "selectedDateDescription": (args)=>`Se\xe7ilen Tarih: ${args.date}`,
    "selectedRangeDescription": (args)=>`Se\xe7ilen Aral\u{131}k: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Tarih aral\u{131}\u{11F}\u{131} se\xe7imini ba\u{15F}latmak i\xe7in t\u{131}klay\u{131}n`,
    "todayDate": (args)=>`Bug\xfcn, ${args.date}`,
    "todayDateSelected": (args)=>`Bug\xfcn, ${args.date} se\xe7ildi`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ixRVC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} \u{2014} ${args.endDate}`,
    "dateSelected": (args)=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${args.date}`,
    "finishRangeSelectionPrompt": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C}, \u{449}\u{43E}\u{431} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{438}\u{442}\u{438} \u{432}\u{438}\u{431}\u{456}\u{440} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{443} \u{434}\u{430}\u{442}`,
    "maximumDate": `\u{41E}\u{441}\u{442}\u{430}\u{43D}\u{43D}\u{44F} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
    "minimumDate": `\u{41F}\u{435}\u{440}\u{448}\u{430} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
    "next": `\u{41D}\u{430}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{438}\u{439}`,
    "previous": `\u{41F}\u{43E}\u{43F}\u{435}\u{440}\u{435}\u{434}\u{43D}\u{456}\u{439}`,
    "selectedDateDescription": (args)=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C}, \u{449}\u{43E}\u{431} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{438} \u{432}\u{438}\u{431}\u{456}\u{440} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{443} \u{434}\u{430}\u{442}`,
    "todayDate": (args)=>`\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, ${args.date}`,
    "todayDateSelected": (args)=>`\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${args.date}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7X5B0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} \u{81F3} ${args.endDate}`,
    "dateSelected": (args)=>`\u{5DF2}\u{9009}\u{62E9} ${args.date}`,
    "finishRangeSelectionPrompt": `\u{5355}\u{51FB}\u{4EE5}\u{5B8C}\u{6210}\u{9009}\u{62E9}\u{65E5}\u{671F}\u{8303}\u{56F4}`,
    "maximumDate": `\u{6700}\u{540E}\u{4E00}\u{4E2A}\u{53EF}\u{7528}\u{65E5}\u{671F}`,
    "minimumDate": `\u{7B2C}\u{4E00}\u{4E2A}\u{53EF}\u{7528}\u{65E5}\u{671F}`,
    "next": `\u{4E0B}\u{4E00}\u{9875}`,
    "previous": `\u{4E0A}\u{4E00}\u{9875}`,
    "selectedDateDescription": (args)=>`\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${args.date}`,
    "selectedRangeDescription": (args)=>`\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{5355}\u{51FB}\u{4EE5}\u{5F00}\u{59CB}\u{9009}\u{62E9}\u{65E5}\u{671F}\u{8303}\u{56F4}`,
    "todayDate": (args)=>`\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${args.date}`,
    "todayDateSelected": (args)=>`\u{5DF2}\u{9009}\u{62E9}\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${args.date}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cAUCh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dateRange": (args)=>`${args.startDate} \u{81F3} ${args.endDate}`,
    "dateSelected": (args)=>`\u{5DF2}\u{9078}\u{53D6} ${args.date}`,
    "finishRangeSelectionPrompt": `\u{6309}\u{4E00}\u{4E0B}\u{4EE5}\u{5B8C}\u{6210}\u{9078}\u{53D6}\u{65E5}\u{671F}\u{7BC4}\u{570D}`,
    "maximumDate": `\u{6700}\u{5F8C}\u{4E00}\u{500B}\u{53EF}\u{7528}\u{65E5}\u{671F}`,
    "minimumDate": `\u{7B2C}\u{4E00}\u{500B}\u{53EF}\u{7528}\u{65E5}\u{671F}`,
    "next": `\u{4E0B}\u{4E00}\u{9801}`,
    "previous": `\u{4E0A}\u{4E00}\u{9801}`,
    "selectedDateDescription": (args)=>`\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${args.date}`,
    "selectedRangeDescription": (args)=>`\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{6309}\u{4E00}\u{4E0B}\u{4EE5}\u{958B}\u{59CB}\u{9078}\u{53D6}\u{65E5}\u{671F}\u{7BC4}\u{570D}`,
    "todayDate": (args)=>`\u{4ECA}\u{5929}\u{FF0C}${args.date}`,
    "todayDateSelected": (args)=>`\u{5DF2}\u{9078}\u{53D6}\u{4ECA}\u{5929}\u{FF0C}${args.date}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3t5H7":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a calendar cell component.
 * A calendar cell displays a date cell within a calendar grid which can be selected by the user.
 */ parcelHelpers.export(exports, "useCalendarCell", ()=>useCalendarCell);
var _date = require("@internationalized/date");
var _focusWithoutScrolling = require("../utils/focusWithoutScrolling");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _utils = require("./utils");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _getScrollParent = require("../utils/getScrollParent");
var _indexJs = require("../../intl/calendar/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mergeProps = require("../utils/mergeProps");
var _scrollIntoView = require("../utils/scrollIntoView");
var _useDateFormatter = require("../i18n/useDateFormatter");
var _useDeepMemo = require("../utils/useDeepMemo");
var _useDescription = require("../utils/useDescription");
var _react = require("react");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
var _usePress = require("../interactions/usePress");
function useCalendarCell(props, state, ref) {
    let { date, isDisabled } = props;
    let { errorMessageId, selectedDateDescription } = (0, _utils.hookData).get(state);
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/calendar');
    let dateFormatter = (0, _useDateFormatter.useDateFormatter)({
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        era: (0, _utils.getEraFormat)(date),
        timeZone: state.timeZone
    });
    let isFocused = state.isCellFocused(date) && !props.isOutsideMonth;
    isDisabled = isDisabled || state.isCellDisabled(date) || !!props.isOutsideMonth;
    let isUnavailable = state.isCellUnavailable(date);
    let isSelectable = !isDisabled && !isUnavailable;
    let isSelected = state.isSelected(date) && isSelectable;
    let isInvalid = false;
    if (state.isValueInvalid) {
        if ('highlightedRange' in state) isInvalid = !state.anchorDate && state.highlightedRange != null && date.compare(state.highlightedRange.start) >= 0 && date.compare(state.highlightedRange.end) <= 0;
        else if (Array.isArray(state.value)) isInvalid = state.value.some((value)=>(0, _date.isSameDay)(value, date));
        else if (state.value) isInvalid = (0, _date.isSameDay)(state.value, date);
    }
    if (isInvalid && !isDisabled) isSelected = true;
    // For performance, reuse the same date object as before if the new date prop is the same.
    // This allows subsequent useMemo results to be reused.
    date = (0, _useDeepMemo.useDeepMemo)(date, (0, _date.isEqualDay));
    // oxlint-disable-next-line react/react-compiler
    let nativeDate = (0, _react.useMemo)(()=>date.toDate(state.timeZone), [
        date,
        state.timeZone
    ]);
    // aria-label should be localize Day of week, Month, Day and Year without Time.
    let isDateToday = (0, _date.isToday)(date, state.timeZone);
    let label = (0, _react.useMemo)(()=>{
        let label = '';
        // If this is a range calendar, add a description of the full selected range
        // to the first and last selected date.
        if ('highlightedRange' in state && state.value && !state.anchorDate && ((0, _date.isSameDay)(date, state.value.start) || (0, _date.isSameDay)(date, state.value.end))) label = selectedDateDescription + ', ';
        label += dateFormatter.format(nativeDate);
        if (isDateToday) // If date is today, set appropriate string depending on selected state:
        label = stringFormatter.format(isSelected ? 'todayDateSelected' : 'todayDate', {
            date: label
        });
        else if (isSelected) // If date is selected but not today:
        label = stringFormatter.format('dateSelected', {
            date: label
        });
        if (state.minValue && (0, _date.isSameDay)(date, state.minValue)) label += ', ' + stringFormatter.format('minimumDate');
        else if (state.maxValue && (0, _date.isSameDay)(date, state.maxValue)) label += ', ' + stringFormatter.format('maximumDate');
        return label;
    }, [
        dateFormatter,
        nativeDate,
        stringFormatter,
        // oxlint-disable-next-line react/react-compiler
        isSelected,
        isDateToday,
        // oxlint-disable-next-line react/react-compiler
        date,
        state,
        selectedDateDescription
    ]);
    // When a cell is focused and this is a range calendar, add a prompt to help
    // screenreader users know that they are in a range selection mode.
    let rangeSelectionPrompt = '';
    if ('anchorDate' in state && isFocused && !state.isReadOnly && isSelectable) {
        // If selection has started add "click to finish selecting range"
        if (state.anchorDate) rangeSelectionPrompt = stringFormatter.format('finishRangeSelectionPrompt');
        else rangeSelectionPrompt = stringFormatter.format('startRangeSelectionPrompt');
    }
    let descriptionProps = (0, _useDescription.useDescription)(rangeSelectionPrompt);
    let isAnchorPressed = (0, _react.useRef)(false);
    let isRangeBoundaryPressed = (0, _react.useRef)(false);
    let touchDragTimerRef = (0, _react.useRef)(undefined);
    let { pressProps, isPressed } = (0, _usePress.usePress)({
        // When dragging to select a range, we don't want dragging over the original anchor
        // again to trigger onPressStart. Cancel presses immediately when the pointer exits.
        shouldCancelOnPointerExit: 'anchorDate' in state && !!state.anchorDate,
        preventFocusOnPress: true,
        isDisabled: !isSelectable || state.isReadOnly,
        onPressStart (e) {
            if (state.isReadOnly) {
                state.setFocusedDate(date);
                state.setFocused(true);
                return;
            }
            if ('highlightedRange' in state && !state.anchorDate && (e.pointerType === 'mouse' || e.pointerType === 'touch')) {
                // Allow dragging the start or end date of a range to modify it
                // rather than starting a new selection.
                // Don't allow dragging when invalid, or weird jumping behavior may occur as date ranges
                // are constrained to available dates. The user will need to select a new range in this case.
                if (state.highlightedRange && !isInvalid) {
                    if ((0, _date.isSameDay)(date, state.highlightedRange.start)) {
                        state.setAnchorDate(state.highlightedRange.end);
                        state.setFocusedDate(date);
                        state.setFocused(true);
                        state.setDragging(true);
                        isRangeBoundaryPressed.current = true;
                        return;
                    } else if ((0, _date.isSameDay)(date, state.highlightedRange.end)) {
                        state.setAnchorDate(state.highlightedRange.start);
                        state.setFocusedDate(date);
                        state.setFocused(true);
                        state.setDragging(true);
                        isRangeBoundaryPressed.current = true;
                        return;
                    }
                }
                let startDragging = ()=>{
                    state.setDragging(true);
                    touchDragTimerRef.current = undefined;
                    state.selectDate(date);
                    state.setFocusedDate(date);
                    state.setFocused(true);
                    isAnchorPressed.current = true;
                };
                // Start selection on mouse/touch down so users can drag to select a range.
                // On touch, delay dragging to determine if the user really meant to scroll.
                if (e.pointerType === 'touch') touchDragTimerRef.current = setTimeout(startDragging, 200);
                else startDragging();
            }
        },
        onPressEnd () {
            isRangeBoundaryPressed.current = false;
            isAnchorPressed.current = false;
            clearTimeout(touchDragTimerRef.current);
            touchDragTimerRef.current = undefined;
        },
        onPress () {
            // For non-range selection, always select on press up.
            if (!('anchorDate' in state) && !state.isReadOnly) {
                state.selectDate(date);
                state.setFocusedDate(date);
                state.setFocused(true);
            }
        },
        onPressUp (e) {
            if (state.isReadOnly) return;
            // If the user tapped quickly, the date won't be selected yet and the
            // timer will still be in progress. In this case, select the date on touch up.
            // Timer is cleared in onPressEnd.
            if ('anchorDate' in state && touchDragTimerRef.current) {
                state.selectDate(date);
                state.setFocusedDate(date);
                state.setFocused(true);
            }
            if ('anchorDate' in state) {
                if (isRangeBoundaryPressed.current) // When clicking on the start or end date of an already selected range,
                // start a new selection on press up to also allow dragging the date to
                // change the existing range.
                state.setAnchorDate(date);
                else if (state.anchorDate && !isAnchorPressed.current) {
                    // When releasing a drag or pressing the end date of a range, select it.
                    state.selectDate(date);
                    state.setFocusedDate(date);
                    state.setFocused(true);
                } else if (e.pointerType === 'keyboard' && !state.anchorDate) {
                    // For range selection, auto-advance the focused date by one if using keyboard.
                    // This gives an indication that you're selecting a range rather than a single date.
                    // For mouse, this is unnecessary because users will see the indication on hover. For screen readers,
                    // there will be an announcement to "click to finish selecting range" (above).
                    state.selectDate(date);
                    state.focusNearestAvailableDate(date);
                } else if (e.pointerType === 'virtual') {
                    // For screen readers, just select the date on click.
                    state.selectDate(date);
                    state.setFocusedDate(date);
                    state.setFocused(true);
                }
            }
        }
    });
    let tabIndex = undefined;
    if (!isDisabled) tabIndex = (0, _date.isSameDay)(date, state.focusedDate) ? 0 : -1;
    // Focus the button in the DOM when the state updates.
    (0, _react.useEffect)(()=>{
        if (isFocused && ref.current) {
            (0, _focusWithoutScrolling.focusWithoutScrolling)(ref.current);
            // Scroll into view if navigating with a keyboard, otherwise
            // try not to shift the view under the user's mouse/finger.
            // If in a overlay, scrollIntoViewport will only cause scrolling
            // up to the overlay scroll body to prevent overlay shifting.
            // Also only scroll into view if the cell actually got focused.
            // There are some cases where the cell might be disabled or inside,
            // an inert container and we don't want to scroll then.
            if ((0, _useFocusVisible.getInteractionModality)() !== 'pointer' && (0, _domfunctions.getActiveElement)() === ref.current) (0, _scrollIntoView.scrollIntoViewport)(ref.current, {
                containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
            });
        }
    }, [
        isFocused,
        ref
    ]);
    let cellDateFormatter = (0, _useDateFormatter.useDateFormatter)({
        day: 'numeric',
        timeZone: state.timeZone,
        calendar: date.calendar.identifier
    });
    let formattedDate = (0, _react.useMemo)(()=>cellDateFormatter.formatToParts(nativeDate).find((part)=>part.type === 'day').value, [
        cellDateFormatter,
        nativeDate
    ]);
    return {
        cellProps: {
            role: 'gridcell',
            'aria-disabled': !isSelectable || undefined,
            'aria-selected': isSelected || undefined,
            'aria-invalid': isInvalid || undefined
        },
        buttonProps: (0, _mergeProps.mergeProps)(pressProps, {
            onFocus () {
                if (!isDisabled) {
                    state.setFocusedDate(date);
                    state.setFocused(true);
                }
            },
            tabIndex,
            role: 'button',
            'aria-disabled': !isSelectable || undefined,
            'aria-label': label,
            'aria-invalid': isInvalid || undefined,
            'aria-describedby': [
                isInvalid ? errorMessageId : undefined,
                descriptionProps['aria-describedby']
            ].filter(Boolean).join(' ') || undefined,
            onPointerEnter (e) {
                // Highlight the date on hover or drag over a date when selecting a range.
                if ('highlightDate' in state && (e.pointerType !== 'touch' || state.isDragging) && isSelectable) state.highlightDate(date);
            },
            onPointerDown (e) {
                // This is necessary on touch devices to allow dragging
                // outside the original pressed element.
                // (JSDOM does not support this)
                let target = (0, _domfunctions.getEventTarget)(e);
                if (target instanceof HTMLElement && 'releasePointerCapture' in target) {
                    if ('hasPointerCapture' in target) {
                        if (target.hasPointerCapture(e.pointerId)) target.releasePointerCapture(e.pointerId);
                    } else target.releasePointerCapture(e.pointerId);
                }
            },
            onContextMenu (e) {
                // Prevent context menu on long press.
                e.preventDefault();
            }
        }),
        isPressed,
        isFocused,
        isSelected,
        isDisabled,
        isUnavailable,
        isOutsideVisibleRange: date.compare(state.visibleRange.start) < 0 || date.compare(state.visibleRange.end) > 0,
        isInvalid,
        formattedDate
    };
}

},{"@internationalized/date":"aHOFb","../utils/focusWithoutScrolling":"gcZ3w","../utils/shadowdom/DOMFunctions":"8kfpz","./utils":"gGPA0","../interactions/useFocusVisible":"aBfUW","../utils/getScrollParent":"NRzeg","../../intl/calendar/index.js":"k2790","../utils/mergeProps":"jycxS","../utils/scrollIntoView":"5N7nL","../i18n/useDateFormatter":"ey0mQ","../utils/useDeepMemo":"h7TGx","../utils/useDescription":"1bivM","react":"gOP0N","../i18n/useLocalizedStringFormatter":"8lll3","../interactions/usePress":"3S2KR","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7NqAg":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a calendar grid component.
 * A calendar grid displays a single grid of days within a calendar or range calendar which
 * can be keyboard navigated and selected by the user.
 */ parcelHelpers.export(exports, "useCalendarGrid", ()=>useCalendarGrid);
var _date = require("@internationalized/date");
var _utils = require("./utils");
var _mergeProps = require("../utils/mergeProps");
var _useDateFormatter = require("../i18n/useDateFormatter");
var _useKeyboard = require("../interactions/useKeyboard");
var _useLabels = require("../utils/useLabels");
var _i18Nprovider = require("../i18n/I18nProvider");
var _react = require("react");
function useCalendarGrid(props, state) {
    let { startDate = state.visibleRange.start, endDate = state.visibleRange.end, firstDayOfWeek } = props;
    let { direction } = (0, _i18Nprovider.useLocale)();
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            End: ()=>{
                state.focusSectionEnd();
            },
            Home: ()=>{
                state.focusSectionStart();
            },
            Escape: ()=>{
                // Cancel the selection.
                if ('setAnchorDate' in state) state.setAnchorDate(null);
                return false; // TODO: is this really correct? or should it return true when we cancel and only propagate if there's nothing to do
            }
        }
    });
    let { keyboardProps: repeatKeyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            Enter: ()=>{
                state.selectFocusedDate();
            },
            ' ': ()=>{
                state.selectFocusedDate();
            },
            PageUp: ()=>{
                state.focusPreviousSection();
            },
            'Shift+PageUp': ()=>{
                state.focusPreviousSection(true);
            },
            PageDown: ()=>{
                state.focusNextSection();
            },
            'Shift+PageDown': ()=>{
                state.focusNextSection(true);
            },
            ArrowLeft: ()=>{
                if (direction === 'rtl') state.focusNextDay();
                else state.focusPreviousDay();
            },
            ArrowUp: ()=>{
                state.focusPreviousRow();
            },
            ArrowRight: ()=>{
                if (direction === 'rtl') state.focusPreviousDay();
                else state.focusNextDay();
            },
            ArrowDown: ()=>{
                state.focusNextRow();
            }
        },
        allowRepeats: true
    });
    let visibleRangeDescription = (0, _utils.useVisibleRangeDescription)(startDate, endDate, state.timeZone, true);
    let { ariaLabel, ariaLabelledBy } = (0, _utils.hookData).get(state);
    let labelProps = (0, _useLabels.useLabels)({
        'aria-label': [
            ariaLabel,
            visibleRangeDescription
        ].filter(Boolean).join(', '),
        'aria-labelledby': ariaLabelledBy
    });
    let dayFormatter = (0, _useDateFormatter.useDateFormatter)({
        weekday: props.weekdayStyle || 'narrow',
        timeZone: state.timeZone
    });
    let { locale } = (0, _i18Nprovider.useLocale)();
    let weekDays = (0, _react.useMemo)(()=>{
        let isDayView = state.visibleDuration.days && state.visibleDuration.days < 7;
        let weekStart = isDayView ? startDate : (0, _date.startOfWeek)((0, _date.today)(state.timeZone), locale, firstDayOfWeek);
        let days = isDayView ? state.visibleDuration.days : 7;
        return [
            ...new Array(days).keys()
        ].map((index)=>{
            let date = weekStart.add({
                days: index
            });
            let dateDay = date.toDate(state.timeZone);
            return dayFormatter.format(dateDay);
        });
    }, [
        locale,
        state.timeZone,
        dayFormatter,
        firstDayOfWeek,
        startDate,
        state.visibleDuration.days
    ]);
    let weeksInMonth = state.getWeeksInMonth(startDate);
    return {
        gridProps: (0, _mergeProps.mergeProps)(labelProps, {
            role: 'grid',
            'aria-readonly': state.isReadOnly || undefined,
            'aria-disabled': state.isDisabled || undefined,
            'aria-multiselectable': 'highlightedRange' in state || state.selectionMode === 'multiple' || undefined,
            onFocus: ()=>state.setFocused(true),
            onBlur: ()=>state.setFocused(false)
        }, keyboardProps, repeatKeyboardProps),
        headerProps: {
            // Column headers are hidden to screen readers to make navigating with a touch screen reader easier.
            // The day names are already included in the label of each cell, so there's no need to announce them twice.
            'aria-hidden': true
        },
        weekDays,
        weeksInMonth
    };
}

},{"@internationalized/date":"aHOFb","./utils":"gGPA0","../utils/mergeProps":"jycxS","../i18n/useDateFormatter":"ey0mQ","../interactions/useKeyboard":"aHm7i","../utils/useLabels":"8ZwLJ","../i18n/I18nProvider":"czGuc","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"atJAo":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "isInvalid", ()=>isInvalid);
parcelHelpers.export(exports, "alignCenter", ()=>alignCenter);
parcelHelpers.export(exports, "alignStart", ()=>alignStart);
parcelHelpers.export(exports, "alignEnd", ()=>alignEnd);
parcelHelpers.export(exports, "constrainStart", ()=>constrainStart);
parcelHelpers.export(exports, "constrainValue", ()=>constrainValue);
parcelHelpers.export(exports, "previousAvailableDate", ()=>previousAvailableDate);
parcelHelpers.export(exports, "isEqualDuration", ()=>isEqualDuration);
var _date = require("@internationalized/date");
function isInvalid(date, minValue, maxValue) {
    return minValue != null && date.compare(minValue) < 0 || maxValue != null && date.compare(maxValue) > 0;
}
function alignCenter(date, duration, locale, minValue, maxValue) {
    let halfDuration = {};
    for(let key in duration){
        halfDuration[key] = Math.floor(duration[key] / 2);
        if (halfDuration[key] > 0 && duration[key] % 2 === 0) halfDuration[key]--;
    }
    let aligned = alignStart(date, duration, locale).subtract(halfDuration);
    return constrainStart(date, aligned, duration, locale, minValue, maxValue);
}
function alignStart(date, duration, locale, minValue, maxValue) {
    // align to the start of the largest unit
    let aligned = date;
    if (duration.years) aligned = (0, _date.startOfYear)(date);
    else if (duration.months) aligned = (0, _date.startOfMonth)(date);
    else if (duration.weeks || duration.days && duration.days > 7) aligned = (0, _date.startOfWeek)(date, locale);
    return constrainStart(date, aligned, duration, locale, minValue, maxValue);
}
function alignEnd(date, duration, locale, minValue, maxValue) {
    let d = {
        ...duration
    };
    // subtract 1 from the smallest unit
    if (d.days) d.days--;
    else if (d.weeks) d.weeks--;
    else if (d.months) d.months--;
    else if (d.years) d.years--;
    let aligned = alignStart(date, duration, locale).subtract(d);
    return constrainStart(date, aligned, duration, locale, minValue, maxValue);
}
function constrainStart(date, aligned, duration, locale, minValue, maxValue) {
    if (minValue && date.compare(minValue) >= 0) {
        let newDate = (0, _date.maxDate)(aligned, alignStart((0, _date.toCalendarDate)(minValue), duration, locale));
        if (newDate) aligned = newDate;
    }
    if (maxValue && date.compare(maxValue) <= 0) {
        let newDate = (0, _date.minDate)(aligned, alignEnd((0, _date.toCalendarDate)(maxValue), duration, locale));
        if (newDate) aligned = newDate;
    }
    return aligned;
}
function constrainValue(date, minValue, maxValue) {
    if (minValue) {
        let newDate = (0, _date.maxDate)(date, (0, _date.toCalendarDate)(minValue));
        if (newDate) date = newDate;
    }
    if (maxValue) {
        let newDate = (0, _date.minDate)(date, (0, _date.toCalendarDate)(maxValue));
        if (newDate) date = newDate;
    }
    return date;
}
function previousAvailableDate(date, minValue, isDateUnavailable) {
    if (!isDateUnavailable) return date;
    while(date.compare(minValue) >= 0 && isDateUnavailable(date))date = date.subtract({
        days: 1
    });
    if (date.compare(minValue) >= 0) return date;
    return null;
}
function isEqualDuration(a, b) {
    if (a === b) return true;
    return a.days === b.days && a.weeks === b.weeks && a.months === b.months && a.years === b.years;
}

},{"@internationalized/date":[["maxDate","aHOFb"],["minDate","aHOFb"],["startOfMonth","aHOFb"],["startOfWeek","aHOFb"],["startOfYear","aHOFb"],["toCalendarDate","9JPzq"]],"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jmx9N":[function(require,module,exports,__globalThis) {
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
 * Provides state management for a calendar component.
 * A calendar displays one or more date grids and allows users to select a single date.
 */ parcelHelpers.export(exports, "useCalendarState", ()=>useCalendarState);
var _utils = require("./utils");
var _date = require("@internationalized/date");
var _useControlledState = require("../utils/useControlledState");
var _react = require("react");
function useCalendarState(props) {
    let defaultFormatter = (0, _react.useMemo)(()=>new (0, _date.DateFormatter)(props.locale), [
        props.locale
    ]);
    let resolvedOptions = (0, _react.useMemo)(()=>defaultFormatter.resolvedOptions(), [
        defaultFormatter
    ]);
    let { locale, createCalendar, visibleDuration = {
        months: 1
    }, minValue, maxValue, selectionAlignment, isDateUnavailable, pageBehavior = 'visible', selectionMode = 'single', firstDayOfWeek, weeksInMonth } = props;
    let calendar = (0, _react.useMemo)(()=>createCalendar(resolvedOptions.calendar), [
        createCalendar,
        resolvedOptions.calendar
    ]);
    let [value, setControlledValue] = (0, _useControlledState.useControlledState)(props.value, props.defaultValue ?? null, props.onChange);
    let calendarDateValue = (0, _react.useMemo)(()=>{
        if (Array.isArray(value)) return value.map((value)=>(0, _date.toCalendar)((0, _date.toCalendarDate)(value), calendar));
        else return value ? (0, _date.toCalendar)((0, _date.toCalendarDate)(value), calendar) : null;
    }, [
        value,
        calendar
    ]);
    let timeZone = (0, _react.useMemo)(()=>{
        let val = Array.isArray(value) ? value[0] : value;
        return val && 'timeZone' in val ? val.timeZone : resolvedOptions.timeZone;
    }, [
        value,
        resolvedOptions.timeZone
    ]);
    let focusedCalendarDate = (0, _react.useMemo)(()=>props.focusedValue ? (0, _utils.constrainValue)((0, _date.toCalendar)((0, _date.toCalendarDate)(props.focusedValue), calendar), minValue, maxValue) : undefined, [
        props.focusedValue,
        calendar,
        minValue,
        maxValue
    ]);
    let defaultFocusedCalendarDate = (0, _react.useMemo)(()=>{
        if (props.defaultFocusedValue) return (0, _utils.constrainValue)((0, _date.toCalendar)((0, _date.toCalendarDate)(props.defaultFocusedValue), calendar), minValue, maxValue);
        if (calendarDateValue) return (0, _utils.constrainValue)(Array.isArray(calendarDateValue) ? calendarDateValue[0] : calendarDateValue, minValue, maxValue);
        return (0, _utils.constrainValue)((0, _date.toCalendar)((0, _date.today)(timeZone), calendar), minValue, maxValue);
    }, [
        props.defaultFocusedValue,
        calendarDateValue,
        timeZone,
        calendar,
        minValue,
        maxValue
    ]);
    let [focusedDate, setFocusedDate] = (0, _useControlledState.useControlledState)(focusedCalendarDate, defaultFocusedCalendarDate, props.onFocusChange);
    let getStartDate = ()=>{
        switch(selectionAlignment){
            case 'start':
                return (0, _utils.alignStart)(focusedDate, visibleDuration, locale, minValue, maxValue);
            case 'end':
                return (0, _utils.alignEnd)(focusedDate, visibleDuration, locale, minValue, maxValue);
            case 'center':
            default:
                return (0, _utils.alignCenter)(focusedDate, visibleDuration, locale, minValue, maxValue);
        }
    };
    let [startDate, setStartDate] = (0, _react.useState)(getStartDate);
    let [isFocused, setFocused] = (0, _react.useState)(props.autoFocus || false);
    let [lastVisibleDuration, setLastVisibleDuration] = (0, _react.useState)(visibleDuration);
    if (!(0, _utils.isEqualDuration)(visibleDuration, lastVisibleDuration)) {
        setLastVisibleDuration(visibleDuration);
        setStartDate(getStartDate());
    }
    let endDate = (0, _react.useMemo)(()=>{
        let duration = {
            ...visibleDuration
        };
        if (duration.days) duration.days--;
        else duration.days = -1;
        return startDate.add(duration);
    }, [
        startDate,
        visibleDuration
    ]);
    // Reset focused date and visible range when calendar changes.
    let [lastCalendar, setLastCalendar] = (0, _react.useState)(calendar);
    if (!(0, _date.isEqualCalendar)(calendar, lastCalendar)) {
        let newFocusedDate = (0, _date.toCalendar)(focusedDate, calendar);
        setStartDate((0, _utils.alignCenter)(newFocusedDate, visibleDuration, locale, minValue, maxValue));
        setFocusedDate(newFocusedDate);
        setLastCalendar(calendar);
    }
    if ((0, _utils.isInvalid)(focusedDate, minValue, maxValue)) // If the focused date was moved to an invalid value, it can't be focused, so constrain it.
    setFocusedDate((0, _utils.constrainValue)(focusedDate, minValue, maxValue));
    else if (focusedDate.compare(startDate) < 0) setStartDate((0, _utils.alignEnd)(focusedDate, visibleDuration, locale, minValue, maxValue));
    else if (focusedDate.compare(endDate) > 0) setStartDate((0, _utils.alignStart)(focusedDate, visibleDuration, locale, minValue, maxValue));
    // Sets focus to a specific cell date
    function focusCell(date) {
        date = (0, _utils.constrainValue)(date, minValue, maxValue);
        setFocusedDate(date);
    }
    function normalizeValue(newValue) {
        let constrained = (0, _utils.constrainValue)(newValue, minValue, maxValue);
        let lowerBound = minValue ?? (0, _date.minDate)(constrained, startDate);
        let prev = (0, _utils.previousAvailableDate)(constrained, lowerBound, isDateUnavailable);
        if (!prev) return null;
        // The display calendar should not have any effect on the emitted value.
        // Emit dates in the same calendar as the original value, if any, otherwise gregorian.
        let baseValue = Array.isArray(value) ? value[0] : value;
        let calendarValue = (0, _date.toCalendar)(prev, baseValue?.calendar || new (0, _date.GregorianCalendar)());
        // Preserve time if the input value had one.
        if (baseValue && 'hour' in baseValue) return baseValue.set(calendarValue);
        return calendarValue;
    }
    function setValue(newValue) {
        if (!props.isDisabled && !props.isReadOnly) {
            if (newValue === null) {
                setControlledValue(selectionMode === 'multiple' ? [] : null);
                return;
            }
            if (Array.isArray(newValue)) setControlledValue(newValue.map(normalizeValue).filter(Boolean));
            else {
                let localValue = normalizeValue(newValue);
                if (localValue) setControlledValue(localValue);
            }
        }
    }
    let isUnavailable = (0, _react.useMemo)(()=>{
        if (!calendarDateValue) return false;
        if (Array.isArray(calendarDateValue)) return calendarDateValue.some((date)=>isDateUnavailable?.(date) || (0, _utils.isInvalid)(date, minValue, maxValue));
        return isDateUnavailable?.(calendarDateValue) || (0, _utils.isInvalid)(calendarDateValue, minValue, maxValue);
    }, [
        calendarDateValue,
        isDateUnavailable,
        minValue,
        maxValue
    ]);
    let isValueInvalid = props.isInvalid || props.validationState === 'invalid' || isUnavailable;
    let validationState = isValueInvalid ? 'invalid' : null;
    let pageDuration = (0, _react.useMemo)(()=>{
        if (pageBehavior === 'visible') return visibleDuration;
        return unitDuration(visibleDuration);
    }, [
        pageBehavior,
        visibleDuration
    ]);
    return {
        isDisabled: props.isDisabled ?? false,
        isReadOnly: props.isReadOnly ?? false,
        value: calendarDateValue,
        setValue: setValue,
        selectionMode,
        visibleDuration,
        visibleRange: {
            start: startDate,
            end: endDate
        },
        minValue,
        maxValue,
        focusedDate,
        timeZone,
        validationState,
        isValueInvalid,
        setFocusedDate (date) {
            focusCell(date);
        },
        focusNextDay () {
            focusCell(focusedDate.add({
                days: 1
            }));
        },
        focusPreviousDay () {
            focusCell(focusedDate.subtract({
                days: 1
            }));
        },
        focusNextRow () {
            if (visibleDuration.days) this.focusNextPage();
            else if (visibleDuration.weeks || visibleDuration.months || visibleDuration.years) focusCell(focusedDate.add({
                weeks: 1
            }));
        },
        focusPreviousRow () {
            if (visibleDuration.days) this.focusPreviousPage();
            else if (visibleDuration.weeks || visibleDuration.months || visibleDuration.years) focusCell(focusedDate.subtract({
                weeks: 1
            }));
        },
        focusNextPage () {
            let start = startDate.add(pageDuration);
            setFocusedDate((0, _utils.constrainValue)(focusedDate.add(pageDuration), minValue, maxValue));
            setStartDate((0, _utils.alignStart)((0, _utils.constrainStart)(focusedDate, start, pageDuration, locale, minValue, maxValue), pageDuration, locale));
        },
        focusPreviousPage () {
            let start = startDate.subtract(pageDuration);
            setFocusedDate((0, _utils.constrainValue)(focusedDate.subtract(pageDuration), minValue, maxValue));
            setStartDate((0, _utils.alignStart)((0, _utils.constrainStart)(focusedDate, start, pageDuration, locale, minValue, maxValue), pageDuration, locale));
        },
        focusSectionStart () {
            if (visibleDuration.days) focusCell(startDate);
            else if (visibleDuration.weeks) focusCell((0, _date.startOfWeek)(focusedDate, locale));
            else if (visibleDuration.months || visibleDuration.years) focusCell((0, _date.startOfMonth)(focusedDate));
        },
        focusSectionEnd () {
            if (visibleDuration.days) focusCell(endDate);
            else if (visibleDuration.weeks) focusCell((0, _date.endOfWeek)(focusedDate, locale));
            else if (visibleDuration.months || visibleDuration.years) focusCell((0, _date.endOfMonth)(focusedDate));
        },
        focusNextSection (larger) {
            if (!larger && !visibleDuration.days) {
                focusCell(focusedDate.add(unitDuration(visibleDuration)));
                return;
            }
            if (visibleDuration.days) this.focusNextPage();
            else if (visibleDuration.weeks) focusCell(focusedDate.add({
                months: 1
            }));
            else if (visibleDuration.months || visibleDuration.years) focusCell(focusedDate.add({
                years: 1
            }));
        },
        focusPreviousSection (larger) {
            if (!larger && !visibleDuration.days) {
                focusCell(focusedDate.subtract(unitDuration(visibleDuration)));
                return;
            }
            if (visibleDuration.days) this.focusPreviousPage();
            else if (visibleDuration.weeks) focusCell(focusedDate.subtract({
                months: 1
            }));
            else if (visibleDuration.months || visibleDuration.years) focusCell(focusedDate.subtract({
                years: 1
            }));
        },
        selectFocusedDate () {
            if (!(isDateUnavailable && isDateUnavailable(focusedDate))) this.selectDate(focusedDate);
        },
        selectDate (date) {
            if (props.isDisabled || props.isReadOnly) return;
            if (selectionMode === 'multiple' && date != null) {
                let newDate = normalizeValue(date);
                if (!newDate) return;
                let baseValue = [];
                if (Array.isArray(value)) baseValue = value;
                else if (value != null) baseValue = [
                    value
                ];
                let index = baseValue.findIndex((value)=>(0, _date.isSameDay)(value, newDate));
                let newValue = index >= 0 ? baseValue.slice(0, index).concat(baseValue.slice(index + 1)) : [
                    ...baseValue,
                    newDate
                ];
                setControlledValue(newValue);
            } else setValue(date);
        },
        isFocused,
        setFocused,
        isInvalid (date) {
            return (0, _utils.isInvalid)(date, minValue, maxValue);
        },
        isSelected (date) {
            if (!calendarDateValue || this.isCellDisabled(date) || this.isCellUnavailable(date)) return false;
            return Array.isArray(calendarDateValue) ? calendarDateValue.some((value)=>(0, _date.isSameDay)(value, date)) : (0, _date.isSameDay)(date, calendarDateValue);
        },
        isCellFocused (date) {
            return isFocused && focusedDate && (0, _date.isSameDay)(date, focusedDate);
        },
        isCellDisabled (date) {
            return props.isDisabled || date.compare(startDate) < 0 || date.compare(endDate) > 0 || this.isInvalid(date);
        },
        isCellUnavailable (date) {
            return props.isDateUnavailable ? props.isDateUnavailable(date) : false;
        },
        isPreviousVisibleRangeInvalid () {
            let prev = startDate.subtract({
                days: 1
            });
            return (0, _date.isSameDay)(prev, startDate) || this.isInvalid(prev);
        },
        isNextVisibleRangeInvalid () {
            // Adding may return the same date if we reached the end of time
            // according to the calendar system (e.g. 9999-12-31).
            let next = endDate.add({
                days: 1
            });
            return (0, _date.isSameDay)(next, endDate) || this.isInvalid(next);
        },
        getDatesInWeek (weekIndex, from = startDate) {
            let date = from.add({
                weeks: weekIndex
            });
            let dates = [];
            let days = visibleDuration.days && visibleDuration.days < 7 ? visibleDuration.days : 7;
            if (days === 7) {
                date = (0, _date.startOfWeek)(date, locale, firstDayOfWeek);
                // startOfWeek will clamp dates within the calendar system's valid range, which may
                // start in the middle of a week. In this case, add null placeholders.
                let dayOfWeek = (0, _date.getDayOfWeek)(date, locale, firstDayOfWeek);
                for(let i = 0; i < dayOfWeek; i++)dates.push(null);
            }
            while(dates.length < days){
                dates.push(date);
                let nextDate = date.add({
                    days: 1
                });
                if ((0, _date.isSameDay)(date, nextDate)) break;
                date = nextDate;
            }
            // Add null placeholders if at the end of the calendar system.
            while(dates.length < days)dates.push(null);
            return dates;
        },
        getWeeksInMonth (date = startDate) {
            let weeks = weeksInMonth || (0, _date.getWeeksInMonth)(date, locale, firstDayOfWeek);
            if (visibleDuration.weeks || visibleDuration.days) {
                weeks = visibleDuration.weeks ?? 0;
                if (visibleDuration.days) weeks += Math.ceil(visibleDuration.days / 7);
            }
            return weeks;
        }
    };
}
function unitDuration(duration) {
    let unit = {
        ...duration
    };
    for(let key in duration)unit[key] = 1;
    return unit;
}

},{"./utils":"atJAo","@internationalized/date":[["DateFormatter","2kPpC"],["endOfMonth","aHOFb"],["endOfWeek","aHOFb"],["getDayOfWeek","aHOFb"],["getWeeksInMonth","aHOFb"],["isEqualCalendar","aHOFb"],["isSameDay","aHOFb"],["minDate","aHOFb"],["startOfMonth","aHOFb"],["startOfWeek","aHOFb"],["today","aHOFb"],["GregorianCalendar","fpc7W"],["toCalendar","9JPzq"],["toCalendarDate","9JPzq"]],"../utils/useControlledState":"8yNBD","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

