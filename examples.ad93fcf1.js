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
})({"h5Upz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _jsxRuntime = require("preact/jsx-runtime");
var _compat = require("preact/compat");
var _compatDefault = parcelHelpers.interopDefault(_compat);
var _preact = require("preact");
var _indexJs = require("../dist/index.js");
var _priority = require("./priority");
var _catalog = require("./catalog");
var _showcase = require("./showcase");
var _styleCss = require("./style.css");
var _showcaseCss = require("./showcase.css");
class Boundary extends (0, _compat.Component) {
    state = {
        error: null
    };
    componentDidCatch(error) {
        this.setState({
            error: String(error)
        });
    }
    render(props, state) {
        return state.error ? /*#__PURE__*/ (0, _jsxRuntime.jsx)("pre", {
            "data-testid": "error",
            children: state.error
        }) : props.children;
    }
}
const examples = {
    ...(0, _priority.priority),
    ...(0, _catalog.catalog)
};
const name = new URLSearchParams(location.search).get('example') || 'menu';
const Example = examples[name];
Object.assign(window, {
    __coverage: {
        ...(0, _priority.priorityCoverage),
        ...(0, _catalog.catalogCoverage)
    },
    __examples: Object.keys(examples),
    __showcases: Object.keys((0, _showcase.showcases))
});
function App() {
    const Showcase = (0, _showcase.showcases)[name];
    const [view, setView] = (0, _compat.useState)(Showcase && new URLSearchParams(location.search).get('view') === 'showcase' ? 'showcase' : 'basic');
    const changeView = (key)=>{
        setView(key);
        const url = new URL(location.href);
        if (key === 'showcase') url.searchParams.set('view', 'showcase');
        else url.searchParams.delete('view');
        history.replaceState(null, '', url);
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        className: "app-shell",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("header", {
                className: "site-header",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                className: "site-title",
                                children: "Preact Aria"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                children: "Interactive component examples"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "header-actions",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", {
                                className: "skip-link",
                                href: "#example",
                                children: "Skip to example"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: "version-badge",
                                children: "Preact 11"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "workspace",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("aside", {
                        className: "sidebar",
                        "aria-labelledby": "components-title",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("h2", {
                                id: "components-title",
                                children: "Components"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("nav", {
                                "aria-label": "Examples",
                                children: Object.keys(examples).map((key)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("a", {
                                        href: `?example=${key}${view === 'showcase' && (0, _showcase.showcases)[key] ? '&view=showcase' : ''}`,
                                        "aria-current": key === name ? 'page' : undefined,
                                        children: [
                                            key,
                                            (0, _showcase.showcases)[key] && /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                                className: "showcase-dot",
                                                "aria-hidden": "true"
                                            })
                                        ]
                                    }))
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("p", {
                                className: "sidebar-legend",
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                        className: "showcase-dot"
                                    }),
                                    " Showcase available"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("main", {
                        id: "example",
                        className: "demo",
                        tabIndex: -1,
                        "aria-labelledby": "example-title",
                        "data-example": name,
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("h1", {
                                id: "example-title",
                                children: [
                                    name,
                                    " \u2014 Preact 11"
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Tabs, {
                                selectedKey: view,
                                onSelectionChange: changeView,
                                className: "example-views",
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TabList, {
                                        "aria-label": "Example view",
                                        className: "view-tabs",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Tab, {
                                                id: "basic",
                                                children: "Basic tests"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Tab, {
                                                id: "showcase",
                                                isDisabled: !Showcase,
                                                children: "Showcase"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TabPanel, {
                                        id: "basic",
                                        className: "demo-content",
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(Boundary, {
                                            children: Example ? /*#__PURE__*/ (0, _jsxRuntime.jsx)(Example, {}) : /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                                children: "Unknown example"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TabPanel, {
                                        id: "showcase",
                                        className: "demo-content showcase",
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(Boundary, {
                                            children: Showcase && /*#__PURE__*/ (0, _jsxRuntime.jsx)(Showcase, {})
                                        })
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
(0, _preact.render)(/*#__PURE__*/ (0, _jsxRuntime.jsx)(App, {}), document.getElementById('app'));

},{"preact/jsx-runtime":"b2Fbn","preact/compat":"8RhID","preact":"h65yd","../dist/index.js":"dy6h5","./priority":"fA4C5","./catalog":"6447L","./showcase":"8wXqt","./style.css":"9x8Uy","./showcase.css":"8aUDS","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fA4C5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "priorityCoverage", ()=>priorityCoverage);
parcelHelpers.export(exports, "MenuExample", ()=>MenuExample);
parcelHelpers.export(exports, "PopoverExample", ()=>PopoverExample);
parcelHelpers.export(exports, "SelectExample", ()=>SelectExample);
parcelHelpers.export(exports, "ComboBoxExample", ()=>ComboBoxExample);
parcelHelpers.export(exports, "DragExample", ()=>DragExample);
parcelHelpers.export(exports, "CalendarParts", ()=>CalendarParts);
parcelHelpers.export(exports, "DatePickerExample", ()=>DatePickerExample);
parcelHelpers.export(exports, "priority", ()=>priority);
var _jsxRuntime = require("preact/jsx-runtime");
var _compat = require("preact/compat");
var _compatDefault = parcelHelpers.interopDefault(_compat);
var _indexJs = require("../dist/index.js");
var _date = require("@internationalized/date");
const priorityCoverage = {
    menu: [
        'MenuTrigger',
        'Menu',
        'MenuItem',
        'MenuSection',
        'SubmenuTrigger',
        'Keyboard',
        'Separator',
        'Header'
    ],
    popover: [
        'DialogTrigger',
        'Popover',
        'Dialog',
        'Heading',
        'OverlayArrow'
    ],
    select: [
        'Select',
        'SelectValue',
        'ListBox',
        'ListBoxItem',
        'ListBoxSection',
        'Label'
    ],
    combobox: [
        'ComboBox',
        'ComboBoxValue',
        'Input',
        'Button'
    ],
    dnd: [
        'GridList',
        'GridListItem',
        'DropIndicator',
        'DropZone'
    ],
    datepicker: [
        'DatePicker',
        'Group',
        'DateInput',
        'DateSegment',
        'Calendar',
        'CalendarGrid',
        'CalendarGridHeader',
        'CalendarGridBody',
        'CalendarHeaderCell',
        'CalendarCell',
        'Text'
    ]
};
function Result({ children }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("output", {
        "data-testid": "result",
        children: children
    });
}
function MenuExample() {
    const [action, setAction] = (0, _compat.useState)('none');
    const [selected, setSelected] = (0, _compat.useState)(new Set());
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.MenuTrigger, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                        children: "Actions"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Popover, {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Menu, {
                            "aria-label": "Actions",
                            onAction: (key)=>setAction(String(key)),
                            disabledKeys: [
                                'delete'
                            ],
                            selectionMode: "multiple",
                            selectedKeys: selected,
                            onSelectionChange: setSelected,
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.MenuSection, {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Header, {
                                            children: "Edit"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.MenuItem, {
                                            id: "copy",
                                            textValue: "Copy",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Text, {
                                                    slot: "label",
                                                    children: "Copy"
                                                }),
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Keyboard, {
                                                    children: "Ctrl+C"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.MenuItem, {
                                            id: "paste",
                                            children: "Paste"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.MenuItem, {
                                            id: "delete",
                                            children: "Delete"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Separator, {}),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.SubmenuTrigger, {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.MenuItem, {
                                            id: "share",
                                            children: "Share"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Popover, {
                                            children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Menu, {
                                                "aria-label": "Share",
                                                onAction: (key)=>setAction(String(key)),
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.MenuItem, {
                                                        id: "email",
                                                        children: "Email"
                                                    }),
                                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.MenuItem, {
                                                        id: "link",
                                                        children: "Copy link"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Result, {
                children: [
                    action,
                    "; selected:",
                    [
                        ...selected
                    ].join(',')
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                children: "Outside"
            })
        ]
    });
}
function PopoverExample() {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.DialogTrigger, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                        children: "Open popover"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Popover, {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.OverlayArrow, {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("svg", {
                                    width: "12",
                                    height: "12",
                                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                                        d: "M0 0 L6 6 L12 0"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Dialog, {
                                children: ({ close })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Heading, {
                                                slot: "title",
                                                children: "Popover details"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Input, {
                                                "aria-label": "Inside popover"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                                onPress: close,
                                                children: "Close"
                                            })
                                        ]
                                    })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                children: "Outside"
            })
        ]
    });
}
const fruits = [
    {
        id: 'apple',
        name: 'Apple'
    },
    {
        id: 'banana',
        name: 'Banana'
    },
    {
        id: 'cherry',
        name: 'Cherry'
    }
];
function SelectExample() {
    const [selected, setSelected] = (0, _compat.useState)(null);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Select, {
                selectedKey: selected,
                onSelectionChange: setSelected,
                name: "fruit",
                disabledKeys: [
                    'cherry'
                ],
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Fruit"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.SelectValue, {})
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Popover, {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ListBox, {
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.ListBoxSection, {
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Header, {
                                        children: "Fruit options"
                                    }),
                                    fruits.map((f)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ListBoxItem, {
                                            id: f.id,
                                            children: f.name
                                        }))
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: selected || 'none'
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                children: "Outside"
            })
        ]
    });
}
function ComboBoxExample() {
    const [selected, setSelected] = (0, _compat.useState)(null);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.ComboBox, {
                defaultItems: fruits,
                selectedKey: selected,
                onSelectionChange: setSelected,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Fruit"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Input, {}),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                        children: "Show fruits"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Popover, {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ListBox, {
                            children: (f)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ListBoxItem, {
                                    id: f.id,
                                    children: f.name
                                })
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ComboBoxValue, {
                        children: ({ selectedItems })=>selectedItems[0]?.name || 'none'
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: selected || 'none'
            })
        ]
    });
}
function DragExample() {
    const list = _indexJs.useListData({
        initialItems: fruits
    });
    const [dropped, setDropped] = (0, _compat.useState)('none');
    const { dragAndDropHooks } = _indexJs.useDragAndDrop({
        getItems: (keys)=>[
                ...keys
            ].map((key)=>({
                    'text/plain': list.getItem(key).name
                })),
        onReorder: (e)=>e.target.dropPosition === 'before' ? list.moveBefore(e.target.key, e.keys) : list.moveAfter(e.target.key, e.keys),
        renderDropIndicator: (target)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DropIndicator, {
                target: target
            })
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.GridList, {
                "aria-label": "Reorder fruit",
                items: list.items,
                dragAndDropHooks: dragAndDropHooks,
                selectionMode: "multiple",
                children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.GridListItem, {
                        id: item.id,
                        textValue: item.name,
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                slot: "drag",
                                "aria-label": `Drag ${item.name}`,
                                children: "\u2195"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Checkbox, {
                                slot: "selection"
                            }),
                            item.name
                        ]
                    })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DropZone, {
                "aria-label": "Drop fruit",
                onDrop: async (e)=>{
                    const item = e.items.find(_indexJs.isTextDropItem);
                    if (item) setDropped(await item.getText('text/plain'));
                },
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Text, {
                    slot: "label",
                    children: "Drop fruit here"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Result, {
                children: [
                    list.items.map((x)=>x.name).join(','),
                    "; dropped:",
                    dropped
                ]
            })
        ]
    });
}
function CalendarParts() {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("header", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                        slot: "previous",
                        children: "Previous"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Heading, {}),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                        slot: "next",
                        children: "Next"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.CalendarGrid, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.CalendarGridHeader, {
                        children: (day)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.CalendarHeaderCell, {
                                children: day
                            })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.CalendarGridBody, {
                        children: (date)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.CalendarCell, {
                                date: date
                            })
                    })
                ]
            })
        ]
    });
}
function DatePickerExample() {
    const [value, setValue] = (0, _compat.useState)(new (0, _date.CalendarDate)(2026, 10, 1));
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.DatePicker, {
                value: value,
                onChange: setValue,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Appointment"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Group, {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DateInput, {
                                children: (segment)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DateSegment, {
                                        segment: segment
                                    })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                children: "Choose date"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Text, {
                        slot: "description",
                        children: "Pick an appointment date."
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Popover, {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Dialog, {
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Calendar, {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(CalendarParts, {})
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: value?.toString() || 'none'
            })
        ]
    });
}
const priority = {
    menu: MenuExample,
    popover: PopoverExample,
    select: SelectExample,
    combobox: ComboBoxExample,
    dnd: DragExample,
    datepicker: DatePickerExample
};

},{"preact/jsx-runtime":"b2Fbn","preact/compat":"8RhID","../dist/index.js":"dy6h5","@internationalized/date":"j8NRQ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6447L":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "catalogCoverage", ()=>catalogCoverage);
parcelHelpers.export(exports, "catalog", ()=>catalog);
var _jsxRuntime = require("preact/jsx-runtime");
var _compat = require("preact/compat");
var _compatDefault = parcelHelpers.interopDefault(_compat);
var _indexJs = require("../dist/index.js");
var _date = require("@internationalized/date");
var _priority = require("./priority");
const catalogCoverage = {};
const catalog = {};
function add(name, components, render) {
    catalog[name] = render;
    catalogCoverage[name] = components.split(' ');
}
const Result = ({ children })=>/*#__PURE__*/ (0, _jsxRuntime.jsx)("output", {
        "data-testid": "result",
        children: String(children)
    });
const items = [
    {
        id: 'a',
        name: 'Alpha'
    },
    {
        id: 'b',
        name: 'Beta'
    },
    {
        id: 'c',
        name: 'Gamma'
    }
];
add('button', 'Button', ()=>{
    const [n, set] = (0, _compat.useState)(0);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                onPress: ()=>set(n + 1),
                children: "Press"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                isDisabled: true,
                children: "Disabled"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: n
            })
        ]
    });
});
add('toggle', 'ToggleButton ToggleButtonGroup SelectionIndicator', ()=>{
    const [keys, set] = (0, _compat.useState)(new Set());
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ToggleButton, {
                children: "Independent toggle"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.ToggleButtonGroup, {
                selectionMode: "single",
                selectedKeys: keys,
                onSelectionChange: set,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.ToggleButton, {
                        id: "a",
                        children: [
                            "Bold",
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.SelectionIndicator, {})
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.ToggleButton, {
                        id: "b",
                        children: [
                            "Italic",
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.SelectionIndicator, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: [
                    ...keys
                ].join(',')
            })
        ]
    });
});
add('checkbox', 'Checkbox CheckboxGroup CheckboxField CheckboxButton', ()=>{
    const [values, set] = (0, _compat.useState)([]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Checkbox, {
                children: "Independent checkbox"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.CheckboxGroup, {
                value: values,
                onChange: set,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Options"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Checkbox, {
                        value: "a",
                        children: "Alpha"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.CheckboxField, {
                        value: "b",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.CheckboxButton, {
                                children: "Beta"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Text, {
                                slot: "description",
                                children: "Button composition"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: values.join(',')
            })
        ]
    });
});
add('radio', 'RadioGroup Radio RadioField RadioButton', ()=>{
    const [v, set] = (0, _compat.useState)('a');
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.RadioGroup, {
                value: v,
                onChange: set,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Options"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Radio, {
                        value: "a",
                        children: "Alpha"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.RadioField, {
                        value: "b",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.RadioButton, {
                            children: "Beta"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: v
            })
        ]
    });
});
add('switch', 'Switch SwitchField SwitchButton', ()=>{
    const [v, set] = (0, _compat.useState)(false);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Switch, {
                children: "Independent switch"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.SwitchField, {
                isSelected: v,
                onChange: set,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.SwitchButton, {
                    children: "Notifications"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: v
            })
        ]
    });
});
add('textfield', 'TextField Input Label Text FieldError', ()=>{
    const [v, set] = (0, _compat.useState)('');
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TextField, {
                value: v,
                onChange: set,
                isRequired: true,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Name"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Input, {}),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Text, {
                        slot: "description",
                        children: "Enter your name."
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.FieldError, {})
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: v
            })
        ]
    });
});
add('textarea', 'TextArea', ()=>{
    const [v, set] = (0, _compat.useState)('');
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TextField, {
                value: v,
                onChange: set,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Notes"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TextArea, {})
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: v
            })
        ]
    });
});
add('search', 'SearchField', ()=>{
    const [v, set] = (0, _compat.useState)('');
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.SearchField, {
                value: v,
                onChange: set,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Search"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Input, {}),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                        children: "Clear"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: v
            })
        ]
    });
});
add('number', 'NumberField Group', ()=>{
    const [v, set] = (0, _compat.useState)(5);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.NumberField, {
                value: v,
                onChange: set,
                minValue: 0,
                maxValue: 10,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Quantity"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Group, {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                slot: "decrement",
                                children: "Decrease"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Input, {}),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                slot: "increment",
                                children: "Increase"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: v
            })
        ]
    });
});
add('slider', 'Slider SliderTrack SliderThumb SliderFill SliderOutput', ()=>{
    const [v, set] = (0, _compat.useState)(40);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Slider, {
                value: v,
                onChange: set,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Volume"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.SliderOutput, {}),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.SliderTrack, {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.SliderFill, {}),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.SliderThumb, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: v
            })
        ]
    });
});
add('meter', 'Meter ProgressBar', ()=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Meter, {
                value: 50,
                children: ({ percentage, valueText })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                                children: "Storage"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: "meter-value",
                                children: valueText
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                className: "meter-track",
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                    className: "meter-fill",
                                    style: {
                                        width: `${percentage}%`
                                    }
                                })
                            })
                        ]
                    })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ProgressBar, {
                value: 25,
                children: ({ percentage })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                                children: "Loading"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("span", {
                                className: "meter-value",
                                children: [
                                    percentage,
                                    "%"
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                className: "meter-track",
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                    className: "meter-fill",
                                    style: {
                                        width: `${percentage}%`
                                    }
                                })
                            })
                        ]
                    })
            })
        ]
    }));
