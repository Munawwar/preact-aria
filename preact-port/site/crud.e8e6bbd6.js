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
})({"5OqXx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _appDefault.default));
var _tailwindCss = require("../tailwind.css");
var _app = require("./plants/App");
var _appDefault = parcelHelpers.interopDefault(_app);

},{"../tailwind.css":"fhDy2","./plants/App":"kSxsU","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fhDy2":[function() {},{}],"kSxsU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>App);
var _jsxRuntime = require("preact/jsx-runtime");
var _alertDialog = require("../../tailwind/src/AlertDialog");
var _button = require("../../tailwind/src/Button");
var _checkbox = require("../../tailwind/src/Checkbox");
var _lucideReact = require("lucide-react");
var _indexJs = require("../../../../dist/index.js");
var _dialog = require("../../tailwind/src/Dialog");
var _menu = require("../../tailwind/src/Menu");
var _modal = require("../../tailwind/src/Modal");
var _plants = require("./plants");
var _plantsDefault = parcelHelpers.interopDefault(_plants);
var _popover = require("../../tailwind/src/Popover");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _searchField = require("../../tailwind/src/SearchField");
var _tagGroup = require("../../tailwind/src/TagGroup");
var _tooltip = require("../../tailwind/src/Tooltip");
var _ariaHooksTs = require("../../../aria-hooks.ts");
var _labels = require("./Labels");
var _plantTable = require("./PlantTable");
var _plantDialog = require("./PlantDialog");
var _plantList = require("./PlantList");
'use client';
function App() {
    let [allItems, setAllItems] = (0, _react.useState)(()=>(0, _plantsDefault.default).map((p)=>({
                ...p,
                isFavorite: false
            })));
    let [sortDescriptor, setSortDescriptor] = (0, _react.useState)({
        column: 'common_name',
        direction: 'ascending'
    });
    let [visibleColumns, setVisibleColumns] = (0, _react.useState)(new Set([
        'favorite',
        'common_name',
        'sunlight',
        'watering',
        'actions'
    ]));
    // Filter state.
    let [search, setSearch] = (0, _react.useState)('');
    let [favorite, setFavorite] = (0, _react.useState)(false);
    let [cycles, setCycles] = (0, _react.useState)(new Set());
    let [sunlight, setSunlight] = (0, _react.useState)(new Set());
    let [watering, setWatering] = (0, _react.useState)(new Set());
    // Filter and sort items.
    let { contains } = (0, _ariaHooksTs.useFilter)({
        sensitivity: 'base'
    });
    let collator = (0, _ariaHooksTs.useCollator)();
    let dir = sortDescriptor.direction === 'descending' ? -1 : 1;
    let items = allItems.filter((item)=>(contains(item.common_name, search) || contains(item.scientific_name.join(''), search)) && (!favorite || item.isFavorite) && (cycles === 'all' || cycles.size === 0 || cycles.has(item.cycle)) && (sunlight === 'all' || sunlight.size === 0 || sunlight.has((0, _labels.getSunlight)(item))) && (watering === 'all' || watering.size === 0 || watering.has(item.watering))).sort((a, b)=>collator.compare(a[sortDescriptor.column], b[sortDescriptor.column]) * dir);
    // Count applied filters for button badge.
    let filters = 0;
    if (favorite) filters++;
    if (cycles !== 'all') filters += cycles.size;
    if (sunlight !== 'all') filters += sunlight.size;
    if (watering !== 'all') filters += watering.size;
    let clearFilters = ()=>{
        setFavorite(false);
        setCycles(new Set());
        setSunlight(new Set());
        setWatering(new Set());
    };
    // Toggle whether an item is a favorite.
    let onFavoriteChange = (id, isFavorite)=>{
        setAllItems((allItems)=>{
            let items = [
                ...allItems
            ];
            let index = items.findIndex((item)=>item.id === id);
            items[index] = {
                ...items[index],
                isFavorite
            };
            return items;
        });
    };
    // Add, edit, and delete items.
    let addItem = (item)=>{
        setAllItems((allItems)=>[
                ...allItems,
                item
            ]);
    };
    let editItem = (item)=>{
        setAllItems((allItems)=>{
            let items = [
                ...allItems
            ];
            let index = items.findIndex((i)=>i.id === item.id);
            items[index] = item;
            return items;
        });
    };
    let deleteItem = ()=>{
        setAllItems((allItems)=>{
            if (!actionItem) return allItems;
            let items = [
                ...allItems
            ];
            let index = items.findIndex((item)=>item.id === actionItem.id);
            items.splice(index, 1);
            return items;
        });
    };
    let [dialog, setDialog] = (0, _react.useState)(null);
    let [actionItem, setActionItem] = (0, _react.useState)(null);
    let onEdit = (item)=>{
        setDialog('edit');
        setActionItem(item);
    };
    let onDelete = (item)=>{
        setDialog('delete');
        setActionItem(item);
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-col gap-4 p-4 max-w-[600px] mx-auto",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1.1fr_auto_auto_1fr_auto] gap-2 items-end",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _searchField.SearchField), {
                        "aria-label": "Search plants",
                        placeholder: "Search plants",
                        value: search,
                        onChange: setSearch,
                        className: "col-span-3 sm:col-span-1"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.DialogTrigger), {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.TooltipTrigger), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _button.Button), {
                                        "aria-label": "Filters",
                                        variant: "secondary",
                                        className: "!w-9 !h-9 shrink-0 relative",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.FilterIcon), {
                                                "aria-hidden": true,
                                                className: "block w-5 h-5 shrink-0"
                                            }),
                                            filters > 0 && /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                                className: "absolute -top-2 -right-2 rounded-full h-4 aspect-square text-white text-xs bg-blue-600",
                                                children: filters
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tooltip.Tooltip), {
                                        children: "Filters"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popover.Popover), {
                                showArrow: true,
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _dialog.Dialog), {
                                    className: "outline outline-0 p-4 max-h-[inherit] overflow-auto w-[350px]",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Heading), {
                                            slot: "title",
                                            className: "text-lg font-semibold m-0 mb-2",
                                            children: "Filters"
                                        }),
                                        filters > 0 && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _button.Button), {
                                            onPress: clearFilters,
                                            variant: "secondary",
                                            className: "absolute top-4 right-4 h-auto py-1 px-2 text-xs",
                                            children: "Clear"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                            className: "flex flex-col gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _checkbox.Checkbox), {
                                                    isSelected: favorite,
                                                    onChange: setFavorite,
                                                    children: "Favorite"
                                                }),
                                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroup.TagGroup), {
                                                    label: "Cycle",
                                                    selectionMode: "multiple",
                                                    selectedKeys: cycles,
                                                    onSelectionChange: setCycles,
                                                    escapeKeyBehavior: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroup.Tag), {
                                                            id: "Annual",
                                                            color: "green",
                                                            textValue: "Annual",
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.RefreshCw), {
                                                                    className: "w-4 h-4 shrink-0"
                                                                }),
                                                                " Annual"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroup.Tag), {
                                                            id: "Perennial",
                                                            color: "green",
                                                            textValue: "Perennial",
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.RefreshCw), {
                                                                    className: "w-4 h-4 shrink-0"
                                                                }),
                                                                " Perennial"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroup.TagGroup), {
                                                    label: "Sunlight",
                                                    selectionMode: "multiple",
                                                    selectedKeys: sunlight,
                                                    onSelectionChange: setSunlight,
                                                    escapeKeyBehavior: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroup.Tag), {
                                                            id: "full sun",
                                                            color: "yellow",
                                                            textValue: "Full Sun",
                                                            children: [
                                                                (0, _labels.sunIcons)['full sun'],
                                                                " Full Sun"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroup.Tag), {
                                                            id: "part sun",
                                                            color: "yellow",
                                                            textValue: "Part Sun",
                                                            children: [
                                                                (0, _labels.sunIcons)['part sun'],
                                                                " Part Sun"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroup.Tag), {
                                                            id: "part shade",
                                                            color: "yellow",
                                                            textValue: "Part Shade",
                                                            children: [
                                                                (0, _labels.sunIcons)['part shade'],
                                                                " Part Shade"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroup.TagGroup), {
                                                    label: "Watering",
                                                    selectionMode: "multiple",
                                                    selectedKeys: watering,
                                                    onSelectionChange: setWatering,
                                                    escapeKeyBehavior: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroup.Tag), {
                                                            id: "Frequent",
                                                            color: "blue",
                                                            textValue: "Frequent",
                                                            children: [
                                                                (0, _labels.wateringIcons)['Frequent'],
                                                                " Frequent"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroup.Tag), {
                                                            id: "Average",
                                                            color: "blue",
                                                            textValue: "Average",
                                                            children: [
                                                                (0, _labels.wateringIcons)['Average'],
                                                                " Average"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _tagGroup.Tag), {
                                                            id: "Minimum",
                                                            color: "blue",
                                                            textValue: "Minimum",
                                                            children: [
                                                                (0, _labels.wateringIcons)['Minimum'],
                                                                " Minimum"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menu.MenuTrigger), {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.TooltipTrigger), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _button.Button), {
                                        "aria-label": "Columns",
                                        variant: "secondary",
                                        className: "!w-9 !h-9 shrink-0 hidden sm:flex",
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.SlidersIcon), {
                                            "aria-hidden": true,
                                            className: "block w-5 h-5"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _tooltip.Tooltip), {
                                        children: "Columns"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menu.Menu), {
                                selectionMode: "multiple",
                                selectedKeys: visibleColumns,
                                onSelectionChange: setVisibleColumns,
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menu.MenuItem), {
                                        id: "common_name",
                                        children: "Name"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menu.MenuItem), {
                                        id: "cycle",
                                        children: "Cycle"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menu.MenuItem), {
                                        id: "sunlight",
                                        children: "Sunlight"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _menu.MenuItem), {
                                        id: "watering",
                                        children: "Watering"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.DialogTrigger), {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _button.Button), {
                                "aria-label": "Add plant",
                                variant: "secondary",
                                className: "!w-9 !h-9 shrink-0 col-start-5",
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.PlusIcon), {
                                    "aria-hidden": true,
                                    className: "block w-5 h-5"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _modal.Modal), {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _plantDialog.PlantDialog), {
                                    onSave: addItem
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _plantList.PlantList), {
                items: items,
                onFavoriteChange: onFavoriteChange,
                onEdit: onEdit,
                onDelete: onDelete
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _plantTable.PlantTable), {
                sortDescriptor: sortDescriptor,
                onSortChange: setSortDescriptor,
                visibleColumns: visibleColumns,
                items: items,
                onFavoriteChange: onFavoriteChange,
                onEdit: onEdit,
                onDelete: onDelete
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _modal.Modal), {
                isOpen: dialog === 'delete',
                onOpenChange: ()=>setDialog(null),
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _alertDialog.AlertDialog), {
                    title: "Delete Plant",
                    variant: "destructive",
                    actionLabel: "Delete",
                    onAction: deleteItem,
                    children: [
                        'Are you sure you want to delete "',
                        actionItem?.common_name,
                        '"?'
                    ]
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _modal.Modal), {
                isOpen: dialog === 'edit',
                onOpenChange: ()=>setDialog(null),
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _plantDialog.PlantDialog), {
                    item: actionItem,
                    onSave: editItem
                })
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../tailwind/src/AlertDialog":"gUZOT","../../tailwind/src/Button":"b3qGI","../../tailwind/src/Checkbox":"14vxJ","lucide-react":[["FilterIcon","9L3gd","default"],["PlusIcon","1g1Ai","default"],["RefreshCw","c8bIx","default"],["SlidersIcon","kITo9","default"]],"../../../../dist/index.js":"dy6h5","../../tailwind/src/Dialog":"6Q6mE","../../tailwind/src/Menu":"gB3AI","../../tailwind/src/Modal":"dglNY","./plants":"76ngK","../../tailwind/src/Popover":"1BpVT","react":"gOP0N","../../tailwind/src/SearchField":"A6vVG","../../tailwind/src/TagGroup":"92WfY","../../tailwind/src/Tooltip":"dgIV0","../../../aria-hooks.ts":"irHeP","./Labels":"drffJ","./PlantTable":"7cwqY","./PlantDialog":"7EL8J","./PlantList":"jJJof","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gUZOT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AlertDialog", ()=>AlertDialog);
var _jsxRuntime = require("preact/jsx-runtime");
var _lucideReact = require("lucide-react");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _chain = require("react-aria/chain");
var _indexJs = require("../../../../dist/index.js");
var _button = require("./Button");
var _dialog = require("./Dialog");
'use client';
function AlertDialog({ title, variant, cancelLabel, actionLabel, onAction, children, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _dialog.Dialog), {
        role: "alertdialog",
        ...props,
        children: ({ close })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Heading), {
                        slot: "title",
                        className: "text-xl font-semibold leading-6 my-0",
                        children: title
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        className: `w-6 h-6 absolute right-6 top-6 stroke-2 ${variant === 'destructive' ? 'text-red-500' : 'text-blue-500'}`,
                        children: variant === 'destructive' ? /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.AlertCircleIcon), {
                            "aria-hidden": true
                        }) : /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.InfoIcon), {
                            "aria-hidden": true
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                        className: "mt-3 text-neutral-500 dark:text-neutral-400",
                        children: children
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "mt-6 flex justify-end gap-2",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _button.Button), {
                                variant: "secondary",
                                onPress: close,
                                children: cancelLabel || 'Cancel'
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _button.Button), {
                                variant: variant === 'destructive' ? 'destructive' : 'primary',
                                autoFocus: true,
                                onPress: (0, _chain.chain)(onAction, close),
                                children: actionLabel
                            })
                        ]
                    })
                ]
            })
    });
}

},{"preact/jsx-runtime":"b2Fbn","lucide-react":[["AlertCircleIcon","hMI51","default"],["InfoIcon","1xHK7","default"]],"react":"gOP0N","react-aria/chain":"bQmEj","../../../../dist/index.js":"dy6h5","./Button":"b3qGI","./Dialog":"6Q6mE","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hMI51":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>CircleAlert);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
];
const CircleAlert = (0, _createLucideIconJsDefault.default)("circle-alert", __iconNode);

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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1xHK7":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Info);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M12 16v-4",
            key: "1dtifu"
        }
    ],
    [
        "path",
        {
            d: "M12 8h.01",
            key: "e9boi3"
        }
    ]
];
const Info = (0, _createLucideIconJsDefault.default)("info", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bQmEj":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"b3qGI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Button", ()=>Button);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _tailwindVariants = require("tailwind-variants");
var _utils = require("./utils");
'use client';
let button = (0, _tailwindVariants.tv)({
    extend: (0, _utils.focusRing),
    base: 'relative inline-flex items-center justify-center gap-2 border border-transparent dark:border-white/10 h-9 box-border px-3.5 py-0 [&:has(>svg:only-child)]:px-0 [&:has(>svg:only-child)]:h-8 [&:has(>svg:only-child)]:w-8 font-sans text-sm text-center transition rounded-lg cursor-default [-webkit-tap-highlight-color:transparent]',
    variants: {
        variant: {
            primary: 'bg-blue-600 hover:bg-blue-700 pressed:bg-blue-800 text-white',
            secondary: 'border-black/10 bg-neutral-50 hover:bg-neutral-100 pressed:bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:pressed:bg-neutral-500 dark:text-neutral-100',
            destructive: 'bg-red-700 hover:bg-red-800 pressed:bg-red-900 text-white',
            quiet: 'border-0 bg-transparent hover:bg-neutral-200 pressed:bg-neutral-300 text-neutral-800 dark:hover:bg-neutral-700 dark:pressed:bg-neutral-600 dark:text-neutral-100'
        },
        isDisabled: {
            true: 'border-transparent dark:border-transparent bg-neutral-100 dark:bg-neutral-800 text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText]'
        },
        isPending: {
            true: 'text-transparent'
        }
    },
    defaultVariants: {
        variant: 'primary'
    },
    compoundVariants: [
        {
            variant: 'quiet',
            isDisabled: true,
            class: 'bg-transparent dark:bg-transparent'
        }
    ]
});
function Button(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
        ...props,
        className: (0, _indexJs.composeRenderProps)(props.className, (className, renderProps)=>button({
                ...renderProps,
                variant: props.variant,
                className
            })),
        children: (0, _indexJs.composeRenderProps)(props.children, (children, { isPending })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    children,
                    isPending && /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                        "aria-hidden": true,
                        className: "flex absolute inset-0 justify-center items-center",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("svg", {
                            className: "w-4 h-4 text-white animate-spin",
                            viewBox: "0 0 24 24",
                            stroke: props.variant === 'secondary' || props.variant === 'quiet' ? 'light-dark(black, white)' : 'white',
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    strokeWidth: "4",
                                    fill: "none",
                                    className: "opacity-25"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    strokeWidth: "4",
                                    strokeLinecap: "round",
                                    fill: "none",
                                    pathLength: "100",
                                    strokeDasharray: "60 140",
                                    strokeDashoffset: "0"
                                })
                            ]
                        })
                    })
                ]
            }))
    });
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../../dist/index.js":"dy6h5","tailwind-variants":"1lG2r","./utils":"hW5LV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6Q6mE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Dialog", ()=>Dialog);
parcelHelpers.export(exports, "Heading", ()=>(0, _indexJs.Heading));
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _tailwindMerge = require("tailwind-merge");
'use client';
function Dialog(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Dialog), {
        ...props,
        className: (0, _tailwindMerge.twMerge)('outline outline-0 box-border p-6 [[data-placement]>&]:p-4 max-h-[inherit] overflow-auto relative', props.className)
    });
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../../dist/index.js":"dy6h5","tailwind-merge":"iets0","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"14vxJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Checkbox", ()=>Checkbox);
var _jsxRuntime = require("preact/jsx-runtime");
var _lucideReact = require("lucide-react");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _tailwindVariants = require("tailwind-variants");
var _utils = require("./utils");
var _field = require("./Field");
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
    extend: (0, _utils.focusRing),
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
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.CheckboxField), {
        ...props,
        className: "flex flex-col gap-1 group",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.CheckboxButton), {
                className: (0, _indexJs.composeRenderProps)(props.className, (className, renderProps)=>checkboxStyles({
                        ...renderProps,
                        className
                    })),
                children: (0, _indexJs.composeRenderProps)(props.children, (children, { isSelected, isIndeterminate, ...renderProps })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
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
            props.description && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.Description), {
                className: "ms-6.5",
                children: props.description
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.FieldError), {
                className: "ms-6.5",
                children: props.errorMessage
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","lucide-react":[["Check","hRXwG","default"],["Minus","6SswO","default"]],"react":"gOP0N","../../../../dist/index.js":"dy6h5","tailwind-variants":"1lG2r","./utils":"hW5LV","./Field":"bz3fV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hRXwG":[function(require,module,exports,__globalThis) {
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

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bz3fV":[function(require,module,exports,__globalThis) {
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
var _indexJs = require("../../../../dist/index.js");
var _tailwindMerge = require("tailwind-merge");
var _tailwindVariants = require("tailwind-variants");
var _utils = require("./utils");
'use client';
function Label(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Label), {
        ...props,
        className: (0, _tailwindMerge.twMerge)('font-sans text-sm text-neutral-600 dark:text-neutral-300 font-medium cursor-default w-fit', props.className)
    });
}
function Description(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Text), {
        ...props,
        slot: "description",
        className: (0, _tailwindMerge.twMerge)('text-xs text-neutral-600 dark:text-neutral-400 group-disabled:text-neutral-200 dark:group-disabled:text-neutral-700 contain-inline-size', props.className)
    });
}
function FieldError(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.FieldError), {
        ...props,
        className: (0, _utils.composeTailwindRenderProps)(props.className, 'text-xs text-red-600 contain-inline-size forced-colors:text-[Mark]')
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
    extend: (0, _utils.focusRing),
    base: 'group flex items-center h-9 box-border bg-white dark:bg-neutral-900 forced-colors:bg-[Field] border rounded-lg overflow-hidden transition',
    variants: fieldBorderStyles.variants
});
function FieldGroup(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Group), {
        ...props,
        className: (0, _indexJs.composeRenderProps)(props.className, (className, renderProps)=>fieldGroupStyles({
                ...renderProps,
                className
            }))
    });
}
function Input(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Input), {
        ...props,
        className: (0, _utils.composeTailwindRenderProps)(props.className, 'px-3 py-0 min-h-9 flex-1 min-w-0 border-0 outline outline-0 bg-white dark:bg-neutral-900 font-sans text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-600 dark:placeholder:text-neutral-400 disabled:text-neutral-200 dark:disabled:text-neutral-600 disabled:placeholder:text-neutral-200 dark:disabled:placeholder:text-neutral-600 [-webkit-tap-highlight-color:transparent]')
    });
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../../dist/index.js":"dy6h5","tailwind-merge":"iets0","tailwind-variants":"1lG2r","./utils":"hW5LV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9L3gd":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Funnel);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
            key: "sc7q7i"
        }
    ]
];
const Funnel = (0, _createLucideIconJsDefault.default)("funnel", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1g1Ai":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Plus);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
];
const Plus = (0, _createLucideIconJsDefault.default)("plus", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"c8bIx":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>RefreshCw);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc"
        }
    ],
    [
        "path",
        {
            d: "M21 3v5h-5",
            key: "1q7to0"
        }
    ],
    [
        "path",
        {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3"
        }
    ],
    [
        "path",
        {
            d: "M8 16H3v5",
            key: "1cv678"
        }
    ]
];
const RefreshCw = (0, _createLucideIconJsDefault.default)("refresh-cw", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kITo9":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>SlidersVertical);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "line",
        {
            x1: "4",
            x2: "4",
            y1: "21",
            y2: "14",
            key: "1p332r"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "4",
            y1: "10",
            y2: "3",
            key: "gb41h5"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "21",
            y2: "12",
            key: "hf2csr"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "3",
            key: "1kfi7u"
        }
    ],
    [
        "line",
        {
            x1: "20",
            x2: "20",
            y1: "21",
            y2: "16",
            key: "1lhrwl"
        }
    ],
    [
        "line",
        {
            x1: "20",
            x2: "20",
            y1: "12",
            y2: "3",
            key: "16vvfq"
        }
    ],
    [
        "line",
        {
            x1: "2",
            x2: "6",
            y1: "14",
            y2: "14",
            key: "1uebub"
        }
    ],
    [
        "line",
        {
            x1: "10",
            x2: "14",
            y1: "8",
            y2: "8",
            key: "1yglbp"
        }
    ],
    [
        "line",
        {
            x1: "18",
            x2: "22",
            y1: "16",
            y2: "16",
            key: "1jxqpz"
        }
    ]
];
const SlidersVertical = (0, _createLucideIconJsDefault.default)("sliders-vertical", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gB3AI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Menu", ()=>Menu);
parcelHelpers.export(exports, "MenuItem", ()=>MenuItem);
parcelHelpers.export(exports, "MenuSeparator", ()=>MenuSeparator);
parcelHelpers.export(exports, "MenuSection", ()=>MenuSection);
parcelHelpers.export(exports, "MenuTrigger", ()=>MenuTrigger);
parcelHelpers.export(exports, "SubmenuTrigger", ()=>SubmenuTrigger);
var _jsxRuntime = require("preact/jsx-runtime");
var _lucideReact = require("lucide-react");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _listBox = require("./ListBox");
var _popover = require("./Popover");
'use client';
function Menu(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Menu), {
        ...props,
        className: "font-sans p-1 outline outline-0 max-h-[inherit] overflow-auto [clip-path:inset(0_0_0_0_round_.75rem)] empty:text-center empty:pb-2"
    });
}
function MenuItem(props) {
    let textValue = props.textValue || (typeof props.children === 'string' ? props.children : undefined);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.MenuItem), {
        textValue: textValue,
        ...props,
        className: (0, _listBox.dropdownItemStyles),
        children: (0, _indexJs.composeRenderProps)(props.children, (children, { selectionMode, isSelected, hasSubmenu })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    selectionMode !== 'none' && /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                        className: "flex items-center w-4",
                        children: isSelected && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.Check), {
                            "aria-hidden": true,
                            className: "w-4 h-4"
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                        className: "flex items-center flex-1 gap-2 font-normal truncate group-selected:font-semibold",
                        children: children
                    }),
                    hasSubmenu && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.ChevronRight), {
                        "aria-hidden": true,
                        className: "absolute w-4 h-4 right-2"
                    })
                ]
            }))
    });
}
function MenuSeparator(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Separator), {
        ...props,
        className: "mx-3 my-1 border-b border-neutral-300 dark:border-neutral-700"
    });
}
function MenuSection(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.MenuSection), {
        ...props,
        className: "first:-mt-[5px] after:content-[''] after:block after:h-[5px]",
        children: [
            props.title && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Header), {
                className: "text-sm font-semibold text-neutral-500 dark:text-neutral-300 px-4 py-1 truncate sticky -top-[5px] -mt-px -mx-1 z-10 bg-neutral-100/60 dark:bg-neutral-700/60 backdrop-blur-md supports-[-moz-appearance:none]:bg-neutral-100 border-y border-y-neutral-200 dark:border-y-neutral-700 [&+*]:mt-1",
                children: props.title
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Collection), {
                items: props.items,
                children: props.children
            })
        ]
    });
}
function MenuTrigger(props) {
    let [trigger, menu] = (0, _reactDefault.default).Children.toArray(props.children);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.MenuTrigger), {
        ...props,
        children: [
            trigger,
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popover.Popover), {
                placement: props.placement,
                className: "min-w-[150px]",
                children: menu
            })
        ]
    });
}
function SubmenuTrigger(props) {
    let [trigger, menu] = (0, _reactDefault.default).Children.toArray(props.children);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.SubmenuTrigger), {
        ...props,
        children: [
            trigger,
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popover.Popover), {
                offset: -2,
                crossOffset: -4,
                children: menu
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","lucide-react":[["Check","hRXwG","default"],["ChevronRight","cLIr3","default"]],"react":"gOP0N","../../../../dist/index.js":"dy6h5","./ListBox":"9VDWP","./Popover":"1BpVT","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cLIr3":[function(require,module,exports,__globalThis) {
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

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9VDWP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ListBox", ()=>ListBox);
parcelHelpers.export(exports, "itemStyles", ()=>itemStyles);
parcelHelpers.export(exports, "ListBoxItem", ()=>ListBoxItem);
parcelHelpers.export(exports, "dropdownItemStyles", ()=>dropdownItemStyles);
parcelHelpers.export(exports, "DropdownItem", ()=>DropdownItem);
parcelHelpers.export(exports, "DropdownSection", ()=>DropdownSection);
var _jsxRuntime = require("preact/jsx-runtime");
var _lucideReact = require("lucide-react");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _tailwindVariants = require("tailwind-variants");
var _utils = require("./utils");
'use client';
function ListBox({ children, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.ListBox), {
        ...props,
        className: (0, _utils.composeTailwindRenderProps)(props.className, 'outline-0 p-1 w-[200px] bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg font-sans'),
        children: children
    });
}
const itemStyles = (0, _tailwindVariants.tv)({
    extend: (0, _utils.focusRing),
    base: 'group relative flex items-center gap-8 cursor-default select-none py-1.5 px-2.5 rounded-md will-change-transform text-sm forced-color-adjust-none',
    variants: {
        isSelected: {
            false: 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 pressed:bg-neutral-100 dark:hover:bg-neutral-800 dark:pressed:bg-neutral-800 -outline-offset-2',
            true: 'bg-blue-600 text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] [&:has(+[data-selected])]:rounded-b-none [&+[data-selected]]:rounded-t-none -outline-offset-4 outline-white dark:outline-white forced-colors:outline-[HighlightText]'
        },
        isDisabled: {
            true: 'text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText]'
        }
    }
});
function ListBoxItem(props) {
    let textValue = props.textValue || (typeof props.children === 'string' ? props.children : undefined);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.ListBoxItem), {
        ...props,
        textValue: textValue,
        className: itemStyles,
        children: (0, _indexJs.composeRenderProps)(props.children, (children)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    children,
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        className: "absolute left-4 right-4 bottom-0 h-px bg-white/20 forced-colors:bg-[HighlightText] hidden [.group[data-selected]:has(+[data-selected])_&]:block"
                    })
                ]
            }))
    });
}
const dropdownItemStyles = (0, _tailwindVariants.tv)({
    base: 'group flex items-center gap-4 cursor-default select-none py-2 pl-3 pr-3 selected:pr-1 rounded-lg outline outline-0 text-sm forced-color-adjust-none no-underline [&[href]]:cursor-pointer [-webkit-tap-highlight-color:transparent]',
    variants: {
        isDisabled: {
            false: 'text-neutral-900 dark:text-neutral-100',
            true: 'text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText]'
        },
        isPressed: {
            true: 'bg-neutral-100 dark:bg-neutral-800'
        },
        isFocused: {
            true: 'bg-blue-600 dark:bg-blue-600 text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]'
        }
    },
    compoundVariants: [
        {
            isFocused: false,
            isOpen: true,
            className: 'bg-neutral-100 dark:bg-neutral-700/60'
        }
    ]
});
function DropdownItem(props) {
    let textValue = props.textValue || (typeof props.children === 'string' ? props.children : undefined);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.ListBoxItem), {
        ...props,
        textValue: textValue,
        className: dropdownItemStyles,
        children: (0, _indexJs.composeRenderProps)(props.children, (children, { isSelected })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                        className: "flex items-center flex-1 gap-2 font-normal truncate group-selected:font-semibold",
                        children: children
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                        className: "flex items-center w-5",
                        children: isSelected && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.Check), {
                            className: "w-4 h-4"
                        })
                    })
                ]
            }))
    });
}
function DropdownSection(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.ListBoxSection), {
        className: "first:-mt-[5px] after:content-[''] after:block after:h-[5px] last:after:hidden",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Header), {
                className: "text-sm font-semibold text-neutral-500 dark:text-neutral-300 px-4 py-1 truncate sticky -top-[5px] -mt-px -mx-1 z-10 bg-neutral-100/60 dark:bg-neutral-700/60 backdrop-blur-md supports-[-moz-appearance:none]:bg-neutral-100 border-y border-y-neutral-200 dark:border-y-neutral-700 [&+*]:mt-1",
                children: props.title
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Collection), {
                items: props.items,
                children: props.children
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","lucide-react":[["Check","hRXwG","default"]],"react":"gOP0N","../../../../dist/index.js":"dy6h5","tailwind-variants":"1lG2r","./utils":"hW5LV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1BpVT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Popover", ()=>Popover);
var _jsxRuntime = require("preact/jsx-runtime");
var _indexJs = require("../../../../dist/index.js");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _tailwindVariants = require("tailwind-variants");
'use client';
const styles = (0, _tailwindVariants.tv)({
    base: 'font-sans bg-white dark:bg-neutral-900/70 dark:backdrop-blur-2xl dark:backdrop-saturate-200 forced-colors:bg-[Canvas] shadow-2xl rounded-xl bg-clip-padding border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300 outline-0 overflow-auto',
    variants: {
        isEntering: {
            true: 'animate-in fade-in placement-bottom:slide-in-from-top-1 placement-top:slide-in-from-bottom-1 placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 ease-out duration-200'
        },
        isExiting: {
            true: 'animate-out fade-out placement-bottom:slide-out-to-top-1 placement-top:slide-out-to-bottom-1 placement-left:slide-out-to-right-1 placement-right:slide-out-to-left-1 ease-in duration-150'
        }
    }
});
function Popover({ children, showArrow, className, ...props }) {
    let offset = showArrow ? 12 : 8;
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.Popover), {
        offset: offset,
        ...props,
        className: (0, _indexJs.composeRenderProps)(className, (className, renderProps)=>styles({
                ...renderProps,
                className
            })),
        children: [
            showArrow && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.OverlayArrow), {
                className: "group",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("svg", {
                    width: 12,
                    height: 12,
                    viewBox: "0 0 12 12",
                    className: "block fill-white dark:fill-[#1f1f21] forced-colors:fill-[Canvas] stroke-1 stroke-black/10 dark:stroke-neutral-700 forced-colors:stroke-[ButtonBorder] group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90",
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                        d: "M0 0 L6 6 L12 0"
                    })
                })
            }),
            children
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../../../dist/index.js":"dy6h5","react":"gOP0N","tailwind-variants":"1lG2r","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dglNY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Modal", ()=>Modal);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _tailwindVariants = require("tailwind-variants");
'use client';
const overlayStyles = (0, _tailwindVariants.tv)({
    base: 'absolute top-0 left-0 w-full h-(--page-height) isolate z-20 bg-black/[50%] text-center backdrop-blur-lg',
    variants: {
        isEntering: {
            true: 'animate-in fade-in duration-200 ease-out'
        },
        isExiting: {
            true: 'animate-out fade-out duration-200 ease-in'
        }
    }
});
const modalStyles = (0, _tailwindVariants.tv)({
    base: 'font-sans w-full max-w-[min(90vw,450px)] max-h-[calc(var(--visual-viewport-height)*.9)] rounded-2xl bg-white dark:bg-neutral-800/70 dark:backdrop-blur-2xl dark:backdrop-saturate-200 forced-colors:bg-[Canvas] text-left align-middle text-neutral-700 dark:text-neutral-300 shadow-2xl bg-clip-padding border border-black/10 dark:border-white/10',
    variants: {
        isEntering: {
            true: 'animate-in zoom-in-105 ease-out duration-200'
        },
        isExiting: {
            true: 'animate-out zoom-out-95 ease-in duration-200'
        }
    }
});
function Modal(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.ModalOverlay), {
        ...props,
        className: overlayStyles,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
            className: "sticky top-0 left-0 w-full h-(--visual-viewport-height) flex items-center justify-center box-border",
            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Modal), {
                ...props,
                className: modalStyles
            })
        })
    });
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../../dist/index.js":"dy6h5","tailwind-variants":"1lG2r","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"76ngK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _agapanthusJpg = require("url:./plants/agapanthus.jpg");
var _agapanthusJpgDefault = parcelHelpers.interopDefault(_agapanthusJpg);
var _aloeJpg = require("url:./plants/aloe.jpg");
var _aloeJpgDefault = parcelHelpers.interopDefault(_aloeJpg);
var _dracaenaJpg = require("url:./plants/dracaena.jpg");
var _dracaenaJpgDefault = parcelHelpers.interopDefault(_dracaenaJpg);
var _fernJpg = require("url:./plants/fern.jpg");
var _fernJpgDefault = parcelHelpers.interopDefault(_fernJpg);
var _figJpg = require("url:./plants/fig.jpg");
var _figJpgDefault = parcelHelpers.interopDefault(_figJpg);
var _gardeniaJpg = require("url:./plants/gardenia.jpg");
var _gardeniaJpgDefault = parcelHelpers.interopDefault(_gardeniaJpg);
var _ivyJpg = require("url:./plants/ivy.jpg");
var _ivyJpgDefault = parcelHelpers.interopDefault(_ivyJpg);
var _jacarandaJpg = require("url:./plants/jacaranda.jpg");
var _jacarandaJpgDefault = parcelHelpers.interopDefault(_jacarandaJpg);
var _maidenhairJpg = require("url:./plants/maidenhair.jpg");
var _maidenhairJpgDefault = parcelHelpers.interopDefault(_maidenhairJpg);
var _moneyJpg = require("url:./plants/money.jpg");
var _moneyJpgDefault = parcelHelpers.interopDefault(_moneyJpg);
var _monsteraJpg = require("url:./plants/monstera.jpg");
var _monsteraJpgDefault = parcelHelpers.interopDefault(_monsteraJpg);
var _morningJpg = require("url:./plants/morning.jpg");
var _morningJpgDefault = parcelHelpers.interopDefault(_morningJpg);
var _nasturtiumJpg = require("url:./plants/nasturtium.jpg");
var _nasturtiumJpgDefault = parcelHelpers.interopDefault(_nasturtiumJpg);
var _oleanderJpg = require("url:./plants/oleander.jpg");
var _oleanderJpgDefault = parcelHelpers.interopDefault(_oleanderJpg);
var _poplarJpg = require("url:./plants/poplar.jpg");
var _poplarJpgDefault = parcelHelpers.interopDefault(_poplarJpg);
var _spiderJpg = require("url:./plants/spider.jpg");
var _spiderJpgDefault = parcelHelpers.interopDefault(_spiderJpg);
var _starJpg = require("url:./plants/star.jpg");
var _starJpgDefault = parcelHelpers.interopDefault(_starJpg);
var _treeFernJpg = require("url:./plants/tree_fern.jpg");
var _treeFernJpgDefault = parcelHelpers.interopDefault(_treeFernJpg);
var _xmasJpg = require("url:./plants/xmas.jpg");
var _xmasJpgDefault = parcelHelpers.interopDefault(_xmasJpg);
var _zzJpg = require("url:./plants/zz.jpg");
var _zzJpgDefault = parcelHelpers.interopDefault(_zzJpg);
exports.default = [
    {
        id: 1,
        common_name: 'Aloe',
        scientific_name: [
            'Aloe vera'
        ],
        watering: 'Minimum',
        sunlight: [
            'full sun'
        ],
        cycle: 'Perennial',
        default_image: {
            thumbnail: (0, _aloeJpgDefault.default)
        }
    },
    {
        id: 2,
        common_name: 'Blue Jacaranda',
        scientific_name: [
            'Jacaranda mimosifolia'
        ],
        watering: 'Minimum',
        sunlight: [
            'full sun'
        ],
        cycle: 'Perennial',
        default_image: {
            thumbnail: (0, _jacarandaJpgDefault.default)
        }
    },
    {
        id: 3,
        common_name: 'Oleander',
        scientific_name: [
            'Nerium oleander'
        ],
        watering: 'Minimum',
        sunlight: [
            'full sun'
        ],
        cycle: 'Perennial',
        default_image: {
            thumbnail: (0, _oleanderJpgDefault.default)
        }
    },
    {
        id: 4,
        common_name: 'Poplar',
        scientific_name: [
            'Populus'
        ],
        watering: 'Average',
        sunlight: [
            'full sun'
        ],
        cycle: 'Perennial',
        default_image: {
            thumbnail: (0, _poplarJpgDefault.default)
        }
    },
    {
        id: 5,
        common_name: 'Zanzibar Gem',
        scientific_name: [
            'Zamioculcas'
        ],
        watering: 'Average',
        sunlight: [
            'part sun'
        ],
        cycle: 'Perennial',
        default_image: {
            thumbnail: (0, _zzJpgDefault.default)
        }
    },
    {
        id: 6,
        common_name: 'Morning Glory',
        scientific_name: [
            'Ipomoea'
        ],
        watering: 'Frequent',
        sunlight: [
            'full sun'
        ],
        cycle: 'Perennial',
        default_image: {
            thumbnail: (0, _morningJpgDefault.default)
        }
    },
    {
        id: 7,
        common_name: 'Christmas Bush',
        scientific_name: [
            'Ceratopetalum gummiferum'
        ],
        watering: 'Average',
        sunlight: [
            'full sun'
        ],
        cycle: 'Perennial',
        default_image: {
            thumbnail: (0, _xmasJpgDefault.default)
        }
    },
    {
        id: 8,
        common_name: 'Gardenia',
        scientific_name: [
            'Gardenia jasminoides'
        ],
        watering: 'Average',
        sunlight: [
            'part sun'
        ],
        cycle: 'Perennial',
        default_image: {
            thumbnail: (0, _gardeniaJpgDefault.default)
        }
    },
    {
        id: 9,
        common_name: 'Spider Plant',
        scientific_name: [
            'Chlorophytum comosum'
        ],
        watering: 'Average',
        sunlight: [
            'part sun'
        ],
        cycle: 'Perennial',
        default_image: {
            thumbnail: (0, _spiderJpgDefault.default)
        }
    },
    {
        id: 10,
        common_name: 'Chinese Money Plant',
        scientific_name: [
            'Pilea peperomioides'
        ],
        watering: 'Average',
        sunlight: [
            'part sun'
        ],
        cycle: 'Perennial',
        default_image: {
            thumbnail: (0, _moneyJpgDefault.default)
        }
    },
    {
        id: 11,
        common_name: 'Fiddle Leaf Fig',
        scientific_name: [
            'Ficus lyrata'
        ],
        watering: 'Average',
        sunlight: [
            'full sun'
        ],
        cycle: 'Perennial',
        default_image: {
            thumbnail: (0, _figJpgDefault.default)
        }
    },
    {
        id: 12,
        common_name: 'Tuberous Sword Fern',
        scientific_name: [
            'Nephrolepis cordifolia'
        ],
        watering: 'Frequent',
        sunlight: [
            'part shade'
        ],
        cycle: 'Perennial',
        default_image: {
            thumbnail: (0, _fernJpgDefault.default)
        }
    },
    {
        id: 13,
        common_name: 'Star Jasmine',
        scientific_name: [
            'Trachelospermum jasminoides'
        ],
        watering: 'Frequent',
        sunlight: [
            'full sun'
        ],
        cycle: 'Perennial',
        default_image: {
            thumbnail: (0, _starJpgDefault.default)
        }
    },
    {
        id: 14,
        common_name: 'Split-leaf Philodendron',
        scientific_name: [
            'Monstera deliciosa'
        ],
        watering: 'Frequent',
        sunlight: [
            'part shade'
        ],
        cycle: 'Perennial',
        default_image: {
            thumbnail: (0, _monsteraJpgDefault.default)
        }
    },
    {
        id: 15,
        common_name: 'Agapanthus',
        scientific_name: [
            'Agapanthus praecox'
        ],
        watering: 'Minimum',
        sunlight: [
            'full sun'
        ],
        cycle: 'Perennial',
        default_image: {
            thumbnail: (0, _agapanthusJpgDefault.default)
        }
    },
    {
        id: 16,
        common_name: 'Tree Fern',
        scientific_name: [
            'Cyatheaceae'
        ],
        watering: 'Frequent',
        sunlight: [
            'part sun'
        ],
        cycle: 'Annual',
        default_image: {
            thumbnail: (0, _treeFernJpgDefault.default)
        }
    },
    {
        id: 17,
        common_name: 'Striped Dracaena',
        scientific_name: [
            'Asparagaceae'
        ],
        watering: 'Average',
        sunlight: [
            'part sun'
        ],
        cycle: 'Perennial',
        default_image: {
            thumbnail: (0, _dracaenaJpgDefault.default)
        }
    },
    {
        id: 18,
        common_name: 'Delta Maidenhair Fern',
        scientific_name: [
            'Adiantum raddianum'
        ],
        watering: 'Average',
        sunlight: [
            'part shade'
        ],
        cycle: 'Perennial',
        default_image: {
            thumbnail: (0, _maidenhairJpgDefault.default)
        }
    },
    {
        id: 19,
        common_name: 'Ivy',
        scientific_name: [
            'Hedera'
        ],
        watering: 'Frequent',
        sunlight: [
            'part sun'
        ],
        cycle: 'Perennial',
        default_image: {
            thumbnail: (0, _ivyJpgDefault.default)
        }
    },
    {
        id: 20,
        common_name: 'Nasturtium',
        scientific_name: [
            'Tropaeolum'
        ],
        watering: 'Average',
        sunlight: [
            'full sun'
        ],
        cycle: 'Annual',
        default_image: {
            thumbnail: (0, _nasturtiumJpgDefault.default)
        }
    }
];

},{"url:./plants/agapanthus.jpg":"iw5Mj","url:./plants/aloe.jpg":"623fA","url:./plants/dracaena.jpg":"1Jnse","url:./plants/fern.jpg":"86fHP","url:./plants/fig.jpg":"hPGqX","url:./plants/gardenia.jpg":"cf0Nf","url:./plants/ivy.jpg":"gdrBU","url:./plants/jacaranda.jpg":"a0ccI","url:./plants/maidenhair.jpg":"kF4yA","url:./plants/money.jpg":"MQx5a","url:./plants/monstera.jpg":"fEsds","url:./plants/morning.jpg":"13GGz","url:./plants/nasturtium.jpg":"k83AG","url:./plants/oleander.jpg":"gOnff","url:./plants/poplar.jpg":"jSN2p","url:./plants/spider.jpg":"3csKt","url:./plants/star.jpg":"lJr8q","url:./plants/tree_fern.jpg":"jevVL","url:./plants/xmas.jpg":"iG7Cp","url:./plants/zz.jpg":"1fxn6","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iw5Mj":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("faw9n");

},{}],"623fA":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("o9tDa");

},{}],"1Jnse":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("jtXGY");

},{}],"86fHP":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("4kPrq");

},{}],"hPGqX":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("2TzBh");

},{}],"cf0Nf":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("3d2Ey");

},{}],"gdrBU":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("7FzJ1");

},{}],"a0ccI":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("f0akI");

},{}],"kF4yA":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("lSRNb");

},{}],"MQx5a":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("6j33p");

},{}],"fEsds":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("kyV7n");

},{}],"13GGz":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("hG779");

},{}],"k83AG":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("RJpnm");

},{}],"gOnff":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("b50Sb");

},{}],"jSN2p":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("19WXJ");

},{}],"3csKt":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("8AhUz");

},{}],"lJr8q":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("cPKdZ");

},{}],"jevVL":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("eGb4b");

},{}],"iG7Cp":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("4GBqf");

},{}],"1fxn6":[function(require,module,exports,__globalThis) {
module.exports = import.meta.resolve("bkjor");

},{}],"A6vVG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SearchField", ()=>SearchField);
var _jsxRuntime = require("preact/jsx-runtime");
var _lucideReact = require("lucide-react");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _field = require("./Field");
var _utils = require("./utils");
var _fieldButton = require("./FieldButton");
'use client';
function SearchField({ label, description, errorMessage, placeholder, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.SearchField), {
        ...props,
        className: (0, _utils.composeTailwindRenderProps)(props.className, 'group flex flex-col gap-1 min-w-[40px] font-sans max-w-full'),
        children: [
            label && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.Label), {
                children: label
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _field.FieldGroup), {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.SearchIcon), {
                        "aria-hidden": true,
                        className: "w-4 h-4 ml-2 text-neutral-500 dark:text-neutral-400 forced-colors:text-[ButtonText] group-disabled:text-neutral-200 dark:group-disabled:text-neutral-600 forced-colors:group-disabled:text-[GrayText]"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.Input), {
                        placeholder: placeholder,
                        className: "pl-2 [&::-webkit-search-cancel-button]:hidden"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _fieldButton.FieldButton), {
                        className: "mr-1 w-6 group-empty:invisible",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.XIcon), {
                            "aria-hidden": true,
                            className: "w-4 h-4"
                        })
                    })
                ]
            }),
            description && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.Description), {
                children: description
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.FieldError), {
                children: errorMessage
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","lucide-react":[["SearchIcon","bl3bq","default"],["XIcon","81ZMY","default"]],"react":"gOP0N","../../../../dist/index.js":"dy6h5","./Field":"bz3fV","./utils":"hW5LV","./FieldButton":"3O8BK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bl3bq":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Search);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, _createLucideIconJsDefault.default)("search", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"81ZMY":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>X);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X = (0, _createLucideIconJsDefault.default)("x", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3O8BK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FieldButton", ()=>FieldButton);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _tailwindVariants = require("tailwind-variants");
var _utils = require("./utils");
'use client';
let button = (0, _tailwindVariants.tv)({
    extend: (0, _utils.focusRing),
    base: 'relative inline-flex items-center border-0 font-sans text-sm text-center transition rounded-md cursor-default p-1 flex items-center justify-center text-neutral-600 bg-transparent hover:bg-black/[5%] pressed:bg-black/10 dark:text-neutral-400 dark:hover:bg-white/10 dark:pressed:bg-white/20 disabled:bg-transparent [-webkit-tap-highlight-color:transparent]',
    variants: {
        isDisabled: {
            true: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText] border-black/5 dark:border-white/5'
        }
    }
});
function FieldButton(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
        ...props,
        className: (0, _indexJs.composeRenderProps)(props.className, (className, renderProps)=>button({
                ...renderProps,
                className
            })),
        children: props.children
    });
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../../dist/index.js":"dy6h5","tailwind-variants":"1lG2r","./utils":"hW5LV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"92WfY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TagGroup", ()=>TagGroup);
parcelHelpers.export(exports, "Tag", ()=>Tag);
var _jsxRuntime = require("preact/jsx-runtime");
var _lucideReact = require("lucide-react");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _tailwindMerge = require("tailwind-merge");
var _tailwindVariants = require("tailwind-variants");
var _field = require("./Field");
var _utils = require("./utils");
'use client';
const colors = {
    gray: 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-600 dark:hover:border-neutral-500',
    green: 'bg-green-100 text-green-700 border-green-200 hover:border-green-300 dark:bg-green-300/20 dark:text-green-400 dark:border-green-300/10 dark:hover:border-green-300/20',
    yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200 hover:border-yellow-300 dark:bg-yellow-300/20 dark:text-yellow-400 dark:border-yellow-300/10 dark:hover:border-yellow-300/20',
    blue: 'bg-blue-100 text-blue-700 border-blue-200 hover:border-blue-300 dark:bg-blue-400/20 dark:text-blue-300 dark:border-blue-400/10 dark:hover:border-blue-400/20'
};
const ColorContext = /*#__PURE__*/ (0, _react.createContext)('gray');
const tagStyles = (0, _tailwindVariants.tv)({
    extend: (0, _utils.focusRing),
    base: 'transition cursor-default text-xs rounded-full border px-3 py-0.5 flex items-center max-w-fit gap-1 font-sans [-webkit-tap-highlight-color:transparent]',
    variants: {
        color: {
            gray: '',
            green: '',
            yellow: '',
            blue: ''
        },
        allowsRemoving: {
            true: 'pr-1'
        },
        isSelected: {
            true: 'bg-blue-600 text-white border-transparent forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-color-adjust-none'
        },
        isDisabled: {
            true: 'bg-neutral-100 dark:bg-transparent dark:border-white/20 text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText]'
        }
    },
    compoundVariants: Object.keys(colors).map((color)=>({
            isSelected: false,
            isDisabled: false,
            color,
            class: colors[color]
        }))
});
function TagGroup({ label, description, errorMessage, items, children, renderEmptyState, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.TagGroup), {
        ...props,
        className: (0, _tailwindMerge.twMerge)('flex flex-col gap-2 font-sans', props.className),
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.Label), {
                children: label
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(ColorContext.Provider, {
                value: props.color || 'gray',
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.TagList), {
                    items: items,
                    renderEmptyState: renderEmptyState,
                    className: "flex flex-wrap gap-1",
                    children: children
                })
            }),
            description && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.Description), {
                children: description
            }),
            errorMessage && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Text), {
                slot: "errorMessage",
                className: "text-sm text-red-600",
                children: errorMessage
            })
        ]
    });
}
const removeButtonStyles = (0, _tailwindVariants.tv)({
    extend: (0, _utils.focusRing),
    base: 'cursor-default rounded-full transition-[background-color] p-0.5 flex items-center justify-center bg-transparent text-[inherit] border-0 hover:bg-black/10 dark:hover:bg-white/10 pressed:bg-black/20 dark:pressed:bg-white/20'
});
function Tag({ children, color, ...props }) {
    let textValue = typeof children === 'string' ? children : undefined;
    let groupColor = (0, _react.useContext)(ColorContext);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Tag), {
        textValue: textValue,
        ...props,
        className: (0, _indexJs.composeRenderProps)(props.className, (className, renderProps)=>tagStyles({
                ...renderProps,
                className,
                color: color || groupColor
            })),
        children: (0, _indexJs.composeRenderProps)(children, (children, { allowsRemoving })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    children,
                    allowsRemoving && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
                        slot: "remove",
                        className: removeButtonStyles,
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.XIcon), {
                            "aria-hidden": true,
                            className: "w-3 h-3"
                        })
                    })
                ]
            }))
    });
}

},{"preact/jsx-runtime":"b2Fbn","lucide-react":[["XIcon","81ZMY","default"]],"react":"gOP0N","../../../../dist/index.js":"dy6h5","tailwind-merge":"iets0","tailwind-variants":"1lG2r","./Field":"bz3fV","./utils":"hW5LV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dgIV0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tooltip", ()=>Tooltip);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _tailwindVariants = require("tailwind-variants");
'use client';
const styles = (0, _tailwindVariants.tv)({
    base: 'group bg-neutral-700 dark:bg-neutral-600 border border-neutral-800 dark:border-white/10 font-sans text-xs text-white rounded-lg drop-shadow-lg will-change-transform px-3 py-1.5 box-border',
    variants: {
        isEntering: {
            true: 'animate-in fade-in placement-bottom:slide-in-from-top-0.5 placement-top:slide-in-from-bottom-0.5 placement-left:slide-in-from-right-0.5 placement-right:slide-in-from-left-0.5 ease-out duration-200'
        },
        isExiting: {
            true: 'animate-out fade-out placement-bottom:slide-out-to-top-0.5 placement-top:slide-out-to-bottom-0.5 placement-left:slide-out-to-right-0.5 placement-right:slide-out-to-left-0.5 ease-in duration-150'
        }
    }
});
function Tooltip({ children, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.Tooltip), {
        ...props,
        offset: 10,
        className: (0, _indexJs.composeRenderProps)(props.className, (className, renderProps)=>styles({
                ...renderProps,
                className
            })),
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.OverlayArrow), {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("svg", {
                    width: 8,
                    height: 8,
                    viewBox: "0 0 8 8",
                    className: "block fill-neutral-700 dark:fill-neutral-600 forced-colors:fill-[Canvas] stroke-neutral-800 dark:stroke-white/10 forced-colors:stroke-[ButtonBorder] group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90",
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                        d: "M0 0 L4 4 L8 0"
                    })
                })
            }),
            children
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../../dist/index.js":"dy6h5","tailwind-variants":"1lG2r","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"irHeP":[function(require,module,exports,__globalThis) {
// CRUD uses one hook not exposed by the Components entry point. Compile its unchanged source.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useCollator", ()=>(0, _useCollator.useCollator));
parcelHelpers.export(exports, "useFilter", ()=>(0, _indexJs.useFilter));
var _useCollator = require("../vendor/react-aria/src/i18n/useCollator");
var _indexJs = require("../dist/index.js");

},{"../vendor/react-aria/src/i18n/useCollator":"ghoIN","../dist/index.js":"dy6h5","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ghoIN":[function(require,module,exports,__globalThis) {
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

},{"./I18nProvider":"czGuc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"czGuc":[function(require,module,exports,__globalThis) {
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
 * Provides the locale for the application to all child components.
 */ parcelHelpers.export(exports, "I18nProvider", ()=>I18nProvider);
/**
 * Returns the current locale and layout direction.
 */ parcelHelpers.export(exports, "useLocale", ()=>useLocale);
var _jsxRuntime = require("preact/jsx-runtime");
var _utils = require("./utils");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _useDefaultLocale = require("./useDefaultLocale");
const I18nContext = /*#__PURE__*/ (0, _reactDefault.default).createContext(null);
/**
 * Internal component that handles the case when locale is provided.
 */ function I18nProviderWithLocale(props) {
    let { locale, children } = props;
    let value = (0, _reactDefault.default).useMemo(()=>({
            locale,
            direction: (0, _utils.isRTL)(locale) ? 'rtl' : 'ltr'
        }), [
        locale
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(I18nContext.Provider, {
        value: value,
        children: children
    });
}
/**
 * Internal component that handles the case when no locale is provided.
 */ function I18nProviderWithDefaultLocale(props) {
    let { children } = props;
    let defaultLocale = (0, _useDefaultLocale.useDefaultLocale)();
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(I18nContext.Provider, {
        value: defaultLocale,
        children: children
    });
}
function I18nProvider(props) {
    let { locale, children } = props;
    // Conditionally render different components to avoid calling useDefaultLocale.
    // This is necessary because useDefaultLocale triggers a re-render.
    if (locale) return /*#__PURE__*/ (0, _jsxRuntime.jsx)(I18nProviderWithLocale, {
        locale: locale,
        children: children
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(I18nProviderWithDefaultLocale, {
        children: children
    });
}
function useLocale() {
    let defaultLocale = (0, _useDefaultLocale.useDefaultLocale)();
    let context = (0, _react.useContext)(I18nContext);
    return context || defaultLocale;
}

},{"preact/jsx-runtime":"b2Fbn","./utils":"2D8bT","react":"gOP0N","./useDefaultLocale":"3KkSA","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2D8bT":[function(require,module,exports,__globalThis) {
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
 */ // https://en.wikipedia.org/wiki/Right-to-left
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Determines if a locale is read right to left using
 * [Intl.Locale]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale}.
 */ parcelHelpers.export(exports, "isRTL", ()=>isRTL);
const RTL_SCRIPTS = new Set([
    'Arab',
    'Syrc',
    'Samr',
    'Mand',
    'Thaa',
    'Mend',
    'Nkoo',
    'Adlm',
    'Rohg',
    'Hebr'
]);
const RTL_LANGS = new Set([
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'ku',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi'
]);
function isRTL(localeString) {
    // If the Intl.Locale API is available, use it to get the locale's text direction.
    if (Intl.Locale) {
        let locale = new Intl.Locale(localeString).maximize();
        // Use the text info object to get the direction if possible.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
        let textInfo = // @ts-ignore - this was implemented as a property by some browsers before it was standardized as a function.
        typeof locale.getTextInfo === 'function' ? locale.getTextInfo() : locale.textInfo;
        if (textInfo) return textInfo.direction === 'rtl';
        // Fallback: guess using the script.
        // This is more accurate than guessing by language, since languages can be written in multiple scripts.
        if (locale.script) return RTL_SCRIPTS.has(locale.script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = localeString.split('-')[0];
    return RTL_LANGS.has(lang);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3KkSA":[function(require,module,exports,__globalThis) {
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
 * Gets the locale setting of the browser.
 */ parcelHelpers.export(exports, "getDefaultLocale", ()=>getDefaultLocale);
/**
 * Returns the current browser/system language, and updates when it changes.
 */ parcelHelpers.export(exports, "useDefaultLocale", ()=>useDefaultLocale);
var _utils = require("./utils");
var _react = require("react");
var _ssrprovider = require("../ssr/SSRProvider");
// Locale passed from server by PackageLocalizationProvider.
const localeSymbol = Symbol.for('react-aria.i18n.locale');
function getDefaultLocale() {
    let locale = typeof window !== 'undefined' && window[localeSymbol] || // @ts-ignore
    typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
    try {
        Intl.DateTimeFormat.supportedLocalesOf([
            locale
        ]);
    } catch  {
        locale = 'en-US';
    }
    return {
        locale,
        direction: (0, _utils.isRTL)(locale) ? 'rtl' : 'ltr'
    };
}
let currentLocale = getDefaultLocale();
let listeners = new Set();
function updateLocale() {
    currentLocale = getDefaultLocale();
    for (let listener of listeners)listener(currentLocale);
}
function useDefaultLocale() {
    let isSSR = (0, _ssrprovider.useIsSSR)();
    let [defaultLocale, setDefaultLocale] = (0, _react.useState)(currentLocale);
    (0, _react.useEffect)(()=>{
        if (listeners.size === 0) window.addEventListener('languagechange', updateLocale);
        listeners.add(setDefaultLocale);
        return ()=>{
            listeners.delete(setDefaultLocale);
            if (listeners.size === 0) window.removeEventListener('languagechange', updateLocale);
        };
    }, []);
    // We cannot determine the browser's language on the server, so default to
    // en-US. This will be updated after hydration on the client to the correct value.
    if (isSSR) {
        let locale = typeof window !== 'undefined' && window[localeSymbol];
        return {
            locale: locale || 'en-US',
            direction: 'ltr'
        };
    }
    return defaultLocale;
}

},{"./utils":"2D8bT","react":"gOP0N","../ssr/SSRProvider":"2cndP","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2cndP":[function(require,module,exports,__globalThis) {
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
/** Preact 11 generates hydration-safe ids without a provider. Retained for API compatibility. */ parcelHelpers.export(exports, "SSRProvider", ()=>SSRProvider);
/** @private */ parcelHelpers.export(exports, "useSSRSafeId", ()=>useSSRSafeId);
/** Returns true during server rendering and the initial hydration render. */ parcelHelpers.export(exports, "useIsSSR", ()=>useIsSSR);
var _jsxRuntime = require("preact/jsx-runtime");
// We must avoid a circular dependency with @react-aria/utils, and this useLayoutEffect is
// guarded by a check that it only runs on the client side.
// eslint-disable-next-line rsp-rules/use-layout-effect-rule
var _compat = require("preact/compat");
var _compatDefault = parcelHelpers.interopDefault(_compat);
function SSRProvider(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {
        children: props.children
    });
}
function useSSRSafeId(defaultId) {
    let id = (0, _compat.useId)();
    return defaultId || `react-aria-${id}`;
}
const subscribe = ()=>()=>{};
const getSnapshot = ()=>false;
const getServerSnapshot = ()=>true;
function useIsSSR() {
    return (0, _compat.useSyncExternalStore)(subscribe, getSnapshot, getServerSnapshot);
}

},{"preact/jsx-runtime":"b2Fbn","preact/compat":"8RhID","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"drffJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cycleIcon", ()=>cycleIcon);
parcelHelpers.export(exports, "CycleLabel", ()=>CycleLabel);
parcelHelpers.export(exports, "sunIcons", ()=>sunIcons);
parcelHelpers.export(exports, "sunColors", ()=>sunColors);
parcelHelpers.export(exports, "SunLabel", ()=>SunLabel);
parcelHelpers.export(exports, "getSunlight", ()=>getSunlight);
parcelHelpers.export(exports, "wateringIcons", ()=>wateringIcons);
parcelHelpers.export(exports, "WateringLabel", ()=>WateringLabel);
var _jsxRuntime = require("preact/jsx-runtime");
var _lucideReact = require("lucide-react");
const labelStyles = {
    gray: 'bg-gray-100 text-gray-600 border-gray-200 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-600',
    green: 'bg-green-100 text-green-700 border-green-200 dark:bg-green-300/20 dark:text-green-400 dark:border-green-300/10',
    yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-300/20 dark:text-yellow-400 dark:border-yellow-300/10',
    blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-400/20 dark:text-blue-300 dark:border-blue-400/10'
};
function Label({ color, icon, children }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("span", {
        className: `${labelStyles[color]} text-xs rounded-full border px-2 flex items-center max-w-fit gap-1`,
        children: [
            icon,
            " ",
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                className: "truncate capitalize",
                children: children
            })
        ]
    });
}
const cycleIcon = /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.RefreshCw), {
    "aria-hidden": "true",
    className: "w-4 h-4 shrink-0"
});
function CycleLabel({ cycle }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Label, {
        color: "green",
        icon: cycleIcon,
        children: cycle
    });
}
const sunIcons = {
    'full sun': /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.Sun), {
        "aria-hidden": "true",
        className: "w-4 h-4 shrink-0"
    }),
    'part sun': /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.SunDim), {
        "aria-hidden": "true",
        className: "w-4 h-4 shrink-0"
    }),
    'part shade': /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.CloudSun), {
        "aria-hidden": "true",
        className: "w-4 h-4 shrink-0"
    })
};
const sunColors = {
    'full sun': 'yellow',
    'part sun': 'yellow',
    'part shade': 'gray'
};
function SunLabel({ sun }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Label, {
        color: sunColors[sun],
        icon: sunIcons[sun],
        children: sun
    });
}
function getSunlight(item) {
    return (item.sunlight.find((s)=>s.startsWith('part')) || item.sunlight[0]).split('/')[0];
}
const wateringIcons = {
    Frequent: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.Droplets), {
        "aria-hidden": "true",
        className: "w-4 h-4 shrink-0"
    }),
    Average: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.Droplet), {
        "aria-hidden": "true",
        className: "w-4 h-4 shrink-0"
    }),
    Minimum: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.Dessert), {
        "aria-hidden": "true",
        className: "w-4 h-4 shrink-0"
    })
};
const wateringColors = {
    Frequent: 'blue',
    Average: 'blue',
    Minimum: 'gray'
};
function WateringLabel({ watering }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Label, {
        color: wateringColors[watering],
        icon: wateringIcons[watering],
        children: watering
    });
}

},{"preact/jsx-runtime":"b2Fbn","lucide-react":[["CloudSun","5o4bL","default"],["Dessert","577jq","default"],["Droplet","lpSCm","default"],["Droplets","kif1N","default"],["RefreshCw","c8bIx","default"],["Sun","js47e","default"],["SunDim","9Rehv","default"]],"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5o4bL":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>CloudSun);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ],
    [
        "path",
        {
            d: "M15.947 12.65a4 4 0 0 0-5.925-4.128",
            key: "dpwdj0"
        }
    ],
    [
        "path",
        {
            d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",
            key: "s09mg5"
        }
    ]
];
const CloudSun = (0, _createLucideIconJsDefault.default)("cloud-sun", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"577jq":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Dessert);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "4",
            r: "2",
            key: "muu5ef"
        }
    ],
    [
        "path",
        {
            d: "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",
            key: "lfo06j"
        }
    ],
    [
        "path",
        {
            d: "M3.2 14.8a9 9 0 0 0 17.6 0",
            key: "12xarc"
        }
    ]
];
const Dessert = (0, _createLucideIconJsDefault.default)("dessert", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lpSCm":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Droplet);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
            key: "c7niix"
        }
    ]
];
const Droplet = (0, _createLucideIconJsDefault.default)("droplet", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kif1N":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Droplets);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
            key: "1ptgy4"
        }
    ],
    [
        "path",
        {
            d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
            key: "1sl1rz"
        }
    ]
];
const Droplets = (0, _createLucideIconJsDefault.default)("droplets", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"js47e":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Sun);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }
    ],
    [
        "path",
        {
            d: "M2 12h2",
            key: "1t8f8n"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ]
];
const Sun = (0, _createLucideIconJsDefault.default)("sun", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9Rehv":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>SunDim);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ],
    [
        "path",
        {
            d: "M12 4h.01",
            key: "1ujb9j"
        }
    ],
    [
        "path",
        {
            d: "M20 12h.01",
            key: "1ykeid"
        }
    ],
    [
        "path",
        {
            d: "M12 20h.01",
            key: "zekei9"
        }
    ],
    [
        "path",
        {
            d: "M4 12h.01",
            key: "158zrr"
        }
    ],
    [
        "path",
        {
            d: "M17.657 6.343h.01",
            key: "31pqzk"
        }
    ],
    [
        "path",
        {
            d: "M17.657 17.657h.01",
            key: "jehnf4"
        }
    ],
    [
        "path",
        {
            d: "M6.343 17.657h.01",
            key: "gdk6ow"
        }
    ],
    [
        "path",
        {
            d: "M6.343 6.343h.01",
            key: "1uurf0"
        }
    ]
];
const SunDim = (0, _createLucideIconJsDefault.default)("sun-dim", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7cwqY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PlantTable", ()=>PlantTable);
var _jsxRuntime = require("preact/jsx-runtime");
var _table = require("../../tailwind/src/Table");
var _lucideReact = require("lucide-react");
var _indexJs = require("../../../../dist/index.js");
var _utils = require("../../tailwind/src/utils");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _tailwindVariants = require("tailwind-variants");
var _labels = require("./Labels");
var _plantActionMenu = require("./PlantActionMenu");
const allColumns = [
    {
        id: 'favorite',
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.VisuallyHidden), {
            children: "Favorite"
        }),
        width: 40,
        minWidth: 40
    },
    {
        id: 'common_name',
        children: 'Name',
        minWidth: 150,
        allowsSorting: true
    },
    {
        id: 'cycle',
        children: 'Cycle',
        defaultWidth: 120,
        allowsSorting: true
    },
    {
        id: 'sunlight',
        children: 'Sunlight',
        defaultWidth: 120,
        allowsSorting: true
    },
    {
        id: 'watering',
        children: 'Watering',
        defaultWidth: 120,
        allowsSorting: true
    },
    {
        id: 'actions',
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.VisuallyHidden), {
            children: "Actions"
        }),
        width: 64,
        minWidth: 64
    }
];
function PlantTable(props) {
    let { sortDescriptor, onSortChange, visibleColumns, items, onFavoriteChange, onEdit, onDelete } = props;
    let columns = (0, _react.useMemo)(()=>{
        let res = allColumns.filter((c)=>visibleColumns === 'all' || visibleColumns.has(c.id));
        res[1] = {
            ...res[1],
            isRowHeader: true
        };
        return res;
    }, [
        visibleColumns
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _table.Table), {
        "aria-label": "My plants",
        selectionMode: "multiple",
        sortDescriptor: sortDescriptor,
        onSortChange: onSortChange,
        className: "h-[320px] hidden md:block",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _table.TableHeader), {
                columns: columns,
                children: (column)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _table.Column), {
                        ...column
                    })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _table.TableBody), {
                items: items,
                dependencies: [
                    columns
                ],
                renderEmptyState: ()=>'No results. Try changing the filters.',
                children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _table.Row), {
                        columns: columns,
                        children: (column)=>{
                            switch(column.id){
                                case 'favorite':
                                    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _table.Cell), {
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(FavoriteButton, {
                                            isSelected: item.isFavorite,
                                            onChange: (v)=>onFavoriteChange(item.id, v)
                                        })
                                    });
                                case 'common_name':
                                    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _table.Cell), {
                                        textValue: item.common_name,
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                            className: "grid grid-cols-[40px_1fr] gap-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("img", {
                                                    alt: "",
                                                    src: item.default_image?.thumbnail,
                                                    className: "inline rounded-sm row-span-2 object-contain h-[40px] w-[40px]"
                                                }),
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                                    className: "truncate capitalize",
                                                    children: item.common_name
                                                }),
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                                    className: "truncate text-xs text-gray-600 dark:text-zinc-400",
                                                    children: item.scientific_name
                                                })
                                            ]
                                        })
                                    });
                                case 'cycle':
                                    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _table.Cell), {
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labels.CycleLabel), {
                                            cycle: item.cycle
                                        })
                                    });
                                case 'sunlight':
                                    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _table.Cell), {
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labels.SunLabel), {
                                            sun: (0, _labels.getSunlight)(item)
                                        })
                                    });
                                case 'watering':
                                    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _table.Cell), {
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _labels.WateringLabel), {
                                            watering: item.watering
                                        })
                                    });
                                case 'actions':
                                    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _table.Cell), {
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _plantActionMenu.PlantActionMenu), {
                                            item: item,
                                            onFavoriteChange: onFavoriteChange,
                                            onEdit: onEdit,
                                            onDelete: onDelete
                                        })
                                    });
                                default:
                                    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {});
                            }
                        }
                    })
            })
        ]
    });
}
const favoriteButtonStyles = (0, _tailwindVariants.tv)({
    extend: (0, _utils.focusRing),
    base: 'group cursor-default align-middle rounded-sm border-0 bg-transparent p-0',
    variants: {
        isSelected: {
            false: 'text-gray-500 dark:text-zinc-400 pressed:text-gray-600 dark:pressed:text-zinc-300',
            true: 'text-gray-700 dark:text-slate-300 pressed:text-gray-800 dark:pressed:text-slate-200'
        }
    }
});
function FavoriteButton(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.ToggleButton), {
        "aria-label": "Favorite",
        ...props,
        className: favoriteButtonStyles,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.StarIcon), {
            className: "w-5 h-5 fill-white dark:fill-zinc-900 group-selected:fill-current"
        })
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../tailwind/src/Table":"69ECN","lucide-react":[["StarIcon","2THt6","default"]],"../../../../dist/index.js":"dy6h5","../../tailwind/src/utils":"hW5LV","react":"gOP0N","tailwind-variants":"1lG2r","./Labels":"drffJ","./PlantActionMenu":"e2yhA","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"69ECN":[function(require,module,exports,__globalThis) {
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
var _indexJs = require("../../../../dist/index.js");
var _tailwindMerge = require("tailwind-merge");
var _tailwindVariants = require("tailwind-variants");
var _checkbox = require("./Checkbox");
var _utils = require("./utils");
'use client';
function Table(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.ResizableTableContainer), {
        onScroll: props.onScroll,
        className: (0, _tailwindMerge.twMerge)('w-full max-h-[320px] overflow-auto scroll-pt-[2.281rem] relative bg-white dark:bg-neutral-900 box-border border border-neutral-300 dark:border-neutral-700 rounded-lg font-sans', props.className),
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Table), {
            ...props,
            className: "border-separate border-spacing-0 box-border overflow-hidden has-[>[data-empty]]:h-full"
        })
    });
}
const columnStyles = (0, _tailwindVariants.tv)({
    extend: (0, _utils.focusRing),
    base: 'px-2 h-5 box-border flex-1 flex gap-1 items-center overflow-hidden'
});
const resizerStyles = (0, _tailwindVariants.tv)({
    extend: (0, _utils.focusRing),
    base: 'w-px px-[8px] translate-x-[8px] box-content py-1 h-5 bg-clip-content bg-neutral-400 dark:bg-neutral-500 forced-colors:bg-[ButtonBorder] cursor-col-resize rounded-xs resizing:bg-blue-600 forced-colors:resizing:bg-[Highlight] resizing:w-[2px] resizing:pl-[7px] -outline-offset-2'
});
function Column(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Column), {
        ...props,
        className: (0, _utils.composeTailwindRenderProps)(props.className, 'box-border h-1 [&:hover]:z-20 focus-within:z-20 text-start text-sm font-semibold text-neutral-700 dark:text-neutral-300 cursor-default'),
        children: (0, _indexJs.composeRenderProps)(props.children, (children, { allowsSorting, sortDirection })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.Group), {
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
                    !props.width && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.ColumnResizer), {
                        className: resizerStyles
                    })
                ]
            }))
    });
}
function TableHeader(props) {
    let { selectionBehavior, selectionMode, allowsDragging } = (0, _indexJs.useTableOptions)();
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.TableHeader), {
        ...props,
        className: (0, _utils.composeTailwindRenderProps)(props.className, 'sticky top-0 z-10 bg-neutral-100/60 dark:bg-neutral-700/60 backdrop-blur-md supports-[-moz-appearance:none]:bg-neutral-100 dark:supports-[-moz-appearance:none]:bg-neutral-700 forced-colors:bg-[Canvas] rounded-t-lg border-b border-b-neutral-200 dark:border-b-neutral-700'),
        children: [
            allowsDragging && /*#__PURE__*/ (0, _jsxRuntime.jsx)(Column, {}),
            selectionBehavior === 'toggle' && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Column), {
                width: 36,
                minWidth: 36,
                className: "box-border p-2 text-sm font-semibold cursor-default text-start",
                children: selectionMode === 'multiple' && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _checkbox.Checkbox), {
                    slot: "selection"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Collection), {
                items: props.columns,
                children: props.children
            })
        ]
    });
}
function TableBody(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.TableBody), {
        ...props,
        className: "empty:italic empty:text-center empty:text-sm"
    });
}
function TableFooter(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.TableFooter), {
        ...props,
        className: "bg-neutral-200 dark:bg-neutral-700 font-bold"
    });
}
const rowStyles = (0, _tailwindVariants.tv)({
    extend: (0, _utils.focusRing),
    base: 'group/row relative cursor-default select-none -outline-offset-2 text-neutral-900 disabled:text-neutral-300 dark:text-neutral-200 dark:disabled:text-neutral-600 text-sm hover:bg-neutral-100 pressed:bg-neutral-100 dark:hover:bg-neutral-800 dark:pressed:bg-neutral-800 selected:bg-blue-100 selected:hover:bg-blue-200 selected:pressed:bg-blue-200 dark:selected:bg-blue-700/30 dark:selected:hover:bg-blue-700/40 dark:selected:pressed:bg-blue-700/40 last:rounded-b-lg'
});
function Row({ id, columns, children, ...otherProps }) {
    let { selectionBehavior, allowsDragging } = (0, _indexJs.useTableOptions)();
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.Row), {
        id: id,
        ...otherProps,
        className: rowStyles,
        children: [
            allowsDragging && /*#__PURE__*/ (0, _jsxRuntime.jsx)(Cell, {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
                    slot: "drag",
                    children: "\u2261"
                })
            }),
            selectionBehavior === 'toggle' && /*#__PURE__*/ (0, _jsxRuntime.jsx)(Cell, {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _checkbox.Checkbox), {
                    slot: "selection"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Collection), {
                items: columns,
                children: children
            })
        ]
    });
}
const cellStyles = (0, _tailwindVariants.tv)({
    extend: (0, _utils.focusRing),
    base: 'box-border [-webkit-tap-highlight-color:transparent] border-b border-b-neutral-200 dark:border-b-neutral-700 group-last/row:border-b-0 [--selected-border:var(--color-blue-200)] dark:[--selected-border:var(--color-blue-900)] group-selected/row:border-(--selected-border) [:is(:has(+[data-selected])_*)]:border-(--selected-border) p-2 truncate -outline-offset-2 group-last/row:first:rounded-bl-lg group-last/row:last:rounded-br-lg'
});
const expandButton = (0, _tailwindVariants.tv)({
    extend: (0, _utils.focusRing),
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
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Cell), {
        ...props,
        className: cellStyles,
        style: ({ hasChildItems, isTreeColumn, level })=>({
                paddingInlineStart: isTreeColumn ? 4 + (hasChildItems ? 0 : 20) + (level - 1) * 16 : undefined
            }),
        children: (0, _indexJs.composeRenderProps)(props.children, (children, { hasChildItems, isTreeColumn, isExpanded, isDisabled })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    hasChildItems && isTreeColumn && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
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

},{"preact/jsx-runtime":"b2Fbn","lucide-react":[["ArrowUp","j4rZZ","default"],["ChevronRight","cLIr3","default"]],"react":"gOP0N","../../../../dist/index.js":"dy6h5","tailwind-merge":"iets0","tailwind-variants":"1lG2r","./Checkbox":"14vxJ","./utils":"hW5LV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j4rZZ":[function(require,module,exports,__globalThis) {
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

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2THt6":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Star);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
];
const Star = (0, _createLucideIconJsDefault.default)("star", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"e2yhA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PlantActionMenu", ()=>PlantActionMenu);
var _jsxRuntime = require("preact/jsx-runtime");
var _button = require("../../tailwind/src/Button");
var _lucideReact = require("lucide-react");
var _menu = require("../../tailwind/src/Menu");
function PlantActionMenu(props) {
    let { item, onFavoriteChange, onEdit, onDelete } = props;
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menu.MenuTrigger), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _button.Button), {
                "aria-label": "Actions",
                variant: "secondary",
                className: "row-span-2 place-self-center bg-transparent dark:bg-transparent border-transparent dark:border-transparent",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.MoreHorizontal), {
                    "aria-hidden": true,
                    className: "w-5 h-5"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menu.Menu), {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menu.MenuItem), {
                        id: "favorite",
                        onAction: ()=>onFavoriteChange(item.id, !item.isFavorite),
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.StarIcon), {
                                "aria-hidden": true,
                                className: "w-4 h-4"
                            }),
                            " ",
                            item.isFavorite ? 'Unfavorite' : 'Favorite'
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menu.MenuItem), {
                        id: "edit",
                        onAction: ()=>onEdit(item),
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.PencilIcon), {
                                "aria-hidden": true,
                                className: "w-4 h-4"
                            }),
                            " Edit\u2026"
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menu.MenuItem), {
                        id: "delete",
                        onAction: ()=>onDelete(item),
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.TrashIcon), {
                                "aria-hidden": true,
                                className: "w-4 h-4"
                            }),
                            " Delete\u2026"
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menu.SubmenuTrigger), {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menu.MenuItem), {
                                "aria-label": "Share",
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.ShareIcon), {
                                        "aria-hidden": true,
                                        className: "w-4 h-4"
                                    }),
                                    "Share"
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menu.Menu), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menu.MenuItem), {
                                        href: `https://x.com/intent/tweet?text=${encodeURIComponent(item.common_name)}`,
                                        target: "blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "X",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.Twitter), {
                                                "aria-hidden": true,
                                                className: "w-4 h-4"
                                            }),
                                            " X\u2026"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _menu.MenuItem), {
                                        href: `mailto:abc@example.com?subject=${encodeURIComponent(item.common_name)}`,
                                        target: "blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Email",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.Mail), {
                                                "aria-hidden": true,
                                                className: "w-4 h-4"
                                            }),
                                            " Email\u2026"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../tailwind/src/Button":"b3qGI","lucide-react":[["Mail","8DhA2","default"],["MoreHorizontal","G8QE5","default"],["PencilIcon","g6T4g","default"],["ShareIcon","7WBrH","default"],["StarIcon","2THt6","default"],["TrashIcon","7hgbY","default"],["Twitter","8zqkA","default"]],"../../tailwind/src/Menu":"gB3AI","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8DhA2":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Mail);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
            key: "132q7q"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }
    ]
];
const Mail = (0, _createLucideIconJsDefault.default)("mail", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"G8QE5":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Ellipsis);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "1",
            key: "41hilf"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "12",
            r: "1",
            key: "1wjl8i"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "12",
            r: "1",
            key: "1pcz8c"
        }
    ]
];
const Ellipsis = (0, _createLucideIconJsDefault.default)("ellipsis", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"g6T4g":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Pencil);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
            key: "1a8usu"
        }
    ],
    [
        "path",
        {
            d: "m15 5 4 4",
            key: "1mk7zo"
        }
    ]
];
const Pencil = (0, _createLucideIconJsDefault.default)("pencil", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7WBrH":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Share);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "M12 2v13",
            key: "1km8f5"
        }
    ],
    [
        "path",
        {
            d: "m16 6-4-4-4 4",
            key: "13yo43"
        }
    ],
    [
        "path",
        {
            d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
            key: "1b2hhj"
        }
    ]
];
const Share = (0, _createLucideIconJsDefault.default)("share", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7hgbY":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Trash);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }
    ]
];
const Trash = (0, _createLucideIconJsDefault.default)("trash", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8zqkA":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Twitter);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6"
        }
    ]
];
const Twitter = (0, _createLucideIconJsDefault.default)("twitter", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7EL8J":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PlantDialog", ()=>PlantDialog);
var _jsxRuntime = require("preact/jsx-runtime");
var _button = require("../../tailwind/src/Button");
var _indexJs = require("../../../../dist/index.js");
var _comboBox = require("../../tailwind/src/ComboBox");
var _datePicker = require("../../tailwind/src/DatePicker");
var _dialog = require("../../tailwind/src/Dialog");
var _dropZone = require("../../tailwind/src/DropZone");
var _form = require("../../tailwind/src/Form");
var _date = require("@internationalized/date");
var _plants = require("./plants");
var _plantsDefault = parcelHelpers.interopDefault(_plants);
var _select = require("../../tailwind/src/Select");
var _textField = require("../../tailwind/src/TextField");
var _labels = require("./Labels");
var _react = require("react");
function PlantDialog({ item, onSave }) {
    let [droppedImage, setDroppedImage] = (0, _react.useState)(item?.default_image?.thumbnail);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _dialog.Dialog), {
        children: ({ close })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Heading), {
                        slot: "title",
                        className: "text-2xl font-semibold leading-6 my-0 text-slate-700 dark:text-zinc-300",
                        children: item ? 'Edit Plant' : 'Add Plant'
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _form.Form), {
                        onSubmit: (event)=>{
                            event.preventDefault();
                            let formData = new FormData(event.currentTarget);
                            let data = Object.fromEntries(formData);
                            data.sunlight = [
                                data.sunlight
                            ];
                            data.scientific_name = [
                                data.scientific_name
                            ];
                            data.default_image = {
                                thumbnail: data.image
                            };
                            data.id = item?.id || Date.now();
                            data.isFavorite = item?.isFavorite || false;
                            onSave(data);
                        },
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _dropZone.DropZone), {
                                        getDropOperation: (types)=>types.has('image/jpeg') || types.has('image/png') ? 'copy' : 'cancel',
                                        onDrop: async (e)=>{
                                            let item = e.items.filter((0, _indexJs.isFileDropItem)).find((item)=>item.type === 'image/jpeg' || item.type === 'image/png');
                                            if (item) setDroppedImage(URL.createObjectURL(await item.getFile()));
                                        },
                                        className: "w-24 sm:w-32 p-2",
                                        children: [
                                            droppedImage ? /*#__PURE__*/ (0, _jsxRuntime.jsx)("img", {
                                                alt: "",
                                                src: droppedImage,
                                                className: "w-full h-full object-contain aspect-square"
                                            }) : /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Text), {
                                                slot: "label",
                                                className: "italic text-sm text-center",
                                                children: "Drop or paste image here"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                                                type: "hidden",
                                                name: "image",
                                                value: droppedImage
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                        className: "flex flex-col gap-3 flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _comboBox.ComboBox), {
                                                label: "Common Name",
                                                placeholder: "Enter plant name",
                                                name: "common_name",
                                                isRequired: true,
                                                items: (0, _plantsDefault.default),
                                                defaultInputValue: item?.common_name,
                                                allowsCustomValue: true,
                                                autoFocus: navigator.maxTouchPoints === 0,
                                                children: (plant)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _comboBox.ComboBoxItem), {
                                                        children: plant.common_name
                                                    })
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _textField.TextField), {
                                                label: "Scientific Name",
                                                placeholder: "Enter scientific name",
                                                name: "scientific_name",
                                                isRequired: true,
                                                defaultValue: item?.scientific_name?.join('')
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _select.Select), {
                                label: "Cycle",
                                name: "cycle",
                                isRequired: true,
                                defaultSelectedKey: item?.cycle,
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _select.SelectItem), {
                                        id: "Perennial",
                                        textValue: "Perennial",
                                        children: [
                                            (0, _labels.cycleIcon),
                                            " Perennial"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _select.SelectItem), {
                                        id: "Annual",
                                        textValue: "Annual",
                                        children: [
                                            (0, _labels.cycleIcon),
                                            " Annual"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _select.Select), {
                                label: "Sunlight",
                                name: "sunlight",
                                isRequired: true,
                                defaultSelectedKey: item ? (0, _labels.getSunlight)(item) : undefined,
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _select.SelectItem), {
                                        id: "full sun",
                                        textValue: "Full Sun",
                                        children: [
                                            (0, _labels.sunIcons)['full sun'],
                                            " Full Sun"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _select.SelectItem), {
                                        id: "part sun",
                                        textValue: "Part Sun",
                                        children: [
                                            (0, _labels.sunIcons)['part sun'],
                                            " Part Sun"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _select.SelectItem), {
                                        id: "part shade",
                                        textValue: "Part Shade",
                                        children: [
                                            (0, _labels.sunIcons)['part shade'],
                                            " Part Shade"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _select.Select), {
                                label: "Watering",
                                name: "watering",
                                isRequired: true,
                                defaultSelectedKey: item?.watering,
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _select.SelectItem), {
                                        id: "Frequent",
                                        textValue: "Frequent",
                                        children: [
                                            (0, _labels.wateringIcons)['Frequent'],
                                            " Frequent"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _select.SelectItem), {
                                        id: "Average",
                                        textValue: "Average",
                                        children: [
                                            (0, _labels.wateringIcons)['Average'],
                                            " Average"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _select.SelectItem), {
                                        id: "Minimum",
                                        textValue: "Minimum",
                                        children: [
                                            (0, _labels.wateringIcons)['Minimum'],
                                            " Minimum"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _datePicker.DatePicker), {
                                label: "Date Planted",
                                isRequired: true,
                                defaultValue: item ? (0, _date.today)((0, _date.getLocalTimeZone)()) : null
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                className: "mt-6 flex justify-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _button.Button), {
                                        variant: "secondary",
                                        onPress: close,
                                        children: "Cancel"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _button.Button), {
                                        variant: "primary",
                                        type: "submit",
                                        children: item ? 'Save' : 'Add'
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../tailwind/src/Button":"b3qGI","../../../../dist/index.js":"dy6h5","../../tailwind/src/ComboBox":"692LD","../../tailwind/src/DatePicker":"lVcdJ","../../tailwind/src/Dialog":"6Q6mE","../../tailwind/src/DropZone":"3aucU","../../tailwind/src/Form":"ee3b8","@internationalized/date":"aHOFb","./plants":"76ngK","../../tailwind/src/Select":"bqUuX","../../tailwind/src/TextField":"b8NCc","./Labels":"drffJ","react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"692LD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ComboBox", ()=>ComboBox);
parcelHelpers.export(exports, "ComboBoxItem", ()=>ComboBoxItem);
parcelHelpers.export(exports, "ComboBoxSection", ()=>ComboBoxSection);
var _jsxRuntime = require("preact/jsx-runtime");
var _lucideReact = require("lucide-react");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _field = require("./Field");
var _listBox = require("./ListBox");
var _popover = require("./Popover");
var _utils = require("./utils");
var _fieldButton = require("./FieldButton");
'use client';
function ComboBox({ label, description, errorMessage, children, items, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.ComboBox), {
        ...props,
        className: (0, _utils.composeTailwindRenderProps)(props.className, 'group flex flex-col gap-1 font-sans'),
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.Label), {
                children: label
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _field.FieldGroup), {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.Input), {
                        className: "ps-3 pe-1"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _fieldButton.FieldButton), {
                        className: "w-6 mr-1 outline-offset-0",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.ChevronDown), {
                            "aria-hidden": true,
                            className: "w-4 h-4"
                        })
                    })
                ]
            }),
            props.selectionMode === 'multiple' && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.ComboBoxValue), {
                placeholder: "No items selected",
                className: "text-xs text-neutral-600 dark:text-neutral-300"
            }),
            description && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.Description), {
                children: description
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.FieldError), {
                children: errorMessage
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popover.Popover), {
                className: "w-(--trigger-width)",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.ListBox), {
                    items: items,
                    className: "outline-0 p-1 box-border max-h-[inherit] overflow-auto [clip-path:inset(0_0_0_0_round_.75rem)]",
                    children: children
                })
            })
        ]
    });
}
function ComboBoxItem(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _listBox.DropdownItem), {
        ...props
    });
}
function ComboBoxSection(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _listBox.DropdownSection), {
        ...props
    });
}

},{"preact/jsx-runtime":"b2Fbn","lucide-react":[["ChevronDown","l8XHX","default"]],"react":"gOP0N","../../../../dist/index.js":"dy6h5","./Field":"bz3fV","./ListBox":"9VDWP","./Popover":"1BpVT","./utils":"hW5LV","./FieldButton":"3O8BK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"l8XHX":[function(require,module,exports,__globalThis) {
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

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lVcdJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DatePicker", ()=>DatePicker);
var _jsxRuntime = require("preact/jsx-runtime");
var _lucideReact = require("lucide-react");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _calendar = require("./Calendar");
var _dateField = require("./DateField");
var _field = require("./Field");
var _popover = require("./Popover");
var _utils = require("./utils");
var _fieldButton = require("./FieldButton");
'use client';
function DatePicker({ label, description, errorMessage, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.DatePicker), {
        ...props,
        className: (0, _utils.composeTailwindRenderProps)(props.className, 'group flex flex-col gap-1 font-sans'),
        children: [
            label && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.Label), {
                children: label
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _field.FieldGroup), {
                className: "min-w-[208px] w-auto cursor-text disabled:cursor-default",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _dateField.DateInput), {
                        className: "flex-1 min-w-[150px] px-3 text-sm"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _fieldButton.FieldButton), {
                        className: "w-6 mr-1 outline-offset-0",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.CalendarIcon), {
                            "aria-hidden": true,
                            className: "w-4 h-4"
                        })
                    })
                ]
            }),
            description && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.Description), {
                children: description
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.FieldError), {
                children: errorMessage
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popover.Popover), {
                className: "p-2",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _calendar.Calendar), {})
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","lucide-react":[["CalendarIcon","aV5Tu","default"]],"react":"gOP0N","../../../../dist/index.js":"dy6h5","./Calendar":"k1vgg","./DateField":"cu0ko","./Field":"bz3fV","./Popover":"1BpVT","./utils":"hW5LV","./FieldButton":"3O8BK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aV5Tu":[function(require,module,exports,__globalThis) {
/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__iconNode", ()=>__iconNode);
parcelHelpers.export(exports, "default", ()=>Calendar);
var _createLucideIconJs = require("../createLucideIcon.js");
var _createLucideIconJsDefault = parcelHelpers.interopDefault(_createLucideIconJs);
const __iconNode = [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
];
const Calendar = (0, _createLucideIconJsDefault.default)("calendar", __iconNode);

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k1vgg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Calendar", ()=>Calendar);
parcelHelpers.export(exports, "CalendarGridHeader", ()=>CalendarGridHeader);
var _jsxRuntime = require("preact/jsx-runtime");
var _lucideReact = require("lucide-react");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _tailwindVariants = require("tailwind-variants");
var _button = require("./Button");
var _utils = require("./utils");
'use client';
const cellStyles = (0, _tailwindVariants.tv)({
    extend: (0, _utils.focusRing),
    base: 'w-[calc(100cqw/7)] aspect-square text-sm cursor-default rounded-full flex items-center justify-center forced-color-adjust-none [-webkit-tap-highlight-color:transparent]',
    variants: {
        isSelected: {
            false: 'text-neutral-900 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 pressed:bg-neutral-300 dark:pressed:bg-neutral-600',
            true: 'bg-blue-600 invalid:bg-red-600 text-white forced-colors:bg-[Highlight] forced-colors:invalid:bg-[Mark] forced-colors:text-[HighlightText]'
        },
        isDisabled: {
            true: 'text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText]'
        }
    }
});
function Calendar({ errorMessage, ...props }) {
    let { direction } = (0, _indexJs.useLocale)();
    let months = props.visibleDuration?.months || 1;
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.Calendar), {
        ...props,
        className: (0, _utils.composeTailwindRenderProps)(props.className, 'flex font-sans w-full max-w-fit overflow-auto gap-3'),
        children: [
            Array.from({
                length: months
            }, (_, i)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                    className: "@container flex flex-col w-[calc(9*var(--spacing)*7)]",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)("header", {
                            className: "flex items-center mb-4",
                            children: [
                                i === 0 && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _button.Button), {
                                    variant: "quiet",
                                    slot: "previous",
                                    children: direction === 'rtl' ? /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.ChevronRight), {
                                        "aria-hidden": true,
                                        size: 18
                                    }) : /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.ChevronLeft), {
                                        "aria-hidden": true,
                                        size: 18
                                    })
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.CalendarHeading), {
                                    offset: {
                                        months: i
                                    },
                                    className: "flex-1 font-sans font-semibold [font-variation-settings:normal] text-base text-center mx-2 my-0 text-neutral-900 dark:text-neutral-200"
                                }),
                                i === months - 1 && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _button.Button), {
                                    variant: "quiet",
                                    slot: "next",
                                    children: direction === 'rtl' ? /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.ChevronLeft), {
                                        "aria-hidden": true,
                                        size: 18
                                    }) : /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.ChevronRight), {
                                        "aria-hidden": true,
                                        size: 18
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.CalendarGrid), {
                            offset: {
                                months: i
                            },
                            className: "border-spacing-0",
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)(CalendarGridHeader, {}),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.CalendarGridBody), {
                                    children: (date)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.CalendarCell), {
                                            date: date,
                                            className: cellStyles
                                        })
                                })
                            ]
                        })
                    ]
                }, i)),
            errorMessage && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Text), {
                slot: "errorMessage",
                className: "text-sm text-red-600",
                children: errorMessage
            })
        ]
    });
}
function CalendarGridHeader() {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.CalendarGridHeader), {
        children: (day)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.CalendarHeaderCell), {
                className: "text-xs text-neutral-500 font-semibold",
                children: day
            })
    });
}

},{"preact/jsx-runtime":"b2Fbn","lucide-react":[["ChevronLeft","i0Xp4","default"],["ChevronRight","cLIr3","default"]],"react":"gOP0N","../../../../dist/index.js":"dy6h5","tailwind-variants":"1lG2r","./Button":"b3qGI","./utils":"hW5LV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"i0Xp4":[function(require,module,exports,__globalThis) {
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

},{"../createLucideIcon.js":"i3cDK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cu0ko":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DateField", ()=>DateField);
parcelHelpers.export(exports, "DateInput", ()=>DateInput);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _tailwindVariants = require("tailwind-variants");
var _field = require("./Field");
var _utils = require("./utils");
'use client';
function DateField({ label, description, errorMessage, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.DateField), {
        ...props,
        className: (0, _utils.composeTailwindRenderProps)(props.className, 'flex flex-col gap-1'),
        children: [
            label && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.Label), {
                children: label
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(DateInput, {}),
            description && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.Description), {
                children: description
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.FieldError), {
                children: errorMessage
            })
        ]
    });
}
const segmentStyles = (0, _tailwindVariants.tv)({
    base: 'inline p-0.5 whitespace-nowrap type-literal:p-0 rounded-xs outline outline-0 forced-color-adjust-none caret-transparent text-neutral-800 dark:text-neutral-200 forced-colors:text-[ButtonText] [-webkit-tap-highlight-color:transparent]',
    variants: {
        isPlaceholder: {
            true: 'text-neutral-600 dark:text-neutral-400'
        },
        isDisabled: {
            true: 'text-neutral-200 dark:text-neutral-600 forced-colors:text-[GrayText]'
        },
        isFocused: {
            true: 'bg-blue-600 text-white dark:text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]'
        }
    }
});
function DateInput(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.DateInput), {
        className: (renderProps)=>(0, _field.fieldGroupStyles)({
                ...renderProps,
                class: 'inline min-w-[150px] px-3 h-9 text-sm leading-8.5 font-sans cursor-text disabled:cursor-default whitespace-nowrap overflow-x-auto [scrollbar-width:none]'
            }),
        ...props,
        children: (segment)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.DateSegment), {
                segment: segment,
                className: segmentStyles
            })
    });
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../../dist/index.js":"dy6h5","tailwind-variants":"1lG2r","./Field":"bz3fV","./utils":"hW5LV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3aucU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DropZone", ()=>DropZone);
parcelHelpers.export(exports, "Text", ()=>(0, _indexJs.Text));
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _tailwindVariants = require("tailwind-variants");
'use client';
const dropZone = (0, _tailwindVariants.tv)({
    base: 'flex items-center justify-center p-8 min-h-24 w-[30%] font-sans text-base text-balance text-center rounded-lg border border-1 border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900',
    variants: {
        isFocusVisible: {
            true: 'outline outline-2 -outline-offset-1 outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight]'
        },
        isDropTarget: {
            true: 'bg-blue-200 dark:bg-blue-800 outline outline-2 -outline-offset-1 outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight]'
        }
    }
});
function DropZone(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.DropZone), {
        ...props,
        className: (0, _indexJs.composeRenderProps)(props.className, (className, renderProps)=>dropZone({
                ...renderProps,
                className
            }))
    });
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../../dist/index.js":"dy6h5","tailwind-variants":"1lG2r","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ee3b8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Form", ()=>Form);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _tailwindMerge = require("tailwind-merge");
'use client';
function Form(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Form), {
        ...props,
        className: (0, _tailwindMerge.twMerge)('flex flex-col gap-6', props.className)
    });
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../../dist/index.js":"dy6h5","tailwind-merge":"iets0","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bqUuX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Select", ()=>Select);
parcelHelpers.export(exports, "SelectItem", ()=>SelectItem);
parcelHelpers.export(exports, "SelectSection", ()=>SelectSection);
var _jsxRuntime = require("preact/jsx-runtime");
var _lucideReact = require("lucide-react");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _tailwindVariants = require("tailwind-variants");
var _field = require("./Field");
var _listBox = require("./ListBox");
var _popover = require("./Popover");
var _utils = require("./utils");
'use client';
const styles = (0, _tailwindVariants.tv)({
    extend: (0, _utils.focusRing),
    base: 'flex items-center text-start gap-4 w-full font-sans border border-black/10 dark:border-white/10 cursor-default rounded-lg pl-3 pr-2 h-9 min-w-[180px] transition bg-neutral-50 dark:bg-neutral-700 [-webkit-tap-highlight-color:transparent]',
    variants: {
        isDisabled: {
            false: 'text-neutral-800 dark:text-neutral-300 hover:bg-neutral-100 pressed:bg-neutral-200 dark:hover:bg-neutral-600 dark:pressed:bg-neutral-500 group-invalid:outline group-invalid:outline-red-600 forced-colors:group-invalid:outline-[Mark]',
            true: 'border-transparent dark:border-transparent text-neutral-200 dark:text-neutral-600 forced-colors:text-[GrayText] bg-neutral-100 dark:bg-neutral-800'
        }
    }
});
function Select({ label, description, errorMessage, children, items, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.Select), {
        ...props,
        className: (0, _utils.composeTailwindRenderProps)(props.className, 'group flex flex-col gap-1 relative font-sans'),
        children: [
            label && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.Label), {
                children: label
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.Button), {
                className: styles,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.SelectValue), {
                        className: "flex-1 text-sm",
                        children: ({ selectedText, defaultChildren })=>selectedText || defaultChildren
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _lucideReact.ChevronDown), {
                        "aria-hidden": true,
                        className: "w-4 h-4 text-neutral-600 dark:text-neutral-400 forced-colors:text-[ButtonText] group-disabled:text-neutral-200 dark:group-disabled:text-neutral-600 forced-colors:group-disabled:text-[GrayText]"
                    })
                ]
            }),
            description && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.Description), {
                children: description
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.FieldError), {
                children: errorMessage
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popover.Popover), {
                className: "min-w-(--trigger-width)",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.ListBox), {
                    items: items,
                    className: "outline-hidden box-border p-1 max-h-[inherit] overflow-auto [clip-path:inset(0_0_0_0_round_.75rem)]",
                    children: children
                })
            })
        ]
    });
}
function SelectItem(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _listBox.DropdownItem), {
        ...props
    });
}
function SelectSection(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _listBox.DropdownSection), {
        ...props
    });
}

},{"preact/jsx-runtime":"b2Fbn","lucide-react":[["ChevronDown","l8XHX","default"]],"react":"gOP0N","../../../../dist/index.js":"dy6h5","tailwind-variants":"1lG2r","./Field":"bz3fV","./ListBox":"9VDWP","./Popover":"1BpVT","./utils":"hW5LV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"b8NCc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TextField", ()=>TextField);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _tailwindVariants = require("tailwind-variants");
var _field = require("./Field");
var _utils = require("./utils");
'use client';
const inputStyles = (0, _tailwindVariants.tv)({
    extend: (0, _utils.focusRing),
    base: 'border-1 rounded-lg min-h-9 font-sans text-sm py-0 px-3 box-border transition',
    variants: {
        isFocused: (0, _field.fieldBorderStyles).variants.isFocusWithin,
        isInvalid: (0, _field.fieldBorderStyles).variants.isInvalid,
        isDisabled: (0, _field.fieldBorderStyles).variants.isDisabled
    }
});
function TextField({ label, description, errorMessage, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _indexJs.TextField), {
        ...props,
        className: (0, _utils.composeTailwindRenderProps)(props.className, 'flex flex-col gap-1 font-sans'),
        children: [
            label && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.Label), {
                children: label
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.Input), {
                className: inputStyles
            }),
            description && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.Description), {
                children: description
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _field.FieldError), {
                children: errorMessage
            })
        ]
    });
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../../dist/index.js":"dy6h5","tailwind-variants":"1lG2r","./Field":"bz3fV","./utils":"hW5LV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jJJof":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* Rendered on mobile in place of the PlantTable */ parcelHelpers.export(exports, "PlantList", ()=>PlantList);
var _jsxRuntime = require("preact/jsx-runtime");
var _gridList = require("../../tailwind/src/GridList");
var _plantActionMenu = require("./PlantActionMenu");
'use client';
function PlantList(props) {
    let { items, onFavoriteChange, onEdit, onDelete } = props;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _gridList.GridList), {
        "aria-label": "My plants",
        selectionMode: "multiple",
        items: items,
        renderEmptyState: ()=>'No results. Try changing the filters.',
        className: "h-[320px] w-full md:!hidden",
        children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _gridList.GridListItem), {
                textValue: item.common_name,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                    className: "grid grid-cols-[40px_1fr_auto] gap-x-2 w-full",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("img", {
                            alt: "",
                            src: item.default_image?.thumbnail,
                            className: "inline rounded-sm row-span-2 object-contain h-[40px]"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                            className: "truncate capitalize",
                            children: item.common_name
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                            className: "truncate text-xs text-gray-600 dark:text-zinc-400 col-start-2 row-start-2",
                            children: item.scientific_name
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _plantActionMenu.PlantActionMenu), {
                            item: item,
                            onFavoriteChange: onFavoriteChange,
                            onEdit: onEdit,
                            onDelete: onDelete
                        })
                    ]
                })
            })
    });
}

},{"preact/jsx-runtime":"b2Fbn","../../tailwind/src/GridList":"b7m20","./PlantActionMenu":"e2yhA","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"b7m20":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GridList", ()=>GridList);
parcelHelpers.export(exports, "GridListItem", ()=>GridListItem);
parcelHelpers.export(exports, "GridListHeader", ()=>GridListHeader);
var _jsxRuntime = require("preact/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _indexJs = require("../../../../dist/index.js");
var _tailwindVariants = require("tailwind-variants");
var _checkbox = require("./Checkbox");
var _utils = require("./utils");
var _tailwindMerge = require("tailwind-merge");
'use client';
function GridList({ children, ...props }) {
    let isHorizontal = props.orientation === 'horizontal';
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.GridList), {
        ...props,
        className: (0, _utils.composeTailwindRenderProps)(props.className, isHorizontal ? 'flex flex-row flex-nowrap overflow-x-auto relative w-full max-w-[500px] bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg font-sans empty:flex empty:items-center empty:justify-center empty:italic empty:text-sm' : 'overflow-auto w-[200px] relative bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg font-sans empty:flex empty:items-center empty:justify-center empty:italic empty:text-sm'),
        children: children
    });
}
const itemStyles = (0, _tailwindVariants.tv)({
    extend: (0, _utils.focusRing),
    base: [
        'relative flex gap-3 cursor-default select-none py-2 px-3 text-sm text-neutral-900 dark:text-neutral-200 border-transparent -outline-offset-2',
        '[[data-orientation=vertical]_&]:border-t [[data-orientation=vertical]_&]:dark:border-t-neutral-700 [[data-orientation=vertical]_&]:first:border-t-0 [[data-orientation=vertical]_&]:first:rounded-t-lg [[data-orientation=vertical]_&]:last:rounded-b-lg',
        '[[data-orientation=horizontal]_&]:border-l [[data-orientation=horizontal]_&]:dark:border-l-neutral-700 [[data-orientation=horizontal]_&]:first:border-l-0 [[data-orientation=horizontal]_&]:first:rounded-s-lg [[data-orientation=horizontal]_&]:last:rounded-e-lg [[data-orientation=horizontal]_&]:flex-shrink-0'
    ].join(' '),
    variants: {
        isSelected: {
            false: 'hover:bg-neutral-100 pressed:bg-neutral-100 dark:hover:bg-neutral-700/60 dark:pressed:bg-neutral-700/60',
            true: [
                'bg-blue-100 dark:bg-blue-700/30 hover:bg-blue-200 pressed:bg-blue-200 dark:hover:bg-blue-700/40 dark:pressed:bg-blue-700/40 z-20',
                '[[data-orientation=vertical]_&]:border-y-blue-200 [[data-orientation=vertical]_&]:dark:border-y-blue-900',
                '[[data-orientation=horizontal]_&]:border-x-blue-200 [[data-orientation=horizontal]_&]:dark:border-x-blue-900 '
            ].join(' ')
        },
        isDisabled: {
            true: 'text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText] z-10'
        }
    }
});
function GridListItem({ children, ...props }) {
    let textValue = typeof children === 'string' ? children : undefined;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.GridListItem), {
        textValue: textValue,
        ...props,
        className: itemStyles,
        children: (0, _indexJs.composeRenderProps)(children, (children, { selectionMode, selectionBehavior, allowsDragging })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                children: [
                    allowsDragging && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.Button), {
                        slot: "drag",
                        children: "\u2261"
                    }),
                    selectionMode !== 'none' && selectionBehavior === 'toggle' && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _checkbox.Checkbox), {
                        slot: "selection"
                    }),
                    children
                ]
            }))
    });
}
function GridListHeader({ children, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _indexJs.GridListHeader), {
        ...props,
        className: (0, _tailwindMerge.twMerge)('text-sm font-semibold text-neutral-500 dark:text-neutral-300 px-4 py-1 -mt-px z-10 bg-neutral-100/60 dark:bg-neutral-700/60 backdrop-blur-md supports-[-moz-appearance:none]:bg-neutral-100 border-y border-y-neutral-200 dark:border-y-neutral-700', props.className),
        children: children
    });
}

},{"preact/jsx-runtime":"b2Fbn","react":"gOP0N","../../../../dist/index.js":"dy6h5","tailwind-variants":"1lG2r","./Checkbox":"14vxJ","./utils":"hW5LV","tailwind-merge":"iets0","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5gQI0":[function(require,module,exports,__globalThis) {
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

