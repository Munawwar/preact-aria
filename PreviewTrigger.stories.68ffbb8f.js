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
})({"7yvpw":[function(require,module,exports,__globalThis) {
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
/**
 * A PreviewTrigger displays a non-modal popover on hover, focus, or long press. Unlike a tooltip,
 * the popover may contain interactive content.
 */ parcelHelpers.export(exports, "PreviewTrigger", ()=>PreviewTrigger);
var _jsxRuntime = require("preact/jsx-runtime");
var _usePreviewTrigger = require("react-aria/usePreviewTrigger");
var _useFocusable = require("react-aria/private/interactions/useFocusable");
var _dialog = require("./Dialog");
var _popover = require("./Popover");
var _utils = require("./utils");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useTooltipTriggerState = require("react-stately/useTooltipTriggerState");
function PreviewTrigger(props) {
    let state = (0, _useTooltipTriggerState.useTooltipTriggerState)({
        ...props,
        delay: props.delay ?? 600,
        closeDelay: props.closeDelay ?? 200
    });
    let triggerRef = (0, _react.useRef)(null);
    let popoverRef = (0, _react.useRef)(null);
    let { triggerProps, popoverProps } = (0, _usePreviewTrigger.usePreviewTrigger)({
        ...props,
        triggerRef,
        popoverRef
    }, state);
    // The Popover and usePopover expect an OverlayTriggerState. Adapt the TooltipTriggerState (which
    // provides the warmup/cooldown delay behavior) to that interface.
    let overlayState = (0, _react.useMemo)(()=>({
            isOpen: state.isOpen,
            open: ()=>state.open(),
            close: ()=>state.close(),
            setOpen: (isOpen)=>isOpen ? state.open() : state.close(),
            toggle: ()=>state.isOpen ? state.close() : state.open(),
            point: null,
            setPoint: ()=>{}
        }), [
        state
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
        values: [
            [
                (0, _dialog.OverlayTriggerStateContext),
                overlayState
            ],
            [
                (0, _popover.PopoverContext),
                {
                    trigger: 'PreviewTrigger',
                    triggerRef,
                    ref: popoverRef,
                    isNonModal: true,
                    // Skip enter/exit animations when swapping between previews during the warmup period.
                    shouldSkipAnimation: state.shouldSkipAnimation,
                    ...popoverProps
                }
            ]
        ],
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _useFocusable.FocusableProvider), {
            ...triggerProps,
            ref: triggerRef,
            children: props.children
        })
    });
}

},{"preact/jsx-runtime":"b2Fbn","react-aria/usePreviewTrigger":"1ZvgS","react-aria/private/interactions/useFocusable":"6IFKj","./Dialog":"aPHDk","./Popover":"i9eo9","./utils":"jtWJJ","react":"gOP0N","react-stately/useTooltipTriggerState":"h8EOP","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1ZvgS":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the behavior and accessibility implementation for a preview trigger.
 * A preview trigger displays a popover on hover, focus, or long press. Unlike a
 * tooltip, the popover may contain interactive content.
 */ parcelHelpers.export(exports, "usePreviewTrigger", ()=>usePreviewTrigger);
var _focusWithoutScrolling = require("../utils/focusWithoutScrolling");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _focusScope = require("../focus/FocusScope");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _domHelpers = require("../utils/domHelpers");
var _indexJs = require("../../intl/previewtrigger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _useEffectEvent = require("../utils/useEffectEvent");
var _useEvent = require("../utils/useEvent");
var _useHover = require("../interactions/useHover");
var _useId = require("../utils/useId");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
var _useLongPress = require("../interactions/useLongPress");
var _useSafeArea = require("./useSafeArea");
function usePreviewTrigger(props, state) {
    let { triggerRef, popoverRef, isDisabled } = props;
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/link-preview');
    let popoverId = (0, _useId.useId)();
    // Suppresses the next focus from reopening the preview (e.g. when restoring focus on Escape).
    let ignoreFocus = (0, _react.useRef)(false);
    // When opened via long press, move focus into the popover once it opens so touch screen readers
    // (e.g. VoiceOver) move their virtual cursor into the preview.
    let shouldFocusOnOpen = (0, _react.useRef)(false);
    // Whether the pointer is currently within the safe area (the trigger, the popover, or the region
    // between them). Tracked by useSafeArea below so the preview stays open while the pointer travels
    // from the link to the popover, even with closeDelay of 0.
    let pointerInSafeArea = (0, _react.useRef)(false);
    let isFocusVisible = (0, _react.useRef)(false);
    (0, _useFocusVisible.useFocusVisibleListener)((visible)=>{
        isFocusVisible.current = visible;
    }, []);
    // Cancel a pending close and keep the preview open.
    let keepOpen = (0, _useEffectEvent.useEffectEvent)(()=>state.open(true));
    // Close the preview unless something is still keeping it open: the pointer is within the safe
    // area, or focus is within the trigger or popover. During focus transitions the active element
    // may briefly be the body; the popover's focusin handler re-opens in that case (focus moving in).
    let checkClose = (0, _useEffectEvent.useEffectEvent)(()=>{
        if (pointerInSafeArea.current) return;
        let active = triggerRef.current ? (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(triggerRef.current)) : null;
        if (isFocusVisible.current && (triggerRef.current && (0, _domfunctions.nodeContains)(triggerRef.current, active) || popoverRef.current && (0, _domfunctions.nodeContains)(popoverRef.current, active))) return;
        state.close();
    });
    (0, _react.useEffect)(()=>{
        let popover = popoverRef.current;
        if (!state.isOpen || !popover || !shouldFocusOnOpen.current) return;
        // When opened via long press, move focus to the popover itself so touch screen readers move
        // their virtual cursor into the preview.
        shouldFocusOnOpen.current = false;
        (0, _focusWithoutScrolling.focusWithoutScrolling)(popover);
    }, [
        state.isOpen,
        popoverRef
    ]);
    let onHoverStart = ()=>{
        // Match useTooltipTrigger: only treat as hovered when the modality is actually a pointer.
        if ((0, _useFocusVisible.getInteractionModality)() === 'pointer') {
            pointerInSafeArea.current = true;
            state.open();
        }
    };
    let onHoverEnd = ()=>{
        // Before the preview opens, cancel a pending warmup if the pointer leaves the trigger. Once
        // open, the safe-area polygon (useSafeArea) governs closing as the pointer moves to the popover.
        if (!state.isOpen) {
            pointerInSafeArea.current = false;
            state.close();
        }
    };
    let onTriggerFocus = (e)=>{
        if (ignoreFocus.current) {
            ignoreFocus.current = false;
            return;
        }
        // Prevent browser focusing the link on long press when focus is already in the popover.
        if (state.isOpen && e.relatedTarget === popoverRef.current) {
            (0, _focusWithoutScrolling.focusWithoutScrolling)(popoverRef.current);
            return;
        }
        if (isFocusVisible.current) // Open after the warmup delay on keyboard focus, not immediately like a tooltip. This way
        // tabbing quickly through the page doesn't open previews (and add their tab stops); the
        // delay ensures the user is actually interested in the link's details.
        state.open();
    };
    (0, _useEvent.useEvent)(triggerRef, 'react-aria-focus-scope-restore', (e)=>{
        e.preventDefault();
        ignoreFocus.current = true;
        triggerRef.current?.focus();
    });
    // Move focus from the link into the preview when the user presses Tab while it is open.
    // Tabbing back out of the popover is handled by the popover's own FocusScope.
    let onTriggerKeyDown = (e)=>{
        if (e.key === 'Tab' && !e.shiftKey && state.isOpen && popoverRef.current) {
            let walker = (0, _focusScope.getFocusableTreeWalker)(popoverRef.current, {
                tabbable: true
            });
            let first = walker.nextNode();
            if (first) {
                e.preventDefault();
                first.focus();
            }
        } else if (e.key === 'Escape') {
            e.preventDefault();
            state.close(true);
        }
    };
    let { hoverProps } = (0, _useHover.useHover)({
        isDisabled,
        onHoverStart,
        onHoverEnd
    });
    let focusableProps = {
        onFocus: onTriggerFocus,
        onBlur: checkClose,
        onKeyDown: onTriggerKeyDown
    };
    // Only describe the long press interaction when the user is actually using touch, otherwise it
    // is confusing (e.g. a screen reader announcing "long press" while navigating with a keyboard).
    // null is the default before the user has interacted with anything.
    let modality = (0, _useFocusVisible.useInteractionModality)();
    let shouldLongPress = (modality === 'pointer' || modality === 'virtual' || modality == null) && typeof window !== 'undefined' && 'ontouchstart' in window;
    // Open the preview on long press on touch devices, since there is no hover. Move focus into the
    // popover once it opens so touch screen readers (e.g. VoiceOver) move their virtual cursor in.
    let { longPressProps } = (0, _useLongPress.useLongPress)({
        isDisabled,
        pointerType: 'touch',
        accessibilityDescription: shouldLongPress ? stringFormatter.format('longPressMessage') : undefined,
        onLongPress () {
            shouldFocusOnOpen.current = true;
            state.open(true);
        }
    });
    // Keep the preview open while the pointer is anywhere within the safe area connecting the link
    // and the popover, so moving the pointer between them (even diagonally) doesn't close it. This
    // works for any popover placement and even when closeDelay is 0.
    (0, _useSafeArea.useSafeArea)({
        triggerRef,
        overlayRef: popoverRef,
        isOpen: state.isOpen,
        isDisabled,
        onSafeAreaChange: (isInSafeArea)=>{
            if (isInSafeArea === pointerInSafeArea.current) return;
            pointerInSafeArea.current = isInSafeArea;
            if (isInSafeArea) keepOpen();
            else checkClose();
        }
    });
    // oxlint-disable-next-line react/react-compiler
    let triggerProps = (0, _mergeProps.mergeProps)(focusableProps, hoverProps, longPressProps);
    let describedBy = [
        triggerProps['aria-describedby'],
        state.isOpen ? popoverId : null
    ].filter(Boolean).join(' ');
    return {
        triggerProps: {
            ...triggerProps,
            'aria-haspopup': 'dialog',
            'aria-expanded': state.isOpen,
            'aria-controls': state.isOpen ? popoverId : undefined,
            'aria-describedby': describedBy || undefined,
            style: {
                WebkitTouchCallout: 'none',
                // @ts-ignore
                WebkitUserDrag: 'none'
            }
        },
        popoverProps: {
            id: popoverId,
            onFocusWithin: keepOpen,
            onBlurWithin: checkClose
        }
    };
}

},{"../utils/focusWithoutScrolling":"gcZ3w","../utils/shadowdom/DOMFunctions":"8kfpz","../focus/FocusScope":"E8d3D","../interactions/useFocusVisible":"aBfUW","../utils/domHelpers":"cYkFa","../../intl/previewtrigger/index.js":"4HujP","../utils/mergeProps":"jycxS","react":"gOP0N","../utils/useEffectEvent":"grBNM","../utils/useEvent":"avf8K","../interactions/useHover":"2yLrj","../utils/useId":"fQAcb","../i18n/useLocalizedStringFormatter":"8lll3","../interactions/useLongPress":"b7u5T","./useSafeArea":"i4loO","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4HujP":[function(require,module,exports,__globalThis) {
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

},{"./ar-AE.js":"ipp2e","./bg-BG.js":"j85yq","./cs-CZ.js":"chrva","./da-DK.js":"gLCwL","./de-DE.js":"7Ebz0","./el-GR.js":"fO6G2","./en-US.js":"70CVu","./es-ES.js":"A4tlo","./et-EE.js":"9uJU7","./fi-FI.js":"hrFjR","./fr-FR.js":"fl2Do","./he-IL.js":"1RcJK","./hr-HR.js":"cRZGR","./hu-HU.js":"1IjKS","./it-IT.js":"jk4RL","./ja-JP.js":"dOTFf","./ko-KR.js":"1Ut2j","./lt-LT.js":"77O5l","./lv-LV.js":"9zxQW","./nb-NO.js":"hAy21","./nl-NL.js":"d1wQ2","./pl-PL.js":"fgngX","./pt-BR.js":"kmVNJ","./pt-PT.js":"1zzyK","./ro-RO.js":"1hDXO","./ru-RU.js":"4pcQP","./sk-SK.js":"52ay3","./sl-SI.js":"9MPMf","./sr-SP.js":"l5d2b","./sv-SE.js":"74hqU","./tr-TR.js":"5NGRF","./uk-UA.js":"6yekj","./zh-CN.js":"ajgOY","./zh-TW.js":"aV7ZE","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ipp2e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{627}\u{636}\u{63A}\u{637} \u{645}\u{637}\u{648}\u{644}\u{627}\u{64B} \u{644}\u{641}\u{62A}\u{62D} \u{627}\u{644}\u{645}\u{639}\u{627}\u{64A}\u{646}\u{629}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j85yq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{43E}\u{434}\u{44A}\u{43B}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{43D}\u{43E}, \u{437}\u{430} \u{434}\u{430} \u{43E}\u{442}\u{432}\u{43E}\u{440}\u{438}\u{442}\u{435} \u{43F}\u{440}\u{435}\u{434}\u{432}\u{430}\u{440}\u{438}\u{442}\u{435}\u{43B}\u{435}\u{43D} \u{43F}\u{440}\u{435}\u{433}\u{43B}\u{435}\u{434}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"chrva":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Podr\u{17E}en\xedm tla\u{10D}\xedtka otev\u{159}ete n\xe1hled`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gLCwL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Tryk og hold nede for at \xe5bne forh\xe5ndsvisningen`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7Ebz0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Zum \xd6ffnen der Vorschau lange dr\xfccken`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fO6G2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{3C0}\u{3B1}\u{3C1}\u{3B1}\u{3C4}\u{3B5}\u{3C4}\u{3B1}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3B1}\u{3BD}\u{3BF}\u{3AF}\u{3BE}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3B7}\u{3BD} \u{3C0}\u{3C1}\u{3BF}\u{3B5}\u{3C0}\u{3B9}\u{3C3}\u{3BA}\u{3CC}\u{3C0}\u{3B7}\u{3C3}\u{3B7}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"70CVu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Long press to open preview`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"A4tlo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Pulse para abrir la vista previa`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9uJU7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Eelvaate avamiseks vajutage pikalt`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hrFjR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Avaa esikatselu painamalla pitk\xe4\xe4n`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fl2Do":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Appuyer longuement pour ouvrir la pr\xe9visualisation`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1RcJK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{5DC}\u{5D7}\u{5E6}\u{5D5} \u{5DC}\u{5D7}\u{5D9}\u{5E6}\u{5D4} \u{5D0}\u{5E8}\u{5D5}\u{5DB}\u{5D4} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E4}\u{5EA}\u{5D5}\u{5D7} \u{5EA}\u{5E6}\u{5D5}\u{5D2}\u{5D4} \u{5DE}\u{5E7}\u{5D3}\u{5D9}\u{5DE}\u{5D4}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cRZGR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Potreban je du\u{17E}i pritisak za otvaranje pregleda`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1IjKS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Nyomja meg hosszan az el\u{151}n\xe9zet megnyit\xe1s\xe1hoz`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jk4RL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Tieni premuto per aprire l\u{2019}anteprima`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dOTFf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{9577}\u{62BC}\u{3057}\u{3057}\u{3066}\u{30D7}\u{30EC}\u{30D3}\u{30E5}\u{30FC}\u{3092}\u{958B}\u{304F}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1Ut2j":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{AE38}\u{AC8C} \u{B20C}\u{B7EC} \u{BBF8}\u{B9AC} \u{BCF4}\u{AE30} \u{C5F4}\u{AE30}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"77O5l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Ilgai paspauskite, kad atvertum\u{117}te per\u{17E}i\u{16B}r\u{105}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9zxQW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Nospiediet un paturiet, lai skat\u{12B}tu priek\u{161}skat\u{12B}jumu`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hAy21":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Langt trykk for \xe5 \xe5pne forh\xe5ndsvisningen`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"d1wQ2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Lang indrukken voor voorvertoning`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fgngX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Naci\u{15B}nij i przytrzymaj, aby otworzy\u{107} podgl\u{105}d`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kmVNJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Pressione e segure para abrir a visualiza\xe7\xe3o`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1zzyK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Prima e mantenha premido para abrir a pr\xe9-visualiza\xe7\xe3o`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1hDXO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Ap\u{103}sa\u{21B}i lung pentru a deschide previzualizarea`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4pcQP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{438} \u{443}\u{434}\u{435}\u{440}\u{436}\u{438}\u{432}\u{430}\u{439}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{44C} \u{43F}\u{440}\u{435}\u{434}\u{432}\u{430}\u{440}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{44B}\u{439} \u{43F}\u{440}\u{43E}\u{441}\u{43C}\u{43E}\u{442}\u{440}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"52ay3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `N\xe1h\u{13E}ad otvor\xedte dlh\xfdm stla\u{10D}en\xedm`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9MPMf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Dolg pritisk za odpiranje predogleda`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"l5d2b":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Dugo pritisnite da biste otvorili pregled`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"74hqU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `H\xe5ll nedtryckt f\xf6r att \xf6ppna f\xf6rhandsgranskningen`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5NGRF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\xd6nizlemeyi a\xe7mak i\xe7in uzun s\xfcre bas\u{131}l\u{131} tutun`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6yekj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{456} \u{443}\u{442}\u{440}\u{438}\u{43C}\u{443}\u{439}\u{442}\u{435}, \u{449}\u{43E}\u{431} \u{432}\u{456}\u{434}\u{43A}\u{440}\u{438}\u{442}\u{438} \u{43F}\u{43E}\u{43F}\u{435}\u{440}\u{435}\u{434}\u{43D}\u{456}\u{439} \u{43F}\u{435}\u{440}\u{435}\u{433}\u{43B}\u{44F}\u{434}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ajgOY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{957F}\u{6309}\u{4EE5}\u{6253}\u{5F00}\u{9884}\u{89C8}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aV7ZE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{9577}\u{6309}\u{4EE5}\u{958B}\u{555F}\u{9810}\u{89BD}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"i4loO":[function(require,module,exports,__globalThis) {
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
/**
 * Tracks whether the pointer is within a "safe area" connecting a trigger and its overlay, so the
 * overlay can stay open while the pointer moves between them. The safe area is the union of the
 * trigger rect, the overlay rect, and the convex hull connecting the two (a polygon), which works
 * for any placement of the overlay relative to the trigger.
 */ parcelHelpers.export(exports, "useSafeArea", ()=>useSafeArea);
var _domHelpers = require("../utils/domHelpers");
var _react = require("react");
var _useEffectEvent = require("../utils/useEffectEvent");
// A small amount of padding (in pixels) added around the trigger and overlay so the safe area is
// slightly forgiving of sub-pixel jitter and the gap between the elements.
const PADDING = 8;
function useSafeArea(options) {
    let { triggerRef, overlayRef, isOpen, isDisabled } = options;
    let onSafeAreaChange = (0, _useEffectEvent.useEffectEvent)(options.onSafeAreaChange);
    (0, _react.useEffect)(()=>{
        let trigger = triggerRef.current;
        if (isDisabled || !isOpen || !trigger) return;
        let onPointerMove = (e)=>{
            if (e.pointerType === 'touch') return;
            let point = {
                x: e.clientX,
                y: e.clientY
            };
            let triggerRect = trigger.getBoundingClientRect();
            let overlayRect = overlayRef.current?.getBoundingClientRect();
            onSafeAreaChange(isPointInSafeArea(point, triggerRect, overlayRect));
        };
        // If the pointer leaves the document entirely, it is no longer in the safe area.
        let onPointerLeave = ()=>onSafeAreaChange(false);
        let win = (0, _domHelpers.getOwnerWindow)(trigger);
        let doc = (0, _domHelpers.getOwnerDocument)(trigger);
        win.addEventListener('pointermove', onPointerMove);
        doc.documentElement.addEventListener('pointerleave', onPointerLeave);
        return ()=>{
            win.removeEventListener('pointermove', onPointerMove);
            doc.documentElement.removeEventListener('pointerleave', onPointerLeave);
        };
    }, [
        isDisabled,
        isOpen,
        triggerRef,
        overlayRef
    ]);
}
function isPointInSafeArea(point, triggerRect, overlayRect) {
    if (rectContains(triggerRect, point)) return true;
    if (!overlayRect) return false;
    if (rectContains(overlayRect, point)) return true;
    // Otherwise, check whether the point is within the convex hull connecting the two rects.
    let hull = convexHull([
        ...rectCorners(triggerRect),
        ...rectCorners(overlayRect)
    ]);
    return hull.length >= 3 && isPointInPolygon(point, hull);
}
function rectContains(rect, point) {
    return point.x >= rect.left - PADDING && point.x <= rect.right + PADDING && point.y >= rect.top - PADDING && point.y <= rect.bottom + PADDING;
}
function rectCorners(rect) {
    let left = rect.left - PADDING;
    let right = rect.right + PADDING;
    let top = rect.top - PADDING;
    let bottom = rect.bottom + PADDING;
    return [
        {
            x: left,
            y: top
        },
        {
            x: right,
            y: top
        },
        {
            x: right,
            y: bottom
        },
        {
            x: left,
            y: bottom
        }
    ];
}
// Computes the convex hull of a set of points using the monotone chain algorithm.
function convexHull(points) {
    let sorted = points.slice().sort((a, b)=>a.x - b.x || a.y - b.y);
    if (sorted.length < 3) return sorted;
    let cross = (o, a, b)=>(a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
    let lower = [];
    for (let p of sorted){
        while(lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0)lower.pop();
        lower.push(p);
    }
    let upper = [];
    for(let i = sorted.length - 1; i >= 0; i--){
        let p = sorted[i];
        while(upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0)upper.pop();
        upper.push(p);
    }
    lower.pop();
    upper.pop();
    return lower.concat(upper);
}
// Ray casting point-in-polygon test.
function isPointInPolygon(point, polygon) {
    let { x, y } = point;
    let inside = false;
    for(let i = 0, j = polygon.length - 1; i < polygon.length; j = i++){
        let xi = polygon[i].x;
        let yi = polygon[i].y;
        let xj = polygon[j].x;
        let yj = polygon[j].y;
        let intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
        if (intersect) inside = !inside;
    }
    return inside;
}

},{"../utils/domHelpers":"cYkFa","react":"gOP0N","../utils/useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

