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
})({"aTQex":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Example", ()=>Example);
var _jsxRuntime = require("preact/jsx-runtime");
var _textField = require("../src/TextField");
const meta = {
    component: (0, _textField.TextField),
    parameters: {
        layout: 'centered'
    },
    tags: [
        'autodocs'
    ],
    args: {
        placeholder: 'Enter your full name'
    }
};
exports.default = meta;
const Example = (args)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textField.TextField), {
        ...args
    });
Example.args = {
    label: 'Name'
};

},{"preact/jsx-runtime":"b2Fbn","../src/TextField":"fqgUg","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fqgUg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TextField", ()=>TextField);
parcelHelpers.export(exports, "TextArea", ()=>TextArea);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _form = require("./Form");
var _textFieldCss = require("./TextField.css");
'use client';
function TextField({ label, description, errorMessage, placeholder, inputRef, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.TextField), {
        ...props,
        children: [
            label && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _form.Label), {
                children: label
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Input), {
                ref: inputRef,
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
function TextArea({ label, description, errorMessage, placeholder, inputRef, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.TextField), {
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _form.Label), {
                children: label
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.TextArea), {
                ref: inputRef,
                className: "react-aria-TextArea inset",
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

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Form":"dn6GY","./TextField.css":"lYFla","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dn6GY":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","./Content.css":"gpu3J","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gpu3J":[function() {},{}],"lYFla":[function() {},{}],"5gQI0":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

