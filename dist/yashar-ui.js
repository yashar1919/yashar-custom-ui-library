import He, { forwardRef as Oe, useState as ae, useRef as Te, useEffect as be } from "react";
import { createPortal as Ze } from "react-dom";
var ge = { exports: {} }, de = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function Qe() {
  if (ze) return de;
  ze = 1;
  var e = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function o(t, a, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), a.key !== void 0 && (f = "" + a.key), "key" in a) {
      u = {};
      for (var h in a)
        h !== "key" && (u[h] = a[h]);
    } else u = a;
    return a = u.ref, {
      $$typeof: e,
      type: t,
      key: f,
      ref: a !== void 0 ? a : null,
      props: u
    };
  }
  return de.Fragment = s, de.jsx = o, de.jsxs = o, de;
}
var ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function Ke() {
  return _e || (_e = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === J ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case M:
          return "Fragment";
        case U:
          return "Profiler";
        case P:
          return "StrictMode";
        case L:
          return "Suspense";
        case Y:
          return "SuspenseList";
        case ee:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case S:
            return "Portal";
          case z:
            return r.displayName || "Context";
          case G:
            return (r._context.displayName || "Context") + ".Consumer";
          case p:
            var b = r.render;
            return r = r.displayName, r || (r = b.displayName || b.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case n:
            return b = r.displayName || null, b !== null ? b : e(r.type) || "Memo";
          case C:
            b = r._payload, r = r._init;
            try {
              return e(r(b));
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
        var b = !1;
      } catch {
        b = !0;
      }
      if (b) {
        b = console;
        var g = b.error, k = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return g.call(
          b,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), s(r);
      }
    }
    function t(r) {
      if (r === M) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === C)
        return "<...>";
      try {
        var b = e(r);
        return b ? "<" + b + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var r = F.A;
      return r === null ? null : r.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function f(r) {
      if (X.call(r, "key")) {
        var b = Object.getOwnPropertyDescriptor(r, "key").get;
        if (b && b.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function h(r, b) {
      function g() {
        T || (T = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          b
        ));
      }
      g.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: g,
        configurable: !0
      });
    }
    function m() {
      var r = e(this.type);
      return _[r] || (_[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function w(r, b, g, k, W, Q) {
      var x = g.ref;
      return r = {
        $$typeof: E,
        type: r,
        key: b,
        props: g,
        _owner: k
      }, (x !== void 0 ? x : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: m
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
        value: Q
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function y(r, b, g, k, W, Q) {
      var x = b.children;
      if (x !== void 0)
        if (k)
          if (H(x)) {
            for (k = 0; k < x.length; k++)
              R(x[k]);
            Object.freeze && Object.freeze(x);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(x);
      if (X.call(b, "key")) {
        x = e(r);
        var Z = Object.keys(b).filter(function(K) {
          return K !== "key";
        });
        k = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", $[x + k] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          x,
          Z,
          x
        ), $[x + k] = !0);
      }
      if (x = null, g !== void 0 && (o(g), x = "" + g), f(b) && (o(b.key), x = "" + b.key), "key" in b) {
        g = {};
        for (var q in b)
          q !== "key" && (g[q] = b[q]);
      } else g = b;
      return x && h(
        g,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), w(
        r,
        x,
        g,
        a(),
        W,
        Q
      );
    }
    function R(r) {
      O(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === C && (r._payload.status === "fulfilled" ? O(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function O(r) {
      return typeof r == "object" && r !== null && r.$$typeof === E;
    }
    var I = He, E = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), z = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), Y = Symbol.for("react.suspense_list"), n = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), J = Symbol.for("react.client.reference"), F = I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = Object.prototype.hasOwnProperty, H = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    I = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var T, _ = {}, i = I.react_stack_bottom_frame.bind(
      I,
      u
    )(), V = N(t(u)), $ = {};
    ue.Fragment = M, ue.jsx = function(r, b, g) {
      var k = 1e4 > F.recentlyCreatedOwnerStacks++;
      return y(
        r,
        b,
        g,
        !1,
        k ? Error("react-stack-top-frame") : i,
        k ? N(t(r)) : V
      );
    }, ue.jsxs = function(r, b, g) {
      var k = 1e4 > F.recentlyCreatedOwnerStacks++;
      return y(
        r,
        b,
        g,
        !0,
        k ? Error("react-stack-top-frame") : i,
        k ? N(t(r)) : V
      );
    };
  })()), ue;
}
var Ae;
function er() {
  return Ae || (Ae = 1, process.env.NODE_ENV === "production" ? ge.exports = Qe() : ge.exports = Ke()), ge.exports;
}
var d = er();
function Le(e) {
  var s, o, t = "";
  if (typeof e == "string" || typeof e == "number") t += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (s = 0; s < a; s++) e[s] && (o = Le(e[s])) && (t && (t += " "), t += o);
  } else for (o in e) e[o] && (t && (t += " "), t += o);
  return t;
}
function rr() {
  for (var e, s, o = 0, t = "", a = arguments.length; o < a; o++) (e = arguments[o]) && (s = Le(e)) && (t && (t += " "), t += s);
  return t;
}
const Re = "-", tr = (e) => {
  const s = sr(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: t
  } = e;
  return {
    getClassGroupId: (f) => {
      const h = f.split(Re);
      return h[0] === "" && h.length !== 1 && h.shift(), Fe(h, s) || or(f);
    },
    getConflictingClassGroupIds: (f, h) => {
      const m = o[f] || [];
      return h && t[f] ? [...m, ...t[f]] : m;
    }
  };
}, Fe = (e, s) => {
  if (e.length === 0)
    return s.classGroupId;
  const o = e[0], t = s.nextPart.get(o), a = t ? Fe(e.slice(1), t) : void 0;
  if (a)
    return a;
  if (s.validators.length === 0)
    return;
  const u = e.join(Re);
  return s.validators.find(({
    validator: f
  }) => f(u))?.classGroupId;
}, Me = /^\[(.+)\]$/, or = (e) => {
  if (Me.test(e)) {
    const s = Me.exec(e)[1], o = s?.substring(0, s.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, sr = (e) => {
  const {
    theme: s,
    classGroups: o
  } = e, t = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const a in o)
    ke(o[a], t, a, s);
  return t;
}, ke = (e, s, o, t) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const u = a === "" ? s : Pe(s, a);
      u.classGroupId = o;
      return;
    }
    if (typeof a == "function") {
      if (nr(a)) {
        ke(a(t), s, o, t);
        return;
      }
      s.validators.push({
        validator: a,
        classGroupId: o
      });
      return;
    }
    Object.entries(a).forEach(([u, f]) => {
      ke(f, Pe(s, u), o, t);
    });
  });
}, Pe = (e, s) => {
  let o = e;
  return s.split(Re).forEach((t) => {
    o.nextPart.has(t) || o.nextPart.set(t, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(t);
  }), o;
}, nr = (e) => e.isThemeGetter, ar = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let s = 0, o = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  const a = (u, f) => {
    o.set(u, f), s++, s > e && (s = 0, t = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(u) {
      let f = o.get(u);
      if (f !== void 0)
        return f;
      if ((f = t.get(u)) !== void 0)
        return a(u, f), f;
    },
    set(u, f) {
      o.has(u) ? o.set(u, f) : a(u, f);
    }
  };
}, je = "!", Ee = ":", ir = Ee.length, lr = (e) => {
  const {
    prefix: s,
    experimentalParseClassName: o
  } = e;
  let t = (a) => {
    const u = [];
    let f = 0, h = 0, m = 0, w;
    for (let E = 0; E < a.length; E++) {
      let S = a[E];
      if (f === 0 && h === 0) {
        if (S === Ee) {
          u.push(a.slice(m, E)), m = E + ir;
          continue;
        }
        if (S === "/") {
          w = E;
          continue;
        }
      }
      S === "[" ? f++ : S === "]" ? f-- : S === "(" ? h++ : S === ")" && h--;
    }
    const y = u.length === 0 ? a : a.substring(m), R = cr(y), O = R !== y, I = w && w > m ? w - m : void 0;
    return {
      modifiers: u,
      hasImportantModifier: O,
      baseClassName: R,
      maybePostfixModifierPosition: I
    };
  };
  if (s) {
    const a = s + Ee, u = t;
    t = (f) => f.startsWith(a) ? u(f.substring(a.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: f,
      maybePostfixModifierPosition: void 0
    };
  }
  if (o) {
    const a = t;
    t = (u) => o({
      className: u,
      parseClassName: a
    });
  }
  return t;
}, cr = (e) => e.endsWith(je) ? e.substring(0, e.length - 1) : e.startsWith(je) ? e.substring(1) : e, dr = (e) => {
  const s = Object.fromEntries(e.orderSensitiveModifiers.map((t) => [t, !0]));
  return (t) => {
    if (t.length <= 1)
      return t;
    const a = [];
    let u = [];
    return t.forEach((f) => {
      f[0] === "[" || s[f] ? (a.push(...u.sort(), f), u = []) : u.push(f);
    }), a.push(...u.sort()), a;
  };
}, ur = (e) => ({
  cache: ar(e.cacheSize),
  parseClassName: lr(e),
  sortModifiers: dr(e),
  ...tr(e)
}), fr = /\s+/, mr = (e, s) => {
  const {
    parseClassName: o,
    getClassGroupId: t,
    getConflictingClassGroupIds: a,
    sortModifiers: u
  } = s, f = [], h = e.trim().split(fr);
  let m = "";
  for (let w = h.length - 1; w >= 0; w -= 1) {
    const y = h[w], {
      isExternal: R,
      modifiers: O,
      hasImportantModifier: I,
      baseClassName: E,
      maybePostfixModifierPosition: S
    } = o(y);
    if (R) {
      m = y + (m.length > 0 ? " " + m : m);
      continue;
    }
    let M = !!S, P = t(M ? E.substring(0, S) : E);
    if (!P) {
      if (!M) {
        m = y + (m.length > 0 ? " " + m : m);
        continue;
      }
      if (P = t(E), !P) {
        m = y + (m.length > 0 ? " " + m : m);
        continue;
      }
      M = !1;
    }
    const U = u(O).join(":"), G = I ? U + je : U, z = G + P;
    if (f.includes(z))
      continue;
    f.push(z);
    const p = a(P, M);
    for (let L = 0; L < p.length; ++L) {
      const Y = p[L];
      f.push(G + Y);
    }
    m = y + (m.length > 0 ? " " + m : m);
  }
  return m;
};
function pr() {
  let e = 0, s, o, t = "";
  for (; e < arguments.length; )
    (s = arguments[e++]) && (o = Ge(s)) && (t && (t += " "), t += o);
  return t;
}
const Ge = (e) => {
  if (typeof e == "string")
    return e;
  let s, o = "";
  for (let t = 0; t < e.length; t++)
    e[t] && (s = Ge(e[t])) && (o && (o += " "), o += s);
  return o;
};
function br(e, ...s) {
  let o, t, a, u = f;
  function f(m) {
    const w = s.reduce((y, R) => R(y), e());
    return o = ur(w), t = o.cache.get, a = o.cache.set, u = h, h(m);
  }
  function h(m) {
    const w = t(m);
    if (w)
      return w;
    const y = mr(m, o);
    return a(m, y), y;
  }
  return function() {
    return u(pr.apply(null, arguments));
  };
}
const A = (e) => {
  const s = (o) => o[e] || [];
  return s.isThemeGetter = !0, s;
}, Ye = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ve = /^\((?:(\w[\w-]*):)?(.+)\)$/i, gr = /^\d+\/\d+$/, xr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, hr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, yr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, wr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, vr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ie = (e) => gr.test(e), v = (e) => !!e && !Number.isNaN(Number(e)), se = (e) => !!e && Number.isInteger(Number(e)), we = (e) => e.endsWith("%") && v(e.slice(0, -1)), re = (e) => xr.test(e), kr = () => !0, jr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  hr.test(e) && !yr.test(e)
), $e = () => !1, Er = (e) => wr.test(e), Rr = (e) => vr.test(e), Sr = (e) => !l(e) && !c(e), Cr = (e) => le(e, De, $e), l = (e) => Ye.test(e), ne = (e) => le(e, Ue, jr), ve = (e) => le(e, Mr, v), Ie = (e) => le(e, We, $e), Tr = (e) => le(e, Be, Rr), xe = (e) => le(e, Xe, Er), c = (e) => Ve.test(e), fe = (e) => ce(e, Ue), zr = (e) => ce(e, Pr), Ne = (e) => ce(e, We), _r = (e) => ce(e, De), Ar = (e) => ce(e, Be), he = (e) => ce(e, Xe, !0), le = (e, s, o) => {
  const t = Ye.exec(e);
  return t ? t[1] ? s(t[1]) : o(t[2]) : !1;
}, ce = (e, s, o = !1) => {
  const t = Ve.exec(e);
  return t ? t[1] ? s(t[1]) : o : !1;
}, We = (e) => e === "position" || e === "percentage", Be = (e) => e === "image" || e === "url", De = (e) => e === "length" || e === "size" || e === "bg-size", Ue = (e) => e === "length", Mr = (e) => e === "number", Pr = (e) => e === "family-name", Xe = (e) => e === "shadow", Ir = () => {
  const e = A("color"), s = A("font"), o = A("text"), t = A("font-weight"), a = A("tracking"), u = A("leading"), f = A("breakpoint"), h = A("container"), m = A("spacing"), w = A("radius"), y = A("shadow"), R = A("inset-shadow"), O = A("text-shadow"), I = A("drop-shadow"), E = A("blur"), S = A("perspective"), M = A("aspect"), P = A("ease"), U = A("animate"), G = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], z = () => [
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
  ], p = () => [...z(), c, l], L = () => ["auto", "hidden", "clip", "visible", "scroll"], Y = () => ["auto", "contain", "none"], n = () => [c, l, m], C = () => [ie, "full", "auto", ...n()], ee = () => [se, "none", "subgrid", c, l], J = () => ["auto", {
    span: ["full", se, c, l]
  }, se, c, l], F = () => [se, "auto", c, l], X = () => ["auto", "min", "max", "fr", c, l], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], N = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], T = () => ["auto", ...n()], _ = () => [ie, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...n()], i = () => [e, c, l], V = () => [...z(), Ne, Ie, {
    position: [c, l]
  }], $ = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], r = () => ["auto", "cover", "contain", _r, Cr, {
    size: [c, l]
  }], b = () => [we, fe, ne], g = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    w,
    c,
    l
  ], k = () => ["", v, fe, ne], W = () => ["solid", "dashed", "dotted", "double"], Q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], x = () => [v, we, Ne, Ie], Z = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    c,
    l
  ], q = () => ["none", v, c, l], K = () => ["none", v, c, l], te = () => [v, c, l], oe = () => [ie, "full", ...n()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [re],
      breakpoint: [re],
      color: [kr],
      container: [re],
      "drop-shadow": [re],
      ease: ["in", "out", "in-out"],
      font: [Sr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [re],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [re],
      shadow: [re],
      spacing: ["px", v],
      text: [re],
      "text-shadow": [re],
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
        aspect: ["auto", "square", ie, l, c, M]
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
        columns: [v, l, c, h]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": G()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": G()
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
        object: p()
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
        overscroll: Y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Y()
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
        inset: C()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": C()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": C()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: C()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: C()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: C()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: C()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: C()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: C()
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
        z: [se, "auto", c, l]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ie, "full", "auto", h, ...n()]
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
        flex: [v, ie, "auto", "initial", "none", l]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", v, c, l]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", v, c, l]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [se, "first", "last", "none", c, l]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": ee()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: J()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": ee()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: J()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
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
        "auto-cols": X()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": X()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: n()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": n()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": n()
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
        "justify-items": [...N(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...N()]
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
        items: [...N(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...N(), {
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
        "place-items": [...N(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...N()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: n()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: n()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: n()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: n()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: n()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: n()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: n()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: n()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: n()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: T()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: T()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: T()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: T()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: T()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: T()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: T()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: T()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: T()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": n()
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
        "space-y": n()
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
        size: _()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [h, "screen", ..._()]
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
          ..._()
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
            screen: [f]
          },
          ..._()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ..._()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ..._()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ..._()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, fe, ne]
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
        font: [t, c, ve]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", we, l]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [zr, l, s]
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
        tracking: [a, c, l]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [v, "none", c, ve]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          u,
          ...n()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", c, l]
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
        list: ["disc", "decimal", "none", c, l]
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
        placeholder: i()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: i()
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
        decoration: [v, "from-font", "auto", c, ne]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: i()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [v, "auto", c, l]
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
        indent: n()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", c, l]
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
        content: ["none", c, l]
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
        bg: V()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: $()
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
          }, se, c, l],
          radial: ["", c, l],
          conic: [se, c, l]
        }, Ar, Tr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: i()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: b()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: b()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: b()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: i()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: i()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: i()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: g()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": g()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": g()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": g()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": g()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": g()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": g()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": g()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": g()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": g()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": g()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": g()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": g()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": g()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": g()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: k()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": k()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": k()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": k()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": k()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": k()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": k()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": k()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": k()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": k()
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
        "divide-y": k()
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
        border: i()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": i()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": i()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": i()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": i()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": i()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": i()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": i()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": i()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: i()
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
        "outline-offset": [v, c, l]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", v, fe, ne]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: i()
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
          y,
          he,
          xe
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: i()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", R, he, xe]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": i()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: k()
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
        ring: i()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [v, ne]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": i()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": k()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": i()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", O, he, xe]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": i()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [v, c, l]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Q(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Q()
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
        "mask-linear": [v]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": x()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": x()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": i()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": i()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": x()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": x()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": i()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": i()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": x()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": x()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": i()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": i()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": x()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": x()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": i()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": i()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": x()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": x()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": i()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": i()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": x()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": x()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": i()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": i()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": x()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": x()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": i()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": i()
      }],
      "mask-image-radial": [{
        "mask-radial": [c, l]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": x()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": x()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": i()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": i()
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
        "mask-radial-at": z()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [v]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": x()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": x()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": i()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": i()
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
        mask: V()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: $()
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
        mask: ["none", c, l]
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
          c,
          l
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Z()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [v, c, l]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [v, c, l]
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
          I,
          he,
          xe
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": i()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", v, c, l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [v, c, l]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", v, c, l]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [v, c, l]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", v, c, l]
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
          c,
          l
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Z()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [v, c, l]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [v, c, l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", v, c, l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [v, c, l]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", v, c, l]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [v, c, l]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [v, c, l]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", v, c, l]
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
        "border-spacing": n()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": n()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": n()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", c, l]
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
        duration: [v, "initial", c, l]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", P, c, l]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [v, c, l]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", U, c, l]
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
        perspective: [S, c, l]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": p()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: q()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": q()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": q()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": q()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: K()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": K()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": K()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": K()
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
        skew: te()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": te()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": te()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [c, l, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: p()
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
        accent: i()
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
        caret: i()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", c, l]
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
        "scroll-m": n()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": n()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": n()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": n()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": n()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": n()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": n()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": n()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": n()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": n()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": n()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": n()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": n()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": n()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": n()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": n()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": n()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": n()
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
        "will-change": ["auto", "scroll", "contents", "transform", c, l]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...i()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [v, fe, ne, ve]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...i()]
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
}, Nr = /* @__PURE__ */ br(Ir);
function j(...e) {
  return Nr(rr(e));
}
const Vr = ({
  children: e,
  variant: s = "fill",
  disabled: o = !1,
  onClick: t,
  type: a = "button",
  className: u,
  unstyled: f = !1,
  ...h
}) => {
  if (f)
    return /* @__PURE__ */ d.jsx(
      "button",
      {
        type: a,
        className: j(u),
        disabled: o,
        onClick: t,
        ...h,
        children: e
      }
    );
  const m = j(
    // Essential layout and interaction classes
    "inline-flex items-center justify-center",
    "font-medium transition-colors duration-200",
    "focus:outline-none select-none"
    // No default focus ring - user can add their own via className
  ), w = {
    fill: j(
      "bg-sky-600 text-white border border-transparent rounded-md px-4 py-2",
      "hover:bg-sky-700 active:bg-sky-800",
      "disabled:bg-sky-300 disabled:cursor-not-allowed"
    ),
    outline: j(
      "bg-transparent text-sky-600 border-2 border-sky-600 rounded-md px-4 py-2",
      "hover:bg-sky-700 hover:text-white active:bg-sky-800 active:text-white",
      "disabled:text-sky-300 disabled:border-sky-300 disabled:cursor-not-allowed"
    )
  }, y = o ? "opacity-60" : "cursor-pointer", R = j(
    m,
    w[s],
    y,
    u
    // User's className will override any conflicting default classes
  );
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      type: a,
      className: R,
      disabled: o,
      onClick: t,
      ...h,
      children: e
    }
  );
}, Or = Oe(
  ({
    variant: e = "outline",
    type: s = "text",
    placeholder: o,
    value: t,
    defaultValue: a,
    onChange: u,
    onFocus: f,
    onBlur: h,
    disabled: m = !1,
    required: w = !1,
    error: y,
    label: R,
    helperText: O,
    id: I,
    name: E,
    autoComplete: S,
    autoFocus: M = !1,
    readOnly: P = !1,
    maxLength: U,
    minLength: G,
    pattern: z,
    className: p,
    unstyled: L = !1,
    floatingLabelClassName: Y,
    floatingLabelFocusColor: n = "text-blue-600",
    floatingLabelActiveColor: C = "text-gray-600",
    floatingLabelErrorColor: ee = "text-red-600",
    ...J
  }, F) => {
    const [X, H] = ae(!1), [N, T] = ae(!1), [_, i] = ae(a || ""), V = I || `input-${Math.random().toString(36).substr(2, 9)}`, $ = t !== void 0 ? t : _, r = () => {
      H(!X);
    }, b = (D) => {
      t || i(D.target.value), u?.(D);
    }, g = () => {
      const D = {
        target: { value: "" },
        currentTarget: { value: "" }
      };
      t === void 0 && i(""), u && u(D);
    }, k = $ && $.length > 0 && !m && !P && s !== "password", W = (D) => {
      T(!0), f?.(D);
    }, Q = (D) => {
      T(!1), h?.(D);
    }, x = s === "password" && X ? "text" : s;
    if (L)
      return /* @__PURE__ */ d.jsx(
        "input",
        {
          ref: F,
          type: x,
          className: j(p),
          placeholder: o,
          value: t,
          defaultValue: a,
          onChange: u,
          onFocus: W,
          onBlur: Q,
          disabled: m,
          required: w,
          id: V,
          name: E,
          autoComplete: S,
          autoFocus: M,
          readOnly: P,
          maxLength: U,
          minLength: G,
          pattern: z,
          ...J
        }
      );
    const q = ((D) => {
      if (!D) return "text-base";
      const pe = D.match(
        /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/
      );
      return pe ? pe[0] : "text-base";
    })(p), K = j(
      "w-full px-3 py-2 font-normal",
      q,
      // Use extracted or default text size
      "transition-colors duration-200",
      "focus:outline-none",
      "placeholder:text-gray-400",
      "disabled:cursor-not-allowed disabled:opacity-60"
    ), te = {
      fill: j(
        "bg-gray-100 border border-transparent rounded-md",
        // Default hover (can be overridden)
        !p?.includes("hover:") && "hover:bg-gray-50",
        // Default focus (can be overridden)
        !p?.includes("focus:bg-") && "focus:bg-white",
        !p?.includes("focus:border-") && !y && "focus:border-sky-600",
        !p?.includes("focus:ring-") && !y && "focus:ring-2 focus:ring-sky-600/20",
        // Disabled state
        !p?.includes("disabled:") && "disabled:bg-gray-100"
      ),
      outline: j(
        "bg-white border-2 border-gray-300 rounded-md",
        // Default hover (can be overridden)
        !p?.includes("hover:") && "hover:border-gray-400",
        // Default focus (can be overridden)
        !p?.includes("focus:border-") && !y && "focus:border-sky-600",
        !p?.includes("focus:ring-") && !y && "focus:ring-2 focus:ring-sky-600/20",
        // Disabled state
        !p?.includes("disabled:bg-") && "disabled:bg-gray-50",
        !p?.includes("disabled:border-") && "disabled:border-gray-200"
      ),
      floating: j(
        "bg-transparent border-2 border-gray-300 rounded-md py-4",
        // Default hover (can be overridden)
        !p?.includes("hover:") && "hover:border-gray-400",
        // Default focus (can be overridden)
        !p?.includes("focus:border-") && !y && "focus:border-sky-600",
        !p?.includes("focus:ring-") && !y && "focus:ring-2 focus:ring-sky-600/20",
        // Disabled state
        !p?.includes("disabled:bg-") && "disabled:bg-gray-50",
        !p?.includes("disabled:border-") && "disabled:border-gray-200"
      )
    }, oe = () => /* @__PURE__ */ d.jsx(
      "svg",
      {
        className: "w-5 h-5 text-gray-400",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /* @__PURE__ */ d.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          }
        )
      }
    ), ye = ({ show: D }) => /* @__PURE__ */ d.jsx(
      "svg",
      {
        className: "w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        onMouseDown: (pe) => {
          pe.preventDefault(), r();
        },
        children: D ? /* @__PURE__ */ d.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          }
        ) : /* @__PURE__ */ d.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
          }
        )
      }
    ), B = () => /* @__PURE__ */ d.jsx(
      "svg",
      {
        className: "w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        onMouseDown: (D) => {
          D.preventDefault(), g();
        },
        children: /* @__PURE__ */ d.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M6 18L18 6M6 6l12 12"
          }
        )
      }
    ), me = j(
      K,
      te[e],
      // Add filled state class when input has value
      $ && $.length > 0 && "input-filled",
      // Adjust padding for icons
      s === "search" ? "pl-10" : "",
      s === "password" ? "pr-10" : "",
      k ? "pr-10" : "",
      p,
      // Error styles should always have highest priority
      y && "!border-red-600 focus:!border-red-600 focus:!ring-red-600"
    ), Je = j(
      "relative",
      m ? "pointer-events-none" : ""
    ), Se = !!($ && $.length > 0), Ce = N || Se, qe = () => y ? ee : N ? n : Se ? C : "text-gray-500";
    return /* @__PURE__ */ d.jsxs("div", { className: "space-y-1", children: [
      R && e !== "floating" && /* @__PURE__ */ d.jsx(
        "label",
        {
          htmlFor: V,
          className: j(
            "block text-sm font-medium",
            y ? "text-red-600" : "text-gray-700",
            w && "after:content-['*'] after:text-red-600 after:ml-1"
          ),
          children: R
        }
      ),
      /* @__PURE__ */ d.jsxs("div", { className: Je, children: [
        e === "floating" && (R || o) && /* @__PURE__ */ d.jsx(
          "label",
          {
            htmlFor: V,
            className: j(
              "absolute left-3 transition-all duration-200 pointer-events-none floating-label",
              qe(),
              Ce ? j(
                "text-xs italic",
                // Fixed small size when floating (above border) + italic
                "top-0 -translate-y-1/2 px-1",
                // Apply background only when floating is active (floating above)
                Y || "bg-white"
              ) : j(
                q,
                // Same size as input when acting as placeholder
                "top-1/2 -translate-y-1/2"
                // No background when floating is not active (in placeholder position)
              ),
              w && Ce && "after:content-['*'] after:text-red-600 after:ml-1"
            ),
            children: R || o
          }
        ),
        s === "search" && /* @__PURE__ */ d.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ d.jsx(oe, {}) }),
        /* @__PURE__ */ d.jsx(
          "input",
          {
            ref: F,
            type: x,
            className: me,
            placeholder: e === "floating" ? "" : o,
            value: t,
            defaultValue: a,
            onChange: b,
            onFocus: W,
            onBlur: Q,
            disabled: m,
            required: w,
            id: V,
            name: E,
            autoComplete: S,
            autoFocus: M,
            readOnly: P,
            maxLength: U,
            minLength: G,
            pattern: z,
            ...J
          }
        ),
        k && /* @__PURE__ */ d.jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center", children: /* @__PURE__ */ d.jsx(B, {}) }),
        s === "password" && /* @__PURE__ */ d.jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center", children: /* @__PURE__ */ d.jsx(ye, { show: X }) })
      ] }),
      (O || y) && /* @__PURE__ */ d.jsx(
        "p",
        {
          className: j(
            "text-xs ml-1",
            y ? "text-red-600" : "text-gray-500"
          ),
          children: y || O
        }
      )
    ] });
  }
);
Or.displayName = "Input";
const Lr = Oe(
  ({
    variant: e = "outline",
    placeholder: s,
    value: o,
    defaultValue: t,
    onChange: a,
    onFocus: u,
    onBlur: f,
    disabled: h = !1,
    required: m = !1,
    error: w,
    label: y,
    helperText: R,
    id: O,
    name: I,
    autoFocus: E = !1,
    readOnly: S = !1,
    maxLength: M,
    minLength: P,
    rows: U = 4,
    cols: G,
    resize: z = "vertical",
    className: p,
    unstyled: L = !1,
    floatingLabelClassName: Y,
    floatingLabelFocusColor: n = "text-blue-600",
    floatingLabelActiveColor: C = "text-gray-600",
    floatingLabelErrorColor: ee = "text-red-600",
    ...J
  }, F) => {
    const [X, H] = ae(!1), [N, T] = ae(t || ""), _ = O || `textarea-${Math.random().toString(36).substr(2, 9)}`, i = o !== void 0 ? o : N, V = (B) => {
      o || T(B.target.value), a?.(B);
    }, $ = () => {
      const B = {
        target: { value: "" },
        currentTarget: { value: "" }
      };
      o === void 0 && T(""), a && a(B);
    }, r = (B) => {
      H(!0), u?.(B);
    }, b = (B) => {
      H(!1), f?.(B);
    }, g = i && i.length > 0 && !h && !S;
    if (L)
      return /* @__PURE__ */ d.jsx(
        "textarea",
        {
          ref: F,
          className: j(p),
          placeholder: s,
          value: o,
          defaultValue: t,
          onChange: a,
          onFocus: r,
          onBlur: b,
          disabled: h,
          required: m,
          id: _,
          name: I,
          autoFocus: E,
          readOnly: S,
          maxLength: M,
          minLength: P,
          rows: U,
          cols: G,
          style: { resize: z },
          ...J
        }
      );
    const W = ((B) => {
      if (!B) return "text-base";
      const me = B.match(
        /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/
      );
      return me ? me[0] : "text-base";
    })(p), Q = j(
      "w-full px-3 py-2 font-normal",
      W,
      // Use extracted or default text size
      "transition-colors duration-200",
      "focus:outline-none",
      "placeholder:text-gray-400",
      "disabled:cursor-not-allowed disabled:opacity-60",
      // Resize styles
      z === "none" && "resize-none",
      z === "both" && "resize",
      z === "horizontal" && "resize-x",
      z === "vertical" && "resize-y"
    ), x = {
      fill: j(
        "bg-gray-100 border border-transparent rounded-md",
        // Default hover (can be overridden)
        !p?.includes("hover:") && "hover:bg-gray-50",
        // Default focus (can be overridden)
        !p?.includes("focus:bg-") && "focus:bg-white",
        !p?.includes("focus:border-") && !w && "focus:border-sky-600",
        !p?.includes("focus:ring-") && !w && "focus:ring-2 focus:ring-sky-600/20",
        // Disabled state
        !p?.includes("disabled:") && "disabled:bg-gray-100"
      ),
      outline: j(
        "bg-white border-2 border-gray-300 rounded-md",
        // Default hover (can be overridden)
        !p?.includes("hover:") && "hover:border-gray-400",
        // Default focus (can be overridden)
        !p?.includes("focus:border-") && !w && "focus:border-sky-600",
        !p?.includes("focus:ring-") && !w && "focus:ring-2 focus:ring-sky-600/20",
        // Disabled state
        !p?.includes("disabled:bg-") && "disabled:bg-gray-50",
        !p?.includes("disabled:border-") && "disabled:border-gray-200"
      ),
      floating: j(
        "bg-transparent border-2 border-gray-300 rounded-md py-4",
        // Default hover (can be overridden)
        !p?.includes("hover:") && "hover:border-gray-400",
        // Default focus (can be overridden)
        !p?.includes("focus:border-") && !w && "focus:border-sky-600",
        !p?.includes("focus:ring-") && !w && "focus:ring-2 focus:ring-sky-600/20",
        // Disabled state
        !p?.includes("disabled:bg-") && "disabled:bg-gray-50",
        !p?.includes("disabled:border-") && "disabled:border-gray-200"
      )
    }, Z = j(
      Q,
      x[e],
      // Add filled state class when textarea has value
      i && i.length > 0 && "textarea-filled",
      // Adjust padding for clear button
      g ? "pr-10" : "",
      p,
      // Error styles should always have highest priority
      w && "!border-red-600 focus:!border-red-600 focus:!ring-red-600"
    ), q = j(
      "relative",
      h ? "pointer-events-none" : ""
    ), K = !!(i && i.length > 0), te = X || K, oe = () => w ? ee : X ? n : K ? C : "text-gray-500", ye = () => /* @__PURE__ */ d.jsx(
      "svg",
      {
        className: "w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        onMouseDown: (B) => {
          B.preventDefault(), $();
        },
        children: /* @__PURE__ */ d.jsx(
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
    return /* @__PURE__ */ d.jsxs("div", { className: "space-y-1", children: [
      y && e !== "floating" && /* @__PURE__ */ d.jsx(
        "label",
        {
          htmlFor: _,
          className: j(
            "block text-sm font-medium",
            w ? "text-red-600" : "text-gray-700",
            m && "after:content-['*'] after:text-red-600 after:ml-1"
          ),
          children: y
        }
      ),
      /* @__PURE__ */ d.jsxs("div", { className: q, children: [
        e === "floating" && (y || s) && /* @__PURE__ */ d.jsx(
          "label",
          {
            htmlFor: _,
            className: j(
              "absolute left-3 transition-all duration-200 pointer-events-none floating-label",
              oe(),
              te ? j(
                "text-xs italic",
                // Fixed small size when floating (above border) + italic
                "top-0 -translate-y-1/2 px-1",
                // Apply background only when floating is active (floating above)
                Y || "bg-white"
              ) : j(
                W,
                // Same size as textarea when acting as placeholder
                "top-4 translate-y-0"
                // No background when floating is not active (in placeholder position)
              ),
              m && te && "after:content-['*'] after:text-red-600 after:ml-1"
            ),
            children: y || s
          }
        ),
        /* @__PURE__ */ d.jsx(
          "textarea",
          {
            ref: F,
            className: Z,
            placeholder: e === "floating" ? "" : s,
            value: o,
            defaultValue: t,
            onChange: V,
            onFocus: r,
            onBlur: b,
            disabled: h,
            required: m,
            id: _,
            name: I,
            autoFocus: E,
            readOnly: S,
            maxLength: M,
            minLength: P,
            rows: U,
            cols: G,
            ...J
          }
        ),
        g && /* @__PURE__ */ d.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ d.jsx(ye, {}) })
      ] }),
      (R || w) && /* @__PURE__ */ d.jsx(
        "p",
        {
          className: j(
            "text-xs ml-1",
            w ? "text-red-600" : "text-gray-500"
          ),
          children: w || R
        }
      )
    ] });
  }
);
Lr.displayName = "Textarea";
const $r = ({
  items: e,
  activeItem: s,
  onItemClick: o,
  className: t
}) => /* @__PURE__ */ d.jsxs("nav", { className: j("bg-gray-900 h-full overflow-y-auto", t), children: [
  /* @__PURE__ */ d.jsxs("div", { className: "p-6 border-b border-gray-800", children: [
    /* @__PURE__ */ d.jsx("h2", { className: "text-xl font-semibold text-white mb-2", children: "Yashar UI" }),
    /* @__PURE__ */ d.jsx("p", { className: "text-sm text-gray-400", children: "v1.3.0" })
  ] }),
  /* @__PURE__ */ d.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ d.jsx("h3", { className: "text-xs font-medium text-gray-500 uppercase tracking-wider mb-3", children: "General" }),
      /* @__PURE__ */ d.jsx(
        "button",
        {
          onClick: () => o("overview"),
          className: j(
            "w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer",
            s === "overview" ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
          ),
          children: "Components Overview"
        }
      )
    ] }),
    /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx("h3", { className: "text-xs font-medium text-gray-500 uppercase tracking-wider mb-3", children: "Components" }),
      /* @__PURE__ */ d.jsx("div", { className: "space-y-1", children: e.map((a) => /* @__PURE__ */ d.jsxs(
        "button",
        {
          onClick: () => o(a.id),
          className: j(
            "w-full text-left px-3 py-2 cursor-pointer rounded-md text-sm font-medium transition-colors flex items-center space-x-2",
            s === a.id ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
          ),
          children: [
            a.icon && /* @__PURE__ */ d.jsx("span", { className: "flex-shrink-0", children: a.icon }),
            /* @__PURE__ */ d.jsx("span", { children: a.label })
          ]
        },
        a.id
      )) })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "mt-8 pt-6 border-t border-gray-800", children: [
      /* @__PURE__ */ d.jsx("h3", { className: "text-xs font-medium text-gray-500 uppercase tracking-wider mb-3", children: "Resources" }),
      /* @__PURE__ */ d.jsxs(
        "a",
        {
          href: "https://github.com/yashar1919/yashar-custom-ui-library",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors flex items-center space-x-2",
          children: [
            /* @__PURE__ */ d.jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ d.jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }) }),
            /* @__PURE__ */ d.jsx("span", { children: "GitHub" })
          ]
        }
      )
    ] })
  ] })
] }), Fr = ({
  open: e,
  onClose: s,
  title: o,
  size: t = "md",
  animation: a = "scale",
  showHeader: u = !0,
  showCloseButton: f = !0,
  closeOnOverlayClick: h = !0,
  closeOnEscape: m = !0,
  overlayClassName: w,
  contentClassName: y,
  headerClassName: R,
  footer: O,
  footerClassName: I,
  preventBodyScroll: E = !0,
  titleFontSize: S,
  titleColor: M,
  contentFontSize: P,
  contentColor: U,
  className: G,
  children: z,
  ...p
}) => {
  const L = Te(null), Y = Te(null), [n, C] = ae(!1), [ee, J] = ae(!1);
  be(() => {
    e ? (J(!0), setTimeout(() => C(!0), 20)) : (C(!1), setTimeout(() => J(!1), 400));
  }, [e]), be(() => {
    if (!e || !m) return;
    const i = (V) => {
      V.key === "Escape" && s();
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [e, m, s]), be(() => {
    if (E)
      return e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
        document.body.style.overflow = "";
      };
  }, [e, E]), be(() => {
    e ? (Y.current = document.activeElement, setTimeout(() => {
      L.current?.focus();
    }, 100)) : Y.current && Y.current.focus();
  }, [e]);
  const F = (i) => {
    h && i.target === i.currentTarget && s();
  };
  if (!ee) return null;
  const X = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-[95vw] max-h-[95vh]"
  }, H = () => {
    const r = `all 350ms ${n ? "cubic-bezier(0.34, 1.56, 0.64, 1)" : "cubic-bezier(0.25, 0.46, 0.45, 0.94)"}`;
    switch (a) {
      case "fade":
        return {
          transition: r,
          opacity: n ? 1 : 0,
          filter: n ? "blur(0px)" : "blur(4px)"
        };
      case "scale":
        return {
          transition: r,
          opacity: n ? 1 : 0,
          transform: n ? "scale(1) rotate(0deg)" : "scale(0.8) rotate(-3deg)",
          filter: n ? "blur(0px)" : "blur(2px)"
        };
      case "slide-up":
        return {
          transition: r,
          opacity: n ? 1 : 0,
          transform: n ? "translateY(0px) scale(1)" : "translateY(40px) scale(0.95)",
          filter: n ? "blur(0px)" : "blur(1px)"
        };
      case "slide-down":
        return {
          transition: r,
          opacity: n ? 1 : 0,
          transform: n ? "translateY(0px) scale(1) rotate(0deg)" : "translateY(-40px) scale(0.9) rotate(2deg)",
          filter: n ? "blur(0px)" : "blur(2px)"
        };
      case "slide-left":
        return {
          transition: r,
          opacity: n ? 1 : 0,
          transform: n ? "translateX(0px) scale(1) rotateY(0deg)" : "translateX(60px) scale(0.85) rotateY(-10deg)",
          transformOrigin: "left center",
          filter: n ? "blur(0px)" : "blur(2px)"
        };
      case "slide-right":
        return {
          transition: r,
          opacity: n ? 1 : 0,
          transform: n ? "translateX(0px) scale(1) rotateY(0deg)" : "translateX(-60px) scale(0.85) rotateY(10deg)",
          transformOrigin: "right center",
          filter: n ? "blur(0px)" : "blur(2px)"
        };
      case "bounce":
        return {
          transition: n ? "all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)" : "all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          opacity: n ? 1 : 0,
          transform: n ? "scale(1) translateY(0px) rotate(0deg)" : "scale(0.3) translateY(-50px) rotate(-10deg)",
          filter: n ? "blur(0px)" : "blur(4px)"
        };
      case "flip":
        return {
          transition: r,
          opacity: n ? 1 : 0,
          transform: n ? "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)" : "perspective(1000px) rotateX(-90deg) rotateY(20deg) scale(0.8)",
          transformOrigin: "center top",
          filter: n ? "blur(0px)" : "blur(3px)"
        };
      default:
        return {
          transition: r,
          opacity: n ? 1 : 0,
          transform: n ? "scale(1) rotate(0deg)" : "scale(0.7) rotate(-5deg)",
          filter: n ? "blur(0px)" : "blur(3px)"
        };
    }
  }, N = {
    transition: "all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: n ? 1 : 0,
    backdropFilter: n ? "blur(8px) saturate(1.2)" : "blur(0px) saturate(1)"
  }, T = () => /* @__PURE__ */ d.jsx(
    "svg",
    {
      className: "w-5 h-5",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ d.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M6 18L18 6M6 6l12 12"
        }
      )
    }
  ), _ = /* @__PURE__ */ d.jsx(
    "div",
    {
      className: j(
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        w || "bg-black/50 backdrop-blur-sm"
      ),
      style: N,
      onClick: F,
      "aria-modal": "true",
      role: "dialog",
      "aria-labelledby": o ? "modal-title" : void 0,
      children: /* @__PURE__ */ d.jsxs(
        "div",
        {
          ref: L,
          className: j(
            "relative w-full rounded-lg bg-white shadow-xl",
            "focus:outline-none",
            X[t],
            y,
            G
          ),
          style: H(),
          tabIndex: -1,
          ...p,
          children: [
            u && (o || f) && /* @__PURE__ */ d.jsxs(
              "div",
              {
                className: j(
                  "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  R
                ),
                children: [
                  o && /* @__PURE__ */ d.jsx(
                    "h2",
                    {
                      id: "modal-title",
                      className: "text-lg font-semibold text-gray-900",
                      style: {
                        fontSize: S,
                        color: M
                      },
                      children: o
                    }
                  ),
                  f && /* @__PURE__ */ d.jsx(
                    "button",
                    {
                      onClick: s,
                      className: "p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors",
                      "aria-label": "Close modal",
                      children: /* @__PURE__ */ d.jsx(T, {})
                    }
                  )
                ]
              }
            ),
            " ",
            /* @__PURE__ */ d.jsx(
              "div",
              {
                className: "px-6 py-4",
                style: {
                  fontSize: P,
                  color: U
                },
                children: z
              }
            ),
            O && /* @__PURE__ */ d.jsx(
              "div",
              {
                className: j(
                  "px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg",
                  I
                ),
                children: O
              }
            )
          ]
        }
      )
    }
  );
  return Ze(_, document.body);
};
Fr.displayName = "Modal";
export {
  Vr as Button,
  Or as Input,
  Fr as Modal,
  $r as Navigation,
  Lr as Textarea,
  j as cn
};
