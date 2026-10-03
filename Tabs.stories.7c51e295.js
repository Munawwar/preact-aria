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
})({"7NPUg":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "default", ()=>Home);
var _jsxRuntime = require("preact/jsx-runtime");
var _s2FillHomeGeneric2160Svg = require("illustration:./S2_fill_home_generic2_160.svg");
var _s2FillHomeGeneric2160SvgDefault = parcelHelpers.interopDefault(_s2FillHomeGeneric2160Svg);
var _s2FillHomeGeneric296Svg = require("illustration:./S2_fill_home_generic2_96.svg");
var _s2FillHomeGeneric296SvgDefault = parcelHelpers.interopDefault(_s2FillHomeGeneric296Svg);
var _s2FillHomeGeneric248Svg = require("illustration:./S2_fill_home_generic2_48.svg");
var _s2FillHomeGeneric248SvgDefault = parcelHelpers.interopDefault(_s2FillHomeGeneric248Svg);
var _iconTsx = require("../../../src/Icon.tsx");
var _slotsTs = require("../../../../../../../../../vendor/react-aria-components/exports/slots.ts");
'use client';
function Home(props) {
    [props] = (0, _slotsTs.useContextProps)(props, null, (0, _iconTsx.IllustrationContext));
    let { size = 'M', ...otherProps } = props;
    switch(size){
        case 'L':
            return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _s2FillHomeGeneric2160SvgDefault.default), {
                ...otherProps
            });
        case 'S':
            return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _s2FillHomeGeneric248SvgDefault.default), {
                ...otherProps
            });
        case 'M':
            return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _s2FillHomeGeneric296SvgDefault.default), {
                ...otherProps
            });
    }
}

},{"preact/jsx-runtime":"b2Fbn","illustration:./S2_fill_home_generic2_160.svg":"fYhit","illustration:./S2_fill_home_generic2_96.svg":"4hThB","illustration:./S2_fill_home_generic2_48.svg":"j7Bn3","../../../src/Icon.tsx":"1GyPb","../../../../../../../../../vendor/react-aria-components/exports/slots.ts":"jtWJJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fYhit":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("preact/jsx-runtime");
var _icon = require("~/src/Icon");
var _react = require("react");
"use client";
const SvgComponent = (props, ref)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 160,
        height: 160,
        viewBox: "0 0 160 160",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "bc2527__d",
                        x1: 115.768,
                        x2: 23.108,
                        y1: -5.145,
                        y2: 114.991,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                stopColor: "#FF4885"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#FF4885",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "bc2527__e",
                        x1: 59.314,
                        x2: 77.188,
                        y1: -60.452,
                        y2: 53.946,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.156,
                                stopColor: "#7A6AFD"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#7A6AFD",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "bc2527__f",
                        x1: -146.934,
                        x2: 153.819,
                        y1: 169.541,
                        y2: 110.102,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                stopColor: "#30A7FE",
                                stopOpacity: 0
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.432,
                                stopColor: "#30A7FE",
                                stopOpacity: 0.995
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.609,
                                stopColor: "#30A7FE"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#30A7FE",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("radialGradient", {
                        id: "bc2527__c",
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: "rotate(90 18.716 123.904)scale(231.011)",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.089,
                                stopColor: "#EB1000"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#EB1000",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("clipPath", {
                        id: "bc2527__b",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                            width: 160,
                            height: 160,
                            fill: "#fff",
                            rx: 10
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("clipPath", {
                id: "bc2527__a",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                    fill: "#292929",
                    fillRule: "evenodd",
                    d: "M28.238 65.224v50.502c0 8.836 7.164 16 16 16h71.523c8.837 0 16-7.164 16-16V65.224c0-4.86-2.209-9.457-6.005-12.494L89.995 24.121c-5.844-4.674-14.147-4.674-19.99 0l-35.762 28.61c-3.795 3.036-6.005 7.633-6.005 12.493m46.508 18.19c-6.627 0-12 5.373-12 12v36.311h34.508v-36.31c0-6.628-5.373-12-12-12z"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("g", {
                clipPath: "url(#bc2527__a)",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("g", {
                    clipPath: "url(#bc2527__b)",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                            width: 160,
                            height: 160,
                            fill: "#D9F4FD",
                            rx: 10
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("circle", {
                            cx: 142.62,
                            cy: 105.187,
                            r: 231.011,
                            fill: "url(#bc2527__c)"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#bc2527__d)",
                            d: "M-14.4 50.114C-16.968-5.19 25.782-52.103 81.085-54.671S183.302-14.489 185.87 40.814 145.688 143.031 90.385 145.6-11.832 105.417-14.4 50.114"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#bc2527__e)",
                            d: "M40.418-110.716c-12.475-7.72-28.282-7.767-40.804-.122l-125.242 76.469c-12.266 7.49-12.286 25.167-.037 32.684L-1.25 74.676c12.503 7.673 28.31 7.664 40.802-.027L163.71-1.783c12.185-7.502 12.207-25.08.038-32.61z"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#bc2527__f)",
                            d: "M-79.763 76.529c25.814 0 49.197 10.448 66.127 27.302 33.86 33.768 61.931 33.797 95.79.087C99.084 86.977 122.497 76.5 148.34 76.5c51.657.029 93.504 41.762 93.504 93.279S199.997 263 148.34 263c-25.901 0-49.314-10.505-66.243-27.447-33.83-33.652-61.873-33.623-95.733.144C-30.566 252.581-53.949 263-79.763 263c-51.629 0-93.475-41.733-93.475-93.221s41.846-93.25 93.475-93.25"
                        })
                    ]
                })
            })
        ]
    });
