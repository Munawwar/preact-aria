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
})({"gGwIz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>KanbanBoard);
var _jsxRuntime = require("preact/jsx-runtime");
var _tailwindCss = require("../tailwind.css");
var _indexJs = require("../../../dist/index.js");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
"use client";
///- begin collapse -///
const tickets = [
    {
        'title': 'UI Button Alignment Issue',
        'description': 'Buttons in the Settings menu are misaligned on smaller screens.',
        'id': '#101',
        'assignee': 'Gilberto Miguel',
        'avatar': 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'date': '2023-09-15',
        'status': 'Open'
    },
    {
        'title': 'Login Page Redesign',
        'description': 'Requesting a redesign of the login page to improve user experience.',
        'id': '#102',
        'assignee': 'Maia Pettegree',
        'avatar': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'date': '2023-09-16',
        'status': 'Open'
    },
    {
        'title': 'Database Connection Error',
        'description': 'Users are experiencing intermittent connection errors when accessing the database.',
        'id': '#103',
        'assignee': 'Mike Johnson',
        'avatar': 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'date': '2023-09-17',
        'status': 'In Progress'
    },
    {
        'title': 'Feature: Dark Mode',
        'description': 'Implement a dark mode option for improved accessibility and user preference.',
        'id': '#104',
        'assignee': 'Sarah Lee',
        'avatar': 'https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'date': '2023-09-18',
        'status': 'Open'
    },
    {
        'title': 'Missing User Profile Pictures',
        'description': 'Some user profile pictures are not displaying properly in the user dashboard.',
        'id': '#105',
        'assignee': 'David Chen',
        'avatar': 'https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'date': '2023-09-19',
        'status': 'Open'
    },
    {
        'title': 'Performance Optimization',
        'description': 'Requesting performance optimization for the application to reduce load times.',
        'id': '#106',
        'assignee': 'Sarah Lee',
        'avatar': 'https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'date': '2023-09-20',
        'status': 'Closed'
    },
    {
        'title': 'Broken Link on Homepage',
        'description': 'The "Learn More" link on the homepage is leading to a 404 error.',
        'id': '#107',
        'assignee': 'Alex Turner',
        'avatar': 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'date': '2023-09-21',
        'status': 'Open'
    },
    {
        'title': 'Feature: Export to PDF',
        'description': 'Implement a feature to allow users to export their data to PDF format.',
        'id': '#108',
        'assignee': 'Maia Pettegree',
        'avatar': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'date': '2023-09-22',
        'status': 'Open'
    },
    {
        'title': 'Mobile Responsiveness Issue',
        'description': 'The application is not rendering properly on certain mobile devices.',
        'id': '#109',
        'assignee': 'Kevin Williams',
        'avatar': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
        'date': '2023-09-23',
        'status': 'Open'
    },
    {
        'title': 'Feature: Two-Factor Authentication',
        'description': 'Requesting the addition of two-factor authentication for improved security.',
        'id': '#110',
        'assignee': 'Maia Pettegree',
        'avatar': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'date': '2023-09-24',
        'status': 'In Progress'
    }
];
function KanbanBoard() {
    let list = (0, _indexJs.useListData)({
        initialItems: tickets
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        className: "grid grid-cols-[repeat(3,minmax(280px,1fr))] md:justify-center gap-4 -mx-8 px-8 py-8 box-border w-full overflow-auto relative snap-x snap-mandatory no-scrollbar",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Column, {
                status: "Open",
                list: list,
                itemClassName: "selected:bg-green-100 selected:border-green-500 dark:selected:bg-green-900 dark:selected:border-green-700"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Column, {
                status: "In Progress",
                list: list,
                itemClassName: "selected:bg-blue-100 selected:border-blue-500 dark:selected:bg-blue-900 dark:selected:border-blue-700"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Column, {
                status: "Closed",
                list: list,
                itemClassName: "selected:bg-red-100 selected:border-red-500 dark:selected:bg-red-900 dark:selected:border-red-700"
            })
        ]
    });
}
function Column({ list, status, itemClassName }) {
    let items = list.items.filter((t)=>t.status === status);
    let { dragAndDropHooks } = (0, _indexJs.useDragAndDrop)({
        // Provide drag data in a custom format as well as plain text.
        getItems (keys, items) {
            return items.map((item)=>({
                    'issue-id': item.id,
                    'text/plain': item.title
                }));
        },
        renderDropIndicator (target) {
            return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.DropIndicator), {
                target: target,
                className: "h-0 -my-1.5 -translate-y-[5px] -mx-2 invisible drop-target:visible",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("svg", {
                    height: 10,
                    className: "block w-full stroke-blue-500 fill-none forced-colors:stroke-[Highlight]",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("circle", {
                            cx: 5,
                            cy: 5,
                            r: 4,
                            strokeWidth: 2
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("line", {
                            x1: 20,
                            x2: "100%",
                            transform: "translate(-10 0)",
                            y1: 5,
                            y2: 5,
                            strokeWidth: 2
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("circle", {
                            cx: "100%",
                            cy: 5,
                            r: 4,
                            transform: "translate(-5 0)",
                            strokeWidth: 2
                        })
                    ]
                })
            });
        },
        // Accept drops with the custom format.
        acceptedDragTypes: [
            'issue-id'
        ],
        // Ensure items are always moved rather than copied.
        getDropOperation: ()=>'move',
        // Handle drops between items from other lists.
        async onInsert (e) {
            let ids = await Promise.all(e.items.filter((0, _indexJs.isTextDropItem)).map((item)=>item.getText('issue-id')));
            for (let id of ids)list.update(id, {
                ...list.getItem(id),
                status
            });
            if (e.target.dropPosition === 'before') list.moveBefore(e.target.key, ids);
            else if (e.target.dropPosition === 'after') list.moveAfter(e.target.key, ids);
        },
        // Handle drops on the collection when empty.
        async onRootDrop (e) {
            let ids = await Promise.all(e.items.filter((0, _indexJs.isTextDropItem)).map((item)=>item.getText('issue-id')));
            for (let id of ids)list.update(id, {
                ...list.getItem(id),
                status
            });
        },
        // Handle reordering items within the same list.
        onReorder (e) {
            if (e.target.dropPosition === 'before') list.moveBefore(e.target.key, e.keys);
            else if (e.target.dropPosition === 'after') list.moveAfter(e.target.key, e.keys);
        }
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("section", {
        className: "flex flex-col gap-2 snap-center",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("header", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("h3", {
                        className: "font-semibold text-zinc-800 dark:text-zinc-200 my-0",
                        children: status
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("span", {
                        className: "text-sm text-zinc-700 dark:text-zinc-400",
                        children: [
                            items.length,
                            " ",
                            items.length === 1 ? 'task' : 'tasks'
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.GridList), {
                items: items,
                "aria-label": status,
                selectionMode: "multiple",
                dragAndDropHooks: dragAndDropHooks,
                renderEmptyState: ()=>'No tasks.',
                className: "h-[320px] p-2 md:p-4 overflow-y-auto overflow-x-hidden relative outline outline-0 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm border border-black/10 dark:border-white/10 bg-clip-padding text-gray-700 dark:text-zinc-400 flex flex-col gap-3 rounded-xl shadow-xl drop-target:bg-blue-200 dark:drop-target:bg-blue-800/60 drop-target:outline-2 outline-blue-500 forced-colors:outline-[Highlight] -outline-offset-2 empty:items-center empty:justify-center",
                children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(Card, {
                        item: item,
                        className: itemClassName
                    })
            })
        ]
    });
}
function Card({ id, item, className }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.GridListItem), {
        id: id,
        value: item,
        textValue: item.title,
        className: `group grid grid-cols-[1fr_auto] gap-1 p-2 rounded-lg border border-solid border-black/10 hover:border-black/20 dark:border-white/10 dark:hover:border-white/20 forced-colors:border-[ButtonBorder]! bg-white/80 dark:bg-zinc-900/70 bg-clip-padding hover:shadow-md selected:shadow-md dragging:opacity-50 transition text-slate-700 dark:text-slate-200 cursor-default select-none outline outline-0 outline-offset-2 focus-visible:outline-2 outline-blue-500 forced-colors:outline-[Highlight] forced-colors:text-[ButtonText]! forced-colors:selected:bg-[Highlight]! forced-colors:selected:text-[HighlightText]! forced-color-adjust-none ${className}`,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                className: "font-bold truncate",
                children: item.title
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                className: "text-sm justify-self-end",
                children: item.id
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Text), {
                slot: "description",
                className: "text-sm line-clamp-2 col-span-2 text-slate-500 dark:text-zinc-300 forced-colors:text-inherit!",
                children: item.description
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("span", {
                className: "flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("img", {
                        src: item.avatar,
                        alt: "",
                        className: "h-4 w-4 rounded-full"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                        className: "text-sm",
                        children: item.assignee
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
                slot: "drag",
                className: "bg-transparent border-none text-gray-500 dark:text-zinc-300 text-base leading-none w-fit aspect-square p-0 justify-self-end outline outline-0 focus-visible:outline-2 outline-blue-500 forced-colors:outline-[Highlight] rounded-xs sr-only group-focus-visible:not-sr-only focus:not-sr-only forced-colors:group-selected:text-[HighlightText] forced-colors:group-selected:outline-[HighlightText]",
                children: "\u2261"
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","../tailwind.css":"fhDy2","../../../dist/index.js":"dy6h5","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fhDy2":[function() {},{}],"gOP0N":[function(require,module,exports,__globalThis) {
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

