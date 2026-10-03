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
})({"1eqrw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResizableTableContainer", ()=>ResizableTableContainer);
parcelHelpers.export(exports, "TableContext", ()=>TableContext);
parcelHelpers.export(exports, "TableStateContext", ()=>TableStateContext);
parcelHelpers.export(exports, "TableColumnResizeStateContext", ()=>TableColumnResizeStateContext);
parcelHelpers.export(exports, "Table", ()=>Table);
/**
 * Returns options from the parent `<Table>` component.
 */ parcelHelpers.export(exports, "useTableOptions", ()=>useTableOptions);
parcelHelpers.export(exports, "TableHeader", ()=>TableHeader);
parcelHelpers.export(exports, "Column", ()=>Column);
parcelHelpers.export(exports, "ColumnResizer", ()=>ColumnResizer);
parcelHelpers.export(exports, "TableBody", ()=>TableBody);
parcelHelpers.export(exports, "TableFooter", ()=>TableFooter);
parcelHelpers.export(exports, "RowFocusContext", ()=>RowFocusContext);
parcelHelpers.export(exports, "Row", ()=>Row);
parcelHelpers.export(exports, "Cell", ()=>Cell);
parcelHelpers.export(exports, "TableLoadMoreItem", ()=>TableLoadMoreItem);
var _jsxRuntime = require("preact/jsx-runtime");
var _baseCollection = require("react-aria/private/collections/BaseCollection");
var _tableCollection = require("react-stately/private/table/TableCollection");
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
var _inertValue = require("react-aria/private/utils/inertValue");
var _indexJs = require("../intl/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _isScrollable = require("react-aria/private/utils/isScrollable");
var _listKeyboardDelegate = require("react-aria/ListKeyboardDelegate");
var _useLoadMoreSentinel = require("react-aria/private/utils/useLoadMoreSentinel");
var _mergeProps = require("react-aria/mergeProps");
var _mergeRefs = require("react-aria/mergeRefs");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
var _selectionIndicator = require("./SelectionIndicator");
var _sharedElementTransition = require("./SharedElementTransition");
var _useTableState = require("react-stately/useTableState");
var _treeDropTargetDelegate = require("./TreeDropTargetDelegate");
var _useCachedChildren = require("react-aria/private/collections/useCachedChildren");
var _useControlledState = require("react-stately/useControlledState");
var _useFocusRing = require("react-aria/useFocusRing");
var _useHover = require("react-aria/useHover");
var _useLayoutEffect = require("react-aria/private/utils/useLayoutEffect");
var _i18Nprovider = require("react-aria/I18nProvider");
var _useLocalizedStringFormatter = require("react-aria/useLocalizedStringFormatter");
var _useMultipleSelectionState = require("react-stately/useMultipleSelectionState");
var _useObjectRef = require("react-aria/useObjectRef");
var _useResizeObserver = require("react-aria/private/utils/useResizeObserver");
var _useTable = require("react-aria/useTable");
var _visuallyHidden = require("react-aria/VisuallyHidden");
class TableCollection extends (0, _baseCollection.BaseCollection) {
    headerRows = [];
    columns = [];
    rows = [];
    rowHeaderColumnKeys = new Set();
    head = new TableHeaderNode(-1);
    columnsDirty = true;
    expandedKeys = new Set();
    withExpandedKeys(expandedKeys) {
        let collection = this.clone();
        collection.expandedKeys = expandedKeys;
        collection.frozen = this.frozen;
        collection.rows = Array.from(collection.getRows());
        return collection;
    }
    addNode(node) {
        super.addNode(node);
        this.columnsDirty ||= node.type === 'column';
        if (node.type === 'tableheader') this.head = node;
    }
    getRows() {
        let rows = [];
        for (let child of this)if (child.type === 'tablebody' || child.type === 'tablefooter') rows.push(...this.getChildren(child.key));
        return rows;
    }
    // backward compatibility
    get body() {
        for (let child of this){
            if (child.type === 'tablebody') return child;
        }
        return new TableBodyNode(-2);
    }
    commit(firstKey, lastKey, isSSR = false) {
        this.updateColumns(isSSR);
        this.firstKey = firstKey;
        this.lastKey = lastKey;
        this.rows = [];
        for (let row of this.getRows()){
            let lastChildKey = row.lastChildKey;
            if (lastChildKey != null) {
                let lastCell = this.getItem(lastChildKey);
                while(lastCell && lastCell.type !== 'cell')lastCell = lastCell.prevKey != null ? this.getItem(lastCell.prevKey) : null;
                if (lastCell) {
                    let numberOfCellsInRow = (lastCell.colIndex ?? lastCell.index) + (lastCell.colSpan ?? 1);
                    if (numberOfCellsInRow !== this.columns.length && !isSSR) throw new Error(`Cell count must match column count. Found ${numberOfCellsInRow} cells and ${this.columns.length} columns.`);
                }
            }
            this.rows.push(row);
        }
        super.commit(firstKey, lastKey, isSSR);
    }
    updateColumns(isSSR) {
        if (!this.columnsDirty) return;
        this.rowHeaderColumnKeys = new Set();
        this.columns = [];
        let columnKeyMap = new Map();
        let visit = (node)=>{
            switch(node.type){
                case 'column':
                    columnKeyMap.set(node.key, node);
                    if (!node.hasChildNodes) {
                        node.index = this.columns.length;
                        this.columns.push(node);
                        if (node.props.isRowHeader) this.rowHeaderColumnKeys.add(node.key);
                    }
                    break;
            }
            for (let child of this.getChildren(node.key))visit(child);
        };
        for (let node of this.getChildren(this.head.key))visit(node);
        this.headerRows = (0, _tableCollection.buildHeaderRows)(columnKeyMap, this.columns);
        this.columnsDirty = false;
        if (this.rowHeaderColumnKeys.size === 0 && this.columns.length > 0 && !isSSR) throw new Error('A table must have at least one Column with the isRowHeader prop set to true');
    }
    get columnCount() {
        return this.columns.length;
    }
    *[Symbol.iterator]() {
        let key = this.firstKey;
        while(key != null){
            let node = this.getItem(key);
            if (node) yield node;
            key = node?.nextKey ?? null;
        }
    }
    getFirstKey() {
        for (let child of this){
            if (child.type === 'tablebody') return child.firstChildKey ?? null;
        }
        return null;
    }
    getLastKey() {
        let key = this.lastKey;
        if (key == null) return null;
        let node = this.getItem(key);
        while(node?.lastChildKey != null && (node.type !== 'item' || this.expandedKeys.has(node.key)))node = this.getItem(node.lastChildKey);
        return node?.key;
    }
    getKeyAfter(key) {
        let node = this.getItem(key);
        if (node?.type === 'column') return node.nextKey ?? null;
        if (!node) return null;
        // If this is an expanded item, return the first child item if any.
        if (node.type === 'item' && node.firstChildKey != null && this.expandedKeys.has(node.key)) {
            let child = this.getItem(node.firstChildKey);
            while(child){
                if (child.type === 'item') return child.key;
                child = child.nextKey != null ? this.getItem(child.nextKey) : null;
            }
        }
        return super.getKeyAfter(key);
    }
    getKeyBefore(key) {
        let node = this.getItem(key);
        if (node?.type === 'column') return node.prevKey ?? null;
        if (!node) return null;
        let k = null;
        if (node.prevKey != null) {
            node = this.getItem(node.prevKey);
            // Traverse to the deepest expanded child.
            while(node && (node.type !== 'item' || this.expandedKeys.has(node.key)) && node.lastChildKey != null)node = this.getItem(node.lastChildKey);
            k = node?.key ?? null;
        }
        if (k == null) k = node.parentKey;
        if (k != null && this.getItem(k)?.type === 'tableheader') return null;
        return k;
    }
    getChildren(key) {
        let item = this.getItem(key);
        if (!item) for (let row of this.headerRows){
            if (row.key === key) return row.childNodes;
        }
        // Flatten all rows into the body.
        let self = this;
        if (item?.type === 'tablebody' || item?.type === 'tablefooter') return {
            *[Symbol.iterator] () {
                let firstKey = item.firstChildKey;
                let node = firstKey != null ? self.getItem(firstKey) : null;
                while(node){
                    yield node;
                    let key = self.getKeyAfter(node.key);
                    node = key != null ? self.getItem(key) : null;
                    if (node && node.parentKey === item.parentKey) break;
                }
            }
        };
        return {
            *[Symbol.iterator] () {
                let parent = self.getItem(key);
                let node = parent?.firstChildKey != null ? self.getItem(parent.firstChildKey) : null;
                while(node){
                    yield node;
                    node = node.nextKey != null ? self.getItem(node.nextKey) : null;
                    // Return only cells as children of rows (nested rows are flattened into the body).
                    if (parent?.type === 'item' && node?.type !== 'cell') break;
                }
            }
        };
    }
    clone() {
        let collection = super.clone();
        collection.headerRows = this.headerRows;
        collection.columns = this.columns;
        collection.rows = this.rows;
        collection.rowHeaderColumnKeys = this.rowHeaderColumnKeys;
        collection.head = this.head;
        return collection;
    }
    getTextValue(key) {
        let row = this.getItem(key);
        if (!row) return '';
        // If the row has a textValue, use that.
        if (row.textValue) return row.textValue;
        // Otherwise combine the text of each of the row header columns.
        let rowHeaderColumnKeys = this.rowHeaderColumnKeys;
        let text = [];
        for (let cell of this.getChildren(key)){
            let column = this.columns[cell.index];
            if (rowHeaderColumnKeys.has(column.key) && cell.textValue) text.push(cell.textValue);
            if (text.length === rowHeaderColumnKeys.size) break;
        }
        return text.join(' ');
    }
}
const ResizableTableContainerContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ResizableTableContainer = /*#__PURE__*/ (0, _react.forwardRef)(function ResizableTableContainer(props, ref) {
    let containerRef = (0, _useObjectRef.useObjectRef)(ref);
    let tableRef = (0, _react.useRef)(null);
    let scrollRef = (0, _react.useRef)(null);
    let [width, setWidth] = (0, _react.useState)(0);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        // Walk up the DOM from the Table to the ResizableTableContainer and stop
        // when we reach the first scrollable element. This is what we'll measure
        // to determine column widths (important due to width of scrollbars).
        // This will usually be the ResizableTableContainer for native tables, and
        // the Table itself for virtualized tables.
        let table = tableRef.current;
        while(table && table !== containerRef.current && !(0, _isScrollable.isScrollable)(table))table = table.parentElement;
        scrollRef.current = table;
    }, [
        containerRef
    ]);
    (0, _useResizeObserver.useResizeObserver)({
        ref: scrollRef,
        box: 'border-box',
        onResize () {
            setWidth(scrollRef.current?.clientWidth ?? 0);
        }
    });
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        setWidth(scrollRef.current?.clientWidth ?? 0);
    }, []);
    let ctx = (0, _react.useMemo)(()=>({
            tableRef,
            scrollRef,
            tableWidth: width,
            useTableColumnResizeState: // oxlint-disable-next-line react/react-compiler
            (0, _useTableState.useTableColumnResizeState),
            onResizeStart: props.onResizeStart,
            onResize: props.onResize,
            onResizeEnd: props.onResizeEnd
        }), [
        tableRef,
        width,
        props.onResizeStart,
        props.onResize,
        props.onResizeEnd
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        render: props.render,
        ...(0, _filterDOMProps.filterDOMProps)(props, {
            global: true
        }),
        ref: containerRef,
        className: props.className || 'react-aria-ResizableTableContainer',
        style: props.style,
        onScroll: props.onScroll,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(ResizableTableContainerContext.Provider, {
            value: ctx,
            children: props.children
        })
    });
});
const TableContext = /*#__PURE__*/ (0, _react.createContext)(null);
const TableStateContext = /*#__PURE__*/ (0, _react.createContext)(null);
const TableColumnResizeStateContext = /*#__PURE__*/ (0, _react.createContext)(null);
const Table = /*#__PURE__*/ (0, _react.forwardRef)(function Table(props, ref) {
    // oxlint-disable-next-line react/react-compiler
    [props, ref] = (0, _utils.useContextProps)(props, ref, TableContext);
    // Separate selection state so we have access to it from collection components via useTableOptions.
    let selectionState = (0, _useMultipleSelectionState.useMultipleSelectionState)(props);
    let { selectionBehavior, selectionMode, disallowEmptySelection } = selectionState;
    let hasDragHooks = !!props.dragAndDropHooks?.useDraggableCollectionState;
    let ctx = (0, _react.useMemo)(()=>({
            selectionBehavior: selectionMode === 'none' ? null : selectionBehavior,
            selectionMode,
            disallowEmptySelection,
            allowsDragging: hasDragHooks
        }), [
        selectionBehavior,
        selectionMode,
        disallowEmptySelection,
        hasDragHooks
    ]);
    let content = /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableOptionsContext.Provider, {
        value: ctx,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collection.Collection), {
            ...props
        })
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collectionBuilder.CollectionBuilder), {
        content: content,
        createCollection: ()=>new TableCollection(),
        children: (collection)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(TableInner, {
                props: props,
                forwardedRef: ref,
                selectionState: selectionState,
                collection: collection
            })
    });
});
let TableElementType = /*#__PURE__*/ (0, _react.forwardRef)(function TableElementType(props, ref) {
    let { isVirtualized } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    if (isVirtualized) return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).table, {
        ...props,
        ref: ref
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
function TableInner({ props, forwardedRef: ref, selectionState, collection }) {
    // oxlint-disable-next-line react/react-compiler
    [props, ref] = (0, _utils.useContextProps)(props, ref, (0, _autocomplete.SelectableCollectionContext));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { shouldUseVirtualFocus, disallowTypeAhead, filter, ...DOMCollectionProps } = props;
    let tableContainerContext = (0, _react.useContext)(ResizableTableContainerContext);
    ref = (0, _useObjectRef.useObjectRef)((0, _react.useMemo)(()=>(0, _mergeRefs.mergeRefs)(ref, tableContainerContext?.tableRef), [
        ref,
        tableContainerContext?.tableRef
    ]));
    let [expandedKeys, setExpandedKeys] = (0, _useControlledState.useControlledState)(props.expandedKeys ? new Set(props.expandedKeys) : undefined, props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : new Set(), props.onExpandedChange);
    // oxlint-disable-next-line react/react-compiler
    collection = (0, _react.useMemo)(()=>collection.withExpandedKeys(expandedKeys), [
        collection,
        expandedKeys
    ]);
    let tableState = (0, _useTableState.useTableState)({
        ...DOMCollectionProps,
        collection,
        children: undefined,
        UNSAFE_selectionState: selectionState,
        expandedKeys,
        onExpandedChange: setExpandedKeys
    });
    // oxlint-disable-next-line react/react-compiler
    let filteredState = (0, _useTableState.UNSTABLE_useFilteredTableState)(tableState, filter);
    let { isVirtualized, layoutDelegate, dropTargetDelegate: ctxDropTargetDelegate, CollectionRoot } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let { dragAndDropHooks } = props;
    let { gridProps } = (0, _useTable.useTable)({
        ...DOMCollectionProps,
        layoutDelegate,
        isVirtualized
    }, filteredState, ref);
    let selectionManager = filteredState.selectionManager;
    let hasDragHooks = !!dragAndDropHooks?.useDraggableCollectionState;
    let hasDropHooks = !!dragAndDropHooks?.useDroppableCollectionState;
    let dragHooksProvided = (0, _react.useRef)(hasDragHooks);
    let dropHooksProvided = (0, _react.useRef)(hasDropHooks);
    (0, _react.useEffect)(()=>{
        return;
    }, [
        hasDragHooks,
        hasDropHooks
    ]);
    let dragState = undefined;
    let dropState = undefined;
    let droppableCollection = undefined;
    let isRootDropTarget = false;
    let dragPreview = null;
    let preview = (0, _react.useRef)(null);
    let { direction } = (0, _i18Nprovider.useLocale)();
    let [treeDropTargetDelegate] = (0, _react.useState)(()=>new (0, _treeDropTargetDelegate.TreeDropTargetDelegate)());
    if (hasDragHooks && dragAndDropHooks) {
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
    if (hasDropHooks && dragAndDropHooks) {
        // oxlint-disable-next-line react/react-compiler
        dropState = dragAndDropHooks.useDroppableCollectionState({
            collection: filteredState.collection,
            selectionManager
        });
        let keyboardDelegate = new (0, _listKeyboardDelegate.ListKeyboardDelegate)({
            collection: filteredState.collection,
            disabledKeys: selectionManager.disabledKeys,
            disabledBehavior: selectionManager.disabledBehavior,
            ref,
            layoutDelegate
        });
        let dropTargetDelegate = dragAndDropHooks.dropTargetDelegate || ctxDropTargetDelegate || new dragAndDropHooks.ListDropTargetDelegate(collection.rows, ref);
        treeDropTargetDelegate.setup(dropTargetDelegate, tableState, direction);
        // oxlint-disable-next-line react/react-compiler
        droppableCollection = dragAndDropHooks.useDroppableCollection({
            keyboardDelegate,
            dropTargetDelegate: treeDropTargetDelegate,
            onDropActivate: (e)=>{
                // Expand collapsed item when dragging over. For keyboard, allow collapsing.
                if (e.target.type === 'item') {
                    let key = e.target.key;
                    let item = tableState.collection.getItem(key);
                    let isExpanded = expandedKeys.has(key);
                    if (item && item.hasChildNodes && (!isExpanded || dragAndDropHooks?.isVirtualDragging?.())) tableState.toggleKey(key);
                }
            },
            onKeyDown: (e)=>{
                let target = dropState?.target;
                if (target && target.type === 'item' && target.dropPosition === 'on') {
                    let item = tableState.collection.getItem(target.key);
                    if (e.key === EXPANSION_KEYS['expand'][direction] && item?.hasChildNodes && !tableState.expandedKeys.has(target.key)) tableState.toggleKey(target.key);
                    else if (e.key === EXPANSION_KEYS['collapse'][direction] && item?.hasChildNodes && tableState.expandedKeys.has(target.key)) tableState.toggleKey(target.key);
                }
            }
        }, dropState, ref);
        isRootDropTarget = dropState.isDropTarget({
            type: 'root'
        });
    }
    let { focusProps, isFocused, isFocusVisible } = (0, _useFocusRing.useFocusRing)();
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        children: undefined,
        defaultClassName: 'react-aria-Table',
        values: {
            isDropTarget: isRootDropTarget,
            isFocused,
            isFocusVisible,
            state: filteredState
        }
    });
    let isListDraggable = !!(hasDragHooks && !dragState?.isDisabled);
    let style = renderProps.style;
    let layoutState = null;
    if (tableContainerContext) {
        // oxlint-disable-next-line react/react-compiler
        layoutState = tableContainerContext.useTableColumnResizeState({
            tableWidth: tableContainerContext.tableWidth
        }, filteredState);
        if (!isVirtualized) style = {
            ...style,
            tableLayout: 'fixed',
            // due to https://bugzilla.mozilla.org/show_bug.cgi?id=1959353, we can't use "fit-content".
            // Causes the table columns to grow to fill the available space in Firefox, ignoring user set column widths
            width: 'min-content'
        };
    }
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _utils.Provider), {
        values: [
            [
                TableStateContext,
                filteredState
            ],
            [
                TableColumnResizeStateContext,
                layoutState
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
                    render: TableDropIndicatorWrapper
                }
            ],
            [
                (0, _autocomplete.SelectableCollectionContext),
                null
            ],
            [
                (0, _autocomplete.FieldInputContext),
                null
            ]
        ],
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _focusScope.FocusScope), {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableElementType, {
                    ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, gridProps, focusProps, droppableCollection?.collectionProps),
                    style: style,
                    ref: ref,
                    slot: props.slot || undefined,
                    onScroll: props.onScroll,
                    "data-allows-dragging": isListDraggable || undefined,
                    "data-drop-target": isRootDropTarget || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _sharedElementTransition.SharedElementTransition), {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionRoot, {
                            collection: filteredState.collection,
                            scrollRef: tableContainerContext?.scrollRef ?? ref,
                            persistedKeys: (0, _dragAndDrop.useDndPersistedKeys)(selectionManager, dragAndDropHooks, dropState)
                        })
                    })
                })
            }),
            dragPreview
        ]
    });
}
const TableOptionsContext = /*#__PURE__*/ (0, _react.createContext)(null);
function useTableOptions() {
    return (0, _react.useContext)(TableOptionsContext);
}
class TableHeaderNode extends (0, _baseCollection.CollectionNode) {
    static type = 'tableheader';
}
let THeadElementType = /*#__PURE__*/ (0, _react.forwardRef)(function THeadElementType(props, ref) {
    let { isVirtualized } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    if (isVirtualized) return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).thead, {
        ...props,
        ref: ref
    });
});
const TableHeader = /*#__PURE__*/ (0, _collectionBuilder.createBranchComponent)(TableHeaderNode, (props, ref)=>{
    let collection = (0, _react.useContext)(TableStateContext).collection;
    let headerRows = (0, _useCachedChildren.useCachedChildren)({
        items: collection.headerRows,
        children: (0, _react.useCallback)((item)=>{
            switch(item.type){
                case 'headerrow':
                    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableHeaderRow, {
                        item: item
                    });
                default:
                    throw new Error('Unsupported node type in TableHeader: ' + item.type);
            }
        }, [])
    });
    let { rowGroupProps } = (0, _useTable.useTableRowGroup)();
    let { hoverProps, isHovered } = (0, _useHover.useHover)({
        onHoverStart: props.onHoverStart,
        onHoverChange: props.onHoverChange,
        onHoverEnd: props.onHoverEnd
    });
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        children: undefined,
        defaultClassName: 'react-aria-TableHeader',
        values: {
            isHovered
        }
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(THeadElementType, {
        ...(0, _mergeProps.mergeProps)((0, _filterDOMProps.filterDOMProps)(props, {
            global: true
        }), rowGroupProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-hovered": isHovered || undefined,
        children: headerRows
    });
}, (props)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collection.Collection), {
        dependencies: props.dependencies,
        items: props.columns,
        children: props.children
    }));
