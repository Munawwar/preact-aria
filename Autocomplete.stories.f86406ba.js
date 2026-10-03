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
})({"2cTcD":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
parcelHelpers.export(exports, "AutocompleteExample", ()=>AutocompleteExample);
parcelHelpers.export(exports, "AutocompleteSearchfield", ()=>AutocompleteSearchfield);
parcelHelpers.export(exports, "AutocompleteFocusRecovery", ()=>AutocompleteFocusRecovery);
parcelHelpers.export(exports, "AutocompleteMenuDynamic", ()=>AutocompleteMenuDynamic);
parcelHelpers.export(exports, "AutocompleteOnActionOnMenuItems", ()=>AutocompleteOnActionOnMenuItems);
parcelHelpers.export(exports, "AutocompleteDisabledKeys", ()=>AutocompleteDisabledKeys);
parcelHelpers.export(exports, "AutocompleteAsyncLoadingExample", ()=>AutocompleteAsyncLoadingExample);
parcelHelpers.export(exports, "AutocompleteCaseSensitive", ()=>AutocompleteCaseSensitive);
parcelHelpers.export(exports, "AutocompleteWithListbox", ()=>AutocompleteWithListbox);
parcelHelpers.export(exports, "AutocompleteSelectAllFiltering", ()=>AutocompleteSelectAllFiltering);
parcelHelpers.export(exports, "AutocompleteWithVirtualizedListbox", ()=>AutocompleteWithVirtualizedListbox);
parcelHelpers.export(exports, "AutocompleteInPopover", ()=>AutocompleteInPopover);
parcelHelpers.export(exports, "AutocompleteInPopoverDialogTrigger", ()=>AutocompleteInPopoverDialogTrigger);
parcelHelpers.export(exports, "AutocompleteWithExtraButtons", ()=>AutocompleteWithExtraButtons);
parcelHelpers.export(exports, "AutocompleteMenuInPopoverDialogTrigger", ()=>AutocompleteMenuInPopoverDialogTrigger);
parcelHelpers.export(exports, "AutocompleteSelect", ()=>AutocompleteSelect);
parcelHelpers.export(exports, "AutocompleteWithAsyncListBox", ()=>AutocompleteWithAsyncListBox);
parcelHelpers.export(exports, "AutocompleteWithGridList", ()=>AutocompleteWithGridList);
parcelHelpers.export(exports, "AutocompleteWithTable", ()=>AutocompleteWithTable);
parcelHelpers.export(exports, "AutocompleteWithTagGroup", ()=>AutocompleteWithTagGroup);
parcelHelpers.export(exports, "AutocompletePreserveFirstSectionStory", ()=>AutocompletePreserveFirstSectionStory);
parcelHelpers.export(exports, "AutocompleteUserCustomFiltering", ()=>AutocompleteUserCustomFiltering);
parcelHelpers.export(exports, "AutocompleteGrid", ()=>AutocompleteGrid);
var _jsxRuntime = require("preact/jsx-runtime");
var _storyActionsTs = require("../../../../../story-actions.ts");
var _autocompleteTsx = require("../../../../../../vendor/react-aria-components/src/Autocomplete.tsx");
var _buttonTsx = require("../../../../../../vendor/react-aria-components/src/Button.tsx");
var _tableTsx = require("../../../../../../vendor/react-aria-components/src/Table.tsx");
var _collectionTs = require("../../../../../../vendor/react-aria/exports/Collection.ts");
var _dialogTsx = require("../../../../../../vendor/react-aria-components/src/Dialog.tsx");
var _gridListTsx = require("../../../../../../vendor/react-aria-components/src/GridList.tsx");
var _headerTsx = require("../../../../../../vendor/react-aria-components/src/Header.tsx");
var _inputTsx = require("../../../../../../vendor/react-aria-components/src/Input.tsx");
var _keyboardTsx = require("../../../../../../vendor/react-aria-components/src/Keyboard.tsx");
var _labelTsx = require("../../../../../../vendor/react-aria-components/src/Label.tsx");
var _listBoxTsx = require("../../../../../../vendor/react-aria-components/src/ListBox.tsx");
var _useVirtualizerStateTs = require("../../../../../../vendor/react-stately/exports/useVirtualizerState.ts");
var _utilsTsx = require("./utils.tsx");
var _menuTsx = require("../../../../../../vendor/react-aria-components/src/Menu.tsx");
var _tableStoriesTsx = require("./Table.stories.tsx");
var _gridListStoriesTsx = require("./GridList.stories.tsx");
var _listBoxStoriesTsx = require("./ListBox.stories.tsx");
var _tagGroupStoriesTsx = require("./TagGroup.stories.tsx");
var _overlayArrowTsx = require("../../../../../../vendor/react-aria-components/src/OverlayArrow.tsx");
var _popoverTsx = require("../../../../../../vendor/react-aria-components/src/Popover.tsx");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _searchFieldTsx = require("../../../../../../vendor/react-aria-components/src/SearchField.tsx");
var _selectTsx = require("../../../../../../vendor/react-aria-components/src/Select.tsx");
var _separatorTsx = require("../../../../../../vendor/react-aria-components/src/Separator.tsx");
var _indexCss = require("../example/index.css");
var _indexCssDefault = parcelHelpers.interopDefault(_indexCss);
var _tableLayoutTs = require("../../../../../../vendor/react-aria-components/src/TableLayout.ts");
var _tagGroupTsx = require("../../../../../../vendor/react-aria-components/src/TagGroup.tsx");
var _textTsx = require("../../../../../../vendor/react-aria-components/src/Text.tsx");
var _textAreaTsx = require("../../../../../../vendor/react-aria-components/src/TextArea.tsx");
var _textFieldTsx = require("../../../../../../vendor/react-aria-components/src/TextField.tsx");
var _tooltipTsx = require("../../../../../../vendor/react-aria-components/src/Tooltip.tsx");
var _useAsyncListTs = require("../../../../../../vendor/react-stately/exports/useAsyncList.ts");
var _useFilterTs = require("../../../../../../vendor/react-aria/exports/useFilter.ts");
var _useListDataTs = require("../../../../../../vendor/react-stately/exports/useListData.ts");
var _useTreeDataTs = require("../../../../../../vendor/react-stately/exports/useTreeData.ts");
var _virtualizerTsx = require("../../../../../../vendor/react-aria-components/src/Virtualizer.tsx");
var _stylesCss = require("./styles.css");
exports.default = {
    title: 'React Aria Components/Autocomplete',
    component: (0, _autocompleteTsx.Autocomplete),
    args: {
        onAction: (0, _storyActionsTs.action)('onAction'),
        selectionMode: 'multiple',
        escapeKeyBehavior: 'clearSelection',
        disableVirtualFocus: false
    },
    argTypes: {
        onAction: {
            table: {
                disable: true
            }
        },
        onSelectionChange: {
            table: {
                disable: true
            }
        },
        selectionMode: {
            control: 'radio',
            options: [
                'none',
                'single',
                'multiple'
            ]
        },
        escapeKeyBehavior: {
            control: 'radio',
            options: [
                'clearSelection',
                'none'
            ]
        }
    }
};
let StaticMenu = (props)=>{
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menuTsx.Menu), {
        className: (0, _indexCssDefault.default).menu,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menuTsx.MenuSection), {
                className: (0, _indexCssDefault.default).group,
                "aria-label": 'Section 1',
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyMenuItem), {
                        children: "Foo"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyMenuItem), {
                        children: "Bar"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyMenuItem), {
                        children: "Baz"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyMenuItem), {
                        href: "http://google.com",
                        children: "Google"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menuTsx.SubmenuTrigger), {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyMenuItem), {
                                children: "With subdialog"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverTsx.Popover), {
                                style: {
                                    background: 'Canvas',
                                    color: 'CanvasText',
                                    border: '1px solid gray',
                                    padding: 5
                                },
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(AutocompleteWrapper, {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _textFieldTsx.TextField), {
                                            autoFocus: true,
                                            children: [
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                                                    style: {
                                                        display: 'block'
                                                    },
                                                    children: "Search"
                                                }),
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                                    style: {
                                                        display: 'block'
                                                    },
                                                    slot: "description",
                                                    children: "Please select an option below."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menuTsx.Menu), {
                                            className: (0, _indexCssDefault.default).menu,
                                            ...props,
                                            children: [
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyMenuItem), {
                                                    children: "Subdialog Foo"
                                                }),
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyMenuItem), {
                                                    children: "Subdialog Bar"
                                                }),
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyMenuItem), {
                                                    children: "Subdialog Baz"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyMenuItem), {
                        children: "Option"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyMenuItem), {
                        children: "Option with a space"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _separatorTsx.Separator), {
                style: {
                    borderTop: '1px solid gray',
                    margin: '2px 5px'
                }
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menuTsx.MenuSection), {
                className: (0, _indexCssDefault.default).group,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _headerTsx.Header), {
                        style: {
                            fontSize: '1.2em'
                        },
                        children: "Section 2"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _utilsTsx.MyMenuItem), {
                        textValue: "Copy",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                slot: "label",
                                children: "Copy"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                slot: "description",
                                children: "Description"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _keyboardTsx.Keyboard), {
                                children: "\u2318C"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _utilsTsx.MyMenuItem), {
                        textValue: "Cut",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                slot: "label",
                                children: "Cut"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                slot: "description",
                                children: "Description"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _keyboardTsx.Keyboard), {
                                children: "\u2318X"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _utilsTsx.MyMenuItem), {
                        textValue: "Paste",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                slot: "label",
                                children: "Paste"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                slot: "description",
                                children: "Description"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _keyboardTsx.Keyboard), {
                                children: "\u2318V"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
function AutocompleteWrapper(props) {
    let { contains } = (0, _useFilterTs.useFilter)({
        sensitivity: 'base'
    });
    let filter = (textValue, inputValue)=>contains(textValue, inputValue);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _autocompleteTsx.Autocomplete), {
        filter: filter,
        ...props
    });
}
const AutocompleteExample = {
    render: (args)=>{
        return /*#__PURE__*/ (0, _jsxRuntime.jsx)(AutocompleteWrapper, {
            disableVirtualFocus: args.disableVirtualFocus,
            children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _textFieldTsx.TextField), {
                        autoFocus: true,
                        "data-testid": "autocomplete-example",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                                style: {
                                    display: 'block'
                                },
                                children: "Test"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                style: {
                                    display: 'block'
                                },
                                slot: "description",
                                children: "Please select an option below."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(StaticMenu, {
                        ...args
                    })
                ]
            })
        });
    },
    name: 'Autocomplete complex static with textfield'
};
const AutocompleteSearchfield = {
    render: (args)=>{
        return /*#__PURE__*/ (0, _jsxRuntime.jsx)(AutocompleteWrapper, {
            defaultValue: "Ba",
            disableVirtualFocus: args.disableVirtualFocus,
            children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _searchFieldTsx.SearchField), {
                        autoFocus: true,
                        "data-testid": "autocomplete-example",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                                style: {
                                    display: 'block'
                                },
                                children: "Test"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                style: {
                                    display: 'block'
                                },
                                slot: "description",
                                children: "Please select an option below."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(StaticMenu, {
                        ...args
                    })
                ]
            })
        });
    },
    name: 'Autocomplete complex static with searchfield',
    parameters: {
        description: {
            data: 'Note that on mobile, trying to type into the subdialog inputs may cause scrolling and thus cause the subdialog to close. Please test in landscape mode.'
        }
    }
};
const AutocompleteFocusRecovery = {
    render: (args)=>{
        return /*#__PURE__*/ (0, _jsxRuntime.jsx)(AutocompleteWrapper, {
            disableVirtualFocus: args.disableVirtualFocus,
            children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _textFieldTsx.TextField), {
                        autoFocus: true,
                        "data-testid": "autocomplete-focus-recovery",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                                style: {
                                    display: 'block'
                                },
                                children: "Test"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                style: {
                                    display: 'block'
                                },
                                slot: "description",
                                children: "Focus the input, move virtual focus to an option, then click the input again."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(StaticMenu, {
                        ...args
                    })
                ]
            })
        });
    },
    name: 'Autocomplete focus recovery after virtual focus',
    parameters: {
        description: {
            data: 'Manual check: focus the input, hover or keyboard navigate to an option, then click the input again. The input should regain focused styling and the active descendant should clear.'
        }
    }
};
// Note that the trigger items in this array MUST have an id, even if the underlying MenuItem might apply its own
// id. If it is omitted, we can't build the collection node for the trigger node and an error will throw
let dynamicAutocompleteSubdialog = [
    {
        name: 'Section 1',
        isSection: true,
        children: [
            {
                name: 'Command Palette'
            },
            {
                name: 'Open View'
            }
        ]
    },
    {
        name: 'Section 2',
        isSection: true,
        children: [
            {
                name: 'Appearance',
                id: 'appearance',
                children: [
                    {
                        name: 'Sub Section 1',
                        isSection: true,
                        children: [
                            {
                                name: 'Move Primary Side Bar Right'
                            },
                            {
                                name: 'Activity Bar Position',
                                id: 'activity',
                                isMenu: true,
                                children: [
                                    {
                                        name: 'Default'
                                    },
                                    {
                                        name: 'Top'
                                    },
                                    {
                                        name: 'Bottom'
                                    },
                                    {
                                        name: 'Hidden'
                                    },
                                    {
                                        name: 'Subdialog test',
                                        id: 'sub',
                                        children: [
                                            {
                                                name: 'A'
                                            },
                                            {
                                                name: 'B'
                                            },
                                            {
                                                name: 'C'
                                            },
                                            {
                                                name: 'D'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'Submenu test',
                                        id: 'sub2',
                                        isMenu: true,
                                        children: [
                                            {
                                                name: 'A'
                                            },
                                            {
                                                name: 'B'
                                            },
                                            {
                                                name: 'C'
                                            },
                                            {
                                                name: 'D'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'Panel Position',
                                id: 'position',
                                children: [
                                    {
                                        name: 'Top'
                                    },
                                    {
                                        name: 'Left'
                                    },
                                    {
                                        name: 'Right'
                                    },
                                    {
                                        name: 'Bottom'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Editor Layout',
                id: 'editor',
                children: [
                    {
                        name: 'Sub Section 1',
                        isSection: true,
                        children: [
                            {
                                name: 'Split up'
                            },
                            {
                                name: 'Split down'
                            },
                            {
                                name: 'Split left'
                            },
                            {
                                name: 'Split right'
                            }
                        ]
                    },
                    {
                        name: 'Sub Section 2',
                        isSection: true,
                        children: [
                            {
                                name: 'Single'
                            },
                            {
                                name: 'Two columns'
                            },
                            {
                                name: 'Three columns'
                            },
                            {
                                name: 'Two rows'
                            },
                            {
                                name: 'Three rows'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
let dynamicRenderTrigger = (item)=>{
    if (item.isMenu) return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menuTsx.SubmenuTrigger), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyMenuItem), {
                children: item.name
            }, item.name),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverTsx.Popover), {
                className: (0, _indexCssDefault.default).popover,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.Menu), {
                    items: item.children,
                    className: (0, _indexCssDefault.default).menu,
                    onAction: (0, _storyActionsTs.action)(`${item.name} onAction`),
                    children: (item)=>dynamicRenderFuncSections(item)
                })
            })
        ]
    });
    else return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menuTsx.SubmenuTrigger), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyMenuItem), {
                id: item.name,
                textValue: item.name,
                children: item.name
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverTsx.Popover), {
                style: {
                    background: 'Canvas',
                    color: 'CanvasText',
                    border: '1px solid gray',
                    padding: 5
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(AutocompleteWrapper, {
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _searchFieldTsx.SearchField), {
                            autoFocus: true,
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                                    style: {
                                        display: 'block'
                                    },
                                    children: "Search"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                    style: {
                                        display: 'block'
                                    },
                                    slot: "description",
                                    children: "Please select an option below."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.Menu), {
                            className: (0, _indexCssDefault.default).menu,
                            items: item.children,
                            onAction: (0, _storyActionsTs.action)(`${item.name} onAction`),
                            children: (item)=>dynamicRenderFuncSections(item)
                        })
                    ]
                })
            })
        ]
    });
};
let dynamicRenderItem = (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyMenuItem), {
        id: item.name,
        textValue: item.name,
        children: item.name
    });
let dynamicRenderFuncSections = (item)=>{
    if (item.children) {
        if (item.isSection) return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menuTsx.MenuSection), {
            className: (0, _indexCssDefault.default).group,
            id: item.name,
            items: item.children,
            children: [
                item.name != null && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _headerTsx.Header), {
                    style: {
                        fontSize: '1.2em'
                    },
                    children: item.name
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collectionTs.Collection), {
                    items: item.children ?? [],
                    children: (item)=>{
                        if (item.children) return dynamicRenderTrigger(item);
                        else return dynamicRenderItem(item);
                    }
                })
            ]
        });
        else return dynamicRenderTrigger(item);
    } else return dynamicRenderItem(item);
};
const AutocompleteMenuDynamic = {
    render: (args)=>{
        return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {}),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)(AutocompleteWrapper, {
                    disableVirtualFocus: args.disableVirtualFocus,
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _searchFieldTsx.SearchField), {
                                autoFocus: true,
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                                        style: {
                                            display: 'block'
                                        },
                                        children: "Test"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                        style: {
                                            display: 'block'
                                        },
                                        slot: "description",
                                        children: "Please select an option below."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.Menu), {
                                className: (0, _indexCssDefault.default).menu,
                                items: dynamicAutocompleteSubdialog,
                                ...args,
                                children: (item)=>dynamicRenderFuncSections(item)
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {})
            ]
        });
    },
    name: 'Autocomplete, dynamic menu'
};
const AutocompleteOnActionOnMenuItems = {
    render: (args)=>{
        return /*#__PURE__*/ (0, _jsxRuntime.jsx)(AutocompleteWrapper, {
            disableVirtualFocus: args.disableVirtualFocus,
            children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _searchFieldTsx.SearchField), {
                        autoFocus: true,
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                                style: {
                                    display: 'block'
                                },
                                children: "Test"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                style: {
                                    display: 'block'
                                },
                                slot: "description",
                                children: "Please select an option below."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menuTsx.Menu), {
                        className: (0, _indexCssDefault.default).menu,
                        ...args,
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyMenuItem), {
                                onAction: (0, _storyActionsTs.action)('Foo action'),
                                children: "Foo"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyMenuItem), {
                                onAction: (0, _storyActionsTs.action)('Bar action'),
                                children: "Bar"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyMenuItem), {
                                onAction: (0, _storyActionsTs.action)('Baz action'),
                                children: "Baz"
                            })
                        ]
                    })
                ]
            })
        });
    },
    name: 'Autocomplete, onAction on menu items'
};
let items = [
    {
        id: '1',
        name: 'Foo'
    },
    {
        id: '2',
        name: 'Bar'
    },
    {
        id: '3',
        name: 'Baz'
    }
];
const AutocompleteDisabledKeys = {
    render: (args)=>{
        return /*#__PURE__*/ (0, _jsxRuntime.jsx)(AutocompleteWrapper, {
            disableVirtualFocus: args.disableVirtualFocus,
            children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _searchFieldTsx.SearchField), {
                        autoFocus: true,
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                                style: {
                                    display: 'block'
                                },
                                children: "Test"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                style: {
                                    display: 'block'
                                },
                                slot: "description",
                                children: "Please select an option below."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.Menu), {
                        className: (0, _indexCssDefault.default).menu,
                        items: items,
                        disabledKeys: [
                            '2'
                        ],
                        ...args,
                        children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyMenuItem), {
                                id: item.id,
                                children: item.name
                            })
                    })
                ]
            })
        });
    },
    name: 'Autocomplete, disabled key'
};
const AsyncExample = (args)=>{
    let list = (0, _useAsyncListTs.useAsyncList)({
        async load ({ filterText }) {
            let json = await new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve(filterText ? items.filter((item)=>{
                        let name = item.name.toLowerCase();
                        for (let filterChar of filterText.toLowerCase()){
                            if (!name.includes(filterChar)) return false;
                            name = name.replace(filterChar, '');
                        }
                        return true;
                    }) : items);
                }, 300);
            });
            return {
                items: json
            };
        }
    });
    let { onSelectionChange, selectionMode, includeLoadState, escapeKeyBehavior, disableVirtualFocus } = args;
    let renderEmptyState;
    if (includeLoadState) renderEmptyState = list.isLoading ? ()=>'Loading' : ()=>'No results found.';
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _autocompleteTsx.Autocomplete), {
        inputValue: list.filterText,
        onInputChange: list.setFilterText,
        disableVirtualFocus: disableVirtualFocus,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _searchFieldTsx.SearchField), {
                    autoFocus: true,
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                            style: {
                                display: 'block'
                            },
                            children: "Test"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                            style: {
                                display: 'block'
                            },
                            slot: "description",
                            children: "Please select an option below."
                        })
                    ]
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _listBoxTsx.ListBox), {
                    escapeKeyBehavior: escapeKeyBehavior,
                    renderEmptyState: renderEmptyState,
                    items: includeLoadState && list.isLoading ? [] : list.items,
                    className: (0, _indexCssDefault.default).menu,
                    onSelectionChange: onSelectionChange,
                    selectionMode: selectionMode,
                    children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                            children: item.name
                        })
                })
            ]
        })
    });
};
const AutocompleteAsyncLoadingExample = {
    render: (args)=>{
        return /*#__PURE__*/ (0, _jsxRuntime.jsx)(AsyncExample, {
            ...args
        });
    },
    name: 'Autocomplete, useAsync level filtering with load state',
    args: {
        includeLoadState: true
    }
};
const CaseSensitiveFilter = (args)=>{
    let { contains } = (0, _useFilterTs.useFilter)({
        sensitivity: 'case'
    });
    let defaultFilter = (itemText, input)=>contains(itemText, input);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _autocompleteTsx.Autocomplete), {
        filter: defaultFilter,
        disableVirtualFocus: args.disableVirtualFocus,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _searchFieldTsx.SearchField), {
                    autoFocus: true,
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                            style: {
                                display: 'block'
                            },
                            children: "Test"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                            style: {
                                display: 'block'
                            },
                            slot: "description",
                            children: "Please select an option below."
                        })
                    ]
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.Menu), {
                    className: (0, _indexCssDefault.default).menu,
                    items: items,
                    ...args,
                    children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyMenuItem), {
                            id: item.id,
                            children: item.name
                        })
                })
            ]
        })
    });
};
const AutocompleteCaseSensitive = {
    render: (args)=>{
        return /*#__PURE__*/ (0, _jsxRuntime.jsx)(CaseSensitiveFilter, {
            ...args
        });
    },
    name: 'Autocomplete, case sensitive filter'
};
const AutocompleteWithListbox = {
    render: (args)=>{
        return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _dialogTsx.DialogTrigger), {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                    children: "Open popover"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverTsx.Popover), {
                    placement: "bottom start",
                    style: {
                        background: 'Canvas',
                        color: 'CanvasText',
                        border: '1px solid gray',
                        padding: 20,
                        height: 250
                    },
                    children: ()=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(AutocompleteWrapper, {
                            defaultInputValue: "Ba",
                            disableVirtualFocus: args.disableVirtualFocus,
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _searchFieldTsx.SearchField), {
                                        autoFocus: true,
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                                                style: {
                                                    display: 'block'
                                                },
                                                children: "Test"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                                style: {
                                                    display: 'block'
                                                },
                                                slot: "description",
                                                children: "Please select an option below."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _listBoxTsx.ListBox), {
                                        className: (0, _indexCssDefault.default).menu,
                                        ...args,
                                        "aria-label": "test listbox with section",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _listBoxTsx.ListBoxSection), {
                                                className: (0, _indexCssDefault.default).group,
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _headerTsx.Header), {
                                                        style: {
                                                            fontSize: '1.2em'
                                                        },
                                                        children: "Section 1"
                                                    }),
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
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _separatorTsx.Separator), {
                                                style: {
                                                    borderTop: '1px solid gray',
                                                    margin: '2px 5px'
                                                }
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _listBoxTsx.ListBoxSection), {
                                                className: (0, _indexCssDefault.default).group,
                                                "aria-label": "Section 2",
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                                                        children: "Copy"
                                                    }),
                                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                                                        children: "Paste"
                                                    }),
                                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                                                        children: "Cut"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                })
            ]
        });
    },
    name: 'Autocomplete with ListBox + Popover'
};
const AutocompleteSelectAllFiltering = {
    render: (args)=>{
        return /*#__PURE__*/ (0, _jsxRuntime.jsx)(AutocompleteWrapper, {
            disableVirtualFocus: args.disableVirtualFocus,
            children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _searchFieldTsx.SearchField), {
                        autoFocus: true,
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                                style: {
                                    display: 'block'
                                },
                                children: "Test"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {})
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _listBoxTsx.ListBox), {
                        className: (0, _indexCssDefault.default).menu,
                        items: items,
                        selectionMode: "multiple",
                        defaultSelectedKeys: "all",
                        onSelectionChange: (0, _storyActionsTs.action)('onSelectionChange'),
                        children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                                id: item.id,
                                children: item.name
                            })
                    })
                ]
            })
        });
    },
    name: 'Autocomplete, select all with filtering'
};
function VirtualizedListBox(props) {
    let items = [];
    for(let i = 0; i < 10000; i++)items.push({
        id: i,
        name: `Item ${i}`
    });
    let list = (0, _useListDataTs.useListData)({
        initialItems: items
    });
    let { onSelectionChange, selectionMode, escapeKeyBehavior } = props;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _virtualizerTsx.Virtualizer), {
        layout: (0, _useVirtualizerStateTs.ListLayout),
        layoutOptions: {
            rowHeight: 25
        },
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _listBoxTsx.ListBox), {
            escapeKeyBehavior: escapeKeyBehavior,
            onSelectionChange: onSelectionChange,
            selectionMode: selectionMode,
            className: (0, _indexCssDefault.default).menu,
            style: {
                height: 200
            },
            "aria-label": "virtualized listbox",
            items: list.items,
            children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                    children: item.name
                })
        })
    });
}
const AutocompleteWithVirtualizedListbox = {
    render: (args)=>{
        return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _dialogTsx.DialogTrigger), {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                    children: "Open popover"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverTsx.Popover), {
                    placement: "bottom start",
                    style: {
                        background: 'Canvas',
                        color: 'CanvasText',
                        border: '1px solid gray',
                        padding: 20,
                        height: 250
                    },
                    children: ()=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(AutocompleteWrapper, {
                            disableVirtualFocus: args.disableVirtualFocus,
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _searchFieldTsx.SearchField), {
                                        autoFocus: true,
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                                                style: {
                                                    display: 'block'
                                                },
                                                children: "Test"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                                style: {
                                                    display: 'block'
                                                },
                                                slot: "description",
                                                children: "Please select an option below."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(VirtualizedListBox, {
                                        ...args
                                    })
                                ]
                            })
                        })
                })
            ]
        });
    },
    name: 'Autocomplete with ListBox + Popover, virtualized'
};
let lotsOfSections = [];
for(let i = 0; i < 50; i++){
    let children = [];
    for(let j = 0; j < 50; j++)children.push({
        name: `Section ${i}, Item ${j}`,
        id: `item_${i}_${j}`
    });
    lotsOfSections.push({
        name: 'Section ' + i,
        id: `section_${i}`,
        children
    });
}
lotsOfSections = [
    {
        name: 'Recently visited',
        id: 'recent',
        children: []
    }
].concat(lotsOfSections);
function ShellExample() {
    let tree = (0, _useTreeDataTs.useTreeData)({
        initialItems: lotsOfSections,
        getKey: (item)=>item.id,
        getChildren: (item)=>item.children || null
    });
    let onSelectionChange = (keys)=>{
        tree.move([
            ...keys
        ][0], 'recent', 0);
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _virtualizerTsx.Virtualizer), {
        layout: (0, _useVirtualizerStateTs.ListLayout),
        layoutOptions: {
            rowHeight: 25,
            headingHeight: 25
        },
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _listBoxTsx.ListBox), {
            onSelectionChange: onSelectionChange,
            selectionMode: "single",
            className: (0, _indexCssDefault.default).menu,
            style: {
                height: 200
            },
            "aria-label": "virtualized listbox",
            items: tree.items,
            children: (section)=>{
                return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _listBoxTsx.ListBoxSection), {
                    id: section.value.id,
                    className: (0, _indexCssDefault.default).group,
                    children: [
                        section.value.name != null && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _headerTsx.Header), {
                            style: {
                                fontSize: '1.2em'
                            },
                            children: section.value.name
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collectionTs.Collection), {
                            items: section.children ?? [],
                            children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                                    id: item.value.id,
                                    children: item.value.name
                                })
                        })
                    ]
                });
            }
        })
    });
}
const AutocompleteInPopover = {
    render: ()=>{
        return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menuTsx.MenuTrigger), {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                    children: "Open popover"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverTsx.Popover), {
                    placement: "bottom start",
                    style: {
                        background: 'Canvas',
                        color: 'CanvasText',
                        border: '1px solid gray',
                        padding: 20,
                        height: 250
                    },
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(AutocompleteWrapper, {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _searchFieldTsx.SearchField), {
                                    autoFocus: true,
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                                            style: {
                                                display: 'block'
                                            },
                                            children: "Test"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                            style: {
                                                display: 'block'
                                            },
                                            slot: "description",
                                            children: "Please select an option below."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)(ShellExample, {})
                            ]
                        })
                    })
                })
            ]
        });
    },
    name: 'Autocomplete in popover (menu trigger), shell example',
    argTypes: {
        selectionMode: {
            table: {
                disable: true
            }
        }
    },
    parameters: {
        description: {
            data: 'Menu is single selection so only the latest selected option will show the selected style'
        }
    }
};
const AutocompleteInPopoverDialogTrigger = {
    render: ()=>{
        return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _dialogTsx.DialogTrigger), {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                    children: "Open popover"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverTsx.Popover), {
                    placement: "bottom start",
                    style: {
                        background: 'Canvas',
                        color: 'CanvasText',
                        border: '1px solid gray',
                        padding: 20,
                        height: 250
                    },
                    children: ()=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(AutocompleteWrapper, {
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _searchFieldTsx.SearchField), {
                                        autoFocus: true,
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                                                style: {
                                                    display: 'block'
                                                },
                                                children: "Test"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                                style: {
                                                    display: 'block'
                                                },
                                                slot: "description",
                                                children: "Please select an option below."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(ShellExample, {})
                                ]
                            })
                        })
                })
            ]
        });
    },
    name: 'Autocomplete in popover (dialog trigger), shell example',
    argTypes: {
        selectionMode: {
            table: {
                disable: true
            }
        }
    },
    parameters: {
        description: {
            data: 'Menu is single selection so only the latest selected option will show the selected style'
        }
    }
};
const MyMenu = ()=>{
    let { contains } = (0, _useFilterTs.useFilter)({
        sensitivity: 'base'
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menuTsx.MenuTrigger), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                "aria-label": "Menu",
                children: "\u2630"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _popoverTsx.Popover), {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                        children: "First"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                        children: "Second"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _autocompleteTsx.Autocomplete), {
                        filter: contains,
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textFieldTsx.TextField), {
                                autoFocus: true,
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {})
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menuTsx.Menu), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.MenuItem), {
                                        onAction: ()=>console.log('open'),
                                        children: "Open"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.MenuItem), {
                                        onAction: ()=>console.log('rename'),
                                        children: "Rename\u2026"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.MenuItem), {
                                        onAction: ()=>console.log('duplicate'),
                                        children: "Duplicate"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.MenuItem), {
                                        onAction: ()=>console.log('share'),
                                        children: "Share\u2026"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.MenuItem), {
                                        onAction: ()=>console.log('delete'),
                                        children: "Delete\u2026"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const MyMenu2 = ()=>{
    let { contains } = (0, _useFilterTs.useFilter)({
        sensitivity: 'base'
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menuTsx.MenuTrigger), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                "aria-label": "Menu",
                children: "\u2630"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _popoverTsx.Popover), {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _autocompleteTsx.Autocomplete), {
                        filter: contains,
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textFieldTsx.TextField), {
                                autoFocus: true,
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {})
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menuTsx.Menu), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.MenuItem), {
                                        onAction: ()=>console.log('open'),
                                        children: "Open"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.MenuItem), {
                                        onAction: ()=>console.log('rename'),
                                        children: "Rename\u2026"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.MenuItem), {
                                        onAction: ()=>console.log('duplicate'),
                                        children: "Duplicate"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.MenuItem), {
                                        onAction: ()=>console.log('share'),
                                        children: "Share\u2026"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.MenuItem), {
                                        onAction: ()=>console.log('delete'),
                                        children: "Delete\u2026"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                        children: "First"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                        children: "Second"
                    })
                ]
            })
        ]
    });
};
function AutocompleteWithExtraButtons() {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {}),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                style: {
                    display: 'flex',
                    gap: '200px'
                },
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(MyMenu, {}),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(MyMenu2, {})
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {})
        ]
    });
}
const AutocompleteMenuInPopoverDialogTrigger = {
    render: (args)=>{
        return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _dialogTsx.DialogTrigger), {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                    children: "Open popover"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverTsx.Popover), {
                    placement: "bottom start",
                    style: {
                        background: 'Canvas',
                        color: 'CanvasText',
                        border: '1px solid gray',
                        padding: 20,
                        height: 250
                    },
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(AutocompleteWrapper, {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _searchFieldTsx.SearchField), {
                                    autoFocus: true,
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                                            style: {
                                                display: 'block'
                                            },
                                            children: "Test"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                                            style: {
                                                display: 'block'
                                            },
                                            slot: "description",
                                            children: "Please select an option below."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.Menu), {
                                    ...args,
                                    className: (0, _indexCssDefault.default).menu,
                                    items: dynamicAutocompleteSubdialog,
                                    children: (item)=>dynamicRenderFuncSections(item)
                                })
                            ]
                        })
                    })
                })
            ]
        });
    },
    name: 'Autocomplete in popover (dialog trigger), rendering dynamic autocomplete menu',
    argTypes: {
        selectionMode: {
            table: {
                disable: true
            }
        }
    }
};
let manyItems = [
    ...Array(100)
].map((_, i)=>({
        id: i,
        name: `Item ${i}`
    }));
