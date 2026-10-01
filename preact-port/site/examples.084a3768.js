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
})({"b2Fbn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Fragment", ()=>(0, _preact.Fragment));
parcelHelpers.export(exports, "jsx", ()=>u);
parcelHelpers.export(exports, "jsxAttr", ()=>l);
parcelHelpers.export(exports, "jsxDEV", ()=>u);
parcelHelpers.export(exports, "jsxEscape", ()=>p);
parcelHelpers.export(exports, "jsxTemplate", ()=>i);
parcelHelpers.export(exports, "jsxs", ()=>u);
var _preact = require("preact");
var e = /["&<]/;
function n(r) {
    if (!r.length || !e.test(r)) return r;
    for(var t = 0, n = 0, o = "", f = ""; n < r.length; n++){
        switch(r.charCodeAt(n)){
            case 34:
                f = "&quot;";
                break;
            case 38:
                f = "&amp;";
                break;
            case 60:
                f = "&lt;";
                break;
            default:
                continue;
        }
        n != t && (o += r.slice(t, n)), o += f, t = n + 1;
    }
    return n != t && (o += r.slice(t, n)), o;
}
var o = 0, f = Array.isArray;
function u(t, e, n, f, u, i) {
    e || (e = {});
    var a, c, l = e;
    if ("ref" in l && "function" != typeof t) for(c in l = {}, e)"ref" == c ? a = e[c] : l[c] = e[c];
    var p = {
        type: t,
        props: l,
        key: n,
        ref: a,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: --o,
        __i: -1,
        __u: 0
    };
    return (u || i) && (p.__source = u, p.__self = i), (0, _preact.options).vnode && (0, _preact.options).vnode(p), p;
}
function i(r) {
    var e = u((0, _preact.Fragment), {
        tpl: r,
        exprs: [].slice.call(arguments, 1)
    });
    return e.key = e.__v, e;
}
var a = {}, c = /[A-Z]/g;
function l(t, e) {
    if ((0, _preact.options).attr) {
        var o = (0, _preact.options).attr(t, e);
        if ("string" == typeof o) return o;
    }
    if (e = function(r) {
        return null != r && "object" == typeof r && "function" == typeof r.valueOf ? r.valueOf() : r;
    }(e), "ref" == t || "key" == t) return "";
    if ("style" == t && "object" == typeof e) {
        var f = "";
        for(var u in e){
            var i = e[u];
            null != i && "" !== i && (f = f + ("-" == u[0] ? u : a[u] || (a[u] = u.replace(c, "-$&").toLowerCase())) + ":" + i + ";");
        }
        return t + '="' + n(f) + '"';
    }
    return null == e || !1 === e || "function" == typeof e || "object" == typeof e ? "" : !0 === e ? t : t + '="' + n("" + e) + '"';
}
function p(r) {
    if (null == r || "boolean" == typeof r || "function" == typeof r) return null;
    if ("object" == typeof r) {
        if (void 0 === r.constructor) return r;
        if (f(r)) {
            for(var t = 0; t < r.length; t++)r[t] = p(r[t]);
            return r;
        }
    }
    return n("" + r);
}

},{"preact":"h65yd","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"h65yd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>S);
parcelHelpers.export(exports, "Fragment", ()=>x);
parcelHelpers.export(exports, "cloneElement", ()=>m);
parcelHelpers.export(exports, "createContext", ()=>R);
parcelHelpers.export(exports, "createElement", ()=>k);
parcelHelpers.export(exports, "createPortal", ()=>W);
parcelHelpers.export(exports, "createRef", ()=>$);
parcelHelpers.export(exports, "h", ()=>k);
parcelHelpers.export(exports, "hydrate", ()=>Q);
parcelHelpers.export(exports, "isValidElement", ()=>i);
parcelHelpers.export(exports, "options", ()=>n);
parcelHelpers.export(exports, "render", ()=>K);
parcelHelpers.export(exports, "toChildArray", ()=>P);
var n, t, i, r, u, f, o, e, l, c, a, s, h, p, v = {}, y = [], w = /^m(i|n|o|s|text|space)$/, d = Array.isArray, _ = y.slice, g = Object.assign;
function b(n) {
    n && n.parentNode && n.remove();
}
function k(n, t, i) {
    var r, u, f, o = {}, e = arguments.length;
    for(f in t)"key" == f ? r = t[f] : "ref" == f && "function" != typeof n ? u = t[f] : o[f] = t[f];
    return e > 2 && (o.children = e > 3 ? _.call(arguments, 2) : i), M(n, o, r, u, null);
}
function m(n, t, i) {
    var r, u, f, o = g({}, n.props), e = arguments.length;
    for(f in t)"key" == f ? r = t[f] : "ref" == f && "function" != typeof n.type ? u = t[f] : o[f] = t[f];
    return e > 2 && (o.children = e > 3 ? _.call(arguments, 2) : i), M(n.type, o, void 0 !== r ? r : n.key, void 0 !== u ? u : n.ref, null);
}
function M(i, r, u, f, o) {
    var e = {
        type: i,
        props: r,
        key: u,
        ref: f,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: o || ++t,
        __i: -1,
        __u: 0
    };
    return !o && n.vnode && n.vnode(e), e;
}
function $() {
    return {
        current: null
    };
}
function x(n) {
    return n.children;
}
function S(n, t) {
    this.props = n, this.context = t, this.__g = 0;
}
function C(n, t) {
    if (null == t) return n.__ ? C(n.__, n.__i + 1) : null;
    for(var i; t < n.__k.length; t++)if ((i = n.__k[t]) && i.__e) return i.__e;
    return "function" != typeof n.type || n.props.__P ? null : C(n);
}
function j(n) {
    if ((n = n.__) && n.__c && !n.props.__P) return n.__e = null, n.__k.some(function(t) {
        return t && (n.__e = t.__e);
    }), j(n);
}
function L(t) {
    (8 & t.__g || !(t.__g |= 8) || !r.push(t) || f++) && u == n.debounceRendering || ((u = n.debounceRendering) || queueMicrotask)(H);
}
function H() {
    var t, i, u, e, l, c, a, s, h;
    try {
        for(i = 1; r.length;)r.length > i && r.sort(o), t = r.shift(), i = r.length, 8 & t.__g && (e = void 0, l = void 0, c = (l = (u = t).__v).__e, a = [], s = [], (h = u.__P) && ((e = g({
            constructor: void 0
        }, l)).__v = l.__v + 1, n.vnode && n.vnode(e), z(h, e, l, u.__n, h.namespaceURI, 32 & l.__u ? [
            c
        ] : null, a, c || C(l), 32 & l.__u, s), e.__v = l.__v, e.__.__k[e.__i] = e, D(a, e, s), l.__ = l.__e = null, e.__e != c && j(e)));
    } finally{
        r.length = f = 0;
    }
}
function I(n, t, i, r, u, f, o, e, l, c, a) {
    var s, h, p, w, d, _, g = r.__k || y, b = t.length;
    for(l = A(i, t, g, l, b), s = 0; s < b; s++)null != (p = i.__k[s]) && (h = ~p.__i && g[p.__i] || v, p.__i = s, _ = z(n, p, h, u, f, o, e, l, c, a), w = p.__e, p.ref && (h.ref != p.ref || 8 & h.__u) && (h.ref != p.ref && h.ref && F(h.ref, null, p), a.push(p.ref, p.__c || w, p)), d = d || w, 4 & p.__u ? (l = O(p, l, n, !h.__v), h.__e && (h.__e = null)) : "function" == typeof p.type && void 0 !== _ ? l = _ : w && (l = w.nextSibling), p.__u &= -7);
    return i.__e = d, l;
}
function A(n, t, i, r, u) {
    var f, o, e, l, c, a, s, h, p, v, y = i.length, w = y, _ = 0, g = !1, b = n.__k = Array(u);
    for(f = 0; f < u; f++)null != (o = t[f]) && "boolean" != typeof o && "function" != typeof o ? ("object" != typeof o || o.constructor == String ? o = b[f] = M(null, o) : d(o) ? o = b[f] = M(x, {
        children: o
    }) : void 0 === o.constructor && o.__b ? o = b[f] = M(o.type, o.props, o.key, o.ref, o.__v) : b[f] = o, l = f + _, o.__ = n, o.__b = n.__b + 1, e = null, ~(c = o.__i = T(o, i, l, w)) && (w--, (e = i[c]) && (e.__u |= 2)), e && e.__v ? (o.__u |= 2, c == l - 1 ? _-- : c == l + 1 ? _++ : c != l && (c > l ? _-- : _++, g = !0)) : (~c || (u > y ? _-- : u < y && _++), "function" != typeof o.type && (o.__u |= 4))) : b[f] = null;
    if (g) {
        for(a = [], s = [], f = 0; f < u; f++)if ((o = b[f]) && 2 & o.__u) {
            for(h = 0, p = a.length; h < p;)a[v = h + p >> 1] < o.__i ? h = v + 1 : p = v;
            a[h] = o.__i, s[f] = h + 1;
        }
        for(_ = a.length; f--;)s[f] && (s[f] == _ ? _-- : b[f].__u |= 4);
    }
    if (w) for(f = 0; f < y; f++)!(e = i[f]) || 2 & e.__u || (e.__e == r && (r = C(e)), G(e, e));
    return r;
}
function O(n, t, i, r) {
    var u, f;
    if ("function" == typeof n.type) {
        if (n.props.__P) return t;
        if (u = n.__k) for(f = 0; f < u.length; f++)u[f] && (u[f].__ = n, t = O(u[f], t, i, !1));
        return t;
    }
    for(t && !t.parentNode && (t = C(n)) && !t.parentNode && (t = null), n.__e != t && (!r && i.moveBefore && n.__e.parentNode ? i.moveBefore(n.__e, t) : i.insertBefore(n.__e, t || null)), t = n.__e; (t = t && t.nextSibling) && 8 == t.nodeType;);
    return t;
}
function P(n, t) {
    return t = t || [], null != n && "boolean" != typeof n && (d(n) ? n.some(function(n) {
        P(n, t);
    }) : t.push(n)), t;
}
function T(n, t, i, r) {
    var u, f, o, e = n.key, l = n.type, c = t[i], a = c && !(2 & c.__u);
    if (null === c && null == e || a && e == c.key && l == c.type) return i;
    if (r > (a ? 1 : 0)) {
        for(u = i - 1, f = i + 1; u >= 0 || f < t.length;)if ((c = t[o = u >= 0 ? u-- : f++]) && !(2 & c.__u) && e == c.key && l == c.type) return o;
    }
    return -1;
}
function q(n, t, i) {
    null == i && (i = ""), "-" == t[0] ? n.setProperty(t, i) : n[t] = i;
}
function N(n, t, i, r, u) {
    var f;
    n: if ("style" == t) {
        if ("string" == typeof i) n.style.cssText = i;
        else {
            if ("string" == typeof r && (n.style.cssText = r = ""), r) for(t in r)i && t in i || q(n.style, t, "");
            if (i) for(t in i)r && i[t] == r[t] || q(n.style, t, i[t]);
        }
    } else if ("o" == t[0] && "n" == t[1]) f = t != (t = t.replace(c, "$1")), (t = t.slice(2))[0] < "a" && (t = t.toLowerCase()), (n.__e || (n.__e = {}))[t + f] = i, i ? r ? i[l] = r[l] : (i[l] = a, n.addEventListener(t, f ? h : s, f)) : n.removeEventListener(t, f ? h : s, f);
    else {
        if ("http://www.w3.org/2000/svg" == u) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != t && "height" != t && "href" != t && "list" != t && "form" != t && "tabIndex" != t && "download" != t && "rowSpan" != t && "colSpan" != t && "role" != t && "popover" != t && t in n) try {
            n[t] = null == i ? "" : i;
            break n;
        } catch (n) {}
        "function" == typeof i || (null == i || !1 === i && "-" != t[4] ? n.removeAttribute(t) : n.setAttribute(t, "popover" == t && 1 == i ? "" : i));
    }
}
function V(t) {
    return function(i) {
        if (this.__e) {
            var r = this.__e[i.type + t];
            if (null == i[e]) i[e] = a++;
            else if (i[e] < r[l]) return;
            return r(n.event ? n.event(i) : i);
        }
    };
}
function z(t, i, r, u, f, o, e, l, c, a) {
    var s, h, p, v, w, _, k, m, M, $, j, L, H, A, O, P, T, q, N, V, z = i.type;
    if (void 0 !== i.constructor) return null;
    if (128 & r.__u && (c = 32 & r.__u, s = r.__c.__z)) {
        if (i.__u |= c, h = o = [], 8 == s.nodeType) for(p = 1, v = s.nextSibling; v; v = v.nextSibling){
            if (8 == v.nodeType) {
                if (v.data.startsWith("$s")) p++;
                else if (v.data.startsWith("/$s") && !--p) break;
            }
            o.push(v);
        }
        else o.push(s);
        l = o[0];
    }
    (s = n.__b) && s(i);
    n: if ("function" == typeof z) {
        w = e.length;
        try {
            if ($ = i.props, j = (s = z.prototype) && s.render, L = (s = z.contextType) && u[s.__c], H = s ? L ? L.props.value : s.__ : u, r.__c ? 2 & (_ = i.__c = r.__c).__g && (_.__g |= 1) : (j ? i.__c = _ = new z($, H) : (i.__c = _ = new S($, H), _.constructor = z, _.render = J), L && L.sub(_), _.state || (_.state = {}), _.__n = u, _.__g |= 8, _.__h = [], _.__k = []), j && (_.__s || (_.__s = _.state), z.getDerivedStateFromProps && (_.__s == _.state && (_.__s = g({}, _.__s)), g(_.__s, z.getDerivedStateFromProps($, _.__s)))), k = _.props, m = _.state, _.__v = i, r.__c) {
                if (j && !z.getDerivedStateFromProps && $ !== k && _.componentWillReceiveProps && _.componentWillReceiveProps($, H), i.__v == r.__v && !(8 & _.__g) || !(4 & _.__g) && _.shouldComponentUpdate && !1 === _.shouldComponentUpdate($, _.__s, H)) {
                    i.__v != r.__v && (_.props = $, _.state = _.__s, _.__g &= -9), i.__e = r.__e, i.__k = r.__k, i.__k.some(function(n) {
                        n && (n.__ = i);
                    }), y.push.apply(_.__h, _.__k), _.__k = [], _.__h.length && e.push(_), l = C(r);
                    break n;
                }
                _.componentWillUpdate && _.componentWillUpdate($, _.__s, H), j && _.componentDidUpdate && _.__h.push(function() {
                    _.componentDidUpdate(k, m, M);
                });
            } else j && !z.getDerivedStateFromProps && _.componentWillMount && _.componentWillMount(), j && _.componentDidMount && _.__h.push(_.componentDidMount);
            if (_.context = H, _.props = $, _.__P = t, _.__g &= -5, A = n.__r, O = 0, j) _.state = _.__s, _.__g &= -9, A && A(i), s = _.render(_.props, _.state, _.context), y.push.apply(_.__h, _.__k), _.__k = [];
            else do _.__g &= -9, A && A(i), s = _.render(_.props, _.state, _.context), _.state = _.__s;
            while (8 & _.__g && ++O < 25);
            _.state = _.__s, _.getChildContext && (u = g({}, u, _.getChildContext())), j && r.__c && _.getSnapshotBeforeUpdate && (M = _.getSnapshotBeforeUpdate(k, m)), P = s && s.type === x && null == s.key ? s.props.children : s, $.__P && (s = l, f = (t = $.__P).namespaceURI, c = o = null, r.props && r.props.__P != t && (r.__k.some(function(n) {
                n && G(n, n);
            }), r.__k = null), l = r.__k ? C(r, 0) : null), l = I(t, d(P) ? P : [
                P
            ], i, r, u, f, o, e, l, c, a), $.__P && (i.__e = null, l = s), i.__u &= -161, 128 & r.__u && (_.__z = null), h && h.some(b), _.__h.length && e.push(_), 1 & _.__g && (_.__g &= -4);
        } catch (t) {
            if (e.length = w, i.__v = null, c || o) {
                if (t.then) {
                    if (T = 0, i.__u |= c ? 160 : 128, o) {
                        for(N = 0; N < o.length; N++)if (V = o[N]) {
                            if (8 == V.nodeType) {
                                if (o[N] = null, V.data.startsWith("$s")) T++ || (q = V);
                                else if (V.data.startsWith("/$s") && !--T) {
                                    l = V;
                                    break;
                                }
                            } else T && (o[N] = null);
                        }
                    }
                    if (!q) {
                        for(; l && 8 == l.nodeType && l.nextSibling;)l = l.nextSibling;
                        o && (o[o.indexOf(l)] = null), q = l;
                    }
                    i.__c.__z || (i.__c.__z = q), i.__e = l;
                } else o && o.some(b);
            } else i.__e = r.__e;
            i.__k || (i.__k = r.__k || []), t.then || B(i), n.__e(t, i, r);
        }
    } else l = i.__e = E(r.__e, i, r, u, f, o, e, c, a, t);
    return (s = n.diffed) && s(i), 128 & i.__u ? void 0 : l;
}
function B(n) {
    n && (n.__c && (n.__c.__g |= 4), n.__k && n.__k.some(B));
}
function D(t, i, r) {
    for(var u = 0; u < r.length;)F(r[u++], r[u++], r[u++]);
    n.__c && n.__c(i, t), t.some(function(i) {
        try {
            t = i.__h, i.__h = [], t.some(function(n) {
                n.call(i);
            });
        } catch (t) {
            n.__e(t, i.__v);
        }
    });
}
function E(t, i, r, u, f, o, e, l, c, a) {
    var s, h, p, y, g, k, m, M, $, x = r.props || v, S = i.props, j = i.type;
    if ("svg" == j ? f = "http://www.w3.org/2000/svg" : "math" == j ? f = "http://www.w3.org/1998/Math/MathML" : f || (f = "http://www.w3.org/1999/xhtml"), o) {
        for(s = 0; s < o.length; s++)if ((g = o[s]) && (j ? g.localName == j : 3 == g.nodeType)) {
            t = g, o[s] = null;
            break;
        }
    }
    if (!t) {
        if (M = a.ownerDocument || document, !j) return M.createTextNode(S);
        t = M.createElementNS(f, j, S.is && S), l && (n.__m && n.__m(i, o), l = !1), o = null;
    }
    if (j) {
        if (a = "template" == j ? t.content : t, o = "textarea" == j && null != S.defaultValue ? null : o && _.call(a.childNodes), !l && o) for(x = {}, s = 0; s < t.attributes.length; s++)x[(g = t.attributes[s]).name] = g.value;
        for(s in x)g = x[s], "dangerouslySetInnerHTML" == s ? p = g : "children" == s || s in S || "value" == s && "defaultValue" in S || "checked" == s && "defaultChecked" in S || N(t, s, null, g, f);
        for(s in $ = 1 & r.__u, S)g = S[s], "children" == s ? y = g : "dangerouslySetInnerHTML" == s ? h = g : "value" == s ? k = g : "checked" == s ? m = g : l && "function" != typeof g || !(x[s] !== g || $ && null != g) || N(t, s, g, x[s], f);
        h ? (l || p && (h.__html == p.__html || h.__html == t.innerHTML) || (t.innerHTML = h.__html), i.__k = []) : (p && (t.textContent = ""), ("foreignObject" == j || "http://www.w3.org/1998/Math/MathML" == f && w.test(j)) && (f = "http://www.w3.org/1999/xhtml"), I(a, d(y) ? y : [
            y
        ], i, r, u, f, o, e, o ? o[0] : r.__k && C(r, 0), l, c), o && o.some(b)), l && "textarea" != j || (s = "value", "progress" == j && null == k ? t.removeAttribute(s) : null == k || k === t[s] && ("progress" != j || k) || N(t, s, k, x[s], f), s = "checked", null != m && m != t[s] && N(t, s, m, x[s], f));
    } else x === S || l && t.data == S || (t.data = S);
    return t;
}
function F(t, i, r) {
    try {
        "function" == typeof t ? ("function" == typeof t.__u && t.__u(), ("function" != typeof t.__u || i) && (t.__u = t(i))) : t.current = i;
    } catch (t) {
        n.__e(t, r);
    }
}
function G(t, i, r) {
    var u, f;
    if (n.unmount && n.unmount(t), !(u = t.ref) || u.current && u.current != t.__e || F(u, null, i), u = t.__c) {
        if (u.componentWillUnmount) try {
            u.componentWillUnmount();
        } catch (t) {
            n.__e(t, i);
        }
        u.__P = u.__n = null;
    }
    if (u = t.__k) for(f = 0; f < u.length; f++)u[f] && G(u[f], i, "function" != typeof t.type || r && !t.props.__P);
    (u = t.__e) && (r || b(u), u.__e && (u.__e = null)), t.__e = t.__c = t.__ = null;
}
function J(n, t, i) {
    return this.constructor(n, i);
}
function K(t, i) {
    var r, u, f, o;
    n.__ && n.__(t, i), 9 == i.nodeType && (i = i.documentElement), u = (r = t && 32 & t.__u) ? null : i.__k, i.__k = M(x, {
        children: [
            t
        ]
    }), f = [], o = [], z(i, i.__k, u || v, v, i.namespaceURI, u ? null : i.firstChild ? _.call(i.childNodes) : null, f, u ? u.__e : i.firstChild, r, o), D(f, i.__k, o), i.__k.props.children = null;
}
function Q(n, t) {
    n && "object" == typeof n && (n.__u |= 32), K(n, t);
}
function R(n) {
    function t(n) {
        var i, r;
        return this.getChildContext || (i = new Set, (r = {})[t.__c] = this, this.getChildContext = function() {
            return r;
        }, this.shouldComponentUpdate = function(n) {
            this.props.value != n.value && i.forEach(function(n) {
                n.__g |= 4, L(n);
            });
        }, this.sub = function(n) {
            i.add(n);
            var t = n.componentWillUnmount;
            n.componentWillUnmount = function() {
                i.delete(n), t && t.call(n);
            };
        }), n.children;
    }
    return t.__c = "__cC" + p++, t.__ = n, t.Provider = (t.Consumer = function(n, t) {
        return n.children(t);
    }).contextType = t, t;
}
function U(n) {
    return n.children;
}
function W(n, t) {
    return M(U, {
        __P: t,
        children: n
    });
}
n = {
    __e: function(n, t, i, r) {
        for(var u, o, e; t = t.__;)if ((u = t.__c) && !(1 & u.__g)) {
            u.__g |= 4;
            try {
                if ((o = u.constructor) && o.getDerivedStateFromError && (u.setState(o.getDerivedStateFromError(n)), e = 8 & u.__g), u.componentDidCatch && (u.componentDidCatch(n, r || {}), e = 8 & u.__g), e) return void (u.__g |= 2);
            } catch (t) {
                n = t, e = 0;
            }
        }
        throw f = 0, n;
    }
}, t = 0, i = function(n) {
    return null != n && void 0 === n.constructor;
}, S.prototype.setState = function(n, t) {
    var i = this.__s;
    i && i != this.state || (i = this.__s = g({}, this.state)), "function" == typeof n && (n = n(g({}, i), this.props)), n && (g(i, n), this.__v && (t && this.__k.push(t), L(this)));
}, S.prototype.forceUpdate = function(n) {
    this.__v && (this.__g |= 4, n && this.__h.push(n), L(this));
}, S.prototype.render = x, r = [], f = 0, o = function(n, t) {
    return n.__v.__b - t.__v.__b;
}, e = Symbol(), l = Symbol(), c = /(PointerCapture)$|Capture$/i, a = 0, s = V(!1), h = V(!0), p = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hDUPi":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8RhID":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>(0, _preact.Component));
parcelHelpers.export(exports, "Fragment", ()=>(0, _preact.Fragment));
parcelHelpers.export(exports, "StrictMode", ()=>(0, _preact.Fragment));
parcelHelpers.export(exports, "createContext", ()=>(0, _preact.createContext));
parcelHelpers.export(exports, "createElement", ()=>(0, _preact.createElement));
parcelHelpers.export(exports, "createRef", ()=>(0, _preact.createRef));
parcelHelpers.export(exports, "Children", ()=>C);
parcelHelpers.export(exports, "PureComponent", ()=>I);
parcelHelpers.export(exports, "Suspense", ()=>on);
parcelHelpers.export(exports, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", ()=>tn);
parcelHelpers.export(exports, "cloneElement", ()=>dn);
parcelHelpers.export(exports, "createFactory", ()=>an);
parcelHelpers.export(exports, "createPortal", ()=>U);
parcelHelpers.export(exports, "default", ()=>_n);
parcelHelpers.export(exports, "findDOMNode", ()=>pn);
parcelHelpers.export(exports, "flushSync", ()=>mn);
parcelHelpers.export(exports, "forwardRef", ()=>k);
parcelHelpers.export(exports, "hydrate", ()=>G);
parcelHelpers.export(exports, "isElement", ()=>ln);
parcelHelpers.export(exports, "isFragment", ()=>sn);
parcelHelpers.export(exports, "isMemo", ()=>vn);
parcelHelpers.export(exports, "isValidElement", ()=>ln);
parcelHelpers.export(exports, "lazy", ()=>fn);
parcelHelpers.export(exports, "memo", ()=>A);
parcelHelpers.export(exports, "render", ()=>q);
parcelHelpers.export(exports, "startTransition", ()=>M);
parcelHelpers.export(exports, "unmountComponentAtNode", ()=>hn);
parcelHelpers.export(exports, "unstable_batchedUpdates", ()=>yn);
parcelHelpers.export(exports, "use", ()=>nn);
parcelHelpers.export(exports, "useDeferredValue", ()=>D);
parcelHelpers.export(exports, "useEffectEvent", ()=>N);
parcelHelpers.export(exports, "useInsertionEffect", ()=>L);
parcelHelpers.export(exports, "useSyncExternalStore", ()=>Z);
parcelHelpers.export(exports, "useTransition", ()=>F);
parcelHelpers.export(exports, "version", ()=>cn);
var _preact = require("preact");
var _hooks = require("preact/hooks");
parcelHelpers.exportAll(_hooks, exports);
var S = function(t, e, r) {
    return null == t ? null : (0, _preact.toChildArray)((0, _preact.toChildArray)(t).map(e.bind(r)));
}, C = {
    map: S,
    forEach: S,
    count: function(t) {
        return t ? (0, _preact.toChildArray)(t).length : 0;
    },
    only: function(t) {
        var e = (0, _preact.toChildArray)(t);
        if (1 != e.length) throw "Children.only";
        return e[0];
    },
    toArray: (0, _preact.toChildArray)
}, w = Object.assign;
function R(n, t) {
    for(var e in n)if ("__source" != e && n[e] !== t[e]) return !0;
    for(var r in t)if ("__source" != r && !(r in n)) return !0;
    return !1;
}
var x = /^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini)/;
function O() {
    function n(n, t) {
        this.props = n, this.context = t;
    }
    return (n.prototype = new (0, _preact.Component)).isPureReactComponent = !0, n.prototype.shouldComponentUpdate = function(n, t) {
        return R(this.props, n) || R(this.state, t);
    }, n;
}
var I = /* @__PURE__ */ O(), j = Symbol.for("react.forward_ref");
function k(n) {
    function t(t) {
        var e = w({}, t);
        return delete e.ref, n(e, t.ref || null);
    }
    return t.$$typeof = j, t.render = n, t.prototype.isReactComponent = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}
