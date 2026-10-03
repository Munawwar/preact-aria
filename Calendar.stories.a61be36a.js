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
})({"2TlPU":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
parcelHelpers.export(exports, "CalendarDate", ()=>(0, _calendarDateTs.CalendarDate));
parcelHelpers.export(exports, "CalendarDateTime", ()=>(0, _calendarDateTs.CalendarDateTime));
parcelHelpers.export(exports, "Time", ()=>(0, _calendarDateTs.Time));
parcelHelpers.export(exports, "ZonedDateTime", ()=>(0, _calendarDateTs.ZonedDateTime));
parcelHelpers.export(exports, "GregorianCalendar", ()=>(0, _gregorianCalendarTs.GregorianCalendar));
parcelHelpers.export(exports, "JapaneseCalendar", ()=>(0, _japaneseCalendarTs.JapaneseCalendar));
parcelHelpers.export(exports, "BuddhistCalendar", ()=>(0, _buddhistCalendarTs.BuddhistCalendar));
parcelHelpers.export(exports, "TaiwanCalendar", ()=>(0, _taiwanCalendarTs.TaiwanCalendar));
parcelHelpers.export(exports, "PersianCalendar", ()=>(0, _persianCalendarTs.PersianCalendar));
parcelHelpers.export(exports, "IndianCalendar", ()=>(0, _indianCalendarTs.IndianCalendar));
parcelHelpers.export(exports, "IslamicCivilCalendar", ()=>(0, _islamicCalendarTs.IslamicCivilCalendar));
parcelHelpers.export(exports, "IslamicTabularCalendar", ()=>(0, _islamicCalendarTs.IslamicTabularCalendar));
parcelHelpers.export(exports, "IslamicUmalquraCalendar", ()=>(0, _islamicCalendarTs.IslamicUmalquraCalendar));
parcelHelpers.export(exports, "HebrewCalendar", ()=>(0, _hebrewCalendarTs.HebrewCalendar));
parcelHelpers.export(exports, "EthiopicCalendar", ()=>(0, _ethiopicCalendarTs.EthiopicCalendar));
parcelHelpers.export(exports, "EthiopicAmeteAlemCalendar", ()=>(0, _ethiopicCalendarTs.EthiopicAmeteAlemCalendar));
parcelHelpers.export(exports, "CopticCalendar", ()=>(0, _ethiopicCalendarTs.CopticCalendar));
parcelHelpers.export(exports, "createCalendar", ()=>(0, _createCalendarTs.createCalendar));
parcelHelpers.export(exports, "toCalendarDate", ()=>(0, _conversionTs.toCalendarDate));
parcelHelpers.export(exports, "toCalendarDateTime", ()=>(0, _conversionTs.toCalendarDateTime));
parcelHelpers.export(exports, "toTime", ()=>(0, _conversionTs.toTime));
parcelHelpers.export(exports, "toCalendar", ()=>(0, _conversionTs.toCalendar));
parcelHelpers.export(exports, "toZoned", ()=>(0, _conversionTs.toZoned));
parcelHelpers.export(exports, "toTimeZone", ()=>(0, _conversionTs.toTimeZone));
parcelHelpers.export(exports, "toLocalTimeZone", ()=>(0, _conversionTs.toLocalTimeZone));
parcelHelpers.export(exports, "fromDate", ()=>(0, _conversionTs.fromDate));
parcelHelpers.export(exports, "fromDateToLocal", ()=>(0, _conversionTs.fromDateToLocal));
parcelHelpers.export(exports, "fromAbsolute", ()=>(0, _conversionTs.fromAbsolute));
parcelHelpers.export(exports, "isSameDay", ()=>(0, _queriesTs.isSameDay));
parcelHelpers.export(exports, "isSameMonth", ()=>(0, _queriesTs.isSameMonth));
parcelHelpers.export(exports, "isSameYear", ()=>(0, _queriesTs.isSameYear));
parcelHelpers.export(exports, "isEqualDay", ()=>(0, _queriesTs.isEqualDay));
parcelHelpers.export(exports, "isEqualMonth", ()=>(0, _queriesTs.isEqualMonth));
parcelHelpers.export(exports, "isEqualYear", ()=>(0, _queriesTs.isEqualYear));
parcelHelpers.export(exports, "isToday", ()=>(0, _queriesTs.isToday));
parcelHelpers.export(exports, "getDayOfWeek", ()=>(0, _queriesTs.getDayOfWeek));
parcelHelpers.export(exports, "now", ()=>(0, _queriesTs.now));
parcelHelpers.export(exports, "today", ()=>(0, _queriesTs.today));
parcelHelpers.export(exports, "getHoursInDay", ()=>(0, _queriesTs.getHoursInDay));
parcelHelpers.export(exports, "getLocalTimeZone", ()=>(0, _queriesTs.getLocalTimeZone));
parcelHelpers.export(exports, "setLocalTimeZone", ()=>(0, _queriesTs.setLocalTimeZone));
parcelHelpers.export(exports, "resetLocalTimeZone", ()=>(0, _queriesTs.resetLocalTimeZone));
parcelHelpers.export(exports, "startOfMonth", ()=>(0, _queriesTs.startOfMonth));
parcelHelpers.export(exports, "startOfWeek", ()=>(0, _queriesTs.startOfWeek));
parcelHelpers.export(exports, "startOfYear", ()=>(0, _queriesTs.startOfYear));
parcelHelpers.export(exports, "endOfMonth", ()=>(0, _queriesTs.endOfMonth));
parcelHelpers.export(exports, "endOfWeek", ()=>(0, _queriesTs.endOfWeek));
parcelHelpers.export(exports, "endOfYear", ()=>(0, _queriesTs.endOfYear));
parcelHelpers.export(exports, "getMinimumMonthInYear", ()=>(0, _queriesTs.getMinimumMonthInYear));
parcelHelpers.export(exports, "getMinimumDayInMonth", ()=>(0, _queriesTs.getMinimumDayInMonth));
parcelHelpers.export(exports, "getWeeksInMonth", ()=>(0, _queriesTs.getWeeksInMonth));
parcelHelpers.export(exports, "minDate", ()=>(0, _queriesTs.minDate));
parcelHelpers.export(exports, "maxDate", ()=>(0, _queriesTs.maxDate));
parcelHelpers.export(exports, "isWeekend", ()=>(0, _queriesTs.isWeekend));
parcelHelpers.export(exports, "isWeekday", ()=>(0, _queriesTs.isWeekday));
parcelHelpers.export(exports, "isEqualCalendar", ()=>(0, _queriesTs.isEqualCalendar));
parcelHelpers.export(exports, "parseDate", ()=>(0, _stringTs.parseDate));
parcelHelpers.export(exports, "parseDateTime", ()=>(0, _stringTs.parseDateTime));
parcelHelpers.export(exports, "parseTime", ()=>(0, _stringTs.parseTime));
parcelHelpers.export(exports, "parseAbsolute", ()=>(0, _stringTs.parseAbsolute));
parcelHelpers.export(exports, "parseAbsoluteToLocal", ()=>(0, _stringTs.parseAbsoluteToLocal));
parcelHelpers.export(exports, "parseZonedDateTime", ()=>(0, _stringTs.parseZonedDateTime));
parcelHelpers.export(exports, "parseDuration", ()=>(0, _stringTs.parseDuration));
parcelHelpers.export(exports, "DateFormatter", ()=>(0, _dateFormatterTs.DateFormatter));
var _calendarDateTs = require("./CalendarDate.ts");
var _gregorianCalendarTs = require("./calendars/GregorianCalendar.ts");
var _japaneseCalendarTs = require("./calendars/JapaneseCalendar.ts");
var _buddhistCalendarTs = require("./calendars/BuddhistCalendar.ts");
var _taiwanCalendarTs = require("./calendars/TaiwanCalendar.ts");
var _persianCalendarTs = require("./calendars/PersianCalendar.ts");
var _indianCalendarTs = require("./calendars/IndianCalendar.ts");
var _islamicCalendarTs = require("./calendars/IslamicCalendar.ts");
var _hebrewCalendarTs = require("./calendars/HebrewCalendar.ts");
var _ethiopicCalendarTs = require("./calendars/EthiopicCalendar.ts");
var _createCalendarTs = require("./createCalendar.ts");
var _conversionTs = require("./conversion.ts");
var _queriesTs = require("./queries.ts");
var _stringTs = require("./string.ts");
var _dateFormatterTs = require("./DateFormatter.ts");

},{"./CalendarDate.ts":"rVMmY","./calendars/GregorianCalendar.ts":"bAwu9","./calendars/JapaneseCalendar.ts":"K7Tnh","./calendars/BuddhistCalendar.ts":"9iUDG","./calendars/TaiwanCalendar.ts":"4HqUn","./calendars/PersianCalendar.ts":"gBjZn","./calendars/IndianCalendar.ts":"jN237","./calendars/IslamicCalendar.ts":"k9LE6","./calendars/HebrewCalendar.ts":"ftvpR","./calendars/EthiopicCalendar.ts":"4TqDf","./createCalendar.ts":"qWoqQ","./conversion.ts":"a4Wnl","./queries.ts":"2J1m0","./string.ts":"kqG3b","./DateFormatter.ts":"je46U","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"rVMmY":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
/** A CalendarDate represents a date without any time components in a specific calendar system. */ parcelHelpers.export(exports, "CalendarDate", ()=>CalendarDate);
/** A Time represents a clock time without any date components. */ parcelHelpers.export(exports, "Time", ()=>Time);
/** A CalendarDateTime represents a date and time without a time zone, in a specific calendar system. */ parcelHelpers.export(exports, "CalendarDateTime", ()=>CalendarDateTime);
/** A ZonedDateTime represents a date and time in a specific time zone and calendar system. */ parcelHelpers.export(exports, "ZonedDateTime", ()=>ZonedDateTime);
var _manipulationTs = require("./manipulation.ts");
var _queriesTs = require("./queries.ts");
var _stringTs = require("./string.ts");
var _gregorianCalendarTs = require("./calendars/GregorianCalendar.ts");
var _conversionTs = require("./conversion.ts");
function shiftArgs(args) {
    let calendar = typeof args[0] === 'object' ? args.shift() : new (0, _gregorianCalendarTs.GregorianCalendar)();
    let era;
    if (typeof args[0] === 'string') era = args.shift();
    else {
        let eras = calendar.getEras();
        era = eras[eras.length - 1];
    }
    let year = args.shift();
    let month = args.shift();
    let day = args.shift();
    return [
        calendar,
        era,
        year,
        month,
        day
    ];
}
class CalendarDate {
    // This prevents TypeScript from allowing other types with the same fields to match.
    // i.e. a ZonedDateTime should not be be passable to a parameter that expects CalendarDate.
    // If that behavior is desired, use the AnyCalendarDate interface instead.
    // @ts-ignore
    #type;
    /** The calendar system associated with this date, e.g. Gregorian. */ calendar;
    /** The calendar era for this date, e.g. "BC" or "AD". */ era;
    /** The year of this date within the era. */ year;
    /**
   * The month number within the year. Note that some calendar systems such as Hebrew
   * may have a variable number of months per year. Therefore, month numbers may not
   * always correspond to the same month names in different years.
   */ month;
    /** The day number within the month. */ day;
    constructor(...args){
        let [calendar, era, year, month, day] = shiftArgs(args);
        this.calendar = calendar;
        this.era = era;
        this.year = year;
        this.month = month;
        this.day = day;
        (0, _manipulationTs.constrain)(this);
    }
    /** Returns a copy of this date. */ copy() {
        if (this.era) return new CalendarDate(this.calendar, this.era, this.year, this.month, this.day);
        else return new CalendarDate(this.calendar, this.year, this.month, this.day);
    }
    /** Returns a new `CalendarDate` with the given duration added to it. */ add(duration) {
        return (0, _manipulationTs.add)(this, duration);
    }
    /** Returns a new `CalendarDate` with the given duration subtracted from it. */ subtract(duration) {
        return (0, _manipulationTs.subtract)(this, duration);
    }
    /**
   * Returns a new `CalendarDate` with the given fields set to the provided values. Other fields
   * will be constrained accordingly.
   */ set(fields) {
        return (0, _manipulationTs.set)(this, fields);
    }
    /**
   * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        return (0, _manipulationTs.cycleDate)(this, field, amount, options);
    }
    /**
   * Converts the date to a native JavaScript Date object, with the time set to midnight in the
   * given time zone.
   */ toDate(timeZone) {
        return (0, _conversionTs.toDate)(this, timeZone);
    }
    /** Converts the date to an ISO 8601 formatted string. */ toString() {
        return (0, _stringTs.dateToString)(this);
    }
    /**
   * Compares this date with another. A negative result indicates that this date is before the given
   * one, and a positive date indicates that it is after.
   */ compare(b) {
        return (0, _queriesTs.compareDate)(this, b);
    }
}
class Time {
    // This prevents TypeScript from allowing other types with the same fields to match.
    // @ts-ignore
    #type;
    /** The hour, numbered from 0 to 23. */ hour;
    /** The minute in the hour. */ minute;
    /** The second in the minute. */ second;
    /** The millisecond in the second. */ millisecond;
    constructor(hour = 0, minute = 0, second = 0, millisecond = 0){
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.millisecond = millisecond;
        (0, _manipulationTs.constrainTime)(this);
    }
    /** Returns a copy of this time. */ copy() {
        return new Time(this.hour, this.minute, this.second, this.millisecond);
    }
    /** Returns a new `Time` with the given duration added to it. */ add(duration) {
        return (0, _manipulationTs.addTime)(this, duration);
    }
    /** Returns a new `Time` with the given duration subtracted from it. */ subtract(duration) {
        return (0, _manipulationTs.subtractTime)(this, duration);
    }
    /**
   * Returns a new `Time` with the given fields set to the provided values. Other fields will be
   * constrained accordingly.
   */ set(fields) {
        return (0, _manipulationTs.setTime)(this, fields);
    }
    /**
   * Returns a new `Time` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        return (0, _manipulationTs.cycleTime)(this, field, amount, options);
    }
    /** Converts the time to an ISO 8601 formatted string. */ toString() {
        return (0, _stringTs.timeToString)(this);
    }
    /**
   * Compares this time with another. A negative result indicates that this time is before the given
   * one, and a positive time indicates that it is after.
   */ compare(b) {
        return (0, _queriesTs.compareTime)(this, b);
    }
}
class CalendarDateTime {
    // This prevents TypeScript from allowing other types with the same fields to match.
    // @ts-ignore
    #type;
    /** The calendar system associated with this date, e.g. Gregorian. */ calendar;
    /** The calendar era for this date, e.g. "BC" or "AD". */ era;
    /** The year of this date within the era. */ year;
    /**
   * The month number within the year. Note that some calendar systems such as Hebrew
   * may have a variable number of months per year. Therefore, month numbers may not
   * always correspond to the same month names in different years.
   */ month;
    /** The day number within the month. */ day;
    /** The hour in the day, numbered from 0 to 23. */ hour;
    /** The minute in the hour. */ minute;
    /** The second in the minute. */ second;
    /** The millisecond in the second. */ millisecond;
    constructor(...args){
        let [calendar, era, year, month, day] = shiftArgs(args);
        this.calendar = calendar;
        this.era = era;
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = args.shift() || 0;
        this.minute = args.shift() || 0;
        this.second = args.shift() || 0;
        this.millisecond = args.shift() || 0;
        (0, _manipulationTs.constrain)(this);
    }
    /** Returns a copy of this date. */ copy() {
        if (this.era) return new CalendarDateTime(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
        else return new CalendarDateTime(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
    }
    /** Returns a new `CalendarDateTime` with the given duration added to it. */ add(duration) {
        return (0, _manipulationTs.add)(this, duration);
    }
    /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */ subtract(duration) {
        return (0, _manipulationTs.subtract)(this, duration);
    }
    /**
   * Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields
   * will be constrained accordingly.
   */ set(fields) {
        return (0, _manipulationTs.set)((0, _manipulationTs.setTime)(this, fields), fields);
    }
    /**
   * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        switch(field){
            case 'era':
            case 'year':
            case 'month':
            case 'day':
                return (0, _manipulationTs.cycleDate)(this, field, amount, options);
            default:
                return (0, _manipulationTs.cycleTime)(this, field, amount, options);
        }
    }
    /** Converts the date to a native JavaScript Date object in the given time zone. */ toDate(timeZone, disambiguation) {
        return (0, _conversionTs.toDate)(this, timeZone, disambiguation);
    }
    /** Converts the date to an ISO 8601 formatted string. */ toString() {
        return (0, _stringTs.dateTimeToString)(this);
    }
    /**
   * Compares this date with another. A negative result indicates that this date is before the given
   * one, and a positive date indicates that it is after.
   */ compare(b) {
        let res = (0, _queriesTs.compareDate)(this, b);
        if (res === 0) return (0, _queriesTs.compareTime)(this, (0, _conversionTs.toCalendarDateTime)(b));
        return res;
    }
}
class ZonedDateTime {
    // This prevents TypeScript from allowing other types with the same fields to match.
    // @ts-ignore
    #type;
    /** The calendar system associated with this date, e.g. Gregorian. */ calendar;
    /** The calendar era for this date, e.g. "BC" or "AD". */ era;
    /** The year of this date within the era. */ year;
    /**
   * The month number within the year. Note that some calendar systems such as Hebrew
   * may have a variable number of months per year. Therefore, month numbers may not
   * always correspond to the same month names in different years.
   */ month;
    /** The day number within the month. */ day;
    /** The hour in the day, numbered from 0 to 23. */ hour;
    /** The minute in the hour. */ minute;
    /** The second in the minute. */ second;
    /** The millisecond in the second. */ millisecond;
    /** The IANA time zone identifier that this date and time is represented in. */ timeZone;
    /** The UTC offset for this time, in milliseconds. */ offset;
    constructor(...args){
        let [calendar, era, year, month, day] = shiftArgs(args);
        let timeZone = args.shift();
        let offset = args.shift();
        this.calendar = calendar;
        this.era = era;
        this.year = year;
        this.month = month;
        this.day = day;
        this.timeZone = timeZone;
        this.offset = offset;
        this.hour = args.shift() || 0;
        this.minute = args.shift() || 0;
        this.second = args.shift() || 0;
        this.millisecond = args.shift() || 0;
        (0, _manipulationTs.constrain)(this);
    }
    /** Returns a copy of this date. */ copy() {
        if (this.era) return new ZonedDateTime(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
        else return new ZonedDateTime(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
    }
    /** Returns a new `ZonedDateTime` with the given duration added to it. */ add(duration) {
        return (0, _manipulationTs.addZoned)(this, duration);
    }
    /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */ subtract(duration) {
        return (0, _manipulationTs.subtractZoned)(this, duration);
    }
    /**
   * Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields
   * will be constrained accordingly.
   */ set(fields, disambiguation) {
        return (0, _manipulationTs.setZoned)(this, fields, disambiguation);
    }
    /**
   * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        return (0, _manipulationTs.cycleZoned)(this, field, amount, options);
    }
    /** Converts the date to a native JavaScript Date object. */ toDate() {
        return (0, _conversionTs.zonedToDate)(this);
    }
    /**
   * Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone
   * identifier.
   */ toString() {
        return (0, _stringTs.zonedDateTimeToString)(this);
    }
    /** Converts the date to an ISO 8601 formatted string in UTC. */ toAbsoluteString() {
        return this.toDate().toISOString();
    }
    /**
   * Compares this date with another. A negative result indicates that this date is before the given
   * one, and a positive date indicates that it is after.
   */ compare(b) {
        // TODO: Is this a bad idea??
        return this.toDate().getTime() - (0, _conversionTs.toZoned)(b, this.timeZone).toDate().getTime();
    }
}

},{"./manipulation.ts":"kGOHH","./queries.ts":"2J1m0","./string.ts":"kqG3b","./calendars/GregorianCalendar.ts":"bAwu9","./conversion.ts":"a4Wnl","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kGOHH":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "constrain", ()=>constrain);
parcelHelpers.export(exports, "invertDuration", ()=>invertDuration);
parcelHelpers.export(exports, "subtract", ()=>subtract);
parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "setTime", ()=>setTime);
parcelHelpers.export(exports, "constrainTime", ()=>constrainTime);
parcelHelpers.export(exports, "addTime", ()=>addTime);
parcelHelpers.export(exports, "subtractTime", ()=>subtractTime);
parcelHelpers.export(exports, "cycleDate", ()=>cycleDate);
parcelHelpers.export(exports, "cycleTime", ()=>cycleTime);
parcelHelpers.export(exports, "addZoned", ()=>addZoned);
parcelHelpers.export(exports, "subtractZoned", ()=>subtractZoned);
parcelHelpers.export(exports, "cycleZoned", ()=>cycleZoned);
parcelHelpers.export(exports, "setZoned", ()=>setZoned);
var _conversionTs = require("./conversion.ts");
var _gregorianCalendarTs = require("./calendars/GregorianCalendar.ts");
const ONE_HOUR = 3600000;
function add(date, duration) {
    let mutableDate = date.copy();
    let days = 'hour' in mutableDate ? addTimeFields(mutableDate, duration) : 0;
    addYears(mutableDate, duration.years || 0);
    if (mutableDate.calendar.balanceYearMonth) mutableDate.calendar.balanceYearMonth(mutableDate, date);
    mutableDate.month += duration.months || 0;
    balanceYearMonth(mutableDate);
    constrainMonthDay(mutableDate);
    mutableDate.day += (duration.weeks || 0) * 7;
    mutableDate.day += duration.days || 0;
    mutableDate.day += days;
    balanceDay(mutableDate);
    if (mutableDate.calendar.balanceDate) mutableDate.calendar.balanceDate(mutableDate);
    // Constrain in case adding ended up with a date outside the valid range for the calendar system.
    // The behavior here is slightly different than when constraining in the `set` function in that
    // we adjust smaller fields to their minimum/maximum values rather than constraining each field
    // individually. This matches the general behavior of `add` vs `set` regarding how fields are balanced.
    if (mutableDate.year < 1) {
        mutableDate.year = 1;
        mutableDate.month = 1;
        mutableDate.day = 1;
    }
    let maxYear = mutableDate.calendar.getYearsInEra(mutableDate);
    if (mutableDate.year > maxYear) {
        let isInverseEra = mutableDate.calendar.isInverseEra?.(mutableDate);
        mutableDate.year = maxYear;
        mutableDate.month = isInverseEra ? 1 : mutableDate.calendar.getMonthsInYear(mutableDate);
        mutableDate.day = isInverseEra ? 1 : mutableDate.calendar.getDaysInMonth(mutableDate);
    }
    if (mutableDate.month < 1) {
        mutableDate.month = 1;
        mutableDate.day = 1;
    }
    let maxMonth = mutableDate.calendar.getMonthsInYear(mutableDate);
    if (mutableDate.month > maxMonth) {
        mutableDate.month = maxMonth;
        mutableDate.day = mutableDate.calendar.getDaysInMonth(mutableDate);
    }
    mutableDate.day = Math.max(1, Math.min(mutableDate.calendar.getDaysInMonth(mutableDate), mutableDate.day));
    return mutableDate;
}
function addYears(date, years) {
    if (date.calendar.isInverseEra?.(date)) years = -years;
    date.year += years;
}
function balanceYearMonth(date) {
    while(date.month < 1){
        addYears(date, -1);
        date.month += date.calendar.getMonthsInYear(date);
    }
    let monthsInYear = 0;
    while(date.month > (monthsInYear = date.calendar.getMonthsInYear(date))){
        date.month -= monthsInYear;
        addYears(date, 1);
    }
}
function balanceDay(date) {
    while(date.day < 1){
        date.month--;
        balanceYearMonth(date);
        date.day += date.calendar.getDaysInMonth(date);
    }
    while(date.day > date.calendar.getDaysInMonth(date)){
        date.day -= date.calendar.getDaysInMonth(date);
        date.month++;
        balanceYearMonth(date);
    }
}
function constrainMonthDay(date) {
    date.month = Math.max(1, Math.min(date.calendar.getMonthsInYear(date), date.month));
    date.day = Math.max(1, Math.min(date.calendar.getDaysInMonth(date), date.day));
}
function constrain(date) {
    if (date.calendar.constrainDate) date.calendar.constrainDate(date);
    date.year = Math.max(1, Math.min(date.calendar.getYearsInEra(date), date.year));
    constrainMonthDay(date);
}
function invertDuration(duration) {
    let inverseDuration = {};
    for(let key in duration)if (typeof duration[key] === 'number') inverseDuration[key] = -duration[key];
    return inverseDuration;
}
function subtract(date, duration) {
    return add(date, invertDuration(duration));
}
function set(date, fields) {
    let mutableDate = date.copy();
    if (fields.era != null) mutableDate.era = fields.era;
    if (fields.year != null) mutableDate.year = fields.year;
    if (fields.month != null) mutableDate.month = fields.month;
    if (fields.day != null) mutableDate.day = fields.day;
    constrain(mutableDate);
    return mutableDate;
}
function setTime(value, fields) {
    let mutableValue = value.copy();
    if (fields.hour != null) mutableValue.hour = fields.hour;
    if (fields.minute != null) mutableValue.minute = fields.minute;
    if (fields.second != null) mutableValue.second = fields.second;
    if (fields.millisecond != null) mutableValue.millisecond = fields.millisecond;
    constrainTime(mutableValue);
    return mutableValue;
}
function balanceTime(time) {
    time.second += Math.floor(time.millisecond / 1000);
    time.millisecond = nonNegativeMod(time.millisecond, 1000);
    time.minute += Math.floor(time.second / 60);
    time.second = nonNegativeMod(time.second, 60);
    time.hour += Math.floor(time.minute / 60);
    time.minute = nonNegativeMod(time.minute, 60);
    let days = Math.floor(time.hour / 24);
    time.hour = nonNegativeMod(time.hour, 24);
    return days;
}
function constrainTime(time) {
    time.millisecond = Math.max(0, Math.min(time.millisecond, 999));
    time.second = Math.max(0, Math.min(time.second, 59));
    time.minute = Math.max(0, Math.min(time.minute, 59));
    time.hour = Math.max(0, Math.min(time.hour, 23));
}
function nonNegativeMod(a, b) {
    let result = a % b;
    if (result < 0) result += b;
    return result;
}
function addTimeFields(time, duration) {
    time.hour += duration.hours || 0;
    time.minute += duration.minutes || 0;
    time.second += duration.seconds || 0;
    time.millisecond += duration.milliseconds || 0;
    return balanceTime(time);
}
function addTime(time, duration) {
    let res = time.copy();
    addTimeFields(res, duration);
    return res;
}
function subtractTime(time, duration) {
    return addTime(time, invertDuration(duration));
}
function cycleDate(value, field, amount, options) {
    let mutable = value.copy();
    switch(field){
        case 'era':
            {
                let eras = value.calendar.getEras();
                let eraIndex = eras.indexOf(value.era);
                if (eraIndex < 0) throw new Error('Invalid era: ' + value.era);
                eraIndex = cycleValue(eraIndex, amount, 0, eras.length - 1, options?.round);
                mutable.era = eras[eraIndex];
                // Constrain the year and other fields within the era, so the era doesn't change when we balance below.
                constrain(mutable);
                break;
            }
        case 'year':
            if (mutable.calendar.isInverseEra?.(mutable)) amount = -amount;
            // The year field should not cycle within the era as that can cause weird behavior affecting other fields.
            // We need to also allow values < 1 so that decrementing goes to the previous era. If we get -Infinity back
            // we know we wrapped around after reaching 9999 (the maximum), so set the year back to 1.
            mutable.year = cycleValue(value.year, amount, -Infinity, 9999, options?.round);
            if (mutable.year === -Infinity) mutable.year = 1;
            if (mutable.calendar.balanceYearMonth) mutable.calendar.balanceYearMonth(mutable, value);
            break;
        case 'month':
            mutable.month = cycleValue(value.month, amount, 1, value.calendar.getMonthsInYear(value), options?.round);
            break;
        case 'day':
            mutable.day = cycleValue(value.day, amount, 1, value.calendar.getDaysInMonth(value), options?.round);
            break;
        default:
            throw new Error('Unsupported field ' + field);
    }
    if (value.calendar.balanceDate) value.calendar.balanceDate(mutable);
    constrain(mutable);
    return mutable;
}
function cycleTime(value, field, amount, options) {
    let mutable = value.copy();
    switch(field){
        case 'hour':
            {
                let hours = value.hour;
                let min = 0;
                let max = 23;
                if (options?.hourCycle === 12) {
                    let isPM = hours >= 12;
                    min = isPM ? 12 : 0;
                    max = isPM ? 23 : 11;
                }
                mutable.hour = cycleValue(hours, amount, min, max, options?.round);
                break;
            }
        case 'minute':
            mutable.minute = cycleValue(value.minute, amount, 0, 59, options?.round);
            break;
        case 'second':
            mutable.second = cycleValue(value.second, amount, 0, 59, options?.round);
            break;
        case 'millisecond':
            mutable.millisecond = cycleValue(value.millisecond, amount, 0, 999, options?.round);
            break;
        default:
            throw new Error('Unsupported field ' + field);
    }
    return mutable;
}
function cycleValue(value, amount, min, max, round = false) {
    if (round) {
        value += Math.sign(amount);
        if (value < min) value = max;
        let div = Math.abs(amount);
        if (amount > 0) value = Math.ceil(value / div) * div;
        else value = Math.floor(value / div) * div;
        if (value > max) value = min;
    } else {
        value += amount;
        if (value < min) value = max - (min - value - 1);
        else if (value > max) value = min + (value - max - 1);
    }
    return value;
}
function addZoned(dateTime, duration) {
    let ms;
    if (duration.years != null && duration.years !== 0 || duration.months != null && duration.months !== 0 || duration.weeks != null && duration.weeks !== 0 || duration.days != null && duration.days !== 0) {
        let res = add((0, _conversionTs.toCalendarDateTime)(dateTime), {
            years: duration.years,
            months: duration.months,
            weeks: duration.weeks,
            days: duration.days
        });
        // Changing the date may change the timezone offset, so we need to recompute
        // using the 'compatible' disambiguation.
        ms = (0, _conversionTs.toAbsolute)(res, dateTime.timeZone);
    } else // Otherwise, preserve the offset of the original date.
    ms = (0, _conversionTs.epochFromDate)(dateTime) - dateTime.offset;
    // Perform time manipulation in milliseconds rather than on the original time fields to account for DST.
    // For example, adding one hour during a DST transition may result in the hour field staying the same or
    // skipping an hour. This results in the offset field changing value instead of the specified field.
    ms += duration.milliseconds || 0;
    ms += (duration.seconds || 0) * 1000;
    ms += (duration.minutes || 0) * 60000;
    ms += (duration.hours || 0) * 3600000;
    let res = (0, _conversionTs.fromAbsolute)(ms, dateTime.timeZone);
    return (0, _conversionTs.toCalendar)(res, dateTime.calendar);
}
function subtractZoned(dateTime, duration) {
    return addZoned(dateTime, invertDuration(duration));
}
function cycleZoned(dateTime, field, amount, options) {
    // For date fields, we want the time to remain consistent and the UTC offset to potentially change to account for DST changes.
    // For time fields, we want the time to change by the amount given. This may result in the hour field staying the same, but the UTC
    // offset changing in the case of a backward DST transition, or skipping an hour in the case of a forward DST transition.
    switch(field){
        case 'hour':
            {
                let min = 0;
                let max = 23;
                if (options?.hourCycle === 12) {
                    let isPM = dateTime.hour >= 12;
                    min = isPM ? 12 : 0;
                    max = isPM ? 23 : 11;
                }
                // The minimum and maximum hour may be affected by daylight saving time.
                // For example, it might jump forward at midnight, and skip 1am.
                // Or it might end at midnight and repeat the 11pm hour. To handle this, we get
                // the possible absolute times for the min and max, and find the maximum range
                // that is within the current day.
                let plainDateTime = (0, _conversionTs.toCalendarDateTime)(dateTime);
                let minDate = (0, _conversionTs.toCalendar)(setTime(plainDateTime, {
                    hour: min
                }), new (0, _gregorianCalendarTs.GregorianCalendar)());
                let minAbsolute = [
                    (0, _conversionTs.toAbsolute)(minDate, dateTime.timeZone, 'earlier'),
                    (0, _conversionTs.toAbsolute)(minDate, dateTime.timeZone, 'later')
                ].filter((ms)=>(0, _conversionTs.fromAbsolute)(ms, dateTime.timeZone).day === minDate.day)[0];
                let maxDate = (0, _conversionTs.toCalendar)(setTime(plainDateTime, {
                    hour: max
                }), new (0, _gregorianCalendarTs.GregorianCalendar)());
                let maxAbsolute = [
                    (0, _conversionTs.toAbsolute)(maxDate, dateTime.timeZone, 'earlier'),
                    (0, _conversionTs.toAbsolute)(maxDate, dateTime.timeZone, 'later')
                ].filter((ms)=>(0, _conversionTs.fromAbsolute)(ms, dateTime.timeZone).day === maxDate.day).pop();
                // Since hours may repeat, we need to operate on the absolute time in milliseconds.
                // This is done in hours from the Unix epoch so that cycleValue works correctly,
                // and then converted back to milliseconds.
                let ms = (0, _conversionTs.epochFromDate)(dateTime) - dateTime.offset;
                let hours = Math.floor(ms / ONE_HOUR);
                let remainder = ms % ONE_HOUR;
                ms = cycleValue(hours, amount, Math.floor(minAbsolute / ONE_HOUR), Math.floor(maxAbsolute / ONE_HOUR), options?.round) * ONE_HOUR + remainder;
                // Now compute the new timezone offset, and convert the absolute time back to local time.
                return (0, _conversionTs.toCalendar)((0, _conversionTs.fromAbsolute)(ms, dateTime.timeZone), dateTime.calendar);
            }
        case 'minute':
        case 'second':
        case 'millisecond':
            // @ts-ignore
            return cycleTime(dateTime, field, amount, options);
        case 'era':
        case 'year':
        case 'month':
        case 'day':
            {
                let res = cycleDate((0, _conversionTs.toCalendarDateTime)(dateTime), field, amount, options);
                let ms = (0, _conversionTs.toAbsolute)(res, dateTime.timeZone);
                return (0, _conversionTs.toCalendar)((0, _conversionTs.fromAbsolute)(ms, dateTime.timeZone), dateTime.calendar);
            }
        default:
            throw new Error('Unsupported field ' + field);
    }
}
function setZoned(dateTime, fields, disambiguation) {
    // Set the date/time fields, and recompute the UTC offset to account for DST changes.
    // We also need to validate by converting back to a local time in case hours are skipped during forward DST transitions.
    let plainDateTime = (0, _conversionTs.toCalendarDateTime)(dateTime);
    let res = setTime(set(plainDateTime, fields), fields);
    // If the resulting plain date time values are equal, return the original time.
    // We don't want to change the offset when setting the time to the same value.
    if (res.compare(plainDateTime) === 0) return dateTime;
    let ms = (0, _conversionTs.toAbsolute)(res, dateTime.timeZone, disambiguation);
    return (0, _conversionTs.toCalendar)((0, _conversionTs.fromAbsolute)(ms, dateTime.timeZone), dateTime.calendar);
}

},{"./conversion.ts":"a4Wnl","./calendars/GregorianCalendar.ts":"bAwu9","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"a4Wnl":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "epochFromDate", ()=>epochFromDate);
parcelHelpers.export(exports, "getTimeZoneOffset", ()=>getTimeZoneOffset);
parcelHelpers.export(exports, "possibleAbsolutes", ()=>possibleAbsolutes);
parcelHelpers.export(exports, "toAbsolute", ()=>toAbsolute);
parcelHelpers.export(exports, "toDate", ()=>toDate);
/**
 * Takes a Unix epoch (milliseconds since 1970) and converts it to the provided time zone.
 */ parcelHelpers.export(exports, "fromAbsolute", ()=>fromAbsolute);
/**
 * Takes a `Date` object and converts it to the provided time zone.
 */ parcelHelpers.export(exports, "fromDate", ()=>fromDate);
/**
 * Takes a `Date` object and converts it to the time zone identifier for the current user.
 */ parcelHelpers.export(exports, "fromDateToLocal", ()=>fromDateToLocal);
/**
 * Converts a value with date components such as a `CalendarDateTime` or `ZonedDateTime` into a
 * `CalendarDate`.
 */ parcelHelpers.export(exports, "toCalendarDate", ()=>toCalendarDate);
parcelHelpers.export(exports, "toDateFields", ()=>toDateFields);
parcelHelpers.export(exports, "toTimeFields", ()=>toTimeFields);
/**
 * Converts a date value to a `CalendarDateTime`. An optional `Time` value can be passed to set the
 * time of the resulting value, otherwise it will default to midnight.
 */ parcelHelpers.export(exports, "toCalendarDateTime", ()=>toCalendarDateTime);
/** Extracts the time components from a value containing a date and time. */ parcelHelpers.export(exports, "toTime", ()=>toTime);
/** Converts a date from one calendar system to another. */ parcelHelpers.export(exports, "toCalendar", ()=>toCalendar);
/**
 * Converts a date value to a `ZonedDateTime` in the provided time zone. The `disambiguation` option
 * can be set to control how values that fall on daylight saving time changes are interpreted.
 */ parcelHelpers.export(exports, "toZoned", ()=>toZoned);
parcelHelpers.export(exports, "zonedToDate", ()=>zonedToDate);
/** Converts a `ZonedDateTime` from one time zone to another. */ parcelHelpers.export(exports, "toTimeZone", ()=>toTimeZone);
/** Converts the given `ZonedDateTime` into the user's local time zone. */ parcelHelpers.export(exports, "toLocalTimeZone", ()=>toLocalTimeZone);
var _calendarDateTs = require("./CalendarDate.ts");
var _manipulationTs = require("./manipulation.ts");
var _gregorianCalendarTs = require("./calendars/GregorianCalendar.ts");
var _queriesTs = require("./queries.ts");
function epochFromDate(date) {
    date = toCalendar(date, new (0, _gregorianCalendarTs.GregorianCalendar)());
    let year = (0, _gregorianCalendarTs.getExtendedYear)(date.era, date.year);
    return epochFromParts(year, date.month, date.day, date.hour, date.minute, date.second, date.millisecond);
}
function epochFromParts(year, month, day, hour, minute, second, millisecond) {
    // Note: Date.UTC() interprets one and two-digit years as being in the
    // 20th century, so don't use it
    let date = new Date();
    date.setUTCHours(hour, minute, second, millisecond);
    date.setUTCFullYear(year, month - 1, day);
    return date.getTime();
}
function getTimeZoneOffset(ms, timeZone) {
    // Fast path for UTC.
    if (timeZone === 'UTC') return 0;
    // Fast path: for local timezone after 1970, use native Date.
    // Skip this fast path if the local timezone was explicitly overridden via setLocalTimeZone,
    // since native Date always uses the browser's timezone, not the overridden one.
    if (ms > 0 && timeZone === (0, _queriesTs.getLocalTimeZone)() && !(0, _queriesTs.isLocalTimeZoneOverridden)()) return new Date(ms).getTimezoneOffset() * -60000;
    let { year, month, day, hour, minute, second } = getTimeZoneParts(ms, timeZone);
    let utc = epochFromParts(year, month, day, hour, minute, second, 0);
    return utc - Math.floor(ms / 1000) * 1000;
}
const formattersByTimeZone = new Map();
function getTimeZoneParts(ms, timeZone) {
    let formatter = formattersByTimeZone.get(timeZone);
    if (!formatter) {
        formatter = new Intl.DateTimeFormat('en-US', {
            timeZone,
            hour12: false,
            era: 'short',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
        formattersByTimeZone.set(timeZone, formatter);
    }
    let parts = formatter.formatToParts(new Date(ms));
    let namedParts = {};
    for (let part of parts)if (part.type !== 'literal') namedParts[part.type] = part.value;
    return {
        // Firefox returns B instead of BC... https://bugzilla.mozilla.org/show_bug.cgi?id=1752253
        year: namedParts.era === 'BC' || namedParts.era === 'B' ? -namedParts.year + 1 : +namedParts.year,
        month: +namedParts.month,
        day: +namedParts.day,
        hour: namedParts.hour === '24' ? 0 : +namedParts.hour,
        minute: +namedParts.minute,
        second: +namedParts.second
    };
}
const DAYMILLIS = 86400000;
function possibleAbsolutes(date, timeZone) {
    let ms = epochFromDate(date);
    let earlier = ms - getTimeZoneOffset(ms - DAYMILLIS, timeZone);
    let later = ms - getTimeZoneOffset(ms + DAYMILLIS, timeZone);
    return getValidWallTimes(date, timeZone, earlier, later);
}
function getValidWallTimes(date, timeZone, earlier, later) {
    let found = earlier === later ? [
        earlier
    ] : [
        earlier,
        later
    ];
    return found.filter((absolute)=>isValidWallTime(date, timeZone, absolute));
}
function isValidWallTime(date, timeZone, absolute) {
    let parts = getTimeZoneParts(absolute, timeZone);
    return date.year === parts.year && date.month === parts.month && date.day === parts.day && date.hour === parts.hour && date.minute === parts.minute && date.second === parts.second;
}
function toAbsolute(date, timeZone, disambiguation = 'compatible') {
    let dateTime = toCalendarDateTime(date);
    // Fast path: if the time zone is UTC, use native Date.
    if (timeZone === 'UTC') return epochFromDate(dateTime);
    // Fast path: if the time zone is the local timezone and disambiguation is compatible, use native Date.
    // Skip this fast path if the local timezone was explicitly overridden via setLocalTimeZone,
    // since native Date always uses the browser's timezone, not the overridden one.
    if (timeZone === (0, _queriesTs.getLocalTimeZone)() && disambiguation === 'compatible' && !(0, _queriesTs.isLocalTimeZoneOverridden)()) {
        dateTime = toCalendar(dateTime, new (0, _gregorianCalendarTs.GregorianCalendar)());
        // Don't use Date constructor here because two-digit years are interpreted in the 20th century.
        let date = new Date();
        let year = (0, _gregorianCalendarTs.getExtendedYear)(dateTime.era, dateTime.year);
        date.setFullYear(year, dateTime.month - 1, dateTime.day);
        date.setHours(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
        return date.getTime();
    }
    let ms = epochFromDate(dateTime);
    let offsetBefore = getTimeZoneOffset(ms - DAYMILLIS, timeZone);
    let offsetAfter = getTimeZoneOffset(ms + DAYMILLIS, timeZone);
    let valid = getValidWallTimes(dateTime, timeZone, ms - offsetBefore, ms - offsetAfter);
    if (valid.length === 1) return valid[0];
    if (valid.length > 1) switch(disambiguation){
        // 'compatible' means 'earlier' for "fall back" transitions
        case 'compatible':
        case 'earlier':
            return valid[0];
        case 'later':
            return valid[valid.length - 1];
        case 'reject':
            throw new RangeError('Multiple possible absolute times found');
    }
    switch(disambiguation){
        case 'earlier':
            return Math.min(ms - offsetBefore, ms - offsetAfter);
        // 'compatible' means 'later' for "spring forward" transitions
        case 'compatible':
        case 'later':
            return Math.max(ms - offsetBefore, ms - offsetAfter);
        case 'reject':
            throw new RangeError('No such absolute time found');
    }
}
function toDate(dateTime, timeZone, disambiguation = 'compatible') {
    return new Date(toAbsolute(dateTime, timeZone, disambiguation));
}
function fromAbsolute(ms, timeZone) {
    let offset = getTimeZoneOffset(ms, timeZone);
    let date = new Date(ms + offset);
    let year = date.getUTCFullYear();
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    let hour = date.getUTCHours();
    let minute = date.getUTCMinutes();
    let second = date.getUTCSeconds();
    let millisecond = date.getUTCMilliseconds();
    return new (0, _calendarDateTs.ZonedDateTime)(year < 1 ? 'BC' : 'AD', year < 1 ? -year + 1 : year, month, day, timeZone, offset, hour, minute, second, millisecond);
}
function fromDate(date, timeZone) {
    return fromAbsolute(date.getTime(), timeZone);
}
function fromDateToLocal(date) {
    return fromDate(date, (0, _queriesTs.getLocalTimeZone)());
}
function toCalendarDate(dateTime) {
    return new (0, _calendarDateTs.CalendarDate)(dateTime.calendar, dateTime.era, dateTime.year, dateTime.month, dateTime.day);
}
function toDateFields(date) {
    return {
        era: date.era,
        year: date.year,
        month: date.month,
        day: date.day
    };
}
function toTimeFields(date) {
    return {
        hour: date.hour,
        minute: date.minute,
        second: date.second,
        millisecond: date.millisecond
    };
}
function toCalendarDateTime(date, time) {
    let hour = 0, minute = 0, second = 0, millisecond = 0;
    if ('timeZone' in date) ({ hour, minute, second, millisecond } = date);
    else if ('hour' in date && !time) return date;
    if (time) ({ hour, minute, second, millisecond } = time);
    return new (0, _calendarDateTs.CalendarDateTime)(date.calendar, date.era, date.year, date.month, date.day, hour, minute, second, millisecond);
}
function toTime(dateTime) {
    return new (0, _calendarDateTs.Time)(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
}
function toCalendar(date, calendar) {
    if ((0, _queriesTs.isEqualCalendar)(date.calendar, calendar)) return date;
    let calendarDate = calendar.fromJulianDay(date.calendar.toJulianDay(date));
    let copy = date.copy();
    copy.calendar = calendar;
    copy.era = calendarDate.era;
    copy.year = calendarDate.year;
    copy.month = calendarDate.month;
    copy.day = calendarDate.day;
    (0, _manipulationTs.constrain)(copy);
    return copy;
}
function toZoned(date, timeZone, disambiguation) {
    if (date instanceof (0, _calendarDateTs.ZonedDateTime)) {
        if (date.timeZone === timeZone) return date;
        return toTimeZone(date, timeZone);
    }
    let ms = toAbsolute(date, timeZone, disambiguation);
    return fromAbsolute(ms, timeZone);
}
function zonedToDate(date) {
    let ms = epochFromDate(date) - date.offset;
    return new Date(ms);
}
function toTimeZone(date, timeZone) {
    let ms = epochFromDate(date) - date.offset;
    return toCalendar(fromAbsolute(ms, timeZone), date.calendar);
}
function toLocalTimeZone(date) {
    return toTimeZone(date, (0, _queriesTs.getLocalTimeZone)());
}

},{"./CalendarDate.ts":"rVMmY","./manipulation.ts":"kGOHH","./calendars/GregorianCalendar.ts":"bAwu9","./queries.ts":"2J1m0","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bAwu9":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gregorianToJulianDay", ()=>gregorianToJulianDay);
parcelHelpers.export(exports, "isLeapYear", ()=>isLeapYear);
parcelHelpers.export(exports, "getExtendedYear", ()=>getExtendedYear);
parcelHelpers.export(exports, "fromExtendedYear", ()=>fromExtendedYear);
/**
 * The Gregorian calendar is the most commonly used calendar system in the world. It supports two
 * eras: BC, and AD. Years always contain 12 months, and 365 or 366 days depending on whether it is
 * a leap year.
 */ parcelHelpers.export(exports, "GregorianCalendar", ()=>GregorianCalendar);
var _calendarDateTs = require("../CalendarDate.ts");
var _utilsTs = require("../utils.ts");
const EPOCH = 1721426; // 001/01/03 Julian C.E.
function gregorianToJulianDay(era, year, month, day) {
    year = getExtendedYear(era, year);
    let y1 = year - 1;
    let monthOffset = -2;
    if (month <= 2) monthOffset = 0;
    else if (isLeapYear(year)) monthOffset = -1;
    return EPOCH - 1 + 365 * y1 + Math.floor(y1 / 4) - Math.floor(y1 / 100) + Math.floor(y1 / 400) + Math.floor((367 * month - 362) / 12 + monthOffset + day);
}
function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function getExtendedYear(era, year) {
    return era === 'BC' ? 1 - year : year;
}
function fromExtendedYear(year) {
    let era = 'AD';
    if (year <= 0) {
        era = 'BC';
        year = 1 - year;
    }
    return [
        era,
        year
    ];
}
const daysInMonth = {
    standard: [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ],
    leapyear: [
        31,
        29,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ]
};
class GregorianCalendar {
    identifier = 'gregory';
    fromJulianDay(jd) {
        let jd0 = jd;
        let depoch = jd0 - EPOCH;
        let quadricent = Math.floor(depoch / 146097);
        let dqc = (0, _utilsTs.mod)(depoch, 146097);
        let cent = Math.floor(dqc / 36524);
        let dcent = (0, _utilsTs.mod)(dqc, 36524);
        let quad = Math.floor(dcent / 1461);
        let dquad = (0, _utilsTs.mod)(dcent, 1461);
        let yindex = Math.floor(dquad / 365);
        let extendedYear = quadricent * 400 + cent * 100 + quad * 4 + yindex + (cent !== 4 && yindex !== 4 ? 1 : 0);
        let [era, year] = fromExtendedYear(extendedYear);
        let yearDay = jd0 - gregorianToJulianDay(era, year, 1, 1);
        let leapAdj = 2;
        if (jd0 < gregorianToJulianDay(era, year, 3, 1)) leapAdj = 0;
        else if (isLeapYear(year)) leapAdj = 1;
        let month = Math.floor(((yearDay + leapAdj) * 12 + 373) / 367);
        let day = jd0 - gregorianToJulianDay(era, year, month, 1) + 1;
        return new (0, _calendarDateTs.CalendarDate)(era, year, month, day);
    }
    toJulianDay(date) {
        return gregorianToJulianDay(date.era, date.year, date.month, date.day);
    }
    getDaysInMonth(date) {
        return daysInMonth[isLeapYear(date.year) ? 'leapyear' : 'standard'][date.month - 1];
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getMonthsInYear(date) {
        return 12;
    }
    getDaysInYear(date) {
        return isLeapYear(date.year) ? 366 : 365;
    }
    getMaximumMonthsInYear() {
        return 12;
    }
    getMaximumDaysInMonth() {
        return 31;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getYearsInEra(date) {
        return 9999;
    }
    getEras() {
        return [
            'BC',
            'AD'
        ];
    }
    isInverseEra(date) {
        return date.era === 'BC';
    }
    balanceDate(date) {
        if (date.year <= 0) {
            date.era = date.era === 'BC' ? 'AD' : 'BC';
            date.year = 1 - date.year;
        }
    }
}

},{"../CalendarDate.ts":"rVMmY","../utils.ts":"eQkFv","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eQkFv":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
parcelHelpers.export(exports, "mod", ()=>mod);
function mod(amount, numerator) {
    return amount - numerator * Math.floor(amount / numerator);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2J1m0":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
/** Returns whether the given dates occur on the same day, regardless of the time or calendar system. */ parcelHelpers.export(exports, "isSameDay", ()=>isSameDay);
/**
 * Returns whether the given dates occur in the same month, using the calendar system of the first
 * date.
 */ parcelHelpers.export(exports, "isSameMonth", ()=>isSameMonth);
/**
 * Returns whether the given dates occur in the same year, using the calendar system of the first
 * date.
 */ parcelHelpers.export(exports, "isSameYear", ()=>isSameYear);
/** Returns whether the given dates occur on the same day, and are of the same calendar system. */ parcelHelpers.export(exports, "isEqualDay", ()=>isEqualDay);
/** Returns whether the given dates occur in the same month, and are of the same calendar system. */ parcelHelpers.export(exports, "isEqualMonth", ()=>isEqualMonth);
/** Returns whether the given dates occur in the same year, and are of the same calendar system. */ parcelHelpers.export(exports, "isEqualYear", ()=>isEqualYear);
/** Returns whether two calendars are the same. */ parcelHelpers.export(exports, "isEqualCalendar", ()=>isEqualCalendar);
/** Returns whether the date is today in the given time zone. */ parcelHelpers.export(exports, "isToday", ()=>isToday);
/**
 * Returns the day of week for the given date and locale. Days are numbered from zero to six,
 * where zero is the first day of the week in the given locale. For example, in the United States,
 * the first day of the week is Sunday, but in France it is Monday.
 */ parcelHelpers.export(exports, "getDayOfWeek", ()=>getDayOfWeek);
/** Returns the current time in the given time zone. */ parcelHelpers.export(exports, "now", ()=>now);
/** Returns today's date in the given time zone. */ parcelHelpers.export(exports, "today", ()=>today);
parcelHelpers.export(exports, "compareDate", ()=>compareDate);
parcelHelpers.export(exports, "compareTime", ()=>compareTime);
/**
 * Returns the number of hours in the given date and time zone.
 * Usually this is 24, but it could be 23 or 25 if the date is on a daylight saving transition.
 */ parcelHelpers.export(exports, "getHoursInDay", ()=>getHoursInDay);
/** Returns the time zone identifier for the current user. */ parcelHelpers.export(exports, "getLocalTimeZone", ()=>getLocalTimeZone);
/** Sets the time zone identifier for the current user. */ parcelHelpers.export(exports, "setLocalTimeZone", ()=>setLocalTimeZone);
/** Resets the time zone identifier for the current user. */ parcelHelpers.export(exports, "resetLocalTimeZone", ()=>resetLocalTimeZone);
/** Returns whether the local time zone has been explicitly overridden via `setLocalTimeZone`. */ parcelHelpers.export(exports, "isLocalTimeZoneOverridden", ()=>isLocalTimeZoneOverridden);
parcelHelpers.export(exports, "startOfMonth", ()=>startOfMonth);
parcelHelpers.export(exports, "endOfMonth", ()=>endOfMonth);
parcelHelpers.export(exports, "startOfYear", ()=>startOfYear);
parcelHelpers.export(exports, "endOfYear", ()=>endOfYear);
parcelHelpers.export(exports, "getMinimumMonthInYear", ()=>getMinimumMonthInYear);
parcelHelpers.export(exports, "getMinimumDayInMonth", ()=>getMinimumDayInMonth);
parcelHelpers.export(exports, "startOfWeek", ()=>startOfWeek);
parcelHelpers.export(exports, "endOfWeek", ()=>endOfWeek);
/** Returns the number of weeks in the given month and locale. */ parcelHelpers.export(exports, "getWeeksInMonth", ()=>getWeeksInMonth);
parcelHelpers.export(exports, "minDate", ()=>minDate);
/** Returns the greater of the two provider dates. */ parcelHelpers.export(exports, "maxDate", ()=>maxDate);
/** Returns whether the given date is on a weekend in the given locale. */ parcelHelpers.export(exports, "isWeekend", ()=>isWeekend);
/** Returns whether the given date is on a weekday in the given locale. */ parcelHelpers.export(exports, "isWeekday", ()=>isWeekday);
var _conversionTs = require("./conversion.ts");
var _weekStartDataTs = require("./weekStartData.ts");
function isSameDay(a, b) {
    b = (0, _conversionTs.toCalendar)(b, a.calendar);
    return a.era === b.era && a.year === b.year && a.month === b.month && a.day === b.day;
}
function isSameMonth(a, b) {
    b = (0, _conversionTs.toCalendar)(b, a.calendar);
    // In the Japanese calendar, months can span multiple eras/years, so only compare the first of the month.
    a = startOfMonth(a);
    b = startOfMonth(b);
    return a.era === b.era && a.year === b.year && a.month === b.month;
}
function isSameYear(a, b) {
    b = (0, _conversionTs.toCalendar)(b, a.calendar);
    a = startOfYear(a);
    b = startOfYear(b);
    return a.era === b.era && a.year === b.year;
}
function isEqualDay(a, b) {
    return isEqualCalendar(a.calendar, b.calendar) && isSameDay(a, b);
}
function isEqualMonth(a, b) {
    return isEqualCalendar(a.calendar, b.calendar) && isSameMonth(a, b);
}
function isEqualYear(a, b) {
    return isEqualCalendar(a.calendar, b.calendar) && isSameYear(a, b);
}
function isEqualCalendar(a, b) {
    return a.isEqual?.(b) ?? b.isEqual?.(a) ?? a.identifier === b.identifier;
}
function isToday(date, timeZone) {
    return isSameDay(date, today(timeZone));
}
const DAY_MAP = {
    sun: 0,
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6
};
function getDayOfWeek(date, locale, firstDayOfWeek) {
    let julian = date.calendar.toJulianDay(date);
    // If julian is negative, then julian % 7 will be negative, so we adjust
    // accordingly.  Julian day 0 is Monday.
    let weekStart = firstDayOfWeek ? DAY_MAP[firstDayOfWeek] : getWeekStart(locale);
    let dayOfWeek = Math.ceil(julian + 1 - weekStart) % 7;
    if (dayOfWeek < 0) dayOfWeek += 7;
    return dayOfWeek;
}
function now(timeZone) {
    return (0, _conversionTs.fromAbsolute)(Date.now(), timeZone);
}
function today(timeZone) {
    return (0, _conversionTs.toCalendarDate)(now(timeZone));
}
function compareDate(a, b) {
    return a.calendar.toJulianDay(a) - b.calendar.toJulianDay(b);
}
function compareTime(a, b) {
    return timeToMs(a) - timeToMs(b);
}
function timeToMs(a) {
    return a.hour * 3600000 + a.minute * 60000 + a.second * 1000 + a.millisecond;
}
function getHoursInDay(a, timeZone) {
    let ms = (0, _conversionTs.toAbsolute)(a, timeZone);
    let tomorrow = a.add({
        days: 1
    });
    let tomorrowMs = (0, _conversionTs.toAbsolute)(tomorrow, timeZone);
    return (tomorrowMs - ms) / 3600000;
}
let localTimeZone = null;
let localTimeZoneOverride = false;
function getLocalTimeZone() {
    if (localTimeZone == null) localTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
    return localTimeZone;
}
function setLocalTimeZone(timeZone) {
    localTimeZoneOverride = true;
    localTimeZone = timeZone;
}
function resetLocalTimeZone() {
    localTimeZoneOverride = false;
    localTimeZone = null;
}
function isLocalTimeZoneOverridden() {
    return localTimeZoneOverride;
}
function startOfMonth(date) {
    // Use `subtract` instead of `set` so we don't get constrained in an era.
    return date.subtract({
        days: date.day - 1
    });
}
function endOfMonth(date) {
    return date.add({
        days: date.calendar.getDaysInMonth(date) - date.day
    });
}
function startOfYear(date) {
    return startOfMonth(date.subtract({
        months: date.month - 1
    }));
}
function endOfYear(date) {
    return endOfMonth(date.add({
        months: date.calendar.getMonthsInYear(date) - date.month
    }));
}
function getMinimumMonthInYear(date) {
    if (date.calendar.getMinimumMonthInYear) return date.calendar.getMinimumMonthInYear(date);
    return 1;
}
function getMinimumDayInMonth(date) {
    if (date.calendar.getMinimumDayInMonth) return date.calendar.getMinimumDayInMonth(date);
    return 1;
}
function startOfWeek(date, locale, firstDayOfWeek) {
    let dayOfWeek = getDayOfWeek(date, locale, firstDayOfWeek);
    return date.subtract({
        days: dayOfWeek
    });
}
function endOfWeek(date, locale, firstDayOfWeek) {
    return startOfWeek(date, locale, firstDayOfWeek).add({
        days: 6
    });
}
const cachedRegions = new Map();
const cachedWeekInfo = new Map();
function getRegion(locale) {
    // If the Intl.Locale API is available, use it to get the region for the locale.
    // @ts-ignore
    if (Intl.Locale) {
        // Constructing an Intl.Locale is expensive, so cache the result.
        let region = cachedRegions.get(locale);
        if (!region) {
            // @ts-ignore
            region = new Intl.Locale(locale).maximize().region;
            if (region) cachedRegions.set(locale, region);
        }
        return region;
    }
    // If not, just try splitting the string.
    // If the second part of the locale string is 'u',
    // then this is a unicode extension, so ignore it.
    // Otherwise, it should be the region.
    let part = locale.split('-')[1];
    return part === 'u' ? undefined : part;
}
function getWeekStart(locale) {
    // TODO: use Intl.Locale for this once browsers support the weekInfo property
    // https://github.com/tc39/proposal-intl-locale-info
    let weekInfo = cachedWeekInfo.get(locale);
    if (!weekInfo) {
        if (Intl.Locale) {
            // @ts-ignore
            let localeInst = new Intl.Locale(locale);
            if ('getWeekInfo' in localeInst) {
                weekInfo = localeInst.getWeekInfo();
                if (weekInfo) {
                    cachedWeekInfo.set(locale, weekInfo);
                    return weekInfo.firstDay;
                }
            }
        }
        let region = getRegion(locale);
        if (locale.includes('-fw-')) {
            // pull the value for the attribute fw from strings such as en-US-u-ca-iso8601-fw-tue or en-US-u-ca-iso8601-fw-mon-nu-thai
            // where the fw attribute could be followed by another unicode locale extension or not
            let day = locale.split('-fw-')[1].split('-')[0];
            if (day === 'mon') weekInfo = {
                firstDay: 1
            };
            else if (day === 'tue') weekInfo = {
                firstDay: 2
            };
            else if (day === 'wed') weekInfo = {
                firstDay: 3
            };
            else if (day === 'thu') weekInfo = {
                firstDay: 4
            };
            else if (day === 'fri') weekInfo = {
                firstDay: 5
            };
            else if (day === 'sat') weekInfo = {
                firstDay: 6
            };
            else weekInfo = {
                firstDay: 0
            };
        } else if (locale.includes('-ca-iso8601')) weekInfo = {
            firstDay: 1
        };
        else weekInfo = {
            firstDay: region ? (0, _weekStartDataTs.weekStartData)[region] || 0 : 0
        };
        cachedWeekInfo.set(locale, weekInfo);
    }
    return weekInfo.firstDay;
}
function getWeeksInMonth(date, locale, firstDayOfWeek) {
    let days = date.calendar.getDaysInMonth(date);
    return Math.ceil((getDayOfWeek(startOfMonth(date), locale, firstDayOfWeek) + days) / 7);
}
function minDate(a, b) {
    if (a && b) return a.compare(b) <= 0 ? a : b;
    return a || b;
}
function maxDate(a, b) {
    if (a && b) return a.compare(b) >= 0 ? a : b;
    return a || b;
}
const WEEKEND_DATA = {
    AF: [
        4,
        5
    ],
    AE: [
        5,
        6
    ],
    BH: [
        5,
        6
    ],
    DZ: [
        5,
        6
    ],
    EG: [
        5,
        6
    ],
    IL: [
        5,
        6
    ],
    IQ: [
        5,
        6
    ],
    IR: [
        5,
        5
    ],
    JO: [
        5,
        6
    ],
    KW: [
        5,
        6
    ],
    LY: [
        5,
        6
    ],
    OM: [
        5,
        6
    ],
    QA: [
        5,
        6
    ],
    SA: [
        5,
        6
    ],
    SD: [
        5,
        6
    ],
    SY: [
        5,
        6
    ],
    YE: [
        5,
        6
    ]
};
function isWeekend(date, locale) {
    let julian = date.calendar.toJulianDay(date);
    // If julian is negative, then julian % 7 will be negative, so we adjust
    // accordingly.  Julian day 0 is Monday.
    let dayOfWeek = Math.ceil(julian + 1) % 7;
    if (dayOfWeek < 0) dayOfWeek += 7;
    let region = getRegion(locale);
    // Use Intl.Locale for this once weekInfo is supported.
    // https://github.com/tc39/proposal-intl-locale-info
    let [start, end] = WEEKEND_DATA[region] || [
        6,
        0
    ];
    return dayOfWeek === start || dayOfWeek === end;
}
function isWeekday(date, locale) {
    return !isWeekend(date, locale);
}

},{"./conversion.ts":"a4Wnl","./weekStartData.ts":"8LLVc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8LLVc":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
 */ // Data from https://github.com/unicode-cldr/cldr-core/blob/master/supplemental/weekData.json
// Locales starting on Sunday have been removed for compression.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "weekStartData", ()=>weekStartData);
const weekStartData = {
    '001': 1,
    AD: 1,
    AE: 6,
    AF: 6,
    AI: 1,
    AL: 1,
    AM: 1,
    AN: 1,
    AR: 1,
    AT: 1,
    AU: 1,
    AX: 1,
    AZ: 1,
    BA: 1,
    BE: 1,
    BG: 1,
    BH: 6,
    BM: 1,
    BN: 1,
    BY: 1,
    CH: 1,
    CL: 1,
    CM: 1,
    CN: 1,
    CR: 1,
    CY: 1,
    CZ: 1,
    DE: 1,
    DJ: 6,
    DK: 1,
    DZ: 6,
    EC: 1,
    EE: 1,
    EG: 6,
    ES: 1,
    FI: 1,
    FJ: 1,
    FO: 1,
    FR: 1,
    GB: 1,
    GE: 1,
    GF: 1,
    GP: 1,
    GR: 1,
    HR: 1,
    HU: 1,
    IE: 1,
    IQ: 6,
    IR: 6,
    IS: 1,
    IT: 1,
    JO: 6,
    KG: 1,
    KW: 6,
    KZ: 1,
    LB: 1,
    LI: 1,
    LK: 1,
    LT: 1,
    LU: 1,
    LV: 1,
    LY: 6,
    MC: 1,
    MD: 1,
    ME: 1,
    MK: 1,
    MN: 1,
    MQ: 1,
    MV: 5,
    MY: 1,
    NL: 1,
    NO: 1,
    NZ: 1,
    OM: 6,
    PL: 1,
    QA: 6,
    RE: 1,
    RO: 1,
    RS: 1,
    RU: 1,
    SD: 6,
    SE: 1,
    SI: 1,
    SK: 1,
    SM: 1,
    SY: 6,
    TJ: 1,
    TM: 1,
    TR: 1,
    UA: 1,
    UY: 1,
    UZ: 1,
    VA: 1,
    VN: 1,
    XK: 1
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kqG3b":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
/** Parses an ISO 8601 time string. */ parcelHelpers.export(exports, "parseTime", ()=>parseTime);
/** Parses an ISO 8601 date string, with no time components. */ parcelHelpers.export(exports, "parseDate", ()=>parseDate);
/** Parses an ISO 8601 date and time string, with no time zone. */ parcelHelpers.export(exports, "parseDateTime", ()=>parseDateTime);
/**
 * Parses an ISO 8601 date and time string with a time zone extension and optional UTC offset (e.g.
 * "2021-11-07T00:45[America/Los_Angeles]" or "2021-11-07T00:45-07:00[America/Los_Angeles]").
 * Ambiguous times due to daylight saving time transitions are resolved according to the
 * `disambiguation` parameter.
 */ parcelHelpers.export(exports, "parseZonedDateTime", ()=>parseZonedDateTime);
/**
 * Parses an ISO 8601 date and time string with a UTC offset (e.g. "2021-11-07T07:45:00Z"
 * or "2021-11-07T07:45:00-07:00"). The result is converted to the provided time zone.
 */ parcelHelpers.export(exports, "parseAbsolute", ()=>parseAbsolute);
/**
 * Parses an ISO 8601 date and time string with a UTC offset (e.g. "2021-11-07T07:45:00Z"
 * or "2021-11-07T07:45:00-07:00"). The result is converted to the user's local time zone.
 */ parcelHelpers.export(exports, "parseAbsoluteToLocal", ()=>parseAbsoluteToLocal);
parcelHelpers.export(exports, "timeToString", ()=>timeToString);
parcelHelpers.export(exports, "dateToString", ()=>dateToString);
parcelHelpers.export(exports, "dateTimeToString", ()=>dateTimeToString);
parcelHelpers.export(exports, "zonedDateTimeToString", ()=>zonedDateTimeToString);
/**
 * Parses an ISO 8601 duration string (e.g. "P3Y6M6W4DT12H30M5S").
 *
 * @param value An ISO 8601 duration string.
 * @returns A DateTimeDuration object.
 */ parcelHelpers.export(exports, "parseDuration", ()=>parseDuration);
var _calendarDateTs = require("./CalendarDate.ts");
var _conversionTs = require("./conversion.ts");
var _queriesTs = require("./queries.ts");
var _gregorianCalendarTs = require("./calendars/GregorianCalendar.ts");
const TIME_RE = /^(\d{2})(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/;
const DATE_RE = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/;
const DATE_TIME_RE = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/;
const ZONED_DATE_TIME_RE = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:([+-]\d{2})(?::?(\d{2}))?(?::?(\d{2}))?)?\[(.*?)\]$/;
const ABSOLUTE_RE = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/;
const DATE_TIME_DURATION_RE = /^((?<negative>-)|\+)?P((?<years>\d*)Y)?((?<months>\d*)M)?((?<weeks>\d*)W)?((?<days>\d*)D)?((?<time>T)((?<hours>\d*[.,]?\d{1,9})H)?((?<minutes>\d*[.,]?\d{1,9})M)?((?<seconds>\d*[.,]?\d{1,9})S)?)?$/;
const requiredDurationTimeGroups = [
    'hours',
    'minutes',
    'seconds'
];
const requiredDurationGroups = [
    'years',
    'months',
    'weeks',
    'days',
    ...requiredDurationTimeGroups
];
function parseTime(value) {
    let m = value.match(TIME_RE);
    if (!m) throw new Error('Invalid ISO 8601 time string: ' + value);
    return new (0, _calendarDateTs.Time)(parseNumber(m[1], 0, 23), m[2] ? parseNumber(m[2], 0, 59) : 0, m[3] ? parseNumber(m[3], 0, 59) : 0, m[4] ? parseNumber(m[4], 0, Infinity) * 1000 : 0);
}
function parseDate(value) {
    let m = value.match(DATE_RE);
    if (!m) {
        if (ABSOLUTE_RE.test(value)) throw new Error(`Invalid ISO 8601 date string: ${value}. Use parseAbsolute() instead.`);
        throw new Error('Invalid ISO 8601 date string: ' + value);
    }
    let date = new (0, _calendarDateTs.CalendarDate)(parseNumber(m[1], 0, 9999), parseNumber(m[2], 1, 12), 1);
    date.day = parseNumber(m[3], 1, date.calendar.getDaysInMonth(date));
    return date;
}
function parseDateTime(value) {
    let m = value.match(DATE_TIME_RE);
    if (!m) {
        if (ABSOLUTE_RE.test(value)) throw new Error(`Invalid ISO 8601 date time string: ${value}. Use parseAbsolute() instead.`);
        throw new Error('Invalid ISO 8601 date time string: ' + value);
    }
    let year = parseNumber(m[1], -9999, 9999);
    let era = year < 1 ? 'BC' : 'AD';
    let date = new (0, _calendarDateTs.CalendarDateTime)(era, year < 1 ? -year + 1 : year, parseNumber(m[2], 1, 12), 1, m[4] ? parseNumber(m[4], 0, 23) : 0, m[5] ? parseNumber(m[5], 0, 59) : 0, m[6] ? parseNumber(m[6], 0, 59) : 0, m[7] ? parseNumber(m[7], 0, Infinity) * 1000 : 0);
    date.day = parseNumber(m[3], 0, date.calendar.getDaysInMonth(date));
    return date;
}
function parseZonedDateTime(value, disambiguation) {
    let m = value.match(ZONED_DATE_TIME_RE);
    if (!m) throw new Error('Invalid ISO 8601 date time string: ' + value);
    let year = parseNumber(m[1], -9999, 9999);
    let era = year < 1 ? 'BC' : 'AD';
    let date = new (0, _calendarDateTs.ZonedDateTime)(era, year < 1 ? -year + 1 : year, parseNumber(m[2], 1, 12), 1, m[11], 0, m[4] ? parseNumber(m[4], 0, 23) : 0, m[5] ? parseNumber(m[5], 0, 59) : 0, m[6] ? parseNumber(m[6], 0, 59) : 0, m[7] ? parseNumber(m[7], 0, Infinity) * 1000 : 0);
    date.day = parseNumber(m[3], 0, date.calendar.getDaysInMonth(date));
    let plainDateTime = (0, _conversionTs.toCalendarDateTime)(date);
    let ms;
    if (m[8]) {
        let hourOffset = parseNumber(m[8], -23, 23);
        date.offset = Math.sign(hourOffset) * (Math.abs(hourOffset) * 3600000 + parseNumber(m[9] ?? '0', 0, 59) * 60000 + parseNumber(m[10] ?? '0', 0, 59) * 1000);
        ms = (0, _conversionTs.epochFromDate)(date) - date.offset;
        // Validate offset against parsed date.
        let absolutes = (0, _conversionTs.possibleAbsolutes)(plainDateTime, date.timeZone);
        if (!absolutes.includes(ms)) throw new Error(`Offset ${offsetToString(date.offset)} is invalid for ${dateTimeToString(date)} in ${date.timeZone}`);
    } else // Convert to absolute and back to fix invalid times due to DST.
    ms = (0, _conversionTs.toAbsolute)((0, _conversionTs.toCalendarDateTime)(plainDateTime), date.timeZone, disambiguation);
    return (0, _conversionTs.fromAbsolute)(ms, date.timeZone);
}
function parseAbsolute(value, timeZone) {
    let m = value.match(ABSOLUTE_RE);
    if (!m) throw new Error('Invalid ISO 8601 date time string: ' + value);
    let year = parseNumber(m[1], -9999, 9999);
    let era = year < 1 ? 'BC' : 'AD';
    let date = new (0, _calendarDateTs.ZonedDateTime)(era, year < 1 ? -year + 1 : year, parseNumber(m[2], 1, 12), 1, timeZone, 0, m[4] ? parseNumber(m[4], 0, 23) : 0, m[5] ? parseNumber(m[5], 0, 59) : 0, m[6] ? parseNumber(m[6], 0, 59) : 0, m[7] ? parseNumber(m[7], 0, Infinity) * 1000 : 0);
    date.day = parseNumber(m[3], 0, date.calendar.getDaysInMonth(date));
    if (m[8]) date.offset = parseNumber(m[8], -23, 23) * 3600000 + parseNumber(m[9] ?? '0', 0, 59) * 60000;
    return (0, _conversionTs.toTimeZone)(date, timeZone);
}
function parseAbsoluteToLocal(value) {
    return parseAbsolute(value, (0, _queriesTs.getLocalTimeZone)());
}
function parseNumber(value, min, max) {
    let val = Number(value);
    if (val < min || val > max) throw new RangeError(`Value out of range: ${min} <= ${val} <= ${max}`);
    return val;
}
function timeToString(time) {
    return `${String(time.hour).padStart(2, '0')}:${String(time.minute).padStart(2, '0')}:${String(time.second).padStart(2, '0')}${time.millisecond ? String(time.millisecond / 1000).slice(1) : ''}`;
}
function dateToString(date) {
    let gregorianDate = (0, _conversionTs.toCalendar)(date, new (0, _gregorianCalendarTs.GregorianCalendar)());
    let year;
    if (gregorianDate.era === 'BC') year = gregorianDate.year === 1 ? '0000' : '-' + String(Math.abs(1 - gregorianDate.year)).padStart(6, '00');
    else year = String(gregorianDate.year).padStart(4, '0');
    return `${year}-${String(gregorianDate.month).padStart(2, '0')}-${String(gregorianDate.day).padStart(2, '0')}`;
}
function dateTimeToString(date) {
    // @ts-ignore
    return `${dateToString(date)}T${timeToString(date)}`;
}
function offsetToString(offset) {
    let sign = Math.sign(offset) < 0 ? '-' : '+';
    offset = Math.abs(offset);
    let offsetHours = Math.floor(offset / 3600000);
    let offsetMinutes = Math.floor(offset % 3600000 / 60000);
    let offsetSeconds = Math.floor(offset % 3600000 % 60000 / 1000);
    let stringOffset = `${sign}${String(offsetHours).padStart(2, '0')}:${String(offsetMinutes).padStart(2, '0')}`;
    if (offsetSeconds !== 0) stringOffset += `:${String(offsetSeconds).padStart(2, '0')}`;
    return stringOffset;
}
function zonedDateTimeToString(date) {
    return `${dateTimeToString(date)}${offsetToString(date.offset)}[${date.timeZone}]`;
}
function parseDuration(value) {
    const match = value.match(DATE_TIME_DURATION_RE);
    if (!match) throw new Error(`Invalid ISO 8601 Duration string: ${value}`);
    const parseDurationGroup = (group, isNegative)=>{
        if (!group) return 0;
        try {
            const sign = isNegative ? -1 : 1;
            return sign * Number(group.replace(',', '.'));
        } catch  {
            throw new Error(`Invalid ISO 8601 Duration string: ${value}`);
        }
    };
    const isNegative = !!match.groups?.negative;
    const hasRequiredGroups = requiredDurationGroups.some((group)=>match.groups?.[group]);
    if (!hasRequiredGroups) throw new Error(`Invalid ISO 8601 Duration string: ${value}`);
    const durationStringIncludesTime = match.groups?.time;
    if (durationStringIncludesTime) {
        const hasRequiredDurationTimeGroups = requiredDurationTimeGroups.some((group)=>match.groups?.[group]);
        if (!hasRequiredDurationTimeGroups) throw new Error(`Invalid ISO 8601 Duration string: ${value}`);
    }
    const duration = {
        years: parseDurationGroup(match.groups?.years, isNegative),
        months: parseDurationGroup(match.groups?.months, isNegative),
        weeks: parseDurationGroup(match.groups?.weeks, isNegative),
        days: parseDurationGroup(match.groups?.days, isNegative),
        hours: parseDurationGroup(match.groups?.hours, isNegative),
        minutes: parseDurationGroup(match.groups?.minutes, isNegative),
        seconds: parseDurationGroup(match.groups?.seconds, isNegative)
    };
    if (duration.hours !== undefined && duration.hours % 1 !== 0 && (duration.minutes || duration.seconds)) throw new Error(`Invalid ISO 8601 Duration string: ${value} - only the smallest unit can be fractional`);
    if (duration.minutes !== undefined && duration.minutes % 1 !== 0 && duration.seconds) throw new Error(`Invalid ISO 8601 Duration string: ${value} - only the smallest unit can be fractional`);
    return duration;
}

},{"./CalendarDate.ts":"rVMmY","./conversion.ts":"a4Wnl","./queries.ts":"2J1m0","./calendars/GregorianCalendar.ts":"bAwu9","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"K7Tnh":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The Japanese calendar is based on the Gregorian calendar, but with eras for the reign of each
 * Japanese emperor. Whenever a new emperor ascends to the throne, a new era begins and the year
 * starts again from 1. Note that eras before 1868 (Gregorian) are not currently supported by this
 * implementation.
 */ parcelHelpers.export(exports, "JapaneseCalendar", ()=>JapaneseCalendar);
var _calendarDateTs = require("../CalendarDate.ts");
var _gregorianCalendarTs = require("./GregorianCalendar.ts");
const ERA_START_DATES = [
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
const ERA_END_DATES = [
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
const ERA_ADDENDS = [
    1867,
    1911,
    1925,
    1988,
    2018
];
const ERA_NAMES = [
    'meiji',
    'taisho',
    'showa',
    'heisei',
    'reiwa'
];
function findEraFromGregorianDate(date) {
    const idx = ERA_START_DATES.findIndex(([year, month, day])=>{
        if (date.year < year) return true;
        if (date.year === year && date.month < month) return true;
        if (date.year === year && date.month === month && date.day < day) return true;
        return false;
    });
    if (idx === -1) return ERA_START_DATES.length - 1;
    if (idx === 0) return 0;
    return idx - 1;
}
function toGregorian(date) {
    let eraAddend = ERA_ADDENDS[ERA_NAMES.indexOf(date.era)];
    if (!eraAddend) throw new Error('Unknown era: ' + date.era);
    return new (0, _calendarDateTs.CalendarDate)(date.year + eraAddend, date.month, date.day);
}
class JapaneseCalendar extends (0, _gregorianCalendarTs.GregorianCalendar) {
    identifier = 'japanese';
    fromJulianDay(jd) {
        let date = super.fromJulianDay(jd);
        let era = findEraFromGregorianDate(date);
        return new (0, _calendarDateTs.CalendarDate)(this, ERA_NAMES[era], date.year - ERA_ADDENDS[era], date.month, date.day);
    }
    toJulianDay(date) {
        return super.toJulianDay(toGregorian(date));
    }
    balanceDate(date) {
        let gregorianDate = toGregorian(date);
        let era = findEraFromGregorianDate(gregorianDate);
        if (ERA_NAMES[era] !== date.era) {
            date.era = ERA_NAMES[era];
            date.year = gregorianDate.year - ERA_ADDENDS[era];
        }
        // Constrain in case we went before the first supported era.
        this.constrainDate(date);
    }
    constrainDate(date) {
        let idx = ERA_NAMES.indexOf(date.era);
        let end = ERA_END_DATES[idx];
        if (end != null) {
            let [endYear, endMonth, endDay] = end;
            // Constrain the year to the maximum possible value in the era.
            // Then constrain the month and day fields within that.
            let maxYear = endYear - ERA_ADDENDS[idx];
            date.year = Math.max(1, Math.min(maxYear, date.year));
            if (date.year === maxYear) {
                date.month = Math.min(endMonth, date.month);
                if (date.month === endMonth) date.day = Math.min(endDay, date.day);
            }
        }
        if (date.year === 1 && idx >= 0) {
            let [, startMonth, startDay] = ERA_START_DATES[idx];
            date.month = Math.max(startMonth, date.month);
            if (date.month === startMonth) date.day = Math.max(startDay, date.day);
        }
    }
    getEras() {
        return ERA_NAMES;
    }
    getYearsInEra(date) {
        // Get the number of years in the era, taking into account the date's month and day fields.
        let era = ERA_NAMES.indexOf(date.era);
        let cur = ERA_START_DATES[era];
        let next = ERA_START_DATES[era + 1];
        if (next == null) // 9999 gregorian is the maximum year allowed.
        return 9999 - cur[0] + 1;
        let years = next[0] - cur[0];
        if (date.month < next[1] || date.month === next[1] && date.day < next[2]) years++;
        return years;
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth(toGregorian(date));
    }
    getMinimumMonthInYear(date) {
        let start = getMinimums(date);
        return start ? start[1] : 1;
    }
    getMinimumDayInMonth(date) {
        let start = getMinimums(date);
        return start && date.month === start[1] ? start[2] : 1;
    }
}
function getMinimums(date) {
    if (date.year === 1) {
        let idx = ERA_NAMES.indexOf(date.era);
        return ERA_START_DATES[idx];
    }
}

},{"../CalendarDate.ts":"rVMmY","./GregorianCalendar.ts":"bAwu9","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9iUDG":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The Buddhist calendar is the same as the Gregorian calendar, but counts years
 * starting from the birth of Buddha in 543 BC (Gregorian). It supports only one
 * era, identified as 'BE'.
 */ parcelHelpers.export(exports, "BuddhistCalendar", ()=>BuddhistCalendar);
var _calendarDateTs = require("../CalendarDate.ts");
var _gregorianCalendarTs = require("./GregorianCalendar.ts");
const BUDDHIST_ERA_START = -543;
class BuddhistCalendar extends (0, _gregorianCalendarTs.GregorianCalendar) {
    identifier = 'buddhist';
    fromJulianDay(jd) {
        let gregorianDate = super.fromJulianDay(jd);
        let year = (0, _gregorianCalendarTs.getExtendedYear)(gregorianDate.era, gregorianDate.year);
        return new (0, _calendarDateTs.CalendarDate)(this, year - BUDDHIST_ERA_START, gregorianDate.month, gregorianDate.day);
    }
    toJulianDay(date) {
        return super.toJulianDay(toGregorian(date));
    }
    getEras() {
        return [
            'BE'
        ];
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth(toGregorian(date));
    }
    balanceDate() {}
}
function toGregorian(date) {
    let [era, year] = (0, _gregorianCalendarTs.fromExtendedYear)(date.year + BUDDHIST_ERA_START);
    return new (0, _calendarDateTs.CalendarDate)(era, year, date.month, date.day);
}

},{"../CalendarDate.ts":"rVMmY","./GregorianCalendar.ts":"bAwu9","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4HqUn":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The Taiwanese calendar is the same as the Gregorian calendar, but years
 * are numbered starting from 1912 (Gregorian). Two eras are supported:
 * 'before_minguo' and 'minguo'.
 */ parcelHelpers.export(exports, "TaiwanCalendar", ()=>TaiwanCalendar);
var _calendarDateTs = require("../CalendarDate.ts");
var _gregorianCalendarTs = require("./GregorianCalendar.ts");
const TAIWAN_ERA_START = 1911;
function gregorianYear(date) {
    return date.era === 'minguo' ? date.year + TAIWAN_ERA_START : 1 - date.year + TAIWAN_ERA_START;
}
function gregorianToTaiwan(year) {
    let y = year - TAIWAN_ERA_START;
    if (y > 0) return [
        'minguo',
        y
    ];
    else return [
        'before_minguo',
        1 - y
    ];
}
class TaiwanCalendar extends (0, _gregorianCalendarTs.GregorianCalendar) {
    identifier = 'roc';
    fromJulianDay(jd) {
        let date = super.fromJulianDay(jd);
        let extendedYear = (0, _gregorianCalendarTs.getExtendedYear)(date.era, date.year);
        let [era, year] = gregorianToTaiwan(extendedYear);
        return new (0, _calendarDateTs.CalendarDate)(this, era, year, date.month, date.day);
    }
    toJulianDay(date) {
        return super.toJulianDay(toGregorian(date));
    }
    getEras() {
        return [
            'before_minguo',
            'minguo'
        ];
    }
    balanceDate(date) {
        let [era, year] = gregorianToTaiwan(gregorianYear(date));
        date.era = era;
        date.year = year;
    }
    isInverseEra(date) {
        return date.era === 'before_minguo';
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth(toGregorian(date));
    }
    getYearsInEra(date) {
        return date.era === 'before_minguo' ? 9999 : 9999 - TAIWAN_ERA_START;
    }
}
function toGregorian(date) {
    let [era, year] = (0, _gregorianCalendarTs.fromExtendedYear)(gregorianYear(date));
    return new (0, _calendarDateTs.CalendarDate)(era, year, date.month, date.day);
}

},{"../CalendarDate.ts":"rVMmY","./GregorianCalendar.ts":"bAwu9","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gBjZn":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The Persian calendar is the main calendar used in Iran and Afghanistan. It has 12 months
 * in each year, the first 6 of which have 31 days, and the next 5 have 30 days. The 12th month
 * has either 29 or 30 days depending on whether it is a leap year. The Persian year starts
 * around the March equinox.
 */ parcelHelpers.export(exports, "PersianCalendar", ()=>PersianCalendar);
var _calendarDateTs = require("../CalendarDate.ts");
var _utilsTs = require("../utils.ts");
const PERSIAN_EPOCH = 1948320;
// Number of days from the start of the year to the start of each month.
const MONTH_START = [
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
class PersianCalendar {
    identifier = 'persian';
    fromJulianDay(jd) {
        let daysSinceEpoch = jd - PERSIAN_EPOCH;
        let year = 1 + Math.floor((33 * daysSinceEpoch + 3) / 12053);
        let farvardin1 = 365 * (year - 1) + Math.floor((8 * year + 21) / 33);
        let dayOfYear = daysSinceEpoch - farvardin1;
        let month = dayOfYear < 216 ? Math.floor(dayOfYear / 31) : Math.floor((dayOfYear - 6) / 30);
        let day = dayOfYear - MONTH_START[month] + 1;
        return new (0, _calendarDateTs.CalendarDate)(this, year, month + 1, day);
    }
    toJulianDay(date) {
        let jd = PERSIAN_EPOCH - 1 + 365 * (date.year - 1) + Math.floor((8 * date.year + 21) / 33);
        jd += MONTH_START[date.month - 1];
        jd += date.day;
        return jd;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInMonth(date) {
        if (date.month <= 6) return 31;
        if (date.month <= 11) return 30;
        let isLeapYear = (0, _utilsTs.mod)(25 * date.year + 11, 33) < 8;
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
}

},{"../CalendarDate.ts":"rVMmY","../utils.ts":"eQkFv","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jN237":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The Indian National Calendar is similar to the Gregorian calendar, but with
 * years numbered since the Saka era in 78 AD (Gregorian). There are 12 months
 * in each year, with either 30 or 31 days. Only one era identifier is supported: 'saka'.
 */ parcelHelpers.export(exports, "IndianCalendar", ()=>IndianCalendar);
var _calendarDateTs = require("../CalendarDate.ts");
var _gregorianCalendarTs = require("./GregorianCalendar.ts");
// Starts in 78 AD,
const INDIAN_ERA_START = 78;
// The Indian year starts 80 days later than the Gregorian year.
const INDIAN_YEAR_START = 80;
class IndianCalendar extends (0, _gregorianCalendarTs.GregorianCalendar) {
    identifier = 'indian';
    fromJulianDay(jd) {
        // Gregorian date for Julian day
        let date = super.fromJulianDay(jd);
        // Year in Saka era
        let indianYear = date.year - INDIAN_ERA_START;
        // Day number in Gregorian year (starting from 0)
        let yDay = jd - (0, _gregorianCalendarTs.gregorianToJulianDay)(date.era, date.year, 1, 1);
        let leapMonth;
        if (yDay < INDIAN_YEAR_START) {
            //  Day is at the end of the preceding Saka year
            indianYear--;
            // Days in leapMonth this year, previous Gregorian year
            leapMonth = (0, _gregorianCalendarTs.isLeapYear)(date.year - 1) ? 31 : 30;
            yDay += leapMonth + 155 + 90 + 10;
        } else {
            // Days in leapMonth this year
            leapMonth = (0, _gregorianCalendarTs.isLeapYear)(date.year) ? 31 : 30;
            yDay -= INDIAN_YEAR_START;
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
        return new (0, _calendarDateTs.CalendarDate)(this, indianYear, indianMonth, indianDay);
    }
    toJulianDay(date) {
        let extendedYear = date.year + INDIAN_ERA_START;
        let [era, year] = (0, _gregorianCalendarTs.fromExtendedYear)(extendedYear);
        let leapMonth;
        let jd;
        if ((0, _gregorianCalendarTs.isLeapYear)(year)) {
            leapMonth = 31;
            jd = (0, _gregorianCalendarTs.gregorianToJulianDay)(era, year, 3, 21);
        } else {
            leapMonth = 30;
            jd = (0, _gregorianCalendarTs.gregorianToJulianDay)(era, year, 3, 22);
        }
        if (date.month === 1) return jd + date.day - 1;
        jd += leapMonth + Math.min(date.month - 2, 5) * 31;
        if (date.month >= 8) jd += (date.month - 7) * 30;
        jd += date.day - 1;
        return jd;
    }
    getDaysInMonth(date) {
        if (date.month === 1 && (0, _gregorianCalendarTs.isLeapYear)(date.year + INDIAN_ERA_START)) return 31;
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
}

},{"../CalendarDate.ts":"rVMmY","./GregorianCalendar.ts":"bAwu9","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k9LE6":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The Islamic calendar, also known as the "Hijri" calendar, is used throughout much of the Arab
 * world. The civil variant uses simple arithmetic rules rather than astronomical calculations to
 * approximate the traditional calendar, which is based on sighting of the crescent moon. It uses
 * Friday, July 16 622 CE (Julian) as the epoch. Each year has 12 months, with either 354 or 355
 * days depending on whether it is a leap year. Learn more about the available Islamic calendars
 * [here](https://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types).
 */ parcelHelpers.export(exports, "IslamicCivilCalendar", ()=>IslamicCivilCalendar);
/**
 * The Islamic calendar, also known as the "Hijri" calendar, is used throughout much of the Arab
 * world. The tabular variant uses simple arithmetic rules rather than astronomical calculations to
 * approximate the traditional calendar, which is based on sighting of the crescent moon. It uses
 * Thursday, July 15 622 CE (Julian) as the epoch. Each year has 12 months, with either 354 or 355
 * days depending on whether it is a leap year. Learn more about the available Islamic calendars
 * [here](https://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types).
 */ parcelHelpers.export(exports, "IslamicTabularCalendar", ()=>IslamicTabularCalendar);
/**
 * The Islamic calendar, also known as the "Hijri" calendar, is used throughout much of the Arab
 * world. The Umalqura variant is primarily used in Saudi Arabia. It is a lunar calendar, based on
 * astronomical calculations that predict the sighting of a crescent moon. Month and year lengths
 * vary between years depending on these calculations. Learn more about the available Islamic
 * calendars
 * [here](https://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types).
 */ parcelHelpers.export(exports, "IslamicUmalquraCalendar", ()=>IslamicUmalquraCalendar);
var _calendarDateTs = require("../CalendarDate.ts");
const CIVIL_EPOC = 1948440; // CE 622 July 16 Friday (Julian calendar) / CE 622 July 19 (Gregorian calendar)
const ASTRONOMICAL_EPOC = 1948439; // CE 622 July 15 Thursday (Julian calendar)
const UMALQURA_YEAR_START = 1300;
const UMALQURA_YEAR_END = 1600;
const UMALQURA_START_DAYS = 460322;
function islamicToJulianDay(epoch, year, month, day) {
    return day + Math.ceil(29.5 * (month - 1)) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30) + epoch - 1;
}
function julianDayToIslamic(calendar, epoch, jd) {
    let year = Math.floor((30 * (jd - epoch) + 10646) / 10631);
    let month = Math.min(12, Math.ceil((jd - (29 + islamicToJulianDay(epoch, year, 1, 1))) / 29.5) + 1);
    let day = jd - islamicToJulianDay(epoch, year, month, 1) + 1;
    return new (0, _calendarDateTs.CalendarDate)(calendar, year, month, day);
}
function isLeapYear(year) {
    return (14 + 11 * year) % 30 < 11;
}
class IslamicCivilCalendar {
    identifier = 'islamic-civil';
    fromJulianDay(jd) {
        return julianDayToIslamic(this, CIVIL_EPOC, jd);
    }
    toJulianDay(date) {
        return islamicToJulianDay(CIVIL_EPOC, date.year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let length = 29 + date.month % 2;
        if (date.month === 12 && isLeapYear(date.year)) length++;
        return length;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInYear(date) {
        return isLeapYear(date.year) ? 355 : 354;
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
}
class IslamicTabularCalendar extends IslamicCivilCalendar {
    identifier = 'islamic-tbla';
    fromJulianDay(jd) {
        return julianDayToIslamic(this, ASTRONOMICAL_EPOC, jd);
    }
    toJulianDay(date) {
        return islamicToJulianDay(ASTRONOMICAL_EPOC, date.year, date.month, date.day);
    }
}
// Generated by scripts/generate-umalqura.js
const UMALQURA_DATA = 'qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=';
let UMALQURA_MONTHLENGTH;
let UMALQURA_YEAR_START_TABLE;
function umalquraYearStart(year) {
    return UMALQURA_START_DAYS + UMALQURA_YEAR_START_TABLE[year - UMALQURA_YEAR_START];
}
function umalquraMonthLength(year, month) {
    let idx = year - UMALQURA_YEAR_START;
    let mask = 0x01 << 11 - (month - 1);
    if ((UMALQURA_MONTHLENGTH[idx] & mask) === 0) return 29;
    else return 30;
}
function umalquraMonthStart(year, month) {
    let day = umalquraYearStart(year);
    for(let i = 1; i < month; i++)day += umalquraMonthLength(year, i);
    return day;
}
function umalquraYearLength(year) {
    return UMALQURA_YEAR_START_TABLE[year + 1 - UMALQURA_YEAR_START] - UMALQURA_YEAR_START_TABLE[year - UMALQURA_YEAR_START];
}
class IslamicUmalquraCalendar extends IslamicCivilCalendar {
    identifier = 'islamic-umalqura';
    constructor(){
        super();
        if (!UMALQURA_MONTHLENGTH) UMALQURA_MONTHLENGTH = new Uint16Array(Uint8Array.from(atob(UMALQURA_DATA), (c)=>c.charCodeAt(0)).buffer);
        if (!UMALQURA_YEAR_START_TABLE) {
            UMALQURA_YEAR_START_TABLE = new Uint32Array(UMALQURA_YEAR_END - UMALQURA_YEAR_START + 1);
            let yearStart = 0;
            for(let year = UMALQURA_YEAR_START; year <= UMALQURA_YEAR_END; year++){
                UMALQURA_YEAR_START_TABLE[year - UMALQURA_YEAR_START] = yearStart;
                for(let i = 1; i <= 12; i++)yearStart += umalquraMonthLength(year, i);
            }
        }
    }
    fromJulianDay(jd) {
        let days = jd - CIVIL_EPOC;
        let startDays = umalquraYearStart(UMALQURA_YEAR_START);
        let endDays = umalquraYearStart(UMALQURA_YEAR_END);
        if (days < startDays || days > endDays) return super.fromJulianDay(jd);
        else {
            let y = UMALQURA_YEAR_START - 1;
            let m = 1;
            let d = 1;
            while(d > 0){
                y++;
                d = days - umalquraYearStart(y) + 1;
                let yearLength = umalquraYearLength(y);
                if (d === yearLength) {
                    m = 12;
                    break;
                } else if (d < yearLength) {
                    let monthLength = umalquraMonthLength(y, m);
                    m = 1;
                    while(d > monthLength){
                        d -= monthLength;
                        m++;
                        monthLength = umalquraMonthLength(y, m);
                    }
                    break;
                }
            }
            return new (0, _calendarDateTs.CalendarDate)(this, y, m, days - umalquraMonthStart(y, m) + 1);
        }
    }
    toJulianDay(date) {
        if (date.year < UMALQURA_YEAR_START || date.year > UMALQURA_YEAR_END) return super.toJulianDay(date);
        return CIVIL_EPOC + umalquraMonthStart(date.year, date.month) + (date.day - 1);
    }
    getDaysInMonth(date) {
        if (date.year < UMALQURA_YEAR_START || date.year > UMALQURA_YEAR_END) return super.getDaysInMonth(date);
        return umalquraMonthLength(date.year, date.month);
    }
    getDaysInYear(date) {
        if (date.year < UMALQURA_YEAR_START || date.year > UMALQURA_YEAR_END) return super.getDaysInYear(date);
        return umalquraYearLength(date.year);
    }
}

},{"../CalendarDate.ts":"rVMmY","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ftvpR":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The Hebrew calendar is used in Israel and around the world by the Jewish faith.
 * Years include either 12 or 13 months depending on whether it is a leap year.
 * In leap years, an extra month is inserted at month 6.
 */ parcelHelpers.export(exports, "HebrewCalendar", ()=>HebrewCalendar);
var _calendarDateTs = require("../CalendarDate.ts");
var _utilsTs = require("../utils.ts");
const HEBREW_EPOCH = 347997;
// Hebrew date calculations are performed in terms of days, hours, and
// "parts" (or halakim), which are 1/1080 of an hour, or 3 1/3 seconds.
const HOUR_PARTS = 1080;
const DAY_PARTS = 24 * HOUR_PARTS;
// An approximate value for the length of a lunar month.
// It is used to calculate the approximate year and month of a given
// absolute date.
const MONTH_DAYS = 29;
const MONTH_FRACT = 12 * HOUR_PARTS + 793;
const MONTH_PARTS = MONTH_DAYS * DAY_PARTS + MONTH_FRACT;
function isLeapYear(year) {
    return (0, _utilsTs.mod)(year * 7 + 1, 19) < 7;
}
// Test for delay of start of new year and to avoid
// Sunday, Wednesday, and Friday as start of the new year.
function hebrewDelay1(year) {
    let months = Math.floor((235 * year - 234) / 19);
    let parts = 12084 + 13753 * months;
    let day = months * 29 + Math.floor(parts / 25920);
    if ((0, _utilsTs.mod)(3 * (day + 1), 7) < 3) day += 1;
    return day;
}
// Check for delay in start of new year due to length of adjacent years
function hebrewDelay2(year) {
    let last = hebrewDelay1(year - 1);
    let present = hebrewDelay1(year);
    let next = hebrewDelay1(year + 1);
    if (next - present === 356) return 2;
    if (present - last === 382) return 1;
    return 0;
}
function startOfYear(year) {
    return hebrewDelay1(year) + hebrewDelay2(year);
}
function getDaysInYear(year) {
    return startOfYear(year + 1) - startOfYear(year);
}
function getYearType(year) {
    let yearLength = getDaysInYear(year);
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
function getDaysInMonth(year, month) {
    // Normalize month numbers from 1 - 13, even on non-leap years
    if (month >= 6 && !isLeapYear(year)) month++;
    // First of all, dispose of fixed-length 29 day months
    if (month === 4 || month === 7 || month === 9 || month === 11 || month === 13) return 29;
    let yearType = getYearType(year);
    // If it's Heshvan, days depend on length of year
    if (month === 2) return yearType === 2 ? 30 : 29;
    // Similarly, Kislev varies with the length of year
    if (month === 3) return yearType === 0 ? 29 : 30;
    // Adar I only exists in leap years
    if (month === 6) return isLeapYear(year) ? 30 : 0;
    return 30;
}
class HebrewCalendar {
    identifier = 'hebrew';
    fromJulianDay(jd) {
        let d = jd - HEBREW_EPOCH;
        let m = d * DAY_PARTS / MONTH_PARTS; // Months (approx)
        let year = Math.floor((19 * m + 234) / 235) + 1; // Years (approx)
        let ys = startOfYear(year); // 1st day of year
        let dayOfYear = Math.floor(d - ys);
        // Because of the postponement rules, it's possible to guess wrong.  Fix it.
        while(dayOfYear < 1){
            year--;
            ys = startOfYear(year);
            dayOfYear = Math.floor(d - ys);
        }
        // Now figure out which month we're in, and the date within that month
        let month = 1;
        let monthStart = 0;
        while(monthStart < dayOfYear){
            monthStart += getDaysInMonth(year, month);
            month++;
        }
        month--;
        monthStart -= getDaysInMonth(year, month);
        let day = dayOfYear - monthStart;
        return new (0, _calendarDateTs.CalendarDate)(this, year, month, day);
    }
    toJulianDay(date) {
        let jd = startOfYear(date.year);
        for(let month = 1; month < date.month; month++)jd += getDaysInMonth(date.year, month);
        return jd + date.day + HEBREW_EPOCH;
    }
    getDaysInMonth(date) {
        return getDaysInMonth(date.year, date.month);
    }
    getMonthsInYear(date) {
        return isLeapYear(date.year) ? 13 : 12;
    }
    getDaysInYear(date) {
        return getDaysInYear(date.year);
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
            if (isLeapYear(previousDate.year) && !isLeapYear(date.year) && previousDate.month > 6) date.month--;
            else if (!isLeapYear(previousDate.year) && isLeapYear(date.year) && previousDate.month > 6) date.month++;
        }
    }
}

},{"../CalendarDate.ts":"rVMmY","../utils.ts":"eQkFv","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4TqDf":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The Ethiopic calendar system is the official calendar used in Ethiopia.
 * It includes 12 months of 30 days each, plus 5 or 6 intercalary days depending
 * on whether it is a leap year. Two eras are supported: 'AA' and 'AM'.
 */ parcelHelpers.export(exports, "EthiopicCalendar", ()=>EthiopicCalendar);
/**
 * The Ethiopic (Amete Alem) calendar is the same as the modern Ethiopic calendar,
 * except years were measured from a different epoch. Only one era is supported: 'AA'.
 */ parcelHelpers.export(exports, "EthiopicAmeteAlemCalendar", ()=>EthiopicAmeteAlemCalendar);
/**
 * The Coptic calendar is similar to the Ethiopic calendar.
 * It includes 12 months of 30 days each, plus 5 or 6 intercalary days depending
 * on whether it is a leap year. Two eras are supported: 'BCE' and 'CE'.
 */ parcelHelpers.export(exports, "CopticCalendar", ()=>CopticCalendar);
var _calendarDateTs = require("../CalendarDate.ts");
const ETHIOPIC_EPOCH = 1723856;
const COPTIC_EPOCH = 1824665;
// The delta between Amete Alem 1 and Amete Mihret 1
// AA 5501 = AM 1
const AMETE_MIHRET_DELTA = 5500;
function ceToJulianDay(epoch, year, month, day) {
    return epoch + // difference from Julian epoch to 1,1,1
    365 * year + // number of days from years
    Math.floor(year / 4) + // extra day of leap year
    30 * (month - 1) + // number of days from months (1 based)
    day - 1 // number of days for present month (1 based)
    ;
}
function julianDayToCE(epoch, jd) {
    let year = Math.floor(4 * (jd - epoch) / 1461);
    // Years are 365 * year + floor(year / 4) days long, slightly less than the
    // 365.25 day average assumed by the estimate above. As a result, the estimate
    // can be one year too low on the first day of a year (3 of every 4 years).
    if (jd >= ceToJulianDay(epoch, year + 1, 1, 1)) year++;
    let month = 1 + Math.floor((jd - ceToJulianDay(epoch, year, 1, 1)) / 30);
    let day = jd + 1 - ceToJulianDay(epoch, year, month, 1);
    return [
        year,
        month,
        day
    ];
}
function getLeapDay(year) {
    return Math.floor(year % 4 / 3);
}
function getDaysInMonth(year, month) {
    // The Ethiopian and Coptic calendars have 13 months, 12 of 30 days each and
    // an intercalary month at the end of the year of 5 or 6 days, depending whether
    // the year is a leap year or not. The Leap Year follows the same rules as the
    // Julian Calendar so that the extra month always has six days in the year before
    // a Julian Leap Year.
    if (month % 13 !== 0) // not intercalary month
    return 30;
    else // intercalary month 5 days + possible leap day
    return getLeapDay(year) + 5;
}
class EthiopicCalendar {
    identifier = 'ethiopic';
    fromJulianDay(jd) {
        let [year, month, day] = julianDayToCE(ETHIOPIC_EPOCH, jd);
        let era = 'AM';
        if (year <= 0) {
            era = 'AA';
            year += AMETE_MIHRET_DELTA;
        }
        return new (0, _calendarDateTs.CalendarDate)(this, era, year, month, day);
    }
    toJulianDay(date) {
        let year = date.year;
        if (date.era === 'AA') year -= AMETE_MIHRET_DELTA;
        return ceToJulianDay(ETHIOPIC_EPOCH, year, date.month, date.day);
    }
    getDaysInMonth(date) {
        return getDaysInMonth(date.year, date.month);
    }
    getMonthsInYear() {
        return 13;
    }
    getDaysInYear(date) {
        return 365 + getLeapDay(date.year);
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
}
class EthiopicAmeteAlemCalendar extends EthiopicCalendar {
    identifier = 'ethioaa';
    fromJulianDay(jd) {
        let [year, month, day] = julianDayToCE(ETHIOPIC_EPOCH, jd);
        year += AMETE_MIHRET_DELTA;
        return new (0, _calendarDateTs.CalendarDate)(this, 'AA', year, month, day);
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
}
class CopticCalendar extends EthiopicCalendar {
    identifier = 'coptic';
    fromJulianDay(jd) {
        let [year, month, day] = julianDayToCE(COPTIC_EPOCH, jd);
        let era = 'CE';
        if (year <= 0) {
            era = 'BCE';
            year = 1 - year;
        }
        return new (0, _calendarDateTs.CalendarDate)(this, era, year, month, day);
    }
    toJulianDay(date) {
        let year = date.year;
        if (date.era === 'BCE') year = 1 - year;
        return ceToJulianDay(COPTIC_EPOCH, year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let year = date.year;
        if (date.era === 'BCE') year = 1 - year;
        return getDaysInMonth(year, date.month);
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
}

},{"../CalendarDate.ts":"rVMmY","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"qWoqQ":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
/** Creates a `Calendar` instance from a Unicode calendar identifier string. */ parcelHelpers.export(exports, "createCalendar", ()=>createCalendar);
var _buddhistCalendarTs = require("./calendars/BuddhistCalendar.ts");
var _ethiopicCalendarTs = require("./calendars/EthiopicCalendar.ts");
var _gregorianCalendarTs = require("./calendars/GregorianCalendar.ts");
var _hebrewCalendarTs = require("./calendars/HebrewCalendar.ts");
var _indianCalendarTs = require("./calendars/IndianCalendar.ts");
var _islamicCalendarTs = require("./calendars/IslamicCalendar.ts");
var _japaneseCalendarTs = require("./calendars/JapaneseCalendar.ts");
var _persianCalendarTs = require("./calendars/PersianCalendar.ts");
var _taiwanCalendarTs = require("./calendars/TaiwanCalendar.ts");
function createCalendar(name) {
    switch(name){
        case 'buddhist':
            return new (0, _buddhistCalendarTs.BuddhistCalendar)();
        case 'ethiopic':
            return new (0, _ethiopicCalendarTs.EthiopicCalendar)();
        case 'ethioaa':
            return new (0, _ethiopicCalendarTs.EthiopicAmeteAlemCalendar)();
        case 'coptic':
            return new (0, _ethiopicCalendarTs.CopticCalendar)();
        case 'hebrew':
            return new (0, _hebrewCalendarTs.HebrewCalendar)();
        case 'indian':
            return new (0, _indianCalendarTs.IndianCalendar)();
        case 'islamic-civil':
            return new (0, _islamicCalendarTs.IslamicCivilCalendar)();
        case 'islamic-tbla':
            return new (0, _islamicCalendarTs.IslamicTabularCalendar)();
        case 'islamic-umalqura':
            return new (0, _islamicCalendarTs.IslamicUmalquraCalendar)();
        case 'japanese':
            return new (0, _japaneseCalendarTs.JapaneseCalendar)();
        case 'persian':
            return new (0, _persianCalendarTs.PersianCalendar)();
        case 'roc':
            return new (0, _taiwanCalendarTs.TaiwanCalendar)();
        case 'gregory':
        default:
            return new (0, _gregorianCalendarTs.GregorianCalendar)();
    }
}

},{"./calendars/BuddhistCalendar.ts":"9iUDG","./calendars/EthiopicCalendar.ts":"4TqDf","./calendars/GregorianCalendar.ts":"bAwu9","./calendars/HebrewCalendar.ts":"ftvpR","./calendars/IndianCalendar.ts":"jN237","./calendars/IslamicCalendar.ts":"k9LE6","./calendars/JapaneseCalendar.ts":"K7Tnh","./calendars/PersianCalendar.ts":"gBjZn","./calendars/TaiwanCalendar.ts":"4HqUn","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"je46U":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
/** A wrapper around Intl.DateTimeFormat that fixes various browser bugs, and polyfills new features. */ parcelHelpers.export(exports, "DateFormatter", ()=>DateFormatter);
let formatterCache = new Map();
class DateFormatter {
    formatter;
    options;
    resolvedHourCycle;
    constructor(locale, options = {}){
        this.formatter = getCachedDateFormatter(locale, options);
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
        if (typeof this.formatter.formatRange === 'function') // @ts-ignore
        return this.formatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return `${this.formatter.format(start)} \u{2013} ${this.formatter.format(end)}`;
    }
    /** Formats a date range as an array of parts. */ formatRangeToParts(start, end) {
        // @ts-ignore
        if (typeof this.formatter.formatRangeToParts === 'function') // @ts-ignore
        return this.formatter.formatRangeToParts(start, end);
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
        if (hasBuggyResolvedHourCycle()) {
            if (!this.resolvedHourCycle) this.resolvedHourCycle = getResolvedHourCycle(resolvedOptions.locale, this.options);
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
const hour12Preferences = {
    true: {
        // Only Japanese uses the h11 style for 12 hour time. All others use h12.
        ja: 'h11'
    },
    false: {
    }
};
function getCachedDateFormatter(locale, options = {}) {
    // Work around buggy hour12 behavior in Chrome / ECMA 402 spec by using hourCycle instead.
    // Only apply the workaround if the issue is detected, because the hourCycle option is buggy in Safari.
    if (typeof options.hour12 === 'boolean' && hasBuggyHour12Behavior()) {
        options = {
            ...options
        };
        let pref = hour12Preferences[String(options.hour12)][locale.split('-')[0]];
        let defaultHourCycle = options.hour12 ? 'h12' : 'h23';
        options.hourCycle = pref ?? defaultHourCycle;
        delete options.hour12;
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if (formatterCache.has(cacheKey)) return formatterCache.get(cacheKey);
    let numberFormatter = new Intl.DateTimeFormat(locale, options);
    formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
let _hasBuggyHour12Behavior = null;
function hasBuggyHour12Behavior() {
    if (_hasBuggyHour12Behavior == null) _hasBuggyHour12Behavior = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        hour12: false
    }).format(new Date(2020, 2, 3, 0)) === '24';
    return _hasBuggyHour12Behavior;
}
let _hasBuggyResolvedHourCycle = null;
function hasBuggyResolvedHourCycle() {
    if (_hasBuggyResolvedHourCycle == null) _hasBuggyResolvedHourCycle = new Intl.DateTimeFormat('fr', {
        hour: 'numeric',
        hour12: false
    }).resolvedOptions().hourCycle === 'h12';
    return _hasBuggyResolvedHourCycle;
}
function getResolvedHourCycle(locale, options) {
    if (!options.timeStyle && !options.hour) return undefined;
    // Work around buggy results in resolved hourCycle and hour12 options in WebKit.
    // Format the minimum possible hour and maximum possible hour in a day and parse the results.
    locale = locale.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, '');
    locale += (locale.includes('-u-') ? '' : '-u') + '-nu-latn';
    let formatter = getCachedDateFormatter(locale, {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

