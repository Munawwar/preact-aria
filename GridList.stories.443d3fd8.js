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
})({"1oddZ":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useGridSelectionAnnouncement", ()=>useGridSelectionAnnouncement);
var _liveAnnouncer = require("../live-announcer/LiveAnnouncer");
var _indexJs = require("../../intl/grid/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _react = require("react");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
var _useUpdateEffect = require("../utils/useUpdateEffect");
function useGridSelectionAnnouncement(props, state) {
    let { getRowText = (key)=>state.collection.getTextValue?.(key) ?? state.collection.getItem(key)?.textValue } = props;
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/grid');
    // Many screen readers do not announce when items in a grid are selected/deselected.
    // We do this using an ARIA live region.
    let selection = state.selectionManager.rawSelection;
    let lastSelection = (0, _react.useRef)(selection);
    let announceSelectionChange = (0, _react.useCallback)(()=>{
        if (!state.selectionManager.isFocused || selection === lastSelection.current) {
            lastSelection.current = selection;
            return;
        }
        let addedKeys = diffSelection(selection, lastSelection.current);
        let removedKeys = diffSelection(lastSelection.current, selection);
        // If adding or removing a single row from the selection, announce the name of that item.
        let isReplace = state.selectionManager.selectionBehavior === 'replace';
        let messages = [];
        if (state.selectionManager.selectedKeys.size === 1 && isReplace) {
            let firstKey = state.selectionManager.selectedKeys.keys().next().value;
            if (firstKey != null && state.collection.getItem(firstKey)) {
                let currentSelectionText = getRowText(firstKey);
                if (currentSelectionText) messages.push(stringFormatter.format('selectedItem', {
                    item: currentSelectionText
                }));
            }
        } else if (addedKeys.size === 1 && removedKeys.size === 0) {
            let firstKey = addedKeys.keys().next().value;
            if (firstKey != null) {
                let addedText = getRowText(firstKey);
                if (addedText) messages.push(stringFormatter.format('selectedItem', {
                    item: addedText
                }));
            }
        } else if (removedKeys.size === 1 && addedKeys.size === 0) {
            let firstKey = removedKeys.keys().next().value;
            if (firstKey != null && state.collection.getItem(firstKey)) {
                let removedText = getRowText(firstKey);
                if (removedText) messages.push(stringFormatter.format('deselectedItem', {
                    item: removedText
                }));
            }
        }
        // Announce how many items are selected, except when selecting the first item.
        if (state.selectionManager.selectionMode === 'multiple') {
            if (messages.length === 0 || selection === 'all' || selection.size > 1 || lastSelection.current === 'all' || lastSelection.current?.size > 1) messages.push(selection === 'all' ? stringFormatter.format('selectedAll') : stringFormatter.format('selectedCount', {
                count: selection.size
            }));
        }
        if (messages.length > 0) (0, _liveAnnouncer.announce)(messages.join(' '));
        lastSelection.current = selection;
    }, [
        selection,
        state.selectionManager.selectedKeys,
        state.selectionManager.isFocused,
        state.selectionManager.selectionBehavior,
        state.selectionManager.selectionMode,
        state.collection,
        getRowText,
        stringFormatter
    ]);
    // useUpdateEffect will handle using useEffectEvent, no need to stabilize anything on this end
    (0, _useUpdateEffect.useUpdateEffect)(()=>{
        if (state.selectionManager.isFocused) announceSelectionChange();
        else {
            // Wait a frame in case the collection is about to become focused (e.g. on mouse down).
            let raf = requestAnimationFrame(announceSelectionChange);
            return ()=>cancelAnimationFrame(raf);
        }
    }, [
        selection,
        state.selectionManager.isFocused
    ]);
}
function diffSelection(a, b) {
    let res = new Set();
    if (a === 'all' || b === 'all') return res;
    for (let key of a.keys())if (!b.has(key)) res.add(key);
    return res;
}

},{"../live-announcer/LiveAnnouncer":"gQ2k2","../../intl/grid/index.js":"j9XZN","react":"gOP0N","../i18n/useLocalizedStringFormatter":"8lll3","../utils/useUpdateEffect":"9WaKh","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j9XZN":[function(require,module,exports,__globalThis) {
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

},{"./ar-AE.js":"c4J3r","./bg-BG.js":"9URD3","./cs-CZ.js":"jXczP","./da-DK.js":"hm2QQ","./de-DE.js":"aZqix","./el-GR.js":"dfPEj","./en-US.js":"aRCfp","./es-ES.js":"6LsPK","./et-EE.js":"iH5dt","./fi-FI.js":"YMwv8","./fr-FR.js":"gNuAM","./he-IL.js":"cmEKq","./hr-HR.js":"eupvf","./hu-HU.js":"c2uOF","./it-IT.js":"deAqB","./ja-JP.js":"iNCRD","./ko-KR.js":"7ATT2","./lt-LT.js":"b2e30","./lv-LV.js":"kJk9Q","./nb-NO.js":"01jDh","./nl-NL.js":"dKiI5","./pl-PL.js":"d06Jl","./pt-BR.js":"kzmSa","./pt-PT.js":"4RX5X","./ro-RO.js":"9w9Kq","./ru-RU.js":"bJpmM","./sk-SK.js":"2YPNR","./sl-SI.js":"jtsJX","./sr-SP.js":"gLpAs","./sv-SE.js":"gw8Ol","./tr-TR.js":"ajH95","./uk-UA.js":"4elP6","./zh-CN.js":"aQRmM","./zh-TW.js":"gM0dr","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"c4J3r":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} \u{63A}\u{64A}\u{631} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`,
    "longPressToSelect": `\u{627}\u{636}\u{63A}\u{637} \u{645}\u{637}\u{648}\u{644}\u{64B}\u{627} \u{644}\u{644}\u{62F}\u{62E}\u{648}\u{644} \u{625}\u{644}\u{649} \u{648}\u{636}\u{639} \u{627}\u{644}\u{62A}\u{62D}\u{62F}\u{64A}\u{62F}.`,
    "select": `\u{62A}\u{62D}\u{62F}\u{64A}\u{62F}`,
    "selectedAll": `\u{62C}\u{645}\u{64A}\u{639} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}\u{629}.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `\u{644}\u{645} \u{64A}\u{62A}\u{645} \u{62A}\u{62D}\u{62F}\u{64A}\u{62F} \u{639}\u{646}\u{627}\u{635}\u{631}`,
            one: ()=>`${formatter.number(args.count)} \u{639}\u{646}\u{635}\u{631} \u{645}\u{62D}\u{62F}\u{62F}`,
            other: ()=>`${formatter.number(args.count)} \u{639}\u{646}\u{635}\u{631} \u{645}\u{62D}\u{62F}\u{62F}`
        })}.`,
    "selectedItem": (args)=>`${args.item} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9URD3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} \u{43D}\u{435} \u{435} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}.`,
    "longPressToSelect": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{438} \u{437}\u{430}\u{434}\u{440}\u{44A}\u{436}\u{442}\u{435} \u{437}\u{430} \u{434}\u{430} \u{432}\u{43B}\u{435}\u{437}\u{435}\u{442}\u{435} \u{432} \u{438}\u{437}\u{431}\u{438}\u{440}\u{430}\u{442}\u{435}\u{43B}\u{435}\u{43D} \u{440}\u{435}\u{436}\u{438}\u{43C}.`,
    "select": `\u{418}\u{437}\u{431}\u{435}\u{440}\u{435}\u{442}\u{435}`,
    "selectedAll": `\u{412}\u{441}\u{438}\u{447}\u{43A}\u{438} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438} \u{441}\u{430} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `\u{41D}\u{44F}\u{43C}\u{430} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438}`,
            one: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438}`
        })}.`,
    "selectedItem": (args)=>`${args.item} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jXczP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`Polo\u{17E}ka ${args.item} nen\xed vybr\xe1na.`,
    "longPressToSelect": `Dlouh\xfdm stisknut\xedm p\u{159}ejdete do re\u{17E}imu v\xfdb\u{11B}ru.`,
    "select": `Vybrat`,
    "selectedAll": `Vybr\xe1ny v\u{161}echny polo\u{17E}ky.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Nevybr\xe1ny \u{17E}\xe1dn\xe9 polo\u{17E}ky`,
            one: ()=>`Vybr\xe1na ${formatter.number(args.count)} polo\u{17E}ka`,
            other: ()=>`Vybr\xe1no ${formatter.number(args.count)} polo\u{17E}ek`
        })}.`,
    "selectedItem": (args)=>`Vybr\xe1na polo\u{17E}ka ${args.item}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hm2QQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} ikke valgt.`,
    "longPressToSelect": `Lav et langt tryk for at aktivere valgtilstand.`,
    "select": `V\xe6lg`,
    "selectedAll": `Alle elementer valgt.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Ingen elementer valgt`,
            one: ()=>`${formatter.number(args.count)} element valgt`,
            other: ()=>`${formatter.number(args.count)} elementer valgt`
        })}.`,
    "selectedItem": (args)=>`${args.item} valgt.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aZqix":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} nicht ausgew\xe4hlt.`,
    "longPressToSelect": `Gedr\xfcckt halten, um Auswahlmodus zu \xf6ffnen.`,
    "select": `Ausw\xe4hlen`,
    "selectedAll": `Alle Elemente ausgew\xe4hlt.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Keine Elemente ausgew\xe4hlt`,
            one: ()=>`${formatter.number(args.count)} Element ausgew\xe4hlt`,
            other: ()=>`${formatter.number(args.count)} Elemente ausgew\xe4hlt`
        })}.`,
    "selectedItem": (args)=>`${args.item} ausgew\xe4hlt.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dfPEj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`\u{394}\u{3B5}\u{3BD} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} \u{3C4}\u{3BF} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF} ${args.item}.`,
    "longPressToSelect": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{3C0}\u{3B1}\u{3C1}\u{3B1}\u{3C4}\u{3B5}\u{3C4}\u{3B1}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BC}\u{3C0}\u{3B5}\u{3AF}\u{3C4}\u{3B5} \u{3C3}\u{3B5} \u{3BB}\u{3B5}\u{3B9}\u{3C4}\u{3BF}\u{3C5}\u{3C1}\u{3B3}\u{3AF}\u{3B1} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}\u{3C2}.`,
    "select": `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,
    "selectedAll": `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B1}\u{3BD} \u{3CC}\u{3BB}\u{3B1} \u{3C4}\u{3B1} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3B1}.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `\u{394}\u{3B5}\u{3BD} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B1}\u{3BD} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3B1}`,
            one: ()=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} ${formatter.number(args.count)} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF}`,
            other: ()=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B1}\u{3BD} ${formatter.number(args.count)} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3B1}`
        })}.`,
    "selectedItem": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} \u{3C4}\u{3BF} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF} ${args.item}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aRCfp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} not selected.`,
    "select": `Select`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `No items selected`,
            one: ()=>`${formatter.number(args.count)} item selected`,
            other: ()=>`${formatter.number(args.count)} items selected`
        })}.`,
    "selectedAll": `All items selected.`,
    "selectedItem": (args)=>`${args.item} selected.`,
    "longPressToSelect": `Long press to enter selection mode.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6LsPK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} no seleccionado.`,
    "longPressToSelect": `Mantenga pulsado para abrir el modo de selecci\xf3n.`,
    "select": `Seleccionar`,
    "selectedAll": `Todos los elementos seleccionados.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Ning\xfan elemento seleccionado`,
            one: ()=>`${formatter.number(args.count)} elemento seleccionado`,
            other: ()=>`${formatter.number(args.count)} elementos seleccionados`
        })}.`,
    "selectedItem": (args)=>`${args.item} seleccionado.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iH5dt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} pole valitud.`,
    "longPressToSelect": `Valikure\u{17E}iimi sisenemiseks vajutage pikalt.`,
    "select": `Vali`,
    "selectedAll": `K\xf5ik \xfcksused valitud.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `\xdcksusi pole valitud`,
            one: ()=>`${formatter.number(args.count)} \xfcksus valitud`,
            other: ()=>`${formatter.number(args.count)} \xfcksust valitud`
        })}.`,
    "selectedItem": (args)=>`${args.item} valitud.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"YMwv8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`Kohdetta ${args.item} ei valittu.`,
    "longPressToSelect": `Siirry valintatilaan painamalla pitk\xe4\xe4n.`,
    "select": `Valitse`,
    "selectedAll": `Kaikki kohteet valittu.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Ei yht\xe4\xe4n kohdetta valittu`,
            one: ()=>`${formatter.number(args.count)} kohde valittu`,
            other: ()=>`${formatter.number(args.count)} kohdetta valittu`
        })}.`,
    "selectedItem": (args)=>`${args.item} valittu.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gNuAM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} non s\xe9lectionn\xe9.`,
    "longPressToSelect": `Appuyez de mani\xe8re prolong\xe9e pour passer en mode de s\xe9lection.`,
    "select": `S\xe9lectionner`,
    "selectedAll": `Tous les \xe9l\xe9ments s\xe9lectionn\xe9s.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Aucun \xe9l\xe9ment s\xe9lectionn\xe9`,
            one: ()=>`${formatter.number(args.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,
            other: ()=>`${formatter.number(args.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`
        })}.`,
    "selectedItem": (args)=>`${args.item} s\xe9lectionn\xe9.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cmEKq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} \u{5DC}\u{5D0} \u{5E0}\u{5D1}\u{5D7}\u{5E8}.`,
    "longPressToSelect": `\u{5D4}\u{5E7}\u{5E9}\u{5D4} \u{5D0}\u{5E8}\u{5D5}\u{5DB}\u{5D4} \u{5DC}\u{5DB}\u{5E0}\u{5D9}\u{5E1}\u{5D4} \u{5DC}\u{5DE}\u{5E6}\u{5D1} \u{5D1}\u{5D7}\u{5D9}\u{5E8}\u{5D4}.`,
    "select": `\u{5D1}\u{5D7}\u{5E8}`,
    "selectedAll": `\u{5DB}\u{5DC} \u{5D4}\u{5E4}\u{5E8}\u{5D9}\u{5D8}\u{5D9}\u{5DD} \u{5E0}\u{5D1}\u{5D7}\u{5E8}\u{5D5}.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `\u{5DC}\u{5D0} \u{5E0}\u{5D1}\u{5D7}\u{5E8}\u{5D5} \u{5E4}\u{5E8}\u{5D9}\u{5D8}\u{5D9}\u{5DD}`,
            one: ()=>`\u{5E4}\u{5E8}\u{5D9}\u{5D8} ${formatter.number(args.count)} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
            other: ()=>`${formatter.number(args.count)} \u{5E4}\u{5E8}\u{5D9}\u{5D8}\u{5D9}\u{5DD} \u{5E0}\u{5D1}\u{5D7}\u{5E8}\u{5D5}`
        })}.`,
    "selectedItem": (args)=>`${args.item} \u{5E0}\u{5D1}\u{5D7}\u{5E8}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eupvf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`Stavka ${args.item} nije odabrana.`,
    "longPressToSelect": `Dugo pritisnite za ulazak u na\u{10D}in odabira.`,
    "select": `Odaberite`,
    "selectedAll": `Odabrane su sve stavke.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Nije odabrana nijedna stavka`,
            one: ()=>`Odabrana je ${formatter.number(args.count)} stavka`,
            other: ()=>`Odabrano je ${formatter.number(args.count)} stavki`
        })}.`,
    "selectedItem": (args)=>`Stavka ${args.item} je odabrana.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"c2uOF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} nincs kijel\xf6lve.`,
    "longPressToSelect": `Nyomja hosszan a kijel\xf6l\xe9shez.`,
    "select": `Kijel\xf6l\xe9s`,
    "selectedAll": `Az \xf6sszes elem kijel\xf6lve.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Egy elem sincs kijel\xf6lve`,
            one: ()=>`${formatter.number(args.count)} elem kijel\xf6lve`,
            other: ()=>`${formatter.number(args.count)} elem kijel\xf6lve`
        })}.`,
    "selectedItem": (args)=>`${args.item} kijel\xf6lve.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"deAqB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} non selezionato.`,
    "longPressToSelect": `Premi a lungo per passare alla modalit\xe0 di selezione.`,
    "select": `Seleziona`,
    "selectedAll": `Tutti gli elementi selezionati.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Nessun elemento selezionato`,
            one: ()=>`${formatter.number(args.count)} elemento selezionato`,
            other: ()=>`${formatter.number(args.count)} elementi selezionati`
        })}.`,
    "selectedItem": (args)=>`${args.item} selezionato.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iNCRD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} \u{304C}\u{9078}\u{629E}\u{3055}\u{308C}\u{3066}\u{3044}\u{307E}\u{305B}\u{3093}\u{3002}`,
    "longPressToSelect": `\u{9577}\u{62BC}\u{3057}\u{3057}\u{3066}\u{9078}\u{629E}\u{30E2}\u{30FC}\u{30C9}\u{3092}\u{958B}\u{304D}\u{307E}\u{3059}\u{3002}`,
    "select": `\u{9078}\u{629E}`,
    "selectedAll": `\u{3059}\u{3079}\u{3066}\u{306E}\u{9805}\u{76EE}\u{3092}\u{9078}\u{629E}\u{3057}\u{307E}\u{3057}\u{305F}\u{3002}`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `\u{9805}\u{76EE}\u{304C}\u{9078}\u{629E}\u{3055}\u{308C}\u{3066}\u{3044}\u{307E}\u{305B}\u{3093}`,
            one: ()=>`${formatter.number(args.count)} \u{9805}\u{76EE}\u{3092}\u{9078}\u{629E}\u{3057}\u{307E}\u{3057}\u{305F}`,
            other: ()=>`${formatter.number(args.count)} \u{9805}\u{76EE}\u{3092}\u{9078}\u{629E}\u{3057}\u{307E}\u{3057}\u{305F}`
        })}\u{3002}`,
    "selectedItem": (args)=>`${args.item} \u{3092}\u{9078}\u{629E}\u{3057}\u{307E}\u{3057}\u{305F}\u{3002}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7ATT2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item}\u{C774}(\u{AC00}) \u{C120}\u{D0DD}\u{B418}\u{C9C0} \u{C54A}\u{C558}\u{C2B5}\u{B2C8}\u{B2E4}.`,
    "longPressToSelect": `\u{C120}\u{D0DD} \u{BAA8}\u{B4DC}\u{B85C} \u{B4E4}\u{C5B4}\u{AC00}\u{B824}\u{BA74} \u{AE38}\u{AC8C} \u{B204}\u{B974}\u{C2ED}\u{C2DC}\u{C624}.`,
    "select": `\u{C120}\u{D0DD}`,
    "selectedAll": `\u{BAA8}\u{B4E0} \u{D56D}\u{BAA9}\u{C774} \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `\u{C120}\u{D0DD}\u{B41C} \u{D56D}\u{BAA9}\u{C774} \u{C5C6}\u{C2B5}\u{B2C8}\u{B2E4}`,
            one: ()=>`${formatter.number(args.count)}\u{AC1C} \u{D56D}\u{BAA9}\u{C774} \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}`,
            other: ()=>`${formatter.number(args.count)}\u{AC1C} \u{D56D}\u{BAA9}\u{C774} \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}`
        })}.`,
    "selectedItem": (args)=>`${args.item}\u{C774}(\u{AC00}) \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"b2e30":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} nepasirinkta.`,
    "longPressToSelect": `Nor\u{117}dami \u{12F}jungti pasirinkimo re\u{17E}im\u{105}, paspauskite ir palaikykite.`,
    "select": `Pasirinkti`,
    "selectedAll": `Pasirinkti visi elementai.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Nepasirinktas n\u{117} vienas elementas`,
            one: ()=>`Pasirinktas ${formatter.number(args.count)} elementas`,
            other: ()=>`Pasirinkta element\u{173}: ${formatter.number(args.count)}`
        })}.`,
    "selectedItem": (args)=>`Pasirinkta: ${args.item}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kJk9Q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`Vienums ${args.item} nav atlas\u{12B}ts.`,
    "longPressToSelect": `Ilgi turiet nospiestu. lai iesl\u{113}gtu atlases re\u{17E}\u{12B}mu.`,
    "select": `Atlas\u{12B}t`,
    "selectedAll": `Atlas\u{12B}ti visi vienumi.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Nav atlas\u{12B}ts neviens vienums`,
            one: ()=>`Atlas\u{12B}to vienumu skaits: ${formatter.number(args.count)}`,
            other: ()=>`Atlas\u{12B}to vienumu skaits: ${formatter.number(args.count)}`
        })}.`,
    "selectedItem": (args)=>`Atlas\u{12B}ts vienums ${args.item}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"01jDh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} er ikke valgt.`,
    "longPressToSelect": `Bruk et langt trykk for \xe5 g\xe5 inn i valgmodus.`,
    "select": `Velg`,
    "selectedAll": `Alle elementer er valgt.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Ingen elementer er valgt`,
            one: ()=>`${formatter.number(args.count)} element er valgt`,
            other: ()=>`${formatter.number(args.count)} elementer er valgt`
        })}.`,
    "selectedItem": (args)=>`${args.item} er valgt.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dKiI5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} niet geselecteerd.`,
    "longPressToSelect": `Druk lang om de selectiemodus te openen.`,
    "select": `Selecteren`,
    "selectedAll": `Alle items geselecteerd.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Geen items geselecteerd`,
            one: ()=>`${formatter.number(args.count)} item geselecteerd`,
            other: ()=>`${formatter.number(args.count)} items geselecteerd`
        })}.`,
    "selectedItem": (args)=>`${args.item} geselecteerd.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"d06Jl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`Nie zaznaczono ${args.item}.`,
    "longPressToSelect": `Naci\u{15B}nij i przytrzymaj, aby wej\u{15B}\u{107} do trybu wyboru.`,
    "select": `Zaznacz`,
    "selectedAll": `Wszystkie zaznaczone elementy.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Nie zaznaczono \u{17C}adnych element\xf3w`,
            one: ()=>`${formatter.number(args.count)} zaznaczony element`,
            other: ()=>`${formatter.number(args.count)} zaznaczonych element\xf3w`
        })}.`,
    "selectedItem": (args)=>`Zaznaczono ${args.item}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kzmSa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} n\xe3o selecionado.`,
    "longPressToSelect": `Mantenha pressionado para entrar no modo de sele\xe7\xe3o.`,
    "select": `Selecionar`,
    "selectedAll": `Todos os itens selecionados.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Nenhum item selecionado`,
            one: ()=>`${formatter.number(args.count)} item selecionado`,
            other: ()=>`${formatter.number(args.count)} itens selecionados`
        })}.`,
    "selectedItem": (args)=>`${args.item} selecionado.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4RX5X":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} n\xe3o selecionado.`,
    "longPressToSelect": `Prima continuamente para entrar no modo de sele\xe7\xe3o.`,
    "select": `Selecionar`,
    "selectedAll": `Todos os itens selecionados.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Nenhum item selecionado`,
            one: ()=>`${formatter.number(args.count)} item selecionado`,
            other: ()=>`${formatter.number(args.count)} itens selecionados`
        })}.`,
    "selectedItem": (args)=>`${args.item} selecionado.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9w9Kq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} neselectat.`,
    "longPressToSelect": `Ap\u{103}sa\u{21B}i lung pentru a intra \xeen modul de selectare.`,
    "select": `Selectare`,
    "selectedAll": `Toate elementele selectate.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Niciun element selectat`,
            one: ()=>`${formatter.number(args.count)} element selectat`,
            other: ()=>`${formatter.number(args.count)} elemente selectate`
        })}.`,
    "selectedItem": (args)=>`${args.item} selectat.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bJpmM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} \u{43D}\u{435} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`,
    "longPressToSelect": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{438} \u{443}\u{434}\u{435}\u{440}\u{436}\u{438}\u{432}\u{430}\u{439}\u{442}\u{435} \u{434}\u{43B}\u{44F} \u{432}\u{445}\u{43E}\u{434}\u{430} \u{432} \u{440}\u{435}\u{436}\u{438}\u{43C} \u{432}\u{44B}\u{431}\u{43E}\u{440}\u{430}.`,
    "select": `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{442}\u{44C}`,
    "selectedAll": `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{44B} \u{432}\u{441}\u{435} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{44B}.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `\u{41D}\u{435}\u{442} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{445} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432}`,
            one: ()=>`${formatter.number(args.count)} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}`,
            other: ()=>`${formatter.number(args.count)} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
        })}.`,
    "selectedItem": (args)=>`${args.item} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2YPNR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`Nevybrat\xe9 polo\u{17E}ky: ${args.item}.`,
    "longPressToSelect": `Dlh\u{161}\xedm stla\u{10D}en\xedm prejdite do re\u{17E}imu v\xfdberu.`,
    "select": `Vybra\u{165}`,
    "selectedAll": `V\u{161}etky vybrat\xe9 polo\u{17E}ky.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `\u{17D}iadne vybrat\xe9 polo\u{17E}ky`,
            one: ()=>`${formatter.number(args.count)} vybrat\xe1 polo\u{17E}ka`,
            other: ()=>`Po\u{10D}et vybrat\xfdch polo\u{17E}iek:${formatter.number(args.count)}`
        })}.`,
    "selectedItem": (args)=>`Vybrat\xe9 polo\u{17E}ky: ${args.item}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jtsJX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`Element ${args.item} ni izbran.`,
    "longPressToSelect": `Za izbirni na\u{10D}in pritisnite in dlje \u{10D}asa dr\u{17E}ite.`,
    "select": `Izberite`,
    "selectedAll": `Vsi elementi so izbrani.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Noben element ni izbran`,
            one: ()=>`${formatter.number(args.count)} element je izbran`,
            other: ()=>`${formatter.number(args.count)} elementov je izbranih`
        })}.`,
    "selectedItem": (args)=>`Element ${args.item} je izbran.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gLpAs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} nije izabrano.`,
    "longPressToSelect": `Dugo pritisnite za ulazak u re\u{17E}im biranja.`,
    "select": `Izaberite`,
    "selectedAll": `Izabrane su sve stavke.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Nije izabrana nijedna stavka`,
            one: ()=>`Izabrana je ${formatter.number(args.count)} stavka`,
            other: ()=>`Izabrano je ${formatter.number(args.count)} stavki`
        })}.`,
    "selectedItem": (args)=>`${args.item} je izabrano.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gw8Ol":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} ej markerat.`,
    "longPressToSelect": `Tryck l\xe4nge n\xe4r du vill \xf6ppna v\xe4ljarl\xe4ge.`,
    "select": `Markera`,
    "selectedAll": `Alla markerade objekt.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Inga markerade objekt`,
            one: ()=>`${formatter.number(args.count)} markerat objekt`,
            other: ()=>`${formatter.number(args.count)} markerade objekt`
        })}.`,
    "selectedItem": (args)=>`${args.item} markerat.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ajH95":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} se\xe7ilmedi.`,
    "longPressToSelect": `Se\xe7im moduna girmek i\xe7in uzun bas\u{131}n.`,
    "select": `Se\xe7`,
    "selectedAll": `T\xfcm \xf6geler se\xe7ildi.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Hi\xe7bir \xf6ge se\xe7ilmedi`,
            one: ()=>`${formatter.number(args.count)} \xf6ge se\xe7ildi`,
            other: ()=>`${formatter.number(args.count)} \xf6ge se\xe7ildi`
        })}.`,
    "selectedItem": (args)=>`${args.item} se\xe7ildi.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4elP6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`${args.item} \u{43D}\u{435} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`,
    "longPressToSelect": `\u{412}\u{438}\u{43A}\u{43E}\u{43D}\u{430}\u{439}\u{442}\u{435} \u{434}\u{43E}\u{432}\u{433}\u{435} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{43D}\u{43D}\u{44F}, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{439}\u{442}\u{438} \u{432} \u{440}\u{435}\u{436}\u{438}\u{43C} \u{432}\u{438}\u{431}\u{43E}\u{440}\u{443}.`,
    "select": `\u{412}\u{438}\u{431}\u{440}\u{430}\u{442}\u{438}`,
    "selectedAll": `\u{423}\u{441}\u{456} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `\u{416}\u{43E}\u{434}\u{43D}\u{438}\u{445} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{456}\u{432} \u{43D}\u{435} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`,
            one: ()=>`${formatter.number(args.count)} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`,
            other: ()=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{456}\u{432}: ${formatter.number(args.count)}`
        })}.`,
    "selectedItem": (args)=>`${args.item} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aQRmM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`\u{672A}\u{9009}\u{62E9} ${args.item}\u{3002}`,
    "longPressToSelect": `\u{957F}\u{6309}\u{4EE5}\u{8FDB}\u{5165}\u{9009}\u{62E9}\u{6A21}\u{5F0F}\u{3002}`,
    "select": `\u{9009}\u{62E9}`,
    "selectedAll": `\u{5DF2}\u{9009}\u{62E9}\u{6240}\u{6709}\u{9879}\u{76EE}\u{3002}`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `\u{672A}\u{9009}\u{62E9}\u{9879}\u{76EE}`,
            one: ()=>`\u{5DF2}\u{9009}\u{62E9} ${formatter.number(args.count)} \u{4E2A}\u{9879}\u{76EE}`,
            other: ()=>`\u{5DF2}\u{9009}\u{62E9} ${formatter.number(args.count)} \u{4E2A}\u{9879}\u{76EE}`
        })}\u{3002}`,
    "selectedItem": (args)=>`\u{5DF2}\u{9009}\u{62E9} ${args.item}\u{3002}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gM0dr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "deselectedItem": (args)=>`\u{672A}\u{9078}\u{53D6}\u{300C}${args.item}\u{300D}\u{3002}`,
    "longPressToSelect": `\u{9577}\u{6309}\u{4EE5}\u{9032}\u{5165}\u{9078}\u{64C7}\u{6A21}\u{5F0F}\u{3002}`,
    "select": `\u{9078}\u{53D6}`,
    "selectedAll": `\u{5DF2}\u{9078}\u{53D6}\u{6240}\u{6709}\u{9805}\u{76EE}\u{3002}`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `\u{672A}\u{9078}\u{53D6}\u{4EFB}\u{4F55}\u{9805}\u{76EE}`,
            one: ()=>`\u{5DF2}\u{9078}\u{53D6} ${formatter.number(args.count)} \u{500B}\u{9805}\u{76EE}`,
            other: ()=>`\u{5DF2}\u{9078}\u{53D6} ${formatter.number(args.count)} \u{500B}\u{9805}\u{76EE}`
        })}\u{3002}`,
    "selectedItem": (args)=>`\u{5DF2}\u{9078}\u{53D6}\u{300C}${args.item}\u{300D}\u{3002}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hmo1L":[function(require,module,exports,__globalThis) {
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
 * Computes the description for a grid selectable collection.
 *
 * @param props
 */ parcelHelpers.export(exports, "useHighlightSelectionDescription", ()=>useHighlightSelectionDescription);
