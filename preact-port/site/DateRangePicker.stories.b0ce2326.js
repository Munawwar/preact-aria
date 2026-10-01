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
})({"021AF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Example", ()=>Example);
var _jsxRuntime = require("preact/jsx-runtime");
var _dateRangePicker = require("../src/DateRangePicker");
const meta = {
    component: (0, _dateRangePicker.DateRangePicker),
    parameters: {
        layout: 'centered'
    },
    tags: [
        'autodocs'
    ]
};
exports.default = meta;
const Example = (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _dateRangePicker.DateRangePicker), {
        ...args
    });
Example.args = {
    label: 'Event date'
};

},{"preact/jsx-runtime":"b2Fbn","../src/DateRangePicker":"gZxX8","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gZxX8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DateRangePicker", ()=>DateRangePicker);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _dateField = require("./DateField");
var _form = require("./Form");
var _popover = require("./Popover");
var _rangeCalendar = require("./RangeCalendar");
var _lucideReact = require("lucide-react");
var _dateRangePickerCss = require("./DateRangePicker.css");
'use client';
function DateRangePicker({ label, description, errorMessage, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.DateRangePicker), {
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _form.Label), {
                children: label
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.Group), {
                className: "react-aria-Group inset",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "date-fields",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _dateField.DateInput), {
                                slot: "start",
                                children: (segment)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _dateField.DateSegment), {
                                        segment: segment
                                    })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                "aria-hidden": "true",
                                children: "\u2013"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _dateField.DateInput), {
                                slot: "end",
                                children: (segment)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _dateField.DateSegment), {
                                        segment: segment
                                    })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _form.FieldButton), {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.ChevronDown), {})
                    })
                ]
            }),
            description && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _form.Description), {
                children: description
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _form.FieldError), {
                children: errorMessage
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popover.Popover), {
                hideArrow: true,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _rangeCalendar.RangeCalendar), {})
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./DateField":"dZgIS","./Form":"dn6GY","./Popover":"lwcda","./RangeCalendar":"2mByB","lucide-react":[["ChevronDown","l8XHX","default"]],"./DateRangePicker.css":"ijc8Q","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dZgIS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DateField", ()=>DateField);
parcelHelpers.export(exports, "DateSegment", ()=>DateSegment);
parcelHelpers.export(exports, "DateInput", ()=>DateInput);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _form = require("./Form");
var _dateFieldCss = require("./DateField.css");
'use client';
function DateField({ label, description, errorMessage, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.DateField), {
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _form.Label), {
                children: label
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(DateInput, {
                children: (segment)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(DateSegment, {
                        segment: segment
                    })
            }),
            description && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _form.Description), {
                children: description
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _form.FieldError), {
                children: errorMessage
            })
        ]
    });
}
function DateSegment(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.DateSegment), {
        ...props
    });
}
function DateInput(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.DateInput), {
        ...props,
        className: "react-aria-DateInput inset"
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Form":"dn6GY","./DateField.css":"4fS8m","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dn6GY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Form", ()=>Form);
parcelHelpers.export(exports, "Label", ()=>Label);
parcelHelpers.export(exports, "FieldError", ()=>FieldError);
parcelHelpers.export(exports, "Description", ()=>Description);
parcelHelpers.export(exports, "FieldButton", ()=>FieldButton);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _formCss = require("./Form.css");
var _content = require("./Content");
'use client';
function Form(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Form), {
        ...props
    });
}
function Label(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Label), {
        ...props
    });
}
function FieldError(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.FieldError), {
        ...props
    });
}
function Description(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _content.Text), {
        slot: "description",
        className: "field-description",
        ...props
    });
}
function FieldButton(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
        ...props,
        className: "field-Button"
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Form.css":"3weo6","./Content":"11SAa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3weo6":[function() {},{}],"11SAa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Heading", ()=>Heading);
parcelHelpers.export(exports, "Text", ()=>Text);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _contentCss = require("./Content.css");
function Heading(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Heading), {
        ...props
    });
}
function Text(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Text), {
        ...props
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Content.css":"gpu3J","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gpu3J":[function() {},{}],"4fS8m":[function() {},{}],"lwcda":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Popover", ()=>Popover);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _popoverCss = require("./Popover.css");
'use client';
function Popover({ children, hideArrow, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Popover), {
        ...props,
        className: (0, _clsxDefault.default)('react-aria-Popover', props.className),
        children: ({ trigger })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    !hideArrow && trigger !== 'MenuTrigger' && trigger !== 'SubmenuTrigger' && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.OverlayArrow), {
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

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","clsx":"5gQI0","./Popover.css":"cXbjk","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5gQI0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clsx", ()=>clsx);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) {
        if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
        } else for(f in e)e[f] && (n && (n += " "), n += f);
    }
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
exports.default = clsx;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cXbjk":[function() {},{}],"2mByB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RangeCalendar", ()=>RangeCalendar);
parcelHelpers.export(exports, "CalendarGrid", ()=>(0, _calendar.CalendarGrid));
parcelHelpers.export(exports, "CalendarCell", ()=>CalendarCell);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _button = require("./Button");
var _lucideReact = require("lucide-react");
var _calendar = require("./Calendar");
var _rangeCalendarCss = require("./RangeCalendar.css");
'use client';
function RangeCalendar({ errorMessage, ...props }) {
    let months = props.visibleDuration?.months || 1;
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.RangeCalendar), {
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                className: "months",
                children: Array.from({
                    length: months
                }, (_, i)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "month",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("header", {
                                children: [
                                    i === 0 && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _button.Button), {
                                        slot: "previous",
                                        variant: "quiet",
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.ChevronLeft), {})
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.CalendarHeading), {
                                        offset: {
                                            months: i
                                        }
                                    }),
                                    i === months - 1 && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _button.Button), {
                                        slot: "next",
                                        variant: "quiet",
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.ChevronRight), {})
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _calendar.CalendarGrid), {
                                offset: {
                                    months: i
                                },
                                children: (date)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(CalendarCell, {
                                        date: date
                                    })
                            })
                        ]
                    }, i))
            }),
            errorMessage && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Text), {
                slot: "errorMessage",
                children: errorMessage
            })
        ]
    });
}
function CalendarCell(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.CalendarCell), {
        ...props,
        children: (0, _indexJs.composeRenderProps)(props.children, (children, { defaultChildren, isHovered, isPressed, isSelectionStart, isSelectionEnd, isDisabled })=>/*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                className: "button-base",
                "data-variant": "quiet",
                "data-hovered": isHovered || undefined,
                "data-pressed": isPressed || undefined,
                "data-selected": isSelectionStart || isSelectionEnd || undefined,
                "data-disabled": isDisabled || undefined,
                children: children || defaultChildren
            }))
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Button":"akb2g","lucide-react":[["ChevronLeft","i0Xp4","default"],["ChevronRight","cLIr3","default"]],"./Calendar":"8W8uL","./RangeCalendar.css":"aOaWb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"akb2g":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Button", ()=>Button);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _progressCircle = require("./ProgressCircle");
var _buttonCss = require("./Button.css");
'use client';
function Button(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
        ...props,
        className: "react-aria-Button button-base",
        "data-variant": props.variant || 'primary',
        children: (0, _indexJs.composeRenderProps)(props.children, (children, { isPending })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
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

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./ProgressCircle":"6UR4P","./Button.css":"3agqr","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6UR4P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProgressCircle", ()=>ProgressCircle);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
'use client';
function ProgressCircle(props) {
    // SVG strokes are centered, so subtract half the stroke width from the radius to create an inner stroke.
    let strokeWidth = 4;
    let radius = `calc(50% - ${strokeWidth / 2}px)`;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.ProgressBar), {
        ...props,
        style: (0, _indexJs.composeRenderProps)(props.style, (style)=>({
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

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3agqr":[function() {},{}],"i0Xp4":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>ChevronLeft);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
];
const ChevronLeft = (0, _createLucideIconJsDefault.default)("chevron-left", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"i3cDK":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createLucideIcon);
var _react = require("react");
var _utilsJs = require("./shared/src/utils.js");
var _iconJs = require("./Icon.js");
var _iconJsDefault = parcelHelpers.interopDefault(_iconJs);
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, _react.forwardRef)(({ className, ...props }, ref)=>(0, _react.createElement)((0, _iconJsDefault.default), {
            ref,
            iconNode,
            className: (0, _utilsJs.mergeClasses)(`lucide-${(0, _utilsJs.toKebabCase)((0, _utilsJs.toPascalCase)(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, _utilsJs.toPascalCase)(iconName);
    return Component;
};

},{"react":"gOP0N","./shared/src/utils.js":"cFr0o","./Icon.js":"buQhf","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gOP0N":[function(require,module,exports,__globalThis) {
// Parcel aliases upstream React imports here; Preact stays external in the library.
// Read members through the default object to avoid Parcel's external re-export bug.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Children", ()=>Children);
parcelHelpers.export(exports, "cloneElement", ()=>cloneElement);
parcelHelpers.export(exports, "createContext", ()=>createContext);
parcelHelpers.export(exports, "createElement", ()=>createElement);
parcelHelpers.export(exports, "createPortal", ()=>createPortal);
parcelHelpers.export(exports, "forwardRef", ()=>forwardRef);
parcelHelpers.export(exports, "Fragment", ()=>Fragment);
parcelHelpers.export(exports, "isValidElement", ()=>isValidElement);
parcelHelpers.export(exports, "memo", ()=>memo);
parcelHelpers.export(exports, "flushSync", ()=>flushSync);
parcelHelpers.export(exports, "useId", ()=>useId);
parcelHelpers.export(exports, "useInsertionEffect", ()=>useInsertionEffect);
parcelHelpers.export(exports, "useDebugValue", ()=>useDebugValue);
parcelHelpers.export(exports, "Component", ()=>Component);
parcelHelpers.export(exports, "PureComponent", ()=>PureComponent);
parcelHelpers.export(exports, "Suspense", ()=>Suspense);
parcelHelpers.export(exports, "useCallback", ()=>useCallback);
parcelHelpers.export(exports, "useContext", ()=>useContext);
parcelHelpers.export(exports, "useEffect", ()=>useEffect);
parcelHelpers.export(exports, "useMemo", ()=>useMemo);
parcelHelpers.export(exports, "useImperativeHandle", ()=>useImperativeHandle);
parcelHelpers.export(exports, "useLayoutEffect", ()=>useLayoutEffect);
parcelHelpers.export(exports, "useReducer", ()=>useReducer);
parcelHelpers.export(exports, "useRef", ()=>useRef);
parcelHelpers.export(exports, "useState", ()=>useState);
parcelHelpers.export(exports, "useSyncExternalStore", ()=>useSyncExternalStore);
parcelHelpers.export(exports, "version", ()=>version);
var _compat = require("preact/compat");
var _compatDefault = parcelHelpers.interopDefault(_compat);
const React = {
    ...(0, _compatDefault.default)
};
exports.default = React;
const { Children, cloneElement, createContext, createElement, createPortal, forwardRef, Fragment, isValidElement, memo, flushSync, useId, useInsertionEffect, useDebugValue, Component, PureComponent, Suspense, useCallback, useContext, useEffect, useMemo, useImperativeHandle, useLayoutEffect, useReducer, useRef, useState, useSyncExternalStore, version } = React;

},{"preact/compat":"8RhID","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cFr0o":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasA11yProp", ()=>hasA11yProp);
parcelHelpers.export(exports, "mergeClasses", ()=>mergeClasses);
parcelHelpers.export(exports, "toCamelCase", ()=>toCamelCase);
parcelHelpers.export(exports, "toKebabCase", ()=>toKebabCase);
parcelHelpers.export(exports, "toPascalCase", ()=>toPascalCase);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"buQhf":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Icon);
var _react = require("react");
var _defaultAttributesJs = require("./defaultAttributes.js");
var _defaultAttributesJsDefault = parcelHelpers.interopDefault(_defaultAttributesJs);
var _utilsJs = require("./shared/src/utils.js");
const Icon = (0, _react.forwardRef)(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, _react.createElement)("svg", {
        ref,
        ...(0, _defaultAttributesJsDefault.default),
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, _utilsJs.mergeClasses)("lucide", className),
        ...!children && !(0, _utilsJs.hasA11yProp)(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, _react.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));

},{"react":"gOP0N","./defaultAttributes.js":"cIkT5","./shared/src/utils.js":"cFr0o","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cIkT5":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>defaultAttributes);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cLIr3":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>ChevronRight);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
const ChevronRight = (0, _createLucideIconJsDefault.default)("chevron-right", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8W8uL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Calendar", ()=>Calendar);
parcelHelpers.export(exports, "CalendarCell", ()=>CalendarCell);
parcelHelpers.export(exports, "CalendarGrid", ()=>CalendarGrid);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _content = require("./Content");
var _lucideReact = require("lucide-react");
var _button = require("./Button");
var _calendarCss = require("./Calendar.css");
'use client';
function Calendar({ errorMessage, ...props }) {
    let months = props.visibleDuration?.months || 1;
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.Calendar), {
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                className: "months",
                children: Array.from({
                    length: months
                }, (_, i)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "month",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("header", {
                                children: [
                                    i === 0 && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _button.Button), {
                                        slot: "previous",
                                        variant: "quiet",
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.ChevronLeft), {})
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.CalendarHeading), {
                                        offset: {
                                            months: i
                                        }
                                    }),
                                    i === months - 1 && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _button.Button), {
                                        slot: "next",
                                        variant: "quiet",
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.ChevronRight), {})
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(CalendarGrid, {
                                offset: {
                                    months: i
                                },
                                children: (date)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(CalendarCell, {
                                        date: date
                                    })
                            })
                        ]
                    }, i))
            }),
            errorMessage && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _content.Text), {
                slot: "errorMessage",
                children: errorMessage
            })
        ]
    });
}
function CalendarCell(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.CalendarCell), {
        ...props,
        className: "react-aria-CalendarCell button-base",
        "data-variant": "quiet"
    });
}
function CalendarGrid(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.CalendarGrid), {
        ...props
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Content":"11SAa","lucide-react":[["ChevronLeft","i0Xp4","default"],["ChevronRight","cLIr3","default"]],"./Button":"akb2g","./Calendar.css":"2FA29","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2FA29":[function() {},{}],"aOaWb":[function() {},{}],"l8XHX":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>ChevronDown);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, _createLucideIconJsDefault.default)("chevron-down", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ijc8Q":[function() {},{}]},[], null, "parcelRequire037a", {})

