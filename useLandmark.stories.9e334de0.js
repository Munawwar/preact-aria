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
})({"cbglR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Example1", ()=>(0, _useLandmark1TsxDefault.default));
var _useLandmark1Tsx = require("./useLandmark-1.tsx");
var _useLandmark1TsxDefault = parcelHelpers.interopDefault(_useLandmark1Tsx);
exports.default = {};

},{"./useLandmark-1.tsx":"9S1pt","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9S1pt":[function(require,module,exports,__globalThis) {
// Original example: packages/dev/s2-docs/pages/react-aria/useLandmark.mdx:22. Apache-2.0, Adobe and contributors.
// Adapted module paths and standalone renderer; upstream example body retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useLandmarkTs = require("../../../vendor/react-aria/exports/useLandmark.ts");
"use client";
function Navigation(props) {
    let ref = (0, _react.useRef)(null);
    let { landmarkProps } = (0, _useLandmarkTs.useLandmark)({
        ...props,
        role: 'navigation'
    }, ref);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("nav", {
        ref: ref,
        ...props,
        ...landmarkProps,
        children: props.children
    });
}
function Region(props) {
    let ref = (0, _react.useRef)(null);
    let { landmarkProps } = (0, _useLandmarkTs.useLandmark)({
        ...props,
        role: 'region'
    }, ref);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("article", {
        ref: ref,
        ...props,
        ...landmarkProps,
        children: props.children
    });
}
function Search(props) {
    let ref = (0, _react.useRef)(null);
    let { landmarkProps } = (0, _useLandmarkTs.useLandmark)({
        ...props,
        role: 'search'
    }, ref);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("form", {
        ref: ref,
        ...props,
        ...landmarkProps,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("h2", {
                id: "search-header",
                children: "Search"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                "aria-labelledby": "search-header",
                type: "search"
            })
        ]
    });
}
function ImportedExample(props) {
    return /*#__PURE__*/ (0, _reactDefault.default).cloneElement(/*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Navigation, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("h2", {
                        children: "Navigation"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "#",
                                    children: "Link 1"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                    href: "#",
                                    children: "Link 2"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Search, {}),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Region, {
                "aria-label": "Example region",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("h2", {
                        children: "Region"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                        children: "Example region with no focusable children."
                    })
                ]
            })
        ]
    }), props);
}
exports.default = {
    render: ImportedExample,
    args: {},
    controls: [],
    controlOptions: {},
    propsObject: undefined,
    argTypes: {}
};

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../vendor/react-aria/exports/useLandmark.ts":"lb7ab","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lb7ab":[function(require,module,exports,__globalThis) {
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
/** Creates a LandmarkController, which allows programmatic navigation of landmarks. */ parcelHelpers.export(exports, "UNSTABLE_createLandmarkController", ()=>UNSTABLE_createLandmarkController);
/**
 * Provides landmark navigation in an application. Call this with a role and label to register a
 * landmark navigable with F6.
 *
 * @param props - Props for the landmark.
 * @param ref - Ref to the landmark.
 */ parcelHelpers.export(exports, "useLandmark", ()=>useLandmark);
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _react = require("react");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _indexJs = require("use-sync-external-store/shim/index.js");
// Increment this version number whenever the
// LandmarkManagerApi or Landmark interfaces change.
const LANDMARK_API_VERSION = 1;
// Symbol under which the singleton landmark manager instance is attached to the document.
const landmarkSymbol = Symbol.for('react-aria-landmark-manager');
function subscribe(fn) {
    document.addEventListener('react-aria-landmark-manager-change', fn);
    return ()=>document.removeEventListener('react-aria-landmark-manager-change', fn);
}
function getLandmarkManager() {
    if (typeof document === 'undefined') return null;
    // Reuse an existing instance if it has the same or greater version.
    let instance = document[landmarkSymbol];
    if (instance && instance.version >= LANDMARK_API_VERSION) return instance;
    // Otherwise, create a new instance and dispatch an event so anything using the existing
    // instance updates and re-registers their landmarks with the new one.
    document[landmarkSymbol] = new LandmarkManager();
    document.dispatchEvent(new CustomEvent('react-aria-landmark-manager-change'));
    return document[landmarkSymbol];
}
// Subscribes a React component to the current landmark manager instance.
function useLandmarkManager() {
    return (0, _indexJs.useSyncExternalStore)(subscribe, getLandmarkManager, getLandmarkManager);
}
class LandmarkManager {
    landmarks = [];
    isListening = false;
    refCount = 0;
    version = LANDMARK_API_VERSION;
    constructor(){
        this.f6Handler = this.f6Handler.bind(this);
        this.focusinHandler = this.focusinHandler.bind(this);
        this.focusoutHandler = this.focusoutHandler.bind(this);
    }
    setupIfNeeded() {
        if (this.isListening) return;
        document.addEventListener('keydown', this.f6Handler, {
            capture: true
        });
        document.addEventListener('focusin', this.focusinHandler, {
            capture: true
        });
        document.addEventListener('focusout', this.focusoutHandler, {
            capture: true
        });
        this.isListening = true;
    }
    teardownIfNeeded() {
        if (!this.isListening || this.landmarks.length > 0 || this.refCount > 0) return;
        document.removeEventListener('keydown', this.f6Handler, {
            capture: true
        });
        document.removeEventListener('focusin', this.focusinHandler, {
            capture: true
        });
        document.removeEventListener('focusout', this.focusoutHandler, {
            capture: true
        });
        this.isListening = false;
    }
    focusLandmark(landmark, direction) {
        this.landmarks.find((l)=>l.ref.current === landmark)?.focus?.(direction);
    }
    /**
   * Return set of landmarks with a specific role.
   */ getLandmarksByRole(role) {
        return new Set(this.landmarks.filter((l)=>l.role === role));
    }
    /**
   * Return first landmark with a specific role.
   */ getLandmarkByRole(role) {
        return this.landmarks.find((l)=>l.role === role);
    }
    addLandmark(newLandmark) {
        this.setupIfNeeded();
        if (this.landmarks.find((landmark)=>landmark.ref === newLandmark.ref) || !newLandmark.ref.current) return;
        this.landmarks.filter((landmark)=>landmark.role === 'main').length;
        if (this.landmarks.length === 0) {
            this.landmarks = [
                newLandmark
            ];
            this.checkLabels(newLandmark.role);
            return;
        }
        // Binary search to insert new landmark based on position in document relative to existing landmarks.
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        let start = 0;
        let end = this.landmarks.length - 1;
        while(start <= end){
            let mid = Math.floor((start + end) / 2);
            let comparedPosition = newLandmark.ref.current.compareDocumentPosition(this.landmarks[mid].ref.current);
            let isNewAfterExisting = Boolean(comparedPosition & Node.DOCUMENT_POSITION_PRECEDING || comparedPosition & Node.DOCUMENT_POSITION_CONTAINS);
            if (isNewAfterExisting) start = mid + 1;
            else end = mid - 1;
        }
        this.landmarks.splice(start, 0, newLandmark);
        this.checkLabels(newLandmark.role);
    }
    updateLandmark(landmark) {
        let index = this.landmarks.findIndex((l)=>l.ref === landmark.ref);
        if (index >= 0) {
            this.landmarks[index] = {
                ...this.landmarks[index],
                ...landmark
            };
            this.checkLabels(this.landmarks[index].role);
        }
    }
    removeLandmark(ref) {
        this.landmarks = this.landmarks.filter((landmark)=>landmark.ref !== ref);
        this.teardownIfNeeded();
    }
    /**
   * Warn if there are 2+ landmarks with the same role but no label.
   * Labels for landmarks with the same role must also be unique.
   *
   * See https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/.
   */ checkLabels(role) {
        let landmarksWithRole = this.getLandmarksByRole(role);
        if (landmarksWithRole.size > 1) {
            let duplicatesWithoutLabel = [
                ...landmarksWithRole
            ].filter((landmark)=>!landmark.label);
            duplicatesWithoutLabel.length;
            var landmark;
            var label, landmark1, landmark2;
        }
    }
    /**
   * Get the landmark that is the closest parent in the DOM.
   * Returns undefined if no parent is a landmark.
   */ closestLandmark(element) {
        let landmarkMap = new Map(this.landmarks.map((l)=>[
                l.ref.current,
                l
            ]));
        let currentElement = element;
        while(currentElement && !landmarkMap.has(currentElement) && currentElement !== document.body && currentElement.parentElement)currentElement = currentElement.parentElement;
        return landmarkMap.get(currentElement);
    }
    /**
   * Gets the next landmark, in DOM focus order, or previous if backwards is specified.
   * If last landmark, next should be the first landmark.
   * If not inside a landmark, will return first landmark.
   * Returns undefined if there are no landmarks.
   */ getNextLandmark(element, { backward }) {
        let currentLandmark = this.closestLandmark(element);
        let nextLandmarkIndex = backward ? this.landmarks.length - 1 : 0;
        if (currentLandmark) nextLandmarkIndex = this.landmarks.indexOf(currentLandmark) + (backward ? -1 : 1);
        let wrapIfNeeded = ()=>{
            // When we reach the end of the landmark sequence, fire a custom event that can be listened for by applications.
            // If this event is canceled, we return immediately. This can be used to implement landmark navigation across iframes.
            if (nextLandmarkIndex < 0) {
                if (!element.dispatchEvent(new CustomEvent('react-aria-landmark-navigation', {
                    detail: {
                        direction: 'backward'
                    },
                    bubbles: true,
                    cancelable: true
                }))) return true;
                nextLandmarkIndex = this.landmarks.length - 1;
            } else if (nextLandmarkIndex >= this.landmarks.length) {
                if (!element.dispatchEvent(new CustomEvent('react-aria-landmark-navigation', {
                    detail: {
                        direction: 'forward'
                    },
                    bubbles: true,
                    cancelable: true
                }))) return true;
                nextLandmarkIndex = 0;
            }
            if (nextLandmarkIndex < 0 || nextLandmarkIndex >= this.landmarks.length) return true;
            return false;
        };
        if (wrapIfNeeded()) return undefined;
        // Skip over hidden landmarks.
        let i = nextLandmarkIndex;
        while(this.landmarks[nextLandmarkIndex].ref.current?.closest('[aria-hidden=true]')){
            nextLandmarkIndex += backward ? -1 : 1;
            if (wrapIfNeeded()) return undefined;
            if (nextLandmarkIndex === i) break;
        }
        return this.landmarks[nextLandmarkIndex];
    }
    /**
   * Look at next landmark. If an element was previously focused inside, restore focus there.
   * If not, focus the landmark itself.
   * If no landmarks at all, or none with focusable elements, don't move focus.
   */ f6Handler(e) {
        if (e.key === 'F6') {
            // If alt key pressed, focus main landmark, otherwise navigate forward or backward based on shift key.
            let handled = e.altKey ? this.focusMain() : this.navigate((0, _domfunctions.getEventTarget)(e), e.shiftKey);
            if (handled) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    }
    focusMain() {
        let main = this.getLandmarkByRole('main');
        if (main && main.ref.current && main.ref.current.isConnected) {
            this.focusLandmark(main.ref.current, 'forward');
            return true;
        }
        return false;
    }
    navigate(from, backward) {
        let nextLandmark = this.getNextLandmark(from, {
            backward
        });
        if (!nextLandmark) return false;
        // If something was previously focused in the next landmark, then return focus to it
        if (nextLandmark.lastFocused) {
            let lastFocused = nextLandmark.lastFocused;
            if ((0, _domfunctions.nodeContains)(document.body, lastFocused)) {
                lastFocused.focus();
                return true;
            }
        }
        // Otherwise, focus the landmark itself
        if (nextLandmark.ref.current && nextLandmark.ref.current.isConnected) {
            this.focusLandmark(nextLandmark.ref.current, backward ? 'backward' : 'forward');
            return true;
        }
        return false;
    }
    /**
   * Sets lastFocused for a landmark, if focus is moved within that landmark.
   * Lets the last focused landmark know it was blurred if something else is focused.
   */ focusinHandler(e) {
        let currentLandmark = this.closestLandmark((0, _domfunctions.getEventTarget)(e));
        if (currentLandmark && currentLandmark.ref.current !== (0, _domfunctions.getEventTarget)(e)) this.updateLandmark({
            ref: currentLandmark.ref,
            lastFocused: (0, _domfunctions.getEventTarget)(e)
        });
        let previousFocusedElement = e.relatedTarget;
        if (previousFocusedElement) {
            let closestPreviousLandmark = this.closestLandmark(previousFocusedElement);
            if (closestPreviousLandmark && closestPreviousLandmark.ref.current === previousFocusedElement) closestPreviousLandmark.blur();
        }
    }
    /**
   * Track if the focus is lost to the body. If it is, do cleanup on the landmark that last had
   * focus.
   */ focusoutHandler(e) {
        let previousFocusedElement = (0, _domfunctions.getEventTarget)(e);
        let nextFocusedElement = e.relatedTarget;
        // the === document seems to be a jest thing for focus to go there on generic blur event such as landmark.blur();
        // browsers appear to send focus instead to document.body and the relatedTarget is null when that happens
        if (!nextFocusedElement || nextFocusedElement === document) {
            let closestPreviousLandmark = this.closestLandmark(previousFocusedElement);
            if (closestPreviousLandmark && closestPreviousLandmark.ref.current === previousFocusedElement) closestPreviousLandmark.blur();
        }
    }
    createLandmarkController() {
        let instance = this;
        instance.refCount++;
        instance.setupIfNeeded();
        return {
            navigate (direction, opts) {
                let element = opts?.from || document.activeElement;
                return instance.navigate(element, direction === 'backward');
            },
            focusNext (opts) {
                let element = opts?.from || document.activeElement;
                return instance.navigate(element, false);
            },
            focusPrevious (opts) {
                let element = opts?.from || document.activeElement;
                return instance.navigate(element, true);
            },
            focusMain () {
                return instance.focusMain();
            },
            dispose () {
                if (instance) {
                    instance.refCount--;
                    instance.teardownIfNeeded();
                    instance = null;
                }
            }
        };
    }
    registerLandmark(landmark) {
        if (this.landmarks.find((l)=>l.ref === landmark.ref)) this.updateLandmark(landmark);
        else this.addLandmark(landmark);
        return ()=>this.removeLandmark(landmark.ref);
    }
}
function UNSTABLE_createLandmarkController() {
    // Get the current landmark manager and create a controller using it.
    let instance = getLandmarkManager();
    let controller = instance?.createLandmarkController();
    let unsubscribe = subscribe(()=>{
        // If the landmark manager changes, dispose the old
        // controller and create a new one.
        controller?.dispose();
        instance = getLandmarkManager();
        controller = instance?.createLandmarkController();
    });
    // Return a wrapper that proxies requests to the current controller instance.
    return {
        navigate (direction, opts) {
            return controller.navigate(direction, opts);
        },
        focusNext (opts) {
            return controller.focusNext(opts);
        },
        focusPrevious (opts) {
            return controller.focusPrevious(opts);
        },
        focusMain () {
            return controller.focusMain();
        },
        dispose () {
            controller?.dispose();
            unsubscribe();
            controller = undefined;
            instance = null;
        }
    };
}
function useLandmark(props, ref) {
    const { role, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, focus } = props;
    let manager = useLandmarkManager();
    let label = ariaLabel || ariaLabelledby;
    let [isLandmarkFocused, setIsLandmarkFocused] = (0, _react.useState)(false);
    let defaultFocus = (0, _react.useCallback)(()=>{
        setIsLandmarkFocused(true);
    }, [
        setIsLandmarkFocused
    ]);
    let blur = (0, _react.useCallback)(()=>{
        setIsLandmarkFocused(false);
    }, [
        setIsLandmarkFocused
    ]);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (manager) return manager.registerLandmark({
            ref,
            label,
            role,
            focus: focus || defaultFocus,
            blur
        });
    }, [
        manager,
        label,
        ref,
        role,
        focus,
        defaultFocus,
        blur
    ]);
    (0, _react.useEffect)(()=>{
        if (isLandmarkFocused) ref.current?.focus();
    }, [
        isLandmarkFocused,
        ref
    ]);
    return {
        landmarkProps: {
            role,
            tabIndex: isLandmarkFocused ? -1 : undefined,
            'aria-label': ariaLabel,
            'aria-labelledby': ariaLabelledby
        }
    };
}

},{"../utils/shadowdom/DOMFunctions":"8kfpz","react":"gOP0N","../utils/useLayoutEffect":"h7M6K","use-sync-external-store/shim/index.js":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8kfpz":[function(require,module,exports,__globalThis) {
// Source: https://github.com/microsoft/tabster/blob/a89fc5d7e332d48f68d03b1ca6e344489d1c3898/src/Shadowdomize/DOMFunctions.ts#L16
/* eslint-disable rsp-rules/no-non-shadow-contains, rsp-rules/safe-event-target */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ShadowDOM safe version of Node.contains.
 */ parcelHelpers.export(exports, "nodeContains", ()=>nodeContains);
parcelHelpers.export(exports, "getActiveElement", ()=>getActiveElement);
// Possibly we can improve the types for this using https://github.com/adobe/react-spectrum/pull/8991/changes#diff-2d491c0c91701d28d08e1cf9fcadbdb21a030b67ab681460c9934140f29127b8R68 but it was more changes than I
// wanted to make to fix the function.
/**
 * ShadowDOM safe version of event.target.
 */ parcelHelpers.export(exports, "getEventTarget", ()=>getEventTarget);
/**
 * Returns the set of event targets a listener must be attached to in order to
 * globally observe an event.
 *
 * @param from - The target element to start from.
 * @param to - The element to stop at when bubbling. @default getOwnerWindow(from)
 *   `to` is generally going to be either `document` or `window`, but
 *   it can be any intermediate node.
 * @returns [global, ...shadowRoots]
 */ parcelHelpers.export(exports, "getPropagationTargets", ()=>getPropagationTargets);
/**
 * ShadowDOM safe fast version of node.contains(document.activeElement).
 *
 * @param node
 * @returns
 */ parcelHelpers.export(exports, "isFocusWithin", ()=>isFocusWithin);
var _domHelpers = require("../domHelpers");
var _flags = require("react-stately/private/flags/flags");
function nodeContains(node, otherNode) {
    if (!(0, _flags.shadowDOM)()) return otherNode && node ? node.contains(otherNode) : false;
    if (!node || !otherNode) return false;
    let currentNode = otherNode;
    while(currentNode != null){
        if (currentNode === node) return true;
        if (typeof currentNode.assignedElements !== 'function' && currentNode.assignedSlot?.parentNode) // Element is slotted
        currentNode = currentNode.assignedSlot.parentNode;
        else if ((0, _domHelpers.isShadowRoot)(currentNode)) // Element is in shadow root
        currentNode = currentNode.host;
        else currentNode = currentNode.parentNode;
    }
    return false;
}
const getActiveElement = (doc = document)=>{
    if (!(0, _flags.shadowDOM)()) return doc.activeElement;
    let activeElement = doc.activeElement;
    while(activeElement && 'shadowRoot' in activeElement && activeElement.shadowRoot?.activeElement)activeElement = activeElement.shadowRoot.activeElement;
    return activeElement;
};
function getEventTarget(event) {
    if ((0, _flags.shadowDOM)() && event.target instanceof Element && event.target.shadowRoot) {
        if ('composedPath' in event) return event.composedPath()[0] ?? null;
        else if ('composedPath' in event.nativeEvent) return event.nativeEvent.composedPath()[0] ?? null;
    }
    return event.target;
}
function getPropagationTargets(from, to) {
    // If `to` is coming from a ref, its type technically allows `null`.
    // In practice, this function will generally be called from within a useEffect.
    // If the ref has not resolved by that point, then a coding error has been made.
    // Better to return an empty array than `[window]`, which may appear to work
    // in the light DOM, but fail in the shadow DOM.
    if (to === null) return [];
    to = to ?? (0, _domHelpers.getOwnerWindow)(from);
    let targets = [
        to
    ];
    if (!(0, _flags.shadowDOM)() || !from || from === to) return targets;
    // The root `to` itself lives in. The event already reaches `to` once
    // it is inside this root, so we must NOT collect this root or anything above
    // it — only the shadow roots strictly between `refNode` and `to`.
    // `window` has no getRootNode; its boundary is the document, which the walk
    // reaches naturally (the document is not a ShadowRoot, so the loop exits).
    let toRoot = 'getRootNode' in to ? to.getRootNode() : null;
    let current = from.getRootNode() ?? null;
    while((0, _domHelpers.isShadowRoot)(current) && current !== toRoot){
        // order shouldn't matter
        targets.push(current);
        current = current.host.getRootNode();
    }
    return targets;
}
function isFocusWithin(node) {
    if (!node) return false;
    // Get the active element within the node's parent shadow root (or the document). Can return null.
    let root = node.getRootNode();
    let ownerWindow = (0, _domHelpers.getOwnerWindow)(node);
    if (!(root instanceof ownerWindow.Document || root instanceof ownerWindow.ShadowRoot)) return false;
    let activeElement = root.activeElement;
    // Check if the active element is within this node. These nodes are within the same shadow root.
    return activeElement != null && node.contains(activeElement);
}

},{"../domHelpers":"cYkFa","react-stately/private/flags/flags":"ahU3Z","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cYkFa":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "getOwnerDocument", ()=>getOwnerDocument);
parcelHelpers.export(exports, "getOwnerWindow", ()=>getOwnerWindow);
/**
 * Type guard that checks if a value is a Node. Verifies the presence and type of the nodeType
 * property.
 */ parcelHelpers.export(exports, "isNode", ()=>isNode);
/**
 * Type guard that checks if a value is a Document. Uses nodeType and host property checks to
 * distinguish Document from other values.
 */ parcelHelpers.export(exports, "isDocument", ()=>isDocument);
/**
 * Type guard that checks if a value is a ShadowRoot. Uses nodeType and host property checks to
 * distinguish ShadowRoot from other values.
 */ parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
/**
 * Attaches an event listener on target(s) and returns a cleanup function.
 */ parcelHelpers.export(exports, "addEvent", ()=>addEvent);
/**
 * Sets a CSS property on an element and returns a cleanup function.
 */ parcelHelpers.export(exports, "setStyle", ()=>setStyle);
const getOwnerDocument = (target)=>{
    if (isWindow(target)) return target.document;
    if (isDocument(target)) return target;
    // @ts-expect-error Ensure safe access in SSR environments.
    return target?.ownerDocument ?? (typeof document !== 'undefined' ? document : undefined);
};
const getOwnerWindow = (target)=>{
    let ownerDocument = getOwnerDocument(target);
    // @ts-expect-error Ensure safe access in SSR environments.
    return ownerDocument?.defaultView ?? (typeof window !== 'undefined' ? window : undefined);
};
function isNode(value) {
    return value !== null && typeof value === 'object' && 'nodeType' in value && typeof value.nodeType === 'number';
}
/**
 * Type guard that checks if a value is a Window. Uses window self reference checks to
 * distinguish Window from other values.
 */ function isWindow(value) {
    return typeof value === 'object' && value != null && 'window' in value && value.window === value;
}
function isDocument(value) {
    return isNode(value) && value.nodeType === 9;
}
function isShadowRoot(value) {
    // 11 = DOCUMENT_FRAGMENT_NODE
    return isNode(value) && value.nodeType === 11 && 'host' in value;
}
function addEvent(target, event, listener, options) {
    if (listener == null || target == null) return ()=>{};
    let eventTargets = Array.isArray(target) ? target : [
        target
    ];
    for (let eventTarget of eventTargets)eventTarget.addEventListener(event, listener, options);
    return ()=>{
        for (let eventTarget of eventTargets)eventTarget.removeEventListener(event, listener, options);
    };
}
function setStyle(target, property, value, priority) {
    if (target == null) return ()=>{};
    let restore = new Array();
    let styleTargets = Array.isArray(target) ? target : [
        target
    ];
    for (let styleTarget of styleTargets){
        let initialValue = styleTarget.style.getPropertyValue(property);
        let initialPriority = styleTarget.style.getPropertyPriority(property);
        styleTarget.style.setProperty(property, value, priority);
        restore.unshift(()=>{
            if (initialValue) styleTarget.style.setProperty(property, initialValue, initialPriority);
            else styleTarget.style.removeProperty(property);
        });
    }
    return ()=>{
        for (let cleanup of restore)cleanup();
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ahU3Z":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2023 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "enableTableNestedRows", ()=>enableTableNestedRows);
parcelHelpers.export(exports, "tableNestedRows", ()=>tableNestedRows);
parcelHelpers.export(exports, "enableShadowDOM", ()=>enableShadowDOM);
parcelHelpers.export(exports, "shadowDOM", ()=>shadowDOM);
let _tableNestedRows = false;
let _shadowDOM = false;
function enableTableNestedRows() {
    _tableNestedRows = true;
}
function tableNestedRows() {
    return _tableNestedRows;
}
function enableShadowDOM() {
    _shadowDOM = true;
}
function shadowDOM() {
    return _shadowDOM;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h7M6K":[function(require,module,exports,__globalThis) {
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
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const useLayoutEffect = typeof document !== 'undefined' ? (0, _reactDefault.default).useLayoutEffect : ()=>{};

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