const ForwardRef = /*#__PURE__*/ (0, _react.forwardRef)(SvgComponent);
exports.default = /*#__PURE__*/ (0, _icon.createIllustration)(ForwardRef);

},{"preact/jsx-runtime":"b2Fbn","~/src/Icon":"1GyPb","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4hThB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("preact/jsx-runtime");
var _icon = require("~/src/Icon");
var _react = require("react");
"use client";
const SvgComponent = (props, ref)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 96,
        height: 96,
        viewBox: "0 0 96 96",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "7df936__d",
                        x1: 69.462,
                        x2: 13.866,
                        y1: -3.088,
                        y2: 68.993,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                stopColor: "#FF4885"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#FF4885",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "7df936__e",
                        x1: 35.59,
                        x2: 46.315,
                        y1: -36.272,
                        y2: 32.367,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.156,
                                stopColor: "#7A6AFD"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#7A6AFD",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "7df936__f",
                        x1: -88.161,
                        x2: 92.291,
                        y1: 101.725,
                        y2: 66.061,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                stopColor: "#30A7FE",
                                stopOpacity: 0
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.432,
                                stopColor: "#30A7FE",
                                stopOpacity: 0.995
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.609,
                                stopColor: "#30A7FE"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#30A7FE",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("radialGradient", {
                        id: "7df936__c",
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: "rotate(90 11.23 74.342)scale(138.607)",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.089,
                                stopColor: "#EB1000"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#EB1000",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("clipPath", {
                        id: "7df936__b",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                            width: 96,
                            height: 96,
                            fill: "#fff",
                            rx: 10
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("clipPath", {
                id: "7df936__a",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                    fill: "#292929",
                    d: "M75.066 33.326C76.923 34.846 78 37.118 78 39.518v30.481c0 4.419-3.582 8-8 8H58V56c0-3.314-2.686-6-6-6h-8c-3.314 0-6 2.686-6 6v22H26c-4.418 0-8-3.582-8-8V39.517c0-2.4 1.077-4.673 2.934-6.192l22-18c2.947-2.411 7.185-2.411 10.132 0z"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("g", {
                clipPath: "url(#7df936__a)",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("g", {
                    clipPath: "url(#7df936__b)",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                            width: 96,
                            height: 96,
                            fill: "#D9F4FD",
                            rx: 10
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("circle", {
                            cx: 85.571,
                            cy: 63.112,
                            r: 138.607,
                            fill: "url(#7df936__c)"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#7df936__d)",
                            d: "M-8.64 30.067c-1.54-33.182 24.11-61.33 57.292-62.87 33.182-1.541 61.33 24.109 62.871 57.29 1.54 33.182-24.11 61.33-57.291 62.871-33.182 1.54-61.33-24.11-62.871-57.291"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#7df936__e)",
                            d: "M24.253-66.43c-7.486-4.632-16.97-4.66-24.483-.073l-75.145 45.881c-7.36 4.494-7.372 15.1-.023 19.61l74.65 45.817c7.501 4.604 16.985 4.598 24.48-.016l74.496-45.86c7.31-4.5 7.324-15.048.022-19.566z"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#7df936__f)",
                            d: "M-47.859 45.918c15.489 0 29.519 6.268 39.677 16.381 20.315 20.26 37.158 20.278 57.474.052 10.158-10.165 24.205-16.45 39.711-16.45 30.994.017 56.102 25.056 56.102 55.967S119.997 157.8 89.003 157.8c-15.54 0-29.588-6.303-39.746-16.468-20.298-20.191-37.124-20.174-57.44.087C-18.34 151.549-32.37 157.8-47.858 157.8c-30.977 0-56.085-25.039-56.085-55.932s25.108-55.95 56.085-55.95"
                        })
                    ]
                })
            })
        ]
    });
