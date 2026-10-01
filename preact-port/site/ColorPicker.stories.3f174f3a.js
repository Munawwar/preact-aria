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
})({"bZpLm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Example", ()=>Example);
var _jsxRuntime = require("preact/jsx-runtime");
var _colorPicker = require("../src/ColorPicker");
const meta = {
    component: (0, _colorPicker.ColorPicker),
    parameters: {
        layout: 'centered'
    },
    tags: [
        'autodocs'
    ]
};
exports.default = meta;
const Example = (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorPicker.ColorPicker), {
        ...args
    });
Example.args = {
    label: 'Fill color',
    defaultValue: '#f00'
};

},{"preact/jsx-runtime":"b2Fbn","../src/ColorPicker":"hB2U1","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hB2U1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorPicker", ()=>ColorPicker);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _dialog = require("./Dialog");
var _colorSwatch = require("./ColorSwatch");
var _colorSlider = require("./ColorSlider");
var _colorArea = require("./ColorArea");
var _colorField = require("./ColorField");
var _popover = require("./Popover");
var _colorPickerCss = require("./ColorPicker.css");
'use client';
function ColorPicker({ label, children, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.ColorPicker), {
        ...props,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _dialog.DialogTrigger), {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.Button), {
                    className: "color-picker",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorSwatch.ColorSwatch), {}),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                            children: label
                        })
                    ]
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popover.Popover), {
                    hideArrow: true,
                    placement: "bottom start",
                    className: "color-picker-dialog",
                    children: children || /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorArea.ColorArea), {
                                colorSpace: "hsb",
                                xChannel: "saturation",
                                yChannel: "brightness"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorSlider.ColorSlider), {
                                colorSpace: "hsb",
                                channel: "hue"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorField.ColorField), {
                                label: "Hex"
                            })
                        ]
                    })
                })
            ]
        })
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Dialog":"d7fRz","./ColorSwatch":"9sDCX","./ColorSlider":"aKP5f","./ColorArea":"hEl2f","./ColorField":"e5zTT","./Popover":"lwcda","./ColorPicker.css":"drJn5","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"d7fRz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Dialog", ()=>Dialog);
parcelHelpers.export(exports, "DialogTrigger", ()=>DialogTrigger);
parcelHelpers.export(exports, "Heading", ()=>(0, _indexJs.Heading));
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _dialogCss = require("./Dialog.css");
'use client';
function Dialog(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Dialog), {
        ...props
    });
}
function DialogTrigger(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.DialogTrigger), {
        ...props
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Dialog.css":"7DiIx","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7DiIx":[function() {},{}],"9sDCX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorSwatch", ()=>ColorSwatch);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _colorSwatchCss = require("./ColorSwatch.css");
'use client';
function ColorSwatch(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.ColorSwatch), {
        ...props,
        style: ({ color })=>({
                background: `linear-gradient(${color}, ${color}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
            })
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./ColorSwatch.css":"bTuUV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bTuUV":[function() {},{}],"aKP5f":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorSlider", ()=>ColorSlider);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _form = require("./Form");
var _colorThumb = require("./ColorThumb");
var _colorSliderCss = require("./ColorSlider.css");
'use client';
function ColorSlider({ label, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.ColorSlider), {
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _form.Label), {
                children: label
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.SliderOutput), {}),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.SliderTrack), {
                style: ({ defaultStyle })=>({
                        background: `${defaultStyle.background},
            repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
                    }),
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorThumb.ColorThumb), {})
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Form":"dn6GY","./ColorThumb":"lh6Wn","./ColorSlider.css":"7ue5G","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dn6GY":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Content.css":"gpu3J","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gpu3J":[function() {},{}],"lh6Wn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorThumb", ()=>ColorThumb);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _colorThumbCss = require("./ColorThumb.css");
function ColorThumb(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.ColorThumb), {
        ...props
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./ColorThumb.css":"77gLp","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"77gLp":[function() {},{}],"7ue5G":[function() {},{}],"hEl2f":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorArea", ()=>ColorArea);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _colorThumb = require("./ColorThumb");
var _colorAreaCss = require("./ColorArea.css");
'use client';
function ColorArea(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.ColorArea), {
        ...props,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _colorThumb.ColorThumb), {})
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./ColorThumb":"lh6Wn","./ColorArea.css":"bNPCY","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bNPCY":[function() {},{}],"e5zTT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorField", ()=>ColorField);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _form = require("./Form");
var _colorFieldCss = require("./ColorField.css");
'use client';
function ColorField({ label, description, errorMessage, placeholder, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.ColorField), {
        ...props,
        children: [
            label && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _form.Label), {
                children: label
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Input), {
                className: "react-aria-Input inset",
                placeholder: placeholder
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

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Form":"dn6GY","./ColorField.css":"5ApVa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5ApVa":[function() {},{}],"lwcda":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cXbjk":[function() {},{}],"drJn5":[function() {},{}]},[], null, "parcelRequire037a", {})

