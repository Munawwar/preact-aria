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
})({"4s5U3":[function(require,module,exports,__globalThis) {
var _preact = require("preact");
var _hydrationComponentMjs = require("./hydration-component.mjs");
var _styleCss = require("./style.css");
const originalInput = document.querySelector('[data-testid="hydrated-input"]');
const originalId = originalInput?.id;
const originalOption = document.querySelector('[role=option]');
const originalSegment = document.querySelector('[role=spinbutton]');
(0, _preact.hydrate)((0, _preact.createElement)((0, _hydrationComponentMjs.HydrationExample), {}), document.getElementById('app'));
Object.assign(window, {
    __hydration: {
        retainedOption: originalOption === document.querySelector('[role=option]'),
        retainedSegment: originalSegment === document.querySelector('[role=spinbutton]'),
        retainedInput: originalInput === document.querySelector('[data-testid="hydrated-input"]'),
        retainedId: originalId === document.querySelector('[data-testid="hydrated-input"]')?.id
    }
});

},{"preact":"h65yd","./hydration-component.mjs":"jxHwc","./style.css":"9x8Uy"}],"jxHwc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HydrationExample", ()=>HydrationExample);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _indexJs = require("../dist/index.js");
var _date = require("@internationalized/date");
function HydrationExample() {
    const [value, setValue] = (0, _hooks.useState)('Server value');
    const [selected, setSelected] = (0, _hooks.useState)(new Set([
        'a'
    ]));
    const [action, setAction] = (0, _hooks.useState)('none');
    return (0, _preact.createElement)('main', {}, (0, _preact.createElement)('h1', {}, "Hydration \u2014 Preact 11"), (0, _preact.createElement)(_indexJs.TextField, {
        value,
        onChange: setValue
    }, (0, _preact.createElement)(_indexJs.Label, {}, 'Hydrated name'), (0, _preact.createElement)(_indexJs.Input, {
        'data-testid': 'hydrated-input'
    })), (0, _preact.createElement)(_indexJs.MenuTrigger, {}, (0, _preact.createElement)(_indexJs.Button, {}, 'Hydrated actions'), (0, _preact.createElement)(_indexJs.Popover, {}, (0, _preact.createElement)(_indexJs.Menu, {
        onAction: (key)=>setAction(String(key))
    }, (0, _preact.createElement)(_indexJs.MenuItem, {
        id: 'copy'
    }, 'Copy')))), (0, _preact.createElement)(_indexJs.ListBox, {
        'aria-label': 'Hydrated options',
        selectionMode: 'single',
        selectedKeys: selected,
        onSelectionChange: setSelected
    }, (0, _preact.createElement)(_indexJs.ListBoxItem, {
        id: 'a'
    }, 'Alpha'), (0, _preact.createElement)(_indexJs.ListBoxItem, {
        id: 'b'
    }, 'Beta')), (0, _preact.createElement)(_indexJs.DatePicker, {
        defaultValue: new (0, _date.CalendarDate)(2026, 10, 1)
    }, (0, _preact.createElement)(_indexJs.Label, {}, 'Hydrated date'), (0, _preact.createElement)(_indexJs.Group, {}, (0, _preact.createElement)(_indexJs.DateInput, {}, (segment)=>(0, _preact.createElement)(_indexJs.DateSegment, {
            segment
        })), (0, _preact.createElement)(_indexJs.Button, {}, 'Calendar'))), (0, _preact.createElement)('output', {
        'data-testid': 'result'
    }, `${value}; ${[
        ...selected
    ]}; ${action}`));
}

},{"preact":"h65yd","preact/hooks":"a768r","../dist/index.js":"dy6h5","@internationalized/date":"j8NRQ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9x8Uy":[function() {},{}]},["4s5U3"], "4s5U3", "parcelRequire037a", {})

