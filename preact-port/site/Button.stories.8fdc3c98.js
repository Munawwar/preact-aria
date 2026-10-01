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
})({"afx2w":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Example", ()=>Example);
var _jsxRuntime = require("preact/jsx-runtime");
var _button = require("../src/Button");
const meta = {
    component: (0, _button.Button),
    parameters: {
        layout: 'centered'
    },
    tags: [
        'autodocs'
    ]
};
exports.default = meta;
const Example = (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _button.Button), {
        ...args,
        children: "Press me"
    });
Example.args = {
    onPress: ()=>alert('Hello world!')
};

},{"preact/jsx-runtime":"b2Fbn","../src/Button":"akb2g","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"akb2g":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Button", ()=>Button);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _progressCircle = require("./ProgressCircle");
var _buttonCss = require("./Button.css");
'use client';
function Button(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
        ...props,
        className: "react-aria-Button button-base",
        "data-variant": props.variant || 'primary',
        children: (0, _indexJs.composeRenderProps)(props.children, (children, { isPending })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    !isPending && children,
                    isPending && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _progressCircle.ProgressCircle), {
                        "aria-label": "Saving...",
                        isIndeterminate: true
                    })
                ]
            }))
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./ProgressCircle":"6UR4P","./Button.css":"3agqr","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6UR4P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProgressCircle", ()=>ProgressCircle);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
'use client';
function ProgressCircle(props) {
    // SVG strokes are centered, so subtract half the stroke width from the radius to create an inner stroke.
    let strokeWidth = 4;
    let radius = `calc(50% - ${strokeWidth / 2}px)`;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.ProgressBar), {
        ...props,
        style: (0, _indexJs.composeRenderProps)(props.style, (style)=>({
                ...style,
                width: props.size || 16,
                height: props.size || 16
            })),
        children: ({ percentage, isIndeterminate })=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("svg", {
                    fill: "none",
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 32 32",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("circle", {
                            cx: "50%",
                            cy: "50%",
                            r: radius,
                            stroke: "var(--highlight-pressed)",
                            strokeWidth: strokeWidth
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("circle", {
                            cx: "50%",
                            cy: "50%",
                            r: radius,
                            stroke: "var(--highlight-background)",
                            strokeWidth: strokeWidth,
                            // Normalize the path length to 100 so we can easily set stroke-dashoffset to a percentage.
                            pathLength: "100",
                            // Add extra gap between dashes so 0% works in Chrome.
                            strokeDasharray: "100 200",
                            strokeDashoffset: 100 - (isIndeterminate || percentage == null ? 25 : percentage),
                            strokeLinecap: "round",
                            style: {
                                rotate: '-90deg',
                                transformOrigin: 'center center'
                            },
                            children: isIndeterminate && /*#__PURE__*/ (0, _jsxRuntime.jsx)("animateTransform", {
                                attributeName: "transform",
                                type: "rotate",
                                dur: "0.75s",
                                values: "0;360",
                                repeatCount: "indefinite"
                            })
                        })
                    ]
                })
            })
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3agqr":[function() {},{}],"5gQI0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clsx", ()=>clsx);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) {
        if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
        } else for(f in e)e[f] && (n && (n += " "), n += f);
    }
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
exports.default = clsx;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

