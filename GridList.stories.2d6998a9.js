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
})({"9cL5r":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","react-aria/useGridList":[["useGridList","5FV81"],["useGridListItem","kgaar"],["useGridListSection","39lQx"],["useGridListSelectionCheckbox","adHPb"]],"./Button":"enBVm","./Checkbox":"kjgFU","./utils":"jtWJJ","react-aria/Collection":"kFD1B","react-aria/CollectionBuilder":"kFD1B","./Collection":"4TSYQ","./DragAndDrop":"kbk3K","./Autocomplete":"dHgny","react-aria/filterDOMProps":"h4XHF","react-aria/FocusScope":"E8d3D","react-aria/private/collections/BaseCollection":"imRDY","react-aria/private/utils/inertValue":"hBYeu","react-aria/ListKeyboardDelegate":"hxzwH","react-stately/useListState":"3g793","./ListBox":"l68rZ","react-aria/private/utils/useLoadMoreSentinel":"1ahiI","react-aria/mergeProps":"jycxS","react":"gOP0N","./SelectionIndicator":"4EL3s","./SharedElementTransition":"2Pl2F","./Text":"cfMV9","react-aria/useCollator":"ghoIN","react-aria/useFocusRing":"bP7um","react-aria/useHover":"2yLrj","react-aria/I18nProvider":"czGuc","react-aria/useObjectRef":"ec0NJ","react-aria/VisuallyHidden":"cMf28","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"39lQx":[function(require,module,exports,__globalThis) {
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

},{"../grid/useGridSelectionCheckbox":"7PIkk","./utils":"hgri6","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

