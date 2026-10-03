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
})({"earsn":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2026 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "TokenFieldContext", ()=>TokenFieldContext);
parcelHelpers.export(exports, "TokenField", ()=>TokenField);
parcelHelpers.export(exports, "TokenInput", ()=>TokenInput);
parcelHelpers.export(exports, "Token", ()=>Token);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _hidden = require("react-aria/private/collections/Hidden");
var _autocomplete = require("./Autocomplete");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _useHover = require("react-aria/useHover");
var _domHelpers = require("react-aria/private/utils/domHelpers");
var _label = require("./Label");
var _mergeProps = require("react-aria/mergeProps");
var _mergeRefs = require("react-aria/mergeRefs");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _text = require("./Text");
var _useTokenFieldState = require("react-stately/useTokenFieldState");
var _useFocusRing = require("react-aria/useFocusRing");
var _useLayoutEffect = require("react-aria/private/utils/useLayoutEffect");
var _useObjectRef = require("react-aria/useObjectRef");
var _useTokenField = require("react-aria/useTokenField");
const TokenFieldContext = /*#__PURE__*/ (0, _react.createContext)(null);
const TokenInputContext = /*#__PURE__*/ (0, _react.createContext)(null);
const TokenField = /*#__PURE__*/ (0, _hidden.createHideableComponent)(function TokenField(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, TokenFieldContext);
    let [labelRef, label] = (0, _utils.useSlot)(!props['aria-label'] && !props['aria-labelledby']);
    let fieldCtx = (0, _utils.useSlottedContext)((0, _autocomplete.FieldInputContext), props.slot);
    let { value: _autocompleteValue, onChange: onAutocompleteChange, ref: autocompleteRef, ...autocompleteProps } = fieldCtx ?? {};
    let inputRef = (0, _useObjectRef.useObjectRef)(autocompleteRef);
    let isDisabled = props.isDisabled || false;
    let isReadOnly = props.isReadOnly || false;
    let state = (0, _useTokenFieldState.useTokenFieldState)({
        ...props,
        onChange: (value)=>{
            props.onChange?.(value);
            onAutocompleteChange?.(value.toString());
        }
    });
    let { tokenFieldProps, labelProps, descriptionProps } = (0, _useTokenField.useTokenField)({
        ...props,
        // @ts-ignore - not a public prop, used to determine if slot is present
        label,
        role: props.role || autocompleteProps['role'] || 'textbox'
    }, state, inputRef);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: {
            isDisabled,
            isReadOnly
        },
        defaultClassName: 'react-aria-TokenField'
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": isDisabled || undefined,
        "data-readonly": isReadOnly || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
            values: [
                [
                    (0, _label.LabelContext),
                    {
                        ...labelProps,
                        elementType: 'span',
                        ref: labelRef
                    }
                ],
                [
                    (0, _text.TextContext),
                    {
                        slots: {
                            description: descriptionProps
                        }
                    }
                ],
                [
                    TokenInputContext,
                    {
                        tokenFieldProps,
                        state: state,
                        isDisabled,
                        isReadOnly,
                        autocompleteProps: autocompleteProps,
                        ref: inputRef
                    }
                ]
            ],
            children: renderProps.children
        })
    });
});
const TokenInput = /*#__PURE__*/ (0, _react.forwardRef)(function TokenInput(props, forwardedRef) {
    let { tokenFieldProps, state, isDisabled = false, isReadOnly = false, autocompleteProps, ref: contextRef } = (0, _react.useContext)(TokenInputContext);
    let ref = (0, _react.useMemo)(()=>(0, _mergeRefs.mergeRefs)(contextRef, forwardedRef), [
        contextRef,
        forwardedRef
    ]);
    let { children, ...domProps } = props;
    let { isHovered, hoverProps } = (0, _useHover.useHover)(domProps);
    let { isFocused, isFocusVisible, focusProps } = (0, _useFocusRing.useFocusRing)();
    let renderProps = (0, _utils.useRenderProps)({
        ...domProps,
        defaultClassName: 'react-aria-TokenInput',
        values: {
            isHovered,
            isFocused,
            isFocusVisible,
            isDisabled,
            isReadOnly
        }
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(domProps, {
        global: true
    });
    let objectRef = (0, _useObjectRef.useObjectRef)(ref);
    (0, _useLayoutEffect.useLayoutEffect)(()=>insertSelectionStyle(objectRef), [
        objectRef
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, focusProps, hoverProps, tokenFieldProps, autocompleteProps),
        ref: objectRef,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-readonly": isReadOnly || undefined,
        style: {
            ...renderProps.style,
            ...tokenFieldProps?.style
        },
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(CompositionRenderBlocker, {
            isComposing: state.isComposing,
            children: [
                state.value.segments.map((v, i)=>{
                    switch(v.type){
                        case 'token':
                            {
                                let token = children(v);
                                return(// Wrap tokens in zero-width spaces so the cursor is placed correctly.
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("span", {
                                    "data-react-aria-token": true,
                                    children: [
                                        '\u200b',
                                        token,
                                        '\u200b'
                                    ]
                                }, i));
                            }
                        case 'text':
                            return v.text;
                    }
                }),
                state.value.segments.at(-1)?.text.endsWith('\n') && /*#__PURE__*/ (0, _jsxRuntime.jsx)("br", {})
            ]
        })
    });
});
const Token = /*#__PURE__*/ (0, _react.forwardRef)(function Token(props, ref) {
    let { isDisabled } = (0, _react.useContext)(TokenInputContext);
    let objectRef = (0, _useObjectRef.useObjectRef)(ref);
    let { tokenProps, isSelected } = (0, _useTokenField.useToken)(props, {}, objectRef);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-Token',
        values: {
            isSelected,
            isDisabled
        }
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).span, {
        ref: objectRef,
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, tokenProps),
        "data-selected": isSelected || undefined,
        "data-disabled": isDisabled || undefined,
        style: {
            ...renderProps.style,
            ...tokenProps.style
        },
        children: renderProps.children
    });
});
// Prevents React from re-rendering during composition events.
const CompositionRenderBlocker = /*#__PURE__*/ (0, _react.memo)(({ children })=>children, (prevProps, nextProps)=>nextProps.isComposing ? true : prevProps.children === nextProps.children);
// Inserts a stylesheet into the document / shadow root that hides the native text selection on tokens.
function insertSelectionStyle(ref) {
    if (typeof CSSStyleSheet !== 'function' || !ref || !ref.current) return;
    let root = ref.current.getRootNode();
    if (!(0, _domHelpers.isDocument)(root) && !(0, _domHelpers.isShadowRoot)(root)) return;
    if (!root.adoptedStyleSheets) return;
    // Skip if we already inserted it.
    let sym = Symbol.for('react-aria-token-style');
    if (root.adoptedStyleSheets.some((s)=>s[sym])) return;
    let style = new CSSStyleSheet();
    style[sym] = true;
    // Firefox ignores completely transparent selection colors, so use a nearly transparent color instead.
    style.replaceSync('[data-react-aria-token]::selection,[data-react-aria-token]>*::selection{background:#ffffff01}');
    root.adoptedStyleSheets.push(style);
    return ()=>{
        let index = root.adoptedStyleSheets.indexOf(style);
        if (index >= 0) root.adoptedStyleSheets.splice(index, 1);
    };
}

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/private/collections/Hidden":"iPJX7","./Autocomplete":"dHgny","react-aria/filterDOMProps":"h4XHF","react-aria/useHover":"2yLrj","react-aria/private/utils/domHelpers":"cYkFa","./Label":"eI7Ae","react-aria/mergeProps":"jycxS","react-aria/mergeRefs":"jspQh","react":"gOP0N","./Text":"cfMV9","react-stately/useTokenFieldState":"2mKRL","react-aria/useFocusRing":"bP7um","react-aria/private/utils/useLayoutEffect":"h7M6K","react-aria/useObjectRef":"ec0NJ","react-aria/useTokenField":[["useToken","klAyB"],["useTokenField","bWMvw"]],"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2mKRL":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2026 Adobe. All rights reserved.
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
 * Provides state management for a token field. Tracks the field value and the
 * composition state.
 */ parcelHelpers.export(exports, "useTokenFieldState", ()=>useTokenFieldState);