const ForwardRef = /*#__PURE__*/ (0, _react.forwardRef)(SvgComponent);
exports.default = /*#__PURE__*/ (0, _icon.createIllustration)(ForwardRef);

},{"preact/jsx-runtime":"b2Fbn","~/src/Icon":"1GyPb","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j7Bn3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("preact/jsx-runtime");
var _icon = require("~/src/Icon");
var _react = require("react");
"use client";
const SvgComponent = (props, ref)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "769039__d",
                        x1: 34.731,
                        x2: 6.933,
                        y1: -1.543,
                        y2: 34.498,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                stopColor: "#FF4885"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#FF4885",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "769039__e",
                        x1: 17.793,
                        x2: 23.155,
                        y1: -18.135,
                        y2: 16.184,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.156,
                                stopColor: "#7A6AFD"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#7A6AFD",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "769039__f",
                        x1: -44.078,
                        x2: 46.147,
                        y1: 50.862,
                        y2: 33.03,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                stopColor: "#30A7FE",
                                stopOpacity: 0
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.432,
                                stopColor: "#30A7FE",
                                stopOpacity: 0.995
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.609,
                                stopColor: "#30A7FE"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#30A7FE",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("radialGradient", {
                        id: "769039__c",
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: "rotate(90 5.616 37.171)scale(69.3033)",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.089,
                                stopColor: "#EB1000"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#EB1000",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("clipPath", {
                        id: "769039__b",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                            width: 48,
                            height: 48,
                            fill: "#fff",
                            rx: 10
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("clipPath", {
                id: "769039__a",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                    fill: "#292929",
                    d: "M9 18.923v15.578c0 2.209 1.79 4 4 4h6v-12c0-1.105.895-2 2-2h6c1.105 0 2 .895 2 2v12h6c2.21 0 4-1.791 4-4V18.923c0-1.215-.552-2.364-1.501-3.123l-11-8.8c-1.461-1.17-3.537-1.17-4.998 0l-11 8.8C9.552 16.559 9 17.708 9 18.923"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("g", {
                clipPath: "url(#769039__a)",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("g", {
                    clipPath: "url(#769039__b)",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                            width: 48,
                            height: 48,
                            fill: "#D9F4FD",
                            rx: 10
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("circle", {
                            cx: 42.788,
                            cy: 31.555,
                            r: 69.303,
                            fill: "url(#769039__c)"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#769039__d)",
                            d: "M-4.32 15.035C-5.09-1.557 7.735-15.63 24.326-16.401c16.59-.77 30.665 12.055 31.435 28.646.77 16.59-12.054 30.665-28.645 31.435S-3.55 31.625-4.32 15.035"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#769039__e)",
                            d: "M12.124-33.214c-3.742-2.316-8.484-2.33-12.24-.037L-37.69-10.31c-3.68 2.247-3.686 7.55-.01 9.805L-.377 22.404c3.75 2.301 8.493 2.299 12.24-.009L49.112-.535c3.655-2.25 3.662-7.523.011-9.782z"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#769039__f)",
                            d: "M-23.927 22.958c7.744 0 14.759 3.134 19.838 8.19 10.158 10.13 18.58 10.14 28.737.027 5.079-5.083 12.103-8.226 19.855-8.226 15.498.009 28.052 12.529 28.052 27.984S60 78.899 44.503 78.899c-7.77 0-14.794-3.151-19.872-8.234-10.15-10.095-18.562-10.087-28.72.043-5.08 5.066-12.094 8.191-19.838 8.191-15.489 0-28.043-12.52-28.043-27.966s12.554-27.975 28.043-27.975"
                        })
                    ]
                })
            })
        ]
    });
