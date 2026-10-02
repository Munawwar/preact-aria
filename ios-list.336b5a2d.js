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
})({"58tTN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>SwipableList);
var _jsxRuntime = require("preact/jsx-runtime");
var _tailwindCss = require("../tailwind.css");
var _indexJs = require("../../../dist/index.js");
var _react = require("motion/react");
var _react1 = require("react");
"use client";
///- begin collapse -///
const messages = {
    "emails": [
        {
            "id": 1,
            "subject": "Meeting Reminder: Project Kickoff",
            "sender": "Emma Johnson",
            "date": "9:40 AM",
            "message": "Dear Devon,\n\nThis is a friendly reminder of the upcoming project kickoff meeting scheduled for tomorrow at 9am. The meeting will be held in [location]. It's essential that all team members attend to ensure a successful start to the project.\n\nPlease come prepared with any necessary materials or information relevant to the project. If you have any questions or need further clarification, don't hesitate to reach out to me.\n\nLooking forward to seeing you at the meeting.\n\nBest regards,\nEmma"
        },
        {
            "id": 2,
            "subject": "Important Account Update",
            "sender": "support@company.com",
            "date": "8:23 AM",
            "message": "Dear Devon,\n\nWe hope this email finds you well. We are writing to inform you about an important update regarding your account with us. As part of our ongoing efforts to enhance security, we have implemented a new two-factor authentication process.\n\nTo ensure continued access to your account, please follow the instructions provided in the attached document to set up the two-factor authentication feature. If you have any questions or need assistance, please don't hesitate to contact our support team.\n\nThank you for your cooperation.\n\nBest regards,\nThe [Company] Team"
        },
        {
            "id": 3,
            "subject": "Promotion Announcement",
            "sender": "Liam Thompson",
            "date": "Yesterday",
            "message": "Dear Devon,\n\nWe are pleased to inform you that based on your exceptional performance, dedication, and contributions to the company, you have been promoted to the position of [new position]. This promotion is a recognition of your hard work and the value you bring to our organization.\n\nPlease accept our heartfelt congratulations on this well-deserved achievement. We believe that you will excel in your new role and contribute to the continued success of our team.\n\nIf you have any questions or need any support during this transition, please don't hesitate to contact the HR department.\n\nBest regards,\nThe HR Team"
        },
        {
            "id": 4,
            "subject": "Invitation to Exclusive Networking Event",
            "sender": "events@company.com",
            "date": "Yesterday",
            "message": "Dear Devon,\n\nYou are cordially invited to our upcoming exclusive networking event, where industry leaders, professionals, and enthusiasts gather to exchange ideas and forge valuable connections. This event will take place on [date] at [venue], starting at [time].\n\nPlease RSVP by [RSVP date] to secure your spot. We anticipate a high demand for attendance, so we encourage you to respond promptly. We look forward to welcoming you to this exciting event!\n\nBest regards,\nThe [Company] Events Team"
        },
        {
            "id": 5,
            "subject": "Thank You for Your Recent Purchase",
            "sender": "sales@company.com",
            "date": "Friday",
            "message": "Dear Devon,\n\nThank you for your recent purchase from our online store. We appreciate your business and are delighted to let you know that your order has been successfully processed and is now being prepared for shipment.\n\nYou will receive a confirmation email with tracking details as soon as your package is dispatched. If you have any questions regarding your order or need further assistance, please don't hesitate to reach out to our customer support team.\n\nOnce again, thank you for choosing us as your preferred shopping destination.\n\nBest regards,\nThe [Company] Team"
        },
        {
            "id": 6,
            "sender": "Jane Doe",
            "subject": "New Project Proposal",
            "date": "Friday",
            "message": "Hi Devon,\n\nI've attached a new project proposal for your review. Please let me know what you think.\n\nThanks,\nJane"
        },
        {
            "id": 7,
            "sender": "Susan Smith",
            "subject": "Status Update",
            "date": "Friday",
            "message": "Hi Devon,\n\nI'm just sending a quick status update on the project we're working on together. I'm on track to meet my deadlines, and I'll keep you updated on my progress.\n\nThanks,\nSusan"
        },
        {
            "id": 8,
            "sender": "Michael Jones",
            "subject": "Question about the presentation",
            "date": "Thursday",
            "message": "Hi Devon,\n\nI had a question about the presentation you gave last week. I was wondering if you could send me the slides so I can review them in more detail.\n\nThanks,\nMichael"
        },
        {
            "id": 9,
            "sender": "Customer Service",
            "subject": "Order Confirmation",
            "date": "Thursday",
            "message": "Hi Devon,\n\nWe just wanted to confirm that your order has been shipped. Your order number is 1234567890, and it should arrive at your home address within 2-3 business days.\n\nThanks for your purchase!\n\nCustomer Service"
        },
        {
            "id": 10,
            "sender": "Your Bank",
            "subject": "Account Statement",
            "date": "Wednesday",
            "message": "Hi Devon,\n\nWe're writing to you today to provide you with your monthly account statement. As you can see, your account balance is currently $1,000.00.\n\nPlease let us know if you have any questions.\n\nThanks,\nYour Bank"
        },
        {
            "id": 11,
            "sender": "hr@company2.com",
            "subject": "Employee Benefits Update",
            "date": "Tuesday",
            "message": "Dear Devon,\n\nWe wanted to inform you about the recent updates to our employee benefits package. We have enhanced the healthcare coverage options and added additional wellness programs to support your well-being.\n\nPlease review the attached document for detailed information on the updated benefits. If you have any questions or need further assistance, feel free to contact the HR department.\n\nBest regards,\nThe HR Team"
        }
    ]
};
///- end collapse -///
const MotionItem = (0, _react.motion).create((0, _indexJs.GridListItem));
const inertiaTransition = {
    type: "inertia",
    bounceStiffness: 300,
    bounceDamping: 40,
    timeConstant: 300
};
function SwipableList() {
    let [items, setItems] = (0, _react1.useState)(messages.emails);
    let [selectedKeys, setSelectedKeys] = (0, _react1.useState)(new Set());
    let [selectionMode, setSelectionMode] = (0, _react1.useState)("none");
    let onDelete = ()=>{
        setItems(items.filter((i)=>selectedKeys !== 'all' && !selectedKeys.has(i.id)));
        setSelectedKeys(new Set());
        setSelectionMode("none");
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-col h-full max-h-[500px] sm:w-[400px]",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "flex pb-4 justify-between",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
                        className: "text-blue-600 text-lg outline-hidden bg-transparent border-none transition pressed:text-blue-700 focus-visible:ring-3 disabled:text-gray-400",
                        style: {
                            opacity: selectionMode === "none" ? 0 : 1
                        },
                        isDisabled: selectedKeys !== 'all' && selectedKeys.size === 0,
                        onPress: onDelete,
                        children: "Delete"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
                        className: "text-blue-600 text-lg outline-hidden bg-transparent border-none transition pressed:text-blue-700 focus-visible:ring-3",
                        onPress: ()=>{
                            setSelectionMode((m)=>m === "none" ? "multiple" : "none");
                            setSelectedKeys(new Set());
                        },
                        children: selectionMode === "none" ? "Edit" : "Cancel"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.GridList), {
                className: "relative flex-1 overflow-auto",
                "aria-label": "Inbox",
                onAction: selectionMode === "none" ? ()=>{} : undefined,
                selectionMode: selectionMode,
                selectedKeys: selectedKeys,
                onSelectionChange: setSelectedKeys,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _react.AnimatePresence), {
                    children: items.map((item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(ListItem, {
                            id: item.id,
                            textValue: [
                                item.sender,
                                item.date,
                                item.subject,
                                item.message
                            ].join('\n'),
                            onRemove: ()=>setItems(items.filter((i)=>i !== item)),
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                className: "flex flex-col text-md cursor-default",
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                                className: "font-bold text-lg m-0",
                                                children: item.sender
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                                className: "text-gray-500 m-0",
                                                children: item.date
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                        className: "m-0",
                                        children: item.subject
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                        className: "line-clamp-2 text-gray-500 dark:text-gray-400 m-0",
                                        children: item.message
                                    })
                                ]
                            })
                        }, item.id))
                })
            })
        ]
    });
}
function ListItem({ id, children, textValue, onRemove }) {
    let ref = (0, _react1.useRef)(null);
    let x = (0, _react.useMotionValue)(0);
    let isPresent = (0, _react.useIsPresent)();
    let xPx = (0, _react.useMotionTemplate)`${x}px`;
    // Align the text in the remove button to the left if the
    // user has swiped at least 80% of the width.
    let [align, setAlign] = (0, _react1.useState)("end");
    (0, _react.useMotionValueEvent)(x, "change", (x)=>{
        let width = ref.current?.offsetWidth ?? 0;
        let a = x < -width * 0.8 ? "start" : "end";
        setAlign(a);
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(MotionItem, {
        id: id,
        textValue: textValue,
        className: "outline-hidden group relative overflow-clip border-t border-0 border-solid last:border-b border-gray-200 dark:border-gray-800 pressed:bg-gray-200 dark:pressed:bg-gray-800 selected:bg-gray-200 dark:selected:bg-gray-800 focus-visible:outline-solid focus-visible:outline-blue-600 focus-visible:-outline-offset-2",
        layout: true,
        transition: {
            duration: 0.25
        },
        exit: {
            opacity: 0
        },
        // Take item out of the flow if it is being removed.
        style: {
            position: isPresent ? "relative" : "absolute"
        },
        children: ({ selectionMode, isSelected })=>// Content of the item can be swiped to reveal the delete button, or fully swiped to delete.
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _react.motion).div, {
                ref: ref,
                style: {
                    x,
                    "--x": xPx
                },
                className: "flex items-center",
                drag: selectionMode === "none" ? "x" : undefined,
                dragConstraints: {
                    right: 0
                },
                onDragEnd: (e, { offset })=>{
                    // If the user dragged past 80% of the width, remove the item
                    // otherwise animate back to the nearest snap point.
                    let v = offset.x > -20 ? 0 : -100;
                    let width = ref.current?.offsetWidth ?? 0;
                    if (x.get() < -width * 0.8) {
                        v = -width;
                        onRemove();
                    }
                    (0, _react.animate)(x, v, {
                        ...inertiaTransition,
                        min: v,
                        max: v
                    });
                },
                onDragStart: ()=>{
                    // Cancel react-aria press event when dragging starts.
                    document.dispatchEvent(new PointerEvent("pointercancel"));
                },
                children: [
                    selectionMode === "multiple" && /*#__PURE__*/ (0, _jsxRuntime.jsx)(SelectionCheckmark, {
                        isSelected: isSelected
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _react.motion).div, {
                        layout: true,
                        layoutDependency: selectionMode,
                        transition: {
                            duration: 0.25
                        },
                        className: "relative flex items-center border-box px-4 py-2 z-10",
                        children: children
                    }),
                    selectionMode === "none" && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
                        className: "bg-red-600 pressed:bg-red-700 cursor-default text-lg outline-hidden border-none transition-colors text-white flex items-center absolute top-0 left-[100%] py-2 h-full z-0 isolate focus-visible:outline focus-visible:outline-blue-600 focus-visible:-outline-offset-2",
                        style: {
                            // Calculate the size of the button based on the drag position,
                            // which is stored in a CSS variable above.
                            width: "max(100px, calc(-1 * var(--x)))",
                            justifyContent: align
                        },
                        onPress: onRemove,
                        // Move the button into view when it is focused with the keyboard
                        // (e.g. via the arrow keys).
                        onFocus: ()=>x.set(-100),
                        onBlur: ()=>x.set(0),
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _react.motion).span, {
                            initial: false,
                            className: "px-4",
                            animate: {
                                // Whenever the alignment changes, perform a keyframe animation
                                // between the previous position and new position. This is done
                                // by calculating a transform for the previous alignment and
                                // animating it back to zero.
                                transform: align === "start" ? [
                                    "translateX(calc(-100% - var(--x)))",
                                    "translateX(0)"
                                ] : [
                                    "translateX(calc(100% + var(--x)))",
                                    "translateX(0)"
                                ]
                            },
                            children: "Delete"
                        })
                    })
                ]
            })
    });
}
function SelectionCheckmark({ isSelected }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _react.motion).svg, {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "w-6 h-6 shrink-0 ml-4",
        initial: {
            x: -40
        },
        animate: {
            x: 0
        },
        transition: {
            duration: 0.25
        },
        children: [
            !isSelected && /*#__PURE__*/ (0, _jsxRuntime.jsx)("circle", {
                r: 9,
                cx: 12,
                cy: 12,
                stroke: "currentColor",
                fill: "none",
                strokeWidth: 1,
                className: "text-gray-400"
            }),
            isSelected && /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                className: "text-blue-600",
                fillRule: "evenodd",
                d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
                clipRule: "evenodd"
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","../tailwind.css":"fhDy2","../../../dist/index.js":"dy6h5","motion/react":[["animate","iobxA"],["AnimatePresence","7Fs1Z"],["motion","7NDeO"],["useIsPresent","je6VE"],["useMotionTemplate","2Ow3s"],["useMotionValue","dagTW"],["useMotionValueEvent","etDnc"]],"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fhDy2":[function() {},{}],"gOP0N":[function(require,module,exports,__globalThis) {
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