add('tabs', 'Tabs TabList Tab TabPanels TabPanel', ()=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Tabs, {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TabList, {
                "aria-label": "Sections",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Tab, {
                        id: "a",
                        children: "Alpha"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Tab, {
                        id: "b",
                        children: "Beta"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TabPanels, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TabPanel, {
                        id: "a",
                        children: "Alpha content"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TabPanel, {
                        id: "b",
                        children: "Beta content"
                    })
                ]
            })
        ]
    }));
add('disclosure', 'Disclosure DisclosureGroup DisclosurePanel Heading', ()=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.DisclosureGroup, {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Disclosure, {
                id: "a",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Heading, {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                            slot: "trigger",
                            children: "Alpha details"
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DisclosurePanel, {
                        children: "Alpha panel"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Disclosure, {
                id: "b",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Heading, {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                            slot: "trigger",
                            children: "Beta details"
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DisclosurePanel, {
                        children: "Beta panel"
                    })
                ]
            })
        ]
    }));
add('modal', 'Modal ModalOverlay Dialog DialogTrigger', ()=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.DialogTrigger, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                        children: "Open modal"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ModalOverlay, {
                        isDismissable: true,
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Modal, {
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Dialog, {
                                children: ({ close })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Heading, {
                                                slot: "title",
                                                children: "Modal details"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Input, {
                                                "aria-label": "Inside modal"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                                onPress: close,
                                                children: "Close"
                                            })
                                        ]
                                    })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                children: "Outside"
            })
        ]
    }));
add('tooltip', 'Tooltip TooltipTrigger', ()=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TooltipTrigger, {
        delay: 0,
        closeDelay: 0,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                children: "Help"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Tooltip, {
                children: "Helpful description"
            })
        ]
    }));
add('preview', 'PreviewTrigger', ()=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.PreviewTrigger, {
        delay: 0,
        closeDelay: 0,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                children: "Preview"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Popover, {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Dialog, {
                    "aria-label": "Preview details",
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                        children: "Inside preview"
                    })
                })
            })
        ]
    }));