const ForwardRef = /*#__PURE__*/ (0, _react.forwardRef)(SvgComponent);
exports.default = /*#__PURE__*/ (0, _icon.createIllustration)(ForwardRef);

},{"preact/jsx-runtime":"b2Fbn","~/src/Icon":"1GyPb","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h499j":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "default", ()=>FolderOpen);
var _jsxRuntime = require("preact/jsx-runtime");
var _s2FillFolderOpenGeneric2160Svg = require("illustration:./S2_fill_folderOpen_generic2_160.svg");
var _s2FillFolderOpenGeneric2160SvgDefault = parcelHelpers.interopDefault(_s2FillFolderOpenGeneric2160Svg);
var _s2FillFolderOpenGeneric296Svg = require("illustration:./S2_fill_folderOpen_generic2_96.svg");
var _s2FillFolderOpenGeneric296SvgDefault = parcelHelpers.interopDefault(_s2FillFolderOpenGeneric296Svg);
var _s2FillFolderOpenGeneric248Svg = require("illustration:./S2_fill_folderOpen_generic2_48.svg");
var _s2FillFolderOpenGeneric248SvgDefault = parcelHelpers.interopDefault(_s2FillFolderOpenGeneric248Svg);
var _iconTsx = require("../../../src/Icon.tsx");
var _slotsTs = require("../../../../../../../../../vendor/react-aria-components/exports/slots.ts");
'use client';
function FolderOpen(props) {
    [props] = (0, _slotsTs.useContextProps)(props, null, (0, _iconTsx.IllustrationContext));
    let { size = 'M', ...otherProps } = props;
    switch(size){
        case 'L':
            return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _s2FillFolderOpenGeneric2160SvgDefault.default), {
                ...otherProps
            });
        case 'S':
            return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _s2FillFolderOpenGeneric248SvgDefault.default), {
                ...otherProps
            });
        case 'M':
            return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _s2FillFolderOpenGeneric296SvgDefault.default), {
                ...otherProps
            });
    }
}

},{"preact/jsx-runtime":"b2Fbn","illustration:./S2_fill_folderOpen_generic2_160.svg":"4LKgz","illustration:./S2_fill_folderOpen_generic2_96.svg":"kKRSa","illustration:./S2_fill_folderOpen_generic2_48.svg":"cNO5p","../../../src/Icon.tsx":"1GyPb","../../../../../../../../../vendor/react-aria-components/exports/slots.ts":"jtWJJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4LKgz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("preact/jsx-runtime");
var _icon = require("~/src/Icon");
var _react = require("react");
"use client";
const SvgComponent = (props, ref)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 160,
        height: 160,
        viewBox: "0 0 160 160",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "f1c383__d",
                        x1: 112.744,
                        x2: 26.324,
                        y1: -4.798,
                        y2: 107.247,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                stopColor: "#FF4885"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#FF4885",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "f1c383__e",
                        x1: 60.094,
                        x2: 76.764,
                        y1: -56.38,
                        y2: 50.314,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.156,
                                stopColor: "#7A6AFD"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#7A6AFD",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "f1c383__f",
                        x1: -132.263,
                        x2: 148.236,
                        y1: 158.123,
                        y2: 102.687,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                stopColor: "#30A7FE",
                                stopOpacity: 0
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.432,
                                stopColor: "#30A7FE",
                                stopOpacity: 0.995
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.609,
                                stopColor: "#30A7FE"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#30A7FE",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("radialGradient", {
                        id: "f1c383__c",
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: "rotate(90 19.843 117.946)scale(215.453)",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.089,
                                stopColor: "#EB1000"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#EB1000",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("clipPath", {
                        id: "f1c383__b",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                            width: 149.225,
                            height: 149.225,
                            x: 4.773,
                            fill: "#fff",
                            rx: 10
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("clipPath", {
                id: "f1c383__a",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M129.5 68v-4.364c0-7.38-5.992-13.363-13.385-13.363H69.269l-15.167-18.93C52.41 29.23 49.845 28 47.135 28H22.423c-4.928 0-8.923 3.989-8.923 8.91v81.726c0 1.264.176 2.487.504 3.646.1-1.703.47-3.442 1.147-5.174l.055-.138 15.788-38.276C33.586 72.16 39.949 68 46.876 68zm-98.435 64h98.059q.357 0 .71-.027c3.466-.265 6.498-2.453 7.752-5.66l15.811-38.333c2.119-5.42-1.597-11.207-7.297-11.909q-.57-.07-1.165-.071H46.876c-3.758 0-7.125 2.263-8.463 5.687L22.602 120.02c-2.26 5.782 2.118 11.98 8.462 11.98"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("g", {
                clipPath: "url(#f1c383__a)",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("g", {
                    clipPath: "url(#f1c383__b)",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                            width: 149.225,
                            height: 149.225,
                            x: 4.773,
                            fill: "#D9F4FD",
                            rx: 10
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("circle", {
                            cx: 137.789,
                            cy: 98.104,
                            r: 215.453,
                            fill: "url(#f1c383__c)"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#f1c383__d)",
                            d: "M-8.658 46.739C-11.053-4.84 28.818-48.594 80.397-50.99c51.578-2.395 95.332 37.476 97.727 89.055 2.395 51.578-37.476 95.333-89.054 97.728S-6.263 98.317-8.658 46.739"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#f1c383__e)",
                            d: "M42.47-103.259c-11.634-7.2-26.377-7.244-38.055-.113l-116.808 71.319c-11.44 6.985-11.459 23.472-.035 30.483L3.608 69.648c11.662 7.156 26.404 7.148 38.055-.025L157.46-1.662c11.363-6.996 11.384-23.391.034-30.414z"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#f1c383__f)",
                            d: "M-69.616 71.375c24.076 0 45.884 9.744 61.674 25.463 31.58 31.494 57.76 31.521 89.34.081 15.789-15.8 37.624-25.571 61.727-25.571 48.178.027 87.207 38.949 87.207 86.997 0 48.047-39.029 86.943-87.207 86.943-24.157 0-45.992-9.798-61.782-25.599-31.552-31.385-57.706-31.359-89.285.135-15.79 15.746-37.598 25.464-61.674 25.464-48.151 0-87.18-38.923-87.18-86.943 0-48.021 39.029-86.97 87.18-86.97"
                        })
                    ]
                })
            })
        ]
    });
