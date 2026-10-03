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
})({"gDVCE":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
parcelHelpers.export(exports, "GridFocusModeRowCellFocusModeCell", ()=>GridFocusModeRowCellFocusModeCell);
parcelHelpers.export(exports, "GridFocusModeRowCellFocusModeChild", ()=>GridFocusModeRowCellFocusModeChild);
parcelHelpers.export(exports, "GridFocusModeCellCellFocusModeChild", ()=>GridFocusModeCellCellFocusModeChild);
parcelHelpers.export(exports, "GridFocusModeCellCellFocusModeCell", ()=>GridFocusModeCellCellFocusModeCell);
var _jsxRuntime = require("preact/jsx-runtime");
var _exampleTsx = require("./example.tsx");
var _itemTs = require("../../../../../../../vendor/react-stately/exports/Item.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _switchTs = require("../../../@adobe/react-spectrum/exports/Switch.ts");
exports.default = {
    title: 'useGrid',
    component: (0, _exampleTsx.Grid)
};
const GridFocusModeRowCellFocusModeCell = {
    render: ()=>render({
            gridFocusMode: 'row',
            cellFocusMode: 'cell'
        }),
    name: 'gridFocusMode = row, cellFocusMode = cell'
};
const GridFocusModeRowCellFocusModeChild = {
    render: ()=>render({
            gridFocusMode: 'row',
            cellFocusMode: 'child'
        }),
    name: 'gridFocusMode = row, cellFocusMode = child'
};
const GridFocusModeCellCellFocusModeChild = {
    render: ()=>render({
            gridFocusMode: 'cell',
            cellFocusMode: 'child'
        }),
    name: 'gridFocusMode = cell, cellFocusMode = child'
};
const GridFocusModeCellCellFocusModeCell = {
    render: ()=>render({
            gridFocusMode: 'cell',
            cellFocusMode: 'cell'
        }),
    name: 'gridFocusMode = cell, cellFocusMode = cell'
};
function render(props = {}) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _exampleTsx.Grid), {
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _itemTs.Item), {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _switchTs.Switch), {
                        "aria-label": "Switch 1"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _switchTs.Switch), {
                        "aria-label": "Switch 2"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _itemTs.Item), {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _switchTs.Switch), {
                        "aria-label": "Switch 1"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _switchTs.Switch), {
                        "aria-label": "Switch 2"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _switchTs.Switch), {
                        "aria-label": "Switch 3"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _itemTs.Item), {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _switchTs.Switch), {
                        "aria-label": "Switch 1"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _switchTs.Switch), {
                        "aria-label": "Switch 2"
                    })
                ]
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","./example.tsx":"aoT4E","../../../../../../../vendor/react-stately/exports/Item.ts":"9bTDv","react":"gOP0N","../../../@adobe/react-spectrum/exports/Switch.ts":"7SV0K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aoT4E":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
parcelHelpers.export(exports, "Grid", ()=>Grid);
var _jsxRuntime = require("preact/jsx-runtime");
var _gridCollectionTs = require("../../../../../../../vendor/react-stately/exports/private/grid/GridCollection.ts");
var _mergePropsTs = require("../../../../../../../vendor/react-aria/src/utils/mergeProps.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useFocusTs = require("../../../../../../../vendor/react-aria/src/interactions/useFocus.ts");
var _useGridTs = require("../../../../../../../vendor/react-aria/src/grid/useGrid.ts");
var _useGridCellTs = require("../../../../../../../vendor/react-aria/src/grid/useGridCell.ts");
var _useGridRowTs = require("../../../../../../../vendor/react-aria/src/grid/useGridRow.ts");
var _useGridStateTs = require("../../../../../../../vendor/react-stately/exports/private/grid/useGridState.ts");
var _useListStateTs = require("../../../../../../../vendor/react-stately/exports/useListState.ts");
function Grid(props) {
    let { gridFocusMode = 'row', cellFocusMode = 'child' } = props;
    let state = (0, _useListStateTs.useListState)(props);
    let gridState = (0, _useGridStateTs.useGridState)({
        ...props,
        selectionMode: 'multiple',
        collection: (0, _reactDefault.default).useMemo(()=>new (0, _gridCollectionTs.GridCollection)({
                columnCount: 1,
                items: [
                    ...state.collection
                ].map((item)=>({
                        type: 'item',
                        childNodes: [
                            {
                                ...item,
                                index: 0,
                                type: 'cell'
                            }
                        ]
                    }))
            }), [
            state.collection
        ])
    });
    let ref = (0, _reactDefault.default).useRef(null);
    let { gridProps } = (0, _useGridTs.useGrid)({
        'aria-label': 'Grid',
        focusMode: gridFocusMode
    }, gridState, ref);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        ...gridProps,
        ref: ref,
        children: [
            ...gridState.collection
        ].map((item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(Row, {
                state: gridState,
                item: item,
                focusMode: cellFocusMode
            }, item.key))
    });
}
function Row({ state, item, focusMode }) {
    let rowRef = (0, _reactDefault.default).useRef(null);
    let cellRef = (0, _reactDefault.default).useRef(null);
    let cellNode = [
        ...item.childNodes
    ][0];
    let { rowProps } = (0, _useGridRowTs.useGridRow)({
        node: item
    }, state, rowRef);
    let { gridCellProps } = (0, _useGridCellTs.useGridCell)({
        node: cellNode,
        focusMode
    }, state, cellRef);
    let [isRowFocused, setRowFocused] = (0, _reactDefault.default).useState(false);
    let { focusProps: rowFocusProps } = (0, _useFocusTs.useFocus)({
        onFocusChange: setRowFocused
    });
    let [isCellFocused, setCellFocused] = (0, _reactDefault.default).useState(false);
    let { focusProps: cellFocusProps } = (0, _useFocusTs.useFocus)({
        onFocusChange: setCellFocused
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        ...(0, _mergePropsTs.mergeProps)(rowProps, rowFocusProps),
        ref: rowRef,
        style: {
            outline: isRowFocused ? '2px solid red' : undefined
        },
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
            ...(0, _mergePropsTs.mergeProps)(gridCellProps, cellFocusProps),
            ref: cellRef,
            style: {
                outline: isCellFocused ? '2px solid green' : undefined
            },
            children: cellNode.rendered
        })
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../../../../vendor/react-stately/exports/private/grid/GridCollection.ts":"jOobZ","../../../../../../../vendor/react-aria/src/utils/mergeProps.ts":"jycxS","react":"gOP0N","../../../../../../../vendor/react-aria/src/interactions/useFocus.ts":"9bXTE","../../../../../../../vendor/react-aria/src/grid/useGrid.ts":"5DzlL","../../../../../../../vendor/react-aria/src/grid/useGridCell.ts":"2trRH","../../../../../../../vendor/react-aria/src/grid/useGridRow.ts":"3Ah58","../../../../../../../vendor/react-stately/exports/private/grid/useGridState.ts":"kXw87","../../../../../../../vendor/react-stately/exports/useListState.ts":"3g793","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jycxS":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9bXTE":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","./utils":"iOeVY","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8kfpz":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iOeVY":[function(require,module,exports,__globalThis) {
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

},{"./domHelpers":"cYkFa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3g793":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9bTDv":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Item", ()=>_Item);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Item(props) {
    return null;
}
Item.getCollectionNode = function* getCollectionNode(props, context) {
    let { childItems, title, children } = props;
    let rendered = props.title || props.children;
    let textValue = props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || '';
    // suppressTextValueWarning is used in components like Tabs, which don't have type to select support.
    !textValue && context?.suppressTextValueWarning;
    yield {
        type: 'item',
        props: props,
        rendered,
        textValue,
        'aria-label': props['aria-label'],
        hasChildNodes: hasChildItems(props),
        *childNodes () {
            if (childItems) for (let child of childItems)yield {
                type: 'item',
                value: child
            };
            else if (title) {
                let items = [];
                (0, _reactDefault.default).Children.forEach(children, (child)=>{
                    items.push({
                        type: 'item',
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
function hasChildItems(props) {
    if (props.hasChildItems != null) return props.hasChildItems;
    if (props.childItems) return true;
    if (props.title && (0, _reactDefault.default).Children.count(props.children) > 0) return true;
    return false;
}
// We don't want getCollectionNode to show up in the type definition
let _Item = Item;

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7SV0K":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
parcelHelpers.export(exports, "Switch", ()=>Switch);
var _jsxRuntime = require("preact/jsx-runtime");
var _useSwitchTs = require("../../../../../../../../vendor/react-aria/exports/useSwitch.ts");
var _classNamesTs = require("../utils/classNames.ts");
var _focusRingTs = require("../../../../../../../../vendor/react-aria/exports/FocusRing.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _varsCss = require("../../../spectrum-css-temp/components/toggle/vars.css");
var _varsCssDefault = parcelHelpers.interopDefault(_varsCss);
var _useDOMRefTs = require("../utils/useDOMRef.ts");
var _useHoverTs = require("../../../../../../../../vendor/react-aria/exports/useHover.ts");
var _providerTsx = require("../provider/Provider.tsx");
var _stylePropsTs = require("../utils/styleProps.ts");
var _useToggleStateTs = require("../../../../../../../../vendor/react-stately/exports/useToggleState.ts");
const Switch = /*#__PURE__*/ (0, _react.forwardRef)(function Switch(props, ref) {
    props = (0, _providerTsx.useProviderProps)(props);
    let { isEmphasized = false, isDisabled = false, autoFocus, children, ...otherProps } = props;
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(otherProps);
    let { hoverProps, isHovered } = (0, _useHoverTs.useHover)({
        isDisabled
    });
    let inputRef = (0, _react.useRef)(null);
    let domRef = (0, _useDOMRefTs.useFocusableRef)(ref, inputRef);
    let state = (0, _useToggleStateTs.useToggleState)(props);
    let { labelProps, inputProps } = (0, _useSwitchTs.useSwitch)(props, state, inputRef);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("label", {
        ...labelProps,
        ...styleProps,
        ...hoverProps,
        ref: domRef,
        className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-ToggleSwitch', {
            'spectrum-ToggleSwitch--quiet': !isEmphasized,
            'is-disabled': isDisabled,
            'is-hovered': isHovered
        }, styleProps.className),
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _focusRingTs.FocusRing), {
                focusRingClass: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'focus-ring'),
                autoFocus: autoFocus,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                    ...inputProps,
                    ref: inputRef,
                    className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-ToggleSwitch-input')
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-ToggleSwitch-switch')
            }),
            children && /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-ToggleSwitch-label'),
                children: children
            })
        ]
    });
});

},{"preact/jsx-runtime":"b2Fbn","../../../../../../../../vendor/react-aria/exports/useSwitch.ts":"gq7Uo","../utils/classNames.ts":"dsWbb","../../../../../../../../vendor/react-aria/exports/FocusRing.ts":"amr77","react":"gOP0N","../../../spectrum-css-temp/components/toggle/vars.css":"9FrF0","../utils/useDOMRef.ts":"ltu01","../../../../../../../../vendor/react-aria/exports/useHover.ts":"2yLrj","../provider/Provider.tsx":"ebIlC","../utils/styleProps.ts":"7B0Vi","../../../../../../../../vendor/react-stately/exports/useToggleState.ts":"aQP1x","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gq7Uo":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a switch component.
 * A switch is similar to a checkbox, but represents on/off values as opposed to selection.
 *
 * @param props - Props for the switch.
 * @param state - State for the switch, as returned by `useToggleState`.
 * @param ref - Ref to the HTML input element.
 */ parcelHelpers.export(exports, "useSwitch", ()=>useSwitch);
var _useToggle = require("../toggle/useToggle");
function useSwitch(props, state, ref) {
    let { labelProps, inputProps, isSelected, ...states } = (0, _useToggle.useToggle)(props, state, ref);
    return {
        labelProps,
        inputProps: {
            ...inputProps,
            role: 'switch',
            checked: isSelected
        },
        isSelected,
        ...states
    };
}

},{"../toggle/useToggle":"eUwXJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eUwXJ":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6IFKj":[function(require,module,exports,__globalThis) {
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

},{"../utils/focusWithoutScrolling":"gcZ3w","../utils/shadowdom/DOMFunctions":"8kfpz","./useFocusVisible":"aBfUW","../utils/domHelpers":"cYkFa","../utils/runAfterTransition":"k2HOw","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aBfUW":[function(require,module,exports,__globalThis) {
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

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","./utils":"iOeVY","../utils/platform":"eBqgD","../utils/isVirtualEvent":"dtScK","../utils/openLink":"gH3wl","react":"gOP0N","../ssr/SSRProvider":"2cndP","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dtScK":[function(require,module,exports,__globalThis) {
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

},{"./domHelpers":"cYkFa","./shadowdom/DOMFunctions":"8kfpz","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aHm7i":[function(require,module,exports,__globalThis) {
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

},{"./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iDQvZ":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","./useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"grBNM":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kdUj8":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","./useId":"fQAcb","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"amr77":[function(require,module,exports,__globalThis) {
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
 * A utility component that applies a CSS class when an element has keyboard focus.
 * Focus rings are visible only when the user is interacting with a keyboard,
 * not with a mouse, touch, or other input methods.
 */ parcelHelpers.export(exports, "FocusRing", ()=>FocusRing);
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useFocusRing = require("./useFocusRing");
function FocusRing(props) {
    let { children, focusClass, focusRingClass } = props;
    let { isFocused, isFocusVisible, focusProps } = (0, _useFocusRing.useFocusRing)(props);
    let child = (0, _reactDefault.default).Children.only(children);
    return /*#__PURE__*/ (0, _reactDefault.default).cloneElement(child, (0, _mergeProps.mergeProps)(child.props, {
        ...focusProps,
        className: (0, _clsxDefault.default)({
            [focusClass || '']: isFocused,
            [focusRingClass || '']: isFocusVisible
        })
    }));
}

},{"clsx":"5gQI0","../utils/mergeProps":"jycxS","react":"gOP0N","./useFocusRing":"bP7um","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bP7um":[function(require,module,exports,__globalThis) {
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

},{"./utils":"iOeVY","react":"gOP0N","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","../utils/useGlobalListeners":"jsdt1","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jsdt1":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9FrF0":[function(require,module,exports,__globalThis) {
module.exports["i18nFontFamily"] = `_0KxFhq_i18nFontFamily`;
module.exports["spectrum-FocusRing-ring"] = `_0KxFhq_spectrum-FocusRing-ring`;
module.exports["spectrum-FocusRing"] = `_0KxFhq_spectrum-FocusRing ${module.exports["spectrum-FocusRing-ring"]}`;
module.exports["spectrum-FocusRing--quiet"] = `_0KxFhq_spectrum-FocusRing--quiet`;
module.exports["spectrum-ToggleSwitch"] = `_0KxFhq_spectrum-ToggleSwitch`;
module.exports["spectrum-ToggleSwitch--ab"] = `_0KxFhq_spectrum-ToggleSwitch--ab`;
module.exports["spectrum-ToggleSwitch--quiet"] = `_0KxFhq_spectrum-ToggleSwitch--quiet`;
module.exports["spectrum-ToggleSwitch-input"] = `_0KxFhq_spectrum-ToggleSwitch-input`;
module.exports["spectrum-ToggleSwitch-label"] = `_0KxFhq_spectrum-ToggleSwitch-label`;
module.exports["spectrum-ToggleSwitch-switch"] = `_0KxFhq_spectrum-ToggleSwitch-switch`;

},{}],"2yLrj":[function(require,module,exports,__globalThis) {
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

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","react":"gOP0N","../utils/useGlobalListeners":"jsdt1","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aQP1x":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5dXIN":[function(require,module,exports,__globalThis) {
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

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"grvf5":[function(require,module,exports,__globalThis) {
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

},{"./DOMFunctions":"8kfpz","react-stately/private/flags/flags":"ahU3Z","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fXhXT":[function(require,module,exports,__globalThis) {
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

},{"./domHelpers":"cYkFa","./shadowdom/DOMFunctions":"8kfpz","./getMetaValue":"jdK61","./platform":"eBqgD","./isFocusable":"dLPRV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jdK61":[function(require,module,exports,__globalThis) {
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

},{"./domHelpers":"cYkFa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5N7nL":[function(require,module,exports,__globalThis) {
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

},{"./isScrollable":"2UC33","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2UC33":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"avf8K":[function(require,module,exports,__globalThis) {
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

},{"./domHelpers":"cYkFa","react":"gOP0N","./useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kvCTu":[function(require,module,exports,__globalThis) {
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

},{"./utils":"jwa0D","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ghoIN":[function(require,module,exports,__globalThis) {
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

},{"./I18nProvider":"czGuc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3IKpx":[function(require,module,exports,__globalThis) {
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

},{"../utils/domHelpers":"cYkFa","../utils/platform":"eBqgD","../utils/runAfterTransition":"k2HOw","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"b7u5T":[function(require,module,exports,__globalThis) {
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

},{"../utils/focusWithoutScrolling":"gcZ3w","../utils/domHelpers":"cYkFa","../utils/mergeProps":"jycxS","../utils/useDescription":"1bivM","../utils/useGlobalListeners":"jsdt1","./usePress":"3S2KR","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1bivM":[function(require,module,exports,__globalThis) {
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

},{"./useLayoutEffect":"h7M6K","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8lll3":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"NRzeg":[function(require,module,exports,__globalThis) {
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

},{"./isScrollable":"2UC33","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gQ2k2":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","./useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gjEnQ":[function(require,module,exports,__globalThis) {
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

},{"./FocusScope":"E8d3D","../utils/useLayoutEffect":"h7M6K","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

