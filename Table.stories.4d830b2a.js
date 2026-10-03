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
})({"9r4sD":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Example", ()=>Example);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _tableTsx = require("../src/Table.tsx");
const meta = {
    component: (0, _tableTsx.Table),
    parameters: {
        layout: 'centered'
    },
    tags: [
        'autodocs'
    ]
};
exports.default = meta;
let rows = [
    {
        id: 1,
        name: 'Games',
        date: '6/7/2020',
        type: 'File folder'
    },
    {
        id: 2,
        name: 'Program Files',
        date: '4/7/2021',
        type: 'File folder'
    },
    {
        id: 3,
        name: 'bootmgr',
        date: '11/20/2010',
        type: 'System file'
    },
    {
        id: 4,
        name: 'log.txt',
        date: '1/18/2016',
        type: 'Text Document'
    },
    {
        id: 5,
        name: 'Proposal.ppt',
        date: '6/18/2022',
        type: 'PowerPoint file'
    },
    {
        id: 6,
        name: 'Taxes.pdf',
        date: '12/6/2023',
        type: 'PDF Document'
    },
    {
        id: 7,
        name: 'Photos',
        date: '8/2/2021',
        type: 'File folder'
    },
    {
        id: 8,
        name: 'Documents',
        date: '3/18/2023',
        type: 'File folder'
    },
    {
        id: 9,
        name: 'Budget.xls',
        date: '1/6/2024',
        type: 'Excel file'
    }
];
const Example = (args)=>{
    let [sortDescriptor, setSortDescriptor] = (0, _react.useState)({
        column: 'name',
        direction: 'ascending'
    });
    let items = (0, _react.useMemo)(()=>{
        let items = rows.slice()// @ts-ignore
        .sort((a, b)=>a[sortDescriptor.column].localeCompare(b[sortDescriptor.column]));
        if (sortDescriptor.direction === 'descending') items.reverse();
        return items;
    }, [
        sortDescriptor
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableTsx.Table), {
        "aria-label": "Files",
        ...args,
        sortDescriptor: sortDescriptor,
        onSortChange: setSortDescriptor,
        className: "w-100 max-w-full",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableTsx.TableHeader), {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Column), {
                        id: "name",
                        isRowHeader: true,
                        allowsSorting: true,
                        children: "Name"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Column), {
                        id: "type",
                        allowsSorting: true,
                        children: "Type"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Column), {
                        id: "date",
                        allowsSorting: true,
                        children: "Date Modified"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.TableBody), {
                items: items,
                children: (row)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableTsx.Row), {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                children: row.name
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                children: row.type
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTsx.Cell), {
                                children: row.date
                            })
                        ]
                    })
            })
        ]
    });
};
Example.args = {
    onRowAction: null,
    onCellAction: null,
    selectionMode: 'multiple'
};

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../src/Table.tsx":"8iesr","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8iesr":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Table", ()=>Table);
parcelHelpers.export(exports, "Column", ()=>Column);
parcelHelpers.export(exports, "TableHeader", ()=>TableHeader);
parcelHelpers.export(exports, "TableBody", ()=>TableBody);
parcelHelpers.export(exports, "TableFooter", ()=>TableFooter);
parcelHelpers.export(exports, "Row", ()=>Row);
parcelHelpers.export(exports, "Cell", ()=>Cell);
var _jsxRuntime = require("preact/jsx-runtime");
var _lucideReact = require("lucide-react");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _tableTs = require("../../../../../../vendor/react-aria-components/exports/Table.ts");
var _groupTs = require("../../../../../../vendor/react-aria-components/exports/Group.ts");
var _composeRenderPropsTs = require("../../../../../../vendor/react-aria-components/exports/composeRenderProps.ts");
var _tailwindMerge = require("tailwind-merge");
var _tailwindVariants = require("tailwind-variants");
var _checkboxTsx = require("./Checkbox.tsx");
var _utilsTs = require("./utils.ts");
'use client';
function Table(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTs.ResizableTableContainer), {
        onScroll: props.onScroll,
        className: (0, _tailwindMerge.twMerge)('w-full max-h-[320px] overflow-auto scroll-pt-[2.281rem] relative bg-white dark:bg-neutral-900 box-border border border-neutral-300 dark:border-neutral-700 rounded-lg font-sans', props.className),
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTs.Table), {
            ...props,
            className: "border-separate border-spacing-0 box-border overflow-hidden has-[>[data-empty]]:h-full"
        })
    });
}
const columnStyles = (0, _tailwindVariants.tv)({
    extend: (0, _utilsTs.focusRing),
    base: 'px-2 h-5 box-border flex-1 flex gap-1 items-center overflow-hidden'
});
const resizerStyles = (0, _tailwindVariants.tv)({
    extend: (0, _utilsTs.focusRing),
    base: 'w-px px-[8px] translate-x-[8px] box-content py-1 h-5 bg-clip-content bg-neutral-400 dark:bg-neutral-500 forced-colors:bg-[ButtonBorder] cursor-col-resize rounded-xs resizing:bg-blue-600 forced-colors:resizing:bg-[Highlight] resizing:w-[2px] resizing:pl-[7px] -outline-offset-2'
});
function Column(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTs.Column), {
        ...props,
        className: (0, _utilsTs.composeTailwindRenderProps)(props.className, 'box-border h-1 [&:hover]:z-20 focus-within:z-20 text-start text-sm font-semibold text-neutral-700 dark:text-neutral-300 cursor-default'),
        children: (0, _composeRenderPropsTs.composeRenderProps)(props.children, (children, { allowsSorting, sortDirection })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _groupTs.Group), {
                        role: "presentation",
                        tabIndex: -1,
                        className: columnStyles,
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: "truncate",
                                children: children
                            }),
                            allowsSorting && /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: `w-4 h-4 flex items-center justify-center transition ${sortDirection === 'descending' ? 'rotate-180' : ''}`,
                                children: sortDirection && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.ArrowUp), {
                                    "aria-hidden": true,
                                    className: "w-4 h-4 text-neutral-500 dark:text-neutral-400 forced-colors:text-[ButtonText]"
                                })
                            })
                        ]
                    }),
                    !props.width && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTs.ColumnResizer), {
                        className: resizerStyles
                    })
                ]
            }))
    });
}
function TableHeader(props) {
    let { selectionBehavior, selectionMode, allowsDragging } = (0, _tableTs.useTableOptions)();
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableTs.TableHeader), {
        ...props,
        className: (0, _utilsTs.composeTailwindRenderProps)(props.className, 'sticky top-0 z-10 bg-neutral-100/60 dark:bg-neutral-700/60 backdrop-blur-md supports-[-moz-appearance:none]:bg-neutral-100 dark:supports-[-moz-appearance:none]:bg-neutral-700 forced-colors:bg-[Canvas] rounded-t-lg border-b border-b-neutral-200 dark:border-b-neutral-700'),
        children: [
            allowsDragging && /*#__PURE__*/ (0, _jsxRuntime.jsx)(Column, {}),
            selectionBehavior === 'toggle' && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTs.Column), {
                width: 36,
                minWidth: 36,
                className: "box-border p-2 text-sm font-semibold cursor-default text-start",
                children: selectionMode === 'multiple' && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _checkboxTsx.Checkbox), {
                    slot: "selection"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTs.Collection), {
                items: props.columns,
                children: props.children
            })
        ]
    });
}
function TableBody(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTs.TableBody), {
        ...props,
        className: "empty:italic empty:text-center empty:text-sm"
    });
}
function TableFooter(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTs.TableFooter), {
        ...props,
        className: "bg-neutral-200 dark:bg-neutral-700 font-bold"
    });
}
const rowStyles = (0, _tailwindVariants.tv)({
    extend: (0, _utilsTs.focusRing),
    base: 'group/row relative cursor-default select-none -outline-offset-2 text-neutral-900 disabled:text-neutral-300 dark:text-neutral-200 dark:disabled:text-neutral-600 text-sm hover:bg-neutral-100 pressed:bg-neutral-100 dark:hover:bg-neutral-800 dark:pressed:bg-neutral-800 selected:bg-blue-100 selected:hover:bg-blue-200 selected:pressed:bg-blue-200 dark:selected:bg-blue-700/30 dark:selected:hover:bg-blue-700/40 dark:selected:pressed:bg-blue-700/40 last:rounded-b-lg'
});
function Row({ id, columns, children, ...otherProps }) {
    let { selectionBehavior, allowsDragging } = (0, _tableTs.useTableOptions)();
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tableTs.Row), {
        id: id,
        ...otherProps,
        className: rowStyles,
        children: [
            allowsDragging && /*#__PURE__*/ (0, _jsxRuntime.jsx)(Cell, {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTs.Button), {
                    slot: "drag",
                    children: "\u2261"
                })
            }),
            selectionBehavior === 'toggle' && /*#__PURE__*/ (0, _jsxRuntime.jsx)(Cell, {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _checkboxTsx.Checkbox), {
                    slot: "selection"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTs.Collection), {
                items: columns,
                children: children
            })
        ]
    });
}
const cellStyles = (0, _tailwindVariants.tv)({
    extend: (0, _utilsTs.focusRing),
    base: 'box-border [-webkit-tap-highlight-color:transparent] border-b border-b-neutral-200 dark:border-b-neutral-700 group-last/row:border-b-0 [--selected-border:var(--color-blue-200)] dark:[--selected-border:var(--color-blue-900)] group-selected/row:border-(--selected-border) [:is(:has(+[data-selected])_*)]:border-(--selected-border) p-2 truncate -outline-offset-2 group-last/row:first:rounded-bl-lg group-last/row:last:rounded-br-lg'
});
const expandButton = (0, _tailwindVariants.tv)({
    extend: (0, _utilsTs.focusRing),
    base: 'border-0 p-0 pr-1 bg-transparent shrink-0 align-middle cursor-default [-webkit-tap-highlight-color:transparent]',
    variants: {
        isDisabled: {
            true: 'text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText]'
        }
    }
});
const chevron = (0, _tailwindVariants.tv)({
    base: 'w-4.5 h-4.5 text-neutral-500 dark:text-neutral-400 transition-transform duration-200 ease-in-out',
    variants: {
        isExpanded: {
            true: 'transform rotate-90'
        },
        isDisabled: {
            true: 'text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText]'
        }
    }
});
function Cell(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTs.Cell), {
        ...props,
        className: cellStyles,
        style: ({ hasChildItems, isTreeColumn, level })=>({
                paddingInlineStart: isTreeColumn ? 4 + (hasChildItems ? 0 : 20) + (level - 1) * 16 : undefined
            }),
        children: (0, _composeRenderPropsTs.composeRenderProps)(props.children, (children, { hasChildItems, isTreeColumn, isExpanded, isDisabled })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    hasChildItems && isTreeColumn && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tableTs.Button), {
                        slot: "chevron",
                        className: expandButton({
                            isDisabled
                        }),
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.ChevronRight), {
                            "aria-hidden": true,
                            className: chevron({
                                isExpanded,
                                isDisabled
                            })
                        })
                    }),
                    children
                ]
            }))
    });
}

},{"preact/jsx-runtime":"b2Fbn","lucide-react":[["ArrowUp","j4rZZ","default"],["ChevronRight","cLIr3","default"]],"react":"gOP0N","../../../../../../vendor/react-aria-components/exports/Table.ts":[["Button","enBVm"],["Cell","1eqrw"],["Column","1eqrw"],["ColumnResizer","1eqrw"],["ResizableTableContainer","1eqrw"],["Row","1eqrw"],["Table","1eqrw"],["TableBody","1eqrw"],["TableFooter","1eqrw"],["TableHeader","1eqrw"],["useTableOptions","1eqrw"],["Collection","kFD1B"]],"../../../../../../vendor/react-aria-components/exports/Group.ts":"2mugT","../../../../../../vendor/react-aria-components/exports/composeRenderProps.ts":"jtWJJ","tailwind-merge":"iets0","tailwind-variants":"1lG2r","./Checkbox.tsx":"y1Jj4","./utils.ts":"iPmB8","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j4rZZ":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>ArrowUp);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "m5 12 7-7 7 7",
            key: "hav0vg"
        }
    ],
    [
        "path",
        {
            d: "M12 19V5",
            key: "x0mq9r"
        }
    ]
];
const ArrowUp = (0, _createLucideIconJsDefault.default)("arrow-up", __iconNode);

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

},{"react":"gOP0N","./shared/src/utils.js":"cFr0o","./Icon.js":"buQhf","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cFr0o":[function(require,module,exports,__globalThis) {
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

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"enBVm":[function(require,module,exports,__globalThis) {
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

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","react":"gOP0N","../utils/useGlobalListeners":"jsdt1","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2mugT":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/useHover":"2yLrj","react-aria/mergeProps":"jycxS","react":"gOP0N","react-aria/useFocusRing":"bP7um","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"y1Jj4":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Checkbox", ()=>Checkbox);
var _jsxRuntime = require("preact/jsx-runtime");
var _lucideReact = require("lucide-react");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _checkboxTs = require("../../../../../../vendor/react-aria-components/exports/Checkbox.ts");
var _composeRenderPropsTs = require("../../../../../../vendor/react-aria-components/exports/composeRenderProps.ts");
var _tailwindVariants = require("tailwind-variants");
var _utilsTs = require("./utils.ts");
var _fieldTsx = require("./Field.tsx");
'use client';
const checkboxStyles = (0, _tailwindVariants.tv)({
    base: 'flex gap-2 items-center group font-sans text-sm transition relative [-webkit-tap-highlight-color:transparent]',
    variants: {
        isDisabled: {
            false: 'text-neutral-800 dark:text-neutral-200',
            true: 'text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText]'
        }
    }
});
const boxStyles = (0, _tailwindVariants.tv)({
    extend: (0, _utilsTs.focusRing),
    base: 'w-4.5 h-4.5 box-border shrink-0 rounded-sm flex items-center justify-center border transition',
    variants: {
        isSelected: {
            false: 'bg-white dark:bg-neutral-900 border-(--color) [--color:var(--color-neutral-400)] dark:[--color:var(--color-neutral-400)] group-pressed:[--color:var(--color-neutral-500)] dark:group-pressed:[--color:var(--color-neutral-300)]',
            true: 'bg-(--color) border-(--color) [--color:var(--color-neutral-700)] group-pressed:[--color:var(--color-neutral-800)] dark:[--color:var(--color-neutral-300)] dark:group-pressed:[--color:var(--color-neutral-200)] forced-colors:[--color:Highlight]!'
        },
        isInvalid: {
            true: '[--color:var(--color-red-700)] dark:[--color:var(--color-red-600)] forced-colors:[--color:Mark]! group-pressed:[--color:var(--color-red-800)] dark:group-pressed:[--color:var(--color-red-700)]'
        },
        isDisabled: {
            true: '[--color:var(--color-neutral-200)] dark:[--color:var(--color-neutral-700)] forced-colors:[--color:GrayText]!'
        }
    }
});
const iconStyles = 'w-3.5 h-3.5 text-white group-disabled:text-neutral-400 dark:text-neutral-900 dark:group-disabled:text-neutral-600 forced-colors:text-[HighlightText] pointer-events-none';
function Checkbox(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _checkboxTs.CheckboxField), {
        ...props,
        className: "flex flex-col gap-1 group",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _checkboxTs.CheckboxButton), {
                className: (0, _composeRenderPropsTs.composeRenderProps)(props.className, (className, renderProps)=>checkboxStyles({
                        ...renderProps,
                        className
                    })),
                children: (0, _composeRenderPropsTs.composeRenderProps)(props.children, (children, { isSelected, isIndeterminate, ...renderProps })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                className: boxStyles({
                                    isSelected: isSelected || isIndeterminate,
                                    ...renderProps
                                }),
                                children: isIndeterminate ? /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.Minus), {
                                    "aria-hidden": true,
                                    className: iconStyles
                                }) : isSelected ? /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.Check), {
                                    "aria-hidden": true,
                                    className: iconStyles
                                }) : null
                            }),
                            children
                        ]
                    }))
            }),
            props.description && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _fieldTsx.Description), {
                className: "ms-6.5",
                children: props.description
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _fieldTsx.FieldError), {
                className: "ms-6.5",
                children: props.errorMessage
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","lucide-react":[["Check","hRXwG","default"],["Minus","6SswO","default"]],"react":"gOP0N","../../../../../../vendor/react-aria-components/exports/Checkbox.ts":"kjgFU","../../../../../../vendor/react-aria-components/exports/composeRenderProps.ts":"jtWJJ","tailwind-variants":"1lG2r","./utils.ts":"iPmB8","./Field.tsx":"f0kbz","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hRXwG":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Check);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
];
const Check = (0, _createLucideIconJsDefault.default)("check", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6SswO":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Minus);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ]
];
const Minus = (0, _createLucideIconJsDefault.default)("minus", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kjgFU":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "CheckboxContext", ()=>CheckboxContext);
parcelHelpers.export(exports, "CheckboxFieldContext", ()=>CheckboxFieldContext);
parcelHelpers.export(exports, "CheckboxGroupContext", ()=>CheckboxGroupContext);
parcelHelpers.export(exports, "CheckboxGroupStateContext", ()=>CheckboxGroupStateContext);
parcelHelpers.export(exports, "CheckboxGroup", ()=>CheckboxGroup);
parcelHelpers.export(exports, "CheckboxField", ()=>CheckboxField);
parcelHelpers.export(exports, "Checkbox", ()=>Checkbox);
parcelHelpers.export(exports, "CheckboxButton", ()=>CheckboxButton);
var _jsxRuntime = require("preact/jsx-runtime");
var _useCheckboxGroup = require("react-aria/useCheckboxGroup");
var _useCheckbox = require("react-aria/useCheckbox");
var _useCheckboxGroupState = require("react-stately/useCheckboxGroupState");
var _utils = require("./utils");
var _fieldError = require("./FieldError");
var _filterDOMProps = require("react-aria/filterDOMProps");
var _form = require("./Form");
var _label = require("./Label");
var _mergeProps = require("react-aria/mergeProps");
var _mergeRefs = require("react-aria/mergeRefs");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _text = require("./Text");
var _useFocusRing = require("react-aria/useFocusRing");
var _useHover = require("react-aria/useHover");
var _useObjectRef = require("react-aria/useObjectRef");
var _useToggleState = require("react-stately/useToggleState");
var _visuallyHidden = require("react-aria/VisuallyHidden");
const CheckboxContext = /*#__PURE__*/ (0, _react.createContext)(null);
const CheckboxFieldContext = /*#__PURE__*/ (0, _react.createContext)(null);
const CheckboxGroupContext = /*#__PURE__*/ (0, _react.createContext)(null);
const CheckboxGroupStateContext = /*#__PURE__*/ (0, _react.createContext)(null);
const CheckboxGroup = /*#__PURE__*/ (0, _react.forwardRef)(function CheckboxGroup(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, CheckboxGroupContext);
    let { validationBehavior: formValidationBehavior } = (0, _utils.useSlottedContext)((0, _form.FormContext)) || {};
    let validationBehavior = props.validationBehavior ?? formValidationBehavior ?? 'native';
    let state = (0, _useCheckboxGroupState.useCheckboxGroupState)({
        ...props,
        validationBehavior
    });
    let [labelRef, label] = (0, _utils.useSlot)(!props['aria-label'] && !props['aria-labelledby']);
    let { groupProps, labelProps, descriptionProps, errorMessageProps, ...validation } = (0, _useCheckboxGroup.useCheckboxGroup)({
        ...props,
        label,
        validationBehavior
    }, state);
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        values: {
            isDisabled: state.isDisabled,
            isReadOnly: state.isReadOnly,
            isRequired: props.isRequired || false,
            isInvalid: state.isInvalid,
            state
        },
        defaultClassName: 'react-aria-CheckboxGroup'
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps, groupProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-readonly": state.isReadOnly || undefined,
        "data-required": props.isRequired || undefined,
        "data-invalid": state.isInvalid || undefined,
        "data-disabled": props.isDisabled || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
            values: [
                [
                    CheckboxGroupStateContext,
                    state
                ],
                [
                    (0, _label.LabelContext),
                    {
                        ...labelProps,
                        ref: labelRef,
                        elementType: 'span'
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
            children: renderProps.children
        })
    });
});
const InternalCheckboxContext = /*#__PURE__*/ (0, _react.createContext)(null);
const CheckboxField = /*#__PURE__*/ (0, _react.forwardRef)(function Checkbox(props, ref) {
    let { inputRef: userProvidedInputRef = null, ...otherProps } = props;
    [props, ref] = (0, _utils.useContextProps)(otherProps, ref, CheckboxFieldContext);
    let groupState = (0, _react.useContext)(CheckboxGroupStateContext);
    let [aria, inputRef] = useCheckboxAria(props, userProvidedInputRef);
    let { descriptionProps, errorMessageProps, isSelected, isDisabled, isReadOnly, isInvalid, validationDetails, validationErrors } = aria;
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-CheckboxField',
        values: {
            isSelected,
            isIndeterminate: props.isIndeterminate || false,
            isDisabled,
            isReadOnly,
            isInvalid,
            isRequired: props.isRequired || false
        }
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).div, {
        ...(0, _mergeProps.mergeProps)(DOMProps, renderProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-selected": isSelected || undefined,
        "data-indeterminate": props.isIndeterminate || undefined,
        "data-disabled": isDisabled || undefined,
        "data-readonly": isReadOnly || undefined,
        "data-invalid": isInvalid || undefined,
        "data-required": props.isRequired || undefined,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.Provider), {
            values: [
                [
                    InternalCheckboxContext,
                    {
                        ...aria,
                        inputRef,
                        defaultClassName: 'react-aria-CheckboxButton',
                        isIndeterminate: props.isIndeterminate,
                        isRequired: props.isRequired
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
                // In a CheckboxGroup, validation is handled at the group level instead of repeated on each checkbox.
                [
                    (0, _fieldError.FieldErrorContext),
                    groupState ? null : {
                        isInvalid,
                        validationDetails,
                        validationErrors
                    }
                ]
            ],
            children: renderProps.children
        })
    });
});
function useCheckboxAria(props, userProvidedInputRef) {
    let { validationBehavior: formValidationBehavior } = (0, _utils.useSlottedContext)((0, _form.FormContext)) || {};
    let validationBehavior = props.validationBehavior ?? formValidationBehavior ?? 'native';
    let groupState = (0, _react.useContext)(CheckboxGroupStateContext);
    let inputRef = (0, _useObjectRef.useObjectRef)((0, _react.useMemo)(()=>(0, _mergeRefs.mergeRefs)(userProvidedInputRef, props.inputRef !== undefined ? props.inputRef : null), [
        userProvidedInputRef,
        props.inputRef
    ]));
    let checkboxProps = {
        ...(0, _utils.removeDataAttributes)(props),
        children: typeof props.children === 'function' ? true : props.children,
        value: props.value,
        validationBehavior
    };
    let aria = groupState ? (0, _useCheckboxGroup.useCheckboxGroupItem)(checkboxProps, groupState, inputRef) : (0, _useCheckbox.useCheckbox)(checkboxProps, (0, _useToggleState.useToggleState)(props), inputRef);
    return [
        aria,
        inputRef
    ];
}
const Checkbox = /*#__PURE__*/ (0, _react.forwardRef)(function Checkbox(props, ref) {
    let { inputRef: userProvidedInputRef = null, ...otherProps } = props;
    [props, ref] = (0, _utils.useContextProps)(otherProps, ref, CheckboxContext);
    let [aria, inputRef] = useCheckboxAria(props, userProvidedInputRef);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(InternalCheckboxContext.Provider, {
        value: {
            ...aria,
            inputRef,
            defaultClassName: 'react-aria-Checkbox',
            isIndeterminate: props.isIndeterminate,
            isRequired: props.isRequired
        },
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(CheckboxButton, {
            ...props,
            ref: ref
        })
    });
});
const CheckboxButton = /*#__PURE__*/ (0, _react.forwardRef)(function CheckboxButton(props, ref) {
    let { labelProps, inputProps, isSelected, isDisabled, isReadOnly, isPressed, isInvalid, inputRef, defaultClassName, isIndeterminate, isRequired } = (0, _react.useContext)(InternalCheckboxContext);
    let { isFocused, isFocusVisible, focusProps } = (0, _useFocusRing.useFocusRing)();
    let isInteractionDisabled = isDisabled || isReadOnly;
    let { hoverProps, isHovered } = (0, _useHover.useHover)({
        ...props,
        isDisabled: isInteractionDisabled
    });
    let renderProps = (0, _utils.useRenderProps)({
        ...props,
        defaultClassName,
        values: {
            isSelected,
            isIndeterminate: isIndeterminate || false,
            isPressed,
            isHovered,
            isFocused,
            isFocusVisible,
            isDisabled,
            isReadOnly,
            isInvalid,
            isRequired: isRequired || false
        }
    });
    let DOMProps = (0, _filterDOMProps.filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _utils.dom).label, {
        ...(0, _mergeProps.mergeProps)(DOMProps, labelProps, hoverProps, renderProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-selected": isSelected || undefined,
        "data-indeterminate": isIndeterminate || undefined,
        "data-pressed": isPressed || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-readonly": isReadOnly || undefined,
        "data-invalid": isInvalid || undefined,
        "data-required": isRequired || undefined,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _visuallyHidden.VisuallyHidden), {
                elementType: "span",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                    ...(0, _mergeProps.mergeProps)(inputProps, focusProps),
                    ref: inputRef
                })
            }),
            renderProps.children
        ]
    });
});

},{"preact/jsx-runtime":"b2Fbn","react-aria/useCheckboxGroup":[["useCheckboxGroup","PtMLN"],["useCheckboxGroupItem","ieFcf"]],"react-aria/useCheckbox":"826Ax","react-stately/useCheckboxGroupState":"6359O","./utils":"jtWJJ","./FieldError":"5KSCU","react-aria/filterDOMProps":"h4XHF","./Form":"aEFv9","./Label":"eI7Ae","react-aria/mergeProps":"jycxS","react-aria/mergeRefs":"jspQh","react":"gOP0N","./Text":"cfMV9","react-aria/useFocusRing":"bP7um","react-aria/useHover":"2yLrj","react-aria/useObjectRef":"ec0NJ","react-stately/useToggleState":"aQP1x","react-aria/VisuallyHidden":"cMf28","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"PtMLN":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a checkbox group component.
 * Checkbox groups allow users to select multiple items from a list of options.
 *
 * @param props - Props for the checkbox group.
 * @param state - State for the checkbox group, as returned by `useCheckboxGroupState`.
 */ parcelHelpers.export(exports, "useCheckboxGroup", ()=>useCheckboxGroup);
var _utils = require("./utils");
var _filterDOMProps = require("../utils/filterDOMProps");
var _mergeProps = require("../utils/mergeProps");
var _useField = require("../label/useField");
var _useFocusWithin = require("../interactions/useFocusWithin");
function useCheckboxGroup(props, state) {
    let { isDisabled, name, form, validationBehavior = 'aria' } = props;
    let { isInvalid, validationErrors, validationDetails } = state.displayValidation;
    let { labelProps, fieldProps, descriptionProps, errorMessageProps } = (0, _useField.useField)({
        ...props,
        // Checkbox group is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span',
        isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    (0, _utils.checkboxGroupData).set(state, {
        name,
        form,
        descriptionId: descriptionProps.id,
        errorMessageId: errorMessageProps.id,
        validationBehavior
    });
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    let { focusWithinProps } = (0, _useFocusWithin.useFocusWithin)({
        onBlurWithin: props.onBlur,
        onFocusWithin: props.onFocus,
        onFocusWithinChange: props.onFocusChange
    });
    return {
        groupProps: (0, _mergeProps.mergeProps)(domProps, {
            role: 'group',
            'aria-disabled': isDisabled || undefined,
            ...fieldProps,
            ...focusWithinProps
        }),
        labelProps,
        descriptionProps,
        errorMessageProps,
        isInvalid,
        validationErrors,
        validationDetails
    };
}

},{"./utils":"38XNN","../utils/filterDOMProps":"h4XHF","../utils/mergeProps":"jycxS","../label/useField":"5Oeu9","../interactions/useFocusWithin":"bkSQo","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"38XNN":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "checkboxGroupData", ()=>checkboxGroupData);
const checkboxGroupData = new WeakMap();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5Oeu9":[function(require,module,exports,__globalThis) {
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

},{"./useLabel":"kMUgu","../utils/mergeProps":"jycxS","../utils/useId":"fQAcb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ieFcf":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a checkbox component contained within
 * a checkbox group. Checkbox groups allow users to select multiple items from a list of options.
 *
 * @param props - Props for the checkbox.
 * @param state - State for the checkbox, as returned by `useCheckboxGroupState`.
 * @param inputRef - A ref for the HTML input element.
 */ parcelHelpers.export(exports, "useCheckboxGroupItem", ()=>useCheckboxGroupItem);
var _useCheckbox = require("./useCheckbox");
var _utils = require("./utils");
var _useFormValidationState = require("react-stately/private/form/useFormValidationState");
var _react = require("react");
var _useToggleState = require("react-stately/useToggleState");
function useCheckboxGroupItem(props, state, inputRef) {
    const toggleState = (0, _useToggleState.useToggleState)({
        isReadOnly: props.isReadOnly || state.isReadOnly,
        isSelected: state.isSelected(props.value),
        defaultSelected: state.defaultValue.includes(props.value),
        onChange (isSelected) {
            if (isSelected) state.addValue(props.value);
            else state.removeValue(props.value);
            if (props.onChange) props.onChange(isSelected);
        }
    });
    let { name, form, descriptionId, errorMessageId, validationBehavior } = (0, _utils.checkboxGroupData).get(state);
    validationBehavior = props.validationBehavior ?? validationBehavior;
    // Local validation for this checkbox.
    let { realtimeValidation } = (0, _useFormValidationState.useFormValidationState)({
        ...props,
        value: toggleState.isSelected,
        // Server validation is handled at the group level.
        name: undefined,
        validationBehavior: 'aria'
    });
    // Update the checkbox group state when realtime validation changes.
    let nativeValidation = (0, _react.useRef)((0, _useFormValidationState.DEFAULT_VALIDATION_RESULT));
    let updateValidation = ()=>{
        state.setInvalid(props.value, realtimeValidation.isInvalid ? realtimeValidation : nativeValidation.current);
    };
    (0, _react.useEffect)(updateValidation);
    // Combine group and checkbox level validation.
    let combinedRealtimeValidation = state.realtimeValidation.isInvalid ? state.realtimeValidation : realtimeValidation;
    let displayValidation = validationBehavior === 'native' ? state.displayValidation : combinedRealtimeValidation;
    let res = (0, _useCheckbox.useCheckbox)({
        ...props,
        isReadOnly: props.isReadOnly || state.isReadOnly,
        isDisabled: props.isDisabled || state.isDisabled,
        name: props.name || name,
        form: props.form || form,
        isRequired: props.isRequired ?? state.isRequired,
        validationBehavior,
        [(0, _useFormValidationState.privateValidationStateProp)]: {
            realtimeValidation: combinedRealtimeValidation,
            displayValidation,
            resetValidation: state.resetValidation,
            commitValidation: state.commitValidation,
            updateValidation (v) {
                nativeValidation.current = v;
                updateValidation();
            }
        }
    }, toggleState, inputRef);
    return {
        ...res,
        inputProps: {
            ...res.inputProps,
            'aria-describedby': [
                res.inputProps['aria-describedby'],
                state.isInvalid ? errorMessageId : null,
                descriptionId
            ].filter(Boolean).join(' ') || undefined
        }
    };
}

},{"./useCheckbox":"826Ax","./utils":"38XNN","react-stately/private/form/useFormValidationState":"491YW","react":"gOP0N","react-stately/useToggleState":"aQP1x","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"826Ax":[function(require,module,exports,__globalThis) {
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
 * Provides the behavior and accessibility implementation for a checkbox component.
 * Checkboxes allow users to select multiple items from a list of individual items, or
 * to mark one individual item as selected.
 *
 * @param props - Props for the checkbox.
 * @param state - State for the checkbox, as returned by `useToggleState`.
 * @param inputRef - A ref for the HTML input element.
 */ parcelHelpers.export(exports, "useCheckbox", ()=>useCheckbox);
var _useToggle = require("../toggle/useToggle");
var _react = require("react");
var _mergeProps = require("../utils/mergeProps");
function useCheckbox(props, state, inputRef) {
    let { labelProps, inputProps, descriptionProps, errorMessageProps, isSelected, isPressed, isDisabled, isReadOnly, isInvalid, validationErrors, validationDetails } = (0, _useToggle.useToggle)(props, state, inputRef);
    let { isIndeterminate } = props;
    (0, _react.useEffect)(()=>{
        // indeterminate is a property, but it can only be set via javascript
        // https://css-tricks.com/indeterminate-checkboxes/
        if (inputRef.current) inputRef.current.indeterminate = !!isIndeterminate;
    });
    return {
        labelProps: (0, _mergeProps.mergeProps)(labelProps, (0, _react.useMemo)(()=>({
                // Prevent label from being focused when mouse down on it.
                // Note, this does not prevent the input from being focused in the `click` event.
                onMouseDown: (e)=>e.preventDefault()
            }), [])),
        inputProps,
        descriptionProps,
        errorMessageProps,
        isSelected,
        isPressed,
        isDisabled,
        isReadOnly,
        isInvalid,
        validationErrors,
        validationDetails
    };
}

},{"../toggle/useToggle":"eUwXJ","react":"gOP0N","../utils/mergeProps":"jycxS","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eUwXJ":[function(require,module,exports,__globalThis) {
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
 * Handles interactions for toggle elements, e.g. Checkboxes and Switches.
 */ parcelHelpers.export(exports, "useToggle", ()=>useToggle);
var _react = require("react");
var _filterDOMProps = require("../utils/filterDOMProps");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _mergeProps = require("../utils/mergeProps");
var _useFormValidationState = require("react-stately/private/form/useFormValidationState");
var _useFocusable = require("../interactions/useFocusable");
var _useFormReset = require("../utils/useFormReset");
var _useFormValidation = require("../form/useFormValidation");
var _usePress = require("../interactions/usePress");
var _useSlot = require("../utils/useSlot");
function useToggle(props, state, ref) {
    let { isDisabled = false, isReadOnly = false, value, name, form, children, isRequired, validationBehavior = 'aria', 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, 'aria-describedby': ariaDescribedby, onPressStart, onPressEnd, onPressChange, onPress, onPressUp, onClick } = props;
    // Create validation state here because it doesn't make sense to add to general useToggleState.
    let validationState = (0, _useFormValidationState.useFormValidationState)({
        ...props,
        value: state.isSelected
    });
    let { isInvalid, validationErrors, validationDetails } = validationState.displayValidation;
    (0, _useFormValidation.useFormValidation)(props, validationState, ref);
    let onChange = (e)=>{
        // since we spread props on label, onChange will end up there as well as in here.
        // so we have to stop propagation at the lowest level that we care about
        e.stopPropagation();
        state.setSelected((0, _domfunctions.getEventTarget)(e).checked);
    };
    let hasChildren = children != null;
    let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;
    !hasChildren && hasAriaLabel;
    // Handle press state for keyboard interactions and cases where labelProps is not used.
    let { pressProps, isPressed } = (0, _usePress.usePress)({
        onPressStart,
        onPressEnd,
        onPressChange,
        onPress,
        onPressUp,
        onClick,
        isDisabled
    });
    // Handle press state on the label.
    let [isLabelPressed, setLabelPressed] = (0, _react.useState)(false);
    let { pressProps: labelProps } = (0, _usePress.usePress)({
        onPressStart (e) {
            // Keyboard interactions are handled directly on the input.
            if (e.pointerType === 'keyboard' || e.pointerType === 'virtual') {
                e.continuePropagation();
                return;
            }
            onPressStart?.(e);
            onPressChange?.(true);
            setLabelPressed(true);
        },
        onPressEnd (e) {
            // Keyboard interactions are handled directly on the input.
            if (e.pointerType === 'keyboard' || e.pointerType === 'virtual') {
                e.continuePropagation();
                return;
            }
            onPressEnd?.(e);
            onPressChange?.(false);
            setLabelPressed(false);
        },
        onPressUp (e) {
            if (e.pointerType === 'keyboard' || e.pointerType === 'virtual') {
                e.continuePropagation();
                return;
            }
            onPressUp?.(e);
        },
        onClick,
        onPress (e) {
            if (e.pointerType === 'keyboard' || e.pointerType === 'virtual') {
                e.continuePropagation();
                return;
            }
            onPress?.(e);
            state.toggle();
            ref.current?.focus();
            // @ts-expect-error
            let { [(0, _useFormValidationState.privateValidationStateProp)]: groupValidationState } = props;
            // oxlint-disable-next-line react/react-compiler
            let { commitValidation } = groupValidationState ? groupValidationState : validationState;
            commitValidation();
        },
        isDisabled: isDisabled || isReadOnly
    });
    let { focusableProps } = (0, _useFocusable.useFocusable)(props, ref);
    let interactions = (0, _mergeProps.mergeProps)(pressProps, focusableProps);
    let domProps = (0, _filterDOMProps.filterDOMProps)(props, {
        labelable: true
    });
    (0, _useFormReset.useFormReset)(ref, state.defaultSelected, state.setSelected);
    // Copied from useField because we don't want the label behavior that provides.
    let descriptionProps = (0, _useSlot.useSlotId2)();
    let errorMessageProps = (0, _useSlot.useSlotId2)();
    return {
        labelProps: (0, _mergeProps.mergeProps)(labelProps, {
            onClick: (e)=>e.preventDefault()
        }),
        inputProps: (0, _mergeProps.mergeProps)(domProps, {
            checked: state.isSelected,
            'aria-required': isRequired && validationBehavior === 'aria' || undefined,
            required: isRequired && validationBehavior === 'native',
            'aria-invalid': isInvalid || props.validationState === 'invalid' || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-controls': props['aria-controls'],
            'aria-readonly': isReadOnly || undefined,
            'aria-describedby': [
                descriptionProps.id,
                errorMessageProps.id,
                ariaDescribedby
            ].filter(Boolean).join(' ') || undefined,
            onChange,
            disabled: isDisabled,
            ...value == null ? {} : {
                value
            },
            name,
            form,
            type: 'checkbox',
            ...interactions
        }),
        descriptionProps,
        errorMessageProps,
        isSelected: state.isSelected,
        isPressed: isPressed || isLabelPressed,
        isDisabled,
        isReadOnly,
        isInvalid: isInvalid || props.validationState === 'invalid',
        validationErrors,
        validationDetails
    };
}

},{"react":"gOP0N","../utils/filterDOMProps":"h4XHF","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/mergeProps":"jycxS","react-stately/private/form/useFormValidationState":"491YW","../interactions/useFocusable":"6IFKj","../utils/useFormReset":"iDQvZ","../form/useFormValidation":"kdUj8","../interactions/usePress":"3S2KR","../utils/useSlot":"jo4XI","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"491YW":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iDQvZ":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useFormReset", ()=>useFormReset);
var _react = require("react");
var _useEffectEvent = require("./useEffectEvent");
function useFormReset(ref, initialValue, onReset) {
    let handleReset = (0, _useEffectEvent.useEffectEvent)((e)=>{
        if (onReset && !e.defaultPrevented) onReset(initialValue);
    });
    (0, _react.useEffect)(()=>{
        let form = ref?.current?.form;
        // 'reset' does not compose across shadow DOM boundaries, but this listener is intentionally
        // scoped to this specific form element (not a global target), so shadow root propagation does
        // not apply here.
        // oxlint-disable-next-line rsp-rules/no-non-composing-event-listener
        form?.addEventListener('reset', handleReset);
        return ()=>{
            form?.removeEventListener('reset', handleReset);
        };
    }, [
        ref
    ]);
}

},{"react":"gOP0N","./useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"grBNM":[function(require,module,exports,__globalThis) {
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

},{"react":"gOP0N","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kdUj8":[function(require,module,exports,__globalThis) {
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

},{"../utils/shadowdom/DOMFunctions":"8kfpz","../interactions/useFocusVisible":"aBfUW","react":"gOP0N","../utils/useEffectEvent":"grBNM","../utils/useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jo4XI":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "useSlot", ()=>useSlot);
parcelHelpers.export(exports, "useSlotId2", ()=>useSlotId2);
var _react = require("react");
var _useId = require("./useId");
var _useLayoutEffect = require("./useLayoutEffect");
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
function useSlotId2(initialState = true) {
    let id = (0, _useId.useId)();
    let [ref, hasSlot] = useSlot(initialState);
    return {
        id: hasSlot ? id : undefined,
        ref
    };
}

},{"react":"gOP0N","./useId":"fQAcb","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aQP1x":[function(require,module,exports,__globalThis) {
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
 * Provides state management for toggle components like checkboxes and switches.
 */ parcelHelpers.export(exports, "useToggleState", ()=>useToggleState);
var _react = require("react");
var _useControlledState = require("../utils/useControlledState");
function useToggleState(props = {}) {
    let { isReadOnly } = props;
    // have to provide an empty function so useControlledState doesn't throw a fit
    // can't use useControlledState's prop calling because we need the event object from the change
    let [isSelected, setSelected] = (0, _useControlledState.useControlledState)(props.isSelected, props.defaultSelected || false, props.onChange);
    let [initialValue] = (0, _react.useState)(isSelected);
    function updateSelected(value) {
        if (!isReadOnly) setSelected(value);
    }
    function toggleState() {
        if (!isReadOnly) setSelected(!isSelected);
    }
    return {
        isSelected,
        defaultSelected: props.defaultSelected ?? initialValue,
        setSelected: updateSelected,
        toggle: toggleState
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

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6359O":[function(require,module,exports,__globalThis) {
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
 * Provides state management for a checkbox group component. Provides a name for the group,
 * and manages selection and focus state.
 */ parcelHelpers.export(exports, "useCheckboxGroupState", ()=>useCheckboxGroupState);
var _useFormValidationState = require("../form/useFormValidationState");
var _useControlledState = require("../utils/useControlledState");
var _react = require("react");
function useCheckboxGroupState(props = {}) {
    let [selectedValues, setValue] = (0, _useControlledState.useControlledState)(props.value, props.defaultValue || [], props.onChange);
    let [initialValues] = (0, _react.useState)(selectedValues);
    let isRequired = !!props.isRequired && selectedValues.length === 0;
    let invalidValues = (0, _react.useRef)(new Map());
    let validation = (0, _useFormValidationState.useFormValidationState)({
        ...props,
        value: selectedValues
    });
    let isInvalid = validation.displayValidation.isInvalid;
    const state = {
        ...validation,
        value: selectedValues,
        defaultValue: props.defaultValue ?? initialValues,
        setValue (value) {
            if (props.isReadOnly || props.isDisabled) return;
            setValue(value);
        },
        isDisabled: props.isDisabled || false,
        isReadOnly: props.isReadOnly || false,
        isSelected (value) {
            return selectedValues.includes(value);
        },
        addValue (value) {
            if (props.isReadOnly || props.isDisabled) return;
            setValue((selectedValues)=>{
                if (!selectedValues.includes(value)) return selectedValues.concat(value);
                return selectedValues;
            });
        },
        removeValue (value) {
            if (props.isReadOnly || props.isDisabled) return;
            if (selectedValues.includes(value)) setValue(selectedValues.filter((existingValue)=>existingValue !== value));
        },
        toggleValue (value) {
            if (props.isReadOnly || props.isDisabled) return;
            if (selectedValues.includes(value)) setValue(selectedValues.filter((existingValue)=>existingValue !== value));
            else setValue(selectedValues.concat(value));
        },
        setInvalid (value, v) {
            let s = new Map(invalidValues.current);
            if (v.isInvalid) s.set(value, v);
            else s.delete(value);
            invalidValues.current = s;
            validation.updateValidation((0, _useFormValidationState.mergeValidation)(...s.values()));
        },
        validationState: props.validationState ?? (isInvalid ? 'invalid' : null),
        isInvalid,
        isRequired
    };
    return state;
}

},{"../form/useFormValidationState":"491YW","../utils/useControlledState":"8yNBD","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5KSCU":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/private/collections/Hidden":"iPJX7","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aEFv9":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2023 Adobe. All rights reserved.
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
parcelHelpers.export(exports, "FormContext", ()=>FormContext);
parcelHelpers.export(exports, "Form", ()=>Form);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _useFormValidationState = require("react-stately/private/form/useFormValidationState");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const FormContext = /*#__PURE__*/ (0, _react.createContext)(null);
const Form = /*#__PURE__*/ (0, _react.forwardRef)(function Form(props, ref) {
    [props, ref] = (0, _utils.useContextProps)(props, ref, FormContext);
    let { validationErrors, validationBehavior = 'native', children, className, ...domProps } = props;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _utils.dom).form, {
        noValidate: validationBehavior !== 'native',
        ...domProps,
        ref: ref,
        className: className || 'react-aria-Form',
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(FormContext.Provider, {
            value: {
                ...props,
                validationBehavior
            },
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _useFormValidationState.FormValidationContext).Provider, {
                value: validationErrors ?? {},
                children: children
            })
        })
    });
});

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-stately/private/form/useFormValidationState":"491YW","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cMf28":[function(require,module,exports,__globalThis) {
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

},{"../utils/mergeProps":"jycxS","react":"gOP0N","../interactions/useFocusWithin":"bkSQo","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iPmB8":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "focusRing", ()=>focusRing);
parcelHelpers.export(exports, "composeTailwindRenderProps", ()=>composeTailwindRenderProps);
var _composeRenderPropsTs = require("../../../../../../vendor/react-aria-components/exports/composeRenderProps.ts");
var _tailwindMerge = require("tailwind-merge");
var _tailwindVariants = require("tailwind-variants");
const focusRing = (0, _tailwindVariants.tv)({
    base: 'outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2',
    variants: {
        isFocusVisible: {
            false: 'outline-0',
            true: 'outline-2'
        }
    }
});
function composeTailwindRenderProps(className, tw) {
    return (0, _composeRenderPropsTs.composeRenderProps)(className, (className)=>(0, _tailwindMerge.twMerge)(tw, className));
}

},{"../../../../../../vendor/react-aria-components/exports/composeRenderProps.ts":"jtWJJ","tailwind-merge":"iets0","tailwind-variants":"1lG2r","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"f0kbz":[function(require,module,exports,__globalThis) {
// Adapted for Preact Aria: standalone module paths. Original notices retained.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Label", ()=>Label);
parcelHelpers.export(exports, "Description", ()=>Description);
parcelHelpers.export(exports, "FieldError", ()=>FieldError);
parcelHelpers.export(exports, "fieldBorderStyles", ()=>fieldBorderStyles);
parcelHelpers.export(exports, "fieldGroupStyles", ()=>fieldGroupStyles);
parcelHelpers.export(exports, "FieldGroup", ()=>FieldGroup);
parcelHelpers.export(exports, "Input", ()=>Input);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _fieldErrorTs = require("../../../../../../vendor/react-aria-components/exports/FieldError.ts");
var _groupTs = require("../../../../../../vendor/react-aria-components/exports/Group.ts");
var _inputTs = require("../../../../../../vendor/react-aria-components/exports/Input.ts");
var _labelTs = require("../../../../../../vendor/react-aria-components/exports/Label.ts");
var _textTs = require("../../../../../../vendor/react-aria-components/exports/Text.ts");
var _composeRenderPropsTs = require("../../../../../../vendor/react-aria-components/exports/composeRenderProps.ts");
var _tailwindMerge = require("tailwind-merge");
var _tailwindVariants = require("tailwind-variants");
var _utilsTs = require("./utils.ts");
'use client';
function Label(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labelTs.Label), {
        ...props,
        className: (0, _tailwindMerge.twMerge)('font-sans text-sm text-neutral-600 dark:text-neutral-300 font-medium cursor-default w-fit', props.className)
    });
}
function Description(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textTs.Text), {
        ...props,
        slot: "description",
        className: (0, _tailwindMerge.twMerge)('text-xs text-neutral-600 dark:text-neutral-400 group-disabled:text-neutral-200 dark:group-disabled:text-neutral-700 contain-inline-size', props.className)
    });
}
function FieldError(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _fieldErrorTs.FieldError), {
        ...props,
        className: (0, _utilsTs.composeTailwindRenderProps)(props.className, 'text-xs text-red-600 contain-inline-size forced-colors:text-[Mark]')
    });
}
const fieldBorderStyles = (0, _tailwindVariants.tv)({
    base: 'transition',
    variants: {
        isFocusWithin: {
            false: 'border-neutral-300 hover:border-neutral-400 dark:border-neutral-600 dark:hover:border-neutral-500 forced-colors:border-[ButtonBorder]',
            true: 'border-neutral-600 dark:border-neutral-300 forced-colors:border-[Highlight]'
        },
        isInvalid: {
            true: 'border-red-600 dark:border-red-600 forced-colors:border-[Mark]'
        },
        isDisabled: {
            true: 'border-neutral-200 dark:border-neutral-700 forced-colors:border-[GrayText]'
        }
    }
});
const fieldGroupStyles = (0, _tailwindVariants.tv)({
    extend: (0, _utilsTs.focusRing),
    base: 'group flex items-center h-9 box-border bg-white dark:bg-neutral-900 forced-colors:bg-[Field] border rounded-lg overflow-hidden transition',
    variants: fieldBorderStyles.variants
});
function FieldGroup(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _groupTs.Group), {
        ...props,
        className: (0, _composeRenderPropsTs.composeRenderProps)(props.className, (className, renderProps)=>fieldGroupStyles({
                ...renderProps,
                className
            }))
    });
}
function Input(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _inputTs.Input), {
        ...props,
        className: (0, _utilsTs.composeTailwindRenderProps)(props.className, 'px-3 py-0 min-h-9 flex-1 min-w-0 border-0 outline outline-0 bg-white dark:bg-neutral-900 font-sans text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-600 dark:placeholder:text-neutral-400 disabled:text-neutral-200 dark:disabled:text-neutral-600 disabled:placeholder:text-neutral-200 dark:disabled:placeholder:text-neutral-600 [-webkit-tap-highlight-color:transparent]')
    });
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../../../../vendor/react-aria-components/exports/FieldError.ts":"5KSCU","../../../../../../vendor/react-aria-components/exports/Group.ts":"2mugT","../../../../../../vendor/react-aria-components/exports/Input.ts":"BUyo9","../../../../../../vendor/react-aria-components/exports/Label.ts":"eI7Ae","../../../../../../vendor/react-aria-components/exports/Text.ts":"cfMV9","../../../../../../vendor/react-aria-components/exports/composeRenderProps.ts":"jtWJJ","tailwind-merge":"iets0","tailwind-variants":"1lG2r","./utils.ts":"iPmB8","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"BUyo9":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-aria/private/collections/Hidden":"iPJX7","react-aria/mergeProps":"jycxS","react":"gOP0N","react-aria/useFocusRing":"bP7um","react-aria/useHover":"2yLrj","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5dXIN":[function(require,module,exports,__globalThis) {
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

},{"./isScrollable":"2UC33","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2UC33":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"avf8K":[function(require,module,exports,__globalThis) {
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

},{"./domHelpers":"cYkFa","react":"gOP0N","./useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hxzwH":[function(require,module,exports,__globalThis) {
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

},{"./utils":"jwa0D","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ghoIN":[function(require,module,exports,__globalThis) {
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

},{"./I18nProvider":"czGuc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3IKpx":[function(require,module,exports,__globalThis) {
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

},{"./useLayoutEffect":"h7M6K","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8lll3":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"58iim":[function(require,module,exports,__globalThis) {
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

},{"./getScrollParent":"NRzeg","react":"gOP0N","./useEffectEvent":"grBNM","./useLayoutEffect":"h7M6K","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"NRzeg":[function(require,module,exports,__globalThis) {
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

},{"./isScrollable":"2UC33","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4EL3s":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","./utils":"jtWJJ","react-dom":"gOP0N","react":"gOP0N","react-aria/private/utils/useLayoutEffect":"h7M6K","react-aria/useObjectRef":"ec0NJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4xy5f":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kbk3K":[function(require,module,exports,__globalThis) {
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

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9WaKh":[function(require,module,exports,__globalThis) {
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
// Like useEffect, but only called for updates after the initial render.
parcelHelpers.export(exports, "useUpdateEffect", ()=>useUpdateEffect);
var _react = require("react");
var _useEffectEvent = require("./useEffectEvent");
function useUpdateEffect(cb, dependencies) {
    const isInitialMount = (0, _react.useRef)(true);
    const lastDeps = (0, _react.useRef)(null);
    let cbEvent = (0, _useEffectEvent.useEffectEvent)(cb);
    (0, _react.useEffect)(()=>{
        isInitialMount.current = true;
        return ()=>{
            isInitialMount.current = false;
        };
    }, []);
    (0, _react.useEffect)(()=>{
        let prevDeps = lastDeps.current;
        if (isInitialMount.current) isInitialMount.current = false;
        else if (!prevDeps || dependencies.some((dep, i)=>!Object.is(dep, prevDeps[i]))) cbEvent();
        lastDeps.current = dependencies;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}

},{"react":"gOP0N","./useEffectEvent":"grBNM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iFW04":[function(require,module,exports,__globalThis) {
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
 * Handles move interactions across mouse, touch, and keyboard, including dragging with
 * the mouse or touch, and using the arrow keys. Normalizes behavior across browsers and
 * platforms, and ignores emulated mouse events on touch devices.
 */ parcelHelpers.export(exports, "useMove", ()=>useMove);
var _textSelection = require("./textSelection");
var _domfunctions = require("../utils/shadowdom/DOMFunctions");
var _domHelpers = require("../utils/domHelpers");
var _react = require("react");
var _useEffectEvent = require("../utils/useEffectEvent");
var _useGlobalListeners = require("../utils/useGlobalListeners");
function useMove(props) {
    let { onMoveStart, onMove, onMoveEnd } = props;
    let state = (0, _react.useRef)({
        didMove: false,
        lastPosition: null,
        id: null
    });
    let { addGlobalListener, removeGlobalListener } = (0, _useGlobalListeners.useGlobalListeners)();
    let move = (0, _react.useCallback)((originalEvent, pointerType, deltaX, deltaY)=>{
        if (deltaX === 0 && deltaY === 0) return;
        if (!state.current.didMove) {
            state.current.didMove = true;
            onMoveStart?.({
                type: 'movestart',
                pointerType,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
        }
        onMove?.({
            type: 'move',
            pointerType,
            deltaX: deltaX,
            deltaY: deltaY,
            shiftKey: originalEvent.shiftKey,
            metaKey: originalEvent.metaKey,
            ctrlKey: originalEvent.ctrlKey,
            altKey: originalEvent.altKey
        });
    }, [
        onMoveStart,
        onMove,
        state
    ]);
    let moveEvent = (0, _useEffectEvent.useEffectEvent)(move);
    let end = (0, _react.useCallback)((originalEvent, pointerType)=>{
        (0, _textSelection.restoreTextSelection)();
        if (state.current.didMove) onMoveEnd?.({
            type: 'moveend',
            pointerType,
            shiftKey: originalEvent.shiftKey,
            metaKey: originalEvent.metaKey,
            ctrlKey: originalEvent.ctrlKey,
            altKey: originalEvent.altKey
        });
    }, [
        onMoveEnd,
        state
    ]);
    let endEvent = (0, _useEffectEvent.useEffectEvent)(end);
    let moveProps = (0, _react.useMemo)(()=>{
        let moveProps = {};
        let start = ()=>{
            (0, _textSelection.disableTextSelection)();
            state.current.didMove = false;
        };
        typeof PointerEvent;
        var e, e1;
        {
            let onPointerMove = (e)=>{
                if (e.pointerId === state.current.id) {
                    let pointerType = e.pointerType || 'mouse';
                    // Problems with PointerEvent#movementX/movementY:
                    // 1. it is always 0 on macOS Safari.
                    // 2. On Chrome Android, it's scaled by devicePixelRatio, but not on Chrome macOS
                    moveEvent(e, pointerType, e.pageX - (state.current.lastPosition?.pageX ?? 0), e.pageY - (state.current.lastPosition?.pageY ?? 0));
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.current.id) {
                    let pointerType = e.pointerType || 'mouse';
                    endEvent(e, pointerType);
                    state.current.id = null;
                    let ownerWindow = (0, _domHelpers.getOwnerWindow)((0, _domfunctions.getEventTarget)(e));
                    removeGlobalListener(ownerWindow, 'pointermove', onPointerMove, false);
                    removeGlobalListener(ownerWindow, 'pointerup', onPointerUp, false);
                    removeGlobalListener(ownerWindow, 'pointercancel', onPointerUp, false);
                }
            };
            moveProps.onPointerDown = (e)=>{
                if (e.button === 0 && state.current.id == null) {
                    start();
                    e.stopPropagation();
                    e.preventDefault();
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                    state.current.id = e.pointerId;
                    let ownerWindow = (0, _domHelpers.getOwnerWindow)((0, _domfunctions.getEventTarget)(e));
                    addGlobalListener(ownerWindow, 'pointermove', onPointerMove, false);
                    addGlobalListener(ownerWindow, 'pointerup', onPointerUp, false);
                    addGlobalListener(ownerWindow, 'pointercancel', onPointerUp, false);
                }
            };
        }
        let triggerKeyboardMove = (e, deltaX, deltaY)=>{
            start();
            moveEvent(e, 'keyboard', deltaX, deltaY);
            endEvent(e, 'keyboard');
        };
        moveProps.onKeyDown = (e)=>{
            switch(e.key){
                case 'Left':
                case 'ArrowLeft':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, -1, 0);
                    break;
                case 'Right':
                case 'ArrowRight':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 1, 0);
                    break;
                case 'Up':
                case 'ArrowUp':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 0, -1);
                    break;
                case 'Down':
                case 'ArrowDown':
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 0, 1);
                    break;
            }
        };
        return moveProps;
    }, [
        addGlobalListener,
        removeGlobalListener,
        state
    ]);
    return {
        moveProps
    };
}

},{"./textSelection":"3IKpx","../utils/shadowdom/DOMFunctions":"8kfpz","../utils/domHelpers":"cYkFa","react":"gOP0N","../utils/useEffectEvent":"grBNM","../utils/useGlobalListeners":"jsdt1","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gjEnQ":[function(require,module,exports,__globalThis) {
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
// This was created for a special empty case of a component that can have child or
// be empty, like Collection/Virtualizer/Table/ListView/etc. When these components
// are empty they can have a message with a tabbable element, which is like them
// being not empty, when it comes to focus and tab order.
/**
 * Returns whether an element has a tabbable child, and updates as children change.
 *
 * @private
 */ parcelHelpers.export(exports, "useHasTabbableChild", ()=>useHasTabbableChild);
var _focusScope = require("./FocusScope");
var _useLayoutEffect = require("../utils/useLayoutEffect");
var _react = require("react");
function useHasTabbableChild(ref, options) {
    let isDisabled = options?.isDisabled;
    let [hasTabbableChild, setHasTabbableChild] = (0, _react.useState)(false);
    (0, _useLayoutEffect.useLayoutEffect)(()=>{
        if (ref?.current && !isDisabled) {
            let update = ()=>{
                if (ref.current) {
                    let walker = (0, _focusScope.getFocusableTreeWalker)(ref.current, {
                        tabbable: true
                    });
                    setHasTabbableChild(!!walker.nextNode());
                }
            };
            update();
            // Update when new elements are inserted, or the tabIndex/disabled attribute updates.
            let observer = new MutationObserver(update);
            observer.observe(ref.current, {
                subtree: true,
                childList: true,
                attributes: true,
                attributeFilter: [
                    'tabIndex',
                    'disabled'
                ]
            });
            return ()=>{
                // Disconnect mutation observer when a React update occurs on the top-level component
                // so we update synchronously after re-rendering. Otherwise React will emit act warnings
                // in tests since mutation observers fire asynchronously. The mutation observer is necessary
                // so we also update if a child component re-renders and adds/removes something tabbable.
                observer.disconnect();
            };
        }
    });
    return isDisabled ? false : hasTabbableChild;
}

},{"./FocusScope":"E8d3D","../utils/useLayoutEffect":"h7M6K","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7PIkk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Provides the behavior and accessibility implementation for a selection checkbox in a grid.
 *
 * @param props - Props for the selection checkbox.
 * @param state - State of the grid, as returned by `useGridState`.
 */ parcelHelpers.export(exports, "useGridSelectionCheckbox", ()=>useGridSelectionCheckbox);
var _indexJs = require("../../intl/grid/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _useId = require("../utils/useId");
var _useLocalizedStringFormatter = require("../i18n/useLocalizedStringFormatter");
function useGridSelectionCheckbox(props, state) {
    let { key } = props;
    let manager = state.selectionManager;
    let checkboxId = (0, _useId.useId)();
    let isDisabled = !state.selectionManager.canSelectItem(key);
    let isSelected = state.selectionManager.isSelected(key);
    // Checkbox should always toggle selection, regardless of selectionBehavior.
    let onChange = ()=>manager.toggleSelection(key);
    const stringFormatter = (0, _useLocalizedStringFormatter.useLocalizedStringFormatter)((0, _indexJsDefault.default), '@react-aria/grid');
    return {
        checkboxProps: {
            id: checkboxId,
            'aria-label': stringFormatter.format('select'),
            isSelected,
            isDisabled,
            onChange
        }
    };
}

},{"../../intl/grid/index.js":"j9XZN","../utils/useId":"fQAcb","../i18n/useLocalizedStringFormatter":"8lll3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"xDMSQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TreeDropTargetDelegate", ()=>TreeDropTargetDelegate);
const X_SWITCH_THRESHOLD = 10;
const Y_SWITCH_THRESHOLD = 5;
class TreeDropTargetDelegate {
    delegate = null;
    state = null;
    direction = 'ltr';
    pointerTracking = {
        lastY: 0,
        lastX: 0,
        yDirection: null,
        xDirection: null,
        boundaryContext: null
    };
    setup(delegate, state, direction) {
        this.delegate = delegate;
        this.state = state;
        this.direction = direction;
    }
    getDropTargetFromPoint(x, y, isValidDropTarget) {
        let baseTarget = this.delegate.getDropTargetFromPoint(x, y, isValidDropTarget);
        if (!baseTarget || baseTarget.type === 'root') return baseTarget;
        return this.resolveDropTarget(baseTarget, x, y, isValidDropTarget);
    }
    resolveDropTarget(target, x, y, isValidDropTarget) {
        let tracking = this.pointerTracking;
        // Calculate movement directions
        let deltaY = y - tracking.lastY;
        let deltaX = x - tracking.lastX;
        let currentYMovement = tracking.yDirection;
        let currentXMovement = tracking.xDirection;
        if (Math.abs(deltaY) > Y_SWITCH_THRESHOLD) {
            currentYMovement = deltaY > 0 ? 'down' : 'up';
            tracking.yDirection = currentYMovement;
            tracking.lastY = y;
        }
        if (Math.abs(deltaX) > X_SWITCH_THRESHOLD) {
            currentXMovement = deltaX > 0 ? 'right' : 'left';
            tracking.xDirection = currentXMovement;
            tracking.lastX = x;
        }
        // Normalize to 'after'
        if (target.dropPosition === 'before') {
            let keyBefore = this.state.collection.getKeyBefore(target.key);
            while(keyBefore != null){
                let node = this.state.collection.getItem(keyBefore);
                if (node?.type === 'item') break;
                keyBefore = node?.parentKey ?? null;
            }
            if (keyBefore != null) {
                let convertedTarget = {
                    type: 'item',
                    key: keyBefore,
                    dropPosition: 'after'
                };
                if (isValidDropTarget(convertedTarget)) target = convertedTarget;
            }
        }
        let potentialTargets = this.getPotentialTargets(target, isValidDropTarget);
        if (potentialTargets.length === 0) return {
            type: 'root'
        };
        let resolvedItemTarget;
        if (potentialTargets.length > 1) resolvedItemTarget = this.selectTarget(potentialTargets, target, x, y, currentYMovement, currentXMovement);
        else {
            resolvedItemTarget = potentialTargets[0];
            // Reset boundary context since we're not in a boundary case
            tracking.boundaryContext = null;
        }
        return resolvedItemTarget;
    }
    // Returns potential targets for an ambiguous drop position (e.g. after the last child of a parent, or after the parent itself)
    // Ordered by level, from innermost to outermost.
    getPotentialTargets(originalTarget, isValidDropTarget) {
        if (originalTarget.dropPosition === 'on') return [
            originalTarget
        ];
        let target = originalTarget;
        let collection = this.state.collection;
        let currentItem = collection.getItem(target.key);
        while(currentItem && currentItem?.type !== 'item' && currentItem.nextKey != null){
            target.key = currentItem.nextKey;
            currentItem = collection.getItem(currentItem.nextKey);
        }
        let potentialTargets = [
            target
        ];
        // If target has children and is expanded, use "before first child"
        if (currentItem && currentItem.hasChildNodes && this.state.expandedKeys.has(currentItem.key) && collection.getChildren && target.dropPosition === 'after') {
            // Find the first item child (traverse keys directly instead of using collection.getChildren, which may only include cells).
            let firstChildItemNode = currentItem.firstChildKey != null ? collection.getItem(currentItem.firstChildKey) : null;
            while(firstChildItemNode && firstChildItemNode.type !== 'item')firstChildItemNode = firstChildItemNode.nextKey != null ? collection.getItem(firstChildItemNode.nextKey) : null;
            if (firstChildItemNode?.type === 'item') {
                const beforeFirstChildTarget = {
                    type: 'item',
                    key: firstChildItemNode.key,
                    dropPosition: 'before'
                };
                if (isValidDropTarget(beforeFirstChildTarget)) return [
                    beforeFirstChildTarget
                ];
                else return [];
            }
        }
        if (currentItem?.nextKey != null) return [
            originalTarget
        ];
        // Walk up the parent chain to find ancestors that are the last child at their level
        let parentKey = currentItem?.parentKey;
        let ancestorTargets = [];
        while(parentKey != null){
            let parentItem = collection.getItem(parentKey);
            let nextItem = parentItem?.nextKey != null ? collection.getItem(parentItem.nextKey) : null;
            let isLastChildAtLevel = !nextItem || nextItem.parentKey !== parentKey;
            if (isLastChildAtLevel) {
                // Only items can be drop targets. Ancestors such as a Table's <TableBody> or a
                // <TreeSection> are part of the collection, but their keys are generated rather than
                // provided by the user, so dropping "after" them is not something the user can handle.
                if (parentItem?.type === 'item') {
                    let afterParentTarget = {
                        type: 'item',
                        key: parentKey,
                        dropPosition: 'after'
                    };
                    if (isValidDropTarget(afterParentTarget)) ancestorTargets.push(afterParentTarget);
                }
                if (nextItem) break;
            }
            parentKey = parentItem?.parentKey;
        }
        if (ancestorTargets.length > 0) potentialTargets.push(...ancestorTargets);
        // Handle converting "after" to "before next" for non-ambiguous cases
        if (potentialTargets.length === 1) {
            let nextKey = collection.getKeyAfter(target.key);
            let nextNode = nextKey != null ? collection.getItem(nextKey) : null;
            if (nextKey != null && nextNode && currentItem && nextNode.level != null && currentItem.level != null && nextNode.level > currentItem.level) {
                let beforeTarget = {
                    type: 'item',
                    key: nextKey,
                    dropPosition: 'before'
                };
                if (isValidDropTarget(beforeTarget)) return [
                    beforeTarget
                ];
            }
        }
        return potentialTargets.filter(isValidDropTarget);
    }
    selectTarget(potentialTargets, originalTarget, x, y, currentYMovement, currentXMovement) {
        if (potentialTargets.length < 2) return potentialTargets[0];
        let tracking = this.pointerTracking;
        let currentItem = this.state.collection.getItem(originalTarget.key);
        let parentKey = currentItem?.parentKey;
        if (parentKey == null) return potentialTargets[0];
        // More than 1 potential target - use Y for initial target, then X for switching levels
        // Initialize boundary context if needed
        if (!tracking.boundaryContext || tracking.boundaryContext.parentKey !== parentKey) {
            // If entering from below, start with outer-most
            let initialTargetIndex = tracking.yDirection === 'up' ? potentialTargets.length - 1 : 0;
            tracking.boundaryContext = {
                parentKey,
                preferredTargetIndex: initialTargetIndex,
                lastSwitchY: y,
                lastSwitchX: x
            };
        }
        let boundaryContext = tracking.boundaryContext;
        let distanceFromLastXSwitch = Math.abs(x - boundaryContext.lastSwitchX);
        let distanceFromLastYSwitch = Math.abs(y - boundaryContext.lastSwitchY);
        // Switch between targets based on Y movement
        if (distanceFromLastYSwitch > Y_SWITCH_THRESHOLD && currentYMovement) {
            let currentIndex = boundaryContext.preferredTargetIndex || 0;
            if (currentYMovement === 'down' && currentIndex === 0) // Moving down from inner-most, switch to outer-most
            boundaryContext.preferredTargetIndex = potentialTargets.length - 1;
            else if (currentYMovement === 'up' && currentIndex === potentialTargets.length - 1) // Moving up from outer-most, switch to inner-most
            boundaryContext.preferredTargetIndex = 0;
            // Reset x tracking so that moving diagonally doesn't cause flickering.
            tracking.xDirection = null;
        }
        // X movement controls level selection
        if (distanceFromLastXSwitch > X_SWITCH_THRESHOLD && currentXMovement) {
            let currentTargetIndex = boundaryContext.preferredTargetIndex || 0;
            if (currentXMovement === 'left') {
                if (this.direction === 'ltr') // LTR: left = move to higher level in tree (increase index)
                {
                    if (currentTargetIndex < potentialTargets.length - 1) {
                        boundaryContext.preferredTargetIndex = currentTargetIndex + 1;
                        boundaryContext.lastSwitchX = x;
                    }
                } else // RTL: left = move to lower level in tree (decrease index)
                if (currentTargetIndex > 0) {
                    boundaryContext.preferredTargetIndex = currentTargetIndex - 1;
                    boundaryContext.lastSwitchX = x;
                }
            } else if (currentXMovement === 'right') {
                if (this.direction === 'ltr') // LTR: right = move to lower level in tree (decrease index)
                {
                    if (currentTargetIndex > 0) {
                        boundaryContext.preferredTargetIndex = currentTargetIndex - 1;
                        boundaryContext.lastSwitchX = x;
                    }
                } else // RTL: right = move to higher level in tree (increase index)
                if (currentTargetIndex < potentialTargets.length - 1) {
                    boundaryContext.preferredTargetIndex = currentTargetIndex + 1;
                    boundaryContext.lastSwitchX = x;
                }
            }
            // Reset y tracking so that moving diagonally doesn't cause flickering.
            tracking.yDirection = null;
        }
        let targetIndex = Math.max(0, Math.min(boundaryContext.preferredTargetIndex || 0, potentialTargets.length - 1));
        return potentialTargets[targetIndex];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

