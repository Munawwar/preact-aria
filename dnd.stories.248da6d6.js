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
})({"i75Up":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ChevronDownMedium);
var _jsxRuntime = require("preact/jsx-runtime");
var _chevronDownMediumJs = require("@adobe/react-spectrum-ui/dist/ChevronDownMedium.js");
var _uiiconTsx = require("../../../@adobe/react-spectrum/src/icon/UIIcon.tsx");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function ChevronDownMedium(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _uiiconTsx.UIIcon), {
        ...props,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _chevronDownMediumJs.ChevronDownMedium), {})
    });
}

},{"preact/jsx-runtime":"b2Fbn","@adobe/react-spectrum-ui/dist/ChevronDownMedium.js":"kTyoY","../../../@adobe/react-spectrum/src/icon/UIIcon.tsx":"96LzK","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kTyoY":[function(require,module,exports,__globalThis) {
/**
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
**/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChevronDownMedium = ChevronDownMedium;
var _react = _interopRequireDefault(require("1554875e77917408"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function ChevronDownMedium(_ref) {
    var _ref$scale = _ref.scale, scale = _ref$scale === void 0 ? 'M' : _ref$scale, props = _objectWithoutProperties(_ref, [
        "scale"
    ]);
    return _react["default"].createElement("svg", _extends({}, props, props), scale === 'L' && _react["default"].createElement("path", {
        d: "M11.99 1.51a1 1 0 0 0-1.707-.707L6 5.086 1.717.803A1 1 0 1 0 .303 2.217l4.99 4.99a1 1 0 0 0 1.414 0l4.99-4.99a.997.997 0 0 0 .293-.707z"
    }), scale === 'M' && _react["default"].createElement("path", {
        d: "M9.99 1.01A1 1 0 0 0 8.283.303L5 3.586 1.717.303A1 1 0 1 0 .303 1.717l3.99 3.98a1 1 0 0 0 1.414 0l3.99-3.98a.997.997 0 0 0 .293-.707z"
    }));
}
ChevronDownMedium.displayName = 'ChevronDownMedium';

},{"1554875e77917408":"gOP0N"}],"7eU6f":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Menu", ()=>Menu);
parcelHelpers.export(exports, "TrayHeaderWrapper", ()=>TrayHeaderWrapper);
var _jsxRuntime = require("preact/jsx-runtime");
var _actionButtonTsx = require("../button/ActionButton.tsx");
var _useMenuTs = require("../../../../../../../../vendor/react-aria/exports/useMenu.ts");
var _arrowDownSmallTsx = require("../../../../@spectrum-icons/ui/src/ArrowDownSmall.tsx");
var _arrowDownSmallTsxDefault = parcelHelpers.interopDefault(_arrowDownSmallTsx);
var _classNamesTs = require("../utils/classNames.ts");
var _focusScopeTs = require("../../../../../../../../vendor/react-aria/exports/FocusScope.ts");
var _indexJs = require("../../intl/menu/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _contextTs = require("./context.ts");
var _menuItemTsx = require("./MenuItem.tsx");
var _menuSectionTsx = require("./MenuSection.tsx");
var _mergePropsTs = require("../../../../../../../../vendor/react-aria/exports/mergeProps.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _varsCss = require("../../../spectrum-css-temp/components/menu/vars.css");
var _varsCssDefault = parcelHelpers.interopDefault(_varsCss);
var _useTreeStateTs = require("../../../../../../../../vendor/react-stately/exports/useTreeState.ts");
var _useDOMRefTs = require("../utils/useDOMRef.ts");
var _useIsMobileDeviceTs = require("../utils/useIsMobileDevice.ts");
var _useLayoutEffectTs = require("../../../../../../../../vendor/react-aria/exports/private/utils/useLayoutEffect.ts");
var _i18NproviderTs = require("../../../../../../../../vendor/react-aria/exports/I18nProvider.ts");
var _useLocalizedStringFormatterTs = require("../../../../../../../../vendor/react-aria/exports/useLocalizedStringFormatter.ts");
var _useIdTs = require("../../../../../../../../vendor/react-aria/exports/private/utils/useId.ts");
var _stylePropsTs = require("../utils/styleProps.ts");
var _useSyncRefTs = require("../../../../../../../../vendor/react-aria/exports/private/utils/useSyncRef.ts");
const Menu = /*#__PURE__*/ (0, _reactDefault.default).forwardRef(function Menu(props, ref) {
    let isSubmenu = true;
    let contextProps = (0, _react.useContext)((0, _contextTs.MenuContext));
    let parentMenuContext = (0, _contextTs.useMenuStateContext)();
    let { rootMenuTriggerState, state: parentMenuTreeState } = parentMenuContext || {
        rootMenuTriggerState: contextProps.state
    };
    if (!parentMenuContext) isSubmenu = false;
    let completeProps = {
        ...(0, _mergePropsTs.mergeProps)(contextProps, props)
    };
    let domRef = (0, _useDOMRefTs.useDOMRef)(ref);
    let [popoverContainer, setPopoverContainer] = (0, _react.useState)(null);
    let trayContainerRef = (0, _react.useRef)(null);
    let state = (0, _useTreeStateTs.useTreeState)(completeProps);
    let submenuRef = (0, _react.useRef)(null);
    let { menuProps } = (0, _useMenuTs.useMenu)(completeProps, state, domRef);
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(completeProps);
    (0, _useSyncRefTs.useSyncRef)(contextProps, domRef);
    let [leftOffset, setLeftOffset] = (0, _react.useState)({
        left: 0
    });
    let prevPopoverContainer = (0, _react.useRef)(null);
    (0, _useLayoutEffectTs.useLayoutEffect)(()=>{
        if (popoverContainer && prevPopoverContainer.current !== popoverContainer && leftOffset.left === 0) {
            prevPopoverContainer.current = popoverContainer;
            let { left } = popoverContainer.getBoundingClientRect();
            setLeftOffset({
                left: -1 * left
            });
        }
    }, [
        leftOffset,
        popoverContainer
    ]);
    let menuLevel = contextProps.submenuLevel ?? -1;
    let nextMenuLevelKey = rootMenuTriggerState?.expandedKeysStack[menuLevel + 1];
    let hasOpenSubmenu = false;
    if (nextMenuLevelKey != null) {
        let nextMenuLevel = state.collection.getItem(nextMenuLevelKey);
        hasOpenSubmenu = nextMenuLevel != null;
    }
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _contextTs.MenuStateContext).Provider, {
        value: {
            popoverContainer,
            trayContainerRef,
            menu: domRef,
            submenu: submenuRef,
            rootMenuTriggerState,
            state
        },
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                style: {
                    height: hasOpenSubmenu ? '100%' : undefined
                },
                ref: trayContainerRef
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _focusScopeTs.FocusScope), {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(TrayHeaderWrapper, {
                        onBackButtonPress: contextProps.onBackButtonPress,
                        hasOpenSubmenu: hasOpenSubmenu,
                        isSubmenu: isSubmenu,
                        parentMenuTreeState: parentMenuTreeState,
                        rootMenuTriggerState: rootMenuTriggerState,
                        menuRef: domRef,
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                            ...menuProps,
                            style: (0, _mergePropsTs.mergeProps)(styleProps.style, menuProps.style),
                            ref: domRef,
                            className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Menu', styleProps.className),
                            children: [
                                ...state.collection
                            ].map((item)=>{
                                if (item.type === 'section') return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuSectionTsx.MenuSection), {
                                    item: item,
                                    state: state
                                }, item.key);
                                let menuItem = /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuItemTsx.MenuItem), {
                                    item: item,
                                    state: state
                                }, item.key);
                                if (item.wrapper) menuItem = item.wrapper(menuItem);
                                return menuItem;
                            })
                        })
                    }),
                    rootMenuTriggerState?.isOpen && /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        ref: setPopoverContainer,
                        style: {
                            width: '100vw',
                            position: 'absolute',
                            top: -5,
                            ...leftOffset
                        }
                    })
                ]
            })
        ]
    });
});
function TrayHeaderWrapper(props) {
    let { children, isSubmenu, hasOpenSubmenu, parentMenuTreeState, rootMenuTriggerState, onBackButtonPress, wrapperKeyDown, menuRef } = props;
    let stringFormatter = (0, _useLocalizedStringFormatterTs.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-spectrum/menu');
    let lastKey = rootMenuTriggerState?.expandedKeysStack.slice(-1)[0];
    let backButtonText = '';
    if (lastKey != null) backButtonText = parentMenuTreeState?.collection.getItem(lastKey)?.textValue ?? '';
    let backButtonLabel = stringFormatter.format('backButton', {
        prevMenuButton: backButtonText ?? ''
    });
    let headingId = (0, _useIdTs.useSlotId)();
    let isMobile = (0, _useIsMobileDeviceTs.useIsMobileDevice)();
    let { direction } = (0, _i18NproviderTs.useLocale)();
    let [traySubmenuAnimation, setTraySubmenuAnimation] = (0, _react.useState)('');
    (0, _useLayoutEffectTs.useLayoutEffect)(()=>{
        if (!hasOpenSubmenu) setTraySubmenuAnimation('spectrum-TraySubmenu-enter');
    }, [
        hasOpenSubmenu,
        isMobile
    ]);
    let timeoutRef = (0, _react.useRef)(null);
    let handleBackButtonPress = ()=>{
        setTraySubmenuAnimation('spectrum-TraySubmenu-exit');
        timeoutRef.current = setTimeout(()=>{
            onBackButtonPress?.();
        }, 220); // Matches transition duration
    };
    (0, _react.useEffect)(()=>{
        return ()=>{
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);
    // When opening submenu in tray, focus the first item in the submenu after animation completes
    // This fixes an issue with iOS VO where the closed submenu was getting focus
    let focusTimeoutRef = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        if (isMobile && isSubmenu && !hasOpenSubmenu && traySubmenuAnimation === 'spectrum-TraySubmenu-enter') focusTimeoutRef.current = setTimeout(()=>{
            let firstItem = menuRef?.current?.querySelector('[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]');
            firstItem?.focus();
        }, 220);
        return ()=>{
            if (focusTimeoutRef.current) clearTimeout(focusTimeoutRef.current);
        };
    }, [
        hasOpenSubmenu,
        isMobile,
        isSubmenu,
        menuRef,
        traySubmenuAnimation
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
            role: headingId ? 'dialog' : undefined,
            "aria-labelledby": headingId,
            "aria-hidden": isMobile && hasOpenSubmenu,
            "data-testid": "menu-wrapper",
            className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Menu-wrapper', {
                'spectrum-Menu-wrapper--isMobile': isMobile,
                'is-expanded': hasOpenSubmenu,
                [traySubmenuAnimation]: isMobile
            }),
            children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                role: "presentation",
                className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Submenu-wrapper', {
                    'spectrum-Submenu-wrapper--isMobile': isMobile
                }),
                onKeyDown: wrapperKeyDown,
                children: [
                    isMobile && isSubmenu && !hasOpenSubmenu && /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Submenu-headingWrapper'),
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _actionButtonTsx.ActionButton), {
                                "aria-label": backButtonLabel,
                                isQuiet: true,
                                onPress: handleBackButtonPress,
                                children: direction === 'rtl' ? /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _arrowDownSmallTsxDefault.default), {
                                    UNSAFE_style: {
                                        rotate: '270deg'
                                    }
                                }) : /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _arrowDownSmallTsxDefault.default), {
                                    UNSAFE_style: {
                                        rotate: '90deg'
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("h1", {
                                id: headingId,
                                className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Submenu-heading'),
                                children: backButtonText
                            })
                        ]
                    }),
                    children
                ]
            })
        })
    });
}

},{"preact/jsx-runtime":"b2Fbn","../button/ActionButton.tsx":"cR4gQ","../../../../../../../../vendor/react-aria/exports/useMenu.ts":"9g4G2","../../../../@spectrum-icons/ui/src/ArrowDownSmall.tsx":"f3OyB","../utils/classNames.ts":"dsWbb","../../../../../../../../vendor/react-aria/exports/FocusScope.ts":"E8d3D","../../intl/menu/index.js":"lokhC","./context.ts":"fnRvl","./MenuItem.tsx":"gA6Rz","./MenuSection.tsx":"llDbM","../../../../../../../../vendor/react-aria/exports/mergeProps.ts":"jycxS","react":"gOP0N","../../../spectrum-css-temp/components/menu/vars.css":"gr6L4","../../../../../../../../vendor/react-stately/exports/useTreeState.ts":"7ofl1","../utils/useDOMRef.ts":"ltu01","../utils/useIsMobileDevice.ts":"31MG2","../../../../../../../../vendor/react-aria/exports/private/utils/useLayoutEffect.ts":"h7M6K","../../../../../../../../vendor/react-aria/exports/I18nProvider.ts":"czGuc","../../../../../../../../vendor/react-aria/exports/useLocalizedStringFormatter.ts":"8lll3","../../../../../../../../vendor/react-aria/exports/private/utils/useId.ts":"fQAcb","../utils/styleProps.ts":"7B0Vi","../../../../../../../../vendor/react-aria/exports/private/utils/useSyncRef.ts":"8a0bK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"f3OyB":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ArrowDownSmall);
var _jsxRuntime = require("preact/jsx-runtime");
var _arrowDownSmallJs = require("@adobe/react-spectrum-ui/dist/ArrowDownSmall.js");
var _uiiconTsx = require("../../../@adobe/react-spectrum/src/icon/UIIcon.tsx");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function ArrowDownSmall(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _uiiconTsx.UIIcon), {
        ...props,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _arrowDownSmallJs.ArrowDownSmall), {})
    });
}

},{"preact/jsx-runtime":"b2Fbn","@adobe/react-spectrum-ui/dist/ArrowDownSmall.js":"gBpUY","../../../@adobe/react-spectrum/src/icon/UIIcon.tsx":"96LzK","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gBpUY":[function(require,module,exports,__globalThis) {
/**
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
**/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArrowDownSmall = ArrowDownSmall;
var _react = _interopRequireDefault(require("7558496f13a5f116"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function ArrowDownSmall(_ref) {
    var _ref$scale = _ref.scale, scale = _ref$scale === void 0 ? 'M' : _ref$scale, props = _objectWithoutProperties(_ref, [
        "scale"
    ]);
    return _react["default"].createElement("svg", _extends({}, props, props), scale === 'L' && _react["default"].createElement("path", {
        d: "M9.99 7.01a1 1 0 0 0-1.707-.707L6 8.586V1.01a1 1 0 0 0-2 0v7.576L1.717 6.303A1 1 0 1 0 .303 7.717l3.99 3.98a1 1 0 0 0 1.414 0l3.99-3.98a.997.997 0 0 0 .293-.707z"
    }), scale === 'M' && _react["default"].createElement("path", {
        d: "M7.99 6.01a1 1 0 0 0-1.707-.707L5 6.586V1a1 1 0 0 0-2 0v5.586L1.717 5.303A1 1 0 1 0 .303 6.717l2.99 2.98a1 1 0 0 0 1.414 0l2.99-2.98a.997.997 0 0 0 .293-.707z"
    }));
}
ArrowDownSmall.displayName = 'ArrowDownSmall';

},{"7558496f13a5f116":"gOP0N"}],"lokhC":[function(require,module,exports,__globalThis) {
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

},{"./ar-AE.js":"2mWRI","./bg-BG.js":"jwOob","./cs-CZ.js":"ktv2v","./da-DK.js":"3qNlT","./de-DE.js":"e38m1","./el-GR.js":"1jKDh","./en-US.js":"iC5Z8","./es-ES.js":"bVIjj","./et-EE.js":"1oOI3","./fi-FI.js":"72xYI","./fr-FR.js":"97x7c","./he-IL.js":"2Xnfw","./hr-HR.js":"gPvim","./hu-HU.js":"eR5fZ","./it-IT.js":"a271y","./ja-JP.js":"4eKvZ","./ko-KR.js":"fEMzj","./lt-LT.js":"pYKif","./lv-LV.js":"cHUOE","./nb-NO.js":"a406Y","./nl-NL.js":"jGc1t","./pl-PL.js":"8lI8G","./pt-BR.js":"4ziFH","./pt-PT.js":"9OzlF","./ro-RO.js":"dkatA","./ru-RU.js":"krfIc","./sk-SK.js":"d9OeC","./sl-SI.js":"6OiVO","./sr-SP.js":"5wa2p","./sv-SE.js":"4N4AP","./tr-TR.js":"cE9E2","./uk-UA.js":"5LQ0I","./zh-CN.js":"6geFq","./zh-TW.js":"a6632","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2mWRI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`\u{627}\u{644}\u{631}\u{62C}\u{648}\u{639} \u{625}\u{644}\u{649} ${args.prevMenuButton}`,
    "moreActions": `\u{627}\u{644}\u{645}\u{632}\u{64A}\u{62F} \u{645}\u{646} \u{627}\u{644}\u{625}\u{62C}\u{631}\u{627}\u{621}\u{627}\u{62A}`,
    "unavailable": `\u{63A}\u{64A}\u{631} \u{645}\u{64F}\u{62A}\u{648}\u{641}\u{631}\u{60C} \u{642}\u{64F}\u{645} \u{628}\u{627}\u{644}\u{62A}\u{648}\u{633}\u{64A}\u{639} \u{644}\u{644}\u{62D}\u{635}\u{648}\u{644} \u{639}\u{644}\u{649} \u{627}\u{644}\u{62A}\u{641}\u{627}\u{635}\u{64A}\u{644}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jwOob":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`\u{41D}\u{430}\u{437}\u{430}\u{434} \u{43A}\u{44A}\u{43C} ${args.prevMenuButton}`,
    "moreActions": `\u{41F}\u{43E}\u{432}\u{435}\u{447}\u{435} \u{434}\u{435}\u{439}\u{441}\u{442}\u{432}\u{438}\u{44F}`,
    "unavailable": `\u{41D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{44A}\u{43F}\u{43D}\u{43E}, \u{440}\u{430}\u{437}\u{433}\u{44A}\u{43D}\u{435}\u{442}\u{435} \u{437}\u{430} \u{43F}\u{43E}\u{434}\u{440}\u{43E}\u{431}\u{43D}\u{43E}\u{441}\u{442}\u{438}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ktv2v":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`N\xe1vrat na ${args.prevMenuButton}`,
    "moreActions": `Dal\u{161}\xed akce`,
    "unavailable": `Nen\xed k dispozici, rozbalen\xedm zobraz\xedte podrobnosti`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3qNlT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Vend tilbage til ${args.prevMenuButton}`,
    "moreActions": `Flere handlinger`,
    "unavailable": `Ikke tilg\xe6ngelig, udvid for detaljer`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"e38m1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Zur\xfcck zu ${args.prevMenuButton}`,
    "moreActions": `Mehr Aktionen`,
    "unavailable": `Nicht verf\xfcgbar, f\xfcr Details erweitern`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1jKDh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3C3}\u{3C4}\u{3C1}\u{3BF}\u{3C6}\u{3AE} \u{3C3}\u{3C4}\u{3BF} ${args.prevMenuButton}`,
    "moreActions": `\u{3A0}\u{3B5}\u{3C1}\u{3B9}\u{3C3}\u{3C3}\u{3CC}\u{3C4}\u{3B5}\u{3C1}\u{3B5}\u{3C2} \u{3B5}\u{3BD}\u{3AD}\u{3C1}\u{3B3}\u{3B5}\u{3B9}\u{3B5}\u{3C2}`,
    "unavailable": `\u{39C}\u{3B7} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3BF}, \u{3B1}\u{3BD}\u{3AC}\u{3C0}\u{3C4}\u{3C5}\u{3BE}\u{3B7} \u{3B3}\u{3B9}\u{3B1} \u{3BB}\u{3B5}\u{3C0}\u{3C4}\u{3BF}\u{3BC}\u{3AD}\u{3C1}\u{3B5}\u{3B9}\u{3B5}\u{3C2}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iC5Z8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "moreActions": `More actions`,
    "unavailable": `Unavailable, expand for details`,
    "backButton": (args)=>`Return to ${args.prevMenuButton}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bVIjj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Volver a ${args.prevMenuButton}`,
    "moreActions": `M\xe1s acciones`,
    "unavailable": `No disponible, expandir para m\xe1s detalles`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1oOI3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Tagasi ${args.prevMenuButton}`,
    "moreActions": `Veel toiminguid`,
    "unavailable": `Pole k\xe4ttesaadav, \xfcksikasjade vaatamiseks laiendage`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"72xYI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Palaa kohtaan ${args.prevMenuButton}`,
    "moreActions": `Lis\xe4\xe4 toimintoja`,
    "unavailable": `Ei saatavilla, laajenna saadaksesi lis\xe4tietoja`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"97x7c":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Retour vers ${args.prevMenuButton}`,
    "moreActions": `Autres actions`,
    "unavailable": `Indisponible, d\xe9velopper pour plus de d\xe9tails`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2Xnfw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`\u{5D7}\u{5D6}\u{5D5}\u{5E8} \u{5D0}\u{5DC} ${args.prevMenuButton}`,
    "moreActions": `\u{5E4}\u{5E2}\u{5D5}\u{5DC}\u{5D5}\u{5EA} \u{5E0}\u{5D5}\u{5E1}\u{5E4}\u{5D5}\u{5EA}`,
    "unavailable": `\u{5DC}\u{5D0} \u{5D6}\u{5DE}\u{5D9}\u{5DF}, \u{5D4}\u{5E8}\u{5D7}\u{5D1} \u{5DC}\u{5E4}\u{5E8}\u{5D8}\u{5D9}\u{5DD}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gPvim":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Povratak na ${args.prevMenuButton}`,
    "moreActions": `Dodatne radnje`,
    "unavailable": `Nije dostupno, pro\u{161}iri za detalje`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eR5fZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Vissza ide: ${args.prevMenuButton}`,
    "moreActions": `Tov\xe1bbi lehet\u{151}s\xe9gek`,
    "unavailable": `Nem \xe9rhet\u{151} el, a r\xe9szletek\xe9rt bontsa ki`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"a271y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Torna a ${args.prevMenuButton}`,
    "moreActions": `Altre azioni`,
    "unavailable": `Non disponibile, espandi per i dettagli`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4eKvZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`${args.prevMenuButton} \u{306B}\u{623B}\u{308B}`,
    "moreActions": `\u{305D}\u{306E}\u{4ED6}\u{306E}\u{30A2}\u{30AF}\u{30B7}\u{30E7}\u{30F3}`,
    "unavailable": `\u{5229}\u{7528}\u{3067}\u{304D}\u{307E}\u{305B}\u{3093}\u{3002}\u{8A73}\u{3057}\u{304F}\u{306F}\u{3001}\u{5C55}\u{958B}\u{3057}\u{3066}\u{78BA}\u{8A8D}\u{3057}\u{3066}\u{304F}\u{3060}\u{3055}\u{3044}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fEMzj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`${args.prevMenuButton}(\u{C73C})\u{B85C} \u{B3CC}\u{C544}\u{AC00}\u{AE30}`,
    "moreActions": `\u{AE30}\u{D0C0} \u{C561}\u{C158}`,
    "unavailable": `\u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C5C6}\u{C74C}, \u{C790}\u{C138}\u{D788} \u{BCF4}\u{B824}\u{BA74} \u{D3BC}\u{CE58}\u{AE30}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"pYKif":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Gr\u{12F}\u{17E}ti \u{12F} ${args.prevMenuButton}`,
    "moreActions": `Daugiau veiksm\u{173}`,
    "unavailable": `Nepasiekiama, nor\u{117}dami gauti daugiau informacijos, i\u{161}skleiskite`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cHUOE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Atgriezties uz ${args.prevMenuButton}`,
    "moreActions": `Citas darb\u{12B}bas`,
    "unavailable": `Nav pieejams, izv\u{113}rsiet, lai skat\u{12B}tu s\u{12B}k\u{101}ku inform\u{101}ciju`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"a406Y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`G\xe5 tilbake til ${args.prevMenuButton}`,
    "moreActions": `Flere handlinger`,
    "unavailable": `Utilgjengelig, utvid for detaljer`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jGc1t":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Terug naar ${args.prevMenuButton}`,
    "moreActions": `Meer handelingen`,
    "unavailable": `Niet beschikbaar, uitvouwen voor meer informatie`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8lI8G":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Wr\xf3\u{107} do: ${args.prevMenuButton}`,
    "moreActions": `Wi\u{119}cej akcji`,
    "unavailable": `Niedost\u{119}pne, rozwi\u{144}, aby zobaczy\u{107} szczeg\xf3\u{142}y`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4ziFH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Retornar a ${args.prevMenuButton}`,
    "moreActions": `Mais a\xe7\xf5es`,
    "unavailable": `Indispon\xedvel. Expanda para ver os detalhes`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9OzlF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Voltar ao ${args.prevMenuButton}`,
    "moreActions": `Mais a\xe7\xf5es`,
    "unavailable": `Indispon\xedvel, expandir para mais detalhes`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dkatA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Reveni\u{21B}i la ${args.prevMenuButton}`,
    "moreActions": `Mai multe ac\u{21B}iuni`,
    "unavailable": `Indisponibil, extinde\u{21B}i pentru detalii`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"krfIc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`\u{412}\u{435}\u{440}\u{43D}\u{443}\u{442}\u{44C}\u{441}\u{44F} \u{43A} ${args.prevMenuButton}`,
    "moreActions": `\u{414}\u{43E}\u{43F}\u{43E}\u{43B}\u{43D}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{44B}\u{435} \u{434}\u{435}\u{439}\u{441}\u{442}\u{432}\u{438}\u{44F}`,
    "unavailable": `\u{41D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}, \u{440}\u{430}\u{437}\u{432}\u{435}\u{440}\u{43D}\u{438}\u{442}\u{435} \u{434}\u{43B}\u{44F} \u{43F}\u{43E}\u{434}\u{440}\u{43E}\u{431}\u{43D}\u{43E}\u{441}\u{442}\u{435}\u{439}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"d9OeC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Sp\xe4\u{165} na ${args.prevMenuButton}`,
    "moreActions": `\u{10E}al\u{161}ie akcie`,
    "unavailable": `Nedostupn\xe9, rozba\u{13E}te podrobnosti`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6OiVO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Nazaj na ${args.prevMenuButton}`,
    "moreActions": `Ve\u{10D} mo\u{17E}nosti`,
    "unavailable": `Ni na voljo, raz\u{161}irite za podrobnosti`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5wa2p":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Povratak na ${args.prevMenuButton}`,
    "moreActions": `Dodatne radnje`,
    "unavailable": `Nije dostupno, pro\u{161}irite za detalje`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4N4AP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`\xc5terg\xe5 till ${args.prevMenuButton}`,
    "moreActions": `Fler \xe5tg\xe4rder`,
    "unavailable": `Ej tillg\xe4nglig, expandera f\xf6r mer information`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cE9E2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`Geri d\xf6n: ${args.prevMenuButton}`,
    "moreActions": `Daha fazla eylem`,
    "unavailable": `Kullan\u{131}lam\u{131}yor, ayr\u{131}nt\u{131}lar\u{131} g\xf6rmek i\xe7in geni\u{15F}letin`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5LQ0I":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`\u{41F}\u{43E}\u{432}\u{435}\u{440}\u{43D}\u{443}\u{442}\u{438}\u{441}\u{44F} \u{434}\u{43E} ${args.prevMenuButton}`,
    "moreActions": `\u{411}\u{456}\u{43B}\u{44C}\u{448}\u{435} \u{434}\u{456}\u{439}`,
    "unavailable": `\u{41D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}, \u{440}\u{43E}\u{437}\u{433}\u{43E}\u{440}\u{43D}\u{456}\u{442}\u{44C} \u{434}\u{43B}\u{44F} \u{434}\u{43E}\u{43A}\u{43B}\u{430}\u{434}\u{43D}\u{456}\u{448}\u{43E}\u{457} \u{456}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{456}\u{457}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6geFq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`\u{8FD4}\u{56DE} ${args.prevMenuButton}`,
    "moreActions": `\u{66F4}\u{591A}\u{64CD}\u{4F5C}`,
    "unavailable": `\u{4E0D}\u{53EF}\u{7528}\u{FF0C}\u{5C55}\u{5F00}\u{4EE5}\u{67E5}\u{770B}\u{8BE6}\u{7EC6}\u{4FE1}\u{606F}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"a6632":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "backButton": (args)=>`\u{8FD4}\u{56DE} ${args.prevMenuButton}`,
    "moreActions": `\u{66F4}\u{591A}\u{52D5}\u{4F5C}`,
    "unavailable": `\u{7121}\u{6CD5}\u{4F7F}\u{7528}\u{FF0C}\u{5C55}\u{958B}\u{4EE5}\u{53D6}\u{5F97}\u{8A73}\u{7D30}\u{8CC7}\u{6599}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fnRvl":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "MenuContext", ()=>MenuContext);
parcelHelpers.export(exports, "useMenuContext", ()=>useMenuContext);
parcelHelpers.export(exports, "SubmenuTriggerContext", ()=>SubmenuTriggerContext);
parcelHelpers.export(exports, "useSubmenuTriggerContext", ()=>useSubmenuTriggerContext);
parcelHelpers.export(exports, "MenuStateContext", ()=>MenuStateContext);
parcelHelpers.export(exports, "useMenuStateContext", ()=>useMenuStateContext);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const MenuContext = (0, _reactDefault.default).createContext({});
function useMenuContext() {
    return (0, _react.useContext)(MenuContext);
}
const SubmenuTriggerContext = (0, _reactDefault.default).createContext(undefined);
function useSubmenuTriggerContext() {
    return (0, _react.useContext)(SubmenuTriggerContext);
}
const MenuStateContext = (0, _reactDefault.default).createContext(undefined);
function useMenuStateContext() {
    return (0, _react.useContext)(MenuStateContext);
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gA6Rz":[function(require,module,exports,__globalThis) {
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
/** @private */ parcelHelpers.export(exports, "MenuItem", ()=>MenuItem);
var _jsxRuntime = require("preact/jsx-runtime");
var _checkmarkMediumTsx = require("../../../../@spectrum-icons/ui/src/CheckmarkMedium.tsx");
var _checkmarkMediumTsxDefault = parcelHelpers.interopDefault(_checkmarkMediumTsx);
var _chevronLeftTsx = require("../../../../@spectrum-icons/workflow/src/ChevronLeft.tsx");
var _chevronLeftTsxDefault = parcelHelpers.interopDefault(_chevronLeftTsx);
var _chevronRightTsx = require("../../../../@spectrum-icons/workflow/src/ChevronRight.tsx");
var _chevronRightTsxDefault = parcelHelpers.interopDefault(_chevronRightTsx);
var _classNamesTs = require("../utils/classNames.ts");
var _slotsTsx = require("../utils/Slots.tsx");
var _focusRingTs = require("../../../../../../../../vendor/react-aria/exports/FocusRing.ts");
var _gridTsx = require("../layout/Grid.tsx");
var _infoOutlineTsx = require("../../../../@spectrum-icons/workflow/src/InfoOutline.tsx");
var _infoOutlineTsxDefault = parcelHelpers.interopDefault(_infoOutlineTsx);
var _indexJs = require("../../intl/menu/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _mergeRefsTs = require("../../../../../../../../vendor/react-aria/exports/mergeRefs.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _varsCss = require("../../../spectrum-css-temp/components/menu/vars.css");
var _varsCssDefault = parcelHelpers.interopDefault(_varsCss);
var _textTsx = require("../text/Text.tsx");
var _i18NproviderTs = require("../../../../../../../../vendor/react-aria/exports/I18nProvider.ts");
var _useLocalizedStringFormatterTs = require("../../../../../../../../vendor/react-aria/exports/useLocalizedStringFormatter.ts");
var _contextTs = require("./context.ts");
var _useMenuTs = require("../../../../../../../../vendor/react-aria/exports/useMenu.ts");
var _useObjectRefTs = require("../../../../../../../../vendor/react-aria/exports/useObjectRef.ts");
var _useIdTs = require("../../../../../../../../vendor/react-aria/exports/private/utils/useId.ts");
function MenuItem(props) {
    let { item, state, isVirtualized } = props;
    let { closeOnSelect } = (0, _contextTs.useMenuContext)();
    let { rendered, key } = item;
    let stringFormatter = (0, _useLocalizedStringFormatterTs.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-spectrum/menu');
    let { direction } = (0, _i18NproviderTs.useLocale)();
    let submenuTriggerContext = (0, _contextTs.useSubmenuTriggerContext)();
    let { triggerRef, ...submenuTriggerProps } = submenuTriggerContext || {};
    let isSubmenuTrigger = !!submenuTriggerContext;
    let isUnavailable;
    let ElementType = item.props.href ? 'a' : 'div';
    if (isSubmenuTrigger) isUnavailable = submenuTriggerContext.isUnavailable;
    let isDisabled = state.disabledKeys.has(key);
    let isContextualHelpTrigger = isSubmenuTrigger && isUnavailable !== undefined;
    let isSelectable = (isContextualHelpTrigger ? !isUnavailable : !isSubmenuTrigger) && state.selectionManager.selectionMode !== 'none';
    let isSelected = isSelectable && state.selectionManager.isSelected(key);
    let itemref = (0, _react.useRef)(null);
    // oxlint-disable-next-line react/react-compiler
    let ref = (0, _useObjectRefTs.useObjectRef)((0, _react.useMemo)(()=>(0, _mergeRefsTs.mergeRefs)(itemref, triggerRef), [
        itemref,
        triggerRef
    ]));
    let { menuItemProps, labelProps, descriptionProps, keyboardShortcutProps } = (0, _useMenuTs.useMenuItem)({
        isSelected,
        isDisabled,
        'aria-label': item['aria-label'],
        key,
        closeOnSelect,
        isVirtualized,
        ...submenuTriggerProps
    }, state, ref);
    let endId = (0, _useIdTs.useSlotId)();
    let endProps = {};
    if (endId) {
        endProps.id = endId;
        // oxlint-disable-next-line react/react-compiler
        menuItemProps['aria-describedby'] = [
            menuItemProps['aria-describedby'],
            endId
        ].filter(Boolean).join(' ');
    }
    let contents = typeof rendered === 'string' ? /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
        children: rendered
    }) : rendered;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _focusRingTs.FocusRing), {
        focusRingClass: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'focus-ring'),
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(ElementType, {
            ...menuItemProps,
            ref: ref,
            className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Menu-item', {
                'is-disabled': isDisabled,
                'is-selected': isSelected,
                'is-selectable': isSelectable,
                'is-open': submenuTriggerProps.isOpen
            }),
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _gridTsx.Grid), {
                UNSAFE_className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Menu-itemGrid'),
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _slotsTsx.ClearSlots), {
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _slotsTsx.SlotProvider), {
                        slots: {
                            text: {
                                UNSAFE_className: (0, _varsCssDefault.default)['spectrum-Menu-itemLabel'],
                                ...labelProps
                            },
                            end: {
                                UNSAFE_className: (0, _varsCssDefault.default)['spectrum-Menu-end'],
                                ...endProps
                            },
                            icon: {
                                UNSAFE_className: (0, _varsCssDefault.default)['spectrum-Menu-icon'],
                                size: 'S'
                            },
                            description: {
                                UNSAFE_className: (0, _varsCssDefault.default)['spectrum-Menu-description'],
                                ...descriptionProps
                            },
                            keyboard: {
                                UNSAFE_className: (0, _varsCssDefault.default)['spectrum-Menu-keyboard'],
                                ...keyboardShortcutProps
                            },
                            chevron: {
                                UNSAFE_className: (0, _varsCssDefault.default)['spectrum-Menu-chevron'],
                                size: 'S'
                            }
                        },
                        children: [
                            contents,
                            isSelected && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _checkmarkMediumTsxDefault.default), {
                                slot: "checkmark",
                                UNSAFE_className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Menu-checkmark')
                            }),
                            isUnavailable && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _infoOutlineTsxDefault.default), {
                                slot: "end",
                                size: "XS",
                                alignSelf: "center",
                                "aria-label": stringFormatter.format('unavailable')
                            }),
                            isUnavailable == null && isSubmenuTrigger && (direction === 'rtl' ? /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _chevronLeftTsxDefault.default), {
                                slot: "chevron"
                            }) : /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _chevronRightTsxDefault.default), {
                                slot: "chevron"
                            }))
                        ]
                    })
                })
            })
        })
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../@spectrum-icons/ui/src/CheckmarkMedium.tsx":"YSy5z","../../../../@spectrum-icons/workflow/src/ChevronLeft.tsx":"2UdOi","../../../../@spectrum-icons/workflow/src/ChevronRight.tsx":"8WBI3","../utils/classNames.ts":"dsWbb","../utils/Slots.tsx":"a1pMy","../../../../../../../../vendor/react-aria/exports/FocusRing.ts":"amr77","../layout/Grid.tsx":"8a5cg","../../../../@spectrum-icons/workflow/src/InfoOutline.tsx":"jUzeW","../../intl/menu/index.js":"lokhC","../../../../../../../../vendor/react-aria/exports/mergeRefs.ts":"jspQh","react":"gOP0N","../../../spectrum-css-temp/components/menu/vars.css":"gr6L4","../text/Text.tsx":"4mQX0","../../../../../../../../vendor/react-aria/exports/I18nProvider.ts":"czGuc","../../../../../../../../vendor/react-aria/exports/useLocalizedStringFormatter.ts":"8lll3","./context.ts":"fnRvl","../../../../../../../../vendor/react-aria/exports/useMenu.ts":"6FWTA","../../../../../../../../vendor/react-aria/exports/useObjectRef.ts":"ec0NJ","../../../../../../../../vendor/react-aria/exports/private/utils/useId.ts":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"YSy5z":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>CheckmarkMedium);
var _jsxRuntime = require("preact/jsx-runtime");
var _checkmarkMediumJs = require("@adobe/react-spectrum-ui/dist/CheckmarkMedium.js");
var _uiiconTsx = require("../../../@adobe/react-spectrum/src/icon/UIIcon.tsx");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function CheckmarkMedium(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _uiiconTsx.UIIcon), {
        ...props,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _checkmarkMediumJs.CheckmarkMedium), {})
    });
}

},{"preact/jsx-runtime":"b2Fbn","@adobe/react-spectrum-ui/dist/CheckmarkMedium.js":"4sx6s","../../../@adobe/react-spectrum/src/icon/UIIcon.tsx":"96LzK","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4sx6s":[function(require,module,exports,__globalThis) {
/**
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
**/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CheckmarkMedium = CheckmarkMedium;
var _react = _interopRequireDefault(require("86e2e46452d29d58"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function CheckmarkMedium(_ref) {
    var _ref$scale = _ref.scale, scale = _ref$scale === void 0 ? 'M' : _ref$scale, props = _objectWithoutProperties(_ref, [
        "scale"
    ]);
    return _react["default"].createElement("svg", _extends({}, props, props), scale === 'L' && _react["default"].createElement("path", {
        d: "M6 14a1 1 0 0 1-.789-.385l-4-5a1 1 0 1 1 1.577-1.23L6 11.376l7.213-8.99a1 1 0 1 1 1.576 1.23l-8 10a1 1 0 0 1-.789.384z"
    }), scale === 'M' && _react["default"].createElement("path", {
        d: "M4.5 10a1.022 1.022 0 0 1-.799-.384l-2.488-3a1 1 0 0 1 1.576-1.233L4.5 7.376l4.712-5.991a1 1 0 1 1 1.576 1.23l-5.51 7A.978.978 0 0 1 4.5 10z"
    }));
}
CheckmarkMedium.displayName = 'CheckmarkMedium';

},{"86e2e46452d29d58":"gOP0N"}],"2UdOi":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ChevronLeft);
var _jsxRuntime = require("preact/jsx-runtime");
var _chevronLeftJs = require("@adobe/react-spectrum-workflow/dist/ChevronLeft.js");
var _iconTs = require("../../../@adobe/react-spectrum/exports/Icon.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function ChevronLeft(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _iconTs.Icon), {
        ...props,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _chevronLeftJs.A4uChevronLeft), {})
    });
}

},{"preact/jsx-runtime":"b2Fbn","@adobe/react-spectrum-workflow/dist/ChevronLeft.js":"2qNh0","../../../@adobe/react-spectrum/exports/Icon.ts":"8qNHg","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2qNh0":[function(require,module,exports,__globalThis) {
/**
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
**/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.A4uChevronLeft = A4uChevronLeft;
var _react = _interopRequireDefault(require("6dd47270713f9100"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function A4uChevronLeft(_ref) {
    var props = _extends({}, _ref);
    return /*#__PURE__*/ _react["default"].createElement("svg", _extends({
        viewBox: "0 0 36 36"
    }, props, props), /*#__PURE__*/ _react["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M12,18v0a1.988,1.988,0,0,0,.585,1.409l7.983,7.98a2,2,0,1,0,2.871-2.772l-.049-.049L16.819,18l6.572-6.57a2,2,0,0,0-2.773-2.87l-.049.049-7.983,7.98A1.988,1.988,0,0,0,12,18Z"
    }));
}

},{"6dd47270713f9100":"gOP0N"}],"8qNHg":[function(require,module,exports,__globalThis) {
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
/**
 * Spectrum icons are clear, minimal, and consistent across platforms. They follow the focused and
 * rational principles of the design system in both metaphor and style.
 */ parcelHelpers.export(exports, "Icon", ()=>Icon);
var _stylePropsTs = require("../utils/styleProps.ts");
var _classNamesTs = require("../utils/classNames.ts");
var _filterDOMPropsTs = require("../../../../../../../../vendor/react-aria/exports/filterDOMProps.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _varsCss = require("../../../spectrum-css-temp/components/icon/vars.css");
var _varsCssDefault = parcelHelpers.interopDefault(_varsCss);
var _providerTsx = require("../provider/Provider.tsx");
var _slotsTsx = require("../utils/Slots.tsx");
function iconColorValue(value) {
    return `var(--spectrum-semantic-${value}-color-icon)`;
}
const iconStyleProps = {
    ...(0, _stylePropsTs.baseStyleProps),
    color: [
        'color',
        iconColorValue
    ]
};
function Icon(props) {
    props = (0, _slotsTsx.useSlotProps)(props, 'icon');
    let { children, size, 'aria-label': ariaLabel, 'aria-hidden': ariaHidden, ...otherProps } = props;
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(otherProps, iconStyleProps);
    let provider;
    try {
        // oxlint-disable-next-line react/react-compiler
        provider = (0, _providerTsx.useProvider)();
    } catch  {
    // ignore
    }
    let scale = 'M';
    if (provider != null) scale = provider.scale === 'large' ? 'L' : 'M';
    if (!ariaHidden) ariaHidden = undefined;
    // Use user specified size, falling back to provider scale if size is undef
    let iconSize = size ? size : scale;
    return /*#__PURE__*/ (0, _reactDefault.default).cloneElement(children, {
        ...(0, _filterDOMPropsTs.filterDOMProps)(otherProps),
        ...styleProps,
        focusable: 'false',
        'aria-label': ariaLabel,
        'aria-hidden': ariaLabel ? ariaHidden || undefined : true,
        role: 'img',
        className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), children.props.className, 'spectrum-Icon', `spectrum-Icon--size${iconSize}`, styleProps.className)
    });
}

},{"../utils/styleProps.ts":"7B0Vi","../utils/classNames.ts":"dsWbb","../../../../../../../../vendor/react-aria/exports/filterDOMProps.ts":"h4XHF","react":"gOP0N","../../../spectrum-css-temp/components/icon/vars.css":"jnc4G","../provider/Provider.tsx":"ebIlC","../utils/Slots.tsx":"a1pMy","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8WBI3":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ChevronRight);
var _jsxRuntime = require("preact/jsx-runtime");
var _chevronRightJs = require("@adobe/react-spectrum-workflow/dist/ChevronRight.js");
var _iconTs = require("../../../@adobe/react-spectrum/exports/Icon.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function ChevronRight(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _iconTs.Icon), {
        ...props,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _chevronRightJs.A4uChevronRight), {})
    });
}

},{"preact/jsx-runtime":"b2Fbn","@adobe/react-spectrum-workflow/dist/ChevronRight.js":"9s8q5","../../../@adobe/react-spectrum/exports/Icon.ts":"8qNHg","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9s8q5":[function(require,module,exports,__globalThis) {
/**
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
**/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.A4uChevronRight = A4uChevronRight;
var _react = _interopRequireDefault(require("ad4b12ce3dadb4f2"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function A4uChevronRight(_ref) {
    var props = _extends({}, _ref);
    return /*#__PURE__*/ _react["default"].createElement("svg", _extends({
        viewBox: "0 0 36 36"
    }, props, props), /*#__PURE__*/ _react["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M24,18v0a1.988,1.988,0,0,1-.585,1.409l-7.983,7.98a2,2,0,1,1-2.871-2.772l.049-.049L19.181,18l-6.572-6.57a2,2,0,0,1,2.773-2.87l.049.049,7.983,7.98A1.988,1.988,0,0,1,24,18Z"
    }));
}

},{"ad4b12ce3dadb4f2":"gOP0N"}],"8a5cg":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Grid", ()=>Grid);
/**
 * Can be used to make a repeating fragment of the columns or rows list.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat).
 *
 * @param count - The number of times to repeat the fragment.
 * @param repeat - The fragment to repeat.
 */ parcelHelpers.export(exports, "repeat", ()=>repeat);
/**
 * Defines a size range greater than or equal to min and less than or equal to max.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax).
 *
 * @param min - The minimum size.
 * @param max - The maximum size.
 */ parcelHelpers.export(exports, "minmax", ()=>minmax);
/**
 * Clamps a given size to an available size.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content).
 *
 * @param dimension - The size to clamp.
 */ parcelHelpers.export(exports, "fitContent", ()=>fitContent);
var _jsxRuntime = require("preact/jsx-runtime");
var _stylePropsTs = require("../utils/styleProps.ts");
var _filterDOMPropsTs = require("../../../../../../../../vendor/react-aria/exports/filterDOMProps.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useDOMRefTs = require("../utils/useDOMRef.ts");
const gridStyleProps = {
    ...(0, _stylePropsTs.baseStyleProps),
    autoFlow: [
        'gridAutoFlow',
        (0, _stylePropsTs.passthroughStyle)
    ],
    autoColumns: [
        'gridAutoColumns',
        gridDimensionValue
    ],
    autoRows: [
        'gridAutoRows',
        gridDimensionValue
    ],
    areas: [
        'gridTemplateAreas',
        gridTemplateAreasValue
    ],
    columns: [
        'gridTemplateColumns',
        gridTemplateValue
    ],
    rows: [
        'gridTemplateRows',
        gridTemplateValue
    ],
    gap: [
        'gap',
        (0, _stylePropsTs.dimensionValue)
    ],
    rowGap: [
        'rowGap',
        (0, _stylePropsTs.dimensionValue)
    ],
    columnGap: [
        'columnGap',
        (0, _stylePropsTs.dimensionValue)
    ],
    justifyItems: [
        'justifyItems',
        (0, _stylePropsTs.passthroughStyle)
    ],
    justifyContent: [
        'justifyContent',
        (0, _stylePropsTs.passthroughStyle)
    ],
    alignItems: [
        'alignItems',
        (0, _stylePropsTs.passthroughStyle)
    ],
    alignContent: [
        'alignContent',
        (0, _stylePropsTs.passthroughStyle)
    ]
};
const Grid = /*#__PURE__*/ (0, _react.forwardRef)(function Grid(props, ref) {
    let { children, ...otherProps } = props;
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(otherProps, gridStyleProps);
    if (styleProps.style) // oxlint-disable-next-line react/react-compiler
    styleProps.style.display = 'grid'; // inline-grid?
    let domRef = (0, _useDOMRefTs.useDOMRef)(ref);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        ...(0, _filterDOMPropsTs.filterDOMProps)(otherProps),
        ...styleProps,
        ref: domRef,
        children: children
    });
});
function repeat(count, repeat) {
    return `repeat(${count}, ${gridTemplateValue(repeat)})`;
}
function minmax(min, max) {
    return `minmax(${gridDimensionValue(min)}, ${gridDimensionValue(max)})`;
}
function fitContent(dimension) {
    return `fit-content(${gridDimensionValue(dimension)})`;
}
function gridTemplateAreasValue(value) {
    return value.map((v)=>`"${v}"`).join('\n');
}
function gridDimensionValue(value) {
    if (/^max-content|min-content|minmax|auto|fit-content|repeat|subgrid/.test(value)) return value;
    return (0, _stylePropsTs.dimensionValue)(value);
}
function gridTemplateValue(value) {
    if (Array.isArray(value)) return value.map(gridDimensionValue).join(' ');
    return gridDimensionValue(value);
}

},{"preact/jsx-runtime":"b2Fbn","../utils/styleProps.ts":"7B0Vi","../../../../../../../../vendor/react-aria/exports/filterDOMProps.ts":"h4XHF","react":"gOP0N","../utils/useDOMRef.ts":"ltu01","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jUzeW":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>InfoOutline);
var _jsxRuntime = require("preact/jsx-runtime");
var _infoOutlineJs = require("@adobe/react-spectrum-workflow/dist/InfoOutline.js");
var _iconTs = require("../../../@adobe/react-spectrum/exports/Icon.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function InfoOutline(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _iconTs.Icon), {
        ...props,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _infoOutlineJs.A4uInfoOutline), {})
    });
}

},{"preact/jsx-runtime":"b2Fbn","@adobe/react-spectrum-workflow/dist/InfoOutline.js":"1OT16","../../../@adobe/react-spectrum/exports/Icon.ts":"8qNHg","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1OT16":[function(require,module,exports,__globalThis) {
/**
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
**/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.A4uInfoOutline = A4uInfoOutline;
var _react = _interopRequireDefault(require("ca90c31a748283d4"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function A4uInfoOutline(_ref) {
    var props = _extends({}, _ref);
    return /*#__PURE__*/ _react["default"].createElement("svg", _extends({
        viewBox: "0 0 36 36"
    }, props, props), /*#__PURE__*/ _react["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M20.15,12A2.15,2.15,0,1,1,18,9.85,2.15,2.15,0,0,1,20.15,12Zm.1835,12H20V16.3999A.4001.4001,0,0,0,19.60007,16H15.66648S14.5,16.03223,14.5,17c0,.96729,1.16651,1,1.16651,1H16v6h-.33349S14.5,24.03223,14.5,25c0,.96729,1.16651,1,1.16651,1h4.667S21.5,25.96729,21.5,25C21.5,24.03223,20.33347,24,20.33347,24ZM18,1A17,17,0,1,0,35.00008,18,17.00014,17.00014,0,0,0,18,1Zm0,30.34961A13.34961,13.34961,0,1,1,31.34967,18,13.34962,13.34962,0,0,1,18,31.34961Z"
    }));
}

},{"ca90c31a748283d4":"gOP0N"}],"gr6L4":[function(require,module,exports,__globalThis) {
module.exports["checkmark"] = `GeiM8a_checkmark`;
module.exports["chevron"] = `GeiM8a_chevron`;
module.exports["description"] = `GeiM8a_description`;
module.exports["end"] = `GeiM8a_end`;
module.exports["i18nFontFamily"] = `GeiM8a_i18nFontFamily`;
module.exports["icon"] = `GeiM8a_icon`;
module.exports["is-active"] = `GeiM8a_is-active`;
module.exports["is-disabled"] = `GeiM8a_is-disabled`;
module.exports["is-expanded"] = `GeiM8a_is-expanded`;
module.exports["is-focused"] = `GeiM8a_is-focused`;
module.exports["is-highlighted"] = `GeiM8a_is-highlighted`;
module.exports["is-open"] = `GeiM8a_is-open`;
module.exports["is-selectable"] = `GeiM8a_is-selectable`;
module.exports["is-selected"] = `GeiM8a_is-selected`;
module.exports["keyboard"] = `GeiM8a_keyboard`;
module.exports["slideInFromLeft"] = `GeiM8a_slideInFromLeft`;
module.exports["slideInFromLeft"];
module.exports["slideInFromRight"] = `GeiM8a_slideInFromRight`;
module.exports["slideInFromRight"];
module.exports["slideOutToLeft"] = `GeiM8a_slideOutToLeft`;
module.exports["slideOutToLeft"];
module.exports["slideOutToRight"] = `GeiM8a_slideOutToRight`;
module.exports["slideOutToRight"];
module.exports["spectrum-FocusRing-ring"] = `GeiM8a_spectrum-FocusRing-ring`;
module.exports["spectrum-FocusRing"] = `GeiM8a_spectrum-FocusRing ${module.exports["spectrum-FocusRing-ring"]}`;
module.exports["spectrum-FocusRing--quiet"] = `GeiM8a_spectrum-FocusRing--quiet`;
module.exports["spectrum-Icon"] = `GeiM8a_spectrum-Icon`;
module.exports["spectrum-Menu"] = `GeiM8a_spectrum-Menu`;
module.exports["spectrum-Menu-avatar"] = `GeiM8a_spectrum-Menu-avatar`;
module.exports["spectrum-Menu-checkmark"] = `GeiM8a_spectrum-Menu-checkmark`;
module.exports["spectrum-Menu-chevron"] = `GeiM8a_spectrum-Menu-chevron`;
module.exports["spectrum-Menu-description"] = `GeiM8a_spectrum-Menu-description`;
module.exports["spectrum-Menu-divider"] = `GeiM8a_spectrum-Menu-divider`;
module.exports["spectrum-Menu-end"] = `GeiM8a_spectrum-Menu-end`;
module.exports["spectrum-Menu-icon"] = `GeiM8a_spectrum-Menu-icon`;
module.exports["spectrum-Menu-item"] = `GeiM8a_spectrum-Menu-item`;
module.exports["spectrum-Menu-itemGrid"] = `GeiM8a_spectrum-Menu-itemGrid`;
module.exports["spectrum-Menu-itemIcon"] = `GeiM8a_spectrum-Menu-itemIcon`;
module.exports["spectrum-Menu-itemLabel"] = `GeiM8a_spectrum-Menu-itemLabel`;
module.exports["spectrum-Menu-itemLabel--wrapping"] = `GeiM8a_spectrum-Menu-itemLabel--wrapping`;
module.exports["spectrum-Menu-keyboard"] = `GeiM8a_spectrum-Menu-keyboard`;
module.exports["spectrum-Menu-popover"] = `GeiM8a_spectrum-Menu-popover`;
module.exports["spectrum-Menu-section--isFirst"] = `GeiM8a_spectrum-Menu-section--isFirst`;
module.exports["spectrum-Menu-section--isLast"] = `GeiM8a_spectrum-Menu-section--isLast`;
module.exports["spectrum-Menu-section--noHeading"] = `GeiM8a_spectrum-Menu-section--noHeading`;
module.exports["spectrum-Menu-sectionHeading"] = `GeiM8a_spectrum-Menu-sectionHeading`;
module.exports["spectrum-Menu-subdialog"] = `GeiM8a_spectrum-Menu-subdialog`;
module.exports["spectrum-Menu-wrapper"] = `GeiM8a_spectrum-Menu-wrapper`;
module.exports["spectrum-Menu-wrapper--isMobile"] = `GeiM8a_spectrum-Menu-wrapper--isMobile`;
module.exports["spectrum-Submenu-heading"] = `GeiM8a_spectrum-Submenu-heading`;
module.exports["spectrum-Submenu-headingWrapper"] = `GeiM8a_spectrum-Submenu-headingWrapper`;
module.exports["spectrum-Submenu-popover"] = `GeiM8a_spectrum-Submenu-popover`;
module.exports["spectrum-Submenu-wrapper"] = `GeiM8a_spectrum-Submenu-wrapper`;
module.exports["spectrum-Submenu-wrapper--isMobile"] = `GeiM8a_spectrum-Submenu-wrapper--isMobile`;
module.exports["spectrum-TraySubmenu-enter"] = `GeiM8a_spectrum-TraySubmenu-enter`;
module.exports["spectrum-TraySubmenu-exit"] = `GeiM8a_spectrum-TraySubmenu-exit`;
module.exports["text"] = `GeiM8a_text`;

},{}],"llDbM":[function(require,module,exports,__globalThis) {
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
/** @private */ parcelHelpers.export(exports, "MenuSection", ()=>MenuSection);
var _jsxRuntime = require("preact/jsx-runtime");
var _classNamesTs = require("../utils/classNames.ts");
var _getChildNodesTs = require("../../../../../../../../vendor/react-stately/exports/private/collections/getChildNodes.ts");
var _menuItemTsx = require("./MenuItem.tsx");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _varsCss = require("../../../spectrum-css-temp/components/menu/vars.css");
var _varsCssDefault = parcelHelpers.interopDefault(_varsCss);
var _useMenuTs = require("../../../../../../../../vendor/react-aria/exports/useMenu.ts");
var _useSeparatorTs = require("../../../../../../../../vendor/react-aria/exports/useSeparator.ts");
function MenuSection(props) {
    let { item, state } = props;
    let { itemProps, headingProps, groupProps } = (0, _useMenuTs.useMenuSection)({
        heading: item.rendered,
        'aria-label': item['aria-label']
    });
    let { separatorProps } = (0, _useSeparatorTs.useSeparator)({
        elementType: 'div'
    });
    let firstSectionKey = state.collection.getFirstKey();
    let lastSectionKey = [
        ...state.collection
    ].filter((node)=>node.type === 'section').at(-1)?.key;
    let sectionIsFirst = firstSectionKey === item.key && state.collection.getFirstKey() === firstSectionKey;
    let lastKey = state.collection.getLastKey();
    let sectionIsLast = lastSectionKey === item.key && lastKey != null && state.collection.getItem(lastKey).parentKey === lastSectionKey;
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _react.Fragment), {
        children: [
            item.key !== state.collection.getFirstKey() && /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                ...separatorProps,
                className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Menu-divider')
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                ...itemProps,
                children: [
                    item.rendered && /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                        ...headingProps,
                        className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Menu-sectionHeading'),
                        children: item.rendered
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        ...groupProps,
                        className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Menu', {
                            'spectrum-Menu-section--noHeading': item.rendered == null,
                            'spectrum-Menu-section--isFirst': sectionIsFirst,
                            'spectrum-Menu-section--isLast': sectionIsLast
                        }),
                        children: [
                            ...(0, _getChildNodesTs.getChildNodes)(item, state.collection)
                        ].map((node)=>{
                            let item = /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuItemTsx.MenuItem), {
                                item: node,
                                state: state
                            }, node.key);
                            if (node.wrapper) item = node.wrapper(item);
                            return item;
                        })
                    })
                ]
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","../utils/classNames.ts":"dsWbb","../../../../../../../../vendor/react-stately/exports/private/collections/getChildNodes.ts":"9KbhA","./MenuItem.tsx":"gA6Rz","react":"gOP0N","../../../spectrum-css-temp/components/menu/vars.css":"gr6L4","../../../../../../../../vendor/react-aria/exports/useMenu.ts":"9nE7l","../../../../../../../../vendor/react-aria/exports/useSeparator.ts":"7SEKa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"31MG2":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useIsMobileDevice", ()=>useIsMobileDevice);
var _ssrproviderTs = require("../../../../../../../../vendor/react-aria/exports/SSRProvider.ts");
const MOBILE_SCREEN_WIDTH = 700;
function useIsMobileDevice() {
    let isSSR = (0, _ssrproviderTs.useIsSSR)();
    if (isSSR || typeof window === 'undefined') return false;
    return window.screen.width <= MOBILE_SCREEN_WIDTH;
}

},{"../../../../../../../../vendor/react-aria/exports/SSRProvider.ts":"2cndP","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gvzMs":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "MenuTrigger", ()=>MenuTrigger);
var _jsxRuntime = require("preact/jsx-runtime");
var _classNamesTs = require("../utils/classNames.ts");
var _contextTs = require("./context.ts");
var _useMenuTriggerStateTs = require("../../../../../../../../vendor/react-stately/exports/useMenuTriggerState.ts");
var _popoverTsx = require("../overlays/Popover.tsx");
var _pressResponderTs = require("../../../../../../../../vendor/react-aria/exports/private/interactions/PressResponder.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _slotsTsx = require("../utils/Slots.tsx");
var _varsCss = require("../../../spectrum-css-temp/components/menu/vars.css");
var _varsCssDefault = parcelHelpers.interopDefault(_varsCss);
var _trayTsx = require("../overlays/Tray.tsx");
var _useDOMRefTs = require("../utils/useDOMRef.ts");
var _useInteractOutsideTs = require("../../../../../../../../vendor/react-aria/exports/useInteractOutside.ts");
var _useIsMobileDeviceTs = require("../utils/useIsMobileDevice.ts");
var _useMenuTs = require("../../../../../../../../vendor/react-aria/exports/useMenu.ts");
const MenuTrigger = /*#__PURE__*/ (0, _react.forwardRef)(function MenuTrigger(props, ref) {
    let triggerRef = (0, _react.useRef)(null);
    let domRef = (0, _useDOMRefTs.useDOMRef)(ref);
    let menuTriggerRef = domRef || triggerRef;
    let menuRef = (0, _react.useRef)(null);
    let { children, align = 'start', shouldFlip = true, direction = 'bottom', closeOnSelect, trigger = 'press' } = props;
    let [menuTrigger, menu] = (0, _reactDefault.default).Children.toArray(children);
    let state = (0, _useMenuTriggerStateTs.useMenuTriggerState)(props);
    let { menuTriggerProps, menuProps } = (0, _useMenuTs.useMenuTrigger)({
        trigger
    }, state, menuTriggerRef);
    let initialPlacement;
    switch(direction){
        case 'left':
        case 'right':
        case 'start':
        case 'end':
            initialPlacement = `${direction} ${align === 'end' ? 'bottom' : 'top'}`;
            break;
        case 'bottom':
        case 'top':
        default:
            initialPlacement = `${direction} ${align}`;
    }
    let isMobile = (0, _useIsMobileDeviceTs.useIsMobileDevice)();
    let menuContext = {
        ...menuProps,
        ref: menuRef,
        onClose: state.close,
        closeOnSelect,
        autoFocus: state.focusStrategy || true,
        UNSAFE_style: isMobile ? {
            width: '100%',
            maxHeight: 'inherit'
        } : undefined,
        UNSAFE_className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), {
            'spectrum-Menu-popover': !isMobile
        }),
        state
    };
    // Close when clicking outside the root menu when a submenu is open.
    let rootOverlayRef = (0, _react.useRef)(null);
    // oxlint-disable-next-line react/react-compiler
    let rootOverlayDomRef = (0, _useDOMRefTs.unwrapDOMRef)(rootOverlayRef);
    (0, _useInteractOutsideTs.useInteractOutside)({
        ref: rootOverlayDomRef,
        onInteractOutside: ()=>{
            state?.close();
        },
        isDisabled: !state.isOpen || state.expandedKeysStack.length === 0
    });
    // On small screen devices, the menu is rendered in a tray, otherwise a popover.
    let overlay;
    if (isMobile) overlay = /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _trayTsx.Tray), {
        state: state,
        isFixedHeight: true,
        ref: rootOverlayRef,
        children: menu
    });
    else overlay = /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverTsx.Popover), {
        ref: rootOverlayRef,
        UNSAFE_style: {
            clipPath: 'unset',
            overflow: 'visible',
            filter: 'unset',
            borderWidth: '0px'
        },
        state: state,
        triggerRef: menuTriggerRef,
        scrollRef: menuRef,
        placement: initialPlacement,
        hideArrow: true,
        shouldFlip: shouldFlip,
        shouldContainFocus: true,
        children: menu
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _react.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _slotsTsx.SlotProvider), {
                slots: {
                    actionButton: {
                        holdAffordance: trigger === 'longPress'
                    }
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _pressResponderTs.PressResponder), {
                    ...menuTriggerProps,
                    ref: menuTriggerRef,
                    isPressed: state.isOpen,
                    children: menuTrigger
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _contextTs.MenuContext).Provider, {
                value: menuContext,
                children: overlay
            })
        ]
    });
});

},{"preact/jsx-runtime":"b2Fbn","../utils/classNames.ts":"dsWbb","./context.ts":"fnRvl","../../../../../../../../vendor/react-stately/exports/useMenuTriggerState.ts":"6hJKZ","../overlays/Popover.tsx":"c2SW7","../../../../../../../../vendor/react-aria/exports/private/interactions/PressResponder.ts":"e49up","react":"gOP0N","../utils/Slots.tsx":"a1pMy","../../../spectrum-css-temp/components/menu/vars.css":"gr6L4","../overlays/Tray.tsx":"j6qYR","../utils/useDOMRef.ts":"ltu01","../../../../../../../../vendor/react-aria/exports/useInteractOutside.ts":"fgkZg","../utils/useIsMobileDevice.ts":"31MG2","../../../../../../../../vendor/react-aria/exports/useMenu.ts":"9b4y8","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"c2SW7":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Popover", ()=>Popover);
var _jsxRuntime = require("preact/jsx-runtime");
var _usePopoverTs = require("../../../../../../../../vendor/react-aria/exports/usePopover.ts");
var _classNamesTs = require("../utils/classNames.ts");
var _overlayTs = require("../../../../../../../../vendor/react-aria/exports/Overlay.ts");
var _useFocusWithinTs = require("../../../../../../../../vendor/react-aria/exports/useFocusWithin.ts");
var _mergePropsTs = require("../../../../../../../../vendor/react-aria/exports/mergeProps.ts");
var _overlayTsx = require("./Overlay.tsx");
var _overlaysCss = require("./overlays.css");
var _overlaysCssDefault = parcelHelpers.interopDefault(_overlaysCss);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _varsCss = require("../../../spectrum-css-temp/components/popover/vars.css");
var _varsCssDefault = parcelHelpers.interopDefault(_varsCss);
var _underlayTsx = require("./Underlay.tsx");
var _useDOMRefTs = require("../utils/useDOMRef.ts");
var _useLayoutEffectTs = require("../../../../../../../../vendor/react-aria/exports/private/utils/useLayoutEffect.ts");
var _useObjectRefTs = require("../../../../../../../../vendor/react-aria/exports/useObjectRef.ts");
var _stylePropsTs = require("../utils/styleProps.ts");
/**
 * Arrow placement can be done pointing right or down because those paths start at 0, x or y.
 * Because the other two don't, they start at a fractional pixel value, it introduces rounding
 * differences between browsers and between display types (retina with subpixels vs not retina). By
 * flipping them with CSS we can ensure that the path always starts at 0 so that it perfectly
 * overlaps the popover's border. See bottom of file for more explanation.
 */ let arrowPlacement = {
    left: 'right',
    right: 'right',
    top: 'bottom',
    bottom: 'bottom'
};
const Popover = /*#__PURE__*/ (0, _react.forwardRef)(function Popover(props, ref) {
    let { children, state, ...otherProps } = props;
    let domRef = (0, _useDOMRefTs.useDOMRef)(ref);
    let wrapperRef = (0, _react.useRef)(null);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _overlayTsx.Overlay), {
        ...otherProps,
        isOpen: state.isOpen,
        nodeRef: wrapperRef,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(PopoverWrapper, {
            ref: domRef,
            ...props,
            wrapperRef: wrapperRef,
            children: children
        })
    });
});
const PopoverWrapper = /*#__PURE__*/ (0, _react.forwardRef)((props, ref)=>{
    let { children, isOpen, hideArrow, isNonModal, enableBothDismissButtons, state, wrapperRef, onDismissButtonPress = ()=>state.close() } = props;
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(props);
    let objRef = (0, _useObjectRefTs.useObjectRef)(ref);
    let { size, borderWidth, arrowRef } = useArrowSize();
    const borderRadius = usePopoverBorderRadius(objRef);
    let borderDiagonal = borderWidth * Math.SQRT2;
    let primary = size + borderDiagonal;
    let secondary = primary * 2;
    let { popoverProps, arrowProps, underlayProps, placement } = (0, _usePopoverTs.usePopover)({
        ...props,
        popoverRef: objRef,
        maxHeight: undefined,
        arrowSize: hideArrow ? 0 : secondary,
        arrowBoundaryOffset: borderRadius
    }, state);
    let { focusWithinProps } = (0, _useFocusWithinTs.useFocusWithin)(props);
    // Attach Transition's nodeRef to outermost wrapper for node.reflow: https://github.com/reactjs/react-transition-group/blob/c89f807067b32eea6f68fd6c622190d88ced82e2/src/Transition.js#L231
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        ref: wrapperRef,
        children: [
            !isNonModal && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _underlayTsx.Underlay), {
                isTransparent: true,
                ...(0, _mergePropsTs.mergeProps)(underlayProps),
                isOpen: isOpen
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                ...styleProps,
                ...(0, _mergePropsTs.mergeProps)(popoverProps, focusWithinProps),
                style: {
                    ...styleProps.style,
                    ...popoverProps.style
                },
                ref: objRef,
                className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Popover', `spectrum-Popover--${placement}`, {
                    'spectrum-Popover--withTip': !hideArrow,
                    'is-open': isOpen,
                    [`is-open--${placement}`]: isOpen,
                    'is-exiting': !state.isOpen
                }, (0, _classNamesTs.classNames)((0, _overlaysCssDefault.default), 'spectrum-Popover', 'react-spectrum-Popover'), styleProps.className),
                role: "presentation",
                "data-testid": "popover",
                children: [
                    (!isNonModal || enableBothDismissButtons) && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _overlayTs.DismissButton), {
                        onDismiss: onDismissButtonPress
                    }),
                    children,
                    hideArrow ? null : /*#__PURE__*/ (0, _jsxRuntime.jsx)(Arrow, {
                        arrowProps: arrowProps,
                        isLandscape: placement != null ? arrowPlacement[placement] === 'bottom' : false,
                        arrowRef: arrowRef,
                        primary: primary,
                        secondary: secondary,
                        borderDiagonal: borderDiagonal
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _overlayTs.DismissButton), {
                        onDismiss: onDismissButtonPress
                    })
                ]
            })
        ]
    });
});
function usePopoverBorderRadius(popoverRef) {
    let [borderRadius, setBorderRadius] = (0, _react.useState)(0);
    (0, _useLayoutEffectTs.useLayoutEffect)(()=>{
        if (popoverRef.current) {
            let spectrumBorderRadius = window.getComputedStyle(popoverRef.current).borderRadius;
            if (spectrumBorderRadius !== '') setBorderRadius(parseInt(spectrumBorderRadius, 10));
        }
    }, [
        popoverRef
    ]);
    return borderRadius;
}
function useArrowSize() {
    let [size, setSize] = (0, _react.useState)(20);
    let [borderWidth, setBorderWidth] = (0, _react.useState)(1);
    let arrowRef = (0, _react.useRef)(null);
    // get the css value for the tip size and divide it by 2 for this arrow implementation
    (0, _useLayoutEffectTs.useLayoutEffect)(()=>{
        if (arrowRef.current) {
            let spectrumTipWidth = window.getComputedStyle(arrowRef.current).getPropertyValue('--spectrum-popover-tip-size');
            if (spectrumTipWidth !== '') setSize(parseInt(spectrumTipWidth, 10) / 2);
            let spectrumBorderWidth = window.getComputedStyle(arrowRef.current).getPropertyValue('--spectrum-popover-tip-borderWidth');
            if (spectrumBorderWidth !== '') setBorderWidth(parseInt(spectrumBorderWidth, 10));
        }
    }, []);
    return {
        size,
        borderWidth,
        arrowRef
    };
}
function Arrow(props) {
    let { primary, secondary, isLandscape, arrowProps, borderDiagonal, arrowRef } = props;
    let halfBorderDiagonal = borderDiagonal / 2;
    let primaryStart = 0;
    let primaryEnd = primary - halfBorderDiagonal;
    let secondaryStart = halfBorderDiagonal;
    let secondaryMiddle = secondary / 2;
    let secondaryEnd = secondary - halfBorderDiagonal;
    let pathData = isLandscape ? [
        'M',
        secondaryStart,
        primaryStart,
        'L',
        secondaryMiddle,
        primaryEnd,
        'L',
        secondaryEnd,
        primaryStart
    ] : [
        'M',
        primaryStart,
        secondaryStart,
        'L',
        primaryEnd,
        secondaryMiddle,
        'L',
        primaryStart,
        secondaryEnd
    ];
    /* use ceil because the svg needs to always accommodate the path inside it */ return /*#__PURE__*/ (0, _jsxRuntime.jsx)("svg", {
        xmlns: "http://www.w3.org/svg/2000",
        width: Math.ceil(isLandscape ? secondary : primary),
        height: Math.ceil(isLandscape ? primary : secondary),
        className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Popover-tip'),
        ref: arrowRef,
        ...arrowProps,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
            className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Popover-tip-triangle'),
            d: pathData.join(' ')
        })
    });
} /**
 * More explanation on popover tips. - I tried changing the calculation of the popover placement in
 * an effort to get it squarely onto the pixel grid. This did not work because the problem was in
 * the svg partial pixel end of the path in the popover right and popover bottom. - I tried creating
 * an extra 'bandaid' path that matched the background color and would overlap the popover border.
 * This didn't work because the border on the svg triangle didn't extend all the way to match nicely
 * with the popover border. - I tried getting the client bounding box and setting the svg to that
 * partial pixel value This didn't work because again the issue was inside the svg - I didn't try
 * drawing the svg backwards This could still be tried - I tried changing the calculation of the
 * popover placement AND the svg height/width so that they were all rounded This seems to have done
 * the trick.
 */ 

},{"preact/jsx-runtime":"b2Fbn","../../../../../../../../vendor/react-aria/exports/usePopover.ts":"kErbq","../utils/classNames.ts":"dsWbb","../../../../../../../../vendor/react-aria/exports/Overlay.ts":"9Jo8j","../../../../../../../../vendor/react-aria/exports/useFocusWithin.ts":"bkSQo","../../../../../../../../vendor/react-aria/exports/mergeProps.ts":"jycxS","./Overlay.tsx":"28esY","./overlays.css":"eaaBl","react":"gOP0N","../../../spectrum-css-temp/components/popover/vars.css":"6KQa1","./Underlay.tsx":"bBlQA","../utils/useDOMRef.ts":"ltu01","../../../../../../../../vendor/react-aria/exports/private/utils/useLayoutEffect.ts":"h7M6K","../../../../../../../../vendor/react-aria/exports/useObjectRef.ts":"ec0NJ","../utils/styleProps.ts":"7B0Vi","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"28esY":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Overlay", ()=>Overlay);
var _jsxRuntime = require("preact/jsx-runtime");
var _openTransitionTsx = require("./OpenTransition.tsx");
var _providerTsx = require("../provider/Provider.tsx");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _overlayTs = require("../../../../../../../../vendor/react-aria/exports/Overlay.ts");
const Overlay = /*#__PURE__*/ (0, _reactDefault.default).forwardRef(function Overlay(props, ref) {
    let { children, isOpen, disableFocusManagement, shouldContainFocus, container, onEnter, onEntering, onEntered, onExit, onExiting, onExited, nodeRef } = props;
    let [exited, setExited] = (0, _react.useState)(!isOpen);
    let handleEntered = (0, _react.useCallback)(()=>{
        setExited(false);
        if (onEntered) onEntered();
    }, [
        onEntered
    ]);
    let handleExited = (0, _react.useCallback)(()=>{
        setExited(true);
        if (onExited) onExited();
    }, [
        onExited
    ]);
    // Don't un-render the overlay while it's transitioning out.
    let mountOverlay = isOpen || !exited;
    if (!mountOverlay) // Don't bother showing anything if we don't have to.
    return null;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _overlayTs.Overlay), {
        portalContainer: container,
        disableFocusManagement: disableFocusManagement,
        shouldContainFocus: shouldContainFocus,
        isExiting: !isOpen,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _providerTsx.Provider), {
            ref: ref,
            UNSAFE_style: {
                background: 'transparent',
                isolation: 'isolate'
            },
            isDisabled: false,
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _openTransitionTsx.OpenTransition), {
                in: isOpen,
                appear: true,
                onExit: onExit,
                onExiting: onExiting,
                onExited: handleExited,
                onEnter: onEnter,
                onEntering: onEntering,
                onEntered: handleEntered,
                nodeRef: nodeRef,
                children: children
            })
        })
    });
});

},{"preact/jsx-runtime":"b2Fbn","./OpenTransition.tsx":"1RdjD","../provider/Provider.tsx":"ebIlC","react":"gOP0N","../../../../../../../../vendor/react-aria/exports/Overlay.ts":"dm7Ko","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1RdjD":[function(require,module,exports,__globalThis) {
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
/**
 * Timeout issues adding css animations to enter may be related to
 * https://github.com/reactjs/react-transition-group/issues/189 or
 * https://github.com/reactjs/react-transition-group/issues/22
 * my VM isn't good enough to debug accurately and get a better answer.
 *
 * As a result, use enter 0 so that is-open is applied once entered
 * it doesn't matter if we know when the css-animation is done on entering
 * for exiting though, give time for the css-animation to play
 * before removing from the DOM
 * **note** hitting esc bypasses exit animation for anyone testing.
 */ parcelHelpers.export(exports, "OpenTransition", ()=>OpenTransition);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactTransitionGroup = require("react-transition-group");
const OPEN_STATES = {
    entering: false,
    entered: true
};
function OpenTransition(props) {
    var child;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _reactTransitionGroup.Transition), {
        timeout: {
            enter: 0,
            exit: 350
        },
        ...props,
        children: (state)=>(0, _reactDefault.default).Children.map(props.children, (child)=>child && /*#__PURE__*/ (0, _reactDefault.default).cloneElement(child, {
                    isOpen: !!OPEN_STATES[state]
                }))
    });
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","react-transition-group":[["Transition","gnC7I","default"]],"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gnC7I":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UNMOUNTED", ()=>UNMOUNTED);
parcelHelpers.export(exports, "EXITED", ()=>EXITED);
parcelHelpers.export(exports, "ENTERING", ()=>ENTERING);
parcelHelpers.export(exports, "ENTERED", ()=>ENTERED);
parcelHelpers.export(exports, "EXITING", ()=>EXITING);
var _objectWithoutPropertiesLoose = require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
var _inheritsLoose = require("@babel/runtime/helpers/esm/inheritsLoose");
var _inheritsLooseDefault = parcelHelpers.interopDefault(_inheritsLoose);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
var _config = require("./config");
var _configDefault = parcelHelpers.interopDefault(_config);
var _propTypes1 = require("./utils/PropTypes");
var _transitionGroupContext = require("./TransitionGroupContext");
var _transitionGroupContextDefault = parcelHelpers.interopDefault(_transitionGroupContext);
var _reflow = require("./utils/reflow");
var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */ var Transition = /*#__PURE__*/ function(_React$Component) {
    (0, _inheritsLooseDefault.default)(Transition, _React$Component);
    function Transition(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context; // In the context of a TransitionGroup all enters are really appears
        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;
        if (props.in) {
            if (appear) {
                initialStatus = EXITED;
                _this.appearStatus = ENTERING;
            } else initialStatus = ENTERED;
        } else if (props.unmountOnExit || props.mountOnEnter) initialStatus = UNMOUNTED;
        else initialStatus = EXITED;
        _this.state = {
            status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
    }
    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;
        if (nextIn && prevState.status === UNMOUNTED) return {
            status: EXITED
        };
        return null;
    } // getSnapshotBeforeUpdate(prevProps) {
    ;
    var _proto = Transition.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;
        if (prevProps !== this.props) {
            var status = this.state.status;
            if (this.props.in) {
                if (status !== ENTERING && status !== ENTERED) nextStatus = ENTERING;
            } else if (status === ENTERING || status === ENTERED) nextStatus = EXITING;
        }
        this.updateStatus(false, nextStatus);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
    };
    _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;
        if (timeout != null && typeof timeout !== 'number') {
            exit = timeout.exit;
            enter = timeout.enter; // TODO: remove fallback for next major
            appear = timeout.appear !== undefined ? timeout.appear : enter;
        }
        return {
            exit: exit,
            enter: enter,
            appear: appear
        };
    };
    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) mounting = false;
        if (nextStatus !== null) {
            // nextStatus will always be ENTERING or EXITING.
            this.cancelNextCallback();
            if (nextStatus === ENTERING) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var node = this.props.nodeRef ? this.props.nodeRef.current : (0, _reactDomDefault.default).findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
                    // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
                    // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.
                    if (node) (0, _reflow.forceReflow)(node);
                }
                this.performEnter(mounting);
            } else this.performExit();
        } else if (this.props.unmountOnExit && this.state.status === EXITED) this.setState({
            status: UNMOUNTED
        });
    };
    _proto.performEnter = function performEnter(mounting) {
        var _this2 = this;
        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;
        var _ref2 = this.props.nodeRef ? [
            appearing
        ] : [
            (0, _reactDomDefault.default).findDOMNode(this),
            appearing
        ], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
        // if we are mounting and running this it means appear _must_ be set
        if (!mounting && !enter || (0, _configDefault.default).disabled) {
            this.safeSetState({
                status: ENTERED
            }, function() {
                _this2.props.onEntered(maybeNode);
            });
            return;
        }
        this.props.onEnter(maybeNode, maybeAppearing);
        this.safeSetState({
            status: ENTERING
        }, function() {
            _this2.props.onEntering(maybeNode, maybeAppearing);
            _this2.onTransitionEnd(enterTimeout, function() {
                _this2.safeSetState({
                    status: ENTERED
                }, function() {
                    _this2.props.onEntered(maybeNode, maybeAppearing);
                });
            });
        });
    };
    _proto.performExit = function performExit() {
        var _this3 = this;
        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        var maybeNode = this.props.nodeRef ? undefined : (0, _reactDomDefault.default).findDOMNode(this); // no exit animation skip right to EXITED
        if (!exit || (0, _configDefault.default).disabled) {
            this.safeSetState({
                status: EXITED
            }, function() {
                _this3.props.onExited(maybeNode);
            });
            return;
        }
        this.props.onExit(maybeNode);
        this.safeSetState({
            status: EXITING
        }, function() {
            _this3.props.onExiting(maybeNode);
            _this3.onTransitionEnd(timeouts.exit, function() {
                _this3.safeSetState({
                    status: EXITED
                }, function() {
                    _this3.props.onExited(maybeNode);
                });
            });
        });
    };
    _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
            this.nextCallback.cancel();
            this.nextCallback = null;
        }
    };
    _proto.safeSetState = function safeSetState(nextState, callback) {
        // This shouldn't be necessary, but there are weird race conditions with
        // setState callbacks and unmounting in testing, so always make sure that
        // we can cancel any pending setState callbacks after we unmount.
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
    };
    _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;
        var active = true;
        this.nextCallback = function(event) {
            if (active) {
                active = false;
                _this4.nextCallback = null;
                callback(event);
            }
        };
        this.nextCallback.cancel = function() {
            active = false;
        };
        return this.nextCallback;
    };
    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
        this.setNextCallback(handler);
        var node = this.props.nodeRef ? this.props.nodeRef.current : (0, _reactDomDefault.default).findDOMNode(this);
        var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
        if (!node || doesNotHaveTimeoutOrListener) {
            setTimeout(this.nextCallback, 0);
            return;
        }
        if (this.props.addEndListener) {
            var _ref3 = this.props.nodeRef ? [
                this.nextCallback
            ] : [
                node,
                this.nextCallback
            ], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
            this.props.addEndListener(maybeNode, maybeNextCallback);
        }
        if (timeout != null) setTimeout(this.nextCallback, timeout);
    };
    _proto.render = function render() {
        var status = this.state.status;
        if (status === UNMOUNTED) return null;
        var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = (0, _objectWithoutPropertiesLooseDefault.default)(_this$props, [
            "children",
            "in",
            "mountOnEnter",
            "unmountOnExit",
            "appear",
            "enter",
            "exit",
            "timeout",
            "addEndListener",
            "onEnter",
            "onEntering",
            "onEntered",
            "onExit",
            "onExiting",
            "onExited",
            "nodeRef"
        ]);
        return(/*#__PURE__*/ // allows for nested Transitions
        (0, _reactDefault.default).createElement((0, _transitionGroupContextDefault.default).Provider, {
            value: null
        }, typeof children === 'function' ? children(status, childProps) : (0, _reactDefault.default).cloneElement((0, _reactDefault.default).Children.only(children), childProps)));
    };
    return Transition;
}((0, _reactDefault.default).Component);
Transition.contextType = (0, _transitionGroupContextDefault.default);
Transition.propTypes = {}; // Name the function so it is clearer in the documentation
function noop() {}
Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
exports.default = Transition;

},{"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"loIhw","@babel/runtime/helpers/esm/inheritsLoose":"kMtw6","prop-types":"3ORVZ","react":"gOP0N","react-dom":"gOP0N","./config":"aYA8r","./utils/PropTypes":"8pRcx","./TransitionGroupContext":"3wdYQ","./utils/reflow":"cCgHp","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"loIhw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_objectWithoutPropertiesLoose);
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kMtw6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_inheritsLoose);
var _setPrototypeOfJs = require("./setPrototypeOf.js");
var _setPrototypeOfJsDefault = parcelHelpers.interopDefault(_setPrototypeOfJs);
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    (0, _setPrototypeOfJsDefault.default)(subClass, superClass);
}

},{"./setPrototypeOf.js":"bMbjF","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bMbjF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_setPrototypeOf);
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3ORVZ":[function(require,module,exports,__globalThis) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactIs, throwOnDirectAccess;
// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
module.exports = require("ed6da1efdf0843df")();

},{"ed6da1efdf0843df":"dHC7a"}],"dHC7a":[function(require,module,exports,__globalThis) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var ReactPropTypesSecret = require("a14ca52499881b1e");
function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
module.exports = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) // It is still safe when called from React.
        return;
        var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        err.name = 'Invariant Violation';
        throw err;
    }
    shim.isRequired = shim;
    function getShim() {
        return shim;
    }
    // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};

},{"a14ca52499881b1e":"inFzE"}],"inFzE":[function(require,module,exports,__globalThis) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

},{}],"aYA8r":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    disabled: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8pRcx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeoutsShape", ()=>timeoutsShape);
parcelHelpers.export(exports, "classNamesShape", ()=>classNamesShape);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var timeoutsShape = null;
var classNamesShape = null;

},{"prop-types":"3ORVZ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3wdYQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
exports.default = (0, _reactDefault.default).createContext(null);

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cCgHp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "forceReflow", ()=>forceReflow);
var forceReflow = function forceReflow(node) {
    return node.scrollTop;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eaaBl":[function(require,module,exports,__globalThis) {
module.exports["react-spectrum-Modal"] = `PDo2aW_react-spectrum-Modal`;
module.exports["react-spectrum-Modal-wrapper"] = `PDo2aW_react-spectrum-Modal-wrapper`;
module.exports["react-spectrum-Popover"] = `PDo2aW_react-spectrum-Popover`;
module.exports["react-spectrum-Tray"] = `PDo2aW_react-spectrum-Tray`;
module.exports["spectrum-Dialog-content"] = `PDo2aW_spectrum-Dialog-content`;
module.exports["spectrum-Modal"] = `PDo2aW_spectrum-Modal`;
module.exports["spectrum-Modal-wrapper"] = `PDo2aW_spectrum-Modal-wrapper`;
module.exports["spectrum-Popover"] = `PDo2aW_spectrum-Popover`;
module.exports["spectrum-Tray"] = `PDo2aW_spectrum-Tray`;

},{}],"6KQa1":[function(require,module,exports,__globalThis) {
module.exports["i18nFontFamily"] = `p6aKLq_i18nFontFamily`;
module.exports["is-exiting"] = `p6aKLq_is-exiting`;
module.exports["spectrum-overlay--open"] = `p6aKLq_spectrum-overlay--open`;
module.exports["is-open"] = `p6aKLq_is-open ${module.exports["spectrum-overlay--open"]}`;
module.exports["spectrum-overlay--bottom--open"] = `p6aKLq_spectrum-overlay--bottom--open`;
module.exports["is-open--bottom"] = `p6aKLq_is-open--bottom ${module.exports["spectrum-overlay--bottom--open"]}`;
module.exports["spectrum-overlay--left--open"] = `p6aKLq_spectrum-overlay--left--open`;
module.exports["is-open--left"] = `p6aKLq_is-open--left ${module.exports["spectrum-overlay--left--open"]}`;
module.exports["spectrum-overlay--right--open"] = `p6aKLq_spectrum-overlay--right--open`;
module.exports["is-open--right"] = `p6aKLq_is-open--right ${module.exports["spectrum-overlay--right--open"]}`;
module.exports["spectrum-overlay--top--open"] = `p6aKLq_spectrum-overlay--top--open`;
module.exports["is-open--top"] = `p6aKLq_is-open--top ${module.exports["spectrum-overlay--top--open"]}`;
module.exports["spectrum-FocusRing-ring"] = `p6aKLq_spectrum-FocusRing-ring`;
module.exports["spectrum-FocusRing"] = `p6aKLq_spectrum-FocusRing ${module.exports["spectrum-FocusRing-ring"]}`;
module.exports["spectrum-FocusRing--quiet"] = `p6aKLq_spectrum-FocusRing--quiet`;
module.exports["spectrum-overlay"] = `p6aKLq_spectrum-overlay`;
module.exports["spectrum-Popover"] = `p6aKLq_spectrum-Popover ${module.exports["spectrum-overlay"]}`;
module.exports["spectrum-Popover--bottom"] = `p6aKLq_spectrum-Popover--bottom`;
module.exports["spectrum-Popover--dialog"] = `p6aKLq_spectrum-Popover--dialog`;
module.exports["spectrum-Popover--left"] = `p6aKLq_spectrum-Popover--left`;
module.exports["spectrum-Popover--right"] = `p6aKLq_spectrum-Popover--right`;
module.exports["spectrum-Popover--top"] = `p6aKLq_spectrum-Popover--top`;
module.exports["spectrum-Popover--withTip"] = `p6aKLq_spectrum-Popover--withTip`;
module.exports["spectrum-Popover-tip"] = `p6aKLq_spectrum-Popover-tip`;
module.exports["spectrum-Popover-tip-triangle"] = `p6aKLq_spectrum-Popover-tip-triangle`;

},{}],"bBlQA":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Underlay", ()=>Underlay);
var _jsxRuntime = require("preact/jsx-runtime");
var _classNamesTs = require("../utils/classNames.ts");
var _isScrollableTs = require("../../../../../../../../vendor/react-aria/exports/private/utils/isScrollable.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _varsCss = require("../../../spectrum-css-temp/components/underlay/vars.css");
var _varsCssDefault = parcelHelpers.interopDefault(_varsCss);
function Underlay({ isOpen, isTransparent, ...otherProps }) {
    let pageHeight = undefined;
    if (typeof document !== 'undefined') {
        let scrollingElement = (0, _isScrollableTs.isScrollable)(document.body) ? document.body : document.scrollingElement || document.documentElement;
        // Prevent Firefox from adding scrollbars when the page has a fractional height.
        let fractionalHeightDifference = scrollingElement.getBoundingClientRect().height % 1;
        pageHeight = scrollingElement.scrollHeight - fractionalHeightDifference;
    }
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        "data-testid": "underlay",
        ...otherProps,
        // Cover the entire document so iOS 26 Safari doesn't clip the underlay to the inner viewport.
        style: {
            height: pageHeight
        },
        className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Underlay', {
            'is-open': isOpen,
            'spectrum-Underlay--transparent': isTransparent
        })
    });
}

},{"preact/jsx-runtime":"b2Fbn","../utils/classNames.ts":"dsWbb","../../../../../../../../vendor/react-aria/exports/private/utils/isScrollable.ts":"2UC33","react":"gOP0N","../../../spectrum-css-temp/components/underlay/vars.css":"9gA2T","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9gA2T":[function(require,module,exports,__globalThis) {
module.exports["i18nFontFamily"] = `CctUYa_i18nFontFamily`;
module.exports["spectrum-overlay--open"] = `CctUYa_spectrum-overlay--open`;
module.exports["is-open"] = `CctUYa_is-open ${module.exports["spectrum-overlay--open"]}`;
module.exports["spectrum-FocusRing-ring"] = `CctUYa_spectrum-FocusRing-ring`;
module.exports["spectrum-FocusRing"] = `CctUYa_spectrum-FocusRing ${module.exports["spectrum-FocusRing-ring"]}`;
module.exports["spectrum-FocusRing--quiet"] = `CctUYa_spectrum-FocusRing--quiet`;
module.exports["spectrum-overlay"] = `CctUYa_spectrum-overlay`;
module.exports["spectrum-Underlay"] = `CctUYa_spectrum-Underlay ${module.exports["spectrum-overlay"]}`;
module.exports["spectrum-Underlay--transparent"] = `CctUYa_spectrum-Underlay--transparent`;
module.exports["spectrum-overlay--bottom--open"] = `CctUYa_spectrum-overlay--bottom--open`;
module.exports["spectrum-overlay--left--open"] = `CctUYa_spectrum-overlay--left--open`;
module.exports["spectrum-overlay--right--open"] = `CctUYa_spectrum-overlay--right--open`;
module.exports["spectrum-overlay--top--open"] = `CctUYa_spectrum-overlay--top--open`;

},{}],"j6qYR":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Tray", ()=>Tray);
var _jsxRuntime = require("preact/jsx-runtime");
var _useModalOverlayTs = require("../../../../../../../../vendor/react-aria/exports/useModalOverlay.ts");
var _classNamesTs = require("../utils/classNames.ts");
var _overlayTs = require("../../../../../../../../vendor/react-aria/exports/Overlay.ts");
var _overlayTsx = require("./Overlay.tsx");
var _overlaysCss = require("./overlays.css");
var _overlaysCssDefault = parcelHelpers.interopDefault(_overlaysCss);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _varsCss = require("../../../spectrum-css-temp/components/tray/vars.css");
var _varsCssDefault = parcelHelpers.interopDefault(_varsCss);
var _underlayTsx = require("./Underlay.tsx");
var _useDOMRefTs = require("../utils/useDOMRef.ts");
var _useObjectRefTs = require("../../../../../../../../vendor/react-aria/exports/useObjectRef.ts");
var _stylePropsTs = require("../utils/styleProps.ts");
var _useViewportSizeTs = require("../../../../../../../../vendor/react-aria/exports/private/utils/useViewportSize.ts");
const Tray = /*#__PURE__*/ (0, _react.forwardRef)(function Tray(props, ref) {
    let { children, state, ...otherProps } = props;
    let domRef = (0, _useDOMRefTs.useDOMRef)(ref);
    let wrapperRef = (0, _react.useRef)(null);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _overlayTsx.Overlay), {
        ...otherProps,
        isOpen: state.isOpen,
        nodeRef: wrapperRef,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(TrayWrapper, {
            ...props,
            wrapperRef: wrapperRef,
            ref: domRef,
            children: children
        })
    });
});
let TrayWrapper = /*#__PURE__*/ (0, _react.forwardRef)(function(props, ref) {
    let { children, isOpen, isFixedHeight, state, wrapperRef } = props;
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(props);
    let objRef = (0, _useObjectRefTs.useObjectRef)(ref);
    let { modalProps, underlayProps } = (0, _useModalOverlayTs.useModalOverlay)({
        ...props,
        isDismissable: true
    }, state, objRef);
    // We need to measure the window's height in JS rather than using percentages in CSS
    // so that contents (e.g. menu) can inherit the max-height properly. Using percentages
    // does not work properly because there is nothing to base the percentage on.
    // We cannot use vh units because mobile browsers adjust the window height dynamically
    // when the address bar/bottom toolbars show and hide on scroll and vh units are fixed.
    // Also, the visual viewport is smaller than the layout viewport when the virtual keyboard
    // is up, so use the VisualViewport API to ensure the tray is displayed above the keyboard.
    let viewport = (0, _useViewportSizeTs.useViewportSize)();
    let wrapperStyle = {
        '--spectrum-visual-viewport-height': viewport.height + 'px',
        // position: fixed elements are clipped by Safari on iOS 26, so we use
        // position: absolute and manually set the top to the scrollY.
        // The page can't scroll while the tray is open so this doesn't need to update.
        top: typeof window !== 'undefined' ? window.scrollY : 0
    };
    let wrapperClassName = (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Tray-wrapper');
    let className = (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Tray', {
        'is-open': isOpen,
        'spectrum-Tray--fixedHeight': isFixedHeight
    }, (0, _classNamesTs.classNames)((0, _overlaysCssDefault.default), 'spectrum-Tray', 'react-spectrum-Tray'), styleProps.className);
    // Attach Transition's nodeRef to outer most wrapper for node.reflow: https://github.com/reactjs/react-transition-group/blob/c89f807067b32eea6f68fd6c622190d88ced82e2/src/Transition.js#L231
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        ref: wrapperRef,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _underlayTsx.Underlay), {
                ...underlayProps,
                isOpen: isOpen
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                className: wrapperClassName,
                style: wrapperStyle,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                    ...styleProps,
                    ...modalProps,
                    className: className,
                    ref: objRef,
                    "data-testid": "tray",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _overlayTs.DismissButton), {
                            onDismiss: state.close
                        }),
                        children,
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _overlayTs.DismissButton), {
                            onDismiss: state.close
                        })
                    ]
                })
            })
        ]
    });
});

},{"preact/jsx-runtime":"b2Fbn","../../../../../../../../vendor/react-aria/exports/useModalOverlay.ts":"8dX3q","../utils/classNames.ts":"dsWbb","../../../../../../../../vendor/react-aria/exports/Overlay.ts":"9Jo8j","./Overlay.tsx":"28esY","./overlays.css":"eaaBl","react":"gOP0N","../../../spectrum-css-temp/components/tray/vars.css":"3FZyp","./Underlay.tsx":"bBlQA","../utils/useDOMRef.ts":"ltu01","../../../../../../../../vendor/react-aria/exports/useObjectRef.ts":"ec0NJ","../utils/styleProps.ts":"7B0Vi","../../../../../../../../vendor/react-aria/exports/private/utils/useViewportSize.ts":"kU0Hn","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3FZyp":[function(require,module,exports,__globalThis) {
module.exports["i18nFontFamily"] = `ZLfIMa_i18nFontFamily`;
module.exports["spectrum-overlay--open"] = `ZLfIMa_spectrum-overlay--open`;
module.exports["is-open"] = `ZLfIMa_is-open ${module.exports["spectrum-overlay--open"]}`;
module.exports["spectrum-FocusRing-ring"] = `ZLfIMa_spectrum-FocusRing-ring`;
module.exports["spectrum-FocusRing"] = `ZLfIMa_spectrum-FocusRing ${module.exports["spectrum-FocusRing-ring"]}`;
module.exports["spectrum-FocusRing--quiet"] = `ZLfIMa_spectrum-FocusRing--quiet`;
module.exports["spectrum-overlay"] = `ZLfIMa_spectrum-overlay`;
module.exports["spectrum-Tray"] = `ZLfIMa_spectrum-Tray ${module.exports["spectrum-overlay"]}`;
module.exports["spectrum-Tray--fixedHeight"] = `ZLfIMa_spectrum-Tray--fixedHeight`;
module.exports["spectrum-Tray-wrapper"] = `ZLfIMa_spectrum-Tray-wrapper`;
module.exports["spectrum-overlay--bottom--open"] = `ZLfIMa_spectrum-overlay--bottom--open`;
module.exports["spectrum-overlay--left--open"] = `ZLfIMa_spectrum-overlay--left--open`;
module.exports["spectrum-overlay--right--open"] = `ZLfIMa_spectrum-overlay--right--open`;
module.exports["spectrum-overlay--top--open"] = `ZLfIMa_spectrum-overlay--top--open`;

},{}],"iyill":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Tooltip", ()=>Tooltip);
var _jsxRuntime = require("preact/jsx-runtime");
var _alertSmallTsx = require("../../../../@spectrum-icons/ui/src/AlertSmall.tsx");
var _alertSmallTsxDefault = parcelHelpers.interopDefault(_alertSmallTsx);
var _useTooltipTriggerTs = require("../../../../../../../../vendor/react-aria/exports/useTooltipTrigger.ts");
var _classNamesTs = require("../utils/classNames.ts");
var _useDOMRefTs = require("../utils/useDOMRef.ts");
var _infoSmallTsx = require("../../../../@spectrum-icons/ui/src/InfoSmall.tsx");
var _infoSmallTsxDefault = parcelHelpers.interopDefault(_infoSmallTsx);
var _mergePropsTs = require("../../../../../../../../vendor/react-aria/exports/mergeProps.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _varsCss = require("../../../spectrum-css-temp/components/tooltip/vars.css");
var _varsCssDefault = parcelHelpers.interopDefault(_varsCss);
var _successSmallTsx = require("../../../../@spectrum-icons/ui/src/SuccessSmall.tsx");
var _successSmallTsxDefault = parcelHelpers.interopDefault(_successSmallTsx);
var _contextTs = require("./context.ts");
var _stylePropsTs = require("../utils/styleProps.ts");
let iconMap = {
    info: (0, _infoSmallTsxDefault.default),
    positive: (0, _successSmallTsxDefault.default),
    negative: (0, _alertSmallTsxDefault.default)
};
const Tooltip = /*#__PURE__*/ (0, _reactDefault.default).forwardRef(function Tooltip(props, ref) {
    let { ref: overlayRef, arrowProps, state, arrowRef, ...tooltipProviderProps } = (0, _react.useContext)((0, _contextTs.TooltipContext));
    let defaultRef = (0, _react.useRef)(null);
    overlayRef = overlayRef || defaultRef;
    let backupPlacement = props.placement;
    props = (0, _mergePropsTs.mergeProps)(props, tooltipProviderProps);
    let { variant = 'neutral', placement, isOpen, showIcon, ...otherProps } = props;
    if (placement == null) placement = backupPlacement ?? 'top';
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(otherProps);
    let { tooltipProps } = (0, _useTooltipTriggerTs.useTooltip)(props, state);
    // Sync ref with overlayRef from context.
    (0, _react.useImperativeHandle)(ref, ()=>(0, _useDOMRefTs.createDOMRef)(overlayRef));
    let Icon = iconMap[variant];
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        ...styleProps,
        ...tooltipProps,
        className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Tooltip', `spectrum-Tooltip--${variant}`, `spectrum-Tooltip--${placement}`, {
            'is-open': isOpen,
            [`is-open--${placement}`]: isOpen
        }, styleProps.className),
        ref: overlayRef,
        children: [
            showIcon && variant !== 'neutral' && /*#__PURE__*/ (0, _jsxRuntime.jsx)(Icon, {
                UNSAFE_className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Tooltip-typeIcon'),
                "aria-hidden": true
            }),
            props.children && /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Tooltip-label'),
                children: props.children
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                ...arrowProps,
                ref: arrowRef,
                className: (0, _classNamesTs.classNames)((0, _varsCssDefault.default), 'spectrum-Tooltip-tip')
            })
        ]
    });
});

},{"preact/jsx-runtime":"b2Fbn","../../../../@spectrum-icons/ui/src/AlertSmall.tsx":"4za0B","../../../../../../../../vendor/react-aria/exports/useTooltipTrigger.ts":"6Jxy7","../utils/classNames.ts":"dsWbb","../utils/useDOMRef.ts":"ltu01","../../../../@spectrum-icons/ui/src/InfoSmall.tsx":"cxRYK","../../../../../../../../vendor/react-aria/exports/mergeProps.ts":"jycxS","react":"gOP0N","../../../spectrum-css-temp/components/tooltip/vars.css":"eKAhz","../../../../@spectrum-icons/ui/src/SuccessSmall.tsx":"dlISa","./context.ts":"g0Af9","../utils/styleProps.ts":"7B0Vi","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4za0B":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>AlertSmall);
var _jsxRuntime = require("preact/jsx-runtime");
var _alertSmallJs = require("@adobe/react-spectrum-ui/dist/AlertSmall.js");
var _uiiconTsx = require("../../../@adobe/react-spectrum/src/icon/UIIcon.tsx");
var _providerTs = require("../../../@adobe/react-spectrum/exports/Provider.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const ExpressIcon = (props)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)("svg", {
        viewBox: "0 0 14 14",
        ...props,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
            d: "M12.717 8.678 9 2.175C8.422 1.103 7.058.689 5.954 1.25a2.23 2.23 0 0 0-.95.92L1.278 8.687a2.2 2.2 0 0 0 .058 2.238A2.26 2.26 0 0 0 3.278 12h7.445a2.26 2.26 0 0 0 1.941-1.075 2.2 2.2 0 0 0 .053-2.247M6.133 4.133c0-.478.388-.866.866-.867.478 0 .867.388.868.866v3a.868.868 0 0 1-1.734.002zM7 11.1c-.661 0-1.2-.538-1.2-1.2S6.338 8.7 7 8.7s1.2.538 1.2 1.2-.538 1.2-1.2 1.2"
        })
    });
ExpressIcon.displayName = (0, _alertSmallJs.AlertSmall).displayName;
function AlertSmall(props) {
    let express = false;
    try {
        express = (0, _providerTs.useProvider)().theme.global.express;
    } catch  {
    // ignore
    }
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _uiiconTsx.UIIcon), {
        ...props,
        children: express ? /*#__PURE__*/ (0, _jsxRuntime.jsx)(ExpressIcon, {}) : /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _alertSmallJs.AlertSmall), {})
    });
}

},{"preact/jsx-runtime":"b2Fbn","@adobe/react-spectrum-ui/dist/AlertSmall.js":"iyPzk","../../../@adobe/react-spectrum/src/icon/UIIcon.tsx":"96LzK","../../../@adobe/react-spectrum/exports/Provider.ts":"ebIlC","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iyPzk":[function(require,module,exports,__globalThis) {
/**
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
**/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AlertSmall = AlertSmall;
var _react = _interopRequireDefault(require("f9d12da5d448005"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function AlertSmall(_ref) {
    var _ref$scale = _ref.scale, scale = _ref$scale === void 0 ? 'M' : _ref$scale, props = _objectWithoutProperties(_ref, [
        "scale"
    ]);
    return _react["default"].createElement("svg", _extends({}, props, props), scale === 'L' && _react["default"].createElement("path", {
        d: "M8.564 1.289L.2 16.256A.5.5 0 0 0 .636 17h16.728a.5.5 0 0 0 .436-.744L9.436 1.289a.5.5 0 0 0-.872 0zM10 14.75a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25zm0-3a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-6a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25z"
    }), scale === 'M' && _react["default"].createElement("path", {
        d: "M6.66 1.003L.157 12.643a.389.389 0 0 0 .339.58h13.01a.389.389 0 0 0 .34-.58L7.338 1.004a.389.389 0 0 0-.678 0zm1.118 10.47a.194.194 0 0 1-.195.194H6.417a.194.194 0 0 1-.195-.195v-1.166a.194.194 0 0 1 .195-.195h1.166a.194.194 0 0 1 .195.195zm0-2.334a.194.194 0 0 1-.195.194H6.417a.194.194 0 0 1-.195-.194V4.472a.194.194 0 0 1 .195-.194h1.166a.194.194 0 0 1 .195.194z"
    }));
}
AlertSmall.displayName = 'AlertSmall';

},{"f9d12da5d448005":"gOP0N"}],"cxRYK":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>InfoSmall);
var _jsxRuntime = require("preact/jsx-runtime");
var _infoSmallJs = require("@adobe/react-spectrum-ui/dist/InfoSmall.js");
var _uiiconTsx = require("../../../@adobe/react-spectrum/src/icon/UIIcon.tsx");
var _providerTs = require("../../../@adobe/react-spectrum/exports/Provider.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const ExpressIcon = (props)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)("svg", {
        viewBox: "0 0 14 14",
        ...props,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
            d: "M7 1a6 6 0 1 0 6 6 6.007 6.007 0 0 0-6-6m.867 8.677a.868.868 0 0 1-1.734 0V7a.868.868 0 0 1 1.734 0zM7 5.4c-.662 0-1.2-.538-1.2-1.2S6.338 3 7 3s1.2.539 1.2 1.2S7.662 5.4 7 5.4"
        })
    });
ExpressIcon.displayName = (0, _infoSmallJs.InfoSmall).displayName;
function InfoSmall(props) {
    let express = false;
    try {
        express = (0, _providerTs.useProvider)().theme.global.express;
    } catch  {
    // ignore
    }
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _uiiconTsx.UIIcon), {
        ...props,
        children: express ? /*#__PURE__*/ (0, _jsxRuntime.jsx)(ExpressIcon, {}) : /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _infoSmallJs.InfoSmall), {})
    });
}

},{"preact/jsx-runtime":"b2Fbn","@adobe/react-spectrum-ui/dist/InfoSmall.js":"ihU9C","../../../@adobe/react-spectrum/src/icon/UIIcon.tsx":"96LzK","../../../@adobe/react-spectrum/exports/Provider.ts":"ebIlC","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ihU9C":[function(require,module,exports,__globalThis) {
/**
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
**/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InfoSmall = InfoSmall;
var _react = _interopRequireDefault(require("a2a2a504a5f1946"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function InfoSmall(_ref) {
    var _ref$scale = _ref.scale, scale = _ref$scale === void 0 ? 'M' : _ref$scale, props = _objectWithoutProperties(_ref, [
        "scale"
    ]);
    return _react["default"].createElement("svg", _extends({}, props, props), scale === 'L' && _react["default"].createElement("path", {
        d: "M9 1a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm-.15 2.15a1.359 1.359 0 0 1 1.431 1.283q.004.064.001.129A1.332 1.332 0 0 1 8.85 5.994a1.353 1.353 0 0 1-1.432-1.433 1.359 1.359 0 0 1 1.304-1.412q.064-.002.128.001zM11 13.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H8V9h-.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V12h.5a.5.5 0 0 1 .5.5z"
    }), scale === 'M' && _react["default"].createElement("path", {
        d: "M7 .778A6.222 6.222 0 1 0 13.222 7 6.222 6.222 0 0 0 7 .778zM6.883 2.45a1.057 1.057 0 0 1 1.113.998q.003.05.001.1a1.036 1.036 0 0 1-1.114 1.114A1.052 1.052 0 0 1 5.77 3.547 1.057 1.057 0 0 1 6.784 2.45q.05-.002.1.001zm1.673 8.05a.389.389 0 0 1-.39.389H5.834a.389.389 0 0 1-.389-.389v-.778a.389.389 0 0 1 .39-.389h.388V7h-.389a.389.389 0 0 1-.389-.389v-.778a.389.389 0 0 1 .39-.389h1.555a.389.389 0 0 1 .389.39v3.5h.389a.389.389 0 0 1 .389.388z"
    }));
}
InfoSmall.displayName = 'InfoSmall';

},{"a2a2a504a5f1946":"gOP0N"}],"eKAhz":[function(require,module,exports,__globalThis) {
module.exports["i18nFontFamily"] = `_4j8kDW_i18nFontFamily`;
module.exports["is-focused"] = `_4j8kDW_is-focused`;
module.exports["spectrum-overlay--open"] = `_4j8kDW_spectrum-overlay--open`;
module.exports["is-open"] = `_4j8kDW_is-open ${module.exports["spectrum-overlay--open"]}`;
module.exports["spectrum-overlay--bottom--open"] = `_4j8kDW_spectrum-overlay--bottom--open`;
module.exports["is-open--bottom"] = `_4j8kDW_is-open--bottom ${module.exports["spectrum-overlay--bottom--open"]}`;
module.exports["spectrum-overlay--left--open"] = `_4j8kDW_spectrum-overlay--left--open`;
module.exports["is-open--left"] = `_4j8kDW_is-open--left ${module.exports["spectrum-overlay--left--open"]}`;
module.exports["spectrum-overlay--right--open"] = `_4j8kDW_spectrum-overlay--right--open`;
module.exports["is-open--right"] = `_4j8kDW_is-open--right ${module.exports["spectrum-overlay--right--open"]}`;
module.exports["spectrum-overlay--top--open"] = `_4j8kDW_spectrum-overlay--top--open`;
module.exports["is-open--top"] = `_4j8kDW_is-open--top ${module.exports["spectrum-overlay--top--open"]}`;
module.exports["spectrum-FocusRing-ring"] = `_4j8kDW_spectrum-FocusRing-ring`;
module.exports["spectrum-FocusRing"] = `_4j8kDW_spectrum-FocusRing ${module.exports["spectrum-FocusRing-ring"]}`;
module.exports["spectrum-FocusRing--quiet"] = `_4j8kDW_spectrum-FocusRing--quiet`;
module.exports["spectrum-overlay"] = `_4j8kDW_spectrum-overlay`;
module.exports["spectrum-Tooltip"] = `_4j8kDW_spectrum-Tooltip ${module.exports["spectrum-overlay"]}`;
module.exports["spectrum-Tooltip--bottom"] = `_4j8kDW_spectrum-Tooltip--bottom`;
module.exports["spectrum-Tooltip--error"] = `_4j8kDW_spectrum-Tooltip--error`;
module.exports["spectrum-Tooltip--help"] = `_4j8kDW_spectrum-Tooltip--help`;
module.exports["spectrum-Tooltip--info"] = `_4j8kDW_spectrum-Tooltip--info`;
module.exports["spectrum-Tooltip--left"] = `_4j8kDW_spectrum-Tooltip--left`;
module.exports["spectrum-Tooltip--negative"] = `_4j8kDW_spectrum-Tooltip--negative`;
module.exports["spectrum-Tooltip--positive"] = `_4j8kDW_spectrum-Tooltip--positive`;
module.exports["spectrum-Tooltip--right"] = `_4j8kDW_spectrum-Tooltip--right`;
module.exports["spectrum-Tooltip--success"] = `_4j8kDW_spectrum-Tooltip--success`;
module.exports["spectrum-Tooltip--top"] = `_4j8kDW_spectrum-Tooltip--top`;
module.exports["spectrum-Tooltip-label"] = `_4j8kDW_spectrum-Tooltip-label`;
module.exports["spectrum-Tooltip-tip"] = `_4j8kDW_spectrum-Tooltip-tip`;
module.exports["spectrum-Tooltip-typeIcon"] = `_4j8kDW_spectrum-Tooltip-typeIcon`;
module.exports["u-tooltip-showOnHover"] = `_4j8kDW_u-tooltip-showOnHover`;

},{}],"dlISa":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>SuccessSmall);
var _jsxRuntime = require("preact/jsx-runtime");
var _successSmallJs = require("@adobe/react-spectrum-ui/dist/SuccessSmall.js");
var _uiiconTsx = require("../../../@adobe/react-spectrum/src/icon/UIIcon.tsx");
var _providerTs = require("../../../@adobe/react-spectrum/exports/Provider.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const ExpressIcon = (props)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)("svg", {
        viewBox: "0 0 14 14",
        ...props,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
            d: "M11.523 3.057a6 6 0 1 0-9.046 7.887 6 6 0 0 0 9.046-7.887m-1.166 2.275L7.075 9.696a.87.87 0 0 1-.617.342l-.076.004a.86.86 0 0 1-.592-.235L3.55 7.704c-.17-.159-.266-.373-.274-.604s.077-.453.235-.621a.87.87 0 0 1 1.225-.04L6.27 7.881 8.973 4.29a.86.86 0 0 1 .693-.346.867.867 0 0 1 .692 1.388"
        })
    });
ExpressIcon.displayName = (0, _successSmallJs.SuccessSmall).displayName;
function SuccessSmall(props) {
    let express = false;
    try {
        express = (0, _providerTs.useProvider)().theme.global.express;
    } catch  {
    // ignore
    }
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _uiiconTsx.UIIcon), {
        ...props,
        children: express ? /*#__PURE__*/ (0, _jsxRuntime.jsx)(ExpressIcon, {}) : /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _successSmallJs.SuccessSmall), {})
    });
}

},{"preact/jsx-runtime":"b2Fbn","@adobe/react-spectrum-ui/dist/SuccessSmall.js":"dvLWI","../../../@adobe/react-spectrum/src/icon/UIIcon.tsx":"96LzK","../../../@adobe/react-spectrum/exports/Provider.ts":"ebIlC","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dvLWI":[function(require,module,exports,__globalThis) {
/**
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
**/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SuccessSmall = SuccessSmall;
var _react = _interopRequireDefault(require("8b6b3c567e228236"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function SuccessSmall(_ref) {
    var _ref$scale = _ref.scale, scale = _ref$scale === void 0 ? 'M' : _ref$scale, props = _objectWithoutProperties(_ref, [
        "scale"
    ]);
    return _react["default"].createElement("svg", _extends({}, props, props), scale === 'L' && _react["default"].createElement("path", {
        d: "M9 1a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm5.333 4.54l-6.324 8.13a.6.6 0 0 1-.437.23h-.037a.6.6 0 0 1-.425-.176l-3.893-3.9a.6.6 0 0 1 0-.849l.663-.663a.6.6 0 0 1 .848 0L7.4 10.991l5.256-6.754a.6.6 0 0 1 .843-.1l.728.566a.6.6 0 0 1 .106.837z"
    }), scale === 'M' && _react["default"].createElement("path", {
        d: "M7 .778A6.222 6.222 0 1 0 13.222 7 6.222 6.222 0 0 0 7 .778zm4.148 3.53l-4.919 6.324a.467.467 0 0 1-.34.18h-.028a.467.467 0 0 1-.331-.138L2.502 7.641a.467.467 0 0 1 0-.66l.516-.516a.467.467 0 0 1 .66 0l2.078 2.084 4.088-5.254a.467.467 0 0 1 .655-.078l.566.44a.467.467 0 0 1 .083.652z"
    }));
}
SuccessSmall.displayName = 'SuccessSmall';

},{"8b6b3c567e228236":"gOP0N"}],"g0Af9":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "TooltipContext", ()=>TooltipContext);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const TooltipContext = (0, _reactDefault.default).createContext({
    placement: null
});

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gDsBv":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "TooltipTrigger", ()=>_TooltipTrigger);
var _jsxRuntime = require("preact/jsx-runtime");
var _useFocusableTs = require("../../../../../../../../vendor/react-aria/exports/private/interactions/useFocusable.ts");
var _overlayTsx = require("../overlays/Overlay.tsx");
var _useOverlayPositionTs = require("../../../../../../../../vendor/react-aria/exports/useOverlayPosition.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _contextTs = require("./context.ts");
var _useTooltipTriggerStateTs = require("../../../../../../../../vendor/react-stately/exports/useTooltipTriggerState.ts");
var _useLayoutEffectTs = require("../../../../../../../../vendor/react-aria/exports/private/utils/useLayoutEffect.ts");
var _useTooltipTriggerTs = require("../../../../../../../../vendor/react-aria/exports/useTooltipTrigger.ts");
const DEFAULT_OFFSET = -1; // Offset needed to reach 4px/5px (med/large) distance between tooltip and trigger button
const DEFAULT_CROSS_OFFSET = 0;
const DEFAULT_SHOULD_CLOSE_ON_PRESS = true; // Whether the tooltip should close when the trigger is pressed
function TooltipTrigger(props) {
    let { children, crossOffset = DEFAULT_CROSS_OFFSET, isDisabled, offset = DEFAULT_OFFSET, trigger: triggerAction, shouldCloseOnPress = DEFAULT_SHOULD_CLOSE_ON_PRESS } = props;
    let [trigger, tooltip] = (0, _reactDefault.default).Children.toArray(children);
    let state = (0, _useTooltipTriggerStateTs.useTooltipTriggerState)(props);
    let tooltipTriggerRef = (0, _react.useRef)(null);
    let overlayRef = (0, _react.useRef)(null);
    let { triggerProps, tooltipProps } = (0, _useTooltipTriggerTs.useTooltipTrigger)({
        isDisabled,
        trigger: triggerAction,
        shouldCloseOnPress
    }, state, tooltipTriggerRef);
    let [borderRadius, setBorderRadius] = (0, _react.useState)(0);
    (0, _useLayoutEffectTs.useLayoutEffect)(()=>{
        if (overlayRef.current && state.isOpen) {
            let spectrumBorderRadius = window.getComputedStyle(overlayRef.current).borderRadius;
            if (spectrumBorderRadius !== '') setBorderRadius(parseInt(spectrumBorderRadius, 10));
        }
    }, [
        state.isOpen,
        overlayRef
    ]);
    let arrowRef = (0, _react.useRef)(null);
    let [arrowWidth, setArrowWidth] = (0, _react.useState)(0);
    (0, _useLayoutEffectTs.useLayoutEffect)(()=>{
        if (arrowRef.current && state.isOpen) setArrowWidth(arrowRef.current.getBoundingClientRect().width);
    }, [
        state.isOpen,
        arrowRef
    ]);
    let { overlayProps, arrowProps, placement } = (0, _useOverlayPositionTs.useOverlayPosition)({
        placement: props.placement || 'top',
        targetRef: tooltipTriggerRef,
        overlayRef,
        offset,
        crossOffset,
        isOpen: state.isOpen,
        shouldFlip: props.shouldFlip,
        containerPadding: props.containerPadding,
        arrowSize: arrowWidth,
        arrowBoundaryOffset: borderRadius,
        onClose: ()=>state.close(true)
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _useFocusableTs.FocusableProvider), {
        ...triggerProps,
        ref: tooltipTriggerRef,
        children: [
            trigger,
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _contextTs.TooltipContext).Provider, {
                value: {
                    state,
                    placement,
                    ref: overlayRef,
                    UNSAFE_style: overlayProps.style,
                    arrowProps,
                    arrowRef: arrowRef,
                    ...tooltipProps
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _overlayTsx.Overlay), {
                    isOpen: state.isOpen,
                    nodeRef: overlayRef,
                    children: tooltip
                })
            })
        ]
    });
}
// Support TooltipTrigger inside components using CollectionBuilder.
TooltipTrigger.getCollectionNode = function*(props) {
    // Replaced the use of React.Children.toArray because it mutates the key prop.
    let childArray = [];
    (0, _reactDefault.default).Children.forEach(props.children, (child)=>{
        if (/*#__PURE__*/ (0, _reactDefault.default).isValidElement(child)) childArray.push(child);
    });
    let [trigger, tooltip] = childArray;
    yield {
        element: trigger,
        wrapper: (element)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(TooltipTrigger, {
                ...props,
                children: [
                    element,
                    tooltip
                ]
            }, element.key)
    };
};
/**
 * TooltipTrigger wraps around a trigger element and a Tooltip. It handles opening and closing
 * the Tooltip when the user hovers over or focuses the trigger, and positioning the Tooltip
 * relative to the trigger.
 */ // We don't want getCollectionNode to show up in the type definition
let _TooltipTrigger = TooltipTrigger;

},{"preact/jsx-runtime":"b2Fbn","../../../../../../../../vendor/react-aria/exports/private/interactions/useFocusable.ts":"6IFKj","../overlays/Overlay.tsx":"28esY","../../../../../../../../vendor/react-aria/exports/useOverlayPosition.ts":"lXsTF","react":"gOP0N","./context.ts":"g0Af9","../../../../../../../../vendor/react-stately/exports/useTooltipTriggerState.ts":"h8EOP","../../../../../../../../vendor/react-aria/exports/private/utils/useLayoutEffect.ts":"h7M6K","../../../../../../../../vendor/react-aria/exports/useTooltipTrigger.ts":"14AyR","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hZsQd":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useLoadMore", ()=>useLoadMore);
var _react = require("react");
var _useEvent = require("./useEvent");
var _useLayoutEffect = require("./useLayoutEffect");
function useLoadMore(props, ref) {
    let { isLoading, onLoadMore, scrollOffset = 1, items } = props;
    // Handle scrolling, and call onLoadMore when nearing the bottom.
    let isLoadingRef = (0, _react.useRef)(isLoading);
    let prevProps = (0, _react.useRef)(props);
    let onScroll = (0, _react.useCallback)(()=>{
        if (ref.current && !isLoadingRef.current && onLoadMore) {
            let shouldLoadMore = ref.current.scrollHeight - ref.current.scrollTop - ref.current.clientHeight < ref.current.clientHeight * scrollOffset;
            if (shouldLoadMore) {
                isLoadingRef.current = true;
                onLoadMore();
            }
        }
    }, [
        onLoadMore,
        ref,
        scrollOffset
    ]);
    let lastItems = (0, _react.useRef)(items);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        // Only update isLoadingRef if props object actually changed,
        // not if a local state change occurred.
        if (props !== prevProps.current) {
            isLoadingRef.current = isLoading;
            prevProps.current = props;
        }
        // TODO: Eventually this hook will move back into RAC during which we will accept the collection as a option to this hook.
        // We will only load more if the collection has changed after the last load to prevent multiple onLoadMore from being called
        // while the data from the last onLoadMore is being processed by RAC collection.
        let shouldLoadMore = ref?.current && !isLoadingRef.current && onLoadMore && (!items || items !== lastItems.current) && ref.current.clientHeight === ref.current.scrollHeight;
        if (shouldLoadMore) {
            isLoadingRef.current = true;
            onLoadMore?.();
        }
        lastItems.current = items;
    }, [
        isLoading,
        onLoadMore,
        props,
        ref,
        items
    ]);
    // TODO: maybe this should still just return scroll props?
    // Test against case where the ref isn't defined when this is called
    // Think this was a problem when trying to attach to the scrollable body of the table in OnLoadMoreTableBodyScroll
    (0, _useEvent.useEvent)(ref, 'scroll', onScroll);
}

},{"react":"gOP0N","./useEvent":"avf8K","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

