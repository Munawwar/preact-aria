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
})({"1GyPb":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
parcelHelpers.export(exports, "IconContext", ()=>IconContext);
parcelHelpers.export(exports, "IllustrationContext", ()=>IllustrationContext);
parcelHelpers.export(exports, "createIcon", ()=>createIcon);
parcelHelpers.export(exports, "createIllustration", ()=>createIllustration);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _runtimeTs = require("../style/runtime.ts");
var _skeletonTsx = require("./Skeleton.tsx");
var _useSpectrumContextPropsTs = require("./useSpectrumContextProps.ts");
// Custom list of overrides, excluding width/height/flexGrow/flexShrink/flexBasis
const allowedOverrides = [
    'margin',
    'marginStart',
    'marginEnd',
    'marginTop',
    'marginBottom',
    'marginX',
    'marginY',
    'justifySelf',
    'alignSelf',
    'order',
    'gridArea',
    'gridRowStart',
    'gridRowEnd',
    'gridColumnStart',
    'gridColumnEnd',
    'position',
    'zIndex',
    'top',
    'bottom',
    'inset',
    'insetX',
    'insetY',
    'insetStart',
    'insetEnd',
    'rotate',
    '--iconPrimary',
    'size'
];
const IconContext = /*#__PURE__*/ (0, _react.createContext)({});
const IllustrationContext = /*#__PURE__*/ (0, _react.createContext)({});
const iconStyles = function anonymous(props, overrides) {
    let rules = " ";
    let width = false;
    let height = false;
    let matches = String(overrides || '').matchAll(/(?:^|\s)(J|G|I|H|__A|_d|_J|z|y|B|A|_P|_9|W|_l|_A|_z|_S|-_8sjo0b-|Z|F)[^\s]+/g);
    for (let p of matches){
        if (p[1] === "Z") width = true;
        if (p[1] === "F") height = true;
        rules += p[0];
    }
    if (!width) rules += ' Zm171';
    if (!height) rules += ' Fn171';
    rules += ' _va171';
    return rules;
};
function createIcon(Component, context = IconContext) {
    return (props)=>{
        let ref = (0, _react.useRef)(null);
        let ctx;
        // TODO: remove this default once we release RAC and use DEFAULT_SLOT.
        [ctx, ref] = (0, _useSpectrumContextPropsTs.useSpectrumContextProps)({
            slot: props.slot || 'icon'
        }, ref, context);
        let { render, styles: ctxStyles } = ctx;
        let { UNSAFE_className, UNSAFE_style, slot, 'aria-label': ariaLabel, 'aria-hidden': ariaHidden, styles, ...otherProps } = props;
        if (!ariaHidden) ariaHidden = undefined;
        let svg = /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _skeletonTsx.SkeletonWrapper), {
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
                ...otherProps,
                focusable: false,
                "aria-label": ariaLabel,
                "aria-hidden": ariaLabel ? ariaHidden || undefined : true,
                role: "img",
                "data-slot": slot,
                className: (UNSAFE_className ?? '') + ' ' + (0, _skeletonTsx.useSkeletonIcon)((0, _runtimeTs.mergeStyles)(iconStyles(null, styles), ctxStyles)),
                style: UNSAFE_style
            })
        });
        if (render) return render(svg);
        return svg;
    };
}
const illustrationStyles = function anonymous(props, overrides) {
    let rules = " ";
    let width = false;
    let height = false;
    let matches = String(overrides || '').matchAll(/(?:^|\s)(J|G|I|H|__A|_d|_J|z|y|B|A|_P|_9|W|_l|_A|_z|_S|-_8sjo0b-|Z|F)[^\s]+/g);
    for (let p of matches){
        if (p[1] === "Z") width = true;
        if (p[1] === "F") height = true;
        rules += p[0];
    }
    if (props.size === "L") {
        if (!width) rules += ' Zq171';
    } else if (props.size === "M") {
        if (!width) rules += ' ZH171';
    } else if (props.size === "S") {
        if (!width) rules += ' ZF171';
    }
    if (props.size === "L") {
        if (!height) rules += ' Fr171';
    } else if (props.size === "M") {
        if (!height) rules += ' FB171';
    } else if (props.size === "S") {
        if (!height) rules += ' Fz171';
    }
    rules += ' _va171';
    return rules;
};
function createIllustration(Component) {
    return (props)=>{
        let ref = (0, _react.useRef)(null);
        let ctx;
        [ctx, ref] = (0, _useSpectrumContextPropsTs.useSpectrumContextProps)({
            slot: props.slot || 'icon'
        }, ref, IllustrationContext);
        let { styles: ctxStyles } = ctx;
        let { UNSAFE_className, UNSAFE_style, slot, 'aria-label': ariaLabel, 'aria-hidden': ariaHidden, size = ctx.size || 'M', styles, // @ts-ignore
        render, ...otherProps } = props;
        if (!ariaHidden) ariaHidden = undefined;
        let svg = /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
            ...otherProps,
            // @ts-ignore
            size: size,
            focusable: false,
            "aria-label": ariaLabel,
            "aria-hidden": ariaLabel ? ariaHidden || undefined : true,
            role: "img",
            "data-slot": slot,
            className: (UNSAFE_className ?? '') + ' ' + illustrationStyles({
                size
            }, styles) + (ctxStyles || ''),
            style: UNSAFE_style
        });
        if (render) return render(svg);
        return svg;
    };
}

},{"0":"fB7Xu","1":"02Jzs","preact/jsx-runtime":"b2Fbn","react":"gOP0N","../style/runtime.ts":"lT4aI","./Skeleton.tsx":"anIEk","./useSpectrumContextProps.ts":"a7eIZ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fB7Xu":[function() {},{}],"02Jzs":[function() {},{}],"lT4aI":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
// import {RuntimeStyleFunction, RenderProps} from './types';
// taken from: https://stackoverflow.com/questions/51603250/typescript-3-parameter-list-intersection-type/51604379#51604379
// type ArgTypes<T> = T extends (props: infer V) => any ? NullToObject<V> : never;
// type NullToObject<T> = T extends (null | undefined) ? {} : T;
// type BoxedTupleTypes<T extends any[]> = { [P in keyof T]: [ArgTypes<T[P]>] }[Exclude<keyof T, keyof any[]>];
// type BoxedReturnTypes<T extends any[]> = { [P in keyof T]: [InferReturn<T[P]>] }[Exclude<keyof T, keyof any[]>];
// type UnboxIntersection<T> = T extends { 0: infer U } ? U : never;
// type Arg<X, R> = RuntimeStyleFunction<X, R> | null | undefined;
// type NoInfer<T> = [T, void][T extends any ? 0 : 1];
// type InferReturn<T> = T extends (props: any) => infer R ? NullToObject<R> : never;
// type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
// type InferReturnType<T extends any[]> = UnboxIntersection<UnionToIntersection<BoxedReturnTypes<T>>>;
// Two overloads:
// 1. If a render props type is expected based on the return type, forward that type to all arguments.
// 2. Otherwise, infer the return type based on the arguments.
// export function merge<R extends RenderProps<string> = never, X = {}>(...args: Arg<NoInfer<X>, NoInfer<R>>[]): RuntimeStyleFunction<X, R>;
// export function merge<T extends Arg<any, any>[]>(...args: T): RuntimeStyleFunction<InferReturnType<T>, UnboxIntersection<UnionToIntersection<BoxedTupleTypes<T>>>>;
// export function merge(...args: any[]): RuntimeStyleFunction<any, any> {
//   return (props) => {
//     return mergeStyles(...args.map(f => typeof f === 'function' ? f(props) : null));
//   };
// }
/**
 * Merges multiple style strings together, combining the CSS properties from each.
 * Later styles take precedence over earlier ones for the same property.
 * Useful for composing styles from multiple `style()` macro calls.
 *
 * @example
 *   import {mergeStyles} from '@react-spectrum/s2';
 *   import {style} from '@react-spectrum/s2/style' with {type: 'macro'};
 *
 *   const baseStyles = style({padding: 8});
 *   const overrideStyles = style({padding: 16, color: 'heading'});
 *   const merged = mergeStyles(baseStyles, overrideStyles);
 *   // merged has `padding: 16` and `color: heading`.
 */ parcelHelpers.export(exports, "mergeStyles", ()=>mergeStyles);
function mergeStyles(...styles) {
    let definedStyles = styles.filter(Boolean);
    if (definedStyles.length === 1) {
        let first = definedStyles[0];
        if (typeof first !== 'string') // static macro has a toString method so that we generate the style macro map for the entry
        // it's automatically called in other places, but for our merging, we have to call it ourselves
        return first.toString();
        return first;
    }
    let map = new Map();
    for (let style of definedStyles){
        // must call toString here for the static macro
        let str = style.toString();
        for (let [k, v] of parse(str))map.set(k, v);
    }
    let res = '';
    for (let value of map.values())res += value;
    return res;
}
function parse(s) {
    let properties = new Map();
    let i = 0;
    while(i < s.length){
        while(i < s.length && s[i] === ' ')i++;
        let start = i;
        readValue(); // property index
        // read conditions (up to the last segment)
        let condition = i;
        while(i < s.length && s[i] !== ' ')readValue();
        let property = s.slice(start, condition);
        properties.set(property, (properties.get(property) || '') + ' ' + s.slice(start, i));
    }
    function readValue() {
        if (s[i] === '-') // the beginning and end of arbitrary values are marked with -
        while(i < s.length && s[i] !== ' '){
            i++;
            if (s[i] === '-') {
                i++;
                break;
            }
        }
        else {
            while(i < s.length)if (s[i] === '_') i++;
            else {
                i++;
                break;
            }
        }
    }
    return properties;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"anIEk":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
parcelHelpers.export(exports, "useLoadingAnimation", ()=>useLoadingAnimation);
parcelHelpers.export(exports, "SkeletonContext", ()=>SkeletonContext);
parcelHelpers.export(exports, "useIsSkeleton", ()=>useIsSkeleton);
/**
 * A Skeleton wraps around content to render it as a placeholder.
 */ parcelHelpers.export(exports, "Skeleton", ()=>Skeleton);
parcelHelpers.export(exports, "loadingStyle", ()=>loadingStyle);
parcelHelpers.export(exports, "useSkeletonText", ()=>useSkeletonText);
// Rendered inside <Text> to create skeleton line boxes via box-decoration-break.
parcelHelpers.export(exports, "SkeletonText", ()=>SkeletonText);
// Clones the child element and displays it with skeleton styling.
parcelHelpers.export(exports, "SkeletonWrapper", ()=>SkeletonWrapper);
// Adds default border radius around icons when displayed in a skeleton.
parcelHelpers.export(exports, "useSkeletonIcon", ()=>useSkeletonIcon);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _inertValueTs = require("../../../../../../../vendor/react-aria/exports/private/utils/inertValue.ts");
var _mergeRefsTs = require("../../../../../../../vendor/react-aria/exports/mergeRefs.ts");
var _runtimeTs = require("../style/runtime.ts");
var _useMediaQueryTs = require("./useMediaQuery.ts");
function useLoadingAnimation(isAnimating) {
    let animationRef = (0, _react.useRef)(null);
    let reduceMotion = (0, _useMediaQueryTs.useMediaQuery)('(prefers-reduced-motion: reduce)');
    return (0, _react.useCallback)((element)=>{
        if (isAnimating && !animationRef.current && element && !reduceMotion && typeof element.animate === 'function') {
            // Use web animation API instead of CSS animations so that we can
            // synchronize it between all loading elements on the page (via startTime).
            animationRef.current = element.animate([
                {
                    backgroundPosition: '100%'
                },
                {
                    backgroundPosition: '0%'
                }
            ], {
                duration: 2000,
                iterations: Infinity,
                easing: 'ease-in-out'
            });
            animationRef.current.startTime = 0;
        } else if (!isAnimating && animationRef.current) {
            animationRef.current.cancel();
            animationRef.current = null;
        }
    }, [
        isAnimating,
        reduceMotion
    ]);
}
const SkeletonContext = /*#__PURE__*/ (0, _react.createContext)(null);
function useIsSkeleton() {
    return (0, _react.useContext)(SkeletonContext) || false;
}
function Skeleton({ children, isLoading }) {
    // Disable all form components inside a skeleton.
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(SkeletonContext.Provider, {
        value: isLoading,
        children: children
    });
}
const loadingStyle = "bNU3Fb"; // add to a separate layer so it overrides default style macro styles
function useSkeletonText(children, style) {
    let isSkeleton = (0, _react.useContext)(SkeletonContext);
    if (isSkeleton) {
        children = /*#__PURE__*/ (0, _jsxRuntime.jsx)(SkeletonText, {
            children: children
        });
        style = {
            ...style,
            // This ensures the ellipsis on truncated text is also hidden.
            // -webkit-text-fill-color overrides any `color` property that is also set.
            WebkitTextFillColor: 'transparent'
        };
    }
    return [
        children,
        style
    ];
}
function SkeletonText({ children }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
        // @ts-ignore - compatibility with React < 19
        inert: (0, _inertValueTs.inertValue)(true),
        ref: useLoadingAnimation(true),
        className: loadingStyle + " pw171 _ma171 oa171 na171 ka171 ja171",
        children: children
    });
}
function SkeletonWrapper({ children }) {
    let isLoading = (0, _react.useContext)(SkeletonContext);
    let animation = useLoadingAnimation(isLoading || false);
    if (isLoading == null) return children;
    let childRef = 'ref' in children && !Object.getOwnPropertyDescriptor(children, 'ref')?.get ? children.ref : children.props.ref;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(SkeletonContext.Provider, {
        value: null,
        children: isLoading ? /*#__PURE__*/ (0, _react.cloneElement)(children, {
            ref: (0, _mergeRefsTs.mergeRefs)(childRef, animation),
            className: (children.props.className || '') + ' ' + loadingStyle,
            // @ts-ignore - compatibility with React < 19
            inert: (0, _inertValueTs.inertValue)(true)
        }) : children
    });
}
function useSkeletonIcon(styles) {
    let isSkeleton = (0, _react.useContext)(SkeletonContext);
    if (isSkeleton) return (0, _runtimeTs.mergeStyles)(" oa171 na171 ka171 ja171", styles);
    return styles || '';
}

},{"0":"5g4dg","1":"47mSL","2":"lSjX7","preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../../../../../vendor/react-aria/exports/private/utils/inertValue.ts":"hBYeu","../../../../../../../vendor/react-aria/exports/mergeRefs.ts":"jspQh","../style/runtime.ts":"lT4aI","./useMediaQuery.ts":"cVtgV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5g4dg":[function() {},{}],"47mSL":[function() {},{}],"lSjX7":[function() {},{}],"cVtgV":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
parcelHelpers.export(exports, "useMediaQuery", ()=>useMediaQuery);
var _react = require("react");
var _ssrproviderTs = require("../../../../../../../vendor/react-aria/exports/SSRProvider.ts");
function useMediaQuery(query) {
    let supportsMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia === 'function';
    let [matches, setMatches] = (0, _react.useState)(()=>supportsMatchMedia ? window.matchMedia(query).matches : false);
    (0, _react.useEffect)(()=>{
        if (!supportsMatchMedia) return;
        let mq = window.matchMedia(query);
        let onChange = (evt)=>{
            setMatches(evt.matches);
        };
        mq.addListener(onChange);
        return ()=>{
            mq.removeListener(onChange);
        };
    }, [
        supportsMatchMedia,
        query
    ]);
    // If in SSR, the media query should never match. Once the page hydrates,
    // this will update and the real value will be returned.
    let isSSR = (0, _ssrproviderTs.useIsSSR)();
    return isSSR ? false : matches;
}

},{"react":"gOP0N","../../../../../../../vendor/react-aria/exports/SSRProvider.ts":"2cndP","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"a7eIZ":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
parcelHelpers.export(exports, "useSpectrumContextProps", ()=>useSpectrumContextProps);
var _react = require("react");
var _slotsTs = require("../../../../../../../vendor/react-aria-components/exports/slots.ts");
var _mergePropsTs = require("../../../../../../../vendor/react-aria/exports/mergeProps.ts");
var _mergeRefsTs = require("../../../../../../../vendor/react-aria/exports/mergeRefs.ts");
var _runtimeTs = require("../style/runtime.ts");
var _useObjectRefTs = require("../../../../../../../vendor/react-aria/exports/useObjectRef.ts");
function useSpectrumContextProps(props, ref, context) {
    let ctx = (0, _slotsTs.useSlottedContext)(context, props.slot) || {};
    let { ref: contextRef, ...contextProps } = ctx;
    let mergedRef = (0, _useObjectRefTs.useObjectRef)((0, _react.useMemo)(()=>(0, _mergeRefsTs.mergeRefs)(ref, contextRef), [
        ref,
        contextRef
    ]));
    let mergedProps = (0, _mergePropsTs.mergeProps)(contextProps, props);
    // mergeProps does not merge `UNSAFE_style`
    if ('UNSAFE_style' in contextProps && contextProps.UNSAFE_style && 'UNSAFE_style' in props && props.UNSAFE_style) // @ts-ignore
    mergedProps.UNSAFE_style = {
        ...contextProps.UNSAFE_style,
        ...props.UNSAFE_style
    };
    // Merge macro styles.
    if ('styles' in contextProps && contextProps.styles && 'styles' in props && props.styles) // @ts-ignore
    mergedProps.styles = (0, _runtimeTs.mergeStyles)(contextProps.styles, props.styles);
    return [
        mergedProps,
        mergedRef
    ];
}

},{"react":"gOP0N","../../../../../../../vendor/react-aria-components/exports/slots.ts":"jtWJJ","../../../../../../../vendor/react-aria/exports/mergeProps.ts":"jycxS","../../../../../../../vendor/react-aria/exports/mergeRefs.ts":"jspQh","../style/runtime.ts":"lT4aI","../../../../../../../vendor/react-aria/exports/useObjectRef.ts":"ec0NJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

