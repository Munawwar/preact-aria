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
})({"9b4y8":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a menu trigger.
 *
 * @param props - Props for the menu trigger.
 * @param state - State for the menu trigger.
 * @param ref - Ref to the HTML element trigger for the menu.
 */ parcelHelpers.export(exports, "useMenuTrigger", ()=>useMenuTrigger);
var _focusWithoutScrolling = require("../utils/focusWithoutScrolling");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _indexJs = require("../../intl/menu/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _useContextMenu = require("../interactions/useContextMenu");
var _react = require("react");
var _useId = require("../utils/useId");
var _useKeyboard = require("../interactions/useKeyboard");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
var _useLongPress = require("../interactions/useLongPress");
var _useOverlayTrigger = require("../overlays/useOverlayTrigger");
function useMenuTrigger(props, state, ref) {
    let { type = 'menu', isDisabled, trigger = 'press' } = props;
    let menuTriggerId = (0, _useId.useId)();
    let { triggerProps, overlayProps } = (0, _useOverlayTrigger.useOverlayTrigger)({
        type
    }, state, ref);
    let open = (shouldOpen, e, focusStrategy = 'first')=>{
        if (!shouldOpen || e.isDefaultPrevented()) return false;
        state.toggle(focusStrategy);
    };
    // React puts listeners on the same root, so even if propagation was stopped, immediate propagation is still possible.
    // useTypeSelect will handle the spacebar first if it's running, so we don't want to open if it's handled it already.
    // We use isDefaultPrevented() instead of isPropagationStopped() because createEventHandler stops propagation by default.
    // And default prevented means that the event was handled by something else (typeahead), so we don't want to open the menu.
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        isDisabled,
        shortcuts: {
            Enter: (e)=>{
                return open(trigger !== 'longPress', e, 'first');
            },
            ' ': (e)=>{
                return open(trigger !== 'longPress', e, 'first');
            },
            ArrowDown: (e)=>{
                return open(trigger !== 'longPress', e, 'first');
            },
            ArrowUp: (e)=>{
                return open(trigger !== 'longPress', e, 'last');
            },
            'Alt+Enter': (e)=>{
                return open(trigger === 'longPress', e, 'first');
            },
            'Alt+ ': (e)=>{
                return open(trigger === 'longPress', e, 'first');
            },
            // Alt+Arrow* must open for both trigger modes: for `press` it matches the same `e.key` cases as
            // plain Arrow*; for `longPress`, plain arrows are ignored elsewhere and Alt+Arrow is the opener
            // (see legacy `if (trigger === 'longPress' && !e.altKey) return` before the ArrowDown/Up switch).
            'Alt+ArrowDown': (e)=>{
                return open(true, e, 'first');
            },
            'Alt+ArrowUp': (e)=>{
                return open(true, e, 'last');
            }
        }
    });
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/menu');
    let { longPressProps } = (0, _useLongPress.useLongPress)({
        isDisabled: isDisabled || trigger !== 'longPress',
        accessibilityDescription: stringFormatter.format('longPressMessage'),
        onLongPressStart () {
            state.close();
        },
        onLongPress () {
            state.open('first');
        }
    });
    let pressProps = {
        preventFocusOnPress: true,
        onPressStart (e) {
            // For consistency with native, open the menu on mouse/key down, but touch up.
            if (e.pointerType !== 'touch' && e.pointerType !== 'keyboard' && !isDisabled) {
                // Ensure trigger has focus before opening the menu so it can be restored by FocusScope on close.
                (0, _focusWithoutScrolling.focusWithoutScrolling)(e.target);
                // If opened with a screen reader, auto focus the first item.
                // Otherwise, the menu itself will be focused.
                state.open(e.pointerType === 'virtual' ? 'first' : null);
            }
        },
        onPress (e) {
            if (e.pointerType === 'touch' && !isDisabled) {
                // Ensure trigger has focus before opening the menu so it can be restored by FocusScope on close.
                (0, _focusWithoutScrolling.focusWithoutScrolling)(e.target);
                state.toggle();
            }
        }
    };
    // omit onPress from triggerProps since we override it above.
    // oxlint-disable-next-line react/react-compiler
    delete triggerProps.onPress;
    let { contextMenuProps } = (0, _useContextMenu.useContextMenu)({
        onContextMenu (e) {
            // This is not a DOM event, so the linter is incorrect.
            // eslint-disable-next-line rsp-rules/safe-event-target
            let rect = e.target.getBoundingClientRect();
            state.setPoint({
                x: rect.x + e.x,
                y: rect.y + e.y
            });
            state.open();
        }
    });
    (0, _react.useEffect)(()=>{
        // Close context menus when right clicking outside. The browser's context menu will appear instead.
        if (state.isOpen && trigger === 'contextMenu') {
            let onContextMenu = (e)=>{
                // Checking if the target is the body works because everything outside the menu is inert.
                if ((e.button === 2 || e.button === 0 && e.ctrlKey === true) && (0, _domfunctions.getEventTarget)(e) === document.body) state.close();
            };
            document.addEventListener('mousedown', onContextMenu);
            return ()=>document.removeEventListener('mousedown', onContextMenu);
        }
    }, [
        state,
        trigger
    ]);
    let interactionProps;
    if (trigger === 'press') interactionProps = {
        ...pressProps,
        ...keyboardProps
    };
    else if (trigger === 'longPress') interactionProps = {
        ...longPressProps,
        ...keyboardProps
    };
    else if (trigger === 'contextMenu') {
        interactionProps = contextMenuProps;
        // Remove aria-haspopup and associated attributes from context menu triggers.
        // aria-haspopup indicates that the trigger opens a menu on activation (i.e. click/Enter),
        // which is not the case for context menus, so this would lead to confusing announcements.
        // Context menus are equally discoverable (or not) by sighted and non-sighted users,
        // so we don't need a screen reader specific announcement.
        // See https://github.com/w3c/aria/issues/1971 for further discussion.
        let { 'aria-haspopup': _a, 'aria-expanded': _b, 'aria-controls': _c, ...rest } = triggerProps;
        triggerProps = rest;
    }
    return {
        // @ts-ignore - TODO we pass out both DOMAttributes AND AriaButtonProps, but useButton will discard the longPress event handlers, it's only through PressResponder magic that this works for RSP and RAC. it does not work in aria examples
        menuTriggerProps: {
            ...triggerProps,
            ...interactionProps,
            id: menuTriggerId
        },
        menuProps: {
            ...overlayProps,
            'aria-labelledby': menuTriggerId,
            autoFocus: state.focusStrategy || true,
            onClose: state.close
        }
    };
}

},{"../utils/focusWithoutScrolling":"gcZ3w","../utils/shadowdom/DOMFunctions":"8kfpz","../../intl/menu/index.js":"hHuyl","../interactions/useContextMenu":"kGjqH","react":"gOP0N","../utils/useId":"fQAcb","../interactions/useKeyboard":"aHm7i","../i18n/useLocalizedStringFormatter":"8lll3","../interactions/useLongPress":"b7u5T","../overlays/useOverlayTrigger":"dnU5A","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hHuyl":[function(require,module,exports,__globalThis) {
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

},{"./ar-AE.js":"b4cUQ","./bg-BG.js":"7CqbQ","./cs-CZ.js":"2cLA6","./da-DK.js":"h0Ngk","./de-DE.js":"hXuzg","./el-GR.js":"gAytH","./en-US.js":"gx0yY","./es-ES.js":"qbwP3","./et-EE.js":"jNgKp","./fi-FI.js":"hvq2r","./fr-FR.js":"isNvA","./he-IL.js":"gcBk3","./hr-HR.js":"k3SvG","./hu-HU.js":"lVDiY","./it-IT.js":"6UPXp","./ja-JP.js":"qK36E","./ko-KR.js":"8kRZV","./lt-LT.js":"l0KUZ","./lv-LV.js":"dSbu0","./nb-NO.js":"d6Pnt","./nl-NL.js":"hc5th","./pl-PL.js":"4NZ31","./pt-BR.js":"iSREk","./pt-PT.js":"kKz5F","./ro-RO.js":"bhjoD","./ru-RU.js":"jvtT0","./sk-SK.js":"g0aZ1","./sl-SI.js":"iDGje","./sr-SP.js":"7I6xf","./sv-SE.js":"bdG7P","./tr-TR.js":"jCMRA","./uk-UA.js":"gbYxs","./zh-CN.js":"7Z9uR","./zh-TW.js":"538PE","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"b4cUQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{627}\u{636}\u{63A}\u{637} \u{645}\u{637}\u{648}\u{644}\u{627}\u{64B} \u{623}\u{648} \u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} Alt + \u{627}\u{644}\u{633}\u{647}\u{645} \u{644}\u{623}\u{633}\u{641}\u{644} \u{644}\u{641}\u{62A}\u{62D} \u{627}\u{644}\u{642}\u{627}\u{626}\u{645}\u{629}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7CqbQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{43E}\u{434}\u{44A}\u{43B}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{43D}\u{43E} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Alt+ \u{441}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{43D}\u{430}\u{434}\u{43E}\u{43B}\u{443}, \u{437}\u{430} \u{434}\u{430} \u{43E}\u{442}\u{432}\u{43E}\u{440}\u{438}\u{442}\u{435} \u{43C}\u{435}\u{43D}\u{44E}\u{442}\u{43E}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2cLA6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Dlouh\xfdm stiskem nebo stisknut\xedm kl\xe1ves Alt + \u{161}ipka dol\u{16F} otev\u{159}ete nab\xeddku`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h0Ngk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Langt tryk eller tryk p\xe5 Alt + pil ned for at \xe5bne menuen`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hXuzg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Dr\xfccken Sie lange oder dr\xfccken Sie Alt + Nach-unten, um das Men\xfc zu \xf6ffnen`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gAytH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{3A0}\u{3B9}\u{3AD}\u{3C3}\u{3C4}\u{3B5} \u{3C0}\u{3B1}\u{3C1}\u{3B1}\u{3C4}\u{3B5}\u{3C4}\u{3B1}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3AE} \u{3C0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Alt + \u{3BA}\u{3AC}\u{3C4}\u{3C9} \u{3B2}\u{3AD}\u{3BB}\u{3BF}\u{3C2} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3B1}\u{3BD}\u{3BF}\u{3AF}\u{3BE}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3BF} \u{3BC}\u{3B5}\u{3BD}\u{3BF}\u{3CD}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gx0yY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Long press or press Alt + ArrowDown to open menu`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"qbwP3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Mantenga pulsado o pulse Alt + flecha abajo para abrir el men\xfa`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jNgKp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Men\xfc\xfc avamiseks vajutage pikalt v\xf5i vajutage klahve Alt + allanool`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hvq2r":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Avaa valikko painamalla pohjassa tai n\xe4pp\xe4inyhdistelm\xe4ll\xe4 Alt + Alanuoli`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"isNvA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Appuyez de mani\xe8re prolong\xe9e ou appuyez sur Alt\xa0+\xa0Fl\xe8che vers le bas pour ouvrir le menu.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gcBk3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{5DC}\u{5D7}\u{5E5} \u{5DC}\u{5D7}\u{5D9}\u{5E6}\u{5D4} \u{5D0}\u{5E8}\u{5D5}\u{5DB}\u{5D4} \u{5D0}\u{5D5} \u{5D4}\u{5E7}\u{5E9} Alt + ArrowDown \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E4}\u{5EA}\u{5D5}\u{5D7} \u{5D0}\u{5EA} \u{5D4}\u{5EA}\u{5E4}\u{5E8}\u{5D9}\u{5D8}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k3SvG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lVDiY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Nyomja meg hosszan, vagy nyomja meg az Alt + lefele ny\xedl gombot a men\xfc megnyit\xe1s\xe1hoz`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6UPXp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Premi a lungo o premi Alt + Freccia gi\xf9 per aprire il menu`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"qK36E":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{9577}\u{62BC}\u{3057}\u{307E}\u{305F}\u{306F} Alt+\u{4E0B}\u{77E2}\u{5370}\u{30AD}\u{30FC}\u{3067}\u{30E1}\u{30CB}\u{30E5}\u{30FC}\u{3092}\u{958B}\u{304F}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8kRZV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{AE38}\u{AC8C} \u{B204}\u{B974}\u{AC70}\u{B098} Alt + \u{C544}\u{B798}\u{CABD} \u{D654}\u{C0B4}\u{D45C}\u{B97C} \u{B20C}\u{B7EC} \u{BA54}\u{B274} \u{C5F4}\u{AE30}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"l0KUZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Nor\u{117}dami atidaryti meniu, nuspaud\u{119} palaikykite arba paspauskite \u{201E}Alt + ArrowDown\u{201C}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dSbu0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Lai atv\u{113}rtu izv\u{113}lni, turiet nospiestu vai nospiediet tausti\u{146}u kombin\u{101}ciju Alt + lejupv\u{113}rst\u{101} bulti\u{146}a`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"d6Pnt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Langt trykk eller trykk Alt + PilNed for \xe5 \xe5pne menyen`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hc5th":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4NZ31":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Naci\u{15B}nij i przytrzymaj lub naci\u{15B}nij klawisze Alt + Strza\u{142}ka w d\xf3\u{142}, aby otworzy\u{107} menu`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iSREk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kKz5F":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bhjoD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Ap\u{103}sa\u{21B}i lung sau ap\u{103}sa\u{21B}i pe Alt + s\u{103}geat\u{103} \xeen jos pentru a deschide meniul`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jvtT0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{438} \u{443}\u{434}\u{435}\u{440}\u{436}\u{438}\u{432}\u{430}\u{439}\u{442}\u{435} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} Alt + \u{421}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{44C} \u{43C}\u{435}\u{43D}\u{44E}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"g0aZ1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Ponuku otvor\xedte dlh\xfdm stla\u{10D}en\xedm alebo stla\u{10D}en\xedm kl\xe1vesu Alt + kl\xe1vesu so \u{161}\xedpkou nadol`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iDGje":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Za odprtje menija pritisnite in dr\u{17E}ite gumb ali pritisnite Alt+pu\u{161}\u{10D}ica navzdol`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7I6xf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bdG7P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `H\xe5ll nedtryckt eller tryck p\xe5 Alt + pil ned\xe5t f\xf6r att \xf6ppna menyn`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jCMRA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `Men\xfcy\xfc a\xe7mak i\xe7in uzun bas\u{131}n veya Alt + A\u{15F}a\u{11F}\u{131} Ok tu\u{15F}una bas\u{131}n`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gbYxs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{414}\u{43E}\u{432}\u{433}\u{43E} \u{430}\u{431}\u{43E} \u{437}\u{432}\u{438}\u{447}\u{430}\u{439}\u{43D}\u{43E} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{43A}\u{43E}\u{43C}\u{431}\u{456}\u{43D}\u{430}\u{446}\u{456}\u{44E} \u{43A}\u{43B}\u{430}\u{432}\u{456}\u{448} Alt \u{456} \u{441}\u{442}\u{440}\u{456}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{449}\u{43E}\u{431} \u{432}\u{456}\u{434}\u{43A}\u{440}\u{438}\u{442}\u{438} \u{43C}\u{435}\u{43D}\u{44E}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7Z9uR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{957F}\u{6309}\u{6216}\u{6309} Alt + \u{5411}\u{4E0B}\u{65B9}\u{5411}\u{952E}\u{4EE5}\u{6253}\u{5F00}\u{83DC}\u{5355}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"538PE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "longPressMessage": `\u{9577}\u{6309}\u{6216}\u{6309} Alt+\u{5411}\u{4E0B}\u{9375}\u{4EE5}\u{958B}\u{555F}\u{529F}\u{80FD}\u{8868}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9Jo8j":[function(require,module,exports,__globalThis) {
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
 * A visually hidden button that can be used to allow screen reader
 * users to dismiss a modal or popup when there is no visual
 * affordance to do so.
 */ parcelHelpers.export(exports, "DismissButton", ()=>DismissButton);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../intl/overlays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useLabels = require("../utils/useLabels");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
var _visuallyHidden = require("../visually-hidden/VisuallyHidden");
function DismissButton(props) {
    let { onDismiss, ...otherProps } = props;
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/overlays');
    let labels = (0, _useLabels.useLabels)(otherProps, stringFormatter.format('dismiss'));
    let onClick = ()=>{
        if (onDismiss) onDismiss();
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _visuallyHidden.VisuallyHidden), {
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
            ...labels,
            tabIndex: -1,
            onClick: onClick,
            style: {
                width: 1,
                height: 1
            }
        })
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../intl/overlays/index.js":"lvuta","react":"gOP0N","../utils/useLabels":"8ZwLJ","../i18n/useLocalizedStringFormatter":"8lll3","../visually-hidden/VisuallyHidden":"cMf28","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lvuta":[function(require,module,exports,__globalThis) {
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

},{"./ar-AE.js":"4MU8A","./bg-BG.js":"71XTz","./cs-CZ.js":"1674M","./da-DK.js":"3YGNX","./de-DE.js":"ac7SS","./el-GR.js":"3rnut","./en-US.js":"4tfJu","./es-ES.js":"feZgz","./et-EE.js":"eWkBb","./fi-FI.js":"ccEir","./fr-FR.js":"8datP","./he-IL.js":"iqh5o","./hr-HR.js":"jCLdI","./hu-HU.js":"Bzj2v","./it-IT.js":"Jzfrp","./ja-JP.js":"iamlT","./ko-KR.js":"jB3hx","./lt-LT.js":"kHomJ","./lv-LV.js":"kvlQr","./nb-NO.js":"bSk9d","./nl-NL.js":"gjWUK","./pl-PL.js":"hSlcQ","./pt-BR.js":"crKtn","./pt-PT.js":"gGKVx","./ro-RO.js":"3CVNQ","./ru-RU.js":"gUduO","./sk-SK.js":"f63rR","./sl-SI.js":"7xPjP","./sr-SP.js":"kaJPM","./sv-SE.js":"BNbgk","./tr-TR.js":"hSKWK","./uk-UA.js":"65la6","./zh-CN.js":"iypn0","./zh-TW.js":"kA3nY","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4MU8A":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `\u{62A}\u{62C}\u{627}\u{647}\u{644}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"71XTz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `\u{41E}\u{442}\u{445}\u{432}\u{44A}\u{440}\u{43B}\u{44F}\u{43D}\u{435}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1674M":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Odstranit`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3YGNX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Luk`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ac7SS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Schlie\xdfen`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3rnut":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `\u{391}\u{3C0}\u{3CC}\u{3C1}\u{3C1}\u{3B9}\u{3C8}\u{3B7}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4tfJu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Dismiss`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"feZgz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Descartar`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eWkBb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `L\xf5peta`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ccEir":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Hylk\xe4\xe4`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8datP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Rejeter`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iqh5o":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `\u{5D4}\u{5EA}\u{5E2}\u{5DC}\u{5DD}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jCLdI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Odbaci`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"Bzj2v":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Elutas\xedt\xe1s`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"Jzfrp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Ignora`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iamlT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `\u{9589}\u{3058}\u{308B}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jB3hx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `\u{BB34}\u{C2DC}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kHomJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Atmesti`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kvlQr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Ner\u{101}d\u{12B}t`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bSk9d":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Lukk`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gjWUK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Negeren`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hSlcQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Zignoruj`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"crKtn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Descartar`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gGKVx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Dispensar`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3CVNQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Revocare`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gUduO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `\u{41F}\u{440}\u{43E}\u{43F}\u{443}\u{441}\u{442}\u{438}\u{442}\u{44C}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"f63rR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Zru\u{161}i\u{165}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7xPjP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Opusti`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kaJPM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Odbaci`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"BNbgk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Avvisa`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hSKWK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `Kapat`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"65la6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `\u{421}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iypn0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `\u{53D6}\u{6D88}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kA3nY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "dismiss": `\u{95DC}\u{9589}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

