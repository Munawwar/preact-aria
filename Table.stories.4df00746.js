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
})({"6ZKfw":[function(require,module,exports,__globalThis) {
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
 * Provides column width state management for a table component with column resizing support.
 * Handles building a map of column widths calculated from the table's width and any provided column
 * width information from the collection. In addition, it tracks the currently resizing column and
 * provides callbacks for updating the widths upon resize operations.
 *
 * @param props - Props for the table.
 * @param state - State for the table, as returned by `useTableState`.
 */ parcelHelpers.export(exports, "useTableColumnResizeState", ()=>useTableColumnResizeState);
var _tableColumnLayout = require("./TableColumnLayout");
var _react = require("react");
function useTableColumnResizeState(props, state) {
    let { getDefaultWidth, getDefaultMinWidth, tableWidth = 0 } = props;
    let [resizingColumn, setResizingColumn] = (0, _react.useState)(null);
    let columnLayout = (0, _react.useMemo)(()=>new (0, _tableColumnLayout.TableColumnLayout)({
            getDefaultWidth,
            getDefaultMinWidth
        }), [
        getDefaultWidth,
        getDefaultMinWidth
    ]);
    let [controlledColumns, uncontrolledColumns] = (0, _react.useMemo)(()=>columnLayout.splitColumnsIntoControlledAndUncontrolled(state.collection.columns), [
        state.collection.columns,
        columnLayout
    ]);
    // uncontrolled column widths
    let [uncontrolledWidths, setUncontrolledWidths] = (0, _react.useState)(()=>columnLayout.getInitialUncontrolledWidths(uncontrolledColumns));
    // Update uncontrolled widths if the columns changed.
    let [lastColumns, setLastColumns] = (0, _react.useState)(state.collection.columns);
    if (state.collection.columns !== lastColumns) {
        if (state.collection.columns.length !== lastColumns.length || state.collection.columns.some((c, i)=>c.key !== lastColumns[i].key)) {
            let newUncontrolledWidths = columnLayout.getInitialUncontrolledWidths(uncontrolledColumns);
            setUncontrolledWidths(newUncontrolledWidths);
        }
        setLastColumns(state.collection.columns);
    }
    // combine columns back into one map that maintains same order as the columns
    let colWidths = (0, _react.useMemo)(()=>columnLayout.recombineColumns(state.collection.columns, uncontrolledWidths, uncontrolledColumns, controlledColumns), [
        state.collection.columns,
        uncontrolledWidths,
        uncontrolledColumns,
        controlledColumns,
        columnLayout
    ]);
    let startResize = (0, _react.useCallback)((key)=>{
        setResizingColumn(key);
    }, [
        setResizingColumn
    ]);
    let updateResizedColumns = (0, _react.useCallback)((key, width)=>{
        let newSizes = columnLayout.resizeColumnWidth(state.collection, uncontrolledWidths, key, width);
        let map = new Map(Array.from(uncontrolledColumns).map(([key])=>[
                key,
                newSizes.get(key)
            ]));
        map.set(key, width);
        setUncontrolledWidths(map);
        return newSizes;
    }, [
        uncontrolledColumns,
        setUncontrolledWidths,
        columnLayout,
        state.collection,
        uncontrolledWidths
    ]);
    let endResize = (0, _react.useCallback)(()=>{
        setResizingColumn(null);
    }, [
        setResizingColumn
    ]);
    let columnWidths = (0, _react.useMemo)(()=>columnLayout.buildColumnWidths(tableWidth, state.collection, colWidths), [
        tableWidth,
        state.collection,
        colWidths,
        columnLayout
    ]);
    return (0, _react.useMemo)(()=>({
            resizingColumn,
            updateResizedColumns,
            startResize,
            endResize,
            getColumnWidth: (key)=>columnLayout.getColumnWidth(key),
            getColumnMinWidth: (key)=>columnLayout.getColumnMinWidth(key),
            getColumnMaxWidth: (key)=>columnLayout.getColumnMaxWidth(key),
            tableState: state,
            columnWidths
        }), [
        columnLayout,
        columnWidths,
        resizingColumn,
        updateResizedColumns,
        startResize,
        endResize,
        state
    ]);
}

},{"./TableColumnLayout":"28CKB","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"28CKB":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "TableColumnLayout", ()=>TableColumnLayout);
var _tableUtils = require("./TableUtils");
class TableColumnLayout {
    getDefaultWidth;
    getDefaultMinWidth;
    columnWidths = new Map();
    columnMinWidths = new Map();
    columnMaxWidths = new Map();
    constructor(options){
        this.getDefaultWidth = options?.getDefaultWidth ?? (()=>'1fr');
        this.getDefaultMinWidth = options?.getDefaultMinWidth ?? (()=>75);
    }
    /**
   * Takes an array of columns and splits it into 2 maps of columns with controlled and columns with
   * uncontrolled widths.
   */ splitColumnsIntoControlledAndUncontrolled(columns) {
        return columns.reduce((acc, col)=>{
            if (col.props.width != null) acc[0].set(col.key, col);
            else acc[1].set(col.key, col);
            return acc;
        }, [
            new Map(),
            new Map()
        ]);
    }
    /** Takes uncontrolled and controlled widths and joins them into a single Map. */ recombineColumns(columns, uncontrolledWidths, uncontrolledColumns, controlledColumns) {
        return new Map(columns.map((col)=>{
            if (uncontrolledColumns.has(col.key)) return [
                col.key,
                uncontrolledWidths.get(col.key)
            ];
            else return [
                col.key,
                controlledColumns.get(col.key).props.width
            ];
        }));
    }
    /** Used to make an initial Map of the uncontrolled widths based on default widths. */ getInitialUncontrolledWidths(uncontrolledColumns) {
        return new Map(Array.from(uncontrolledColumns).map(([key, col])=>[
                key,
                col.props.defaultWidth ?? this.getDefaultWidth?.(col) ?? '1fr'
            ]));
    }
    getColumnWidth(key) {
        return this.columnWidths.get(key) ?? 0;
    }
    getColumnMinWidth(key) {
        return this.columnMinWidths.get(key) ?? 0;
    }
    getColumnMaxWidth(key) {
        return this.columnMaxWidths.get(key) ?? 0;
    }
    resizeColumnWidth(collection, uncontrolledWidths, col, width) {
        let prevColumnWidths = this.columnWidths;
        let freeze = true;
        let newWidths = new Map();
        width = Math.max(this.getColumnMinWidth(col), Math.min(this.getColumnMaxWidth(col), Math.floor(width)));
        collection.columns.forEach((column)=>{
            if (column.key === col) {
                newWidths.set(column.key, width);
                freeze = false;
            } else if (freeze) // freeze columns to the left to their previous pixel value
            newWidths.set(column.key, prevColumnWidths.get(column.key) ?? 0);
            else newWidths.set(column.key, column.props.width ?? uncontrolledWidths.get(column.key));
        });
        return newWidths;
    }
    buildColumnWidths(tableWidth, collection, widths) {
        this.columnWidths = new Map();
        this.columnMinWidths = new Map();
        this.columnMaxWidths = new Map();
        // initial layout or table/window resizing
        let columnWidths = (0, _tableUtils.calculateColumnSizes)(tableWidth, collection.columns.map((col)=>({
                ...col.props,
                key: col.key
            })), widths, (i)=>this.getDefaultWidth(collection.columns[i]), (i)=>this.getDefaultMinWidth(collection.columns[i]));
        // columns going in will be the same order as the columns coming out
        columnWidths.forEach((width, index)=>{
            let key = collection.columns[index].key;
            let column = collection.columns[index];
            this.columnWidths.set(key, width);
            this.columnMinWidths.set(key, (0, _tableUtils.getMinWidth)(column.props.minWidth ?? this.getDefaultMinWidth(column), tableWidth));
            this.columnMaxWidths.set(key, (0, _tableUtils.getMaxWidth)(column.props.maxWidth, tableWidth));
        });
        return this.columnWidths;
    }
}

},{"./TableUtils":"fhZci","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fhZci":[function(require,module,exports,__globalThis) {
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
// numbers and percents are considered static. *fr units or a lack of units are considered dynamic.
parcelHelpers.export(exports, "isStatic", ()=>isStatic);
parcelHelpers.export(exports, "parseFractionalUnit", ()=>parseFractionalUnit);
parcelHelpers.export(exports, "parseStaticWidth", ()=>parseStaticWidth);
parcelHelpers.export(exports, "getMaxWidth", ()=>getMaxWidth);
// cannot support FR units, we'd need to know everything else in the table to do that
parcelHelpers.export(exports, "getMinWidth", ()=>getMinWidth);
/**
 * Implements the flex algorithm described in https://www.w3.org/TR/css-flexbox-1/#layout-algorithm
 * It makes a few constraint/assumptions: 1. All basis values are 0 unless it is a static width,
 * then the basis is the static width 2. All flex grow and shrink values are equal to the FR
 * specified on the column, grow and shrink for the same column are equal 3. We only have one row An
 * example of the setup can be seen here https://jsfiddle.net/snowystinger/wv0ymjaf/61/ where I let
 * the browser figure out the flex of the columns. Note: We differ in one key aspect, all of our
 * column widths must be whole numbers, so we avoid browser sub pixel rounding errors. To do this,
 * we use a cascading rounding algorithm to ensure that the sum of the widths is maintained while
 * distributing the rounding remainder across the columns.
 *
 * As noted in the chrome source code, this algorithm is very accurate, but has the potential to be
 * quadratic. They have deemed this to be acceptable because the number of elements is usually small
 * and the flex factors are usually not high variance. I believe we can make the same assumptions.
 * Particularly once resizing is started, it will convert all columns to the left to static widths,
 * so it will cut down on the number of FR columns.
 *
 * There are likely faster ways to do this, I've chosen to stick to the spec as closely as possible
 * for readability, accuracy, and for the note that this behaving quadratically is unlikely to be a
 * problem.
 *
 * @param availableWidth - The visible width of the table.
 * @param columns - The table defined columns.
 * @param changedColumns - Any columns we want to override, for example, during resizing.
 * @param getDefaultWidth - A function that returns the default width of a column by its index.
 * @param getDefaultMinWidth - A function that returns the default min width of a column by its
 *   index.
 */ parcelHelpers.export(exports, "calculateColumnSizes", ()=>calculateColumnSizes);
function isStatic(width) {
    return width != null && (!isNaN(width) || String(width).match(/^(\d+)(?=%$)/) !== null);
}
function parseFractionalUnit(width) {
    if (!width || typeof width === 'number') return 1;
    let match = width.match(/^(.+)(?=fr$)/);
    // if width is the incorrect format, just default it to a 1fr
    if (!match) return 1;
    return parseFloat(match[0]);
}
function parseStaticWidth(width, tableWidth) {
    if (typeof width === 'string') {
        let match = width.match(/^(\d+)(?=%$)/);
        if (!match) throw new Error('Only percentages or numbers are supported for static column widths');
        return tableWidth * (parseFloat(match[0]) / 100);
    }
    return width;
}
function getMaxWidth(maxWidth, tableWidth) {
    return maxWidth != null ? parseStaticWidth(maxWidth, tableWidth) : Number.MAX_SAFE_INTEGER;
}
function getMinWidth(minWidth, tableWidth) {
    return minWidth != null ? parseStaticWidth(minWidth, tableWidth) : 0;
}
function calculateColumnSizes(availableWidth, columns, changedColumns, getDefaultWidth, getDefaultMinWidth) {
    let originalWidth = availableWidth;
    let flooredWidth = Math.floor(availableWidth);
    let hasFractionalWidth = availableWidth - flooredWidth > 0;
    availableWidth = flooredWidth;
    let hasNonFrozenItems = false;
    let flexItems = columns.map((column, index)=>{
        let width = changedColumns.get(column.key) != null ? changedColumns.get(column.key) ?? '1fr' : column.width ?? column.defaultWidth ?? getDefaultWidth?.(index) ?? '1fr';
        let frozen = false;
        let baseSize = 0;
        let flex = 0;
        let targetMainSize = 0;
        if (isStatic(width)) {
            baseSize = parseStaticWidth(width, availableWidth);
            frozen = true;
        } else {
            flex = parseFractionalUnit(width);
            if (flex <= 0) frozen = true;
        }
        let min = getMinWidth(column.minWidth ?? getDefaultMinWidth?.(index) ?? 0, availableWidth);
        let max = getMaxWidth(column.maxWidth, availableWidth);
        let hypotheticalMainSize = Math.max(min, Math.min(baseSize, max));
        // 9.7.1
        // We don't make use of flex basis, it's always 0, so we are always in 'grow' mode.
        // 9.7.2
        if (frozen) targetMainSize = hypotheticalMainSize;
        else if (baseSize > hypotheticalMainSize) {
            frozen = true;
            targetMainSize = hypotheticalMainSize;
        }
        // 9.7.3
        if (!frozen) hasNonFrozenItems = true;
        return {
            frozen,
            baseSize,
            hypotheticalMainSize,
            min,
            max,
            flex,
            targetMainSize,
            violation: 0
        };
    });
    // 9.7.4
    // 9.7.4.a
    while(hasNonFrozenItems){
        // 9.7.4.b
        /**
     * Calculate the remaining free space as for initial free space,
     * above (9.7.3). If the sum of the unfrozen flex items’ flex factors is
     * less than one, multiply the initial free space by this sum (of flex factors).
     * If the magnitude of this value is less than the magnitude of
     * the remaining free space, use this as the remaining free space.
     */ let usedWidth = 0;
        let flexFactors = 0;
        flexItems.forEach((item)=>{
            if (item.frozen) usedWidth += item.targetMainSize;
            else {
                usedWidth += item.baseSize;
                flexFactors += item.flex;
            }
        });
        let remainingFreeSpace = availableWidth - usedWidth;
        // we only support integer FR's, and because of hasNonFrozenItems, we know that flexFactors > 0
        // so no need to check for flexFactors < 1
        // 9.7.4.c
        /**
     * If the remaining free space is zero
     * - Do nothing.
     * Else // remember, we're always in grow mode
     * - Find the ratio of the item’s flex grow factor to the
     * sum of the flex grow factors of all unfrozen items on
     * the line. Set the item’s target main size to its flex
     * base size plus a fraction of the remaining free space
     * proportional to the ratio.
     */ if (remainingFreeSpace > 0) flexItems.forEach((item)=>{
            if (!item.frozen) {
                let ratio = item.flex / flexFactors;
                item.targetMainSize = item.baseSize + ratio * remainingFreeSpace;
            }
        });
        // 9.7.4.d
        /**
     * Fix min/max violations. Clamp each non-frozen item’s
     * target main size by its used min and max main sizes
     * and floor its content-box size at zero. If the item’s
     * target main size was made smaller by this, it’s a max
     * violation. If the item’s target main size was made
     * larger by this, it’s a min violation.
     */ let totalViolation = 0;
        flexItems.forEach((item)=>{
            item.violation = 0;
            if (!item.frozen) {
                let { min, max, targetMainSize } = item;
                item.targetMainSize = Math.max(min, Math.min(targetMainSize, max));
                item.violation = item.targetMainSize - targetMainSize;
                totalViolation += item.violation;
            }
        });
        // 9.7.4.e
        /**
     * Freeze over-flexed items. The total violation is the
     * sum of the adjustments from the previous step
     * ∑(clamped size - unclamped size). If the total violation is:
     * Zero
     * - Freeze all items.
     *
     * Positive
     * - Freeze all the items with min violations.
     *
     * Negative
     * - Freeze all the items with max violations.
     */ hasNonFrozenItems = false;
        flexItems.forEach((item)=>{
            if (totalViolation === 0 || Math.sign(totalViolation) === Math.sign(item.violation)) item.frozen = true;
            else if (!item.frozen) hasNonFrozenItems = true;
        });
    }
    let columnSizes = cascadeRounding(flexItems);
    // Give the leftover sub-pixel width to the last column so the columns sum
    // exactly to the (possibly fractional) available width.
    if (hasFractionalWidth && columnSizes.length > 0) {
        let tableFractionalWidth = originalWidth.toString().split('.')[1];
        let columnWidth = columnSizes[columnSizes.length - 1].toString();
        columnSizes[columnSizes.length - 1] = Number(columnWidth + '.' + tableFractionalWidth);
    }
    return columnSizes;
}
function cascadeRounding(flexItems) {
    /*
  Given an array of floats that sum to an integer, this rounds the floats
  and returns an array of integers with the same sum.
  */ let fpTotal = 0;
    let intTotal = 0;
    let roundedArray = [];
    flexItems.forEach(function(item) {
        let float = item.targetMainSize;
        let integer = Math.round(float + fpTotal) - intTotal;
        fpTotal += float;
        intTotal += integer;
        roundedArray.push(integer);
    });
    return roundedArray;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4DkUQ":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a table column resizer element.
 *
 * @param props - Props for the resizer.
 * @param state - State for the table's resizable columns, as returned by
 *   `useTableColumnResizeState`.
 * @param ref - The ref attached to the resizer's visually hidden input element.
 */ parcelHelpers.export(exports, "useTableColumnResize", ()=>useTableColumnResize);
var _react = require("react");
var _focusSafely = require("../interactions/focusSafely");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _utils = require("./utils");
var _indexJs = require("../../intl/table/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mergeProps = require("../utils/mergeProps");
var _useDescription = require("../utils/useDescription");
var _useEffectEvent = require("../utils/useEffectEvent");
var _useId = require("../utils/useId");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _useKeyboard = require("../interactions/useKeyboard");
var _i18Nprovider = require("../i18n/I18nProvider");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
var _useMove = require("../interactions/useMove");
var _usePress = require("../interactions/usePress");
var _visuallyHidden = require("../visually-hidden/VisuallyHidden");
function useTableColumnResize(props, state, ref) {
    let { column: item, triggerRef, isDisabled, onResizeStart, onResize, onResizeEnd, 'aria-label': ariaLabel } = props;
    const stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/table');
    let id = (0, _useId.useId)();
    let isResizing = state.resizingColumn === item.key;
    let isResizingRef = (0, _react.useRef)(isResizing);
    let lastSize = (0, _react.useRef)(null);
    let wasFocusedOnResizeStart = (0, _react.useRef)(false);
    let editModeEnabled = state.tableState.isKeyboardNavigationDisabled;
    // Whether a mouse drag-resize is active. Set on the first move (not on press) so a cursor
    // overlay only mounts during an actual drag.
    let [isMouseResizing, setMouseResizing] = (0, _react.useState)(false);
    let { direction } = (0, _i18Nprovider.useLocale)();
    let startResize = (0, _react.useCallback)((item)=>{
        if (!isResizingRef.current) {
            lastSize.current = state.updateResizedColumns(item.key, state.getColumnWidth(item.key));
            state.startResize(item.key);
            state.tableState.setKeyboardNavigationDisabled(true);
            onResizeStart?.(lastSize.current);
        }
        isResizingRef.current = true;
    }, [
        state,
        onResizeStart
    ]);
    let resize = (0, _react.useCallback)((item, newWidth)=>{
        let sizes = state.updateResizedColumns(item.key, newWidth);
        onResize?.(sizes);
        lastSize.current = sizes;
    }, [
        state,
        onResize
    ]);
    let endResize = (0, _react.useCallback)((item)=>{
        if (isResizingRef.current) {
            if (lastSize.current == null) lastSize.current = state.updateResizedColumns(item.key, state.getColumnWidth(item.key));
            state.endResize();
            state.tableState.setKeyboardNavigationDisabled(false);
            onResizeEnd?.(lastSize.current);
            isResizingRef.current = false;
            if (triggerRef?.current && !wasFocusedOnResizeStart.current) // switch focus back to the column header unless the resizer was already focused when resizing started.
            (0, _focusSafely.focusSafely)(triggerRef.current);
        }
        lastSize.current = null;
    }, [
        state,
        triggerRef,
        onResizeEnd
    ]);
    let endResizeEvent = ()=>{
        if (editModeEnabled) {
            endResize(item);
            return;
        }
        return false;
    };
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            Escape: ()=>{
                return endResizeEvent();
            },
            Enter: ()=>{
                if (editModeEnabled) endResize(item);
                else startResize(item);
            },
            ' ': ()=>{
                return endResizeEvent();
            },
            Tab: ()=>{
                return endResizeEvent();
            }
        }
    });
    const columnResizeWidthRef = (0, _react.useRef)(0);
    const { moveProps } = (0, _useMove.useMove)({
        onMoveStart (e) {
            columnResizeWidthRef.current = state.getColumnWidth(item.key);
            if (e.pointerType === 'mouse') setMouseResizing(true);
            startResize(item);
        },
        onMove (e) {
            let { deltaX, deltaY, pointerType } = e;
            if (direction === 'rtl') deltaX *= -1;
            if (pointerType === 'keyboard') {
                if (deltaY !== 0 && deltaX === 0) deltaX = deltaY * -1;
                deltaX *= 10;
            }
            // if moving up/down only, no need to resize
            if (deltaX !== 0) {
                columnResizeWidthRef.current += deltaX;
                resize(item, columnResizeWidthRef.current);
            }
        },
        onMoveEnd (e) {
            let { pointerType } = e;
            columnResizeWidthRef.current = 0;
            setMouseResizing(false);
            if (pointerType === 'mouse' || pointerType === 'touch' && wasFocusedOnResizeStart.current) endResize(item);
        }
    });
    let onKeyDown = (0, _react.useCallback)((e)=>{
        if (editModeEnabled) moveProps.onKeyDown?.(e);
    }, [
        editModeEnabled,
        moveProps
    ]);
    let min = Math.floor(state.getColumnMinWidth(item.key));
    let max = Math.floor(state.getColumnMaxWidth(item.key));
    if (max === Infinity) max = Number.MAX_SAFE_INTEGER;
    let value = Math.floor(state.getColumnWidth(item.key));
    let modality = (0, _useFocusVisible.useInteractionModality)();
    if (modality === 'virtual' && typeof window !== 'undefined' && 'ontouchstart' in window) modality = 'touch';
    let description = // oxlint-disable-next-line react/react-compiler
    triggerRef?.current == null && (modality === 'keyboard' || modality === 'virtual') && !isResizing ? stringFormatter.format('resizerDescription') : undefined;
    let descriptionProps = (0, _useDescription.useDescription)(description);
    let ariaProps = {
        'aria-label': ariaLabel,
        'aria-orientation': 'horizontal',
        'aria-labelledby': `${id} ${(0, _utils.getColumnHeaderId)(state.tableState, item.key)}`,
        'aria-valuetext': stringFormatter.format('columnSize', {
            value
        }),
        type: 'range',
        min,
        max,
        value,
        ...descriptionProps
    };
    const focusInput = (0, _react.useCallback)(()=>{
        if (ref.current) (0, _focusSafely.focusSafely)(ref.current);
    }, [
        ref
    ]);
    let resizingColumn = state.resizingColumn;
    let prevResizingColumn = (0, _react.useRef)(null);
    let startResizeEvent = (0, _useEffectEvent.useEffectEvent)(startResize);
    (0, _react.useEffect)(()=>{
        if (prevResizingColumn.current !== resizingColumn && resizingColumn != null && resizingColumn === item.key) {
            wasFocusedOnResizeStart.current = (0, _domfunctions.getActiveElement)() === ref.current;
            startResizeEvent(item);
            // Delay focusing input until Android Chrome's delayed click after touchend happens: https://bugs.chromium.org/p/chromium/issues/detail?id=1150073
            let timeout = setTimeout(()=>focusInput(), 0);
            // VoiceOver on iOS has problems focusing the input from a menu.
            let VOTimeout = setTimeout(focusInput, 400);
            return ()=>{
                clearTimeout(timeout);
                clearTimeout(VOTimeout);
            };
        }
        prevResizingColumn.current = resizingColumn;
    }, [
        resizingColumn,
        item,
        focusInput,
        ref
    ]);
    let onChange = (e)=>{
        let currentWidth = state.getColumnWidth(item.key);
        let nextValue = parseFloat((0, _domfunctions.getEventTarget)(e).value);
        if (nextValue > currentWidth) nextValue = currentWidth + 10;
        else nextValue = currentWidth - 10;
        resize(item, nextValue);
    };
    let { pressProps } = (0, _usePress.usePress)({
        preventFocusOnPress: true,
        onPressStart: (e)=>{
            if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey || e.pointerType === 'keyboard') return;
            if (e.pointerType === 'virtual' && state.resizingColumn != null) {
                endResize(item);
                return;
            }
            // Sometimes onPress won't trigger for quick taps on mobile so we want to focus the input so blurring away
            // can cancel resize mode for us.
            focusInput();
            // If resizer is always visible, mobile screenreader user can access the visually hidden resizer directly and thus we don't need
            // to handle a virtual click to start the resizer.
            if (e.pointerType !== 'virtual') startResize(item);
        },
        onPress: (e)=>{
            if ((e.pointerType === 'touch' && wasFocusedOnResizeStart.current || e.pointerType === 'mouse') && state.resizingColumn != null) endResize(item);
        }
    });
    let { visuallyHiddenProps } = (0, _visuallyHidden.useVisuallyHidden)();
    return {
        resizerProps: (0, _mergeProps.mergeProps)(keyboardProps, {
            ...moveProps,
            onKeyDown
        }, pressProps, {
            style: {
                touchAction: 'none'
            }
        }),
        inputProps: (0, _mergeProps.mergeProps)(visuallyHiddenProps, // oxlint-disable-next-line react/react-compiler
        {
            id,
            onBlur: ()=>{
                endResize(item);
            },
            onChange,
            disabled: isDisabled
        }, ariaProps),
        isResizing,
        isMouseResizing
    };
}

},{"react":"gOP0N","../interactions/focusSafely":"2xT6S","../utils/shadowdom/DOMFunctions":"8kfpz","./utils":"kyAxC","../../intl/table/index.js":"9Q91M","../utils/mergeProps":"jycxS","../utils/useDescription":"1bivM","../utils/useEffectEvent":"grBNM","../utils/useId":"fQAcb","../interactions/useFocusVisible":"aBfUW","../interactions/useKeyboard":"aHm7i","../i18n/I18nProvider":"czGuc","../i18n/useLocalizedStringFormatter":"8lll3","../interactions/useMove":"iFW04","../interactions/usePress":"3S2KR","../visually-hidden/VisuallyHidden":"cMf28","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7w4Uk":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a selection checkbox in a table.
 *
 * @param props - Props for the selection checkbox.
 * @param state - State of the table, as returned by `useTableState`.
 */ parcelHelpers.export(exports, "useTableSelectionCheckbox", ()=>useTableSelectionCheckbox);
/**
 * Provides the behavior and accessibility implementation for the select all checkbox in a table.
 *
 * @param props - Props for the select all checkbox.
 * @param state - State of the table, as returned by `useTableState`.
 */ parcelHelpers.export(exports, "useTableSelectAllCheckbox", ()=>useTableSelectAllCheckbox);
var _utils = require("./utils");
var _indexJs = require("../../intl/table/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _useGridSelectionCheckbox = require("../grid/useGridSelectionCheckbox");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
function useTableSelectionCheckbox(props, state) {
    let { key } = props;
    const { checkboxProps } = (0, _useGridSelectionCheckbox.useGridSelectionCheckbox)(props, state);
    return {
        checkboxProps: {
            ...checkboxProps,
            'aria-labelledby': `${checkboxProps.id} ${(0, _utils.getRowLabelledBy)(state, key)}`
        }
    };
}
function useTableSelectAllCheckbox(state) {
    let { isEmpty, isSelectAll, selectionMode } = state.selectionManager;
    const stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/table');
    return {
        checkboxProps: {
            'aria-label': stringFormatter.format(selectionMode === 'single' ? 'select' : 'selectAll'),
            isSelected: isSelectAll,
            isDisabled: selectionMode !== 'multiple' || state.collection.size === 0 || state.collection.rows.length === 1 && state.collection.rows[0].type === 'loader',
            isIndeterminate: !isEmpty && !isSelectAll,
            onChange: ()=>state.selectionManager.toggleSelectAll()
        }
    };
}

},{"./utils":"kyAxC","../../intl/table/index.js":"9Q91M","../grid/useGridSelectionCheckbox":"7PIkk","../i18n/useLocalizedStringFormatter":"8lll3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

