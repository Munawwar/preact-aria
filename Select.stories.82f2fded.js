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
})({"l68rZ":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","react-aria/useListBox":[["useListBox","6VPAz"],["useListBoxSection","6Sp70"],["useOption","dUGjY"]],"./utils":"jtWJJ","react-aria/Collection":"kFD1B","react-aria/CollectionBuilder":"kFD1B","./Collection":"4TSYQ","./DragAndDrop":"kbk3K","react-aria/filterDOMProps":"h4XHF","react-aria/FocusScope":"E8d3D","./Header":"f1ESp","react-aria/private/utils/inertValue":"hBYeu","react-aria/private/collections/BaseCollection":"imRDY","react-aria/ListKeyboardDelegate":"hxzwH","react-stately/useListState":"3g793","react-aria/private/utils/useLoadMoreSentinel":"1ahiI","react-aria/mergeProps":"jycxS","react":"gOP0N","./Autocomplete":"dHgny","./SelectionIndicator":"4EL3s","./Separator":"cuuaI","./SharedElementTransition":"2Pl2F","./Text":"cfMV9","react-aria/useCollator":"ghoIN","react-aria/useFocus":"9bXTE","react-aria/useFocusRing":"bP7um","react-aria/useHover":"2yLrj","react-aria/useKeyboard":"aHm7i","react-aria/I18nProvider":"czGuc","react-aria/useObjectRef":"ec0NJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6Sp70":[function(require,module,exports,__globalThis) {
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

},{"../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