const ForwardRef = /*#__PURE__*/ (0, _react.forwardRef)(SvgComponent);
exports.default = /*#__PURE__*/ (0, _icon.createIllustration)(ForwardRef);

},{"preact/jsx-runtime":"b2Fbn","~/src/Icon":"1GyPb","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kKRSa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("preact/jsx-runtime");
var _icon = require("~/src/Icon");
var _react = require("react");
"use client";
const SvgComponent = (props, ref)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 96,
        height: 96,
        viewBox: "0 0 96 96",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "832594__d",
                        x1: 67.65,
                        x2: 15.798,
                        y1: -2.88,
                        y2: 64.347,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                stopColor: "#FF4885"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#FF4885",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "832594__e",
                        x1: 36.061,
                        x2: 46.063,
                        y1: -33.829,
                        y2: 30.187,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.156,
                                stopColor: "#7A6AFD"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#7A6AFD",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "832594__f",
                        x1: -79.354,
                        x2: 88.945,
                        y1: 94.874,
                        y2: 61.612,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                stopColor: "#30A7FE",
                                stopOpacity: 0
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.432,
                                stopColor: "#30A7FE",
                                stopOpacity: 0.995
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.609,
                                stopColor: "#30A7FE"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#30A7FE",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("radialGradient", {
                        id: "832594__c",
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: "rotate(90 11.908 70.77)scale(129.272)",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.089,
                                stopColor: "#EB1000"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#EB1000",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("clipPath", {
                        id: "832594__b",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                            width: 89.535,
                            height: 89.535,
                            x: 2.867,
                            fill: "#fff",
                            rx: 10
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("clipPath", {
                id: "832594__a",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M77.702 40.8v-2.617c0-4.429-3.596-8.019-8.031-8.019H41.563l-9.1-11.357c-1.016-1.268-2.554-2.006-4.18-2.006H13.454c-2.956 0-5.353 2.393-5.353 5.345v49.037c0 .757.105 1.49.302 2.186.06-1.022.281-2.065.688-3.104l.033-.082 9.472-22.966c1.556-3.92 5.374-6.416 9.53-6.416zm.536 38.349c1.938-.268 3.603-1.54 4.314-3.36l9.487-23c1.356-3.47-1.27-7.188-5.077-7.188H28.127c-2.255 0-4.275 1.357-5.078 3.412l-9.487 23c-1.353 3.462 1.26 7.172 5.053 7.188h58.861"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("g", {
                clipPath: "url(#832594__a)",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("g", {
                    clipPath: "url(#832594__b)",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                            width: 89.535,
                            height: 89.535,
                            x: 2.867,
                            fill: "#D9F4FD",
                            rx: 10
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("circle", {
                            cx: 82.678,
                            cy: 58.862,
                            r: 129.272,
                            fill: "url(#832594__c)"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#832594__d)",
                            d: "M-5.19 28.042c-1.438-30.947 22.485-57.2 53.432-58.637s57.2 22.486 58.637 53.433-22.486 57.2-53.433 58.637-57.2-22.486-58.637-53.433"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#832594__e)",
                            d: "M25.487-61.956c-6.981-4.32-15.826-4.347-22.833-.069l-70.085 42.792c-6.864 4.19-6.876 14.083-.02 18.29l69.62 42.73c6.997 4.294 15.843 4.29 22.833-.015L94.48-.998c6.819-4.198 6.831-14.035.021-18.249z"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#832594__f)",
                            d: "M-41.766 42.825c14.446 0 27.53 5.846 37.005 15.278 18.947 18.896 34.656 18.912 53.603.048 9.474-9.48 22.575-15.342 37.037-15.342 28.907.016 52.324 23.37 52.324 52.198s-23.417 52.166-52.324 52.166c-14.494 0-27.595-5.879-37.07-15.359-18.93-18.832-34.623-18.816-53.57.08-9.474 9.448-22.56 15.279-37.005 15.279-28.89 0-52.308-23.354-52.308-52.166 0-28.813 23.418-52.182 52.308-52.182"
                        })
                    ]
                })
            })
        ]
    });
const ForwardRef = /*#__PURE__*/ (0, _react.forwardRef)(SvgComponent);
exports.default = /*#__PURE__*/ (0, _icon.createIllustration)(ForwardRef);

},{"preact/jsx-runtime":"b2Fbn","~/src/Icon":"1GyPb","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cNO5p":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("preact/jsx-runtime");
var _icon = require("~/src/Icon");
var _react = require("react");
"use client";
const SvgComponent = (props, ref)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "518c12__d",
                        x1: 33.819,
                        x2: 7.893,
                        y1: -1.439,
                        y2: 32.175,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                stopColor: "#FF4885"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#FF4885",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "518c12__e",
                        x1: 18.026,
                        x2: 23.028,
                        y1: -16.915,
                        y2: 15.094,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.156,
                                stopColor: "#7A6AFD"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#7A6AFD",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "518c12__f",
                        x1: -39.681,
                        x2: 44.469,
                        y1: 47.437,
                        y2: 30.806,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                stopColor: "#30A7FE",
                                stopOpacity: 0
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.432,
                                stopColor: "#30A7FE",
                                stopOpacity: 0.995
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.609,
                                stopColor: "#30A7FE"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#30A7FE",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("radialGradient", {
                        id: "518c12__c",
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: "rotate(90 5.952 35.383)scale(64.636)",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.089,
                                stopColor: "#EB1000"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#EB1000",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("clipPath", {
                        id: "518c12__b",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                            width: 44.767,
                            height: 44.767,
                            x: 1.43,
                            fill: "#fff",
                            rx: 10
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("clipPath", {
                id: "518c12__a",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M38.847 20.4v-1.309c0-2.214-1.798-4.009-4.016-4.009H20.778l-4.55-5.679C15.718 8.77 14.95 8.4 14.138 8.4H6.723c-1.479 0-2.677 1.197-2.677 2.673v24.518q.002.572.152 1.096c.03-.511.14-1.034.344-1.554q.007-.021.017-.042L9.296 23.61c.778-1.96 2.686-3.209 4.764-3.209zm4.63 2.4H14.06c-1.127 0-2.137.68-2.538 1.706l-4.744 11.5c-.676 1.731.63 3.586 2.527 3.594h29.428c1.128 0 2.138-.678 2.54-1.706l4.743-11.5c.652-1.666-.536-3.448-2.318-3.585q-.11-.009-.22-.009"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("g", {
                clipPath: "url(#518c12__a)",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("g", {
                    clipPath: "url(#518c12__b)",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                            width: 44.767,
                            height: 44.767,
                            x: 1.43,
                            fill: "#D9F4FD",
                            rx: 10
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("circle", {
                            cx: 41.335,
                            cy: 29.431,
                            r: 64.636,
                            fill: "url(#518c12__c)"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#518c12__d)",
                            d: "M-2.601 14.022C-3.32-1.45 8.642-14.578 24.115-15.296c15.474-.719 28.6 11.243 29.318 26.716.719 15.474-11.242 28.6-26.716 29.319s-28.6-11.243-29.318-26.717"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#518c12__e)",
                            d: "M12.74-30.978c-3.49-2.16-7.914-2.173-11.417-.034L-33.72-9.617c-3.432 2.096-3.438 7.042-.01 9.145L1.08 20.894c3.498 2.147 7.92 2.144 11.416-.008L47.237-.499c3.408-2.1 3.415-7.018.01-9.124z"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#518c12__f)",
                            d: "M-20.887 21.412c7.223 0 13.766 2.924 18.502 7.64 9.474 9.447 17.329 9.456 26.802.024 4.737-4.74 11.288-7.672 18.519-7.672 14.453.008 26.162 11.685 26.162 26.1 0 14.414-11.709 26.082-26.162 26.082-7.248 0-13.798-2.94-18.535-7.68-9.466-9.415-17.312-9.407-26.786.041-4.736 4.724-11.279 7.64-18.502 7.64-14.445 0-26.154-11.678-26.154-26.084s11.709-26.09 26.154-26.09"
                        })
                    ]
                })
            })
        ]
    });
