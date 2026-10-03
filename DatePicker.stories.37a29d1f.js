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
})({"jnYhg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCalendar", ()=>$84102b64e5ca022f$export$dd0bbc9b26defe37);
var _buddhistCalendarMjs = require("./calendars/BuddhistCalendar.mjs");
var _ethiopicCalendarMjs = require("./calendars/EthiopicCalendar.mjs");
var _gregorianCalendarMjs = require("./calendars/GregorianCalendar.mjs");
var _hebrewCalendarMjs = require("./calendars/HebrewCalendar.mjs");
var _indianCalendarMjs = require("./calendars/IndianCalendar.mjs");
var _islamicCalendarMjs = require("./calendars/IslamicCalendar.mjs");
var _japaneseCalendarMjs = require("./calendars/JapaneseCalendar.mjs");
var _persianCalendarMjs = require("./calendars/PersianCalendar.mjs");
var _taiwanCalendarMjs = require("./calendars/TaiwanCalendar.mjs");
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
 */ function $84102b64e5ca022f$export$dd0bbc9b26defe37(name) {
    switch(name){
        case 'buddhist':
            return new (0, _buddhistCalendarMjs.BuddhistCalendar)();
        case 'ethiopic':
            return new (0, _ethiopicCalendarMjs.EthiopicCalendar)();
        case 'ethioaa':
            return new (0, _ethiopicCalendarMjs.EthiopicAmeteAlemCalendar)();
        case 'coptic':
            return new (0, _ethiopicCalendarMjs.CopticCalendar)();
        case 'hebrew':
            return new (0, _hebrewCalendarMjs.HebrewCalendar)();
        case 'indian':
            return new (0, _indianCalendarMjs.IndianCalendar)();
        case 'islamic-civil':
            return new (0, _islamicCalendarMjs.IslamicCivilCalendar)();
        case 'islamic-tbla':
            return new (0, _islamicCalendarMjs.IslamicTabularCalendar)();
        case 'islamic-umalqura':
            return new (0, _islamicCalendarMjs.IslamicUmalquraCalendar)();
        case 'japanese':
            return new (0, _japaneseCalendarMjs.JapaneseCalendar)();
        case 'persian':
            return new (0, _persianCalendarMjs.PersianCalendar)();
        case 'roc':
            return new (0, _taiwanCalendarMjs.TaiwanCalendar)();
        case 'gregory':
        default:
            return new (0, _gregorianCalendarMjs.GregorianCalendar)();
    }
}

},{"./calendars/BuddhistCalendar.mjs":"fENPB","./calendars/EthiopicCalendar.mjs":"amMEP","./calendars/GregorianCalendar.mjs":"fpc7W","./calendars/HebrewCalendar.mjs":"6U9rQ","./calendars/IndianCalendar.mjs":"cKBnd","./calendars/IslamicCalendar.mjs":"9WNlS","./calendars/JapaneseCalendar.mjs":"dt38L","./calendars/PersianCalendar.mjs":"fwYnW","./calendars/TaiwanCalendar.mjs":"jaXZ8","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fENPB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BuddhistCalendar", ()=>$63d4eafd4d826996$export$42d20a78301dee44);
var _calendarDateMjs = require("../CalendarDate.mjs");
var _gregorianCalendarMjs = require("./GregorianCalendar.mjs");
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
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.
const $63d4eafd4d826996$var$BUDDHIST_ERA_START = -543;
class $63d4eafd4d826996$export$42d20a78301dee44 extends (0, _gregorianCalendarMjs.GregorianCalendar) {
    fromJulianDay(jd) {
        let gregorianDate = super.fromJulianDay(jd);
        let year = (0, _gregorianCalendarMjs.getExtendedYear)(gregorianDate.era, gregorianDate.year);
        return new (0, _calendarDateMjs.CalendarDate)(this, year - $63d4eafd4d826996$var$BUDDHIST_ERA_START, gregorianDate.month, gregorianDate.day);
    }
    toJulianDay(date) {
        return super.toJulianDay($63d4eafd4d826996$var$toGregorian(date));
    }
    getEras() {
        return [
            'BE'
        ];
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth($63d4eafd4d826996$var$toGregorian(date));
    }
    balanceDate() {}
    constructor(...args){
        super(...args), this.identifier = 'buddhist';
    }
}
function $63d4eafd4d826996$var$toGregorian(date) {
    let [era, year] = (0, _gregorianCalendarMjs.fromExtendedYear)(date.year + $63d4eafd4d826996$var$BUDDHIST_ERA_START);
    return new (0, _calendarDateMjs.CalendarDate)(era, year, date.month, date.day);
}

},{"../CalendarDate.mjs":"j8NRQ","./GregorianCalendar.mjs":"fpc7W","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"amMEP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EthiopicCalendar", ()=>$97cfca9efd59523d$export$26ba6eab5e20cd7d);
parcelHelpers.export(exports, "EthiopicAmeteAlemCalendar", ()=>$97cfca9efd59523d$export$d72e0c37005a4914);
parcelHelpers.export(exports, "CopticCalendar", ()=>$97cfca9efd59523d$export$fe6243cbe1a4b7c1);
var _calendarDateMjs = require("../CalendarDate.mjs");
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
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.
const $97cfca9efd59523d$var$ETHIOPIC_EPOCH = 1723856;
const $97cfca9efd59523d$var$COPTIC_EPOCH = 1824665;
// The delta between Amete Alem 1 and Amete Mihret 1
// AA 5501 = AM 1
const $97cfca9efd59523d$var$AMETE_MIHRET_DELTA = 5500;
function $97cfca9efd59523d$var$ceToJulianDay(epoch, year, month, day) {
    return epoch + // difference from Julian epoch to 1,1,1
    365 * year + // number of days from years
    Math.floor(year / 4) + // extra day of leap year
    30 * (month - 1) + // number of days from months (1 based)
    day - 1 // number of days for present month (1 based)
    ;
}
function $97cfca9efd59523d$var$julianDayToCE(epoch, jd) {
    let year = Math.floor(4 * (jd - epoch) / 1461);
    // Years are 365 * year + floor(year / 4) days long, slightly less than the
    // 365.25 day average assumed by the estimate above. As a result, the estimate
    // can be one year too low on the first day of a year (3 of every 4 years).
    if (jd >= $97cfca9efd59523d$var$ceToJulianDay(epoch, year + 1, 1, 1)) year++;
    let month = 1 + Math.floor((jd - $97cfca9efd59523d$var$ceToJulianDay(epoch, year, 1, 1)) / 30);
    let day = jd + 1 - $97cfca9efd59523d$var$ceToJulianDay(epoch, year, month, 1);
    return [
        year,
        month,
        day
    ];
}
function $97cfca9efd59523d$var$getLeapDay(year) {
    return Math.floor(year % 4 / 3);
}
function $97cfca9efd59523d$var$getDaysInMonth(year, month) {
    // The Ethiopian and Coptic calendars have 13 months, 12 of 30 days each and
    // an intercalary month at the end of the year of 5 or 6 days, depending whether
    // the year is a leap year or not. The Leap Year follows the same rules as the
    // Julian Calendar so that the extra month always has six days in the year before
    // a Julian Leap Year.
    if (month % 13 !== 0) return 30;
    else return $97cfca9efd59523d$var$getLeapDay(year) + 5;
}
class $97cfca9efd59523d$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let [year, month, day] = $97cfca9efd59523d$var$julianDayToCE($97cfca9efd59523d$var$ETHIOPIC_EPOCH, jd);
        let era = 'AM';
        if (year <= 0) {
            era = 'AA';
            year += $97cfca9efd59523d$var$AMETE_MIHRET_DELTA;
        }
        return new (0, _calendarDateMjs.CalendarDate)(this, era, year, month, day);
    }
    toJulianDay(date) {
        let year = date.year;
        if (date.era === 'AA') year -= $97cfca9efd59523d$var$AMETE_MIHRET_DELTA;
        return $97cfca9efd59523d$var$ceToJulianDay($97cfca9efd59523d$var$ETHIOPIC_EPOCH, year, date.month, date.day);
    }
    getDaysInMonth(date) {
        return $97cfca9efd59523d$var$getDaysInMonth(date.year, date.month);
    }
    getMonthsInYear() {
        return 13;
    }
    getDaysInYear(date) {
        return 365 + $97cfca9efd59523d$var$getLeapDay(date.year);
    }
    getMaximumMonthsInYear() {
        return 13;
    }
    getMaximumDaysInMonth() {
        return 30;
    }
    getYearsInEra(date) {
        // 9999-12-31 gregorian is 9992-20-02 ethiopic.
        // Round down to 9991 for the last full year.
        // AA 9999-01-01 ethiopic is 4506-09-30 gregorian.
        return date.era === 'AA' ? 9999 : 9991;
    }
    getEras() {
        return [
            'AA',
            'AM'
        ];
    }
    constructor(){
        this.identifier = 'ethiopic';
    }
}
class $97cfca9efd59523d$export$d72e0c37005a4914 extends $97cfca9efd59523d$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let [year, month, day] = $97cfca9efd59523d$var$julianDayToCE($97cfca9efd59523d$var$ETHIOPIC_EPOCH, jd);
        year += $97cfca9efd59523d$var$AMETE_MIHRET_DELTA;
        return new (0, _calendarDateMjs.CalendarDate)(this, 'AA', year, month, day);
    }
    getEras() {
        return [
            'AA'
        ];
    }
    getYearsInEra() {
        // 9999-13-04 ethioaa is the maximum date, which is equivalent to 4506-09-29 gregorian.
        return 9999;
    }
    constructor(...args){
        super(...args), this.identifier = 'ethioaa' // also known as 'ethiopic-amete-alem' in ICU
        ;
    }
}
class $97cfca9efd59523d$export$fe6243cbe1a4b7c1 extends $97cfca9efd59523d$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let [year, month, day] = $97cfca9efd59523d$var$julianDayToCE($97cfca9efd59523d$var$COPTIC_EPOCH, jd);
        let era = 'CE';
        if (year <= 0) {
            era = 'BCE';
            year = 1 - year;
        }
        return new (0, _calendarDateMjs.CalendarDate)(this, era, year, month, day);
    }
    toJulianDay(date) {
        let year = date.year;
        if (date.era === 'BCE') year = 1 - year;
        return $97cfca9efd59523d$var$ceToJulianDay($97cfca9efd59523d$var$COPTIC_EPOCH, year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let year = date.year;
        if (date.era === 'BCE') year = 1 - year;
        return $97cfca9efd59523d$var$getDaysInMonth(year, date.month);
    }
    isInverseEra(date) {
        return date.era === 'BCE';
    }
    balanceDate(date) {
        if (date.year <= 0) {
            date.era = date.era === 'BCE' ? 'CE' : 'BCE';
            date.year = 1 - date.year;
        }
    }
    getEras() {
        return [
            'BCE',
            'CE'
        ];
    }
    getYearsInEra(date) {
        // 9999-12-30 gregorian is 9716-02-20 coptic.
        // Round down to 9715 for the last full year.
        // BCE 9999-01-01 coptic is BC 9716-06-15 gregorian.
        return date.era === 'BCE' ? 9999 : 9715;
    }
    constructor(...args){
        super(...args), this.identifier = 'coptic';
    }
}

},{"../CalendarDate.mjs":"j8NRQ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6U9rQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HebrewCalendar", ()=>$f39495b96f9dbac6$export$ca405048b8fb5af);
var _calendarDateMjs = require("../CalendarDate.mjs");
var _utilsMjs = require("../utils.mjs");
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
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.
const $f39495b96f9dbac6$var$HEBREW_EPOCH = 347997;
// Hebrew date calculations are performed in terms of days, hours, and
// "parts" (or halakim), which are 1/1080 of an hour, or 3 1/3 seconds.
const $f39495b96f9dbac6$var$HOUR_PARTS = 1080;
const $f39495b96f9dbac6$var$DAY_PARTS = 24 * $f39495b96f9dbac6$var$HOUR_PARTS;
// An approximate value for the length of a lunar month.
// It is used to calculate the approximate year and month of a given
// absolute date.
const $f39495b96f9dbac6$var$MONTH_DAYS = 29;
const $f39495b96f9dbac6$var$MONTH_FRACT = 12 * $f39495b96f9dbac6$var$HOUR_PARTS + 793;
const $f39495b96f9dbac6$var$MONTH_PARTS = $f39495b96f9dbac6$var$MONTH_DAYS * $f39495b96f9dbac6$var$DAY_PARTS + $f39495b96f9dbac6$var$MONTH_FRACT;
function $f39495b96f9dbac6$var$isLeapYear(year) {
    return (0, _utilsMjs.mod)(year * 7 + 1, 19) < 7;
}
// Test for delay of start of new year and to avoid
// Sunday, Wednesday, and Friday as start of the new year.
function $f39495b96f9dbac6$var$hebrewDelay1(year) {
    let months = Math.floor((235 * year - 234) / 19);
    let parts = 12084 + 13753 * months;
    let day = months * 29 + Math.floor(parts / 25920);
    if ((0, _utilsMjs.mod)(3 * (day + 1), 7) < 3) day += 1;
    return day;
}
// Check for delay in start of new year due to length of adjacent years
function $f39495b96f9dbac6$var$hebrewDelay2(year) {
    let last = $f39495b96f9dbac6$var$hebrewDelay1(year - 1);
    let present = $f39495b96f9dbac6$var$hebrewDelay1(year);
    let next = $f39495b96f9dbac6$var$hebrewDelay1(year + 1);
    if (next - present === 356) return 2;
    if (present - last === 382) return 1;
    return 0;
}
function $f39495b96f9dbac6$var$startOfYear(year) {
    return $f39495b96f9dbac6$var$hebrewDelay1(year) + $f39495b96f9dbac6$var$hebrewDelay2(year);
}
function $f39495b96f9dbac6$var$getDaysInYear(year) {
    return $f39495b96f9dbac6$var$startOfYear(year + 1) - $f39495b96f9dbac6$var$startOfYear(year);
}
function $f39495b96f9dbac6$var$getYearType(year) {
    let yearLength = $f39495b96f9dbac6$var$getDaysInYear(year);
    if (yearLength > 380) yearLength -= 30; // Subtract length of leap month.
    switch(yearLength){
        case 353:
            return 0; // deficient
        case 354:
            return 1; // normal
        case 355:
            return 2; // complete
    }
}
function $f39495b96f9dbac6$var$getDaysInMonth(year, month) {
    // Normalize month numbers from 1 - 13, even on non-leap years
    if (month >= 6 && !$f39495b96f9dbac6$var$isLeapYear(year)) month++;
    // First of all, dispose of fixed-length 29 day months
    if (month === 4 || month === 7 || month === 9 || month === 11 || month === 13) return 29;
    let yearType = $f39495b96f9dbac6$var$getYearType(year);
    // If it's Heshvan, days depend on length of year
    if (month === 2) return yearType === 2 ? 30 : 29;
    // Similarly, Kislev varies with the length of year
    if (month === 3) return yearType === 0 ? 29 : 30;
    // Adar I only exists in leap years
    if (month === 6) return $f39495b96f9dbac6$var$isLeapYear(year) ? 30 : 0;
    return 30;
}
class $f39495b96f9dbac6$export$ca405048b8fb5af {
    fromJulianDay(jd) {
        let d = jd - $f39495b96f9dbac6$var$HEBREW_EPOCH;
        let m = d * $f39495b96f9dbac6$var$DAY_PARTS / $f39495b96f9dbac6$var$MONTH_PARTS; // Months (approx)
        let year = Math.floor((19 * m + 234) / 235) + 1; // Years (approx)
        let ys = $f39495b96f9dbac6$var$startOfYear(year); // 1st day of year
        let dayOfYear = Math.floor(d - ys);
        // Because of the postponement rules, it's possible to guess wrong.  Fix it.
        while(dayOfYear < 1){
            year--;
            ys = $f39495b96f9dbac6$var$startOfYear(year);
            dayOfYear = Math.floor(d - ys);
        }
        // Now figure out which month we're in, and the date within that month
        let month = 1;
        let monthStart = 0;
        while(monthStart < dayOfYear){
            monthStart += $f39495b96f9dbac6$var$getDaysInMonth(year, month);
            month++;
        }
        month--;
        monthStart -= $f39495b96f9dbac6$var$getDaysInMonth(year, month);
        let day = dayOfYear - monthStart;
        return new (0, _calendarDateMjs.CalendarDate)(this, year, month, day);
    }
    toJulianDay(date) {
        let jd = $f39495b96f9dbac6$var$startOfYear(date.year);
        for(let month = 1; month < date.month; month++)jd += $f39495b96f9dbac6$var$getDaysInMonth(date.year, month);
        return jd + date.day + $f39495b96f9dbac6$var$HEBREW_EPOCH;
    }
    getDaysInMonth(date) {
        return $f39495b96f9dbac6$var$getDaysInMonth(date.year, date.month);
    }
    getMonthsInYear(date) {
        return $f39495b96f9dbac6$var$isLeapYear(date.year) ? 13 : 12;
    }
    getDaysInYear(date) {
        return $f39495b96f9dbac6$var$getDaysInYear(date.year);
    }
    getMaximumMonthsInYear() {
        return 13;
    }
    getMaximumDaysInMonth() {
        return 30;
    }
    getYearsInEra() {
        // 6239 gregorian
        return 9999;
    }
    getEras() {
        return [
            'AM'
        ];
    }
    balanceYearMonth(date, previousDate) {
        // Keep date in the same month when switching between leap years and non leap years
        if (previousDate.year !== date.year) {
            if ($f39495b96f9dbac6$var$isLeapYear(previousDate.year) && !$f39495b96f9dbac6$var$isLeapYear(date.year) && previousDate.month > 6) date.month--;
            else if (!$f39495b96f9dbac6$var$isLeapYear(previousDate.year) && $f39495b96f9dbac6$var$isLeapYear(date.year) && previousDate.month > 6) date.month++;
        }
    }
    constructor(){
        this.identifier = 'hebrew';
    }
}

},{"../CalendarDate.mjs":"j8NRQ","../utils.mjs":"2Jyoj","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cKBnd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IndianCalendar", ()=>$11fa67a177e45470$export$39f31c639fa15726);
var _calendarDateMjs = require("../CalendarDate.mjs");
var _gregorianCalendarMjs = require("./GregorianCalendar.mjs");
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
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.
// Starts in 78 AD,
const $11fa67a177e45470$var$INDIAN_ERA_START = 78;
// The Indian year starts 80 days later than the Gregorian year.
const $11fa67a177e45470$var$INDIAN_YEAR_START = 80;
class $11fa67a177e45470$export$39f31c639fa15726 extends (0, _gregorianCalendarMjs.GregorianCalendar) {
    fromJulianDay(jd) {
        // Gregorian date for Julian day
        let date = super.fromJulianDay(jd);
        // Year in Saka era
        let indianYear = date.year - $11fa67a177e45470$var$INDIAN_ERA_START;
        // Day number in Gregorian year (starting from 0)
        let yDay = jd - (0, _gregorianCalendarMjs.gregorianToJulianDay)(date.era, date.year, 1, 1);
        let leapMonth;
        if (yDay < $11fa67a177e45470$var$INDIAN_YEAR_START) {
            //  Day is at the end of the preceding Saka year
            indianYear--;
            // Days in leapMonth this year, previous Gregorian year
            leapMonth = (0, _gregorianCalendarMjs.isLeapYear)(date.year - 1) ? 31 : 30;
            yDay += leapMonth + 155 + 90 + 10;
        } else {
            // Days in leapMonth this year
            leapMonth = (0, _gregorianCalendarMjs.isLeapYear)(date.year) ? 31 : 30;
            yDay -= $11fa67a177e45470$var$INDIAN_YEAR_START;
        }
        let indianMonth;
        let indianDay;
        if (yDay < leapMonth) {
            indianMonth = 1;
            indianDay = yDay + 1;
        } else {
            let mDay = yDay - leapMonth;
            if (mDay < 155) {
                indianMonth = Math.floor(mDay / 31) + 2;
                indianDay = mDay % 31 + 1;
            } else {
                mDay -= 155;
                indianMonth = Math.floor(mDay / 30) + 7;
                indianDay = mDay % 30 + 1;
            }
        }
        return new (0, _calendarDateMjs.CalendarDate)(this, indianYear, indianMonth, indianDay);
    }
    toJulianDay(date) {
        let extendedYear = date.year + $11fa67a177e45470$var$INDIAN_ERA_START;
        let [era, year] = (0, _gregorianCalendarMjs.fromExtendedYear)(extendedYear);
        let leapMonth;
        let jd;
        if ((0, _gregorianCalendarMjs.isLeapYear)(year)) {
            leapMonth = 31;
            jd = (0, _gregorianCalendarMjs.gregorianToJulianDay)(era, year, 3, 21);
        } else {
            leapMonth = 30;
            jd = (0, _gregorianCalendarMjs.gregorianToJulianDay)(era, year, 3, 22);
        }
        if (date.month === 1) return jd + date.day - 1;
        jd += leapMonth + Math.min(date.month - 2, 5) * 31;
        if (date.month >= 8) jd += (date.month - 7) * 30;
        jd += date.day - 1;
        return jd;
    }
    getDaysInMonth(date) {
        if (date.month === 1 && (0, _gregorianCalendarMjs.isLeapYear)(date.year + $11fa67a177e45470$var$INDIAN_ERA_START)) return 31;
        if (date.month >= 2 && date.month <= 6) return 31;
        return 30;
    }
    getYearsInEra() {
        // 9999-12-31 gregorian is 9920-10-10 indian.
        // Round down to 9919 for the last full year.
        return 9919;
    }
    getEras() {
        return [
            'saka'
        ];
    }
    balanceDate() {}
    constructor(...args){
        super(...args), this.identifier = 'indian';
    }
}

},{"../CalendarDate.mjs":"j8NRQ","./GregorianCalendar.mjs":"fpc7W","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9WNlS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IslamicCivilCalendar", ()=>$fd4f9bc1ba0e49a8$export$2066795aadd37bfc);
parcelHelpers.export(exports, "IslamicTabularCalendar", ()=>$fd4f9bc1ba0e49a8$export$37f0887f2f9d22f7);
parcelHelpers.export(exports, "IslamicUmalquraCalendar", ()=>$fd4f9bc1ba0e49a8$export$5baab4758c231076);
var _calendarDateMjs = require("../CalendarDate.mjs");
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
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.
const $fd4f9bc1ba0e49a8$var$CIVIL_EPOC = 1948440; // CE 622 July 16 Friday (Julian calendar) / CE 622 July 19 (Gregorian calendar)
const $fd4f9bc1ba0e49a8$var$ASTRONOMICAL_EPOC = 1948439; // CE 622 July 15 Thursday (Julian calendar)
const $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START = 1300;
const $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_END = 1600;
const $fd4f9bc1ba0e49a8$var$UMALQURA_START_DAYS = 460322;
function $fd4f9bc1ba0e49a8$var$islamicToJulianDay(epoch, year, month, day) {
    return day + Math.ceil(29.5 * (month - 1)) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30) + epoch - 1;
}
function $fd4f9bc1ba0e49a8$var$julianDayToIslamic(calendar, epoch, jd) {
    let year = Math.floor((30 * (jd - epoch) + 10646) / 10631);
    let month = Math.min(12, Math.ceil((jd - (29 + $fd4f9bc1ba0e49a8$var$islamicToJulianDay(epoch, year, 1, 1))) / 29.5) + 1);
    let day = jd - $fd4f9bc1ba0e49a8$var$islamicToJulianDay(epoch, year, month, 1) + 1;
    return new (0, _calendarDateMjs.CalendarDate)(calendar, year, month, day);
}
function $fd4f9bc1ba0e49a8$var$isLeapYear(year) {
    return (14 + 11 * year) % 30 < 11;
}
class $fd4f9bc1ba0e49a8$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        return $fd4f9bc1ba0e49a8$var$julianDayToIslamic(this, $fd4f9bc1ba0e49a8$var$CIVIL_EPOC, jd);
    }
    toJulianDay(date) {
        return $fd4f9bc1ba0e49a8$var$islamicToJulianDay($fd4f9bc1ba0e49a8$var$CIVIL_EPOC, date.year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let length = 29 + date.month % 2;
        if (date.month === 12 && $fd4f9bc1ba0e49a8$var$isLeapYear(date.year)) length++;
        return length;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInYear(date) {
        return $fd4f9bc1ba0e49a8$var$isLeapYear(date.year) ? 355 : 354;
    }
    getMaximumMonthsInYear() {
        return 12;
    }
    getMaximumDaysInMonth() {
        return 30;
    }
    getYearsInEra() {
        // 9999 gregorian
        return 9665;
    }
    getEras() {
        return [
            'AH'
        ];
    }
    constructor(){
        this.identifier = 'islamic-civil';
    }
}
class $fd4f9bc1ba0e49a8$export$37f0887f2f9d22f7 extends $fd4f9bc1ba0e49a8$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        return $fd4f9bc1ba0e49a8$var$julianDayToIslamic(this, $fd4f9bc1ba0e49a8$var$ASTRONOMICAL_EPOC, jd);
    }
    toJulianDay(date) {
        return $fd4f9bc1ba0e49a8$var$islamicToJulianDay($fd4f9bc1ba0e49a8$var$ASTRONOMICAL_EPOC, date.year, date.month, date.day);
    }
    constructor(...args){
        super(...args), this.identifier = 'islamic-tbla';
    }
}
// Generated by scripts/generate-umalqura.js
const $fd4f9bc1ba0e49a8$var$UMALQURA_DATA = 'qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=';
let $fd4f9bc1ba0e49a8$var$UMALQURA_MONTHLENGTH;
let $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START_TABLE;
function $fd4f9bc1ba0e49a8$var$umalquraYearStart(year) {
    return $fd4f9bc1ba0e49a8$var$UMALQURA_START_DAYS + $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START_TABLE[year - $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START];
}
function $fd4f9bc1ba0e49a8$var$umalquraMonthLength(year, month) {
    let idx = year - $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START;
    let mask = 0x01 << 11 - (month - 1);
    if (($fd4f9bc1ba0e49a8$var$UMALQURA_MONTHLENGTH[idx] & mask) === 0) return 29;
    else return 30;
}
function $fd4f9bc1ba0e49a8$var$umalquraMonthStart(year, month) {
    let day = $fd4f9bc1ba0e49a8$var$umalquraYearStart(year);
    for(let i = 1; i < month; i++)day += $fd4f9bc1ba0e49a8$var$umalquraMonthLength(year, i);
    return day;
}
function $fd4f9bc1ba0e49a8$var$umalquraYearLength(year) {
    return $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START_TABLE[year + 1 - $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START] - $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START_TABLE[year - $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START];
}
class $fd4f9bc1ba0e49a8$export$5baab4758c231076 extends $fd4f9bc1ba0e49a8$export$2066795aadd37bfc {
    constructor(){
        super(), this.identifier = 'islamic-umalqura';
        if (!$fd4f9bc1ba0e49a8$var$UMALQURA_MONTHLENGTH) $fd4f9bc1ba0e49a8$var$UMALQURA_MONTHLENGTH = new Uint16Array(Uint8Array.from(atob($fd4f9bc1ba0e49a8$var$UMALQURA_DATA), (c)=>c.charCodeAt(0)).buffer);
        if (!$fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START_TABLE) {
            $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START_TABLE = new Uint32Array($fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_END - $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START + 1);
            let yearStart = 0;
            for(let year = $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START; year <= $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_END; year++){
                $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START_TABLE[year - $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START] = yearStart;
                for(let i = 1; i <= 12; i++)yearStart += $fd4f9bc1ba0e49a8$var$umalquraMonthLength(year, i);
            }
        }
    }
    fromJulianDay(jd) {
        let days = jd - $fd4f9bc1ba0e49a8$var$CIVIL_EPOC;
        let startDays = $fd4f9bc1ba0e49a8$var$umalquraYearStart($fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START);
        let endDays = $fd4f9bc1ba0e49a8$var$umalquraYearStart($fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_END);
        if (days < startDays || days > endDays) return super.fromJulianDay(jd);
        else {
            let y = $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START - 1;
            let m = 1;
            let d = 1;
            while(d > 0){
                y++;
                d = days - $fd4f9bc1ba0e49a8$var$umalquraYearStart(y) + 1;
                let yearLength = $fd4f9bc1ba0e49a8$var$umalquraYearLength(y);
                if (d === yearLength) {
                    m = 12;
                    break;
                } else if (d < yearLength) {
                    let monthLength = $fd4f9bc1ba0e49a8$var$umalquraMonthLength(y, m);
                    m = 1;
                    while(d > monthLength){
                        d -= monthLength;
                        m++;
                        monthLength = $fd4f9bc1ba0e49a8$var$umalquraMonthLength(y, m);
                    }
                    break;
                }
            }
            return new (0, _calendarDateMjs.CalendarDate)(this, y, m, days - $fd4f9bc1ba0e49a8$var$umalquraMonthStart(y, m) + 1);
        }
    }
    toJulianDay(date) {
        if (date.year < $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START || date.year > $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_END) return super.toJulianDay(date);
        return $fd4f9bc1ba0e49a8$var$CIVIL_EPOC + $fd4f9bc1ba0e49a8$var$umalquraMonthStart(date.year, date.month) + (date.day - 1);
    }
    getDaysInMonth(date) {
        if (date.year < $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START || date.year > $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_END) return super.getDaysInMonth(date);
        return $fd4f9bc1ba0e49a8$var$umalquraMonthLength(date.year, date.month);
    }
    getDaysInYear(date) {
        if (date.year < $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_START || date.year > $fd4f9bc1ba0e49a8$var$UMALQURA_YEAR_END) return super.getDaysInYear(date);
        return $fd4f9bc1ba0e49a8$var$umalquraYearLength(date.year);
    }
}

},{"../CalendarDate.mjs":"j8NRQ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dt38L":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "JapaneseCalendar", ()=>$34b940b49ba042df$export$b746ab2b60cdffbf);
var _calendarDateMjs = require("../CalendarDate.mjs");
var _gregorianCalendarMjs = require("./GregorianCalendar.mjs");
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
 */ // Portions of the code in this file are based on code from the TC39 Temporal proposal.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.
