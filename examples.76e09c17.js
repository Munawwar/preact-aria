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
})({"gcZ3w":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "focusWithoutScrolling", ()=>focusWithoutScrolling);
function focusWithoutScrolling(element) {
    element.focus({
        preventScroll: true
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eBqgD":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "isMac", ()=>isMac);
parcelHelpers.export(exports, "isIPhone", ()=>isIPhone);
parcelHelpers.export(exports, "isIPad", ()=>isIPad);
parcelHelpers.export(exports, "isIOS", ()=>isIOS);
parcelHelpers.export(exports, "isAppleDevice", ()=>isAppleDevice);
parcelHelpers.export(exports, "isWebKit", ()=>isWebKit);
parcelHelpers.export(exports, "isSafari", ()=>isSafari);
parcelHelpers.export(exports, "isChrome", ()=>isChrome);
parcelHelpers.export(exports, "isAndroid", ()=>isAndroid);
parcelHelpers.export(exports, "isFirefox", ()=>isFirefox);
function testUserAgent(re) {
    if (typeof window === 'undefined' || window.navigator == null) return false;
    let brands = window.navigator['userAgentData']?.brands;
    return Array.isArray(brands) && brands.some((brand)=>re.test(brand.brand)) || re.test(window.navigator.userAgent);
}
function testPlatform(re) {
    return typeof window !== 'undefined' && window.navigator != null ? re.test(window.navigator['userAgentData']?.platform || window.navigator.platform) : false;
}
function cached(fn) {
    let res = null;
    return ()=>{
        if (res == null) res = fn();
        return res;
    };
}
const isMac = cached(function() {
    return testPlatform(/^Mac/i);
});
const isIPhone = cached(function() {
    return testPlatform(/^iPhone/i);
});
const isIPad = cached(function() {
    return testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    isMac() && navigator.maxTouchPoints > 1;
});
const isIOS = cached(function() {
    return isIPhone() || isIPad();
});
const isAppleDevice = cached(function() {
    return isMac() || isIOS();
});
const isWebKit = cached(function() {
    return testUserAgent(/AppleWebKit/i) && (isIOS() || !isChrome());
});
const isSafari = cached(function() {
    return isWebKit() && !isChrome() && !isFirefox();
});
const isChrome = cached(function() {
    return testUserAgent(/Chrome|CriOS|CrMo/i);
});
const isAndroid = cached(function() {
    return testUserAgent(/Android/i);
});
const isFirefox = cached(function() {
    return testUserAgent(/(Firefox|FxiOS)/i);
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gH3wl":[function(require,module,exports,__globalThis) {
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
/**
 * A RouterProvider accepts a `navigate` function from a framework or client side router,
 * and provides it to all nested React Aria links to enable client side navigation.
 */ parcelHelpers.export(exports, "RouterProvider", ()=>RouterProvider);
parcelHelpers.export(exports, "useRouter", ()=>useRouter);
parcelHelpers.export(exports, "shouldClientNavigate", ()=>shouldClientNavigate);
parcelHelpers.export(exports, "openLink", ()=>openLink);
parcelHelpers.export(exports, "useSyntheticLinkProps", ()=>useSyntheticLinkProps);
/** @deprecated - For backward compatibility. */ parcelHelpers.export(exports, "getSyntheticLinkProps", ()=>getSyntheticLinkProps);
parcelHelpers.export(exports, "useLinkProps", ()=>useLinkProps);
parcelHelpers.export(exports, "handleLinkClick", ()=>handleLinkClick);
var _jsxRuntime = require("preact/jsx-runtime");
var _focusWithoutScrolling = require("./focusWithoutScrolling");
var _platform = require("./platform");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const RouterContext = /*#__PURE__*/ (0, _react.createContext)({
    isNative: true,
    open: openSyntheticLink,
    useHref: (href)=>href
});
function RouterProvider(props) {
    let { children, navigate, useHref } = props;
    let ctx = (0, _react.useMemo)(()=>({
            isNative: false,
            open: (target, modifiers, href, routerOptions)=>{
                getSyntheticLink(target, (link)=>{
                    if (shouldClientNavigate(link, modifiers)) navigate(href, routerOptions);
                    else openLink(link, modifiers);
                });
            },
            useHref: useHref || ((href)=>href)
        }), [
        navigate,
        useHref
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(RouterContext.Provider, {
        value: ctx,
        children: children
    });
}
function useRouter() {
    return (0, _react.useContext)(RouterContext);
}
function shouldClientNavigate(link, modifiers) {
    // Use getAttribute here instead of link.target. Firefox will default link.target to "_parent" when inside an iframe.
    let target = link.getAttribute('target');
    return (!target || target === '_self') && link.origin === location.origin && !link.hasAttribute('download') && !modifiers.metaKey && // open in new tab (mac)
    !modifiers.ctrlKey && // open in new tab (windows)
    !modifiers.altKey && // download
    !modifiers.shiftKey;
}
function openLink(target, modifiers, setOpening = true) {
    let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
    // WebKit does not support firing click events with modifier keys, but does support keyboard events.
    // https://github.com/WebKit/WebKit/blob/c03d0ac6e6db178f90923a0a63080b5ca210d25f/Source/WebCore/html/HTMLAnchorElement.cpp#L184
    let event = (0, _platform.isWebKit)() && (0, _platform.isMac)() && !(0, _platform.isIPad)() && true ? new KeyboardEvent('keydown', {
        keyIdentifier: 'Enter',
        metaKey,
        ctrlKey,
        altKey,
        shiftKey
    }) : new MouseEvent('click', {
        metaKey,
        ctrlKey,
        altKey,
        shiftKey,
        detail: 1,
        bubbles: true,
        cancelable: true
    });
    openLink.isOpening = setOpening;
    (0, _focusWithoutScrolling.focusWithoutScrolling)(target);
    target.dispatchEvent(event);
    openLink.isOpening = false;
}
// https://github.com/parcel-bundler/parcel/issues/8724
openLink.isOpening = false;
function getSyntheticLink(target, open) {
    if (target instanceof HTMLAnchorElement) open(target);
    else if (target.hasAttribute('data-href')) {
        let link = document.createElement('a');
        link.href = target.getAttribute('data-href');
        if (target.hasAttribute('data-target')) link.target = target.getAttribute('data-target');
        if (target.hasAttribute('data-rel')) link.rel = target.getAttribute('data-rel');
        if (target.hasAttribute('data-download')) link.download = target.getAttribute('data-download');
        if (target.hasAttribute('data-ping')) link.ping = target.getAttribute('data-ping');
        if (target.hasAttribute('data-referrer-policy')) link.referrerPolicy = target.getAttribute('data-referrer-policy');
        target.appendChild(link);
        open(link);
        target.removeChild(link);
    }
}
function openSyntheticLink(target, modifiers) {
    getSyntheticLink(target, (link)=>openLink(link, modifiers));
}
function useSyntheticLinkProps(props) {
    let router = useRouter();
    // oxlint-disable-next-line react/react-compiler
    const href = router.useHref(props.href ?? '');
    return {
        'data-href': props.href ? href : undefined,
        'data-target': props.target,
        'data-rel': props.rel,
        'data-download': props.download,
        'data-ping': props.ping,
        'data-referrer-policy': props.referrerPolicy
    };
}
function getSyntheticLinkProps(props) {
    return {
        'data-href': props.href,
        'data-target': props.target,
        'data-rel': props.rel,
        'data-download': props.download,
        'data-ping': props.ping,
        'data-referrer-policy': props.referrerPolicy
    };
}
function useLinkProps(props) {
    let router = useRouter();
    // oxlint-disable-next-line react/react-compiler
    const href = router.useHref(props?.href ?? '');
    let linkProps = {};
    if (props) {
        for (let key of [
            'href',
            'target',
            'rel',
            'download',
            'ping',
            'referrerPolicy'
        ])if (key in props && props[key] !== undefined) linkProps[key] = key === 'href' ? href : props[key];
    }
    return linkProps;
}
function handleLinkClick(e, router, href, routerOptions) {
    // If a custom router is provided, prevent default and forward if this link should client navigate.
    if (!router.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
    !e.isDefaultPrevented() && shouldClientNavigate(e.currentTarget, e) && href) {
        e.preventDefault();
        router.open(e.currentTarget, e, href, routerOptions);
    }
}

},{"preact/jsx-runtime":"b2Fbn","./focusWithoutScrolling":"gcZ3w","./platform":"eBqgD","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h4XHF":[function(require,module,exports,__globalThis) {
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
 * Filters out all props that aren't valid DOM props or defined via override prop obj.
 *
 * @param props - The component props to be filtered.
 * @param opts - Props to override.
 */ parcelHelpers.export(exports, "filterDOMProps", ()=>filterDOMProps);
const DOMPropNames = new Set([
    'id'
]);
const labelablePropNames = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-details'
]);
// See LinkDOMProps in dom.d.ts.
const linkPropNames = new Set([
    'href',
    'hrefLang',
    'target',
    'rel',
    'download',
    'ping',
    'referrerPolicy'
]);
const globalAttrs = new Set([
    'dir',
    'lang',
    'hidden',
    'inert',
    'translate',
    'suppressHydrationWarning'
]);
const globalEvents = new Set([
    'onClick',
    'onAuxClick',
    'onContextMenu',
    'onDoubleClick',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onPointerDown',
    'onPointerMove',
    'onPointerUp',
    'onPointerCancel',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerOver',
    'onPointerOut',
    'onGotPointerCapture',
    'onLostPointerCapture',
    'onScroll',
    'onWheel',
    'onAnimationStart',
    'onAnimationEnd',
    'onAnimationIteration',
    'onTransitionCancel',
    'onTransitionEnd',
    'onTransitionRun',
    'onTransitionStart'
]);
const propRe = /^(data-.*)$/;
function filterDOMProps(props, opts = {}) {
    let { labelable, isLink, global, events = global, propNames } = opts;
    let filteredProps = {};
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && (DOMPropNames.has(prop) || labelable && labelablePropNames.has(prop) || isLink && linkPropNames.has(prop) || global && globalAttrs.has(prop) || events && (globalEvents.has(prop) || prop.endsWith('Capture') && globalEvents.has(prop.slice(0, -7))) || propNames?.has(prop) || propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"czGuc":[function(require,module,exports,__globalThis) {
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
 * Provides the locale for the application to all child components.
 */ parcelHelpers.export(exports, "I18nProvider", ()=>I18nProvider);
/**
 * Returns the current locale and layout direction.
 */ parcelHelpers.export(exports, "useLocale", ()=>useLocale);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useDefaultLocale = require("./useDefaultLocale");
const I18nContext = /*#__PURE__*/ (0, _reactDefault.default).createContext(null);
/**
 * Internal component that handles the case when locale is provided.
 */ function I18nProviderWithLocale(props) {
    let { locale, children } = props;
    let value = (0, _reactDefault.default).useMemo(()=>({
            locale,
            direction: (0, _utils.isRTL)(locale) ? 'rtl' : 'ltr'
        }), [
        locale
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(I18nContext.Provider, {
        value: value,
        children: children
    });
}
/**
 * Internal component that handles the case when no locale is provided.
 */ function I18nProviderWithDefaultLocale(props) {
    let { children } = props;
    let defaultLocale = (0, _useDefaultLocale.useDefaultLocale)();
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(I18nContext.Provider, {
        value: defaultLocale,
        children: children
    });
}
function I18nProvider(props) {
    let { locale, children } = props;
    // Conditionally render different components to avoid calling useDefaultLocale.
    // This is necessary because useDefaultLocale triggers a re-render.
    if (locale) return /*#__PURE__*/ (0, _jsxRuntime.jsx)(I18nProviderWithLocale, {
        locale: locale,
        children: children
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(I18nProviderWithDefaultLocale, {
        children: children
    });
}
function useLocale() {
    let defaultLocale = (0, _useDefaultLocale.useDefaultLocale)();
    let context = (0, _react.useContext)(I18nContext);
    return context || defaultLocale;
}

},{"preact/jsx-runtime":"b2Fbn","./utils":"2D8bT","react":"gOP0N","./useDefaultLocale":"3KkSA","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2D8bT":[function(require,module,exports,__globalThis) {
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
 */ // https://en.wikipedia.org/wiki/Right-to-left
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Determines if a locale is read right to left using
 * [Intl.Locale]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale}.
 */ parcelHelpers.export(exports, "isRTL", ()=>isRTL);
const RTL_SCRIPTS = new Set([
    'Arab',
    'Syrc',
    'Samr',
    'Mand',
    'Thaa',
    'Mend',
    'Nkoo',
    'Adlm',
    'Rohg',
    'Hebr'
]);
const RTL_LANGS = new Set([
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'ku',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi'
]);
function isRTL(localeString) {
    // If the Intl.Locale API is available, use it to get the locale's text direction.
    if (Intl.Locale) {
        let locale = new Intl.Locale(localeString).maximize();
        // Use the text info object to get the direction if possible.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
        let textInfo = // @ts-ignore - this was implemented as a property by some browsers before it was standardized as a function.
        typeof locale.getTextInfo === 'function' ? locale.getTextInfo() : locale.textInfo;
        if (textInfo) return textInfo.direction === 'rtl';
        // Fallback: guess using the script.
        // This is more accurate than guessing by language, since languages can be written in multiple scripts.
        if (locale.script) return RTL_SCRIPTS.has(locale.script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = localeString.split('-')[0];
    return RTL_LANGS.has(lang);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3KkSA":[function(require,module,exports,__globalThis) {
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
 * Gets the locale setting of the browser.
 */ parcelHelpers.export(exports, "getDefaultLocale", ()=>getDefaultLocale);
/**
 * Returns the current browser/system language, and updates when it changes.
 */ parcelHelpers.export(exports, "useDefaultLocale", ()=>useDefaultLocale);
var _utils = require("./utils");
var _react = require("react");
var _ssrprovider = require("../ssr/SSRProvider");
// Locale passed from server by PackageLocalizationProvider.
const localeSymbol = Symbol.for('react-aria.i18n.locale');
function getDefaultLocale() {
    let locale = typeof window !== 'undefined' && window[localeSymbol] || // @ts-ignore
    typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
    try {
        Intl.DateTimeFormat.supportedLocalesOf([
            locale
        ]);
    } catch  {
        locale = 'en-US';
    }
    return {
        locale,
        direction: (0, _utils.isRTL)(locale) ? 'rtl' : 'ltr'
    };
}
let currentLocale = getDefaultLocale();
let listeners = new Set();
function updateLocale() {
    currentLocale = getDefaultLocale();
    for (let listener of listeners)listener(currentLocale);
}
function useDefaultLocale() {
    let isSSR = (0, _ssrprovider.useIsSSR)();
    let [defaultLocale, setDefaultLocale] = (0, _react.useState)(currentLocale);
    (0, _react.useEffect)(()=>{
        if (listeners.size === 0) window.addEventListener('languagechange', updateLocale);
        listeners.add(setDefaultLocale);
        return ()=>{
            listeners.delete(setDefaultLocale);
            if (listeners.size === 0) window.removeEventListener('languagechange', updateLocale);
        };
    }, []);
    // We cannot determine the browser's language on the server, so default to
    // en-US. This will be updated after hydration on the client to the correct value.
    if (isSSR) {
        let locale = typeof window !== 'undefined' && window[localeSymbol];
        return {
            locale: locale || 'en-US',
            direction: 'ltr'
        };
    }
    return defaultLocale;
}

},{"./utils":"2D8bT","react":"gOP0N","../ssr/SSRProvider":"2cndP","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iYoU7":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "PortalContext", ()=>PortalContext);
/**
 * Sets the portal container for all overlay elements rendered by its children.
 */ parcelHelpers.export(exports, "UNSAFE_PortalProvider", ()=>UNSAFE_PortalProvider);
parcelHelpers.export(exports, "useUNSAFE_PortalContext", ()=>useUNSAFE_PortalContext);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const PortalContext = /*#__PURE__*/ (0, _react.createContext)({});
function UNSAFE_PortalProvider(props) {
    let { getContainer } = props;
    let { getContainer: ctxGetContainer } = useUNSAFE_PortalContext();
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(PortalContext.Provider, {
        value: {
            getContainer: getContainer === null ? undefined : getContainer ?? ctxGetContainer
        },
        children: props.children
    });
}
function useUNSAFE_PortalContext() {
    return (0, _react.useContext)(PortalContext) ?? {};
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bfJsM":[function(require,module,exports,__globalThis) {
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
 * Each ModalProvider tracks how many modals are open in its subtree. On mount, the modals trigger
 * `addModal` to increment the count, and trigger `removeModal` on unmount to decrement it. This is
 * done recursively so that all parent providers are incremented and decremented. If the modal count
 * is greater than zero, we add `aria-hidden` to this provider to hide its subtree from screen
 * readers. This is done using React context in order to account for things like portals, which can
 * cause the React tree and the DOM tree to differ significantly in structure.
 */ parcelHelpers.export(exports, "ModalProvider", ()=>ModalProvider);
/**
 * Used to determine if the tree should be aria-hidden based on how many
 * modals are open.
 */ parcelHelpers.export(exports, "useModalProvider", ()=>useModalProvider);
/**
 * An OverlayProvider acts as a container for the top-level application.
 * Any application that uses modal dialogs or other overlays should
 * be wrapped in a `<OverlayProvider>`. This is used to ensure that
 * the main content of the application is hidden from screen readers
 * if a modal or other overlay is opened. Only the top-most modal or
 * overlay should be accessible at once.
 */ parcelHelpers.export(exports, "OverlayProvider", ()=>OverlayProvider);
/**
 * A container for overlays like modals and popovers. Renders the overlay
 * into a Portal which is placed at the end of the document body.
 * Also ensures that the overlay is hidden from screen readers if a
 * nested modal is opened. Only the top-most modal or overlay should
 * be accessible at once.
 */ parcelHelpers.export(exports, "OverlayContainer", ()=>OverlayContainer);
/**
 * Hides content outside the current `<OverlayContainer>` from screen readers
 * on mount and restores it on unmount. Typically used by modal dialogs and
 * other types of overlays to ensure that only the top-most modal is
 * accessible at once.
 */ parcelHelpers.export(exports, "useModal", ()=>useModal);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
var _ssrprovider = require("../ssr/SSRProvider");
var _portalProvider = require("./PortalProvider");
const Context = /*#__PURE__*/ (0, _reactDefault.default).createContext(null);
function ModalProvider(props) {
    let { children } = props;
    let parent = (0, _react.useContext)(Context);
    let [modalCount, setModalCount] = (0, _react.useState)(0);
    let context = (0, _react.useMemo)(()=>({
            parent,
            modalCount,
            addModal () {
                setModalCount((count)=>count + 1);
                if (parent) parent.addModal();
            },
            removeModal () {
                setModalCount((count)=>count - 1);
                if (parent) parent.removeModal();
            }
        }), [
        parent,
        modalCount
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Context.Provider, {
        value: context,
        children: children
    });
}
function useModalProvider() {
    let context = (0, _react.useContext)(Context);
    return {
        modalProviderProps: {
            'aria-hidden': context && context.modalCount > 0 ? true : undefined
        }
    };
}
/**
 * Creates a root node that will be aria-hidden if there are other modals open.
 */ function OverlayContainerDOM(props) {
    let { modalProviderProps } = useModalProvider();
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        "data-overlay-container": true,
        ...props,
        ...modalProviderProps
    });
}
function OverlayProvider(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ModalProvider, {
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(OverlayContainerDOM, {
            ...props
        })
    });
}
function OverlayContainer(props) {
    let isSSR = (0, _ssrprovider.useIsSSR)();
    let { portalContainer = isSSR ? null : document.body, ...rest } = props;
    let { getContainer } = (0, _portalProvider.useUNSAFE_PortalContext)();
    if (!props.portalContainer && getContainer) portalContainer = getContainer();
    (0, _reactDefault.default).useEffect(()=>{
        if (portalContainer?.closest('[data-overlay-container]')) throw new Error('An OverlayContainer must not be inside another container. Please change the portalContainer prop.');
    }, [
        portalContainer
    ]);
    if (!portalContainer) return null;
    let contents = /*#__PURE__*/ (0, _jsxRuntime.jsx)(OverlayProvider, {
        ...rest
    });
    return /*#__PURE__*/ (0, _reactDomDefault.default).createPortal(contents, portalContainer);
}
function useModal(options) {
    // Add aria-hidden to all parent providers on mount, and restore on unmount.
    let context = (0, _react.useContext)(Context);
    if (!context) throw new Error('Modal is not contained within a provider');
    (0, _react.useEffect)(()=>{
        if (options?.isDisabled || !context || !context.parent) return;
        // The immediate context is from the provider containing this modal, so we only
        // want to trigger aria-hidden on its parents not on the modal provider itself.
        context.parent.addModal();
        return ()=>{
            if (context && context.parent) context.parent.removeModal();
        };
    }, [
        context,
        context.parent,
        options?.isDisabled
    ]);
    return {
        modalProps: {
            'data-ismodal': !options?.isDisabled
        }
    };
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","react-dom":"gOP0N","../ssr/SSRProvider":"2cndP","./PortalProvider":"iYoU7","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dsWbb":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "shouldKeepSpectrumClassNames", ()=>shouldKeepSpectrumClassNames);
parcelHelpers.export(exports, "keepSpectrumClassNames", ()=>keepSpectrumClassNames);
parcelHelpers.export(exports, "classNames", ()=>classNames);
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
let shouldKeepSpectrumClassNames = false;
function keepSpectrumClassNames() {
    shouldKeepSpectrumClassNames = true;
}
function classNames(cssModule, ...values) {
    let classes = [];
    for (let value of values){
        if (typeof value === 'object' && value) {
            let mapped = {};
            for(let key in value){
                if (cssModule[key]) mapped[cssModule[key]] = value[key];
                if (shouldKeepSpectrumClassNames || !cssModule[key]) mapped[key] = value[key];
            }
            classes.push(mapped);
        } else if (typeof value === 'string') {
            if (cssModule[value]) classes.push(cssModule[value]);
            if (shouldKeepSpectrumClassNames || !cssModule[value]) classes.push(value);
        } else classes.push(value);
    }
    return (0, _clsxDefault.default)(...classes);
}

},{"clsx":"5gQI0","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ltu01":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "createDOMRef", ()=>createDOMRef);
parcelHelpers.export(exports, "createFocusableRef", ()=>createFocusableRef);
parcelHelpers.export(exports, "useDOMRef", ()=>useDOMRef);
parcelHelpers.export(exports, "useFocusableRef", ()=>useFocusableRef);
parcelHelpers.export(exports, "unwrapDOMRef", ()=>unwrapDOMRef);
parcelHelpers.export(exports, "useUnwrapDOMRef", ()=>useUnwrapDOMRef);
var _react = require("react");
function createDOMRef(ref) {
    return {
        UNSAFE_getDOMNode () {
            return ref.current;
        }
    };
}
function createFocusableRef(domRef, focusableRef = domRef) {
    return {
        ...createDOMRef(domRef),
        focus () {
            if (focusableRef.current) focusableRef.current.focus();
        }
    };
}
function useDOMRef(ref) {
    let domRef = (0, _react.useRef)(null);
    (0, _react.useImperativeHandle)(ref, ()=>createDOMRef(domRef));
    return domRef;
}
function useFocusableRef(ref, focusableRef) {
    let domRef = (0, _react.useRef)(null);
    (0, _react.useImperativeHandle)(ref, ()=>createFocusableRef(domRef, focusableRef));
    return domRef;
}
function unwrapDOMRef(ref) {
    return {
        get current () {
            return ref.current && ref.current.UNSAFE_getDOMNode();
        }
    };
}
function useUnwrapDOMRef(ref) {
    return (0, _react.useMemo)(()=>unwrapDOMRef(ref), [
        ref
    ]);
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7B0Vi":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "baseStyleProps", ()=>baseStyleProps);
parcelHelpers.export(exports, "viewStyleProps", ()=>viewStyleProps);
parcelHelpers.export(exports, "dimensionValue", ()=>dimensionValue);
parcelHelpers.export(exports, "responsiveDimensionValue", ()=>responsiveDimensionValue);
parcelHelpers.export(exports, "convertStyleProps", ()=>convertStyleProps);
parcelHelpers.export(exports, "useStyleProps", ()=>useStyleProps);
parcelHelpers.export(exports, "passthroughStyle", ()=>passthroughStyle);
parcelHelpers.export(exports, "getResponsiveProp", ()=>getResponsiveProp);
var _breakpointProviderTsx = require("./BreakpointProvider.tsx");
var _i18NproviderTs = require("../../../../../../../../vendor/react-aria/exports/I18nProvider.ts");
const baseStyleProps = {
    margin: [
        'margin',
        dimensionValue
    ],
    marginStart: [
        rtl('marginLeft', 'marginRight'),
        dimensionValue
    ],
    marginEnd: [
        rtl('marginRight', 'marginLeft'),
        dimensionValue
    ],
    // marginLeft: ['marginLeft', dimensionValue],
    // marginRight: ['marginRight', dimensionValue],
    marginTop: [
        'marginTop',
        dimensionValue
    ],
    marginBottom: [
        'marginBottom',
        dimensionValue
    ],
    marginX: [
        [
            'marginLeft',
            'marginRight'
        ],
        dimensionValue
    ],
    marginY: [
        [
            'marginTop',
            'marginBottom'
        ],
        dimensionValue
    ],
    width: [
        'width',
        dimensionValue
    ],
    height: [
        'height',
        dimensionValue
    ],
    minWidth: [
        'minWidth',
        dimensionValue
    ],
    minHeight: [
        'minHeight',
        dimensionValue
    ],
    maxWidth: [
        'maxWidth',
        dimensionValue
    ],
    maxHeight: [
        'maxHeight',
        dimensionValue
    ],
    isHidden: [
        'display',
        hiddenValue
    ],
    alignSelf: [
        'alignSelf',
        passthroughStyle
    ],
    justifySelf: [
        'justifySelf',
        passthroughStyle
    ],
    position: [
        'position',
        anyValue
    ],
    zIndex: [
        'zIndex',
        anyValue
    ],
    top: [
        'top',
        dimensionValue
    ],
    bottom: [
        'bottom',
        dimensionValue
    ],
    start: [
        rtl('left', 'right'),
        dimensionValue
    ],
    end: [
        rtl('right', 'left'),
        dimensionValue
    ],
    left: [
        'left',
        dimensionValue
    ],
    right: [
        'right',
        dimensionValue
    ],
    order: [
        'order',
        anyValue
    ],
    flex: [
        'flex',
        flexValue
    ],
    flexGrow: [
        'flexGrow',
        passthroughStyle
    ],
    flexShrink: [
        'flexShrink',
        passthroughStyle
    ],
    flexBasis: [
        'flexBasis',
        passthroughStyle
    ],
    gridArea: [
        'gridArea',
        passthroughStyle
    ],
    gridColumn: [
        'gridColumn',
        passthroughStyle
    ],
    gridColumnEnd: [
        'gridColumnEnd',
        passthroughStyle
    ],
    gridColumnStart: [
        'gridColumnStart',
        passthroughStyle
    ],
    gridRow: [
        'gridRow',
        passthroughStyle
    ],
    gridRowEnd: [
        'gridRowEnd',
        passthroughStyle
    ],
    gridRowStart: [
        'gridRowStart',
        passthroughStyle
    ]
};
const viewStyleProps = {
    ...baseStyleProps,
    backgroundColor: [
        'backgroundColor',
        backgroundColorValue
    ],
    borderWidth: [
        'borderWidth',
        borderSizeValue
    ],
    borderStartWidth: [
        rtl('borderLeftWidth', 'borderRightWidth'),
        borderSizeValue
    ],
    borderEndWidth: [
        rtl('borderRightWidth', 'borderLeftWidth'),
        borderSizeValue
    ],
    borderLeftWidth: [
        'borderLeftWidth',
        borderSizeValue
    ],
    borderRightWidth: [
        'borderRightWidth',
        borderSizeValue
    ],
    borderTopWidth: [
        'borderTopWidth',
        borderSizeValue
    ],
    borderBottomWidth: [
        'borderBottomWidth',
        borderSizeValue
    ],
    borderXWidth: [
        [
            'borderLeftWidth',
            'borderRightWidth'
        ],
        borderSizeValue
    ],
    borderYWidth: [
        [
            'borderTopWidth',
            'borderBottomWidth'
        ],
        borderSizeValue
    ],
    borderColor: [
        'borderColor',
        borderColorValue
    ],
    borderStartColor: [
        rtl('borderLeftColor', 'borderRightColor'),
        borderColorValue
    ],
    borderEndColor: [
        rtl('borderRightColor', 'borderLeftColor'),
        borderColorValue
    ],
    borderLeftColor: [
        'borderLeftColor',
        borderColorValue
    ],
    borderRightColor: [
        'borderRightColor',
        borderColorValue
    ],
    borderTopColor: [
        'borderTopColor',
        borderColorValue
    ],
    borderBottomColor: [
        'borderBottomColor',
        borderColorValue
    ],
    borderXColor: [
        [
            'borderLeftColor',
            'borderRightColor'
        ],
        borderColorValue
    ],
    borderYColor: [
        [
            'borderTopColor',
            'borderBottomColor'
        ],
        borderColorValue
    ],
    borderRadius: [
        'borderRadius',
        borderRadiusValue
    ],
    borderTopStartRadius: [
        rtl('borderTopLeftRadius', 'borderTopRightRadius'),
        borderRadiusValue
    ],
    borderTopEndRadius: [
        rtl('borderTopRightRadius', 'borderTopLeftRadius'),
        borderRadiusValue
    ],
    borderBottomStartRadius: [
        rtl('borderBottomLeftRadius', 'borderBottomRightRadius'),
        borderRadiusValue
    ],
    borderBottomEndRadius: [
        rtl('borderBottomRightRadius', 'borderBottomLeftRadius'),
        borderRadiusValue
    ],
    borderTopLeftRadius: [
        'borderTopLeftRadius',
        borderRadiusValue
    ],
    borderTopRightRadius: [
        'borderTopRightRadius',
        borderRadiusValue
    ],
    borderBottomLeftRadius: [
        'borderBottomLeftRadius',
        borderRadiusValue
    ],
    borderBottomRightRadius: [
        'borderBottomRightRadius',
        borderRadiusValue
    ],
    padding: [
        'padding',
        dimensionValue
    ],
    paddingStart: [
        rtl('paddingLeft', 'paddingRight'),
        dimensionValue
    ],
    paddingEnd: [
        rtl('paddingRight', 'paddingLeft'),
        dimensionValue
    ],
    paddingLeft: [
        'paddingLeft',
        dimensionValue
    ],
    paddingRight: [
        'paddingRight',
        dimensionValue
    ],
    paddingTop: [
        'paddingTop',
        dimensionValue
    ],
    paddingBottom: [
        'paddingBottom',
        dimensionValue
    ],
    paddingX: [
        [
            'paddingLeft',
            'paddingRight'
        ],
        dimensionValue
    ],
    paddingY: [
        [
            'paddingTop',
            'paddingBottom'
        ],
        dimensionValue
    ],
    overflow: [
        'overflow',
        passthroughStyle
    ]
};
const borderStyleProps = {
    borderWidth: 'borderStyle',
    borderLeftWidth: 'borderLeftStyle',
    borderRightWidth: 'borderRightStyle',
    borderTopWidth: 'borderTopStyle',
    borderBottomWidth: 'borderBottomStyle'
};
function rtl(ltr, rtl) {
    return (direction)=>direction === 'rtl' ? rtl : ltr;
}
const UNIT_RE = /(%|px|em|rem|vw|vh|auto|cm|mm|in|pt|pc|ex|ch|rem|vmin|vmax|fr)$/;
const FUNC_RE = /^\s*\w+\(/;
const SPECTRUM_VARIABLE_RE = /(static-)?size-\d+|single-line-(height|width)/g;
function dimensionValue(value) {
    if (typeof value === 'number') return value + 'px';
    if (!value) return undefined;
    if (UNIT_RE.test(value)) return value;
    if (FUNC_RE.test(value)) return value.replace(SPECTRUM_VARIABLE_RE, 'var(--spectrum-global-dimension-$&, var(--spectrum-alias-$&))');
    return `var(--spectrum-global-dimension-${value}, var(--spectrum-alias-${value}))`;
}
function responsiveDimensionValue(value, matchedBreakpoints) {
    let responsiveValue = getResponsiveProp(value, matchedBreakpoints);
    if (responsiveValue != null) return dimensionValue(responsiveValue);
}
function colorValue(value, type = 'default', version = 5) {
    if (version > 5) return `var(--spectrum-${value}, var(--spectrum-semantic-${value}-color-${type}))`;
    return `var(--spectrum-legacy-color-${value}, var(--spectrum-global-color-${value}, var(--spectrum-semantic-${value}-color-${type})))`;
}
function backgroundColorValue(value, version = 5) {
    if (!value) return undefined;
    return `var(--spectrum-alias-background-color-${value}, ${colorValue(value, 'background', version)})`;
}
function borderColorValue(value, version = 5) {
    if (!value) return undefined;
    if (value === 'default') return 'var(--spectrum-alias-border-color)';
    return `var(--spectrum-alias-border-color-${value}, ${colorValue(value, 'border', version)})`;
}
function borderSizeValue(value) {
    return value && value !== 'none' ? `var(--spectrum-alias-border-size-${value})` : '0';
}
function borderRadiusValue(value) {
    if (!value) return undefined;
    return `var(--spectrum-alias-border-radius-${value})`;
}
function hiddenValue(value) {
    return value ? 'none' : undefined;
}
function anyValue(value) {
    return value;
}
function flexValue(value) {
    if (typeof value === 'boolean') return value ? '1' : undefined;
    return '' + value;
}
function convertStyleProps(props, handlers, direction, matchedBreakpoints) {
    let style = {};
    for(let key in props){
        let styleProp = handlers[key];
        if (!styleProp || props[key] == null) continue;
        let [name, convert] = styleProp;
        if (typeof name === 'function') name = name(direction);
        let prop = getResponsiveProp(props[key], matchedBreakpoints);
        let value = convert(prop, props.colorVersion);
        if (Array.isArray(name)) for (let k of name)style[k] = value;
        else style[name] = value;
    }
    for(let prop in borderStyleProps)if (style[prop]) {
        style[borderStyleProps[prop]] = 'solid';
        style.boxSizing = 'border-box';
    }
    return style;
}
function useStyleProps(props, handlers = baseStyleProps, options = {}) {
    let { UNSAFE_className, UNSAFE_style, ...otherProps } = props;
    let breakpointProvider = (0, _breakpointProviderTsx.useBreakpoint)();
    let { direction } = (0, _i18NproviderTs.useLocale)();
    let { matchedBreakpoints = breakpointProvider?.matchedBreakpoints || [
        'base'
    ] } = options;
    let styles = convertStyleProps(props, handlers, direction, matchedBreakpoints);
    let style = {
        ...UNSAFE_style,
        ...styles
    };
    // @ts-ignore
    otherProps.className;
    // @ts-ignore
    otherProps.style;
    let styleProps = {
        style,
        className: UNSAFE_className
    };
    if (getResponsiveProp(props.isHidden, matchedBreakpoints)) styleProps.hidden = true;
    return {
        styleProps
    };
}
function passthroughStyle(value) {
    return value;
}
function getResponsiveProp(prop, matchedBreakpoints) {
    if (prop && typeof prop === 'object' && !Array.isArray(prop)) {
        for(let i = 0; i < matchedBreakpoints.length; i++){
            let breakpoint = matchedBreakpoints[i];
            if (prop[breakpoint] != null) return prop[breakpoint];
        }
        return prop.base;
    }
    return prop;
}

},{"./BreakpointProvider.tsx":"foFuK","../../../../../../../../vendor/react-aria/exports/I18nProvider.ts":"czGuc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"foFuK":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BreakpointProvider", ()=>BreakpointProvider);
parcelHelpers.export(exports, "useMatchedBreakpoints", ()=>useMatchedBreakpoints);
parcelHelpers.export(exports, "useBreakpoint", ()=>useBreakpoint);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _ssrproviderTs = require("../../../../../../../../vendor/react-aria/exports/SSRProvider.ts");
const Context = /*#__PURE__*/ (0, _reactDefault.default).createContext(null);
Context.displayName = 'BreakpointContext';
function BreakpointProvider(props) {
    let { children, matchedBreakpoints } = props;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Context.Provider, {
        value: {
            matchedBreakpoints
        },
        children: children
    });
}
function useMatchedBreakpoints(breakpoints) {
    let entries = Object.entries(breakpoints).sort(([, valueA], [, valueB])=>valueB - valueA);
    let breakpointQueries = entries.map(([, value])=>`(min-width: ${value}px)`);
    let supportsMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia === 'function';
    let getBreakpointHandler = ()=>{
        let matched = [];
        for(let i in breakpointQueries){
            let query = breakpointQueries[i];
            if (window.matchMedia(query).matches) matched.push(entries[i][0]);
        }
        matched.push('base');
        return matched;
    };
    let [breakpoint, setBreakpoint] = (0, _react.useState)(()=>supportsMatchMedia ? getBreakpointHandler() : [
            'base'
        ]);
    (0, _react.useEffect)(()=>{
        if (!supportsMatchMedia) return;
        let onResize = ()=>{
            const breakpointHandler = getBreakpointHandler();
            setBreakpoint((previousBreakpointHandler)=>{
                if (previousBreakpointHandler.length !== breakpointHandler.length || previousBreakpointHandler.some((breakpoint, idx)=>breakpoint !== breakpointHandler[idx])) return [
                    ...breakpointHandler
                ]; // Return a new array to force state change
                return previousBreakpointHandler;
            });
        };
        window.addEventListener('resize', onResize);
        return ()=>{
            window.removeEventListener('resize', onResize);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        supportsMatchMedia
    ]);
    // If in SSR, the media query should never match. Once the page hydrates,
    // this will update and the real value will be returned.
    let isSSR = (0, _ssrproviderTs.useIsSSR)();
    return isSSR ? [
        'base'
    ] : breakpoint;
}
function useBreakpoint() {
    return (0, _react.useContext)(Context);
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../../../../../../vendor/react-aria/exports/SSRProvider.ts":"2cndP","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ebIlC":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Provider", ()=>Provider);
/**
 * Returns the various settings and styles applied by the nearest parent Provider. Properties
 * explicitly set by the nearest parent Provider override those provided by preceeding Providers.
 */ parcelHelpers.export(exports, "useProvider", ()=>useProvider);
parcelHelpers.export(exports, "useProviderProps", ()=>useProviderProps);
var _jsxRuntime = require("preact/jsx-runtime");
var _breakpointProviderTsx = require("../utils/BreakpointProvider.tsx");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _contextTs = require("./context.ts");
var _filterDOMPropsTs = require("../../../../../../../../vendor/react-aria/exports/filterDOMProps.ts");
var _i18NproviderTs = require("../../../../../../../../vendor/react-aria/exports/I18nProvider.ts");
var _useModalTs = require("../../../../../../../../vendor/react-aria/exports/private/overlays/useModal.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _openLinkTs = require("../../../../../../../../vendor/react-aria/exports/private/utils/openLink.ts");
var _classNamesTs = require("../utils/classNames.ts");
var _varsCss = require("../../../spectrum-css-temp/components/page/vars.css");
var _varsCssDefault = parcelHelpers.interopDefault(_varsCss);
var _indexCss = require("../../../spectrum-css-temp/components/typography/index.css");
var _indexCssDefault = parcelHelpers.interopDefault(_indexCss);
var _mediaQueriesTs = require("./mediaQueries.ts");
var _useDOMRefTs = require("../utils/useDOMRef.ts");
var _stylePropsTs = require("../utils/styleProps.ts");
// A macro ensures that we don't import the entire package.json.
const version = "3.47.5";
const DEFAULT_BREAKPOINTS = {
    S: 640,
    M: 768,
    L: 1024,
    XL: 1280,
    XXL: 1536
};
const Provider = /*#__PURE__*/ (0, _reactDefault.default).forwardRef(function Provider(props, ref) {
    let prevContext = (0, _react.useContext)((0, _contextTs.Context));
    let prevColorScheme = prevContext && prevContext.colorScheme;
    let prevBreakpoints = prevContext && prevContext.breakpoints;
    let { theme = prevContext && prevContext.theme, defaultColorScheme } = props;
    if (!theme) throw new Error('theme not found, the parent provider must have a theme provided');
    // Hooks must always be called.
    let autoColorScheme = (0, _mediaQueriesTs.useColorScheme)(theme, defaultColorScheme || 'light');
    let autoScale = (0, _mediaQueriesTs.useScale)(theme);
    let { locale: prevLocale } = (0, _i18NproviderTs.useLocale)();
    // if the new theme doesn't support the prevColorScheme, we must resort to the auto
    let usePrevColorScheme = prevColorScheme ? !!theme[prevColorScheme] : false;
    // importance of color scheme props > parent > auto:(OS > default > omitted)
    let { colorScheme = usePrevColorScheme ? prevColorScheme : autoColorScheme, scale = prevContext ? prevContext.scale : autoScale, locale = prevContext ? prevLocale : undefined, breakpoints = prevContext ? prevBreakpoints : DEFAULT_BREAKPOINTS, children, isQuiet, isEmphasized, isDisabled, isRequired, isReadOnly, validationState, router, ...otherProps } = props;
    // select only the props with values so undefined props don't overwrite prevContext values
    let currentProps = {
        version,
        theme,
        breakpoints,
        colorScheme,
        scale,
        isQuiet,
        isEmphasized,
        isDisabled,
        isRequired,
        isReadOnly,
        validationState
    };
    let matchedBreakpoints = (0, _breakpointProviderTsx.useMatchedBreakpoints)(breakpoints);
    let filteredProps = {};
    Object.entries(currentProps).forEach(([key, value])=>value !== undefined && (filteredProps[key] = value));
    // Merge options with parent provider
    let context = Object.assign({}, prevContext, filteredProps);
    // Only wrap in a DOM node if the theme, colorScheme, or scale changed
    let contents = children;
    let domProps = (0, _filterDOMPropsTs.filterDOMProps)(otherProps);
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(otherProps, undefined, {
        matchedBreakpoints
    });
    if (!prevContext || props.locale || theme !== prevContext.theme || colorScheme !== prevContext.colorScheme || scale !== prevContext.scale || Object.keys(domProps).length > 0 || otherProps.UNSAFE_className || styleProps.style && Object.keys(styleProps.style).length > 0) contents = /*#__PURE__*/ (0, _jsxRuntime.jsx)(ProviderWrapper, {
        ...props,
        UNSAFE_style: {
            isolation: !prevContext ? 'isolate' : undefined,
            ...styleProps.style
        },
        ref: ref,
        children: contents
    });
    if (router) contents = /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _openLinkTs.RouterProvider), {
        ...router,
        children: contents
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _contextTs.Context).Provider, {
        value: context,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _i18NproviderTs.I18nProvider), {
            locale: locale,
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _breakpointProviderTsx.BreakpointProvider), {
                matchedBreakpoints: matchedBreakpoints,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _useModalTs.ModalProvider), {
                    children: contents
                })
            })
        })
    });
});
const ProviderWrapper = /*#__PURE__*/ (0, _reactDefault.default).forwardRef(function ProviderWrapper(props, ref) {
    let { children, ...otherProps } = props;
    let { locale, direction } = (0, _i18NproviderTs.useLocale)();
    let { theme, colorScheme, scale } = useProvider();
    let { modalProviderProps } = (0, _useModalTs.useModalProvider)();
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(otherProps);
    let domRef = (0, _useDOMRefTs.useDOMRef)(ref);
    let themeKey = Object.keys(theme[colorScheme])[0];
    let scaleKey = Object.keys(theme[scale])[0];
    let className = (0, _clsxDefault.default)(styleProps.className, (0, _varsCssDefault.default)['spectrum'], (0, _indexCssDefault.default)['spectrum'], Object.values(theme[colorScheme]), Object.values(theme[scale]), theme.global ? Object.values(theme.global) : null, {
        'react-spectrum-provider': (0, _classNamesTs.shouldKeepSpectrumClassNames),
        spectrum: (0, _classNamesTs.shouldKeepSpectrumClassNames),
        [themeKey]: (0, _classNamesTs.shouldKeepSpectrumClassNames),
        [scaleKey]: (0, _classNamesTs.shouldKeepSpectrumClassNames)
    });
    let style = {
        ...styleProps.style,
        // This ensures that browser native UI like scrollbars are rendered in the right color scheme.
        // See https://web.dev/color-scheme/.
        colorScheme: props.colorScheme ?? colorScheme ?? Object.keys(theme).filter((k)=>k === 'light' || k === 'dark').join(' ')
    };
    let hasWarned = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (direction && domRef.current) {
            let closestDir = domRef.current?.parentElement?.closest('[dir]');
            let dir = closestDir && closestDir.getAttribute('dir');
            dir && dir !== direction && hasWarned.current;
        }
    }, [
        direction,
        domRef,
        hasWarned
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        ...(0, _filterDOMPropsTs.filterDOMProps)(otherProps),
        ...styleProps,
        ...modalProviderProps,
        className: className,
        style: style,
        lang: locale,
        dir: direction,
        ref: domRef,
        children: children
    });
});
function useProvider() {
    let context = (0, _react.useContext)((0, _contextTs.Context));
    if (!context) throw new Error("No root provider found, please make sure your app is wrapped within a <Provider>. Alternatively, this issue may be caused by duplicate packages, see https://github.com/adobe/react-spectrum/wiki/Frequently-Asked-Questions-(FAQs)#why-are-there-errors-after-upgrading-a-react-spectrum-package for more information.");
    return context;
}
function useProviderProps(props) {
    let context = (0, _react.useContext)((0, _contextTs.Context));
    if (!context) return props;
    return Object.assign({}, {
        isQuiet: context.isQuiet,
        isEmphasized: context.isEmphasized,
        isDisabled: context.isDisabled,
        isRequired: context.isRequired,
        isReadOnly: context.isReadOnly,
        validationState: context.validationState
    }, props);
}

},{"preact/jsx-runtime":"b2Fbn","../utils/BreakpointProvider.tsx":"foFuK","clsx":"5gQI0","./context.ts":"4QkPD","../../../../../../../../vendor/react-aria/exports/filterDOMProps.ts":"h4XHF","../../../../../../../../vendor/react-aria/exports/I18nProvider.ts":"czGuc","../../../../../../../../vendor/react-aria/exports/private/overlays/useModal.ts":"bfJsM","react":"gOP0N","../../../../../../../../vendor/react-aria/exports/private/utils/openLink.ts":"gH3wl","../utils/classNames.ts":"dsWbb","../../../spectrum-css-temp/components/page/vars.css":"alp9t","../../../spectrum-css-temp/components/typography/index.css":"1uXV9","./mediaQueries.ts":"eZY7h","../utils/useDOMRef.ts":"ltu01","../utils/styleProps.ts":"7B0Vi","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4QkPD":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Context", ()=>Context);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const Context = (0, _reactDefault.default).createContext(null);
Context.displayName = 'ProviderContext';

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"alp9t":[function(require,module,exports,__globalThis) {
module.exports["i18nFontFamily"] = `XjpDJq_i18nFontFamily`;
module.exports["spectrum"] = `XjpDJq_spectrum`;
module.exports["spectrum-FocusRing-ring"] = `XjpDJq_spectrum-FocusRing-ring`;
module.exports["spectrum-FocusRing"] = `XjpDJq_spectrum-FocusRing ${module.exports["spectrum-FocusRing-ring"]}`;
module.exports["spectrum-FocusRing--quiet"] = `XjpDJq_spectrum-FocusRing--quiet`;

},{}],"1uXV9":[function(require,module,exports,__globalThis) {
module.exports["i18nFontFamily"] = `oAOseG_i18nFontFamily`;
module.exports["spectrum"] = `oAOseG_spectrum ${module.exports["i18nFontFamily"]}`;
module.exports["spectrum-Body"] = `oAOseG_spectrum-Body`;
module.exports["spectrum-Body--italic"] = `oAOseG_spectrum-Body--italic`;
module.exports["spectrum-FocusRing-ring"] = `oAOseG_spectrum-FocusRing-ring`;
module.exports["spectrum-FocusRing"] = `oAOseG_spectrum-FocusRing ${module.exports["spectrum-FocusRing-ring"]}`;
module.exports["spectrum-FocusRing--quiet"] = `oAOseG_spectrum-FocusRing--quiet`;

},{}],"eZY7h":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useColorScheme", ()=>useColorScheme);
parcelHelpers.export(exports, "useScale", ()=>useScale);
var _useMediaQueryTs = require("../utils/useMediaQuery.ts");
function useColorScheme(theme, defaultColorScheme) {
    let matchesDark = (0, _useMediaQueryTs.useMediaQuery)('(prefers-color-scheme: dark)');
    let matchesLight = (0, _useMediaQueryTs.useMediaQuery)('(prefers-color-scheme: light)');
    // importance OS > default > omitted
    if (theme.dark && matchesDark) return 'dark';
    if (theme.light && matchesLight) return 'light';
    if (theme.dark && defaultColorScheme === 'dark') return 'dark';
    if (theme.light && defaultColorScheme === 'light') return 'light';
    if (!theme.dark) return 'light';
    if (!theme.light) return 'dark';
    return 'light';
}
function useScale(theme) {
    let matchesFine = (0, _useMediaQueryTs.useMediaQuery)('(any-pointer: fine)');
    if (matchesFine && theme.medium) return 'medium';
    if (theme.large) return 'large';
    return 'medium';
}

},{"../utils/useMediaQuery.ts":"ipXji","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ipXji":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useMediaQuery", ()=>useMediaQuery);
var _react = require("react");
var _ssrproviderTs = require("../../../../../../../../vendor/react-aria/exports/SSRProvider.ts");
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

},{"react":"gOP0N","../../../../../../../../vendor/react-aria/exports/SSRProvider.ts":"2cndP","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eEfey":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StoryProvider", ()=>StoryProvider);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _providerTs = require("./repository/packages/@adobe/react-spectrum/exports/Provider.ts");
var _constantsJs = require("./repository/.storybook/constants.js");
function StoryProvider({ children, locale, colorScheme = 'light', scale }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _providerTs.Provider), {
        theme: (0, _constantsJs.themes)[colorScheme] || (0, _constantsJs.defaultTheme),
        colorScheme: colorScheme,
        scale: scale,
        locale: locale,
        children: children
    });
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","./repository/packages/@adobe/react-spectrum/exports/Provider.ts":"ebIlC","./repository/.storybook/constants.js":"5Kbkh","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5Kbkh":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scales", ()=>scales);
parcelHelpers.export(exports, "defaultTheme", ()=>defaultTheme);
parcelHelpers.export(exports, "altTheme", ()=>altTheme);
parcelHelpers.export(exports, "themes", ()=>themes);
parcelHelpers.export(exports, "expressThemes", ()=>expressThemes);
parcelHelpers.export(exports, "locales", ()=>locales);
var _spectrumGlobalCss = require("../packages/@adobe/spectrum-css-temp/vars/spectrum-global.css");
var _spectrumGlobalCssDefault = parcelHelpers.interopDefault(_spectrumGlobalCss);
var _spectrumLightCss = require("../packages/@adobe/spectrum-css-temp/vars/spectrum-light.css");
var _spectrumLightCssDefault = parcelHelpers.interopDefault(_spectrumLightCss);
var _spectrumLightestCss = require("../packages/@adobe/spectrum-css-temp/vars/spectrum-lightest.css");
var _spectrumLightestCssDefault = parcelHelpers.interopDefault(_spectrumLightestCss);
var _spectrumDarkCss = require("../packages/@adobe/spectrum-css-temp/vars/spectrum-dark.css");
var _spectrumDarkCssDefault = parcelHelpers.interopDefault(_spectrumDarkCss);
var _spectrumDarkestCss = require("../packages/@adobe/spectrum-css-temp/vars/spectrum-darkest.css");
var _spectrumDarkestCssDefault = parcelHelpers.interopDefault(_spectrumDarkestCss);
var _spectrumMediumCss = require("../packages/@adobe/spectrum-css-temp/vars/spectrum-medium.css");
var _spectrumMediumCssDefault = parcelHelpers.interopDefault(_spectrumMediumCss);
var _spectrumLargeCss = require("../packages/@adobe/spectrum-css-temp/vars/spectrum-large.css");
var _spectrumLargeCssDefault = parcelHelpers.interopDefault(_spectrumLargeCss);
var _expressCss = require("../packages/@adobe/spectrum-css-temp/vars/express.css");
var _expressCssDefault = parcelHelpers.interopDefault(_expressCss);
const THEME = {
    global: (0, _spectrumGlobalCssDefault.default),
    light: (0, _spectrumLightCssDefault.default),
    lightest: (0, _spectrumLightestCssDefault.default),
    dark: (0, _spectrumDarkCssDefault.default),
    darkest: (0, _spectrumDarkestCssDefault.default)
};
const scales = {
    medium: (0, _spectrumMediumCssDefault.default),
    large: (0, _spectrumLargeCssDefault.default)
};
let defaultTheme = {
    global: THEME.global,
    light: THEME.light,
    dark: THEME.darkest,
    medium: scales.medium,
    large: scales.large
};
let altTheme = {
    global: THEME.global,
    light: THEME.lightest,
    dark: THEME.dark,
    medium: scales.medium,
    large: scales.large
};
let themes = {
    light: defaultTheme,
    dark: altTheme,
    lightest: altTheme,
    darkest: defaultTheme
};
let expressThemes = {};
for(let key in themes)expressThemes[key] = {
    ...themes[key],
    global: {
        ...themes[key].global,
        express: (0, _expressCssDefault.default).express
    },
    medium: {
        ...themes[key].medium,
        express: (0, _expressCssDefault.default).medium
    },
    large: {
        ...themes[key].large,
        express: (0, _expressCssDefault.default).large
    }
};
let locales = [
    {
        label: 'Auto',
        value: ''
    },
    // Tier 1
    {
        label: 'French (France)',
        value: 'fr-FR'
    },
    {
        label: 'French (Canada)',
        value: 'fr-CA'
    },
    {
        label: 'German (Germany)',
        value: 'de-DE'
    },
    {
        label: 'English (Great Britain)',
        value: 'en-GB'
    },
    {
        label: 'English (United States)',
        value: 'en-US'
    },
    {
        label: 'Japanese (Japan)',
        value: 'ja-JP'
    },
    // // Tier 2
    {
        label: 'Danish (Denmark)',
        value: 'da-DK'
    },
    {
        label: 'Dutch (Netherlands)',
        value: 'nl-NL'
    },
    {
        label: 'Finnish (Finland)',
        value: 'fi-FI'
    },
    {
        label: 'Italian (Italy)',
        value: 'it-IT'
    },
    {
        label: 'Norwegian (Norway)',
        value: 'nb-NO'
    },
    {
        label: 'Spanish (Spain)',
        value: 'es-ES'
    },
    {
        label: 'Swedish (Sweden)',
        value: 'sv-SE'
    },
    {
        label: 'Portuguese (Brazil)',
        value: 'pt-BR'
    },
    // // Tier 3
    {
        label: 'Chinese (Simplified)',
        value: 'zh-CN'
    },
    {
        label: 'Chinese (Traditional)',
        value: 'zh-TW'
    },
    {
        label: 'Korean (Korea)',
        value: 'ko-KR'
    },
    // // Tier 4
    {
        label: 'Bulgarian (Bulgaria)',
        value: 'bg-BG'
    },
    {
        label: 'Croatian (Croatia)',
        value: 'hr-HR'
    },
    {
        label: 'Czech (Czech Republic)',
        value: 'cs-CZ'
    },
    {
        label: 'Estonian (Estonia)',
        value: 'et-EE'
    },
    {
        label: 'Hungarian (Hungary)',
        value: 'hu-HU'
    },
    {
        label: 'Latvian (Latvia)',
        value: 'lv-LV'
    },
    {
        label: 'Lithuanian (Lithuania)',
        value: 'lt-LT'
    },
    {
        label: 'Polish (Poland)',
        value: 'pl-PL'
    },
    {
        label: 'Romanian (Romania)',
        value: 'ro-RO'
    },
    {
        label: 'Russian (Russia)',
        value: 'ru-RU'
    },
    {
        label: 'Serbian (Serbia)',
        value: 'sr-SP'
    },
    {
        label: 'Slovakian (Slovakia)',
        value: 'sk-SK'
    },
    {
        label: 'Slovenian (Slovenia)',
        value: 'sl-SI'
    },
    {
        label: 'Turkish (Turkey)',
        value: 'tr-TR'
    },
    {
        label: 'Ukrainian (Ukraine)',
        value: 'uk-UA'
    },
    // // Tier 5
    {
        label: 'Arabic (United Arab Emirates)',
        value: 'ar-AE'
    },
    {
        label: 'Greek (Greece)',
        value: 'el-GR'
    },
    {
        label: 'Hebrew (Israel)',
        value: 'he-IL'
    }
];

},{"../packages/@adobe/spectrum-css-temp/vars/spectrum-global.css":"7QsRt","../packages/@adobe/spectrum-css-temp/vars/spectrum-light.css":"elm8Y","../packages/@adobe/spectrum-css-temp/vars/spectrum-lightest.css":"4DdE8","../packages/@adobe/spectrum-css-temp/vars/spectrum-dark.css":"jAXC7","../packages/@adobe/spectrum-css-temp/vars/spectrum-darkest.css":"5GMjl","../packages/@adobe/spectrum-css-temp/vars/spectrum-medium.css":"dpPWF","../packages/@adobe/spectrum-css-temp/vars/spectrum-large.css":"6jz7F","../packages/@adobe/spectrum-css-temp/vars/express.css":"1dx0D","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7QsRt":[function(require,module,exports,__globalThis) {
module.exports["spectrum"] = `_9n11yq_spectrum`;
module.exports["spectrum--dark"] = `_9n11yq_spectrum--dark`;
module.exports["spectrum--darkest"] = `_9n11yq_spectrum--darkest`;
module.exports["spectrum--large"] = `_9n11yq_spectrum--large`;
module.exports["spectrum--light"] = `_9n11yq_spectrum--light`;
module.exports["spectrum--lightest"] = `_9n11yq_spectrum--lightest`;
module.exports["spectrum--medium"] = `_9n11yq_spectrum--medium`;

},{}],"elm8Y":[function(require,module,exports,__globalThis) {
module.exports["spectrum--light"] = `Ajc-Da_spectrum--light`;

},{}],"4DdE8":[function(require,module,exports,__globalThis) {
module.exports["spectrum--lightest"] = `Bzts7G_spectrum--lightest`;

},{}],"jAXC7":[function(require,module,exports,__globalThis) {
module.exports["spectrum--dark"] = `jZfazW_spectrum--dark`;

},{}],"5GMjl":[function(require,module,exports,__globalThis) {
module.exports["spectrum--darkest"] = `_3IqA5G_spectrum--darkest`;

},{}],"dpPWF":[function(require,module,exports,__globalThis) {
module.exports["spectrum--medium"] = `_7Xsgxq_spectrum--medium`;

},{}],"6jz7F":[function(require,module,exports,__globalThis) {
module.exports["spectrum--large"] = `Du1lOW_spectrum--large`;

},{}],"1dx0D":[function(require,module,exports,__globalThis) {
module.exports["express"] = `bGGqKW_express`;
module.exports["large"] = `bGGqKW_large`;
module.exports["medium"] = `bGGqKW_medium`;

},{}]},[], null, "parcelRequire037a", {})

