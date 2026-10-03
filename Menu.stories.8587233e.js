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
})({"lXsTF":[function(require,module,exports,__globalThis) {
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
 * Handles positioning overlays like popovers and menus relative to a trigger
 * element, and updating the position when the window resizes.
 */ parcelHelpers.export(exports, "useOverlayPosition", ()=>useOverlayPosition);
var _domHelpers = require("../utils/domHelpers");
var _calculatePosition = require("./calculatePosition");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _react = require("react");
var _useCloseOnScroll = require("./useCloseOnScroll");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _i18Nprovider = require("../i18n/I18nProvider");
var _useResizeObserver = require("../utils/useResizeObserver");
let visualViewport = typeof document !== 'undefined' ? window.visualViewport : null;
function useOverlayPosition(props) {
    let { direction } = (0, _i18Nprovider.useLocale)();
    let { arrowSize, targetRef, overlayRef, arrowRef, scrollRef = overlayRef, placement = 'bottom', containerPadding = 12, shouldFlip = true, boundaryElement = typeof document !== 'undefined' ? document.body : null, offset = 0, crossOffset = 0, shouldUpdatePosition = true, isOpen = true, onClose, maxHeight, arrowBoundaryOffset = 0, getTargetRect } = props;
    let [position, setPosition] = (0, _react.useState)(null);
    let deps = [
        shouldUpdatePosition,
        placement,
        // oxlint-disable-next-line react/react-compiler
        overlayRef.current,
        // oxlint-disable-next-line react/react-compiler
        targetRef.current,
        // oxlint-disable-next-line react/react-compiler
        arrowRef?.current,
        // oxlint-disable-next-line react/react-compiler
        scrollRef.current,
        containerPadding,
        shouldFlip,
        boundaryElement,
        offset,
        crossOffset,
        isOpen,
        direction,
        maxHeight,
        arrowBoundaryOffset,
        arrowSize
    ];
    // Note, the position freezing breaks if body sizes itself dynamicly with the visual viewport but that might
    // just be a non-realistic use case
    // Upon opening a overlay, record the current visual viewport scale so we can freeze the overlay styles
    let lastScale = (0, _react.useRef)(visualViewport?.scale);
    (0, _react.useEffect)(()=>{
        if (isOpen) lastScale.current = visualViewport?.scale;
    }, [
        isOpen
    ]);
    let updatePosition = (0, _react.useCallback)(()=>{
        if (shouldUpdatePosition === false || !isOpen || !overlayRef.current || !targetRef.current || !boundaryElement) return;
        if (visualViewport?.scale !== lastScale.current) return;
        // Determine a scroll anchor based on the focused element.
        // This stores the offset of the anchor element from the scroll container
        // so it can be restored after repositioning. This way if the overlay height
        // changes, the focused element appears to stay in the same position.
        let anchor = null;
        if (scrollRef.current && (0, _domfunctions.isFocusWithin)(scrollRef.current)) {
            let anchorRect = (0, _domfunctions.getActiveElement)()?.getBoundingClientRect();
            let scrollRect = scrollRef.current.getBoundingClientRect();
            // Anchor from the top if the offset is in the top half of the scrollable element,
            // otherwise anchor from the bottom.
            anchor = {
                type: 'top',
                offset: (anchorRect?.top ?? 0) - scrollRect.top
            };
            if (anchor.offset > scrollRect.height / 2) {
                anchor.type = 'bottom';
                anchor.offset = (anchorRect?.bottom ?? 0) - scrollRect.bottom;
            }
        }
        // Always reset the overlay's previous max height if not defined by the user so that we can compensate for
        // RAC collections populating after a second render and properly set a correct max height + positioning when it populates.
        let overlay = overlayRef.current;
        if (!maxHeight && overlayRef.current) {
            overlay.style.top = '0px';
            overlay.style.bottom = '';
            overlay.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + 'px';
        }
        let position = (0, _calculatePosition.calculatePosition)({
            placement: translateRTL(placement, direction),
            overlayNode: overlayRef.current,
            targetNode: targetRef.current,
            scrollNode: scrollRef.current || overlayRef.current,
            padding: containerPadding,
            shouldFlip,
            boundaryElement,
            offset,
            crossOffset,
            maxHeight,
            arrowSize: arrowSize ?? (arrowRef?.current ? (0, _calculatePosition.getRect)(arrowRef.current, true).width : 0),
            arrowBoundaryOffset,
            targetRect: getTargetRect?.(targetRef.current)
        });
        if (!position.position) return;
        // Modify overlay styles directly so positioning happens immediately without the need of a second render
        // This is so we don't have to delay autoFocus scrolling or delay applying preventScroll for popovers
        overlay.style.top = '';
        overlay.style.bottom = '';
        overlay.style.left = '';
        overlay.style.right = '';
        Object.keys(position.position).forEach((key)=>overlay.style[key] = position.position[key] + 'px');
        overlay.style.maxHeight = position.maxHeight != null ? position.maxHeight + 'px' : '';
        // Restore scroll position relative to anchor element.
        let activeElement = (0, _domfunctions.getActiveElement)();
        if (anchor && activeElement && scrollRef.current) {
            let anchorRect = activeElement.getBoundingClientRect();
            let scrollRect = scrollRef.current.getBoundingClientRect();
            let newOffset = anchorRect[anchor.type] - scrollRect[anchor.type];
            scrollRef.current.scrollTop += newOffset - anchor.offset;
        }
        // Trigger a set state for a second render anyway for arrow positioning
        setPosition(position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // oxlint-disable-next-line react/react-compiler, react-hooks/exhaustive-deps
    }, deps);
    // Update position when anything changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // oxlint-disable-next-line react/react-compiler, react-hooks/exhaustive-deps
    (0, _useLayoutEffect.useLayoutEffect)(updatePosition, deps);
    // Update position on window resize
    useResize(updatePosition);
    // Update position when the overlay changes size (might need to flip).
    (0, _useResizeObserver.useResizeObserver)({
        ref: overlayRef,
        onResize: updatePosition
    });
    // Update position when the target changes size (might need to flip).
    (0, _useResizeObserver.useResizeObserver)({
        ref: targetRef,
        onResize: updatePosition
    });
    // Reposition the overlay and do not close on scroll while the visual viewport is resizing.
    // This will ensure that overlays adjust their positioning when the iOS virtual keyboard appears.
    let isResizing = (0, _react.useRef)(false);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        let timeout;
        let onResize = ()=>{
            isResizing.current = true;
            clearTimeout(timeout);
            timeout = setTimeout(()=>{
                isResizing.current = false;
            }, 500);
            updatePosition();
        };
        // Only reposition the overlay if a scroll event happens immediately as a result of resize (aka the virtual keyboard has appears)
        // We don't want to reposition the overlay if the user has pinch zoomed in and is scrolling the viewport around.
        let onScroll = ()=>{
            if (isResizing.current) onResize();
        };
        visualViewport?.addEventListener('resize', onResize);
        visualViewport?.addEventListener('scroll', onScroll);
        let cleanup = (0, _domHelpers.addEvent)(// @ts-expect-error
        (0, _domfunctions.getPropagationTargets)(window), 'scroll', onScroll);
        return ()=>{
            visualViewport?.removeEventListener('resize', onResize);
            visualViewport?.removeEventListener('scroll', onScroll);
            cleanup();
        };
    }, [
        updatePosition
    ]);
    let close = (0, _react.useCallback)(()=>{
        if (!isResizing.current) onClose?.();
    }, [
        onClose,
        isResizing
    ]);
    // When scrolling a parent scrollable region of the trigger (other than the body),
    // we hide the popover. Otherwise, its position would be incorrect.
    (0, _useCloseOnScroll.useCloseOnScroll)({
        triggerRef: targetRef,
        isOpen,
        onClose: onClose && close
    });
    return {
        overlayProps: {
            style: {
                position: position ? 'absolute' : 'fixed',
                top: !position ? 0 : undefined,
                left: !position ? 0 : undefined,
                zIndex: 100000,
                ...position?.position,
                maxHeight: position?.maxHeight ?? '100vh'
            }
        },
        placement: position?.placement ?? null,
        triggerAnchorPoint: position?.triggerAnchorPoint ?? null,
        arrowProps: {
            'aria-hidden': 'true',
            role: 'presentation',
            style: {
                left: position?.arrowOffsetLeft,
                top: position?.arrowOffsetTop
            }
        },
        updatePosition
    };
}
function useResize(onResize) {
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        window.addEventListener('resize', onResize, false);
        return ()=>{
            window.removeEventListener('resize', onResize, false);
        };
    }, [
        onResize
    ]);
}
function translateRTL(position, direction) {
    if (direction === 'rtl') return position.replace('start', 'right').replace('end', 'left');
    return position.replace('start', 'left').replace('end', 'right');
}

},{"../utils/domHelpers":"cYkFa","./calculatePosition":"gpDaF","../utils/shadowdom/DOMFunctions":"8kfpz","react":"gOP0N","./useCloseOnScroll":"5Qs2J","../utils/useLayoutEffect":"h7M6K","../i18n/I18nProvider":"czGuc","../utils/useResizeObserver":"58iim","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gpDaF":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "calculatePositionInternal", ()=>calculatePositionInternal);
/**
 * Determines where to place the overlay with regards to the target and the position of an optional
 * indicator.
 */ parcelHelpers.export(exports, "calculatePosition", ()=>calculatePosition);
