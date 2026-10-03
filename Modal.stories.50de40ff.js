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
})({"5Oeeo":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
parcelHelpers.export(exports, "ModalExample", ()=>ModalExample);
parcelHelpers.export(exports, "SheetExample", ()=>SheetExample);
parcelHelpers.export(exports, "InertTestStory", ()=>InertTestStory);
parcelHelpers.export(exports, "DateRangePickerInsideModalStory", ()=>DateRangePickerInsideModalStory);
var _jsxRuntime = require("preact/jsx-runtime");
var _buttonTsx = require("../../../../../../vendor/react-aria-components/src/Button.tsx");
var _comboBoxTsx = require("../../../../../../vendor/react-aria-components/src/ComboBox.tsx");
var _datePickerStoriesTsx = require("./DatePicker.stories.tsx");
var _dialogTsx = require("../../../../../../vendor/react-aria-components/src/Dialog.tsx");
var _headingTsx = require("../../../../../../vendor/react-aria-components/src/Heading.tsx");
var _inputTsx = require("../../../../../../vendor/react-aria-components/src/Input.tsx");
var _labelTsx = require("../../../../../../vendor/react-aria-components/src/Label.tsx");
var _listBoxTsx = require("../../../../../../vendor/react-aria-components/src/ListBox.tsx");
var _modalTsx = require("../../../../../../vendor/react-aria-components/src/Modal.tsx");
var _utilsTsx = require("./utils.tsx");
var _popoverTsx = require("../../../../../../vendor/react-aria-components/src/Popover.tsx");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexCss = require("../example/index.css");
var _indexCssDefault = parcelHelpers.interopDefault(_indexCss);
var _textFieldTsx = require("../../../../../../vendor/react-aria-components/src/TextField.tsx");
var _stylesCss = require("./styles.css");
exports.default = {
    title: 'React Aria Components/Modal',
    component: (0, _modalTsx.Modal)
};
const ModalExample = ()=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _dialogTsx.DialogTrigger), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                children: "Open modal"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _modalTsx.ModalOverlay), {
                style: {
                    position: 'fixed',
                    zIndex: 100,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    background: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _modalTsx.Modal), {
                    style: {
                        background: 'Canvas',
                        color: 'CanvasText',
                        border: '1px solid gray',
                        padding: 30
                    },
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _dialogTsx.Dialog), {
                        children: ({ close })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("form", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column'
                                },
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _headingTsx.Heading), {
                                        slot: "title",
                                        style: {
                                            marginTop: 0
                                        },
                                        children: "Sign up"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("label", {
                                        children: [
                                            "First Name: ",
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                                                placeholder: "John"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("label", {
                                        children: [
                                            "Last Name: ",
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                                                placeholder: "Smith"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                        onPress: close,
                                        style: {
                                            marginTop: 10
                                        },
                                        children: "Submit"
                                    })
                                ]
                            })
                    })
                })
            })
        ]
    });
const SheetExample = ()=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        style: {
            display: 'flex',
            flexDirection: 'column'
        },
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                style: {
                    display: 'flex',
                    height: '100vh',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _dialogTsx.DialogTrigger), {
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                            children: "Open modal"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _modalTsx.ModalOverlay), {
                            style: {
                                position: 'fixed',
                                zIndex: 100,
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                background: 'rgba(0, 0, 0, 0.5)'
                            },
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _modalTsx.Modal), {
                                style: {
                                    position: 'sticky',
                                    left: 0,
                                    width: '300px',
                                    /* Extra padding to account for iOS floating browser UI. */ top: '-100px',
                                    height: 'calc(100dvh + 200px)',
                                    padding: '100px 0',
                                    marginLeft: 'auto',
                                    background: 'white',
                                    outline: 'none',
                                    backgroundColor: 'lightgray',
                                    borderLeft: '1px solid black',
                                    boxShadow: '-8px 0 20px rgba(0, 0, 0, 0.1)',
                                    fontFamily: 'system-ui',
                                    fontSize: '0.875rem'
                                },
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _dialogTsx.Dialog), {
                                    children: ({ close })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("form", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _headingTsx.Heading), {
                                                    slot: "title",
                                                    style: {
                                                        marginTop: 0
                                                    },
                                                    children: "Sign up"
                                                }),
                                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("label", {
                                                    children: [
                                                        "First Name: ",
                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                                                            placeholder: "John"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("label", {
                                                    children: [
                                                        "Last Name: ",
                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                                                            placeholder: "Smith"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                                    onPress: close,
                                                    style: {
                                                        marginTop: 10
                                                    },
                                                    children: "Submit"
                                                })
                                            ]
                                        })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                style: {
                    height: '100vh'
                }
            })
        ]
    });