var _tokenFieldValue = require("./TokenFieldValue");
var _useControlledState = require("../utils/useControlledState");
var _react = require("react");
function useTokenFieldState(props) {
    let { value: valueProp, defaultValue: defaultValueProp = new (0, _tokenFieldValue.TokenFieldValue)([]), onChange } = props;
    let [value, setValue] = (0, _useControlledState.useControlledState)(valueProp, defaultValueProp, onChange);
    let [isComposing, setComposing] = (0, _react.useState)(false);
    return {
        value,
        setValue,
        isComposing,
        setComposing
    };
}

},{"./TokenFieldValue":"kvnyc","../utils/useControlledState":"8yNBD","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kvnyc":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2026 Adobe. All rights reserved.
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
/** Represents a text selection in a TokenField. */ parcelHelpers.export(exports, "SelectedRange", ()=>SelectedRange);
/**
 * A list of segments containing editable text and non-editable tokens.
 */ parcelHelpers.export(exports, "TokenFieldValue", ()=>TokenFieldValue);
class SelectedRange {
    /** The anchor position. */ anchor;
    /** The current (i.e. caret) position. */ current;
    /**
   * Creates a new selection range. If only a single position is provided, the selection is
   * collapsed.
   */ constructor(anchor, current = anchor){
        this.anchor = anchor;
        this.current = current;
    }
    /** Whether the selection is collapsed to a single caret position. */ get isCollapsed() {
        return this.anchor.index === this.current.index && this.anchor.offset === this.current.offset;
    }
    /** The side of the selection closest to the start of the value. */ get start() {
        return compare(this.anchor, this.current) < 0 ? this.anchor : this.current;
    }
    /** The side of the selection closest to the end of the value. */ get end() {
        return compare(this.anchor, this.current) < 0 ? this.current : this.anchor;
    }
    /** Returns whether this selection is equal to another. */ isEqual(other) {
        if (this === other) return true;
        return this.anchor.index === other.anchor.index && this.anchor.offset === other.anchor.offset && this.current.index === other.current.index && this.current.offset === other.current.offset;
    }
}
function compare(a, b) {
    if (a.index === b.index) return a.offset - b.offset;
    return a.index - b.index;
}
var Direction = /*#__PURE__*/ function(Direction) {
    Direction[Direction["Forward"] = 1] = "Forward";
    Direction[Direction["Backward"] = -1] = "Backward";
    return Direction;
}(Direction || {});
class TokenFieldValue {
    static Direction = Direction;
    static SelectedRange = SelectedRange;
    /** The text and token segments in the list. */ segments;
    /** The selected range. */ selectedRange;
    // Linked list representing the undo/redo history.
    previous = null;
    next = null;
    isCoalescing = true;
    /** Create a new list with the given segments. */ constructor(tokens, options){
        this.segments = tokens;
        this.selectedRange = options?.selectedRange ?? new SelectedRange({
            index: 0,
            offset: 0
        });
    }
    createFieldValue(segments) {
        const Constructor = this.constructor;
        return new Constructor(segments);
    }
    get caretPosition() {
        return this.selectedRange.current;
    }
    /** Create a new list with the caret position set to the given position. */ withSelectedRange(selectedRange) {
        if (this.selectedRange.isEqual(selectedRange)) return this;
        let result = this.createFieldValue(this.segments);
        result.selectedRange = selectedRange;
        result.previous = this.previous;
        result.next = this.next;
        result.isCoalescing = this.isCoalescing;
        return result;
    }
    withCaretPosition(position) {
        return this.withSelectedRange(new SelectedRange(position));
    }
    splitSegment(segment, offset) {
        if (!segment) {
            let empty = this.createTextSegment('');
            return [
                offset > 0 ? empty : null,
                offset > 0 ? null : empty
            ];
        }
        if (segment.type === 'token') return [
            offset > 0 ? {
                ...segment
            } : null,
            offset > 0 ? null : {
                ...segment
            }
        ];
        return [
            offset > 0 ? {
                type: 'text',
                text: segment.text.slice(0, offset)
            } : null,
            offset < segment.text.length ? this.createTextSegment(segment.text.slice(offset)) : null
        ];
    }
    createTextSegment(text) {
        return {
            type: 'text',
            text
        };
    }
    tokenize(text) {
        return [
            this.createTextSegment(text)
        ];
    }
    clampPosition(position) {
        if (this.segments.length > 0 && position.index >= this.segments.length) return {
            index: this.segments.length - 1,
            offset: this.segments[this.segments.length - 1].text.length
        };
        if (position.index < 0) return {
            index: 0,
            offset: 0
        };
        return position;
    }
    /** Replace the text between two positions with new text. */ replaceRange(start, end, text, coalesce = true) {
        return this.replaceRangeWithSegments(start, end, text.length > 0 ? [
            this.createTextSegment(text)
        ] : [], coalesce);
    }
    /** Replace the text between two positions with new segments. */ replaceRangeWithSegments(start, end, insert, coalesce = true) {
        start = this.clampPosition(start);
        end = this.clampPosition(end);
        let startSegment = this.segments[start.index];
        let endSegment = this.segments[end.index];
        let [startSplit] = this.splitSegment(startSegment, start.offset);
        let [, endSplit] = this.splitSegment(endSegment, end.offset);
        let newSegments = this.segments.slice(0, start.index);
        if (startSplit) appendSegments(newSegments, [
            startSplit
        ]);
        if (insert.length) appendSegments(newSegments, insert, (text)=>this.tokenize(text));
        let lastSegment = newSegments[newSegments.length - 1];
        let lastIsText = lastSegment && lastSegment.type === 'text';
        let caret = {
            index: lastIsText ? newSegments.length - 1 : newSegments.length,
            offset: lastIsText ? lastSegment.text.length : 0
        };
        if (endSplit) appendSegments(newSegments, [
            endSplit
        ]);
        appendSegments(newSegments, this.segments.slice(end.index + 1));
        let segments = this.createFieldValue(newSegments);
        segments.selectedRange = new SelectedRange(caret);
        segments.isCoalescing = coalesce;
        if (this.isCoalescing && coalesce && this.previous) {
            segments.previous = this.previous;
            segments.previous.next = segments;
        } else {
            segments.previous = this;
            this.selectedRange = new SelectedRange(start, end);
            this.next = segments;
        }
        return segments;
    }
    /** Find the boundary before or after a position using an Intl.Segmenter. */ findBoundaryWithSegmenter(position, segmenter, direction) {
        position = this.clampPosition(position);
        for(let i = position.index; i >= 0 && i < this.segments.length; i += direction){
            let segment = this.segments[i];
            switch(segment.type){
                case 'token':
                    if (i !== position.index || (direction === -1 ? position.offset > 0 : position.offset === 0)) {
                        let index = i + direction;
                        return {
                            index: index >= 0 ? index : 0,
                            offset: direction === -1 && index >= 0 ? this.segments[index].text.length : 0
                        };
                    }
                    continue;
                case 'text':
                    {
                        let offset = direction === -1 ? segment.text.length : 0;
                        if (i === position.index) offset = position.offset;
                        if (direction === -1) offset--;
                        if (offset < 0 || offset >= segment.text.length) continue;
                        let part = segmenter.segment(segment.text).containing(offset);
                        while(part && part.isWordLike === false){
                            offset += direction;
                            part = segmenter.segment(segment.text).containing(offset);
                        }
                        if (part) return {
                            index: i,
                            offset: direction === -1 ? part.index : part.index + part.segment.length
                        };
                        continue;
                    }
            }
        }
        return null;
    }
    /** Find a line boundary before or after a position. */ findLineBoundary(position, direction) {
        let res = this.findText(position, direction, '\n');
        if (res) return res;
        return direction === -1 ? {
            index: 0,
            offset: 0
        } : {
            index: this.segments.length - 1,
            offset: this.segments[this.segments.length - 1].text.length
        };
    }
    /** Find a string or regular expression match before or after a position. */ findText(position, direction, search) {
        if (this.segments.length === 0) return null;
        for(let i = position.index; i >= 0 && i < this.segments.length; i += direction){
            let segment = this.segments[i];
            if (segment.type !== 'text') continue;
            let offset = findInText(segment.text, search, direction, i === position.index ? position.offset : undefined);
            if (offset >= 0) return {
                index: i,
                offset: offset
            };
        }
        return null;
    }
    /** Delete text at a position using a segmenter. */ delete(position, segmenter, direction, coalesce = true) {
        let boundary = this.findBoundaryWithSegmenter(position, segmenter, direction);
        if (boundary) return this.replaceRange(direction === -1 ? boundary : position, direction === -1 ? position : boundary, '', coalesce);
        return this.withSelectedRange(new SelectedRange(position));
    }
    /** Delete text to the next or previous line break. */ deleteLine(position, direction, coalesce = true) {
        if (this.segments.length === 0) return this;
        let boundary = this.findLineBoundary(position, direction);
        if (boundary) return this.replaceRange(direction === -1 ? boundary : position, direction === -1 ? position : boundary, '', coalesce);
        return this.withSelectedRange(new SelectedRange(position));
    }
    /** Create a new list containing a subset of the segments. */ slice(start, end) {
        start = this.clampPosition(start);
        end = this.clampPosition(end);
        if (start.index === end.index && start.offset === end.offset) return this.createFieldValue([]);
        if (start.index === end.index) {
            let segment = this.segments[start.index];
            if (segment.type === 'text') return this.createFieldValue([
                {
                    type: 'text',
                    text: segment.text.slice(start.offset, end.offset)
                }
            ]);
            return this.createFieldValue([
                segment
            ]);
        }
        let startSegment = this.segments[start.index];
        let endSegment = this.segments[end.index];
        let [, startSplit] = this.splitSegment(startSegment, start.offset);
        let [endSplit] = this.splitSegment(endSegment, end.offset);
        let result = [];
        if (startSplit) result.push(startSplit);
        result.push(...this.segments.slice(start.index + 1, end.index));
        if (endSplit) result.push(endSplit);
        return this.createFieldValue(result);
    }
    /** Convert the list to a string. */ toString() {
        return this.segments.map((seg)=>seg.text).join('');
    }
    /** Returns the previous list in the undo history. */ undo() {
        return this.previous ?? this;
    }
    /** Returns the next list in the redo history. */ redo() {
        return this.next ?? this;
    }
    /** End coalescing undo/redo history. */ endCoalescing() {
        this.isCoalescing = false;
    }
}
function findInText(text, search, direction, fromOffset) {
    if (typeof search === 'string') {
        if (direction === -1) return text.lastIndexOf(search, fromOffset !== undefined ? fromOffset - 1 : text.length - 1);
        return text.indexOf(search, fromOffset ?? 0);
    }
    if (direction === 1) {
        let start = fromOffset ?? 0;
        let index = text.slice(start).search(search);
        return index >= 0 ? start + index : -1;
    }
    let limit = fromOffset !== undefined ? fromOffset : text.length;
    if (limit < 0) return -1;
    let re = search.flags.includes('g') ? search : new RegExp(search.source, search.flags + 'g');
    let matches = Array.from(text.slice(0, limit).matchAll(re));
    return matches.at(-1)?.index ?? -1;
}
function appendSegments(segments, insert, tokenize) {
    for (let segment of insert){
        if (segment.type === 'text' && segment.text.length === 0) continue;
        let last = segments[segments.length - 1];
        if (last && last.type === 'text' && segment.type === 'text') {
            if (tokenize) {
                let tokenized = tokenize(last.text + segment.text);
                segments.splice(segments.length - 1, 1, ...tokenized);
            } else segments[segments.length - 1] = {
                type: 'text',
                text: last.text + segment.text
            };
        } else if (tokenize && segment.type === 'text') {
            let tokenized = tokenize(segment.text);
            segments.push(...tokenized);
        } else segments.push(segment);
    }
    return segments;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"klAyB":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2026 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Provides the behavior and accessibility implementation for a token within a token field.
 * A token field allows users to enter text with inline tokens.
 */ parcelHelpers.export(exports, "useToken", ()=>useToken);
var _react = require("react");
var _isVirtualEvent = require("../utils/isVirtualEvent");
var _useEvent = require("../utils/useEvent");
function useToken(// Unused but matches the normal signature.
_props, _state, ref) {
    let [isSelected, setSelected] = (0, _react.useState)(false);
    (0, _useEvent.useEvent)((0, _react.useRef)(typeof document !== 'undefined' ? document : null), 'selectionchange', ()=>{
        let selection = window.getSelection();
        if (!selection || !ref.current) return;
        let range = selection.rangeCount === 0 ? null : selection.getRangeAt(0);
        if (!range?.collapsed && range?.intersectsNode(ref.current)) setSelected(true);
        else setSelected(false);
    });
    return {
        tokenProps: {
            contentEditable: false,
            suppressContentEditableWarning: true,
            style: {
                userSelect: 'all',
                WebkitUserSelect: 'all',
                WebkitTapHighlightColor: 'transparent'
            },
            onClick (e) {
                // Select the token when a screen reader clicks on it.
                if (isSelected || !(0, _isVirtualEvent.isVirtualClick)(e.nativeEvent)) return;
                let selection = window.getSelection();
                let wrapper = ref.current?.parentElement;
                if (!selection || !wrapper) return;
                let range = document.createRange();
                range.setStartBefore(wrapper);
                range.setEndAfter(wrapper);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        },
        isSelected
    };
}

},{"react":"gOP0N","../utils/isVirtualEvent":"dtScK","../utils/useEvent":"avf8K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bWMvw":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2026 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Provides the behavior and accessibility implementation for a token field.
 * A token field allows users to enter text with inline tokens.
 *
 * @param props - Props for the token field.
 * @param state - State for the token field, as returned by `useTokenFieldState`.
 */ parcelHelpers.export(exports, "useTokenField", ()=>useTokenField);
parcelHelpers.export(exports, "getSelection", ()=>getSelection);
parcelHelpers.export(exports, "getSelectedRange", ()=>getSelectedRange);
parcelHelpers.export(exports, "setTokenFieldSelection", ()=>setTokenFieldSelection);
parcelHelpers.export(exports, "tokenFieldPositionToDOMRange", ()=>tokenFieldPositionToDOMRange);
var _liveAnnouncer = require("../live-announcer/LiveAnnouncer");
var _react = require("react");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _domHelpers = require("../utils/domHelpers");
var _getScrollParents = require("../utils/getScrollParents");
var _platform = require("../utils/platform");
var _mergeProps = require("../utils/mergeProps");
var _useTokenFieldState = require("react-stately/useTokenFieldState");
var _scrollIntoView = require("../utils/scrollIntoView");
var _useEvent = require("../utils/useEvent");
var _useField = require("../label/useField");
var _useFocusable = require("../interactions/useFocusable");
var _useKeyboard = require("../interactions/useKeyboard");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _i18Nprovider = require("../i18n/I18nProvider");
const CLIPBOARD_MIME_TYPE = 'application/vnd.react-aria.tokens+json';
function useTokenField(props, state, ref) {
    let { role = 'textbox', allowsNewlines: multiline = false, isReadOnly = false, isDisabled = false, 'aria-details': ariaDetails } = props;
    let { value } = state;
    let { locale } = (0, _i18Nprovider.useLocale)();
    let graphemeSegmenter = (0, _react.useMemo)(()=>new Intl.Segmenter(locale, {
            granularity: 'grapheme'
        }), [
        locale
    ]);
    let wordSegmenter = (0, _react.useMemo)(()=>new Intl.Segmenter(locale, {
            granularity: 'word'
        }), [
        locale
    ]);
    let dropPosition = (0, _react.useRef)(null);
    let transferredData = (0, _react.useRef)(null);
    let nextValue = (0, _react.useRef)(null);
    let apply = (fn)=>{
        state.setValue((value)=>{
            let newValue = fn(value);
            nextValue.current = newValue;
            return newValue;
        });
    };
    // Composition events are not cancelable. The browser will mutate the DOM, making it out of sync with React.
    // To account for this, we prevent React from re-rendering during composition, and track DOM mutations performed
    // by the browser. When composition ends, we revert the DOM to its original state, and re-render with React.
    // Mutating the DOM in any way during composition breaks the IME, causing composition to end unexpectedly.
    // During composition, we still emit updates via onChange to ensure that things like autocomplete work,
    // but we don't actually re-render to the DOM unless the value changes from what we expect (e.g. inserting a completion).
    let mutationTracker = useMutationTracker(ref);
    let startComposition = (0, _react.useCallback)(()=>{
        mutationTracker.start();
        state.setComposing(true);
    }, [
        state,
        mutationTracker
    ]);
    let stopComposition = (0, _react.useCallback)(()=>{
        mutationTracker.stop();
        state.setComposing(false);
    }, [
        state,
        mutationTracker
    ]);
    (0, _useEvent.useEvent)(ref, 'compositionstart', ()=>{
        startComposition();
        let range = window.getSelection()?.getRangeAt(0);
        if (range) {
            let [start, end] = rangeToPositions(ref.current, range);
            // Normalize the range to ensure it is not inside a token, otherwise the browser
            // will attempt to insert the composed text into the token instead of replacing it.
            let r = createDOMRange(ref.current, start, end);
            if (r.startContainer !== range.startContainer || r.startOffset !== range.startOffset) range.setStart(r.startContainer, r.startOffset);
            if (r.endContainer !== range.endContainer || r.endOffset !== range.endOffset) range.setEnd(r.endContainer, r.endOffset);
        }
    });
    (0, _useEvent.useEvent)(ref, 'compositionend', stopComposition);
    // If a prop update occurs during composition that doesn't match the expected value,
    // end composition and re-render the controlled value.
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (state.isComposing && value !== nextValue.current) stopComposition();
        nextValue.current = value;
    });
    let selectedRange = (0, _react.useRef)(null);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (ref.current && !state.isComposing && value.selectedRange !== selectedRange.current) {
            // Only move the caret when the field is already focused.
            if (ref.current === (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)(ref.current))) {
                setTokenFieldSelection(ref.current, value.selectedRange);
                announceToken(value);
                // We call preventDefault in the beforeinput handler below, which also prevents the
                // browser's default behavior of scrolling the caret into view. Do it ourselves instead.
                scrollCaretIntoView(ref.current);
            }
            selectedRange.current = value.selectedRange;
        }
    });
    // Handle text editing commands and prevent browser default behavior.
    (0, _useEvent.useEvent)(ref, 'beforeinput', (e)=>{
        // Android sometimes doesn't fire a compositionend event before a regular input event.
        if (state.isComposing && !e.isComposing) stopComposition();
        let range = e.getTargetRanges()[0];
        if (!range) {
            let selection = window.getSelection();
            if (!selection || selection.rangeCount === 0) return;
            range = selection.getRangeAt(0);
        }
        let [start, end] = rangeToPositions(ref.current, range);
        // https://www.w3.org/TR/input-events-2/#interface-InputEvent-Attributes
        switch(e.inputType){
            case 'insertText':
            case 'insertReplacementText':
            case 'insertCompositionText':
            case 'insertFromComposition':
            case 'insertFromPaste':
            case 'insertFromYank':
            case 'insertFromDrop':
                {
                    let data = [
                        {
                            type: 'text',
                            text: e.data ?? ''
                        }
                    ];
                    if (transferredData.current) {
                        data = transferredData.current;
                        transferredData.current = null;
                    } else if (e.dataTransfer) {
                        let parsed = e.dataTransfer.types.includes(CLIPBOARD_MIME_TYPE) ? parseSegments(e.dataTransfer.getData(CLIPBOARD_MIME_TYPE)) : null;
                        if (parsed) data = parsed;
                        else if (e.dataTransfer.types.includes('text/plain')) data[0].text = e.dataTransfer.getData('text/plain');
                    }
                    if (e.inputType === 'insertFromDrop' && dropPosition.current) {
                        start = end = dropPosition.current;
                        dropPosition.current = null;
                    }
                    if (!multiline) for (let segment of data)segment.text = segment.text.replace(/[\r\n]+/g, ' ');
                    apply((tokens)=>tokens.replaceRangeWithSegments(start, end, data, // Don't coalesce paste/drop events with other edits.
                        e.inputType === 'insertText' || e.inputType === 'insertCompositionText' || e.inputType === 'insertFromComposition'));
                    break;
                }
            case 'insertParagraph':
                if (props.onSubmit) {
                    props.onSubmit();
                    break;
                }
            case 'insertLineBreak':
                if (multiline) apply((tokens)=>tokens.replaceRange(start, end, '\n'));
                break;
            case 'deleteContentBackward':
            case 'deleteContentForward':
            case 'deleteWordBackward':
            case 'deleteWordForward':
            case 'deleteHardLineForward':
            case 'deleteHardLineBackward':
            case 'deleteSoftLineForward':
            case 'deleteSoftLineBackward':
            case 'deleteContent':
            case 'deleteByCut':
            case 'deleteCompositionText':
                if (!range.collapsed && !isSamePosition(start, end)) {
                    apply((tokens)=>tokens.replaceRange(start, end, ''));
                    break;
                }
                switch(e.inputType){
                    case 'deleteContentBackward':
                        apply((tokens)=>tokens.delete(start, graphemeSegmenter, (0, _useTokenFieldState.TokenFieldValue).Direction.Backward));
                        break;
                    case 'deleteContentForward':
                        apply((tokens)=>tokens.delete(start, graphemeSegmenter, (0, _useTokenFieldState.TokenFieldValue).Direction.Forward));
                        break;
                    case 'deleteWordBackward':
                        apply((tokens)=>tokens.delete(start, wordSegmenter, (0, _useTokenFieldState.TokenFieldValue).Direction.Backward));
                        break;
                    case 'deleteWordForward':
                        apply((tokens)=>tokens.delete(start, wordSegmenter, (0, _useTokenFieldState.TokenFieldValue).Direction.Forward));
                        break;
                    case 'deleteHardLineForward':
                    case 'deleteSoftLineForward':
                        apply((tokens)=>tokens.deleteLine(start, (0, _useTokenFieldState.TokenFieldValue).Direction.Forward));
                        break;
                    case 'deleteHardLineBackward':
                    case 'deleteSoftLineBackward':
                        apply((tokens)=>tokens.deleteLine(start, (0, _useTokenFieldState.TokenFieldValue).Direction.Backward));
                        break;
                }
                break;
            case 'deleteByDrag':
                apply((tokens)=>{
                    let endOffset = start.index === end.index ? end.offset : tokens.segments[start.index].text.length;
                    let change = tokens.replaceRange(start, end, '');
                    if (dropPosition.current && dropPosition.current.index === start.index && dropPosition.current.offset >= start.offset) dropPosition.current.offset -= endOffset - start.offset;
                    return change;
                });
                break;
        }
        e.preventDefault();
    });
    let writeClipboardData = (e)=>{
        if ('clipboardData' in e) e.preventDefault();
        let selection = getSelection(ref.current);
        if (!selection) return;
        let [start, end] = selection;
        let slice = value.slice(start, end);
        let dataTransfer = 'clipboardData' in e ? e.clipboardData : e.dataTransfer;
        dataTransfer?.setData(CLIPBOARD_MIME_TYPE, JSON.stringify(slice.segments));
        dataTransfer?.setData('text/plain', slice.toString());
        if (e.type === 'cut') apply((tokens)=>tokens.replaceRange(start, end, '', false));
    };
    (0, _useEvent.useEvent)(ref, 'copy', writeClipboardData);
    (0, _useEvent.useEvent)(ref, 'cut', writeClipboardData);
    (0, _useEvent.useEvent)(ref, 'dragstart', writeClipboardData);
    (0, _useEvent.useEvent)(ref, 'paste', (e)=>{
        // Safari doesn't pass the custom clipboard data type to beforeinput dataTransfer so we handle it here.
        if (e.clipboardData && e.clipboardData.types.includes(CLIPBOARD_MIME_TYPE)) transferredData.current = parseSegments(e.clipboardData.getData(CLIPBOARD_MIME_TYPE));
    });
    // Store the cursor position on drop so we know where to insert when the insertFromDrop event occurs.
    (0, _useEvent.useEvent)(ref, 'drop', (e)=>{
        if (typeof document.caretPositionFromPoint === 'function') {
            let pos = document.caretPositionFromPoint(e.clientX, e.clientY);
            if (pos) dropPosition.current = getPosition(ref.current, pos.offsetNode, pos.offset);
        } else if (typeof document.caretRangeFromPoint === 'function') {
            let range = document.caretRangeFromPoint(e.clientX, e.clientY);
            if (range) dropPosition.current = getPosition(ref.current, range.startContainer, range.startOffset);
        }
        if (e.dataTransfer && e.dataTransfer.types.includes(CLIPBOARD_MIME_TYPE)) transferredData.current = parseSegments(e.dataTransfer.getData(CLIPBOARD_MIME_TYPE));
    });
    useSelectionChange(ref, ()=>{
        if (state.isComposing) return;
        value.endCoalescing();
        // When the cursor moves next to a token, announce it.
        // Otherwise the screen reader will only announce the first/last character.
        let range = getSelectedRange(ref.current);
        if (!range) return;
        announceToken(value, range);
        // Update the selected range in the value.
        state.setValue((value)=>value.withSelectedRange(range));
    });
    // Clear selection on blur.
    (0, _useEvent.useEvent)(ref, 'blur', (e)=>{
        if (!e.isTrusted) return;
        let selection = window.getSelection();
        if (ref.current && selection && selection.containsNode(ref.current, true) && !selection.isCollapsed) {
            selection.removeAllRanges();
            state.setValue((value)=>value.withSelectedRange(new (0, _useTokenFieldState.TokenFieldValue).SelectedRange(value.caretPosition)));
        }
    });
    // Override the default triple click behavior to ensure that tokens get selected.
    // Some browsers only select the text between tokens instead of the entire line.
    (0, _useEvent.useEvent)(ref, 'mousedown', (e)=>{
        if (e.detail === 3) {
            let selection = getSelection(ref.current);
            if (!selection) return;
            let start = value.findLineBoundary(selection[0], (0, _useTokenFieldState.TokenFieldValue).Direction.Backward);
            let end = value.findLineBoundary(selection[1], (0, _useTokenFieldState.TokenFieldValue).Direction.Forward);
            if (start && end) {
                e.preventDefault();
                setTokenFieldSelection(ref.current, new (0, _useTokenFieldState.TokenFieldValue).SelectedRange(start, end), true);
            }
        }
    });
    let moveSelection = (direction, granularity, extend = false)=>{
        let selection = window.getSelection();
        if (!selection || selection.rangeCount === 0 || !selection.focusNode || !selection.anchorNode) return false;
        // Pressing an arrow with a non-empty selection collapses it to the corresponding edge.
        // The browser handles this natively.
        if (!extend && !selection.isCollapsed) return false;
        // Move the caret using the browser's native caret movement (Selection.modify) so that
        // bidirectional text is handled correctly. Repeat until the position actually changes
        // to account for the zero width spaces around tokens.
        let pos = getPosition(ref.current, selection.focusNode, selection.focusOffset);
        while(true){
            let { focusNode, focusOffset } = selection;
            selection.modify(extend ? 'extend' : 'move', direction, granularity);
            if (selection.focusNode === focusNode && selection.focusOffset === focusOffset) return false;
            let newPos = getPosition(ref.current, selection.focusNode, selection.focusOffset);
            if (!isSamePosition(pos, newPos)) return true;
        }
    };
    // macOS supports additional keyboard shortcuts for text editing.
    // We need to handle these manually so they behave consistently with tokens.
    // https://support.apple.com/en-us/102650#text
    let macShortcuts = (0, _platform.isMac)() ? {
        'Control+a': ()=>{
            return shortcuts.Home();
        },
        'Control+e': ()=>{
            return shortcuts.End();
        },
        'Control+f': ()=>{
            return shortcuts.ArrowRight();
        },
        'Control+b': ()=>{
            return shortcuts.ArrowLeft();
        }
    } : {};
    let mod = (0, _platform.isMac)() ? 'Meta' : 'Control';
    let wordModKey = (0, _platform.isMac)() ? 'Alt' : 'Control';
    let shortcuts = {
        ...macShortcuts,
        [`${mod}+z`]: ()=>{
            // If composing, the browser handles undo natively.
            if (state.isComposing) return false;
            apply((state)=>state.undo());
        },
        [(0, _platform.isMac)() ? 'Shift+Meta+z' : 'Control+y']: ()=>{
            if (state.isComposing) return false;
            apply((state)=>state.redo());
        },
        ArrowLeft: ()=>{
            return moveSelection('left', 'character');
        },
        [`${wordModKey}+ArrowLeft`]: ()=>{
            return moveSelection('left', 'word');
        },
        'Shift+ArrowLeft': ()=>{
            return moveSelection('left', 'character', true);
        },
        [`Shift+${wordModKey}+ArrowLeft`]: ()=>{
            return moveSelection('left', 'word', true);
        },
        ArrowRight: ()=>{
            return moveSelection('right', 'character');
        },
        [`${wordModKey}+ArrowRight`]: ()=>{
            return moveSelection('right', 'word');
        },
        'Shift+ArrowRight': ()=>{
            return moveSelection('right', 'character', true);
        },
        [`Shift+${wordModKey}+ArrowRight`]: ()=>{
            return moveSelection('right', 'word', true);
        },
        Home: ()=>{
            // Browsers do not behave consistently when there are tokens.
            let selection = getSelection(ref.current);
            if (!selection) return false;
            let boundary = value.findLineBoundary(selection[0], (0, _useTokenFieldState.TokenFieldValue).Direction.Backward);
            if (boundary) {
                setCursor(ref.current, boundary, true);
                return true;
            }
            return false;
        },
        End: ()=>{
            let selection = getSelection(ref.current);
            if (!selection) return false;
            let boundary = value.findLineBoundary(selection[1], (0, _useTokenFieldState.TokenFieldValue).Direction.Forward);
            if (boundary) {
                setCursor(ref.current, boundary, true);
                return true;
            }
            return false;
        }
    };
    // TODO: user provided onKeyDown currently relies on user provided preventDefault to stop submit
    // maybe can have them specify a format like shortcuts and merge into above?
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        isDisabled: isDisabled || isReadOnly,
        onKeyDown: props.onKeyDown,
        onKeyUp: props.onKeyUp,
        shortcuts: shortcuts,
        allowRepeats: true
    });
    let { focusableProps } = (0, _useFocusable.useFocusable)(props, ref);
    let { labelProps, fieldProps, descriptionProps } = (0, _useField.useField)({
        ...props,
        labelElementType: 'span'
    });
    return {
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                if (!props.isDisabled) {
                    ref.current?.focus();
                    // Show the focus ring so the user knows where focus went
                    (0, _useFocusVisible.setInteractionModality)('keyboard');
                }
            }
        },
        descriptionProps,
        tokenFieldProps: (0, _mergeProps.mergeProps)(focusableProps, keyboardProps, fieldProps, {
            onPaste: props.onPaste,
            onCopy: props.onCopy,
            onCut: props.onCut,
            contentEditable: !isDisabled && !isReadOnly,
            suppressContentEditableWarning: true,
            role,
            'aria-multiline': multiline,
            'aria-details': ariaDetails,
            'aria-readonly': isReadOnly,
            'aria-disabled': isDisabled,
            style: {
                whiteSpace: 'pre-wrap'
            }
        })
    };
}
function indexOfNode(node) {
    let index = 0;
    let n = node;
    while(n = n.previousSibling)index++;
    return index;
}
function getSelection(container) {
    let selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return null;
    let range = selection.getRangeAt(0);
    return rangeToPositions(container, range);
}
function getSelectedRange(container) {
    let selection = window.getSelection();
    if (!selection || !selection.anchorNode || !selection.focusNode || !(0, _domfunctions.nodeContains)(container, selection.anchorNode) || !(0, _domfunctions.nodeContains)(container, selection.focusNode)) return null;
    let anchor = getPosition(container, selection.anchorNode, selection.anchorOffset, false);
    let current = getPosition(container, selection.focusNode, selection.focusOffset, !selection.isCollapsed);
    return new (0, _useTokenFieldState.TokenFieldValue).SelectedRange(anchor, current);
}
function rangeToPositions(container, range) {
    let start = getPosition(container, range.startContainer, range.startOffset, false);
    let end = getPosition(container, range.endContainer, range.endOffset, !range.collapsed);
    return [
        start,
        end
    ];
}
function getPosition(container, node, offset, isRangeEnd = false) {
    if (node === container) return {
        index: offset,
        offset: 0
    };
    let originalNode = node;
    while(node.parentNode !== container)node = node.parentNode;
    let index = indexOfNode(node);
    if (node.nodeType === Node.ELEMENT_NODE) {
        let tokenNode = node.childNodes[1];
        let atEnd;
        let endOffset = 0;
        if (originalNode === tokenNode) // Cursor is inside the token.
        atEnd = isRangeEnd || offset > 0;
        else if (originalNode === node) // Cursor is inside the wrapper element.
        atEnd = offset > 1;
        else {
            // Cursor is on one of the zero width spaces.
            atEnd = originalNode !== tokenNode.previousSibling;
            // If the offset is greater than 1, the browser is trying to insert text into
            // the zero width space node. This will actually end up in the next text node.
            endOffset = atEnd && offset > 1 ? offset - 1 : 0;
        }
        offset = atEnd ? tokenNode?.textContent?.length ?? 0 : 0;
        // Several positions are equivalent due to the zero width spaces around tokens.
        // Normalize offset to the end of the preceding text node, or the beginning of the following node.
        if (offset === 0 && node.previousSibling?.nodeType === Node.TEXT_NODE) {
            index--;
            offset = node.previousSibling?.textContent?.length ?? 0;
        } else if (atEnd) {
            index++;
            offset = endOffset;
        }
    }
    return {
        index,
        offset
    };
}
let isProgrammaticSelectionChange = Symbol('isProgrammaticSelectionChange');
function setCursor(root, pos, fireEvent = false) {
    setTokenFieldSelection(root, new (0, _useTokenFieldState.TokenFieldValue).SelectedRange(pos), fireEvent);
}
function setTokenFieldSelection(root, selectedRange, fireEvent = false) {
    let selection = window.getSelection();
    if (selection) {
        // Use setBaseAndExtent to preserve the selection direction. A plain Range +
        // addRange always produces a forward selection and collapses when the
        // anchor comes after the current position (backward selections).
        let [anchorNode, anchorOffset] = getDOMPosition(root, selectedRange.anchor);
        let [focusNode, focusOffset] = getDOMPosition(root, selectedRange.current);
        root[isProgrammaticSelectionChange] = !fireEvent;
        // Only set selection if it has changed, because this can clobber the browser's selection direction.
        if (selection.anchorNode !== anchorNode || selection.anchorOffset !== anchorOffset || selection.focusNode !== focusNode || selection.focusOffset !== focusOffset) selection.setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset);
    }
}
// Calling preventDefault in the beforeinput handler stops the browser from performing its
// default edit action, which also suppresses its normal behavior of scrolling the caret into
// view. Recreate that behavior by measuring the caret's position with a Range and
// scrolling each scrollable ancestor of the field so it is visible.
function scrollCaretIntoView(root) {
    let selection = window.getSelection();
    if ((0, _useFocusVisible.getInteractionModality)() !== 'keyboard' || !selection || selection.rangeCount === 0 || !(0, _domfunctions.nodeContains)(root, selection.focusNode)) return;
    let range = selection.getRangeAt(0);
    let rect = range.getBoundingClientRect();
    // A collapsed range doesn't always produce a client rect. This happens for empty lines.
    if (rect.top === 0 && rect.bottom === 0 && rect.left === 0 && rect.right === 0) {
        let node = range.endContainer;
        if (node.nodeType === Node.TEXT_NODE && range.endOffset < node.nodeValue.length) {
            // If we are not at the end of the text node, extend the range to include the next character.
            range = range.cloneRange();
            range.setEnd(node, range.endOffset + 1);
            rect = range.getBoundingClientRect();
        } else if (root.firstChild == null) // If the root has no children, use its rect.
        rect = root.getBoundingClientRect();
        else {
            // Otherwise find the next sibling element (e.g. trailing <br>) and use its rect in this case.
            let nextSibling = node.nextSibling;
            while(node && node !== root && !nextSibling){
                node = node.parentNode;
                nextSibling = node ? node.nextSibling : null;
            }
            if (nextSibling?.nodeType === Node.ELEMENT_NODE) rect = nextSibling.getBoundingClientRect();
        }
    }
    for (let element of (0, _getScrollParents.getScrollParents)(root, true)){
        // scrollRectIntoView only scrolls a single scroll parent based on `rect`, which is a
        // snapshot of the caret's position before any scrolling occurs. Scrolling an inner ancestor
        // moves the caret within the viewport, so translate `rect` by however much we just scrolled
        // before moving on to the next (outer) ancestor.
        let scrollParent = element;
        let beforeTop = scrollParent.scrollTop;
        let beforeLeft = scrollParent.scrollLeft;
        (0, _scrollIntoView.scrollRectIntoView)(scrollParent, root, rect, {
            block: 'nearest',
            inline: 'nearest'
        });
        let dy = scrollParent.scrollTop - beforeTop;
        let dx = scrollParent.scrollLeft - beforeLeft;
        if (dy !== 0 || dx !== 0) rect = new DOMRect(rect.x - dx, rect.y - dy, rect.width, rect.height);
    }
}
function tokenFieldPositionToDOMRange(root, pos) {
    // Unlike createDOMRange (used for caret/selection placement), this range is only
    // measured via getBoundingClientRect to position things like an autocomplete popover.
    // Place the endpoints inside the token's zero width space wrappers so the range has a
    // valid rect at the token, rather than a collapsed root-level position.
    let range = document.createRange();
    let [startContainer, startOffset] = getDOMRectPosition(root, pos);
    range.setStart(startContainer, startOffset);
    range.setEnd(startContainer, startOffset);
    return range;
}
function getDOMRectPosition(root, pos) {
    let child = root.childNodes[pos.index];
    if (child && child.nodeType === Node.ELEMENT_NODE) {
        // Place the position inside the zero width space wrappers around the token.
        if (pos.offset > 0) return [
            child.lastChild,
            1
        ];
        else return [
            child.firstChild,
            0
        ];
    }
    return getDOMPosition(root, pos);
}
function createDOMRange(root, start, end) {
    let range = document.createRange();
    let [startContainer, startOffset] = getDOMPosition(root, start);
    let [endContainer, endOffset] = getDOMPosition(root, end);
    range.setStart(startContainer, startOffset);
    range.setEnd(endContainer, endOffset);
    return range;
}
function getDOMPosition(root, pos) {
    let index = Math.max(0, Math.min(root.childNodes.length, pos.index));
    let child = root.childNodes[index];
    if (!child) return [
        root,
        index
    ];
    else if (child.nodeType === Node.ELEMENT_NODE) {
        // Place the cursor outside the token wrapper element.
        // This is necessary for composition events.
        if (pos.offset > 0) return [
            root,
            index + 1
        ];
        else return [
            root,
            index
        ];
    } else {
        let offset = Math.max(0, Math.min(child.textContent?.length ?? 0, pos.offset));
        return [
            child,
            offset
        ];
    }
}
function isSamePosition(a, b) {
    return a.index === b.index && a.offset === b.offset;
}
// Parse and validate segments from clipboard/drag data. Returns null if the data is not valid
// JSON or does not match the expected shape, so malformed or untrusted data is ignored rather
// than throwing or being inserted into the field.
function parseSegments(json) {
    try {
        let data = JSON.parse(json);
        if (Array.isArray(data) && data.length > 0 && data.every(isValidSegment)) return data;
    } catch  {
    // Ignore invalid clipboard data.
    }
    return null;
}
function isValidSegment(segment) {
    return typeof segment === 'object' && segment != null && (segment.type === 'text' || segment.type === 'token') && typeof segment.text === 'string';
}
function useSelectionChange(ref, handler) {
    (0, _useEvent.useEvent)((0, _react.useRef)(typeof document !== 'undefined' ? document : null), 'selectionchange', ()=>{
        if (ref.current && ref.current[isProgrammaticSelectionChange]) {
            ref.current[isProgrammaticSelectionChange] = false;
            return;
        }
        let selection = window.getSelection();
        if (!selection || selection.rangeCount === 0 || !ref.current) return;
        let range = selection.getRangeAt(0);
        if (range.intersectsNode(ref.current)) handler();
    });
}
function useMutationTracker(ref) {
    let mutationTracker = (0, _react.useRef)(null);
    // Disconnect the mutation observer if the field unmounts mid-composition.
    (0, _useLayoutEffect.useLayoutEffect)(()=>()=>{
            mutationTracker.current?.();
            mutationTracker.current = null;
        }, []);
    return (0, _react.useMemo)(()=>({
            start () {
                // Android sometimes fires two compositionstart events in a row, without a compositionend.
                // In that case, reuse the existing tracker.
                mutationTracker.current ||= trackMutations(ref.current);
            },
            stop () {
                mutationTracker.current?.();
                mutationTracker.current = null;
            }
        }), // eslint-disable-next-line react-hooks/exhaustive-deps - conflicts with compiler
    []);
}
// Tracks mutations to the DOM until the returned function is called,
// at which point the mutations are reverted.
function trackMutations(element) {
    let mutations = [];
    let observer = new MutationObserver((records)=>{
        mutations.push(...records);
    });
    observer.observe(element, {
        childList: true,
        subtree: true,
        characterData: true,
        characterDataOldValue: true
    });
    return ()=>{
        mutations.push(...observer.takeRecords());
        observer.disconnect();
        for (let record of mutations.reverse())switch(record.type){
            case 'childList':
                for (let node of record.removedNodes)record.target.insertBefore(node, record.nextSibling);
                for (let node of record.addedNodes)record.target.removeChild(node);
                break;
            case 'characterData':
                record.target.nodeValue = record.oldValue;
                break;
        }
    };
}
function announceToken(value, range = value.selectedRange) {
    if (range.isCollapsed) {
        // Announce adjacent tokens.
        let segment = value.segments[range.current.index];
        if (segment && segment.type !== 'token') {
            if (range.current.offset === 0) segment = value.segments[range.current.index - 1];
            else if (range.current.offset === segment.text.length) segment = value.segments[range.current.index + 1];
        }
        if (segment?.type === 'token') (0, _liveAnnouncer.announce)(segment.text, 'assertive');
    } else {
        // Announce token if it is the only thing selected.
        let selected = value.slice(range.start, range.end).segments;
        if (selected.length === 1 && selected[0].type === 'token') (0, _liveAnnouncer.announce)(selected[0].text, 'assertive');
    }
}

},{"../live-announcer/LiveAnnouncer":"gQ2k2","react":"gOP0N","../utils/shadowdom/DOMFunctions":"8kfpz","../interactions/useFocusVisible":"aBfUW","../utils/domHelpers":"cYkFa","../utils/getScrollParents":"6TSmG","../utils/platform":"eBqgD","../utils/mergeProps":"jycxS","react-stately/useTokenFieldState":"kvnyc","../utils/scrollIntoView":"5N7nL","../utils/useEvent":"avf8K","../label/useField":"5Oeu9","../interactions/useFocusable":"6IFKj","../interactions/useKeyboard":"aHm7i","../utils/useLayoutEffect":"h7M6K","../i18n/I18nProvider":"czGuc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

