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
})({"1YNNF":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
/*
 * Copyright 2024 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "ColorAreaExampleRender", ()=>ColorAreaExampleRender);
parcelHelpers.export(exports, "ColorAreaExample", ()=>ColorAreaExample);
parcelHelpers.export(exports, "ColorAreaHSL", ()=>ColorAreaHSL);
parcelHelpers.export(exports, "ColorAreaHSB", ()=>ColorAreaHSB);
var _jsxRuntime = require("preact/jsx-runtime");
var _colorAreaTsx = require("../../../../../../vendor/react-aria-components/src/ColorArea.tsx");
var _colorSliderStoriesTsx = require("./ColorSlider.stories.tsx");
var _colorThumbTsx = require("../../../../../../vendor/react-aria-components/src/ColorThumb.tsx");
var _colorTs = require("../../../../../../vendor/react-stately/exports/Color.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _stylesCss = require("./styles.css");
exports.default = {
    title: 'React Aria Components/ColorArea',
    decorators: [
        (Story, ctx)=>{
            let args = ctx.args;
            let [color, setColor] = (0, _react.useState)((0, _colorTs.parseColor)(args.defaultValue?.toString() ?? ''));
            let zChannel = color.getColorChannels().find((c)=>c !== args.xChannel && c !== args.yChannel);
            return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8
                },
                children: [
                    Story({
                        ...ctx,
                        args: {
                            ...ctx.args,
                            value: color,
                            onChange: setColor
                        }
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorSliderStoriesTsx.ColorSliderExampleRender), {
                        channel: zChannel,
                        value: color,
                        onChange: setColor
                    })
                ]
            });
        }
    ],
    component: (0, _colorAreaTsx.ColorArea),
    excludeStories: [
        'ColorAreaExampleRender'
    ]
};
const SIZE = 192;
const FOCUSED_THUMB_SIZE = 28;
const THUMB_SIZE = 20;
const BORDER_RADIUS = 4;
const ColorAreaExampleRender = (props)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorAreaTsx.ColorArea), {
        ...props,
        style: ({ isDisabled })=>({
                width: SIZE,
                height: SIZE,
                borderRadius: BORDER_RADIUS,
                opacity: isDisabled ? 0.3 : undefined
            }),
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorThumbTsx.ColorThumb), {
            style: ({ color, isDisabled, isFocusVisible })=>({
                    background: isDisabled ? 'rgb(142, 142, 142)' : color.toString(),
                    border: `2px solid ${isDisabled ? 'rgb(142, 142, 142)' : 'white'}`,
                    borderRadius: '50%',
                    boxShadow: '0 0 0 1px black, inset 0 0 0 1px black',
                    boxSizing: 'border-box',
                    height: isFocusVisible ? FOCUSED_THUMB_SIZE + 4 : THUMB_SIZE,
                    transform: 'translate(-50%, -50%)',
                    width: isFocusVisible ? FOCUSED_THUMB_SIZE + 4 : THUMB_SIZE
                })
        })
    });
const ColorAreaExample = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(ColorAreaExampleRender, {
            ...args
        }),
    args: {
        defaultValue: 'rgb(100, 149, 237)',
        xChannel: 'red',
        yChannel: 'green'
    },
    argTypes: {
        xChannel: {
            control: 'select',
            options: [
                'red',
                'green',
                'blue'
            ]
        },
        yChannel: {
            control: 'select',
            options: [
                'red',
                'green',
                'blue'
            ]
        }
    }
};
const ColorAreaHSL = {
    render: ColorAreaExample.render,
    args: {
        defaultValue: 'hsl(219, 79%, 66%)',
        xChannel: 'hue',
        yChannel: 'saturation'
    },
    argTypes: {
        xChannel: {
            control: 'select',
            options: [
                'hue',
                'saturation',
                'lightness'
            ]
        },
        yChannel: {
            control: 'select',
            options: [
                'hue',
                'saturation',
                'lightness'
            ]
        }
    }
};
const ColorAreaHSB = {
    render: ColorAreaExample.render,
    args: {
        defaultValue: 'hsb(219, 79%, 66%)',
        xChannel: 'hue',
        yChannel: 'saturation'
    },
    argTypes: {
        xChannel: {
            control: 'select',
            options: [
                'hue',
                'saturation',
                'brightness'
            ]
        },
        yChannel: {
            control: 'select',
            options: [
                'hue',
                'saturation',
                'brightness'
            ]
        }
    }
};

},{"preact/jsx-runtime":"b2Fbn","../../../../../../vendor/react-aria-components/src/ColorArea.tsx":"aQZwA","./ColorSlider.stories.tsx":"bd4Sk","../../../../../../vendor/react-aria-components/src/ColorThumb.tsx":"bmqua","../../../../../../vendor/react-stately/exports/Color.ts":"6ElIb","react":"gOP0N","./styles.css":"9cXWn","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aQZwA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorAreaContext", ()=>ColorAreaContext);
parcelHelpers.export(exports, "ColorAreaStateContext", ()=>ColorAreaStateContext);
parcelHelpers.export(exports, "ColorArea", ()=>ColorArea);
var _jsxRuntime = require("preact/jsx-runtime");
var _useColorArea = require("react-aria/useColorArea");
var _utils = require("./utils");
var _useColorAreaState = require("react-stately/useColorAreaState");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _colorThumb = require("./ColorThumb");
var _mergeProps = require("react-aria/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const ColorAreaContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ColorAreaStateContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ColorArea = /*#__PURE__*/ (0, _react.forwardRef)(function ColorArea(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, ColorAreaContext);
    let inputXRef = (0, _react.useRef)(null);
    let inputYRef = (0, _react.useRef)(null);
    let state = (0, _useColorAreaState.useColorAreaState)(props);
    let { colorAreaProps, xInputProps, yInputProps, thumbProps } = (0, _useColorArea.useColorArea)({
        ...props,
        inputXRef,
        inputYRef,
        containerRef: ref
    }, state);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-ColorArea',
        defaultStyle: colorAreaProps.style,
        values: {
            state,
            isDisabled: props.isDisabled || false
        }
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ref: ref,
        ...(0, _mergeProps.mergeProps)(DOMProps, colorAreaProps, renderProps),
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
            values: [
                [
                    ColorAreaStateContext,
                    state
                ],
                [
                    (0, _colorThumb.InternalColorThumbContext),
                    {
                        state,
                        thumbProps,
                        inputXRef,
                        xInputProps,
                        inputYRef,
                        yInputProps,
                        isDisabled: props.isDisabled
                    }
                ]
            ],
            children: renderProps.children
        })
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/useColorArea":"40B5D","./utils":"jtWJJ","react-stately/useColorAreaState":"5kpo9","react-aria/filterDOMProps":"h4XHF","./ColorThumb":"bmqua","react-aria/mergeProps":"jycxS","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8lll3":[function(require,module,exports,__globalThis) {
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
/**
 * Returns a cached LocalizedStringDictionary for the given strings.
 */ parcelHelpers.export(exports, "useLocalizedStringDictionary", ()=>useLocalizedStringDictionary);
/**
 * Provides localized string formatting for the current locale. Supports interpolating variables,
 * selecting the correct pluralization, and formatting numbers. Automatically updates when the
 * locale changes.
 *
 * @param strings - A mapping of languages to localized strings by key.
 */ parcelHelpers.export(exports, "useLocalizedStringFormatter", ()=>useLocalizedStringFormatter);
var _string = require("@internationalized/string");
var _i18Nprovider = require("./I18nProvider");
var _react = require("react");
const cache = new WeakMap();
function getCachedDictionary(strings) {
    let dictionary = cache.get(strings);
    if (!dictionary) {
        dictionary = new (0, _string.LocalizedStringDictionary)(strings);
        cache.set(strings, dictionary);
    }
    return dictionary;
}
function useLocalizedStringDictionary(strings, packageName) {
    return packageName && (0, _string.LocalizedStringDictionary).getGlobalDictionaryForPackage(packageName) || getCachedDictionary(strings);
}
function useLocalizedStringFormatter(strings, packageName) {
    let { locale } = (0, _i18Nprovider.useLocale)();
    let dictionary = useLocalizedStringDictionary(strings, packageName);
    return (0, _react.useMemo)(()=>new (0, _string.LocalizedStringFormatter)(locale, dictionary), [
        locale,
        dictionary
    ]);
}

},{"@internationalized/string":[["LocalizedStringDictionary","3Dyf5"],["LocalizedStringFormatter","Pfhr4"]],"./I18nProvider":"czGuc","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

