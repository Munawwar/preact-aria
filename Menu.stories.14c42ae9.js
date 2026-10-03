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
})({"7HtYj":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "KeyboardContext", ()=>KeyboardContext);
parcelHelpers.export(exports, "Keyboard", ()=>Keyboard);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const KeyboardContext = /*#__PURE__*/ (0, _react.createContext)({});
const Keyboard = /*#__PURE__*/ (0, _react.forwardRef)(function Keyboard(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, KeyboardContext);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).kbd, {
        dir: "ltr",
        ...props,
        ref: ref
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"70BZW":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "MenuContext", ()=>MenuContext);
parcelHelpers.export(exports, "MenuStateContext", ()=>MenuStateContext);
parcelHelpers.export(exports, "RootMenuTriggerStateContext", ()=>RootMenuTriggerStateContext);
parcelHelpers.export(exports, "MenuTrigger", ()=>MenuTrigger);
parcelHelpers.export(exports, "SubmenuTrigger", ()=>SubmenuTrigger);
parcelHelpers.export(exports, "Menu", ()=>Menu);
parcelHelpers.export(exports, "MenuSection", ()=>MenuSection);
parcelHelpers.export(exports, "MenuItem", ()=>MenuItem);
parcelHelpers.export(exports, "MenuLoadMoreItem", ()=>MenuLoadMoreItem);
var _jsxRuntime = require("preact/jsx-runtime");
var _useMenu = require("react-aria/useMenu");
var _baseCollection = require("react-aria/private/collections/BaseCollection");
var _useMenuTriggerState = require("react-stately/useMenuTriggerState");
var _utils = require("./utils");
var _collection = require("react-aria/Collection");
var _collectionBuilder = require("react-aria/CollectionBuilder");
var _collection1 = require("./Collection");
var _autocomplete = require("./Autocomplete");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _focusScope = require("react-aria/FocusScope");
var _header = require("./Header");
var _inertValue = require("react-aria/private/utils/inertValue");
var _keyboard = require("./Keyboard");
var _useLoadMoreSentinel = require("react-aria/private/utils/useLoadMoreSentinel");
var _mergeProps = require("react-aria/mergeProps");
var _dialog = require("./Dialog");
var _popover = require("./Popover");
var _pressResponder = require("react-aria/private/interactions/PressResponder");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _selectionIndicator = require("./SelectionIndicator");
var _selectionManager = require("react-stately/private/selection/SelectionManager");
var _separator = require("./Separator");
var _sharedElementTransition = require("./SharedElementTransition");
var _text = require("./Text");
var _useTreeState = require("react-stately/useTreeState");
var _useHover = require("react-aria/useHover");
var _hidden = require("react-aria/private/collections/Hidden");
var _useMultipleSelectionState = require("react-stately/useMultipleSelectionState");
var _useObjectRef = require("react-aria/useObjectRef");
const MenuContext = /*#__PURE__*/ (0, _react.createContext)(null);
const MenuStateContext = /*#__PURE__*/ (0, _react.createContext)(null);
const RootMenuTriggerStateContext = /*#__PURE__*/ (0, _react.createContext)(null);
const SelectionManagerContext = /*#__PURE__*/ (0, _react.createContext)(null);
function MenuTrigger(props) {
    let state = (0, _useMenuTriggerState.useMenuTriggerState)(props);
    let ref = (0, _react.useRef)(null);
    let { menuTriggerProps, menuProps } = (0, _useMenu.useMenuTrigger)({
        ...props,
        type: 'menu'
    }, state, ref);
    let scrollRef = (0, _react.useRef)(null);
    // If within a collection (e.g. Tabs), render nothing.
    // Not using createHideableComponent for this because that also creates a forwardRef.
    let isHidden = (0, _hidden.useIsHidden)();
    if (isHidden) return null;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
        values: [
            [
                MenuContext,
                {
                    ...menuProps,
                    ref: scrollRef
                }
            ],
            [
                (0, _dialog.OverlayTriggerStateContext),
                state
            ],
            [
                RootMenuTriggerStateContext,
                state
            ],
            [
                (0, _popover.PopoverContext),
                {
                    trigger: 'MenuTrigger',
                    triggerRef: ref,
                    scrollRef,
                    placement: 'bottom start',
                    'aria-labelledby': menuProps['aria-labelledby'],
                    offset: props.trigger === 'contextMenu' ? 0 : undefined
                }
            ]
        ],
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _pressResponder.PressResponder), {
            ...menuTriggerProps,
            ref: ref,
            isPressed: state.isOpen,
            children: props.children
        })
    });
}
const SubmenuTriggerContext = /*#__PURE__*/ (0, _react.createContext)(null);
class SubmenuTriggerNode extends (0, _baseCollection.CollectionNode) {
    static type = 'submenutrigger';
    filter(collection, newCollection, filterFn) {
        let triggerNode = collection.getItem(this.firstChildKey);
        if (triggerNode && filterFn(triggerNode.textValue, this)) {
            let clone = this.clone();
            newCollection.addDescendants(clone, collection);
            return clone;
        }
        return null;
    }
}
const SubmenuTrigger = /*#__PURE__*/ (0, _collectionBuilder.createBranchComponent)(SubmenuTriggerNode, (props, ref, item)=>{
    let { CollectionBranch } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let state = (0, _react.useContext)(MenuStateContext);
    let rootMenuTriggerState = (0, _react.useContext)(RootMenuTriggerStateContext);
    let submenuTriggerState = (0, _useMenuTriggerState.useSubmenuTriggerState)({
        triggerKey: item.key
    }, rootMenuTriggerState);
    let submenuRef = (0, _react.useRef)(null);
    let itemRef = (0, _useObjectRef.useObjectRef)(ref);
    let { parentMenuRef, shouldUseVirtualFocus } = (0, _react.useContext)(SubmenuTriggerContext);
    let { submenuTriggerProps, submenuProps, popoverProps } = (0, _useMenu.useSubmenuTrigger)({
        parentMenuRef,
        submenuRef,
        delay: props.delay,
        shouldUseVirtualFocus
    }, submenuTriggerState, itemRef);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _utils.Provider), {
        values: [
            [
                MenuItemContext,
                {
                    ...submenuTriggerProps,
                    onAction: undefined,
                    ref: itemRef
                }
            ],
            [
                MenuContext,
                {
                    ref: submenuRef,
                    ...submenuProps
                }
            ],
            [
                (0, _dialog.OverlayTriggerStateContext),
                submenuTriggerState
            ],
            [
                (0, _popover.PopoverContext),
                {
                    trigger: 'SubmenuTrigger',
                    triggerRef: itemRef,
                    placement: 'end top',
                    'aria-labelledby': submenuProps['aria-labelledby'],
                    ...popoverProps
                }
            ]
        ],
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionBranch, {
                collection: state.collection,
                parent: item
            }),
            props.children[1]
        ]
    });
}, (props)=>props.children[0]);
const Menu = /*#__PURE__*/ (0, _react.forwardRef)(function Menu(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, MenuContext);
    // Delay rendering the actual menu until we have the collection so that auto focus works properly.
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collectionBuilder.CollectionBuilder), {
        content: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collection.Collection), {
            ...props
        }),
        children: (collection)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(MenuInner, {
                props: props,
                collection: collection,
                menuRef: ref
            })
    });
});
function MenuInner({ props, collection, menuRef: ref }) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, (0, _autocomplete.SelectableCollectionContext));
    let { filter, ...autocompleteMenuProps } = props;
    let filteredCollection = (0, _react.useMemo)(()=>filter ? collection.filter(filter) : collection, [
        collection,
        filter
    ]);
    let state = (0, _useTreeState.useTreeState)({
        ...props,
        collection: filteredCollection,
        children: undefined
    });
    let triggerState = (0, _react.useContext)(RootMenuTriggerStateContext);
    let { isVirtualized, CollectionRoot } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let { menuProps } = (0, _useMenu.useMenu)({
        ...props,
        isVirtualized,
        onClose: props.onClose || triggerState?.close
    }, state, ref);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        children: undefined,
        defaultClassName: 'react-aria-Menu',
        values: {
            isEmpty: state.collection.size === 0
        }
    });
    let emptyState = null;
    if (state.collection.size === 0 && props.renderEmptyState) emptyState = /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        role: "menuitem",
        style: {
            display: 'contents'
        },
        children: props.renderEmptyState()
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _focusScope.FocusScope), {
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _utils.dom).div, {
            ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, menuProps),
            ref: ref,
            slot: props.slot || undefined,
            "data-empty": state.collection.size === 0 || undefined,
            onScroll: props.onScroll,
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
                    values: [
                        [
                            MenuStateContext,
                            state
                        ],
                        [
                            (0, _separator.SeparatorContext),
                            {
                                elementType: 'div'
                            }
                        ],
                        [
                            (0, _collection1.SectionContext),
                            {
                                name: 'MenuSection',
                                render: MenuSectionInner
                            }
                        ],
                        [
                            SubmenuTriggerContext,
                            {
                                parentMenuRef: ref,
                                shouldUseVirtualFocus: autocompleteMenuProps?.shouldUseVirtualFocus
                            }
                        ],
                        [
                            MenuItemContext,
                            {
                                shouldCloseOnSelect: props.shouldCloseOnSelect
                            }
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
                            SelectionManagerContext,
                            state.selectionManager
                        ],
                        /* Ensure root MenuTriggerState is defined, in case Menu is rendered outside a MenuTrigger. */ /* We assume the context can never change between defined and undefined. */ // oxlint-disable-next-line react/react-compiler, react-hooks/rules-of-hooks
                        [
                            RootMenuTriggerStateContext,
                            triggerState ?? (0, _useMenuTriggerState.useMenuTriggerState)({})
                        ]
                    ],
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _sharedElementTransition.SharedElementTransition), {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionRoot, {
                            collection: state.collection,
                            persistedKeys: (0, _collection1.usePersistedKeys)(state.selectionManager.focusedKey),
                            scrollRef: ref
                        })
                    })
                }),
                emptyState
            ]
        })
    });
}
// A subclass of SelectionManager that forwards focus-related properties to the parent,
// but has its own local selection state.
class GroupSelectionManager extends (0, _selectionManager.SelectionManager) {
    parent;
    constructor(parent, state){
        super(parent.collection, state);
        this.parent = parent;
    }
    get focusedKey() {
        return this.parent.focusedKey;
    }
    get isFocused() {
        return this.parent.isFocused;
    }
    setFocusedKey(key, childFocusStrategy) {
        return this.parent.setFocusedKey(key, childFocusStrategy);
    }
    setFocused(isFocused) {
        this.parent.setFocused(isFocused);
    }
    get childFocusStrategy() {
        return this.parent.childFocusStrategy;
    }
}
function MenuSectionInner(props, ref, section, className = 'react-aria-MenuSection') {
    let state = (0, _react.useContext)(MenuStateContext);
    let { CollectionBranch } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let [headingRef, heading] = (0, _utils.useSlot)();
    let { headingProps, groupProps } = (0, _useMenu.useMenuSection)({
        heading,
        'aria-label': section.props['aria-label'] ?? undefined
    });
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        id: undefined,
        children: undefined,
        defaultClassName: className,
        className: section.props?.className,
        style: section.props?.style,
        values: undefined
    });
    let parent = (0, _react.useContext)(SelectionManagerContext);
    let selectionState = (0, _useMultipleSelectionState.useMultipleSelectionState)(props);
    let manager = props.selectionMode != null ? new GroupSelectionManager(parent, selectionState) : parent;
    let closeOnSelect = (0, _utils.useSlottedContext)(MenuItemContext)?.shouldCloseOnSelect;
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).section, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, groupProps),
        ref: ref,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
            values: [
                [
                    (0, _header.HeaderContext),
                    {
                        ...headingProps,
                        ref: headingRef
                    }
                ],
                [
                    SelectionManagerContext,
                    manager
                ],
                [
                    MenuItemContext,
                    {
                        shouldCloseOnSelect: props.shouldCloseOnSelect ?? closeOnSelect
                    }
                ]
            ],
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionBranch, {
                collection: state.collection,
                parent: section
            })
        })
    });
}
const MenuSection = /*#__PURE__*/ (0, _collectionBuilder.createBranchComponent)((0, _baseCollection.SectionNode), MenuSectionInner);
const MenuItemContext = /*#__PURE__*/ (0, _react.createContext)(null);
const MenuItem = /*#__PURE__*/ (0, _collectionBuilder.createLeafComponent)((0, _baseCollection.ItemNode), function MenuItem(props, forwardedRef, item) {
    [props, forwardedRef] = (0, _utils.useContextProps)(props, forwardedRef, MenuItemContext);
    let id = (0, _utils.useSlottedContext)(MenuItemContext)?.id;
    let state = (0, _react.useContext)(MenuStateContext);
    let ref = (0, _useObjectRef.useObjectRef)(forwardedRef);
    let selectionManager = (0, _react.useContext)(SelectionManagerContext);
    let { isVirtualized } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let { menuItemProps, labelProps, descriptionProps, keyboardShortcutProps, ...states } = (0, _useMenu.useMenuItem)({
        ...props,
        id,
        key: item.key,
        selectionManager,
        isVirtualized: isVirtualized
    }, state, ref);
    let { hoverProps, isHovered } = (0, _useHover.useHover)({
        isDisabled: states.isDisabled
    });
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-MenuItem',
        values: {
            ...states,
            isHovered,
            isFocusVisible: states.isFocusVisible,
            selectionMode: selectionManager.selectionMode,
            selectionBehavior: selectionManager.selectionBehavior,
            hasSubmenu: !!props['aria-haspopup'],
            isOpen: props['aria-expanded'] === 'true'
        }
    });
    let ElementType = props.href ? (0, _utils.dom).a : (0, _utils.dom).div;
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ElementType, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, menuItemProps, hoverProps),
        ref: ref,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": states.isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-selected": states.isSelected || undefined,
        "data-selection-mode": selectionManager.selectionMode === 'none' ? undefined : selectionManager.selectionMode,
        "data-has-submenu": !!props['aria-haspopup'] || undefined,
        "data-open": props['aria-expanded'] === 'true' || undefined,
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
                    (0, _keyboard.KeyboardContext),
                    keyboardShortcutProps
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
const MenuLoadMoreItem = (0, _collectionBuilder.createLeafComponent)((0, _baseCollection.LoaderNode), function MenuLoadingIndicator(props, ref, item) {
    let state = (0, _react.useContext)(MenuStateContext);
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
        defaultClassName: 'react-aria-MenuLoadingIndicator',
        values: undefined
    });
    let itemProps = {
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
                    }), itemProps),
                    ...renderProps,
                    role: "menuitem",
                    ref: ref,
                    children: renderProps.children
                })
            })
        ]
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/useMenu":[["useMenu","9g4G2"],["useMenuItem","6FWTA"],["useMenuSection","9nE7l"],["useMenuTrigger","9b4y8"],["useSubmenuTrigger","bstvl"]],"react-aria/private/collections/BaseCollection":"imRDY","react-stately/useMenuTriggerState":[["useMenuTriggerState","6hJKZ"],["useSubmenuTriggerState","k0iLI"]],"./utils":"jtWJJ","react-aria/Collection":"kFD1B","react-aria/CollectionBuilder":"kFD1B","./Collection":"4TSYQ","./Autocomplete":"dHgny","react-aria/filterDOMProps":"h4XHF","react-aria/FocusScope":"E8d3D","./Header":"f1ESp","react-aria/private/utils/inertValue":"hBYeu","./Keyboard":"7HtYj","react-aria/private/utils/useLoadMoreSentinel":"1ahiI","react-aria/mergeProps":"jycxS","./Dialog":"aPHDk","./Popover":"i9eo9","react-aria/private/interactions/PressResponder":"e49up","react":"gOP0N","./SelectionIndicator":"4EL3s","react-stately/private/selection/SelectionManager":"4luyT","./Separator":"cuuaI","./SharedElementTransition":"2Pl2F","./Text":"cfMV9","react-stately/useTreeState":"7ofl1","react-aria/useHover":"2yLrj","react-aria/private/collections/Hidden":"iPJX7","react-stately/useMultipleSelectionState":"c53PS","react-aria/useObjectRef":"ec0NJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bstvl":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a submenu trigger and its associated
 * submenu.
 *
 * @param props - Props for the submenu trigger and refs attach to its submenu and parent menu.
 * @param state - State for the submenu trigger.
 * @param ref - Ref to the submenu trigger element.
 */ parcelHelpers.export(exports, "useSubmenuTrigger", ()=>useSubmenuTrigger);
