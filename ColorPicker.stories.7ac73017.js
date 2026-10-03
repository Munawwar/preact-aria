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
})({"3ofTB":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
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
parcelHelpers.export(exports, "ColorPickerExample", ()=>ColorPickerExample);
parcelHelpers.export(exports, "ColorPickerSliders", ()=>ColorPickerSliders);
var _jsxRuntime = require("preact/jsx-runtime");
var _buttonTsx = require("../../../../../../vendor/react-aria-components/src/Button.tsx");
var _colorAreaStoriesTsx = require("./ColorArea.stories.tsx");
var _colorFieldTsx = require("../../../../../../vendor/react-aria-components/src/ColorField.tsx");
var _colorPickerTsx = require("../../../../../../vendor/react-aria-components/src/ColorPicker.tsx");
var _colorSliderStoriesTsx = require("./ColorSlider.stories.tsx");
var _colorSwatchStoriesTsx = require("./ColorSwatch.stories.tsx");
var _colorSwatchPickerTsx = require("../../../../../../vendor/react-aria-components/src/ColorSwatchPicker.tsx");
var _dialogTsx = require("../../../../../../vendor/react-aria-components/src/Dialog.tsx");
var _colorTs = require("../../../../../../vendor/react-stately/exports/Color.ts");
var _inputTsx = require("../../../../../../vendor/react-aria-components/src/Input.tsx");
var _labelTsx = require("../../../../../../vendor/react-aria-components/src/Label.tsx");
var _popoverTsx = require("../../../../../../vendor/react-aria-components/src/Popover.tsx");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _stylesCss = require("./styles.css");
exports.default = {
    title: 'React Aria Components/ColorPicker',
    component: (0, _colorPickerTsx.ColorPicker)
};
function ColorPickerExampleRender(args) {
    let [format, setFormat] = (0, _react.useState)('hex');
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorPickerTsx.ColorPicker), {
        ...args,
        defaultValue: "rgb(255, 0, 0)",
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(ColorPickerTrigger, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorAreaStoriesTsx.ColorAreaExampleRender), {
                    colorSpace: "hsb",
                    xChannel: "saturation",
                    yChannel: "brightness"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorSliderStoriesTsx.ColorSliderExampleRender), {
                    colorSpace: "hsb",
                    channel: "hue"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorSliderStoriesTsx.ColorSliderExampleRender), {
                    channel: "alpha"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("label", {
                    children: [
                        'Format: ',
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)("select", {
                            value: format,
                            onChange: (e)=>setFormat(e.target.value),
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                                    children: "hex"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                                    children: "rgb"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                                    children: "hsl"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                                    children: "hsb"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                    style: {
                        display: 'flex',
                        gap: 4,
                        width: 192
                    },
                    children: format === 'hex' ? /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _colorFieldTsx.ColorField), {
                        style: {
                            display: 'flex',
                            flexDirection: 'column'
                        },
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {
                                children: "Hex"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {})
                        ]
                    }) : (0, _colorTs.getColorChannels)(format).map((channel)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _colorFieldTsx.ColorField), {
                            colorSpace: format,
                            channel: channel,
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTsx.Label), {}),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTsx.Input), {
                                    style: {
                                        width: '100%',
                                        boxSizing: 'border-box'
                                    }
                                })
                            ]
                        }, channel))
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorSwatchPickerTsx.ColorSwatchPicker), {
                    style: {
                        display: 'flex',
                        gap: 4,
                        flexWrap: 'wrap'
                    },
                    children: [
                        '#f00',
                        '#ff0',
                        '#0ff',
                        '#00f'
                    ].map((color)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorSwatchPickerTsx.ColorSwatchPickerItem), {
                            color: color,
                            style: ({ isFocusVisible })=>({
                                    outline: isFocusVisible ? '2px solid lightblue' : 'none',
                                    outlineOffset: 2,
                                    borderRadius: 4,
                                    position: 'relative'
                                }),
                            children: ({ isSelected })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorSwatchStoriesTsx.ColorSwatchExampleRender), {}),
                                        isSelected && /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                            style: {
                                                position: 'absolute',
                                                inset: 0,
                                                border: '2px solid black',
                                                outline: '2px solid white',
                                                outlineOffset: -4,
                                                borderRadius: 4
                                            }
                                        })
                                    ]
                                })
                        }))
                })
            ]
        })
    });
}
const ColorPickerExample = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(ColorPickerExampleRender, {
            ...args
        })
};
function ColorPickerSlidersRender(args) {
    let [colorSpace, setColorSpace] = (0, _react.useState)('rgb');
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorPickerTsx.ColorPicker), {
        ...args,
        defaultValue: "rgb(255, 0, 0)",
        children: ({ color })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(ColorPickerTrigger, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("label", {
                        children: [
                            'Color Space: ',
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("select", {
                                value: colorSpace,
                                onChange: (e)=>setColorSpace(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                                        children: "rgb"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                                        children: "hsl"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                                        children: "hsb"
                                    })
                                ]
                            })
                        ]
                    }),
                    color.toFormat(colorSpace).getColorChannels().map((c)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorSliderStoriesTsx.ColorSliderExampleRender), {
                            colorSpace: colorSpace,
                            channel: c
                        }, c)),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorSliderStoriesTsx.ColorSliderExampleRender), {
                        channel: "alpha"
                    })
                ]
            })
    });
}
const ColorPickerSliders = {
    render: (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(ColorPickerSlidersRender, {
            ...args
        })
};
function ColorPickerTrigger({ children }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _dialogTsx.DialogTrigger), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _buttonTsx.Button), {
                style: {
                    background: 'none',
                    border: 'none',
                    padding: 0
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorSwatchStoriesTsx.ColorSwatchExampleRender), {
                    "aria-label": "Color picker"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverTsx.Popover), {
                placement: "bottom start",
                style: {
                    background: 'Canvas',
                    color: 'CanvasText',
                    border: '1px solid gray',
                    borderRadius: 4,
                    padding: 12,
                    zIndex: 5,
                    overflow: 'auto',
                    fontSize: 'small',
                    boxSizing: 'border-box'
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _dialogTsx.Dialog), {
                    style: {
                        outline: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8
                    },
                    children: children
                })
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../../../vendor/react-aria-components/src/Button.tsx":"enBVm","./ColorArea.stories.tsx":"1YNNF","../../../../../../vendor/react-aria-components/src/ColorField.tsx":"lW5tW","../../../../../../vendor/react-aria-components/src/ColorPicker.tsx":"5D1vg","./ColorSlider.stories.tsx":"bd4Sk","./ColorSwatch.stories.tsx":"c6gQH","../../../../../../vendor/react-aria-components/src/ColorSwatchPicker.tsx":"fBfYU","../../../../../../vendor/react-aria-components/src/Dialog.tsx":"aPHDk","../../../../../../vendor/react-stately/exports/Color.ts":"6ElIb","../../../../../../vendor/react-aria-components/src/Input.tsx":"BUyo9","../../../../../../vendor/react-aria-components/src/Label.tsx":"eI7Ae","../../../../../../vendor/react-aria-components/src/Popover.tsx":"i9eo9","react":"gOP0N","./styles.css":"9cXWn","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"enBVm":[function(require,module,exports,__globalThis) {
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

},{"../utils/filterDOMProps":"h4XHF","../utils/mergeProps":"jycxS","../interactions/useFocusable":"6IFKj","../interactions/usePress":"3S2KR","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hW9J5":[function(require,module,exports,__globalThis) {
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

},{"react-stately/private/utils/number":"aEFFO","../utils/filterDOMProps":"h4XHF","../utils/mergeProps":"jycxS","../label/useLabel":"kMUgu","../i18n/useNumberFormatter":"5T1hV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lW5tW":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "ColorFieldContext", ()=>ColorFieldContext);
parcelHelpers.export(exports, "ColorFieldStateContext", ()=>ColorFieldStateContext);
parcelHelpers.export(exports, "ColorField", ()=>ColorField);
var _jsxRuntime = require("preact/jsx-runtime");
var _useColorField = require("react-aria/useColorField");
var _utils = require("./utils");
var _useColorFieldState = require("react-stately/useColorFieldState");
var _fieldError = require("./FieldError");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _group = require("./Group");
var _input = require("./Input");
var _label = require("./Label");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _text = require("./Text");
var _i18Nprovider = require("react-aria/I18nProvider");
const ColorFieldContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ColorFieldStateContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ColorField = /*#__PURE__*/ (0, _react.forwardRef)(function ColorField(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, ColorFieldContext);
    if (props.channel) return /*#__PURE__*/ (0, _jsxRuntime.jsx)(ColorChannelField, {
        ...props,
        channel: props.channel,
        forwardedRef: ref
    });
    else return /*#__PURE__*/ (0, _jsxRuntime.jsx)(HexColorField, {
        ...props,
        forwardedRef: ref
    });
});
function ColorChannelField(props) {
    let { locale } = (0, _i18Nprovider.useLocale)();
    let state = (0, _useColorFieldState.useColorChannelFieldState)({
        ...props,
        locale
    });
    let inputRef = (0, _react.useRef)(null);
    let [labelRef, label] = (0, _utils.useSlot)(!props['aria-label'] && !props['aria-labelledby']);
    let { labelProps, inputProps, descriptionProps, errorMessageProps, ...validation } = (0, _useColorField.useColorChannelField)({
        ...(0, _utils.removeDataAttributes)(props),
        label,
        validationBehavior: props.validationBehavior ?? 'native'
    }, state, inputRef);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            useChildren(props, state, props.forwardedRef, inputProps, inputRef, labelProps, labelRef, descriptionProps, errorMessageProps, validation),
            props.name && /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                type: "hidden",
                name: props.name,
                form: props.form,
                value: isNaN(state.numberValue) ? '' : state.numberValue
            })
        ]
    });
}
function HexColorField(props) {
    let state = (0, _useColorFieldState.useColorFieldState)({
        ...props,
        validationBehavior: props.validationBehavior ?? 'native'
    });
    let inputRef = (0, _react.useRef)(null);
    let [labelRef, label] = (0, _utils.useSlot)(!props['aria-label'] && !props['aria-labelledby']);
    let { labelProps, inputProps, descriptionProps, errorMessageProps, ...validation } = (0, _useColorField.useColorField)({
        ...(0, _utils.removeDataAttributes)(props),
        label,
        validationBehavior: props.validationBehavior ?? 'native'
    }, state, inputRef);
    return useChildren(props, state, props.forwardedRef, inputProps, inputRef, labelProps, labelRef, descriptionProps, errorMessageProps, validation);
}
function useChildren(props, state, ref, inputProps, inputRef, labelProps, labelRef, descriptionProps, errorMessageProps, validation) {
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: {
            state,
            channel: props.channel || 'hex',
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid || false,
            isReadOnly: props.isReadOnly || false,
            isRequired: props.isRequired || false
        },
        defaultClassName: 'react-aria-ColorField'
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
        values: [
            [
                ColorFieldStateContext,
                state
            ],
            [
                (0, _input.InputContext),
                {
                    ...inputProps,
                    ref: inputRef
                }
            ],
            [
                (0, _label.LabelContext),
                {
                    ...labelProps,
                    ref: labelRef
                }
            ],
            [
                (0, _group.GroupContext),
                {
                    role: 'presentation',
                    isInvalid: validation.isInvalid,
                    isDisabled: props.isDisabled || false
                }
            ],
            [
                (0, _text.TextContext),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ],
            [
                (0, _fieldError.FieldErrorContext),
                validation
            ]
        ],
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
            ...DOMProps,
            ...renderProps,
            ref: ref,
            slot: props.slot || undefined,
            "data-channel": props.channel || 'hex',
            "data-disabled": props.isDisabled || undefined,
            "data-invalid": validation.isInvalid || undefined,
            "data-readonly": props.isReadOnly || undefined,
            "data-required": props.isRequired || undefined
        })
    });
}

},{"preact/jsx-runtime":"b2Fbn","react-aria/useColorField":[["useColorChannelField","EG3WQ"],["useColorField","1PpiG"]],"./utils":"jtWJJ","react-stately/useColorFieldState":[["useColorChannelFieldState","rcibk"],["useColorFieldState","izxzU"]],"./FieldError":"5KSCU","react-aria/filterDOMProps":"h4XHF","./Group":"2mugT","./Input":"BUyo9","./Label":"eI7Ae","react":"gOP0N","./Text":"cfMV9","react-aria/I18nProvider":"czGuc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"EG3WQ":[function(require,module,exports,__globalThis) {
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
/**
 * Provides the behavior and accessibility implementation for a color channel field, allowing users
 * to edit the value of an individual color channel.
 */ parcelHelpers.export(exports, "useColorChannelField", ()=>useColorChannelField);
var _useNumberField = require("../numberfield/useNumberField");
var _i18Nprovider = require("../i18n/I18nProvider");
function useColorChannelField(props, state, inputRef) {
    let { locale } = (0, _i18Nprovider.useLocale)();
    return (0, _useNumberField.useNumberField)({
        ...props,
        value: undefined,
        defaultValue: undefined,
        onChange: undefined,
        validate: undefined,
        // Provide a default aria-label if no other label is provided.
        'aria-label': props['aria-label'] || (props.label || props['aria-labelledby'] ? undefined : state.colorValue.getChannelName(props.channel, locale))
    }, state, inputRef);
}

},{"../numberfield/useNumberField":"gIefC","../i18n/I18nProvider":"czGuc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1PpiG":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a color field component.
 * Color fields allow users to enter and adjust a hex color value.
 */ parcelHelpers.export(exports, "useColorField", ()=>useColorField);
var _reactDom = require("react-dom");
var _react = require("react");
var _mergeProps = require("../utils/mergeProps");
var _useFormValidationState = require("react-stately/private/form/useFormValidationState");
var _useFocusWithin = require("../interactions/useFocusWithin");
var _useFormattedTextField = require("../textfield/useFormattedTextField");
var _useFormReset = require("../utils/useFormReset");
var _useId = require("../utils/useId");
var _useKeyboard = require("../interactions/useKeyboard");
var _useScrollWheel = require("../interactions/useScrollWheel");
var _useSpinButton = require("../spinbutton/useSpinButton");
function useColorField(props, state, ref) {
    let { isDisabled, isReadOnly, isRequired, isWheelDisabled, validationBehavior = 'aria', onKeyDown, onKeyUp } = props;
    let { colorValue, inputValue, increment, decrement, incrementToMax, decrementToMin, commit, commitValidation } = state;
    let inputId = (0, _useId.useId)();
    let { spinButtonProps } = (0, _useSpinButton.useSpinButton)({
        isDisabled,
        isReadOnly,
        isRequired,
        maxValue: 0xffffff,
        minValue: 0,
        onIncrement: increment,
        onIncrementToMax: incrementToMax,
        onDecrement: decrement,
        onDecrementToMin: decrementToMin,
        value: colorValue ? colorValue.toHexInt() : undefined,
        textValue: colorValue ? colorValue.toString('hex') : undefined
    });
    let [focusWithin, setFocusWithin] = (0, _react.useState)(false);
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)({
        isDisabled,
        onFocusWithinChange: setFocusWithin
    });
    let onWheel = (0, _react.useCallback)((e)=>{
        if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
        if (e.deltaY > 0) increment();
        else if (e.deltaY < 0) decrement();
    }, [
        decrement,
        increment
    ]);
    // If the input isn't supposed to receive input, disable scrolling.
    let scrollingDisabled = isWheelDisabled || isDisabled || isReadOnly || !focusWithin;
    (0, _useScrollWheel.useScrollWheel)({
        onScroll: onWheel,
        isDisabled: scrollingDisabled
    }, ref);
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        isDisabled: isDisabled || isReadOnly,
        shortcuts: {
            Enter: ()=>{
                (0, _reactDom.flushSync)(()=>{
                    commit();
                });
                commitValidation();
                return {
                    shouldPreventDefault: false
                };
            }
        },
        onKeyDown,
        onKeyUp
    });
    let onChange = (value)=>{
        if (state.validate(value)) state.setInputValue(value);
    };
    let { inputProps, ...otherProps } = (0, _useFormattedTextField.useFormattedTextField)({
        ...props,
        id: inputId,
        value: inputValue,
        // Intentionally invalid value that will be ignored by onChange during form reset
        // This is handled separately below.
        defaultValue: '!',
        validate: undefined,
        [(0, _useFormValidationState.privateValidationStateProp)]: state,
        type: 'text',
        autoComplete: 'off',
        onChange,
        onKeyDown: undefined,
        onKeyUp: undefined
    }, state, ref);
    (0, _useFormReset.useFormReset)(ref, state.defaultColorValue, state.setColorValue);
    inputProps = (0, _mergeProps.mergeProps)(keyboardProps, inputProps, spinButtonProps, focusWithinProps, {
        role: 'textbox',
        'aria-valuemax': null,
        'aria-valuemin': null,
        'aria-valuenow': null,
        'aria-valuetext': null,
        autoCorrect: 'off',
        spellCheck: 'false',
        onBlur: commit
    });
    if (validationBehavior === 'native') inputProps['aria-required'] = undefined;
    return {
        inputProps,
        ...otherProps
    };
}

},{"react-dom":"gOP0N","react":"gOP0N","../utils/mergeProps":"jycxS","react-stately/private/form/useFormValidationState":"491YW","../interactions/useFocusWithin":"bkSQo","../textfield/useFormattedTextField":"cXIOE","../utils/useFormReset":"iDQvZ","../utils/useId":"fQAcb","../interactions/useKeyboard":"aHm7i","../interactions/useScrollWheel":"DgAdc","../spinbutton/useSpinButton":"3nh3N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"491YW":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "VALID_VALIDITY_STATE", ()=>VALID_VALIDITY_STATE);
parcelHelpers.export(exports, "DEFAULT_VALIDATION_RESULT", ()=>DEFAULT_VALIDATION_RESULT);
parcelHelpers.export(exports, "FormValidationContext", ()=>FormValidationContext);
parcelHelpers.export(exports, "privateValidationStateProp", ()=>privateValidationStateProp);
parcelHelpers.export(exports, "useFormValidationState", ()=>useFormValidationState);
parcelHelpers.export(exports, "mergeValidation", ()=>mergeValidation);
var _react = require("react");
const VALID_VALIDITY_STATE = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valueMissing: false,
    valid: true
};
const CUSTOM_VALIDITY_STATE = {
    ...VALID_VALIDITY_STATE,
    customError: true,
    valid: false
};
const DEFAULT_VALIDATION_RESULT = {
    isInvalid: false,
    validationDetails: VALID_VALIDITY_STATE,
    validationErrors: []
};
const FormValidationContext = (0, _react.createContext)({});
const privateValidationStateProp = '__reactAriaFormValidationState';
function useFormValidationState(props) {
    // Private prop for parent components to pass state to children.
    if (props[privateValidationStateProp]) {
        let { realtimeValidation, displayValidation, updateValidation, resetValidation, commitValidation } = props[privateValidationStateProp];
        return {
            realtimeValidation,
            displayValidation,
            updateValidation,
            resetValidation,
            commitValidation
        };
    }
    // oxlint-disable-next-line react/react-compiler, react-hooks/rules-of-hooks
    return useFormValidationStateImpl(props);
}
function useFormValidationStateImpl(props) {
    let { isInvalid, validationState, name, value, builtinValidation, validate, validationBehavior = 'aria' } = props;
    // backward compatibility.
    if (validationState) isInvalid ||= validationState === 'invalid';
    // If the isInvalid prop is controlled, update validation result in realtime.
    let controlledError = isInvalid !== undefined ? {
        isInvalid,
        validationErrors: [],
        validationDetails: CUSTOM_VALIDITY_STATE
    } : null;
    // Perform custom client side validation.
    let clientError = (0, _react.useMemo)(()=>{
        if (!validate || value == null) return null;
        let validateErrors = runValidate(validate, value);
        return getValidationResult(validateErrors);
    }, [
        validate,
        value
    ]);
    if (builtinValidation?.validationDetails.valid) builtinValidation = undefined;
    // Get relevant server errors from the form.
    let serverErrors = (0, _react.useContext)(FormValidationContext);
    let serverErrorMessages = (0, _react.useMemo)(()=>{
        if (name) return Array.isArray(name) ? name.flatMap((name)=>asArray(serverErrors[name])) : asArray(serverErrors[name]);
        return [];
    }, [
        serverErrors,
        name
    ]);
    // Show server errors when the form gets a new value, and clear when the user changes the value.
    let [lastServerErrors, setLastServerErrors] = (0, _react.useState)(serverErrors);
    let [isServerErrorCleared, setServerErrorCleared] = (0, _react.useState)(false);
    if (serverErrors !== lastServerErrors) {
        setLastServerErrors(serverErrors);
        setServerErrorCleared(false);
    }
    let serverError = (0, _react.useMemo)(()=>getValidationResult(isServerErrorCleared ? [] : serverErrorMessages), [
        isServerErrorCleared,
        serverErrorMessages
    ]);
    // Track the next validation state in a ref until commitValidation is called.
    let nextValidation = (0, _react.useRef)(DEFAULT_VALIDATION_RESULT);
    let [currentValidity, setCurrentValidity] = (0, _react.useState)(DEFAULT_VALIDATION_RESULT);
    let lastError = (0, _react.useRef)(DEFAULT_VALIDATION_RESULT);
    let commitValidation = ()=>{
        if (!commitQueued) return;
        setCommitQueued(false);
        let error = clientError || builtinValidation || nextValidation.current;
        if (!isEqualValidation(error, lastError.current)) {
            lastError.current = error;
            setCurrentValidity(error);
        }
    };
    let [commitQueued, setCommitQueued] = (0, _react.useState)(false);
    (0, _react.useEffect)(commitValidation);
    // realtimeValidation is used to update the native input element's state based on custom validation logic.
    // displayValidation is the currently displayed validation state that the user sees (e.g. on input change/form submit).
    // With validationBehavior="aria", all errors are displayed in realtime rather than on submit.
    let realtimeValidation = controlledError || serverError || clientError || builtinValidation || DEFAULT_VALIDATION_RESULT;
    let displayValidation = validationBehavior === 'native' ? controlledError || serverError || currentValidity : controlledError || serverError || clientError || builtinValidation || currentValidity;
    return {
        realtimeValidation,
        displayValidation,
        updateValidation (value) {
            // If validationBehavior is 'aria', update in realtime. Otherwise, store in a ref until commit.
            if (validationBehavior === 'aria' && !isEqualValidation(currentValidity, value)) setCurrentValidity(value);
            else nextValidation.current = value;
        },
        resetValidation () {
            // Update the currently displayed validation state to valid on form reset,
            // even if the native validity says it isn't. It'll show again on the next form submit.
            let error = DEFAULT_VALIDATION_RESULT;
            if (!isEqualValidation(error, lastError.current)) {
                lastError.current = error;
                setCurrentValidity(error);
            }
            // Do not commit validation after the next render. This avoids a condition where
            // useSelect calls commitValidation inside an onReset handler.
            if (validationBehavior === 'native') setCommitQueued(false);
            setServerErrorCleared(true);
        },
        commitValidation () {
            // Commit validation state so the user sees it on blur/change/submit. Also clear any server errors.
            // Wait until after the next render to commit so that the latest value has been validated.
            if (validationBehavior === 'native') setCommitQueued(true);
            setServerErrorCleared(true);
        }
    };
}
function asArray(v) {
    if (!v) return [];
    return Array.isArray(v) ? v : [
        v
    ];
}
function runValidate(validate, value) {
    if (typeof validate === 'function') {
        let e = validate(value);
        if (e && typeof e !== 'boolean') return asArray(e);
    }
    return [];
}
function getValidationResult(errors) {
    return errors.length ? {
        isInvalid: true,
        validationErrors: errors,
        validationDetails: CUSTOM_VALIDITY_STATE
    } : null;
}
function isEqualValidation(a, b) {
    if (a === b) return true;
    return !!a && !!b && a.isInvalid === b.isInvalid && a.validationErrors.length === b.validationErrors.length && a.validationErrors.every((a, i)=>a === b.validationErrors[i]) && Object.entries(a.validationDetails).every(([k, v])=>b.validationDetails[k] === v);
}
function mergeValidation(...results) {
    let errors = new Set();
    let isInvalid = false;
    let validationDetails = {
        ...VALID_VALIDITY_STATE
    };
    for (let v of results){
        for (let e of v.validationErrors)errors.add(e);
        // Only these properties apply for checkboxes.
        isInvalid ||= v.isInvalid;
        for(let key in validationDetails)validationDetails[key] ||= v.validationDetails[key];
    }
    validationDetails.valid = !isInvalid;
    return {
        isInvalid,
        validationErrors: [
            ...errors
        ],
        validationDetails
    };
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cXIOE":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useFormattedTextField", ()=>useFormattedTextField);
var _useTextField = require("./useTextField");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _react = require("react");
var _mergeProps = require("../utils/mergeProps");
var _useEffectEvent = require("../utils/useEffectEvent");
function supportsNativeBeforeInputEvent() {
    return typeof window !== 'undefined' && window.InputEvent && typeof InputEvent.prototype.getTargetRanges === 'function';
}
function useFormattedTextField(props, state, inputRef) {
    // All browsers implement the 'beforeinput' event natively except Firefox
    // (currently behind a flag as of Firefox 84). React's polyfill does not
    // run in all cases that the native event fires, e.g. when deleting text.
    // Use the native event if available so that we can prevent invalid deletions.
    // We do not attempt to polyfill this in Firefox since it would be very complicated,
    // the benefit of doing so is fairly minor, and it's going to be natively supported soon.
    let onBeforeInputFallback = (0, _useEffectEvent.useEffectEvent)((e)=>{
        let input = inputRef.current;
        if (!input) return;
        // Compute the next value of the input if the event is allowed to proceed.
        // See https://www.w3.org/TR/input-events-2/#interface-InputEvent-Attributes for a full list of input types.
        let nextValue = null;
        switch(e.inputType){
            case 'historyUndo':
            case 'historyRedo':
                // Explicitly allow undo/redo. e.data is null in this case, but there's no need to validate,
                // because presumably the input would have already been validated previously.
                return;
            case 'insertLineBreak':
                // Explicitly allow "insertLineBreak" event, to allow onSubmit for "enter" key. e.data is null in this case.
                return;
            case 'deleteContent':
            case 'deleteByCut':
            case 'deleteByDrag':
                nextValue = input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                break;
            case 'deleteContentForward':
                // This is potentially incorrect, since the browser may actually delete more than a single UTF-16
                // character. In reality, a full Unicode grapheme cluster consisting of multiple UTF-16 characters
                // or code points may be deleted. However, in our currently supported locales, there are no such cases.
                // If we support additional locales in the future, this may need to change.
                nextValue = input.selectionEnd === input.selectionStart ? input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd + 1) : input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                break;
            case 'deleteContentBackward':
                nextValue = input.selectionEnd === input.selectionStart ? input.value.slice(0, input.selectionStart - 1) + input.value.slice(input.selectionStart) : input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                break;
            case 'deleteSoftLineBackward':
            case 'deleteHardLineBackward':
                nextValue = input.value.slice(input.selectionStart);
                break;
            default:
                if (e.data != null) nextValue = input.value.slice(0, input.selectionStart) + e.data + input.value.slice(input.selectionEnd);
                break;
        }
        // If we did not compute a value, or the new value is invalid, prevent the event
        // so that the browser does not update the input text, move the selection, or add to
        // the undo/redo stack.
        if (nextValue == null || !state.validate(nextValue)) e.preventDefault();
    });
    (0, _react.useEffect)(()=>{
        if (!supportsNativeBeforeInputEvent() || !inputRef.current) return;
        let input = inputRef.current;
        input.addEventListener('beforeinput', onBeforeInputFallback, false);
        return ()=>{
            input.removeEventListener('beforeinput', onBeforeInputFallback, false);
        };
    }, [
        inputRef
    ]);
    let onBeforeInput = !supportsNativeBeforeInputEvent() ? (e)=>{
        let nextValue = (0, _domfunctions.getEventTarget)(e).value.slice(0, (0, _domfunctions.getEventTarget)(e).selectionStart) + e.data + (0, _domfunctions.getEventTarget)(e).value.slice((0, _domfunctions.getEventTarget)(e).selectionEnd);
        if (!state.validate(nextValue)) e.preventDefault();
    } : null;
    let { labelProps, inputProps: textFieldProps, descriptionProps, errorMessageProps, ...validation } = (0, _useTextField.useTextField)(props, inputRef);
    let compositionStartState = (0, _react.useRef)(null);
    return {
        // oxlint-disable-next-line react/react-compiler
        inputProps: (0, _mergeProps.mergeProps)(textFieldProps, {
            onBeforeInput,
            onCompositionStart () {
                // Chrome does not implement Input Events Level 2, which specifies the insertFromComposition
                // and deleteByComposition inputType values for the beforeinput event. These are meant to occur
                // at the end of a composition (e.g. Pinyin IME, Android auto correct, etc.), and crucially, are
                // cancelable. The insertCompositionText and deleteCompositionText input types are not cancelable,
                // nor would we want to cancel them because the input from the user is incomplete at that point.
                // In Safari, insertFromComposition/deleteFromComposition will fire, however, allowing us to cancel
                // the final composition result if it is invalid. As a fallback for Chrome and Firefox, which either
                // don't support Input Events Level 2, or beforeinput at all, we store the state of the input when
                // the compositionstart event fires, and undo the changes in compositionend (below) if it is invalid.
                // Unfortunately, this messes up the undo/redo stack, but until insertFromComposition/deleteByComposition
                // are implemented, there is no other way to prevent composed input.
                // See https://bugs.chromium.org/p/chromium/issues/detail?id=1022204
                let { value, selectionStart, selectionEnd } = inputRef.current;
                compositionStartState.current = {
                    value,
                    selectionStart,
                    selectionEnd
                };
            },
            onCompositionEnd () {
                if (inputRef.current && !state.validate(inputRef.current.value)) {
                    // Restore the input value in the DOM immediately so we can synchronously update the selection position.
                    // But also update the value in React state as well so it is correct for future updates.
                    let { value, selectionStart, selectionEnd } = compositionStartState.current;
                    inputRef.current.value = value;
                    inputRef.current.setSelectionRange(selectionStart, selectionEnd);
                    state.setInputValue(value);
                }
            }
        }),
        labelProps,
        descriptionProps,
        errorMessageProps,
        ...validation
    };
}

},{"./useTextField":"kJGKw","../utils/shadowdom/DOMFunctions":"8kfpz","react":"gOP0N","../utils/mergeProps":"jycxS","../utils/useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kJGKw":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a text field.
 *
 * @param props - Props for the text field.
 * @param ref - Ref to the HTML input or textarea element.
 */ parcelHelpers.export(exports, "useTextField", ()=>useTextField);
var _filterDOMProps = require("../utils/filterDOMProps");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useControlledState = require("react-stately/useControlledState");
var _useField = require("../label/useField");
var _useFocusable = require("../interactions/useFocusable");
var _useFormReset = require("../utils/useFormReset");
var _useFormValidation = require("../form/useFormValidation");
var _useFormValidationState = require("react-stately/private/form/useFormValidationState");
function useTextField(props, ref) {
    let { inputElementType = 'input', isDisabled = false, isRequired = false, isReadOnly = false, type = 'text', validationBehavior = 'aria' } = props;
    let [value, setValue] = (0, _useControlledState.useControlledState)(props.value, props.defaultValue || '', props.onChange);
    let { focusableProps } = (0, _useFocusable.useFocusable)(props, ref);
    let validationState = (0, _useFormValidationState.useFormValidationState)({
        ...props,
        value
    });
    let { isInvalid, validationErrors, validationDetails } = validationState.displayValidation;
    let { labelProps, fieldProps, descriptionProps, errorMessageProps } = (0, _useField.useField)({
        ...props,
        isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    const inputOnlyProps = {
        type,
        pattern: props.pattern
    };
    let [initialValue] = (0, _react.useState)(value);
    (0, _useFormReset.useFormReset)(ref, props.defaultValue ?? initialValue, setValue);
    (0, _useFormValidation.useFormValidation)(props, validationState, ref);
    return {
        labelProps,
        inputProps: (0, _mergeProps.mergeProps)(domProps, inputElementType === 'input' ? inputOnlyProps : undefined, {
            disabled: isDisabled,
            readOnly: isReadOnly,
            required: isRequired && validationBehavior === 'native',
            'aria-required': isRequired && validationBehavior === 'aria' || undefined,
            'aria-invalid': isInvalid || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-activedescendant': props['aria-activedescendant'],
            'aria-autocomplete': props['aria-autocomplete'],
            'aria-haspopup': props['aria-haspopup'],
            'aria-controls': props['aria-controls'],
            value,
            onChange: (e)=>setValue((0, _domfunctions.getEventTarget)(e).value),
            autoComplete: props.autoComplete,
            autoCapitalize: props.autoCapitalize,
            maxLength: props.maxLength,
            minLength: props.minLength,
            name: props.name,
            form: props.form,
            placeholder: props.placeholder,
            inputMode: props.inputMode,
            autoCorrect: props.autoCorrect,
            spellCheck: props.spellCheck,
            [parseInt((0, _reactDefault.default).version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: props.enterKeyHint,
            // Clipboard events
            onCopy: props.onCopy,
            onCut: props.onCut,
            onPaste: props.onPaste,
            // Composition events
            onCompositionEnd: props.onCompositionEnd,
            onCompositionStart: props.onCompositionStart,
            onCompositionUpdate: props.onCompositionUpdate,
            // Selection events
            onSelect: props.onSelect,
            // Input events
            onBeforeInput: props.onBeforeInput,
            onInput: props.onInput,
            ...focusableProps,
            ...fieldProps
        }),
        descriptionProps,
        errorMessageProps,
        isInvalid,
        validationErrors,
        validationDetails
    };
}

},{"../utils/filterDOMProps":"h4XHF","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/mergeProps":"jycxS","react":"gOP0N","react-stately/useControlledState":"8yNBD","../label/useField":"5Oeu9","../interactions/useFocusable":"6IFKj","../utils/useFormReset":"iDQvZ","../form/useFormValidation":"kdUj8","react-stately/private/form/useFormValidationState":"491YW","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5Oeu9":[function(require,module,exports,__globalThis) {
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
 * Provides the accessibility implementation for input fields. Fields accept user input, gain
 * context from their label, and may display a description or error message.
 *
 * @param props - Props for the Field.
 */ parcelHelpers.export(exports, "useField", ()=>useField);
var _useLabel = require("./useLabel");
var _mergeProps = require("../utils/mergeProps");
var _useId = require("../utils/useId");
function useField(props) {
    let { description, errorMessage, isInvalid, validationState } = props;
    let { labelProps, fieldProps } = (0, _useLabel.useLabel)(props);
    let descriptionId = (0, _useId.useSlotId)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    let errorMessageId = (0, _useId.useSlotId)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    fieldProps = (0, _mergeProps.mergeProps)(fieldProps, {
        'aria-describedby': [
            descriptionId,
            // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
            errorMessageId,
            props['aria-describedby']
        ].filter(Boolean).join(' ') || undefined
    });
    return {
        labelProps,
        fieldProps,
        descriptionProps: {
            id: descriptionId
        },
        errorMessageProps: {
            id: errorMessageId
        }
    };
}

},{"./useLabel":"kMUgu","../utils/mergeProps":"jycxS","../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kdUj8":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useFormValidation", ()=>useFormValidation);
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _react = require("react");
var _useEffectEvent = require("../utils/useEffectEvent");
var _useLayoutEffect = require("../utils/useLayoutEffect");
function useFormValidation(props, state, ref) {
    let { validationBehavior, focus } = props;
    // This is a useLayoutEffect so that it runs before the useEffect in useFormValidationState, which commits the validation change.
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (validationBehavior === 'native' && ref?.current && 'setCustomValidity' in ref.current && !ref.current.disabled) {
            let errorMessage = state.realtimeValidation.isInvalid ? state.realtimeValidation.validationErrors.join(' ') || 'Invalid value.' : '';
            ref.current.setCustomValidity(errorMessage);
            // Prevent default tooltip for validation message.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=605277
            if (!ref.current.hasAttribute('title')) ref.current.title = '';
            if (!state.realtimeValidation.isInvalid) state.updateValidation(getNativeValidity(ref.current));
        }
    });
    let isIgnoredReset = (0, _react.useRef)(false);
    let onReset = (0, _useEffectEvent.useEffectEvent)(()=>{
        if (!isIgnoredReset.current) state.resetValidation();
    });
    let onInvalid = (0, _useEffectEvent.useEffectEvent)((e)=>{
        // Only commit validation if we are not already displaying one.
        // This avoids clearing server errors that the user didn't actually fix.
        if (!state.displayValidation.isInvalid) state.commitValidation();
        // Auto focus the first invalid input in a form, unless the error already had its default prevented.
        let form = ref?.current?.form;
        if (!e.defaultPrevented && ref && form && getFirstInvalidInput(form) === ref.current) {
            if (focus) focus();
            else ref.current?.focus();
            // Always show focus ring.
            (0, _useFocusVisible.setInteractionModality)('keyboard');
        }
        // Prevent default browser error UI from appearing.
        e.preventDefault();
    });
    let onChange = (0, _useEffectEvent.useEffectEvent)(()=>{
        state.commitValidation();
    });
    (0, _react.useEffect)(()=>{
        let input = ref?.current;
        if (!input) return;
        let form = input.form;
        let reset = form?.reset;
        if (form) // Try to detect React's automatic form reset behavior so we don't clear
        // validation errors that are returned by server actions.
        // To do this, we ignore programmatic form resets that occur outside a user event.
        // This is best-effort. There may be false positives, e.g. setTimeout.
        // oxlint-disable-next-line react/react-compiler
        form.reset = ()=>{
            // React uses MessageChannel for scheduling, so ignore 'message' events.
            isIgnoredReset.current = !window.event || window.event.type === 'message' && (0, _domfunctions.getEventTarget)(window.event) instanceof MessagePort;
            reset?.call(form);
            isIgnoredReset.current = false;
        };
        // 'change' and 'reset' do not compose across shadow DOM boundaries, but these listeners are
        // intentionally scoped to this specific input/form element (not a global target), so shadow
        // root propagation does not apply here.
        input.addEventListener('invalid', onInvalid);
        // oxlint-disable-next-line rsp-rules/no-non-composing-event-listener
        input.addEventListener('change', onChange);
        // oxlint-disable-next-line rsp-rules/no-non-composing-event-listener
        form?.addEventListener('reset', onReset);
        return ()=>{
            input.removeEventListener('invalid', onInvalid);
            input.removeEventListener('change', onChange);
            form?.removeEventListener('reset', onReset);
            if (form) // @ts-ignore
            form.reset = reset;
        };
    }, [
        ref,
        validationBehavior
    ]);
}
function getValidity(input) {
    // The native ValidityState object is live, meaning each property is a getter that returns the current state.
    // We need to create a snapshot of the validity state at the time this function is called to avoid unpredictable React renders.
    let validity = input.validity;
    return {
        badInput: validity.badInput,
        customError: validity.customError,
        patternMismatch: validity.patternMismatch,
        rangeOverflow: validity.rangeOverflow,
        rangeUnderflow: validity.rangeUnderflow,
        stepMismatch: validity.stepMismatch,
        tooLong: validity.tooLong,
        tooShort: validity.tooShort,
        typeMismatch: validity.typeMismatch,
        valueMissing: validity.valueMissing,
        valid: validity.valid
    };
}
function getNativeValidity(input) {
    return {
        isInvalid: !input.validity.valid,
        validationDetails: getValidity(input),
        validationErrors: input.validationMessage ? [
            input.validationMessage
        ] : []
    };
}
function getFirstInvalidInput(form) {
    for(let i = 0; i < form.elements.length; i++){
        let element = form.elements[i];
        if (element.validity?.valid === false) return element;
    }
    return null;
}

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../interactions/useFocusVisible":"aBfUW","react":"gOP0N","../utils/useEffectEvent":"grBNM","../utils/useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"DgAdc":[function(require,module,exports,__globalThis) {
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
// scroll wheel needs to be added not passively so it's cancelable, small helper hook to remember that
parcelHelpers.export(exports, "useScrollWheel", ()=>useScrollWheel);
var _react = require("react");
var _useEvent = require("../utils/useEvent");
function useScrollWheel(props, ref) {
    let { onScroll, isDisabled } = props;
    let onScrollHandler = (0, _react.useCallback)((e)=>{
        // If the ctrlKey is pressed, this is a zoom event, do nothing.
        if (e.ctrlKey) return;
        // stop scrolling the page
        e.preventDefault();
        e.stopPropagation();
        if (onScroll) onScroll({
            deltaX: e.deltaX,
            deltaY: e.deltaY
        });
    }, [
        onScroll
    ]);
    (0, _useEvent.useEvent)(ref, 'wheel', isDisabled ? undefined : onScrollHandler);
}

},{"react":"gOP0N","../utils/useEvent":"avf8K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"avf8K":[function(require,module,exports,__globalThis) {
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

},{"./domHelpers":"cYkFa","react":"gOP0N","./useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"rcibk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Provides state management for a color channel field, allowing users to edit the
 * value of an individual color channel.
 */ parcelHelpers.export(exports, "useColorChannelFieldState", ()=>useColorChannelFieldState);
var _useNumberFieldState = require("../numberfield/useNumberFieldState");
var _useColor = require("./useColor");
var _useControlledState = require("../utils/useControlledState");
var _react = require("react");
function useColorChannelFieldState(props) {
    let { channel, colorSpace, locale } = props;
    let initialValue = (0, _useColor.useColor)(props.value);
    let initialDefaultValue = (0, _useColor.useColor)(props.defaultValue);
    let [colorValue, setColor] = (0, _useControlledState.useControlledState)(initialValue, initialDefaultValue ?? null, props.onChange);
    let color = useConvertColor(colorValue, colorSpace);
    let [initialColorValue] = (0, _react.useState)(colorValue);
    let defaultColorValue = initialDefaultValue ?? initialColorValue;
    let defaultColor = useConvertColor(defaultColorValue, colorSpace);
    let value = color.getChannelValue(channel);
    let range = color.getChannelRange(channel);
    let formatOptions = (0, _react.useMemo)(()=>color.getChannelFormatOptions(channel), [
        color,
        channel
    ]);
    let multiplier = formatOptions.style === 'percent' && range.maxValue === 100 ? 100 : 1;
    let numberFieldState = (0, _useNumberFieldState.useNumberFieldState)({
        locale,
        value: colorValue === null ? NaN : value / multiplier,
        defaultValue: defaultColorValue === null ? NaN : defaultColor.getChannelValue(channel) / multiplier,
        onChange: (v)=>{
            if (!Number.isNaN(v)) setColor(color.withChannelValue(channel, v * multiplier));
            else setColor(null);
        },
        minValue: range.minValue / multiplier,
        maxValue: range.maxValue / multiplier,
        step: range.step / multiplier,
        formatOptions
    });
    return {
        ...numberFieldState,
        colorValue: color,
        defaultColorValue,
        setColorValue: setColor
    };
}
function useConvertColor(colorValue, colorSpace) {
    let black = (0, _useColor.useColor)('#000');
    return (0, _react.useMemo)(()=>{
        let nonNullColorValue = colorValue || black;
        return colorSpace && nonNullColorValue ? nonNullColorValue.toFormat(colorSpace) : nonNullColorValue;
    }, [
        black,
        colorValue,
        colorSpace
    ]);
}

},{"../numberfield/useNumberFieldState":"SROgQ","./useColor":"j8DO9","../utils/useControlledState":"8yNBD","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j8DO9":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useColor", ()=>useColor);
var _color = require("./Color");
var _react = require("react");
function useColor(value) {
    return (0, _react.useMemo)(()=>{
        if (typeof value === 'string') try {
            return (0, _color.parseColor)(value);
        } catch  {
            return undefined;
        }
        return value;
    }, [
        value
    ]);
}

},{"./Color":"6ElIb","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"izxzU":[function(require,module,exports,__globalThis) {
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
 * Provides state management for a color field component. Color fields allow
 * users to enter and adjust a hex color value.
 */ parcelHelpers.export(exports, "useColorFieldState", ()=>useColorFieldState);
var _useFormValidationState = require("../form/useFormValidationState");
var _color = require("./Color");
var _useColor = require("./useColor");
var _useControlledState = require("../utils/useControlledState");
var _react = require("react");
const MIN_COLOR = (0, _color.parseColor)('#000000');
const MAX_COLOR = (0, _color.parseColor)('#FFFFFF');
const MIN_COLOR_INT = MIN_COLOR.toHexInt();
const MAX_COLOR_INT = MAX_COLOR.toHexInt();
function useColorFieldState(props) {
    let { value, defaultValue, onChange } = props;
    let { step } = MIN_COLOR.getChannelRange('red');
    let initialDefaultValue = (0, _useColor.useColor)(defaultValue);
    let [colorValue, setColorValue] = (0, _useControlledState.useControlledState)((0, _useColor.useColor)(value), initialDefaultValue, onChange);
    let [initialValue] = (0, _react.useState)(colorValue);
    let [inputValue, setInputValue] = (0, _react.useState)(()=>(value || defaultValue) && colorValue ? colorValue.toString('hex') : '');
    let validation = (0, _useFormValidationState.useFormValidationState)({
        ...props,
        value: colorValue
    });
    let safelySetColorValue = (newColor)=>{
        if (!colorValue || !newColor) {
            setColorValue(newColor);
            return;
        }
        if (newColor.toHexInt() !== colorValue.toHexInt()) {
            setColorValue(newColor);
            return;
        }
    };
    let [prevValue, setPrevValue] = (0, _react.useState)(colorValue);
    if (prevValue !== colorValue) {
        setInputValue(colorValue ? colorValue.toString('hex') : '');
        setPrevValue(colorValue);
    }
    let parsedValue = (0, _react.useMemo)(()=>{
        let color;
        try {
            color = (0, _color.parseColor)(inputValue.startsWith('#') ? inputValue : `#${inputValue}`);
        } catch  {
            color = null;
        }
        return color;
    }, [
        inputValue
    ]);
    let commit = ()=>{
        // Set to empty state if input value is empty
        if (!inputValue.length) {
            safelySetColorValue(null);
            if (value === undefined || colorValue === null) setInputValue('');
            else setInputValue(colorValue.toString('hex'));
            return;
        }
        // if it failed to parse, then reset input to formatted version of current number
        if (parsedValue == null) {
            setInputValue(colorValue ? colorValue.toString('hex') : '');
            return;
        }
        safelySetColorValue(parsedValue);
        // in a controlled state, the numberValue won't change, so we won't go back to our old input without help
        let newColorValue = '';
        if (colorValue) newColorValue = colorValue.toString('hex');
        setInputValue(newColorValue);
        validation.commitValidation();
    };
    let increment = ()=>{
        let newValue = addColorValue(parsedValue, step);
        // if we've arrived at the same value that was previously in the state, the
        // input value should be updated to match
        // ex type 4, press increment, highlight the number in the input, type 4 again, press increment
        // you'd be at 5, then incrementing to 5 again, so no re-render would happen and 4 would be left in the input
        if (newValue === colorValue) setInputValue(newValue.toString('hex'));
        safelySetColorValue(newValue);
        validation.commitValidation();
    };
    let decrement = ()=>{
        let newValue = addColorValue(parsedValue, -step);
        // if we've arrived at the same value that was previously in the state, the
        // input value should be updated to match
        // ex type 4, press increment, highlight the number in the input, type 4 again, press increment
        // you'd be at 5, then incrementing to 5 again, so no re-render would happen and 4 would be left in the input
        if (newValue === colorValue) setInputValue(newValue.toString('hex'));
        safelySetColorValue(newValue);
        validation.commitValidation();
    };
    let incrementToMax = ()=>safelySetColorValue(MAX_COLOR);
    let decrementToMin = ()=>safelySetColorValue(MIN_COLOR);
    let validate = (value)=>value === '' || !!value.match(/^#?[0-9a-f]{0,6}$/i)?.[0];
    return {
        ...validation,
        validate,
        colorValue,
        defaultColorValue: initialDefaultValue ?? initialValue,
        setColorValue,
        inputValue,
        setInputValue,
        commit,
        increment,
        incrementToMax,
        decrement,
        decrementToMin
    };
}
function addColorValue(color, step) {
    let newColor = color ? color : MIN_COLOR;
    let colorInt = newColor.toHexInt();
    let clampInt = Math.min(Math.max(colorInt + step, MIN_COLOR_INT), MAX_COLOR_INT);
    if (clampInt !== colorInt) {
        let newColorString = `#${clampInt.toString(16).padStart(6, '0').toUpperCase()}`;
        newColor = (0, _color.parseColor)(newColorString);
    }
    return newColor;
}

},{"../form/useFormValidationState":"491YW","./Color":"6ElIb","./useColor":"j8DO9","../utils/useControlledState":"8yNBD","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5KSCU":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "FieldErrorContext", ()=>FieldErrorContext);
parcelHelpers.export(exports, "FieldError", ()=>FieldError);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _text = require("./Text");
const FieldErrorContext = /*#__PURE__*/ (0, _react.createContext)(null);
const FieldError = /*#__PURE__*/ (0, _react.forwardRef)(function FieldError(props, ref) {
    let validation = (0, _react.useContext)(FieldErrorContext);
    if (!validation?.isInvalid) return null;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(FieldErrorInner, {
        ...props,
        ref: ref
    });
});
const FieldErrorInner = /*#__PURE__*/ (0, _react.forwardRef)((props, ref)=>{
    let validation = (0, _react.useContext)(FieldErrorContext);
    let { elementType, ...restProps } = props;
    let domProps = (0, _filterDOMProps.filterDOMProps)(restProps, {
        global: true
    });
    let renderProps = (0, _utils.useRenderProps)({
        ...restProps,
        defaultClassName: 'react-aria-FieldError',
        defaultChildren: validation.validationErrors.length === 0 ? undefined : validation.validationErrors.join(' '),
        values: validation
    });
    if (renderProps.children == null) return null;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _text.Text), {
        slot: "errorMessage",
        elementType: elementType,
        ...domProps,
        ...renderProps,
        ref: ref
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/filterDOMProps":"h4XHF","react":"gOP0N","./Text":"cfMV9","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cfMV9":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/private/collections/Hidden":"iPJX7","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2mugT":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "GroupContext", ()=>GroupContext);
parcelHelpers.export(exports, "Group", ()=>Group);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _useHover = require("react-aria/useHover");
var _mergeProps = require("react-aria/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useFocusRing = require("react-aria/useFocusRing");
const GroupContext = /*#__PURE__*/ (0, _react.createContext)({});
const Group = /*#__PURE__*/ (0, _react.forwardRef)(function Group(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, GroupContext);
    let { isDisabled, isInvalid, isReadOnly, onHoverStart, onHoverChange, onHoverEnd, ...otherProps } = props;
    isDisabled ??= !!props['aria-disabled'] && props['aria-disabled'] !== 'false';
    isInvalid ??= !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let { hoverProps, isHovered } = (0, _useHover.useHover)({
        onHoverStart,
        onHoverChange,
        onHoverEnd,
        isDisabled
    });
    let { isFocused, isFocusVisible, focusProps } = (0, _useFocusRing.useFocusRing)({
        within: true
    });
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: {
            isHovered,
            isFocusWithin: isFocused,
            isFocusVisible,
            isDisabled,
            isInvalid
        },
        defaultClassName: 'react-aria-Group'
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...(0, _mergeProps.mergeProps)(otherProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        role: props.role ?? 'group',
        slot: props.slot ?? undefined,
        "data-focus-within": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-invalid": isInvalid || undefined,
        "data-readonly": isReadOnly || undefined,
        children: renderProps.children
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/useHover":"2yLrj","react-aria/mergeProps":"jycxS","react":"gOP0N","react-aria/useFocusRing":"bP7um","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"BUyo9":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "InputContext", ()=>InputContext);
parcelHelpers.export(exports, "Input", ()=>Input);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _hidden = require("react-aria/private/collections/Hidden");
var _mergeProps = require("react-aria/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useFocusRing = require("react-aria/useFocusRing");
var _useHover = require("react-aria/useHover");
const InputContext = /*#__PURE__*/ (0, _react.createContext)({});
let filterHoverProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart, onHoverChange, onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const Input = /*#__PURE__*/ (0, _hidden.createHideableComponent)(function Input(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, InputContext);
    let { hoverProps, isHovered } = (0, _useHover.useHover)({
        ...props,
        isDisabled: props.disabled
    });
    let { isFocused, isFocusVisible, focusProps } = (0, _useFocusRing.useFocusRing)({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: {
            isHovered,
            isFocused,
            isFocusVisible,
            isDisabled: props.disabled || false,
            isInvalid
        },
        defaultClassName: 'react-aria-Input'
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).input, {
        ...(0, _mergeProps.mergeProps)(filterHoverProps(props), focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-disabled": props.disabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-invalid": isInvalid || undefined
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/private/collections/Hidden":"iPJX7","react-aria/mergeProps":"jycxS","react":"gOP0N","react-aria/useFocusRing":"bP7um","react-aria/useHover":"2yLrj","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5D1vg":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "ColorPickerContext", ()=>ColorPickerContext);
parcelHelpers.export(exports, "ColorPickerStateContext", ()=>ColorPickerStateContext);
/**
 * A ColorPicker synchronizes a color value between multiple React Aria color components.
 * It simplifies building color pickers with customizable layouts via composition.
 */ parcelHelpers.export(exports, "ColorPicker", ()=>ColorPicker);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _colorArea = require("./ColorArea");
var _colorField = require("./ColorField");
var _useColorPickerState = require("react-stately/useColorPickerState");
var _colorSlider = require("./ColorSlider");
var _colorSwatch = require("./ColorSwatch");
var _colorSwatchPicker = require("./ColorSwatchPicker");
var _colorWheel = require("./ColorWheel");
var _mergeProps = require("react-aria/mergeProps");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const ColorPickerContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ColorPickerStateContext = /*#__PURE__*/ (0, _react.createContext)(null);
function ColorPicker(props) {
    let ctx = (0, _utils.useSlottedContext)(ColorPickerContext, props.slot);
    props = (0, _mergeProps.mergeProps)(ctx, props);
    let state = (0, _useColorPickerState.useColorPickerState)(props);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: {
            color: state.color
        }
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
        values: [
            [
                ColorPickerStateContext,
                state
            ],
            [
                (0, _colorSlider.ColorSliderContext),
                {
                    value: state.color,
                    onChange: state.setColor
                }
            ],
            [
                (0, _colorArea.ColorAreaContext),
                {
                    value: state.color,
                    onChange: state.setColor
                }
            ],
            [
                (0, _colorWheel.ColorWheelContext),
                {
                    value: state.color,
                    onChange: state.setColor
                }
            ],
            [
                (0, _colorField.ColorFieldContext),
                {
                    value: state.color,
                    onChange: state.setColor
                }
            ],
            [
                (0, _colorSwatch.ColorSwatchContext),
                {
                    color: state.color
                }
            ],
            [
                (0, _colorSwatchPicker.ColorSwatchPickerContext),
                {
                    value: state.color,
                    onChange: state.setColor
                }
            ]
        ],
        children: renderProps.children
    });
}

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","./ColorArea":"aQZwA","./ColorField":"lW5tW","react-stately/useColorPickerState":"e82tm","./ColorSlider":"1Izsc","./ColorSwatch":"5hoBH","./ColorSwatchPicker":"fBfYU","./ColorWheel":"1ku0K","react-aria/mergeProps":"jycxS","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"e82tm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useColorPickerState", ()=>useColorPickerState);
var _color = require("./Color");
var _useColor = require("./useColor");
var _useControlledState = require("../utils/useControlledState");
function useColorPickerState(props) {
    let value = (0, _useColor.useColor)(props.value);
    let defaultValue = (0, _useColor.useColor)(props.defaultValue || '#000000');
    let [color, setColor] = (0, _useControlledState.useControlledState)(value || undefined, defaultValue, props.onChange);
    return {
        color,
        setColor (color) {
            if (color != null) setColor(color || (0, _color.parseColor)('#000000'));
        }
    };
}

},{"./Color":"6ElIb","./useColor":"j8DO9","../utils/useControlledState":"8yNBD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fBfYU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorSwatchPickerContext", ()=>ColorSwatchPickerContext);
parcelHelpers.export(exports, "ColorSwatchPicker", ()=>ColorSwatchPicker);
parcelHelpers.export(exports, "ColorSwatchPickerItem", ()=>ColorSwatchPickerItem);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _colorSwatch = require("./ColorSwatch");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _indexJs = require("../intl/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _listBox = require("./ListBox");
var _color = require("react-stately/Color");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useColorPickerState = require("react-stately/useColorPickerState");
var _i18Nprovider = require("react-aria/I18nProvider");
var _useLocalizedStringFormatter = require("react-aria/useLocalizedStringFormatter");
const ColorSwatchPickerContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ColorMapContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ColorSwatchPicker = /*#__PURE__*/ (0, _react.forwardRef)(function ColorSwatchPicker(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, ColorSwatchPickerContext);
    let state = (0, _useColorPickerState.useColorPickerState)(props);
    let colorMap = (0, _react.useMemo)(()=>new Map(), []);
    let formatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), 'react-aria-components');
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _listBox.ListBox), {
        ...(0, _filterDOMProps.filterDOMProps)(props, {
            labelable: true
        }),
        ref: ref,
        className: props.className || 'react-aria-ColorSwatchPicker',
        style: props.style,
        "aria-label": props['aria-label'] || (!props['aria-labelledby'] ? formatter.format('colorSwatchPicker') : undefined),
        layout: props.layout || 'grid',
        selectionMode: "single",
        selectedKeys: [
            state.color.toString('hexa')
        ],
        onSelectionChange: (keys)=>{
            // single select, 'all' cannot occur. appease typescript.
            if (keys !== 'all') state.setColor(colorMap.get([
                ...keys
            ][0]));
        },
        disallowEmptySelection: true,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(ColorMapContext.Provider, {
            value: colorMap,
            children: props.children
        })
    });
});
const ColorSwatchPickerItem = /*#__PURE__*/ (0, _react.forwardRef)(function ColorSwatchPickerItem(props, ref) {
    let propColor = props.color || '#0000';
    let color = (0, _react.useMemo)(()=>typeof propColor === 'string' ? (0, _color.parseColor)(propColor) : propColor, [
        propColor
    ]);
    let { locale } = (0, _i18Nprovider.useLocale)();
    let map = (0, _react.useContext)(ColorMapContext);
    (0, _react.useEffect)(()=>{
        let key = color.toString('hexa');
        map.set(key, color);
        return ()=>{
            map.delete(key);
        };
    }, [
        color,
        map
    ]);
    let wrap = (v)=>{
        if (typeof v === 'function') return (renderProps)=>v({
                ...renderProps,
                color
            });
        return v;
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _listBox.ListBoxItem), {
        ...props,
        // ColorSwatchPickerItem is never a link.
        render: props.render,
        ref: ref,
        id: color.toString('hexa'),
        textValue: color.getColorName(locale),
        className: wrap(props.className || 'react-aria-ColorSwatchPickerItem'),
        style: wrap(props.style),
        children: (0, _utils.composeRenderProps)(wrap(props.children), (children)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorSwatch.ColorSwatchContext).Provider, {
                value: {
                    color
                },
                children: children
            }))
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","./ColorSwatch":"5hoBH","react-aria/filterDOMProps":"h4XHF","../intl/index.js":"4xy5f","./ListBox":"l68rZ","react-stately/Color":"6ElIb","react":"gOP0N","react-stately/useColorPickerState":"e82tm","react-aria/I18nProvider":"czGuc","react-aria/useLocalizedStringFormatter":"8lll3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4xy5f":[function(require,module,exports,__globalThis) {
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

},{"./ar-AE.js":"CYkFH","./bg-BG.js":"5zaCh","./cs-CZ.js":"dNdq6","./da-DK.js":"4wGb3","./de-DE.js":"2y3Hq","./el-GR.js":"5xv60","./en-US.js":"1G1vO","./es-ES.js":"5xc2O","./et-EE.js":"hM4OE","./fi-FI.js":"2teAs","./fr-FR.js":"fha1o","./he-IL.js":"auhem","./hr-HR.js":"dzZZw","./hu-HU.js":"DqlCf","./it-IT.js":"jwSLm","./ja-JP.js":"fUpZ9","./ko-KR.js":"2buRD","./lt-LT.js":"7cKkJ","./lv-LV.js":"czvtD","./nb-NO.js":"5YZ2V","./nl-NL.js":"efP89","./pl-PL.js":"1dEVr","./pt-BR.js":"c64Yl","./pt-PT.js":"hQzmc","./ro-RO.js":"gbe7r","./ru-RU.js":"1s0m5","./sk-SK.js":"dcOiF","./sl-SI.js":"ihn61","./sr-SP.js":"bKLqk","./sv-SE.js":"7wgBf","./tr-TR.js":"3gTCo","./uk-UA.js":"1oC0U","./zh-CN.js":"fIBOx","./zh-TW.js":"3aDYU","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"CYkFH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `\u{62A}\u{63A}\u{64A}\u{64A}\u{631}\u{627}\u{62A} \u{627}\u{644}\u{623}\u{644}\u{648}\u{627}\u{646}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{62D}\u{62F}\u{62F} \u{639}\u{646}\u{635}\u{631}\u{64B}\u{627}`,
    "tableResizer": `\u{623}\u{62F}\u{627}\u{629} \u{62A}\u{63A}\u{64A}\u{64A}\u{631} \u{627}\u{644}\u{62D}\u{62C}\u{645}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5zaCh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `\u{426}\u{432}\u{435}\u{442}\u{43E}\u{432}\u{438} \u{43C}\u{43E}\u{441}\u{442}\u{440}\u{438}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{418}\u{437}\u{431}\u{435}\u{440}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}`,
    "tableResizer": `\u{41F}\u{440}\u{435}\u{43E}\u{440}\u{430}\u{437}\u{43C}\u{435}\u{440}\u{438}\u{442}\u{435}\u{43B}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dNdq6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `Vzorky barev`,
    "dropzoneLabel": `M\xedsto pro p\u{159}eta\u{17E}en\xed`,
    "selectPlaceholder": `Vyberte polo\u{17E}ku`,
    "tableResizer": `Zm\u{11B}na velikosti`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4wGb3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `Farvepr\xf8ver`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `V\xe6lg et element`,
    "tableResizer": `St\xf8rrelses\xe6ndring`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2y3Hq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `Farbfelder`,
    "dropzoneLabel": `Ablegebereich`,
    "selectPlaceholder": `Element w\xe4hlen`,
    "tableResizer": `Gr\xf6\xdfenanpassung`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5xv60":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `\u{3A7}\u{3C1}\u{3C9}\u{3BC}\u{3B1}\u{3C4}\u{3B9}\u{3BA}\u{3AC} \u{3B4}\u{3B5}\u{3AF}\u{3B3}\u{3BC}\u{3B1}\u{3C4}\u{3B1}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3BE}\u{3C4}\u{3B5} \u{3AD}\u{3BD}\u{3B1} \u{3B1}\u{3BD}\u{3C4}\u{3B9}\u{3BA}\u{3B5}\u{3AF}\u{3BC}\u{3B5}\u{3BD}\u{3BF}`,
    "tableResizer": `\u{391}\u{3BB}\u{3BB}\u{3B1}\u{3B3}\u{3AE} \u{3BC}\u{3B5}\u{3B3}\u{3AD}\u{3B8}\u{3BF}\u{3C5}\u{3C2}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1G1vO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "selectPlaceholder": `Select an item`,
    "tableResizer": `Resizer`,
    "dropzoneLabel": `DropZone`,
    "colorSwatchPicker": `Color swatches`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5xc2O":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `Muestras de colores`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Seleccionar un art\xedculo`,
    "tableResizer": `Cambiador de tama\xf1o`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hM4OE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `V\xe4rvin\xe4idised`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Valige \xfcksus`,
    "tableResizer": `Suuruse muutja`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2teAs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `V\xe4rimallit`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Valitse kohde`,
    "tableResizer": `Koon muuttaja`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fha1o":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `\xc9chantillons de couleurs`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `S\xe9lectionner un \xe9l\xe9ment`,
    "tableResizer": `Redimensionneur`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"auhem":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `\u{5D3}\u{5D5}\u{5D2}\u{5DE}\u{5D9}\u{5D5}\u{5EA} \u{5E6}\u{5D1}\u{5E2}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{5D1}\u{5D7}\u{5E8} \u{5E4}\u{5E8}\u{5D9}\u{5D8}`,
    "tableResizer": `\u{5E9}\u{5D9}\u{5E0}\u{5D5}\u{5D9} \u{5D2}\u{5D5}\u{5D3}\u{5DC}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dzZZw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `Uzorci boja`,
    "dropzoneLabel": `Zona spu\u{161}tanja`,
    "selectPlaceholder": `Odaberite stavku`,
    "tableResizer": `Promjena veli\u{10D}ine`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"DqlCf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `Sz\xednt\xe1rak`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `V\xe1lasszon ki egy elemet`,
    "tableResizer": `\xc1tm\xe9retez\u{151}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jwSLm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `Campioni di colore`,
    "dropzoneLabel": `Zona di rilascio`,
    "selectPlaceholder": `Seleziona un elemento`,
    "tableResizer": `Ridimensionamento`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fUpZ9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `\u{30AB}\u{30E9}\u{30FC}\u{30B9}\u{30A6}\u{30A9}\u{30C3}\u{30C1}`,
    "dropzoneLabel": `\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{30BE}\u{30FC}\u{30F3}`,
    "selectPlaceholder": `\u{9805}\u{76EE}\u{3092}\u{9078}\u{629E}`,
    "tableResizer": `\u{30B5}\u{30A4}\u{30BA}\u{5909}\u{66F4}\u{30C4}\u{30FC}\u{30EB}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2buRD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `\u{C0C9}\u{C0C1} \u{ACAC}\u{BCF8}`,
    "dropzoneLabel": `\u{B4DC}\u{B86D} \u{C601}\u{C5ED}`,
    "selectPlaceholder": `\u{D56D}\u{BAA9} \u{C120}\u{D0DD}`,
    "tableResizer": `\u{D06C}\u{AE30} \u{C870}\u{C815}\u{AE30}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7cKkJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `Spalv\u{173} pavyzd\u{17E}iai`,
    "dropzoneLabel": `\u{201E}DropZone\u{201C}`,
    "selectPlaceholder": `Pasirinkite element\u{105}`,
    "tableResizer": `Dyd\u{17E}io keitiklis`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"czvtD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `Kr\u{101}su paraugi`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Izv\u{113}l\u{113}ties vienumu`,
    "tableResizer": `Izm\u{113}ra main\u{12B}t\u{101}js`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5YZ2V":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `Fargekart`,
    "dropzoneLabel": `Droppsone`,
    "selectPlaceholder": `Velg et element`,
    "tableResizer": `St\xf8rrelsesendrer`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"efP89":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `kleurstalen`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Selecteer een item`,
    "tableResizer": `Resizer`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1dEVr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `Pr\xf3bki kolor\xf3w`,
    "dropzoneLabel": `Strefa upuszczania`,
    "selectPlaceholder": `Wybierz element`,
    "tableResizer": `Zmiana rozmiaru`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"c64Yl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `Amostras de cores`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Selecione um item`,
    "tableResizer": `Redimensionador`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hQzmc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `Amostras de cores`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Selecione um item`,
    "tableResizer": `Redimensionador`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gbe7r":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `Specimene de culoare`,
    "dropzoneLabel": `Zon\u{103} de plasare`,
    "selectPlaceholder": `Selecta\u{21B}i un element`,
    "tableResizer": `Instrument de redimensionare`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1s0m5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `\u{426}\u{432}\u{435}\u{442}\u{43E}\u{432}\u{44B}\u{435} \u{43E}\u{431}\u{440}\u{430}\u{437}\u{446}\u{44B}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{412}\u{44B}\u{431}\u{435}\u{440}\u{438}\u{442}\u{435} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
    "tableResizer": `\u{421}\u{440}\u{435}\u{434}\u{441}\u{442}\u{432}\u{43E} \u{438}\u{437}\u{43C}\u{435}\u{43D}\u{435}\u{43D}\u{438}\u{44F} \u{440}\u{430}\u{437}\u{43C}\u{435}\u{440}\u{430}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dcOiF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `Vzorkovn\xedky farieb`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Vyberte polo\u{17E}ku`,
    "tableResizer": `N\xe1stroj na zmenu ve\u{13E}kosti`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ihn61":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `Barvne palete`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Izberite element`,
    "tableResizer": `Spreminjanje velikosti`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bKLqk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `Uzorci boje`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Izaberite stavku`,
    "tableResizer": `Promena veli\u{10D}ine`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7wgBf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `F\xe4rgrutor`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `V\xe4lj en artikel`,
    "tableResizer": `Storleks\xe4ndrare`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3gTCo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `Renk \xf6rnekleri`,
    "dropzoneLabel": `B\u{131}rakma B\xf6lgesi`,
    "selectPlaceholder": `Bir \xf6\u{11F}e se\xe7in`,
    "tableResizer": `Yeniden boyutland\u{131}r\u{131}c\u{131}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1oC0U":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `\u{417}\u{440}\u{430}\u{437}\u{43A}\u{438} \u{43A}\u{43E}\u{43B}\u{44C}\u{43E}\u{440}\u{456}\u{432}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{412}\u{438}\u{431}\u{435}\u{440}\u{456}\u{442}\u{44C} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
    "tableResizer": `\u{417}\u{430}\u{441}\u{456}\u{431} \u{437}\u{43C}\u{456}\u{43D}\u{435}\u{43D}\u{43D}\u{44F} \u{440}\u{43E}\u{437}\u{43C}\u{456}\u{440}\u{443}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fIBOx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `\u{989C}\u{8272}\u{8272}\u{677F}`,
    "dropzoneLabel": `\u{653E}\u{7F6E}\u{533A}\u{57DF}`,
    "selectPlaceholder": `\u{9009}\u{62E9}\u{4E00}\u{4E2A}\u{9879}\u{76EE}`,
    "tableResizer": `\u{5C3A}\u{5BF8}\u{8C03}\u{6574}\u{5668}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3aDYU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "colorSwatchPicker": `\u{8272}\u{7968}`,
    "dropzoneLabel": `\u{653E}\u{7F6E}\u{5340}`,
    "selectPlaceholder": `\u{9078}\u{53D6}\u{9805}\u{76EE}`,
    "tableResizer": `\u{5927}\u{5C0F}\u{8ABF}\u{6574}\u{5668}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1ku0K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorWheelContext", ()=>ColorWheelContext);
parcelHelpers.export(exports, "ColorWheelStateContext", ()=>ColorWheelStateContext);
parcelHelpers.export(exports, "ColorWheel", ()=>ColorWheel);
parcelHelpers.export(exports, "ColorWheelTrackContext", ()=>ColorWheelTrackContext);
parcelHelpers.export(exports, "ColorWheelTrack", ()=>ColorWheelTrack);
var _jsxRuntime = require("preact/jsx-runtime");
var _useColorWheel = require("react-aria/useColorWheel");
var _utils = require("./utils");
var _useColorWheelState = require("react-stately/useColorWheelState");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _colorThumb = require("./ColorThumb");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const ColorWheelContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ColorWheelStateContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ColorWheel = /*#__PURE__*/ (0, _react.forwardRef)(function ColorWheel(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, ColorWheelContext);
    let state = (0, _useColorWheelState.useColorWheelState)(props);
    let inputRef = (0, _react.useRef)(null);
    let { trackProps, inputProps, thumbProps } = (0, _useColorWheel.useColorWheel)(props, state, inputRef);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: {
            state,
            isDisabled: props.isDisabled || false
        },
        defaultClassName: 'react-aria-ColorWheel',
        defaultStyle: {
            position: 'relative'
        }
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
            values: [
                [
                    ColorWheelStateContext,
                    state
                ],
                [
                    ColorWheelTrackContext,
                    trackProps
                ],
                [
                    (0, _colorThumb.InternalColorThumbContext),
                    {
                        state,
                        thumbProps,
                        inputXRef: inputRef,
                        xInputProps: inputProps,
                        isDisabled: props.isDisabled
                    }
                ]
            ],
            children: renderProps.children
        })
    });
});
const ColorWheelTrackContext = /*#__PURE__*/ (0, _react.createContext)(null);
const ColorWheelTrack = /*#__PURE__*/ (0, _react.forwardRef)(function ColorWheelTrack(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, ColorWheelTrackContext);
    let state = (0, _react.useContext)(ColorWheelStateContext);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { className, style, ...rest } = props;
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-ColorWheelTrack',
        values: {
            isDisabled: state.isDisabled,
            state
        }
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...rest,
        ...renderProps,
        ref: ref,
        "data-disabled": state.isDisabled || undefined
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/useColorWheel":"kIouJ","./utils":"jtWJJ","react-stately/useColorWheelState":"4wFJf","react-aria/filterDOMProps":"h4XHF","./ColorThumb":"bmqua","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kIouJ":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a color wheel component.
 * Color wheels allow users to adjust the hue of an HSL or HSB color value on a circular track.
 */ parcelHelpers.export(exports, "useColorWheel", ()=>useColorWheel);
var _focusWithoutScrolling = require("../utils/focusWithoutScrolling");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _mergeProps = require("../utils/mergeProps");
var _react = require("react");
var _useFormReset = require("../utils/useFormReset");
var _useGlobalListeners = require("../utils/useGlobalListeners");
var _useKeyboard = require("../interactions/useKeyboard");
var _useLabels = require("../utils/useLabels");
var _i18Nprovider = require("../i18n/I18nProvider");
var _useMove = require("../interactions/useMove");
var _visuallyHidden = require("../visually-hidden/VisuallyHidden");
function useColorWheel(props, state, inputRef) {
    let { isDisabled, innerRadius, outerRadius, 'aria-label': ariaLabel, name, form } = props;
    let { addGlobalListener, removeGlobalListener } = (0, _useGlobalListeners.useGlobalListeners)();
    let thumbRadius = (innerRadius + outerRadius) / 2;
    let focusInput = (0, _react.useCallback)(()=>{
        if (inputRef.current) (0, _focusWithoutScrolling.focusWithoutScrolling)(inputRef.current);
    }, [
        inputRef
    ]);
    (0, _useFormReset.useFormReset)(inputRef, state.defaultValue, state.setValue);
    let currentPosition = (0, _react.useRef)(null);
    let { keyboardProps } = (0, _useKeyboard.useKeyboard)({
        shortcuts: {
            PageUp: ()=>{
                state.setDragging(true);
                state.increment(state.pageStep);
                state.setDragging(false);
            },
            PageDown: ()=>{
                state.setDragging(true);
                state.decrement(state.pageStep);
                state.setDragging(false);
            }
        },
        allowRepeats: true
    });
    let moveHandler = {
        onMoveStart () {
            currentPosition.current = null;
            state.setDragging(true);
        },
        onMove ({ deltaX, deltaY, pointerType, shiftKey }) {
            if (currentPosition.current == null) currentPosition.current = state.getThumbPosition(thumbRadius);
            currentPosition.current.x += deltaX;
            currentPosition.current.y += deltaY;
            if (pointerType === 'keyboard') {
                if (deltaX > 0 || deltaY < 0) state.increment(shiftKey ? state.pageStep : state.step);
                else if (deltaX < 0 || deltaY > 0) state.decrement(shiftKey ? state.pageStep : state.step);
            } else state.setHueFromPoint(currentPosition.current.x, currentPosition.current.y, thumbRadius);
        },
        onMoveEnd () {
            isOnTrack.current = false;
            state.setDragging(false);
            focusInput();
        }
    };
    let { moveProps: movePropsThumb } = (0, _useMove.useMove)(moveHandler);
    let currentPointer = (0, _react.useRef)(undefined);
    let isOnTrack = (0, _react.useRef)(false);
    let { moveProps: movePropsContainer } = (0, _useMove.useMove)({
        onMoveStart () {
            if (isOnTrack.current) moveHandler.onMoveStart();
        },
        onMove (e) {
            if (isOnTrack.current) moveHandler.onMove(e);
        },
        onMoveEnd () {
            if (isOnTrack.current) moveHandler.onMoveEnd();
        }
    });
    let onThumbDown = (id)=>{
        if (!state.isDragging) {
            currentPointer.current = id;
            focusInput();
            state.setDragging(true);
            if (typeof PointerEvent !== 'undefined') addGlobalListener(window, 'pointerup', onThumbUp, false);
            else {
                addGlobalListener(window, 'mouseup', onThumbUp, false);
                addGlobalListener(window, 'touchend', onThumbUp, false);
            }
        }
    };
    let onThumbUp = (e)=>{
        let id = e.pointerId ?? e.changedTouches?.[0].identifier;
        if (id === currentPointer.current) {
            focusInput();
            state.setDragging(false);
            currentPointer.current = undefined;
            isOnTrack.current = false;
            if (typeof PointerEvent !== 'undefined') removeGlobalListener(window, 'pointerup', onThumbUp, false);
            else {
                removeGlobalListener(window, 'mouseup', onThumbUp, false);
                removeGlobalListener(window, 'touchend', onThumbUp, false);
            }
        }
    };
    let onTrackDown = (track, id, pageX, pageY)=>{
        let rect = track.getBoundingClientRect();
        let x = pageX - rect.x - rect.width / 2;
        let y = pageY - rect.y - rect.height / 2;
        let radius = Math.sqrt(x * x + y * y);
        if (innerRadius < radius && radius < outerRadius && !state.isDragging && currentPointer.current === undefined) {
            isOnTrack.current = true;
            currentPointer.current = id;
            state.setHueFromPoint(x, y, radius);
            focusInput();
            state.setDragging(true);
            if (typeof PointerEvent !== 'undefined') addGlobalListener(window, 'pointerup', onTrackUp, false);
            else {
                addGlobalListener(window, 'mouseup', onTrackUp, false);
                addGlobalListener(window, 'touchend', onTrackUp, false);
            }
        }
    };
    let onTrackUp = (e)=>{
        let id = e.pointerId ?? e.changedTouches?.[0].identifier;
        if (isOnTrack.current && id === currentPointer.current) {
            isOnTrack.current = false;
            currentPointer.current = undefined;
            state.setDragging(false);
            focusInput();
            if (typeof PointerEvent !== 'undefined') removeGlobalListener(window, 'pointerup', onTrackUp, false);
            else {
                removeGlobalListener(window, 'mouseup', onTrackUp, false);
                removeGlobalListener(window, 'touchend', onTrackUp, false);
            }
        }
    };
    let trackInteractions = isDisabled ? {} : (0, _mergeProps.mergeProps)(// oxlint-disable-next-line react/react-compiler
    {
        ...typeof PointerEvent !== 'undefined' ? {
            onPointerDown: (e)=>{
                if (e.pointerType === 'mouse' && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey)) return;
                onTrackDown(e.currentTarget, e.pointerId, e.clientX, e.clientY);
            }
        } : {
            onMouseDown: (e)=>{
                if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
                onTrackDown(e.currentTarget, undefined, e.clientX, e.clientY);
            },
            onTouchStart: (e)=>{
                onTrackDown(e.currentTarget, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
            }
        }
    }, movePropsContainer);
    let thumbInteractions = isDisabled ? {} : (0, _mergeProps.mergeProps)(// oxlint-disable-next-line react/react-compiler
    {
        ...typeof PointerEvent !== 'undefined' ? {
            onPointerDown: (e)=>{
                if (e.pointerType === 'mouse' && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey)) return;
                onThumbDown(e.pointerId);
            }
        } : {
            onMouseDown: (e)=>{
                if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) return;
                onThumbDown(undefined);
            },
            onTouchStart: (e)=>{
                onThumbDown(e.changedTouches[0].identifier);
            }
        }
    }, keyboardProps, movePropsThumb);
    let { x, y } = state.getThumbPosition(thumbRadius);
    // Provide a default aria-label if none is given
    let { locale } = (0, _i18Nprovider.useLocale)();
    if (ariaLabel == null && props['aria-labelledby'] == null) ariaLabel = state.value.getChannelName('hue', locale);
    let inputLabellingProps = (0, _useLabels.useLabels)({
        ...props,
        'aria-label': ariaLabel
    });
    let { minValue, maxValue, step } = state.value.getChannelRange('hue');
    let forcedColorAdjustNoneStyle = {
        forcedColorAdjust: 'none'
    };
    let { visuallyHiddenProps } = (0, _visuallyHidden.useVisuallyHidden)({
        style: {
            opacity: '0.0001',
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
        }
    });
    return {
        trackProps: {
            ...trackInteractions,
            style: {
                position: 'relative',
                touchAction: 'none',
                width: outerRadius * 2,
                height: outerRadius * 2,
                background: `
          conic-gradient(
            from 90deg,
            hsl(0, 100%, 50%),
            hsl(30, 100%, 50%),
            hsl(60, 100%, 50%),
            hsl(90, 100%, 50%),
            hsl(120, 100%, 50%),
            hsl(150, 100%, 50%),
            hsl(180, 100%, 50%),
            hsl(210, 100%, 50%),
            hsl(240, 100%, 50%),
            hsl(270, 100%, 50%),
            hsl(300, 100%, 50%),
            hsl(330, 100%, 50%),
            hsl(360, 100%, 50%)
          )
        `,
                clipPath: `path(evenodd, "${circlePath(outerRadius, outerRadius, outerRadius)} ${circlePath(outerRadius, outerRadius, innerRadius)}")`,
                ...forcedColorAdjustNoneStyle
            }
        },
        thumbProps: {
            ...thumbInteractions,
            style: {
                position: 'absolute',
                left: (outerRadius + x).toFixed(3) + 'px',
                top: (outerRadius + y).toFixed(3) + 'px',
                transform: 'translate(-50%, -50%)',
                touchAction: 'none',
                ...forcedColorAdjustNoneStyle
            }
        },
        inputProps: (0, _mergeProps.mergeProps)(inputLabellingProps, {
            type: 'range',
            min: String(minValue),
            max: String(maxValue),
            step: String(step),
            'aria-valuetext': `${state.value.formatChannelValue('hue', locale)}, ${state.value.getHueName(locale)}`,
            disabled: isDisabled,
            value: `${state.value.getChannelValue('hue')}`,
            name,
            form,
            onChange: (e)=>{
                state.setHue(parseFloat((0, _domfunctions.getEventTarget)(e).value));
            },
            style: visuallyHiddenProps.style,
            'aria-errormessage': props['aria-errormessage'],
            'aria-describedby': props['aria-describedby'],
            'aria-details': props['aria-details']
        })
    };
}
// Creates an SVG path string for a circle.
function circlePath(cx, cy, r) {
    return `M ${cx}, ${cy} m ${-r}, 0 a ${r}, ${r}, 0, 1, 0, ${r * 2}, 0 a ${r}, ${r}, 0, 1, 0 ${-r * 2}, 0`;
}

},{"../utils/focusWithoutScrolling":"gcZ3w","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/mergeProps":"jycxS","react":"gOP0N","../utils/useFormReset":"iDQvZ","../utils/useGlobalListeners":"jsdt1","../interactions/useKeyboard":"aHm7i","../utils/useLabels":"8ZwLJ","../i18n/I18nProvider":"czGuc","../interactions/useMove":"iFW04","../visually-hidden/VisuallyHidden":"cMf28","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4wFJf":[function(require,module,exports,__globalThis) {
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
 * Provides state management for a color wheel component.
 * Color wheels allow users to adjust the hue of an HSL or HSB color value on a circular track.
 */ parcelHelpers.export(exports, "useColorWheelState", ()=>useColorWheelState);
var _color = require("./Color");
var _useControlledState = require("../utils/useControlledState");
var _react = require("react");
const DEFAULT_COLOR = (0, _color.parseColor)('hsl(0, 100%, 50%)');
function roundToStep(value, step) {
    return Math.round(value / step) * step;
}
function mod(n, m) {
    return (n % m + m) % m;
}
function roundDown(v) {
    let r = Math.floor(v);
    if (r === v) return v - 1;
    else return r;
}
function degToRad(deg) {
    return deg * Math.PI / 180;
}
function radToDeg(rad) {
    return rad * 180 / Math.PI;
}
// 0deg = 3 o'clock. increases clockwise
function angleToCartesian(angle, radius) {
    let rad = degToRad(360 - angle + 90);
    let x = Math.sin(rad) * radius;
    let y = Math.cos(rad) * radius;
    return {
        x,
        y
    };
}
function cartesianToAngle(x, y, radius) {
    let deg = radToDeg(Math.atan2(y / radius, x / radius));
    return (deg + 360) % 360;
}
function useColorWheelState(props) {
    let { value: propsValue, defaultValue, onChange, onChangeEnd } = props;
    if (!propsValue && !defaultValue) defaultValue = DEFAULT_COLOR;
    if (propsValue) propsValue = (0, _color.normalizeColor)(propsValue);
    if (defaultValue) defaultValue = (0, _color.normalizeColor)(defaultValue);
    // safe to cast value and defaultValue to Color, one of them will always be defined because if neither are, we assign a default
    let [stateValue, setValueState] = (0, _useControlledState.useControlledState)(propsValue, defaultValue, onChange);
    let [initialValue] = (0, _react.useState)(stateValue);
    let value = (0, _react.useMemo)(()=>{
        let colorSpace = stateValue.getColorSpace();
        return colorSpace === 'hsl' || colorSpace === 'hsb' ? stateValue : stateValue.toFormat('hsl');
    }, [
        stateValue
    ]);
    let valueRef = (0, _react.useRef)(value);
    let setValue = (value)=>{
        valueRef.current = value;
        setValueState(value);
    };
    let channelRange = value.getChannelRange('hue');
    let { minValue: minValueX, maxValue: maxValueX, step: step, pageSize: pageStep } = channelRange;
    let [isDragging, setDragging] = (0, _react.useState)(false);
    let isDraggingRef = (0, _react.useRef)(false);
    let hue = value.getChannelValue('hue');
    function setHue(v) {
        if (v > 360) // Make sure you can always get back to 0.
        v = 0;
        v = roundToStep(mod(v, 360), step);
        if (hue !== v) {
            let color = value.withChannelValue('hue', v);
            setValue(color);
        }
    }
    return {
        value,
        defaultValue: propsValue !== undefined ? initialValue : defaultValue,
        step,
        pageStep,
        setValue (v) {
            let color = (0, _color.normalizeColor)(v);
            setValue(color);
        },
        hue,
        setHue,
        setHueFromPoint (x, y, radius) {
            setHue(cartesianToAngle(x, y, radius));
        },
        getThumbPosition (radius) {
            return angleToCartesian(value.getChannelValue('hue'), radius);
        },
        increment (stepSize = 1) {
            let s = Math.max(stepSize, step);
            let newValue = hue + s;
            if (newValue >= maxValueX) // Make sure you can always get back to 0.
            newValue = minValueX;
            setHue(roundToStep(mod(newValue, 360), s));
        },
        decrement (stepSize = 1) {
            let s = Math.max(stepSize, step);
            if (hue === 0) // We can't just subtract step because this might be the case:
            // |(previous step) - 0| < step size
            setHue(roundDown(360 / s) * s);
            else setHue(roundToStep(mod(hue - s, 360), s));
        },
        setDragging (isDragging) {
            let wasDragging = isDraggingRef.current;
            isDraggingRef.current = isDragging;
            if (onChangeEnd && !isDragging && wasDragging) onChangeEnd(valueRef.current);
            setDragging(isDragging);
        },
        isDragging,
        getDisplayColor () {
            return value.toFormat('hsl').withChannelValue('saturation', 100).withChannelValue('lightness', 50).withChannelValue('alpha', 1);
        },
        isDisabled: props.isDisabled || false
    };
}

},{"./Color":"6ElIb","../utils/useControlledState":"8yNBD","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"f1ESp":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","../utils/useControlledState":"8yNBD","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5dXIN":[function(require,module,exports,__globalThis) {
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

},{"./isScrollable":"2UC33","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"b7u5T":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","../utils/platform":"eBqgD","../utils/mergeProps":"jycxS","./useLongPress":"b7u5T","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dnU5A":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7uQK8":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/filterDOMProps":"h4XHF","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fc1Bu":[function(require,module,exports,__globalThis) {
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

},{"./chain":"bQmEj","react-dom":"gOP0N","react":"gOP0N","./domHelpers":"cYkFa","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4EL3s":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6VPAz":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a listbox component.
 * A listbox displays a list of options and allows a user to select one or more of them.
 *
 * @param props - Props for the listbox.
 * @param state - State for the listbox, as returned by `useListState`.
 */ parcelHelpers.export(exports, "useListBox", ()=>useListBox);
var _filterDOMProps = require("../utils/filterDOMProps");
var _utils = require("./utils");
var _mergeProps = require("../utils/mergeProps");
var _useFocusWithin = require("../interactions/useFocusWithin");
var _useId = require("../utils/useId");
var _useLabel = require("../label/useLabel");
var _useSelectableList = require("../selection/useSelectableList");
function useListBox(props, state, ref) {
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    // Use props instead of state here. We don't want this to change due to long press.
    let selectionBehavior = props.selectionBehavior || 'toggle';
    let orientation = props.orientation || 'vertical';
    let linkBehavior = props.linkBehavior || (selectionBehavior === 'replace' ? 'action' : 'override');
    if (selectionBehavior === 'toggle' && linkBehavior === 'action') // linkBehavior="action" does not work with selectionBehavior="toggle" because there is no way
    // to initiate selection (checkboxes are not allowed inside a listbox). Link items will not be
    // selectable in this configuration.
    linkBehavior = 'override';
    let { listProps } = (0, _useSelectableList.useSelectableList)({
        ...props,
        ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        linkBehavior
    });
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)({
        onFocusWithin: props.onFocus,
        onBlurWithin: props.onBlur,
        onFocusWithinChange: props.onFocusChange
    });
    // Share list id and some props with child options.
    let id = (0, _useId.useId)(props.id);
    (0, _utils.listData).set(state, {
        id,
        shouldUseVirtualFocus: props.shouldUseVirtualFocus,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp,
        shouldFocusOnHover: props.shouldFocusOnHover,
        isVirtualized: props.isVirtualized,
        onAction: props.onAction,
        linkBehavior,
        // @ts-ignore
        UNSTABLE_itemBehavior: props['UNSTABLE_itemBehavior']
    });
    let { labelProps, fieldProps } = (0, _useLabel.useLabel)({
        ...props,
        id,
        // listbox is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    return {
        labelProps,
        listBoxProps: (0, _mergeProps.mergeProps)(domProps, focusWithinProps, state.selectionManager.selectionMode === 'multiple' ? {
            'aria-multiselectable': 'true'
        } : {}, {
            role: 'listbox',
            'aria-orientation': orientation,
            ...(0, _mergeProps.mergeProps)(fieldProps, listProps)
        })
    };
}

},{"../utils/filterDOMProps":"h4XHF","./utils":"8ZMtS","../utils/mergeProps":"jycxS","../interactions/useFocusWithin":"bkSQo","../utils/useId":"fQAcb","../label/useLabel":"kMUgu","../selection/useSelectableList":"kK5el","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8ZMtS":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "listData", ()=>listData);
parcelHelpers.export(exports, "getItemId", ()=>getItemId);
const listData = new WeakMap();
function normalizeKey(key) {
    if (typeof key === 'string') return key.replace(/\s*/g, '');
    return '' + key;
}
function getItemId(state, itemKey) {
    let data = listData.get(state);
    if (!data) throw new Error('Unknown list');
    return `${data.id}-option-${normalizeKey(itemKey)}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dUGjY":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for an option in a listbox.
 * See `useListBox` for more details about listboxes.
 *
 * @param props - Props for the option.
 * @param state - State for the listbox, as returned by `useListState`.
 */ parcelHelpers.export(exports, "useOption", ()=>useOption);
var _chain = require("../utils/chain");
var _filterDOMProps = require("../utils/filterDOMProps");
var _getItemCount = require("react-stately/private/collections/getItemCount");
var _utils = require("./utils");
var _useFocusVisible = require("../interactions/useFocusVisible");
var _mergeProps = require("../utils/mergeProps");
var _useSelectableItem = require("../selection/useSelectableItem");
var _useHover = require("../interactions/useHover");
var _openLink = require("../utils/openLink");
var _useId = require("../utils/useId");
function useOption(props, state, ref) {
    let { key } = props;
    let data = (0, _utils.listData).get(state);
    let isDisabled = props.isDisabled ?? state.selectionManager.isDisabled(key);
    let isSelected = props.isSelected ?? state.selectionManager.isSelected(key);
    let shouldSelectOnPressUp = props.shouldSelectOnPressUp ?? data?.shouldSelectOnPressUp;
    let shouldFocusOnHover = props.shouldFocusOnHover ?? data?.shouldFocusOnHover;
    let shouldUseVirtualFocus = props.shouldUseVirtualFocus ?? data?.shouldUseVirtualFocus;
    let isVirtualized = props.isVirtualized ?? data?.isVirtualized;
    let labelId = (0, _useId.useSlotId)();
    let descriptionId = (0, _useId.useSlotId)();
    let optionProps = {
        role: 'option',
        'aria-disabled': isDisabled || undefined,
        'aria-selected': state.selectionManager.selectionMode !== 'none' ? isSelected : undefined,
        'aria-label': props['aria-label'],
        'aria-labelledby': labelId,
        'aria-describedby': descriptionId
    };
    let item = state.collection.getItem(key);
    if (isVirtualized) {
        let index = Number(item?.index);
        optionProps['aria-posinset'] = Number.isNaN(index) ? undefined : index + 1;
        optionProps['aria-setsize'] = (0, _getItemCount.getItemCount)(state.collection);
    }
    let onAction = data?.onAction ? ()=>data?.onAction?.(key) : undefined;
    let id = (0, _utils.getItemId)(state, key);
    let { itemProps, isPressed, isFocused, hasAction, allowsSelection } = (0, _useSelectableItem.useSelectableItem)({
        selectionManager: state.selectionManager,
        key,
        ref,
        shouldSelectOnPressUp,
        allowsDifferentPressOrigin: shouldSelectOnPressUp && shouldFocusOnHover,
        isVirtualized,
        shouldUseVirtualFocus,
        isDisabled,
        onAction: onAction || item?.props?.onAction ? (0, _chain.chain)(item?.props?.onAction, onAction) : undefined,
        linkBehavior: data?.linkBehavior,
        // @ts-ignore
        UNSTABLE_itemBehavior: data?.['UNSTABLE_itemBehavior'],
        id
    });
    let { hoverProps } = (0, _useHover.useHover)({
        isDisabled: isDisabled || !shouldFocusOnHover,
        onHoverStart () {
            if (!(0, _useFocusVisible.isFocusVisible)()) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
            }
        }
    });
    let domProps = (0, _filterDOMProps.filterDOMProps)(item?.props);
    delete domProps.id;
    let linkProps = (0, _openLink.useLinkProps)(item?.props);
    return {
        optionProps: {
            ...optionProps,
            ...(0, _mergeProps.mergeProps)(domProps, itemProps, hoverProps, linkProps),
            id
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        isFocused,
        isFocusVisible: isFocused && state.selectionManager.isFocused && (0, _useFocusVisible.isFocusVisible)(),
        isSelected,
        isDisabled,
        isPressed,
        allowsSelection,
        hasAction
    };
}

},{"../utils/chain":"bQmEj","../utils/filterDOMProps":"h4XHF","react-stately/private/collections/getItemCount":"eLVRI","./utils":"8ZMtS","../interactions/useFocusVisible":"aBfUW","../utils/mergeProps":"jycxS","../selection/useSelectableItem":"3SFOH","../interactions/useHover":"2yLrj","../utils/openLink":"gH3wl","../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kbk3K":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "DragAndDropContext", ()=>DragAndDropContext);
parcelHelpers.export(exports, "DropIndicatorContext", ()=>DropIndicatorContext);
parcelHelpers.export(exports, "DropIndicator", ()=>DropIndicator);
parcelHelpers.export(exports, "useRenderDropIndicator", ()=>useRenderDropIndicator);
parcelHelpers.export(exports, "useDndPersistedKeys", ()=>useDndPersistedKeys);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const DragAndDropContext = /*#__PURE__*/ (0, _react.createContext)({});
const DropIndicatorContext = /*#__PURE__*/ (0, _react.createContext)(null);
const DropIndicator = /*#__PURE__*/ (0, _react.forwardRef)(function DropIndicator(props, ref) {
    let { render } = (0, _react.useContext)(DropIndicatorContext);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {
        children: render(props, ref)
    });
});
function useRenderDropIndicator(dragAndDropHooks, dropState) {
    let renderDropIndicator = dragAndDropHooks?.renderDropIndicator;
    let isVirtualDragging = dragAndDropHooks?.isVirtualDragging?.();
    let fn = (0, _react.useCallback)((target)=>{
        // Only show drop indicators when virtual dragging or this is the current drop target.
        // oxlint-disable-next-line react/react-compiler
        if (isVirtualDragging || dropState?.isDropTarget(target)) return renderDropIndicator ? renderDropIndicator(target) : /*#__PURE__*/ (0, _jsxRuntime.jsx)(DropIndicator, {
            target: target
        });
    }, // We invalidate whenever the target changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        dropState?.target,
        isVirtualDragging,
        renderDropIndicator
    ]);
    return dragAndDropHooks?.useDropIndicator ? fn : undefined;
}
function useDndPersistedKeys(selectionManager, dragAndDropHooks, dropState) {
    // Persist the focused key and the drop target key.
    let focusedKey = selectionManager.focusedKey;
    let dropTargetKey = null;
    if (dragAndDropHooks?.isVirtualDragging?.() && dropState?.target?.type === 'item') {
        dropTargetKey = dropState.target.key;
        if (dropState.target.dropPosition === 'after') {
            // Normalize to the "before" drop position since we only render those to the DOM.
            let nextKey = dropState.collection.getKeyAfter(dropTargetKey);
            let lastDescendantKey = null;
            if (nextKey != null) {
                let targetLevel = dropState.collection.getItem(dropTargetKey)?.level ?? 0;
                // Skip over any rows that are descendants of the target ("after" position should be after all children)
                while(nextKey != null){
                    let node = dropState.collection.getItem(nextKey);
                    // eslint-disable-next-line max-depth
                    if (!node) break;
                    // Skip over non-item nodes (e.g., loaders) since they can't be drop targets.
                    // eslint-disable-next-line max-depth
                    if (node.type !== 'item') {
                        nextKey = dropState.collection.getKeyAfter(nextKey);
                        continue;
                    }
                    // Stop once we find an item at the same level or higher
                    // eslint-disable-next-line max-depth
                    if ((node.level ?? 0) <= targetLevel) break;
                    lastDescendantKey = nextKey;
                    nextKey = dropState.collection.getKeyAfter(nextKey);
                }
            }
            // If nextKey is null (end of collection), use the last descendant
            dropTargetKey = nextKey ?? lastDescendantKey ?? dropTargetKey;
        }
    }
    return (0, _react.useMemo)(()=>{
        return new Set([
            focusedKey,
            dropTargetKey
        ].filter((k)=>k != null));
    }, [
        focusedKey,
        dropTargetKey
    ]);
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3g793":[function(require,module,exports,__globalThis) {
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
 * Provides state management for list-like components. Handles building a collection
 * of items from props, and manages multiple selection state.
 */ parcelHelpers.export(exports, "useListState", ()=>useListState);
/**
 * Filters a collection using the provided filter function and returns a new ListState.
 */ parcelHelpers.export(exports, "UNSTABLE_useFilteredListState", ()=>UNSTABLE_useFilteredListState);
var _listCollection = require("./ListCollection");
var _useMultipleSelectionState = require("../selection/useMultipleSelectionState");
var _selectionManager = require("../selection/SelectionManager");
var _react = require("react");
var _useCollection = require("../collections/useCollection");
function useListState(props) {
    let { filter, layoutDelegate } = props;
    let selectionState = (0, _useMultipleSelectionState.useMultipleSelectionState)(props);
    let disabledKeys = (0, _react.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let factory = (0, _react.useCallback)((nodes)=>filter ? new (0, _listCollection.ListCollection)(filter(nodes)) : new (0, _listCollection.ListCollection)(nodes), [
        filter
    ]);
    let context = (0, _react.useMemo)(()=>({
            suppressTextValueWarning: props.suppressTextValueWarning
        }), [
        props.suppressTextValueWarning
    ]);
    let collection = (0, _useCollection.useCollection)(props, factory, context);
    let selectionManager = (0, _react.useMemo)(()=>new (0, _selectionManager.SelectionManager)(collection, selectionState, {
            layoutDelegate
        }), [
        collection,
        selectionState,
        layoutDelegate
    ]);
    useFocusedKeyReset(collection, selectionManager);
    return {
        collection,
        disabledKeys,
        selectionManager
    };
}
function UNSTABLE_useFilteredListState(state, filterFn) {
    let collection = (0, _react.useMemo)(()=>filterFn ? state.collection.filter(filterFn) : state.collection, [
        state.collection,
        filterFn
    ]);
    let selectionManager = state.selectionManager.withCollection(collection);
    useFocusedKeyReset(collection, selectionManager);
    return {
        collection,
        selectionManager,
        disabledKeys: state.disabledKeys
    };
}
function useFocusedKeyReset(collection, selectionManager) {
    // Reset focused key if that item is deleted from the collection.
    const cachedCollection = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        if (selectionManager.focusedKey != null && !collection.getItem(selectionManager.focusedKey) && cachedCollection.current) {
            // Walk forward in the old collection to find the next key that still exists in the new collection.
            let key = cachedCollection.current.getKeyAfter(selectionManager.focusedKey);
            let nextFocusedKey = null;
            while(key != null){
                let node = collection.getItem(key);
                if (node && node.type === 'item' && !selectionManager.isDisabled(key)) {
                    nextFocusedKey = key;
                    break;
                }
                key = cachedCollection.current.getKeyAfter(key);
            }
            // If no such key exists, walk backward.
            if (nextFocusedKey == null) {
                key = cachedCollection.current.getKeyBefore(selectionManager.focusedKey);
                while(key != null){
                    let node = collection.getItem(key);
                    if (node && node.type === 'item' && !selectionManager.isDisabled(key)) {
                        nextFocusedKey = key;
                        break;
                    }
                    key = cachedCollection.current.getKeyBefore(key);
                }
            }
            selectionManager.setFocusedKey(nextFocusedKey);
        }
        cachedCollection.current = collection;
    }, [
        collection,
        selectionManager
    ]);
}

},{"./ListCollection":"11pGO","../selection/useMultipleSelectionState":"c53PS","../selection/SelectionManager":"4luyT","react":"gOP0N","../collections/useCollection":"3hcm9","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"11pGO":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "ListCollection", ()=>ListCollection);
class ListCollection {
    keyMap = new Map();
    iterable;
    firstKey = null;
    lastKey = null;
    _size;
    constructor(nodes){
        this.iterable = nodes;
        let visit = (node)=>{
            this.keyMap.set(node.key, node);
            if (node.childNodes && node.type === 'section') for (let child of node.childNodes)visit(child);
        };
        for (let node of nodes)visit(node);
        let last = null;
        let index = 0;
        let size = 0;
        for (let [key, node] of this.keyMap){
            if (last) {
                last.nextKey = key;
                node.prevKey = last.key;
            } else {
                this.firstKey = key;
                node.prevKey = undefined;
            }
            if (node.type === 'item') node.index = index++;
            // Only count sections and items when determining size so that
            // loaders and separators in RAC/S2 don't influence the emptyState determination
            if (node.type === 'section' || node.type === 'item') size++;
            last = node;
            // Set nextKey as undefined since this might be the last node
            // If it isn't the last node, last.nextKey will properly set at start of new loop
            last.nextKey = undefined;
        }
        this._size = size;
        this.lastKey = last?.key ?? null;
    }
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this._size;
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
    getChildren(key) {
        let node = this.keyMap.get(key);
        return node?.childNodes || [];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"d8PNd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NumberParser", ()=>$eb76cf4feb040f77$export$cd11ab140839f11d);
var _numberFormatterMjs = require("./NumberFormatter.mjs");
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
 */ const $eb76cf4feb040f77$var$CURRENCY_SIGN_REGEX = new RegExp('^.*\\(.*\\).*$');
const $eb76cf4feb040f77$var$NUMBERING_SYSTEMS = [
    'latn',
    'arab',
    'hanidec',
    'deva',
    'beng',
    'fullwide'
];
class $eb76cf4feb040f77$export$cd11ab140839f11d {
    constructor(locale, options = {}){
        this.locale = locale;
        this.options = options;
    }
    /**
   * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
   */ parse(value) {
        return $eb76cf4feb040f77$var$getNumberParserImpl(this.locale, this.options, value).parse(value);
    }
    /**
   * Returns whether the given string could potentially be a valid number. This should be used to
   * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
   * of the minus/plus sign characters can be checked.
   */ isValidPartialNumber(value, minValue, maxValue) {
        return $eb76cf4feb040f77$var$getNumberParserImpl(this.locale, this.options, value).isValidPartialNumber(value, minValue, maxValue);
    }
    /**
   * Returns a numbering system for which the given string is valid in the current locale.
   * If no numbering system could be detected, the default numbering system for the current
   * locale is returned.
   */ getNumberingSystem(value) {
        return $eb76cf4feb040f77$var$getNumberParserImpl(this.locale, this.options, value).options.numberingSystem;
    }
}
const $eb76cf4feb040f77$var$numberParserCache = new Map();
function $eb76cf4feb040f77$var$getNumberParserImpl(locale, options, value) {
    // First try the default numbering system for the provided locale
    let defaultParser = $eb76cf4feb040f77$var$getCachedNumberParser(locale, options);
    // If that doesn't match, and the locale doesn't include a hard coded numbering system,
    // try each of the other supported numbering systems until we find one that matches.
    if (!locale.includes('-nu-') && !defaultParser.isValidPartialNumber(value)) {
        for (let numberingSystem of $eb76cf4feb040f77$var$NUMBERING_SYSTEMS)if (numberingSystem !== defaultParser.options.numberingSystem) {
            let parser = $eb76cf4feb040f77$var$getCachedNumberParser(locale + (locale.includes('-u-') ? '-nu-' : '-u-nu-') + numberingSystem, options);
            if (parser.isValidPartialNumber(value)) return parser;
        }
    }
    return defaultParser;
}
function $eb76cf4feb040f77$var$getCachedNumberParser(locale, options) {
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    let parser = $eb76cf4feb040f77$var$numberParserCache.get(cacheKey);
    if (!parser) {
        parser = new $eb76cf4feb040f77$var$NumberParserImpl(locale, options);
        $eb76cf4feb040f77$var$numberParserCache.set(cacheKey, parser);
    }
    return parser;
}
// The actual number parser implementation. Instances of this class are cached
// based on the locale, options, and detected numbering system.
class $eb76cf4feb040f77$var$NumberParserImpl {
    constructor(locale, options = {}){
        this.locale = locale;
        // see https://tc39.es/ecma402/#sec-setnfdigitoptions, when using roundingIncrement, the maximumFractionDigits and minimumFractionDigits must be equal
        // by default, they are 0 and 3 respectively, so we set them to 0 if neither are set
        if (options.roundingIncrement !== 1 && options.roundingIncrement != null) {
            if (options.maximumFractionDigits == null && options.minimumFractionDigits == null) {
                options.maximumFractionDigits = 0;
                options.minimumFractionDigits = 0;
            } else if (options.maximumFractionDigits == null) options.maximumFractionDigits = options.minimumFractionDigits;
            else if (options.minimumFractionDigits == null) options.minimumFractionDigits = options.maximumFractionDigits;
        // if both are specified, let the normal Range Error be thrown
        }
        this.formatter = new Intl.NumberFormat(locale, options);
        this.options = this.formatter.resolvedOptions();
        this.symbols = $eb76cf4feb040f77$var$getSymbols(locale, this.formatter, this.options, options);
        if (this.options.style === 'percent' && ((this.options.minimumFractionDigits ?? 0) > 18 || (this.options.maximumFractionDigits ?? 0) > 18)) console.warn('NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.');
    }
    parse(value) {
        let isGroupSymbolAllowed = this.formatter.resolvedOptions().useGrouping;
        // to parse the number, we need to remove anything that isn't actually part of the number, for example we want '-10.40' not '-10.40 USD'
        let fullySanitizedValue = this.sanitize(value);
        // Return NaN if there is a group symbol but useGrouping is false
        if (!isGroupSymbolAllowed && this.symbols.group && fullySanitizedValue.includes(this.symbols.group)) return NaN;
        else if (this.symbols.group) fullySanitizedValue = fullySanitizedValue.replaceAll(this.symbols.group, '');
        if (this.symbols.decimal) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.decimal, '.');
        if (this.symbols.minusSign) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.minusSign, '-');
        fullySanitizedValue = fullySanitizedValue.replace(this.symbols.numeral, this.symbols.index);
        if (this.options.style === 'percent') {
            // javascript is bad at dividing by 100 and maintaining the same significant figures, so perform it on the string before parsing
            let isNegative = fullySanitizedValue.indexOf('-');
            fullySanitizedValue = fullySanitizedValue.replace('-', '');
            fullySanitizedValue = fullySanitizedValue.replace('+', '');
            let index = fullySanitizedValue.indexOf('.');
            if (index === -1) index = fullySanitizedValue.length;
            fullySanitizedValue = fullySanitizedValue.replace('.', '');
            if (index - 2 === 0) fullySanitizedValue = `0.${fullySanitizedValue}`;
            else if (index - 2 === -1) fullySanitizedValue = `0.0${fullySanitizedValue}`;
            else if (index - 2 === -2) fullySanitizedValue = '0.00';
            else fullySanitizedValue = `${fullySanitizedValue.slice(0, index - 2)}.${fullySanitizedValue.slice(index - 2)}`;
            if (isNegative > -1) fullySanitizedValue = `-${fullySanitizedValue}`;
        }
        let newValue = fullySanitizedValue ? +fullySanitizedValue : NaN;
        if (isNaN(newValue)) return NaN;
        if (this.options.style === 'percent') {
            // extra step for rounding percents to what our formatter would output
            let options = {
                ...this.options,
                style: 'decimal',
                minimumFractionDigits: Math.min((this.options.minimumFractionDigits ?? 0) + 2, 20),
                maximumFractionDigits: Math.min((this.options.maximumFractionDigits ?? 0) + 2, 20)
            };
            return new $eb76cf4feb040f77$export$cd11ab140839f11d(this.locale, options).parse(new (0, _numberFormatterMjs.NumberFormatter)(this.locale, options).format(newValue));
        }
        // accounting will always be stripped to a positive number, so if it's accounting and has a () around everything, then we need to make it negative again
        if (this.options.currencySign === 'accounting' && $eb76cf4feb040f77$var$CURRENCY_SIGN_REGEX.test(value)) newValue = -1 * newValue;
        return newValue;
    }
    sanitize(value) {
        let isGroupSymbolAllowed = this.formatter.resolvedOptions().useGrouping;
        // If the value is only a unit and it matches one of the formatted numbers where the value is part of the unit and doesn't have any numerals, then
        // return the known value for that case.
        if (this.symbols.noNumeralUnits.length > 0 && this.symbols.noNumeralUnits.find((obj)=>obj.unit === value)) return this.symbols.noNumeralUnits.find((obj)=>obj.unit === value).value.toString();
        value = value.replace(this.symbols.literals, '');
        // Replace the ASCII minus sign with the minus sign used in the current locale
        // so that both are allowed in case the user's keyboard doesn't have the locale's minus sign.
        if (this.symbols.minusSign) value = value.replace('-', this.symbols.minusSign);
        // In arab numeral system, their decimal character is 1643, but most keyboards don't type that
        // instead they use the , (44) character or apparently the (1548) character.
        if (this.options.numberingSystem === 'arab') {
            if (this.symbols.decimal) {
                value = $eb76cf4feb040f77$var$replaceAll(value, ',', this.symbols.decimal);
                value = $eb76cf4feb040f77$var$replaceAll(value, String.fromCharCode(1548), this.symbols.decimal);
            }
            if (this.symbols.group && isGroupSymbolAllowed) value = $eb76cf4feb040f77$var$replaceAll(value, '.', this.symbols.group);
        }
        // In some locale styles, such as swiss currency, the group character can be a special single quote
        // that keyboards don't typically have. This expands the character to include the easier to type single quote.
        if (this.symbols.group === "\u2019" && value.includes("'") && isGroupSymbolAllowed) value = $eb76cf4feb040f77$var$replaceAll(value, "'", this.symbols.group);
        // On newer ICU versions, the special single quote has been normalized, so we need to backport.
        if (this.symbols.group === "'" && value.includes("\u2019") && isGroupSymbolAllowed) value = $eb76cf4feb040f77$var$replaceAll(value, "\u2019", this.symbols.group);
        // fr-FR group character is narrow non-breaking space, char code 8239 (U+202F), but that's not a key on the french keyboard,
        // so allow space and non-breaking space as a group char as well
        if (this.options.locale === 'fr-FR' && this.symbols.group && isGroupSymbolAllowed) {
            value = $eb76cf4feb040f77$var$replaceAll(value, ' ', this.symbols.group);
            value = $eb76cf4feb040f77$var$replaceAll(value, /\u00A0/g, this.symbols.group);
        }
        return value;
    }
    isValidPartialNumber(value, minValue = -Infinity, maxValue = Infinity) {
        let isGroupSymbolAllowed = this.formatter.resolvedOptions().useGrouping;
        value = this.sanitize(value);
        // Remove minus or plus sign, which must be at the start of the string.
        if (this.symbols.minusSign && value.startsWith(this.symbols.minusSign) && minValue < 0) value = value.slice(this.symbols.minusSign.length);
        else if (this.symbols.plusSign && value.startsWith(this.symbols.plusSign) && maxValue > 0) value = value.slice(this.symbols.plusSign.length);
        // Numbers that can't have any decimal values fail if a decimal character is typed
        if (this.symbols.decimal && value.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0) return false;
        // Remove numerals, groups, and decimals
        if (this.symbols.group && isGroupSymbolAllowed) value = $eb76cf4feb040f77$var$replaceAll(value, this.symbols.group, '');
        value = value.replace(this.symbols.numeral, '');
        if (this.symbols.decimal) value = value.replace(this.symbols.decimal, '');
        // The number is valid if there are no remaining characters
        return value.length === 0;
    }
}
const $eb76cf4feb040f77$var$nonLiteralParts = new Set([
    'decimal',
    'fraction',
    'integer',
    'minusSign',
    'plusSign',
    'group'
]);
// This list is derived from https://www.unicode.org/cldr/charts/49/supplemental/language_plural_rules.html#comparison and includes
// all unique numbers which we need to check in order to determine all the plural forms for a given locale.
// Run scripts/generateAllPlurals.mjs to generate this list.
const $eb76cf4feb040f77$var$pluralNumbers = [
    0,
    4,
    2,
    1,
    11,
    20,
    3,
    7,
    100,
    21,
    0.1,
    1.1
];
function $eb76cf4feb040f77$var$getSymbols(locale, formatter, intlOptions, originalOptions) {
    // formatter needs access to all decimal places in order to generate the correct literal strings for the plural set
    let symbolFormatter = new Intl.NumberFormat(locale, {
        ...intlOptions,
        // Resets so we get the full range of symbols
        minimumSignificantDigits: 1,
        maximumSignificantDigits: 21,
        roundingIncrement: 1,
        roundingPriority: 'auto',
        roundingMode: 'halfExpand',
        useGrouping: true
    });
    // Note: some locale's don't add a group symbol until there is a ten thousands place
    let allParts = symbolFormatter.formatToParts(-10000.111);
    let posAllParts = symbolFormatter.formatToParts(10000.111);
    let pluralParts = $eb76cf4feb040f77$var$pluralNumbers.map((n)=>symbolFormatter.formatToParts(n));
    // if the plural parts include a unit but no integer or fraction, then we need to add the unit to the special set
    let noNumeralUnits = pluralParts.map((p, i)=>{
        let unit = p.find((p)=>p.type === 'unit');
        if (unit && !p.some((p)=>p.type === 'integer' || p.type === 'fraction')) return {
            unit: unit.value,
            value: $eb76cf4feb040f77$var$pluralNumbers[i]
        };
        return null;
    }).filter((p)=>!!p);
    let minusSign = allParts.find((p)=>p.type === 'minusSign')?.value ?? '-';
    let plusSign = posAllParts.find((p)=>p.type === 'plusSign')?.value;
    // Safari does not support the signDisplay option, but our number parser polyfills it.
    // If no plus sign was returned, but the original options contained signDisplay, default to the '+' character.
    if (!plusSign && (originalOptions?.signDisplay === 'exceptZero' || originalOptions?.signDisplay === 'always')) plusSign = '+';
    // If maximumSignificantDigits is 1 (the minimum) then we won't get decimal characters out of the above formatters
    // Percent also defaults to 0 fractionDigits, so we need to make a new one that isn't percent to get an accurate decimal
    let decimalParts = new Intl.NumberFormat(locale, {
        ...intlOptions,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).formatToParts(0.001);
    let decimal = decimalParts.find((p)=>p.type === 'decimal')?.value;
    let group = allParts.find((p)=>p.type === 'group')?.value;
    // this set is also for a regex, it's all literals that might be in the string we want to eventually parse that
    // don't contribute to the numerical value
    let allPartsLiterals = allParts.filter((p)=>!$eb76cf4feb040f77$var$nonLiteralParts.has(p.type)).map((p)=>$eb76cf4feb040f77$var$escapeRegex(p.value));
    let pluralPartsLiterals = pluralParts.flatMap((p)=>p.filter((p)=>!$eb76cf4feb040f77$var$nonLiteralParts.has(p.type)).map((p)=>$eb76cf4feb040f77$var$escapeRegex(p.value)));
    let sortedLiterals = [
        ...new Set([
            ...allPartsLiterals,
            ...pluralPartsLiterals
        ])
    ].sort((a, b)=>b.length - a.length);
    // Match both whitespace and formatting characters
    let literals = sortedLiterals.length === 0 ? new RegExp('\\p{White_Space}|\\p{Cf}', 'gu') : new RegExp(`${sortedLiterals.join('|')}|\\p{White_Space}|\\p{Cf}`, 'gu');
    // These are for replacing non-latn characters with the latn equivalent
    let numerals = [
        ...new Intl.NumberFormat(intlOptions.locale, {
            useGrouping: false
        }).format(9876543210)
    ].reverse();
    let indexes = new Map(numerals.map((d, i)=>[
            d,
            i
        ]));
    let numeral = new RegExp(`[${numerals.join('')}]`, 'g');
    let index = (d)=>String(indexes.get(d));
    return {
        minusSign: minusSign,
        plusSign: plusSign,
        decimal: decimal,
        group: group,
        literals: literals,
        numeral: numeral,
        numerals: numerals,
        index: index,
        noNumeralUnits: noNumeralUnits
    };
}
function $eb76cf4feb040f77$var$replaceAll(str, find, replace) {
    if (str.replaceAll) return str.replaceAll(find, replace);
    return str.split(find).join(replace);
}
function $eb76cf4feb040f77$var$escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

},{"./NumberFormatter.mjs":"3OyUY","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

