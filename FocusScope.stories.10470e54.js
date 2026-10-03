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
})({"bf7TJ":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Example", ()=>Example);
parcelHelpers.export(exports, "ExampleStory", ()=>ExampleStory);
parcelHelpers.export(exports, "KeyboardNavigation", ()=>KeyboardNavigation);
parcelHelpers.export(exports, "KeyboardNavigationInsidePortal", ()=>KeyboardNavigationInsidePortal);
parcelHelpers.export(exports, "KeyboardNavigationNoContain", ()=>KeyboardNavigationNoContain);
parcelHelpers.export(exports, "KeyboardNavigationInsidePortalNoContain", ()=>KeyboardNavigationInsidePortalNoContain);
parcelHelpers.export(exports, "IgnoreRestoreFocus", ()=>IgnoreRestoreFocus);
parcelHelpers.export(exports, "FocusableFirstInScope", ()=>FocusableFirstInScope);
parcelHelpers.export(exports, "FocusableInputForm", ()=>FocusableInputForm);
parcelHelpers.export(exports, "ContainsHiddenElement", ()=>ContainsHiddenElement);
var _jsxRuntime = require("preact/jsx-runtime");
var _focusScopeTsx = require("../../../../../../../vendor/react-aria/src/focus/FocusScope.tsx");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
const dialogsRoot = 'dialogsRoot';
const meta = {
    title: 'FocusScope',
    parameters: {
        description: {
            data: 'Should not be able to click or navigate back into inputs from previous "dialogs".'
        }
    },
    excludeStories: [
        'Example'
    ]
};
exports.default = meta;
function MaybePortal({ children, isPortaled }) {
    if (!isPortaled) return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {
        children: children
    });
    return /*#__PURE__*/ (0, _reactDomDefault.default).createPortal(/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {
        children: children
    }), document.getElementById(dialogsRoot));
}
function NestedDialog({ onClose, isPortaled, contain }) {
    let [open, setOpen] = (0, _react.useState)(false);
    let [showNew, setShowNew] = (0, _react.useState)(false);
    let onKeyDown = (e)=>{
        if (e.key === 'Escape') {
            e.stopPropagation();
            onClose();
        }
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(MaybePortal, {
        isPortaled: isPortaled,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _focusScopeTsx.FocusScope), {
            contain: contain,
            restoreFocus: true,
            autoFocus: true,
            children: [
                !showNew && // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                    role: "dialog",
                    onKeyDown: onKeyDown,
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {}),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {}),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {}),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                            onClick: ()=>setShowNew(true),
                            children: "replace focusscope children"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                            type: "button",
                            onClick: ()=>setOpen(true),
                            children: "Open dialog"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                            type: "button",
                            onClick: onClose,
                            children: "close"
                        }),
                        open && /*#__PURE__*/ (0, _jsxRuntime.jsx)(NestedDialog, {
                            contain: contain,
                            onClose: ()=>setOpen(false),
                            isPortaled: isPortaled
                        })
                    ]
                }),
                showNew && // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                    role: "dialog",
                    onKeyDown: onKeyDown,
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {}),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                            autoFocus: true
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {})
                    ]
                })
            ]
        })
    });
}
let Example = ({ isPortaled, contain })=>{
    let [open, setOpen] = (0, _react.useState)(false);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                "aria-label": "input before"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                type: "button",
                onClick: ()=>setOpen(true),
                children: "Open dialog"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                "aria-label": "input after"
            }),
            open && /*#__PURE__*/ (0, _jsxRuntime.jsx)(NestedDialog, {
                onClose: ()=>setOpen(false),
                isPortaled: isPortaled,
                contain: contain
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                id: dialogsRoot
            })
        ]
    });
};
let ExampleStory = (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(Example, {
        ...args
    });
ExampleStory.storyName = 'Example';
function FocusableFirstInScopeExample() {
    let [contentIndex, setContentIndex] = (0, _react.useState)(0);
    let [buttonRemoved, setButtonRemoved] = (0, _react.useState)(false);
    function DialogContent(index = 0) {
        const nextIndex = index === 2 ? 0 : index + 1;
        return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("h1", {
                    id: `heading-${index}`,
                    children: [
                        "Dialog ",
                        index + 1
                    ]
                }),
                index === 2 ? /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                            children: "The end of the road."
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                            id: `button-${index}`,
                            onClick: (e)=>{
                                e.target.remove();
                                setButtonRemoved(true);
                            },
                            children: "Remove Me"
                        }, `button-${index}`),
                        buttonRemoved && /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                            children: "With no tabbable elements within the scope, FocusScope will try to focus the first focusable element within the scope, in this case, the dialog itself."
                        })
                    ]
                }) : /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)("p", {
                            children: [
                                "Content that will be replaced by ",
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("strong", {
                                    children: [
                                        "Dialog ",
                                        nextIndex + 1
                                    ]
                                }),
                                "."
                            ]
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)("button", {
                            id: `button-${index}`,
                            onClick: ()=>setContentIndex(nextIndex),
                            children: [
                                "Go to Dialog ",
                                nextIndex + 1
                            ]
                        }, `button-${index}`)
                    ]
                })
            ]
        });
    }
    const contents = [];
    for(let i = 0; i < 3; i++)contents.push(DialogContent(i));
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _focusScopeTsx.FocusScope), {
        contain: true,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
            role: "dialog",
            tabIndex: -1,
            "aria-labelledby": `heading-${contentIndex}`,
            style: {
                border: '1px solid currentColor',
                borderRadius: '5px',
                padding: '0 1.5rem 1.5rem',
                width: '15rem'
            },
            children: contents[contentIndex]
        })
    });
}
function IgnoreRestoreFocusExample() {
    const [display, setDisplay] = (0, _react.useState)(false);
    (0, _react.useEffect)(()=>{
        let handleKeyDown = (e)=>{
            if (e.key === 'Escape') setDisplay(false);
        };
        document.body.addEventListener('keyup', handleKeyDown);
        return ()=>{
            document.body.removeEventListener('keyup', handleKeyDown);
        };
    }, []);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                type: "button",
                onClick: ()=>setDisplay((state)=>!state),
                children: display ? 'Close dialog 1' : 'Open dialog 1'
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                type: "button",
                onClick: ()=>setDisplay((state)=>!state),
                children: display ? 'Close dialog 2' : 'Open dialog 2'
            }),
            display && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _focusScopeTsx.FocusScope), {
                restoreFocus: true,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                    role: "dialog",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {}),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {}),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {})
                    ]
                })
            })
        ]
    });
}
const KeyboardNavigation = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(Example, {
            ...args
        }),
    args: {
        isPortaled: false
    }
};
const KeyboardNavigationInsidePortal = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(Example, {
            ...args
        }),
    args: {
        isPortaled: true
    }
};
const KeyboardNavigationNoContain = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(Example, {
            ...args
        }),
    args: {
        isPortaled: false,
        contain: false
    }
};
const KeyboardNavigationInsidePortalNoContain = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(Example, {
            ...args
        }),
    args: {
        isPortaled: true,
        contain: false
    }
};
const IgnoreRestoreFocus = {
    render: ()=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(IgnoreRestoreFocusExample, {})
};
const FocusableFirstInScope = {
    render: ()=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(FocusableFirstInScopeExample, {})
};
function FocusableInputFormExample(args) {
    let [isOpen, setOpen] = (0, _reactDefault.default).useState(false);
    let { contain, restoreFocus, autoFocus } = args;
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                onClick: ()=>setOpen(true),
                children: "Open"
            }),
            isOpen && /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            marginBottom: '10px'
                        },
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _focusScopeTsx.FocusScope), {
                            contain: contain,
                            restoreFocus: restoreFocus,
                            autoFocus: autoFocus,
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("label", {
                                    htmlFor: "first-input",
                                    children: "First Input"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                                    id: "first-input"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("label", {
                                    htmlFor: "second-input",
                                    children: "Second Input"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                                    id: "second-input"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column'
                        },
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("label", {
                                htmlFor: "third-input",
                                children: "Third Input"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                                id: "third-input"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                        onClick: ()=>setOpen(false),
                        children: "Close"
                    })
                ]
            })
        ]
    });
}
const FocusableInputForm = {
    name: 'FocusableInputForm',
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(FocusableInputFormExample, {
            ...args
        }),
    args: {
        contain: true,
        restoreFocus: true,
        autoFocus: true
    },
    argTypes: {
        contain: {
            control: 'boolean'
        },
        restoreFocus: {
            control: 'boolean'
        },
        autoFocus: {
            control: 'boolean'
        }
    },
    parameters: {
        description: {
            data: `
1. Open OS keyboard settings
2. Add Chinese Pinyin - Simplified
3. Go to the third input
4. Type "ni", a set of suggestions should appear
5. Press Tab 3x and see how it shows different suggestions
6. Go to the first input
7. Repeat steps 4&5
8. See how it leaves the suggestions and jumps to the form button
`
        }
    }
};
let ContainsHiddenElement = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _focusScopeTsx.FocusScope), {
            ...args,
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {}),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                    style: {
                        visibility: 'hidden'
                    }
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {})
            ]
        }),
    args: {
        contain: true
    },
    argTypes: {
        contain: {
            control: 'boolean'
        },
        restoreFocus: {
            control: 'boolean'
        },
        autoFocus: {
            control: 'boolean'
        }
    },
    parameters: {
        description: {
            data: `
Should be able to tab navigate from the first input to the last input.
`
        }
    }
};

},{"preact/jsx-runtime":"b2Fbn","../../../../../../../vendor/react-aria/src/focus/FocusScope.tsx":"E8d3D","react":"gOP0N","react-dom":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h7M6K":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2xT6S":[function(require,module,exports,__globalThis) {
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

},{"../utils/focusWithoutScrolling":"gcZ3w","../utils/shadowdom/DOMFunctions":"8kfpz","./useFocusVisible":"aBfUW","../utils/domHelpers":"cYkFa","../utils/runAfterTransition":"k2HOw","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8kfpz":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aBfUW":[function(require,module,exports,__globalThis) {
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

},{"./domHelpers":"cYkFa","./shadowdom/DOMFunctions":"8kfpz","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"grvf5":[function(require,module,exports,__globalThis) {
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

},{"./DOMFunctions":"8kfpz","react-stately/private/flags/flags":"ahU3Z","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

