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
})({"h7kEh":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a combo box component. A combo box
 * combines a text input with a listbox, allowing users to filter a list of options to items
 * matching a query.
 *
 * @param props - Props for the combo box.
 * @param state - State for the select, as returned by `useComboBoxState`.
 */ parcelHelpers.export(exports, "useComboBox", ()=>useComboBox);
var _liveAnnouncer = require("../live-announcer/LiveAnnouncer");
var _ariaHideOutside = require("../overlays/ariaHideOutside");
var _chain = require("../utils/chain");
var _virtualFocus = require("../focus/virtualFocus");
var _react = require("react");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _getChildNodes = require("react-stately/private/collections/getChildNodes");
var _getItemCount = require("react-stately/private/collections/getItemCount");
var _utils = require("../listbox/utils");
var _domHelpers = require("../utils/domHelpers");
var _indexJs = require("../../intl/combobox/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _platform = require("../utils/platform");
var _listKeyboardDelegate = require("../selection/ListKeyboardDelegate");
var _mergeProps = require("../utils/mergeProps");
var _useFormValidationState = require("react-stately/private/form/useFormValidationState");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _useEvent = require("../utils/useEvent");
var _useFormReset = require("../utils/useFormReset");
var _useId = require("../utils/useId");
var _useKeyboard = require("../interactions/useKeyboard");
var _useLabels = require("../utils/useLabels");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
var _useMenuTrigger = require("../menu/useMenuTrigger");
var _openLink = require("../utils/openLink");
var _useSelectableCollection = require("../selection/useSelectableCollection");
var _useTextField = require("../textfield/useTextField");
var _useUpdateEffect = require("../utils/useUpdateEffect");
function useComboBox(props, state) {
    let { buttonRef, popoverRef, inputRef, listBoxRef, keyboardDelegate, layoutDelegate, // completionMode = 'suggest',
    shouldFocusWrap, isReadOnly, isDisabled } = props;
    let backupBtnRef = (0, _react.useRef)(null);
    buttonRef = buttonRef ?? backupBtnRef;
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/combobox');
    let { menuTriggerProps, menuProps } = (0, _useMenuTrigger.useMenuTrigger)({
        type: 'listbox',
        isDisabled: isDisabled || isReadOnly
    }, state, buttonRef);
    // Set listbox id so it can be used when calling getItemId later
    (0, _utils.listData).set(state, {
        id: menuProps.id
    });
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let { collection } = state;
    let { disabledKeys } = state.selectionManager;
    let delegate = (0, _react.useMemo)(()=>keyboardDelegate || new (0, _listKeyboardDelegate.ListKeyboardDelegate)({
            collection,
            disabledKeys,
            ref: listBoxRef,
            layoutDelegate
        }), [
        keyboardDelegate,
        layoutDelegate,
        collection,
        disabledKeys,
        listBoxRef
    ]);
    // Use useSelectableCollection to get the keyboard handlers to apply to the textfield
    let { collectionProps } = (0, _useSelectableCollection.useSelectableCollection)({
        selectionManager: state.selectionManager,
        keyboardDelegate: delegate,
        disallowTypeAhead: true,
        disallowEmptySelection: true,
        shouldFocusWrap,
        ref: inputRef,
        // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
        isVirtualized: true
    });
    let router = (0, _openLink.useRouter)();
    // for textfield specific operations
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            Enter: (e)=>{
                // Prevent default form submission if menu is open since we may be selecting a option
                let shouldPreventDefault = state.isOpen;
                // If the focused item is a link, trigger opening it. Items that are links are not selectable.
                if (state.isOpen && listBoxRef.current && state.selectionManager.focusedKey != null) {
                    let collectionItem = state.collection.getItem(state.selectionManager.focusedKey);
                    if (collectionItem?.props.href) {
                        let item = listBoxRef.current.querySelector(`[data-key="${CSS.escape(state.selectionManager.focusedKey.toString())}"]`);
                        if (item instanceof HTMLAnchorElement) router.open(item, e, collectionItem.props.href, collectionItem.props.routerOptions);
                        state.close();
                        return {
                            shouldPreventDefault
                        };
                    } else if (collectionItem?.props.onAction) {
                        collectionItem.props.onAction();
                        state.close();
                        return {
                            shouldPreventDefault
                        };
                    }
                }
                state.commit();
                return {
                    shouldPreventDefault
                };
            },
            Tab: ()=>{
                // If the focused item is a link, trigger opening it. Items that are links are not selectable.
                if (state.isOpen && listBoxRef.current && state.selectionManager.focusedKey != null) {
                    let collectionItem = state.collection.getItem(state.selectionManager.focusedKey);
                    if (collectionItem?.props.href) {
                        state.close();
                        return {
                            shouldPreventDefault: false
                        };
                    } else if (collectionItem?.props.onAction) {
                        collectionItem.props.onAction();
                        state.close();
                        return {
                            shouldPreventDefault: false,
                            shouldContinuePropagation: true
                        };
                    }
                }
                if (state.isOpen) state.commit();
                return {
                    shouldPreventDefault: false,
                    shouldContinuePropagation: true
                };
            },
            Escape: ()=>{
                let shouldContinuePropagation = false;
                if (!state.selectionManager.isEmpty || state.inputValue === '' || props.allowsCustomValue) shouldContinuePropagation = true;
                state.revert();
                return {
                    shouldContinuePropagation
                };
            }
        }
    });
    let { keyboardProps: repeatKeyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            ArrowDown: ()=>{
                state.open('first', 'manual');
                return {
                    shouldPreventDefault: false
                };
            },
            ArrowUp: ()=>{
                state.open('last', 'manual');
                return {
                    shouldPreventDefault: false
                };
            },
            ArrowLeft: ()=>{
                state.selectionManager.setFocusedKey(null);
                return {
                    shouldPreventDefault: false
                };
            },
            ArrowRight: ()=>{
                state.selectionManager.setFocusedKey(null);
                return {
                    shouldPreventDefault: false
                };
            }
        },
        allowRepeats: true
    });
    let onBlur = (e)=>{
        let blurFromButton = (0, _domfunctions.nodeContains)(buttonRef.current, e.relatedTarget);
        let blurIntoPopover = (0, _domfunctions.nodeContains)(popoverRef.current, e.relatedTarget);
        // Ignore blur if focused moved to the button(if exists) or into the popover.
        if (blurFromButton || blurIntoPopover) return;
        if (props.onBlur) props.onBlur(e);
        state.setFocused(false);
    };
    let onFocus = (e)=>{
        if (state.isFocused) return;
        if (props.onFocus) props.onFocus(e);
        state.setFocused(true);
    };
    let valueId = useValueId([
        state.selectionManager.selectedKeys,
        state.selectionManager.selectionMode
    ]);
    let { isInvalid, validationErrors, validationDetails } = state.displayValidation;
    let { labelProps, inputProps, descriptionProps, errorMessageProps } = (0, _useTextField.useTextField)({
        ...props,
        // In multi-select mode, only set required if the selection is empty.
        isRequired: props.selectionMode === 'multiple' ? props.isRequired && state.selectionManager.isEmpty : props.isRequired,
        onChange: state.setInputValue,
        onKeyDown: !isReadOnly ? (0, _chain.chain)(state.isOpen && collectionProps.onKeyDown, keyboardProps.onKeyDown, repeatKeyboardProps.onKeyDown, props.onKeyDown) : props.onKeyDown,
        onBlur,
        value: state.inputValue,
        defaultValue: state.defaultInputValue,
        onFocus,
        autoComplete: 'off',
        validate: undefined,
        [(0, _useFormValidationState.privateValidationStateProp)]: state,
        'aria-describedby': [
            valueId,
            props['aria-describedby']
        ].filter(Boolean).join(' ') || undefined
    }, inputRef);
    (0, _useFormReset.useFormReset)(inputRef, state.defaultValue, state.setValue);
    // Press handlers for the ComboBox button
    let onPress = (e)=>{
        if (e.pointerType === 'touch') {
            // Focus the input field in case it isn't focused yet
            inputRef.current?.focus();
            state.toggle(null, 'manual');
        }
    };
    let onPressStart = (e)=>{
        if (e.pointerType !== 'touch') {
            inputRef.current?.focus();
            state.toggle(e.pointerType === 'keyboard' || e.pointerType === 'virtual' ? 'first' : null, 'manual');
        }
    };
    let triggerLabelProps = (0, _useLabels.useLabels)({
        id: menuTriggerProps.id,
        'aria-label': stringFormatter.format('buttonLabel'),
        'aria-labelledby': props['aria-labelledby'] || labelProps.id
    });
    let listBoxProps = (0, _useLabels.useLabels)({
        id: menuProps.id,
        'aria-label': stringFormatter.format('listboxLabel'),
        'aria-labelledby': props['aria-labelledby'] || labelProps.id
    });
    // If a touch happens on direct center of ComboBox input, might be virtual click from iPad so open ComboBox menu
    let lastEventTime = (0, _react.useRef)(0);
    let onTouchEnd = (e)=>{
        if (isDisabled || isReadOnly) return;
        // Sometimes VoiceOver on iOS fires two touchend events in quick succession. Ignore the second one.
        if (e.timeStamp - lastEventTime.current < 500) {
            e.preventDefault();
            inputRef.current?.focus();
            return;
        }
        let rect = (0, _domfunctions.getEventTarget)(e).getBoundingClientRect();
        let touch = e.changedTouches[0];
        let centerX = Math.ceil(rect.left + 0.5 * rect.width);
        let centerY = Math.ceil(rect.top + 0.5 * rect.height);
        if (touch.clientX === centerX && touch.clientY === centerY) {
            e.preventDefault();
            inputRef.current?.focus();
            state.toggle(null, 'manual');
            lastEventTime.current = e.timeStamp;
        }
    };
    // VoiceOver has issues with announcing aria-activedescendant properly on change
    // (especially on iOS). We use a live region announcer to announce focus changes
    // manually. In addition, section titles are announced when navigating into a new section.
    let focusedItem = state.selectionManager.focusedKey != null && state.isOpen ? state.collection.getItem(state.selectionManager.focusedKey) : undefined;
    let sectionKey = focusedItem?.parentKey ?? null;
    let itemKey = state.selectionManager.focusedKey ?? null;
    let lastSection = (0, _react.useRef)(sectionKey);
    let lastItem = (0, _react.useRef)(itemKey);
    (0, _react.useEffect)(()=>{
        if ((0, _platform.isAppleDevice)() && focusedItem != null && itemKey != null && itemKey !== lastItem.current) {
            let isSelected = state.selectionManager.isSelected(itemKey);
            let section = sectionKey != null ? state.collection.getItem(sectionKey) : null;
            let sectionTitle = section?.['aria-label'] || (typeof section?.rendered === 'string' ? section.rendered : '') || '';
            let announcement = stringFormatter.format('focusAnnouncement', {
                isGroupChange: (section && sectionKey !== lastSection.current) ?? false,
                groupTitle: sectionTitle,
                groupCount: section ? [
                    ...(0, _getChildNodes.getChildNodes)(section, state.collection)
                ].length : 0,
                optionText: focusedItem['aria-label'] || focusedItem.textValue || '',
                isSelected
            });
            (0, _liveAnnouncer.announce)(announcement);
        }
        lastSection.current = sectionKey;
        lastItem.current = itemKey;
    });
    // Announce the number of available suggestions when it changes
    let optionCount = (0, _getItemCount.getItemCount)(state.collection);
    let lastSize = (0, _react.useRef)(optionCount);
    let lastOpen = (0, _react.useRef)(state.isOpen);
    (0, _react.useEffect)(()=>{
        // Only announce the number of options available when the menu opens if there is no
        // focused item, otherwise screen readers will typically read e.g. "1 of 6".
        // The exception is VoiceOver since this isn't included in the message above.
        let didOpenWithoutFocusedItem = state.isOpen !== lastOpen.current && (state.selectionManager.focusedKey == null || (0, _platform.isAppleDevice)());
        if (state.isOpen && (didOpenWithoutFocusedItem || optionCount !== lastSize.current)) {
            let announcement = stringFormatter.format('countAnnouncement', {
                optionCount
            });
            (0, _liveAnnouncer.announce)(announcement);
        }
        lastSize.current = optionCount;
        lastOpen.current = state.isOpen;
    });
    // Announce when a selection occurs for VoiceOver. Other screen readers typically do this automatically.
    // TODO: do we need to do this for multi-select?
    let lastSelectedKey = (0, _react.useRef)(state.selectedKey);
    (0, _react.useEffect)(()=>{
        if ((0, _platform.isAppleDevice)() && state.isFocused && state.selectedItem && state.selectedKey !== lastSelectedKey.current) {
            let optionText = state.selectedItem['aria-label'] || state.selectedItem.textValue || '';
            let announcement = stringFormatter.format('selectedAnnouncement', {
                optionText
            });
            (0, _liveAnnouncer.announce)(announcement);
        }
        lastSelectedKey.current = state.selectedKey;
    });
    (0, _react.useEffect)(()=>{
        if (state.isOpen) return (0, _ariaHideOutside.ariaHideOutside)([
            inputRef.current,
            popoverRef.current
        ].filter((element)=>element != null));
    }, [
        state.isOpen,
        inputRef,
        popoverRef
    ]);
    (0, _useUpdateEffect.useUpdateEffect)(()=>{
        // Re-show focus ring when there is no virtually focused item.
        if (!focusedItem && inputRef.current && (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(inputRef.current)) === inputRef.current) (0, _virtualFocus.dispatchVirtualFocus)(inputRef.current, null);
    }, [
        focusedItem
    ]);
    (0, _useEvent.useEvent)(listBoxRef, 'react-aria-item-action', state.isOpen ? ()=>{
        state.close();
    } : undefined);
    return {
        labelProps: {
            ...labelProps,
            // Focus the input in case the label is not a native <label> element.
            onClick: 'htmlFor' in labelProps && labelProps.htmlFor || props.isDisabled ? undefined : ()=>{
                inputRef.current?.focus();
                (0, _useFocusVisible.setInteractionModality)('keyboard');
            }
        },
        buttonProps: {
            ...menuTriggerProps,
            ...triggerLabelProps,
            excludeFromTabOrder: true,
            preventFocusOnPress: true,
            onPress,
            onPressStart,
            isDisabled: isDisabled || isReadOnly
        },
        // oxlint-disable-next-line react/react-compiler
        inputProps: (0, _mergeProps.mergeProps)(inputProps, {
            role: 'combobox',
            'aria-expanded': menuTriggerProps['aria-expanded'],
            'aria-controls': state.isOpen ? menuProps.id : undefined,
            // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
            'aria-autocomplete': 'list',
            'aria-activedescendant': focusedItem ? (0, _utils.getItemId)(state, focusedItem.key) : undefined,
            onTouchEnd,
            // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
            autoCorrect: 'off',
            // This disable's the macOS Safari spell check auto corrections.
            spellCheck: 'false'
        }),
        listBoxProps: (0, _mergeProps.mergeProps)(menuProps, listBoxProps, {
            onAction: undefined,
            autoFocus: state.focusStrategy || true,
            shouldUseVirtualFocus: true,
            shouldSelectOnPressUp: true,
            shouldFocusOnHover: true,
            linkBehavior: 'selection',
            ['UNSTABLE_itemBehavior']: 'action'
        }),
        valueProps: {
            id: valueId
        },
        descriptionProps,
        errorMessageProps,
        isInvalid,
        validationErrors,
        validationDetails
    };
}
// This is a modified version of useSlotId that uses useEffect instead of useLayoutEffect.
// Triggering re-renders from useLayoutEffect breaks useComboBoxState's useEffect logic in React 18.
// These re-renders preempt async state updates in the useEffect, which ends up running multiple times
// prior to the state being updated. This results in onSelectionChange being called multiple times.
// TODO: refactor useComboBoxState to avoid this.
function useValueId(depArray = []) {
    let id = (0, _useId.useId)();
    let [exists, setExists] = (0, _react.useState)(true);
    let [lastDeps, setLastDeps] = (0, _react.useState)(depArray);
    // If the deps changed, set exists to true so we can test whether the element exists.
    if (lastDeps.some((v, i)=>!Object.is(v, depArray[i]))) {
        setExists(true);
        setLastDeps(depArray);
    }
    (0, _react.useEffect)(()=>{
        if (exists && !document.getElementById(id)) // oxlint-disable-next-line react/react-compiler
        setExists(false);
    }, [
        id,
        exists,
        lastDeps
    ]);
    return exists ? id : undefined;
}

},{"../live-announcer/LiveAnnouncer":"gQ2k2","../overlays/ariaHideOutside":"bOGar","../utils/chain":"bQmEj","../focus/virtualFocus":"hd0wy","react":"gOP0N","../utils/shadowdom/DOMFunctions":"8kfpz","react-stately/private/collections/getChildNodes":"9KbhA","react-stately/private/collections/getItemCount":"eLVRI","../listbox/utils":"8ZMtS","../utils/domHelpers":"cYkFa","../../intl/combobox/index.js":"eJlqc","../utils/platform":"eBqgD","../selection/ListKeyboardDelegate":"hxzwH","../utils/mergeProps":"jycxS","react-stately/private/form/useFormValidationState":"491YW","../interactions/useFocusVisible":"aBfUW","../utils/useEvent":"avf8K","../utils/useFormReset":"iDQvZ","../utils/useId":"fQAcb","../interactions/useKeyboard":"aHm7i","../utils/useLabels":"8ZwLJ","../i18n/useLocalizedStringFormatter":"8lll3","../menu/useMenuTrigger":"9b4y8","../utils/openLink":"gH3wl","../selection/useSelectableCollection":"cg1hz","../textfield/useTextField":"kJGKw","../utils/useUpdateEffect":"9WaKh","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eJlqc":[function(require,module,exports,__globalThis) {
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

},{"./ar-AE.js":"ln9e1","./bg-BG.js":"5DHaR","./cs-CZ.js":"jNvqc","./da-DK.js":"6HrP9","./de-DE.js":"aJ2sp","./el-GR.js":"8YEPZ","./en-US.js":"e3DYJ","./es-ES.js":"lX7W8","./et-EE.js":"aKLMj","./fi-FI.js":"4Eu7X","./fr-FR.js":"cTPEK","./he-IL.js":"3GuOp","./hr-HR.js":"3rf8g","./hu-HU.js":"k1NfH","./it-IT.js":"hd5IP","./ja-JP.js":"b0V8J","./ko-KR.js":"8JXev","./lt-LT.js":"4vY6c","./lv-LV.js":"1nDi5","./nb-NO.js":"1R9YG","./nl-NL.js":"965XE","./pl-PL.js":"b53Z5","./pt-BR.js":"h0wmU","./pt-PT.js":"jo1Da","./ro-RO.js":"2GWbE","./ru-RU.js":"fuAxp","./sk-SK.js":"l5mrZ","./sl-SI.js":"cW85d","./sr-SP.js":"g12S3","./sv-SE.js":"kUe9R","./tr-TR.js":"lNqeX","./uk-UA.js":"82nKu","./zh-CN.js":"iZNnY","./zh-TW.js":"4vQA3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ln9e1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `\u{639}\u{631}\u{636} \u{627}\u{644}\u{645}\u{642}\u{62A}\u{631}\u{62D}\u{627}\u{62A}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{62E}\u{64A}\u{627}\u{631}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`
        })} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{627}\u{644}\u{645}\u{62C}\u{645}\u{648}\u{639}\u{629} \u{627}\u{644}\u{645}\u{62F}\u{62E}\u{644}\u{629} ${args.groupTitle}, \u{645}\u{639} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{62E}\u{64A}\u{627}\u{631}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{645}\u{62D}\u{62F}\u{62F}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{645}\u{642}\u{62A}\u{631}\u{62D}\u{627}\u{62A}`,
    "selectedAnnouncement": (args)=>`${args.optionText}\u{60C} \u{645}\u{62D}\u{62F}\u{62F}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5DHaR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `\u{41F}\u{43E}\u{43A}\u{430}\u{436}\u{438} \u{43F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`
        })} \u{43D}\u{430} \u{440}\u{430}\u{437}\u{43F}\u{43E}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{435}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{412}\u{44A}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${args.groupTitle}, \u{441} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{41F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jNvqc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Zobrazit doporu\u{10D}en\xed`,
    "countAnnouncement": (args, formatter)=>`K dispozici ${formatter.plural(args.optionCount, {
            one: ()=>`je ${formatter.number(args.optionCount)} mo\u{17E}nost`,
            other: ()=>`jsou/je ${formatter.number(args.optionCount)} mo\u{17E}nosti/-\xed`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Zadan\xe1 skupina \u{201E}${args.groupTitle}\u{201C} ${formatter.plural(args.groupCount, {
                    one: ()=>`s ${formatter.number(args.groupCount)} mo\u{17E}nost\xed`,
                    other: ()=>`se ${formatter.number(args.groupCount)} mo\u{17E}nostmi`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: ` (vybr\xe1no)`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `N\xe1vrhy`,
    "selectedAnnouncement": (args)=>`${args.optionText}, vybr\xe1no`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6HrP9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Vis forslag`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} mulighed tilg\xe6ngelig`,
            other: ()=>`${formatter.number(args.optionCount)} muligheder tilg\xe6ngelige`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Angivet gruppe ${args.groupTitle}, med ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} mulighed`,
                    other: ()=>`${formatter.number(args.groupCount)} muligheder`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valgt`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Forslag`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valgt`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aJ2sp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Empfehlungen anzeigen`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} Option`,
            other: ()=>`${formatter.number(args.optionCount)} Optionen`
        })} verf\xfcgbar.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Eingetretene Gruppe ${args.groupTitle}, mit ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} Option`,
                    other: ()=>`${formatter.number(args.groupCount)} Optionen`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, ausgew\xe4hlt`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Empfehlungen`,
    "selectedAnnouncement": (args)=>`${args.optionText}, ausgew\xe4hlt`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8YEPZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `\u{3A0}\u{3C1}\u{3BF}\u{3B2}\u{3BF}\u{3BB}\u{3AE} \u{3C0}\u{3C1}\u{3BF}\u{3C4}\u{3AC}\u{3C3}\u{3B5}\u{3C9}\u{3BD}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2} `
        })} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B5}\u{3C2}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3BF}\u{3BC}\u{3AC}\u{3B4}\u{3B1} ${args.groupTitle}, \u{3BC}\u{3B5} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{3A0}\u{3C1}\u{3BF}\u{3C4}\u{3AC}\u{3C3}\u{3B5}\u{3B9}\u{3C2}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"e3DYJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Entered group ${args.groupTitle}, with ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} option`,
                    other: ()=>`${formatter.number(args.groupCount)} options`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selected`,
            other: ``
        }, args.isSelected)}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} option`,
            other: ()=>`${formatter.number(args.optionCount)} options`
        })} available.`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selected`,
    "buttonLabel": `Show suggestions`,
    "listboxLabel": `Suggestions`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lX7W8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Mostrar sugerencias`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opci\xf3n`,
            other: ()=>`${formatter.number(args.optionCount)} opciones`
        })} disponible(s).`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Se ha unido al grupo ${args.groupTitle}, con ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opci\xf3n`,
                    other: ()=>`${formatter.number(args.groupCount)} opciones`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, seleccionado`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugerencias`,
    "selectedAnnouncement": (args)=>`${args.optionText}, seleccionado`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aKLMj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Kuva soovitused`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} valik`,
            other: ()=>`${formatter.number(args.optionCount)} valikud`
        })} saadaval.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Sisestatud r\xfchm ${args.groupTitle}, valikuga ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} valik`,
                    other: ()=>`${formatter.number(args.groupCount)} valikud`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valitud`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Soovitused`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valitud`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4Eu7X":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `N\xe4yt\xe4 ehdotukset`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} vaihtoehto`,
            other: ()=>`${formatter.number(args.optionCount)} vaihtoehtoa`
        })} saatavilla.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Siirtyi ryhm\xe4\xe4n ${args.groupTitle}, jossa ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} vaihtoehto`,
                    other: ()=>`${formatter.number(args.groupCount)} vaihtoehtoa`
                })}.`,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valittu`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Ehdotukset`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valittu`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cTPEK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Afficher les suggestions`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} option`,
            other: ()=>`${formatter.number(args.optionCount)} options`
        })} disponible(s).`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Groupe ${args.groupTitle} rejoint, avec ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} option`,
                    other: ()=>`${formatter.number(args.groupCount)} options`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, s\xe9lectionn\xe9(s)`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Suggestions`,
    "selectedAnnouncement": (args)=>`${args.optionText}, s\xe9lectionn\xe9`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3GuOp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `\u{5D4}\u{5E6}\u{5D2} \u{5D4}\u{5E6}\u{5E2}\u{5D5}\u{5EA}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${formatter.number(args.optionCount)}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`
        })} \u{5D1}\u{5DE}\u{5E6}\u{5D1} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{5E0}\u{5DB}\u{5E0}\u{5E1} \u{5DC}\u{5E7}\u{5D1}\u{5D5}\u{5E6}\u{5D4} ${args.groupTitle}, \u{5E2}\u{5DD} ${formatter.plural(args.groupCount, {
                    one: ()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${formatter.number(args.groupCount)}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{5D4}\u{5E6}\u{5E2}\u{5D5}\u{5EA}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3rf8g":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Prika\u{17E}i prijedloge`,
    "countAnnouncement": (args, formatter)=>`Dostupno jo\u{161}: ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcije/a`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Unesena skupina ${args.groupTitle}, s ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcijom`,
                    other: ()=>`${formatter.number(args.groupCount)} opcije/a`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, odabranih`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Prijedlozi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, odabrano`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k1NfH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Javaslatok megjelen\xedt\xe9se`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} lehet\u{151}s\xe9g`,
            other: ()=>`${formatter.number(args.optionCount)} lehet\u{151}s\xe9g`
        })} \xe1ll rendelkez\xe9sre.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Bel\xe9pett a(z) ${args.groupTitle} csoportba, amely ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} lehet\u{151}s\xe9get`,
                    other: ()=>`${formatter.number(args.groupCount)} lehet\u{151}s\xe9get`
                })} tartalmaz. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, kijel\xf6lve`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Javaslatok`,
    "selectedAnnouncement": (args)=>`${args.optionText}, kijel\xf6lve`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hd5IP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Mostra suggerimenti`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opzione disponibile`,
            other: ()=>`${formatter.number(args.optionCount)} opzioni disponibili`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Ingresso nel gruppo ${args.groupTitle}, con ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opzione`,
                    other: ()=>`${formatter.number(args.groupCount)} opzioni`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selezionato`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Suggerimenti`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selezionato`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"b0V8J":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `\u{5019}\u{88DC}\u{3092}\u{8868}\u{793A}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`
        })}\u{3092}\u{5229}\u{7528}\u{3067}\u{304D}\u{307E}\u{3059}\u{3002}`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{5165}\u{529B}\u{3055}\u{308C}\u{305F}\u{30B0}\u{30EB}\u{30FC}\u{30D7} ${args.groupTitle}\u{3001}${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`
                })}\u{3092}\u{542B}\u{3080}\u{3002}`,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{5019}\u{88DC}`,
    "selectedAnnouncement": (args)=>`${args.optionText}\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8JXev":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `\u{C81C}\u{C548} \u{C0AC}\u{D56D} \u{D45C}\u{C2DC}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)}\u{AC1C} \u{C635}\u{C158}`,
            other: ()=>`${formatter.number(args.optionCount)}\u{AC1C} \u{C635}\u{C158}`
        })}\u{C744} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C788}\u{C2B5}\u{B2C8}\u{B2E4}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{C785}\u{B825}\u{D55C} \u{ADF8}\u{B8F9} ${args.groupTitle}, ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)}\u{AC1C} \u{C635}\u{C158}`,
                    other: ()=>`${formatter.number(args.groupCount)}\u{AC1C} \u{C635}\u{C158}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{C120}\u{D0DD}\u{B428}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{C81C}\u{C548}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{C120}\u{D0DD}\u{B428}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4vY6c":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Rodyti pasi\u{16B}lymus`,
    "countAnnouncement": (args, formatter)=>`Yra ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} parinktis`,
            other: ()=>`${formatter.number(args.optionCount)} parinktys (-i\u{173})`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{12E}vesta grup\u{117} ${args.groupTitle}, su ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} parinktimi`,
                    other: ()=>`${formatter.number(args.groupCount)} parinktimis (-i\u{173})`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, pasirinkta`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Pasi\u{16B}lymai`,
    "selectedAnnouncement": (args)=>`${args.optionText}, pasirinkta`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1nDi5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `R\u{101}d\u{12B}t ieteikumus`,
    "countAnnouncement": (args, formatter)=>`Pieejamo opciju skaits: ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcijas`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Ievad\u{12B}ta grupa ${args.groupTitle}, ar ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opciju`,
                    other: ()=>`${formatter.number(args.groupCount)} opcij\u{101}m`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, atlas\u{12B}ta`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Ieteikumi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, atlas\u{12B}ta`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1R9YG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Vis forslag`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} alternativ`,
            other: ()=>`${formatter.number(args.optionCount)} alternativer`
        })} finnes.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Angitt gruppe ${args.groupTitle}, med ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} alternativ`,
                    other: ()=>`${formatter.number(args.groupCount)} alternativer`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valgt`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Forslag`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valgt`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"965XE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Suggesties weergeven`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} optie`,
            other: ()=>`${formatter.number(args.optionCount)} opties`
        })} beschikbaar.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Groep ${args.groupTitle} ingevoerd met ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} optie`,
                    other: ()=>`${formatter.number(args.groupCount)} opties`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, geselecteerd`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Suggesties`,
    "selectedAnnouncement": (args)=>`${args.optionText}, geselecteerd`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"b53Z5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Wy\u{15B}wietlaj sugestie`,
    "countAnnouncement": (args, formatter)=>`dost\u{119}pna/dost\u{119}pne(-nych) ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcja`,
            other: ()=>`${formatter.number(args.optionCount)} opcje(-i)`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Do\u{142}\u{105}czono do grupy ${args.groupTitle}, z ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcj\u{105}`,
                    other: ()=>`${formatter.number(args.groupCount)} opcjami`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, wybrano`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugestie`,
    "selectedAnnouncement": (args)=>`${args.optionText}, wybrano`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h0wmU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Mostrar sugest\xf5es`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} op\xe7\xe3o`,
            other: ()=>`${formatter.number(args.optionCount)} op\xe7\xf5es`
        })} dispon\xedvel.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Grupo inserido ${args.groupTitle}, com ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} op\xe7\xe3o`,
                    other: ()=>`${formatter.number(args.groupCount)} op\xe7\xf5es`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selecionado`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugest\xf5es`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selecionado`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jo1Da":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Apresentar sugest\xf5es`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} op\xe7\xe3o`,
            other: ()=>`${formatter.number(args.optionCount)} op\xe7\xf5es`
        })} dispon\xedvel.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Grupo introduzido ${args.groupTitle}, com ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} op\xe7\xe3o`,
                    other: ()=>`${formatter.number(args.groupCount)} op\xe7\xf5es`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selecionado`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugest\xf5es`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selecionado`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2GWbE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Afi\u{219}are sugestii`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} op\u{21B}iune`,
            other: ()=>`${formatter.number(args.optionCount)} op\u{21B}iuni`
        })} disponibile.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Grup ${args.groupTitle} introdus, cu ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} op\u{21B}iune`,
                    other: ()=>`${formatter.number(args.groupCount)} op\u{21B}iuni`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selectat`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugestii`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selectat`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fuAxp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `\u{41F}\u{43E}\u{43A}\u{430}\u{437}\u{430}\u{442}\u{44C} \u{43F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{432}`
        })} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{43D}\u{430}\u{44F} \u{433}\u{440}\u{443}\u{43F}\u{43F}\u{430} ${args.groupTitle}, \u{441} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{43C}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{430}\u{43C}\u{438}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{43C}\u{438}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{41F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"l5mrZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Zobrazi\u{165} n\xe1vrhy`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} mo\u{17E}nos\u{165}`,
            other: ()=>`${formatter.number(args.optionCount)} mo\u{17E}nosti/-\xed`
        })} k dispoz\xedcii.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Zadan\xe1 skupina ${args.groupTitle}, s ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} mo\u{17E}nos\u{165}ou`,
                    other: ()=>`${formatter.number(args.groupCount)} mo\u{17E}nos\u{165}ami`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, vybrat\xe9`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `N\xe1vrhy`,
    "selectedAnnouncement": (args)=>`${args.optionText}, vybrat\xe9`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cW85d":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Prika\u{17E}i predloge`,
    "countAnnouncement": (args, formatter)=>`Na voljo je ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcije`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Vnesena skupina ${args.groupTitle}, z ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcija`,
                    other: ()=>`${formatter.number(args.groupCount)} opcije`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, izbrano`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Predlogi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, izbrano`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"g12S3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Prika\u{17E}i predloge`,
    "countAnnouncement": (args, formatter)=>`Dostupno jo\u{161}: ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcije/a`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Unesena grupa ${args.groupTitle}, s ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcijom`,
                    other: ()=>`${formatter.number(args.groupCount)} optione/a`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, izabranih`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Predlozi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, izabrano`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kUe9R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `Visa f\xf6rslag`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} alternativ`,
            other: ()=>`${formatter.number(args.optionCount)} alternativ`
        })} tillg\xe4ngliga.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Ingick i gruppen ${args.groupTitle} med ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} alternativ`,
                    other: ()=>`${formatter.number(args.groupCount)} alternativ`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valda`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `F\xf6rslag`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valda`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lNqeX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `\xd6nerileri g\xf6ster`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} se\xe7enek`,
            other: ()=>`${formatter.number(args.optionCount)} se\xe7enekler`
        })} kullan\u{131}labilir.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Girilen grup ${args.groupTitle}, ile ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} se\xe7enek`,
                    other: ()=>`${formatter.number(args.groupCount)} se\xe7enekler`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, se\xe7ildi`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\xd6neriler`,
    "selectedAnnouncement": (args)=>`${args.optionText}, se\xe7ildi`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"82nKu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `\u{41F}\u{43E}\u{43A}\u{430}\u{437}\u{430}\u{442}\u{438} \u{43F}\u{440}\u{43E}\u{43F}\u{43E}\u{437}\u{438}\u{446}\u{456}\u{457}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`
        })} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${args.groupTitle}, \u{437} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{41F}\u{440}\u{43E}\u{43F}\u{43E}\u{437}\u{438}\u{446}\u{456}\u{457}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iZNnY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `\u{663E}\u{793A}\u{5EFA}\u{8BAE}`,
    "countAnnouncement": (args, formatter)=>`\u{6709} ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{4E2A}\u{9009}\u{9879}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{4E2A}\u{9009}\u{9879}`
        })}\u{53EF}\u{7528}\u{3002}`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{8FDB}\u{5165}\u{4E86} ${args.groupTitle} \u{7EC4}\u{FF0C}\u{5176}\u{4E2D}\u{6709} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{4E2A}\u{9009}\u{9879}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{4E2A}\u{9009}\u{9879}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{5DF2}\u{9009}\u{62E9}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{5EFA}\u{8BAE}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{5DF2}\u{9009}\u{62E9}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4vQA3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "buttonLabel": `\u{986F}\u{793A}\u{5EFA}\u{8B70}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{9078}\u{9805}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{9078}\u{9805}`
        })} \u{53EF}\u{7528}\u{3002}`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{8F38}\u{5165}\u{7684}\u{7FA4}\u{7D44} ${args.groupTitle}, \u{6709} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{9078}\u{9805}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{9078}\u{9805}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{5DF2}\u{9078}\u{53D6}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{5EFA}\u{8B70}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{5DF2}\u{9078}\u{53D6}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4xleD":[function(require,module,exports,__globalThis) {
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
 * Provides state management for a combo box component. Handles building a collection of items from
 * props and manages the option selection state of the combo box. In addition, it tracks the input
 * value, focus state, and other properties of the combo box.
 */ parcelHelpers.export(exports, "useComboBoxState", ()=>useComboBoxState);
var _useFormValidationState = require("../form/useFormValidationState");
var _getChildNodes = require("../collections/getChildNodes");
var _listCollection = require("../list/ListCollection");
var _useListState = require("../list/useListState");
var _useOverlayTriggerState = require("../overlays/useOverlayTriggerState");
var _react = require("react");
var _useControlledState = require("../utils/useControlledState");
function useComboBoxState(props) {
    let { defaultFilter, menuTrigger = 'input', allowsEmptyCollection = false, allowsCustomValue, shouldCloseOnBlur = true, selectionMode = 'single' } = props;
    let [showAllItems, setShowAllItems] = (0, _react.useState)(false);
    let [isFocused, setFocusedState] = (0, _react.useState)(false);
    let [focusStrategy, setFocusStrategy] = (0, _react.useState)(null);
    let closedDueToEmpty = (0, _react.useRef)(false);
    let defaultValue = (0, _react.useMemo)(()=>{
        return props.defaultValue !== undefined ? props.defaultValue : selectionMode === 'single' ? props.defaultSelectedKey ?? null : [];
    }, [
        props.defaultValue,
        props.defaultSelectedKey,
        selectionMode
    ]);
    let value = (0, _react.useMemo)(()=>{
        return props.value !== undefined ? props.value : selectionMode === 'single' ? props.selectedKey : undefined;
    }, [
        props.value,
        props.selectedKey,
        selectionMode
    ]);
    let [controlledValue, setControlledValue] = (0, _useControlledState.useControlledState)(value, defaultValue, props.onChange);
    // Only display the first selected item if in single selection mode but the value is an array.
    let displayValue = selectionMode === 'single' && Array.isArray(controlledValue) ? controlledValue[0] : controlledValue;
    let setValue = (value)=>{
        if (selectionMode === 'single') {
            let key = Array.isArray(value) ? value[0] ?? null : value;
            setControlledValue(key);
            if (key !== displayValue) props.onSelectionChange?.(key);
        } else {
            let keys = [];
            if (Array.isArray(value)) keys = value;
            else if (value != null) keys = [
                value
            ];
            setControlledValue(keys);
        }
    };
    let { collection, selectionManager, disabledKeys } = (0, _useListState.useListState)({
        ...props,
        items: props.items ?? props.defaultItems,
        selectionMode,
        disallowEmptySelection: selectionMode === 'single',
        allowDuplicateSelectionEvents: true,
        selectedKeys: (0, _react.useMemo)(()=>convertValue(displayValue), [
            displayValue
        ]),
        onSelectionChange: (keys)=>{
            // impossible, but TS doesn't know that
            if (keys === 'all') return;
            if (selectionMode === 'single') {
                let key = keys.values().next().value ?? null;
                if (key === displayValue) {
                    props.onSelectionChange?.(key);
                    // If key is the same, reset the inputValue and close the menu
                    // (scenario: user clicks on already selected option)
                    resetInputValue();
                    closeMenu();
                } else setValue(key);
            } else setValue([
                ...keys
            ]);
        }
    });
    let selectedKey = selectionMode === 'single' ? selectionManager.firstSelectedKey : null;
    let selectedItems = (0, _react.useMemo)(()=>{
        return [
            ...selectionManager.selectedKeys
        ].map((key)=>collection.getItem(key)).filter((item)=>item != null);
    }, [
        selectionManager.selectedKeys,
        collection
    ]);
    let [inputValue, setInputValue] = (0, _useControlledState.useControlledState)(props.inputValue, getDefaultInputValue(props.defaultInputValue, selectedKey, collection) || '', props.onInputChange);
    let [initialValue] = (0, _react.useState)(displayValue);
    let [initialInputValue] = (0, _react.useState)(inputValue);
    // Preserve original collection so we can show all items on demand
    let originalCollection = collection;
    let filteredCollection = (0, _react.useMemo)(()=>// No default filter if items are controlled.
        props.items != null || !defaultFilter ? collection : filterCollection(collection, inputValue, defaultFilter), [
        collection,
        inputValue,
        defaultFilter,
        props.items
    ]);
    let [lastCollection, setLastCollection] = (0, _react.useState)(filteredCollection);
    // Track what action is attempting to open the menu
    let menuOpenTrigger = (0, _react.useRef)('focus');
    let onOpenChange = (open)=>{
        if (props.onOpenChange) props.onOpenChange(open, open ? menuOpenTrigger.current : undefined);
        selectionManager.setFocused(open);
        if (!open) selectionManager.setFocusedKey(null);
    };
    let triggerState = (0, _useOverlayTriggerState.useOverlayTriggerState)({
        ...props,
        onOpenChange,
        isOpen: undefined,
        defaultOpen: undefined
    });
    let open = (focusStrategy = null, trigger)=>{
        let displayAllItems = trigger === 'manual' || trigger === 'focus' && menuTrigger === 'focus';
        // Prevent open operations from triggering if there is nothing to display
        // Also prevent open operations from triggering if items are uncontrolled but defaultItems is empty, even if displayAllItems is true.
        // This is to prevent comboboxes with empty defaultItems from opening but allow controlled items comboboxes to open even if the inital list is empty (assumption is user will provide swap the empty list with a base list via onOpenChange returning `menuTrigger` manual)
        if (allowsEmptyCollection || filteredCollection.size > 0 || displayAllItems && originalCollection.size > 0 || props.items) {
            if (displayAllItems && !triggerState.isOpen && props.items === undefined) // Show all items if menu is manually opened. Only care about this if items are undefined
            setShowAllItems(true);
            menuOpenTrigger.current = trigger;
            setFocusStrategy(focusStrategy);
            triggerState.open();
        }
    };
    let toggle = (focusStrategy = null, trigger)=>{
        let displayAllItems = trigger === 'manual' || trigger === 'focus' && menuTrigger === 'focus';
        // If the menu is closed and there is nothing to display, early return so toggle isn't called to prevent extraneous onOpenChange
        if (!(allowsEmptyCollection || filteredCollection.size > 0 || displayAllItems && originalCollection.size > 0 || props.items) && !triggerState.isOpen) return;
        if (displayAllItems && !triggerState.isOpen && props.items === undefined) // Show all items if menu is toggled open. Only care about this if items are undefined
        setShowAllItems(true);
        // Only update the menuOpenTrigger if menu is currently closed
        if (!triggerState.isOpen) menuOpenTrigger.current = trigger;
        toggleMenu(focusStrategy);
    };
    let updateLastCollection = (0, _react.useCallback)(()=>{
        setLastCollection(showAllItems ? originalCollection : filteredCollection);
    }, [
        showAllItems,
        originalCollection,
        filteredCollection
    ]);
    // If menu is going to close, save the current collection so we can freeze the displayed collection when the
    // user clicks outside the popover to close the menu. Prevents the menu contents from updating as the menu closes.
    let toggleMenu = (0, _react.useCallback)((focusStrategy = null)=>{
        if (triggerState.isOpen) updateLastCollection();
        setFocusStrategy(focusStrategy);
        triggerState.toggle();
    }, [
        triggerState,
        updateLastCollection
    ]);
    let closeMenu = (0, _react.useCallback)(()=>{
        if (triggerState.isOpen) {
            updateLastCollection();
            triggerState.close();
        }
    }, [
        triggerState,
        updateLastCollection
    ]);
    let [lastValue, setLastValue] = (0, _react.useState)(inputValue);
    let resetInputValue = ()=>{
        let itemText = selectedKey != null ? collection.getItem(selectedKey)?.textValue ?? '' : '';
        setLastValue(itemText);
        setInputValue(itemText);
    };
    let lastValueRef = (0, _react.useRef)(displayValue);
    let lastSelectedKeyText = (0, _react.useRef)(selectedKey != null ? collection.getItem(selectedKey)?.textValue ?? '' : '');
    // intentional omit dependency array, want this to happen on every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, _react.useEffect)(()=>{
        // Open and close menu automatically when the input value changes if the input is focused,
        // and there are items in the collection or allowEmptyCollection is true.
        if (isFocused && (filteredCollection.size > 0 || allowsEmptyCollection) && !triggerState.isOpen && inputValue !== lastValue && menuTrigger !== 'manual') // oxlint-disable-next-line react/react-compiler
        open(null, 'input');
        // Close the menu if the collection is empty. Don't close menu if filtered collection size is 0
        // but we are currently showing all items via button press
        if (!showAllItems && !allowsEmptyCollection && triggerState.isOpen && filteredCollection.size === 0) {
            closedDueToEmpty.current = true;
            closeMenu();
        }
        // Re-open the menu when items become non-empty after being auto-closed due to
        // an empty collection (e.g. async load completed with results after a previous empty response).
        // This works for both controlled items on ComboBox and Collection patterns
        // (where items are provided on the ListBox rather than the ComboBox).
        if (isFocused && closedDueToEmpty.current && filteredCollection.size > 0 && !triggerState.isOpen && menuTrigger !== 'manual') {
            closedDueToEmpty.current = false;
            open(null, 'input');
        }
        // Close when an item is selected.
        if (displayValue != null && displayValue !== lastValueRef.current && selectionMode === 'single') closeMenu();
        // Clear focused key when input value changes and display filtered collection again.
        if (inputValue !== lastValue) {
            selectionManager.setFocusedKey(null);
            setShowAllItems(false);
            // Set value to null when the user clears the input.
            // If controlled, this is the application developer's responsibility.
            if (selectionMode === 'single' && inputValue === '' && (props.inputValue === undefined || value === undefined)) setValue(null);
        }
        // If the value changed, update the input value.
        // Do nothing if both inputValue and value are controlled.
        // In this case, it's the user's responsibility to update inputValue in onSelectionChange.
        if (displayValue !== lastValueRef.current && (props.inputValue === undefined || value === undefined)) resetInputValue();
        else if (lastValue !== inputValue) setLastValue(inputValue);
        // Update the inputValue if the selected item's text changes from its last tracked value.
        // This is to handle cases where a selectedKey is specified but the items aren't available (async loading) or the selected item's text value updates.
        // Only reset if the user isn't currently within the field so we don't erroneously modify user input.
        // If inputValue is controlled, it is the user's responsibility to update the inputValue when items change.
        let selectedItemText = selectedKey != null ? collection.getItem(selectedKey)?.textValue ?? '' : '';
        if (!isFocused && selectedKey != null && props.inputValue === undefined && selectedKey === lastValueRef.current) {
            if (lastSelectedKeyText.current !== selectedItemText) {
                setLastValue(selectedItemText);
                setInputValue(selectedItemText);
            }
        }
        lastValueRef.current = displayValue;
        lastSelectedKeyText.current = selectedItemText;
    });
    let validation = (0, _useFormValidationState.useFormValidationState)({
        ...props,
        value: (0, _react.useMemo)(()=>Array.isArray(displayValue) && displayValue.length === 0 ? null : {
                inputValue,
                value: displayValue,
                selectedKey
            }, [
            inputValue,
            selectedKey,
            displayValue
        ])
    });
    // Revert input value and close menu
    let revert = ()=>{
        closedDueToEmpty.current = false;
        if (allowsCustomValue && selectedKey == null) commitCustomValue();
        else commitSelection();
    };
    let commitCustomValue = ()=>{
        if (selectionMode === 'multiple') {
            // In multi-select mode, the input's custom text is independent from the selected items.
            // Closing or committing the field should not clear the existing selection.
            setLastValue(inputValue);
            closeMenu();
            return;
        }
        let value = null;
        lastValueRef.current = value;
        setValue(value);
        closeMenu();
    };
    let commitSelection = (shouldForceSelectionChange = false)=>{
        // If multiple things are controlled, call onSelectionChange only when selecting the focused item,
        // or when inputValue needs to be synced back to the selected item on commit/blur.
        if (value !== undefined && props.inputValue !== undefined) {
            let itemText = selectedKey != null ? collection.getItem(selectedKey)?.textValue ?? '' : '';
            if (shouldForceSelectionChange || selectionMode === 'multiple' || inputValue !== itemText) {
                props.onSelectionChange?.(selectedKey);
                props.onChange?.(displayValue);
            }
            // Stop menu from reopening from useEffect
            setLastValue(itemText);
            closeMenu();
        } else {
            // If only a single aspect of combobox is controlled, reset input value and close menu for the user
            resetInputValue();
            closeMenu();
        }
    };
    const commitValue = ()=>{
        closedDueToEmpty.current = false;
        if (allowsCustomValue) {
            const itemText = selectedKey != null ? collection.getItem(selectedKey)?.textValue ?? '' : '';
            inputValue === itemText ? commitSelection() : commitCustomValue();
        } else // Reset inputValue and close menu
        commitSelection();
    };
    let commit = ()=>{
        if (triggerState.isOpen && selectionManager.focusedKey != null) {
            // Reset inputValue and close menu here if the selected key is already the focused key. Otherwise
            // fire onSelectionChange to allow the application to control the closing.
            if (selectionManager.isSelected(selectionManager.focusedKey) && selectionMode === 'single') commitSelection(true);
            else selectionManager.select(selectionManager.focusedKey);
        } else commitValue();
    };
    let valueOnFocus = (0, _react.useRef)([
        inputValue,
        displayValue
    ]);
    let setFocused = (isFocused)=>{
        if (isFocused) {
            valueOnFocus.current = [
                inputValue,
                displayValue
            ];
            if (menuTrigger === 'focus' && !props.isReadOnly) open(null, 'focus');
        } else {
            if (shouldCloseOnBlur) commitValue();
            // Commit validation if the input value or selected items changed.
            if (inputValue !== valueOnFocus.current[0] || displayValue !== valueOnFocus.current[1]) validation.commitValidation();
        }
        setFocusedState(isFocused);
    };
    let displayedCollection = (0, _react.useMemo)(()=>{
        if (triggerState.isOpen) {
            if (showAllItems) return originalCollection;
            else return filteredCollection;
        } else return lastCollection;
    }, [
        triggerState.isOpen,
        originalCollection,
        filteredCollection,
        showAllItems,
        lastCollection
    ]);
    let defaultSelectedKey = props.defaultSelectedKey ?? (selectionMode === 'single' ? initialValue : null);
    return {
        ...validation,
        ...triggerState,
        focusStrategy,
        toggle,
        open,
        close: commitValue,
        selectionManager,
        value: displayValue,
        defaultValue: defaultValue ?? initialValue,
        setValue,
        selectedKey,
        selectedItems,
        defaultSelectedKey,
        setSelectedKey: setValue,
        disabledKeys,
        isFocused,
        setFocused,
        selectedItem: selectedItems[0] ?? null,
        collection: displayedCollection,
        inputValue,
        defaultInputValue: getDefaultInputValue(props.defaultInputValue, defaultSelectedKey, collection) ?? initialInputValue,
        setInputValue,
        commit,
        revert
    };
}
function filterCollection(collection, inputValue, filter) {
    return new (0, _listCollection.ListCollection)(filterNodes(collection, collection, inputValue, filter));
}
function filterNodes(collection, nodes, inputValue, filter) {
    let filteredNode = [];
    for (let node of nodes){
        if (node.type === 'section' && node.hasChildNodes) {
            let filtered = filterNodes(collection, (0, _getChildNodes.getChildNodes)(node, collection), inputValue, filter);
            if ([
                ...filtered
            ].some((node)=>node.type === 'item')) filteredNode.push({
                ...node,
                childNodes: filtered
            });
        } else if (node.type === 'item' && filter(node.textValue, inputValue)) filteredNode.push({
            ...node
        });
        else if (node.type !== 'item') filteredNode.push({
            ...node
        });
    }
    return filteredNode;
}
function getDefaultInputValue(defaultInputValue, selectedKey, collection) {
    if (defaultInputValue == null) {
        if (selectedKey != null) return collection.getItem(selectedKey)?.textValue ?? '';
    }
    return defaultInputValue;
}
function convertValue(value) {
    if (value === undefined) return undefined;
    if (value === null) return [];
    return Array.isArray(value) ? value : [
        value
    ];
}

},{"../form/useFormValidationState":"491YW","../collections/getChildNodes":"9KbhA","../list/ListCollection":"11pGO","../list/useListState":"3g793","../overlays/useOverlayTriggerState":"457a8","react":"gOP0N","../utils/useControlledState":"8yNBD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

