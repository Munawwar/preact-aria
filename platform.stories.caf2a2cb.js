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
})({"7jkpJ":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Default", ()=>Default);
var _jsxRuntime = require("preact/jsx-runtime");
var _platformTs = require("../../../../../../../vendor/react-aria/src/utils/platform.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
exports.default = {
    title: 'platform'
};
const Template = (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("table", {
        ...args,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("tr", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("th", {
                        children: "Platform"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("th", {
                        children: "Current"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("tr", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: "isAndroid: "
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: (0, _platformTs.isAndroid)().toString()
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("tr", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: "isAppleDevice: "
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: (0, _platformTs.isAppleDevice)().toString()
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("tr", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: "isChrome: "
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: (0, _platformTs.isChrome)().toString()
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("tr", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: "isIOS: "
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: (0, _platformTs.isIOS)().toString()
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("tr", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: "isIPad: "
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: (0, _platformTs.isIPad)().toString()
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("tr", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: "isIPhone: "
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: (0, _platformTs.isIPhone)().toString()
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("tr", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: "isMac: "
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: (0, _platformTs.isMac)().toString()
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("tr", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: "isWebKit: "
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: (0, _platformTs.isWebKit)().toString()
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("tr", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: "isSafari: "
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: (0, _platformTs.isSafari)().toString()
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("tr", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: "isFirefox: "
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("td", {
                        children: (0, _platformTs.isFirefox)().toString()
                    })
                ]
            })
        ]
    });
const Default = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(Template, {
            ...args
        }),
    name: 'all platforms',
    args: {}
};

},{"preact/jsx-runtime":"b2Fbn","../../../../../../../vendor/react-aria/src/utils/platform.ts":"eBqgD","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