const AutocompleteSelect = ()=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _selectTsx.Select), {
        style: {
            marginBottom: 40
        },
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                style: {
                    display: 'block'
                },
                children: "Test"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _buttonTsx.Button), {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _selectTsx.SelectValue), {}),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                        "aria-hidden": "true",
                        style: {
                            paddingLeft: 5
                        },
                        children: "\u25BC"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverTsx.Popover), {
                style: {
                    background: 'Canvas',
                    border: '1px solid ButtonBorder',
                    padding: 5,
                    boxSizing: 'border-box',
                    display: 'flex'
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _autocompleteTsx.Autocomplete), {
                    filter: (0, _useFilterTs.useFilter)({
                        sensitivity: 'base'
                    }).contains,
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _searchFieldTsx.SearchField), {
                            "aria-label": "Search",
                            autoFocus: true,
                            style: {
                                display: 'flex',
                                flexDirection: 'column'
                            },
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {})
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _listBoxTsx.ListBox), {
                            items: manyItems,
                            className: (0, _indexCssDefault.default).menu,
                            style: {
                                flex: 1
                            },
                            children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                                    children: item.name
                                })
                        })
                    ]
                })
            })
        ]
    });
let renderEmptyState = (list, cursor)=>{
    let emptyStateContent;
    if (list.loadingState === 'loading') emptyStateContent = /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.LoadingSpinner), {
        style: {
            height: 20,
            width: 20,
            transform: 'translate(-50%, -50%)'
        }
    });
    else if (list.loadingState === 'idle' && !cursor) emptyStateContent = 'No results';
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        style: {
            height: 30,
            width: '100%'
        },
        children: emptyStateContent
    });
};
const AutocompleteWithAsyncListBox = (args)=>{
    let [cursor, setCursor] = (0, _react.useState)(null);
    let list = (0, _useAsyncListTs.useAsyncList)({
        async load ({ signal, cursor, filterText }) {
            if (cursor) cursor = cursor.replace(/^http:\/\//i, 'https://');
            await new Promise((resolve)=>setTimeout(resolve, args.delay));
            let res = await fetch(cursor || `https://swapi.py4e.com/api/people/?search=${filterText}`, {
                signal
            });
            let json = await res.json();
            setCursor(json.next);
            return {
                items: json.results,
                cursor: json.next
            };
        }
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(AutocompleteWrapper, {
        disableVirtualFocus: args.disableVirtualFocus,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _textFieldTsx.TextField), {
                    autoFocus: true,
                    "data-testid": "autocomplete-example",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                            style: {
                                display: 'block'
                            },
                            children: "Test"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                            style: {
                                display: 'block'
                            },
                            slot: "description",
                            children: "Please select an option below."
                        })
                    ]
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _virtualizerTsx.Virtualizer), {
                    layout: (0, _useVirtualizerStateTs.ListLayout),
                    layoutOptions: {
                        rowHeight: 50,
                        padding: 4,
                        loaderHeight: 30
                    },
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _listBoxTsx.ListBox), {
                        ...args,
                        style: {
                            height: 400,
                            width: 100,
                            border: '1px solid gray',
                            background: 'lightgray',
                            overflow: 'auto',
                            padding: 'unset',
                            display: 'flex'
                        },
                        "aria-label": "async virtualized listbox",
                        renderEmptyState: ()=>renderEmptyState(list, cursor),
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collectionTs.Collection), {
                                items: list.items,
                                children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                                        style: {
                                            backgroundColor: 'lightgrey',
                                            border: '1px solid black',
                                            boxSizing: 'border-box',
                                            height: '100%',
                                            width: '100%'
                                        },
                                        id: item.name,
                                        children: item.name
                                    })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _listBoxStoriesTsx.MyListBoxLoaderIndicator), {
                                isLoading: list.loadingState === 'loadingMore',
                                onLoadMore: list.loadMore
                            })
                        ]
                    })
                })
            ]
        })
    });
};
AutocompleteWithAsyncListBox.story = {
    args: {
        delay: 50
    }
};
const AutocompleteWithGridList = ()=>{
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(AutocompleteWrapper, {
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _textFieldTsx.TextField), {
                    autoFocus: true,
                    "data-testid": "autocomplete-example",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                            style: {
                                display: 'block'
                            },
                            children: "Test"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {})
                    ]
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListTsx.GridList), {
                    className: (0, _indexCssDefault.default).menu,
                    style: {
                        height: 200,
                        width: 200
                    },
                    "aria-label": "test gridlist",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListTsx.GridListSection), {
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _gridListTsx.GridListHeader), {
                                    children: "Section 1"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListStoriesTsx.MyGridListItem), {
                                    textValue: "Foo",
                                    children: [
                                        "Foo ",
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                            children: "Actions"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListStoriesTsx.MyGridListItem), {
                                    textValue: "Bar",
                                    children: [
                                        "Bar ",
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                            children: "Actions"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListStoriesTsx.MyGridListItem), {
                                    textValue: "Baz",
                                    children: [
                                        "Baz ",
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                            children: "Actions"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListTsx.GridListSection), {
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _gridListTsx.GridListHeader), {
                                    children: "Section 2"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListStoriesTsx.MyGridListItem), {
                                    textValue: "Charizard",
                                    children: [
                                        "Charizard",
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                            children: "Actions"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListStoriesTsx.MyGridListItem), {
                                    textValue: "Blastoise",
                                    children: [
                                        "Blastoise ",
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                            children: "Actions"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListStoriesTsx.MyGridListItem), {
                                    textValue: "Pikachu",
                                    children: [
                                        "Pikachu ",
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                            children: "Actions"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListStoriesTsx.MyGridListItem), {
                                    textValue: "Venusaur",
                                    children: [
                                        "Venusaur",
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                            children: "Actions"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListTsx.GridListSection), {
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _gridListTsx.GridListHeader), {
                                    children: "Section 3"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListStoriesTsx.MyGridListItem), {
                                    textValue: "text value check",
                                    children: [
                                        'textValue is "text value check" ',
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                            children: "Actions"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListStoriesTsx.MyGridListItem), {
                                    textValue: "Blah",
                                    children: [
                                        "Blah ",
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                            children: "Actions"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
const AutocompleteWithTable = ()=>{
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(AutocompleteWrapper, {
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _textFieldTsx.TextField), {
                    autoFocus: true,
                    "data-testid": "autocomplete-example",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                            style: {
                                display: 'block'
                            },
                            children: "Test"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {})
                    ]
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _virtualizerTsx.Virtualizer), {
                    layout: (0, _tableLayoutTs.TableLayout),
                    layoutOptions: {
                        rowHeight: 25,
                        headingHeight: 25,
                        padding: 10
                    },
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableTsx.Table), {
                        "aria-label": "Files",
                        selectionMode: "multiple",
                        style: {
                            height: 400,
                            width: 400,
                            overflow: 'auto',
                            scrollPaddingTop: 25
                        },
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableTsx.TableHeader), {
                                style: {
                                    background: 'var(--spectrum-gray-100)',
                                    width: '100%',
                                    height: '100%'
                                },
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Column), {
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableStoriesTsx.MyCheckbox), {
                                            slot: "selection"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Column), {
                                        isRowHeader: true,
                                        children: "Name"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Column), {
                                        children: "Type"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Column), {
                                        children: "Date Modified"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableTsx.TableBody), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableTsx.Row), {
                                        id: "1",
                                        style: {
                                            width: 'inherit',
                                            height: 'inherit'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableStoriesTsx.MyCheckbox), {
                                                    slot: "selection"
                                                })
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                                children: "Games"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                                children: "File folder"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                                children: "6/7/2020"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableTsx.Row), {
                                        id: "2",
                                        style: {
                                            width: 'inherit',
                                            height: 'inherit'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableStoriesTsx.MyCheckbox), {
                                                    slot: "selection"
                                                })
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                                children: "Program Files"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                                children: "File folder"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                                children: "4/7/2021"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableTsx.Row), {
                                        id: "3",
                                        style: {
                                            width: 'inherit',
                                            height: 'inherit'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableStoriesTsx.MyCheckbox), {
                                                    slot: "selection"
                                                })
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                                children: "bootmgr"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                                children: "System file"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                                children: "11/20/2010"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableTsx.Row), {
                                        id: "4",
                                        style: {
                                            width: 'inherit',
                                            height: 'inherit'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableStoriesTsx.MyCheckbox), {
                                                    slot: "selection"
                                                })
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                                children: "log.txt"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                                children: "Text Document"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                                children: "1/18/2016"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
const AutocompleteWithTagGroup = ()=>{
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(AutocompleteWrapper, {
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _textFieldTsx.TextField), {
                    autoFocus: true,
                    "data-testid": "autocomplete-example",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                            style: {
                                display: 'block'
                            },
                            children: "Test"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {})
                    ]
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroupTsx.TagGroup), {
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                            children: "Categories"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroupTsx.TagList), {
                            style: {
                                display: 'flex',
                                gap: 4
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tagGroupStoriesTsx.MyTag), {
                                    href: "https://nytimes.com",
                                    children: "News"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tagGroupStoriesTsx.MyTag), {
                                    children: "Travel"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tagGroupStoriesTsx.MyTag), {
                                    children: "Gaming"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tooltipTsx.TooltipTrigger), {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tagGroupStoriesTsx.MyTag), {
                                            children: "Shopping"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tooltipTsx.Tooltip), {
                                            offset: 5,
                                            style: {
                                                background: 'Canvas',
                                                color: 'CanvasText',
                                                border: '1px solid gray',
                                                padding: 5,
                                                borderRadius: 4
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _overlayArrowTsx.OverlayArrow), {
                                                    style: {
                                                        transform: 'translateX(-50%)'
                                                    },
                                                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("svg", {
                                                        width: "8",
                                                        height: "8",
                                                        style: {
                                                            display: 'block'
                                                        },
                                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                                                            d: "M0 0L4 4L8 0",
                                                            fill: "white",
                                                            strokeWidth: 1,
                                                            stroke: "gray"
                                                        })
                                                    })
                                                }),
                                                "I am a tooltip"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
function AutocompleteNodeFiltering(args) {
    let { contains } = (0, _useFilterTs.useFilter)({
        sensitivity: 'base'
    });
    let filter = (textValue, inputValue, node)=>{
        if (node.parentKey === 'Section 1' && textValue === 'Open View' || node.parentKey === 'Section 2' && textValue === 'Appearance') return true;
        return contains(textValue, inputValue);
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _autocompleteTsx.Autocomplete), {
        filter: filter,
        disableVirtualFocus: args.disableVirtualFocus,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _searchFieldTsx.SearchField), {
                    autoFocus: true,
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                            style: {
                                display: 'block'
                            },
                            children: "Test"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                            style: {
                                display: 'block'
                            },
                            slot: "description",
                            children: "Please select an option below."
                        })
                    ]
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.Menu), {
                    ...args,
                    className: (0, _indexCssDefault.default).menu,
                    items: dynamicAutocompleteSubdialog,
                    children: (item)=>dynamicRenderFuncSections(item)
                })
            ]
        })
    });
}
const AutocompletePreserveFirstSectionStory = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(AutocompleteNodeFiltering, {
            ...args
        }),
    name: 'Autocomplete, per node filtering',
    parameters: {
        description: {
            data: 'It should never filter out Open View or Appearance'
        }
    }
};
let names = [
    {
        id: 1,
        name: 'David'
    },
    {
        id: 2,
        name: 'Sam'
    },
    {
        id: 3,
        name: 'Julia'
    }
];
const UserCustomFiltering = (args)=>{
    let [value, setValue] = (0, _react.useState)('');
    let { contains } = (0, _useFilterTs.useFilter)({
        sensitivity: 'base'
    });
    let filter = (textValue, inputValue)=>{
        let index = inputValue.lastIndexOf('@');
        let filterText = '';
        if (index > -1) filterText = value.slice(index + 1);
        return contains(textValue, filterText);
    };
    let onAction = (key)=>{
        let index = value.lastIndexOf('@');
        if (index === -1) index = value.length;
        let name = names.find((person)=>person.id === key).name;
        setValue(value.slice(0, index).concat(name));
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _autocompleteTsx.Autocomplete), {
        inputValue: value,
        onInputChange: setValue,
        filter: filter,
        disableVirtualFocus: args.disableVirtualFocus,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _textFieldTsx.TextField), {
                    autoFocus: true,
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                            style: {
                                display: 'block'
                            },
                            children: "Test"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textAreaTsx.TextArea), {}),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                            style: {
                                display: 'block'
                            },
                            slot: "description",
                            children: "Please select an option below."
                        })
                    ]
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _listBoxTsx.ListBox), {
                    ...args,
                    className: (0, _indexCssDefault.default).menu,
                    items: names,
                    "aria-label": "test listbox with sections",
                    onAction: onAction,
                    children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                            id: item.id,
                            children: item.name
                        })
                })
            ]
        })
    });
};
const AutocompleteUserCustomFiltering = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(UserCustomFiltering, {
            ...args
        }),
    name: 'Autocomplete, user custom filterText (mentions)',
    parameters: {
        description: {
            data: 'It should only filter if you type @, using the remainder of the string after the @ symbol as the filter text'
        }
    }
};
function AutocompleteGrid() {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(AutocompleteWrapper, {
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _textFieldTsx.TextField), {
                    autoFocus: true,
                    "data-testid": "autocomplete-example",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                            style: {
                                display: 'block'
                            },
                            children: "Test"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {}),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                            style: {
                                display: 'block'
                            },
                            slot: "description",
                            children: "Please select an option below."
                        })
                    ]
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _listBoxTsx.ListBox), {
                    className: (0, _indexCssDefault.default).menu,
                    "aria-label": "test listbox",
                    layout: "grid",
                    orientation: "vertical",
                    style: {
                        width: 300,
                        height: 300,
                        display: 'grid',
                        gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
                        gridAutoFlow: 'row'
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            children: "1,1"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            children: "1,2"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            children: "1,3"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            children: "2,1"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            children: "2,2"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            children: "2,3"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            children: "3,1"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            children: "3,2"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.MyListBoxItem), {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            children: "3,3"
                        })
                    ]
                })
            ]
        })
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../../story-actions.ts":"8bOu8","../../../../../../vendor/react-aria-components/src/Autocomplete.tsx":"dHgny","../../../../../../vendor/react-aria-components/src/Button.tsx":"enBVm","../../../../../../vendor/react-aria-components/src/Table.tsx":"1eqrw","../../../../../../vendor/react-aria/exports/Collection.ts":"kFD1B","../../../../../../vendor/react-aria-components/src/Dialog.tsx":"aPHDk","../../../../../../vendor/react-aria-components/src/GridList.tsx":"9cL5r","../../../../../../vendor/react-aria-components/src/Header.tsx":"f1ESp","../../../../../../vendor/react-aria-components/src/Input.tsx":"BUyo9","../../../../../../vendor/react-aria-components/src/Keyboard.tsx":"7HtYj","../../../../../../vendor/react-aria-components/src/Label.tsx":"eI7Ae","../../../../../../vendor/react-aria-components/src/ListBox.tsx":"l68rZ","../../../../../../vendor/react-stately/exports/useVirtualizerState.ts":"3ty3M","./utils.tsx":"oeVON","../../../../../../vendor/react-aria-components/src/Menu.tsx":"70BZW","./Table.stories.tsx":"jJIFW","./GridList.stories.tsx":"bvGQn","./ListBox.stories.tsx":"lMkkD","./TagGroup.stories.tsx":"jKbgQ","../../../../../../vendor/react-aria-components/src/OverlayArrow.tsx":"7uQK8","../../../../../../vendor/react-aria-components/src/Popover.tsx":"i9eo9","react":"gOP0N","../../../../../../vendor/react-aria-components/src/SearchField.tsx":"2mk6K","../../../../../../vendor/react-aria-components/src/Select.tsx":"2aXh0","../../../../../../vendor/react-aria-components/src/Separator.tsx":"cuuaI","../example/index.css":"9vxXE","../../../../../../vendor/react-aria-components/src/TableLayout.ts":"1nFcj","../../../../../../vendor/react-aria-components/src/TagGroup.tsx":"ixV7h","../../../../../../vendor/react-aria-components/src/Text.tsx":"cfMV9","../../../../../../vendor/react-aria-components/src/TextArea.tsx":"f7gqs","../../../../../../vendor/react-aria-components/src/TextField.tsx":"fVWme","../../../../../../vendor/react-aria-components/src/Tooltip.tsx":"2eBkl","../../../../../../vendor/react-stately/exports/useAsyncList.ts":"fbj2f","../../../../../../vendor/react-aria/exports/useFilter.ts":"9huVw","../../../../../../vendor/react-stately/exports/useListData.ts":"iS6HG","../../../../../../vendor/react-stately/exports/useTreeData.ts":"f0HfO","../../../../../../vendor/react-aria-components/src/Virtualizer.tsx":"9H3Eo","./styles.css":"9cXWn","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2mk6K":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "SearchFieldContext", ()=>SearchFieldContext);
parcelHelpers.export(exports, "SearchField", ()=>SearchField);
var _jsxRuntime = require("preact/jsx-runtime");
var _useSearchField = require("react-aria/useSearchField");
var _button = require("./Button");
var _utils = require("./utils");
var _hidden = require("react-aria/private/collections/Hidden");
var _fieldError = require("./FieldError");
var _autocomplete = require("./Autocomplete");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _form = require("./Form");
var _group = require("./Group");
var _input = require("./Input");
var _label = require("./Label");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useSearchFieldState = require("react-stately/useSearchFieldState");
var _text = require("./Text");
const SearchFieldContext = /*#__PURE__*/ (0, _react.createContext)(null);
const SearchField = /*#__PURE__*/ (0, _hidden.createHideableComponent)(function SearchField(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, SearchFieldContext);
    let { validationBehavior: formValidationBehavior } = (0, _utils.useSlottedContext)((0, _form.FormContext)) || {};
    let validationBehavior = props.validationBehavior ?? formValidationBehavior ?? 'native';
    let inputRef = (0, _react.useRef)(null);
    [props, inputRef] = (0, _utils.useContextProps)(props, inputRef, (0, _autocomplete.FieldInputContext));
    let [labelRef, label] = (0, _utils.useSlot)(!props['aria-label'] && !props['aria-labelledby']);
    let state = (0, _useSearchFieldState.useSearchFieldState)({
        ...props,
        validationBehavior
    });
    let { labelProps, inputProps, clearButtonProps, descriptionProps, errorMessageProps, ...validation } = (0, _useSearchField.useSearchField)({
        ...(0, _utils.removeDataAttributes)(props),
        label,
        validationBehavior
    }, state, inputRef);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: {
            isEmpty: state.value === '',
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid || false,
            isReadOnly: props.isReadOnly || false,
            isRequired: props.isRequired || false,
            state
        },
        defaultClassName: 'react-aria-SearchField'
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-empty": state.value === '' || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": validation.isInvalid || undefined,
        "data-readonly": props.isReadOnly || undefined,
        "data-required": props.isRequired || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
            values: [
                [
                    (0, _label.LabelContext),
                    {
                        ...labelProps,
                        ref: labelRef
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
                    (0, _button.ButtonContext),
                    clearButtonProps
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
                        isInvalid: validation.isInvalid,
                        isDisabled: props.isDisabled || false
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

},{"preact/jsx-runtime":"b2Fbn","react-aria/useSearchField":"tzURz","./Button":"enBVm","./utils":"jtWJJ","react-aria/private/collections/Hidden":"iPJX7","./FieldError":"5KSCU","./Autocomplete":"dHgny","react-aria/filterDOMProps":"h4XHF","./Form":"aEFv9","./Group":"2mugT","./Input":"BUyo9","./Label":"eI7Ae","react":"gOP0N","react-stately/useSearchFieldState":"79XXk","./Text":"cfMV9","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"tzURz":[function(require,module,exports,__globalThis) {
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

},{"../utils/useControlledState":"8yNBD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2aXh0":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "SelectContext", ()=>SelectContext);
parcelHelpers.export(exports, "SelectStateContext", ()=>SelectStateContext);
parcelHelpers.export(exports, "Select", ()=>Select);
parcelHelpers.export(exports, "SelectValueContext", ()=>SelectValueContext);
parcelHelpers.export(exports, "SelectValue", ()=>SelectValue);
var _jsxRuntime = require("preact/jsx-runtime");
var _useSelect = require("react-aria/useSelect");
var _button = require("./Button");
var _utils = require("./utils");
var _collectionBuilder = require("react-aria/CollectionBuilder");
var _hidden = require("react-aria/private/collections/Hidden");
var _fieldError = require("./FieldError");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _form = require("./Form");
var _indexJs = require("../intl/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _label = require("./Label");
var _listBox = require("./ListBox");
var _mergeProps = require("react-aria/mergeProps");
var _dialog = require("./Dialog");
var _popover = require("./Popover");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useSelectState = require("react-stately/useSelectState");
var _text = require("./Text");
var _useFocusRing = require("react-aria/useFocusRing");
var _useListFormatter = require("react-aria/useListFormatter");
var _useLocalizedStringFormatter = require("react-aria/useLocalizedStringFormatter");
const SelectContext = /*#__PURE__*/ (0, _react.createContext)(null);
const SelectStateContext = /*#__PURE__*/ (0, _react.createContext)(null);
const Select = /*#__PURE__*/ (0, _hidden.createHideableComponent)(function Select(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, SelectContext);
    let { children, isDisabled = false, isInvalid = false, isRequired = false } = props;
    let content = (0, _react.useMemo)(()=>typeof children === 'function' ? children({
            isOpen: false,
            isDisabled,
            isInvalid,
            isRequired,
            isFocused: false,
            isFocusVisible: false,
            defaultChildren: null
        }) : children, [
        children,
        isDisabled,
        isInvalid,
        isRequired
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collectionBuilder.CollectionBuilder), {
        content: content,
        children: (collection)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(SelectInner, {
                props: props,
                collection: collection,
                selectRef: ref
            })
    });
});
// Contexts to clear inside the popover.
const CLEAR_CONTEXTS = [
    (0, _label.LabelContext),
    (0, _button.ButtonContext),
    (0, _text.TextContext)
];
function SelectInner({ props, selectRef: ref, collection }) {
    let { validationBehavior: formValidationBehavior } = (0, _utils.useSlottedContext)((0, _form.FormContext)) || {};
    let validationBehavior = props.validationBehavior ?? formValidationBehavior ?? 'native';
    let state = (0, _useSelectState.useSelectState)({
        ...props,
        collection,
        children: undefined,
        validationBehavior
    });
    let { isFocusVisible, focusProps } = (0, _useFocusRing.useFocusRing)({
        within: true
    });
    // Get props for child elements from useSelect
    let buttonRef = (0, _react.useRef)(null);
    let [labelRef, label] = (0, _utils.useSlot)(!props['aria-label'] && !props['aria-labelledby']);
    let { labelProps, triggerProps, valueProps, menuProps, descriptionProps, errorMessageProps, hiddenSelectProps, ...validation } = (0, _useSelect.useSelect)({
        ...(0, _utils.removeDataAttributes)(props),
        label,
        validationBehavior
    }, state, buttonRef);
    // Only expose a subset of state to renderProps function to avoid infinite render loop
    let renderPropsState = (0, _react.useMemo)(()=>({
            isOpen: state.isOpen,
            isFocused: state.isFocused,
            isFocusVisible,
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid || false,
            isRequired: props.isRequired || false
        }), [
        state.isOpen,
        state.isFocused,
        isFocusVisible,
        props.isDisabled,
        validation.isInvalid,
        props.isRequired
    ]);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: renderPropsState,
        defaultClassName: 'react-aria-Select'
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    let scrollRef = (0, _react.useRef)(null);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
        values: [
            [
                SelectContext,
                props
            ],
            [
                SelectStateContext,
                state
            ],
            [
                SelectValueContext,
                valueProps
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
                (0, _button.ButtonContext),
                {
                    ...triggerProps,
                    ref: buttonRef,
                    isPressed: state.isOpen,
                    autoFocus: props.autoFocus
                }
            ],
            [
                (0, _dialog.OverlayTriggerStateContext),
                state
            ],
            [
                (0, _popover.PopoverContext),
                {
                    trigger: 'Select',
                    triggerRef: buttonRef,
                    scrollRef,
                    placement: 'bottom start',
                    'aria-labelledby': menuProps['aria-labelledby'],
                    clearContexts: CLEAR_CONTEXTS
                }
            ],
            [
                (0, _listBox.ListBoxContext),
                {
                    ...menuProps,
                    ref: scrollRef
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
                (0, _fieldError.FieldErrorContext),
                validation
            ]
        ],
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _utils.dom).div, {
            ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, focusProps),
            ref: ref,
            slot: props.slot || undefined,
            "data-focused": state.isFocused || undefined,
            "data-focus-visible": isFocusVisible || undefined,
            "data-open": state.isOpen || undefined,
            "data-disabled": props.isDisabled || undefined,
            "data-invalid": validation.isInvalid || undefined,
            "data-required": props.isRequired || undefined,
            children: [
                renderProps.children,
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _useSelect.HiddenSelect), {
                    ...hiddenSelectProps,
                    autoComplete: props.autoComplete
                })
            ]
        })
    });
}
const SelectValueContext = /*#__PURE__*/ (0, _react.createContext)(null);
const SelectValue = /*#__PURE__*/ (0, _hidden.createHideableComponent)(function SelectValue(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, SelectValueContext);
    let state = (0, _react.useContext)(SelectStateContext);
    let { placeholder } = (0, _utils.useSlottedContext)(SelectContext);
    let rendered = state.selectedItems.map((item)=>{
        let rendered = item.props?.children;
        // If the selected item has a function as a child, we need to call it to render to React.JSX.
        if (typeof rendered === 'function') {
            let fn = rendered;
            rendered = fn({
                isHovered: false,
                isPressed: false,
                isSelected: false,
                isFocused: false,
                isFocusVisible: false,
                isDisabled: false,
                selectionMode: 'single',
                selectionBehavior: 'toggle'
            });
        }
        return rendered;
    });
    let formatter = (0, _useListFormatter.useListFormatter)();
    let textValue = (0, _react.useMemo)(()=>state.selectedItems.map((item)=>item?.textValue), [
        state.selectedItems
    ]);
    let selectionMode = state.selectionManager.selectionMode;
    let selectedText = (0, _react.useMemo)(()=>selectionMode === 'single' ? textValue[0] ?? '' : formatter.format(textValue), [
        selectionMode,
        formatter,
        textValue
    ]);
    let defaultChildren = (0, _react.useMemo)(()=>{
        if (selectionMode === 'single') return rendered[0];
        let parts = formatter.formatToParts(textValue);
        if (parts.length === 0) return null;
        let index = 0;
        return parts.map((part)=>{
            if (part.type === 'element') return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _react.Fragment), {
                children: rendered[index++]
            }, index);
            else return part.value;
        });
    }, [
        selectionMode,
        formatter,
        textValue,
        rendered
    ]);
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), 'react-aria-components');
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultChildren: defaultChildren ?? placeholder ?? stringFormatter.format('selectPlaceholder'),
        defaultClassName: 'react-aria-SelectValue',
        values: {
            selectedItem: state.selectedItems[0]?.value ?? null,
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
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).span, {
        ref: ref,
        ...DOMProps,
        ...renderProps,
        "data-placeholder": state.selectedItems.length === 0 || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _text.TextContext).Provider, {
            value: undefined,
            children: renderProps.children
        })
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/useSelect":[["HiddenSelect","9IY9J"],["useSelect","4uV10"]],"./Button":"enBVm","./utils":"jtWJJ","react-aria/CollectionBuilder":"kFD1B","react-aria/private/collections/Hidden":"iPJX7","./FieldError":"5KSCU","react-aria/filterDOMProps":"h4XHF","./Form":"aEFv9","../intl/index.js":"4xy5f","./Label":"eI7Ae","./ListBox":"l68rZ","react-aria/mergeProps":"jycxS","./Dialog":"aPHDk","./Popover":"i9eo9","react":"gOP0N","react-stately/useSelectState":"1fHuU","./Text":"cfMV9","react-aria/useFocusRing":"bP7um","react-aria/useListFormatter":"f0xdH","react-aria/useLocalizedStringFormatter":"8lll3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9IY9J":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a hidden `<select>` element, which
 * can be used in combination with `useSelect` to support browser form autofill, mobile form
 * navigation, and native HTML form submission.
 */ parcelHelpers.export(exports, "useHiddenSelect", ()=>useHiddenSelect);