const ForwardRef = /*#__PURE__*/ (0, _react.forwardRef)(SvgComponent);
exports.default = /*#__PURE__*/ (0, _icon.createIllustration)(ForwardRef);

},{"preact/jsx-runtime":"b2Fbn","~/src/Icon":"1GyPb","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dmpwi":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "default", ()=>Search);
var _jsxRuntime = require("preact/jsx-runtime");
var _iconTsx = require("../../../src/Icon.tsx");
var _s2FillSearchGeneric2160Svg = require("illustration:./S2_fill_search_generic2_160.svg");
var _s2FillSearchGeneric2160SvgDefault = parcelHelpers.interopDefault(_s2FillSearchGeneric2160Svg);
var _s2FillSearchGeneric296Svg = require("illustration:./S2_fill_search_generic2_96.svg");
var _s2FillSearchGeneric296SvgDefault = parcelHelpers.interopDefault(_s2FillSearchGeneric296Svg);
var _s2FillSearchGeneric248Svg = require("illustration:./S2_fill_search_generic2_48.svg");
var _s2FillSearchGeneric248SvgDefault = parcelHelpers.interopDefault(_s2FillSearchGeneric248Svg);
var _slotsTs = require("../../../../../../../../../vendor/react-aria-components/exports/slots.ts");
'use client';
function Search(props) {
    [props] = (0, _slotsTs.useContextProps)(props, null, (0, _iconTsx.IllustrationContext));
    let { size = 'M', ...otherProps } = props;
    switch(size){
        case 'L':
            return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _s2FillSearchGeneric2160SvgDefault.default), {
                ...otherProps
            });
        case 'S':
            return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _s2FillSearchGeneric248SvgDefault.default), {
                ...otherProps
            });
        case 'M':
            return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _s2FillSearchGeneric296SvgDefault.default), {
                ...otherProps
            });
    }
}

},{"preact/jsx-runtime":"b2Fbn","../../../src/Icon.tsx":"1GyPb","illustration:./S2_fill_search_generic2_160.svg":"kpbyA","illustration:./S2_fill_search_generic2_96.svg":"P6tvW","illustration:./S2_fill_search_generic2_48.svg":"8k89H","../../../../../../../../../vendor/react-aria-components/exports/slots.ts":"jtWJJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kpbyA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("preact/jsx-runtime");
var _icon = require("~/src/Icon");
var _react = require("react");
"use client";
const SvgComponent = (props, ref)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 160,
        height: 160,
        viewBox: "0 0 160 160",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "96b203__d",
                        x1: 106.954,
                        x2: 35.005,
                        y1: 11.219,
                        y2: 110.176,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                stopColor: "#FF4885"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#FF4885",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "96b203__e",
                        x1: 59.678,
                        x2: 73.017,
                        y1: -32.444,
                        y2: 58.112,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.156,
                                stopColor: "#7A6AFD"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#7A6AFD",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "96b203__f",
                        x1: -113.055,
                        x2: 137.645,
                        y1: 149.133,
                        y2: 96.573,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                stopColor: "#30A7FE",
                                stopOpacity: 0
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.432,
                                stopColor: "#30A7FE",
                                stopOpacity: 0.995
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.609,
                                stopColor: "#30A7FE"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#30A7FE",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("radialGradient", {
                        id: "96b203__c",
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: "matrix(0 182.381 -193.472 0 129.445 98.326)",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.089,
                                stopColor: "#EB1000"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#EB1000",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("clipPath", {
                        id: "96b203__b",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                            width: 134,
                            height: 126.319,
                            x: 10,
                            y: 15.281,
                            fill: "#fff",
                            rx: 10
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("clipPath", {
                id: "96b203__a",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M24 63.576c0-20.71 16.79-37.5 37.5-37.5S99 42.866 99 63.576s-16.79 37.5-37.5 37.5S24 84.286 24 63.576m37.5-45.5c-25.129 0-45.5 20.371-45.5 45.5s20.371 45.5 45.5 45.5c11.124 0 21.316-3.992 29.221-10.622l6.81 6.811-2.302 2.302 29.508 29.507c2.809 2.81 7.365 2.81 10.175 0 2.809-2.809 2.809-7.365 0-10.175l-29.508-29.507-2.215 2.216-6.811-6.81C103.008 84.891 107 74.7 107 63.575c0-25.129-20.371-45.5-45.5-45.5"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("g", {
                clipPath: "url(#96b203__a)",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("g", {
                    clipPath: "url(#96b203__b)",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                            width: 134,
                            height: 126.319,
                            x: 10,
                            y: 15.281,
                            fill: "#D9F4FD",
                            rx: 10
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("ellipse", {
                            cx: 129.445,
                            cy: 98.326,
                            fill: "url(#96b203__c)",
                            rx: 193.472,
                            ry: 182.381
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#96b203__d)",
                            d: "M-2.062 54.846c-2.15-43.662 33.653-80.7 79.97-82.727s85.606 31.723 87.756 75.385c2.151 43.661-33.652 80.699-79.969 82.726S.09 98.507-2.062 54.846"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#96b203__e)",
                            d: "M43.853-72.127c-10.448-6.095-23.686-6.133-34.173-.097L-95.21-11.852c-10.274 5.913-10.291 19.87-.032 25.804L8.956 74.238c10.471 6.058 23.71 6.05 34.172-.021L147.11 13.874c10.204-5.922 10.223-19.8.031-25.745z"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#96b203__f)",
                            d: "M-56.8 75.7c21.62 0 41.203 8.249 55.382 21.556 28.357 26.659 51.867 26.682 80.225.068 14.178-13.375 33.786-21.646 55.43-21.646 43.263.023 78.31 32.97 78.31 73.643 0 40.672-35.047 73.597-78.31 73.597-21.692 0-41.3-8.294-55.479-21.669-28.333-26.568-51.819-26.545-80.176.114-14.179 13.33-33.762 21.555-55.382 21.555-43.239 0-78.285-32.948-78.285-73.597 0-40.65 35.046-73.62 78.285-73.62"
                        })
                    ]
                })
            })
        ]
    });
