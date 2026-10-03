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
})({"cwLc6":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "ActionGroup", ()=>ActionGroup);
var _jsxRuntime = require("preact/jsx-runtime");
var _actionButtonTsx = require("../button/ActionButton.tsx");
var _useActionGroupTs = require("../../../../../../../../vendor/react-aria/exports/private/actiongroup/useActionGroup.ts");
var _varsCss = require("../../../spectrum-css-temp/components/button/vars.css");
var _varsCssDefault = parcelHelpers.interopDefault(_varsCss);
var _chevronDownMediumTsx = require("../../../../@spectrum-icons/ui/src/ChevronDownMedium.tsx");
var _chevronDownMediumTsxDefault = parcelHelpers.interopDefault(_chevronDownMediumTsx);
var _classNamesTs = require("../utils/classNames.ts");
var _slotsTsx = require("../utils/Slots.tsx");
var _filterDOMPropsTs = require("../../../../../../../../vendor/react-aria/exports/filterDOMProps.ts");
var _focusScopeTs = require("../../../../../../../../vendor/react-aria/exports/FocusScope.ts");
var _indexJs = require("../../intl/actiongroup/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _itemTs = require("../../../../../../../../vendor/react-stately/exports/Item.ts");
var _useListStateTs = require("../../../../../../../../vendor/react-stately/exports/useListState.ts");
var _menuTsx = require("../menu/Menu.tsx");
var _menuTriggerTsx = require("../menu/MenuTrigger.tsx");
var _mergePropsTs = require("../../../../../../../../vendor/react-aria/exports/mergeProps.ts");
var _moreTsx = require("../../../../@spectrum-icons/workflow/src/More.tsx");
var _moreTsxDefault = parcelHelpers.interopDefault(_moreTsx);
var _pressResponderTs = require("../../../../../../../../vendor/react-aria/exports/private/interactions/PressResponder.ts");
var _providerTsx = require("../provider/Provider.tsx");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _varsCss1 = require("../../../spectrum-css-temp/components/actiongroup/vars.css");
var _varsCssDefault1 = parcelHelpers.interopDefault(_varsCss1);
var _textTsx = require("../text/Text.tsx");
var _tooltipTsx = require("../tooltip/Tooltip.tsx");
var _tooltipTriggerTsx = require("../tooltip/TooltipTrigger.tsx");
var _useActionGroupItemTs = require("../../../../../../../../vendor/react-aria/exports/private/actiongroup/useActionGroupItem.ts");
var _useDOMRefTs = require("../utils/useDOMRef.ts");
var _useHoverTs = require("../../../../../../../../vendor/react-aria/exports/useHover.ts");
var _useIdTs = require("../../../../../../../../vendor/react-aria/exports/useId.ts");
var _useLayoutEffectTs = require("../../../../../../../../vendor/react-aria/exports/private/utils/useLayoutEffect.ts");
var _useLocalizedStringFormatterTs = require("../../../../../../../../vendor/react-aria/exports/useLocalizedStringFormatter.ts");
var _useResizeObserverTs = require("../../../../../../../../vendor/react-aria/exports/private/utils/useResizeObserver.ts");
var _stylePropsTs = require("../utils/styleProps.ts");
var _useValueEffectTs = require("../../../../../../../../vendor/react-aria/exports/private/utils/useValueEffect.ts");
const ActionGroup = /*#__PURE__*/ (0, _react.forwardRef)(function ActionGroup(props, ref) {
    props = (0, _providerTsx.useProviderProps)(props);
    props = (0, _slotsTsx.useSlotProps)(props, 'actionGroup');
    let { isEmphasized, density, isJustified, isDisabled, orientation = 'horizontal', isQuiet, staticColor, overflowMode = 'wrap', onAction, buttonLabelBehavior, summaryIcon, ...otherProps } = props;
    let domRef = (0, _useDOMRefTs.useDOMRef)(ref);
    let wrapperRef = (0, _react.useRef)(null);
    let state = (0, _useListStateTs.useListState)({
        ...props,
        suppressTextValueWarning: true
    });
    let { actionGroupProps } = (0, _useActionGroupTs.useActionGroup)(props, state, domRef);
    let isVertical = orientation === 'vertical';
    let providerProps = {
        isEmphasized,
        isDisabled,
        isQuiet
    };
    let { styleProps } = (0, _stylePropsTs.useStyleProps)(props);
    // Only hide button text if every item contains more than just plain text (we assume an icon).
    let isIconCollapsible = (0, _react.useMemo)(()=>[
            ...state.collection
        ].every((item)=>typeof item.rendered !== 'string'), [
        state.collection
    ]);
    let [{ visibleItems, hideButtonText, isMeasuring }, setVisibleItems] = (0, _useValueEffectTs.useValueEffect)({
        visibleItems: state.collection.size,
        hideButtonText: buttonLabelBehavior === 'hide' && isIconCollapsible,
        isMeasuring: false
    });
    let selectionMode = state.selectionManager.selectionMode;
    let updateOverflow = (0, _react.useCallback)(()=>{
        if (overflowMode === 'wrap') return;
        if (orientation === 'vertical' && selectionMode !== 'none') // Collapsing vertical action groups with selection is currently unsupported by Spectrum.
        return;
        let computeVisibleItems = (visibleItems)=>{
            if (domRef.current && wrapperRef.current) {
                let listItems = Array.from(domRef.current.children);
                let containerSize = orientation === 'horizontal' ? wrapperRef.current.getBoundingClientRect().width : wrapperRef.current.getBoundingClientRect().height;
                let isShowingMenu = visibleItems < state.collection.size;
                let calculatedSize = 0;
                let newVisibleItems = 0;
                if (isShowingMenu) {
                    let item = listItems.pop();
                    if (item) calculatedSize += orientation === 'horizontal' ? outerWidth(item, false, true) : outerHeight(item, false, true);
                }
                for (let [i, item] of listItems.entries()){
                    calculatedSize += orientation === 'horizontal' ? outerWidth(item, i === 0, i === listItems.length - 1) : outerHeight(item, i === 0, i === listItems.length - 1);
                    if (Math.round(calculatedSize) <= Math.round(containerSize)) newVisibleItems++;
                    else break;
                }
                // If selection is enabled, and not all of the items fit, collapse all of them into a dropdown
                // immediately rather than having some visible and some not.
                if (selectionMode !== 'none' && newVisibleItems < state.collection.size) return 0;
                return newVisibleItems;
            }
            return visibleItems;
        };
        setVisibleItems(function*() {
            let hideButtonText = buttonLabelBehavior === 'hide' && isIconCollapsible;
            // Update to show all items.
            yield {
                visibleItems: state.collection.size,
                hideButtonText,
                isMeasuring: true
            };
            // Measure, and update to show the items that fit.
            let newVisibleItems = computeVisibleItems(state.collection.size);
            let isMeasuring = newVisibleItems < state.collection.size && newVisibleItems > 0;
            // If not all of the buttons fit, and buttonLabelBehavior is 'collapse', then first try hiding
            // the button text and only showing icons. Only if that still doesn't fit collapse into a menu.
            if (newVisibleItems < state.collection.size && buttonLabelBehavior === 'collapse' && isIconCollapsible) {
                yield {
                    visibleItems: state.collection.size,
                    hideButtonText: true,
                    isMeasuring: true
                };
                newVisibleItems = computeVisibleItems(state.collection.size);
                isMeasuring = newVisibleItems < state.collection.size && newVisibleItems > 0;
                hideButtonText = true;
            }
            yield {
                visibleItems: newVisibleItems,
                hideButtonText,
                isMeasuring
            };
            // If the number of items is less than the number of children,
            // then update again to ensure that the menu fits.
            if (isMeasuring) yield {
                visibleItems: computeVisibleItems(newVisibleItems),
                hideButtonText,
                isMeasuring: false
            };
        });
    }, [
        domRef,
        state.collection,
        setVisibleItems,
        overflowMode,
        selectionMode,
        buttonLabelBehavior,
        isIconCollapsible,
        orientation
    ]);
    // Watch the parent element for size changes. Watching only the action group itself may not work
    // in all scenarios because it may not shrink when available space is reduced.
    let parentRef = (0, _react.useMemo)(()=>({
            get current () {
                return wrapperRef.current?.parentElement;
            }
        }), // oxlint-disable-next-line react/react-compiler
    [
        wrapperRef
    ]);
    (0, _useResizeObserverTs.useResizeObserver)({
        ref: overflowMode !== 'wrap' ? parentRef : undefined,
        onResize: updateOverflow
    });
    (0, _useLayoutEffectTs.useLayoutEffect)(updateOverflow, [
        updateOverflow,
        state.collection
    ]);
    let children = [
        ...state.collection
    ];
    let menuItem = null;
    let menuProps = {};
    // If there are no visible items, don't apply any props to the action group container
    // and pass all aria labeling props through to the menu button.
    if (overflowMode === 'collapse' && visibleItems === 0) {
        menuProps = (0, _filterDOMPropsTs.filterDOMProps)(props, {
            labelable: true
        });
        actionGroupProps = {};
    }
    if (overflowMode === 'collapse' && visibleItems < state.collection.size) {
        let menuChildren = children.slice(visibleItems);
        children = children.slice(0, visibleItems);
        menuItem = /*#__PURE__*/ (0, _jsxRuntime.jsx)(ActionGroupMenu, {
            ...menuProps,
            items: menuChildren,
            onAction: (key)=>onAction?.(key),
            isDisabled: isDisabled,
            isEmphasized: isEmphasized,
            staticColor: staticColor,
            state: state,
            summaryIcon: summaryIcon,
            hideButtonText: hideButtonText,
            isOnlyItem: visibleItems === 0,
            orientation: orientation
        });
    }
    let style = {
        ...styleProps.style,
        // While measuring, take up as much space as possible.
        flexBasis: isMeasuring ? '100%' : undefined
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _focusScopeTs.FocusScope), {
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
            ...styleProps,
            style: style,
            className: (0, _classNamesTs.classNames)((0, _varsCssDefault1.default), 'flex-container', styleProps.className),
            ref: wrapperRef,
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                ...actionGroupProps,
                ref: domRef,
                className: (0, _classNamesTs.classNames)((0, _varsCssDefault1.default), 'flex-gap', 'spectrum-ActionGroup', {
                    'spectrum-ActionGroup--quiet': isQuiet,
                    'spectrum-ActionGroup--vertical': isVertical,
                    'spectrum-ActionGroup--compact': density === 'compact',
                    'spectrum-ActionGroup--justified': isJustified && !isMeasuring,
                    'spectrum-ActionGroup--overflowCollapse': overflowMode === 'collapse'
                }, otherProps.UNSAFE_className),
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _providerTsx.Provider), {
                    ...providerProps,
                    children: [
                        children.map((item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(ActionGroupItem, {
                                onAction: onAction,
                                isDisabled: isDisabled,
                                isEmphasized: isEmphasized,
                                staticColor: staticColor,
                                item: item,
                                state: state,
                                hideButtonText: hideButtonText,
                                orientation: orientation
                            }, item.key)),
                        menuItem
                    ]
                })
            })
        })
    });
});
function ActionGroupItem({ item, state, isDisabled, isEmphasized, staticColor, onAction, hideButtonText, orientation }) {
    let ref = (0, _react.useRef)(null);
    let { buttonProps } = (0, _useActionGroupItemTs.useActionGroupItem)({
        key: item.key
    }, state);
    isDisabled = isDisabled || state.disabledKeys.has(item.key);
    let isSelected = state.selectionManager.isSelected(item.key);
    let { hoverProps, isHovered } = (0, _useHoverTs.useHover)({
        isDisabled
    });
    let domProps = (0, _filterDOMPropsTs.filterDOMProps)(item.props);
    if (onAction && !isDisabled) buttonProps = (0, _mergePropsTs.mergeProps)(buttonProps, {
        onPress: ()=>onAction(item.key)
    });
    // If button text is hidden, we need to show it as a tooltip instead, so
    // go find the text element in the DOM after rendering.
    let textId = (0, _useIdTs.useId)();
    let [textContent, setTextContent] = (0, _react.useState)('');
    (0, _useLayoutEffectTs.useLayoutEffect)(()=>{
        if (hideButtonText) setTextContent(document.getElementById(textId)?.textContent);
    }, [
        hideButtonText,
        item.rendered,
        textId
    ]);
    let button = // Use a PressResponder to send DOM props through.
    // ActionButton doesn't allow overriding the role by default.
    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _pressResponderTs.PressResponder), {
        ...(0, _mergePropsTs.mergeProps)(buttonProps, hoverProps, domProps),
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _slotsTsx.ClearSlots), {
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _slotsTsx.SlotProvider), {
                slots: {
                    text: {
                        id: hideButtonText ? textId : null,
                        isHidden: hideButtonText
                    }
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _actionButtonTsx.ActionButton), {
                    ref: ref,
                    // @ts-ignore (private)
                    hideButtonText: hideButtonText,
                    UNSAFE_className: (0, _classNamesTs.classNames)((0, _varsCssDefault1.default), 'spectrum-ActionGroup-item', {
                        'is-selected': isSelected,
                        'is-hovered': isHovered,
                        'spectrum-ActionGroup-item--iconOnly': hideButtonText,
                        'spectrum-ActionGroup-item--isDisabled': isDisabled
                    }, (0, _classNamesTs.classNames)((0, _varsCssDefault.default), {
                        'spectrum-ActionButton--emphasized': isEmphasized,
                        'is-selected': isSelected
                    })),
                    isDisabled: isDisabled,
                    staticColor: staticColor,
                    "aria-label": item['aria-label'],
                    "aria-labelledby": item['aria-label'] == null && hideButtonText ? textId : undefined,
                    children: item.rendered
                })
            })
        })
    });
    if (hideButtonText && textContent) button = /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tooltipTriggerTsx.TooltipTrigger), {
        placement: orientation === 'vertical' ? 'end' : 'top',
        children: [
            button,
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tooltipTsx.Tooltip), {
                children: textContent
            })
        ]
    });
    if (item.wrapper) button = item.wrapper(button);
    return button;
}
function ActionGroupMenu({ state, isDisabled, isEmphasized, staticColor, items, onAction, summaryIcon, hideButtonText, isOnlyItem, orientation, ...otherProps }) {
    // Use the key of the first item within the menu as the key of the button.
    // The key must actually exist in the collection for focus to work correctly.
    let key = items[0].key;
    let { buttonProps } = (0, _useActionGroupItemTs.useActionGroupItem)({
        key
    }, state);
    let stringFormatter = (0, _useLocalizedStringFormatterTs.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-spectrum/actiongroup');
    // The menu button shouldn't act like an actual action group item.
    // oxlint-disable-next-line react/react-compiler
    delete buttonProps.onPress;
    // oxlint-disable-next-line react/react-compiler
    delete buttonProps.role;
    // oxlint-disable-next-line react/react-compiler
    delete buttonProps['aria-checked'];
    let { hoverProps, isHovered } = (0, _useHoverTs.useHover)({
        isDisabled
    });
    // If no aria-label or aria-labelledby is given, provide a default one.
    let ariaLabel = otherProps['aria-label'] || (otherProps['aria-labelledby'] ? undefined : stringFormatter.format('more'));
    let ariaLabelledby = otherProps['aria-labelledby'];
    let textId = (0, _useIdTs.useId)();
    let id = (0, _useIdTs.useId)();
    // Summary icon only applies when selection is enabled.
    if (state.selectionManager.selectionMode === 'none') summaryIcon = null;
    let iconOnly = false;
    // If there is a selection, show the selected state on the menu button.
    let isSelected = state.selectionManager.selectionMode !== 'none' && !state.selectionManager.isEmpty;
    // If single selection and empty selection is not allowed, swap the contents of the button to the selected item (like a Picker).
    if (!summaryIcon && state.selectionManager.selectionMode === 'single' && state.selectionManager.disallowEmptySelection && state.selectionManager.firstSelectedKey != null) {
        let selectedItem = state.collection.getItem(state.selectionManager.firstSelectedKey);
        if (selectedItem) {
            summaryIcon = selectedItem.rendered;
            if (typeof summaryIcon === 'string') summaryIcon = /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTsx.Text), {
                children: summaryIcon
            });
            iconOnly = !!hideButtonText;
            ariaLabelledby = `${ariaLabelledby ?? id} ${textId}`;
        }
    }
    if (summaryIcon) // If there's a custom summary icon, also add a chevron.
    summaryIcon = /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _chevronDownMediumTsxDefault.default), {
                UNSAFE_className: (0, _classNamesTs.classNames)((0, _varsCssDefault1.default), 'spectrum-ActionGroup-menu-chevron')
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                className: (0, _classNamesTs.classNames)((0, _varsCssDefault1.default), 'spectrum-ActionGroup-menu-contents', {
                    'spectrum-ActionGroup-item--iconOnly': iconOnly
                }),
                children: summaryIcon
            })
        ]
    });
    return(// Use a PressResponder to send DOM props through.
    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menuTriggerTsx.MenuTrigger), {
        align: isOnlyItem ? 'start' : 'end',
        direction: orientation === 'vertical' ? 'end' : 'bottom',
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _slotsTsx.SlotProvider), {
                slots: {
                    text: {
                        id: hideButtonText ? textId : null,
                        isHidden: hideButtonText,
                        UNSAFE_className: (0, _classNamesTs.classNames)((0, _varsCssDefault1.default), 'spectrum-ActionGroup-menu-text')
                    }
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _pressResponderTs.PressResponder), {
                    ...(0, _mergePropsTs.mergeProps)(buttonProps, hoverProps),
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _actionButtonTsx.ActionButton), {
                        ...otherProps,
                        id: id,
                        "aria-label": ariaLabel,
                        "aria-labelledby": ariaLabelledby,
                        UNSAFE_className: (0, _classNamesTs.classNames)((0, _varsCssDefault1.default), 'spectrum-ActionGroup-item', 'spectrum-ActionGroup-menu', {
                            'is-hovered': isHovered,
                            'is-selected': isSelected
                        }, (0, _classNamesTs.classNames)((0, _varsCssDefault.default), {
                            'is-selected': isSelected,
                            'spectrum-ActionButton--emphasized': isEmphasized
                        })),
                        isDisabled: isDisabled,
                        staticColor: staticColor,
                        children: summaryIcon || /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _moreTsxDefault.default), {})
                    })
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menuTsx.Menu), {
                items: items,
                disabledKeys: state.disabledKeys,
                selectionMode: state.selectionManager.selectionMode,
                selectedKeys: state.selectionManager.selectedKeys,
                disallowEmptySelection: state.selectionManager.disallowEmptySelection,
                onSelectionChange: (keys)=>state.selectionManager.setSelectedKeys(keys),
                onAction: onAction,
                children: (node)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _itemTs.Item), {
                        textValue: node.textValue,
                        ...(0, _filterDOMPropsTs.filterDOMProps)(node.props),
                        children: node.rendered
                    })
            })
        ]
    }));
}
function outerWidth(element, ignoreLeftMargin, ignoreRightMargin) {
    let style = window.getComputedStyle(element);
    return element.getBoundingClientRect().width + (ignoreLeftMargin ? 0 : toNumber(style.marginLeft)) + (ignoreRightMargin ? 0 : toNumber(style.marginRight));
}
function outerHeight(element, ignoreTopMargin, ignoreBottomMargin) {
    let style = window.getComputedStyle(element);
    return element.getBoundingClientRect().height + (ignoreTopMargin ? 0 : toNumber(style.marginTop)) + (ignoreBottomMargin ? 0 : toNumber(style.marginBottom));
}
function toNumber(value) {
    let parsed = parseInt(value, 10);
    return isNaN(parsed) ? 0 : parsed;
}

},{"preact/jsx-runtime":"b2Fbn","../button/ActionButton.tsx":"cR4gQ","../../../../../../../../vendor/react-aria/exports/private/actiongroup/useActionGroup.ts":"2tJnw","../../../spectrum-css-temp/components/button/vars.css":"bPkEU","../../../../@spectrum-icons/ui/src/ChevronDownMedium.tsx":"i75Up","../utils/classNames.ts":"dsWbb","../utils/Slots.tsx":"a1pMy","../../../../../../../../vendor/react-aria/exports/filterDOMProps.ts":"h4XHF","../../../../../../../../vendor/react-aria/exports/FocusScope.ts":"E8d3D","../../intl/actiongroup/index.js":"hIl6y","../../../../../../../../vendor/react-stately/exports/Item.ts":"9bTDv","../../../../../../../../vendor/react-stately/exports/useListState.ts":"3g793","../menu/Menu.tsx":"7eU6f","../menu/MenuTrigger.tsx":"gvzMs","../../../../../../../../vendor/react-aria/exports/mergeProps.ts":"jycxS","../../../../@spectrum-icons/workflow/src/More.tsx":"cvHsc","../../../../../../../../vendor/react-aria/exports/private/interactions/PressResponder.ts":"e49up","../provider/Provider.tsx":"ebIlC","react":"gOP0N","../../../spectrum-css-temp/components/actiongroup/vars.css":"ccnvP","../text/Text.tsx":"4mQX0","../tooltip/Tooltip.tsx":"iyill","../tooltip/TooltipTrigger.tsx":"gDsBv","../../../../../../../../vendor/react-aria/exports/private/actiongroup/useActionGroupItem.ts":"bTMgO","../utils/useDOMRef.ts":"ltu01","../../../../../../../../vendor/react-aria/exports/useHover.ts":"2yLrj","../../../../../../../../vendor/react-aria/exports/useId.ts":"fQAcb","../../../../../../../../vendor/react-aria/exports/private/utils/useLayoutEffect.ts":"h7M6K","../../../../../../../../vendor/react-aria/exports/useLocalizedStringFormatter.ts":"8lll3","../../../../../../../../vendor/react-aria/exports/private/utils/useResizeObserver.ts":"58iim","../utils/styleProps.ts":"7B0Vi","../../../../../../../../vendor/react-aria/exports/private/utils/useValueEffect.ts":"ksiVz","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2tJnw":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useActionGroup", ()=>useActionGroup);
var _focusScope = require("../focus/FocusScope");
var _filterDOMProps = require("../utils/filterDOMProps");
var _useKeyboard = require("../interactions/useKeyboard");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _i18Nprovider = require("../i18n/I18nProvider");
var _react = require("react");
const BUTTON_GROUP_ROLES = {
    none: 'toolbar',
    single: 'radiogroup',
    multiple: 'toolbar'
};
function useActionGroup(props, state, ref) {
    let { isDisabled, orientation = 'horizontal' } = props;
    let [isInToolbar, setInToolbar] = (0, _react.useState)(false);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        setInToolbar(!!(ref.current && ref.current.parentElement?.closest('[role="toolbar"]')));
    }, [
        ref
    ]);
    let allKeys = [
        ...state.collection.getKeys()
    ];
    if (!allKeys.some((key)=>!state.disabledKeys.has(key))) isDisabled = true;
    let { direction } = (0, _i18Nprovider.useLocale)();
    // oxlint-disable-next-line react/react-compiler
    let focusManager = (0, _focusScope.createFocusManager)(ref);
    // ArrowLeft/ArrowRight follow the locale's text direction regardless of orientation, so
    // ArrowLeft always moves to the next item in RTL. ArrowUp/ArrowDown are never flipped.
    let flipDirection = direction === 'rtl';
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            ArrowRight: ()=>{
                if (flipDirection) focusManager.focusPrevious({
                    wrap: true
                });
                else focusManager.focusNext({
                    wrap: true
                });
            },
            ArrowDown: ()=>{
                focusManager.focusNext({
                    wrap: true
                });
            },
            ArrowLeft: ()=>{
                if (flipDirection) focusManager.focusNext({
                    wrap: true
                });
                else focusManager.focusPrevious({
                    wrap: true
                });
            },
            ArrowUp: ()=>{
                focusManager.focusPrevious({
                    wrap: true
                });
            }
        },
        allowRepeats: true
    });
    let role = BUTTON_GROUP_ROLES[state.selectionManager.selectionMode];
    if (isInToolbar && role === 'toolbar') role = 'group';
    return {
        actionGroupProps: {
            ...(0, _filterDOMProps.filterDOMProps)(props, {
                labelable: true
            }),
            role,
            'aria-orientation': role === 'toolbar' ? orientation : undefined,
            'aria-disabled': isDisabled,
            ...keyboardProps
        }
    };
}

},{"../focus/FocusScope":"E8d3D","../utils/filterDOMProps":"h4XHF","../interactions/useKeyboard":"aHm7i","../utils/useLayoutEffect":"h7M6K","../i18n/I18nProvider":"czGuc","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hIl6y":[function(require,module,exports,__globalThis) {
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

},{"./ar-AE.js":"cpaJF","./bg-BG.js":"2JqqY","./cs-CZ.js":"8gTxK","./da-DK.js":"gGgmV","./de-DE.js":"h6spI","./el-GR.js":"3GCt7","./en-US.js":"kYZLs","./es-ES.js":"kXDRq","./et-EE.js":"c2LYB","./fi-FI.js":"hTWE3","./fr-FR.js":"zUg0W","./he-IL.js":"gwBQd","./hr-HR.js":"dKPsd","./hu-HU.js":"16QTx","./it-IT.js":"8DaZj","./ja-JP.js":"iqbKa","./ko-KR.js":"btMIy","./lt-LT.js":"cXjJZ","./lv-LV.js":"7pakz","./nb-NO.js":"cI4uB","./nl-NL.js":"guHCU","./pl-PL.js":"9wVex","./pt-BR.js":"hfY1f","./pt-PT.js":"8xxyb","./ro-RO.js":"53vZj","./ru-RU.js":"3JYma","./sk-SK.js":"2sQvs","./sl-SI.js":"6LlOX","./sr-SP.js":"5CERh","./sv-SE.js":"hpmp2","./tr-TR.js":"l2QxL","./uk-UA.js":"88npp","./zh-CN.js":"7WB4q","./zh-TW.js":"bElON","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cpaJF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `\u{627}\u{644}\u{645}\u{632}\u{64A}\u{62F} \u{645}\u{646} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2JqqY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `\u{41E}\u{449}\u{435} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8gTxK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Dal\u{161}\xed polo\u{17E}ky`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gGgmV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Flere elementer`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h6spI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Weitere Elemente`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3GCt7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `\u{3A0}\u{3B5}\u{3C1}\u{3B9}\u{3C3}\u{3C3}\u{3CC}\u{3C4}\u{3B5}\u{3C1}\u{3B1} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3B1}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kYZLs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `More items`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kXDRq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `M\xe1s elementos`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"c2LYB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Veel \xfcksusi`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hTWE3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Lis\xe4\xe4 kohteita`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"zUg0W":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Plus d\u{2019}\xe9l\xe9ments`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gwBQd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `\u{5E4}\u{5E8}\u{5D9}\u{5D8}\u{5D9}\u{5DD} \u{5E0}\u{5D5}\u{5E1}\u{5E4}\u{5D9}\u{5DD}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dKPsd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Vi\u{161}e stavki`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"16QTx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Tov\xe1bbi elemek`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8DaZj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Altri elementi`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iqbKa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `\u{305D}\u{306E}\u{4ED6}\u{306E}\u{9805}\u{76EE}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"btMIy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `\u{AE30}\u{D0C0} \u{D56D}\u{BAA9}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cXjJZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Daugiau element\u{173}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7pakz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Vair\u{101}k vienumu`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cI4uB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Flere elementer`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"guHCU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Meer items`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9wVex":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Wi\u{119}cej element\xf3w`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hfY1f":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Mais itens`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8xxyb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Mais artigos`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"53vZj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Mai multe articole`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3JYma":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `\u{414}\u{43E}\u{43F}\u{43E}\u{43B}\u{43D}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{44B}\u{435} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{44B}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2sQvs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `\u{10E}al\u{161}ie polo\u{17E}ky`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6LlOX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Ve\u{10D} elementov`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5CERh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Vi\u{161}e stavki`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hpmp2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Fler artiklar`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"l2QxL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `Daha fazla \xf6\u{11F}e`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"88npp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `\u{411}\u{456}\u{43B}\u{44C}\u{448}\u{435} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{456}\u{432}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7WB4q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `\u{66F4}\u{591A}\u{9879}\u{76EE}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bElON":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "more": `\u{66F4}\u{591A}\u{9805}\u{76EE}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cvHsc":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>More);
var _jsxRuntime = require("preact/jsx-runtime");
var _moreJs = require("@adobe/react-spectrum-workflow/dist/More.js");
var _iconTs = require("../../../@adobe/react-spectrum/exports/Icon.ts");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function More(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _iconTs.Icon), {
        ...props,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _moreJs.A4uMore), {})
    });
}

},{"preact/jsx-runtime":"b2Fbn","@adobe/react-spectrum-workflow/dist/More.js":"fJJDK","../../../@adobe/react-spectrum/exports/Icon.ts":"8qNHg","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fJJDK":[function(require,module,exports,__globalThis) {
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
exports.A4uMore = A4uMore;
var _react = _interopRequireDefault(require("8057cd4f4a1a84e6"));
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
function A4uMore(_ref) {
    var props = _extends({}, _ref);
    return /*#__PURE__*/ _react["default"].createElement("svg", _extends({
        viewBox: "0 0 36 36"
    }, props, props), /*#__PURE__*/ _react["default"].createElement("circle", {
        fillRule: "evenodd",
        cx: "17.8",
        cy: "18.2",
        r: "3.4"
    }), /*#__PURE__*/ _react["default"].createElement("circle", {
        fillRule: "evenodd",
        cx: "29.5",
        cy: "18.2",
        r: "3.4"
    }), /*#__PURE__*/ _react["default"].createElement("circle", {
        fillRule: "evenodd",
        cx: "6.1",
        cy: "18.2",
        r: "3.4"
    }));
}

},{"8057cd4f4a1a84e6":"gOP0N"}],"ccnvP":[function(require,module,exports,__globalThis) {
module.exports["flex-container"] = `qHqfjW_flex-container`;
module.exports["flex-gap"] = `qHqfjW_flex-gap`;
module.exports["is-selected"] = `qHqfjW_is-selected`;
module.exports["spectrum-ActionGroup"] = `qHqfjW_spectrum-ActionGroup`;
module.exports["spectrum-ActionGroup--compact"] = `qHqfjW_spectrum-ActionGroup--compact`;
module.exports["spectrum-ActionGroup--justified"] = `qHqfjW_spectrum-ActionGroup--justified`;
module.exports["spectrum-ActionGroup--overflowCollapse"] = `qHqfjW_spectrum-ActionGroup--overflowCollapse`;
module.exports["spectrum-ActionGroup--quiet"] = `qHqfjW_spectrum-ActionGroup--quiet`;
module.exports["spectrum-ActionGroup--vertical"] = `qHqfjW_spectrum-ActionGroup--vertical`;
module.exports["spectrum-ActionGroup-item"] = `qHqfjW_spectrum-ActionGroup-item`;
module.exports["spectrum-ActionGroup-item--iconOnly"] = `qHqfjW_spectrum-ActionGroup-item--iconOnly`;
module.exports["spectrum-ActionGroup-item--isDisabled"] = `qHqfjW_spectrum-ActionGroup-item--isDisabled`;
module.exports["spectrum-ActionGroup-menu"] = `qHqfjW_spectrum-ActionGroup-menu`;
module.exports["spectrum-ActionGroup-menu-chevron"] = `qHqfjW_spectrum-ActionGroup-menu-chevron`;
module.exports["spectrum-ActionGroup-menu-contents"] = `qHqfjW_spectrum-ActionGroup-menu-contents`;

},{}],"bTMgO":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useActionGroupItem", ()=>useActionGroupItem);
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _useEffectEvent = require("../utils/useEffectEvent");
const BUTTON_ROLES = {
    none: undefined,
    single: 'radio',
    multiple: 'checkbox'
};
function useActionGroupItem(props, state, // eslint-disable-next-line @typescript-eslint/no-unused-vars
ref) {
    let selectionMode = state.selectionManager.selectionMode;
    let buttonProps = {
        role: BUTTON_ROLES[selectionMode]
    };
    if (selectionMode !== 'none') {
        let isSelected = state.selectionManager.isSelected(props.key);
        buttonProps['aria-checked'] = isSelected;
    }
    let isFocused = props.key === state.selectionManager.focusedKey;
    let onRemovedWithFocus = (0, _useEffectEvent.useEffectEvent)(()=>{
        if (isFocused) state.selectionManager.setFocusedKey(null);
    });
    // If the focused item is removed from the DOM, reset the focused key to null.
    (0, _react.useEffect)(()=>{
        return ()=>{
            onRemovedWithFocus();
        };
    }, []);
    return {
        buttonProps: (0, _mergeProps.mergeProps)(buttonProps, {
            tabIndex: isFocused || state.selectionManager.focusedKey == null ? 0 : -1,
            onFocus () {
                state.selectionManager.setFocusedKey(props.key);
            },
            onPress () {
                state.selectionManager.select(props.key);
            }
        })
    };
}

},{"../utils/mergeProps":"jycxS","react":"gOP0N","../utils/useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

