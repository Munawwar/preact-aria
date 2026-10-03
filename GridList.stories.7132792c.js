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
})({"bvGQn":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "GridListExample", ()=>GridListExample);
parcelHelpers.export(exports, "MyGridListItem", ()=>MyGridListItem);
parcelHelpers.export(exports, "DraggableGridListExample", ()=>DraggableGridListExample);
parcelHelpers.export(exports, "GridListSectionExample", ()=>GridListSectionExample);
parcelHelpers.export(exports, "VirtualizedGridListSection", ()=>VirtualizedGridListSection);
parcelHelpers.export(exports, "VirtualizedGridList", ()=>VirtualizedGridList);
parcelHelpers.export(exports, "VirtualizedGridListGrid", ()=>VirtualizedGridListGrid);
parcelHelpers.export(exports, "VirtualizedGridDrag", ()=>VirtualizedGridDrag);
parcelHelpers.export(exports, "AsyncGridList", ()=>AsyncGridList);
parcelHelpers.export(exports, "AsyncGridListVirtualized", ()=>AsyncGridListVirtualized);
parcelHelpers.export(exports, "TagGroupInsideGridList", ()=>TagGroupInsideGridList);
parcelHelpers.export(exports, "GridListInModalPicker", ()=>GridListInModalPicker);
parcelHelpers.export(exports, "AsyncGridListGridVirtualized", ()=>AsyncGridListGridVirtualized);
parcelHelpers.export(exports, "GridListWithTextfield", ()=>GridListWithTextfield);
parcelHelpers.export(exports, "VirtualizedDisplayNoneToggle", ()=>VirtualizedDisplayNoneToggle);
var _jsxRuntime = require("preact/jsx-runtime");
var _storyActionsTs = require("../../../../../story-actions.ts");
var _buttonTsx = require("../../../../../../vendor/react-aria-components/src/Button.tsx");
var _checkboxTsx = require("../../../../../../vendor/react-aria-components/src/Checkbox.tsx");
var _classNamesTs = require("../../@adobe/react-spectrum/src/utils/classNames.ts");
var _collectionTs = require("../../../../../../vendor/react-aria/exports/Collection.ts");
var _comboBoxTsx = require("../../../../../../vendor/react-aria-components/src/ComboBox.tsx");
var _dialogTsx = require("../../../../../../vendor/react-aria-components/src/Dialog.tsx");
var _useDragAndDropTsx = require("../../../../../../vendor/react-aria-components/src/useDragAndDrop.tsx");
var _gridLayoutTs = require("../../../../../../vendor/react-aria-components/src/GridLayout.ts");
var _gridListTsx = require("../../../../../../vendor/react-aria-components/src/GridList.tsx");
var _headingTsx = require("../../../../../../vendor/react-aria-components/src/Heading.tsx");
var _inputTsx = require("../../../../../../vendor/react-aria-components/src/Input.tsx");
var _listBoxTsx = require("../../../../../../vendor/react-aria-components/src/ListBox.tsx");
var _useVirtualizerStateTs = require("../../../../../../vendor/react-stately/exports/useVirtualizerState.ts");
var _utilsTsx = require("./utils.tsx");
var _menuTsx = require("../../../../../../vendor/react-aria-components/src/Menu.tsx");
var _modalTsx = require("../../../../../../vendor/react-aria-components/src/Modal.tsx");
var _popoverTsx = require("../../../../../../vendor/react-aria-components/src/Popover.tsx");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexCss = require("../example/index.css");
var _indexCssDefault = parcelHelpers.interopDefault(_indexCss);
var _tagGroupTsx = require("../../../../../../vendor/react-aria-components/src/TagGroup.tsx");
var _textTsx = require("../../../../../../vendor/react-aria-components/src/Text.tsx");
var _textFieldTsx = require("../../../../../../vendor/react-aria-components/src/TextField.tsx");
var _toolbarTsx = require("../../../../../../vendor/react-aria-components/src/Toolbar.tsx");
var _useAsyncListTs = require("../../../../../../vendor/react-stately/exports/useAsyncList.ts");
var _useListDataTs = require("../../../../../../vendor/react-stately/exports/useListData.ts");
var _virtualizerTsx = require("../../../../../../vendor/react-aria-components/src/Virtualizer.tsx");
var _stylesCss = require("./styles.css");
var _radioGroupTsx = require("../../../../../../vendor/react-aria-components/src/RadioGroup.tsx");
exports.default = {
    title: 'React Aria Components/GridList',
    component: (0, _gridListTsx.GridList),
    excludeStories: [
        'MyGridListItem'
    ]
};
const GridListExample = (args)=>{
    let isHorizontalStack = args.orientation === 'horizontal' && args.layout !== 'grid';
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListTsx.GridList), {
        ...args,
        className: (0, _indexCssDefault.default).menu,
        "aria-label": "test gridlist",
        style: {
            width: isHorizontalStack ? undefined : 300,
            height: isHorizontalStack ? undefined : 300,
            display: isHorizontalStack ? 'flex' : 'grid',
            gridTemplate: args.layout === 'grid' ? 'repeat(3, 1fr) / repeat(3, 1fr)' : 'auto / 1fr',
            gridAutoFlow: args.orientation === 'horizontal' ? 'column' : 'row'
        },
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                textValue: "1,1",
                children: [
                    "1,1 ",
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                        children: "Actions"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                textValue: "1,2",
                children: [
                    "1,2 ",
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                        children: "Actions"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                textValue: "1,3",
                children: [
                    "1,3 ",
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                        children: "Actions"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                textValue: "2,1",
                children: [
                    "2,1 ",
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                        children: "Actions"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                textValue: "2,2",
                children: [
                    "2,2 ",
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                        children: "Actions"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                textValue: "2,3",
                children: [
                    "2,3 ",
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                        children: "Actions"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                textValue: "3,1",
                children: [
                    "3,1 ",
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                        children: "Actions"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                textValue: "3,2",
                children: [
                    "3,2 ",
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                        children: "Actions"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                textValue: "3,3",
                children: [
                    "3,3 ",
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                        children: "Actions"
                    })
                ]
            })
        ]
    });
};
const MyGridListItem = (props)=>{
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _gridListTsx.GridListItem), {
        ...props,
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: 8
        },
        className: ({ isFocused, isSelected, isHovered })=>(0, _classNamesTs.classNames)((0, _indexCssDefault.default), 'item', {
                focused: isFocused,
                selected: isSelected,
                hovered: isHovered
            }),
        children: ({ selectionMode, allowsDragging })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    allowsDragging && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                        slot: "drag",
                        children: "\u2261"
                    }),
                    selectionMode !== 'none' ? /*#__PURE__*/ (0, _jsxRuntime.jsx)(MyCheckbox, {
                        slot: "selection"
                    }) : null,
                    props.children
                ]
            })
    });
};
GridListExample.story = {
    args: {
        layout: 'stack',
        orientation: 'vertical',
        escapeKeyBehavior: 'clearSelection',
        shouldSelectOnPressUp: false,
        disallowTypeAhead: false
    },
    argTypes: {
        layout: {
            control: 'radio',
            options: [
                'stack',
                'grid'
            ]
        },
        orientation: {
            control: 'radio',
            options: [
                'vertical',
                'horizontal'
            ]
        },
        keyboardNavigationBehavior: {
            control: 'radio',
            options: [
                'arrow',
                'tab'
            ]
        },
        selectionMode: {
            control: 'radio',
            options: [
                'none',
                'single',
                'multiple'
            ]
        },
        selectionBehavior: {
            control: 'radio',
            options: [
                'toggle',
                'replace'
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
const DraggableGridListRender = (args)=>{
    let list = (0, _useListDataTs.useListData)({
        initialItems: [
            {
                id: '1',
                name: 'Item 1'
            },
            {
                id: '2',
                name: 'Item 2'
            },
            {
                id: '3',
                name: 'Item 3'
            },
            {
                id: '4',
                name: 'Item 4'
            },
            {
                id: '5',
                name: 'Item 5'
            }
        ]
    });
    let { dragAndDropHooks } = (0, _useDragAndDropTsx.useDragAndDrop)({
        getItems: (keys)=>[
                ...keys
            ].map((key)=>({
                    'text/plain': list.getItem(key)?.name ?? ''
                })),
        onReorder (e) {
            if (e.target.dropPosition === 'before') list.moveBefore(e.target.key, e.keys);
            else if (e.target.dropPosition === 'after') list.moveAfter(e.target.key, e.keys);
        }
    });
    let isHorizontal = args.orientation === 'horizontal';
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _gridListTsx.GridList), {
        className: (0, _indexCssDefault.default).menu,
        disabledKeys: [
            '3'
        ],
        "aria-label": "draggable gridlist",
        orientation: args.orientation,
        selectionMode: "multiple",
        dragAndDropHooks: dragAndDropHooks,
        items: list.items,
        style: {
            display: 'flex',
            flexDirection: isHorizontal ? 'row' : 'column',
            width: isHorizontal ? undefined : 300
        },
        children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(MyGridListItem, {
                children: item.name
            })
    });
};
const DraggableGridListExample = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(DraggableGridListRender, {
            ...args
        }),
    args: {
        orientation: 'vertical'
    },
    argTypes: {
        orientation: {
            control: 'radio',
            options: [
                'vertical',
                'horizontal'
            ]
        }
    }
};
const MyCheckbox = ({ children, ...props })=>{
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _checkboxTsx.Checkbox), {
        ...props,
        children: ({ isIndeterminate })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        className: "checkbox",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("svg", {
                            viewBox: "0 0 18 18",
                            "aria-hidden": "true",
                            children: isIndeterminate ? /*#__PURE__*/ (0, _jsxRuntime.jsx)("rect", {
                                x: 1,
                                y: 7.5,
                                width: 15,
                                height: 3
                            }) : /*#__PURE__*/ (0, _jsxRuntime.jsx)("polyline", {
                                points: "1 9 7 14 15 4"
                            })
                        })
                    }),
                    children
                ]
            })
    });
};
const GridListSectionExample = (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListTsx.GridList), {
        ...args,
        className: (0, _indexCssDefault.default).menu,
        "aria-label": "test gridlist",
        style: {
            width: 400,
            height: 400
        },
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListTsx.GridListSection), {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _gridListTsx.GridListHeader), {
                        children: "Section 1"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                        children: [
                            "1,1 ",
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                children: "Actions"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                        children: [
                            "1,2 ",
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                children: "Actions"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                        children: [
                            "1,3 ",
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
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                        children: [
                            "2,1 ",
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                children: "Actions"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                        children: [
                            "2,2 ",
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                children: "Actions"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                        children: [
                            "2,3 ",
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
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                        children: [
                            "3,1 ",
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                children: "Actions"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                        children: [
                            "3,2 ",
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                children: "Actions"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                        children: [
                            "3,3 ",
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                children: "Actions"
                            })
                        ]
                    })
                ]
            })
        ]
    });
GridListSectionExample.story = {
    args: {
        layout: 'stack',
        escapeKeyBehavior: 'clearSelection',
        shouldSelectOnPressUp: false
    },
    argTypes: {
        layout: {
            control: 'radio',
            options: [
                'stack',
                'grid'
            ]
        },
        keyboardNavigationBehavior: {
            control: 'radio',
            options: [
                'arrow',
                'tab'
            ]
        },
        selectionMode: {
            control: 'radio',
            options: [
                'none',
                'single',
                'multiple'
            ]
        },
        selectionBehavior: {
            control: 'radio',
            options: [
                'toggle',
                'replace'
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
function VirtualizedGridListSection() {
    let sections = [];
    for(let s = 0; s < 10; s++){
        let items = [];
        for(let i = 0; i < 3; i++)items.push({
            id: `item_${s}_${i}`,
            name: `Section ${s}, Item ${i}`
        });
        sections.push({
            id: `section_${s}`,
            name: `Section ${s}`,
            children: items
        });
    }
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _virtualizerTsx.Virtualizer), {
        layout: (0, _useVirtualizerStateTs.ListLayout),
        layoutOptions: {
            rowHeight: 25
        },
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _gridListTsx.GridList), {
            className: (0, _indexCssDefault.default).menu,
            // selectionMode="multiple"
            style: {
                height: 400
            },
            "aria-label": "virtualized with grid section",
            items: sections,
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collectionTs.Collection), {
                items: sections,
                children: (section)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListTsx.GridListSection), {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _gridListTsx.GridListHeader), {
                                children: section.name
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collectionTs.Collection), {
                                items: section.children,
                                children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(MyGridListItem, {
                                        children: item.name
                                    })
                            })
                        ]
                    })
            })
        })
    });
}
const VirtualizedGridListRender = (args)=>{
    let items = [];
    for(let i = 0; i < 10000; i++)items.push({
        id: i,
        name: `Item ${i}`
    });
    let list = (0, _useListDataTs.useListData)({
        initialItems: items
    });
    let { dragAndDropHooks } = (0, _useDragAndDropTsx.useDragAndDrop)({
        getItems: (keys)=>{
            return [
                ...keys
            ].map((key)=>({
                    'text/plain': list.getItem(key)?.name ?? ''
                }));
        },
        onReorder (e) {
            if (e.target.dropPosition === 'before') list.moveBefore(e.target.key, e.keys);
            else if (e.target.dropPosition === 'after') list.moveAfter(e.target.key, e.keys);
        },
        renderDropIndicator (target) {
            return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _useDragAndDropTsx.DropIndicator), {
                target: target,
                style: ({ isDropTarget })=>({
                        width: '100%',
                        height: '100%',
                        background: isDropTarget ? 'blue' : 'transparent'
                    })
            });
        }
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _virtualizerTsx.Virtualizer), {
        layout: (0, _useVirtualizerStateTs.ListLayout),
        layoutOptions: {
            rowHeight: 25
        },
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListTsx.GridList), {
            className: (0, _indexCssDefault.default).menu,
            selectionMode: "multiple",
            dragAndDropHooks: dragAndDropHooks,
            style: {
                height: 400
            },
            "aria-label": "virtualized gridlist",
            items: list.items,
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collectionTs.Collection), {
                    items: list.items,
                    children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(MyGridListItem, {
                            children: item.name
                        })
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)(MyGridListLoaderIndicator, {
                    isLoading: args.isLoading
                })
            ]
        })
    });
};
const VirtualizedGridList = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(VirtualizedGridListRender, {
            ...args
        }),
    args: {
        isLoading: false
    }
};
let VirtualizedGridListGrid = (args)=>{
    const { minItemSizeWidth = 40, maxItemSizeWidth = 65, maxColumns = Infinity, minHorizontalSpace = 0, maxHorizontalSpace = Infinity } = args;
    let items = [];
    for(let i = 0; i < 10000; i++)items.push({
        id: i,
        name: `Item ${i}`
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _virtualizerTsx.Virtualizer), {
        layout: (0, _gridLayoutTs.GridLayout),
        layoutOptions: {
            minItemSize: new (0, _useVirtualizerStateTs.Size)(minItemSizeWidth, 40),
            maxItemSize: new (0, _useVirtualizerStateTs.Size)(maxItemSizeWidth, 40),
            minSpace: new (0, _useVirtualizerStateTs.Size)(minHorizontalSpace, 18),
            maxColumns,
            maxHorizontalSpace
        },
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _gridListTsx.GridList), {
            className: (0, _indexCssDefault.default).menu,
            layout: "grid",
            style: {
                height: 400,
                width: 400
            },
            "aria-label": "virtualized listbox",
            items: items,
            children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(MyGridListItem, {
                    children: item.name
                })
        })
    });
};
VirtualizedGridListGrid.story = {
    args: {
        minItemSizeWidth: 40,
        maxItemSizeWidth: 65,
        maxColumns: undefined,
        minHorizontalSpace: 0,
        maxHorizontalSpace: undefined
    },
    argTypes: {
        minItemSizeWidth: {
            control: 'number',
            description: 'The minimum width of each item in the grid list',
            defaultValue: 40
        },
        maxItemSizeWidth: {
            control: 'number',
            description: 'Maximum width of each item in the grid list.',
            defaultValue: 65
        },
        maxColumns: {
            control: 'number',
            description: 'Maximum number of columns in the grid list.',
            defaultValue: undefined
        },
        minHorizontalSpace: {
            control: 'number',
            description: 'Minimum horizontal space between grid items.',
            defaultValue: 0
        },
        maxHorizontalSpace: {
            control: 'number',
            description: 'Maximum horizontal space between grid items.',
            defaultValue: undefined
        }
    }
};
function VirtualizedGridDnD() {
    let initialItems = [];
    for(let i = 0; i < 50; i++)initialItems.push({
        id: i,
        name: `Item ${i}`
    });
    let list = (0, _useListDataTs.useListData)({
        initialItems
    });
    let { dragAndDropHooks } = (0, _useDragAndDropTsx.useDragAndDrop)({
        getItems: (keys)=>[
                ...keys
            ].map((key)=>({
                    'text/plain': list.getItem(key)?.name ?? ''
                })),
        onReorder (e) {
            if (e.target.dropPosition === 'before') list.moveBefore(e.target.key, e.keys);
            else if (e.target.dropPosition === 'after') list.moveAfter(e.target.key, e.keys);
        },
        renderDropIndicator (target) {
            return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _useDragAndDropTsx.DropIndicator), {
                target: target,
                style: ({ isDropTarget })=>({
                        width: '100%',
                        height: '100%',
                        background: isDropTarget ? 'red' : 'transparent'
                    })
            });
        }
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _virtualizerTsx.Virtualizer), {
        layout: (0, _gridLayoutTs.GridLayout),
        layoutOptions: {
            minItemSize: new (0, _useVirtualizerStateTs.Size)(120, 120),
            maxItemSize: new (0, _useVirtualizerStateTs.Size)(120, 120),
            minSpace: new (0, _useVirtualizerStateTs.Size)(20, 20),
            dropIndicatorThickness: 4
        },
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _gridListTsx.GridList), {
            className: (0, _indexCssDefault.default).menu,
            layout: "grid",
            selectionMode: "multiple",
            dragAndDropHooks: dragAndDropHooks,
            style: {
                height: 500,
                width: 600,
                border: '1px solid gray'
            },
            "aria-label": "grid layout dnd",
            items: list.items,
            children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _gridListTsx.GridListItem), {
                    textValue: item.name,
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid blue',
                        background: 'white'
                    },
                    children: item.name
                })
        })
    });
}
let VirtualizedGridDrag = {
    render: ()=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(VirtualizedGridDnD, {}),
    parameters: {
        description: {
            data: 'test rtl and ltr dnd, the drop indicators should be positioned properly'
        }
    }
};
let renderEmptyState = ({ isLoading })=>{
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        style: {
            height: 30,
            width: '100%'
        },
        children: isLoading ? /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.LoadingSpinner), {
            style: {
                height: 20,
                width: 20,
                transform: 'translate(-50%, -50%)'
            }
        }) : 'No results'
    });
};
const MyGridListLoaderIndicator = (props)=>{
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _gridListTsx.GridListLoadMoreItem), {
        style: {
            height: 30,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        ...props,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utilsTsx.LoadingSpinner), {
            style: {
                height: 20,
                width: 20,
                position: 'unset'
            }
        })
    });
};
function AsyncGridListRender(props) {
    let list = (0, _useAsyncListTs.useAsyncList)({
        async load ({ signal, cursor, filterText }) {
            if (cursor) cursor = cursor.replace(/^http:\/\//i, 'https://');
            await new Promise((resolve)=>setTimeout(resolve, props.delay));
            let res = await fetch(cursor || `https://swapi.py4e.com/api/people/?search=${filterText}`, {
                signal
            });
            let json = await res.json();
            return {
                items: json.results,
                cursor: json.next
            };
        }
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListTsx.GridList), {
        className: (0, _indexCssDefault.default).menu,
        style: {
            height: 200
        },
        "aria-label": "async gridlist",
        renderEmptyState: ()=>renderEmptyState({
                isLoading: list.isLoading
            }),
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collectionTs.Collection), {
                items: list.items,
                children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(MyGridListItem, {
                        id: item.name,
                        children: item.name
                    })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(MyGridListLoaderIndicator, {
                isLoading: list.loadingState === 'loadingMore',
                onLoadMore: list.loadMore
            })
        ]
    });
}
let AsyncGridList = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(AsyncGridListRender, {
            ...args
        }),
    args: {
        delay: 50
    }
};
function AsyncGridListVirtualizedRender(props) {
    let list = (0, _useAsyncListTs.useAsyncList)({
        async load ({ signal, cursor, filterText }) {
            if (cursor) cursor = cursor.replace(/^http:\/\//i, 'https://');
            await new Promise((resolve)=>setTimeout(resolve, props.delay));
            let res = await fetch(cursor || `https://swapi.py4e.com/api/people/?search=${filterText}`, {
                signal
            });
            let json = await res.json();
            return {
                items: json.results,
                cursor: json.next
            };
        }
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _virtualizerTsx.Virtualizer), {
        layout: (0, _useVirtualizerStateTs.ListLayout),
        layoutOptions: {
            rowHeight: 25,
            loaderHeight: 30
        },
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListTsx.GridList), {
            className: (0, _indexCssDefault.default).menu,
            style: {
                height: 200
            },
            "aria-label": "async virtualized gridlist",
            renderEmptyState: ()=>renderEmptyState({
                    isLoading: list.isLoading
                }),
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collectionTs.Collection), {
                    items: list.items,
                    children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(MyGridListItem, {
                            id: item.name,
                            children: item.name
                        })
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)(MyGridListLoaderIndicator, {
                    isLoading: list.loadingState === 'loadingMore',
                    onLoadMore: list.loadMore
                })
            ]
        })
    });
}
let AsyncGridListVirtualized = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(AsyncGridListVirtualizedRender, {
            ...args
        }),
    args: {
        delay: 50
    }
};
let TagGroupInsideGridList = ()=>{
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListTsx.GridList), {
        className: (0, _indexCssDefault.default).menu,
        "aria-label": "Grid list with tag group",
        keyboardNavigationBehavior: "tab",
        style: {
            width: 300,
            height: 300
        },
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                textValue: "Tags",
                children: [
                    "1,1",
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tagGroupTsx.TagGroup), {
                        "aria-label": "Tag group 1",
                        onRemove: (0, _storyActionsTs.action)('onRemove'),
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroupTsx.TagList), {
                            style: {
                                display: 'flex',
                                gap: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroupTsx.Tag), {
                                    children: [
                                        "Tag 1",
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                            slot: "remove",
                                            children: "X"
                                        })
                                    ]
                                }, "1"),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroupTsx.Tag), {
                                    children: [
                                        "Tag 2",
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                            slot: "remove",
                                            children: "X"
                                        })
                                    ]
                                }, "2"),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroupTsx.Tag), {
                                    children: [
                                        "Tag 3",
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                            slot: "remove",
                                            children: "X"
                                        })
                                    ]
                                }, "3")
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tagGroupTsx.TagGroup), {
                        "aria-label": "Tag group 2",
                        onRemove: (0, _storyActionsTs.action)('onRemove'),
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroupTsx.TagList), {
                            style: {
                                display: 'flex',
                                gap: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroupTsx.Tag), {
                                    children: [
                                        "Tag 1",
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                            slot: "remove",
                                            children: "X"
                                        })
                                    ]
                                }, "1"),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroupTsx.Tag), {
                                    children: [
                                        "Tag 2",
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                            slot: "remove",
                                            children: "X"
                                        })
                                    ]
                                }, "2"),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroupTsx.Tag), {
                                    children: [
                                        "Tag 3",
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                            slot: "remove",
                                            children: "X"
                                        })
                                    ]
                                }, "3")
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                children: [
                    "1,2 ",
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                        children: "Actions"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                children: [
                    "1,3",
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tagGroupTsx.TagGroup), {
                        "aria-label": "Tag group",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroupTsx.TagList), {
                            style: {
                                display: 'flex',
                                gap: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tagGroupTsx.Tag), {
                                    children: "Tag 1"
                                }, "1"),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tagGroupTsx.Tag), {
                                    children: "Tag 2"
                                }, "2"),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tagGroupTsx.Tag), {
                                    children: "Tag 3"
                                }, "3")
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
const GridListDropdown = ()=>{
    const [isOpen, setIsOpen] = (0, _react.useState)(false);
    const [selectedItem, setSelectedItem] = (0, _react.useState)(new Set([]));
    const handleSelectionChange = (e)=>{
        setSelectedItem(e);
        setIsOpen(false);
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _dialogTsx.DialogTrigger), {
        isOpen: isOpen,
        onOpenChange: setIsOpen,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                children: "Open GridList Options"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverTsx.Popover), {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListTsx.GridList), {
                        className: (0, _indexCssDefault.default).menu,
                        selectedKeys: selectedItem,
                        "aria-label": "Favorite pokemon",
                        selectionMode: "single",
                        onSelectionChange: handleSelectionChange,
                        shouldSelectOnPressUp: true,
                        autoFocus: true,
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                                textValue: "Charizard",
                                children: [
                                    "Option 1 ",
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                        children: "A"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                                textValue: "Blastoise",
                                children: [
                                    "Option 2 ",
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                        children: "B"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                                textValue: "Venusaur",
                                children: [
                                    "Option 3 ",
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                        children: "C"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                                textValue: "Pikachu",
                                children: [
                                    "Option 4 ",
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                        children: "D"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
function GridListInModalPickerRender(props) {
    const [mainModalOpen, setMainModalOpen] = (0, _react.useState)(true);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                onPress: ()=>setMainModalOpen(true),
                children: "Open Modal"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _modalTsx.ModalOverlay), {
                ...props,
                isOpen: mainModalOpen,
                onOpenChange: setMainModalOpen,
                isDismissable: true,
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.5)'
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _modalTsx.Modal), {
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _dialogTsx.Dialog), {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 8,
                                background: '#ccc',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%,-50%)',
                                width: 'max-content',
                                height: 'max-content'
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _headingTsx.Heading), {
                                    slot: "title",
                                    children: "Open the GridList Picker"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)(GridListDropdown, {})
                            ]
                        })
                    })
                })
            })
        ]
    });
}
let GridListInModalPicker = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(GridListInModalPickerRender, {
            ...args
        }),
    parameters: {
        docs: {
            description: {
                component: 'Selecting an option from the grid list over the backdrop should not result in the modal closing.'
            }
        }
    }
};
function AsyncGridListGridVirtualizedRender(props) {
    const list = (0, _useAsyncListTs.useAsyncList)({
        async load ({ cursor, items, signal }) {
            const page = cursor || 1;
            await new Promise((resolve)=>setTimeout(resolve, props.delay));
            const res = await fetch(`https://api.unsplash.com/topics/nature/photos?page=${page}&per_page=30&client_id=AJuU-FPh11hn7RuumUllp4ppT8kgiLS7LtOHp_sp4nc`, {
                signal
            });
            let nextItems = await res.json();
            // Filter duplicates which might be returned by the API.
            const existingKeys = new Set(items.map((i)=>i.id));
            nextItems = nextItems.filter((i)=>!existingKeys.has(i.id) && (i.description || i.alt_description));
            return {
                cursor: nextItems.length ? page + 1 : null,
                items: nextItems
            };
        }
    });
    const layout = props.layout === 'waterfall' ? (0, _useVirtualizerStateTs.WaterfallLayout) : (0, _gridLayoutTs.GridLayout);
    const loadingState = props.loadingState === 'idle' ? list.loadingState : props.loadingState;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _virtualizerTsx.Virtualizer), {
        layout: layout,
        layoutOptions: {
            loaderHeight: props.loaderHeight,
            maxItemSize: new (0, _useVirtualizerStateTs.Size)(140, 140),
            minItemSize: new (0, _useVirtualizerStateTs.Size)(100, 100),
            minSpace: new (0, _useVirtualizerStateTs.Size)(6, 6)
        },
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListTsx.GridList), {
            "aria-label": "async virtualized gridlist",
            className: (0, _indexCssDefault.default).menu,
            layout: "grid",
            renderEmptyState: ()=>renderEmptyState({
                    isLoading: list.isLoading
                }),
            style: {
                height: 400,
                width: 400
            },
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collectionTs.Collection), {
                    items: list.items,
                    children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListTsx.GridListItem), {
                            style: {
                                display: 'flex',
                                flexDirection: 'column'
                            },
                            textValue: item.description || item.alt_description,
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("img", {
                                    alt: "",
                                    width: item.width,
                                    height: item.height,
                                    src: item.urls.regular,
                                    style: {
                                        height: 200,
                                        objectFit: 'cover',
                                        width: '100%'
                                    }
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _textTsx.Text), {
                                    slot: "description",
                                    children: [
                                        "By ",
                                        item.user.name
                                    ]
                                })
                            ]
                        })
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)(MyGridListLoaderIndicator, {
                    isLoading: loadingState === 'loadingMore',
                    onLoadMore: loadingState === 'idle' ? list.loadMore : undefined
                })
            ]
        })
    });
}
const AsyncGridListGridVirtualized = {
    render: AsyncGridListGridVirtualizedRender,
    args: {
        delay: 50,
        layout: 'grid',
        loaderHeight: 30,
        loadingState: 'idle'
    },
    argTypes: {
        delay: {
            control: 'number'
        },
        layout: {
            control: 'select',
            options: [
                'grid',
                'waterfall'
            ]
        },
        loaderHeight: {
            control: 'number'
        },
        loadingState: {
            control: 'select',
            options: [
                'idle',
                'loadingMore'
            ]
        }
    }
};
let comboboxEmptyState = ()=>{
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        style: {
            height: 30,
            width: '100%'
        },
        children: "No results"
    });
};
const GridListWithTextfieldRender = (args)=>{
    let isHorizontalStack = args.orientation === 'horizontal' && args.layout !== 'grid';
    let { autoFocusChildren, keyboardNavigationBehavior, ...otherArgs } = args;
    let focusMode = autoFocusChildren && keyboardNavigationBehavior === 'tab' ? 'child' : undefined;
    let allowsArrowNavigation = autoFocusChildren && keyboardNavigationBehavior === 'tab' ? true : undefined;
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        style: {
            display: 'flex',
            flexDirection: 'column'
        },
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                "aria-label": "input before gridlist"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _gridListTsx.GridList), {
                className: (0, _indexCssDefault.default).menu,
                "aria-label": "gridlist with textfield",
                keyboardNavigationBehavior: keyboardNavigationBehavior,
                style: {
                    width: isHorizontalStack ? undefined : 400,
                    height: isHorizontalStack ? undefined : 400,
                    display: isHorizontalStack ? 'flex' : 'grid',
                    gridTemplate: args.layout === 'grid' ? 'repeat(3, 1fr) / repeat(3, 1fr)' : 'auto / 1fr',
                    gridAutoFlow: args.orientation === 'horizontal' ? 'column' : 'row'
                },
                ...otherArgs,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                        textValue: "Rac TextField",
                        focusMode: focusMode,
                        children: [
                            "RAC TextField",
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textFieldTsx.TextField), {
                                "aria-label": "Name",
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                        textValue: "Rac input",
                        focusMode: focusMode,
                        children: [
                            "Raw input ",
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                                "aria-label": "Raw text input",
                                style: {
                                    marginLeft: 4
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                        textValue: "TextField + Button",
                        focusMode: focusMode,
                        children: [
                            "TextField + Button",
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textFieldTsx.TextField), {
                                "aria-label": "Search",
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {})
                            }),
                            ' ',
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                children: "Go"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                        textValue: "Combobox",
                        focusMode: focusMode,
                        children: [
                            "ComboBox",
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _comboBoxTsx.ComboBox), {
                                "aria-label": "combobox",
                                allowsEmptyCollection: true,
                                children: [
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
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverTsx.Popover), {
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _listBoxTsx.ListBox), {
                                            renderEmptyState: comboboxEmptyState,
                                            "data-testid": "combo-box-list-box",
                                            className: (0, _indexCssDefault.default).menu,
                                            style: {
                                                width: 'var(--trigger-width)'
                                            },
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
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                        textValue: "Toolbar",
                        focusMode: focusMode,
                        children: [
                            "Toolbar",
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _toolbarTsx.Toolbar), {
                                "aria-label": "Text formatting",
                                style: {
                                    gap: 4
                                },
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                        onPress: (0, _storyActionsTs.action)('Bold press'),
                                        children: "Bold"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                        onPress: (0, _storyActionsTs.action)('Italics press'),
                                        children: "Italic"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                        onPress: (0, _storyActionsTs.action)('Underline press'),
                                        children: "Underline"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                        textValue: "Menu",
                        focusMode: focusMode,
                        allowsArrowNavigation: allowsArrowNavigation,
                        children: [
                            "Menu",
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menuTsx.MenuTrigger), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                                        "aria-label": "Options",
                                        children: "\u25BE"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverTsx.Popover), {
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menuTsx.Menu), {
                                            className: (0, _indexCssDefault.default).menu,
                                            children: [
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.MenuItem), {
                                                    children: "Cut"
                                                }),
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.MenuItem), {
                                                    children: "Copy"
                                                }),
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.MenuItem), {
                                                    children: "Paste"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                        textValue: "Radiogroup",
                        focusMode: focusMode,
                        children: [
                            "RadioGroup",
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _radioGroupTsx.RadioGroup), {
                                "aria-label": "Radiogroup",
                                className: (0, _indexCssDefault.default).radiogroup,
                                style: {
                                    flexDirection: 'row'
                                },
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _radioGroupTsx.Radio), {
                                        className: (0, _indexCssDefault.default).radio,
                                        value: "dogs",
                                        "data-testid": "radio-dog",
                                        children: "Dog"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _radioGroupTsx.Radio), {
                                        className: (0, _indexCssDefault.default).radio,
                                        value: "cats",
                                        children: "Cat"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _radioGroupTsx.Radio), {
                                        className: (0, _indexCssDefault.default).radio,
                                        value: "dragon",
                                        children: "Dragon"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(MyGridListItem, {
                        textValue: "Checkboxgroup",
                        focusMode: focusMode,
                        children: [
                            "CheckboxGroup",
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _checkboxTsx.CheckboxGroup), {
                                "aria-label": "Checkboxgroup",
                                style: {
                                    display: 'flex',
                                    flexDirection: 'row'
                                },
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _checkboxTsx.Checkbox), {
                                        value: "soccer",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                                className: "checkbox",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("svg", {
                                                    viewBox: "0 0 18 18",
                                                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("polyline", {
                                                        points: "1 9 7 14 15 4"
                                                    })
                                                })
                                            }),
                                            "Soccer"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _checkboxTsx.Checkbox), {
                                        value: "baseball",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                                className: "checkbox",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("svg", {
                                                    viewBox: "0 0 18 18",
                                                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("polyline", {
                                                        points: "1 9 7 14 15 4"
                                                    })
                                                })
                                            }),
                                            "Baseball"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _checkboxTsx.Checkbox), {
                                        value: "basketball",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                                className: "checkbox",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("svg", {
                                                    viewBox: "0 0 18 18",
                                                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("polyline", {
                                                        points: "1 9 7 14 15 4"
                                                    })
                                                })
                                            }),
                                            "Basketball"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                "aria-label": "input after gridlist"
            })
        ]
    });
};
const GridListWithTextfield = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(GridListWithTextfieldRender, {
            ...args
        }),
    args: {
        layout: 'stack',
        orientation: 'vertical',
        escapeKeyBehavior: 'clearSelection',
        keyboardNavigationBehavior: 'tab'
    },
    argTypes: {
        layout: {
            control: 'radio',
            options: [
                'stack',
                'grid'
            ]
        },
        orientation: {
            control: 'radio',
            options: [
                'vertical',
                'horizontal'
            ]
        },
        keyboardNavigationBehavior: {
            control: 'radio',
            options: [
                'arrow',
                'tab'
            ]
        },
        autoFocusChildren: {
            control: 'boolean'
        },
        selectionMode: {
            control: 'radio',
            options: [
                'none',
                'single',
                'multiple'
            ]
        },
        selectionBehavior: {
            control: 'radio',
            options: [
                'toggle',
                'replace'
            ]
        },
        escapeKeyBehavior: {
            control: 'radio',
            options: [
                'clearSelection',
                'none'
            ]
        }
    },
    parameters: {
        description: {
            data: 'Note that toggling autoFocusChildren will make each row automatically focus its children. For the row with a menu, allowsArrowNavigation is also applied so that arrow keys can be used to move focus between rows still'
        }
    }
};
function VirtualizedDisplayNoneToggleRender() {
    let [visible, setVisible] = (0, _react.useState)(true);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                onPress: ()=>setVisible((v)=>!v),
                style: {
                    marginBottom: 8
                },
                children: visible ? 'Hide' : 'Show'
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                style: {
                    display: visible ? undefined : 'none'
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(VirtualizedGridDnD, {})
            })
        ]
    });
}
const VirtualizedDisplayNoneToggle = {
    render: VirtualizedDisplayNoneToggleRender,
    parameters: {
        description: {
            data: 'toggling hide and show should not cause the items to disappear'
        }
    }
};

},{"preact/jsx-runtime":"b2Fbn","../../../../../story-actions.ts":"8bOu8","../../../../../../vendor/react-aria-components/src/Button.tsx":"enBVm","../../../../../../vendor/react-aria-components/src/Checkbox.tsx":"kjgFU","../../@adobe/react-spectrum/src/utils/classNames.ts":"dsWbb","../../../../../../vendor/react-aria/exports/Collection.ts":"kFD1B","../../../../../../vendor/react-aria-components/src/ComboBox.tsx":"01xYV","../../../../../../vendor/react-aria-components/src/Dialog.tsx":"aPHDk","../../../../../../vendor/react-aria-components/src/useDragAndDrop.tsx":[["DropIndicator","kbk3K"],["useDragAndDrop","82VMW"]],"../../../../../../vendor/react-aria-components/src/GridLayout.ts":"ihEVm","../../../../../../vendor/react-aria-components/src/GridList.tsx":"9cL5r","../../../../../../vendor/react-aria-components/src/Heading.tsx":"jB98p","../../../../../../vendor/react-aria-components/src/Input.tsx":"BUyo9","../../../../../../vendor/react-aria-components/src/ListBox.tsx":"l68rZ","../../../../../../vendor/react-stately/exports/useVirtualizerState.ts":[["ListLayout","3ty3M"],["Size","aiymI"],["WaterfallLayout","lIBvk"]],"./utils.tsx":"oeVON","../../../../../../vendor/react-aria-components/src/Menu.tsx":"70BZW","../../../../../../vendor/react-aria-components/src/Modal.tsx":"5kz58","../../../../../../vendor/react-aria-components/src/Popover.tsx":"i9eo9","react":"gOP0N","../example/index.css":"9vxXE","../../../../../../vendor/react-aria-components/src/TagGroup.tsx":"ixV7h","../../../../../../vendor/react-aria-components/src/Text.tsx":"cfMV9","../../../../../../vendor/react-aria-components/src/TextField.tsx":"fVWme","../../../../../../vendor/react-aria-components/src/Toolbar.tsx":"jR09w","../../../../../../vendor/react-stately/exports/useAsyncList.ts":"fbj2f","../../../../../../vendor/react-stately/exports/useListData.ts":"iS6HG","../../../../../../vendor/react-aria-components/src/Virtualizer.tsx":"9H3Eo","./styles.css":"9cXWn","../../../../../../vendor/react-aria-components/src/RadioGroup.tsx":"6MchE","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8bOu8":[function(require,module,exports,__globalThis) {
// Standalone replacement for Storybook's action recorder; example source stays unchanged.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fn", ()=>fn);
parcelHelpers.export(exports, "action", ()=>action);
function fn() {
    return (...args)=>console.log('Example action:', ...args);
}
const action = (name)=>(...args)=>console.log(name, ...args);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"enBVm":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "ButtonContext", ()=>ButtonContext);
parcelHelpers.export(exports, "Button", ()=>Button);
var _jsxRuntime = require("preact/jsx-runtime");
var _liveAnnouncer = require("react-aria/private/live-announcer/LiveAnnouncer");
var _useButton = require("react-aria/useButton");
var _utils = require("./utils");
var _hidden = require("react-aria/private/collections/Hidden");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _mergeProps = require("react-aria/mergeProps");
var _progressBar = require("./ProgressBar");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useFocusRing = require("react-aria/useFocusRing");
var _useHover = require("react-aria/useHover");
var _useId = require("react-aria/useId");
const ButtonContext = /*#__PURE__*/ (0, _react.createContext)({});
const Button = /*#__PURE__*/ (0, _hidden.createHideableComponent)(function Button(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, ButtonContext);
    let ctx = props;
    let { isPending } = ctx;
    let { buttonProps, isPressed } = (0, _useButton.useButton)(props, ref);
    buttonProps = useDisableInteractions(buttonProps, isPending);
    let { focusProps, isFocused, isFocusVisible } = (0, _useFocusRing.useFocusRing)(props);
    let { hoverProps, isHovered } = (0, _useHover.useHover)({
        ...props,
        isDisabled: props.isDisabled || isPending
    });
    let renderValues = {
        isHovered,
        isPressed: (ctx.isPressed || isPressed) && !isPending,
        isFocused,
        isFocusVisible,
        isDisabled: props.isDisabled || false,
        isPending: isPending ?? false
    };
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: renderValues,
        defaultClassName: 'react-aria-Button'
    });
    let buttonId = (0, _useId.useId)(buttonProps.id);
    let progressId = (0, _useId.useId)();
    let ariaLabelledby = buttonProps['aria-labelledby'];
    if (isPending) {
        // aria-labelledby wins over aria-label
        // https://www.w3.org/TR/accname-1.2/#computation-steps
        if (ariaLabelledby) ariaLabelledby = `${ariaLabelledby} ${progressId}`;
        else if (buttonProps['aria-label']) ariaLabelledby = `${buttonId} ${progressId}`;
    }
    let wasPending = (0, _react.useRef)(isPending);
    (0, _react.useEffect)(()=>{
        let message = {
            'aria-labelledby': ariaLabelledby || buttonId
        };
        if (!wasPending.current && isFocused && isPending) (0, _liveAnnouncer.announce)(message, 'assertive');
        else if (wasPending.current && isFocused && !isPending) (0, _liveAnnouncer.announce)(message, 'assertive');
        wasPending.current = isPending;
    }, [
        isPending,
        isFocused,
        ariaLabelledby,
        buttonId
    ]);
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).button, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, buttonProps, focusProps, hoverProps),
        // When the button is in a pending state, we want to stop implicit form submission (ie. when the user presses enter on a text input).
        // We do this by changing the button's type to button.
        type: buttonProps.type === 'submit' && isPending ? 'button' : buttonProps.type,
        id: buttonId,
        ref: ref,
        "aria-labelledby": ariaLabelledby,
        slot: props.slot || undefined,
        "aria-disabled": isPending ? 'true' : buttonProps['aria-disabled'],
        "data-disabled": props.isDisabled || undefined,
        "data-pressed": renderValues.isPressed || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-pending": isPending || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _progressBar.ProgressBarContext).Provider, {
            value: {
                id: progressId
            },
            children: renderProps.children
        })
    });
});
// Events to preserve when isPending is true (for tooltips and other overlays)
const PRESERVED_EVENT_PATTERN = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
function useDisableInteractions(props, isPending) {
    if (isPending) {
        for(const key in props)if (key.startsWith('on') && !PRESERVED_EVENT_PATTERN.test(key)) props[key] = undefined;
        props.href = undefined;
        props.target = undefined;
    }
    return props;
}

},{"preact/jsx-runtime":"b2Fbn","react-aria/private/live-announcer/LiveAnnouncer":"gQ2k2","react-aria/useButton":"lPmqM","./utils":"jtWJJ","react-aria/private/collections/Hidden":"iPJX7","react-aria/filterDOMProps":"h4XHF","react-aria/mergeProps":"jycxS","./ProgressBar":"hW9J5","react":"gOP0N","react-aria/useFocusRing":"bP7um","react-aria/useHover":"2yLrj","react-aria/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gQ2k2":[function(require,module,exports,__globalThis) {
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

},{"../utils/filterDOMProps":"h4XHF","../utils/mergeProps":"jycxS","../interactions/useFocusable":"6IFKj","../interactions/usePress":"3S2KR","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jycxS":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","./useLayoutEffect":"h7M6K","../ssr/SSRProvider":"2cndP","./useValueEffect":"ksiVz","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h7M6K":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ksiVz":[function(require,module,exports,__globalThis) {
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

},{"./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3S2KR":[function(require,module,exports,__globalThis) {
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
 * Handles press interactions across mouse, touch, keyboard, and screen readers.
 * It normalizes behavior across browsers and platforms, and handles many nuances
 * of dealing with pointer and keyboard events.
 */ parcelHelpers.export(exports, "usePress", ()=>usePress);
var _chain = require("../utils/chain");
var _utils = require("./utils");
var _textSelection = require("./textSelection");
var _reactDom = require("react-dom");
var _focusWithoutScrolling = require("../utils/focusWithoutScrolling");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _getNonce = require("../utils/getNonce");
var _domHelpers = require("../utils/domHelpers");
var _platform = require("../utils/platform");
var _isVirtualEvent = require("../utils/isVirtualEvent");
var _mergeProps = require("../utils/mergeProps");
var _openLink = require("../utils/openLink");
var _context = require("./context");
var _react = require("react");
var _useEffectEvent = require("../utils/useEffectEvent");
var _useGlobalListeners = require("../utils/useGlobalListeners");
var _useSyncRef = require("../utils/useSyncRef");
function usePressResponderContext(props) {
    // Consume context from <PressResponder> and merge with props.
    let context = (0, _react.useContext)((0, _context.PressResponderContext));
    if (context) {
        // Prevent mergeProps from merging ref.
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let { register, ref, ...contextProps } = context;
        props = (0, _mergeProps.mergeProps)(contextProps, props);
        register();
    }
    (0, _useSyncRef.useSyncRef)(context, props.ref);
    return props;
}
class PressEvent {
    type;
    pointerType;
    target;
    shiftKey;
    ctrlKey;
    metaKey;
    altKey;
    x;
    y;
    key;
    #shouldStopPropagation = true;
    constructor(type, pointerType, originalEvent, state){
        let currentTarget = state?.target ?? originalEvent.currentTarget;
        const rect = currentTarget?.getBoundingClientRect();
        let x, y = 0;
        let clientX, clientY = null;
        if (originalEvent.clientX != null && originalEvent.clientY != null) {
            clientX = originalEvent.clientX;
            clientY = originalEvent.clientY;
        }
        if (rect) {
            if (clientX != null && clientY != null) {
                x = clientX - rect.left;
                y = clientY - rect.top;
            } else {
                x = rect.width / 2;
                y = rect.height / 2;
            }
        }
        this.type = type;
        this.pointerType = pointerType;
        this.target = originalEvent.currentTarget;
        this.shiftKey = originalEvent.shiftKey;
        this.metaKey = originalEvent.metaKey;
        this.ctrlKey = originalEvent.ctrlKey;
        this.altKey = originalEvent.altKey;
        this.x = x;
        this.y = y;
        this.key = originalEvent.key;
    }
    continuePropagation() {
        this.#shouldStopPropagation = false;
    }
    get shouldStopPropagation() {
        return this.#shouldStopPropagation;
    }
}
const LINK_CLICKED = Symbol('linkClicked');
const STYLE_ID = 'react-aria-pressable-style';
const PRESSABLE_ATTRIBUTE = 'data-react-aria-pressable';
function usePress(props) {
    let { onPress, onPressChange, onPressStart, onPressEnd, onPressUp, onClick, isDisabled, isPressed: isPressedProp, preventFocusOnPress, shouldCancelOnPointerExit, allowTextSelectionOnPress, ref: domRef, ...domProps } = usePressResponderContext(props);
    let [isPressed, setPressed] = (0, _react.useState)(false);
    let ref = (0, _react.useRef)({
        isPressed: false,
        ignoreEmulatedMouseEvents: false,
        didFirePressStart: false,
        isTriggeringEvent: false,
        activePointerId: null,
        target: null,
        isOverTarget: false,
        pointerType: null,
        disposables: []
    });
    let { addGlobalListener, removeAllGlobalListeners } = (0, _useGlobalListeners.useGlobalListeners)();
    let triggerPressStart = (0, _react.useCallback)((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled || state.didFirePressStart) return false;
        let shouldStopPropagation = true;
        state.isTriggeringEvent = true;
        if (onPressStart) {
            let event = new PressEvent('pressstart', pointerType, originalEvent);
            onPressStart(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(true);
        state.isTriggeringEvent = false;
        state.didFirePressStart = true;
        setPressed(true);
        return shouldStopPropagation;
    }, [
        isDisabled,
        onPressStart,
        onPressChange
    ]);
    let triggerPressEnd = (0, _react.useCallback)((originalEvent, pointerType, wasPressed = true)=>{
        let state = ref.current;
        if (!state.didFirePressStart) return false;
        state.didFirePressStart = false;
        state.isTriggeringEvent = true;
        let shouldStopPropagation = true;
        if (onPressEnd) {
            let event = new PressEvent('pressend', pointerType, originalEvent);
            onPressEnd(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(false);
        setPressed(false);
        if (onPress && wasPressed && !isDisabled) {
            let event = new PressEvent('press', pointerType, originalEvent);
            onPress(event);
            shouldStopPropagation &&= event.shouldStopPropagation;
        }
        state.isTriggeringEvent = false;
        return shouldStopPropagation;
    }, [
        isDisabled,
        onPressEnd,
        onPressChange,
        onPress
    ]);
    let triggerPressEndEvent = (0, _useEffectEvent.useEffectEvent)(triggerPressEnd);
    let triggerPressUp = (0, _react.useCallback)((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled) return false;
        if (onPressUp) {
            state.isTriggeringEvent = true;
            let event = new PressEvent('pressup', pointerType, originalEvent);
            onPressUp(event);
            state.isTriggeringEvent = false;
            return event.shouldStopPropagation;
        }
        return true;
    }, [
        isDisabled,
        onPressUp
    ]);
    let triggerPressUpEvent = (0, _useEffectEvent.useEffectEvent)(triggerPressUp);
    let cancel = (0, _react.useCallback)((e)=>{
        let state = ref.current;
        if (state.isPressed && state.target) {
            if (state.didFirePressStart && state.pointerType != null) triggerPressEnd(createEvent(state.target, e), state.pointerType, false);
            state.isPressed = false;
            state.isOverTarget = false;
            state.activePointerId = null;
            state.pointerType = null;
            removeAllGlobalListeners();
            if (!allowTextSelectionOnPress) (0, _textSelection.restoreTextSelection)(state.target);
            for (let dispose of state.disposables)dispose();
            state.disposables = [];
        }
    }, [
        allowTextSelectionOnPress,
        removeAllGlobalListeners,
        triggerPressEnd
    ]);
    let cancelEvent = (0, _useEffectEvent.useEffectEvent)(cancel);
    (0, _react.useEffect)(()=>{
        if (isDisabled && ref.current.isPressed) cancelEvent({
            currentTarget: ref.current.target,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false,
            altKey: false
        });
    }, [
        isDisabled
    ]);
    let cancelOnPointerExit = (0, _react.useCallback)((e)=>{
        if (shouldCancelOnPointerExit) cancel(e);
    }, [
        shouldCancelOnPointerExit,
        cancel
    ]);
    let triggerClick = (0, _react.useCallback)((e)=>{
        if (isDisabled) return;
        onClick?.(e);
    }, [
        isDisabled,
        onClick
    ]);
    let triggerSyntheticClick = (0, _react.useCallback)((e, target)=>{
        if (isDisabled) return;
        // Some third-party libraries pass in onClick instead of onPress.
        // Create a fake mouse event and trigger onClick as well.
        // This matches the browser's native activation behavior for certain elements (e.g. button).
        // https://html.spec.whatwg.org/#activation
        // https://html.spec.whatwg.org/#fire-a-synthetic-pointer-event
        if (onClick) {
            let event = new MouseEvent('click', e);
            (0, _utils.setEventTarget)(event, target);
            onClick((0, _utils.createSyntheticEvent)(event));
        }
    }, [
        isDisabled,
        onClick
    ]);
    let pressProps = (0, _react.useMemo)(()=>{
        let state = ref.current;
        let pressProps = {
            onKeyDown (e) {
                if (isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && (0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) {
                    if (shouldPreventDefaultKeyboard((0, _domfunctions.getEventTarget)(e), e.key)) e.preventDefault();
                    // If the event is repeating, it may have started on a different element
                    // after which focus moved to the current element. Ignore these events and
                    // only handle the first key down event.
                    let shouldStopPropagation = true;
                    if (!state.isPressed && !e.repeat) {
                        state.target = e.currentTarget;
                        state.isPressed = true;
                        state.pointerType = 'keyboard';
                        shouldStopPropagation = triggerPressStart(e, 'keyboard');
                    }
                    // Focus may move before the key up event, so register the event on the document
                    // instead of the same element where the key down event occurred. Make it capturing so that it will trigger
                    // before stopPropagation from useKeyboard on a child element may happen and thus we can still call triggerPress for the parent element.
                    let originalTarget = e.currentTarget;
                    let pressUp = (e)=>{
                        if (isValidKeyboardEvent(e, originalTarget) && !e.repeat && (0, _domfunctions.nodeContains)(originalTarget, (0, _domfunctions.getEventTarget)(e)) && state.target) triggerPressUpEvent(createEvent(state.target, e), 'keyboard');
                    };
                    addGlobalListener((0, _domHelpers.getOwnerDocument)(e.currentTarget), 'keyup', (0, _chain.chain)(pressUp, onKeyUp), true);
                    if (shouldStopPropagation) e.stopPropagation();
                    // Keep track of the keydown events that occur while the Meta (e.g. Command) key is held.
                    // macOS has a bug where keyup events are not fired while the Meta key is down.
                    // When the Meta key itself is released we will get an event for that, and we'll act as if
                    // all of these other keys were released as well.
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1393524
                    // https://bugs.webkit.org/show_bug.cgi?id=55291
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=1299553
                    if (e.metaKey && (0, _platform.isMac)()) state.metaKeyEvents?.set(e.key, e.nativeEvent);
                } else if (e.key === 'Meta') state.metaKeyEvents = new Map();
            },
            onClick (e) {
                if (e && !(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) return;
                if (e && e.button === 0 && !state.isTriggeringEvent && !(0, _openLink.openLink).isOpening) {
                    let shouldStopPropagation = true;
                    if (isDisabled) e.preventDefault();
                    // If triggered from a screen reader or by using element.click(),
                    // trigger as if it were a keyboard click.
                    if (!state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === 'virtual' || (0, _isVirtualEvent.isVirtualClick)(e.nativeEvent))) {
                        let stopPressStart = triggerPressStart(e, 'virtual');
                        let stopPressUp = triggerPressUpEvent(e, 'virtual');
                        let stopPressEnd = triggerPressEndEvent(e, 'virtual');
                        triggerClick(e);
                        shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
                    } else if (state.isPressed && state.pointerType !== 'keyboard') {
                        let pointerType = state.pointerType || e.nativeEvent.pointerType || 'virtual';
                        let stopPressUp = triggerPressUpEvent(createEvent(e.currentTarget, e), pointerType);
                        let stopPressEnd = triggerPressEndEvent(createEvent(e.currentTarget, e), pointerType, true);
                        shouldStopPropagation = stopPressUp && stopPressEnd;
                        state.isOverTarget = false;
                        triggerClick(e);
                        // oxlint-disable-next-line react/react-compiler
                        cancelEvent(e);
                    }
                    state.ignoreEmulatedMouseEvents = false;
                    if (shouldStopPropagation) e.stopPropagation();
                }
            }
        };
        let onKeyUp = (e)=>{
            if (state.isPressed && state.target && isValidKeyboardEvent(e, state.target)) {
                if (shouldPreventDefaultKeyboard((0, _domfunctions.getEventTarget)(e), e.key)) e.preventDefault();
                let target = (0, _domfunctions.getEventTarget)(e);
                let wasPressed = (0, _domfunctions.nodeContains)(state.target, target);
                triggerPressEndEvent(createEvent(state.target, e), 'keyboard', wasPressed);
                if (wasPressed) triggerSyntheticClick(e, state.target);
                removeAllGlobalListeners();
                // If a link was triggered with a key other than Enter, open the URL ourselves.
                // This means the link has a role override, and the default browser behavior
                // only applies when using the Enter key.
                if (e.key !== 'Enter' && isHTMLAnchorLink(state.target) && (0, _domfunctions.nodeContains)(state.target, target) && !e[LINK_CLICKED]) {
                    // Store a hidden property on the event so we only trigger link click once,
                    // even if there are multiple usePress instances attached to the element.
                    e[LINK_CLICKED] = true;
                    (0, _openLink.openLink)(state.target, e, false);
                }
                state.isPressed = false;
                state.metaKeyEvents?.delete(e.key);
            } else if (e.key === 'Meta' && state.metaKeyEvents?.size) {
                // If we recorded keydown events that occurred while the Meta key was pressed,
                // and those haven't received keyup events already, fire keyup events ourselves.
                // See comment above for more info about the macOS bug causing this.
                let events = state.metaKeyEvents;
                state.metaKeyEvents = undefined;
                for (let event of events.values())state.target?.dispatchEvent(new KeyboardEvent('keyup', event));
            }
        };
        if (typeof PointerEvent !== 'undefined') {
            pressProps.onPointerDown = (e)=>{
                // Only handle left clicks, and ignore events that bubbled through portals.
                if (e.button !== 0 || !(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) return;
                // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
                // Ignore and let the onClick handler take care of it instead.
                // https://bugs.webkit.org/show_bug.cgi?id=222627
                // https://bugs.webkit.org/show_bug.cgi?id=223202
                if ((0, _isVirtualEvent.isVirtualPointerEvent)(e.nativeEvent)) {
                    state.pointerType = 'virtual';
                    return;
                }
                state.pointerType = e.pointerType;
                let shouldStopPropagation = true;
                if (!state.isPressed) {
                    state.isPressed = true;
                    state.isOverTarget = true;
                    state.activePointerId = e.pointerId;
                    state.target = e.currentTarget;
                    if (!allowTextSelectionOnPress) (0, _textSelection.disableTextSelection)(state.target);
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                    // Release pointer capture so that touch interactions can leave the original target.
                    // This enables onPointerLeave and onPointerEnter to fire.
                    let target = (0, _domfunctions.getEventTarget)(e);
                    if ('releasePointerCapture' in target) {
                        if ('hasPointerCapture' in target) {
                            if (target.hasPointerCapture(e.pointerId)) target.releasePointerCapture(e.pointerId);
                        } else target.releasePointerCapture(e.pointerId);
                    }
                    addGlobalListener((0, _domHelpers.getOwnerDocument)(e.currentTarget), 'pointerup', onPointerUp, false);
                    addGlobalListener((0, _domHelpers.getOwnerDocument)(e.currentTarget), 'pointercancel', onPointerCancel, false);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseDown = (e)=>{
                if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) return;
                if (e.button === 0) {
                    if (preventFocusOnPress) {
                        let dispose = (0, _utils.preventFocus)(e.target);
                        if (dispose) state.disposables.push(dispose);
                    }
                    e.stopPropagation();
                }
            };
            pressProps.onPointerUp = (e)=>{
                // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
                if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e)) || state.pointerType === 'virtual') return;
                // Only handle left clicks. If isPressed is true, delay until onClick.
                if (e.button === 0 && !state.isPressed) triggerPressUpEvent(e, state.pointerType || e.pointerType);
            };
            pressProps.onPointerEnter = (e)=>{
                if (e.pointerId === state.activePointerId && state.target && !state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = true;
                    triggerPressStart(createEvent(state.target, e), state.pointerType);
                }
            };
            pressProps.onPointerLeave = (e)=>{
                if (e.pointerId === state.activePointerId && state.target && state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = false;
                    triggerPressEndEvent(createEvent(state.target, e), state.pointerType, false);
                    cancelOnPointerExit(e);
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
                    if ((0, _domfunctions.nodeContains)(state.target, (0, _domfunctions.getEventTarget)(e)) && state.pointerType != null) {
                        // Wait for onClick to fire onPress. This avoids browser issues when the DOM
                        // is mutated between onPointerUp and onClick, and is more compatible with third party libraries.
                        // https://github.com/adobe/react-spectrum/issues/1513
                        // https://issues.chromium.org/issues/40732224
                        // However, iOS and Android do not focus or fire onClick after a long press.
                        // We work around this by triggering a click ourselves after a timeout.
                        // This timeout is canceled during the click event in case the real one fires first.
                        // The timeout must be at least 32ms, because Safari on iOS delays the click event on
                        // non-form elements without certain ARIA roles (for hover emulation).
                        // https://github.com/WebKit/WebKit/blob/dccfae42bb29bd4bdef052e469f604a9387241c0/Source/WebKit/WebProcess/WebPage/ios/WebPageIOS.mm#L875-L892
                        let clicked = false;
                        let timeout = setTimeout(()=>{
                            if (state.isPressed && state.target instanceof HTMLElement) {
                                if (clicked) cancelEvent(e);
                                else {
                                    (0, _focusWithoutScrolling.focusWithoutScrolling)(state.target);
                                    state.target.click();
                                }
                            }
                        }, 80);
                        // Use a capturing listener to track if a click occurred.
                        // If stopPropagation is called it may never reach our handler.
                        addGlobalListener(e.currentTarget, 'click', ()=>clicked = true, true);
                        state.disposables.push(()=>clearTimeout(timeout));
                    } else cancelEvent(e);
                    // Ignore subsequent onPointerLeave event before onClick on touch devices.
                    state.isOverTarget = false;
                }
            };
            let onPointerCancel = (e)=>{
                cancelEvent(e);
            };
            pressProps.onDragStart = (e)=>{
                if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) return;
                // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
                cancelEvent(e);
            };
        } else var e, e1, e2, e3, e4, e5, e6, e7, e8;
        return pressProps;
    }, [
        addGlobalListener,
        isDisabled,
        preventFocusOnPress,
        removeAllGlobalListeners,
        allowTextSelectionOnPress,
        cancelOnPointerExit,
        triggerPressStart,
        triggerClick,
        triggerSyntheticClick
    ]);
    // Avoid onClick delay for double tap to zoom by default.
    (0, _react.useEffect)(()=>{
        if (!domRef || false) return;
        const ownerDocument = (0, _domHelpers.getOwnerDocument)(domRef.current);
        if (!ownerDocument || !ownerDocument.head || ownerDocument.getElementById(STYLE_ID)) return;
        const style = ownerDocument.createElement('style');
        style.id = STYLE_ID;
        let nonce = (0, _getNonce.getNonce)(ownerDocument);
        if (nonce) style.nonce = nonce;
        // touchAction: 'manipulation' is supposed to be equivalent, but in
        // Safari it causes onPointerCancel not to fire on scroll.
        // https://bugs.webkit.org/show_bug.cgi?id=240917
        style.textContent = `
@layer {
  [${PRESSABLE_ATTRIBUTE}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim();
        ownerDocument.head.prepend(style);
    }, [
        domRef
    ]);
    // Remove user-select: none in case component unmounts immediately after pressStart
    (0, _react.useEffect)(()=>{
        let state = ref.current;
        return ()=>{
            if (!allowTextSelectionOnPress) (0, _textSelection.restoreTextSelection)(state.target ?? undefined);
            for (let dispose of state.disposables)dispose();
            state.disposables = [];
        };
    }, [
        allowTextSelectionOnPress
    ]);
    return {
        isPressed: isPressedProp || isPressed,
        // oxlint-disable-next-line react/react-compiler
        pressProps: (0, _mergeProps.mergeProps)(domProps, pressProps, {
            [PRESSABLE_ATTRIBUTE]: true
        })
    };
}
function isHTMLAnchorLink(target) {
    return target.tagName === 'A' && target.hasAttribute('href');
}
function isValidKeyboardEvent(event, currentTarget) {
    const { key, code } = event;
    const element = currentTarget;
    const role = element.getAttribute('role');
    // Accessibility for keyboards. Space and Enter only.
    // "Spacebar" is for IE 11
    return (key === 'Enter' || key === ' ' || key === 'Spacebar' || code === 'Space') && !(element instanceof (0, _domHelpers.getOwnerWindow)(element).HTMLInputElement && !isValidInputKey(element, key) || element instanceof (0, _domHelpers.getOwnerWindow)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
    !((role === 'link' || !role && isHTMLAnchorLink(element)) && key !== 'Enter');
}
function getTouchFromEvent(event) {
    const { targetTouches } = event;
    if (targetTouches.length > 0) return targetTouches[0];
    return null;
}
function getTouchById(event, pointerId) {
    const changedTouches = event.changedTouches;
    for(let i = 0; i < changedTouches.length; i++){
        const touch = changedTouches[i];
        if (touch.identifier === pointerId) return touch;
    }
    return null;
}
function createTouchEvent(target, e) {
    let clientX = 0;
    let clientY = 0;
    if (e.targetTouches && e.targetTouches.length === 1) {
        clientX = e.targetTouches[0].clientX;
        clientY = e.targetTouches[0].clientY;
    }
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        clientX,
        clientY
    };
}
function createEvent(target, e) {
    let clientX = e.clientX;
    let clientY = e.clientY;
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        clientX,
        clientY,
        key: e.key
    };
}
function getPointClientRect(point) {
    let offsetX = 0;
    let offsetY = 0;
    if (point.width !== undefined) offsetX = point.width / 2;
    else if (point.radiusX !== undefined) offsetX = point.radiusX;
    if (point.height !== undefined) offsetY = point.height / 2;
    else if (point.radiusY !== undefined) offsetY = point.radiusY;
    return {
        top: point.clientY - offsetY,
        right: point.clientX + offsetX,
        bottom: point.clientY + offsetY,
        left: point.clientX - offsetX
    };
}
function areRectanglesOverlapping(a, b) {
    // check if they cannot overlap on x axis
    if (a.left > b.right || b.left > a.right) return false;
    // check if they cannot overlap on y axis
    if (a.top > b.bottom || b.top > a.bottom) return false;
    return true;
}
function isOverTarget(point, target) {
    let rect = target.getBoundingClientRect();
    let pointRect = getPointClientRect(point);
    return areRectanglesOverlapping(rect, pointRect);
}
function shouldPreventDefaultUp(target) {
    if (target instanceof HTMLInputElement) return false;
    if (target instanceof HTMLButtonElement) return target.type !== 'submit' && target.type !== 'reset';
    if (isHTMLAnchorLink(target)) return false;
    return true;
}
function shouldPreventDefaultKeyboard(target, key) {
    // Don't prevent the contextmenu shortcut on mac.
    if ((0, _platform.isMac)() && key === 'Enter') return false;
    if (target instanceof HTMLInputElement) {
        if (key === 'Enter' && (target.type === 'checkbox' || target.type === 'radio')) // Enter on a checkbox or radio should do an implicit form submission, but not toggle the input.
        return false;
        return !isValidInputKey(target, key);
    }
    return shouldPreventDefaultUp(target);
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
function isValidInputKey(target, key) {
    // Only space should toggle checkboxes and radios, not enter.
    return target.type === 'checkbox' || target.type === 'radio' ? key === ' ' : nonTextInputTypes.has(target.type);
}

},{"../utils/chain":"bQmEj","./utils":"iOeVY","./textSelection":"3IKpx","react-dom":"gOP0N","../utils/focusWithoutScrolling":"gcZ3w","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/getNonce":"gQ9ws","../utils/domHelpers":"cYkFa","../utils/platform":"eBqgD","../utils/isVirtualEvent":"dtScK","../utils/mergeProps":"jycxS","../utils/openLink":"gH3wl","./context":"8Eyap","react":"gOP0N","../utils/useEffectEvent":"grBNM","../utils/useGlobalListeners":"jsdt1","../utils/useSyncRef":"8a0bK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3IKpx":[function(require,module,exports,__globalThis) {
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

},{"../utils/domHelpers":"cYkFa","../utils/platform":"eBqgD","../utils/runAfterTransition":"k2HOw","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gQ9ws":[function(require,module,exports,__globalThis) {
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
/** Reset the cached nonce value. Exported for testing only. */ parcelHelpers.export(exports, "resetNonceCache", ()=>resetNonceCache);
/**
 * Returns the CSP nonce, if configured via a `<meta property="csp-nonce">` tag or
 * `__webpack_nonce__`. This allows dynamically injected `<style>` elements to work with Content
 * Security Policy.
 */ parcelHelpers.export(exports, "getNonce", ()=>getNonce);
var _getMetaValue = require("./getMetaValue");
var _domHelpers = require("./domHelpers");
let nonceCache = new WeakMap();
function resetNonceCache() {
    nonceCache = new WeakMap();
}
function getNonce(doc) {
    let ownerDocument = (0, _domHelpers.getOwnerDocument)(doc);
    let nonce = nonceCache.get(ownerDocument);
    nonce ??= (0, _getMetaValue.getMetaValue)('csp-nonce', ownerDocument);
    if (nonce !== undefined) nonceCache.set(ownerDocument, nonce);
    return nonce;
}

},{"./getMetaValue":"jdK61","./domHelpers":"cYkFa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jdK61":[function(require,module,exports,__globalThis) {
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

},{"./domHelpers":"cYkFa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8Eyap":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "PressResponderContext", ()=>PressResponderContext);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const PressResponderContext = (0, _reactDefault.default).createContext({
    register: ()=>{}
});
PressResponderContext.displayName = 'PressResponderContext';

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"grBNM":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jsdt1":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hW9J5":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "ProgressBarContext", ()=>ProgressBarContext);
parcelHelpers.export(exports, "ProgressBar", ()=>ProgressBar);
var _jsxRuntime = require("preact/jsx-runtime");
var _useProgressBar = require("react-aria/useProgressBar");
var _number = require("react-stately/private/utils/number");
var _utils = require("./utils");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _label = require("./Label");
var _mergeProps = require("react-aria/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const ProgressBarContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ProgressBar = /*#__PURE__*/ (0, _react.forwardRef)(function ProgressBar(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, ProgressBarContext);
    let { value = 0, minValue = 0, maxValue = 100, isIndeterminate = false } = props;
    value = (0, _number.clamp)(value, minValue, maxValue);
    let [labelRef, label] = (0, _utils.useSlot)(!props['aria-label'] && !props['aria-labelledby']);
    let { progressBarProps, labelProps } = (0, _useProgressBar.useProgressBar)({
        ...props,
        label
    });
    let range = maxValue - minValue;
    // Calculate the width of the progress bar as a percentage
    let percentage = undefined;
    if (!isIndeterminate) {
        if (range === 0) percentage = 0;
        else percentage = (value - minValue) / range * 100;
    }
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-ProgressBar',
        values: {
            percentage,
            valueText: progressBarProps['aria-valuetext'],
            isIndeterminate
        }
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, progressBarProps),
        ref: ref,
        slot: props.slot || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _label.LabelContext).Provider, {
            value: {
                ...labelProps,
                ref: labelRef,
                elementType: 'span'
            },
            children: renderProps.children
        })
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/useProgressBar":"fsvpW","react-stately/private/utils/number":"aEFFO","./utils":"jtWJJ","react-aria/filterDOMProps":"h4XHF","./Label":"eI7Ae","react-aria/mergeProps":"jycxS","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fsvpW":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kMUgu":[function(require,module,exports,__globalThis) {
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

},{"./useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5T1hV":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/private/collections/Hidden":"iPJX7","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bP7um":[function(require,module,exports,__globalThis) {
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

},{"./utils":"iOeVY","react":"gOP0N","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","../utils/useGlobalListeners":"jsdt1","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2yLrj":[function(require,module,exports,__globalThis) {
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

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","react":"gOP0N","../utils/useGlobalListeners":"jsdt1","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kjgFU":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5Oeu9":[function(require,module,exports,__globalThis) {
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

},{"./useLabel":"kMUgu","../utils/mergeProps":"jycxS","../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ieFcf":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","../utils/filterDOMProps":"h4XHF","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/mergeProps":"jycxS","react-stately/private/form/useFormValidationState":"491YW","../interactions/useFocusable":"6IFKj","../utils/useFormReset":"iDQvZ","../form/useFormValidation":"kdUj8","../interactions/usePress":"3S2KR","../utils/useSlot":"jo4XI","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"491YW":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iDQvZ":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","./useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kdUj8":[function(require,module,exports,__globalThis) {
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

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../interactions/useFocusVisible":"aBfUW","react":"gOP0N","../utils/useEffectEvent":"grBNM","../utils/useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jo4XI":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","../utils/useControlledState":"8yNBD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8yNBD":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6359O":[function(require,module,exports,__globalThis) {
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

},{"../form/useFormValidationState":"491YW","../utils/useControlledState":"8yNBD","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5KSCU":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/filterDOMProps":"h4XHF","react":"gOP0N","./Text":"cfMV9","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cfMV9":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/private/collections/Hidden":"iPJX7","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aEFv9":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-stately/private/form/useFormValidationState":"491YW","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cMf28":[function(require,module,exports,__globalThis) {
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

},{"../utils/mergeProps":"jycxS","react":"gOP0N","../interactions/useFocusWithin":"bkSQo","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"01xYV":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","react-aria/useComboBox":"h7kEh","./Button":"enBVm","./utils":"jtWJJ","react-aria/CollectionBuilder":"kFD1B","react-stately/useComboBoxState":"4xleD","react-aria/private/collections/Hidden":"iPJX7","./FieldError":"5KSCU","./Autocomplete":"dHgny","react-aria/filterDOMProps":"h4XHF","./Form":"aEFv9","./Group":"2mugT","./Input":"BUyo9","./Label":"eI7Ae","./ListBox":"l68rZ","./Dialog":"aPHDk","./Popover":"i9eo9","react":"gOP0N","./Text":"cfMV9","react-aria/useFilter":"9huVw","react-aria/useListFormatter":"f0xdH","react-aria/private/utils/useResizeObserver":"58iim","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2mugT":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "GroupContext", ()=>GroupContext);
parcelHelpers.export(exports, "Group", ()=>Group);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _useHover = require("react-aria/useHover");
var _mergeProps = require("react-aria/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useFocusRing = require("react-aria/useFocusRing");
const GroupContext = /*#__PURE__*/ (0, _react.createContext)({});
const Group = /*#__PURE__*/ (0, _react.forwardRef)(function Group(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, GroupContext);
    let { isDisabled, isInvalid, isReadOnly, onHoverStart, onHoverChange, onHoverEnd, ...otherProps } = props;
    isDisabled ??= !!props['aria-disabled'] && props['aria-disabled'] !== 'false';
    isInvalid ??= !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let { hoverProps, isHovered } = (0, _useHover.useHover)({
        onHoverStart,
        onHoverChange,
        onHoverEnd,
        isDisabled
    });
    let { isFocused, isFocusVisible, focusProps } = (0, _useFocusRing.useFocusRing)({
        within: true
    });
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: {
            isHovered,
            isFocusWithin: isFocused,
            isFocusVisible,
            isDisabled,
            isInvalid
        },
        defaultClassName: 'react-aria-Group'
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...(0, _mergeProps.mergeProps)(otherProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        role: props.role ?? 'group',
        slot: props.slot ?? undefined,
        "data-focus-within": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-invalid": isInvalid || undefined,
        "data-readonly": isReadOnly || undefined,
        children: renderProps.children
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/useHover":"2yLrj","react-aria/mergeProps":"jycxS","react":"gOP0N","react-aria/useFocusRing":"bP7um","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"BUyo9":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "InputContext", ()=>InputContext);
parcelHelpers.export(exports, "Input", ()=>Input);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _hidden = require("react-aria/private/collections/Hidden");
var _mergeProps = require("react-aria/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useFocusRing = require("react-aria/useFocusRing");
var _useHover = require("react-aria/useHover");
const InputContext = /*#__PURE__*/ (0, _react.createContext)({});
let filterHoverProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart, onHoverChange, onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const Input = /*#__PURE__*/ (0, _hidden.createHideableComponent)(function Input(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, InputContext);
    let { hoverProps, isHovered } = (0, _useHover.useHover)({
        ...props,
        isDisabled: props.disabled
    });
    let { isFocused, isFocusVisible, focusProps } = (0, _useFocusRing.useFocusRing)({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: {
            isHovered,
            isFocused,
            isFocusVisible,
            isDisabled: props.disabled || false,
            isInvalid
        },
        defaultClassName: 'react-aria-Input'
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).input, {
        ...(0, _mergeProps.mergeProps)(filterHoverProps(props), focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-disabled": props.disabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-invalid": isInvalid || undefined
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/private/collections/Hidden":"iPJX7","react-aria/mergeProps":"jycxS","react":"gOP0N","react-aria/useFocusRing":"bP7um","react-aria/useHover":"2yLrj","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"l68rZ":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "ListBoxContext", ()=>ListBoxContext);
parcelHelpers.export(exports, "ListStateContext", ()=>ListStateContext);
parcelHelpers.export(exports, "ListBox", ()=>ListBox);
parcelHelpers.export(exports, "ListBoxSection", ()=>ListBoxSection);
parcelHelpers.export(exports, "ListBoxItem", ()=>ListBoxItem);
parcelHelpers.export(exports, "ListBoxLoadMoreItem", ()=>ListBoxLoadMoreItem);
var _jsxRuntime = require("preact/jsx-runtime");
var _useListBox = require("react-aria/useListBox");
var _utils = require("./utils");
var _collection = require("react-aria/Collection");
var _collectionBuilder = require("react-aria/CollectionBuilder");
var _collection1 = require("./Collection");
var _dragAndDrop = require("./DragAndDrop");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _focusScope = require("react-aria/FocusScope");
var _header = require("./Header");
var _inertValue = require("react-aria/private/utils/inertValue");
var _baseCollection = require("react-aria/private/collections/BaseCollection");
var _listKeyboardDelegate = require("react-aria/ListKeyboardDelegate");
var _useListState = require("react-stately/useListState");
var _useLoadMoreSentinel = require("react-aria/private/utils/useLoadMoreSentinel");
var _mergeProps = require("react-aria/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _autocomplete = require("./Autocomplete");
var _selectionIndicator = require("./SelectionIndicator");
var _separator = require("./Separator");
var _sharedElementTransition = require("./SharedElementTransition");
var _text = require("./Text");
var _useCollator = require("react-aria/useCollator");
var _useFocus = require("react-aria/useFocus");
var _useFocusRing = require("react-aria/useFocusRing");
var _useHover = require("react-aria/useHover");
var _useKeyboard = require("react-aria/useKeyboard");
var _i18Nprovider = require("react-aria/I18nProvider");
var _useObjectRef = require("react-aria/useObjectRef");
const ListBoxContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ListStateContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ListBox = /*#__PURE__*/ (0, _react.forwardRef)(function ListBox(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, ListBoxContext);
    let state = (0, _react.useContext)(ListStateContext);
    // The structure of ListBox is a bit strange because it needs to work inside other components like ComboBox and Select.
    // Those components render two copies of their children so that the collection can be built even when the popover is closed.
    // The first copy sends a collection document via context which we render the collection portal into.
    // The second copy sends a ListState object via context which we use to render the ListBox without rebuilding the state.
    // Otherwise, we have a standalone ListBox, so we need to create a collection and state ourselves.
    if (state) return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ListBoxInner, {
        state: state,
        props: props,
        listBoxRef: ref
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collectionBuilder.CollectionBuilder), {
        content: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collection.Collection), {
            ...props
        }),
        children: (collection)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(StandaloneListBox, {
                props: props,
                listBoxRef: ref,
                collection: collection
            })
    });
});
function StandaloneListBox({ props, listBoxRef, collection }) {
    props = {
        ...props,
        collection,
        children: null,
        items: null
    };
    let { layoutDelegate } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let state = (0, _useListState.useListState)({
        ...props,
        layoutDelegate
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ListBoxInner, {
        state: state,
        props: props,
        listBoxRef: listBoxRef
    });
}
function ListBoxInner({ state: inputState, props, listBoxRef }) {
    // oxlint-disable-next-line react/react-compiler
    [props, listBoxRef] = (0, _utils.useContextProps)(props, listBoxRef, (0, _autocomplete.SelectableCollectionContext));
    let { dragAndDropHooks, layout = 'stack', orientation = 'vertical', filter } = props;
    // oxlint-disable-next-line react/react-compiler
    let state = (0, _useListState.UNSTABLE_useFilteredListState)(inputState, filter);
    let { collection, selectionManager } = state;
    let isListDraggable = !!dragAndDropHooks?.useDraggableCollectionState;
    let isListDroppable = !!dragAndDropHooks?.useDroppableCollectionState;
    let { direction } = (0, _i18Nprovider.useLocale)();
    let { disabledBehavior, disabledKeys } = selectionManager;
    let collator = (0, _useCollator.useCollator)({
        usage: 'search',
        sensitivity: 'base'
    });
    let { isVirtualized, layoutDelegate, dropTargetDelegate: ctxDropTargetDelegate, CollectionRoot } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let keyboardDelegate = (0, _react.useMemo)(// oxlint-disable-next-line react/react-compiler
    ()=>props.keyboardDelegate || new (0, _listKeyboardDelegate.ListKeyboardDelegate)({
            collection,
            collator,
            ref: listBoxRef,
            disabledKeys,
            disabledBehavior,
            layout,
            orientation,
            direction,
            layoutDelegate
        }), [
        collection,
        collator,
        listBoxRef,
        disabledBehavior,
        disabledKeys,
        orientation,
        direction,
        props.keyboardDelegate,
        layout,
        layoutDelegate
    ]);
    let { listBoxProps } = (0, _useListBox.useListBox)({
        ...props,
        shouldSelectOnPressUp: isListDraggable || props.shouldSelectOnPressUp,
        keyboardDelegate,
        isVirtualized
    }, state, listBoxRef);
    let dragHooksProvided = (0, _react.useRef)(isListDraggable);
    let dropHooksProvided = (0, _react.useRef)(isListDroppable);
    (0, _react.useEffect)(()=>{
        return;
    }, [
        isListDraggable,
        isListDroppable
    ]);
    let dragState = undefined;
    let dropState = undefined;
    let droppableCollection = undefined;
    let isRootDropTarget = false;
    let dragPreview = null;
    let preview = (0, _react.useRef)(null);
    if (isListDraggable && dragAndDropHooks) {
        // oxlint-disable-next-line react/react-compiler
        dragState = dragAndDropHooks.useDraggableCollectionState({
            collection,
            selectionManager,
            preview: dragAndDropHooks.renderDragPreview ? preview : undefined
        });
        // oxlint-disable-next-line react/react-compiler
        dragAndDropHooks.useDraggableCollection({}, dragState, listBoxRef);
        let DragPreview = dragAndDropHooks.DragPreview;
        dragPreview = dragAndDropHooks.renderDragPreview ? /*#__PURE__*/ (0, _jsxRuntime.jsx)(DragPreview, {
            ref: preview,
            children: dragAndDropHooks.renderDragPreview
        }) : null;
    }
    if (isListDroppable && dragAndDropHooks) {
        // oxlint-disable-next-line react/react-compiler
        dropState = dragAndDropHooks.useDroppableCollectionState({
            collection,
            selectionManager
        });
        let dropTargetDelegate = dragAndDropHooks.dropTargetDelegate || ctxDropTargetDelegate || new dragAndDropHooks.ListDropTargetDelegate(collection, listBoxRef, {
            orientation,
            layout,
            direction
        });
        // oxlint-disable-next-line react/react-compiler
        droppableCollection = dragAndDropHooks.useDroppableCollection({
            keyboardDelegate,
            dropTargetDelegate
        }, dropState, listBoxRef);
        isRootDropTarget = dropState.isDropTarget({
            type: 'root'
        });
    }
    let { focusProps, isFocused, isFocusVisible } = (0, _useFocusRing.useFocusRing)();
    let isEmpty = state.collection.size === 0;
    let renderValues = {
        isDropTarget: isRootDropTarget,
        isEmpty,
        isFocused,
        isFocusVisible,
        layout: props.layout || 'stack',
        orientation,
        state
    };
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        children: undefined,
        defaultClassName: 'react-aria-ListBox',
        values: renderValues
    });
    let emptyState = null;
    if (isEmpty && props.renderEmptyState) emptyState = /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        // eslint-disable-next-line
        role: "option",
        style: {
            display: 'contents'
        },
        children: props.renderEmptyState(renderValues)
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _focusScope.FocusScope), {
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _utils.dom).div, {
            ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, listBoxProps, focusProps, droppableCollection?.collectionProps),
            ref: listBoxRef,
            slot: props.slot || undefined,
            onScroll: props.onScroll,
            "data-drop-target": isRootDropTarget || undefined,
            "data-empty": isEmpty || undefined,
            "data-focused": isFocused || undefined,
            "data-focus-visible": isFocusVisible || undefined,
            "data-layout": props.layout || 'stack',
            "data-orientation": orientation,
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
                    values: [
                        [
                            ListBoxContext,
                            props
                        ],
                        [
                            ListStateContext,
                            state
                        ],
                        [
                            (0, _dragAndDrop.DragAndDropContext),
                            {
                                dragAndDropHooks,
                                dragState,
                                dropState
                            }
                        ],
                        [
                            (0, _separator.SeparatorContext),
                            {
                                elementType: 'div'
                            }
                        ],
                        [
                            (0, _dragAndDrop.DropIndicatorContext),
                            {
                                render: ListBoxDropIndicatorWrapper
                            }
                        ],
                        [
                            (0, _collection1.SectionContext),
                            {
                                name: 'ListBoxSection',
                                render: ListBoxSectionInner
                            }
                        ]
                    ],
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _sharedElementTransition.SharedElementTransition), {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionRoot, {
                            collection: collection,
                            scrollRef: listBoxRef,
                            persistedKeys: (0, _dragAndDrop.useDndPersistedKeys)(selectionManager, dragAndDropHooks, dropState),
                            renderDropIndicator: (0, _dragAndDrop.useRenderDropIndicator)(dragAndDropHooks, dropState)
                        })
                    })
                }),
                emptyState,
                dragPreview
            ]
        })
    });
}
function ListBoxSectionInner(props, ref, section, className = 'react-aria-ListBoxSection') {
    let state = (0, _react.useContext)(ListStateContext);
    let { dragAndDropHooks, dropState } = (0, _react.useContext)((0, _dragAndDrop.DragAndDropContext));
    let { CollectionBranch } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let [headingRef, heading] = (0, _utils.useSlot)();
    let { headingProps, groupProps } = (0, _useListBox.useListBoxSection)({
        heading,
        'aria-label': props['aria-label'] ?? undefined
    });
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        id: undefined,
        children: undefined,
        defaultClassName: className,
        values: undefined
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).section, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, groupProps),
        ref: ref,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _header.HeaderContext).Provider, {
            value: {
                ...headingProps,
                ref: headingRef
            },
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionBranch, {
                collection: state.collection,
                parent: section,
                renderDropIndicator: (0, _dragAndDrop.useRenderDropIndicator)(dragAndDropHooks, dropState)
            })
        })
    });
}
const ListBoxSection = /*#__PURE__*/ (0, _collectionBuilder.createBranchComponent)((0, _baseCollection.SectionNode), ListBoxSectionInner);
const ListBoxItem = /*#__PURE__*/ (0, _collectionBuilder.createLeafComponent)((0, _baseCollection.ItemNode), function ListBoxItem(props, forwardedRef, item) {
    let ref = (0, _useObjectRef.useObjectRef)(forwardedRef);
    let state = (0, _react.useContext)(ListStateContext);
    let { dragAndDropHooks, dragState, dropState } = (0, _react.useContext)((0, _dragAndDrop.DragAndDropContext));
    let isDraggable = dragState && !(dragState.isDisabled || dragState.selectionManager.isDisabled(item.key));
    let { optionProps, labelProps, descriptionProps, ...states } = (0, _useListBox.useOption)({
        key: item.key,
        'aria-label': props?.['aria-label']
    }, state, ref);
    let { hoverProps, isHovered } = (0, _useHover.useHover)({
        isDisabled: !states.allowsSelection && !states.hasAction && !isDraggable,
        onHoverStart: item.props.onHoverStart,
        onHoverChange: item.props.onHoverChange,
        onHoverEnd: item.props.onHoverEnd
    });
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)(props);
    let { focusProps } = (0, _useFocus.useFocus)(props);
    let draggableItem = null;
    if (dragState && dragAndDropHooks) draggableItem = dragAndDropHooks.useDraggableItem({
        key: item.key,
        hasAction: states.hasAction
    }, dragState);
    let droppableItem = null;
    if (dropState && dragAndDropHooks) droppableItem = dragAndDropHooks.useDroppableItem({
        target: {
            type: 'item',
            key: item.key,
            dropPosition: 'on'
        }
    }, dropState, ref);
    let isDragging = dragState && dragState.isDragging(item.key);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        id: undefined,
        children: props.children,
        defaultClassName: 'react-aria-ListBoxItem',
        values: {
            ...states,
            isHovered,
            selectionMode: state.selectionManager.selectionMode,
            selectionBehavior: state.selectionManager.selectionBehavior,
            allowsDragging: !!dragState,
            isDragging,
            isDropTarget: droppableItem?.isDropTarget
        }
    });
    (0, _react.useEffect)(()=>{
        item.textValue;
    }, [
        item.textValue
    ]);
    let ElementType = props.href ? (0, _utils.dom).a : (0, _utils.dom).div;
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    if (props.href && optionProps.tabIndex == null) optionProps.tabIndex = -1;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ElementType, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, optionProps, hoverProps, keyboardProps, focusProps, draggableItem?.dragProps, droppableItem?.dropProps),
        ref: ref,
        "data-allows-dragging": !!dragState || undefined,
        "data-selected": states.isSelected || undefined,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": states.isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-dragging": isDragging || undefined,
        "data-drop-target": droppableItem?.isDropTarget || undefined,
        "data-selection-mode": state.selectionManager.selectionMode === 'none' ? undefined : state.selectionManager.selectionMode,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
            values: [
                [
                    (0, _text.TextContext),
                    {
                        slots: {
                            [(0, _utils.DEFAULT_SLOT)]: labelProps,
                            label: labelProps,
                            description: descriptionProps
                        }
                    }
                ],
                [
                    (0, _selectionIndicator.SelectionIndicatorContext),
                    {
                        isSelected: states.isSelected
                    }
                ]
            ],
            children: renderProps.children
        })
    });
});
function ListBoxDropIndicatorWrapper(props, ref) {
    ref = (0, _useObjectRef.useObjectRef)(ref);
    let { dragAndDropHooks, dropState } = (0, _react.useContext)((0, _dragAndDrop.DragAndDropContext));
    // oxlint-disable-next-line react/react-compiler
    let { dropIndicatorProps, isHidden, isDropTarget } = dragAndDropHooks.useDropIndicator(props, dropState, ref);
    if (isHidden) return null;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ListBoxDropIndicatorForwardRef, {
        ...props,
        dropIndicatorProps: dropIndicatorProps,
        isDropTarget: isDropTarget,
        ref: ref
    });
}
function ListBoxDropIndicator(props, ref) {
    let { dropIndicatorProps, isDropTarget, ...otherProps } = props;
    let renderProps = (0, _utils.useRenderProps)({
        ...otherProps,
        defaultClassName: 'react-aria-DropIndicator',
        values: {
            isDropTarget
        }
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
            ...dropIndicatorProps,
            ...renderProps,
            role: "option",
            ref: ref,
            "data-drop-target": isDropTarget || undefined
        })
    });
}
const ListBoxDropIndicatorForwardRef = /*#__PURE__*/ (0, _react.forwardRef)(ListBoxDropIndicator);
const ListBoxLoadMoreItem = (0, _collectionBuilder.createLeafComponent)((0, _baseCollection.LoaderNode), function ListBoxLoadingIndicator(props, ref, item) {
    let state = (0, _react.useContext)(ListStateContext);
    let { isLoading, onLoadMore, scrollOffset, ...otherProps } = props;
    let sentinelRef = (0, _react.useRef)(null);
    let memoedLoadMoreProps = (0, _react.useMemo)(()=>({
            onLoadMore,
            collection: state?.collection,
            sentinelRef,
            scrollOffset
        }), [
        onLoadMore,
        scrollOffset,
        state?.collection
    ]);
    (0, _useLoadMoreSentinel.useLoadMoreSentinel)(memoedLoadMoreProps, sentinelRef);
    let renderProps = (0, _utils.useRenderProps)({
        ...otherProps,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-ListBoxLoadingIndicator',
        values: undefined
    });
    let optionProps = {
        // For Android talkback
        tabIndex: -1
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                style: {
                    position: 'relative',
                    width: 0,
                    height: 0
                },
                inert: (0, _inertValue.inertValue)(true),
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                    "data-testid": "loadMoreSentinel",
                    ref: sentinelRef,
                    style: {
                        position: 'absolute',
                        height: 1,
                        width: 1
                    }
                })
            }),
            isLoading && renderProps.children && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
                    ...(0, _mergeProps.mergeProps)((0, _filterDOMProps.filterDOMProps)(props, {
                        global: true
                    }), optionProps),
                    ...renderProps,
                    // aria-selected isn't needed here since this option is not selectable.
                    role: "option",
                    ref: ref,
                    children: renderProps.children
                })
            })
        ]
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/useListBox":[["useListBox","6VPAz"],["useListBoxSection","6Sp70"],["useOption","dUGjY"]],"./utils":"jtWJJ","react-aria/Collection":"kFD1B","react-aria/CollectionBuilder":"kFD1B","./Collection":"4TSYQ","./DragAndDrop":"kbk3K","react-aria/filterDOMProps":"h4XHF","react-aria/FocusScope":"E8d3D","./Header":"f1ESp","react-aria/private/utils/inertValue":"hBYeu","react-aria/private/collections/BaseCollection":"imRDY","react-aria/ListKeyboardDelegate":"hxzwH","react-stately/useListState":"3g793","react-aria/private/utils/useLoadMoreSentinel":"1ahiI","react-aria/mergeProps":"jycxS","react":"gOP0N","./Autocomplete":"dHgny","./SelectionIndicator":"4EL3s","./Separator":"cuuaI","./SharedElementTransition":"2Pl2F","./Text":"cfMV9","react-aria/useCollator":"ghoIN","react-aria/useFocus":"9bXTE","react-aria/useFocusRing":"bP7um","react-aria/useHover":"2yLrj","react-aria/useKeyboard":"aHm7i","react-aria/I18nProvider":"czGuc","react-aria/useObjectRef":"ec0NJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6VPAz":[function(require,module,exports,__globalThis) {
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

},{"./I18nProvider":"czGuc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6Sp70":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a section in a listbox.
 * See `useListBox` for more details about listboxes.
 *
 * @param props - Props for the section.
 */ parcelHelpers.export(exports, "useListBoxSection", ()=>useListBoxSection);
var _useId = require("../utils/useId");
function useListBoxSection(props) {
    let { heading, 'aria-label': ariaLabel } = props;
    let headingId = (0, _useId.useId)();
    return {
        itemProps: {
            role: 'presentation'
        },
        headingProps: heading ? {
            // Technically, listbox cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, using role="presentation",
            // and only use it as a visual label for the nested group.
            id: headingId,
            role: 'presentation',
            onMouseDown: (e)=>{
                // Prevent DOM focus from moving on mouse down when using virtual focus
                e.preventDefault();
            }
        } : {},
        groupProps: {
            role: 'group',
            'aria-label': ariaLabel,
            'aria-labelledby': heading ? headingId : undefined
        }
    };
}

},{"../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dUGjY":[function(require,module,exports,__globalThis) {
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

},{"../utils/chain":"bQmEj","../utils/filterDOMProps":"h4XHF","react-stately/private/collections/getItemCount":"eLVRI","./utils":"8ZMtS","../interactions/useFocusVisible":"aBfUW","../utils/mergeProps":"jycxS","../selection/useSelectableItem":"3SFOH","../interactions/useHover":"2yLrj","../utils/openLink":"gH3wl","../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eLVRI":[function(require,module,exports,__globalThis) {
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

},{"./getChildNodes":"9KbhA","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4TSYQ":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "SectionContext", ()=>SectionContext);
parcelHelpers.export(exports, "Section", ()=>Section);
parcelHelpers.export(exports, "DefaultCollectionRenderer", ()=>DefaultCollectionRenderer);
parcelHelpers.export(exports, "renderAfterDropIndicators", ()=>renderAfterDropIndicators);
parcelHelpers.export(exports, "CollectionRendererContext", ()=>CollectionRendererContext);
parcelHelpers.export(exports, "usePersistedKeys", ()=>usePersistedKeys);
var _jsxRuntime = require("preact/jsx-runtime");
var _collectionBuilder = require("react-aria/CollectionBuilder");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useCachedChildren = require("react-aria/private/collections/useCachedChildren");
const SectionContext = /*#__PURE__*/ (0, _react.createContext)(null);
const Section = /*#__PURE__*/ (0, _collectionBuilder.createBranchComponent)('section', (props, ref, section)=>{
    let { name, render } = (0, _react.useContext)(SectionContext);
    return render(props, ref, section, 'react-aria-Section');
});
const DefaultCollectionRenderer = {
    CollectionRoot ({ collection, renderDropIndicator }) {
        return useCollectionRender(collection, null, renderDropIndicator);
    },
    CollectionBranch ({ collection, parent, renderDropIndicator }) {
        return useCollectionRender(collection, parent, renderDropIndicator);
    }
};
function useCollectionRender(collection, parent, renderDropIndicator) {
    return (0, _useCachedChildren.useCachedChildren)({
        items: parent ? collection.getChildren(parent.key) : collection,
        dependencies: [
            renderDropIndicator
        ],
        children (node) {
            // Return a empty fragment since we don't want to render the content twice
            // If we don't skip the content node here, we end up rendering them twice in a Tree since we also render the content node in TreeItem
            if (node.type === 'content') return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {});
            let rendered = node.render(node);
            if (!renderDropIndicator || node.type !== 'item') return rendered;
            return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    renderDropIndicator({
                        type: 'item',
                        key: node.key,
                        dropPosition: 'before'
                    }),
                    rendered,
                    renderAfterDropIndicators(collection, node, renderDropIndicator)
                ]
            });
        }
    });
}
function renderAfterDropIndicators(collection, node, renderDropIndicator) {
    let key = node.key;
    let keyAfter = collection.getKeyAfter(key);
    let nextItemInFlattenedCollection = keyAfter != null ? collection.getItem(keyAfter) : null;
    while(nextItemInFlattenedCollection != null && nextItemInFlattenedCollection.type !== 'item'){
        keyAfter = collection.getKeyAfter(nextItemInFlattenedCollection.key);
        nextItemInFlattenedCollection = keyAfter != null ? collection.getItem(keyAfter) : null;
    }
    let nextItemInSameLevel = node.nextKey != null ? collection.getItem(node.nextKey) : null;
    while(nextItemInSameLevel != null && nextItemInSameLevel.type !== 'item')nextItemInSameLevel = nextItemInSameLevel.nextKey != null ? collection.getItem(nextItemInSameLevel.nextKey) : null;
    // Render one or more "after" drop indicators when the next item in the flattened collection
    // has a smaller level, is not an item, or there are no more items in the collection.
    // Otherwise, the "after" position is equivalent to the next item's "before" position.
    let afterIndicators = [];
    if (nextItemInSameLevel == null) {
        let current = node;
        while(current?.type === 'item' && (!nextItemInFlattenedCollection || current.parentKey !== nextItemInFlattenedCollection.parentKey && nextItemInFlattenedCollection.level < current.level)){
            let indicator = renderDropIndicator({
                type: 'item',
                key: current.key,
                dropPosition: 'after'
            });
            if (/*#__PURE__*/ (0, _react.isValidElement)(indicator)) afterIndicators.push(/*#__PURE__*/ (0, _react.cloneElement)(indicator, {
                key: `${current.key}-after`
            }));
            current = current.parentKey != null ? collection.getItem(current.parentKey) : null;
        }
    }
    return afterIndicators;
}
const CollectionRendererContext = /*#__PURE__*/ (0, _react.createContext)(DefaultCollectionRenderer);
function usePersistedKeys(focusedKey) {
    return (0, _react.useMemo)(()=>focusedKey != null ? new Set([
            focusedKey
        ]) : null, [
        focusedKey
    ]);
}

},{"preact/jsx-runtime":"b2Fbn","react-aria/CollectionBuilder":"kFD1B","react":"gOP0N","react-aria/private/collections/useCachedChildren":"5c0At","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kbk3K":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"f1ESp":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "HeaderContext", ()=>HeaderContext);
parcelHelpers.export(exports, "Header", ()=>Header);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _collectionBuilder = require("react-aria/CollectionBuilder");
var _baseCollection = require("react-aria/private/collections/BaseCollection");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const HeaderContext = /*#__PURE__*/ (0, _react.createContext)({});
const Header = /*#__PURE__*/ (0, _collectionBuilder.createLeafComponent)((0, _baseCollection.HeaderNode), function Header(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, HeaderContext);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).header, {
        className: "react-aria-Header",
        ...props,
        ref: ref,
        children: props.children
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/CollectionBuilder":"kFD1B","react-aria/private/collections/BaseCollection":"imRDY","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hBYeu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inertValue", ()=>inertValue);
var _react = require("react");
function inertValue(value) {
    const pieces = (0, _react.version).split('.');
    const major = parseInt(pieces[0], 10);
    if (major >= 19) return value;
    // compatibility with React < 19
    return value ? 'true' : undefined;
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3g793":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1ahiI":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useLoadMoreSentinel", ()=>useLoadMoreSentinel);
var _getScrollParent = require("./getScrollParent");
var _react = require("react");
var _useEffectEvent = require("./useEffectEvent");
var _useLayoutEffect = require("./useLayoutEffect");
function useLoadMoreSentinel(props, ref) {
    let { collection, onLoadMore, scrollOffset = 1, direction = 'end' } = props;
    let sentinelObserver = (0, _react.useRef)(null);
    let triggerLoadMore = (0, _useEffectEvent.useEffectEvent)((entries)=>{
        // Use "isIntersecting" over an equality check of 0 since it seems like there is cases where
        // a intersection ratio of 0 can be reported when isIntersecting is actually true
        for (let entry of entries)// Note that this will be called if the collection changes, even if onLoadMore was already called and is being processed.
        // Up to user discretion as to how to handle these multiple onLoadMore calls
        if (entry.isIntersecting && onLoadMore) onLoadMore();
    });
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (ref.current) {
            // Tear down and set up a new IntersectionObserver when the collection changes so that we can properly trigger additional loadMores if there is room for more items
            // Need to do this tear down and set up since using a large rootMargin will mean the observer's callback isn't called even when scrolling the item into view beause its visibility hasn't actually changed
            // https://codesandbox.io/p/sandbox/magical-swanson-dhgp89?file=%2Fsrc%2FApp.js%3A21%2C21
            const margin = 100 * scrollOffset;
            // For direction='start', right/left margins have no affect for vertical scroll containers. We are not supporting reverse horizontal scroll containers for now.
            const rootMargin = direction === 'start' ? `${margin}% 0px 0px 0px` : `0px ${margin}% ${margin}% ${margin}%`;
            sentinelObserver.current = new IntersectionObserver(triggerLoadMore, {
                root: (0, _getScrollParent.getScrollParent)(ref?.current),
                rootMargin
            });
            sentinelObserver.current.observe(ref.current);
        }
        return ()=>{
            if (sentinelObserver.current) sentinelObserver.current.disconnect();
        };
    }, [
        collection,
        ref,
        scrollOffset,
        direction
    ]);
}

},{"./getScrollParent":"NRzeg","react":"gOP0N","./useEffectEvent":"grBNM","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"NRzeg":[function(require,module,exports,__globalThis) {
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

},{"./isScrollable":"2UC33","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4EL3s":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "SelectionIndicatorContext", ()=>SelectionIndicatorContext);
parcelHelpers.export(exports, "SelectionIndicator", ()=>SelectionIndicator);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _sharedElementTransition = require("./SharedElementTransition");
const SelectionIndicatorContext = /*#__PURE__*/ (0, _react.createContext)({
    isSelected: false
});
const SelectionIndicator = /*#__PURE__*/ (0, _react.forwardRef)(function SelectionIndicator(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, SelectionIndicatorContext);
    let { isSelected, ...otherProps } = props;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _sharedElementTransition.SharedElement), {
        ...otherProps,
        ref: ref,
        className: props.className || 'react-aria-SelectionIndicator',
        name: "SelectionIndicator",
        isVisible: isSelected
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react":"gOP0N","./SharedElementTransition":"2Pl2F","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2Pl2F":[function(require,module,exports,__globalThis) {
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
 * A scope for SharedElements, which animate between parents.
 */ parcelHelpers.export(exports, "SharedElementTransition", ()=>SharedElementTransition);
parcelHelpers.export(exports, "SharedElement", ()=>SharedElement);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _reactDom = require("react-dom");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useLayoutEffect = require("react-aria/private/utils/useLayoutEffect");
var _useObjectRef = require("react-aria/useObjectRef");
const SharedElementContext = /*#__PURE__*/ (0, _react.createContext)(null);
function SharedElementTransition(props) {
    let ref = (0, _react.useRef)({});
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(SharedElementContext.Provider, {
        value: ref,
        children: props.children
    });
}
const SharedElement = /*#__PURE__*/ (0, _react.forwardRef)(function SharedElement(props, ref) {
    let { name, isVisible = true, children, className, style, render, ...divProps } = props;
    let [state, setState] = (0, _react.useState)(isVisible ? 'visible' : 'hidden');
    let scopeRef = (0, _react.useContext)(SharedElementContext);
    if (!scopeRef) throw new Error('<SharedElement> must be rendered inside a <SharedElementTransition>');
    if (isVisible && state === 'hidden') setState('visible');
    ref = (0, _useObjectRef.useObjectRef)(ref);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        let element = ref.current;
        let scope = scopeRef.current;
        let prevSnapshot = scope[name];
        let frame = null;
        if (element && isVisible && prevSnapshot) {
            // Element is transitioning from a previous instance.
            setState('visible');
            let animations = element.getAnimations();
            // Set properties to animate from.
            let values = prevSnapshot.style.map(([property, prevValue])=>{
                let value = element.style[property];
                if (property === 'translate') {
                    let prevRect = prevSnapshot.rect;
                    let currentItem = element.getBoundingClientRect();
                    let deltaX = prevRect.left - currentItem?.left;
                    let deltaY = prevRect.top - currentItem?.top;
                    element.style.translate = `${deltaX}px ${deltaY}px`;
                } else element.style[property] = prevValue;
                return [
                    property,
                    value
                ];
            });
            // Cancel any new animations triggered by these properties.
            for (let a of element.getAnimations())if (!animations.includes(a)) a.cancel();
            // Remove overrides after one frame to animate to the current values.
            frame = requestAnimationFrame(()=>{
                frame = null;
                for (let [property, value] of values)element.style[property] = value;
            });
            delete scope[name];
        } else if (element && isVisible && !prevSnapshot) {
            // No previous instance exists, apply the entering state.
            queueMicrotask(()=>(0, _reactDom.flushSync)(()=>setState('entering')));
            frame = requestAnimationFrame(()=>{
                frame = null;
                setState('visible');
            });
        } else if (element && !isVisible) // Wait until layout effects finish, and check if a snapshot still exists.
        // If so, no new SharedElement consumed it, so enter the exiting state.
        queueMicrotask(()=>{
            if (scope[name]) {
                delete scope[name];
                (0, _reactDom.flushSync)(()=>setState('exiting'));
                Promise.all(element.getAnimations().map((a)=>a.finished)).then(()=>setState('hidden')).catch(()=>{});
            } else // Snapshot was consumed by another instance, unmount.
            setState('hidden');
        });
        return ()=>{
            if (frame != null) cancelAnimationFrame(frame);
            if (element && element.isConnected && !element.hasAttribute('data-exiting')) {
                // On unmount, store a snapshot of the rectangle and computed style for transitioning properties.
                let style = window.getComputedStyle(element);
                if (style.transitionProperty !== 'none') {
                    let transitionProperty = style.transitionProperty.split(/\s*,\s*/);
                    scope[name] = {
                        rect: element.getBoundingClientRect(),
                        style: transitionProperty.map((p)=>[
                                p,
                                style[p]
                            ])
                    };
                }
            }
        };
    }, [
        ref,
        scopeRef,
        name,
        isVisible
    ]);
    let renderProps = (0, _utils.useRenderProps)({
        children,
        className,
        style,
        render,
        values: {
            isEntering: state === 'entering',
            isExiting: state === 'exiting'
        }
    });
    if (state === 'hidden') return null;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...divProps,
        ...renderProps,
        ref: ref,
        "data-entering": state === 'entering' || undefined,
        "data-exiting": state === 'exiting' || undefined
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-dom":"gOP0N","react":"gOP0N","react-aria/private/utils/useLayoutEffect":"h7M6K","react-aria/useObjectRef":"ec0NJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cuuaI":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "SeparatorContext", ()=>SeparatorContext);
parcelHelpers.export(exports, "SeparatorNode", ()=>SeparatorNode);
parcelHelpers.export(exports, "Separator", ()=>Separator);
var _jsxRuntime = require("preact/jsx-runtime");
var _useSeparator = require("react-aria/useSeparator");
var _baseCollection = require("react-aria/private/collections/BaseCollection");
var _utils = require("./utils");
var _collectionBuilder = require("react-aria/CollectionBuilder");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _mergeProps = require("react-aria/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const SeparatorContext = /*#__PURE__*/ (0, _react.createContext)({});
class SeparatorNode extends (0, _baseCollection.CollectionNode) {
    static type = 'separator';
    filter(collection, newCollection) {
        let prevItem = newCollection.getItem(this.prevKey);
        if (prevItem && prevItem.type !== 'separator') {
            let clone = this.clone();
            newCollection.addDescendants(clone, collection);
            return clone;
        }
        return null;
    }
}
const Separator = /*#__PURE__*/ (0, _collectionBuilder.createLeafComponent)(SeparatorNode, function Separator(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, SeparatorContext);
    let { elementType, orientation, style, className, slot, ...otherProps } = props;
    let Element = elementType || 'hr';
    if (Element === 'hr' && orientation === 'vertical') Element = 'div';
    let ElementType = (0, _utils.dom)[Element];
    let { separatorProps } = (0, _useSeparator.useSeparator)({
        ...otherProps,
        elementType,
        orientation
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ElementType, {
        render: props.render,
        ...(0, _mergeProps.mergeProps)(DOMProps, separatorProps),
        style: style,
        className: className ?? 'react-aria-Separator',
        ref: ref,
        slot: slot || undefined
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/useSeparator":"7SEKa","react-aria/private/collections/BaseCollection":"imRDY","./utils":"jtWJJ","react-aria/CollectionBuilder":"kFD1B","react-aria/filterDOMProps":"h4XHF","react-aria/mergeProps":"jycxS","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7SEKa":[function(require,module,exports,__globalThis) {
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

},{"../utils/filterDOMProps":"h4XHF","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9huVw":[function(require,module,exports,__globalThis) {
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
 * Provides localized string search functionality that is useful for filtering or matching items in
 * a list. Options can be provided to adjust the sensitivity to case, diacritics, and other
 * parameters.
 */ parcelHelpers.export(exports, "useFilter", ()=>useFilter);
var _react = require("react");
var _useCollator = require("./useCollator");
function useFilter(options) {
    let collator = (0, _useCollator.useCollator)({
        usage: 'search',
        ...options
    });
    // TODO(later): these methods don't currently support the ignorePunctuation option.
    let startsWith = (0, _react.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        // Normalize both strings so we can slice safely
        // TODO: take into account the ignorePunctuation option as well...
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        return collator.compare(string.slice(0, substring.length), substring) === 0;
    }, [
        collator
    ]);
    let endsWith = (0, _react.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        return collator.compare(string.slice(-substring.length), substring) === 0;
    }, [
        collator
    ]);
    let contains = (0, _react.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        let scan = 0;
        let sliceLen = substring.length;
        for(; scan + sliceLen <= string.length; scan++){
            let slice = string.slice(scan, scan + sliceLen);
            if (collator.compare(substring, slice) === 0) return true;
        }
        return false;
    }, [
        collator
    ]);
    return (0, _react.useMemo)(()=>({
            startsWith,
            endsWith,
            contains
        }), [
        startsWith,
        endsWith,
        contains
    ]);
}

},{"react":"gOP0N","./useCollator":"ghoIN","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"f0xdH":[function(require,module,exports,__globalThis) {
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

},{"./I18nProvider":"czGuc","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"58iim":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","./useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"82VMW":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "DropIndicator", ()=>(0, _dragAndDrop.DropIndicator));
parcelHelpers.export(exports, "DropIndicatorContext", ()=>(0, _dragAndDrop.DropIndicatorContext));
parcelHelpers.export(exports, "DragAndDropContext", ()=>(0, _dragAndDrop.DragAndDropContext));
/**
 * Provides the hooks required to enable drag and drop behavior for a drag and drop compatible
 * collection component.
 */ parcelHelpers.export(exports, "useDragAndDrop", ()=>useDragAndDrop);
var _useDroppableCollection = require("react-aria/useDroppableCollection");
var _useDraggableCollection = require("react-aria/useDraggableCollection");
var _useDraggableCollectionState = require("react-stately/useDraggableCollectionState");
var _useDroppableCollectionState = require("react-stately/useDroppableCollectionState");
var _dragManager = require("react-aria/private/dnd/DragManager");
var _react = require("react");
var _listDropTargetDelegate = require("react-aria/ListDropTargetDelegate");
var _dragAndDrop = require("./DragAndDrop");
function useDragAndDrop(options) {
    let dragAndDropHooks = (0, _react.useMemo)(()=>{
        let { onDrop, onInsert, onItemDrop, onReorder, onMove, onRootDrop, getItems, renderDragPreview, renderDropIndicator, dropTargetDelegate } = options;
        let isDraggable = !!getItems;
        let isDroppable = !!(onDrop || onInsert || onItemDrop || onReorder || onMove || onRootDrop);
        let hooks = {};
        if (isDraggable) {
            hooks.useDraggableCollectionState = function useDraggableCollectionStateOverride(props) {
                // oxlint-disable-next-line react/react-compiler
                return (0, _useDraggableCollectionState.useDraggableCollectionState)({
                    ...props,
                    ...options
                });
            };
            // oxlint-disable-next-line react/react-compiler
            hooks.useDraggableCollection = (0, _useDraggableCollection.useDraggableCollection);
            // oxlint-disable-next-line react/react-compiler
            hooks.useDraggableItem = (0, _useDraggableCollection.useDraggableItem);
            hooks.DragPreview = (0, _useDraggableCollection.DragPreview);
            hooks.renderDragPreview = renderDragPreview;
            hooks.isVirtualDragging = (0, _dragManager.isVirtualDragging);
        }
        if (isDroppable) {
            hooks.useDroppableCollectionState = function useDroppableCollectionStateOverride(props) {
                // oxlint-disable-next-line react/react-compiler
                return (0, _useDroppableCollectionState.useDroppableCollectionState)({
                    ...props,
                    ...options
                });
            };
            // oxlint-disable-next-line react/react-compiler
            hooks.useDroppableItem = (0, _useDroppableCollection.useDroppableItem);
            hooks.useDroppableCollection = function useDroppableCollectionOverride(props, state, ref) {
                // oxlint-disable-next-line react/react-compiler
                return (0, _useDroppableCollection.useDroppableCollection)({
                    ...props,
                    ...options
                }, state, ref);
            };
            // oxlint-disable-next-line react/react-compiler
            hooks.useDropIndicator = (0, _useDroppableCollection.useDropIndicator);
            hooks.renderDropIndicator = renderDropIndicator;
            hooks.dropTargetDelegate = dropTargetDelegate;
            hooks.ListDropTargetDelegate = (0, _listDropTargetDelegate.ListDropTargetDelegate);
        }
        return hooks;
    }, [
        options
    ]);
    return {
        dragAndDropHooks
    };
}

},{"react-aria/useDroppableCollection":[["useDropIndicator","ll66s"],["useDroppableCollection","80jjR"],["useDroppableItem","eh12n"]],"react-aria/useDraggableCollection":[["DragPreview","icgpJ"],["useDraggableCollection","Dewxj"],["useDraggableItem","dAh6x"]],"react-stately/useDraggableCollectionState":"fSQ4g","react-stately/useDroppableCollectionState":"2moel","react-aria/private/dnd/DragManager":"9KS88","react":"gOP0N","react-aria/ListDropTargetDelegate":"1nXCc","./DragAndDrop":"kbk3K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"icgpJ":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "DragPreview", ()=>DragPreview);
var _jsxRuntime = require("preact/jsx-runtime");
var _reactDom = require("react-dom");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const DragPreview = /*#__PURE__*/ (0, _reactDefault.default).forwardRef(function DragPreview(props, ref) {
    let render = props.children;
    let [children, setChildren] = (0, _react.useState)(null);
    let domRef = (0, _react.useRef)(null);
    let raf = (0, _react.useRef)(undefined);
    (0, _react.useImperativeHandle)(ref, ()=>(items, callback)=>{
            // This will be called during the onDragStart event by useDrag. We need to render the
            // preview synchronously before this event returns so we can call event.dataTransfer.setDragImage.
            let result = render(items);
            let element;
            let offsetX;
            let offsetY;
            if (result && typeof result === 'object' && 'element' in result) {
                element = result.element;
                offsetX = result.x;
                offsetY = result.y;
            } else element = result;
            (0, _reactDom.flushSync)(()=>{
                setChildren(element);
            });
            // Yield back to useDrag to set the drag image.
            callback(domRef.current, offsetX, offsetY);
            // Remove the preview from the DOM after a frame so the browser has time to paint.
            raf.current = requestAnimationFrame(()=>{
                setChildren(null);
            });
        }, [
        render
    ]);
    (0, _react.useEffect)(()=>{
        return ()=>{
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, []);
    if (!children) return null;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        style: {
            zIndex: -100,
            position: 'fixed',
            top: 0,
            left: -100000
        },
        ref: domRef,
        children: children
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-dom":"gOP0N","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"Dewxj":[function(require,module,exports,__globalThis) {
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
 * Handles drag interactions for a collection component, with support for traditional mouse and
 * touch based drag and drop, in addition to full parity for keyboard and screen reader users.
 */ parcelHelpers.export(exports, "useDraggableCollection", ()=>useDraggableCollection);
var _utils = require("./utils");
function useDraggableCollection(props, state, ref) {
    // Update global DnD state if this keys within this collection are dragged
    let { draggingCollectionRef } = (0, _utils.globalDndState);
    if (state.draggingKeys.size > 0 && draggingCollectionRef?.current !== ref.current) (0, _utils.setDraggingCollectionRef)(ref);
}

},{"./utils":"UrIm3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"UrIm3":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "droppableCollectionMap", ()=>droppableCollectionMap);
parcelHelpers.export(exports, "DIRECTORY_DRAG_TYPE", ()=>DIRECTORY_DRAG_TYPE);
parcelHelpers.export(exports, "getDroppableCollectionId", ()=>getDroppableCollectionId);
parcelHelpers.export(exports, "getDroppableCollectionRef", ()=>getDroppableCollectionRef);
parcelHelpers.export(exports, "getTypes", ()=>getTypes);
parcelHelpers.export(exports, "useDragModality", ()=>useDragModality);
parcelHelpers.export(exports, "getDragModality", ()=>getDragModality);
parcelHelpers.export(exports, "writeToDataTransfer", ()=>writeToDataTransfer);
parcelHelpers.export(exports, "DragTypes", ()=>DragTypes);
parcelHelpers.export(exports, "readFromDataTransfer", ()=>readFromDataTransfer);
/** Returns whether a drop item contains text data. */ parcelHelpers.export(exports, "isTextDropItem", ()=>isTextDropItem);
/** Returns whether a drop item is a file. */ parcelHelpers.export(exports, "isFileDropItem", ()=>isFileDropItem);
/** Returns whether a drop item is a directory. */ parcelHelpers.export(exports, "isDirectoryDropItem", ()=>isDirectoryDropItem);
parcelHelpers.export(exports, "globalDndState", ()=>globalDndState);
parcelHelpers.export(exports, "setDraggingCollectionRef", ()=>setDraggingCollectionRef);
parcelHelpers.export(exports, "setDraggingKeys", ()=>setDraggingKeys);
parcelHelpers.export(exports, "setDropCollectionRef", ()=>setDropCollectionRef);
parcelHelpers.export(exports, "clearGlobalDnDState", ()=>clearGlobalDnDState);
parcelHelpers.export(exports, "setGlobalDnDState", ()=>setGlobalDnDState);
// Util function to check if the current dragging collection ref is the same as the current targeted droppable collection ref.
// Allows a droppable ref arg in case the global drop collection ref hasn't been set
parcelHelpers.export(exports, "isInternalDropOperation", ()=>isInternalDropOperation);
parcelHelpers.export(exports, "globalDropEffect", ()=>globalDropEffect);
parcelHelpers.export(exports, "setGlobalDropEffect", ()=>setGlobalDropEffect);
parcelHelpers.export(exports, "globalAllowedDropOperations", ()=>globalAllowedDropOperations);
parcelHelpers.export(exports, "setGlobalAllowedDropOperations", ()=>setGlobalAllowedDropOperations);
var _constants = require("./constants");
var _useFocusVisible = require("../interactions/useFocusVisible");
const droppableCollectionMap = new WeakMap();
const DIRECTORY_DRAG_TYPE = Symbol();
function getDroppableCollectionId(state) {
    let { id } = droppableCollectionMap.get(state) || {};
    if (!id) throw new Error('Droppable item outside a droppable collection');
    return id;
}
function getDroppableCollectionRef(state) {
    let { ref } = droppableCollectionMap.get(state) || {};
    if (!ref) throw new Error('Droppable item outside a droppable collection');
    return ref;
}
function getTypes(items) {
    let types = new Set();
    for (let item of items)for (let type of Object.keys(item))types.add(type);
    return types;
}
function mapModality(modality) {
    if (!modality) modality = 'virtual';
    if (modality === 'pointer') modality = 'virtual';
    if (modality === 'virtual' && typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches) modality = 'touch';
    return modality;
}
function useDragModality() {
    return mapModality((0, _useFocusVisible.useInteractionModality)());
}
function getDragModality() {
    return mapModality((0, _useFocusVisible.getInteractionModality)());
}
function writeToDataTransfer(dataTransfer, items) {
    // The data transfer API doesn't support more than one item of a given type at once.
    // In addition, only a small set of types are supported natively for transfer between applications.
    // We allow for both multiple items, as well as multiple representations of a single item.
    // In order to make our API work with the native API, we serialize all items to JSON and
    // store as a single native item. We only need to do this if there is more than one item
    // of the same type, or if an item has more than one representation. Otherwise the native
    // API is sufficient.
    //
    // The DataTransferItemList API also theoretically supports adding files, which would enable
    // dragging binary data out of the browser onto the user's desktop for example. Unfortunately,
    // this does not currently work in any browser, so it is not currently supported by our API.
    // See e.g. https://bugs.chromium.org/p/chromium/issues/detail?id=438479.
    let groupedByType = new Map();
    let needsCustomData = false;
    let customData = [];
    for (let item of items){
        let types = Object.keys(item);
        if (types.length > 1) needsCustomData = true;
        let dataByType = {};
        for (let type of types){
            let typeItems = groupedByType.get(type);
            if (!typeItems) {
                typeItems = [];
                groupedByType.set(type, typeItems);
            } else needsCustomData = true;
            let data = item[type];
            dataByType[type] = data;
            typeItems.push(data);
        }
        customData.push(dataByType);
    }
    for (let [type, items] of groupedByType)if ((0, _constants.NATIVE_DRAG_TYPES).has(type)) {
        // Only one item of a given type can be set on a data transfer.
        // Join all of the items together separated by newlines.
        let data = items.join('\n');
        dataTransfer.items.add(data, type);
    } else // Set data to the first item so we have access to the list of types.
    dataTransfer.items.add(items[0], type);
    if (needsCustomData) {
        let data = JSON.stringify(customData);
        dataTransfer.items.add(data, (0, _constants.CUSTOM_DRAG_TYPE));
    }
}
class DragTypes {
    types;
    includesUnknownTypes;
    constructor(dataTransfer){
        this.types = new Set();
        let hasFiles = false;
        for (let item of dataTransfer.items)if (item.type !== (0, _constants.CUSTOM_DRAG_TYPE)) {
            if (item.kind === 'file') hasFiles = true;
            if (item.type) this.types.add(item.type);
            else // Files with unknown types or extensions that don't map to a known mime type
            // are sometimes exposed as an empty string by the browser. Map to a generic
            // mime type instead. Note that this could also be a directory as there's no
            // way to determine if something is a file or directory until drop.
            this.types.add((0, _constants.GENERIC_TYPE));
        }
        // In Safari, when dragging files, the dataTransfer.items list is empty, but dataTransfer.types contains "Files".
        // Unfortunately, this doesn't tell us what types of files the user is dragging, so we need to assume that any
        // type the user checks for is included. See https://bugs.webkit.org/show_bug.cgi?id=223517.
        this.includesUnknownTypes = !hasFiles && dataTransfer.types.includes('Files');
    }
    has(type) {
        if (Array.isArray(type)) return type.some((t)=>this.has(t));
        if (this.includesUnknownTypes || type === DIRECTORY_DRAG_TYPE && this.types.has((0, _constants.GENERIC_TYPE)) || type === '*/*') return true;
        if (typeof type === 'string') {
            if (type.endsWith('/*')) {
                for (let key of this.types){
                    if (key.startsWith(type.slice(0, -2))) return true;
                }
                return false;
            }
            return this.types.has(type);
        }
        return false;
    }
}
function readFromDataTransfer(dataTransfer) {
    let items = [];
    if (!dataTransfer) return items;
    // If our custom drag type is available, use that. This is a JSON serialized
    // representation of all items in the drag, set when there are multiple items
    // of the same type, or an individual item has multiple representations.
    let hasCustomType = false;
    if (dataTransfer.types.includes((0, _constants.CUSTOM_DRAG_TYPE))) try {
        let data = dataTransfer.getData((0, _constants.CUSTOM_DRAG_TYPE));
        let parsed = JSON.parse(data);
        for (let item of parsed)items.push({
            kind: 'text',
            types: new Set(Object.keys(item)),
            getText: (type)=>Promise.resolve(item[type])
        });
        hasCustomType = true;
    } catch  {
    // ignore
    }
    // Otherwise, map native drag items to items of a single representation.
    if (!hasCustomType) {
        let stringItems = new Map();
        for (let item of dataTransfer.items){
            if (item.kind === 'string') // The data for all formats must be read here because the data transfer gets
            // cleared out after the event handler finishes. If the item has an empty string
            // as a type, the mime type is unknown. Map to a generic mime type instead.
            stringItems.set(item.type || (0, _constants.GENERIC_TYPE), dataTransfer.getData(item.type));
            else if (item.kind === 'file') {
                // Despite the name, webkitGetAsEntry is also implemented in Firefox and Edge.
                // In the future, we may use getAsFileSystemHandle instead, but that's currently
                // only implemented in Chrome.
                if (typeof item.webkitGetAsEntry === 'function') {
                    let entry = item.webkitGetAsEntry();
                    // eslint-disable-next-line max-depth
                    if (!entry) continue;
                    // eslint-disable-next-line max-depth
                    if (entry.isFile) items.push(createFileItem(item.getAsFile()));
                    else if (entry.isDirectory) items.push(createDirectoryItem(entry));
                } else // Assume it's a file.
                items.push(createFileItem(item.getAsFile()));
            }
        }
        // All string items are different representations of the same item. There's no way to have
        // multiple string items at once in the current DataTransfer API.
        if (stringItems.size > 0) items.push({
            kind: 'text',
            types: new Set(stringItems.keys()),
            getText: (type)=>Promise.resolve(stringItems.get(type))
        });
    }
    return items;
}
function blobToString(blob) {
    if (typeof blob.text === 'function') return blob.text();
    // Safari doesn't have the Blob#text() method yet...
    return new Promise((resolve, reject)=>{
        let reader = new FileReader();
        reader.onload = ()=>{
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsText(blob);
    });
}
function createFileItem(file) {
    if (!file) throw new Error('No file provided');
    return {
        kind: 'file',
        type: file.type || (0, _constants.GENERIC_TYPE),
        name: file.name,
        getText: ()=>blobToString(file),
        getFile: ()=>Promise.resolve(file)
    };
}
function createDirectoryItem(entry) {
    return {
        kind: 'directory',
        name: entry.name,
        getEntries: ()=>getEntries(entry)
    };
}
async function* getEntries(item) {
    let reader = item.createReader();
    // We must call readEntries repeatedly because there may be a limit to the
    // number of entries that are returned at once.
    let entries;
    do {
        entries = await new Promise((resolve, reject)=>{
            reader.readEntries(resolve, reject);
        });
        for (let entry of entries){
            if (entry.isFile) {
                let file = await getEntryFile(entry);
                yield createFileItem(file);
            } else if (entry.isDirectory) yield createDirectoryItem(entry);
        }
    }while (entries.length > 0);
}
function getEntryFile(entry) {
    return new Promise((resolve, reject)=>entry.file(resolve, reject));
}
function isTextDropItem(dropItem) {
    return dropItem.kind === 'text';
}
function isFileDropItem(dropItem) {
    return dropItem.kind === 'file';
}
function isDirectoryDropItem(dropItem) {
    return dropItem.kind === 'directory';
}
let globalDndState = {
    draggingKeys: new Set()
};
function setDraggingCollectionRef(ref) {
    globalDndState.draggingCollectionRef = ref;
}
function setDraggingKeys(keys) {
    globalDndState.draggingKeys = keys;
}
function setDropCollectionRef(ref) {
    globalDndState.dropCollectionRef = ref;
}
function clearGlobalDnDState() {
    globalDndState = {
        draggingKeys: new Set()
    };
}
function setGlobalDnDState(state) {
    globalDndState = state;
}
function isInternalDropOperation(ref) {
    let { draggingCollectionRef, dropCollectionRef } = globalDndState;
    return draggingCollectionRef?.current != null && draggingCollectionRef.current === (ref?.current || dropCollectionRef?.current);
}
let globalDropEffect;
function setGlobalDropEffect(dropEffect) {
    globalDropEffect = dropEffect;
}
let globalAllowedDropOperations = (0, _constants.DROP_OPERATION).none;
function setGlobalAllowedDropOperations(o) {
    globalAllowedDropOperations = o;
}

},{"./constants":"2D91w","../interactions/useFocusVisible":"aBfUW","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2D91w":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "DROP_OPERATION", ()=>DROP_OPERATION);
parcelHelpers.export(exports, "DROP_OPERATION_ALLOWED", ()=>DROP_OPERATION_ALLOWED);
parcelHelpers.export(exports, "EFFECT_ALLOWED", ()=>EFFECT_ALLOWED);
parcelHelpers.export(exports, "DROP_EFFECT_TO_DROP_OPERATION", ()=>DROP_EFFECT_TO_DROP_OPERATION);
parcelHelpers.export(exports, "DROP_OPERATION_TO_DROP_EFFECT", ()=>DROP_OPERATION_TO_DROP_EFFECT);
parcelHelpers.export(exports, "NATIVE_DRAG_TYPES", ()=>NATIVE_DRAG_TYPES);
parcelHelpers.export(exports, "CUSTOM_DRAG_TYPE", ()=>CUSTOM_DRAG_TYPE);
parcelHelpers.export(exports, "GENERIC_TYPE", ()=>GENERIC_TYPE);
var DROP_OPERATION = /*#__PURE__*/ function(DROP_OPERATION) {
    DROP_OPERATION[DROP_OPERATION["none"] = 0] = "none";
    DROP_OPERATION[DROP_OPERATION["cancel"] = 0] = "cancel";
    DROP_OPERATION[DROP_OPERATION["move"] = 1] = "move";
    DROP_OPERATION[DROP_OPERATION["copy"] = 2] = "copy";
    DROP_OPERATION[DROP_OPERATION["link"] = 4] = "link";
    DROP_OPERATION[DROP_OPERATION["all"] = 7] = "all";
    return DROP_OPERATION;
}({});
const DROP_OPERATION_ALLOWED = {
    ...DROP_OPERATION,
    copyMove: 3,
    copyLink: 6,
    linkMove: 5,
    all: 7,
    uninitialized: 7
};
const EFFECT_ALLOWED = invert(DROP_OPERATION_ALLOWED);
EFFECT_ALLOWED[7] = 'all'; // ensure we don't map to 'uninitialized'.
const DROP_EFFECT_TO_DROP_OPERATION = {
    none: 'cancel',
    link: 'link',
    copy: 'copy',
    move: 'move'
};
const DROP_OPERATION_TO_DROP_EFFECT = invert(DROP_EFFECT_TO_DROP_OPERATION);
function invert(object) {
    let res = {};
    for(let key in object)res[object[key]] = key;
    return res;
}
const NATIVE_DRAG_TYPES = new Set([
    'text/plain',
    'text/uri-list',
    'text/html'
]);
const CUSTOM_DRAG_TYPE = 'application/vnd.react-aria.items+json';
const GENERIC_TYPE = 'application/octet-stream';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dAh6x":[function(require,module,exports,__globalThis) {
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
 * Handles drag interactions for an item within a draggable collection.
 */ parcelHelpers.export(exports, "useDraggableItem", ()=>useDraggableItem);
var _utils = require("./utils");
var _indexJs = require("../../intl/dnd/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _useDescription = require("../utils/useDescription");
var _useDrag = require("./useDrag");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
const MESSAGES = {
    keyboard: {
        selected: 'dragSelectedKeyboard',
        notSelected: 'dragDescriptionKeyboard'
    },
    touch: {
        selected: 'dragSelectedLongPress',
        notSelected: 'dragDescriptionLongPress'
    },
    virtual: {
        selected: 'dragDescriptionVirtual',
        notSelected: 'dragDescriptionVirtual'
    }
};
function useDraggableItem(props, state) {
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/dnd');
    let isDisabled = state.isDisabled || state.selectionManager.isDisabled(props.key);
    let { dragProps, dragButtonProps } = (0, _useDrag.useDrag)({
        getItems () {
            return state.getItems(props.key);
        },
        preview: state.preview,
        getAllowedDropOperations: state.getAllowedDropOperations,
        hasDragButton: props.hasDragButton,
        onDragStart (e) {
            state.startDrag(props.key, e);
            // Track draggingKeys for useDroppableCollection's default onDrop handler and useDroppableCollectionState's default getDropOperation
            (0, _utils.setDraggingKeys)(state.draggingKeys);
        },
        onDragMove (e) {
            state.moveDrag(e);
        },
        onDragEnd (e) {
            let { dropOperation } = e;
            let isInternal = dropOperation === 'cancel' ? false : (0, _utils.isInternalDropOperation)();
            state.endDrag({
                ...e,
                keys: state.draggingKeys,
                isInternal
            });
            (0, _utils.clearGlobalDnDState)();
        }
    });
    let item = state.collection.getItem(props.key);
    let numKeysForDrag = state.getKeysForDrag(props.key).size;
    let isSelected = numKeysForDrag > 1 && state.selectionManager.isSelected(props.key);
    let dragButtonLabel;
    let description;
    // Override description to include selected item count.
    let modality = (0, _utils.useDragModality)();
    if (!props.hasDragButton && state.selectionManager.selectionMode !== 'none') {
        let msg = MESSAGES[modality][isSelected ? 'selected' : 'notSelected'];
        if (props.hasAction && modality === 'keyboard') msg += 'Alt';
        if (isSelected) description = stringFormatter.format(msg, {
            count: numKeysForDrag
        });
        else description = stringFormatter.format(msg);
        // Remove the onClick handler from useDrag. Long pressing will be required on touch devices,
        // and NVDA/JAWS are always in forms mode within collection components.
        // oxlint-disable-next-line react/react-compiler
        delete dragProps.onClick;
    } else if (isSelected) dragButtonLabel = stringFormatter.format('dragSelectedItems', {
        count: numKeysForDrag
    });
    else {
        let itemText = state.collection.getTextValue?.(props.key) ?? item?.textValue ?? '';
        dragButtonLabel = stringFormatter.format('dragItem', {
            itemText
        });
    }
    let descriptionProps = (0, _useDescription.useDescription)(description);
    if (description) Object.assign(dragProps, descriptionProps);
    if (!props.hasDragButton && props.hasAction) {
        let { onKeyDownCapture, onKeyUpCapture } = dragProps;
        if (modality === 'touch') // Remove long press description if an action is present, because in that case long pressing selects the item.
        // oxlint-disable-next-line react/react-compiler
        delete dragProps['aria-describedby'];
        // Require Alt key if there is a conflicting action.
        // oxlint-disable-next-line react/react-compiler
        dragProps.onKeyDownCapture = (e)=>{
            if (e.altKey) onKeyDownCapture?.(e);
        };
        // oxlint-disable-next-line react/react-compiler
        dragProps.onKeyUpCapture = (e)=>{
            if (e.altKey) onKeyUpCapture?.(e);
        };
    }
    return {
        dragProps: isDisabled ? {} : dragProps,
        dragButtonProps: {
            ...dragButtonProps,
            isDisabled,
            'aria-label': dragButtonLabel
        }
    };
}

},{"./utils":"UrIm3","../../intl/dnd/index.js":"ccBG3","../utils/useDescription":"1bivM","./useDrag":"6E21L","../i18n/useLocalizedStringFormatter":"8lll3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1bivM":[function(require,module,exports,__globalThis) {
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

},{"./useLayoutEffect":"h7M6K","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6E21L":[function(require,module,exports,__globalThis) {
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
 * Handles drag interactions for an element, with support for traditional mouse and touch
 * based drag and drop, in addition to full parity for keyboard and screen reader users.
 */ parcelHelpers.export(exports, "useDrag", ()=>useDrag);
var _react = require("react");
var _dragManager = require("./DragManager");
var _constants = require("./constants");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _utils = require("./utils");
var _indexJs = require("../../intl/dnd/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _platform = require("../utils/platform");
var _isVirtualEvent = require("../utils/isVirtualEvent");
var _useDescription = require("../utils/useDescription");
var _useGlobalListeners = require("../utils/useGlobalListeners");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
const MESSAGES = {
    keyboard: {
        start: 'dragDescriptionKeyboard',
        end: 'endDragKeyboard'
    },
    touch: {
        start: 'dragDescriptionTouch',
        end: 'endDragTouch'
    },
    virtual: {
        start: 'dragDescriptionVirtual',
        end: 'endDragVirtual'
    }
};
function useDrag(options) {
    let { hasDragButton, isDisabled } = options;
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/dnd');
    // oxlint-disable-next-line react/react-compiler
    let state = (0, _react.useRef)({
        options,
        x: 0,
        y: 0
    }).current;
    state.options = options;
    let isDraggingRef = (0, _react.useRef)(null);
    let [isDragging, setDraggingState] = (0, _react.useState)(false);
    let setDragging = (element)=>{
        isDraggingRef.current = element;
        setDraggingState(!!element);
    };
    let { addGlobalListener, removeAllGlobalListeners } = (0, _useGlobalListeners.useGlobalListeners)();
    let modalityOnPointerDown = (0, _react.useRef)(null);
    let onDragStart = (e)=>{
        if (e.defaultPrevented) return;
        // Prevent the drag event from propagating to any parent draggables
        e.stopPropagation();
        // If this drag was initiated by a mobile screen reader (e.g. VoiceOver or TalkBack), enter virtual dragging mode.
        if (modalityOnPointerDown.current === 'virtual') {
            e.preventDefault();
            startDragging((0, _domfunctions.getEventTarget)(e));
            modalityOnPointerDown.current = null;
            return;
        }
        if (typeof options.onDragStart === 'function') options.onDragStart({
            type: 'dragstart',
            x: e.clientX,
            y: e.clientY
        });
        let items = options.getItems();
        // Clear existing data (e.g. selected text on the page would be included in some browsers)
        e.dataTransfer.clearData?.();
        (0, _utils.writeToDataTransfer)(e.dataTransfer, items);
        let allowed = (0, _constants.DROP_OPERATION).all;
        if (typeof options.getAllowedDropOperations === 'function') {
            let allowedOperations = options.getAllowedDropOperations();
            allowed = (0, _constants.DROP_OPERATION).none;
            for (let operation of allowedOperations)allowed |= (0, _constants.DROP_OPERATION)[operation] || (0, _constants.DROP_OPERATION).none;
        }
        (0, _utils.setGlobalAllowedDropOperations)(allowed);
        let effectAllowed = (0, _constants.EFFECT_ALLOWED)[allowed] || 'none';
        e.dataTransfer.effectAllowed = effectAllowed === 'cancel' ? 'none' : effectAllowed;
        // If there is a preview option, use it to render a custom preview image that will
        // appear under the pointer while dragging. If not, the element itself is dragged by the browser.
        if (typeof options.preview?.current === 'function') options.preview.current(items, (node, userX, userY)=>{
            if (!node) return;
            // Compute the offset that the preview will appear under the mouse.
            // If possible, this is based on the point the user clicked on the target.
            // If the preview is much smaller, then just use the center point of the preview.
            let size = node.getBoundingClientRect();
            let rect = e.currentTarget.getBoundingClientRect();
            let defaultX = e.clientX - rect.x;
            let defaultY = e.clientY - rect.y;
            if (defaultX > size.width || defaultY > size.height) {
                defaultX = size.width / 2;
                defaultY = size.height / 2;
            }
            // Start with default offsets.
            let offsetX = defaultX;
            let offsetY = defaultY;
            // If the preview renderer supplied explicit offsets, use those.
            if (typeof userX === 'number' && typeof userY === 'number') {
                offsetX = userX;
                offsetY = userY;
            }
            // Clamp the offset so it stays within the preview bounds. Browsers
            // automatically clamp out-of-range values, but doing it ourselves
            // prevents the visible "snap" that can occur when the browser adjusts
            // them after the first drag update.
            offsetX = Math.max(0, Math.min(offsetX, size.width));
            offsetY = Math.max(0, Math.min(offsetY, size.height));
            // Rounding height to an even number prevents blurry preview seen on some screens
            let height = 2 * Math.round(size.height / 2);
            node.style.height = `${height}px`;
            e.dataTransfer.setDragImage(node, offsetX, offsetY);
        });
        // Enforce that drops are handled by useDrop.
        addGlobalListener(window, 'drop', (e)=>{
            e.preventDefault();
            e.stopPropagation();
            console.warn('Drags initiated from the React Aria useDrag hook may only be dropped on a target created with useDrop. This ensures that a keyboard and screen reader accessible alternative is available.');
        }, {
            once: true
        });
        state.x = e.clientX;
        state.y = e.clientY;
        // Wait a frame before we set dragging to true so that the browser has time to
        // render the preview image before we update the element that has been dragged.
        let target = (0, _domfunctions.getEventTarget)(e);
        requestAnimationFrame(()=>{
            setDragging(target);
        });
    };
    let onDrag = (e)=>{
        // Prevent the drag event from propagating to any parent draggables
        e.stopPropagation();
        if (e.clientX === state.x && e.clientY === state.y) return;
        if (typeof options.onDragMove === 'function') options.onDragMove({
            type: 'dragmove',
            x: e.clientX,
            y: e.clientY
        });
        state.x = e.clientX;
        state.y = e.clientY;
    };
    let onDragEnd = (e)=>{
        // Prevent the drag event from propagating to any parent draggables
        e.stopPropagation();
        if (typeof options.onDragEnd === 'function') {
            let event = {
                type: 'dragend',
                x: e.clientX,
                y: e.clientY,
                dropOperation: (0, _constants.DROP_EFFECT_TO_DROP_OPERATION)[e.dataTransfer.dropEffect]
            };
            // Chrome Android always returns none as its dropEffect so we use the drop effect set in useDrop via
            // onDragEnter/onDragOver instead. https://bugs.chromium.org/p/chromium/issues/detail?id=1353951
            if (0, _utils.globalDropEffect) event.dropOperation = (0, _constants.DROP_EFFECT_TO_DROP_OPERATION)[0, _utils.globalDropEffect];
            options.onDragEnd(event);
        }
        setDragging(null);
        removeAllGlobalListeners();
        (0, _utils.setGlobalAllowedDropOperations)((0, _constants.DROP_OPERATION).none);
        (0, _utils.setGlobalDropEffect)(undefined);
    };
    // If the dragged element is removed from the DOM via onDrop, onDragEnd won't fire: https://bugzilla.mozilla.org/show_bug.cgi?id=460801
    // In this case, we need to manually call onDragEnd on cleanup
    (0, _react.useEffect)(()=>{
        return ()=>{
            // Check that the dragged element has actually unmounted from the DOM and not a React Strict Mode false positive.
            // https://github.com/facebook/react/issues/29585
            // React 16 ran effect cleanups before removing elements from the DOM but did not have this issue.
            if (isDraggingRef.current && (!isDraggingRef.current.isConnected || parseInt((0, _react.version), 10) < 17)) {
                if (typeof state.options.onDragEnd === 'function') {
                    let event = {
                        type: 'dragend',
                        x: 0,
                        y: 0,
                        dropOperation: (0, _constants.DROP_EFFECT_TO_DROP_OPERATION)[(0, _utils.globalDropEffect) || 'none']
                    };
                    state.options.onDragEnd(event);
                }
                setDragging(null);
                (0, _utils.setGlobalAllowedDropOperations)((0, _constants.DROP_OPERATION).none);
                (0, _utils.setGlobalDropEffect)(undefined);
            }
        };
    }, [
        state
    ]);
    let onPress = (e)=>{
        if (e.pointerType !== 'keyboard' && e.pointerType !== 'virtual') return;
        startDragging(e.target);
    };
    let startDragging = (target)=>{
        if (typeof state.options.onDragStart === 'function') {
            let rect = target.getBoundingClientRect();
            state.options.onDragStart({
                type: 'dragstart',
                x: rect.x + rect.width / 2,
                y: rect.y + rect.height / 2
            });
        }
        _dragManager.beginDragging({
            element: target,
            items: state.options.getItems(),
            allowedDropOperations: typeof state.options.getAllowedDropOperations === 'function' ? state.options.getAllowedDropOperations() : [
                'move',
                'copy',
                'link'
            ],
            onDragEnd (e) {
                setDragging(null);
                if (typeof state.options.onDragEnd === 'function') state.options.onDragEnd(e);
            }
        }, stringFormatter);
        setDragging(target);
    };
    let modality = (0, _utils.useDragModality)();
    let message = !isDragging ? MESSAGES[modality].start : MESSAGES[modality].end;
    let descriptionProps = (0, _useDescription.useDescription)(stringFormatter.format(message));
    let interactions = {};
    if (!hasDragButton) // If there's no separate button to trigger accessible drag and drop mode,
    // then add event handlers to the draggable element itself to start dragging.
    // For keyboard, we use the Enter key in a capturing listener to prevent other
    // events such as selection from also occurring. We attempt to infer whether a
    // pointer event (e.g. long press) came from a touch screen reader, and then initiate
    // dragging in the native onDragStart listener above.
    interactions = {
        ...descriptionProps,
        onPointerDown (e) {
            modalityOnPointerDown.current = (0, _isVirtualEvent.isVirtualPointerEvent)(e.nativeEvent) ? 'virtual' : e.pointerType;
            // Try to detect virtual drag passthrough gestures.
            if (e.width < 1 && e.height < 1 && (0, _platform.isIOS)() && (0, _platform.isWebKit)()) // iOS VoiceOver.
            modalityOnPointerDown.current = 'virtual';
            else {
                let rect = e.currentTarget.getBoundingClientRect();
                let offsetX = e.clientX - rect.x;
                let offsetY = e.clientY - rect.y;
                let centerX = rect.width / 2;
                let centerY = rect.height / 2;
                if (Math.abs(offsetX - centerX) <= 0.5 && Math.abs(offsetY - centerY) <= 0.5) // Android TalkBack.
                modalityOnPointerDown.current = 'virtual';
                else modalityOnPointerDown.current = e.pointerType;
            }
        },
        onKeyDownCapture (e) {
            if ((0, _domfunctions.getEventTarget)(e) === e.currentTarget && e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
            }
        },
        onKeyUpCapture (e) {
            if ((0, _domfunctions.getEventTarget)(e) === e.currentTarget && e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
                startDragging((0, _domfunctions.getEventTarget)(e));
            }
        },
        onClick (e) {
            // Handle NVDA/JAWS in browse mode, and touch screen readers. In this case, no keyboard events are fired.
            if ((0, _isVirtualEvent.isVirtualClick)(e.nativeEvent) || modalityOnPointerDown.current === 'virtual') {
                e.preventDefault();
                e.stopPropagation();
                startDragging((0, _domfunctions.getEventTarget)(e));
            }
        }
    };
    if (isDisabled) return {
        dragProps: {
            draggable: false
        },
        dragButtonProps: {},
        isDragging: false
    };
    return {
        dragProps: {
            ...interactions,
            draggable: true,
            onDragStart,
            onDrag,
            onDragEnd
        },
        dragButtonProps: {
            ...descriptionProps,
            onPress
        },
        isDragging
    };
}

},{"react":"gOP0N","./DragManager":"9KS88","./constants":"2D91w","../utils/shadowdom/DOMFunctions":"8kfpz","./utils":"UrIm3","../../intl/dnd/index.js":"ccBG3","../utils/platform":"eBqgD","../utils/isVirtualEvent":"dtScK","../utils/useDescription":"1bivM","../utils/useGlobalListeners":"jsdt1","../i18n/useLocalizedStringFormatter":"8lll3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8lll3":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fSQ4g":[function(require,module,exports,__globalThis) {
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
 * Manages state for a draggable collection.
 */ parcelHelpers.export(exports, "useDraggableCollectionState", ()=>useDraggableCollectionState);
var _react = require("react");
function useDraggableCollectionState(props) {
    let { getItems, isDisabled, collection, selectionManager, onDragStart, onDragMove, onDragEnd, preview, getAllowedDropOperations } = props;
    let [, setDragging] = (0, _react.useState)(false);
    let draggingKeys = (0, _react.useRef)(new Set());
    let draggedKey = (0, _react.useRef)(null);
    let getKeys = (key)=>{
        // The clicked item is always added to the drag. If it is selected, then all of the
        // other selected items are also dragged. If it is not selected, then only the clicked
        // item is dragged. This matches native macOS behavior.
        // Additionally, we filter out any keys that are children of any of the other selected keys
        let keys = new Set();
        if (selectionManager.isSelected(key)) for (let currentKey of selectionManager.selectedKeys){
            let node = collection.getItem(currentKey);
            if (node) {
                let isChild = false;
                let parentKey = node.parentKey;
                while(parentKey != null){
                    // eslint-disable-next-line max-depth
                    if (selectionManager.selectedKeys.has(parentKey)) {
                        isChild = true;
                        break;
                    }
                    let parentNode = collection.getItem(parentKey);
                    parentKey = parentNode ? parentNode.parentKey : null;
                }
                if (!isChild) keys.add(currentKey);
            }
        }
        else keys.add(key);
        return keys;
    };
    return {
        collection,
        selectionManager,
        get draggedKey () {
            return draggedKey.current;
        },
        get draggingKeys () {
            return draggingKeys.current;
        },
        isDragging (key) {
            return draggingKeys.current.has(key);
        },
        getKeysForDrag: getKeys,
        getItems (key) {
            let keys = getKeys(key);
            let items = [];
            for (let key of keys){
                let value = collection.getItem(key)?.value;
                if (value != null) items.push(value);
            }
            return getItems(getKeys(key), items);
        },
        isDisabled,
        preview,
        getAllowedDropOperations,
        startDrag (key, event) {
            let keys = getKeys(key);
            draggingKeys.current = keys;
            draggedKey.current = key;
            selectionManager.setFocused(false);
            setDragging(true);
            if (typeof onDragStart === 'function') onDragStart({
                ...event,
                keys
            });
        },
        moveDrag (event) {
            if (typeof onDragMove === 'function') onDragMove({
                ...event,
                keys: draggingKeys.current
            });
        },
        endDrag (event) {
            let { isInternal } = event;
            if (typeof onDragEnd === 'function') onDragEnd({
                ...event,
                keys: draggingKeys.current,
                isInternal
            });
            draggingKeys.current = new Set();
            draggedKey.current = null;
            setDragging(false);
        }
    };
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ihEVm":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "GridLayout", ()=>GridLayout);
var _useVirtualizerState = require("react-stately/useVirtualizerState");
var _i18Nprovider = require("react-aria/I18nProvider");
var _react = require("react");
class GridLayout extends (0, _useVirtualizerState.GridLayout) {
    // Automatically determine the layout direction from the current locale.
    useLayoutOptions() {
        // oxlint-disable react/react-compiler, react-hooks/rules-of-hooks
        let { direction } = (0, _i18Nprovider.useLocale)();
        return (0, _react.useMemo)(()=>({
                direction
            }), [
            direction
        ]);
    // oxlint-enable react/react-compiler, react-hooks/rules-of-hooks
    }
}

},{"react-stately/useVirtualizerState":"kkGYa","react-aria/I18nProvider":"czGuc","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kkGYa":[function(require,module,exports,__globalThis) {
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
/**
 * GridLayout is a virtualizer Layout implementation
 * that arranges its items in a grid.
 * The items are sized between a minimum and maximum size
 * depending on the width of the container.
 */ parcelHelpers.export(exports, "GridLayout", ()=>GridLayout);
var _layout = require("../virtualizer/Layout");
var _layoutInfo = require("../virtualizer/LayoutInfo");
var _rect = require("../virtualizer/Rect");
var _size = require("../virtualizer/Size");
const DEFAULT_OPTIONS = {
    minItemSize: new (0, _size.Size)(200, 200),
    maxItemSize: new (0, _size.Size)(Infinity, Infinity),
    preserveAspectRatio: false,
    minSpace: new (0, _size.Size)(18, 18),
    maxSpace: Infinity,
    maxColumns: Infinity,
    dropIndicatorThickness: 2,
    loaderHeight: 48
};
class GridLayout extends (0, _layout.Layout) {
    gap = DEFAULT_OPTIONS.minSpace;
    dropIndicatorThickness = 2;
    numColumns = 0;
    direction = 'ltr';
    contentSize = new (0, _size.Size)();
    layoutInfos = new Map();
    margin = 0;
    shouldInvalidateLayoutOptions(newOptions, oldOptions) {
        return newOptions.maxColumns !== oldOptions.maxColumns || newOptions.dropIndicatorThickness !== oldOptions.dropIndicatorThickness || newOptions.preserveAspectRatio !== oldOptions.preserveAspectRatio || !(newOptions.minItemSize || DEFAULT_OPTIONS.minItemSize).equals(oldOptions.minItemSize || DEFAULT_OPTIONS.minItemSize) || !(newOptions.maxItemSize || DEFAULT_OPTIONS.maxItemSize).equals(oldOptions.maxItemSize || DEFAULT_OPTIONS.maxItemSize) || !(newOptions.minSpace || DEFAULT_OPTIONS.minSpace).equals(oldOptions.minSpace || DEFAULT_OPTIONS.minSpace) || newOptions.maxHorizontalSpace !== oldOptions.maxHorizontalSpace || newOptions.loaderHeight !== oldOptions.loaderHeight || newOptions.direction !== oldOptions.direction;
    }
    update(invalidationContext) {
        let { minItemSize = DEFAULT_OPTIONS.minItemSize, maxItemSize = DEFAULT_OPTIONS.maxItemSize, preserveAspectRatio = DEFAULT_OPTIONS.preserveAspectRatio, minSpace = DEFAULT_OPTIONS.minSpace, maxHorizontalSpace = DEFAULT_OPTIONS.maxSpace, maxColumns = DEFAULT_OPTIONS.maxColumns, dropIndicatorThickness = DEFAULT_OPTIONS.dropIndicatorThickness, loaderHeight = DEFAULT_OPTIONS.loaderHeight, direction = 'ltr' } = invalidationContext.layoutOptions || {};
        this.dropIndicatorThickness = dropIndicatorThickness;
        this.direction = direction;
        let virtualizerWidth = this.virtualizer.size.width;
        // The max item width is always the entire viewport.
        // If the max item height is infinity, scale in proportion to the max width.
        let maxItemWidth = Math.min(maxItemSize.width, virtualizerWidth);
        let maxItemHeight = Number.isFinite(maxItemSize.height) ? maxItemSize.height : Math.floor(minItemSize.height / minItemSize.width * maxItemWidth);
        // Compute the number of rows and columns needed to display the content
        let columns = Math.floor(virtualizerWidth / (minItemSize.width + minSpace.width));
        let numColumns = Math.max(1, Math.min(maxColumns, columns));
        this.numColumns = numColumns;
        // Compute the available width (minus the space between items)
        let width = virtualizerWidth - minSpace.width * Math.max(0, numColumns);
        // Compute the item width based on the space available
        let itemWidth = Math.floor(width / numColumns);
        itemWidth = Math.max(minItemSize.width, Math.min(maxItemWidth, itemWidth));
        // Compute the item height, which is proportional to the item width
        let t = (itemWidth - minItemSize.width) / Math.max(1, maxItemWidth - minItemSize.width);
        let itemHeight = minItemSize.height + Math.floor((maxItemHeight - minItemSize.height) * t);
        itemHeight = Math.max(minItemSize.height, Math.min(maxItemHeight, itemHeight));
        // Compute the horizontal spacing, content height and horizontal margin
        let horizontalSpacing = Math.min(Math.max(maxHorizontalSpace, minSpace.width), Math.floor((virtualizerWidth - numColumns * itemWidth) / (numColumns + 1)));
        this.gap = new (0, _size.Size)(horizontalSpacing, minSpace.height);
        this.margin = Math.floor((virtualizerWidth - numColumns * itemWidth - horizontalSpacing * (numColumns + 1)) / 2);
        // If there is a skeleton loader within the last 2 items in the collection, increment the collection size
        // so that an additional row is added for the skeletons.
        let collection = this.virtualizer.collection;
        let collectionSize = collection.size;
        let lastKey = collection.getLastKey();
        for(let i = 0; i < 2 && lastKey != null; i++){
            let item = collection.getItem(lastKey);
            if (item?.type === 'skeleton') {
                collectionSize++;
                break;
            }
            lastKey = collection.getKeyBefore(lastKey);
        }
        let rows = Math.ceil(collectionSize / numColumns);
        let iterator = collection[Symbol.iterator]();
        let y = rows > 0 ? minSpace.height : 0;
        let newLayoutInfos = new Map();
        let skeleton = null;
        let skeletonCount = 0;
        for(let row = 0; row < rows; row++){
            let maxHeight = 0;
            let rowLayoutInfos = [];
            for(let col = 0; col < numColumns; col++){
                // Repeat skeleton until the end of the current row.
                let node = skeleton || iterator.next().value;
                if (!node) break;
                // We will add the loader after the skeletons so skip here
                if (node.type === 'loader') continue;
                if (node.type === 'skeleton') skeleton = node;
                let key = skeleton ? `${skeleton.key}-${skeletonCount++}` : node.key;
                let oldLayoutInfo = this.layoutInfos.get(key);
                let content = node;
                if (skeleton) content = oldLayoutInfo && oldLayoutInfo.content.key === key ? oldLayoutInfo.content : {
                    ...skeleton,
                    key
                };
                let x = horizontalSpacing + col * (itemWidth + horizontalSpacing) + this.margin;
                let height = itemHeight;
                let estimatedSize = !preserveAspectRatio;
                if (oldLayoutInfo && estimatedSize) {
                    height = oldLayoutInfo.rect.height;
                    estimatedSize = invalidationContext.layoutOptionsChanged || invalidationContext.sizeChanged || oldLayoutInfo.estimatedSize || oldLayoutInfo.content !== content;
                }
                let rect = new (0, _rect.Rect)(x, y, itemWidth, height);
                let layoutInfo = new (0, _layoutInfo.LayoutInfo)(node.type, key, rect);
                layoutInfo.estimatedSize = estimatedSize;
                layoutInfo.allowOverflow = true;
                layoutInfo.content = content;
                newLayoutInfos.set(key, layoutInfo);
                rowLayoutInfos.push(layoutInfo);
                maxHeight = Math.max(maxHeight, layoutInfo.rect.height);
            }
            for (let layoutInfo of rowLayoutInfos)layoutInfo.rect.height = maxHeight;
            y += maxHeight + minSpace.height;
            // Keep adding skeleton rows until we fill the viewport
            if (skeleton && row === rows - 1 && y < this.virtualizer.size.height) rows++;
        }
        // Always add the loader sentinel if present in the collection so we can make sure it is never virtualized out.
        let lastNode = collection.getItem(collection.getLastKey());
        if (lastNode?.type === 'loader') {
            if (skeletonCount > 0 || !lastNode.props.isLoading) loaderHeight = 0;
            const loaderWidth = virtualizerWidth - horizontalSpacing * 2;
            // Note that if the user provides isLoading to their sentinel during a case where they only want to render the emptyState, this will reserve
            // room for the loader alongside rendering the emptyState
            let rect = new (0, _rect.Rect)(horizontalSpacing, y, loaderWidth, loaderHeight);
            let layoutInfo = new (0, _layoutInfo.LayoutInfo)('loader', lastNode.key, rect);
            newLayoutInfos.set(lastNode.key, layoutInfo);
            y = layoutInfo.rect.maxY;
        }
        this.layoutInfos = newLayoutInfos;
        this.contentSize = new (0, _size.Size)(this.virtualizer.size.width, y);
    }
    getLayoutInfo(key) {
        return this.layoutInfos.get(key) || null;
    }
    getContentSize() {
        return this.contentSize;
    }
    getVisibleLayoutInfos(rect) {
        let layoutInfos = [];
        for (let layoutInfo of this.layoutInfos.values())if (layoutInfo.rect.intersects(rect) || this.virtualizer.isPersistedKey(layoutInfo.key) || layoutInfo.type === 'loader') layoutInfos.push(layoutInfo);
        return layoutInfos;
    }
    updateItemSize(key, size) {
        let layoutInfo = this.layoutInfos.get(key);
        if (!size || !layoutInfo) return false;
        if (size.height !== layoutInfo.rect.height) {
            let newLayoutInfo = layoutInfo.copy();
            newLayoutInfo.rect.height = size.height;
            newLayoutInfo.estimatedSize = false;
            this.layoutInfos.set(key, newLayoutInfo);
            return true;
        }
        return false;
    }
    getDropTargetFromPoint(x, y, isValidDropTarget) {
        if (this.layoutInfos.size === 0) return {
            type: 'root'
        };
        x += this.virtualizer.visibleRect.x;
        y += this.virtualizer.visibleRect.y;
        // In RTL mode the virtualizer positions items using CSS `right` with the
        // layout rect's x value as the right-offset, but pointer coordinates are
        // in visual (left-origin) space. Flip x so it matches the layout coords.
        if (this.direction === 'rtl' && this.numColumns > 1) x = this.contentSize.width - x;
        // Find the closest item within on either side of the point using the gap width.
        let key = null;
        if (this.numColumns === 1) {
            let searchRect = new (0, _rect.Rect)(x, Math.max(0, y - this.gap.height), 1, Math.max(1, this.gap.height * 2));
            let candidates = this.getVisibleLayoutInfos(searchRect);
            let minDistance = Infinity;
            for (let candidate of candidates){
                // Ignore items outside the search rect, e.g. persisted keys.
                if (!candidate.rect.intersects(searchRect)) continue;
                let yDist = Math.abs(candidate.rect.y - y);
                let maxYDist = Math.abs(candidate.rect.maxY - y);
                let dist = Math.min(yDist, maxYDist);
                if (dist < minDistance) {
                    minDistance = dist;
                    key = candidate.key;
                }
            }
        } else {
            let searchRect = new (0, _rect.Rect)(Math.max(0, x - this.gap.width), y, this.gap.width * 2, 1);
            let candidates = this.getVisibleLayoutInfos(searchRect);
            let minDistance = Infinity;
            for (let candidate of candidates){
                // Ignore items outside the search rect, e.g. persisted keys.
                if (!candidate.rect.intersects(searchRect)) continue;
                let xDist = Math.abs(candidate.rect.x - x);
                let maxXDist = Math.abs(candidate.rect.maxX - x);
                let dist = Math.min(xDist, maxXDist);
                if (dist < minDistance) {
                    minDistance = dist;
                    key = candidate.key;
                }
            }
        }
        let layoutInfo = key != null ? this.getLayoutInfo(key) : null;
        if (!layoutInfo) return {
            type: 'root'
        };
        let target = {
            type: 'item',
            key: layoutInfo.key,
            dropPosition: 'on'
        };
        let pos = this.numColumns === 1 ? y : x;
        let layoutInfoPos = this.numColumns === 1 ? layoutInfo.rect.y : layoutInfo.rect.x;
        let size = this.numColumns === 1 ? layoutInfo.rect.height : layoutInfo.rect.width;
        if (isValidDropTarget(target)) {
            // If dropping on the item is accepted, try the before/after positions
            // if within 5px of the start or end of the item.
            if (pos < layoutInfoPos + 5) target.dropPosition = 'before';
            else if (pos > layoutInfoPos + size - 5) target.dropPosition = 'after';
        } else {
            // If dropping on the item isn't accepted, try the target before or after depending on the position.
            let mid = layoutInfoPos + size / 2;
            if (pos <= mid && isValidDropTarget({
                ...target,
                dropPosition: 'before'
            })) target.dropPosition = 'before';
            else if (pos >= mid && isValidDropTarget({
                ...target,
                dropPosition: 'after'
            })) target.dropPosition = 'after';
        }
        return target;
    }
    getDropTargetLayoutInfo(target) {
        let layoutInfo = this.getLayoutInfo(target.key);
        let rect;
        if (this.numColumns === 1) // Flip from vertical to horizontal if only one column is visible.
        rect = new (0, _rect.Rect)(layoutInfo.rect.x, target.dropPosition === 'before' ? layoutInfo.rect.y - this.gap.height / 2 - this.dropIndicatorThickness / 2 : layoutInfo.rect.maxY + this.gap.height / 2 - this.dropIndicatorThickness / 2, layoutInfo.rect.width, this.dropIndicatorThickness);
        else rect = new (0, _rect.Rect)(target.dropPosition === 'before' ? layoutInfo.rect.x - this.gap.width / 2 - this.dropIndicatorThickness / 2 : layoutInfo.rect.maxX + this.gap.width / 2 - this.dropIndicatorThickness / 2, layoutInfo.rect.y, this.dropIndicatorThickness, layoutInfo.rect.height);
        return new (0, _layoutInfo.LayoutInfo)('dropIndicator', target.key + ':' + target.dropPosition, rect);
    }
}

},{"../virtualizer/Layout":"YYckq","../virtualizer/LayoutInfo":"81Wbi","../virtualizer/Rect":"9sh2q","../virtualizer/Size":"aiymI","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9cL5r":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "GridListContext", ()=>GridListContext);
parcelHelpers.export(exports, "GridList", ()=>GridList);
parcelHelpers.export(exports, "GridListItem", ()=>GridListItem);
parcelHelpers.export(exports, "GridListLoadMoreItem", ()=>GridListLoadMoreItem);
parcelHelpers.export(exports, "GridListSection", ()=>GridListSection);
parcelHelpers.export(exports, "GridListHeaderContext", ()=>GridListHeaderContext);
parcelHelpers.export(exports, "GridListHeaderInnerContext", ()=>GridListHeaderInnerContext);
parcelHelpers.export(exports, "GridListHeader", ()=>GridListHeader);
var _jsxRuntime = require("preact/jsx-runtime");
var _useGridList = require("react-aria/useGridList");
var _button = require("./Button");
var _checkbox = require("./Checkbox");
var _utils = require("./utils");
var _collection = require("react-aria/Collection");
var _collectionBuilder = require("react-aria/CollectionBuilder");
var _collection1 = require("./Collection");
var _dragAndDrop = require("./DragAndDrop");
var _autocomplete = require("./Autocomplete");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _focusScope = require("react-aria/FocusScope");
var _baseCollection = require("react-aria/private/collections/BaseCollection");
var _inertValue = require("react-aria/private/utils/inertValue");
var _listKeyboardDelegate = require("react-aria/ListKeyboardDelegate");
var _useListState = require("react-stately/useListState");
var _listBox = require("./ListBox");
var _useLoadMoreSentinel = require("react-aria/private/utils/useLoadMoreSentinel");
var _mergeProps = require("react-aria/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _selectionIndicator = require("./SelectionIndicator");
var _sharedElementTransition = require("./SharedElementTransition");
var _text = require("./Text");
var _useCollator = require("react-aria/useCollator");
var _useFocusRing = require("react-aria/useFocusRing");
var _useHover = require("react-aria/useHover");
var _i18Nprovider = require("react-aria/I18nProvider");
var _useObjectRef = require("react-aria/useObjectRef");
var _visuallyHidden = require("react-aria/VisuallyHidden");
const GridListContext = /*#__PURE__*/ (0, _react.createContext)(null);
const GridList = /*#__PURE__*/ (0, _react.forwardRef)(function GridList(props, ref) {
    // Render the portal first so that we have the collection by the time we render the DOM in SSR.
    [props, ref] = (0, _utils.useContextProps)(props, ref, GridListContext);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collectionBuilder.CollectionBuilder), {
        content: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collection.Collection), {
            ...props
        }),
        children: (collection)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(GridListInner, {
                props: props,
                collection: collection,
                gridListRef: ref
            })
    });
});
function GridListInner({ props, collection, gridListRef: ref }) {
    // oxlint-disable-next-line react/react-compiler
    [props, ref] = (0, _utils.useContextProps)(props, ref, (0, _autocomplete.SelectableCollectionContext));
    let { // eslint-disable-next-line @typescript-eslint/no-unused-vars
    shouldUseVirtualFocus, filter, disallowTypeAhead, UNSTABLE_focusOnEntry, ...DOMCollectionProps } = props;
    let { dragAndDropHooks, keyboardNavigationBehavior = 'arrow', layout = 'stack', orientation = 'vertical' } = props;
    let { CollectionRoot, isVirtualized, layoutDelegate, dropTargetDelegate: ctxDropTargetDelegate } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let gridlistState = (0, _useListState.useListState)({
        ...DOMCollectionProps,
        collection,
        children: undefined,
        layoutDelegate
    });
    // oxlint-disable-next-line react/react-compiler
    let filteredState = (0, _useListState.UNSTABLE_useFilteredListState)(gridlistState, filter);
    let collator = (0, _useCollator.useCollator)({
        usage: 'search',
        sensitivity: 'base'
    });
    let { disabledBehavior, disabledKeys } = filteredState.selectionManager;
    let { direction } = (0, _i18Nprovider.useLocale)();
    let keyboardDelegate = (0, _react.useMemo)(()=>new (0, _listKeyboardDelegate.ListKeyboardDelegate)({
            collection: filteredState.collection,
            collator,
            ref,
            disabledKeys,
            disabledBehavior,
            layoutDelegate,
            layout,
            orientation,
            direction
        }), [
        filteredState.collection,
        ref,
        layout,
        orientation,
        disabledKeys,
        disabledBehavior,
        layoutDelegate,
        collator,
        direction
    ]);
    let { gridProps } = (0, _useGridList.useGridList)({
        ...DOMCollectionProps,
        keyboardDelegate,
        // Only tab navigation is supported in grid layout.
        keyboardNavigationBehavior: layout === 'grid' ? 'tab' : keyboardNavigationBehavior,
        isVirtualized,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp,
        disallowTypeAhead,
        UNSTABLE_focusOnEntry
    }, filteredState, ref);
    let selectionManager = filteredState.selectionManager;
    let isListDraggable = !!dragAndDropHooks?.useDraggableCollectionState;
    let isListDroppable = !!dragAndDropHooks?.useDroppableCollectionState;
    let dragHooksProvided = (0, _react.useRef)(isListDraggable);
    let dropHooksProvided = (0, _react.useRef)(isListDroppable);
    (0, _react.useEffect)(()=>{
        return;
    }, [
        isListDraggable,
        isListDroppable
    ]);
    let dragState = undefined;
    let dropState = undefined;
    let droppableCollection = undefined;
    let isRootDropTarget = false;
    let dragPreview = null;
    let preview = (0, _react.useRef)(null);
    if (isListDraggable && dragAndDropHooks) {
        // oxlint-disable-next-line react/react-compiler
        dragState = dragAndDropHooks.useDraggableCollectionState({
            collection: filteredState.collection,
            selectionManager,
            preview: dragAndDropHooks.renderDragPreview ? preview : undefined
        });
        // oxlint-disable-next-line react/react-compiler
        dragAndDropHooks.useDraggableCollection({}, dragState, ref);
        let DragPreview = dragAndDropHooks.DragPreview;
        dragPreview = dragAndDropHooks.renderDragPreview ? /*#__PURE__*/ (0, _jsxRuntime.jsx)(DragPreview, {
            ref: preview,
            children: dragAndDropHooks.renderDragPreview
        }) : null;
    }
    if (isListDroppable && dragAndDropHooks) {
        // oxlint-disable-next-line react/react-compiler
        dropState = dragAndDropHooks.useDroppableCollectionState({
            collection: filteredState.collection,
            selectionManager
        });
        let dropTargetDelegate = dragAndDropHooks.dropTargetDelegate || ctxDropTargetDelegate || new dragAndDropHooks.ListDropTargetDelegate(collection, ref, {
            layout,
            direction,
            orientation
        });
        // oxlint-disable-next-line react/react-compiler
        droppableCollection = dragAndDropHooks.useDroppableCollection({
            keyboardDelegate,
            dropTargetDelegate
        }, dropState, ref);
        isRootDropTarget = dropState.isDropTarget({
            type: 'root'
        });
    }
    let { focusProps, isFocused, isFocusVisible } = (0, _useFocusRing.useFocusRing)();
    let isEmpty = filteredState.collection.size === 0;
    let renderValues = {
        isDropTarget: isRootDropTarget,
        orientation,
        isEmpty,
        isFocused,
        isFocusVisible,
        layout,
        state: filteredState
    };
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        children: undefined,
        defaultClassName: 'react-aria-GridList',
        values: renderValues
    });
    let emptyState = null;
    let emptyStatePropOverrides = null;
    if (isEmpty && props.renderEmptyState) {
        let content = props.renderEmptyState(renderValues);
        emptyState = /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
            role: "row",
            "aria-rowindex": 1,
            style: {
                display: 'contents'
            },
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                role: "gridcell",
                style: {
                    display: 'contents'
                },
                children: content
            })
        });
    }
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _focusScope.FocusScope), {
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _utils.dom).div, {
            ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, gridProps, focusProps, droppableCollection?.collectionProps, emptyStatePropOverrides),
            ref: ref,
            slot: props.slot || undefined,
            onScroll: props.onScroll,
            "data-drop-target": isRootDropTarget || undefined,
            "data-empty": isEmpty || undefined,
            "data-focused": isFocused || undefined,
            "data-focus-visible": isFocusVisible || undefined,
            "data-layout": layout,
            "data-orientation": orientation,
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _utils.Provider), {
                    values: [
                        [
                            (0, _listBox.ListStateContext),
                            filteredState
                        ],
                        [
                            (0, _dragAndDrop.DragAndDropContext),
                            {
                                dragAndDropHooks,
                                dragState,
                                dropState
                            }
                        ],
                        [
                            (0, _dragAndDrop.DropIndicatorContext),
                            {
                                render: GridListDropIndicatorWrapper
                            }
                        ]
                    ],
                    children: [
                        isListDroppable && /*#__PURE__*/ (0, _jsxRuntime.jsx)(RootDropIndicator, {}),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _sharedElementTransition.SharedElementTransition), {
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionRoot, {
                                collection: filteredState.collection,
                                scrollRef: ref,
                                persistedKeys: (0, _dragAndDrop.useDndPersistedKeys)(selectionManager, dragAndDropHooks, dropState),
                                renderDropIndicator: (0, _dragAndDrop.useRenderDropIndicator)(dragAndDropHooks, dropState)
                            })
                        })
                    ]
                }),
                emptyState,
                dragPreview
            ]
        })
    });
}
const GridListItem = /*#__PURE__*/ (0, _collectionBuilder.createLeafComponent)((0, _baseCollection.ItemNode), function GridListItem(props, forwardedRef, item) {
    let state = (0, _react.useContext)((0, _listBox.ListStateContext));
    let { dragAndDropHooks, dragState, dropState } = (0, _react.useContext)((0, _dragAndDrop.DragAndDropContext));
    let ref = (0, _useObjectRef.useObjectRef)(forwardedRef);
    let { isVirtualized } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let isDraggable = dragState && !(dragState.isDisabled || dragState.selectionManager.isDisabled(item.key));
    let { rowProps, gridCellProps, descriptionProps, ...states } = (0, _useGridList.useGridListItem)({
        node: item,
        shouldSelectOnPressUp: !!dragState,
        isVirtualized,
        focusMode: props.focusMode,
        allowsArrowNavigation: props.allowsArrowNavigation
    }, state, ref);
    let { hoverProps, isHovered } = (0, _useHover.useHover)({
        // because of https://bugs.webkit.org/show_bug.cgi?id=214609, supporting hover styles when a item is ONLY isDraggable
        // results in hover styles sticking around after a reorder/drop operation...
        isDisabled: !states.allowsSelection && !states.hasAction && !isDraggable,
        onHoverStart: item.props.onHoverStart,
        onHoverChange: item.props.onHoverChange,
        onHoverEnd: item.props.onHoverEnd
    });
    let { isFocusVisible, focusProps } = (0, _useFocusRing.useFocusRing)();
    let { isFocusVisible: isFocusVisibleWithin, focusProps: focusWithinProps } = (0, _useFocusRing.useFocusRing)({
        within: true
    });
    let { checkboxProps } = (0, _useGridList.useGridListSelectionCheckbox)({
        key: item.key
    }, state);
    let buttonProps = state.selectionManager.disabledBehavior === 'all' && states.isDisabled ? {
        isDisabled: true
    } : {};
    let draggableItem = null;
    if (dragState && dragAndDropHooks) draggableItem = dragAndDropHooks.useDraggableItem({
        key: item.key,
        hasDragButton: true
    }, dragState);
    let dropIndicator = null;
    let dropIndicatorRef = (0, _react.useRef)(null);
    let { visuallyHiddenProps } = (0, _visuallyHidden.useVisuallyHidden)();
    if (dropState && dragAndDropHooks) dropIndicator = dragAndDropHooks.useDropIndicator({
        target: {
            type: 'item',
            key: item.key,
            dropPosition: 'on'
        }
    }, dropState, dropIndicatorRef);
    let isDragging = dragState && dragState.isDragging(item.key);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-GridListItem',
        values: {
            ...states,
            isHovered,
            isFocusVisible,
            isFocusVisibleWithin,
            selectionMode: state.selectionManager.selectionMode,
            selectionBehavior: state.selectionManager.selectionBehavior,
            allowsDragging: !!dragState,
            isDragging,
            isDropTarget: dropIndicator?.isDropTarget,
            id: item.key,
            state
        }
    });
    let dragButtonRef = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        if (dragState && !dragButtonRef.current) console.warn('Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
    // eslint-disable-next-line
    }, []);
    (0, _react.useEffect)(()=>{
        item.textValue;
    }, [
        item.textValue
    ]);
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            dropIndicator && !dropIndicator.isHidden && /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                role: "row",
                style: {
                    position: 'absolute'
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                    role: "gridcell",
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        role: "button",
                        ...visuallyHiddenProps,
                        ...dropIndicator?.dropIndicatorProps,
                        ref: dropIndicatorRef
                    })
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
                ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, rowProps, focusProps, focusWithinProps, hoverProps, draggableItem?.dragProps),
                ref: ref,
                "data-selected": states.isSelected || undefined,
                "data-disabled": states.isDisabled || undefined,
                "data-hovered": isHovered || undefined,
                "data-focused": states.isFocused || undefined,
                "data-focus-visible": isFocusVisible || undefined,
                "data-focus-visible-within": isFocusVisibleWithin || undefined,
                "data-pressed": states.isPressed || undefined,
                "data-allows-dragging": !!dragState || undefined,
                "data-dragging": isDragging || undefined,
                "data-drop-target": dropIndicator?.isDropTarget || undefined,
                "data-selection-mode": state.selectionManager.selectionMode === 'none' ? undefined : state.selectionManager.selectionMode,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                    ...gridCellProps,
                    style: {
                        display: 'contents'
                    },
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
                        values: [
                            [
                                (0, _checkbox.CheckboxContext),
                                {
                                    slots: {
                                        [(0, _utils.DEFAULT_SLOT)]: {},
                                        selection: checkboxProps
                                    }
                                }
                            ],
                            [
                                (0, _checkbox.CheckboxFieldContext),
                                {
                                    slots: {
                                        [(0, _utils.DEFAULT_SLOT)]: {},
                                        selection: checkboxProps
                                    }
                                }
                            ],
                            [
                                (0, _button.ButtonContext),
                                {
                                    slots: {
                                        [(0, _utils.DEFAULT_SLOT)]: buttonProps,
                                        drag: {
                                            ...draggableItem?.dragButtonProps,
                                            ref: dragButtonRef,
                                            style: {
                                                pointerEvents: 'none'
                                            }
                                        }
                                    }
                                }
                            ],
                            [
                                (0, _text.TextContext),
                                {
                                    slots: {
                                        [(0, _utils.DEFAULT_SLOT)]: {},
                                        description: descriptionProps
                                    }
                                }
                            ],
                            [
                                (0, _collection1.CollectionRendererContext),
                                (0, _collection1.DefaultCollectionRenderer)
                            ],
                            [
                                (0, _listBox.ListStateContext),
                                null
                            ],
                            [
                                (0, _autocomplete.SelectableCollectionContext),
                                null
                            ],
                            [
                                (0, _autocomplete.FieldInputContext),
                                null
                            ],
                            [
                                (0, _selectionIndicator.SelectionIndicatorContext),
                                {
                                    isSelected: states.isSelected
                                }
                            ]
                        ],
                        children: renderProps.children
                    })
                })
            })
        ]
    });
});
function GridListDropIndicatorWrapper(props, ref) {
    ref = (0, _useObjectRef.useObjectRef)(ref);
    let { dragAndDropHooks, dropState } = (0, _react.useContext)((0, _dragAndDrop.DragAndDropContext));
    let buttonRef = (0, _react.useRef)(null);
    // oxlint-disable-next-line react/react-compiler
    let { dropIndicatorProps, isHidden, isDropTarget } = dragAndDropHooks.useDropIndicator(props, dropState, buttonRef);
    if (isHidden) return null;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(GridListDropIndicatorForwardRef, {
        ...props,
        dropIndicatorProps: dropIndicatorProps,
        isDropTarget: isDropTarget,
        buttonRef: buttonRef,
        ref: ref
    });
}
function GridListDropIndicator(props, ref) {
    let { dropIndicatorProps, isDropTarget, buttonRef, ...otherProps } = props;
    let { visuallyHiddenProps } = (0, _visuallyHidden.useVisuallyHidden)();
    let renderProps = (0, _utils.useRenderProps)({
        ...otherProps,
        defaultClassName: 'react-aria-DropIndicator',
        values: {
            isDropTarget
        }
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...renderProps,
        role: "row",
        ref: ref,
        "data-drop-target": isDropTarget || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
            role: "gridcell",
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                    ...visuallyHiddenProps,
                    role: "button",
                    ...dropIndicatorProps,
                    ref: buttonRef
                }),
                renderProps.children
            ]
        })
    });
}
const GridListDropIndicatorForwardRef = /*#__PURE__*/ (0, _react.forwardRef)(GridListDropIndicator);
function RootDropIndicator() {
    let { dragAndDropHooks, dropState } = (0, _react.useContext)((0, _dragAndDrop.DragAndDropContext));
    let ref = (0, _react.useRef)(null);
    // oxlint-disable-next-line react/react-compiler
    let { dropIndicatorProps } = dragAndDropHooks.useDropIndicator({
        target: {
            type: 'root'
        }
    }, dropState, ref);
    let isDropTarget = dropState.isDropTarget({
        type: 'root'
    });
    let { visuallyHiddenProps } = (0, _visuallyHidden.useVisuallyHidden)();
    if (!isDropTarget && dropIndicatorProps['aria-hidden']) return null;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        role: "row",
        "aria-hidden": dropIndicatorProps['aria-hidden'],
        style: {
            position: 'absolute'
        },
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
            role: "gridcell",
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                role: "button",
                ...visuallyHiddenProps,
                ...dropIndicatorProps,
                ref: ref
            })
        })
    });
}
const GridListLoadMoreItem = (0, _collectionBuilder.createLeafComponent)((0, _baseCollection.LoaderNode), function GridListLoadingIndicator(props, ref, item) {
    let state = (0, _react.useContext)((0, _listBox.ListStateContext));
    let { isVirtualized } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let { isLoading, onLoadMore, scrollOffset, ...otherProps } = props;
    let sentinelRef = (0, _react.useRef)(null);
    let memoedLoadMoreProps = (0, _react.useMemo)(()=>({
            onLoadMore,
            collection: state?.collection,
            sentinelRef,
            scrollOffset
        }), [
        onLoadMore,
        scrollOffset,
        sentinelRef,
        state?.collection
    ]);
    (0, _useLoadMoreSentinel.useLoadMoreSentinel)(memoedLoadMoreProps, sentinelRef);
    let renderProps = (0, _utils.useRenderProps)({
        ...otherProps,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-GridListLoadingIndicator',
        values: undefined
    });
    // For now don't include aria-posinset and aria-setsize on loader since they aren't keyboard focusable
    // Arguably shouldn't include them ever since it might be confusing to the user to include the loaders as part of the
    // item count
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                style: {
                    position: 'relative',
                    width: 0,
                    height: 0
                },
                inert: (0, _inertValue.inertValue)(true),
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                    "data-testid": "loadMoreSentinel",
                    ref: sentinelRef,
                    style: {
                        position: 'absolute',
                        height: 1,
                        width: 1
                    }
                })
            }),
            isLoading && renderProps.children && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
                ...renderProps,
                ...(0, _filterDOMProps.filterDOMProps)(props, {
                    global: true
                }),
                role: "row",
                ref: ref,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                    "aria-colindex": isVirtualized ? 1 : undefined,
                    role: "gridcell",
                    children: renderProps.children
                })
            })
        ]
    });
});
const GridListSection = /*#__PURE__*/ (0, _collectionBuilder.createBranchComponent)((0, _baseCollection.SectionNode), (props, ref, item)=>{
    let state = (0, _react.useContext)((0, _listBox.ListStateContext));
    let { CollectionBranch } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let headingRef = (0, _react.useRef)(null);
    ref = (0, _useObjectRef.useObjectRef)(ref);
    let { rowHeaderProps, rowProps, rowGroupProps } = (0, _useGridList.useGridListSection)({
        'aria-label': props['aria-label'] ?? undefined
    }, state, ref);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        id: undefined,
        children: undefined,
        defaultClassName: 'react-aria-GridListSection',
        values: undefined
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, rowGroupProps),
        ref: ref,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
            values: [
                [
                    GridListHeaderContext,
                    {
                        ...rowProps,
                        ref: headingRef
                    }
                ],
                [
                    GridListHeaderInnerContext,
                    {
                        ...rowHeaderProps
                    }
                ]
            ],
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionBranch, {
                collection: state.collection,
                parent: item
            })
        })
    });
});
const GridListHeaderContext = /*#__PURE__*/ (0, _react.createContext)({});
const GridListHeaderInnerContext = /*#__PURE__*/ (0, _react.createContext)(null);
const GridListHeader = /*#__PURE__*/ (0, _collectionBuilder.createLeafComponent)((0, _baseCollection.HeaderNode), function Header(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, GridListHeaderContext);
    let rowHeaderProps = (0, _react.useContext)(GridListHeaderInnerContext);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        render: props.render,
        className: "react-aria-GridListHeader",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
            ...rowHeaderProps,
            style: {
                display: 'contents'
            },
            children: props.children
        })
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/useGridList":[["useGridList","5FV81"],["useGridListItem","kgaar"],["useGridListSection","39lQx"],["useGridListSelectionCheckbox","adHPb"]],"./Button":"enBVm","./Checkbox":"kjgFU","./utils":"jtWJJ","react-aria/Collection":"kFD1B","react-aria/CollectionBuilder":"kFD1B","./Collection":"4TSYQ","./DragAndDrop":"kbk3K","./Autocomplete":"dHgny","react-aria/filterDOMProps":"h4XHF","react-aria/FocusScope":"E8d3D","react-aria/private/collections/BaseCollection":"imRDY","react-aria/private/utils/inertValue":"hBYeu","react-aria/ListKeyboardDelegate":"hxzwH","react-stately/useListState":"3g793","./ListBox":"l68rZ","react-aria/private/utils/useLoadMoreSentinel":"1ahiI","react-aria/mergeProps":"jycxS","react":"gOP0N","./SelectionIndicator":"4EL3s","./SharedElementTransition":"2Pl2F","./Text":"cfMV9","react-aria/useCollator":"ghoIN","react-aria/useFocusRing":"bP7um","react-aria/useHover":"2yLrj","react-aria/I18nProvider":"czGuc","react-aria/useObjectRef":"ec0NJ","react-aria/VisuallyHidden":"cMf28","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5FV81":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a list component with interactive
 * children. A grid list displays data in a single column and enables a user to navigate its
 * contents via directional navigation keys.
 *
 * @param props - Props for the list.
 * @param state - State for the list, as returned by `useListState`.
 * @param ref - The ref attached to the list element.
 */ parcelHelpers.export(exports, "useGridList", ()=>useGridList);
var _filterDOMProps = require("../utils/filterDOMProps");
var _utils = require("./utils");
var _mergeProps = require("../utils/mergeProps");
var _useGridSelectionAnnouncement = require("../grid/useGridSelectionAnnouncement");
var _useHasTabbableChild = require("../focus/useHasTabbableChild");
var _useHighlightSelectionDescription = require("../grid/useHighlightSelectionDescription");
var _useId = require("../utils/useId");
var _useSelectableList = require("../selection/useSelectableList");
function useGridList(props, state, ref) {
    let { isVirtualized, keyboardDelegate, layoutDelegate, onAction, disallowTypeAhead, linkBehavior = 'action', keyboardNavigationBehavior = 'arrow', escapeKeyBehavior = 'clearSelection', shouldSelectOnPressUp } = props;
    if (!props['aria-label'] && !props['aria-labelledby']) console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let { listProps } = (0, _useSelectableList.useSelectableList)({
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        ref,
        keyboardDelegate,
        layoutDelegate,
        isVirtualized,
        selectOnFocus: state.selectionManager.selectionBehavior === 'replace',
        shouldFocusWrap: props.shouldFocusWrap,
        linkBehavior,
        disallowTypeAhead,
        autoFocus: props.autoFocus,
        escapeKeyBehavior,
        UNSTABLE_focusOnEntry: props.UNSTABLE_focusOnEntry
    });
    let id = (0, _useId.useId)(props.id);
    (0, _utils.listMap).set(state, {
        id,
        onAction,
        linkBehavior,
        keyboardNavigationBehavior,
        shouldSelectOnPressUp
    });
    let descriptionProps = (0, _useHighlightSelectionDescription.useHighlightSelectionDescription)({
        selectionManager: state.selectionManager,
        hasItemActions: !!onAction
    });
    let hasTabbableChild = (0, _useHasTabbableChild.useHasTabbableChild)(ref, {
        isDisabled: state.collection.size !== 0
    });
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    let gridProps = (0, _mergeProps.mergeProps)(domProps, {
        role: 'grid',
        id,
        'aria-multiselectable': state.selectionManager.selectionMode === 'multiple' ? 'true' : undefined
    }, // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    state.collection.size === 0 ? {
        tabIndex: hasTabbableChild ? -1 : 0
    } : listProps, descriptionProps);
    if (isVirtualized) {
        gridProps['aria-rowcount'] = state.collection.size;
        gridProps['aria-colcount'] = 1;
    }
    (0, _useGridSelectionAnnouncement.useGridSelectionAnnouncement)({}, state);
    return {
        gridProps
    };
}

},{"../utils/filterDOMProps":"h4XHF","./utils":"hgri6","../utils/mergeProps":"jycxS","../grid/useGridSelectionAnnouncement":"1oddZ","../focus/useHasTabbableChild":"gjEnQ","../grid/useHighlightSelectionDescription":"hmo1L","../utils/useId":"fQAcb","../selection/useSelectableList":"kK5el","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hgri6":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "listMap", ()=>listMap);
parcelHelpers.export(exports, "getRowId", ()=>getRowId);
parcelHelpers.export(exports, "normalizeKey", ()=>normalizeKey);
const listMap = new WeakMap();
function getRowId(state, key) {
    let { id } = listMap.get(state) ?? {};
    if (!id) throw new Error('Unknown list');
    return `${id}-${normalizeKey(key)}`;
}
function normalizeKey(key) {
    if (typeof key === 'string') return key.replace(/\s*/g, '');
    return '' + key;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gjEnQ":[function(require,module,exports,__globalThis) {
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

},{"./FocusScope":"E8d3D","../utils/useLayoutEffect":"h7M6K","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kgaar":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a row in a grid list.
 *
 * @param props - Props for the row.
 * @param state - State of the parent list, as returned by `useListState`.
 * @param ref - The ref attached to the row element.
 */ parcelHelpers.export(exports, "useGridListItem", ()=>useGridListItem);
var _chain = require("../utils/chain");
var _focusSafely = require("../interactions/focusSafely");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _focusScope = require("../focus/FocusScope");
var _domHelpers = require("../utils/domHelpers");
var _utils = require("./utils");
var _getScrollParent = require("../utils/getScrollParent");
var _react = require("react");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _mergeProps = require("../utils/mergeProps");
var _scrollIntoView = require("../utils/scrollIntoView");
var _useSelectableItem = require("../selection/useSelectableItem");
var _i18Nprovider = require("../i18n/I18nProvider");
var _useId = require("../utils/useId");
var _openLink = require("../utils/openLink");
const EXPANSION_KEYS = {
    expand: {
        ltr: 'ArrowRight',
        rtl: 'ArrowLeft'
    },
    collapse: {
        ltr: 'ArrowLeft',
        rtl: 'ArrowRight'
    }
};
function useGridListItem(props, state, ref) {
    // Copied from useGridCell + some modifications to make it not so grid specific
    let { node, isVirtualized, focusMode = 'row', allowsArrowNavigation } = props;
    // let stringFormatter = useLocalizedStringFormatter(intlMessages, '@react-aria/gridlist');
    let { direction } = (0, _i18Nprovider.useLocale)();
    let { onAction, linkBehavior, keyboardNavigationBehavior, shouldSelectOnPressUp } = (0, _utils.listMap).get(state);
    let descriptionId = (0, _useId.useSlotId)();
    // We need to track the key of the item at the time it was last focused so that we force
    // focus to go to the item when the DOM node is reused for a different item in a virtualizer.
    let keyWhenFocused = (0, _react.useRef)(null);
    let focus = ()=>{
        if (ref.current === null) return;
        if (focusMode === 'child') {
            // If focus is already on a focusable child within the row, early return so we don't shift focus
            if ((0, _domfunctions.isFocusWithin)(ref.current) && ref.current !== (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(ref.current))) return;
            let treeWalker = (0, _focusScope.getFocusableTreeWalker)(ref.current, {
                tabbable: true
            });
            let focusable = treeWalker.firstChild();
            if (focusable) {
                (0, _focusSafely.focusSafely)(focusable);
                (0, _scrollIntoView.scrollIntoViewport)(focusable, {
                    containingElement: (0, _getScrollParent.getScrollParent)(focusable)
                });
                return;
            }
        }
        // Don't shift focus to the row if the active element is a element within the row already
        // (e.g. clicking on a row button)
        if (keyWhenFocused.current != null && node.key !== keyWhenFocused.current || !(0, _domfunctions.isFocusWithin)(ref.current)) (0, _focusSafely.focusSafely)(ref.current);
    };
    let treeGridRowProps = {};
    let hasChildRows = props.hasChildItems;
    let hasLink = state.selectionManager.isLink(node.key);
    if (node != null && 'expandedKeys' in state) {
        // TODO: ideally node.hasChildNodes would be a way to tell if a row has child nodes, but the row's contents make it so that value is always
        // true...
        let children = state.collection.getChildren?.(node.key);
        hasChildRows = hasChildRows || [
            ...children ?? []
        ].length > 1;
        if (onAction == null && !hasLink && state.selectionManager.selectionMode === 'none' && hasChildRows) onAction = ()=>state.toggleKey(node.key);
        let isExpanded = hasChildRows ? state.expandedKeys.has(node.key) : undefined;
        let setSize = 1;
        let index = node.index;
        if (node.level >= 0 && node?.parentKey != null) {
            let parent = state.collection.getItem(node.parentKey);
            if (parent) {
                // siblings must exist because our original node exists
                let siblings = getDirectChildren(parent, state.collection);
                setSize = [
                    ...siblings
                ].filter((row)=>row.type === 'item').length;
                if (index > 0 && siblings[0].type !== 'item') index -= 1; // subtract one for the parent item's content node
            }
        } else setSize = [
            ...state.collection
        ].filter((row)=>row.level === 0 && row.type === 'item').length;
        treeGridRowProps = {
            'aria-expanded': isExpanded,
            'aria-level': node.level + 1,
            'aria-posinset': index + 1,
            'aria-setsize': setSize
        };
    }
    let { itemProps, ...itemStates } = (0, _useSelectableItem.useSelectableItem)({
        selectionManager: state.selectionManager,
        key: node.key,
        ref,
        isVirtualized,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp || shouldSelectOnPressUp,
        onAction: onAction || node.props?.onAction ? (0, _chain.chain)(node.props?.onAction, onAction ? ()=>onAction(node.key) : undefined) : undefined,
        focus,
        linkBehavior
    });
    let onKeyDownCapture = (e)=>{
        let activeElement = (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(ref.current));
        if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e)) || !ref.current || !activeElement) return;
        let walker = (0, _focusScope.getFocusableTreeWalker)(ref.current);
        walker.currentNode = activeElement;
        if (handleTreeExpansionKeys(e, state, node, hasChildRows, direction, activeElement, ref.current, allowsArrowNavigation)) return;
        switch(e.key){
            case 'ArrowLeft':
                if (keyboardNavigationBehavior === 'arrow') {
                    // Find the next focusable element within the row.
                    let focusable = direction === 'rtl' ? walker.nextNode() : walker.previousNode();
                    if (focusable) {
                        e.preventDefault();
                        e.stopPropagation();
                        (0, _focusSafely.focusSafely)(focusable);
                        (0, _scrollIntoView.scrollIntoViewport)(focusable, {
                            containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
                        });
                    } else {
                        // If there is no next focusable child, then return focus back to the row
                        e.preventDefault();
                        e.stopPropagation();
                        if (direction === 'rtl') {
                            (0, _focusSafely.focusSafely)(ref.current);
                            (0, _scrollIntoView.scrollIntoViewport)(ref.current, {
                                containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
                            });
                        } else {
                            walker.currentNode = ref.current;
                            let lastElement = last(walker);
                            // oxlint-disable-next-line max-depth
                            if (lastElement) {
                                (0, _focusSafely.focusSafely)(lastElement);
                                (0, _scrollIntoView.scrollIntoViewport)(lastElement, {
                                    containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
                                });
                            }
                        }
                    }
                }
                break;
            case 'ArrowRight':
                if (keyboardNavigationBehavior === 'arrow') {
                    let focusable = direction === 'rtl' ? walker.previousNode() : walker.nextNode();
                    if (focusable) {
                        e.preventDefault();
                        e.stopPropagation();
                        (0, _focusSafely.focusSafely)(focusable);
                        (0, _scrollIntoView.scrollIntoViewport)(focusable, {
                            containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
                        });
                    } else {
                        e.preventDefault();
                        e.stopPropagation();
                        if (direction === 'ltr') {
                            (0, _focusSafely.focusSafely)(ref.current);
                            (0, _scrollIntoView.scrollIntoViewport)(ref.current, {
                                containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
                            });
                        } else {
                            walker.currentNode = ref.current;
                            let lastElement = last(walker);
                            // oxlint-disable-next-line max-depth
                            if (lastElement) {
                                (0, _focusSafely.focusSafely)(lastElement);
                                (0, _scrollIntoView.scrollIntoViewport)(lastElement, {
                                    containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
                                });
                            }
                        }
                    }
                }
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                // Prevent this event from reaching row children, e.g. menu buttons. We want arrow keys to navigate
                // to the row above/below instead. We need to re-dispatch the event from a higher parent so it still
                // bubbles and gets handled by useSelectableCollection.
                if (!e.altKey && (0, _domfunctions.nodeContains)(ref.current, (0, _domfunctions.getEventTarget)(e))) {
                    e.stopPropagation();
                    e.preventDefault();
                    ref.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                }
                break;
        }
    };
    let onFocus = (e)=>{
        keyWhenFocused.current = node.key;
        if ((0, _domfunctions.getEventTarget)(e) !== ref.current) {
            // useSelectableItem only handles setting the focused key when
            // the focused element is the row itself. We also want to
            // set the focused key when a child element receives focus.
            // If focus is currently visible (e.g. the user is navigating with the keyboard),
            // then skip this. We want to restore focus to the previously focused row
            // in that case since the list should act like a single tab stop.
            if (!(0, _useFocusVisible.isFocusVisible)()) state.selectionManager.setFocusedKey(node.key);
            return;
        }
        // if focus goes back to cell from child, make sure we don't refocus the cell if we are in focusMode=child
        // since that would be a focus trap
        if (focusMode === 'child' && e.relatedTarget && (0, _domfunctions.nodeContains)(ref.current, e.relatedTarget)) return;
        // If the cell itself is focused, wait a frame so that focus finishes propagating
        // up to the tree, and move focus to a focusable child if possible.
        requestAnimationFrame(()=>{
            if (focusMode === 'child' && (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(ref.current)) === ref.current) focus();
        });
    };
    let onKeyDown = (e)=>{
        let activeElement = (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(ref.current));
        if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e)) || !ref.current || !activeElement) return;
        if (keyboardNavigationBehavior === 'tab') {
            // Stop propagation for all events that originate from the children of the gridlist item since we don't want to trigger
            // grid level interactions (row navigation/typeselect/etc)
            // exception made for Tab since that needs to propagate to useSelectableCollection to tab out of the gridlist, might be others?
            if ((0, _domfunctions.getEventTarget)(e) !== ref.current && e.key !== 'Tab') {
                e.stopPropagation();
                return;
            }
            if (handleTreeExpansionKeys(e, state, node, hasChildRows, direction, activeElement, ref.current, allowsArrowNavigation)) return;
        }
        switch(e.key){
            case 'Tab':
                if (keyboardNavigationBehavior === 'tab') {
                    // If there is another focusable element within this item, stop propagation so the tab key
                    // is handled by the browser and not by useSelectableCollection (which would take us out of the list).
                    let walker = (0, _focusScope.getFocusableTreeWalker)(ref.current, {
                        tabbable: true
                    });
                    walker.currentNode = activeElement;
                    let next = e.shiftKey ? walker.previousNode() : walker.nextNode();
                    if (next) e.stopPropagation();
                }
        }
    };
    let syntheticLinkProps = (0, _openLink.useSyntheticLinkProps)(node.props);
    let linkProps = itemStates.hasAction ? syntheticLinkProps : {};
    // TODO: re-add when we get translations and fix this for iOS VO
    // let rowAnnouncement;
    // if (onAction) {
    //   rowAnnouncement = stringFormatter.format('hasActionAnnouncement');
    // } else if (hasLink) {
    //   rowAnnouncement = stringFormatter.format('hasLinkAnnouncement', {
    //     link: node.props.href
    //   });
    // }
    // oxlint-disable-next-line react/react-compiler
    let rowProps = (0, _mergeProps.mergeProps)(itemProps, linkProps, {
        role: 'row',
        onKeyDownCapture: keyboardNavigationBehavior === 'arrow' || allowsArrowNavigation ? onKeyDownCapture : undefined,
        onFocus,
        // 'aria-label': [(node.textValue || undefined), rowAnnouncement].filter(Boolean).join(', '),
        'aria-label': node['aria-label'] || node.textValue || undefined,
        'aria-selected': state.selectionManager.canSelectItem(node.key) ? state.selectionManager.isSelected(node.key) : undefined,
        'aria-disabled': state.selectionManager.isDisabled(node.key) || undefined,
        'aria-labelledby': descriptionId && (node['aria-label'] || node.textValue) ? `${(0, _utils.getRowId)(state, node.key)} ${descriptionId}` : undefined,
        id: (0, _utils.getRowId)(state, node.key)
    });
    if (focusMode === 'child' && allowsArrowNavigation && keyboardNavigationBehavior === 'tab') rowProps.tabIndex = -1;
    // we need to guard against space/enter triggering selection/row link via usePress (from itemProps) so check if propagation
    // is stopped. this also fixes space not working in a textfield in a tree parent row
    let baseOnKeyDown = rowProps.onKeyDown;
    rowProps.onKeyDown = (e)=>{
        onKeyDown(e);
        if (!e.isPropagationStopped()) baseOnKeyDown?.(e);
    };
    if (isVirtualized) {
        let { collection } = state;
        let nodes = [
            ...collection
        ];
        // TODO: refactor ListCollection to store an absolute index of a node's position?
        rowProps['aria-rowindex'] = nodes.find((node)=>node.type === 'section') ? [
            ...collection.getKeys()
        ].filter((key)=>collection.getItem(key)?.type !== 'section').findIndex((key)=>key === node.key) + 1 : node.index + 1;
    }
    let gridCellProps = {
        role: 'gridcell',
        'aria-colindex': 1
    };
    // TODO: should isExpanded and hasChildRows be a item state that gets returned by the hook?
    // oxlint-disable react/react-compiler
    return {
        rowProps: {
            ...(0, _mergeProps.mergeProps)(rowProps, treeGridRowProps)
        },
        gridCellProps,
        descriptionProps: {
            id: descriptionId
        },
        ...itemStates
    };
// oxlint-enable react/react-compiler
}
function handleTreeExpansionKeys(e, state, node, hasChildRows, direction, activeElement, rowRef, allowsArrowNavigation) {
    if (!('expandedKeys' in state) || !allowsArrowNavigation && activeElement !== rowRef) return false;
    if (e.key === EXPANSION_KEYS['expand'][direction] && state.selectionManager.focusedKey === node.key && hasChildRows && !state.expandedKeys.has(node.key)) {
        state.toggleKey(node.key);
        e.stopPropagation();
        return true;
    } else if (e.key === EXPANSION_KEYS['collapse'][direction] && state.selectionManager.focusedKey === node.key) {
        // If item is collapsible, collapse it; else move to parent
        if (hasChildRows && state.expandedKeys.has(node.key)) {
            state.toggleKey(node.key);
            e.stopPropagation();
            return true;
        } else if (!state.expandedKeys.has(node.key) && node.parentKey && state.collection.getItem(node.parentKey)?.type === 'item') {
            // Item is a leaf or already collapsed, move focus to parent
            state.selectionManager.setFocusedKey(node.parentKey);
            e.stopPropagation();
            return true;
        }
    }
    return false;
}
function last(walker) {
    let next = null;
    let last = null;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last);
    return next;
}
function getDirectChildren(parent, collection) {
    // We can't assume that we can use firstChildKey because if a person builds a tree using hooks, they would not have access to that property (using type Node vs CollectionNode)
    // Instead, get all children and start at the first node (rather than just using firstChildKey) and only look at its siblings
    let children = collection.getChildren?.(parent.key);
    let childArray = children ? Array.from(children) : [];
    let node = childArray.length > 0 ? childArray[0] : null;
    let siblings = [];
    while(node){
        siblings.push(node);
        node = node.nextKey != null ? collection.getItem(node.nextKey) : null;
    }
    return siblings;
}

},{"../utils/chain":"bQmEj","../interactions/focusSafely":"2xT6S","../utils/shadowdom/DOMFunctions":"8kfpz","../focus/FocusScope":"E8d3D","../utils/domHelpers":"cYkFa","./utils":"hgri6","../utils/getScrollParent":"NRzeg","react":"gOP0N","../interactions/useFocusVisible":"aBfUW","../utils/mergeProps":"jycxS","../utils/scrollIntoView":"5N7nL","../selection/useSelectableItem":"3SFOH","../i18n/I18nProvider":"czGuc","../utils/useId":"fQAcb","../utils/openLink":"gH3wl","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5N7nL":[function(require,module,exports,__globalThis) {
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

},{"./isScrollable":"2UC33","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"39lQx":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a section in a grid list.
 * See `useGridList` for more details about grid list.
 *
 * @param props - Props for the section.
 */ parcelHelpers.export(exports, "useGridListSection", ()=>useGridListSection);
var _useLabels = require("../utils/useLabels");
var _useId = require("../utils/useId");
function useGridListSection(props, // eslint-disable-next-line @typescript-eslint/no-unused-vars
state, // eslint-disable-next-line @typescript-eslint/no-unused-vars
ref) {
    let { 'aria-label': ariaLabel } = props;
    let headingId = (0, _useId.useSlotId)();
    let labelProps = (0, _useLabels.useLabels)({
        'aria-label': ariaLabel,
        'aria-labelledby': headingId
    });
    return {
        rowProps: {
            role: 'row'
        },
        rowHeaderProps: {
            id: headingId,
            role: 'rowheader'
        },
        rowGroupProps: {
            role: 'rowgroup',
            ...labelProps
        }
    };
}

},{"../utils/useLabels":"8ZwLJ","../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"adHPb":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a selection checkbox in a grid list.
 *
 * @param props - Props for the selection checkbox.
 * @param state - State of the list, as returned by `useListState`.
 */ parcelHelpers.export(exports, "useGridListSelectionCheckbox", ()=>useGridListSelectionCheckbox);
var _useGridSelectionCheckbox = require("../grid/useGridSelectionCheckbox");
var _utils = require("./utils");
function useGridListSelectionCheckbox(props, state) {
    let { key } = props;
    const { checkboxProps } = (0, _useGridSelectionCheckbox.useGridSelectionCheckbox)(props, state);
    return {
        checkboxProps: {
            ...checkboxProps,
            'aria-labelledby': `${checkboxProps.id} ${(0, _utils.getRowId)(state, key)}`
        }
    };
}

},{"../grid/useGridSelectionCheckbox":"7PIkk","./utils":"hgri6","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7PIkk":[function(require,module,exports,__globalThis) {
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

},{"../../intl/grid/index.js":"j9XZN","../utils/useId":"fQAcb","../i18n/useLocalizedStringFormatter":"8lll3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jB98p":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "HeadingContext", ()=>HeadingContext);
parcelHelpers.export(exports, "Heading", ()=>Heading);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const HeadingContext = /*#__PURE__*/ (0, _react.createContext)({});
const Heading = /*#__PURE__*/ (0, _react.forwardRef)(function Heading(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, HeadingContext);
    let { children, level = 3, className, ...domProps } = props;
    let Element = (0, _utils.dom)[`h${level}`];
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Element, {
        ...domProps,
        ref: ref,
        className: className ?? 'react-aria-Heading',
        children: children
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3ty3M":[function(require,module,exports,__globalThis) {
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
 * ListLayout is a virtualizer Layout implementation
 * that arranges its items in a stack along its applied orientation.
 * It supports both fixed and variable size items.
 */ parcelHelpers.export(exports, "ListLayout", ()=>ListLayout);
var _getChildNodes = require("../collections/getChildNodes");
var _layout = require("../virtualizer/Layout");
var _layoutInfo = require("../virtualizer/LayoutInfo");
var _rect = require("../virtualizer/Rect");
var _size = require("../virtualizer/Size");
const DEFAULT_HEIGHT = 48;
class ListLayout extends (0, _layout.Layout) {
    rowSize;
    orientation;
    estimatedRowSize;
    headingSize;
    estimatedHeadingSize;
    loaderSize;
    dropIndicatorThickness;
    gap;
    padding;
    layoutNodes;
    contentSize;
    lastCollection;
    rootNodes;
    invalidateEverything;
    /** The rectangle containing currently valid layout infos. */ validRect;
    /** The rectangle of requested layout infos so far. */ requestedRect;
    /**
   * Creates a new ListLayout with options. See the list of properties below for a description
   * of the options that can be provided.
   */ constructor(options = {}){
        super();
        this.rowSize = options?.rowSize ?? options?.rowHeight ?? null;
        this.orientation = options.orientation ?? 'vertical';
        this.estimatedRowSize = options?.estimatedRowSize ?? options?.estimatedRowHeight ?? null;
        this.headingSize = options?.headingSize ?? options?.headingHeight ?? null;
        this.estimatedHeadingSize = options?.estimatedHeadingSize ?? options?.estimatedHeadingHeight ?? null;
        this.loaderSize = options?.loaderSize ?? options?.loaderHeight ?? null;
        this.dropIndicatorThickness = options.dropIndicatorThickness || 2;
        this.gap = options.gap || 0;
        this.padding = options.padding || 0;
        this.layoutNodes = new Map();
        this.rootNodes = [];
        this.lastCollection = null;
        this.invalidateEverything = false;
        this.validRect = new (0, _rect.Rect)();
        this.requestedRect = new (0, _rect.Rect)();
        this.contentSize = new (0, _size.Size)();
    }
    // Backward compatibility for subclassing.
    get collection() {
        return this.virtualizer.collection;
    }
    /** @deprecated Use `rowSize` instead. */ get rowHeight() {
        return this.rowSize;
    }
    /** @deprecated Use `estimatedRowSize` instead. */ get estimatedRowHeight() {
        return this.estimatedRowSize;
    }
    /** @deprecated Use `headingSize` instead. */ get headingHeight() {
        return this.headingSize;
    }
    /** @deprecated Use `estimatedHeadingSize` instead. */ get estimatedHeadingHeight() {
        return this.estimatedHeadingSize;
    }
    /** @deprecated Use `loaderSize` instead. */ get loaderHeight() {
        return this.loaderSize;
    }
    getLayoutInfo(key) {
        this.ensureLayoutInfo(key);
        return this.layoutNodes.get(key)?.layoutInfo || null;
    }
    getVisibleLayoutInfos(rect) {
        let offsetProperty = this.orientation === 'horizontal' ? 'x' : 'y';
        let heightProperty = this.orientation === 'horizontal' ? 'width' : 'height';
        // Adjust rect to keep number of visible rows consistent.
        // (only if height > 1 or width > 1 for getDropTargetFromPoint)
        if (rect[heightProperty] > 1) {
            let rowHeight = (this.rowSize ?? this.estimatedRowSize ?? DEFAULT_HEIGHT) + this.gap;
            // Clone only before mutating
            rect = rect.copy();
            let offset = Math.floor(rect[offsetProperty] / rowHeight) * rowHeight;
            let height = rect[heightProperty] + rect[offsetProperty] - offset;
            rect[offsetProperty] = offset;
            rect[heightProperty] = Math.ceil(height / rowHeight) * rowHeight;
        }
        // If layout hasn't yet been done for the requested rect, union the
        // new rect with the existing valid rect, and recompute.
        this.layoutIfNeeded(rect);
        let res = [];
        let addNodes = (nodes)=>{
            for (let node of nodes)if (this.isVisible(node, rect)) {
                res.push(node.layoutInfo);
                if (node.children) addNodes(node.children);
            }
        };
        addNodes(this.rootNodes);
        return res;
    }
    layoutIfNeeded(rect) {
        if (!this.lastCollection) return;
        if (!this.requestedRect.containsRect(rect)) {
            this.requestedRect = this.requestedRect.union(rect);
            this.rootNodes = this.buildCollection();
        }
        // Ensure all of the persisted keys are available.
        for (let key of this.virtualizer.persistedKeys){
            if (this.ensureLayoutInfo(key)) return;
        }
    }
    ensureLayoutInfo(key) {
        // If the layout info wasn't found, it might be outside the bounds of the area that we've
        // computed layout for so far. This can happen when accessing a random key, e.g pressing Home/End.
        // Compute the full layout and try again.
        if (!this.layoutNodes.has(key) && this.requestedRect.area < this.contentSize.area && this.lastCollection) {
            this.requestedRect = new (0, _rect.Rect)(0, 0, Infinity, Infinity);
            this.rootNodes = this.buildCollection();
            this.requestedRect = new (0, _rect.Rect)(0, 0, this.contentSize.width, this.contentSize.height);
            return true;
        }
        return false;
    }
    isVisible(node, rect) {
        return node.layoutInfo.rect.intersects(rect) || node.layoutInfo.isSticky || node.layoutInfo.type === 'header' || node.layoutInfo.type === 'loader' || this.virtualizer.isPersistedKey(node.layoutInfo.key);
    }
    shouldInvalidateEverything(invalidationContext) {
        let options = invalidationContext.layoutOptions;
        return invalidationContext.sizeChanged || this.rowSize !== (options?.rowSize ?? options?.rowHeight ?? this.rowSize) || this.orientation !== (options?.orientation ?? this.orientation) || this.headingSize !== (options?.headingSize ?? options?.headingHeight ?? this.headingSize) || this.loaderSize !== (options?.loaderSize ?? options?.loaderHeight ?? this.loaderSize) || this.gap !== (options?.gap ?? this.gap) || this.padding !== (options?.padding ?? this.padding);
    }
    shouldInvalidateLayoutOptions(newOptions, oldOptions) {
        return (newOptions?.rowSize ?? newOptions?.rowHeight) !== (oldOptions?.rowSize ?? oldOptions?.rowHeight) || newOptions.orientation !== oldOptions.orientation || (newOptions?.estimatedRowSize ?? newOptions?.estimatedRowHeight) !== (oldOptions?.estimatedRowSize ?? oldOptions?.estimatedRowHeight) || (newOptions?.headingSize ?? newOptions?.headingHeight) !== (oldOptions?.headingSize ?? oldOptions?.headingHeight) || (newOptions?.estimatedHeadingSize ?? newOptions?.estimatedHeadingHeight) !== (oldOptions?.estimatedHeadingSize ?? oldOptions?.estimatedHeadingHeight) || (newOptions?.loaderSize ?? newOptions?.loaderHeight) !== (oldOptions?.loaderSize ?? oldOptions?.loaderHeight) || newOptions.dropIndicatorThickness !== oldOptions.dropIndicatorThickness || newOptions.gap !== oldOptions.gap || newOptions.padding !== oldOptions.padding;
    }
    update(invalidationContext) {
        let collection = this.virtualizer.collection;
        // Reset valid rect if we will have to invalidate everything.
        // Otherwise we can reuse cached layout infos outside the current visible rect.
        this.invalidateEverything = this.shouldInvalidateEverything(invalidationContext);
        if (this.invalidateEverything) {
            this.requestedRect = this.virtualizer.visibleRect.copy();
            this.layoutNodes.clear();
        }
        let options = invalidationContext.layoutOptions;
        this.rowSize = options?.rowSize ?? options?.rowHeight ?? this.rowSize;
        this.orientation = options?.orientation ?? this.orientation;
        this.estimatedRowSize = options?.estimatedRowSize ?? options?.estimatedRowHeight ?? this.estimatedRowSize;
        this.headingSize = options?.headingSize ?? options?.headingHeight ?? this.headingSize;
        this.estimatedHeadingSize = options?.estimatedHeadingSize ?? options?.estimatedHeadingHeight ?? this.estimatedHeadingSize;
        this.loaderSize = options?.loaderSize ?? options?.loaderHeight ?? this.loaderSize;
        this.dropIndicatorThickness = options?.dropIndicatorThickness ?? this.dropIndicatorThickness;
        this.gap = options?.gap ?? this.gap;
        this.padding = options?.padding ?? this.padding;
        this.rootNodes = this.buildCollection();
        // Remove deleted layout nodes
        if (this.lastCollection && collection !== this.lastCollection) {
            for (let key of this.lastCollection.getKeys())if (!collection.getItem(key)) {
                let layoutNode = this.layoutNodes.get(key);
                if (layoutNode) this.layoutNodes.delete(key);
            }
        }
        this.lastCollection = collection;
        this.invalidateEverything = false;
        this.validRect = this.requestedRect.copy();
    }
    buildCollection(offset = this.padding) {
        let collection = this.virtualizer.collection;
        let offsetProperty = this.orientation === 'horizontal' ? 'x' : 'y';
        let maxOffsetProperty = this.orientation === 'horizontal' ? 'maxX' : 'maxY';
        // filter out content nodes since we don't want them to affect the height
        // Tree specific for now, if we add content nodes to other collection items, we might need to reconsider this
        let collectionNodes = toArray(collection, (node)=>node.type !== 'content');
        let loaderNodes = collectionNodes.filter((node)=>node.type === 'loader');
        let nodes = [];
        let isEmptyOrLoading = collection?.size === 0;
        if (isEmptyOrLoading) offset = 0;
        for (let node of collectionNodes){
            let rowHeight = (this.rowSize ?? this.estimatedRowSize ?? DEFAULT_HEIGHT) + this.gap;
            // Skip rows before the valid rectangle unless they are already cached.
            if (node.type === 'item' && offset + rowHeight < this.requestedRect[offsetProperty] && !this.isValid(node, offset)) {
                offset += rowHeight;
                continue;
            }
            let layoutNode = this.orientation === 'horizontal' ? this.buildChild(node, offset, this.padding, null) : this.buildChild(node, this.padding, offset, null);
            offset = layoutNode.layoutInfo.rect[maxOffsetProperty] + this.gap;
            nodes.push(layoutNode);
            if (node.type === 'loader') {
                let index = loaderNodes.indexOf(node);
                loaderNodes.splice(index, 1);
            }
            // Build each loader that exists in the collection that is outside the visible rect so that they are persisted
            // at the proper estimated location. If the node.type is "section" then we don't do this shortcut since we have to
            // build the sections to see how tall they are.
            if ((node.type === 'item' || node.type === 'loader') && offset > this.requestedRect[maxOffsetProperty]) {
                let lastProcessedIndex = collectionNodes.indexOf(node);
                for (let loaderNode of loaderNodes){
                    let loaderNodeIndex = collectionNodes.indexOf(loaderNode);
                    // Subtract by an additional 1 since we've already added the current item's height to y
                    offset += (loaderNodeIndex - lastProcessedIndex - 1) * rowHeight;
                    let loader = this.orientation === 'horizontal' ? this.buildChild(loaderNode, offset, this.padding, null) : this.buildChild(loaderNode, this.padding, offset, null);
                    nodes.push(loader);
                    offset = loader.layoutInfo.rect[maxOffsetProperty];
                    lastProcessedIndex = loaderNodeIndex;
                }
                // Account for the rest of the items after the last loader spinner, subtract by 1 since we've processed the current node's height already
                offset += (collectionNodes.length - lastProcessedIndex - 1) * rowHeight;
                break;
            }
        }
        offset = Math.max(offset - this.gap, 0);
        offset += isEmptyOrLoading ? 0 : this.padding;
        this.contentSize = this.orientation === 'horizontal' ? new (0, _size.Size)(offset, this.virtualizer.size.height) : new (0, _size.Size)(this.virtualizer.size.width, offset);
        return nodes;
    }
    isValid(node, offset) {
        let cached = this.layoutNodes.get(node.key);
        let offsetProperty = this.orientation === 'horizontal' ? 'x' : 'y';
        return !this.invalidateEverything && !!cached && cached.node === node && offset === cached.layoutInfo.rect[offsetProperty] && cached.layoutInfo.rect.intersects(this.validRect) && cached.validRect.containsRect(cached.layoutInfo.rect.intersection(this.requestedRect));
    }
    buildChild(node, x, y, parentKey) {
        if (this.isValid(node, this.orientation === 'horizontal' ? x : y)) return this.layoutNodes.get(node.key);
        let layoutNode = this.buildNode(node, x, y);
        layoutNode.layoutInfo.parentKey = parentKey ?? null;
        layoutNode.layoutInfo.allowOverflow = true;
        this.layoutNodes.set(node.key, layoutNode);
        return layoutNode;
    }
    buildNode(node, x, y) {
        switch(node.type){
            case 'section':
                return this.buildSection(node, x, y);
            case 'item':
                return this.buildItem(node, x, y);
            case 'header':
                return this.buildSectionHeader(node, x, y);
            case 'loader':
                return this.buildLoader(node, x, y);
            case 'separator':
                return this.buildItem(node, x, y);
            // uses buildSection instead of buildItem cuz it has a child node (the trigger)
            // that need to be processed
            case 'submenutrigger':
                return this.buildSection(node, x, y);
            default:
                throw new Error('Unsupported node type: ' + node.type);
        }
    }
    buildLoader(node, x, y) {
        let rect = new (0, _rect.Rect)(x, y, this.padding, 0);
        let layoutInfo = new (0, _layoutInfo.LayoutInfo)(node.type, node.key, rect);
        // Note that if the user provides isLoading to their sentinel during a case where they only want to render the emptyState, this will reserve
        // room for the loader alongside rendering the emptyState
        if (this.orientation === 'horizontal') {
            rect.height = this.virtualizer.contentSize.height - this.padding - y;
            rect.width = node.props.isLoading ? this.loaderSize ?? this.rowSize ?? this.estimatedRowSize ?? DEFAULT_HEIGHT : 0;
        } else {
            rect.width = this.virtualizer.contentSize.width - this.padding - x;
            rect.height = node.props.isLoading ? this.loaderSize ?? this.rowSize ?? this.estimatedRowSize ?? DEFAULT_HEIGHT : 0;
        }
        return {
            layoutInfo,
            validRect: rect.intersection(this.requestedRect)
        };
    }
    buildSection(node, x, y) {
        let collection = this.virtualizer.collection;
        let width = this.virtualizer.size.width - this.padding - x;
        let height = this.virtualizer.size.height - this.padding - y;
        let rect = this.orientation === 'horizontal' ? new (0, _rect.Rect)(x, y, 0, height) : new (0, _rect.Rect)(x, y, width, 0);
        let layoutInfo = new (0, _layoutInfo.LayoutInfo)(node.type, node.key, rect);
        let offset = this.orientation === 'horizontal' ? x : y;
        let offsetProperty = this.orientation === 'horizontal' ? 'x' : 'y';
        let maxOffsetProperty = this.orientation === 'horizontal' ? 'maxX' : 'maxY';
        let heightProperty = this.orientation === 'horizontal' ? 'width' : 'height';
        let skipped = 0;
        let children = [];
        for (let child of (0, _getChildNodes.getChildNodes)(node, collection)){
            // skip if it is a content node, Tree specific for now, if we add content nodes to other collection items, we might need to reconsider this
            if (child.type === 'content') continue;
            let rowHeight = (this.rowSize ?? this.estimatedRowSize ?? DEFAULT_HEIGHT) + this.gap;
            // Skip rows before the valid rectangle unless they are already cached.
            if (offset + rowHeight < this.requestedRect[offsetProperty] && !this.isValid(node, offset)) {
                offset += rowHeight;
                skipped++;
                continue;
            }
            let layoutNode = this.orientation === 'horizontal' ? this.buildChild(child, offset, y, layoutInfo.key) : this.buildChild(child, x, offset, layoutInfo.key);
            offset = layoutNode.layoutInfo.rect[maxOffsetProperty] + this.gap;
            children.push(layoutNode);
            if (offset > this.requestedRect[maxOffsetProperty]) {
                // Estimate the remaining height for rows that we don't need to layout right now.
                offset += ([
                    ...(0, _getChildNodes.getChildNodes)(node, collection)
                ].length - (children.length + skipped)) * rowHeight;
                break;
            }
        }
        offset -= this.gap;
        rect[heightProperty] = offset - (this.orientation === 'horizontal' ? x : y);
        return {
            layoutInfo,
            children,
            validRect: layoutInfo.rect.intersection(this.requestedRect),
            node
        };
    }
    buildSectionHeader(node, x, y) {
        let widthProperty = this.orientation === 'horizontal' ? 'height' : 'width';
        let heightProperty = this.orientation === 'horizontal' ? 'width' : 'height';
        let width = this.virtualizer.size[widthProperty] - this.padding - (this.orientation === 'horizontal' ? y : x);
        let rectHeight = this.headingSize;
        let isEstimated = false;
        // If no explicit height is available, use an estimated height.
        if (rectHeight == null) {
            // If a previous version of this layout info exists, reuse its height.
            // Mark as estimated if the size of the overall virtualizer changed,
            // or the content of the item changed.
            let previousLayoutNode = this.layoutNodes.get(node.key);
            let previousLayoutInfo = previousLayoutNode?.layoutInfo;
            if (previousLayoutInfo) {
                let curNode = this.virtualizer.collection.getItem(node.key);
                let lastNode = this.lastCollection ? this.lastCollection.getItem(node.key) : null;
                rectHeight = previousLayoutNode.layoutInfo.rect[heightProperty];
                isEstimated = width !== previousLayoutInfo.rect[widthProperty] || curNode !== lastNode || previousLayoutInfo.estimatedSize;
            } else {
                rectHeight = node.rendered ? this.estimatedHeadingSize : 0;
                isEstimated = true;
            }
        }
        if (rectHeight == null) rectHeight = DEFAULT_HEIGHT;
        let headerRect = this.orientation === 'horizontal' ? new (0, _rect.Rect)(x, y, rectHeight, width - y) : new (0, _rect.Rect)(x, y, width - x, rectHeight);
        let header = new (0, _layoutInfo.LayoutInfo)('header', node.key, headerRect);
        header.estimatedSize = isEstimated;
        return {
            layoutInfo: header,
            children: [],
            validRect: header.rect.intersection(this.requestedRect),
            node
        };
    }
    buildItem(node, x, y) {
        let widthProperty = this.orientation === 'horizontal' ? 'height' : 'width';
        let heightProperty = this.orientation === 'horizontal' ? 'width' : 'height';
        let width = this.virtualizer.size[widthProperty] - this.padding - (this.orientation === 'horizontal' ? y : x);
        let rectHeight = this.rowSize;
        let isEstimated = false;
        // If no explicit height is available, use an estimated height.
        if (rectHeight == null) {
            // If a previous version of this layout info exists, reuse its height.
            // Mark as estimated if the size of the overall virtualizer changed,
            // or the content of the item changed.
            let previousLayoutNode = this.layoutNodes.get(node.key);
            if (previousLayoutNode) {
                rectHeight = previousLayoutNode.layoutInfo.rect[heightProperty];
                isEstimated = width !== previousLayoutNode.layoutInfo.rect[widthProperty] || node !== previousLayoutNode.node || previousLayoutNode.layoutInfo.estimatedSize;
            } else {
                rectHeight = this.estimatedRowSize;
                isEstimated = true;
            }
        }
        if (rectHeight == null) rectHeight = DEFAULT_HEIGHT;
        let rect = this.orientation === 'horizontal' ? new (0, _rect.Rect)(x, y, rectHeight, width) : new (0, _rect.Rect)(x, y, width, rectHeight);
        let layoutInfo = new (0, _layoutInfo.LayoutInfo)(node.type, node.key, rect);
        layoutInfo.estimatedSize = isEstimated;
        return {
            layoutInfo,
            children: [],
            validRect: layoutInfo.rect.intersection(this.requestedRect),
            node
        };
    }
    updateItemSize(key, size) {
        let layoutNode = this.layoutNodes.get(key);
        // If no layoutInfo, item has been deleted/removed.
        if (!layoutNode) return false;
        let collection = this.virtualizer.collection;
        let layoutInfo = layoutNode.layoutInfo;
        let offsetProperty = this.orientation === 'horizontal' ? 'x' : 'y';
        let heightProperty = this.orientation === 'horizontal' ? 'width' : 'height';
        layoutInfo.estimatedSize = false;
        if (layoutInfo.rect[heightProperty] !== size[heightProperty]) {
            // Copy layout info rather than mutating so that later caches are invalidated.
            let newLayoutInfo = layoutInfo.copy();
            newLayoutInfo.rect[heightProperty] = size[heightProperty];
            layoutNode.layoutInfo = newLayoutInfo;
            // Items after this layoutInfo will need to be repositioned to account for the new height.
            // Adjust the validRect so that only items above remain valid.
            this.validRect[heightProperty] = Math.min(this.validRect[heightProperty], layoutInfo.rect[offsetProperty] - this.validRect[offsetProperty]);
            // The requestedRect also needs to be adjusted to account for the height difference.
            if (layoutNode.node?.type === 'item') this.requestedRect[heightProperty] += newLayoutInfo.rect[heightProperty] - layoutInfo.rect[heightProperty];
            // Invalidate layout for this layout node and all parents
            this.updateLayoutNode(key, layoutInfo, newLayoutInfo);
            let node = layoutInfo.parentKey != null ? collection.getItem(layoutInfo.parentKey) : null;
            while(node){
                this.updateLayoutNode(node.key, layoutInfo, newLayoutInfo);
                node = node.parentKey != null ? collection.getItem(node.parentKey) : null;
            }
            return true;
        }
        return false;
    }
    updateLayoutNode(key, oldLayoutInfo, newLayoutInfo) {
        let n = this.layoutNodes.get(key);
        if (n) {
            // Invalidate by intersecting the validRect of this node with the overall validRect.
            n.validRect = n.validRect.intersection(this.validRect);
            // Replace layout info in LayoutNode
            if (n.layoutInfo === oldLayoutInfo) n.layoutInfo = newLayoutInfo;
        }
    }
    getContentSize() {
        return this.contentSize;
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
            if (!candidate.rect.intersects(searchRect)) continue;
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
        let layoutInfo = this.getLayoutInfo(target.key);
        let rect;
        if (target.dropPosition === 'before') rect = this.orientation === 'horizontal' ? new (0, _rect.Rect)(Math.max(0, layoutInfo.rect.x - this.dropIndicatorThickness / 2), layoutInfo.rect.y, this.dropIndicatorThickness, layoutInfo.rect.height) : new (0, _rect.Rect)(layoutInfo.rect.x, Math.max(0, layoutInfo.rect.y - this.dropIndicatorThickness / 2), layoutInfo.rect.width, this.dropIndicatorThickness);
        else if (target.dropPosition === 'after') {
            // Render after last visible descendant of the drop target.
            let targetNode = this.collection.getItem(target.key);
            if (targetNode) {
                let targetLevel = targetNode.level ?? 0;
                let currentKey = this.collection.getKeyAfter(target.key);
                while(currentKey != null){
                    let node = this.collection.getItem(currentKey);
                    if (!node || node.level <= targetLevel) break;
                    layoutInfo = this.getLayoutInfo(currentKey) || layoutInfo;
                    currentKey = this.collection.getKeyAfter(currentKey);
                }
            }
            rect = this.orientation === 'horizontal' ? new (0, _rect.Rect)(layoutInfo.rect.maxX - this.dropIndicatorThickness / 2, layoutInfo.rect.y, this.dropIndicatorThickness, layoutInfo.rect.height) : new (0, _rect.Rect)(layoutInfo.rect.x, layoutInfo.rect.maxY - this.dropIndicatorThickness / 2, layoutInfo.rect.width, this.dropIndicatorThickness);
        } else rect = layoutInfo.rect;
        return new (0, _layoutInfo.LayoutInfo)('dropIndicator', target.key + ':' + target.dropPosition, rect);
    }
}
function toArray(collection, predicate) {
    const result = [];
    for (const node of collection)if (predicate(node)) result.push(node);
    return result;
}

},{"../collections/getChildNodes":"9KbhA","../virtualizer/Layout":"YYckq","../virtualizer/LayoutInfo":"81Wbi","../virtualizer/Rect":"9sh2q","../virtualizer/Size":"aiymI","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lIBvk":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "WaterfallLayout", ()=>WaterfallLayout);
var _layout = require("../virtualizer/Layout");
var _layoutInfo = require("../virtualizer/LayoutInfo");
var _point = require("../virtualizer/Point");
var _rect = require("../virtualizer/Rect");
var _size = require("../virtualizer/Size");
class WaterfallLayoutInfo extends (0, _layoutInfo.LayoutInfo) {
    column = 0;
    index = 0;
    copy() {
        let res = super.copy();
        res.column = this.column;
        res.index = this.index;
        return res;
    }
}
const DEFAULT_OPTIONS = {
    minItemSize: new (0, _size.Size)(200, 200),
    maxItemSize: new (0, _size.Size)(Infinity, Infinity),
    minSpace: new (0, _size.Size)(18, 18),
    maxSpace: Infinity,
    maxColumns: Infinity,
    dropIndicatorThickness: 2,
    loaderHeight: 48
};
class WaterfallLayout extends (0, _layout.Layout) {
    contentSize = new (0, _size.Size)();
    layoutInfos = new Map();
    numColumns = 0;
    dropIndicatorThickness = 2;
    margin = 0;
    shouldInvalidateLayoutOptions(newOptions, oldOptions) {
        return newOptions.maxColumns !== oldOptions.maxColumns || newOptions.dropIndicatorThickness !== oldOptions.dropIndicatorThickness || !(newOptions.minItemSize || DEFAULT_OPTIONS.minItemSize).equals(oldOptions.minItemSize || DEFAULT_OPTIONS.minItemSize) || !(newOptions.maxItemSize || DEFAULT_OPTIONS.maxItemSize).equals(oldOptions.maxItemSize || DEFAULT_OPTIONS.maxItemSize) || !(newOptions.minSpace || DEFAULT_OPTIONS.minSpace).equals(oldOptions.minSpace || DEFAULT_OPTIONS.minSpace) || newOptions.maxHorizontalSpace !== oldOptions.maxHorizontalSpace || newOptions.loaderHeight !== oldOptions.loaderHeight;
    }
    update(invalidationContext) {
        let { minItemSize = DEFAULT_OPTIONS.minItemSize, maxItemSize = DEFAULT_OPTIONS.maxItemSize, minSpace = DEFAULT_OPTIONS.minSpace, maxHorizontalSpace = DEFAULT_OPTIONS.maxSpace, maxColumns = DEFAULT_OPTIONS.maxColumns, dropIndicatorThickness = DEFAULT_OPTIONS.dropIndicatorThickness, loaderHeight = DEFAULT_OPTIONS.loaderHeight } = invalidationContext.layoutOptions || {};
        this.dropIndicatorThickness = dropIndicatorThickness;
        let virtualizerWidth = this.virtualizer.size.width;
        // The max item width is always the entire viewport.
        // If the max item height is infinity, scale in proportion to the max width.
        let maxItemWidth = Math.min(maxItemSize.width, virtualizerWidth);
        let maxItemHeight = Number.isFinite(maxItemSize.height) ? maxItemSize.height : Math.floor(minItemSize.height / minItemSize.width * maxItemWidth);
        // Compute the number of rows and columns needed to display the content
        let columns = Math.floor(virtualizerWidth / (minItemSize.width + minSpace.width));
        let numColumns = Math.max(1, Math.min(maxColumns, columns));
        // Compute the available width (minus the space between items)
        let width = virtualizerWidth - minSpace.width * Math.max(0, numColumns);
        // Compute the item width based on the space available
        let itemWidth = Math.floor(width / numColumns);
        itemWidth = Math.max(minItemSize.width, Math.min(maxItemWidth, itemWidth));
        // Compute the item height, which is proportional to the item width
        let t = (itemWidth - minItemSize.width) / Math.max(1, maxItemWidth - minItemSize.width);
        let itemHeight = minItemSize.height + Math.floor((maxItemHeight - minItemSize.height) * t);
        itemHeight = Math.max(minItemSize.height, Math.min(maxItemHeight, itemHeight));
        // Compute the horizontal spacing, content height and horizontal margin
        let horizontalSpacing = Math.min(Math.max(maxHorizontalSpace, minSpace.width), Math.floor((virtualizerWidth - numColumns * itemWidth) / (numColumns + 1)));
        this.margin = Math.floor((virtualizerWidth - numColumns * itemWidth - horizontalSpacing * (numColumns + 1)) / 2);
        // Setup an array of column heights
        let columnHeights = Array(numColumns).fill(minSpace.height);
        let newLayoutInfos = new Map();
        let index = 0;
        let addNode = (key, node)=>{
            let oldLayoutInfo = this.layoutInfos.get(key);
            let height = itemHeight;
            let estimatedSize = true;
            if (oldLayoutInfo) {
                height = oldLayoutInfo.rect.height / oldLayoutInfo.rect.width * itemWidth;
                estimatedSize = invalidationContext.sizeChanged || oldLayoutInfo.estimatedSize || oldLayoutInfo.content !== node;
            }
            // Figure out which column to place the item in, and compute its position.
            // Preserve the previous column index so items don't jump around during resizing unless the number of columns changed.
            let prevColumn = numColumns === this.numColumns && oldLayoutInfo && oldLayoutInfo.index === index && oldLayoutInfo.rect.y < this.virtualizer.visibleRect.maxY ? oldLayoutInfo.column : undefined;
            let column = prevColumn ?? columnHeights.reduce((minIndex, h, i)=>h < columnHeights[minIndex] ? i : minIndex, 0);
            let x = horizontalSpacing + column * (itemWidth + horizontalSpacing) + this.margin;
            let y = columnHeights[column];
            let rect = new (0, _rect.Rect)(x, y, itemWidth, height);
            let layoutInfo = new WaterfallLayoutInfo(node.type, key, rect);
            layoutInfo.estimatedSize = estimatedSize;
            layoutInfo.allowOverflow = true;
            layoutInfo.content = node;
            layoutInfo.column = column;
            layoutInfo.index = index++;
            newLayoutInfos.set(key, layoutInfo);
            columnHeights[column] += layoutInfo.rect.height + minSpace.height;
        };
        let collection = this.virtualizer.collection;
        let skeletonCount = 0;
        for (let node of collection){
            if (node.type === 'skeleton') {
                // Add skeleton cards until every column has at least one, and we fill the viewport.
                let startingHeights = [
                    ...columnHeights
                ];
                while(!columnHeights.every((h, i)=>h !== startingHeights[i]) || Math.min(...columnHeights) < this.virtualizer.size.height){
                    let key = `${node.key}-${skeletonCount++}`;
                    let content = this.layoutInfos.get(key)?.content || {
                        ...node
                    };
                    addNode(key, content);
                }
                break;
            } else if (node.type !== 'loader') addNode(node.key, node);
        }
        // Reset all columns to the maximum for the next section. If loading, set to 0 so virtualizer doesn't render its body since there aren't items to render,
        // except if we are performing skeleton loading
        let isEmptyOrLoading = collection?.size === 0 && collection.getItem(collection.getFirstKey())?.type !== 'skeleton';
        let maxHeight = isEmptyOrLoading ? 0 : Math.max(...columnHeights);
        // Always add the loader sentinel if present in the collection so we can make sure it is never virtualized out.
        // Add it under the first column for simplicity
        let lastNode = collection.getItem(collection.getLastKey());
        if (lastNode?.type === 'loader') {
            if (skeletonCount > 0 || !lastNode.props.isLoading) loaderHeight = 0;
            const loaderWidth = virtualizerWidth - horizontalSpacing * 2;
            // Note that if the user provides isLoading to their sentinel during a case where they only want to render the emptyState, this will reserve
            // room for the loader alongside rendering the emptyState
            let rect = new (0, _rect.Rect)(horizontalSpacing, maxHeight, loaderWidth, loaderHeight);
            let layoutInfo = new (0, _layoutInfo.LayoutInfo)('loader', lastNode.key, rect);
            newLayoutInfos.set(lastNode.key, layoutInfo);
            maxHeight = layoutInfo.rect.maxY;
        }
        this.contentSize = new (0, _size.Size)(this.virtualizer.size.width, maxHeight);
        this.layoutInfos = newLayoutInfos;
        this.numColumns = numColumns;
    }
    getLayoutInfo(key) {
        return this.layoutInfos.get(key);
    }
    getContentSize() {
        return this.contentSize;
    }
    getVisibleLayoutInfos(rect) {
        let layoutInfos = [];
        for (let layoutInfo of this.layoutInfos.values())if (layoutInfo.rect.intersects(rect) || this.virtualizer.isPersistedKey(layoutInfo.key) || layoutInfo.type === 'loader') layoutInfos.push(layoutInfo);
        return layoutInfos;
    }
    updateItemSize(key, size) {
        let layoutInfo = this.layoutInfos.get(key);
        if (!size || !layoutInfo) return false;
        if (size.height !== layoutInfo.rect.height) {
            let newLayoutInfo = layoutInfo.copy();
            newLayoutInfo.rect.height = size.height;
            newLayoutInfo.estimatedSize = false;
            this.layoutInfos.set(key, newLayoutInfo);
            return true;
        }
        return false;
    }
    // Override keyboard navigation to work spatially.
    getKeyRightOf(key) {
        let layoutInfo = this.getLayoutInfo(key);
        if (!layoutInfo) return null;
        let rect = new (0, _rect.Rect)(layoutInfo.rect.maxX, layoutInfo.rect.y, this.virtualizer.visibleRect.maxX - layoutInfo.rect.maxX, layoutInfo.rect.height);
        let layoutInfos = this.getVisibleLayoutInfos(rect);
        let bestKey = null;
        let bestDistance = Infinity;
        for (let candidate of layoutInfos){
            if (candidate.key === key) continue;
            // Find the closest item in the x direction with the most overlap in the y direction.
            let deltaX = candidate.rect.x - rect.x;
            let overlapY = Math.min(candidate.rect.maxY, rect.maxY) - Math.max(candidate.rect.y, rect.y);
            let distance = deltaX - overlapY;
            if (distance < bestDistance) {
                bestDistance = distance;
                bestKey = candidate.key;
            }
        }
        return bestKey;
    }
    getKeyLeftOf(key) {
        let layoutInfo = this.getLayoutInfo(key);
        if (!layoutInfo) return null;
        let rect = new (0, _rect.Rect)(0, layoutInfo.rect.y, layoutInfo.rect.x, layoutInfo.rect.height);
        let layoutInfos = this.getVisibleLayoutInfos(rect);
        let bestKey = null;
        let bestDistance = Infinity;
        for (let candidate of layoutInfos){
            if (candidate.key === key) continue;
            // Find the closest item in the x direction with the most overlap in the y direction.
            let deltaX = rect.maxX - candidate.rect.maxX;
            let overlapY = Math.min(candidate.rect.maxY, rect.maxY) - Math.max(candidate.rect.y, rect.y);
            let distance = deltaX - overlapY;
            if (distance < bestDistance) {
                bestDistance = distance;
                bestKey = candidate.key;
            }
        }
        return bestKey;
    }
    // This overrides the default behavior of shift selection to work spatially
    // rather than following the order of the items in the collection (which may appear unpredictable).
    getKeyRange(from, to) {
        let fromLayoutInfo = this.getLayoutInfo(from);
        let toLayoutInfo = this.getLayoutInfo(to);
        if (!fromLayoutInfo || !toLayoutInfo) return [];
        // Find items where half of the area intersects the rectangle
        // formed from the first item to the last item in the range.
        let rect = fromLayoutInfo.rect.union(toLayoutInfo.rect);
        let keys = [];
        for (let layoutInfo of this.layoutInfos.values())if (rect.intersection(layoutInfo.rect).area > layoutInfo.rect.area / 2) keys.push(layoutInfo.key);
        return keys;
    }
    getDropTargetFromPoint(x, y) {
        if (this.layoutInfos.size === 0) return {
            type: 'root'
        };
        x += this.virtualizer.visibleRect.x;
        y += this.virtualizer.visibleRect.y;
        let key = this.virtualizer.keyAtPoint(new (0, _point.Point)(x, y));
        if (key == null) return {
            type: 'root'
        };
        // Only support "on" drop position in waterfall layout.
        // Reordering doesn't make sense because the items don't have a deterministic order.
        return {
            type: 'item',
            key,
            dropPosition: 'on'
        };
    }
}

},{"../virtualizer/Layout":"YYckq","../virtualizer/LayoutInfo":"81Wbi","../virtualizer/Point":"azpXc","../virtualizer/Rect":"9sh2q","../virtualizer/Size":"aiymI","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"oeVON":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","../../@adobe/react-spectrum/src/utils/classNames.ts":"dsWbb","../../../../../../vendor/react-aria-components/src/Header.tsx":"f1ESp","../../../../../../vendor/react-aria-components/src/ListBox.tsx":"l68rZ","../../../../../../vendor/react-aria-components/src/Menu.tsx":"70BZW","../../../../../../vendor/react-aria-components/src/ProgressBar.tsx":"hW9J5","react":"gOP0N","../example/index.css":"9vxXE","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9vxXE":[function(require,module,exports,__globalThis) {
module.exports["button"] = `PTH6HW_button`;
module.exports["content-wrapper"] = `PTH6HW_content-wrapper`;
module.exports["copyable"] = `PTH6HW_copyable`;
module.exports["description"] = `PTH6HW_description`;
module.exports["draggable"] = `PTH6HW_draggable`;
module.exports["drop-target"] = `PTH6HW_drop-target`;
module.exports["dropzone"] = `PTH6HW_dropzone`;
module.exports["errorMessage"] = `PTH6HW_errorMessage`;
module.exports["field"] = `PTH6HW_field`;
module.exports["focus-ring"] = `PTH6HW_focus-ring`;
module.exports["focus-visible"] = `PTH6HW_focus-visible`;
module.exports["focusVisible"] = `PTH6HW_focusVisible`;
module.exports["focused"] = `PTH6HW_focused`;
module.exports["group"] = `PTH6HW_group`;
module.exports["hovered"] = `PTH6HW_hovered`;
module.exports["item"] = `PTH6HW_item`;
module.exports["kbd"] = `PTH6HW_kbd`;
module.exports["label"] = `PTH6HW_label`;
module.exports["menu"] = `PTH6HW_menu`;
module.exports["open"] = `PTH6HW_open`;
module.exports["placeholder"] = `PTH6HW_placeholder`;
module.exports["popover"] = `PTH6HW_popover`;
module.exports["radio"] = `PTH6HW_radio`;
module.exports["radiogroup"] = `PTH6HW_radiogroup`;
module.exports["searchFieldExample"] = `PTH6HW_searchFieldExample`;
module.exports["segment"] = `PTH6HW_segment`;
module.exports["selected"] = `PTH6HW_selected`;
module.exports["slider"] = `PTH6HW_slider`;
module.exports["spinner"] = `PTH6HW_spinner`;
module.exports["switchExample"] = `PTH6HW_switchExample`;
module.exports["switchExample-indicator"] = `PTH6HW_switchExample-indicator`;
module.exports["textfieldExample"] = `PTH6HW_textfieldExample`;
module.exports["thumb"] = `PTH6HW_thumb`;
module.exports["toggleButtonExample"] = `PTH6HW_toggleButtonExample`;
module.exports["track"] = `PTH6HW_track`;
module.exports["tree"] = `PTH6HW_tree`;
module.exports["tree-item"] = `PTH6HW_tree-item`;
module.exports["unavailable"] = `PTH6HW_unavailable`;
module.exports["unavailable-popover"] = `PTH6HW_unavailable-popover`;
module.exports["wrapper"] = `PTH6HW_wrapper`;

},{}],"5kz58":[function(require,module,exports,__globalThis) {
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

},{"./ariaHideOutside":"bOGar","./useOverlay":"1LtRR","../utils/mergeProps":"jycxS","react":"gOP0N","./Overlay":"dm7Ko","./usePreventScroll":"9SGDE","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bOGar":[function(require,module,exports,__globalThis) {
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

},{"../utils/shadowdom/ShadowTreeWalker":"grvf5","../utils/domHelpers":"cYkFa","../utils/shadowdom/DOMFunctions":"8kfpz","react-stately/private/flags/flags":"ahU3Z","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"grvf5":[function(require,module,exports,__globalThis) {
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

},{"./DOMFunctions":"8kfpz","react-stately/private/flags/flags":"ahU3Z","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1LtRR":[function(require,module,exports,__globalThis) {
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

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","react":"gOP0N","../utils/useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dm7Ko":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","../utils/mergeProps":"jycxS","./context":"8Eyap","react":"gOP0N","../utils/useObjectRef":"ec0NJ","../utils/useSyncRef":"8a0bK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9SGDE":[function(require,module,exports,__globalThis) {
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

},{"./shadowdom/DOMFunctions":"8kfpz","./keyboard":"fXhXT","./platform":"eBqgD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fXhXT":[function(require,module,exports,__globalThis) {
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

},{"./domHelpers":"cYkFa","./shadowdom/DOMFunctions":"8kfpz","./getMetaValue":"jdK61","./platform":"eBqgD","./isFocusable":"dLPRV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"457a8":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","../utils/useControlledState":"8yNBD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fc1Bu":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useEnterAnimation", ()=>useEnterAnimation);
parcelHelpers.export(exports, "useExitAnimation", ()=>useExitAnimation);
var _chain = require("./chain");
var _reactDom = require("react-dom");
var _react = require("react");
var _domHelpers = require("./domHelpers");
var _useLayoutEffect = require("./useLayoutEffect");
function useEnterAnimation(ref, isReady = true) {
    let [isEntering, setEntering] = (0, _react.useState)(true);
    let isAnimationReady = isEntering && isReady;
    // Hide the element while it prepares for entry, using only non-layout-thrashing attributes.
    // This prevents accidental flashes of content in scenarios where no hidden styling is applied
    // while the enter animation is not yet ready (e.g. popovers prior to placement calculation).
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (!isReady && ref.current) return (0, _chain.chain)((0, _domHelpers.setStyle)(ref.current, 'opacity', '0'), (0, _domHelpers.setStyle)(ref.current, 'clip', 'rect(0 0 0 0)'), (0, _domHelpers.setStyle)(ref.current, 'clip-path', 'inset(50%)'), (0, _domHelpers.setStyle)(ref.current, 'mask-image', 'linear-gradient(#0000, #0000)'));
    }, [
        ref,
        isReady
    ]);
    // There are two cases for entry animations:
    // 1. CSS @keyframes. The `animation` property is set during the isEntering state, and it is removed after the animation finishes.
    // 2. CSS transitions. The initial styles are applied during the isEntering state, and removed immediately, causing the transition to occur.
    //
    // In the second case, cancel any transitions that were triggered prior to the isEntering = false state (when the transition is supposed to start).
    // This can happen when isReady starts as false (e.g. popovers prior to placement calculation).
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (isAnimationReady && ref.current && 'getAnimations' in ref.current) {
            for (let animation of ref.current.getAnimations())if (animation instanceof CSSTransition) animation.cancel();
        }
    }, [
        ref,
        isAnimationReady
    ]);
    useAnimation(ref, isAnimationReady, (0, _react.useCallback)(()=>setEntering(false), []));
    return isAnimationReady;
}
function useExitAnimation(ref, isOpen) {
    let [exitState, setExitState] = (0, _react.useState)(isOpen ? 'open' : 'closed');
    switch(exitState){
        case 'open':
            // If isOpen becomes false, set the state to exiting.
            if (!isOpen) setExitState('exiting');
            break;
        case 'closed':
        case 'exiting':
            // If we are exiting and isOpen becomes true, the animation was interrupted.
            // Reset the state to open.
            if (isOpen) setExitState('open');
            break;
    }
    let isExiting = exitState === 'exiting';
    useAnimation(ref, isExiting, (0, _react.useCallback)(()=>{
        // Set the state to closed, which will cause the element to be unmounted.
        setExitState((state)=>state === 'exiting' ? 'closed' : state);
    }, []));
    return isExiting;
}
function useAnimation(ref, isActive, onEnd) {
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (isActive && ref.current) {
            if (!('getAnimations' in ref.current)) {
                // JSDOM
                onEnd();
                return;
            }
            let animations = ref.current.getAnimations();
            if (animations.length === 0) {
                onEnd();
                return;
            }
            let canceled = false;
            Promise.allSettled(animations.map((a)=>a.finished)).then(()=>{
                if (!canceled) (0, _reactDom.flushSync)(()=>{
                    onEnd();
                });
            });
            return ()=>{
                canceled = true;
            };
        }
    }, [
        ref,
        isActive,
        onEnd
    ]);
}

},{"./chain":"bQmEj","react-dom":"gOP0N","react":"gOP0N","./domHelpers":"cYkFa","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kU0Hn":[function(require,module,exports,__globalThis) {
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

},{"./shadowdom/DOMFunctions":"8kfpz","./platform":"eBqgD","./runAfterKeyboard":"bwB3z","react":"gOP0N","../ssr/SSRProvider":"2cndP","./keyboard":"fXhXT","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ixV7h":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "TagGroupContext", ()=>TagGroupContext);
parcelHelpers.export(exports, "TagListContext", ()=>TagListContext);
parcelHelpers.export(exports, "TagGroup", ()=>TagGroup);
parcelHelpers.export(exports, "TagList", ()=>TagList);
parcelHelpers.export(exports, "Tag", ()=>Tag);
var _jsxRuntime = require("preact/jsx-runtime");
var _useTagGroup = require("react-aria/useTagGroup");
var _button = require("./Button");
var _utils = require("./utils");
var _collection = require("react-aria/Collection");
var _collectionBuilder = require("react-aria/CollectionBuilder");
var _collection1 = require("./Collection");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _baseCollection = require("react-aria/private/collections/BaseCollection");
var _label = require("./Label");
var _useListState = require("react-stately/useListState");
var _listBox = require("./ListBox");
var _mergeProps = require("react-aria/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _autocomplete = require("./Autocomplete");
var _selectionIndicator = require("./SelectionIndicator");
var _sharedElementTransition = require("./SharedElementTransition");
var _text = require("./Text");
var _useFocusRing = require("react-aria/useFocusRing");
var _useHover = require("react-aria/useHover");
var _useObjectRef = require("react-aria/useObjectRef");
const TagGroupContext = /*#__PURE__*/ (0, _react.createContext)(null);
const TagListContext = /*#__PURE__*/ (0, _react.createContext)(null);
const TagGroup = /*#__PURE__*/ (0, _react.forwardRef)(function TagGroup(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, TagGroupContext);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _listBox.ListStateContext).Provider, {
        value: null,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collectionBuilder.CollectionBuilder), {
            content: props.children,
            children: (collection)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(TagGroupInner, {
                    props: props,
                    forwardedRef: ref,
                    collection: collection
                })
        })
    });
});
function TagGroupInner({ props, forwardedRef: ref, collection }) {
    let tagListRef = (0, _react.useRef)(null);
    // Extract the user provided id so it doesn't clash with the collection id provided by Autocomplete
    let { id, ...otherProps } = props;
    [otherProps, tagListRef] = (0, _utils.useContextProps)(otherProps, tagListRef, (0, _autocomplete.SelectableCollectionContext));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { filter, shouldUseVirtualFocus, ...DOMCollectionProps } = otherProps;
    let [labelRef, label] = (0, _utils.useSlot)(!props['aria-label'] && !props['aria-labelledby']);
    let tagGroupState = (0, _useListState.useListState)({
        ...DOMCollectionProps,
        children: undefined,
        collection
    });
    // oxlint-disable-next-line react/react-compiler
    let filteredState = (0, _useListState.UNSTABLE_useFilteredListState)(tagGroupState, filter);
    // Prevent DOM props from going to two places.
    let domProps = (0, _filterDOMProps.filterDOMProps)(otherProps, {
        global: true
    });
    let domPropOverrides = Object.fromEntries(Object.entries(domProps).map(([k, val])=>[
            k,
            k === 'id' ? val : undefined
        ]));
    let { gridProps, labelProps, descriptionProps, errorMessageProps } = (0, _useTagGroup.useTagGroup)({
        ...DOMCollectionProps,
        ...domPropOverrides,
        label
    }, filteredState, tagListRef);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        render: props.render,
        ...domProps,
        id: id,
        ref: ref,
        slot: props.slot || undefined,
        className: props.className ?? 'react-aria-TagGroup',
        style: props.style,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
            values: [
                [
                    (0, _label.LabelContext),
                    {
                        ...labelProps,
                        elementType: 'span',
                        ref: labelRef
                    }
                ],
                [
                    TagListContext,
                    {
                        ...gridProps,
                        ref: tagListRef
                    }
                ],
                [
                    (0, _listBox.ListStateContext),
                    filteredState
                ],
                [
                    (0, _text.TextContext),
                    {
                        slots: {
                            description: descriptionProps,
                            errorMessage: errorMessageProps
                        }
                    }
                ]
            ],
            children: props.children
        })
    });
}
const TagList = /*#__PURE__*/ (0, _react.forwardRef)(function TagList(props, ref) {
    let state = (0, _react.useContext)((0, _listBox.ListStateContext));
    return state ? /*#__PURE__*/ (0, _jsxRuntime.jsx)(TagListInner, {
        props: props,
        forwardedRef: ref
    }) : /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collection.Collection), {
        ...props
    });
});
function TagListInner({ props, forwardedRef }) {
    let state = (0, _react.useContext)((0, _listBox.ListStateContext));
    let { CollectionRoot } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let [gridProps, ref] = (0, _utils.useContextProps)({}, forwardedRef, TagListContext);
    let { focusProps, isFocused, isFocusVisible } = (0, _useFocusRing.useFocusRing)();
    let renderValues = {
        isEmpty: state.collection.size === 0,
        isFocused,
        isFocusVisible,
        state
    };
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        children: undefined,
        defaultClassName: 'react-aria-TagList',
        values: renderValues
    });
    let persistedKeys = (0, _collection1.usePersistedKeys)(state.selectionManager.focusedKey);
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, gridProps, focusProps),
        ref: ref,
        "data-empty": state.collection.size === 0 || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _sharedElementTransition.SharedElementTransition), {
            children: state.collection.size === 0 && props.renderEmptyState ? props.renderEmptyState(renderValues) : /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionRoot, {
                collection: state.collection,
                persistedKeys: persistedKeys
            })
        })
    });
}
const Tag = /*#__PURE__*/ (0, _collectionBuilder.createLeafComponent)((0, _baseCollection.ItemNode), (props, forwardedRef, item)=>{
    let state = (0, _react.useContext)((0, _listBox.ListStateContext));
    let ref = (0, _useObjectRef.useObjectRef)(forwardedRef);
    let { focusProps, isFocusVisible } = (0, _useFocusRing.useFocusRing)({
        within: false
    });
    let { rowProps, gridCellProps, removeButtonProps, ...states } = (0, _useTagGroup.useTag)({
        item
    }, state, ref);
    let { hoverProps, isHovered } = (0, _useHover.useHover)({
        isDisabled: !states.allowsSelection && !states.hasAction,
        onHoverStart: item.props.onHoverStart,
        onHoverChange: item.props.onHoverChange,
        onHoverEnd: item.props.onHoverEnd
    });
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-Tag',
        values: {
            ...states,
            isFocusVisible,
            isHovered,
            selectionMode: state.selectionManager.selectionMode,
            selectionBehavior: state.selectionManager.selectionBehavior
        }
    });
    (0, _react.useEffect)(()=>{
        item.textValue;
    }, [
        item.textValue
    ]);
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ref: ref,
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, rowProps, focusProps, hoverProps),
        "data-selected": states.isSelected || undefined,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-allows-removing": states.allowsRemoving || undefined,
        "data-selection-mode": state.selectionManager.selectionMode === 'none' ? undefined : state.selectionManager.selectionMode,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
            ...gridCellProps,
            style: {
                display: 'contents'
            },
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
                values: [
                    [
                        (0, _button.ButtonContext),
                        {
                            slots: {
                                remove: removeButtonProps
                            }
                        }
                    ],
                    [
                        (0, _collection1.CollectionRendererContext),
                        (0, _collection1.DefaultCollectionRenderer)
                    ],
                    [
                        (0, _selectionIndicator.SelectionIndicatorContext),
                        {
                            isSelected: states.isSelected
                        }
                    ]
                ],
                children: renderProps.children
            })
        })
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/useTagGroup":[["useTag","1icp9"],["useTagGroup","k8R2e"]],"./Button":"enBVm","./utils":"jtWJJ","react-aria/Collection":"kFD1B","react-aria/CollectionBuilder":"kFD1B","./Collection":"4TSYQ","react-aria/filterDOMProps":"h4XHF","react-aria/private/collections/BaseCollection":"imRDY","./Label":"eI7Ae","react-stately/useListState":"3g793","./ListBox":"l68rZ","react-aria/mergeProps":"jycxS","react":"gOP0N","./Autocomplete":"dHgny","./SelectionIndicator":"4EL3s","./SharedElementTransition":"2Pl2F","./Text":"cfMV9","react-aria/useFocusRing":"bP7um","react-aria/useHover":"2yLrj","react-aria/useObjectRef":"ec0NJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1icp9":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a tag component.
 *
 * @param props - Props to be applied to the tag.
 * @param state - State for the tag group, as returned by `useListState`.
 * @param ref - A ref to a DOM element for the tag.
 */ parcelHelpers.export(exports, "useTag", ()=>useTag);
var _filterDOMProps = require("../utils/filterDOMProps");
var _useTagGroup = require("./useTagGroup");
var _indexJs = require("../../intl/tag/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mergeProps = require("../utils/mergeProps");
var _useDescription = require("../utils/useDescription");
var _useFocusable = require("../interactions/useFocusable");
var _useGridListItem = require("../gridlist/useGridListItem");
var _useId = require("../utils/useId");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _useKeyboard = require("../interactions/useKeyboard");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
var _openLink = require("../utils/openLink");
function useTag(props, state, ref) {
    let { item } = props;
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/tag');
    let buttonId = (0, _useId.useId)();
    let { onRemove } = (0, _useTagGroup.hookData).get(state) || {};
    let { rowProps, gridCellProps, ...states } = (0, _useGridListItem.useGridListItem)({
        node: item
    }, state, ref);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { descriptionProps: _, ...stateWithoutDescription } = states;
    let isDisabled = state.disabledKeys.has(item.key) || item.props.isDisabled;
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        isDisabled,
        shortcuts: {
            Delete: ()=>{
                if (state.selectionManager.isSelected(item.key)) onRemove?.(new Set(state.selectionManager.selectedKeys));
                else onRemove?.(new Set([
                    item.key
                ]));
            },
            Backspace: ()=>{
                if (state.selectionManager.isSelected(item.key)) onRemove?.(new Set(state.selectionManager.selectedKeys));
                else onRemove?.(new Set([
                    item.key
                ]));
            }
        },
        allowRepeats: true
    });
    let modality = (0, _useFocusVisible.useInteractionModality)();
    if (modality === 'virtual' && typeof window !== 'undefined' && 'ontouchstart' in window) modality = 'pointer';
    let description = onRemove && (modality === 'keyboard' || modality === 'virtual') ? stringFormatter.format('removeDescription') : '';
    let descProps = (0, _useDescription.useDescription)(description);
    let isItemFocused = item.key === state.selectionManager.focusedKey;
    let isFocused = state.selectionManager.focusedKey != null;
    let tabIndex = -1;
    if (!isDisabled && (isItemFocused || !isFocused)) tabIndex = 0;
    let domProps = (0, _filterDOMProps.filterDOMProps)(item.props);
    let linkProps = (0, _openLink.useSyntheticLinkProps)(item.props);
    let { focusableProps } = (0, _useFocusable.useFocusable)({
        ...item.props,
        isDisabled
    }, ref);
    return {
        removeButtonProps: {
            'aria-label': stringFormatter.format('removeButtonLabel'),
            'aria-labelledby': `${buttonId} ${rowProps.id}`,
            isDisabled,
            id: buttonId,
            onPress: ()=>onRemove ? onRemove(new Set([
                    item.key
                ])) : null
        },
        rowProps: (0, _mergeProps.mergeProps)(focusableProps, rowProps, domProps, linkProps, {
            tabIndex,
            ...onRemove ? keyboardProps : {},
            'aria-describedby': descProps['aria-describedby']
        }),
        gridCellProps: (0, _mergeProps.mergeProps)(gridCellProps, {
            'aria-errormessage': props['aria-errormessage'],
            'aria-label': props['aria-label']
        }),
        ...stateWithoutDescription,
        allowsRemoving: !!onRemove
    };
}

},{"../utils/filterDOMProps":"h4XHF","./useTagGroup":"k8R2e","../../intl/tag/index.js":"1qwYh","../utils/mergeProps":"jycxS","../utils/useDescription":"1bivM","../interactions/useFocusable":"6IFKj","../gridlist/useGridListItem":"kgaar","../utils/useId":"fQAcb","../interactions/useFocusVisible":"aBfUW","../interactions/useKeyboard":"aHm7i","../i18n/useLocalizedStringFormatter":"8lll3","../utils/openLink":"gH3wl","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k8R2e":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "hookData", ()=>hookData);
/**
 * Provides the behavior and accessibility implementation for a tag group component. A tag group is
 * a focusable list of labels, categories, keywords, filters, or other items, with support for
 * keyboard navigation, selection, and removal.
 *
 * @param props - Props to be applied to the tag group.
 * @param state - State for the tag group, as returned by `useListState`.
 * @param ref - A ref to a DOM element for the tag group.
 */ parcelHelpers.export(exports, "useTagGroup", ()=>useTagGroup);
var _useGridList = require("../gridlist/useGridList");
var _filterDOMProps = require("../utils/filterDOMProps");
var _listKeyboardDelegate = require("../selection/ListKeyboardDelegate");
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _useField = require("../label/useField");
var _useFocusWithin = require("../interactions/useFocusWithin");
var _i18Nprovider = require("../i18n/I18nProvider");
const hookData = new WeakMap();
function useTagGroup(props, state, ref) {
    let { direction } = (0, _i18Nprovider.useLocale)();
    let keyboardDelegate = props.keyboardDelegate || new (0, _listKeyboardDelegate.ListKeyboardDelegate)({
        collection: state.collection,
        ref,
        orientation: 'horizontal',
        direction,
        disabledKeys: state.disabledKeys,
        disabledBehavior: state.selectionManager.disabledBehavior
    });
    let { labelProps, fieldProps, descriptionProps, errorMessageProps } = (0, _useField.useField)({
        ...props,
        labelElementType: 'span'
    });
    let { gridProps } = (0, _useGridList.useGridList)({
        ...props,
        ...fieldProps,
        keyboardDelegate,
        shouldFocusWrap: true,
        linkBehavior: 'override',
        keyboardNavigationBehavior: 'tab'
    }, state, ref);
    let [isFocusWithin, setFocusWithin] = (0, _react.useState)(false);
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)({
        onFocusWithinChange: setFocusWithin
    });
    let domProps = (0, _filterDOMProps.filterDOMProps)(props);
    // If the last tag is removed, focus the container.
    let prevCount = (0, _react.useRef)(state.collection.size);
    (0, _react.useEffect)(()=>{
        if (ref.current && prevCount.current > 0 && state.collection.size === 0 && isFocusWithin) ref.current.focus();
        prevCount.current = state.collection.size;
    }, [
        state.collection.size,
        isFocusWithin,
        ref
    ]);
    hookData.set(state, {
        onRemove: props.onRemove
    });
    return {
        gridProps: (0, _mergeProps.mergeProps)(gridProps, domProps, {
            role: state.collection.size ? 'grid' : 'group',
            'aria-atomic': false,
            'aria-relevant': 'additions',
            'aria-live': isFocusWithin ? 'polite' : 'off',
            ...focusWithinProps,
            ...fieldProps
        }),
        labelProps,
        descriptionProps,
        errorMessageProps
    };
}

},{"../gridlist/useGridList":"5FV81","../utils/filterDOMProps":"h4XHF","../selection/ListKeyboardDelegate":"hxzwH","../utils/mergeProps":"jycxS","react":"gOP0N","../label/useField":"5Oeu9","../interactions/useFocusWithin":"bkSQo","../i18n/I18nProvider":"czGuc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1qwYh":[function(require,module,exports,__globalThis) {
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

},{"./ar-AE.js":"eSFwj","./bg-BG.js":"fpixu","./cs-CZ.js":"lrRYy","./da-DK.js":"iXhJM","./de-DE.js":"2wlvU","./el-GR.js":"hghKu","./en-US.js":"1GBWX","./es-ES.js":"e1cnc","./et-EE.js":"cA8Sj","./fi-FI.js":"cxJya","./fr-FR.js":"3JgLs","./he-IL.js":"65xSN","./hr-HR.js":"4rRvh","./hu-HU.js":"8MdSC","./it-IT.js":"2ziSJ","./ja-JP.js":"iQyOd","./ko-KR.js":"5g38u","./lt-LT.js":"kHCCp","./lv-LV.js":"gngKp","./nb-NO.js":"1oJlQ","./nl-NL.js":"i4Sy4","./pl-PL.js":"gzjWn","./pt-BR.js":"lD9e1","./pt-PT.js":"2unhx","./ro-RO.js":"56LLV","./ru-RU.js":"l7zjI","./sk-SK.js":"giZLM","./sl-SI.js":"5Xr3u","./sr-SP.js":"1ASux","./sv-SE.js":"fbbtx","./tr-TR.js":"0293S","./uk-UA.js":"92i4w","./zh-CN.js":"fXJYA","./zh-TW.js":"eYDQs","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eSFwj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{625}\u{632}\u{627}\u{644}\u{629}`,
    "removeDescription": `\u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} \u{645}\u{641}\u{62A}\u{627}\u{62D} DELETE \u{644}\u{625}\u{632}\u{627}\u{644}\u{629} \u{639}\u{644}\u{627}\u{645}\u{629}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fpixu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{41F}\u{440}\u{435}\u{43C}\u{430}\u{445}\u{432}\u{430}\u{43D}\u{435}`,
    "removeDescription": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Delete, \u{437}\u{430} \u{434}\u{430} \u{43F}\u{440}\u{435}\u{43C}\u{430}\u{445}\u{43D}\u{435}\u{442}\u{435} \u{43C}\u{430}\u{440}\u{43A}\u{435}\u{440}\u{430}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lrRYy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Odebrat`,
    "removeDescription": `Stisknut\xedm kl\xe1vesy Delete odeberete zna\u{10D}ku.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iXhJM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Fjern`,
    "removeDescription": `Tryk p\xe5 Slet for at fjerne tag.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2wlvU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Entfernen`,
    "removeDescription": `Auf \u{201E}L\xf6schen\u{201C} dr\xfccken, um das Tag zu entfernen.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hghKu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{39A}\u{3B1}\u{3C4}\u{3AC}\u{3C1}\u{3B3}\u{3B7}\u{3C3}\u{3B7}`,
    "removeDescription": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{394}\u{3B9}\u{3B1}\u{3B3}\u{3C1}\u{3B1}\u{3C6}\u{3AE} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BA}\u{3B1}\u{3C4}\u{3B1}\u{3C1}\u{3B3}\u{3AE}\u{3C3}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3B7}\u{3BD} \u{3B5}\u{3C4}\u{3B9}\u{3BA}\u{3AD}\u{3C4}\u{3B1}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1GBWX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeDescription": `Press Delete to remove tag.`,
    "removeButtonLabel": `Remove`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"e1cnc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Quitar`,
    "removeDescription": `Pulse Eliminar para quitar la etiqueta.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cA8Sj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Eemalda`,
    "removeDescription": `Sildi eemaldamiseks vajutage kustutusklahvi Delete.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cxJya":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Poista`,
    "removeDescription": `Poista tunniste painamalla Poista-painiketta.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3JgLs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Supprimer`,
    "removeDescription": `Appuyez sur Supprimer pour supprimer l\u{2019}\xe9tiquette.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"65xSN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{5D4}\u{5E1}\u{5E8}`,
    "removeDescription": `\u{5DC}\u{5D7}\u{5E5} \u{5E2}\u{5DC} \u{5DE}\u{5D7}\u{5E7} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5E1}\u{5D9}\u{5E8} \u{5EA}\u{5D2}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4rRvh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Ukloni`,
    "removeDescription": `Pritisnite Delete za uklanjanje oznake.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8MdSC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Elt\xe1vol\xedt\xe1s`,
    "removeDescription": `Nyomja meg a Delete billenty\u{171}t a c\xedmke elt\xe1vol\xedt\xe1s\xe1hoz.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2ziSJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Rimuovi`,
    "removeDescription": `Premi Elimina per rimuovere il tag.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iQyOd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{524A}\u{9664}`,
    "removeDescription": `\u{30BF}\u{30B0}\u{3092}\u{524A}\u{9664}\u{3059}\u{308B}\u{306B}\u{306F}\u{3001}Delete \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{307E}\u{3059}\u{3002}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5g38u":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{C81C}\u{AC70}`,
    "removeDescription": `\u{D0DC}\u{ADF8}\u{B97C} \u{C81C}\u{AC70}\u{D558}\u{B824}\u{BA74} Delete \u{D0A4}\u{B97C} \u{B204}\u{B974}\u{C2ED}\u{C2DC}\u{C624}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kHCCp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Pa\u{161}alinti`,
    "removeDescription": `Nor\u{117}dami pa\u{161}alinti \u{17E}ym\u{105}, paspauskite \u{201E}Delete\u{201C} klavi\u{161}\u{105}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gngKp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `No\u{146}emt`,
    "removeDescription": `Nospiediet Delete [Dz\u{113}st], lai no\u{146}emtu tagu.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1oJlQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Fjern`,
    "removeDescription": `Trykk p\xe5 Slett for \xe5 fjerne taggen.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"i4Sy4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Verwijderen`,
    "removeDescription": `Druk op Verwijderen om de tag te verwijderen.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gzjWn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Usu\u{144}`,
    "removeDescription": `Naci\u{15B}nij Usu\u{144}, aby usun\u{105}\u{107} znacznik.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lD9e1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Remover`,
    "removeDescription": `Pressione Delete para remover a tag.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2unhx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Eliminar`,
    "removeDescription": `Prima Delete para eliminar a tag.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"56LLV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\xcendep\u{103}rta\u{163}i`,
    "removeDescription": `Ap\u{103}sa\u{21B}i pe Delete (\u{218}tergere) pentru a elimina eticheta.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"l7zjI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{423}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{44C}`,
    "removeDescription": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} DELETE, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{443}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{44C} \u{442}\u{435}\u{433}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"giZLM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Odstr\xe1ni\u{165}`,
    "removeDescription": `Ak chcete odstr\xe1ni\u{165} zna\u{10D}ku, stla\u{10D}te kl\xe1ves Delete.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5Xr3u":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Odstrani`,
    "removeDescription": `Pritisnite Delete, da odstranite oznako.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1ASux":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Ukloni`,
    "removeDescription": `Pritisnite Obri\u{161}i da biste uklonili oznaku.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fbbtx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Ta bort`,
    "removeDescription": `Tryck p\xe5 Radera f\xf6r att ta bort taggen.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"0293S":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Kald\u{131}r`,
    "removeDescription": `Etiketi kald\u{131}rmak i\xe7in Sil tu\u{15F}una bas\u{131}n.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"92i4w":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{412}\u{438}\u{43B}\u{443}\u{447}\u{438}\u{442}\u{438}`,
    "removeDescription": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Delete, \u{449}\u{43E}\u{431} \u{432}\u{438}\u{43B}\u{443}\u{447}\u{438}\u{442}\u{438} \u{442}\u{435}\u{433}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fXJYA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{5220}\u{9664}`,
    "removeDescription": `\u{6309}\u{4E0B}\u{201C}\u{5220}\u{9664}\u{201D}\u{4EE5}\u{5220}\u{9664}\u{6807}\u{8BB0}\u{3002}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eYDQs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{79FB}\u{9664}`,
    "removeDescription": `\u{6309} Delete \u{9375}\u{4EE5}\u{79FB}\u{9664}\u{6A19}\u{8A18}\u{3002}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fVWme":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "TextFieldContext", ()=>TextFieldContext);
parcelHelpers.export(exports, "TextField", ()=>TextField);
var _jsxRuntime = require("preact/jsx-runtime");
var _useTextField = require("react-aria/useTextField");
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
var _textArea = require("./TextArea");
var _text = require("./Text");
const TextFieldContext = /*#__PURE__*/ (0, _react.createContext)(null);
const TextField = /*#__PURE__*/ (0, _hidden.createHideableComponent)(function TextField(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, TextFieldContext);
    let { validationBehavior: formValidationBehavior } = (0, _utils.useSlottedContext)((0, _form.FormContext)) || {};
    let validationBehavior = props.validationBehavior ?? formValidationBehavior ?? 'native';
    let inputRef = (0, _react.useRef)(null);
    [props, inputRef] = (0, _utils.useContextProps)(props, inputRef, (0, _autocomplete.FieldInputContext));
    let [labelRef, label] = (0, _utils.useSlot)(!props['aria-label'] && !props['aria-labelledby']);
    let [inputElementType, setInputElementType] = (0, _react.useState)('input');
    let { labelProps, inputProps, descriptionProps, errorMessageProps, ...validation } = (0, _useTextField.useTextField)({
        ...(0, _utils.removeDataAttributes)(props),
        inputElementType,
        label,
        validationBehavior
    }, inputRef);
    // Intercept setting the input ref so we can determine what kind of element we have.
    // useTextField uses this to determine what props to include.
    let inputOrTextAreaRef = (0, _react.useCallback)((el)=>{
        inputRef.current = el;
        if (el) setInputElementType(el instanceof HTMLTextAreaElement ? 'textarea' : 'input');
    }, [
        inputRef
    ]);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: {
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid,
            isReadOnly: props.isReadOnly || false,
            isRequired: props.isRequired || false
        },
        defaultClassName: 'react-aria-TextField'
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
                        ref: inputOrTextAreaRef
                    }
                ],
                [
                    (0, _textArea.TextAreaContext),
                    {
                        ...inputProps,
                        ref: inputOrTextAreaRef
                    }
                ],
                [
                    (0, _group.GroupContext),
                    {
                        role: 'presentation',
                        isInvalid: validation.isInvalid,
                        isDisabled: props.isDisabled || false
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

},{"preact/jsx-runtime":"b2Fbn","react-aria/useTextField":"kJGKw","./utils":"jtWJJ","react-aria/private/collections/Hidden":"iPJX7","./FieldError":"5KSCU","./Autocomplete":"dHgny","react-aria/filterDOMProps":"h4XHF","./Form":"aEFv9","./Group":"2mugT","./Input":"BUyo9","./Label":"eI7Ae","react":"gOP0N","./TextArea":"f7gqs","./Text":"cfMV9","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kJGKw":[function(require,module,exports,__globalThis) {
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

},{"../utils/filterDOMProps":"h4XHF","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/mergeProps":"jycxS","react":"gOP0N","react-stately/useControlledState":"8yNBD","../label/useField":"5Oeu9","../interactions/useFocusable":"6IFKj","../utils/useFormReset":"iDQvZ","../form/useFormValidation":"kdUj8","react-stately/private/form/useFormValidationState":"491YW","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"f7gqs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TextAreaContext", ()=>TextAreaContext);
parcelHelpers.export(exports, "TextArea", ()=>TextArea);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _mergeProps = require("react-aria/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useFocusRing = require("react-aria/useFocusRing");
var _useHover = require("react-aria/useHover");
const TextAreaContext = /*#__PURE__*/ (0, _react.createContext)({});
let filterHoverProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart, onHoverChange, onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const TextArea = /*#__PURE__*/ (0, _react.forwardRef)(function TextArea(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, TextAreaContext);
    let { hoverProps, isHovered } = (0, _useHover.useHover)(props);
    let { isFocused, isFocusVisible, focusProps } = (0, _useFocusRing.useFocusRing)({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: {
            isHovered,
            isFocused,
            isFocusVisible,
            isDisabled: props.disabled || false,
            isInvalid
        },
        defaultClassName: 'react-aria-TextArea'
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).textarea, {
        ...(0, _mergeProps.mergeProps)(filterHoverProps(props), focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-disabled": props.disabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-invalid": isInvalid || undefined
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/mergeProps":"jycxS","react":"gOP0N","react-aria/useFocusRing":"bP7um","react-aria/useHover":"2yLrj","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jR09w":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "ToolbarContext", ()=>ToolbarContext);
parcelHelpers.export(exports, "Toolbar", ()=>Toolbar);
var _jsxRuntime = require("preact/jsx-runtime");
var _useToolbar = require("react-aria/useToolbar");
var _utils = require("./utils");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _mergeProps = require("react-aria/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const ToolbarContext = /*#__PURE__*/ (0, _react.createContext)({});
const Toolbar = /*#__PURE__*/ (0, _react.forwardRef)(function Toolbar(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, ToolbarContext);
    let { toolbarProps } = (0, _useToolbar.useToolbar)(props, ref);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: {
            orientation: props.orientation || 'horizontal'
        },
        defaultClassName: 'react-aria-Toolbar'
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, toolbarProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-orientation": props.orientation || 'horizontal',
        children: renderProps.children
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/useToolbar":"fHZbh","./utils":"jtWJJ","react-aria/filterDOMProps":"h4XHF","react-aria/mergeProps":"jycxS","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fHZbh":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the behavior and accessibility implementation for a toolbar.
 * A toolbar is a container for a set of interactive controls with arrow key navigation.
 *
 * @param props - Props to be applied to the toolbar.
 * @param ref - A ref to a DOM element for the toolbar.
 */ parcelHelpers.export(exports, "useToolbar", ()=>useToolbar);
var _focusScope = require("../focus/FocusScope");
var _filterDOMProps = require("../utils/filterDOMProps");
var _react = require("react");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _i18Nprovider = require("../i18n/I18nProvider");
function useToolbar(props, ref) {
    const { 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, orientation = 'horizontal' } = props;
    let [isInToolbar, setInToolbar] = (0, _react.useState)(false);
    // should be safe because re-calling set state with the same value it already has is a no-op
    // this will allow us to react should a parent re-render and change its role though
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        setInToolbar(!!(ref.current && ref.current.parentElement?.closest('[role="toolbar"]')));
    });
    const { direction } = (0, _i18Nprovider.useLocale)();
    const shouldReverse = direction === 'rtl' && orientation === 'horizontal';
    // oxlint-disable-next-line react/react-compiler
    let focusManager = (0, _focusScope.createFocusManager)(ref);
    const onKeyDown = (e)=>{
        // don't handle portalled events
        if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) return;
        if (orientation === 'horizontal' && e.key === 'ArrowRight' || orientation === 'vertical' && e.key === 'ArrowDown') {
            if (shouldReverse) focusManager.focusPrevious();
            else focusManager.focusNext();
        } else if (orientation === 'horizontal' && e.key === 'ArrowLeft' || orientation === 'vertical' && e.key === 'ArrowUp') {
            if (shouldReverse) focusManager.focusNext();
            else focusManager.focusPrevious();
        } else if (e.key === 'Tab') {
            // When the tab key is pressed, we want to move focus
            // out of the entire toolbar. To do this, move focus
            // to the first or last focusable child, and let the
            // browser handle the Tab key as usual from there.
            lastFocused.current = (0, _domfunctions.getActiveElement)();
            if (e.shiftKey) focusManager.focusFirst();
            else focusManager.focusLast();
            return;
        } else // if we didn't handle anything, return early so we don't preventDefault
        return;
        // Prevent arrow keys from being handled by nested action groups.
        e.stopPropagation();
        e.preventDefault();
    };
    // Record the last focused child when focus moves out of the toolbar.
    const lastFocused = (0, _react.useRef)(null);
    const onBlur = (e)=>{
        if (!(0, _domfunctions.nodeContains)(e.currentTarget, e.relatedTarget) && !lastFocused.current) lastFocused.current = (0, _domfunctions.getEventTarget)(e);
    };
    // Restore focus to the last focused child when focus returns into the toolbar.
    // If the element was removed, do nothing, either the first item in the first group,
    // or the last item in the last group will be focused, depending on direction.
    const onFocus = (e)=>{
        if (lastFocused.current && !(0, _domfunctions.nodeContains)(e.currentTarget, e.relatedTarget) && (0, _domfunctions.nodeContains)(ref.current, (0, _domfunctions.getEventTarget)(e))) {
            lastFocused.current?.focus();
            lastFocused.current = null;
        }
    };
    return {
        toolbarProps: {
            ...(0, _filterDOMProps.filterDOMProps)(props, {
                labelable: true
            }),
            role: !isInToolbar ? 'toolbar' : 'group',
            'aria-orientation': orientation,
            'aria-label': ariaLabel,
            'aria-labelledby': ariaLabel == null ? ariaLabelledBy : undefined,
            onKeyDownCapture: !isInToolbar ? onKeyDown : undefined,
            onFocusCapture: !isInToolbar ? onFocus : undefined,
            onBlurCapture: !isInToolbar ? onBlur : undefined
        }
    };
}

},{"../focus/FocusScope":"E8d3D","../utils/filterDOMProps":"h4XHF","react":"gOP0N","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/useLayoutEffect":"h7M6K","../i18n/I18nProvider":"czGuc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fbj2f":[function(require,module,exports,__globalThis) {
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
 * Manages state for an immutable async loaded list data structure, and provides convenience methods
 * to update the data over time. Manages loading and error states, pagination, and sorting.
 */ parcelHelpers.export(exports, "useAsyncList", ()=>useAsyncList);
var _useListData = require("./useListData");
var _react = require("react");
function reducer(data, action) {
    let selectedKeys;
    switch(data.state){
        case 'idle':
        case 'error':
            switch(action.type){
                case 'loading':
                case 'loadingMore':
                case 'sorting':
                case 'filtering':
                    return {
                        ...data,
                        filterText: action.filterText ?? data.filterText,
                        state: action.type,
                        // Reset items to an empty list if loading, but not when sorting.
                        items: action.type === 'loading' ? [] : data.items,
                        sortDescriptor: action.sortDescriptor ?? data.sortDescriptor,
                        abortController: action.abortController
                    };
                case 'update':
                    return {
                        ...data,
                        ...action.updater?.(data)
                    };
                case 'success':
                case 'error':
                    return data;
                default:
                    throw new Error(`Invalid action "${action.type}" in state "${data.state}"`);
            }
        case 'loading':
        case 'sorting':
        case 'filtering':
            switch(action.type){
                case 'success':
                    // Ignore if there is a newer abortcontroller in state.
                    // This means that multiple requests were going at once.
                    // We want to take only the latest result.
                    if (action.abortController !== data.abortController) return data;
                    selectedKeys = action.selectedKeys ?? data.selectedKeys;
                    return {
                        ...data,
                        filterText: action.filterText ?? data.filterText,
                        state: 'idle',
                        items: [
                            ...action.items ?? []
                        ],
                        selectedKeys: selectedKeys === 'all' ? 'all' : new Set(selectedKeys),
                        sortDescriptor: action.sortDescriptor ?? data.sortDescriptor,
                        abortController: undefined,
                        cursor: action.cursor
                    };
                case 'error':
                    if (action.abortController !== data.abortController) return data;
                    return {
                        ...data,
                        state: 'error',
                        error: action.error,
                        abortController: undefined
                    };
                case 'loading':
                case 'loadingMore':
                case 'sorting':
                case 'filtering':
                    // We're already loading, and another load was triggered at the same time.
                    // We need to abort the previous load and start a new one.
                    data.abortController?.abort('aborting current load and starting new one');
                    return {
                        ...data,
                        filterText: action.filterText ?? data.filterText,
                        state: action.type,
                        // Reset items to an empty list if loading, but not when sorting.
                        items: action.type === 'loading' ? [] : data.items,
                        abortController: action.abortController
                    };
                case 'update':
                    // We're already loading, and an update happened at the same time (e.g. selectedKey changed).
                    // Update data but don't abort previous load.
                    return {
                        ...data,
                        ...action.updater?.(data)
                    };
                default:
                    throw new Error(`Invalid action "${action.type}" in state "${data.state}"`);
            }
        case 'loadingMore':
            switch(action.type){
                case 'success':
                    selectedKeys = data.selectedKeys === 'all' || action.selectedKeys === 'all' ? 'all' : new Set([
                        ...data.selectedKeys,
                        ...action.selectedKeys ?? []
                    ]);
                    // Append the new items
                    return {
                        ...data,
                        state: 'idle',
                        items: [
                            ...data.items,
                            ...action.items ?? []
                        ],
                        selectedKeys,
                        sortDescriptor: action.sortDescriptor ?? data.sortDescriptor,
                        abortController: undefined,
                        cursor: action.cursor
                    };
                case 'error':
                    if (action.abortController !== data.abortController) return data;
                    return {
                        ...data,
                        state: 'error',
                        error: action.error
                    };
                case 'loading':
                case 'sorting':
                case 'filtering':
                    // We're already loading more, and another load was triggered at the same time.
                    // We need to abort the previous load more and start a new one.
                    data.abortController?.abort();
                    return {
                        ...data,
                        filterText: action.filterText ?? data.filterText,
                        state: action.type,
                        // Reset items to an empty list if loading, but not when sorting.
                        items: action.type === 'loading' ? [] : data.items,
                        abortController: action.abortController
                    };
                case 'loadingMore':
                    // If already loading more and another loading more is triggered, abort the new load more since
                    // it is a duplicate request since the cursor hasn't been updated.
                    // Do not overwrite the data.abortController
                    action.abortController?.abort();
                    return data;
                case 'update':
                    // We're already loading, and an update happened at the same time (e.g. selectedKey changed).
                    // Update data but don't abort previous load.
                    return {
                        ...data,
                        ...action.updater?.(data)
                    };
                default:
                    throw new Error(`Invalid action "${action.type}" in state "${data.state}"`);
            }
        default:
            throw new Error(`Invalid state "${data.state}"`);
    }
}
function useAsyncList(options) {
    const { load, sort, initialSelectedKeys, initialSortDescriptor, getKey = (item)=>item.id || item.key, initialFilterText = '' } = options;
    let [data, dispatch] = (0, _react.useReducer)(reducer, {
        state: 'idle',
        error: undefined,
        items: [],
        selectedKeys: initialSelectedKeys === 'all' ? 'all' : new Set(initialSelectedKeys),
        sortDescriptor: initialSortDescriptor,
        filterText: initialFilterText
    });
    const dispatchFetch = async (action, fn)=>{
        let abortController = new AbortController();
        try {
            dispatch({
                ...action,
                abortController
            });
            let previousFilterText = action.filterText ?? data.filterText;
            let response = await fn({
                items: data.items.slice(),
                selectedKeys: data.selectedKeys,
                sortDescriptor: action.sortDescriptor ?? data.sortDescriptor,
                signal: abortController.signal,
                cursor: action.type === 'loadingMore' ? data.cursor : undefined,
                filterText: previousFilterText,
                loadingState: data.state
            });
            let filterText = response.filterText ?? previousFilterText;
            dispatch({
                type: 'success',
                ...response,
                abortController
            });
            // Fetch a new filtered list if filterText is updated via `load` response func rather than list.setFilterText
            // Only do this if not aborted (e.g. user triggers another filter action before load completes)
            if (filterText && filterText !== previousFilterText && !abortController.signal.aborted) dispatchFetch({
                type: 'filtering',
                filterText
            }, load);
        } catch (e) {
            dispatch({
                type: 'error',
                error: e,
                abortController
            });
        }
    };
    let didDispatchInitialFetch = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (!didDispatchInitialFetch.current) {
            dispatchFetch({
                type: 'loading'
            }, load);
            didDispatchInitialFetch.current = true;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        items: data.items,
        selectedKeys: data.selectedKeys,
        sortDescriptor: data.sortDescriptor,
        isLoading: data.state === 'loading' || data.state === 'loadingMore' || data.state === 'sorting' || data.state === 'filtering',
        loadingState: data.state,
        error: data.error,
        filterText: data.filterText,
        getItem (key) {
            return data.items.find((item)=>getKey(item) === key);
        },
        reload () {
            dispatchFetch({
                type: 'loading'
            }, load);
        },
        loadMore () {
            // Ignore if already loading more or if performing server side filtering.
            if (data.state === 'loading' || data.state === 'loadingMore' || data.state === 'filtering' || data.cursor == null) return;
            dispatchFetch({
                type: 'loadingMore'
            }, load);
        },
        sort (sortDescriptor) {
            dispatchFetch({
                type: 'sorting',
                sortDescriptor
            }, sort || load);
        },
        ...(0, _useListData.createListActions)({
            ...options,
            getKey,
            cursor: data.cursor
        }, (fn)=>{
            dispatch({
                type: 'update',
                updater: fn
            });
        }),
        setFilterText (filterText) {
            dispatchFetch({
                type: 'filtering',
                filterText
            }, load);
        }
    };
}

},{"./useListData":"iS6HG","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iS6HG":[function(require,module,exports,__globalThis) {
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
 * Manages state for an immutable list data structure, and provides convenience methods to
 * update the data over time.
 */ parcelHelpers.export(exports, "useListData", ()=>useListData);
parcelHelpers.export(exports, "createListActions", ()=>createListActions);
var _react = require("react");
function useListData(options) {
    let { initialItems = [], initialSelectedKeys, getKey = (item)=>item.id ?? item.key, filter, initialFilterText = '' } = options;
    // Store both items and filteredItems in state so we can go back to the unfiltered list
    let [state, setState] = (0, _react.useState)({
        items: initialItems,
        selectedKeys: initialSelectedKeys === 'all' ? 'all' : new Set(initialSelectedKeys || []),
        filterText: initialFilterText
    });
    let filteredItems = (0, _react.useMemo)(()=>filter ? state.items.filter((item)=>filter(item, state.filterText)) : state.items, [
        state.items,
        state.filterText,
        filter
    ]);
    return {
        ...state,
        items: filteredItems,
        ...createListActions({
            getKey
        }, setState),
        getItem (key) {
            return state.items.find((item)=>getKey(item) === key);
        }
    };
}
function createListActions(opts, dispatch) {
    let { cursor, getKey } = opts;
    return {
        setSelectedKeys (selectedKeys) {
            dispatch((state)=>({
                    ...state,
                    selectedKeys
                }));
        },
        addKeysToSelection (selectedKeys) {
            dispatch((state)=>{
                if (state.selectedKeys === 'all') return state;
                if (selectedKeys === 'all') return {
                    ...state,
                    selectedKeys: 'all'
                };
                return {
                    ...state,
                    selectedKeys: new Set([
                        ...state.selectedKeys,
                        ...selectedKeys
                    ])
                };
            });
        },
        removeKeysFromSelection (selectedKeys) {
            dispatch((state)=>{
                if (selectedKeys === 'all') return {
                    ...state,
                    selectedKeys: new Set()
                };
                let selection = state.selectedKeys === 'all' ? new Set(state.items.map(getKey)) : new Set(state.selectedKeys);
                for (let key of selectedKeys)selection.delete(key);
                return {
                    ...state,
                    selectedKeys: selection
                };
            });
        },
        setFilterText (filterText) {
            dispatch((state)=>({
                    ...state,
                    filterText
                }));
        },
        insert (index, ...values) {
            dispatch((state)=>insert(state, index, ...values));
        },
        insertBefore (key, ...values) {
            dispatch((state)=>{
                let index = state.items.findIndex((item)=>getKey?.(item) === key);
                if (index === -1) {
                    if (state.items.length === 0) index = 0;
                    else return state;
                }
                return insert(state, index, ...values);
            });
        },
        insertAfter (key, ...values) {
            dispatch((state)=>{
                let index = state.items.findIndex((item)=>getKey?.(item) === key);
                if (index === -1) {
                    if (state.items.length === 0) index = 0;
                    else return state;
                }
                return insert(state, index + 1, ...values);
            });
        },
        prepend (...values) {
            dispatch((state)=>insert(state, 0, ...values));
        },
        append (...values) {
            dispatch((state)=>insert(state, state.items.length, ...values));
        },
        remove (...keys) {
            dispatch((state)=>{
                let keySet = new Set(keys);
                let items = state.items.filter((item)=>!keySet.has(getKey(item)));
                let selection = 'all';
                if (state.selectedKeys !== 'all') {
                    selection = new Set(state.selectedKeys);
                    for (let key of keys)selection.delete(key);
                }
                if (cursor == null && items.length === 0) selection = new Set();
                return {
                    ...state,
                    items,
                    selectedKeys: selection
                };
            });
        },
        removeSelectedItems () {
            dispatch((state)=>{
                if (state.selectedKeys === 'all') return {
                    ...state,
                    items: [],
                    selectedKeys: new Set()
                };
                let selectedKeys = state.selectedKeys;
                let items = state.items.filter((item)=>!selectedKeys.has(getKey(item)));
                return {
                    ...state,
                    items,
                    selectedKeys: new Set()
                };
            });
        },
        move (key, toIndex) {
            dispatch((state)=>{
                let index = state.items.findIndex((item)=>getKey(item) === key);
                if (index === -1) return state;
                let copy = state.items.slice();
                let [item] = copy.splice(index, 1);
                copy.splice(toIndex, 0, item);
                return {
                    ...state,
                    items: copy
                };
            });
        },
        moveBefore (key, keys) {
            dispatch((state)=>{
                let toIndex = state.items.findIndex((item)=>getKey(item) === key);
                if (toIndex === -1) return state;
                // Find indices of keys to move. Sort them so that the order in the list is retained.
                let keyArray = Array.isArray(keys) ? keys : [
                    ...keys
                ];
                let indices = keyArray.map((key)=>state.items.findIndex((item)=>getKey(item) === key)).sort((a, b)=>a - b);
                return move(state, indices, toIndex);
            });
        },
        moveAfter (key, keys) {
            dispatch((state)=>{
                let toIndex = state.items.findIndex((item)=>getKey(item) === key);
                if (toIndex === -1) return state;
                let keyArray = Array.isArray(keys) ? keys : [
                    ...keys
                ];
                let indices = keyArray.map((key)=>state.items.findIndex((item)=>getKey(item) === key)).sort((a, b)=>a - b);
                return move(state, indices, toIndex + 1);
            });
        },
        update (key, newValue) {
            dispatch((state)=>{
                let index = state.items.findIndex((item)=>getKey(item) === key);
                if (index === -1) return state;
                let updatedValue;
                if (typeof newValue === 'function') updatedValue = newValue(state.items[index]);
                else updatedValue = newValue;
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, index),
                        updatedValue,
                        ...state.items.slice(index + 1)
                    ]
                };
            });
        }
    };
}
function insert(state, index, ...values) {
    return {
        ...state,
        items: [
            ...state.items.slice(0, index),
            ...values,
            ...state.items.slice(index)
        ]
    };
}
function move(state, indices, toIndex) {
    // Shift the target down by the number of items being moved from before the target
    toIndex -= indices.filter((index)=>index < toIndex).length;
    let moves = indices.map((from)=>({
            from,
            to: toIndex++
        }));
    // Shift later from indices down if they have a larger index
    for(let i = 0; i < moves.length; i++){
        let a = moves[i].from;
        for(let j = i; j < moves.length; j++){
            let b = moves[j].from;
            if (b > a) moves[j].from--;
        }
    }
    // Interleave the moves so they can be applied one by one rather than all at once
    for(let i = 0; i < moves.length; i++){
        let a = moves[i];
        for(let j = moves.length - 1; j > i; j--){
            let b = moves[j];
            if (b.from < a.to) a.to++;
            else b.from++;
        }
    }
    let copy = state.items.slice();
    for (let move of moves){
        let [item] = copy.splice(move.from, 1);
        copy.splice(move.to, 0, item);
    }
    return {
        ...state,
        items: copy
    };
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9H3Eo":[function(require,module,exports,__globalThis) {
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
/**
 * A Virtualizer renders a scrollable collection of data using customizable layouts.
 * It supports very large collections by only rendering visible items to the DOM, reusing
 * them as the user scrolls.
 */ parcelHelpers.export(exports, "Virtualizer", ()=>Virtualizer);
var _jsxRuntime = require("preact/jsx-runtime");
var _collection = require("./Collection");
var _useVirtualizerState = require("react-stately/useVirtualizerState");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _scrollView = require("react-aria/private/virtualizer/ScrollView");
var _virtualizerItem = require("react-aria/private/virtualizer/VirtualizerItem");
const VirtualizerContext = /*#__PURE__*/ (0, _react.createContext)(null);
const VirtualizerOptionsContext = /*#__PURE__*/ (0, _react.createContext)(null);
function Virtualizer(props) {
    let { children, layout: layoutProp, layoutOptions, shouldObserveItemSize } = props;
    let layout = (0, _react.useMemo)(()=>typeof layoutProp === 'function' ? new layoutProp() : layoutProp, [
        layoutProp
    ]);
    let renderer = (0, _react.useMemo)(()=>({
            isVirtualized: true,
            layoutDelegate: layout,
            dropTargetDelegate: layout.getDropTargetFromPoint ? layout : undefined,
            CollectionRoot,
            CollectionBranch
        }), [
        layout
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collection.CollectionRendererContext).Provider, {
        value: renderer,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(VirtualizerOptionsContext.Provider, {
            value: {
                layout,
                layoutOptions,
                shouldObserveItemSize
            },
            children: children
        })
    });
}
function CollectionRoot({ collection, persistedKeys, scrollRef, renderDropIndicator }) {
    let { layout, layoutOptions, shouldObserveItemSize } = (0, _react.useContext)(VirtualizerOptionsContext);
    // oxlint-disable-next-line react/react-compiler
    let layoutOptions2 = layout.useLayoutOptions?.();
    let state = (0, _useVirtualizerState.useVirtualizerState)({
        allowsWindowScrolling: true,
        layout,
        collection,
        renderView: (type, item)=>{
            return item?.render?.(item);
        },
        onVisibleRectChange (rect) {
            let element = scrollRef?.current;
            if (element) {
                // oxlint-disable-next-line react/react-compiler
                element.scrollLeft = rect.x;
                element.scrollTop = rect.y;
            }
        },
        persistedKeys,
        layoutOptions: (0, _react.useMemo)(()=>layoutOptions && layoutOptions2 ? {
                ...layoutOptions,
                ...layoutOptions2
            } : layoutOptions || layoutOptions2, [
            layoutOptions,
            layoutOptions2
        ])
    });
    let { contentProps } = (0, _scrollView.useScrollView)({
        onVisibleRectChange: state.setVisibleRect,
        onSizeChange: state.setSize,
        contentSize: state.contentSize,
        onScrollStart: state.startScrolling,
        onScrollEnd: state.endScrolling,
        allowsWindowScrolling: true
    }, scrollRef);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        ...contentProps,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(VirtualizerContext.Provider, {
            value: state,
            children: renderChildren(null, state.visibleViews, renderDropIndicator, shouldObserveItemSize)
        })
    });
}
function CollectionBranch({ parent, renderDropIndicator }) {
    let virtualizer = (0, _react.useContext)(VirtualizerContext);
    let parentView = virtualizer.virtualizer.getVisibleView(parent.key);
    let { shouldObserveItemSize } = (0, _react.useContext)(VirtualizerOptionsContext);
    return renderChildren(parentView, Array.from(parentView.children), renderDropIndicator, shouldObserveItemSize);
}
function renderChildren(parent, children, renderDropIndicator, shouldObserveItemSize) {
    return children.map((view)=>renderWrapper(parent, view, renderDropIndicator, shouldObserveItemSize));
}
function renderWrapper(parent, reusableView, renderDropIndicator, shouldObserveItemSize) {
    let rendered = /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _virtualizerItem.VirtualizerItem), {
        layoutInfo: reusableView.layoutInfo,
        virtualizer: reusableView.virtualizer,
        parent: parent?.layoutInfo,
        shouldObserveItemSize: shouldObserveItemSize,
        children: reusableView.rendered
    }, reusableView.key);
    let { collection, layout } = reusableView.virtualizer;
    let node = reusableView.content;
    if (node?.type === 'item' && renderDropIndicator && layout.getDropTargetLayoutInfo) rendered = /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _reactDefault.default).Fragment, {
        children: [
            renderDropIndicatorWrapper(parent, reusableView, {
                type: 'item',
                key: reusableView.content.key,
                dropPosition: 'before'
            }, renderDropIndicator),
            rendered,
            (0, _collection.renderAfterDropIndicators)(collection, node, (target)=>renderDropIndicatorWrapper(parent, reusableView, target, renderDropIndicator))
        ]
    }, reusableView.key);
    return rendered;
}
function renderDropIndicatorWrapper(parent, reusableView, target, renderDropIndicator) {
    let indicator = renderDropIndicator(target);
    if (indicator) {
        let layoutInfo = reusableView.virtualizer.layout.getDropTargetLayoutInfo(target);
        indicator = /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _virtualizerItem.VirtualizerItem), {
            layoutInfo: layoutInfo,
            virtualizer: reusableView.virtualizer,
            parent: parent?.layoutInfo,
            children: indicator
        });
    }
    return indicator;
}

},{"preact/jsx-runtime":"b2Fbn","./Collection":"4TSYQ","react-stately/useVirtualizerState":"nHEBB","react":"gOP0N","react-aria/private/virtualizer/ScrollView":"brfpZ","react-aria/private/virtualizer/VirtualizerItem":"hHplS","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9cXWn":[function(require,module,exports,__globalThis) {
module.exports["animation"] = `_7kCRhG_animation`;
module.exports["animation-delayed"] = `_7kCRhG_animation-delayed`;
module.exports["bar"] = `_7kCRhG_bar`;
module.exports["blur"] = `_7kCRhG_blur`;
module.exports["description"] = `_7kCRhG_description`;
module.exports["enter"] = `_7kCRhG_enter`;
module.exports["enter"];
module.exports["exit"] = `_7kCRhG_exit`;
module.exports["exit"];
module.exports["fade"] = `_7kCRhG_fade`;
module.exports["fade"];
module.exports["image"] = `_7kCRhG_image`;
module.exports["label"] = `_7kCRhG_label`;
module.exports["my-modal"] = `_7kCRhG_my-modal`;
module.exports["my-overlay"] = `_7kCRhG_my-overlay`;
module.exports["popover-base"] = `_7kCRhG_popover-base`;
module.exports["transition"] = `_7kCRhG_transition`;
module.exports["popover"] = `_7kCRhG_popover ${module.exports["popover-base"]} ${module.exports["transition"]}`;
module.exports["slide"] = `_7kCRhG_slide`;
module.exports["slide"];
module.exports["title"] = `_7kCRhG_title`;
module.exports["tooltip"] = `_7kCRhG_tooltip ${module.exports["popover-base"]} ${module.exports["transition"]}`;
module.exports["tooltip-base"] = `_7kCRhG_tooltip-base`;
module.exports["value"] = `_7kCRhG_value`;

},{}],"6MchE":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "RadioGroupContext", ()=>RadioGroupContext);
parcelHelpers.export(exports, "RadioContext", ()=>RadioContext);
parcelHelpers.export(exports, "RadioFieldContext", ()=>RadioFieldContext);
parcelHelpers.export(exports, "RadioGroupStateContext", ()=>RadioGroupStateContext);
parcelHelpers.export(exports, "RadioGroup", ()=>RadioGroup);
parcelHelpers.export(exports, "Radio", ()=>Radio);
parcelHelpers.export(exports, "RadioField", ()=>RadioField);
parcelHelpers.export(exports, "RadioButton", ()=>RadioButton);
var _jsxRuntime = require("preact/jsx-runtime");
var _useRadioGroup = require("react-aria/useRadioGroup");
var _utils = require("./utils");
var _fieldError = require("./FieldError");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _form = require("./Form");
var _label = require("./Label");
var _mergeProps = require("react-aria/mergeProps");
var _mergeRefs = require("react-aria/mergeRefs");
var _useRadioGroupState = require("react-stately/useRadioGroupState");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _selectionIndicator = require("./SelectionIndicator");
var _sharedElementTransition = require("./SharedElementTransition");
var _text = require("./Text");
var _useFocusRing = require("react-aria/useFocusRing");
var _useHover = require("react-aria/useHover");
var _useObjectRef = require("react-aria/useObjectRef");
var _visuallyHidden = require("react-aria/VisuallyHidden");
const RadioGroupContext = /*#__PURE__*/ (0, _react.createContext)(null);
const RadioContext = /*#__PURE__*/ (0, _react.createContext)(null);
const RadioFieldContext = /*#__PURE__*/ (0, _react.createContext)(null);
const RadioGroupStateContext = /*#__PURE__*/ (0, _react.createContext)(null);
const RadioGroup = /*#__PURE__*/ (0, _react.forwardRef)(function RadioGroup(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, RadioGroupContext);
    let { validationBehavior: formValidationBehavior } = (0, _utils.useSlottedContext)((0, _form.FormContext)) || {};
    let validationBehavior = props.validationBehavior ?? formValidationBehavior ?? 'native';
    let state = (0, _useRadioGroupState.useRadioGroupState)({
        ...props,
        validationBehavior
    });
    let [labelRef, label] = (0, _utils.useSlot)(!props['aria-label'] && !props['aria-labelledby']);
    let { radioGroupProps, labelProps, descriptionProps, errorMessageProps, ...validation } = (0, _useRadioGroup.useRadioGroup)({
        ...props,
        label,
        validationBehavior
    }, state);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: {
            orientation: props.orientation || 'vertical',
            isDisabled: state.isDisabled,
            isReadOnly: state.isReadOnly,
            isRequired: state.isRequired,
            isInvalid: state.isInvalid,
            state
        },
        defaultClassName: 'react-aria-RadioGroup'
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, radioGroupProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-orientation": props.orientation || 'vertical',
        "data-invalid": state.isInvalid || undefined,
        "data-disabled": state.isDisabled || undefined,
        "data-readonly": state.isReadOnly || undefined,
        "data-required": state.isRequired || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
            values: [
                [
                    RadioGroupStateContext,
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
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _sharedElementTransition.SharedElementTransition), {
                children: renderProps.children
            })
        })
    });
});
const Radio = /*#__PURE__*/ (0, _react.forwardRef)(function Radio(props, ref) {
    let { inputRef: userProvidedInputRef = null, ...otherProps } = props;
    [props, ref] = (0, _utils.useContextProps)(otherProps, ref, RadioContext);
    let state = (0, _reactDefault.default).useContext(RadioGroupStateContext);
    let inputRef = (0, _useObjectRef.useObjectRef)((0, _react.useMemo)(()=>(0, _mergeRefs.mergeRefs)(userProvidedInputRef, props.inputRef !== undefined ? props.inputRef : null), [
        userProvidedInputRef,
        props.inputRef
    ]));
    let aria = (0, _useRadioGroup.useRadio)({
        ...(0, _utils.removeDataAttributes)(props),
        // ReactNode type doesn't allow function children.
        children: typeof props.children === 'function' ? true : props.children
    }, state, inputRef);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(InternalRadioContext.Provider, {
        value: {
            ...aria,
            inputRef,
            defaultClassName: 'react-aria-Radio'
        },
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(RadioButton, {
            ...props,
            ref: ref
        })
    });
});
const InternalRadioContext = /*#__PURE__*/ (0, _react.createContext)(null);
const RadioField = /*#__PURE__*/ (0, _react.forwardRef)(function RadioField(props, ref) {
    let { inputRef: userProvidedInputRef = null, ...otherProps } = props;
    [props, ref] = (0, _utils.useContextProps)(otherProps, ref, RadioFieldContext);
    let state = (0, _reactDefault.default).useContext(RadioGroupStateContext);
    let inputRef = (0, _useObjectRef.useObjectRef)((0, _react.useMemo)(()=>(0, _mergeRefs.mergeRefs)(userProvidedInputRef, props.inputRef !== undefined ? props.inputRef : null), [
        userProvidedInputRef,
        props.inputRef
    ]));
    let aria = (0, _useRadioGroup.useRadio)({
        ...(0, _utils.removeDataAttributes)(props),
        // ReactNode type doesn't allow function children.
        children: typeof props.children === 'function' ? true : props.children
    }, state, inputRef);
    let { descriptionProps, isSelected, isDisabled } = aria;
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-RadioField',
        values: {
            isSelected,
            isDisabled,
            isReadOnly: state.isReadOnly,
            isInvalid: state.isInvalid,
            isRequired: state.isRequired
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
        "data-selected": isSelected || undefined,
        "data-disabled": isDisabled || undefined,
        "data-readonly": state.isReadOnly || undefined,
        "data-invalid": state.isInvalid || undefined,
        "data-required": state.isRequired || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
            values: [
                [
                    (0, _selectionIndicator.SelectionIndicatorContext),
                    {
                        isSelected
                    }
                ],
                [
                    InternalRadioContext,
                    {
                        ...aria,
                        inputRef,
                        defaultClassName: 'react-aria-RadioButton'
                    }
                ],
                [
                    (0, _text.TextContext),
                    {
                        slots: {
                            description: descriptionProps
                        }
                    }
                ]
            ],
            children: renderProps.children
        })
    });
});
const RadioButton = /*#__PURE__*/ (0, _react.forwardRef)(function RadioButton(props, ref) {
    let { labelProps, inputProps, isSelected, isDisabled, isPressed, defaultClassName, inputRef } = (0, _react.useContext)(InternalRadioContext);
    let state = (0, _reactDefault.default).useContext(RadioGroupStateContext);
    let { isFocused, isFocusVisible, focusProps } = (0, _useFocusRing.useFocusRing)();
    let interactionDisabled = isDisabled || state.isReadOnly;
    let { hoverProps, isHovered } = (0, _useHover.useHover)({
        ...props,
        isDisabled: interactionDisabled
    });
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultClassName,
        values: {
            isSelected,
            isPressed,
            isHovered,
            isFocused,
            isFocusVisible,
            isDisabled,
            isReadOnly: state.isReadOnly,
            isInvalid: state.isInvalid,
            isRequired: state.isRequired
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
        "data-selected": isSelected || undefined,
        "data-pressed": isPressed || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-readonly": state.isReadOnly || undefined,
        "data-invalid": state.isInvalid || undefined,
        "data-required": state.isRequired || undefined,
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

},{"preact/jsx-runtime":"b2Fbn","react-aria/useRadioGroup":[["useRadio","4S6b1"],["useRadioGroup","fa7jA"]],"./utils":"jtWJJ","./FieldError":"5KSCU","react-aria/filterDOMProps":"h4XHF","./Form":"aEFv9","./Label":"eI7Ae","react-aria/mergeProps":"jycxS","react-aria/mergeRefs":"jspQh","react-stately/useRadioGroupState":"j0iBp","react":"gOP0N","./SelectionIndicator":"4EL3s","./SharedElementTransition":"2Pl2F","./Text":"cfMV9","react-aria/useFocusRing":"bP7um","react-aria/useHover":"2yLrj","react-aria/useObjectRef":"ec0NJ","react-aria/VisuallyHidden":"cMf28","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4S6b1":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for an individual
 * radio button in a radio group.
 *
 * @param props - Props for the radio.
 * @param state - State for the radio group, as returned by `useRadioGroupState`.
 * @param ref - Ref to the HTML input element.
 */ parcelHelpers.export(exports, "useRadio", ()=>useRadio);
var _filterDOMProps = require("../utils/filterDOMProps");
var _react = require("react");
var _mergeProps = require("../utils/mergeProps");
var _utils = require("./utils");
var _useFocusable = require("../interactions/useFocusable");
var _useFormReset = require("../utils/useFormReset");
var _useFormValidation = require("../form/useFormValidation");
var _usePress = require("../interactions/usePress");
var _useSlot = require("../utils/useSlot");
function useRadio(props, state, ref) {
    let { value, children, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, onPressStart, onPressEnd, onPressChange, onPress, onPressUp, onClick } = props;
    const isDisabled = props.isDisabled || state.isDisabled;
    let hasChildren = children != null;
    let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;
    !hasChildren && hasAriaLabel;
    let checked = state.selectedValue === value;
    let onChange = (e)=>{
        e.stopPropagation();
        state.setSelectedValue(value);
    };
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
    let { pressProps: labelProps, isPressed: isLabelPressed } = (0, _usePress.usePress)({
        onPressStart,
        onPressEnd,
        onPressChange,
        onPressUp,
        onClick,
        isDisabled,
        onPress (e) {
            onPress?.(e);
            state.setSelectedValue(value);
            ref.current?.focus();
        }
    });
    let { focusableProps } = (0, _useFocusable.useFocusable)((0, _mergeProps.mergeProps)(props, {
        onFocus: ()=>state.setLastFocusedValue(value)
    }), ref);
    let interactions = (0, _mergeProps.mergeProps)(pressProps, focusableProps);
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    let tabIndex = -1;
    if (state.selectedValue != null) {
        if (state.selectedValue === value) tabIndex = 0;
    } else if (state.lastFocusedValue === value || state.lastFocusedValue == null) tabIndex = 0;
    if (isDisabled) tabIndex = undefined;
    let { name, form, descriptionId, errorMessageId, validationBehavior } = (0, _utils.radioGroupData).get(state);
    (0, _useFormReset.useFormReset)(ref, state.defaultSelectedValue, state.setSelectedValue);
    (0, _useFormValidation.useFormValidation)({
        validationBehavior
    }, state, ref);
    let descriptionProps = (0, _useSlot.useSlotId2)();
    return {
        labelProps: (0, _mergeProps.mergeProps)(labelProps, (0, _react.useMemo)(()=>({
                onClick: (e)=>e.preventDefault(),
                // Prevent label from being focused when mouse down on it.
                // Note, this does not prevent the input from being focused in the `click` event.
                onMouseDown: (e)=>e.preventDefault()
            }), [])),
        inputProps: (0, _mergeProps.mergeProps)(domProps, {
            ...interactions,
            type: 'radio',
            name,
            form,
            tabIndex,
            disabled: isDisabled,
            required: state.isRequired && validationBehavior === 'native',
            checked,
            value,
            onChange,
            'aria-describedby': [
                props['aria-describedby'],
                descriptionProps.id,
                state.isInvalid ? errorMessageId : null,
                descriptionId
            ].filter(Boolean).join(' ') || undefined
        }),
        descriptionProps,
        isDisabled,
        isSelected: checked,
        isPressed: isPressed || isLabelPressed
    };
}

},{"../utils/filterDOMProps":"h4XHF","react":"gOP0N","../utils/mergeProps":"jycxS","./utils":"dOqLQ","../interactions/useFocusable":"6IFKj","../utils/useFormReset":"iDQvZ","../form/useFormValidation":"kdUj8","../interactions/usePress":"3S2KR","../utils/useSlot":"jo4XI","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dOqLQ":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "radioGroupData", ()=>radioGroupData);
const radioGroupData = new WeakMap();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fa7jA":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a radio group component.
 * Radio groups allow users to select a single item from a list of mutually exclusive options.
 *
 * @param props - Props for the radio group.
 * @param state - State for the radio group, as returned by `useRadioGroupState`.
 */ parcelHelpers.export(exports, "useRadioGroup", ()=>useRadioGroup);
var _filterDOMProps = require("../utils/filterDOMProps");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _focusScope = require("../focus/FocusScope");
var _domHelpers = require("../utils/domHelpers");
var _mergeProps = require("../utils/mergeProps");
var _utils = require("./utils");
var _useField = require("../label/useField");
var _useFocusWithin = require("../interactions/useFocusWithin");
var _useId = require("../utils/useId");
var _useKeyboard = require("../interactions/useKeyboard");
var _i18Nprovider = require("../i18n/I18nProvider");
function useRadioGroup(props, state) {
    let { name, form, isReadOnly, isRequired, isDisabled, orientation = 'vertical', validationBehavior = 'aria' } = props;
    let { direction } = (0, _i18Nprovider.useLocale)();
    let { isInvalid, validationErrors, validationDetails } = state.displayValidation;
    let { labelProps, fieldProps, descriptionProps, errorMessageProps } = (0, _useField.useField)({
        ...props,
        // Radio group is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span',
        isInvalid: state.isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    // When the radio group loses focus, reset the focusable radio to null if
    // there is no selection. This allows tabbing into the group from either
    // direction to go to the first or last radio.
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)({
        onBlurWithin (e) {
            props.onBlur?.(e);
            if (!state.selectedValue) state.setLastFocusedValue(null);
        },
        onFocusWithin: props.onFocus,
        onFocusWithinChange: props.onFocusChange
    });
    function getNextElement(nextDir, e) {
        let walker = (0, _focusScope.getFocusableTreeWalker)(e.currentTarget, {
            from: (0, _domfunctions.getEventTarget)(e),
            accept: (node)=>node instanceof (0, _domHelpers.getOwnerWindow)(node).HTMLInputElement && node.type === 'radio'
        });
        let nextElem;
        if (nextDir === 'next') {
            nextElem = walker.nextNode();
            if (!nextElem) {
                walker.currentNode = e.currentTarget;
                nextElem = walker.firstChild();
            }
        } else {
            nextElem = walker.previousNode();
            if (!nextElem) {
                walker.currentNode = e.currentTarget;
                nextElem = walker.lastChild();
            }
        }
        if (nextElem) {
            // Call focus on nextElem so that keyboard navigation scrolls the radio into view
            nextElem.focus();
            state.setSelectedValue(nextElem.value);
            return true;
        }
        return false;
    }
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            ArrowRight: (e)=>{
                let nextDir = direction === 'rtl' && orientation !== 'vertical' ? 'prev' : 'next';
                return getNextElement(nextDir, e);
            },
            ArrowLeft: (e)=>{
                let nextDir = direction === 'rtl' && orientation !== 'vertical' ? 'next' : 'prev';
                return getNextElement(nextDir, e);
            },
            ArrowDown: (e)=>{
                return getNextElement('next', e);
            },
            ArrowUp: (e)=>{
                return getNextElement('prev', e);
            }
        },
        allowRepeats: true
    });
    let groupName = (0, _useId.useId)(name);
    (0, _utils.radioGroupData).set(state, {
        name: groupName,
        form,
        descriptionId: descriptionProps.id,
        errorMessageId: errorMessageProps.id,
        validationBehavior
    });
    return {
        radioGroupProps: (0, _mergeProps.mergeProps)(domProps, {
            // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
            role: 'radiogroup',
            ...keyboardProps,
            'aria-invalid': state.isInvalid || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-readonly': isReadOnly || undefined,
            'aria-required': isRequired || undefined,
            'aria-disabled': isDisabled || undefined,
            'aria-orientation': orientation,
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

},{"../utils/filterDOMProps":"h4XHF","../utils/shadowdom/DOMFunctions":"8kfpz","../focus/FocusScope":"E8d3D","../utils/domHelpers":"cYkFa","../utils/mergeProps":"jycxS","./utils":"dOqLQ","../label/useField":"5Oeu9","../interactions/useFocusWithin":"bkSQo","../utils/useId":"fQAcb","../interactions/useKeyboard":"aHm7i","../i18n/I18nProvider":"czGuc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j0iBp":[function(require,module,exports,__globalThis) {
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
 * Provides state management for a radio group component. Provides a name for the group,
 * and manages selection and focus state.
 */ parcelHelpers.export(exports, "useRadioGroupState", ()=>useRadioGroupState);
var _useFormValidationState = require("../form/useFormValidationState");
var _useControlledState = require("../utils/useControlledState");
var _react = require("react");
let instance = Math.round(Math.random() * 10000000000);
let i = 0;
function useRadioGroupState(props) {
    // Preserved here for backward compatibility. React Aria now generates the name instead of stately.
    let name = (0, _react.useMemo)(()=>props.name || `radio-group-${instance}-${++i}`, [
        props.name
    ]);
    let [selectedValue, setSelected] = (0, _useControlledState.useControlledState)(props.value, props.defaultValue ?? null, props.onChange);
    let [initialValue] = (0, _react.useState)(selectedValue);
    let [lastFocusedValue, setLastFocusedValue] = (0, _react.useState)(null);
    let validation = (0, _useFormValidationState.useFormValidationState)({
        ...props,
        value: selectedValue
    });
    let setSelectedValue = (value)=>{
        if (!props.isReadOnly && !props.isDisabled) {
            setSelected(value);
            validation.commitValidation();
        }
    };
    let isInvalid = validation.displayValidation.isInvalid;
    return {
        ...validation,
        name,
        selectedValue: selectedValue,
        defaultSelectedValue: props.value !== undefined ? initialValue : props.defaultValue ?? null,
        setSelectedValue,
        lastFocusedValue,
        setLastFocusedValue,
        isDisabled: props.isDisabled || false,
        isReadOnly: props.isReadOnly || false,
        isRequired: props.isRequired || false,
        validationState: props.validationState || (isInvalid ? 'invalid' : null),
        isInvalid
    };
}

},{"../form/useFormValidationState":"491YW","../utils/useControlledState":"8yNBD","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9g4G2":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5dXIN":[function(require,module,exports,__globalThis) {
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

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"avf8K":[function(require,module,exports,__globalThis) {
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

},{"../utils/filterDOMProps":"h4XHF","../utils/shadowdom/DOMFunctions":"8kfpz","react-stately/private/collections/getItemCount":"eLVRI","../utils/openLink":"gH3wl","../interactions/useFocusVisible":"aBfUW","./utils":"e7rvB","../utils/mergeProps":"jycxS","react":"gOP0N","../interactions/useFocusable":"6IFKj","../interactions/useHover":"2yLrj","../interactions/useKeyboard":"aHm7i","../interactions/usePress":"3S2KR","../selection/useSelectableItem":"3SFOH","../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"b7u5T":[function(require,module,exports,__globalThis) {
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

},{"../utils/focusWithoutScrolling":"gcZ3w","../utils/domHelpers":"cYkFa","../utils/mergeProps":"jycxS","../utils/useDescription":"1bivM","../utils/useGlobalListeners":"jsdt1","./usePress":"3S2KR","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9nE7l":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","../utils/platform":"eBqgD","../utils/mergeProps":"jycxS","./useLongPress":"b7u5T","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dnU5A":[function(require,module,exports,__globalThis) {
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

},{"../utils/domHelpers":"cYkFa","../utils/shadowdom/DOMFunctions":"8kfpz","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6hJKZ":[function(require,module,exports,__globalThis) {
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

},{"../overlays/useOverlayTriggerState":"457a8","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8ei0d":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a dialog component.
 * A dialog is an overlay shown above other content in an application.
 */ parcelHelpers.export(exports, "useDialog", ()=>useDialog);
var _filterDOMProps = require("../utils/filterDOMProps");
var _focusSafely = require("../interactions/focusSafely");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _react = require("react");
var _overlay = require("../overlays/Overlay");
var _useId = require("../utils/useId");
function useDialog(props, ref) {
    let { role = 'dialog' } = props;
    let titleId = (0, _useId.useSlotId)();
    titleId = props['aria-label'] ? undefined : titleId;
    let contentId = (0, _useId.useSlotId)();
    contentId = role === 'alertdialog' && !props['aria-describedby'] ? contentId : undefined;
    let isRefocusing = (0, _react.useRef)(false);
    // Focus the dialog itself on mount, unless a child element is already focused.
    (0, _react.useEffect)(()=>{
        if (ref.current && !(0, _domfunctions.isFocusWithin)(ref.current)) {
            (0, _focusSafely.focusSafely)(ref.current);
            // Safari on iOS does not move the VoiceOver cursor to the dialog
            // or announce that it has opened until it has rendered. A workaround
            // is to wait for half a second, then blur and re-focus the dialog.
            let timeout = setTimeout(()=>{
                // Check that the dialog is still focused, or focused was lost to the body.
                if ((0, _domfunctions.getActiveElement)() === ref.current || (0, _domfunctions.getActiveElement)() === document.body) {
                    isRefocusing.current = true;
                    if (ref.current) {
                        ref.current.blur();
                        (0, _focusSafely.focusSafely)(ref.current);
                    }
                    isRefocusing.current = false;
                }
            }, 500);
            return ()=>{
                clearTimeout(timeout);
            };
        }
    }, [
        ref
    ]);
    (0, _overlay.useOverlayFocusContain)();
    // Warn in dev mode if the dialog has no accessible title.
    // This catches a common mistake where useDialog and useOverlayTriggerState
    // are used in the same component, causing the title element to not be
    // in the DOM when useSlotId queries for it.
    // Check the DOM element directly since aria-labelledby may be added by
    // wrapper components (e.g. RAC Dialog uses trigger ID as a fallback).
    let hasWarned = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{});
    let ariaDescribedby = props['aria-describedby'] ?? contentId;
    // We do not use aria-modal due to a Safari bug which forces the first focusable element to be focused
    // on mount when inside an iframe, no matter which element we programmatically focus.
    // See https://bugs.webkit.org/show_bug.cgi?id=211934.
    // useModal sets aria-hidden on all elements outside the dialog, so the dialog will behave as a modal
    // even without aria-modal on the dialog itself.
    return {
        dialogProps: {
            ...(0, _filterDOMProps.filterDOMProps)(props, {
                labelable: true
            }),
            role,
            tabIndex: -1,
            'aria-labelledby': props['aria-labelledby'] ?? titleId,
            'aria-describedby': ariaDescribedby,
            // Prevent blur events from reaching useOverlay, which may cause
            // popovers to close. Since focus is contained within the dialog,
            // we don't want this to occur due to the above useEffect.
            onBlur: (e)=>{
                if (isRefocusing.current) e.stopPropagation();
            }
        },
        titleProps: {
            id: titleId
        },
        contentProps: {
            id: contentId
        }
    };
}

},{"../utils/filterDOMProps":"h4XHF","../interactions/focusSafely":"2xT6S","../utils/shadowdom/DOMFunctions":"8kfpz","react":"gOP0N","../overlays/Overlay":"dm7Ko","../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kErbq":[function(require,module,exports,__globalThis) {
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

},{"./ariaHideOutside":"bOGar","./useOverlayPosition":"lXsTF","../interactions/useFocusWithin":"bkSQo","../utils/mergeProps":"jycxS","react":"gOP0N","./useOverlay":"1LtRR","./usePreventScroll":"9SGDE","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7uQK8":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "OverlayArrowContext", ()=>OverlayArrowContext);
parcelHelpers.export(exports, "OverlayArrow", ()=>OverlayArrow);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const OverlayArrowContext = /*#__PURE__*/ (0, _react.createContext)({
    placement: 'bottom'
});
const OverlayArrow = /*#__PURE__*/ (0, _react.forwardRef)(function OverlayArrow(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, OverlayArrowContext);
    let placement = props.placement;
    let style = {
        position: 'absolute',
        transform: placement === 'top' || placement === 'bottom' ? 'translateX(-50%)' : 'translateY(-50%)'
    };
    if (placement != null) style[placement] = '100%';
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-OverlayArrow',
        values: {
            placement
        }
    });
    // remove undefined values from renderProps.style object so that it can be
    // spread merged with the other style object
    if (renderProps.style) Object.keys(renderProps.style).forEach((key)=>renderProps.style[key] === undefined && delete renderProps.style[key]);
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...DOMProps,
        ...renderProps,
        style: {
            ...style,
            ...renderProps.style
        },
        ref: ref,
        "data-placement": placement
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/filterDOMProps":"h4XHF","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7ofl1":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","./useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