const ForwardRef = /*#__PURE__*/ (0, _react.forwardRef)(SvgComponent);
exports.default = /*#__PURE__*/ (0, _icon.createIllustration)(ForwardRef);

},{"preact/jsx-runtime":"b2Fbn","~/src/Icon":"1GyPb","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"P6tvW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("preact/jsx-runtime");
var _icon = require("~/src/Icon");
var _react = require("react");
"use client";
const SvgComponent = (props, ref)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 96,
        height: 96,
        viewBox: "0 0 96 96",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "bb8701__d",
                        x1: 64.172,
                        x2: 21.002,
                        y1: 6.731,
                        y2: 66.106,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                stopColor: "#FF4885"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#FF4885",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "bb8701__e",
                        x1: 35.805,
                        x2: 43.808,
                        y1: -19.467,
                        y2: 34.867,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.156,
                                stopColor: "#7A6AFD"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#7A6AFD",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "bb8701__f",
                        x1: -67.834,
                        x2: 82.586,
                        y1: 89.479,
                        y2: 57.943,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                stopColor: "#30A7FE",
                                stopOpacity: 0
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.432,
                                stopColor: "#30A7FE",
                                stopOpacity: 0.995
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.609,
                                stopColor: "#30A7FE"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#30A7FE",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("radialGradient", {
                        id: "bb8701__c",
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: "matrix(0 109.429 -116.083 0 77.67 58.995)",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.089,
                                stopColor: "#EB1000"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#EB1000",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("clipPath", {
                        id: "bb8701__b",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                            width: 80.4,
                            height: 75.791,
                            x: 6,
                            y: 9.169,
                            fill: "#fff",
                            rx: 10
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("clipPath", {
                id: "bb8701__a",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M14.402 38.146c0-12.427 10.073-22.5 22.5-22.5s22.5 10.073 22.5 22.5-10.074 22.5-22.5 22.5-22.5-10.074-22.5-22.5m22.5-27.3c-15.078 0-27.3 12.222-27.3 27.3 0 15.077 12.222 27.3 27.3 27.3 6.674 0 12.79-2.396 17.532-6.373l4.087 4.086-1.382 1.381 17.705 17.705c1.685 1.685 4.419 1.685 6.105 0 1.685-1.686 1.685-4.42 0-6.105L63.244 58.435l-1.33 1.33-4.086-4.087c3.978-4.743 6.374-10.858 6.374-17.532 0-15.078-12.223-27.3-27.3-27.3"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("g", {
                clipPath: "url(#bb8701__a)",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("g", {
                    clipPath: "url(#bb8701__b)",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                            width: 80.4,
                            height: 75.791,
                            x: 6,
                            y: 9.169,
                            fill: "#D9F4FD",
                            rx: 10
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("ellipse", {
                            cx: 77.669,
                            cy: 58.995,
                            fill: "url(#bb8701__c)",
                            rx: 116.083,
                            ry: 109.429
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#bb8701__d)",
                            d: "M-1.238 32.907c-1.29-26.197 20.192-48.42 47.982-49.636S98.107 2.305 99.398 28.502s-20.192 48.42-47.982 49.636S.052 59.104-1.238 32.908"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#bb8701__e)",
                            d: "M26.31-43.277c-6.27-3.657-14.212-3.68-20.504-.058L-57.13-7.112c-6.163 3.548-6.174 11.922-.019 15.483l62.52 36.172c6.282 3.634 14.225 3.63 20.502-.013l62.39-36.206c6.123-3.553 6.134-11.88.019-15.447z"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#bb8701__f)",
                            d: "M-34.08 45.42c12.971 0 24.721 4.949 33.228 12.933 17.015 15.996 31.12 16.01 48.135.041 8.508-8.025 20.272-12.988 33.258-12.988 25.958.014 46.986 19.783 46.986 44.186s-21.028 44.158-46.986 44.158c-13.015 0-24.78-4.976-33.287-13.001-17-15.941-31.091-15.927-48.106.068-8.507 7.998-20.257 12.933-33.229 12.933-25.943 0-46.971-19.768-46.971-44.158S-60.024 45.42-34.081 45.42"
                        })
                    ]
                })
            })
        ]
    });