function M(n) {
    n();
}
function D(n) {
    return n;
}
function F() {
    return [
        !1,
        M
    ];
}
var L = (0, _hooks.useLayoutEffect);
function N(n) {
    var t = (0, _hooks.useRef)(n);
    return t.current = n, function() {
        return t.current.apply(void 0, arguments);
    };
}
function A(n, t) {
    function r(n) {
        var e = this.props.ref;
        return e != n.ref && e && ("function" == typeof e ? e(null) : e.current = null), t ? !t(this.props, n) || e != n.ref : R(this.props, n);
    }
    function u(t) {
        return this.shouldComponentUpdate = r, (0, _preact.createElement)(n, t);
    }
    return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.type = n, u;
}
function U(n, t) {
    var e = (0, _preact.createPortal)(n, t);
    return e.containerInfo = t, e;
}
var V, T, W, P = Symbol.for("react.element"), $ = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(?!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, z = /[A-Z0-9]/g, H = typeof document < "u", Z = /* @__PURE__ */ X(function(n, t, e) {
    var r = (0, _preact.options).__s || T ? (e || t)() : t(), o = (0, _hooks.useState)({
        t: {
            __: r,
            u: t
        }
    }), i = o[0].t, f = o[1];
    return (0, _hooks.useLayoutEffect)(function() {
        i.__ = r, i.u = t, B(i) && f({
            t: i
        });
    }, [
        n,
        r,
        t
    ]), (0, _hooks.useEffect)(function() {
        return B(i) && f({
            t: i
        }), n(function() {
            B(i) && f({
                t: i
            });
        });
    }, [
        n
    ]), r;
});
function B(n) {
    try {
        return !Object.is(n.__, n.u());
    } catch (n) {
        return !0;
    }
}
var Y = function(n) {
    return /fil|che|rad/.test(n);
};
function q(n, t, e) {
    return null == t.__k && (t.textContent = ""), (0, _preact.render)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function G(n, t, e) {
    return (0, _preact.hydrate)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
(0, _preact.Component).prototype.isReactComponent = !0, [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate"
].forEach(function(n) {
    Object.defineProperty((0, _preact.Component).prototype, n, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + n];
        },
        set: function(t) {
            Object.defineProperty(this, n, {
                configurable: !0,
                writable: !0,
                value: t
            });
        }
    });
});
var J = (0, _preact.options).event;
(0, _preact.options).event = function(n) {
    return J && (n = J(n)), n.persist = function() {}, n.isPropagationStopped = function() {
        return this.cancelBubble;
    }, n.isDefaultPrevented = function() {
        return this.defaultPrevented;
    }, n.nativeEvent = n;
};
var K = {
    configurable: !0,
    get: function() {
        return this.class;
    }
}, Q = (0, _preact.options).vnode;
function X(n) {
    if (!W) {
        W = !0;
        var t = (0, _preact.options).__r;
        (0, _preact.options).__r = function(n) {
            t && t(n), 32 & n.__u && (T = n), V = n.__c;
        };
        var e = (0, _preact.options).diffed;
        (0, _preact.options).diffed = function(n) {
            e && e(n), V = null, T == n && (T = null);
        };
    }
    return n;
}
(0, _preact.options).vnode = function(t) {
    if ("string" == typeof t.type) !function(t) {
        var e = t.props, r = t.type, u = {}, o = -1 == r.indexOf("-");
        for(var i in e){
            var f = e[i];
            if (!("value" == i && "defaultValue" in e && null == f || H && "children" == i && "noscript" == r || "class" == i || "className" == i)) {
                if ("style" == i && "object" == typeof f) {
                    var c = void 0;
                    for(var a in f)"number" != typeof f[a] || x.test(a) || (c || (c = f = w({}, f)), f[a] += "px");
                } else if ("defaultValue" == i && "value" in e && null == e.value) i = "value";
                else if ("download" == i && !0 === f) f = "";
                else if ("translate" == i && "no" === f) f = !1;
                else if ("o" == i[0] && "n" == i[1]) {
                    var l = i.toLowerCase();
                    "ondoubleclick" == l ? i = "ondblclick" : "onchange" != l || "input" != r && "textarea" != r || Y(e.type) ? "onfocus" == l ? i = "onfocusin" : "onblur" == l && (i = "onfocusout") : l = i = "oninput", "oninput" == l && u[i = l] && (i = "oninputCapture");
                } else o && $.test(i) ? i = i.replace(z, "-$&").toLowerCase() : null === f && (f = void 0);
                u[i] = f;
            }
        }
        "select" == r && (u.multiple && Array.isArray(u.value) && (u.value = (0, _preact.toChildArray)(e.children).forEach(function(n) {
            n.props.selected = -1 != u.value.indexOf(n.props.value);
        })), null != u.defaultValue && (u.value = (0, _preact.toChildArray)(e.children).forEach(function(n) {
            n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
        }))), e.class && !e.className ? (u.class = e.class, Object.defineProperty(u, "className", K)) : e.className && (u.class = u.className = e.className), t.props = u;
    }(t);
    else if ("function" == typeof t.type && ("ref" in t.props && "prototype" in t.type && t.type.prototype.render && (t.ref = t.props.ref, delete t.props.ref), t.type.defaultProps)) {
        var e = w({}, t.props);
        for(var r in t.type.defaultProps)void 0 === e[r] && (e[r] = t.type.defaultProps[r]);
        t.props = e;
    }
    t.ref && !("ref" in t.props) && Object.defineProperty(t.props, "ref", {
        value: t.ref,
        configurable: !0,
        writable: !0
    }), t.$$typeof = P, Q && Q(t);
};
var nn = /* @__PURE__ */ X(function(n) {
    if (n.then) {
        if ("fulfilled" == n.status) return n.value;
        if ("rejected" == n.status) throw n.reason;
        throw n.status || (n.status = "pending", n.then(function(t) {
            n.status = "fulfilled", n.value = t;
        }, function(t) {
            n.status = "rejected", n.reason = t;
        })), n;
    }
    var t = n.__c, e = V.__n[t];
    return e ? (V[t] || (V[t] = !0, e.sub(V)), e.props.value) : n.__;
}), tn = {
    ReactCurrentDispatcher: {
        current: {
            readContext: nn,
            useCallback: (0, _hooks.useCallback),
            useContext: (0, _hooks.useContext),
            useDebugValue: (0, _hooks.useDebugValue),
            useDeferredValue: D,
            useEffect: (0, _hooks.useEffect),
            useId: (0, _hooks.useId),
            useImperativeHandle: (0, _hooks.useImperativeHandle),
            useInsertionEffect: L,
            useLayoutEffect: (0, _hooks.useLayoutEffect),
            useMemo: (0, _hooks.useMemo),
            useReducer: (0, _hooks.useReducer),
            useRef: (0, _hooks.useRef),
            useState: (0, _hooks.useState),
            useSyncExternalStore: Z,
            useTransition: F
        }
    }
};
function en(n, t, e) {
    if (n) {
        var r = n.__c && n.__c.__H;
        r && (r.__.forEach(function(n) {
            null != n.__P && ("function" == typeof n.__c && n.__c(), n.__c = n.__H = void 0);
        }), r.__h = n.__c.__h = []), "string" == typeof n.type && (n.__u |= 8), null != (n = w({
            constructor: void 0
        }, n)).__c && (n.__c.__P == e && (n.__c.__P = t), n.__c.__g |= 4, n.__c = null), n.__k = n.__k && n.__k.map(function(n) {
            return en(n, t, e);
        });
    }
    return n;
}
function rn(n, t, e) {
    return n && e && ("string" == typeof n.type && (n.__u |= 1), n.__v = null, n.__k = n.__k && n.__k.map(function(n) {
        return rn(n, t, e);
    }), n.__c && n.__c.__P == t && (n.__e && e.appendChild(n.__e), n.__c.__g |= 4, n.__c.__P = e)), n;
}
function un() {
    function n() {
        this.__u = 0, this.o = null, this.__b = null;
    }
    return function() {
        var n = (0, _preact.options).__e;
        (0, _preact.options).__e = function(t, e, r, u) {
            if (t.then) {
                for(var o, i = e; i = i.__;)if ((o = i.__c) && o.__c) return r && !r.__c && (e.__c.__H = void 0), o.__c(t, e);
            }
            n(t, e, r, u);
        };
        var t = (0, _preact.options).unmount;
        (0, _preact.options).unmount = function(n) {
            var e = n.__c;
            e && e.__R && e.__R(), t && t(n);
        };
    }(), (n.prototype = new (0, _preact.Component)).__c = function(n, t) {
        var e = this, r = t.__c;
        null == this.o && (this.o = []), this.o.push(r);
        var u = !1, o = function() {
            !u && e.__P && (u = !0, r.__R = null, f());
        };
        r.__R = o;
        var i = r.__P;
        r.__P = null;
        var f = function() {
            if (!--e.__u) {
                if (e.state.__a) {
                    var n = e.state.__a;
                    e.__v.__k[0] = rn(n, n.__c.__P, n.__c.__O);
                }
                var t;
                for(e.setState({
                    __a: e.__b = null
                }); t = e.o.pop();)t.__P = i, t.forceUpdate();
            }
        };
        this.__u++ || 32 & t.__u || this.setState({
            __a: this.__b = this.__v.__k[0]
        }), n.then(o, o);
    }, n.prototype.componentWillUnmount = function() {
        this.o = [];
    }, n.prototype.render = function(n, t) {
        if (this.__b) {
            if (this.__v.__k) {
                var r = document.createElement("div"), u = this.__v.__k[0].__c;
                this.__v.__k[0] = en(this.__b, r, u.__O = u.__P);
            }
            this.__b = null;
        }
        return [
            (0, _preact.createElement)((0, _preact.Fragment), null, t.__a ? null : n.children),
            t.__a && (0, _preact.createElement)((0, _preact.Fragment), null, n.fallback)
        ];
    }, n;
}
var on = /* @__PURE__ */ un();
function fn(n) {
    var t, r, u, o = null;
    function i(i) {
        if (t || (t = n()).then(function(n) {
            n && (o = n.default || n), u = !0;
        }, function(n) {
            r = n, u = !0;
        }), r) throw r;
        if (!u) throw t;
        return o ? (0, _preact.createElement)(o, i) : null;
    }
    return i.displayName = "Lazy", i;
}
var cn = "19.0.0";
function an(n) {
    return (0, _preact.createElement).bind(null, n);
}
function ln(n) {
    return !!n && n.$$typeof === P;
}
function sn(n) {
    return ln(n) && n.type == (0, _preact.Fragment);
}
function vn(n) {
    return !!n && "string" == typeof n.displayName && 0 == n.displayName.indexOf("Memo(");
}
function dn(n) {
    return ln(n) ? (0, _preact.cloneElement).apply(null, arguments) : n;
}
function hn(n) {
    return !!n.__k && ((0, _preact.render)(null, n), !0);
}
function pn(n) {
    return n && (n.__v && n.__v.__e || 1 == n.nodeType && n) || null;
}
var mn = function(n, t) {
    var e, r = (0, _preact.options).debounceRendering;
    (0, _preact.options).debounceRendering = function(n) {
        e = n;
    };
    try {
        var o = n(t);
        return e && e(), o;
    } finally{
        (0, _preact.options).debounceRendering = r;
    }
};
function yn(n, t) {
    return n(t);
}
var _n = {
    useState: (0, _hooks.useState),
    useId: (0, _hooks.useId),
    useReducer: (0, _hooks.useReducer),
    useEffect: (0, _hooks.useEffect),
    useLayoutEffect: (0, _hooks.useLayoutEffect),
    useInsertionEffect: L,
    useTransition: F,
    useDeferredValue: D,
    useSyncExternalStore: Z,
    useEffectEvent: N,
    startTransition: M,
    useRef: (0, _hooks.useRef),
    useImperativeHandle: (0, _hooks.useImperativeHandle),
    useMemo: (0, _hooks.useMemo),
    useCallback: (0, _hooks.useCallback),
    useContext: (0, _hooks.useContext),
    use: nn,
    useDebugValue: (0, _hooks.useDebugValue),
    version: "19.0.0",
    Children: C,
    render: q,
    hydrate: G,
    unmountComponentAtNode: hn,
    createPortal: U,
    createElement: (0, _preact.createElement),
    createContext: (0, _preact.createContext),
    createFactory: an,
    cloneElement: dn,
    createRef: (0, _preact.createRef),
    Fragment: (0, _preact.Fragment),
    isValidElement: ln,
    isElement: ln,
    isFragment: sn,
    isMemo: vn,
    findDOMNode: pn,
    Component: (0, _preact.Component),
    PureComponent: I,
    memo: A,
    forwardRef: k,
    flushSync: mn,
    unstable_batchedUpdates: yn,
    StrictMode: (0, _preact.Fragment),
    Suspense: on,
    lazy: fn,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: tn
};

},{"preact":"h65yd","preact/hooks":"a768r","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"a768r":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useCallback", ()=>j);
parcelHelpers.export(exports, "useContext", ()=>w);
parcelHelpers.export(exports, "useDebugValue", ()=>x);
parcelHelpers.export(exports, "useEffect", ()=>A);
parcelHelpers.export(exports, "useErrorBoundary", ()=>O);
parcelHelpers.export(exports, "useId", ()=>P);
parcelHelpers.export(exports, "useImperativeHandle", ()=>q);
parcelHelpers.export(exports, "useLayoutEffect", ()=>F);
parcelHelpers.export(exports, "useMemo", ()=>b);
parcelHelpers.export(exports, "useReducer", ()=>_);
parcelHelpers.export(exports, "useRef", ()=>T);
parcelHelpers.export(exports, "useState", ()=>d);
var _preact = require("preact");
var t, r, u, i, o = Object.is, f = 0, c = [], e = [], a = (0, _preact.options), v = a.__b, l = a.__r, m = a.diffed, s = a.__c, h = a.unmount, p = a.__;
function y(n, t) {
    a.__h && a.__h(r, n, f || t), f = 0;
    var u = r.__H || (r.__H = {
        __: [],
        __h: []
    });
    return n >= u.__.length && u.__.push({}), u.__[n];
}
function d(n) {
    return f = 1, _(G, n);
}
function _(n, u, i) {
    var f = y(t++, 2);
    if (f.t = n, !f.__c && (f.__ = [
        i ? i(u) : G(void 0, u),
        function(n) {
            var t = f.__N ? f.__N[0] : f.__[0], r = f.t(t, n);
            o(t, r) || (f.__N = [
                r,
                f.__[1]
            ], f.__c.setState({}));
        }
    ], f.__c = r, !r.__f)) {
        r.__f = !0;
        var c = r.shouldComponentUpdate;
        r.shouldComponentUpdate = function(n, t, r) {
            var u = this.__H;
            if (!u) return !0;
            var i = !1, f = this.props != n;
            if (u.__.some(function(n) {
                n.__N && (i = !0, o(n.__[0], n.__N[0]) || (f = !0));
            }), c) {
                var e = c.call(this, n, t, r);
                return i ? e || f : e;
            }
            return !i || f;
        };
    }
    return f.__;
}
function A(n, u) {
    var i = y(t++, 3);
    !a.__s && E(i.__H, u) && (i.__P = !0, i.__ = n, i.u = u, r.__H.__h.push(i));
}
function F(n, u) {
    var i = y(t++, 4);
    !a.__s && E(i.__H, u) && (i.__P = !1, i.__ = n, i.u = u, r.__h.push(i));
}
function T(n) {
    return f = 5, b(function() {
        return {
            current: n
        };
    }, []);
}
function q(n, t, r) {
    f = 6, F(function() {
        if ("function" == typeof n) {
            var r = n(t());
            return function() {
                n(null), r && "function" == typeof r && r();
            };
        }
        if (n) return n.current = t(), function() {
            return n.current = null;
        };
    }, null == r ? r : r.concat(n));
}
function b(n, r) {
    var u = y(t++, 7);
    return E(u.__H, r) && (u.__ = n(), u.__H = r), u.__;
}
function j(n, t) {
    return f = 8, b(function() {
        return n;
    }, t);
}
function w(n) {
    var u = r.context[n.__c], i = y(t++, 9);
    return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function x(n, t) {
    a.useDebugValue && a.useDebugValue(t ? t(n) : n);
}
function O(n) {
    var u = y(t++, 10), i = d();
    return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function(n, t) {
        u.__ && u.__(n, t), i[1](n);
    }), [
        i[0],
        function() {
            i[1](void 0);
        }
    ];
}
function P() {
    var n = y(t++, 11);
    if (!n.__) {
        for(var u = r.__v; !u.__m && u.__;)u = u.__;
        var i = u.__m || (u.__m = [
            0,
            0
        ]);
        n.__ = "P" + i[0] + "-" + i[1]++;
    }
    return n.__;
}
function g() {
    var n;
    do {
        for(; n = e.shift();)try {
            C(n);
        } catch (t) {
            a.__e(t, {
                __: (n = n.__P) && n.__v
            });
        }
        for(; n = c.shift();){
            var t = n.__H;
            if (n.__P && t) try {
                t.__h.some(C), t.__h.some(D), t.__h = [];
            } catch (r) {
                t.__h = [], a.__e(r, n.__v);
            }
        }
    }while (e.length);
}
a.__b = function(n) {
    r = null, v && v(n);
}, a.__ = function(n, t) {
    n && t.__k && t.__k.__m && (n.__m = t.__k.__m), p && p(n, t);
}, a.__r = function(n) {
    l && l(n), t = 0;
    var i = (r = n.__c).__H;
    i && (u == r ? r.__h = [] : (i.__h.some(C), i.__h.some(D), t = 0), i.__h = [], i.__.some(function(n) {
        n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })), u = r;
}, a.diffed = function(n) {
    m && m(n);
    var t = n.__c;
    t && t.__H && (t.__H.__h.length && B(c.push(t)), t.__H.__.some(function(n) {
        n.u && (n.__H = n.u);
    })), u = r = null;
}, a.__c = function(n, t) {
    t.some(function(n) {
        try {
            n.__h.some(C), n.__h = n.__h.filter(function(n) {
                return !n.__ || D(n);
            });
        } catch (r) {
            t.some(function(n) {
                n.__h && (n.__h = []);
            }), t = [], a.__e(r, n.__v);
        }
    }), s && s(n, t);
}, a.unmount = function(n) {
    h && h(n);
    var t, r, u = n.__c;
    u && u.__H && (u.__H.__.some(function(u) {
        try {
            if (u.__P && u.__c) {
                if (void 0 === r) {
                    for(r = n.__; r && (!r.__c || !r.__c.__P);)r = r.__;
                    r = r && r.__c;
                }
                u.__P = r, B(e.push(u));
            } else C(u);
        } catch (n) {
            t = n;
        }
    }), u.__H = void 0, t && a.__e(t, u.__v));
};
var k = "function" == typeof requestAnimationFrame;
function z(n) {
    var t, r = function() {
        clearTimeout(u), k && cancelAnimationFrame(t), setTimeout(n);
    }, u = setTimeout(r, 35);
    k && (t = requestAnimationFrame(r));
}
function B(n) {
    1 != n && i == a.requestAnimationFrame || ((i = a.requestAnimationFrame) || z)(g);
}
function C(n) {
    var t = r, u = n.__c;
    "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function D(n) {
    var t = r;
    n.__c = n.__(), r = t;
}
function E(n, t) {
    return !n || n.length != t.length || t.some(function(t, r) {
        return !o(t, n[r]);
    });
}
function G(n, t) {
    return "function" == typeof t ? t(n) : t;
}

},{"preact":"h65yd","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

