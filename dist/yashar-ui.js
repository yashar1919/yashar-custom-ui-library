import K from "react";
var T = { exports: {} }, b = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function ee() {
  if (F) return b;
  F = 1;
  var l = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function c(u, o, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      s = {};
      for (var f in o)
        f !== "key" && (s[f] = o[f]);
    } else s = o;
    return o = s.ref, {
      $$typeof: l,
      type: u,
      key: i,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return b.Fragment = d, b.jsx = c, b.jsxs = c, b;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function re() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && (function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === H ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case U:
          return "Profiler";
        case W:
          return "StrictMode";
        case V:
          return "Suspense";
        case G:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case z:
            return e.displayName || "Context";
          case q:
            return (e._context.displayName || "Context") + ".Consumer";
          case J:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return r = e.displayName || null, r !== null ? r : l(e.type) || "Memo";
          case O:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function c(e) {
      try {
        d(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), d(e);
      }
    }
    function u(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === O)
        return "<...>";
      try {
        var r = l(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = w.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(e) {
      if (j.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function y() {
      var e = l(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function x(e, r, t, n, g, A) {
      var a = t.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: y
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: g
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function E(e, r, t, n, g, A) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (Z(a)) {
            for (n = 0; n < a.length; n++)
              p(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(a);
      if (j.call(r, "key")) {
        a = l(e);
        var m = Object.keys(r).filter(function(Q) {
          return Q !== "key";
        });
        n = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", I[a + n] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          m,
          a
        ), I[a + n] = !0);
      }
      if (a = null, t !== void 0 && (c(t), a = "" + t), i(r) && (c(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var S in r)
          S !== "key" && (t[S] = r[S]);
      } else t = r;
      return a && f(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), x(
        e,
        a,
        t,
        o(),
        g,
        A
      );
    }
    function p(e) {
      v(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === O && (e._payload.status === "fulfilled" ? v(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function v(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var R = K, P = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), z = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), H = Symbol.for("react.client.reference"), w = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, Z = Array.isArray, h = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, C = {}, Y = R.react_stack_bottom_frame.bind(
      R,
      s
    )(), $ = h(u(s)), I = {};
    _.Fragment = k, _.jsx = function(e, r, t) {
      var n = 1e4 > w.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : Y,
        n ? h(u(e)) : $
      );
    }, _.jsxs = function(e, r, t) {
      var n = 1e4 > w.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : Y,
        n ? h(u(e)) : $
      );
    };
  })()), _;
}
var L;
function te() {
  return L || (L = 1, process.env.NODE_ENV === "production" ? T.exports = ee() : T.exports = re()), T.exports;
}
var ne = te();
const oe = ({
  children: l,
  variant: d = "primary",
  size: c = "medium",
  disabled: u = !1,
  onClick: o,
  type: s = "button",
  className: i = "",
  ...f
}) => {
  const y = [
    "inline-flex",
    "items-center",
    "justify-center",
    "border",
    "border-transparent",
    "font-medium",
    "rounded-md",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "transition-colors",
    "duration-200",
    "cursor-pointer",
    "select-none"
  ], x = {
    primary: [
      "bg-blue-600",
      "text-white",
      "hover:bg-blue-700",
      "focus:ring-blue-500",
      "disabled:bg-blue-300"
    ],
    secondary: [
      "bg-gray-600",
      "text-white",
      "hover:bg-gray-700",
      "focus:ring-gray-500",
      "disabled:bg-gray-300"
    ],
    danger: [
      "bg-red-600",
      "text-white",
      "hover:bg-red-700",
      "focus:ring-red-500",
      "disabled:bg-red-300"
    ],
    success: [
      "bg-green-600",
      "text-white",
      "hover:bg-green-700",
      "focus:ring-green-500",
      "disabled:bg-green-300"
    ]
  }, E = {
    small: ["px-3", "py-1.5", "text-sm"],
    medium: ["px-4", "py-2", "text-base"],
    large: ["px-6", "py-3", "text-lg"]
  }, p = u ? ["cursor-not-allowed", "opacity-60"] : [], v = [
    ...y,
    ...x[d],
    ...E[c],
    ...p,
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ ne.jsx(
    "button",
    {
      type: s,
      className: v,
      disabled: u,
      onClick: o,
      ...f,
      children: l
    }
  );
};
export {
  oe as Button
};
