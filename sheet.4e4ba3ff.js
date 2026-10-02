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
})({"6U93l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("preact/jsx-runtime");
var _tailwindCss = require("../tailwind.css");
var _react = require("motion/react");
var _indexJs = require("../../../dist/index.js");
var _react1 = require("react");
"use client";
// Wrap React Aria modal components so they support motion values.
const MotionModal = (0, _react.motion).create((0, _indexJs.Modal));
const MotionModalOverlay = (0, _react.motion).create((0, _indexJs.ModalOverlay));
const inertiaTransition = {
    type: "inertia",
    bounceStiffness: 300,
    bounceDamping: 40,
    timeConstant: 300
};
const staticTransition = {
    duration: 0.5,
    ease: (0, _react.cubicBezier)(0.32, 0.72, 0, 1)
};
const SHEET_MARGIN = 34;
const SHEET_RADIUS = 12;
const root = typeof document !== 'undefined' ? document.querySelector('body > div:first-of-type') : null;
function Sheet() {
    let [isOpen, setOpen] = (0, _react1.useState)(false);
    let h = typeof window !== 'undefined' ? window.innerHeight - SHEET_MARGIN : 0;
    let y = (0, _react.useMotionValue)(h);
    let bgOpacity = (0, _react.useTransform)(y, [
        0,
        h
    ], [
        0.4,
        0
    ]);
    let bg = (0, _react.useMotionTemplate)`rgba(0, 0, 0, ${bgOpacity})`;
    // Scale the body down and adjust the border radius when the sheet is open.
    let bodyScale = (0, _react.useTransform)(y, [
        0,
        h
    ], [
        typeof window !== 'undefined' ? (window.innerWidth - SHEET_MARGIN) / window.innerWidth : 0,
        1
    ]);
    let bodyTranslate = (0, _react.useTransform)(y, [
        0,
        h
    ], [
        SHEET_MARGIN - SHEET_RADIUS,
        0
    ]);
    let bodyBorderRadius = (0, _react.useTransform)(y, [
        0,
        h
    ], [
        SHEET_RADIUS,
        0
    ]);
    (0, _react.useMotionValueEvent)(bodyScale, 'change', (v)=>{
        if (root) root.style.scale = `${v}`;
    });
    (0, _react.useMotionValueEvent)(bodyTranslate, 'change', (v)=>{
        if (root) root.style.translate = `0 ${v}px`;
    });
    (0, _react.useMotionValueEvent)(bodyBorderRadius, 'change', (v)=>{
        if (root) root.style.borderRadius = `${v}px`;
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
                className: "text-blue-600 text-lg font-semibold outline-hidden rounded-sm bg-transparent border-none pressed:text-blue-700 focus-visible:ring-3",
                onPress: ()=>setOpen(true),
                children: "Open sheet"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _react.AnimatePresence), {
                children: isOpen && /*#__PURE__*/ (0, _jsxRuntime.jsx)(MotionModalOverlay, {
                    // Force the modal to be open when AnimatePresence renders it.
                    isOpen: true,
                    onOpenChange: setOpen,
                    className: "fixed inset-0 z-10",
                    style: {
                        backgroundColor: bg
                    },
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MotionModal, {
                        className: "bg-white dark:bg-zinc-900 absolute bottom-0 w-full rounded-t-xl shadow-lg will-change-transform font-sans",
                        initial: {
                            y: h
                        },
                        animate: {
                            y: 0
                        },
                        exit: {
                            y: h
                        },
                        transition: staticTransition,
                        style: {
                            y,
                            top: SHEET_MARGIN,
                            // Extra padding at the bottom to account for rubber band scrolling.
                            paddingBottom: typeof window !== 'undefined' ? window.screen.height : 0
                        },
                        drag: "y",
                        dragConstraints: {
                            top: 0
                        },
                        onDragEnd: (e, { offset, velocity })=>{
                            if (offset.y > window.innerHeight * 0.75 || velocity.y > 10) setOpen(false);
                            else (0, _react.animate)(y, 0, {
                                ...inertiaTransition,
                                min: 0,
                                max: 0
                            });
                        },
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                className: "mx-auto w-12 mt-2 h-1.5 rounded-full bg-gray-400"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.Dialog), {
                                className: "px-4 pb-4 outline-hidden",
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                        className: "flex justify-end",
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
                                            className: "text-blue-600 text-lg font-semibold mb-8 outline-hidden rounded-sm bg-transparent border-none pressed:text-blue-700 focus-visible:ring-3",
                                            onPress: ()=>setOpen(false),
                                            children: "Done"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Heading), {
                                        slot: "title",
                                        className: "text-3xl font-semibold mb-4",
                                        children: "Modal sheet"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                        className: "text-lg mb-4",
                                        children: "This is a dialog with a custom modal overlay built with React Aria Components and Framer Motion."
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                        className: "text-lg",
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet nisl blandit, pellentesque eros eu, scelerisque eros. Sed cursus urna at nunc lacinia dapibus."
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("style", {
                children: `
        body {
          background: black;
        }

        body > div:first-of-type {
          background: var(--s2-container-bg);
          translate: 0;
          transform-origin: center 0;
          overflow: auto;
          height: 100vh;
          max-width: unset;
          padding-inline: max((100% - 1280px) / 2, 0px);
        }
      `
            })
        ]
    });
}
exports.default = Sheet;

},{"preact/jsx-runtime":"b2Fbn","../tailwind.css":"fhDy2","motion/react":[["animate","iobxA"],["AnimatePresence","7Fs1Z"],["cubicBezier","bmKE5"],["motion","7NDeO"],["useMotionTemplate","2Ow3s"],["useMotionValue","dagTW"],["useMotionValueEvent","etDnc"],["useTransform","8rHrp"]],"../../../dist/index.js":"dy6h5","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fhDy2":[function() {},{}],"8rHrp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useTransform", ()=>useTransform);
var _motionDom = require("motion-dom");
var _useConstantMjs = require("../utils/use-constant.mjs");
var _useCombineValuesMjs = require("./use-combine-values.mjs");
var _useComputedMjs = require("./use-computed.mjs");
"use client";
function useTransform(input, inputRangeOrTransformer, outputRangeOrMap, options) {
    if (typeof input === "function") return (0, _useComputedMjs.useComputed)(input);
    /**
     * Detect if outputRangeOrMap is an output map (object with keys)
     * rather than an output range (array).
     */ const isOutputMap = outputRangeOrMap !== undefined && !Array.isArray(outputRangeOrMap) && typeof inputRangeOrTransformer !== "function";
    if (isOutputMap) return useMapTransform(input, inputRangeOrTransformer, outputRangeOrMap, options);
    const outputRange = outputRangeOrMap;
    const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : (0, _motionDom.transform)(inputRangeOrTransformer, outputRange, options);
    const result = Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([
        input
    ], ([latest])=>transformer(latest));
    const inputAccelerate = !Array.isArray(input) ? input.accelerate : undefined;
    if (inputAccelerate && !inputAccelerate.isTransformed && typeof inputRangeOrTransformer !== "function" && Array.isArray(outputRangeOrMap) && options?.clamp !== false) result.accelerate = {
        ...inputAccelerate,
        times: inputRangeOrTransformer,
        keyframes: outputRangeOrMap,
        isTransformed: true,
        ...options?.ease ? {
            ease: options.ease
        } : {}
    };
    return result;
}
function useListTransform(values, transformer) {
    const latest = (0, _useConstantMjs.useConstant)(()=>[]);
    return (0, _useCombineValuesMjs.useCombineMotionValues)(values, ()=>{
        latest.length = 0;
        const numValues = values.length;
        for(let i = 0; i < numValues; i++)latest[i] = values[i].get();
        return transformer(latest);
    });
}
function useMapTransform(inputValue, inputRange, outputMap, options) {
    /**
     * Capture keys once to ensure hooks are called in consistent order.
     */ const keys = (0, _useConstantMjs.useConstant)(()=>Object.keys(outputMap));
    const output = (0, _useConstantMjs.useConstant)(()=>({}));
    for (const key of keys)output[key] = useTransform(inputValue, inputRange, outputMap[key], options);
    return output;
}

},{"motion-dom":"grzow","../utils/use-constant.mjs":"bFn8i","./use-combine-values.mjs":"j54h2","./use-computed.mjs":"iMsMK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iMsMK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useComputed", ()=>useComputed);
var _motionDom = require("motion-dom");
var _useCombineValuesMjs = require("./use-combine-values.mjs");
"use client";
function useComputed(compute) {
    /**
     * Open session of collectMotionValues. Any MotionValue that calls get()
     * will be saved into this array.
     */ (0, _motionDom.collectMotionValues).current = [];
    compute();
    const value = (0, _useCombineValuesMjs.useCombineMotionValues)((0, _motionDom.collectMotionValues).current, compute);
    /**
     * Synchronously close session of collectMotionValues.
     */ (0, _motionDom.collectMotionValues).current = undefined;
    return value;
}

},{"motion-dom":"c1jKT","./use-combine-values.mjs":"j54h2","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gOP0N":[function(require,module,exports,__globalThis) {
// Parcel aliases upstream React imports here; Preact stays external in the library.
// Read members through the default object to avoid Parcel's external re-export bug.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Children", ()=>Children);
parcelHelpers.export(exports, "cloneElement", ()=>cloneElement);
parcelHelpers.export(exports, "createContext", ()=>createContext);
parcelHelpers.export(exports, "createElement", ()=>createElement);
parcelHelpers.export(exports, "createPortal", ()=>createPortal);
parcelHelpers.export(exports, "forwardRef", ()=>forwardRef);
parcelHelpers.export(exports, "Fragment", ()=>Fragment);
parcelHelpers.export(exports, "isValidElement", ()=>isValidElement);
parcelHelpers.export(exports, "memo", ()=>memo);
parcelHelpers.export(exports, "flushSync", ()=>flushSync);
parcelHelpers.export(exports, "useId", ()=>useId);
parcelHelpers.export(exports, "useInsertionEffect", ()=>useInsertionEffect);
parcelHelpers.export(exports, "useDebugValue", ()=>useDebugValue);
parcelHelpers.export(exports, "Component", ()=>Component);
parcelHelpers.export(exports, "PureComponent", ()=>PureComponent);
parcelHelpers.export(exports, "Suspense", ()=>Suspense);
parcelHelpers.export(exports, "useCallback", ()=>useCallback);
parcelHelpers.export(exports, "useContext", ()=>useContext);
parcelHelpers.export(exports, "useEffect", ()=>useEffect);
parcelHelpers.export(exports, "useMemo", ()=>useMemo);
parcelHelpers.export(exports, "useImperativeHandle", ()=>useImperativeHandle);
parcelHelpers.export(exports, "useLayoutEffect", ()=>useLayoutEffect);
parcelHelpers.export(exports, "useReducer", ()=>useReducer);
parcelHelpers.export(exports, "useRef", ()=>useRef);
parcelHelpers.export(exports, "useState", ()=>useState);
parcelHelpers.export(exports, "useSyncExternalStore", ()=>useSyncExternalStore);
parcelHelpers.export(exports, "version", ()=>version);
var _compat = require("preact/compat");
var _compatDefault = parcelHelpers.interopDefault(_compat);
const React = {
    ...(0, _compatDefault.default)
};
exports.default = React;
const { Children, cloneElement, createContext, createElement, createPortal, forwardRef, Fragment, isValidElement, memo, flushSync, useId, useInsertionEffect, useDebugValue, Component, PureComponent, Suspense, useCallback, useContext, useEffect, useMemo, useImperativeHandle, useLayoutEffect, useReducer, useRef, useState, useSyncExternalStore, version } = React;

},{"preact/compat":"8RhID","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5gQI0":[function(require,module,exports,__globalThis) {
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

