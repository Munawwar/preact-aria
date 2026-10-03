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
})({"3ty3M":[function(require,module,exports,__globalThis) {
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
 * ListLayout is a virtualizer Layout implementation
 * that arranges its items in a stack along its applied orientation.
 * It supports both fixed and variable size items.
 */ parcelHelpers.export(exports, "ListLayout", ()=>ListLayout);
var _getChildNodes = require("../collections/getChildNodes");
var _layout = require("../virtualizer/Layout");
var _layoutInfo = require("../virtualizer/LayoutInfo");
var _rect = require("../virtualizer/Rect");
var _size = require("../virtualizer/Size");
const DEFAULT_HEIGHT = 48;
class ListLayout extends (0, _layout.Layout) {
    rowSize;
    orientation;
    estimatedRowSize;
    headingSize;
    estimatedHeadingSize;
    loaderSize;
    dropIndicatorThickness;
    gap;
    padding;
    layoutNodes;
    contentSize;
    lastCollection;
    rootNodes;
    invalidateEverything;
    /** The rectangle containing currently valid layout infos. */ validRect;
    /** The rectangle of requested layout infos so far. */ requestedRect;
    /**
   * Creates a new ListLayout with options. See the list of properties below for a description
   * of the options that can be provided.
   */ constructor(options = {}){
        super();
        this.rowSize = options?.rowSize ?? options?.rowHeight ?? null;
        this.orientation = options.orientation ?? 'vertical';
        this.estimatedRowSize = options?.estimatedRowSize ?? options?.estimatedRowHeight ?? null;
        this.headingSize = options?.headingSize ?? options?.headingHeight ?? null;
        this.estimatedHeadingSize = options?.estimatedHeadingSize ?? options?.estimatedHeadingHeight ?? null;
        this.loaderSize = options?.loaderSize ?? options?.loaderHeight ?? null;
        this.dropIndicatorThickness = options.dropIndicatorThickness || 2;
        this.gap = options.gap || 0;
        this.padding = options.padding || 0;
        this.layoutNodes = new Map();
        this.rootNodes = [];
        this.lastCollection = null;
        this.invalidateEverything = false;
        this.validRect = new (0, _rect.Rect)();
        this.requestedRect = new (0, _rect.Rect)();
        this.contentSize = new (0, _size.Size)();
    }
    // Backward compatibility for subclassing.
    get collection() {
        return this.virtualizer.collection;
    }
    /** @deprecated Use `rowSize` instead. */ get rowHeight() {
        return this.rowSize;
    }
    /** @deprecated Use `estimatedRowSize` instead. */ get estimatedRowHeight() {
        return this.estimatedRowSize;
    }
    /** @deprecated Use `headingSize` instead. */ get headingHeight() {
        return this.headingSize;
    }
    /** @deprecated Use `estimatedHeadingSize` instead. */ get estimatedHeadingHeight() {
        return this.estimatedHeadingSize;
    }
    /** @deprecated Use `loaderSize` instead. */ get loaderHeight() {
        return this.loaderSize;
    }
    getLayoutInfo(key) {
        this.ensureLayoutInfo(key);
        return this.layoutNodes.get(key)?.layoutInfo || null;
    }
    getVisibleLayoutInfos(rect) {
        let offsetProperty = this.orientation === 'horizontal' ? 'x' : 'y';
        let heightProperty = this.orientation === 'horizontal' ? 'width' : 'height';
        // Adjust rect to keep number of visible rows consistent.
        // (only if height > 1 or width > 1 for getDropTargetFromPoint)
        if (rect[heightProperty] > 1) {
            let rowHeight = (this.rowSize ?? this.estimatedRowSize ?? DEFAULT_HEIGHT) + this.gap;
            // Clone only before mutating
            rect = rect.copy();
            let offset = Math.floor(rect[offsetProperty] / rowHeight) * rowHeight;
            let height = rect[heightProperty] + rect[offsetProperty] - offset;
            rect[offsetProperty] = offset;
            rect[heightProperty] = Math.ceil(height / rowHeight) * rowHeight;
        }
        // If layout hasn't yet been done for the requested rect, union the
        // new rect with the existing valid rect, and recompute.
        this.layoutIfNeeded(rect);
        let res = [];
        let addNodes = (nodes)=>{
            for (let node of nodes)if (this.isVisible(node, rect)) {
                res.push(node.layoutInfo);
                if (node.children) addNodes(node.children);
            }
        };
        addNodes(this.rootNodes);
        return res;
    }
    layoutIfNeeded(rect) {
        if (!this.lastCollection) return;
        if (!this.requestedRect.containsRect(rect)) {
            this.requestedRect = this.requestedRect.union(rect);
            this.rootNodes = this.buildCollection();
        }
        // Ensure all of the persisted keys are available.
        for (let key of this.virtualizer.persistedKeys){
            if (this.ensureLayoutInfo(key)) return;
        }
    }
    ensureLayoutInfo(key) {
        // If the layout info wasn't found, it might be outside the bounds of the area that we've
        // computed layout for so far. This can happen when accessing a random key, e.g pressing Home/End.
        // Compute the full layout and try again.
        if (!this.layoutNodes.has(key) && this.requestedRect.area < this.contentSize.area && this.lastCollection) {
            this.requestedRect = new (0, _rect.Rect)(0, 0, Infinity, Infinity);
            this.rootNodes = this.buildCollection();
            this.requestedRect = new (0, _rect.Rect)(0, 0, this.contentSize.width, this.contentSize.height);
            return true;
        }
        return false;
    }
    isVisible(node, rect) {
        return node.layoutInfo.rect.intersects(rect) || node.layoutInfo.isSticky || node.layoutInfo.type === 'header' || node.layoutInfo.type === 'loader' || this.virtualizer.isPersistedKey(node.layoutInfo.key);
    }
    shouldInvalidateEverything(invalidationContext) {
        let options = invalidationContext.layoutOptions;
        return invalidationContext.sizeChanged || this.rowSize !== (options?.rowSize ?? options?.rowHeight ?? this.rowSize) || this.orientation !== (options?.orientation ?? this.orientation) || this.headingSize !== (options?.headingSize ?? options?.headingHeight ?? this.headingSize) || this.loaderSize !== (options?.loaderSize ?? options?.loaderHeight ?? this.loaderSize) || this.gap !== (options?.gap ?? this.gap) || this.padding !== (options?.padding ?? this.padding);
    }
    shouldInvalidateLayoutOptions(newOptions, oldOptions) {
        return (newOptions?.rowSize ?? newOptions?.rowHeight) !== (oldOptions?.rowSize ?? oldOptions?.rowHeight) || newOptions.orientation !== oldOptions.orientation || (newOptions?.estimatedRowSize ?? newOptions?.estimatedRowHeight) !== (oldOptions?.estimatedRowSize ?? oldOptions?.estimatedRowHeight) || (newOptions?.headingSize ?? newOptions?.headingHeight) !== (oldOptions?.headingSize ?? oldOptions?.headingHeight) || (newOptions?.estimatedHeadingSize ?? newOptions?.estimatedHeadingHeight) !== (oldOptions?.estimatedHeadingSize ?? oldOptions?.estimatedHeadingHeight) || (newOptions?.loaderSize ?? newOptions?.loaderHeight) !== (oldOptions?.loaderSize ?? oldOptions?.loaderHeight) || newOptions.dropIndicatorThickness !== oldOptions.dropIndicatorThickness || newOptions.gap !== oldOptions.gap || newOptions.padding !== oldOptions.padding;
    }
    update(invalidationContext) {
        let collection = this.virtualizer.collection;
        // Reset valid rect if we will have to invalidate everything.
        // Otherwise we can reuse cached layout infos outside the current visible rect.
        this.invalidateEverything = this.shouldInvalidateEverything(invalidationContext);
        if (this.invalidateEverything) {
            this.requestedRect = this.virtualizer.visibleRect.copy();
            this.layoutNodes.clear();
        }
        let options = invalidationContext.layoutOptions;
        this.rowSize = options?.rowSize ?? options?.rowHeight ?? this.rowSize;
        this.orientation = options?.orientation ?? this.orientation;
        this.estimatedRowSize = options?.estimatedRowSize ?? options?.estimatedRowHeight ?? this.estimatedRowSize;
        this.headingSize = options?.headingSize ?? options?.headingHeight ?? this.headingSize;
        this.estimatedHeadingSize = options?.estimatedHeadingSize ?? options?.estimatedHeadingHeight ?? this.estimatedHeadingSize;
        this.loaderSize = options?.loaderSize ?? options?.loaderHeight ?? this.loaderSize;
        this.dropIndicatorThickness = options?.dropIndicatorThickness ?? this.dropIndicatorThickness;
        this.gap = options?.gap ?? this.gap;
        this.padding = options?.padding ?? this.padding;
        this.rootNodes = this.buildCollection();
        // Remove deleted layout nodes
        if (this.lastCollection && collection !== this.lastCollection) {
            for (let key of this.lastCollection.getKeys())if (!collection.getItem(key)) {
                let layoutNode = this.layoutNodes.get(key);
                if (layoutNode) this.layoutNodes.delete(key);
            }
        }
        this.lastCollection = collection;
        this.invalidateEverything = false;
        this.validRect = this.requestedRect.copy();
    }
    buildCollection(offset = this.padding) {
        let collection = this.virtualizer.collection;
        let offsetProperty = this.orientation === 'horizontal' ? 'x' : 'y';
        let maxOffsetProperty = this.orientation === 'horizontal' ? 'maxX' : 'maxY';
        // filter out content nodes since we don't want them to affect the height
        // Tree specific for now, if we add content nodes to other collection items, we might need to reconsider this
        let collectionNodes = toArray(collection, (node)=>node.type !== 'content');
        let loaderNodes = collectionNodes.filter((node)=>node.type === 'loader');
        let nodes = [];
        let isEmptyOrLoading = collection?.size === 0;
        if (isEmptyOrLoading) offset = 0;
        for (let node of collectionNodes){
            let rowHeight = (this.rowSize ?? this.estimatedRowSize ?? DEFAULT_HEIGHT) + this.gap;
            // Skip rows before the valid rectangle unless they are already cached.
            if (node.type === 'item' && offset + rowHeight < this.requestedRect[offsetProperty] && !this.isValid(node, offset)) {
                offset += rowHeight;
                continue;
            }
            let layoutNode = this.orientation === 'horizontal' ? this.buildChild(node, offset, this.padding, null) : this.buildChild(node, this.padding, offset, null);
            offset = layoutNode.layoutInfo.rect[maxOffsetProperty] + this.gap;
            nodes.push(layoutNode);
            if (node.type === 'loader') {
                let index = loaderNodes.indexOf(node);
                loaderNodes.splice(index, 1);
            }
            // Build each loader that exists in the collection that is outside the visible rect so that they are persisted
            // at the proper estimated location. If the node.type is "section" then we don't do this shortcut since we have to
            // build the sections to see how tall they are.
            if ((node.type === 'item' || node.type === 'loader') && offset > this.requestedRect[maxOffsetProperty]) {
                let lastProcessedIndex = collectionNodes.indexOf(node);
                for (let loaderNode of loaderNodes){
                    let loaderNodeIndex = collectionNodes.indexOf(loaderNode);
                    // Subtract by an additional 1 since we've already added the current item's height to y
                    offset += (loaderNodeIndex - lastProcessedIndex - 1) * rowHeight;
                    let loader = this.orientation === 'horizontal' ? this.buildChild(loaderNode, offset, this.padding, null) : this.buildChild(loaderNode, this.padding, offset, null);
                    nodes.push(loader);
                    offset = loader.layoutInfo.rect[maxOffsetProperty];
                    lastProcessedIndex = loaderNodeIndex;
                }
                // Account for the rest of the items after the last loader spinner, subtract by 1 since we've processed the current node's height already
                offset += (collectionNodes.length - lastProcessedIndex - 1) * rowHeight;
                break;
            }
        }
        offset = Math.max(offset - this.gap, 0);
        offset += isEmptyOrLoading ? 0 : this.padding;
        this.contentSize = this.orientation === 'horizontal' ? new (0, _size.Size)(offset, this.virtualizer.size.height) : new (0, _size.Size)(this.virtualizer.size.width, offset);
        return nodes;
    }
    isValid(node, offset) {
        let cached = this.layoutNodes.get(node.key);
        let offsetProperty = this.orientation === 'horizontal' ? 'x' : 'y';
        return !this.invalidateEverything && !!cached && cached.node === node && offset === cached.layoutInfo.rect[offsetProperty] && cached.layoutInfo.rect.intersects(this.validRect) && cached.validRect.containsRect(cached.layoutInfo.rect.intersection(this.requestedRect));
    }
    buildChild(node, x, y, parentKey) {
        if (this.isValid(node, this.orientation === 'horizontal' ? x : y)) return this.layoutNodes.get(node.key);
        let layoutNode = this.buildNode(node, x, y);
        layoutNode.layoutInfo.parentKey = parentKey ?? null;
        layoutNode.layoutInfo.allowOverflow = true;
        this.layoutNodes.set(node.key, layoutNode);
        return layoutNode;
    }
    buildNode(node, x, y) {
        switch(node.type){
            case 'section':
                return this.buildSection(node, x, y);
            case 'item':
                return this.buildItem(node, x, y);
            case 'header':
                return this.buildSectionHeader(node, x, y);
            case 'loader':
                return this.buildLoader(node, x, y);
            case 'separator':
                return this.buildItem(node, x, y);
            // uses buildSection instead of buildItem cuz it has a child node (the trigger)
            // that need to be processed
            case 'submenutrigger':
                return this.buildSection(node, x, y);
            default:
                throw new Error('Unsupported node type: ' + node.type);
        }
    }
    buildLoader(node, x, y) {
        let rect = new (0, _rect.Rect)(x, y, this.padding, 0);
        let layoutInfo = new (0, _layoutInfo.LayoutInfo)(node.type, node.key, rect);
        // Note that if the user provides isLoading to their sentinel during a case where they only want to render the emptyState, this will reserve
        // room for the loader alongside rendering the emptyState
        if (this.orientation === 'horizontal') {
            rect.height = this.virtualizer.contentSize.height - this.padding - y;
            rect.width = node.props.isLoading ? this.loaderSize ?? this.rowSize ?? this.estimatedRowSize ?? DEFAULT_HEIGHT : 0;
        } else {
            rect.width = this.virtualizer.contentSize.width - this.padding - x;
            rect.height = node.props.isLoading ? this.loaderSize ?? this.rowSize ?? this.estimatedRowSize ?? DEFAULT_HEIGHT : 0;
        }
        return {
            layoutInfo,
            validRect: rect.intersection(this.requestedRect)
        };
    }
    buildSection(node, x, y) {
        let collection = this.virtualizer.collection;
        let width = this.virtualizer.size.width - this.padding - x;
        let height = this.virtualizer.size.height - this.padding - y;
        let rect = this.orientation === 'horizontal' ? new (0, _rect.Rect)(x, y, 0, height) : new (0, _rect.Rect)(x, y, width, 0);
        let layoutInfo = new (0, _layoutInfo.LayoutInfo)(node.type, node.key, rect);
        let offset = this.orientation === 'horizontal' ? x : y;
        let offsetProperty = this.orientation === 'horizontal' ? 'x' : 'y';
        let maxOffsetProperty = this.orientation === 'horizontal' ? 'maxX' : 'maxY';
        let heightProperty = this.orientation === 'horizontal' ? 'width' : 'height';
        let skipped = 0;
        let children = [];
        for (let child of (0, _getChildNodes.getChildNodes)(node, collection)){
            // skip if it is a content node, Tree specific for now, if we add content nodes to other collection items, we might need to reconsider this
            if (child.type === 'content') continue;
            let rowHeight = (this.rowSize ?? this.estimatedRowSize ?? DEFAULT_HEIGHT) + this.gap;
            // Skip rows before the valid rectangle unless they are already cached.
            if (offset + rowHeight < this.requestedRect[offsetProperty] && !this.isValid(node, offset)) {
                offset += rowHeight;
                skipped++;
                continue;
            }
            let layoutNode = this.orientation === 'horizontal' ? this.buildChild(child, offset, y, layoutInfo.key) : this.buildChild(child, x, offset, layoutInfo.key);
            offset = layoutNode.layoutInfo.rect[maxOffsetProperty] + this.gap;
            children.push(layoutNode);
            if (offset > this.requestedRect[maxOffsetProperty]) {
                // Estimate the remaining height for rows that we don't need to layout right now.
                offset += ([
                    ...(0, _getChildNodes.getChildNodes)(node, collection)
                ].length - (children.length + skipped)) * rowHeight;
                break;
            }
        }
        offset -= this.gap;
        rect[heightProperty] = offset - (this.orientation === 'horizontal' ? x : y);
        return {
            layoutInfo,
            children,
            validRect: layoutInfo.rect.intersection(this.requestedRect),
            node
        };
    }
    buildSectionHeader(node, x, y) {
        let widthProperty = this.orientation === 'horizontal' ? 'height' : 'width';
        let heightProperty = this.orientation === 'horizontal' ? 'width' : 'height';
        let width = this.virtualizer.size[widthProperty] - this.padding - (this.orientation === 'horizontal' ? y : x);
        let rectHeight = this.headingSize;
        let isEstimated = false;
        // If no explicit height is available, use an estimated height.
        if (rectHeight == null) {
            // If a previous version of this layout info exists, reuse its height.
            // Mark as estimated if the size of the overall virtualizer changed,
            // or the content of the item changed.
            let previousLayoutNode = this.layoutNodes.get(node.key);
            let previousLayoutInfo = previousLayoutNode?.layoutInfo;
            if (previousLayoutInfo) {
                let curNode = this.virtualizer.collection.getItem(node.key);
                let lastNode = this.lastCollection ? this.lastCollection.getItem(node.key) : null;
                rectHeight = previousLayoutNode.layoutInfo.rect[heightProperty];
                isEstimated = width !== previousLayoutInfo.rect[widthProperty] || curNode !== lastNode || previousLayoutInfo.estimatedSize;
            } else {
                rectHeight = node.rendered ? this.estimatedHeadingSize : 0;
                isEstimated = true;
            }
        }
        if (rectHeight == null) rectHeight = DEFAULT_HEIGHT;
        let headerRect = this.orientation === 'horizontal' ? new (0, _rect.Rect)(x, y, rectHeight, width - y) : new (0, _rect.Rect)(x, y, width - x, rectHeight);
        let header = new (0, _layoutInfo.LayoutInfo)('header', node.key, headerRect);
        header.estimatedSize = isEstimated;
        return {
            layoutInfo: header,
            children: [],
            validRect: header.rect.intersection(this.requestedRect),
            node
        };
    }
    buildItem(node, x, y) {
        let widthProperty = this.orientation === 'horizontal' ? 'height' : 'width';
        let heightProperty = this.orientation === 'horizontal' ? 'width' : 'height';
        let width = this.virtualizer.size[widthProperty] - this.padding - (this.orientation === 'horizontal' ? y : x);
        let rectHeight = this.rowSize;
        let isEstimated = false;
        // If no explicit height is available, use an estimated height.
        if (rectHeight == null) {
            // If a previous version of this layout info exists, reuse its height.
            // Mark as estimated if the size of the overall virtualizer changed,
            // or the content of the item changed.
            let previousLayoutNode = this.layoutNodes.get(node.key);
            if (previousLayoutNode) {
                rectHeight = previousLayoutNode.layoutInfo.rect[heightProperty];
                isEstimated = width !== previousLayoutNode.layoutInfo.rect[widthProperty] || node !== previousLayoutNode.node || previousLayoutNode.layoutInfo.estimatedSize;
            } else {
                rectHeight = this.estimatedRowSize;
                isEstimated = true;
            }
        }
        if (rectHeight == null) rectHeight = DEFAULT_HEIGHT;
        let rect = this.orientation === 'horizontal' ? new (0, _rect.Rect)(x, y, rectHeight, width) : new (0, _rect.Rect)(x, y, width, rectHeight);
        let layoutInfo = new (0, _layoutInfo.LayoutInfo)(node.type, node.key, rect);
        layoutInfo.estimatedSize = isEstimated;
        return {
            layoutInfo,
            children: [],
            validRect: layoutInfo.rect.intersection(this.requestedRect),
            node
        };
    }
    updateItemSize(key, size) {
        let layoutNode = this.layoutNodes.get(key);
        // If no layoutInfo, item has been deleted/removed.
        if (!layoutNode) return false;
        let collection = this.virtualizer.collection;
        let layoutInfo = layoutNode.layoutInfo;
        let offsetProperty = this.orientation === 'horizontal' ? 'x' : 'y';
        let heightProperty = this.orientation === 'horizontal' ? 'width' : 'height';
        layoutInfo.estimatedSize = false;
        if (layoutInfo.rect[heightProperty] !== size[heightProperty]) {
            // Copy layout info rather than mutating so that later caches are invalidated.
            let newLayoutInfo = layoutInfo.copy();
            newLayoutInfo.rect[heightProperty] = size[heightProperty];
            layoutNode.layoutInfo = newLayoutInfo;
            // Items after this layoutInfo will need to be repositioned to account for the new height.
            // Adjust the validRect so that only items above remain valid.
            this.validRect[heightProperty] = Math.min(this.validRect[heightProperty], layoutInfo.rect[offsetProperty] - this.validRect[offsetProperty]);
            // The requestedRect also needs to be adjusted to account for the height difference.
            if (layoutNode.node?.type === 'item') this.requestedRect[heightProperty] += newLayoutInfo.rect[heightProperty] - layoutInfo.rect[heightProperty];
            // Invalidate layout for this layout node and all parents
            this.updateLayoutNode(key, layoutInfo, newLayoutInfo);
            let node = layoutInfo.parentKey != null ? collection.getItem(layoutInfo.parentKey) : null;
            while(node){
                this.updateLayoutNode(node.key, layoutInfo, newLayoutInfo);
                node = node.parentKey != null ? collection.getItem(node.parentKey) : null;
            }
            return true;
        }
        return false;
    }
    updateLayoutNode(key, oldLayoutInfo, newLayoutInfo) {
        let n = this.layoutNodes.get(key);
        if (n) {
            // Invalidate by intersecting the validRect of this node with the overall validRect.
            n.validRect = n.validRect.intersection(this.validRect);
            // Replace layout info in LayoutNode
            if (n.layoutInfo === oldLayoutInfo) n.layoutInfo = newLayoutInfo;
        }
    }
    getContentSize() {
        return this.contentSize;
    }
    getDropTargetFromPoint(x, y, isValidDropTarget) {
        x += this.virtualizer.visibleRect.x;
        y += this.virtualizer.visibleRect.y;
        // Find the closest item within on either side of the point using the gap width.
        let searchRect = new (0, _rect.Rect)(x, Math.max(0, y - this.gap), 1, Math.max(1, this.gap * 2));
        let candidates = this.getVisibleLayoutInfos(searchRect);
        let key = null;
        let minDistance = Infinity;
        for (let candidate of candidates){
            // Ignore items outside the search rect, e.g. persisted keys.
            if (!candidate.rect.intersects(searchRect)) continue;
            let yDist = Math.abs(candidate.rect.y - y);
            let maxYDist = Math.abs(candidate.rect.maxY - y);
            let dist = Math.min(yDist, maxYDist);
            if (dist < minDistance) {
                minDistance = dist;
                key = candidate.key;
            }
        }
        if (key == null || this.virtualizer.collection.size === 0) return {
            type: 'root'
        };
        let layoutInfo = this.getLayoutInfo(key);
        if (!layoutInfo) return null;
        let rect = layoutInfo.rect;
        let target = {
            type: 'item',
            key: layoutInfo.key,
            dropPosition: 'on'
        };
        // If dropping on the item isn't accepted, try the target before or after depending on the y position.
        // Otherwise, if dropping on the item is accepted, still try the before/after positions if within 10px
        // of the top or bottom of the item.
        if (!isValidDropTarget(target)) {
            if (y <= rect.y + rect.height / 2 && isValidDropTarget({
                ...target,
                dropPosition: 'before'
            })) target.dropPosition = 'before';
            else if (isValidDropTarget({
                ...target,
                dropPosition: 'after'
            })) target.dropPosition = 'after';
        } else if (y <= rect.y + 10 && isValidDropTarget({
            ...target,
            dropPosition: 'before'
        })) target.dropPosition = 'before';
        else if (y >= rect.maxY - 10 && isValidDropTarget({
            ...target,
            dropPosition: 'after'
        })) target.dropPosition = 'after';
        return target;
    }
    getDropTargetLayoutInfo(target) {
        let layoutInfo = this.getLayoutInfo(target.key);
        let rect;
        if (target.dropPosition === 'before') rect = this.orientation === 'horizontal' ? new (0, _rect.Rect)(Math.max(0, layoutInfo.rect.x - this.dropIndicatorThickness / 2), layoutInfo.rect.y, this.dropIndicatorThickness, layoutInfo.rect.height) : new (0, _rect.Rect)(layoutInfo.rect.x, Math.max(0, layoutInfo.rect.y - this.dropIndicatorThickness / 2), layoutInfo.rect.width, this.dropIndicatorThickness);
        else if (target.dropPosition === 'after') {
            // Render after last visible descendant of the drop target.
            let targetNode = this.collection.getItem(target.key);
            if (targetNode) {
                let targetLevel = targetNode.level ?? 0;
                let currentKey = this.collection.getKeyAfter(target.key);
                while(currentKey != null){
                    let node = this.collection.getItem(currentKey);
                    if (!node || node.level <= targetLevel) break;
                    layoutInfo = this.getLayoutInfo(currentKey) || layoutInfo;
                    currentKey = this.collection.getKeyAfter(currentKey);
                }
            }
            rect = this.orientation === 'horizontal' ? new (0, _rect.Rect)(layoutInfo.rect.maxX - this.dropIndicatorThickness / 2, layoutInfo.rect.y, this.dropIndicatorThickness, layoutInfo.rect.height) : new (0, _rect.Rect)(layoutInfo.rect.x, layoutInfo.rect.maxY - this.dropIndicatorThickness / 2, layoutInfo.rect.width, this.dropIndicatorThickness);
        } else rect = layoutInfo.rect;
        return new (0, _layoutInfo.LayoutInfo)('dropIndicator', target.key + ':' + target.dropPosition, rect);
    }
}
function toArray(collection, predicate) {
    const result = [];
    for (const node of collection)if (predicate(node)) result.push(node);
    return result;
}

},{"../collections/getChildNodes":"9KbhA","../virtualizer/Layout":"YYckq","../virtualizer/LayoutInfo":"81Wbi","../virtualizer/Rect":"9sh2q","../virtualizer/Size":"aiymI","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

