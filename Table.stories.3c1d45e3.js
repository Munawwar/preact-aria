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
})({"jOobZ":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "GridCollection", ()=>GridCollection);
class GridCollection {
    keyMap = new Map();
    columnCount;
    rows;
    constructor(opts){
        this.keyMap = new Map();
        this.columnCount = opts?.columnCount;
        this.rows = [];
        let visit = (node)=>{
            // If the node is the same object as the previous node for the same key,
            // we can skip this node and its children. We always visit columns though,
            // because we depend on order to build the columns array.
            let prevNode = this.keyMap.get(node.key);
            if (opts.visitNode) node = opts.visitNode(node);
            this.keyMap.set(node.key, node);
            let childKeys = new Set();
            let last = null;
            let rowHasCellWithColSpan = false;
            if (node.type === 'item') {
                for (let child of node.childNodes)if (child.props?.colSpan !== undefined) {
                    rowHasCellWithColSpan = true;
                    break;
                }
            }
            for (let child of node.childNodes){
                if (child.type === 'cell' && rowHasCellWithColSpan) {
                    child.colspan = child.props?.colSpan;
                    child.colSpan = child.props?.colSpan;
                    child.colIndex = !last ? child.index : (last.colIndex ?? last.index) + (last.colSpan ?? 1);
                }
                if (child.type === 'cell' && child.parentKey == null) // if child is a cell parent key isn't already established by the collection, match child node to parent row
                child.parentKey = node.key;
                childKeys.add(child.key);
                if (last) {
                    last.nextKey = child.key;
                    child.prevKey = last.key;
                } else child.prevKey = null;
                visit(child);
                last = child;
            }
            if (last) last.nextKey = null;
            // Remove deleted nodes and their children from the key map
            if (prevNode) {
                for (let child of prevNode.childNodes)if (!childKeys.has(child.key)) remove(child);
            }
        };
        let remove = (node)=>{
            this.keyMap.delete(node.key);
            for (let child of node.childNodes)if (this.keyMap.get(child.key) === child) remove(child);
        };
        let last = null;
        for (let [i, node] of opts.items.entries()){
            let rowNode = {
                ...node,
                level: node.level ?? 0,
                key: node.key ?? 'row-' + i,
                type: node.type ?? 'row',
                value: node.value ?? null,
                hasChildNodes: true,
                childNodes: [
                    ...node.childNodes
                ],
                rendered: node.rendered,
                textValue: node.textValue ?? '',
                index: node.index ?? i
            };
            if (last) {
                last.nextKey = rowNode.key;
                rowNode.prevKey = last.key;
            } else rowNode.prevKey = null;
            this.rows.push(rowNode);
            visit(rowNode);
            last = rowNode;
        }
        if (last) last.nextKey = null;
    }
    *[Symbol.iterator]() {
        yield* [
            ...this.rows
        ];
    }
    get size() {
        return [
            ...this.rows
        ].length;
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
        return [
            ...this.rows
        ][0]?.key;
    }
    getLastKey() {
        let rows = [
            ...this.rows
        ];
        return rows[rows.length - 1]?.key;
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kXw87":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Provides state management for a grid component. Handles row selection and focusing a grid cell's
 * focusable child if applicable.
 */ parcelHelpers.export(exports, "useGridState", ()=>useGridState);
var _getChildNodes = require("../collections/getChildNodes");
var _useMultipleSelectionState = require("../selection/useMultipleSelectionState");
var _selectionManager = require("../selection/SelectionManager");
var _react = require("react");
function useGridState(props) {
    let { collection, focusMode } = props;
    // oxlint-disable-next-line react/react-compiler, react-hooks/rules-of-hooks
    let selectionState = props.UNSAFE_selectionState || (0, _useMultipleSelectionState.useMultipleSelectionState)(props);
    let disabledKeys = (0, _react.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let setFocusedKey = selectionState.setFocusedKey;
    // oxlint-disable-next-line react/react-compiler
    selectionState.setFocusedKey = (key, child)=>{
        // If focusMode is cell and an item is focused, focus a child cell instead.
        if (focusMode === 'cell' && key != null) {
            let item = collection.getItem(key);
            if (item?.type === 'item') {
                let children = (0, _getChildNodes.getChildNodes)(item, collection);
                if (child === 'last') key = (0, _getChildNodes.getLastItem)(children)?.key ?? null;
                else key = (0, _getChildNodes.getFirstItem)(children)?.key ?? null;
            }
        }
        setFocusedKey(key, child);
    };
    let selectionManager = (0, _react.useMemo)(()=>new (0, _selectionManager.SelectionManager)(collection, selectionState), [
        collection,
        selectionState
    ]);
    // Reset focused key if that item is deleted from the collection.
    const cachedCollection = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        if (selectionState.focusedKey != null && cachedCollection.current && !collection.getItem(selectionState.focusedKey)) {
            const node = cachedCollection.current.getItem(selectionState.focusedKey);
            const parentNode = node?.parentKey != null && (node.type === 'cell' || node.type === 'rowheader' || node.type === 'column') ? cachedCollection.current.getItem(node.parentKey) : node;
            if (!parentNode) {
                selectionState.setFocusedKey(null);
                return;
            }
            const cachedRows = cachedCollection.current.rows;
            const rows = collection.rows;
            const diff = cachedRows.length - rows.length;
            let index = Math.min(diff > 1 ? Math.max(parentNode.index - diff + 1, 0) : parentNode.index, rows.length - 1);
            let newRow = null;
            // Find the nearest focusable row at or after the deleted position...
            for(let i = Math.max(0, index); i < rows.length; i++)if (!selectionManager.isDisabled(rows[i].key) && rows[i].type !== 'headerrow') {
                newRow = rows[i];
                break;
            }
            // ...otherwise the nearest focusable row before it. (Mirrors useListState's
            // getKeyAfter/getKeyBefore walk.)
            if (newRow === null) {
                for(let i = index - 1; i >= 0; i--)if (!selectionManager.isDisabled(rows[i].key) && rows[i].type !== 'headerrow') {
                    newRow = rows[i];
                    break;
                }
            }
            if (newRow) {
                const childNodes = newRow.hasChildNodes ? [
                    ...(0, _getChildNodes.getChildNodes)(newRow, collection)
                ] : [];
                const keyToFocus = newRow.hasChildNodes && parentNode !== node && node && node.index < childNodes.length ? childNodes[node.index].key : newRow.key;
                selectionState.setFocusedKey(keyToFocus);
            } else selectionState.setFocusedKey(null);
        }
        cachedCollection.current = collection;
    }, [
        collection,
        selectionManager,
        selectionState,
        selectionState.focusedKey
    ]);
    return {
        collection,
        disabledKeys,
        isKeyboardNavigationDisabled: false,
        selectionManager
    };
}

},{"../collections/getChildNodes":"9KbhA","../selection/useMultipleSelectionState":"c53PS","../selection/SelectionManager":"4luyT","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5DzlL":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a grid component. A grid displays data
 * in one or more rows and columns and enables a user to navigate its contents via directional
 * navigation keys.
 *
 * @param props - Props for the grid.
 * @param state - State for the grid, as returned by `useGridState`.
 * @param ref - The ref attached to the grid element.
 */ parcelHelpers.export(exports, "useGrid", ()=>useGrid);
var _filterDOMProps = require("../utils/filterDOMProps");
var _react = require("react");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _gridKeyboardDelegate = require("./GridKeyboardDelegate");
var _utils = require("./utils");
var _mergeProps = require("../utils/mergeProps");
var _useCollator = require("../i18n/useCollator");
var _useGridSelectionAnnouncement = require("./useGridSelectionAnnouncement");
var _useHasTabbableChild = require("../focus/useHasTabbableChild");
var _useHighlightSelectionDescription = require("./useHighlightSelectionDescription");
var _useId = require("../utils/useId");
var _i18Nprovider = require("../i18n/I18nProvider");
var _useSelectableCollection = require("../selection/useSelectableCollection");
function useGrid(props, state, ref) {
    let { isVirtualized, disallowTypeAhead, keyboardDelegate, focusMode, scrollRef, getRowText, onRowAction, onCellAction, escapeKeyBehavior = 'clearSelection', shouldSelectOnPressUp, keyboardNavigationBehavior = 'arrow' } = props;
    let { selectionManager: manager } = state;
    if (!props['aria-label'] && !props['aria-labelledby']) console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = (0, _useCollator.useCollator)({
        usage: 'search',
        sensitivity: 'base'
    });
    let { direction } = (0, _i18Nprovider.useLocale)();
    let disabledBehavior = state.selectionManager.disabledBehavior;
    let delegate = (0, _react.useMemo)(()=>keyboardDelegate || new (0, _gridKeyboardDelegate.GridKeyboardDelegate)({
            collection: state.collection,
            disabledKeys: state.disabledKeys,
            disabledBehavior,
            ref,
            direction,
            collator,
            focusMode
        }), [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        disabledBehavior,
        ref,
        direction,
        collator,
        focusMode
    ]);
    let { collectionProps } = (0, _useSelectableCollection.useSelectableCollection)({
        ref,
        selectionManager: manager,
        keyboardDelegate: delegate,
        isVirtualized,
        scrollRef,
        disallowTypeAhead,
        escapeKeyBehavior
    });
    let id = (0, _useId.useId)(props.id);
    (0, _utils.gridMap).set(state, {
        keyboardDelegate: delegate,
        actions: {
            onRowAction,
            onCellAction
        },
        shouldSelectOnPressUp,
        keyboardNavigationBehavior
    });
    let descriptionProps = (0, _useHighlightSelectionDescription.useHighlightSelectionDescription)({
        selectionManager: manager,
        hasItemActions: !!(onRowAction || onCellAction)
    });
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    let onFocus = (0, _react.useCallback)((e)=>{
        if (manager.isFocused) {
            // If a focus event bubbled through a portal, reset focus state.
            if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) manager.setFocused(false);
            return;
        }
        // Focus events can bubble through portals. Ignore these events.
        if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) return;
        manager.setFocused(true);
    }, [
        manager
    ]);
    // Continue to track collection focused state even if keyboard navigation is disabled
    let navDisabledHandlers = (0, _react.useMemo)(()=>({
            onBlur: collectionProps.onBlur,
            onFocus
        }), [
        onFocus,
        collectionProps.onBlur
    ]);
    let hasTabbableChild = (0, _useHasTabbableChild.useHasTabbableChild)(ref, {
        isDisabled: state.collection.size !== 0
    });
    let gridProps = (0, _mergeProps.mergeProps)(domProps, {
        role: 'grid',
        id,
        'aria-multiselectable': manager.selectionMode === 'multiple' ? 'true' : undefined
    }, state.isKeyboardNavigationDisabled ? navDisabledHandlers : collectionProps, // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    state.collection.size === 0 && {
        tabIndex: hasTabbableChild ? -1 : 0
    } || undefined, descriptionProps);
    if (isVirtualized) {
        gridProps['aria-rowcount'] = state.collection.size;
        gridProps['aria-colcount'] = state.collection.columnCount;
    }
    (0, _useGridSelectionAnnouncement.useGridSelectionAnnouncement)({
        getRowText
    }, state);
    return {
        gridProps
    };
}

},{"../utils/filterDOMProps":"h4XHF","react":"gOP0N","../utils/shadowdom/DOMFunctions":"8kfpz","./GridKeyboardDelegate":"i7ytC","./utils":"9vh3q","../utils/mergeProps":"jycxS","../i18n/useCollator":"ghoIN","./useGridSelectionAnnouncement":"1oddZ","../focus/useHasTabbableChild":"gjEnQ","./useHighlightSelectionDescription":"hmo1L","../utils/useId":"fQAcb","../i18n/I18nProvider":"czGuc","../selection/useSelectableCollection":"cg1hz","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"i7ytC":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "GridKeyboardDelegate", ()=>GridKeyboardDelegate);
var _domlayoutDelegate = require("../selection/DOMLayoutDelegate");
var _getChildNodes = require("react-stately/private/collections/getChildNodes");
class GridKeyboardDelegate {
    collection;
    disabledKeys;
    disabledBehavior;
    direction;
    collator;
    layoutDelegate;
    focusMode;
    constructor(options){
        this.collection = options.collection;
        this.disabledKeys = options.disabledKeys;
        this.disabledBehavior = options.disabledBehavior || 'all';
        this.direction = options.direction;
        this.collator = options.collator;
        if (!options.layout && !options.ref) throw new Error('Either a layout or a ref must be specified.');
        this.layoutDelegate = options.layoutDelegate || (options.layout ? new DeprecatedLayoutDelegate(options.layout) : new (0, _domlayoutDelegate.DOMLayoutDelegate)(options.ref));
        this.focusMode = options.focusMode ?? 'row';
    }
    isCell(node) {
        return node.type === 'cell';
    }
    isRow(node) {
        return node.type === 'row' || node.type === 'item';
    }
    isDisabled(item) {
        return this.disabledBehavior === 'all' && (item.props?.isDisabled || this.disabledKeys.has(item.key)) && item.props?.disabledBehavior !== 'selection';
    }
    findPreviousKey(fromKey, pred, includeDisabled = false) {
        let key = fromKey != null ? this.collection.getKeyBefore(fromKey) : this.collection.getLastKey();
        while(key != null){
            let item = this.collection.getItem(key);
            if (!item) return null;
            if ((includeDisabled || !this.isDisabled(item)) && (!pred || pred(item))) return key;
            key = this.collection.getKeyBefore(key);
        }
        return null;
    }
    findNextKey(fromKey, pred, includeDisabled = false) {
        let key = fromKey != null ? this.collection.getKeyAfter(fromKey) : this.collection.getFirstKey();
        while(key != null){
            let item = this.collection.getItem(key);
            if (!item) return null;
            if ((includeDisabled || !this.isDisabled(item)) && (!pred || pred(item))) return key;
            key = this.collection.getKeyAfter(key);
            if (key == null) return null;
        }
        return null;
    }
    getKeyForItemInRowByIndex(key, index = 0) {
        if (index < 0) return null;
        let item = this.collection.getItem(key);
        if (!item) return null;
        let i = 0;
        for (let child of (0, _getChildNodes.getChildNodes)(item, this.collection)){
            if (child.colSpan && child.colSpan + i > index) return child.key ?? null;
            if (child.colSpan) i = i + child.colSpan - 1;
            if (i === index) return child.key ?? null;
            i++;
        }
        return null;
    }
    getKeyBelow(fromKey, options) {
        let key = fromKey;
        let startItem = this.collection.getItem(key);
        if (!startItem) return null;
        // If focus was on a cell, start searching from the parent row
        if (this.isCell(startItem)) key = startItem.parentKey ?? null;
        if (key == null) return null;
        // Find the next item
        key = this.findNextKey(key, (item)=>item.type === 'item', options?.includeDisabled);
        if (key != null) {
            // If focus was on a cell, focus the cell with the same index in the next row.
            if (this.isCell(startItem)) {
                let startIndex = startItem.colIndex ? startItem.colIndex : startItem.index;
                return this.getKeyForItemInRowByIndex(key, startIndex);
            }
            // Otherwise, focus the next row
            if (this.focusMode === 'row') return key;
        }
        return null;
    }
    getKeyAbove(fromKey, options) {
        let key = fromKey;
        let startItem = this.collection.getItem(key);
        if (!startItem) return null;
        // If focus is on a cell, start searching from the parent row
        if (this.isCell(startItem)) key = startItem.parentKey ?? null;
        if (key == null) return null;
        // Find the previous item
        key = this.findPreviousKey(key, (item)=>item.type === 'item', options?.includeDisabled);
        if (key != null) {
            // If focus was on a cell, focus the cell with the same index in the previous row.
            if (this.isCell(startItem)) {
                let startIndex = startItem.colIndex ? startItem.colIndex : startItem.index;
                return this.getKeyForItemInRowByIndex(key, startIndex);
            }
            // Otherwise, focus the previous row
            if (this.focusMode === 'row') return key;
        }
        return null;
    }
    getKeyRightOf(key) {
        let item = this.collection.getItem(key);
        if (!item) return null;
        // If focus is on a row, focus the first child cell.
        if (this.isRow(item)) {
            let children = (0, _getChildNodes.getChildNodes)(item, this.collection);
            return (this.direction === 'rtl' ? (0, _getChildNodes.getLastItem)(children)?.key : (0, _getChildNodes.getFirstItem)(children)?.key) ?? null;
        }
        // If focus is on a cell, focus the next cell if any,
        // otherwise focus the parent row.
        if (this.isCell(item) && item.parentKey != null) {
            let parent = this.collection.getItem(item.parentKey);
            if (!parent) return null;
            let children = (0, _getChildNodes.getChildNodes)(parent, this.collection);
            let next = (this.direction === 'rtl' ? (0, _getChildNodes.getNthItem)(children, item.index - 1) : (0, _getChildNodes.getNthItem)(children, item.index + 1)) ?? null;
            if (next) return next.key ?? null;
            // focus row only if focusMode is set to row
            if (this.focusMode === 'row') return item.parentKey ?? null;
            return (this.direction === 'rtl' ? this.getFirstKey(key) : this.getLastKey(key)) ?? null;
        }
        return null;
    }
    getKeyLeftOf(key) {
        let item = this.collection.getItem(key);
        if (!item) return null;
        // If focus is on a row, focus the last child cell.
        if (this.isRow(item)) {
            let children = (0, _getChildNodes.getChildNodes)(item, this.collection);
            return (this.direction === 'rtl' ? (0, _getChildNodes.getFirstItem)(children)?.key : (0, _getChildNodes.getLastItem)(children)?.key) ?? null;
        }
        // If focus is on a cell, focus the previous cell if any,
        // otherwise focus the parent row.
        if (this.isCell(item) && item.parentKey != null) {
            let parent = this.collection.getItem(item.parentKey);
            if (!parent) return null;
            let children = (0, _getChildNodes.getChildNodes)(parent, this.collection);
            let prev = (this.direction === 'rtl' ? (0, _getChildNodes.getNthItem)(children, item.index + 1) : (0, _getChildNodes.getNthItem)(children, item.index - 1)) ?? null;
            if (prev) return prev.key ?? null;
            // focus row only if focusMode is set to row
            if (this.focusMode === 'row') return item.parentKey ?? null;
            return (this.direction === 'rtl' ? this.getLastKey(key) : this.getFirstKey(key)) ?? null;
        }
        return null;
    }
    getFirstKey(fromKey, global) {
        let key = fromKey ?? null;
        let item;
        if (key != null) {
            item = this.collection.getItem(key);
            if (!item) return null;
            // If global flag is not set, and a cell is currently focused,
            // move focus to the first cell in the parent row.
            if (this.isCell(item) && !global && item.parentKey != null) {
                let parent = this.collection.getItem(item.parentKey);
                if (!parent) return null;
                return (0, _getChildNodes.getFirstItem)((0, _getChildNodes.getChildNodes)(parent, this.collection))?.key ?? null;
            }
        }
        // Find the first row
        key = this.findNextKey(undefined, (item)=>item.type === 'item');
        // If global flag is set (or if focus mode is cell), focus the first cell in the first row.
        if (key != null && (item && this.isCell(item) && global || this.focusMode === 'cell')) {
            let item = this.collection.getItem(key);
            if (!item) return null;
            key = (0, _getChildNodes.getFirstItem)((0, _getChildNodes.getChildNodes)(item, this.collection))?.key ?? null;
        }
        // Otherwise, focus the row itself.
        return key;
    }
    getLastKey(fromKey, global) {
        let key = fromKey ?? null;
        let item;
        if (key != null) {
            item = this.collection.getItem(key);
            if (!item) return null;
            // If global flag is not set, and a cell is currently focused,
            // move focus to the last cell in the parent row.
            if (this.isCell(item) && !global && item.parentKey != null) {
                let parent = this.collection.getItem(item.parentKey);
                if (!parent) return null;
                let children = (0, _getChildNodes.getChildNodes)(parent, this.collection);
                return (0, _getChildNodes.getLastItem)(children)?.key ?? null;
            }
        }
        // Find the last row
        key = this.findPreviousKey(undefined, (item)=>item.type === 'item');
        // If global flag is set (or if focus mode is cell), focus the last cell in the last row.
        if (key != null && (item && this.isCell(item) && global || this.focusMode === 'cell')) {
            let item = this.collection.getItem(key);
            if (!item) return null;
            let children = (0, _getChildNodes.getChildNodes)(item, this.collection);
            key = (0, _getChildNodes.getLastItem)(children)?.key ?? null;
        }
        // Otherwise, focus the row itself.
        return key;
    }
    getKeyPageAbove(fromKey) {
        let key = fromKey;
        let itemRect = this.layoutDelegate.getItemRect(key);
        if (!itemRect) return null;
        let pageY = Math.max(0, itemRect.y + itemRect.height - this.layoutDelegate.getVisibleRect().height);
        while(itemRect && itemRect.y > pageY && key != null){
            key = this.getKeyAbove(key) ?? null;
            if (key == null) break;
            itemRect = this.layoutDelegate.getItemRect(key);
        }
        return key;
    }
    getKeyPageBelow(fromKey) {
        let key = fromKey;
        let itemRect = this.layoutDelegate.getItemRect(key);
        if (!itemRect) return null;
        let pageHeight = this.layoutDelegate.getVisibleRect().height;
        let pageY = Math.min(this.layoutDelegate.getContentSize().height, itemRect.y + pageHeight);
        while(itemRect && itemRect.y + itemRect.height < pageY){
            let nextKey = this.getKeyBelow(key);
            // If nextKey is undefined, we've reached the last row already
            if (nextKey == null) break;
            itemRect = this.layoutDelegate.getItemRect(nextKey);
            key = nextKey;
        }
        return key;
    }
    getKeyForSearch(search, fromKey) {
        let key = fromKey ?? null;
        if (!this.collator) return null;
        let collection = this.collection;
        key = fromKey ?? this.getFirstKey();
        if (key == null) return null;
        // If the starting key is a cell, search from its parent row.
        let startItem = collection.getItem(key);
        if (!startItem) return null;
        if (startItem.type === 'cell') key = startItem.parentKey ?? null;
        let hasWrapped = false;
        while(key != null){
            let item = collection.getItem(key);
            if (!item) return null;
            // check row text value for match
            if (item.textValue) {
                let substring = item.textValue.slice(0, search.length);
                if (this.collator.compare(substring, search) === 0) {
                    if (this.isRow(item) && this.focusMode === 'cell') return (0, _getChildNodes.getFirstItem)((0, _getChildNodes.getChildNodes)(item, this.collection))?.key ?? null;
                    return item.key;
                }
            }
            key = this.findNextKey(key, (item)=>item.type === 'item');
            // Wrap around when reaching the end of the collection
            if (key == null && !hasWrapped) {
                key = this.getFirstKey();
                hasWrapped = true;
            }
        }
        return null;
    }
}
class DeprecatedLayoutDelegate {
    layout;
    constructor(layout){
        this.layout = layout;
    }
    getContentSize() {
        return this.layout.getContentSize();
    }
    getItemRect(key) {
        return this.layout.getLayoutInfo(key)?.rect || null;
    }
    getVisibleRect() {
        return this.layout.virtualizer.visibleRect;
    }
}

},{"../selection/DOMLayoutDelegate":"kvCTu","react-stately/private/collections/getChildNodes":"9KbhA","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9vh3q":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "gridMap", ()=>gridMap);
const gridMap = new WeakMap();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2trRH":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a cell in a grid.
 *
 * @param props - Props for the cell.
 * @param state - State of the parent grid, as returned by `useGridState`.
 */ parcelHelpers.export(exports, "useGridCell", ()=>useGridCell);