add('breadcrumbs', 'Breadcrumbs Breadcrumb Link', ()=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Breadcrumbs, {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Breadcrumb, {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Link, {
                    href: "#home",
                    children: "Home"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Breadcrumb, {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Link, {
                    href: "#current",
                    children: "Current"
                })
            })
        ]
    }));
add('toolbar', 'Toolbar', ()=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Toolbar, {
        "aria-label": "Formatting",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                children: "Cut"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ToggleButton, {
                children: "Bold"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Separator, {
                orientation: "vertical"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                children: "Paste"
            })
        ]
    }));
add('listbox', 'ListBox ListBoxItem ListBoxSection Collection DefaultCollectionRenderer CollectionBuilder', ()=>{
    const [keys, set] = (0, _compat.useState)(new Set());
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ListBox, {
                "aria-label": "Options",
                selectionMode: "multiple",
                selectedKeys: keys,
                onSelectionChange: set,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.ListBoxSection, {
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Header, {
                            children: "Letters"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Collection, {
                            items: items,
                            children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ListBoxItem, {
                                    id: item.id,
                                    children: item.name
                                })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: [
                    ...keys
                ].join(',')
            })
        ]
    });
});
add('section', 'Section', ()=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ListBox, {
        "aria-label": "Legacy section",
        selectionMode: "single",
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Section, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Header, {
                    children: "Letters"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ListBoxItem, {
                    id: "a",
                    children: "Alpha"
                })
            ]
        })
    }));
add('gridlist', 'GridList GridListItem GridListHeader GridListSection', ()=>{
    const [keys, set] = (0, _compat.useState)(new Set());
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.GridList, {
                "aria-label": "Options",
                selectionMode: "multiple",
                selectedKeys: keys,
                onSelectionChange: set,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.GridListSection, {
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.GridListHeader, {
                            children: "Letters"
                        }),
                        items.map((item)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.GridListItem, {
                                id: item.id,
                                textValue: item.name,
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Checkbox, {
                                        slot: "selection"
                                    }),
                                    item.name
                                ]
                            }))
                    ]
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: [
                    ...keys
                ].join(',')
            })
        ]
    });
});
add('tags', 'TagGroup TagList Tag', ()=>{
    const list = _indexJs.useListData({
        initialItems: items
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TagGroup, {
                onRemove: (keys)=>list.remove(...keys),
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Tags"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TagList, {
                        items: list.items,
                        children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Tag, {
                                id: item.id,
                                textValue: item.name,
                                children: [
                                    item.name,
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                        slot: "remove",
                                        "aria-label": `Remove ${item.name}`,
                                        children: "\xd7"
                                    })
                                ]
                            })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: list.items.map((x)=>x.name).join(',')
            })
        ]
    });
});
function TableContent({ footer = false, loader = false }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TableHeader, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Column, {
                        id: "name",
                        isRowHeader: true,
                        allowsSorting: true,
                        defaultWidth: 180,
                        children: [
                            "Name",
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColumnResizer, {
                                "aria-label": "Resize Name"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Column, {
                        id: "value",
                        defaultWidth: 180,
                        children: [
                            "Value",
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColumnResizer, {
                                "aria-label": "Resize Value"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TableBody, {
                children: [
                    items.map((item, i)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Row, {
                            id: item.id,
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Cell, {
                                    children: item.name
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Cell, {
                                    children: i + 1
                                })
                            ]
                        })),
                    loader && /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TableLoadMoreItem, {
                        isLoading: true,
                        children: "Loading table"
                    })
                ]
            }),
            footer && /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TableFooter, {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Row, {
                    id: "footer",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Cell, {
                            children: "Total"
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Cell, {
                            children: "6"
                        })
                    ]
                })
            })
        ]
    });
}
add('table', 'Table Row Cell Column ColumnResizer TableHeader TableBody ResizableTableContainer TableFooter', ()=>{
    const [sort, set] = (0, _compat.useState)({
        column: 'name',
        direction: 'ascending'
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ResizableTableContainer, {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Table, {
                    "aria-label": "Letters",
                    selectionMode: "single",
                    sortDescriptor: sort,
                    onSortChange: set,
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableContent, {
                        footer: true
                    })
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: sort.direction
            })
        ]
    });
});
add('tree', 'Tree TreeItem TreeItemContent TreeHeader TreeSection', ()=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Tree, {
        "aria-label": "Folders",
        selectionMode: "single",
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TreeSection, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TreeHeader, {
                    children: "Files"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TreeItem, {
                    id: "folder",
                    textValue: "Folder",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TreeItemContent, {
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                    slot: "chevron",
                                    "aria-label": "Expand Folder",
                                    children: "\u25B6"
                                }),
                                "Folder"
                            ]
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TreeItem, {
                            id: "child",
                            textValue: "Child",
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TreeItemContent, {
                                children: "Child"
                            })
                        })
                    ]
                })
            ]
        })
    }));
add('navigation', 'NavigationTree NavigationTreeItem NavigationTreeItemContent NavigationTreeSection NavigationTreeHeader', ()=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.NavigationTree, {
        "aria-label": "Navigation",
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.NavigationTreeSection, {
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.NavigationTreeHeader, {
                    children: "Projects"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.NavigationTreeItem, {
                    id: "folder",
                    textValue: "Folder",
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.NavigationTreeItemContent, {
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                    slot: "chevron",
                                    "aria-label": "Expand Folder",
                                    children: "\u25B6"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Link, {
                                    href: "#folder",
                                    children: "Folder"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.NavigationTreeItem, {
                            id: "child",
                            textValue: "Child",
                            href: "#child",
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.NavigationTreeItemContent, {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Link, {
                                    children: "Child"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
add('datefield', 'DateField TimeField', ()=>{
    const [v, set] = (0, _compat.useState)(new (0, _date.CalendarDate)(2026, 10, 1));
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.DateField, {
                value: v,
                onChange: set,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Birthday"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DateInput, {
                        children: (s)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DateSegment, {
                                segment: s
                            })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TimeField, {
                defaultValue: new (0, _date.Time)(12, 30),
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Time"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DateInput, {
                        children: (s)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DateSegment, {
                                segment: s
                            })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: v?.toString()
            })
        ]
    });
});
add('daterange', 'DateRangePicker RangeCalendar', ()=>{
    const [v, set] = (0, _compat.useState)({
        start: new (0, _date.CalendarDate)(2026, 10, 1),
        end: new (0, _date.CalendarDate)(2026, 10, 3)
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.DateRangePicker, {
                value: v,
                onChange: set,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Trip"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Group, {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DateInput, {
                                slot: "start",
                                children: (s)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DateSegment, {
                                        segment: s
                                    })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                children: " \u2013 "
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DateInput, {
                                slot: "end",
                                children: (s)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DateSegment, {
                                        segment: s
                                    })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                children: "Choose range"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Popover, {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Dialog, {
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.RangeCalendar, {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _priority.CalendarParts), {})
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: `${v?.start} / ${v?.end}`
            })
        ]
    });
});
add('calendar', 'CalendarMonthPicker CalendarYearPicker CalendarHeading', ()=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Calendar, {
        "aria-label": "Date",
        defaultValue: new (0, _date.CalendarDate)(2026, 10, 1),
        minValue: new (0, _date.CalendarDate)(2020, 1, 1),
        maxValue: new (0, _date.CalendarDate)(2030, 12, 31),
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.CalendarHeading, {}),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.CalendarMonthPicker, {
                children: ({ items, value, onChange, 'aria-label': label })=>/*#__PURE__*/ (0, _jsxRuntime.jsx)("select", {
                        "aria-label": label,
                        value: value,
                        onChange: (e)=>onChange(e.currentTarget.value),
                        children: items.map((i)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                                value: i.id,
                                children: i.formatted
                            }))
                    })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.CalendarYearPicker, {
                children: ({ items, value, onChange, 'aria-label': label })=>/*#__PURE__*/ (0, _jsxRuntime.jsx)("select", {
                        "aria-label": label,
                        value: value,
                        onChange: (e)=>onChange(e.currentTarget.value),
                        children: items.map((i)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                                value: i.id,
                                children: i.formatted
                            }))
                    })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _priority.CalendarParts), {})
        ]
    }));
