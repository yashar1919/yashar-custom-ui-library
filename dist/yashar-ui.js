import K from "react";
var v = { exports: {} }, _ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function ee() {
  if (I) return _;
  I = 1;
  var u = Symbol.for("react.transitional.element"), m = Symbol.for("react.fragment");
  function l(c, o, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      s = {};
      for (var f in o)
        f !== "key" && (s[f] = o[f]);
    } else s = o;
    return o = s.ref, {
      $$typeof: u,
      type: c,
      key: i,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return _.Fragment = m, _.jsx = l, _.jsxs = l, _;
}
var E = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function re() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && (function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === H ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case U:
          return "Profiler";
        case W:
          return "StrictMode";
        case z:
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
          case J:
            return e.displayName || "Context";
          case q:
            return (e._context.displayName || "Context") + ".Consumer";
          case V:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case k:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function m(e) {
      return "" + e;
    }
    function l(e) {
      try {
        m(e);
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
        ), m(e);
      }
    }
    function c(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === k)
        return "<...>";
      try {
        var r = u(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(e) {
      if (h.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, r) {
      function t() {
        g || (g = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function p() {
      var e = u(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function L(e, r, t, n, R, A) {
      var a = t.ref;
      return e = {
        $$typeof: x,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: p
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
        value: R
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function P(e, r, t, n, R, A) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (Z(a)) {
            for (n = 0; n < a.length; n++)
              j(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(a);
      if (h.call(r, "key")) {
        a = u(e);
        var d = Object.keys(r).filter(function(Q) {
          return Q !== "key";
        });
        n = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", $[a + n] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          d,
          a
        ), $[a + n] = !0);
      }
      if (a = null, t !== void 0 && (l(t), a = "" + t), i(r) && (l(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var S in r)
          S !== "key" && (t[S] = r[S]);
      } else t = r;
      return a && f(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), L(
        e,
        a,
        t,
        o(),
        R,
        A
      );
    }
    function j(e) {
      w(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === k && (e._payload.status === "fulfilled" ? w(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function w(e) {
      return typeof e == "object" && e !== null && e.$$typeof === x;
    }
    var b = K, x = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), J = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), H = Symbol.for("react.client.reference"), O = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, h = Object.prototype.hasOwnProperty, Z = Array.isArray, y = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var g, N = {}, C = b.react_stack_bottom_frame.bind(
      b,
      s
    )(), Y = y(c(s)), $ = {};
    E.Fragment = T, E.jsx = function(e, r, t) {
      var n = 1e4 > O.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : C,
        n ? y(c(e)) : Y
      );
    }, E.jsxs = function(e, r, t) {
      var n = 1e4 > O.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : C,
        n ? y(c(e)) : Y
      );
    };
  })()), E;
}
var D;
function te() {
  return D || (D = 1, process.env.NODE_ENV === "production" ? v.exports = ee() : v.exports = re()), v.exports;
}
var ne = te();
const oe = ({
  children: u,
  variant: m = "primary",
  size: l = "medium",
  disabled: c = !1,
  onClick: o,
  type: s = "button",
  className: i = "",
  ...f
}) => {
  const p = [
    "yashar-button",
    `yashar-button--${m}`,
    `yashar-button--${l}`,
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ ne.jsx(
    "button",
    {
      type: s,
      className: p,
      disabled: c,
      onClick: o,
      ...f,
      children: u
    }
  );
};
export {
  oe as Button
};
