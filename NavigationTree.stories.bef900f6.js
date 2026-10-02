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
})({"15IHx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Example", ()=>Example);
parcelHelpers.export(exports, "Sections", ()=>Sections);
var _jsxRuntime = require("preact/jsx-runtime");
var _button = require("../src/Button");
var _lucideReact = require("lucide-react");
var _navigationTree = require("../src/NavigationTree");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
const meta = {
    component: (0, _navigationTree.NavigationTree),
    parameters: {
        layout: 'centered'
    },
    tags: [
        'autodocs'
    ]
};
exports.default = meta;
function RoutedNavigationTree(props) {
    let [selectedRoute, setSelectedRoute] = (0, _react.useState)(props.defaultSelectedRoute);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.RouterProvider), {
        navigate: setSelectedRoute,
        children: props.children({
            selectedRoute
        })
    });
}
const Example = (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(RoutedNavigationTree, {
        defaultSelectedRoute: "/photos",
        children: ({ selectedRoute })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _navigationTree.NavigationTree), {
                "aria-label": "Files",
                selectedRoute: selectedRoute,
                defaultExpandedKeys: [
                    'files'
                ],
                ...args,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItem), {
                        id: "home",
                        href: "/home",
                        textValue: "Home",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _navigationTree.NavigationTreeItemContent), {
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemLink), {
                                    children: "Home"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _button.Button), {
                                    variant: "quiet",
                                    "aria-label": "More options",
                                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.MoreHorizontal), {
                                        size: 16,
                                        "aria-hidden": true
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _navigationTree.NavigationTreeItem), {
                        id: "files",
                        href: "/files",
                        textValue: "Files",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemContent), {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemLink), {
                                    children: "Files"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItem), {
                                id: "photos",
                                href: "/photos",
                                textValue: "Photos",
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemContent), {
                                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemLink), {
                                        children: "Photos"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItem), {
                                id: "videos",
                                href: "/videos",
                                textValue: "Videos",
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemContent), {
                                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemLink), {
                                        children: "Videos"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _navigationTree.NavigationTreeItem), {
                        id: "shared",
                        textValue: "Shared",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemContent), {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemLink), {
                                    children: "Shared"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItem), {
                                id: "food",
                                href: "/food",
                                textValue: "Food",
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemContent), {
                                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemLink), {
                                        children: "Food"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItem), {
                                id: "drinks",
                                href: "/drinks",
                                textValue: "Drinks",
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemContent), {
                                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemLink), {
                                        children: "Drinks"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
    });
const Sections = (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(RoutedNavigationTree, {
        defaultSelectedRoute: "/projects/apollo",
        children: ({ selectedRoute })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _navigationTree.NavigationTree), {
                "aria-label": "Workspace",
                selectedRoute: selectedRoute,
                ...args,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _navigationTree.NavigationTreeSection), {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeHeader), {
                                children: "Personal"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItem), {
                                href: "/home",
                                textValue: "Home",
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemContent), {
                                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemLink), {
                                        children: "Home"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItem), {
                                href: "/starred",
                                textValue: "Starred",
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemContent), {
                                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemLink), {
                                        children: "Starred"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _navigationTree.NavigationTreeSection), {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeHeader), {
                                children: "Projects"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItem), {
                                href: "/projects/apollo",
                                textValue: "Apollo",
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemContent), {
                                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemLink), {
                                        children: "Apollo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItem), {
                                href: "/projects/gemini",
                                textValue: "Gemini",
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemContent), {
                                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _navigationTree.NavigationTreeItemLink), {
                                        children: "Gemini"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
    });

},{"preact/jsx-runtime":"b2Fbn","../src/Button":"akb2g","lucide-react":[["MoreHorizontal","G8QE5","default"]],"../src/NavigationTree":"a32Y6","react":"gOP0N","../../../../dist/index.js":"dy6h5","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"akb2g":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3agqr":[function() {},{}],"G8QE5":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Ellipsis);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "1",
            key: "41hilf"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "12",
            r: "1",
            key: "1wjl8i"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "12",
            r: "1",
            key: "1pcz8c"
        }
    ]
];
const Ellipsis = (0, _createLucideIconJsDefault.default)("ellipsis", __iconNode);

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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"a32Y6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NavigationTree", ()=>NavigationTree);
parcelHelpers.export(exports, "NavigationTreeItemContent", ()=>NavigationTreeItemContent);
parcelHelpers.export(exports, "NavigationTreeItem", ()=>NavigationTreeItem);
parcelHelpers.export(exports, "NavigationTreeSection", ()=>NavigationTreeSection);
parcelHelpers.export(exports, "NavigationTreeHeader", ()=>NavigationTreeHeader);
parcelHelpers.export(exports, "NavigationTreeItemLink", ()=>NavigationTreeItemLink);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _lucideReact = require("lucide-react");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _navigationTreeCss = require("./NavigationTree.css");
'use client';
const RenderLinkContext = /*#__PURE__*/ (0, _reactDefault.default).createContext(undefined);
function NavigationTree({ renderLink, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(RenderLinkContext.Provider, {
        value: renderLink,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.NavigationTree), {
            ...props
        })
    });
}
function NavigationTreeItemContent(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.NavigationTreeItemContent), {
        children: ({ hasChildItems })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    props.children,
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
                        slot: "chevron",
                        isDisabled: !hasChildItems,
                        style: {
                            visibility: hasChildItems ? undefined : 'hidden'
                        },
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.ChevronRight), {
                            "aria-hidden": true
                        })
                    })
                ]
            })
    });
}
function NavigationTreeItem(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.NavigationTreeItem), {
        ...props
    });
}
function NavigationTreeSection(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.NavigationTreeSection), {
        ...props
    });
}
function NavigationTreeHeader(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.NavigationTreeHeader), {
        ...props
    });
}
function NavigationTreeItemLink({ render: renderProp, ...props }) {
    const contextRender = (0, _reactDefault.default).useContext(RenderLinkContext);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Link), {
        render: renderProp ?? contextRender,
        ...props
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","lucide-react":[["ChevronRight","cLIr3","default"]],"react":"gOP0N","./NavigationTree.css":"8SjL1","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cLIr3":[function(require,module,exports,__globalThis) {
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

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8SjL1":[function() {},{}],"5gQI0":[function(require,module,exports,__globalThis) {
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

