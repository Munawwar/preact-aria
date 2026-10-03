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
})({"9N6Xt":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
parcelHelpers.export(exports, "Default", ()=>Default);
parcelHelpers.export(exports, "WithDelays", ()=>WithDelays);
var _jsxRuntime = require("preact/jsx-runtime");
var _buttonTsx = require("../../../../vanilla/src/Button.tsx");
var _linkTsx = require("../../../../vanilla/src/Link.tsx");
var _popoverTsx = require("../../../../vanilla/src/Popover.tsx");
var _previewTriggerTsx = require("../../../../../../vendor/react-aria-components/src/PreviewTrigger.tsx");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
exports.default = {
    title: 'React Aria Components/PreviewTrigger',
    component: (0, _previewTriggerTsx.PreviewTrigger)
};
function PreviewLink({ href, title, description, children, delay, closeDelay }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _previewTriggerTsx.PreviewTrigger), {
        delay: delay,
        closeDelay: closeDelay,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _linkTsx.Link), {
                href: href,
                target: "_blank",
                children: children
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverTsx.Popover), {
                offset: 4,
                style: {
                    maxWidth: 260
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8,
                        alignItems: 'start'
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("strong", {
                            children: title
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                            style: {
                                fontSize: 13
                            },
                            children: description
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                            onPress: ()=>window.open(href, '_blank', 'noopener'),
                            children: "Open"
                        })
                    ]
                })
            })
        ]
    });
}
function Example(props) {
    let { delay, closeDelay } = props;
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("p", {
        style: {
            maxWidth: 500
        },
        children: [
            "The React Spectrum project includes",
            ' ',
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(PreviewLink, {
                href: "https://react-spectrum.adobe.com/react-aria/",
                title: "React Aria",
                description: "A library of unstyled React components and hooks that provides accessible UI primitives for your design system.",
                delay: delay,
                closeDelay: closeDelay,
                children: "React Aria"
            }),
            ",",
            ' ',
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(PreviewLink, {
                href: "https://react-spectrum.adobe.com/react-spectrum/",
                title: "React Spectrum",
                description: "A React implementation of Spectrum, Adobe's design system.",
                delay: delay,
                closeDelay: closeDelay,
                children: "React Spectrum"
            }),
            ", and",
            ' ',
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(PreviewLink, {
                href: "https://react-spectrum.adobe.com/internationalized/",
                title: "Internationalized",
                description: "A collection of framework-agnostic libraries for handling dates, numbers, and strings across locales.",
                delay: delay,
                closeDelay: closeDelay,
                children: "Internationalized"
            }),
            ". Hover one preview, then quickly hover the next to see the shared warmup timer make subsequent previews open instantly."
        ]
    });
}
const Default = {
    render: ()=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(Example, {})
};
const WithDelays = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(Example, {
            delay: args.delay,
            closeDelay: args.closeDelay
        }),
    args: {
        delay: 700,
        closeDelay: 500
    }
};

},{"preact/jsx-runtime":"b2Fbn","../../../../vanilla/src/Button.tsx":"akb2g","../../../../vanilla/src/Link.tsx":"4vBmo","../../../../vanilla/src/Popover.tsx":"lwcda","../../../../../../vendor/react-aria-components/src/PreviewTrigger.tsx":"7yvpw","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"akb2g":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Button", ()=>Button);
var _jsxRuntime = require("preact/jsx-runtime");
var _buttonTs = require("../../../../vendor/react-aria-components/exports/Button.ts");
var _composeRenderPropsTs = require("../../../../vendor/react-aria-components/exports/composeRenderProps.ts");
var _progressCircle = require("./ProgressCircle");
var _buttonCss = require("./Button.css");
'use client';
function Button(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTs.Button), {
        ...props,
        className: "react-aria-Button button-base",
        "data-variant": props.variant || 'primary',
        children: (0, _composeRenderPropsTs.composeRenderProps)(props.children, (children, { isPending })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    !isPending && children,
                    isPending && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _progressCircle.ProgressCircle), {
                        "aria-label": "Saving...",
                        isIndeterminate: true
                    })
                ]
            }))
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../vendor/react-aria-components/exports/Button.ts":"enBVm","../../../../vendor/react-aria-components/exports/composeRenderProps.ts":"jtWJJ","./ProgressCircle":"6UR4P","./Button.css":"3agqr","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"enBVm":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "ButtonContext", ()=>ButtonContext);
parcelHelpers.export(exports, "Button", ()=>Button);
var _jsxRuntime = require("preact/jsx-runtime");
var _liveAnnouncer = require("react-aria/private/live-announcer/LiveAnnouncer");
var _useButton = require("react-aria/useButton");
var _utils = require("./utils");
var _hidden = require("react-aria/private/collections/Hidden");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _mergeProps = require("react-aria/mergeProps");
var _progressBar = require("./ProgressBar");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useFocusRing = require("react-aria/useFocusRing");
var _useHover = require("react-aria/useHover");
var _useId = require("react-aria/useId");
const ButtonContext = /*#__PURE__*/ (0, _react.createContext)({});
const Button = /*#__PURE__*/ (0, _hidden.createHideableComponent)(function Button(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, ButtonContext);
    let ctx = props;
    let { isPending } = ctx;
    let { buttonProps, isPressed } = (0, _useButton.useButton)(props, ref);
    buttonProps = useDisableInteractions(buttonProps, isPending);
    let { focusProps, isFocused, isFocusVisible } = (0, _useFocusRing.useFocusRing)(props);
    let { hoverProps, isHovered } = (0, _useHover.useHover)({
        ...props,
        isDisabled: props.isDisabled || isPending
    });
    let renderValues = {
        isHovered,
        isPressed: (ctx.isPressed || isPressed) && !isPending,
        isFocused,
        isFocusVisible,
        isDisabled: props.isDisabled || false,
        isPending: isPending ?? false
    };
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: renderValues,
        defaultClassName: 'react-aria-Button'
    });
    let buttonId = (0, _useId.useId)(buttonProps.id);
    let progressId = (0, _useId.useId)();
    let ariaLabelledby = buttonProps['aria-labelledby'];
    if (isPending) {
        // aria-labelledby wins over aria-label
        // https://www.w3.org/TR/accname-1.2/#computation-steps
        if (ariaLabelledby) ariaLabelledby = `${ariaLabelledby} ${progressId}`;
        else if (buttonProps['aria-label']) ariaLabelledby = `${buttonId} ${progressId}`;
    }
    let wasPending = (0, _react.useRef)(isPending);
    (0, _react.useEffect)(()=>{
        let message = {
            'aria-labelledby': ariaLabelledby || buttonId
        };
        if (!wasPending.current && isFocused && isPending) (0, _liveAnnouncer.announce)(message, 'assertive');
        else if (wasPending.current && isFocused && !isPending) (0, _liveAnnouncer.announce)(message, 'assertive');
        wasPending.current = isPending;
    }, [
        isPending,
        isFocused,
        ariaLabelledby,
        buttonId
    ]);
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).button, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, buttonProps, focusProps, hoverProps),
        // When the button is in a pending state, we want to stop implicit form submission (ie. when the user presses enter on a text input).
        // We do this by changing the button's type to button.
        type: buttonProps.type === 'submit' && isPending ? 'button' : buttonProps.type,
        id: buttonId,
        ref: ref,
        "aria-labelledby": ariaLabelledby,
        slot: props.slot || undefined,
        "aria-disabled": isPending ? 'true' : buttonProps['aria-disabled'],
        "data-disabled": props.isDisabled || undefined,
        "data-pressed": renderValues.isPressed || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-pending": isPending || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _progressBar.ProgressBarContext).Provider, {
            value: {
                id: progressId
            },
            children: renderProps.children
        })
    });
});
// Events to preserve when isPending is true (for tooltips and other overlays)
const PRESERVED_EVENT_PATTERN = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
function useDisableInteractions(props, isPending) {
    if (isPending) {
        for(const key in props)if (key.startsWith('on') && !PRESERVED_EVENT_PATTERN.test(key)) props[key] = undefined;
        props.href = undefined;
        props.target = undefined;
    }
    return props;
}

},{"preact/jsx-runtime":"b2Fbn","react-aria/private/live-announcer/LiveAnnouncer":"gQ2k2","react-aria/useButton":"lPmqM","./utils":"jtWJJ","react-aria/private/collections/Hidden":"iPJX7","react-aria/filterDOMProps":"h4XHF","react-aria/mergeProps":"jycxS","./ProgressBar":"hW9J5","react":"gOP0N","react-aria/useFocusRing":"bP7um","react-aria/useHover":"2yLrj","react-aria/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gQ2k2":[function(require,module,exports,__globalThis) {
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
 * Announces the message using screen reader technology.
 */ parcelHelpers.export(exports, "announce", ()=>announce);
/**
 * Stops all queued announcements.
 */ parcelHelpers.export(exports, "clearAnnouncer", ()=>clearAnnouncer);
/**
 * Removes the announcer from the DOM.
 */ parcelHelpers.export(exports, "destroyAnnouncer", ()=>destroyAnnouncer);
/* Inspired by https://github.com/AlmeroSteyn/react-aria-live */ const LIVEREGION_TIMEOUT_DELAY = 7000;
let liveAnnouncer = null;
function announce(message, assertiveness = 'assertive', timeout = LIVEREGION_TIMEOUT_DELAY) {
    if (!liveAnnouncer) {
        liveAnnouncer = new LiveAnnouncer();
        // wait for the live announcer regions to be added to the dom, then announce
        // otherwise Safari won't announce the message if it's added too quickly
        // found most times less than 100ms were not consistent when announcing with Safari
        // IS_REACT_ACT_ENVIRONMENT is used by React 18. Previous versions checked for the `jest` global.
        // https://github.com/reactwg/react-18/discussions/102
        // if we're in a test environment, announce without waiting
        if (// @ts-ignore
        !(typeof IS_REACT_ACT_ENVIRONMENT === 'boolean' ? IS_REACT_ACT_ENVIRONMENT : typeof jest !== 'undefined')) setTimeout(()=>{
            if (liveAnnouncer?.isAttached()) liveAnnouncer?.announce(message, assertiveness, timeout);
        }, 100);
        else liveAnnouncer.announce(message, assertiveness, timeout);
    } else liveAnnouncer.announce(message, assertiveness, timeout);
}
function clearAnnouncer(assertiveness) {
    if (liveAnnouncer) liveAnnouncer.clear(assertiveness);
}
function destroyAnnouncer() {
    if (liveAnnouncer) {
        liveAnnouncer.destroy();
        liveAnnouncer = null;
    }
}
// LiveAnnouncer is implemented using vanilla DOM, not React. That's because as of React 18
// ReactDOM.render is deprecated, and the replacement, ReactDOM.createRoot is moved into a
// subpath import `react-dom/client`. That makes it hard for us to support multiple React versions.
// As a global API, we can't use portals without introducing a breaking API change. LiveAnnouncer
// is simple enough to implement without React, so that's what we do here.
// See this discussion for more details: https://github.com/reactwg/react-18/discussions/125#discussioncomment-2382638
class LiveAnnouncer {
    node = null;
    assertiveLog = null;
    politeLog = null;
    constructor(){
        if (typeof document !== 'undefined') {
            this.node = document.createElement('div');
            this.node.dataset.liveAnnouncer = 'true';
            // copied from VisuallyHidden
            Object.assign(this.node.style, {
                border: 0,
                clip: 'rect(0 0 0 0)',
                clipPath: 'inset(50%)',
                height: '1px',
                margin: '-1px',
                overflow: 'hidden',
                padding: 0,
                position: 'absolute',
                width: '1px',
                whiteSpace: 'nowrap'
            });
            this.assertiveLog = this.createLog('assertive');
            this.node.appendChild(this.assertiveLog);
            this.politeLog = this.createLog('polite');
            this.node.appendChild(this.politeLog);
            document.body.prepend(this.node);
        }
    }
    isAttached() {
        return this.node?.isConnected;
    }
    createLog(ariaLive) {
        let node = document.createElement('div');
        node.setAttribute('role', 'log');
        node.setAttribute('aria-live', ariaLive);
        node.setAttribute('aria-relevant', 'additions');
        return node;
    }
    destroy() {
        if (!this.node) return;
        document.body.removeChild(this.node);
        this.node = null;
    }
    announce(message, assertiveness = 'assertive', timeout = LIVEREGION_TIMEOUT_DELAY) {
        if (!this.node) return;
        let node = document.createElement('div');
        if (typeof message === 'object') {
            // To read an aria-labelledby, the element must have an appropriate role, such as img.
            node.setAttribute('role', 'img');
            node.setAttribute('aria-labelledby', message['aria-labelledby']);
        } else node.textContent = message;
        if (assertiveness === 'assertive') this.assertiveLog?.appendChild(node);
        else this.politeLog?.appendChild(node);
        if (message !== '') setTimeout(()=>{
            node.remove();
        }, timeout);
    }
    clear(assertiveness) {
        if (!this.node) return;
        if ((!assertiveness || assertiveness === 'assertive') && this.assertiveLog) this.assertiveLog.innerHTML = '';
        if ((!assertiveness || assertiveness === 'polite') && this.politeLog) this.politeLog.innerHTML = '';
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lPmqM":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a button component. Handles mouse,
 * keyboard, and touch interactions, focus behavior, and ARIA props for both native button elements
 * and custom element types.
 *
 * @param props - Props to be applied to the button.
 * @param ref - A ref to a DOM element for the button.
 */ parcelHelpers.export(exports, "useButton", ()=>useButton);
var _filterDOMProps = require("../utils/filterDOMProps");
var _mergeProps = require("../utils/mergeProps");
var _useFocusable = require("../interactions/useFocusable");
var _usePress = require("../interactions/usePress");
function useButton(props, ref) {
    let { elementType = 'button', isDisabled, onPress, onPressStart, onPressEnd, onPressUp, onPressChange, preventFocusOnPress, // @ts-ignore - undocumented
    allowFocusWhenDisabled, onClick, href, target, rel, type = 'button' } = props;
    let additionalProps;
    if (elementType === 'button') additionalProps = {
        type,
        disabled: isDisabled,
        form: props.form,
        formAction: props.formAction,
        formEncType: props.formEncType,
        formMethod: props.formMethod,
        formNoValidate: props.formNoValidate,
        formTarget: props.formTarget,
        name: props.name,
        value: props.value
    };
    else additionalProps = {
        role: 'button',
        href: elementType === 'a' && !isDisabled ? href : undefined,
        target: elementType === 'a' ? target : undefined,
        type: elementType === 'input' ? type : undefined,
        disabled: elementType === 'input' ? isDisabled : undefined,
        'aria-disabled': !isDisabled || elementType === 'input' ? undefined : isDisabled,
        rel: elementType === 'a' ? rel : undefined
    };
    let { pressProps, isPressed } = (0, _usePress.usePress)({
        onPressStart,
        onPressEnd,
        onPressChange,
        onPress,
        onPressUp,
        onClick,
        isDisabled,
        preventFocusOnPress,
        ref
    });
    let { focusableProps } = (0, _useFocusable.useFocusable)(props, ref);
    if (allowFocusWhenDisabled) // oxlint-disable-next-line react/react-compiler
    focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
    let buttonProps = (0, _mergeProps.mergeProps)(focusableProps, pressProps, (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    }));
    return {
        isPressed,
        buttonProps: (0, _mergeProps.mergeProps)(additionalProps, buttonProps, {
            'aria-haspopup': props['aria-haspopup'],
            'aria-expanded': props['aria-expanded'],
            'aria-controls': props['aria-controls'],
            'aria-pressed': props['aria-pressed'],
            'aria-current': props['aria-current'],
            'aria-disabled': props['aria-disabled']
        })
    };
}

},{"../utils/filterDOMProps":"h4XHF","../utils/mergeProps":"jycxS","../interactions/useFocusable":"6IFKj","../interactions/usePress":"3S2KR","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jycxS":[function(require,module,exports,__globalThis) {
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
 * Merges multiple props objects together. Event handlers are chained,
 * classNames are combined, ids are deduplicated, and refs are merged.
 * For all other props, the last prop object overrides all previous ones.
 *
 * @param args - Multiple sets of props to merge together.
 */ parcelHelpers.export(exports, "mergeProps", ()=>mergeProps);
var _chain = require("./chain");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _useId = require("./useId");
var _mergeRefs = require("./mergeRefs");
function mergeProps(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = (0, _chain.chain)(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = (0, _clsxDefault.default)(a, b);
            else if (key === 'id' && a && b) result.id = (0, _useId.mergeIds)(a, b);
            else if (key === 'ref' && a && b) result.ref = (0, _mergeRefs.mergeRefs)(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}

},{"./chain":"bQmEj","clsx":"5gQI0","./useId":"fQAcb","./mergeRefs":"jspQh","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bQmEj":[function(require,module,exports,__globalThis) {
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
 */ /**
 * Calls all functions in the order they were chained with the same arguments.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chain", ()=>chain);
function chain(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fQAcb":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "idsUpdaterMap", ()=>idsUpdaterMap);
/**
 * If a default is not provided, generate an id.
 *
 * @param defaultId - Default component id.
 */ parcelHelpers.export(exports, "useId", ()=>useId);
/**
 * Merges two ids.
 * Different ids will trigger a side-effect and re-render components hooked up with `useId`.
 */ parcelHelpers.export(exports, "mergeIds", ()=>mergeIds);
/**
 * Used to generate an id, and after render, check if that id is rendered so we know
 * if we can use it in places such as labelledby.
 *
 * @param depArray - When to recalculate if the id is in the DOM.
 */ parcelHelpers.export(exports, "useSlotId", ()=>useSlotId);
var _react = require("react");
var _useLayoutEffect = require("./useLayoutEffect");
var _ssrprovider = require("../ssr/SSRProvider");
var _useValueEffect = require("./useValueEffect");
// copied from SSRProvider.tsx to reduce exports, if needed again, consider sharing
let canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
let idsUpdaterMap = new Map();
// This allows us to clean up the idsUpdaterMap when the id is no longer used.
// Map is a strong reference, so unused ids wouldn't be cleaned up otherwise.
// This can happen in suspended components where mount/unmount is not called.
let registry;
if (typeof FinalizationRegistry !== 'undefined') registry = new FinalizationRegistry((heldValue)=>{
    idsUpdaterMap.delete(heldValue);
});
let registeredIds = new WeakMap();
function useId(defaultId) {
    let [value, setValue] = (0, _react.useState)(defaultId);
    let nextId = (0, _react.useRef)(null);
    let res = (0, _ssrprovider.useSSRSafeId)(value);
    let cleanupRef = (0, _react.useRef)(null);
    // These are intentionally disabled the compiler, these functions just read the identity
    // of the ref, not the value inside current.
    // oxlint-disable-next-line react/react-compiler
    let registeredId = registeredIds.get(cleanupRef);
    if (registry && registeredId !== res) {
        if (registeredId != null) // oxlint-disable-next-line react/react-compiler
        registry.unregister(cleanupRef);
        // oxlint-disable-next-line react/react-compiler
        registry.register(cleanupRef, res, cleanupRef);
        // oxlint-disable-next-line react/react-compiler
        registeredIds.set(cleanupRef, res);
    }
    if (canUseDOM) {
        const cacheIdRef = idsUpdaterMap.get(res);
        // oxlint-disable-next-line react/react-compiler
        if (cacheIdRef && !cacheIdRef.includes(nextId)) // oxlint-disable-next-line react/react-compiler
        cacheIdRef.push(nextId);
        else // oxlint-disable-next-line react/react-compiler
        idsUpdaterMap.set(res, [
            nextId
        ]);
    }
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        let r = res;
        return ()=>{
            // In Suspense, the cleanup function may be not called
            // when it is though, also remove it from the finalization registry.
            if (registry) {
                registry.unregister(cleanupRef);
                registeredIds.delete(cleanupRef);
            }
            idsUpdaterMap.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is always cleaned up.
    // eslint-disable-next-line
    (0, _react.useEffect)(()=>{
        let newId = nextId.current;
        if (newId) setValue(newId);
        return ()=>{
            if (newId) nextId.current = null;
        };
    });
    return res;
}
function mergeIds(idA, idB) {
    if (idA === idB) return idA;
    let setIdsA = idsUpdaterMap.get(idA);
    if (setIdsA) {
        setIdsA.forEach((ref)=>ref.current = idB);
        return idB;
    }
    let setIdsB = idsUpdaterMap.get(idB);
    if (setIdsB) {
        setIdsB.forEach((ref)=>ref.current = idA);
        return idA;
    }
    return idB;
}
function useSlotId(depArray = []) {
    let id = useId();
    let [resolvedId, setResolvedId] = (0, _useValueEffect.useValueEffect)(id);
    let updateId = (0, _react.useCallback)(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : undefined;
        });
    // oxlint-disable-next-line react/react-compiler
    }, [
        id,
        setResolvedId
    ]);
    (0, _useLayoutEffect.useLayoutEffect)(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}

},{"react":"gOP0N","./useLayoutEffect":"h7M6K","../ssr/SSRProvider":"2cndP","./useValueEffect":"ksiVz","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h7M6K":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ksiVz":[function(require,module,exports,__globalThis) {
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
// This hook works like `useState`, but when setting the value, you pass a generator function
// that can yield multiple values. Each yielded value updates the state and waits for the next
// layout effect, then continues the generator. This allows sequential updates to state to be
// written linearly.
parcelHelpers.export(exports, "useValueEffect", ()=>useValueEffect);
var _react = require("react");
var _useLayoutEffect = require("./useLayoutEffect");
function useValueEffect(defaultValue) {
    let [value, setValue] = (0, _react.useState)(defaultValue);
    // Keep an up to date copy of value in a ref so we can access the current value in the generator.
    // This allows us to maintain a stable queue function.
    let currValue = (0, _react.useRef)(value);
    let effect = (0, _react.useRef)(null);
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = (0, _react.useRef)(()=>{
        if (!effect.current) return;
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (currValue.current === newValue.value) nextRef.current();
        else setValue(newValue.value);
    });
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        currValue.current = value;
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef.current();
    });
    let queue = (0, _react.useCallback)((fn)=>{
        effect.current = fn(currValue.current);
        nextRef.current();
    }, [
        nextRef
    ]);
    return [
        value,
        queue
    ];
}

},{"react":"gOP0N","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jspQh":[function(require,module,exports,__globalThis) {
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
 * Merges multiple refs into one. Works with either callback or object refs.
 */ parcelHelpers.export(exports, "mergeRefs", ()=>mergeRefs);
function mergeRefs(...refs) {
    if (refs.length === 1 && refs[0]) return refs[0];
    return (value)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, value);
            hasCleanup ||= typeof cleanup == 'function';
            return cleanup;
        });
        if (hasCleanup) return ()=>{
            cleanups.forEach((cleanup, i)=>{
                if (typeof cleanup === 'function') cleanup();
                else setRef(refs[i], null);
            });
        };
    };
}
function setRef(ref, value) {
    if (typeof ref === 'function') return ref(value);
    else if (ref != null) ref.current = value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6IFKj":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "FocusableContext", ()=>FocusableContext);
parcelHelpers.export(exports, "FocusableProvider", ()=>FocusableProvider);
/**
 * Used to make an element focusable and capable of auto focus.
 */ parcelHelpers.export(exports, "useFocusable", ()=>useFocusable);
parcelHelpers.export(exports, "Focusable", ()=>Focusable);
var _jsxRuntime = require("preact/jsx-runtime");
var _focusSafely = require("./focusSafely");
var _domHelpers = require("../utils/domHelpers");
var _isFocusable = require("../utils/isFocusable");
var _mergeProps = require("../utils/mergeProps");
var _mergeRefs = require("../utils/mergeRefs");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useFocus = require("./useFocus");
var _useKeyboard = require("./useKeyboard");
var _useObjectRef = require("../utils/useObjectRef");
var _useSyncRef = require("../utils/useSyncRef");
let FocusableContext = /*#__PURE__*/ (0, _reactDefault.default).createContext(null);
function useFocusableContext(ref) {
    let context = (0, _react.useContext)(FocusableContext) || {};
    (0, _useSyncRef.useSyncRef)(context, ref);
    // eslint-disable-next-line
    let { ref: _, ...otherProps } = context;
    return otherProps;
}
const FocusableProvider = /*#__PURE__*/ (0, _reactDefault.default).forwardRef(function FocusableProvider(props, ref) {
    let { children, ...otherProps } = props;
    let objRef = (0, _useObjectRef.useObjectRef)(ref);
    let context = {
        ...otherProps,
        ref: objRef
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(FocusableContext.Provider, {
        value: context,
        children: children
    });
});
function useFocusable(props, domRef) {
    let { focusProps } = (0, _useFocus.useFocus)(props);
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)(props);
    let interactions = (0, _mergeProps.mergeProps)(focusProps, keyboardProps);
    let domProps = useFocusableContext(domRef);
    let interactionProps = props.isDisabled ? {} : domProps;
    let autoFocusRef = (0, _react.useRef)(props.autoFocus);
    (0, _react.useEffect)(()=>{
        if (autoFocusRef.current && domRef.current) (0, _focusSafely.focusSafely)(domRef.current);
        autoFocusRef.current = false;
    }, [
        domRef
    ]);
    // Always set a tabIndex so that Safari allows focusing native buttons and inputs.
    let tabIndex = props.excludeFromTabOrder ? -1 : 0;
    if (props.isDisabled) tabIndex = undefined;
    return {
        focusableProps: (0, _mergeProps.mergeProps)({
            ...interactions,
            tabIndex
        }, interactionProps)
    };
}
const Focusable = /*#__PURE__*/ (0, _react.forwardRef)(({ children, ...props }, ref)=>{
    ref = (0, _useObjectRef.useObjectRef)(ref);
    let { focusableProps } = useFocusable(props, ref);
    let child = (0, _reactDefault.default).Children.only(children);
    (0, _react.useEffect)(()=>{
        return;
    }, [
        ref,
        props.isDisabled
    ]);
    // @ts-ignore
    let childRef = typeof child.type === 'function' ? child.props.ref : child.ref;
    return /*#__PURE__*/ (0, _reactDefault.default).cloneElement(child, {
        ...(0, _mergeProps.mergeProps)(focusableProps, child.props),
        // @ts-ignore
        // oxlint-disable-next-line react/react-compiler
        ref: (0, _mergeRefs.mergeRefs)(childRef, ref)
    });
});

},{"preact/jsx-runtime":"b2Fbn","./focusSafely":"2xT6S","../utils/domHelpers":"cYkFa","../utils/isFocusable":"dLPRV","../utils/mergeProps":"jycxS","../utils/mergeRefs":"jspQh","react":"gOP0N","./useFocus":"9bXTE","./useKeyboard":"aHm7i","../utils/useObjectRef":"ec0NJ","../utils/useSyncRef":"8a0bK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2xT6S":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A utility function that focuses an element while avoiding undesired side effects such
 * as page scrolling and screen reader issues with CSS transitions.
 */ parcelHelpers.export(exports, "focusSafely", ()=>focusSafely);
var _focusWithoutScrolling = require("../utils/focusWithoutScrolling");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _useFocusVisible = require("./useFocusVisible");
var _domHelpers = require("../utils/domHelpers");
var _runAfterTransition = require("../utils/runAfterTransition");
function focusSafely(element) {
    if (!element.isConnected) return;
    // If the user is interacting with a virtual cursor, e.g. screen reader, then
    // wait until after any animated transitions that are currently occurring on
    // the page before shifting focus. This avoids issues with VoiceOver on iOS
    // causing the page to scroll when moving focus if the element is transitioning
    // from off the screen.
    const ownerDocument = (0, _domHelpers.getOwnerDocument)(element);
    if ((0, _useFocusVisible.getInteractionModality)() === 'virtual') {
        let lastFocusedElement = (0, _domfunctions.getActiveElement)(ownerDocument);
        (0, _runAfterTransition.runAfterTransition)(()=>{
            const activeElement = (0, _domfunctions.getActiveElement)(ownerDocument);
            // If focus did not move or focus was lost to the body, and the element is still in the document, focus it.
            if ((activeElement === lastFocusedElement || activeElement === ownerDocument.body) && element.isConnected) (0, _focusWithoutScrolling.focusWithoutScrolling)(element);
        });
    } else (0, _focusWithoutScrolling.focusWithoutScrolling)(element);
}

},{"../utils/focusWithoutScrolling":"gcZ3w","../utils/shadowdom/DOMFunctions":"8kfpz","./useFocusVisible":"aBfUW","../utils/domHelpers":"cYkFa","../utils/runAfterTransition":"k2HOw","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8kfpz":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aBfUW":[function(require,module,exports,__globalThis) {
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
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "changeHandlers", ()=>changeHandlers);
parcelHelpers.export(exports, "hasSetupGlobalListeners", ()=>hasSetupGlobalListeners);
/**
 * EXPERIMENTAL
 * Adds a window (i.e. iframe) to the list of windows that are being tracked for focus visible.
 *
 * Sometimes apps render portions of their tree into an iframe. In this case, we cannot accurately
 * track if the focus is visible because we cannot see interactions inside the iframe. If you have
 * this in your application's architecture, then this function will attach event listeners inside
 * the iframe. You should call `addWindowFocusTracking` with an element from inside the window you
 * wish to add. We'll retrieve the relevant elements based on that. Note, you do not need to call
 * this for the default window, as we call it for you.
 *
 * When you are ready to stop listening, but you do not wish to unmount the iframe, you may call the
 * cleanup function returned by `addWindowFocusTracking`. Otherwise, when you unmount the iframe,
 * all listeners and state will be cleaned up automatically for you.
 *
 * @param element @default document.body - The element provided will be used to get the window to
 *   add.
 * @returns A function to remove the event listeners and cleanup the state.
 */ parcelHelpers.export(exports, "addWindowFocusTracking", ()=>addWindowFocusTracking);
/**
 * If true, keyboard focus is visible.
 */ parcelHelpers.export(exports, "isFocusVisible", ()=>isFocusVisible);
parcelHelpers.export(exports, "getInteractionModality", ()=>getInteractionModality);
parcelHelpers.export(exports, "setInteractionModality", ()=>setInteractionModality);
/** @private */ parcelHelpers.export(exports, "getPointerType", ()=>getPointerType);
/**
 * Keeps state of the current modality.
 */ parcelHelpers.export(exports, "useInteractionModality", ()=>useInteractionModality);
/**
 * Manages focus visible state for the page, and subscribes individual components for updates.
 */ parcelHelpers.export(exports, "useFocusVisible", ()=>useFocusVisible);
/**
 * Listens for trigger change and reports if focus is visible (i.e., modality is not pointer).
 */ parcelHelpers.export(exports, "useFocusVisibleListener", ()=>useFocusVisibleListener);
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _domHelpers = require("../utils/domHelpers");
var _utils = require("./utils");
var _platform = require("../utils/platform");
var _isVirtualEvent = require("../utils/isVirtualEvent");
var _openLink = require("../utils/openLink");
var _react = require("react");
var _ssrprovider = require("../ssr/SSRProvider");
let currentModality = null;
let currentPointerType = 'keyboard';
const changeHandlers = new Set();
let hasSetupGlobalListeners = new Map(); // We use a map here to support setting event listeners across multiple document objects.
let hasEventBeforeFocus = false;
let hasBlurredWindowRecently = false;
// Only Tab or Esc keys will make focus visible on text input elements
const FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
};
function triggerChangeHandlers(modality, e) {
    for (let handler of changeHandlers)handler(modality, e);
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus
 * styles visible.
 */ function isValidKey(e) {
    // Control and Shift keys trigger when navigating back to the tab with keyboard.
    return !(e.metaKey || !(0, _platform.isMac)() && e.altKey || e.ctrlKey || e.key === 'Control' || e.key === 'Shift' || e.key === 'Meta');
}
function handleKeyboardEvent(e) {
    hasEventBeforeFocus = true;
    if (!(0, _openLink.openLink).isOpening && isValidKey(e)) {
        currentModality = 'keyboard';
        currentPointerType = 'keyboard';
        triggerChangeHandlers('keyboard', e);
    }
}
function handlePointerEvent(e) {
    currentModality = 'pointer';
    currentPointerType = 'pointerType' in e ? e.pointerType : 'mouse';
    if (e.type === 'mousedown' || e.type === 'pointerdown') {
        hasEventBeforeFocus = true;
        triggerChangeHandlers('pointer', e);
    }
}
function handleClickEvent(e) {
    if (!(0, _openLink.openLink).isOpening && (0, _isVirtualEvent.isVirtualClick)(e)) {
        hasEventBeforeFocus = true;
        currentModality = 'virtual';
        currentPointerType = 'virtual';
    }
}
function handleFocusEvent(e) {
    if (0, _utils.ignoreFocusEvent) return;
    let target = (0, _domfunctions.getEventTarget)(e);
    let ownerWindow = (0, _domHelpers.getOwnerWindow)(target);
    let ownerDocument = (0, _domHelpers.getOwnerDocument)(target);
    // When the window regains focus, the browser restores focus to the element that was focused
    // before, firing a focus event the user did not initiate. handleWindowBlur sets
    // hasBlurredWindowRecently so restored focus doesn't switch to virtual modality below, but
    // Safari fires the window/element focus pair twice when returning to a tab or app and the first
    // element focus event clears the flag, so re-arm it whenever the window itself is focused.
    // Like handleWindowBlur, this intentionally doesn't check isTrusted.
    if (target === ownerWindow) {
        hasBlurredWindowRecently = true;
        return;
    }
    // Firefox fires two extra focus events when the user first clicks into an iframe:
    // first on the window, then on the document. We ignore these events so they don't
    // cause keyboard focus rings to appear.
    if (target === ownerDocument || !e.isTrusted) return;
    // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
    // This occurs, for example, when navigating a form with the next/previous buttons on iOS.
    if (!hasEventBeforeFocus && !hasBlurredWindowRecently) {
        currentModality = 'virtual';
        currentPointerType = 'virtual';
        triggerChangeHandlers('virtual', e);
    }
    hasEventBeforeFocus = false;
    hasBlurredWindowRecently = false;
}
function handleWindowBlur() {
    if (0, _utils.ignoreFocusEvent) return;
    // When the window is blurred, reset state. This is necessary when tabbing out of the window,
    // for example, since a subsequent focus event won't be fired.
    hasEventBeforeFocus = false;
    hasBlurredWindowRecently = true;
}
function handleInvalidEvent(e) {
    let startingActiveElement = (0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)((0, _domfunctions.getEventTarget)(e)));
    queueMicrotask(()=>{
        // If focus was moved to a different element after the form became invalid,
        // then it was likely a forms library that moved focus to the first invalid field.
        // In this case, we want to set the modality to keyboard.
        if ((0, _domfunctions.getActiveElement)((0, _domHelpers.getOwnerDocument)((0, _domfunctions.getEventTarget)(e))) !== startingActiveElement) setInteractionModality('keyboard');
    });
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */ function setupGlobalFocusEvents(element) {
    // eslint-disable-next-line no-restricted-globals
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const windowObject = (0, _domHelpers.getOwnerWindow)(element);
    const documentObject = (0, _domHelpers.getOwnerDocument)(element);
    if (hasSetupGlobalListeners.get(windowObject)) return;
    // Programmatic focus() calls shouldn't affect the current input modality.
    // However, we need to detect other cases when a focus event occurs without
    // a preceding user event (e.g. screen reader focus). Overriding the focus
    // method on HTMLElement.prototype is a bit hacky, but works.
    // defineProperty (not assignment) so this works even if `focus` is currently
    // a getter-only accessor — e.g. when @testing-library/user-event's setup()
    // has instrumented it. Plain assignment throws in that case.
    let focus = windowObject.HTMLElement.prototype.focus;
    Reflect.defineProperty(windowObject.HTMLElement.prototype, 'focus', {
        configurable: true,
        writable: true,
        value: function() {
            hasEventBeforeFocus = true;
            focus.apply(this, arguments);
        }
    });
    documentObject.addEventListener('keydown', handleKeyboardEvent, true);
    documentObject.addEventListener('keyup', handleKeyboardEvent, true);
    documentObject.addEventListener('click', handleClickEvent, true);
    documentObject.addEventListener('invalid', handleInvalidEvent, true);
    // Register focus events on the window so they are sure to happen
    // before React's event listeners (registered on the document).
    windowObject.addEventListener('focus', handleFocusEvent, true);
    windowObject.addEventListener('blur', handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        documentObject.addEventListener('pointerdown', handlePointerEvent, true);
        documentObject.addEventListener('pointermove', handlePointerEvent, true);
        documentObject.addEventListener('pointerup', handlePointerEvent, true);
    }
    // Add unmount handler
    windowObject.addEventListener('beforeunload', ()=>{
        tearDownWindowFocusTracking(element);
    }, {
        once: true
    });
    hasSetupGlobalListeners.set(windowObject, {
        focus
    });
}
const tearDownWindowFocusTracking = (element, loadListener)=>{
    const windowObject = (0, _domHelpers.getOwnerWindow)(element);
    const documentObject = (0, _domHelpers.getOwnerDocument)(element);
    if (loadListener) documentObject.removeEventListener('DOMContentLoaded', loadListener);
    if (!hasSetupGlobalListeners.has(windowObject)) return;
    Reflect.defineProperty(windowObject.HTMLElement.prototype, 'focus', {
        configurable: true,
        writable: true,
        value: hasSetupGlobalListeners.get(windowObject).focus
    });
    documentObject.removeEventListener('keydown', handleKeyboardEvent, true);
    documentObject.removeEventListener('keyup', handleKeyboardEvent, true);
    documentObject.removeEventListener('click', handleClickEvent, true);
    documentObject.removeEventListener('invalid', handleInvalidEvent, true);
    windowObject.removeEventListener('focus', handleFocusEvent, true);
    windowObject.removeEventListener('blur', handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        documentObject.removeEventListener('pointerdown', handlePointerEvent, true);
        documentObject.removeEventListener('pointermove', handlePointerEvent, true);
        documentObject.removeEventListener('pointerup', handlePointerEvent, true);
    }
    hasSetupGlobalListeners.delete(windowObject);
};
function addWindowFocusTracking(element) {
    const documentObject = (0, _domHelpers.getOwnerDocument)(element);
    let loadListener;
    if (documentObject.readyState !== 'loading') setupGlobalFocusEvents(element);
    else {
        loadListener = ()=>{
            setupGlobalFocusEvents(element);
        };
        documentObject.addEventListener('DOMContentLoaded', loadListener);
    }
    return ()=>tearDownWindowFocusTracking(element, loadListener);
}
// Server-side rendering does not have the document object defined
// eslint-disable-next-line no-restricted-globals
if (typeof document !== 'undefined') addWindowFocusTracking();
function isFocusVisible() {
    return currentModality !== 'pointer';
}
function getInteractionModality() {
    return currentModality;
}
function setInteractionModality(modality) {
    currentModality = modality;
    currentPointerType = modality === 'pointer' ? 'mouse' : modality;
    triggerChangeHandlers(modality, null);
}
function getPointerType() {
    return currentPointerType;
}
function useInteractionModality() {
    setupGlobalFocusEvents();
    let [modality, setModality] = (0, _react.useState)(currentModality);
    (0, _react.useEffect)(()=>{
        let handler = ()=>{
            setModality(currentModality);
        };
        changeHandlers.add(handler);
        return ()=>{
            changeHandlers.delete(handler);
        };
    }, []);
    return (0, _ssrprovider.useIsSSR)() ? null : modality;
}
const nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape
 * keys pressed) so that focus visible style can be properly set.
 */ function isKeyboardFocusEvent(isTextInput, modality, e) {
    let eventTarget = e ? (0, _domfunctions.getEventTarget)(e) : undefined;
    let ownerDocument = (0, _domHelpers.getOwnerDocument)(eventTarget);
    let ownerWindow = (0, _domHelpers.getOwnerWindow)(eventTarget);
    const IHTMLInputElement = typeof ownerWindow !== 'undefined' ? ownerWindow.HTMLInputElement : HTMLInputElement;
    const IHTMLTextAreaElement = typeof ownerWindow !== 'undefined' ? ownerWindow.HTMLTextAreaElement : HTMLTextAreaElement;
    const IHTMLElement = typeof ownerWindow !== 'undefined' ? ownerWindow.HTMLElement : HTMLElement;
    const IKeyboardEvent = typeof ownerWindow !== 'undefined' ? ownerWindow.KeyboardEvent : KeyboardEvent;
    // For keyboard events that occur on a non-input element that will move focus into input element (aka ArrowLeft going from Datepicker button to the main input group)
    // we need to rely on the user passing isTextInput into here. This way we can skip toggling focus visiblity for said input element
    let activeElement = (0, _domfunctions.getActiveElement)(ownerDocument);
    isTextInput = isTextInput || activeElement instanceof IHTMLInputElement && !nonTextInputTypes.has(activeElement.type) || activeElement instanceof IHTMLTextAreaElement || activeElement instanceof IHTMLElement && activeElement.isContentEditable;
    return !(isTextInput && modality === 'keyboard' && e instanceof IKeyboardEvent && !FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function useFocusVisible(props = {}) {
    let { isTextInput, autoFocus } = props;
    let [isFocusVisibleState, setFocusVisible] = (0, _react.useState)(autoFocus || isFocusVisible());
    useFocusVisibleListener((isFocusVisible)=>{
        setFocusVisible(isFocusVisible);
    }, [
        isTextInput
    ], {
        isTextInput
    });
    return {
        isFocusVisible: isFocusVisibleState
    };
}
function useFocusVisibleListener(fn, deps, opts) {
    setupGlobalFocusEvents();
    (0, _react.useEffect)(()=>{
        if (opts?.enabled === false) return;
        let handler = (modality, e)=>{
            // We want to early return for any keyboard events that occur inside text inputs EXCEPT for Tab and Escape
            if (!isKeyboardFocusEvent(!!opts?.isTextInput, modality, e)) return;
            fn(isFocusVisible());
        };
        changeHandlers.add(handler);
        return ()=>{
            changeHandlers.delete(handler);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","./utils":"iOeVY","../utils/platform":"eBqgD","../utils/isVirtualEvent":"dtScK","../utils/openLink":"gH3wl","react":"gOP0N","../ssr/SSRProvider":"2cndP","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iOeVY":[function(require,module,exports,__globalThis) {
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
// Turn a native event into a React synthetic event.
parcelHelpers.export(exports, "createSyntheticEvent", ()=>createSyntheticEvent);
parcelHelpers.export(exports, "setEventTarget", ()=>setEventTarget);
parcelHelpers.export(exports, "useSyntheticBlurEvent", ()=>useSyntheticBlurEvent);
parcelHelpers.export(exports, "ignoreFocusEvent", ()=>ignoreFocusEvent);
/**
 * This function prevents the next focus event fired on `target`, without using
 * `event.preventDefault()`. It works by waiting for the series of focus events to occur, and
 * reverts focus back to where it was before. It also makes these events mostly non-observable by
 * using a capturing listener on the window and stopping propagation.
 */ parcelHelpers.export(exports, "preventFocus", ()=>preventFocus);
var _focusWithoutScrolling = require("../utils/focusWithoutScrolling");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _domHelpers = require("../utils/domHelpers");
var _isFocusable = require("../utils/isFocusable");
var _react = require("react");
var _useLayoutEffect = require("../utils/useLayoutEffect");
function createSyntheticEvent(nativeEvent) {
    let event = nativeEvent;
    event.nativeEvent = nativeEvent;
    event.isDefaultPrevented = ()=>event.defaultPrevented;
    // cancelBubble is technically deprecated in the spec, but still supported in all browsers.
    event.isPropagationStopped = ()=>event.cancelBubble;
    event.persist = ()=>{};
    return event;
}
function setEventTarget(event, target) {
    Object.defineProperty(event, 'target', {
        value: target
    });
    Object.defineProperty(event, 'currentTarget', {
        value: target
    });
}
function useSyntheticBlurEvent(onBlur) {
    let stateRef = (0, _react.useRef)({
        isFocused: false,
        observer: null
    });
    // Clean up MutationObserver on unmount. See below.
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        const state = stateRef.current;
        return ()=>{
            if (state.observer) {
                state.observer.disconnect();
                state.observer = null;
            }
        };
    }, []);
    // This function is called during a React onFocus event.
    return (0, _react.useCallback)((e)=>{
        // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
        // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
        // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
        // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
        let eventTarget = (0, _domfunctions.getEventTarget)(e);
        if (eventTarget instanceof HTMLButtonElement || eventTarget instanceof HTMLInputElement || eventTarget instanceof HTMLTextAreaElement || eventTarget instanceof HTMLSelectElement) {
            stateRef.current.isFocused = true;
            let target = eventTarget;
            let onBlurHandler = (e)=>{
                stateRef.current.isFocused = false;
                if (target.disabled) {
                    // For backward compatibility, dispatch a (fake) React synthetic event.
                    let event = createSyntheticEvent(e);
                    onBlur?.(event);
                }
                // We no longer need the MutationObserver once the target is blurred.
                if (stateRef.current.observer) {
                    stateRef.current.observer.disconnect();
                    stateRef.current.observer = null;
                }
            };
            target.addEventListener('focusout', onBlurHandler, {
                once: true
            });
            stateRef.current.observer = new MutationObserver(()=>{
                if (stateRef.current.isFocused && target.disabled) {
                    stateRef.current.observer?.disconnect();
                    let relatedTargetEl = target === (0, _domfunctions.getActiveElement)() ? null : (0, _domfunctions.getActiveElement)();
                    target.dispatchEvent(new FocusEvent('blur', {
                        relatedTarget: relatedTargetEl
                    }));
                    target.dispatchEvent(new FocusEvent('focusout', {
                        bubbles: true,
                        relatedTarget: relatedTargetEl
                    }));
                }
            });
            stateRef.current.observer.observe(target, {
                attributes: true,
                attributeFilter: [
                    'disabled'
                ]
            });
        }
    }, [
        onBlur
    ]);
}
let ignoreFocusEvent = false;
function preventFocus(target) {
    // The browser will focus the nearest focusable ancestor of our target.
    while(target && !(0, _isFocusable.isFocusable)(target, {
        skipVisibilityCheck: true
    }))target = target.parentElement;
    let ownerWindow = (0, _domHelpers.getOwnerWindow)(target);
    let activeElement = (0, _domfunctions.getActiveElement)(ownerWindow.document);
    if (!activeElement || activeElement === target) return;
    // Listen on the target's root (document or shadow root) so we catch focus events inside
    // shadow DOM; they do not reach the main window.
    let targetRoot = target?.getRootNode();
    let root = targetRoot != null && (0, _domHelpers.isShadowRoot)(targetRoot) ? targetRoot : (0, _domHelpers.getOwnerWindow)(target);
    // Focus is "moving to target" when it moves to the button or to a descendant of the button
    // (e.g. SVG icon)
    let isFocusMovingToTarget = (focusTarget)=>focusTarget === target || (0, _domHelpers.isNode)(focusTarget) && (0, _domfunctions.nodeContains)(target, focusTarget);
    // Blur/focusout events have their target as the element losing focus. Stop propagation when
    // that is the previously focused element (activeElement) or a descendant (e.g. in shadow DOM).
    let isBlurFromActiveElement = (eventTarget)=>eventTarget === activeElement || activeElement != null && (0, _domHelpers.isNode)(eventTarget) && (0, _domfunctions.nodeContains)(activeElement, eventTarget);
    ignoreFocusEvent = true;
    let isRefocusing = false;
    let onBlur = (e)=>{
        if (isBlurFromActiveElement((0, _domfunctions.getEventTarget)(e)) || isRefocusing) e.stopImmediatePropagation();
    };
    let onFocusOut = (e)=>{
        if (isBlurFromActiveElement((0, _domfunctions.getEventTarget)(e)) || isRefocusing) {
            e.stopImmediatePropagation();
            // If there was no focusable ancestor, we don't expect a focus event.
            // Re-focus the original active element here.
            if (!target && !isRefocusing) {
                isRefocusing = true;
                (0, _focusWithoutScrolling.focusWithoutScrolling)(activeElement);
                cleanup();
            }
        }
    };
    let onFocus = (e)=>{
        if (isFocusMovingToTarget((0, _domfunctions.getEventTarget)(e)) || isRefocusing) e.stopImmediatePropagation();
    };
    let onFocusIn = (e)=>{
        if (isFocusMovingToTarget((0, _domfunctions.getEventTarget)(e)) || isRefocusing) {
            e.stopImmediatePropagation();
            if (!isRefocusing) {
                isRefocusing = true;
                (0, _focusWithoutScrolling.focusWithoutScrolling)(activeElement);
                cleanup();
            }
        }
    };
    root.addEventListener('blur', onBlur, true);
    root.addEventListener('focusout', onFocusOut, true);
    root.addEventListener('focusin', onFocusIn, true);
    root.addEventListener('focus', onFocus, true);
    let cleanup = ()=>{
        cancelAnimationFrame(raf);
        root.removeEventListener('blur', onBlur, true);
        root.removeEventListener('focusout', onFocusOut, true);
        root.removeEventListener('focusin', onFocusIn, true);
        root.removeEventListener('focus', onFocus, true);
        ignoreFocusEvent = false;
        isRefocusing = false;
    };
    let raf = requestAnimationFrame(cleanup);
    return cleanup;
}

},{"../utils/focusWithoutScrolling":"gcZ3w","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","../utils/isFocusable":"dLPRV","react":"gOP0N","../utils/useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dLPRV":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2025 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "isFocusable", ()=>isFocusable);
parcelHelpers.export(exports, "isTabbable", ()=>isTabbable);
var _domHelpers = require("./domHelpers");
var _isElementVisible = require("./isElementVisible");
const focusableElements = [
    'input:not([disabled]):not([type=hidden])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]:not([contenteditable^="false"])',
    'permission'
];
const FOCUSABLE_ELEMENT_SELECTOR = focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const TABBABLE_ELEMENT_SELECTOR = focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function isFocusable(element, options) {
    return element.matches(FOCUSABLE_ELEMENT_SELECTOR) && !isInert(element) && (options?.skipVisibilityCheck || (0, _isElementVisible.isElementVisible)(element));
}
function isTabbable(element) {
    return element.matches(TABBABLE_ELEMENT_SELECTOR) && (0, _isElementVisible.isElementVisible)(element) && !isInert(element);
}
function isInert(element) {
    let node = element;
    while(node != null){
        if (node instanceof (0, _domHelpers.getOwnerWindow)(node).HTMLElement && node.inert) return true;
        node = node.parentElement;
    }
    return false;
}

},{"./domHelpers":"cYkFa","./isElementVisible":"42Fr7","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"42Fr7":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2021 Adobe. All rights reserved.
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
 * Adapted from https://github.com/testing-library/jest-dom and
 * https://github.com/vuejs/vue-test-utils-next/.
 * Licensed under the MIT License.
 *
 * @param element - Element to evaluate for display or visibility.
 */ parcelHelpers.export(exports, "isElementVisible", ()=>isElementVisible);
var _domHelpers = require("./domHelpers");
const supportsCheckVisibility = typeof Element !== 'undefined' && 'checkVisibility' in Element.prototype;
function isStyleVisible(element) {
    const windowObject = (0, _domHelpers.getOwnerWindow)(element);
    if (!(element instanceof windowObject.HTMLElement) && !(element instanceof windowObject.SVGElement)) return false;
    let { display, visibility } = element.style;
    let isVisible = display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse';
    if (isVisible) {
        const { getComputedStyle } = (0, _domHelpers.getOwnerWindow)(element);
        let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
        isVisible = computedDisplay !== 'none' && computedVisibility !== 'hidden' && computedVisibility !== 'collapse';
    }
    return isVisible;
}
function isAttributeVisible(element, childElement) {
    return !element.hasAttribute('hidden') && // Ignore HiddenSelect when tree walking.
    !element.hasAttribute('data-react-aria-prevent-focus') && (element.nodeName === 'DETAILS' && childElement && childElement.nodeName !== 'SUMMARY' ? element.hasAttribute('open') : true);
}
function isElementVisible(element, childElement) {
    if (supportsCheckVisibility) return element.checkVisibility({
        visibilityProperty: true
    }) && !element.closest('[data-react-aria-prevent-focus]');
    return element.nodeName !== '#comment' && isStyleVisible(element) && isAttributeVisible(element, childElement) && (!element.parentElement || isElementVisible(element.parentElement, element));
}

},{"./domHelpers":"cYkFa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dtScK":[function(require,module,exports,__globalThis) {
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
// Original licensing for the following method can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/blob/3c713d513195a53788b3f8bb4b70279d68b15bcc/packages/react-interactions/events/src/dom/shared/index.js#L74-L87
// Keyboards, Assistive Technologies, and element.click() all produce a "virtual"
// click event. This is a method of inferring such clicks. Every browser except
// IE 11 only sets a zero value of "detail" for click events that are "virtual".
// However, IE 11 uses a zero value for all click events. For IE 11 we rely on
// the quirk that it produces click events that are of type PointerEvent, and
// where only the "virtual" click lacks a pointerType field.
parcelHelpers.export(exports, "isVirtualClick", ()=>isVirtualClick);
parcelHelpers.export(exports, "isVirtualPointerEvent", ()=>isVirtualPointerEvent);
var _platform = require("./platform");
function isVirtualClick(event) {
    // JAWS/NVDA with Firefox.
    if (event.pointerType === '' && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if ((0, _platform.isAndroid)() && event.pointerType) return event.type === 'click' && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
    // Talkback double tap from Windows Firefox touch screen press
    return !(0, _platform.isAndroid)() && event.width === 0 && event.height === 0 || (0, _platform.isAndroid)() && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse';
}

},{"./platform":"eBqgD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k2HOw":[function(require,module,exports,__globalThis) {
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
 * Delays a callback execution until all elements finished their transition.
 */ parcelHelpers.export(exports, "runAfterTransition", ()=>runAfterTransition);
var _domHelpers = require("./domHelpers");
var _domfunctions = require("./shadowdom/DOMFunctions");
// We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
const transitionsByElement = new Map();
const transitionCallbacks = new Set();
function isTransitionEvent(event) {
    return 'propertyName' in event;
}
function onTransitionStart(e) {
    let eventTarget = (0, _domfunctions.getEventTarget)(e);
    if (!isTransitionEvent(e) || !eventTarget) return;
    // Add the transitioning property to the list for this element.
    let transitions = transitionsByElement.get(eventTarget);
    if (!transitions) {
        transitions = new Set();
        transitionsByElement.set(eventTarget, transitions);
        // The transitioncancel event must be registered on the element itself, rather than as a global
        // event. This enables us to handle when the node is deleted from the document while it is transitioning.
        // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
        eventTarget.addEventListener('transitioncancel', onTransitionEnd, {
            once: true
        });
    }
    transitions.add(e.propertyName);
}
function onTransitionEnd(e) {
    let eventTarget = (0, _domfunctions.getEventTarget)(e);
    if (!isTransitionEvent(e) || !eventTarget) return;
    // Remove property from list of transitioning properties.
    let properties = transitionsByElement.get(eventTarget);
    if (!properties) return;
    properties.delete(e.propertyName);
    // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
    if (properties.size === 0) {
        eventTarget.removeEventListener('transitioncancel', onTransitionEnd);
        transitionsByElement.delete(eventTarget);
    }
    // If no transitioning elements, call all of the queued callbacks.
    if (transitionsByElement.size === 0) for (let callback of transitionCallbacks){
        callback(true);
        transitionCallbacks.delete(callback);
    }
}
function setupGlobalEvents() {
    (0, _domHelpers.addEvent)(document, 'transitionrun', onTransitionStart);
    (0, _domHelpers.addEvent)(document, 'transitionend', onTransitionEnd);
}
/**
 * Cleans up any elements that are no longer in the document.
 * This is necessary because we can't rely on transitionend events to fire
 * for elements that are removed from the document while transitioning.
 */ function cleanupDetachedElements() {
    for (const [eventTarget] of transitionsByElement)// Similar to `eventTarget instanceof Element && !eventTarget.isConnected`, but avoids
    // the explicit instanceof check, since it may be different in different contexts.
    if ('isConnected' in eventTarget && !eventTarget.isConnected) transitionsByElement.delete(eventTarget);
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') setupGlobalEvents();
    else (0, _domHelpers.addEvent)(document, 'DOMContentLoaded', setupGlobalEvents);
}
function runAfterTransition(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    let frame = window.requestAnimationFrame(()=>{
        cleanupDetachedElements();
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if (transitionsByElement.size === 0) return fn(false);
        transitionCallbacks.add(fn);
    });
    return ()=>{
        window.cancelAnimationFrame(frame);
        transitionCallbacks.delete(fn);
    };
}

},{"./domHelpers":"cYkFa","./shadowdom/DOMFunctions":"8kfpz","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9bXTE":[function(require,module,exports,__globalThis) {
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
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Handles focus events for the immediate target.
 * Focus events on child elements will be ignored.
 */ parcelHelpers.export(exports, "useFocus", ()=>useFocus);
var _react = require("react");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _domHelpers = require("../utils/domHelpers");
var _utils = require("./utils");
function useFocus(props) {
    let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
    const onBlur = (0, _react.useCallback)((e)=>{
        if ((0, _domfunctions.getEventTarget)(e) === e.currentTarget) {
            if (onBlurProp) onBlurProp(e);
            if (onFocusChange) onFocusChange(false);
            return true;
        }
    }, [
        onBlurProp,
        onFocusChange
    ]);
    const onSyntheticFocus = (0, _utils.useSyntheticBlurEvent)(onBlur);
    const onFocus = (0, _react.useCallback)((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        let eventTarget = (0, _domfunctions.getEventTarget)(e);
        const ownerDocument = (0, _domHelpers.getOwnerDocument)(eventTarget);
        const activeElement = ownerDocument ? (0, _domfunctions.getActiveElement)(ownerDocument) : (0, _domfunctions.getActiveElement)();
        if (eventTarget === e.currentTarget && eventTarget === activeElement) {
            if (onFocusProp) onFocusProp(e);
            if (onFocusChange) onFocusChange(true);
            onSyntheticFocus(e);
        }
    }, [
        onFocusChange,
        onFocusProp,
        onSyntheticFocus
    ]);
    return {
        focusProps: {
            onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : undefined,
            onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : undefined
        }
    };
}

},{"react":"gOP0N","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","./utils":"iOeVY","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aHm7i":[function(require,module,exports,__globalThis) {
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
 * Handles keyboard interactions for a focusable element.
 */ parcelHelpers.export(exports, "useKeyboard", ()=>useKeyboard);
var _chain = require("../utils/chain");
var _createEventHandler = require("./createEventHandler");
var _createKeyboardShortcutHandler = require("./createKeyboardShortcutHandler");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
function useKeyboard(props) {
    let { shortcuts, allowRepeats = false, allowComposing = false } = props;
    let onKeyDown;
    let onKeyUp;
    if (shortcuts) {
        let shortcutHandler = (0, _createKeyboardShortcutHandler.createKeyboardShortcutHandler)(shortcuts);
        let shortcutOnKeyDown = (0, _createEventHandler.createEventHandler)((e)=>{
            // If keyboard event didn't originate from a child of the current target,
            // then it's a React event coming through a portal. We should ignore it.
            if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) {
                e.continuePropagation();
                return;
            }
            if (e.nativeEvent?.repeat && !allowRepeats || e.nativeEvent?.isComposing && !allowComposing) {
                e.continuePropagation();
                return;
            }
            shortcutHandler(e);
        });
        let shortcutOnKeyUp = (0, _createEventHandler.createEventHandler)((e)=>{
            // If keyboard event didn't originate from a child of the current target,
            // then it's a React event coming through a portal. We should ignore it.
            if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) {
                e.continuePropagation();
                return;
            }
            if (e.nativeEvent?.repeat && !allowRepeats || e.nativeEvent?.isComposing && !allowComposing) {
                e.continuePropagation();
                return;
            }
            // implement shortcut handler on keyup, what should the map be called? or should it be another syntax on shortcuts?
            e.continuePropagation();
        });
        onKeyDown = props.onKeyDown ? (0, _chain.chain)(props.onKeyDown, shortcutOnKeyDown) : shortcutOnKeyDown;
        onKeyUp = props.onKeyUp ? (0, _chain.chain)(props.onKeyUp, shortcutOnKeyUp) : shortcutOnKeyUp;
    } else {
        onKeyDown = (0, _createEventHandler.createEventHandler)(props.onKeyDown);
        onKeyUp = (0, _createEventHandler.createEventHandler)(props.onKeyUp);
    }
    return {
        keyboardProps: props.isDisabled ? {} : {
            onKeyDown,
            onKeyUp
        }
    };
}

},{"../utils/chain":"bQmEj","./createEventHandler":"7haQV","./createKeyboardShortcutHandler":"fDbpK","../utils/shadowdom/DOMFunctions":"8kfpz","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7haQV":[function(require,module,exports,__globalThis) {
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
 * This function wraps a React event handler to make stopPropagation the default, and support
 * continuePropagation instead.
 */ parcelHelpers.export(exports, "createEventHandler", ()=>createEventHandler);
function createEventHandler(handler) {
    if (!handler) return undefined;
    return (e)=>{
        let shouldStopPropagation = true;
        // Preact passes native DOM events. Their fields are enumerable on the
        // prototype, so object spread alone drops key, target, and currentTarget.
        // Events constructed with defineProperty may also have non-enumerable own
        // fields. Copy both sets of fields while the event is being dispatched.
        let eventProps = {};
        let keys = new Set(Object.getOwnPropertyNames(e));
        for(let key in e)keys.add(key);
        for (let key of keys){
            let value = Reflect.get(e, key);
            eventProps[key] = typeof value === 'function' ? value.bind(e) : value;
        }
        let event = {
            ...e,
            ...eventProps,
            preventDefault () {
                e.preventDefault();
            },
            isDefaultPrevented () {
                return e.isDefaultPrevented();
            },
            stopPropagation () {
                shouldStopPropagation = true;
            },
            continuePropagation () {
                shouldStopPropagation = false;
                // nested createEventHandler might have set continue propagation so we should continue
                // propagation on wrappers
                if (typeof e.continuePropagation === 'function') e.continuePropagation();
            },
            isPropagationStopped () {
                return shouldStopPropagation;
            }
        };
        handler(event);
        // nested createEventHandler calls may already have stopped propagation
        if (shouldStopPropagation && !(typeof e.isPropagationStopped === 'function' && e.isPropagationStopped())) e.stopPropagation();
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fDbpK":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2025 Adobe. All rights reserved.
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
 * Builds the set of canonical modifier tokens for a binding.
 * `Mod` contributes Meta (Mac) or Ctrl (non-Mac); explicit Ctrl/Meta add those keys too.
 */ parcelHelpers.export(exports, "modifierSetFromParsed", ()=>modifierSetFromParsed);
/** Modifier set from a keydown event (native flags only). */ parcelHelpers.export(exports, "modifierSetFromEvent", ()=>modifierSetFromEvent);
/**
 * Parses a shortcut like `"Mod+Shift+z"`, `"Ctrl+Alt+Enter"`, or `"Escape"`.
 * Modifiers are case-insensitive; order does not matter. `control` is an alias for `ctrl`.
 */ parcelHelpers.export(exports, "parseKeyboardShortcut", ()=>parseKeyboardShortcut);
/** Canonical shortcut string for a binding (modifiers sorted: Alt, Ctrl, Meta, Shift, then key). */ parcelHelpers.export(exports, "canonicalKeyboardShortcut", ()=>canonicalKeyboardShortcut);
/** Canonical shortcut string for a keydown event. */ parcelHelpers.export(exports, "keyboardEventToCanonicalShortcut", ()=>keyboardEventToCanonicalShortcut);
/**
 * Returns a keydown handler that runs the action only for an exact modifier+key match.
 * Modifier order in the string does not matter (`Shift+Mod+a` ≡ `Mod+Shift+a`).
 * Any combination of **Shift**, **Alt**, **Ctrl**, **Meta**, and **Mod** is allowed; **Mod** means
 * Cmd on Apple platforms and Ctrl on Windows/Linux (same as before). **control** aliases **ctrl**.
 *
 * Duplicate bindings that normalize to the same shortcut: later object entries win.
 *
 * @example
 *   ```tsx
 *   let onKeyDown = createKeyboardShortcutHandler({
 *     'Mod+s': e => {
 *       e.preventDefault();
 *       save();
 *     },
 *     'Ctrl+Shift+k': () => palette(),
 *     'Meta+Alt+ArrowLeft': () => back()
 *   });
 *   ```;
 */ parcelHelpers.export(exports, "createKeyboardShortcutHandler", ()=>createKeyboardShortcutHandler);
var _platform = require("../utils/platform");
/** Modifier names in shortcut strings (case-insensitive). Order in the string does not matter. */ const MODIFIER_NAMES = new Set([
    'shift',
    'alt',
    'control',
    'meta',
    'mod' // OS dependent - Cmd on Mac, Control on Windows/Linux
]);
/** Canonical modifier order for stable keys (sorted, fixed order). */ const CANONICAL_MODIFIER_ORDER = [
    'Alt',
    'Control',
    'Meta',
    'Shift'
];
function modifierSetFromParsed(parsed) {
    let set = new Set();
    if (parsed.alt) set.add('Alt');
    if (parsed.shift) set.add('Shift');
    if (parsed.ctrl) set.add('Control');
    if (parsed.meta) set.add('Meta');
    if (parsed.mod) set.add((0, _platform.isMac)() ? 'Meta' : 'Control');
    return set;
}
function modifierSetFromEvent(e) {
    let set = new Set();
    if (e.altKey) set.add('Alt');
    if (e.ctrlKey) set.add('Control');
    if (e.metaKey) set.add('Meta');
    if (e.shiftKey) set.add('Shift');
    return set;
}
function sortedModifierTokens(set) {
    return CANONICAL_MODIFIER_ORDER.filter((name)=>set.has(name));
}
function parseKeyboardShortcut(spec) {
    let parts = spec.split('+').reduce((prev, part)=>{
        let lower = part.toLowerCase();
        if (MODIFIER_NAMES.has(lower)) {
            if (lower === 'shift') prev.shift = true;
            else if (lower === 'alt') prev.alt = true;
            else if (lower === 'control') prev.ctrl = true;
            else if (lower === 'meta') prev.meta = true;
            else if (lower === 'mod') prev.mod = true;
        } else prev.key = part;
        return prev;
    }, {
        shift: false,
        alt: false,
        ctrl: false,
        meta: false,
        mod: false,
        key: ''
    });
    if (parts.key === '') throw new Error(`Invalid keyboard shortcut: "${spec}". Must include exactly one non-modifier key (e.g. "a", "Enter", "ArrowDown"). Combine any of Shift, Alt, Ctrl, Meta, and Mod.`);
    return parts;
}
function normalizeEventKey(key) {
    return key.toLowerCase();
}
/** Short aliases for common keys (shortcut side, before match). */ const KEY_ALIASES = {
    space: ' ',
    esc: 'escape',
    del: 'delete',
    ins: 'insert',
    left: 'arrowleft',
    right: 'arrowright',
    up: 'arrowup',
    down: 'arrowdown',
    pageup: 'pageup',
    pagedown: 'pagedown'
};
/** Canonical key segment (lowercase); aliases like `down` → `arrowdown`. */ function canonicalKeyFromSpecKey(specKey) {
    let k = normalizeEventKey(specKey);
    let aliased = KEY_ALIASES[k];
    return aliased != null ? aliased : k;
}
function canonicalKeyboardShortcut(parsed) {
    let mods = sortedModifierTokens(modifierSetFromParsed(parsed));
    let key = canonicalKeyFromSpecKey(parsed.key);
    return mods.length > 0 ? `${mods.join('+')}+${key}` : key;
}
function keyboardEventToCanonicalShortcut(e) {
    let mods = sortedModifierTokens(modifierSetFromEvent(e));
    let key = normalizeEventKey(e.key);
    let prefix = mods.length > 0 ? `${mods.join('+')}+` : '';
    return prefix + key;
}
function createKeyboardShortcutHandler(bindings) {
    let map = new Map();
    for (let [spec, action] of Object.entries(bindings)){
        let parsed = parseKeyboardShortcut(spec);
        map.set(canonicalKeyboardShortcut(parsed), action);
    }
    return (e)=>{
        let canonical = keyboardEventToCanonicalShortcut(e);
        let action = map.get(canonical);
        let result = action?.(e);
        if (result === undefined && action !== undefined) result = {
            shouldContinuePropagation: false,
            shouldPreventDefault: true
        };
        else if (typeof result === 'boolean') result = {
            shouldContinuePropagation: !result,
            shouldPreventDefault: result
        };
        if (result?.shouldPreventDefault) e.preventDefault();
        if (!action || result?.shouldContinuePropagation) e.continuePropagation();
    };
}

},{"../utils/platform":"eBqgD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ec0NJ":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2021 Adobe. All rights reserved.
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
 * Offers an object ref for a given callback ref or an object ref. Especially
 * helfpul when passing forwarded refs (created using `React.forwardRef`) to
 * React Aria hooks.
 *
 * @param ref The original ref intended to be used.
 * @returns An object ref that updates the given ref.
 * @see https://react.dev/reference/react/forwardRef
 */ parcelHelpers.export(exports, "useObjectRef", ()=>useObjectRef);
var _react = require("react");
function useObjectRef(ref) {
    const objRef = (0, _react.useRef)(null);
    const cleanupRef = (0, _react.useRef)(undefined);
    const refEffect = (0, _react.useCallback)((instance)=>{
        if (typeof ref === 'function') {
            const refCallback = ref;
            const refCleanup = refCallback(instance);
            return ()=>{
                if (typeof refCleanup === 'function') refCleanup();
                else refCallback(null);
            };
        } else if (ref) {
            // oxlint-disable-next-line react/react-compiler
            ref.current = instance;
            return ()=>{
                ref.current = null;
            };
        }
    }, [
        ref
    ]);
    return (0, _react.useMemo)(()=>({
            get current () {
                return objRef.current;
            },
            set current (value){
                objRef.current = value;
                if (cleanupRef.current) {
                    cleanupRef.current();
                    cleanupRef.current = undefined;
                }
                if (value != null) cleanupRef.current = refEffect(value);
            }
        }), // oxlint-disable-next-line react/react-compiler
    [
        refEffect
    ]);
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8a0bK":[function(require,module,exports,__globalThis) {
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
// Syncs ref from context with ref passed to hook
parcelHelpers.export(exports, "useSyncRef", ()=>useSyncRef);
var _useLayoutEffect = require("./useLayoutEffect");
function useSyncRef(context, ref) {
    // oxlint-disable-next-line react/react-compiler
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (context && context.ref && ref) {
            // oxlint-disable-next-line react/react-compiler
            context.ref.current = ref.current;
            return ()=>{
                if (context.ref) // oxlint-disable-next-line react-hooks/exhaustive-deps
                context.ref.current = null;
            };
        }
    });
}

},{"./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jtWJJ":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "DEFAULT_SLOT", ()=>DEFAULT_SLOT);
parcelHelpers.export(exports, "Provider", ()=>Provider);
parcelHelpers.export(exports, "useRenderProps", ()=>useRenderProps);
/**
 * A helper function that accepts a user-provided render prop value (either a static value or a
 * function), and combines it with another value to create a final result.
 */ parcelHelpers.export(exports, "composeRenderProps", ()=>composeRenderProps);
parcelHelpers.export(exports, "useSlottedContext", ()=>useSlottedContext);
parcelHelpers.export(exports, "useContextProps", ()=>useContextProps);
parcelHelpers.export(exports, "useSlot", ()=>useSlot);
/**
 * Filters out `data-*` attributes to keep them from being passed down and duplicated.
 *
 * @param props
 */ parcelHelpers.export(exports, "removeDataAttributes", ()=>removeDataAttributes);
parcelHelpers.export(exports, "dom", ()=>dom);
var _jsxRuntime = require("preact/jsx-runtime");
var _mergeProps = require("react-aria/mergeProps");
var _mergeRefs = require("react-aria/mergeRefs");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useLayoutEffect = require("react-aria/private/utils/useLayoutEffect");
var _useObjectRef = require("react-aria/useObjectRef");
const DEFAULT_SLOT = Symbol('default');
function Provider({ values, children }) {
    for (let [Context, value] of values)// @ts-ignore
    children = /*#__PURE__*/ (0, _jsxRuntime.jsx)(Context.Provider, {
        value: value,
        children: children
    });
    return children;
}
function useRenderProps(props) {
    let { className, style, children, defaultClassName, defaultChildren, defaultStyle, values, render } = props;
    return (0, _react.useMemo)(()=>{
        let computedClassName;
        let computedStyle;
        let computedChildren;
        if (typeof className === 'function') computedClassName = className({
            ...values,
            defaultClassName
        });
        else computedClassName = className;
        if (typeof style === 'function') computedStyle = style({
            ...values,
            defaultStyle: defaultStyle || {}
        });
        else computedStyle = style;
        if (typeof children === 'function') computedChildren = children({
            ...values,
            defaultChildren
        });
        else if (children == null) computedChildren = defaultChildren;
        else computedChildren = children;
        return {
            className: computedClassName ?? defaultClassName,
            style: computedStyle || defaultStyle ? {
                ...defaultStyle,
                ...computedStyle
            } : undefined,
            children: computedChildren ?? defaultChildren,
            'data-rac': '',
            render: render ? (props)=>render(props, values) : undefined
        };
    }, [
        className,
        style,
        children,
        defaultClassName,
        defaultChildren,
        defaultStyle,
        values,
        render
    ]);
}
function composeRenderProps(// https://stackoverflow.com/questions/60898079/typescript-type-t-or-function-t-usage
value, wrap) {
    return (renderProps)=>wrap(typeof value === 'function' ? value(renderProps) : value, renderProps);
}
function useSlottedContext(context, slot) {
    let ctx = (0, _react.useContext)(context);
    if (slot === null) // An explicit `null` slot means don't use context.
    return null;
    if (ctx && typeof ctx === 'object' && 'slots' in ctx && ctx.slots) {
        let slotKey = slot || DEFAULT_SLOT;
        if (!ctx.slots[slotKey]) {
            let availableSlots = new Intl.ListFormat().format(Object.keys(ctx.slots).map((p)=>`"${p}"`));
            let errorMessage = slot ? `Invalid slot "${slot}".` : 'A slot prop is required.';
            throw new Error(`${errorMessage} Valid slot names are ${availableSlots}.`);
        }
        return ctx.slots[slotKey];
    }
    // @ts-ignore
    return ctx;
}
function useContextProps(props, ref, context) {
    let ctx = useSlottedContext(context, props.slot) || {};
    let { ref: contextRef, ...contextProps } = ctx;
    let mergedRef = (0, _useObjectRef.useObjectRef)((0, _react.useMemo)(()=>(0, _mergeRefs.mergeRefs)(ref, contextRef), [
        ref,
        contextRef
    ]));
    let mergedProps = (0, _mergeProps.mergeProps)(contextProps, props);
    // mergeProps does not merge `style`. Adding this there might be a breaking change.
    if ('style' in contextProps && contextProps.style && 'style' in props && props.style) {
        if (typeof contextProps.style === 'function' || typeof props.style === 'function') // @ts-ignore
        mergedProps.style = (renderProps)=>{
            let contextStyle = typeof contextProps.style === 'function' ? contextProps.style(renderProps) : contextProps.style;
            let defaultStyle = {
                ...renderProps.defaultStyle,
                ...contextStyle
            };
            let style = typeof props.style === 'function' ? props.style({
                ...renderProps,
                defaultStyle
            }) : props.style;
            return {
                ...defaultStyle,
                ...style
            };
        };
        else // @ts-ignore
        mergedProps.style = {
            ...contextProps.style,
            ...props.style
        };
    }
    return [
        mergedProps,
        mergedRef
    ];
}
function useSlot(initialState = true) {
    // Initial state is typically based on the parent having an aria-label or aria-labelledby.
    // If it does, this value should be false so that we don't update the state and cause a rerender when we go through the layoutEffect
    let [hasSlot, setHasSlot] = (0, _react.useState)(initialState);
    let hasRun = (0, _react.useRef)(false);
    // A callback ref which will run when the slotted element mounts.
    // This should happen before the useLayoutEffect below.
    let ref = (0, _react.useCallback)((el)=>{
        hasRun.current = true;
        setHasSlot(!!el);
    }, []);
    // If the callback hasn't been called, then reset to false.
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (!hasRun.current) setHasSlot(false);
    }, []);
    return [
        ref,
        hasSlot
    ];
}
function removeDataAttributes(props) {
    const prefix = /^(data-.*)$/;
    let filteredProps = {};
    for(const prop in props)if (!prefix.test(prop)) filteredProps[prop] = props[prop];
    return filteredProps;
}
function DOMElement(ElementType, props, forwardedRef) {
    let { render, ...otherProps } = props;
    let elementRef = (0, _react.useRef)(null);
    let ref = (0, _react.useMemo)(()=>(0, _mergeRefs.mergeRefs)(forwardedRef, elementRef), [
        forwardedRef,
        elementRef
    ]);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{}, [
        ElementType,
        render
    ]);
    let domProps = {
        ...otherProps,
        ref
    };
    if (render) return render(domProps, undefined);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(ElementType, domProps);
}
const domComponentCache = {};
const dom = new Proxy({}, {
    get (target, elementType) {
        if (typeof elementType !== 'string') return undefined;
        let res = domComponentCache[elementType];
        if (!res) {
            res = /*#__PURE__*/ (0, _react.forwardRef)(DOMElement.bind(null, elementType));
            domComponentCache[elementType] = res;
        }
        return res;
    }
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/mergeProps":"jycxS","react-aria/mergeRefs":"jspQh","react":"gOP0N","react-aria/private/utils/useLayoutEffect":"h7M6K","react-aria/useObjectRef":"ec0NJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iPJX7":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "HiddenContext", ()=>HiddenContext);
parcelHelpers.export(exports, "Hidden", ()=>Hidden);
/** Creates a component that forwards its ref and returns null if it is in a hidden subtree. */ // Note: this function is handled specially in the documentation generator. If you change it, you'll need to update DocsTransformer as well.
parcelHelpers.export(exports, "createHideableComponent", ()=>createHideableComponent);
/** Returns whether the component is in a hidden subtree. */ parcelHelpers.export(exports, "useIsHidden", ()=>useIsHidden);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
// React doesn't understand the <template> element, which doesn't have children like a normal element.
// It will throw an error during hydration when it expects the firstChild to contain content rendered
// on the server, when in reality, the browser will have placed this inside the `content` document fragment.
// This monkey patches the firstChild property for our special hidden template elements to work around this error.
// does the same for appendChild/removeChild/insertBefore as per the issue below
// See https://github.com/facebook/react/issues/19932
if (typeof HTMLTemplateElement !== 'undefined') {
    Object.defineProperty(HTMLTemplateElement.prototype, 'firstChild', {
        configurable: true,
        enumerable: true,
        get: function() {
            return this.content.firstChild;
        }
    });
    Object.defineProperty(HTMLTemplateElement.prototype, 'appendChild', {
        configurable: true,
        enumerable: true,
        value: function(node) {
            return this.content.appendChild(node);
        }
    });
    Object.defineProperty(HTMLTemplateElement.prototype, 'removeChild', {
        configurable: true,
        enumerable: true,
        value: function(node) {
            return this.content.removeChild(node);
        }
    });
    Object.defineProperty(HTMLTemplateElement.prototype, 'insertBefore', {
        configurable: true,
        enumerable: true,
        value: function(node, child) {
            return this.content.insertBefore(node, child);
        }
    });
}
const HiddenContext = /*#__PURE__*/ (0, _react.createContext)(false);
function Hidden(props) {
    let isHidden = (0, _react.useContext)(HiddenContext);
    if (isHidden) // Don't hide again if we are already hidden.
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {
        children: props.children
    });
    let children = /*#__PURE__*/ (0, _jsxRuntime.jsx)(HiddenContext.Provider, {
        value: true,
        children: props.children
    });
    // In SSR, portals are not supported by React. Instead, always render into a <template>
    // element, which the browser will never display to the user. In addition, the
    // content is not part of the accessible DOM tree, so it won't affect ids or other accessibility attributes.
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("template", {
        children: children
    });
}
function createHideableComponent(fn) {
    let Wrapper = (props, ref)=>{
        let isHidden = (0, _react.useContext)(HiddenContext);
        if (isHidden) return null;
        // oxlint-disable-next-line react/react-compiler
        return fn(props, ref);
    };
    // @ts-ignore - for react dev tools
    Wrapper.displayName = fn.displayName || fn.name;
    return (0, _react.forwardRef)(Wrapper);
}
function useIsHidden() {
    return (0, _react.useContext)(HiddenContext);
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hW9J5":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "ProgressBarContext", ()=>ProgressBarContext);
parcelHelpers.export(exports, "ProgressBar", ()=>ProgressBar);
var _jsxRuntime = require("preact/jsx-runtime");
var _useProgressBar = require("react-aria/useProgressBar");
var _number = require("react-stately/private/utils/number");
var _utils = require("./utils");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _label = require("./Label");
var _mergeProps = require("react-aria/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const ProgressBarContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ProgressBar = /*#__PURE__*/ (0, _react.forwardRef)(function ProgressBar(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, ProgressBarContext);
    let { value = 0, minValue = 0, maxValue = 100, isIndeterminate = false } = props;
    value = (0, _number.clamp)(value, minValue, maxValue);
    let [labelRef, label] = (0, _utils.useSlot)(!props['aria-label'] && !props['aria-labelledby']);
    let { progressBarProps, labelProps } = (0, _useProgressBar.useProgressBar)({
        ...props,
        label
    });
    let range = maxValue - minValue;
    // Calculate the width of the progress bar as a percentage
    let percentage = undefined;
    if (!isIndeterminate) {
        if (range === 0) percentage = 0;
        else percentage = (value - minValue) / range * 100;
    }
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-ProgressBar',
        values: {
            percentage,
            valueText: progressBarProps['aria-valuetext'],
            isIndeterminate
        }
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, progressBarProps),
        ref: ref,
        slot: props.slot || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _label.LabelContext).Provider, {
            value: {
                ...labelProps,
                ref: labelRef,
                elementType: 'span'
            },
            children: renderProps.children
        })
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/useProgressBar":"fsvpW","react-stately/private/utils/number":"aEFFO","./utils":"jtWJJ","react-aria/filterDOMProps":"h4XHF","./Label":"eI7Ae","react-aria/mergeProps":"jycxS","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fsvpW":[function(require,module,exports,__globalThis) {
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
 * Provides the accessibility implementation for a progress bar component.
 * Progress bars show either determinate or indeterminate progress of an operation
 * over time.
 */ parcelHelpers.export(exports, "useProgressBar", ()=>useProgressBar);
var _number = require("react-stately/private/utils/number");
var _filterDOMProps = require("../utils/filterDOMProps");
var _mergeProps = require("../utils/mergeProps");
var _useLabel = require("../label/useLabel");
var _useNumberFormatter = require("../i18n/useNumberFormatter");
function useProgressBar(props) {
    let { value = 0, minValue = 0, maxValue = 100, valueLabel, isIndeterminate, formatOptions = {
        style: 'percent'
    } } = props;
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    let { labelProps, fieldProps } = (0, _useLabel.useLabel)({
        ...props,
        // Progress bar is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    value = (0, _number.clamp)(value, minValue, maxValue);
    let range = maxValue - minValue;
    let percentage = range === 0 ? 0 : (value - minValue) / range;
    let formatter = (0, _useNumberFormatter.useNumberFormatter)(formatOptions);
    if (!isIndeterminate && !valueLabel) {
        let valueToFormat = formatOptions.style === 'percent' ? percentage : value;
        valueLabel = formatter.format(valueToFormat);
    }
    return {
        progressBarProps: (0, _mergeProps.mergeProps)(domProps, {
            ...fieldProps,
            'aria-valuenow': isIndeterminate ? undefined : value,
            'aria-valuemin': minValue,
            'aria-valuemax': maxValue,
            'aria-valuetext': isIndeterminate ? undefined : valueLabel,
            role: 'progressbar'
        }),
        labelProps
    };
}

},{"react-stately/private/utils/number":"aEFFO","../utils/filterDOMProps":"h4XHF","../utils/mergeProps":"jycxS","../label/useLabel":"kMUgu","../i18n/useNumberFormatter":"5T1hV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aEFFO":[function(require,module,exports,__globalThis) {
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
 */ /**
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest
 * valid step.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
parcelHelpers.export(exports, "roundToStepPrecision", ()=>roundToStepPrecision);
parcelHelpers.export(exports, "snapValueToStep", ()=>snapValueToStep);
/* Takes a value and rounds off to the number of digits. */ parcelHelpers.export(exports, "toFixedNumber", ()=>toFixedNumber);
function clamp(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function roundToStepPrecision(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function snapValueToStep(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = roundToStepPrecision(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor(roundToStepPrecision((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor(roundToStepPrecision(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = roundToStepPrecision(snappedValue, step);
    return snappedValue;
}
function toFixedNumber(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kMUgu":[function(require,module,exports,__globalThis) {
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
 * Provides the accessibility implementation for labels and their associated elements.
 * Labels provide context for user inputs.
 *
 * @param props - The props for labels and fields.
 */ parcelHelpers.export(exports, "useLabel", ()=>useLabel);
var _useId = require("../utils/useId");
var _useLabels = require("../utils/useLabels");
function useLabel(props) {
    let { id, label, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel, labelElementType = 'label' } = props;
    id = (0, _useId.useId)(id);
    let labelId = (0, _useId.useId)();
    let labelProps = {};
    if (label) {
        ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
        labelProps = {
            id: labelId,
            htmlFor: labelElementType === 'label' ? id : undefined
        };
    } else !ariaLabelledby && ariaLabel;
    let fieldProps = (0, _useLabels.useLabels)({
        id,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby
    });
    return {
        labelProps,
        fieldProps
    };
}

},{"../utils/useId":"fQAcb","../utils/useLabels":"8ZwLJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8ZwLJ":[function(require,module,exports,__globalThis) {
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
 * Merges aria-label and aria-labelledby into aria-labelledby when both exist.
 *
 * @param props - Aria label props.
 * @param defaultLabel - Default value for aria-label when not present.
 */ parcelHelpers.export(exports, "useLabels", ()=>useLabels);
var _useId = require("./useId");
function useLabels(props, defaultLabel) {
    let { id, 'aria-label': label, 'aria-labelledby': labelledBy } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = (0, _useId.useId)(id);
    if (labelledBy && label) {
        let ids = new Set([
            id,
            ...labelledBy.trim().split(/\s+/)
        ]);
        labelledBy = [
            ...ids
        ].join(' ');
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(' ');
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id,
        'aria-label': label,
        'aria-labelledby': labelledBy
    };
}

},{"./useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5T1hV":[function(require,module,exports,__globalThis) {
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
 * Provides localized number formatting for the current locale. Automatically updates when the
 * locale changes, and handles caching of the number formatter for performance.
 *
 * @param options - Formatting options.
 */ parcelHelpers.export(exports, "useNumberFormatter", ()=>useNumberFormatter);
var _number = require("@internationalized/number");
var _i18Nprovider = require("./I18nProvider");
var _react = require("react");
function useNumberFormatter(options = {}) {
    let { locale } = (0, _i18Nprovider.useLocale)();
    return (0, _react.useMemo)(()=>new (0, _number.NumberFormatter)(locale, options), [
        locale,
        options
    ]);
}

},{"@internationalized/number":"3OyUY","./I18nProvider":"czGuc","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3OyUY":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "NumberFormatter", ()=>$1dfb119a85e764e5$export$cc77c4ff7e8673c5);
parcelHelpers.export(exports, "numberFormatSignDisplayPolyfill", ()=>$1dfb119a85e764e5$export$711b50b3c525e0f2);
let $1dfb119a85e764e5$var$formatterCache = new Map();
let $1dfb119a85e764e5$var$supportsSignDisplay = false;
try {
    $1dfb119a85e764e5$var$supportsSignDisplay = new Intl.NumberFormat('de-DE', {
        signDisplay: 'exceptZero'
    }).resolvedOptions().signDisplay === 'exceptZero';
// eslint-disable-next-line no-empty
} catch  {}
let $1dfb119a85e764e5$var$supportsUnit = false;
try {
    $1dfb119a85e764e5$var$supportsUnit = new Intl.NumberFormat('de-DE', {
        style: 'unit',
        unit: 'degree'
    }).resolvedOptions().style === 'unit';
// eslint-disable-next-line no-empty
} catch  {}
// Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
// Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
// Values were determined by switching to each locale manually in Chrome.
const $1dfb119a85e764e5$var$UNITS = {
    degree: {
        narrow: {
            default: "\xb0",
            'ja-JP': " \u5EA6",
            'zh-TW': "\u5EA6",
            'sl-SI': " \xb0"
        }
    }
};
class $1dfb119a85e764e5$export$cc77c4ff7e8673c5 {
    constructor(locale, options = {}){
        this.numberFormatter = $1dfb119a85e764e5$var$getCachedNumberFormatter(locale, options);
        this.options = options;
    }
    /**
   * Formats a number value as a string, according to the locale and options provided to the
   * constructor.
   */ format(value) {
        let res = '';
        if (!$1dfb119a85e764e5$var$supportsSignDisplay && this.options.signDisplay != null) res = $1dfb119a85e764e5$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
        else res = this.numberFormatter.format(value);
        if (this.options.style === 'unit' && !$1dfb119a85e764e5$var$supportsUnit) {
            let { unit: unit, unitDisplay: unitDisplay = 'short', locale: locale } = this.resolvedOptions();
            if (!unit) return res;
            let values = $1dfb119a85e764e5$var$UNITS[unit]?.[unitDisplay];
            res += values[locale] || values.default;
        }
        return res;
    }
    /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */ formatToParts(value) {
        // TODO: implement signDisplay for formatToParts
        return this.numberFormatter.formatToParts(value);
    }
    /** Formats a number range as a string. */ formatRange(start, end) {
        if (typeof this.numberFormatter.formatRange === 'function') return this.numberFormatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return `${this.format(start)} \u{2013} ${this.format(end)}`;
    }
    /** Formats a number range as an array of parts. */ formatRangeToParts(start, end) {
        if (typeof this.numberFormatter.formatRangeToParts === 'function') return this.numberFormatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        let startParts = this.numberFormatter.formatToParts(start);
        let endParts = this.numberFormatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: 'startRange'
                })),
            {
                type: 'literal',
                value: " \u2013 ",
                source: 'shared'
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: 'endRange'
                }))
        ];
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let options = this.numberFormatter.resolvedOptions();
        if (!$1dfb119a85e764e5$var$supportsSignDisplay && this.options.signDisplay != null) options = {
            ...options,
            signDisplay: this.options.signDisplay
        };
        if (!$1dfb119a85e764e5$var$supportsUnit && this.options.style === 'unit') options = {
            ...options,
            style: 'unit',
            unit: this.options.unit,
            unitDisplay: this.options.unitDisplay
        };
        return options;
    }
}
function $1dfb119a85e764e5$var$getCachedNumberFormatter(locale, options = {}) {
    let { numberingSystem: numberingSystem } = options;
    if (numberingSystem && locale.includes('-nu-')) {
        if (!locale.includes('-u-')) locale += '-u-';
        locale += `-nu-${numberingSystem}`;
    }
    if (options.style === 'unit' && !$1dfb119a85e764e5$var$supportsUnit) {
        let { unit: unit, unitDisplay: unitDisplay = 'short' } = options;
        if (!unit) throw new Error('unit option must be provided with style: "unit"');
        if (!$1dfb119a85e764e5$var$UNITS[unit]?.[unitDisplay]) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
        options = {
            ...options,
            style: 'decimal'
        };
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($1dfb119a85e764e5$var$formatterCache.has(cacheKey)) return $1dfb119a85e764e5$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.NumberFormat(locale, options);
    $1dfb119a85e764e5$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
function $1dfb119a85e764e5$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
    if (signDisplay === 'auto') return numberFormat.format(num);
    else if (signDisplay === 'never') return numberFormat.format(Math.abs(num));
    else {
        let needsPositiveSign = false;
        if (signDisplay === 'always') needsPositiveSign = num > 0 || Object.is(num, 0);
        else if (signDisplay === 'exceptZero') {
            if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
            else needsPositiveSign = num > 0;
        }
        if (needsPositiveSign) {
            let negative = numberFormat.format(-num);
            let noSign = numberFormat.format(num);
            // ignore RTL/LTR marker character
            let minus = negative.replace(noSign, '').replace(/\u200e|\u061C/, '');
            if ([
                ...minus
            ].length !== 1) console.warn('@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case');
            let positive = negative.replace(noSign, '!!!').replace(minus, '+').replace('!!!', noSign);
            return positive;
        } else return numberFormat.format(num);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eI7Ae":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "LabelContext", ()=>LabelContext);
parcelHelpers.export(exports, "Label", ()=>Label);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _hidden = require("react-aria/private/collections/Hidden");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const LabelContext = /*#__PURE__*/ (0, _react.createContext)({});
const Label = /*#__PURE__*/ (0, _hidden.createHideableComponent)(function Label(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, LabelContext);
    let { elementType = 'label', ...labelProps } = props;
    let ElementType = (0, _utils.dom)[elementType];
    // @ts-ignore
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ElementType, {
        className: "react-aria-Label",
        ...labelProps,
        ref: ref
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/private/collections/Hidden":"iPJX7","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bP7um":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Determines whether a focus ring should be shown to indicate keyboard focus.
 * Focus rings are visible only when the user is interacting with a keyboard,
 * not with a mouse, touch, or other input methods.
 */ parcelHelpers.export(exports, "useFocusRing", ()=>useFocusRing);
var _useFocusVisible = require("../interactions/useFocusVisible");
var _react = require("react");
var _useFocus = require("../interactions/useFocus");
var _useFocusWithin = require("../interactions/useFocusWithin");
function useFocusRing(props = {}) {
    let { autoFocus = false, isTextInput, within } = props;
    let state = (0, _react.useRef)({
        isFocused: false,
        isFocusVisible: autoFocus || (0, _useFocusVisible.isFocusVisible)()
    });
    let [isFocused, setFocused] = (0, _react.useState)(false);
    let [isFocusVisibleState, setFocusVisible] = (0, _react.useState)(// oxlint-disable-next-line react/react-compiler
    ()=>state.current.isFocused && state.current.isFocusVisible);
    let updateState = (0, _react.useCallback)(()=>setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
    let onFocusChange = (0, _react.useCallback)((isFocused)=>{
        state.current.isFocused = isFocused;
        state.current.isFocusVisible = (0, _useFocusVisible.isFocusVisible)();
        setFocused(isFocused);
        updateState();
    }, [
        updateState
    ]);
    (0, _useFocusVisible.useFocusVisibleListener)((isFocusVisible)=>{
        state.current.isFocusVisible = isFocusVisible;
        updateState();
    }, [
        isTextInput,
        isFocused
    ], {
        enabled: isFocused,
        isTextInput
    });
    let { focusProps } = (0, _useFocus.useFocus)({
        isDisabled: within,
        onFocusChange
    });
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)({
        isDisabled: !within,
        onFocusWithinChange: onFocusChange
    });
    return {
        isFocused,
        isFocusVisible: isFocusVisibleState,
        focusProps: within ? focusWithinProps : focusProps
    };
}

},{"../interactions/useFocusVisible":"aBfUW","react":"gOP0N","../interactions/useFocus":"9bXTE","../interactions/useFocusWithin":"bkSQo","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bkSQo":[function(require,module,exports,__globalThis) {
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
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Handles focus events for the target and its descendants.
 */ parcelHelpers.export(exports, "useFocusWithin", ()=>useFocusWithin);
var _utils = require("./utils");
var _react = require("react");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _domHelpers = require("../utils/domHelpers");
var _useGlobalListeners = require("../utils/useGlobalListeners");
function useFocusWithin(props) {
    let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
    let state = (0, _react.useRef)({
        isFocusWithin: false
    });
    let { addGlobalListener, removeAllGlobalListeners } = (0, _useGlobalListeners.useGlobalListeners)();
    let onBlur = (0, _react.useCallback)((e)=>{
        // Ignore events bubbling through portals.
        if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) return;
        // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
        // when moving focus inside the element. Only trigger if the currentTarget doesn't
        // include the relatedTarget (where focus is moving).
        if (state.current.isFocusWithin && !(0, _domfunctions.nodeContains)(e.currentTarget, e.relatedTarget)) {
            state.current.isFocusWithin = false;
            removeAllGlobalListeners();
            if (onBlurWithin) onBlurWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(false);
        }
    }, [
        onBlurWithin,
        onFocusWithinChange,
        state,
        removeAllGlobalListeners
    ]);
    let onSyntheticFocus = (0, _utils.useSyntheticBlurEvent)(onBlur);
    let onFocus = (0, _react.useCallback)((e)=>{
        // Ignore events bubbling through portals.
        if (!(0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) return;
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        let eventTarget = (0, _domfunctions.getEventTarget)(e);
        const ownerDocument = (0, _domHelpers.getOwnerDocument)(eventTarget);
        const activeElement = (0, _domfunctions.getActiveElement)(ownerDocument);
        if (!state.current.isFocusWithin && activeElement === eventTarget) {
            if (onFocusWithin) onFocusWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(true);
            state.current.isFocusWithin = true;
            onSyntheticFocus(e);
            // Browsers don't fire blur events when elements are removed from the DOM.
            // However, if a focus event occurs outside the element we're tracking, we
            // can manually fire onBlur.
            let currentTarget = e.currentTarget;
            addGlobalListener(ownerDocument, 'focus', (e)=>{
                let eventTarget = (0, _domfunctions.getEventTarget)(e);
                if (state.current.isFocusWithin && !(0, _domfunctions.nodeContains)(currentTarget, eventTarget)) {
                    let nativeEvent = new ownerDocument.defaultView.FocusEvent('blur', {
                        relatedTarget: eventTarget
                    });
                    (0, _utils.setEventTarget)(nativeEvent, currentTarget);
                    let event = (0, _utils.createSyntheticEvent)(nativeEvent);
                    onBlur(event);
                }
            }, {
                capture: true
            });
        }
    }, [
        onFocusWithin,
        onFocusWithinChange,
        onSyntheticFocus,
        addGlobalListener,
        onBlur
    ]);
    if (isDisabled) return {
        focusWithinProps: {
            // These cannot be null, that would conflict in mergeProps
            onFocus: undefined,
            onBlur: undefined
        }
    };
    return {
        focusWithinProps: {
            onFocus,
            onBlur
        }
    };
}

},{"./utils":"iOeVY","react":"gOP0N","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","../utils/useGlobalListeners":"jsdt1","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jsdt1":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useGlobalListeners", ()=>useGlobalListeners);
var _react = require("react");
function useGlobalListeners() {
    let globalListeners = (0, _react.useRef)(new Map());
    let addGlobalListener = (0, _react.useCallback)((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = options?.once ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type,
            eventTarget,
            fn,
            options
        });
        eventTarget.addEventListener(type, fn, options);
    }, []);
    let removeGlobalListener = (0, _react.useCallback)((eventTarget, type, listener, options)=>{
        let fn = globalListeners.current.get(listener)?.fn || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (0, _react.useCallback)(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    (0, _react.useEffect)(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener,
        removeGlobalListener,
        removeAllGlobalListeners
    };
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2yLrj":[function(require,module,exports,__globalThis) {
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
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Handles pointer hover interactions for an element. Normalizes behavior
 * across browsers and platforms, and ignores emulated mouse events on touch devices.
 */ parcelHelpers.export(exports, "useHover", ()=>useHover);
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _domHelpers = require("../utils/domHelpers");
var _react = require("react");
var _useGlobalListeners = require("../utils/useGlobalListeners");
// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore these emulated events so they do not trigger hover behavior.
// See https://bugs.webkit.org/show_bug.cgi?id=214609.
let globalIgnoreEmulatedMouseEvents = false;
let hoverCount = 0;
function setGlobalIgnoreEmulatedMouseEvents() {
    globalIgnoreEmulatedMouseEvents = true;
    // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
    // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
    // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
    // the distant future because a user previously touched the element.
    setTimeout(()=>{
        globalIgnoreEmulatedMouseEvents = false;
    }, 500);
}
function handleGlobalPointerEvent(e) {
    if (e.pointerType === 'touch') setGlobalIgnoreEmulatedMouseEvents();
}
function setupGlobalTouchEvents() {
    let ownerDocument = (0, _domHelpers.getOwnerDocument)(null);
    if (typeof ownerDocument === 'undefined') return;
    if (hoverCount === 0) {
        if (typeof PointerEvent !== 'undefined') ownerDocument.addEventListener('pointerup', handleGlobalPointerEvent);
    }
    hoverCount++;
    return ()=>{
        hoverCount--;
        if (hoverCount > 0) return;
        if (typeof PointerEvent !== 'undefined') ownerDocument.removeEventListener('pointerup', handleGlobalPointerEvent);
    };
}
function useHover(props) {
    let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
    let [isHovered, setHovered] = (0, _react.useState)(false);
    let state = (0, _react.useRef)({
        isHovered: false,
        ignoreEmulatedMouseEvents: false,
        pointerType: '',
        target: null
    }).current;
    (0, _react.useEffect)(setupGlobalTouchEvents, []);
    let { addGlobalListener, removeAllGlobalListeners } = (0, _useGlobalListeners.useGlobalListeners)();
    let { hoverProps, triggerHoverEnd } = (0, _react.useMemo)(()=>{
        let triggerHoverStart = (event, pointerType)=>{
            state.pointerType = pointerType;
            if (isDisabled || pointerType === 'touch' || state.isHovered || !(0, _domfunctions.nodeContains)(event.currentTarget, (0, _domfunctions.getEventTarget)(event))) return;
            state.isHovered = true;
            let target = event.currentTarget;
            state.target = target;
            // When an element that is hovered over is removed, no pointerleave event is fired by the browser,
            // even though the originally hovered target may have shrunk in size so it is no longer hovered.
            // However, a pointerover event will be fired on the new target the mouse is over.
            // In Chrome this happens immediately. In Safari and Firefox, it happens upon moving the mouse one pixel.
            addGlobalListener((0, _domHelpers.getOwnerDocument)((0, _domfunctions.getEventTarget)(event)), 'pointerover', (e)=>{
                if (state.isHovered && state.target && !(0, _domfunctions.nodeContains)(state.target, (0, _domfunctions.getEventTarget)(e))) // oxlint-disable-next-line react/react-compiler
                triggerHoverEnd(e, e.pointerType);
            }, {
                capture: true
            });
            if (onHoverStart) onHoverStart({
                type: 'hoverstart',
                target,
                pointerType
            });
            if (onHoverChange) onHoverChange(true);
            setHovered(true);
        };
        let triggerHoverEnd = (event, pointerType)=>{
            let target = state.target;
            state.pointerType = '';
            state.target = null;
            if (pointerType === 'touch' || !state.isHovered || !target) return;
            state.isHovered = false;
            removeAllGlobalListeners();
            if (onHoverEnd) onHoverEnd({
                type: 'hoverend',
                target,
                pointerType
            });
            if (onHoverChange) onHoverChange(false);
            setHovered(false);
        };
        let hoverProps = {};
        if (typeof PointerEvent !== 'undefined') {
            hoverProps.onPointerEnter = (e)=>{
                if (globalIgnoreEmulatedMouseEvents && e.pointerType === 'mouse') return;
                triggerHoverStart(e, e.pointerType);
            };
            hoverProps.onPointerLeave = (e)=>{
                if (!isDisabled && (0, _domfunctions.nodeContains)(e.currentTarget, (0, _domfunctions.getEventTarget)(e))) triggerHoverEnd(e, e.pointerType);
            };
        } else var e, e1;
        return {
            hoverProps,
            triggerHoverEnd
        };
    }, [
        onHoverStart,
        onHoverChange,
        onHoverEnd,
        isDisabled,
        state,
        addGlobalListener,
        removeAllGlobalListeners
    ]);
    (0, _react.useEffect)(()=>{
        // Call the triggerHoverEnd as soon as isDisabled changes to true
        // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
        if (isDisabled) triggerHoverEnd({
            currentTarget: state.target
        }, state.pointerType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled
    ]);
    return {
        hoverProps,
        isHovered
    };
}

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","react":"gOP0N","../utils/useGlobalListeners":"jsdt1","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6UR4P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProgressCircle", ()=>ProgressCircle);
var _jsxRuntime = require("preact/jsx-runtime");
var _composeRenderPropsTs = require("../../../../vendor/react-aria-components/exports/composeRenderProps.ts");
var _progressBarTs = require("../../../../vendor/react-aria-components/exports/ProgressBar.ts");
'use client';
function ProgressCircle(props) {
    // SVG strokes are centered, so subtract half the stroke width from the radius to create an inner stroke.
    let strokeWidth = 4;
    let radius = `calc(50% - ${strokeWidth / 2}px)`;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _progressBarTs.ProgressBar), {
        ...props,
        style: (0, _composeRenderPropsTs.composeRenderProps)(props.style, (style)=>({
                ...style,
                width: props.size || 16,
                height: props.size || 16
            })),
        children: ({ percentage, isIndeterminate })=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("svg", {
                    fill: "none",
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 32 32",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("circle", {
                            cx: "50%",
                            cy: "50%",
                            r: radius,
                            stroke: "var(--highlight-pressed)",
                            strokeWidth: strokeWidth
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("circle", {
                            cx: "50%",
                            cy: "50%",
                            r: radius,
                            stroke: "var(--highlight-background)",
                            strokeWidth: strokeWidth,
                            // Normalize the path length to 100 so we can easily set stroke-dashoffset to a percentage.
                            pathLength: "100",
                            // Add extra gap between dashes so 0% works in Chrome.
                            strokeDasharray: "100 200",
                            strokeDashoffset: 100 - (isIndeterminate || percentage == null ? 25 : percentage),
                            strokeLinecap: "round",
                            style: {
                                rotate: '-90deg',
                                transformOrigin: 'center center'
                            },
                            children: isIndeterminate && /*#__PURE__*/ (0, _jsxRuntime.jsx)("animateTransform", {
                                attributeName: "transform",
                                type: "rotate",
                                dur: "0.75s",
                                values: "0;360",
                                repeatCount: "indefinite"
                            })
                        })
                    ]
                })
            })
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../vendor/react-aria-components/exports/composeRenderProps.ts":"jtWJJ","../../../../vendor/react-aria-components/exports/ProgressBar.ts":"hW9J5","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3agqr":[function() {},{}],"4vBmo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Link", ()=>Link);
var _jsxRuntime = require("preact/jsx-runtime");
var _linkTs = require("../../../../vendor/react-aria-components/exports/Link.ts");
var _linkCss = require("./Link.css");
'use client';
function Link(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _linkTs.Link), {
        ...props
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../vendor/react-aria-components/exports/Link.ts":"jQhdA","./Link.css":"6NQNq","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jQhdA":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "LinkContext", ()=>LinkContext);
parcelHelpers.export(exports, "Link", ()=>Link);
var _jsxRuntime = require("preact/jsx-runtime");
var _useLink = require("react-aria/useLink");
var _utils = require("./utils");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _mergeProps = require("react-aria/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useFocusRing = require("react-aria/useFocusRing");
var _useHover = require("react-aria/useHover");
const LinkContext = /*#__PURE__*/ (0, _react.createContext)(null);
const Link = /*#__PURE__*/ (0, _react.forwardRef)(function Link(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, LinkContext);
    let elementType = props.href && !props.isDisabled ? 'a' : 'span';
    let { linkProps, isPressed } = (0, _useLink.useLink)({
        ...props,
        elementType
    }, ref);
    let ElementType = (0, _utils.dom)[elementType];
    let { hoverProps, isHovered } = (0, _useHover.useHover)(props);
    let { focusProps, isFocused, isFocusVisible } = (0, _useFocusRing.useFocusRing)();
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-Link',
        values: {
            isCurrent: !!props['aria-current'],
            isDisabled: props.isDisabled || false,
            isPressed,
            isHovered,
            isFocused,
            isFocusVisible
        }
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ElementType, {
        ref: ref,
        slot: props.slot || undefined,
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, linkProps, hoverProps, focusProps),
        "data-focused": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-pressed": isPressed || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-current": !!props['aria-current'] || undefined,
        "data-disabled": props.isDisabled || undefined,
        children: renderProps.children
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/useLink":"7Vimq","./utils":"jtWJJ","react-aria/filterDOMProps":"h4XHF","react-aria/mergeProps":"jycxS","react":"gOP0N","react-aria/useFocusRing":"bP7um","react-aria/useHover":"2yLrj","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7Vimq":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a link component.
 * A link allows a user to navigate to another page or resource within a web page
 * or application.
 */ parcelHelpers.export(exports, "useLink", ()=>useLink);
var _filterDOMProps = require("../utils/filterDOMProps");
var _openLink = require("../utils/openLink");
var _mergeProps = require("../utils/mergeProps");
var _useFocusable = require("../interactions/useFocusable");
var _usePress = require("../interactions/usePress");
function useLink(props, ref) {
    let { elementType = 'a', onPress, onPressStart, onPressEnd, onPressChange, onClick, isDisabled, ...otherProps } = props;
    let linkProps = {};
    if (elementType !== 'a') linkProps = {
        role: 'link',
        tabIndex: !isDisabled ? 0 : undefined
    };
    let { focusableProps } = (0, _useFocusable.useFocusable)(props, ref);
    let { pressProps, isPressed } = (0, _usePress.usePress)({
        onPress,
        onPressStart,
        onPressEnd,
        onPressChange,
        onClick,
        isDisabled,
        ref
    });
    let domProps = (0, _filterDOMProps.filterDOMProps)(otherProps, {
        labelable: true
    });
    let interactionHandlers = (0, _mergeProps.mergeProps)(focusableProps, pressProps);
    let router = (0, _openLink.useRouter)();
    let routerLinkProps = (0, _openLink.useLinkProps)(props);
    return {
        isPressed,
        linkProps: (0, _mergeProps.mergeProps)(domProps, routerLinkProps, {
            ...interactionHandlers,
            ...linkProps,
            'aria-disabled': isDisabled || undefined,
            'aria-current': props['aria-current'],
            onClick: (e)=>{
                pressProps.onClick?.(e);
                (0, _openLink.handleLinkClick)(e, router, props.href, props.routerOptions);
            }
        })
    };
}

},{"../utils/filterDOMProps":"h4XHF","../utils/openLink":"gH3wl","../utils/mergeProps":"jycxS","../interactions/useFocusable":"6IFKj","../interactions/usePress":"3S2KR","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6NQNq":[function() {},{}],"lwcda":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Popover", ()=>Popover);
var _jsxRuntime = require("preact/jsx-runtime");
var _popoverTs = require("../../../../vendor/react-aria-components/exports/Popover.ts");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _popoverCss = require("./Popover.css");
'use client';
function Popover({ children, hideArrow, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverTs.Popover), {
        ...props,
        className: (0, _clsxDefault.default)('react-aria-Popover', props.className),
        children: ({ trigger })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    !hideArrow && trigger !== 'MenuTrigger' && trigger !== 'SubmenuTrigger' && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverTs.OverlayArrow), {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("svg", {
                            width: 12,
                            height: 12,
                            viewBox: "0 0 12 12",
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                                d: "M0 0 L6 6 L12 0"
                            })
                        })
                    }),
                    children
                ]
            })
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../vendor/react-aria-components/exports/Popover.ts":[["OverlayArrow","7uQK8"],["Popover","i9eo9"]],"clsx":"5gQI0","./Popover.css":"cXbjk","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7uQK8":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "OverlayArrowContext", ()=>OverlayArrowContext);
parcelHelpers.export(exports, "OverlayArrow", ()=>OverlayArrow);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const OverlayArrowContext = /*#__PURE__*/ (0, _react.createContext)({
    placement: 'bottom'
});
const OverlayArrow = /*#__PURE__*/ (0, _react.forwardRef)(function OverlayArrow(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, OverlayArrowContext);
    let placement = props.placement;
    let style = {
        position: 'absolute',
        transform: placement === 'top' || placement === 'bottom' ? 'translateX(-50%)' : 'translateY(-50%)'
    };
    if (placement != null) style[placement] = '100%';
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-OverlayArrow',
        values: {
            placement
        }
    });
    // remove undefined values from renderProps.style object so that it can be
    // spread merged with the other style object
    if (renderProps.style) Object.keys(renderProps.style).forEach((key)=>renderProps.style[key] === undefined && delete renderProps.style[key]);
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...DOMProps,
        ...renderProps,
        style: {
            ...style,
            ...renderProps.style
        },
        ref: ref,
        "data-placement": placement
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/filterDOMProps":"h4XHF","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cXbjk":[function() {},{}],"f1ESp":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "HeaderContext", ()=>HeaderContext);
parcelHelpers.export(exports, "Header", ()=>Header);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _collectionBuilder = require("react-aria/CollectionBuilder");
var _baseCollection = require("react-aria/private/collections/BaseCollection");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const HeaderContext = /*#__PURE__*/ (0, _react.createContext)({});
const Header = /*#__PURE__*/ (0, _collectionBuilder.createLeafComponent)((0, _baseCollection.HeaderNode), function Header(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, HeaderContext);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).header, {
        className: "react-aria-Header",
        ...props,
        ref: ref,
        children: props.children
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/CollectionBuilder":"kFD1B","react-aria/private/collections/BaseCollection":"imRDY","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9g4G2":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a menu component.
 * A menu displays a list of actions or options that a user can choose.
 *
 * @param props - Props for the menu.
 * @param state - State for the menu, as returned by `useListState`.
 */ parcelHelpers.export(exports, "useMenu", ()=>useMenu);
var _filterDOMProps = require("../utils/filterDOMProps");
var _utils = require("./utils");
var _mergeProps = require("../utils/mergeProps");
var _useSelectableList = require("../selection/useSelectableList");
function useMenu(props, state, ref) {
    let { shouldFocusWrap = true, onKeyDown, onKeyUp, ...otherProps } = props;
    !props['aria-label'] && props['aria-labelledby'];
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    let { listProps } = (0, _useSelectableList.useSelectableList)({
        ...otherProps,
        ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        shouldFocusWrap,
        linkBehavior: 'override'
    });
    (0, _utils.menuData).set(state, {
        onClose: props.onClose,
        onAction: props.onAction,
        shouldUseVirtualFocus: props.shouldUseVirtualFocus
    });
    return {
        menuProps: (0, _mergeProps.mergeProps)(domProps, {
            onKeyDown,
            onKeyUp
        }, {
            role: 'menu',
            ...listProps,
            onKeyDown: (e)=>{
                // don't clear the menu selected keys if the user is presses escape since escape closes the menu
                if (e.key !== 'Escape' || props.shouldUseVirtualFocus) listProps.onKeyDown?.(e);
            }
        })
    };
}

},{"../utils/filterDOMProps":"h4XHF","./utils":"e7rvB","../utils/mergeProps":"jycxS","../selection/useSelectableList":"kK5el","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"e7rvB":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "menuData", ()=>menuData);
const menuData = new WeakMap();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kK5el":[function(require,module,exports,__globalThis) {
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
 * Handles interactions with a selectable list.
 */ parcelHelpers.export(exports, "useSelectableList", ()=>useSelectableList);
var _useSelectableCollection = require("./useSelectableCollection");
var _listKeyboardDelegate = require("./ListKeyboardDelegate");
var _useCollator = require("../i18n/useCollator");
var _react = require("react");
function useSelectableList(props) {
    let { selectionManager, collection, disabledKeys, ref, keyboardDelegate, layoutDelegate, orientation } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = (0, _useCollator.useCollator)({
        usage: 'search',
        sensitivity: 'base'
    });
    let disabledBehavior = selectionManager.disabledBehavior;
    let delegate = (0, _react.useMemo)(()=>keyboardDelegate || new (0, _listKeyboardDelegate.ListKeyboardDelegate)({
            collection,
            disabledKeys,
            disabledBehavior,
            ref,
            collator,
            layoutDelegate,
            orientation
        }), [
        keyboardDelegate,
        layoutDelegate,
        collection,
        disabledKeys,
        ref,
        collator,
        disabledBehavior,
        orientation
    ]);
    let { collectionProps } = (0, _useSelectableCollection.useSelectableCollection)({
        ...props,
        ref,
        selectionManager,
        keyboardDelegate: delegate
    });
    return {
        listProps: collectionProps
    };
}

},{"./useSelectableCollection":"cg1hz","./ListKeyboardDelegate":"hxzwH","../i18n/useCollator":"ghoIN","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hxzwH":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "ListKeyboardDelegate", ()=>ListKeyboardDelegate);
var _domlayoutDelegate = require("./DOMLayoutDelegate");
var _utils = require("./utils");
var _isScrollable = require("../utils/isScrollable");
class ListKeyboardDelegate {
    collection;
    disabledKeys;
    disabledBehavior;
    ref;
    collator;
    layout;
    orientation;
    direction;
    layoutDelegate;
    constructor(...args){
        if (args.length === 1) {
            let opts = args[0];
            this.collection = opts.collection;
            this.ref = opts.ref;
            this.collator = opts.collator;
            this.disabledKeys = opts.disabledKeys || new Set();
            this.disabledBehavior = opts.disabledBehavior || 'all';
            this.orientation = opts.orientation || 'vertical';
            this.direction = opts.direction;
            this.layout = opts.layout || 'stack';
            this.layoutDelegate = opts.layoutDelegate || new (0, _domlayoutDelegate.DOMLayoutDelegate)(opts.ref);
        } else {
            this.collection = args[0];
            this.disabledKeys = args[1];
            this.ref = args[2];
            this.collator = args[3];
            this.layout = 'stack';
            this.orientation = 'vertical';
            this.disabledBehavior = 'all';
            this.layoutDelegate = new (0, _domlayoutDelegate.DOMLayoutDelegate)(this.ref);
        }
        // If this is a vertical stack, remove the left/right methods completely
        // so they aren't called by useDroppableCollection.
        if (this.layout === 'stack' && this.orientation === 'vertical') {
            this.getKeyLeftOf = undefined;
            this.getKeyRightOf = undefined;
        }
    }
    isDisabled(item) {
        return this.disabledBehavior === 'all' && (item.props?.isDisabled || this.disabledKeys.has(item.key)) && item.props?.disabledBehavior !== 'selection';
    }
    findNextNonDisabled(key, getNext, includeDisabled = false) {
        let nextKey = key;
        while(nextKey != null){
            let item = this.collection.getItem(nextKey);
            if (item?.type === 'item' && (includeDisabled || !this.isDisabled(item))) return nextKey;
            nextKey = getNext(nextKey);
        }
        return null;
    }
    getNextKey(key, options) {
        let nextKey = key;
        nextKey = this.collection.getKeyAfter(nextKey);
        return this.findNextNonDisabled(nextKey, (key)=>this.collection.getKeyAfter(key), options?.includeDisabled);
    }
    getPreviousKey(key, options) {
        let nextKey = key;
        nextKey = this.collection.getKeyBefore(nextKey);
        return this.findNextNonDisabled(nextKey, (key)=>this.collection.getKeyBefore(key), options?.includeDisabled);
    }
    findKey(key, nextKey, shouldSkip) {
        let tempKey = key;
        let itemRect = this.layoutDelegate.getItemRect(tempKey);
        if (!itemRect || tempKey == null) return null;
        // Find the item above or below in the same column.
        let prevRect = itemRect;
        do {
            tempKey = nextKey(tempKey);
            if (tempKey == null) break;
            itemRect = this.layoutDelegate.getItemRect(tempKey);
        }while (itemRect && shouldSkip(prevRect, itemRect) && tempKey != null);
        return tempKey;
    }
    isSameRow(prevRect, itemRect) {
        return prevRect.y === itemRect.y || prevRect.x !== itemRect.x;
    }
    isSameColumn(prevRect, itemRect) {
        return prevRect.x === itemRect.x || prevRect.y !== itemRect.y;
    }
    // checks to see if the next/prev key is spatially above/below the current key. If not, that means we are in
    // a reversed column layout and need to adjust appropriately
    // TODO: still need to see how this works with virtualizer once there is handling for the reverse layout
    // this felt like a simpler approach then changing getKeyAbove/Below to be purely spatial calculations
    isReversed(key) {
        let nextKey = this.getNextKey(key);
        let currentEl = (0, _utils.getItemElement)(this.ref, key);
        if (nextKey != null) {
            let nextEl = (0, _utils.getItemElement)(this.ref, nextKey);
            if (!currentEl || !nextEl) return false;
            return currentEl.getBoundingClientRect().top > nextEl.getBoundingClientRect().top;
        }
        let prevKey = this.getPreviousKey(key);
        if (prevKey != null) {
            let prevEl = (0, _utils.getItemElement)(this.ref, prevKey);
            if (!currentEl || !prevEl) return false;
            return prevEl.getBoundingClientRect().top > currentEl.getBoundingClientRect().top;
        }
        return false;
    }
    getKeyBelow(key, options) {
        if (this.layout === 'grid' && this.orientation === 'vertical') return this.findKey(key, (key)=>this.getNextKey(key, options), this.isSameRow);
        else if (this.orientation === 'vertical') return this.isReversed(key) ? this.getPreviousKey(key, options) : this.getNextKey(key, options);
        else return this.getNextKey(key, options);
    }
    getKeyAbove(key, options) {
        if (this.layout === 'grid' && this.orientation === 'vertical') return this.findKey(key, (key)=>this.getPreviousKey(key, options), this.isSameRow);
        else if (this.orientation === 'vertical') return this.isReversed(key) ? this.getNextKey(key, options) : this.getPreviousKey(key, options);
        else return this.getPreviousKey(key, options);
    }
    getNextColumn(key, right, options) {
        return right ? this.getPreviousKey(key, options) : this.getNextKey(key, options);
    }
    getKeyRightOf(key, options) {
        // This is a temporary solution for CardView until we refactor useSelectableCollection.
        // https://github.com/orgs/adobe/projects/19/views/32?pane=issue&itemId=77825042
        let layoutDelegateMethod = this.direction === 'ltr' ? 'getKeyRightOf' : 'getKeyLeftOf';
        if (this.layoutDelegate[layoutDelegateMethod]) {
            key = this.layoutDelegate[layoutDelegateMethod](key);
            return this.findNextNonDisabled(key, (key)=>this.layoutDelegate[layoutDelegateMethod](key), options?.includeDisabled);
        }
        if (this.layout === 'grid') {
            if (this.orientation === 'vertical') return this.getNextColumn(key, this.direction === 'rtl', options);
            else return this.findKey(key, (key)=>this.getNextColumn(key, this.direction === 'rtl', options), this.isSameColumn);
        } else if (this.orientation === 'horizontal') return this.getNextColumn(key, this.direction === 'rtl', options);
        return null;
    }
    getKeyLeftOf(key, options) {
        let layoutDelegateMethod = this.direction === 'ltr' ? 'getKeyLeftOf' : 'getKeyRightOf';
        if (this.layoutDelegate[layoutDelegateMethod]) {
            key = this.layoutDelegate[layoutDelegateMethod](key);
            return this.findNextNonDisabled(key, (key)=>this.layoutDelegate[layoutDelegateMethod](key), options?.includeDisabled);
        }
        if (this.layout === 'grid') {
            if (this.orientation === 'vertical') return this.getNextColumn(key, this.direction === 'ltr', options);
            else return this.findKey(key, (key)=>this.getNextColumn(key, this.direction === 'ltr', options), this.isSameColumn);
        } else if (this.orientation === 'horizontal') return this.getNextColumn(key, this.direction === 'ltr', options);
        return null;
    }
    getFirstKey() {
        let key = this.collection.getFirstKey();
        return this.findNextNonDisabled(key, (key)=>this.collection.getKeyAfter(key));
    }
    getLastKey() {
        let key = this.collection.getLastKey();
        return this.findNextNonDisabled(key, (key)=>this.collection.getKeyBefore(key));
    }
    getKeyPageAbove(key) {
        let menu = this.ref.current;
        let itemRect = this.layoutDelegate.getItemRect(key);
        if (!itemRect) return null;
        let reversed = this.isReversed(key);
        if (menu && !(0, _isScrollable.isScrollable)(menu)) return this.getFirstKey();
        let nextKey = key;
        if (this.orientation === 'horizontal') {
            let pageX = Math.max(0, itemRect.x + itemRect.width - this.layoutDelegate.getVisibleRect().width);
            while(itemRect && itemRect.x > pageX && nextKey != null){
                nextKey = this.getKeyAbove(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        } else {
            let visibleRect = this.layoutDelegate.getVisibleRect();
            // column reverse makes y negative for items so we need to instead do current pos - height instead
            let pageY = reversed ? itemRect.y - visibleRect.height : Math.max(0, itemRect.y + itemRect.height - visibleRect.height);
            while(itemRect && itemRect.y > pageY && nextKey != null){
                nextKey = this.getKeyAbove(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        }
        return nextKey ?? (reversed ? this.getLastKey() : this.getFirstKey());
    }
    getKeyPageBelow(key) {
        let menu = this.ref.current;
        let itemRect = this.layoutDelegate.getItemRect(key);
        if (!itemRect) return null;
        let reversed = this.isReversed(key);
        if (menu && !(0, _isScrollable.isScrollable)(menu)) return this.getLastKey();
        let nextKey = key;
        if (this.orientation === 'horizontal') {
            let pageX = Math.min(this.layoutDelegate.getContentSize().width, itemRect.x - itemRect.width + this.layoutDelegate.getVisibleRect().width);
            while(itemRect && itemRect.x < pageX && nextKey != null){
                nextKey = this.getKeyBelow(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        } else {
            let pageY = Math.min(this.layoutDelegate.getContentSize().height, itemRect.y - itemRect.height + this.layoutDelegate.getVisibleRect().height);
            while(itemRect && itemRect.y < pageY && nextKey != null){
                nextKey = this.getKeyBelow(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        }
        return nextKey ?? (reversed ? this.getFirstKey() : this.getLastKey());
    }
    getKeyForSearch(search, fromKey) {
        if (!this.collator) return null;
        let collection = this.collection;
        let key = fromKey || this.getFirstKey();
        while(key != null){
            let item = collection.getItem(key);
            if (!item) return null;
            let substring = item.textValue.slice(0, search.length);
            if (item.textValue && this.collator.compare(substring, search) === 0) return key;
            key = this.getNextKey(key);
        }
        return null;
    }
}

},{"./DOMLayoutDelegate":"kvCTu","./utils":"jwa0D","../utils/isScrollable":"2UC33","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kvCTu":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "DOMLayoutDelegate", ()=>DOMLayoutDelegate);
var _utils = require("./utils");
class DOMLayoutDelegate {
    ref;
    constructor(ref){
        this.ref = ref;
    }
    getItemRect(key) {
        let container = this.ref.current;
        if (!container) return null;
        let item = key != null ? (0, _utils.getItemElement)(this.ref, key) : null;
        if (!item) return null;
        let containerRect = container.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();
        return {
            x: itemRect.left - containerRect.left - container.clientLeft + container.scrollLeft,
            y: itemRect.top - containerRect.top - container.clientTop + container.scrollTop,
            width: itemRect.width,
            height: itemRect.height
        };
    }
    getContentSize() {
        let container = this.ref.current;
        return {
            width: container?.scrollWidth ?? 0,
            height: container?.scrollHeight ?? 0
        };
    }
    getVisibleRect() {
        let container = this.ref.current;
        return {
            x: container?.scrollLeft ?? 0,
            y: container?.scrollTop ?? 0,
            width: container?.clientWidth ?? 0,
            height: container?.clientHeight ?? 0
        };
    }
}

},{"./utils":"jwa0D","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2UC33":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "isScrollable", ()=>isScrollable);
function isScrollable(node, checkForOverflow) {
    if (!node) return false;
    let style = window.getComputedStyle(node);
    let root = document.scrollingElement || document.documentElement;
    let isScrollable = /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
    // Root element has `visible` overflow by default, but is scrollable nonetheless.
    if (node === root && style.overflow !== 'hidden') isScrollable = true;
    if (isScrollable && checkForOverflow) isScrollable = node.scrollHeight !== node.clientHeight || node.scrollWidth !== node.clientWidth;
    return isScrollable;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ghoIN":[function(require,module,exports,__globalThis) {
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
 * Provides localized string collation for the current locale. Automatically updates when the locale
 * changes, and handles caching of the collator for performance.
 *
 * @param options - Collator options.
 */ parcelHelpers.export(exports, "useCollator", ()=>useCollator);
var _i18Nprovider = require("./I18nProvider");
let cache = new Map();
function useCollator(options) {
    let { locale } = (0, _i18Nprovider.useLocale)();
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if (cache.has(cacheKey)) return cache.get(cacheKey);
    let formatter = new Intl.Collator(locale, options);
    cache.set(cacheKey, formatter);
    return formatter;
}

},{"./I18nProvider":"czGuc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6FWTA":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for an item in a menu.
 * See `useMenu` for more details about menus.
 *
 * @param props - Props for the item.
 * @param state - State for the menu, as returned by `useTreeState`.
 */ parcelHelpers.export(exports, "useMenuItem", ()=>useMenuItem);
var _filterDOMProps = require("../utils/filterDOMProps");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _getItemCount = require("react-stately/private/collections/getItemCount");
var _openLink = require("../utils/openLink");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _utils = require("./utils");
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _useFocusable = require("../interactions/useFocusable");
var _useHover = require("../interactions/useHover");
var _useKeyboard = require("../interactions/useKeyboard");
var _usePress = require("../interactions/usePress");
var _useSelectableItem = require("../selection/useSelectableItem");
var _useId = require("../utils/useId");
function useMenuItem(props, state, ref) {
    let { id, key, closeOnSelect, shouldCloseOnSelect, isVirtualized, 'aria-haspopup': hasPopup, onPressStart, onPressUp: pressUpProp, onPress, onPressChange: pressChangeProp, onPressEnd, onClick: onClickProp, onHoverStart: hoverStartProp, onHoverChange, onHoverEnd, onKeyDown, onKeyUp, onFocus, onFocusChange, onBlur, selectionManager = state.selectionManager } = props;
    let isTrigger = !!hasPopup;
    let isTriggerExpanded = isTrigger && props['aria-expanded'] === 'true';
    let isDisabled = props.isDisabled ?? selectionManager.isDisabled(key);
    let isSelected = props.isSelected ?? selectionManager.isSelected(key);
    let data = (0, _utils.menuData).get(state);
    let item = state.collection.getItem(key);
    let onClose = props.onClose || data.onClose;
    let router = (0, _openLink.useRouter)();
    let performAction = ()=>{
        if (isTrigger) return;
        if (item?.props?.onAction) item.props.onAction();
        else if (props.onAction) props.onAction(key);
        if (data.onAction) {
            // Must reassign to variable otherwise `this` binding gets messed up. Something to do with WeakMap.
            let onAction = data.onAction;
            onAction(key, item?.value);
        }
    };
    let role = 'menuitem';
    if (!isTrigger) {
        if (selectionManager.selectionMode === 'single') role = 'menuitemradio';
        else if (selectionManager.selectionMode === 'multiple') role = 'menuitemcheckbox';
    }
    let labelId = (0, _useId.useSlotId)();
    let descriptionId = (0, _useId.useSlotId)();
    let keyboardId = (0, _useId.useSlotId)();
    let ariaProps = {
        id,
        'aria-disabled': isDisabled || undefined,
        role,
        'aria-label': props['aria-label'],
        'aria-labelledby': labelId,
        'aria-describedby': [
            props['aria-describedby'],
            descriptionId,
            keyboardId
        ].filter(Boolean).join(' ') || undefined,
        'aria-controls': props['aria-controls'],
        'aria-haspopup': hasPopup,
        'aria-expanded': props['aria-expanded']
    };
    if (selectionManager.selectionMode !== 'none' && !isTrigger) ariaProps['aria-checked'] = isSelected;
    if (isVirtualized) {
        let index = Number(item?.index);
        ariaProps['aria-posinset'] = Number.isNaN(index) ? undefined : index + 1;
        ariaProps['aria-setsize'] = (0, _getItemCount.getItemCount)(state.collection);
    }
    let isPressedRef = (0, _react.useRef)(false);
    let onPressChange = (isPressed)=>{
        pressChangeProp?.(isPressed);
        isPressedRef.current = isPressed;
    };
    let interaction = (0, _react.useRef)(null);
    let onPressUp = (e)=>{
        if (e.pointerType !== 'keyboard') interaction.current = {
            pointerType: e.pointerType
        };
        // If interacting with mouse, allow the user to mouse down on the trigger button,
        // drag, and release over an item (matching native behavior).
        if (e.pointerType === 'mouse') {
            if (!isPressedRef.current) e.target.click();
        }
        pressUpProp?.(e);
    };
    let onClick = (e)=>{
        onClickProp?.(e);
        performAction();
        (0, _openLink.handleLinkClick)(e, router, item.props.href, item?.props.routerOptions);
        let shouldClose = interaction.current?.pointerType === 'keyboard' ? interaction.current?.key === 'Enter' || selectionManager.selectionMode === 'none' || selectionManager.isLink(key) : selectionManager.selectionMode !== 'multiple' || selectionManager.isLink(key);
        shouldClose = shouldCloseOnSelect ?? closeOnSelect ?? shouldClose;
        if (onClose && !isTrigger && shouldClose) onClose();
        interaction.current = null;
    };
    let { itemProps, isFocused } = (0, _useSelectableItem.useSelectableItem)({
        id,
        selectionManager: selectionManager,
        key,
        ref,
        shouldSelectOnPressUp: true,
        allowsDifferentPressOrigin: true,
        // Disable all handling of links in useSelectable item
        // because we handle it ourselves. The behavior of menus
        // is slightly different from other collections because
        // actions are performed on key down rather than key up.
        linkBehavior: 'none',
        shouldUseVirtualFocus: data.shouldUseVirtualFocus
    });
    let { pressProps, isPressed } = (0, _usePress.usePress)({
        onPressStart,
        onPress,
        onPressUp,
        onPressChange,
        onPressEnd,
        isDisabled
    });
    let { hoverProps } = (0, _useHover.useHover)({
        isDisabled,
        onHoverStart (e) {
            // Hovering over an already expanded sub dialog trigger should keep focus in the dialog.
            if (!(0, _useFocusVisible.isFocusVisible)() && !(isTriggerExpanded && hasPopup)) {
                selectionManager.setFocused(true);
                selectionManager.setFocusedKey(key);
            }
            hoverStartProp?.(e);
        },
        onHoverChange,
        onHoverEnd
    });
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            ' ': (e)=>{
                interaction.current = {
                    pointerType: 'keyboard',
                    key: ' '
                };
                (0, _domfunctions.getEventTarget)(e).click();
                // click above sets modality to "virtual", need to set interaction modality back to 'keyboard' so focusSafely calls properly move focus
                // to the newly opened submenu's first item.
                (0, _useFocusVisible.setInteractionModality)('keyboard');
            },
            Enter: (e)=>{
                interaction.current = {
                    pointerType: 'keyboard',
                    key: 'Enter'
                };
                let target = (0, _domfunctions.getEventTarget)(e);
                // Trigger click unless this is a link. Links with real DOM focus activate on Enter natively.
                // With virtual focus (e.g. Autocomplete) focus stays on the input and useAutocomplete dispatches
                // keydown here then follows with a synthetic click only if dispatchEvent was not canceled—so
                // links must not preventDefault on that keydown.
                if (target.tagName !== 'A') {
                    target.click();
                    (0, _useFocusVisible.setInteractionModality)('keyboard');
                    return;
                }
                (0, _useFocusVisible.setInteractionModality)('keyboard');
                return {
                    shouldPreventDefault: false,
                    shouldContinuePropagation: false
                };
            }
        },
        onKeyDown,
        onKeyUp
    });
    let { focusableProps } = (0, _useFocusable.useFocusable)({
        onBlur,
        onFocus,
        onFocusChange
    }, ref);
    let domProps = (0, _filterDOMProps.filterDOMProps)(item?.props);
    delete domProps.id;
    let linkProps = (0, _openLink.useLinkProps)(item?.props);
    return {
        menuItemProps: {
            ...ariaProps,
            ...(0, _mergeProps.mergeProps)(domProps, linkProps, isTrigger ? {
                onFocus: itemProps.onFocus,
                'data-collection': itemProps['data-collection'],
                'data-key': itemProps['data-key']
            } : itemProps, pressProps, hoverProps, keyboardProps, focusableProps, // Prevent DOM focus from moving on mouse down when using virtual focus or this is a submenu/subdialog trigger.
            data.shouldUseVirtualFocus || isTrigger ? {
                onMouseDown: (e)=>e.preventDefault()
            } : undefined, // oxlint-disable-next-line react/react-compiler
            isDisabled ? undefined : {
                onClick
            }),
            // If a submenu is expanded, set the tabIndex to -1 so that shift tabbing goes out of the menu instead of the parent menu item.
            tabIndex: itemProps.tabIndex != null && isTriggerExpanded && !data.shouldUseVirtualFocus ? -1 : itemProps.tabIndex
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        keyboardShortcutProps: {
            id: keyboardId
        },
        isFocused,
        isFocusVisible: isFocused && selectionManager.isFocused && (0, _useFocusVisible.isFocusVisible)() && !isTriggerExpanded,
        isSelected,
        isPressed,
        isDisabled
    };
}

},{"../utils/filterDOMProps":"h4XHF","../utils/shadowdom/DOMFunctions":"8kfpz","react-stately/private/collections/getItemCount":"eLVRI","../utils/openLink":"gH3wl","../interactions/useFocusVisible":"aBfUW","./utils":"e7rvB","../utils/mergeProps":"jycxS","react":"gOP0N","../interactions/useFocusable":"6IFKj","../interactions/useHover":"2yLrj","../interactions/useKeyboard":"aHm7i","../interactions/usePress":"3S2KR","../selection/useSelectableItem":"3SFOH","../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eLVRI":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "getItemCount", ()=>getItemCount);
var _getChildNodes = require("./getChildNodes");
const cache = new WeakMap();
function getItemCount(collection) {
    let count = cache.get(collection);
    if (count != null) return count;
    // TS isn't smart enough to know we've ensured count is a number, so use a new variable
    let counter = 0;
    let countItems = (items)=>{
        for (let item of items){
            if (item.type === 'section') countItems((0, _getChildNodes.getChildNodes)(item, collection));
            else if (item.type === 'item') counter++;
        }
    };
    countItems(collection);
    cache.set(collection, counter);
    return counter;
}

},{"./getChildNodes":"9KbhA","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6hJKZ":[function(require,module,exports,__globalThis) {
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
 * Manages state for a menu trigger. Tracks whether the menu is currently open,
 * and controls which item will receive focus when it opens. Also tracks the open submenus within
 * the menu tree via their trigger keys.
 */ parcelHelpers.export(exports, "useMenuTriggerState", ()=>useMenuTriggerState);
var _useOverlayTriggerState = require("../overlays/useOverlayTriggerState");
var _react = require("react");
function useMenuTriggerState(props) {
    let overlayTriggerState = (0, _useOverlayTriggerState.useOverlayTriggerState)(props);
    let [focusStrategy, setFocusStrategy] = (0, _react.useState)(null);
    let [expandedKeysStack, setExpandedKeysStack] = (0, _react.useState)([]);
    let closeAll = ()=>{
        setExpandedKeysStack([]);
        overlayTriggerState.close();
    };
    let openSubmenu = (triggerKey, level)=>{
        setExpandedKeysStack((oldStack)=>{
            if (level > oldStack.length) return oldStack;
            return [
                ...oldStack.slice(0, level),
                triggerKey
            ];
        });
    };
    let closeSubmenu = (triggerKey, level)=>{
        setExpandedKeysStack((oldStack)=>{
            let key = oldStack[level];
            if (key === triggerKey) return oldStack.slice(0, level);
            else return oldStack;
        });
    };
    return {
        focusStrategy,
        ...overlayTriggerState,
        open (focusStrategy = null) {
            setFocusStrategy(focusStrategy);
            overlayTriggerState.open();
        },
        toggle (focusStrategy = null) {
            setFocusStrategy(focusStrategy);
            overlayTriggerState.toggle();
        },
        close () {
            closeAll();
        },
        expandedKeysStack,
        openSubmenu,
        closeSubmenu
    };
}

},{"../overlays/useOverlayTriggerState":"457a8","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"457a8":[function(require,module,exports,__globalThis) {
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
 * Manages state for an overlay trigger. Tracks whether the overlay is open, and provides
 * methods to toggle this state.
 */ parcelHelpers.export(exports, "useOverlayTriggerState", ()=>useOverlayTriggerState);
var _react = require("react");
var _useControlledState = require("../utils/useControlledState");
function useOverlayTriggerState(props) {
    let [isOpen, setOpen] = (0, _useControlledState.useControlledState)(props.isOpen, props.defaultOpen || false, props.onOpenChange);
    let [point, setPoint] = (0, _react.useState)(null);
    const open = (0, _react.useCallback)(()=>{
        setOpen(true);
    }, [
        setOpen
    ]);
    const close = (0, _react.useCallback)(()=>{
        setOpen(false);
    }, [
        setOpen
    ]);
    const toggle = (0, _react.useCallback)(()=>{
        setOpen(!isOpen);
    }, [
        setOpen,
        isOpen
    ]);
    return {
        isOpen,
        setOpen,
        open,
        close,
        toggle,
        point,
        setPoint
    };
}

},{"react":"gOP0N","../utils/useControlledState":"8yNBD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8yNBD":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useControlledState", ()=>useControlledState);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
// Use the earliest effect possible to reset the ref below.
const useEarlyEffect = typeof document !== 'undefined' || parseInt((0, _reactDefault.default).version, 10) >= 19 ? (0, _reactDefault.default)['useInsertionEffect'] ?? (0, _reactDefault.default).useLayoutEffect : ()=>{};
function useControlledState(value, defaultValue, onChange) {
    // Store the value in both state and a ref. The state value will only be used when uncontrolled.
    // The ref is used to track the most current value, which is passed to the function setState callback.
    let [stateValue, setStateValue] = (0, _react.useState)(value || defaultValue);
    let valueRef = (0, _react.useRef)(stateValue);
    let isControlledRef = (0, _react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, _react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    // After each render, update the ref to the current value.
    // This ensures that the setState callback argument is reset.
    // Note: the effect should not have any dependencies so that controlled values always reset.
    let currentValue = isControlled ? value : stateValue;
    useEarlyEffect(()=>{
        valueRef.current = currentValue;
    });
    let [, forceUpdate] = (0, _react.useReducer)(()=>({}), {});
    let setValue = (0, _react.useCallback)((value, ...args)=>{
        // @ts-ignore - TS doesn't know that T cannot be a function.
        let newValue = typeof value === 'function' ? value(valueRef.current) : value;
        if (!Object.is(valueRef.current, newValue)) {
            // Update the ref so that the next setState callback has the most recent value.
            valueRef.current = newValue;
            setStateValue(newValue);
            // Always trigger a re-render, even when controlled, so that the layout effect above runs to reset the value.
            forceUpdate();
            // Trigger onChange. Note that if setState is called multiple times in a single event,
            // onChange will be called for each one instead of only once.
            onChange?.(newValue, ...args);
        }
    }, [
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5dXIN":[function(require,module,exports,__globalThis) {
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
 */ // Custom event names for updating the autocomplete's aria-activedecendant.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CLEAR_FOCUS_EVENT", ()=>CLEAR_FOCUS_EVENT);
parcelHelpers.export(exports, "FOCUS_EVENT", ()=>FOCUS_EVENT);
const CLEAR_FOCUS_EVENT = 'react-aria-clear-focus';
const FOCUS_EVENT = 'react-aria-focus';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hd0wy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "moveVirtualFocus", ()=>moveVirtualFocus);
parcelHelpers.export(exports, "dispatchVirtualBlur", ()=>dispatchVirtualBlur);
parcelHelpers.export(exports, "dispatchVirtualFocus", ()=>dispatchVirtualFocus);
parcelHelpers.export(exports, "getVirtuallyFocusedElement", ()=>getVirtuallyFocusedElement);
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _domHelpers = require("../utils/domHelpers");
function moveVirtualFocus(to) {
    let from = getVirtuallyFocusedElement((0, _domHelpers.getOwnerDocument)(to));
    if (from !== to) {
        if (from) dispatchVirtualBlur(from, to);
        if (to) dispatchVirtualFocus(to, from);
    }
}
function dispatchVirtualBlur(from, to) {
    from.dispatchEvent(new FocusEvent('blur', {
        relatedTarget: to
    }));
    from.dispatchEvent(new FocusEvent('focusout', {
        bubbles: true,
        relatedTarget: to
    }));
}
function dispatchVirtualFocus(to, from) {
    to.dispatchEvent(new FocusEvent('focus', {
        relatedTarget: from
    }));
    to.dispatchEvent(new FocusEvent('focusin', {
        bubbles: true,
        relatedTarget: from
    }));
}
function getVirtuallyFocusedElement(document) {
    let activeElement = (0, _domfunctions.getActiveElement)(document);
    let activeDescendant = activeElement?.getAttribute('aria-activedescendant');
    if (activeDescendant) return document.getElementById(activeDescendant) || activeElement;
    return activeElement;
}

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"grvf5":[function(require,module,exports,__globalThis) {
// https://github.com/microsoft/tabster/blob/a89fc5d7e332d48f68d03b1ca6e344489d1c3898/src/Shadowdomize/ShadowTreeWalker.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShadowTreeWalker", ()=>ShadowTreeWalker);
/**
 * ShadowDOM safe version of document.createTreeWalker.
 */ parcelHelpers.export(exports, "createShadowTreeWalker", ()=>createShadowTreeWalker);
var _domfunctions = require("./DOMFunctions");
var _flags = require("react-stately/private/flags/flags");
class ShadowTreeWalker {
    filter;
    root;
    whatToShow;
    _doc;
    _walkerStack = [];
    _currentNode;
    _currentSetFor = new Set();
    constructor(doc, root, whatToShow, filter){
        this._doc = doc;
        this.root = root;
        this.filter = filter ?? null;
        this.whatToShow = whatToShow ?? NodeFilter.SHOW_ALL;
        this._currentNode = root;
        this._walkerStack.unshift(doc.createTreeWalker(root, whatToShow, this._acceptNode));
        const shadowRoot = root.shadowRoot;
        if (shadowRoot) {
            const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
                acceptNode: this._acceptNode
            });
            this._walkerStack.unshift(walker);
        }
    }
    _acceptNode = (node)=>{
        if (node.nodeType === Node.ELEMENT_NODE) {
            const shadowRoot = node.shadowRoot;
            if (shadowRoot) {
                const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
                    acceptNode: this._acceptNode
                });
                this._walkerStack.unshift(walker);
                return NodeFilter.FILTER_ACCEPT;
            } else {
                if (typeof this.filter === 'function') return this.filter(node);
                else if (this.filter?.acceptNode) return this.filter.acceptNode(node);
                else if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
            }
        }
        return NodeFilter.FILTER_SKIP;
    };
    get currentNode() {
        return this._currentNode;
    }
    set currentNode(node) {
        if (!(0, _domfunctions.nodeContains)(this.root, node)) throw new Error('Cannot set currentNode to a node that is not contained by the root node.');
        const walkers = [];
        let curNode = node;
        let currentWalkerCurrentNode = node;
        this._currentNode = node;
        while(curNode && curNode !== this.root)if (curNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            const shadowRoot = curNode;
            const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
                acceptNode: this._acceptNode
            });
            walkers.push(walker);
            walker.currentNode = currentWalkerCurrentNode;
            this._currentSetFor.add(walker);
            curNode = currentWalkerCurrentNode = shadowRoot.host;
        } else curNode = curNode.parentNode;
        const walker = this._doc.createTreeWalker(this.root, this.whatToShow, {
            acceptNode: this._acceptNode
        });
        walkers.push(walker);
        walker.currentNode = currentWalkerCurrentNode;
        this._currentSetFor.add(walker);
        this._walkerStack = walkers;
    }
    get doc() {
        return this._doc;
    }
    firstChild() {
        let currentNode = this.currentNode;
        let newNode = this.nextNode();
        if (!(0, _domfunctions.nodeContains)(currentNode, newNode)) {
            this.currentNode = currentNode;
            return null;
        }
        if (newNode) this.currentNode = newNode;
        return newNode;
    }
    lastChild() {
        let walker = this._walkerStack[0];
        let newNode = walker.lastChild();
        if (newNode) this.currentNode = newNode;
        return newNode;
    }
    nextNode() {
        const nextNode = this._walkerStack[0].nextNode();
        if (nextNode) {
            const shadowRoot = nextNode.shadowRoot;
            if (shadowRoot) {
                let nodeResult;
                if (typeof this.filter === 'function') nodeResult = this.filter(nextNode);
                else if (this.filter?.acceptNode) nodeResult = this.filter.acceptNode(nextNode);
                if (nodeResult === NodeFilter.FILTER_ACCEPT) {
                    this.currentNode = nextNode;
                    return nextNode;
                }
                // _acceptNode should have added new walker for this shadow,
                // go in recursively.
                let newNode = this.nextNode();
                if (newNode) this.currentNode = newNode;
                return newNode;
            }
            if (nextNode) this.currentNode = nextNode;
            return nextNode;
        } else {
            if (this._walkerStack.length > 1) {
                this._walkerStack.shift();
                let newNode = this.nextNode();
                if (newNode) this.currentNode = newNode;
                return newNode;
            } else return null;
        }
    }
    previousNode() {
        const currentWalker = this._walkerStack[0];
        if (currentWalker.currentNode === currentWalker.root) {
            if (this._currentSetFor.has(currentWalker)) {
                this._currentSetFor.delete(currentWalker);
                if (this._walkerStack.length > 1) {
                    this._walkerStack.shift();
                    let newNode = this.previousNode();
                    if (newNode) this.currentNode = newNode;
                    return newNode;
                } else return null;
            }
            return null;
        }
        const previousNode = currentWalker.previousNode();
        if (previousNode) {
            const shadowRoot = previousNode.shadowRoot;
            if (shadowRoot) {
                let nodeResult;
                if (typeof this.filter === 'function') nodeResult = this.filter(previousNode);
                else if (this.filter?.acceptNode) nodeResult = this.filter.acceptNode(previousNode);
                if (nodeResult === NodeFilter.FILTER_ACCEPT) {
                    if (previousNode) this.currentNode = previousNode;
                    return previousNode;
                }
                // _acceptNode should have added new walker for this shadow,
                // go in recursively.
                let newNode = this.lastChild();
                if (newNode) this.currentNode = newNode;
                return newNode;
            }
            if (previousNode) this.currentNode = previousNode;
            return previousNode;
        } else {
            if (this._walkerStack.length > 1) {
                this._walkerStack.shift();
                let newNode = this.previousNode();
                if (newNode) this.currentNode = newNode;
                return newNode;
            } else return null;
        }
    }
    /**
   * @deprecated
   */ nextSibling() {
        // if (__DEV__) {
        //     throw new Error("Method not implemented.");
        // }
        return null;
    }
    /**
   * @deprecated
   */ previousSibling() {
        // if (__DEV__) {
        //     throw new Error("Method not implemented.");
        // }
        return null;
    }
    /**
   * @deprecated
   */ parentNode() {
        // if (__DEV__) {
        //     throw new Error("Method not implemented.");
        // }
        return null;
    }
}
function createShadowTreeWalker(doc, root, whatToShow, filter) {
    if ((0, _flags.shadowDOM)()) return new ShadowTreeWalker(doc, root, whatToShow, filter);
    return doc.createTreeWalker(root, whatToShow, filter);
}

},{"./DOMFunctions":"8kfpz","react-stately/private/flags/flags":"ahU3Z","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fXhXT":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "supportsKeyboard", ()=>supportsKeyboard);
parcelHelpers.export(exports, "willOpenKeyboard", ()=>willOpenKeyboard);
parcelHelpers.export(exports, "isCtrlKeyPressed", ()=>isCtrlKeyPressed);
parcelHelpers.export(exports, "isKeyboardOpen", ()=>isKeyboardOpen);
var _domHelpers = require("./domHelpers");
var _domfunctions = require("./shadowdom/DOMFunctions");
var _getMetaValue = require("./getMetaValue");
var _platform = require("./platform");
var _isFocusable = require("./isFocusable");
const KEYBOARD_HEIGHT = 100;
const KEYBOARD_TIMEOUT = 600;
// Tracks layout state of the on-screen keyboard.
const state = {
    isOpen: false,
    screenWidth: 0,
    screenHeight: 0,
    screenAngle: 0,
    screenTimeout: 0,
    startTimeStamp: 0,
    endTimeStamp: 0,
    resizeTimeStamp: 0,
    resizeTimeout: 0
};
// HTML input types that do not cause the software keyboard to appear.
const nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
function getTouchScreen() {
    // Normalize the screen by any scaling to get the layout coordinate space.
    let screenWidth = Number(window.visualViewport?.width ?? window.innerWidth);
    let screenHeight = Number(window.visualViewport?.height ?? window.innerHeight);
    let visualScale = Number(window.visualViewport?.scale ?? 1);
    return {
        width: screenWidth * visualScale,
        height: screenHeight * visualScale,
        angle: window.screen.orientation.angle
    };
}
function onResizeStart(e) {
    // So we don't constantly call clearTimeout and setTimeout, keep track of the
    // current timeout time and only reschedule the timer when it is getting close.
    if (state.resizeTimeStamp <= e.timeStamp + 50) {
        state.resizeTimeStamp = e.timeStamp + 150;
        window.clearTimeout(state.resizeTimeout);
        state.resizeTimeout = window.setTimeout(onResizeEnd, 150);
    }
}
function onResizeEnd() {
    let viewportMeta = (0, _getMetaValue.getMetaValue)('viewport');
    // Overlaying keyboards do not impact geometry, so there is nothing to measure.
    // https://caniuse.com/mdn-html_elements_meta_name_viewport_interactive-widget
    if ((0, _platform.isAndroid)() && viewportMeta?.includes('overlays-content')) return;
    let time = performance.now();
    let screen = getTouchScreen();
    let elapsed = time - state.startTimeStamp;
    let delta = state.screenHeight - screen.height;
    let rotation = state.screenAngle - screen.angle;
    // Update the screen once an open keyboard that rotated along closes. The state swap was
    // deferred, so the old width predicts the height it should close towards.
    if (Math.abs(rotation) % 180 && state.screenWidth - screen.height < KEYBOARD_HEIGHT) {
        state.screenWidth = screen.width;
        state.screenHeight = screen.height;
        state.screenAngle = screen.angle;
        delta = 0;
    }
    // Update the screen if a resize happens outside the capture timeframe. We debounce
    // because WebKit may fire its single opening resize before the focus event.
    if (elapsed > KEYBOARD_TIMEOUT) {
        window.clearTimeout(state.screenTimeout);
        state.screenTimeout = window.setTimeout(()=>{
            let activeElement = document.hasFocus() ? (0, _domfunctions.getActiveElement)() : null;
            let willKeyboardOpen = willOpenKeyboard(activeElement);
            let screen = getTouchScreen();
            if (Math.abs(state.screenAngle - screen.angle) % 180) return;
            if (state.isOpen && willKeyboardOpen) return;
            state.screenWidth = screen.width;
            state.screenHeight = screen.height;
            state.screenAngle = screen.angle;
            state.isOpen = false;
        }, KEYBOARD_TIMEOUT);
    }
    // Otherwise, record an opening if the height changed by more than our threshold.
    // This may fail if the layout viewport changes for other reasons during this timeframe.
    if (elapsed <= KEYBOARD_TIMEOUT && delta >= KEYBOARD_HEIGHT) state.endTimeStamp = time;
    // Store the new open state since the viewport is stable when this is reached.
    state.isOpen = delta >= KEYBOARD_HEIGHT;
}
function onOrientationChange() {
    let screen = getTouchScreen();
    let rotation = state.screenAngle - screen.angle;
    // Rotation may cause the resize buffer to be filled, but we need to make sure a screen
    // estimate is already available in case focus lands before it expires. This could fail
    // if a top bar exceeds the keyboard threshold, in which case we may need to revisit.
    if (Math.abs(rotation) % 180 && !state.isOpen) {
        let width = state.screenWidth;
        let height = state.screenHeight;
        state.screenWidth = height;
        state.screenHeight = width;
    }
    if (!state.isOpen) state.screenAngle = screen.angle;
}
function onFocus(e) {
    let target = (0, _domfunctions.getEventTarget)(e);
    let willKeyboardOpen = willOpenKeyboard(target);
    let time = performance.now();
    let screen = getTouchScreen();
    let delta = state.screenHeight - screen.height;
    // Update the screen and start the timer if we are about to open.
    if (delta < KEYBOARD_HEIGHT && willKeyboardOpen) {
        state.screenWidth = screen.width;
        state.screenHeight = screen.height;
        state.screenAngle = screen.angle;
        state.startTimeStamp = time;
    }
    // This focus will open a keyboard so reset the buffer.
    if (willKeyboardOpen) window.clearTimeout(state.screenTimeout);
    // Stop the timer if the keyboard is already open.
    if (delta >= KEYBOARD_HEIGHT && willKeyboardOpen) state.endTimeStamp = time;
}
function setupGlobalEvents() {
    let screen = getTouchScreen();
    // WebKit only fires a single event per resize.
    (0, _domHelpers.addEvent)(window.visualViewport, 'resize', (0, _platform.isWebKit)() ? onResizeEnd : onResizeStart);
    // oxlint-disable-next-line - looks like the lint for this is a little too aggressive
    (0, _domHelpers.addEvent)(window.screen.orientation, 'change', onOrientationChange);
    (0, _domHelpers.addEvent)(window, 'focus', onFocus, {
        capture: true,
        passive: true
    });
    // Store the initial screen dimensions.
    state.screenWidth = screen.width;
    state.screenHeight = screen.height;
    state.screenAngle = screen.angle;
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') setupGlobalEvents();
    else (0, _domHelpers.addEvent)(document, 'DOMContentLoaded', setupGlobalEvents);
}
function supportsKeyboard() {
    let viewportMeta = (0, _getMetaValue.getMetaValue)('viewport');
    // Overlaying keyboards do not impact geometry, so there is nothing to await.
    // https://caniuse.com/mdn-html_elements_meta_name_viewport_interactive-widget
    if ((0, _platform.isAndroid)() && viewportMeta?.includes('overlays-content')) return false;
    // WebKit may resize before focus, but an open keyboard always means we have support.
    if (state.isOpen) return true;
    // As long as no input has ever been focused, we return default support.
    if (!state.startTimeStamp) return window.navigator.maxTouchPoints > 0;
    // If keyboard geometry changed within the timeout period, we have support.
    if (state.endTimeStamp >= state.startTimeStamp) return true;
    // If a geometry change is mid-flight we return the most recent support.
    // Supported platforms may have a hardware keyboard, which this won't catch, but thats
    // about as far as we can reasonably go to exclude non-touch devices.
    return performance.now() - state.startTimeStamp <= KEYBOARD_TIMEOUT ? state.endTimeStamp > 0 || window.navigator.maxTouchPoints > 0 : false;
}
function willOpenKeyboard(target) {
    if (!(target instanceof Element) || !(0, _isFocusable.isFocusable)(target)) return false;
    let isTextArea = target instanceof HTMLTextAreaElement;
    let isEditable = target instanceof HTMLElement && target.isContentEditable;
    let isTextInput = target instanceof HTMLInputElement && !nonTextInputTypes.has(target.type);
    return isTextArea || isEditable || isTextInput;
}
function isCtrlKeyPressed(event) {
    return (0, _platform.isMac)() ? event.metaKey : event.ctrlKey;
}
function isKeyboardOpen() {
    return state.isOpen;
}

},{"./domHelpers":"cYkFa","./shadowdom/DOMFunctions":"8kfpz","./getMetaValue":"jdK61","./platform":"eBqgD","./isFocusable":"dLPRV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jdK61":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "getMetaValue", ()=>getMetaValue);
var _domHelpers = require("./domHelpers");
function getMetaValue(key, doc) {
    let ownerWindow = (0, _domHelpers.getOwnerWindow)(doc);
    let ownerDocument = (0, _domHelpers.getOwnerDocument)(doc);
    if (ownerDocument == null || ownerWindow == null) return;
    let content = undefined;
    let selector = `meta[name="${CSS.escape(key)}"], meta[property="${CSS.escape(key)}"]`;
    let meta = ownerDocument.querySelector(selector);
    if (meta && meta instanceof ownerWindow.HTMLMetaElement) {
        if (key === 'csp-nonce' && meta.nonce) content ??= meta.nonce || undefined;
        if (meta.content) content ??= meta.content || undefined;
    }
    if (key === 'csp-nonce') content ??= ownerWindow.__webpack_nonce__ || globalThis.__webpack_nonce__ || undefined;
    return content;
}

},{"./domHelpers":"cYkFa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5N7nL":[function(require,module,exports,__globalThis) {
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
 * Scrolls `scrollView` so that `element` is visible.
 * Similar to `element.scrollIntoView({block: 'nearest'})` (not supported in Edge),
 * but doesn't affect parents above `scrollView`.
 */ parcelHelpers.export(exports, "scrollIntoView", ()=>scrollIntoView);
parcelHelpers.export(exports, "scrollRectIntoView", ()=>scrollRectIntoView);
/**
 * Scrolls the `targetElement` so it is visible in the viewport. Accepts an optional
 * `opts.containingElement` that will be centered in the viewport prior to scrolling the
 * targetElement into view. If scrolling is prevented on the body (e.g. targetElement is in a
 * popover), this will only scroll the scroll parents of the targetElement up to but not including
 * the body itself.
 */ parcelHelpers.export(exports, "scrollIntoViewport", ()=>scrollIntoViewport);
var _getScrollParents = require("./getScrollParents");
var _platform = require("../utils/platform");
function scrollIntoView(scrollView, element, opts = {}) {
    if (scrollView === element) return;
    let target = element.getBoundingClientRect();
    scrollRectIntoView(scrollView, element, target, opts);
}
function scrollRectIntoView(scrollView, element, target, opts = {}) {
    let { block = 'nearest', inline = 'nearest' } = opts;
    let y = scrollView.scrollTop;
    let x = scrollView.scrollLeft;
    let view = scrollView.getBoundingClientRect();
    let itemStyle = window.getComputedStyle(element);
    let viewStyle = window.getComputedStyle(scrollView);
    let root = document.scrollingElement || document.documentElement;
    let isRoot = scrollView === root;
    let viewTop = scrollView === root ? 0 : view.top;
    let viewBottom = scrollView === root ? scrollView.clientHeight : view.bottom;
    let viewLeft = scrollView === root ? 0 : view.left;
    let viewRight = scrollView === root ? scrollView.clientWidth : view.right;
    let scrollMarginTop = parseFloat(itemStyle.scrollMarginTop) || 0;
    let scrollMarginBottom = parseFloat(itemStyle.scrollMarginBottom) || 0;
    let scrollMarginLeft = parseFloat(itemStyle.scrollMarginLeft) || 0;
    let scrollMarginRight = parseFloat(itemStyle.scrollMarginRight) || 0;
    let scrollPaddingTop = parseFloat(viewStyle.scrollPaddingTop) || 0;
    let scrollPaddingBottom = parseFloat(viewStyle.scrollPaddingBottom) || 0;
    let scrollPaddingLeft = parseFloat(viewStyle.scrollPaddingLeft) || 0;
    let scrollPaddingRight = parseFloat(viewStyle.scrollPaddingRight) || 0;
    let borderTopWidth = parseFloat(viewStyle.borderTopWidth) || 0;
    let borderBottomWidth = parseFloat(viewStyle.borderBottomWidth) || 0;
    let borderLeftWidth = parseFloat(viewStyle.borderLeftWidth) || 0;
    let borderRightWidth = parseFloat(viewStyle.borderRightWidth) || 0;
    let scrollAreaTop = target.top - scrollMarginTop;
    let scrollAreaBottom = target.bottom + scrollMarginBottom;
    let scrollAreaLeft = target.left - scrollMarginLeft;
    let scrollAreaRight = target.right + scrollMarginRight;
    let scrollBarOffsetX = scrollView === root ? 0 : borderLeftWidth + borderRightWidth;
    let scrollBarOffsetY = scrollView === root ? 0 : borderTopWidth + borderBottomWidth;
    let scrollBarWidth = scrollView === root ? 0 : scrollView.offsetWidth - scrollView.clientWidth - scrollBarOffsetX;
    let scrollBarHeight = scrollView === root ? 0 : scrollView.offsetHeight - scrollView.clientHeight - scrollBarOffsetY;
    let scrollPortTop = viewTop + (isRoot ? 0 : borderTopWidth) + scrollPaddingTop;
    let scrollPortBottom = viewBottom - (isRoot ? 0 : borderBottomWidth) - scrollPaddingBottom - scrollBarHeight;
    let scrollPortLeft = viewLeft + (isRoot ? 0 : borderLeftWidth) + scrollPaddingLeft;
    let scrollPortRight = viewRight - (isRoot ? 0 : borderRightWidth) - scrollPaddingRight;
    // WebKit on iOS always positions the scrollbar on the right ¯\_(ツ)_/¯
    if ((0, _platform.isIOS)() && (0, _platform.isWebKit)() || viewStyle.direction === 'ltr') scrollPortRight -= scrollBarWidth;
    else if (viewStyle.direction === 'rtl') scrollPortLeft += scrollBarWidth;
    let shouldScrollBlock = scrollAreaTop < scrollPortTop || scrollAreaBottom > scrollPortBottom;
    let shouldScrollInline = scrollAreaLeft < scrollPortLeft || scrollAreaRight > scrollPortRight;
    if (shouldScrollBlock && block === 'start') y += scrollAreaTop - scrollPortTop;
    else if (shouldScrollBlock && block === 'center') y += (scrollAreaTop + scrollAreaBottom) / 2 - (scrollPortTop + scrollPortBottom) / 2;
    else if (shouldScrollBlock && block === 'end') y += scrollAreaBottom - scrollPortBottom;
    else if (shouldScrollBlock && block === 'nearest') {
        let start = scrollAreaTop - scrollPortTop;
        let end = scrollAreaBottom - scrollPortBottom;
        y += Math.abs(start) <= Math.abs(end) ? start : end;
    }
    if (shouldScrollInline && inline === 'start') x += scrollAreaLeft - scrollPortLeft;
    else if (shouldScrollInline && inline === 'center') x += (scrollAreaLeft + scrollAreaRight) / 2 - (scrollPortLeft + scrollPortRight) / 2;
    else if (shouldScrollInline && inline === 'end') x += scrollAreaRight - scrollPortRight;
    else if (shouldScrollInline && inline === 'nearest') {
        let start = scrollAreaLeft - scrollPortLeft;
        let end = scrollAreaRight - scrollPortRight;
        x += Math.abs(start) <= Math.abs(end) ? start : end;
    }
    scrollView.scrollTo({
        left: x,
        top: y
    });
}
function scrollIntoViewport(targetElement, opts = {}) {
    let { containingElement } = opts;
    if (targetElement && targetElement.isConnected) {
        let root = document.scrollingElement || document.documentElement;
        let isScrollPrevented = window.getComputedStyle(root).overflow === 'hidden';
        if (!isScrollPrevented) {
            let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
            // use scrollIntoView({block: 'nearest'}) instead of .focus to check if the element is fully in view or not since .focus()
            // won't cause a scroll if the element is already focused and doesn't behave consistently when an element is partially out of view horizontally vs vertically
            targetElement?.scrollIntoView?.({
                block: 'nearest'
            });
            let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
            // Account for sub pixel differences from rounding
            if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
                containingElement?.scrollIntoView?.({
                    block: 'center',
                    inline: 'center'
                });
                targetElement.scrollIntoView?.({
                    block: 'nearest'
                });
            }
        } else {
            let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
            // If scrolling is prevented, we don't want to scroll the body since it might move the overlay partially offscreen and the user can't scroll it back into view.
            let scrollParents = (0, _getScrollParents.getScrollParents)(targetElement, true);
            for (let scrollParent of scrollParents)scrollIntoView(scrollParent, targetElement);
            let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
            // Account for sub pixel differences from rounding
            if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
                scrollParents = containingElement ? (0, _getScrollParents.getScrollParents)(containingElement, true) : [];
                // scroll containing element into view first, then rescroll target element into view like the non chrome flow above
                for (let scrollParent of scrollParents)scrollIntoView(scrollParent, containingElement, {
                    block: 'center',
                    inline: 'center'
                });
                for (let scrollParent of (0, _getScrollParents.getScrollParents)(targetElement, true))scrollIntoView(scrollParent, targetElement);
            }
        }
    }
}

},{"./getScrollParents":"6TSmG","../utils/platform":"eBqgD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6TSmG":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "getScrollParents", ()=>getScrollParents);
var _isScrollable = require("./isScrollable");
function getScrollParents(node, checkForOverflow) {
    let parentElements = [];
    let root = document.scrollingElement || document.documentElement;
    while(node){
        if ((0, _isScrollable.isScrollable)(node, checkForOverflow)) parentElements.push(node);
        if (node === root) break;
        node = node.parentElement;
    }
    return parentElements;
}

},{"./isScrollable":"2UC33","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"avf8K":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2021 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "useEvent", ()=>useEvent);
var _domHelpers = require("./domHelpers");
var _react = require("react");
var _useEffectEvent = require("./useEffectEvent");
function useEvent(ref, event, listener, options) {
    let handleEvent = (0, _useEffectEvent.useEffectEvent)(listener);
    let isDisabled = listener == null;
    (0, _react.useEffect)(()=>{
        if (isDisabled || ref.current == null) return;
        return (0, _domHelpers.addEvent)(ref.current, event, handleEvent, options);
    }, [
        ref,
        event,
        options,
        isDisabled
    ]);
}

},{"./domHelpers":"cYkFa","react":"gOP0N","./useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"grBNM":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useEffectEvent", ()=>useEffectEvent);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useLayoutEffect = require("./useLayoutEffect");
// Use the earliest effect type possible. useInsertionEffect runs during the mutation phase,
// before all layout effects, but is available only in React 18 and later.
const useEarlyEffect = (0, _reactDefault.default)['useInsertionEffect'] ?? (0, _useLayoutEffect.useLayoutEffect);
function useEffectEvent(fn) {
    const ref = (0, _react.useRef)(null);
    useEarlyEffect(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    // @ts-ignore
    return (0, _react.useCallback)((...args)=>{
        const f = ref.current;
        return f?.(...args);
    }, []);
}

},{"react":"gOP0N","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3IKpx":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "disableTextSelection", ()=>disableTextSelection);
parcelHelpers.export(exports, "restoreTextSelection", ()=>restoreTextSelection);
var _domHelpers = require("../utils/domHelpers");
var _platform = require("../utils/platform");
var _runAfterTransition = require("../utils/runAfterTransition");
// Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
// rather than at the document level so we just need to apply/remove user-select: none for each pressed element individually
let state = 'default';
let savedUserSelect = '';
let modifiedElementMap = new WeakMap();
function disableTextSelection(target) {
    if ((0, _platform.isIOS)() && (0, _platform.isWebKit)()) {
        if (state === 'default') {
            const documentObject = (0, _domHelpers.getOwnerDocument)(target);
            savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
            documentObject.documentElement.style.webkitUserSelect = 'none';
        }
        state = 'disabled';
    } else if (target instanceof HTMLElement || target instanceof SVGElement) {
        // If not iOS, store the target's original user-select and change to user-select: none
        // Ignore state since it doesn't apply for non iOS
        let property = 'userSelect' in target.style ? 'userSelect' : 'webkitUserSelect';
        modifiedElementMap.set(target, target.style[property]);
        target.style[property] = 'none';
    }
}
function restoreTextSelection(target) {
    if ((0, _platform.isIOS)() && (0, _platform.isWebKit)()) {
        // If the state is already default, there's nothing to do.
        // If it is restoring, then there's no need to queue a second restore.
        if (state !== 'disabled') return;
        state = 'restoring';
        // There appears to be a delay on iOS where selection still might occur
        // after pointer up, so wait a bit before removing user-select.
        setTimeout(()=>{
            // Wait for any CSS transitions to complete so we don't recompute style
            // for the whole page in the middle of the animation and cause jank.
            (0, _runAfterTransition.runAfterTransition)(()=>{
                // Avoid race conditions
                if (state === 'restoring') {
                    const documentObject = (0, _domHelpers.getOwnerDocument)(target);
                    if (documentObject.documentElement.style.webkitUserSelect === 'none') documentObject.documentElement.style.webkitUserSelect = savedUserSelect || '';
                    savedUserSelect = '';
                    state = 'default';
                }
            });
        }, 300);
    } else if (target instanceof HTMLElement || target instanceof SVGElement) // If not iOS, restore the target's original user-select if any
    // Ignore state since it doesn't apply for non iOS
    {
        if (target && modifiedElementMap.has(target)) {
            let targetOldUserSelect = modifiedElementMap.get(target);
            let property = 'userSelect' in target.style ? 'userSelect' : 'webkitUserSelect';
            if (target.style[property] === 'none') target.style[property] = targetOldUserSelect;
            if (target.getAttribute('style') === '') target.removeAttribute('style');
            modifiedElementMap.delete(target);
        }
    }
}

},{"../utils/domHelpers":"cYkFa","../utils/platform":"eBqgD","../utils/runAfterTransition":"k2HOw","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"b7u5T":[function(require,module,exports,__globalThis) {
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
 * Handles long press interactions across mouse and touch devices. Supports a customizable time
 * threshold, accessibility description, and normalizes behavior across browsers and devices.
 */ parcelHelpers.export(exports, "useLongPress", ()=>useLongPress);
var _focusWithoutScrolling = require("../utils/focusWithoutScrolling");
var _domHelpers = require("../utils/domHelpers");
var _mergeProps = require("../utils/mergeProps");
var _useDescription = require("../utils/useDescription");
var _useGlobalListeners = require("../utils/useGlobalListeners");
var _usePress = require("./usePress");
var _react = require("react");
const DEFAULT_THRESHOLD = 500;
function useLongPress(props) {
    let { isDisabled, pointerType, onLongPressStart, onLongPressEnd, onLongPress, threshold = DEFAULT_THRESHOLD, accessibilityDescription } = props;
    const timeRef = (0, _react.useRef)(undefined);
    let { addGlobalListener, removeAllGlobalListeners } = (0, _useGlobalListeners.useGlobalListeners)();
    let isAcceptedPointerType = (e)=>pointerType ? e.pointerType === pointerType : e.pointerType === 'mouse' || e.pointerType === 'touch';
    let { pressProps } = (0, _usePress.usePress)({
        isDisabled,
        onPressStart (e) {
            e.continuePropagation();
            if (isAcceptedPointerType(e)) {
                if (onLongPressStart) onLongPressStart({
                    ...e,
                    type: 'longpressstart'
                });
                timeRef.current = setTimeout(()=>{
                    // Prevent other usePress handlers from also handling this event.
                    e.target.dispatchEvent(new PointerEvent('pointercancel', {
                        bubbles: true
                    }));
                    // Prevent default click action (e.g. opening a link) after a long press.
                    addGlobalListener(e.target, 'click', (e)=>e.preventDefault(), {
                        once: true
                    });
                    // Ensure target is focused. On touch devices, browsers typically focus on pointer up.
                    if ((0, _domHelpers.getOwnerDocument)(e.target).activeElement !== e.target) (0, _focusWithoutScrolling.focusWithoutScrolling)(e.target);
                    if (onLongPress) onLongPress({
                        ...e,
                        type: 'longpress'
                    });
                    timeRef.current = undefined;
                }, threshold);
                // Prevent context menu, which may be opened on long press on touch devices
                if (e.pointerType === 'touch') addGlobalListener(e.target, 'contextmenu', (e)=>e.preventDefault(), {
                    once: true
                });
                let ownerWindow = (0, _domHelpers.getOwnerWindow)(e.target);
                addGlobalListener(ownerWindow, 'pointerup', ()=>{
                    // If no contextmenu/click event is fired quickly after pointerup, remove the handler
                    // so future events outside a long press are not prevented.
                    setTimeout(()=>{
                        removeAllGlobalListeners();
                    }, 100);
                }, {
                    once: true
                });
            }
        },
        onPressEnd (e) {
            if (timeRef.current) clearTimeout(timeRef.current);
            if (onLongPressEnd && isAcceptedPointerType(e)) onLongPressEnd({
                ...e,
                type: 'longpressend'
            });
        }
    });
    let descriptionProps = (0, _useDescription.useDescription)(onLongPress && !isDisabled ? accessibilityDescription : undefined);
    return {
        longPressProps: (0, _mergeProps.mergeProps)(pressProps, descriptionProps)
    };
}

},{"../utils/focusWithoutScrolling":"gcZ3w","../utils/domHelpers":"cYkFa","../utils/mergeProps":"jycxS","../utils/useDescription":"1bivM","../utils/useGlobalListeners":"jsdt1","./usePress":"3S2KR","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1bivM":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useDescription", ()=>useDescription);
var _useLayoutEffect = require("./useLayoutEffect");
var _react = require("react");
let descriptionId = 0;
const descriptionNodes = new Map();
function useDescription(description) {
    let [id, setId] = (0, _react.useState)();
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (!description) return;
        let desc = descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${descriptionId++}`;
            setId(id);
            let node = document.createElement('div');
            node.id = id;
            node.style.display = 'none';
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (desc && --desc.refCount === 0) {
                desc.element.remove();
                descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        'aria-describedby': description ? id : undefined
    };
}

},{"./useLayoutEffect":"h7M6K","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9nE7l":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a section in a menu.
 * See `useMenu` for more details about menus.
 *
 * @param props - Props for the section.
 */ parcelHelpers.export(exports, "useMenuSection", ()=>useMenuSection);
var _useId = require("../utils/useId");
function useMenuSection(props) {
    let { heading, 'aria-label': ariaLabel } = props;
    let headingId = (0, _useId.useId)();
    return {
        itemProps: {
            role: 'presentation'
        },
        headingProps: heading ? {
            // Techincally, menus cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, using role="presentation",
            // and only use it as a label for the nested group.
            id: headingId,
            role: 'presentation'
        } : {},
        groupProps: {
            role: 'group',
            'aria-label': ariaLabel,
            'aria-labelledby': heading ? headingId : undefined
        }
    };
}

},{"../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kErbq":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a popover component.
 * A popover is an overlay element positioned relative to a trigger.
 */ parcelHelpers.export(exports, "usePopover", ()=>usePopover);
var _ariaHideOutside = require("./ariaHideOutside");
var _useOverlayPosition = require("./useOverlayPosition");
var _useFocusWithin = require("../interactions/useFocusWithin");
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _useOverlay = require("./useOverlay");
var _usePreventScroll = require("./usePreventScroll");
function usePopover(props, state) {
    let { triggerRef, popoverRef, groupRef, isNonModal, isKeyboardDismissDisabled, shouldCloseOnInteractOutside, ...otherProps } = props;
    let isSubmenu = otherProps['trigger'] === 'SubmenuTrigger';
    let { overlayProps, underlayProps } = (0, _useOverlay.useOverlay)({
        isOpen: state.isOpen,
        onClose: state.close,
        shouldCloseOnBlur: true,
        isDismissable: !isNonModal || isSubmenu,
        isKeyboardDismissDisabled,
        shouldCloseOnInteractOutside
    }, groupRef ?? popoverRef);
    let { overlayProps: positionProps, arrowProps, placement, triggerAnchorPoint: origin } = (0, _useOverlayPosition.useOverlayPosition)({
        ...otherProps,
        targetRef: triggerRef,
        overlayRef: popoverRef,
        isOpen: state.isOpen,
        onClose: isNonModal && !isSubmenu ? state.close : null,
        getTargetRect: otherProps.getTargetRect ?? (state.point ? ()=>new DOMRect(state.point.x, state.point.y, 0, 0) : undefined)
    });
    (0, _usePreventScroll.usePreventScroll)({
        isDisabled: isNonModal || !state.isOpen
    });
    (0, _react.useEffect)(()=>{
        if (state.isOpen && popoverRef.current) {
            if (isNonModal) return (0, _ariaHideOutside.keepVisible)(groupRef?.current ?? popoverRef.current);
            else return (0, _ariaHideOutside.ariaHideOutside)([
                groupRef?.current ?? popoverRef.current
            ], {
                shouldUseInert: true
            });
        }
    }, [
        isNonModal,
        state.isOpen,
        popoverRef,
        groupRef
    ]);
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)(props);
    return {
        popoverProps: (0, _mergeProps.mergeProps)(overlayProps, positionProps, focusWithinProps),
        arrowProps,
        underlayProps,
        placement,
        triggerAnchorPoint: origin
    };
}

},{"./ariaHideOutside":"bOGar","./useOverlayPosition":"lXsTF","../interactions/useFocusWithin":"bkSQo","../utils/mergeProps":"jycxS","react":"gOP0N","./useOverlay":"1LtRR","./usePreventScroll":"9SGDE","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bOGar":[function(require,module,exports,__globalThis) {
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
 * Hides all elements in the DOM outside the given targets from screen readers using aria-hidden,
 * and returns a function to revert these changes. In addition, changes to the DOM are watched
 * and new elements outside the targets are automatically hidden.
 *
 * @param targets - The elements that should remain visible.
 * @param root - Nothing will be hidden above this element.
 * @returns - A function to restore all hidden elements.
 */ parcelHelpers.export(exports, "ariaHideOutside", ()=>ariaHideOutside);
parcelHelpers.export(exports, "keepVisible", ()=>keepVisible);
var _shadowTreeWalker = require("../utils/shadowdom/ShadowTreeWalker");
var _domHelpers = require("../utils/domHelpers");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _flags = require("react-stately/private/flags/flags");
const supportsInert = typeof HTMLElement !== 'undefined' && 'inert' in HTMLElement.prototype;
function isAlwaysVisibleNode(node) {
    return node.dataset.liveAnnouncer === 'true' || node.dataset.reactAriaTopLayer !== undefined;
}
// Keeps a ref count of all hidden elements. Added to when hiding an element, and
// subtracted from when showing it again. When it reaches zero, aria-hidden is removed.
let refCountMap = new WeakMap();
let observerStack = [];
function ariaHideOutside(targets, options) {
    let windowObj = (0, _domHelpers.getOwnerWindow)(targets?.[0]);
    let opts = options instanceof windowObj.Element ? {
        root: options
    } : options;
    let root = opts?.root ?? document.body;
    let shouldUseInert = opts?.shouldUseInert && supportsInert;
    let visibleNodes = new Set(targets);
    let hiddenNodes = new Set();
    let getHidden = (element)=>{
        return shouldUseInert && element instanceof windowObj.HTMLElement ? element.inert : element.getAttribute('aria-hidden') === 'true';
    };
    let setHidden = (element, hidden)=>{
        if (shouldUseInert && element instanceof windowObj.HTMLElement) element.inert = hidden;
        else if (hidden) element.setAttribute('aria-hidden', 'true');
        else {
            element.removeAttribute('aria-hidden');
            if (element instanceof windowObj.HTMLElement) // We only ever call setHidden with hidden = false when the nodeCount is 1 aka
            // we are trying to make the element visible to screen readers again, so remove inert as well
            element.inert = false;
        }
    };
    let shadowRootsToWatch = new Set();
    if ((0, _flags.shadowDOM)()) {
        // Find all shadow roots that enclose the targets, walking up the host chain
        // until we reach the tree that `root` lives in. Each enclosing ShadowRoot
        // needs its own MutationObserver because it does not cross shadow
        // boundaries, so the observer on `root` cannot see mutations inside them.
        let boundary = root.getRootNode();
        for (let target of targets){
            let current = target.getRootNode();
            while((0, _domHelpers.isShadowRoot)(current) && current !== boundary){
                shadowRootsToWatch.add(current);
                current = current.host.getRootNode();
            }
        }
    }
    let walk = (root)=>{
        // Keep live announcer and top layer elements (e.g. toasts) visible.
        for (let element of root.querySelectorAll('[data-live-announcer], [data-react-aria-top-layer]'))visibleNodes.add(element);
        let acceptNode = (node)=>{
            // Skip this node and its children if it is one of the target nodes, or a live announcer.
            // Also skip children of already hidden nodes, as aria-hidden is recursive. An exception is
            // made for elements with role="row" since VoiceOver on iOS has issues hiding elements with role="row".
            // For that case we want to hide the cells inside as well (https://bugs.webkit.org/show_bug.cgi?id=222623).
            if (hiddenNodes.has(node) || visibleNodes.has(node) || node.parentElement && hiddenNodes.has(node.parentElement) && node.parentElement.getAttribute('role') !== 'row') return NodeFilter.FILTER_REJECT;
            // Skip this node but continue to children if one of the targets is inside the node.
            for (let target of visibleNodes){
                if ((0, _domfunctions.nodeContains)(node, target)) return NodeFilter.FILTER_SKIP;
            }
            return NodeFilter.FILTER_ACCEPT;
        };
        let walker = (0, _shadowTreeWalker.createShadowTreeWalker)((0, _domHelpers.getOwnerDocument)(root), root, NodeFilter.SHOW_ELEMENT, {
            acceptNode
        });
        // TreeWalker does not include the root.
        let acceptRoot = acceptNode(root);
        if (acceptRoot === NodeFilter.FILTER_ACCEPT) hide(root);
        if (acceptRoot !== NodeFilter.FILTER_REJECT) {
            let node = walker.nextNode();
            while(node != null){
                hide(node);
                node = walker.nextNode();
            }
        }
    };
    let hide = (node)=>{
        let refCount = refCountMap.get(node) ?? 0;
        // If already aria-hidden, and the ref count is zero, then this element
        // was already hidden and there's nothing for us to do.
        if (getHidden(node) && refCount === 0) return;
        if (refCount === 0) setHidden(node, true);
        hiddenNodes.add(node);
        refCountMap.set(node, refCount + 1);
    };
    // If there is already a MutationObserver listening from a previous call,
    // disconnect it so the new on takes over.
    if (observerStack.length) observerStack[observerStack.length - 1].disconnect();
    walk(root);
    let observer = new MutationObserver((changes)=>{
        for (let change of changes){
            if (change.type !== 'childList') continue;
            // If the parent element of the added nodes is not within one of the targets,
            // and not already inside a hidden node, hide all of the new children.
            if (change.target.isConnected && ![
                ...visibleNodes,
                ...hiddenNodes
            ].some((node)=>(0, _domfunctions.nodeContains)(node, change.target))) for (let node of change.addedNodes){
                if ((node instanceof HTMLElement || node instanceof SVGElement) && isAlwaysVisibleNode(node)) visibleNodes.add(node);
                else if (node instanceof Element) walk(node);
            }
            if ((0, _flags.shadowDOM)()) {
                // if any of the observed shadow roots were removed, stop observing them
                for (let shadowRoot of shadowRootsToWatch)if (!shadowRoot.isConnected) {
                    observer.disconnect();
                    break;
                }
            }
        }
    });
    observer.observe(root, {
        childList: true,
        subtree: true
    });
    let shadowObservers = new Set();
    if ((0, _flags.shadowDOM)()) for (let shadowRoot of shadowRootsToWatch){
        // Disconnect single target instead of all https://github.com/whatwg/dom/issues/126
        let shadowObserver = new MutationObserver((changes)=>{
            for (let change of changes){
                if (change.type !== 'childList') continue;
                // If the parent element of the added nodes is not within one of the targets,
                // and not already inside a hidden node, hide all of the new children.
                if (change.target.isConnected && ![
                    ...visibleNodes,
                    ...hiddenNodes
                ].some((node)=>(0, _domfunctions.nodeContains)(node, change.target))) for (let node of change.addedNodes){
                    if ((node instanceof HTMLElement || node instanceof SVGElement) && isAlwaysVisibleNode(node)) visibleNodes.add(node);
                    else if (node instanceof Element) walk(node);
                }
                if ((0, _flags.shadowDOM)()) {
                    // if any of the observed shadow roots were removed, stop observing them
                    for (let shadowRoot of shadowRootsToWatch)if (!shadowRoot.isConnected) {
                        observer.disconnect();
                        break;
                    }
                }
            }
        });
        shadowObserver.observe(shadowRoot, {
            childList: true,
            subtree: true
        });
        shadowObservers.add(shadowObserver);
    }
    let observerWrapper = {
        visibleNodes,
        hiddenNodes,
        observe () {
            observer.observe(root, {
                childList: true,
                subtree: true
            });
        },
        disconnect () {
            observer.disconnect();
        }
    };
    observerStack.push(observerWrapper);
    return ()=>{
        observer.disconnect();
        if ((0, _flags.shadowDOM)()) for (let shadowObserver of shadowObservers)shadowObserver.disconnect();
        for (let node of hiddenNodes){
            let count = refCountMap.get(node);
            if (count == null) continue;
            if (count === 1) {
                setHidden(node, false);
                refCountMap.delete(node);
            } else refCountMap.set(node, count - 1);
        }
        // Remove this observer from the stack, and start the previous one.
        if (observerWrapper === observerStack[observerStack.length - 1]) {
            observerStack.pop();
            if (observerStack.length) observerStack[observerStack.length - 1].observe();
        } else observerStack.splice(observerStack.indexOf(observerWrapper), 1);
    };
}
function keepVisible(element) {
    let observer = observerStack[observerStack.length - 1];
    if (observer && !observer.visibleNodes.has(element)) {
        observer.visibleNodes.add(element);
        return ()=>{
            observer.visibleNodes.delete(element);
        };
    }
}

},{"../utils/shadowdom/ShadowTreeWalker":"grvf5","../utils/domHelpers":"cYkFa","../utils/shadowdom/DOMFunctions":"8kfpz","react-stately/private/flags/flags":"ahU3Z","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1LtRR":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior for overlays such as dialogs, popovers, and menus.
 * Hides the overlay when the user interacts outside it, when the Escape key is pressed,
 * or optionally, on blur. Only the top-most overlay will close at once.
 */ parcelHelpers.export(exports, "useOverlay", ()=>useOverlay);
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _focusScope = require("../focus/FocusScope");
var _react = require("react");
var _useFocusWithin = require("../interactions/useFocusWithin");
var _useInteractOutside = require("../interactions/useInteractOutside");
var _useKeyboard = require("../interactions/useKeyboard");
const visibleOverlays = [];
function useOverlay(props, ref) {
    let { onClose, shouldCloseOnBlur, isOpen, isDismissable = false, isKeyboardDismissDisabled = false, shouldCloseOnInteractOutside } = props;
    let lastVisibleOverlay = (0, _react.useRef)(undefined);
    // Add the overlay ref to the stack of visible overlays on mount, and remove on unmount.
    (0, _react.useEffect)(()=>{
        if (isOpen && !visibleOverlays.includes(ref)) {
            visibleOverlays.push(ref);
            return ()=>{
                let index = visibleOverlays.indexOf(ref);
                if (index >= 0) visibleOverlays.splice(index, 1);
            };
        }
    }, [
        isOpen,
        ref
    ]);
    // Only hide the overlay when it is the topmost visible overlay in the stack
    let onHide = ()=>{
        if (visibleOverlays[visibleOverlays.length - 1] === ref && onClose) onClose();
    };
    let onInteractOutsideStart = (e)=>{
        const topMostOverlay = visibleOverlays[visibleOverlays.length - 1];
        lastVisibleOverlay.current = topMostOverlay;
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside((0, _domfunctions.getEventTarget)(e))) {
            if (topMostOverlay === ref) e.stopPropagation();
        }
    };
    let onInteractOutside = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside((0, _domfunctions.getEventTarget)(e))) {
            if (visibleOverlays[visibleOverlays.length - 1] === ref) e.stopPropagation();
            if (lastVisibleOverlay.current === ref) onHide();
        }
        lastVisibleOverlay.current = undefined;
    };
    // Handle the escape key
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            Escape: ()=>{
                if (!isKeyboardDismissDisabled) {
                    onHide();
                    return;
                }
                return false;
            }
        }
    });
    // Handle clicking outside the overlay to close it
    (0, _useInteractOutside.useInteractOutside)({
        ref,
        onInteractOutside: isDismissable && isOpen ? onInteractOutside : undefined,
        onInteractOutsideStart
    });
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)({
        isDisabled: !shouldCloseOnBlur,
        onBlurWithin: (e)=>{
            // Do not close if relatedTarget is null, which means focus is lost to the body.
            // That can happen when switching tabs, or due to a VoiceOver/Chrome bug with Control+Option+Arrow navigation.
            // Clicking on the body to close the overlay should already be handled by useInteractOutside.
            // https://github.com/adobe/react-spectrum/issues/4130
            // https://github.com/adobe/react-spectrum/issues/4922
            //
            // If focus is moving into a child focus scope (e.g. menu inside a dialog),
            // do not close the outer overlay. At this point, the active scope should
            // still be the outer overlay, since blur events run before focus.
            if (!e.relatedTarget || (0, _focusScope.isElementInChildOfActiveScope)(e.relatedTarget)) return;
            if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.relatedTarget)) onClose?.();
        }
    });
    return {
        overlayProps: {
            ...keyboardProps,
            ...focusWithinProps
        },
        underlayProps: {}
    };
}

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../focus/FocusScope":"E8d3D","react":"gOP0N","../interactions/useFocusWithin":"bkSQo","../interactions/useInteractOutside":"fgkZg","../interactions/useKeyboard":"aHm7i","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fgkZg":[function(require,module,exports,__globalThis) {
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
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Example, used in components like Dialogs and Popovers so they can close
 * when a user clicks outside them.
 */ parcelHelpers.export(exports, "useInteractOutside", ()=>useInteractOutside);
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _domHelpers = require("../utils/domHelpers");
var _react = require("react");
var _useEffectEvent = require("../utils/useEffectEvent");
function useInteractOutside(props) {
    let { ref, onInteractOutside, isDisabled, onInteractOutsideStart } = props;
    let stateRef = (0, _react.useRef)({
        isPointerDown: false,
        ignoreEmulatedMouseEvents: false
    });
    let onPointerDown = (0, _useEffectEvent.useEffectEvent)((e)=>{
        if (onInteractOutside && isValidEvent(e, ref)) {
            if (onInteractOutsideStart) onInteractOutsideStart(e);
            stateRef.current.isPointerDown = true;
        }
    });
    let triggerInteractOutside = (0, _useEffectEvent.useEffectEvent)((e)=>{
        if (onInteractOutside) onInteractOutside(e);
    });
    (0, _react.useEffect)(()=>{
        let state = stateRef.current;
        if (isDisabled) return;
        const element = ref.current;
        const documentObject = (0, _domHelpers.getOwnerDocument)(element);
        // Use pointer events if available. Otherwise, fall back to mouse and touch events.
        if (typeof PointerEvent !== 'undefined') {
            let onClick = (e)=>{
                if (state.isPointerDown && isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            // changing these to capture phase fixed combobox
            // Use click instead of pointerup to avoid Android Chrome issue
            // https://issues.chromium.org/issues/40732224
            documentObject.addEventListener('pointerdown', onPointerDown, true);
            documentObject.addEventListener('click', onClick, true);
            return ()=>{
                documentObject.removeEventListener('pointerdown', onPointerDown, true);
                documentObject.removeEventListener('click', onClick, true);
            };
        }
    }, [
        ref,
        isDisabled
    ]);
}
function isValidEvent(event, ref) {
    if (event.button > 0) return false;
    let target = (0, _domfunctions.getEventTarget)(event);
    if (target) {
        // if the event target is no longer in the document, ignore
        const ownerDocument = target.ownerDocument;
        if (!ownerDocument || !(0, _domfunctions.nodeContains)(ownerDocument.documentElement, target)) return false;
        // If the target is within a top layer element (e.g. toasts), ignore.
        if (target.closest('[data-react-aria-top-layer]')) return false;
    }
    if (!ref.current) return false;
    // When the event source is inside a Shadow DOM, event.target is just the shadow root.
    // Using event.composedPath instead means we can get the actual element inside the shadow root.
    // This only works if the shadow root is open, there is no way to detect if it is closed.
    // If the event composed path contains the ref, interaction is inside.
    return !event.composedPath().includes(ref.current);
}

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","react":"gOP0N","../utils/useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9SGDE":[function(require,module,exports,__globalThis) {
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
 * Prevents scrolling on the document body on mount, and
 * restores it on unmount. Also ensures that content does not
 * shift due to the scrollbars disappearing.
 */ parcelHelpers.export(exports, "usePreventScroll", ()=>usePreventScroll);
var _domHelpers = require("../utils/domHelpers");
var _chain = require("../utils/chain");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _getNonce = require("../utils/getNonce");
var _getScrollParent = require("../utils/getScrollParent");
var _platform = require("../utils/platform");
var _isScrollable = require("../utils/isScrollable");
var _runAfterKeyboard = require("../utils/runAfterKeyboard");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _keyboard = require("../utils/keyboard");
const visualViewport = typeof document !== 'undefined' && window.visualViewport;
// The number of active usePreventScroll calls. Used to determine whether to revert back to the original page style/scroll position
let preventScrollCount = 0;
let restore;
function usePreventScroll(options = {}) {
    let { isDisabled } = options;
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (isDisabled) return;
        preventScrollCount++;
        if (preventScrollCount === 1) {
            if ((0, _platform.isIOS)() && (0, _platform.isWebKit)()) restore = preventScrollMobileWebKit();
            else restore = preventScrollStandard();
        }
        return ()=>{
            preventScrollCount--;
            if (preventScrollCount === 0) restore();
        };
    }, [
        isDisabled
    ]);
}
// For most browsers, all we need to do is set `overflow: hidden` on the root element, and
// add some padding to prevent the page from shifting when the scrollbar is hidden.
function preventScrollStandard() {
    let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    return (0, _chain.chain)(scrollbarWidth > 0 && // Use scrollbar-gutter when supported because it also works for fixed positioned elements.
    ('scrollbarGutter' in document.documentElement.style ? (0, _domHelpers.setStyle)(document.documentElement, 'scrollbar-gutter', 'stable') : (0, _domHelpers.setStyle)(document.documentElement, 'padding-right', `${scrollbarWidth}px`)), (0, _domHelpers.setStyle)(document.documentElement, 'overflow', 'hidden'));
}
// Mobile Safari is a whole different beast. Even with overflow: hidden,
// it still scrolls the page in many situations:
//
// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
//    it, so it becomes scrollable.
// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
//    This may cause even fixed position elements to scroll off the screen.
// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
//
// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
//
// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
//    on the window.
// 2. Set `overscroll-behavior: contain` on nested scrollable regions so they do not scroll the page when at
//    the top or bottom. Work around a bug where this does not work when the element does not actually overflow
//    by preventing default in a `touchmove` event. This is best effort: we can't prevent default when pinch
//    zooming or when an element contains text selection, which may allow scrolling in some cases.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
function preventScrollMobileWebKit() {
    // Set overflow hidden so scrollIntoViewport() (useSelectableCollection) sees isScrollPrevented and
    // scrolls only scroll parents instead of calling native scrollIntoView() which moves the window.
    let restoreOverflow = (0, _domHelpers.setStyle)(document.documentElement, 'overflow', 'hidden');
    let scrollable;
    let allowTouchMove = false;
    let onTouchStart = (e)=>{
        // Store the nearest scrollable parent element from the element that the user touched.
        let target = (0, _domfunctions.getEventTarget)(e);
        scrollable = (0, _isScrollable.isScrollable)(target) ? target : (0, _getScrollParent.getScrollParent)(target, true);
        allowTouchMove = false;
        // If the target is selected, don't preventDefault in touchmove to allow user to adjust selection.
        let selection = target.ownerDocument.defaultView.getSelection();
        if (selection && !selection.isCollapsed && selection.containsNode(target, true)) allowTouchMove = true;
        // If this is a range input, allow touch move to allow user to adjust the slider value
        if (e.composedPath().some((el)=>el instanceof HTMLInputElement && el.type === 'range')) allowTouchMove = true;
        // If this is a focused input element with a selected range, allow user to drag the selection handles.
        if ('selectionStart' in target && 'selectionEnd' in target && target.selectionStart < target.selectionEnd && target.ownerDocument.activeElement === target) allowTouchMove = true;
    };
    // Prevent scrolling up when at the top and scrolling down when at the bottom
    // of a nested scrollable area, otherwise mobile Safari will start scrolling
    // the window instead.
    // This must be applied before the touchstart event as of iOS 26, so inject it as a <style> element.
    let style = document.createElement('style');
    let nonce = (0, _getNonce.getNonce)();
    if (nonce) style.nonce = nonce;
    style.textContent = `
@layer {
  * {
    overscroll-behavior: contain;
  }
}`.trim();
    document.head.prepend(style);
    let onTouchMove = (e)=>{
        // Allow pinch-zooming.
        if (e.touches.length === 2 || allowTouchMove) return;
        // Prevent scrolling the window.
        if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
            e.preventDefault();
            return;
        }
        // overscroll-behavior should prevent scroll chaining, but currently does not
        // if the element doesn't actually overflow. https://bugs.webkit.org/show_bug.cgi?id=243452
        // This checks that both the width and height do not overflow, otherwise we might
        // block horizontal scrolling too. In that case, adding `touch-action: pan-x` to
        // the element will prevent vertical page scrolling. We can't add that automatically
        // because it must be set before the touchstart event.
        if (scrollable.scrollHeight === scrollable.clientHeight && scrollable.scrollWidth === scrollable.clientWidth) e.preventDefault();
    };
    let onBlur = (e)=>{
        let target = (0, _domfunctions.getEventTarget)(e);
        let relatedTarget = e.relatedTarget;
        if (relatedTarget && (0, _keyboard.willOpenKeyboard)(relatedTarget)) // Re-focus programmatically to have the override below perform the scroll.
        relatedTarget.focus();
        else if (!relatedTarget) {
            // When tapping the Done button on the keyboard, focus moves to the body.
            // FocusScope will then restore focus back to the input. Later when tapping
            // the same input again, it is already focused, so no blur event will fire,
            // resulting in the flow above never running and Safari's native scrolling occurring.
            // Instead, move focus to the parent focusable element (e.g. the dialog).
            let focusable = target.parentElement?.closest('[tabindex]');
            focusable?.focus({
                preventScroll: true
            });
        }
    };
    // Override programmatic focus to scroll into view without scrolling the whole page.
    let focus = HTMLElement.prototype.focus;
    Reflect.defineProperty(HTMLElement.prototype, 'focus', {
        configurable: true,
        writable: true,
        value: function(opts) {
            // Focus the element without scrolling the page.
            focus.call(this, {
                ...opts,
                preventScroll: true
            });
            if (!opts || !opts.preventScroll) {
                let scroll = ()=>{
                    let activeElement = (0, _domfunctions.getActiveElement)();
                    if (activeElement === this) scrollIntoView(this);
                };
                (0, _runAfterKeyboard.runAfterKeyboard)((isOpen)=>isOpen ? scroll() : (0, _runAfterKeyboard.runAfterKeyboardTransition)(()=>scroll()));
            }
        }
    });
    let removeEvents = (0, _chain.chain)((0, _domHelpers.addEvent)(document, 'touchstart', onTouchStart, {
        passive: false,
        capture: true
    }), (0, _domHelpers.addEvent)(document, 'touchmove', onTouchMove, {
        passive: false,
        capture: true
    }), (0, _domHelpers.addEvent)(document, 'blur', onBlur, true));
    return ()=>{
        restoreOverflow();
        removeEvents();
        style.remove();
        Reflect.defineProperty(HTMLElement.prototype, 'focus', {
            configurable: true,
            writable: true,
            value: focus
        });
    };
}
function scrollIntoView(target) {
    let root = document.scrollingElement || document.documentElement;
    let nextTarget = target;
    while(nextTarget && nextTarget !== root && nextTarget.isConnected){
        // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
        let scrollable = (0, _getScrollParent.getScrollParent)(nextTarget);
        if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== nextTarget) {
            let scrollableRect = scrollable.getBoundingClientRect();
            let targetRect = nextTarget.getBoundingClientRect();
            if (targetRect.top < scrollableRect.top || targetRect.bottom > scrollableRect.top + nextTarget.clientHeight) {
                let bottom = scrollableRect.bottom;
                if (visualViewport) bottom = Math.min(bottom, visualViewport.offsetTop + visualViewport.height);
                // Center within the viewport.
                let adjustment = targetRect.top - scrollableRect.top - ((bottom - scrollableRect.top) / 2 - targetRect.height / 2);
                scrollable.scrollTo({
                    // Clamp to the valid range to prevent over-scrolling.
                    top: Math.max(0, Math.min(scrollable.scrollHeight - scrollable.clientHeight, scrollable.scrollTop + adjustment)),
                    behavior: 'smooth'
                });
            }
        }
        nextTarget = scrollable.parentElement;
    }
}

},{"../utils/domHelpers":"cYkFa","../utils/chain":"bQmEj","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/getNonce":"gQ9ws","../utils/getScrollParent":"NRzeg","../utils/platform":"eBqgD","../utils/isScrollable":"2UC33","../utils/runAfterKeyboard":"bwB3z","../utils/useLayoutEffect":"h7M6K","../utils/keyboard":"fXhXT","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"NRzeg":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "getScrollParent", ()=>getScrollParent);
var _isScrollable = require("./isScrollable");
function getScrollParent(node, checkForOverflow) {
    let scrollableNode = node;
    if ((0, _isScrollable.isScrollable)(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
    while(scrollableNode && !(0, _isScrollable.isScrollable)(scrollableNode, checkForOverflow))scrollableNode = scrollableNode.parentElement;
    return scrollableNode || document.scrollingElement || document.documentElement;
}

},{"./isScrollable":"2UC33","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bwB3z":[function(require,module,exports,__globalThis) {
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
 * Delays a callback execution until a keyboard transition may no longer impact layout.
 * Guarantees an invocation if an expected transition did not finish within 300ms.
 */ parcelHelpers.export(exports, "runAfterKeyboard", ()=>runAfterKeyboard);
/**
 * Delays a callback execution until the on-screen keyboard has finished its transition.
 * Guarantees an invocation if an expected transition did not finish within 600ms.
 */ parcelHelpers.export(exports, "runAfterKeyboardTransition", ()=>runAfterKeyboardTransition);
var _domfunctions = require("./shadowdom/DOMFunctions");
var _keyboard = require("./keyboard");
var _platform = require("./platform");
const WEBKIT_OPEN_DELAY = 200;
const TRANSITION_FRAMETIME = 50;
const TRANSITION_TIMEOUT = 600;
const listenersByWindow = new WeakMap();
const transitionCallbacks = new Set();
const resizeCallbacks = new Set();
function onTransitionFrame(wasOpenKeyboard, signal) {
    let isOpenKeyboard = (0, _keyboard.isKeyboardOpen)();
    // Flush resize callbacks when the keyboard has affected layout or we ran out of time.
    if (wasOpenKeyboard !== isOpenKeyboard || signal.aborted) for (let callback of resizeCallbacks){
        callback(isOpenKeyboard);
        resizeCallbacks.delete(callback);
    }
    // WebKit only fires a single resize event at the start of an opening transition.
    // The animation takes ~200ms, so restart the listener and flush when it runs out of time.
    if (!wasOpenKeyboard && isOpenKeyboard && (0, _platform.isWebKit)() && !signal.aborted) {
        window.clearInterval(listenersByWindow.get(window));
        listenersByWindow.set(window, setupGlobalListeners(WEBKIT_OPEN_DELAY));
        return;
    }
    // Flush transition callbacks when the animation has completed or we ran out of time.
    if (wasOpenKeyboard !== isOpenKeyboard || signal.aborted) for (let callback of transitionCallbacks){
        callback(isOpenKeyboard);
        transitionCallbacks.delete(callback);
    }
    // Cancel the observer when no pending updates remain or we ran out of time.
    if (resizeCallbacks.size + transitionCallbacks.size <= 0 || signal.aborted) {
        window.clearInterval(listenersByWindow.get(window));
        listenersByWindow.delete(window);
    }
}
function setupGlobalListeners(timeout = TRANSITION_TIMEOUT) {
    return window.setInterval(onTransitionFrame, TRANSITION_FRAMETIME, (0, _keyboard.isKeyboardOpen)(), AbortSignal.timeout(timeout));
}
function runAfterKeyboard(fn) {
    // Flush synchronously when keyboard is unsupported. This is default for non-touch devices
    // or devices which did not open their OSK within our opening timeout.
    if (!(0, _keyboard.supportsKeyboard)()) return fn(false), ()=>{};
    // Wait two frames to see if focus lands on an input.
    let frame = window.requestAnimationFrame(()=>{
        frame = window.requestAnimationFrame(()=>{
            let activeElement = document.hasFocus() ? (0, _domfunctions.getActiveElement)() : null;
            let willKeyboardOpen = (0, _keyboard.willOpenKeyboard)(activeElement);
            // If keyboard won't change, call the function immediately.
            if ((0, _keyboard.isKeyboardOpen)() === willKeyboardOpen) return fn(willKeyboardOpen);
            // On close, fire immediately since consumers may assert the ICB.
            if ((0, _keyboard.isKeyboardOpen)() && !willKeyboardOpen) return fn(willKeyboardOpen);
            resizeCallbacks.add(fn);
            if (!listenersByWindow.has(window)) listenersByWindow.set(window, setupGlobalListeners());
        });
    });
    return ()=>{
        window.cancelAnimationFrame(frame);
        resizeCallbacks.delete(fn);
    };
}
function runAfterKeyboardTransition(fn) {
    // Flush synchronously when keyboard is unsupported. This is default for non-touch devices
    // or devices which did not open their OSK within our opening timeout.
    if (!(0, _keyboard.supportsKeyboard)()) return fn(false), ()=>{};
    // Wait two frames to see if focus lands on an input.
    let frame = window.requestAnimationFrame(()=>{
        frame = window.requestAnimationFrame(()=>{
            let activeElement = document.hasFocus() ? (0, _domfunctions.getActiveElement)() : null;
            let willKeyboardOpen = (0, _keyboard.willOpenKeyboard)(activeElement);
            // If keyboard won't transition, fire immediately.
            if ((0, _keyboard.isKeyboardOpen)() === willKeyboardOpen) return fn(willKeyboardOpen);
            transitionCallbacks.add(fn);
            if (!listenersByWindow.has(window)) listenersByWindow.set(window, setupGlobalListeners());
        });
    });
    return ()=>{
        window.cancelAnimationFrame(frame);
        transitionCallbacks.delete(fn);
    };
}

},{"./shadowdom/DOMFunctions":"8kfpz","./keyboard":"fXhXT","./platform":"eBqgD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kGjqH":[function(require,module,exports,__globalThis) {
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
 * Handles context menu events across mouse, touch, keyboard, and screen reader interactions.
 */ parcelHelpers.export(exports, "useContextMenu", ()=>useContextMenu);
var _react = require("react");
var _platform = require("../utils/platform");
var _mergeProps = require("../utils/mergeProps");
var _useLongPress = require("./useLongPress");
function useContextMenu(props) {
    // How to trigger context menu events on various platforms:
    // - macOS
    //   - Mouse right click
    //   - Control + click
    //   - Control + Enter (does not fire the contextmenu event in certain WebKit / Chrome versions - https://bugs.webkit.org/show_bug.cgi?id=302049, https://issues.chromium.org/issues/369897039)
    //   - Control + Option + Shift + M with VoiceOver
    // - Windows / Linux
    //   - Mouse right click
    //   - Shift + F10
    //   - Long press on a touch screen
    // - iOS
    //   - Long press (does not fire contextmenu event - https://bugs.webkit.org/show_bug.cgi?id=213953)
    // - Android
    //   - Long press
    let { onContextMenu } = props;
    let firedContextMenuEvent = (0, _react.useRef)(false);
    // iOS does not fire the contextmenu event, so use long press.
    let { longPressProps } = (0, _useLongPress.useLongPress)({
        onLongPressStart () {
            firedContextMenuEvent.current = false;
        },
        onLongPress (e) {
            if (!firedContextMenuEvent.current) onContextMenu?.({
                target: e.target,
                x: e.x,
                y: e.y
            });
            else firedContextMenuEvent.current = false;
        }
    });
    if (!onContextMenu) return {
        contextMenuProps: {}
    };
    return {
        // oxlint-disable-next-line react/react-compiler - it says we are reading a ref during render but that's not true...
        contextMenuProps: (0, _mergeProps.mergeProps)((0, _platform.isIOS)() ? longPressProps : {}, {
            onContextMenu (e) {
                e.stopPropagation();
                e.preventDefault();
                firedContextMenuEvent.current = true;
                let rect = e.currentTarget.getBoundingClientRect();
                onContextMenu({
                    target: e.currentTarget,
                    x: e.clientX - rect.x,
                    y: e.clientY - rect.y
                });
            },
            onKeyDown (e) {
                // macOS has a default keyboard shortcut to show the contextmenu: Ctrl + Enter.
                // However, some versions of Safari and Chrome do not trigger the contextmenu event.
                // Fixed in https://github.com/WebKit/WebKit/pull/62278 (currently in WekKit nightly) and
                // https://github.com/chromium/chromium/commit/268c876c191cd4712c2d1043aab9760fb71d9be5 (Chrome 147).
                // Remove this workaround once those are broadly available.
                // An additional bug still occurs when the target has a border-radius: https://bugs.webkit.org/show_bug.cgi?id=317496
                if ((0, _platform.isMac)()) {
                    if (e.ctrlKey && e.key === 'Enter') {
                        firedContextMenuEvent.current = false;
                        let target = e.currentTarget;
                        e.stopPropagation();
                        setTimeout(()=>{
                            if (!firedContextMenuEvent.current) {
                                let rect = target.getBoundingClientRect();
                                onContextMenu({
                                    target,
                                    x: rect.width / 2,
                                    y: rect.height / 2
                                });
                            } else firedContextMenuEvent.current = false;
                        }, 10);
                    }
                }
            }
        })
    };
}

},{"react":"gOP0N","../utils/platform":"eBqgD","../utils/mergeProps":"jycxS","./useLongPress":"b7u5T","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8lll3":[function(require,module,exports,__globalThis) {
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
 * Returns a cached LocalizedStringDictionary for the given strings.
 */ parcelHelpers.export(exports, "useLocalizedStringDictionary", ()=>useLocalizedStringDictionary);
/**
 * Provides localized string formatting for the current locale. Supports interpolating variables,
 * selecting the correct pluralization, and formatting numbers. Automatically updates when the
 * locale changes.
 *
 * @param strings - A mapping of languages to localized strings by key.
 */ parcelHelpers.export(exports, "useLocalizedStringFormatter", ()=>useLocalizedStringFormatter);
var _string = require("@internationalized/string");
var _i18Nprovider = require("./I18nProvider");
var _react = require("react");
const cache = new WeakMap();
function getCachedDictionary(strings) {
    let dictionary = cache.get(strings);
    if (!dictionary) {
        dictionary = new (0, _string.LocalizedStringDictionary)(strings);
        cache.set(strings, dictionary);
    }
    return dictionary;
}
function useLocalizedStringDictionary(strings, packageName) {
    return packageName && (0, _string.LocalizedStringDictionary).getGlobalDictionaryForPackage(packageName) || getCachedDictionary(strings);
}
function useLocalizedStringFormatter(strings, packageName) {
    let { locale } = (0, _i18Nprovider.useLocale)();
    let dictionary = useLocalizedStringDictionary(strings, packageName);
    return (0, _react.useMemo)(()=>new (0, _string.LocalizedStringFormatter)(locale, dictionary), [
        locale,
        dictionary
    ]);
}

},{"@internationalized/string":[["LocalizedStringDictionary","3Dyf5"],["LocalizedStringFormatter","Pfhr4"]],"./I18nProvider":"czGuc","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3Dyf5":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "LocalizedStringDictionary", ()=>$a747a10fe70a57da$export$c17fa47878dc55b6);
const $a747a10fe70a57da$var$localeSymbol = Symbol.for('react-aria.i18n.locale');
const $a747a10fe70a57da$var$stringsSymbol = Symbol.for('react-aria.i18n.strings');
let $a747a10fe70a57da$var$cachedGlobalStrings = undefined;
class $a747a10fe70a57da$export$c17fa47878dc55b6 {
    constructor(messages, defaultLocale = 'en-US'){
        // Clone messages so we don't modify the original object.
        // Filter out entries with falsy values which may have been caused by applying optimize-locales-plugin.
        this.strings = Object.fromEntries(Object.entries(messages).filter(([, v])=>v));
        this.defaultLocale = defaultLocale;
    }
    /** Returns a localized string for the given key and locale. */ getStringForLocale(key, locale) {
        let strings = this.getStringsForLocale(locale);
        let string = strings[key];
        if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
        return string;
    }
    /** Returns all localized strings for the given locale. */ getStringsForLocale(locale) {
        let strings = this.strings[locale];
        if (!strings) {
            strings = $a747a10fe70a57da$var$getStringsForLocale(locale, this.strings, this.defaultLocale);
            this.strings[locale] = strings;
        }
        return strings;
    }
    static getGlobalDictionaryForPackage(packageName) {
        if (typeof window === 'undefined') return null;
        let locale = window[$a747a10fe70a57da$var$localeSymbol];
        if ($a747a10fe70a57da$var$cachedGlobalStrings === undefined) {
            let globalStrings = window[$a747a10fe70a57da$var$stringsSymbol];
            if (!globalStrings) return null;
            $a747a10fe70a57da$var$cachedGlobalStrings = {};
            for(let pkg in globalStrings)$a747a10fe70a57da$var$cachedGlobalStrings[pkg] = new $a747a10fe70a57da$export$c17fa47878dc55b6({
                [locale]: globalStrings[pkg]
            }, locale);
        }
        let dictionary = $a747a10fe70a57da$var$cachedGlobalStrings?.[packageName];
        if (!dictionary) throw new Error(`Strings for package "${packageName}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
        return dictionary;
    }
}
function $a747a10fe70a57da$var$getStringsForLocale(locale, strings, defaultLocale = 'en-US') {
    // If there is an exact match, use it.
    if (strings[locale]) return strings[locale];
    // Attempt to find the closest match by language.
    // For example, if the locale is fr-CA (French Canadian), but there is only
    // an fr-FR (France) set of strings, use that.
    // This could be replaced with Intl.LocaleMatcher once it is supported.
    // https://github.com/tc39/proposal-intl-localematcher
    let language = $a747a10fe70a57da$var$getLanguage(locale);
    // If the locale has an explicit script (e.g. sr-Latn-RS), prefer a
    // language-script match (sr-Latn) over a language-only match (sr), since
    // those may represent entirely different scripts.
    let script = $a747a10fe70a57da$var$getScript(locale);
    if (script && strings[`${language}-${script}`]) return strings[`${language}-${script}`];
    if (strings[language]) return strings[language];
    for(let key in strings){
        if (key.startsWith(language + '-')) return strings[key];
    }
    // Nothing close, use english.
    return strings[defaultLocale];
}
function $a747a10fe70a57da$var$getLanguage(locale) {
    // @ts-ignore
    if (Intl.Locale) return new Intl.Locale(locale).language;
    return locale.split('-')[0];
}
function $a747a10fe70a57da$var$getScript(locale) {
    // @ts-ignore
    if (Intl.Locale) return new Intl.Locale(locale).script;
    return undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"Pfhr4":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "LocalizedStringFormatter", ()=>$b27c684a33948c64$export$2f817fcdc4b89ae0);
const $b27c684a33948c64$var$pluralRulesCache = new Map();
const $b27c684a33948c64$var$numberFormatCache = new Map();
class $b27c684a33948c64$export$2f817fcdc4b89ae0 {
    constructor(locale, strings){
        this.locale = locale;
        this.strings = strings;
    }
    /** Formats a localized string for the given key with the provided variables. */ format(key, variables) {
        let message = this.strings.getStringForLocale(key, this.locale);
        return typeof message === 'function' ? message(variables, this) : message;
    }
    plural(count, options, type = 'cardinal') {
        let opt = options['=' + count];
        if (opt) return typeof opt === 'function' ? opt() : opt;
        let key = this.locale + ':' + type;
        let pluralRules = $b27c684a33948c64$var$pluralRulesCache.get(key);
        if (!pluralRules) {
            pluralRules = new Intl.PluralRules(this.locale, {
                type: type
            });
            $b27c684a33948c64$var$pluralRulesCache.set(key, pluralRules);
        }
        let selected = pluralRules.select(count);
        opt = options[selected] || options.other;
        return typeof opt === 'function' ? opt() : opt;
    }
    number(value) {
        let numberFormat = $b27c684a33948c64$var$numberFormatCache.get(this.locale);
        if (!numberFormat) {
            numberFormat = new Intl.NumberFormat(this.locale);
            $b27c684a33948c64$var$numberFormatCache.set(this.locale, numberFormat);
        }
        return numberFormat.format(value);
    }
    select(options, value) {
        let opt = options[value] || options.other;
        return typeof opt === 'function' ? opt() : opt;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dnU5A":[function(require,module,exports,__globalThis) {
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
 * Handles the behavior and accessibility for an overlay trigger, e.g. a button
 * that opens a popover, menu, or other overlay that is positioned relative to the trigger.
 */ parcelHelpers.export(exports, "useOverlayTrigger", ()=>useOverlayTrigger);
var _useCloseOnScroll = require("./useCloseOnScroll");
var _react = require("react");
var _useId = require("../utils/useId");
function useOverlayTrigger(props, state, ref) {
    let { type } = props;
    let { isOpen } = state;
    // Backward compatibility. Share state close function with useOverlayPosition so it can close on scroll
    // without forcing users to pass onClose.
    (0, _react.useEffect)(()=>{
        if (ref && ref.current) (0, _useCloseOnScroll.onCloseMap).set(ref.current, state.close);
    });
    // Aria 1.1 supports multiple values for aria-haspopup other than just menus.
    // https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
    // However, we only add it for menus for now because screen readers often
    // announce it as a menu even for other values.
    let ariaHasPopup = undefined;
    if (type === 'menu') ariaHasPopup = true;
    else if (type === 'listbox') ariaHasPopup = 'listbox';
    let overlayId = (0, _useId.useId)();
    return {
        triggerProps: {
            'aria-haspopup': ariaHasPopup,
            'aria-expanded': isOpen,
            'aria-controls': isOpen ? overlayId : undefined,
            onPress: state.toggle
        },
        overlayProps: {
            id: overlayId
        }
    };
}

},{"./useCloseOnScroll":"5Qs2J","react":"gOP0N","../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5Qs2J":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "onCloseMap", ()=>onCloseMap);
/** @private */ parcelHelpers.export(exports, "useCloseOnScroll", ()=>useCloseOnScroll);
var _domHelpers = require("../utils/domHelpers");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _react = require("react");
const onCloseMap = new WeakMap();
function useCloseOnScroll(opts) {
    let { triggerRef, isOpen, onClose } = opts;
    (0, _react.useEffect)(()=>{
        if (!isOpen || onClose === null) return;
        let onScroll = (e)=>{
            // Ignore if scrolling an scrollable region outside the trigger's tree.
            let target = (0, _domfunctions.getEventTarget)(e);
            // window is not a Node and doesn't have contain, but window contains everything
            if (!triggerRef.current || target instanceof Node && !(0, _domfunctions.nodeContains)(target, triggerRef.current)) return;
            // Ignore scroll events on any input or textarea as the cursor position can cause it to scroll
            // such as in a combobox. Clicking the dropdown button places focus on the input, and if the
            // text inside the input extends beyond the 'end', then it will scroll so the cursor is visible at the end.
            if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
            let onCloseHandler = onClose || onCloseMap.get(triggerRef.current);
            if (onCloseHandler) onCloseHandler();
        };
        return (0, _domHelpers.addEvent)((0, _domfunctions.getPropagationTargets)(triggerRef.current), 'scroll', onScroll, true);
    }, [
        isOpen,
        onClose,
        triggerRef
    ]);
}

},{"../utils/domHelpers":"cYkFa","../utils/shadowdom/DOMFunctions":"8kfpz","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"58iim":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useResizeObserver", ()=>useResizeObserver);
var _react = require("react");
var _useEffectEvent = require("./useEffectEvent");
function hasResizeObserver() {
    return typeof window.ResizeObserver !== 'undefined';
}
function useResizeObserver(options) {
    // Only call onResize from inside the effect, otherwise we'll void our assumption that
    // useEffectEvents are safe to pass in.
    const { ref, box, onResize } = options;
    let onResizeEvent = (0, _useEffectEvent.useEffectEvent)(onResize);
    (0, _react.useEffect)(()=>{
        let element = ref?.current;
        if (!element) return;
        if (!hasResizeObserver()) {
            window.addEventListener('resize', onResizeEvent, false);
            return ()=>{
                window.removeEventListener('resize', onResizeEvent, false);
            };
        } else {
            const resizeObserverInstance = new window.ResizeObserver((entries)=>{
                if (!entries.length) return;
                onResizeEvent();
            });
            resizeObserverInstance.observe(element, {
                box
            });
            return ()=>{
                if (element) resizeObserverInstance.unobserve(element);
            };
        }
    }, [
        ref,
        box
    ]);
}

},{"react":"gOP0N","./useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4TSYQ":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "SectionContext", ()=>SectionContext);
parcelHelpers.export(exports, "Section", ()=>Section);
parcelHelpers.export(exports, "DefaultCollectionRenderer", ()=>DefaultCollectionRenderer);
parcelHelpers.export(exports, "renderAfterDropIndicators", ()=>renderAfterDropIndicators);
parcelHelpers.export(exports, "CollectionRendererContext", ()=>CollectionRendererContext);
parcelHelpers.export(exports, "usePersistedKeys", ()=>usePersistedKeys);
var _jsxRuntime = require("preact/jsx-runtime");
var _collectionBuilder = require("react-aria/CollectionBuilder");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useCachedChildren = require("react-aria/private/collections/useCachedChildren");
const SectionContext = /*#__PURE__*/ (0, _react.createContext)(null);
const Section = /*#__PURE__*/ (0, _collectionBuilder.createBranchComponent)('section', (props, ref, section)=>{
    let { name, render } = (0, _react.useContext)(SectionContext);
    return render(props, ref, section, 'react-aria-Section');
});
const DefaultCollectionRenderer = {
    CollectionRoot ({ collection, renderDropIndicator }) {
        return useCollectionRender(collection, null, renderDropIndicator);
    },
    CollectionBranch ({ collection, parent, renderDropIndicator }) {
        return useCollectionRender(collection, parent, renderDropIndicator);
    }
};
function useCollectionRender(collection, parent, renderDropIndicator) {
    return (0, _useCachedChildren.useCachedChildren)({
        items: parent ? collection.getChildren(parent.key) : collection,
        dependencies: [
            renderDropIndicator
        ],
        children (node) {
            // Return a empty fragment since we don't want to render the content twice
            // If we don't skip the content node here, we end up rendering them twice in a Tree since we also render the content node in TreeItem
            if (node.type === 'content') return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {});
            let rendered = node.render(node);
            if (!renderDropIndicator || node.type !== 'item') return rendered;
            return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    renderDropIndicator({
                        type: 'item',
                        key: node.key,
                        dropPosition: 'before'
                    }),
                    rendered,
                    renderAfterDropIndicators(collection, node, renderDropIndicator)
                ]
            });
        }
    });
}
function renderAfterDropIndicators(collection, node, renderDropIndicator) {
    let key = node.key;
    let keyAfter = collection.getKeyAfter(key);
    let nextItemInFlattenedCollection = keyAfter != null ? collection.getItem(keyAfter) : null;
    while(nextItemInFlattenedCollection != null && nextItemInFlattenedCollection.type !== 'item'){
        keyAfter = collection.getKeyAfter(nextItemInFlattenedCollection.key);
        nextItemInFlattenedCollection = keyAfter != null ? collection.getItem(keyAfter) : null;
    }
    let nextItemInSameLevel = node.nextKey != null ? collection.getItem(node.nextKey) : null;
    while(nextItemInSameLevel != null && nextItemInSameLevel.type !== 'item')nextItemInSameLevel = nextItemInSameLevel.nextKey != null ? collection.getItem(nextItemInSameLevel.nextKey) : null;
    // Render one or more "after" drop indicators when the next item in the flattened collection
    // has a smaller level, is not an item, or there are no more items in the collection.
    // Otherwise, the "after" position is equivalent to the next item's "before" position.
    let afterIndicators = [];
    if (nextItemInSameLevel == null) {
        let current = node;
        while(current?.type === 'item' && (!nextItemInFlattenedCollection || current.parentKey !== nextItemInFlattenedCollection.parentKey && nextItemInFlattenedCollection.level < current.level)){
            let indicator = renderDropIndicator({
                type: 'item',
                key: current.key,
                dropPosition: 'after'
            });
            if (/*#__PURE__*/ (0, _react.isValidElement)(indicator)) afterIndicators.push(/*#__PURE__*/ (0, _react.cloneElement)(indicator, {
                key: `${current.key}-after`
            }));
            current = current.parentKey != null ? collection.getItem(current.parentKey) : null;
        }
    }
    return afterIndicators;
}
const CollectionRendererContext = /*#__PURE__*/ (0, _react.createContext)(DefaultCollectionRenderer);
function usePersistedKeys(focusedKey) {
    return (0, _react.useMemo)(()=>focusedKey != null ? new Set([
            focusedKey
        ]) : null, [
        focusedKey
    ]);
}

},{"preact/jsx-runtime":"b2Fbn","react-aria/CollectionBuilder":"kFD1B","react":"gOP0N","react-aria/private/collections/useCachedChildren":"5c0At","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hBYeu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inertValue", ()=>inertValue);
var _react = require("react");
function inertValue(value) {
    const pieces = (0, _react.version).split('.');
    const major = parseInt(pieces[0], 10);
    if (major >= 19) return value;
    // compatibility with React < 19
    return value ? 'true' : undefined;
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1ahiI":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useLoadMoreSentinel", ()=>useLoadMoreSentinel);
var _getScrollParent = require("./getScrollParent");
var _react = require("react");
var _useEffectEvent = require("./useEffectEvent");
var _useLayoutEffect = require("./useLayoutEffect");
function useLoadMoreSentinel(props, ref) {
    let { collection, onLoadMore, scrollOffset = 1, direction = 'end' } = props;
    let sentinelObserver = (0, _react.useRef)(null);
    let triggerLoadMore = (0, _useEffectEvent.useEffectEvent)((entries)=>{
        // Use "isIntersecting" over an equality check of 0 since it seems like there is cases where
        // a intersection ratio of 0 can be reported when isIntersecting is actually true
        for (let entry of entries)// Note that this will be called if the collection changes, even if onLoadMore was already called and is being processed.
        // Up to user discretion as to how to handle these multiple onLoadMore calls
        if (entry.isIntersecting && onLoadMore) onLoadMore();
    });
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (ref.current) {
            // Tear down and set up a new IntersectionObserver when the collection changes so that we can properly trigger additional loadMores if there is room for more items
            // Need to do this tear down and set up since using a large rootMargin will mean the observer's callback isn't called even when scrolling the item into view beause its visibility hasn't actually changed
            // https://codesandbox.io/p/sandbox/magical-swanson-dhgp89?file=%2Fsrc%2FApp.js%3A21%2C21
            const margin = 100 * scrollOffset;
            // For direction='start', right/left margins have no affect for vertical scroll containers. We are not supporting reverse horizontal scroll containers for now.
            const rootMargin = direction === 'start' ? `${margin}% 0px 0px 0px` : `0px ${margin}% ${margin}% ${margin}%`;
            sentinelObserver.current = new IntersectionObserver(triggerLoadMore, {
                root: (0, _getScrollParent.getScrollParent)(ref?.current),
                rootMargin
            });
            sentinelObserver.current.observe(ref.current);
        }
        return ()=>{
            if (sentinelObserver.current) sentinelObserver.current.disconnect();
        };
    }, [
        collection,
        ref,
        scrollOffset,
        direction
    ]);
}

},{"./getScrollParent":"NRzeg","react":"gOP0N","./useEffectEvent":"grBNM","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8ei0d":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a dialog component.
 * A dialog is an overlay shown above other content in an application.
 */ parcelHelpers.export(exports, "useDialog", ()=>useDialog);
var _filterDOMProps = require("../utils/filterDOMProps");
var _focusSafely = require("../interactions/focusSafely");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _react = require("react");
var _overlay = require("../overlays/Overlay");
var _useId = require("../utils/useId");
function useDialog(props, ref) {
    let { role = 'dialog' } = props;
    let titleId = (0, _useId.useSlotId)();
    titleId = props['aria-label'] ? undefined : titleId;
    let contentId = (0, _useId.useSlotId)();
    contentId = role === 'alertdialog' && !props['aria-describedby'] ? contentId : undefined;
    let isRefocusing = (0, _react.useRef)(false);
    // Focus the dialog itself on mount, unless a child element is already focused.
    (0, _react.useEffect)(()=>{
        if (ref.current && !(0, _domfunctions.isFocusWithin)(ref.current)) {
            (0, _focusSafely.focusSafely)(ref.current);
            // Safari on iOS does not move the VoiceOver cursor to the dialog
            // or announce that it has opened until it has rendered. A workaround
            // is to wait for half a second, then blur and re-focus the dialog.
            let timeout = setTimeout(()=>{
                // Check that the dialog is still focused, or focused was lost to the body.
                if ((0, _domfunctions.getActiveElement)() === ref.current || (0, _domfunctions.getActiveElement)() === document.body) {
                    isRefocusing.current = true;
                    if (ref.current) {
                        ref.current.blur();
                        (0, _focusSafely.focusSafely)(ref.current);
                    }
                    isRefocusing.current = false;
                }
            }, 500);
            return ()=>{
                clearTimeout(timeout);
            };
        }
    }, [
        ref
    ]);
    (0, _overlay.useOverlayFocusContain)();
    // Warn in dev mode if the dialog has no accessible title.
    // This catches a common mistake where useDialog and useOverlayTriggerState
    // are used in the same component, causing the title element to not be
    // in the DOM when useSlotId queries for it.
    // Check the DOM element directly since aria-labelledby may be added by
    // wrapper components (e.g. RAC Dialog uses trigger ID as a fallback).
    let hasWarned = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{});
    let ariaDescribedby = props['aria-describedby'] ?? contentId;
    // We do not use aria-modal due to a Safari bug which forces the first focusable element to be focused
    // on mount when inside an iframe, no matter which element we programmatically focus.
    // See https://bugs.webkit.org/show_bug.cgi?id=211934.
    // useModal sets aria-hidden on all elements outside the dialog, so the dialog will behave as a modal
    // even without aria-modal on the dialog itself.
    return {
        dialogProps: {
            ...(0, _filterDOMProps.filterDOMProps)(props, {
                labelable: true
            }),
            role,
            tabIndex: -1,
            'aria-labelledby': props['aria-labelledby'] ?? titleId,
            'aria-describedby': ariaDescribedby,
            // Prevent blur events from reaching useOverlay, which may cause
            // popovers to close. Since focus is contained within the dialog,
            // we don't want this to occur due to the above useEffect.
            onBlur: (e)=>{
                if (isRefocusing.current) e.stopPropagation();
            }
        },
        titleProps: {
            id: titleId
        },
        contentProps: {
            id: contentId
        }
    };
}

},{"../utils/filterDOMProps":"h4XHF","../interactions/focusSafely":"2xT6S","../utils/shadowdom/DOMFunctions":"8kfpz","react":"gOP0N","../overlays/Overlay":"dm7Ko","../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dm7Ko":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "OverlayContext", ()=>OverlayContext);
/**
 * A container which renders an overlay such as a popover or modal in a portal,
 * and provides a focus scope for the child elements.
 */ parcelHelpers.export(exports, "Overlay", ()=>Overlay);
/** @private */ parcelHelpers.export(exports, "useOverlayFocusContain", ()=>useOverlayFocusContain);
var _jsxRuntime = require("preact/jsx-runtime");
var _pressResponder = require("../interactions/PressResponder");
var _useFocusable = require("../interactions/useFocusable");
var _focusScope = require("../focus/FocusScope");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
var _ssrprovider = require("../ssr/SSRProvider");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _portalProvider = require("./PortalProvider");
const OverlayContext = /*#__PURE__*/ (0, _reactDefault.default).createContext(null);
function Overlay(props) {
    let isSSR = (0, _ssrprovider.useIsSSR)();
    let { portalContainer = isSSR ? null : document.body, isExiting } = props;
    let [contain, setContain] = (0, _react.useState)(false);
    let contextValue = (0, _react.useMemo)(()=>({
            contain,
            setContain
        }), [
        contain,
        setContain
    ]);
    let { getContainer } = (0, _portalProvider.useUNSAFE_PortalContext)();
    if (!props.portalContainer && getContainer) portalContainer = getContainer();
    if (!portalContainer) return null;
    let contents = props.children;
    if (!props.disableFocusManagement) contents = /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _focusScope.FocusScope), {
        restoreFocus: true,
        contain: (props.shouldContainFocus || contain) && !isExiting,
        children: contents
    });
    contents = /*#__PURE__*/ (0, _jsxRuntime.jsx)(OverlayContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _pressResponder.ClearPressResponder), {
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _useFocusable.FocusableContext).Provider, {
                value: null,
                children: contents
            })
        })
    });
    return /*#__PURE__*/ (0, _reactDomDefault.default).createPortal(contents, portalContainer);
}
function useOverlayFocusContain() {
    let ctx = (0, _react.useContext)(OverlayContext);
    let setContain = ctx?.setContain;
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        setContain?.(true);
    }, [
        setContain
    ]);
}

},{"preact/jsx-runtime":"b2Fbn","../interactions/PressResponder":"e49up","../interactions/useFocusable":"6IFKj","../focus/FocusScope":"E8d3D","react":"gOP0N","react-dom":"gOP0N","../ssr/SSRProvider":"2cndP","../utils/useLayoutEffect":"h7M6K","./PortalProvider":"iYoU7","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"e49up":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "PressResponder", ()=>PressResponder);
parcelHelpers.export(exports, "ClearPressResponder", ()=>ClearPressResponder);
var _jsxRuntime = require("preact/jsx-runtime");
var _mergeProps = require("../utils/mergeProps");
var _context = require("./context");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useObjectRef = require("../utils/useObjectRef");
var _useSyncRef = require("../utils/useSyncRef");
const PressResponder = /*#__PURE__*/ (0, _reactDefault.default).forwardRef(({ children, ...props }, ref)=>{
    let isRegistered = (0, _react.useRef)(false);
    let prevContext = (0, _react.useContext)((0, _context.PressResponderContext));
    // oxlint-disable-next-line react/react-compiler
    let context = (0, _mergeProps.mergeProps)(prevContext || {}, {
        ...props,
        register () {
            isRegistered.current = true;
            if (prevContext) prevContext.register();
        }
    });
    context.ref = (0, _useObjectRef.useObjectRef)(ref || prevContext?.ref);
    (0, _useSyncRef.useSyncRef)(prevContext, context.ref);
    (0, _react.useEffect)(()=>{
        if (!isRegistered.current) isRegistered.current = true; // only warn once in strict mode.
    }, []);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _context.PressResponderContext).Provider, {
        value: context,
        children: children
    });
});
function ClearPressResponder({ children }) {
    let context = (0, _react.useMemo)(()=>({
            register: ()=>{}
        }), []);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _context.PressResponderContext).Provider, {
        value: context,
        children: children
    });
}

},{"preact/jsx-runtime":"b2Fbn","../utils/mergeProps":"jycxS","./context":"8Eyap","react":"gOP0N","../utils/useObjectRef":"ec0NJ","../utils/useSyncRef":"8a0bK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jB98p":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "HeadingContext", ()=>HeadingContext);
parcelHelpers.export(exports, "Heading", ()=>Heading);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const HeadingContext = /*#__PURE__*/ (0, _react.createContext)({});
const Heading = /*#__PURE__*/ (0, _react.forwardRef)(function Heading(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, HeadingContext);
    let { children, level = 3, className, ...domProps } = props;
    let Element = (0, _utils.dom)[`h${level}`];
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Element, {
        ...domProps,
        ref: ref,
        className: className ?? 'react-aria-Heading',
        children: children
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cMf28":[function(require,module,exports,__globalThis) {
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
 * Provides props for an element that hides its children visually
 * but keeps content visible to assistive technology.
 */ parcelHelpers.export(exports, "useVisuallyHidden", ()=>useVisuallyHidden);
/**
 * VisuallyHidden hides its children visually, while keeping content visible
 * to screen readers.
 */ parcelHelpers.export(exports, "VisuallyHidden", ()=>VisuallyHidden);
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useFocusWithin = require("../interactions/useFocusWithin");
const styles = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px',
    whiteSpace: 'nowrap'
};
function useVisuallyHidden(props = {}) {
    let { style, isFocusable } = props;
    let [isFocused, setFocused] = (0, _react.useState)(false);
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)({
        isDisabled: !isFocusable,
        onFocusWithinChange: (val)=>setFocused(val)
    });
    // If focused, don't hide the element.
    let combinedStyles = (0, _react.useMemo)(()=>{
        if (isFocused) // oxlint-disable-next-line react/react-compiler
        return style;
        else if (style) return {
            ...styles,
            ...style
        };
        else return styles;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isFocused
    ]);
    return {
        visuallyHiddenProps: {
            ...focusWithinProps,
            style: combinedStyles
        }
    };
}
function VisuallyHidden(props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { children, elementType: Element = 'div', isFocusable, style, ...otherProps } = props;
    let { visuallyHiddenProps } = useVisuallyHidden(props);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(Element, (0, _mergeProps.mergeProps)(otherProps, visuallyHiddenProps), children);
}

},{"../utils/mergeProps":"jycxS","react":"gOP0N","../interactions/useFocusWithin":"bkSQo","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fc1Bu":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useEnterAnimation", ()=>useEnterAnimation);
parcelHelpers.export(exports, "useExitAnimation", ()=>useExitAnimation);
var _chain = require("./chain");
var _reactDom = require("react-dom");
var _react = require("react");
var _domHelpers = require("./domHelpers");
var _useLayoutEffect = require("./useLayoutEffect");
function useEnterAnimation(ref, isReady = true) {
    let [isEntering, setEntering] = (0, _react.useState)(true);
    let isAnimationReady = isEntering && isReady;
    // Hide the element while it prepares for entry, using only non-layout-thrashing attributes.
    // This prevents accidental flashes of content in scenarios where no hidden styling is applied
    // while the enter animation is not yet ready (e.g. popovers prior to placement calculation).
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (!isReady && ref.current) return (0, _chain.chain)((0, _domHelpers.setStyle)(ref.current, 'opacity', '0'), (0, _domHelpers.setStyle)(ref.current, 'clip', 'rect(0 0 0 0)'), (0, _domHelpers.setStyle)(ref.current, 'clip-path', 'inset(50%)'), (0, _domHelpers.setStyle)(ref.current, 'mask-image', 'linear-gradient(#0000, #0000)'));
    }, [
        ref,
        isReady
    ]);
    // There are two cases for entry animations:
    // 1. CSS @keyframes. The `animation` property is set during the isEntering state, and it is removed after the animation finishes.
    // 2. CSS transitions. The initial styles are applied during the isEntering state, and removed immediately, causing the transition to occur.
    //
    // In the second case, cancel any transitions that were triggered prior to the isEntering = false state (when the transition is supposed to start).
    // This can happen when isReady starts as false (e.g. popovers prior to placement calculation).
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (isAnimationReady && ref.current && 'getAnimations' in ref.current) {
            for (let animation of ref.current.getAnimations())if (animation instanceof CSSTransition) animation.cancel();
        }
    }, [
        ref,
        isAnimationReady
    ]);
    useAnimation(ref, isAnimationReady, (0, _react.useCallback)(()=>setEntering(false), []));
    return isAnimationReady;
}
function useExitAnimation(ref, isOpen) {
    let [exitState, setExitState] = (0, _react.useState)(isOpen ? 'open' : 'closed');
    switch(exitState){
        case 'open':
            // If isOpen becomes false, set the state to exiting.
            if (!isOpen) setExitState('exiting');
            break;
        case 'closed':
        case 'exiting':
            // If we are exiting and isOpen becomes true, the animation was interrupted.
            // Reset the state to open.
            if (isOpen) setExitState('open');
            break;
    }
    let isExiting = exitState === 'exiting';
    useAnimation(ref, isExiting, (0, _react.useCallback)(()=>{
        // Set the state to closed, which will cause the element to be unmounted.
        setExitState((state)=>state === 'exiting' ? 'closed' : state);
    }, []));
    return isExiting;
}
function useAnimation(ref, isActive, onEnd) {
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (isActive && ref.current) {
            if (!('getAnimations' in ref.current)) {
                // JSDOM
                onEnd();
                return;
            }
            let animations = ref.current.getAnimations();
            if (animations.length === 0) {
                onEnd();
                return;
            }
            let canceled = false;
            Promise.allSettled(animations.map((a)=>a.finished)).then(()=>{
                if (!canceled) (0, _reactDom.flushSync)(()=>{
                    onEnd();
                });
            });
            return ()=>{
                canceled = true;
            };
        }
    }, [
        ref,
        isActive,
        onEnd
    ]);
}

},{"./chain":"bQmEj","react-dom":"gOP0N","react":"gOP0N","./domHelpers":"cYkFa","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cfMV9":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "TextContext", ()=>TextContext);
parcelHelpers.export(exports, "Text", ()=>Text);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _hidden = require("react-aria/private/collections/Hidden");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const TextContext = /*#__PURE__*/ (0, _react.createContext)({});
const Text = /*#__PURE__*/ (0, _hidden.createHideableComponent)(function Text(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, TextContext);
    let { elementType = 'span', ...domProps } = props;
    let ElementType = (0, _utils.dom)[elementType];
    // @ts-ignore
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ElementType, {
        className: "react-aria-Text",
        ...domProps,
        ref: ref
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/private/collections/Hidden":"iPJX7","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4EL3s":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2025 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "SelectionIndicatorContext", ()=>SelectionIndicatorContext);
parcelHelpers.export(exports, "SelectionIndicator", ()=>SelectionIndicator);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _sharedElementTransition = require("./SharedElementTransition");
const SelectionIndicatorContext = /*#__PURE__*/ (0, _react.createContext)({
    isSelected: false
});
const SelectionIndicator = /*#__PURE__*/ (0, _react.forwardRef)(function SelectionIndicator(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, SelectionIndicatorContext);
    let { isSelected, ...otherProps } = props;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _sharedElementTransition.SharedElement), {
        ...otherProps,
        ref: ref,
        className: props.className || 'react-aria-SelectionIndicator',
        name: "SelectionIndicator",
        isVisible: isSelected
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react":"gOP0N","./SharedElementTransition":"2Pl2F","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2Pl2F":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2025 Adobe. All rights reserved.
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
 * A scope for SharedElements, which animate between parents.
 */ parcelHelpers.export(exports, "SharedElementTransition", ()=>SharedElementTransition);
parcelHelpers.export(exports, "SharedElement", ()=>SharedElement);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _reactDom = require("react-dom");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useLayoutEffect = require("react-aria/private/utils/useLayoutEffect");
var _useObjectRef = require("react-aria/useObjectRef");
const SharedElementContext = /*#__PURE__*/ (0, _react.createContext)(null);
function SharedElementTransition(props) {
    let ref = (0, _react.useRef)({});
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(SharedElementContext.Provider, {
        value: ref,
        children: props.children
    });
}
const SharedElement = /*#__PURE__*/ (0, _react.forwardRef)(function SharedElement(props, ref) {
    let { name, isVisible = true, children, className, style, render, ...divProps } = props;
    let [state, setState] = (0, _react.useState)(isVisible ? 'visible' : 'hidden');
    let scopeRef = (0, _react.useContext)(SharedElementContext);
    if (!scopeRef) throw new Error('<SharedElement> must be rendered inside a <SharedElementTransition>');
    if (isVisible && state === 'hidden') setState('visible');
    ref = (0, _useObjectRef.useObjectRef)(ref);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        let element = ref.current;
        let scope = scopeRef.current;
        let prevSnapshot = scope[name];
        let frame = null;
        if (element && isVisible && prevSnapshot) {
            // Element is transitioning from a previous instance.
            setState('visible');
            let animations = element.getAnimations();
            // Set properties to animate from.
            let values = prevSnapshot.style.map(([property, prevValue])=>{
                let value = element.style[property];
                if (property === 'translate') {
                    let prevRect = prevSnapshot.rect;
                    let currentItem = element.getBoundingClientRect();
                    let deltaX = prevRect.left - currentItem?.left;
                    let deltaY = prevRect.top - currentItem?.top;
                    element.style.translate = `${deltaX}px ${deltaY}px`;
                } else element.style[property] = prevValue;
                return [
                    property,
                    value
                ];
            });
            // Cancel any new animations triggered by these properties.
            for (let a of element.getAnimations())if (!animations.includes(a)) a.cancel();
            // Remove overrides after one frame to animate to the current values.
            frame = requestAnimationFrame(()=>{
                frame = null;
                for (let [property, value] of values)element.style[property] = value;
            });
            delete scope[name];
        } else if (element && isVisible && !prevSnapshot) {
            // No previous instance exists, apply the entering state.
            queueMicrotask(()=>(0, _reactDom.flushSync)(()=>setState('entering')));
            frame = requestAnimationFrame(()=>{
                frame = null;
                setState('visible');
            });
        } else if (element && !isVisible) // Wait until layout effects finish, and check if a snapshot still exists.
        // If so, no new SharedElement consumed it, so enter the exiting state.
        queueMicrotask(()=>{
            if (scope[name]) {
                delete scope[name];
                (0, _reactDom.flushSync)(()=>setState('exiting'));
                Promise.all(element.getAnimations().map((a)=>a.finished)).then(()=>setState('hidden')).catch(()=>{});
            } else // Snapshot was consumed by another instance, unmount.
            setState('hidden');
        });
        return ()=>{
            if (frame != null) cancelAnimationFrame(frame);
            if (element && element.isConnected && !element.hasAttribute('data-exiting')) {
                // On unmount, store a snapshot of the rectangle and computed style for transitioning properties.
                let style = window.getComputedStyle(element);
                if (style.transitionProperty !== 'none') {
                    let transitionProperty = style.transitionProperty.split(/\s*,\s*/);
                    scope[name] = {
                        rect: element.getBoundingClientRect(),
                        style: transitionProperty.map((p)=>[
                                p,
                                style[p]
                            ])
                    };
                }
            }
        };
    }, [
        ref,
        scopeRef,
        name,
        isVisible
    ]);
    let renderProps = (0, _utils.useRenderProps)({
        children,
        className,
        style,
        render,
        values: {
            isEntering: state === 'entering',
            isExiting: state === 'exiting'
        }
    });
    if (state === 'hidden') return null;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...divProps,
        ...renderProps,
        ref: ref,
        "data-entering": state === 'entering' || undefined,
        "data-exiting": state === 'exiting' || undefined
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-dom":"gOP0N","react":"gOP0N","react-aria/private/utils/useLayoutEffect":"h7M6K","react-aria/useObjectRef":"ec0NJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cuuaI":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "SeparatorContext", ()=>SeparatorContext);
parcelHelpers.export(exports, "SeparatorNode", ()=>SeparatorNode);
parcelHelpers.export(exports, "Separator", ()=>Separator);
var _jsxRuntime = require("preact/jsx-runtime");
var _useSeparator = require("react-aria/useSeparator");
var _baseCollection = require("react-aria/private/collections/BaseCollection");
var _utils = require("./utils");
var _collectionBuilder = require("react-aria/CollectionBuilder");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _mergeProps = require("react-aria/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const SeparatorContext = /*#__PURE__*/ (0, _react.createContext)({});
class SeparatorNode extends (0, _baseCollection.CollectionNode) {
    static type = 'separator';
    filter(collection, newCollection) {
        let prevItem = newCollection.getItem(this.prevKey);
        if (prevItem && prevItem.type !== 'separator') {
            let clone = this.clone();
            newCollection.addDescendants(clone, collection);
            return clone;
        }
        return null;
    }
}
const Separator = /*#__PURE__*/ (0, _collectionBuilder.createLeafComponent)(SeparatorNode, function Separator(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, SeparatorContext);
    let { elementType, orientation, style, className, slot, ...otherProps } = props;
    let Element = elementType || 'hr';
    if (Element === 'hr' && orientation === 'vertical') Element = 'div';
    let ElementType = (0, _utils.dom)[Element];
    let { separatorProps } = (0, _useSeparator.useSeparator)({
        ...otherProps,
        elementType,
        orientation
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ElementType, {
        render: props.render,
        ...(0, _mergeProps.mergeProps)(DOMProps, separatorProps),
        style: style,
        className: className ?? 'react-aria-Separator',
        ref: ref,
        slot: slot || undefined
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/useSeparator":"7SEKa","react-aria/private/collections/BaseCollection":"imRDY","./utils":"jtWJJ","react-aria/CollectionBuilder":"kFD1B","react-aria/filterDOMProps":"h4XHF","react-aria/mergeProps":"jycxS","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7SEKa":[function(require,module,exports,__globalThis) {
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
 * Provides the accessibility implementation for a separator.
 * A separator is a visual divider between two groups of content,
 * e.g. groups of menu items or sections of a page.
 */ parcelHelpers.export(exports, "useSeparator", ()=>useSeparator);
var _filterDOMProps = require("../utils/filterDOMProps");
function useSeparator(props) {
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    let ariaOrientation;
    // if orientation is horizontal, aria-orientation default is horizontal, so we leave it undefined
    // if it's vertical, we need to specify it
    if (props.orientation === 'vertical') ariaOrientation = 'vertical';
    // hr elements implicitly have role = separator and a horizontal orientation
    if (props.elementType !== 'hr') return {
        separatorProps: {
            ...domProps,
            role: 'separator',
            'aria-orientation': ariaOrientation
        }
    };
    return {
        separatorProps: domProps
    };
}

},{"../utils/filterDOMProps":"h4XHF","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7ofl1":[function(require,module,exports,__globalThis) {
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
 * Provides state management for tree-like components. Handles building a collection
 * of items from props, item expanded state, and manages multiple selection state.
 */ parcelHelpers.export(exports, "useTreeState", ()=>useTreeState);
var _selectionManager = require("../selection/SelectionManager");
var _treeCollection = require("./TreeCollection");
var _react = require("react");
var _useCollection = require("../collections/useCollection");
var _useControlledState = require("../utils/useControlledState");
var _useMultipleSelectionState = require("../selection/useMultipleSelectionState");
function useTreeState(props) {
    let { onExpandedChange } = props;
    let [expandedKeys, setExpandedKeys] = (0, _useControlledState.useControlledState)(props.expandedKeys ? new Set(props.expandedKeys) : undefined, props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : new Set(), onExpandedChange);
    let selectionState = (0, _useMultipleSelectionState.useMultipleSelectionState)(props);
    let disabledKeys = (0, _react.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let tree = (0, _useCollection.useCollection)(props, (0, _react.useCallback)((nodes)=>new (0, _treeCollection.TreeCollection)(nodes, {
            expandedKeys
        }), [
        expandedKeys
    ]), null);
    // Reset focused key if that item is deleted from the collection.
    (0, _react.useEffect)(()=>{
        if (selectionState.focusedKey != null && !tree.getItem(selectionState.focusedKey)) selectionState.setFocusedKey(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        tree,
        selectionState.focusedKey
    ]);
    let onToggle = (key)=>{
        setExpandedKeys(toggleKey(expandedKeys, key));
    };
    return {
        collection: tree,
        expandedKeys,
        disabledKeys,
        toggleKey: onToggle,
        setExpandedKeys,
        selectionManager: new (0, _selectionManager.SelectionManager)(tree, selectionState)
    };
}
function toggleKey(set, key) {
    let res = new Set(set);
    if (res.has(key)) res.delete(key);
    else res.add(key);
    return res;
}

},{"../selection/SelectionManager":"4luyT","./TreeCollection":"dBi9R","react":"gOP0N","../collections/useCollection":"3hcm9","../utils/useControlledState":"8yNBD","../selection/useMultipleSelectionState":"c53PS","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dBi9R":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "TreeCollection", ()=>TreeCollection);
class TreeCollection {
    keyMap = new Map();
    iterable;
    firstKey = null;
    lastKey = null;
    constructor(nodes, { expandedKeys } = {}){
        this.iterable = nodes;
        expandedKeys = expandedKeys || new Set();
        let visit = (node)=>{
            this.keyMap.set(node.key, node);
            if (node.childNodes && (node.type === 'section' || expandedKeys.has(node.key))) for (let child of node.childNodes)visit(child);
        };
        for (let node of nodes)visit(node);
        let last = null;
        let index = 0;
        for (let [key, node] of this.keyMap){
            if (last) {
                last.nextKey = key;
                node.prevKey = last.key;
            } else {
                this.firstKey = key;
                node.prevKey = undefined;
            }
            if (node.type === 'item') node.index = index++;
            last = node;
            // Set nextKey as undefined since this might be the last node
            // If it isn't the last node, last.nextKey will properly set at start of new loop
            last.nextKey = undefined;
        }
        this.lastKey = last?.key ?? null;
    }
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this.keyMap.size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        return node ? node.prevKey ?? null : null;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        return node ? node.nextKey ?? null : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(key) {
        return this.keyMap.get(key) ?? null;
    }
    at(idx) {
        const keys = [
            ...this.getKeys()
        ];
        return this.getItem(keys[idx]);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h8EOP":[function(require,module,exports,__globalThis) {
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
 * Manages state for a tooltip trigger. Tracks whether the tooltip is open, and provides
 * methods to toggle this state. Ensures only one tooltip is open at a time and controls
 * the delay for showing a tooltip.
 */ parcelHelpers.export(exports, "useTooltipTriggerState", ()=>useTooltipTriggerState);
var _useOverlayTriggerState = require("../overlays/useOverlayTriggerState");
var _react = require("react");
const TOOLTIP_DELAY = 1500; // this seems to be a 1.5 second delay, check with design
const TOOLTIP_COOLDOWN = 500;
let tooltips = {};
let tooltipId = 0;
let globalWarmedUp = false;
let globalWarmUpTimeout = null;
let globalCooldownTimeout = null;
function useTooltipTriggerState(props = {}) {
    let { delay = TOOLTIP_DELAY, closeDelay = TOOLTIP_COOLDOWN } = props;
    let { isOpen, open, close } = (0, _useOverlayTriggerState.useOverlayTriggerState)(props);
    // Whether the current open/close transition should skip its animation. Set when swapping
    // between tooltips during the global warmup period.
    let [shouldSkipAnimation, setIsInstant] = (0, _react.useState)(false);
    let id = (0, _react.useMemo)(()=>`${++tooltipId}`, []);
    let closeTimeout = (0, _react.useRef)(null);
    let closeCallback = (0, _react.useRef)(close);
    let ensureTooltipEntry = ()=>{
        tooltips[id] = hideTooltip;
    };
    let closeOpenTooltips = ()=>{
        for(let hideTooltipId in tooltips)if (hideTooltipId !== id) {
            // Close other open tooltips instantly (no exit animation), since they are being
            // replaced by this one during the warmup period.
            tooltips[hideTooltipId](true, true);
            delete tooltips[hideTooltipId];
        }
    };
    let showTooltip = (instant)=>{
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        closeTimeout.current = null;
        closeOpenTooltips();
        ensureTooltipEntry();
        setIsInstant(!!instant);
        globalWarmedUp = true;
        open();
        if (globalWarmUpTimeout) {
            clearTimeout(globalWarmUpTimeout);
            globalWarmUpTimeout = null;
        }
        if (globalCooldownTimeout) {
            clearTimeout(globalCooldownTimeout);
            globalCooldownTimeout = null;
        }
    };
    let hideTooltip = (immediate, instant)=>{
        setIsInstant(!!instant);
        if (immediate || closeDelay <= 0) {
            if (closeTimeout.current) clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
            closeCallback.current();
        } else if (!closeTimeout.current) closeTimeout.current = setTimeout(()=>{
            closeTimeout.current = null;
            closeCallback.current();
        }, closeDelay);
        if (globalWarmUpTimeout) {
            clearTimeout(globalWarmUpTimeout);
            globalWarmUpTimeout = null;
        }
        if (globalWarmedUp) {
            if (globalCooldownTimeout) clearTimeout(globalCooldownTimeout);
            globalCooldownTimeout = setTimeout(()=>{
                delete tooltips[id];
                globalCooldownTimeout = null;
                globalWarmedUp = false;
            }, Math.max(TOOLTIP_COOLDOWN, closeDelay));
        }
    };
    let warmupTooltip = ()=>{
        closeOpenTooltips();
        ensureTooltipEntry();
        if (!isOpen && !globalWarmedUp) {
            if (globalWarmUpTimeout) clearTimeout(globalWarmUpTimeout);
            globalWarmUpTimeout = setTimeout(()=>{
                globalWarmUpTimeout = null;
                globalWarmedUp = true;
                // First tooltip in a sequence: animate in.
                showTooltip(false);
            }, delay);
        } else if (!isOpen) // Already warmed up: appear instantly without an animation.
        showTooltip(true);
    };
    (0, _react.useEffect)(()=>{
        closeCallback.current = close;
    }, [
        close
    ]);
    (0, _react.useEffect)(()=>{
        return ()=>{
            if (closeTimeout.current) clearTimeout(closeTimeout.current);
            let tooltip = tooltips[id];
            if (tooltip) delete tooltips[id];
        };
    }, [
        id
    ]);
    return {
        isOpen,
        shouldSkipAnimation,
        open: (immediate)=>{
            if (!immediate && delay > 0 && !closeTimeout.current) warmupTooltip();
            else // Immediate opens (e.g. focus, or delay of 0) appear instantly without an animation
            // only if another tooltip is already warmed up.
            showTooltip(globalWarmedUp);
        },
        close: hideTooltip
    };
}

},{"../overlays/useOverlayTriggerState":"457a8","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

