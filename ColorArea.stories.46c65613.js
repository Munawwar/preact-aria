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
})({"2fq3u":[function(require,module,exports,__globalThis) {
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

},{"./ar-AE.js":"ftmQe","./bg-BG.js":"iNGmI","./cs-CZ.js":"hHiWp","./da-DK.js":"aXXJV","./de-DE.js":"85eYx","./el-GR.js":"lDx4q","./en-US.js":"gP77B","./es-ES.js":"eRyiG","./et-EE.js":"cfitH","./fi-FI.js":"3xt5W","./fr-FR.js":"6Reis","./he-IL.js":"14dtb","./hr-HR.js":"6xSuM","./hu-HU.js":"fMOVQ","./it-IT.js":"fWN5E","./ja-JP.js":"bCfh0","./ko-KR.js":"kMWAm","./lt-LT.js":"aYI5S","./lv-LV.js":"iykzo","./nb-NO.js":"k18HW","./nl-NL.js":"hyE9R","./pl-PL.js":"5hl0Q","./pt-BR.js":"ix8Wz","./pt-PT.js":"7QfPT","./ro-RO.js":"hZLc4","./ru-RU.js":"lfKm7","./sk-SK.js":"anKzQ","./sl-SI.js":"jWmgk","./sr-SP.js":"1vakH","./sv-SE.js":"iEudU","./tr-TR.js":"dtbMV","./uk-UA.js":"1BrU7","./zh-CN.js":"1Ar6O","./zh-TW.js":"b9ErY","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ftmQe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `\u{623}\u{62F}\u{627}\u{629} \u{627}\u{646}\u{62A}\u{642}\u{627}\u{621} \u{627}\u{644}\u{644}\u{648}\u{646}`,
    "colorSwatch": `\u{62A}\u{63A}\u{64A}\u{64A}\u{631} \u{627}\u{644}\u{623}\u{644}\u{648}\u{627}\u{646}`,
    "transparent": `\u{634}\u{641}\u{627}\u{641}`,
    "twoDimensionalSlider": `\u{645}\u{64F}\u{646}\u{632}\u{644}\u{642} 2D`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iNGmI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `\u{421}\u{440}\u{435}\u{434}\u{441}\u{442}\u{432}\u{43E} \u{437}\u{430} \u{438}\u{437}\u{431}\u{438}\u{440}\u{430}\u{43D}\u{435} \u{43D}\u{430} \u{446}\u{432}\u{44F}\u{442}`,
    "colorSwatch": `\u{446}\u{432}\u{435}\u{442}\u{43D}\u{430} \u{43C}\u{43E}\u{441}\u{442}\u{440}\u{430}`,
    "transparent": `\u{43F}\u{440}\u{43E}\u{437}\u{440}\u{430}\u{447}\u{435}\u{43D}`,
    "twoDimensionalSlider": `2D \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{447}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hHiWp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `V\xfdb\u{11B}r barvy`,
    "colorSwatch": `barevn\xfd vzorek`,
    "transparent": `pr\u{16F}hledn\xfd`,
    "twoDimensionalSlider": `2D posuvn\xedk`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aXXJV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `Farvev\xe6lger`,
    "colorSwatch": `farvepr\xf8ve`,
    "transparent": `gennemsigtig`,
    "twoDimensionalSlider": `2D-skyder`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"85eYx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `Farbw\xe4hler`,
    "colorSwatch": `Farbfeld`,
    "transparent": `transparent`,
    "twoDimensionalSlider": `2D-Schieberegler`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lDx4q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3B1}\u{3C2} \u{3C7}\u{3C1}\u{3C9}\u{3BC}\u{3AC}\u{3C4}\u{3C9}\u{3BD}`,
    "colorSwatch": `\u{3C7}\u{3C1}\u{3C9}\u{3BC}\u{3B1}\u{3C4}\u{3B9}\u{3BA}\u{3CC} \u{3B4}\u{3B5}\u{3AF}\u{3B3}\u{3BC}\u{3B1}`,
    "transparent": `\u{3B4}\u{3B9}\u{3B1}\u{3C6}\u{3B1}\u{3BD}\u{3AD}\u{3C2}`,
    "twoDimensionalSlider": `\u{3A1}\u{3C5}\u{3B8}\u{3BC}\u{3B9}\u{3C3}\u{3C4}\u{3B9}\u{3BA}\u{3CC} 2D`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gP77B":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorPicker": `Color picker`,
    "twoDimensionalSlider": `2D slider`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorSwatch": `color swatch`,
    "transparent": `transparent`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eRyiG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `Selector de color`,
    "colorSwatch": `muestra de color`,
    "transparent": `transparente`,
    "twoDimensionalSlider": `Regulador 2D`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cfitH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `V\xe4rvivalija`,
    "colorSwatch": `v\xe4rvin\xe4idis`,
    "transparent": `l\xe4bipaistev`,
    "twoDimensionalSlider": `2D-liugur`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3xt5W":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `V\xe4rimuokkain`,
    "colorSwatch": `v\xe4rimalli`,
    "transparent": `l\xe4pin\xe4kyv\xe4`,
    "twoDimensionalSlider": `2D-liukus\xe4\xe4din`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6Reis":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}\xa0: ${args.value}`,
    "colorPicker": `S\xe9lecteur de couleurs`,
    "colorSwatch": `\xc9chantillon de couleurs`,
    "transparent": `Transparent`,
    "twoDimensionalSlider": `Curseur\xa02D`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"14dtb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `\u{5D1}\u{5D5}\u{5D7}\u{5E8} \u{5D4}\u{5E6}\u{5D1}\u{5E2}\u{5D9}\u{5DD}`,
    "colorSwatch": `\u{5D3}\u{5D5}\u{5D2}\u{5DE}\u{5D9}\u{5EA} \u{5E6}\u{5D1}\u{5E2}`,
    "transparent": `\u{5E9}\u{5E7}\u{5D5}\u{5E3}`,
    "twoDimensionalSlider": `\u{5DE}\u{5D7}\u{5D5}\u{5D5}\u{5DF} \u{5D3}\u{5D5} \u{5DE}\u{5D9}\u{5DE}\u{5D3}\u{5D9}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6xSuM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `Odabir boje`,
    "colorSwatch": `uzorak boje`,
    "transparent": `transparentno`,
    "twoDimensionalSlider": `2D kliza\u{10D}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fMOVQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `Sz\xednv\xe1laszt\xf3`,
    "colorSwatch": `sz\xednt\xe1r`,
    "transparent": `\xe1tl\xe1tsz\xf3`,
    "twoDimensionalSlider": `2D-cs\xfaszka`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fWN5E":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `Selettore colore`,
    "colorSwatch": `campione di colore`,
    "transparent": `trasparente`,
    "twoDimensionalSlider": `Cursore 2D`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bCfh0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}\u{3001}${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name} : ${args.value}`,
    "colorPicker": `\u{30AB}\u{30E9}\u{30FC}\u{30D4}\u{30C3}\u{30AB}\u{30FC}`,
    "colorSwatch": `\u{30AB}\u{30E9}\u{30FC}\u{30B9}\u{30A6}\u{30A9}\u{30C3}\u{30C1}`,
    "transparent": `\u{900F}\u{660E}`,
    "twoDimensionalSlider": `2D \u{30B9}\u{30E9}\u{30A4}\u{30C0}\u{30FC}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kMWAm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `\u{C0C9}\u{C0C1} \u{D53C}\u{CEE4}`,
    "colorSwatch": `\u{C0C9}\u{C0C1} \u{ACAC}\u{BCF8}`,
    "transparent": `\u{D22C}\u{BA85}\u{B3C4}`,
    "twoDimensionalSlider": `2D \u{C2AC}\u{B77C}\u{C774}\u{B354}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aYI5S":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `Spalv\u{173} parinkiklis`,
    "colorSwatch": `spalv\u{173} pavyzdys`,
    "transparent": `skaidrus`,
    "twoDimensionalSlider": `2D slankiklis`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iykzo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `Kr\u{101}su atlas\u{12B}t\u{101}js`,
    "colorSwatch": `kr\u{101}su paraugs`,
    "transparent": `caursp\u{12B}d\u{12B}gs`,
    "twoDimensionalSlider": `2D sl\u{12B}dnis`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k18HW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `Fargevelger`,
    "colorSwatch": `fargekart`,
    "transparent": `gjennomsiktig`,
    "twoDimensionalSlider": `2D-glidebryter`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hyE9R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `Kleurkiezer`,
    "colorSwatch": `kleurstaal`,
    "transparent": `transparant`,
    "twoDimensionalSlider": `2D-schuifregelaar`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5hl0Q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `Pr\xf3bnik kolor\xf3w`,
    "colorSwatch": `pr\xf3bka koloru`,
    "transparent": `przezroczysty`,
    "twoDimensionalSlider": `Suwak 2D`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ix8Wz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `Seletor de cores`,
    "colorSwatch": `amostra de cores`,
    "transparent": `transparente`,
    "twoDimensionalSlider": `Controle deslizante 2D`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7QfPT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `Seletor de cores`,
    "colorSwatch": `amostra de cor`,
    "transparent": `transparente`,
    "twoDimensionalSlider": `Controle deslizante 2D`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hZLc4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `Selector de culori`,
    "colorSwatch": `specimen de culoare`,
    "transparent": `transparent`,
    "twoDimensionalSlider": `Glisor 2D`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lfKm7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `\u{41F}\u{430}\u{43B}\u{438}\u{442}\u{440}\u{430} \u{446}\u{432}\u{435}\u{442}\u{43E}\u{432}`,
    "colorSwatch": `\u{446}\u{432}\u{435}\u{442}\u{43E}\u{432}\u{43E}\u{439} \u{43E}\u{431}\u{440}\u{430}\u{437}\u{435}\u{446}`,
    "transparent": `\u{43F}\u{440}\u{43E}\u{437}\u{440}\u{430}\u{447}\u{43D}\u{44B}\u{439}`,
    "twoDimensionalSlider": `\u{41F}\u{43E}\u{43B}\u{437}\u{443}\u{43D}\u{43E}\u{43A} 2D`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"anKzQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `V\xfdber farieb`,
    "colorSwatch": `vzorkovn\xedk farieb`,
    "transparent": `transparentn\xfd`,
    "twoDimensionalSlider": `2D jazdec`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jWmgk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `Izbirnik barv`,
    "colorSwatch": `barvna paleta`,
    "transparent": `prozorno`,
    "twoDimensionalSlider": `2D drsnik`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1vakH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `Bira\u{10D} boja`,
    "colorSwatch": `Uzorak boje`,
    "transparent": `providno`,
    "twoDimensionalSlider": `2D kliza\u{10D}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iEudU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `F\xe4rgv\xe4ljaren`,
    "colorSwatch": `f\xe4rgruta`,
    "transparent": `genomskinlig`,
    "twoDimensionalSlider": `2D-reglage`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dtbMV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `Renk Se\xe7ici`,
    "colorSwatch": `renk \xf6rne\u{11F}i`,
    "transparent": `saydam`,
    "twoDimensionalSlider": `2D s\xfcrg\xfc`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1BrU7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}, ${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}: ${args.value}`,
    "colorPicker": `\u{41F}\u{430}\u{43B}\u{456}\u{442}\u{440}\u{430} \u{43A}\u{43E}\u{43B}\u{44C}\u{43E}\u{440}\u{456}\u{432}`,
    "colorSwatch": `\u{437}\u{440}\u{430}\u{437}\u{43E}\u{43A} \u{43A}\u{43E}\u{43B}\u{44C}\u{43E}\u{440}\u{443}`,
    "transparent": `\u{43F}\u{440}\u{43E}\u{437}\u{43E}\u{440}\u{438}\u{439}`,
    "twoDimensionalSlider": `\u{41F}\u{43E}\u{432}\u{437}\u{443}\u{43D}\u{43E}\u{43A} 2D`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1Ar6O":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}\u{3001}${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}\u{FF1A}${args.value}`,
    "colorPicker": `\u{62FE}\u{8272}\u{5668}`,
    "colorSwatch": `\u{989C}\u{8272}\u{8272}\u{677F}`,
    "transparent": `\u{900F}\u{660E}`,
    "twoDimensionalSlider": `2D \u{6ED1}\u{5757}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"b9ErY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorInputLabel": (args)=>`${args.label}\u{FF0C}${args.channelLabel}`,
    "colorNameAndValue": (args)=>`${args.name}\u{FF1A}${args.value}`,
    "colorPicker": `\u{6AA2}\u{8272}\u{5668}`,
    "colorSwatch": `\u{8272}\u{7968}`,
    "transparent": `\u{900F}\u{660E}`,
    "twoDimensionalSlider": `2D \u{6ED1}\u{687F}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

