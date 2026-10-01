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
})({"e4MON":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Example", ()=>Example);
var _jsxRuntime = require("preact/jsx-runtime");
var _tree = require("../src/Tree");
const meta = {
    component: (0, _tree.Tree),
    parameters: {
        layout: 'centered'
    },
    tags: [
        'autodocs'
    ]
};
exports.default = meta;
const Example = (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tree.Tree), {
        "aria-label": "Files",
        ...args,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tree.TreeItem), {
                title: "Documents",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tree.TreeItem), {
                    title: "Project",
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tree.TreeItem), {
                        title: "Weekly Report"
                    })
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tree.TreeItem), {
                title: "Photos",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tree.TreeItem), {
                        title: "Image 1"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tree.TreeItem), {
                        title: "Image 2"
                    })
                ]
            })
        ]
    });
Example.args = {
    style: {
        height: '300px'
    },
    defaultExpandedKeys: [
        'documents',
        'photos',
        'project'
    ]
};

},{"preact/jsx-runtime":"b2Fbn","../src/Tree":"crwID","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"crwID":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tree", ()=>Tree);
parcelHelpers.export(exports, "TreeItemContent", ()=>TreeItemContent);
parcelHelpers.export(exports, "TreeItem", ()=>TreeItem);
parcelHelpers.export(exports, "TreeLoadMoreItem", ()=>TreeLoadMoreItem);
parcelHelpers.export(exports, "TreeSection", ()=>TreeSection);
parcelHelpers.export(exports, "TreeHeader", ()=>TreeHeader);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _lucideReact = require("lucide-react");
var _checkbox = require("./Checkbox");
var _progressCircle = require("./ProgressCircle");
var _treeCss = require("./Tree.css");
'use client';
function Tree(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Tree), {
        ...props
    });
}
function TreeItemContent(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.TreeItemContent), {
        children: ({ selectionBehavior, selectionMode, allowsDragging })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    allowsDragging && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
                        slot: "drag",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.GripVertical), {
                            size: 16
                        })
                    }),
                    selectionBehavior === 'toggle' && selectionMode !== 'none' && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _checkbox.Checkbox), {
                        slot: "selection"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
                        slot: "chevron",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.ChevronRight), {})
                    }),
                    props.children
                ]
            })
    });
}
function TreeItem(props) {
    let textValue = typeof props.title === 'string' ? props.title : '';
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.TreeItem), {
        textValue: textValue,
        ...props,
        children: props.title != null ? /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)(TreeItemContent, {
                    children: props.title
                }),
                props.children
            ]
        }) : props.children
    });
}
function TreeLoadMoreItem(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.TreeLoadMoreItem), {
        ...props,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _progressCircle.ProgressCircle), {
            isIndeterminate: true,
            "aria-label": "Loading more..."
        })
    });
}
function TreeSection(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.TreeSection), {
        ...props
    });
}
function TreeHeader(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.TreeHeader), {
        ...props
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","lucide-react":[["ChevronRight","cLIr3","default"],["GripVertical","ij7cm","default"]],"./Checkbox":"2VGNL","./ProgressCircle":"6UR4P","./Tree.css":"k07Xk","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cLIr3":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ij7cm":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>GripVertical);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "circle",
        {
            cx: "9",
            cy: "12",
            r: "1",
            key: "1vctgf"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "5",
            r: "1",
            key: "hp0tcf"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "19",
            r: "1",
            key: "fkjjf6"
        }
    ],
    [
        "circle",
        {
            cx: "15",
            cy: "12",
            r: "1",
            key: "1tmaij"
        }
    ],
    [
        "circle",
        {
            cx: "15",
            cy: "5",
            r: "1",
            key: "19l28e"
        }
    ],
    [
        "circle",
        {
            cx: "15",
            cy: "19",
            r: "1",
            key: "f4zoj3"
        }
    ]
];
const GripVertical = (0, _createLucideIconJsDefault.default)("grip-vertical", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2VGNL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Checkbox", ()=>Checkbox);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _checkboxCss = require("./Checkbox.css");
var _form = require("./Form");
'use client';
function Checkbox({ children, description, errorMessage, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.CheckboxField), {
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.CheckboxButton), {
                children: ({ isIndeterminate })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                className: "indicator",
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("svg", {
                                    viewBox: "0 0 18 18",
                                    "aria-hidden": "true",
                                    children: isIndeterminate ? /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                                        x: 1,
                                        y: 7.5,
                                        width: 16,
                                        height: 3
                                    }) : /*#__PURE__*/ (0, _jsxRuntime.jsx)("polyline", {
                                        points: "2 9 7 14 16 4"
                                    })
                                }, isIndeterminate ? 'indeterminate' : 'check')
                            }),
                            children
                        ]
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

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Checkbox.css":"gRkK7","./Form":"dn6GY","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gRkK7":[function() {},{}],"dn6GY":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Form.css":"3weo6","./Content":"11SAa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3weo6":[function() {},{}],"11SAa":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Content.css":"gpu3J","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gpu3J":[function() {},{}],"6UR4P":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k07Xk":[function() {},{}],"5gQI0":[function(require,module,exports,__globalThis) {
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

