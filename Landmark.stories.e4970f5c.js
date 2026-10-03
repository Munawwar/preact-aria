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
})({"21Ni8":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
/*
 * Copyright 2021 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "FlatLandmarks", ()=>FlatLandmarks);
parcelHelpers.export(exports, "NestedLandmarks", ()=>NestedLandmarks);
parcelHelpers.export(exports, "TableLandmark", ()=>TableLandmark);
parcelHelpers.export(exports, "ApplicationWithLandmarks", ()=>ApplicationWithLandmarks);
parcelHelpers.export(exports, "DuplicateRolesWithLabels", ()=>DuplicateRolesWithLabels);
parcelHelpers.export(exports, "DuplicateRolesWithNoLabels", ()=>DuplicateRolesWithNoLabels);
parcelHelpers.export(exports, "DuplicateRolesWithSameLabels", ()=>DuplicateRolesWithSameLabels);
parcelHelpers.export(exports, "OneWithNoFocusableChildren", ()=>OneWithNoFocusableChildren);
parcelHelpers.export(exports, "AllWithNoFocusableChildren", ()=>AllWithNoFocusableChildren);
parcelHelpers.export(exports, "IframeExampleStory", ()=>IframeExampleStory);
var _jsxRuntime = require("preact/jsx-runtime");
var _actionGroupTs = require("../../../@adobe/react-spectrum/exports/ActionGroup.ts");
var _useLandmarkTs = require("../../../../../../../vendor/react-aria/src/landmark/useLandmark.ts");
var _tableViewTs = require("../../../@adobe/react-spectrum/exports/TableView.ts");
var _checkboxTs = require("../../../@adobe/react-spectrum/exports/Checkbox.ts");
var _classNamesTs = require("../../../@adobe/react-spectrum/src/utils/classNames.ts");
var _flexTs = require("../../../@adobe/react-spectrum/exports/Flex.ts");
var _itemTs = require("../../../../../../../vendor/react-stately/exports/Item.ts");
var _linkTs = require("../../../@adobe/react-spectrum/exports/Link.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _searchFieldTs = require("../../../@adobe/react-spectrum/exports/SearchField.ts");
var _indexCss = require("./index.css");
var _indexCssDefault = parcelHelpers.interopDefault(_indexCss);
var _textFieldTs = require("../../../@adobe/react-spectrum/exports/TextField.ts");
var _useDOMRefTs = require("../../../@adobe/react-spectrum/src/utils/useDOMRef.ts");
var _stylePropsTs = require("../../../@adobe/react-spectrum/src/utils/styleProps.ts");
const meta = {
    title: 'Landmark',
    parameters: {
        providerSwitcher: {
            mainElement: false
        }
    }
};
exports.default = meta;
const Template = (props)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(Example, {
        ...props
    });
const NestedTemplate = (props)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(NestedExample, {
        ...props
    });
const TableTemplate = (props)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(TableExample, {
        ...props
    });
const ApplicationTemplate = (props)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(ApplicationExample, {
        ...props
    });
function Main(props) {
    let ref = (0, _useDOMRefTs.useFocusableRef)(null);
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(props);
    let { landmarkProps } = (0, _useLandmarkTs.useLandmark)({
        ...props,
        role: 'main'
    }, ref);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("main", {
        "aria-label": "Danni's unicorn corral",
        ref: ref,
        ...props,
        ...landmarkProps,
        ...styleProps,
        children: props.children
    });
}
function Navigation(props) {
    let ref = (0, _useDOMRefTs.useFocusableRef)(null);
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(props);
    let { landmarkProps } = (0, _useLandmarkTs.useLandmark)({
        ...props,
        role: 'navigation'
    }, ref);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("nav", {
        "aria-label": "Rainbow lookout",
        ref: ref,
        ...props,
        ...landmarkProps,
        ...styleProps,
        children: props.children
    });
}
function Region(props) {
    let ref = (0, _useDOMRefTs.useFocusableRef)(null);
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(props);
    let { landmarkProps } = (0, _useLandmarkTs.useLandmark)({
        ...props,
        role: 'region'
    }, ref);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("article", {
        "aria-label": "The greens",
        ref: ref,
        ...props,
        ...landmarkProps,
        ...styleProps,
        children: props.children
    });
}
function Search(props) {
    let ref = (0, _useDOMRefTs.useFocusableRef)(null);
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(props);
    let { landmarkProps } = (0, _useLandmarkTs.useLandmark)({
        ...props,
        role: 'search'
    }, ref);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("form", {
        "aria-label": "Magic seeing eye",
        ref: ref,
        ...props,
        ...landmarkProps,
        ...styleProps,
        className: (0, _classNamesTs.classNames)((0, _indexCssDefault.default), 'landmark'),
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _searchFieldTs.SearchField), {
            label: "Search"
        })
    });
}
function Example() {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Navigation, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        children: "Navigation Landmark"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/home",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/about",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/contact",
                                    children: "Contact"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Main, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        children: "Main Landmark"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textFieldTs.TextField), {
                        label: "First Name"
                    })
                ]
            })
        ]
    });
}
function DuplicateRolesWithLabelsExample() {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Navigation, {
                "aria-label": "First Nav",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        children: "Navigation Landmark with 'First Nav' label"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/home",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/about",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/contact",
                                    children: "Contact"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Navigation, {
                "aria-label": "Second Nav",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        children: "Navigation Landmark with 'Second Nav' label"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/home",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/about",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/contact",
                                    children: "Contact"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Main, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        children: "Main Landmark"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textFieldTs.TextField), {
                        label: "First Name"
                    })
                ]
            })
        ]
    });
}
function DuplicateRolesWithSameLabelsExample() {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Navigation, {
                "aria-label": "First Nav",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        children: "Navigation Landmark with 'First Nav' label"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/home",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/about",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/contact",
                                    children: "Contact"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Navigation, {
                "aria-label": "First Nav",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        children: "Navigation Landmark with 'First Nav' label"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/home",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/about",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/contact",
                                    children: "Contact"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Main, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        children: "Main Landmark"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textFieldTs.TextField), {
                        label: "First Name"
                    })
                ]
            })
        ]
    });
}
function DuplicateRolesNoLabelExample() {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Navigation, {
                "aria-label": undefined,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        children: "Navigation Landmark with no label"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/home",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/about",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/contact",
                                    children: "Contact"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Navigation, {
                "aria-label": undefined,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        children: "Navigation Landmark with no label"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/home",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/about",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "/contact",
                                    children: "Contact"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Main, {
                "aria-label": undefined,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        children: "Main Landmark"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textFieldTs.TextField), {
                        label: "First Name"
                    })
                ]
            })
        ]
    });
}
function OneWithNoFocusableChildrenExample() {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textFieldTs.TextField), {
                label: "First Name"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Main, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        children: "Main Landmark"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        children: "No focusable children"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textFieldTs.TextField), {
                label: "First Name"
            })
        ]
    });
}
function AllWithNoFocusableChildrenExample() {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Region, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        children: "Region Landmark"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        children: "No focusable children"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textFieldTs.TextField), {
                label: "First Name"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Main, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        children: "Main Landmark"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        children: "No focusable children"
                    })
                ]
            })
        ]
    });
}
function NestedExample() {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Main, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                    children: "Main Landmark"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textFieldTs.TextField), {
                    label: "First Name"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Region, {
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                            children: "Region Landmark inside Main"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _checkboxTs.Checkbox), {
                            children: "Checkbox label"
                        })
                    ]
                })
            ]
        })
    });
}
// TODO: known accessiblity failure https://github.com/adobe/react-spectrum/wiki/Known-accessibility-false-positives#tableview
function TableExample() {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Navigation, {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _actionGroupTs.ActionGroup), {
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _itemTs.Item), {
                            children: "One"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _itemTs.Item), {
                            children: "Two"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _itemTs.Item), {
                            children: "Three"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Main, {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableViewTs.TableView), {
                    "aria-label": "Table",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableViewTs.TableHeader), {
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Column), {
                                    allowsSorting: true,
                                    children: "Foo"
                                }, "foo"),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Column), {
                                    allowsSorting: true,
                                    children: "Bar"
                                }, "bar"),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Column), {
                                    children: "Baz"
                                }, "baz")
                            ]
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableViewTs.TableBody), {
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableViewTs.Row), {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Cell), {
                                            children: "Foo 1"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Cell), {
                                            children: "Bar 1"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Cell), {
                                            children: "Baz 1"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableViewTs.Row), {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Cell), {
                                            children: "Foo 2"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Cell), {
                                            children: "Bar 2"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Cell), {
                                            children: "Baz 2"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableViewTs.Row), {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Cell), {
                                            children: "Foo 3"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Cell), {
                                            children: "Bar 3"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Cell), {
                                            children: "Baz 3"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
// ['main', 'region', 'search', 'navigation', 'form', 'banner', 'contentinfo', 'complementary']
function ApplicationExample() {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        className: (0, _classNamesTs.classNames)((0, _indexCssDefault.default), 'application'),
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Region, {
                UNSAFE_className: (0, _classNamesTs.classNames)((0, _indexCssDefault.default), 'globalnav'),
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _flexTs.Flex), {
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _linkTs.Link), {
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                href: "//react-spectrum.com",
                                children: "React Spectrum"
                            })
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(Search, {})
                    ]
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Navigation, {
                UNSAFE_className: (0, _classNamesTs.classNames)((0, _indexCssDefault.default), 'navigation'),
                "aria-label": "Site Nav",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _actionGroupTs.ActionGroup), {
                    orientation: "vertical",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _itemTs.Item), {
                            children: "One"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _itemTs.Item), {
                            children: "Two"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _itemTs.Item), {
                            children: "Three"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Main, {
                UNSAFE_className: (0, _classNamesTs.classNames)((0, _indexCssDefault.default), 'main'),
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableViewTs.TableView), {
                    "aria-label": "Table",
                    justifySelf: "stretch",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableViewTs.TableHeader), {
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Column), {
                                    allowsSorting: true,
                                    children: "Foo"
                                }, "foo"),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Column), {
                                    allowsSorting: true,
                                    children: "Bar"
                                }, "bar"),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Column), {
                                    children: "Baz"
                                }, "baz")
                            ]
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableViewTs.TableBody), {
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableViewTs.Row), {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Cell), {
                                            children: "Foo 1"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Cell), {
                                            children: "Bar 1"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Cell), {
                                            children: "Baz 1"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableViewTs.Row), {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Cell), {
                                            children: "Foo 2"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Cell), {
                                            children: "Bar 2"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Cell), {
                                            children: "Baz 2"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableViewTs.Row), {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Cell), {
                                            children: "Foo 3"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Cell), {
                                            children: "Bar 3"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableViewTs.Cell), {
                                            children: "Baz 3"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Navigation, {
                UNSAFE_className: (0, _classNamesTs.classNames)((0, _indexCssDefault.default), 'navigation-content'),
                "aria-label": "Content Nav",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _actionGroupTs.ActionGroup), {
                    orientation: "vertical",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _itemTs.Item), {
                            children: "One"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _itemTs.Item), {
                            children: "Two"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _itemTs.Item), {
                            children: "Three"
                        })
                    ]
                })
            })
        ]
    });
}
function IframeExample() {
    // oxlint-disable-next-line react/react-compiler
    let controller = (0, _react.useMemo)(()=>(0, _useLandmarkTs.UNSTABLE_createLandmarkController)(), []);
    (0, _react.useEffect)(()=>()=>controller.dispose(), [
        controller
    ]);
    let onLoad = (e)=>{
        let iframe = e.target;
        let window1 = iframe.contentWindow;
        let document = window1?.document;
        if (!window1 || !document) return;
        let prevFocusedElement = null;
        window1.addEventListener('react-aria-landmark-navigation', (e)=>{
            e.preventDefault();
            if (!window1 || !document) return;
            let el = document.activeElement;
            if (el !== document.body) prevFocusedElement = el;
            // Prevent focus scope from stealing focus back when we move focus to the iframe.
            document.body.setAttribute('data-react-aria-top-layer', 'true');
            window1.parent.postMessage({
                type: 'landmark-navigation',
                direction: e.detail.direction
            });
            setTimeout(()=>{
                document?.body.removeAttribute('data-react-aria-top-layer');
            }, 100);
        });
        // When the iframe is re-focused, restore focus back inside where it was before.
        window1.addEventListener('focus', ()=>{
            if (prevFocusedElement) {
                prevFocusedElement.focus();
                prevFocusedElement = null;
            }
        });
        // Move focus to first or last landmark when we receive a message from the parent page.
        window1.addEventListener('message', (e)=>{
            if (e.data.type === 'landmark-navigation') // (Can't use LandmarkController in this example because we need the controller instance inside the iframe)
            document?.body.dispatchEvent(new KeyboardEvent('keydown', {
                key: 'F6',
                shiftKey: e.data.direction === 'backward',
                bubbles: true
            }));
        });
    };
    let ref = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        let onMessage = (e)=>{
            let iframe = ref.current;
            if (e.data.type === 'landmark-navigation') {
                // Move focus to the iframe so that when focus is restored there, and we can redirect it back inside (below).
                iframe?.focus();
                // Now re-dispatch the keyboard event so landmark navigation outside the iframe picks it up.
                controller.navigate(e.data.direction);
            }
        };
        window.addEventListener('message', onMessage);
        return ()=>window.removeEventListener('message', onMessage);
    }, [
        controller
    ]);
    let { landmarkProps } = (0, _useLandmarkTs.useLandmark)({
        role: 'main',
        focus (direction) {
            // when iframe landmark receives focus via landmark navigation, go to first/last landmark inside iframe.
            ref.current?.contentWindow?.postMessage({
                type: 'landmark-navigation',
                direction
            });
        }
    }, ref);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        className: (0, _classNamesTs.classNames)((0, _indexCssDefault.default), 'application'),
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Region, {
                UNSAFE_className: (0, _classNamesTs.classNames)((0, _indexCssDefault.default), 'globalnav'),
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _flexTs.Flex), {
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _linkTs.Link), {
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                href: "//react-spectrum.com",
                                children: "React Spectrum"
                            })
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(Search, {})
                    ]
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Navigation, {
                UNSAFE_className: (0, _classNamesTs.classNames)((0, _indexCssDefault.default), 'navigation'),
                "aria-label": "Site Nav",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _actionGroupTs.ActionGroup), {
                    orientation: "vertical",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _itemTs.Item), {
                            children: "One"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _itemTs.Item), {
                            children: "Two"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _itemTs.Item), {
                            children: "Three"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("iframe", {
                ref: ref,
                ...landmarkProps,
                title: "iframe",
                style: {
                    width: '100%',
                    height: '100%'
                },
                src: "iframe.html?providerSwitcher-express=false&providerSwitcher-toastPosition=bottom&providerSwitcher-locale=&providerSwitcher-theme=&providerSwitcher-scale=&args=&id=landmark--application-with-landmarks&viewMode=story",
                onLoad: onLoad,
                tabIndex: -1
            })
        ]
    });
}
const FlatLandmarks = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(Template, {
            ...args
        })
};
const NestedLandmarks = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(NestedTemplate, {
            ...args
        })
};
const TableLandmark = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(TableTemplate, {
            ...args
        }),
    parameters: {
        a11y: {
            config: {
                // Fails due to TableView's known issue, ignoring here since it isn't pertinent to the story
                rules: [
                    {
                        id: 'aria-required-children',
                        selector: '*:not([role="grid"])'
                    }
                ]
            }
        }
    }
};
const ApplicationWithLandmarks = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(ApplicationTemplate, {
            ...args
        }),
    parameters: {
        a11y: {
            config: {
                // Fails due to TableView's known issue, ignoring here since it isn't pertinent to the story
                rules: [
                    {
                        id: 'aria-required-children',
                        selector: '*:not([role="grid"])'
                    }
                ]
            }
        }
    }
};
const DuplicateRolesWithLabels = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(DuplicateRolesWithLabelsExample, {
            ...args
        })
};
const DuplicateRolesWithNoLabels = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(DuplicateRolesNoLabelExample, {
            ...args
        }),
    parameters: {
        a11y: {
            config: {
                rules: [
                    {
                        id: 'landmark-unique',
                        enabled: false
                    }
                ]
            }
        }
    }
};
const DuplicateRolesWithSameLabels = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(DuplicateRolesWithSameLabelsExample, {
            ...args
        }),
    parameters: {
        a11y: {
            config: {
                rules: [
                    {
                        id: 'landmark-unique',
                        enabled: false
                    }
                ]
            }
        }
    }
};
const OneWithNoFocusableChildren = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(OneWithNoFocusableChildrenExample, {
            ...args
        })
};
const AllWithNoFocusableChildren = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(AllWithNoFocusableChildrenExample, {
            ...args
        })
};
const IframeExampleStory = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(IframeExample, {
            ...args
        }),
    parameters: {
        a11y: {
            config: {
                rules: [
                    {
                        id: 'aria-allowed-role',
                        enabled: false
                    }
                ]
            }
        }
    },
    name: 'iframe example'
};

},{"preact/jsx-runtime":"b2Fbn","../../../@adobe/react-spectrum/exports/ActionGroup.ts":"cwLc6","../../../../../../../vendor/react-aria/src/landmark/useLandmark.ts":"lb7ab","../../../@adobe/react-spectrum/exports/TableView.ts":[["Cell","lGCOt"],["Column","h5XsO"],["TableView","h5XsO"],["Row","jvPvA"],["TableBody","aZKVl"],["TableHeader","9KVrS"]],"../../../@adobe/react-spectrum/exports/Checkbox.ts":"fkDkO","../../../@adobe/react-spectrum/src/utils/classNames.ts":"dsWbb","../../../@adobe/react-spectrum/exports/Flex.ts":"4d0jS","../../../../../../../vendor/react-stately/exports/Item.ts":"9bTDv","../../../@adobe/react-spectrum/exports/Link.ts":"aQOX1","react":"gOP0N","../../../@adobe/react-spectrum/exports/SearchField.ts":"jZvJw","./index.css":"8Ac1L","../../../@adobe/react-spectrum/exports/TextField.ts":"4MKru","../../../@adobe/react-spectrum/src/utils/useDOMRef.ts":"ltu01","../../../@adobe/react-spectrum/src/utils/styleProps.ts":"7B0Vi","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lb7ab":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2022 Adobe. All rights reserved.
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
/** Creates a LandmarkController, which allows programmatic navigation of landmarks. */ parcelHelpers.export(exports, "UNSTABLE_createLandmarkController", ()=>UNSTABLE_createLandmarkController);
/**
 * Provides landmark navigation in an application. Call this with a role and label to register a
 * landmark navigable with F6.
 *
 * @param props - Props for the landmark.
 * @param ref - Ref to the landmark.
 */ parcelHelpers.export(exports, "useLandmark", ()=>useLandmark);
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _react = require("react");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _indexJs = require("use-sync-external-store/shim/index.js");
// Increment this version number whenever the
// LandmarkManagerApi or Landmark interfaces change.
const LANDMARK_API_VERSION = 1;
// Symbol under which the singleton landmark manager instance is attached to the document.
const landmarkSymbol = Symbol.for('react-aria-landmark-manager');
function subscribe(fn) {
    document.addEventListener('react-aria-landmark-manager-change', fn);
    return ()=>document.removeEventListener('react-aria-landmark-manager-change', fn);
}
function getLandmarkManager() {
    if (typeof document === 'undefined') return null;
    // Reuse an existing instance if it has the same or greater version.
    let instance = document[landmarkSymbol];
    if (instance && instance.version >= LANDMARK_API_VERSION) return instance;
    // Otherwise, create a new instance and dispatch an event so anything using the existing
    // instance updates and re-registers their landmarks with the new one.
    document[landmarkSymbol] = new LandmarkManager();
    document.dispatchEvent(new CustomEvent('react-aria-landmark-manager-change'));
    return document[landmarkSymbol];
}
// Subscribes a React component to the current landmark manager instance.
function useLandmarkManager() {
    return (0, _indexJs.useSyncExternalStore)(subscribe, getLandmarkManager, getLandmarkManager);
}
class LandmarkManager {
    landmarks = [];
    isListening = false;
    refCount = 0;
    version = LANDMARK_API_VERSION;
    constructor(){
        this.f6Handler = this.f6Handler.bind(this);
        this.focusinHandler = this.focusinHandler.bind(this);
        this.focusoutHandler = this.focusoutHandler.bind(this);
    }
    setupIfNeeded() {
        if (this.isListening) return;
        document.addEventListener('keydown', this.f6Handler, {
            capture: true
        });
        document.addEventListener('focusin', this.focusinHandler, {
            capture: true
        });
        document.addEventListener('focusout', this.focusoutHandler, {
            capture: true
        });
        this.isListening = true;
    }
    teardownIfNeeded() {
        if (!this.isListening || this.landmarks.length > 0 || this.refCount > 0) return;
        document.removeEventListener('keydown', this.f6Handler, {
            capture: true
        });
        document.removeEventListener('focusin', this.focusinHandler, {
            capture: true
        });
        document.removeEventListener('focusout', this.focusoutHandler, {
            capture: true
        });
        this.isListening = false;
    }
    focusLandmark(landmark, direction) {
        this.landmarks.find((l)=>l.ref.current === landmark)?.focus?.(direction);
    }
    /**
   * Return set of landmarks with a specific role.
   */ getLandmarksByRole(role) {
        return new Set(this.landmarks.filter((l)=>l.role === role));
    }
    /**
   * Return first landmark with a specific role.
   */ getLandmarkByRole(role) {
        return this.landmarks.find((l)=>l.role === role);
    }
    addLandmark(newLandmark) {
        this.setupIfNeeded();
        if (this.landmarks.find((landmark)=>landmark.ref === newLandmark.ref) || !newLandmark.ref.current) return;
        this.landmarks.filter((landmark)=>landmark.role === 'main').length;
        if (this.landmarks.length === 0) {
            this.landmarks = [
                newLandmark
            ];
            this.checkLabels(newLandmark.role);
            return;
        }
        // Binary search to insert new landmark based on position in document relative to existing landmarks.
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        let start = 0;
        let end = this.landmarks.length - 1;
        while(start <= end){
            let mid = Math.floor((start + end) / 2);
            let comparedPosition = newLandmark.ref.current.compareDocumentPosition(this.landmarks[mid].ref.current);
            let isNewAfterExisting = Boolean(comparedPosition & Node.DOCUMENT_POSITION_PRECEDING || comparedPosition & Node.DOCUMENT_POSITION_CONTAINS);
            if (isNewAfterExisting) start = mid + 1;
            else end = mid - 1;
        }
        this.landmarks.splice(start, 0, newLandmark);
        this.checkLabels(newLandmark.role);
    }
    updateLandmark(landmark) {
        let index = this.landmarks.findIndex((l)=>l.ref === landmark.ref);
        if (index >= 0) {
            this.landmarks[index] = {
                ...this.landmarks[index],
                ...landmark
            };
            this.checkLabels(this.landmarks[index].role);
        }
    }
    removeLandmark(ref) {
        this.landmarks = this.landmarks.filter((landmark)=>landmark.ref !== ref);
        this.teardownIfNeeded();
    }
    /**
   * Warn if there are 2+ landmarks with the same role but no label.
   * Labels for landmarks with the same role must also be unique.
   *
   * See https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/.
   */ checkLabels(role) {
        let landmarksWithRole = this.getLandmarksByRole(role);
        if (landmarksWithRole.size > 1) {
            let duplicatesWithoutLabel = [
                ...landmarksWithRole
            ].filter((landmark)=>!landmark.label);
            duplicatesWithoutLabel.length;
            var landmark;
            var label, landmark1, landmark2;
        }
    }
    /**
   * Get the landmark that is the closest parent in the DOM.
   * Returns undefined if no parent is a landmark.
   */ closestLandmark(element) {
        let landmarkMap = new Map(this.landmarks.map((l)=>[
                l.ref.current,
                l
            ]));
        let currentElement = element;
        while(currentElement && !landmarkMap.has(currentElement) && currentElement !== document.body && currentElement.parentElement)currentElement = currentElement.parentElement;
        return landmarkMap.get(currentElement);
    }
    /**
   * Gets the next landmark, in DOM focus order, or previous if backwards is specified.
   * If last landmark, next should be the first landmark.
   * If not inside a landmark, will return first landmark.
   * Returns undefined if there are no landmarks.
   */ getNextLandmark(element, { backward }) {
        let currentLandmark = this.closestLandmark(element);
        let nextLandmarkIndex = backward ? this.landmarks.length - 1 : 0;
        if (currentLandmark) nextLandmarkIndex = this.landmarks.indexOf(currentLandmark) + (backward ? -1 : 1);
        let wrapIfNeeded = ()=>{
            // When we reach the end of the landmark sequence, fire a custom event that can be listened for by applications.
            // If this event is canceled, we return immediately. This can be used to implement landmark navigation across iframes.
            if (nextLandmarkIndex < 0) {
                if (!element.dispatchEvent(new CustomEvent('react-aria-landmark-navigation', {
                    detail: {
                        direction: 'backward'
                    },
                    bubbles: true,
                    cancelable: true
                }))) return true;
                nextLandmarkIndex = this.landmarks.length - 1;
            } else if (nextLandmarkIndex >= this.landmarks.length) {
                if (!element.dispatchEvent(new CustomEvent('react-aria-landmark-navigation', {
                    detail: {
                        direction: 'forward'
                    },
                    bubbles: true,
                    cancelable: true
                }))) return true;
                nextLandmarkIndex = 0;
            }
            if (nextLandmarkIndex < 0 || nextLandmarkIndex >= this.landmarks.length) return true;
            return false;
        };
        if (wrapIfNeeded()) return undefined;
        // Skip over hidden landmarks.
        let i = nextLandmarkIndex;
        while(this.landmarks[nextLandmarkIndex].ref.current?.closest('[aria-hidden=true]')){
            nextLandmarkIndex += backward ? -1 : 1;
            if (wrapIfNeeded()) return undefined;
            if (nextLandmarkIndex === i) break;
        }
        return this.landmarks[nextLandmarkIndex];
    }
    /**
   * Look at next landmark. If an element was previously focused inside, restore focus there.
   * If not, focus the landmark itself.
   * If no landmarks at all, or none with focusable elements, don't move focus.
   */ f6Handler(e) {
        if (e.key === 'F6') {
            // If alt key pressed, focus main landmark, otherwise navigate forward or backward based on shift key.
            let handled = e.altKey ? this.focusMain() : this.navigate((0, _domfunctions.getEventTarget)(e), e.shiftKey);
            if (handled) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    }
    focusMain() {
        let main = this.getLandmarkByRole('main');
        if (main && main.ref.current && main.ref.current.isConnected) {
            this.focusLandmark(main.ref.current, 'forward');
            return true;
        }
        return false;
    }
    navigate(from, backward) {
        let nextLandmark = this.getNextLandmark(from, {
            backward
        });
        if (!nextLandmark) return false;
        // If something was previously focused in the next landmark, then return focus to it
        if (nextLandmark.lastFocused) {
            let lastFocused = nextLandmark.lastFocused;
            if ((0, _domfunctions.nodeContains)(document.body, lastFocused)) {
                lastFocused.focus();
                return true;
            }
        }
        // Otherwise, focus the landmark itself
        if (nextLandmark.ref.current && nextLandmark.ref.current.isConnected) {
            this.focusLandmark(nextLandmark.ref.current, backward ? 'backward' : 'forward');
            return true;
        }
        return false;
    }
    /**
   * Sets lastFocused for a landmark, if focus is moved within that landmark.
   * Lets the last focused landmark know it was blurred if something else is focused.
   */ focusinHandler(e) {
        let currentLandmark = this.closestLandmark((0, _domfunctions.getEventTarget)(e));
        if (currentLandmark && currentLandmark.ref.current !== (0, _domfunctions.getEventTarget)(e)) this.updateLandmark({
            ref: currentLandmark.ref,
            lastFocused: (0, _domfunctions.getEventTarget)(e)
        });
        let previousFocusedElement = e.relatedTarget;
        if (previousFocusedElement) {
            let closestPreviousLandmark = this.closestLandmark(previousFocusedElement);
            if (closestPreviousLandmark && closestPreviousLandmark.ref.current === previousFocusedElement) closestPreviousLandmark.blur();
        }
    }
    /**
   * Track if the focus is lost to the body. If it is, do cleanup on the landmark that last had
   * focus.
   */ focusoutHandler(e) {
        let previousFocusedElement = (0, _domfunctions.getEventTarget)(e);
        let nextFocusedElement = e.relatedTarget;
        // the === document seems to be a jest thing for focus to go there on generic blur event such as landmark.blur();
        // browsers appear to send focus instead to document.body and the relatedTarget is null when that happens
        if (!nextFocusedElement || nextFocusedElement === document) {
            let closestPreviousLandmark = this.closestLandmark(previousFocusedElement);
            if (closestPreviousLandmark && closestPreviousLandmark.ref.current === previousFocusedElement) closestPreviousLandmark.blur();
        }
    }
    createLandmarkController() {
        let instance = this;
        instance.refCount++;
        instance.setupIfNeeded();
        return {
            navigate (direction, opts) {
                let element = opts?.from || document.activeElement;
                return instance.navigate(element, direction === 'backward');
            },
            focusNext (opts) {
                let element = opts?.from || document.activeElement;
                return instance.navigate(element, false);
            },
            focusPrevious (opts) {
                let element = opts?.from || document.activeElement;
                return instance.navigate(element, true);
            },
            focusMain () {
                return instance.focusMain();
            },
            dispose () {
                if (instance) {
                    instance.refCount--;
                    instance.teardownIfNeeded();
                    instance = null;
                }
            }
        };
    }
    registerLandmark(landmark) {
        if (this.landmarks.find((l)=>l.ref === landmark.ref)) this.updateLandmark(landmark);
        else this.addLandmark(landmark);
        return ()=>this.removeLandmark(landmark.ref);
    }
}
function UNSTABLE_createLandmarkController() {
    // Get the current landmark manager and create a controller using it.
    let instance = getLandmarkManager();
    let controller = instance?.createLandmarkController();
    let unsubscribe = subscribe(()=>{
        // If the landmark manager changes, dispose the old
        // controller and create a new one.
        controller?.dispose();
        instance = getLandmarkManager();
        controller = instance?.createLandmarkController();
    });
    // Return a wrapper that proxies requests to the current controller instance.
    return {
        navigate (direction, opts) {
            return controller.navigate(direction, opts);
        },
        focusNext (opts) {
            return controller.focusNext(opts);
        },
        focusPrevious (opts) {
            return controller.focusPrevious(opts);
        },
        focusMain () {
            return controller.focusMain();
        },
        dispose () {
            controller?.dispose();
            unsubscribe();
            controller = undefined;
            instance = null;
        }
    };
}
function useLandmark(props, ref) {
    const { role, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, focus } = props;
    let manager = useLandmarkManager();
    let label = ariaLabel || ariaLabelledby;
    let [isLandmarkFocused, setIsLandmarkFocused] = (0, _react.useState)(false);
    let defaultFocus = (0, _react.useCallback)(()=>{
        setIsLandmarkFocused(true);
    }, [
        setIsLandmarkFocused
    ]);
    let blur = (0, _react.useCallback)(()=>{
        setIsLandmarkFocused(false);
    }, [
        setIsLandmarkFocused
    ]);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (manager) return manager.registerLandmark({
            ref,
            label,
            role,
            focus: focus || defaultFocus,
            blur
        });
    }, [
        manager,
        label,
        ref,
        role,
        focus,
        defaultFocus,
        blur
    ]);
    (0, _react.useEffect)(()=>{
        if (isLandmarkFocused) ref.current?.focus();
    }, [
        isLandmarkFocused,
        ref
    ]);
    return {
        landmarkProps: {
            role,
            tabIndex: isLandmarkFocused ? -1 : undefined,
            'aria-label': ariaLabel,
            'aria-labelledby': ariaLabelledby
        }
    };
}

},{"../utils/shadowdom/DOMFunctions":"8kfpz","react":"gOP0N","../utils/useLayoutEffect":"h7M6K","use-sync-external-store/shim/index.js":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8kfpz":[function(require,module,exports,__globalThis) {
// Source: https://github.com/microsoft/tabster/blob/a89fc5d7e332d48f68d03b1ca6e344489d1c3898/src/Shadowdomize/DOMFunctions.ts#L16
/* eslint-disable rsp-rules/no-non-shadow-contains, rsp-rules/safe-event-target */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ShadowDOM safe version of Node.contains.
 */ parcelHelpers.export(exports, "nodeContains", ()=>nodeContains);
parcelHelpers.export(exports, "getActiveElement", ()=>getActiveElement);
// Possibly we can improve the types for this using https://github.com/adobe/react-spectrum/pull/8991/changes#diff-2d491c0c91701d28d08e1cf9fcadbdb21a030b67ab681460c9934140f29127b8R68 but it was more changes than I
// wanted to make to fix the function.
/**
 * ShadowDOM safe version of event.target.
 */ parcelHelpers.export(exports, "getEventTarget", ()=>getEventTarget);
/**
 * Returns the set of event targets a listener must be attached to in order to
 * globally observe an event.
 *
 * @param from - The target element to start from.
 * @param to - The element to stop at when bubbling. @default getOwnerWindow(from)
 *   `to` is generally going to be either `document` or `window`, but
 *   it can be any intermediate node.
 * @returns [global, ...shadowRoots]
 */ parcelHelpers.export(exports, "getPropagationTargets", ()=>getPropagationTargets);
/**
 * ShadowDOM safe fast version of node.contains(document.activeElement).
 *
 * @param node
 * @returns
 */ parcelHelpers.export(exports, "isFocusWithin", ()=>isFocusWithin);
var _domHelpers = require("../domHelpers");
var _flags = require("react-stately/private/flags/flags");
function nodeContains(node, otherNode) {
    if (!(0, _flags.shadowDOM)()) return otherNode && node ? node.contains(otherNode) : false;
    if (!node || !otherNode) return false;
    let currentNode = otherNode;
    while(currentNode != null){
        if (currentNode === node) return true;
        if (typeof currentNode.assignedElements !== 'function' && currentNode.assignedSlot?.parentNode) // Element is slotted
        currentNode = currentNode.assignedSlot.parentNode;
        else if ((0, _domHelpers.isShadowRoot)(currentNode)) // Element is in shadow root
        currentNode = currentNode.host;
        else currentNode = currentNode.parentNode;
    }
    return false;
}
const getActiveElement = (doc = document)=>{
    if (!(0, _flags.shadowDOM)()) return doc.activeElement;
    let activeElement = doc.activeElement;
    while(activeElement && 'shadowRoot' in activeElement && activeElement.shadowRoot?.activeElement)activeElement = activeElement.shadowRoot.activeElement;
    return activeElement;
};
function getEventTarget(event) {
    if ((0, _flags.shadowDOM)() && event.target instanceof Element && event.target.shadowRoot) {
        if ('composedPath' in event) return event.composedPath()[0] ?? null;
        else if ('composedPath' in event.nativeEvent) return event.nativeEvent.composedPath()[0] ?? null;
    }
    return event.target;
}
function getPropagationTargets(from, to) {
    // If `to` is coming from a ref, its type technically allows `null`.
    // In practice, this function will generally be called from within a useEffect.
    // If the ref has not resolved by that point, then a coding error has been made.
    // Better to return an empty array than `[window]`, which may appear to work
    // in the light DOM, but fail in the shadow DOM.
    if (to === null) return [];
    to = to ?? (0, _domHelpers.getOwnerWindow)(from);
    let targets = [
        to
    ];
    if (!(0, _flags.shadowDOM)() || !from || from === to) return targets;
    // The root `to` itself lives in. The event already reaches `to` once
    // it is inside this root, so we must NOT collect this root or anything above
    // it — only the shadow roots strictly between `refNode` and `to`.
    // `window` has no getRootNode; its boundary is the document, which the walk
    // reaches naturally (the document is not a ShadowRoot, so the loop exits).
    let toRoot = 'getRootNode' in to ? to.getRootNode() : null;
    let current = from.getRootNode() ?? null;
    while((0, _domHelpers.isShadowRoot)(current) && current !== toRoot){
        // order shouldn't matter
        targets.push(current);
        current = current.host.getRootNode();
    }
    return targets;
}
function isFocusWithin(node) {
    if (!node) return false;
    // Get the active element within the node's parent shadow root (or the document). Can return null.
    let root = node.getRootNode();
    let ownerWindow = (0, _domHelpers.getOwnerWindow)(node);
    if (!(root instanceof ownerWindow.Document || root instanceof ownerWindow.ShadowRoot)) return false;
    let activeElement = root.activeElement;
    // Check if the active element is within this node. These nodes are within the same shadow root.
    return activeElement != null && node.contains(activeElement);
}

},{"../domHelpers":"cYkFa","react-stately/private/flags/flags":"ahU3Z","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cYkFa":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "getOwnerDocument", ()=>getOwnerDocument);
parcelHelpers.export(exports, "getOwnerWindow", ()=>getOwnerWindow);
/**
 * Type guard that checks if a value is a Node. Verifies the presence and type of the nodeType
 * property.
 */ parcelHelpers.export(exports, "isNode", ()=>isNode);
/**
 * Type guard that checks if a value is a Document. Uses nodeType and host property checks to
 * distinguish Document from other values.
 */ parcelHelpers.export(exports, "isDocument", ()=>isDocument);
/**
 * Type guard that checks if a value is a ShadowRoot. Uses nodeType and host property checks to
 * distinguish ShadowRoot from other values.
 */ parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
/**
 * Attaches an event listener on target(s) and returns a cleanup function.
 */ parcelHelpers.export(exports, "addEvent", ()=>addEvent);
/**
 * Sets a CSS property on an element and returns a cleanup function.
 */ parcelHelpers.export(exports, "setStyle", ()=>setStyle);
const getOwnerDocument = (target)=>{
    if (isWindow(target)) return target.document;
    if (isDocument(target)) return target;
    // @ts-expect-error Ensure safe access in SSR environments.
    return target?.ownerDocument ?? (typeof document !== 'undefined' ? document : undefined);
};
const getOwnerWindow = (target)=>{
    let ownerDocument = getOwnerDocument(target);
    // @ts-expect-error Ensure safe access in SSR environments.
    return ownerDocument?.defaultView ?? (typeof window !== 'undefined' ? window : undefined);
};
function isNode(value) {
    return value !== null && typeof value === 'object' && 'nodeType' in value && typeof value.nodeType === 'number';
}
/**
 * Type guard that checks if a value is a Window. Uses window self reference checks to
 * distinguish Window from other values.
 */ function isWindow(value) {
    return typeof value === 'object' && value != null && 'window' in value && value.window === value;
}
function isDocument(value) {
    return isNode(value) && value.nodeType === 9;
}
function isShadowRoot(value) {
    // 11 = DOCUMENT_FRAGMENT_NODE
    return isNode(value) && value.nodeType === 11 && 'host' in value;
}
function addEvent(target, event, listener, options) {
    if (listener == null || target == null) return ()=>{};
    let eventTargets = Array.isArray(target) ? target : [
        target
    ];
    for (let eventTarget of eventTargets)eventTarget.addEventListener(event, listener, options);
    return ()=>{
        for (let eventTarget of eventTargets)eventTarget.removeEventListener(event, listener, options);
    };
}
function setStyle(target, property, value, priority) {
    if (target == null) return ()=>{};
    let restore = new Array();
    let styleTargets = Array.isArray(target) ? target : [
        target
    ];
    for (let styleTarget of styleTargets){
        let initialValue = styleTarget.style.getPropertyValue(property);
        let initialPriority = styleTarget.style.getPropertyPriority(property);
        styleTarget.style.setProperty(property, value, priority);
        restore.unshift(()=>{
            if (initialValue) styleTarget.style.setProperty(property, initialValue, initialPriority);
            else styleTarget.style.removeProperty(property);
        });
    }
    return ()=>{
        for (let cleanup of restore)cleanup();
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ahU3Z":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2023 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "enableTableNestedRows", ()=>enableTableNestedRows);
parcelHelpers.export(exports, "tableNestedRows", ()=>tableNestedRows);
parcelHelpers.export(exports, "enableShadowDOM", ()=>enableShadowDOM);
parcelHelpers.export(exports, "shadowDOM", ()=>shadowDOM);
let _tableNestedRows = false;
let _shadowDOM = false;
function enableTableNestedRows() {
    _tableNestedRows = true;
}
function tableNestedRows() {
    return _tableNestedRows;
}
function enableShadowDOM() {
    _shadowDOM = true;
}
function shadowDOM() {
    return _shadowDOM;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h7M6K":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useLayoutEffect", ()=>useLayoutEffect);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const useLayoutEffect = typeof document !== 'undefined' ? (0, _reactDefault.default).useLayoutEffect : ()=>{};

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lGCOt":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Cell", ()=>_Cell);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Cell(props) {
    return null;
}
Cell.getCollectionNode = function* getCollectionNode(props) {
    let { children } = props;
    let textValue = props.textValue || (typeof children === 'string' ? children : '') || props['aria-label'] || '';
    yield {
        type: 'cell',
        props: props,
        rendered: children,
        textValue,
        'aria-label': props['aria-label'],
        hasChildNodes: false
    };
};
/**
 * A Cell represents the value of a single Column within a Table Row.
 */ // We don't want getCollectionNode to show up in the type definition
let _Cell = Cell;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jvPvA":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Row", ()=>_Row);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Row(props) {
    return null;
}
Row.getCollectionNode = function* getCollectionNode(props, context) {
    let { children, textValue, UNSTABLE_childItems } = props;
    yield {
        type: 'item',
        props: props,
        textValue,
        'aria-label': props['aria-label'],
        hasChildNodes: true,
        *childNodes () {
            // Process cells first
            if (context.showDragButtons) yield {
                type: 'cell',
                key: 'header-drag',
                props: {
                    isDragButtonCell: true
                }
            };
            if (context.showSelectionCheckboxes && context.selectionMode !== 'none') yield {
                type: 'cell',
                key: 'header',
                props: {
                    isSelectionCell: true
                }
            };
            if (typeof children === 'function') {
                for (let column of context.columns)yield {
                    type: 'cell',
                    element: children(column.key),
                    key: column.key // this is combined with the row key by CollectionBuilder
                };
                if (UNSTABLE_childItems) for (let child of UNSTABLE_childItems)// Note: in order to reuse the render function of TableBody for our child rows, we just need to yield a type and a value here. CollectionBuilder will then look up
                // the parent renderer and use that to build the full node of this child row, using the value provided here to generate the cells
                yield {
                    type: 'item',
                    value: child
                };
            } else {
                let cells = [];
                let childRows = [];
                let columnCount = 0;
                (0, _reactDefault.default).Children.forEach(children, (node)=>{
                    if (node.type === Row) {
                        if (cells.length < context.columns.length) throw new Error("All of a Row's child Cells must be positioned before any child Rows.");
                        childRows.push({
                            type: 'item',
                            element: node
                        });
                    } else {
                        cells.push({
                            type: 'cell',
                            element: node
                        });
                        columnCount += node.props.colSpan ?? 1;
                    }
                });
                if (columnCount !== context.columns.length) throw new Error(`Cell count must match column count. Found ${columnCount} cells and ${context.columns.length} columns.`);
                yield* cells;
                yield* childRows;
            }
        },
        shouldInvalidate (newContext) {
            // Invalidate all rows if the columns changed.
            return newContext.columns.length !== context.columns.length || newContext.columns.some((c, i)=>c.key !== context.columns[i].key) || newContext.showSelectionCheckboxes !== context.showSelectionCheckboxes || newContext.showDragButtons !== context.showDragButtons || newContext.selectionMode !== context.selectionMode;
        }
    };
};
/**
 * A Row represents a single item in a Table and contains Cell elements for each column.
 * Cells can be statically defined as children, or generated dynamically using a function
 * based on the columns defined in the TableHeader.
 */ // We don't want getCollectionNode to show up in the type definition
let _Row = Row;

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aZKVl":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "TableBody", ()=>_TableBody);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TableBody(props) {
    return null;
}
TableBody.getCollectionNode = function* getCollectionNode(props) {
    let { children, items } = props;
    yield {
        type: 'body',
        hasChildNodes: true,
        props,
        *childNodes () {
            if (typeof children === 'function') {
                if (!items) throw new Error('props.children was a function but props.items is missing');
                for (let item of items)yield {
                    type: 'item',
                    value: item,
                    renderer: children
                };
            } else {
                let items = [];
                (0, _reactDefault.default).Children.forEach(children, (item)=>{
                    items.push({
                        type: 'item',
                        element: item
                    });
                });
                yield* items;
            }
        }
    };
};
/**
 * A TableBody is a container for the Row elements of a Table. Rows can be statically defined as
 * children, or generated dynamically using a function based on the data passed to the `items`
 * prop.
 */ // We don't want getCollectionNode to show up in the type definition
let _TableBody = TableBody;

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9KVrS":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "TableHeader", ()=>_TableHeader);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TableHeader(props) {
    return null;
}
TableHeader.getCollectionNode = function* getCollectionNode(props, context) {
    let { children, columns } = props;
    // Clear columns so they aren't double added in strict mode.
    context.columns = [];
    if (typeof children === 'function') {
        if (!columns) throw new Error('props.children was a function but props.columns is missing');
        for (let column of columns)yield {
            type: 'column',
            value: column,
            renderer: children
        };
    } else {
        let columns = [];
        (0, _reactDefault.default).Children.forEach(children, (column)=>{
            columns.push({
                type: 'column',
                element: column
            });
        });
        yield* columns;
    }
};
/**
 * A TableHeader is a container for the Column elements in a Table. Columns can be statically
 * defined as children, or generated dynamically using a function based on the data passed to the
 * `columns` prop.
 */ // We don't want getCollectionNode to show up in the type definition
let _TableHeader = TableHeader;

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4d0jS":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Flex", ()=>Flex);
var _jsxRuntime = require("preact/jsx-runtime");
var _classNamesTs = require("../utils/classNames.ts");
var _filterDOMPropsTs = require("../../../../../../../../vendor/react-aria/exports/filterDOMProps.ts");
var _stylePropsTs = require("../utils/styleProps.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _flexGapCss = require("./flex-gap.css");
var _flexGapCssDefault = parcelHelpers.interopDefault(_flexGapCss);
var _breakpointProviderTsx = require("../utils/BreakpointProvider.tsx");
var _useDOMRefTs = require("../utils/useDOMRef.ts");
const flexStyleProps = {
    direction: [
        'flexDirection',
        (0, _stylePropsTs.passthroughStyle)
    ],
    wrap: [
        'flexWrap',
        flexWrapValue
    ],
    justifyContent: [
        'justifyContent',
        flexAlignValue
    ],
    alignItems: [
        'alignItems',
        flexAlignValue
    ],
    alignContent: [
        'alignContent',
        flexAlignValue
    ]
};
const Flex = /*#__PURE__*/ (0, _react.forwardRef)(function Flex(props, ref) {
    let { children, ...otherProps } = props;
    let breakpointProvider = (0, _breakpointProviderTsx.useBreakpoint)();
    let matchedBreakpoints = breakpointProvider?.matchedBreakpoints || [
        'base'
    ];
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(otherProps);
    let { styleProps: flexStyle } = (0, _stylePropsTs.useStyleProps)(otherProps, flexStyleProps);
    let domRef = (0, _useDOMRefTs.useDOMRef)(ref);
    let style = {
        ...styleProps.style,
        ...flexStyle.style
    };
    if (props.gap != null) style.gap = (0, _stylePropsTs.responsiveDimensionValue)(props.gap, matchedBreakpoints);
    if (props.columnGap != null) style.columnGap = (0, _stylePropsTs.responsiveDimensionValue)(props.columnGap, matchedBreakpoints);
    if (props.rowGap != null) style.rowGap = (0, _stylePropsTs.responsiveDimensionValue)(props.rowGap, matchedBreakpoints);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        ...(0, _filterDOMPropsTs.filterDOMProps)(otherProps),
        className: (0, _classNamesTs.classNames)((0, _flexGapCssDefault.default), 'flex', styleProps.className),
        style: style,
        ref: domRef,
        children: children
    });
});
/**
 * Normalize 'start' and 'end' alignment values to 'flex-start' and 'flex-end'
 * in flex containers for browser compatibility.
 */ function flexAlignValue(value) {
    if (value === 'start') return 'flex-start';
    if (value === 'end') return 'flex-end';
    return value;
}
/**
 * Takes a boolean and translates it to flex wrap or nowrap.
 */ function flexWrapValue(value) {
    if (typeof value === 'boolean') return value ? 'wrap' : 'nowrap';
    return value;
}

},{"preact/jsx-runtime":"b2Fbn","../utils/classNames.ts":"dsWbb","../../../../../../../../vendor/react-aria/exports/filterDOMProps.ts":"h4XHF","../utils/styleProps.ts":"7B0Vi","react":"gOP0N","./flex-gap.css":"7JJ3Q","../utils/BreakpointProvider.tsx":"foFuK","../utils/useDOMRef.ts":"ltu01","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7JJ3Q":[function(require,module,exports,__globalThis) {
module.exports["flex"] = `zqU5QG_flex`;
module.exports["flex-container"] = `zqU5QG_flex-container`;
module.exports["flex-gap"] = `zqU5QG_flex-gap`;

},{}],"9bTDv":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Item", ()=>_Item);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Item(props) {
    return null;
}
Item.getCollectionNode = function* getCollectionNode(props, context) {
    let { childItems, title, children } = props;
    let rendered = props.title || props.children;
    let textValue = props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || '';
    // suppressTextValueWarning is used in components like Tabs, which don't have type to select support.
    !textValue && context?.suppressTextValueWarning;
    yield {
        type: 'item',
        props: props,
        rendered,
        textValue,
        'aria-label': props['aria-label'],
        hasChildNodes: hasChildItems(props),
        *childNodes () {
            if (childItems) for (let child of childItems)yield {
                type: 'item',
                value: child
            };
            else if (title) {
                let items = [];
                (0, _reactDefault.default).Children.forEach(children, (child)=>{
                    items.push({
                        type: 'item',
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
function hasChildItems(props) {
    if (props.hasChildItems != null) return props.hasChildItems;
    if (props.childItems) return true;
    if (props.title && (0, _reactDefault.default).Children.count(props.children) > 0) return true;
    return false;
}
// We don't want getCollectionNode to show up in the type definition
let _Item = Item;

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aQOX1":[function(require,module,exports,__globalThis) {
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
/**
 * Links allow users to navigate to a different location.
 * They can be presented inline inside a paragraph or as standalone text.
 */ parcelHelpers.export(exports, "Link", ()=>Link);
var _jsxRuntime = require("preact/jsx-runtime");
var _useLinkTs = require("../../../../../../../../vendor/react-aria/exports/useLink.ts");
var _classNamesTs = require("../utils/classNames.ts");
var _focusRingTs = require("../../../../../../../../vendor/react-aria/exports/FocusRing.ts");
var _getWrappedElementTsx = require("../utils/getWrappedElement.tsx");
var _mergePropsTs = require("../../../../../../../../vendor/react-aria/exports/mergeProps.ts");
var _mergeRefsTs = require("../../../../../../../../vendor/react-aria/exports/mergeRefs.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _varsCss = require("../../../spectrum-css-temp/components/link/vars.css");
var _varsCssDefault = parcelHelpers.interopDefault(_varsCss);
var _useHoverTs = require("../../../../../../../../vendor/react-aria/exports/useHover.ts");
var _providerTsx = require("../provider/Provider.tsx");
var _slotsTsx = require("../utils/Slots.tsx");
var _stylePropsTs = require("../utils/styleProps.ts");
let isOldReact = parseInt((0, _reactDefault.default).version, 10) <= 18;
function Link(props) {
    props = (0, _providerTsx.useProviderProps)(props);
    props = (0, _slotsTsx.useSlotProps)(props, 'link');
    let { variant = 'primary', isQuiet, children, // @ts-ignore
    href } = props;
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(props);
    let { hoverProps, isHovered } = (0, _useHoverTs.useHover)({});
    let ref = (0, _react.useRef)(null);
    let { linkProps } = (0, _useLinkTs.useLink)({
        ...props,
        elementType: !href && typeof children === 'string' ? 'span' : 'a'
    }, ref);
    let domProps = {
        ...styleProps,
        ...(0, _mergePropsTs.mergeProps)(linkProps, hoverProps),
        ref,
        className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Link', {
            'spectrum-Link--quiet': isQuiet,
            [`spectrum-Link--${variant}`]: variant,
            'is-hovered': isHovered
        }, styleProps.className)
    };
    let link;
    if (href) link = /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
        ...domProps,
        children: children
    });
    else {
        // Backward compatibility.
        let wrappedChild = (0, _getWrappedElementTsx.getWrappedElement)(children);
        let mergedRef = ref;
        if (isOldReact) // @ts-ignore
        // oxlint-disable-next-line react/react-compiler
        mergedRef = (0, _mergeRefsTs.mergeRefs)(ref, wrappedChild.ref);
        else // @ts-ignore
        // oxlint-disable-next-line react/react-compiler
        mergedRef = (0, _mergeRefsTs.mergeRefs)(ref, wrappedChild.props.ref);
        link = /*#__PURE__*/ (0, _reactDefault.default).cloneElement(wrappedChild, {
            // oxlint-disable-next-line react/react-compiler
            ...(0, _mergePropsTs.mergeProps)(wrappedChild.props, domProps),
            // @ts-ignore https://github.com/facebook/react/issues/8873
            ref: mergedRef
        });
    }
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _focusRingTs.FocusRing), {
        focusRingClass: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'focus-ring'),
        children: link
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../../../../../vendor/react-aria/exports/useLink.ts":"7Vimq","../utils/classNames.ts":"dsWbb","../../../../../../../../vendor/react-aria/exports/FocusRing.ts":"amr77","../utils/getWrappedElement.tsx":"4rqYQ","../../../../../../../../vendor/react-aria/exports/mergeProps.ts":"jycxS","../../../../../../../../vendor/react-aria/exports/mergeRefs.ts":"jspQh","react":"gOP0N","../../../spectrum-css-temp/components/link/vars.css":"8ko3H","../../../../../../../../vendor/react-aria/exports/useHover.ts":"2yLrj","../provider/Provider.tsx":"ebIlC","../utils/Slots.tsx":"a1pMy","../utils/styleProps.ts":"7B0Vi","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7Vimq":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the behavior and accessibility implementation for a link component.
 * A link allows a user to navigate to another page or resource within a web page
 * or application.
 */ parcelHelpers.export(exports, "useLink", ()=>useLink);
var _filterDOMProps = require("../utils/filterDOMProps");
var _openLink = require("../utils/openLink");
var _mergeProps = require("../utils/mergeProps");
var _useFocusable = require("../interactions/useFocusable");
var _usePress = require("../interactions/usePress");
function useLink(props, ref) {
    let { elementType = 'a', onPress, onPressStart, onPressEnd, onPressChange, onClick, isDisabled, ...otherProps } = props;
    let linkProps = {};
    if (elementType !== 'a') linkProps = {
        role: 'link',
        tabIndex: !isDisabled ? 0 : undefined
    };
    let { focusableProps } = (0, _useFocusable.useFocusable)(props, ref);
    let { pressProps, isPressed } = (0, _usePress.usePress)({
        onPress,
        onPressStart,
        onPressEnd,
        onPressChange,
        onClick,
        isDisabled,
        ref
    });
    let domProps = (0, _filterDOMProps.filterDOMProps)(otherProps, {
        labelable: true
    });
    let interactionHandlers = (0, _mergeProps.mergeProps)(focusableProps, pressProps);
    let router = (0, _openLink.useRouter)();
    let routerLinkProps = (0, _openLink.useLinkProps)(props);
    return {
        isPressed,
        linkProps: (0, _mergeProps.mergeProps)(domProps, routerLinkProps, {
            ...interactionHandlers,
            ...linkProps,
            'aria-disabled': isDisabled || undefined,
            'aria-current': props['aria-current'],
            onClick: (e)=>{
                pressProps.onClick?.(e);
                (0, _openLink.handleLinkClick)(e, router, props.href, props.routerOptions);
            }
        })
    };
}

},{"../utils/filterDOMProps":"h4XHF","../utils/openLink":"gH3wl","../utils/mergeProps":"jycxS","../interactions/useFocusable":"6IFKj","../interactions/usePress":"3S2KR","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jycxS":[function(require,module,exports,__globalThis) {
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
/**
 * Merges multiple props objects together. Event handlers are chained,
 * classNames are combined, ids are deduplicated, and refs are merged.
 * For all other props, the last prop object overrides all previous ones.
 *
 * @param args - Multiple sets of props to merge together.
 */ parcelHelpers.export(exports, "mergeProps", ()=>mergeProps);
var _chain = require("./chain");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _useId = require("./useId");
var _mergeRefs = require("./mergeRefs");
function mergeProps(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = (0, _chain.chain)(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = (0, _clsxDefault.default)(a, b);
            else if (key === 'id' && a && b) result.id = (0, _useId.mergeIds)(a, b);
            else if (key === 'ref' && a && b) result.ref = (0, _mergeRefs.mergeRefs)(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}

},{"./chain":"bQmEj","clsx":"5gQI0","./useId":"fQAcb","./mergeRefs":"jspQh","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bQmEj":[function(require,module,exports,__globalThis) {
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
 */ /**
 * Calls all functions in the order they were chained with the same arguments.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chain", ()=>chain);
function chain(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fQAcb":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "idsUpdaterMap", ()=>idsUpdaterMap);
/**
 * If a default is not provided, generate an id.
 *
 * @param defaultId - Default component id.
 */ parcelHelpers.export(exports, "useId", ()=>useId);
/**
 * Merges two ids.
 * Different ids will trigger a side-effect and re-render components hooked up with `useId`.
 */ parcelHelpers.export(exports, "mergeIds", ()=>mergeIds);
/**
 * Used to generate an id, and after render, check if that id is rendered so we know
 * if we can use it in places such as labelledby.
 *
 * @param depArray - When to recalculate if the id is in the DOM.
 */ parcelHelpers.export(exports, "useSlotId", ()=>useSlotId);
var _react = require("react");
var _useLayoutEffect = require("./useLayoutEffect");
var _ssrprovider = require("../ssr/SSRProvider");
var _useValueEffect = require("./useValueEffect");
// copied from SSRProvider.tsx to reduce exports, if needed again, consider sharing
let canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
let idsUpdaterMap = new Map();
// This allows us to clean up the idsUpdaterMap when the id is no longer used.
// Map is a strong reference, so unused ids wouldn't be cleaned up otherwise.
// This can happen in suspended components where mount/unmount is not called.
let registry;
if (typeof FinalizationRegistry !== 'undefined') registry = new FinalizationRegistry((heldValue)=>{
    idsUpdaterMap.delete(heldValue);
});
let registeredIds = new WeakMap();
function useId(defaultId) {
    let [value, setValue] = (0, _react.useState)(defaultId);
    let nextId = (0, _react.useRef)(null);
    let res = (0, _ssrprovider.useSSRSafeId)(value);
    let cleanupRef = (0, _react.useRef)(null);
    // These are intentionally disabled the compiler, these functions just read the identity
    // of the ref, not the value inside current.
    // oxlint-disable-next-line react/react-compiler
    let registeredId = registeredIds.get(cleanupRef);
    if (registry && registeredId !== res) {
        if (registeredId != null) // oxlint-disable-next-line react/react-compiler
        registry.unregister(cleanupRef);
        // oxlint-disable-next-line react/react-compiler
        registry.register(cleanupRef, res, cleanupRef);
        // oxlint-disable-next-line react/react-compiler
        registeredIds.set(cleanupRef, res);
    }
    if (canUseDOM) {
        const cacheIdRef = idsUpdaterMap.get(res);
        // oxlint-disable-next-line react/react-compiler
        if (cacheIdRef && !cacheIdRef.includes(nextId)) // oxlint-disable-next-line react/react-compiler
        cacheIdRef.push(nextId);
        else // oxlint-disable-next-line react/react-compiler
        idsUpdaterMap.set(res, [
            nextId
        ]);
    }
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        let r = res;
        return ()=>{
            // In Suspense, the cleanup function may be not called
            // when it is though, also remove it from the finalization registry.
            if (registry) {
                registry.unregister(cleanupRef);
                registeredIds.delete(cleanupRef);
            }
            idsUpdaterMap.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is always cleaned up.
    // eslint-disable-next-line
    (0, _react.useEffect)(()=>{
        let newId = nextId.current;
        if (newId) setValue(newId);
        return ()=>{
            if (newId) nextId.current = null;
        };
    });
    return res;
}
function mergeIds(idA, idB) {
    if (idA === idB) return idA;
    let setIdsA = idsUpdaterMap.get(idA);
    if (setIdsA) {
        setIdsA.forEach((ref)=>ref.current = idB);
        return idB;
    }
    let setIdsB = idsUpdaterMap.get(idB);
    if (setIdsB) {
        setIdsB.forEach((ref)=>ref.current = idA);
        return idA;
    }
    return idB;
}
function useSlotId(depArray = []) {
    let id = useId();
    let [resolvedId, setResolvedId] = (0, _useValueEffect.useValueEffect)(id);
    let updateId = (0, _react.useCallback)(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : undefined;
        });
    // oxlint-disable-next-line react/react-compiler
    }, [
        id,
        setResolvedId
    ]);
    (0, _useLayoutEffect.useLayoutEffect)(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}

},{"react":"gOP0N","./useLayoutEffect":"h7M6K","../ssr/SSRProvider":"2cndP","./useValueEffect":"ksiVz","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ksiVz":[function(require,module,exports,__globalThis) {
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
// This hook works like `useState`, but when setting the value, you pass a generator function
// that can yield multiple values. Each yielded value updates the state and waits for the next
// layout effect, then continues the generator. This allows sequential updates to state to be
// written linearly.
parcelHelpers.export(exports, "useValueEffect", ()=>useValueEffect);
var _react = require("react");
var _useLayoutEffect = require("./useLayoutEffect");
function useValueEffect(defaultValue) {
    let [value, setValue] = (0, _react.useState)(defaultValue);
    // Keep an up to date copy of value in a ref so we can access the current value in the generator.
    // This allows us to maintain a stable queue function.
    let currValue = (0, _react.useRef)(value);
    let effect = (0, _react.useRef)(null);
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = (0, _react.useRef)(()=>{
        if (!effect.current) return;
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (currValue.current === newValue.value) nextRef.current();
        else setValue(newValue.value);
    });
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        currValue.current = value;
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef.current();
    });
    let queue = (0, _react.useCallback)((fn)=>{
        effect.current = fn(currValue.current);
        nextRef.current();
    }, [
        nextRef
    ]);
    return [
        value,
        queue
    ];
}

},{"react":"gOP0N","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jspQh":[function(require,module,exports,__globalThis) {
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
/**
 * Merges multiple refs into one. Works with either callback or object refs.
 */ parcelHelpers.export(exports, "mergeRefs", ()=>mergeRefs);
function mergeRefs(...refs) {
    if (refs.length === 1 && refs[0]) return refs[0];
    return (value)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, value);
            hasCleanup ||= typeof cleanup == 'function';
            return cleanup;
        });
        if (hasCleanup) return ()=>{
            cleanups.forEach((cleanup, i)=>{
                if (typeof cleanup === 'function') cleanup();
                else setRef(refs[i], null);
            });
        };
    };
}
function setRef(ref, value) {
    if (typeof ref === 'function') return ref(value);
    else if (ref != null) ref.current = value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6IFKj":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "FocusableContext", ()=>FocusableContext);
parcelHelpers.export(exports, "FocusableProvider", ()=>FocusableProvider);
/**
 * Used to make an element focusable and capable of auto focus.
 */ parcelHelpers.export(exports, "useFocusable", ()=>useFocusable);
parcelHelpers.export(exports, "Focusable", ()=>Focusable);
var _jsxRuntime = require("preact/jsx-runtime");
var _focusSafely = require("./focusSafely");
var _domHelpers = require("../utils/domHelpers");
var _isFocusable = require("../utils/isFocusable");
var _mergeProps = require("../utils/mergeProps");
var _mergeRefs = require("../utils/mergeRefs");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useFocus = require("./useFocus");
var _useKeyboard = require("./useKeyboard");
var _useObjectRef = require("../utils/useObjectRef");
var _useSyncRef = require("../utils/useSyncRef");
let FocusableContext = /*#__PURE__*/ (0, _reactDefault.default).createContext(null);
function useFocusableContext(ref) {
    let context = (0, _react.useContext)(FocusableContext) || {};
    (0, _useSyncRef.useSyncRef)(context, ref);
    // eslint-disable-next-line
    let { ref: _, ...otherProps } = context;
    return otherProps;
}
const FocusableProvider = /*#__PURE__*/ (0, _reactDefault.default).forwardRef(function FocusableProvider(props, ref) {
    let { children, ...otherProps } = props;
    let objRef = (0, _useObjectRef.useObjectRef)(ref);
    let context = {
        ...otherProps,
        ref: objRef
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(FocusableContext.Provider, {
        value: context,
        children: children
    });
});
function useFocusable(props, domRef) {
    let { focusProps } = (0, _useFocus.useFocus)(props);
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)(props);
    let interactions = (0, _mergeProps.mergeProps)(focusProps, keyboardProps);
    let domProps = useFocusableContext(domRef);
    let interactionProps = props.isDisabled ? {} : domProps;
    let autoFocusRef = (0, _react.useRef)(props.autoFocus);
    (0, _react.useEffect)(()=>{
        if (autoFocusRef.current && domRef.current) (0, _focusSafely.focusSafely)(domRef.current);
        autoFocusRef.current = false;
    }, [
        domRef
    ]);
    // Always set a tabIndex so that Safari allows focusing native buttons and inputs.
    let tabIndex = props.excludeFromTabOrder ? -1 : 0;
    if (props.isDisabled) tabIndex = undefined;
    return {
        focusableProps: (0, _mergeProps.mergeProps)({
            ...interactions,
            tabIndex
        }, interactionProps)
    };
}
const Focusable = /*#__PURE__*/ (0, _react.forwardRef)(({ children, ...props }, ref)=>{
    ref = (0, _useObjectRef.useObjectRef)(ref);
    let { focusableProps } = useFocusable(props, ref);
    let child = (0, _reactDefault.default).Children.only(children);
    (0, _react.useEffect)(()=>{
        return;
    }, [
        ref,
        props.isDisabled
    ]);
    // @ts-ignore
    let childRef = typeof child.type === 'function' ? child.props.ref : child.ref;
    return /*#__PURE__*/ (0, _reactDefault.default).cloneElement(child, {
        ...(0, _mergeProps.mergeProps)(focusableProps, child.props),
        // @ts-ignore
        // oxlint-disable-next-line react/react-compiler
        ref: (0, _mergeRefs.mergeRefs)(childRef, ref)
    });
});

},{"preact/jsx-runtime":"b2Fbn","./focusSafely":"2xT6S","../utils/domHelpers":"cYkFa","../utils/isFocusable":"dLPRV","../utils/mergeProps":"jycxS","../utils/mergeRefs":"jspQh","react":"gOP0N","./useFocus":"9bXTE","./useKeyboard":"aHm7i","../utils/useObjectRef":"ec0NJ","../utils/useSyncRef":"8a0bK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2xT6S":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A utility function that focuses an element while avoiding undesired side effects such
 * as page scrolling and screen reader issues with CSS transitions.
 */ parcelHelpers.export(exports, "focusSafely", ()=>focusSafely);
var _focusWithoutScrolling = require("../utils/focusWithoutScrolling");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _useFocusVisible = require("./useFocusVisible");
var _domHelpers = require("../utils/domHelpers");
var _runAfterTransition = require("../utils/runAfterTransition");
function focusSafely(element) {
    if (!element.isConnected) return;
    // If the user is interacting with a virtual cursor, e.g. screen reader, then
    // wait until after any animated transitions that are currently occurring on
    // the page before shifting focus. This avoids issues with VoiceOver on iOS
    // causing the page to scroll when moving focus if the element is transitioning
    // from off the screen.
    const ownerDocument = (0, _domHelpers.getOwnerDocument)(element);
    if ((0, _useFocusVisible.getInteractionModality)() === 'virtual') {
        let lastFocusedElement = (0, _domfunctions.getActiveElement)(ownerDocument);
        (0, _runAfterTransition.runAfterTransition)(()=>{
            const activeElement = (0, _domfunctions.getActiveElement)(ownerDocument);
            // If focus did not move or focus was lost to the body, and the element is still in the document, focus it.
            if ((activeElement === lastFocusedElement || activeElement === ownerDocument.body) && element.isConnected) (0, _focusWithoutScrolling.focusWithoutScrolling)(element);
        });
    } else (0, _focusWithoutScrolling.focusWithoutScrolling)(element);
}

},{"../utils/focusWithoutScrolling":"gcZ3w","../utils/shadowdom/DOMFunctions":"8kfpz","./useFocusVisible":"aBfUW","../utils/domHelpers":"cYkFa","../utils/runAfterTransition":"k2HOw","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aBfUW":[function(require,module,exports,__globalThis) {
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
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "changeHandlers", ()=>changeHandlers);
parcelHelpers.export(exports, "hasSetupGlobalListeners", ()=>hasSetupGlobalListeners);
/**
 * EXPERIMENTAL
 * Adds a window (i.e. iframe) to the list of windows that are being tracked for focus visible.
 *
 * Sometimes apps render portions of their tree into an iframe. In this case, we cannot accurately
 * track if the focus is visible because we cannot see interactions inside the iframe. If you have
 * this in your application's architecture, then this function will attach event listeners inside
 * the iframe. You should call `addWindowFocusTracking` with an element from inside the window you
 * wish to add. We'll retrieve the relevant elements based on that. Note, you do not need to call
 * this for the default window, as we call it for you.
 *
 * When you are ready to stop listening, but you do not wish to unmount the iframe, you may call the
 * cleanup function returned by `addWindowFocusTracking`. Otherwise, when you unmount the iframe,
 * all listeners and state will be cleaned up automatically for you.
 *
 * @param element @default document.body - The element provided will be used to get the window to
 *   add.
 * @returns A function to remove the event listeners and cleanup the state.
 */ parcelHelpers.export(exports, "addWindowFocusTracking", ()=>addWindowFocusTracking);
/**
 * If true, keyboard focus is visible.
 */ parcelHelpers.export(exports, "isFocusVisible", ()=>isFocusVisible);
parcelHelpers.export(exports, "getInteractionModality", ()=>getInteractionModality);
parcelHelpers.export(exports, "setInteractionModality", ()=>setInteractionModality);
/** @private */ parcelHelpers.export(exports, "getPointerType", ()=>getPointerType);
/**
 * Keeps state of the current modality.
 */ parcelHelpers.export(exports, "useInteractionModality", ()=>useInteractionModality);
/**
 * Manages focus visible state for the page, and subscribes individual components for updates.
 */ parcelHelpers.export(exports, "useFocusVisible", ()=>useFocusVisible);
/**
 * Listens for trigger change and reports if focus is visible (i.e., modality is not pointer).
 */ parcelHelpers.export(exports, "useFocusVisibleListener", ()=>useFocusVisibleListener);
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _domHelpers = require("../utils/domHelpers");
var _utils = require("./utils");
var _platform = require("../utils/platform");
var _isVirtualEvent = require("../utils/isVirtualEvent");
var _openLink = require("../utils/openLink");
var _react = require("react");
var _ssrprovider = require("../ssr/SSRProvider");
let currentModality = null;
let currentPointerType = 'keyboard';
const changeHandlers = new Set();
let hasSetupGlobalListeners = new Map(); // We use a map here to support setting event listeners across multiple document objects.
let hasEventBeforeFocus = false;
let hasBlurredWindowRecently = false;
// Only Tab or Esc keys will make focus visible on text input elements
const FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
};
function triggerChangeHandlers(modality, e) {
    for (let handler of changeHandlers)handler(modality, e);
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus
 * styles visible.
 */ function isValidKey(e) {
    // Control and Shift keys trigger when navigating back to the tab with keyboard.
    return !(e.metaKey || !(0, _platform.isMac)() && e.altKey || e.ctrlKey || e.key === 'Control' || e.key === 'Shift' || e.key === 'Meta');
}
function handleKeyboardEvent(e) {
    hasEventBeforeFocus = true;
    if (!(0, _openLink.openLink).isOpening && isValidKey(e)) {
        currentModality = 'keyboard';
        currentPointerType = 'keyboard';
        triggerChangeHandlers('keyboard', e);
    }
}
function handlePointerEvent(e) {
    currentModality = 'pointer';
    currentPointerType = 'pointerType' in e ? e.pointerType : 'mouse';
    if (e.type === 'mousedown' || e.type === 'pointerdown') {
        hasEventBeforeFocus = true;
        triggerChangeHandlers('pointer', e);
    }
}
function handleClickEvent(e) {
    if (!(0, _openLink.openLink).isOpening && (0, _isVirtualEvent.isVirtualClick)(e)) {
        hasEventBeforeFocus = true;
        currentModality = 'virtual';
        currentPointerType = 'virtual';
    }
}
function handleFocusEvent(e) {
    if (0, _utils.ignoreFocusEvent) return;
    let target = (0, _domfunctions.getEventTarget)(e);
    let ownerWindow = (0, _domHelpers.getOwnerWindow)(target);
    let ownerDocument = (0, _domHelpers.getOwnerDocument)(target);
    // When the window regains focus, the browser restores focus to the element that was focused
    // before, firing a focus event the user did not initiate. handleWindowBlur sets
    // hasBlurredWindowRecently so restored focus doesn't switch to virtual modality below, but
    // Safari fires the window/element focus pair twice when returning to a tab or app and the first
    // element focus event clears the flag, so re-arm it whenever the window itself is focused.
    // Like handleWindowBlur, this intentionally doesn't check isTrusted.
    if (target === ownerWindow) {
        hasBlurredWindowRecently = true;
        return;
    }
    // Firefox fires two extra focus events when the user first clicks into an iframe:
    // first on the window, then on the document. We ignore these events so they don't
    // cause keyboard focus rings to appear.
    if (target === ownerDocument || !e.isTrusted) return;
    // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
    // This occurs, for example, when navigating a form with the next/previous buttons on iOS.
    if (!hasEventBeforeFocus && !hasBlurredWindowRecently) {
        currentModality = 'virtual';
        currentPointerType = 'virtual';
        triggerChangeHandlers('virtual', e);
    }
    hasEventBeforeFocus = false;
    hasBlurredWindowRecently = false;
}
function handleWindowBlur() {
    if (0, _utils.ignoreFocusEvent) return;
    // When the window is blurred, reset state. This is necessary when tabbing out of the window,
    // for example, since a subsequent focus event won't be fired.
    hasEventBeforeFocus = false;
    hasBlurredWindowRecently = true;
}
function handleInvalidEvent(e) {
    let startingActiveElement = (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)((0, _domfunctions.getEventTarget)(e)));
    queueMicrotask(()=>{
        // If focus was moved to a different element after the form became invalid,
        // then it was likely a forms library that moved focus to the first invalid field.
        // In this case, we want to set the modality to keyboard.
        if ((0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)((0, _domfunctions.getEventTarget)(e))) !== startingActiveElement) setInteractionModality('keyboard');
    });
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */ function setupGlobalFocusEvents(element) {
    // eslint-disable-next-line no-restricted-globals
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const windowObject = (0, _domHelpers.getOwnerWindow)(element);
    const documentObject = (0, _domHelpers.getOwnerDocument)(element);
    if (hasSetupGlobalListeners.get(windowObject)) return;
    // Programmatic focus() calls shouldn't affect the current input modality.
    // However, we need to detect other cases when a focus event occurs without
    // a preceding user event (e.g. screen reader focus). Overriding the focus
    // method on HTMLElement.prototype is a bit hacky, but works.
    // defineProperty (not assignment) so this works even if `focus` is currently
    // a getter-only accessor — e.g. when @testing-library/user-event's setup()
    // has instrumented it. Plain assignment throws in that case.
    let focus = windowObject.HTMLElement.prototype.focus;
    Reflect.defineProperty(windowObject.HTMLElement.prototype, 'focus', {
        configurable: true,
        writable: true,
        value: function() {
            hasEventBeforeFocus = true;
            focus.apply(this, arguments);
        }
    });
    documentObject.addEventListener('keydown', handleKeyboardEvent, true);
    documentObject.addEventListener('keyup', handleKeyboardEvent, true);
    documentObject.addEventListener('click', handleClickEvent, true);
    documentObject.addEventListener('invalid', handleInvalidEvent, true);
    // Register focus events on the window so they are sure to happen
    // before React's event listeners (registered on the document).
    windowObject.addEventListener('focus', handleFocusEvent, true);
    windowObject.addEventListener('blur', handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        documentObject.addEventListener('pointerdown', handlePointerEvent, true);
        documentObject.addEventListener('pointermove', handlePointerEvent, true);
        documentObject.addEventListener('pointerup', handlePointerEvent, true);
    }
    // Add unmount handler
    windowObject.addEventListener('beforeunload', ()=>{
        tearDownWindowFocusTracking(element);
    }, {
        once: true
    });
    hasSetupGlobalListeners.set(windowObject, {
        focus
    });
}
const tearDownWindowFocusTracking = (element, loadListener)=>{
    const windowObject = (0, _domHelpers.getOwnerWindow)(element);
    const documentObject = (0, _domHelpers.getOwnerDocument)(element);
    if (loadListener) documentObject.removeEventListener('DOMContentLoaded', loadListener);
    if (!hasSetupGlobalListeners.has(windowObject)) return;
    Reflect.defineProperty(windowObject.HTMLElement.prototype, 'focus', {
        configurable: true,
        writable: true,
        value: hasSetupGlobalListeners.get(windowObject).focus
    });
    documentObject.removeEventListener('keydown', handleKeyboardEvent, true);
    documentObject.removeEventListener('keyup', handleKeyboardEvent, true);
    documentObject.removeEventListener('click', handleClickEvent, true);
    documentObject.removeEventListener('invalid', handleInvalidEvent, true);
    windowObject.removeEventListener('focus', handleFocusEvent, true);
    windowObject.removeEventListener('blur', handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        documentObject.removeEventListener('pointerdown', handlePointerEvent, true);
        documentObject.removeEventListener('pointermove', handlePointerEvent, true);
        documentObject.removeEventListener('pointerup', handlePointerEvent, true);
    }
    hasSetupGlobalListeners.delete(windowObject);
};
function addWindowFocusTracking(element) {
    const documentObject = (0, _domHelpers.getOwnerDocument)(element);
    let loadListener;
    if (documentObject.readyState !== 'loading') setupGlobalFocusEvents(element);
    else {
        loadListener = ()=>{
            setupGlobalFocusEvents(element);
        };
        documentObject.addEventListener('DOMContentLoaded', loadListener);
    }
    return ()=>tearDownWindowFocusTracking(element, loadListener);
}
// Server-side rendering does not have the document object defined
// eslint-disable-next-line no-restricted-globals
if (typeof document !== 'undefined') addWindowFocusTracking();
function isFocusVisible() {
    return currentModality !== 'pointer';
}
function getInteractionModality() {
    return currentModality;
}
function setInteractionModality(modality) {
    currentModality = modality;
    currentPointerType = modality === 'pointer' ? 'mouse' : modality;
    triggerChangeHandlers(modality, null);
}
function getPointerType() {
    return currentPointerType;
}
function useInteractionModality() {
    setupGlobalFocusEvents();
    let [modality, setModality] = (0, _react.useState)(currentModality);
    (0, _react.useEffect)(()=>{
        let handler = ()=>{
            setModality(currentModality);
        };
        changeHandlers.add(handler);
        return ()=>{
            changeHandlers.delete(handler);
        };
    }, []);
    return (0, _ssrprovider.useIsSSR)() ? null : modality;
}
const nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape
 * keys pressed) so that focus visible style can be properly set.
 */ function isKeyboardFocusEvent(isTextInput, modality, e) {
    let eventTarget = e ? (0, _domfunctions.getEventTarget)(e) : undefined;
    let ownerDocument = (0, _domHelpers.getOwnerDocument)(eventTarget);
    let ownerWindow = (0, _domHelpers.getOwnerWindow)(eventTarget);
    const IHTMLInputElement = typeof ownerWindow !== 'undefined' ? ownerWindow.HTMLInputElement : HTMLInputElement;
    const IHTMLTextAreaElement = typeof ownerWindow !== 'undefined' ? ownerWindow.HTMLTextAreaElement : HTMLTextAreaElement;
    const IHTMLElement = typeof ownerWindow !== 'undefined' ? ownerWindow.HTMLElement : HTMLElement;
    const IKeyboardEvent = typeof ownerWindow !== 'undefined' ? ownerWindow.KeyboardEvent : KeyboardEvent;
    // For keyboard events that occur on a non-input element that will move focus into input element (aka ArrowLeft going from Datepicker button to the main input group)
    // we need to rely on the user passing isTextInput into here. This way we can skip toggling focus visiblity for said input element
    let activeElement = (0, _domfunctions.getActiveElement)(ownerDocument);
    isTextInput = isTextInput || activeElement instanceof IHTMLInputElement && !nonTextInputTypes.has(activeElement.type) || activeElement instanceof IHTMLTextAreaElement || activeElement instanceof IHTMLElement && activeElement.isContentEditable;
    return !(isTextInput && modality === 'keyboard' && e instanceof IKeyboardEvent && !FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function useFocusVisible(props = {}) {
    let { isTextInput, autoFocus } = props;
    let [isFocusVisibleState, setFocusVisible] = (0, _react.useState)(autoFocus || isFocusVisible());
    useFocusVisibleListener((isFocusVisible)=>{
        setFocusVisible(isFocusVisible);
    }, [
        isTextInput
    ], {
        isTextInput
    });
    return {
        isFocusVisible: isFocusVisibleState
    };
}
function useFocusVisibleListener(fn, deps, opts) {
    setupGlobalFocusEvents();
    (0, _react.useEffect)(()=>{
        if (opts?.enabled === false) return;
        let handler = (modality, e)=>{
            // We want to early return for any keyboard events that occur inside text inputs EXCEPT for Tab and Escape
            if (!isKeyboardFocusEvent(!!opts?.isTextInput, modality, e)) return;
            fn(isFocusVisible());
        };
        changeHandlers.add(handler);
        return ()=>{
            changeHandlers.delete(handler);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","./utils":"iOeVY","../utils/platform":"eBqgD","../utils/isVirtualEvent":"dtScK","../utils/openLink":"gH3wl","react":"gOP0N","../ssr/SSRProvider":"2cndP","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iOeVY":[function(require,module,exports,__globalThis) {
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
// Turn a native event into a React synthetic event.
parcelHelpers.export(exports, "createSyntheticEvent", ()=>createSyntheticEvent);
parcelHelpers.export(exports, "setEventTarget", ()=>setEventTarget);
parcelHelpers.export(exports, "useSyntheticBlurEvent", ()=>useSyntheticBlurEvent);
parcelHelpers.export(exports, "ignoreFocusEvent", ()=>ignoreFocusEvent);
/**
 * This function prevents the next focus event fired on `target`, without using
 * `event.preventDefault()`. It works by waiting for the series of focus events to occur, and
 * reverts focus back to where it was before. It also makes these events mostly non-observable by
 * using a capturing listener on the window and stopping propagation.
 */ parcelHelpers.export(exports, "preventFocus", ()=>preventFocus);
var _focusWithoutScrolling = require("../utils/focusWithoutScrolling");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _domHelpers = require("../utils/domHelpers");
var _isFocusable = require("../utils/isFocusable");
var _react = require("react");
var _useLayoutEffect = require("../utils/useLayoutEffect");
function createSyntheticEvent(nativeEvent) {
    let event = nativeEvent;
    event.nativeEvent = nativeEvent;
    event.isDefaultPrevented = ()=>event.defaultPrevented;
    // cancelBubble is technically deprecated in the spec, but still supported in all browsers.
    event.isPropagationStopped = ()=>event.cancelBubble;
    event.persist = ()=>{};
    return event;
}
function setEventTarget(event, target) {
    Object.defineProperty(event, 'target', {
        value: target
    });
    Object.defineProperty(event, 'currentTarget', {
        value: target
    });
}
function useSyntheticBlurEvent(onBlur) {
    let stateRef = (0, _react.useRef)({
        isFocused: false,
        observer: null
    });
    // Clean up MutationObserver on unmount. See below.
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        const state = stateRef.current;
        return ()=>{
            if (state.observer) {
                state.observer.disconnect();
                state.observer = null;
            }
        };
    }, []);
    // This function is called during a React onFocus event.
    return (0, _react.useCallback)((e)=>{
        // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
        // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
        // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
        // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
        let eventTarget = (0, _domfunctions.getEventTarget)(e);
        if (eventTarget instanceof HTMLButtonElement || eventTarget instanceof HTMLInputElement || eventTarget instanceof HTMLTextAreaElement || eventTarget instanceof HTMLSelectElement) {
            stateRef.current.isFocused = true;
            let target = eventTarget;
            let onBlurHandler = (e)=>{
                stateRef.current.isFocused = false;
                if (target.disabled) {
                    // For backward compatibility, dispatch a (fake) React synthetic event.
                    let event = createSyntheticEvent(e);
                    onBlur?.(event);
                }
                // We no longer need the MutationObserver once the target is blurred.
                if (stateRef.current.observer) {
                    stateRef.current.observer.disconnect();
                    stateRef.current.observer = null;
                }
            };
            target.addEventListener('focusout', onBlurHandler, {
                once: true
            });
            stateRef.current.observer = new MutationObserver(()=>{
                if (stateRef.current.isFocused && target.disabled) {
                    stateRef.current.observer?.disconnect();
                    let relatedTargetEl = target === (0, _domfunctions.getActiveElement)() ? null : (0, _domfunctions.getActiveElement)();
                    target.dispatchEvent(new FocusEvent('blur', {
                        relatedTarget: relatedTargetEl
                    }));
                    target.dispatchEvent(new FocusEvent('focusout', {
                        bubbles: true,
                        relatedTarget: relatedTargetEl
                    }));
                }
            });
            stateRef.current.observer.observe(target, {
                attributes: true,
                attributeFilter: [
                    'disabled'
                ]
            });
        }
    }, [
        onBlur
    ]);
}
let ignoreFocusEvent = false;
function preventFocus(target) {
    // The browser will focus the nearest focusable ancestor of our target.
    while(target && !(0, _isFocusable.isFocusable)(target, {
        skipVisibilityCheck: true
    }))target = target.parentElement;
    let ownerWindow = (0, _domHelpers.getOwnerWindow)(target);
    let activeElement = (0, _domfunctions.getActiveElement)(ownerWindow.document);
    if (!activeElement || activeElement === target) return;
    // Listen on the target's root (document or shadow root) so we catch focus events inside
    // shadow DOM; they do not reach the main window.
    let targetRoot = target?.getRootNode();
    let root = targetRoot != null && (0, _domHelpers.isShadowRoot)(targetRoot) ? targetRoot : (0, _domHelpers.getOwnerWindow)(target);
    // Focus is "moving to target" when it moves to the button or to a descendant of the button
    // (e.g. SVG icon)
    let isFocusMovingToTarget = (focusTarget)=>focusTarget === target || (0, _domHelpers.isNode)(focusTarget) && (0, _domfunctions.nodeContains)(target, focusTarget);
    // Blur/focusout events have their target as the element losing focus. Stop propagation when
    // that is the previously focused element (activeElement) or a descendant (e.g. in shadow DOM).
    let isBlurFromActiveElement = (eventTarget)=>eventTarget === activeElement || activeElement != null && (0, _domHelpers.isNode)(eventTarget) && (0, _domfunctions.nodeContains)(activeElement, eventTarget);
    ignoreFocusEvent = true;
    let isRefocusing = false;
    let onBlur = (e)=>{
        if (isBlurFromActiveElement((0, _domfunctions.getEventTarget)(e)) || isRefocusing) e.stopImmediatePropagation();
    };
    let onFocusOut = (e)=>{
        if (isBlurFromActiveElement((0, _domfunctions.getEventTarget)(e)) || isRefocusing) {
            e.stopImmediatePropagation();
            // If there was no focusable ancestor, we don't expect a focus event.
            // Re-focus the original active element here.
            if (!target && !isRefocusing) {
                isRefocusing = true;
                (0, _focusWithoutScrolling.focusWithoutScrolling)(activeElement);
                cleanup();
            }
        }
    };
    let onFocus = (e)=>{
        if (isFocusMovingToTarget((0, _domfunctions.getEventTarget)(e)) || isRefocusing) e.stopImmediatePropagation();
    };
    let onFocusIn = (e)=>{
        if (isFocusMovingToTarget((0, _domfunctions.getEventTarget)(e)) || isRefocusing) {
            e.stopImmediatePropagation();
            if (!isRefocusing) {
                isRefocusing = true;
                (0, _focusWithoutScrolling.focusWithoutScrolling)(activeElement);
                cleanup();
            }
        }
    };
    root.addEventListener('blur', onBlur, true);
    root.addEventListener('focusout', onFocusOut, true);
    root.addEventListener('focusin', onFocusIn, true);
    root.addEventListener('focus', onFocus, true);
    let cleanup = ()=>{
        cancelAnimationFrame(raf);
        root.removeEventListener('blur', onBlur, true);
        root.removeEventListener('focusout', onFocusOut, true);
        root.removeEventListener('focusin', onFocusIn, true);
        root.removeEventListener('focus', onFocus, true);
        ignoreFocusEvent = false;
        isRefocusing = false;
    };
    let raf = requestAnimationFrame(cleanup);
    return cleanup;
}

},{"../utils/focusWithoutScrolling":"gcZ3w","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","../utils/isFocusable":"dLPRV","react":"gOP0N","../utils/useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dLPRV":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2025 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "isFocusable", ()=>isFocusable);
parcelHelpers.export(exports, "isTabbable", ()=>isTabbable);
var _domHelpers = require("./domHelpers");
var _isElementVisible = require("./isElementVisible");
const focusableElements = [
    'input:not([disabled]):not([type=hidden])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]:not([contenteditable^="false"])',
    'permission'
];
const FOCUSABLE_ELEMENT_SELECTOR = focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const TABBABLE_ELEMENT_SELECTOR = focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function isFocusable(element, options) {
    return element.matches(FOCUSABLE_ELEMENT_SELECTOR) && !isInert(element) && (options?.skipVisibilityCheck || (0, _isElementVisible.isElementVisible)(element));
}
function isTabbable(element) {
    return element.matches(TABBABLE_ELEMENT_SELECTOR) && (0, _isElementVisible.isElementVisible)(element) && !isInert(element);
}
function isInert(element) {
    let node = element;
    while(node != null){
        if (node instanceof (0, _domHelpers.getOwnerWindow)(node).HTMLElement && node.inert) return true;
        node = node.parentElement;
    }
    return false;
}

},{"./domHelpers":"cYkFa","./isElementVisible":"42Fr7","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"42Fr7":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2021 Adobe. All rights reserved.
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
/**
 * Adapted from https://github.com/testing-library/jest-dom and
 * https://github.com/vuejs/vue-test-utils-next/.
 * Licensed under the MIT License.
 *
 * @param element - Element to evaluate for display or visibility.
 */ parcelHelpers.export(exports, "isElementVisible", ()=>isElementVisible);
var _domHelpers = require("./domHelpers");
const supportsCheckVisibility = typeof Element !== 'undefined' && 'checkVisibility' in Element.prototype;
function isStyleVisible(element) {
    const windowObject = (0, _domHelpers.getOwnerWindow)(element);
    if (!(element instanceof windowObject.HTMLElement) && !(element instanceof windowObject.SVGElement)) return false;
    let { display, visibility } = element.style;
    let isVisible = display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse';
    if (isVisible) {
        const { getComputedStyle } = (0, _domHelpers.getOwnerWindow)(element);
        let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
        isVisible = computedDisplay !== 'none' && computedVisibility !== 'hidden' && computedVisibility !== 'collapse';
    }
    return isVisible;
}
function isAttributeVisible(element, childElement) {
    return !element.hasAttribute('hidden') && // Ignore HiddenSelect when tree walking.
    !element.hasAttribute('data-react-aria-prevent-focus') && (element.nodeName === 'DETAILS' && childElement && childElement.nodeName !== 'SUMMARY' ? element.hasAttribute('open') : true);
}
function isElementVisible(element, childElement) {
    if (supportsCheckVisibility) return element.checkVisibility({
        visibilityProperty: true
    }) && !element.closest('[data-react-aria-prevent-focus]');
    return element.nodeName !== '#comment' && isStyleVisible(element) && isAttributeVisible(element, childElement) && (!element.parentElement || isElementVisible(element.parentElement, element));
}

},{"./domHelpers":"cYkFa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dtScK":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2022 Adobe. All rights reserved.
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
// Original licensing for the following method can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/blob/3c713d513195a53788b3f8bb4b70279d68b15bcc/packages/react-interactions/events/src/dom/shared/index.js#L74-L87
// Keyboards, Assistive Technologies, and element.click() all produce a "virtual"
// click event. This is a method of inferring such clicks. Every browser except
// IE 11 only sets a zero value of "detail" for click events that are "virtual".
// However, IE 11 uses a zero value for all click events. For IE 11 we rely on
// the quirk that it produces click events that are of type PointerEvent, and
// where only the "virtual" click lacks a pointerType field.
parcelHelpers.export(exports, "isVirtualClick", ()=>isVirtualClick);
parcelHelpers.export(exports, "isVirtualPointerEvent", ()=>isVirtualPointerEvent);
var _platform = require("./platform");
function isVirtualClick(event) {
    // JAWS/NVDA with Firefox.
    if (event.pointerType === '' && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if ((0, _platform.isAndroid)() && event.pointerType) return event.type === 'click' && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
    // Talkback double tap from Windows Firefox touch screen press
    return !(0, _platform.isAndroid)() && event.width === 0 && event.height === 0 || (0, _platform.isAndroid)() && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse';
}

},{"./platform":"eBqgD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k2HOw":[function(require,module,exports,__globalThis) {
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
/**
 * Delays a callback execution until all elements finished their transition.
 */ parcelHelpers.export(exports, "runAfterTransition", ()=>runAfterTransition);
var _domHelpers = require("./domHelpers");
var _domfunctions = require("./shadowdom/DOMFunctions");
// We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
const transitionsByElement = new Map();
const transitionCallbacks = new Set();
function isTransitionEvent(event) {
    return 'propertyName' in event;
}
function onTransitionStart(e) {
    let eventTarget = (0, _domfunctions.getEventTarget)(e);
    if (!isTransitionEvent(e) || !eventTarget) return;
    // Add the transitioning property to the list for this element.
    let transitions = transitionsByElement.get(eventTarget);
    if (!transitions) {
        transitions = new Set();
        transitionsByElement.set(eventTarget, transitions);
        // The transitioncancel event must be registered on the element itself, rather than as a global
        // event. This enables us to handle when the node is deleted from the document while it is transitioning.
        // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
        eventTarget.addEventListener('transitioncancel', onTransitionEnd, {
            once: true
        });
    }
    transitions.add(e.propertyName);
}
function onTransitionEnd(e) {
    let eventTarget = (0, _domfunctions.getEventTarget)(e);
    if (!isTransitionEvent(e) || !eventTarget) return;
    // Remove property from list of transitioning properties.
    let properties = transitionsByElement.get(eventTarget);
    if (!properties) return;
    properties.delete(e.propertyName);
    // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
    if (properties.size === 0) {
        eventTarget.removeEventListener('transitioncancel', onTransitionEnd);
        transitionsByElement.delete(eventTarget);
    }
    // If no transitioning elements, call all of the queued callbacks.
    if (transitionsByElement.size === 0) for (let callback of transitionCallbacks){
        callback(true);
        transitionCallbacks.delete(callback);
    }
}
function setupGlobalEvents() {
    (0, _domHelpers.addEvent)(document, 'transitionrun', onTransitionStart);
    (0, _domHelpers.addEvent)(document, 'transitionend', onTransitionEnd);
}
/**
 * Cleans up any elements that are no longer in the document.
 * This is necessary because we can't rely on transitionend events to fire
 * for elements that are removed from the document while transitioning.
 */ function cleanupDetachedElements() {
    for (const [eventTarget] of transitionsByElement)// Similar to `eventTarget instanceof Element && !eventTarget.isConnected`, but avoids
    // the explicit instanceof check, since it may be different in different contexts.
    if ('isConnected' in eventTarget && !eventTarget.isConnected) transitionsByElement.delete(eventTarget);
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') setupGlobalEvents();
    else (0, _domHelpers.addEvent)(document, 'DOMContentLoaded', setupGlobalEvents);
}
function runAfterTransition(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    let frame = window.requestAnimationFrame(()=>{
        cleanupDetachedElements();
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if (transitionsByElement.size === 0) return fn(false);
        transitionCallbacks.add(fn);
    });
    return ()=>{
        window.cancelAnimationFrame(frame);
        transitionCallbacks.delete(fn);
    };
}

},{"./domHelpers":"cYkFa","./shadowdom/DOMFunctions":"8kfpz","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9bXTE":[function(require,module,exports,__globalThis) {
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
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Handles focus events for the immediate target.
 * Focus events on child elements will be ignored.
 */ parcelHelpers.export(exports, "useFocus", ()=>useFocus);
var _react = require("react");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _domHelpers = require("../utils/domHelpers");
var _utils = require("./utils");
function useFocus(props) {
    let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
    const onBlur = (0, _react.useCallback)((e)=>{
        if ((0, _domfunctions.getEventTarget)(e) === e.currentTarget) {
            if (onBlurProp) onBlurProp(e);
            if (onFocusChange) onFocusChange(false);
            return true;
        }
    }, [
        onBlurProp,
        onFocusChange
    ]);
    const onSyntheticFocus = (0, _utils.useSyntheticBlurEvent)(onBlur);
    const onFocus = (0, _react.useCallback)((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        let eventTarget = (0, _domfunctions.getEventTarget)(e);
        const ownerDocument = (0, _domHelpers.getOwnerDocument)(eventTarget);
        const activeElement = ownerDocument ? (0, _domfunctions.getActiveElement)(ownerDocument) : (0, _domfunctions.getActiveElement)();
        if (eventTarget === e.currentTarget && eventTarget === activeElement) {
            if (onFocusProp) onFocusProp(e);
            if (onFocusChange) onFocusChange(true);
            onSyntheticFocus(e);
        }
    }, [
        onFocusChange,
        onFocusProp,
        onSyntheticFocus
    ]);
    return {
        focusProps: {
            onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : undefined,
            onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : undefined
        }
    };
}

},{"react":"gOP0N","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","./utils":"iOeVY","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aHm7i":[function(require,module,exports,__globalThis) {
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
/**
 * Handles keyboard interactions for a focusable element.
 */ parcelHelpers.export(exports, "useKeyboard", ()=>useKeyboard);
var _chain = require("../utils/chain");
var _createEventHandler = require("./createEventHandler");
var _createKeyboardShortcutHandler = require("./createKeyboardShortcutHandler");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
function useKeyboard(props) {
    let { shortcuts, allowRepeats = false, allowComposing = false } = props;
    let onKeyDown;
    let onKeyUp;
    if (shortcuts) {
        let shortcutHandler = (0, _createKeyboardShortcutHandler.createKeyboardShortcutHandler)(shortcuts);
        let shortcutOnKeyDown = (0, _createEventHandler.createEventHandler)((e)=>{
            // If keyboard event didn't originate from a child of the current target,
            // then it's a React event coming through a portal. We should ignore it.
            if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) {
                e.continuePropagation();
                return;
            }
            if (e.nativeEvent?.repeat && !allowRepeats || e.nativeEvent?.isComposing && !allowComposing) {
                e.continuePropagation();
                return;
            }
            shortcutHandler(e);
        });
        let shortcutOnKeyUp = (0, _createEventHandler.createEventHandler)((e)=>{
            // If keyboard event didn't originate from a child of the current target,
            // then it's a React event coming through a portal. We should ignore it.
            if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) {
                e.continuePropagation();
                return;
            }
            if (e.nativeEvent?.repeat && !allowRepeats || e.nativeEvent?.isComposing && !allowComposing) {
                e.continuePropagation();
                return;
            }
            // implement shortcut handler on keyup, what should the map be called? or should it be another syntax on shortcuts?
            e.continuePropagation();
        });
        onKeyDown = props.onKeyDown ? (0, _chain.chain)(props.onKeyDown, shortcutOnKeyDown) : shortcutOnKeyDown;
        onKeyUp = props.onKeyUp ? (0, _chain.chain)(props.onKeyUp, shortcutOnKeyUp) : shortcutOnKeyUp;
    } else {
        onKeyDown = (0, _createEventHandler.createEventHandler)(props.onKeyDown);
        onKeyUp = (0, _createEventHandler.createEventHandler)(props.onKeyUp);
    }
    return {
        keyboardProps: props.isDisabled ? {} : {
            onKeyDown,
            onKeyUp
        }
    };
}

},{"../utils/chain":"bQmEj","./createEventHandler":"7haQV","./createKeyboardShortcutHandler":"fDbpK","../utils/shadowdom/DOMFunctions":"8kfpz","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7haQV":[function(require,module,exports,__globalThis) {
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
/**
 * This function wraps a React event handler to make stopPropagation the default, and support
 * continuePropagation instead.
 */ parcelHelpers.export(exports, "createEventHandler", ()=>createEventHandler);
function createEventHandler(handler) {
    if (!handler) return undefined;
    return (e)=>{
        let shouldStopPropagation = true;
        // Preact passes native DOM events. Their fields are enumerable on the
        // prototype, so object spread alone drops key, target, and currentTarget.
        // Events constructed with defineProperty may also have non-enumerable own
        // fields. Copy both sets of fields while the event is being dispatched.
        let eventProps = {};
        let keys = new Set(Object.getOwnPropertyNames(e));
        for(let key in e)keys.add(key);
        for (let key of keys){
            let value = Reflect.get(e, key);
            eventProps[key] = typeof value === 'function' ? value.bind(e) : value;
        }
        let event = {
            ...e,
            ...eventProps,
            preventDefault () {
                e.preventDefault();
            },
            isDefaultPrevented () {
                return e.isDefaultPrevented();
            },
            stopPropagation () {
                shouldStopPropagation = true;
            },
            continuePropagation () {
                shouldStopPropagation = false;
                // nested createEventHandler might have set continue propagation so we should continue
                // propagation on wrappers
                if (typeof e.continuePropagation === 'function') e.continuePropagation();
            },
            isPropagationStopped () {
                return shouldStopPropagation;
            }
        };
        handler(event);
        // nested createEventHandler calls may already have stopped propagation
        if (shouldStopPropagation && !(typeof e.isPropagationStopped === 'function' && e.isPropagationStopped())) e.stopPropagation();
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fDbpK":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2025 Adobe. All rights reserved.
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
/**
 * Builds the set of canonical modifier tokens for a binding.
 * `Mod` contributes Meta (Mac) or Ctrl (non-Mac); explicit Ctrl/Meta add those keys too.
 */ parcelHelpers.export(exports, "modifierSetFromParsed", ()=>modifierSetFromParsed);
/** Modifier set from a keydown event (native flags only). */ parcelHelpers.export(exports, "modifierSetFromEvent", ()=>modifierSetFromEvent);
/**
 * Parses a shortcut like `"Mod+Shift+z"`, `"Ctrl+Alt+Enter"`, or `"Escape"`.
 * Modifiers are case-insensitive; order does not matter. `control` is an alias for `ctrl`.
 */ parcelHelpers.export(exports, "parseKeyboardShortcut", ()=>parseKeyboardShortcut);
/** Canonical shortcut string for a binding (modifiers sorted: Alt, Ctrl, Meta, Shift, then key). */ parcelHelpers.export(exports, "canonicalKeyboardShortcut", ()=>canonicalKeyboardShortcut);
/** Canonical shortcut string for a keydown event. */ parcelHelpers.export(exports, "keyboardEventToCanonicalShortcut", ()=>keyboardEventToCanonicalShortcut);
/**
 * Returns a keydown handler that runs the action only for an exact modifier+key match.
 * Modifier order in the string does not matter (`Shift+Mod+a` ≡ `Mod+Shift+a`).
 * Any combination of **Shift**, **Alt**, **Ctrl**, **Meta**, and **Mod** is allowed; **Mod** means
 * Cmd on Apple platforms and Ctrl on Windows/Linux (same as before). **control** aliases **ctrl**.
 *
 * Duplicate bindings that normalize to the same shortcut: later object entries win.
 *
 * @example
 *   ```tsx
 *   let onKeyDown = createKeyboardShortcutHandler({
 *     'Mod+s': e => {
 *       e.preventDefault();
 *       save();
 *     },
 *     'Ctrl+Shift+k': () => palette(),
 *     'Meta+Alt+ArrowLeft': () => back()
 *   });
 *   ```;
 */ parcelHelpers.export(exports, "createKeyboardShortcutHandler", ()=>createKeyboardShortcutHandler);
var _platform = require("../utils/platform");
/** Modifier names in shortcut strings (case-insensitive). Order in the string does not matter. */ const MODIFIER_NAMES = new Set([
    'shift',
    'alt',
    'control',
    'meta',
    'mod' // OS dependent - Cmd on Mac, Control on Windows/Linux
]);
/** Canonical modifier order for stable keys (sorted, fixed order). */ const CANONICAL_MODIFIER_ORDER = [
    'Alt',
    'Control',
    'Meta',
    'Shift'
];
function modifierSetFromParsed(parsed) {
    let set = new Set();
    if (parsed.alt) set.add('Alt');
    if (parsed.shift) set.add('Shift');
    if (parsed.ctrl) set.add('Control');
    if (parsed.meta) set.add('Meta');
    if (parsed.mod) set.add((0, _platform.isMac)() ? 'Meta' : 'Control');
    return set;
}
function modifierSetFromEvent(e) {
    let set = new Set();
    if (e.altKey) set.add('Alt');
    if (e.ctrlKey) set.add('Control');
    if (e.metaKey) set.add('Meta');
    if (e.shiftKey) set.add('Shift');
    return set;
}
function sortedModifierTokens(set) {
    return CANONICAL_MODIFIER_ORDER.filter((name)=>set.has(name));
}
function parseKeyboardShortcut(spec) {
    let parts = spec.split('+').reduce((prev, part)=>{
        let lower = part.toLowerCase();
        if (MODIFIER_NAMES.has(lower)) {
            if (lower === 'shift') prev.shift = true;
            else if (lower === 'alt') prev.alt = true;
            else if (lower === 'control') prev.ctrl = true;
            else if (lower === 'meta') prev.meta = true;
            else if (lower === 'mod') prev.mod = true;
        } else prev.key = part;
        return prev;
    }, {
        shift: false,
        alt: false,
        ctrl: false,
        meta: false,
        mod: false,
        key: ''
    });
    if (parts.key === '') throw new Error(`Invalid keyboard shortcut: "${spec}". Must include exactly one non-modifier key (e.g. "a", "Enter", "ArrowDown"). Combine any of Shift, Alt, Ctrl, Meta, and Mod.`);
    return parts;
}
function normalizeEventKey(key) {
    return key.toLowerCase();
}
/** Short aliases for common keys (shortcut side, before match). */ const KEY_ALIASES = {
    space: ' ',
    esc: 'escape',
    del: 'delete',
    ins: 'insert',
    left: 'arrowleft',
    right: 'arrowright',
    up: 'arrowup',
    down: 'arrowdown',
    pageup: 'pageup',
    pagedown: 'pagedown'
};
/** Canonical key segment (lowercase); aliases like `down` → `arrowdown`. */ function canonicalKeyFromSpecKey(specKey) {
    let k = normalizeEventKey(specKey);
    let aliased = KEY_ALIASES[k];
    return aliased != null ? aliased : k;
}
function canonicalKeyboardShortcut(parsed) {
    let mods = sortedModifierTokens(modifierSetFromParsed(parsed));
    let key = canonicalKeyFromSpecKey(parsed.key);
    return mods.length > 0 ? `${mods.join('+')}+${key}` : key;
}
function keyboardEventToCanonicalShortcut(e) {
    let mods = sortedModifierTokens(modifierSetFromEvent(e));
    let key = normalizeEventKey(e.key);
    let prefix = mods.length > 0 ? `${mods.join('+')}+` : '';
    return prefix + key;
}
function createKeyboardShortcutHandler(bindings) {
    let map = new Map();
    for (let [spec, action] of Object.entries(bindings)){
        let parsed = parseKeyboardShortcut(spec);
        map.set(canonicalKeyboardShortcut(parsed), action);
    }
    return (e)=>{
        let canonical = keyboardEventToCanonicalShortcut(e);
        let action = map.get(canonical);
        let result = action?.(e);
        if (result === undefined && action !== undefined) result = {
            shouldContinuePropagation: false,
            shouldPreventDefault: true
        };
        else if (typeof result === 'boolean') result = {
            shouldContinuePropagation: !result,
            shouldPreventDefault: result
        };
        if (result?.shouldPreventDefault) e.preventDefault();
        if (!action || result?.shouldContinuePropagation) e.continuePropagation();
    };
}

},{"../utils/platform":"eBqgD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ec0NJ":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2021 Adobe. All rights reserved.
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
/**
 * Offers an object ref for a given callback ref or an object ref. Especially
 * helfpul when passing forwarded refs (created using `React.forwardRef`) to
 * React Aria hooks.
 *
 * @param ref The original ref intended to be used.
 * @returns An object ref that updates the given ref.
 * @see https://react.dev/reference/react/forwardRef
 */ parcelHelpers.export(exports, "useObjectRef", ()=>useObjectRef);
var _react = require("react");
function useObjectRef(ref) {
    const objRef = (0, _react.useRef)(null);
    const cleanupRef = (0, _react.useRef)(undefined);
    const refEffect = (0, _react.useCallback)((instance)=>{
        if (typeof ref === 'function') {
            const refCallback = ref;
            const refCleanup = refCallback(instance);
            return ()=>{
                if (typeof refCleanup === 'function') refCleanup();
                else refCallback(null);
            };
        } else if (ref) {
            // oxlint-disable-next-line react/react-compiler
            ref.current = instance;
            return ()=>{
                ref.current = null;
            };
        }
    }, [
        ref
    ]);
    return (0, _react.useMemo)(()=>({
            get current () {
                return objRef.current;
            },
            set current (value){
                objRef.current = value;
                if (cleanupRef.current) {
                    cleanupRef.current();
                    cleanupRef.current = undefined;
                }
                if (value != null) cleanupRef.current = refEffect(value);
            }
        }), // oxlint-disable-next-line react/react-compiler
    [
        refEffect
    ]);
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8a0bK":[function(require,module,exports,__globalThis) {
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
// Syncs ref from context with ref passed to hook
parcelHelpers.export(exports, "useSyncRef", ()=>useSyncRef);
var _useLayoutEffect = require("./useLayoutEffect");
function useSyncRef(context, ref) {
    // oxlint-disable-next-line react/react-compiler
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (context && context.ref && ref) {
            // oxlint-disable-next-line react/react-compiler
            context.ref.current = ref.current;
            return ()=>{
                if (context.ref) // oxlint-disable-next-line react-hooks/exhaustive-deps
                context.ref.current = null;
            };
        }
    });
}

},{"./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"amr77":[function(require,module,exports,__globalThis) {
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
/**
 * A utility component that applies a CSS class when an element has keyboard focus.
 * Focus rings are visible only when the user is interacting with a keyboard,
 * not with a mouse, touch, or other input methods.
 */ parcelHelpers.export(exports, "FocusRing", ()=>FocusRing);
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useFocusRing = require("./useFocusRing");
function FocusRing(props) {
    let { children, focusClass, focusRingClass } = props;
    let { isFocused, isFocusVisible, focusProps } = (0, _useFocusRing.useFocusRing)(props);
    let child = (0, _reactDefault.default).Children.only(children);
    return /*#__PURE__*/ (0, _reactDefault.default).cloneElement(child, (0, _mergeProps.mergeProps)(child.props, {
        ...focusProps,
        className: (0, _clsxDefault.default)({
            [focusClass || '']: isFocused,
            [focusRingClass || '']: isFocusVisible
        })
    }));
}

},{"clsx":"5gQI0","../utils/mergeProps":"jycxS","react":"gOP0N","./useFocusRing":"bP7um","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bP7um":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Determines whether a focus ring should be shown to indicate keyboard focus.
 * Focus rings are visible only when the user is interacting with a keyboard,
 * not with a mouse, touch, or other input methods.
 */ parcelHelpers.export(exports, "useFocusRing", ()=>useFocusRing);
var _useFocusVisible = require("../interactions/useFocusVisible");
var _react = require("react");
var _useFocus = require("../interactions/useFocus");
var _useFocusWithin = require("../interactions/useFocusWithin");
function useFocusRing(props = {}) {
    let { autoFocus = false, isTextInput, within } = props;
    let state = (0, _react.useRef)({
        isFocused: false,
        isFocusVisible: autoFocus || (0, _useFocusVisible.isFocusVisible)()
    });
    let [isFocused, setFocused] = (0, _react.useState)(false);
    let [isFocusVisibleState, setFocusVisible] = (0, _react.useState)(// oxlint-disable-next-line react/react-compiler
    ()=>state.current.isFocused && state.current.isFocusVisible);
    let updateState = (0, _react.useCallback)(()=>setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
    let onFocusChange = (0, _react.useCallback)((isFocused)=>{
        state.current.isFocused = isFocused;
        state.current.isFocusVisible = (0, _useFocusVisible.isFocusVisible)();
        setFocused(isFocused);
        updateState();
    }, [
        updateState
    ]);
    (0, _useFocusVisible.useFocusVisibleListener)((isFocusVisible)=>{
        state.current.isFocusVisible = isFocusVisible;
        updateState();
    }, [
        isTextInput,
        isFocused
    ], {
        enabled: isFocused,
        isTextInput
    });
    let { focusProps } = (0, _useFocus.useFocus)({
        isDisabled: within,
        onFocusChange
    });
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)({
        isDisabled: !within,
        onFocusWithinChange: onFocusChange
    });
    return {
        isFocused,
        isFocusVisible: isFocusVisibleState,
        focusProps: within ? focusWithinProps : focusProps
    };
}

},{"../interactions/useFocusVisible":"aBfUW","react":"gOP0N","../interactions/useFocus":"9bXTE","../interactions/useFocusWithin":"bkSQo","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bkSQo":[function(require,module,exports,__globalThis) {
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
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Handles focus events for the target and its descendants.
 */ parcelHelpers.export(exports, "useFocusWithin", ()=>useFocusWithin);
var _utils = require("./utils");
var _react = require("react");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _domHelpers = require("../utils/domHelpers");
var _useGlobalListeners = require("../utils/useGlobalListeners");
function useFocusWithin(props) {
    let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
    let state = (0, _react.useRef)({
        isFocusWithin: false
    });
    let { addGlobalListener, removeAllGlobalListeners } = (0, _useGlobalListeners.useGlobalListeners)();
    let onBlur = (0, _react.useCallback)((e)=>{
        // Ignore events bubbling through portals.
        if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) return;
        // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
        // when moving focus inside the element. Only trigger if the currentTarget doesn't
        // include the relatedTarget (where focus is moving).
        if (state.current.isFocusWithin && !(0, _domfunctions.nodeContains)(e.currentTarget, e.relatedTarget)) {
            state.current.isFocusWithin = false;
            removeAllGlobalListeners();
            if (onBlurWithin) onBlurWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(false);
        }
    }, [
        onBlurWithin,
        onFocusWithinChange,
        state,
        removeAllGlobalListeners
    ]);
    let onSyntheticFocus = (0, _utils.useSyntheticBlurEvent)(onBlur);
    let onFocus = (0, _react.useCallback)((e)=>{
        // Ignore events bubbling through portals.
        if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) return;
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        let eventTarget = (0, _domfunctions.getEventTarget)(e);
        const ownerDocument = (0, _domHelpers.getOwnerDocument)(eventTarget);
        const activeElement = (0, _domfunctions.getActiveElement)(ownerDocument);
        if (!state.current.isFocusWithin && activeElement === eventTarget) {
            if (onFocusWithin) onFocusWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(true);
            state.current.isFocusWithin = true;
            onSyntheticFocus(e);
            // Browsers don't fire blur events when elements are removed from the DOM.
            // However, if a focus event occurs outside the element we're tracking, we
            // can manually fire onBlur.
            let currentTarget = e.currentTarget;
            addGlobalListener(ownerDocument, 'focus', (e)=>{
                let eventTarget = (0, _domfunctions.getEventTarget)(e);
                if (state.current.isFocusWithin && !(0, _domfunctions.nodeContains)(currentTarget, eventTarget)) {
                    let nativeEvent = new ownerDocument.defaultView.FocusEvent('blur', {
                        relatedTarget: eventTarget
                    });
                    (0, _utils.setEventTarget)(nativeEvent, currentTarget);
                    let event = (0, _utils.createSyntheticEvent)(nativeEvent);
                    onBlur(event);
                }
            }, {
                capture: true
            });
        }
    }, [
        onFocusWithin,
        onFocusWithinChange,
        onSyntheticFocus,
        addGlobalListener,
        onBlur
    ]);
    if (isDisabled) return {
        focusWithinProps: {
            // These cannot be null, that would conflict in mergeProps
            onFocus: undefined,
            onBlur: undefined
        }
    };
    return {
        focusWithinProps: {
            onFocus,
            onBlur
        }
    };
}

},{"./utils":"iOeVY","react":"gOP0N","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","../utils/useGlobalListeners":"jsdt1","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jsdt1":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useGlobalListeners", ()=>useGlobalListeners);
var _react = require("react");
function useGlobalListeners() {
    let globalListeners = (0, _react.useRef)(new Map());
    let addGlobalListener = (0, _react.useCallback)((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = options?.once ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type,
            eventTarget,
            fn,
            options
        });
        eventTarget.addEventListener(type, fn, options);
    }, []);
    let removeGlobalListener = (0, _react.useCallback)((eventTarget, type, listener, options)=>{
        let fn = globalListeners.current.get(listener)?.fn || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (0, _react.useCallback)(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    (0, _react.useEffect)(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener,
        removeGlobalListener,
        removeAllGlobalListeners
    };
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4rqYQ":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "getWrappedElement", ()=>getWrappedElement);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function getWrappedElement(children) {
    let element;
    if (typeof children === 'string') element = /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
        children: children
    });
    else element = (0, _reactDefault.default).Children.only(children);
    return element;
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8ko3H":[function(require,module,exports,__globalThis) {
module.exports["i18nFontFamily"] = `dA8iBG_i18nFontFamily`;
module.exports["is-disabled"] = `dA8iBG_is-disabled`;
module.exports["spectrum-FocusRing-ring"] = `dA8iBG_spectrum-FocusRing-ring`;
module.exports["spectrum-FocusRing"] = `dA8iBG_spectrum-FocusRing ${module.exports["spectrum-FocusRing-ring"]}`;
module.exports["spectrum-FocusRing--quiet"] = `dA8iBG_spectrum-FocusRing--quiet`;
module.exports["spectrum-Link"] = `dA8iBG_spectrum-Link`;
module.exports["spectrum-Link--overBackground"] = `dA8iBG_spectrum-Link--overBackground`;
module.exports["spectrum-Link--quiet"] = `dA8iBG_spectrum-Link--quiet`;
module.exports["spectrum-Link--secondary"] = `dA8iBG_spectrum-Link--secondary`;

},{}],"2yLrj":[function(require,module,exports,__globalThis) {
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
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Handles pointer hover interactions for an element. Normalizes behavior
 * across browsers and platforms, and ignores emulated mouse events on touch devices.
 */ parcelHelpers.export(exports, "useHover", ()=>useHover);
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _domHelpers = require("../utils/domHelpers");
var _react = require("react");
var _useGlobalListeners = require("../utils/useGlobalListeners");
// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore these emulated events so they do not trigger hover behavior.
// See https://bugs.webkit.org/show_bug.cgi?id=214609.
let globalIgnoreEmulatedMouseEvents = false;
let hoverCount = 0;
function setGlobalIgnoreEmulatedMouseEvents() {
    globalIgnoreEmulatedMouseEvents = true;
    // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
    // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
    // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
    // the distant future because a user previously touched the element.
    setTimeout(()=>{
        globalIgnoreEmulatedMouseEvents = false;
    }, 500);
}
function handleGlobalPointerEvent(e) {
    if (e.pointerType === 'touch') setGlobalIgnoreEmulatedMouseEvents();
}
function setupGlobalTouchEvents() {
    let ownerDocument = (0, _domHelpers.getOwnerDocument)(null);
    if (typeof ownerDocument === 'undefined') return;
    if (hoverCount === 0) {
        if (typeof PointerEvent !== 'undefined') ownerDocument.addEventListener('pointerup', handleGlobalPointerEvent);
    }
    hoverCount++;
    return ()=>{
        hoverCount--;
        if (hoverCount > 0) return;
        if (typeof PointerEvent !== 'undefined') ownerDocument.removeEventListener('pointerup', handleGlobalPointerEvent);
    };
}
function useHover(props) {
    let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
    let [isHovered, setHovered] = (0, _react.useState)(false);
    let state = (0, _react.useRef)({
        isHovered: false,
        ignoreEmulatedMouseEvents: false,
        pointerType: '',
        target: null
    }).current;
    (0, _react.useEffect)(setupGlobalTouchEvents, []);
    let { addGlobalListener, removeAllGlobalListeners } = (0, _useGlobalListeners.useGlobalListeners)();
    let { hoverProps, triggerHoverEnd } = (0, _react.useMemo)(()=>{
        let triggerHoverStart = (event, pointerType)=>{
            state.pointerType = pointerType;
            if (isDisabled || pointerType === 'touch' || state.isHovered || !(0, _domfunctions.nodeContains)(event.currentTarget, (0, _domfunctions.getEventTarget)(event))) return;
            state.isHovered = true;
            let target = event.currentTarget;
            state.target = target;
            // When an element that is hovered over is removed, no pointerleave event is fired by the browser,
            // even though the originally hovered target may have shrunk in size so it is no longer hovered.
            // However, a pointerover event will be fired on the new target the mouse is over.
            // In Chrome this happens immediately. In Safari and Firefox, it happens upon moving the mouse one pixel.
            addGlobalListener((0, _domHelpers.getOwnerDocument)((0, _domfunctions.getEventTarget)(event)), 'pointerover', (e)=>{
                if (state.isHovered && state.target && !(0, _domfunctions.nodeContains)(state.target, (0, _domfunctions.getEventTarget)(e))) // oxlint-disable-next-line react/react-compiler
                triggerHoverEnd(e, e.pointerType);
            }, {
                capture: true
            });
            if (onHoverStart) onHoverStart({
                type: 'hoverstart',
                target,
                pointerType
            });
            if (onHoverChange) onHoverChange(true);
            setHovered(true);
        };
        let triggerHoverEnd = (event, pointerType)=>{
            let target = state.target;
            state.pointerType = '';
            state.target = null;
            if (pointerType === 'touch' || !state.isHovered || !target) return;
            state.isHovered = false;
            removeAllGlobalListeners();
            if (onHoverEnd) onHoverEnd({
                type: 'hoverend',
                target,
                pointerType
            });
            if (onHoverChange) onHoverChange(false);
            setHovered(false);
        };
        let hoverProps = {};
        if (typeof PointerEvent !== 'undefined') {
            hoverProps.onPointerEnter = (e)=>{
                if (globalIgnoreEmulatedMouseEvents && e.pointerType === 'mouse') return;
                triggerHoverStart(e, e.pointerType);
            };
            hoverProps.onPointerLeave = (e)=>{
                if (!isDisabled && (0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) triggerHoverEnd(e, e.pointerType);
            };
        } else var e, e1;
        return {
            hoverProps,
            triggerHoverEnd
        };
    }, [
        onHoverStart,
        onHoverChange,
        onHoverEnd,
        isDisabled,
        state,
        addGlobalListener,
        removeAllGlobalListeners
    ]);
    (0, _react.useEffect)(()=>{
        // Call the triggerHoverEnd as soon as isDisabled changes to true
        // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
        if (isDisabled) triggerHoverEnd({
            currentTarget: state.target
        }, state.pointerType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled
    ]);
    return {
        hoverProps,
        isHovered
    };
}

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","react":"gOP0N","../utils/useGlobalListeners":"jsdt1","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"a1pMy":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useSlotProps", ()=>useSlotProps);
parcelHelpers.export(exports, "cssModuleToSlots", ()=>cssModuleToSlots);
parcelHelpers.export(exports, "SlotProvider", ()=>SlotProvider);
parcelHelpers.export(exports, "ClearSlots", ()=>ClearSlots);
var _jsxRuntime = require("preact/jsx-runtime");
var _mergePropsTs = require("../../../../../../../../vendor/react-aria/exports/mergeProps.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
let SlotContext = /*#__PURE__*/ (0, _reactDefault.default).createContext(null);
function useSlotProps(props, defaultSlot) {
    let slot = props.slot || defaultSlot;
    // @ts-ignore TODO why is slot an object and not just string or undefined?
    let { [slot]: slotProps = {} } = (0, _react.useContext)(SlotContext) || {};
    // oxlint-disable-next-line react/react-compiler
    return (0, _mergePropsTs.mergeProps)(props, (0, _mergePropsTs.mergeProps)(slotProps, {
        id: props.id
    }));
}
function cssModuleToSlots(cssModule) {
    return Object.keys(cssModule).reduce((acc, slot)=>{
        acc[slot] = {
            UNSAFE_className: cssModule[slot]
        };
        return acc;
    }, {});
}
function SlotProvider(props) {
    const emptyObj = (0, _react.useMemo)(()=>({}), []);
    let parentSlots = (0, _react.useContext)(SlotContext) || emptyObj;
    let { slots = emptyObj, children } = props;
    // Merge props for each slot from parent context and props
    let value = (0, _react.useMemo)(()=>Object.keys(parentSlots).concat(Object.keys(slots)).reduce((o, p)=>({
                ...o,
                [p]: (0, _mergePropsTs.mergeProps)(parentSlots[p] || {}, slots[p] || {})
            }), {}), [
        parentSlots,
        slots
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(SlotContext.Provider, {
        value: value,
        children: children
    });
}
function ClearSlots(props) {
    let { children, ...otherProps } = props;
    const emptyObj = (0, _react.useMemo)(()=>({}), []);
    let content = children;
    if ((0, _reactDefault.default).Children.toArray(children).length <= 1) {
        if (typeof children === 'function') // need to know if the node is a string or something else that react can render that doesn't get props
        content = /*#__PURE__*/ (0, _reactDefault.default).cloneElement((0, _reactDefault.default).Children.only(children), otherProps);
    }
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(SlotContext.Provider, {
        value: emptyObj,
        children: content
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../../../../../vendor/react-aria/exports/mergeProps.ts":"jycxS","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8Ac1L":[function(require,module,exports,__globalThis) {
module.exports["application"] = `CL2vpG_application`;
module.exports["content"] = `CL2vpG_content`;
module.exports["landmark"] = `CL2vpG_landmark`;
module.exports["globalnav"] = `CL2vpG_globalnav ${module.exports["landmark"]}`;
module.exports["main"] = `CL2vpG_main ${module.exports["landmark"]}`;
module.exports["navcontent"] = `CL2vpG_navcontent`;
module.exports["navigation"] = `CL2vpG_navigation ${module.exports["landmark"]}`;
module.exports["navigation-content"] = `CL2vpG_navigation-content ${module.exports["landmark"]}`;

},{}],"4MKru":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "TextField", ()=>TextField);
var _jsxRuntime = require("preact/jsx-runtime");
var _useTextFieldTs = require("../../../../../../../../vendor/react-aria/exports/useTextField.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _textFieldBaseTsx = require("./TextFieldBase.tsx");
var _formTsx = require("../form/Form.tsx");
var _providerTsx = require("../provider/Provider.tsx");
const TextField = /*#__PURE__*/ (0, _react.forwardRef)(function TextField(props, ref) {
    // oxlint-disable-next-line react/react-compiler
    props = (0, _providerTsx.useProviderProps)(props);
    props = (0, _formTsx.useFormProps)(props);
    let inputRef = (0, _react.useRef)(null);
    let result = (0, _useTextFieldTs.useTextField)(props, inputRef);
    let hasWarned = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        props.placeholder && hasWarned.current;
    }, [
        props.placeholder
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textFieldBaseTsx.TextFieldBase), {
        ...props,
        ...result,
        ref: ref,
        inputRef: inputRef
    });
});

},{"preact/jsx-runtime":"b2Fbn","../../../../../../../../vendor/react-aria/exports/useTextField.ts":"kJGKw","react":"gOP0N","./TextFieldBase.tsx":"sSPTm","../form/Form.tsx":"3HG1p","../provider/Provider.tsx":"ebIlC","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kJGKw":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the behavior and accessibility implementation for a text field.
 *
 * @param props - Props for the text field.
 * @param ref - Ref to the HTML input or textarea element.
 */ parcelHelpers.export(exports, "useTextField", ()=>useTextField);
var _filterDOMProps = require("../utils/filterDOMProps");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useControlledState = require("react-stately/useControlledState");
var _useField = require("../label/useField");
var _useFocusable = require("../interactions/useFocusable");
var _useFormReset = require("../utils/useFormReset");
var _useFormValidation = require("../form/useFormValidation");
var _useFormValidationState = require("react-stately/private/form/useFormValidationState");
function useTextField(props, ref) {
    let { inputElementType = 'input', isDisabled = false, isRequired = false, isReadOnly = false, type = 'text', validationBehavior = 'aria' } = props;
    let [value, setValue] = (0, _useControlledState.useControlledState)(props.value, props.defaultValue || '', props.onChange);
    let { focusableProps } = (0, _useFocusable.useFocusable)(props, ref);
    let validationState = (0, _useFormValidationState.useFormValidationState)({
        ...props,
        value
    });
    let { isInvalid, validationErrors, validationDetails } = validationState.displayValidation;
    let { labelProps, fieldProps, descriptionProps, errorMessageProps } = (0, _useField.useField)({
        ...props,
        isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    const inputOnlyProps = {
        type,
        pattern: props.pattern
    };
    let [initialValue] = (0, _react.useState)(value);
    (0, _useFormReset.useFormReset)(ref, props.defaultValue ?? initialValue, setValue);
    (0, _useFormValidation.useFormValidation)(props, validationState, ref);
    return {
        labelProps,
        inputProps: (0, _mergeProps.mergeProps)(domProps, inputElementType === 'input' ? inputOnlyProps : undefined, {
            disabled: isDisabled,
            readOnly: isReadOnly,
            required: isRequired && validationBehavior === 'native',
            'aria-required': isRequired && validationBehavior === 'aria' || undefined,
            'aria-invalid': isInvalid || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-activedescendant': props['aria-activedescendant'],
            'aria-autocomplete': props['aria-autocomplete'],
            'aria-haspopup': props['aria-haspopup'],
            'aria-controls': props['aria-controls'],
            value,
            onChange: (e)=>setValue((0, _domfunctions.getEventTarget)(e).value),
            autoComplete: props.autoComplete,
            autoCapitalize: props.autoCapitalize,
            maxLength: props.maxLength,
            minLength: props.minLength,
            name: props.name,
            form: props.form,
            placeholder: props.placeholder,
            inputMode: props.inputMode,
            autoCorrect: props.autoCorrect,
            spellCheck: props.spellCheck,
            [parseInt((0, _reactDefault.default).version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: props.enterKeyHint,
            // Clipboard events
            onCopy: props.onCopy,
            onCut: props.onCut,
            onPaste: props.onPaste,
            // Composition events
            onCompositionEnd: props.onCompositionEnd,
            onCompositionStart: props.onCompositionStart,
            onCompositionUpdate: props.onCompositionUpdate,
            // Selection events
            onSelect: props.onSelect,
            // Input events
            onBeforeInput: props.onBeforeInput,
            onInput: props.onInput,
            ...focusableProps,
            ...fieldProps
        }),
        descriptionProps,
        errorMessageProps,
        isInvalid,
        validationErrors,
        validationDetails
    };
}

},{"../utils/filterDOMProps":"h4XHF","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/mergeProps":"jycxS","react":"gOP0N","react-stately/useControlledState":"8yNBD","../label/useField":"5Oeu9","../interactions/useFocusable":"6IFKj","../utils/useFormReset":"iDQvZ","../form/useFormValidation":"kdUj8","react-stately/private/form/useFormValidationState":"491YW","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8yNBD":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useControlledState", ()=>useControlledState);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
// Use the earliest effect possible to reset the ref below.
const useEarlyEffect = typeof document !== 'undefined' || parseInt((0, _reactDefault.default).version, 10) >= 19 ? (0, _reactDefault.default)['useInsertionEffect'] ?? (0, _reactDefault.default).useLayoutEffect : ()=>{};
function useControlledState(value, defaultValue, onChange) {
    // Store the value in both state and a ref. The state value will only be used when uncontrolled.
    // The ref is used to track the most current value, which is passed to the function setState callback.
    let [stateValue, setStateValue] = (0, _react.useState)(value || defaultValue);
    let valueRef = (0, _react.useRef)(stateValue);
    let isControlledRef = (0, _react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, _react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    // After each render, update the ref to the current value.
    // This ensures that the setState callback argument is reset.
    // Note: the effect should not have any dependencies so that controlled values always reset.
    let currentValue = isControlled ? value : stateValue;
    useEarlyEffect(()=>{
        valueRef.current = currentValue;
    });
    let [, forceUpdate] = (0, _react.useReducer)(()=>({}), {});
    let setValue = (0, _react.useCallback)((value, ...args)=>{
        // @ts-ignore - TS doesn't know that T cannot be a function.
        let newValue = typeof value === 'function' ? value(valueRef.current) : value;
        if (!Object.is(valueRef.current, newValue)) {
            // Update the ref so that the next setState callback has the most recent value.
            valueRef.current = newValue;
            setStateValue(newValue);
            // Always trigger a re-render, even when controlled, so that the layout effect above runs to reset the value.
            forceUpdate();
            // Trigger onChange. Note that if setState is called multiple times in a single event,
            // onChange will be called for each one instead of only once.
            onChange?.(newValue, ...args);
        }
    }, [
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5Oeu9":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2021 Adobe. All rights reserved.
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
/**
 * Provides the accessibility implementation for input fields. Fields accept user input, gain
 * context from their label, and may display a description or error message.
 *
 * @param props - Props for the Field.
 */ parcelHelpers.export(exports, "useField", ()=>useField);
var _useLabel = require("./useLabel");
var _mergeProps = require("../utils/mergeProps");
var _useId = require("../utils/useId");
function useField(props) {
    let { description, errorMessage, isInvalid, validationState } = props;
    let { labelProps, fieldProps } = (0, _useLabel.useLabel)(props);
    let descriptionId = (0, _useId.useSlotId)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    let errorMessageId = (0, _useId.useSlotId)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    fieldProps = (0, _mergeProps.mergeProps)(fieldProps, {
        'aria-describedby': [
            descriptionId,
            // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
            errorMessageId,
            props['aria-describedby']
        ].filter(Boolean).join(' ') || undefined
    });
    return {
        labelProps,
        fieldProps,
        descriptionProps: {
            id: descriptionId
        },
        errorMessageProps: {
            id: errorMessageId
        }
    };
}

},{"./useLabel":"kMUgu","../utils/mergeProps":"jycxS","../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kMUgu":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the accessibility implementation for labels and their associated elements.
 * Labels provide context for user inputs.
 *
 * @param props - The props for labels and fields.
 */ parcelHelpers.export(exports, "useLabel", ()=>useLabel);
var _useId = require("../utils/useId");
var _useLabels = require("../utils/useLabels");
function useLabel(props) {
    let { id, label, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel, labelElementType = 'label' } = props;
    id = (0, _useId.useId)(id);
    let labelId = (0, _useId.useId)();
    let labelProps = {};
    if (label) {
        ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
        labelProps = {
            id: labelId,
            htmlFor: labelElementType === 'label' ? id : undefined
        };
    } else !ariaLabelledby && ariaLabel;
    let fieldProps = (0, _useLabels.useLabels)({
        id,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby
    });
    return {
        labelProps,
        fieldProps
    };
}

},{"../utils/useId":"fQAcb","../utils/useLabels":"8ZwLJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8ZwLJ":[function(require,module,exports,__globalThis) {
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
/**
 * Merges aria-label and aria-labelledby into aria-labelledby when both exist.
 *
 * @param props - Aria label props.
 * @param defaultLabel - Default value for aria-label when not present.
 */ parcelHelpers.export(exports, "useLabels", ()=>useLabels);
var _useId = require("./useId");
function useLabels(props, defaultLabel) {
    let { id, 'aria-label': label, 'aria-labelledby': labelledBy } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = (0, _useId.useId)(id);
    if (labelledBy && label) {
        let ids = new Set([
            id,
            ...labelledBy.trim().split(/\s+/)
        ]);
        labelledBy = [
            ...ids
        ].join(' ');
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(' ');
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id,
        'aria-label': label,
        'aria-labelledby': labelledBy
    };
}

},{"./useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iDQvZ":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2023 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "useFormReset", ()=>useFormReset);
var _react = require("react");
var _useEffectEvent = require("./useEffectEvent");
function useFormReset(ref, initialValue, onReset) {
    let handleReset = (0, _useEffectEvent.useEffectEvent)((e)=>{
        if (onReset && !e.defaultPrevented) onReset(initialValue);
    });
    (0, _react.useEffect)(()=>{
        let form = ref?.current?.form;
        // 'reset' does not compose across shadow DOM boundaries, but this listener is intentionally
        // scoped to this specific form element (not a global target), so shadow root propagation does
        // not apply here.
        // oxlint-disable-next-line rsp-rules/no-non-composing-event-listener
        form?.addEventListener('reset', handleReset);
        return ()=>{
            form?.removeEventListener('reset', handleReset);
        };
    }, [
        ref
    ]);
}

},{"react":"gOP0N","./useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"grBNM":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2023 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "useEffectEvent", ()=>useEffectEvent);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useLayoutEffect = require("./useLayoutEffect");
// Use the earliest effect type possible. useInsertionEffect runs during the mutation phase,
// before all layout effects, but is available only in React 18 and later.
const useEarlyEffect = (0, _reactDefault.default)['useInsertionEffect'] ?? (0, _useLayoutEffect.useLayoutEffect);
function useEffectEvent(fn) {
    const ref = (0, _react.useRef)(null);
    useEarlyEffect(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    // @ts-ignore
    return (0, _react.useCallback)((...args)=>{
        const f = ref.current;
        return f?.(...args);
    }, []);
}

},{"react":"gOP0N","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kdUj8":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2023 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "useFormValidation", ()=>useFormValidation);
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _react = require("react");
var _useEffectEvent = require("../utils/useEffectEvent");
var _useLayoutEffect = require("../utils/useLayoutEffect");
function useFormValidation(props, state, ref) {
    let { validationBehavior, focus } = props;
    // This is a useLayoutEffect so that it runs before the useEffect in useFormValidationState, which commits the validation change.
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (validationBehavior === 'native' && ref?.current && 'setCustomValidity' in ref.current && !ref.current.disabled) {
            let errorMessage = state.realtimeValidation.isInvalid ? state.realtimeValidation.validationErrors.join(' ') || 'Invalid value.' : '';
            ref.current.setCustomValidity(errorMessage);
            // Prevent default tooltip for validation message.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=605277
            if (!ref.current.hasAttribute('title')) ref.current.title = '';
            if (!state.realtimeValidation.isInvalid) state.updateValidation(getNativeValidity(ref.current));
        }
    });
    let isIgnoredReset = (0, _react.useRef)(false);
    let onReset = (0, _useEffectEvent.useEffectEvent)(()=>{
        if (!isIgnoredReset.current) state.resetValidation();
    });
    let onInvalid = (0, _useEffectEvent.useEffectEvent)((e)=>{
        // Only commit validation if we are not already displaying one.
        // This avoids clearing server errors that the user didn't actually fix.
        if (!state.displayValidation.isInvalid) state.commitValidation();
        // Auto focus the first invalid input in a form, unless the error already had its default prevented.
        let form = ref?.current?.form;
        if (!e.defaultPrevented && ref && form && getFirstInvalidInput(form) === ref.current) {
            if (focus) focus();
            else ref.current?.focus();
            // Always show focus ring.
            (0, _useFocusVisible.setInteractionModality)('keyboard');
        }
        // Prevent default browser error UI from appearing.
        e.preventDefault();
    });
    let onChange = (0, _useEffectEvent.useEffectEvent)(()=>{
        state.commitValidation();
    });
    (0, _react.useEffect)(()=>{
        let input = ref?.current;
        if (!input) return;
        let form = input.form;
        let reset = form?.reset;
        if (form) // Try to detect React's automatic form reset behavior so we don't clear
        // validation errors that are returned by server actions.
        // To do this, we ignore programmatic form resets that occur outside a user event.
        // This is best-effort. There may be false positives, e.g. setTimeout.
        // oxlint-disable-next-line react/react-compiler
        form.reset = ()=>{
            // React uses MessageChannel for scheduling, so ignore 'message' events.
            isIgnoredReset.current = !window.event || window.event.type === 'message' && (0, _domfunctions.getEventTarget)(window.event) instanceof MessagePort;
            reset?.call(form);
            isIgnoredReset.current = false;
        };
        // 'change' and 'reset' do not compose across shadow DOM boundaries, but these listeners are
        // intentionally scoped to this specific input/form element (not a global target), so shadow
        // root propagation does not apply here.
        input.addEventListener('invalid', onInvalid);
        // oxlint-disable-next-line rsp-rules/no-non-composing-event-listener
        input.addEventListener('change', onChange);
        // oxlint-disable-next-line rsp-rules/no-non-composing-event-listener
        form?.addEventListener('reset', onReset);
        return ()=>{
            input.removeEventListener('invalid', onInvalid);
            input.removeEventListener('change', onChange);
            form?.removeEventListener('reset', onReset);
            if (form) // @ts-ignore
            form.reset = reset;
        };
    }, [
        ref,
        validationBehavior
    ]);
}
function getValidity(input) {
    // The native ValidityState object is live, meaning each property is a getter that returns the current state.
    // We need to create a snapshot of the validity state at the time this function is called to avoid unpredictable React renders.
    let validity = input.validity;
    return {
        badInput: validity.badInput,
        customError: validity.customError,
        patternMismatch: validity.patternMismatch,
        rangeOverflow: validity.rangeOverflow,
        rangeUnderflow: validity.rangeUnderflow,
        stepMismatch: validity.stepMismatch,
        tooLong: validity.tooLong,
        tooShort: validity.tooShort,
        typeMismatch: validity.typeMismatch,
        valueMissing: validity.valueMissing,
        valid: validity.valid
    };
}
function getNativeValidity(input) {
    return {
        isInvalid: !input.validity.valid,
        validationDetails: getValidity(input),
        validationErrors: input.validationMessage ? [
            input.validationMessage
        ] : []
    };
}
function getFirstInvalidInput(form) {
    for(let i = 0; i < form.elements.length; i++){
        let element = form.elements[i];
        if (element.validity?.valid === false) return element;
    }
    return null;
}

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../interactions/useFocusVisible":"aBfUW","react":"gOP0N","../utils/useEffectEvent":"grBNM","../utils/useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"491YW":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2023 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "VALID_VALIDITY_STATE", ()=>VALID_VALIDITY_STATE);
parcelHelpers.export(exports, "DEFAULT_VALIDATION_RESULT", ()=>DEFAULT_VALIDATION_RESULT);
parcelHelpers.export(exports, "FormValidationContext", ()=>FormValidationContext);
parcelHelpers.export(exports, "privateValidationStateProp", ()=>privateValidationStateProp);
parcelHelpers.export(exports, "useFormValidationState", ()=>useFormValidationState);
parcelHelpers.export(exports, "mergeValidation", ()=>mergeValidation);
var _react = require("react");
const VALID_VALIDITY_STATE = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valueMissing: false,
    valid: true
};
const CUSTOM_VALIDITY_STATE = {
    ...VALID_VALIDITY_STATE,
    customError: true,
    valid: false
};
const DEFAULT_VALIDATION_RESULT = {
    isInvalid: false,
    validationDetails: VALID_VALIDITY_STATE,
    validationErrors: []
};
const FormValidationContext = (0, _react.createContext)({});
const privateValidationStateProp = '__reactAriaFormValidationState';
function useFormValidationState(props) {
    // Private prop for parent components to pass state to children.
    if (props[privateValidationStateProp]) {
        let { realtimeValidation, displayValidation, updateValidation, resetValidation, commitValidation } = props[privateValidationStateProp];
        return {
            realtimeValidation,
            displayValidation,
            updateValidation,
            resetValidation,
            commitValidation
        };
    }
    // oxlint-disable-next-line react/react-compiler, react-hooks/rules-of-hooks
    return useFormValidationStateImpl(props);
}
function useFormValidationStateImpl(props) {
    let { isInvalid, validationState, name, value, builtinValidation, validate, validationBehavior = 'aria' } = props;
    // backward compatibility.
    if (validationState) isInvalid ||= validationState === 'invalid';
    // If the isInvalid prop is controlled, update validation result in realtime.
    let controlledError = isInvalid !== undefined ? {
        isInvalid,
        validationErrors: [],
        validationDetails: CUSTOM_VALIDITY_STATE
    } : null;
    // Perform custom client side validation.
    let clientError = (0, _react.useMemo)(()=>{
        if (!validate || value == null) return null;
        let validateErrors = runValidate(validate, value);
        return getValidationResult(validateErrors);
    }, [
        validate,
        value
    ]);
    if (builtinValidation?.validationDetails.valid) builtinValidation = undefined;
    // Get relevant server errors from the form.
    let serverErrors = (0, _react.useContext)(FormValidationContext);
    let serverErrorMessages = (0, _react.useMemo)(()=>{
        if (name) return Array.isArray(name) ? name.flatMap((name)=>asArray(serverErrors[name])) : asArray(serverErrors[name]);
        return [];
    }, [
        serverErrors,
        name
    ]);
    // Show server errors when the form gets a new value, and clear when the user changes the value.
    let [lastServerErrors, setLastServerErrors] = (0, _react.useState)(serverErrors);
    let [isServerErrorCleared, setServerErrorCleared] = (0, _react.useState)(false);
    if (serverErrors !== lastServerErrors) {
        setLastServerErrors(serverErrors);
        setServerErrorCleared(false);
    }
    let serverError = (0, _react.useMemo)(()=>getValidationResult(isServerErrorCleared ? [] : serverErrorMessages), [
        isServerErrorCleared,
        serverErrorMessages
    ]);
    // Track the next validation state in a ref until commitValidation is called.
    let nextValidation = (0, _react.useRef)(DEFAULT_VALIDATION_RESULT);
    let [currentValidity, setCurrentValidity] = (0, _react.useState)(DEFAULT_VALIDATION_RESULT);
    let lastError = (0, _react.useRef)(DEFAULT_VALIDATION_RESULT);
    let commitValidation = ()=>{
        if (!commitQueued) return;
        setCommitQueued(false);
        let error = clientError || builtinValidation || nextValidation.current;
        if (!isEqualValidation(error, lastError.current)) {
            lastError.current = error;
            setCurrentValidity(error);
        }
    };
    let [commitQueued, setCommitQueued] = (0, _react.useState)(false);
    (0, _react.useEffect)(commitValidation);
    // realtimeValidation is used to update the native input element's state based on custom validation logic.
    // displayValidation is the currently displayed validation state that the user sees (e.g. on input change/form submit).
    // With validationBehavior="aria", all errors are displayed in realtime rather than on submit.
    let realtimeValidation = controlledError || serverError || clientError || builtinValidation || DEFAULT_VALIDATION_RESULT;
    let displayValidation = validationBehavior === 'native' ? controlledError || serverError || currentValidity : controlledError || serverError || clientError || builtinValidation || currentValidity;
    return {
        realtimeValidation,
        displayValidation,
        updateValidation (value) {
            // If validationBehavior is 'aria', update in realtime. Otherwise, store in a ref until commit.
            if (validationBehavior === 'aria' && !isEqualValidation(currentValidity, value)) setCurrentValidity(value);
            else nextValidation.current = value;
        },
        resetValidation () {
            // Update the currently displayed validation state to valid on form reset,
            // even if the native validity says it isn't. It'll show again on the next form submit.
            let error = DEFAULT_VALIDATION_RESULT;
            if (!isEqualValidation(error, lastError.current)) {
                lastError.current = error;
                setCurrentValidity(error);
            }
            // Do not commit validation after the next render. This avoids a condition where
            // useSelect calls commitValidation inside an onReset handler.
            if (validationBehavior === 'native') setCommitQueued(false);
            setServerErrorCleared(true);
        },
        commitValidation () {
            // Commit validation state so the user sees it on blur/change/submit. Also clear any server errors.
            // Wait until after the next render to commit so that the latest value has been validated.
            if (validationBehavior === 'native') setCommitQueued(true);
            setServerErrorCleared(true);
        }
    };
}
function asArray(v) {
    if (!v) return [];
    return Array.isArray(v) ? v : [
        v
    ];
}
function runValidate(validate, value) {
    if (typeof validate === 'function') {
        let e = validate(value);
        if (e && typeof e !== 'boolean') return asArray(e);
    }
    return [];
}
function getValidationResult(errors) {
    return errors.length ? {
        isInvalid: true,
        validationErrors: errors,
        validationDetails: CUSTOM_VALIDITY_STATE
    } : null;
}
function isEqualValidation(a, b) {
    if (a === b) return true;
    return !!a && !!b && a.isInvalid === b.isInvalid && a.validationErrors.length === b.validationErrors.length && a.validationErrors.every((a, i)=>a === b.validationErrors[i]) && Object.entries(a.validationDetails).every(([k, v])=>b.validationDetails[k] === v);
}
function mergeValidation(...results) {
    let errors = new Set();
    let isInvalid = false;
    let validationDetails = {
        ...VALID_VALIDITY_STATE
    };
    for (let v of results){
        for (let e of v.validationErrors)errors.add(e);
        // Only these properties apply for checkboxes.
        isInvalid ||= v.isInvalid;
        for(let key in validationDetails)validationDetails[key] ||= v.validationDetails[key];
    }
    validationDetails.valid = !isInvalid;
    return {
        isInvalid,
        validationErrors: [
            ...errors
        ],
        validationDetails
    };
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jtWJJ":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2022 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "DEFAULT_SLOT", ()=>DEFAULT_SLOT);
parcelHelpers.export(exports, "Provider", ()=>Provider);
parcelHelpers.export(exports, "useRenderProps", ()=>useRenderProps);
/**
 * A helper function that accepts a user-provided render prop value (either a static value or a
 * function), and combines it with another value to create a final result.
 */ parcelHelpers.export(exports, "composeRenderProps", ()=>composeRenderProps);
parcelHelpers.export(exports, "useSlottedContext", ()=>useSlottedContext);
parcelHelpers.export(exports, "useContextProps", ()=>useContextProps);
parcelHelpers.export(exports, "useSlot", ()=>useSlot);
/**
 * Filters out `data-*` attributes to keep them from being passed down and duplicated.
 *
 * @param props
 */ parcelHelpers.export(exports, "removeDataAttributes", ()=>removeDataAttributes);
parcelHelpers.export(exports, "dom", ()=>dom);
var _jsxRuntime = require("preact/jsx-runtime");
var _mergeProps = require("react-aria/mergeProps");
var _mergeRefs = require("react-aria/mergeRefs");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useLayoutEffect = require("react-aria/private/utils/useLayoutEffect");
var _useObjectRef = require("react-aria/useObjectRef");
const DEFAULT_SLOT = Symbol('default');
function Provider({ values, children }) {
    for (let [Context, value] of values)// @ts-ignore
    children = /*#__PURE__*/ (0, _jsxRuntime.jsx)(Context.Provider, {
        value: value,
        children: children
    });
    return children;
}
function useRenderProps(props) {
    let { className, style, children, defaultClassName, defaultChildren, defaultStyle, values, render } = props;
    return (0, _react.useMemo)(()=>{
        let computedClassName;
        let computedStyle;
        let computedChildren;
        if (typeof className === 'function') computedClassName = className({
            ...values,
            defaultClassName
        });
        else computedClassName = className;
        if (typeof style === 'function') computedStyle = style({
            ...values,
            defaultStyle: defaultStyle || {}
        });
        else computedStyle = style;
        if (typeof children === 'function') computedChildren = children({
            ...values,
            defaultChildren
        });
        else if (children == null) computedChildren = defaultChildren;
        else computedChildren = children;
        return {
            className: computedClassName ?? defaultClassName,
            style: computedStyle || defaultStyle ? {
                ...defaultStyle,
                ...computedStyle
            } : undefined,
            children: computedChildren ?? defaultChildren,
            'data-rac': '',
            render: render ? (props)=>render(props, values) : undefined
        };
    }, [
        className,
        style,
        children,
        defaultClassName,
        defaultChildren,
        defaultStyle,
        values,
        render
    ]);
}
function composeRenderProps(// https://stackoverflow.com/questions/60898079/typescript-type-t-or-function-t-usage
value, wrap) {
    return (renderProps)=>wrap(typeof value === 'function' ? value(renderProps) : value, renderProps);
}
function useSlottedContext(context, slot) {
    let ctx = (0, _react.useContext)(context);
    if (slot === null) // An explicit `null` slot means don't use context.
    return null;
    if (ctx && typeof ctx === 'object' && 'slots' in ctx && ctx.slots) {
        let slotKey = slot || DEFAULT_SLOT;
        if (!ctx.slots[slotKey]) {
            let availableSlots = new Intl.ListFormat().format(Object.keys(ctx.slots).map((p)=>`"${p}"`));
            let errorMessage = slot ? `Invalid slot "${slot}".` : 'A slot prop is required.';
            throw new Error(`${errorMessage} Valid slot names are ${availableSlots}.`);
        }
        return ctx.slots[slotKey];
    }
    // @ts-ignore
    return ctx;
}
function useContextProps(props, ref, context) {
    let ctx = useSlottedContext(context, props.slot) || {};
    let { ref: contextRef, ...contextProps } = ctx;
    let mergedRef = (0, _useObjectRef.useObjectRef)((0, _react.useMemo)(()=>(0, _mergeRefs.mergeRefs)(ref, contextRef), [
        ref,
        contextRef
    ]));
    let mergedProps = (0, _mergeProps.mergeProps)(contextProps, props);
    // mergeProps does not merge `style`. Adding this there might be a breaking change.
    if ('style' in contextProps && contextProps.style && 'style' in props && props.style) {
        if (typeof contextProps.style === 'function' || typeof props.style === 'function') // @ts-ignore
        mergedProps.style = (renderProps)=>{
            let contextStyle = typeof contextProps.style === 'function' ? contextProps.style(renderProps) : contextProps.style;
            let defaultStyle = {
                ...renderProps.defaultStyle,
                ...contextStyle
            };
            let style = typeof props.style === 'function' ? props.style({
                ...renderProps,
                defaultStyle
            }) : props.style;
            return {
                ...defaultStyle,
                ...style
            };
        };
        else // @ts-ignore
        mergedProps.style = {
            ...contextProps.style,
            ...props.style
        };
    }
    return [
        mergedProps,
        mergedRef
    ];
}
function useSlot(initialState = true) {
    // Initial state is typically based on the parent having an aria-label or aria-labelledby.
    // If it does, this value should be false so that we don't update the state and cause a rerender when we go through the layoutEffect
    let [hasSlot, setHasSlot] = (0, _react.useState)(initialState);
    let hasRun = (0, _react.useRef)(false);
    // A callback ref which will run when the slotted element mounts.
    // This should happen before the useLayoutEffect below.
    let ref = (0, _react.useCallback)((el)=>{
        hasRun.current = true;
        setHasSlot(!!el);
    }, []);
    // If the callback hasn't been called, then reset to false.
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (!hasRun.current) setHasSlot(false);
    }, []);
    return [
        ref,
        hasSlot
    ];
}
function removeDataAttributes(props) {
    const prefix = /^(data-.*)$/;
    let filteredProps = {};
    for(const prop in props)if (!prefix.test(prop)) filteredProps[prop] = props[prop];
    return filteredProps;
}
function DOMElement(ElementType, props, forwardedRef) {
    let { render, ...otherProps } = props;
    let elementRef = (0, _react.useRef)(null);
    let ref = (0, _react.useMemo)(()=>(0, _mergeRefs.mergeRefs)(forwardedRef, elementRef), [
        forwardedRef,
        elementRef
    ]);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{}, [
        ElementType,
        render
    ]);
    let domProps = {
        ...otherProps,
        ref
    };
    if (render) return render(domProps, undefined);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(ElementType, domProps);
}
const domComponentCache = {};
const dom = new Proxy({}, {
    get (target, elementType) {
        if (typeof elementType !== 'string') return undefined;
        let res = domComponentCache[elementType];
        if (!res) {
            res = /*#__PURE__*/ (0, _react.forwardRef)(DOMElement.bind(null, elementType));
            domComponentCache[elementType] = res;
        }
        return res;
    }
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/mergeProps":"jycxS","react-aria/mergeRefs":"jspQh","react":"gOP0N","react-aria/private/utils/useLayoutEffect":"h7M6K","react-aria/useObjectRef":"ec0NJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iPJX7":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "HiddenContext", ()=>HiddenContext);
parcelHelpers.export(exports, "Hidden", ()=>Hidden);
/** Creates a component that forwards its ref and returns null if it is in a hidden subtree. */ // Note: this function is handled specially in the documentation generator. If you change it, you'll need to update DocsTransformer as well.
parcelHelpers.export(exports, "createHideableComponent", ()=>createHideableComponent);
/** Returns whether the component is in a hidden subtree. */ parcelHelpers.export(exports, "useIsHidden", ()=>useIsHidden);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
// React doesn't understand the <template> element, which doesn't have children like a normal element.
// It will throw an error during hydration when it expects the firstChild to contain content rendered
// on the server, when in reality, the browser will have placed this inside the `content` document fragment.
// This monkey patches the firstChild property for our special hidden template elements to work around this error.
// does the same for appendChild/removeChild/insertBefore as per the issue below
// See https://github.com/facebook/react/issues/19932
if (typeof HTMLTemplateElement !== 'undefined') {
    Object.defineProperty(HTMLTemplateElement.prototype, 'firstChild', {
        configurable: true,
        enumerable: true,
        get: function() {
            return this.content.firstChild;
        }
    });
    Object.defineProperty(HTMLTemplateElement.prototype, 'appendChild', {
        configurable: true,
        enumerable: true,
        value: function(node) {
            return this.content.appendChild(node);
        }
    });
    Object.defineProperty(HTMLTemplateElement.prototype, 'removeChild', {
        configurable: true,
        enumerable: true,
        value: function(node) {
            return this.content.removeChild(node);
        }
    });
    Object.defineProperty(HTMLTemplateElement.prototype, 'insertBefore', {
        configurable: true,
        enumerable: true,
        value: function(node, child) {
            return this.content.insertBefore(node, child);
        }
    });
}
const HiddenContext = /*#__PURE__*/ (0, _react.createContext)(false);
function Hidden(props) {
    let isHidden = (0, _react.useContext)(HiddenContext);
    if (isHidden) // Don't hide again if we are already hidden.
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {
        children: props.children
    });
    let children = /*#__PURE__*/ (0, _jsxRuntime.jsx)(HiddenContext.Provider, {
        value: true,
        children: props.children
    });
    // In SSR, portals are not supported by React. Instead, always render into a <template>
    // element, which the browser will never display to the user. In addition, the
    // content is not part of the accessible DOM tree, so it won't affect ids or other accessibility attributes.
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("template", {
        children: children
    });
}
function createHideableComponent(fn) {
    let Wrapper = (props, ref)=>{
        let isHidden = (0, _react.useContext)(HiddenContext);
        if (isHidden) return null;
        // oxlint-disable-next-line react/react-compiler
        return fn(props, ref);
    };
    // @ts-ignore - for react dev tools
    Wrapper.displayName = fn.displayName || fn.name;
    return (0, _react.forwardRef)(Wrapper);
}
function useIsHidden() {
    return (0, _react.useContext)(HiddenContext);
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9g4G2":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the behavior and accessibility implementation for a menu component.
 * A menu displays a list of actions or options that a user can choose.
 *
 * @param props - Props for the menu.
 * @param state - State for the menu, as returned by `useListState`.
 */ parcelHelpers.export(exports, "useMenu", ()=>useMenu);
var _filterDOMProps = require("../utils/filterDOMProps");
var _utils = require("./utils");
var _mergeProps = require("../utils/mergeProps");
var _useSelectableList = require("../selection/useSelectableList");
function useMenu(props, state, ref) {
    let { shouldFocusWrap = true, onKeyDown, onKeyUp, ...otherProps } = props;
    !props['aria-label'] && props['aria-labelledby'];
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    let { listProps } = (0, _useSelectableList.useSelectableList)({
        ...otherProps,
        ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        shouldFocusWrap,
        linkBehavior: 'override'
    });
    (0, _utils.menuData).set(state, {
        onClose: props.onClose,
        onAction: props.onAction,
        shouldUseVirtualFocus: props.shouldUseVirtualFocus
    });
    return {
        menuProps: (0, _mergeProps.mergeProps)(domProps, {
            onKeyDown,
            onKeyUp
        }, {
            role: 'menu',
            ...listProps,
            onKeyDown: (e)=>{
                // don't clear the menu selected keys if the user is presses escape since escape closes the menu
                if (e.key !== 'Escape' || props.shouldUseVirtualFocus) listProps.onKeyDown?.(e);
            }
        })
    };
}

},{"../utils/filterDOMProps":"h4XHF","./utils":"e7rvB","../utils/mergeProps":"jycxS","../selection/useSelectableList":"kK5el","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"e7rvB":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "menuData", ()=>menuData);
const menuData = new WeakMap();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kK5el":[function(require,module,exports,__globalThis) {
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
/**
 * Handles interactions with a selectable list.
 */ parcelHelpers.export(exports, "useSelectableList", ()=>useSelectableList);
var _useSelectableCollection = require("./useSelectableCollection");
var _listKeyboardDelegate = require("./ListKeyboardDelegate");
var _useCollator = require("../i18n/useCollator");
var _react = require("react");
function useSelectableList(props) {
    let { selectionManager, collection, disabledKeys, ref, keyboardDelegate, layoutDelegate, orientation } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = (0, _useCollator.useCollator)({
        usage: 'search',
        sensitivity: 'base'
    });
    let disabledBehavior = selectionManager.disabledBehavior;
    let delegate = (0, _react.useMemo)(()=>keyboardDelegate || new (0, _listKeyboardDelegate.ListKeyboardDelegate)({
            collection,
            disabledKeys,
            disabledBehavior,
            ref,
            collator,
            layoutDelegate,
            orientation
        }), [
        keyboardDelegate,
        layoutDelegate,
        collection,
        disabledKeys,
        ref,
        collator,
        disabledBehavior,
        orientation
    ]);
    let { collectionProps } = (0, _useSelectableCollection.useSelectableCollection)({
        ...props,
        ref,
        selectionManager,
        keyboardDelegate: delegate
    });
    return {
        listProps: collectionProps
    };
}

},{"./useSelectableCollection":"cg1hz","./ListKeyboardDelegate":"hxzwH","../i18n/useCollator":"ghoIN","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hxzwH":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "ListKeyboardDelegate", ()=>ListKeyboardDelegate);
var _domlayoutDelegate = require("./DOMLayoutDelegate");
var _utils = require("./utils");
var _isScrollable = require("../utils/isScrollable");
class ListKeyboardDelegate {
    collection;
    disabledKeys;
    disabledBehavior;
    ref;
    collator;
    layout;
    orientation;
    direction;
    layoutDelegate;
    constructor(...args){
        if (args.length === 1) {
            let opts = args[0];
            this.collection = opts.collection;
            this.ref = opts.ref;
            this.collator = opts.collator;
            this.disabledKeys = opts.disabledKeys || new Set();
            this.disabledBehavior = opts.disabledBehavior || 'all';
            this.orientation = opts.orientation || 'vertical';
            this.direction = opts.direction;
            this.layout = opts.layout || 'stack';
            this.layoutDelegate = opts.layoutDelegate || new (0, _domlayoutDelegate.DOMLayoutDelegate)(opts.ref);
        } else {
            this.collection = args[0];
            this.disabledKeys = args[1];
            this.ref = args[2];
            this.collator = args[3];
            this.layout = 'stack';
            this.orientation = 'vertical';
            this.disabledBehavior = 'all';
            this.layoutDelegate = new (0, _domlayoutDelegate.DOMLayoutDelegate)(this.ref);
        }
        // If this is a vertical stack, remove the left/right methods completely
        // so they aren't called by useDroppableCollection.
        if (this.layout === 'stack' && this.orientation === 'vertical') {
            this.getKeyLeftOf = undefined;
            this.getKeyRightOf = undefined;
        }
    }
    isDisabled(item) {
        return this.disabledBehavior === 'all' && (item.props?.isDisabled || this.disabledKeys.has(item.key)) && item.props?.disabledBehavior !== 'selection';
    }
    findNextNonDisabled(key, getNext, includeDisabled = false) {
        let nextKey = key;
        while(nextKey != null){
            let item = this.collection.getItem(nextKey);
            if (item?.type === 'item' && (includeDisabled || !this.isDisabled(item))) return nextKey;
            nextKey = getNext(nextKey);
        }
        return null;
    }
    getNextKey(key, options) {
        let nextKey = key;
        nextKey = this.collection.getKeyAfter(nextKey);
        return this.findNextNonDisabled(nextKey, (key)=>this.collection.getKeyAfter(key), options?.includeDisabled);
    }
    getPreviousKey(key, options) {
        let nextKey = key;
        nextKey = this.collection.getKeyBefore(nextKey);
        return this.findNextNonDisabled(nextKey, (key)=>this.collection.getKeyBefore(key), options?.includeDisabled);
    }
    findKey(key, nextKey, shouldSkip) {
        let tempKey = key;
        let itemRect = this.layoutDelegate.getItemRect(tempKey);
        if (!itemRect || tempKey == null) return null;
        // Find the item above or below in the same column.
        let prevRect = itemRect;
        do {
            tempKey = nextKey(tempKey);
            if (tempKey == null) break;
            itemRect = this.layoutDelegate.getItemRect(tempKey);
        }while (itemRect && shouldSkip(prevRect, itemRect) && tempKey != null);
        return tempKey;
    }
    isSameRow(prevRect, itemRect) {
        return prevRect.y === itemRect.y || prevRect.x !== itemRect.x;
    }
    isSameColumn(prevRect, itemRect) {
        return prevRect.x === itemRect.x || prevRect.y !== itemRect.y;
    }
    // checks to see if the next/prev key is spatially above/below the current key. If not, that means we are in
    // a reversed column layout and need to adjust appropriately
    // TODO: still need to see how this works with virtualizer once there is handling for the reverse layout
    // this felt like a simpler approach then changing getKeyAbove/Below to be purely spatial calculations
    isReversed(key) {
        let nextKey = this.getNextKey(key);
        let currentEl = (0, _utils.getItemElement)(this.ref, key);
        if (nextKey != null) {
            let nextEl = (0, _utils.getItemElement)(this.ref, nextKey);
            if (!currentEl || !nextEl) return false;
            return currentEl.getBoundingClientRect().top > nextEl.getBoundingClientRect().top;
        }
        let prevKey = this.getPreviousKey(key);
        if (prevKey != null) {
            let prevEl = (0, _utils.getItemElement)(this.ref, prevKey);
            if (!currentEl || !prevEl) return false;
            return prevEl.getBoundingClientRect().top > currentEl.getBoundingClientRect().top;
        }
        return false;
    }
    getKeyBelow(key, options) {
        if (this.layout === 'grid' && this.orientation === 'vertical') return this.findKey(key, (key)=>this.getNextKey(key, options), this.isSameRow);
        else if (this.orientation === 'vertical') return this.isReversed(key) ? this.getPreviousKey(key, options) : this.getNextKey(key, options);
        else return this.getNextKey(key, options);
    }
    getKeyAbove(key, options) {
        if (this.layout === 'grid' && this.orientation === 'vertical') return this.findKey(key, (key)=>this.getPreviousKey(key, options), this.isSameRow);
        else if (this.orientation === 'vertical') return this.isReversed(key) ? this.getNextKey(key, options) : this.getPreviousKey(key, options);
        else return this.getPreviousKey(key, options);
    }
    getNextColumn(key, right, options) {
        return right ? this.getPreviousKey(key, options) : this.getNextKey(key, options);
    }
    getKeyRightOf(key, options) {
        // This is a temporary solution for CardView until we refactor useSelectableCollection.
        // https://github.com/orgs/adobe/projects/19/views/32?pane=issue&itemId=77825042
        let layoutDelegateMethod = this.direction === 'ltr' ? 'getKeyRightOf' : 'getKeyLeftOf';
        if (this.layoutDelegate[layoutDelegateMethod]) {
            key = this.layoutDelegate[layoutDelegateMethod](key);
            return this.findNextNonDisabled(key, (key)=>this.layoutDelegate[layoutDelegateMethod](key), options?.includeDisabled);
        }
        if (this.layout === 'grid') {
            if (this.orientation === 'vertical') return this.getNextColumn(key, this.direction === 'rtl', options);
            else return this.findKey(key, (key)=>this.getNextColumn(key, this.direction === 'rtl', options), this.isSameColumn);
        } else if (this.orientation === 'horizontal') return this.getNextColumn(key, this.direction === 'rtl', options);
        return null;
    }
    getKeyLeftOf(key, options) {
        let layoutDelegateMethod = this.direction === 'ltr' ? 'getKeyLeftOf' : 'getKeyRightOf';
        if (this.layoutDelegate[layoutDelegateMethod]) {
            key = this.layoutDelegate[layoutDelegateMethod](key);
            return this.findNextNonDisabled(key, (key)=>this.layoutDelegate[layoutDelegateMethod](key), options?.includeDisabled);
        }
        if (this.layout === 'grid') {
            if (this.orientation === 'vertical') return this.getNextColumn(key, this.direction === 'ltr', options);
            else return this.findKey(key, (key)=>this.getNextColumn(key, this.direction === 'ltr', options), this.isSameColumn);
        } else if (this.orientation === 'horizontal') return this.getNextColumn(key, this.direction === 'ltr', options);
        return null;
    }
    getFirstKey() {
        let key = this.collection.getFirstKey();
        return this.findNextNonDisabled(key, (key)=>this.collection.getKeyAfter(key));
    }
    getLastKey() {
        let key = this.collection.getLastKey();
        return this.findNextNonDisabled(key, (key)=>this.collection.getKeyBefore(key));
    }
    getKeyPageAbove(key) {
        let menu = this.ref.current;
        let itemRect = this.layoutDelegate.getItemRect(key);
        if (!itemRect) return null;
        let reversed = this.isReversed(key);
        if (menu && !(0, _isScrollable.isScrollable)(menu)) return this.getFirstKey();
        let nextKey = key;
        if (this.orientation === 'horizontal') {
            let pageX = Math.max(0, itemRect.x + itemRect.width - this.layoutDelegate.getVisibleRect().width);
            while(itemRect && itemRect.x > pageX && nextKey != null){
                nextKey = this.getKeyAbove(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        } else {
            let visibleRect = this.layoutDelegate.getVisibleRect();
            // column reverse makes y negative for items so we need to instead do current pos - height instead
            let pageY = reversed ? itemRect.y - visibleRect.height : Math.max(0, itemRect.y + itemRect.height - visibleRect.height);
            while(itemRect && itemRect.y > pageY && nextKey != null){
                nextKey = this.getKeyAbove(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        }
        return nextKey ?? (reversed ? this.getLastKey() : this.getFirstKey());
    }
    getKeyPageBelow(key) {
        let menu = this.ref.current;
        let itemRect = this.layoutDelegate.getItemRect(key);
        if (!itemRect) return null;
        let reversed = this.isReversed(key);
        if (menu && !(0, _isScrollable.isScrollable)(menu)) return this.getLastKey();
        let nextKey = key;
        if (this.orientation === 'horizontal') {
            let pageX = Math.min(this.layoutDelegate.getContentSize().width, itemRect.x - itemRect.width + this.layoutDelegate.getVisibleRect().width);
            while(itemRect && itemRect.x < pageX && nextKey != null){
                nextKey = this.getKeyBelow(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        } else {
            let pageY = Math.min(this.layoutDelegate.getContentSize().height, itemRect.y - itemRect.height + this.layoutDelegate.getVisibleRect().height);
            while(itemRect && itemRect.y < pageY && nextKey != null){
                nextKey = this.getKeyBelow(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        }
        return nextKey ?? (reversed ? this.getFirstKey() : this.getLastKey());
    }
    getKeyForSearch(search, fromKey) {
        if (!this.collator) return null;
        let collection = this.collection;
        let key = fromKey || this.getFirstKey();
        while(key != null){
            let item = collection.getItem(key);
            if (!item) return null;
            let substring = item.textValue.slice(0, search.length);
            if (item.textValue && this.collator.compare(substring, search) === 0) return key;
            key = this.getNextKey(key);
        }
        return null;
    }
}

},{"./DOMLayoutDelegate":"kvCTu","./utils":"jwa0D","../utils/isScrollable":"2UC33","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kvCTu":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "DOMLayoutDelegate", ()=>DOMLayoutDelegate);
var _utils = require("./utils");
class DOMLayoutDelegate {
    ref;
    constructor(ref){
        this.ref = ref;
    }
    getItemRect(key) {
        let container = this.ref.current;
        if (!container) return null;
        let item = key != null ? (0, _utils.getItemElement)(this.ref, key) : null;
        if (!item) return null;
        let containerRect = container.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();
        return {
            x: itemRect.left - containerRect.left - container.clientLeft + container.scrollLeft,
            y: itemRect.top - containerRect.top - container.clientTop + container.scrollTop,
            width: itemRect.width,
            height: itemRect.height
        };
    }
    getContentSize() {
        let container = this.ref.current;
        return {
            width: container?.scrollWidth ?? 0,
            height: container?.scrollHeight ?? 0
        };
    }
    getVisibleRect() {
        let container = this.ref.current;
        return {
            x: container?.scrollLeft ?? 0,
            y: container?.scrollTop ?? 0,
            width: container?.clientWidth ?? 0,
            height: container?.clientHeight ?? 0
        };
    }
}

},{"./utils":"jwa0D","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2UC33":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "isScrollable", ()=>isScrollable);
function isScrollable(node, checkForOverflow) {
    if (!node) return false;
    let style = window.getComputedStyle(node);
    let root = document.scrollingElement || document.documentElement;
    let isScrollable = /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
    // Root element has `visible` overflow by default, but is scrollable nonetheless.
    if (node === root && style.overflow !== 'hidden') isScrollable = true;
    if (isScrollable && checkForOverflow) isScrollable = node.scrollHeight !== node.clientHeight || node.scrollWidth !== node.clientWidth;
    return isScrollable;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ghoIN":[function(require,module,exports,__globalThis) {
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
/**
 * Provides localized string collation for the current locale. Automatically updates when the locale
 * changes, and handles caching of the collator for performance.
 *
 * @param options - Collator options.
 */ parcelHelpers.export(exports, "useCollator", ()=>useCollator);
var _i18Nprovider = require("./I18nProvider");
let cache = new Map();
function useCollator(options) {
    let { locale } = (0, _i18Nprovider.useLocale)();
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if (cache.has(cacheKey)) return cache.get(cacheKey);
    let formatter = new Intl.Collator(locale, options);
    cache.set(cacheKey, formatter);
    return formatter;
}

},{"./I18nProvider":"czGuc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5dXIN":[function(require,module,exports,__globalThis) {
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
 */ // Custom event names for updating the autocomplete's aria-activedecendant.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CLEAR_FOCUS_EVENT", ()=>CLEAR_FOCUS_EVENT);
parcelHelpers.export(exports, "FOCUS_EVENT", ()=>FOCUS_EVENT);
const CLEAR_FOCUS_EVENT = 'react-aria-clear-focus';
const FOCUS_EVENT = 'react-aria-focus';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hd0wy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "moveVirtualFocus", ()=>moveVirtualFocus);
parcelHelpers.export(exports, "dispatchVirtualBlur", ()=>dispatchVirtualBlur);
parcelHelpers.export(exports, "dispatchVirtualFocus", ()=>dispatchVirtualFocus);
parcelHelpers.export(exports, "getVirtuallyFocusedElement", ()=>getVirtuallyFocusedElement);
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _domHelpers = require("../utils/domHelpers");
function moveVirtualFocus(to) {
    let from = getVirtuallyFocusedElement((0, _domHelpers.getOwnerDocument)(to));
    if (from !== to) {
        if (from) dispatchVirtualBlur(from, to);
        if (to) dispatchVirtualFocus(to, from);
    }
}
function dispatchVirtualBlur(from, to) {
    from.dispatchEvent(new FocusEvent('blur', {
        relatedTarget: to
    }));
    from.dispatchEvent(new FocusEvent('focusout', {
        bubbles: true,
        relatedTarget: to
    }));
}
function dispatchVirtualFocus(to, from) {
    to.dispatchEvent(new FocusEvent('focus', {
        relatedTarget: from
    }));
    to.dispatchEvent(new FocusEvent('focusin', {
        bubbles: true,
        relatedTarget: from
    }));
}
function getVirtuallyFocusedElement(document) {
    let activeElement = (0, _domfunctions.getActiveElement)(document);
    let activeDescendant = activeElement?.getAttribute('aria-activedescendant');
    if (activeDescendant) return document.getElementById(activeDescendant) || activeElement;
    return activeElement;
}

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"grvf5":[function(require,module,exports,__globalThis) {
// https://github.com/microsoft/tabster/blob/a89fc5d7e332d48f68d03b1ca6e344489d1c3898/src/Shadowdomize/ShadowTreeWalker.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShadowTreeWalker", ()=>ShadowTreeWalker);
/**
 * ShadowDOM safe version of document.createTreeWalker.
 */ parcelHelpers.export(exports, "createShadowTreeWalker", ()=>createShadowTreeWalker);
var _domfunctions = require("./DOMFunctions");
var _flags = require("react-stately/private/flags/flags");
class ShadowTreeWalker {
    filter;
    root;
    whatToShow;
    _doc;
    _walkerStack = [];
    _currentNode;
    _currentSetFor = new Set();
    constructor(doc, root, whatToShow, filter){
        this._doc = doc;
        this.root = root;
        this.filter = filter ?? null;
        this.whatToShow = whatToShow ?? NodeFilter.SHOW_ALL;
        this._currentNode = root;
        this._walkerStack.unshift(doc.createTreeWalker(root, whatToShow, this._acceptNode));
        const shadowRoot = root.shadowRoot;
        if (shadowRoot) {
            const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
                acceptNode: this._acceptNode
            });
            this._walkerStack.unshift(walker);
        }
    }
    _acceptNode = (node)=>{
        if (node.nodeType === Node.ELEMENT_NODE) {
            const shadowRoot = node.shadowRoot;
            if (shadowRoot) {
                const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
                    acceptNode: this._acceptNode
                });
                this._walkerStack.unshift(walker);
                return NodeFilter.FILTER_ACCEPT;
            } else {
                if (typeof this.filter === 'function') return this.filter(node);
                else if (this.filter?.acceptNode) return this.filter.acceptNode(node);
                else if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
            }
        }
        return NodeFilter.FILTER_SKIP;
    };
    get currentNode() {
        return this._currentNode;
    }
    set currentNode(node) {
        if (!(0, _domfunctions.nodeContains)(this.root, node)) throw new Error('Cannot set currentNode to a node that is not contained by the root node.');
        const walkers = [];
        let curNode = node;
        let currentWalkerCurrentNode = node;
        this._currentNode = node;
        while(curNode && curNode !== this.root)if (curNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            const shadowRoot = curNode;
            const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
                acceptNode: this._acceptNode
            });
            walkers.push(walker);
            walker.currentNode = currentWalkerCurrentNode;
            this._currentSetFor.add(walker);
            curNode = currentWalkerCurrentNode = shadowRoot.host;
        } else curNode = curNode.parentNode;
        const walker = this._doc.createTreeWalker(this.root, this.whatToShow, {
            acceptNode: this._acceptNode
        });
        walkers.push(walker);
        walker.currentNode = currentWalkerCurrentNode;
        this._currentSetFor.add(walker);
        this._walkerStack = walkers;
    }
    get doc() {
        return this._doc;
    }
    firstChild() {
        let currentNode = this.currentNode;
        let newNode = this.nextNode();
        if (!(0, _domfunctions.nodeContains)(currentNode, newNode)) {
            this.currentNode = currentNode;
            return null;
        }
        if (newNode) this.currentNode = newNode;
        return newNode;
    }
    lastChild() {
        let walker = this._walkerStack[0];
        let newNode = walker.lastChild();
        if (newNode) this.currentNode = newNode;
        return newNode;
    }
    nextNode() {
        const nextNode = this._walkerStack[0].nextNode();
        if (nextNode) {
            const shadowRoot = nextNode.shadowRoot;
            if (shadowRoot) {
                let nodeResult;
                if (typeof this.filter === 'function') nodeResult = this.filter(nextNode);
                else if (this.filter?.acceptNode) nodeResult = this.filter.acceptNode(nextNode);
                if (nodeResult === NodeFilter.FILTER_ACCEPT) {
                    this.currentNode = nextNode;
                    return nextNode;
                }
                // _acceptNode should have added new walker for this shadow,
                // go in recursively.
                let newNode = this.nextNode();
                if (newNode) this.currentNode = newNode;
                return newNode;
            }
            if (nextNode) this.currentNode = nextNode;
            return nextNode;
        } else {
            if (this._walkerStack.length > 1) {
                this._walkerStack.shift();
                let newNode = this.nextNode();
                if (newNode) this.currentNode = newNode;
                return newNode;
            } else return null;
        }
    }
    previousNode() {
        const currentWalker = this._walkerStack[0];
        if (currentWalker.currentNode === currentWalker.root) {
            if (this._currentSetFor.has(currentWalker)) {
                this._currentSetFor.delete(currentWalker);
                if (this._walkerStack.length > 1) {
                    this._walkerStack.shift();
                    let newNode = this.previousNode();
                    if (newNode) this.currentNode = newNode;
                    return newNode;
                } else return null;
            }
            return null;
        }
        const previousNode = currentWalker.previousNode();
        if (previousNode) {
            const shadowRoot = previousNode.shadowRoot;
            if (shadowRoot) {
                let nodeResult;
                if (typeof this.filter === 'function') nodeResult = this.filter(previousNode);
                else if (this.filter?.acceptNode) nodeResult = this.filter.acceptNode(previousNode);
                if (nodeResult === NodeFilter.FILTER_ACCEPT) {
                    if (previousNode) this.currentNode = previousNode;
                    return previousNode;
                }
                // _acceptNode should have added new walker for this shadow,
                // go in recursively.
                let newNode = this.lastChild();
                if (newNode) this.currentNode = newNode;
                return newNode;
            }
            if (previousNode) this.currentNode = previousNode;
            return previousNode;
        } else {
            if (this._walkerStack.length > 1) {
                this._walkerStack.shift();
                let newNode = this.previousNode();
                if (newNode) this.currentNode = newNode;
                return newNode;
            } else return null;
        }
    }
    /**
   * @deprecated
   */ nextSibling() {
        // if (__DEV__) {
        //     throw new Error("Method not implemented.");
        // }
        return null;
    }
    /**
   * @deprecated
   */ previousSibling() {
        // if (__DEV__) {
        //     throw new Error("Method not implemented.");
        // }
        return null;
    }
    /**
   * @deprecated
   */ parentNode() {
        // if (__DEV__) {
        //     throw new Error("Method not implemented.");
        // }
        return null;
    }
}
function createShadowTreeWalker(doc, root, whatToShow, filter) {
    if ((0, _flags.shadowDOM)()) return new ShadowTreeWalker(doc, root, whatToShow, filter);
    return doc.createTreeWalker(root, whatToShow, filter);
}

},{"./DOMFunctions":"8kfpz","react-stately/private/flags/flags":"ahU3Z","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fXhXT":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "supportsKeyboard", ()=>supportsKeyboard);
parcelHelpers.export(exports, "willOpenKeyboard", ()=>willOpenKeyboard);
parcelHelpers.export(exports, "isCtrlKeyPressed", ()=>isCtrlKeyPressed);
parcelHelpers.export(exports, "isKeyboardOpen", ()=>isKeyboardOpen);
var _domHelpers = require("./domHelpers");
var _domfunctions = require("./shadowdom/DOMFunctions");
var _getMetaValue = require("./getMetaValue");
var _platform = require("./platform");
var _isFocusable = require("./isFocusable");
const KEYBOARD_HEIGHT = 100;
const KEYBOARD_TIMEOUT = 600;
// Tracks layout state of the on-screen keyboard.
const state = {
    isOpen: false,
    screenWidth: 0,
    screenHeight: 0,
    screenAngle: 0,
    screenTimeout: 0,
    startTimeStamp: 0,
    endTimeStamp: 0,
    resizeTimeStamp: 0,
    resizeTimeout: 0
};
// HTML input types that do not cause the software keyboard to appear.
const nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
function getTouchScreen() {
    // Normalize the screen by any scaling to get the layout coordinate space.
    let screenWidth = Number(window.visualViewport?.width ?? window.innerWidth);
    let screenHeight = Number(window.visualViewport?.height ?? window.innerHeight);
    let visualScale = Number(window.visualViewport?.scale ?? 1);
    return {
        width: screenWidth * visualScale,
        height: screenHeight * visualScale,
        angle: window.screen.orientation.angle
    };
}
function onResizeStart(e) {
    // So we don't constantly call clearTimeout and setTimeout, keep track of the
    // current timeout time and only reschedule the timer when it is getting close.
    if (state.resizeTimeStamp <= e.timeStamp + 50) {
        state.resizeTimeStamp = e.timeStamp + 150;
        window.clearTimeout(state.resizeTimeout);
        state.resizeTimeout = window.setTimeout(onResizeEnd, 150);
    }
}
function onResizeEnd() {
    let viewportMeta = (0, _getMetaValue.getMetaValue)('viewport');
    // Overlaying keyboards do not impact geometry, so there is nothing to measure.
    // https://caniuse.com/mdn-html_elements_meta_name_viewport_interactive-widget
    if ((0, _platform.isAndroid)() && viewportMeta?.includes('overlays-content')) return;
    let time = performance.now();
    let screen = getTouchScreen();
    let elapsed = time - state.startTimeStamp;
    let delta = state.screenHeight - screen.height;
    let rotation = state.screenAngle - screen.angle;
    // Update the screen once an open keyboard that rotated along closes. The state swap was
    // deferred, so the old width predicts the height it should close towards.
    if (Math.abs(rotation) % 180 && state.screenWidth - screen.height < KEYBOARD_HEIGHT) {
        state.screenWidth = screen.width;
        state.screenHeight = screen.height;
        state.screenAngle = screen.angle;
        delta = 0;
    }
    // Update the screen if a resize happens outside the capture timeframe. We debounce
    // because WebKit may fire its single opening resize before the focus event.
    if (elapsed > KEYBOARD_TIMEOUT) {
        window.clearTimeout(state.screenTimeout);
        state.screenTimeout = window.setTimeout(()=>{
            let activeElement = document.hasFocus() ? (0, _domfunctions.getActiveElement)() : null;
            let willKeyboardOpen = willOpenKeyboard(activeElement);
            let screen = getTouchScreen();
            if (Math.abs(state.screenAngle - screen.angle) % 180) return;
            if (state.isOpen && willKeyboardOpen) return;
            state.screenWidth = screen.width;
            state.screenHeight = screen.height;
            state.screenAngle = screen.angle;
            state.isOpen = false;
        }, KEYBOARD_TIMEOUT);
    }
    // Otherwise, record an opening if the height changed by more than our threshold.
    // This may fail if the layout viewport changes for other reasons during this timeframe.
    if (elapsed <= KEYBOARD_TIMEOUT && delta >= KEYBOARD_HEIGHT) state.endTimeStamp = time;
    // Store the new open state since the viewport is stable when this is reached.
    state.isOpen = delta >= KEYBOARD_HEIGHT;
}
function onOrientationChange() {
    let screen = getTouchScreen();
    let rotation = state.screenAngle - screen.angle;
    // Rotation may cause the resize buffer to be filled, but we need to make sure a screen
    // estimate is already available in case focus lands before it expires. This could fail
    // if a top bar exceeds the keyboard threshold, in which case we may need to revisit.
    if (Math.abs(rotation) % 180 && !state.isOpen) {
        let width = state.screenWidth;
        let height = state.screenHeight;
        state.screenWidth = height;
        state.screenHeight = width;
    }
    if (!state.isOpen) state.screenAngle = screen.angle;
}
function onFocus(e) {
    let target = (0, _domfunctions.getEventTarget)(e);
    let willKeyboardOpen = willOpenKeyboard(target);
    let time = performance.now();
    let screen = getTouchScreen();
    let delta = state.screenHeight - screen.height;
    // Update the screen and start the timer if we are about to open.
    if (delta < KEYBOARD_HEIGHT && willKeyboardOpen) {
        state.screenWidth = screen.width;
        state.screenHeight = screen.height;
        state.screenAngle = screen.angle;
        state.startTimeStamp = time;
    }
    // This focus will open a keyboard so reset the buffer.
    if (willKeyboardOpen) window.clearTimeout(state.screenTimeout);
    // Stop the timer if the keyboard is already open.
    if (delta >= KEYBOARD_HEIGHT && willKeyboardOpen) state.endTimeStamp = time;
}
function setupGlobalEvents() {
    let screen = getTouchScreen();
    // WebKit only fires a single event per resize.
    (0, _domHelpers.addEvent)(window.visualViewport, 'resize', (0, _platform.isWebKit)() ? onResizeEnd : onResizeStart);
    // oxlint-disable-next-line - looks like the lint for this is a little too aggressive
    (0, _domHelpers.addEvent)(window.screen.orientation, 'change', onOrientationChange);
    (0, _domHelpers.addEvent)(window, 'focus', onFocus, {
        capture: true,
        passive: true
    });
    // Store the initial screen dimensions.
    state.screenWidth = screen.width;
    state.screenHeight = screen.height;
    state.screenAngle = screen.angle;
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') setupGlobalEvents();
    else (0, _domHelpers.addEvent)(document, 'DOMContentLoaded', setupGlobalEvents);
}
function supportsKeyboard() {
    let viewportMeta = (0, _getMetaValue.getMetaValue)('viewport');
    // Overlaying keyboards do not impact geometry, so there is nothing to await.
    // https://caniuse.com/mdn-html_elements_meta_name_viewport_interactive-widget
    if ((0, _platform.isAndroid)() && viewportMeta?.includes('overlays-content')) return false;
    // WebKit may resize before focus, but an open keyboard always means we have support.
    if (state.isOpen) return true;
    // As long as no input has ever been focused, we return default support.
    if (!state.startTimeStamp) return window.navigator.maxTouchPoints > 0;
    // If keyboard geometry changed within the timeout period, we have support.
    if (state.endTimeStamp >= state.startTimeStamp) return true;
    // If a geometry change is mid-flight we return the most recent support.
    // Supported platforms may have a hardware keyboard, which this won't catch, but thats
    // about as far as we can reasonably go to exclude non-touch devices.
    return performance.now() - state.startTimeStamp <= KEYBOARD_TIMEOUT ? state.endTimeStamp > 0 || window.navigator.maxTouchPoints > 0 : false;
}
function willOpenKeyboard(target) {
    if (!(target instanceof Element) || !(0, _isFocusable.isFocusable)(target)) return false;
    let isTextArea = target instanceof HTMLTextAreaElement;
    let isEditable = target instanceof HTMLElement && target.isContentEditable;
    let isTextInput = target instanceof HTMLInputElement && !nonTextInputTypes.has(target.type);
    return isTextArea || isEditable || isTextInput;
}
function isCtrlKeyPressed(event) {
    return (0, _platform.isMac)() ? event.metaKey : event.ctrlKey;
}
function isKeyboardOpen() {
    return state.isOpen;
}

},{"./domHelpers":"cYkFa","./shadowdom/DOMFunctions":"8kfpz","./getMetaValue":"jdK61","./platform":"eBqgD","./isFocusable":"dLPRV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jdK61":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2026 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "getMetaValue", ()=>getMetaValue);
var _domHelpers = require("./domHelpers");
function getMetaValue(key, doc) {
    let ownerWindow = (0, _domHelpers.getOwnerWindow)(doc);
    let ownerDocument = (0, _domHelpers.getOwnerDocument)(doc);
    if (ownerDocument == null || ownerWindow == null) return;
    let content = undefined;
    let selector = `meta[name="${CSS.escape(key)}"], meta[property="${CSS.escape(key)}"]`;
    let meta = ownerDocument.querySelector(selector);
    if (meta && meta instanceof ownerWindow.HTMLMetaElement) {
        if (key === 'csp-nonce' && meta.nonce) content ??= meta.nonce || undefined;
        if (meta.content) content ??= meta.content || undefined;
    }
    if (key === 'csp-nonce') content ??= ownerWindow.__webpack_nonce__ || globalThis.__webpack_nonce__ || undefined;
    return content;
}

},{"./domHelpers":"cYkFa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5N7nL":[function(require,module,exports,__globalThis) {
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
/**
 * Scrolls `scrollView` so that `element` is visible.
 * Similar to `element.scrollIntoView({block: 'nearest'})` (not supported in Edge),
 * but doesn't affect parents above `scrollView`.
 */ parcelHelpers.export(exports, "scrollIntoView", ()=>scrollIntoView);
parcelHelpers.export(exports, "scrollRectIntoView", ()=>scrollRectIntoView);
/**
 * Scrolls the `targetElement` so it is visible in the viewport. Accepts an optional
 * `opts.containingElement` that will be centered in the viewport prior to scrolling the
 * targetElement into view. If scrolling is prevented on the body (e.g. targetElement is in a
 * popover), this will only scroll the scroll parents of the targetElement up to but not including
 * the body itself.
 */ parcelHelpers.export(exports, "scrollIntoViewport", ()=>scrollIntoViewport);
var _getScrollParents = require("./getScrollParents");
var _platform = require("../utils/platform");
function scrollIntoView(scrollView, element, opts = {}) {
    if (scrollView === element) return;
    let target = element.getBoundingClientRect();
    scrollRectIntoView(scrollView, element, target, opts);
}
function scrollRectIntoView(scrollView, element, target, opts = {}) {
    let { block = 'nearest', inline = 'nearest' } = opts;
    let y = scrollView.scrollTop;
    let x = scrollView.scrollLeft;
    let view = scrollView.getBoundingClientRect();
    let itemStyle = window.getComputedStyle(element);
    let viewStyle = window.getComputedStyle(scrollView);
    let root = document.scrollingElement || document.documentElement;
    let isRoot = scrollView === root;
    let viewTop = scrollView === root ? 0 : view.top;
    let viewBottom = scrollView === root ? scrollView.clientHeight : view.bottom;
    let viewLeft = scrollView === root ? 0 : view.left;
    let viewRight = scrollView === root ? scrollView.clientWidth : view.right;
    let scrollMarginTop = parseFloat(itemStyle.scrollMarginTop) || 0;
    let scrollMarginBottom = parseFloat(itemStyle.scrollMarginBottom) || 0;
    let scrollMarginLeft = parseFloat(itemStyle.scrollMarginLeft) || 0;
    let scrollMarginRight = parseFloat(itemStyle.scrollMarginRight) || 0;
    let scrollPaddingTop = parseFloat(viewStyle.scrollPaddingTop) || 0;
    let scrollPaddingBottom = parseFloat(viewStyle.scrollPaddingBottom) || 0;
    let scrollPaddingLeft = parseFloat(viewStyle.scrollPaddingLeft) || 0;
    let scrollPaddingRight = parseFloat(viewStyle.scrollPaddingRight) || 0;
    let borderTopWidth = parseFloat(viewStyle.borderTopWidth) || 0;
    let borderBottomWidth = parseFloat(viewStyle.borderBottomWidth) || 0;
    let borderLeftWidth = parseFloat(viewStyle.borderLeftWidth) || 0;
    let borderRightWidth = parseFloat(viewStyle.borderRightWidth) || 0;
    let scrollAreaTop = target.top - scrollMarginTop;
    let scrollAreaBottom = target.bottom + scrollMarginBottom;
    let scrollAreaLeft = target.left - scrollMarginLeft;
    let scrollAreaRight = target.right + scrollMarginRight;
    let scrollBarOffsetX = scrollView === root ? 0 : borderLeftWidth + borderRightWidth;
    let scrollBarOffsetY = scrollView === root ? 0 : borderTopWidth + borderBottomWidth;
    let scrollBarWidth = scrollView === root ? 0 : scrollView.offsetWidth - scrollView.clientWidth - scrollBarOffsetX;
    let scrollBarHeight = scrollView === root ? 0 : scrollView.offsetHeight - scrollView.clientHeight - scrollBarOffsetY;
    let scrollPortTop = viewTop + (isRoot ? 0 : borderTopWidth) + scrollPaddingTop;
    let scrollPortBottom = viewBottom - (isRoot ? 0 : borderBottomWidth) - scrollPaddingBottom - scrollBarHeight;
    let scrollPortLeft = viewLeft + (isRoot ? 0 : borderLeftWidth) + scrollPaddingLeft;
    let scrollPortRight = viewRight - (isRoot ? 0 : borderRightWidth) - scrollPaddingRight;
    // WebKit on iOS always positions the scrollbar on the right ¯\_(ツ)_/¯
    if ((0, _platform.isIOS)() && (0, _platform.isWebKit)() || viewStyle.direction === 'ltr') scrollPortRight -= scrollBarWidth;
    else if (viewStyle.direction === 'rtl') scrollPortLeft += scrollBarWidth;
    let shouldScrollBlock = scrollAreaTop < scrollPortTop || scrollAreaBottom > scrollPortBottom;
    let shouldScrollInline = scrollAreaLeft < scrollPortLeft || scrollAreaRight > scrollPortRight;
    if (shouldScrollBlock && block === 'start') y += scrollAreaTop - scrollPortTop;
    else if (shouldScrollBlock && block === 'center') y += (scrollAreaTop + scrollAreaBottom) / 2 - (scrollPortTop + scrollPortBottom) / 2;
    else if (shouldScrollBlock && block === 'end') y += scrollAreaBottom - scrollPortBottom;
    else if (shouldScrollBlock && block === 'nearest') {
        let start = scrollAreaTop - scrollPortTop;
        let end = scrollAreaBottom - scrollPortBottom;
        y += Math.abs(start) <= Math.abs(end) ? start : end;
    }
    if (shouldScrollInline && inline === 'start') x += scrollAreaLeft - scrollPortLeft;
    else if (shouldScrollInline && inline === 'center') x += (scrollAreaLeft + scrollAreaRight) / 2 - (scrollPortLeft + scrollPortRight) / 2;
    else if (shouldScrollInline && inline === 'end') x += scrollAreaRight - scrollPortRight;
    else if (shouldScrollInline && inline === 'nearest') {
        let start = scrollAreaLeft - scrollPortLeft;
        let end = scrollAreaRight - scrollPortRight;
        x += Math.abs(start) <= Math.abs(end) ? start : end;
    }
    scrollView.scrollTo({
        left: x,
        top: y
    });
}
function scrollIntoViewport(targetElement, opts = {}) {
    let { containingElement } = opts;
    if (targetElement && targetElement.isConnected) {
        let root = document.scrollingElement || document.documentElement;
        let isScrollPrevented = window.getComputedStyle(root).overflow === 'hidden';
        if (!isScrollPrevented) {
            let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
            // use scrollIntoView({block: 'nearest'}) instead of .focus to check if the element is fully in view or not since .focus()
            // won't cause a scroll if the element is already focused and doesn't behave consistently when an element is partially out of view horizontally vs vertically
            targetElement?.scrollIntoView?.({
                block: 'nearest'
            });
            let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
            // Account for sub pixel differences from rounding
            if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
                containingElement?.scrollIntoView?.({
                    block: 'center',
                    inline: 'center'
                });
                targetElement.scrollIntoView?.({
                    block: 'nearest'
                });
            }
        } else {
            let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
            // If scrolling is prevented, we don't want to scroll the body since it might move the overlay partially offscreen and the user can't scroll it back into view.
            let scrollParents = (0, _getScrollParents.getScrollParents)(targetElement, true);
            for (let scrollParent of scrollParents)scrollIntoView(scrollParent, targetElement);
            let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
            // Account for sub pixel differences from rounding
            if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
                scrollParents = containingElement ? (0, _getScrollParents.getScrollParents)(containingElement, true) : [];
                // scroll containing element into view first, then rescroll target element into view like the non chrome flow above
                for (let scrollParent of scrollParents)scrollIntoView(scrollParent, containingElement, {
                    block: 'center',
                    inline: 'center'
                });
                for (let scrollParent of (0, _getScrollParents.getScrollParents)(targetElement, true))scrollIntoView(scrollParent, targetElement);
            }
        }
    }
}

},{"./getScrollParents":"6TSmG","../utils/platform":"eBqgD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6TSmG":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "getScrollParents", ()=>getScrollParents);
var _isScrollable = require("./isScrollable");
function getScrollParents(node, checkForOverflow) {
    let parentElements = [];
    let root = document.scrollingElement || document.documentElement;
    while(node){
        if ((0, _isScrollable.isScrollable)(node, checkForOverflow)) parentElements.push(node);
        if (node === root) break;
        node = node.parentElement;
    }
    return parentElements;
}

},{"./isScrollable":"2UC33","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"avf8K":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2021 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "useEvent", ()=>useEvent);
var _domHelpers = require("./domHelpers");
var _react = require("react");
var _useEffectEvent = require("./useEffectEvent");
function useEvent(ref, event, listener, options) {
    let handleEvent = (0, _useEffectEvent.useEffectEvent)(listener);
    let isDisabled = listener == null;
    (0, _react.useEffect)(()=>{
        if (isDisabled || ref.current == null) return;
        return (0, _domHelpers.addEvent)(ref.current, event, handleEvent, options);
    }, [
        ref,
        event,
        options,
        isDisabled
    ]);
}

},{"./domHelpers":"cYkFa","react":"gOP0N","./useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6FWTA":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the behavior and accessibility implementation for an item in a menu.
 * See `useMenu` for more details about menus.
 *
 * @param props - Props for the item.
 * @param state - State for the menu, as returned by `useTreeState`.
 */ parcelHelpers.export(exports, "useMenuItem", ()=>useMenuItem);
var _filterDOMProps = require("../utils/filterDOMProps");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _getItemCount = require("react-stately/private/collections/getItemCount");
var _openLink = require("../utils/openLink");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _utils = require("./utils");
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _useFocusable = require("../interactions/useFocusable");
var _useHover = require("../interactions/useHover");
var _useKeyboard = require("../interactions/useKeyboard");
var _usePress = require("../interactions/usePress");
var _useSelectableItem = require("../selection/useSelectableItem");
var _useId = require("../utils/useId");
function useMenuItem(props, state, ref) {
    let { id, key, closeOnSelect, shouldCloseOnSelect, isVirtualized, 'aria-haspopup': hasPopup, onPressStart, onPressUp: pressUpProp, onPress, onPressChange: pressChangeProp, onPressEnd, onClick: onClickProp, onHoverStart: hoverStartProp, onHoverChange, onHoverEnd, onKeyDown, onKeyUp, onFocus, onFocusChange, onBlur, selectionManager = state.selectionManager } = props;
    let isTrigger = !!hasPopup;
    let isTriggerExpanded = isTrigger && props['aria-expanded'] === 'true';
    let isDisabled = props.isDisabled ?? selectionManager.isDisabled(key);
    let isSelected = props.isSelected ?? selectionManager.isSelected(key);
    let data = (0, _utils.menuData).get(state);
    let item = state.collection.getItem(key);
    let onClose = props.onClose || data.onClose;
    let router = (0, _openLink.useRouter)();
    let performAction = ()=>{
        if (isTrigger) return;
        if (item?.props?.onAction) item.props.onAction();
        else if (props.onAction) props.onAction(key);
        if (data.onAction) {
            // Must reassign to variable otherwise `this` binding gets messed up. Something to do with WeakMap.
            let onAction = data.onAction;
            onAction(key, item?.value);
        }
    };
    let role = 'menuitem';
    if (!isTrigger) {
        if (selectionManager.selectionMode === 'single') role = 'menuitemradio';
        else if (selectionManager.selectionMode === 'multiple') role = 'menuitemcheckbox';
    }
    let labelId = (0, _useId.useSlotId)();
    let descriptionId = (0, _useId.useSlotId)();
    let keyboardId = (0, _useId.useSlotId)();
    let ariaProps = {
        id,
        'aria-disabled': isDisabled || undefined,
        role,
        'aria-label': props['aria-label'],
        'aria-labelledby': labelId,
        'aria-describedby': [
            props['aria-describedby'],
            descriptionId,
            keyboardId
        ].filter(Boolean).join(' ') || undefined,
        'aria-controls': props['aria-controls'],
        'aria-haspopup': hasPopup,
        'aria-expanded': props['aria-expanded']
    };
    if (selectionManager.selectionMode !== 'none' && !isTrigger) ariaProps['aria-checked'] = isSelected;
    if (isVirtualized) {
        let index = Number(item?.index);
        ariaProps['aria-posinset'] = Number.isNaN(index) ? undefined : index + 1;
        ariaProps['aria-setsize'] = (0, _getItemCount.getItemCount)(state.collection);
    }
    let isPressedRef = (0, _react.useRef)(false);
    let onPressChange = (isPressed)=>{
        pressChangeProp?.(isPressed);
        isPressedRef.current = isPressed;
    };
    let interaction = (0, _react.useRef)(null);
    let onPressUp = (e)=>{
        if (e.pointerType !== 'keyboard') interaction.current = {
            pointerType: e.pointerType
        };
        // If interacting with mouse, allow the user to mouse down on the trigger button,
        // drag, and release over an item (matching native behavior).
        if (e.pointerType === 'mouse') {
            if (!isPressedRef.current) e.target.click();
        }
        pressUpProp?.(e);
    };
    let onClick = (e)=>{
        onClickProp?.(e);
        performAction();
        (0, _openLink.handleLinkClick)(e, router, item.props.href, item?.props.routerOptions);
        let shouldClose = interaction.current?.pointerType === 'keyboard' ? interaction.current?.key === 'Enter' || selectionManager.selectionMode === 'none' || selectionManager.isLink(key) : selectionManager.selectionMode !== 'multiple' || selectionManager.isLink(key);
        shouldClose = shouldCloseOnSelect ?? closeOnSelect ?? shouldClose;
        if (onClose && !isTrigger && shouldClose) onClose();
        interaction.current = null;
    };
    let { itemProps, isFocused } = (0, _useSelectableItem.useSelectableItem)({
        id,
        selectionManager: selectionManager,
        key,
        ref,
        shouldSelectOnPressUp: true,
        allowsDifferentPressOrigin: true,
        // Disable all handling of links in useSelectable item
        // because we handle it ourselves. The behavior of menus
        // is slightly different from other collections because
        // actions are performed on key down rather than key up.
        linkBehavior: 'none',
        shouldUseVirtualFocus: data.shouldUseVirtualFocus
    });
    let { pressProps, isPressed } = (0, _usePress.usePress)({
        onPressStart,
        onPress,
        onPressUp,
        onPressChange,
        onPressEnd,
        isDisabled
    });
    let { hoverProps } = (0, _useHover.useHover)({
        isDisabled,
        onHoverStart (e) {
            // Hovering over an already expanded sub dialog trigger should keep focus in the dialog.
            if (!(0, _useFocusVisible.isFocusVisible)() && !(isTriggerExpanded && hasPopup)) {
                selectionManager.setFocused(true);
                selectionManager.setFocusedKey(key);
            }
            hoverStartProp?.(e);
        },
        onHoverChange,
        onHoverEnd
    });
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            ' ': (e)=>{
                interaction.current = {
                    pointerType: 'keyboard',
                    key: ' '
                };
                (0, _domfunctions.getEventTarget)(e).click();
                // click above sets modality to "virtual", need to set interaction modality back to 'keyboard' so focusSafely calls properly move focus
                // to the newly opened submenu's first item.
                (0, _useFocusVisible.setInteractionModality)('keyboard');
            },
            Enter: (e)=>{
                interaction.current = {
                    pointerType: 'keyboard',
                    key: 'Enter'
                };
                let target = (0, _domfunctions.getEventTarget)(e);
                // Trigger click unless this is a link. Links with real DOM focus activate on Enter natively.
                // With virtual focus (e.g. Autocomplete) focus stays on the input and useAutocomplete dispatches
                // keydown here then follows with a synthetic click only if dispatchEvent was not canceled—so
                // links must not preventDefault on that keydown.
                if (target.tagName !== 'A') {
                    target.click();
                    (0, _useFocusVisible.setInteractionModality)('keyboard');
                    return;
                }
                (0, _useFocusVisible.setInteractionModality)('keyboard');
                return {
                    shouldPreventDefault: false,
                    shouldContinuePropagation: false
                };
            }
        },
        onKeyDown,
        onKeyUp
    });
    let { focusableProps } = (0, _useFocusable.useFocusable)({
        onBlur,
        onFocus,
        onFocusChange
    }, ref);
    let domProps = (0, _filterDOMProps.filterDOMProps)(item?.props);
    delete domProps.id;
    let linkProps = (0, _openLink.useLinkProps)(item?.props);
    return {
        menuItemProps: {
            ...ariaProps,
            ...(0, _mergeProps.mergeProps)(domProps, linkProps, isTrigger ? {
                onFocus: itemProps.onFocus,
                'data-collection': itemProps['data-collection'],
                'data-key': itemProps['data-key']
            } : itemProps, pressProps, hoverProps, keyboardProps, focusableProps, // Prevent DOM focus from moving on mouse down when using virtual focus or this is a submenu/subdialog trigger.
            data.shouldUseVirtualFocus || isTrigger ? {
                onMouseDown: (e)=>e.preventDefault()
            } : undefined, // oxlint-disable-next-line react/react-compiler
            isDisabled ? undefined : {
                onClick
            }),
            // If a submenu is expanded, set the tabIndex to -1 so that shift tabbing goes out of the menu instead of the parent menu item.
            tabIndex: itemProps.tabIndex != null && isTriggerExpanded && !data.shouldUseVirtualFocus ? -1 : itemProps.tabIndex
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        keyboardShortcutProps: {
            id: keyboardId
        },
        isFocused,
        isFocusVisible: isFocused && selectionManager.isFocused && (0, _useFocusVisible.isFocusVisible)() && !isTriggerExpanded,
        isSelected,
        isPressed,
        isDisabled
    };
}

},{"../utils/filterDOMProps":"h4XHF","../utils/shadowdom/DOMFunctions":"8kfpz","react-stately/private/collections/getItemCount":"eLVRI","../utils/openLink":"gH3wl","../interactions/useFocusVisible":"aBfUW","./utils":"e7rvB","../utils/mergeProps":"jycxS","react":"gOP0N","../interactions/useFocusable":"6IFKj","../interactions/useHover":"2yLrj","../interactions/useKeyboard":"aHm7i","../interactions/usePress":"3S2KR","../selection/useSelectableItem":"3SFOH","../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eLVRI":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "getItemCount", ()=>getItemCount);
var _getChildNodes = require("./getChildNodes");
const cache = new WeakMap();
function getItemCount(collection) {
    let count = cache.get(collection);
    if (count != null) return count;
    // TS isn't smart enough to know we've ensured count is a number, so use a new variable
    let counter = 0;
    let countItems = (items)=>{
        for (let item of items){
            if (item.type === 'section') countItems((0, _getChildNodes.getChildNodes)(item, collection));
            else if (item.type === 'item') counter++;
        }
    };
    countItems(collection);
    cache.set(collection, counter);
    return counter;
}

},{"./getChildNodes":"9KbhA","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3IKpx":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "disableTextSelection", ()=>disableTextSelection);
parcelHelpers.export(exports, "restoreTextSelection", ()=>restoreTextSelection);
var _domHelpers = require("../utils/domHelpers");
var _platform = require("../utils/platform");
var _runAfterTransition = require("../utils/runAfterTransition");
// Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
// rather than at the document level so we just need to apply/remove user-select: none for each pressed element individually
let state = 'default';
let savedUserSelect = '';
let modifiedElementMap = new WeakMap();
function disableTextSelection(target) {
    if ((0, _platform.isIOS)() && (0, _platform.isWebKit)()) {
        if (state === 'default') {
            const documentObject = (0, _domHelpers.getOwnerDocument)(target);
            savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
            documentObject.documentElement.style.webkitUserSelect = 'none';
        }
        state = 'disabled';
    } else if (target instanceof HTMLElement || target instanceof SVGElement) {
        // If not iOS, store the target's original user-select and change to user-select: none
        // Ignore state since it doesn't apply for non iOS
        let property = 'userSelect' in target.style ? 'userSelect' : 'webkitUserSelect';
        modifiedElementMap.set(target, target.style[property]);
        target.style[property] = 'none';
    }
}
function restoreTextSelection(target) {
    if ((0, _platform.isIOS)() && (0, _platform.isWebKit)()) {
        // If the state is already default, there's nothing to do.
        // If it is restoring, then there's no need to queue a second restore.
        if (state !== 'disabled') return;
        state = 'restoring';
        // There appears to be a delay on iOS where selection still might occur
        // after pointer up, so wait a bit before removing user-select.
        setTimeout(()=>{
            // Wait for any CSS transitions to complete so we don't recompute style
            // for the whole page in the middle of the animation and cause jank.
            (0, _runAfterTransition.runAfterTransition)(()=>{
                // Avoid race conditions
                if (state === 'restoring') {
                    const documentObject = (0, _domHelpers.getOwnerDocument)(target);
                    if (documentObject.documentElement.style.webkitUserSelect === 'none') documentObject.documentElement.style.webkitUserSelect = savedUserSelect || '';
                    savedUserSelect = '';
                    state = 'default';
                }
            });
        }, 300);
    } else if (target instanceof HTMLElement || target instanceof SVGElement) // If not iOS, restore the target's original user-select if any
    // Ignore state since it doesn't apply for non iOS
    {
        if (target && modifiedElementMap.has(target)) {
            let targetOldUserSelect = modifiedElementMap.get(target);
            let property = 'userSelect' in target.style ? 'userSelect' : 'webkitUserSelect';
            if (target.style[property] === 'none') target.style[property] = targetOldUserSelect;
            if (target.getAttribute('style') === '') target.removeAttribute('style');
            modifiedElementMap.delete(target);
        }
    }
}

},{"../utils/domHelpers":"cYkFa","../utils/platform":"eBqgD","../utils/runAfterTransition":"k2HOw","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"b7u5T":[function(require,module,exports,__globalThis) {
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
/**
 * Handles long press interactions across mouse and touch devices. Supports a customizable time
 * threshold, accessibility description, and normalizes behavior across browsers and devices.
 */ parcelHelpers.export(exports, "useLongPress", ()=>useLongPress);
var _focusWithoutScrolling = require("../utils/focusWithoutScrolling");
var _domHelpers = require("../utils/domHelpers");
var _mergeProps = require("../utils/mergeProps");
var _useDescription = require("../utils/useDescription");
var _useGlobalListeners = require("../utils/useGlobalListeners");
var _usePress = require("./usePress");
var _react = require("react");
const DEFAULT_THRESHOLD = 500;
function useLongPress(props) {
    let { isDisabled, pointerType, onLongPressStart, onLongPressEnd, onLongPress, threshold = DEFAULT_THRESHOLD, accessibilityDescription } = props;
    const timeRef = (0, _react.useRef)(undefined);
    let { addGlobalListener, removeAllGlobalListeners } = (0, _useGlobalListeners.useGlobalListeners)();
    let isAcceptedPointerType = (e)=>pointerType ? e.pointerType === pointerType : e.pointerType === 'mouse' || e.pointerType === 'touch';
    let { pressProps } = (0, _usePress.usePress)({
        isDisabled,
        onPressStart (e) {
            e.continuePropagation();
            if (isAcceptedPointerType(e)) {
                if (onLongPressStart) onLongPressStart({
                    ...e,
                    type: 'longpressstart'
                });
                timeRef.current = setTimeout(()=>{
                    // Prevent other usePress handlers from also handling this event.
                    e.target.dispatchEvent(new PointerEvent('pointercancel', {
                        bubbles: true
                    }));
                    // Prevent default click action (e.g. opening a link) after a long press.
                    addGlobalListener(e.target, 'click', (e)=>e.preventDefault(), {
                        once: true
                    });
                    // Ensure target is focused. On touch devices, browsers typically focus on pointer up.
                    if ((0, _domHelpers.getOwnerDocument)(e.target).activeElement !== e.target) (0, _focusWithoutScrolling.focusWithoutScrolling)(e.target);
                    if (onLongPress) onLongPress({
                        ...e,
                        type: 'longpress'
                    });
                    timeRef.current = undefined;
                }, threshold);
                // Prevent context menu, which may be opened on long press on touch devices
                if (e.pointerType === 'touch') addGlobalListener(e.target, 'contextmenu', (e)=>e.preventDefault(), {
                    once: true
                });
                let ownerWindow = (0, _domHelpers.getOwnerWindow)(e.target);
                addGlobalListener(ownerWindow, 'pointerup', ()=>{
                    // If no contextmenu/click event is fired quickly after pointerup, remove the handler
                    // so future events outside a long press are not prevented.
                    setTimeout(()=>{
                        removeAllGlobalListeners();
                    }, 100);
                }, {
                    once: true
                });
            }
        },
        onPressEnd (e) {
            if (timeRef.current) clearTimeout(timeRef.current);
            if (onLongPressEnd && isAcceptedPointerType(e)) onLongPressEnd({
                ...e,
                type: 'longpressend'
            });
        }
    });
    let descriptionProps = (0, _useDescription.useDescription)(onLongPress && !isDisabled ? accessibilityDescription : undefined);
    return {
        longPressProps: (0, _mergeProps.mergeProps)(pressProps, descriptionProps)
    };
}

},{"../utils/focusWithoutScrolling":"gcZ3w","../utils/domHelpers":"cYkFa","../utils/mergeProps":"jycxS","../utils/useDescription":"1bivM","../utils/useGlobalListeners":"jsdt1","./usePress":"3S2KR","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1bivM":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useDescription", ()=>useDescription);
var _useLayoutEffect = require("./useLayoutEffect");
var _react = require("react");
let descriptionId = 0;
const descriptionNodes = new Map();
function useDescription(description) {
    let [id, setId] = (0, _react.useState)();
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (!description) return;
        let desc = descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${descriptionId++}`;
            setId(id);
            let node = document.createElement('div');
            node.id = id;
            node.style.display = 'none';
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (desc && --desc.refCount === 0) {
                desc.element.remove();
                descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        'aria-describedby': description ? id : undefined
    };
}

},{"./useLayoutEffect":"h7M6K","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9nE7l":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the behavior and accessibility implementation for a section in a menu.
 * See `useMenu` for more details about menus.
 *
 * @param props - Props for the section.
 */ parcelHelpers.export(exports, "useMenuSection", ()=>useMenuSection);
var _useId = require("../utils/useId");
function useMenuSection(props) {
    let { heading, 'aria-label': ariaLabel } = props;
    let headingId = (0, _useId.useId)();
    return {
        itemProps: {
            role: 'presentation'
        },
        headingProps: heading ? {
            // Techincally, menus cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, using role="presentation",
            // and only use it as a label for the nested group.
            id: headingId,
            role: 'presentation'
        } : {},
        groupProps: {
            role: 'group',
            'aria-label': ariaLabel,
            'aria-labelledby': heading ? headingId : undefined
        }
    };
}

},{"../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kGjqH":[function(require,module,exports,__globalThis) {
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
/**
 * Handles context menu events across mouse, touch, keyboard, and screen reader interactions.
 */ parcelHelpers.export(exports, "useContextMenu", ()=>useContextMenu);
var _react = require("react");
var _platform = require("../utils/platform");
var _mergeProps = require("../utils/mergeProps");
var _useLongPress = require("./useLongPress");
function useContextMenu(props) {
    // How to trigger context menu events on various platforms:
    // - macOS
    //   - Mouse right click
    //   - Control + click
    //   - Control + Enter (does not fire the contextmenu event in certain WebKit / Chrome versions - https://bugs.webkit.org/show_bug.cgi?id=302049, https://issues.chromium.org/issues/369897039)
    //   - Control + Option + Shift + M with VoiceOver
    // - Windows / Linux
    //   - Mouse right click
    //   - Shift + F10
    //   - Long press on a touch screen
    // - iOS
    //   - Long press (does not fire contextmenu event - https://bugs.webkit.org/show_bug.cgi?id=213953)
    // - Android
    //   - Long press
    let { onContextMenu } = props;
    let firedContextMenuEvent = (0, _react.useRef)(false);
    // iOS does not fire the contextmenu event, so use long press.
    let { longPressProps } = (0, _useLongPress.useLongPress)({
        onLongPressStart () {
            firedContextMenuEvent.current = false;
        },
        onLongPress (e) {
            if (!firedContextMenuEvent.current) onContextMenu?.({
                target: e.target,
                x: e.x,
                y: e.y
            });
            else firedContextMenuEvent.current = false;
        }
    });
    if (!onContextMenu) return {
        contextMenuProps: {}
    };
    return {
        // oxlint-disable-next-line react/react-compiler - it says we are reading a ref during render but that's not true...
        contextMenuProps: (0, _mergeProps.mergeProps)((0, _platform.isIOS)() ? longPressProps : {}, {
            onContextMenu (e) {
                e.stopPropagation();
                e.preventDefault();
                firedContextMenuEvent.current = true;
                let rect = e.currentTarget.getBoundingClientRect();
                onContextMenu({
                    target: e.currentTarget,
                    x: e.clientX - rect.x,
                    y: e.clientY - rect.y
                });
            },
            onKeyDown (e) {
                // macOS has a default keyboard shortcut to show the contextmenu: Ctrl + Enter.
                // However, some versions of Safari and Chrome do not trigger the contextmenu event.
                // Fixed in https://github.com/WebKit/WebKit/pull/62278 (currently in WekKit nightly) and
                // https://github.com/chromium/chromium/commit/268c876c191cd4712c2d1043aab9760fb71d9be5 (Chrome 147).
                // Remove this workaround once those are broadly available.
                // An additional bug still occurs when the target has a border-radius: https://bugs.webkit.org/show_bug.cgi?id=317496
                if ((0, _platform.isMac)()) {
                    if (e.ctrlKey && e.key === 'Enter') {
                        firedContextMenuEvent.current = false;
                        let target = e.currentTarget;
                        e.stopPropagation();
                        setTimeout(()=>{
                            if (!firedContextMenuEvent.current) {
                                let rect = target.getBoundingClientRect();
                                onContextMenu({
                                    target,
                                    x: rect.width / 2,
                                    y: rect.height / 2
                                });
                            } else firedContextMenuEvent.current = false;
                        }, 10);
                    }
                }
            }
        })
    };
}

},{"react":"gOP0N","../utils/platform":"eBqgD","../utils/mergeProps":"jycxS","./useLongPress":"b7u5T","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8lll3":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2022 Adobe. All rights reserved.
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
/**
 * Returns a cached LocalizedStringDictionary for the given strings.
 */ parcelHelpers.export(exports, "useLocalizedStringDictionary", ()=>useLocalizedStringDictionary);
/**
 * Provides localized string formatting for the current locale. Supports interpolating variables,
 * selecting the correct pluralization, and formatting numbers. Automatically updates when the
 * locale changes.
 *
 * @param strings - A mapping of languages to localized strings by key.
 */ parcelHelpers.export(exports, "useLocalizedStringFormatter", ()=>useLocalizedStringFormatter);
var _string = require("@internationalized/string");
var _i18Nprovider = require("./I18nProvider");
var _react = require("react");
const cache = new WeakMap();
function getCachedDictionary(strings) {
    let dictionary = cache.get(strings);
    if (!dictionary) {
        dictionary = new (0, _string.LocalizedStringDictionary)(strings);
        cache.set(strings, dictionary);
    }
    return dictionary;
}
function useLocalizedStringDictionary(strings, packageName) {
    return packageName && (0, _string.LocalizedStringDictionary).getGlobalDictionaryForPackage(packageName) || getCachedDictionary(strings);
}
function useLocalizedStringFormatter(strings, packageName) {
    let { locale } = (0, _i18Nprovider.useLocale)();
    let dictionary = useLocalizedStringDictionary(strings, packageName);
    return (0, _react.useMemo)(()=>new (0, _string.LocalizedStringFormatter)(locale, dictionary), [
        locale,
        dictionary
    ]);
}

},{"@internationalized/string":[["LocalizedStringDictionary","3Dyf5"],["LocalizedStringFormatter","Pfhr4"]],"./I18nProvider":"czGuc","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3Dyf5":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2022 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "LocalizedStringDictionary", ()=>$a747a10fe70a57da$export$c17fa47878dc55b6);
const $a747a10fe70a57da$var$localeSymbol = Symbol.for('react-aria.i18n.locale');
const $a747a10fe70a57da$var$stringsSymbol = Symbol.for('react-aria.i18n.strings');
let $a747a10fe70a57da$var$cachedGlobalStrings = undefined;
class $a747a10fe70a57da$export$c17fa47878dc55b6 {
    constructor(messages, defaultLocale = 'en-US'){
        // Clone messages so we don't modify the original object.
        // Filter out entries with falsy values which may have been caused by applying optimize-locales-plugin.
        this.strings = Object.fromEntries(Object.entries(messages).filter(([, v])=>v));
        this.defaultLocale = defaultLocale;
    }
    /** Returns a localized string for the given key and locale. */ getStringForLocale(key, locale) {
        let strings = this.getStringsForLocale(locale);
        let string = strings[key];
        if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
        return string;
    }
    /** Returns all localized strings for the given locale. */ getStringsForLocale(locale) {
        let strings = this.strings[locale];
        if (!strings) {
            strings = $a747a10fe70a57da$var$getStringsForLocale(locale, this.strings, this.defaultLocale);
            this.strings[locale] = strings;
        }
        return strings;
    }
    static getGlobalDictionaryForPackage(packageName) {
        if (typeof window === 'undefined') return null;
        let locale = window[$a747a10fe70a57da$var$localeSymbol];
        if ($a747a10fe70a57da$var$cachedGlobalStrings === undefined) {
            let globalStrings = window[$a747a10fe70a57da$var$stringsSymbol];
            if (!globalStrings) return null;
            $a747a10fe70a57da$var$cachedGlobalStrings = {};
            for(let pkg in globalStrings)$a747a10fe70a57da$var$cachedGlobalStrings[pkg] = new $a747a10fe70a57da$export$c17fa47878dc55b6({
                [locale]: globalStrings[pkg]
            }, locale);
        }
        let dictionary = $a747a10fe70a57da$var$cachedGlobalStrings?.[packageName];
        if (!dictionary) throw new Error(`Strings for package "${packageName}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
        return dictionary;
    }
}
function $a747a10fe70a57da$var$getStringsForLocale(locale, strings, defaultLocale = 'en-US') {
    // If there is an exact match, use it.
    if (strings[locale]) return strings[locale];
    // Attempt to find the closest match by language.
    // For example, if the locale is fr-CA (French Canadian), but there is only
    // an fr-FR (France) set of strings, use that.
    // This could be replaced with Intl.LocaleMatcher once it is supported.
    // https://github.com/tc39/proposal-intl-localematcher
    let language = $a747a10fe70a57da$var$getLanguage(locale);
    // If the locale has an explicit script (e.g. sr-Latn-RS), prefer a
    // language-script match (sr-Latn) over a language-only match (sr), since
    // those may represent entirely different scripts.
    let script = $a747a10fe70a57da$var$getScript(locale);
    if (script && strings[`${language}-${script}`]) return strings[`${language}-${script}`];
    if (strings[language]) return strings[language];
    for(let key in strings){
        if (key.startsWith(language + '-')) return strings[key];
    }
    // Nothing close, use english.
    return strings[defaultLocale];
}
function $a747a10fe70a57da$var$getLanguage(locale) {
    // @ts-ignore
    if (Intl.Locale) return new Intl.Locale(locale).language;
    return locale.split('-')[0];
}
function $a747a10fe70a57da$var$getScript(locale) {
    // @ts-ignore
    if (Intl.Locale) return new Intl.Locale(locale).script;
    return undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"Pfhr4":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2022 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "LocalizedStringFormatter", ()=>$b27c684a33948c64$export$2f817fcdc4b89ae0);
const $b27c684a33948c64$var$pluralRulesCache = new Map();
const $b27c684a33948c64$var$numberFormatCache = new Map();
class $b27c684a33948c64$export$2f817fcdc4b89ae0 {
    constructor(locale, strings){
        this.locale = locale;
        this.strings = strings;
    }
    /** Formats a localized string for the given key with the provided variables. */ format(key, variables) {
        let message = this.strings.getStringForLocale(key, this.locale);
        return typeof message === 'function' ? message(variables, this) : message;
    }
    plural(count, options, type = 'cardinal') {
        let opt = options['=' + count];
        if (opt) return typeof opt === 'function' ? opt() : opt;
        let key = this.locale + ':' + type;
        let pluralRules = $b27c684a33948c64$var$pluralRulesCache.get(key);
        if (!pluralRules) {
            pluralRules = new Intl.PluralRules(this.locale, {
                type: type
            });
            $b27c684a33948c64$var$pluralRulesCache.set(key, pluralRules);
        }
        let selected = pluralRules.select(count);
        opt = options[selected] || options.other;
        return typeof opt === 'function' ? opt() : opt;
    }
    number(value) {
        let numberFormat = $b27c684a33948c64$var$numberFormatCache.get(this.locale);
        if (!numberFormat) {
            numberFormat = new Intl.NumberFormat(this.locale);
            $b27c684a33948c64$var$numberFormatCache.set(this.locale, numberFormat);
        }
        return numberFormat.format(value);
    }
    select(options, value) {
        let opt = options[value] || options.other;
        return typeof opt === 'function' ? opt() : opt;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dnU5A":[function(require,module,exports,__globalThis) {
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
/**
 * Handles the behavior and accessibility for an overlay trigger, e.g. a button
 * that opens a popover, menu, or other overlay that is positioned relative to the trigger.
 */ parcelHelpers.export(exports, "useOverlayTrigger", ()=>useOverlayTrigger);
var _useCloseOnScroll = require("./useCloseOnScroll");
var _react = require("react");
var _useId = require("../utils/useId");
function useOverlayTrigger(props, state, ref) {
    let { type } = props;
    let { isOpen } = state;
    // Backward compatibility. Share state close function with useOverlayPosition so it can close on scroll
    // without forcing users to pass onClose.
    (0, _react.useEffect)(()=>{
        if (ref && ref.current) (0, _useCloseOnScroll.onCloseMap).set(ref.current, state.close);
    });
    // Aria 1.1 supports multiple values for aria-haspopup other than just menus.
    // https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
    // However, we only add it for menus for now because screen readers often
    // announce it as a menu even for other values.
    let ariaHasPopup = undefined;
    if (type === 'menu') ariaHasPopup = true;
    else if (type === 'listbox') ariaHasPopup = 'listbox';
    let overlayId = (0, _useId.useId)();
    return {
        triggerProps: {
            'aria-haspopup': ariaHasPopup,
            'aria-expanded': isOpen,
            'aria-controls': isOpen ? overlayId : undefined,
            onPress: state.toggle
        },
        overlayProps: {
            id: overlayId
        }
    };
}

},{"./useCloseOnScroll":"5Qs2J","react":"gOP0N","../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5Qs2J":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "onCloseMap", ()=>onCloseMap);
/** @private */ parcelHelpers.export(exports, "useCloseOnScroll", ()=>useCloseOnScroll);
var _domHelpers = require("../utils/domHelpers");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _react = require("react");
const onCloseMap = new WeakMap();
function useCloseOnScroll(opts) {
    let { triggerRef, isOpen, onClose } = opts;
    (0, _react.useEffect)(()=>{
        if (!isOpen || onClose === null) return;
        let onScroll = (e)=>{
            // Ignore if scrolling an scrollable region outside the trigger's tree.
            let target = (0, _domfunctions.getEventTarget)(e);
            // window is not a Node and doesn't have contain, but window contains everything
            if (!triggerRef.current || target instanceof Node && !(0, _domfunctions.nodeContains)(target, triggerRef.current)) return;
            // Ignore scroll events on any input or textarea as the cursor position can cause it to scroll
            // such as in a combobox. Clicking the dropdown button places focus on the input, and if the
            // text inside the input extends beyond the 'end', then it will scroll so the cursor is visible at the end.
            if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
            let onCloseHandler = onClose || onCloseMap.get(triggerRef.current);
            if (onCloseHandler) onCloseHandler();
        };
        return (0, _domHelpers.addEvent)((0, _domfunctions.getPropagationTargets)(triggerRef.current), 'scroll', onScroll, true);
    }, [
        isOpen,
        onClose,
        triggerRef
    ]);
}

},{"../utils/domHelpers":"cYkFa","../utils/shadowdom/DOMFunctions":"8kfpz","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"58iim":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useResizeObserver", ()=>useResizeObserver);
var _react = require("react");
var _useEffectEvent = require("./useEffectEvent");
function hasResizeObserver() {
    return typeof window.ResizeObserver !== 'undefined';
}
function useResizeObserver(options) {
    // Only call onResize from inside the effect, otherwise we'll void our assumption that
    // useEffectEvents are safe to pass in.
    const { ref, box, onResize } = options;
    let onResizeEvent = (0, _useEffectEvent.useEffectEvent)(onResize);
    (0, _react.useEffect)(()=>{
        let element = ref?.current;
        if (!element) return;
        if (!hasResizeObserver()) {
            window.addEventListener('resize', onResizeEvent, false);
            return ()=>{
                window.removeEventListener('resize', onResizeEvent, false);
            };
        } else {
            const resizeObserverInstance = new window.ResizeObserver((entries)=>{
                if (!entries.length) return;
                onResizeEvent();
            });
            resizeObserverInstance.observe(element, {
                box
            });
            return ()=>{
                if (element) resizeObserverInstance.unobserve(element);
            };
        }
    }, [
        ref,
        box
    ]);
}

},{"react":"gOP0N","./useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6hJKZ":[function(require,module,exports,__globalThis) {
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
/**
 * Manages state for a menu trigger. Tracks whether the menu is currently open,
 * and controls which item will receive focus when it opens. Also tracks the open submenus within
 * the menu tree via their trigger keys.
 */ parcelHelpers.export(exports, "useMenuTriggerState", ()=>useMenuTriggerState);
var _useOverlayTriggerState = require("../overlays/useOverlayTriggerState");
var _react = require("react");
function useMenuTriggerState(props) {
    let overlayTriggerState = (0, _useOverlayTriggerState.useOverlayTriggerState)(props);
    let [focusStrategy, setFocusStrategy] = (0, _react.useState)(null);
    let [expandedKeysStack, setExpandedKeysStack] = (0, _react.useState)([]);
    let closeAll = ()=>{
        setExpandedKeysStack([]);
        overlayTriggerState.close();
    };
    let openSubmenu = (triggerKey, level)=>{
        setExpandedKeysStack((oldStack)=>{
            if (level > oldStack.length) return oldStack;
            return [
                ...oldStack.slice(0, level),
                triggerKey
            ];
        });
    };
    let closeSubmenu = (triggerKey, level)=>{
        setExpandedKeysStack((oldStack)=>{
            let key = oldStack[level];
            if (key === triggerKey) return oldStack.slice(0, level);
            else return oldStack;
        });
    };
    return {
        focusStrategy,
        ...overlayTriggerState,
        open (focusStrategy = null) {
            setFocusStrategy(focusStrategy);
            overlayTriggerState.open();
        },
        toggle (focusStrategy = null) {
            setFocusStrategy(focusStrategy);
            overlayTriggerState.toggle();
        },
        close () {
            closeAll();
        },
        expandedKeysStack,
        openSubmenu,
        closeSubmenu
    };
}

},{"../overlays/useOverlayTriggerState":"457a8","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"457a8":[function(require,module,exports,__globalThis) {
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
/**
 * Manages state for an overlay trigger. Tracks whether the overlay is open, and provides
 * methods to toggle this state.
 */ parcelHelpers.export(exports, "useOverlayTriggerState", ()=>useOverlayTriggerState);
var _react = require("react");
var _useControlledState = require("../utils/useControlledState");
function useOverlayTriggerState(props) {
    let [isOpen, setOpen] = (0, _useControlledState.useControlledState)(props.isOpen, props.defaultOpen || false, props.onOpenChange);
    let [point, setPoint] = (0, _react.useState)(null);
    const open = (0, _react.useCallback)(()=>{
        setOpen(true);
    }, [
        setOpen
    ]);
    const close = (0, _react.useCallback)(()=>{
        setOpen(false);
    }, [
        setOpen
    ]);
    const toggle = (0, _react.useCallback)(()=>{
        setOpen(!isOpen);
    }, [
        setOpen,
        isOpen
    ]);
    return {
        isOpen,
        setOpen,
        open,
        close,
        toggle,
        point,
        setPoint
    };
}

},{"react":"gOP0N","../utils/useControlledState":"8yNBD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"NRzeg":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "getScrollParent", ()=>getScrollParent);
var _isScrollable = require("./isScrollable");
function getScrollParent(node, checkForOverflow) {
    let scrollableNode = node;
    if ((0, _isScrollable.isScrollable)(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
    while(scrollableNode && !(0, _isScrollable.isScrollable)(scrollableNode, checkForOverflow))scrollableNode = scrollableNode.parentElement;
    return scrollableNode || document.scrollingElement || document.documentElement;
}

},{"./isScrollable":"2UC33","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dm7Ko":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2022 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "OverlayContext", ()=>OverlayContext);
/**
 * A container which renders an overlay such as a popover or modal in a portal,
 * and provides a focus scope for the child elements.
 */ parcelHelpers.export(exports, "Overlay", ()=>Overlay);
/** @private */ parcelHelpers.export(exports, "useOverlayFocusContain", ()=>useOverlayFocusContain);
var _jsxRuntime = require("preact/jsx-runtime");
var _pressResponder = require("../interactions/PressResponder");
var _useFocusable = require("../interactions/useFocusable");
var _focusScope = require("../focus/FocusScope");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
var _ssrprovider = require("../ssr/SSRProvider");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _portalProvider = require("./PortalProvider");
const OverlayContext = /*#__PURE__*/ (0, _reactDefault.default).createContext(null);
function Overlay(props) {
    let isSSR = (0, _ssrprovider.useIsSSR)();
    let { portalContainer = isSSR ? null : document.body, isExiting } = props;
    let [contain, setContain] = (0, _react.useState)(false);
    let contextValue = (0, _react.useMemo)(()=>({
            contain,
            setContain
        }), [
        contain,
        setContain
    ]);
    let { getContainer } = (0, _portalProvider.useUNSAFE_PortalContext)();
    if (!props.portalContainer && getContainer) portalContainer = getContainer();
    if (!portalContainer) return null;
    let contents = props.children;
    if (!props.disableFocusManagement) contents = /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _focusScope.FocusScope), {
        restoreFocus: true,
        contain: (props.shouldContainFocus || contain) && !isExiting,
        children: contents
    });
    contents = /*#__PURE__*/ (0, _jsxRuntime.jsx)(OverlayContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _pressResponder.ClearPressResponder), {
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _useFocusable.FocusableContext).Provider, {
                value: null,
                children: contents
            })
        })
    });
    return /*#__PURE__*/ (0, _reactDomDefault.default).createPortal(contents, portalContainer);
}
function useOverlayFocusContain() {
    let ctx = (0, _react.useContext)(OverlayContext);
    let setContain = ctx?.setContain;
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        setContain?.(true);
    }, [
        setContain
    ]);
}

},{"preact/jsx-runtime":"b2Fbn","../interactions/PressResponder":"e49up","../interactions/useFocusable":"6IFKj","../focus/FocusScope":"E8d3D","react":"gOP0N","react-dom":"gOP0N","../ssr/SSRProvider":"2cndP","../utils/useLayoutEffect":"h7M6K","./PortalProvider":"iYoU7","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"e49up":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "PressResponder", ()=>PressResponder);
parcelHelpers.export(exports, "ClearPressResponder", ()=>ClearPressResponder);
var _jsxRuntime = require("preact/jsx-runtime");
var _mergeProps = require("../utils/mergeProps");
var _context = require("./context");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useObjectRef = require("../utils/useObjectRef");
var _useSyncRef = require("../utils/useSyncRef");
const PressResponder = /*#__PURE__*/ (0, _reactDefault.default).forwardRef(({ children, ...props }, ref)=>{
    let isRegistered = (0, _react.useRef)(false);
    let prevContext = (0, _react.useContext)((0, _context.PressResponderContext));
    // oxlint-disable-next-line react/react-compiler
    let context = (0, _mergeProps.mergeProps)(prevContext || {}, {
        ...props,
        register () {
            isRegistered.current = true;
            if (prevContext) prevContext.register();
        }
    });
    context.ref = (0, _useObjectRef.useObjectRef)(ref || prevContext?.ref);
    (0, _useSyncRef.useSyncRef)(prevContext, context.ref);
    (0, _react.useEffect)(()=>{
        if (!isRegistered.current) isRegistered.current = true; // only warn once in strict mode.
    }, []);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _context.PressResponderContext).Provider, {
        value: context,
        children: children
    });
});
function ClearPressResponder({ children }) {
    let context = (0, _react.useMemo)(()=>({
            register: ()=>{}
        }), []);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _context.PressResponderContext).Provider, {
        value: context,
        children: children
    });
}

},{"preact/jsx-runtime":"b2Fbn","../utils/mergeProps":"jycxS","./context":"8Eyap","react":"gOP0N","../utils/useObjectRef":"ec0NJ","../utils/useSyncRef":"8a0bK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gQ2k2":[function(require,module,exports,__globalThis) {
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
/**
 * Announces the message using screen reader technology.
 */ parcelHelpers.export(exports, "announce", ()=>announce);
/**
 * Stops all queued announcements.
 */ parcelHelpers.export(exports, "clearAnnouncer", ()=>clearAnnouncer);
/**
 * Removes the announcer from the DOM.
 */ parcelHelpers.export(exports, "destroyAnnouncer", ()=>destroyAnnouncer);
/* Inspired by https://github.com/AlmeroSteyn/react-aria-live */ const LIVEREGION_TIMEOUT_DELAY = 7000;
let liveAnnouncer = null;
function announce(message, assertiveness = 'assertive', timeout = LIVEREGION_TIMEOUT_DELAY) {
    if (!liveAnnouncer) {
        liveAnnouncer = new LiveAnnouncer();
        // wait for the live announcer regions to be added to the dom, then announce
        // otherwise Safari won't announce the message if it's added too quickly
        // found most times less than 100ms were not consistent when announcing with Safari
        // IS_REACT_ACT_ENVIRONMENT is used by React 18. Previous versions checked for the `jest` global.
        // https://github.com/reactwg/react-18/discussions/102
        // if we're in a test environment, announce without waiting
        if (// @ts-ignore
        !(typeof IS_REACT_ACT_ENVIRONMENT === 'boolean' ? IS_REACT_ACT_ENVIRONMENT : typeof jest !== 'undefined')) setTimeout(()=>{
            if (liveAnnouncer?.isAttached()) liveAnnouncer?.announce(message, assertiveness, timeout);
        }, 100);
        else liveAnnouncer.announce(message, assertiveness, timeout);
    } else liveAnnouncer.announce(message, assertiveness, timeout);
}
function clearAnnouncer(assertiveness) {
    if (liveAnnouncer) liveAnnouncer.clear(assertiveness);
}
function destroyAnnouncer() {
    if (liveAnnouncer) {
        liveAnnouncer.destroy();
        liveAnnouncer = null;
    }
}
// LiveAnnouncer is implemented using vanilla DOM, not React. That's because as of React 18
// ReactDOM.render is deprecated, and the replacement, ReactDOM.createRoot is moved into a
// subpath import `react-dom/client`. That makes it hard for us to support multiple React versions.
// As a global API, we can't use portals without introducing a breaking API change. LiveAnnouncer
// is simple enough to implement without React, so that's what we do here.
// See this discussion for more details: https://github.com/reactwg/react-18/discussions/125#discussioncomment-2382638
class LiveAnnouncer {
    node = null;
    assertiveLog = null;
    politeLog = null;
    constructor(){
        if (typeof document !== 'undefined') {
            this.node = document.createElement('div');
            this.node.dataset.liveAnnouncer = 'true';
            // copied from VisuallyHidden
            Object.assign(this.node.style, {
                border: 0,
                clip: 'rect(0 0 0 0)',
                clipPath: 'inset(50%)',
                height: '1px',
                margin: '-1px',
                overflow: 'hidden',
                padding: 0,
                position: 'absolute',
                width: '1px',
                whiteSpace: 'nowrap'
            });
            this.assertiveLog = this.createLog('assertive');
            this.node.appendChild(this.assertiveLog);
            this.politeLog = this.createLog('polite');
            this.node.appendChild(this.politeLog);
            document.body.prepend(this.node);
        }
    }
    isAttached() {
        return this.node?.isConnected;
    }
    createLog(ariaLive) {
        let node = document.createElement('div');
        node.setAttribute('role', 'log');
        node.setAttribute('aria-live', ariaLive);
        node.setAttribute('aria-relevant', 'additions');
        return node;
    }
    destroy() {
        if (!this.node) return;
        document.body.removeChild(this.node);
        this.node = null;
    }
    announce(message, assertiveness = 'assertive', timeout = LIVEREGION_TIMEOUT_DELAY) {
        if (!this.node) return;
        let node = document.createElement('div');
        if (typeof message === 'object') {
            // To read an aria-labelledby, the element must have an appropriate role, such as img.
            node.setAttribute('role', 'img');
            node.setAttribute('aria-labelledby', message['aria-labelledby']);
        } else node.textContent = message;
        if (assertiveness === 'assertive') this.assertiveLog?.appendChild(node);
        else this.politeLog?.appendChild(node);
        if (message !== '') setTimeout(()=>{
            node.remove();
        }, timeout);
    }
    clear(assertiveness) {
        if (!this.node) return;
        if ((!assertiveness || assertiveness === 'assertive') && this.assertiveLog) this.assertiveLog.innerHTML = '';
        if ((!assertiveness || assertiveness === 'polite') && this.politeLog) this.politeLog.innerHTML = '';
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lPmqM":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the behavior and accessibility implementation for a button component. Handles mouse,
 * keyboard, and touch interactions, focus behavior, and ARIA props for both native button elements
 * and custom element types.
 *
 * @param props - Props to be applied to the button.
 * @param ref - A ref to a DOM element for the button.
 */ parcelHelpers.export(exports, "useButton", ()=>useButton);
var _filterDOMProps = require("../utils/filterDOMProps");
var _mergeProps = require("../utils/mergeProps");
var _useFocusable = require("../interactions/useFocusable");
var _usePress = require("../interactions/usePress");
function useButton(props, ref) {
    let { elementType = 'button', isDisabled, onPress, onPressStart, onPressEnd, onPressUp, onPressChange, preventFocusOnPress, // @ts-ignore - undocumented
    allowFocusWhenDisabled, onClick, href, target, rel, type = 'button' } = props;
    let additionalProps;
    if (elementType === 'button') additionalProps = {
        type,
        disabled: isDisabled,
        form: props.form,
        formAction: props.formAction,
        formEncType: props.formEncType,
        formMethod: props.formMethod,
        formNoValidate: props.formNoValidate,
        formTarget: props.formTarget,
        name: props.name,
        value: props.value
    };
    else additionalProps = {
        role: 'button',
        href: elementType === 'a' && !isDisabled ? href : undefined,
        target: elementType === 'a' ? target : undefined,
        type: elementType === 'input' ? type : undefined,
        disabled: elementType === 'input' ? isDisabled : undefined,
        'aria-disabled': !isDisabled || elementType === 'input' ? undefined : isDisabled,
        rel: elementType === 'a' ? rel : undefined
    };
    let { pressProps, isPressed } = (0, _usePress.usePress)({
        onPressStart,
        onPressEnd,
        onPressChange,
        onPress,
        onPressUp,
        onClick,
        isDisabled,
        preventFocusOnPress,
        ref
    });
    let { focusableProps } = (0, _useFocusable.useFocusable)(props, ref);
    if (allowFocusWhenDisabled) // oxlint-disable-next-line react/react-compiler
    focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
    let buttonProps = (0, _mergeProps.mergeProps)(focusableProps, pressProps, (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    }));
    return {
        isPressed,
        buttonProps: (0, _mergeProps.mergeProps)(additionalProps, buttonProps, {
            'aria-haspopup': props['aria-haspopup'],
            'aria-expanded': props['aria-expanded'],
            'aria-controls': props['aria-controls'],
            'aria-pressed': props['aria-pressed'],
            'aria-current': props['aria-current'],
            'aria-disabled': props['aria-disabled']
        })
    };
}

},{"../utils/filterDOMProps":"h4XHF","../utils/mergeProps":"jycxS","../interactions/useFocusable":"6IFKj","../interactions/usePress":"3S2KR","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fsvpW":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the accessibility implementation for a progress bar component.
 * Progress bars show either determinate or indeterminate progress of an operation
 * over time.
 */ parcelHelpers.export(exports, "useProgressBar", ()=>useProgressBar);
var _number = require("react-stately/private/utils/number");
var _filterDOMProps = require("../utils/filterDOMProps");
var _mergeProps = require("../utils/mergeProps");
var _useLabel = require("../label/useLabel");
var _useNumberFormatter = require("../i18n/useNumberFormatter");
function useProgressBar(props) {
    let { value = 0, minValue = 0, maxValue = 100, valueLabel, isIndeterminate, formatOptions = {
        style: 'percent'
    } } = props;
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    let { labelProps, fieldProps } = (0, _useLabel.useLabel)({
        ...props,
        // Progress bar is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    value = (0, _number.clamp)(value, minValue, maxValue);
    let range = maxValue - minValue;
    let percentage = range === 0 ? 0 : (value - minValue) / range;
    let formatter = (0, _useNumberFormatter.useNumberFormatter)(formatOptions);
    if (!isIndeterminate && !valueLabel) {
        let valueToFormat = formatOptions.style === 'percent' ? percentage : value;
        valueLabel = formatter.format(valueToFormat);
    }
    return {
        progressBarProps: (0, _mergeProps.mergeProps)(domProps, {
            ...fieldProps,
            'aria-valuenow': isIndeterminate ? undefined : value,
            'aria-valuemin': minValue,
            'aria-valuemax': maxValue,
            'aria-valuetext': isIndeterminate ? undefined : valueLabel,
            role: 'progressbar'
        }),
        labelProps
    };
}

},{"react-stately/private/utils/number":"aEFFO","../utils/filterDOMProps":"h4XHF","../utils/mergeProps":"jycxS","../label/useLabel":"kMUgu","../i18n/useNumberFormatter":"5T1hV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aEFFO":[function(require,module,exports,__globalThis) {
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
 */ /**
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest
 * valid step.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
parcelHelpers.export(exports, "roundToStepPrecision", ()=>roundToStepPrecision);
parcelHelpers.export(exports, "snapValueToStep", ()=>snapValueToStep);
/* Takes a value and rounds off to the number of digits. */ parcelHelpers.export(exports, "toFixedNumber", ()=>toFixedNumber);
function clamp(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function roundToStepPrecision(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function snapValueToStep(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = roundToStepPrecision(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor(roundToStepPrecision((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor(roundToStepPrecision(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = roundToStepPrecision(snappedValue, step);
    return snappedValue;
}
function toFixedNumber(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5T1hV":[function(require,module,exports,__globalThis) {
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
/**
 * Provides localized number formatting for the current locale. Automatically updates when the
 * locale changes, and handles caching of the number formatter for performance.
 *
 * @param options - Formatting options.
 */ parcelHelpers.export(exports, "useNumberFormatter", ()=>useNumberFormatter);
var _number = require("@internationalized/number");
var _i18Nprovider = require("./I18nProvider");
var _react = require("react");
function useNumberFormatter(options = {}) {
    let { locale } = (0, _i18Nprovider.useLocale)();
    return (0, _react.useMemo)(()=>new (0, _number.NumberFormatter)(locale, options), [
        locale,
        options
    ]);
}

},{"@internationalized/number":"3OyUY","./I18nProvider":"czGuc","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3OyUY":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "NumberFormatter", ()=>$1dfb119a85e764e5$export$cc77c4ff7e8673c5);
parcelHelpers.export(exports, "numberFormatSignDisplayPolyfill", ()=>$1dfb119a85e764e5$export$711b50b3c525e0f2);
let $1dfb119a85e764e5$var$formatterCache = new Map();
let $1dfb119a85e764e5$var$supportsSignDisplay = false;
try {
    $1dfb119a85e764e5$var$supportsSignDisplay = new Intl.NumberFormat('de-DE', {
        signDisplay: 'exceptZero'
    }).resolvedOptions().signDisplay === 'exceptZero';
// eslint-disable-next-line no-empty
} catch  {}
let $1dfb119a85e764e5$var$supportsUnit = false;
try {
    $1dfb119a85e764e5$var$supportsUnit = new Intl.NumberFormat('de-DE', {
        style: 'unit',
        unit: 'degree'
    }).resolvedOptions().style === 'unit';
// eslint-disable-next-line no-empty
} catch  {}
// Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
// Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
// Values were determined by switching to each locale manually in Chrome.
const $1dfb119a85e764e5$var$UNITS = {
    degree: {
        narrow: {
            default: "\xb0",
            'ja-JP': " \u5EA6",
            'zh-TW': "\u5EA6",
            'sl-SI': " \xb0"
        }
    }
};
class $1dfb119a85e764e5$export$cc77c4ff7e8673c5 {
    constructor(locale, options = {}){
        this.numberFormatter = $1dfb119a85e764e5$var$getCachedNumberFormatter(locale, options);
        this.options = options;
    }
    /**
   * Formats a number value as a string, according to the locale and options provided to the
   * constructor.
   */ format(value) {
        let res = '';
        if (!$1dfb119a85e764e5$var$supportsSignDisplay && this.options.signDisplay != null) res = $1dfb119a85e764e5$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
        else res = this.numberFormatter.format(value);
        if (this.options.style === 'unit' && !$1dfb119a85e764e5$var$supportsUnit) {
            let { unit: unit, unitDisplay: unitDisplay = 'short', locale: locale } = this.resolvedOptions();
            if (!unit) return res;
            let values = $1dfb119a85e764e5$var$UNITS[unit]?.[unitDisplay];
            res += values[locale] || values.default;
        }
        return res;
    }
    /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */ formatToParts(value) {
        // TODO: implement signDisplay for formatToParts
        return this.numberFormatter.formatToParts(value);
    }
    /** Formats a number range as a string. */ formatRange(start, end) {
        if (typeof this.numberFormatter.formatRange === 'function') return this.numberFormatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return `${this.format(start)} \u{2013} ${this.format(end)}`;
    }
    /** Formats a number range as an array of parts. */ formatRangeToParts(start, end) {
        if (typeof this.numberFormatter.formatRangeToParts === 'function') return this.numberFormatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        let startParts = this.numberFormatter.formatToParts(start);
        let endParts = this.numberFormatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: 'startRange'
                })),
            {
                type: 'literal',
                value: " \u2013 ",
                source: 'shared'
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: 'endRange'
                }))
        ];
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let options = this.numberFormatter.resolvedOptions();
        if (!$1dfb119a85e764e5$var$supportsSignDisplay && this.options.signDisplay != null) options = {
            ...options,
            signDisplay: this.options.signDisplay
        };
        if (!$1dfb119a85e764e5$var$supportsUnit && this.options.style === 'unit') options = {
            ...options,
            style: 'unit',
            unit: this.options.unit,
            unitDisplay: this.options.unitDisplay
        };
        return options;
    }
}
function $1dfb119a85e764e5$var$getCachedNumberFormatter(locale, options = {}) {
    let { numberingSystem: numberingSystem } = options;
    if (numberingSystem && locale.includes('-nu-')) {
        if (!locale.includes('-u-')) locale += '-u-';
        locale += `-nu-${numberingSystem}`;
    }
    if (options.style === 'unit' && !$1dfb119a85e764e5$var$supportsUnit) {
        let { unit: unit, unitDisplay: unitDisplay = 'short' } = options;
        if (!unit) throw new Error('unit option must be provided with style: "unit"');
        if (!$1dfb119a85e764e5$var$UNITS[unit]?.[unitDisplay]) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
        options = {
            ...options,
            style: 'decimal'
        };
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($1dfb119a85e764e5$var$formatterCache.has(cacheKey)) return $1dfb119a85e764e5$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.NumberFormat(locale, options);
    $1dfb119a85e764e5$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
function $1dfb119a85e764e5$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
    if (signDisplay === 'auto') return numberFormat.format(num);
    else if (signDisplay === 'never') return numberFormat.format(Math.abs(num));
    else {
        let needsPositiveSign = false;
        if (signDisplay === 'always') needsPositiveSign = num > 0 || Object.is(num, 0);
        else if (signDisplay === 'exceptZero') {
            if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
            else needsPositiveSign = num > 0;
        }
        if (needsPositiveSign) {
            let negative = numberFormat.format(-num);
            let noSign = numberFormat.format(num);
            // ignore RTL/LTR marker character
            let minus = negative.replace(noSign, '').replace(/\u200e|\u061C/, '');
            if ([
                ...minus
            ].length !== 1) console.warn('@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case');
            let positive = negative.replace(noSign, '!!!').replace(minus, '+').replace('!!!', noSign);
            return positive;
        } else return numberFormat.format(num);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eI7Ae":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2022 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "LabelContext", ()=>LabelContext);
parcelHelpers.export(exports, "Label", ()=>Label);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _hidden = require("react-aria/private/collections/Hidden");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const LabelContext = /*#__PURE__*/ (0, _react.createContext)({});
const Label = /*#__PURE__*/ (0, _hidden.createHideableComponent)(function Label(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, LabelContext);
    let { elementType = 'label', ...labelProps } = props;
    let ElementType = (0, _utils.dom)[elementType];
    // @ts-ignore
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ElementType, {
        className: "react-aria-Label",
        ...labelProps,
        ref: ref
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/private/collections/Hidden":"iPJX7","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kErbq":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2022 Adobe. All rights reserved.
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
/**
 * Provides the behavior and accessibility implementation for a popover component.
 * A popover is an overlay element positioned relative to a trigger.
 */ parcelHelpers.export(exports, "usePopover", ()=>usePopover);
var _ariaHideOutside = require("./ariaHideOutside");
var _useOverlayPosition = require("./useOverlayPosition");
var _useFocusWithin = require("../interactions/useFocusWithin");
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _useOverlay = require("./useOverlay");
var _usePreventScroll = require("./usePreventScroll");
function usePopover(props, state) {
    let { triggerRef, popoverRef, groupRef, isNonModal, isKeyboardDismissDisabled, shouldCloseOnInteractOutside, ...otherProps } = props;
    let isSubmenu = otherProps['trigger'] === 'SubmenuTrigger';
    let { overlayProps, underlayProps } = (0, _useOverlay.useOverlay)({
        isOpen: state.isOpen,
        onClose: state.close,
        shouldCloseOnBlur: true,
        isDismissable: !isNonModal || isSubmenu,
        isKeyboardDismissDisabled,
        shouldCloseOnInteractOutside
    }, groupRef ?? popoverRef);
    let { overlayProps: positionProps, arrowProps, placement, triggerAnchorPoint: origin } = (0, _useOverlayPosition.useOverlayPosition)({
        ...otherProps,
        targetRef: triggerRef,
        overlayRef: popoverRef,
        isOpen: state.isOpen,
        onClose: isNonModal && !isSubmenu ? state.close : null,
        getTargetRect: otherProps.getTargetRect ?? (state.point ? ()=>new DOMRect(state.point.x, state.point.y, 0, 0) : undefined)
    });
    (0, _usePreventScroll.usePreventScroll)({
        isDisabled: isNonModal || !state.isOpen
    });
    (0, _react.useEffect)(()=>{
        if (state.isOpen && popoverRef.current) {
            if (isNonModal) return (0, _ariaHideOutside.keepVisible)(groupRef?.current ?? popoverRef.current);
            else return (0, _ariaHideOutside.ariaHideOutside)([
                groupRef?.current ?? popoverRef.current
            ], {
                shouldUseInert: true
            });
        }
    }, [
        isNonModal,
        state.isOpen,
        popoverRef,
        groupRef
    ]);
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)(props);
    return {
        popoverProps: (0, _mergeProps.mergeProps)(overlayProps, positionProps, focusWithinProps),
        arrowProps,
        underlayProps,
        placement,
        triggerAnchorPoint: origin
    };
}

},{"./ariaHideOutside":"bOGar","./useOverlayPosition":"lXsTF","../interactions/useFocusWithin":"bkSQo","../utils/mergeProps":"jycxS","react":"gOP0N","./useOverlay":"1LtRR","./usePreventScroll":"9SGDE","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bOGar":[function(require,module,exports,__globalThis) {
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
/**
 * Hides all elements in the DOM outside the given targets from screen readers using aria-hidden,
 * and returns a function to revert these changes. In addition, changes to the DOM are watched
 * and new elements outside the targets are automatically hidden.
 *
 * @param targets - The elements that should remain visible.
 * @param root - Nothing will be hidden above this element.
 * @returns - A function to restore all hidden elements.
 */ parcelHelpers.export(exports, "ariaHideOutside", ()=>ariaHideOutside);
parcelHelpers.export(exports, "keepVisible", ()=>keepVisible);
var _shadowTreeWalker = require("../utils/shadowdom/ShadowTreeWalker");
var _domHelpers = require("../utils/domHelpers");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _flags = require("react-stately/private/flags/flags");
const supportsInert = typeof HTMLElement !== 'undefined' && 'inert' in HTMLElement.prototype;
function isAlwaysVisibleNode(node) {
    return node.dataset.liveAnnouncer === 'true' || node.dataset.reactAriaTopLayer !== undefined;
}
// Keeps a ref count of all hidden elements. Added to when hiding an element, and
// subtracted from when showing it again. When it reaches zero, aria-hidden is removed.
let refCountMap = new WeakMap();
let observerStack = [];
function ariaHideOutside(targets, options) {
    let windowObj = (0, _domHelpers.getOwnerWindow)(targets?.[0]);
    let opts = options instanceof windowObj.Element ? {
        root: options
    } : options;
    let root = opts?.root ?? document.body;
    let shouldUseInert = opts?.shouldUseInert && supportsInert;
    let visibleNodes = new Set(targets);
    let hiddenNodes = new Set();
    let getHidden = (element)=>{
        return shouldUseInert && element instanceof windowObj.HTMLElement ? element.inert : element.getAttribute('aria-hidden') === 'true';
    };
    let setHidden = (element, hidden)=>{
        if (shouldUseInert && element instanceof windowObj.HTMLElement) element.inert = hidden;
        else if (hidden) element.setAttribute('aria-hidden', 'true');
        else {
            element.removeAttribute('aria-hidden');
            if (element instanceof windowObj.HTMLElement) // We only ever call setHidden with hidden = false when the nodeCount is 1 aka
            // we are trying to make the element visible to screen readers again, so remove inert as well
            element.inert = false;
        }
    };
    let shadowRootsToWatch = new Set();
    if ((0, _flags.shadowDOM)()) {
        // Find all shadow roots that enclose the targets, walking up the host chain
        // until we reach the tree that `root` lives in. Each enclosing ShadowRoot
        // needs its own MutationObserver because it does not cross shadow
        // boundaries, so the observer on `root` cannot see mutations inside them.
        let boundary = root.getRootNode();
        for (let target of targets){
            let current = target.getRootNode();
            while((0, _domHelpers.isShadowRoot)(current) && current !== boundary){
                shadowRootsToWatch.add(current);
                current = current.host.getRootNode();
            }
        }
    }
    let walk = (root)=>{
        // Keep live announcer and top layer elements (e.g. toasts) visible.
        for (let element of root.querySelectorAll('[data-live-announcer], [data-react-aria-top-layer]'))visibleNodes.add(element);
        let acceptNode = (node)=>{
            // Skip this node and its children if it is one of the target nodes, or a live announcer.
            // Also skip children of already hidden nodes, as aria-hidden is recursive. An exception is
            // made for elements with role="row" since VoiceOver on iOS has issues hiding elements with role="row".
            // For that case we want to hide the cells inside as well (https://bugs.webkit.org/show_bug.cgi?id=222623).
            if (hiddenNodes.has(node) || visibleNodes.has(node) || node.parentElement && hiddenNodes.has(node.parentElement) && node.parentElement.getAttribute('role') !== 'row') return NodeFilter.FILTER_REJECT;
            // Skip this node but continue to children if one of the targets is inside the node.
            for (let target of visibleNodes){
                if ((0, _domfunctions.nodeContains)(node, target)) return NodeFilter.FILTER_SKIP;
            }
            return NodeFilter.FILTER_ACCEPT;
        };
        let walker = (0, _shadowTreeWalker.createShadowTreeWalker)((0, _domHelpers.getOwnerDocument)(root), root, NodeFilter.SHOW_ELEMENT, {
            acceptNode
        });
        // TreeWalker does not include the root.
        let acceptRoot = acceptNode(root);
        if (acceptRoot === NodeFilter.FILTER_ACCEPT) hide(root);
        if (acceptRoot !== NodeFilter.FILTER_REJECT) {
            let node = walker.nextNode();
            while(node != null){
                hide(node);
                node = walker.nextNode();
            }
        }
    };
    let hide = (node)=>{
        let refCount = refCountMap.get(node) ?? 0;
        // If already aria-hidden, and the ref count is zero, then this element
        // was already hidden and there's nothing for us to do.
        if (getHidden(node) && refCount === 0) return;
        if (refCount === 0) setHidden(node, true);
        hiddenNodes.add(node);
        refCountMap.set(node, refCount + 1);
    };
    // If there is already a MutationObserver listening from a previous call,
    // disconnect it so the new on takes over.
    if (observerStack.length) observerStack[observerStack.length - 1].disconnect();
    walk(root);
    let observer = new MutationObserver((changes)=>{
        for (let change of changes){
            if (change.type !== 'childList') continue;
            // If the parent element of the added nodes is not within one of the targets,
            // and not already inside a hidden node, hide all of the new children.
            if (change.target.isConnected && ![
                ...visibleNodes,
                ...hiddenNodes
            ].some((node)=>(0, _domfunctions.nodeContains)(node, change.target))) for (let node of change.addedNodes){
                if ((node instanceof HTMLElement || node instanceof SVGElement) && isAlwaysVisibleNode(node)) visibleNodes.add(node);
                else if (node instanceof Element) walk(node);
            }
            if ((0, _flags.shadowDOM)()) {
                // if any of the observed shadow roots were removed, stop observing them
                for (let shadowRoot of shadowRootsToWatch)if (!shadowRoot.isConnected) {
                    observer.disconnect();
                    break;
                }
            }
        }
    });
    observer.observe(root, {
        childList: true,
        subtree: true
    });
    let shadowObservers = new Set();
    if ((0, _flags.shadowDOM)()) for (let shadowRoot of shadowRootsToWatch){
        // Disconnect single target instead of all https://github.com/whatwg/dom/issues/126
        let shadowObserver = new MutationObserver((changes)=>{
            for (let change of changes){
                if (change.type !== 'childList') continue;
                // If the parent element of the added nodes is not within one of the targets,
                // and not already inside a hidden node, hide all of the new children.
                if (change.target.isConnected && ![
                    ...visibleNodes,
                    ...hiddenNodes
                ].some((node)=>(0, _domfunctions.nodeContains)(node, change.target))) for (let node of change.addedNodes){
                    if ((node instanceof HTMLElement || node instanceof SVGElement) && isAlwaysVisibleNode(node)) visibleNodes.add(node);
                    else if (node instanceof Element) walk(node);
                }
                if ((0, _flags.shadowDOM)()) {
                    // if any of the observed shadow roots were removed, stop observing them
                    for (let shadowRoot of shadowRootsToWatch)if (!shadowRoot.isConnected) {
                        observer.disconnect();
                        break;
                    }
                }
            }
        });
        shadowObserver.observe(shadowRoot, {
            childList: true,
            subtree: true
        });
        shadowObservers.add(shadowObserver);
    }
    let observerWrapper = {
        visibleNodes,
        hiddenNodes,
        observe () {
            observer.observe(root, {
                childList: true,
                subtree: true
            });
        },
        disconnect () {
            observer.disconnect();
        }
    };
    observerStack.push(observerWrapper);
    return ()=>{
        observer.disconnect();
        if ((0, _flags.shadowDOM)()) for (let shadowObserver of shadowObservers)shadowObserver.disconnect();
        for (let node of hiddenNodes){
            let count = refCountMap.get(node);
            if (count == null) continue;
            if (count === 1) {
                setHidden(node, false);
                refCountMap.delete(node);
            } else refCountMap.set(node, count - 1);
        }
        // Remove this observer from the stack, and start the previous one.
        if (observerWrapper === observerStack[observerStack.length - 1]) {
            observerStack.pop();
            if (observerStack.length) observerStack[observerStack.length - 1].observe();
        } else observerStack.splice(observerStack.indexOf(observerWrapper), 1);
    };
}
function keepVisible(element) {
    let observer = observerStack[observerStack.length - 1];
    if (observer && !observer.visibleNodes.has(element)) {
        observer.visibleNodes.add(element);
        return ()=>{
            observer.visibleNodes.delete(element);
        };
    }
}

},{"../utils/shadowdom/ShadowTreeWalker":"grvf5","../utils/domHelpers":"cYkFa","../utils/shadowdom/DOMFunctions":"8kfpz","react-stately/private/flags/flags":"ahU3Z","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1LtRR":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the behavior for overlays such as dialogs, popovers, and menus.
 * Hides the overlay when the user interacts outside it, when the Escape key is pressed,
 * or optionally, on blur. Only the top-most overlay will close at once.
 */ parcelHelpers.export(exports, "useOverlay", ()=>useOverlay);
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _focusScope = require("../focus/FocusScope");
var _react = require("react");
var _useFocusWithin = require("../interactions/useFocusWithin");
var _useInteractOutside = require("../interactions/useInteractOutside");
var _useKeyboard = require("../interactions/useKeyboard");
const visibleOverlays = [];
function useOverlay(props, ref) {
    let { onClose, shouldCloseOnBlur, isOpen, isDismissable = false, isKeyboardDismissDisabled = false, shouldCloseOnInteractOutside } = props;
    let lastVisibleOverlay = (0, _react.useRef)(undefined);
    // Add the overlay ref to the stack of visible overlays on mount, and remove on unmount.
    (0, _react.useEffect)(()=>{
        if (isOpen && !visibleOverlays.includes(ref)) {
            visibleOverlays.push(ref);
            return ()=>{
                let index = visibleOverlays.indexOf(ref);
                if (index >= 0) visibleOverlays.splice(index, 1);
            };
        }
    }, [
        isOpen,
        ref
    ]);
    // Only hide the overlay when it is the topmost visible overlay in the stack
    let onHide = ()=>{
        if (visibleOverlays[visibleOverlays.length - 1] === ref && onClose) onClose();
    };
    let onInteractOutsideStart = (e)=>{
        const topMostOverlay = visibleOverlays[visibleOverlays.length - 1];
        lastVisibleOverlay.current = topMostOverlay;
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside((0, _domfunctions.getEventTarget)(e))) {
            if (topMostOverlay === ref) e.stopPropagation();
        }
    };
    let onInteractOutside = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside((0, _domfunctions.getEventTarget)(e))) {
            if (visibleOverlays[visibleOverlays.length - 1] === ref) e.stopPropagation();
            if (lastVisibleOverlay.current === ref) onHide();
        }
        lastVisibleOverlay.current = undefined;
    };
    // Handle the escape key
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            Escape: ()=>{
                if (!isKeyboardDismissDisabled) {
                    onHide();
                    return;
                }
                return false;
            }
        }
    });
    // Handle clicking outside the overlay to close it
    (0, _useInteractOutside.useInteractOutside)({
        ref,
        onInteractOutside: isDismissable && isOpen ? onInteractOutside : undefined,
        onInteractOutsideStart
    });
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)({
        isDisabled: !shouldCloseOnBlur,
        onBlurWithin: (e)=>{
            // Do not close if relatedTarget is null, which means focus is lost to the body.
            // That can happen when switching tabs, or due to a VoiceOver/Chrome bug with Control+Option+Arrow navigation.
            // Clicking on the body to close the overlay should already be handled by useInteractOutside.
            // https://github.com/adobe/react-spectrum/issues/4130
            // https://github.com/adobe/react-spectrum/issues/4922
            //
            // If focus is moving into a child focus scope (e.g. menu inside a dialog),
            // do not close the outer overlay. At this point, the active scope should
            // still be the outer overlay, since blur events run before focus.
            if (!e.relatedTarget || (0, _focusScope.isElementInChildOfActiveScope)(e.relatedTarget)) return;
            if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.relatedTarget)) onClose?.();
        }
    });
    return {
        overlayProps: {
            ...keyboardProps,
            ...focusWithinProps
        },
        underlayProps: {}
    };
}

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../focus/FocusScope":"E8d3D","react":"gOP0N","../interactions/useFocusWithin":"bkSQo","../interactions/useInteractOutside":"fgkZg","../interactions/useKeyboard":"aHm7i","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fgkZg":[function(require,module,exports,__globalThis) {
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
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Example, used in components like Dialogs and Popovers so they can close
 * when a user clicks outside them.
 */ parcelHelpers.export(exports, "useInteractOutside", ()=>useInteractOutside);
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _domHelpers = require("../utils/domHelpers");
var _react = require("react");
var _useEffectEvent = require("../utils/useEffectEvent");
function useInteractOutside(props) {
    let { ref, onInteractOutside, isDisabled, onInteractOutsideStart } = props;
    let stateRef = (0, _react.useRef)({
        isPointerDown: false,
        ignoreEmulatedMouseEvents: false
    });
    let onPointerDown = (0, _useEffectEvent.useEffectEvent)((e)=>{
        if (onInteractOutside && isValidEvent(e, ref)) {
            if (onInteractOutsideStart) onInteractOutsideStart(e);
            stateRef.current.isPointerDown = true;
        }
    });
    let triggerInteractOutside = (0, _useEffectEvent.useEffectEvent)((e)=>{
        if (onInteractOutside) onInteractOutside(e);
    });
    (0, _react.useEffect)(()=>{
        let state = stateRef.current;
        if (isDisabled) return;
        const element = ref.current;
        const documentObject = (0, _domHelpers.getOwnerDocument)(element);
        // Use pointer events if available. Otherwise, fall back to mouse and touch events.
        if (typeof PointerEvent !== 'undefined') {
            let onClick = (e)=>{
                if (state.isPointerDown && isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            // changing these to capture phase fixed combobox
            // Use click instead of pointerup to avoid Android Chrome issue
            // https://issues.chromium.org/issues/40732224
            documentObject.addEventListener('pointerdown', onPointerDown, true);
            documentObject.addEventListener('click', onClick, true);
            return ()=>{
                documentObject.removeEventListener('pointerdown', onPointerDown, true);
                documentObject.removeEventListener('click', onClick, true);
            };
        }
    }, [
        ref,
        isDisabled
    ]);
}
function isValidEvent(event, ref) {
    if (event.button > 0) return false;
    let target = (0, _domfunctions.getEventTarget)(event);
    if (target) {
        // if the event target is no longer in the document, ignore
        const ownerDocument = target.ownerDocument;
        if (!ownerDocument || !(0, _domfunctions.nodeContains)(ownerDocument.documentElement, target)) return false;
        // If the target is within a top layer element (e.g. toasts), ignore.
        if (target.closest('[data-react-aria-top-layer]')) return false;
    }
    if (!ref.current) return false;
    // When the event source is inside a Shadow DOM, event.target is just the shadow root.
    // Using event.composedPath instead means we can get the actual element inside the shadow root.
    // This only works if the shadow root is open, there is no way to detect if it is closed.
    // If the event composed path contains the ref, interaction is inside.
    return !event.composedPath().includes(ref.current);
}

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","react":"gOP0N","../utils/useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9SGDE":[function(require,module,exports,__globalThis) {
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
/**
 * Prevents scrolling on the document body on mount, and
 * restores it on unmount. Also ensures that content does not
 * shift due to the scrollbars disappearing.
 */ parcelHelpers.export(exports, "usePreventScroll", ()=>usePreventScroll);
var _domHelpers = require("../utils/domHelpers");
var _chain = require("../utils/chain");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _getNonce = require("../utils/getNonce");
var _getScrollParent = require("../utils/getScrollParent");
var _platform = require("../utils/platform");
var _isScrollable = require("../utils/isScrollable");
var _runAfterKeyboard = require("../utils/runAfterKeyboard");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _keyboard = require("../utils/keyboard");
const visualViewport = typeof document !== 'undefined' && window.visualViewport;
// The number of active usePreventScroll calls. Used to determine whether to revert back to the original page style/scroll position
let preventScrollCount = 0;
let restore;
function usePreventScroll(options = {}) {
    let { isDisabled } = options;
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (isDisabled) return;
        preventScrollCount++;
        if (preventScrollCount === 1) {
            if ((0, _platform.isIOS)() && (0, _platform.isWebKit)()) restore = preventScrollMobileWebKit();
            else restore = preventScrollStandard();
        }
        return ()=>{
            preventScrollCount--;
            if (preventScrollCount === 0) restore();
        };
    }, [
        isDisabled
    ]);
}
// For most browsers, all we need to do is set `overflow: hidden` on the root element, and
// add some padding to prevent the page from shifting when the scrollbar is hidden.
function preventScrollStandard() {
    let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    return (0, _chain.chain)(scrollbarWidth > 0 && // Use scrollbar-gutter when supported because it also works for fixed positioned elements.
    ('scrollbarGutter' in document.documentElement.style ? (0, _domHelpers.setStyle)(document.documentElement, 'scrollbar-gutter', 'stable') : (0, _domHelpers.setStyle)(document.documentElement, 'padding-right', `${scrollbarWidth}px`)), (0, _domHelpers.setStyle)(document.documentElement, 'overflow', 'hidden'));
}
// Mobile Safari is a whole different beast. Even with overflow: hidden,
// it still scrolls the page in many situations:
//
// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
//    it, so it becomes scrollable.
// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
//    This may cause even fixed position elements to scroll off the screen.
// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
//
// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
//
// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
//    on the window.
// 2. Set `overscroll-behavior: contain` on nested scrollable regions so they do not scroll the page when at
//    the top or bottom. Work around a bug where this does not work when the element does not actually overflow
//    by preventing default in a `touchmove` event. This is best effort: we can't prevent default when pinch
//    zooming or when an element contains text selection, which may allow scrolling in some cases.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
function preventScrollMobileWebKit() {
    // Set overflow hidden so scrollIntoViewport() (useSelectableCollection) sees isScrollPrevented and
    // scrolls only scroll parents instead of calling native scrollIntoView() which moves the window.
    let restoreOverflow = (0, _domHelpers.setStyle)(document.documentElement, 'overflow', 'hidden');
    let scrollable;
    let allowTouchMove = false;
    let onTouchStart = (e)=>{
        // Store the nearest scrollable parent element from the element that the user touched.
        let target = (0, _domfunctions.getEventTarget)(e);
        scrollable = (0, _isScrollable.isScrollable)(target) ? target : (0, _getScrollParent.getScrollParent)(target, true);
        allowTouchMove = false;
        // If the target is selected, don't preventDefault in touchmove to allow user to adjust selection.
        let selection = target.ownerDocument.defaultView.getSelection();
        if (selection && !selection.isCollapsed && selection.containsNode(target, true)) allowTouchMove = true;
        // If this is a range input, allow touch move to allow user to adjust the slider value
        if (e.composedPath().some((el)=>el instanceof HTMLInputElement && el.type === 'range')) allowTouchMove = true;
        // If this is a focused input element with a selected range, allow user to drag the selection handles.
        if ('selectionStart' in target && 'selectionEnd' in target && target.selectionStart < target.selectionEnd && target.ownerDocument.activeElement === target) allowTouchMove = true;
    };
    // Prevent scrolling up when at the top and scrolling down when at the bottom
    // of a nested scrollable area, otherwise mobile Safari will start scrolling
    // the window instead.
    // This must be applied before the touchstart event as of iOS 26, so inject it as a <style> element.
    let style = document.createElement('style');
    let nonce = (0, _getNonce.getNonce)();
    if (nonce) style.nonce = nonce;
    style.textContent = `
@layer {
  * {
    overscroll-behavior: contain;
  }
}`.trim();
    document.head.prepend(style);
    let onTouchMove = (e)=>{
        // Allow pinch-zooming.
        if (e.touches.length === 2 || allowTouchMove) return;
        // Prevent scrolling the window.
        if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
            e.preventDefault();
            return;
        }
        // overscroll-behavior should prevent scroll chaining, but currently does not
        // if the element doesn't actually overflow. https://bugs.webkit.org/show_bug.cgi?id=243452
        // This checks that both the width and height do not overflow, otherwise we might
        // block horizontal scrolling too. In that case, adding `touch-action: pan-x` to
        // the element will prevent vertical page scrolling. We can't add that automatically
        // because it must be set before the touchstart event.
        if (scrollable.scrollHeight === scrollable.clientHeight && scrollable.scrollWidth === scrollable.clientWidth) e.preventDefault();
    };
    let onBlur = (e)=>{
        let target = (0, _domfunctions.getEventTarget)(e);
        let relatedTarget = e.relatedTarget;
        if (relatedTarget && (0, _keyboard.willOpenKeyboard)(relatedTarget)) // Re-focus programmatically to have the override below perform the scroll.
        relatedTarget.focus();
        else if (!relatedTarget) {
            // When tapping the Done button on the keyboard, focus moves to the body.
            // FocusScope will then restore focus back to the input. Later when tapping
            // the same input again, it is already focused, so no blur event will fire,
            // resulting in the flow above never running and Safari's native scrolling occurring.
            // Instead, move focus to the parent focusable element (e.g. the dialog).
            let focusable = target.parentElement?.closest('[tabindex]');
            focusable?.focus({
                preventScroll: true
            });
        }
    };
    // Override programmatic focus to scroll into view without scrolling the whole page.
    let focus = HTMLElement.prototype.focus;
    Reflect.defineProperty(HTMLElement.prototype, 'focus', {
        configurable: true,
        writable: true,
        value: function(opts) {
            // Focus the element without scrolling the page.
            focus.call(this, {
                ...opts,
                preventScroll: true
            });
            if (!opts || !opts.preventScroll) {
                let scroll = ()=>{
                    let activeElement = (0, _domfunctions.getActiveElement)();
                    if (activeElement === this) scrollIntoView(this);
                };
                (0, _runAfterKeyboard.runAfterKeyboard)((isOpen)=>isOpen ? scroll() : (0, _runAfterKeyboard.runAfterKeyboardTransition)(()=>scroll()));
            }
        }
    });
    let removeEvents = (0, _chain.chain)((0, _domHelpers.addEvent)(document, 'touchstart', onTouchStart, {
        passive: false,
        capture: true
    }), (0, _domHelpers.addEvent)(document, 'touchmove', onTouchMove, {
        passive: false,
        capture: true
    }), (0, _domHelpers.addEvent)(document, 'blur', onBlur, true));
    return ()=>{
        restoreOverflow();
        removeEvents();
        style.remove();
        Reflect.defineProperty(HTMLElement.prototype, 'focus', {
            configurable: true,
            writable: true,
            value: focus
        });
    };
}
function scrollIntoView(target) {
    let root = document.scrollingElement || document.documentElement;
    let nextTarget = target;
    while(nextTarget && nextTarget !== root && nextTarget.isConnected){
        // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
        let scrollable = (0, _getScrollParent.getScrollParent)(nextTarget);
        if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== nextTarget) {
            let scrollableRect = scrollable.getBoundingClientRect();
            let targetRect = nextTarget.getBoundingClientRect();
            if (targetRect.top < scrollableRect.top || targetRect.bottom > scrollableRect.top + nextTarget.clientHeight) {
                let bottom = scrollableRect.bottom;
                if (visualViewport) bottom = Math.min(bottom, visualViewport.offsetTop + visualViewport.height);
                // Center within the viewport.
                let adjustment = targetRect.top - scrollableRect.top - ((bottom - scrollableRect.top) / 2 - targetRect.height / 2);
                scrollable.scrollTo({
                    // Clamp to the valid range to prevent over-scrolling.
                    top: Math.max(0, Math.min(scrollable.scrollHeight - scrollable.clientHeight, scrollable.scrollTop + adjustment)),
                    behavior: 'smooth'
                });
            }
        }
        nextTarget = scrollable.parentElement;
    }
}

},{"../utils/domHelpers":"cYkFa","../utils/chain":"bQmEj","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/getNonce":"gQ9ws","../utils/getScrollParent":"NRzeg","../utils/platform":"eBqgD","../utils/isScrollable":"2UC33","../utils/runAfterKeyboard":"bwB3z","../utils/useLayoutEffect":"h7M6K","../utils/keyboard":"fXhXT","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bwB3z":[function(require,module,exports,__globalThis) {
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
/**
 * Delays a callback execution until a keyboard transition may no longer impact layout.
 * Guarantees an invocation if an expected transition did not finish within 300ms.
 */ parcelHelpers.export(exports, "runAfterKeyboard", ()=>runAfterKeyboard);
/**
 * Delays a callback execution until the on-screen keyboard has finished its transition.
 * Guarantees an invocation if an expected transition did not finish within 600ms.
 */ parcelHelpers.export(exports, "runAfterKeyboardTransition", ()=>runAfterKeyboardTransition);
var _domfunctions = require("./shadowdom/DOMFunctions");
var _keyboard = require("./keyboard");
var _platform = require("./platform");
const WEBKIT_OPEN_DELAY = 200;
const TRANSITION_FRAMETIME = 50;
const TRANSITION_TIMEOUT = 600;
const listenersByWindow = new WeakMap();
const transitionCallbacks = new Set();
const resizeCallbacks = new Set();
function onTransitionFrame(wasOpenKeyboard, signal) {
    let isOpenKeyboard = (0, _keyboard.isKeyboardOpen)();
    // Flush resize callbacks when the keyboard has affected layout or we ran out of time.
    if (wasOpenKeyboard !== isOpenKeyboard || signal.aborted) for (let callback of resizeCallbacks){
        callback(isOpenKeyboard);
        resizeCallbacks.delete(callback);
    }
    // WebKit only fires a single resize event at the start of an opening transition.
    // The animation takes ~200ms, so restart the listener and flush when it runs out of time.
    if (!wasOpenKeyboard && isOpenKeyboard && (0, _platform.isWebKit)() && !signal.aborted) {
        window.clearInterval(listenersByWindow.get(window));
        listenersByWindow.set(window, setupGlobalListeners(WEBKIT_OPEN_DELAY));
        return;
    }
    // Flush transition callbacks when the animation has completed or we ran out of time.
    if (wasOpenKeyboard !== isOpenKeyboard || signal.aborted) for (let callback of transitionCallbacks){
        callback(isOpenKeyboard);
        transitionCallbacks.delete(callback);
    }
    // Cancel the observer when no pending updates remain or we ran out of time.
    if (resizeCallbacks.size + transitionCallbacks.size <= 0 || signal.aborted) {
        window.clearInterval(listenersByWindow.get(window));
        listenersByWindow.delete(window);
    }
}
function setupGlobalListeners(timeout = TRANSITION_TIMEOUT) {
    return window.setInterval(onTransitionFrame, TRANSITION_FRAMETIME, (0, _keyboard.isKeyboardOpen)(), AbortSignal.timeout(timeout));
}
function runAfterKeyboard(fn) {
    // Flush synchronously when keyboard is unsupported. This is default for non-touch devices
    // or devices which did not open their OSK within our opening timeout.
    if (!(0, _keyboard.supportsKeyboard)()) return fn(false), ()=>{};
    // Wait two frames to see if focus lands on an input.
    let frame = window.requestAnimationFrame(()=>{
        frame = window.requestAnimationFrame(()=>{
            let activeElement = document.hasFocus() ? (0, _domfunctions.getActiveElement)() : null;
            let willKeyboardOpen = (0, _keyboard.willOpenKeyboard)(activeElement);
            // If keyboard won't change, call the function immediately.
            if ((0, _keyboard.isKeyboardOpen)() === willKeyboardOpen) return fn(willKeyboardOpen);
            // On close, fire immediately since consumers may assert the ICB.
            if ((0, _keyboard.isKeyboardOpen)() && !willKeyboardOpen) return fn(willKeyboardOpen);
            resizeCallbacks.add(fn);
            if (!listenersByWindow.has(window)) listenersByWindow.set(window, setupGlobalListeners());
        });
    });
    return ()=>{
        window.cancelAnimationFrame(frame);
        resizeCallbacks.delete(fn);
    };
}
function runAfterKeyboardTransition(fn) {
    // Flush synchronously when keyboard is unsupported. This is default for non-touch devices
    // or devices which did not open their OSK within our opening timeout.
    if (!(0, _keyboard.supportsKeyboard)()) return fn(false), ()=>{};
    // Wait two frames to see if focus lands on an input.
    let frame = window.requestAnimationFrame(()=>{
        frame = window.requestAnimationFrame(()=>{
            let activeElement = document.hasFocus() ? (0, _domfunctions.getActiveElement)() : null;
            let willKeyboardOpen = (0, _keyboard.willOpenKeyboard)(activeElement);
            // If keyboard won't transition, fire immediately.
            if ((0, _keyboard.isKeyboardOpen)() === willKeyboardOpen) return fn(willKeyboardOpen);
            transitionCallbacks.add(fn);
            if (!listenersByWindow.has(window)) listenersByWindow.set(window, setupGlobalListeners());
        });
    });
    return ()=>{
        window.cancelAnimationFrame(frame);
        transitionCallbacks.delete(fn);
    };
}

},{"./shadowdom/DOMFunctions":"8kfpz","./keyboard":"fXhXT","./platform":"eBqgD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cMf28":[function(require,module,exports,__globalThis) {
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
/**
 * Provides props for an element that hides its children visually
 * but keeps content visible to assistive technology.
 */ parcelHelpers.export(exports, "useVisuallyHidden", ()=>useVisuallyHidden);
/**
 * VisuallyHidden hides its children visually, while keeping content visible
 * to screen readers.
 */ parcelHelpers.export(exports, "VisuallyHidden", ()=>VisuallyHidden);
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useFocusWithin = require("../interactions/useFocusWithin");
const styles = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px',
    whiteSpace: 'nowrap'
};
function useVisuallyHidden(props = {}) {
    let { style, isFocusable } = props;
    let [isFocused, setFocused] = (0, _react.useState)(false);
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)({
        isDisabled: !isFocusable,
        onFocusWithinChange: (val)=>setFocused(val)
    });
    // If focused, don't hide the element.
    let combinedStyles = (0, _react.useMemo)(()=>{
        if (isFocused) // oxlint-disable-next-line react/react-compiler
        return style;
        else if (style) return {
            ...styles,
            ...style
        };
        else return styles;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isFocused
    ]);
    return {
        visuallyHiddenProps: {
            ...focusWithinProps,
            style: combinedStyles
        }
    };
}
function VisuallyHidden(props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { children, elementType: Element = 'div', isFocusable, style, ...otherProps } = props;
    let { visuallyHiddenProps } = useVisuallyHidden(props);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(Element, (0, _mergeProps.mergeProps)(otherProps, visuallyHiddenProps), children);
}

},{"../utils/mergeProps":"jycxS","react":"gOP0N","../interactions/useFocusWithin":"bkSQo","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cfMV9":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2022 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "TextContext", ()=>TextContext);
parcelHelpers.export(exports, "Text", ()=>Text);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _hidden = require("react-aria/private/collections/Hidden");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const TextContext = /*#__PURE__*/ (0, _react.createContext)({});
const Text = /*#__PURE__*/ (0, _hidden.createHideableComponent)(function Text(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, TextContext);
    let { elementType = 'span', ...domProps } = props;
    let ElementType = (0, _utils.dom)[elementType];
    // @ts-ignore
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ElementType, {
        className: "react-aria-Text",
        ...domProps,
        ref: ref
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/private/collections/Hidden":"iPJX7","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7SEKa":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the accessibility implementation for a separator.
 * A separator is a visual divider between two groups of content,
 * e.g. groups of menu items or sections of a page.
 */ parcelHelpers.export(exports, "useSeparator", ()=>useSeparator);
var _filterDOMProps = require("../utils/filterDOMProps");
function useSeparator(props) {
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    let ariaOrientation;
    // if orientation is horizontal, aria-orientation default is horizontal, so we leave it undefined
    // if it's vertical, we need to specify it
    if (props.orientation === 'vertical') ariaOrientation = 'vertical';
    // hr elements implicitly have role = separator and a horizontal orientation
    if (props.elementType !== 'hr') return {
        separatorProps: {
            ...domProps,
            role: 'separator',
            'aria-orientation': ariaOrientation
        }
    };
    return {
        separatorProps: domProps
    };
}

},{"../utils/filterDOMProps":"h4XHF","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7ofl1":[function(require,module,exports,__globalThis) {
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
/**
 * Provides state management for tree-like components. Handles building a collection
 * of items from props, item expanded state, and manages multiple selection state.
 */ parcelHelpers.export(exports, "useTreeState", ()=>useTreeState);
var _selectionManager = require("../selection/SelectionManager");
var _treeCollection = require("./TreeCollection");
var _react = require("react");
var _useCollection = require("../collections/useCollection");
var _useControlledState = require("../utils/useControlledState");
var _useMultipleSelectionState = require("../selection/useMultipleSelectionState");
function useTreeState(props) {
    let { onExpandedChange } = props;
    let [expandedKeys, setExpandedKeys] = (0, _useControlledState.useControlledState)(props.expandedKeys ? new Set(props.expandedKeys) : undefined, props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : new Set(), onExpandedChange);
    let selectionState = (0, _useMultipleSelectionState.useMultipleSelectionState)(props);
    let disabledKeys = (0, _react.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let tree = (0, _useCollection.useCollection)(props, (0, _react.useCallback)((nodes)=>new (0, _treeCollection.TreeCollection)(nodes, {
            expandedKeys
        }), [
        expandedKeys
    ]), null);
    // Reset focused key if that item is deleted from the collection.
    (0, _react.useEffect)(()=>{
        if (selectionState.focusedKey != null && !tree.getItem(selectionState.focusedKey)) selectionState.setFocusedKey(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        tree,
        selectionState.focusedKey
    ]);
    let onToggle = (key)=>{
        setExpandedKeys(toggleKey(expandedKeys, key));
    };
    return {
        collection: tree,
        expandedKeys,
        disabledKeys,
        toggleKey: onToggle,
        setExpandedKeys,
        selectionManager: new (0, _selectionManager.SelectionManager)(tree, selectionState)
    };
}
function toggleKey(set, key) {
    let res = new Set(set);
    if (res.has(key)) res.delete(key);
    else res.add(key);
    return res;
}

},{"../selection/SelectionManager":"4luyT","./TreeCollection":"dBi9R","react":"gOP0N","../collections/useCollection":"3hcm9","../utils/useControlledState":"8yNBD","../selection/useMultipleSelectionState":"c53PS","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dBi9R":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "TreeCollection", ()=>TreeCollection);
class TreeCollection {
    keyMap = new Map();
    iterable;
    firstKey = null;
    lastKey = null;
    constructor(nodes, { expandedKeys } = {}){
        this.iterable = nodes;
        expandedKeys = expandedKeys || new Set();
        let visit = (node)=>{
            this.keyMap.set(node.key, node);
            if (node.childNodes && (node.type === 'section' || expandedKeys.has(node.key))) for (let child of node.childNodes)visit(child);
        };
        for (let node of nodes)visit(node);
        let last = null;
        let index = 0;
        for (let [key, node] of this.keyMap){
            if (last) {
                last.nextKey = key;
                node.prevKey = last.key;
            } else {
                this.firstKey = key;
                node.prevKey = undefined;
            }
            if (node.type === 'item') node.index = index++;
            last = node;
            // Set nextKey as undefined since this might be the last node
            // If it isn't the last node, last.nextKey will properly set at start of new loop
            last.nextKey = undefined;
        }
        this.lastKey = last?.key ?? null;
    }
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this.keyMap.size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        return node ? node.prevKey ?? null : null;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        return node ? node.nextKey ?? null : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(key) {
        return this.keyMap.get(key) ?? null;
    }
    at(idx) {
        const keys = [
            ...this.getKeys()
        ];
        return this.getItem(keys[idx]);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5KSCU":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2023 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "FieldErrorContext", ()=>FieldErrorContext);
parcelHelpers.export(exports, "FieldError", ()=>FieldError);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _text = require("./Text");
const FieldErrorContext = /*#__PURE__*/ (0, _react.createContext)(null);
const FieldError = /*#__PURE__*/ (0, _react.forwardRef)(function FieldError(props, ref) {
    let validation = (0, _react.useContext)(FieldErrorContext);
    if (!validation?.isInvalid) return null;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(FieldErrorInner, {
        ...props,
        ref: ref
    });
});
const FieldErrorInner = /*#__PURE__*/ (0, _react.forwardRef)((props, ref)=>{
    let validation = (0, _react.useContext)(FieldErrorContext);
    let { elementType, ...restProps } = props;
    let domProps = (0, _filterDOMProps.filterDOMProps)(restProps, {
        global: true
    });
    let renderProps = (0, _utils.useRenderProps)({
        ...restProps,
        defaultClassName: 'react-aria-FieldError',
        defaultChildren: validation.validationErrors.length === 0 ? undefined : validation.validationErrors.join(' '),
        values: validation
    });
    if (renderProps.children == null) return null;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _text.Text), {
        slot: "errorMessage",
        elementType: elementType,
        ...domProps,
        ...renderProps,
        ref: ref
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/filterDOMProps":"h4XHF","react":"gOP0N","./Text":"cfMV9","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aEFv9":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormContext", ()=>FormContext);
parcelHelpers.export(exports, "Form", ()=>Form);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _useFormValidationState = require("react-stately/private/form/useFormValidationState");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const FormContext = /*#__PURE__*/ (0, _react.createContext)(null);
const Form = /*#__PURE__*/ (0, _react.forwardRef)(function Form(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, FormContext);
    let { validationErrors, validationBehavior = 'native', children, className, ...domProps } = props;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).form, {
        noValidate: validationBehavior !== 'native',
        ...domProps,
        ref: ref,
        className: className || 'react-aria-Form',
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(FormContext.Provider, {
            value: {
                ...props,
                validationBehavior
            },
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _useFormValidationState.FormValidationContext).Provider, {
                value: validationErrors ?? {},
                children: children
            })
        })
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-stately/private/form/useFormValidationState":"491YW","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3g793":[function(require,module,exports,__globalThis) {
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
/**
 * Provides state management for list-like components. Handles building a collection
 * of items from props, and manages multiple selection state.
 */ parcelHelpers.export(exports, "useListState", ()=>useListState);
/**
 * Filters a collection using the provided filter function and returns a new ListState.
 */ parcelHelpers.export(exports, "UNSTABLE_useFilteredListState", ()=>UNSTABLE_useFilteredListState);
var _listCollection = require("./ListCollection");
var _useMultipleSelectionState = require("../selection/useMultipleSelectionState");
var _selectionManager = require("../selection/SelectionManager");
var _react = require("react");
var _useCollection = require("../collections/useCollection");
function useListState(props) {
    let { filter, layoutDelegate } = props;
    let selectionState = (0, _useMultipleSelectionState.useMultipleSelectionState)(props);
    let disabledKeys = (0, _react.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let factory = (0, _react.useCallback)((nodes)=>filter ? new (0, _listCollection.ListCollection)(filter(nodes)) : new (0, _listCollection.ListCollection)(nodes), [
        filter
    ]);
    let context = (0, _react.useMemo)(()=>({
            suppressTextValueWarning: props.suppressTextValueWarning
        }), [
        props.suppressTextValueWarning
    ]);
    let collection = (0, _useCollection.useCollection)(props, factory, context);
    let selectionManager = (0, _react.useMemo)(()=>new (0, _selectionManager.SelectionManager)(collection, selectionState, {
            layoutDelegate
        }), [
        collection,
        selectionState,
        layoutDelegate
    ]);
    useFocusedKeyReset(collection, selectionManager);
    return {
        collection,
        disabledKeys,
        selectionManager
    };
}
function UNSTABLE_useFilteredListState(state, filterFn) {
    let collection = (0, _react.useMemo)(()=>filterFn ? state.collection.filter(filterFn) : state.collection, [
        state.collection,
        filterFn
    ]);
    let selectionManager = state.selectionManager.withCollection(collection);
    useFocusedKeyReset(collection, selectionManager);
    return {
        collection,
        selectionManager,
        disabledKeys: state.disabledKeys
    };
}
function useFocusedKeyReset(collection, selectionManager) {
    // Reset focused key if that item is deleted from the collection.
    const cachedCollection = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        if (selectionManager.focusedKey != null && !collection.getItem(selectionManager.focusedKey) && cachedCollection.current) {
            // Walk forward in the old collection to find the next key that still exists in the new collection.
            let key = cachedCollection.current.getKeyAfter(selectionManager.focusedKey);
            let nextFocusedKey = null;
            while(key != null){
                let node = collection.getItem(key);
                if (node && node.type === 'item' && !selectionManager.isDisabled(key)) {
                    nextFocusedKey = key;
                    break;
                }
                key = cachedCollection.current.getKeyAfter(key);
            }
            // If no such key exists, walk backward.
            if (nextFocusedKey == null) {
                key = cachedCollection.current.getKeyBefore(selectionManager.focusedKey);
                while(key != null){
                    let node = collection.getItem(key);
                    if (node && node.type === 'item' && !selectionManager.isDisabled(key)) {
                        nextFocusedKey = key;
                        break;
                    }
                    key = cachedCollection.current.getKeyBefore(key);
                }
            }
            selectionManager.setFocusedKey(nextFocusedKey);
        }
        cachedCollection.current = collection;
    }, [
        collection,
        selectionManager
    ]);
}

},{"./ListCollection":"11pGO","../selection/useMultipleSelectionState":"c53PS","../selection/SelectionManager":"4luyT","react":"gOP0N","../collections/useCollection":"3hcm9","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"11pGO":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "ListCollection", ()=>ListCollection);
class ListCollection {
    keyMap = new Map();
    iterable;
    firstKey = null;
    lastKey = null;
    _size;
    constructor(nodes){
        this.iterable = nodes;
        let visit = (node)=>{
            this.keyMap.set(node.key, node);
            if (node.childNodes && node.type === 'section') for (let child of node.childNodes)visit(child);
        };
        for (let node of nodes)visit(node);
        let last = null;
        let index = 0;
        let size = 0;
        for (let [key, node] of this.keyMap){
            if (last) {
                last.nextKey = key;
                node.prevKey = last.key;
            } else {
                this.firstKey = key;
                node.prevKey = undefined;
            }
            if (node.type === 'item') node.index = index++;
            // Only count sections and items when determining size so that
            // loaders and separators in RAC/S2 don't influence the emptyState determination
            if (node.type === 'section' || node.type === 'item') size++;
            last = node;
            // Set nextKey as undefined since this might be the last node
            // If it isn't the last node, last.nextKey will properly set at start of new loop
            last.nextKey = undefined;
        }
        this._size = size;
        this.lastKey = last?.key ?? null;
    }
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this._size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        return node ? node.prevKey ?? null : null;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        return node ? node.nextKey ?? null : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(key) {
        return this.keyMap.get(key) ?? null;
    }
    at(idx) {
        const keys = [
            ...this.getKeys()
        ];
        return this.getItem(keys[idx]);
    }
    getChildren(key) {
        let node = this.keyMap.get(key);
        return node?.childNodes || [];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9WaKh":[function(require,module,exports,__globalThis) {
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
// Like useEffect, but only called for updates after the initial render.
parcelHelpers.export(exports, "useUpdateEffect", ()=>useUpdateEffect);
var _react = require("react");
var _useEffectEvent = require("./useEffectEvent");
function useUpdateEffect(cb, dependencies) {
    const isInitialMount = (0, _react.useRef)(true);
    const lastDeps = (0, _react.useRef)(null);
    let cbEvent = (0, _useEffectEvent.useEffectEvent)(cb);
    (0, _react.useEffect)(()=>{
        isInitialMount.current = true;
        return ()=>{
            isInitialMount.current = false;
        };
    }, []);
    (0, _react.useEffect)(()=>{
        let prevDeps = lastDeps.current;
        if (isInitialMount.current) isInitialMount.current = false;
        else if (!prevDeps || dependencies.some((dep, i)=>!Object.is(dep, prevDeps[i]))) cbEvent();
        lastDeps.current = dependencies;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}

},{"react":"gOP0N","./useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kjgFU":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2022 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "CheckboxContext", ()=>CheckboxContext);
parcelHelpers.export(exports, "CheckboxFieldContext", ()=>CheckboxFieldContext);
parcelHelpers.export(exports, "CheckboxGroupContext", ()=>CheckboxGroupContext);
parcelHelpers.export(exports, "CheckboxGroupStateContext", ()=>CheckboxGroupStateContext);
parcelHelpers.export(exports, "CheckboxGroup", ()=>CheckboxGroup);
parcelHelpers.export(exports, "CheckboxField", ()=>CheckboxField);
parcelHelpers.export(exports, "Checkbox", ()=>Checkbox);
parcelHelpers.export(exports, "CheckboxButton", ()=>CheckboxButton);
var _jsxRuntime = require("preact/jsx-runtime");
var _useCheckboxGroup = require("react-aria/useCheckboxGroup");
var _useCheckbox = require("react-aria/useCheckbox");
var _useCheckboxGroupState = require("react-stately/useCheckboxGroupState");
var _utils = require("./utils");
var _fieldError = require("./FieldError");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _form = require("./Form");
var _label = require("./Label");
var _mergeProps = require("react-aria/mergeProps");
var _mergeRefs = require("react-aria/mergeRefs");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _text = require("./Text");
var _useFocusRing = require("react-aria/useFocusRing");
var _useHover = require("react-aria/useHover");
var _useObjectRef = require("react-aria/useObjectRef");
var _useToggleState = require("react-stately/useToggleState");
var _visuallyHidden = require("react-aria/VisuallyHidden");
const CheckboxContext = /*#__PURE__*/ (0, _react.createContext)(null);
const CheckboxFieldContext = /*#__PURE__*/ (0, _react.createContext)(null);
const CheckboxGroupContext = /*#__PURE__*/ (0, _react.createContext)(null);
const CheckboxGroupStateContext = /*#__PURE__*/ (0, _react.createContext)(null);
const CheckboxGroup = /*#__PURE__*/ (0, _react.forwardRef)(function CheckboxGroup(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, CheckboxGroupContext);
    let { validationBehavior: formValidationBehavior } = (0, _utils.useSlottedContext)((0, _form.FormContext)) || {};
    let validationBehavior = props.validationBehavior ?? formValidationBehavior ?? 'native';
    let state = (0, _useCheckboxGroupState.useCheckboxGroupState)({
        ...props,
        validationBehavior
    });
    let [labelRef, label] = (0, _utils.useSlot)(!props['aria-label'] && !props['aria-labelledby']);
    let { groupProps, labelProps, descriptionProps, errorMessageProps, ...validation } = (0, _useCheckboxGroup.useCheckboxGroup)({
        ...props,
        label,
        validationBehavior
    }, state);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: {
            isDisabled: state.isDisabled,
            isReadOnly: state.isReadOnly,
            isRequired: props.isRequired || false,
            isInvalid: state.isInvalid,
            state
        },
        defaultClassName: 'react-aria-CheckboxGroup'
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, groupProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-readonly": state.isReadOnly || undefined,
        "data-required": props.isRequired || undefined,
        "data-invalid": state.isInvalid || undefined,
        "data-disabled": props.isDisabled || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
            values: [
                [
                    CheckboxGroupStateContext,
                    state
                ],
                [
                    (0, _label.LabelContext),
                    {
                        ...labelProps,
                        ref: labelRef,
                        elementType: 'span'
                    }
                ],
                [
                    (0, _text.TextContext),
                    {
                        slots: {
                            description: descriptionProps,
                            errorMessage: errorMessageProps
                        }
                    }
                ],
                [
                    (0, _fieldError.FieldErrorContext),
                    validation
                ]
            ],
            children: renderProps.children
        })
    });
});
const InternalCheckboxContext = /*#__PURE__*/ (0, _react.createContext)(null);
const CheckboxField = /*#__PURE__*/ (0, _react.forwardRef)(function Checkbox(props, ref) {
    let { inputRef: userProvidedInputRef = null, ...otherProps } = props;
    [props, ref] = (0, _utils.useContextProps)(otherProps, ref, CheckboxFieldContext);
    let groupState = (0, _react.useContext)(CheckboxGroupStateContext);
    let [aria, inputRef] = useCheckboxAria(props, userProvidedInputRef);
    let { descriptionProps, errorMessageProps, isSelected, isDisabled, isReadOnly, isInvalid, validationDetails, validationErrors } = aria;
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-CheckboxField',
        values: {
            isSelected,
            isIndeterminate: props.isIndeterminate || false,
            isDisabled,
            isReadOnly,
            isInvalid,
            isRequired: props.isRequired || false
        }
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-selected": isSelected || undefined,
        "data-indeterminate": props.isIndeterminate || undefined,
        "data-disabled": isDisabled || undefined,
        "data-readonly": isReadOnly || undefined,
        "data-invalid": isInvalid || undefined,
        "data-required": props.isRequired || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
            values: [
                [
                    InternalCheckboxContext,
                    {
                        ...aria,
                        inputRef,
                        defaultClassName: 'react-aria-CheckboxButton',
                        isIndeterminate: props.isIndeterminate,
                        isRequired: props.isRequired
                    }
                ],
                [
                    (0, _text.TextContext),
                    {
                        slots: {
                            description: descriptionProps,
                            errorMessage: errorMessageProps
                        }
                    }
                ],
                // In a CheckboxGroup, validation is handled at the group level instead of repeated on each checkbox.
                [
                    (0, _fieldError.FieldErrorContext),
                    groupState ? null : {
                        isInvalid,
                        validationDetails,
                        validationErrors
                    }
                ]
            ],
            children: renderProps.children
        })
    });
});
function useCheckboxAria(props, userProvidedInputRef) {
    let { validationBehavior: formValidationBehavior } = (0, _utils.useSlottedContext)((0, _form.FormContext)) || {};
    let validationBehavior = props.validationBehavior ?? formValidationBehavior ?? 'native';
    let groupState = (0, _react.useContext)(CheckboxGroupStateContext);
    let inputRef = (0, _useObjectRef.useObjectRef)((0, _react.useMemo)(()=>(0, _mergeRefs.mergeRefs)(userProvidedInputRef, props.inputRef !== undefined ? props.inputRef : null), [
        userProvidedInputRef,
        props.inputRef
    ]));
    let checkboxProps = {
        ...(0, _utils.removeDataAttributes)(props),
        children: typeof props.children === 'function' ? true : props.children,
        value: props.value,
        validationBehavior
    };
    let aria = groupState ? (0, _useCheckboxGroup.useCheckboxGroupItem)(checkboxProps, groupState, inputRef) : (0, _useCheckbox.useCheckbox)(checkboxProps, (0, _useToggleState.useToggleState)(props), inputRef);
    return [
        aria,
        inputRef
    ];
}
const Checkbox = /*#__PURE__*/ (0, _react.forwardRef)(function Checkbox(props, ref) {
    let { inputRef: userProvidedInputRef = null, ...otherProps } = props;
    [props, ref] = (0, _utils.useContextProps)(otherProps, ref, CheckboxContext);
    let [aria, inputRef] = useCheckboxAria(props, userProvidedInputRef);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(InternalCheckboxContext.Provider, {
        value: {
            ...aria,
            inputRef,
            defaultClassName: 'react-aria-Checkbox',
            isIndeterminate: props.isIndeterminate,
            isRequired: props.isRequired
        },
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(CheckboxButton, {
            ...props,
            ref: ref
        })
    });
});
const CheckboxButton = /*#__PURE__*/ (0, _react.forwardRef)(function CheckboxButton(props, ref) {
    let { labelProps, inputProps, isSelected, isDisabled, isReadOnly, isPressed, isInvalid, inputRef, defaultClassName, isIndeterminate, isRequired } = (0, _react.useContext)(InternalCheckboxContext);
    let { isFocused, isFocusVisible, focusProps } = (0, _useFocusRing.useFocusRing)();
    let isInteractionDisabled = isDisabled || isReadOnly;
    let { hoverProps, isHovered } = (0, _useHover.useHover)({
        ...props,
        isDisabled: isInteractionDisabled
    });
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultClassName,
        values: {
            isSelected,
            isIndeterminate: isIndeterminate || false,
            isPressed,
            isHovered,
            isFocused,
            isFocusVisible,
            isDisabled,
            isReadOnly,
            isInvalid,
            isRequired: isRequired || false
        }
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _utils.dom).label, {
        ...(0, _mergeProps.mergeProps)(DOMProps, labelProps, hoverProps, renderProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-selected": isSelected || undefined,
        "data-indeterminate": isIndeterminate || undefined,
        "data-pressed": isPressed || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-readonly": isReadOnly || undefined,
        "data-invalid": isInvalid || undefined,
        "data-required": isRequired || undefined,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _visuallyHidden.VisuallyHidden), {
                elementType: "span",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                    ...(0, _mergeProps.mergeProps)(inputProps, focusProps),
                    ref: inputRef
                })
            }),
            renderProps.children
        ]
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/useCheckboxGroup":[["useCheckboxGroup","PtMLN"],["useCheckboxGroupItem","ieFcf"]],"react-aria/useCheckbox":"826Ax","react-stately/useCheckboxGroupState":"6359O","./utils":"jtWJJ","./FieldError":"5KSCU","react-aria/filterDOMProps":"h4XHF","./Form":"aEFv9","./Label":"eI7Ae","react-aria/mergeProps":"jycxS","react-aria/mergeRefs":"jspQh","react":"gOP0N","./Text":"cfMV9","react-aria/useFocusRing":"bP7um","react-aria/useHover":"2yLrj","react-aria/useObjectRef":"ec0NJ","react-stately/useToggleState":"aQP1x","react-aria/VisuallyHidden":"cMf28","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"PtMLN":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the behavior and accessibility implementation for a checkbox group component.
 * Checkbox groups allow users to select multiple items from a list of options.
 *
 * @param props - Props for the checkbox group.
 * @param state - State for the checkbox group, as returned by `useCheckboxGroupState`.
 */ parcelHelpers.export(exports, "useCheckboxGroup", ()=>useCheckboxGroup);
var _utils = require("./utils");
var _filterDOMProps = require("../utils/filterDOMProps");
var _mergeProps = require("../utils/mergeProps");
var _useField = require("../label/useField");
var _useFocusWithin = require("../interactions/useFocusWithin");
function useCheckboxGroup(props, state) {
    let { isDisabled, name, form, validationBehavior = 'aria' } = props;
    let { isInvalid, validationErrors, validationDetails } = state.displayValidation;
    let { labelProps, fieldProps, descriptionProps, errorMessageProps } = (0, _useField.useField)({
        ...props,
        // Checkbox group is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span',
        isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    (0, _utils.checkboxGroupData).set(state, {
        name,
        form,
        descriptionId: descriptionProps.id,
        errorMessageId: errorMessageProps.id,
        validationBehavior
    });
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)({
        onBlurWithin: props.onBlur,
        onFocusWithin: props.onFocus,
        onFocusWithinChange: props.onFocusChange
    });
    return {
        groupProps: (0, _mergeProps.mergeProps)(domProps, {
            role: 'group',
            'aria-disabled': isDisabled || undefined,
            ...fieldProps,
            ...focusWithinProps
        }),
        labelProps,
        descriptionProps,
        errorMessageProps,
        isInvalid,
        validationErrors,
        validationDetails
    };
}

},{"./utils":"38XNN","../utils/filterDOMProps":"h4XHF","../utils/mergeProps":"jycxS","../label/useField":"5Oeu9","../interactions/useFocusWithin":"bkSQo","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"38XNN":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "checkboxGroupData", ()=>checkboxGroupData);
const checkboxGroupData = new WeakMap();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ieFcf":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the behavior and accessibility implementation for a checkbox component contained within
 * a checkbox group. Checkbox groups allow users to select multiple items from a list of options.
 *
 * @param props - Props for the checkbox.
 * @param state - State for the checkbox, as returned by `useCheckboxGroupState`.
 * @param inputRef - A ref for the HTML input element.
 */ parcelHelpers.export(exports, "useCheckboxGroupItem", ()=>useCheckboxGroupItem);
var _useCheckbox = require("./useCheckbox");
var _utils = require("./utils");
var _useFormValidationState = require("react-stately/private/form/useFormValidationState");
var _react = require("react");
var _useToggleState = require("react-stately/useToggleState");
function useCheckboxGroupItem(props, state, inputRef) {
    const toggleState = (0, _useToggleState.useToggleState)({
        isReadOnly: props.isReadOnly || state.isReadOnly,
        isSelected: state.isSelected(props.value),
        defaultSelected: state.defaultValue.includes(props.value),
        onChange (isSelected) {
            if (isSelected) state.addValue(props.value);
            else state.removeValue(props.value);
            if (props.onChange) props.onChange(isSelected);
        }
    });
    let { name, form, descriptionId, errorMessageId, validationBehavior } = (0, _utils.checkboxGroupData).get(state);
    validationBehavior = props.validationBehavior ?? validationBehavior;
    // Local validation for this checkbox.
    let { realtimeValidation } = (0, _useFormValidationState.useFormValidationState)({
        ...props,
        value: toggleState.isSelected,
        // Server validation is handled at the group level.
        name: undefined,
        validationBehavior: 'aria'
    });
    // Update the checkbox group state when realtime validation changes.
    let nativeValidation = (0, _react.useRef)((0, _useFormValidationState.DEFAULT_VALIDATION_RESULT));
    let updateValidation = ()=>{
        state.setInvalid(props.value, realtimeValidation.isInvalid ? realtimeValidation : nativeValidation.current);
    };
    (0, _react.useEffect)(updateValidation);
    // Combine group and checkbox level validation.
    let combinedRealtimeValidation = state.realtimeValidation.isInvalid ? state.realtimeValidation : realtimeValidation;
    let displayValidation = validationBehavior === 'native' ? state.displayValidation : combinedRealtimeValidation;
    let res = (0, _useCheckbox.useCheckbox)({
        ...props,
        isReadOnly: props.isReadOnly || state.isReadOnly,
        isDisabled: props.isDisabled || state.isDisabled,
        name: props.name || name,
        form: props.form || form,
        isRequired: props.isRequired ?? state.isRequired,
        validationBehavior,
        [(0, _useFormValidationState.privateValidationStateProp)]: {
            realtimeValidation: combinedRealtimeValidation,
            displayValidation,
            resetValidation: state.resetValidation,
            commitValidation: state.commitValidation,
            updateValidation (v) {
                nativeValidation.current = v;
                updateValidation();
            }
        }
    }, toggleState, inputRef);
    return {
        ...res,
        inputProps: {
            ...res.inputProps,
            'aria-describedby': [
                res.inputProps['aria-describedby'],
                state.isInvalid ? errorMessageId : null,
                descriptionId
            ].filter(Boolean).join(' ') || undefined
        }
    };
}

},{"./useCheckbox":"826Ax","./utils":"38XNN","react-stately/private/form/useFormValidationState":"491YW","react":"gOP0N","react-stately/useToggleState":"aQP1x","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"826Ax":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the behavior and accessibility implementation for a checkbox component.
 * Checkboxes allow users to select multiple items from a list of individual items, or
 * to mark one individual item as selected.
 *
 * @param props - Props for the checkbox.
 * @param state - State for the checkbox, as returned by `useToggleState`.
 * @param inputRef - A ref for the HTML input element.
 */ parcelHelpers.export(exports, "useCheckbox", ()=>useCheckbox);
var _useToggle = require("../toggle/useToggle");
var _react = require("react");
var _mergeProps = require("../utils/mergeProps");
function useCheckbox(props, state, inputRef) {
    let { labelProps, inputProps, descriptionProps, errorMessageProps, isSelected, isPressed, isDisabled, isReadOnly, isInvalid, validationErrors, validationDetails } = (0, _useToggle.useToggle)(props, state, inputRef);
    let { isIndeterminate } = props;
    (0, _react.useEffect)(()=>{
        // indeterminate is a property, but it can only be set via javascript
        // https://css-tricks.com/indeterminate-checkboxes/
        if (inputRef.current) inputRef.current.indeterminate = !!isIndeterminate;
    });
    return {
        labelProps: (0, _mergeProps.mergeProps)(labelProps, (0, _react.useMemo)(()=>({
                // Prevent label from being focused when mouse down on it.
                // Note, this does not prevent the input from being focused in the `click` event.
                onMouseDown: (e)=>e.preventDefault()
            }), [])),
        inputProps,
        descriptionProps,
        errorMessageProps,
        isSelected,
        isPressed,
        isDisabled,
        isReadOnly,
        isInvalid,
        validationErrors,
        validationDetails
    };
}

},{"../toggle/useToggle":"eUwXJ","react":"gOP0N","../utils/mergeProps":"jycxS","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eUwXJ":[function(require,module,exports,__globalThis) {
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
/**
 * Handles interactions for toggle elements, e.g. Checkboxes and Switches.
 */ parcelHelpers.export(exports, "useToggle", ()=>useToggle);
var _react = require("react");
var _filterDOMProps = require("../utils/filterDOMProps");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _mergeProps = require("../utils/mergeProps");
var _useFormValidationState = require("react-stately/private/form/useFormValidationState");
var _useFocusable = require("../interactions/useFocusable");
var _useFormReset = require("../utils/useFormReset");
var _useFormValidation = require("../form/useFormValidation");
var _usePress = require("../interactions/usePress");
var _useSlot = require("../utils/useSlot");
function useToggle(props, state, ref) {
    let { isDisabled = false, isReadOnly = false, value, name, form, children, isRequired, validationBehavior = 'aria', 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, 'aria-describedby': ariaDescribedby, onPressStart, onPressEnd, onPressChange, onPress, onPressUp, onClick } = props;
    // Create validation state here because it doesn't make sense to add to general useToggleState.
    let validationState = (0, _useFormValidationState.useFormValidationState)({
        ...props,
        value: state.isSelected
    });
    let { isInvalid, validationErrors, validationDetails } = validationState.displayValidation;
    (0, _useFormValidation.useFormValidation)(props, validationState, ref);
    let onChange = (e)=>{
        // since we spread props on label, onChange will end up there as well as in here.
        // so we have to stop propagation at the lowest level that we care about
        e.stopPropagation();
        state.setSelected((0, _domfunctions.getEventTarget)(e).checked);
    };
    let hasChildren = children != null;
    let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;
    !hasChildren && hasAriaLabel;
    // Handle press state for keyboard interactions and cases where labelProps is not used.
    let { pressProps, isPressed } = (0, _usePress.usePress)({
        onPressStart,
        onPressEnd,
        onPressChange,
        onPress,
        onPressUp,
        onClick,
        isDisabled
    });
    // Handle press state on the label.
    let [isLabelPressed, setLabelPressed] = (0, _react.useState)(false);
    let { pressProps: labelProps } = (0, _usePress.usePress)({
        onPressStart (e) {
            // Keyboard interactions are handled directly on the input.
            if (e.pointerType === 'keyboard' || e.pointerType === 'virtual') {
                e.continuePropagation();
                return;
            }
            onPressStart?.(e);
            onPressChange?.(true);
            setLabelPressed(true);
        },
        onPressEnd (e) {
            // Keyboard interactions are handled directly on the input.
            if (e.pointerType === 'keyboard' || e.pointerType === 'virtual') {
                e.continuePropagation();
                return;
            }
            onPressEnd?.(e);
            onPressChange?.(false);
            setLabelPressed(false);
        },
        onPressUp (e) {
            if (e.pointerType === 'keyboard' || e.pointerType === 'virtual') {
                e.continuePropagation();
                return;
            }
            onPressUp?.(e);
        },
        onClick,
        onPress (e) {
            if (e.pointerType === 'keyboard' || e.pointerType === 'virtual') {
                e.continuePropagation();
                return;
            }
            onPress?.(e);
            state.toggle();
            ref.current?.focus();
            // @ts-expect-error
            let { [(0, _useFormValidationState.privateValidationStateProp)]: groupValidationState } = props;
            // oxlint-disable-next-line react/react-compiler
            let { commitValidation } = groupValidationState ? groupValidationState : validationState;
            commitValidation();
        },
        isDisabled: isDisabled || isReadOnly
    });
    let { focusableProps } = (0, _useFocusable.useFocusable)(props, ref);
    let interactions = (0, _mergeProps.mergeProps)(pressProps, focusableProps);
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    (0, _useFormReset.useFormReset)(ref, state.defaultSelected, state.setSelected);
    // Copied from useField because we don't want the label behavior that provides.
    let descriptionProps = (0, _useSlot.useSlotId2)();
    let errorMessageProps = (0, _useSlot.useSlotId2)();
    return {
        labelProps: (0, _mergeProps.mergeProps)(labelProps, {
            onClick: (e)=>e.preventDefault()
        }),
        inputProps: (0, _mergeProps.mergeProps)(domProps, {
            checked: state.isSelected,
            'aria-required': isRequired && validationBehavior === 'aria' || undefined,
            required: isRequired && validationBehavior === 'native',
            'aria-invalid': isInvalid || props.validationState === 'invalid' || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-controls': props['aria-controls'],
            'aria-readonly': isReadOnly || undefined,
            'aria-describedby': [
                descriptionProps.id,
                errorMessageProps.id,
                ariaDescribedby
            ].filter(Boolean).join(' ') || undefined,
            onChange,
            disabled: isDisabled,
            ...value == null ? {} : {
                value
            },
            name,
            form,
            type: 'checkbox',
            ...interactions
        }),
        descriptionProps,
        errorMessageProps,
        isSelected: state.isSelected,
        isPressed: isPressed || isLabelPressed,
        isDisabled,
        isReadOnly,
        isInvalid: isInvalid || props.validationState === 'invalid',
        validationErrors,
        validationDetails
    };
}

},{"react":"gOP0N","../utils/filterDOMProps":"h4XHF","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/mergeProps":"jycxS","react-stately/private/form/useFormValidationState":"491YW","../interactions/useFocusable":"6IFKj","../utils/useFormReset":"iDQvZ","../form/useFormValidation":"kdUj8","../interactions/usePress":"3S2KR","../utils/useSlot":"jo4XI","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jo4XI":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2026 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "useSlot", ()=>useSlot);
parcelHelpers.export(exports, "useSlotId2", ()=>useSlotId2);
var _react = require("react");
var _useId = require("./useId");
var _useLayoutEffect = require("./useLayoutEffect");
function useSlot(initialState = true) {
    // Initial state is typically based on the parent having an aria-label or aria-labelledby.
    // If it does, this value should be false so that we don't update the state and cause a rerender when we go through the layoutEffect
    let [hasSlot, setHasSlot] = (0, _react.useState)(initialState);
    let hasRun = (0, _react.useRef)(false);
    // A callback ref which will run when the slotted element mounts.
    // This should happen before the useLayoutEffect below.
    let ref = (0, _react.useCallback)((el)=>{
        hasRun.current = true;
        setHasSlot(!!el);
    }, []);
    // If the callback hasn't been called, then reset to false.
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (!hasRun.current) setHasSlot(false);
    }, []);
    return [
        ref,
        hasSlot
    ];
}
function useSlotId2(initialState = true) {
    let id = (0, _useId.useId)();
    let [ref, hasSlot] = useSlot(initialState);
    return {
        id: hasSlot ? id : undefined,
        ref
    };
}

},{"react":"gOP0N","./useId":"fQAcb","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aQP1x":[function(require,module,exports,__globalThis) {
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
/**
 * Provides state management for toggle components like checkboxes and switches.
 */ parcelHelpers.export(exports, "useToggleState", ()=>useToggleState);
var _react = require("react");
var _useControlledState = require("../utils/useControlledState");
function useToggleState(props = {}) {
    let { isReadOnly } = props;
    // have to provide an empty function so useControlledState doesn't throw a fit
    // can't use useControlledState's prop calling because we need the event object from the change
    let [isSelected, setSelected] = (0, _useControlledState.useControlledState)(props.isSelected, props.defaultSelected || false, props.onChange);
    let [initialValue] = (0, _react.useState)(isSelected);
    function updateSelected(value) {
        if (!isReadOnly) setSelected(value);
    }
    function toggleState() {
        if (!isReadOnly) setSelected(!isSelected);
    }
    return {
        isSelected,
        defaultSelected: props.defaultSelected ?? initialValue,
        setSelected: updateSelected,
        toggle: toggleState
    };
}

},{"react":"gOP0N","../utils/useControlledState":"8yNBD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6359O":[function(require,module,exports,__globalThis) {
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
/**
 * Provides state management for a checkbox group component. Provides a name for the group,
 * and manages selection and focus state.
 */ parcelHelpers.export(exports, "useCheckboxGroupState", ()=>useCheckboxGroupState);
var _useFormValidationState = require("../form/useFormValidationState");
var _useControlledState = require("../utils/useControlledState");
var _react = require("react");
function useCheckboxGroupState(props = {}) {
    let [selectedValues, setValue] = (0, _useControlledState.useControlledState)(props.value, props.defaultValue || [], props.onChange);
    let [initialValues] = (0, _react.useState)(selectedValues);
    let isRequired = !!props.isRequired && selectedValues.length === 0;
    let invalidValues = (0, _react.useRef)(new Map());
    let validation = (0, _useFormValidationState.useFormValidationState)({
        ...props,
        value: selectedValues
    });
    let isInvalid = validation.displayValidation.isInvalid;
    const state = {
        ...validation,
        value: selectedValues,
        defaultValue: props.defaultValue ?? initialValues,
        setValue (value) {
            if (props.isReadOnly || props.isDisabled) return;
            setValue(value);
        },
        isDisabled: props.isDisabled || false,
        isReadOnly: props.isReadOnly || false,
        isSelected (value) {
            return selectedValues.includes(value);
        },
        addValue (value) {
            if (props.isReadOnly || props.isDisabled) return;
            setValue((selectedValues)=>{
                if (!selectedValues.includes(value)) return selectedValues.concat(value);
                return selectedValues;
            });
        },
        removeValue (value) {
            if (props.isReadOnly || props.isDisabled) return;
            if (selectedValues.includes(value)) setValue(selectedValues.filter((existingValue)=>existingValue !== value));
        },
        toggleValue (value) {
            if (props.isReadOnly || props.isDisabled) return;
            if (selectedValues.includes(value)) setValue(selectedValues.filter((existingValue)=>existingValue !== value));
            else setValue(selectedValues.concat(value));
        },
        setInvalid (value, v) {
            let s = new Map(invalidValues.current);
            if (v.isInvalid) s.set(value, v);
            else s.delete(value);
            invalidValues.current = s;
            validation.updateValidation((0, _useFormValidationState.mergeValidation)(...s.values()));
        },
        validationState: props.validationState ?? (isInvalid ? 'invalid' : null),
        isInvalid,
        isRequired
    };
    return state;
}

},{"../form/useFormValidationState":"491YW","../utils/useControlledState":"8yNBD","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iFW04":[function(require,module,exports,__globalThis) {
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
/**
 * Handles move interactions across mouse, touch, and keyboard, including dragging with
 * the mouse or touch, and using the arrow keys. Normalizes behavior across browsers and
 * platforms, and ignores emulated mouse events on touch devices.
 */ parcelHelpers.export(exports, "useMove", ()=>useMove);
var _textSelection = require("./textSelection");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _domHelpers = require("../utils/domHelpers");
var _react = require("react");
var _useEffectEvent = require("../utils/useEffectEvent");
var _useGlobalListeners = require("../utils/useGlobalListeners");
function useMove(props) {
    let { onMoveStart, onMove, onMoveEnd } = props;
    let state = (0, _react.useRef)({
        didMove: false,
        lastPosition: null,
        id: null
    });
    let { addGlobalListener, removeGlobalListener } = (0, _useGlobalListeners.useGlobalListeners)();
    let move = (0, _react.useCallback)((originalEvent, pointerType, deltaX, deltaY)=>{
        if (deltaX === 0 && deltaY === 0) return;
        if (!state.current.didMove) {
            state.current.didMove = true;
            onMoveStart?.({
                type: 'movestart',
                pointerType,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
        }
        onMove?.({
            type: 'move',
            pointerType,
            deltaX: deltaX,
            deltaY: deltaY,
            shiftKey: originalEvent.shiftKey,
            metaKey: originalEvent.metaKey,
            ctrlKey: originalEvent.ctrlKey,
            altKey: originalEvent.altKey
        });
    }, [
        onMoveStart,
        onMove,
        state
    ]);
    let moveEvent = (0, _useEffectEvent.useEffectEvent)(move);
    let end = (0, _react.useCallback)((originalEvent, pointerType)=>{
        (0, _textSelection.restoreTextSelection)();
        if (state.current.didMove) onMoveEnd?.({
            type: 'moveend',
            pointerType,
            shiftKey: originalEvent.shiftKey,
            metaKey: originalEvent.metaKey,
            ctrlKey: originalEvent.ctrlKey,
            altKey: originalEvent.altKey
        });
    }, [
        onMoveEnd,
        state
    ]);
    let endEvent = (0, _useEffectEvent.useEffectEvent)(end);
    let moveProps = (0, _react.useMemo)(()=>{
        let moveProps = {};
        let start = ()=>{
            (0, _textSelection.disableTextSelection)();
            state.current.didMove = false;
        };
        typeof PointerEvent;
        var e, e1;
        {
            let onPointerMove = (e)=>{
                if (e.pointerId === state.current.id) {
                    let pointerType = e.pointerType || 'mouse';
                    // Problems with PointerEvent#movementX/movementY:
                    // 1. it is always 0 on macOS Safari.
                    // 2. On Chrome Android, it's scaled by devicePixelRatio, but not on Chrome macOS
                    moveEvent(e, pointerType, e.pageX - (state.current.lastPosition?.pageX ?? 0), e.pageY - (state.current.lastPosition?.pageY ?? 0));
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.current.id) {
                    let pointerType = e.pointerType || 'mouse';
                    endEvent(e, pointerType);
                    state.current.id = null;
                    let ownerWindow = (0, _domHelpers.getOwnerWindow)((0, _domfunctions.getEventTarget)(e));
                    removeGlobalListener(ownerWindow, 'pointermove', onPointerMove, false);
                    removeGlobalListener(ownerWindow, 'pointerup', onPointerUp, false);
                    removeGlobalListener(ownerWindow, 'pointercancel', onPointerUp, false);
                }
            };
            moveProps.onPointerDown = (e)=>{
                if (e.button === 0 && state.current.id == null) {
                    start();
                    e.stopPropagation();
                    e.preventDefault();
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                    state.current.id = e.pointerId;
                    let ownerWindow = (0, _domHelpers.getOwnerWindow)((0, _domfunctions.getEventTarget)(e));
                    addGlobalListener(ownerWindow, 'pointermove', onPointerMove, false);
                    addGlobalListener(ownerWindow, 'pointerup', onPointerUp, false);
                    addGlobalListener(ownerWindow, 'pointercancel', onPointerUp, false);
                }
            };
        }
        let triggerKeyboardMove = (e, deltaX, deltaY)=>{
            start();
            moveEvent(e, 'keyboard', deltaX, deltaY);
            endEvent(e, 'keyboard');
        };
        moveProps.onKeyDown = (e)=>{
            switch(e.key){
                case 'Left':
                case 'ArrowLeft':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, -1, 0);
                    break;
                case 'Right':
                case 'ArrowRight':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 1, 0);
                    break;
                case 'Up':
                case 'ArrowUp':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 0, -1);
                    break;
                case 'Down':
                case 'ArrowDown':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 0, 1);
                    break;
            }
        };
        return moveProps;
    }, [
        addGlobalListener,
        removeGlobalListener,
        state
    ]);
    return {
        moveProps
    };
}

},{"./textSelection":"3IKpx","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","react":"gOP0N","../utils/useEffectEvent":"grBNM","../utils/useGlobalListeners":"jsdt1","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"tzURz":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the behavior and accessibility implementation for a search field.
 *
 * @param props - Props for the search field.
 * @param state - State for the search field, as returned by `useSearchFieldState`.
 * @param inputRef - A ref to the input element.
 */ parcelHelpers.export(exports, "useSearchField", ()=>useSearchField);
var _useTextField = require("../textfield/useTextField");
var _indexJs = require("../../intl/searchfield/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
// @ts-ignore
var _mergeProps = require("../utils/mergeProps");
var _useKeyboard = require("../interactions/useKeyboard");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
function useSearchField(props, state, inputRef) {
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/searchfield');
    let { isDisabled, isReadOnly, onSubmit, onClear, type = 'search' } = props;
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        isDisabled: isDisabled || isReadOnly,
        shortcuts: {
            Enter: ()=>{
                if (onSubmit) {
                    // for backward compatibility;
                    // otherwise, "Enter" on an input would trigger a form submit, the default browser behavior
                    onSubmit(state.value);
                    return;
                }
                return false;
            },
            Escape: ()=>{
                // Also check the inputRef value for the case where the value was set directly on the input element instead of going through
                // the hook
                if (state.value === '' && (!inputRef.current || inputRef.current.value === '')) return false;
                state.setValue('');
                onClear?.();
            }
        }
    });
    let onClearButtonClick = ()=>{
        state.setValue('');
        if (onClear) onClear();
    };
    let onPressStart = ()=>{
        // this is in PressStart for mobile so that touching the clear button doesn't remove focus from
        // the input and close the keyboard
        inputRef.current?.focus();
    };
    let { labelProps, inputProps, descriptionProps, errorMessageProps, ...validation } = (0, _useTextField.useTextField)({
        ...props,
        value: state.value,
        onChange: state.setValue,
        onKeyDown: props.onKeyDown,
        onKeyUp: props.onKeyUp,
        type
    }, inputRef);
    return {
        labelProps,
        // An edge case, in Autocomplete, if the keyboard hanlders are not in this order, then
        // Escape runs autocomplete/listbox first, then the search-field shortcut returns false and
        // continues propagation, leaking Escape to a parent Dialog.
        inputProps: (0, _mergeProps.mergeProps)(keyboardProps, {
            ...inputProps,
            // already handled by useSearchFieldState
            defaultValue: undefined
        }),
        clearButtonProps: {
            'aria-label': stringFormatter.format('Clear search'),
            excludeFromTabOrder: true,
            preventFocusOnPress: true,
            isDisabled: isDisabled || isReadOnly,
            onPress: onClearButtonClick,
            onPressStart
        },
        descriptionProps,
        errorMessageProps,
        ...validation
    };
}

},{"../textfield/useTextField":"kJGKw","../../intl/searchfield/index.js":"8PJEw","../utils/mergeProps":"jycxS","../interactions/useKeyboard":"aHm7i","../i18n/useLocalizedStringFormatter":"8lll3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8PJEw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arAEJs = require("./ar-AE.js");
var _arAEJsDefault = parcelHelpers.interopDefault(_arAEJs);
var _bgBGJs = require("./bg-BG.js");
var _bgBGJsDefault = parcelHelpers.interopDefault(_bgBGJs);
var _csCZJs = require("./cs-CZ.js");
var _csCZJsDefault = parcelHelpers.interopDefault(_csCZJs);
var _daDKJs = require("./da-DK.js");
var _daDKJsDefault = parcelHelpers.interopDefault(_daDKJs);
var _deDEJs = require("./de-DE.js");
var _deDEJsDefault = parcelHelpers.interopDefault(_deDEJs);
var _elGRJs = require("./el-GR.js");
var _elGRJsDefault = parcelHelpers.interopDefault(_elGRJs);
var _enUSJs = require("./en-US.js");
var _enUSJsDefault = parcelHelpers.interopDefault(_enUSJs);
var _esESJs = require("./es-ES.js");
var _esESJsDefault = parcelHelpers.interopDefault(_esESJs);
var _etEEJs = require("./et-EE.js");
var _etEEJsDefault = parcelHelpers.interopDefault(_etEEJs);
var _fiFIJs = require("./fi-FI.js");
var _fiFIJsDefault = parcelHelpers.interopDefault(_fiFIJs);
var _frFRJs = require("./fr-FR.js");
var _frFRJsDefault = parcelHelpers.interopDefault(_frFRJs);
var _heILJs = require("./he-IL.js");
var _heILJsDefault = parcelHelpers.interopDefault(_heILJs);
var _hrHRJs = require("./hr-HR.js");
var _hrHRJsDefault = parcelHelpers.interopDefault(_hrHRJs);
var _huHUJs = require("./hu-HU.js");
var _huHUJsDefault = parcelHelpers.interopDefault(_huHUJs);
var _itITJs = require("./it-IT.js");
var _itITJsDefault = parcelHelpers.interopDefault(_itITJs);
var _jaJPJs = require("./ja-JP.js");
var _jaJPJsDefault = parcelHelpers.interopDefault(_jaJPJs);
var _koKRJs = require("./ko-KR.js");
var _koKRJsDefault = parcelHelpers.interopDefault(_koKRJs);
var _ltLTJs = require("./lt-LT.js");
var _ltLTJsDefault = parcelHelpers.interopDefault(_ltLTJs);
var _lvLVJs = require("./lv-LV.js");
var _lvLVJsDefault = parcelHelpers.interopDefault(_lvLVJs);
var _nbNOJs = require("./nb-NO.js");
var _nbNOJsDefault = parcelHelpers.interopDefault(_nbNOJs);
var _nlNLJs = require("./nl-NL.js");
var _nlNLJsDefault = parcelHelpers.interopDefault(_nlNLJs);
var _plPLJs = require("./pl-PL.js");
var _plPLJsDefault = parcelHelpers.interopDefault(_plPLJs);
var _ptBRJs = require("./pt-BR.js");
var _ptBRJsDefault = parcelHelpers.interopDefault(_ptBRJs);
var _ptPTJs = require("./pt-PT.js");
var _ptPTJsDefault = parcelHelpers.interopDefault(_ptPTJs);
var _roROJs = require("./ro-RO.js");
var _roROJsDefault = parcelHelpers.interopDefault(_roROJs);
var _ruRUJs = require("./ru-RU.js");
var _ruRUJsDefault = parcelHelpers.interopDefault(_ruRUJs);
var _skSKJs = require("./sk-SK.js");
var _skSKJsDefault = parcelHelpers.interopDefault(_skSKJs);
var _slSIJs = require("./sl-SI.js");
var _slSIJsDefault = parcelHelpers.interopDefault(_slSIJs);
var _srSPJs = require("./sr-SP.js");
var _srSPJsDefault = parcelHelpers.interopDefault(_srSPJs);
var _svSEJs = require("./sv-SE.js");
var _svSEJsDefault = parcelHelpers.interopDefault(_svSEJs);
var _trTRJs = require("./tr-TR.js");
var _trTRJsDefault = parcelHelpers.interopDefault(_trTRJs);
var _ukUAJs = require("./uk-UA.js");
var _ukUAJsDefault = parcelHelpers.interopDefault(_ukUAJs);
var _zhCNJs = require("./zh-CN.js");
var _zhCNJsDefault = parcelHelpers.interopDefault(_zhCNJs);
var _zhTWJs = require("./zh-TW.js");
var _zhTWJsDefault = parcelHelpers.interopDefault(_zhTWJs);
exports.default = {
    "ar-AE": (0, _arAEJsDefault.default),
    "bg-BG": (0, _bgBGJsDefault.default),
    "cs-CZ": (0, _csCZJsDefault.default),
    "da-DK": (0, _daDKJsDefault.default),
    "de-DE": (0, _deDEJsDefault.default),
    "el-GR": (0, _elGRJsDefault.default),
    "en-US": (0, _enUSJsDefault.default),
    "es-ES": (0, _esESJsDefault.default),
    "et-EE": (0, _etEEJsDefault.default),
    "fi-FI": (0, _fiFIJsDefault.default),
    "fr-FR": (0, _frFRJsDefault.default),
    "he-IL": (0, _heILJsDefault.default),
    "hr-HR": (0, _hrHRJsDefault.default),
    "hu-HU": (0, _huHUJsDefault.default),
    "it-IT": (0, _itITJsDefault.default),
    "ja-JP": (0, _jaJPJsDefault.default),
    "ko-KR": (0, _koKRJsDefault.default),
    "lt-LT": (0, _ltLTJsDefault.default),
    "lv-LV": (0, _lvLVJsDefault.default),
    "nb-NO": (0, _nbNOJsDefault.default),
    "nl-NL": (0, _nlNLJsDefault.default),
    "pl-PL": (0, _plPLJsDefault.default),
    "pt-BR": (0, _ptBRJsDefault.default),
    "pt-PT": (0, _ptPTJsDefault.default),
    "ro-RO": (0, _roROJsDefault.default),
    "ru-RU": (0, _ruRUJsDefault.default),
    "sk-SK": (0, _skSKJsDefault.default),
    "sl-SI": (0, _slSIJsDefault.default),
    "sr-SP": (0, _srSPJsDefault.default),
    "sv-SE": (0, _svSEJsDefault.default),
    "tr-TR": (0, _trTRJsDefault.default),
    "uk-UA": (0, _ukUAJsDefault.default),
    "zh-CN": (0, _zhCNJsDefault.default),
    "zh-TW": (0, _zhTWJsDefault.default)
};

},{"./ar-AE.js":"azduN","./bg-BG.js":"a2lzo","./cs-CZ.js":"63wPA","./da-DK.js":"aHzSL","./de-DE.js":"laSdn","./el-GR.js":"bOujw","./en-US.js":"8RavC","./es-ES.js":"4k6eq","./et-EE.js":"1sgpB","./fi-FI.js":"iKiaz","./fr-FR.js":"82wYm","./he-IL.js":"3NefP","./hr-HR.js":"9JHl4","./hu-HU.js":"2zD7T","./it-IT.js":"5OxAp","./ja-JP.js":"feDEB","./ko-KR.js":"dkAFD","./lt-LT.js":"4uNut","./lv-LV.js":"j1YxR","./nb-NO.js":"bP3DV","./nl-NL.js":"19be9","./pl-PL.js":"9Kk4Q","./pt-BR.js":"9xZlJ","./pt-PT.js":"2v3pR","./ro-RO.js":"9VmPS","./ru-RU.js":"9r53J","./sk-SK.js":"b5rAv","./sl-SI.js":"fMqaG","./sr-SP.js":"eSucg","./sv-SE.js":"irZmn","./tr-TR.js":"iOznD","./uk-UA.js":"honV5","./zh-CN.js":"4wsyo","./zh-TW.js":"bGV4r","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"azduN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `\u{645}\u{633}\u{62D} \u{627}\u{644}\u{628}\u{62D}\u{62B}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"a2lzo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `\u{418}\u{437}\u{447}\u{438}\u{441}\u{442}\u{432}\u{430}\u{43D}\u{435} \u{43D}\u{430} \u{442}\u{44A}\u{440}\u{441}\u{435}\u{43D}\u{435}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"63wPA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Vymazat hled\xe1n\xed`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aHzSL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Ryd s\xf8gning`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"laSdn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Suche zur\xfccksetzen`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bOujw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `\u{391}\u{3C0}\u{3B1}\u{3BB}\u{3BF}\u{3B9}\u{3C6}\u{3AE} \u{3B1}\u{3BD}\u{3B1}\u{3B6}\u{3AE}\u{3C4}\u{3B7}\u{3C3}\u{3B7}\u{3C2}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8RavC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Clear search`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4k6eq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Borrar b\xfasqueda`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1sgpB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `T\xfchjenda otsing`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iKiaz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Tyhjenn\xe4 haku`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"82wYm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Effacer la recherche`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3NefP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `\u{5E0}\u{5E7}\u{5D4} \u{5D7}\u{5D9}\u{5E4}\u{5D5}\u{5E9}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9JHl4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Obri\u{161}i pretragu`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2zD7T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Keres\xe9s t\xf6rl\xe9se`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5OxAp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Cancella ricerca`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"feDEB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `\u{691C}\u{7D22}\u{3092}\u{30AF}\u{30EA}\u{30A2}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dkAFD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `\u{AC80}\u{C0C9} \u{C9C0}\u{C6B0}\u{AE30}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4uNut":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `I\u{161}valyti ie\u{161}k\u{105}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j1YxR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Not\u{12B}r\u{12B}t mekl\u{113}\u{161}anu`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bP3DV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `T\xf8m s\xf8k`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"19be9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Zoekactie wissen`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9Kk4Q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Wyczy\u{15B}\u{107} zawarto\u{15B}\u{107} wyszukiwania`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9xZlJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Limpar pesquisa`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2v3pR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Limpar pesquisa`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9VmPS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `\u{15E}terge\u{163}i c\u{103}utarea`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9r53J":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `\u{41E}\u{447}\u{438}\u{441}\u{442}\u{438}\u{442}\u{44C} \u{43F}\u{43E}\u{438}\u{441}\u{43A}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"b5rAv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Vymaza\u{165} vyh\u{13E}ad\xe1vanie`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fMqaG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Po\u{10D}isti iskanje`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eSucg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Obri\u{161}i pretragu`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"irZmn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Rensa s\xf6kning`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iOznD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `Aramay\u{131} temizle`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"honV5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `\u{41E}\u{447}\u{438}\u{441}\u{442}\u{438}\u{442}\u{438} \u{43F}\u{43E}\u{448}\u{443}\u{43A}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4wsyo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `\u{6E05}\u{9664}\u{641C}\u{7D22}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bGV4r":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "Clear search": `\u{6E05}\u{9664}\u{641C}\u{5C0B}\u{689D}\u{4EF6}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"79XXk":[function(require,module,exports,__globalThis) {
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
/**
 * Provides state management for a search field.
 */ parcelHelpers.export(exports, "useSearchFieldState", ()=>useSearchFieldState);
var _useControlledState = require("../utils/useControlledState");
function useSearchFieldState(props) {
    let [value, setValue] = (0, _useControlledState.useControlledState)(toString(props.value), toString(props.defaultValue) || '', props.onChange);
    return {
        value,
        setValue
    };
}
function toString(val) {
    if (val == null) return;
    return val.toString();
}

},{"../utils/useControlledState":"8yNBD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8dX3q":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2022 Adobe. All rights reserved.
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
/**
 * Provides the behavior and accessibility implementation for a modal component.
 * A modal is an overlay element which blocks interaction with elements outside it.
 */ parcelHelpers.export(exports, "useModalOverlay", ()=>useModalOverlay);
var _ariaHideOutside = require("./ariaHideOutside");
var _useOverlay = require("./useOverlay");
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _overlay = require("./Overlay");
var _usePreventScroll = require("./usePreventScroll");
function useModalOverlay(props, state, ref) {
    let { overlayProps, underlayProps } = (0, _useOverlay.useOverlay)({
        ...props,
        isOpen: state.isOpen,
        onClose: state.close
    }, ref);
    (0, _usePreventScroll.usePreventScroll)({
        isDisabled: !state.isOpen
    });
    (0, _overlay.useOverlayFocusContain)();
    (0, _react.useEffect)(()=>{
        if (state.isOpen && ref.current) return (0, _ariaHideOutside.ariaHideOutside)([
            ref.current
        ], {
            shouldUseInert: true
        });
    }, [
        state.isOpen,
        ref
    ]);
    return {
        modalProps: (0, _mergeProps.mergeProps)(overlayProps),
        underlayProps
    };
}

},{"./ariaHideOutside":"bOGar","./useOverlay":"1LtRR","../utils/mergeProps":"jycxS","react":"gOP0N","./Overlay":"dm7Ko","./usePreventScroll":"9SGDE","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kU0Hn":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useViewportSize", ()=>useViewportSize);
var _domfunctions = require("./shadowdom/DOMFunctions");
var _platform = require("./platform");
var _runAfterKeyboard = require("./runAfterKeyboard");
var _react = require("react");
var _ssrprovider = require("../ssr/SSRProvider");
var _keyboard = require("./keyboard");
let visualViewport = typeof document !== 'undefined' && window.visualViewport;
function useViewportSize() {
    let isSSR = (0, _ssrprovider.useIsSSR)();
    let unmountRef = (0, _react.useRef)(null);
    let [size, setSize] = (0, _react.useState)(()=>isSSR ? {
            width: 0,
            height: 0
        } : getViewportSize());
    (0, _react.useEffect)(()=>{
        let updateSize = (newSize)=>{
            setSize((size)=>{
                if (newSize.width === size.width && newSize.height === size.height) return size;
                return newSize;
            });
        };
        // Use visualViewport api to track available height even on iOS virtual keyboard opening
        let onResize = ()=>{
            // Ignore updates when zoomed.
            if (visualViewport && visualViewport.scale > 1) return;
            updateSize(getViewportSize());
        };
        // When closing the keyboard, WebKit on iOS does not fire the visual viewport resize event until the animation is complete.
        // We can anticipate this and resize early by handling the blur event and using the layout size.
        let onBlur = (e)=>{
            if (visualViewport && visualViewport.scale > 1) return;
            if (!(0, _keyboard.willOpenKeyboard)((0, _domfunctions.getEventTarget)(e))) return;
            unmountRef.current = (0, _runAfterKeyboard.runAfterKeyboard)((isOpen)=>{
                if (isOpen) return;
                updateSize({
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight
                });
            });
        };
        updateSize(getViewportSize());
        if ((0, _platform.isIOS)() && (0, _platform.isWebKit)()) window.addEventListener('blur', onBlur, true);
        if (!visualViewport) window.addEventListener('resize', onResize);
        else visualViewport.addEventListener('resize', onResize);
        return ()=>{
            unmountRef.current?.();
            if ((0, _platform.isIOS)() && (0, _platform.isWebKit)()) window.removeEventListener('blur', onBlur, true);
            if (!visualViewport) window.removeEventListener('resize', onResize);
            else visualViewport.removeEventListener('resize', onResize);
        };
    }, []);
    return size;
}
/**
 * Get the viewport size without the scrollbar.
 */ function getViewportSize() {
    return {
        // Multiply by the visualViewport scale to get the "natural" size, unaffected by pinch zooming.
        width: visualViewport ? // the visual viewport and the document element to ensure that the scrollbar width is always excluded.
        // See: https://github.com/w3c/csswg-drafts/issues/8099
        Math.min(visualViewport.width * visualViewport.scale, document.documentElement.clientWidth) : document.documentElement.clientWidth,
        height: visualViewport ? visualViewport.height * visualViewport.scale : document.documentElement.clientHeight
    };
}

},{"./shadowdom/DOMFunctions":"8kfpz","./platform":"eBqgD","./runAfterKeyboard":"bwB3z","react":"gOP0N","../ssr/SSRProvider":"2cndP","./keyboard":"fXhXT","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gjEnQ":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2022 Adobe. All rights reserved.
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
// This was created for a special empty case of a component that can have child or
// be empty, like Collection/Virtualizer/Table/ListView/etc. When these components
// are empty they can have a message with a tabbable element, which is like them
// being not empty, when it comes to focus and tab order.
/**
 * Returns whether an element has a tabbable child, and updates as children change.
 *
 * @private
 */ parcelHelpers.export(exports, "useHasTabbableChild", ()=>useHasTabbableChild);
var _focusScope = require("./FocusScope");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _react = require("react");
function useHasTabbableChild(ref, options) {
    let isDisabled = options?.isDisabled;
    let [hasTabbableChild, setHasTabbableChild] = (0, _react.useState)(false);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (ref?.current && !isDisabled) {
            let update = ()=>{
                if (ref.current) {
                    let walker = (0, _focusScope.getFocusableTreeWalker)(ref.current, {
                        tabbable: true
                    });
                    setHasTabbableChild(!!walker.nextNode());
                }
            };
            update();
            // Update when new elements are inserted, or the tabIndex/disabled attribute updates.
            let observer = new MutationObserver(update);
            observer.observe(ref.current, {
                subtree: true,
                childList: true,
                attributes: true,
                attributeFilter: [
                    'tabIndex',
                    'disabled'
                ]
            });
            return ()=>{
                // Disconnect mutation observer when a React update occurs on the top-level component
                // so we update synchronously after re-rendering. Otherwise React will emit act warnings
                // in tests since mutation observers fire asynchronously. The mutation observer is necessary
                // so we also update if a child component re-renders and adds/removes something tabbable.
                observer.disconnect();
            };
        }
    });
    return isDisabled ? false : hasTabbableChild;
}

},{"./FocusScope":"E8d3D","../utils/useLayoutEffect":"h7M6K","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7PIkk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Provides the behavior and accessibility implementation for a selection checkbox in a grid.
 *
 * @param props - Props for the selection checkbox.
 * @param state - State of the grid, as returned by `useGridState`.
 */ parcelHelpers.export(exports, "useGridSelectionCheckbox", ()=>useGridSelectionCheckbox);
var _indexJs = require("../../intl/grid/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _useId = require("../utils/useId");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
function useGridSelectionCheckbox(props, state) {
    let { key } = props;
    let manager = state.selectionManager;
    let checkboxId = (0, _useId.useId)();
    let isDisabled = !state.selectionManager.canSelectItem(key);
    let isSelected = state.selectionManager.isSelected(key);
    // Checkbox should always toggle selection, regardless of selectionBehavior.
    let onChange = ()=>manager.toggleSelection(key);
    const stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/grid');
    return {
        checkboxProps: {
            id: checkboxId,
            'aria-label': stringFormatter.format('select'),
            isSelected,
            isDisabled,
            onChange
        }
    };
}

},{"../../intl/grid/index.js":"j9XZN","../utils/useId":"fQAcb","../i18n/useLocalizedStringFormatter":"8lll3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h8EOP":[function(require,module,exports,__globalThis) {
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
/**
 * Manages state for a tooltip trigger. Tracks whether the tooltip is open, and provides
 * methods to toggle this state. Ensures only one tooltip is open at a time and controls
 * the delay for showing a tooltip.
 */ parcelHelpers.export(exports, "useTooltipTriggerState", ()=>useTooltipTriggerState);
var _useOverlayTriggerState = require("../overlays/useOverlayTriggerState");
var _react = require("react");
const TOOLTIP_DELAY = 1500; // this seems to be a 1.5 second delay, check with design
const TOOLTIP_COOLDOWN = 500;
let tooltips = {};
let tooltipId = 0;
let globalWarmedUp = false;
let globalWarmUpTimeout = null;
let globalCooldownTimeout = null;
function useTooltipTriggerState(props = {}) {
    let { delay = TOOLTIP_DELAY, closeDelay = TOOLTIP_COOLDOWN } = props;
    let { isOpen, open, close } = (0, _useOverlayTriggerState.useOverlayTriggerState)(props);
    // Whether the current open/close transition should skip its animation. Set when swapping
    // between tooltips during the global warmup period.
    let [shouldSkipAnimation, setIsInstant] = (0, _react.useState)(false);
    let id = (0, _react.useMemo)(()=>`${++tooltipId}`, []);
    let closeTimeout = (0, _react.useRef)(null);
    let closeCallback = (0, _react.useRef)(close);
    let ensureTooltipEntry = ()=>{
        tooltips[id] = hideTooltip;
    };
    let closeOpenTooltips = ()=>{
        for(let hideTooltipId in tooltips)if (hideTooltipId !== id) {
            // Close other open tooltips instantly (no exit animation), since they are being
            // replaced by this one during the warmup period.
            tooltips[hideTooltipId](true, true);
            delete tooltips[hideTooltipId];
        }
    };
    let showTooltip = (instant)=>{
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        closeTimeout.current = null;
        closeOpenTooltips();
        ensureTooltipEntry();
        setIsInstant(!!instant);
        globalWarmedUp = true;
        open();
        if (globalWarmUpTimeout) {
            clearTimeout(globalWarmUpTimeout);
            globalWarmUpTimeout = null;
        }
        if (globalCooldownTimeout) {
            clearTimeout(globalCooldownTimeout);
            globalCooldownTimeout = null;
        }
    };
    let hideTooltip = (immediate, instant)=>{
        setIsInstant(!!instant);
        if (immediate || closeDelay <= 0) {
            if (closeTimeout.current) clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
            closeCallback.current();
        } else if (!closeTimeout.current) closeTimeout.current = setTimeout(()=>{
            closeTimeout.current = null;
            closeCallback.current();
        }, closeDelay);
        if (globalWarmUpTimeout) {
            clearTimeout(globalWarmUpTimeout);
            globalWarmUpTimeout = null;
        }
        if (globalWarmedUp) {
            if (globalCooldownTimeout) clearTimeout(globalCooldownTimeout);
            globalCooldownTimeout = setTimeout(()=>{
                delete tooltips[id];
                globalCooldownTimeout = null;
                globalWarmedUp = false;
            }, Math.max(TOOLTIP_COOLDOWN, closeDelay));
        }
    };
    let warmupTooltip = ()=>{
        closeOpenTooltips();
        ensureTooltipEntry();
        if (!isOpen && !globalWarmedUp) {
            if (globalWarmUpTimeout) clearTimeout(globalWarmUpTimeout);
            globalWarmUpTimeout = setTimeout(()=>{
                globalWarmUpTimeout = null;
                globalWarmedUp = true;
                // First tooltip in a sequence: animate in.
                showTooltip(false);
            }, delay);
        } else if (!isOpen) // Already warmed up: appear instantly without an animation.
        showTooltip(true);
    };
    (0, _react.useEffect)(()=>{
        closeCallback.current = close;
    }, [
        close
    ]);
    (0, _react.useEffect)(()=>{
        return ()=>{
            if (closeTimeout.current) clearTimeout(closeTimeout.current);
            let tooltip = tooltips[id];
            if (tooltip) delete tooltips[id];
        };
    }, [
        id
    ]);
    return {
        isOpen,
        shouldSkipAnimation,
        open: (immediate)=>{
            if (!immediate && delay > 0 && !closeTimeout.current) warmupTooltip();
            else // Immediate opens (e.g. focus, or delay of 0) appear instantly without an animation
            // only if another tooltip is already warmed up.
            showTooltip(globalWarmedUp);
        },
        close: hideTooltip
    };
}

},{"../overlays/useOverlayTriggerState":"457a8","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6Jxy7":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the accessibility implementation for a Tooltip component.
 */ parcelHelpers.export(exports, "useTooltip", ()=>useTooltip);
var _filterDOMProps = require("../utils/filterDOMProps");
var _mergeProps = require("../utils/mergeProps");
var _useHover = require("../interactions/useHover");
function useTooltip(props, state) {
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    let { hoverProps } = (0, _useHover.useHover)({
        onHoverStart: ()=>state?.open(true),
        onHoverEnd: ()=>state?.close()
    });
    return {
        tooltipProps: (0, _mergeProps.mergeProps)(domProps, hoverProps, {
            role: 'tooltip'
        })
    };
}

},{"../utils/filterDOMProps":"h4XHF","../utils/mergeProps":"jycxS","../interactions/useHover":"2yLrj","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"14AyR":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the behavior and accessibility implementation for a tooltip trigger, e.g. a button
 * that shows a description when focused or hovered.
 */ parcelHelpers.export(exports, "useTooltipTrigger", ()=>useTooltipTrigger);
var _useFocusVisible = require("../interactions/useFocusVisible");
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _useFocusable = require("../interactions/useFocusable");
var _useHover = require("../interactions/useHover");
var _useId = require("../utils/useId");
function useTooltipTrigger(props, state, ref) {
    let { isDisabled, trigger, shouldCloseOnPress = true } = props;
    let tooltipId = (0, _useId.useId)();
    let isHovered = (0, _react.useRef)(false);
    let isFocused = (0, _react.useRef)(false);
    let handleShow = ()=>{
        if (isHovered.current || isFocused.current) state.open(isFocused.current);
    };
    let handleHide = (immediate)=>{
        if (!isHovered.current && !isFocused.current) state.close(immediate);
    };
    (0, _react.useEffect)(()=>{
        let onKeyDown = (e)=>{
            if (ref && ref.current) // Escape after clicking something can give it keyboard focus
            // dismiss tooltip on esc key press
            {
                if (e.key === 'Escape') {
                    e.stopPropagation();
                    state.close(true);
                }
            }
        };
        if (state.isOpen) {
            document.addEventListener('keydown', onKeyDown, true);
            return ()=>{
                document.removeEventListener('keydown', onKeyDown, true);
            };
        }
    }, [
        ref,
        state
    ]);
    let onHoverStart = ()=>{
        if (trigger === 'focus') return;
        // In chrome, if you hover a trigger, then another element obscures it, due to keyboard
        // interactions for example, hover will end. When hover is restored after that element disappears,
        // focus moves on for example, then the tooltip will reopen. We check the modality to know if the hover
        // is the result of moving the mouse.
        if ((0, _useFocusVisible.getInteractionModality)() === 'pointer') isHovered.current = true;
        else isHovered.current = false;
        handleShow();
    };
    let onHoverEnd = ()=>{
        if (trigger === 'focus') return;
        // no matter how the trigger is left, we should close the tooltip
        isFocused.current = false;
        isHovered.current = false;
        handleHide();
    };
    let onPressStart = ()=>{
        // if shouldCloseOnPress is false, we should not close the tooltip
        if (!shouldCloseOnPress) return;
        // no matter how the trigger is pressed, we should close the tooltip
        isFocused.current = false;
        isHovered.current = false;
        handleHide(true);
    };
    let onFocus = ()=>{
        let isVisible = (0, _useFocusVisible.isFocusVisible)();
        if (isVisible) {
            isFocused.current = true;
            handleShow();
        }
    };
    let onBlur = ()=>{
        isFocused.current = false;
        isHovered.current = false;
        handleHide(true);
    };
    let { hoverProps } = (0, _useHover.useHover)({
        isDisabled,
        onHoverStart,
        onHoverEnd
    });
    let { focusableProps } = (0, _useFocusable.useFocusable)({
        isDisabled,
        onFocus,
        onBlur
    }, ref);
    return {
        triggerProps: {
            'aria-describedby': state.isOpen ? tooltipId : undefined,
            // oxlint-disable-next-line react/react-compiler
            ...(0, _mergeProps.mergeProps)(focusableProps, hoverProps, {
                onPointerDown: onPressStart,
                onKeyDown: onPressStart
            }),
            tabIndex: undefined
        },
        tooltipProps: {
            id: tooltipId
        }
    };
}

},{"../interactions/useFocusVisible":"aBfUW","../utils/mergeProps":"jycxS","react":"gOP0N","../interactions/useFocusable":"6IFKj","../interactions/useHover":"2yLrj","../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j4qGX":[function(require,module,exports,__globalThis) {
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
/**
 * TableLayout is a virtualizer Layout implementation that arranges
 * items in rows and columns.
 */ parcelHelpers.export(exports, "TableLayout", ()=>TableLayout);
var _getChildNodes = require("../collections/getChildNodes");
var _layoutInfo = require("../virtualizer/LayoutInfo");
var _listLayout = require("./ListLayout");
var _rect = require("../virtualizer/Rect");
var _size = require("../virtualizer/Size");
var _tableColumnLayout = require("../table/TableColumnLayout");
const DEFAULT_ROW_HEIGHT = 48;
class TableLayout extends (0, _listLayout.ListLayout) {
    lastCollection = null;
    columnWidths = new Map();
    stickyColumnIndices;
    lastPersistedKeys = null;
    persistedIndices = new Map();
    constructor(options){
        super(options);
        this.stickyColumnIndices = [];
    }
    // Backward compatibility for subclassing.
    get collection() {
        return this.virtualizer.collection;
    }
    // Preserve the old rowHeight/other "height" properties since Table doesn't support a "horizontal" orientation
    get rowHeight() {
        return super.rowHeight;
    }
    get estimatedRowHeight() {
        return super.estimatedRowHeight;
    }
    get headingHeight() {
        return super.headingHeight;
    }
    get estimatedHeadingHeight() {
        return super.estimatedHeadingHeight;
    }
    get loaderHeight() {
        return super.loaderHeight;
    }
    columnsChanged(newCollection, oldCollection) {
        return !oldCollection || newCollection.columns !== oldCollection.columns && newCollection.columns.length !== oldCollection.columns.length || newCollection.columns.some((c, i)=>c.key !== oldCollection.columns[i].key || c.props.width !== oldCollection.columns[i].props.width || c.props.minWidth !== oldCollection.columns[i].props.minWidth || c.props.maxWidth !== oldCollection.columns[i].props.maxWidth);
    }
    shouldInvalidateLayoutOptions(newOptions, oldOptions) {
        return newOptions.columnWidths !== oldOptions.columnWidths || super.shouldInvalidateLayoutOptions(newOptions, oldOptions);
    }
    update(invalidationContext) {
        let newCollection = this.virtualizer.collection;
        // If columnWidths were provided via layoutOptions, update those.
        // Otherwise, calculate column widths ourselves.
        if (invalidationContext.layoutOptions?.columnWidths) {
            for (const [key, val] of invalidationContext.layoutOptions.columnWidths)if (this.columnWidths.get(key) !== val) {
                this.columnWidths = invalidationContext.layoutOptions.columnWidths;
                invalidationContext.sizeChanged = true;
                break;
            }
        } else if (invalidationContext.sizeChanged || this.columnsChanged(newCollection, this.lastCollection)) {
            let columnLayout = new (0, _tableColumnLayout.TableColumnLayout)({});
            this.columnWidths = columnLayout.buildColumnWidths(this.virtualizer.size.width - this.padding * 2, newCollection, new Map());
            invalidationContext.sizeChanged = true;
        }
        super.update(invalidationContext);
    }
    buildCollection() {
        this.stickyColumnIndices = [];
        let collection = this.virtualizer.collection;
        for (let column of collection.columns)// The selection cell and any other sticky columns always need to be visible.
        // In addition, row headers need to be in the DOM for accessibility labeling.
        if (this.isStickyColumn(column) || collection.rowHeaderColumnKeys.has(column.key)) this.stickyColumnIndices.push(column.index);
        let layoutNodes = [];
        let y = 0;
        let width = 0;
        if (!collection.head) {
            let header = this.buildTableHeader();
            this.layoutNodes.set(header.layoutInfo.key, header);
            let body = this.buildBody(header.layoutInfo.rect.maxY + this.gap);
            body.layoutInfo.rect.width = Math.max(header.layoutInfo.rect.width, body.layoutInfo.rect.width);
            y = body.layoutInfo.rect.maxY;
            width = body.layoutInfo.rect.width;
            layoutNodes = [
                header,
                body
            ];
        } else {
            for (let node of collection)switch(node.type){
                case 'tableheader':
                    {
                        let header = this.buildTableHeader();
                        y = header.layoutInfo.rect.maxY + this.gap;
                        width = Math.max(width, header.layoutInfo.rect.width);
                        this.layoutNodes.set(header.layoutInfo.key, header);
                        layoutNodes.push(header);
                        break;
                    }
                case 'tablebody':
                case 'tablefooter':
                    {
                        let body = this.buildRowGroup(y, node);
                        y = body.layoutInfo.rect.maxY + this.gap;
                        width = Math.max(width, body.layoutInfo.rect.width);
                        this.layoutNodes.set(body.layoutInfo.key, body);
                        layoutNodes.push(body);
                        break;
                    }
            }
            if (y > 0) y -= this.gap;
            for (let layoutNode of layoutNodes)layoutNode.layoutInfo.rect.width = width;
        }
        this.lastPersistedKeys = null;
        this.contentSize = new (0, _size.Size)(width + this.padding * 2, y + this.padding);
        return layoutNodes;
    }
    buildTableHeader() {
        let collection = this.virtualizer.collection;
        let rect = new (0, _rect.Rect)(this.padding, this.padding, 0, 0);
        let layoutInfo = new (0, _layoutInfo.LayoutInfo)('header', collection.head?.key ?? 'header', rect);
        layoutInfo.isSticky = true;
        layoutInfo.zIndex = 1;
        let y = this.padding;
        let width = 0;
        let children = [];
        for (let headerRow of collection.headerRows){
            let layoutNode = this.buildChild(headerRow, this.padding, y, layoutInfo.key);
            layoutNode.layoutInfo.parentKey = layoutInfo.key;
            y = layoutNode.layoutInfo.rect.maxY;
            width = Math.max(width, layoutNode.layoutInfo.rect.width);
            layoutNode.index = children.length;
            children.push(layoutNode);
        }
        rect.width = width;
        rect.height = y - this.padding;
        return {
            layoutInfo,
            children,
            validRect: layoutInfo.rect,
            node: collection.head
        };
    }
    buildHeaderRow(headerRow, x, y) {
        let rect = new (0, _rect.Rect)(x, y, 0, 0);
        let row = new (0, _layoutInfo.LayoutInfo)('headerrow', headerRow.key, rect);
        let height = 0;
        let columns = [];
        for (let cell of (0, _getChildNodes.getChildNodes)(headerRow, this.virtualizer.collection)){
            let layoutNode = this.buildChild(cell, x, y, row.key);
            layoutNode.layoutInfo.parentKey = row.key;
            x = layoutNode.layoutInfo.rect.maxX;
            height = Math.max(height, layoutNode.layoutInfo.rect.height);
            layoutNode.index = columns.length;
            columns.push(layoutNode);
        }
        for (let [i, layout] of columns.entries())layout.layoutInfo.zIndex = columns.length - i + 1;
        this.setChildHeights(columns, height);
        rect.height = height;
        rect.width = x - rect.x;
        return {
            layoutInfo: row,
            children: columns,
            validRect: rect,
            node: headerRow
        };
    }
    setChildHeights(children, height) {
        for (let child of children)if (child.layoutInfo.rect.height !== height) {
            // Need to copy the layout info before we mutate it.
            child.layoutInfo = child.layoutInfo.copy();
            child.layoutInfo.rect.height = height;
        }
    }
    // used to get the column widths when rendering to the DOM
    getRenderedColumnWidth(node) {
        let collection = this.virtualizer.collection;
        let colSpan = node.colSpan ?? 1;
        let colIndex = node.colIndex ?? node.index;
        let width = 0;
        for(let i = colIndex; i < colIndex + colSpan; i++){
            let column = collection.columns[i];
            if (column?.key != null) width += this.columnWidths.get(column.key) ?? 0;
        }
        return width;
    }
    getEstimatedHeight(node, width, height, estimatedHeight) {
        let isEstimated = false;
        // If no explicit height is available, use an estimated height.
        if (height == null) {
            // If a previous version of this layout info exists, reuse its height.
            // Mark as estimated if the size of the overall collection view changed,
            // or the content of the item changed.
            let previousLayoutNode = this.layoutNodes.get(node.key);
            if (previousLayoutNode) {
                height = previousLayoutNode.layoutInfo.rect.height;
                isEstimated = node !== previousLayoutNode.node || width !== previousLayoutNode.layoutInfo.rect.width || previousLayoutNode.layoutInfo.estimatedSize;
            } else {
                height = estimatedHeight ?? DEFAULT_ROW_HEIGHT;
                isEstimated = true;
            }
        }
        return {
            height,
            isEstimated
        };
    }
    getEstimatedRowHeight() {
        return this.rowHeight ?? this.estimatedRowHeight ?? DEFAULT_ROW_HEIGHT;
    }
    buildColumn(node, x, y) {
        let width = this.getRenderedColumnWidth(node);
        let { height, isEstimated } = this.getEstimatedHeight(node, width, this.headingHeight ?? this.rowHeight, this.estimatedHeadingHeight ?? this.estimatedRowHeight);
        let rect = new (0, _rect.Rect)(x, y, width, height);
        let layoutInfo = new (0, _layoutInfo.LayoutInfo)(node.type, node.key, rect);
        layoutInfo.isSticky = this.isStickyColumn(node);
        layoutInfo.zIndex = layoutInfo.isSticky ? 2 : 1;
        layoutInfo.estimatedSize = isEstimated;
        return {
            layoutInfo,
            children: [],
            validRect: layoutInfo.rect,
            node
        };
    }
    // For subclasses.
    // eslint-disable-next-line
    isStickyColumn(node) {
        return false;
    }
    buildBody(y) {
        let collection = this.virtualizer.collection;
        return this.buildRowGroup(y, collection.body);
    }
    buildRowGroup(y, node) {
        let collection = this.virtualizer.collection;
        let rect = new (0, _rect.Rect)(this.padding, y, 0, 0);
        let layoutInfo = new (0, _layoutInfo.LayoutInfo)('rowgroup', node.key, rect);
        let startY = y;
        let width = 0;
        let children = [];
        let rowHeight = this.getEstimatedRowHeight() + this.gap;
        let childNodes = (0, _getChildNodes.getChildNodes)(node, collection);
        for (let node of childNodes){
            // Skip rows outside the valid rectangle unless they are already cached.
            if (y + rowHeight < this.requestedRect.y && !this.isValid(node, y) || y > this.requestedRect.maxY && node.type !== 'loader') {
                y += rowHeight;
                continue;
            }
            let layoutNode = this.buildChild(node, this.padding, y, layoutInfo.key);
            layoutNode.layoutInfo.parentKey = layoutInfo.key;
            layoutNode.index = children.length;
            y = layoutNode.layoutInfo.rect.maxY + this.gap;
            width = Math.max(width, layoutNode.layoutInfo.rect.width);
            children.push(layoutNode);
        }
        // Make sure that the table body gets a height if empty or performing initial load
        let isEmptyOrLoading = collection?.size === 0;
        if (isEmptyOrLoading) y = this.virtualizer.size.height;
        else y -= this.gap;
        rect.width = width;
        rect.height = y - startY;
        return {
            layoutInfo,
            children,
            validRect: layoutInfo.rect.intersection(this.requestedRect),
            node
        };
    }
    buildLoader(node, x, y) {
        let layoutNode = super.buildLoader(node, x, y);
        let collection = this.virtualizer.collection;
        // use the same approach as buildRow to get the proper width of the loader, otherwise
        // we get a outdated loader width
        layoutNode.layoutInfo.rect.width = this.layoutNodes.get(collection.head?.key ?? 'header').layoutInfo.rect.width;
        layoutNode.validRect = layoutNode.layoutInfo.rect.intersection(this.requestedRect);
        return layoutNode;
    }
    buildNode(node, x, y) {
        switch(node.type){
            case 'headerrow':
                return this.buildHeaderRow(node, x, y);
            case 'item':
                return this.buildRow(node, x, y);
            case 'column':
            case 'placeholder':
                return this.buildColumn(node, x, y);
            case 'cell':
                return this.buildCell(node, x, y);
            case 'loader':
                return this.buildLoader(node, x, y);
            default:
                throw new Error('Unknown node type ' + node.type);
        }
    }
    buildRow(node, x, y) {
        let collection = this.virtualizer.collection;
        let rect = new (0, _rect.Rect)(x, y, 0, 0);
        let layoutInfo = new (0, _layoutInfo.LayoutInfo)('row', node.key, rect);
        let children = [];
        let height = 0;
        for (let child of (0, _getChildNodes.getChildNodes)(node, collection))if (child.type === 'cell') {
            if (x > this.requestedRect.maxX) {
                // Adjust existing cached layoutInfo to ensure that it is out of view.
                // This can happen due to column resizing.
                let layoutNode = this.layoutNodes.get(child.key);
                if (layoutNode) {
                    layoutNode.layoutInfo.rect.x = x;
                    x += layoutNode.layoutInfo.rect.width;
                } else break;
            } else {
                let layoutNode = this.buildChild(child, x, y, layoutInfo.key);
                x = layoutNode.layoutInfo.rect.maxX;
                height = Math.max(height, layoutNode.layoutInfo.rect.height);
                layoutNode.index = children.length;
                children.push(layoutNode);
            }
        }
        this.setChildHeights(children, height);
        rect.width = this.layoutNodes.get(collection.head?.key ?? 'header').layoutInfo.rect.width;
        rect.height = height;
        return {
            layoutInfo,
            children,
            validRect: rect.intersection(this.requestedRect),
            node
        };
    }
    buildCell(node, x, y) {
        let width = this.getRenderedColumnWidth(node);
        let { height, isEstimated } = this.getEstimatedHeight(node, width, this.rowHeight, this.estimatedRowHeight);
        let rect = new (0, _rect.Rect)(x, y, width, height);
        let layoutInfo = new (0, _layoutInfo.LayoutInfo)(node.type, node.key, rect);
        layoutInfo.isSticky = this.isStickyColumn(node);
        layoutInfo.zIndex = layoutInfo.isSticky ? 2 : 1;
        layoutInfo.estimatedSize = isEstimated;
        return {
            layoutInfo,
            children: [],
            validRect: rect,
            node
        };
    }
    getVisibleLayoutInfos(rect) {
        // Adjust rect to keep number of visible rows consistent.
        // (only if height > 1 for getDropTargetFromPoint)
        if (rect.height > 1) {
            let rowHeight = this.getEstimatedRowHeight();
            rect.y = Math.floor(rect.y / rowHeight) * rowHeight;
            rect.height = Math.ceil(rect.height / rowHeight) * rowHeight;
        }
        // If layout hasn't yet been done for the requested rect, union the
        // new rect with the existing valid rect, and recompute.
        this.layoutIfNeeded(rect);
        let res = [];
        this.buildPersistedIndices();
        for (let node of this.rootNodes){
            res.push(node.layoutInfo);
            this.addVisibleLayoutInfos(res, node, rect);
        }
        return res;
    }
    addVisibleLayoutInfos(res, node, rect) {
        if (!node.children || node.children.length === 0) return;
        switch(node.layoutInfo.type){
            case 'header':
                for (let child of node.children){
                    res.push(child.layoutInfo);
                    this.addVisibleLayoutInfos(res, child, rect);
                }
                break;
            case 'rowgroup':
                {
                    let firstVisibleRow = this.binarySearch(node.children, rect.topLeft, 'y');
                    let lastVisibleRow = this.binarySearch(node.children, rect.bottomRight, 'y');
                    // Add persisted rows before the visible rows.
                    let persistedRowIndices = this.persistedIndices.get(node.layoutInfo.key);
                    let persistIndex = 0;
                    while(persistedRowIndices && persistIndex < persistedRowIndices.length && persistedRowIndices[persistIndex] < firstVisibleRow){
                        let idx = persistedRowIndices[persistIndex];
                        if (idx < node.children.length) {
                            res.push(node.children[idx].layoutInfo);
                            this.addVisibleLayoutInfos(res, node.children[idx], rect);
                        }
                        persistIndex++;
                    }
                    for(let i = firstVisibleRow; i <= lastVisibleRow; i++){
                        // Skip persisted rows that overlap with visible cells.
                        while(persistedRowIndices && persistIndex < persistedRowIndices.length && persistedRowIndices[persistIndex] < i)persistIndex++;
                        res.push(node.children[i].layoutInfo);
                        this.addVisibleLayoutInfos(res, node.children[i], rect);
                    }
                    // Add persisted rows after the visible rows.
                    while(persistedRowIndices && persistIndex < persistedRowIndices.length){
                        let idx = persistedRowIndices[persistIndex++];
                        if (idx < node.children.length) {
                            res.push(node.children[idx].layoutInfo);
                            this.addVisibleLayoutInfos(res, node.children[idx], rect);
                        }
                    }
                    // Always include loading sentinel even when virtualized, we assume it is always the last child for now
                    let lastRow = node.children.at(-1);
                    if (lastRow?.layoutInfo.type === 'loader') res.push(lastRow.layoutInfo);
                    break;
                }
            case 'headerrow':
            case 'row':
                {
                    let firstVisibleCell = this.binarySearch(node.children, rect.topLeft, 'x');
                    let lastVisibleCell = this.binarySearch(node.children, rect.topRight, 'x');
                    let stickyIndex = 0;
                    // Add persisted/sticky cells before the visible cells.
                    let persistedCellIndices = this.persistedIndices.get(node.layoutInfo.key) || this.stickyColumnIndices;
                    while(stickyIndex < persistedCellIndices.length && persistedCellIndices[stickyIndex] < firstVisibleCell){
                        let idx = persistedCellIndices[stickyIndex];
                        if (idx < node.children.length) res.push(node.children[idx].layoutInfo);
                        stickyIndex++;
                    }
                    for(let i = firstVisibleCell; i <= lastVisibleCell; i++){
                        // Skip sticky cells that overlap with visible cells.
                        while(stickyIndex < persistedCellIndices.length && persistedCellIndices[stickyIndex] < i)stickyIndex++;
                        res.push(node.children[i].layoutInfo);
                    }
                    // Add any remaining sticky cells after the visible cells.
                    while(stickyIndex < persistedCellIndices.length){
                        let idx = persistedCellIndices[stickyIndex++];
                        if (idx < node.children.length) res.push(node.children[idx].layoutInfo);
                    }
                    break;
                }
            default:
                throw new Error('Unknown node type ' + node.layoutInfo.type);
        }
    }
    binarySearch(items, point, axis) {
        let low = 0;
        let high = items.length - 1;
        while(low <= high){
            let mid = low + high >> 1;
            let item = items[mid];
            if (axis === 'x' && item.layoutInfo.rect.maxX <= point.x || axis === 'y' && item.layoutInfo.rect.maxY <= point.y) low = mid + 1;
            else if (axis === 'x' && item.layoutInfo.rect.x > point.x || axis === 'y' && item.layoutInfo.rect.y > point.y) high = mid - 1;
            else return mid;
        }
        return Math.max(0, Math.min(items.length - 1, low));
    }
    buildPersistedIndices() {
        if (this.virtualizer.persistedKeys === this.lastPersistedKeys) return;
        this.lastPersistedKeys = this.virtualizer.persistedKeys;
        this.persistedIndices.clear();
        // Build a map of parentKey => indices of children to persist.
        for (let key of this.virtualizer.persistedKeys){
            let layoutInfo = this.layoutNodes.get(key)?.layoutInfo;
            // Walk up ancestors so parents are also persisted if children are.
            while(layoutInfo && layoutInfo.parentKey){
                let collectionNode = this.virtualizer.collection.getItem(layoutInfo.key);
                let indices = this.persistedIndices.get(layoutInfo.parentKey);
                if (!indices) {
                    // stickyColumnIndices are always persisted along with any cells from persistedKeys.
                    indices = collectionNode?.type === 'cell' || collectionNode?.type === 'column' ? [
                        ...this.stickyColumnIndices
                    ] : [];
                    this.persistedIndices.set(layoutInfo.parentKey, indices);
                }
                let index = this.layoutNodes.get(layoutInfo.key)?.index;
                if (index != null && !indices.includes(index)) indices.push(index);
                layoutInfo = this.layoutNodes.get(layoutInfo.parentKey)?.layoutInfo;
            }
        }
        for (let indices of this.persistedIndices.values())indices.sort((a, b)=>a - b);
    }
    getDropTargetFromPoint(x, y, isValidDropTarget) {
        x += this.virtualizer.visibleRect.x;
        y += this.virtualizer.visibleRect.y;
        // Find the closest item within on either side of the point using the gap width.
        let searchRect = new (0, _rect.Rect)(x, Math.max(0, y - this.gap), 1, Math.max(1, this.gap * 2));
        let candidates = this.getVisibleLayoutInfos(searchRect);
        let key = null;
        let minDistance = Infinity;
        for (let candidate of candidates){
            // Ignore items outside the search rect, e.g. persisted keys.
            if (candidate.type !== 'row' || !candidate.rect.intersects(searchRect)) continue;
            let yDist = Math.abs(candidate.rect.y - y);
            let maxYDist = Math.abs(candidate.rect.maxY - y);
            let dist = Math.min(yDist, maxYDist);
            if (dist < minDistance) {
                minDistance = dist;
                key = candidate.key;
            }
        }
        if (key == null || this.virtualizer.collection.size === 0) return {
            type: 'root'
        };
        let layoutInfo = this.getLayoutInfo(key);
        if (!layoutInfo) return null;
        let rect = layoutInfo.rect;
        let target = {
            type: 'item',
            key: layoutInfo.key,
            dropPosition: 'on'
        };
        // If dropping on the item isn't accepted, try the target before or after depending on the y position.
        // Otherwise, if dropping on the item is accepted, still try the before/after positions if within 10px
        // of the top or bottom of the item.
        if (!isValidDropTarget(target)) {
            if (y <= rect.y + rect.height / 2 && isValidDropTarget({
                ...target,
                dropPosition: 'before'
            })) target.dropPosition = 'before';
            else if (isValidDropTarget({
                ...target,
                dropPosition: 'after'
            })) target.dropPosition = 'after';
        } else if (y <= rect.y + 10 && isValidDropTarget({
            ...target,
            dropPosition: 'before'
        })) target.dropPosition = 'before';
        else if (y >= rect.maxY - 10 && isValidDropTarget({
            ...target,
            dropPosition: 'after'
        })) target.dropPosition = 'after';
        return target;
    }
    getDropTargetLayoutInfo(target) {
        let layoutInfo = super.getDropTargetLayoutInfo(target);
        layoutInfo.parentKey = this.virtualizer.collection.getItem(target.key)?.parentKey ?? null;
        return layoutInfo;
    }
}

},{"../collections/getChildNodes":"9KbhA","../virtualizer/LayoutInfo":"81Wbi","./ListLayout":"3ty3M","../virtualizer/Rect":"9sh2q","../virtualizer/Size":"aiymI","../table/TableColumnLayout":"28CKB","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2LWhB":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "ProgressCircle", ()=>ProgressCircle);
var _jsxRuntime = require("preact/jsx-runtime");
var _numberTs = require("../../../../../../../../vendor/react-stately/exports/private/utils/number.ts");
var _classNamesTs = require("../utils/classNames.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _varsCss = require("../../../spectrum-css-temp/components/circleloader/vars.css");
var _varsCssDefault = parcelHelpers.interopDefault(_varsCss);
var _useDOMRefTs = require("../utils/useDOMRef.ts");
var _useProgressBarTs = require("../../../../../../../../vendor/react-aria/exports/useProgressBar.ts");
var _stylePropsTs = require("../utils/styleProps.ts");
const ProgressCircle = /*#__PURE__*/ (0, _reactDefault.default).forwardRef(function ProgressCircle(props, ref) {
    let { value = 0, minValue = 0, maxValue = 100, size = 'M', staticColor, variant, isIndeterminate = false, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, ...otherProps } = props;
    let domRef = (0, _useDOMRefTs.useDOMRef)(ref);
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(otherProps);
    value = (0, _numberTs.clamp)(value, minValue, maxValue);
    let { progressBarProps } = (0, _useProgressBarTs.useProgressBar)({
        ...props,
        value
    });
    let subMask1Style = {};
    let subMask2Style = {};
    if (!isIndeterminate) {
        let range = maxValue - minValue;
        let percentage = range === 0 ? 0 : (value - minValue) / range * 100;
        let angle;
        if (percentage > 0 && percentage <= 50) {
            angle = -180 + percentage / 50 * 180;
            subMask1Style.transform = `rotate(${angle}deg)`;
            subMask2Style.transform = 'rotate(-180deg)';
        } else if (percentage > 50) {
            angle = -180 + (percentage - 50) / 50 * 180;
            subMask1Style.transform = 'rotate(0deg)';
            subMask2Style.transform = `rotate(${angle}deg)`;
        }
    }
    !ariaLabel && ariaLabelledby;
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        ...styleProps,
        ...progressBarProps,
        ref: domRef,
        className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-CircleLoader', {
            'spectrum-CircleLoader--indeterminate': isIndeterminate,
            'spectrum-CircleLoader--small': size === 'S',
            'spectrum-CircleLoader--large': size === 'L',
            'spectrum-CircleLoader--overBackground': variant === 'overBackground',
            'spectrum-CircleLoader--staticWhite': staticColor === 'white',
            'spectrum-CircleLoader--staticBlack': staticColor === 'black'
        }, styleProps.className),
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-CircleLoader-track')
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-CircleLoader-fills'),
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-CircleLoader-fillMask1'),
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                            className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-CircleLoader-fillSubMask1'),
                            "data-testid": "fillSubMask1",
                            style: subMask1Style,
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-CircleLoader-fill')
                            })
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-CircleLoader-fillMask2'),
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                            className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-CircleLoader-fillSubMask2'),
                            "data-testid": "fillSubMask2",
                            style: subMask2Style,
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-CircleLoader-fill')
                            })
                        })
                    })
                ]
            })
        ]
    });
});

},{"preact/jsx-runtime":"b2Fbn","../../../../../../../../vendor/react-stately/exports/private/utils/number.ts":"aEFFO","../utils/classNames.ts":"dsWbb","react":"gOP0N","../../../spectrum-css-temp/components/circleloader/vars.css":"6i1np","../utils/useDOMRef.ts":"ltu01","../../../../../../../../vendor/react-aria/exports/useProgressBar.ts":"fsvpW","../utils/styleProps.ts":"7B0Vi","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6i1np":[function(require,module,exports,__globalThis) {
module.exports["i18nFontFamily"] = `bK8jfq_i18nFontFamily`;
module.exports["spectrum-CircleLoader"] = `bK8jfq_spectrum-CircleLoader`;
module.exports["spectrum-CircleLoader--indeterminate"] = `bK8jfq_spectrum-CircleLoader--indeterminate`;
module.exports["spectrum-CircleLoader--indeterminate-fill-submask-2"] = `bK8jfq_spectrum-CircleLoader--indeterminate-fill-submask-2`;
module.exports["spectrum-CircleLoader--large"] = `bK8jfq_spectrum-CircleLoader--large`;
module.exports["spectrum-CircleLoader--overBackground"] = `bK8jfq_spectrum-CircleLoader--overBackground`;
module.exports["spectrum-CircleLoader--small"] = `bK8jfq_spectrum-CircleLoader--small`;
module.exports["spectrum-CircleLoader--staticBlack"] = `bK8jfq_spectrum-CircleLoader--staticBlack`;
module.exports["spectrum-CircleLoader--staticWhite"] = `bK8jfq_spectrum-CircleLoader--staticWhite`;
module.exports["spectrum-CircleLoader-fill"] = `bK8jfq_spectrum-CircleLoader-fill`;
module.exports["spectrum-CircleLoader-fillMask1"] = `bK8jfq_spectrum-CircleLoader-fillMask1`;
module.exports["spectrum-CircleLoader-fillMask2"] = `bK8jfq_spectrum-CircleLoader-fillMask2`;
module.exports["spectrum-CircleLoader-fillSubMask1"] = `bK8jfq_spectrum-CircleLoader-fillSubMask1`;
module.exports["spectrum-CircleLoader-fillSubMask2"] = `bK8jfq_spectrum-CircleLoader-fillSubMask2`;
module.exports["spectrum-CircleLoader-fills"] = `bK8jfq_spectrum-CircleLoader-fills`;
module.exports["spectrum-CircleLoader-track"] = `bK8jfq_spectrum-CircleLoader-track`;
module.exports["spectrum-FocusRing-ring"] = `bK8jfq_spectrum-FocusRing-ring`;
module.exports["spectrum-FocusRing"] = `bK8jfq_spectrum-FocusRing ${module.exports["spectrum-FocusRing-ring"]}`;
module.exports["spectrum-FocusRing--quiet"] = `bK8jfq_spectrum-FocusRing--quiet`;
module.exports["spectrum-fill-mask-1"] = `bK8jfq_spectrum-fill-mask-1`;
module.exports["spectrum-fill-mask-1"];
module.exports["spectrum-fill-mask-2"] = `bK8jfq_spectrum-fill-mask-2`;
module.exports["spectrum-fill-mask-2"];
module.exports["spectrum-fills-rotate"] = `bK8jfq_spectrum-fills-rotate`;
module.exports["spectrum-fills-rotate"];

},{}],"bPkEU":[function(require,module,exports,__globalThis) {
module.exports["i18nFontFamily"] = `_VbXxq_i18nFontFamily`;
module.exports["is-active"] = `_VbXxq_is-active`;
module.exports["is-disabled"] = `_VbXxq_is-disabled`;
module.exports["is-focused"] = `_VbXxq_is-focused`;
module.exports["is-open"] = `_VbXxq_is-open`;
module.exports["is-placeholder"] = `_VbXxq_is-placeholder`;
module.exports["is-selected"] = `_VbXxq_is-selected`;
module.exports["spectrum-BaseButton"] = `_VbXxq_spectrum-BaseButton ${module.exports["i18nFontFamily"]}`;
module.exports["spectrum-FocusRing-ring"] = `_VbXxq_spectrum-FocusRing-ring`;
module.exports["spectrum-FocusRing"] = `_VbXxq_spectrum-FocusRing ${module.exports["spectrum-FocusRing-ring"]}`;
module.exports["spectrum-ActionButton"] = `_VbXxq_spectrum-ActionButton ${module.exports["spectrum-BaseButton"]} ${module.exports["spectrum-FocusRing"]}`;
module.exports["spectrum-ActionButton--emphasized"] = `_VbXxq_spectrum-ActionButton--emphasized`;
module.exports["spectrum-ActionButton--quiet"] = `_VbXxq_spectrum-ActionButton--quiet`;
module.exports["spectrum-ActionButton--staticBlack"] = `_VbXxq_spectrum-ActionButton--staticBlack`;
module.exports["spectrum-ActionButton--staticColor"] = `_VbXxq_spectrum-ActionButton--staticColor`;
module.exports["spectrum-ActionButton--staticWhite"] = `_VbXxq_spectrum-ActionButton--staticWhite`;
module.exports["spectrum-ActionButton-hold"] = `_VbXxq_spectrum-ActionButton-hold`;
module.exports["spectrum-ActionButton-label"] = `_VbXxq_spectrum-ActionButton-label`;
module.exports["spectrum-ActionGroup-itemIcon"] = `_VbXxq_spectrum-ActionGroup-itemIcon`;
module.exports["spectrum-Button"] = `_VbXxq_spectrum-Button ${module.exports["spectrum-BaseButton"]} ${module.exports["spectrum-FocusRing"]}`;
module.exports["spectrum-Button--iconOnly"] = `_VbXxq_spectrum-Button--iconOnly`;
module.exports["spectrum-Button--overBackground"] = `_VbXxq_spectrum-Button--overBackground`;
module.exports["spectrum-Button--pending"] = `_VbXxq_spectrum-Button--pending`;
module.exports["spectrum-Button-circleLoader"] = `_VbXxq_spectrum-Button-circleLoader`;
module.exports["spectrum-Button-label"] = `_VbXxq_spectrum-Button-label`;
module.exports["spectrum-ClearButton"] = `_VbXxq_spectrum-ClearButton ${module.exports["spectrum-BaseButton"]} ${module.exports["spectrum-FocusRing"]}`;
module.exports["spectrum-ClearButton--inset"] = `_VbXxq_spectrum-ClearButton--inset`;
module.exports["spectrum-ClearButton--overBackground"] = `_VbXxq_spectrum-ClearButton--overBackground`;
module.exports["spectrum-ClearButton--small"] = `_VbXxq_spectrum-ClearButton--small`;
module.exports["spectrum-FieldButton"] = `_VbXxq_spectrum-FieldButton ${module.exports["spectrum-BaseButton"]} ${module.exports["spectrum-FocusRing"]}`;
module.exports["spectrum-FieldButton--invalid"] = `_VbXxq_spectrum-FieldButton--invalid`;
module.exports["spectrum-FocusRing--quiet"] = `_VbXxq_spectrum-FocusRing--quiet`;
module.exports["spectrum-FieldButton--quiet"] = `_VbXxq_spectrum-FieldButton--quiet ${module.exports["spectrum-FocusRing--quiet"]}`;
module.exports["spectrum-Icon"] = `_VbXxq_spectrum-Icon`;
module.exports["spectrum-LogicButton"] = `_VbXxq_spectrum-LogicButton ${module.exports["spectrum-BaseButton"]} ${module.exports["spectrum-FocusRing"]}`;
module.exports["spectrum-LogicButton--and"] = `_VbXxq_spectrum-LogicButton--and`;
module.exports["spectrum-LogicButton--or"] = `_VbXxq_spectrum-LogicButton--or`;

},{}],"4mQX0":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Text", ()=>Text);
var _jsxRuntime = require("preact/jsx-runtime");
var _filterDOMPropsTs = require("../../../../../../../../vendor/react-aria/exports/filterDOMProps.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useDOMRefTs = require("../utils/useDOMRef.ts");
var _slotsTsx = require("../utils/Slots.tsx");
var _stylePropsTs = require("../utils/styleProps.ts");
const Text = /*#__PURE__*/ (0, _react.forwardRef)(function Text(props, ref) {
    props = (0, _slotsTsx.useSlotProps)(props, 'text');
    let { children, ...otherProps } = props;
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(otherProps);
    let domRef = (0, _useDOMRefTs.useDOMRef)(ref);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
        role: "none",
        ...(0, _filterDOMPropsTs.filterDOMProps)(otherProps),
        ...styleProps,
        ref: domRef,
        children: children
    });
});

},{"preact/jsx-runtime":"b2Fbn","../../../../../../../../vendor/react-aria/exports/filterDOMProps.ts":"h4XHF","react":"gOP0N","../utils/useDOMRef.ts":"ltu01","../utils/Slots.tsx":"a1pMy","../utils/styleProps.ts":"7B0Vi","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cR4gQ":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "ActionButton", ()=>ActionButton);
var _jsxRuntime = require("preact/jsx-runtime");
var _useButtonTs = require("../../../../../../../../vendor/react-aria/exports/useButton.ts");
var _classNamesTs = require("../utils/classNames.ts");
var _slotsTsx = require("../utils/Slots.tsx");
var _cornerTriangleTsx = require("../../../../@spectrum-icons/ui/src/CornerTriangle.tsx");
var _cornerTriangleTsxDefault = parcelHelpers.interopDefault(_cornerTriangleTsx);
var _focusRingTs = require("../../../../../../../../vendor/react-aria/exports/FocusRing.ts");
var _mergePropsTs = require("../../../../../../../../vendor/react-aria/exports/mergeProps.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _varsCss = require("../../../spectrum-css-temp/components/button/vars.css");
var _varsCssDefault = parcelHelpers.interopDefault(_varsCss);
var _textTsx = require("../text/Text.tsx");
var _useDOMRefTs = require("../utils/useDOMRef.ts");
var _useHoverTs = require("../../../../../../../../vendor/react-aria/exports/useHover.ts");
var _providerTsx = require("../provider/Provider.tsx");
var _stylePropsTs = require("../utils/styleProps.ts");
const ActionButton = /*#__PURE__*/ (0, _reactDefault.default).forwardRef(function ActionButton(props, ref) {
    props = (0, _providerTsx.useProviderProps)(props);
    props = (0, _slotsTsx.useSlotProps)(props, 'actionButton');
    let textProps = (0, _slotsTsx.useSlotProps)({
        UNSAFE_className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-ActionButton-label')
    }, 'text');
    let { isQuiet, isDisabled, staticColor, children, autoFocus, // @ts-ignore (private)
    holdAffordance, // @ts-ignore (private)
    hideButtonText, ...otherProps } = props;
    let domRef = (0, _useDOMRefTs.useFocusableRef)(ref);
    let { buttonProps, isPressed } = (0, _useButtonTs.useButton)(props, domRef);
    let { hoverProps, isHovered } = (0, _useHoverTs.useHover)({
        isDisabled
    });
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(otherProps);
    let isTextOnly = (0, _reactDefault.default).Children.toArray(props.children).every((c)=>!/*#__PURE__*/ (0, _reactDefault.default).isValidElement(c));
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _focusRingTs.FocusRing), {
        focusRingClass: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'focus-ring'),
        autoFocus: autoFocus,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("button", {
            ...styleProps,
            ...(0, _mergePropsTs.mergeProps)(buttonProps, hoverProps),
            ref: domRef,
            className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-ActionButton', {
                'spectrum-ActionButton--quiet': isQuiet,
                'spectrum-ActionButton--staticColor': !!staticColor,
                'spectrum-ActionButton--staticWhite': staticColor === 'white',
                'spectrum-ActionButton--staticBlack': staticColor === 'black',
                'is-active': isPressed,
                'is-disabled': isDisabled,
                'is-hovered': isHovered
            }, styleProps.className),
            children: [
                holdAffordance && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _cornerTriangleTsxDefault.default), {
                    UNSAFE_className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-ActionButton-hold')
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _slotsTsx.ClearSlots), {
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _slotsTsx.SlotProvider), {
                        slots: {
                            icon: {
                                size: 'S',
                                UNSAFE_className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Icon', {
                                    'spectrum-ActionGroup-itemIcon': hideButtonText
                                })
                            },
                            text: {
                                ...textProps
                            }
                        },
                        children: typeof children === 'string' || isTextOnly ? /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                            children: children
                        }) : children
                    })
                })
            ]
        })
    });
});

},{"preact/jsx-runtime":"b2Fbn","../../../../../../../../vendor/react-aria/exports/useButton.ts":"lPmqM","../utils/classNames.ts":"dsWbb","../utils/Slots.tsx":"a1pMy","../../../../@spectrum-icons/ui/src/CornerTriangle.tsx":"lU4zM","../../../../../../../../vendor/react-aria/exports/FocusRing.ts":"amr77","../../../../../../../../vendor/react-aria/exports/mergeProps.ts":"jycxS","react":"gOP0N","../../../spectrum-css-temp/components/button/vars.css":"bPkEU","../text/Text.tsx":"4mQX0","../utils/useDOMRef.ts":"ltu01","../../../../../../../../vendor/react-aria/exports/useHover.ts":"2yLrj","../provider/Provider.tsx":"ebIlC","../utils/styleProps.ts":"7B0Vi","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lU4zM":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>CornerTriangle);
var _jsxRuntime = require("preact/jsx-runtime");
var _cornerTriangleJs = require("@adobe/react-spectrum-ui/dist/CornerTriangle.js");
var _uiiconTsx = require("../../../@adobe/react-spectrum/src/icon/UIIcon.tsx");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function CornerTriangle(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _uiiconTsx.UIIcon), {
        ...props,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _cornerTriangleJs.CornerTriangle), {})
    });
}

},{"preact/jsx-runtime":"b2Fbn","@adobe/react-spectrum-ui/dist/CornerTriangle.js":"gbCsg","../../../@adobe/react-spectrum/src/icon/UIIcon.tsx":"96LzK","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gbCsg":[function(require,module,exports,__globalThis) {
/**
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
**/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CornerTriangle = CornerTriangle;
var _react = _interopRequireDefault(require("b489748e771de69e"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function CornerTriangle(_ref) {
    var _ref$scale = _ref.scale, scale = _ref$scale === void 0 ? 'M' : _ref$scale, props = _objectWithoutProperties(_ref, [
        "scale"
    ]);
    return _react["default"].createElement("svg", _extends({}, props, props), scale === 'L' && _react["default"].createElement("path", {
        d: "M5.74.01a.25.25 0 0 0-.177.073l-5.48 5.48a.25.25 0 0 0 .177.427h5.48a.25.25 0 0 0 .25-.25V.26a.25.25 0 0 0-.25-.25z"
    }), scale === 'M' && _react["default"].createElement("path", {
        d: "M4.74.01a.25.25 0 0 0-.177.073l-4.48 4.48a.25.25 0 0 0 .177.427h4.48a.25.25 0 0 0 .25-.25V.26a.25.25 0 0 0-.25-.25z"
    }));
}
CornerTriangle.displayName = 'CornerTriangle';

},{"b489748e771de69e":"gOP0N"}],"96LzK":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "UIIcon", ()=>UIIcon);
var _classNamesTs = require("../utils/classNames.ts");
var _filterDOMPropsTs = require("../../../../../../../../vendor/react-aria/exports/filterDOMProps.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _varsCss = require("../../../spectrum-css-temp/components/icon/vars.css");
var _varsCssDefault = parcelHelpers.interopDefault(_varsCss);
var _providerTsx = require("../provider/Provider.tsx");
var _slotsTsx = require("../utils/Slots.tsx");
var _stylePropsTs = require("../utils/styleProps.ts");
function UIIcon(props) {
    props = (0, _slotsTsx.useSlotProps)(props, 'icon');
    let { children, 'aria-label': ariaLabel, 'aria-hidden': ariaHidden, ...otherProps } = props;
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(otherProps);
    let provider;
    try {
        // oxlint-disable-next-line react/react-compiler
        provider = (0, _providerTsx.useProvider)();
    } catch  {
    // ignore
    }
    let scale = 'M';
    if (provider != null) scale = provider.scale === 'large' ? 'L' : 'M';
    if (!ariaHidden) ariaHidden = undefined;
    return /*#__PURE__*/ (0, _reactDefault.default).cloneElement(children, {
        ...(0, _filterDOMPropsTs.filterDOMProps)(otherProps),
        ...styleProps,
        scale,
        focusable: 'false',
        'aria-label': ariaLabel,
        'aria-hidden': ariaLabel ? ariaHidden || undefined : true,
        role: 'img',
        className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), children.props.className, 'spectrum-Icon', {
            [`spectrum-UIIcon-${children.type['displayName']}`]: children.type['displayName']
        }, styleProps.className)
    });
}

},{"../utils/classNames.ts":"dsWbb","../../../../../../../../vendor/react-aria/exports/filterDOMProps.ts":"h4XHF","react":"gOP0N","../../../spectrum-css-temp/components/icon/vars.css":"jnc4G","../provider/Provider.tsx":"ebIlC","../utils/Slots.tsx":"a1pMy","../utils/styleProps.ts":"7B0Vi","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jnc4G":[function(require,module,exports,__globalThis) {
module.exports["spectrum--large"] = `wBx8DG_spectrum--large`;
module.exports["spectrum--medium"] = `wBx8DG_spectrum--medium`;
module.exports["spectrum-Icon"] = `wBx8DG_spectrum-Icon`;
module.exports["spectrum-Icon--sizeL"] = `wBx8DG_spectrum-Icon--sizeL`;
module.exports["spectrum-Icon--sizeM"] = `wBx8DG_spectrum-Icon--sizeM`;
module.exports["spectrum-Icon--sizeS"] = `wBx8DG_spectrum-Icon--sizeS`;
module.exports["spectrum-Icon--sizeXL"] = `wBx8DG_spectrum-Icon--sizeXL`;
module.exports["spectrum-Icon--sizeXS"] = `wBx8DG_spectrum-Icon--sizeXS`;
module.exports["spectrum-Icon--sizeXXL"] = `wBx8DG_spectrum-Icon--sizeXXL`;
module.exports["spectrum-Icon--sizeXXS"] = `wBx8DG_spectrum-Icon--sizeXXS`;
module.exports["spectrum-UIIcon"] = `wBx8DG_spectrum-UIIcon`;
module.exports["spectrum-UIIcon--large"] = `wBx8DG_spectrum-UIIcon--large`;
module.exports["spectrum-UIIcon--medium"] = `wBx8DG_spectrum-UIIcon--medium`;
module.exports["spectrum-UIIcon-AlertMedium"] = `wBx8DG_spectrum-UIIcon-AlertMedium`;
module.exports["spectrum-UIIcon-AlertSmall"] = `wBx8DG_spectrum-UIIcon-AlertSmall`;
module.exports["spectrum-UIIcon-ArrowDownSmall"] = `wBx8DG_spectrum-UIIcon-ArrowDownSmall`;
module.exports["spectrum-UIIcon-ArrowLeftMedium"] = `wBx8DG_spectrum-UIIcon-ArrowLeftMedium`;
module.exports["spectrum-UIIcon-Asterisk"] = `wBx8DG_spectrum-UIIcon-Asterisk`;
module.exports["spectrum-UIIcon-CheckmarkMedium"] = `wBx8DG_spectrum-UIIcon-CheckmarkMedium`;
module.exports["spectrum-UIIcon-CheckmarkSmall"] = `wBx8DG_spectrum-UIIcon-CheckmarkSmall`;
module.exports["spectrum-UIIcon-ChevronDownMedium"] = `wBx8DG_spectrum-UIIcon-ChevronDownMedium`;
module.exports["spectrum-UIIcon-ChevronDownSmall"] = `wBx8DG_spectrum-UIIcon-ChevronDownSmall`;
module.exports["spectrum-UIIcon-ChevronLeftLarge"] = `wBx8DG_spectrum-UIIcon-ChevronLeftLarge`;
module.exports["spectrum-UIIcon-ChevronLeftMedium"] = `wBx8DG_spectrum-UIIcon-ChevronLeftMedium`;
module.exports["spectrum-UIIcon-ChevronRightLarge"] = `wBx8DG_spectrum-UIIcon-ChevronRightLarge`;
module.exports["spectrum-UIIcon-ChevronRightMedium"] = `wBx8DG_spectrum-UIIcon-ChevronRightMedium`;
module.exports["spectrum-UIIcon-ChevronRightSmall"] = `wBx8DG_spectrum-UIIcon-ChevronRightSmall`;
module.exports["spectrum-UIIcon-ChevronUpSmall"] = `wBx8DG_spectrum-UIIcon-ChevronUpSmall`;
module.exports["spectrum-UIIcon-CornerTriangle"] = `wBx8DG_spectrum-UIIcon-CornerTriangle`;
module.exports["spectrum-UIIcon-CrossLarge"] = `wBx8DG_spectrum-UIIcon-CrossLarge`;
module.exports["spectrum-UIIcon-CrossMedium"] = `wBx8DG_spectrum-UIIcon-CrossMedium`;
module.exports["spectrum-UIIcon-CrossSmall"] = `wBx8DG_spectrum-UIIcon-CrossSmall`;
module.exports["spectrum-UIIcon-DashSmall"] = `wBx8DG_spectrum-UIIcon-DashSmall`;
module.exports["spectrum-UIIcon-DoubleGripper"] = `wBx8DG_spectrum-UIIcon-DoubleGripper`;
module.exports["spectrum-UIIcon-FolderBreadcrumb"] = `wBx8DG_spectrum-UIIcon-FolderBreadcrumb`;
module.exports["spectrum-UIIcon-HelpMedium"] = `wBx8DG_spectrum-UIIcon-HelpMedium`;
module.exports["spectrum-UIIcon-HelpSmall"] = `wBx8DG_spectrum-UIIcon-HelpSmall`;
module.exports["spectrum-UIIcon-InfoMedium"] = `wBx8DG_spectrum-UIIcon-InfoMedium`;
module.exports["spectrum-UIIcon-InfoSmall"] = `wBx8DG_spectrum-UIIcon-InfoSmall`;
module.exports["spectrum-UIIcon-ListGripper"] = `wBx8DG_spectrum-UIIcon-ListGripper`;
module.exports["spectrum-UIIcon-Magnifier"] = `wBx8DG_spectrum-UIIcon-Magnifier`;
module.exports["spectrum-UIIcon-SkipLeft"] = `wBx8DG_spectrum-UIIcon-SkipLeft`;
module.exports["spectrum-UIIcon-SkipRight"] = `wBx8DG_spectrum-UIIcon-SkipRight`;
module.exports["spectrum-UIIcon-Star"] = `wBx8DG_spectrum-UIIcon-Star`;
module.exports["spectrum-UIIcon-StarOutline"] = `wBx8DG_spectrum-UIIcon-StarOutline`;
module.exports["spectrum-UIIcon-SuccessMedium"] = `wBx8DG_spectrum-UIIcon-SuccessMedium`;
module.exports["spectrum-UIIcon-SuccessSmall"] = `wBx8DG_spectrum-UIIcon-SuccessSmall`;
module.exports["spectrum-UIIcon-TripleGripper"] = `wBx8DG_spectrum-UIIcon-TripleGripper`;

},{}],"kVBhs":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Column", ()=>_Column);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Column(props) {
    return null;
}
Column.getCollectionNode = function* getCollectionNode(props, context) {
    let { title, children, childColumns } = props;
    let rendered = title || children;
    let textValue = props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'];
    let fullNodes = yield {
        type: 'column',
        hasChildNodes: !!childColumns || !!title && (0, _reactDefault.default).Children.count(children) > 0,
        rendered,
        textValue,
        props,
        *childNodes () {
            if (childColumns) for (let child of childColumns)yield {
                type: 'column',
                value: child
            };
            else if (title) {
                let childColumns = [];
                (0, _reactDefault.default).Children.forEach(children, (child)=>{
                    childColumns.push({
                        type: 'column',
                        element: child
                    });
                });
                yield* childColumns;
            }
        },
        shouldInvalidate (newContext) {
            // This is a bit of a hack, but it works.
            // If this method is called, then there's a cached version of this node available.
            // But, we need to keep the list of columns in the new context up to date.
            updateContext(newContext);
            return false;
        }
    };
    let updateContext = (context)=>{
        // register leaf columns on the context so that <Row> can access them
        for (let node of fullNodes)if (!node.hasChildNodes) context.columns.push(node);
    };
    updateContext(context);
};
/**
 * A Column represents a field of each item within a Table. Columns may also contain nested
 * Column elements to represent column groups. Nested columns can be statically defined as
 * children, or dynamically generated using a function based on the `childColumns` prop.
 */ // We don't want getCollectionNode to show up in the type definition
let _Column = Column;

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lDVy2":[function(require,module,exports,__globalThis) {
module.exports["contents"] = `CC22fG_contents`;
module.exports["expand-button"] = `CC22fG_expand-button`;
module.exports["focus-ring"] = `CC22fG_focus-ring`;
module.exports["i18nFontFamily"] = `CC22fG_i18nFontFamily`;
module.exports["is-active"] = `CC22fG_is-active`;
module.exports["is-disabled"] = `CC22fG_is-disabled`;
module.exports["is-drop-target"] = `CC22fG_is-drop-target`;
module.exports["is-focused"] = `CC22fG_is-focused`;
module.exports["is-hovered"] = `CC22fG_is-hovered`;
module.exports["is-next-selected"] = `CC22fG_is-next-selected`;
module.exports["is-open"] = `CC22fG_is-open`;
module.exports["is-resizable"] = `CC22fG_is-resizable`;
module.exports["is-selected"] = `CC22fG_is-selected`;
module.exports["is-sortable"] = `CC22fG_is-sortable`;
module.exports["is-sorted-asc"] = `CC22fG_is-sorted-asc`;
module.exports["is-sorted-desc"] = `CC22fG_is-sorted-desc`;
module.exports["spectrum-FocusRing-ring"] = `CC22fG_spectrum-FocusRing-ring`;
module.exports["spectrum-FocusRing"] = `CC22fG_spectrum-FocusRing ${module.exports["spectrum-FocusRing-ring"]}`;
module.exports["spectrum-FocusRing--quiet"] = `CC22fG_spectrum-FocusRing--quiet`;
module.exports["spectrum-Table"] = `CC22fG_spectrum-Table`;
module.exports["spectrum-Table--compact"] = `CC22fG_spectrum-Table--compact`;
module.exports["spectrum-Table--isHorizontalScrollbarVisible"] = `CC22fG_spectrum-Table--isHorizontalScrollbarVisible`;
module.exports["spectrum-Table--isVerticalScrollbarVisible"] = `CC22fG_spectrum-Table--isVerticalScrollbarVisible`;
module.exports["spectrum-Table--loadingMore"] = `CC22fG_spectrum-Table--loadingMore`;
module.exports["spectrum-Table--quiet"] = `CC22fG_spectrum-Table--quiet`;
module.exports["spectrum-Table--regular"] = `CC22fG_spectrum-Table--regular`;
module.exports["spectrum-Table--spacious"] = `CC22fG_spectrum-Table--spacious`;
module.exports["spectrum-Table--wrap"] = `CC22fG_spectrum-Table--wrap`;
module.exports["spectrum-Table-body"] = `CC22fG_spectrum-Table-body`;
module.exports["spectrum-Table-body--resizerAtTableEdge"] = `CC22fG_spectrum-Table-body--resizerAtTableEdge`;
module.exports["spectrum-Table-bodyResizeIndicator"] = `CC22fG_spectrum-Table-bodyResizeIndicator`;
module.exports["spectrum-Table-cell"] = `CC22fG_spectrum-Table-cell`;
module.exports["spectrum-Table-cell--alignCenter"] = `CC22fG_spectrum-Table-cell--alignCenter`;
module.exports["spectrum-Table-cell--alignEnd"] = `CC22fG_spectrum-Table-cell--alignEnd`;
module.exports["spectrum-Table-cell--divider"] = `CC22fG_spectrum-Table-cell--divider`;
module.exports["spectrum-Table-cell--hasExpandCollapseButton"] = `CC22fG_spectrum-Table-cell--hasExpandCollapseButton`;
module.exports["spectrum-Table-cell--hideHeader"] = `CC22fG_spectrum-Table-cell--hideHeader`;
module.exports["spectrum-Table-cellContents"] = `CC22fG_spectrum-Table-cellContents`;
module.exports["spectrum-Table-cellWrapper"] = `CC22fG_spectrum-Table-cellWrapper`;
module.exports["spectrum-Table-checkbox"] = `CC22fG_spectrum-Table-checkbox`;
module.exports["spectrum-Table-checkboxCell"] = `CC22fG_spectrum-Table-checkboxCell`;
module.exports["spectrum-Table-colResizeIndicator"] = `CC22fG_spectrum-Table-colResizeIndicator`;
module.exports["spectrum-Table-colResizeIndicator--resizing"] = `CC22fG_spectrum-Table-colResizeIndicator--resizing`;
module.exports["spectrum-Table-colResizeIndicator--visible"] = `CC22fG_spectrum-Table-colResizeIndicator--visible`;
module.exports["spectrum-Table-colResizeNubbin"] = `CC22fG_spectrum-Table-colResizeNubbin`;
module.exports["spectrum-Table-colResizeNubbin--visible"] = `CC22fG_spectrum-Table-colResizeNubbin--visible`;
module.exports["spectrum-Table-columnResizer"] = `CC22fG_spectrum-Table-columnResizer`;
module.exports["spectrum-Table-columnResizerPlaceholder"] = `CC22fG_spectrum-Table-columnResizerPlaceholder`;
module.exports["spectrum-Table-expandButton"] = `CC22fG_spectrum-Table-expandButton`;
module.exports["spectrum-Table-headCell"] = `CC22fG_spectrum-Table-headCell`;
module.exports["spectrum-Table-headCellButton"] = `CC22fG_spectrum-Table-headCellButton`;
module.exports["spectrum-Table-headCellButton--alignCenter"] = `CC22fG_spectrum-Table-headCellButton--alignCenter`;
module.exports["spectrum-Table-headCellButton--alignEnd"] = `CC22fG_spectrum-Table-headCellButton--alignEnd`;
module.exports["spectrum-Table-headCellButton--alignStart"] = `CC22fG_spectrum-Table-headCellButton--alignStart`;
module.exports["spectrum-Table-headCellContents"] = `CC22fG_spectrum-Table-headCellContents`;
module.exports["spectrum-Table-headWrapper"] = `CC22fG_spectrum-Table-headWrapper`;
module.exports["spectrum-Table-headerCellText"] = `CC22fG_spectrum-Table-headerCellText`;
module.exports["spectrum-Table-menuChevron"] = `CC22fG_spectrum-Table-menuChevron`;
module.exports["spectrum-Table-row"] = `CC22fG_spectrum-Table-row`;
module.exports["spectrum-Table-row--firstRow"] = `CC22fG_spectrum-Table-row--firstRow`;
module.exports["spectrum-Table-row--isFlushBottom"] = `CC22fG_spectrum-Table-row--isFlushBottom`;
module.exports["spectrum-Table-row--lastRow"] = `CC22fG_spectrum-Table-row--lastRow`;
module.exports["spectrum-Table-sortedIcon"] = `CC22fG_spectrum-Table-sortedIcon`;

},{}]},[], null, "parcelRequire037a", {})

