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
})({"aA6fA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Example1", ()=>(0, _useDateFormatter1TsxDefault.default));
var _useDateFormatter1Tsx = require("./useDateFormatter-1.tsx");
var _useDateFormatter1TsxDefault = parcelHelpers.interopDefault(_useDateFormatter1Tsx);
exports.default = {};

},{"./useDateFormatter-1.tsx":"11LlK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"11LlK":[function(require,module,exports,__globalThis) {
// Original example: packages/dev/s2-docs/pages/react-aria/useDateFormatter.mdx:36. Apache-2.0, Adobe and contributors.
// Adapted module paths and standalone renderer; upstream example body retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _i18NproviderTs = require("../../../vendor/react-aria/exports/I18nProvider.ts");
var _useDateFormatterTs = require("../../../vendor/react-aria/exports/useDateFormatter.ts");
'use client';
function CurrentDate() {
    let formatter = (0, _useDateFormatterTs.useDateFormatter)();
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
        children: formatter.format(new Date())
    });
}
function ImportedExample(props) {
    return /*#__PURE__*/ (0, _reactDefault.default).cloneElement(/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _i18NproviderTs.I18nProvider), {
                locale: "en-US",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(CurrentDate, {})
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _i18NproviderTs.I18nProvider), {
                locale: "ru-RU",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(CurrentDate, {})
            })
        ]
    }), props);
}
exports.default = {
    render: ImportedExample,
    args: {},
    controls: [],
    controlOptions: {},
    propsObject: undefined,
    argTypes: {}
};

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../vendor/react-aria/exports/I18nProvider.ts":"czGuc","../../../vendor/react-aria/exports/useDateFormatter.ts":"ey0mQ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ey0mQ":[function(require,module,exports,__globalThis) {
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
 * Provides localized date formatting for the current locale. Automatically updates when the locale
 * changes, and handles caching of the date formatter for performance.
 *
 * @param options - Formatting options.
 */ parcelHelpers.export(exports, "useDateFormatter", ()=>useDateFormatter);
