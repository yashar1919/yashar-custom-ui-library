import Xe, { forwardRef as ze, useState as pe } from "react";
var ue = { exports: {} }, le = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function qe() {
  if (Ee) return le;
  Ee = 1;
  var e = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function o(t, n, l) {
    var c = null;
    if (l !== void 0 && (c = "" + l), n.key !== void 0 && (c = "" + n.key), "key" in n) {
      l = {};
      for (var h in n)
        h !== "key" && (l[h] = n[h]);
    } else l = n;
    return n = l.ref, {
      $$typeof: e,
      type: t,
      key: c,
      ref: n !== void 0 ? n : null,
      props: l
    };
  }
  return le.Fragment = s, le.jsx = o, le.jsxs = o, le;
}
var ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function He() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === D ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case A:
          return "Fragment";
        case F:
          return "Profiler";
        case z:
          return "StrictMode";
        case L:
          return "Suspense";
        case $:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case C:
            return "Portal";
          case _:
            return r.displayName || "Context";
          case O:
            return (r._context.displayName || "Context") + ".Consumer";
          case v:
            var m = r.render;
            return r = r.displayName, r || (r = m.displayName || m.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case u:
            return m = r.displayName || null, m !== null ? m : e(r.type) || "Memo";
          case T:
            m = r._payload, r = r._init;
            try {
              return e(r(m));
            } catch {
            }
        }
      return null;
    }
    function s(r) {
      return "" + r;
    }
    function o(r) {
      try {
        s(r);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var b = m.error, y = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return b.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          y
        ), s(r);
      }
    }
    function t(r) {
      if (r === A) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === T)
        return "<...>";
      try {
        var m = e(r);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var r = G.A;
      return r === null ? null : r.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function c(r) {
      if (B.call(r, "key")) {
        var m = Object.getOwnPropertyDescriptor(r, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function h(r, m) {
      function b() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      b.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: b,
        configurable: !0
      });
    }
    function f() {
      var r = e(this.type);
      return V[r] || (V[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function w(r, m, b, y, W, Z) {
      var p = b.ref;
      return r = {
        $$typeof: S,
        type: r,
        key: m,
        props: b,
        _owner: y
      }, (p !== void 0 ? p : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function x(r, m, b, y, W, Z) {
      var p = m.children;
      if (p !== void 0)
        if (y)
          if (H(p)) {
            for (y = 0; y < p.length; y++)
              E(p[y]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else E(p);
      if (B.call(m, "key")) {
        p = e(r);
        var q = Object.keys(m).filter(function(ee) {
          return ee !== "key";
        });
        y = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", X[p + y] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          y,
          p,
          q,
          p
        ), X[p + y] = !0);
      }
      if (p = null, b !== void 0 && (o(b), p = "" + b), c(m) && (o(m.key), p = "" + m.key), "key" in m) {
        b = {};
        for (var U in m)
          U !== "key" && (b[U] = m[U]);
      } else b = m;
      return p && h(
        b,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), w(
        r,
        p,
        b,
        n(),
        W,
        Z
      );
    }
    function E(r) {
      N(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === T && (r._payload.status === "fulfilled" ? N(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function N(r) {
      return typeof r == "object" && r !== null && r.$$typeof === S;
    }
    var M = Xe, S = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), D = Symbol.for("react.client.reference"), G = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, H = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    M = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var P, V = {}, d = M.react_stack_bottom_frame.bind(
      M,
      l
    )(), J = I(t(l)), X = {};
    ce.Fragment = A, ce.jsx = function(r, m, b) {
      var y = 1e4 > G.recentlyCreatedOwnerStacks++;
      return x(
        r,
        m,
        b,
        !1,
        y ? Error("react-stack-top-frame") : d,
        y ? I(t(r)) : J
      );
    }, ce.jsxs = function(r, m, b) {
      var y = 1e4 > G.recentlyCreatedOwnerStacks++;
      return x(
        r,
        m,
        b,
        !0,
        y ? Error("react-stack-top-frame") : d,
        y ? I(t(r)) : J
      );
    };
  })()), ce;
}
var Ce;
function Ze() {
  return Ce || (Ce = 1, process.env.NODE_ENV === "production" ? ue.exports = qe() : ue.exports = He()), ue.exports;
}
var k = Ze();
function Pe(e) {
  var s, o, t = "";
  if (typeof e == "string" || typeof e == "number") t += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (s = 0; s < n; s++) e[s] && (o = Pe(e[s])) && (t && (t += " "), t += o);
  } else for (o in e) e[o] && (t && (t += " "), t += o);
  return t;
}
function Qe() {
  for (var e, s, o = 0, t = "", n = arguments.length; o < n; o++) (e = arguments[o]) && (s = Pe(e)) && (t && (t += " "), t += s);
  return t;
}
const ke = "-", Ke = (e) => {
  const s = rr(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: t
  } = e;
  return {
    getClassGroupId: (c) => {
      const h = c.split(ke);
      return h[0] === "" && h.length !== 1 && h.shift(), Me(h, s) || er(c);
    },
    getConflictingClassGroupIds: (c, h) => {
      const f = o[c] || [];
      return h && t[c] ? [...f, ...t[c]] : f;
    }
  };
}, Me = (e, s) => {
  if (e.length === 0)
    return s.classGroupId;
  const o = e[0], t = s.nextPart.get(o), n = t ? Me(e.slice(1), t) : void 0;
  if (n)
    return n;
  if (s.validators.length === 0)
    return;
  const l = e.join(ke);
  return s.validators.find(({
    validator: c
  }) => c(l))?.classGroupId;
}, Te = /^\[(.+)\]$/, er = (e) => {
  if (Te.test(e)) {
    const s = Te.exec(e)[1], o = s?.substring(0, s.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, rr = (e) => {
  const {
    theme: s,
    classGroups: o
  } = e, t = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in o)
    he(o[n], t, n, s);
  return t;
}, he = (e, s, o, t) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const l = n === "" ? s : je(s, n);
      l.classGroupId = o;
      return;
    }
    if (typeof n == "function") {
      if (tr(n)) {
        he(n(t), s, o, t);
        return;
      }
      s.validators.push({
        validator: n,
        classGroupId: o
      });
      return;
    }
    Object.entries(n).forEach(([l, c]) => {
      he(c, je(s, l), o, t);
    });
  });
}, je = (e, s) => {
  let o = e;
  return s.split(ke).forEach((t) => {
    o.nextPart.has(t) || o.nextPart.set(t, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(t);
  }), o;
}, tr = (e) => e.isThemeGetter, or = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let s = 0, o = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  const n = (l, c) => {
    o.set(l, c), s++, s > e && (s = 0, t = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let c = o.get(l);
      if (c !== void 0)
        return c;
      if ((c = t.get(l)) !== void 0)
        return n(l, c), c;
    },
    set(l, c) {
      o.has(l) ? o.set(l, c) : n(l, c);
    }
  };
}, xe = "!", ye = ":", sr = ye.length, nr = (e) => {
  const {
    prefix: s,
    experimentalParseClassName: o
  } = e;
  let t = (n) => {
    const l = [];
    let c = 0, h = 0, f = 0, w;
    for (let S = 0; S < n.length; S++) {
      let C = n[S];
      if (c === 0 && h === 0) {
        if (C === ye) {
          l.push(n.slice(f, S)), f = S + sr;
          continue;
        }
        if (C === "/") {
          w = S;
          continue;
        }
      }
      C === "[" ? c++ : C === "]" ? c-- : C === "(" ? h++ : C === ")" && h--;
    }
    const x = l.length === 0 ? n : n.substring(f), E = ar(x), N = E !== x, M = w && w > f ? w - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: N,
      baseClassName: E,
      maybePostfixModifierPosition: M
    };
  };
  if (s) {
    const n = s + ye, l = t;
    t = (c) => c.startsWith(n) ? l(c.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: c,
      maybePostfixModifierPosition: void 0
    };
  }
  if (o) {
    const n = t;
    t = (l) => o({
      className: l,
      parseClassName: n
    });
  }
  return t;
}, ar = (e) => e.endsWith(xe) ? e.substring(0, e.length - 1) : e.startsWith(xe) ? e.substring(1) : e, ir = (e) => {
  const s = Object.fromEntries(e.orderSensitiveModifiers.map((t) => [t, !0]));
  return (t) => {
    if (t.length <= 1)
      return t;
    const n = [];
    let l = [];
    return t.forEach((c) => {
      c[0] === "[" || s[c] ? (n.push(...l.sort(), c), l = []) : l.push(c);
    }), n.push(...l.sort()), n;
  };
}, lr = (e) => ({
  cache: or(e.cacheSize),
  parseClassName: nr(e),
  sortModifiers: ir(e),
  ...Ke(e)
}), cr = /\s+/, dr = (e, s) => {
  const {
    parseClassName: o,
    getClassGroupId: t,
    getConflictingClassGroupIds: n,
    sortModifiers: l
  } = s, c = [], h = e.trim().split(cr);
  let f = "";
  for (let w = h.length - 1; w >= 0; w -= 1) {
    const x = h[w], {
      isExternal: E,
      modifiers: N,
      hasImportantModifier: M,
      baseClassName: S,
      maybePostfixModifierPosition: C
    } = o(x);
    if (E) {
      f = x + (f.length > 0 ? " " + f : f);
      continue;
    }
    let A = !!C, z = t(A ? S.substring(0, C) : S);
    if (!z) {
      if (!A) {
        f = x + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (z = t(S), !z) {
        f = x + (f.length > 0 ? " " + f : f);
        continue;
      }
      A = !1;
    }
    const F = l(N).join(":"), O = M ? F + xe : F, _ = O + z;
    if (c.includes(_))
      continue;
    c.push(_);
    const v = n(z, A);
    for (let L = 0; L < v.length; ++L) {
      const $ = v[L];
      c.push(O + $);
    }
    f = x + (f.length > 0 ? " " + f : f);
  }
  return f;
};
function ur() {
  let e = 0, s, o, t = "";
  for (; e < arguments.length; )
    (s = arguments[e++]) && (o = Ie(s)) && (t && (t += " "), t += o);
  return t;
}
const Ie = (e) => {
  if (typeof e == "string")
    return e;
  let s, o = "";
  for (let t = 0; t < e.length; t++)
    e[t] && (s = Ie(e[t])) && (o && (o += " "), o += s);
  return o;
};
function fr(e, ...s) {
  let o, t, n, l = c;
  function c(f) {
    const w = s.reduce((x, E) => E(x), e());
    return o = lr(w), t = o.cache.get, n = o.cache.set, l = h, h(f);
  }
  function h(f) {
    const w = t(f);
    if (w)
      return w;
    const x = dr(f, o);
    return n(f, x), x;
  }
  return function() {
    return l(ur.apply(null, arguments));
  };
}
const j = (e) => {
  const s = (o) => o[e] || [];
  return s.isThemeGetter = !0, s;
}, Ne = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Oe = /^\((?:(\w[\w-]*):)?(.+)\)$/i, mr = /^\d+\/\d+$/, pr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, br = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, gr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, hr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, xr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, se = (e) => mr.test(e), g = (e) => !!e && !Number.isNaN(Number(e)), re = (e) => !!e && Number.isInteger(Number(e)), be = (e) => e.endsWith("%") && g(e.slice(0, -1)), Q = (e) => pr.test(e), yr = () => !0, kr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  br.test(e) && !gr.test(e)
), Le = () => !1, wr = (e) => hr.test(e), vr = (e) => xr.test(e), Rr = (e) => !a(e) && !i(e), Er = (e) => ne(e, $e, Le), a = (e) => Ne.test(e), te = (e) => ne(e, Ve, kr), ge = (e) => ne(e, _r, g), _e = (e) => ne(e, Ge, Le), Sr = (e) => ne(e, Fe, vr), fe = (e) => ne(e, We, wr), i = (e) => Oe.test(e), de = (e) => ae(e, Ve), Cr = (e) => ae(e, Ar), Ae = (e) => ae(e, Ge), Tr = (e) => ae(e, $e), jr = (e) => ae(e, Fe), me = (e) => ae(e, We, !0), ne = (e, s, o) => {
  const t = Ne.exec(e);
  return t ? t[1] ? s(t[1]) : o(t[2]) : !1;
}, ae = (e, s, o = !1) => {
  const t = Oe.exec(e);
  return t ? t[1] ? s(t[1]) : o : !1;
}, Ge = (e) => e === "position" || e === "percentage", Fe = (e) => e === "image" || e === "url", $e = (e) => e === "length" || e === "size" || e === "bg-size", Ve = (e) => e === "length", _r = (e) => e === "number", Ar = (e) => e === "family-name", We = (e) => e === "shadow", zr = () => {
  const e = j("color"), s = j("font"), o = j("text"), t = j("font-weight"), n = j("tracking"), l = j("leading"), c = j("breakpoint"), h = j("container"), f = j("spacing"), w = j("radius"), x = j("shadow"), E = j("inset-shadow"), N = j("text-shadow"), M = j("drop-shadow"), S = j("blur"), C = j("perspective"), A = j("aspect"), z = j("ease"), F = j("animate"), O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], v = () => [..._(), i, a], L = () => ["auto", "hidden", "clip", "visible", "scroll"], $ = () => ["auto", "contain", "none"], u = () => [i, a, f], T = () => [se, "full", "auto", ...u()], K = () => [re, "none", "subgrid", i, a], D = () => ["auto", {
    span: ["full", re, i, a]
  }, re, i, a], G = () => [re, "auto", i, a], B = () => ["auto", "min", "max", "fr", i, a], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], I = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], P = () => ["auto", ...u()], V = () => [se, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...u()], d = () => [e, i, a], J = () => [..._(), Ae, _e, {
    position: [i, a]
  }], X = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], r = () => ["auto", "cover", "contain", Tr, Er, {
    size: [i, a]
  }], m = () => [be, de, te], b = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    w,
    i,
    a
  ], y = () => ["", g, de, te], W = () => ["solid", "dashed", "dotted", "double"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], p = () => [g, be, Ae, _e], q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    S,
    i,
    a
  ], U = () => ["none", g, i, a], ee = () => ["none", g, i, a], ie = () => [g, i, a], oe = () => [se, "full", ...u()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Q],
      breakpoint: [Q],
      color: [yr],
      container: [Q],
      "drop-shadow": [Q],
      ease: ["in", "out", "in-out"],
      font: [Rr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Q],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Q],
      shadow: [Q],
      spacing: ["px", g],
      text: [Q],
      "text-shadow": [Q],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", se, a, i, A]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [g, a, i, h]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": O()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": O()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: v()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: L()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": L()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": L()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: $()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": $()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": $()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: T()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": T()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": T()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: T()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: T()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: T()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: T()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: T()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: T()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [re, "auto", i, a]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [se, "full", "auto", h, ...u()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [g, se, "auto", "initial", "none", a]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", g, i, a]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", g, i, a]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [re, "first", "last", "none", i, a]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": K()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: D()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": G()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": G()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": K()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: D()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": G()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": G()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": B()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": B()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: u()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": u()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": u()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...H(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...I(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...I()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...H()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...I(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...I(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": H()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...I(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...I()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: u()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: u()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: u()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: u()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: u()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: u()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: u()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: u()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: u()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: P()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: P()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: P()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: P()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: P()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: P()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: P()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: P()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: P()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": u()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": u()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: V()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [h, "screen", ...V()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          h,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...V()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          h,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [c]
          },
          ...V()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...V()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...V()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...V()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, de, te]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [t, i, ge]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", be, a]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Cr, a, s]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [n, i, a]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [g, "none", i, ge]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          l,
          ...u()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", i, a]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", i, a]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: d()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: d()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...W(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [g, "from-font", "auto", i, te]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: d()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [g, "auto", i, a]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: u()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", i, a]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", i, a]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: J()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: X()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: r()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, re, i, a],
          radial: ["", i, a],
          conic: [re, i, a]
        }, jr, Sr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: d()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: m()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: m()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: m()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: d()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: d()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: d()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: b()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": b()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": b()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": b()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": b()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": b()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": b()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": b()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": b()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": b()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": b()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": b()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": b()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": b()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": b()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: y()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": y()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": y()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": y()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": y()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": y()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": y()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": y()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": y()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": y()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": y()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...W(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...W(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: d()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": d()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": d()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": d()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": d()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": d()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": d()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": d()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": d()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: d()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...W(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [g, i, a]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", g, de, te]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: d()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          x,
          me,
          fe
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: d()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", E, me, fe]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": d()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: y()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: d()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [g, te]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": d()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": y()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": d()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", N, me, fe]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": d()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [g, i, a]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Z(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Z()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [g]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": p()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": p()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": d()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": d()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": p()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": p()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": d()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": d()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": p()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": p()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": d()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": d()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": p()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": p()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": d()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": d()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": p()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": p()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": d()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": d()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": p()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": p()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": d()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": d()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": p()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": p()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": d()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": d()
      }],
      "mask-image-radial": [{
        "mask-radial": [i, a]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": p()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": p()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": d()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": d()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": _()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [g]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": p()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": p()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": d()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": d()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: J()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: X()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: r()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", i, a]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          i,
          a
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: q()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [g, i, a]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [g, i, a]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          M,
          me,
          fe
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": d()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", g, i, a]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [g, i, a]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", g, i, a]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [g, i, a]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", g, i, a]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          i,
          a
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": q()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [g, i, a]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [g, i, a]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", g, i, a]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [g, i, a]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", g, i, a]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [g, i, a]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [g, i, a]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", g, i, a]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": u()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": u()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": u()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", i, a]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [g, "initial", i, a]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", z, i, a]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [g, i, a]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", F, i, a]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [C, i, a]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": v()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: U()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": U()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": U()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": U()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ee()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ee()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ee()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ee()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: ie()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ie()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ie()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [i, a, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: v()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: oe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": oe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": oe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": oe()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: d()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: d()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", i, a]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": u()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": u()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": u()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": u()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": u()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": u()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": u()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": u()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": u()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": u()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": u()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": u()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": u()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": u()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": u()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": u()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": u()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": u()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", i, a]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...d()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [g, de, te, ge]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...d()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Pr = /* @__PURE__ */ fr(zr);
function R(...e) {
  return Pr(Qe(e));
}
const Or = ({
  children: e,
  variant: s = "fill",
  disabled: o = !1,
  onClick: t,
  type: n = "button",
  className: l,
  unstyled: c = !1,
  ...h
}) => {
  if (c)
    return /* @__PURE__ */ k.jsx(
      "button",
      {
        type: n,
        className: R(l),
        disabled: o,
        onClick: t,
        ...h,
        children: e
      }
    );
  const f = R(
    // Essential layout and interaction classes
    "inline-flex items-center justify-center",
    "font-medium transition-colors duration-200",
    "focus:outline-none select-none"
    // No default focus ring - user can add their own via className
  ), w = {
    fill: R(
      "bg-sky-600 text-white border border-transparent rounded-md px-4 py-2",
      "hover:bg-sky-700 active:bg-sky-800",
      "disabled:bg-sky-300 disabled:cursor-not-allowed"
    ),
    outline: R(
      "bg-transparent text-sky-600 border-2 border-sky-600 rounded-md px-4 py-2",
      "hover:bg-sky-700 hover:text-white active:bg-sky-800 active:text-white",
      "disabled:text-sky-300 disabled:border-sky-300 disabled:cursor-not-allowed"
    )
  }, x = o ? "opacity-60" : "cursor-pointer", E = R(
    f,
    w[s],
    x,
    l
    // User's className will override any conflicting default classes
  );
  return /* @__PURE__ */ k.jsx(
    "button",
    {
      type: n,
      className: E,
      disabled: o,
      onClick: t,
      ...h,
      children: e
    }
  );
}, Mr = ze(
  ({
    variant: e = "outline",
    type: s = "text",
    placeholder: o,
    value: t,
    defaultValue: n,
    onChange: l,
    onFocus: c,
    onBlur: h,
    disabled: f = !1,
    required: w = !1,
    error: x,
    label: E,
    helperText: N,
    id: M,
    name: S,
    autoComplete: C,
    autoFocus: A = !1,
    readOnly: z = !1,
    maxLength: F,
    minLength: O,
    pattern: _,
    className: v,
    unstyled: L = !1,
    floatingLabelClassName: $,
    floatingLabelFocusColor: u = "text-blue-600",
    floatingLabelActiveColor: T = "text-gray-600",
    floatingLabelErrorColor: K = "text-red-600",
    ...D
  }, G) => {
    const [B, H] = pe(!1), [I, P] = pe(!1), [V, d] = pe(n || ""), J = M || `input-${Math.random().toString(36).substr(2, 9)}`, X = t !== void 0 ? t : V, r = () => {
      H(!B);
    }, m = (Y) => {
      t || d(Y.target.value), l?.(Y);
    }, b = () => {
      l && l({
        target: { value: "" },
        currentTarget: { value: "" }
      }), t || d("");
    }, y = (s === "text" || s === "email" || s === "url") && X && X.length > 0 && !f && !z, W = (Y) => {
      P(!0), c?.(Y);
    }, Z = (Y) => {
      P(!1), h?.(Y);
    }, p = s === "password" && B ? "text" : s;
    if (L)
      return /* @__PURE__ */ k.jsx(
        "input",
        {
          ref: G,
          type: p,
          className: R(v),
          placeholder: o,
          value: t,
          defaultValue: n,
          onChange: l,
          onFocus: W,
          onBlur: Z,
          disabled: f,
          required: w,
          id: J,
          name: S,
          autoComplete: C,
          autoFocus: A,
          readOnly: z,
          maxLength: F,
          minLength: O,
          pattern: _,
          ...D
        }
      );
    const U = ((Y) => {
      if (!Y) return "text-base";
      const Re = Y.match(
        /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/
      );
      return Re ? Re[0] : "text-base";
    })(v), ee = R(
      "w-full px-3 py-2 font-normal",
      U,
      // Use extracted or default text size
      "transition-colors duration-200",
      "focus:outline-none",
      "placeholder:text-gray-400",
      "disabled:cursor-not-allowed disabled:opacity-60"
    ), ie = {
      fill: R(
        "bg-gray-100 border border-transparent rounded-md",
        // Default hover (can be overridden)
        !v?.includes("hover:") && "hover:bg-gray-50",
        // Default focus (can be overridden)
        !v?.includes("focus:bg-") && "focus:bg-white",
        !v?.includes("focus:border-") && !x && "focus:border-sky-600",
        !v?.includes("focus:ring-") && !x && "focus:ring-2 focus:ring-sky-600/20",
        // Disabled state
        !v?.includes("disabled:") && "disabled:bg-gray-100"
      ),
      outline: R(
        "bg-white border-2 border-gray-300 rounded-md",
        // Default hover (can be overridden)
        !v?.includes("hover:") && "hover:border-gray-400",
        // Default focus (can be overridden)
        !v?.includes("focus:border-") && !x && "focus:border-sky-600",
        !v?.includes("focus:ring-") && !x && "focus:ring-2 focus:ring-sky-600/20",
        // Disabled state
        !v?.includes("disabled:bg-") && "disabled:bg-gray-50",
        !v?.includes("disabled:border-") && "disabled:border-gray-200"
      ),
      floating: R(
        "bg-transparent border-2 border-gray-300 rounded-md py-4",
        // Default hover (can be overridden)
        !v?.includes("hover:") && "hover:border-gray-400",
        // Default focus (can be overridden)
        !v?.includes("focus:border-") && !x && "focus:border-sky-600",
        !v?.includes("focus:ring-") && !x && "focus:ring-2 focus:ring-sky-600/20",
        // Disabled state
        !v?.includes("disabled:bg-") && "disabled:bg-gray-50",
        !v?.includes("disabled:border-") && "disabled:border-gray-200"
      )
    }, oe = () => /* @__PURE__ */ k.jsx(
      "svg",
      {
        className: "w-5 h-5 text-gray-400",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /* @__PURE__ */ k.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          }
        )
      }
    ), Ye = ({ show: Y }) => /* @__PURE__ */ k.jsx(
      "svg",
      {
        className: "w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        onClick: r,
        children: Y ? /* @__PURE__ */ k.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          }
        ) : /* @__PURE__ */ k.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
          }
        )
      }
    ), Be = () => /* @__PURE__ */ k.jsx(
      "svg",
      {
        className: "w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        onClick: b,
        children: /* @__PURE__ */ k.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M6 18L18 6M6 6l12 12"
          }
        )
      }
    ), Ue = R(
      ee,
      ie[e],
      // Add filled state class when input has value
      t && t.length > 0 && "input-filled",
      // Adjust padding for icons
      s === "search" ? "pl-10" : "",
      s === "password" ? "pr-10" : "",
      y ? "pr-10" : "",
      v,
      // Error styles should always have highest priority
      x && "!border-red-600 focus:!border-red-600 focus:!ring-red-600"
    ), De = R(
      "relative",
      f ? "pointer-events-none" : ""
    ), we = !!(X && X.length > 0), ve = I || we, Je = () => x ? K : I ? u : we ? T : "text-gray-500";
    return /* @__PURE__ */ k.jsxs("div", { className: "space-y-1", children: [
      E && e !== "floating" && /* @__PURE__ */ k.jsx(
        "label",
        {
          htmlFor: J,
          className: R(
            "block text-sm font-medium",
            x ? "text-red-600" : "text-gray-700",
            w && "after:content-['*'] after:text-red-600 after:ml-1"
          ),
          children: E
        }
      ),
      /* @__PURE__ */ k.jsxs("div", { className: De, children: [
        e === "floating" && (E || o) && /* @__PURE__ */ k.jsx(
          "label",
          {
            htmlFor: J,
            className: R(
              "absolute left-3 transition-all duration-200 pointer-events-none floating-label",
              Je(),
              ve ? R(
                "text-xs italic",
                // Fixed small size when floating (above border) + italic
                "top-0 -translate-y-1/2 px-1",
                // Apply background only when floating is active (floating above)
                $ || "bg-white"
              ) : R(
                U,
                // Same size as input when acting as placeholder
                "top-1/2 -translate-y-1/2"
                // No background when floating is not active (in placeholder position)
              ),
              w && ve && "after:content-['*'] after:text-red-600 after:ml-1"
            ),
            children: E || o
          }
        ),
        s === "search" && /* @__PURE__ */ k.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ k.jsx(oe, {}) }),
        /* @__PURE__ */ k.jsx(
          "input",
          {
            ref: G,
            type: p,
            className: Ue,
            placeholder: e === "floating" ? "" : o,
            value: t,
            defaultValue: n,
            onChange: m,
            onFocus: W,
            onBlur: Z,
            disabled: f,
            required: w,
            id: J,
            name: S,
            autoComplete: C,
            autoFocus: A,
            readOnly: z,
            maxLength: F,
            minLength: O,
            pattern: _,
            ...D
          }
        ),
        y && /* @__PURE__ */ k.jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center", children: /* @__PURE__ */ k.jsx(Be, {}) }),
        s === "password" && /* @__PURE__ */ k.jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center", children: /* @__PURE__ */ k.jsx(Ye, { show: B }) })
      ] }),
      (N || x) && /* @__PURE__ */ k.jsx(
        "p",
        {
          className: R("text-xs ml-1", x ? "text-red-600" : "text-gray-500"),
          children: x || N
        }
      )
    ] });
  }
);
Mr.displayName = "Input";
const Ir = ze(
  ({
    variant: e = "outline",
    placeholder: s,
    value: o,
    defaultValue: t,
    onChange: n,
    onFocus: l,
    onBlur: c,
    disabled: h = !1,
    required: f = !1,
    error: w,
    label: x,
    helperText: E,
    id: N,
    name: M,
    autoFocus: S = !1,
    readOnly: C = !1,
    maxLength: A,
    minLength: z,
    rows: F = 4,
    cols: O,
    resize: _ = "vertical",
    className: v,
    unstyled: L = !1,
    ...$
  }, u) => {
    const T = N || `textarea-${Math.random().toString(36).substr(2, 9)}`, K = () => {
      n && n({
        target: { value: "" },
        currentTarget: { value: "" }
      });
    }, D = o && o.length > 0 && !h && !C;
    if (L)
      return /* @__PURE__ */ k.jsx(
        "textarea",
        {
          ref: u,
          className: R(v),
          placeholder: s,
          value: o,
          defaultValue: t,
          onChange: n,
          onFocus: l,
          onBlur: c,
          disabled: h,
          required: f,
          id: T,
          name: M,
          autoFocus: S,
          readOnly: C,
          maxLength: A,
          minLength: z,
          rows: F,
          cols: O,
          style: { resize: _ },
          ...$
        }
      );
    const G = R(
      "w-full px-3 py-2 text-base font-normal",
      "transition-colors duration-200",
      "focus:outline-none",
      "placeholder:text-gray-400",
      "disabled:cursor-not-allowed disabled:opacity-60",
      // Resize styles
      _ === "none" && "resize-none",
      _ === "both" && "resize",
      _ === "horizontal" && "resize-x",
      _ === "vertical" && "resize-y"
    ), B = {
      fill: R(
        "bg-gray-100 border border-transparent rounded-md",
        "hover:bg-gray-50",
        "focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20",
        w ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "",
        "disabled:bg-gray-100"
      ),
      outline: R(
        "bg-white border-2 border-gray-300 rounded-md",
        "hover:border-gray-400",
        "focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20",
        w ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "",
        "disabled:bg-gray-50 disabled:border-gray-200"
      )
    }, H = R(
      G,
      B[e],
      D ? "pr-10" : "",
      v
    ), I = () => /* @__PURE__ */ k.jsx(
      "svg",
      {
        className: "w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        onClick: K,
        children: /* @__PURE__ */ k.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M6 18L18 6M6 6l12 12"
          }
        )
      }
    );
    return /* @__PURE__ */ k.jsxs("div", { className: "space-y-1", children: [
      x && /* @__PURE__ */ k.jsx(
        "label",
        {
          htmlFor: T,
          className: R(
            "block text-sm font-medium",
            w ? "text-red-600" : "text-gray-700",
            f && "after:content-['*'] after:text-red-500 after:ml-1"
          ),
          children: x
        }
      ),
      /* @__PURE__ */ k.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ k.jsx(
          "textarea",
          {
            ref: u,
            className: H,
            placeholder: s,
            value: o,
            defaultValue: t,
            onChange: n,
            onFocus: l,
            onBlur: c,
            disabled: h,
            required: f,
            id: T,
            name: M,
            autoFocus: S,
            readOnly: C,
            maxLength: A,
            minLength: z,
            rows: F,
            cols: O,
            ...$
          }
        ),
        D && /* @__PURE__ */ k.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ k.jsx(I, {}) })
      ] }),
      (E || w) && /* @__PURE__ */ k.jsx(
        "p",
        {
          className: R("text-sm", w ? "text-red-600" : "text-gray-500"),
          children: w || E
        }
      )
    ] });
  }
);
Ir.displayName = "Textarea";
export {
  Or as Button,
  Mr as Input,
  Ir as Textarea,
  R as cn
};
