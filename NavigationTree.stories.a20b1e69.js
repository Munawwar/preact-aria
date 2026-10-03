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
})({"8Fvwi":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "TreeContext", ()=>TreeContext);
parcelHelpers.export(exports, "TreeStateContext", ()=>TreeStateContext);
parcelHelpers.export(exports, "Tree", ()=>Tree);
parcelHelpers.export(exports, "TreeItemContent", ()=>TreeItemContent);
parcelHelpers.export(exports, "TreeItemContentContext", ()=>TreeItemContentContext);
parcelHelpers.export(exports, "TreeItem", ()=>TreeItem);
parcelHelpers.export(exports, "TreeLoadMoreItem", ()=>TreeLoadMoreItem);
parcelHelpers.export(exports, "TreeSection", ()=>TreeSection);
parcelHelpers.export(exports, "TreeHeader", ()=>TreeHeader);
var _jsxRuntime = require("preact/jsx-runtime");
var _useTree = require("react-aria/useTree");
var _baseCollection = require("react-aria/private/collections/BaseCollection");
var _button = require("./Button");
var _checkbox = require("./Checkbox");
var _utils = require("./utils");
var _collection = require("react-aria/Collection");
var _collectionBuilder = require("react-aria/CollectionBuilder");
var _collection1 = require("./Collection");
var _dragAndDrop = require("./DragAndDrop");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _focusScope = require("react-aria/FocusScope");
var _gridList = require("./GridList");
var _inertValue = require("react-aria/private/utils/inertValue");
var _listKeyboardDelegate = require("react-aria/ListKeyboardDelegate");
var _useLoadMoreSentinel = require("react-aria/private/utils/useLoadMoreSentinel");
var _mergeProps = require("react-aria/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _selectionIndicator = require("./SelectionIndicator");
var _sharedElementTransition = require("./SharedElementTransition");
var _treeDropTargetDelegate = require("./TreeDropTargetDelegate");
var _useTreeState = require("react-stately/useTreeState");
var _useCachedChildren = require("react-aria/private/collections/useCachedChildren");
var _useCollator = require("react-aria/useCollator");
var _useControlledState = require("react-stately/useControlledState");
var _useFocusRing = require("react-aria/useFocusRing");
var _useGridList = require("react-aria/useGridList");
var _useHover = require("react-aria/useHover");
var _useId = require("react-aria/useId");
var _i18Nprovider = require("react-aria/I18nProvider");
var _useObjectRef = require("react-aria/useObjectRef");
var _visuallyHidden = require("react-aria/VisuallyHidden");
class TreeCollection extends (0, _baseCollection.BaseCollection) {
    expandedKeys = new Set();
    withExpandedKeys(lastExpandedKeys, expandedKeys) {
        let collection = this.clone();
        collection.expandedKeys = expandedKeys;
        // Clone ancestor section nodes so React knows to re-render since the same item won't cause a new render but a clone creating a new object with the same value will
        // Without this change, the items won't expand and collapse when virtualized inside a section
        TreeCollection.cloneAncestorSections(expandedKeys, lastExpandedKeys, collection);
        TreeCollection.cloneAncestorSections(lastExpandedKeys, expandedKeys, collection);
        collection.frozen = this.frozen;
        return collection;
    }
    // diff lastExpandedKeys and expandedKeys so we only clone what has changed
    static cloneAncestorSections(keys, excludeSet, collection) {
        for (let key of keys)if (!excludeSet.has(key)) {
            let currentKey = key;
            while(currentKey != null){
                let item = collection.getItem(currentKey);
                if (item?.type === 'section') {
                    collection.keyMap.set(currentKey, item.clone());
                    break;
                } else currentKey = item?.parentKey ?? null;
            }
        }
    }
    *[Symbol.iterator]() {
        let firstKey = this.getFirstKey();
        let node = firstKey != null ? this.getItem(firstKey) : null;
        while(node){
            yield node;
            if (node.type === 'section') node = node.nextKey != null ? this.getItem(node.nextKey) : null;
            else {
                // This will include both item and content nodes
                // We handle the content nodes in useCollectionRenderer and ListLayout
                let key = this.getKeyAfter(node.key);
                node = key != null ? this.getItem(key) : null;
            }
        }
    }
    getLastKey() {
        // Find the deepest expanded child. We don't use collection.getLastKey() here
        // because that will return the deepest child regardless of expandedKeys.
        // Instead, start from the last top-level key and walk down.
        let key = this.lastKey;
        if (key == null) return null;
        let node = this.getItem(key);
        while(node?.lastChildKey != null && (node.type !== 'item' || this.expandedKeys.has(node.key)))node = this.getItem(node.lastChildKey);
        return node?.key;
    }
    getKeyAfter(key) {
        let node = this.getItem(key);
        if (!node) return null;
        if ((this.expandedKeys.has(node.key) || node.type !== 'item') && node.firstChildKey != null) return node.firstChildKey;
        while(node){
            if (node.nextKey != null) return node.nextKey;
            if (node.parentKey != null) node = this.getItem(node.parentKey);
            else return null;
        }
        return null;
    }
    getKeyBefore(key) {
        let node = this.getItem(key);
        if (!node) return null;
        if (node.prevKey != null) {
            node = this.getItem(node.prevKey);
            // If the lastChildKey is expanded, check its lastChildKey
            while(node && (node.type !== 'item' || this.expandedKeys.has(node.key)) && node.lastChildKey != null)node = this.getItem(node.lastChildKey);
            return node?.key ?? null;
        }
        return node.parentKey;
    }
    getChildren(key) {
        let self = this;
        return {
            *[Symbol.iterator] () {
                let parent = self.getItem(key);
                let node = parent?.firstChildKey != null ? self.getItem(parent.firstChildKey) : null;
                if (parent && parent.type === 'section' && node) // Stop once either the node is null or the node is the parent's sibling
                while(node && node.key !== parent.nextKey){
                    yield self.getItem(node.key);
                    // This will include content nodes which we skip in ListLayout
                    let key = self.getKeyAfter(node.key);
                    node = key != null ? self.getItem(key) : null;
                }
                else while(node){
                    yield node;
                    node = node.nextKey != null ? self.getItem(node.nextKey) : null;
                }
            }
        };
    }
    getTextValue(key) {
        let item = this.getItem(key);
        return item ? item.textValue : '';
    }
}
const TreeContext = /*#__PURE__*/ (0, _react.createContext)(null);
const TreeStateContext = /*#__PURE__*/ (0, _react.createContext)(null);
const Tree = /*#__PURE__*/ (0, _react.forwardRef)(function Tree(props, ref) {
    // Render the portal first so that we have the collection by the time we render the DOM in SSR.
    [props, ref] = (0, _utils.useContextProps)(props, ref, TreeContext);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collectionBuilder.CollectionBuilder), {
        content: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collection.Collection), {
            ...props
        }),
        createCollection: ()=>new TreeCollection(),
        children: (collection)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(TreeInner, {
                props: props,
                collection: collection,
                treeRef: ref
            })
    });
});
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
function TreeInner({ props, collection, treeRef: ref }) {
    const { dragAndDropHooks } = props;
    let { direction } = (0, _i18Nprovider.useLocale)();
    let collator = (0, _useCollator.useCollator)({
        usage: 'search',
        sensitivity: 'base'
    });
    let hasDragHooks = !!dragAndDropHooks?.useDraggableCollectionState;
    let hasDropHooks = !!dragAndDropHooks?.useDroppableCollectionState;
    let dragHooksProvided = (0, _react.useRef)(hasDragHooks);
    let dropHooksProvided = (0, _react.useRef)(hasDropHooks);
    (0, _react.useEffect)(()=>{
        if (dragHooksProvided.current !== hasDragHooks) console.warn('Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
        if (dropHooksProvided.current !== hasDropHooks) console.warn('Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
    }, [
        hasDragHooks,
        hasDropHooks
    ]);
    let { selectionMode = 'none', expandedKeys: propExpandedKeys, defaultExpandedKeys: propDefaultExpandedKeys, onExpandedChange, disabledBehavior = 'all' } = props;
    let { CollectionRoot, isVirtualized, layoutDelegate, dropTargetDelegate: ctxDropTargetDelegate } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    // Kinda annoying that we have to replicate this code here as well as in useTreeState, but don't want to add
    // flattenCollection stuff to useTreeState. Think about this later
    let [expandedKeys, setExpandedKeys] = (0, _useControlledState.useControlledState)(propExpandedKeys ? new Set(propExpandedKeys) : undefined, propDefaultExpandedKeys ? new Set(propDefaultExpandedKeys) : new Set(), onExpandedChange);
    let [lastCollection, setLastCollection] = (0, _react.useState)(collection);
    let [lastExpandedKeys, setLastExpandedKeys] = (0, _react.useState)(expandedKeys);
    let [flattenedCollection, setFlattenedCollection] = (0, _react.useState)(()=>collection.withExpandedKeys(lastExpandedKeys, expandedKeys));
    // if the lastExpandedKeys is not the same as the currentExpandedKeys or the collection has changed, then run this
    if (!areSetsEqual(lastExpandedKeys, expandedKeys) || collection !== lastCollection) {
        setFlattenedCollection(collection.withExpandedKeys(lastExpandedKeys, expandedKeys));
        setLastCollection(collection);
        setLastExpandedKeys(expandedKeys);
    }
    let state = (0, _useTreeState.useTreeState)({
        ...props,
        selectionMode,
        expandedKeys,
        onExpandedChange: setExpandedKeys,
        collection: flattenedCollection,
        children: undefined,
        disabledBehavior
    });
    let { gridProps } = (0, _useTree.useTree)({
        ...props,
        isVirtualized,
        layoutDelegate
    }, state, ref);
    let dragState = undefined;
    let dropState = undefined;
    let droppableCollection = undefined;
    let isRootDropTarget = false;
    let dragPreview = null;
    let preview = (0, _react.useRef)(null);
    if (hasDragHooks && dragAndDropHooks) {
        // oxlint-disable-next-line react/react-compiler
        dragState = dragAndDropHooks.useDraggableCollectionState({
            collection: state.collection,
            selectionManager: state.selectionManager,
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
    let [treeDropTargetDelegate] = (0, _react.useState)(()=>new (0, _treeDropTargetDelegate.TreeDropTargetDelegate)());
    if (hasDropHooks && dragAndDropHooks) {
        // oxlint-disable-next-line react/react-compiler
        dropState = dragAndDropHooks.useDroppableCollectionState({
            collection: state.collection,
            selectionManager: state.selectionManager
        });
        let dropTargetDelegate = dragAndDropHooks.dropTargetDelegate || ctxDropTargetDelegate || new dragAndDropHooks.ListDropTargetDelegate(state.collection, ref, {
            direction
        });
        treeDropTargetDelegate.setup(dropTargetDelegate, state, direction);
        let keyboardDelegate = new (0, _listKeyboardDelegate.ListKeyboardDelegate)({
            collection: state.collection,
            collator,
            ref,
            disabledKeys: state.selectionManager.disabledKeys,
            disabledBehavior: state.selectionManager.disabledBehavior,
            direction,
            layoutDelegate
        });
        // oxlint-disable-next-line react/react-compiler
        droppableCollection = dragAndDropHooks.useDroppableCollection({
            keyboardDelegate,
            dropTargetDelegate: treeDropTargetDelegate,
            onDropActivate: (e)=>{
                // Expand collapsed item when dragging over. For keyboard, allow collapsing.
                if (e.target.type === 'item') {
                    let key = e.target.key;
                    let item = state.collection.getItem(key);
                    let isExpanded = expandedKeys.has(key);
                    if (item && item.hasChildNodes && (!isExpanded || dragAndDropHooks?.isVirtualDragging?.())) state.toggleKey(key);
                }
            },
            onKeyDown: (e)=>{
                let target = dropState?.target;
                if (target && target.type === 'item' && target.dropPosition === 'on') {
                    let item = state.collection.getItem(target.key);
                    if (e.key === EXPANSION_KEYS['expand'][direction] && item?.hasChildNodes && !state.expandedKeys.has(target.key)) state.toggleKey(target.key);
                    else if (e.key === EXPANSION_KEYS['collapse'][direction] && item?.hasChildNodes && state.expandedKeys.has(target.key)) state.toggleKey(target.key);
                }
            }
        }, dropState, ref);
        isRootDropTarget = dropState.isDropTarget({
            type: 'root'
        });
    }
    let isTreeDraggable = !!(hasDragHooks && !dragState?.isDisabled);
    let { focusProps, isFocused, isFocusVisible } = (0, _useFocusRing.useFocusRing)();
    let renderValues = {
        isEmpty: state.collection.size === 0,
        isFocused,
        isFocusVisible,
        isDropTarget: isRootDropTarget,
        selectionMode: state.selectionManager.selectionMode,
        allowsDragging: !!isTreeDraggable,
        state
    };
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        children: undefined,
        defaultClassName: 'react-aria-Tree',
        values: renderValues
    });
    let emptyState = null;
    if (state.collection.size === 0 && props.renderEmptyState) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let { isEmpty, ...values } = renderValues;
        let content = props.renderEmptyState({
            ...values
        });
        let treeGridRowProps = {
            'aria-level': 1
        };
        emptyState = /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
            role: "row",
            style: {
                display: 'contents'
            },
            ...treeGridRowProps,
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
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _focusScope.FocusScope), {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _utils.dom).div, {
                    ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, gridProps, focusProps, droppableCollection?.collectionProps),
                    ref: ref,
                    slot: props.slot || undefined,
                    "data-empty": state.collection.size === 0 || undefined,
                    "data-focused": isFocused || undefined,
                    "data-drop-target": isRootDropTarget || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    "data-selection-mode": state.selectionManager.selectionMode === 'none' ? undefined : state.selectionManager.selectionMode,
                    "data-allows-dragging": !!isTreeDraggable || undefined,
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _utils.Provider), {
                            values: [
                                [
                                    TreeStateContext,
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
                                    (0, _dragAndDrop.DropIndicatorContext),
                                    {
                                        render: TreeDropIndicatorWrapper
                                    }
                                ]
                            ],
                            children: [
                                hasDropHooks && /*#__PURE__*/ (0, _jsxRuntime.jsx)(RootDropIndicator, {}),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _sharedElementTransition.SharedElementTransition), {
                                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionRoot, {
                                        collection: state.collection,
                                        persistedKeys: (0, _dragAndDrop.useDndPersistedKeys)(state.selectionManager, dragAndDropHooks, dropState),
                                        scrollRef: ref,
                                        renderDropIndicator: (0, _dragAndDrop.useRenderDropIndicator)(dragAndDropHooks, dropState)
                                    })
                                })
                            ]
                        }),
                        emptyState
                    ]
                })
            }),
            dragPreview
        ]
    });
}
class TreeContentNode extends (0, _baseCollection.CollectionNode) {
    static type = 'content';
}
const TreeItemContent = /*#__PURE__*/ (0, _collectionBuilder.createLeafComponent)(TreeContentNode, function TreeItemContent(props) {
    let values = (0, _react.useContext)(TreeItemContentContext);
    let renderProps = (0, _utils.useRenderProps)({
        children: props.children,
        values
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collection1.CollectionRendererContext).Provider, {
        value: (0, _collection1.DefaultCollectionRenderer),
        children: renderProps.children
    });
});
const TreeItemContentContext = /*#__PURE__*/ (0, _react.createContext)(null);
class TreeItemNode extends (0, _baseCollection.CollectionNode) {
    static type = 'item';
}
const TreeItem = /*#__PURE__*/ (0, _collectionBuilder.createBranchComponent)(TreeItemNode, (props, ref, item)=>{
    let state = (0, _react.useContext)(TreeStateContext);
    ref = (0, _useObjectRef.useObjectRef)(ref);
    let { dragAndDropHooks, dragState, dropState } = (0, _react.useContext)((0, _dragAndDrop.DragAndDropContext));
    let isDraggable = dragState && !(dragState.isDisabled || dragState.selectionManager.isDisabled(item.key));
    // TODO: remove this when we support description in tree row
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { rowProps, gridCellProps, expandButtonProps, descriptionProps, ...states } = (0, _useTree.useTreeItem)({
        node: item,
        shouldSelectOnPressUp: !!dragState,
        focusMode: props.focusMode,
        allowsArrowNavigation: props.allowsArrowNavigation
    }, state, ref);
    let isExpanded = rowProps['aria-expanded'] === true;
    let hasChildItems = props.hasChildItems || [
        ...state.collection.getChildren(item.key)
    ]?.length > 1;
    let level = rowProps['aria-level'] || 1;
    let { hoverProps, isHovered } = (0, _useHover.useHover)({
        // because of https://bugs.webkit.org/show_bug.cgi?id=214609, supporting hover styles when a item is ONLY isDraggable
        // results in hover styles sticking around after a reorder/drop operation...
        isDisabled: !states.allowsSelection && !states.hasAction && !isDraggable,
        onHoverStart: props.onHoverStart,
        onHoverChange: props.onHoverChange,
        onHoverEnd: props.onHoverEnd
    });
    let { isFocusVisible, focusProps } = (0, _useFocusRing.useFocusRing)();
    let { isFocusVisible: isFocusVisibleWithin, focusProps: focusWithinProps } = (0, _useFocusRing.useFocusRing)({
        within: true
    });
    let { checkboxProps } = (0, _useGridList.useGridListSelectionCheckbox)({
        key: item.key
    }, state);
    let draggableItem = null;
    if (dragState && dragAndDropHooks) draggableItem = dragAndDropHooks.useDraggableItem({
        key: item.key,
        hasDragButton: true
    }, dragState);
    let dropIndicator = null;
    let expandButtonRef = (0, _react.useRef)(null);
    let dropIndicatorRef = (0, _react.useRef)(null);
    let activateButtonRef = (0, _react.useRef)(null);
    let { visuallyHiddenProps } = (0, _visuallyHidden.useVisuallyHidden)();
    if (dropState && dragAndDropHooks) dropIndicator = dragAndDropHooks.useDropIndicator({
        target: {
            type: 'item',
            key: item.key,
            dropPosition: 'on'
        },
        activateButtonRef
    }, dropState, dropIndicatorRef);
    let isDragging = dragState && dragState.isDragging(item.key);
    let isDropTarget = dropIndicator?.isDropTarget;
    let selectionMode = state.selectionManager.selectionMode;
    let selectionBehavior = state.selectionManager.selectionBehavior;
    let renderPropValues = (0, _reactDefault.default).useMemo(()=>({
            ...states,
            isHovered,
            isFocusVisible,
            isExpanded,
            hasChildItems,
            level,
            selectionMode,
            selectionBehavior,
            isFocusVisibleWithin,
            state,
            id: item.key,
            allowsDragging: !!dragState,
            isDragging,
            isDropTarget
        }), [
        states,
        isHovered,
        isFocusVisible,
        isExpanded,
        hasChildItems,
        level,
        isFocusVisibleWithin,
        state,
        item.key,
        dragState,
        isDragging,
        isDropTarget,
        selectionBehavior,
        selectionMode
    ]);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-TreeItem',
        defaultStyle: {
            // @ts-ignore
            '--tree-item-level': level
        },
        values: renderPropValues
    });
    (0, _react.useEffect)(()=>{
        item.textValue;
    }, [
        item.textValue
    ]);
    (0, _react.useEffect)(()=>{
        hasChildItems && expandButtonRef.current;
    // eslint-disable-next-line
    }, []);
    let dragButtonRef = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        dragState && dragButtonRef.current;
    // eslint-disable-next-line
    }, []);
    let children = (0, _useCachedChildren.useCachedChildren)({
        items: state.collection.getChildren(item.key),
        children: (item)=>{
            switch(item.type){
                case 'content':
                    return item.render(item);
                // Skip item since we don't render the nested rows as children of the parent row, the flattened collection
                // will render them each as siblings instead
                case 'loader':
                case 'item':
                    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {});
                default:
                    throw new Error('Unsupported element type in TreeRow: ' + item.type);
            }
        }
    });
    let activateButtonId = (0, _useId.useId)();
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            dropIndicator && !dropIndicator.isHidden && /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                role: "row",
                "aria-level": rowProps['aria-level'],
                "aria-expanded": rowProps['aria-expanded'],
                "aria-label": dropIndicator.dropIndicatorProps['aria-label'],
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                    role: "gridcell",
                    "aria-colindex": 1,
                    style: {
                        display: 'contents'
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                            role: "button",
                            ...visuallyHiddenProps,
                            ...dropIndicator.dropIndicatorProps,
                            ref: dropIndicatorRef
                        }),
                        rowProps['aria-expanded'] != null ? // Button to allow touch screen reader users to expand the item while dragging.
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                            role: "button",
                            ...visuallyHiddenProps,
                            id: activateButtonId,
                            "aria-label": expandButtonProps['aria-label'],
                            "aria-labelledby": `${activateButtonId} ${rowProps.id}`,
                            tabIndex: -1,
                            ref: activateButtonRef
                        }) : null
                    ]
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
                ...(0, _mergeProps.mergeProps)(DOMProps, rowProps, focusProps, hoverProps, focusWithinProps, draggableItem?.dragProps),
                ...renderProps,
                ref: ref,
                // TODO: missing selectionBehavior, hasAction and allowsSelection data attribute equivalents (available in renderProps). Do we want those?
                "data-expanded": hasChildItems && isExpanded || undefined,
                "data-has-child-items": hasChildItems || undefined,
                "data-level": level,
                "data-selected": states.isSelected || undefined,
                "data-disabled": states.isDisabled || undefined,
                "data-hovered": isHovered || undefined,
                "data-focused": states.isFocused || undefined,
                "data-focus-visible": isFocusVisible || undefined,
                "data-pressed": states.isPressed || undefined,
                "data-selection-mode": state.selectionManager.selectionMode === 'none' ? undefined : state.selectionManager.selectionMode,
                "data-allows-dragging": !!dragState || undefined,
                "data-dragging": isDragging || undefined,
                "data-drop-target": isDropTarget || undefined,
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
                            // TODO: support description in the tree row
                            // TODO: don't think I need to pass isExpanded to the button here since it can be sourced from the renderProps? Might be worthwhile passing it down?
                            [
                                (0, _button.ButtonContext),
                                {
                                    slots: {
                                        [(0, _utils.DEFAULT_SLOT)]: {},
                                        chevron: {
                                            ...expandButtonProps,
                                            ref: expandButtonRef
                                        },
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
                                TreeItemContentContext,
                                {
                                    ...renderPropValues
                                }
                            ],
                            [
                                (0, _selectionIndicator.SelectionIndicatorContext),
                                {
                                    isSelected: states.isSelected
                                }
                            ]
                        ],
                        children: children
                    })
                })
            })
        ]
    });
});
const TreeLoadMoreItem = (0, _collectionBuilder.createLeafComponent)((0, _baseCollection.LoaderNode), function TreeLoadingSentinel(props, ref, item) {
    let { isVirtualized } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let state = (0, _react.useContext)(TreeStateContext);
    let { isLoading, onLoadMore, scrollOffset, ...otherProps } = props;
    let sentinelRef = (0, _react.useRef)(null);
    let memoedLoadMoreProps = (0, _react.useMemo)(()=>({
            onLoadMore,
            // this collection will update anytime a row is expanded/collapsed becaused the flattenedRows will change.
            // This means onLoadMore will trigger but that might be ok cause the user should have logic to handle multiple loadMore calls
            collection: state?.collection,
            sentinelRef,
            scrollOffset
        }), [
        onLoadMore,
        scrollOffset,
        state?.collection
    ]);
    (0, _useLoadMoreSentinel.useLoadMoreSentinel)(memoedLoadMoreProps, sentinelRef);
    ref = (0, _useObjectRef.useObjectRef)(ref);
    let { rowProps, gridCellProps } = (0, _useTree.useTreeItem)({
        node: item
    }, state, ref);
    let level = rowProps['aria-level'] || 1;
    // For now don't include aria-posinset and aria-setsize on loader since they aren't keyboard focusable
    // Arguably shouldn't include them ever since it might be confusing to the user to include the loaders as part of the
    // item count
    let ariaProps = {
        role: 'row',
        'aria-level': rowProps['aria-level']
    };
    let renderProps = (0, _utils.useRenderProps)({
        ...otherProps,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-TreeLoader',
        values: {
            level
        }
    });
    let style = {};
    if (isVirtualized) style = {
        display: 'contents'
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
            isLoading && renderProps.children && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
                ref: ref,
                ...(0, _mergeProps.mergeProps)((0, _filterDOMProps.filterDOMProps)(props), ariaProps),
                ...renderProps,
                "data-level": level,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                    ...gridCellProps,
                    style: style,
                    children: renderProps.children
                })
            })
        ]
    });
});
function TreeDropIndicatorWrapper(props, ref) {
    ref = (0, _useObjectRef.useObjectRef)(ref);
    let { dragAndDropHooks, dropState } = (0, _react.useContext)((0, _dragAndDrop.DragAndDropContext));
    let buttonRef = (0, _react.useRef)(null);
    // oxlint-disable-next-line react/react-compiler
    let { dropIndicatorProps, isHidden, isDropTarget } = dragAndDropHooks.useDropIndicator(props, dropState, buttonRef);
    if (isHidden) return null;
    let level = dropState && props.target.type === 'item' ? (dropState.collection.getItem(props.target.key)?.level || 0) + 1 : 1;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(TreeDropIndicatorForwardRef, {
        ...props,
        dropIndicatorProps: dropIndicatorProps,
        isDropTarget: isDropTarget,
        ref: ref,
        buttonRef: buttonRef,
        level: level
    });
}
function TreeDropIndicator(props, ref) {
    let { dropIndicatorProps, isDropTarget, buttonRef, level, ...otherProps } = props;
    let { visuallyHiddenProps } = (0, _visuallyHidden.useVisuallyHidden)();
    let renderProps = (0, _utils.useRenderProps)({
        ...otherProps,
        defaultClassName: 'react-aria-DropIndicator',
        defaultStyle: {
            position: 'relative',
            // @ts-ignore
            '--tree-item-level': level
        },
        values: {
            isDropTarget
        }
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...renderProps,
        role: "row",
        "aria-level": level,
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
const TreeDropIndicatorForwardRef = /*#__PURE__*/ (0, _react.forwardRef)(TreeDropIndicator);
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
const TreeSection = /*#__PURE__*/ (0, _collectionBuilder.createBranchComponent)((0, _baseCollection.SectionNode), (props, ref, item)=>{
    let state = (0, _react.useContext)(TreeStateContext);
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
        defaultClassName: 'react-aria-TreeSection',
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
                    (0, _gridList.GridListHeaderContext),
                    {
                        ...rowProps,
                        ref: headingRef
                    }
                ],
                [
                    (0, _gridList.GridListHeaderInnerContext),
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
const TreeHeader = (props)=>{
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _gridList.GridListHeader), {
        className: "react-aria-TreeHeader",
        ...props,
        children: props.children
    });
};
function areSetsEqual(a, b) {
    if (a.size !== b.size) return false;
    for (let item of a){
        if (!b.has(item)) return false;
    }
    return true;
}

},{"preact/jsx-runtime":"b2Fbn","react-aria/useTree":[["useTree","iRSXE"],["useTreeItem","c4Qz2"]],"react-aria/private/collections/BaseCollection":"imRDY","./Button":"enBVm","./Checkbox":"kjgFU","./utils":"jtWJJ","react-aria/Collection":"kFD1B","react-aria/CollectionBuilder":"kFD1B","./Collection":"4TSYQ","./DragAndDrop":"kbk3K","react-aria/filterDOMProps":"h4XHF","react-aria/FocusScope":"E8d3D","./GridList":"9cL5r","react-aria/private/utils/inertValue":"hBYeu","react-aria/ListKeyboardDelegate":"hxzwH","react-aria/private/utils/useLoadMoreSentinel":"1ahiI","react-aria/mergeProps":"jycxS","react":"gOP0N","./SelectionIndicator":"4EL3s","./SharedElementTransition":"2Pl2F","./TreeDropTargetDelegate":"xDMSQ","react-stately/useTreeState":"7ofl1","react-aria/private/collections/useCachedChildren":"5c0At","react-aria/useCollator":"ghoIN","react-stately/useControlledState":"8yNBD","react-aria/useFocusRing":"bP7um","react-aria/useGridList":[["useGridListSection","39lQx"],["useGridListSelectionCheckbox","adHPb"]],"react-aria/useHover":"2yLrj","react-aria/useId":"fQAcb","react-aria/I18nProvider":"czGuc","react-aria/useObjectRef":"ec0NJ","react-aria/VisuallyHidden":"cMf28","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iRSXE":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a single column treegrid component
 * with interactive children. A tree grid provides users with a way to navigate nested hierarchical
 * information.
 *
 * @param props - Props for the treegrid.
 * @param state - State for the treegrid, as returned by `useTreeState`.
 * @param ref - The ref attached to the treegrid element.
 */ parcelHelpers.export(exports, "useTree", ()=>useTree);
var _useGridList = require("../gridlist/useGridList");
function useTree(props, state, ref) {
    let { gridProps } = (0, _useGridList.useGridList)(props, state, ref);
    // oxlint-disable-next-line react/react-compiler
    gridProps.role = 'treegrid';
    return {
        gridProps
    };
}

},{"../gridlist/useGridList":"5FV81","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"c4Qz2":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a row in a tree grid list.
 *
 * @param props - Props for the row.
 * @param state - State of the parent list, as returned by `useTreeState`.
 * @param ref - The ref attached to the row element.
 */ parcelHelpers.export(exports, "useTreeItem", ()=>useTreeItem);
var _useGridListItem = require("../gridlist/useGridListItem");
var _indexJs = require("../../intl/tree/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _useLabels = require("../utils/useLabels");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
function useTreeItem(props, state, ref) {
    let { node } = props;
    let gridListAria = (0, _useGridListItem.useGridListItem)(props, state, ref);
    let isExpanded = gridListAria.rowProps['aria-expanded'] === true;
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/tree');
    let labelProps = (0, _useLabels.useLabels)({
        'aria-label': isExpanded ? stringFormatter.format('collapse') : stringFormatter.format('expand'),
        'aria-labelledby': gridListAria.rowProps.id
    });
    let expandButtonProps = {
        onPress: ()=>{
            if (!gridListAria.isDisabled) {
                state.toggleKey(node.key);
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(node.key);
            }
        },
        excludeFromTabOrder: true,
        preventFocusOnPress: true,
        'data-react-aria-prevent-focus': true,
        ...labelProps
    };
    // TODO: should it return a state specifically for isExpanded? Or is aria attribute sufficient?
    return {
        ...gridListAria,
        expandButtonProps
    };
}

},{"../gridlist/useGridListItem":"kgaar","../../intl/tree/index.js":"lpx5N","../utils/useLabels":"8ZwLJ","../i18n/useLocalizedStringFormatter":"8lll3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lpx5N":[function(require,module,exports,__globalThis) {
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

},{"./ar-AE.js":"RUZIx","./bg-BG.js":"7e5Cw","./cs-CZ.js":"aVQrh","./da-DK.js":"9FJQM","./de-DE.js":"anFox","./el-GR.js":"lpm2K","./en-US.js":"casiG","./es-ES.js":"aw7EQ","./et-EE.js":"9OBBX","./fi-FI.js":"cFqXz","./fr-FR.js":"9Xaff","./he-IL.js":"kaUgH","./hr-HR.js":"dLab8","./hu-HU.js":"5fjSl","./it-IT.js":"gb3Z2","./ja-JP.js":"7OhW9","./ko-KR.js":"iVp5Y","./lt-LT.js":"lmkDU","./lv-LV.js":"02coN","./nb-NO.js":"JWkUE","./nl-NL.js":"7lhoN","./pl-PL.js":"bv3PH","./pt-BR.js":"gvrh2","./pt-PT.js":"hrOKi","./ro-RO.js":"2XqDe","./ru-RU.js":"aTvia","./sk-SK.js":"hqiVB","./sl-SI.js":"dxgBl","./sr-SP.js":"02BZ5","./sv-SE.js":"gnjKD","./tr-TR.js":"4QLh6","./uk-UA.js":"hy5OO","./zh-CN.js":"2IErH","./zh-TW.js":"9fK17","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"RUZIx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `\u{637}\u{64A}`,
    "expand": `\u{62A}\u{645}\u{62F}\u{64A}\u{62F}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7e5Cw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `\u{421}\u{432}\u{438}\u{432}\u{430}\u{43D}\u{435}`,
    "expand": `\u{420}\u{430}\u{437}\u{448}\u{438}\u{440}\u{44F}\u{432}\u{430}\u{43D}\u{435}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aVQrh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Sbalit`,
    "expand": `Rozt\xe1hnout`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9FJQM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Skjul`,
    "expand": `Udvid`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"anFox":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Reduzieren`,
    "expand": `Erweitern`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lpm2K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `\u{3A3}\u{3CD}\u{3BC}\u{3C0}\u{3C4}\u{3C5}\u{3BE}\u{3B7}`,
    "expand": `\u{391}\u{3BD}\u{3AC}\u{3C0}\u{3C4}\u{3C5}\u{3BE}\u{3B7}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"casiG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "expand": `Expand`,
    "collapse": `Collapse`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aw7EQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Contraer`,
    "expand": `Expandir`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9OBBX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Ahenda`,
    "expand": `Laienda`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cFqXz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Pienenn\xe4`,
    "expand": `Laajenna`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9Xaff":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `R\xe9duire`,
    "expand": `D\xe9velopper`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kaUgH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `\u{5DB}\u{5D5}\u{5D5}\u{5E5}`,
    "expand": `\u{5D4}\u{5E8}\u{5D7}\u{5D1}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dLab8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Sa\u{17E}mi`,
    "expand": `Pro\u{161}iri`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5fjSl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `\xd6sszecsuk\xe1s`,
    "expand": `Kibont\xe1s`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gb3Z2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Comprimi`,
    "expand": `Espandi`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7OhW9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `\u{6298}\u{308A}\u{305F}\u{305F}\u{3080}`,
    "expand": `\u{5C55}\u{958B}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iVp5Y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `\u{C811}\u{AE30}`,
    "expand": `\u{D3BC}\u{CE58}\u{AE30}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lmkDU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Sutraukti`,
    "expand": `I\u{161}skleisti`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"02coN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Sak\u{13C}aut`,
    "expand": `Izv\u{113}rst`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"JWkUE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Skjul`,
    "expand": `Utvid`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7lhoN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Samenvouwen`,
    "expand": `Uitvouwen`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bv3PH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Zwi\u{144}`,
    "expand": `Rozwi\u{144}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gvrh2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Recolher`,
    "expand": `Expandir`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hrOKi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Colapsar`,
    "expand": `Expandir`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2XqDe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Restr\xe2nge\u{21B}i`,
    "expand": `Extinde\u{21B}i`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aTvia":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `\u{421}\u{432}\u{435}\u{440}\u{43D}\u{443}\u{442}\u{44C}`,
    "expand": `\u{420}\u{430}\u{437}\u{432}\u{435}\u{440}\u{43D}\u{443}\u{442}\u{44C}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hqiVB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Zbali\u{165}`,
    "expand": `Rozbali\u{165}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dxgBl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Strni`,
    "expand": `Raz\u{161}iri`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"02BZ5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": ` Skupi`,
    "expand": `Pro\u{161}iri`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gnjKD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `D\xf6lj`,
    "expand": `Expandera`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4QLh6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `Daralt`,
    "expand": `Geni\u{15F}let`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hy5OO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `\u{417}\u{433}\u{43E}\u{440}\u{43D}\u{443}\u{442}\u{438}`,
    "expand": `\u{420}\u{43E}\u{437}\u{433}\u{43E}\u{440}\u{43D}\u{443}\u{442}\u{438}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2IErH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `\u{6298}\u{53E0}`,
    "expand": `\u{6269}\u{5C55}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9fK17":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "collapse": `\u{6536}\u{5408}`,
    "expand": `\u{5C55}\u{958B}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

