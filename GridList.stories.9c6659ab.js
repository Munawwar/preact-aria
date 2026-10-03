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
})({"5FV81":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the behavior and accessibility implementation for a list component with interactive
 * children. A grid list displays data in a single column and enables a user to navigate its
 * contents via directional navigation keys.
 *
 * @param props - Props for the list.
 * @param state - State for the list, as returned by `useListState`.
 * @param ref - The ref attached to the list element.
 */ parcelHelpers.export(exports, "useGridList", ()=>useGridList);
var _filterDOMProps = require("../utils/filterDOMProps");
var _utils = require("./utils");
var _mergeProps = require("../utils/mergeProps");
var _useGridSelectionAnnouncement = require("../grid/useGridSelectionAnnouncement");
var _useHasTabbableChild = require("../focus/useHasTabbableChild");
var _useHighlightSelectionDescription = require("../grid/useHighlightSelectionDescription");
var _useId = require("../utils/useId");
var _useSelectableList = require("../selection/useSelectableList");
function useGridList(props, state, ref) {
    let { isVirtualized, keyboardDelegate, layoutDelegate, onAction, disallowTypeAhead, linkBehavior = 'action', keyboardNavigationBehavior = 'arrow', escapeKeyBehavior = 'clearSelection', shouldSelectOnPressUp } = props;
    if (!props['aria-label'] && !props['aria-labelledby']) console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let { listProps } = (0, _useSelectableList.useSelectableList)({
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        ref,
        keyboardDelegate,
        layoutDelegate,
        isVirtualized,
        selectOnFocus: state.selectionManager.selectionBehavior === 'replace',
        shouldFocusWrap: props.shouldFocusWrap,
        linkBehavior,
        disallowTypeAhead,
        autoFocus: props.autoFocus,
        escapeKeyBehavior,
        UNSTABLE_focusOnEntry: props.UNSTABLE_focusOnEntry
    });
    let id = (0, _useId.useId)(props.id);
    (0, _utils.listMap).set(state, {
        id,
        onAction,
        linkBehavior,
        keyboardNavigationBehavior,
        shouldSelectOnPressUp
    });
    let descriptionProps = (0, _useHighlightSelectionDescription.useHighlightSelectionDescription)({
        selectionManager: state.selectionManager,
        hasItemActions: !!onAction
    });
    let hasTabbableChild = (0, _useHasTabbableChild.useHasTabbableChild)(ref, {
        isDisabled: state.collection.size !== 0
    });
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    let gridProps = (0, _mergeProps.mergeProps)(domProps, {
        role: 'grid',
        id,
        'aria-multiselectable': state.selectionManager.selectionMode === 'multiple' ? 'true' : undefined
    }, // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    state.collection.size === 0 ? {
        tabIndex: hasTabbableChild ? -1 : 0
    } : listProps, descriptionProps);
    if (isVirtualized) {
        gridProps['aria-rowcount'] = state.collection.size;
        gridProps['aria-colcount'] = 1;
    }
    (0, _useGridSelectionAnnouncement.useGridSelectionAnnouncement)({}, state);
    return {
        gridProps
    };
}

},{"../utils/filterDOMProps":"h4XHF","./utils":"hgri6","../utils/mergeProps":"jycxS","../grid/useGridSelectionAnnouncement":"1oddZ","../focus/useHasTabbableChild":"gjEnQ","../grid/useHighlightSelectionDescription":"hmo1L","../utils/useId":"fQAcb","../selection/useSelectableList":"kK5el","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hgri6":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "listMap", ()=>listMap);
parcelHelpers.export(exports, "getRowId", ()=>getRowId);
parcelHelpers.export(exports, "normalizeKey", ()=>normalizeKey);
const listMap = new WeakMap();
function getRowId(state, key) {
    let { id } = listMap.get(state) ?? {};
    if (!id) throw new Error('Unknown list');
    return `${id}-${normalizeKey(key)}`;
}
function normalizeKey(key) {
    if (typeof key === 'string') return key.replace(/\s*/g, '');
    return '' + key;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kgaar":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the behavior and accessibility implementation for a row in a grid list.
 *
 * @param props - Props for the row.
 * @param state - State of the parent list, as returned by `useListState`.
 * @param ref - The ref attached to the row element.
 */ parcelHelpers.export(exports, "useGridListItem", ()=>useGridListItem);
var _chain = require("../utils/chain");
var _focusSafely = require("../interactions/focusSafely");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _focusScope = require("../focus/FocusScope");
var _domHelpers = require("../utils/domHelpers");
var _utils = require("./utils");
var _getScrollParent = require("../utils/getScrollParent");
var _react = require("react");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _mergeProps = require("../utils/mergeProps");
var _scrollIntoView = require("../utils/scrollIntoView");
var _useSelectableItem = require("../selection/useSelectableItem");
var _i18Nprovider = require("../i18n/I18nProvider");
var _useId = require("../utils/useId");
var _openLink = require("../utils/openLink");
const EXPANSION_KEYS = {
    expand: {
        ltr: 'ArrowRight',
        rtl: 'ArrowLeft'
    },
    collapse: {
        ltr: 'ArrowLeft',
        rtl: 'ArrowRight'
    }
};
function useGridListItem(props, state, ref) {
    // Copied from useGridCell + some modifications to make it not so grid specific
    let { node, isVirtualized, focusMode = 'row', allowsArrowNavigation } = props;
    // let stringFormatter = useLocalizedStringFormatter(intlMessages, '@react-aria/gridlist');
    let { direction } = (0, _i18Nprovider.useLocale)();
    let { onAction, linkBehavior, keyboardNavigationBehavior, shouldSelectOnPressUp } = (0, _utils.listMap).get(state);
    let descriptionId = (0, _useId.useSlotId)();
    // We need to track the key of the item at the time it was last focused so that we force
    // focus to go to the item when the DOM node is reused for a different item in a virtualizer.
    let keyWhenFocused = (0, _react.useRef)(null);
    let focus = ()=>{
        if (ref.current === null) return;
        if (focusMode === 'child') {
            // If focus is already on a focusable child within the row, early return so we don't shift focus
            if ((0, _domfunctions.isFocusWithin)(ref.current) && ref.current !== (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(ref.current))) return;
            let treeWalker = (0, _focusScope.getFocusableTreeWalker)(ref.current, {
                tabbable: true
            });
            let focusable = treeWalker.firstChild();
            if (focusable) {
                (0, _focusSafely.focusSafely)(focusable);
                (0, _scrollIntoView.scrollIntoViewport)(focusable, {
                    containingElement: (0, _getScrollParent.getScrollParent)(focusable)
                });
                return;
            }
        }
        // Don't shift focus to the row if the active element is a element within the row already
        // (e.g. clicking on a row button)
        if (keyWhenFocused.current != null && node.key !== keyWhenFocused.current || !(0, _domfunctions.isFocusWithin)(ref.current)) (0, _focusSafely.focusSafely)(ref.current);
    };
    let treeGridRowProps = {};
    let hasChildRows = props.hasChildItems;
    let hasLink = state.selectionManager.isLink(node.key);
    if (node != null && 'expandedKeys' in state) {
        // TODO: ideally node.hasChildNodes would be a way to tell if a row has child nodes, but the row's contents make it so that value is always
        // true...
        let children = state.collection.getChildren?.(node.key);
        hasChildRows = hasChildRows || [
            ...children ?? []
        ].length > 1;
        if (onAction == null && !hasLink && state.selectionManager.selectionMode === 'none' && hasChildRows) onAction = ()=>state.toggleKey(node.key);
        let isExpanded = hasChildRows ? state.expandedKeys.has(node.key) : undefined;
        let setSize = 1;
        let index = node.index;
        if (node.level >= 0 && node?.parentKey != null) {
            let parent = state.collection.getItem(node.parentKey);
            if (parent) {
                // siblings must exist because our original node exists
                let siblings = getDirectChildren(parent, state.collection);
                setSize = [
                    ...siblings
                ].filter((row)=>row.type === 'item').length;
                if (index > 0 && siblings[0].type !== 'item') index -= 1; // subtract one for the parent item's content node
            }
        } else setSize = [
            ...state.collection
        ].filter((row)=>row.level === 0 && row.type === 'item').length;
        treeGridRowProps = {
            'aria-expanded': isExpanded,
            'aria-level': node.level + 1,
            'aria-posinset': index + 1,
            'aria-setsize': setSize
        };
    }
    let { itemProps, ...itemStates } = (0, _useSelectableItem.useSelectableItem)({
        selectionManager: state.selectionManager,
        key: node.key,
        ref,
        isVirtualized,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp || shouldSelectOnPressUp,
        onAction: onAction || node.props?.onAction ? (0, _chain.chain)(node.props?.onAction, onAction ? ()=>onAction(node.key) : undefined) : undefined,
        focus,
        linkBehavior
    });
    let onKeyDownCapture = (e)=>{
        let activeElement = (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(ref.current));
        if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e)) || !ref.current || !activeElement) return;
        let walker = (0, _focusScope.getFocusableTreeWalker)(ref.current);
        walker.currentNode = activeElement;
        if (handleTreeExpansionKeys(e, state, node, hasChildRows, direction, activeElement, ref.current, allowsArrowNavigation)) return;
        switch(e.key){
            case 'ArrowLeft':
                if (keyboardNavigationBehavior === 'arrow') {
                    // Find the next focusable element within the row.
                    let focusable = direction === 'rtl' ? walker.nextNode() : walker.previousNode();
                    if (focusable) {
                        e.preventDefault();
                        e.stopPropagation();
                        (0, _focusSafely.focusSafely)(focusable);
                        (0, _scrollIntoView.scrollIntoViewport)(focusable, {
                            containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
                        });
                    } else {
                        // If there is no next focusable child, then return focus back to the row
                        e.preventDefault();
                        e.stopPropagation();
                        if (direction === 'rtl') {
                            (0, _focusSafely.focusSafely)(ref.current);
                            (0, _scrollIntoView.scrollIntoViewport)(ref.current, {
                                containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
                            });
                        } else {
                            walker.currentNode = ref.current;
                            let lastElement = last(walker);
                            // oxlint-disable-next-line max-depth
                            if (lastElement) {
                                (0, _focusSafely.focusSafely)(lastElement);
                                (0, _scrollIntoView.scrollIntoViewport)(lastElement, {
                                    containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
                                });
                            }
                        }
                    }
                }
                break;
            case 'ArrowRight':
                if (keyboardNavigationBehavior === 'arrow') {
                    let focusable = direction === 'rtl' ? walker.previousNode() : walker.nextNode();
                    if (focusable) {
                        e.preventDefault();
                        e.stopPropagation();
                        (0, _focusSafely.focusSafely)(focusable);
                        (0, _scrollIntoView.scrollIntoViewport)(focusable, {
                            containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
                        });
                    } else {
                        e.preventDefault();
                        e.stopPropagation();
                        if (direction === 'ltr') {
                            (0, _focusSafely.focusSafely)(ref.current);
                            (0, _scrollIntoView.scrollIntoViewport)(ref.current, {
                                containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
                            });
                        } else {
                            walker.currentNode = ref.current;
                            let lastElement = last(walker);
                            // oxlint-disable-next-line max-depth
                            if (lastElement) {
                                (0, _focusSafely.focusSafely)(lastElement);
                                (0, _scrollIntoView.scrollIntoViewport)(lastElement, {
                                    containingElement: (0, _getScrollParent.getScrollParent)(ref.current)
                                });
                            }
                        }
                    }
                }
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                // Prevent this event from reaching row children, e.g. menu buttons. We want arrow keys to navigate
                // to the row above/below instead. We need to re-dispatch the event from a higher parent so it still
                // bubbles and gets handled by useSelectableCollection.
                if (!e.altKey && (0, _domfunctions.nodeContains)(ref.current, (0, _domfunctions.getEventTarget)(e))) {
                    e.stopPropagation();
                    e.preventDefault();
                    ref.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                }
                break;
        }
    };
    let onFocus = (e)=>{
        keyWhenFocused.current = node.key;
        if ((0, _domfunctions.getEventTarget)(e) !== ref.current) {
            // useSelectableItem only handles setting the focused key when
            // the focused element is the row itself. We also want to
            // set the focused key when a child element receives focus.
            // If focus is currently visible (e.g. the user is navigating with the keyboard),
            // then skip this. We want to restore focus to the previously focused row
            // in that case since the list should act like a single tab stop.
            if (!(0, _useFocusVisible.isFocusVisible)()) state.selectionManager.setFocusedKey(node.key);
            return;
        }
        // if focus goes back to cell from child, make sure we don't refocus the cell if we are in focusMode=child
        // since that would be a focus trap
        if (focusMode === 'child' && e.relatedTarget && (0, _domfunctions.nodeContains)(ref.current, e.relatedTarget)) return;
        // If the cell itself is focused, wait a frame so that focus finishes propagating
        // up to the tree, and move focus to a focusable child if possible.
        requestAnimationFrame(()=>{
            if (focusMode === 'child' && (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(ref.current)) === ref.current) focus();
        });
    };
    let onKeyDown = (e)=>{
        let activeElement = (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(ref.current));
        if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e)) || !ref.current || !activeElement) return;
        if (keyboardNavigationBehavior === 'tab') {
            // Stop propagation for all events that originate from the children of the gridlist item since we don't want to trigger
            // grid level interactions (row navigation/typeselect/etc)
            // exception made for Tab since that needs to propagate to useSelectableCollection to tab out of the gridlist, might be others?
            if ((0, _domfunctions.getEventTarget)(e) !== ref.current && e.key !== 'Tab') {
                e.stopPropagation();
                return;
            }
            if (handleTreeExpansionKeys(e, state, node, hasChildRows, direction, activeElement, ref.current, allowsArrowNavigation)) return;
        }
        switch(e.key){
            case 'Tab':
                if (keyboardNavigationBehavior === 'tab') {
                    // If there is another focusable element within this item, stop propagation so the tab key
                    // is handled by the browser and not by useSelectableCollection (which would take us out of the list).
                    let walker = (0, _focusScope.getFocusableTreeWalker)(ref.current, {
                        tabbable: true
                    });
                    walker.currentNode = activeElement;
                    let next = e.shiftKey ? walker.previousNode() : walker.nextNode();
                    if (next) e.stopPropagation();
                }
        }
    };
    let syntheticLinkProps = (0, _openLink.useSyntheticLinkProps)(node.props);
    let linkProps = itemStates.hasAction ? syntheticLinkProps : {};
    // TODO: re-add when we get translations and fix this for iOS VO
    // let rowAnnouncement;
    // if (onAction) {
    //   rowAnnouncement = stringFormatter.format('hasActionAnnouncement');
    // } else if (hasLink) {
    //   rowAnnouncement = stringFormatter.format('hasLinkAnnouncement', {
    //     link: node.props.href
    //   });
    // }
    // oxlint-disable-next-line react/react-compiler
    let rowProps = (0, _mergeProps.mergeProps)(itemProps, linkProps, {
        role: 'row',
        onKeyDownCapture: keyboardNavigationBehavior === 'arrow' || allowsArrowNavigation ? onKeyDownCapture : undefined,
        onFocus,
        // 'aria-label': [(node.textValue || undefined), rowAnnouncement].filter(Boolean).join(', '),
        'aria-label': node['aria-label'] || node.textValue || undefined,
        'aria-selected': state.selectionManager.canSelectItem(node.key) ? state.selectionManager.isSelected(node.key) : undefined,
        'aria-disabled': state.selectionManager.isDisabled(node.key) || undefined,
        'aria-labelledby': descriptionId && (node['aria-label'] || node.textValue) ? `${(0, _utils.getRowId)(state, node.key)} ${descriptionId}` : undefined,
        id: (0, _utils.getRowId)(state, node.key)
    });
    if (focusMode === 'child' && allowsArrowNavigation && keyboardNavigationBehavior === 'tab') rowProps.tabIndex = -1;
    // we need to guard against space/enter triggering selection/row link via usePress (from itemProps) so check if propagation
    // is stopped. this also fixes space not working in a textfield in a tree parent row
    let baseOnKeyDown = rowProps.onKeyDown;
    rowProps.onKeyDown = (e)=>{
        onKeyDown(e);
        if (!e.isPropagationStopped()) baseOnKeyDown?.(e);
    };
    if (isVirtualized) {
        let { collection } = state;
        let nodes = [
            ...collection
        ];
        // TODO: refactor ListCollection to store an absolute index of a node's position?
        rowProps['aria-rowindex'] = nodes.find((node)=>node.type === 'section') ? [
            ...collection.getKeys()
        ].filter((key)=>collection.getItem(key)?.type !== 'section').findIndex((key)=>key === node.key) + 1 : node.index + 1;
    }
    let gridCellProps = {
        role: 'gridcell',
        'aria-colindex': 1
    };
    // TODO: should isExpanded and hasChildRows be a item state that gets returned by the hook?
    // oxlint-disable react/react-compiler
    return {
        rowProps: {
            ...(0, _mergeProps.mergeProps)(rowProps, treeGridRowProps)
        },
        gridCellProps,
        descriptionProps: {
            id: descriptionId
        },
        ...itemStates
    };
