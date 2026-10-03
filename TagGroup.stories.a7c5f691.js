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
})({"1icp9":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a tag component.
 *
 * @param props - Props to be applied to the tag.
 * @param state - State for the tag group, as returned by `useListState`.
 * @param ref - A ref to a DOM element for the tag.
 */ parcelHelpers.export(exports, "useTag", ()=>useTag);
var _filterDOMProps = require("../utils/filterDOMProps");
var _useTagGroup = require("./useTagGroup");
var _indexJs = require("../../intl/tag/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mergeProps = require("../utils/mergeProps");
var _useDescription = require("../utils/useDescription");
var _useFocusable = require("../interactions/useFocusable");
var _useGridListItem = require("../gridlist/useGridListItem");
var _useId = require("../utils/useId");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _useKeyboard = require("../interactions/useKeyboard");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
var _openLink = require("../utils/openLink");
function useTag(props, state, ref) {
    let { item } = props;
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/tag');
    let buttonId = (0, _useId.useId)();
    let { onRemove } = (0, _useTagGroup.hookData).get(state) || {};
    let { rowProps, gridCellProps, ...states } = (0, _useGridListItem.useGridListItem)({
        node: item
    }, state, ref);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { descriptionProps: _, ...stateWithoutDescription } = states;
    let isDisabled = state.disabledKeys.has(item.key) || item.props.isDisabled;
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        isDisabled,
        shortcuts: {
            Delete: ()=>{
                if (state.selectionManager.isSelected(item.key)) onRemove?.(new Set(state.selectionManager.selectedKeys));
                else onRemove?.(new Set([
                    item.key
                ]));
            },
            Backspace: ()=>{
                if (state.selectionManager.isSelected(item.key)) onRemove?.(new Set(state.selectionManager.selectedKeys));
                else onRemove?.(new Set([
                    item.key
                ]));
            }
        },
        allowRepeats: true
    });
    let modality = (0, _useFocusVisible.useInteractionModality)();
    if (modality === 'virtual' && typeof window !== 'undefined' && 'ontouchstart' in window) modality = 'pointer';
    let description = onRemove && (modality === 'keyboard' || modality === 'virtual') ? stringFormatter.format('removeDescription') : '';
    let descProps = (0, _useDescription.useDescription)(description);
    let isItemFocused = item.key === state.selectionManager.focusedKey;
    let isFocused = state.selectionManager.focusedKey != null;
    let tabIndex = -1;
    if (!isDisabled && (isItemFocused || !isFocused)) tabIndex = 0;
    let domProps = (0, _filterDOMProps.filterDOMProps)(item.props);
    let linkProps = (0, _openLink.useSyntheticLinkProps)(item.props);
    let { focusableProps } = (0, _useFocusable.useFocusable)({
        ...item.props,
        isDisabled
    }, ref);
    return {
        removeButtonProps: {
            'aria-label': stringFormatter.format('removeButtonLabel'),
            'aria-labelledby': `${buttonId} ${rowProps.id}`,
            isDisabled,
            id: buttonId,
            onPress: ()=>onRemove ? onRemove(new Set([
                    item.key
                ])) : null
        },
        rowProps: (0, _mergeProps.mergeProps)(focusableProps, rowProps, domProps, linkProps, {
            tabIndex,
            ...onRemove ? keyboardProps : {},
            'aria-describedby': descProps['aria-describedby']
        }),
        gridCellProps: (0, _mergeProps.mergeProps)(gridCellProps, {
            'aria-errormessage': props['aria-errormessage'],
            'aria-label': props['aria-label']
        }),
        ...stateWithoutDescription,
        allowsRemoving: !!onRemove
    };
}

},{"../utils/filterDOMProps":"h4XHF","./useTagGroup":"k8R2e","../../intl/tag/index.js":"1qwYh","../utils/mergeProps":"jycxS","../utils/useDescription":"1bivM","../interactions/useFocusable":"6IFKj","../gridlist/useGridListItem":"kgaar","../utils/useId":"fQAcb","../interactions/useFocusVisible":"aBfUW","../interactions/useKeyboard":"aHm7i","../i18n/useLocalizedStringFormatter":"8lll3","../utils/openLink":"gH3wl","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k8R2e":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "hookData", ()=>hookData);
/**
 * Provides the behavior and accessibility implementation for a tag group component. A tag group is
 * a focusable list of labels, categories, keywords, filters, or other items, with support for
 * keyboard navigation, selection, and removal.
 *
 * @param props - Props to be applied to the tag group.
 * @param state - State for the tag group, as returned by `useListState`.
 * @param ref - A ref to a DOM element for the tag group.
 */ parcelHelpers.export(exports, "useTagGroup", ()=>useTagGroup);
