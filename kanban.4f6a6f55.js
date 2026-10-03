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
})({"ll66s":[function(require,module,exports,__globalThis) {
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
 * Handles drop interactions for a target within a droppable collection.
 */ parcelHelpers.export(exports, "useDropIndicator", ()=>useDropIndicator);
var _dragManager = require("./DragManager");
var _utils = require("./utils");
var _indexJs = require("../../intl/dnd/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _useDroppableItem = require("./useDroppableItem");
var _useId = require("../utils/useId");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
function useDropIndicator(props, state, ref) {
    let { target } = props;
    let { collection } = state;
    let stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/dnd');
    let dragSession = _dragManager.useDragSession();
    let { dropProps } = (0, _useDroppableItem.useDroppableItem)(props, state, ref);
    let id = (0, _useId.useId)();
    let getText = (key)=>{
        if (key == null) return '';
        else return collection.getTextValue?.(key) ?? collection.getItem(key)?.textValue ?? '';
    };
    let label = '';
    let labelledBy;
    if (target.type === 'root') {
        label = stringFormatter.format('dropOnRoot');
        labelledBy = `${id} ${(0, _utils.getDroppableCollectionId)(state)}`;
    } else if (target.dropPosition === 'on') label = stringFormatter.format('dropOnItem', {
        itemText: getText(target.key)
    });
    else {
        let before;
        let after;
        if (target.dropPosition === 'before') {
            let prevKey = collection.getItem(target.key)?.prevKey;
            let prevNode = prevKey != null ? collection.getItem(prevKey) : null;
            before = prevNode?.type === 'item' ? prevNode.key : null;
        } else before = target.key;
        if (target.dropPosition === 'after') {
            let nextKey = collection.getItem(target.key)?.nextKey;
            let nextNode = nextKey != null ? collection.getItem(nextKey) : null;
            after = nextNode?.type === 'item' ? nextNode.key : null;
        } else after = target.key;
        if (before != null && after != null) label = stringFormatter.format('insertBetween', {
            beforeItemText: getText(before),
            afterItemText: getText(after)
        });
        else if (before != null) label = stringFormatter.format('insertAfter', {
            itemText: getText(before)
        });
        else if (after != null) label = stringFormatter.format('insertBefore', {
            itemText: getText(after)
        });
    }
    let isDropTarget = state.isDropTarget(target);
    let ariaHidden = !dragSession ? 'true' : dropProps['aria-hidden'];
    return {
        dropIndicatorProps: {
            ...dropProps,
            id,
            'aria-roledescription': stringFormatter.format('dropIndicator'),
            'aria-label': label,
            'aria-labelledby': labelledBy,
            'aria-hidden': ariaHidden,
            tabIndex: -1
        },
        isDropTarget,
        // If aria-hidden, we are either not in a drag session or the drop target is invalid.
        // In that case, there's no need to render anything at all unless we need to show the indicator visually.
        // This can happen when dragging using the native DnD API as opposed to keyboard dragging.
        isHidden: !isDropTarget && !!ariaHidden
    };
}

},{"./DragManager":"9KS88","./utils":"UrIm3","../../intl/dnd/index.js":"ccBG3","./useDroppableItem":"eh12n","../utils/useId":"fQAcb","../i18n/useLocalizedStringFormatter":"8lll3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eh12n":[function(require,module,exports,__globalThis) {
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
 * Handles drop interactions for an item within a collection component.
 */ parcelHelpers.export(exports, "useDroppableItem", ()=>useDroppableItem);
var _dragManager = require("./DragManager");
var _utils = require("./utils");
var _react = require("react");
var _useVirtualDrop = require("./useVirtualDrop");
function useDroppableItem(options, state, ref) {
    let { dropProps } = (0, _useVirtualDrop.useVirtualDrop)();
    let droppableCollectionRef = (0, _utils.getDroppableCollectionRef)(state);
    (0, _react.useEffect)(()=>{
        if (ref.current) return _dragManager.registerDropItem({
            element: ref.current,
            target: options.target,
            getDropOperation (types, allowedOperations) {
                let { draggingKeys } = (0, _utils.globalDndState);
                let isInternal = (0, _utils.isInternalDropOperation)(droppableCollectionRef);
                return state.getDropOperation({
                    target: options.target,
                    types,
                    allowedOperations,
                    isInternal,
                    draggingKeys
                });
            },
            activateButtonRef: options.activateButtonRef
        });
    }, [
        ref,
        options.target,
        state,
        droppableCollectionRef,
        options.activateButtonRef
    ]);
    let dragSession = _dragManager.useDragSession();
    let { draggingKeys } = (0, _utils.globalDndState);
    let isInternal = (0, _utils.isInternalDropOperation)(droppableCollectionRef);
    let isValidDropTarget = dragSession && state.getDropOperation({
        target: options.target,
        types: (0, _utils.getTypes)(dragSession.dragTarget.items),
        allowedOperations: dragSession.dragTarget.allowedDropOperations,
        isInternal,
        draggingKeys
    }) !== 'cancel';
    let isDropTarget = state.isDropTarget(options.target);
    (0, _react.useEffect)(()=>{
        if (dragSession && isDropTarget && ref.current) ref.current.focus();
    }, [
        isDropTarget,
        dragSession,
        ref
    ]);
    return {
        dropProps: {
            ...dropProps,
            'aria-hidden': !dragSession || isValidDropTarget ? undefined : 'true'
        },
        isDropTarget
    };
}

},{"./DragManager":"9KS88","./utils":"UrIm3","react":"gOP0N","./useVirtualDrop":"kh2nc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"80jjR":[function(require,module,exports,__globalThis) {
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
 * Handles drop interactions for a collection component, with support for traditional mouse and
 * touch based drag and drop, in addition to full parity for keyboard and screen reader users.
 */ parcelHelpers.export(exports, "useDroppableCollection", ()=>useDroppableCollection);
var _utils = require("./utils");
var _dragManager = require("./DragManager");
var _react = require("react");
var _mergeProps = require("../utils/mergeProps");
var _dropTargetKeyboardNavigation = require("./DropTargetKeyboardNavigation");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _useAutoScroll = require("./useAutoScroll");
var _useDrop = require("./useDrop");
var _useId = require("../utils/useId");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _i18Nprovider = require("../i18n/I18nProvider");
function useDroppableCollection(props, state, ref) {
    // oxlint-disable-next-line react/react-compiler
    let localState = (0, _react.useRef)({
        props,
        state,
        nextTarget: null,
        dropOperation: null
    }).current;
    localState.props = props;
    localState.state = state;
    let defaultOnDrop = (0, _react.useCallback)(async (e)=>{
        let { onInsert, onRootDrop, onItemDrop, onReorder, onMove, acceptedDragTypes = 'all', shouldAcceptItemDrop } = localState.props;
        let { draggingKeys } = (0, _utils.globalDndState);
        let isInternal = (0, _utils.isInternalDropOperation)(ref);
        let { target, dropOperation, items } = e;
        let filteredItems = items;
        if (acceptedDragTypes !== 'all' || shouldAcceptItemDrop) filteredItems = items.filter((item)=>{
            let itemTypes;
            if (item.kind === 'directory') itemTypes = new Set([
                (0, _utils.DIRECTORY_DRAG_TYPE)
            ]);
            else itemTypes = item.kind === 'file' ? new Set([
                item.type
            ]) : item.types;
            // oxlint-disable-next-line react/react-compiler
            if (acceptedDragTypes === 'all' || acceptedDragTypes.some((type)=>itemTypes.has(type))) {
                // If we are performing a on item drop, check if the item in question accepts the dropped item since the item may have heavier restrictions
                // than the droppable collection itself
                if (target.type === 'item' && target.dropPosition === 'on' && shouldAcceptItemDrop) return shouldAcceptItemDrop(target, itemTypes);
                return true;
            }
            return false;
        });
        if (filteredItems.length > 0) {
            if (target.type === 'root' && onRootDrop) await onRootDrop({
                items: filteredItems,
                dropOperation
            });
            if (target.type === 'item') {
                if (target.dropPosition === 'on' && onItemDrop) await onItemDrop({
                    items: filteredItems,
                    dropOperation,
                    isInternal,
                    target
                });
                if (onMove && isInternal) await onMove({
                    keys: draggingKeys,
                    dropOperation,
                    target
                });
                if (target.dropPosition !== 'on') {
                    if (!isInternal && onInsert) await onInsert({
                        items: filteredItems,
                        dropOperation,
                        target
                    });
                    if (isInternal && onReorder) await onReorder({
                        keys: draggingKeys,
                        dropOperation,
                        target
                    });
                }
            }
        }
    }, [
        localState,
        ref
    ]);
    let autoScroll = (0, _useAutoScroll.useAutoScroll)(ref);
    let { dropProps } = (0, _useDrop.useDrop)({
        ref,
        onDropEnter () {
            if (localState.nextTarget != null) state.setTarget(localState.nextTarget);
        },
        onDropMove (e) {
            if (localState.nextTarget != null) state.setTarget(localState.nextTarget);
            autoScroll.move(e.x, e.y);
        },
        getDropOperationForPoint (types, allowedOperations, x, y) {
            let { draggingKeys, dropCollectionRef } = (0, _utils.globalDndState);
            let isInternal = (0, _utils.isInternalDropOperation)(ref);
            let isValidDropTarget = (target)=>state.getDropOperation({
                    target,
                    types,
                    allowedOperations,
                    isInternal,
                    draggingKeys
                }) !== 'cancel';
            let target = props.dropTargetDelegate.getDropTargetFromPoint(x, y, isValidDropTarget);
            if (!target) {
                localState.dropOperation = 'cancel';
                localState.nextTarget = null;
                return 'cancel';
            }
            localState.dropOperation = state.getDropOperation({
                target,
                types,
                allowedOperations,
                isInternal,
                draggingKeys
            });
            // If the target doesn't accept the drop, see if the root accepts it instead.
            if (localState.dropOperation === 'cancel') {
                let rootTarget = {
                    type: 'root'
                };
                let dropOperation = state.getDropOperation({
                    target: rootTarget,
                    types,
                    allowedOperations,
                    isInternal,
                    draggingKeys
                });
                if (dropOperation !== 'cancel') {
                    target = rootTarget;
                    localState.dropOperation = dropOperation;
                }
            }
            // Only set dropCollectionRef if there is a valid drop target since we cleanup dropCollectionRef in onDropExit
            // which only runs when leaving a valid drop target or if the dropEffect become none (mouse dnd only).
            if (target && localState.dropOperation !== 'cancel' && ref?.current !== dropCollectionRef?.current) (0, _utils.setDropCollectionRef)(ref);
            localState.nextTarget = localState.dropOperation === 'cancel' ? null : target;
            return localState.dropOperation;
        },
        onDropExit () {
            (0, _utils.setDropCollectionRef)(undefined);
            state.setTarget(null);
            autoScroll.stop();
        },
        onDropActivate (e) {
            if (state.target?.type === 'item' && typeof props.onDropActivate === 'function') props.onDropActivate({
                type: 'dropactivate',
                x: e.x,
                y: e.y,
                target: state.target
            });
        },
        onDrop (e) {
            (0, _utils.setDropCollectionRef)(ref);
            if (state.target) onDrop(e, state.target);
            // If there wasn't a collection being tracked as a dragged collection, then we are in a case where a non RSP drag is dropped on a
            // RSP collection and thus we don't need to preserve the global DnD state for onDragEnd
            let { draggingCollectionRef } = (0, _utils.globalDndState);
            if (draggingCollectionRef == null) (0, _utils.clearGlobalDnDState)();
        }
    });
    let droppingState = (0, _react.useRef)(null);
    let updateFocusAfterDrop = (0, _react.useCallback)(()=>{
        let { state } = localState;
        if (droppingState.current) {
            let { target, collection: prevCollection, selectedKeys: prevSelectedKeys, focusedKey: prevFocusedKey, isInternal, draggingKeys } = droppingState.current;
            // If an insert occurs during a drop, we want to immediately select these items to give
            // feedback to the user that a drop occurred. Only do this if the selection didn't change
            // since the drop started so we don't override if the user or application did something.
            if (state.collection.size > prevCollection.size && state.selectionManager.isSelectionEqual(prevSelectedKeys)) {
                let newKeys = new Set();
                let key = state.collection.getFirstKey();
                while(key != null){
                    let item = state.collection.getItem(key);
                    if (item?.type === 'item' && !prevCollection.getItem(item.key)) newKeys.add(item.key);
                    if (item?.hasChildNodes && state.collection.getItem(item.lastChildKey)?.type === 'item') key = item.firstChildKey;
                    else key = state.collection.getKeyAfter(key);
                }
                state.selectionManager.setSelectedKeys(newKeys);
                // If the focused item didn't change since the drop occurred, also focus the first
                // inserted item. If selection is disabled, then also show the focus ring so there
                // is some indication that items were added.
                if (state.selectionManager.focusedKey === prevFocusedKey) {
                    let first = newKeys.keys().next().value;
                    if (first != null) {
                        let item = state.collection.getItem(first);
                        let dropTarget = droppingState.current.target;
                        let isParentRowExpanded = state.collection['expandedKeys'] ? state.collection['expandedKeys'].has(item?.parentKey) : false;
                        // If this is a cell, focus the parent row.
                        // eslint-disable-next-line max-depth
                        if (item && (item?.type === 'cell' || dropTarget.type === 'item' && dropTarget.dropPosition === 'on' && !isParentRowExpanded)) first = item.parentKey;
                        // eslint-disable-next-line max-depth
                        if (first != null) state.selectionManager.setFocusedKey(first);
                        // eslint-disable-next-line max-depth
                        if (state.selectionManager.selectionMode === 'none') (0, _useFocusVisible.setInteractionModality)('keyboard');
                    }
                }
            } else if (prevFocusedKey != null && state.selectionManager.focusedKey === prevFocusedKey && isInternal && target.type === 'item' && target.dropPosition !== 'on' && draggingKeys.has(state.collection.getItem(prevFocusedKey)?.parentKey)) {
                // Focus row instead of cell when reordering.
                state.selectionManager.setFocusedKey(state.collection.getItem(prevFocusedKey)?.parentKey ?? null);
                (0, _useFocusVisible.setInteractionModality)('keyboard');
            } else if (state.selectionManager.focusedKey === prevFocusedKey && target.type === 'item' && target.dropPosition === 'on' && state.collection.getItem(target.key) != null) {
                // If focus didn't move already (e.g. due to an insert), and the user dropped on an item,
                // focus that item and show the focus ring to give the user feedback that the drop occurred.
                // Also show the focus ring if the focused key is not selected, e.g. in case of a reorder.
                state.selectionManager.setFocusedKey(target.key);
                (0, _useFocusVisible.setInteractionModality)('keyboard');
            } else if (state.selectionManager.focusedKey != null && !state.selectionManager.isSelected(state.selectionManager.focusedKey)) (0, _useFocusVisible.setInteractionModality)('keyboard');
            state.selectionManager.setFocused(true);
        }
    }, [
        localState
    ]);
    let onDrop = (0, _react.useCallback)((e, target)=>{
        let { state } = localState;
        // Save some state of the collection/selection before the drop occurs so we can compare later.
        droppingState.current = {
            timeout: undefined,
            focusedKey: state.selectionManager.focusedKey,
            collection: state.collection,
            selectedKeys: state.selectionManager.selectedKeys,
            draggingKeys: (0, _utils.globalDndState).draggingKeys,
            isInternal: (0, _utils.isInternalDropOperation)(ref),
            target
        };
        let onDropFn = localState.props.onDrop || defaultOnDrop;
        onDropFn({
            type: 'drop',
            x: e.x,
            y: e.y,
            target,
            items: e.items,
            dropOperation: e.dropOperation
        });
        // Wait for a short time period after the onDrop is called to allow the data to be read asynchronously
        // and for React to re-render. If the collection didn't already change during this time (handled below),
        // update the focused key here.
        droppingState.current.timeout = setTimeout(()=>{
            updateFocusAfterDrop();
            droppingState.current = null;
        }, 50);
    }, [
        localState,
        defaultOnDrop,
        ref,
        updateFocusAfterDrop
    ]);
    (0, _react.useEffect)(()=>{
        return ()=>{
            if (droppingState.current) clearTimeout(droppingState.current.timeout);
        };
    }, []);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        // If the collection changed after a drop, update the focused key.
        if (droppingState.current && state.collection !== droppingState.current.collection) updateFocusAfterDrop();
    });
    let { direction } = (0, _i18Nprovider.useLocale)();
    (0, _react.useEffect)(()=>{
        if (!ref.current) return;
        let getNextTarget = (target, wrap = true, key = 'down')=>{
            return (0, _dropTargetKeyboardNavigation.navigate)(localState.props.keyboardDelegate, localState.state.collection, target, key, direction === 'rtl', wrap);
        };
        let getPreviousTarget = (target, wrap = true)=>{
            return getNextTarget(target, wrap, 'up');
        };
        let nextValidTarget = (target, types, allowedDropOperations, getNextTarget, wrap = true)=>{
            let seenRoot = 0;
            let operation;
            let { draggingKeys } = (0, _utils.globalDndState);
            let isInternal = (0, _utils.isInternalDropOperation)(ref);
            do {
                let nextTarget = getNextTarget(target, wrap);
                if (!nextTarget) return null;
                target = nextTarget;
                operation = localState.state.getDropOperation({
                    target: nextTarget,
                    types,
                    allowedOperations: allowedDropOperations,
                    isInternal,
                    draggingKeys
                });
                if (target.type === 'root') seenRoot++;
            }while (operation === 'cancel' && !localState.state.isDropTarget(target) && seenRoot < 2);
            if (operation === 'cancel') return null;
            return target;
        };
        return _dragManager.registerDropTarget({
            element: ref.current,
            preventFocusOnDrop: true,
            getDropOperation (types, allowedOperations) {
                if (localState.state.target) {
                    let { draggingKeys } = (0, _utils.globalDndState);
                    let isInternal = (0, _utils.isInternalDropOperation)(ref);
                    return localState.state.getDropOperation({
                        target: localState.state.target,
                        types,
                        allowedOperations,
                        isInternal,
                        draggingKeys
                    });
                }
                // Check if any of the targets accept the drop.
                // TODO: should we have a faster way of doing this or e.g. for pagination?
                let target = nextValidTarget(null, types, allowedOperations, getNextTarget);
                return target ? 'move' : 'cancel';
            },
            onDropEnter (e, drag) {
                let types = (0, _utils.getTypes)(drag.items);
                let selectionManager = localState.state.selectionManager;
                let target = null;
                // Update the drop collection ref tracker for useDroppableItem's getDropOperation isInternal check
                (0, _utils.setDropCollectionRef)(ref);
                // When entering the droppable collection for the first time, the default drop target
                // is after the focused key.
                let key = selectionManager.focusedKey;
                let dropPosition = 'after';
                // If the focused key is a cell, get the parent item instead.
                // For now, we assume that individual cells cannot be dropped on.
                let item = key != null ? localState.state.collection.getItem(key) : null;
                if (item?.type === 'cell') key = item.parentKey;
                // If the focused item is also selected, the default drop target is after the last selected item.
                // But if the focused key is the first selected item, then default to before the first selected item.
                // This is to make reordering lists slightly easier. If you select top down, we assume you want to
                // move the items down. If you select bottom up, we assume you want to move the items up.
                if (key != null && selectionManager.isSelected(key)) {
                    if (selectionManager.selectedKeys.size > 1 && selectionManager.firstSelectedKey === key) dropPosition = 'before';
                    else key = selectionManager.lastSelectedKey;
                }
                if (key != null) {
                    target = {
                        type: 'item',
                        key,
                        dropPosition
                    };
                    let { draggingKeys } = (0, _utils.globalDndState);
                    let isInternal = (0, _utils.isInternalDropOperation)(ref);
                    // If the default target is not valid, find the next one that is.
                    if (localState.state.getDropOperation({
                        target,
                        types,
                        allowedOperations: drag.allowedDropOperations,
                        isInternal,
                        draggingKeys
                    }) === 'cancel') target = nextValidTarget(target, types, drag.allowedDropOperations, getNextTarget, false) ?? nextValidTarget(target, types, drag.allowedDropOperations, getPreviousTarget, false);
                }
                // If no focused key, then start from the root.
                if (!target) target = nextValidTarget(null, types, drag.allowedDropOperations, getNextTarget);
                localState.state.setTarget(target);
            },
            onDropExit () {
                (0, _utils.setDropCollectionRef)(undefined);
                localState.state.setTarget(null);
            },
            onDropTargetEnter (target) {
                localState.state.setTarget(target);
            },
            onDropActivate (e, target) {
                if (target?.type === 'item' && target?.dropPosition === 'on' && typeof localState.props.onDropActivate === 'function') localState.props.onDropActivate({
                    type: 'dropactivate',
                    x: e.x,
                    y: e.y,
                    target
                });
            },
            onDrop (e, target) {
                (0, _utils.setDropCollectionRef)(ref);
                if (localState.state.target) onDrop(e, target || localState.state.target);
            },
            onKeyDown (e, drag) {
                let { keyboardDelegate } = localState.props;
                let types = (0, _utils.getTypes)(drag.items);
                switch(e.key){
                    case 'ArrowDown':
                        if (keyboardDelegate.getKeyBelow) {
                            let target = nextValidTarget(localState.state.target, types, drag.allowedDropOperations, (target, wrap)=>getNextTarget(target, wrap, 'down'));
                            localState.state.setTarget(target);
                        }
                        break;
                    case 'ArrowUp':
                        if (keyboardDelegate.getKeyAbove) {
                            let target = nextValidTarget(localState.state.target, types, drag.allowedDropOperations, (target, wrap)=>getNextTarget(target, wrap, 'up'));
                            localState.state.setTarget(target);
                        }
                        break;
                    case 'ArrowLeft':
                        if (keyboardDelegate.getKeyLeftOf) {
                            let target = nextValidTarget(localState.state.target, types, drag.allowedDropOperations, (target, wrap)=>getNextTarget(target, wrap, 'left'));
                            localState.state.setTarget(target);
                        }
                        break;
                    case 'ArrowRight':
                        if (keyboardDelegate.getKeyRightOf) {
                            let target = nextValidTarget(localState.state.target, types, drag.allowedDropOperations, (target, wrap)=>getNextTarget(target, wrap, 'right'));
                            localState.state.setTarget(target);
                        }
                        break;
                    case 'Home':
                        if (keyboardDelegate.getFirstKey) {
                            let target = nextValidTarget(null, types, drag.allowedDropOperations, getNextTarget);
                            localState.state.setTarget(target);
                        }
                        break;
                    case 'End':
                        if (keyboardDelegate.getLastKey) {
                            let target = nextValidTarget(null, types, drag.allowedDropOperations, getPreviousTarget);
                            localState.state.setTarget(target);
                        }
                        break;
                    case 'PageDown':
                        if (keyboardDelegate.getKeyPageBelow) {
                            let target = localState.state.target;
                            if (!target) target = nextValidTarget(null, types, drag.allowedDropOperations, getNextTarget);
                            else {
                                // If on the root, go to the item a page below the top. Otherwise a page below the current item.
                                let targetKey = keyboardDelegate.getFirstKey?.();
                                if (target.type === 'item') targetKey = target.key;
                                let nextKey = null;
                                if (targetKey != null) nextKey = keyboardDelegate.getKeyPageBelow(targetKey);
                                let dropPosition = target.type === 'item' ? target.dropPosition : 'after';
                                // If there is no next key, or we are starting on the last key, jump to the last possible position.
                                if (nextKey == null || target.type === 'item' && target.key === keyboardDelegate.getLastKey?.()) {
                                    nextKey = keyboardDelegate.getLastKey?.() ?? null;
                                    dropPosition = 'after';
                                }
                                if (nextKey == null) break;
                                target = {
                                    type: 'item',
                                    key: nextKey,
                                    dropPosition
                                };
                                // If the target does not accept the drop, find the next valid target.
                                // If no next valid target, find the previous valid target.
                                let { draggingCollectionRef, draggingKeys } = (0, _utils.globalDndState);
                                let isInternal = draggingCollectionRef?.current === ref?.current;
                                let operation = localState.state.getDropOperation({
                                    target,
                                    types,
                                    allowedOperations: drag.allowedDropOperations,
                                    isInternal,
                                    draggingKeys
                                });
                                if (operation === 'cancel') target = nextValidTarget(target, types, drag.allowedDropOperations, getNextTarget, false) ?? nextValidTarget(target, types, drag.allowedDropOperations, getPreviousTarget, false);
                            }
                            localState.state.setTarget(target ?? localState.state.target);
                        }
                        break;
                    case 'PageUp':
                        {
                            if (!keyboardDelegate.getKeyPageAbove) break;
                            let target = localState.state.target;
                            if (!target) target = nextValidTarget(null, types, drag.allowedDropOperations, getPreviousTarget);
                            else if (target.type === 'item') {
                                // If at the top already, switch to the root. Otherwise navigate a page up.
                                if (target.key === keyboardDelegate.getFirstKey?.()) target = {
                                    type: 'root'
                                };
                                else {
                                    let nextKey = keyboardDelegate.getKeyPageAbove(target.key);
                                    let dropPosition = target.dropPosition;
                                    if (nextKey == null) {
                                        nextKey = keyboardDelegate.getFirstKey?.();
                                        dropPosition = 'before';
                                    }
                                    if (nextKey == null) break;
                                    target = {
                                        type: 'item',
                                        key: nextKey,
                                        dropPosition
                                    };
                                }
                                // If the target does not accept the drop, find the previous valid target.
                                // If no next valid target, find the next valid target.
                                let { draggingKeys } = (0, _utils.globalDndState);
                                let isInternal = (0, _utils.isInternalDropOperation)(ref);
                                let operation = localState.state.getDropOperation({
                                    target,
                                    types,
                                    allowedOperations: drag.allowedDropOperations,
                                    isInternal,
                                    draggingKeys
                                });
                                if (operation === 'cancel') target = nextValidTarget(target, types, drag.allowedDropOperations, getPreviousTarget, false) ?? nextValidTarget(target, types, drag.allowedDropOperations, getNextTarget, false);
                            }
                            localState.state.setTarget(target ?? localState.state.target);
                            break;
                        }
                }
                localState.props.onKeyDown?.(e);
            }
        });
    // oxlint-disable-next-line react/react-compiler
    }, [
        localState,
        ref,
        onDrop,
        direction
    ]);
    let id = (0, _useId.useId)();
    // oxlint-disable-next-line react/react-compiler
    (0, _utils.droppableCollectionMap).set(state, {
        id,
        ref
    });
    return {
        collectionProps: (0, _mergeProps.mergeProps)(dropProps, {
            id,
            // Remove description from collection element. If dropping on the entire collection,
            // there should be a drop indicator that has this description, so no need to double announce.
            'aria-describedby': null
        })
    };
}

},{"./utils":"UrIm3","./DragManager":"9KS88","react":"gOP0N","../utils/mergeProps":"jycxS","./DropTargetKeyboardNavigation":"lPZ0E","../interactions/useFocusVisible":"aBfUW","./useAutoScroll":"ebvPU","./useDrop":"6U4dx","../utils/useId":"fQAcb","../utils/useLayoutEffect":"h7M6K","../i18n/I18nProvider":"czGuc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lPZ0E":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "navigate", ()=>navigate);
function navigate(keyboardDelegate, collection, target, direction, rtl = false, wrap = false) {
    switch(direction){
        case 'left':
            return rtl ? nextDropTarget(keyboardDelegate, collection, target, wrap, 'left') : previousDropTarget(keyboardDelegate, collection, target, wrap, 'left');
        case 'right':
            return rtl ? previousDropTarget(keyboardDelegate, collection, target, wrap, 'right') : nextDropTarget(keyboardDelegate, collection, target, wrap, 'right');
        case 'up':
            return previousDropTarget(keyboardDelegate, collection, target, wrap);
        case 'down':
            return nextDropTarget(keyboardDelegate, collection, target, wrap);
    }
}
function nextDropTarget(keyboardDelegate, collection, target, wrap = false, horizontal = null) {
    if (!target) return {
        type: 'root'
    };
    if (target.type === 'root') {
        let nextKey = keyboardDelegate.getFirstKey?.() ?? null;
        if (nextKey != null) return {
            type: 'item',
            key: nextKey,
            dropPosition: 'before'
        };
        return null;
    }
    if (target.type === 'item') {
        let nextKey = null;
        if (horizontal) nextKey = horizontal === 'right' ? keyboardDelegate.getKeyRightOf?.(target.key, {
            includeDisabled: true
        }) : keyboardDelegate.getKeyLeftOf?.(target.key, {
            includeDisabled: true
        });
        else nextKey = keyboardDelegate.getKeyBelow?.(target.key, {
            includeDisabled: true
        });
        let nextCollectionKey = getNextItem(collection, target.key, (key)=>collection.getKeyAfter(key));
        // If the keyboard delegate did not move to the next key in the collection,
        // jump to that key with the same drop position. Otherwise, try the other
        // drop positions on the current key first.
        if (nextKey != null && nextKey !== nextCollectionKey) return {
            type: 'item',
            key: nextKey,
            dropPosition: target.dropPosition
        };
        switch(target.dropPosition){
            case 'before':
                return {
                    type: 'item',
                    key: target.key,
                    dropPosition: 'on'
                };
            case 'on':
                {
                    // If there are nested items, traverse to them prior to the "after" position of this target.
                    // If the next key is on the same level, then its "before" position is equivalent to this item's "after" position.
                    let targetNode = collection.getItem(target.key);
                    let nextNode = nextKey != null ? collection.getItem(nextKey) : null;
                    if (targetNode && nextNode && nextNode.level >= targetNode.level) return {
                        type: 'item',
                        key: nextNode.key,
                        dropPosition: 'before'
                    };
                    return {
                        type: 'item',
                        key: target.key,
                        dropPosition: 'after'
                    };
                }
            case 'after':
                {
                    // If this is the last sibling in a level, traverse to the parent.
                    let targetNode = collection.getItem(target.key);
                    let nextItemInSameLevel = targetNode?.nextKey != null ? collection.getItem(targetNode.nextKey) : null;
                    while(nextItemInSameLevel != null && nextItemInSameLevel.type !== 'item')nextItemInSameLevel = nextItemInSameLevel.nextKey != null ? collection.getItem(nextItemInSameLevel.nextKey) : null;
                    if (targetNode && nextItemInSameLevel == null && targetNode.parentKey != null) {
                        // If the parent item has an item after it, use the "before" position.
                        let parentNode = collection.getItem(targetNode.parentKey);
                        const nextNode = parentNode?.nextKey != null ? collection.getItem(parentNode.nextKey) : null;
                        if (nextNode?.type === 'item') return {
                            type: 'item',
                            key: nextNode.key,
                            dropPosition: 'before'
                        };
                        if (parentNode?.type === 'item') return {
                            type: 'item',
                            key: parentNode.key,
                            dropPosition: 'after'
                        };
                    }
                    if (nextItemInSameLevel) return {
                        type: 'item',
                        key: nextItemInSameLevel.key,
                        dropPosition: 'on'
                    };
                }
        }
    }
    if (wrap) return {
        type: 'root'
    };
    return null;
}
function previousDropTarget(keyboardDelegate, collection, target, wrap = false, horizontal = null) {
    // Start after the last root-level item.
    if (!target || wrap && target.type === 'root') {
        // Keyboard delegate gets the deepest item but we want the shallowest.
        let prevKey = null;
        let lastKey = keyboardDelegate.getLastKey?.();
        while(lastKey != null){
            let node = collection.getItem(lastKey);
            if (node?.type !== 'item') break;
            prevKey = lastKey;
            lastKey = node?.parentKey;
        }
        if (prevKey != null) return {
            type: 'item',
            key: prevKey,
            dropPosition: 'after'
        };
        return null;
    }
    if (target.type === 'item') {
        let prevKey = null;
        if (horizontal) prevKey = horizontal === 'left' ? keyboardDelegate.getKeyLeftOf?.(target.key, {
            includeDisabled: true
        }) : keyboardDelegate.getKeyRightOf?.(target.key, {
            includeDisabled: true
        });
        else prevKey = keyboardDelegate.getKeyAbove?.(target.key, {
            includeDisabled: true
        });
        let prevCollectionKey = getNextItem(collection, target.key, (key)=>collection.getKeyBefore(key));
        // If the keyboard delegate did not move to the next key in the collection,
        // jump to that key with the same drop position. Otherwise, try the other
        // drop positions on the current key first.
        if (prevKey != null && prevKey !== prevCollectionKey) return {
            type: 'item',
            key: prevKey,
            dropPosition: target.dropPosition
        };
        switch(target.dropPosition){
            case 'before':
                {
                    // Move after the last child of the previous item.
                    let targetNode = collection.getItem(target.key);
                    if (targetNode && targetNode.prevKey != null) {
                        let lastChild = getLastChild(collection, targetNode.prevKey);
                        if (lastChild) return lastChild;
                    }
                    if (prevKey != null) return {
                        type: 'item',
                        key: prevKey,
                        dropPosition: 'on'
                    };
                    return {
                        type: 'root'
                    };
                }
            case 'on':
                return {
                    type: 'item',
                    key: target.key,
                    dropPosition: 'before'
                };
            case 'after':
                {
                    // Move after the last child of this item.
                    let lastChild = getLastChild(collection, target.key);
                    if (lastChild) return lastChild;
                    return {
                        type: 'item',
                        key: target.key,
                        dropPosition: 'on'
                    };
                }
        }
    }
    if (target.type !== 'root') return {
        type: 'root'
    };
    return null;
}
function getLastChild(collection, key) {
    // getChildNodes still returns child tree items even when the item is collapsed.
    // Checking if the next item has a greater level is a silly way to determine if the item is expanded.
    let targetNode = collection.getItem(key);
    let nextKey = getNextItem(collection, key, (key)=>collection.getKeyAfter(key));
    let nextNode = nextKey != null ? collection.getItem(nextKey) : null;
    if (targetNode && nextNode && nextNode.level > targetNode.level) {
        let lastChild = null;
        if ('lastChildKey' in targetNode) {
            lastChild = targetNode.lastChildKey != null ? collection.getItem(targetNode.lastChildKey) : null;
            while(lastChild && lastChild.type !== 'item' && lastChild.prevKey != null)lastChild = collection.getItem(lastChild.prevKey);
        } else lastChild = Array.from(targetNode.childNodes).findLast((item)=>item.type === 'item') || null;
        if (lastChild) return {
            type: 'item',
            key: lastChild.key,
            dropPosition: 'after'
        };
    }
    return null;
}
// Find the next or previous item in a collection, skipping over other types of nodes (e.g. content).
function getNextItem(collection, key, getNextKey) {
    let nextCollectionKey = getNextKey(key);
    let nextCollectionNode = nextCollectionKey != null ? collection.getItem(nextCollectionKey) : null;
    while(nextCollectionNode && nextCollectionNode.type !== 'item'){
        nextCollectionKey = getNextKey(nextCollectionNode.key);
        nextCollectionNode = nextCollectionKey != null ? collection.getItem(nextCollectionKey) : null;
    }
    return nextCollectionKey;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ebvPU":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useAutoScroll", ()=>useAutoScroll);
var _getScrollParent = require("../utils/getScrollParent");
var _platform = require("../utils/platform");
var _isScrollable = require("../utils/isScrollable");
var _react = require("react");
const AUTOSCROLL_AREA_SIZE = 20;
function useAutoScroll(ref) {
    let scrollableRef = (0, _react.useRef)(null);
    let scrollableX = (0, _react.useRef)(true);
    let scrollableY = (0, _react.useRef)(true);
    (0, _react.useEffect)(()=>{
        if (ref.current) {
            scrollableRef.current = (0, _isScrollable.isScrollable)(ref.current) ? ref.current : (0, _getScrollParent.getScrollParent)(ref.current);
            let style = window.getComputedStyle(scrollableRef.current);
            scrollableX.current = /(auto|scroll)/.test(style.overflowX);
            scrollableY.current = /(auto|scroll)/.test(style.overflowY);
        }
    }, [
        ref
    ]);
    // oxlint-disable-next-line react/react-compiler
    let state = (0, _react.useRef)({
        timer: undefined,
        dx: 0,
        dy: 0
    }).current;
    (0, _react.useEffect)(()=>{
        return ()=>{
            if (state.timer) {
                cancelAnimationFrame(state.timer);
                state.timer = undefined;
            }
        };
    // state will become a new object, so it's ok to use in the dependency array for unmount
    }, [
        state
    ]);
    let scroll = (0, _react.useCallback)(()=>{
        if (scrollableX.current && scrollableRef.current) scrollableRef.current.scrollLeft += state.dx;
        if (scrollableY.current && scrollableRef.current) scrollableRef.current.scrollTop += state.dy;
        if (state.timer) // oxlint-disable-next-line react/react-compiler
        state.timer = requestAnimationFrame(scroll);
    }, [
        scrollableRef,
        state
    ]);
    return {
        move (x, y) {
            // Most browsers auto scroll natively, but WebKit on macOS does not (iOS does 🤷‍♂️).
            // https://bugs.webkit.org/show_bug.cgi?id=222636
            if (!(0, _platform.isWebKit)() || (0, _platform.isIOS)() || !scrollableRef.current) return;
            let box = scrollableRef.current.getBoundingClientRect();
            let left = AUTOSCROLL_AREA_SIZE;
            let top = AUTOSCROLL_AREA_SIZE;
            let bottom = box.height - AUTOSCROLL_AREA_SIZE;
            let right = box.width - AUTOSCROLL_AREA_SIZE;
            if (x < left || x > right || y < top || y > bottom) {
                if (x < left) state.dx = x - left;
                else if (x > right) state.dx = x - right;
                if (y < top) state.dy = y - top;
                else if (y > bottom) state.dy = y - bottom;
                if (!state.timer) state.timer = requestAnimationFrame(scroll);
            } else this.stop();
        },
        stop () {
            if (state.timer) {
                cancelAnimationFrame(state.timer);
                state.timer = undefined;
            }
        }
    };
}

},{"../utils/getScrollParent":"NRzeg","../utils/platform":"eBqgD","../utils/isScrollable":"2UC33","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2moel":[function(require,module,exports,__globalThis) {
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
 * Manages state for a droppable collection.
 */ parcelHelpers.export(exports, "useDroppableCollectionState", ()=>useDroppableCollectionState);
var _react = require("react");
function useDroppableCollectionState(props) {
    let { acceptedDragTypes = 'all', isDisabled, onInsert, onRootDrop, onItemDrop, onReorder, onMove, shouldAcceptItemDrop, collection, selectionManager, onDropEnter, getDropOperation, onDrop } = props;
    let [target, setTarget] = (0, _react.useState)(null);
    let targetRef = (0, _react.useRef)(null);
    let getOppositeTarget = (target)=>{
        if (target.dropPosition === 'before') {
            let node = collection.getItem(target.key);
            return node && node.prevKey != null ? {
                type: 'item',
                key: node.prevKey,
                dropPosition: 'after'
            } : null;
        } else if (target.dropPosition === 'after') {
            let node = collection.getItem(target.key);
            return node && node.nextKey != null ? {
                type: 'item',
                key: node.nextKey,
                dropPosition: 'before'
            } : null;
        }
        return null;
    };
    let defaultGetDropOperation = (0, _react.useCallback)((e)=>{
        let { target, types, allowedOperations, isInternal, draggingKeys } = e;
        if (isDisabled || !target) return 'cancel';
        if (acceptedDragTypes === 'all' || acceptedDragTypes.some((type)=>types.has(type))) {
            let isValidInsert = onInsert && target.type === 'item' && !isInternal && (target.dropPosition === 'before' || target.dropPosition === 'after');
            let isValidReorder = onReorder && target.type === 'item' && isInternal && (target.dropPosition === 'before' || target.dropPosition === 'after') && isDraggingWithinParent(collection, target, draggingKeys);
            let isItemDropAllowed = target.type !== 'item' || target.dropPosition !== 'on' || !shouldAcceptItemDrop || shouldAcceptItemDrop(target, types);
            let isValidMove = onMove && target.type === 'item' && isInternal && isItemDropAllowed;
            // Feedback was that internal root drop was weird so preventing that from happening
            let isValidRootDrop = onRootDrop && target.type === 'root' && !isInternal;
            // Automatically prevent items (i.e. folders) from being dropped on themselves.
            let isValidOnItemDrop = onItemDrop && target.type === 'item' && target.dropPosition === 'on' && !(isInternal && target.key != null && draggingKeys.has(target.key)) && isItemDropAllowed;
            if (onDrop || isValidInsert || isValidReorder || isValidMove || isValidRootDrop || isValidOnItemDrop) {
                if (getDropOperation) return getDropOperation(target, types, allowedOperations);
                else return allowedOperations[0];
            }
        }
        return 'cancel';
    }, [
        isDisabled,
        collection,
        acceptedDragTypes,
        getDropOperation,
        onInsert,
        onRootDrop,
        onItemDrop,
        shouldAcceptItemDrop,
        onReorder,
        onMove,
        onDrop
    ]);
    return {
        collection,
        selectionManager,
        isDisabled,
        target,
        setTarget (newTarget) {
            if (this.isDropTarget(newTarget)) return;
            let target = targetRef.current;
            if (target && typeof props.onDropExit === 'function') props.onDropExit({
                type: 'dropexit',
                x: 0,
                y: 0,
                target
            });
            if (newTarget && typeof onDropEnter === 'function') onDropEnter({
                type: 'dropenter',
                x: 0,
                y: 0,
                target: newTarget
            });
            targetRef.current = newTarget ?? null;
            setTarget(newTarget ?? null);
        },
        isDropTarget (dropTarget) {
            let target = targetRef.current;
            if (!target || !dropTarget) return false;
            if (isEqualDropTarget(dropTarget, target)) return true;
            // Check if the targets point at the same point between two items, one referring before, and the other after.
            if (dropTarget?.type === 'item' && target?.type === 'item' && dropTarget.key !== target.key && dropTarget.dropPosition !== target.dropPosition && dropTarget.dropPosition !== 'on' && target.dropPosition !== 'on') return isEqualDropTarget(getOppositeTarget(dropTarget), target) || isEqualDropTarget(dropTarget, getOppositeTarget(target));
            return false;
        },
        getDropOperation (e) {
            let { target, isInternal, draggingKeys } = e;
            // Prevent dropping items onto themselves or their descendants
            if (isInternal && target.type === 'item' && draggingKeys.size > 0) {
                if (draggingKeys.has(target.key) && target.dropPosition === 'on') return 'cancel';
                let currentKey = target.key;
                while(currentKey != null){
                    let item = collection.getItem(currentKey);
                    let parentKey = item?.parentKey;
                    if (parentKey != null && draggingKeys.has(parentKey)) return 'cancel';
                    currentKey = parentKey ?? null;
                }
            }
            return defaultGetDropOperation(e);
        }
    };
}
function isEqualDropTarget(a, b) {
    if (!a) return !b;
    switch(a.type){
        case 'root':
            return b?.type === 'root';
        case 'item':
            return b?.type === 'item' && b?.key === a.key && b?.dropPosition === a.dropPosition;
    }
}
function isDraggingWithinParent(collection, target, draggingKeys) {
    let targetNode = collection.getItem(target.key);
    for (let key of draggingKeys){
        let node = collection.getItem(key);
        if (node?.parentKey !== targetNode?.parentKey) return false;
    }
    return true;
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1nXCc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Terms used in the below code:
//   * "Primary"   – The main layout direction. For stacks, this is the direction
//                   that the stack is arranged in (e.g. horizontal or vertical).
//                   For grids, this is the main scroll direction.
//   * "Secondary" – The secondary layout direction. For stacks, there is no secondary
//                   layout direction. For grids, this is the opposite of the primary direction.
//   * "Flow"      – The flow direction of the items. For stacks, this is the the primary
//                   direction. For grids, it is the secondary direction.
parcelHelpers.export(exports, "ListDropTargetDelegate", ()=>ListDropTargetDelegate);
class ListDropTargetDelegate {
    collection;
    ref;
    layout;
    orientation;
    direction;
    constructor(collection, ref, options){
        this.collection = collection;
        this.ref = ref;
        this.layout = options?.layout || 'stack';
        this.orientation = options?.orientation || 'vertical';
        this.direction = options?.direction || 'ltr';
    }
    getPrimaryStart(rect) {
        return this.orientation === 'horizontal' ? rect.left : rect.top;
    }
    getPrimaryEnd(rect) {
        return this.orientation === 'horizontal' ? rect.right : rect.bottom;
    }
    getSecondaryStart(rect) {
        return this.orientation === 'horizontal' ? rect.top : rect.left;
    }
    getSecondaryEnd(rect) {
        return this.orientation === 'horizontal' ? rect.bottom : rect.right;
    }
    getFlowStart(rect) {
        return this.layout === 'stack' ? this.getPrimaryStart(rect) : this.getSecondaryStart(rect);
    }
    getFlowEnd(rect) {
        return this.layout === 'stack' ? this.getPrimaryEnd(rect) : this.getSecondaryEnd(rect);
    }
    getFlowSize(rect) {
        return this.getFlowEnd(rect) - this.getFlowStart(rect);
    }
    getDropTargetFromPoint(x, y, isValidDropTarget) {
        if (this.collection[Symbol.iterator]().next().done || !this.ref.current) return {
            type: 'root'
        };
        let rect = this.ref.current.getBoundingClientRect();
        let primary = this.orientation === 'horizontal' ? x : y;
        let secondary = this.orientation === 'horizontal' ? y : x;
        primary += this.getPrimaryStart(rect);
        secondary += this.getSecondaryStart(rect);
        let flow = this.layout === 'stack' ? primary : secondary;
        let isPrimaryRTL = this.orientation === 'horizontal' && this.direction === 'rtl';
        let isSecondaryRTL = this.layout === 'grid' && this.orientation === 'vertical' && this.direction === 'rtl';
        let isFlowRTL = this.layout === 'stack' ? isPrimaryRTL : isSecondaryRTL;
        let collection = this.ref.current?.dataset.collection;
        let elements = this.ref.current.querySelectorAll(collection ? `[data-collection="${CSS.escape(collection)}"]` : '[data-key]');
        let elementMap = new Map();
        for (let item of elements)if (item instanceof HTMLElement && item.dataset.key != null) elementMap.set(item.dataset.key, item);
        // TODO: assume that only item type items are valid drop targets. This is to prevent a crash when dragging over the loader
        // row since it doesn't have a data-key set on it. Will eventually need to handle the case with drag and drop and loaders located between rows aka tree.
        // Can see https://github.com/adobe/react-spectrum/pull/4210/files#diff-21e555e0c597a28215e36137f5be076a65a1e1456c92cd0fdd60f866929aae2a for additional logic
        // that may need to happen then
        let items = [
            ...this.collection
        ].filter((item)=>item.type === 'item');
        if (items.length < 1) return {
            type: 'root'
        };
        let low = 0;
        let high = items.length;
        while(low < high){
            let mid = Math.floor((low + high) / 2);
            let item = items[mid];
            let element = elementMap.get(String(item.key));
            if (!element) break;
            let rect = element.getBoundingClientRect();
            let update = (isGreater)=>{
                if (isGreater) low = mid + 1;
                else high = mid;
            };
            if (primary < this.getPrimaryStart(rect)) update(isPrimaryRTL);
            else if (primary > this.getPrimaryEnd(rect)) update(!isPrimaryRTL);
            else if (secondary < this.getSecondaryStart(rect)) update(isSecondaryRTL);
            else if (secondary > this.getSecondaryEnd(rect)) update(!isSecondaryRTL);
            else {
                let target = {
                    type: 'item',
                    key: item.key,
                    dropPosition: 'on'
                };
                if (isValidDropTarget(target)) {
                    // Otherwise, if dropping on the item is accepted, try the before/after positions if within 5px
                    // of the start or end of the item.
                    if (flow <= this.getFlowStart(rect) + 5 && isValidDropTarget({
                        ...target,
                        dropPosition: 'before'
                    })) target.dropPosition = isFlowRTL ? 'after' : 'before';
                    else if (flow >= this.getFlowEnd(rect) - 5 && isValidDropTarget({
                        ...target,
                        dropPosition: 'after'
                    })) target.dropPosition = isFlowRTL ? 'before' : 'after';
                } else {
                    // If dropping on the item isn't accepted, try the target before or after depending on the position.
                    let mid = this.getFlowStart(rect) + this.getFlowSize(rect) / 2;
                    if (flow <= mid && isValidDropTarget({
                        ...target,
                        dropPosition: 'before'
                    })) target.dropPosition = isFlowRTL ? 'after' : 'before';
                    else if (flow >= mid && isValidDropTarget({
                        ...target,
                        dropPosition: 'after'
                    })) target.dropPosition = isFlowRTL ? 'before' : 'after';
                }
                return target;
            }
        }
        let item = items[Math.min(low, items.length - 1)];
        let element = elementMap.get(String(item.key));
        rect = element?.getBoundingClientRect();
        if (rect && (primary < this.getPrimaryStart(rect) || Math.abs(flow - this.getFlowStart(rect)) < Math.abs(flow - this.getFlowEnd(rect)))) return {
            type: 'item',
            key: item.key,
            dropPosition: isFlowRTL ? 'after' : 'before'
        };
        return {
            type: 'item',
            key: item.key,
            dropPosition: isFlowRTL ? 'before' : 'after'
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