var _indexJs = require("../../intl/grid/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _useDescription = require("../utils/useDescription");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
var _react = require("react");
function useHighlightSelectionDescription(props) {
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/grid');
    let modality = (0, _useFocusVisible.useInteractionModality)();
    // null is the default if the user hasn't interacted with the table at all yet or the rest of the page
    let shouldLongPress = (modality === 'pointer' || modality === 'virtual' || modality == null) && typeof window !== 'undefined' && 'ontouchstart' in window;
    let interactionDescription = (0, _react.useMemo)(()=>{
        let selectionMode = props.selectionManager.selectionMode;
        let selectionBehavior = props.selectionManager.selectionBehavior;
        let message;
        if (shouldLongPress) message = stringFormatter.format('longPressToSelect');
        return selectionBehavior === 'replace' && selectionMode !== 'none' && props.hasItemActions ? message : undefined;
    }, [
        props.selectionManager.selectionMode,
        props.selectionManager.selectionBehavior,
        props.hasItemActions,
        stringFormatter,
        shouldLongPress
    ]);
    let descriptionProps = (0, _useDescription.useDescription)(interactionDescription);
    return descriptionProps;
}

},{"../../intl/grid/index.js":"j9XZN","../utils/useDescription":"1bivM","../interactions/useFocusVisible":"aBfUW","../i18n/useLocalizedStringFormatter":"8lll3","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