// oxlint-enable react/react-compiler
}
function handleTreeExpansionKeys(e, state, node, hasChildRows, direction, activeElement, rowRef, allowsArrowNavigation) {
    if (!('expandedKeys' in state) || !allowsArrowNavigation && activeElement !== rowRef) return false;
    if (e.key === EXPANSION_KEYS['expand'][direction] && state.selectionManager.focusedKey === node.key && hasChildRows && !state.expandedKeys.has(node.key)) {
        state.toggleKey(node.key);
        e.stopPropagation();
        return true;
    } else if (e.key === EXPANSION_KEYS['collapse'][direction] && state.selectionManager.focusedKey === node.key) {
        // If item is collapsible, collapse it; else move to parent
        if (hasChildRows && state.expandedKeys.has(node.key)) {
            state.toggleKey(node.key);
            e.stopPropagation();
            return true;
        } else if (!state.expandedKeys.has(node.key) && node.parentKey && state.collection.getItem(node.parentKey)?.type === 'item') {
            // Item is a leaf or already collapsed, move focus to parent
            state.selectionManager.setFocusedKey(node.parentKey);
            e.stopPropagation();
            return true;
        }
    }
    return false;
}
function last(walker) {
    let next = null;
    let last = null;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last);
    return next;
}
function getDirectChildren(parent, collection) {
    // We can't assume that we can use firstChildKey because if a person builds a tree using hooks, they would not have access to that property (using type Node vs CollectionNode)
    // Instead, get all children and start at the first node (rather than just using firstChildKey) and only look at its siblings
    let children = collection.getChildren?.(parent.key);
    let childArray = children ? Array.from(children) : [];
    let node = childArray.length > 0 ? childArray[0] : null;
    let siblings = [];
    while(node){
        siblings.push(node);
        node = node.nextKey != null ? collection.getItem(node.nextKey) : null;
    }
    return siblings;
}

},{"../utils/chain":"bQmEj","../interactions/focusSafely":"2xT6S","../utils/shadowdom/DOMFunctions":"8kfpz","../focus/FocusScope":"E8d3D","../utils/domHelpers":"cYkFa","./utils":"hgri6","../utils/getScrollParent":"NRzeg","react":"gOP0N","../interactions/useFocusVisible":"aBfUW","../utils/mergeProps":"jycxS","../utils/scrollIntoView":"5N7nL","../selection/useSelectableItem":"3SFOH","../i18n/I18nProvider":"czGuc","../utils/useId":"fQAcb","../utils/openLink":"gH3wl","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