var _focusWithoutScrolling = require("../utils/focusWithoutScrolling");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _react = require("react");
var _useEvent = require("../utils/useEvent");
var _useId = require("../utils/useId");
var _useKeyboard = require("../interactions/useKeyboard");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _i18Nprovider = require("../i18n/I18nProvider");
var _useSafelyMouseToSubmenu = require("./useSafelyMouseToSubmenu");
function useSubmenuTrigger(props, state, ref) {
    let { parentMenuRef, submenuRef, type = 'menu', isDisabled, delay = 200, shouldUseVirtualFocus } = props;
    let submenuTriggerId = (0, _useId.useId)();
    let overlayId = (0, _useId.useId)();
    let { direction } = (0, _i18Nprovider.useLocale)();
    let openTimeout = (0, _react.useRef)(undefined);
    let cancelOpenTimeout = (0, _react.useCallback)(()=>{
        if (openTimeout.current) {
            clearTimeout(openTimeout.current);
            openTimeout.current = undefined;
        }
    }, [
        openTimeout
    ]);
    let onSubmenuOpen = (0, _react.useCallback)((focusStrategy)=>{
        cancelOpenTimeout();
        state.open(focusStrategy);
    }, [
        state,
        cancelOpenTimeout
    ]);
    let onSubmenuClose = (0, _react.useCallback)(()=>{
        cancelOpenTimeout();
        state.close();
    }, [
        state,
        cancelOpenTimeout
    ]);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        return ()=>{
            cancelOpenTimeout();
        };
    }, [
        cancelOpenTimeout
    ]);
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            ArrowLeft: (e)=>{
                // If focus is not within the menu, assume virtual focus is being used.
                // This means some other input element is also within the popover, so we shouldn't close the menu.
                if (!(0, _domfunctions.isFocusWithin)(e.currentTarget)) return false;
                if (direction === 'ltr' && (0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) {
                    onSubmenuClose();
                    if (!shouldUseVirtualFocus && ref.current) (0, _focusWithoutScrolling.focusWithoutScrolling)(ref.current);
                    return;
                }
                return false;
            },
            ArrowRight: (e)=>{
                if (!(0, _domfunctions.isFocusWithin)(e.currentTarget)) return false;
                if (direction === 'rtl' && (0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) {
                    onSubmenuClose();
                    if (!shouldUseVirtualFocus && ref.current) (0, _focusWithoutScrolling.focusWithoutScrolling)(ref.current);
                    return;
                }
                return false;
            },
            Escape: (e)=>{
                if (!(0, _domfunctions.isFocusWithin)(e.currentTarget)) return false;
                if ((0, _domfunctions.nodeContains)(submenuRef.current, (0, _domfunctions.getEventTarget)(e))) {
                    onSubmenuClose();
                    if (!shouldUseVirtualFocus && ref.current) (0, _focusWithoutScrolling.focusWithoutScrolling)(ref.current);
                    return;
                }
                return false;
            }
        }
    });
    let submenuProps = {
        id: overlayId,
        'aria-labelledby': submenuTriggerId,
        submenuLevel: state.submenuLevel,
        ...type === 'menu' && {
            onClose: state.closeAll,
            autoFocus: state.focusStrategy ?? undefined,
            ...keyboardProps
        }
    };
    let { keyboardProps: submenuTriggerKeyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            ArrowRight: ()=>{
                if (!isDisabled) {
                    if (direction === 'ltr') {
                        if (!state.isOpen) onSubmenuOpen('first');
                        if (type === 'menu' && !!submenuRef?.current && (0, _domfunctions.getActiveElement)() === ref?.current) (0, _focusWithoutScrolling.focusWithoutScrolling)(submenuRef.current);
                        return;
                    } else if (state.isOpen) {
                        onSubmenuClose();
                        return;
                    } else return false;
                }
                return false;
            },
            ArrowLeft: ()=>{
                if (!isDisabled) {
                    if (direction === 'rtl') {
                        if (!state.isOpen) onSubmenuOpen('first');
                        if (type === 'menu' && !!submenuRef?.current && (0, _domfunctions.getActiveElement)() === ref?.current) (0, _focusWithoutScrolling.focusWithoutScrolling)(submenuRef.current);
                        return;
                    } else if (state.isOpen) {
                        onSubmenuClose();
                        return;
                    } else return false;
                }
                return false;
            }
        }
    });
    let onPressStart = (e)=>{
        if (!isDisabled && (e.pointerType === 'virtual' || e.pointerType === 'keyboard')) // If opened with a screen reader or keyboard, auto focus the first submenu item.
        onSubmenuOpen('first');
    };
    let onPress = (e)=>{
        if (!isDisabled && (e.pointerType === 'touch' || e.pointerType === 'mouse')) // For touch or on a desktop device with a small screen open on press up to possible problems with
        // press up happening on the newly opened tray items
        onSubmenuOpen();
    };
    let onHoverChange = (isHovered)=>{
        if (!isDisabled) {
            if (isHovered && !state.isOpen) {
                if (!openTimeout.current) openTimeout.current = setTimeout(()=>{
                    onSubmenuOpen();
                }, delay);
            } else if (!isHovered) cancelOpenTimeout();
        }
    };
    (0, _useEvent.useEvent)(parentMenuRef, 'focusin', (e)=>{
        // If we detect focus moved to a different item in the same menu that the currently open submenu trigger is in
        // then close the submenu. This is for a case where the user hovers a root menu item when multiple submenus are open
        if (state.isOpen && (0, _domfunctions.nodeContains)(parentMenuRef.current, (0, _domfunctions.getEventTarget)(e)) && (0, _domfunctions.getEventTarget)(e) !== ref.current) onSubmenuClose();
    });
    let shouldCloseOnInteractOutside = (target)=>{
        if (target !== ref.current) return true;
        return false;
    };
    (0, _useSafelyMouseToSubmenu.useSafelyMouseToSubmenu)({
        menuRef: parentMenuRef,
        submenuRef,
        isOpen: state.isOpen,
        isDisabled: isDisabled
    });
    return {
        submenuTriggerProps: {
            onKeyDown: submenuTriggerKeyboardProps.onKeyDown,
            onKeyUp: submenuTriggerKeyboardProps.onKeyUp,
            id: submenuTriggerId,
            'aria-controls': state.isOpen ? overlayId : undefined,
            'aria-haspopup': !isDisabled ? type : undefined,
            'aria-expanded': state.isOpen ? 'true' : 'false',
            onPressStart,
            onPress,
            onHoverChange,
            isOpen: state.isOpen
        },
        submenuProps,
        popoverProps: {
            isNonModal: true,
            shouldCloseOnInteractOutside
        }
    };
}

},{"../utils/focusWithoutScrolling":"gcZ3w","../utils/shadowdom/DOMFunctions":"8kfpz","react":"gOP0N","../utils/useEvent":"avf8K","../utils/useId":"fQAcb","../interactions/useKeyboard":"aHm7i","../utils/useLayoutEffect":"h7M6K","../i18n/I18nProvider":"czGuc","./useSafelyMouseToSubmenu":"427my","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"427my":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Allows the user to move their pointer to the submenu without it closing when their mouse leaves
 * the trigger element. Prevents pointer events from going to the underlying menu if the user is
 * moving their pointer towards the sub-menu.
 */ parcelHelpers.export(exports, "useSafelyMouseToSubmenu", ()=>useSafelyMouseToSubmenu);
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _react = require("react");
var _useEffectEvent = require("../utils/useEffectEvent");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _useResizeObserver = require("../utils/useResizeObserver");
const ALLOWED_INVALID_MOVEMENTS = 2;
const THROTTLE_TIME = 50;
const TIMEOUT_TIME = 1000;
const ANGLE_PADDING = Math.PI / 12; // 15°
function useSafelyMouseToSubmenu(options) {
    let { menuRef, submenuRef, isOpen, isDisabled } = options;
    let prevPointerPos = (0, _react.useRef)(undefined);
    let submenuRect = (0, _react.useRef)(undefined);
    let lastProcessedTime = (0, _react.useRef)(0);
    let timeout = (0, _react.useRef)(undefined);
    let autoCloseTimeout = (0, _react.useRef)(undefined);
    let submenuSide = (0, _react.useRef)(undefined);
    let movementsTowardsSubmenuCount = (0, _react.useRef)(2);
    let [preventPointerEvents, setPreventPointerEvents] = (0, _react.useState)(false);
    let updateSubmenuRect = ()=>{
        if (submenuRef.current) {
            submenuRect.current = submenuRef.current.getBoundingClientRect();
            submenuSide.current = undefined;
        }
    };
    (0, _useResizeObserver.useResizeObserver)({
        ref: isOpen ? submenuRef : undefined,
        onResize: updateSubmenuRect
    });
    let reset = ()=>{
        setPreventPointerEvents(false);
        movementsTowardsSubmenuCount.current = ALLOWED_INVALID_MOVEMENTS;
        prevPointerPos.current = undefined;
    };
    let modality = (0, _useFocusVisible.useInteractionModality)();
    // Prevent mouse down over safe triangle. Clicking while pointer-events: none is applied
    // will cause focus to move unexpectedly since it will go to an element behind the menu.
    let onPointerDown = (0, _useEffectEvent.useEffectEvent)((e)=>{
        if (preventPointerEvents) e.preventDefault();
    });
    (0, _react.useEffect)(()=>{
        if (preventPointerEvents && menuRef.current) menuRef.current.style.pointerEvents = 'none';
        else menuRef.current.style.pointerEvents = '';
    }, [
        menuRef,
        preventPointerEvents
    ]);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        let submenu = submenuRef.current;
        let menu = menuRef.current;
        if (isDisabled || !submenu || !isOpen || modality !== 'pointer' || !menu) {
            reset();
            return;
        }
        submenuRect.current = submenu.getBoundingClientRect();
        let onPointerMove = (e)=>{
            if (e.pointerType === 'touch' || e.pointerType === 'pen') return;
            let currentTime = Date.now();
            // Throttle
            if (currentTime - lastProcessedTime.current < THROTTLE_TIME) return;
            clearTimeout(timeout.current);
            clearTimeout(autoCloseTimeout.current);
            let { clientX: mouseX, clientY: mouseY } = e;
            if (!prevPointerPos.current) {
                prevPointerPos.current = {
                    x: mouseX,
                    y: mouseY
                };
                return;
            }
            if (!submenuRect.current) return;
            if (!submenuSide.current) submenuSide.current = mouseX > submenuRect.current.right ? 'left' : 'right';
            // Pointer is outside of parent menu
            if (mouseX < menu.getBoundingClientRect().left || mouseX > menu.getBoundingClientRect().right || mouseY < menu.getBoundingClientRect().top || mouseY > menu.getBoundingClientRect().bottom) {
                reset();
                return;
            }
            /* Check if pointer is moving towards submenu.
        Uses the 2-argument arctangent (https://en.wikipedia.org/wiki/Atan2) to calculate:
          - angle between previous pointer and top of submenu
          - angle between previous pointer and bottom of submenu
          - angle between previous pointer and current pointer (delta)
        If the pointer delta angle value is between the top and bottom angle values, we know the pointer is moving towards the submenu.
      */ let prevMouseX = prevPointerPos.current.x;
            let prevMouseY = prevPointerPos.current.y;
            let toSubmenuX = submenuSide.current === 'right' ? submenuRect.current.left - prevMouseX : prevMouseX - submenuRect.current.right;
            let angleTop = Math.atan2(prevMouseY - submenuRect.current.top, toSubmenuX) + ANGLE_PADDING;
            let angleBottom = Math.atan2(prevMouseY - submenuRect.current.bottom, toSubmenuX) - ANGLE_PADDING;
            let anglePointer = Math.atan2(prevMouseY - mouseY, submenuSide.current === 'left' ? -(mouseX - prevMouseX) : mouseX - prevMouseX);
            let isMovingTowardsSubmenu = anglePointer < angleTop && anglePointer > angleBottom;
            movementsTowardsSubmenuCount.current = isMovingTowardsSubmenu ? Math.min(movementsTowardsSubmenuCount.current + 1, ALLOWED_INVALID_MOVEMENTS) : Math.max(movementsTowardsSubmenuCount.current - 1, 0);
            if (movementsTowardsSubmenuCount.current >= ALLOWED_INVALID_MOVEMENTS) setPreventPointerEvents(true);
            else setPreventPointerEvents(false);
            lastProcessedTime.current = currentTime;
            prevPointerPos.current = {
                x: mouseX,
                y: mouseY
            };
            // If the pointer is moving towards the submenu, start a timeout to close if no other movements are made after 500ms.
            if (isMovingTowardsSubmenu) timeout.current = setTimeout(()=>{
                reset();
                autoCloseTimeout.current = setTimeout(()=>{
                    // Fire a pointerover event to trigger the menu to close.
                    // Wait until pointer-events:none is no longer applied
                    let target = document.elementFromPoint(mouseX, mouseY);
                    if (target && (0, _domfunctions.nodeContains)(menu, target)) target.dispatchEvent(new PointerEvent('pointerover', {
                        bubbles: true,
                        cancelable: true
                    }));
                }, 100);
            }, TIMEOUT_TIME);
        };
        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerdown', onPointerDown, true);
        return ()=>{
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerdown', onPointerDown, true);
            clearTimeout(timeout.current);
            clearTimeout(autoCloseTimeout.current);
            movementsTowardsSubmenuCount.current = ALLOWED_INVALID_MOVEMENTS;
        };
    }, [
        isDisabled,
        isOpen,
        menuRef,
        modality,
        setPreventPointerEvents,
        submenuRef
    ]);
}

},{"../utils/shadowdom/DOMFunctions":"8kfpz","react":"gOP0N","../utils/useEffectEvent":"grBNM","../interactions/useFocusVisible":"aBfUW","../utils/useLayoutEffect":"h7M6K","../utils/useResizeObserver":"58iim","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k0iLI":[function(require,module,exports,__globalThis) {
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
 * Manages state for a submenu trigger. Tracks whether the submenu is currently open, the level of
 * the submenu, and controls which item will receive focus when it opens.
 */ parcelHelpers.export(exports, "useSubmenuTriggerState", ()=>useSubmenuTriggerState);
var _react = require("react");
function useSubmenuTriggerState(props, state) {
    let { triggerKey } = props;
    let { expandedKeysStack, openSubmenu, closeSubmenu, close: closeAll } = state;
    let [submenuLevel] = (0, _react.useState)(expandedKeysStack?.length);
    let isOpen = (0, _react.useMemo)(()=>expandedKeysStack[submenuLevel] === triggerKey, [
        expandedKeysStack,
        triggerKey,
        submenuLevel
    ]);
    let [focusStrategy, setFocusStrategy] = (0, _react.useState)(null);
    let open = (0, _react.useCallback)((focusStrategy)=>{
        setFocusStrategy(focusStrategy ?? null);
        openSubmenu(triggerKey, submenuLevel);
    }, [
        openSubmenu,
        submenuLevel,
        triggerKey
    ]);
    let close = (0, _react.useCallback)(()=>{
        setFocusStrategy(null);
        closeSubmenu(triggerKey, submenuLevel);
    }, [
        closeSubmenu,
        submenuLevel,
        triggerKey
    ]);
    let toggle = (0, _react.useCallback)((focusStrategy)=>{
        setFocusStrategy(focusStrategy ?? null);
        if (isOpen) close();
        else open(focusStrategy);
    }, [
        close,
        open,
        isOpen
    ]);
    return (0, _react.useMemo)(()=>({
            focusStrategy,
            isOpen,
            open,
            close,
            closeAll,
            submenuLevel,
            // TODO: Placeholders that aren't used but give us parity with OverlayTriggerState so we can use this in Popover. Refactor if we update Popover via
            // https://github.com/adobe/react-spectrum/pull/4976#discussion_r1336472863
            setOpen: ()=>{},
            toggle,
            point: null,
            setPoint: ()=>{}
        }), [
        isOpen,
        open,
        close,
        closeAll,
        focusStrategy,
        toggle,
        submenuLevel
    ]);
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aPHDk":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "DialogContext", ()=>DialogContext);
parcelHelpers.export(exports, "OverlayTriggerStateContext", ()=>OverlayTriggerStateContext);
/**
 * A DialogTrigger opens a dialog when a trigger element is pressed.
 */ parcelHelpers.export(exports, "DialogTrigger", ()=>DialogTrigger);
parcelHelpers.export(exports, "Dialog", ()=>Dialog);
var _jsxRuntime = require("preact/jsx-runtime");
var _useDialog = require("react-aria/useDialog");
var _button = require("./Button");
var _utils = require("./utils");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _heading = require("./Heading");
var _mergeProps = require("react-aria/mergeProps");
var _popover = require("./Popover");
var _pressResponder = require("react-aria/private/interactions/PressResponder");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _menu = require("./Menu");
var _text = require("./Text");
var _useId = require("react-aria/useId");
var _hidden = require("react-aria/private/collections/Hidden");
var _useMenuTriggerState = require("react-stately/useMenuTriggerState");
var _useOverlayTrigger = require("react-aria/useOverlayTrigger");
const DialogContext = /*#__PURE__*/ (0, _react.createContext)(null);
const OverlayTriggerStateContext = /*#__PURE__*/ (0, _react.createContext)(null);
function DialogTrigger(props) {
    // Use useMenuTriggerState instead of useOverlayTriggerState in case a menu is embedded in the dialog.
    // This is needed to handle submenus.
    let state = (0, _useMenuTriggerState.useMenuTriggerState)(props);
    let buttonRef = (0, _react.useRef)(null);
    let { triggerProps, overlayProps } = (0, _useOverlayTrigger.useOverlayTrigger)({
        type: 'dialog'
    }, state, buttonRef);
    // Label dialog by the trigger as a fallback if there is no title slot.
    // This is done in RAC instead of hooks because otherwise we cannot distinguish
    // between context and props. Normally aria-labelledby overrides the title
    // but when sent by context we want the title to win.
    // oxlint-disable-next-line react/react-compiler
    triggerProps.id = (0, _useId.useId)();
    // oxlint-disable-next-line react/react-compiler
    overlayProps['aria-labelledby'] = triggerProps.id;
    // If within a collection (e.g. Tabs), render nothing.
    // Not using createHideableComponent for this because that also creates a forwardRef.
    let isHidden = (0, _hidden.useIsHidden)();
    if (isHidden) return null;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
        values: [
            [
                OverlayTriggerStateContext,
                state
            ],
            [
                (0, _menu.RootMenuTriggerStateContext),
                state
            ],
            [
                DialogContext,
                overlayProps
            ],
            [
                (0, _popover.PopoverContext),
                {
                    trigger: 'DialogTrigger',
                    triggerRef: buttonRef,
                    id: overlayProps.id,
                    'aria-labelledby': overlayProps['aria-labelledby']
                }
            ]
        ],
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _pressResponder.PressResponder), {
            ...triggerProps,
            ref: buttonRef,
            isPressed: state.isOpen,
            children: props.children
        })
    });
}
const Dialog = /*#__PURE__*/ (0, _react.forwardRef)(function Dialog(props, ref) {
    let originalAriaLabelledby = props['aria-labelledby'];
    [props, ref] = (0, _utils.useContextProps)(props, ref, DialogContext);
    let { dialogProps, titleProps, contentProps } = (0, _useDialog.useDialog)({
        ...props,
        // Only pass aria-labelledby from props, not context.
        // Context is used as a fallback below.
        'aria-labelledby': originalAriaLabelledby
    }, ref);
    let state = (0, _react.useContext)(OverlayTriggerStateContext);
    if (!dialogProps['aria-label'] && !dialogProps['aria-labelledby']) // If aria-labelledby exists on props, we know it came from context.
    // Use that as a fallback in case there is no title slot.
    {
        if (props['aria-labelledby']) dialogProps['aria-labelledby'] = props['aria-labelledby'];
    }
    let renderProps = (0, _utils.useRenderProps)({
        defaultClassName: 'react-aria-Dialog',
        className: props.className,
        style: props.style,
        children: props.children,
        values: {
            close: state?.close || (()=>{})
        }
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).section, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, dialogProps),
        render: props.render,
        ref: ref,
        slot: props.slot || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
            values: [
                [
                    (0, _heading.HeadingContext),
                    {
                        slots: {
                            [(0, _utils.DEFAULT_SLOT)]: {},
                            title: {
                                ...titleProps,
                                level: 2
                            }
                        }
                    }
                ],
                [
                    (0, _text.TextContext),
                    {
                        slots: {
                            [(0, _utils.DEFAULT_SLOT)]: {},
                            description: contentProps
                        }
                    }
                ],
                [
                    (0, _button.ButtonContext),
                    {
                        slots: {
                            [(0, _utils.DEFAULT_SLOT)]: {},
                            close: {
                                onPress: ()=>state?.close()
                            }
                        }
                    }
                ]
            ],
            children: renderProps.children
        })
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/useDialog":"8ei0d","./Button":"enBVm","./utils":"jtWJJ","react-aria/filterDOMProps":"h4XHF","./Heading":"jB98p","react-aria/mergeProps":"jycxS","./Popover":"i9eo9","react-aria/private/interactions/PressResponder":"e49up","react":"gOP0N","./Menu":"70BZW","./Text":"cfMV9","react-aria/useId":"fQAcb","react-aria/private/collections/Hidden":"iPJX7","react-stately/useMenuTriggerState":"6hJKZ","react-aria/useOverlayTrigger":"dnU5A","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"i9eo9":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "PopoverContext", ()=>PopoverContext);
parcelHelpers.export(exports, "Popover", ()=>Popover);
var _jsxRuntime = require("preact/jsx-runtime");
var _usePopover = require("react-aria/usePopover");
var _utils = require("./utils");
var _overlay = require("react-aria/Overlay");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _focusSafely = require("react-aria/private/interactions/focusSafely");
var _useFocusVisible = require("react-aria/private/interactions/useFocusVisible");
var _domfunctions = require("react-aria/private/utils/shadowdom/DOMFunctions");
var _mergeProps = require("react-aria/mergeProps");
var _overlayArrow = require("./OverlayArrow");
var _useOverlayTriggerState = require("react-stately/useOverlayTriggerState");
var _dialog = require("./Dialog");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _runAfterKeyboard = require("react-aria/private/utils/runAfterKeyboard");
var _animation = require("react-aria/private/utils/animation");
var _hidden = require("react-aria/private/collections/Hidden");
var _useLayoutEffect = require("react-aria/private/utils/useLayoutEffect");
var _i18Nprovider = require("react-aria/I18nProvider");
var _useResizeObserver = require("react-aria/private/utils/useResizeObserver");
const PopoverContext = /*#__PURE__*/ (0, _react.createContext)(null);
// Stores a ref for the portal container for a group of popovers (e.g. submenus).
const PopoverGroupContext = /*#__PURE__*/ (0, _react.createContext)(null);
const Popover = /*#__PURE__*/ (0, _react.forwardRef)(function Popover(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, PopoverContext);
    let contextState = (0, _react.useContext)((0, _dialog.OverlayTriggerStateContext));
    let localState = (0, _useOverlayTriggerState.useOverlayTriggerState)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    // Skip the automatic exit animation when closing instantly (e.g. swapping between previews
    // during warmup). An explicitly provided isExiting prop still takes precedence.
    let exitAnimation = (0, _animation.useExitAnimation)(ref, state.isOpen);
    let isExiting = props.isExiting || !props.shouldSkipAnimation && exitAnimation || false;
    let isHidden = (0, _hidden.useIsHidden)();
    let { direction } = (0, _i18Nprovider.useLocale)();
    // If we are in a hidden tree, we still need to preserve our children.
    if (isHidden) {
        let children = props.children;
        if (typeof children === 'function') children = children({
            trigger: props.trigger || null,
            placement: 'bottom',
            isEntering: false,
            isExiting: false,
            defaultChildren: null
        });
        return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {
            children: children
        });
    }
    if (state && !state.isOpen && !isExiting) return null;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(PopoverInner, {
        ...props,
        triggerRef: props.triggerRef,
        state: state,
        popoverRef: ref,
        isExiting: isExiting,
        dir: direction
    });
});
function PopoverInner({ state, isExiting, UNSTABLE_portalContainer, clearContexts, ...props }) {
    // Calculate the arrow size internally (and remove props.arrowSize from PopoverProps)
    // Referenced from: packages/@react-spectrum/tooltip/src/TooltipTrigger.tsx
    let arrowRef = (0, _react.useRef)(null);
    let containerRef = (0, _react.useRef)(null);
    let groupCtx = (0, _react.useContext)(PopoverGroupContext);
    let isSubPopover = groupCtx && props.trigger === 'SubmenuTrigger';
    let [isOpen, setIsOpen] = (0, _react.useState)(false);
    let { popoverProps, underlayProps, arrowProps, placement, triggerAnchorPoint } = (0, _usePopover.usePopover)({
        ...props,
        offset: props.offset ?? 8,
        arrowRef,
        // If this is a submenu/subdialog, use the root popover's container
        // to detect outside interaction and add aria-hidden.
        groupRef: isSubPopover ? groupCtx : containerRef
    }, state);
    let ref = props.popoverRef;
    // Skip the automatic entry animation when opening instantly (e.g. swapping between previews
    // during warmup). An explicitly provided isEntering prop still takes precedence.
    let enterAnimation = (0, _animation.useEnterAnimation)(ref, !!placement && isOpen);
    // oxlint-disable-next-line react/react-compiler
    let isEntering = props.isEntering || !props.shouldSkipAnimation && enterAnimation || false;
    // oxlint-disable-next-line react/react-compiler
    let renderProps = (0, _utils.useRenderProps)({
        // oxlint-disable-next-line react/react-compiler
        ...props,
        defaultClassName: 'react-aria-Popover',
        // oxlint-disable-next-line react/react-compiler
        values: {
            // oxlint-disable-next-line react/react-compiler
            trigger: props.trigger || null,
            placement,
            // oxlint-disable-next-line react/react-compiler
            isEntering,
            isExiting
        }
    });
    // Automatically render Popover with role=dialog except when isNonModal is true,
    // or a dialog is already nested inside the popover.
    let shouldBeDialog = // oxlint-disable-next-line react/react-compiler
    !props.isNonModal || props.trigger === 'SubmenuTrigger' || props.trigger === 'PreviewTrigger';
    // oxlint-disable-next-line react/react-compiler
    let [isDialog, setDialog] = (0, _react.useState)(props.trigger === 'PreviewTrigger');
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (ref.current) setDialog(shouldBeDialog && !ref.current.querySelector('[role=dialog]'));
    }, [
        ref,
        shouldBeDialog
    ]);
    // Focus the popover itself on mount, unless a child element is already focused.
    // Skip this for submenus since hovering a submenutrigger should keep focus on the trigger
    // oxlint-disable react/react-compiler
    (0, _react.useEffect)(()=>{
        if (isDialog && props.trigger !== 'PreviewTrigger' && (props.trigger !== 'SubmenuTrigger' || (0, _useFocusVisible.getInteractionModality)() !== 'pointer') && ref.current && !(0, _domfunctions.isFocusWithin)(ref.current)) (0, _focusSafely.focusSafely)(ref.current);
    }, [
        isDialog,
        ref,
        props.trigger
    ]);
    // oxlint-enable react/react-compiler
    let children = (0, _react.useMemo)(()=>{
        let children = renderProps.children;
        if (clearContexts) for (let Context of clearContexts)children = /*#__PURE__*/ (0, _jsxRuntime.jsx)(Context.Provider, {
            value: null,
            children: children
        });
        return children;
    }, [
        renderProps.children,
        clearContexts
    ]);
    let [triggerWidth, setTriggerWidth] = (0, _react.useState)(null);
    // oxlint-disable-next-line react/react-compiler
    let onResize = (0, _react.useCallback)(()=>{
        if (props.triggerRef.current) setTriggerWidth(props.triggerRef.current.getBoundingClientRect().width + 'px');
    }, [
        props.triggerRef
    ]);
    (0, _useLayoutEffect.useLayoutEffect)(onResize, [
        onResize
    ]);
    // oxlint-disable-next-line react/react-compiler
    (0, _useResizeObserver.useResizeObserver)({
        // oxlint-disable-next-line react/react-compiler
        ref: renderProps.style?.['--trigger-width'] ? undefined : props.triggerRef,
        onResize: onResize
    });
    let style = {
        ...popoverProps.style,
        '--trigger-anchor-point': triggerAnchorPoint ? `${triggerAnchorPoint.x}px ${triggerAnchorPoint.y}px` : undefined,
        ...renderProps.style,
        '--trigger-width': renderProps.style?.['--trigger-width'] || triggerWidth
    };
    // Since our trigger may open the OSK, we defer the reveal, as a courtesy, to avoid layout shift.
    (0, _useLayoutEffect.useLayoutEffect)(()=>(0, _runAfterKeyboard.runAfterKeyboard)(()=>setIsOpen(true)), []);
    // oxlint-disable react/react-compiler
    let overlay = /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _utils.dom).div, {
        ...(0, _mergeProps.mergeProps)((0, _filterDOMProps.filterDOMProps)(props, {
            global: true
        }), popoverProps),
        ...renderProps,
        id: isDialog ? props.id : undefined,
        role: isDialog ? 'dialog' : undefined,
        tabIndex: isDialog ? -1 : undefined,
        "aria-label": props['aria-label'],
        "aria-labelledby": props['aria-labelledby'],
        ref: ref,
        slot: props.slot || undefined,
        style: style,
        dir: props.dir,
        "data-trigger": props.trigger,
        "data-placement": placement,
        "data-entering": isEntering || undefined,
        "data-exiting": isExiting || undefined,
        children: [
            !props.isNonModal && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _overlay.DismissButton), {
                onDismiss: state.close
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _overlayArrow.OverlayArrowContext).Provider, {
                value: {
                    ...arrowProps,
                    placement,
                    ref: arrowRef
                },
                children: children
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _overlay.DismissButton), {
                onDismiss: state.close
            })
        ]
    });
    // oxlint-enable react/react-compiler
    // If this is a root popover, render an extra div to act as the portal container for submenus/subdialogs.
    if (!isSubPopover) // oxlint-disable react/react-compiler
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _overlay.Overlay), {
        ...props,
        shouldContainFocus: isDialog && props.trigger !== 'PreviewTrigger',
        isExiting: isExiting,
        portalContainer: UNSTABLE_portalContainer,
        children: [
            !props.isNonModal && state.isOpen && /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                "data-testid": "underlay",
                ...underlayProps,
                style: {
                    position: 'fixed',
                    inset: 0
                }
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                ref: containerRef,
                style: {
                    display: 'contents'
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(PopoverGroupContext.Provider, {
                    value: containerRef,
                    children: overlay
                })
            })
        ]
    });
    // Submenus/subdialogs are mounted into the root popover's container.
    // oxlint-disable react/react-compiler
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _overlay.Overlay), {
        ...props,
        shouldContainFocus: isDialog && props.trigger !== 'PreviewTrigger',
        isExiting: isExiting,
        portalContainer: UNSTABLE_portalContainer ?? groupCtx?.current ?? undefined,
        children: overlay
    });
// oxlint-enable react/react-compiler
}

},{"preact/jsx-runtime":"b2Fbn","react-aria/usePopover":"kErbq","./utils":"jtWJJ","react-aria/Overlay":[["DismissButton","9Jo8j"],["Overlay","dm7Ko"]],"react-aria/filterDOMProps":"h4XHF","react-aria/private/interactions/focusSafely":"2xT6S","react-aria/private/interactions/useFocusVisible":"aBfUW","react-aria/private/utils/shadowdom/DOMFunctions":"8kfpz","react-aria/mergeProps":"jycxS","./OverlayArrow":"7uQK8","react-stately/useOverlayTriggerState":"457a8","./Dialog":"aPHDk","react":"gOP0N","react-aria/private/utils/runAfterKeyboard":"bwB3z","react-aria/private/utils/animation":"fc1Bu","react-aria/private/collections/Hidden":"iPJX7","react-aria/private/utils/useLayoutEffect":"h7M6K","react-aria/I18nProvider":"czGuc","react-aria/private/utils/useResizeObserver":"58iim","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

