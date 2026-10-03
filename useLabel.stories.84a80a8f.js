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
})({"aginU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Example1", ()=>(0, _useLabel1TsxDefault.default));
var _useLabel1Tsx = require("./useLabel-1.tsx");
var _useLabel1TsxDefault = parcelHelpers.interopDefault(_useLabel1Tsx);
exports.default = {};

},{"./useLabel-1.tsx":"1BiHv","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1BiHv":[function(require,module,exports,__globalThis) {
// Original example: packages/dev/s2-docs/pages/react-aria/useLabel.mdx:28. Apache-2.0, Adobe and contributors.
// Adapted module paths and standalone renderer; upstream example body retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useLabelTs = require("../../../vendor/react-aria/exports/useLabel.ts");
'use client';
function ColorField(props) {
    let { labelProps, fieldProps } = (0, _useLabelTs.useLabel)(props);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("label", {
                ...labelProps,
                children: props.label
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("select", {
                ...fieldProps,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                        children: "Indigo"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                        children: "Maroon"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                        children: "Chartreuse"
                    })
                ]
            })
        ]
    });
}
function ImportedExample(props) {
    return /*#__PURE__*/ (0, _reactDefault.default).cloneElement(/*#__PURE__*/ (0, _jsxRuntime.jsx)(ColorField, {
        label: "Favorite color"
    }), props);
}
exports.default = {
    render: ImportedExample,
    args: {},
    controls: [],
    controlOptions: {},
    propsObject: undefined,
    argTypes: {}
};

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../vendor/react-aria/exports/useLabel.ts":"kMUgu","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kMUgu":[function(require,module,exports,__globalThis) {
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

},{"../utils/useId":"fQAcb","../utils/useLabels":"8ZwLJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fQAcb":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8ZwLJ":[function(require,module,exports,__globalThis) {
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

},{"./useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

