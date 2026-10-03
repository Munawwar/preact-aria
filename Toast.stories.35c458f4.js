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
})({"j2fYB":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a toast component. Toasts display
 * brief, temporary notifications of actions, errors, or other events in an application.
 */ parcelHelpers.export(exports, "useToast", ()=>useToast);
var _filterDOMProps = require("../utils/filterDOMProps");
var _indexJs = require("../../intl/toast/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _react = require("react");
var _useId = require("../utils/useId");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
function useToast(props, state, // eslint-disable-next-line @typescript-eslint/no-unused-vars
ref) {
    let { key, timer, timeout } = props.toast;
    (0, _react.useEffect)(()=>{
        if (timer == null || timeout == null) return;
        timer.reset(timeout);
        return ()=>{
            timer.pause();
        };
    }, [
        timer,
        timeout
    ]);
    let titleId = (0, _useId.useId)();
    let descriptionId = (0, _useId.useSlotId)();
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/toast');
    // This is required for NVDA announcements, without it NVDA will NOT announce the toast when it appears.
    // Originally was tied to animationStart/End via https://github.com/adobe/react-spectrum/pull/6223/commits/e22e319df64958e822ab7cd9685e96818cae9ba5
    // but toasts don't always have animations.
    let [isVisible, setIsVisible] = (0, _react.useState)(false);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        setIsVisible(true);
    }, []);
    let toastProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    return {
        toastProps: {
            ...toastProps,
            role: 'alertdialog',
            'aria-modal': 'false',
            'aria-labelledby': props['aria-labelledby'] || titleId,
            'aria-describedby': props['aria-describedby'] || descriptionId,
            tabIndex: 0
        },
        contentProps: {
            role: 'alert',
            'aria-atomic': 'true',
            'aria-hidden': isVisible ? undefined : 'true'
        },
        titleProps: {
            id: titleId
        },
        descriptionProps: {
            id: descriptionId
        },
        closeButtonProps: {
            'aria-label': stringFormatter.format('close'),
            onPress: ()=>state.close(key)
        }
    };
}

},{"../utils/filterDOMProps":"h4XHF","../../intl/toast/index.js":"lPmbk","react":"gOP0N","../utils/useId":"fQAcb","../utils/useLayoutEffect":"h7M6K","../i18n/useLocalizedStringFormatter":"8lll3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lPmbk":[function(require,module,exports,__globalThis) {
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

},{"./ar-AE.js":"7UKie","./bg-BG.js":"byO4s","./cs-CZ.js":"9mElK","./da-DK.js":"8i36S","./de-DE.js":"eOXZ5","./el-GR.js":"lWDNe","./en-US.js":"9tCs9","./es-ES.js":"4B8Pt","./et-EE.js":"a0qI5","./fi-FI.js":"11GE9","./fr-FR.js":"dSBv9","./he-IL.js":"gIQPz","./hr-HR.js":"fdJdX","./hu-HU.js":"2nkRF","./it-IT.js":"xpP95","./ja-JP.js":"dcwos","./ko-KR.js":"15CC2","./lt-LT.js":"gWuem","./lv-LV.js":"2yGZZ","./nb-NO.js":"4ryoi","./nl-NL.js":"luis1","./pl-PL.js":"ejak8","./pt-BR.js":"kFDuF","./pt-PT.js":"eXyUU","./ro-RO.js":"7RzKa","./ru-RU.js":"bPxma","./sk-SK.js":"frW3u","./sl-SI.js":"bzb16","./sr-SP.js":"87TMb","./sv-SE.js":"daOJo","./tr-TR.js":"3Lutu","./uk-UA.js":"evL7X","./zh-CN.js":"52ECZ","./zh-TW.js":"9vyt9","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7UKie":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `\u{625}\u{63A}\u{644}\u{627}\u{642}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{625}\u{634}\u{639}\u{627}\u{631}`,
            other: ()=>`${formatter.number(args.count)} \u{625}\u{634}\u{639}\u{627}\u{631}\u{627}\u{62A}`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"byO4s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `\u{417}\u{430}\u{442}\u{432}\u{43E}\u{440}\u{438}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{432}\u{435}\u{441}\u{442}\u{438}\u{435}`,
            other: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{432}\u{435}\u{441}\u{442}\u{438}\u{44F}`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9mElK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Zav\u{159}\xedt`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} ozn\xe1men\xed`,
            other: ()=>`${formatter.number(args.count)} ozn\xe1men\xed`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8i36S":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Luk`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} besked`,
            other: ()=>`${formatter.number(args.count)} beskeder`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eOXZ5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Schlie\xdfen`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} Benachrichtigung`,
            other: ()=>`${formatter.number(args.count)} Benachrichtigungen`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lWDNe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `\u{39A}\u{3BB}\u{3B5}\u{3AF}\u{3C3}\u{3B9}\u{3BC}\u{3BF}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{3B5}\u{3B9}\u{3B4}\u{3BF}\u{3C0}\u{3BF}\u{3AF}\u{3B7}\u{3C3}\u{3B7}`,
            other: ()=>`${formatter.number(args.count)} \u{3B5}\u{3B9}\u{3B4}\u{3BF}\u{3C0}\u{3BF}\u{3B9}\u{3AE}\u{3C3}\u{3B5}\u{3B9}\u{3C2}`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9tCs9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Close`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} notification`,
            other: ()=>`${formatter.number(args.count)} notifications`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4B8Pt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Cerrar`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} notificaci\xf3n`,
            other: ()=>`${formatter.number(args.count)} notificaciones`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"a0qI5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Sule`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} teatis`,
            other: ()=>`${formatter.number(args.count)} teatist`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"11GE9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Sulje`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} ilmoitus`,
            other: ()=>`${formatter.number(args.count)} ilmoitusta`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dSBv9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Fermer`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} notification`,
            other: ()=>`${formatter.number(args.count)} notifications`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gIQPz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `\u{5E1}\u{5D2}\u{5D5}\u{5E8}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{5D4}\u{5EA}\u{5E8}\u{5D0}\u{5D4}`,
            other: ()=>`${formatter.number(args.count)} \u{5D4}\u{5EA}\u{5E8}\u{5D0}\u{5D5}\u{5EA}`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fdJdX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Zatvori`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} obavijest`,
            other: ()=>`${formatter.number(args.count)} obavijesti`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2nkRF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Bez\xe1r\xe1s`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \xe9rtes\xedt\xe9s`,
            other: ()=>`${formatter.number(args.count)} \xe9rtes\xedt\xe9s`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"xpP95":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Chiudi`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} notifica`,
            other: ()=>`${formatter.number(args.count)} notifiche`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dcwos":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `\u{9589}\u{3058}\u{308B}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{500B}\u{306E}\u{901A}\u{77E5}`,
            other: ()=>`${formatter.number(args.count)} \u{500B}\u{306E}\u{901A}\u{77E5}`
        })}\u{3002}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"15CC2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `\u{B2EB}\u{AE30}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C54C}\u{B9BC}`,
            other: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C54C}\u{B9BC}`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gWuem":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `U\u{17E}daryti`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} prane\u{161}imas`,
            other: ()=>`${formatter.number(args.count)} prane\u{161}imai`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2yGZZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Aizv\u{113}rt`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} pazi\u{146}ojums`,
            other: ()=>`${formatter.number(args.count)} pazi\u{146}ojumi`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4ryoi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Lukk`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} varsling`,
            other: ()=>`${formatter.number(args.count)} varsler`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"luis1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Sluiten`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} melding`,
            other: ()=>`${formatter.number(args.count)} meldingen`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ejak8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Zamknij`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} powiadomienie`,
            few: ()=>`${formatter.number(args.count)} powiadomienia`,
            many: ()=>`${formatter.number(args.count)} powiadomie\u{144}`,
            other: ()=>`${formatter.number(args.count)} powiadomienia`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kFDuF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Fechar`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} notifica\xe7\xe3o`,
            other: ()=>`${formatter.number(args.count)} notifica\xe7\xf5es`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eXyUU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Fechar`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} notifica\xe7\xe3o`,
            other: ()=>`${formatter.number(args.count)} notifica\xe7\xf5es`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7RzKa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `\xcenchide\u{163}i`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} notificare`,
            other: ()=>`${formatter.number(args.count)} notific\u{103}ri`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bPxma":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `\u{417}\u{430}\u{43A}\u{440}\u{44B}\u{442}\u{44C}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{443}\u{432}\u{435}\u{434}\u{43E}\u{43C}\u{43B}\u{435}\u{43D}\u{438}\u{435}`,
            other: ()=>`${formatter.number(args.count)} \u{443}\u{432}\u{435}\u{434}\u{43E}\u{43C}\u{43B}\u{435}\u{43D}\u{438}\u{44F}`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"frW3u":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Zatvori\u{165}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} ozn\xe1menie`,
            few: ()=>`${formatter.number(args.count)} ozn\xe1menia`,
            other: ()=>`${formatter.number(args.count)} ozn\xe1men\xed`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bzb16":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Zapri`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} obvestilo`,
            two: ()=>`${formatter.number(args.count)} obvestili`,
            few: ()=>`${formatter.number(args.count)} obvestila`,
            other: ()=>`${formatter.number(args.count)} obvestil`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"87TMb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Zatvori`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} obave\u{161}tenje`,
            other: ()=>`${formatter.number(args.count)} obave\u{161}tenja`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"daOJo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `St\xe4ng`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} meddelande`,
            other: ()=>`${formatter.number(args.count)} meddelanden`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3Lutu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `Kapat`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} bildirim`,
            other: ()=>`${formatter.number(args.count)} bildirim`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"evL7X":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `\u{417}\u{430}\u{43A}\u{440}\u{438}\u{442}\u{438}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{441}\u{43F}\u{43E}\u{432}\u{456}\u{449}\u{435}\u{43D}\u{43D}\u{44F}`,
            other: ()=>`${formatter.number(args.count)} \u{441}\u{43F}\u{43E}\u{432}\u{456}\u{449}\u{435}\u{43D}\u{43D}\u{44F}`
        })}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"52ECZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `\u{5173}\u{95ED}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{4E2A}\u{901A}\u{77E5}`,
            other: ()=>`${formatter.number(args.count)} \u{4E2A}\u{901A}\u{77E5}`
        })}\u{3002}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9vyt9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "close": `\u{95DC}\u{9589}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{500B}\u{901A}\u{77E5}`,
            other: ()=>`${formatter.number(args.count)} \u{500B}\u{901A}\u{77E5}`
        })}\u{3002}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gnVt7":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a toast region containing one or more
 * toasts. Toasts display brief, temporary notifications of actions, errors, or other events in an
 * application.
 */ parcelHelpers.export(exports, "useToastRegion", ()=>useToastRegion);
var _focusWithoutScrolling = require("../utils/focusWithoutScrolling");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _indexJs = require("../../intl/toast/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _useFocusWithin = require("../interactions/useFocusWithin");
var _useHover = require("../interactions/useHover");
var _useLandmark = require("../landmark/useLandmark");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
function useToastRegion(props, state, ref) {
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/toast');
    let { landmarkProps } = (0, _useLandmark.useLandmark)({
        role: 'region',
        'aria-label': props['aria-label'] || stringFormatter.format('notifications', {
            count: state.visibleToasts.length
        })
    }, ref);
    let isHovered = (0, _react.useRef)(false);
    let isFocused = (0, _react.useRef)(false);
    let updateTimers = (0, _react.useCallback)(()=>{
        if (isHovered.current || isFocused.current) state.pauseAll();
        else state.resumeAll();
    }, [
        state
    ]);
    let { hoverProps } = (0, _useHover.useHover)({
        onHoverStart: ()=>{
            isHovered.current = true;
            updateTimers();
        },
        onHoverEnd: ()=>{
            isHovered.current = false;
            updateTimers();
        }
    });
    // Manage focus within the toast region.
    // If a focused containing toast is removed, move focus to the next toast, or the previous toast if there is no next toast.
    let toasts = (0, _react.useRef)([]);
    let prevVisibleToasts = (0, _react.useRef)(state.visibleToasts);
    let focusedToast = (0, _react.useRef)(null);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        // If no toast has focus, then don't do anything.
        if (focusedToast.current === -1 || state.visibleToasts.length === 0 || !ref.current) {
            toasts.current = [];
            prevVisibleToasts.current = state.visibleToasts;
            return;
        }
        toasts.current = [
            ...ref.current.querySelectorAll('[role="alertdialog"]')
        ];
        // If the visible toasts haven't changed, we don't need to do anything.
        if (prevVisibleToasts.current.length === state.visibleToasts.length && state.visibleToasts.every((t, i)=>t.key === prevVisibleToasts.current[i].key)) {
            prevVisibleToasts.current = state.visibleToasts;
            return;
        }
        // Get a list of all toasts by index and add info if they are removed.
        let allToasts = prevVisibleToasts.current.map((t, i)=>({
                ...t,
                i,
                isRemoved: !state.visibleToasts.some((t2)=>t.key === t2.key)
            }));
        let removedFocusedToastIndex = allToasts.findIndex((t)=>t.i === focusedToast.current && t.isRemoved);
        // If the focused toast was removed, focus the next or previous toast.
        if (removedFocusedToastIndex > -1) {
            // In pointer modality, move focus out of the toast region.
            // Otherwise auto-dismiss timers will appear "stuck".
            // oxlint-disable-next-line react/react-compiler
            if ((0, _useFocusVisible.getInteractionModality)() === 'pointer' && lastFocused.current?.isConnected) (0, _focusWithoutScrolling.focusWithoutScrolling)(lastFocused.current);
            else {
                let i = 0;
                let nextToast;
                let prevToast;
                while(i <= removedFocusedToastIndex){
                    if (!allToasts[i].isRemoved) prevToast = Math.max(0, i - 1);
                    i++;
                }
                while(i < allToasts.length){
                    if (!allToasts[i].isRemoved) {
                        nextToast = i - 1;
                        break;
                    }
                    i++;
                }
                // in the case where it's one toast at a time, both will be undefined, but we know the index must be 0
                if (prevToast === undefined && nextToast === undefined) prevToast = 0;
                // prioritize going to newer toasts
                if (prevToast >= 0 && prevToast < toasts.current.length) (0, _focusWithoutScrolling.focusWithoutScrolling)(toasts.current[prevToast]);
                else if (nextToast >= 0 && nextToast < toasts.current.length) (0, _focusWithoutScrolling.focusWithoutScrolling)(toasts.current[nextToast]);
            }
        }
        prevVisibleToasts.current = state.visibleToasts;
    }, [
        state.visibleToasts,
        ref
    ]);
    let lastFocused = (0, _react.useRef)(null);
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)({
        onFocusWithin: (e)=>{
            isFocused.current = true;
            // oxlint-disable-next-line react/react-compiler
            lastFocused.current = e.relatedTarget;
            updateTimers();
        },
        onBlurWithin: ()=>{
            isFocused.current = false;
            // oxlint-disable-next-line react/react-compiler
            lastFocused.current = null;
            updateTimers();
        }
    });
    // When the number of visible toasts becomes 0 or the region unmounts,
    // restore focus to the last element that had focus before the user moved focus
    // into the region. FocusScope restore focus doesn't update whenever the focus
    // moves in, it only happens once, so we correct it.
    // Because we're in a hook, we can't control if the user unmounts or not.
    (0, _react.useEffect)(()=>{
        if (state.visibleToasts.length === 0 && lastFocused.current?.isConnected) {
            if ((0, _useFocusVisible.getInteractionModality)() === 'pointer') (0, _focusWithoutScrolling.focusWithoutScrolling)(lastFocused.current);
            else lastFocused.current.focus();
            // oxlint-disable-next-line react/react-compiler
            lastFocused.current = null;
        }
    }, [
        ref,
        state.visibleToasts.length
    ]);
    (0, _react.useEffect)(()=>{
        return ()=>{
            if (lastFocused.current?.isConnected) {
                if ((0, _useFocusVisible.getInteractionModality)() === 'pointer') (0, _focusWithoutScrolling.focusWithoutScrolling)(lastFocused.current);
                else lastFocused.current.focus();
                lastFocused.current = null;
            }
        };
    }, [
        ref
    ]);
    return {
        // oxlint-disable-next-line react/react-compiler
        regionProps: (0, _mergeProps.mergeProps)(landmarkProps, hoverProps, focusWithinProps, {
            tabIndex: -1,
            // Mark the toast region as a "top layer", so that it:
            //   - is not aria-hidden when opening an overlay
            //   - allows focus even outside a containing focus scope
            //   - doesn’t dismiss overlays when clicking on it, even though it is outside
            // @ts-ignore
            'data-react-aria-top-layer': true,
            // listen to focus events separate from focuswithin because that will only fire once
            // and we need to follow all focus changes
            onFocus: (e)=>{
                let target = (0, _domfunctions.getEventTarget)(e).closest('[role="alertdialog"]');
                focusedToast.current = toasts.current.findIndex((t)=>t === target);
            },
            onBlur: ()=>{
                focusedToast.current = -1;
            }
        })
    };
}

},{"../utils/focusWithoutScrolling":"gcZ3w","../utils/shadowdom/DOMFunctions":"8kfpz","../interactions/useFocusVisible":"aBfUW","../../intl/toast/index.js":"lPmbk","../utils/mergeProps":"jycxS","react":"gOP0N","../interactions/useFocusWithin":"bkSQo","../interactions/useHover":"2yLrj","../landmark/useLandmark":"lb7ab","../utils/useLayoutEffect":"h7M6K","../i18n/useLocalizedStringFormatter":"8lll3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"brP0X":[function(require,module,exports,__globalThis) {
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
 * Provides state management for a toast queue. Toasts display brief, temporary notifications
 * of actions, errors, or other events in an application.
 */ parcelHelpers.export(exports, "useToastState", ()=>useToastState);
/**
 * Subscribes to a provided toast queue and provides methods to update it.
 */ parcelHelpers.export(exports, "useToastQueue", ()=>useToastQueue);
/**
 * A ToastQueue manages the order of toasts.
 */ parcelHelpers.export(exports, "ToastQueue", ()=>ToastQueue);
var _react = require("react");
// Shim to support React 17 and below.
var _indexJs = require("use-sync-external-store/shim/index.js");
function useToastState(props = {}) {
    let { maxVisibleToasts = 1, wrapUpdate } = props;
    let queue = (0, _react.useMemo)(()=>new ToastQueue({
            maxVisibleToasts,
            wrapUpdate
        }), [
        maxVisibleToasts,
        wrapUpdate
    ]);
    return useToastQueue(queue);
}
function useToastQueue(queue) {
    let subscribe = (0, _react.useCallback)((fn)=>queue.subscribe(fn), [
        queue
    ]);
    let getSnapshot = (0, _react.useCallback)(()=>queue.visibleToasts, [
        queue
    ]);
    let visibleToasts = (0, _indexJs.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot);
    return {
        visibleToasts,
        add: (content, options)=>queue.add(content, options),
        close: (key)=>queue.close(key),
        pauseAll: ()=>queue.pauseAll(),
        resumeAll: ()=>queue.resumeAll()
    };
}
class ToastQueue {
    queue = [];
    subscriptions = new Set();
    maxVisibleToasts;
    wrapUpdate;
    /** The currently visible toasts. */ visibleToasts = [];
    constructor(options){
        this.maxVisibleToasts = options?.maxVisibleToasts ?? Infinity;
        this.wrapUpdate = options?.wrapUpdate;
    }
    runWithWrapUpdate(fn, action) {
        if (this.wrapUpdate) this.wrapUpdate(fn, action);
        else fn();
    }
    /** Subscribes to updates to the visible toasts. */ subscribe(fn) {
        this.subscriptions.add(fn);
        return ()=>this.subscriptions.delete(fn);
    }
    /** Adds a new toast to the queue. */ add(content, options = {}) {
        let toastKey = '_' + Math.random().toString(36).slice(2);
        let toast = {
            ...options,
            content,
            key: toastKey,
            timer: options.timeout ? new Timer(()=>this.close(toastKey), options.timeout) : undefined
        };
        this.queue.unshift(toast);
        this.updateVisibleToasts('add');
        return toastKey;
    }
    /**
   * Closes a toast.
   */ close(key) {
        let index = this.queue.findIndex((t)=>t.key === key);
        if (index >= 0) {
            this.queue[index].onClose?.();
            this.queue.splice(index, 1);
        }
        this.updateVisibleToasts('remove');
    }
    updateVisibleToasts(action) {
        this.visibleToasts = this.queue.slice(0, this.maxVisibleToasts);
        this.runWithWrapUpdate(()=>{
            for (let fn of this.subscriptions)fn();
        }, action);
    }
    /** Pauses the timers for all visible toasts. */ pauseAll() {
        for (let toast of this.visibleToasts)if (toast.timer) toast.timer.pause();
    }
    /** Resumes the timers for all visible toasts. */ resumeAll() {
        for (let toast of this.visibleToasts)if (toast.timer) toast.timer.resume();
    }
    clear() {
        this.queue = [];
        this.updateVisibleToasts('clear');
    }
}
class Timer {
    timerId;
    startTime = null;
    remaining;
    callback;
    constructor(callback, delay){
        this.remaining = delay;
        this.callback = callback;
    }
    reset(delay) {
        this.remaining = delay;
        this.resume();
    }
    pause() {
        if (this.timerId == null) return;
        clearTimeout(this.timerId);
        this.timerId = null;
        this.remaining -= Date.now() - this.startTime;
    }
    resume() {
        if (this.remaining <= 0) return;
        this.startTime = Date.now();
        this.timerId = setTimeout(()=>{
            this.timerId = null;
            this.remaining = 0;
            this.callback();
        }, this.remaining);
    }
}

},{"react":"gOP0N","use-sync-external-store/shim/index.js":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

