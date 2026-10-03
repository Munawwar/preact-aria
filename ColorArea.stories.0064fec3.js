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
})({"6ElIb":[function(require,module,exports,__globalThis) {
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
/** Parses a color from a string value. Throws an error if the string could not be parsed. */ parcelHelpers.export(exports, "parseColor", ()=>parseColor);
parcelHelpers.export(exports, "normalizeColor", ()=>normalizeColor);
/** Returns a list of color channels for a given color space. */ parcelHelpers.export(exports, "getColorChannels", ()=>getColorChannels);
/**
 * Returns the hue value normalized to the range of 0 to 360.
 */ parcelHelpers.export(exports, "normalizeHue", ()=>normalizeHue);
var _number = require("../utils/number");
var _indexJs = require("../../intl/color/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _string = require("@internationalized/string");
var _number1 = require("@internationalized/number");
let dictionary = new (0, _string.LocalizedStringDictionary)((0, _indexJsDefault.default));
function parseColor(value) {
    let res = RGBColor.parse(value) || HSBColor.parse(value) || HSLColor.parse(value);
    if (res) return res;
    throw new Error('Invalid color value: ' + value);
}
function normalizeColor(v) {
    if (typeof v === 'string') return parseColor(v);
    else return v;
}
function getColorChannels(colorSpace) {
    switch(colorSpace){
        case 'rgb':
            return RGBColor.colorChannels;
        case 'hsl':
            return HSLColor.colorChannels;
        case 'hsb':
            return HSBColor.colorChannels;
    }
}
function normalizeHue(hue) {
    if (hue === 360) return hue;
    return (hue % 360 + 360) % 360;
}
// Lightness threshold between orange and brown.
const ORANGE_LIGHTNESS_THRESHOLD = 0.68;
// Lightness threshold between pure yellow and "yellow green".
const YELLOW_GREEN_LIGHTNESS_THRESHOLD = 0.85;
// The maximum lightness considered to be "dark".
const MAX_DARK_LIGHTNESS = 0.55;
// The chroma threshold between gray and color.
const GRAY_THRESHOLD = 0.001;
const OKLCH_HUES = [
    [
        0,
        'pink'
    ],
    [
        15,
        'red'
    ],
    [
        48,
        'orange'
    ],
    [
        94,
        'yellow'
    ],
    [
        135,
        'green'
    ],
    [
        175,
        'cyan'
    ],
    [
        264,
        'blue'
    ],
    [
        284,
        'purple'
    ],
    [
        320,
        'magenta'
    ],
    [
        349,
        'pink'
    ]
];
class Color {
    toHexInt() {
        return this.toFormat('rgb').toHexInt();
    }
    getChannelValue(channel) {
        if (channel in this) return this[channel];
        throw new Error('Unsupported color channel: ' + channel);
    }
    withChannelValue(channel, value) {
        if (channel in this) {
            let x = this.clone();
            x[channel] = value;
            return x;
        }
        throw new Error('Unsupported color channel: ' + channel);
    }
    getChannelName(channel, locale) {
        let strings = (0, _string.LocalizedStringDictionary).getGlobalDictionaryForPackage('@react-stately/color') || dictionary;
        return strings.getStringForLocale(channel, locale);
    }
    getColorSpaceAxes(xyChannels) {
        let { xChannel, yChannel } = xyChannels;
        let xCh = xChannel || this.getColorChannels().find((c)=>c !== yChannel);
        let yCh = yChannel || this.getColorChannels().find((c)=>c !== xCh);
        let zCh = this.getColorChannels().find((c)=>c !== xCh && c !== yCh);
        return {
            xChannel: xCh,
            yChannel: yCh,
            zChannel: zCh
        };
    }
    getColorName(locale) {
        // Convert to oklch color space, which has perceptually uniform lightness across all hues.
        let [l, c, h] = toOKLCH(this);
        let strings = (0, _string.LocalizedStringDictionary).getGlobalDictionaryForPackage('@react-stately/color') || dictionary;
        if (l > 0.999) return strings.getStringForLocale('white', locale);
        if (l < 0.001) return strings.getStringForLocale('black', locale);
        let hue;
        [hue, l] = this.getOklchHue(l, c, h, locale);
        let lightness = '';
        let chroma = '';
        if (c <= 0.1 && c >= GRAY_THRESHOLD) {
            if (l >= 0.7) chroma = 'pale';
            else chroma = 'grayish';
        } else if (c >= 0.15) chroma = 'vibrant';
        if (l < 0.3) lightness = 'very dark';
        else if (l < MAX_DARK_LIGHTNESS) lightness = 'dark';
        else if (l < 0.7) ;
        else if (l < 0.85) lightness = 'light';
        else lightness = 'very light';
        if (chroma) chroma = strings.getStringForLocale(chroma, locale);
        if (lightness) lightness = strings.getStringForLocale(lightness, locale);
        let alpha = this.getChannelValue('alpha');
        let formatter = new (0, _string.LocalizedStringFormatter)(locale, strings);
        if (alpha < 1) {
            let percentTransparent = new (0, _number1.NumberFormatter)(locale, {
                style: 'percent'
            }).format(1 - alpha);
            return formatter.format('transparentColorName', {
                lightness,
                chroma,
                hue,
                percentTransparent
            }).replace(/\s+/g, ' ').trim();
        } else return formatter.format('colorName', {
            lightness,
            chroma,
            hue
        }).replace(/\s+/g, ' ').trim();
    }
    getOklchHue(l, c, h, locale) {
        let strings = (0, _string.LocalizedStringDictionary).getGlobalDictionaryForPackage('@react-stately/color') || dictionary;
        if (c < GRAY_THRESHOLD) return [
            strings.getStringForLocale('gray', locale),
            l
        ];
        for(let i = 0; i < OKLCH_HUES.length; i++){
            let [hue, hueName] = OKLCH_HUES[i];
            let [nextHue, nextHueName] = OKLCH_HUES[i + 1] || [
                360,
                'pink'
            ];
            if (h >= hue && h < nextHue) {
                // Split orange hue into brown/orange depending on lightness.
                if (hueName === 'orange') {
                    if (l < ORANGE_LIGHTNESS_THRESHOLD) hueName = 'brown';
                    else // Adjust lightness.
                    l = l - ORANGE_LIGHTNESS_THRESHOLD + MAX_DARK_LIGHTNESS;
                }
                // If the hue is at least halfway to the next hue, add the next hue name as well.
                if (h > hue + (nextHue - hue) / 2 && hueName !== nextHueName) hueName = `${hueName} ${nextHueName}`;
                else if (hueName === 'yellow' && l < YELLOW_GREEN_LIGHTNESS_THRESHOLD) // Yellow shifts toward green at lower lightnesses.
                hueName = 'yellow green';
                let name = strings.getStringForLocale(hueName, locale).toLocaleLowerCase(locale);
                return [
                    name,
                    l
                ];
            }
        }
        throw new Error('Unexpected hue');
    }
    getHueName(locale) {
        let [l, c, h] = toOKLCH(this);
        let [name] = this.getOklchHue(l, c, h, locale);
        return name;
    }
}
class RGBColor extends Color {
    red;
    green;
    blue;
    alpha;
    constructor(red, green, blue, alpha){
        super(), this.red = red, this.green = green, this.blue = blue, this.alpha = alpha;
    }
    static parse(value) {
        let colors = [];
        // matching #rgb, #rgba, #rrggbb, #rrggbbaa
        if (/^#[\da-f]+$/i.test(value) && [
            4,
            5,
            7,
            9
        ].includes(value.length)) {
            const values = (value.length < 6 ? value.replace(/[^#]/gi, '$&$&') : value).slice(1).split('');
            while(values.length > 0)colors.push(parseInt(values.splice(0, 2).join(''), 16));
            colors[3] = colors[3] !== undefined ? colors[3] / 255 : undefined;
        }
        // matching rgb(rrr, ggg, bbb), rgba(rrr, ggg, bbb, 0.a)
        const match = value.match(/^rgba?\((.*)\)$/);
        if (match?.[1]) {
            const parts = match[1].split(',').map((value)=>value.trim());
            // Number('') is 0 rather than NaN, so empty components need their own check.
            if (parts.some((part)=>part === '' || !Number.isFinite(Number(part)))) return undefined;
            colors = parts.map((part, i)=>{
                return (0, _number.clamp)(Number(part), 0, i < 3 ? 255 : 1);
            });
        }
        if (colors[0] === undefined || colors[1] === undefined || colors[2] === undefined) return undefined;
        return colors.length < 3 ? undefined : new RGBColor(colors[0], colors[1], colors[2], colors[3] ?? 1);
    }
    toString(format = 'css') {
        switch(format){
            case 'hex':
                return '#' + (this.red.toString(16).padStart(2, '0') + this.green.toString(16).padStart(2, '0') + this.blue.toString(16).padStart(2, '0')).toUpperCase();
            case 'hexa':
                return '#' + (this.red.toString(16).padStart(2, '0') + this.green.toString(16).padStart(2, '0') + this.blue.toString(16).padStart(2, '0') + Math.round(this.alpha * 255).toString(16).padStart(2, '0')).toUpperCase();
            case 'rgb':
                return `rgb(${this.red}, ${this.green}, ${this.blue})`;
            case 'css':
            case 'rgba':
                return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
            default:
                return this.toFormat(format).toString(format);
        }
    }
    toFormat(format) {
        switch(format){
            case 'hex':
            case 'hexa':
            case 'rgb':
            case 'rgba':
                return this;
            case 'hsb':
            case 'hsba':
                return this.toHSB();
            case 'hsl':
            case 'hsla':
                return this.toHSL();
            default:
                throw new Error('Unsupported color conversion: rgb -> ' + format);
        }
    }
    toHexInt() {
        return this.red << 16 | this.green << 8 | this.blue;
    }
    /**
   * Converts an RGB color value to HSB.
   * Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB.
   *
   * @returns An HSBColor object.
   */ toHSB() {
        const red = this.red / 255;
        const green = this.green / 255;
        const blue = this.blue / 255;
        const min = Math.min(red, green, blue);
        const brightness = Math.max(red, green, blue);
        const chroma = brightness - min;
        const saturation = brightness === 0 ? 0 : chroma / brightness;
        let hue = 0; // achromatic
        if (chroma !== 0) {
            switch(brightness){
                case red:
                    hue = (green - blue) / chroma + (green < blue ? 6 : 0);
                    break;
                case green:
                    hue = (blue - red) / chroma + 2;
                    break;
                case blue:
                    hue = (red - green) / chroma + 4;
                    break;
            }
            hue /= 6;
        }
        return new HSBColor((0, _number.toFixedNumber)(hue * 360, 2), (0, _number.toFixedNumber)(saturation * 100, 2), (0, _number.toFixedNumber)(brightness * 100, 2), this.alpha);
    }
    /**
   * Converts an RGB color value to HSL.
   * Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB.
   *
   * @returns An HSLColor object.
   */ toHSL() {
        const red = this.red / 255;
        const green = this.green / 255;
        const blue = this.blue / 255;
        const min = Math.min(red, green, blue);
        const max = Math.max(red, green, blue);
        const lightness = (max + min) / 2;
        const chroma = max - min;
        let hue;
        let saturation;
        if (chroma === 0) hue = saturation = 0; // achromatic
        else {
            saturation = chroma / (lightness < 0.5 ? max + min : 2 - max - min);
            switch(max){
                case red:
                    hue = (green - blue) / chroma + (green < blue ? 6 : 0);
                    break;
                case green:
                    hue = (blue - red) / chroma + 2;
                    break;
                case blue:
                default:
                    hue = (red - green) / chroma + 4;
                    break;
            }
            hue /= 6;
        }
        return new HSLColor((0, _number.toFixedNumber)(hue * 360, 2), (0, _number.toFixedNumber)(saturation * 100, 2), (0, _number.toFixedNumber)(lightness * 100, 2), this.alpha);
    }
    clone() {
        return new RGBColor(this.red, this.green, this.blue, this.alpha);
    }
    getChannelRange(channel) {
        switch(channel){
            case 'red':
            case 'green':
            case 'blue':
                return {
                    minValue: 0x0,
                    maxValue: 0xff,
                    step: 0x1,
                    pageSize: 0x11
                };
            case 'alpha':
                return {
                    minValue: 0,
                    maxValue: 1,
                    step: 0.01,
                    pageSize: 0.1
                };
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
    }
    getChannelFormatOptions(channel) {
        switch(channel){
            case 'red':
            case 'green':
            case 'blue':
                return {
                    style: 'decimal'
                };
            case 'alpha':
                return {
                    style: 'percent'
                };
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
    }
    formatChannelValue(channel, locale) {
        let options = this.getChannelFormatOptions(channel);
        let value = this.getChannelValue(channel);
        return new (0, _number1.NumberFormatter)(locale, options).format(value);
    }
    getColorSpace() {
        return 'rgb';
    }
    static colorChannels = [
        'red',
        'green',
        'blue'
    ];
    getColorChannels() {
        return RGBColor.colorChannels;
    }
}
// X = <negative/positive number with/without decimal places>
// before/after a comma, 0 or more whitespaces are allowed
// - hsb(X, X%, X%)
// - hsba(X, X%, X%, X)
const HSB_REGEX = /hsb\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsba\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/;
class HSBColor extends Color {
    hue;
    saturation;
    brightness;
    alpha;
    constructor(hue, saturation, brightness, alpha){
        super(), this.hue = hue, this.saturation = saturation, this.brightness = brightness, this.alpha = alpha;
    }
    static parse(value) {
        let m;
        if (m = value.match(HSB_REGEX)) {
            const [h, s, b, a] = (m[1] ?? m[2]).split(',').map((n)=>Number(n.trim().replace('%', '')));
            return new HSBColor(normalizeHue(h), (0, _number.clamp)(s, 0, 100), (0, _number.clamp)(b, 0, 100), (0, _number.clamp)(a ?? 1, 0, 1));
        }
    }
    toString(format = 'css') {
        switch(format){
            case 'css':
                return this.toHSL().toString('css');
            case 'hex':
                return this.toRGB().toString('hex');
            case 'hexa':
                return this.toRGB().toString('hexa');
            case 'hsb':
                return `hsb(${this.hue}, ${(0, _number.toFixedNumber)(this.saturation, 2)}%, ${(0, _number.toFixedNumber)(this.brightness, 2)}%)`;
            case 'hsba':
                return `hsba(${this.hue}, ${(0, _number.toFixedNumber)(this.saturation, 2)}%, ${(0, _number.toFixedNumber)(this.brightness, 2)}%, ${this.alpha})`;
            default:
                return this.toFormat(format).toString(format);
        }
    }
    toFormat(format) {
        switch(format){
            case 'hsb':
            case 'hsba':
                return this;
            case 'hsl':
            case 'hsla':
                return this.toHSL();
            case 'rgb':
            case 'rgba':
                return this.toRGB();
            default:
                throw new Error('Unsupported color conversion: hsb -> ' + format);
        }
    }
    /**
   * Converts a HSB color to HSL.
   * Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSV_to_HSL.
   *
   * @returns An HSLColor object.
   */ toHSL() {
        let saturation = this.saturation / 100;
        let brightness = this.brightness / 100;
        let lightness = brightness * (1 - saturation / 2);
        saturation = lightness === 0 || lightness === 1 ? 0 : (brightness - lightness) / Math.min(lightness, 1 - lightness);
        return new HSLColor((0, _number.toFixedNumber)(this.hue, 2), (0, _number.toFixedNumber)(saturation * 100, 2), (0, _number.toFixedNumber)(lightness * 100, 2), this.alpha);
    }
    /**
   * Converts a HSV color value to RGB. Conversion formula adapted from
   * https://en.wikipedia.org/wiki/HSL_and_HSV#HSV_to_RGB_alternative.
   *
   * @returns An RGBColor object.
   */ toRGB() {
        let hue = this.hue;
        let saturation = this.saturation / 100;
        let brightness = this.brightness / 100;
        let fn = (n, k = (n + hue / 60) % 6)=>brightness - saturation * brightness * Math.max(Math.min(k, 4 - k, 1), 0);
        return new RGBColor(Math.round(fn(5) * 255), Math.round(fn(3) * 255), Math.round(fn(1) * 255), this.alpha);
    }
    clone() {
        return new HSBColor(this.hue, this.saturation, this.brightness, this.alpha);
    }
    getChannelRange(channel) {
        switch(channel){
            case 'hue':
                return {
                    minValue: 0,
                    maxValue: 360,
                    step: 1,
                    pageSize: 15
                };
            case 'saturation':
            case 'brightness':
                return {
                    minValue: 0,
                    maxValue: 100,
                    step: 1,
                    pageSize: 10
                };
            case 'alpha':
                return {
                    minValue: 0,
                    maxValue: 1,
                    step: 0.01,
                    pageSize: 0.1
                };
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
    }
    getChannelFormatOptions(channel) {
        switch(channel){
            case 'hue':
                return {
                    style: 'unit',
                    unit: 'degree',
                    unitDisplay: 'narrow'
                };
            case 'saturation':
            case 'brightness':
            case 'alpha':
                return {
                    style: 'percent'
                };
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
    }
    formatChannelValue(channel, locale) {
        let options = this.getChannelFormatOptions(channel);
        let value = this.getChannelValue(channel);
        if (channel === 'saturation' || channel === 'brightness') value /= 100;
        return new (0, _number1.NumberFormatter)(locale, options).format(value);
    }
    getColorSpace() {
        return 'hsb';
    }
    static colorChannels = [
        'hue',
        'saturation',
        'brightness'
    ];
    getColorChannels() {
        return HSBColor.colorChannels;
    }
}
// X = <negative/positive number with/without decimal places>
// before/after a comma, 0 or more whitespaces are allowed
// - hsl(X, X%, X%)
// - hsla(X, X%, X%, X)
const HSL_REGEX = /hsl\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsla\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/;
class HSLColor extends Color {
    hue;
    saturation;
    lightness;
    alpha;
    constructor(hue, saturation, lightness, alpha){
        super(), this.hue = hue, this.saturation = saturation, this.lightness = lightness, this.alpha = alpha;
    }
    static parse(value) {
        let m;
        if (m = value.match(HSL_REGEX)) {
            const [h, s, l, a] = (m[1] ?? m[2]).split(',').map((n)=>Number(n.trim().replace('%', '')));
            return new HSLColor(normalizeHue(h), (0, _number.clamp)(s, 0, 100), (0, _number.clamp)(l, 0, 100), (0, _number.clamp)(a ?? 1, 0, 1));
        }
    }
    toString(format = 'css') {
        switch(format){
            case 'hex':
                return this.toRGB().toString('hex');
            case 'hexa':
                return this.toRGB().toString('hexa');
            case 'hsl':
                return `hsl(${this.hue}, ${(0, _number.toFixedNumber)(this.saturation, 2)}%, ${(0, _number.toFixedNumber)(this.lightness, 2)}%)`;
            case 'css':
            case 'hsla':
                return `hsla(${this.hue}, ${(0, _number.toFixedNumber)(this.saturation, 2)}%, ${(0, _number.toFixedNumber)(this.lightness, 2)}%, ${this.alpha})`;
            default:
                return this.toFormat(format).toString(format);
        }
    }
    toFormat(format) {
        switch(format){
            case 'hsl':
            case 'hsla':
                return this;
            case 'hsb':
            case 'hsba':
                return this.toHSB();
            case 'rgb':
            case 'rgba':
                return this.toRGB();
            default:
                throw new Error('Unsupported color conversion: hsl -> ' + format);
        }
    }
    /**
   * Converts a HSL color to HSB.
   * Conversion formula adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_HSV.
   *
   * @returns An HSBColor object.
   */ toHSB() {
        let saturation = this.saturation / 100;
        let lightness = this.lightness / 100;
        let brightness = lightness + saturation * Math.min(lightness, 1 - lightness);
        saturation = brightness === 0 ? 0 : 2 * (1 - lightness / brightness);
        return new HSBColor((0, _number.toFixedNumber)(this.hue, 2), (0, _number.toFixedNumber)(saturation * 100, 2), (0, _number.toFixedNumber)(brightness * 100, 2), this.alpha);
    }
    /**
   * Converts a HSL color to RGB. Conversion formula adapted from
   * https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative.
   *
   * @returns An RGBColor object.
   */ toRGB() {
        let hue = this.hue;
        let saturation = this.saturation / 100;
        let lightness = this.lightness / 100;
        let a = saturation * Math.min(lightness, 1 - lightness);
        let fn = (n, k = (n + hue / 30) % 12)=>lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return new RGBColor(Math.round(fn(0) * 255), Math.round(fn(8) * 255), Math.round(fn(4) * 255), this.alpha);
    }
    clone() {
        return new HSLColor(this.hue, this.saturation, this.lightness, this.alpha);
    }
    getChannelRange(channel) {
        switch(channel){
            case 'hue':
                return {
                    minValue: 0,
                    maxValue: 360,
                    step: 1,
                    pageSize: 15
                };
            case 'saturation':
            case 'lightness':
                return {
                    minValue: 0,
                    maxValue: 100,
                    step: 1,
                    pageSize: 10
                };
            case 'alpha':
                return {
                    minValue: 0,
                    maxValue: 1,
                    step: 0.01,
                    pageSize: 0.1
                };
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
    }
    getChannelFormatOptions(channel) {
        switch(channel){
            case 'hue':
                return {
                    style: 'unit',
                    unit: 'degree',
                    unitDisplay: 'narrow'
                };
            case 'saturation':
            case 'lightness':
            case 'alpha':
                return {
                    style: 'percent'
                };
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
    }
    formatChannelValue(channel, locale) {
        let options = this.getChannelFormatOptions(channel);
        let value = this.getChannelValue(channel);
        if (channel === 'saturation' || channel === 'lightness') value /= 100;
        return new (0, _number1.NumberFormatter)(locale, options).format(value);
    }
    getColorSpace() {
        return 'hsl';
    }
    static colorChannels = [
        'hue',
        'saturation',
        'lightness'
    ];
    getColorChannels() {
        return HSLColor.colorChannels;
    }
}
// https://www.w3.org/TR/css-color-4/#color-conversion-code
function toOKLCH(color) {
    let rgb = color.toFormat('rgb');
    let red = rgb.getChannelValue('red') / 255;
    let green = rgb.getChannelValue('green') / 255;
    let blue = rgb.getChannelValue('blue') / 255;
    [red, green, blue] = lin_sRGB(red, green, blue);
    let [x, y, z] = lin_sRGB_to_XYZ(red, green, blue);
    let [l, a, b] = XYZ_to_OKLab(x, y, z);
    return OKLab_to_OKLCH(l, a, b);
}
function OKLab_to_OKLCH(l, a, b) {
    var hue = Math.atan2(b, a) * 180 / Math.PI;
    return [
        l,
        Math.sqrt(a ** 2 + b ** 2),
        hue >= 0 ? hue : hue + 360 // Hue, in degrees [0 to 360)
    ];
}
function lin_sRGB(r, g, b) {
    // convert an array of sRGB values
    // where in-gamut values are in the range [0 - 1]
    // to linear light (un-companded) form.
    // https://en.wikipedia.org/wiki/SRGB
    // Extended transfer function:
    // for negative values,  linear portion is extended on reflection of axis,
    // then reflected power function is used.
    return [
        lin_sRGB_component(r),
        lin_sRGB_component(g),
        lin_sRGB_component(b)
    ];
}
function lin_sRGB_component(val) {
    let sign = val < 0 ? -1 : 1;
    let abs = Math.abs(val);
    if (abs <= 0.04045) return val / 12.92;
    return sign * Math.pow((abs + 0.055) / 1.055, 2.4);
}
function lin_sRGB_to_XYZ(r, g, b) {
    // convert an array of linear-light sRGB values to CIE XYZ
    // using sRGB's own white, D65 (no chromatic adaptation)
    const M = [
        506752 / 1228815,
        87881 / 245763,
        12673 / 70218,
        87098 / 409605,
        175762 / 245763,
        12673 / 175545,
        7918 / 409605,
        87881 / 737289,
        1001167 / 1053270
    ];
    return multiplyMatrix(M, r, g, b);
}
function XYZ_to_OKLab(x, y, z) {
    // Given XYZ relative to D65, convert to OKLab
    const XYZtoLMS = [
        0.819022437996703,
        0.3619062600528904,
        -0.1288737815209879,
        0.0329836539323885,
        0.9292868615863434,
        0.0361446663506424,
        0.0481771893596242,
        0.2642395317527308,
        0.6335478284694309
    ];
    const LMStoOKLab = [
        0.210454268309314,
        0.7936177747023054,
        -0.0040720430116193,
        1.9779985324311684,
        -2.42859224204858,
        0.450593709617411,
        0.0259040424655478,
        0.7827717124575296,
        -0.8086757549230774
    ];
    let [a, b, c] = multiplyMatrix(XYZtoLMS, x, y, z);
    return multiplyMatrix(LMStoOKLab, Math.cbrt(a), Math.cbrt(b), Math.cbrt(c));
}
function multiplyMatrix(m, x, y, z) {
    let a = m[0] * x + m[1] * y + m[2] * z;
    let b = m[3] * x + m[4] * y + m[5] * z;
    let c = m[6] * x + m[7] * y + m[8] * z;
    return [
        a,
        b,
        c
    ];
}

},{"../utils/number":"aEFFO","../../intl/color/index.js":"bnnwG","@internationalized/string":[["LocalizedStringDictionary","3Dyf5"],["LocalizedStringFormatter","Pfhr4"]],"@internationalized/number":"3OyUY","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bnnwG":[function(require,module,exports,__globalThis) {
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

},{"./ar-AE.js":"8VGfv","./bg-BG.js":"bCEQB","./cs-CZ.js":"1QKaU","./da-DK.js":"7xFVh","./de-DE.js":"4PMxu","./el-GR.js":"Q4sD5","./en-US.js":"3WkqB","./es-ES.js":"b38Q0","./et-EE.js":"j7Gw4","./fi-FI.js":"h9XTw","./fr-FR.js":"fGamL","./he-IL.js":"1XPHO","./hr-HR.js":"6Fdg3","./hu-HU.js":"9zAZR","./it-IT.js":"j4075","./ja-JP.js":"6fFOi","./ko-KR.js":"7ue0v","./lt-LT.js":"khLr0","./lv-LV.js":"7t9Rp","./nb-NO.js":"enj1s","./nl-NL.js":"13BHW","./pl-PL.js":"7bkfs","./pt-BR.js":"l7WVK","./pt-PT.js":"jCk0L","./ro-RO.js":"4vpPq","./ru-RU.js":"eJAyu","./sk-SK.js":"ivLVR","./sl-SI.js":"9Gm06","./sr-SP.js":"bO41Y","./sv-SE.js":"8y7UK","./tr-TR.js":"ivnFm","./uk-UA.js":"jSPiu","./zh-CN.js":"ivuKX","./zh-TW.js":"dxJE3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8VGfv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `\u{623}\u{644}\u{641}\u{627}`,
    "black": `\u{623}\u{633}\u{648}\u{62F}`,
    "blue": `\u{623}\u{632}\u{631}\u{642}`,
    "blue purple": `\u{623}\u{631}\u{62C}\u{648}\u{627}\u{646}\u{64A} \u{645}\u{632}\u{631}\u{642}`,
    "brightness": `\u{627}\u{644}\u{633}\u{637}\u{648}\u{639}`,
    "brown": `\u{628}\u{646}\u{64A}`,
    "brown yellow": `\u{623}\u{635}\u{641}\u{631} \u{628}\u{646}\u{64A}`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `\u{633}\u{645}\u{627}\u{648}\u{64A}`,
    "cyan blue": `\u{623}\u{632}\u{631}\u{642} \u{633}\u{645}\u{627}\u{648}\u{64A}`,
    "dark": `\u{62F}\u{627}\u{643}\u{646}`,
    "gray": `\u{631}\u{645}\u{627}\u{62F}\u{64A}`,
    "grayish": `\u{645}\u{627}\u{626}\u{644} \u{644}\u{644}\u{631}\u{645}\u{627}\u{62F}\u{64A}`,
    "green": `\u{623}\u{62E}\u{636}\u{631}`,
    "green cyan": `\u{633}\u{645}\u{627}\u{648}\u{64A} \u{645}\u{62E}\u{636}\u{631}`,
    "hue": `\u{62F}\u{631}\u{62C}\u{629} \u{627}\u{644}\u{644}\u{648}\u{646}`,
    "light": `\u{641}\u{627}\u{62A}\u{62D}`,
    "lightness": `\u{627}\u{644}\u{625}\u{636}\u{627}\u{621}\u{629}`,
    "magenta": `\u{623}\u{631}\u{62C}\u{648}\u{627}\u{646}\u{64A}`,
    "magenta pink": `\u{623}\u{631}\u{62C}\u{648}\u{627}\u{646}\u{64A} \u{648}\u{631}\u{62F}\u{64A}`,
    "orange": `\u{628}\u{631}\u{62A}\u{642}\u{627}\u{644}\u{64A}`,
    "orange yellow": `\u{623}\u{635}\u{641}\u{631} \u{628}\u{631}\u{62A}\u{642}\u{627}\u{644}\u{64A}`,
    "pale": `\u{628}\u{627}\u{647}\u{62A}`,
    "pink": `\u{648}\u{631}\u{62F}\u{64A}`,
    "pink red": `\u{623}\u{62D}\u{645}\u{631} \u{648}\u{631}\u{62F}\u{64A}`,
    "purple": `\u{623}\u{631}\u{62C}\u{648}\u{627}\u{646}\u{64A}`,
    "purple magenta": `\u{628}\u{646}\u{641}\u{633}\u{62C}\u{64A}`,
    "red": `\u{623}\u{62D}\u{645}\u{631}`,
    "red orange": `\u{628}\u{631}\u{62A}\u{642}\u{627}\u{644}\u{64A} \u{645}\u{62D}\u{645}\u{631}`,
    "saturation": `\u{627}\u{644}\u{62A}\u{634}\u{628}\u{639}`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} \u{634}\u{641}\u{627}\u{641}`,
    "very dark": `\u{62F}\u{627}\u{643}\u{646} \u{62C}\u{62F}\u{64B}\u{627}`,
    "very light": `\u{641}\u{627}\u{62A}\u{62D} \u{62C}\u{62F}\u{64B}\u{627}`,
    "vibrant": `\u{633}\u{627}\u{637}\u{639}`,
    "white": `\u{623}\u{628}\u{64A}\u{636}`,
    "yellow": `\u{623}\u{635}\u{641}\u{631}`,
    "yellow green": `\u{623}\u{62E}\u{636}\u{631} \u{645}\u{635}\u{641}\u{631}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bCEQB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `\u{410}\u{43B}\u{444}\u{430}`,
    "black": `\u{447}\u{435}\u{440}\u{43D}\u{43E}`,
    "blue": `\u{421}\u{438}\u{43D}\u{44C}\u{43E}`,
    "blue purple": `\u{441}\u{438}\u{43D}\u{44C}\u{43E} \u{43B}\u{438}\u{43B}\u{430}\u{432}\u{43E}`,
    "brightness": `\u{42F}\u{440}\u{43A}\u{43E}\u{441}\u{442}`,
    "brown": `\u{43A}\u{430}\u{444}\u{44F}\u{432}\u{43E}`,
    "brown yellow": `\u{43A}\u{430}\u{444}\u{44F}\u{432}\u{43E} \u{436}\u{44A}\u{43B}\u{442}\u{43E}`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `\u{446}\u{438}\u{430}\u{43D}`,
    "cyan blue": `\u{446}\u{438}\u{430}\u{43D} \u{441}\u{438}\u{43D}\u{44C}\u{43E}`,
    "dark": `\u{442}\u{44A}\u{43C}\u{43D}\u{43E}`,
    "gray": `\u{441}\u{438}\u{432}\u{43E}`,
    "grayish": `\u{441}\u{438}\u{432}\u{43A}\u{430}\u{432}`,
    "green": `\u{417}\u{435}\u{43B}\u{435}\u{43D}\u{43E}`,
    "green cyan": `\u{437}\u{435}\u{43B}\u{435}\u{43D} \u{446}\u{438}\u{430}\u{43D}`,
    "hue": `\u{41E}\u{442}\u{442}\u{435}\u{43D}\u{44A}\u{43A}`,
    "light": `\u{441}\u{432}\u{435}\u{442}\u{43B}\u{43E}`,
    "lightness": `\u{41B}\u{435}\u{43A}\u{43E}\u{442}\u{430}`,
    "magenta": `\u{43C}\u{430}\u{433}\u{435}\u{43D}\u{442}\u{430}`,
    "magenta pink": `\u{43C}\u{430}\u{433}\u{435}\u{43D}\u{442}\u{430} \u{440}\u{43E}\u{437}\u{43E}\u{432}\u{43E}`,
    "orange": `\u{43E}\u{440}\u{430}\u{43D}\u{436}\u{435}\u{432}\u{43E}`,
    "orange yellow": `\u{43E}\u{440}\u{430}\u{43D}\u{436}\u{435}\u{432}\u{43E} \u{436}\u{44A}\u{43B}\u{442}\u{43E}`,
    "pale": `\u{431}\u{43B}\u{435}\u{434}\u{43E}`,
    "pink": `\u{440}\u{43E}\u{437}\u{43E}\u{432}\u{43E}`,
    "pink red": `\u{440}\u{43E}\u{437}\u{43E}\u{432}\u{43E} \u{447}\u{435}\u{440}\u{432}\u{435}\u{43D}\u{43E}`,
    "purple": `\u{43B}\u{438}\u{43B}\u{430}\u{432}\u{43E}`,
    "purple magenta": `\u{43B}\u{438}\u{43B}\u{430}\u{432}\u{43E} \u{43C}\u{430}\u{433}\u{435}\u{43D}\u{442}\u{430}`,
    "red": `\u{427}\u{435}\u{440}\u{432}\u{435}\u{43D}\u{43E}`,
    "red orange": `\u{447}\u{435}\u{440}\u{432}\u{435}\u{43D} \u{43F}\u{43E}\u{440}\u{442}\u{43E}\u{43A}\u{430}\u{43B}`,
    "saturation": `\u{41D}\u{430}\u{441}\u{438}\u{442}\u{435}\u{43D}\u{43E}\u{441}\u{442}`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} \u{43F}\u{440}\u{43E}\u{437}\u{440}\u{430}\u{447}\u{435}\u{43D}`,
    "very dark": `\u{43C}\u{43D}\u{43E}\u{433}\u{43E} \u{442}\u{44A}\u{43C}\u{43D}\u{43E}`,
    "very light": `\u{43C}\u{43D}\u{43E}\u{433}\u{43E} \u{441}\u{432}\u{435}\u{442}\u{43B}\u{43E}`,
    "vibrant": ` \u{44F}\u{440}\u{43A}\u{43E}`,
    "white": `\u{431}\u{44F}\u{43B}\u{43E}`,
    "yellow": `\u{436}\u{44A}\u{43B}\u{442}\u{43E}`,
    "yellow green": `\u{436}\u{44A}\u{43B}\u{442}\u{43E} \u{437}\u{435}\u{43B}\u{435}\u{43D}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1QKaU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `\u{10D}ern\xe1`,
    "blue": `Modr\xe1`,
    "blue purple": `modrofialov\xe1`,
    "brightness": `Jas`,
    "brown": `hn\u{11B}d\xe1`,
    "brown yellow": `hn\u{11B}do\u{17E}lut\xe1`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `tyrkysov\xe1`,
    "cyan blue": `tyrkysovomodr\xe1`,
    "dark": `tmav\xe1`,
    "gray": `\u{161}ed\xe1`,
    "grayish": `na\u{161}edl\xe1`,
    "green": `Zelen\xe1`,
    "green cyan": `zelenotyrkysov\xe1`,
    "hue": `Odst\xedn`,
    "light": `sv\u{11B}tl\xe1`,
    "lightness": `Sv\u{11B}tlost`,
    "magenta": `purpurov\xe1`,
    "magenta pink": `purpurov\u{11B} r\u{16F}\u{17E}ov\xe1`,
    "orange": `oran\u{17E}ov\xe1`,
    "orange yellow": `oran\u{17E}ovo\u{17E}lut\xe1`,
    "pale": `bled\xe1`,
    "pink": `r\u{16F}\u{17E}ov\xe1`,
    "pink red": `r\u{16F}\u{17E}ovo\u{10D}erven\xe1`,
    "purple": `fialov\xe1`,
    "purple magenta": `fialov\u{11B} purpurov\xe1`,
    "red": `\u{10C}erven\xe1`,
    "red orange": `\u{10D}ervenooran\u{17E}ov\xe1`,
    "saturation": `Sytost`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} pr\u{16F}hledn\xe9`,
    "very dark": `velmi tmav\xe1`,
    "very light": `velmi sv\u{11B}tl\xe1`,
    "vibrant": `z\xe1\u{159}iv\xe1`,
    "white": `b\xedl\xe1`,
    "yellow": `\u{17E}lut\xe1`,
    "yellow green": `\u{17E}lutozelen\xe1`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7xFVh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `sort`,
    "blue": `Bl\xe5`,
    "blue purple": `bl\xe5lilla`,
    "brightness": `Lysstyrke`,
    "brown": `brun`,
    "brown yellow": `brungul`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `cyan`,
    "cyan blue": `cyan bl\xe5`,
    "dark": `m\xf8rk`,
    "gray": `gr\xe5`,
    "grayish": `gr\xe5lig`,
    "green": `Gr\xf8n`,
    "green cyan": `gr\xf8n cyan`,
    "hue": `Tone`,
    "light": `lys`,
    "lightness": `Lyshed`,
    "magenta": `magenta`,
    "magenta pink": `magenta pink`,
    "orange": `orange`,
    "orange yellow": `orangegul`,
    "pale": `bleg`,
    "pink": `lyser\xf8d`,
    "pink red": `lyser\xf8dlig r\xf8d`,
    "purple": `lilla`,
    "purple magenta": `lilla magenta`,
    "red": `R\xf8d`,
    "red orange": `r\xf8dorange`,
    "saturation": `Farvem\xe6tning`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} gennemsigtig`,
    "very dark": `meget m\xf8rk`,
    "very light": `meget lys`,
    "vibrant": `klar`,
    "white": `hvid`,
    "yellow": `gul`,
    "yellow green": `gulgr\xf8n`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4PMxu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alpha`,
    "black": `Schwarz`,
    "blue": `Blau`,
    "blue purple": `Blaulila`,
    "brightness": `Helligkeit`,
    "brown": `Braun`,
    "brown yellow": `Braungelb`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `Cyan`,
    "cyan blue": `Cyanblau`,
    "dark": `dunkles`,
    "gray": `Grau`,
    "grayish": `gr\xe4uliches`,
    "green": `Gr\xfcn`,
    "green cyan": `Gr\xfcncyan`,
    "hue": `Farbton`,
    "light": `helles`,
    "lightness": `Leuchtkraft`,
    "magenta": `Magenta`,
    "magenta pink": `Magentarosa`,
    "orange": `Orange`,
    "orange yellow": `Orangegelb`,
    "pale": `blasses`,
    "pink": `Rosa`,
    "pink red": `Rosarot`,
    "purple": `Lila`,
    "purple magenta": `Lilamagenta`,
    "red": `Rot`,
    "red orange": `Rotorange`,
    "saturation": `S\xe4ttigung`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, zu ${args.percentTransparent} transparent`,
    "very dark": `sehr dunkles`,
    "very light": `sehr helles`,
    "vibrant": `lebhaftes`,
    "white": `Wei\xdf`,
    "yellow": `Gelb`,
    "yellow green": `Gelbgr\xfcn`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"Q4sD5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `\u{386}\u{3BB}\u{3C6}\u{3B1}`,
    "black": `\u{3BC}\u{3B1}\u{3CD}\u{3C1}\u{3BF}`,
    "blue": `\u{39C}\u{3C0}\u{3BB}\u{3B5}`,
    "blue purple": `\u{3BC}\u{3C0}\u{3BB}\u{3B5} \u{3BC}\u{3C9}\u{3B2}`,
    "brightness": `\u{3A6}\u{3C9}\u{3C4}\u{3B5}\u{3B9}\u{3BD}\u{3CC}\u{3C4}\u{3B7}\u{3C4}\u{3B1}`,
    "brown": `\u{3BA}\u{3B1}\u{3C6}\u{3AD}`,
    "brown yellow": `\u{3BA}\u{3B1}\u{3C6}\u{3AD} \u{3BA}\u{3AF}\u{3C4}\u{3C1}\u{3B9}\u{3BD}\u{3BF}`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `\u{3BA}\u{3C5}\u{3B1}\u{3BD}\u{3CC}`,
    "cyan blue": `\u{3BA}\u{3C5}\u{3B1}\u{3BD}\u{3CC} \u{3BC}\u{3C0}\u{3BB}\u{3B5}`,
    "dark": `\u{3C3}\u{3BA}\u{3BF}\u{3CD}\u{3C1}\u{3BF}`,
    "gray": `\u{3B3}\u{3BA}\u{3C1}\u{3B9}`,
    "grayish": `\u{3B3}\u{3BA}\u{3C1}\u{3B9}\u{3B6}\u{3C9}\u{3C0}\u{3CC}`,
    "green": `\u{3A0}\u{3C1}\u{3AC}\u{3C3}\u{3B9}\u{3BD}\u{3BF}`,
    "green cyan": `\u{3C0}\u{3C1}\u{3AC}\u{3C3}\u{3B9}\u{3BD}\u{3BF} \u{3BA}\u{3C5}\u{3B1}\u{3BD}\u{3CC}`,
    "hue": `\u{3A4}\u{3CC}\u{3BD}\u{3BF}\u{3C2}`,
    "light": `\u{3B1}\u{3BD}\u{3BF}\u{3B9}\u{3C7}\u{3C4}\u{3CC}`,
    "lightness": `\u{3A6}\u{3C9}\u{3C4}\u{3B5}\u{3B9}\u{3BD}\u{3CC}\u{3C4}\u{3B7}\u{3C4}\u{3B1}`,
    "magenta": `\u{3BC}\u{3B1}\u{3C4}\u{3B6}\u{3AD}\u{3BD}\u{3C4}\u{3B1}`,
    "magenta pink": `\u{3BC}\u{3B1}\u{3C4}\u{3B6}\u{3AD}\u{3BD}\u{3C4}\u{3B1} \u{3C1}\u{3BF}\u{3B6}`,
    "orange": `\u{3C0}\u{3BF}\u{3C1}\u{3C4}\u{3BF}\u{3BA}\u{3B1}\u{3BB}\u{3AF}`,
    "orange yellow": `\u{3C0}\u{3BF}\u{3C1}\u{3C4}\u{3BF}\u{3BA}\u{3B1}\u{3BB}\u{3AF} \u{3BA}\u{3AF}\u{3C4}\u{3C1}\u{3B9}\u{3BD}\u{3BF}`,
    "pale": `\u{3B1}\u{3BD}\u{3BF}\u{3B9}\u{3C7}\u{3C4}\u{3CC}`,
    "pink": `\u{3C1}\u{3BF}\u{3B6}`,
    "pink red": `\u{3C1}\u{3BF}\u{3B6} \u{3BA}\u{3CC}\u{3BA}\u{3BA}\u{3B9}\u{3BD}\u{3BF}`,
    "purple": `\u{3BC}\u{3C9}\u{3B2}`,
    "purple magenta": `\u{3BC}\u{3C9}\u{3B2} \u{3BC}\u{3B1}\u{3C4}\u{3B6}\u{3AD}\u{3BD}\u{3C4}\u{3B1}`,
    "red": `\u{39A}\u{3CC}\u{3BA}\u{3BA}\u{3B9}\u{3BD}\u{3BF}`,
    "red orange": `\u{3BA}\u{3CC}\u{3BA}\u{3BA}\u{3B9}\u{3BD}\u{3BF} \u{3C0}\u{3BF}\u{3C1}\u{3C4}\u{3BF}\u{3BA}\u{3B1}\u{3BB}\u{3AF}`,
    "saturation": `\u{39A}\u{3BF}\u{3C1}\u{3B5}\u{3C3}\u{3BC}\u{3CC}\u{3C2}`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} \u{3B4}\u{3B9}\u{3B1}\u{3C6}\u{3B1}\u{3BD}\u{3AD}\u{3C2}`,
    "very dark": `\u{3C0}\u{3BF}\u{3BB}\u{3CD} \u{3C3}\u{3BA}\u{3BF}\u{3CD}\u{3C1}\u{3BF}`,
    "very light": `\u{3C0}\u{3BF}\u{3BB}\u{3CD} \u{3B1}\u{3BD}\u{3BF}\u{3B9}\u{3C7}\u{3C4}\u{3CC}`,
    "vibrant": `\u{3AD}\u{3BD}\u{3C4}\u{3BF}\u{3BD}\u{3BF}`,
    "white": `\u{3BB}\u{3B5}\u{3C5}\u{3BA}\u{3CC}`,
    "yellow": `\u{3BA}\u{3AF}\u{3C4}\u{3C1}\u{3B9}\u{3BD}\u{3BF}`,
    "yellow green": `\u{3BA}\u{3AF}\u{3C4}\u{3C1}\u{3B9}\u{3BD}\u{3BF} \u{3C0}\u{3C1}\u{3AC}\u{3C3}\u{3B9}\u{3BD}\u{3BF}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3WkqB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "hue": `Hue`,
    "saturation": `Saturation`,
    "lightness": `Lightness`,
    "brightness": `Brightness`,
    "red": `Red`,
    "green": `Green`,
    "blue": `Blue`,
    "alpha": `Alpha`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} transparent`,
    "very dark": `very dark`,
    "dark": `dark`,
    "light": `light`,
    "very light": `very light`,
    "pale": `pale`,
    "grayish": `grayish`,
    "vibrant": `vibrant`,
    "black": `black`,
    "white": `white`,
    "gray": `gray`,
    "pink": `pink`,
    "pink red": `pink red`,
    "red orange": `red orange`,
    "brown": `brown`,
    "orange": `orange`,
    "orange yellow": `orange yellow`,
    "brown yellow": `brown yellow`,
    "yellow": `yellow`,
    "yellow green": `yellow green`,
    "green cyan": `green cyan`,
    "cyan": `cyan`,
    "cyan blue": `cyan blue`,
    "blue purple": `blue purple`,
    "purple": `purple`,
    "purple magenta": `purple magenta`,
    "magenta": `magenta`,
    "magenta pink": `magenta pink`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"b38Q0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alpha`,
    "black": `negro`,
    "blue": `Azul`,
    "blue purple": `p\xfarpura azulado`,
    "brightness": `Brillo`,
    "brown": `marr\xf3n`,
    "brown yellow": `amarillo amarronado`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `cian`,
    "cyan blue": `azul cian`,
    "dark": `oscuro`,
    "gray": `gris`,
    "grayish": `gris\xe1ceo`,
    "green": `Verde`,
    "green cyan": `cian verdoso`,
    "hue": `Tono`,
    "light": `claro`,
    "lightness": `Luminosidad`,
    "magenta": `magenta`,
    "magenta pink": `rosa magenta`,
    "orange": `naranja`,
    "orange yellow": `amarillo anaranjado`,
    "pale": `p\xe1lido`,
    "pink": `rosa`,
    "pink red": `rojo rosado`,
    "purple": `morado`,
    "purple magenta": `magenta viol\xe1ceo`,
    "red": `Rojo`,
    "red orange": `naranja rojizo`,
    "saturation": `Saturaci\xf3n`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} transparente`,
    "very dark": `muy oscuro`,
    "very light": `muy claro`,
    "vibrant": `intenso`,
    "white": `blanco`,
    "yellow": `amarillo`,
    "yellow green": `verde amarillento`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j7Gw4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `must`,
    "blue": `Sinine`,
    "blue purple": `sinakaslilla`,
    "brightness": `Heledus`,
    "brown": `pruun`,
    "brown yellow": `pruunikaskollane`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `ts\xfcaan`,
    "cyan blue": `ts\xfcaansinine`,
    "dark": `tume`,
    "gray": `hall`,
    "grayish": `hallikas`,
    "green": `Roheline`,
    "green cyan": `ts\xfcaanroheline`,
    "hue": `V\xe4rv`,
    "light": `valgus`,
    "lightness": `Valgus`,
    "magenta": `magentapunane`,
    "magenta pink": `magentaroosa`,
    "orange": `oran\u{17E}`,
    "orange yellow": `oran\u{17E}ikaskollane`,
    "pale": `kahvatu`,
    "pink": `roosa`,
    "pink red": `vaarikapunane`,
    "purple": `lilla`,
    "purple magenta": `purpurne magenta`,
    "red": `Punane`,
    "red orange": `punakasoran\u{17E}`,
    "saturation": `K\xfcllastus`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} l\xe4bipaistev`,
    "very dark": `v\xe4ga tume`,
    "very light": `v\xe4ga hele`,
    "vibrant": `ere`,
    "white": `valge`,
    "yellow": `kollane`,
    "yellow green": `kollakasroheline`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h9XTw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alpha`,
    "black": `musta`,
    "blue": `Sininen`,
    "blue purple": `sinivioletti`,
    "brightness": `Kirkkaus`,
    "brown": `ruskea`,
    "brown yellow": `ruskeankeltainen`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `syaani`,
    "cyan blue": `syaaninsininen`,
    "dark": `tumma`,
    "gray": `harmaa`,
    "grayish": `harmahtava`,
    "green": `Vihre\xe4`,
    "green cyan": `vihre\xe4nsyaani`,
    "hue": `S\xe4vy`,
    "light": `vaalea`,
    "lightness": `Valom\xe4\xe4r\xe4`,
    "magenta": `magenta`,
    "magenta pink": `magentapinkki`,
    "orange": `oranssi`,
    "orange yellow": `oranssinkeltainen`,
    "pale": `vaalea`,
    "pink": `pinkki`,
    "pink red": `vaaleanpunainen`,
    "purple": `violetti`,
    "purple magenta": `violettimagenta`,
    "red": `Punainen`,
    "red orange": `punaoranssi`,
    "saturation": `V\xe4rikyll\xe4isyys`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} l\xe4pin\xe4kyv\xe4`,
    "very dark": `hyvin tumma`,
    "very light": `eritt\xe4in vaalea`,
    "vibrant": `eloisa`,
    "white": `valkea`,
    "yellow": `keltainen`,
    "yellow green": `keltavihre\xe4`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fGamL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alpha`,
    "black": `Noir`,
    "blue": `Bleu`,
    "blue purple": `Violet bleu`,
    "brightness": `Luminosit\xe9`,
    "brown": `Brun`,
    "brown yellow": `Jaune brun`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `Cyan`,
    "cyan blue": `Bleu cyan`,
    "dark": `Sombre`,
    "gray": `Gris`,
    "grayish": `Gris\xe2tre`,
    "green": `Vert`,
    "green cyan": `Cyan vert`,
    "hue": `Teinte`,
    "light": `Clair`,
    "lightness": `Luminosit\xe9`,
    "magenta": `Magenta`,
    "magenta pink": `Rose magenta`,
    "orange": `Orange`,
    "orange yellow": `Jaune orang\xe9`,
    "pale": `P\xe2le`,
    "pink": `Rose`,
    "pink red": `Rouge ros\xe9`,
    "purple": `Violet`,
    "purple magenta": `Magenta violet`,
    "red": `Rouge`,
    "red orange": `Orange rouge`,
    "saturation": `Saturation`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} transparent`,
    "very dark": `Tr\xe8s sombre`,
    "very light": `Tr\xe8s clair`,
    "vibrant": `Vif`,
    "white": `Blanc`,
    "yellow": `Jaune`,
    "yellow green": `Vert jaune`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1XPHO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `\u{5D0}\u{5DC}\u{5E4}\u{5D0}`,
    "black": `\u{5E9}\u{5D7}\u{5D5}\u{5E8}`,
    "blue": `\u{5DB}\u{5D7}\u{5D5}\u{5DC}`,
    "blue purple": `\u{5DB}\u{5D7}\u{5D5}\u{5DC} \u{5E1}\u{5D2}\u{5D5}\u{5DC}`,
    "brightness": `\u{5D1}\u{5D4}\u{5D9}\u{5E8}\u{5D5}\u{5EA}`,
    "brown": `\u{5D7}\u{5D5}\u{5DD}`,
    "brown yellow": `\u{5D7}\u{5D5}\u{5DD} \u{5E6}\u{5D4}\u{5D5}\u{5D1}`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `\u{5D8}\u{5D5}\u{5E8}\u{5E7}\u{5D9}\u{5D6}`,
    "cyan blue": `\u{5DB}\u{5D7}\u{5D5}\u{5DC} \u{5E6}\u{5D9}\u{5D0}\u{5DF}`,
    "dark": `\u{5DB}\u{5D4}\u{5D4}`,
    "gray": `\u{5D0}\u{5E4}\u{5D5}\u{5E8}`,
    "grayish": `\u{5D0}\u{5E4}\u{5E8}\u{5E4}\u{5E8}`,
    "green": `\u{5D9}\u{5E8}\u{5D5}\u{5E7}`,
    "green cyan": `\u{5E6}\u{5D9}\u{5D0}\u{5DF} \u{5D9}\u{5E8}\u{5D5}\u{5E7}`,
    "hue": `\u{5D2}\u{5D5}\u{5D5}\u{5DF}`,
    "light": `\u{5D0}\u{5D5}\u{5E8}`,
    "lightness": `\u{5DB}\u{5DE}\u{5D5}\u{5EA} \u{5D0}\u{5D5}\u{5E8}`,
    "magenta": `\u{5DE}\u{5D2}'\u{5E0}\u{5D8}\u{5D4}`,
    "magenta pink": `\u{5D5}\u{5E8}\u{5D5}\u{5D3} \u{5DE}\u{5D2}'\u{5E0}\u{5D8}\u{5D4}`,
    "orange": `\u{5DB}\u{5EA}\u{5D5}\u{5DD}`,
    "orange yellow": `\u{5DB}\u{5EA}\u{5D5}\u{5DD} \u{5E6}\u{5D4}\u{5D5}\u{5D1}`,
    "pale": `\u{5D7}\u{5D9}\u{5D5}\u{5D5}\u{5E8}`,
    "pink": `\u{5D5}\u{5E8}\u{5D5}\u{5D3}`,
    "pink red": `\u{5D5}\u{5E8}\u{5D5}\u{5D3} \u{5D0}\u{5D3}\u{5D5}\u{5DD}`,
    "purple": `\u{5E1}\u{5D2}\u{5D5}\u{5DC}`,
    "purple magenta": `\u{5DE}\u{5D2}'\u{5E0}\u{5D8}\u{5D4} \u{5E1}\u{5D2}\u{5D5}\u{5DC}`,
    "red": `\u{5D0}\u{5D3}\u{5D5}\u{5DD}`,
    "red orange": `\u{5DB}\u{5EA}\u{5D5}\u{5DD} \u{5D0}\u{5D3}\u{5D5}\u{5DD}`,
    "saturation": `\u{5E8}\u{5D5}\u{5D5}\u{5D9}\u{5D4}`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} \u{5E9}\u{5E7}\u{5D5}\u{5E3}`,
    "very dark": `\u{5DB}\u{5D4}\u{5D4} \u{5DE}\u{5D0}\u{5D5}\u{5D3}`,
    "very light": `\u{5D1}\u{5D4}\u{5D9}\u{5E8} \u{5DE}\u{5D0}\u{5D5}\u{5D3}`,
    "vibrant": `\u{5EA}\u{5D5}\u{5E1}\u{5E1}`,
    "white": `\u{5DC}\u{5D1}\u{5DF}`,
    "yellow": `\u{5E6}\u{5D4}\u{5D5}\u{5D1}`,
    "yellow green": `\u{5E6}\u{5D4}\u{5D5}\u{5D1} \u{5D9}\u{5E8}\u{5D5}\u{5E7}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6Fdg3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `crno`,
    "blue": `Plava`,
    "blue purple": `plavo ljubi\u{10D}asta`,
    "brightness": `Svjetlina`,
    "brown": `sme\u{111}a`,
    "brown yellow": `sme\u{111}e \u{17E}uta`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `cijan`,
    "cyan blue": `cijan plava`,
    "dark": `tamno`,
    "gray": `siva`,
    "grayish": `sivkasto`,
    "green": `Zelena`,
    "green cyan": `zelena cijan`,
    "hue": `Nijansa`,
    "light": `svjetlo`,
    "lightness": `Osvijetljenost`,
    "magenta": `magenta`,
    "magenta pink": `magentno ru\u{17E}i\u{10D}asta`,
    "orange": `naran\u{10D}asta`,
    "orange yellow": `naran\u{10D}asto \u{17E}uta`,
    "pale": `blijeda`,
    "pink": `ru\u{17E}i\u{10D}asta`,
    "pink red": `ru\u{17E}i\u{10D}asto crvena`,
    "purple": `ljubi\u{10D}asta`,
    "purple magenta": `ljubi\u{10D}asta magenta`,
    "red": `Crvena`,
    "red orange": `crveno naran\u{10D}asta`,
    "saturation": `Zasi\u{107}enost`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} prozirnosti`,
    "very dark": `jako tamna`,
    "very light": `vrlo svijetlo`,
    "vibrant": `vibrantna`,
    "white": `bijela`,
    "yellow": `\u{17E}uto`,
    "yellow green": `\u{17E}uto zelena`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9zAZR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `fekete`,
    "blue": `K\xe9k`,
    "blue purple": `k\xe9k lila`,
    "brightness": `F\xe9nyess\xe9g`,
    "brown": `barna`,
    "brown yellow": `barna s\xe1rga`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `ci\xe1nk\xe9k`,
    "cyan blue": `ci\xe1nk\xe9k`,
    "dark": `s\xf6t\xe9t`,
    "gray": `sz\xfcrke`,
    "grayish": `sz\xfcrk\xe9s`,
    "green": `Z\xf6ld`,
    "green cyan": `z\xf6ld ci\xe1nk\xe9k`,
    "hue": `Sz\xedn\xe1rnyalat`,
    "light": `vil\xe1gos`,
    "lightness": `Vil\xe1goss\xe1g`,
    "magenta": `b\xedbor`,
    "magenta pink": `b\xedbor r\xf3zsasz\xedn`,
    "orange": `narancs`,
    "orange yellow": `narancss\xe1rga`,
    "pale": `halv\xe1ny`,
    "pink": `r\xf3zsasz\xedn`,
    "pink red": `r\xf3zsasz\xedn piros`,
    "purple": `lila`,
    "purple magenta": `lila b\xedbor`,
    "red": `Piros`,
    "red orange": `piros narancs`,
    "saturation": `Tel\xedtetts\xe9g`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} \xe1tl\xe1tsz\xf3`,
    "very dark": `nagyon s\xf6t\xe9t`,
    "very light": `nagyon vil\xe1gos`,
    "vibrant": `\xe9l\xe9nk`,
    "white": `feh\xe9r`,
    "yellow": `s\xe1rga`,
    "yellow green": `s\xe1rga z\xf6ld`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j4075":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `nero`,
    "blue": `Blu`,
    "blue purple": `blu viola`,
    "brightness": `Luminosit\xe0`,
    "brown": `marrone`,
    "brown yellow": `giallo bruno`,
    "colorName": (args)=>`${args.hue} ${args.chroma} ${args.lightness}`,
    "cyan": `ciano`,
    "cyan blue": `blu ciano`,
    "dark": `scuro`,
    "gray": `grigio`,
    "grayish": `grigiastro`,
    "green": `Verde`,
    "green cyan": `verde ciano`,
    "hue": `Tonalit\xe0`,
    "light": `chiaro`,
    "lightness": `Luminosit\xe0`,
    "magenta": `magenta`,
    "magenta pink": `rosa magenta`,
    "orange": `arancio`,
    "orange yellow": `giallo arancio`,
    "pale": `tenue`,
    "pink": `rosa`,
    "pink red": `rosa rosso`,
    "purple": `viola`,
    "purple magenta": `viola magenta`,
    "red": `Rosso`,
    "red orange": `rosso arancio`,
    "saturation": `Saturazione`,
    "transparentColorName": (args)=>`${args.hue} ${args.chroma} ${args.lightness}, trasparenza ${args.percentTransparent}`,
    "very dark": `molto scuro`,
    "very light": `molto chiaro`,
    "vibrant": `vivace`,
    "white": `bianco`,
    "yellow": `giallo`,
    "yellow green": `giallo verde`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6fFOi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `\u{30A2}\u{30EB}\u{30D5}\u{30A1}`,
    "black": `\u{30D6}\u{30E9}\u{30C3}\u{30AF}`,
    "blue": `\u{9752}`,
    "blue purple": `\u{30D6}\u{30EB}\u{30FC}\u{30D1}\u{30FC}\u{30D7}\u{30EB}`,
    "brightness": `\u{660E}\u{308B}\u{3055}`,
    "brown": `\u{30D6}\u{30E9}\u{30A6}\u{30F3}`,
    "brown yellow": `\u{30D6}\u{30E9}\u{30A6}\u{30F3}\u{30A4}\u{30A8}\u{30ED}\u{30FC}`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `\u{30B7}\u{30A2}\u{30F3}`,
    "cyan blue": `\u{30B7}\u{30A2}\u{30F3}\u{30D6}\u{30EB}\u{30FC}`,
    "dark": `\u{30C0}\u{30FC}\u{30AF}`,
    "gray": `\u{30B0}\u{30EC}\u{30FC}`,
    "grayish": `\u{30B0}\u{30EC}\u{30A4}\u{30C3}\u{30B7}\u{30E5}`,
    "green": `\u{7DD1}`,
    "green cyan": `\u{30B0}\u{30EA}\u{30FC}\u{30F3}\u{30B7}\u{30A2}\u{30F3}`,
    "hue": `\u{8272}\u{76F8}`,
    "light": `\u{30E9}\u{30A4}\u{30C8}`,
    "lightness": `\u{660E}\u{5EA6}`,
    "magenta": `\u{30DE}\u{30BC}\u{30F3}\u{30BF}`,
    "magenta pink": `\u{30DE}\u{30BC}\u{30F3}\u{30BF}\u{30D4}\u{30F3}\u{30AF}`,
    "orange": `\u{30AA}\u{30EC}\u{30F3}\u{30B8}`,
    "orange yellow": `\u{30AA}\u{30EC}\u{30F3}\u{30B8}\u{30A4}\u{30A8}\u{30ED}\u{30FC}`,
    "pale": `\u{30DA}\u{30FC}\u{30EB}`,
    "pink": `\u{30D4}\u{30F3}\u{30AF}`,
    "pink red": `\u{30D4}\u{30F3}\u{30AF}\u{30EC}\u{30C3}\u{30C9}`,
    "purple": `\u{30D1}\u{30FC}\u{30D7}\u{30EB}`,
    "purple magenta": `\u{30D1}\u{30FC}\u{30D7}\u{30EB}\u{30DE}\u{30BC}\u{30F3}\u{30BF}`,
    "red": `\u{8D64}`,
    "red orange": `\u{30EC}\u{30C3}\u{30C9}\u{30AA}\u{30EC}\u{30F3}\u{30B8}`,
    "saturation": `\u{5F69}\u{5EA6}`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} \u{900F}\u{660E}`,
    "very dark": `\u{6700}\u{3082}\u{6697}\u{3044}`,
    "very light": `\u{30D9}\u{30EA}\u{30FC}\u{30E9}\u{30A4}\u{30C8}`,
    "vibrant": `\u{9BAE}\u{3084}\u{304B}`,
    "white": `\u{30DB}\u{30EF}\u{30A4}\u{30C8}`,
    "yellow": `\u{30A4}\u{30A8}\u{30ED}\u{30FC}`,
    "yellow green": `\u{30A4}\u{30A8}\u{30ED}\u{30FC}\u{30B0}\u{30EA}\u{30FC}\u{30F3}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7ue0v":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `\u{C54C}\u{D30C}`,
    "black": `\u{AC80}\u{C740}\u{C0C9}`,
    "blue": `\u{D30C}\u{B791}`,
    "blue purple": `\u{CCAD}\u{C790}\u{C0C9}`,
    "brightness": `\u{BA85}\u{B3C4}`,
    "brown": `\u{AC08}\u{C0C9}`,
    "brown yellow": `\u{D669}\u{AC08}\u{C0C9}`,
    "colorName": (args)=>`${args.lightness}, ${args.chroma}, ${args.hue}`,
    "cyan": `\u{CCAD}\u{B85D}\u{C0C9}`,
    "cyan blue": `\u{CCAD}\u{B85D}\u{C0C9}`,
    "dark": `\u{B2E4}\u{D06C}`,
    "gray": `\u{D68C}\u{C0C9}`,
    "grayish": `\u{D68C}\u{AC08}\u{C0C9}`,
    "green": `\u{CD08}\u{B85D}`,
    "green cyan": `\u{CCAD}\u{B85D}\u{C0C9}`,
    "hue": `\u{C0C9}\u{C870}`,
    "light": `\u{B77C}\u{C774}\u{D2B8}`,
    "lightness": `\u{BC1D}\u{AE30}`,
    "magenta": `\u{C790}\u{D64D}\u{C0C9}`,
    "magenta pink": `\u{B9C8}\u{C820}\u{D0C0} \u{D551}\u{D06C}`,
    "orange": `\u{C8FC}\u{D669}\u{C0C9}`,
    "orange yellow": `\u{BD88}\u{ADF8}\u{C2A4}\u{B984}\u{D55C} \u{B178}\u{B791}`,
    "pale": `\u{D759}\u{C0C9}`,
    "pink": `\u{BD84}\u{D64D}\u{C0C9}`,
    "pink red": `\u{D551}\u{D06C} \u{B808}\u{B4DC}`,
    "purple": `\u{C790}\u{C8FC}\u{C0C9}`,
    "purple magenta": `\u{BCF4}\u{B77C}\u{BE5B} \u{C790}\u{D64D}\u{C0C9}`,
    "red": `\u{BE68}\u{AC15}`,
    "red orange": `\u{BD89}\u{C740} \u{C8FC}\u{D669}\u{C0C9}`,
    "saturation": `\u{CC44}\u{B3C4}`,
    "transparentColorName": (args)=>`${args.lightness}, ${args.chroma}, ${args.hue}, ${args.percentTransparent} \u{D22C}\u{BA85}\u{B3C4}`,
    "very dark": `\u{B9E4}\u{C6B0} \u{C5B4}\u{B450}\u{C6B4}`,
    "very light": `\u{B9E4}\u{C6B0} \u{C5F0}\u{D568}`,
    "vibrant": `\u{AC15}\u{B82C}\u{D55C}`,
    "white": `\u{D770}\u{C0C9}`,
    "yellow": `\u{B178}\u{B780}\u{C0C9}`,
    "yellow green": `\u{C5F0}\u{B450}\u{C0C9}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"khLr0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `juoda`,
    "blue": `M\u{117}lyna`,
    "blue purple": `melsvai violetin\u{117}`,
    "brightness": `Ry\u{161}kumas`,
    "brown": `ruda`,
    "brown yellow": `rusvai geltona`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `\u{17E}alsvai m\u{117}lyna`,
    "cyan blue": `\u{17E}alsvai m\u{117}lyna`,
    "dark": `tamsi`,
    "gray": `pilka`,
    "grayish": `pilk\u{161}va`,
    "green": `\u{17D}alia`,
    "green cyan": `\u{17E}alsvai m\u{117}lyna`,
    "hue": `Atspalvis`,
    "light": `\u{161}viesi`,
    "lightness": `\u{160}viesumas`,
    "magenta": `rausvai raudona`,
    "magenta pink": `purpurin\u{117}`,
    "orange": `oran\u{17E}in\u{117}`,
    "orange yellow": `oran\u{17E}inio atspalvio geltona`,
    "pale": `bly\u{161}ki`,
    "pink": `ro\u{17E}in\u{117}`,
    "pink red": `ro\u{17E}in\u{117} raudona`,
    "purple": `violetin\u{117}`,
    "purple magenta": `purpurin\u{117} rausvai raudona`,
    "red": `Raudona`,
    "red orange": `rausvai oran\u{17E}in\u{117}`,
    "saturation": `\u{12E}sotinimas`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} skaidri`,
    "very dark": `labai tamsi`,
    "very light": `labai \u{161}viesi`,
    "vibrant": `ry\u{161}ki`,
    "white": `balta`,
    "yellow": `geltona`,
    "yellow green": `gelsvai \u{17E}alia`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7t9Rp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `melns`,
    "blue": `Zila`,
    "blue purple": `zili violets`,
    "brightness": `Spilgtums`,
    "brown": `br\u{16B}ns`,
    "brown yellow": `br\u{16B}ni dzeltens`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `ci\u{101}ns`,
    "cyan blue": `ci\u{101}na zils`,
    "dark": `tum\u{161}s`,
    "gray": `pel\u{113}ks`,
    "grayish": `pel\u{113}c\u{12B}gs`,
    "green": `Za\u{13C}a`,
    "green cyan": `za\u{13C}\u{161} ci\u{101}ns`,
    "hue": `Nokr\u{101}sa`,
    "light": `gai\u{161}s`,
    "lightness": `Gai\u{161}ums`,
    "magenta": `fuksiju`,
    "magenta pink": `fuksiju roz\u{101}`,
    "orange": `oran\u{17E}s`,
    "orange yellow": `oran\u{17E}i dzeltens`,
    "pale": `b\u{101}ls`,
    "pink": `roz\u{101}`,
    "pink red": `roz\u{12B}gi sarkans`,
    "purple": `violets`,
    "purple magenta": `violets fuksiju`,
    "red": `Sarkana`,
    "red orange": `sarkan\u{12B}gi oran\u{17E}s`,
    "saturation": `Pies\u{101}tin\u{101}jums`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} caursp\u{12B}d\u{12B}gs`,
    "very dark": `\u{13C}oti tum\u{161}s`,
    "very light": `\u{13C}oti gai\u{161}s`,
    "vibrant": `ko\u{161}s`,
    "white": `balts`,
    "yellow": `dzeltens`,
    "yellow green": `dzelteni za\u{13C}\u{161}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"enj1s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `svart`,
    "blue": `Bl\xe5`,
    "blue purple": `bl\xe5lilla`,
    "brightness": `Lysstyrke`,
    "brown": `brun`,
    "brown yellow": `brungul`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `cyan`,
    "cyan blue": `cyanbl\xe5`,
    "dark": `m\xf8rk`,
    "gray": `gr\xe5`,
    "grayish": `gr\xe5aktig`,
    "green": `Gr\xf8nn`,
    "green cyan": `gr\xf8nncyan`,
    "hue": `Fargetone`,
    "light": `lys`,
    "lightness": `Lyshet`,
    "magenta": `magenta`,
    "magenta pink": `magentarosa`,
    "orange": `oransje`,
    "orange yellow": `oransjegul`,
    "pale": `blek`,
    "pink": `rosa`,
    "pink red": `rosar\xf8d`,
    "purple": `lilla`,
    "purple magenta": `lillamagenta`,
    "red": `R\xf8d`,
    "red orange": `r\xf8doransje`,
    "saturation": `Metning`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} gjennomsiktig`,
    "very dark": `sv\xe6rt m\xf8rk`,
    "very light": `sv\xe6rt lys`,
    "vibrant": `levende`,
    "white": `hvit`,
    "yellow": `gul`,
    "yellow green": `gulgr\xf8nn`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"13BHW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `zwart`,
    "blue": `Blauw`,
    "blue purple": `paarsblauw`,
    "brightness": `Helderheid`,
    "brown": `bruin`,
    "brown yellow": `bruingeel`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `cyaan`,
    "cyan blue": `cyaanblauw`,
    "dark": `donker`,
    "gray": `grijs`,
    "grayish": `grijsachtig`,
    "green": `Groen`,
    "green cyan": `cyaangroen`,
    "hue": `Kleurtoon`,
    "light": `licht`,
    "lightness": `Lichtsterkte`,
    "magenta": `magenta`,
    "magenta pink": `magentaroze`,
    "orange": `oranje`,
    "orange yellow": `oranjegeel`,
    "pale": `bleek`,
    "pink": `roze`,
    "pink red": `rozerood`,
    "purple": `paars`,
    "purple magenta": `magentapaars`,
    "red": `Rood`,
    "red orange": `roodoranje`,
    "saturation": `Verzadiging`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} transparant`,
    "very dark": `heel donker`,
    "very light": `heel licht`,
    "vibrant": `levendig`,
    "white": `wit`,
    "yellow": `geel`,
    "yellow green": `geelgroen`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7bkfs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `czarny`,
    "blue": `Niebieski`,
    "blue purple": `niebiesko-fioletowy`,
    "brightness": `Jasno\u{15B}\u{107}`,
    "brown": `br\u{105}zowy`,
    "brown yellow": `br\u{105}zowo-\u{17C}\xf3\u{142}ty`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `cyjanowy`,
    "cyan blue": `cyjanowo-niebieski`,
    "dark": `ciemny`,
    "gray": `szary`,
    "grayish": `szarawy`,
    "green": `Zielony`,
    "green cyan": `zielono-cyjanowy`,
    "hue": `Odcie\u{144}`,
    "light": `jasny`,
    "lightness": `Jaskrawo\u{15B}\u{107}`,
    "magenta": `purpurowy`,
    "magenta pink": `purpurowo-r\xf3\u{17C}owy`,
    "orange": `pomara\u{144}czowy`,
    "orange yellow": `pomara\u{144}czowo-\u{17C}\xf3\u{142}ty`,
    "pale": `blady`,
    "pink": `r\xf3\u{17C}owy`,
    "pink red": `r\xf3\u{17C}owo-czerwony`,
    "purple": `fioletowy`,
    "purple magenta": `fioletowo-purpurowy`,
    "red": `Czerwony`,
    "red orange": `czerwono-pomara\u{144}czowy`,
    "saturation": `Nasycenie`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} przezroczysto\u{15B}ci`,
    "very dark": `bardzo ciemny`,
    "very light": `bardzo jasny`,
    "vibrant": `intensywny`,
    "white": `bia\u{142}y`,
    "yellow": `\u{17C}\xf3\u{142}ty`,
    "yellow green": `\u{17C}\xf3\u{142}to-zielony`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"l7WVK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `preto`,
    "blue": `Azul`,
    "blue purple": `roxo azulado`,
    "brightness": `Brilho`,
    "brown": `marrom`,
    "brown yellow": `marrom amarelado`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `ciano`,
    "cyan blue": `azul-ciano`,
    "dark": `escuro`,
    "gray": `cinza`,
    "grayish": `acinzentado`,
    "green": `Verde`,
    "green cyan": `verde-ciano`,
    "hue": `Matiz`,
    "light": `claro`,
    "lightness": `Luminosidade`,
    "magenta": `magenta`,
    "magenta pink": `rosa-magenta`,
    "orange": `laranja`,
    "orange yellow": `amarelo alaranjado`,
    "pale": `p\xe1lido`,
    "pink": `rosa`,
    "pink red": `rosa avermelhado`,
    "purple": `roxo`,
    "purple magenta": `roxo-magenta`,
    "red": `Vermelho`,
    "red orange": `laranja avermelhado`,
    "saturation": `Satura\xe7\xe3o`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} transparente`,
    "very dark": `muito escuro`,
    "very light": `muito claro`,
    "vibrant": `vibrante`,
    "white": `branco`,
    "yellow": `amarelo`,
    "yellow green": `verde amarelado`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jCk0L":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `preto`,
    "blue": `Azul`,
    "blue purple": `azul-p\xfarpura`,
    "brightness": `Luminosidade`,
    "brown": `castanho`,
    "brown yellow": `amarelo-castanho`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `ciano`,
    "cyan blue": `azul-ciano`,
    "dark": `escuro`,
    "gray": `cinzento`,
    "grayish": `acinzentado`,
    "green": `Verde`,
    "green cyan": `verde-ciano`,
    "hue": `Tonalidade`,
    "light": `claro`,
    "lightness": `Claridade`,
    "magenta": `magenta`,
    "magenta pink": `rosa-magenta`,
    "orange": `laranja`,
    "orange yellow": `amarelo-laranja`,
    "pale": `p\xe1lido`,
    "pink": `cor-de-rosa`,
    "pink red": `vermelho-rosa`,
    "purple": `p\xfarpura`,
    "purple magenta": `p\xfarpura-magenta`,
    "red": `Vermelho`,
    "red orange": `laranja-vermelho`,
    "saturation": `Satura\xe7\xe3o`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} transparente`,
    "very dark": `muito escuro`,
    "very light": `muito claro`,
    "vibrant": `vibrante`,
    "white": `branco`,
    "yellow": `amarelo`,
    "yellow green": `verde-amarelo`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4vpPq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `negru`,
    "blue": `Albastru`,
    "blue purple": `albastru-violet`,
    "brightness": `Luminozitate`,
    "brown": `maro`,
    "brown yellow": `galben maro`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `bleu`,
    "cyan blue": `albastru-bleu`,
    "dark": `\xeenchis`,
    "gray": `gri`,
    "grayish": `cenu\u{219}iu`,
    "green": `Verde`,
    "green cyan": `verde bleu`,
    "hue": `Nuan\u{21B}\u{103}`,
    "light": `deschis`,
    "lightness": `Luminozitate`,
    "magenta": `fucsia`,
    "magenta pink": `roz-fucsia`,
    "orange": `portocaliu`,
    "orange yellow": `galben-portocaliu`,
    "pale": `pal`,
    "pink": `roz`,
    "pink red": `roz-ro\u{219}u`,
    "purple": `violet`,
    "purple magenta": `violet-fucsia`,
    "red": `Ro\u{219}u`,
    "red orange": `portocaliu-ro\u{219}u`,
    "saturation": `Satura\u{21B}ie`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} transparent`,
    "very dark": `foarte \xeenchis`,
    "very light": `foarte deschis`,
    "vibrant": `plin de via\u{21B}\u{103}`,
    "white": `alb`,
    "yellow": `galben`,
    "yellow green": `galben-verde`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eJAyu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `\u{410}\u{43B}\u{44C}\u{444}\u{430}`,
    "black": `\u{447}\u{435}\u{440}\u{43D}\u{44B}\u{439}`,
    "blue": `\u{421}\u{438}\u{43D}\u{438}\u{439}`,
    "blue purple": `\u{441}\u{438}\u{43D}\u{435}-\u{444}\u{438}\u{43E}\u{43B}\u{435}\u{442}\u{43E}\u{432}\u{44B}\u{439}`,
    "brightness": `\u{42F}\u{440}\u{43A}\u{43E}\u{441}\u{442}\u{44C}`,
    "brown": `\u{43A}\u{43E}\u{440}\u{438}\u{447}\u{43D}\u{435}\u{432}\u{44B}\u{439}`,
    "brown yellow": `\u{43A}\u{43E}\u{440}\u{438}\u{447}\u{43D}\u{435}\u{432}\u{43E}-\u{436}\u{435}\u{43B}\u{442}\u{44B}\u{439}`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `\u{433}\u{43E}\u{43B}\u{443}\u{431}\u{43E}\u{439}`,
    "cyan blue": `\u{446}\u{432}\u{435}\u{442} \u{43C}\u{43E}\u{440}\u{441}\u{43A}\u{43E}\u{439} \u{432}\u{43E}\u{43B}\u{43D}\u{44B}`,
    "dark": `\u{442}\u{435}\u{43C}\u{43D}\u{44B}\u{439}`,
    "gray": `\u{441}\u{435}\u{440}\u{44B}\u{439}`,
    "grayish": `\u{441}\u{435}\u{440}\u{43E}\u{432}\u{430}\u{442}\u{44B}\u{439}`,
    "green": `\u{417}\u{435}\u{43B}\u{435}\u{43D}\u{44B}\u{439}`,
    "green cyan": `\u{441}\u{438}\u{43D}\u{435}-\u{437}\u{435}\u{43B}\u{435}\u{43D}\u{44B}\u{439}`,
    "hue": `\u{41E}\u{442}\u{442}\u{435}\u{43D}\u{43E}\u{43A}`,
    "light": `\u{441}\u{432}\u{435}\u{442}\u{43B}\u{44B}\u{439}`,
    "lightness": `\u{41E}\u{441}\u{432}\u{435}\u{449}\u{435}\u{43D}\u{43D}\u{43E}\u{441}\u{442}\u{44C}`,
    "magenta": `\u{43F}\u{443}\u{440}\u{43F}\u{443}\u{440}\u{43D}\u{44B}\u{439}`,
    "magenta pink": `\u{43F}\u{443}\u{440}\u{43F}\u{443}\u{440}\u{43D}\u{43E}-\u{440}\u{43E}\u{437}\u{43E}\u{432}\u{44B}\u{439}`,
    "orange": `\u{43E}\u{440}\u{430}\u{43D}\u{436}\u{435}\u{432}\u{44B}\u{439}`,
    "orange yellow": `\u{43E}\u{440}\u{430}\u{43D}\u{436}\u{435}\u{432}\u{43E}-\u{436}\u{435}\u{43B}\u{442}\u{44B}\u{439}`,
    "pale": `\u{431}\u{43B}\u{435}\u{434}\u{43D}\u{44B}\u{439}`,
    "pink": `\u{440}\u{43E}\u{437}\u{43E}\u{432}\u{44B}\u{439}`,
    "pink red": `\u{440}\u{43E}\u{437}\u{43E}\u{432}\u{43E}-\u{43A}\u{440}\u{430}\u{441}\u{43D}\u{44B}\u{439}`,
    "purple": `\u{444}\u{438}\u{43E}\u{43B}\u{435}\u{442}\u{43E}\u{432}\u{44B}\u{439}`,
    "purple magenta": `\u{444}\u{438}\u{43E}\u{43B}\u{435}\u{442}\u{43E}\u{432}\u{43E}-\u{43F}\u{443}\u{440}\u{43F}\u{443}\u{440}\u{43D}\u{44B}\u{439}`,
    "red": `\u{41A}\u{440}\u{430}\u{441}\u{43D}\u{44B}\u{439}`,
    "red orange": `\u{43A}\u{440}\u{430}\u{441}\u{43D}\u{43E}-\u{43E}\u{440}\u{430}\u{43D}\u{436}\u{435}\u{432}\u{44B}\u{439}`,
    "saturation": `\u{41D}\u{430}\u{441}\u{44B}\u{449}\u{435}\u{43D}\u{43D}\u{43E}\u{441}\u{442}\u{44C}`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, \u{43F}\u{440}\u{43E}\u{437}\u{440}\u{430}\u{447}\u{43D}\u{44B}\u{439} \u{43D}\u{430} ${args.percentTransparent}`,
    "very dark": `\u{43E}\u{447}\u{435}\u{43D}\u{44C} \u{442}\u{435}\u{43C}\u{43D}\u{44B}\u{439}`,
    "very light": `\u{43E}\u{447}\u{435}\u{43D}\u{44C} \u{441}\u{432}\u{435}\u{442}\u{43B}\u{44B}\u{439}`,
    "vibrant": `\u{44F}\u{440}\u{43A}\u{438}\u{439}`,
    "white": `\u{431}\u{435}\u{43B}\u{44B}\u{439}`,
    "yellow": `\u{436}\u{435}\u{43B}\u{442}\u{44B}\u{439}`,
    "yellow green": `\u{436}\u{435}\u{43B}\u{442}\u{43E}-\u{437}\u{435}\u{43B}\u{435}\u{43D}\u{44B}\u{439}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ivLVR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `\u{10D}ierna`,
    "blue": `Modr\xe1`,
    "blue purple": `modrofialov\xe1`,
    "brightness": `Jas`,
    "brown": `hned\xe1`,
    "brown yellow": `hnedo\u{17E}lt\xe1`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `az\xfarov\xe1`,
    "cyan blue": `az\xfarov\xe1 modr\xe1`,
    "dark": `tmav\xe1`,
    "gray": `siv\xe1`,
    "grayish": `sivast\xe1`,
    "green": `Zelen\xe1`,
    "green cyan": `zelen\xe1 az\xfarov\xe1`,
    "hue": `Odtie\u{148}`,
    "light": `svetl\xe1`,
    "lightness": `Svetlos\u{165}`,
    "magenta": `purpurov\xe1`,
    "magenta pink": `ru\u{17E}ov\xe1 purpurov\xe1`,
    "orange": `oran\u{17E}ov\xe1`,
    "orange yellow": `oran\u{17E}ovo\u{17E}lt\xe1`,
    "pale": `bled\xe1`,
    "pink": `ru\u{17E}ov\xe1`,
    "pink red": `ru\u{17E}ovo\u{10D}erven\xe1`,
    "purple": `fialov\xe1`,
    "purple magenta": `fialov\xe1 purpurov\xe1`,
    "red": `\u{10C}erven\xe1`,
    "red orange": `\u{10D}ervenooran\u{17E}ov\xe1`,
    "saturation": `S\xfdtos\u{165}`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} prieh\u{13E}adn\xe1`,
    "very dark": `ve\u{13E}mi tmav\xe1`,
    "very light": `ve\u{13E}mi svetl\xe1`,
    "vibrant": `energick\xe1`,
    "white": `biela`,
    "yellow": `\u{17E}lt\xe1`,
    "yellow green": `\u{17E}ltozelen\xe1`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9Gm06":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `\u{10D}rna`,
    "blue": `Modra`,
    "blue purple": `modro vijoli\u{10D}na`,
    "brightness": `Svetlost`,
    "brown": `rjava`,
    "brown yellow": `rjavo rumena`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `cian`,
    "cyan blue": `cian modra`,
    "dark": `temna`,
    "gray": `siva`,
    "grayish": `sivkasta`,
    "green": `Zelena`,
    "green cyan": `zelena cian`,
    "hue": `Barva`,
    "light": `svetla`,
    "lightness": `Lahkost`,
    "magenta": `\u{161}krlatna`,
    "magenta pink": `\u{161}krlatno roza`,
    "orange": `oran\u{17E}na`,
    "orange yellow": `oran\u{17E}no rumena`,
    "pale": `bleda`,
    "pink": `roza`,
    "pink red": `roza rde\u{10D}a`,
    "purple": `vijoli\u{10D}na`,
    "purple magenta": `vijoli\u{10D}no \u{161}krlatna`,
    "red": `Rde\u{10D}a`,
    "red orange": `rde\u{10D}e oran\u{17E}na`,
    "saturation": `Nasi\u{10D}enost`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} prozorna`,
    "very dark": `zelo temna`,
    "very light": `zelo svetla`,
    "vibrant": `\u{17E}ivahna`,
    "white": `bela`,
    "yellow": `rumena`,
    "yellow green": `rumeno zelena`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bO41Y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `crno`,
    "blue": `Plava`,
    "blue purple": `plavoljubi\u{10D}asta`,
    "brightness": `Osvetljenost`,
    "brown": `sme\u{111}a`,
    "brown yellow": `sme\u{111}e\u{17E}uta`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `cijan`,
    "cyan blue": `cijan plava`,
    "dark": `tamno`,
    "gray": `siva`,
    "grayish": `sivkasta`,
    "green": `Zelena`,
    "green cyan": `zeleno cijan`,
    "hue": `Nijansa`,
    "light": `svetla`,
    "lightness": `Osvetljenje`,
    "magenta": `purpurnocrvena`,
    "magenta pink": `magenta ru\u{17E}i\u{10D}asta`,
    "orange": `narand\u{17E}asta`,
    "orange yellow": `narand\u{17E}asto\u{17E}uta`,
    "pale": `bledo`,
    "pink": `ru\u{17E}i\u{10D}asta`,
    "pink red": `ru\u{17E}i\u{10D}astocrvena`,
    "purple": `ljubi\u{10D}asta`,
    "purple magenta": `ljubi\u{10D}asta magenta`,
    "red": `Crvena`,
    "red orange": `crvenonarand\u{17E}asta`,
    "saturation": `Zasi\u{107}enje`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} prozirna`,
    "very dark": `veoma tamno`,
    "very light": `vrlo svetlo`,
    "vibrant": `\u{17E}ivopisna`,
    "white": `bela`,
    "yellow": `\u{17E}uto`,
    "yellow green": `\u{17E}utozelena`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8y7UK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `svart`,
    "blue": `Bl\xe5tt`,
    "blue purple": `bl\xe5lila`,
    "brightness": `Ljusstyrka`,
    "brown": `brun`,
    "brown yellow": `brungul`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `cyan`,
    "cyan blue": `cyanbl\xe5`,
    "dark": `m\xf6rk`,
    "gray": `gr\xe5`,
    "grayish": `gr\xe5aktig`,
    "green": `Gr\xf6nt`,
    "green cyan": `gr\xf6n cyan`,
    "hue": `Nyans`,
    "light": `ljus`,
    "lightness": `Ljushet`,
    "magenta": `magenta`,
    "magenta pink": `magentarosa`,
    "orange": `orange`,
    "orange yellow": `orangegul`,
    "pale": `blek`,
    "pink": `rosa`,
    "pink red": `rosar\xf6d`,
    "purple": `lila`,
    "purple magenta": `lila magenta`,
    "red": `R\xf6tt`,
    "red orange": `r\xf6dorange`,
    "saturation": `M\xe4ttnad`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} genomskinlig`,
    "very dark": `mycket m\xf6rk`,
    "very light": `mycket ljus`,
    "vibrant": `livfull`,
    "white": `vit`,
    "yellow": `gul`,
    "yellow green": `gulgr\xf6n`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ivnFm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alfa`,
    "black": `siyah`,
    "blue": `Mavi`,
    "blue purple": `mavi mor`,
    "brightness": `Parlakl\u{131}k`,
    "brown": `kahverengi`,
    "brown yellow": `kahverengi sar\u{131}`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `camg\xf6be\u{11F}i`,
    "cyan blue": `camg\xf6be\u{11F}i mavi`,
    "dark": `koyu`,
    "gray": `gri`,
    "grayish": `grimsi`,
    "green": `Ye\u{15F}il`,
    "green cyan": `ye\u{15F}il camg\xf6be\u{11F}i`,
    "hue": `Ton`,
    "light": `a\xe7\u{131}k`,
    "lightness": `Canl\u{131}l\u{131}k`,
    "magenta": `eflatun`,
    "magenta pink": `eflatun pembe`,
    "orange": `turuncu`,
    "orange yellow": `turuncu sar\u{131}`,
    "pale": `solgun`,
    "pink": `pembe`,
    "pink red": `pembe k\u{131}rm\u{131}z\u{131}`,
    "purple": `mor`,
    "purple magenta": `mor eflatun`,
    "red": `K\u{131}rm\u{131}z\u{131}`,
    "red orange": `k\u{131}rm\u{131}z\u{131} portakal`,
    "saturation": `Doygunluk`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} saydam`,
    "very dark": `\xe7ok koyu`,
    "very light": `\xe7ok a\xe7\u{131}k`,
    "vibrant": `canl\u{131}`,
    "white": `beyaz`,
    "yellow": `sar\u{131}`,
    "yellow green": `sar\u{131} ye\u{15F}il`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jSPiu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `\u{410}\u{43B}\u{44C}\u{444}\u{430}`,
    "black": `\u{447}\u{43E}\u{440}\u{43D}\u{438}\u{439}`,
    "blue": `\u{421}\u{438}\u{43D}\u{456}\u{439}`,
    "blue purple": `\u{441}\u{438}\u{43D}\u{44C}\u{43E}-\u{444}\u{456}\u{43E}\u{43B}\u{435}\u{442}\u{43E}\u{432}\u{438}\u{439}`,
    "brightness": `\u{42F}\u{441}\u{43A}\u{440}\u{430}\u{432}\u{456}\u{441}\u{442}\u{44C}`,
    "brown": `\u{43A}\u{43E}\u{440}\u{438}\u{447}\u{43D}\u{435}\u{432}\u{438}\u{439}`,
    "brown yellow": `\u{43A}\u{43E}\u{440}\u{438}\u{447}\u{43D}\u{435}\u{432}\u{43E}-\u{436}\u{43E}\u{432}\u{442}\u{438}\u{439}`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `\u{431}\u{43B}\u{430}\u{43A}\u{438}\u{442}\u{43D}\u{438}\u{439}`,
    "cyan blue": `\u{441}\u{438}\u{43D}\u{44C}\u{43E}-\u{431}\u{43B}\u{430}\u{43A}\u{438}\u{442}\u{43D}\u{438}\u{439}`,
    "dark": `\u{442}\u{435}\u{43C}\u{43D}\u{438}\u{439}`,
    "gray": `\u{441}\u{456}\u{440}\u{438}\u{439}`,
    "grayish": `\u{441}\u{456}\u{440}\u{443}\u{432}\u{430}\u{442}\u{438}\u{439}`,
    "green": `\u{417}\u{435}\u{43B}\u{435}\u{43D}\u{438}\u{439}`,
    "green cyan": `\u{437}\u{435}\u{43B}\u{435}\u{43D}\u{43E}-\u{431}\u{43B}\u{430}\u{43A}\u{438}\u{442}\u{43D}\u{438}\u{439}`,
    "hue": `\u{422}\u{43E}\u{43D}`,
    "light": `\u{441}\u{432}\u{456}\u{442}\u{43B}\u{438}\u{439}`,
    "lightness": `\u{41E}\u{441}\u{432}\u{456}\u{442}\u{43B}\u{435}\u{43D}\u{456}\u{441}\u{442}\u{44C}`,
    "magenta": `\u{43F}\u{443}\u{440}\u{43F}\u{443}\u{440}\u{43E}\u{432}\u{438}\u{439}`,
    "magenta pink": `\u{43F}\u{443}\u{440}\u{43F}\u{443}\u{440}\u{43E}\u{432}\u{43E}-\u{440}\u{43E}\u{436}\u{435}\u{432}\u{438}\u{439}`,
    "orange": `\u{43F}\u{43E}\u{43C}\u{430}\u{440}\u{430}\u{43D}\u{447}\u{435}\u{432}\u{438}\u{439}`,
    "orange yellow": `\u{43F}\u{43E}\u{43C}\u{430}\u{440}\u{430}\u{43D}\u{447}\u{435}\u{432}\u{43E}-\u{436}\u{43E}\u{432}\u{442}\u{438}\u{439}`,
    "pale": `\u{431}\u{43B}\u{456}\u{434}\u{438}\u{439}`,
    "pink": `\u{440}\u{43E}\u{436}\u{435}\u{432}\u{438}\u{439}`,
    "pink red": `\u{440}\u{43E}\u{436}\u{435}\u{432}\u{43E}-\u{447}\u{435}\u{440}\u{432}\u{43E}\u{43D}\u{438}\u{439}`,
    "purple": `\u{444}\u{456}\u{43E}\u{43B}\u{435}\u{442}\u{43E}\u{432}\u{438}\u{439}`,
    "purple magenta": `\u{444}\u{456}\u{43E}\u{43B}\u{435}\u{442}\u{43E}\u{432}\u{43E}-\u{43F}\u{443}\u{440}\u{43F}\u{443}\u{440}\u{43E}\u{432}\u{438}\u{439}`,
    "red": `\u{427}\u{435}\u{440}\u{432}\u{43E}\u{43D}\u{438}\u{439}`,
    "red orange": `\u{447}\u{435}\u{440}\u{432}\u{43E}\u{43D}\u{43E}-\u{43F}\u{43E}\u{43C}\u{430}\u{440}\u{430}\u{43D}\u{447}\u{435}\u{432}\u{438}\u{439}`,
    "saturation": `\u{41D}\u{430}\u{441}\u{438}\u{447}\u{435}\u{43D}\u{456}\u{441}\u{442}\u{44C}`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, \u{43F}\u{440}\u{43E}\u{437}\u{43E}\u{440}\u{438}\u{439} \u{43D}\u{430} ${args.percentTransparent}`,
    "very dark": `\u{434}\u{443}\u{436}\u{435} \u{442}\u{435}\u{43C}\u{43D}\u{438}\u{439}`,
    "very light": `\u{434}\u{443}\u{436}\u{435} \u{441}\u{432}\u{456}\u{442}\u{43B}\u{438}\u{439}`,
    "vibrant": `\u{44F}\u{441}\u{43A}\u{440}\u{430}\u{432}\u{438}\u{439}`,
    "white": `\u{431}\u{456}\u{43B}\u{438}\u{439}`,
    "yellow": `\u{436}\u{43E}\u{432}\u{442}\u{438}\u{439}`,
    "yellow green": `\u{436}\u{43E}\u{432}\u{442}\u{43E}-\u{437}\u{435}\u{43B}\u{435}\u{43D}\u{438}\u{439}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ivuKX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alpha`,
    "black": `\u{9ED1}\u{8272}`,
    "blue": `\u{84DD}\u{8272}`,
    "blue purple": `\u{84DD}\u{7D2B}\u{8272}`,
    "brightness": `\u{4EAE}\u{5EA6}`,
    "brown": `\u{68D5}\u{8272}\u{7684}`,
    "brown yellow": `\u{68D5}\u{9EC4}\u{8272}`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `\u{84DD}\u{7EFF}\u{8272}`,
    "cyan blue": `\u{9752}\u{84DD}\u{8272}`,
    "dark": `\u{6DF1}\u{8272}`,
    "gray": `\u{7070}\u{8272}`,
    "grayish": `\u{6D45}\u{7070}\u{8272}\u{7684}`,
    "green": `\u{7EFF}\u{8272}`,
    "green cyan": `\u{7EFF}\u{9752}\u{8272}`,
    "hue": `\u{8272}\u{76F8}`,
    "light": `\u{6D45}\u{8272}`,
    "lightness": `\u{660E}\u{4EAE}\u{5EA6}`,
    "magenta": `\u{7D2B}\u{7EA2}\u{8272}`,
    "magenta pink": `\u{7D2B}\u{7C89}\u{8272}`,
    "orange": `\u{6A59}\u{8272}`,
    "orange yellow": `\u{6A59}\u{9EC4}\u{8272}`,
    "pale": `\u{82CD}\u{767D}\u{7684}`,
    "pink": `\u{7C89}\u{8272}`,
    "pink red": `\u{7C89}\u{7EA2}\u{8272}`,
    "purple": `\u{7D2B}\u{8272}`,
    "purple magenta": `\u{7D2B}\u{6D0B}\u{7EA2}\u{8272}`,
    "red": `\u{7EA2}\u{8272}`,
    "red orange": `\u{7EA2}\u{6A59}\u{8272}`,
    "saturation": `\u{9971}\u{548C}\u{5EA6}`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} \u{900F}\u{660E}`,
    "very dark": `\u{5F88}\u{6697}`,
    "very light": `\u{5F88}\u{6D45}`,
    "vibrant": `\u{751F}\u{673A}\u{52C3}\u{52C3}`,
    "white": `\u{767D}\u{8272}`,
    "yellow": `\u{9EC4}\u{8272}`,
    "yellow green": `\u{9EC4}\u{8272}/\u{7EFF}\u{8272}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dxJE3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "alpha": `Alpha`,
    "black": `\u{9ED1}`,
    "blue": `\u{85CD}\u{8272}`,
    "blue purple": `\u{85CD}\u{7D2B}`,
    "brightness": `\u{4EAE}\u{5EA6}`,
    "brown": `\u{68D5}`,
    "brown yellow": `\u{68D5}\u{9EC3}`,
    "colorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}`,
    "cyan": `\u{9752}`,
    "cyan blue": `\u{9752}\u{85CD}`,
    "dark": `\u{6697}`,
    "gray": `\u{7070}`,
    "grayish": `\u{504F}\u{7070}`,
    "green": `\u{7DA0}\u{8272}`,
    "green cyan": `\u{9752}\u{7DA0}`,
    "hue": `\u{8272}\u{76F8}`,
    "light": `\u{6DFA}`,
    "lightness": `\u{660E}\u{4EAE}`,
    "magenta": `\u{6D0B}\u{7D05}`,
    "magenta pink": `\u{6DFA}\u{6D0B}\u{7D05}`,
    "orange": `\u{6A59}`,
    "orange yellow": `\u{6A59}\u{9EC3}`,
    "pale": `\u{6DE1}`,
    "pink": `\u{7C89}\u{7D05}`,
    "pink red": `\u{7C89}\u{7D05}`,
    "purple": `\u{7D2B}`,
    "purple magenta": `\u{7D2B}\u{6D0B}\u{7D05}`,
    "red": `\u{7D05}\u{8272}`,
    "red orange": `\u{6A59}\u{7D05}`,
    "saturation": `\u{98FD}\u{548C}\u{5EA6}`,
    "transparentColorName": (args)=>`${args.lightness} ${args.chroma} ${args.hue}, ${args.percentTransparent} \u{900F}\u{660E}`,
    "very dark": `\u{5F88}\u{6697}`,
    "very light": `\u{5F88}\u{6DFA}`,
    "vibrant": `\u{9BAE}\u{8C54}`,
    "white": `\u{767D}`,
    "yellow": `\u{9EC3}`,
    "yellow green": `\u{9EC3}\u{7DA0}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