function InertTest() {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _dialogTsx.DialogTrigger), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                children: "Open modal"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _modalTsx.ModalOverlay), {
                isDismissable: true,
                style: {
                    position: 'fixed',
                    zIndex: 100,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    background: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _modalTsx.Modal), {
                    style: {
                        background: 'Canvas',
                        color: 'CanvasText',
                        border: '1px solid gray',
                        padding: 30
                    },
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _dialogTsx.Dialog), {
                        children: ()=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _textFieldTsx.TextField), {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                                                children: "First name"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _dialogTsx.DialogTrigger), {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                                children: "Combobox Trigger"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverTsx.Popover), {
                                                placement: "bottom start",
                                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _dialogTsx.Dialog), {
                                                    children: ()=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _comboBoxTsx.ComboBox), {
                                                            menuTrigger: "focus",
                                                            autoFocus: true,
                                                            name: "combo-box-example",
                                                            "data-testid": "combo-box-example",
                                                            allowsEmptyCollection: true,
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                                                                    style: {
                                                                        display: 'block'
                                                                    },
                                                                    children: "Test"
                                                                }),
                                                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                                                    style: {
                                                                        display: 'flex'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                                                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                                                                "aria-hidden": "true",
                                                                                style: {
                                                                                    padding: '0 2px'
                                                                                },
                                                                                children: "\u25BC"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _listBoxTsx.ListBox), {
                                                                    className: (0, _indexCssDefault.default).menu,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                                                                            children: "Foo"
                                                                        }),
                                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                                                                            children: "Bar"
                                                                        }),
                                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                                                                            children: "Baz"
                                                                        }),
                                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                                                                            href: "http://google.com",
                                                                            children: "Google"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                    })
                })
            })
        ]
    });
}
const InertTestStory = {
    render: ()=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(InertTest, {}),
    parameters: {
        description: {
            data: 'You should be able to click "Combobox Trigger" and then click on the textfield, closing the subdialog. A second click should move focus into the textfield'
        }
    }
};
function DateRangePickerInsideModal() {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _dialogTsx.DialogTrigger), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                children: "Open modal"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _modalTsx.ModalOverlay), {
                isDismissable: true,
                style: {
                    alignItems: 'center',
                    background: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    zIndex: 100
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _modalTsx.Modal), {
                    style: {
                        background: 'Canvas',
                        border: '1px solid gray',
                        color: 'CanvasText',
                        padding: 30
                    },
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _dialogTsx.Dialog), {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _datePickerStoriesTsx.DateRangePickerExample), {})
                    })
                })
            })
        ]
    });
}
const DateRangePickerInsideModalStory = {
    render: ()=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(DateRangePickerInsideModal, {}),
    parameters: {
        description: {
            data: 'Open the Modal, then open the DateRangePicker and select a start date. Clicking outside the Modal should close the picker but keep the Modal open.'
        }
    }
};

},{"preact/jsx-runtime":"b2Fbn","../../../../../../vendor/react-aria-components/src/Button.tsx":"enBVm","../../../../../../vendor/react-aria-components/src/ComboBox.tsx":"01xYV","./DatePicker.stories.tsx":"ieby1","../../../../../../vendor/react-aria-components/src/Dialog.tsx":"aPHDk","../../../../../../vendor/react-aria-components/src/Heading.tsx":"jB98p","../../../../../../vendor/react-aria-components/src/Input.tsx":"BUyo9","../../../../../../vendor/react-aria-components/src/Label.tsx":"eI7Ae","../../../../../../vendor/react-aria-components/src/ListBox.tsx":"l68rZ","../../../../../../vendor/react-aria-components/src/Modal.tsx":"5kz58","./utils.tsx":"oeVON","../../../../../../vendor/react-aria-components/src/Popover.tsx":"i9eo9","react":"gOP0N","../example/index.css":"9vxXE","../../../../../../vendor/react-aria-components/src/TextField.tsx":"fVWme","./styles.css":"9cXWn","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"01xYV":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "ComboBoxContext", ()=>ComboBoxContext);
parcelHelpers.export(exports, "ComboBoxStateContext", ()=>ComboBoxStateContext);
parcelHelpers.export(exports, "ComboBox", ()=>ComboBox);
parcelHelpers.export(exports, "ComboBoxValueContext", ()=>ComboBoxValueContext);
parcelHelpers.export(exports, "ComboBoxValue", ()=>ComboBoxValue);
var _jsxRuntime = require("preact/jsx-runtime");
var _useComboBox = require("react-aria/useComboBox");
var _button = require("./Button");
var _utils = require("./utils");
var _collectionBuilder = require("react-aria/CollectionBuilder");
var _useComboBoxState = require("react-stately/useComboBoxState");
var _hidden = require("react-aria/private/collections/Hidden");
var _fieldError = require("./FieldError");
var _autocomplete = require("./Autocomplete");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _form = require("./Form");
var _group = require("./Group");
var _input = require("./Input");
var _label = require("./Label");
var _listBox = require("./ListBox");
var _dialog = require("./Dialog");
var _popover = require("./Popover");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _text = require("./Text");
var _useFilter = require("react-aria/useFilter");
var _useListFormatter = require("react-aria/useListFormatter");
var _useResizeObserver = require("react-aria/private/utils/useResizeObserver");
const ComboBoxContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ComboBoxStateContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ComboBox = /*#__PURE__*/ (0, _hidden.createHideableComponent)(function ComboBox(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, ComboBoxContext);
    let { children, isDisabled = false, isInvalid = false, isRequired = false, isReadOnly = false } = props;
    let content = (0, _react.useMemo)(()=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _listBox.ListBoxContext).Provider, {
            value: {
                items: props.items ?? props.defaultItems
            },
            children: typeof children === 'function' ? children({
                isOpen: false,
                isDisabled,
                isInvalid,
                isRequired,
                defaultChildren: null,
                isReadOnly
            }) : children
        }), [
        children,
        isDisabled,
        isInvalid,
        isRequired,
        isReadOnly,
        props.items,
        props.defaultItems
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collectionBuilder.CollectionBuilder), {
        content: content,
        children: (collection)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(ComboBoxInner, {
                props: props,
                collection: collection,
                comboBoxRef: ref
            })
    });
});
// Contexts to clear inside the popover.
const CLEAR_CONTEXTS = [
    (0, _label.LabelContext),
    (0, _button.ButtonContext),
    (0, _input.InputContext),
    (0, _autocomplete.FieldInputContext),
    (0, _group.GroupContext),
    (0, _text.TextContext)
];
function ComboBoxInner({ props, collection, comboBoxRef: ref }) {
    let { name, formValue = 'key', allowsCustomValue } = props;
    if (allowsCustomValue) formValue = 'text';
    let { validationBehavior: formValidationBehavior } = (0, _utils.useSlottedContext)((0, _form.FormContext)) || {};
    let validationBehavior = props.validationBehavior ?? formValidationBehavior ?? 'native';
    let { contains } = (0, _useFilter.useFilter)({
        sensitivity: 'base'
    });
    let state = (0, _useComboBoxState.useComboBoxState)({
        ...props,
        defaultFilter: props.defaultFilter || contains,
        // If props.items isn't provided, rely on collection filtering (aka listbox.items is provided or defaultItems provided to Combobox)
        items: props.items,
        children: undefined,
        collection,
        validationBehavior
    });
    let buttonRef = (0, _react.useRef)(null);
    let inputRef = (0, _react.useRef)(null);
    let groupRef = (0, _react.useRef)(null);
    let listBoxRef = (0, _react.useRef)(null);
    let popoverRef = (0, _react.useRef)(null);
    let [labelRef, label] = (0, _utils.useSlot)(!props['aria-label'] && !props['aria-labelledby']);
    let [labelElementType, setLabelElementType] = (0, _react.useState)('label');
    let { buttonProps, inputProps, listBoxProps, labelProps, descriptionProps, errorMessageProps, valueProps, ...validation } = (0, _useComboBox.useComboBox)({
        ...(0, _utils.removeDataAttributes)(props),
        label,
        inputRef,
        buttonRef,
        listBoxRef,
        popoverRef,
        name: formValue === 'text' ? name : undefined,
        validationBehavior,
        labelElementType
    }, state);
    // Make menu width match input + button
    // Left for backward compatibility in case a <Group> is not rendered.
    let [menuWidth, setMenuWidth] = (0, _react.useState)(null);
    let onResize = (0, _react.useCallback)(()=>{
        if (inputRef.current && !groupRef.current) {
            let buttonRect = buttonRef.current?.getBoundingClientRect();
            let inputRect = inputRef.current.getBoundingClientRect();
            let minX = buttonRect ? Math.min(buttonRect.left, inputRect.left) : inputRect.left;
            let maxX = buttonRect ? Math.max(buttonRect.right, inputRect.right) : inputRect.right;
            setMenuWidth(maxX - minX + 'px');
        }
    }, [
        buttonRef,
        inputRef,
        setMenuWidth
    ]);
    (0, _useResizeObserver.useResizeObserver)({
        ref: inputRef,
        onResize: onResize
    });
    // Position popover relative to group if available, otherwise input.
    let triggerRef = (0, _react.useMemo)(()=>({
            get current () {
                return groupRef.current || inputRef.current;
            }
        }), // oxlint-disable-next-line react/react-compiler
    [
        groupRef,
        inputRef
    ]);
    // Only expose a subset of state to renderProps function to avoid infinite render loop
    let renderPropsState = (0, _react.useMemo)(()=>({
            isOpen: state.isOpen,
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid || false,
            isRequired: props.isRequired || false,
            isReadOnly: props.isReadOnly || false
        }), [
        state.isOpen,
        props.isDisabled,
        validation.isInvalid,
        props.isRequired,
        props.isReadOnly
    ]);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: renderPropsState,
        defaultClassName: 'react-aria-ComboBox'
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    let inputs = [];
    if (name && formValue === 'key') {
        let values = Array.isArray(state.value) ? state.value : [
            state.value
        ];
        if (values.length === 0) values = [
            null
        ];
        inputs = values.map((value, i)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                type: "hidden",
                name: name,
                form: props.form,
                value: value ?? ''
            }, i));
    }
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
        values: [
            [
                ComboBoxStateContext,
                state
            ],
            [
                (0, _label.LabelContext),
                {
                    ...labelProps,
                    elementType: labelElementType,
                    ref: labelRef
                }
            ],
            [
                (0, _button.ButtonContext),
                {
                    ...buttonProps,
                    ref: buttonRef,
                    isPressed: state.isOpen
                }
            ],
            [
                (0, _input.InputContext),
                {
                    ...inputProps,
                    ref: inputRef
                }
            ],
            [
                (0, _autocomplete.FieldInputContext),
                {
                    ...inputProps,
                    ref: (0, _react.useCallback)((el)=>{
                        inputRef.current = el; // TODO: figure out how to fix non-input element types in useComboBox/useTextField
                        if (el) setLabelElementType(el.tagName.toLowerCase() === 'input' ? 'label' : 'span');
                    }, []),
                    value: state.inputValue,
                    onChange: (v)=>state.setInputValue(v)
                }
            ],
            [
                (0, _dialog.OverlayTriggerStateContext),
                state
            ],
            [
                (0, _popover.PopoverContext),
                {
                    ref: popoverRef,
                    triggerRef,
                    scrollRef: listBoxRef,
                    placement: 'bottom start',
                    isNonModal: true,
                    trigger: 'ComboBox',
                    style: {
                        '--trigger-width': menuWidth
                    },
                    clearContexts: CLEAR_CONTEXTS
                }
            ],
            [
                (0, _listBox.ListBoxContext),
                {
                    ...listBoxProps,
                    ref: listBoxRef
                }
            ],
            [
                (0, _listBox.ListStateContext),
                state
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
                (0, _group.GroupContext),
                {
                    ref: groupRef,
                    isInvalid: validation.isInvalid,
                    isDisabled: props.isDisabled || false
                }
            ],
            [
                (0, _fieldError.FieldErrorContext),
                validation
            ],
            [
                ComboBoxValueContext,
                valueProps
            ]
        ],
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _utils.dom).div, {
            ...DOMProps,
            ...renderProps,
            ref: ref,
            slot: props.slot || undefined,
            "data-focused": state.isFocused || undefined,
            "data-open": state.isOpen || undefined,
            "data-disabled": props.isDisabled || undefined,
            "data-readonly": props.isReadOnly || undefined,
            "data-invalid": validation.isInvalid || undefined,
            "data-required": props.isRequired || undefined,
            children: [
                renderProps.children,
                inputs
            ]
        })
    });
}
const ComboBoxValueContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ComboBoxValue = /*#__PURE__*/ (0, _hidden.createHideableComponent)(function ComboBoxValue(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, ComboBoxValueContext);
    let state = (0, _react.useContext)(ComboBoxStateContext);
    let formatter = (0, _useListFormatter.useListFormatter)();
    let selectedText = (0, _react.useMemo)(()=>formatter.format(state.selectedItems.map((item)=>item?.textValue || '').filter((v)=>v !== '')), [
        formatter,
        state.selectedItems
    ]);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultChildren: selectedText || props.placeholder,
        defaultClassName: 'react-aria-ComboBoxValue',
        values: {
            selectedItems: (0, _react.useMemo)(()=>state.selectedItems.map((item)=>item.value ?? null), [
                state.selectedItems
            ]),
            selectedText,
            isPlaceholder: state.selectedItems.length === 0,
            state
        }
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ref: ref,
        ...DOMProps,
        ...renderProps,
        "data-placeholder": state.selectedItems.length === 0 || undefined
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/useComboBox":"h7kEh","./Button":"enBVm","./utils":"jtWJJ","react-aria/CollectionBuilder":"kFD1B","react-stately/useComboBoxState":"4xleD","react-aria/private/collections/Hidden":"iPJX7","./FieldError":"5KSCU","./Autocomplete":"dHgny","react-aria/filterDOMProps":"h4XHF","./Form":"aEFv9","./Group":"2mugT","./Input":"BUyo9","./Label":"eI7Ae","./ListBox":"l68rZ","./Dialog":"aPHDk","./Popover":"i9eo9","react":"gOP0N","./Text":"cfMV9","react-aria/useFilter":"9huVw","react-aria/useListFormatter":"f0xdH","react-aria/private/utils/useResizeObserver":"58iim","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"f0xdH":[function(require,module,exports,__globalThis) {
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
 * Provides localized list formatting for the current locale. Automatically updates when the locale
 * changes, and handles caching of the list formatter for performance.
 *
 * @param options - Formatting options.
 */ parcelHelpers.export(exports, "useListFormatter", ()=>useListFormatter);
var _i18Nprovider = require("./I18nProvider");
var _react = require("react");
function useListFormatter(options = {}) {
    let { locale } = (0, _i18Nprovider.useLocale)();
    return (0, _react.useMemo)(()=>new Intl.ListFormat(locale, options), [
        locale,
        options
    ]);
}

},{"./I18nProvider":"czGuc","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5kz58":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "ModalContext", ()=>ModalContext);
parcelHelpers.export(exports, "Modal", ()=>Modal);
parcelHelpers.export(exports, "ModalOverlay", ()=>ModalOverlay);
var _jsxRuntime = require("preact/jsx-runtime");
var _useModalOverlay = require("react-aria/useModalOverlay");
var _utils = require("./utils");
var _overlay = require("react-aria/Overlay");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _isScrollable = require("react-aria/private/utils/isScrollable");
var _mergeProps = require("react-aria/mergeProps");
var _mergeRefs = require("react-aria/mergeRefs");
var _useOverlayTriggerState = require("react-stately/useOverlayTriggerState");
var _dialog = require("./Dialog");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _runAfterKeyboard = require("react-aria/private/utils/runAfterKeyboard");
var _animation = require("react-aria/private/utils/animation");
var _ssrprovider = require("react-aria/SSRProvider");
var _useLayoutEffect = require("react-aria/private/utils/useLayoutEffect");
var _useObjectRef = require("react-aria/useObjectRef");
var _useViewportSize = require("react-aria/private/utils/useViewportSize");
const ModalContext = /*#__PURE__*/ (0, _react.createContext)(null);
const InternalModalContext = /*#__PURE__*/ (0, _react.createContext)(null);
const Modal = /*#__PURE__*/ (0, _react.forwardRef)(function Modal(props, ref) {
    let ctx = (0, _react.useContext)(InternalModalContext);
    if (ctx) return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ModalContent, {
        ...props,
        modalRef: ref,
        children: props.children
    });
    let { isDismissable, isKeyboardDismissDisabled, isOpen, defaultOpen, onOpenChange, children, isEntering, isExiting, UNSTABLE_portalContainer, shouldCloseOnInteractOutside, ...otherProps } = props;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ModalOverlay, {
        isDismissable: isDismissable,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        isOpen: isOpen,
        defaultOpen: defaultOpen,
        onOpenChange: onOpenChange,
        isEntering: isEntering,
        isExiting: isExiting,
        UNSTABLE_portalContainer: UNSTABLE_portalContainer,
        shouldCloseOnInteractOutside: shouldCloseOnInteractOutside,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(ModalContent, {
            ...otherProps,
            modalRef: ref,
            children: children
        })
    });
});
function ModalOverlayWithForwardRef(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, ModalContext);
    let contextState = (0, _react.useContext)((0, _dialog.OverlayTriggerStateContext));
    let localState = (0, _useOverlayTriggerState.useOverlayTriggerState)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    let objectRef = (0, _useObjectRef.useObjectRef)(ref);
    let modalRef = (0, _react.useRef)(null);
    let isOverlayExiting = (0, _animation.useExitAnimation)(objectRef, state.isOpen);
    let isModalExiting = (0, _animation.useExitAnimation)(modalRef, state.isOpen);
    let isExiting = isOverlayExiting || isModalExiting || props.isExiting || false;
    let isSSR = (0, _ssrprovider.useIsSSR)();
    if (!state.isOpen && !isExiting || isSSR) return null;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ModalOverlayInner, {
        ...props,
        state: state,
        isExiting: isExiting,
        overlayRef: objectRef,
        modalRef: modalRef
    });
}
const ModalOverlay = /*#__PURE__*/ (0, _react.forwardRef)(ModalOverlayWithForwardRef);
function ModalOverlayInner({ UNSTABLE_portalContainer, ...props }) {
    let modalRef = props.modalRef;
    let { state } = props;
    let { modalProps, underlayProps } = (0, _useModalOverlay.useModalOverlay)(props, state, modalRef);
    let [isOpen, setIsOpen] = (0, _react.useState)(false);
    let entering = (0, _animation.useEnterAnimation)(props.overlayRef, isOpen) || props.isEntering || false;
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-ModalOverlay',
        values: {
            isEntering: entering,
            isExiting: props.isExiting,
            state
        }
    });
    let viewport = (0, _useViewportSize.useViewportSize)();
    let pageWidth = undefined;
    let pageHeight = undefined;
    if (typeof document !== 'undefined') {
        let scrollingElement = (0, _isScrollable.isScrollable)(document.body) ? document.body : document.scrollingElement || document.documentElement;
        // Prevent Firefox from adding scrollbars when the page has a fractional width/height.
        let fractionalWidthDifference = scrollingElement.getBoundingClientRect().width % 1;
        let fractionalHeightDifference = scrollingElement.getBoundingClientRect().height % 1;
        pageWidth = scrollingElement.scrollWidth - fractionalWidthDifference;
        pageHeight = scrollingElement.scrollHeight - fractionalHeightDifference;
    }
    let style = {
        ...renderProps.style,
        '--visual-viewport-width': viewport.width + 'px',
        '--visual-viewport-height': viewport.height + 'px',
        '--page-width': pageWidth !== undefined ? pageWidth + 'px' : undefined,
        '--page-height': pageHeight !== undefined ? pageHeight + 'px' : undefined
    };
    // Since an auto-focused input may open the OSK, we defer the reveal, as a courtesy, to avoid layout shift.
    (0, _useLayoutEffect.useLayoutEffect)(()=>(0, _runAfterKeyboard.runAfterKeyboard)(()=>setIsOpen(true)), []);
    // oxlint-disable react/react-compiler
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _overlay.Overlay), {
        isExiting: props.isExiting,
        portalContainer: UNSTABLE_portalContainer,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
            ...(0, _mergeProps.mergeProps)((0, _filterDOMProps.filterDOMProps)(props, {
                global: true
            }), underlayProps),
            ...renderProps,
            style: style,
            ref: props.overlayRef,
            "data-entering": entering || undefined,
            "data-exiting": props.isExiting || undefined,
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
                values: [
                    [
                        InternalModalContext,
                        {
                            modalProps,
                            modalRef,
                            isExiting: props.isExiting,
                            isOpen,
                            isDismissable: props.isDismissable
                        }
                    ],
                    [
                        (0, _dialog.OverlayTriggerStateContext),
                        state
                    ]
                ],
                children: renderProps.children
            })
        })
    });