const $34b940b49ba042df$var$ERA_START_DATES = [
    [
        1868,
        9,
        8
    ],
    [
        1912,
        7,
        30
    ],
    [
        1926,
        12,
        25
    ],
    [
        1989,
        1,
        8
    ],
    [
        2019,
        5,
        1
    ]
];
const $34b940b49ba042df$var$ERA_END_DATES = [
    [
        1912,
        7,
        29
    ],
    [
        1926,
        12,
        24
    ],
    [
        1989,
        1,
        7
    ],
    [
        2019,
        4,
        30
    ]
];
const $34b940b49ba042df$var$ERA_ADDENDS = [
    1867,
    1911,
    1925,
    1988,
    2018
];
const $34b940b49ba042df$var$ERA_NAMES = [
    'meiji',
    'taisho',
    'showa',
    'heisei',
    'reiwa'
];
function $34b940b49ba042df$var$findEraFromGregorianDate(date) {
    const idx = $34b940b49ba042df$var$ERA_START_DATES.findIndex(([year, month, day])=>{
        if (date.year < year) return true;
        if (date.year === year && date.month < month) return true;
        if (date.year === year && date.month === month && date.day < day) return true;
        return false;
    });
    if (idx === -1) return $34b940b49ba042df$var$ERA_START_DATES.length - 1;
    if (idx === 0) return 0;
    return idx - 1;
}
function $34b940b49ba042df$var$toGregorian(date) {
    let eraAddend = $34b940b49ba042df$var$ERA_ADDENDS[$34b940b49ba042df$var$ERA_NAMES.indexOf(date.era)];
    if (!eraAddend) throw new Error('Unknown era: ' + date.era);
    return new (0, _calendarDateMjs.CalendarDate)(date.year + eraAddend, date.month, date.day);
}
class $34b940b49ba042df$export$b746ab2b60cdffbf extends (0, _gregorianCalendarMjs.GregorianCalendar) {
    fromJulianDay(jd) {
        let date = super.fromJulianDay(jd);
        let era = $34b940b49ba042df$var$findEraFromGregorianDate(date);
        return new (0, _calendarDateMjs.CalendarDate)(this, $34b940b49ba042df$var$ERA_NAMES[era], date.year - $34b940b49ba042df$var$ERA_ADDENDS[era], date.month, date.day);
    }
    toJulianDay(date) {
        return super.toJulianDay($34b940b49ba042df$var$toGregorian(date));
    }
    balanceDate(date) {
        let gregorianDate = $34b940b49ba042df$var$toGregorian(date);
        let era = $34b940b49ba042df$var$findEraFromGregorianDate(gregorianDate);
        if ($34b940b49ba042df$var$ERA_NAMES[era] !== date.era) {
            date.era = $34b940b49ba042df$var$ERA_NAMES[era];
            date.year = gregorianDate.year - $34b940b49ba042df$var$ERA_ADDENDS[era];
        }
        // Constrain in case we went before the first supported era.
        this.constrainDate(date);
    }
    constrainDate(date) {
        let idx = $34b940b49ba042df$var$ERA_NAMES.indexOf(date.era);
        let end = $34b940b49ba042df$var$ERA_END_DATES[idx];
        if (end != null) {
            let [endYear, endMonth, endDay] = end;
            // Constrain the year to the maximum possible value in the era.
            // Then constrain the month and day fields within that.
            let maxYear = endYear - $34b940b49ba042df$var$ERA_ADDENDS[idx];
            date.year = Math.max(1, Math.min(maxYear, date.year));
            if (date.year === maxYear) {
                date.month = Math.min(endMonth, date.month);
                if (date.month === endMonth) date.day = Math.min(endDay, date.day);
            }
        }
        if (date.year === 1 && idx >= 0) {
            let [, startMonth, startDay] = $34b940b49ba042df$var$ERA_START_DATES[idx];
            date.month = Math.max(startMonth, date.month);
            if (date.month === startMonth) date.day = Math.max(startDay, date.day);
        }
    }
    getEras() {
        return $34b940b49ba042df$var$ERA_NAMES;
    }
    getYearsInEra(date) {
        // Get the number of years in the era, taking into account the date's month and day fields.
        let era = $34b940b49ba042df$var$ERA_NAMES.indexOf(date.era);
        let cur = $34b940b49ba042df$var$ERA_START_DATES[era];
        let next = $34b940b49ba042df$var$ERA_START_DATES[era + 1];
        if (next == null) return 9999 - cur[0] + 1;
        let years = next[0] - cur[0];
        if (date.month < next[1] || date.month === next[1] && date.day < next[2]) years++;
        return years;
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth($34b940b49ba042df$var$toGregorian(date));
    }
    getMinimumMonthInYear(date) {
        let start = $34b940b49ba042df$var$getMinimums(date);
        return start ? start[1] : 1;
    }
    getMinimumDayInMonth(date) {
        let start = $34b940b49ba042df$var$getMinimums(date);
        return start && date.month === start[1] ? start[2] : 1;
    }
    constructor(...args){
        super(...args), this.identifier = 'japanese';
    }
}
function $34b940b49ba042df$var$getMinimums(date) {
    if (date.year === 1) {
        let idx = $34b940b49ba042df$var$ERA_NAMES.indexOf(date.era);
        return $34b940b49ba042df$var$ERA_START_DATES[idx];
    }
}

},{"../CalendarDate.mjs":"j8NRQ","./GregorianCalendar.mjs":"fpc7W","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fwYnW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PersianCalendar", ()=>$a0cc0739a536c3b1$export$37fccdbfd14c5939);
var _calendarDateMjs = require("../CalendarDate.mjs");
var _utilsMjs = require("../utils.mjs");
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
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.
const $a0cc0739a536c3b1$var$PERSIAN_EPOCH = 1948320;
// Number of days from the start of the year to the start of each month.
const $a0cc0739a536c3b1$var$MONTH_START = [
    0,
    31,
    62,
    93,
    124,
    155,
    186,
    216,
    246,
    276,
    306,
    336 // Esfand
];
class $a0cc0739a536c3b1$export$37fccdbfd14c5939 {
    fromJulianDay(jd) {
        let daysSinceEpoch = jd - $a0cc0739a536c3b1$var$PERSIAN_EPOCH;
        let year = 1 + Math.floor((33 * daysSinceEpoch + 3) / 12053);
        let farvardin1 = 365 * (year - 1) + Math.floor((8 * year + 21) / 33);
        let dayOfYear = daysSinceEpoch - farvardin1;
        let month = dayOfYear < 216 ? Math.floor(dayOfYear / 31) : Math.floor((dayOfYear - 6) / 30);
        let day = dayOfYear - $a0cc0739a536c3b1$var$MONTH_START[month] + 1;
        return new (0, _calendarDateMjs.CalendarDate)(this, year, month + 1, day);
    }
    toJulianDay(date) {
        let jd = $a0cc0739a536c3b1$var$PERSIAN_EPOCH - 1 + 365 * (date.year - 1) + Math.floor((8 * date.year + 21) / 33);
        jd += $a0cc0739a536c3b1$var$MONTH_START[date.month - 1];
        jd += date.day;
        return jd;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInMonth(date) {
        if (date.month <= 6) return 31;
        if (date.month <= 11) return 30;
        let isLeapYear = (0, _utilsMjs.mod)(25 * date.year + 11, 33) < 8;
        return isLeapYear ? 30 : 29;
    }
    getMaximumMonthsInYear() {
        return 12;
    }
    getMaximumDaysInMonth() {
        return 31;
    }
    getEras() {
        return [
            'AP'
        ];
    }
    getYearsInEra() {
        // 9378-10-10 persian is 9999-12-31 gregorian.
        // Round down to 9377 to set the maximum full year.
        return 9377;
    }
    constructor(){
        this.identifier = 'persian';
    }
}

},{"../CalendarDate.mjs":"j8NRQ","../utils.mjs":"2Jyoj","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jaXZ8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TaiwanCalendar", ()=>$c009cc5f64923054$export$65e01080afcb0799);
var _calendarDateMjs = require("../CalendarDate.mjs");
var _gregorianCalendarMjs = require("./GregorianCalendar.mjs");
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
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.
const $c009cc5f64923054$var$TAIWAN_ERA_START = 1911;
function $c009cc5f64923054$var$gregorianYear(date) {
    return date.era === 'minguo' ? date.year + $c009cc5f64923054$var$TAIWAN_ERA_START : 1 - date.year + $c009cc5f64923054$var$TAIWAN_ERA_START;
}
function $c009cc5f64923054$var$gregorianToTaiwan(year) {
    let y = year - $c009cc5f64923054$var$TAIWAN_ERA_START;
    if (y > 0) return [
        'minguo',
        y
    ];
    else return [
        'before_minguo',
        1 - y
    ];
}
class $c009cc5f64923054$export$65e01080afcb0799 extends (0, _gregorianCalendarMjs.GregorianCalendar) {
    fromJulianDay(jd) {
        let date = super.fromJulianDay(jd);
        let extendedYear = (0, _gregorianCalendarMjs.getExtendedYear)(date.era, date.year);
        let [era, year] = $c009cc5f64923054$var$gregorianToTaiwan(extendedYear);
        return new (0, _calendarDateMjs.CalendarDate)(this, era, year, date.month, date.day);
    }
    toJulianDay(date) {
        return super.toJulianDay($c009cc5f64923054$var$toGregorian(date));
    }
    getEras() {
        return [
            'before_minguo',
            'minguo'
        ];
    }
    balanceDate(date) {
        let [era, year] = $c009cc5f64923054$var$gregorianToTaiwan($c009cc5f64923054$var$gregorianYear(date));
        date.era = era;
        date.year = year;
    }
    isInverseEra(date) {
        return date.era === 'before_minguo';
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth($c009cc5f64923054$var$toGregorian(date));
    }
    getYearsInEra(date) {
        return date.era === 'before_minguo' ? 9999 : 9999 - $c009cc5f64923054$var$TAIWAN_ERA_START;
    }
    constructor(...args){
        super(...args), this.identifier = 'roc' // Republic of China
        ;
    }
}
function $c009cc5f64923054$var$toGregorian(date) {
    let [era, year] = (0, _gregorianCalendarMjs.fromExtendedYear)($c009cc5f64923054$var$gregorianYear(date));
    return new (0, _calendarDateMjs.CalendarDate)(era, year, date.month, date.day);
}

},{"../CalendarDate.mjs":"j8NRQ","./GregorianCalendar.mjs":"fpc7W","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