const ForwardRef = /*#__PURE__*/ (0, _react.forwardRef)(SvgComponent);
exports.default = /*#__PURE__*/ (0, _icon.createIllustration)(ForwardRef);

},{"preact/jsx-runtime":"b2Fbn","~/src/Icon":"1GyPb","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8k89H":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("preact/jsx-runtime");
var _icon = require("~/src/Icon");
var _react = require("react");
"use client";
const SvgComponent = (props, ref)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "b12586__d",
                        x1: 32.086,
                        x2: 10.501,
                        y1: 3.366,
                        y2: 33.053,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                stopColor: "#FF4885"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#FF4885",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "b12586__e",
                        x1: 17.902,
                        x2: 21.904,
                        y1: -9.733,
                        y2: 17.433,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.156,
                                stopColor: "#7A6AFD"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#7A6AFD",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("linearGradient", {
                        id: "b12586__f",
                        x1: -33.919,
                        x2: 41.291,
                        y1: 44.74,
                        y2: 28.972,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                stopColor: "#30A7FE",
                                stopOpacity: 0
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.432,
                                stopColor: "#30A7FE",
                                stopOpacity: 0.995
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.609,
                                stopColor: "#30A7FE"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#30A7FE",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("radialGradient", {
                        id: "b12586__c",
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: "matrix(0 54.7144 -58.0417 0 38.835 29.498)",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 0.089,
                                stopColor: "#EB1000"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#EB1000",
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("clipPath", {
                        id: "b12586__b",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                            width: 40.2,
                            height: 37.896,
                            x: 3,
                            y: 4.584,
                            fill: "#fff",
                            rx: 10
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("clipPath", {
                id: "b12586__a",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M7.2 19.073c0-6.213 5.038-11.25 11.25-11.25 6.214 0 11.25 5.037 11.25 11.25s-5.036 11.25-11.25 11.25c-6.212 0-11.25-5.037-11.25-11.25m11.25-13.65c-7.538 0-13.65 6.111-13.65 13.65 0 7.538 6.112 13.65 13.65 13.65 3.338 0 6.396-1.198 8.767-3.187l2.043 2.043-.69.691 8.852 8.852c.843.843 2.21.843 3.052 0s.843-2.21 0-3.052l-8.852-8.852-.665.664-2.043-2.043c1.99-2.371 3.187-5.429 3.187-8.766 0-7.539-6.111-13.65-13.65-13.65"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("g", {
                clipPath: "url(#b12586__a)",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("g", {
                    clipPath: "url(#b12586__b)",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                            width: 40.2,
                            height: 37.896,
                            x: 3,
                            y: 4.584,
                            fill: "#D9F4FD",
                            rx: 10
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("ellipse", {
                            cx: 38.835,
                            cy: 29.498,
                            fill: "url(#b12586__c)",
                            rx: 58.042,
                            ry: 54.714
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#b12586__d)",
                            d: "M-.619 16.454C-1.264 3.355 9.477-7.756 23.371-8.364 37.268-8.973 49.055 1.153 49.7 14.25s-10.096 24.21-23.99 24.818C11.812 39.677.025 29.552-.62 16.454"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#b12586__e)",
                            d: "M13.155-21.638c-3.135-1.829-7.106-1.84-10.252-.03L-28.564-3.555c-3.082 1.774-3.087 5.96-.01 7.741l31.26 18.086c3.141 1.818 7.112 1.815 10.251-.006L44.132 4.162c3.061-1.777 3.067-5.94.01-7.724z"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                            fill: "url(#b12586__f)",
                            d: "M-17.042 22.71c6.486 0 12.36 2.474 16.614 6.467 8.507 7.997 15.56 8.004 24.068.02 4.253-4.012 10.136-6.494 16.629-6.494 12.979.007 23.493 9.891 23.493 22.093s-10.514 22.08-23.493 22.08c-6.508 0-12.39-2.489-16.644-6.502-8.5-7.97-15.546-7.963-24.053.035-4.253 3.999-10.128 6.466-16.614 6.466-12.972 0-23.486-9.884-23.486-22.079S-30.014 22.71-17.042 22.71"
                        })
                    ]
                })
            })
        ]
    });
const ForwardRef = /*#__PURE__*/ (0, _react.forwardRef)(SvgComponent);
exports.default = /*#__PURE__*/ (0, _icon.createIllustration)(ForwardRef);

},{"preact/jsx-runtime":"b2Fbn","~/src/Icon":"1GyPb","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

