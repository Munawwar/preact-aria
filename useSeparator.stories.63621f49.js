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
})({"75uVy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Example1", ()=>(0, _useSeparator1TsxDefault.default));
var _useSeparator1Tsx = require("./useSeparator-1.tsx");
var _useSeparator1TsxDefault = parcelHelpers.interopDefault(_useSeparator1Tsx);
exports.default = {};

},{"./useSeparator-1.tsx":"dI0Xq","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dI0Xq":[function(require,module,exports,__globalThis) {
// Original example: packages/dev/s2-docs/pages/react-aria/Separator/useSeparator.mdx:24. Apache-2.0, Adobe and contributors.
// Adapted module paths and standalone renderer; upstream example body retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _separatorTsx = require("../../hooks/src/Separator.tsx");
"use client";
function ImportedExample(props) {
    return /*#__PURE__*/ (0, _reactDefault.default).cloneElement(/*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        style: {
            color: 'var(--text-color)'
        },
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    gap: 8
                },
                children: [
                    "Content above",
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _separatorTsx.Separator), {}),
                    "Content below"
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 16,
                    height: 40,
                    alignItems: 'center',
                    gap: 8
                },
                children: [
                    "Content left",
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _separatorTsx.Separator), {
                        orientation: "vertical"
                    }),
                    "Content right"
                ]
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

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../hooks/src/Separator.tsx":"bTKNX","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bTKNX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Separator", ()=>Separator);
var _jsxRuntime = require("preact/jsx-runtime");
var _useSeparatorTs = require("../../../../vendor/react-aria/exports/useSeparator.ts");
var _separatorCss = require("../../repository/starters/hooks/src/Separator.css");
'use client';
function Separator(props) {
    let { separatorProps } = (0, _useSeparatorTs.useSeparator)(props);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        ...separatorProps,
        className: "react-aria-Separator",
        "data-orientation": props.orientation || 'horizontal'
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../vendor/react-aria/exports/useSeparator.ts":"7SEKa","../../repository/starters/hooks/src/Separator.css":"30VMm","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7SEKa":[function(require,module,exports,__globalThis) {
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
 * Provides the accessibility implementation for a separator.
 * A separator is a visual divider between two groups of content,
 * e.g. groups of menu items or sections of a page.
 */ parcelHelpers.export(exports, "useSeparator", ()=>useSeparator);
var _filterDOMProps = require("../utils/filterDOMProps");
function useSeparator(props) {
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    let ariaOrientation;
    // if orientation is horizontal, aria-orientation default is horizontal, so we leave it undefined
    // if it's vertical, we need to specify it
    if (props.orientation === 'vertical') ariaOrientation = 'vertical';
    // hr elements implicitly have role = separator and a horizontal orientation
    if (props.elementType !== 'hr') return {
        separatorProps: {
            ...domProps,
            role: 'separator',
            'aria-orientation': ariaOrientation
        }
    };
    return {
        separatorProps: domProps
    };
}

},{"../utils/filterDOMProps":"h4XHF","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"30VMm":[function() {},{}]},[], null, "parcelRequire037a", {})

