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
})({"6SmVk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Example);
var _jsxRuntime = require("preact/jsx-runtime");
var _tailwindCss = require("../tailwind.css");
var _tabs = require("./Tabs");
var _tabList = require("./TabList");
var _tab = require("./Tab");
var _tabPanel = require("./TabPanel");
var _tabSelectionIndicator = require("./TabSelectionIndicator");
var _tabPanelCarousel = require("./TabPanelCarousel");
"use client";
function Example() {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tabs.Tabs), {
        className: "w-[400px] max-w-full",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tabList.TabList), {
                "aria-label": "Tabs",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tab.Tab), {
                        id: "home",
                        children: "Home"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tab.Tab), {
                        id: "files",
                        children: "Files"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tab.Tab), {
                        id: "search",
                        children: "Search"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tab.Tab), {
                        id: "settings",
                        children: "Settings"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tabSelectionIndicator.TabSelectionIndicator), {}),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tabPanelCarousel.TabPanelCarousel), {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tabPanel.TabPanel), {
                        id: "home",
                        shouldForceMount: true,
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                className: "font-bold",
                                children: "Home"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet nisl blandit, pellentesque eros eu, scelerisque eros. Sed cursus urna at nunc lacinia dapibus."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tabPanel.TabPanel), {
                        id: "files",
                        shouldForceMount: true,
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                className: "font-bold",
                                children: "Files"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet nisl blandit, pellentesque eros eu, scelerisque eros. Sed cursus urna at nunc lacinia dapibus."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tabPanel.TabPanel), {
                        id: "search",
                        shouldForceMount: true,
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                className: "font-bold",
                                children: "Search"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet nisl blandit, pellentesque eros eu, scelerisque eros. Sed cursus urna at nunc lacinia dapibus."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tabPanel.TabPanel), {
                        id: "settings",
                        shouldForceMount: true,
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                className: "font-bold",
                                children: "Settings"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet nisl blandit, pellentesque eros eu, scelerisque eros. Sed cursus urna at nunc lacinia dapibus."
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","../tailwind.css":"fhDy2","./Tabs":"8sUzD","./TabList":"lPQg0","./Tab":"4T677","./TabPanel":"1Xde3","./TabSelectionIndicator":"3We9f","./TabPanelCarousel":"7KiMc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fhDy2":[function() {},{}],"8sUzD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tabs", ()=>Tabs);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../dist/index.js");
var _tailwindVariants = require("tailwind-variants");
const tabsStyles = (0, _tailwindVariants.tv)({
    base: 'flex gap-4',
    variants: {
        orientation: {
            horizontal: 'flex-col',
            vertical: 'flex-row'
        }
    }
});
function Tabs(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Tabs), {
        ...props,
        // Define a scroll timeline at the top level of the tabs component
        // so it can be shared between the TabList and TabPanelCarousel.
        style: {
            timelineScope: '--scroll'
        },
        className: (0, _indexJs.composeRenderProps)(props.className, (className, renderProps)=>tabsStyles({
                ...renderProps,
                className
            }))
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../dist/index.js":"dy6h5","tailwind-variants":"1lG2r","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lPQg0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TabList", ()=>TabList);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../dist/index.js");
var _tailwindVariants = require("tailwind-variants");
const tabListStyles = (0, _tailwindVariants.tv)({
    base: 'flex gap-1',
    variants: {
        orientation: {
            horizontal: 'flex-row',
            vertical: 'flex-col items-start'
        }
    }
});
function TabList(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.TabList), {
        ...props,
        className: (0, _indexJs.composeRenderProps)(props.className, (className, renderProps)=>tabListStyles({
                ...renderProps,
                className
            }))
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../dist/index.js":"dy6h5","tailwind-variants":"1lG2r","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4T677":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tab", ()=>Tab);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../dist/index.js");
var _tailwindVariants = require("tailwind-variants");
var _utils = require("../tailwind/src/utils");
const tabProps = (0, _tailwindVariants.tv)({
    extend: (0, _utils.focusRing),
    base: 'relative flex items-center cursor-default rounded-full px-3 py-1.5 text-sm text-gray-900 dark:text-zinc-100 font-medium transition forced-color-adjust-none',
    variants: {
        isDisabled: {
            true: 'text-gray-200 dark:text-zinc-600 forced-colors:text-[GrayText] selected:text-gray-300 dark:selected:text-zinc-500 forced-colors:selected:text-[HighlightText] selected:bg-gray-200 dark:selected:bg-zinc-600 forced-colors:selected:bg-[GrayText]'
        }
    }
});
function Tab(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Tab), {
        ...props,
        className: (0, _indexJs.composeRenderProps)(props.className, (className, renderProps)=>tabProps({
                ...renderProps,
                className: (className || '') + ' tab'
            })),
        style: {
            anchorName: `--tab-${props.id}`
        },
        children: (0, _indexJs.composeRenderProps)(props.children, (children)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    children,
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.SelectionIndicator), {
                        className: "absolute top-0 left-0 w-full h-full z-10 bg-white rounded-full mix-blend-difference motion-safe:transition-[translate,width,height] supports-animation-timeline:hidden"
                    })
                ]
            }))
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../dist/index.js":"dy6h5","tailwind-variants":"1lG2r","../tailwind/src/utils":"hW5LV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1Xde3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TabPanel", ()=>TabPanel);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../dist/index.js");
var _tailwindVariants = require("tailwind-variants");
var _utils = require("../tailwind/src/utils");
const tabPanelStyles = (0, _tailwindVariants.tv)({
    extend: (0, _utils.focusRing),
    base: 'shrink-0 w-full snap-start snap-always box-border px-4 text-sm text-gray-900 dark:text-zinc-100'
});
function TabPanel(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.TabPanel), {
        ...props,
        className: (0, _indexJs.composeRenderProps)(props.className, (className, renderProps)=>tabPanelStyles({
                ...renderProps,
                className
            }))
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../dist/index.js":"dy6h5","tailwind-variants":"1lG2r","../tailwind/src/utils":"hW5LV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3We9f":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TabSelectionIndicator", ()=>TabSelectionIndicator);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _indexJs = require("../../../dist/index.js");
function TabSelectionIndicator() {
    let state = (0, _react.useContext)((0, _indexJs.TabListStateContext));
    if (!state) return null;
    // Generate keyframes for each tab using CSS anchor positioning.
    let animationId = (0, _react.useId)();
    let keyframes = [];
    for (let item of state.collection)keyframes.push(`${Math.round(item.index / (state.collection.size - 1) * 100)}% {
      top: anchor(--tab-${item.key} start);
      left: anchor(--tab-${item.key} start);
      bottom: anchor(--tab-${item.key} end);
      right: anchor(--tab-${item.key} end);
    }`);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("style", {
                children: `@keyframes ${animationId} {
          ${keyframes.join('\n\n')}
        `
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                className: "absolute z-10 bg-white forced-color-adjust-none rounded-full mix-blend-difference contain-strict transition-[inset]",
                style: {
                    animationName: animationId,
                    animationTimingFunction: 'linear',
                    animationTimeline: '--scroll',
                    animationFillMode: 'both'
                }
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../dist/index.js":"dy6h5","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gOP0N":[function(require,module,exports,__globalThis) {
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

},{"preact/compat":"8RhID","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7KiMc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TabPanelCarousel", ()=>TabPanelCarousel);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _indexJs = require("../../../dist/index.js");
function TabPanelCarousel({ children }) {
    let state = (0, _react.useContext)((0, _indexJs.TabListStateContext));
    let ref = (0, _react.useRef)(null);
    // Update the selected tab on scroll end.
    let onScrollEnd = (0, _react.useCallback)(()=>{
        let el = ref.current;
        if (!el) return;
        let index = Math.round(el.scrollLeft / el.offsetWidth);
        state.setSelectedKey([
            ...state.collection
        ][index].key);
    }, [
        state
    ]);
    // Polyfill for onScrollEnd in Safari.
    let timeout = (0, _react.useRef)(undefined);
    (0, _react.useEffect)(()=>{
        let onScroll = ()=>{
            clearTimeout(timeout.current);
            timeout.current = setTimeout(()=>{
                onScrollEnd();
            }, 300);
        };
        if (!('onscrollend' in window)) {
            ref.current?.addEventListener('scroll', onScroll);
            return ()=>ref.current?.removeEventListener('scroll', onScroll);
        }
    }, [
        onScrollEnd
    ]);
    // Scroll the selected tab panel into view when tapping on a tab.
    (0, _react.useLayoutEffect)(()=>{
        if (!state?.selectedItem || !ref.current) return;
        let panel = ref.current.children[state.selectedItem.index];
        ref.current.scrollTo({
            left: panel.offsetLeft,
            behavior: 'smooth'
        });
    }, [
        state?.selectedKey
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        ref: ref,
        className: "overflow-auto snap-x snap-mandatory flex relative",
        style: {
            scrollTimeline: '--scroll x',
            scrollbarWidth: 'none'
        },
        onScrollEnd: onScrollEnd,
        children: children
    });
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../dist/index.js":"dy6h5","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5gQI0":[function(require,module,exports,__globalThis) {
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