add('autocomplete', 'Autocomplete', ()=>{
    const [action, set] = (0, _compat.useState)('none');
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Autocomplete, {
        filter: (text, input)=>text.toLocaleLowerCase().includes(input.toLocaleLowerCase()),
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.SearchField, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Filter actions"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Input, {})
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Menu, {
                "aria-label": "Filtered actions",
                onAction: (key)=>set(String(key)),
                children: items.map((i)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.MenuItem, {
                        id: i.id,
                        children: i.name
                    }))
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: action
            })
        ]
    });
});
add('tokenfield', 'TokenField TokenInput Token', ()=>{
    const [v, set] = (0, _compat.useState)(new _indexJs.TokenFieldValue([
        {
            type: 'text',
            text: 'Hello '
        },
        {
            type: 'token',
            text: '@Ada',
            value: {
                id: 'ada'
            }
        },
        {
            type: 'text',
            text: ' '
        }
    ]));
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TokenField, {
                value: v,
                onChange: set,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Message"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TokenInput, {
                        children: (s)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Token, {
                                children: s.text
                            })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: v.toString()
            })
        ]
    });
});
add('colorfield', 'ColorField', ()=>{
    const [v, set] = (0, _compat.useState)(_indexJs.parseColor('#ff0000'));
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.ColorField, {
                value: v,
                onChange: set,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Color"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Input, {})
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: v?.toString('hex')
            })
        ]
    });
});
add('colorarea', 'ColorArea ColorThumb', ()=>{
    const [v, set] = (0, _compat.useState)(_indexJs.parseColor('hsb(0, 100%, 100%)'));
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColorArea, {
                value: v,
                onChange: set,
                xChannel: "saturation",
                yChannel: "brightness",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColorThumb, {})
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: v.toString('hsb')
            })
        ]
    });
});
add('colorslider', 'ColorSlider', ()=>{
    const [v, set] = (0, _compat.useState)(_indexJs.parseColor('hsb(0, 100%, 100%)'));
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.ColorSlider, {
                channel: "hue",
                value: v,
                onChange: set,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Hue"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.SliderOutput, {}),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.SliderTrack, {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColorThumb, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: v.toString('hsb')
            })
        ]
    });
});
add('colorwheel', 'ColorWheel ColorWheelTrack', ()=>{
    const [v, set] = (0, _compat.useState)(_indexJs.parseColor('hsb(0, 100%, 100%)'));
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.ColorWheel, {
                value: v,
                onChange: set,
                innerRadius: 90,
                outerRadius: 125,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColorWheelTrack, {}),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColorThumb, {})
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: v.toString('hsb')
            })
        ]
    });
});
add('colorswatch', 'ColorSwatch ColorSwatchPicker ColorSwatchPickerItem ColorPicker', ()=>{
    const [v, set] = (0, _compat.useState)(_indexJs.parseColor('#ff0000'));
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColorPicker, {
                value: v,
                onChange: set,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.DialogTrigger, {
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Button, {
                            children: [
                                "Choose color",
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColorSwatch, {})
                            ]
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Popover, {
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Dialog, {
                                "aria-label": "Color picker",
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.ColorSwatchPicker, {
                                    "aria-label": "Colors",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColorSwatchPickerItem, {
                                            color: "#ff0000",
                                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColorSwatch, {})
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColorSwatchPickerItem, {
                                            color: "#0000ff",
                                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColorSwatch, {})
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: v.toString('hex')
            })
        ]
    });
});
add('form', 'Form FieldError', ()=>{
    const [v, set] = (0, _compat.useState)('none');
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Form, {
                onSubmit: (e)=>{
                    e.preventDefault();
                    set(new FormData(e.currentTarget).get('email'));
                },
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TextField, {
                        name: "email",
                        type: "email",
                        isRequired: true,
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                                children: "Email"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Input, {}),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.FieldError, {})
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                        type: "submit",
                        children: "Submit"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                        type: "reset",
                        children: "Reset"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: v
            })
        ]
    });
});
add('file', 'FileTrigger', ()=>{
    const [v, set] = (0, _compat.useState)('none');
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.FileTrigger, {
                onSelect: (files)=>set(files?.[0]?.name || 'none'),
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                    children: "Upload"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: v
            })
        ]
    });
});
add('toast', 'UNSTABLE_Toast UNSTABLE_ToastRegion UNSTABLE_ToastList UNSTABLE_ToastContent', ()=>{
    const [queue] = (0, _compat.useState)(()=>new _indexJs.UNSTABLE_ToastQueue({
            maxVisibleToasts: 3
        }));
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                onPress: ()=>queue.add({
                        title: 'Saved',
                        description: 'Changes stored.'
                    }),
                children: "Notify"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.UNSTABLE_ToastRegion, {
                queue: queue,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.UNSTABLE_ToastList, {
                    children: ({ toast })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.UNSTABLE_Toast, {
                            toast: toast,
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.UNSTABLE_ToastContent, {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Text, {
                                            slot: "title",
                                            children: toast.content.title
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Text, {
                                            slot: "description",
                                            children: toast.content.description
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                    slot: "close",
                                    children: "Dismiss toast"
                                })
                            ]
                        })
                })
            })
        ]
    });
});
add('shared', 'SharedElementTransition SharedElement', ()=>{
    const [v, set] = (0, _compat.useState)(false);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                onPress: ()=>set(!v),
                children: "Move indicator"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.SharedElementTransition, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        className: "marker-slot",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.SharedElement, {
                            name: "marker",
                            isVisible: !v,
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: "marker",
                                children: "First marker"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        className: "marker-slot",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.SharedElement, {
                            name: "marker",
                            isVisible: v,
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: "marker",
                                children: "Second marker"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: v
            })
        ]
    });
});
add('providers', 'Provider SSRProvider RouterProvider I18nProvider Pressable Focusable VisuallyHidden', ()=>{
    const [v, set] = (0, _compat.useState)('none');
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.SSRProvider, {
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.I18nProvider, {
            locale: "en-US",
            children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.RouterProvider, {
                navigate: (path)=>set(path),
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Provider, {
                        values: [
                            [
                                _indexJs.ButtonContext,
                                {
                                    onPress: ()=>set('provided')
                                }
                            ]
                        ],
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                            children: "Provided button"
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Link, {
                        href: "/destination",
                        children: "Navigate"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Pressable, {
                        onPress: ()=>set('pressed'),
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                            children: "Custom pressable"
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Focusable, {
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                            children: "Custom focusable"
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.VisuallyHidden, {
                        children: "Screen reader text"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                        children: v
                    })
                ]
            })
        })
    });
});
add('loaders', 'MenuLoadMoreItem ListBoxLoadMoreItem GridListLoadMoreItem TreeLoadMoreItem TableLoadMoreItem', ()=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Menu, {
                "aria-label": "Loading menu",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.MenuItem, {
                        id: "m",
                        children: "Item"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.MenuLoadMoreItem, {
                        isLoading: true,
                        children: "Loading menu items"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.ListBox, {
                "aria-label": "Loading list",
                selectionMode: "single",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ListBoxItem, {
                        id: "l",
                        children: "Item"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ListBoxLoadMoreItem, {
                        isLoading: true,
                        children: "Loading list items"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.GridList, {
                "aria-label": "Loading grid",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.GridListItem, {
                        id: "g",
                        children: "Item"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.GridListLoadMoreItem, {
                        isLoading: true,
                        children: "Loading grid items"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Tree, {
                "aria-label": "Loading tree",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TreeItem, {
                        id: "t",
                        textValue: "Item",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TreeItemContent, {
                            children: "Item"
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TreeLoadMoreItem, {
                        isLoading: true,
                        children: "Loading tree items"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ResizableTableContainer, {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Table, {
                    "aria-label": "Loading table",
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(TableContent, {
                        loader: true
                    })
                })
            })
        ]
    }));
for (const [name, layout] of [
    [
        'virtual-list',
        _indexJs.ListLayout
    ],
    [
        'virtual-grid',
        _indexJs.GridLayout
    ],
    [
        'virtual-waterfall',
        _indexJs.WaterfallLayout
    ]
])add(name, 'Virtualizer', ()=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Virtualizer, {
        layout: layout,
        layoutOptions: {
            rowHeight: 40,
            itemSize: new _indexJs.Size(160, 60)
        },
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ListBox, {
            "aria-label": "Virtual options",
            selectionMode: "single",
            items: Array.from({
                length: 100
            }, (_, i)=>({
                    id: i,
                    name: `Item ${i}`
                })),
            style: {
                height: 240,
                overflow: 'auto'
            },
            children: (i)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ListBoxItem, {
                    id: i.id,
                    children: i.name
                })
        })
    }));
add('virtual-table', 'Virtualizer', ()=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Virtualizer, {
        layout: _indexJs.TableLayout,
        layoutOptions: {
            rowHeight: 40,
            headingHeight: 40
        },
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Table, {
            "aria-label": "Virtual table",
            style: {
                height: 240,
                overflow: 'auto'
            },
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TableHeader, {
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Column, {
                        isRowHeader: true,
                        id: "name",
                        children: "Name"
                    })
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TableBody, {
                    items: Array.from({
                        length: 100
                    }, (_, i)=>({
                            id: i,
                            name: `Item ${i}`
                        })),
                    children: (i)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Row, {
                            id: i.id,
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Cell, {
                                children: i.name
                            })
                        })
                })
            ]
        })
    }));