var _focusSafely = require("../interactions/focusSafely");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _focusScope = require("../focus/FocusScope");
var _domHelpers = require("../utils/domHelpers");
var _getScrollParent = require("../utils/getScrollParent");
var _utils = require("./utils");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _scrollIntoView = require("../utils/scrollIntoView");
var _i18Nprovider = require("../i18n/I18nProvider");
var _useSelectableItem = require("../selection/useSelectableItem");
function useGridCell(props, state, ref) {
    let { node, isVirtualized, focusMode: focusModeProp, allowsArrowNavigation, shouldSelectOnPressUp, onAction } = props;
    let { direction } = (0, _i18Nprovider.useLocale)();
    let { keyboardDelegate, actions: { onCellAction }, keyboardNavigationBehavior } = (0, _utils.gridMap).get(state);
    let focusMode = focusModeProp ?? (keyboardNavigationBehavior === 'tab' ? 'cell' : 'child');
    // We need to track the key of the item at the time it was last focused so that we force
    // focus to go to the item when the DOM node is reused for a different item in a virtualizer.
    let keyWhenFocused = (0, _react.useRef)(null);
    // Tracks the specific focusable child that was last focused within this cell.
    let lastFocusedChild = (0, _react.useRef)(null);
    // Handles focusing the cell. If there is a focusable child,
    // it is focused, otherwise the cell itself is focused.
    let focus = ()=>{
        if (ref.current) {
            let treeWalker = (0, _focusScope.getFocusableTreeWalker)(ref.current);
            if (focusMode === 'child') {
                let activeElement = (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(ref.current));
                // If focus is already on a focusable child within the cell, early return so we don't shift focus
                if ((0, _domfunctions.isFocusWithin)(ref.current) && ref.current !== activeElement) return;
                let ownerDocument = (0, _domHelpers.getOwnerDocument)(ref.current);
                let shouldRestoreToLastFocused = !activeElement || activeElement === ownerDocument.body || activeElement === ref.current;
                if (shouldRestoreToLastFocused) {
                    let lastChild = lastFocusedChild.current;
                    if (lastChild && keyWhenFocused.current === node.key && (0, _domfunctions.nodeContains)(ref.current, lastChild)) {
                        (0, _focusSafely.focusSafely)(lastChild);
                        return;
                    }
                }
                let focusable = state.selectionManager.childFocusStrategy === 'last' ? last(treeWalker) : treeWalker.firstChild();
                if (focusable) {
                    (0, _focusSafely.focusSafely)(focusable);
                    return;
                }
            }
            if (keyWhenFocused.current != null && node.key !== keyWhenFocused.current || !(0, _domfunctions.isFocusWithin)(ref.current)) (0, _focusSafely.focusSafely)(ref.current);
        }
    };
    let { itemProps, isPressed } = (0, _useSelectableItem.useSelectableItem)({
        selectionManager: state.selectionManager,
        key: node.key,
        ref,
        isVirtualized,
        focus,
        shouldSelectOnPressUp,
        onAction: onCellAction ? ()=>onCellAction(node.key) : onAction,
        isDisabled: state.collection.size === 0
    });
    let onKeyDownCapture = (e)=>{
        let activeElement = (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(ref.current));
        if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e)) || state.isKeyboardNavigationDisabled || !ref.current || !activeElement) return;
        let walker = (0, _focusScope.getFocusableTreeWalker)(ref.current);
        walker.currentNode = activeElement;
        switch(e.key){
            case 'ArrowLeft':
                {
                    // Find the next focusable element within the cell.
                    let focusable = direction === 'rtl' ? walker.nextNode() : walker.previousNode();
                    // Don't focus the cell itself if focusMode is "child"
                    if (focusMode === 'child' && focusable === ref.current) focusable = null;
                    e.preventDefault();
                    e.stopPropagation();
                    if (focusable) {
                        (0, _focusSafely.focusSafely)(focusable);
                        (0, _scrollIntoView.scrollIntoViewport)(focusable, {
                            containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
                        });
                    } else {
                        // If there is no next focusable child, then move to the next cell to the left of this one.
                        // This will be handled by useSelectableCollection. However, if there is no cell to the left
                        // of this one, only one column, and the grid doesn't focus rows, then the next key will be the
                        // same as this one. In that case we need to handle focusing either the cell or the first/last
                        // child, depending on the focus mode.
                        let prev = keyboardDelegate.getKeyLeftOf?.(node.key);
                        if (prev !== node.key) {
                            // We prevent the capturing event from reaching children of the cell, e.g. pickers.
                            // We want arrow keys to navigate to the next cell instead. We need to re-dispatch
                            // the event from a higher parent so it still bubbles and gets handled by useSelectableCollection.
                            ref.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                            break;
                        }
                        if (focusMode === 'cell' && direction === 'rtl') {
                            (0, _focusSafely.focusSafely)(ref.current);
                            (0, _scrollIntoView.scrollIntoViewport)(ref.current, {
                                containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
                            });
                        } else {
                            walker.currentNode = ref.current;
                            focusable = direction === 'rtl' ? walker.firstChild() : last(walker);
                            if (focusable) {
                                (0, _focusSafely.focusSafely)(focusable);
                                (0, _scrollIntoView.scrollIntoViewport)(focusable, {
                                    containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
                                });
                            }
                        }
                    }
                    break;
                }
            case 'ArrowRight':
                {
                    let focusable = direction === 'rtl' ? walker.previousNode() : walker.nextNode();
                    if (focusMode === 'child' && focusable === ref.current) focusable = null;
                    e.preventDefault();
                    e.stopPropagation();
                    if (focusable) {
                        (0, _focusSafely.focusSafely)(focusable);
                        (0, _scrollIntoView.scrollIntoViewport)(focusable, {
                            containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
                        });
                    } else {
                        let next = keyboardDelegate.getKeyRightOf?.(node.key);
                        if (next !== node.key) {
                            // We prevent the capturing event from reaching children of the cell, e.g. pickers.
                            // We want arrow keys to navigate to the next cell instead. We need to re-dispatch
                            // the event from a higher parent so it still bubbles and gets handled by useSelectableCollection.
                            ref.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                            break;
                        }
                        if (focusMode === 'cell' && direction === 'ltr') {
                            (0, _focusSafely.focusSafely)(ref.current);
                            (0, _scrollIntoView.scrollIntoViewport)(ref.current, {
                                containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
                            });
                        } else {
                            walker.currentNode = ref.current;
                            focusable = direction === 'rtl' ? last(walker) : walker.firstChild();
                            if (focusable) {
                                (0, _focusSafely.focusSafely)(focusable);
                                (0, _scrollIntoView.scrollIntoViewport)(focusable, {
                                    containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
                                });
                            }
                        }
                    }
                    break;
                }
            case 'ArrowUp':
            case 'ArrowDown':
                // Prevent this event from reaching cell children, e.g. menu buttons. We want arrow keys to navigate
                // to the cell above/below instead. We need to re-dispatch the event from a higher parent so it still
                // bubbles and gets handled by useSelectableCollection.
                if (!e.altKey && (0, _domfunctions.nodeContains)(ref.current, (0, _domfunctions.getEventTarget)(e))) {
                    e.stopPropagation();
                    e.preventDefault();
                    ref.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                }
                break;
        }
    };
    let onKeyDown = (e)=>{
        let activeElement = (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(ref.current));
        if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e)) || state.isKeyboardNavigationDisabled || !ref.current || !activeElement) return;
        if (keyboardNavigationBehavior === 'tab') {
            if ((0, _domfunctions.getEventTarget)(e) !== ref.current && e.key !== 'Tab') {
                e.stopPropagation();
                return;
            }
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
    // Grid cells can have focusable elements inside them. In this case, focus should
    // be marshalled to that element rather than focusing the cell itself.
    let onFocus = (e)=>{
        keyWhenFocused.current = node.key;
        if ((0, _domfunctions.getEventTarget)(e) !== ref.current) {
            // useSelectableItem only handles setting the focused key when
            // the focused element is the gridcell itself. We also want to
            // set the focused key when a child element receives focus.
            // If focus is currently visible (e.g. the user is navigating with the keyboard),
            // then skip this. We want to restore focus to the previously focused row/cell
            // in that case since the table should act like a single tab stop.
            let target = (0, _domfunctions.getEventTarget)(e);
            if (ref.current && (0, _domfunctions.nodeContains)(ref.current, target)) lastFocusedChild.current = target;
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
    // oxlint-disable-next-line react/react-compiler
    let gridCellProps = (0, _mergeProps.mergeProps)(itemProps, {
        role: 'gridcell',
        onKeyDownCapture: keyboardNavigationBehavior !== 'tab' || allowsArrowNavigation ? onKeyDownCapture : undefined,
        onKeyDown: keyboardNavigationBehavior === 'tab' ? onKeyDown : undefined,
        'aria-colspan': node.colSpan,
        'aria-colindex': node.colIndex != null ? node.colIndex + 1 : undefined,
        colSpan: isVirtualized ? undefined : node.colSpan,
        onFocus,
        // make sure shift tabbing from a child of a cell doesnt move focus back to cell if focusMode="child" and in tab nav
        // consistent with arrow nav and focusMode="child" since you can't go back to the cell there either
        ...focusMode === 'child' && keyboardNavigationBehavior === 'tab' ? {
            tabIndex: -1
        } : {}
    });
    if (isVirtualized) gridCellProps['aria-colindex'] = (node.colIndex ?? node.index) + 1; // aria-colindex is 1-based
    // When pressing with a pointer and cell selection is not enabled, usePress will be applied to the
    // row rather than the cell. However, when the row is draggable, usePress cannot preventDefault
    // on pointer down, so the browser will try to focus the cell which has a tabIndex applied.
    // To avoid this, remove the tabIndex from the cell briefly on pointer down.
    if (shouldSelectOnPressUp && gridCellProps.tabIndex != null && gridCellProps.onPointerDown == null) gridCellProps.onPointerDown = (e)=>{
        let el = e.currentTarget;
        let tabindex = el.getAttribute('tabindex');
        el.removeAttribute('tabindex');
        requestAnimationFrame(()=>{
            if (tabindex != null) el.setAttribute('tabindex', tabindex);
        });
    };
    return {
        gridCellProps,
        isPressed
    };
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

},{"../interactions/focusSafely":"2xT6S","../utils/shadowdom/DOMFunctions":"8kfpz","../focus/FocusScope":"E8d3D","../utils/domHelpers":"cYkFa","../utils/getScrollParent":"NRzeg","./utils":"9vh3q","../interactions/useFocusVisible":"aBfUW","../utils/mergeProps":"jycxS","react":"gOP0N","../utils/scrollIntoView":"5N7nL","../i18n/I18nProvider":"czGuc","../selection/useSelectableItem":"3SFOH","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3Ah58":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a row in a grid.
 *
 * @param props - Props for the row.
 * @param state - State of the parent grid, as returned by `useGridState`.
 */ parcelHelpers.export(exports, "useGridRow", ()=>useGridRow);
var _chain = require("../utils/chain");
var _utils = require("./utils");
var _useSelectableItem = require("../selection/useSelectableItem");
function useGridRow(props, state, ref) {
    let { node, isVirtualized, shouldSelectOnPressUp, onAction } = props;
    let { actions, shouldSelectOnPressUp: gridShouldSelectOnPressUp } = (0, _utils.gridMap).get(state);
    let onRowAction = actions.onRowAction ? ()=>actions.onRowAction?.(node.key) : onAction;
    let { itemProps, ...states } = (0, _useSelectableItem.useSelectableItem)({
        selectionManager: state.selectionManager,
        key: node.key,
        ref,
        isVirtualized,
        shouldSelectOnPressUp: gridShouldSelectOnPressUp || shouldSelectOnPressUp,
        onAction: onRowAction || node?.props?.onAction ? (0, _chain.chain)(node?.props?.onAction, onRowAction) : undefined,
        isDisabled: state.collection.size === 0
    });
    let isSelected = state.selectionManager.isSelected(node.key);
    let rowProps = {
        role: 'row',
        'aria-selected': state.selectionManager.selectionMode !== 'none' ? isSelected : undefined,
        'aria-disabled': states.isDisabled || undefined,
        ...itemProps
    };
    if (isVirtualized) rowProps['aria-rowindex'] = node.index + 1; // aria-rowindex is 1 based
    return {
        rowProps,
        ...states
    };
}

},{"../utils/chain":"bQmEj","./utils":"9vh3q","../selection/useSelectableItem":"3SFOH","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