/**
 * Renders a hidden native `<select>` element, which can be used to support browser
 * form autofill, mobile form navigation, and native form submission.
 */ parcelHelpers.export(exports, "HiddenSelect", ()=>HiddenSelect);
var _jsxRuntime = require("preact/jsx-runtime");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useSelect = require("./useSelect");
var _useFormReset = require("../utils/useFormReset");
var _useFormValidation = require("../form/useFormValidation");
var _visuallyHidden = require("../visually-hidden/VisuallyHidden");
function useHiddenSelect(props, state, triggerRef) {
    let data = (0, _useSelect.selectData).get(state) || {};
    let { autoComplete, name = data.name, form = data.form, isDisabled = data.isDisabled } = props;
    let { validationBehavior, isRequired } = data;
    let { visuallyHiddenProps } = (0, _visuallyHidden.useVisuallyHidden)({
        style: {
            // Prevent page scrolling.
            position: 'fixed',
            top: 0,
            left: 0
        }
    });
    (0, _useFormReset.useFormReset)(props.selectRef, state.defaultValue, state.setValue);
    (0, _useFormValidation.useFormValidation)({
        validationBehavior,
        focus: ()=>triggerRef.current?.focus()
    }, state, props.selectRef);
    let setValue = state.setValue;
    // Used for both onChange and onInput, so accept the common supertype of both event types.
    let onChange = (0, _react.useCallback)((e)=>{
        let eventTarget = (0, _domfunctions.getEventTarget)(e);
        if (eventTarget.multiple) setValue(Array.from(eventTarget.selectedOptions, (option)=>option.value));
        else setValue(e.currentTarget.value);
    }, [
        setValue
    ]);
    // In Safari, the <select> cannot have `display: none` or `hidden` for autofill to work.
    // In Firefox, there must be a <label> to identify the <select> whereas other browsers
    // seem to identify it just by surrounding text.
    // The solution is to use <VisuallyHidden> to hide the elements, which clips the elements to a
    // 1px rectangle. In addition, we hide from screen readers with aria-hidden, and make the <select>
    // non tabbable with tabIndex={-1}.
    return {
        containerProps: {
            ...visuallyHiddenProps,
            'aria-hidden': true,
            // @ts-ignore
            ['data-react-aria-prevent-focus']: true,
            // @ts-ignore
            ['data-a11y-ignore']: 'aria-hidden-focus'
        },
        inputProps: {
            style: {
                display: 'none'
            }
        },
        selectProps: {
            tabIndex: -1,
            autoComplete,
            disabled: isDisabled,
            multiple: state.selectionManager.selectionMode === 'multiple',
            required: validationBehavior === 'native' && isRequired,
            name,
            form,
            value: state.value ?? '',
            onChange,
            onInput: onChange
        }
    };
}
function HiddenSelect(props) {
    let { state, triggerRef, label, name, form, isDisabled } = props;
    let selectRef = (0, _react.useRef)(null);
    let inputRef = (0, _react.useRef)(null);
    let { containerProps, selectProps } = useHiddenSelect({
        ...props,
        selectRef: state.collection.size <= 300 ? selectRef : inputRef
    }, state, triggerRef);
    let values = Array.isArray(state.value) ? state.value : [
        state.value
    ];
    // If used in a <form>, use a hidden input so the value can be submitted to a server.
    // If the collection isn't too big, use a hidden <select> element for this so that browser
    // autofill will work. Otherwise, use an <input type="hidden">.
    if (state.collection.size <= 300) return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        ...containerProps,
        "data-testid": "hidden-select-container",
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("label", {
            children: [
                label,
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("select", {
                    ...selectProps,
                    ref: selectRef,
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                            value: "",
                            label: '\u00A0',
                            children: '\u00A0'
                        }),
                        [
                            ...state.collection.getKeys()
                        ].map((key)=>{
                            let item = state.collection.getItem(key);
                            if (item && item.type === 'item') return /*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                                value: item.key,
                                children: item.textValue
                            }, item.key);
                        }),
                        state.collection.size === 0 && name && values.map((value, i)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                                value: value ?? ''
                            }, i))
                    ]
                })
            ]
        })
    });
    else if (name) {
        let data = (0, _useSelect.selectData).get(state) || {};
        let { validationBehavior } = data;
        // Always render at least one hidden input to ensure required form submission.
        if (values.length === 0) values = [
            null
        ];
        let res = values.map((value, i)=>{
            let inputProps = {
                type: 'hidden',
                autoComplete: selectProps.autoComplete,
                name,
                form,
                disabled: isDisabled,
                value: value ?? ''
            };
            if (validationBehavior === 'native') // Use a hidden <input type="text"> rather than <input type="hidden">
            // so that an empty value blocks HTML form submission when the field is required.
            return /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                ...inputProps,
                ref: i === 0 ? inputRef : null,
                style: {
                    display: 'none'
                },
                type: "text",
                required: i === 0 ? selectProps.required : false,
                onChange: ()=>{
                /** Ignore react warning. */ }
            }, i);
            return /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                ...inputProps,
                ref: i === 0 ? inputRef : null
            }, i);
        });
        return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {
            children: res
        });
    }
    return null;
}

},{"preact/jsx-runtime":"b2Fbn","../utils/shadowdom/DOMFunctions":"8kfpz","react":"gOP0N","./useSelect":"4uV10","../utils/useFormReset":"iDQvZ","../form/useFormValidation":"kdUj8","../visually-hidden/VisuallyHidden":"cMf28","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4uV10":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "selectData", ()=>selectData);
/**
 * Provides the behavior and accessibility implementation for a select component.
 * A select displays a collapsible list of options and allows a user to select one of them.
 *
 * @param props - Props for the select.
 * @param state - State for the select, as returned by `useListState`.
 */ parcelHelpers.export(exports, "useSelect", ()=>useSelect);