parcelHelpers.export(exports, "getRect", ()=>getRect);
var _number = require("react-stately/private/utils/number");
var _platform = require("../utils/platform");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
const AXIS = {
    top: 'top',
    bottom: 'top',
    left: 'left',
    right: 'left'
};
const FLIPPED_DIRECTION = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left'
};
const CROSS_AXIS = {
    top: 'left',
    left: 'top'
};
const AXIS_SIZE = {
    top: 'height',
    left: 'width'
};
const TOTAL_SIZE = {
    width: 'totalWidth',
    height: 'totalHeight'
};
const PARSED_PLACEMENT_CACHE = {};
let getVisualViewport = ()=>typeof document !== 'undefined' ? window.visualViewport : null;
function getContainerDimensions(containerNode, visualViewport) {
    let width = 0, height = 0, totalWidth = 0, totalHeight = 0, top = 0, left = 0;
    let scroll = {};
    let isPinchZoomedIn = (visualViewport?.scale ?? 1) > 1;
    // In the case where the container is `html` or `body` and the container doesn't have something like `position: relative`,
    // then position absolute will be positioned relative to the viewport, also known as the `initial containing block`.
    // That's why we use the visual viewport instead.
    if (containerNode.tagName === 'BODY' || containerNode.tagName === 'HTML') {
        let documentElement = document.documentElement;
        totalWidth = documentElement.clientWidth;
        totalHeight = documentElement.clientHeight;
        width = visualViewport?.width ?? totalWidth;
        height = visualViewport?.height ?? totalHeight;
        scroll.top = documentElement.scrollTop || containerNode.scrollTop;
        scroll.left = documentElement.scrollLeft || containerNode.scrollLeft;
        // The goal of the below is to get a top/left value that represents the top/left of the visual viewport with
        // respect to the layout viewport origin. This combined with the scrollTop/scrollLeft will allow us to calculate
        // coordinates/values with respect to the visual viewport or with respect to the layout viewport.
        // Uses pageTop/pageLeft instead of offsetTop/offsetLeft because WebKit misreports those during pans.
        if (visualViewport) {
            top = Math.max(0, visualViewport.pageTop - (scroll.top ?? 0));
            left = Math.max(0, visualViewport.pageLeft - (scroll.left ?? 0));
        }
    } else {
        ({ width, height, top, left } = getOffset(containerNode, false));
        scroll.top = containerNode.scrollTop;
        scroll.left = containerNode.scrollLeft;
        totalWidth = width;
        totalHeight = height;
    }
    if ((0, _platform.isWebKit)() && (containerNode.tagName === 'BODY' || containerNode.tagName === 'HTML') && isPinchZoomedIn) {
        // Safari will report a non-zero scrollTop/Left for the non-scrolling body/HTML element when pinch zoomed in unlike other browsers.
        // Set to zero for parity calculations so we get consistent positioning of overlays across all browsers.
        // Also switch to visualViewport.pageTop/pageLeft so that we still accomodate for scroll positioning for body/HTML elements that are actually scrollable
        // before pinch zoom happens
        scroll.top = 0;
        scroll.left = 0;
        top = visualViewport?.pageTop ?? 0;
        left = visualViewport?.pageLeft ?? 0;
    }
    return {
        width,
        height,
        totalWidth,
        totalHeight,
        scroll,
        top,
        left
    };
}
function getScroll(node) {
    return {
        top: node.scrollTop,
        left: node.scrollLeft,
        width: node.scrollWidth,
        height: node.scrollHeight
    };
}
// Determines the amount of space required when moving the overlay to ensure it remains in the boundary
function getDelta(axis, offset, size, // The dimensions of the boundary element that the popover is
// positioned within (most of the time this is the <body>).
boundaryDimensions, // The dimensions of the containing block element that the popover is
// positioned relative to (e.g. parent with position: relative).
// Usually this is the same as the boundary element, but if the popover
// is portaled somewhere other than the body and has an ancestor with
// position: relative/absolute, it will be different.
containerDimensions, padding, containerOffsetWithBoundary) {
    let containerScroll = containerDimensions.scroll[axis] ?? 0;
    // The height/width of the boundary. Matches the axis along which we are adjusting the overlay position
    let boundarySize = boundaryDimensions[AXIS_SIZE[axis]];
    // Calculate the edges of the boundary (accomodating for the boundary padding) and the edges of the overlay.
    // Note that these values are with respect to the visual viewport (aka 0,0 is the top left of the viewport)
    let boundaryStartEdge = containerOffsetWithBoundary[axis] + boundaryDimensions.scroll[AXIS[axis]] + padding;
    let boundaryEndEdge = containerOffsetWithBoundary[axis] + boundaryDimensions.scroll[AXIS[axis]] + boundarySize - padding;
    // transformed value of the left edge of the overlay
    let startEdgeOffset = offset - containerScroll + boundaryDimensions.scroll[AXIS[axis]] + containerOffsetWithBoundary[axis] - boundaryDimensions[AXIS[axis]];
    // transformed value of the right edge of the overlay
    let endEdgeOffset = offset - containerScroll + size + boundaryDimensions.scroll[AXIS[axis]] + containerOffsetWithBoundary[axis] - boundaryDimensions[AXIS[axis]];
    // If any of the overlay edges falls outside of the boundary, shift the overlay the required amount to align one of the overlay's
    // edges with the closest boundary edge.
    if (startEdgeOffset < boundaryStartEdge) return boundaryStartEdge - startEdgeOffset;
    else if (endEdgeOffset > boundaryEndEdge) return Math.max(boundaryEndEdge - endEdgeOffset, boundaryStartEdge - startEdgeOffset);
    else return 0;
}
function getMargins(node) {
    let style = window.getComputedStyle(node);
    return {
        top: parseInt(style.marginTop, 10) || 0,
        bottom: parseInt(style.marginBottom, 10) || 0,
        left: parseInt(style.marginLeft, 10) || 0,
        right: parseInt(style.marginRight, 10) || 0
    };
}
function parsePlacement(input) {
    if (PARSED_PLACEMENT_CACHE[input]) return PARSED_PLACEMENT_CACHE[input];
    let [placement, crossPlacement] = input.split(' ');
    let axis = AXIS[placement] || 'right';
    let crossAxis = CROSS_AXIS[axis];
    if (!AXIS[crossPlacement]) crossPlacement = 'center';
    let size = AXIS_SIZE[axis];
    let crossSize = AXIS_SIZE[crossAxis];
    PARSED_PLACEMENT_CACHE[input] = {
        placement,
        crossPlacement,
        axis,
        crossAxis,
        size,
        crossSize
    };
    return PARSED_PLACEMENT_CACHE[input];
}
function computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions) {
    let { placement, crossPlacement, axis, crossAxis, size, crossSize } = placementInfo;
    let position = {};
    // button position
    position[crossAxis] = childOffset[crossAxis] ?? 0;
    if (crossPlacement === 'center') //  + (button size / 2) - (overlay size / 2)
    // at this point the overlay center should match the button center
    position[crossAxis] += ((childOffset[crossSize] ?? 0) - (overlaySize[crossSize] ?? 0)) / 2;
    else if (crossPlacement !== crossAxis) //  + (button size) - (overlay size)
    // at this point the overlay bottom should match the button bottom
    position[crossAxis] += (childOffset[crossSize] ?? 0) - (overlaySize[crossSize] ?? 0);
     /* else {
    the overlay top should match the button top
  } */ 
    position[crossAxis] += crossOffset;
    // overlay top or left overlapping arrow with button bottom or right
    const minPosition = childOffset[crossAxis] - overlaySize[crossSize] + arrowSize + arrowBoundaryOffset;
    // overlay bottom or right overlapping arrow with button top or left
    const maxPosition = childOffset[crossAxis] + childOffset[crossSize] - arrowSize - arrowBoundaryOffset;
    position[crossAxis] = (0, _number.clamp)(position[crossAxis], minPosition, maxPosition);
    // Floor these so the position isn't placed on a partial pixel, only whole pixels. Shouldn't matter if it was floored or ceiled, so chose one.
    if (placement === axis) {
        // If the container is positioned (non-static), then we use the container's actual
        // height, as `bottom` will be relative to this height.  But if the container is static,
        // then it can only be the `document.body`, and `bottom` will be relative to _its_
        // container.
        let containerHeight = isContainerPositioned ? containerDimensions[size] : containerDimensions[TOTAL_SIZE[size]];
        position[FLIPPED_DIRECTION[axis]] = Math.floor(containerHeight - childOffset[axis] + offset);
    } else position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
    return position;
}
function getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlayHeight, heightGrowthDirection, containerDimensions, isContainerDescendentOfBoundary, visualViewport) {
    // For cases where position is set via "bottom" instead of "top", we need to calculate the true overlay top
    // with respect to the container.
    let overlayTop = (position.top != null ? position.top : containerDimensions[TOTAL_SIZE.height] - (position.bottom ?? 0) - overlayHeight) - (containerDimensions.scroll.top ?? 0);
    // calculate the dimentions of the "boundingRect" which is most restrictive top/bottom of the boundaryRect and the visual view port
    let boundaryToContainerTransformOffset = isContainerDescendentOfBoundary ? containerOffsetWithBoundary.top : 0;
    let boundingRect = {
        // This should be boundary top in container coord system vs viewport top in container coord system
        // For the viewport top, there are several cases
        // 1. pinchzoom case where we want the viewports offset top as top here
        // 2. case where container is offset from the boundary and is contained by the boundary. In this case the top we want here is NOT 0, we want to take boundary's top even though is is a negative number OR the visual viewport, whichever is more restrictive
        top: Math.max(boundaryDimensions.top + boundaryToContainerTransformOffset, (visualViewport?.offsetTop ?? boundaryDimensions.top) + boundaryToContainerTransformOffset),
        bottom: Math.min(boundaryDimensions.top + boundaryDimensions.height + boundaryToContainerTransformOffset, (visualViewport?.offsetTop ?? 0) + (visualViewport?.height ?? 0))
    };
    let maxHeight = heightGrowthDirection !== 'top' ? Math.max(0, boundingRect.bottom - // this is the bottom of the boundary
    overlayTop - // this is the top of the overlay
    ((margins.top ?? 0) + (margins.bottom ?? 0) + padding // save additional space for margin and padding
    )) : Math.max(0, overlayTop + overlayHeight - // this is the bottom of the overlay
    boundingRect.top - // this is the top of the boundary
    ((margins.top ?? 0) + (margins.bottom ?? 0) + padding // save additional space for margin and padding
    ));
    return maxHeight;
}
function getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding, placementInfo, containerDimensions, isContainerDescendentOfBoundary) {
    let { placement, axis, size } = placementInfo;
    if (placement === axis) return Math.max(0, childOffset[axis] - // trigger start
    (containerDimensions.scroll[axis] ?? 0) - // transform trigger position to be with respect to viewport 0,0
    (boundaryDimensions[axis] + (isContainerDescendentOfBoundary ? containerOffsetWithBoundary[axis] : 0)) - // boundary start
    (margins[axis] ?? 0) - // margins usually for arrows or other decorations
    margins[FLIPPED_DIRECTION[axis]] - padding); // padding between overlay and boundary
    return Math.max(0, boundaryDimensions[size] + boundaryDimensions[axis] + (isContainerDescendentOfBoundary ? containerOffsetWithBoundary[axis] : 0) - childOffset[axis] - childOffset[size] + (containerDimensions.scroll[axis] ?? 0) - (margins[axis] ?? 0) - margins[FLIPPED_DIRECTION[axis]] - padding);
}
function calculatePositionInternal(placementInput, childOffset, overlaySize, scrollSize, margins, padding, flip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, userSetMaxHeight, arrowSize, arrowBoundaryOffset, isContainerDescendentOfBoundary, visualViewport) {
    let placementInfo = parsePlacement(placementInput);
    let { size, crossAxis, crossSize, placement, crossPlacement } = placementInfo;
    let position = computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions);
    let normalizedOffset = offset;
    let space = getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, placementInfo, containerDimensions, isContainerDescendentOfBoundary);
    // Check if the scroll size of the overlay is greater than the available space to determine if we need to flip
    if (flip && overlaySize[size] > space) {
        let flippedPlacementInfo = parsePlacement(`${FLIPPED_DIRECTION[placement]} ${crossPlacement}`);
        let flippedPosition = computePosition(childOffset, boundaryDimensions, overlaySize, flippedPlacementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions);
        let flippedSpace = getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, flippedPlacementInfo, containerDimensions, isContainerDescendentOfBoundary);
        // If the available space for the flipped position is greater than the original available space, flip.
        if (flippedSpace > space) {
            placementInfo = flippedPlacementInfo;
            position = flippedPosition;
            normalizedOffset = offset;
        }
    }
    // Determine the direction the height of the overlay can grow so that we can choose how to calculate the max height
    let heightGrowthDirection = 'bottom';
    if (placementInfo.axis === 'top') {
        if (placementInfo.placement === 'top') heightGrowthDirection = 'top';
        else if (placementInfo.placement === 'bottom') heightGrowthDirection = 'bottom';
    } else if (placementInfo.crossAxis === 'top') {
        if (placementInfo.crossPlacement === 'top') heightGrowthDirection = 'bottom';
        else if (placementInfo.crossPlacement === 'bottom') heightGrowthDirection = 'top';
    }
    let delta = getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
    position[crossAxis] += delta;
    let maxHeight = getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlaySize.height, heightGrowthDirection, containerDimensions, isContainerDescendentOfBoundary, visualViewport);
    if (userSetMaxHeight && userSetMaxHeight < maxHeight) maxHeight = userSetMaxHeight;
    overlaySize.height = Math.min(overlaySize.height, maxHeight);
    position = computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, normalizedOffset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions);
    delta = getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
    position[crossAxis] += delta;
    let arrowPosition = {};
    // All values are transformed so that 0 is at the top/left of the overlay depending on the orientation
    // Prefer the arrow being in the center of the trigger/overlay anchor element
    // childOffset[crossAxis] + .5 * childOffset[crossSize] = absolute position with respect to the trigger's coordinate system that would place the arrow in the center of the trigger
    // position[crossAxis] - margins[AXIS[crossAxis]] = value use to transform the position to a value with respect to the overlay's coordinate system. A child element's (aka arrow) position absolute's "0"
    // is positioned after the margin of its parent (aka overlay) so we need to subtract it to get the proper coordinate transform
    let origin = childOffset[crossAxis] - position[crossAxis] - margins[AXIS[crossAxis]];
    let preferredArrowPosition = origin + 0.5 * childOffset[crossSize];
    // Min/Max position limits for the arrow with respect to the overlay
    const arrowMinPosition = arrowSize / 2 + arrowBoundaryOffset;
    // overlaySize[crossSize] - margins = true size of the overlay
    const overlayMargin = AXIS[crossAxis] === 'left' ? (margins.left ?? 0) + (margins.right ?? 0) : (margins.top ?? 0) + (margins.bottom ?? 0);
    const arrowMaxPosition = overlaySize[crossSize] - overlayMargin - arrowSize / 2 - arrowBoundaryOffset;
    // Min/Max position limits for the arrow with respect to the trigger/overlay anchor element
    // Same margin accomodation done here as well as for the preferredArrowPosition
    const arrowOverlappingChildMinEdge = childOffset[crossAxis] + arrowSize / 2 - (position[crossAxis] + margins[AXIS[crossAxis]]);
    const arrowOverlappingChildMaxEdge = childOffset[crossAxis] + childOffset[crossSize] - arrowSize / 2 - (position[crossAxis] + margins[AXIS[crossAxis]]);
    // Clamp the arrow positioning so that it always is within the bounds of the anchor and the overlay
    const arrowPositionOverlappingChild = (0, _number.clamp)(preferredArrowPosition, arrowOverlappingChildMinEdge, arrowOverlappingChildMaxEdge);
    arrowPosition[crossAxis] = (0, _number.clamp)(arrowPositionOverlappingChild, arrowMinPosition, arrowMaxPosition);
    // If there is an arrow, use that as the origin so that animations are smooth.
    // Otherwise use the target edge.
    ({ placement, crossPlacement } = placementInfo);
    if (arrowSize) origin = arrowPosition[crossAxis];
    else if (crossPlacement === 'right') origin += childOffset[crossSize];
    else if (crossPlacement === 'center') origin += childOffset[crossSize] / 2;
    let crossOrigin = placement === 'left' || placement === 'top' ? overlaySize[size] : 0;
    let triggerAnchorPoint = {
        x: placement === 'top' || placement === 'bottom' ? origin : crossOrigin,
        y: placement === 'left' || placement === 'right' ? origin : crossOrigin
    };
    return {
        position,
        maxHeight: maxHeight,
        arrowOffsetLeft: arrowPosition.left,
        arrowOffsetTop: arrowPosition.top,
        placement,
        triggerAnchorPoint
    };
}
function calculatePosition(opts) {
    let { placement, targetNode, overlayNode, scrollNode, padding, shouldFlip, boundaryElement, offset, crossOffset, maxHeight, arrowSize = 0, arrowBoundaryOffset = 0, targetRect } = opts;
    let visualViewport = getVisualViewport();
    let container = overlayNode instanceof HTMLElement ? getContainingBlock(overlayNode) : document.documentElement;
    let isViewportContainer = container === document.documentElement;
    const containerPositionStyle = window.getComputedStyle(container).position;
    let isContainerPositioned = !!containerPositionStyle && containerPositionStyle !== 'static';
    let childOffset = isViewportContainer ? getOffset(targetNode, false, targetRect) : getPosition(targetNode, container, false, targetRect);
    if (!isViewportContainer) {
        let { marginTop, marginLeft } = window.getComputedStyle(targetNode);
        childOffset.top += parseInt(marginTop, 10) || 0;
        childOffset.left += parseInt(marginLeft, 10) || 0;
    }
    let overlaySize = getOffset(overlayNode, true);
    let margins = getMargins(overlayNode);
    overlaySize.width += (margins.left ?? 0) + (margins.right ?? 0);
    overlaySize.height += (margins.top ?? 0) + (margins.bottom ?? 0);
    let scrollSize = getScroll(scrollNode);
    // Note that due to logic inside getContainerDimensions, for cases where the boundary element is the body, we will return
    // a height/width that matches the visual viewport size rather than the body's height/width (aka for zoom it will be zoom adjusted size)
    // and a top/left that is adjusted as well (will return the top/left of the zoomed in viewport, or 0,0 for a non-zoomed body)
    // Otherwise this returns the height/width of a arbitrary boundary element, and its top/left with respect to the viewport (NOTE THIS MEANS IT DOESNT INCLUDE SCROLL)
    let boundaryDimensions = getContainerDimensions(boundaryElement, visualViewport);
    let containerDimensions = getContainerDimensions(container, visualViewport);
    // There are several difference cases of how to calculate the containerOffsetWithBoundary:
    // - boundaryElement is body or HTML and the container is an arbitrary element in the boundary (aka submenu with parent menu as container in v3)
    // - boundaryElement and container are both body or HTML element (aka standard popover case)
    // - boundaryElement is customized by the user. Container can also be arbitrary (either body/HTML or some other element)
    // containerOffsetWithBoundary should always return a value that is the boundary's coordinate offset with respect to the container coord system (container is 0, 0)
    let containerOffsetWithBoundary;
    if ((boundaryElement.tagName === 'BODY' || boundaryElement.tagName === 'HTML') && !isViewportContainer) {
        // Use getRect instead of getOffset because boundaryDimensions for BODY/HTML is in viewport coordinate space,
        // not document coordinate space
        let containerRect = getRect(container, false);
        // the offset should be negative because if container is at viewport position x,y, then viewport top (aka 0)
        // is at position -x,y in container-relative coordinates
        containerOffsetWithBoundary = {
            top: -(containerRect.top - boundaryDimensions.top),
            left: -(containerRect.left - boundaryDimensions.left),
            width: 0,
            height: 0
        };
    } else if ((boundaryElement.tagName === 'BODY' || boundaryElement.tagName === 'HTML') && isViewportContainer) // both are the same viewport container, no offset needed
    containerOffsetWithBoundary = {
        top: 0,
        left: 0,
        width: 0,
        height: 0
    };
    else // This returns the boundary's coordinate with respect to the container. This case captures cases such as when you provide a custom boundary
    // like in ScrollingBoundaryContainerExample in Popover.stories.
    containerOffsetWithBoundary = getPosition(boundaryElement, container, false);
    let isContainerDescendentOfBoundary = (0, _domfunctions.nodeContains)(boundaryElement, container);
    return calculatePositionInternal(placement, childOffset, overlaySize, scrollSize, margins, padding, shouldFlip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, maxHeight, arrowSize, arrowBoundaryOffset, isContainerDescendentOfBoundary, visualViewport);
}
function getRect(node, ignoreScale) {
    let { top, left, width, height } = node.getBoundingClientRect();
    // Use offsetWidth and offsetHeight if this is an HTML element, so that
    // the size is not affected by scale transforms.
    if (ignoreScale && node instanceof node.ownerDocument.defaultView.HTMLElement) {
        width = node.offsetWidth;
        height = node.offsetHeight;
    }
    return {
        top,
        left,
        width,
        height
    };
}
function getOffset(node, ignoreScale, overrideRect) {
    let { top, left, width, height } = overrideRect || getRect(node, ignoreScale);
    let { scrollTop, scrollLeft, clientTop, clientLeft } = document.documentElement;
    return {
        top: top + scrollTop - clientTop,
        left: left + scrollLeft - clientLeft,
        width,
        height
    };
}
function getPosition(node, parent, ignoreScale, overrideRect) {
    let style = window.getComputedStyle(node);
    let offset;
    if (style.position === 'fixed') offset = overrideRect || getRect(node, ignoreScale);
    else {
        offset = getOffset(node, ignoreScale, overrideRect);
        let parentOffset = getOffset(parent, ignoreScale);
        let parentStyle = window.getComputedStyle(parent);
        parentOffset.top += (parseInt(parentStyle.borderTopWidth, 10) || 0) - parent.scrollTop;
        parentOffset.left += (parseInt(parentStyle.borderLeftWidth, 10) || 0) - parent.scrollLeft;
        offset.top -= parentOffset.top;
        offset.left -= parentOffset.left;
    }
    offset.top -= parseInt(style.marginTop, 10) || 0;
    offset.left -= parseInt(style.marginLeft, 10) || 0;
    return offset;
}
// Returns the containing block of an element, which is the element that
// this element will be positioned relative to.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block
function getContainingBlock(node) {
    // The offsetParent of an element in most cases equals the containing block.
    // https://w3c.github.io/csswg-drafts/cssom-view/#dom-htmlelement-offsetparent
    let offsetParent = node.offsetParent;
    // The offsetParent algorithm terminates at the document body,
    // even if the body is not a containing block. Double check that
    // and use the documentElement if so.
    if (offsetParent && offsetParent === document.body && window.getComputedStyle(offsetParent).position === 'static' && !isContainingBlock(offsetParent)) offsetParent = document.documentElement;
    // TODO(later): handle table elements?
    // The offsetParent can be null if the element has position: fixed, or a few other cases.
    // We have to walk up the tree manually in this case because fixed positioned elements
    // are still positioned relative to their containing block, which is not always the viewport.
    if (offsetParent == null) {
        offsetParent = node.parentElement;
        while(offsetParent && !isContainingBlock(offsetParent))offsetParent = offsetParent.parentElement;
    }
    // Fall back to the viewport.
    return offsetParent || document.documentElement;
}
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
function isContainingBlock(node) {
    let style = window.getComputedStyle(node);
    return style.transform !== 'none' || /transform|perspective/.test(style.willChange) || style.filter !== 'none' || style.contain === 'paint' || 'backdropFilter' in style && style.backdropFilter !== 'none' || 'WebkitBackdropFilter' in style && style.WebkitBackdropFilter !== 'none';
}

},{"react-stately/private/utils/number":"aEFFO","../utils/platform":"eBqgD","../utils/shadowdom/DOMFunctions":"8kfpz","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