// oxlint-enable react/react-compiler
}
function ModalContent(props) {
    let { modalProps, modalRef, isExiting, isOpen, isDismissable } = (0, _react.useContext)(InternalModalContext);
    let state = (0, _react.useContext)((0, _dialog.OverlayTriggerStateContext));
    let mergedRefs = (0, _react.useMemo)(()=>(0, _mergeRefs.mergeRefs)(props.modalRef, modalRef), [
        props.modalRef,
        modalRef
    ]);
    let ref = (0, _useObjectRef.useObjectRef)(mergedRefs);
    let entering = (0, _animation.useEnterAnimation)(ref, isOpen);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-Modal',
        values: {
            isEntering: entering,
            isExiting,
            state
        }
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _utils.dom).div, {
        ...(0, _mergeProps.mergeProps)((0, _filterDOMProps.filterDOMProps)(props, {
            global: true
        }), modalProps),
        ...renderProps,
        ref: ref,
        "data-entering": entering || undefined,
        "data-exiting": isExiting || undefined,
        children: [
            isDismissable && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _overlay.DismissButton), {
                onDismiss: state.close
            }),
            renderProps.children
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","react-aria/useModalOverlay":"8dX3q","./utils":"jtWJJ","react-aria/Overlay":[["DismissButton","9Jo8j"],["Overlay","dm7Ko"]],"react-aria/filterDOMProps":"h4XHF","react-aria/private/utils/isScrollable":"2UC33","react-aria/mergeProps":"jycxS","react-aria/mergeRefs":"jspQh","react-stately/useOverlayTriggerState":"457a8","./Dialog":"aPHDk","react":"gOP0N","react-aria/private/utils/runAfterKeyboard":"bwB3z","react-aria/private/utils/animation":"fc1Bu","react-aria/SSRProvider":"2cndP","react-aria/private/utils/useLayoutEffect":"h7M6K","react-aria/useObjectRef":"ec0NJ","react-aria/private/utils/useViewportSize":"kU0Hn","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8dX3q":[function(require,module,exports,__globalThis) {
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

},{"./shadowdom/DOMFunctions":"8kfpz","./platform":"eBqgD","./runAfterKeyboard":"bwB3z","react":"gOP0N","../ssr/SSRProvider":"2cndP","./keyboard":"fXhXT","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"oeVON":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MyHeader", ()=>MyHeader);
parcelHelpers.export(exports, "MyListBoxItem", ()=>MyListBoxItem);
parcelHelpers.export(exports, "MyMenuItem", ()=>MyMenuItem);
parcelHelpers.export(exports, "LoadingSpinner", ()=>LoadingSpinner);
var _jsxRuntime = require("preact/jsx-runtime");
var _classNamesTs = require("../../@adobe/react-spectrum/src/utils/classNames.ts");
var _headerTsx = require("../../../../../../vendor/react-aria-components/src/Header.tsx");
var _listBoxTsx = require("../../../../../../vendor/react-aria-components/src/ListBox.tsx");
var _menuTsx = require("../../../../../../vendor/react-aria-components/src/Menu.tsx");
var _progressBarTsx = require("../../../../../../vendor/react-aria-components/src/ProgressBar.tsx");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexCss = require("../example/index.css");
var _indexCssDefault = parcelHelpers.interopDefault(_indexCss);
const MyHeader = (props)=>{
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _headerTsx.Header), {
        ...props,
        style: {
            width: 'max-content',
            ...props.style
        }
    });
};
const MyListBoxItem = (props)=>{
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _listBoxTsx.ListBoxItem), {
        ...props,
        style: {
            wordBreak: 'break-word',
            minWidth: 'max-content',
            ...props.style
        },
        className: ({ isFocused, isSelected, isHovered, isFocusVisible })=>(0, _classNamesTs.classNames)((0, _indexCssDefault.default), 'item', {
                focused: isFocused,
                selected: isSelected,
                hovered: isHovered,
                focusVisible: isFocusVisible
            })
    });
};
const MyMenuItem = (props)=>{
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.MenuItem), {
        ...props,
        className: ({ isFocused, isSelected, isOpen, isFocusVisible })=>(0, _classNamesTs.classNames)((0, _indexCssDefault.default), 'item', {
                focused: isFocused,
                selected: isSelected,
                open: isOpen,
                focusVisible: isFocusVisible
            })
    });
};
const LoadingSpinner = ({ style = {} })=>{
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _progressBarTsx.ProgressBar), {
        "aria-label": "loading",
        isIndeterminate: true,
        style: style,
        className: (0, _indexCssDefault.default)['spinner'],
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("svg", {
            height: "100%",
            width: "100%",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                    fill: "currentColor",
                    d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
                    opacity: ".25"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                    fill: "currentColor",
                    d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z",
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("animateTransform", {
                        attributeName: "transform",
                        type: "rotate",
                        dur: "0.75s",
                        values: "0 12 12;360 12 12",
                        repeatCount: "indefinite"
                    })
                })
            ]
        })
    });
};

},{"preact/jsx-runtime":"b2Fbn","../../@adobe/react-spectrum/src/utils/classNames.ts":"dsWbb","../../../../../../vendor/react-aria-components/src/Header.tsx":"f1ESp","../../../../../../vendor/react-aria-components/src/ListBox.tsx":"l68rZ","../../../../../../vendor/react-aria-components/src/Menu.tsx":"70BZW","../../../../../../vendor/react-aria-components/src/ProgressBar.tsx":"hW9J5","react":"gOP0N","../example/index.css":"9vxXE","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6VPAz":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a listbox component.
 * A listbox displays a list of options and allows a user to select one or more of them.
 *
 * @param props - Props for the listbox.
 * @param state - State for the listbox, as returned by `useListState`.
 */ parcelHelpers.export(exports, "useListBox", ()=>useListBox);
var _filterDOMProps = require("../utils/filterDOMProps");
var _utils = require("./utils");
var _mergeProps = require("../utils/mergeProps");
var _useFocusWithin = require("../interactions/useFocusWithin");
var _useId = require("../utils/useId");
var _useLabel = require("../label/useLabel");
var _useSelectableList = require("../selection/useSelectableList");
function useListBox(props, state, ref) {
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    // Use props instead of state here. We don't want this to change due to long press.
    let selectionBehavior = props.selectionBehavior || 'toggle';
    let orientation = props.orientation || 'vertical';
    let linkBehavior = props.linkBehavior || (selectionBehavior === 'replace' ? 'action' : 'override');
    if (selectionBehavior === 'toggle' && linkBehavior === 'action') // linkBehavior="action" does not work with selectionBehavior="toggle" because there is no way
    // to initiate selection (checkboxes are not allowed inside a listbox). Link items will not be
    // selectable in this configuration.
    linkBehavior = 'override';
    let { listProps } = (0, _useSelectableList.useSelectableList)({
        ...props,
        ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        linkBehavior
    });
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)({
        onFocusWithin: props.onFocus,
        onBlurWithin: props.onBlur,
        onFocusWithinChange: props.onFocusChange
    });
    // Share list id and some props with child options.
    let id = (0, _useId.useId)(props.id);
    (0, _utils.listData).set(state, {
        id,
        shouldUseVirtualFocus: props.shouldUseVirtualFocus,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp,
        shouldFocusOnHover: props.shouldFocusOnHover,
        isVirtualized: props.isVirtualized,
        onAction: props.onAction,
        linkBehavior,
        // @ts-ignore
        UNSTABLE_itemBehavior: props['UNSTABLE_itemBehavior']
    });
    let { labelProps, fieldProps } = (0, _useLabel.useLabel)({
        ...props,
        id,
        // listbox is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    return {
        labelProps,
        listBoxProps: (0, _mergeProps.mergeProps)(domProps, focusWithinProps, state.selectionManager.selectionMode === 'multiple' ? {
            'aria-multiselectable': 'true'
        } : {}, {
            role: 'listbox',
            'aria-orientation': orientation,
            ...(0, _mergeProps.mergeProps)(fieldProps, listProps)
        })
    };
}

},{"../utils/filterDOMProps":"h4XHF","./utils":"8ZMtS","../utils/mergeProps":"jycxS","../interactions/useFocusWithin":"bkSQo","../utils/useId":"fQAcb","../label/useLabel":"kMUgu","../selection/useSelectableList":"kK5el","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8ZMtS":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "listData", ()=>listData);
parcelHelpers.export(exports, "getItemId", ()=>getItemId);
const listData = new WeakMap();
function normalizeKey(key) {
    if (typeof key === 'string') return key.replace(/\s*/g, '');
    return '' + key;
}
function getItemId(state, itemKey) {
    let data = listData.get(state);
    if (!data) throw new Error('Unknown list');
    return `${data.id}-option-${normalizeKey(itemKey)}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dUGjY":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for an option in a listbox.
 * See `useListBox` for more details about listboxes.
 *
 * @param props - Props for the option.
 * @param state - State for the listbox, as returned by `useListState`.
 */ parcelHelpers.export(exports, "useOption", ()=>useOption);
var _chain = require("../utils/chain");
var _filterDOMProps = require("../utils/filterDOMProps");
var _getItemCount = require("react-stately/private/collections/getItemCount");
var _utils = require("./utils");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _mergeProps = require("../utils/mergeProps");
var _useSelectableItem = require("../selection/useSelectableItem");
var _useHover = require("../interactions/useHover");
var _openLink = require("../utils/openLink");
var _useId = require("../utils/useId");
function useOption(props, state, ref) {
    let { key } = props;
    let data = (0, _utils.listData).get(state);
    let isDisabled = props.isDisabled ?? state.selectionManager.isDisabled(key);
    let isSelected = props.isSelected ?? state.selectionManager.isSelected(key);
    let shouldSelectOnPressUp = props.shouldSelectOnPressUp ?? data?.shouldSelectOnPressUp;
    let shouldFocusOnHover = props.shouldFocusOnHover ?? data?.shouldFocusOnHover;
    let shouldUseVirtualFocus = props.shouldUseVirtualFocus ?? data?.shouldUseVirtualFocus;
    let isVirtualized = props.isVirtualized ?? data?.isVirtualized;
    let labelId = (0, _useId.useSlotId)();
    let descriptionId = (0, _useId.useSlotId)();
    let optionProps = {
        role: 'option',
        'aria-disabled': isDisabled || undefined,
        'aria-selected': state.selectionManager.selectionMode !== 'none' ? isSelected : undefined,
        'aria-label': props['aria-label'],
        'aria-labelledby': labelId,
        'aria-describedby': descriptionId
    };
    let item = state.collection.getItem(key);
    if (isVirtualized) {
        let index = Number(item?.index);
        optionProps['aria-posinset'] = Number.isNaN(index) ? undefined : index + 1;
        optionProps['aria-setsize'] = (0, _getItemCount.getItemCount)(state.collection);
    }
    let onAction = data?.onAction ? ()=>data?.onAction?.(key) : undefined;
    let id = (0, _utils.getItemId)(state, key);
    let { itemProps, isPressed, isFocused, hasAction, allowsSelection } = (0, _useSelectableItem.useSelectableItem)({
        selectionManager: state.selectionManager,
        key,
        ref,
        shouldSelectOnPressUp,
        allowsDifferentPressOrigin: shouldSelectOnPressUp && shouldFocusOnHover,
        isVirtualized,
        shouldUseVirtualFocus,
        isDisabled,
        onAction: onAction || item?.props?.onAction ? (0, _chain.chain)(item?.props?.onAction, onAction) : undefined,
        linkBehavior: data?.linkBehavior,
        // @ts-ignore
        UNSTABLE_itemBehavior: data?.['UNSTABLE_itemBehavior'],
        id
    });
    let { hoverProps } = (0, _useHover.useHover)({
        isDisabled: isDisabled || !shouldFocusOnHover,
        onHoverStart () {
            if (!(0, _useFocusVisible.isFocusVisible)()) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
            }
        }
    });
    let domProps = (0, _filterDOMProps.filterDOMProps)(item?.props);
    delete domProps.id;
    let linkProps = (0, _openLink.useLinkProps)(item?.props);
    return {
        optionProps: {
            ...optionProps,
            ...(0, _mergeProps.mergeProps)(domProps, itemProps, hoverProps, linkProps),
            id
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        isFocused,
        isFocusVisible: isFocused && state.selectionManager.isFocused && (0, _useFocusVisible.isFocusVisible)(),
        isSelected,
        isDisabled,
        isPressed,
        allowsSelection,
        hasAction
    };
}

},{"../utils/chain":"bQmEj","../utils/filterDOMProps":"h4XHF","react-stately/private/collections/getItemCount":"eLVRI","./utils":"8ZMtS","../interactions/useFocusVisible":"aBfUW","../utils/mergeProps":"jycxS","../selection/useSelectableItem":"3SFOH","../interactions/useHover":"2yLrj","../utils/openLink":"gH3wl","../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kbk3K":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "DragAndDropContext", ()=>DragAndDropContext);
parcelHelpers.export(exports, "DropIndicatorContext", ()=>DropIndicatorContext);
parcelHelpers.export(exports, "DropIndicator", ()=>DropIndicator);
parcelHelpers.export(exports, "useRenderDropIndicator", ()=>useRenderDropIndicator);
parcelHelpers.export(exports, "useDndPersistedKeys", ()=>useDndPersistedKeys);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const DragAndDropContext = /*#__PURE__*/ (0, _react.createContext)({});
const DropIndicatorContext = /*#__PURE__*/ (0, _react.createContext)(null);
const DropIndicator = /*#__PURE__*/ (0, _react.forwardRef)(function DropIndicator(props, ref) {
    let { render } = (0, _react.useContext)(DropIndicatorContext);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {
        children: render(props, ref)
    });
});
function useRenderDropIndicator(dragAndDropHooks, dropState) {
    let renderDropIndicator = dragAndDropHooks?.renderDropIndicator;
    let isVirtualDragging = dragAndDropHooks?.isVirtualDragging?.();
    let fn = (0, _react.useCallback)((target)=>{
        // Only show drop indicators when virtual dragging or this is the current drop target.
        // oxlint-disable-next-line react/react-compiler
        if (isVirtualDragging || dropState?.isDropTarget(target)) return renderDropIndicator ? renderDropIndicator(target) : /*#__PURE__*/ (0, _jsxRuntime.jsx)(DropIndicator, {
            target: target
        });
    }, // We invalidate whenever the target changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        dropState?.target,
        isVirtualDragging,
        renderDropIndicator
    ]);
    return dragAndDropHooks?.useDropIndicator ? fn : undefined;
}
function useDndPersistedKeys(selectionManager, dragAndDropHooks, dropState) {
    // Persist the focused key and the drop target key.
    let focusedKey = selectionManager.focusedKey;
    let dropTargetKey = null;
    if (dragAndDropHooks?.isVirtualDragging?.() && dropState?.target?.type === 'item') {
        dropTargetKey = dropState.target.key;
        if (dropState.target.dropPosition === 'after') {
            // Normalize to the "before" drop position since we only render those to the DOM.
            let nextKey = dropState.collection.getKeyAfter(dropTargetKey);
            let lastDescendantKey = null;
            if (nextKey != null) {
                let targetLevel = dropState.collection.getItem(dropTargetKey)?.level ?? 0;
                // Skip over any rows that are descendants of the target ("after" position should be after all children)
                while(nextKey != null){
                    let node = dropState.collection.getItem(nextKey);
                    // eslint-disable-next-line max-depth
                    if (!node) break;
                    // Skip over non-item nodes (e.g., loaders) since they can't be drop targets.
                    // eslint-disable-next-line max-depth
                    if (node.type !== 'item') {
                        nextKey = dropState.collection.getKeyAfter(nextKey);
                        continue;
                    }
                    // Stop once we find an item at the same level or higher
                    // eslint-disable-next-line max-depth
                    if ((node.level ?? 0) <= targetLevel) break;
                    lastDescendantKey = nextKey;
                    nextKey = dropState.collection.getKeyAfter(nextKey);
                }
            }
            // If nextKey is null (end of collection), use the last descendant
            dropTargetKey = nextKey ?? lastDescendantKey ?? dropTargetKey;
        }
    }
    return (0, _react.useMemo)(()=>{
        return new Set([
            focusedKey,
            dropTargetKey
        ].filter((k)=>k != null));
    }, [
        focusedKey,
        dropTargetKey
    ]);
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3g793":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