var _chain = require("../utils/chain");
var _filterDOMProps = require("../utils/filterDOMProps");
var _react = require("react");
var _listKeyboardDelegate = require("../selection/ListKeyboardDelegate");
var _mergeProps = require("../utils/mergeProps");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _useCollator = require("../i18n/useCollator");
var _useField = require("../label/useField");
var _useId = require("../utils/useId");
var _useKeyboard = require("../interactions/useKeyboard");
var _useMenuTrigger = require("../menu/useMenuTrigger");
var _useTypeSelect = require("../selection/useTypeSelect");
const selectData = new WeakMap();
function useSelect(props, state, ref) {
    let { keyboardDelegate, isDisabled, isRequired, name, form, validationBehavior = 'aria' } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = (0, _useCollator.useCollator)({
        usage: 'search',
        sensitivity: 'base'
    });
    let delegate = (0, _react.useMemo)(()=>keyboardDelegate || new (0, _listKeyboardDelegate.ListKeyboardDelegate)(state.collection, state.disabledKeys, ref, collator), [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        collator,
        ref
    ]);
    let { menuTriggerProps, menuProps } = (0, _useMenuTrigger.useMenuTrigger)({
        isDisabled,
        type: 'listbox'
    }, state, ref);
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            ArrowLeft: ()=>{
                if (state.selectionManager.selectionMode === 'multiple') return false;
                let key = state.selectedKey != null ? delegate.getKeyAbove?.(state.selectedKey) : delegate.getFirstKey?.();
                if (key != null) state.setSelectedKey(key);
            },
            ArrowRight: ()=>{
                if (state.selectionManager.selectionMode === 'multiple') return false;
                let key = state.selectedKey != null ? delegate.getKeyBelow?.(state.selectedKey) : delegate.getFirstKey?.();
                if (key != null) state.setSelectedKey(key);
            }
        },
        allowRepeats: true,
        onKeyDown: props.onKeyDown,
        onKeyUp: props.onKeyUp
    });
    let { typeSelectProps } = (0, _useTypeSelect.useTypeSelect)({
        keyboardDelegate: delegate,
        selectionManager: state.selectionManager,
        onTypeSelect (key) {
            state.setSelectedKey(key);
        }
    });
    let { isInvalid, validationErrors, validationDetails } = state.displayValidation;
    let { labelProps, fieldProps, descriptionProps, errorMessageProps } = (0, _useField.useField)({
        ...props,
        labelElementType: 'span',
        isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    if (state.selectionManager.selectionMode === 'multiple') typeSelectProps = {};
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    let triggerProps = (0, _mergeProps.mergeProps)(typeSelectProps, menuTriggerProps, fieldProps);
    let valueId = (0, _useId.useId)();
    selectData.set(state, {
        isDisabled,
        isRequired,
        name,
        form,
        validationBehavior
    });
    return {
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                if (!props.isDisabled) {
                    ref.current?.focus();
                    // Show the focus ring so the user knows where focus went
                    (0, _useFocusVisible.setInteractionModality)('keyboard');
                }
            }
        },
        triggerProps: (0, _mergeProps.mergeProps)(domProps, {
            ...triggerProps,
            isDisabled,
            onKeyDown: (0, _chain.chain)(triggerProps.onKeyDown, keyboardProps.onKeyDown),
            onKeyUp: keyboardProps.onKeyUp,
            'aria-labelledby': [
                valueId,
                triggerProps['aria-labelledby'],
                triggerProps['aria-label'] && !triggerProps['aria-labelledby'] ? triggerProps.id : null
            ].filter(Boolean).join(' '),
            onFocus (e) {
                if (state.isFocused) return;
                if (props.onFocus) props.onFocus(e);
                if (props.onFocusChange) props.onFocusChange(true);
                state.setFocused(true);
            },
            onBlur (e) {
                if (state.isOpen) return;
                if (props.onBlur) props.onBlur(e);
                if (props.onFocusChange) props.onFocusChange(false);
                state.setFocused(false);
            }
        }),
        valueProps: {
            id: valueId
        },
        menuProps: {
            ...menuProps,
            onAction: undefined,
            autoFocus: state.focusStrategy || true,
            shouldSelectOnPressUp: true,
            shouldFocusOnHover: true,
            disallowEmptySelection: true,
            linkBehavior: 'selection',
            onBlur: (e)=>{
                if ((0, _domfunctions.nodeContains)(e.currentTarget, e.relatedTarget)) return;
                if (props.onBlur) props.onBlur(e);
                if (props.onFocusChange) props.onFocusChange(false);
                state.setFocused(false);
            },
            'aria-labelledby': [
                fieldProps['aria-labelledby'],
                triggerProps['aria-label'] && !fieldProps['aria-labelledby'] ? triggerProps.id : null
            ].filter(Boolean).join(' ')
        },
        descriptionProps,
        errorMessageProps,
        isInvalid,
        validationErrors,
        validationDetails,
        hiddenSelectProps: {
            isDisabled,
            name,
            label: props.label,
            state,
            triggerRef: ref,
            form
        }
    };
}

},{"../utils/chain":"bQmEj","../utils/filterDOMProps":"h4XHF","react":"gOP0N","../selection/ListKeyboardDelegate":"hxzwH","../utils/mergeProps":"jycxS","../utils/shadowdom/DOMFunctions":"8kfpz","../interactions/useFocusVisible":"aBfUW","../i18n/useCollator":"ghoIN","../label/useField":"5Oeu9","../utils/useId":"fQAcb","../interactions/useKeyboard":"aHm7i","../menu/useMenuTrigger":"9b4y8","../selection/useTypeSelect":"4tdKW","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1fHuU":[function(require,module,exports,__globalThis) {
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
 * Provides state management for a select component. Handles building a collection
 * of items from props, handles the open state for the popup menu, and manages
 * multiple selection state.
 */ parcelHelpers.export(exports, "useSelectState", ()=>useSelectState);
var _useFormValidationState = require("../form/useFormValidationState");
var _useListState = require("../list/useListState");
var _useOverlayTriggerState = require("../overlays/useOverlayTriggerState");
var _useControlledState = require("../utils/useControlledState");
var _react = require("react");
function useSelectState(props) {
    let { selectionMode = 'single', shouldCloseOnSelect = selectionMode === 'single' } = props;
    let triggerState = (0, _useOverlayTriggerState.useOverlayTriggerState)(props);
    let [focusStrategy, setFocusStrategy] = (0, _react.useState)(null);
    let defaultValue = (0, _react.useMemo)(()=>{
        return props.defaultValue !== undefined ? props.defaultValue : selectionMode === 'single' ? props.defaultSelectedKey ?? null : [];
    }, [
        props.defaultValue,
        props.defaultSelectedKey,
        selectionMode
    ]);
    let value = (0, _react.useMemo)(()=>{
        return props.value !== undefined ? props.value : selectionMode === 'single' ? props.selectedKey : undefined;
    }, [
        props.value,
        props.selectedKey,
        selectionMode
    ]);
    let [controlledValue, setControlledValue] = (0, _useControlledState.useControlledState)(value, defaultValue, props.onChange);
    // Only display the first selected item if in single selection mode but the value is an array.
    let displayValue = selectionMode === 'single' && Array.isArray(controlledValue) ? controlledValue[0] : controlledValue;
    let setValue = (value)=>{
        if (selectionMode === 'single') {
            let key = Array.isArray(value) ? value[0] ?? null : value;
            setControlledValue(key);
            if (key !== displayValue) props.onSelectionChange?.(key);
        } else {
            let keys = [];
            if (Array.isArray(value)) keys = value;
            else if (value != null) keys = [
                value
            ];
            setControlledValue(keys);
        }
    };
    // oxlint-disable-next-line react/react-compiler
    let listState = (0, _useListState.useListState)({
        ...props,
        selectionMode,
        disallowEmptySelection: selectionMode === 'single',
        allowDuplicateSelectionEvents: true,
        selectedKeys: (0, _react.useMemo)(()=>convertValue(displayValue), [
            displayValue
        ]),
        onSelectionChange: (keys)=>{
            // impossible, but TS doesn't know that
            if (keys === 'all') return;
            if (selectionMode === 'single') {
                let key = keys.values().next().value ?? null;
                setValue(key);
            } else setValue([
                ...keys
            ]);
            if (shouldCloseOnSelect) triggerState.close();
            validationState.commitValidation();
        }
    });
    let selectedKey = listState.selectionManager.firstSelectedKey;
    let selectedItems = (0, _react.useMemo)(()=>{
        return [
            ...listState.selectionManager.selectedKeys
        ].map((key)=>listState.collection.getItem(key)).filter((item)=>item != null);
    }, [
        listState.selectionManager.selectedKeys,
        listState.collection
    ]);
    let validationState = (0, _useFormValidationState.useFormValidationState)({
        ...props,
        value: Array.isArray(displayValue) && displayValue.length === 0 ? null : displayValue
    });
    let [isFocused, setFocused] = (0, _react.useState)(false);
    let [initialValue] = (0, _react.useState)(displayValue);
    return {
        ...validationState,
        ...listState,
        ...triggerState,
        value: displayValue,
        defaultValue: defaultValue ?? initialValue,
        setValue,
        selectedKey,
        setSelectedKey: setValue,
        selectedItem: selectedItems[0] ?? null,
        selectedItems,
        defaultSelectedKey: props.defaultSelectedKey ?? (props.selectionMode === 'single' ? initialValue : null),
        focusStrategy,
        open (focusStrategy = null) {
            // Don't open if the collection is empty.
            if (listState.collection.size !== 0 || props.allowsEmptyCollection) {
                setFocusStrategy(focusStrategy);
                triggerState.open();
            }
        },
        toggle (focusStrategy = null) {
            if (listState.collection.size !== 0 || props.allowsEmptyCollection) {
                setFocusStrategy(focusStrategy);
                triggerState.toggle();
            }
        },
        isFocused,
        setFocused
    };
}
function convertValue(value) {
    if (value === undefined) return undefined;
    if (value === null) return [];
    return Array.isArray(value) ? value : [
        value
    ];
}

},{"../form/useFormValidationState":"491YW","../list/useListState":"3g793","../overlays/useOverlayTriggerState":"457a8","../utils/useControlledState":"8yNBD","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