function NativeRefButton({ ref, ...props }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
        ...props,
        ref: ref
    });
}
add('refs', 'Pressable Focusable', ()=>{
    const pressRef = (0, _compat.useRef)(null), focusRef = (0, _compat.useRef)(null);
    const [value, set] = (0, _compat.useState)('none');
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Pressable, {
                onPress: ()=>set(pressRef.current ? 'press ref preserved' : 'press ref lost'),
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(NativeRefButton, {
                    ref: pressRef,
                    children: "Function pressable"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Focusable, {
                onFocus: ()=>set(focusRef.current ? 'focus ref preserved' : 'focus ref lost'),
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(NativeRefButton, {
                    ref: focusRef,
                    children: "Function focusable"
                })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: value
            })
        ]
    });
});
add('stately', 'ListBox ListBoxItem TextField Label Input ToggleButton Button', ()=>{
    const [toggled, setToggled] = (0, _compat.useState)(false);
    const list = _indexJs.useAsyncList({
        getKey: (item)=>item.id,
        async load ({ cursor, filterText }) {
            // Exercise asynchronous reducer transitions without a network dependency.
            await new Promise((resolve)=>setTimeout(resolve, 25));
            const records = cursor ? [
                {
                    id: 'c',
                    name: 'Cherry'
                }
            ] : [
                {
                    id: 'b',
                    name: 'Banana'
                },
                {
                    id: 'a',
                    name: 'Apple'
                }
            ];
            return {
                items: records.filter((item)=>item.name.toLowerCase().includes(filterText.toLowerCase())),
                cursor: cursor ? undefined : 'next'
            };
        },
        async sort ({ items }) {
            return {
                items: [
                    ...items
                ].sort((a, b)=>a.name.localeCompare(b.name))
            };
        }
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ToggleButton, {
                isSelected: toggled,
                onChange: setToggled,
                children: "Controlled toggle"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TextField, {
                value: list.filterText,
                onChange: list.setFilterText,
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                        children: "Filter records"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Input, {})
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                onPress: ()=>list.loadMore(),
                children: "Load more records"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                onPress: ()=>list.sort({
                        column: 'name',
                        direction: 'ascending'
                    }),
                children: "Sort records"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                onPress: ()=>list.reload(),
                children: "Reload records"
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ListBox, {
                "aria-label": "Async records",
                items: list.items,
                selectionMode: "single",
                selectedKeys: list.selectedKeys,
                onSelectionChange: list.setSelectedKeys,
                children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ListBoxItem, {
                        id: item.id,
                        children: item.name
                    })
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Result, {
                children: `${list.loadingState}; items:${list.items.map((item)=>item.name).join(',')}; selected:${[
                    ...list.selectedKeys
                ].join(',')}; toggle:${toggled}`
            })
        ]
    });
});

},{"preact/jsx-runtime":"b2Fbn","preact/compat":"8RhID","../dist/index.js":"dy6h5","@internationalized/date":"j8NRQ","./priority":"fA4C5","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8wXqt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showcases", ()=>showcases);
var _jsxRuntime = require("preact/jsx-runtime");
var _compat = require("preact/compat");
var _compatDefault = parcelHelpers.interopDefault(_compat);
var _indexJs = require("../dist/index.js");
var _date = require("@internationalized/date");
var _priority = require("./priority");
const people = [
    {
        id: 'ava',
        name: 'Ava Thompson',
        email: 'ava@example.com',
        role: 'Designer',
        initials: 'AT',
        tone: 'violet'
    },
    {
        id: 'leo',
        name: 'Leo Chen',
        email: 'leo@example.com',
        role: 'Engineer',
        initials: 'LC',
        tone: 'blue'
    },
    {
        id: 'maya',
        name: 'Maya Patel',
        email: 'maya@example.com',
        role: 'Product lead',
        initials: 'MP',
        tone: 'rose'
    },
    {
        id: 'noah',
        name: 'Noah Williams',
        email: 'noah@example.com',
        role: 'Engineer',
        initials: 'NW',
        tone: 'green'
    }
];
function Avatar({ person }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
        className: `avatar ${person.tone}`,
        "aria-hidden": "true",
        children: person.initials
    });
}
function Intro({ eyebrow, title, children }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        className: "showcase-intro",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                className: "eyebrow",
                children: eyebrow
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("h2", {
                children: title
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                children: children
            })
        ]
    });
}
function Feedback({ children }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("output", {
        className: "showcase-feedback",
        "aria-live": "polite",
        children: children
    });
}
function FieldSelect({ label, items, value, onChange, description }) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Select, {
        selectedKey: value,
        onSelectionChange: onChange,
        className: "react-aria-Select showcase-select",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                children: label
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.SelectValue, {})
            }),
            description && /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Text, {
                slot: "description",
                children: description
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Popover, {
                className: "react-aria-Popover showcase-overlay",
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ListBox, {
                    items: items,
                    children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ListBoxItem, {
                            id: item.id,
                            children: item.name
                        })
                })
            })
        ]
    });
}
function DocumentWorkspace() {
    const [documents, setDocuments] = (0, _compat.useState)([
        {
            id: 'brief',
            title: 'Website redesign brief',
            detail: "Updated today \xb7 8 pages"
        },
        {
            id: 'research',
            title: 'Customer research',
            detail: "Updated yesterday \xb7 12 pages"
        },
        {
            id: 'notes',
            title: 'Sprint planning notes',
            detail: "Updated Monday \xb7 4 pages"
        }
    ]);
    const [message, setMessage] = (0, _compat.useState)('All changes are up to date.');
    const [rename, setRename] = (0, _compat.useState)(null);
    const [title, setTitle] = (0, _compat.useState)('');
    const act = (key, doc)=>{
        if (key === 'rename') {
            setRename(doc);
            setTitle(doc.title);
        } else if (key === 'duplicate') {
            setDocuments([
                ...documents,
                {
                    ...doc,
                    id: `${doc.id}-${Date.now()}`,
                    title: `${doc.title} (copy)`
                }
            ]);
            setMessage(`Duplicated ${doc.title}.`);
        } else if (key === 'archive') {
            setDocuments(documents.filter((item)=>item.id !== doc.id));
            setMessage(`Archived ${doc.title}.`);
        } else {
            setDocuments(documents.map((item)=>item.id === doc.id ? {
                    ...item,
                    detail: `In ${key} \xb7 updated just now`
                } : item));
            setMessage(`Moved ${doc.title} to ${key}.`);
        }
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Intro, {
                eyebrow: "Your workspace",
                title: "Documents",
                children: "Keep your team's ideas in one place. Open an action menu to rename, duplicate or organize a document."
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "surface",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "surface-heading",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("h3", {
                                children: "Recent documents"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("span", {
                                className: "badge",
                                children: [
                                    documents.length,
                                    " documents"
                                ]
                            })
                        ]
                    }),
                    documents.map((doc)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                            className: "document-row",
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                    className: "document-icon",
                                    "aria-hidden": "true",
                                    children: "\u25A4"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                    className: "row-copy",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("strong", {
                                            children: doc.title
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                            children: doc.detail
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.MenuTrigger, {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                            className: "icon-button",
                                            "aria-label": `Actions for ${doc.title}`,
                                            children: "\u2022\u2022\u2022"
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Popover, {
                                            className: "react-aria-Popover showcase-overlay",
                                            children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Menu, {
                                                "aria-label": `Document actions for ${doc.title}`,
                                                onAction: (key)=>act(key, doc),
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.MenuSection, {
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Header, {
                                                                children: "Document"
                                                            }),
                                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.MenuItem, {
                                                                id: "rename",
                                                                children: "Rename"
                                                            }),
                                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.MenuItem, {
                                                                id: "duplicate",
                                                                children: "Duplicate"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Separator, {}),
                                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.SubmenuTrigger, {
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.MenuItem, {
                                                                id: "move",
                                                                children: "Move to"
                                                            }),
                                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Popover, {
                                                                className: "react-aria-Popover showcase-overlay",
                                                                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Menu, {
                                                                    "aria-label": "Move document",
                                                                    onAction: (key)=>act(key, doc),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.MenuItem, {
                                                                            id: "Projects",
                                                                            children: "Projects"
                                                                        }),
                                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.MenuItem, {
                                                                            id: "Ideas",
                                                                            children: "Ideas"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Separator, {}),
                                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.MenuItem, {
                                                        id: "archive",
                                                        className: "react-aria-MenuItem danger-item",
                                                        children: "Archive document"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }, doc.id)),
                    !documents.length && /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                        className: "empty-state",
                        children: "Your workspace is clear."
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Feedback, {
                children: message
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ModalOverlay, {
                isOpen: !!rename,
                onOpenChange: (open)=>!open && setRename(null),
                isDismissable: true,
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Modal, {
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Dialog, {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Heading, {
                                slot: "title",
                                children: "Rename document"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Form, {
                                onSubmit: (e)=>{
                                    e.preventDefault();
                                    setDocuments(documents.map((doc)=>doc.id === rename.id ? {
                                            ...doc,
                                            title
                                        } : doc));
                                    setMessage(`Renamed document to ${title}.`);
                                    setRename(null);
                                },
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TextField, {
                                        value: title,
                                        onChange: setTitle,
                                        isRequired: true,
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                                                children: "Document name"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Input, {
                                                autoFocus: true
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.FieldError, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                        className: "form-actions",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                                onPress: ()=>setRename(null),
                                                children: "Cancel"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                                type: "submit",
                                                className: "primary-button",
                                                children: "Save name"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}
function InviteTeam() {
    const [email, setEmail] = (0, _compat.useState)('');
    const [role, setRole] = (0, _compat.useState)('member');
    const [invitations, setInvitations] = (0, _compat.useState)([]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Intro, {
                eyebrow: "People & access",
                title: "Better together",
                children: "A small team, a shared workspace. Prepare an invitation with the right permissions."
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "surface",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "surface-heading",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("h3", {
                                        children: "Team members"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("p", {
                                        children: [
                                            people.length,
                                            " active members"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.DialogTrigger, {
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                        className: "primary-button",
                                        children: "Invite teammate"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Popover, {
                                        className: "react-aria-Popover showcase-overlay invite-popover",
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Dialog, {
                                            children: ({ close })=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Heading, {
                                                            slot: "title",
                                                            children: "Invite to your workspace"
                                                        }),
                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                                            className: "muted",
                                                            children: "Choose who can join and what they can do."
                                                        }),
                                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Form, {
                                                            onSubmit: (e)=>{
                                                                e.preventDefault();
                                                                setInvitations([
                                                                    ...invitations,
                                                                    {
                                                                        email,
                                                                        role
                                                                    }
                                                                ]);
                                                                setEmail('');
                                                                close();
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TextField, {
                                                                    value: email,
                                                                    onChange: setEmail,
                                                                    type: "email",
                                                                    isRequired: true,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                                                                            children: "Email address"
                                                                        }),
                                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Input, {
                                                                            placeholder: "teammate@example.com"
                                                                        }),
                                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.FieldError, {})
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)(FieldSelect, {
                                                                    label: "Workspace role",
                                                                    value: role,
                                                                    onChange: setRole,
                                                                    items: [
                                                                        {
                                                                            id: 'member',
                                                                            name: "Member \u2014 can edit"
                                                                        },
                                                                        {
                                                                            id: 'viewer',
                                                                            name: "Viewer \u2014 can read"
                                                                        },
                                                                        {
                                                                            id: 'admin',
                                                                            name: "Admin \u2014 full access"
                                                                        }
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                                                    className: "form-actions",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                                                            onPress: close,
                                                                            children: "Cancel"
                                                                        }),
                                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                                                            type: "submit",
                                                                            className: "primary-button",
                                                                            children: "Prepare invitation"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    people.map((person)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                            className: "member-row",
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)(Avatar, {
                                    person: person
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                    className: "row-copy",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("strong", {
                                            children: person.name
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                            children: person.email
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                    className: "badge",
                                    children: person.role
                                })
                            ]
                        }, person.id)),
                    invitations.map((invite, i)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                            className: "member-row",
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                    className: "avatar neutral",
                                    "aria-hidden": "true",
                                    children: "@"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                    className: "row-copy",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("strong", {
                                            children: invite.email
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)("span", {
                                            children: [
                                                invite.role,
                                                " \xb7 invitation prepared"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                    className: "badge amber",
                                    children: "Pending"
                                })
                            ]
                        }, i))
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Feedback, {
                children: invitations.length ? `${invitations.length} invitation${invitations.length === 1 ? '' : 's'} prepared.` : 'Only admins can change workspace permissions.'
            })
        ]
    });
}
function WorkspacePreferences() {
    const [language, setLanguage] = (0, _compat.useState)('en');
    const [week, setWeek] = (0, _compat.useState)('monday');
    const [timezone, setTimezone] = (0, _compat.useState)('dubai');
    const [saved, setSaved] = (0, _compat.useState)(false);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Intro, {
                eyebrow: "Workspace settings",
                title: "Make it yours",
                children: "Set the language, time zone and calendar defaults your team uses every day."
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "surface settings-surface",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "surface-heading",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("h3", {
                                children: "Regional preferences"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: "badge",
                                children: "Workspace defaults"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "settings-grid",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(FieldSelect, {
                                label: "Language",
                                value: language,
                                onChange: (v)=>{
                                    setLanguage(v);
                                    setSaved(false);
                                },
                                description: "Used for dates, numbers and labels.",
                                items: [
                                    {
                                        id: 'en',
                                        name: 'English (United States)'
                                    },
                                    {
                                        id: 'fr',
                                        name: 'French'
                                    },
                                    {
                                        id: 'de',
                                        name: 'German'
                                    },
                                    {
                                        id: 'ja',
                                        name: 'Japanese'
                                    }
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(FieldSelect, {
                                label: "Time zone",
                                value: timezone,
                                onChange: (v)=>{
                                    setTimezone(v);
                                    setSaved(false);
                                },
                                items: [
                                    {
                                        id: 'dubai',
                                        name: "Dubai \xb7 UTC+04:00"
                                    },
                                    {
                                        id: 'london',
                                        name: 'London'
                                    },
                                    {
                                        id: 'new-york',
                                        name: 'New York'
                                    },
                                    {
                                        id: 'tokyo',
                                        name: "Tokyo \xb7 UTC+09:00"
                                    }
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(FieldSelect, {
                                label: "Start of week",
                                value: week,
                                onChange: (v)=>{
                                    setWeek(v);
                                    setSaved(false);
                                },
                                items: [
                                    {
                                        id: 'monday',
                                        name: 'Monday'
                                    },
                                    {
                                        id: 'sunday',
                                        name: 'Sunday'
                                    }
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "surface-footer",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: "muted",
                                children: "Applies to this workspace."
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                className: "primary-button",
                                onPress: ()=>setSaved(true),
                                children: "Save preferences"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Feedback, {
                children: saved ? 'Preferences saved.' : 'Choose your preferred defaults.'
            })
        ]
    });
}
function TaskAssignment() {
    const [selected, setSelected] = (0, _compat.useState)('ava');
    const person = people.find((p)=>p.id === selected);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Intro, {
                eyebrow: "Project / Website refresh",
                title: "Find the right teammate",
                children: "Search by name and assign the next piece of work without leaving your task."
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "assignment-layout",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "surface task-preview",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: "badge violet",
                                children: "Design"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("h3", {
                                children: "Refresh the onboarding flow"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                className: "muted",
                                children: "Explore a simpler welcome experience and share the first prototype with the team."
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                className: "task-meta",
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                        children: "Due October 9"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                        className: "badge amber",
                                        children: "In progress"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                className: "assigned-person",
                                children: person && /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(Avatar, {
                                            person: person
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("small", {
                                                    className: "muted",
                                                    children: "Assigned to"
                                                }),
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("strong", {
                                                    children: person.name
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "surface assignment-control",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.ComboBox, {
                                defaultItems: people,
                                selectedKey: selected,
                                onSelectionChange: setSelected,
                                defaultFilter: (text, input)=>text.toLowerCase().includes(input.toLowerCase()),
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                                        children: "Assign teammate"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Input, {
                                        placeholder: "Search team members\u2026"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                        "aria-label": "Browse teammates",
                                        children: "Browse"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Text, {
                                        slot: "description",
                                        children: "Type a name, then use the arrow keys to choose."
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Popover, {
                                        className: "react-aria-Popover showcase-overlay",
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ListBox, {
                                            children: (item)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.ListBoxItem, {
                                                    id: item.id,
                                                    textValue: item.name,
                                                    className: "react-aria-ListBoxItem person-option",
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(Avatar, {
                                                            person: item
                                                        }),
                                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                                            className: "row-copy",
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("strong", {
                                                                    children: item.name
                                                                }),
                                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                                                    children: item.role
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Feedback, {
                                children: person ? `${person.name} owns this task.` : 'Choose an assignee.'
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
const initialTasks = [
    {
        id: 'design',
        title: 'Design the welcome screen',
        team: 'Design',
        detail: "Ava Thompson \xb7 Oct 5",
        tone: 'violet'
    },
    {
        id: 'build',
        title: 'Build the account flow',
        team: 'Engineering',
        detail: "Leo Chen \xb7 Oct 7",
        tone: 'blue'
    },
    {
        id: 'review',
        title: 'Review the first prototype',
        team: 'Product',
        detail: "Maya Patel \xb7 Oct 9",
        tone: 'rose'
    },
    {
        id: 'launch',
        title: 'Prepare launch notes',
        team: 'Product',
        detail: "Noah Williams \xb7 Oct 12",
        tone: 'green'
    }
];
function Roadmap() {
    const list = _indexJs.useListData({
        initialItems: initialTasks
    });
    const [archived, setArchived] = (0, _compat.useState)([]);
    const { dragAndDropHooks } = _indexJs.useDragAndDrop({
        getItems: (keys)=>[
                ...keys
            ].map((key)=>({
                    'text/plain': String(key)
                })),
        onReorder: (e)=>e.target.dropPosition === 'before' ? list.moveBefore(e.target.key, e.keys) : list.moveAfter(e.target.key, e.keys),
        renderDropIndicator: (target)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DropIndicator, {
                target: target
            })
    });
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Intro, {
                eyebrow: "Project planning",
                title: "What comes next?",
                children: "Arrange tasks by priority. Drag a handle, or press Enter on a handle and use the arrow keys to choose a new position."
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "surface roadmap-surface",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "surface-heading",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("h3", {
                                children: "Upcoming work"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("span", {
                                className: "badge",
                                children: [
                                    list.items.length,
                                    " tasks"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.GridList, {
                        "aria-label": "Project priority",
                        items: list.items,
                        dragAndDropHooks: dragAndDropHooks,
                        selectionMode: "multiple",
                        className: "react-aria-GridList roadmap-list",
                        children: (task)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.GridListItem, {
                                id: task.id,
                                textValue: task.title,
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                        slot: "drag",
                                        "aria-label": `Move ${task.title}`,
                                        children: "\u283F"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Checkbox, {
                                        slot: "selection"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                        className: "row-copy",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("strong", {
                                                children: task.title
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                                children: task.detail
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                        className: `badge ${task.tone}`,
                                        children: task.team
                                    })
                                ]
                            })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.DropZone, {
                "aria-label": "Archive tasks",
                className: "react-aria-DropZone archive-zone",
                onDrop: async (e)=>{
                    const keys = await Promise.all(e.items.filter(_indexJs.isTextDropItem).map((item)=>item.getText('text/plain')));
                    const tasks = keys.map((key)=>list.getItem(key)).filter(Boolean);
                    setArchived([
                        ...archived,
                        ...tasks
                    ]);
                    list.remove(...keys);
                },
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                        className: "archive-icon",
                        "aria-hidden": "true",
                        children: "\u2193"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Text, {
                        slot: "label",
                        children: "Drop tasks here to archive"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                        children: "Keep finished work out of your upcoming list."
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Feedback, {
                children: archived.length ? `${archived.length} task${archived.length === 1 ? '' : 's'} archived.` : `${list.items[0]?.title || 'No tasks'} is first in the queue.`
            })
        ]
    });
}
function Scheduler() {
    const [date, setDate] = (0, _compat.useState)(new (0, _date.CalendarDate)(2026, 10, 5));
    const [time, setTime] = (0, _compat.useState)(new (0, _date.Time)(10, 0));
    const [duration, setDuration] = (0, _compat.useState)('30');
    const [reminder, setReminder] = (0, _compat.useState)(true);
    const [scheduled, setScheduled] = (0, _compat.useState)(false);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Intro, {
                eyebrow: "Team calendar",
                title: "Make time to connect",
                children: "Plan a design review with a date, time and duration that work for your team."
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "scheduler-layout",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "surface settings-surface",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                className: "surface-heading",
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("h3", {
                                        children: "Meeting details"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                        className: "badge violet",
                                        children: "Design review"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.DatePicker, {
                                value: date,
                                onChange: (value)=>{
                                    setDate(value);
                                    setScheduled(false);
                                },
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                                        children: "Meeting date"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Group, {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DateInput, {
                                                children: (segment)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DateSegment, {
                                                        segment: segment
                                                    })
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                                children: "Choose date"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Popover, {
                                        className: "react-aria-Popover showcase-overlay",
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Dialog, {
                                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Calendar, {
                                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _priority.CalendarParts), {})
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                className: "settings-grid",
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TimeField, {
                                        value: time,
                                        onChange: (value)=>{
                                            setTime(value);
                                            setScheduled(false);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                                                children: "Start time"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DateInput, {
                                                children: (segment)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DateSegment, {
                                                        segment: segment
                                                    })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(FieldSelect, {
                                        label: "Duration",
                                        value: duration,
                                        onChange: (value)=>{
                                            setDuration(value);
                                            setScheduled(false);
                                        },
                                        items: [
                                            {
                                                id: '15',
                                                name: '15 minutes'
                                            },
                                            {
                                                id: '30',
                                                name: '30 minutes'
                                            },
                                            {
                                                id: '60',
                                                name: '1 hour'
                                            }
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Checkbox, {
                                isSelected: reminder,
                                onChange: (value)=>{
                                    setReminder(value);
                                    setScheduled(false);
                                },
                                children: "Remind me 10 minutes before"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                className: "form-actions",
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                    className: "primary-button",
                                    onPress: ()=>setScheduled(true),
                                    children: "Schedule review"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "meeting-summary",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: "eyebrow",
                                children: "Your meeting"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("h3", {
                                children: "Design review"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                className: "date-tile",
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("strong", {
                                        children: date?.day
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                        children: date?.toDate('UTC').toLocaleDateString('en-US', {
                                            month: 'long',
                                            timeZone: 'UTC'
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("p", {
                                children: [
                                    date?.toString(),
                                    " at ",
                                    time?.toString().slice(0, 5)
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("span", {
                                className: "badge",
                                children: [
                                    duration,
                                    " minutes"
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                className: "avatar-stack",
                                children: people.slice(0, 3).map((p)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(Avatar, {
                                        person: p
                                    }, p.id))
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                className: "muted",
                                children: "3 teammates \xb7 Dubai time"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Feedback, {
                children: scheduled ? `Review scheduled for ${date} at ${time}. ${reminder ? 'Reminder enabled.' : 'No reminder.'}` : 'Pick a date to plan your next review.'
            })
        ]
    });
}
function TripPlanner() {
    const [range, setRange] = (0, _compat.useState)({
        start: new (0, _date.CalendarDate)(2026, 10, 12),
        end: new (0, _date.CalendarDate)(2026, 10, 16)
    });
    const [guests, setGuests] = (0, _compat.useState)(2);
    const [flexible, setFlexible] = (0, _compat.useState)(false);
    const [saved, setSaved] = (0, _compat.useState)(false);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Intro, {
                eyebrow: "A little time away",
                title: "Plan your next escape",
                children: "Choose a stay, bring your favorite people and leave room for a change of plans."
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "surface travel-surface",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "travel-banner",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: "eyebrow",
                                children: "Quiet mornings. New places."
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("h3", {
                                children: "Somewhere worth slowing down."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "travel-fields",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.DateRangePicker, {
                                value: range,
                                onChange: (value)=>{
                                    setRange(value);
                                    setSaved(false);
                                },
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                                        children: "Your stay"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Group, {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DateInput, {
                                                slot: "start",
                                                children: (s)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DateSegment, {
                                                        segment: s
                                                    })
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                                children: "\u2013"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DateInput, {
                                                slot: "end",
                                                children: (s)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.DateSegment, {
                                                        segment: s
                                                    })
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                                children: "Choose dates"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Popover, {
                                        className: "react-aria-Popover showcase-overlay",
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Dialog, {
                                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.RangeCalendar, {
                                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _priority.CalendarParts), {})
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.NumberField, {
                                value: guests,
                                onChange: (value)=>{
                                    setGuests(value);
                                    setSaved(false);
                                },
                                minValue: 1,
                                maxValue: 8,
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                                        children: "Guests"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Group, {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                                slot: "decrement",
                                                children: "\u2212"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Input, {}),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                                slot: "increment",
                                                children: "+"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Switch, {
                                isSelected: flexible,
                                onChange: (value)=>{
                                    setFlexible(value);
                                    setSaved(false);
                                },
                                children: "My dates are flexible"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                className: "surface-footer",
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("span", {
                                        className: "muted",
                                        children: [
                                            range?.start?.toString(),
                                            " \u2192 ",
                                            range?.end?.toString(),
                                            " \xb7 ",
                                            guests,
                                            " guests"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                        className: "primary-button",
                                        onPress: ()=>setSaved(true),
                                        children: "Save trip"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Feedback, {
                children: saved ? `Trip saved for ${guests} guests. ${flexible ? 'Flexible dates.' : 'Exact dates.'}` : 'Your next adventure starts with a date.'
            })
        ]
    });
}
function Notifications() {
    const [channels, setChannels] = (0, _compat.useState)([
        'mentions',
        'reviews'
    ]);
    const [digest, setDigest] = (0, _compat.useState)(true);
    const [quiet, setQuiet] = (0, _compat.useState)(false);
    const [saved, setSaved] = (0, _compat.useState)(false);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Intro, {
                eyebrow: "Personal settings",
                title: "Stay in the loop",
                children: "Choose what reaches you, and make a little space for focused work."
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "surface settings-surface",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.CheckboxGroup, {
                        value: channels,
                        onChange: (value)=>{
                            setChannels(value);
                            setSaved(false);
                        },
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                                children: "Email notifications"
                            }),
                            [
                                [
                                    'mentions',
                                    'Mentions & replies',
                                    'When someone needs your input.'
                                ],
                                [
                                    'reviews',
                                    'Review requests',
                                    'When a teammate shares work for feedback.'
                                ],
                                [
                                    'updates',
                                    'Project updates',
                                    'Progress, milestones and launch notes.'
                                ]
                            ].map(([value, label, description])=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Checkbox, {
                                    value: value,
                                    children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                        className: "row-copy",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("strong", {
                                                children: label
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                                children: description
                                            })
                                        ]
                                    })
                                }, value))
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        className: "settings-divider"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Switch, {
                        isSelected: digest,
                        onChange: (value)=>{
                            setDigest(value);
                            setSaved(false);
                        },
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                            className: "row-copy",
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("strong", {
                                    children: "Weekly digest"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                    children: "A calm summary every Monday morning."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Switch, {
                        isSelected: quiet,
                        onChange: (value)=>{
                            setQuiet(value);
                            setSaved(false);
                        },
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                            className: "row-copy",
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("strong", {
                                    children: "Quiet hours"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                    children: "Pause notifications outside working hours."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "surface-footer",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: "muted",
                                children: "You can change these anytime."
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                className: "primary-button",
                                onPress: ()=>setSaved(true),
                                children: "Save notifications"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Feedback, {
                children: saved ? `Saved ${channels.length} email categories. Digest ${digest ? 'on' : 'off'}; quiet hours ${quiet ? 'on' : 'off'}.` : 'Find the balance that works for you.'
            })
        ]
    });
}
function PlanPicker() {
    const [plan, setPlan] = (0, _compat.useState)('team');
    const [annual, setAnnual] = (0, _compat.useState)(true);
    const plans = [
        {
            id: 'starter',
            name: 'Starter',
            price: 9,
            detail: 'A little room to get started.',
            features: [
                '3 projects',
                'Basic sharing'
            ]
        },
        {
            id: 'team',
            name: 'Team',
            price: 19,
            detail: 'For teams building together.',
            features: [
                'Unlimited projects',
                'Team collaboration'
            ]
        },
        {
            id: 'business',
            name: 'Business',
            price: 39,
            detail: 'More control as you grow.',
            features: [
                'Advanced permissions',
                'Priority support'
            ]
        }
    ];
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Intro, {
                eyebrow: "A plan for every stage",
                title: "Room to grow",
                children: "Compare plans and choose the workspace that fits your team."
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Switch, {
                isSelected: annual,
                onChange: setAnnual,
                children: [
                    "Annual billing ",
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                        className: "badge green",
                        children: "Save 20%"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.RadioGroup, {
                "aria-label": "Workspace plan",
                value: plan,
                onChange: setPlan,
                className: "plan-grid",
                children: plans.map((item)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Radio, {
                        value: item.id,
                        className: "plan-card",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: "radio-indicator",
                                "aria-hidden": "true"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: "plan-name",
                                children: item.name
                            }),
                            item.id === 'team' && /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: "badge violet",
                                children: "Popular"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("span", {
                                className: "plan-price",
                                children: [
                                    "$",
                                    annual ? item.price : Math.round(item.price / 0.8),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("small", {
                                        children: "/ person / month"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: "muted",
                                children: item.detail
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: "plan-features",
                                children: item.features.map((feature)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                                "aria-hidden": "true",
                                                children: "\u2713 "
                                            }),
                                            feature
                                        ]
                                    }, feature))
                            })
                        ]
                    }, item.id))
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Feedback, {
                children: [
                    plans.find((p)=>p.id === plan).name,
                    " plan selected \xb7 billed",
                    ' ',
                    annual ? 'annually' : 'monthly',
                    "."
                ]
            })
        ]
    });
}
function WritingStudio() {
    const [formats, setFormats] = (0, _compat.useState)(new Set([
        'bold'
    ]));
    const [align, setAlign] = (0, _compat.useState)(new Set([
        'left'
    ]));
    const [text, setText] = (0, _compat.useState)('Good ideas start with a little space to think.');
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Intro, {
                eyebrow: "A small writing studio",
                title: "Find your words",
                children: "Shape a short note with formatting controls and a live preview."
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "surface editor-surface",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "editor-toolbar",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.ToggleButtonGroup, {
                                "aria-label": "Text formatting",
                                selectionMode: "multiple",
                                selectedKeys: formats,
                                onSelectionChange: setFormats,
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ToggleButton, {
                                        id: "bold",
                                        "aria-label": "Bold",
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("strong", {
                                            children: "B"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ToggleButton, {
                                        id: "italic",
                                        "aria-label": "Italic",
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("em", {
                                            children: "I"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ToggleButton, {
                                        id: "underline",
                                        "aria-label": "Underline",
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("u", {
                                            children: "U"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: "toolbar-divider"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.ToggleButtonGroup, {
                                "aria-label": "Text alignment",
                                selectionMode: "single",
                                disallowEmptySelection: true,
                                selectedKeys: align,
                                onSelectionChange: setAlign,
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ToggleButton, {
                                        id: "left",
                                        children: "Left"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ToggleButton, {
                                        id: "center",
                                        children: "Center"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ToggleButton, {
                                        id: "right",
                                        children: "Right"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TextField, {
                        value: text,
                        onChange: setText,
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                                children: "Your note"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TextArea, {})
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        className: "writing-preview",
                        style: {
                            fontWeight: formats.has('bold') ? 700 : 400,
                            fontStyle: formats.has('italic') ? 'italic' : 'normal',
                            textDecoration: formats.has('underline') ? 'underline' : 'none',
                            textAlign: [
                                ...align
                            ][0]
                        },
                        children: text || 'Your words will appear here.'
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "editor-footer",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("span", {
                                children: [
                                    text.length,
                                    " characters"
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                children: "Preview updates as you type"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function TeamDirectory() {
    const [filter, setFilter] = (0, _compat.useState)('');
    const [sort, setSort] = (0, _compat.useState)({
        column: 'name',
        direction: 'ascending'
    });
    const [selected, setSelected] = (0, _compat.useState)(new Set());
    const rows = (0, _compat.useMemo)(()=>people.filter((p)=>`${p.name} ${p.role}`.toLowerCase().includes(filter.toLowerCase())).sort((a, b)=>a[sort.column].localeCompare(b[sort.column]) * (sort.direction === 'ascending' ? 1 : -1)), [
        filter,
        sort
    ]);
    const person = people.find((p)=>selected.has(p.id));
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Intro, {
                eyebrow: "People in your workspace",
                title: "The team behind the work",
                children: "Find a teammate, sort the directory or select a row to see their profile."
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "surface directory-surface",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "directory-toolbar",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.SearchField, {
                                value: filter,
                                onChange: setFilter,
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                                        children: "Search members"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Input, {
                                        placeholder: "Name or role\u2026"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Button, {
                                        children: "Clear"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("span", {
                                className: "badge",
                                children: [
                                    rows.length,
                                    " ",
                                    rows.length === 1 ? 'member' : 'members'
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Table, {
                        "aria-label": "Team directory",
                        selectionMode: "single",
                        selectedKeys: selected,
                        onSelectionChange: setSelected,
                        sortDescriptor: sort,
                        onSortChange: setSort,
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TableHeader, {
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Column, {
                                        id: "name",
                                        isRowHeader: true,
                                        allowsSorting: true,
                                        children: "Name"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Column, {
                                        id: "role",
                                        allowsSorting: true,
                                        children: "Role"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Column, {
                                        id: "status",
                                        children: "Status"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TableBody, {
                                items: rows,
                                renderEmptyState: ()=>'No teammates match your search.',
                                children: (p)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Row, {
                                        id: p.id,
                                        textValue: p.name,
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Cell, {
                                                children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                                    className: "member-cell",
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(Avatar, {
                                                            person: p
                                                        }),
                                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                                            className: "row-copy",
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("strong", {
                                                                    children: p.name
                                                                }),
                                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                                                    children: p.email
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Cell, {
                                                children: p.role
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Cell, {
                                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                                    className: "badge green",
                                                    children: "Active"
                                                })
                                            })
                                        ]
                                    })
                            })
                        ]
                    })
                ]
            }),
            person && /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "profile-preview",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(Avatar, {
                        person: person
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("strong", {
                                children: person.name
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("p", {
                                children: [
                                    person.role,
                                    " \xb7 ",
                                    person.email
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function WorkspaceOverview() {
    const [annual, setAnnual] = (0, _compat.useState)(false);
    const [keys, setKeys] = (0, _compat.useState)(new Set([
        'website'
    ]));
    const projects = [
        {
            id: 'website',
            name: 'Website refresh',
            detail: "Design \xb7 8 tasks",
            percent: 72,
            tone: 'violet'
        },
        {
            id: 'mobile',
            name: 'Mobile onboarding',
            detail: "Product \xb7 12 tasks",
            percent: 45,
            tone: 'blue'
        },
        {
            id: 'launch',
            name: 'Autumn launch',
            detail: "Marketing \xb7 6 tasks",
            percent: 90,
            tone: 'green'
        }
    ];
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Intro, {
                eyebrow: "Good morning, Ava",
                title: "A little overview",
                children: "Your projects, your people and the progress you are making together."
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.Tabs, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TabList, {
                        "aria-label": "Workspace sections",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Tab, {
                                id: "projects",
                                children: "Projects"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Tab, {
                                id: "activity",
                                children: "Activity"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Tab, {
                                id: "billing",
                                children: "Billing"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.TabPanel, {
                        id: "projects",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                className: "metrics-grid",
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                                children: "Active projects"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("strong", {
                                                children: "3"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("small", {
                                                children: "Across 2 teams"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                                children: "Tasks completed"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("strong", {
                                                children: "24"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("small", {
                                                className: "positive",
                                                children: "\u2191 8 this week"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                                children: "Team members"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("strong", {
                                                children: "4"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("small", {
                                                children: "Working together"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ListBox, {
                                "aria-label": "Projects",
                                items: projects,
                                selectionMode: "single",
                                selectedKeys: keys,
                                onSelectionChange: setKeys,
                                className: "project-list",
                                children: (p)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.ListBoxItem, {
                                        id: p.id,
                                        textValue: p.name,
                                        className: "project-card",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                                className: `project-symbol ${p.tone}`,
                                                "aria-hidden": "true",
                                                children: "\u25C8"
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("strong", {
                                                children: p.name
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                                className: "muted",
                                                children: p.detail
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                                className: "meter-track",
                                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                                    className: "meter-fill",
                                                    style: {
                                                        width: `${p.percent}%`
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("span", {
                                                className: "project-progress",
                                                children: [
                                                    p.percent,
                                                    "% complete"
                                                ]
                                            })
                                        ]
                                    })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TabPanel, {
                        id: "activity",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                            className: "surface activity-list",
                            children: [
                                [
                                    'ava',
                                    'shared a new prototype',
                                    '12 minutes ago'
                                ],
                                [
                                    'leo',
                                    'completed the account flow',
                                    '48 minutes ago'
                                ],
                                [
                                    'maya',
                                    'added feedback to the brief',
                                    '2 hours ago'
                                ]
                            ].map(([id, action, time])=>{
                                const p = people.find((p)=>p.id === id);
                                return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                    className: "member-row",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)(Avatar, {
                                            person: p
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                            className: "row-copy",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("strong", {
                                                    children: [
                                                        p.name,
                                                        " ",
                                                        action
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                                    children: time
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                            className: "activity-dot",
                                            "aria-hidden": "true"
                                        })
                                    ]
                                }, id);
                            })
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.TabPanel, {
                        id: "billing",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                            className: "surface billing-card",
                            children: [
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                    className: "badge violet",
                                    children: "Team plan"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("h3", {
                                    children: "Everything your team needs."
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Switch, {
                                    isSelected: annual,
                                    onChange: setAnnual,
                                    children: "Bill annually"
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                    className: "plan-price",
                                    children: [
                                        "$",
                                        annual ? 19 : 24,
                                        /*#__PURE__*/ (0, _jsxRuntime.jsx)("small", {
                                            children: "/ person / month"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("p", {
                                    className: "muted",
                                    children: [
                                        "4 seats \xb7 $",
                                        annual ? 76 : 96,
                                        " per month",
                                        annual ? ' equivalent, billed annually' : ''
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                    className: "badge green",
                                    children: "Your plan is active"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function ColorStudio() {
    const [color, setColor] = (0, _compat.useState)(_indexJs.parseColor('hsb(220, 75%, 90%)'));
    const updateColor = (value)=>value && setColor(value.toFormat('hsb'));
    const palette = [
        '#245edb',
        '#8b5cf6',
        '#e65a87',
        '#16a085',
        '#f59e0b'
    ];
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(Intro, {
                eyebrow: "A little color goes a long way",
                title: "Build your next palette",
                children: "Fine-tune an accent color and see it in a small product preview."
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "color-studio",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "surface color-controls",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColorArea, {
                                value: color,
                                onChange: updateColor,
                                xChannel: "saturation",
                                yChannel: "brightness",
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColorThumb, {})
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.ColorSlider, {
                                channel: "hue",
                                value: color,
                                onChange: updateColor,
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                                        children: "Hue"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.SliderOutput, {}),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.SliderTrack, {
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColorThumb, {})
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_indexJs.ColorField, {
                                value: color,
                                onChange: updateColor,
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Label, {
                                        children: "Accent color"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.Input, {})
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColorSwatchPicker, {
                                "aria-label": "Suggested accents",
                                value: color,
                                onChange: updateColor,
                                children: palette.map((hex)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColorSwatchPickerItem, {
                                        color: hex,
                                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(_indexJs.ColorSwatch, {})
                                    }, hex))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "color-preview",
                        style: {
                            '--preview-accent': color.toString('css')
                        },
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                className: "eyebrow",
                                children: "Live preview"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                className: "preview-card",
                                children: [
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                        className: "preview-icon",
                                        "aria-hidden": "true",
                                        children: "\u2726"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("h3", {
                                        children: "Make something good."
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                                        children: "A small idea can become your next favorite project."
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                        className: "preview-tag",
                                        children: "Your new accent"
                                    }),
                                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                        className: "preview-button",
                                        children: "Accent preview"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Feedback, {
                children: [
                    color.toString('hex'),
                    " \xb7 your current accent color."
                ]
            })
        ]
    });
}
const showcases = {
    menu: DocumentWorkspace,
    popover: InviteTeam,
    select: WorkspacePreferences,
    combobox: TaskAssignment,
    dnd: Roadmap,
    datepicker: Scheduler,
    daterange: TripPlanner,
    checkbox: Notifications,
    switch: Notifications,
    radio: PlanPicker,
    toggle: WritingStudio,
    toolbar: WritingStudio,
    table: TeamDirectory,
    tabs: WorkspaceOverview,
    listbox: WorkspaceOverview,
    colorarea: ColorStudio,
    colorslider: ColorStudio,
    colorfield: ColorStudio,
    colorswatch: ColorStudio
};

},{"preact/jsx-runtime":"b2Fbn","preact/compat":"8RhID","../dist/index.js":"dy6h5","@internationalized/date":"j8NRQ","./priority":"fA4C5","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9x8Uy":[function() {},{}],"8aUDS":[function() {},{}]},["h5Upz"], "h5Upz", "parcelRequire037a", {})

