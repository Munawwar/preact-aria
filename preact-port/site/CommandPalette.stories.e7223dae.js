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
})({"kxzbF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Example", ()=>Example);
var _jsxRuntime = require("preact/jsx-runtime");
var _button = require("../src/Button");
var _commandPalette = require("../src/CommandPalette");
var _dialog = require("../src/Dialog");
var _menu = require("../src/Menu");
const meta = {
    component: (0, _commandPalette.CommandPalette),
    parameters: {
        layout: 'centered'
    },
    tags: [
        'autodocs'
    ]
};
exports.default = meta;
const Example = (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _dialog.DialogTrigger), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _button.Button), {
                children: [
                    "Open Command Palette ",
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("kbd", {
                        children: "\u2318 J"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _commandPalette.CommandPalette), {
                ...args,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menu.MenuItem), {
                        children: "Create new file..."
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menu.MenuItem), {
                        children: "Create new folder..."
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menu.MenuItem), {
                        children: "Assign to..."
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menu.MenuItem), {
                        children: "Assign to me"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menu.MenuItem), {
                        children: "Change status..."
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menu.MenuItem), {
                        children: "Change priority..."
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menu.MenuItem), {
                        children: "Add label..."
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menu.MenuItem), {
                        children: "Remove label..."
                    })
                ]
            })
        ]
    });

},{"preact/jsx-runtime":"b2Fbn","../src/Button":"akb2g","../src/CommandPalette":"QywGT","../src/Dialog":"d7fRz","../src/Menu":"cGR0g","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"akb2g":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3agqr":[function() {},{}],"QywGT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CommandPalette", ()=>CommandPalette);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _menu = require("./Menu");
var _searchField = require("./SearchField");
var _modal = require("./Modal");
var _react = require("react");
var _commandPaletteCss = require("./CommandPalette.css");
'use client';
function CommandPalette(props) {
    let triggerState = (0, _react.useContext)((0, _indexJs.OverlayTriggerStateContext));
    let isOpen = props.isOpen ?? triggerState?.isOpen;
    let onOpenChange = props.onOpenChange ?? triggerState?.setOpen;
    let { contains } = (0, _indexJs.useFilter)({
        sensitivity: 'base'
    });
    (0, _react.useEffect)(()=>{
        let isMacUA = /mac(os|intosh)/i.test(navigator.userAgent);
        const handleKeyDown = (e)=>{
            if (e.key === 'j' && (isMacUA ? e.metaKey : e.ctrlKey)) {
                e.preventDefault();
                onOpenChange(true);
            } else if (e.key === 'Escape') {
                e.preventDefault();
                onOpenChange(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return ()=>document.removeEventListener('keydown', handleKeyDown);
    }, [
        onOpenChange
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _modal.Modal), {
        isDismissable: true,
        isOpen: isOpen,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Dialog), {
            className: "command-palette-dialog",
            children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.Autocomplete), {
                filter: contains,
                ...props,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _searchField.SearchField), {
                        autoFocus: true,
                        "aria-label": "Search commands",
                        placeholder: "Search commands"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menu.Menu), {
                        ...props,
                        renderEmptyState: ()=>'No results found.'
                    })
                ]
            })
        })
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Menu":"cGR0g","./SearchField":"MJA5w","./Modal":"sqDYw","react":"gOP0N","./CommandPalette.css":"7i5lL","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cGR0g":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MenuTrigger", ()=>MenuTrigger);
parcelHelpers.export(exports, "Menu", ()=>Menu);
parcelHelpers.export(exports, "MenuLoadMoreItem", ()=>MenuLoadMoreItem);
parcelHelpers.export(exports, "MenuItem", ()=>MenuItem);
parcelHelpers.export(exports, "MenuSection", ()=>MenuSection);
parcelHelpers.export(exports, "SubmenuTrigger", ()=>SubmenuTrigger);
parcelHelpers.export(exports, "Text", ()=>(0, _content.Text));
parcelHelpers.export(exports, "Header", ()=>(0, _indexJs.Header));
parcelHelpers.export(exports, "Separator", ()=>(0, _indexJs.Separator));
parcelHelpers.export(exports, "Keyboard", ()=>(0, _indexJs.Keyboard));
var _jsxRuntime = require("preact/jsx-runtime");
var _lucideReact = require("lucide-react");
var _indexJs = require("../../../../dist/index.js");
var _popover = require("./Popover");
var _progressCircle = require("./ProgressCircle");
var _content = require("./Content");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _menuCss = require("./Menu.css");
'use client';
function MenuTrigger(props) {
    let [trigger, menu] = (0, _reactDefault.default).Children.toArray(props.children);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.MenuTrigger), {
        ...props,
        children: [
            trigger,
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popover.Popover), {
                children: menu
            })
        ]
    });
}
function Menu(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Menu), {
        ...props,
        children: props.children
    });
}
function MenuLoadMoreItem(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.MenuLoadMoreItem), {
        ...props,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _progressCircle.ProgressCircle), {
            isIndeterminate: true,
            "aria-label": "Loading more..."
        })
    });
}
function MenuItem(props) {
    let textValue = props.textValue || (typeof props.children === 'string' ? props.children : undefined);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.MenuItem), {
        ...props,
        textValue: textValue,
        children: ({ hasSubmenu, isSelected, selectionMode })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    isSelected && selectionMode === 'multiple' ? /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.Check), {}) : null,
                    isSelected && selectionMode === 'single' ? /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.Dot), {}) : null,
                    typeof props.children === 'string' ? /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _content.Text), {
                        slot: "label",
                        children: props.children
                    }) : props.children,
                    hasSubmenu && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.ChevronRight), {})
                ]
            })
    });
}
function MenuSection(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.MenuSection), {
        ...props
    });
}
function SubmenuTrigger(props) {
    let [trigger, menu] = (0, _reactDefault.default).Children.toArray(props.children);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.SubmenuTrigger), {
        ...props,
        children: [
            trigger,
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popover.Popover), {
                hideArrow: true,
                offset: -2,
                crossOffset: -4,
                children: menu
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","lucide-react":[["Check","hRXwG","default"],["ChevronRight","cLIr3","default"],["Dot","n8xe2","default"]],"../../../../dist/index.js":"dy6h5","./Popover":"lwcda","./ProgressCircle":"6UR4P","./Content":"11SAa","react":"gOP0N","./Menu.css":"bt7DW","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hRXwG":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Check);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
];
const Check = (0, _createLucideIconJsDefault.default)("check", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"i3cDK":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createLucideIcon);
var _react = require("react");
var _utilsJs = require("./shared/src/utils.js");
var _iconJs = require("./Icon.js");
var _iconJsDefault = parcelHelpers.interopDefault(_iconJs);
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, _react.forwardRef)(({ className, ...props }, ref)=>(0, _react.createElement)((0, _iconJsDefault.default), {
            ref,
            iconNode,
            className: (0, _utilsJs.mergeClasses)(`lucide-${(0, _utilsJs.toKebabCase)((0, _utilsJs.toPascalCase)(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, _utilsJs.toPascalCase)(iconName);
    return Component;
};

},{"react":"gOP0N","./shared/src/utils.js":"cFr0o","./Icon.js":"buQhf","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gOP0N":[function(require,module,exports,__globalThis) {
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

},{"preact/compat":"8RhID","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cFr0o":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasA11yProp", ()=>hasA11yProp);
parcelHelpers.export(exports, "mergeClasses", ()=>mergeClasses);
parcelHelpers.export(exports, "toCamelCase", ()=>toCamelCase);
parcelHelpers.export(exports, "toKebabCase", ()=>toKebabCase);
parcelHelpers.export(exports, "toPascalCase", ()=>toPascalCase);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"buQhf":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Icon);
var _react = require("react");
var _defaultAttributesJs = require("./defaultAttributes.js");
var _defaultAttributesJsDefault = parcelHelpers.interopDefault(_defaultAttributesJs);
var _utilsJs = require("./shared/src/utils.js");
const Icon = (0, _react.forwardRef)(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, _react.createElement)("svg", {
        ref,
        ...(0, _defaultAttributesJsDefault.default),
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, _utilsJs.mergeClasses)("lucide", className),
        ...!children && !(0, _utilsJs.hasA11yProp)(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, _react.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));

},{"react":"gOP0N","./defaultAttributes.js":"cIkT5","./shared/src/utils.js":"cFr0o","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cIkT5":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>defaultAttributes);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cLIr3":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>ChevronRight);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
const ChevronRight = (0, _createLucideIconJsDefault.default)("chevron-right", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"n8xe2":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Dot);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "circle",
        {
            cx: "12.1",
            cy: "12.1",
            r: "1",
            key: "18d7e5"
        }
    ]
];
const Dot = (0, _createLucideIconJsDefault.default)("dot", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lwcda":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Popover", ()=>Popover);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _popoverCss = require("./Popover.css");
'use client';
function Popover({ children, hideArrow, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Popover), {
        ...props,
        className: (0, _clsxDefault.default)('react-aria-Popover', props.className),
        children: ({ trigger })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    !hideArrow && trigger !== 'MenuTrigger' && trigger !== 'SubmenuTrigger' && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.OverlayArrow), {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("svg", {
                            width: 12,
                            height: 12,
                            viewBox: "0 0 12 12",
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                                d: "M0 0 L6 6 L12 0"
                            })
                        })
                    }),
                    children
                ]
            })
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","clsx":"5gQI0","./Popover.css":"cXbjk","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5gQI0":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cXbjk":[function() {},{}],"11SAa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Heading", ()=>Heading);
parcelHelpers.export(exports, "Text", ()=>Text);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _contentCss = require("./Content.css");
function Heading(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Heading), {
        ...props
    });
}
function Text(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Text), {
        ...props
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Content.css":"gpu3J","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gpu3J":[function() {},{}],"bt7DW":[function() {},{}],"MJA5w":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SearchField", ()=>SearchField);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _form = require("./Form");
var _lucideReact = require("lucide-react");
var _searchFieldCss = require("./SearchField.css");
'use client';
function SearchField({ label, description, errorMessage, placeholder, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.SearchField), {
        ...props,
        children: [
            label && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _form.Label), {
                children: label
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.Search), {
                size: 18
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Input), {
                placeholder: placeholder,
                className: "react-aria-Input inset"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
                className: "clear-button",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.X), {
                    size: 14
                })
            }),
            description && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _form.Description), {
                children: description
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _form.FieldError), {
                children: errorMessage
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Form":"dn6GY","lucide-react":[["Search","bl3bq","default"],["X","81ZMY","default"]],"./SearchField.css":"bSNQL","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dn6GY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Form", ()=>Form);
parcelHelpers.export(exports, "Label", ()=>Label);
parcelHelpers.export(exports, "FieldError", ()=>FieldError);
parcelHelpers.export(exports, "Description", ()=>Description);
parcelHelpers.export(exports, "FieldButton", ()=>FieldButton);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _formCss = require("./Form.css");
var _content = require("./Content");
'use client';
function Form(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Form), {
        ...props
    });
}
function Label(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Label), {
        ...props
    });
}
function FieldError(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.FieldError), {
        ...props
    });
}
function Description(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _content.Text), {
        slot: "description",
        className: "field-description",
        ...props
    });
}
function FieldButton(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
        ...props,
        className: "field-Button"
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Form.css":"3weo6","./Content":"11SAa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3weo6":[function() {},{}],"bl3bq":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Search);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, _createLucideIconJsDefault.default)("search", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"81ZMY":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>X);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X = (0, _createLucideIconJsDefault.default)("x", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bSNQL":[function() {},{}],"sqDYw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Modal", ()=>Modal);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _modalCss = require("./Modal.css");
'use client';
function Modal(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Modal), {
        ...props
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Modal.css":"cJtcq","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cJtcq":[function() {},{}],"7i5lL":[function() {},{}],"d7fRz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Dialog", ()=>Dialog);
parcelHelpers.export(exports, "DialogTrigger", ()=>DialogTrigger);
parcelHelpers.export(exports, "Heading", ()=>(0, _indexJs.Heading));
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _dialogCss = require("./Dialog.css");
'use client';
function Dialog(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Dialog), {
        ...props
    });
}
function DialogTrigger(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.DialogTrigger), {
        ...props
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Dialog.css":"7DiIx","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7DiIx":[function() {},{}]},[], null, "parcelRequire037a", {})

