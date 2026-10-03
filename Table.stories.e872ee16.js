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
})({"hQgZU":[function(require,module,exports,__globalThis) {
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
/** @private */ parcelHelpers.export(exports, "buildHeaderRows", ()=>buildHeaderRows);
parcelHelpers.export(exports, "TableCollection", ()=>TableCollection);
var _getChildNodes = require("../collections/getChildNodes");
var _gridCollection = require("../grid/GridCollection");
const ROW_HEADER_COLUMN_KEY = 'row-header-column-' + Math.random().toString(36).slice(2);
let ROW_HEADER_COLUMN_KEY_DRAG = 'row-header-column-' + Math.random().toString(36).slice(2);
while(ROW_HEADER_COLUMN_KEY === ROW_HEADER_COLUMN_KEY_DRAG)ROW_HEADER_COLUMN_KEY_DRAG = 'row-header-column-' + Math.random().toString(36).slice(2);
function buildHeaderRows(keyMap, columnNodes) {
    if (columnNodes.length === 0) return [];
    let columns = [];
    let seen = new Map();
    for (let column of columnNodes){
        let parentKey = column.parentKey;
        let col = [
            column
        ];
        while(parentKey != null){
            let parent = keyMap.get(parentKey);
            if (!parent) break;
            // If we've already seen this parent, than it is shared
            // with a previous column. If the current column is taller
            // than the previous column, than we need to shift the parent
            // in the previous column so it's level with the current column.
            if (seen.has(parent)) {
                parent.colSpan ??= 0;
                parent.colSpan++;
                parent.colspan = parent.colSpan;
                let { column, index } = seen.get(parent);
                if (index > col.length) break;
                for(let i = index; i < col.length; i++)column.splice(i, 0, null);
                // Adjust shifted indices
                for(let i = col.length; i < column.length; i++)// eslint-disable-next-line max-depth
                if (column[i] && seen.has(column[i])) seen.get(column[i]).index = i;
            } else {
                parent.colSpan = 1;
                parent.colspan = 1;
                col.push(parent);
                seen.set(parent, {
                    column: col,
                    index: col.length - 1
                });
            }
            parentKey = parent.parentKey;
        }
        columns.push(col);
        column.index = columns.length - 1;
    }
    let maxLength = Math.max(...columns.map((c)=>c.length));
    let headerRows = Array(maxLength).fill(0).map(()=>[]);
    // Convert columns into rows.
    let colIndex = 0;
    for (let column of columns){
        let i = maxLength - 1;
        for (let item of column){
            if (item) {
                // Fill the space up until the current column with a placeholder
                let row = headerRows[i];
                let rowLength = row.reduce((p, c)=>p + (c.colSpan ?? 1), 0);
                if (rowLength < colIndex) {
                    let placeholder = {
                        type: 'placeholder',
                        key: 'placeholder-' + item.key,
                        colspan: colIndex - rowLength,
                        colSpan: colIndex - rowLength,
                        index: rowLength,
                        value: null,
                        rendered: null,
                        level: i,
                        hasChildNodes: false,
                        childNodes: [],
                        textValue: ''
                    };
                    // eslint-disable-next-line max-depth
                    if (row.length > 0) {
                        row[row.length - 1].nextKey = placeholder.key;
                        placeholder.prevKey = row[row.length - 1].key;
                    }
                    row.push(placeholder);
                }
                if (row.length > 0) {
                    row[row.length - 1].nextKey = item.key;
                    item.prevKey = row[row.length - 1].key;
                }
                item.level = i;
                item.colIndex = colIndex;
                row.push(item);
            }
            i--;
        }
        colIndex++;
    }
    // Add placeholders at the end of each row that is shorter than the maximum
    let i = 0;
    for (let row of headerRows){
        let rowLength = row.reduce((p, c)=>p + (c.colSpan ?? 1), 0);
        if (rowLength < columnNodes.length) {
            let placeholder = {
                type: 'placeholder',
                key: 'placeholder-' + row[row.length - 1].key,
                colSpan: columnNodes.length - rowLength,
                colspan: columnNodes.length - rowLength,
                index: rowLength,
                value: null,
                rendered: null,
                level: i,
                hasChildNodes: false,
                childNodes: [],
                textValue: '',
                prevKey: row[row.length - 1].key
            };
            row.push(placeholder);
        }
        i++;
    }
    return headerRows.map((childNodes, index)=>{
        let row = {
            type: 'headerrow',
            key: 'headerrow-' + index,
            index,
            value: null,
            rendered: null,
            level: 0,
            hasChildNodes: true,
            childNodes,
            textValue: ''
        };
        return row;
    });
}
class TableCollection extends (0, _gridCollection.GridCollection) {
    headerRows;
    columns;
    rowHeaderColumnKeys;
    body;
    _size = 0;
    constructor(nodes, prev, opts){
        let rowHeaderColumnKeys = new Set();
        let body = null;
        let columns = [];
        // Add cell for selection checkboxes if needed.
        if (opts?.showSelectionCheckboxes) {
            let rowHeaderColumn = {
                type: 'column',
                key: ROW_HEADER_COLUMN_KEY,
                value: null,
                textValue: '',
                level: 0,
                index: opts?.showDragButtons ? 1 : 0,
                hasChildNodes: false,
                rendered: null,
                childNodes: [],
                props: {
                    isSelectionCell: true
                }
            };
            columns.unshift(rowHeaderColumn);
        }
        // Add cell for drag buttons if needed.
        if (opts?.showDragButtons) {
            let rowHeaderColumn = {
                type: 'column',
                key: ROW_HEADER_COLUMN_KEY_DRAG,
                value: null,
                textValue: '',
                level: 0,
                index: 0,
                hasChildNodes: false,
                rendered: null,
                childNodes: [],
                props: {
                    isDragButtonCell: true
                }
            };
            columns.unshift(rowHeaderColumn);
        }
        let rows = [];
        let columnKeyMap = new Map();
        let visit = (node)=>{
            switch(node.type){
                case 'body':
                    body = node;
                    break;
                case 'column':
                    columnKeyMap.set(node.key, node);
                    if (!node.hasChildNodes) {
                        columns.push(node);
                        if (node.props.isRowHeader) rowHeaderColumnKeys.add(node.key);
                    }
                    break;
                case 'item':
                    rows.push(node);
                    return; // do not go into childNodes
            }
            for (let child of node.childNodes)visit(child);
        };
        for (let node of nodes)visit(node);
        let headerRows = buildHeaderRows(columnKeyMap, columns);
        headerRows.forEach((row, i)=>rows.splice(i, 0, row));
        super({
            columnCount: columns.length,
            items: rows,
            visitNode: (node)=>{
                node.column = columns[node.index];
                return node;
            }
        });
        this.columns = columns;
        this.rowHeaderColumnKeys = rowHeaderColumnKeys;
        this.body = body;
        this.headerRows = headerRows;
        this._size = [
            ...body.childNodes
        ].length;
        // Default row header column to the first one.
        if (this.rowHeaderColumnKeys.size === 0) {
            let col = this.columns.find((column)=>!column.props?.isDragButtonCell && !column.props?.isSelectionCell);
            if (col) this.rowHeaderColumnKeys.add(col.key);
        }
    }
    *[Symbol.iterator]() {
        yield* this.body.childNodes;
    }
    get size() {
        return this._size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        return node?.prevKey ?? null;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        return node?.nextKey ?? null;
    }
    getFirstKey() {
        return (0, _getChildNodes.getFirstItem)(this.body.childNodes)?.key ?? null;
    }
    getLastKey() {
        return (0, _getChildNodes.getLastItem)(this.body.childNodes)?.key ?? null;
    }
    getItem(key) {
        if (key === this.body.key) return this.body;
        return this.keyMap.get(key) ?? null;
    }
    at(idx) {
        const keys = [
            ...this.getKeys()
        ];
        return this.getItem(keys[idx]);
    }
    getChildren(key) {
        if (key === this.body.key) return this.body.childNodes;
        let node = this.getItem(key);
        if (node?.type === 'item') return [
            ...node.childNodes
        ].filter((n)=>n.type === 'cell');
        return super.getChildren(key);
    }
    getTextValue(key) {
        let row = this.getItem(key);
        if (!row) return '';
        // If the row has a textValue, use that.
        if (row.textValue) return row.textValue;
        // Otherwise combine the text of each of the row header columns.
        let rowHeaderColumnKeys = this.rowHeaderColumnKeys;
        if (rowHeaderColumnKeys) {
            let text = [];
            for (let cell of row.childNodes){
                let column = this.columns[cell.index];
                if (rowHeaderColumnKeys.has(column.key) && cell.textValue) text.push(cell.textValue);
                if (text.length === rowHeaderColumnKeys.size) break;
            }
            return text.join(' ');
        }
        return '';
    }
}

},{"../collections/getChildNodes":"9KbhA","../grid/GridCollection":"jOobZ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eGC13":[function(require,module,exports,__globalThis) {
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
 * Provides state management for a table component. Handles building a collection of columns and
 * rows from props. In addition, it tracks row selection and manages sort order changes.
 */ parcelHelpers.export(exports, "useTableState", ()=>useTableState);
/**
 * Filters a collection using the provided filter function and returns a new TableState.
 */ parcelHelpers.export(exports, "UNSTABLE_useFilteredTableState", ()=>UNSTABLE_useFilteredTableState);
var _useGridState = require("../grid/useGridState");
var _tableCollection = require("./TableCollection");
var _react = require("react");
var _useCollection = require("../collections/useCollection");
var _useControlledState = require("../utils/useControlledState");
const OPPOSITE_SORT_DIRECTION = {
    ascending: 'descending',
    descending: 'ascending'
};
function useTableState(props) {
    let [isKeyboardNavigationDisabled, setKeyboardNavigationDisabled] = (0, _react.useState)(false);
    let { selectionMode = 'none', showSelectionCheckboxes, showDragButtons, treeColumn = null } = props;
    let context = (0, _react.useMemo)(()=>({
            showSelectionCheckboxes: showSelectionCheckboxes && selectionMode !== 'none',
            showDragButtons: showDragButtons,
            selectionMode,
            columns: []
        }), // eslint-disable-next-line react-hooks/exhaustive-deps
    // oxlint-disable-next-line react/react-compiler, react-hooks/exhaustive-deps
    [
        props.children,
        showSelectionCheckboxes,
        selectionMode,
        showDragButtons
    ]);
    let collection = (0, _useCollection.useCollection)(props, (0, _react.useCallback)((nodes)=>new (0, _tableCollection.TableCollection)(nodes, null, context), [
        context
    ]), context);
    let { disabledKeys, selectionManager } = (0, _useGridState.useGridState)({
        ...props,
        collection,
        disabledBehavior: props.disabledBehavior || 'selection'
    });
    let [expandedKeys, setExpandedKeys] = (0, _useControlledState.useControlledState)(props.expandedKeys ? new Set(props.expandedKeys) : undefined, props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : new Set(), props.onExpandedChange);
    return {
        collection,
        disabledKeys,
        selectionManager,
        showSelectionCheckboxes: props.showSelectionCheckboxes || false,
        sortDescriptor: props.sortDescriptor ?? null,
        isKeyboardNavigationDisabled: collection.size === 0 || isKeyboardNavigationDisabled,
        setKeyboardNavigationDisabled,
        sort (columnKey, direction) {
            props.onSortChange?.({
                column: columnKey,
                direction: direction ?? (props.sortDescriptor?.column === columnKey ? OPPOSITE_SORT_DIRECTION[props.sortDescriptor.direction] : 'ascending')
            });
        },
        expandedKeys,
        toggleKey (key) {
            setExpandedKeys((keys)=>{
                let newKeys = new Set(keys);
                if (newKeys.has(key)) newKeys.delete(key);
                else newKeys.add(key);
                return newKeys;
            });
        },
        treeColumn
    };
}
function UNSTABLE_useFilteredTableState(state, filterFn) {
    let collection = (0, _react.useMemo)(()=>filterFn ? state.collection.filter(filterFn) : state.collection, [
        state.collection,
        filterFn
    ]);
    let selectionManager = state.selectionManager.withCollection(collection);
    // TODO: handle focus key reset? That logic is in useGridState
    return {
        ...state,
        collection,
        selectionManager
    };
}

},{"../grid/useGridState":"kXw87","./TableCollection":"hQgZU","react":"gOP0N","../collections/useCollection":"3hcm9","../utils/useControlledState":"8yNBD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dpdvP":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a table component. A table displays
 * data in rows and columns and enables a user to navigate its contents via directional navigation
 * keys, and optionally supports row selection and sorting.
 *
 * @param props - Props for the table.
 * @param state - State for the table, as returned by `useTableState`.
 * @param ref - The ref attached to the table element.
 */ parcelHelpers.export(exports, "useTable", ()=>useTable);
var _liveAnnouncer = require("../live-announcer/LiveAnnouncer");
var _useGrid = require("../grid/useGrid");
var _utils = require("./utils");
var _indexJs = require("../../intl/table/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mergeProps = require("../utils/mergeProps");
var _tableKeyboardDelegate = require("./TableKeyboardDelegate");
var _useCollator = require("../i18n/useCollator");
var _useDescription = require("../utils/useDescription");
var _useId = require("../utils/useId");
var _i18Nprovider = require("../i18n/I18nProvider");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
var _react = require("react");
var _useUpdateEffect = require("../utils/useUpdateEffect");
function useTable(props, state, ref) {
    let { keyboardDelegate, isVirtualized, layoutDelegate, layout } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = (0, _useCollator.useCollator)({
        usage: 'search',
        sensitivity: 'base'
    });
    let { direction } = (0, _i18Nprovider.useLocale)();
    let disabledBehavior = state.selectionManager.disabledBehavior;
    let delegate = (0, _react.useMemo)(()=>keyboardDelegate || new (0, _tableKeyboardDelegate.TableKeyboardDelegate)({
            collection: state.collection,
            disabledKeys: state.disabledKeys,
            disabledBehavior,
            ref,
            direction,
            collator,
            layoutDelegate,
            layout
        }), [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        disabledBehavior,
        ref,
        direction,
        collator,
        layoutDelegate,
        layout
    ]);
    let id = (0, _useId.useId)(props.id);
    (0, _utils.gridIds).set(state, id);
    let { gridProps } = (0, _useGrid.useGrid)({
        ...props,
        id,
        keyboardDelegate: delegate
    }, state, ref);
    // Override to include header rows
    if (isVirtualized) // oxlint-disable-next-line react/react-compiler
    gridProps['aria-rowcount'] = state.collection.size + state.collection.headerRows.length;
    if (state.treeColumn != null) // oxlint-disable-next-line react/react-compiler
    gridProps.role = 'treegrid';
    let { column, direction: sortDirection } = state.sortDescriptor || {};
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/table');
    let sortDescription = (0, _react.useMemo)(()=>{
        let columnName = state.collection.columns.find((c)=>c.key === column)?.textValue ?? '';
        return sortDirection && column ? stringFormatter.format(`${sortDirection}Sort`, {
            columnName
        }) : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        sortDirection,
        column,
        state.collection.columns
    ]);
    let descriptionProps = (0, _useDescription.useDescription)(sortDescription);
    // Only announce after initial render, tabbing to the table will tell you the initial sort info already
    (0, _useUpdateEffect.useUpdateEffect)(()=>{
        if (sortDescription) (0, _liveAnnouncer.announce)(sortDescription, 'assertive', 500);
    }, [
        sortDescription
    ]);
    return {
        gridProps: (0, _mergeProps.mergeProps)(gridProps, descriptionProps, {
            // merge sort description with long press information
            'aria-describedby': [
                descriptionProps['aria-describedby'],
                gridProps['aria-describedby']
            ].filter(Boolean).join(' ')
        })
    };
}

},{"../live-announcer/LiveAnnouncer":"gQ2k2","../grid/useGrid":"5DzlL","./utils":"kyAxC","../../intl/table/index.js":"9Q91M","../utils/mergeProps":"jycxS","./TableKeyboardDelegate":"igHBE","../i18n/useCollator":"ghoIN","../utils/useDescription":"1bivM","../utils/useId":"fQAcb","../i18n/I18nProvider":"czGuc","../i18n/useLocalizedStringFormatter":"8lll3","react":"gOP0N","../utils/useUpdateEffect":"9WaKh","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kyAxC":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "gridIds", ()=>gridIds);
parcelHelpers.export(exports, "getColumnHeaderId", ()=>getColumnHeaderId);
parcelHelpers.export(exports, "getCellId", ()=>getCellId);
parcelHelpers.export(exports, "getRowLabelledBy", ()=>getRowLabelledBy);
const gridIds = new WeakMap();
function normalizeKey(key) {
    if (typeof key === 'string') return key.replace(/\s*/g, '');
    return '' + key;
}
function getColumnHeaderId(state, columnKey) {
    let gridId = gridIds.get(state);
    if (!gridId) throw new Error('Unknown grid');
    return `${gridId}-${normalizeKey(columnKey)}`;
}
function getCellId(state, rowKey, columnKey) {
    let gridId = gridIds.get(state);
    if (!gridId) throw new Error('Unknown grid');
    return `${gridId}-${normalizeKey(rowKey)}-${normalizeKey(columnKey)}`;
}
function getRowLabelledBy(state, rowKey) {
    // A row is labelled by it's row headers.
    return [
        ...state.collection.rowHeaderColumnKeys
    ].map((columnKey)=>getCellId(state, rowKey, columnKey)).join(' ');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9Q91M":[function(require,module,exports,__globalThis) {
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

},{"./ar-AE.js":"2N3qp","./bg-BG.js":"9KkHu","./cs-CZ.js":"4ZnYL","./da-DK.js":"5Pq9b","./de-DE.js":"4or8s","./el-GR.js":"5PZZu","./en-US.js":"2yxwc","./es-ES.js":"g7YvC","./et-EE.js":"idCRe","./fi-FI.js":"lBAIn","./fr-FR.js":"5OkrK","./he-IL.js":"9x1ao","./hr-HR.js":"3Q8ZF","./hu-HU.js":"5efFq","./it-IT.js":"6bCVg","./ja-JP.js":"994VM","./ko-KR.js":"3ULu6","./lt-LT.js":"jsz6b","./lv-LV.js":"jES3O","./nb-NO.js":"1C7WY","./nl-NL.js":"4cPRb","./pl-PL.js":"7oiZc","./pt-BR.js":"aOwYP","./pt-PT.js":"8pxA8","./ro-RO.js":"lcJQ9","./ru-RU.js":"hIefq","./sk-SK.js":"jWitj","./sl-SI.js":"bwIsh","./sr-SP.js":"ij8xy","./sv-SE.js":"50xXM","./tr-TR.js":"kO78i","./uk-UA.js":"6NTTs","./zh-CN.js":"5IpdM","./zh-TW.js":"5ZxPt","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2N3qp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `\u{62A}\u{635}\u{627}\u{639}\u{62F}\u{64A}`,
    "ascendingSort": (args)=>`\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62D}\u{633}\u{628} \u{627}\u{644}\u{639}\u{645}\u{648}\u{62F} ${args.columnName} \u{628}\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62A}\u{635}\u{627}\u{639}\u{62F}\u{64A}`,
    "collapse": `\u{637}\u{64A}`,
    "columnSize": (args)=>`${args.value} \u{628}\u{627}\u{644}\u{628}\u{643}\u{633}\u{644}`,
    "descending": `\u{62A}\u{646}\u{627}\u{632}\u{644}\u{64A}`,
    "descendingSort": (args)=>`\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62D}\u{633}\u{628} \u{627}\u{644}\u{639}\u{645}\u{648}\u{62F} ${args.columnName} \u{628}\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62A}\u{646}\u{627}\u{632}\u{644}\u{64A}`,
    "expand": `\u{62A}\u{645}\u{62F}\u{64A}\u{62F}`,
    "resizerDescription": `\u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} \u{645}\u{641}\u{62A}\u{627}\u{62D} Enter \u{644}\u{628}\u{62F}\u{621} \u{62A}\u{63A}\u{64A}\u{64A}\u{631} \u{627}\u{644}\u{62D}\u{62C}\u{645}`,
    "select": `\u{62A}\u{62D}\u{62F}\u{64A}\u{62F}`,
    "selectAll": `\u{62A}\u{62D}\u{62F}\u{64A}\u{62F} \u{627}\u{644}\u{643}\u{644}`,
    "sortable": `\u{639}\u{645}\u{648}\u{62F} \u{642}\u{627}\u{628}\u{644} \u{644}\u{644}\u{62A}\u{631}\u{62A}\u{64A}\u{628}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9KkHu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `\u{432}\u{44A}\u{437}\u{445}\u{43E}\u{434}\u{44F}\u{449}`,
    "ascendingSort": (args)=>`\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{430}\u{43D}\u{43E} \u{43F}\u{43E} \u{43A}\u{43E}\u{43B}\u{43E}\u{43D}\u{430} ${args.columnName} \u{432}\u{44A}\u{432} \u{432}\u{44A}\u{437}\u{445}\u{43E}\u{434}\u{44F}\u{449} \u{440}\u{435}\u{434}`,
    "collapse": `\u{421}\u{432}\u{438}\u{432}\u{430}\u{43D}\u{435}`,
    "columnSize": (args)=>`${args.value} \u{43F}\u{438}\u{43A}\u{441}\u{435}\u{43B}\u{430}`,
    "descending": `\u{43D}\u{438}\u{437}\u{445}\u{43E}\u{434}\u{44F}\u{449}`,
    "descendingSort": (args)=>`\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{430}\u{43D}\u{43E} \u{43F}\u{43E} \u{43A}\u{43E}\u{43B}\u{43E}\u{43D}\u{430} ${args.columnName} \u{432} \u{43D}\u{438}\u{437}\u{445}\u{43E}\u{434}\u{44F}\u{449} \u{440}\u{435}\u{434}`,
    "expand": `\u{420}\u{430}\u{437}\u{448}\u{438}\u{440}\u{44F}\u{432}\u{430}\u{43D}\u{435}`,
    "resizerDescription": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{201E}Enter\u{201C}, \u{437}\u{430} \u{434}\u{430} \u{437}\u{430}\u{43F}\u{43E}\u{447}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{430} \u{43F}\u{440}\u{435}\u{43E}\u{440}\u{430}\u{437}\u{43C}\u{435}\u{440}\u{44F}\u{432}\u{430}\u{442}\u{435}`,
    "select": `\u{418}\u{437}\u{431}\u{435}\u{440}\u{435}\u{442}\u{435}`,
    "selectAll": `\u{418}\u{437}\u{431}\u{435}\u{440}\u{435}\u{442}\u{435} \u{432}\u{441}\u{438}\u{447}\u{43A}\u{43E}`,
    "sortable": `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{430}\u{449}\u{430} \u{43A}\u{43E}\u{43B}\u{43E}\u{43D}\u{430}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4ZnYL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `vzestupn\u{11B}`,
    "ascendingSort": (args)=>`\u{159}azeno vzestupn\u{11B} podle sloupce ${args.columnName}`,
    "collapse": `Sbalit`,
    "columnSize": (args)=>`${args.value} pixel\u{16F}`,
    "descending": `sestupn\u{11B}`,
    "descendingSort": (args)=>`\u{159}azeno sestupn\u{11B} podle sloupce ${args.columnName}`,
    "expand": `Rozt\xe1hnout`,
    "resizerDescription": `Stisknut\xedm kl\xe1vesy Enter za\u{10D}nete m\u{11B}nit velikost`,
    "select": `Vybrat`,
    "selectAll": `Vybrat v\u{161}e`,
    "sortable": `sloupec s mo\u{17E}nost\xed \u{159}azen\xed`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5Pq9b":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `stigende`,
    "ascendingSort": (args)=>`sorteret efter kolonne ${args.columnName} i stigende r\xe6kkef\xf8lge`,
    "collapse": `Skjul`,
    "columnSize": (args)=>`${args.value} pixels`,
    "descending": `faldende`,
    "descendingSort": (args)=>`sorteret efter kolonne ${args.columnName} i faldende r\xe6kkef\xf8lge`,
    "expand": `Udvid`,
    "resizerDescription": `Tryk p\xe5 Enter for at \xe6ndre st\xf8rrelse`,
    "select": `V\xe6lg`,
    "selectAll": `V\xe6lg alle`,
    "sortable": `sorterbar kolonne`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4or8s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `aufsteigend`,
    "ascendingSort": (args)=>`sortiert nach Spalte ${args.columnName} in aufsteigender Reihenfolge`,
    "collapse": `Reduzieren`,
    "columnSize": (args)=>`${args.value} Pixel`,
    "descending": `absteigend`,
    "descendingSort": (args)=>`sortiert nach Spalte ${args.columnName} in absteigender Reihenfolge`,
    "expand": `Erweitern`,
    "resizerDescription": `Eingabetaste zum Starten der Gr\xf6\xdfen\xe4nderung dr\xfccken`,
    "select": `Ausw\xe4hlen`,
    "selectAll": `Alles ausw\xe4hlen`,
    "sortable": `sortierbare Spalte`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5PZZu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `\u{3B1}\u{3CD}\u{3BE}\u{3BF}\u{3C5}\u{3C3}\u{3B1}`,
    "ascendingSort": (args)=>`\u{3B4}\u{3B9}\u{3B1}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B1}\u{3BD}\u{3AC} \u{3C3}\u{3C4}\u{3AE}\u{3BB}\u{3B7} ${args.columnName} \u{3C3}\u{3B5} \u{3B1}\u{3CD}\u{3BE}\u{3BF}\u{3C5}\u{3C3}\u{3B1} \u{3C3}\u{3B5}\u{3B9}\u{3C1}\u{3AC}`,
    "collapse": `\u{3A3}\u{3CD}\u{3BC}\u{3C0}\u{3C4}\u{3C5}\u{3BE}\u{3B7}`,
    "columnSize": (args)=>`${args.value} pixel`,
    "descending": `\u{3C6}\u{3B8}\u{3AF}\u{3BD}\u{3BF}\u{3C5}\u{3C3}\u{3B1}`,
    "descendingSort": (args)=>`\u{3B4}\u{3B9}\u{3B1}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B1}\u{3BD}\u{3AC} \u{3C3}\u{3C4}\u{3AE}\u{3BB}\u{3B7} ${args.columnName} \u{3C3}\u{3B5} \u{3C6}\u{3B8}\u{3AF}\u{3BD}\u{3BF}\u{3C5}\u{3C3}\u{3B1} \u{3C3}\u{3B5}\u{3B9}\u{3C1}\u{3AC}`,
    "expand": `\u{391}\u{3BD}\u{3AC}\u{3C0}\u{3C4}\u{3C5}\u{3BE}\u{3B7}`,
    "resizerDescription": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Enter \u{3B3}\u{3B9}\u{3B1} \u{3AD}\u{3BD}\u{3B1}\u{3C1}\u{3BE}\u{3B7} \u{3C4}\u{3B7}\u{3C2} \u{3B1}\u{3BB}\u{3BB}\u{3B1}\u{3B3}\u{3AE}\u{3C2} \u{3BC}\u{3B5}\u{3B3}\u{3AD}\u{3B8}\u{3BF}\u{3C5}\u{3C2}`,
    "select": `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,
    "selectAll": `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3CC}\u{3BB}\u{3C9}\u{3BD}`,
    "sortable": `\u{3A3}\u{3C4}\u{3AE}\u{3BB}\u{3B7} \u{3B4}\u{3B9}\u{3B1}\u{3BB}\u{3BF}\u{3B3}\u{3AE}\u{3C2}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2yxwc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "select": `Select`,
    "selectAll": `Select All`,
    "sortable": `sortable column`,
    "ascending": `ascending`,
    "descending": `descending`,
    "ascendingSort": (args)=>`sorted by column ${args.columnName} in ascending order`,
    "descendingSort": (args)=>`sorted by column ${args.columnName} in descending order`,
    "columnSize": (args)=>`${args.value} pixels`,
    "resizerDescription": `Press Enter to start resizing`,
    "expand": `Expand`,
    "collapse": `Collapse`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"g7YvC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `ascendente`,
    "ascendingSort": (args)=>`ordenado por columna ${args.columnName} en sentido ascendente`,
    "collapse": `Contraer`,
    "columnSize": (args)=>`${args.value} p\xedxeles`,
    "descending": `descendente`,
    "descendingSort": (args)=>`ordenado por columna ${args.columnName} en orden descendente`,
    "expand": `Ampliar`,
    "resizerDescription": `Pulse Intro para empezar a redimensionar`,
    "select": `Seleccionar`,
    "selectAll": `Seleccionar todos`,
    "sortable": `columna ordenable`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"idCRe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `t\xf5usev j\xe4rjestus`,
    "ascendingSort": (args)=>`sorditud veeru j\xe4rgi ${args.columnName} t\xf5usvas j\xe4rjestuses`,
    "collapse": `Ahenda`,
    "columnSize": (args)=>`${args.value} pikslit`,
    "descending": `laskuv j\xe4rjestus`,
    "descendingSort": (args)=>`sorditud veeru j\xe4rgi ${args.columnName} laskuvas j\xe4rjestuses`,
    "expand": `Laienda`,
    "resizerDescription": `Suuruse muutmise alustamiseks vajutage klahvi Enter`,
    "select": `Vali`,
    "selectAll": `Vali k\xf5ik`,
    "sortable": `sorditav veerg`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lBAIn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `nouseva`,
    "ascendingSort": (args)=>`lajiteltu sarakkeen ${args.columnName} mukaan nousevassa j\xe4rjestyksess\xe4`,
    "collapse": `Pienenn\xe4`,
    "columnSize": (args)=>`${args.value} pikseli\xe4`,
    "descending": `laskeva`,
    "descendingSort": (args)=>`lajiteltu sarakkeen ${args.columnName} mukaan laskevassa j\xe4rjestyksess\xe4`,
    "expand": `Laajenna`,
    "resizerDescription": `Aloita koon muutos painamalla Enter-n\xe4pp\xe4int\xe4`,
    "select": `Valitse`,
    "selectAll": `Valitse kaikki`,
    "sortable": `lajiteltava sarake`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5OkrK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `croissant`,
    "ascendingSort": (args)=>`tri\xe9 en fonction de la colonne\xa0${args.columnName} par ordre croissant`,
    "collapse": `R\xe9duire`,
    "columnSize": (args)=>`${args.value}\xa0pixels`,
    "descending": `d\xe9croissant`,
    "descendingSort": (args)=>`tri\xe9 en fonction de la colonne\xa0${args.columnName} par ordre d\xe9croissant`,
    "expand": `D\xe9velopper`,
    "resizerDescription": `Appuyez sur Entr\xe9e pour commencer le redimensionnement.`,
    "select": `S\xe9lectionner`,
    "selectAll": `S\xe9lectionner tout`,
    "sortable": `colonne triable`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9x1ao":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `\u{5E2}\u{5D5}\u{5DC}\u{5D4}`,
    "ascendingSort": (args)=>`\u{5DE}\u{5D5}\u{5D9}\u{5DF} \u{5DC}\u{5E4}\u{5D9} \u{5E2}\u{5DE}\u{5D5}\u{5D3}\u{5D4} ${args.columnName} \u{5D1}\u{5E1}\u{5D3}\u{5E8} \u{5E2}\u{5D5}\u{5DC}\u{5D4}`,
    "collapse": `\u{5DB}\u{5D5}\u{5D5}\u{5E5}`,
    "columnSize": (args)=>`${args.value} \u{5E4}\u{5D9}\u{5E7}\u{5E1}\u{5DC}\u{5D9}\u{5DD}`,
    "descending": `\u{5D9}\u{5D5}\u{5E8}\u{5D3}`,
    "descendingSort": (args)=>`\u{5DE}\u{5D5}\u{5D9}\u{5DF} \u{5DC}\u{5E4}\u{5D9} \u{5E2}\u{5DE}\u{5D5}\u{5D3}\u{5D4} ${args.columnName} \u{5D1}\u{5E1}\u{5D3}\u{5E8} \u{5D9}\u{5D5}\u{5E8}\u{5D3}`,
    "expand": `\u{5D4}\u{5E8}\u{5D7}\u{5D1}`,
    "resizerDescription": `\u{5D4}\u{5E7}\u{5E9} Enter \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E9}\u{5E0}\u{5D5}\u{5EA} \u{5D0}\u{5EA} \u{5D4}\u{5D2}\u{5D5}\u{5D3}\u{5DC}`,
    "select": `\u{5D1}\u{5D7}\u{5E8}`,
    "selectAll": `\u{5D1}\u{5D7}\u{5E8} \u{5D4}\u{5DB}\u{5D5}\u{5DC}`,
    "sortable": `\u{5E2}\u{5DE}\u{5D5}\u{5D3}\u{5D4} \u{5E9}\u{5E0}\u{5D9}\u{5EA}\u{5DF} \u{5DC}\u{5DE}\u{5D9}\u{5D9}\u{5DF}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3Q8ZF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `rastu\u{107}i`,
    "ascendingSort": (args)=>`razvrstano po stupcima ${args.columnName} rastu\u{107}em redoslijedom`,
    "collapse": `Sa\u{17E}mi`,
    "columnSize": (args)=>`${args.value} piksela`,
    "descending": `padaju\u{107}i`,
    "descendingSort": (args)=>`razvrstano po stupcima ${args.columnName} padaju\u{107}im redoslijedom`,
    "expand": `Pro\u{161}iri`,
    "resizerDescription": `Pritisnite Enter da biste zapo\u{10D}eli promenu veli\u{10D}ine`,
    "select": `Odaberite`,
    "selectAll": `Odaberite sve`,
    "sortable": `stupac koji se mo\u{17E}e razvrstati`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5efFq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `n\xf6vekv\u{151}`,
    "ascendingSort": (args)=>`rendezve a(z) ${args.columnName} oszlop szerint, n\xf6vekv\u{151} sorrendben`,
    "collapse": `\xd6sszecsuk\xe1s`,
    "columnSize": (args)=>`${args.value} k\xe9ppont`,
    "descending": `cs\xf6kken\u{151}`,
    "descendingSort": (args)=>`rendezve a(z) ${args.columnName} oszlop szerint, cs\xf6kken\u{151} sorrendben`,
    "expand": `Kibont\xe1s`,
    "resizerDescription": `Nyomja le az Enter billenty\u{171}t az \xe1tm\xe9retez\xe9s megkezd\xe9s\xe9hez`,
    "select": `Kijel\xf6l\xe9s`,
    "selectAll": `\xd6sszes kijel\xf6l\xe9se`,
    "sortable": `rendezend\u{151} oszlop`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6bCVg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `crescente`,
    "ascendingSort": (args)=>`in ordine crescente in base alla colonna ${args.columnName}`,
    "collapse": `Comprimi`,
    "columnSize": (args)=>`${args.value} pixel`,
    "descending": `decrescente`,
    "descendingSort": (args)=>`in ordine decrescente in base alla colonna ${args.columnName}`,
    "expand": `Espandi`,
    "resizerDescription": `Premi Invio per iniziare a ridimensionare`,
    "select": `Seleziona`,
    "selectAll": `Seleziona tutto`,
    "sortable": `colonna ordinabile`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"994VM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `\u{6607}\u{9806}`,
    "ascendingSort": (args)=>`\u{5217} ${args.columnName} \u{3092}\u{6607}\u{9806}\u{3067}\u{4E26}\u{3079}\u{66FF}\u{3048}`,
    "collapse": `\u{6298}\u{308A}\u{305F}\u{305F}\u{3080}`,
    "columnSize": (args)=>`${args.value} \u{30D4}\u{30AF}\u{30BB}\u{30EB}`,
    "descending": `\u{964D}\u{9806}`,
    "descendingSort": (args)=>`\u{5217} ${args.columnName} \u{3092}\u{964D}\u{9806}\u{3067}\u{4E26}\u{3079}\u{66FF}\u{3048}`,
    "expand": `\u{5C55}\u{958B}`,
    "resizerDescription": `Enter \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30B5}\u{30A4}\u{30BA}\u{5909}\u{66F4}\u{3092}\u{958B}\u{59CB}`,
    "select": `\u{9078}\u{629E}`,
    "selectAll": `\u{3059}\u{3079}\u{3066}\u{9078}\u{629E}`,
    "sortable": `\u{4E26}\u{3079}\u{66FF}\u{3048}\u{53EF}\u{80FD}\u{306A}\u{5217}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3ULu6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `\u{C624}\u{B984}\u{CC28}\u{C21C}`,
    "ascendingSort": (args)=>`${args.columnName} \u{C5F4}\u{C744} \u{AE30}\u{C900}\u{C73C}\u{B85C} \u{C624}\u{B984}\u{CC28}\u{C21C}\u{C73C}\u{B85C} \u{C815}\u{B82C}\u{B428}`,
    "collapse": `\u{C811}\u{AE30}`,
    "columnSize": (args)=>`${args.value} \u{D53D}\u{C140}`,
    "descending": `\u{B0B4}\u{B9BC}\u{CC28}\u{C21C}`,
    "descendingSort": (args)=>`${args.columnName} \u{C5F4}\u{C744} \u{AE30}\u{C900}\u{C73C}\u{B85C} \u{B0B4}\u{B9BC}\u{CC28}\u{C21C}\u{C73C}\u{B85C} \u{C815}\u{B82C}\u{B428}`,
    "expand": `\u{D3BC}\u{CE58}\u{AE30}`,
    "resizerDescription": `\u{D06C}\u{AE30} \u{C870}\u{C815}\u{C744} \u{C2DC}\u{C791}\u{D558}\u{B824}\u{BA74} Enter\u{B97C} \u{B204}\u{B974}\u{C138}\u{C694}.`,
    "select": `\u{C120}\u{D0DD}`,
    "selectAll": `\u{BAA8}\u{B450} \u{C120}\u{D0DD}`,
    "sortable": `\u{C815}\u{B82C} \u{AC00}\u{B2A5}\u{D55C} \u{C5F4}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jsz6b":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `did\u{117}jan\u{10D}ia tvarka`,
    "ascendingSort": (args)=>`surikiuota pagal stulpel\u{12F} ${args.columnName} did\u{117}jan\u{10D}ia tvarka`,
    "collapse": `Sutraukti`,
    "columnSize": (args)=>`${args.value} piks.`,
    "descending": `ma\u{17E}\u{117}jan\u{10D}ia tvarka`,
    "descendingSort": (args)=>`surikiuota pagal stulpel\u{12F} ${args.columnName} ma\u{17E}\u{117}jan\u{10D}ia tvarka`,
    "expand": `I\u{161}skleisti`,
    "resizerDescription": `Paspauskite \u{201E}Enter\u{201C}, kad prad\u{117}tum\u{117}te keisti dyd\u{12F}`,
    "select": `Pasirinkti`,
    "selectAll": `Pasirinkti visk\u{105}`,
    "sortable": `rikiuojamas stulpelis`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jES3O":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `augo\u{161}\u{101} sec\u{12B}b\u{101}`,
    "ascendingSort": (args)=>`k\u{101}rtots p\u{113}c kolonnas ${args.columnName} augo\u{161}\u{101} sec\u{12B}b\u{101}`,
    "collapse": `Sak\u{13C}aut`,
    "columnSize": (args)=>`${args.value} pikse\u{13C}i`,
    "descending": `dilsto\u{161}\u{101} sec\u{12B}b\u{101}`,
    "descendingSort": (args)=>`k\u{101}rtots p\u{113}c kolonnas ${args.columnName} dilsto\u{161}\u{101} sec\u{12B}b\u{101}`,
    "expand": `Izv\u{113}rst`,
    "resizerDescription": `Nospiediet Enter, lai s\u{101}ktu izm\u{113}ru main\u{12B}\u{161}anu`,
    "select": `Atlas\u{12B}t`,
    "selectAll": `Atlas\u{12B}t visu`,
    "sortable": `k\u{101}rtojam\u{101} kolonna`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1C7WY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `stigende`,
    "ascendingSort": (args)=>`sortert etter kolonne ${args.columnName} i stigende rekkef\xf8lge`,
    "collapse": `Skjul`,
    "columnSize": (args)=>`${args.value} piksler`,
    "descending": `synkende`,
    "descendingSort": (args)=>`sortert etter kolonne ${args.columnName} i synkende rekkef\xf8lge`,
    "expand": `Utvid`,
    "resizerDescription": `Trykk p\xe5 Enter for \xe5 starte st\xf8rrelsesendring`,
    "select": `Velg`,
    "selectAll": `Velg alle`,
    "sortable": `kolonne som kan sorteres`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4cPRb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `oplopend`,
    "ascendingSort": (args)=>`gesorteerd in oplopende volgorde in kolom ${args.columnName}`,
    "collapse": `Samenvouwen`,
    "columnSize": (args)=>`${args.value} pixels`,
    "descending": `aflopend`,
    "descendingSort": (args)=>`gesorteerd in aflopende volgorde in kolom ${args.columnName}`,
    "expand": `Uitvouwen`,
    "resizerDescription": `Druk op Enter om het formaat te wijzigen`,
    "select": `Selecteren`,
    "selectAll": `Alles selecteren`,
    "sortable": `sorteerbare kolom`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7oiZc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `rosn\u{105}co`,
    "ascendingSort": (args)=>`posortowano wed\u{142}ug kolumny ${args.columnName} w porz\u{105}dku rosn\u{105}cym`,
    "collapse": `Zwi\u{144}`,
    "columnSize": (args)=>`Liczba pikseli: ${args.value}`,
    "descending": `malej\u{105}co`,
    "descendingSort": (args)=>`posortowano wed\u{142}ug kolumny ${args.columnName} w porz\u{105}dku malej\u{105}cym`,
    "expand": `Rozwi\u{144}`,
    "resizerDescription": `Naci\u{15B}nij Enter, aby rozpocz\u{105}\u{107} zmienianie rozmiaru`,
    "select": `Zaznacz`,
    "selectAll": `Zaznacz wszystko`,
    "sortable": `kolumna z mo\u{17C}liwo\u{15B}ci\u{105} sortowania`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aOwYP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `crescente`,
    "ascendingSort": (args)=>`classificado pela coluna ${args.columnName} em ordem crescente`,
    "collapse": `Recolher`,
    "columnSize": (args)=>`${args.value} pixels`,
    "descending": `decrescente`,
    "descendingSort": (args)=>`classificado pela coluna ${args.columnName} em ordem decrescente`,
    "expand": `Expandir`,
    "resizerDescription": `Pressione Enter para come\xe7ar a redimensionar`,
    "select": `Selecionar`,
    "selectAll": `Selecionar tudo`,
    "sortable": `coluna classific\xe1vel`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8pxA8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `ascendente`,
    "ascendingSort": (args)=>`Ordenar por coluna ${args.columnName} em ordem ascendente`,
    "collapse": `Colapsar`,
    "columnSize": (args)=>`${args.value} pixels`,
    "descending": `descendente`,
    "descendingSort": (args)=>`Ordenar por coluna ${args.columnName} em ordem descendente`,
    "expand": `Expandir`,
    "resizerDescription": `Prima Enter para iniciar o redimensionamento`,
    "select": `Selecionar`,
    "selectAll": `Selecionar tudo`,
    "sortable": `Coluna orden\xe1vel`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lcJQ9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `cresc\u{103}toare`,
    "ascendingSort": (args)=>`sortate dup\u{103} coloana ${args.columnName} \xeen ordine cresc\u{103}toare`,
    "collapse": `Restr\xe2nge\u{21B}i`,
    "columnSize": (args)=>`${args.value} pixeli`,
    "descending": `descresc\u{103}toare`,
    "descendingSort": (args)=>`sortate dup\u{103} coloana ${args.columnName} \xeen ordine descresc\u{103}toare`,
    "expand": `Extinde\u{21B}i`,
    "resizerDescription": `Ap\u{103}sa\u{21B}i pe Enter pentru a \xeencepe redimensionarea`,
    "select": `Selectare`,
    "selectAll": `Selectare total\u{103}`,
    "sortable": `coloan\u{103} sortabil\u{103}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hIefq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `\u{432}\u{43E}\u{437}\u{440}\u{430}\u{441}\u{442}\u{430}\u{43D}\u{438}\u{435}`,
    "ascendingSort": (args)=>`\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{441}\u{442}\u{43E}\u{43B}\u{431}\u{435}\u{446} ${args.columnName} \u{432} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{435} \u{432}\u{43E}\u{437}\u{440}\u{430}\u{441}\u{442}\u{430}\u{43D}\u{438}\u{44F}`,
    "collapse": `\u{421}\u{432}\u{435}\u{440}\u{43D}\u{443}\u{442}\u{44C}`,
    "columnSize": (args)=>`${args.value} \u{43F}\u{438}\u{43A}\u{441}.`,
    "descending": `\u{443}\u{431}\u{44B}\u{432}\u{430}\u{43D}\u{438}\u{435}`,
    "descendingSort": (args)=>`\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{441}\u{442}\u{43E}\u{43B}\u{431}\u{435}\u{446} ${args.columnName} \u{432} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{435} \u{443}\u{431}\u{44B}\u{432}\u{430}\u{43D}\u{438}\u{44F}`,
    "expand": `\u{420}\u{430}\u{437}\u{432}\u{435}\u{440}\u{43D}\u{443}\u{442}\u{44C}`,
    "resizerDescription": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Enter \u{434}\u{43B}\u{44F} \u{43D}\u{430}\u{447}\u{430}\u{43B}\u{430} \u{438}\u{437}\u{43C}\u{435}\u{43D}\u{435}\u{43D}\u{438}\u{44F} \u{440}\u{430}\u{437}\u{43C}\u{435}\u{440}\u{43E}\u{432}`,
    "select": `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{442}\u{44C}`,
    "selectAll": `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{442}\u{44C} \u{432}\u{441}\u{435}`,
    "sortable": `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{443}\u{435}\u{43C}\u{44B}\u{439} \u{441}\u{442}\u{43E}\u{43B}\u{431}\u{435}\u{446}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jWitj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `vzostupne`,
    "ascendingSort": (args)=>`zoraden\xe9 zostupne pod\u{13E}a st\u{13A}pca ${args.columnName}`,
    "collapse": `Zbali\u{165}`,
    "columnSize": (args)=>`Po\u{10D}et pixelov: ${args.value}`,
    "descending": `zostupne`,
    "descendingSort": (args)=>`zoraden\xe9 zostupne pod\u{13E}a st\u{13A}pca ${args.columnName}`,
    "expand": `Rozbali\u{165}`,
    "resizerDescription": `Stla\u{10D}en\xedm kl\xe1vesu Enter za\u{10D}nete zmenu ve\u{13E}kosti`,
    "select": `Vybra\u{165}`,
    "selectAll": `Vybra\u{165} v\u{161}etko`,
    "sortable": `zoradite\u{13E}n\xfd st\u{13A}pec`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bwIsh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `nara\u{161}\u{10D}ajo\u{10D}e`,
    "ascendingSort": (args)=>`razvr\u{161}\u{10D}eno po stolpcu ${args.columnName} v nara\u{161}\u{10D}ajo\u{10D}em vrstnem redu`,
    "collapse": `Strni`,
    "columnSize": (args)=>`${args.value} slikovnih pik`,
    "descending": `padajo\u{10D}e`,
    "descendingSort": (args)=>`razvr\u{161}\u{10D}eno po stolpcu ${args.columnName} v padajo\u{10D}em vrstnem redu`,
    "expand": `Raz\u{161}iri`,
    "resizerDescription": `Pritisnite tipko Enter da za\u{10D}nete spreminjati velikost`,
    "select": `Izberite`,
    "selectAll": `Izberite vse`,
    "sortable": `razvrstljivi stolpec`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ij8xy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `rastu\u{107}i`,
    "ascendingSort": (args)=>`sortirano po kolonama ${args.columnName} rastu\u{107}im redosledom`,
    "collapse": `Skupi`,
    "columnSize": (args)=>`${args.value} piksela`,
    "descending": `padaju\u{107}i`,
    "descendingSort": (args)=>`sortirano po kolonama ${args.columnName} padaju\u{107}im redosledom`,
    "expand": `Pro\u{161}iri`,
    "resizerDescription": `Pritisnite Enter da biste zapo\u{10D}eli promenu veli\u{10D}ine`,
    "select": `Izaberite`,
    "selectAll": `Izaberite sve`,
    "sortable": `kolona koja se mo\u{17E}e sortirati`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"50xXM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `stigande`,
    "ascendingSort": (args)=>`sorterat p\xe5 kolumn ${args.columnName} i stigande ordning`,
    "collapse": `D\xf6lj`,
    "columnSize": (args)=>`${args.value} pixlar`,
    "descending": `fallande`,
    "descendingSort": (args)=>`sorterat p\xe5 kolumn ${args.columnName} i fallande ordning`,
    "expand": `Expandera`,
    "resizerDescription": `Tryck p\xe5 Retur f\xf6r att b\xf6rja \xe4ndra storlek`,
    "select": `Markera`,
    "selectAll": `Markera allt`,
    "sortable": `sorterbar kolumn`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kO78i":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `artan s\u{131}rada`,
    "ascendingSort": (args)=>`${args.columnName} s\xfctuna g\xf6re artan d\xfczende s\u{131}rala`,
    "collapse": `Daralt`,
    "columnSize": (args)=>`${args.value} piksel`,
    "descending": `azalan s\u{131}rada`,
    "descendingSort": (args)=>`${args.columnName} s\xfctuna g\xf6re azalan d\xfczende s\u{131}rala`,
    "expand": `Geni\u{15F}let`,
    "resizerDescription": `Yeniden boyutland\u{131}rmak i\xe7in Enter'a bas\u{131}n`,
    "select": `Se\xe7`,
    "selectAll": `T\xfcm\xfcn\xfc Se\xe7`,
    "sortable": `S\u{131}ralanabilir s\xfctun`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6NTTs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `\u{432}\u{438}\u{441}\u{445}\u{456}\u{434}\u{43D}\u{438}\u{439}`,
    "ascendingSort": (args)=>`\u{432}\u{456}\u{434}\u{441}\u{43E}\u{440}\u{442}\u{43E}\u{432}\u{430}\u{43D}\u{43E} \u{437}\u{430} \u{441}\u{442}\u{43E}\u{432}\u{43F}\u{446}\u{435}\u{43C} ${args.columnName} \u{443} \u{432}\u{438}\u{441}\u{445}\u{456}\u{434}\u{43D}\u{43E}\u{43C}\u{443} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{443}`,
    "collapse": `\u{417}\u{433}\u{43E}\u{440}\u{43D}\u{443}\u{442}\u{438}`,
    "columnSize": (args)=>`${args.value} \u{43F}\u{456}\u{43A}\u{441}.`,
    "descending": `\u{43D}\u{438}\u{437}\u{445}\u{456}\u{434}\u{43D}\u{438}\u{439}`,
    "descendingSort": (args)=>`\u{432}\u{456}\u{434}\u{441}\u{43E}\u{440}\u{442}\u{43E}\u{432}\u{430}\u{43D}\u{43E} \u{437}\u{430} \u{441}\u{442}\u{43E}\u{432}\u{43F}\u{446}\u{435}\u{43C} ${args.columnName} \u{443} \u{43D}\u{438}\u{437}\u{445}\u{456}\u{434}\u{43D}\u{43E}\u{43C}\u{443} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{443}`,
    "expand": `\u{420}\u{43E}\u{437}\u{433}\u{43E}\u{440}\u{43D}\u{443}\u{442}\u{438}`,
    "resizerDescription": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Enter, \u{449}\u{43E}\u{431} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{438} \u{437}\u{43C}\u{456}\u{43D}\u{443} \u{440}\u{43E}\u{437}\u{43C}\u{456}\u{440}\u{443}`,
    "select": `\u{412}\u{438}\u{431}\u{440}\u{430}\u{442}\u{438}`,
    "selectAll": `\u{412}\u{438}\u{431}\u{440}\u{430}\u{442}\u{438} \u{432}\u{441}\u{435}`,
    "sortable": `\u{441}\u{43E}\u{440}\u{442}\u{443}\u{432}\u{430}\u{43B}\u{44C}\u{43D}\u{438}\u{439} \u{441}\u{442}\u{43E}\u{432}\u{43F}\u{435}\u{446}\u{44C}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5IpdM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `\u{5347}\u{5E8F}`,
    "ascendingSort": (args)=>`\u{6309}\u{5217} ${args.columnName} \u{5347}\u{5E8F}\u{6392}\u{5E8F}`,
    "collapse": `\u{6298}\u{53E0}`,
    "columnSize": (args)=>`${args.value} \u{50CF}\u{7D20}`,
    "descending": `\u{964D}\u{5E8F}`,
    "descendingSort": (args)=>`\u{6309}\u{5217} ${args.columnName} \u{964D}\u{5E8F}\u{6392}\u{5E8F}`,
    "expand": `\u{6269}\u{5C55}`,
    "resizerDescription": `\u{6309} Enter \u{5F00}\u{59CB}\u{8C03}\u{6574}\u{5927}\u{5C0F}\u{3002}`,
    "select": `\u{9009}\u{62E9}`,
    "selectAll": `\u{5168}\u{9009}`,
    "sortable": `\u{53EF}\u{6392}\u{5E8F}\u{7684}\u{5217}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5ZxPt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "ascending": `\u{905E}\u{589E}`,
    "ascendingSort": (args)=>`\u{5DF2}\u{4F9D}\u{64DA}\u{300C}${args.columnName}\u{300D}\u{6B04}\u{905E}\u{589E}\u{6392}\u{5E8F}`,
    "collapse": `\u{6536}\u{5408}`,
    "columnSize": (args)=>`${args.value} \u{50CF}\u{7D20}`,
    "descending": `\u{905E}\u{6E1B}`,
    "descendingSort": (args)=>`\u{5DF2}\u{4F9D}\u{64DA}\u{300C}${args.columnName}\u{300D}\u{6B04}\u{905E}\u{6E1B}\u{6392}\u{5E8F}`,
    "expand": `\u{5C55}\u{958B}`,
    "resizerDescription": `\u{6309} Enter \u{9375}\u{4EE5}\u{958B}\u{59CB}\u{8ABF}\u{6574}\u{5927}\u{5C0F}`,
    "select": `\u{9078}\u{53D6}`,
    "selectAll": `\u{5168}\u{9078}`,
    "sortable": `\u{53EF}\u{6392}\u{5E8F}\u{7684}\u{6B04}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"igHBE":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "TableKeyboardDelegate", ()=>TableKeyboardDelegate);
var _getChildNodes = require("react-stately/private/collections/getChildNodes");
var _gridKeyboardDelegate = require("../grid/GridKeyboardDelegate");
class TableKeyboardDelegate extends (0, _gridKeyboardDelegate.GridKeyboardDelegate) {
    isCell(node) {
        return node.type === 'cell' || node.type === 'rowheader' || node.type === 'column';
    }
    getKeyBelow(key, options) {
        let startItem = this.collection.getItem(key);
        if (!startItem) return null;
        // If focus was on a column, then focus the first child column if any,
        // or find the corresponding cell in the first row.
        if (startItem.type === 'column') {
            let child = (0, _getChildNodes.getFirstItem)((0, _getChildNodes.getChildNodes)(startItem, this.collection));
            if (child) return child.key;
            let firstKey = this.getFirstKey();
            if (firstKey == null) return null;
            let firstItem = this.collection.getItem(firstKey);
            if (!firstItem) return null;
            return super.getKeyForItemInRowByIndex(firstKey, startItem.index);
        }
        return super.getKeyBelow(key, options);
    }
    getKeyAbove(key, options) {
        let startItem = this.collection.getItem(key);
        if (!startItem) return null;
        // If focus was on a column, focus the parent column if any
        if (startItem.type === 'column') {
            let parent = startItem.parentKey != null ? this.collection.getItem(startItem.parentKey) : null;
            if (parent && parent.type === 'column') return parent.key;
            return null;
        }
        // only return above row key if not header row
        let superKey = super.getKeyAbove(key, options);
        let superItem = superKey != null ? this.collection.getItem(superKey) : null;
        if (superItem && superItem.type !== 'headerrow') return superKey;
        // If no item was found, and focus was on a cell, then focus the
        // corresponding column header.
        if (this.isCell(startItem)) return this.collection.columns[startItem.index].key;
        // If focus was on a row, then focus the first column header.
        return this.collection.columns[0].key;
    }
    findNextColumnKey(column) {
        // Search following columns
        let key = this.findNextKey(column.key, (item)=>item.type === 'column');
        if (key != null) return key;
        // Wrap around to the first column
        let row = this.collection.headerRows[column.level];
        for (let item of (0, _getChildNodes.getChildNodes)(row, this.collection)){
            if (item.type === 'column') return item.key;
        }
        return null;
    }
    findPreviousColumnKey(column) {
        // Search previous columns
        let key = this.findPreviousKey(column.key, (item)=>item.type === 'column');
        if (key != null) return key;
        // Wrap around to the last column
        let row = this.collection.headerRows[column.level];
        let childNodes = [
            ...(0, _getChildNodes.getChildNodes)(row, this.collection)
        ];
        for(let i = childNodes.length - 1; i >= 0; i--){
            let item = childNodes[i];
            if (item.type === 'column') return item.key;
        }
        return null;
    }
    getKeyRightOf(key) {
        let item = this.collection.getItem(key);
        if (!item) return null;
        // If focus was on a column, then focus the next column
        if (item.type === 'column') return this.direction === 'rtl' ? this.findPreviousColumnKey(item) : this.findNextColumnKey(item);
        return super.getKeyRightOf(key);
    }
    getKeyLeftOf(key) {
        let item = this.collection.getItem(key);
        if (!item) return null;
        // If focus was on a column, then focus the previous column
        if (item.type === 'column') return this.direction === 'rtl' ? this.findNextColumnKey(item) : this.findPreviousColumnKey(item);
        return super.getKeyLeftOf(key);
    }
    getKeyForSearch(search, fromKey) {
        if (!this.collator) return null;
        let collection = this.collection;
        let key = fromKey ?? this.getFirstKey();
        if (key == null) return null;
        // If the starting key is a cell, search from its parent row.
        let startItem = collection.getItem(key);
        if (startItem?.type === 'cell') key = startItem.parentKey ?? null;
        let hasWrapped = false;
        while(key != null){
            let item = collection.getItem(key);
            if (!item) return null;
            if (item.textValue) {
                let substring = item.textValue.slice(0, search.length);
                if (this.collator.compare(substring, search) === 0) return item.key;
            }
            // Check each of the row header cells in this row for a match
            for (let cell of (0, _getChildNodes.getChildNodes)(item, this.collection)){
                let column = collection.columns[cell.index];
                if (collection.rowHeaderColumnKeys.has(column.key) && cell.textValue) {
                    let substring = cell.textValue.slice(0, search.length);
                    if (this.collator.compare(substring, search) === 0) {
                        // If we started on a cell, end on the matching cell. Otherwise, end on the row.
                        let fromItem = fromKey != null ? collection.getItem(fromKey) : startItem;
                        return fromItem?.type === 'cell' ? cell.key : item.key;
                    }
                }
            }
            key = this.getKeyBelow(key);
            // Wrap around when reaching the end of the collection
            if (key == null && !hasWrapped) {
                key = this.getFirstKey();
                hasWrapped = true;
            }
        }
        return null;
    }
}

},{"react-stately/private/collections/getChildNodes":"9KbhA","../grid/GridKeyboardDelegate":"i7ytC","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hbHbI":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a cell in a table.
 *
 * @param props - Props for the cell.
 * @param state - State of the table, as returned by `useTableState`.
 * @param ref - The ref attached to the cell element.
 */ parcelHelpers.export(exports, "useTableCell", ()=>useTableCell);
var _utils = require("./utils");
var _useGridCell = require("../grid/useGridCell");
function useTableCell(props, state, ref) {
    let { gridCellProps, isPressed } = (0, _useGridCell.useGridCell)(props, state, ref);
    let columnKey = props.node.column?.key;
    if (columnKey != null && state.collection.rowHeaderColumnKeys.has(columnKey)) {
        // oxlint-disable-next-line react/react-compiler
        gridCellProps.role = 'rowheader';
        // oxlint-disable-next-line react/react-compiler
        gridCellProps.id = (0, _utils.getCellId)(state, props.node.parentKey, columnKey);
    }
    return {
        gridCellProps,
        isPressed
    };
}

},{"./utils":"kyAxC","../grid/useGridCell":"2trRH","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hTpKl":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a column header in a table.
 *
 * @param props - Props for the column header.
 * @param state - State of the table, as returned by `useTableState`.
 * @param ref - The ref attached to the column header element.
 */ parcelHelpers.export(exports, "useTableColumnHeader", ()=>useTableColumnHeader);
var _utils = require("./utils");
var _indexJs = require("../../intl/table/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _platform = require("../utils/platform");
var _mergeProps = require("../utils/mergeProps");
var _useDescription = require("../utils/useDescription");
var _react = require("react");
var _useFocusable = require("../interactions/useFocusable");
var _useGridCell = require("../grid/useGridCell");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
var _usePress = require("../interactions/usePress");
function useTableColumnHeader(props, state, ref) {
    let { node } = props;
    let allowsSorting = node.props.allowsSorting;
    let { gridCellProps } = (0, _useGridCell.useGridCell)({
        focusMode: 'child',
        ...props
    }, state, ref);
    let isSelectionCellDisabled = node.props.isSelectionCell && state.selectionManager.selectionMode === 'single';
    let { pressProps, isPressed } = (0, _usePress.usePress)({
        isDisabled: !allowsSorting || isSelectionCellDisabled,
        onPress () {
            state.sort(node.key);
        },
        ref
    });
    // Needed to pick up the focusable context, enabling things like Tooltips for example
    let { focusableProps } = (0, _useFocusable.useFocusable)({}, ref);
    let ariaSort = undefined;
    let isSortedColumn = state.sortDescriptor?.column === node.key;
    let sortDirection = state.sortDescriptor?.direction;
    // aria-sort not supported in Android Talkback
    if (node.props.allowsSorting && !(0, _platform.isAndroid)()) ariaSort = isSortedColumn ? sortDirection : 'none';
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/table');
    let sortDescription;
    if (allowsSorting) {
        sortDescription = `${stringFormatter.format('sortable')}`;
        // Android Talkback doesn't support aria-sort so we add sort order details to the aria-described by here
        if (isSortedColumn && sortDirection && (0, _platform.isAndroid)()) sortDescription = `${sortDescription}, ${stringFormatter.format(sortDirection)}`;
    }
    let descriptionProps = (0, _useDescription.useDescription)(sortDescription);
    let shouldDisableFocus = state.collection.size === 0;
    (0, _react.useEffect)(()=>{
        if (shouldDisableFocus && state.selectionManager.focusedKey === node.key) state.selectionManager.setFocusedKey(null);
    }, [
        shouldDisableFocus,
        state.selectionManager,
        node.key
    ]);
    return {
        columnHeaderProps: {
            ...(0, _mergeProps.mergeProps)(focusableProps, gridCellProps, pressProps, descriptionProps, // If the table is empty, make all column headers untabbable
            shouldDisableFocus ? {
                tabIndex: -1
            } : null),
            role: 'columnheader',
            id: (0, _utils.getColumnHeaderId)(state, node.key),
            'aria-colspan': node.colSpan && node.colSpan > 1 ? node.colSpan : undefined,
            'aria-sort': ariaSort
        },
        isPressed
    };
}

},{"./utils":"kyAxC","../../intl/table/index.js":"9Q91M","../utils/platform":"eBqgD","../utils/mergeProps":"jycxS","../utils/useDescription":"1bivM","react":"gOP0N","../interactions/useFocusable":"6IFKj","../grid/useGridCell":"2trRH","../i18n/useLocalizedStringFormatter":"8lll3","../interactions/usePress":"3S2KR","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2mZVh":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a header row in a table.
 *
 * @param props - Props for the row.
 * @param state - State of the table, as returned by `useTableState`.
 */ parcelHelpers.export(exports, "useTableHeaderRow", ()=>useTableHeaderRow);
function useTableHeaderRow(props, state, // eslint-disable-next-line @typescript-eslint/no-unused-vars
ref) {
    let { node, isVirtualized } = props;
    let rowProps = {
        role: 'row'
    };
    if (isVirtualized && state.treeColumn == null) rowProps['aria-rowindex'] = node.index + 1; // aria-rowindex is 1 based
    return {
        rowProps
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kOphs":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a row in a table.
 *
 * @param props - Props for the row.
 * @param state - State of the table, as returned by `useTableState`.
 */ parcelHelpers.export(exports, "useTableRow", ()=>useTableRow);
var _utils = require("./utils");
var _useGridRow = require("../grid/useGridRow");
var _indexJs = require("../../intl/table/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mergeProps = require("../utils/mergeProps");
var _useLabels = require("../utils/useLabels");
var _i18Nprovider = require("../i18n/I18nProvider");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
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
function useTableRow(props, state, ref) {
    let { node, isVirtualized } = props;
    let { rowProps, ...states } = (0, _useGridRow.useGridRow)(props, state, ref);
    let { direction } = (0, _i18Nprovider.useLocale)();
    if (isVirtualized && state.treeColumn == null) // oxlint-disable-next-line react/react-compiler
    rowProps['aria-rowindex'] = node.index + 1 + state.collection.headerRows.length; // aria-rowindex is 1 based
    else // oxlint-disable-next-line react/react-compiler
    delete rowProps['aria-rowindex'];
    let isExpanded = state.treeColumn != null && (state.expandedKeys === 'all' || state.expandedKeys.has(node.key));
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/table');
    let labelProps = (0, _useLabels.useLabels)({
        'aria-label': isExpanded ? stringFormatter.format('collapse') : stringFormatter.format('expand'),
        'aria-labelledby': (0, _utils.getRowLabelledBy)(state, node.key)
    });
    let treeGridRowProps = {};
    let expandButtonProps = {};
    if (state.treeColumn != null) {
        let treeNode = state.collection.getItem(node.key);
        if (treeNode != null) {
            let lastChild = getLastChild(state.collection, node);
            let hasChildRows = treeNode.props?.hasChildRows || treeNode.props?.UNSTABLE_childItems || lastChild?.type !== 'cell';
            let parent = state.collection.getItem(node.parentKey);
            let isParentBody = parent.type === 'tablebody' || parent.type === 'body';
            let lastSibling = getLastChild(state.collection, parent);
            while(lastSibling && lastSibling.type !== 'item' && lastSibling.prevKey != null)lastSibling = state.collection.getItem(lastSibling.prevKey);
            treeGridRowProps = {
                onKeyDown: (e)=>{
                    if (e.key === EXPANSION_KEYS['expand'][direction] && state.selectionManager.focusedKey === treeNode.key && hasChildRows && state.expandedKeys !== 'all' && !state.expandedKeys.has(treeNode.key)) {
                        state.toggleKey(treeNode.key);
                        e.stopPropagation();
                    } else if (e.key === EXPANSION_KEYS['collapse'][direction] && state.selectionManager.focusedKey === treeNode.key) {
                        if (state.expandedKeys !== 'all') {
                            if (hasChildRows && state.expandedKeys.has(treeNode.key)) {
                                state.toggleKey(treeNode.key);
                                e.stopPropagation();
                            } else if (!state.expandedKeys.has(treeNode.key) && treeNode.parentKey != null && treeNode.level > 0) {
                                // Item is a leaf or already collapsed, move focus to parent
                                state.selectionManager.setFocusedKey(treeNode.parentKey);
                                e.stopPropagation();
                            }
                        } else if (state.expandedKeys === 'all') {
                            state.toggleKey(treeNode.key);
                            e.stopPropagation();
                        }
                    }
                },
                'aria-expanded': hasChildRows ? state.expandedKeys === 'all' || state.expandedKeys.has(node.key) : undefined,
                'aria-level': treeNode.level + 1,
                'aria-posinset': treeNode.index - (isParentBody ? 0 : state.collection.columnCount) + 1,
                'aria-setsize': lastSibling.index - (isParentBody ? 0 : state.collection.columnCount) + 1
            };
            expandButtonProps = {
                isDisabled: states.isDisabled,
                onPress: ()=>{
                    if (!states.isDisabled) {
                        state.toggleKey(node.key);
                        state.selectionManager.setFocused(true);
                        state.selectionManager.setFocusedKey(node.key);
                    }
                },
                excludeFromTabOrder: true,
                preventFocusOnPress: true,
                // @ts-ignore
                'data-react-aria-prevent-focus': true,
                ...labelProps
            };
        }
    }
    let syntheticLinkProps = (0, _openLink.useSyntheticLinkProps)(node.props);
    let linkProps = states.hasAction ? syntheticLinkProps : {};
    return {
        rowProps: {
            ...(0, _mergeProps.mergeProps)(rowProps, treeGridRowProps, linkProps),
            'aria-labelledby': (0, _utils.getRowLabelledBy)(state, node.key)
        },
        expandButtonProps,
        ...states
    };
}
function getLastChild(collection, node) {
    if ('lastChildKey' in node) return node.lastChildKey != null ? collection.getItem(node.lastChildKey) : null;
    else return Array.from(node.childNodes).findLast((item)=>item.parentKey === node.key);
}

},{"./utils":"kyAxC","../grid/useGridRow":"3Ah58","../../intl/table/index.js":"9Q91M","../utils/mergeProps":"jycxS","../utils/useLabels":"8ZwLJ","../i18n/I18nProvider":"czGuc","../i18n/useLocalizedStringFormatter":"8lll3","../utils/openLink":"gH3wl","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"idhTU":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useTableRowGroup", ()=>useTableRowGroup);
var _useGridRowGroup = require("../grid/useGridRowGroup");
function useTableRowGroup() {
    return (0, _useGridRowGroup.useGridRowGroup)();
}

},{"../grid/useGridRowGroup":"lFAgj","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lFAgj":[function(require,module,exports,__globalThis) {
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
 * Provides the accessibility implementation for a row group in a grid.
 */ parcelHelpers.export(exports, "useGridRowGroup", ()=>useGridRowGroup);
function useGridRowGroup() {
    return {
        rowGroupProps: {
            role: 'rowgroup'
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

