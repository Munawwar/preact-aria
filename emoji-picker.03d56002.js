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
})({"YYckq":[function(require,module,exports,__globalThis) {
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
 * Virtualizer supports arbitrary layout objects, which compute what items are visible, and how
 * to position and style them. However, layouts do not render items directly. Instead,
 * layouts produce lightweight LayoutInfo objects which describe various properties of an item,
 * such as its position and size. The Virtualizer is then responsible for creating the actual
 * views as needed, based on this layout information.
 *
 * Every layout extends from the Layout abstract base class. Layouts must implement the
 * `getVisibleLayoutInfos`, `getLayoutInfo`, and `getContentSize` methods. All other methods can be
 * optionally overridden to implement custom behavior.
 */ parcelHelpers.export(exports, "Layout", ()=>Layout);
class Layout {
    /** The Virtualizer the layout is currently attached to. */ virtualizer = null;
    /**
   * Returns whether the layout should invalidate in response to
   * visible rectangle changes. By default, it only invalidates
   * when the virtualizer's size changes. Return true always
   * to make the layout invalidate while scrolling (e.g. sticky headers).
   */ shouldInvalidate(newRect, oldRect) {
        // By default, invalidate when the size changes
        return newRect.width !== oldRect.width || newRect.height !== oldRect.height;
    }
    /**
   * Returns whether the layout should invalidate when the layout options change.
   * By default it invalidates when the object identity changes. Override this
   * method to optimize layout updates based on specific option changes.
   */ shouldInvalidateLayoutOptions(newOptions, oldOptions) {
        return newOptions !== oldOptions;
    }
    /**
   * This method allows the layout to perform any pre-computation
   * it needs to in order to prepare LayoutInfos for retrieval.
   * Called by the virtualizer before `getVisibleLayoutInfos`
   * or `getLayoutInfo` are called.
   */ update(invalidationContext) {}
    /** @private */ getItemRect(key) {
        return this.getLayoutInfo(key)?.rect ?? null;
    }
    /** @private */ getVisibleRect() {
        return this.virtualizer.visibleRect;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"81Wbi":[function(require,module,exports,__globalThis) {
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
 * Instances of this lightweight class are created by `Layout` subclasses
 * to represent each item in the `Virtualizer`. LayoutInfo objects describe
 * various properties of an item, such as its position and size, and style information.
 * The virtualizer uses this information when creating actual DOM elements to display.
 */ parcelHelpers.export(exports, "LayoutInfo", ()=>LayoutInfo);
class LayoutInfo {
    /**
   * The type of element represented by this LayoutInfo. Should match the `type` of the
   * corresponding collection node.
   */ type;
    /**
   * A unique key for this LayoutInfo. Should match the `key` of the corresponding collection node.
   */ key;
    /**
   * The key for a parent LayoutInfo, if any.
   */ parentKey;
    /**
   * Content for this item if it was generated by the layout rather than coming from the Collection.
   */ content;
    /**
   * The rectangle describing the size and position of this element.
   */ rect;
    /**
   * Whether the size is estimated. `false` by default.
   * Items with estimated sizes will be measured the first time they are added to the DOM.
   * The estimated size is used to calculate the size and position of the scrollbar.
   *
   * @default false
   */ estimatedSize;
    /**
   * Whether the layout info sticks to the viewport when scrolling.
   *
   * @default false
   */ isSticky;
    /**
   * The element's opacity.
   *
   * @default 1
   */ opacity;
    /**
   * A CSS transform string to apply to the element. `null` by default.
   */ transform;
    /**
   * The z-index of the element. 0 by default.
   */ zIndex;
    /**
   * Whether the element allows its contents to overflow its container.
   *
   * @default false
   */ allowOverflow;
    /**
   * @param type The type of element represented by this LayoutInfo. Should match the `type` of the
   *   corresponding collection node.
   * @param key A unique key for this LayoutInfo. Should match the `key` of the corresponding
   *   collection node.
   * @param rect The rectangle describing the size and position of this element.
   */ constructor(type, key, rect){
        this.type = type;
        this.key = key;
        this.parentKey = null;
        this.content = null;
        this.rect = rect;
        this.estimatedSize = false;
        this.isSticky = false;
        this.opacity = 1;
        this.transform = null;
        this.zIndex = 0;
        this.allowOverflow = false;
    }
    /**
   * Returns a copy of the LayoutInfo.
   */ copy() {
        let res = new LayoutInfo(this.type, this.key, this.rect.copy());
        res.estimatedSize = this.estimatedSize;
        res.opacity = this.opacity;
        res.transform = this.transform;
        res.parentKey = this.parentKey;
        res.content = this.content;
        res.isSticky = this.isSticky;
        res.zIndex = this.zIndex;
        res.allowOverflow = this.allowOverflow;
        return res;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9sh2q":[function(require,module,exports,__globalThis) {
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
 * Represents a rectangle.
 */ parcelHelpers.export(exports, "Rect", ()=>Rect);
var _point = require("./Point");
class Rect {
    /** The x-coordinate of the rectangle. */ x;
    /** The y-coordinate of the rectangle. */ y;
    /** The width of the rectangle. */ width;
    /** The height of the rectangle. */ height;
    constructor(x = 0, y = 0, width = 0, height = 0){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    /**
   * The maximum x-coordinate in the rectangle.
   */ get maxX() {
        return this.x + this.width;
    }
    /**
   * The maximum y-coordinate in the rectangle.
   */ get maxY() {
        return this.y + this.height;
    }
    /**
   * The area of the rectangle.
   */ get area() {
        return this.width * this.height;
    }
    /**
   * The top left corner of the rectangle.
   */ get topLeft() {
        return new (0, _point.Point)(this.x, this.y);
    }
    /**
   * The top right corner of the rectangle.
   */ get topRight() {
        return new (0, _point.Point)(this.maxX, this.y);
    }
    /**
   * The bottom left corner of the rectangle.
   */ get bottomLeft() {
        return new (0, _point.Point)(this.x, this.maxY);
    }
    /**
   * The bottom right corner of the rectangle.
   */ get bottomRight() {
        return new (0, _point.Point)(this.maxX, this.maxY);
    }
    /**
   * Returns whether this rectangle intersects another rectangle.
   *
   * @param rect - The rectangle to check.
   */ intersects(rect) {
        let isTestEnv = false;
        return (isTestEnv || this.area > 0 && rect.area > 0) && this.x <= rect.x + rect.width && rect.x <= this.x + this.width && this.y <= rect.y + rect.height && rect.y <= this.y + this.height;
    }
    /**
   * Returns whether this rectangle fully contains another rectangle.
   *
   * @param rect - The rectangle to check.
   */ containsRect(rect) {
        return this.x <= rect.x && this.y <= rect.y && this.maxX >= rect.maxX && this.maxY >= rect.maxY;
    }
    /**
   * Returns whether the rectangle contains the given point.
   *
   * @param point - The point to check.
   */ containsPoint(point) {
        return this.x <= point.x && this.y <= point.y && this.maxX >= point.x && this.maxY >= point.y;
    }
    /**
   * Returns the first corner of this rectangle (from top to bottom, left to right)
   * that is contained in the given rectangle, or null of the rectangles do not intersect.
   *
   * @param rect - The rectangle to check.
   */ getCornerInRect(rect) {
        for (let key of [
            'topLeft',
            'topRight',
            'bottomLeft',
            'bottomRight'
        ]){
            if (rect.containsPoint(this[key])) return key;
        }
        return null;
    }
    equals(rect) {
        return rect.x === this.x && rect.y === this.y && rect.width === this.width && rect.height === this.height;
    }
    pointEquals(point) {
        return this.x === point.x && this.y === point.y;
    }
    sizeEquals(size) {
        return this.width === size.width && this.height === size.height;
    }
    /**
   * Returns the union of this Rect and another.
   */ union(other) {
        let x = Math.min(this.x, other.x);
        let y = Math.min(this.y, other.y);
        let width = Math.max(this.maxX, other.maxX) - x;
        let height = Math.max(this.maxY, other.maxY) - y;
        return new Rect(x, y, width, height);
    }
    /**
   * Returns the intersection of this Rect with another.
   * If the rectangles do not intersect, an all zero Rect is returned.
   */ intersection(other) {
        if (!this.intersects(other)) return new Rect(0, 0, 0, 0);
        let x = Math.max(this.x, other.x);
        let y = Math.max(this.y, other.y);
        return new Rect(x, y, Math.min(this.maxX, other.maxX) - x, Math.min(this.maxY, other.maxY) - y);
    }
    /**
   * Returns a copy of this rectangle.
   */ copy() {
        return new Rect(this.x, this.y, this.width, this.height);
    }
}

},{"./Point":"azpXc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"azpXc":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Point", ()=>Point);
class Point {
    /** The x-coordinate of the point. */ x;
    /** The y-coordinate of the point. */ y;
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
    /**
   * Returns a copy of this point.
   */ copy() {
        return new Point(this.x, this.y);
    }
    /**
   * Checks if two points are equal.
   */ equals(point) {
        return this.x === point.x && this.y === point.y;
    }
    /**
   * Returns true if this point is the origin.
   */ isOrigin() {
        return this.x === 0 && this.y === 0;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aiymI":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "Size", ()=>Size);
class Size {
    width;
    height;
    constructor(width = 0, height = 0){
        this.width = Math.max(width, 0);
        this.height = Math.max(height, 0);
    }
    /**
   * Returns a copy of this size.
   */ copy() {
        return new Size(this.width, this.height);
    }
    /**
   * Returns whether this size is equal to another one.
   */ equals(other) {
        return this.width === other.width && this.height === other.height;
    }
    /**
   * The total area of the Size.
   */ get area() {
        return this.width * this.height;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"nHEBB":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useLayoutEffect", ()=>useLayoutEffect);
parcelHelpers.export(exports, "useVirtualizerState", ()=>useVirtualizerState);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _rect = require("./Rect");
var _size = require("./Size");
var _virtualizer = require("./Virtualizer");
const useLayoutEffect = typeof document !== 'undefined' ? (0, _reactDefault.default).useLayoutEffect : ()=>{};
function useVirtualizerState(opts) {
    let [visibleRect, setVisibleRect] = (0, _react.useState)(new (0, _rect.Rect)(0, 0, 0, 0));
    let [size, setSize] = (0, _react.useState)(new (0, _size.Size)());
    let [isScrolling, setScrolling] = (0, _react.useState)(false);
    let [invalidationContext, setInvalidationContext] = (0, _react.useState)({});
    let visibleRectChanged = (0, _react.useRef)(false);
    let [virtualizer] = (0, _react.useState)(// oxlint-disable-next-line react/react-compiler
    ()=>new (0, _virtualizer.Virtualizer)({
            collection: opts.collection,
            layout: opts.layout,
            delegate: {
                setVisibleRect (rect) {
                    setVisibleRect(rect);
                    visibleRectChanged.current = true;
                },
                // TODO: should changing these invalidate the entire cache?
                renderView: opts.renderView,
                invalidate: setInvalidationContext
            }
        }));
    // onVisibleRectChange must be called from an effect, not during render.
    useLayoutEffect(()=>{
        if (visibleRectChanged.current) {
            visibleRectChanged.current = false;
            opts.onVisibleRectChange(visibleRect);
        }
    });
    let mergedInvalidationContext = (0, _react.useMemo)(()=>{
        if (opts.layoutOptions != null) return {
            ...invalidationContext,
            layoutOptions: opts.layoutOptions
        };
        return invalidationContext;
    }, [
        invalidationContext,
        opts.layoutOptions
    ]);
    let visibleViews = virtualizer.render({
        layout: opts.layout,
        collection: opts.collection,
        persistedKeys: opts.persistedKeys,
        layoutOptions: opts.layoutOptions,
        visibleRect,
        size: opts.allowsWindowScrolling ? size : visibleRect,
        invalidationContext: mergedInvalidationContext,
        isScrolling
    });
    let contentSize = virtualizer.contentSize;
    let startScrolling = (0, _react.useCallback)(()=>{
        setScrolling(true);
    }, []);
    let endScrolling = (0, _react.useCallback)(()=>{
        setScrolling(false);
    }, []);
    let state = (0, _react.useMemo)(()=>({
            virtualizer,
            visibleViews,
            setVisibleRect,
            size,
            setSize,
            contentSize,
            isScrolling,
            startScrolling,
            endScrolling
        }), [
        virtualizer,
        visibleViews,
        setVisibleRect,
        size,
        setSize,
        contentSize,
        isScrolling,
        startScrolling,
        endScrolling
    ]);
    return state;
}

},{"react":"gOP0N","./Rect":"9sh2q","./Size":"aiymI","./Virtualizer":"dBmcw","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dBmcw":[function(require,module,exports,__globalThis) {
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
 * The Virtualizer class renders a scrollable collection of data using customizable layouts.
 * It supports very large collections by only rendering visible views to the DOM, reusing
 * them as you scroll. Virtualizer can present any type of view, including non-item views
 * such as section headers and footers.
 *
 * Virtualizer uses `Layout` objects to compute what views should be visible, and how
 * to position and style them. This means that virtualizer can have its items arranged in
 * a stack, a grid, a circle, or any other layout you can think of. The layout can be changed
 * dynamically at runtime as well.
 *
 * Layouts produce information on what views should appear in the virtualizer, but do not create the
 * views themselves directly. It is the responsibility of the `VirtualizerDelegate` object to render
 * elements for each layout info. The virtualizer manages a set of `ReusableView` objects, which are
 * reused as the user scrolls by swapping their content with cached elements returned by the
 * delegate.
 */ parcelHelpers.export(exports, "Virtualizer", ()=>Virtualizer);
var _reusableView = require("./ReusableView");
var _utils = require("./utils");
var _overscanManager = require("./OverscanManager");
var _rect = require("./Rect");
var _scrollAnchor = require("./ScrollAnchor");
var _size = require("./Size");
class Virtualizer {
    /**
   * The virtualizer delegate. The delegate is used by the virtualizer
   * to create and configure views.
   */ delegate;
    /** The current content of the virtualizer. */ collection;
    /** The layout object that determines the visible views. */ layout;
    /** The size of the scrollable content. */ contentSize;
    /** The currently visible rectangle. */ visibleRect;
    /** The size of the virtualizer scroll view. */ size;
    /** The set of persisted keys that are always present in the DOM, even if not currently in view. */ persistedKeys;
    _visibleViews;
    _renderedContent;
    _rootView;
    _isScrolling;
    _invalidationContext;
    _overscanManager;
    _scrollAnchor;
    constructor(options){
        this.delegate = options.delegate;
        this.collection = options.collection;
        this.layout = options.layout;
        this.contentSize = new (0, _size.Size)();
        this.visibleRect = new (0, _rect.Rect)();
        this.size = new (0, _size.Size)();
        this.persistedKeys = new Set();
        this._visibleViews = new Map();
        this._renderedContent = new WeakMap();
        this._rootView = new (0, _reusableView.RootView)(this);
        this._isScrolling = false;
        this._invalidationContext = {};
        this._overscanManager = new (0, _overscanManager.OverscanManager)();
        this._scrollAnchor = new (0, _scrollAnchor.ScrollAnchorTracker)();
    }
    /** Returns whether the given key, or an ancestor, is persisted. */ isPersistedKey(key) {
        // Quick check if the key is directly in the set of persisted keys.
        if (this.persistedKeys.has(key)) return true;
        // If not, check if the key is an ancestor of any of the persisted keys.
        for (let k of this.persistedKeys)while(k != null){
            let layoutInfo = this.layout.getLayoutInfo(k);
            if (!layoutInfo || layoutInfo.parentKey == null) break;
            k = layoutInfo.parentKey;
            if (k === key) return true;
        }
        return false;
    }
    getParentView(layoutInfo) {
        return layoutInfo.parentKey != null ? this._visibleViews.get(layoutInfo.parentKey) : this._rootView;
    }
    getReusableView(layoutInfo) {
        let parentView = this.getParentView(layoutInfo);
        let view = parentView.getReusableView(layoutInfo.type);
        view.layoutInfo = layoutInfo;
        this._renderView(view);
        return view;
    }
    _renderView(reusableView) {
        if (reusableView.layoutInfo) {
            let { type, key, content } = reusableView.layoutInfo;
            reusableView.content = content || this.collection.getItem(key);
            reusableView.rendered = this._renderContent(type, reusableView.content);
        }
    }
    _renderContent(type, content) {
        let cached = content != null ? this._renderedContent.get(content) : null;
        if (cached != null) return cached;
        let rendered = this.delegate.renderView(type, content);
        if (content) this._renderedContent.set(content, rendered);
        return rendered;
    }
    /**
   * Returns the key for the item view currently at the given point.
   */ keyAtPoint(point) {
        let rect = new (0, _rect.Rect)(point.x, point.y, 1, 1);
        let layoutInfos = rect.area === 0 ? [] : this.layout.getVisibleLayoutInfos(rect);
        // Layout may return multiple layout infos in the case of
        // persisted keys, so find the first one that actually intersects.
        for (let layoutInfo of layoutInfos){
            if (layoutInfo.rect.intersects(rect)) return layoutInfo.key;
        }
        return null;
    }
    relayout(context = {}) {
        // @ts-ignore
        let anchorInfo = this.layout.UNSTABLE_getScrollAnchorInfo?.(context.layoutOptions) ?? null;
        // Capture scroll anchor from current (pre-layout) view positions.
        // On first render _visibleViews is empty so no anchor will be found.
        let anchor = null;
        if (anchorInfo) {
            let preLayoutInfos = [];
            for (let [key, view] of this._visibleViews){
                let layoutInfo = this.layout.getLayoutInfo(key) ?? view.layoutInfo;
                if (layoutInfo) preLayoutInfos.push([
                    key,
                    layoutInfo
                ]);
            }
            anchor = this._scrollAnchor.captureBeforeLayout(anchorInfo, preLayoutInfos, this.visibleRect);
        }
        let previousContentSize = this.contentSize;
        let previousVisibleRect = this.visibleRect;
        // Update the layout
        this.layout.update(context);
        let rawContentSize = this.layout.getContentSize();
        this.contentSize = new (0, _size.Size)(rawContentSize.width, rawContentSize.height);
        let target = this._scrollAnchor.resolveAfterLayout({
            anchorInfo,
            anchor,
            postLayoutInfos: anchorInfo ? this.getVisibleLayoutInfos() : new Map(),
            previousVisibleRect,
            previousContentSize,
            contentSize: this.contentSize,
            itemSizeChanged: context.itemSizeChanged ?? false,
            isScrolling: this._isScrolling,
            getLayoutInfo: (key)=>this.layout.getLayoutInfo(key)
        });
        if (target) {
            // Queues a new render cycle. Return early to skip updateSubviews — running it now
            // would position views against the old visibleRect, causing a flash before the
            // incoming relayout corrects them.
            this.delegate.setVisibleRect(target);
            return;
        }
        // Constrain scroll position.
        // If the content changed, scroll to the top.
        let visibleRect = this.visibleRect;
        let contentOffsetX = context.contentChanged ? 0 : visibleRect.x;
        let contentOffsetY = context.contentChanged ? 0 : visibleRect.y;
        contentOffsetX = Math.max(0, Math.min(this.contentSize.width - visibleRect.width, contentOffsetX));
        contentOffsetY = Math.max(0, Math.min(this.contentSize.height - visibleRect.height, contentOffsetY));
        if (contentOffsetX !== visibleRect.x || contentOffsetY !== visibleRect.y) {
            // If the offset changed, trigger a new re-render.
            let rect = new (0, _rect.Rect)(contentOffsetX, contentOffsetY, visibleRect.width, visibleRect.height);
            this.delegate.setVisibleRect(rect);
        } else this.updateSubviews();
    }
    getVisibleLayoutInfos() {
        let isTestEnv = false;
        let isClientWidthMocked = isTestEnv && typeof HTMLElement !== 'undefined' && Object.getOwnPropertyNames(HTMLElement.prototype).includes('clientWidth');
        let isClientHeightMocked = isTestEnv && typeof HTMLElement !== 'undefined' && Object.getOwnPropertyNames(HTMLElement.prototype).includes('clientHeight');
        let rect;
        if (isTestEnv && !(isClientWidthMocked && isClientHeightMocked)) rect = new (0, _rect.Rect)(0, 0, this.contentSize.width, this.contentSize.height);
        else rect = this._overscanManager.getOverscannedRect();
        let layoutInfos = this.layout.getVisibleLayoutInfos(rect);
        let map = new Map();
        for (let layoutInfo of layoutInfos)map.set(layoutInfo.key, layoutInfo);
        return map;
    }
    updateSubviews() {
        let visibleLayoutInfos = this.getVisibleLayoutInfos();
        let removed = new Set();
        for (let [key, view] of this._visibleViews){
            let layoutInfo = visibleLayoutInfos.get(key);
            // If a view's parent changed, treat it as a delete and re-create in the new parent.
            if (!layoutInfo || view.parent !== this.getParentView(layoutInfo)) {
                this._visibleViews.delete(key);
                view.parent.reuseChild(view);
                removed.add(view); // Defer removing in case we reuse this view.
            }
        }
        for (let [key, layoutInfo] of visibleLayoutInfos){
            let view = this._visibleViews.get(key);
            if (!view) {
                view = this.getReusableView(layoutInfo);
                view.parent.children.add(view);
                this._visibleViews.set(key, view);
                removed.delete(view);
            } else {
                view.layoutInfo = layoutInfo;
                let item = this.collection.getItem(layoutInfo.key);
                if (view.content !== item) {
                    if (view.content != null) this._renderedContent.delete(view.content);
                    this._renderView(view);
                }
            }
        }
        // The remaining views in `removed` were not reused to render new items.
        // They should be removed from the DOM. We also clear the reusable view queue
        // here since there's no point holding onto views that have been removed.
        // Doing so hurts performance in the future when reusing elements due to FIFO order.
        for (let view of removed){
            view.parent.children.delete(view);
            view.parent.reusableViews.clear();
        }
        // Reordering DOM nodes is costly, so we defer this until scrolling stops.
        // DOM order does not affect visual order (due to absolute positioning),
        // but does matter for assistive technology users.
        if (!this._isScrolling) // Layout infos must be in topological order (parents before children).
        for (let key of visibleLayoutInfos.keys()){
            let view = this._visibleViews.get(key);
            view.parent.children.delete(view);
            view.parent.children.add(view);
        }
    }
    /** Performs layout and updates visible views as needed. */ render(opts) {
        let mutableThis = this;
        let needsLayout = false;
        let offsetChanged = false;
        let sizeChanged = false;
        let widthChanged = false;
        let heightChanged = false;
        let itemSizeChanged = false;
        let layoutOptionsChanged = false;
        let needsUpdate = false;
        if (opts.collection !== this.collection) {
            mutableThis.collection = opts.collection;
            needsLayout = true;
        }
        if (opts.layout !== this.layout || this.layout.virtualizer !== this) {
            if (this.layout) this.layout.virtualizer = null;
            opts.layout.virtualizer = this;
            mutableThis.layout = opts.layout;
            this._scrollAnchor.reset();
            needsLayout = true;
        }
        if (opts.persistedKeys && !(0, _utils.isSetEqual)(opts.persistedKeys, this.persistedKeys)) {
            mutableThis.persistedKeys = opts.persistedKeys;
            needsUpdate = true;
        }
        if (!this.visibleRect.equals(opts.visibleRect) || !this.size.equals(opts.size)) {
            this._overscanManager.setVisibleRect(opts.visibleRect);
            // Create a rectangle using the scroll position and layout size of the scroll view. This is not the same
            // as the visibleRect, whose width and height may change during window scrolling.
            let oldRect = new (0, _rect.Rect)(this.visibleRect.x, this.visibleRect.y, this.size.width, this.size.height);
            let newRect = new (0, _rect.Rect)(opts.visibleRect.x, opts.visibleRect.y, opts.size.width, opts.size.height);
            let shouldInvalidate = this.layout.shouldInvalidate(newRect, oldRect);
            if (shouldInvalidate) {
                offsetChanged = !opts.visibleRect.pointEquals(this.visibleRect);
                sizeChanged = !this.size.equals(opts.size);
                widthChanged = this.size.width !== opts.size.width;
                heightChanged = this.size.height !== opts.size.height;
                needsLayout = true;
            } else needsUpdate = true;
            mutableThis.visibleRect = opts.visibleRect;
            mutableThis.size = opts.size;
        }
        if (opts.invalidationContext !== this._invalidationContext) {
            if (opts.invalidationContext) {
                sizeChanged ||= opts.invalidationContext.sizeChanged || false;
                widthChanged ||= opts.invalidationContext.widthChanged || false;
                heightChanged ||= opts.invalidationContext.heightChanged || false;
                offsetChanged ||= opts.invalidationContext.offsetChanged || false;
                itemSizeChanged ||= opts.invalidationContext.itemSizeChanged || false;
                layoutOptionsChanged ||= opts.invalidationContext.layoutOptions != null && this._invalidationContext.layoutOptions != null && opts.invalidationContext.layoutOptions !== this._invalidationContext.layoutOptions && this.layout.shouldInvalidateLayoutOptions(opts.invalidationContext.layoutOptions, this._invalidationContext.layoutOptions);
                needsLayout ||= itemSizeChanged || sizeChanged || offsetChanged || layoutOptionsChanged;
            }
            this._invalidationContext = opts.invalidationContext;
        }
        if (opts.isScrolling !== this._isScrolling) {
            this._isScrolling = opts.isScrolling;
            if (!opts.isScrolling) // Update to fix the DOM order after scrolling.
            needsUpdate = true;
        }
        if (needsLayout) this.relayout({
            offsetChanged,
            sizeChanged,
            widthChanged,
            heightChanged,
            itemSizeChanged,
            layoutOptionsChanged,
            layoutOptions: this._invalidationContext.layoutOptions
        });
        else if (needsUpdate) this.updateSubviews();
        return Array.from(this._rootView.children);
    }
    getVisibleView(key) {
        return this._visibleViews.get(key);
    }
    invalidate(context) {
        this.delegate.invalidate(context);
    }
    updateItemSize(key, size) {
        if (!this.layout.updateItemSize) return;
        let changed = this.layout.updateItemSize(key, size);
        if (changed) this.invalidate({
            itemSizeChanged: true
        });
    }
}

},{"./ReusableView":"g1MDk","./utils":"02yfK","./OverscanManager":"1b2Jz","./Rect":"9sh2q","./ScrollAnchor":"3Wypt","./Size":"aiymI","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"g1MDk":[function(require,module,exports,__globalThis) {
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
 * `Virtualizer` creates instances of the `ReusableView` class to
 * represent views currently being displayed.
 */ parcelHelpers.export(exports, "ReusableView", ()=>ReusableView);
parcelHelpers.export(exports, "RootView", ()=>RootView);
parcelHelpers.export(exports, "ChildView", ()=>ChildView);
let KEY = 0;
class ReusableView {
    /** The Virtualizer this view is a part of. */ virtualizer;
    /** The LayoutInfo this view is currently representing. */ layoutInfo;
    /** The content currently being displayed by this view, set by the virtualizer. */ content;
    rendered;
    viewType;
    key;
    children;
    reusableViews;
    constructor(virtualizer, viewType){
        this.virtualizer = virtualizer;
        this.key = ++KEY;
        this.viewType = viewType;
        this.children = new Set();
        this.reusableViews = new Map();
        this.layoutInfo = null;
        this.content = null;
        this.rendered = null;
    }
    /**
   * Prepares the view for reuse. Called just before the view is removed from the DOM.
   */ prepareForReuse() {
        this.content = null;
        this.rendered = null;
        this.layoutInfo = null;
    }
    getReusableView(reuseType) {
        // Reusable view queue should be FIFO so that DOM order remains consistent during scrolling.
        // For example, cells within a row should remain in the same order even if the row changes contents.
        // The cells within a row are removed from their parent in order. If the row is reused, the cells
        // should be reused in the new row in the same order they were before.
        let reusable = this.reusableViews.get(reuseType);
        let view = reusable && reusable.length > 0 ? reusable.shift() : new ChildView(this.virtualizer, this, reuseType);
        return view;
    }
    reuseChild(child) {
        child.prepareForReuse();
        let reusable = this.reusableViews.get(child.viewType);
        if (!reusable) {
            reusable = [];
            this.reusableViews.set(child.viewType, reusable);
        }
        reusable.push(child);
    }
}
class RootView extends ReusableView {
    constructor(virtualizer){
        super(virtualizer, 'root');
    }
}
class ChildView extends ReusableView {
    parent;
    constructor(virtualizer, parent, viewType){
        super(virtualizer, viewType);
        this.parent = parent;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"02yfK":[function(require,module,exports,__globalThis) {
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
 */ /** Returns whether two sets are equal. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSetEqual", ()=>isSetEqual);
function isSetEqual(a, b) {
    if (a === b) return true;
    if (a.size !== b.size) return false;
    for (let key of a){
        if (!b.has(key)) return false;
    }
    return true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1b2Jz":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "OverscanManager", ()=>OverscanManager);
var _point = require("./Point");
var _rect = require("./Rect");
class OverscanManager {
    startTime = 0;
    velocity = new (0, _point.Point)(0, 0);
    visibleRect = new (0, _rect.Rect)();
    setVisibleRect(rect) {
        let time = performance.now() - this.startTime;
        if (time < 500) {
            if (rect.x !== this.visibleRect.x && time > 0) this.velocity.x = (rect.x - this.visibleRect.x) / time;
            if (rect.y !== this.visibleRect.y && time > 0) this.velocity.y = (rect.y - this.visibleRect.y) / time;
        }
        this.startTime = performance.now();
        this.visibleRect = rect;
    }
    getOverscannedRect() {
        let overscanned = this.visibleRect.copy();
        let overscanY = this.visibleRect.height / 3;
        overscanned.height += overscanY;
        if (this.velocity.y < 0) overscanned.y -= overscanY;
        let overscanX = this.visibleRect.width / 3;
        overscanned.width += overscanX;
        if (this.velocity.x < 0) overscanned.x -= overscanX;
        return overscanned;
    }
}

},{"./Point":"azpXc","./Rect":"9sh2q","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3Wypt":[function(require,module,exports,__globalThis) {
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
 * Given a previously-captured anchor, computes the new viewport coordinate (along `axis`) needed
 * to keep it at the same offset from the viewport's start.
 */ parcelHelpers.export(exports, "computeScrollAnchorTarget", ()=>computeScrollAnchorTarget);
/**
 * Picks the item to anchor scroll to: the one nearest the top of the viewport when
 * anchoring to 'end', or nearest the bottom when anchoring to 'start'. Callers can
 * exclude certain items (like loaders) with `isAnchorable`.
 */ parcelHelpers.export(exports, "captureScrollAnchor", ()=>captureScrollAnchor);
/** Returns the viewport coordinate (along `axis`) that pins the viewport to `edge` of the content. */ parcelHelpers.export(exports, "getEdgeSnapTarget", ()=>getEdgeSnapTarget);
/**
 * Whether the viewport is currently within `threshold` px of the anchored edge — used by
 * Virtualizer to compute wasNearAnchorEdge generically, without any layout-specific state.
 */ parcelHelpers.export(exports, "isNearEdge", ()=>isNearEdge);
/**
 * Works out the new scroll position after content changes. Tries to keep the anchor
 * item where it was. If that doesn't apply, sticks the view to the edge instead, but
 * only if the user was already near the edge and didn't just scroll away on their own.
 */ parcelHelpers.export(exports, "resolveScrollAdjustment", ()=>resolveScrollAdjustment);
/**
 * Tracks the cross-pass state needed to keep the viewport anchored to a layout's edge across
 * relayouts.
 */ parcelHelpers.export(exports, "ScrollAnchorTracker", ()=>ScrollAnchorTracker);
var _rect = require("./Rect");
/**
 * Minimum overlap an item must have with the viewport, along the scroll axis,
 * to be eligible as a scroll anchor. Without this, an item that only overlaps the viewport
 * by a sliver (e.g. 1px, essentially scrolled out of view) can still "win" the anchor
 * tie-break over a substantially visible item.
 */ const MIN_ANCHOR_OVERLAP = 4;
function dimensionForAxis(axis) {
    return axis === 'x' ? 'width' : 'height';
}
function computeScrollAnchorTarget(anchor, axis, getLayoutInfo, visibleRect, contentSize) {
    let finalInfo = getLayoutInfo(anchor.key);
    if (!finalInfo) return null;
    let adjustment = finalInfo.rect[anchor.corner][axis] - visibleRect[axis] - anchor.offset;
    if (adjustment === 0) return null;
    let target = visibleRect[axis] + adjustment;
    let dimension = dimensionForAxis(axis);
    let max = Math.max(0, contentSize[dimension] - visibleRect[dimension]);
    let clamped = Math.max(0, Math.min(max, target));
    return clamped !== visibleRect[axis] ? clamped : null;
}
function captureScrollAnchor(edge, axis, visibleRect, visibleLayoutInfos, isAnchorable = ()=>true) {
    let dimension = dimensionForAxis(axis);
    let best = null;
    for (let [key, layoutInfo] of visibleLayoutInfos){
        if (!layoutInfo || !isAnchorable(layoutInfo)) continue;
        let overlap = layoutInfo.rect.intersection(visibleRect)[dimension];
        if (layoutInfo.rect.area > 0 && overlap >= MIN_ANCHOR_OVERLAP) {
            let corner = layoutInfo.rect.getCornerInRect(visibleRect) ?? 'topLeft';
            let offset = layoutInfo.rect[corner][axis] - visibleRect[axis];
            let isBetter = !best || (edge === 'end' ? offset < best.offset : offset > best.offset);
            if (isBetter) best = {
                key,
                corner,
                offset
            };
        }
    }
    return best;
}
function getEdgeSnapTarget(edge, axis, contentSize, previousVisibleRect) {
    if (edge === 'start') return 0;
    let dimension = dimensionForAxis(axis);
    return Math.max(0, contentSize[dimension] - previousVisibleRect[dimension]);
}
function isNearEdge(visibleRect, contentSize, edge, axis, threshold) {
    if (edge === 'start') return visibleRect[axis] <= threshold;
    let dimension = dimensionForAxis(axis);
    let distanceFromEnd = contentSize[dimension] - (visibleRect[axis] + visibleRect[dimension]);
    return distanceFromEnd <= threshold;
}
function resolveScrollAdjustment(edge, axis, anchor, wasNearAnchorEdge, isScrolling, itemSizeChanged, contentSizeDelta, getLayoutInfo, previousVisibleRect, contentSize) {
    let withTarget = (target)=>axis === 'x' ? new (0, _rect.Rect)(target, previousVisibleRect.y, previousVisibleRect.width, previousVisibleRect.height) : new (0, _rect.Rect)(previousVisibleRect.x, target, previousVisibleRect.width, previousVisibleRect.height);
    if (anchor) {
        let target = computeScrollAnchorTarget(anchor, axis, getLayoutInfo, previousVisibleRect, contentSize);
        if (target != null) return withTarget(target);
    }
    if (wasNearAnchorEdge && !isScrolling && (!itemSizeChanged || contentSizeDelta > 0)) {
        let target = withTarget(getEdgeSnapTarget(edge, axis, contentSize, previousVisibleRect));
        return target.equals(previousVisibleRect) ? null : target;
    }
    return null;
}
class ScrollAnchorTracker {
    hasSnappedToEdge = false;
    hadEstimatedVisibleItems = false;
    wasNearAnchorEdge = false;
    /** Resets all tracked state, e.g. when the virtualizer's layout instance changes. */ reset() {
        this.hasSnappedToEdge = false;
        this.hadEstimatedVisibleItems = false;
        this.wasNearAnchorEdge = false;
    }
    /**
   * Captures the anchor from pre-layout view positions.
   */ captureBeforeLayout(anchorInfo, preLayoutInfos, visibleRect) {
        if (!anchorInfo) return null;
        return captureScrollAnchor(anchorInfo.edge, anchorInfo.axis, visibleRect, preLayoutInfos, anchorInfo.isAnchorable);
    }
    /**
   * Runs the full post-layout decision: updates the tracked state for the next pass, and
   * returns the resolved scroll target, or null if nothing should change.
   */ resolveAfterLayout(options) {
        let { anchorInfo, anchor, postLayoutInfos, previousVisibleRect, previousContentSize, contentSize, itemSizeChanged, isScrolling, getLayoutInfo } = options;
        if (!anchorInfo) return null;
        // Read the previous pass's state into locals before any writes below overwrite it.
        let wasSettlingLastPass = this.hadEstimatedVisibleItems;
        let wasNearAnchorEdgeLastPass = this.wasNearAnchorEdge;
        let hasEstimated = false;
        for (let layoutInfo of postLayoutInfos.values())if (layoutInfo.estimatedSize) {
            hasEstimated = true;
            break;
        }
        this.hadEstimatedVisibleItems = hasEstimated;
        // Don't recheck "near edge?" mid-resize because it could look like a scroll that never happened.
        // Reuse the answer from before the resizing started.
        if (!wasSettlingLastPass) this.wasNearAnchorEdge = isNearEdge(previousVisibleRect, previousContentSize, anchorInfo.edge, anchorInfo.axis, anchorInfo.threshold);
        if (previousVisibleRect.area === 0) return null;
        let dimension = anchorInfo.axis === 'x' ? 'width' : 'height';
        let contentSizeDelta = contentSize[dimension] - previousContentSize[dimension];
        let isFirstAnchoredLayout = !this.hasSnappedToEdge;
        this.hasSnappedToEdge = true;
        // Only modify scroll when content actually changed (or this is the first layout, which always snaps)
        if (!(isFirstAnchoredLayout || contentSizeDelta !== 0 || itemSizeChanged)) return null;
        let wasNearAnchorEdge = isFirstAnchoredLayout || wasSettlingLastPass && wasNearAnchorEdgeLastPass || isNearEdge(previousVisibleRect, previousContentSize, anchorInfo.edge, anchorInfo.axis, anchorInfo.threshold);
        // A first-ever layout always snaps to the edge, even if the raw distance check says
        // otherwise. Save that real decision here so later passes in this cascade reuse it.
        if (!wasSettlingLastPass) this.wasNearAnchorEdge = wasNearAnchorEdge;
        // Skip restoring to the captured anchor while still resizing because items above it are also still growing,
        // and following it would fall short of the edge.
        let effectiveAnchor = isFirstAnchoredLayout || wasSettlingLastPass && wasNearAnchorEdgeLastPass ? null : anchor;
        return resolveScrollAdjustment(anchorInfo.edge, anchorInfo.axis, effectiveAnchor, wasNearAnchorEdge, isScrolling, itemSizeChanged, contentSizeDelta, getLayoutInfo, previousVisibleRect, contentSize);
    }
}

},{"./Rect":"9sh2q","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"brfpZ":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "ScrollView", ()=>ScrollViewForwardRef);
parcelHelpers.export(exports, "useScrollView", ()=>useScrollView);
var _jsxRuntime = require("preact/jsx-runtime");
var _domHelpers = require("../utils/domHelpers");
var _reactDom = require("react-dom");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _utils = require("./utils");
var _useVirtualizerState = require("react-stately/useVirtualizerState");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useEffectEvent = require("../utils/useEffectEvent");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _i18Nprovider = require("../i18n/I18nProvider");
var _useObjectRef = require("../utils/useObjectRef");
var _useResizeObserver = require("../utils/useResizeObserver");
function ScrollView(props, ref) {
    ref = (0, _useObjectRef.useObjectRef)(ref);
    let { scrollViewProps, contentProps } = useScrollView(props, ref);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        role: "presentation",
        ...scrollViewProps,
        ref: ref,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
            ...contentProps,
            children: props.children
        })
    });
}
const ScrollViewForwardRef = /*#__PURE__*/ (0, _reactDefault.default).forwardRef(ScrollView);
function useScrollView(props, ref) {
    let { contentSize, onVisibleRectChange, onSizeChange, innerStyle, onScrollStart, onScrollEnd, scrollDirection = 'both', onScroll: onScrollProp, allowsWindowScrolling, ...otherProps } = props;
    // oxlint-disable-next-line react/react-compiler
    let state = (0, _react.useRef)({
        // Internal scroll position of the scroll view.
        scrollPosition: new (0, _useVirtualizerState.Point)(),
        // Size of the scroll view.
        size: new (0, _useVirtualizerState.Size)(),
        // Offset of the scroll view relative to the window viewport.
        viewportOffset: new (0, _useVirtualizerState.Point)(),
        // Size of the window viewport.
        viewportSize: new (0, _useVirtualizerState.Size)(),
        scrollEndTime: 0,
        scrollTimeout: null,
        isScrolling: false,
        lastVisibleRect: new (0, _useVirtualizerState.Rect)()
    }).current;
    let { direction } = (0, _i18Nprovider.useLocale)();
    let updateVisibleRect = (0, _react.useCallback)(()=>{
        // Intersect the window viewport with the scroll view itself to find the actual visible rectangle.
        // This allows virtualized components to have unbounded height but still virtualize when scrolled with the page.
        // While there may be other scrollable elements between the <body> and the scroll view, we do not take
        // their sizes into account for performance reasons. Their scroll positions are accounted for in viewportOffset
        // though (due to getBoundingClientRect). This may result in more rows than absolutely necessary being rendered,
        // but no more than the entire height of the viewport which is good enough for virtualization use cases.
        let visibleRect = allowsWindowScrolling ? new (0, _useVirtualizerState.Rect)(state.viewportOffset.x + state.scrollPosition.x, state.viewportOffset.y + state.scrollPosition.y, Math.max(0, Math.min(state.size.width - state.viewportOffset.x, state.viewportSize.width)), Math.max(0, Math.min(state.size.height - state.viewportOffset.y, state.viewportSize.height))) : new (0, _useVirtualizerState.Rect)(state.scrollPosition.x, state.scrollPosition.y, state.size.width, state.size.height);
        // Don't emit updates if the visible area is zero and the last emitted area was also zero.
        if (visibleRect.area > 0 || state.lastVisibleRect.area > 0) {
            onVisibleRectChange(visibleRect);
            state.lastVisibleRect = visibleRect;
        }
    }, [
        state,
        allowsWindowScrolling,
        onVisibleRectChange
    ]);
    let [isScrolling, setScrolling] = (0, _react.useState)(false);
    let onScroll = (0, _react.useCallback)((e)=>{
        let target = (0, _domfunctions.getEventTarget)(e);
        if (!(0, _domfunctions.nodeContains)(target, ref.current)) return;
        if (onScrollProp && target === ref.current) onScrollProp(e);
        if (target !== ref.current) {
            // An ancestor element or the window was scrolled. Update the position of the scroll view relative to the viewport.
            let boundingRect = ref.current.getBoundingClientRect();
            let x = boundingRect.x < 0 ? -boundingRect.x : 0;
            let y = boundingRect.y < 0 ? -boundingRect.y : 0;
            if (x === state.viewportOffset.x && y === state.viewportOffset.y) return;
            state.viewportOffset = new (0, _useVirtualizerState.Point)(x, y);
        } else {
            // The scroll view itself was scrolled. Update the local scroll position.
            // Prevent rubber band scrolling from shaking when scrolling out of bounds
            let scrollTop = target.scrollTop;
            let scrollLeft = (0, _utils.getScrollLeft)(target, direction);
            state.scrollPosition = new (0, _useVirtualizerState.Point)(Math.max(0, Math.min(scrollLeft, contentSize.width - state.size.width)), Math.max(0, Math.min(scrollTop, contentSize.height - state.size.height)));
        }
        (0, _reactDom.flushSync)(()=>{
            updateVisibleRect();
            if (!state.isScrolling) {
                state.isScrolling = true;
                setScrolling(true);
                // Pause typekit MutationObserver during scrolling.
                window.dispatchEvent(new Event('tk.disconnect-observer'));
                if (onScrollStart) onScrollStart();
            }
            // So we don't constantly call clearTimeout and setTimeout,
            // keep track of the current timeout time and only reschedule
            // the timer when it is getting close.
            let now = Date.now();
            if (state.scrollEndTime <= now + 50) {
                state.scrollEndTime = now + 300;
                if (state.scrollTimeout != null) clearTimeout(state.scrollTimeout);
                state.scrollTimeout = setTimeout(()=>{
                    state.isScrolling = false;
                    setScrolling(false);
                    state.scrollTimeout = null;
                    window.dispatchEvent(new Event('tk.connect-observer'));
                    if (onScrollEnd) onScrollEnd();
                }, 300);
            }
        });
    }, [
        onScrollProp,
        ref,
        direction,
        state,
        contentSize,
        updateVisibleRect,
        onScrollStart,
        onScrollEnd
    ]);
    // Attach a document-level capturing scroll listener so we can account for scrollable ancestors.
    (0, _react.useEffect)(()=>{
        return (0, _domHelpers.addEvent)((0, _domfunctions.getPropagationTargets)(ref.current, (0, _domHelpers.getOwnerDocument)(ref.current)), 'scroll', onScroll, true);
    }, [
        onScroll,
        ref
    ]);
    (0, _react.useEffect)(()=>{
        return ()=>{
            if (state.scrollTimeout != null) clearTimeout(state.scrollTimeout);
            if (state.isScrolling) window.dispatchEvent(new Event('tk.connect-observer'));
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let isUpdatingSize = (0, _react.useRef)(false);
    let updateSize = (0, _react.useCallback)((flush)=>{
        let dom = ref.current;
        if (!dom || isUpdatingSize.current) return;
        // Prevent reentrancy when resize observer fires, triggers re-layout that results in
        // content size update, causing below layout effect to fire. This avoids infinite loops.
        isUpdatingSize.current = true;
        let isTestEnv = false;
        let isClientWidthMocked = Object.getOwnPropertyNames(window.HTMLElement.prototype).includes('clientWidth');
        let isClientHeightMocked = Object.getOwnPropertyNames(window.HTMLElement.prototype).includes('clientHeight');
        let clientWidth = dom.clientWidth;
        let clientHeight = dom.clientHeight;
        let w = isTestEnv && !isClientWidthMocked ? Infinity : clientWidth;
        let h = isTestEnv && !isClientHeightMocked ? Infinity : clientHeight;
        // Update the window viewport size.
        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;
        let viewportSizeChanged = state.viewportSize.width !== viewportWidth || state.viewportSize.height !== viewportHeight;
        if (viewportSizeChanged) state.viewportSize = new (0, _useVirtualizerState.Size)(viewportWidth, viewportHeight);
        if (state.size.width !== w || state.size.height !== h || viewportSizeChanged) {
            state.size = new (0, _useVirtualizerState.Size)(w, h);
            flush(()=>{
                updateVisibleRect();
                onSizeChange?.(state.size);
            });
            // If the clientWidth or clientHeight changed, scrollbars appeared or disappeared as
            // a result of the layout update. In this case, re-layout again to account for the
            // adjusted space. In very specific cases this might result in the scrollbars disappearing
            // again, resulting in extra padding. We stop after a maximum of two layout passes to avoid
            // an infinite loop. This matches how browsers behavior with native CSS grid layout.
            if (!isTestEnv && clientWidth !== dom.clientWidth || clientHeight !== dom.clientHeight) {
                state.size = new (0, _useVirtualizerState.Size)(dom.clientWidth, dom.clientHeight);
                flush(()=>{
                    updateVisibleRect();
                    onSizeChange?.(state.size);
                });
            }
        }
        isUpdatingSize.current = false;
    }, [
        ref,
        state,
        updateVisibleRect,
        onSizeChange
    ]);
    let updateSizeEvent = (0, _useEffectEvent.useEffectEvent)(updateSize);
    // Track the size of the entire window viewport, which is used to bound the size of the virtualizer's visible rectangle.
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        // Initialize viewportRect before updating size for the first time.
        state.viewportSize = new (0, _useVirtualizerState.Size)(window.innerWidth, window.innerHeight);
        let onWindowResize = ()=>{
            updateSizeEvent((0, _reactDom.flushSync));
        };
        window.addEventListener('resize', onWindowResize);
        return ()=>window.removeEventListener('resize', onWindowResize);
    }, [
        state
    ]);
    // Update visible rect when the content size changes, in case scrollbars need to appear or disappear.
    let lastContentSize = (0, _react.useRef)(null);
    let [update, setUpdate] = (0, _react.useState)({});
    // We only contain a call to setState in here for testing environments.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (!isUpdatingSize.current && (lastContentSize.current == null || !contentSize.equals(lastContentSize.current))) {
            // React doesn't allow flushSync inside effects, so queue a microtask.
            // We also need to wait until all refs are set (e.g. when passing a ref down from a parent).
            // If we are in an `act` environment, update immediately without a microtask so you don't need
            // to mock timers in tests. In this case, the update is synchronous already.
            // IS_REACT_ACT_ENVIRONMENT is used by React 18. Previous versions checked for the `jest` global.
            // https://github.com/reactwg/react-18/discussions/102
            if (// @ts-ignore
            typeof IS_REACT_ACT_ENVIRONMENT === 'boolean' ? IS_REACT_ACT_ENVIRONMENT : typeof jest !== 'undefined') {
                // This is so we update size in a separate render but within the same act. Needs to be setState instead of refs
                // due to strict mode.
                setUpdate({});
                lastContentSize.current = contentSize;
                return;
            } else queueMicrotask(()=>updateSizeEvent((0, _reactDom.flushSync)));
        }
        lastContentSize.current = contentSize;
    });
    // Will only run in tests, needs to be in separate effect so it is properly run in the next render in strict mode.
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        updateSizeEvent((fn)=>fn());
    }, [
        update
    ]);
    let onResize = (0, _react.useCallback)(()=>{
        updateSize((0, _reactDom.flushSync));
    }, [
        updateSize
    ]);
    // Watch border-box instead of of content-box so that we don't go into
    // an infinite loop when scrollbars appear or disappear.
    (0, _useResizeObserver.useResizeObserver)({
        ref,
        box: 'border-box',
        onResize
    });
    let style = {
        // Reset padding so that relative positioning works correctly. Padding will be done in JS layout.
        padding: 0,
        ...otherProps.style
    };
    if (scrollDirection === 'horizontal') {
        style.overflowX = 'auto';
        style.overflowY = 'hidden';
    // oxlint-disable-next-line react/react-compiler
    } else if (scrollDirection === 'vertical' || contentSize.width === state.size.width) {
        // Set overflow-x: hidden if content size is equal to the width of the scroll view.
        // This prevents horizontal scrollbars from flickering during resizing due to resize observer
        // firing slower than the frame rate, which may cause an infinite re-render loop.
        style.overflowY = 'auto';
        style.overflowX = 'hidden';
    } else style.overflow = 'auto';
    innerStyle = {
        width: Number.isFinite(contentSize.width) ? contentSize.width : undefined,
        height: Number.isFinite(contentSize.height) ? contentSize.height : undefined,
        pointerEvents: isScrolling ? 'none' : 'auto',
        position: 'relative',
        ...innerStyle
    };
    return {
        isScrolling,
        scrollViewProps: {
            ...otherProps,
            style
        },
        contentProps: {
            role: 'presentation',
            style: innerStyle
        }
    };
}

},{"preact/jsx-runtime":"b2Fbn","../utils/domHelpers":"cYkFa","react-dom":"gOP0N","../utils/shadowdom/DOMFunctions":"8kfpz","./utils":"3vfDw","react-stately/useVirtualizerState":[["Point","azpXc"],["Rect","9sh2q"],["Size","aiymI"]],"react":"gOP0N","../utils/useEffectEvent":"grBNM","../utils/useLayoutEffect":"h7M6K","../i18n/I18nProvider":"czGuc","../utils/useObjectRef":"ec0NJ","../utils/useResizeObserver":"58iim","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3vfDw":[function(require,module,exports,__globalThis) {
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
// Original licensing for the following methods can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/bvaughn/react-window/blob/master/src/createGridComponent.js
// According to the spec, scrollLeft should be negative for RTL aligned elements.
// Chrome does not seem to adhere; its scrollLeft values are positive (measured relative to the left).
// Safari's elastic bounce makes detecting this even more complicated wrt potential false positives.
// The safest way to check this is to intentionally set a negative offset,
// and then verify that the subsequent "scroll" event matches the negative offset.
// If it does not match, then we can assume a non-standard RTL scroll implementation.
parcelHelpers.export(exports, "getRTLOffsetType", ()=>getRTLOffsetType);
parcelHelpers.export(exports, "getScrollLeft", ()=>getScrollLeft);
parcelHelpers.export(exports, "setScrollLeft", ()=>setScrollLeft);
let cachedRTLResult = null;
function getRTLOffsetType(recalculate = false) {
    if (cachedRTLResult === null || recalculate) {
        const outerDiv = document.createElement('div');
        const outerStyle = outerDiv.style;
        outerStyle.width = '50px';
        outerStyle.height = '50px';
        outerStyle.overflow = 'scroll';
        outerStyle.direction = 'rtl';
        const innerDiv = document.createElement('div');
        const innerStyle = innerDiv.style;
        innerStyle.width = '100px';
        innerStyle.height = '100px';
        outerDiv.appendChild(innerDiv);
        document.body.appendChild(outerDiv);
        if (outerDiv.scrollLeft > 0) cachedRTLResult = 'positive-descending';
        else {
            outerDiv.scrollLeft = 1;
            if (outerDiv.scrollLeft === 0) cachedRTLResult = 'negative';
            else cachedRTLResult = 'positive-ascending';
        }
        document.body.removeChild(outerDiv);
        return cachedRTLResult;
    }
    return cachedRTLResult;
}
function getScrollLeft(node, direction) {
    let { scrollLeft } = node;
    // scrollLeft in rtl locales differs across browsers, so normalize.
    // See comment by getRTLOffsetType below for details.
    if (direction === 'rtl') {
        let { scrollWidth, clientWidth } = node;
        switch(getRTLOffsetType()){
            case 'negative':
                scrollLeft = -scrollLeft;
                break;
            case 'positive-descending':
                scrollLeft = scrollWidth - clientWidth - scrollLeft;
                break;
        }
    }
    return scrollLeft;
}
function setScrollLeft(node, direction, scrollLeft) {
    if (direction === 'rtl') switch(getRTLOffsetType()){
        case 'negative':
            scrollLeft = -scrollLeft;
            break;
        case 'positive-ascending':
            break;
        default:
            {
                const { clientWidth, scrollWidth } = node;
                scrollLeft = scrollWidth - clientWidth - scrollLeft;
                break;
            }
    }
    node.scrollLeft = scrollLeft;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hHplS":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "VirtualizerItem", ()=>VirtualizerItem);
parcelHelpers.export(exports, "layoutInfoToStyle", ()=>layoutInfoToStyle);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _i18Nprovider = require("../i18n/I18nProvider");
var _useVirtualizerItem = require("./useVirtualizerItem");
function VirtualizerItem(props) {
    let { style, className, layoutInfo, virtualizer, parent, children, shouldObserveItemSize } = props;
    let { direction } = (0, _i18Nprovider.useLocale)();
    let ref = (0, _react.useRef)(null);
    (0, _useVirtualizerItem.useVirtualizerItem)({
        layoutInfo,
        virtualizer,
        ref,
        shouldObserveItemSize
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        role: "presentation",
        ref: ref,
        className: className,
        style: {
            ...layoutInfoToStyle(layoutInfo, direction, parent),
            ...style
        },
        children: children
    });
}
let cache = new WeakMap();
function layoutInfoToStyle(layoutInfo, dir, parent) {
    let xProperty = dir === 'rtl' ? 'right' : 'left';
    let cached = cache.get(layoutInfo);
    if (cached && cached[xProperty] != null) {
        if (!parent) return cached;
        // Invalidate if the parent position changed.
        let top = layoutInfo.rect.y - parent.rect.y;
        let x = layoutInfo.rect.x - parent.rect.x;
        if (cached.top === top && cached[xProperty] === x) return cached;
    }
    let rectStyles = {
        // TODO: For layoutInfos that are sticky that have parents with overflow visible, their "top" will be relative to the to the nearest scrolling container
        // which WON'T be the parent since the parent has overflow visible. This means we shouldn't offset the height by the parent's position
        // Not 100% about this change here since it is quite ambigious what the scrolling container maybe and how its top is positioned with respect to the
        // calculated layoutInfo.y here
        top: layoutInfo.rect.y - (parent && !(parent.allowOverflow && layoutInfo.isSticky) ? parent.rect.y : 0),
        [xProperty]: layoutInfo.rect.x - (parent && !(parent.allowOverflow && layoutInfo.isSticky) ? parent.rect.x : 0),
        width: layoutInfo.rect.width,
        height: layoutInfo.rect.height
    };
    // Get rid of any non finite values since they aren't valid css values
    Object.entries(rectStyles).forEach(([key, value])=>{
        if (!Number.isFinite(value)) rectStyles[key] = undefined;
    });
    let style = {
        position: layoutInfo.isSticky ? 'sticky' : 'absolute',
        // Sticky elements are positioned in normal document flow. Display inline-block so that they don't push other sticky columns onto the following rows.
        display: layoutInfo.isSticky ? 'inline-block' : undefined,
        overflow: layoutInfo.allowOverflow ? 'visible' : 'hidden',
        opacity: layoutInfo.opacity,
        zIndex: layoutInfo.zIndex,
        transform: layoutInfo.transform ?? undefined,
        contain: 'size layout style',
        ...rectStyles
    };
    cache.set(layoutInfo, style);
    return style;
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../i18n/I18nProvider":"czGuc","./useVirtualizerItem":"3JcQR","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3JcQR":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useVirtualizerItem", ()=>useVirtualizerItem);
var _isElementVisible = require("../utils/isElementVisible");
var _useVirtualizerState = require("react-stately/useVirtualizerState");
var _react = require("react");
var _useEffectEvent = require("../utils/useEffectEvent");
var _useLayoutEffect = require("../utils/useLayoutEffect");
function useVirtualizerItem(options) {
    let { layoutInfo, virtualizer, ref, shouldObserveItemSize } = options;
    let key = layoutInfo?.key;
    let updateSize = (0, _react.useCallback)(()=>{
        if (key != null && ref.current) {
            // if the virtualized item is not visible (aka display none on virtualized collection),
            // we want to avoid reporting size 0 otherwise we get into a state where the virtualizer renders 0 items
            // when it is hidden and thus won't remeasure when it is is unhidden
            if (!(0, _isElementVisible.isElementVisible)(ref.current)) return;
            let size = getSize(ref.current);
            virtualizer.updateItemSize(key, size);
        }
    }, [
        virtualizer,
        key,
        ref
    ]);
    let updateSizeEvent = (0, _useEffectEvent.useEffectEvent)(updateSize);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (layoutInfo?.estimatedSize) updateSizeEvent();
    });
    // TODO: Consider using a MutationObserver in addition to ResizeObserver to detect
    // when inner DOM structure changes cause an item's height to change.
    // The current ResizeObserver only observes direct children,
    // so mutations deeper in the tree won't trigger a remeasure, leading to stale cached heights and overlapping items.
    // useResizeObserver observes one element via ref, but the wrapper height is fixed by layout
    // and won't change when content grows. Observe direct children instead, then remeasure the
    // wrapper in updateSize.
    (0, _react.useEffect)(()=>{
        if (!shouldObserveItemSize) return;
        let el = ref.current;
        if (!el || typeof ResizeObserver === 'undefined') return;
        let resizeObserver = new ResizeObserver((entries)=>{
            if (!entries.length) return;
            updateSizeEvent();
        });
        for (let child of el.children)resizeObserver.observe(child);
        return ()=>{
            resizeObserver.disconnect();
        };
    }, [
        shouldObserveItemSize,
        ref,
        key
    ]);
    return {
        updateSize
    };
}
function getSize(node) {
    // Reset height before measuring so we get the intrinsic size
    let height = node.style.height;
    node.style.height = '';
    let size = new (0, _useVirtualizerState.Size)(node.scrollWidth, node.scrollHeight);
    node.style.height = height;
    return size;
}

},{"../utils/isElementVisible":"42Fr7","react-stately/useVirtualizerState":"aiymI","react":"gOP0N","../utils/useEffectEvent":"grBNM","../utils/useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