var _date = require("@internationalized/date");
var _useDeepMemo = require("../utils/useDeepMemo");
var _i18Nprovider = require("./I18nProvider");
var _react = require("react");
function useDateFormatter(options) {
    // Reuse last options object if it is shallowly equal, which allows the useMemo result to also be reused.
    options = (0, _useDeepMemo.useDeepMemo)(options ?? {}, isEqual);
    let { locale } = (0, _i18Nprovider.useLocale)();
    return (0, _react.useMemo)(()=>new (0, _date.DateFormatter)(locale, options), [
        locale,
        options
    ]);
}
function isEqual(a, b) {
    if (a === b) return true;
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (let key of aKeys){
        if (b[key] !== a[key]) return false;
    }
    return true;
}

},{"@internationalized/date":"2kPpC","../utils/useDeepMemo":"h7TGx","./I18nProvider":"czGuc","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2kPpC":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "DateFormatter", ()=>$12a3c853105e5a70$export$ad991b66133851cf);
let $12a3c853105e5a70$var$formatterCache = new Map();
class $12a3c853105e5a70$export$ad991b66133851cf {
    constructor(locale, options = {}){
        this.formatter = $12a3c853105e5a70$var$getCachedDateFormatter(locale, options);
        this.options = options;
    }
    /**
   * Formats a date as a string according to the locale and format options passed to the
   * constructor.
   */ format(value) {
        return this.formatter.format(value);
    }
    /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */ formatToParts(value) {
        return this.formatter.formatToParts(value);
    }
    /** Formats a date range as a string. */ formatRange(start, end) {
        // @ts-ignore
        if (typeof this.formatter.formatRange === 'function') return this.formatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return `${this.formatter.format(start)} \u{2013} ${this.formatter.format(end)}`;
    }
    /** Formats a date range as an array of parts. */ formatRangeToParts(start, end) {
        // @ts-ignore
        if (typeof this.formatter.formatRangeToParts === 'function') return this.formatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        let startParts = this.formatter.formatToParts(start);
        let endParts = this.formatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: 'startRange'
                })),
            {
                type: 'literal',
                value: " \u2013 ",
                source: 'shared'
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: 'endRange'
                }))
        ];
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let resolvedOptions = this.formatter.resolvedOptions();
        if ($12a3c853105e5a70$var$hasBuggyResolvedHourCycle()) {
            if (!this.resolvedHourCycle) this.resolvedHourCycle = $12a3c853105e5a70$var$getResolvedHourCycle(resolvedOptions.locale, this.options);
            resolvedOptions.hourCycle = this.resolvedHourCycle;
            resolvedOptions.hour12 = this.resolvedHourCycle === 'h11' || this.resolvedHourCycle === 'h12';
        }
        // Safari uses a different name for the Ethiopic (Amete Alem) calendar.
        // https://bugs.webkit.org/show_bug.cgi?id=241564
        if (resolvedOptions.calendar === 'ethiopic-amete-alem') resolvedOptions.calendar = 'ethioaa';
        return resolvedOptions;
    }
}
// There are multiple bugs involving the hour12 and hourCycle options in various browser engines.
//   - Chrome [1] (and the ECMA 402 spec [2]) resolve hour12: false in English and other locales to h24 (24:00 - 23:59)
//     rather than h23 (00:00 - 23:59). Same can happen with hour12: true in French, which Chrome resolves to h11 (00:00 - 11:59)
//     rather than h12 (12:00 - 11:59).
//   - WebKit returns an incorrect hourCycle resolved option in the French locale due to incorrect parsing of 'h' literal
//     in the resolved pattern. It also formats incorrectly when specifying the hourCycle option for the same reason. [3]
// [1] https://bugs.chromium.org/p/chromium/issues/detail?id=1045791
// [2] https://github.com/tc39/ecma402/issues/402
// [3] https://bugs.webkit.org/show_bug.cgi?id=229313
// https://github.com/unicode-org/cldr/blob/018b55eff7ceb389c7e3fc44e2f657eae3b10b38/common/supplemental/supplementalData.xml#L4774-L4802
const $12a3c853105e5a70$var$hour12Preferences = {
    true: {
        // Only Japanese uses the h11 style for 12 hour time. All others use h12.
        ja: 'h11'
    },
    false: {}
};
function $12a3c853105e5a70$var$getCachedDateFormatter(locale, options = {}) {
    // Work around buggy hour12 behavior in Chrome / ECMA 402 spec by using hourCycle instead.
    // Only apply the workaround if the issue is detected, because the hourCycle option is buggy in Safari.
    if (typeof options.hour12 === 'boolean' && $12a3c853105e5a70$var$hasBuggyHour12Behavior()) {
        options = {
            ...options
        };
        let pref = $12a3c853105e5a70$var$hour12Preferences[String(options.hour12)][locale.split('-')[0]];
        let defaultHourCycle = options.hour12 ? 'h12' : 'h23';
        options.hourCycle = pref ?? defaultHourCycle;
        delete options.hour12;
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($12a3c853105e5a70$var$formatterCache.has(cacheKey)) return $12a3c853105e5a70$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.DateTimeFormat(locale, options);
    $12a3c853105e5a70$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
let $12a3c853105e5a70$var$_hasBuggyHour12Behavior = null;
function $12a3c853105e5a70$var$hasBuggyHour12Behavior() {
    if ($12a3c853105e5a70$var$_hasBuggyHour12Behavior == null) $12a3c853105e5a70$var$_hasBuggyHour12Behavior = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        hour12: false
    }).format(new Date(2020, 2, 3, 0)) === '24';
    return $12a3c853105e5a70$var$_hasBuggyHour12Behavior;
}
let $12a3c853105e5a70$var$_hasBuggyResolvedHourCycle = null;
function $12a3c853105e5a70$var$hasBuggyResolvedHourCycle() {
    if ($12a3c853105e5a70$var$_hasBuggyResolvedHourCycle == null) $12a3c853105e5a70$var$_hasBuggyResolvedHourCycle = new Intl.DateTimeFormat('fr', {
        hour: 'numeric',
        hour12: false
    }).resolvedOptions().hourCycle === 'h12';
    return $12a3c853105e5a70$var$_hasBuggyResolvedHourCycle;
}
function $12a3c853105e5a70$var$getResolvedHourCycle(locale, options) {
    if (!options.timeStyle && !options.hour) return undefined;
    // Work around buggy results in resolved hourCycle and hour12 options in WebKit.
    // Format the minimum possible hour and maximum possible hour in a day and parse the results.
    locale = locale.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, '');
    locale += (locale.includes('-u-') ? '' : '-u') + '-nu-latn';
    let formatter = $12a3c853105e5a70$var$getCachedDateFormatter(locale, {
        ...options,
        timeZone: undefined // use local timezone
    });
    let min = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 0)).find((p)=>p.type === 'hour').value, 10);
    let max = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 23)).find((p)=>p.type === 'hour').value, 10);
    if (min === 0 && max === 23) return 'h23';
    if (min === 24 && max === 23) return 'h24';
    if (min === 0 && max === 11) return 'h11';
    if (min === 12 && max === 11) return 'h12';
    throw new Error('Unexpected hour cycle result');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h7TGx":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* eslint-disable rsp-rules/pure-render */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useDeepMemo", ()=>useDeepMemo);
var _react = require("react");
function useDeepMemo(value, isEqual) {
    // Using a ref during render is ok here because it's only an optimization – both values are equivalent.
    // If a render is thrown away, it'll still work the same no matter if the next render is the same or not.
    let lastValue = (0, _react.useRef)(null);
    // oxlint-disable-next-line react/react-compiler
    if (value && lastValue.current && isEqual(value, lastValue.current)) // oxlint-disable-next-line react/react-compiler
    value = lastValue.current;
    // oxlint-disable-next-line react/react-compiler
    lastValue.current = value;
    return value;
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

