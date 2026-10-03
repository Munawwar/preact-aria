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
})({"hZP7Y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Example1", ()=>(0, _useProgressBar1TsxDefault.default));
var _useProgressBar1Tsx = require("./useProgressBar-1.tsx");
var _useProgressBar1TsxDefault = parcelHelpers.interopDefault(_useProgressBar1Tsx);
exports.default = {};

},{"./useProgressBar-1.tsx":"jL8Jr","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jL8Jr":[function(require,module,exports,__globalThis) {
// Original example: packages/dev/s2-docs/pages/react-aria/ProgressBar/useProgressBar.mdx:25. Apache-2.0, Adobe and contributors.
// Adapted module paths and standalone renderer; upstream example body retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _progressBarTsx = require("../../hooks/src/ProgressBar.tsx");
"use client";
function ImportedExample(props) {
    return /*#__PURE__*/ (0, _reactDefault.default).cloneElement(/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _progressBarTsx.ProgressBar), {
        label: "Loading\u2026",
        value: 80
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

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../hooks/src/ProgressBar.tsx":"kfKFM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kfKFM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProgressBar", ()=>ProgressBar);
var _jsxRuntime = require("preact/jsx-runtime");
var _useProgressBarTs = require("../../../../vendor/react-aria/exports/useProgressBar.ts");
var _progressBarCss = require("../../repository/starters/hooks/src/ProgressBar.css");
var _formCss = require("../../repository/starters/hooks/src/Form.css");
'use client';
function ProgressBar(props) {
    let { label, value = 0, minValue = 0, maxValue = 100, isIndeterminate } = props;
    /*- begin highlight -*/ let { progressBarProps, labelProps } = (0, _useProgressBarTs.useProgressBar)(props);
    /*- end highlight -*/ // Calculate the width of the progress fill as a percentage.
    let percentage = (value - minValue) / (maxValue - minValue) * 100;
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        ...progressBarProps,
        className: "react-aria-ProgressBar",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("label", {
                className: "react-aria-Label",
                ...labelProps,
                children: label
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                className: "value",
                children: progressBarProps['aria-valuetext']
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                className: "track inset",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                    className: "fill",
                    style: {
                        '--percent': (isIndeterminate ? 100 : percentage) + '%'
                    }
                })
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../vendor/react-aria/exports/useProgressBar.ts":"fsvpW","../../repository/starters/hooks/src/ProgressBar.css":"d3LcB","../../repository/starters/hooks/src/Form.css":"9kxw1","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fsvpW":[function(require,module,exports,__globalThis) {
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
 * Provides the accessibility implementation for a progress bar component.
 * Progress bars show either determinate or indeterminate progress of an operation
 * over time.
 */ parcelHelpers.export(exports, "useProgressBar", ()=>useProgressBar);
var _number = require("react-stately/private/utils/number");
var _filterDOMProps = require("../utils/filterDOMProps");
var _mergeProps = require("../utils/mergeProps");
var _useLabel = require("../label/useLabel");
var _useNumberFormatter = require("../i18n/useNumberFormatter");
function useProgressBar(props) {
    let { value = 0, minValue = 0, maxValue = 100, valueLabel, isIndeterminate, formatOptions = {
        style: 'percent'
    } } = props;
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    let { labelProps, fieldProps } = (0, _useLabel.useLabel)({
        ...props,
        // Progress bar is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    value = (0, _number.clamp)(value, minValue, maxValue);
    let range = maxValue - minValue;
    let percentage = range === 0 ? 0 : (value - minValue) / range;
    let formatter = (0, _useNumberFormatter.useNumberFormatter)(formatOptions);
    if (!isIndeterminate && !valueLabel) {
        let valueToFormat = formatOptions.style === 'percent' ? percentage : value;
        valueLabel = formatter.format(valueToFormat);
    }
    return {
        progressBarProps: (0, _mergeProps.mergeProps)(domProps, {
            ...fieldProps,
            'aria-valuenow': isIndeterminate ? undefined : value,
            'aria-valuemin': minValue,
            'aria-valuemax': maxValue,
            'aria-valuetext': isIndeterminate ? undefined : valueLabel,
            role: 'progressbar'
        }),
        labelProps
    };
}

},{"react-stately/private/utils/number":"aEFFO","../utils/filterDOMProps":"h4XHF","../utils/mergeProps":"jycxS","../label/useLabel":"kMUgu","../i18n/useNumberFormatter":"5T1hV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aEFFO":[function(require,module,exports,__globalThis) {
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest
 * valid step.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
parcelHelpers.export(exports, "roundToStepPrecision", ()=>roundToStepPrecision);
parcelHelpers.export(exports, "snapValueToStep", ()=>snapValueToStep);
/* Takes a value and rounds off to the number of digits. */ parcelHelpers.export(exports, "toFixedNumber", ()=>toFixedNumber);
function clamp(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function roundToStepPrecision(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function snapValueToStep(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = roundToStepPrecision(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor(roundToStepPrecision((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor(roundToStepPrecision(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = roundToStepPrecision(snappedValue, step);
    return snappedValue;
}
function toFixedNumber(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jycxS":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kMUgu":[function(require,module,exports,__globalThis) {
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

},{"../utils/useId":"fQAcb","../utils/useLabels":"8ZwLJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8ZwLJ":[function(require,module,exports,__globalThis) {
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

},{"./useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5T1hV":[function(require,module,exports,__globalThis) {
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
 * Provides localized number formatting for the current locale. Automatically updates when the
 * locale changes, and handles caching of the number formatter for performance.
 *
 * @param options - Formatting options.
 */ parcelHelpers.export(exports, "useNumberFormatter", ()=>useNumberFormatter);
var _number = require("@internationalized/number");
var _i18Nprovider = require("./I18nProvider");
var _react = require("react");
function useNumberFormatter(options = {}) {
    let { locale } = (0, _i18Nprovider.useLocale)();
    return (0, _react.useMemo)(()=>new (0, _number.NumberFormatter)(locale, options), [
        locale,
        options
    ]);
}

},{"@internationalized/number":"3OyUY","./I18nProvider":"czGuc","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3OyUY":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "NumberFormatter", ()=>$1dfb119a85e764e5$export$cc77c4ff7e8673c5);
parcelHelpers.export(exports, "numberFormatSignDisplayPolyfill", ()=>$1dfb119a85e764e5$export$711b50b3c525e0f2);
let $1dfb119a85e764e5$var$formatterCache = new Map();
let $1dfb119a85e764e5$var$supportsSignDisplay = false;
try {
    $1dfb119a85e764e5$var$supportsSignDisplay = new Intl.NumberFormat('de-DE', {
        signDisplay: 'exceptZero'
    }).resolvedOptions().signDisplay === 'exceptZero';
// eslint-disable-next-line no-empty
} catch  {}
let $1dfb119a85e764e5$var$supportsUnit = false;
try {
    $1dfb119a85e764e5$var$supportsUnit = new Intl.NumberFormat('de-DE', {
        style: 'unit',
        unit: 'degree'
    }).resolvedOptions().style === 'unit';
// eslint-disable-next-line no-empty
} catch  {}
// Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
// Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
// Values were determined by switching to each locale manually in Chrome.
const $1dfb119a85e764e5$var$UNITS = {
    degree: {
        narrow: {
            default: "\xb0",
            'ja-JP': " \u5EA6",
            'zh-TW': "\u5EA6",
            'sl-SI': " \xb0"
        }
    }
};
class $1dfb119a85e764e5$export$cc77c4ff7e8673c5 {
    constructor(locale, options = {}){
        this.numberFormatter = $1dfb119a85e764e5$var$getCachedNumberFormatter(locale, options);
        this.options = options;
    }
    /**
   * Formats a number value as a string, according to the locale and options provided to the
   * constructor.
   */ format(value) {
        let res = '';
        if (!$1dfb119a85e764e5$var$supportsSignDisplay && this.options.signDisplay != null) res = $1dfb119a85e764e5$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
        else res = this.numberFormatter.format(value);
        if (this.options.style === 'unit' && !$1dfb119a85e764e5$var$supportsUnit) {
            let { unit: unit, unitDisplay: unitDisplay = 'short', locale: locale } = this.resolvedOptions();
            if (!unit) return res;
            let values = $1dfb119a85e764e5$var$UNITS[unit]?.[unitDisplay];
            res += values[locale] || values.default;
        }
        return res;
    }
    /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */ formatToParts(value) {
        // TODO: implement signDisplay for formatToParts
        return this.numberFormatter.formatToParts(value);
    }
    /** Formats a number range as a string. */ formatRange(start, end) {
        if (typeof this.numberFormatter.formatRange === 'function') return this.numberFormatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return `${this.format(start)} \u{2013} ${this.format(end)}`;
    }
    /** Formats a number range as an array of parts. */ formatRangeToParts(start, end) {
        if (typeof this.numberFormatter.formatRangeToParts === 'function') return this.numberFormatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        let startParts = this.numberFormatter.formatToParts(start);
        let endParts = this.numberFormatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: 'startRange'
                })),
            {
                type: 'literal',
                value: " \u2013 ",
                source: 'shared'
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: 'endRange'
                }))
        ];
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let options = this.numberFormatter.resolvedOptions();
        if (!$1dfb119a85e764e5$var$supportsSignDisplay && this.options.signDisplay != null) options = {
            ...options,
            signDisplay: this.options.signDisplay
        };
        if (!$1dfb119a85e764e5$var$supportsUnit && this.options.style === 'unit') options = {
            ...options,
            style: 'unit',
            unit: this.options.unit,
            unitDisplay: this.options.unitDisplay
        };
        return options;
    }
}
function $1dfb119a85e764e5$var$getCachedNumberFormatter(locale, options = {}) {
    let { numberingSystem: numberingSystem } = options;
    if (numberingSystem && locale.includes('-nu-')) {
        if (!locale.includes('-u-')) locale += '-u-';
        locale += `-nu-${numberingSystem}`;
    }
    if (options.style === 'unit' && !$1dfb119a85e764e5$var$supportsUnit) {
        let { unit: unit, unitDisplay: unitDisplay = 'short' } = options;
        if (!unit) throw new Error('unit option must be provided with style: "unit"');
        if (!$1dfb119a85e764e5$var$UNITS[unit]?.[unitDisplay]) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
        options = {
            ...options,
            style: 'decimal'
        };
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($1dfb119a85e764e5$var$formatterCache.has(cacheKey)) return $1dfb119a85e764e5$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.NumberFormat(locale, options);
    $1dfb119a85e764e5$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
function $1dfb119a85e764e5$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
    if (signDisplay === 'auto') return numberFormat.format(num);
    else if (signDisplay === 'never') return numberFormat.format(Math.abs(num));
    else {
        let needsPositiveSign = false;
        if (signDisplay === 'always') needsPositiveSign = num > 0 || Object.is(num, 0);
        else if (signDisplay === 'exceptZero') {
            if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
            else needsPositiveSign = num > 0;
        }
        if (needsPositiveSign) {
            let negative = numberFormat.format(-num);
            let noSign = numberFormat.format(num);
            // ignore RTL/LTR marker character
            let minus = negative.replace(noSign, '').replace(/\u200e|\u061C/, '');
            if ([
                ...minus
            ].length !== 1) console.warn('@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case');
            let positive = negative.replace(noSign, '!!!').replace(minus, '+').replace('!!!', noSign);
            return positive;
        } else return numberFormat.format(num);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"d3LcB":[function() {},{}],"9kxw1":[function() {},{}]},[], null, "parcelRequire037a", {})