var _useGridList = require("../gridlist/useGridList");
var _filterDOMProps = require("../utils/filterDOMProps");
var _listKeyboardDelegate = require("../selection/ListKeyboardDelegate");
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _useField = require("../label/useField");
var _useFocusWithin = require("../interactions/useFocusWithin");
var _i18Nprovider = require("../i18n/I18nProvider");
const hookData = new WeakMap();
function useTagGroup(props, state, ref) {
    let { direction } = (0, _i18Nprovider.useLocale)();
    let keyboardDelegate = props.keyboardDelegate || new (0, _listKeyboardDelegate.ListKeyboardDelegate)({
        collection: state.collection,
        ref,
        orientation: 'horizontal',
        direction,
        disabledKeys: state.disabledKeys,
        disabledBehavior: state.selectionManager.disabledBehavior
    });
    let { labelProps, fieldProps, descriptionProps, errorMessageProps } = (0, _useField.useField)({
        ...props,
        labelElementType: 'span'
    });
    let { gridProps } = (0, _useGridList.useGridList)({
        ...props,
        ...fieldProps,
        keyboardDelegate,
        shouldFocusWrap: true,
        linkBehavior: 'override',
        keyboardNavigationBehavior: 'tab'
    }, state, ref);
    let [isFocusWithin, setFocusWithin] = (0, _react.useState)(false);
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)({
        onFocusWithinChange: setFocusWithin
    });
    let domProps = (0, _filterDOMProps.filterDOMProps)(props);
    // If the last tag is removed, focus the container.
    let prevCount = (0, _react.useRef)(state.collection.size);
    (0, _react.useEffect)(()=>{
        if (ref.current && prevCount.current > 0 && state.collection.size === 0 && isFocusWithin) ref.current.focus();
        prevCount.current = state.collection.size;
    }, [
        state.collection.size,
        isFocusWithin,
        ref
    ]);
    hookData.set(state, {
        onRemove: props.onRemove
    });
    return {
        gridProps: (0, _mergeProps.mergeProps)(gridProps, domProps, {
            role: state.collection.size ? 'grid' : 'group',
            'aria-atomic': false,
            'aria-relevant': 'additions',
            'aria-live': isFocusWithin ? 'polite' : 'off',
            ...focusWithinProps,
            ...fieldProps
        }),
        labelProps,
        descriptionProps,
        errorMessageProps
    };
}

},{"../gridlist/useGridList":"5FV81","../utils/filterDOMProps":"h4XHF","../selection/ListKeyboardDelegate":"hxzwH","../utils/mergeProps":"jycxS","react":"gOP0N","../label/useField":"5Oeu9","../interactions/useFocusWithin":"bkSQo","../i18n/I18nProvider":"czGuc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1qwYh":[function(require,module,exports,__globalThis) {
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

},{"./ar-AE.js":"eSFwj","./bg-BG.js":"fpixu","./cs-CZ.js":"lrRYy","./da-DK.js":"iXhJM","./de-DE.js":"2wlvU","./el-GR.js":"hghKu","./en-US.js":"1GBWX","./es-ES.js":"e1cnc","./et-EE.js":"cA8Sj","./fi-FI.js":"cxJya","./fr-FR.js":"3JgLs","./he-IL.js":"65xSN","./hr-HR.js":"4rRvh","./hu-HU.js":"8MdSC","./it-IT.js":"2ziSJ","./ja-JP.js":"iQyOd","./ko-KR.js":"5g38u","./lt-LT.js":"kHCCp","./lv-LV.js":"gngKp","./nb-NO.js":"1oJlQ","./nl-NL.js":"i4Sy4","./pl-PL.js":"gzjWn","./pt-BR.js":"lD9e1","./pt-PT.js":"2unhx","./ro-RO.js":"56LLV","./ru-RU.js":"l7zjI","./sk-SK.js":"giZLM","./sl-SI.js":"5Xr3u","./sr-SP.js":"1ASux","./sv-SE.js":"fbbtx","./tr-TR.js":"0293S","./uk-UA.js":"92i4w","./zh-CN.js":"fXJYA","./zh-TW.js":"eYDQs","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eSFwj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{625}\u{632}\u{627}\u{644}\u{629}`,
    "removeDescription": `\u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} \u{645}\u{641}\u{62A}\u{627}\u{62D} DELETE \u{644}\u{625}\u{632}\u{627}\u{644}\u{629} \u{639}\u{644}\u{627}\u{645}\u{629}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fpixu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{41F}\u{440}\u{435}\u{43C}\u{430}\u{445}\u{432}\u{430}\u{43D}\u{435}`,
    "removeDescription": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Delete, \u{437}\u{430} \u{434}\u{430} \u{43F}\u{440}\u{435}\u{43C}\u{430}\u{445}\u{43D}\u{435}\u{442}\u{435} \u{43C}\u{430}\u{440}\u{43A}\u{435}\u{440}\u{430}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lrRYy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Odebrat`,
    "removeDescription": `Stisknut\xedm kl\xe1vesy Delete odeberete zna\u{10D}ku.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iXhJM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Fjern`,
    "removeDescription": `Tryk p\xe5 Slet for at fjerne tag.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2wlvU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Entfernen`,
    "removeDescription": `Auf \u{201E}L\xf6schen\u{201C} dr\xfccken, um das Tag zu entfernen.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hghKu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{39A}\u{3B1}\u{3C4}\u{3AC}\u{3C1}\u{3B3}\u{3B7}\u{3C3}\u{3B7}`,
    "removeDescription": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{394}\u{3B9}\u{3B1}\u{3B3}\u{3C1}\u{3B1}\u{3C6}\u{3AE} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BA}\u{3B1}\u{3C4}\u{3B1}\u{3C1}\u{3B3}\u{3AE}\u{3C3}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3B7}\u{3BD} \u{3B5}\u{3C4}\u{3B9}\u{3BA}\u{3AD}\u{3C4}\u{3B1}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1GBWX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeDescription": `Press Delete to remove tag.`,
    "removeButtonLabel": `Remove`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"e1cnc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Quitar`,
    "removeDescription": `Pulse Eliminar para quitar la etiqueta.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cA8Sj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Eemalda`,
    "removeDescription": `Sildi eemaldamiseks vajutage kustutusklahvi Delete.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cxJya":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Poista`,
    "removeDescription": `Poista tunniste painamalla Poista-painiketta.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3JgLs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Supprimer`,
    "removeDescription": `Appuyez sur Supprimer pour supprimer l\u{2019}\xe9tiquette.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"65xSN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{5D4}\u{5E1}\u{5E8}`,
    "removeDescription": `\u{5DC}\u{5D7}\u{5E5} \u{5E2}\u{5DC} \u{5DE}\u{5D7}\u{5E7} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5E1}\u{5D9}\u{5E8} \u{5EA}\u{5D2}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4rRvh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Ukloni`,
    "removeDescription": `Pritisnite Delete za uklanjanje oznake.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8MdSC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Elt\xe1vol\xedt\xe1s`,
    "removeDescription": `Nyomja meg a Delete billenty\u{171}t a c\xedmke elt\xe1vol\xedt\xe1s\xe1hoz.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2ziSJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Rimuovi`,
    "removeDescription": `Premi Elimina per rimuovere il tag.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iQyOd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{524A}\u{9664}`,
    "removeDescription": `\u{30BF}\u{30B0}\u{3092}\u{524A}\u{9664}\u{3059}\u{308B}\u{306B}\u{306F}\u{3001}Delete \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{307E}\u{3059}\u{3002}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5g38u":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{C81C}\u{AC70}`,
    "removeDescription": `\u{D0DC}\u{ADF8}\u{B97C} \u{C81C}\u{AC70}\u{D558}\u{B824}\u{BA74} Delete \u{D0A4}\u{B97C} \u{B204}\u{B974}\u{C2ED}\u{C2DC}\u{C624}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kHCCp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Pa\u{161}alinti`,
    "removeDescription": `Nor\u{117}dami pa\u{161}alinti \u{17E}ym\u{105}, paspauskite \u{201E}Delete\u{201C} klavi\u{161}\u{105}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gngKp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `No\u{146}emt`,
    "removeDescription": `Nospiediet Delete [Dz\u{113}st], lai no\u{146}emtu tagu.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1oJlQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Fjern`,
    "removeDescription": `Trykk p\xe5 Slett for \xe5 fjerne taggen.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"i4Sy4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Verwijderen`,
    "removeDescription": `Druk op Verwijderen om de tag te verwijderen.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gzjWn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Usu\u{144}`,
    "removeDescription": `Naci\u{15B}nij Usu\u{144}, aby usun\u{105}\u{107} znacznik.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lD9e1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Remover`,
    "removeDescription": `Pressione Delete para remover a tag.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2unhx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Eliminar`,
    "removeDescription": `Prima Delete para eliminar a tag.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"56LLV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\xcendep\u{103}rta\u{163}i`,
    "removeDescription": `Ap\u{103}sa\u{21B}i pe Delete (\u{218}tergere) pentru a elimina eticheta.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"l7zjI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{423}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{44C}`,
    "removeDescription": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} DELETE, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{443}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{44C} \u{442}\u{435}\u{433}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"giZLM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Odstr\xe1ni\u{165}`,
    "removeDescription": `Ak chcete odstr\xe1ni\u{165} zna\u{10D}ku, stla\u{10D}te kl\xe1ves Delete.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5Xr3u":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Odstrani`,
    "removeDescription": `Pritisnite Delete, da odstranite oznako.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1ASux":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Ukloni`,
    "removeDescription": `Pritisnite Obri\u{161}i da biste uklonili oznaku.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fbbtx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Ta bort`,
    "removeDescription": `Tryck p\xe5 Radera f\xf6r att ta bort taggen.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"0293S":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `Kald\u{131}r`,
    "removeDescription": `Etiketi kald\u{131}rmak i\xe7in Sil tu\u{15F}una bas\u{131}n.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"92i4w":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{412}\u{438}\u{43B}\u{443}\u{447}\u{438}\u{442}\u{438}`,
    "removeDescription": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Delete, \u{449}\u{43E}\u{431} \u{432}\u{438}\u{43B}\u{443}\u{447}\u{438}\u{442}\u{438} \u{442}\u{435}\u{433}.`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fXJYA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{5220}\u{9664}`,
    "removeDescription": `\u{6309}\u{4E0B}\u{201C}\u{5220}\u{9664}\u{201D}\u{4EE5}\u{5220}\u{9664}\u{6807}\u{8BB0}\u{3002}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eYDQs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "removeButtonLabel": `\u{79FB}\u{9664}`,
    "removeDescription": `\u{6309} Delete \u{9375}\u{4EE5}\u{79FB}\u{9664}\u{6A19}\u{8A18}\u{3002}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