let TableHeaderRowElementType = /*#__PURE__*/ (0, _react.forwardRef)(function TableHeaderRowElementType(props, ref) {
    let { isVirtualized } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    if (isVirtualized) return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("tr", {
        ...props,
        ref: ref
    });
});
function TableHeaderRow({ item }) {
    let ref = (0, _react.useRef)(null);
    let state = (0, _react.useContext)(TableStateContext);
    let { isVirtualized, CollectionBranch } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let { rowProps } = (0, _useTable.useTableHeaderRow)({
        node: item,
        isVirtualized
    }, state, ref);
    let { checkboxProps } = (0, _useTable.useTableSelectAllCheckbox)(state);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableHeaderRowElementType, {
        ...rowProps,
        ref: ref,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
            values: [
                [
                    (0, _checkbox.CheckboxContext),
                    {
                        slots: {
                            selection: checkboxProps
                        }
                    }
                ],
                [
                    (0, _checkbox.CheckboxFieldContext),
                    {
                        slots: {
                            selection: checkboxProps
                        }
                    }
                ]
            ],
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionBranch, {
                collection: state.collection,
                parent: item
            })
        })
    });
}
class TableColumnNode extends (0, _baseCollection.CollectionNode) {
    static type = 'column';
}
let ColumnElementType = /*#__PURE__*/ (0, _react.forwardRef)(function ColumnElementType(props, ref) {
    let { isVirtualized } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    if (isVirtualized) return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).th, {
        ...props,
        ref: ref
    });
});
const Column = /*#__PURE__*/ (0, _collectionBuilder.createLeafComponent)(TableColumnNode, (props, forwardedRef, column)=>{
    let ref = (0, _useObjectRef.useObjectRef)(forwardedRef);
    let state = (0, _react.useContext)(TableStateContext);
    let { isVirtualized } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let { columnHeaderProps, isPressed } = (0, _useTable.useTableColumnHeader)({
        node: column,
        isVirtualized,
        focusMode: props.focusMode,
        allowsArrowNavigation: props.allowsArrowNavigation
    }, state, ref);
    let { isFocused, isFocusVisible, focusProps } = (0, _useFocusRing.useFocusRing)();
    let layoutState = (0, _react.useContext)(TableColumnResizeStateContext);
    let isResizing = false;
    if (layoutState) isResizing = layoutState.resizingColumn === column.key;
    let { hoverProps, isHovered } = (0, _useHover.useHover)({
        isDisabled: !props.allowsSorting
    });
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        id: undefined,
        children: column.rendered,
        defaultClassName: 'react-aria-Column',
        values: {
            isHovered,
            isPressed,
            isFocused,
            isFocusVisible,
            allowsSorting: column.props.allowsSorting,
            sortDirection: state.sortDescriptor?.column === column.key ? state.sortDescriptor.direction : undefined,
            isResizing,
            startResize: ()=>{
                if (layoutState) {
                    layoutState.startResize(column.key);
                    state.setKeyboardNavigationDisabled(true);
                } else throw new Error('Wrap your <Table> in a <ResizableTableContainer> to enable column resizing');
            },
            sort: (direction)=>{
                state.sort(column.key, direction);
            }
        }
    });
    let style = renderProps.style;
    if (layoutState) style = {
        ...style,
        width: layoutState.getColumnWidth(column.key)
    };
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ColumnElementType, {
        ...(0, _mergeProps.mergeProps)(DOMProps, columnHeaderProps, focusProps, hoverProps),
        ...renderProps,
        style: style,
        ref: ref,
        "data-hovered": isHovered || undefined,
        "data-pressed": isPressed || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-resizing": isResizing || undefined,
        "data-allows-sorting": column.props.allowsSorting || undefined,
        "data-sort-direction": state.sortDescriptor?.column === column.key ? state.sortDescriptor.direction : undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
            values: [
                [
                    ColumnResizerContext,
                    {
                        column,
                        triggerRef: ref
                    }
                ],
                [
                    (0, _collection1.CollectionRendererContext),
                    (0, _collection1.DefaultCollectionRenderer)
                ]
            ],
            children: renderProps.children
        })
    });
});
const ColumnResizerContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ColumnResizer = /*#__PURE__*/ (0, _react.forwardRef)(function ColumnResizer(props, ref) {
    let layoutState = (0, _react.useContext)(TableColumnResizeStateContext);
    if (!layoutState) throw new Error('Wrap your <Table> in a <ResizableTableContainer> to enable column resizing');
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), 'react-aria-components');
    let { onResizeStart, onResize, onResizeEnd } = (0, _react.useContext)(ResizableTableContainerContext);
    let { column, triggerRef } = (0, _react.useContext)(ColumnResizerContext);
    let inputRef = (0, _react.useRef)(null);
    let { resizerProps, inputProps, isResizing, isMouseResizing } = (0, _useTable.useTableColumnResize)({
        column,
        'aria-label': props['aria-label'] || stringFormatter.format('tableResizer'),
        onResizeStart,
        onResize,
        onResizeEnd,
        triggerRef
    }, layoutState, inputRef);
    let { focusProps, isFocused, isFocusVisible } = (0, _useFocusRing.useFocusRing)();
    let { hoverProps, isHovered } = (0, _useHover.useHover)(props);
    let isEResizable = layoutState.getColumnMinWidth(column.key) >= layoutState.getColumnWidth(column.key);
    let isWResizable = layoutState.getColumnMaxWidth(column.key) <= layoutState.getColumnWidth(column.key);
    let { direction } = (0, _i18Nprovider.useLocale)();
    let resizableDirection = 'both';
    if (isEResizable) resizableDirection = direction === 'rtl' ? 'right' : 'left';
    else if (isWResizable) resizableDirection = direction === 'rtl' ? 'left' : 'right';
    else resizableDirection = 'both';
    let objectRef = (0, _useObjectRef.useObjectRef)(ref);
    let [cursor, setCursor] = (0, _react.useState)('');
    (0, _react.useEffect)(()=>{
        if (!objectRef.current) return;
        let style = window.getComputedStyle(objectRef.current);
        setCursor(style.cursor);
    }, [
        objectRef,
        resizableDirection
    ]);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-ColumnResizer',
        values: {
            isFocused,
            isFocusVisible,
            isResizing,
            isHovered,
            resizableDirection
        }
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    // Cursor overlay is used to style the cursor against the entire screen.
    // Do not turn off pointer events or the cursor will no longer be styled.
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _utils.dom).div, {
        ref: objectRef,
        role: "presentation",
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, resizerProps, hoverProps),
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-resizing": isResizing || undefined,
        "data-resizable-direction": resizableDirection,
        children: [
            renderProps.children,
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                ref: inputRef,
                ...(0, _mergeProps.mergeProps)(inputProps, focusProps)
            }),
            isResizing && isMouseResizing && /*#__PURE__*/ (0, _reactDomDefault.default).createPortal(/*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    cursor
                },
                "data-testid": "cursor-overlay"
            }), document.body)
        ]
    });
});
class TableBodyNode extends (0, _baseCollection.FilterableNode) {
    static type = 'tablebody';
}
let TableBodyElementType = /*#__PURE__*/ (0, _react.forwardRef)(function TableBodyElementType(props, ref) {
    let { isVirtualized } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    if (isVirtualized) return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).tbody, {
        ...props,
        ref: ref
    });
});
const TableBody = /*#__PURE__*/ (0, _collectionBuilder.createBranchComponent)(TableBodyNode, (props, ref, node)=>{
    let state = (0, _react.useContext)(TableStateContext);
    let { isVirtualized } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let collection = state.collection;
    let { CollectionBranch } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let { dragAndDropHooks, dropState } = (0, _react.useContext)((0, _dragAndDrop.DragAndDropContext));
    let isDroppable = !!dragAndDropHooks?.useDroppableCollectionState && !dropState?.isDisabled;
    let isRootDropTarget = isDroppable && !!dropState && (dropState.isDropTarget({
        type: 'root'
    }) ?? false);
    let isEmpty = collection.size === 0;
    let renderValues = {
        isDropTarget: isRootDropTarget,
        isEmpty
    };
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        id: undefined,
        children: undefined,
        defaultClassName: 'react-aria-TableBody',
        values: renderValues
    });
    let emptyState;
    let numColumns = collection.columnCount;
    if (isEmpty && props.renderEmptyState && state) {
        let rowProps = {};
        let rowHeaderProps = {};
        let style = {};
        if (isVirtualized) {
            rowHeaderProps['aria-colspan'] = numColumns;
            style = {
                display: 'contents'
            };
        } else rowHeaderProps['colSpan'] = numColumns;
        emptyState = /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableRowElementType, {
            role: "row",
            ...rowProps,
            style: style,
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableCellElementType, {
                role: "rowheader",
                ...rowHeaderProps,
                style: style,
                children: props.renderEmptyState(renderValues)
            })
        });
    }
    let { rowGroupProps } = (0, _useTable.useTableRowGroup)();
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    // TODO: TableBody doesn't support being the scrollable body of the table yet, to revisit if needed. Would need to
    // call useLoadMore here and walk up the DOM to the nearest scrollable element to set scrollRef
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)(TableBodyElementType, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, rowGroupProps),
        ref: ref,
        "data-empty": isEmpty || undefined,
        children: [
            isDroppable && /*#__PURE__*/ (0, _jsxRuntime.jsx)(RootDropIndicator, {}),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionBranch, {
                collection: collection,
                parent: node,
                renderDropIndicator: (0, _dragAndDrop.useRenderDropIndicator)(dragAndDropHooks, dropState)
            }),
            emptyState
        ]
    });
});
class TableFooterNode extends (0, _baseCollection.FilterableNode) {
    static type = 'tablefooter';
}
let TableFooterElementType = /*#__PURE__*/ (0, _react.forwardRef)(function TableFooterElementType(props, ref) {
    let { isVirtualized } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    if (isVirtualized) return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).tfoot, {
        ...props,
        ref: ref
    });
});
const TableFooter = /*#__PURE__*/ (0, _collectionBuilder.createBranchComponent)(TableFooterNode, (props, ref, node)=>{
    let state = (0, _react.useContext)(TableStateContext);
    let collection = state.collection;
    let { CollectionBranch } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let { dragAndDropHooks, dropState } = (0, _react.useContext)((0, _dragAndDrop.DragAndDropContext));
    let { rowGroupProps } = (0, _useTable.useTableRowGroup)();
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    let renderProps = (0, _utils.useRenderProps)({
        style: props.style,
        className: props.className,
        defaultClassName: 'react-aria-TableFooter',
        values: {}
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableFooterElementType, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, rowGroupProps),
        ref: ref,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionBranch, {
            collection: collection,
            parent: node,
            renderDropIndicator: (0, _dragAndDrop.useRenderDropIndicator)(dragAndDropHooks, dropState)
        })
    });
});
const RowFocusContext = /*#__PURE__*/ (0, _react.createContext)({
    isFocusVisibleWithinRow: false
});
class TableRowNode extends (0, _baseCollection.CollectionNode) {
    static type = 'item';
    filter(collection, newCollection, filterFn) {
        let cells = collection.getChildren(this.key);
        for (let cell of cells)if (filterFn(cell.textValue, cell)) {
            let clone = this.clone();
            newCollection.addDescendants(clone, collection);
            return clone;
        }
        return null;
    }
}
let TableRowElementType = /*#__PURE__*/ (0, _react.forwardRef)(function TableRowElementType(props, ref) {
    let { isVirtualized } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    if (isVirtualized) return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).tr, {
        ...props,
        ref: ref
    });
});
const Row = /*#__PURE__*/ (0, _collectionBuilder.createBranchComponent)(TableRowNode, (props, forwardedRef, item)=>{
    let ref = (0, _useObjectRef.useObjectRef)(forwardedRef);
    let state = (0, _react.useContext)(TableStateContext);
    let { dragAndDropHooks, dragState, dropState } = (0, _react.useContext)((0, _dragAndDrop.DragAndDropContext));
    let { isVirtualized, CollectionBranch } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let isDraggable = dragState && !(dragState.isDisabled || dragState.selectionManager.isDisabled(item.key));
    let { rowProps, expandButtonProps, ...states } = (0, _useTable.useTableRow)({
        node: item,
        shouldSelectOnPressUp: !!dragState,
        isVirtualized
    }, state, ref);
    let { isFocused, isFocusVisible, focusProps } = (0, _useFocusRing.useFocusRing)();
    let { isFocusVisible: isFocusVisibleWithin, focusProps: focusWithinProps } = (0, _useFocusRing.useFocusRing)({
        within: true
    });
    let { hoverProps, isHovered } = (0, _useHover.useHover)({
        // because of https://bugs.webkit.org/show_bug.cgi?id=214609, supporting hover styles when a item is ONLY isDraggable
        // results in hover styles sticking around after a reorder/drop operation...
        isDisabled: !states.allowsSelection && !states.hasAction && !isDraggable,
        onHoverStart: props.onHoverStart,
        onHoverChange: props.onHoverChange,
        onHoverEnd: props.onHoverEnd
    });
    let { checkboxProps } = (0, _useTable.useTableSelectionCheckbox)({
        key: item.key
    }, state);
    let draggableItem = undefined;
    if (dragState && dragAndDropHooks) draggableItem = dragAndDropHooks.useDraggableItem({
        key: item.key,
        hasDragButton: true
    }, dragState);
    let dropIndicator = undefined;
    let dropIndicatorRef = (0, _react.useRef)(null);
    let { visuallyHiddenProps } = (0, _visuallyHidden.useVisuallyHidden)();
    if (dropState && dragAndDropHooks) dropIndicator = dragAndDropHooks.useDropIndicator({
        target: {
            type: 'item',
            key: item.key,
            dropPosition: 'on'
        }
    }, dropState, dropIndicatorRef);
    let dragButtonRef = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        dragState && dragButtonRef.current;
    // eslint-disable-next-line
    }, []);
    let isDragging = dragState && dragState.isDragging(item.key);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { children: _, ...restProps } = props;
    let hasChildItems = props.hasChildItems || state.collection.getItem(item.lastChildKey)?.type !== 'cell';
    let isExpanded = hasChildItems && state.expandedKeys.has(item.key);
    let renderProps = (0, _utils.useRenderProps)({
        ...restProps,
        id: undefined,
        defaultClassName: 'react-aria-Row',
        defaultStyle: {
            // @ts-ignore
            '--table-row-level': item.level + 1
        },
        values: {
            ...states,
            state,
            isHovered,
            isFocused,
            isFocusVisible,
            selectionMode: state.selectionManager.selectionMode,
            selectionBehavior: state.selectionManager.selectionBehavior,
            isDragging,
            isDropTarget: dropIndicator?.isDropTarget,
            isFocusVisibleWithin,
            id: item.key,
            hasChildItems,
            isExpanded,
            level: item.level + 1
        }
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            dropIndicator && !dropIndicator.isHidden && /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableRowElementType, {
                role: "row",
                style: {
                    height: 0
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableCellElementType, {
                    role: "gridcell",
                    colSpan: state.collection.columnCount,
                    style: {
                        padding: 0
                    },
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        role: "button",
                        ...visuallyHiddenProps,
                        ...dropIndicator.dropIndicatorProps,
                        ref: dropIndicatorRef
                    })
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableRowElementType, {
                ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, rowProps, focusProps, hoverProps, draggableItem?.dragProps, focusWithinProps),
                ref: ref,
                "data-disabled": states.isDisabled || undefined,
                "data-selected": states.isSelected || undefined,
                "data-hovered": isHovered || undefined,
                "data-focused": states.isFocused || undefined,
                "data-focus-visible": isFocusVisible || undefined,
                "data-pressed": states.isPressed || undefined,
                "data-dragging": isDragging || undefined,
                "data-drop-target": dropIndicator?.isDropTarget || undefined,
                "data-selection-mode": state.selectionManager.selectionMode === 'none' ? undefined : state.selectionManager.selectionMode,
                "data-focus-visible-within": isFocusVisibleWithin || undefined,
                "data-expanded": isExpanded || undefined,
                "data-has-child-items": hasChildItems || undefined,
                "data-level": item.level + 1,
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
                                    [(0, _utils.DEFAULT_SLOT)]: {},
                                    chevron: expandButtonProps,
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
                            (0, _selectionIndicator.SelectionIndicatorContext),
                            {
                                isSelected: states.isSelected
                            }
                        ],
                        [
                            RowFocusContext,
                            {
                                isFocusVisibleWithinRow: isFocusVisibleWithin
                            }
                        ]
                    ],
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(CollectionBranch, {
                        collection: state.collection,
                        parent: item
                    })
                })
            })
        ]
    });
}, (props)=>{
    if (props.id == null && typeof props.children === 'function') throw new Error('No id detected for the Row element. The Row element requires a id to be provided to it when the cells are rendered dynamically.');
    let dependencies = [
        props.value
    ].concat(props.dependencies);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collection.Collection), {
        dependencies: dependencies,
        items: props.columns,
        idScope: props.id,
        children: props.children
    });
});
class TableCellNode extends (0, _baseCollection.CollectionNode) {
    static type = 'cell';
}
let TableCellElementType = /*#__PURE__*/ (0, _react.forwardRef)(function TableCellElementType(props, ref) {
    let { isVirtualized } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    if (isVirtualized) return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).td, {
        ...props,
        ref: ref
    });
});
const Cell = /*#__PURE__*/ (0, _collectionBuilder.createLeafComponent)(TableCellNode, (props, forwardedRef, cell)=>{
    let ref = (0, _useObjectRef.useObjectRef)(forwardedRef);
    let state = (0, _react.useContext)(TableStateContext);
    let { dragState } = (0, _react.useContext)((0, _dragAndDrop.DragAndDropContext));
    let { isVirtualized } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    cell.column = state.collection.columns[cell.index];
    let { gridCellProps, isPressed } = (0, _useTable.useTableCell)({
        node: cell,
        shouldSelectOnPressUp: !!dragState,
        isVirtualized,
        focusMode: props.focusMode,
        allowsArrowNavigation: props.allowsArrowNavigation
    }, state, ref);
    let { isFocused, isFocusVisible, focusProps } = (0, _useFocusRing.useFocusRing)();
    let { hoverProps, isHovered } = (0, _useHover.useHover)({});
    let { isFocusVisibleWithinRow } = (0, _react.useContext)(RowFocusContext);
    let isSelected = cell.parentKey != null ? state.selectionManager.isSelected(cell.parentKey) : false;
    // colIndex is null, when there is so span, falling back to using the index
    let columnIndex = cell.colIndex || cell.index;
    let row = state.collection.getItem(cell.parentKey);
    let hasChildItems = row.props.hasChildItems || state.collection.getItem(row.lastChildKey)?.type !== 'cell';
    let isExpanded = hasChildItems && state.expandedKeys.has(cell.parentKey);
    let isDisabled = state.selectionManager.isDisabled(cell.parentKey);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        id: undefined,
        defaultClassName: 'react-aria-Cell',
        values: {
            isFocused,
            isFocusVisible,
            isFocusVisibleWithinRow,
            isPressed,
            isHovered,
            isSelected,
            id: cell.key,
            columnIndex,
            hasChildItems,
            isExpanded,
            isDisabled,
            level: row.level + 1,
            isTreeColumn: cell.column.key === state.treeColumn
        }
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableCellElementType, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, gridCellProps, focusProps, hoverProps),
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-focus-visible-within-row": isFocusVisibleWithinRow || undefined,
        "data-pressed": isPressed || undefined,
        "data-selected": isSelected || undefined,
        "data-column-index": columnIndex,
        "data-expanded": isExpanded || undefined,
        "data-has-child-items": hasChildItems || undefined,
        "data-level": row.level + 1,
        "data-tree-column": cell.column.key === state.treeColumn || undefined,
        "data-disabled": isDisabled || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _collection1.CollectionRendererContext).Provider, {
            value: (0, _collection1.DefaultCollectionRenderer),
            children: renderProps.children
        })
    });
});
function TableDropIndicatorWrapper(props, ref) {
    ref = (0, _useObjectRef.useObjectRef)(ref);
    let { dragAndDropHooks, dropState } = (0, _react.useContext)((0, _dragAndDrop.DragAndDropContext));
    let buttonRef = (0, _react.useRef)(null);
    // oxlint-disable-next-line react/react-compiler
    let { dropIndicatorProps, isHidden, isDropTarget } = dragAndDropHooks.useDropIndicator(props, dropState, buttonRef);
    if (isHidden) return null;
    let level = dropState && props.target.type === 'item' ? (dropState.collection.getItem(props.target.key)?.level || 0) + 1 : 1;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableDropIndicatorForwardRef, {
        ...props,
        dropIndicatorProps: dropIndicatorProps,
        isDropTarget: isDropTarget,
        buttonRef: buttonRef,
        level: level,
        ref: ref
    });
}
let TableDropIndicatorRowElementType = /*#__PURE__*/ (0, _react.forwardRef)(function TableDropIndicatorRowElementType(props, ref) {
    let { isVirtualized } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    if (isVirtualized) return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).tr, {
        ...props,
        ref: ref
    });
});
let TableDropIndicatorTDElementType = /*#__PURE__*/ (0, _react.forwardRef)(function TableDropIndicatorTDElementType(props, ref) {
    let { isVirtualized } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    if (isVirtualized) return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).td, {
        ...props,
        ref: ref
    });
});
function TableDropIndicator(props, ref) {
    let { dropIndicatorProps, isDropTarget, buttonRef, level, ...otherProps } = props;
    let state = (0, _react.useContext)(TableStateContext);
    let { visuallyHiddenProps } = (0, _visuallyHidden.useVisuallyHidden)();
    let renderProps = (0, _utils.useRenderProps)({
        ...otherProps,
        defaultClassName: 'react-aria-DropIndicator',
        defaultStyle: {
            // @ts-ignore
            '--table-row-level': level + 1
        },
        values: {
            isDropTarget
        }
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableDropIndicatorRowElementType, {
        ...(0, _filterDOMProps.filterDOMProps)(props, {
            global: true
        }),
        ...renderProps,
        role: "row",
        ref: ref,
        "data-drop-target": isDropTarget || undefined,
        "aria-level": level,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(TableDropIndicatorTDElementType, {
            role: "gridcell",
            colSpan: state.collection.columnCount,
            style: {
                padding: 0
            },
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
const TableDropIndicatorForwardRef = /*#__PURE__*/ (0, _react.forwardRef)(TableDropIndicator);
function RootDropIndicator() {
    let state = (0, _react.useContext)(TableStateContext);
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
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableRowElementType, {
        role: "row",
        "aria-hidden": dropIndicatorProps['aria-hidden'],
        style: {
            height: 0
        },
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableCellElementType, {
            role: "gridcell",
            colSpan: state.collection.columnCount,
            style: {
                padding: 0
            },
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                role: "button",
                ...visuallyHiddenProps,
                ...dropIndicatorProps,
                ref: ref
            })
        })
    });
}
const TableLoadMoreItem = (0, _collectionBuilder.createLeafComponent)((0, _baseCollection.LoaderNode), function TableLoadingIndicator(props, ref, item) {
    let state = (0, _react.useContext)(TableStateContext);
    let { isVirtualized } = (0, _react.useContext)((0, _collection1.CollectionRendererContext));
    let { isLoading, onLoadMore, scrollOffset, ...otherProps } = props;
    let numColumns = state.collection.columns.length;
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
        defaultClassName: 'react-aria-TableLoadingIndicator',
        defaultStyle: {
            // @ts-ignore
            '--table-row-level': item.level + 1
        },
        values: undefined
    });
    let rowProps = {};
    let rowHeaderProps = {};
    let style = {};
    if (isVirtualized) {
        // For now don't include aria-rowindex on loader since they aren't keyboard focusable
        // Arguably shouldn't include them ever since it might be confusing to the user to include the loaders as part of the
        // row count
        rowHeaderProps['aria-colspan'] = numColumns;
        style = {
            display: 'contents'
        };
    } else rowHeaderProps['colSpan'] = numColumns;
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableRowElementType, {
                style: {
                    height: 0
                },
                inert: (0, _inertValue.inertValue)(true),
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableCellElementType, {
                    style: {
                        padding: 0,
                        border: 0
                    },
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        "data-testid": "loadMoreSentinel",
                        ref: sentinelRef,
                        style: {
                            position: 'relative',
                            height: 1,
                            width: 1
                        }
                    })
                })
            }),
            isLoading && renderProps.children && /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableRowElementType, {
                ...(0, _mergeProps.mergeProps)((0, _filterDOMProps.filterDOMProps)(props, {
                    global: true
                }), rowProps),
                ...renderProps,
                role: "row",
                ref: ref,
                "aria-level": item.level + 1,
                "data-level": item.level + 1,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableCellElementType, {
                    role: "rowheader",
                    ...rowHeaderProps,
                    style: style,
                    children: renderProps.children
                })
            })
        ]
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/private/collections/BaseCollection":"imRDY","react-stately/private/table/TableCollection":"hQgZU","./Button":"enBVm","./Checkbox":"kjgFU","./utils":"jtWJJ","react-aria/Collection":"kFD1B","react-aria/CollectionBuilder":"kFD1B","./Collection":"4TSYQ","./DragAndDrop":"kbk3K","./Autocomplete":"dHgny","react-aria/filterDOMProps":"h4XHF","react-aria/FocusScope":"E8d3D","react-aria/private/utils/inertValue":"hBYeu","../intl/index.js":"4xy5f","react-aria/private/utils/isScrollable":"2UC33","react-aria/ListKeyboardDelegate":"hxzwH","react-aria/private/utils/useLoadMoreSentinel":"1ahiI","react-aria/mergeProps":"jycxS","react-aria/mergeRefs":"jspQh","react":"gOP0N","react-dom":"gOP0N","./SelectionIndicator":"4EL3s","./SharedElementTransition":"2Pl2F","react-stately/useTableState":[["UNSTABLE_useFilteredTableState","eGC13"],["useTableState","eGC13"],["useTableColumnResizeState","6ZKfw"]],"./TreeDropTargetDelegate":"xDMSQ","react-aria/private/collections/useCachedChildren":"5c0At","react-stately/useControlledState":"8yNBD","react-aria/useFocusRing":"bP7um","react-aria/useHover":"2yLrj","react-aria/private/utils/useLayoutEffect":"h7M6K","react-aria/I18nProvider":"czGuc","react-aria/useLocalizedStringFormatter":"8lll3","react-stately/useMultipleSelectionState":"c53PS","react-aria/useObjectRef":"ec0NJ","react-aria/private/utils/useResizeObserver":"58iim","react-aria/useTable":[["useTable","dpdvP"],["useTableCell","hbHbI"],["useTableColumnHeader","hTpKl"],["useTableColumnResize","4DkUQ"],["useTableHeaderRow","2mZVh"],["useTableRow","kOphs"],["useTableRowGroup","idhTU"],["useTableSelectAllCheckbox","7w4Uk"],["useTableSelectionCheckbox","7w4Uk"]],"react-aria/VisuallyHidden":"cMf28","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

