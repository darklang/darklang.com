(function () {
  const d = document.createElement("link").relList;
  if (d && d.supports && d.supports("modulepreload")) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) u(h);
  new MutationObserver(h => {
    for (const m of h)
      if (m.type === "childList")
        for (const A of m.addedNodes)
          A.tagName === "LINK" && A.rel === "modulepreload" && u(A);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(h) {
    const m = {};
    return (
      h.integrity && (m.integrity = h.integrity),
      h.referrerPolicy && (m.referrerPolicy = h.referrerPolicy),
      h.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : h.crossOrigin === "anonymous"
          ? (m.credentials = "omit")
          : (m.credentials = "same-origin"),
      m
    );
  }
  function u(h) {
    if (h.ep) return;
    h.ep = !0;
    const m = f(h);
    fetch(h.href, m);
  }
})();
function Dh(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var wu = { exports: {} },
  Hi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fh;
function t0() {
  if (fh) return Hi;
  fh = 1;
  var r = Symbol.for("react.transitional.element"),
    d = Symbol.for("react.fragment");
  function f(u, h, m) {
    var A = null;
    if (
      (m !== void 0 && (A = "" + m),
      h.key !== void 0 && (A = "" + h.key),
      "key" in h)
    ) {
      m = {};
      for (var j in h) j !== "key" && (m[j] = h[j]);
    } else m = h;
    return (
      (h = m.ref),
      { $$typeof: r, type: u, key: A, ref: h !== void 0 ? h : null, props: m }
    );
  }
  return (Hi.Fragment = d), (Hi.jsx = f), (Hi.jsxs = f), Hi;
}
var hh;
function l0() {
  return hh || ((hh = 1), (wu.exports = t0())), wu.exports;
}
var n = l0(),
  Au = { exports: {} },
  xe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mh;
function a0() {
  if (mh) return xe;
  mh = 1;
  var r = Symbol.for("react.transitional.element"),
    d = Symbol.for("react.portal"),
    f = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    h = Symbol.for("react.profiler"),
    m = Symbol.for("react.consumer"),
    A = Symbol.for("react.context"),
    j = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    x = Symbol.for("react.memo"),
    S = Symbol.for("react.lazy"),
    B = Symbol.iterator;
  function L(b) {
    return b === null || typeof b != "object"
      ? null
      : ((b = (B && b[B]) || b["@@iterator"]),
        typeof b == "function" ? b : null);
  }
  var q = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    z = Object.assign,
    J = {};
  function Q(b, U, W) {
    (this.props = b),
      (this.context = U),
      (this.refs = J),
      (this.updater = W || q);
  }
  (Q.prototype.isReactComponent = {}),
    (Q.prototype.setState = function (b, U) {
      if (typeof b != "object" && typeof b != "function" && b != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, b, U, "setState");
    }),
    (Q.prototype.forceUpdate = function (b) {
      this.updater.enqueueForceUpdate(this, b, "forceUpdate");
    });
  function H() {}
  H.prototype = Q.prototype;
  function ae(b, U, W) {
    (this.props = b),
      (this.context = U),
      (this.refs = J),
      (this.updater = W || q);
  }
  var Z = (ae.prototype = new H());
  (Z.constructor = ae), z(Z, Q.prototype), (Z.isPureReactComponent = !0);
  var P = Array.isArray,
    F = { H: null, A: null, T: null, S: null, V: null },
    Ne = Object.prototype.hasOwnProperty;
  function je(b, U, W, K, re, Ee) {
    return (
      (W = Ee.ref),
      { $$typeof: r, type: b, key: U, ref: W !== void 0 ? W : null, props: Ee }
    );
  }
  function Se(b, U) {
    return je(b.type, U, void 0, void 0, void 0, b.props);
  }
  function we(b) {
    return typeof b == "object" && b !== null && b.$$typeof === r;
  }
  function Qe(b) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      b.replace(/[=:]/g, function (W) {
        return U[W];
      })
    );
  }
  var Xe = /\/+/g;
  function He(b, U) {
    return typeof b == "object" && b !== null && b.key != null
      ? Qe("" + b.key)
      : U.toString(36);
  }
  function qt() {}
  function vt(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (
          (typeof b.status == "string"
            ? b.then(qt, qt)
            : ((b.status = "pending"),
              b.then(
                function (U) {
                  b.status === "pending" &&
                    ((b.status = "fulfilled"), (b.value = U));
                },
                function (U) {
                  b.status === "pending" &&
                    ((b.status = "rejected"), (b.reason = U));
                },
              )),
          b.status)
        ) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
    }
    throw b;
  }
  function nt(b, U, W, K, re) {
    var Ee = typeof b;
    (Ee === "undefined" || Ee === "boolean") && (b = null);
    var fe = !1;
    if (b === null) fe = !0;
    else
      switch (Ee) {
        case "bigint":
        case "string":
        case "number":
          fe = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case r:
            case d:
              fe = !0;
              break;
            case S:
              return (fe = b._init), nt(fe(b._payload), U, W, K, re);
          }
      }
    if (fe)
      return (
        (re = re(b)),
        (fe = K === "" ? "." + He(b, 0) : K),
        P(re)
          ? ((W = ""),
            fe != null && (W = fe.replace(Xe, "$&/") + "/"),
            nt(re, U, W, "", function (xl) {
              return xl;
            }))
          : re != null &&
            (we(re) &&
              (re = Se(
                re,
                W +
                  (re.key == null || (b && b.key === re.key)
                    ? ""
                    : ("" + re.key).replace(Xe, "$&/") + "/") +
                  fe,
              )),
            U.push(re)),
        1
      );
    fe = 0;
    var St = K === "" ? "." : K + ":";
    if (P(b))
      for (var qe = 0; qe < b.length; qe++)
        (K = b[qe]), (Ee = St + He(K, qe)), (fe += nt(K, U, W, Ee, re));
    else if (((qe = L(b)), typeof qe == "function"))
      for (b = qe.call(b), qe = 0; !(K = b.next()).done; )
        (K = K.value), (Ee = St + He(K, qe++)), (fe += nt(K, U, W, Ee, re));
    else if (Ee === "object") {
      if (typeof b.then == "function") return nt(vt(b), U, W, K, re);
      throw (
        ((U = String(b)),
        Error(
          "Objects are not valid as a React child (found: " +
            (U === "[object Object]"
              ? "object with keys {" + Object.keys(b).join(", ") + "}"
              : U) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return fe;
  }
  function k(b, U, W) {
    if (b == null) return b;
    var K = [],
      re = 0;
    return (
      nt(b, K, "", "", function (Ee) {
        return U.call(W, Ee, re++);
      }),
      K
    );
  }
  function $(b) {
    if (b._status === -1) {
      var U = b._result;
      (U = U()),
        U.then(
          function (W) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 1), (b._result = W));
          },
          function (W) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 2), (b._result = W));
          },
        ),
        b._status === -1 && ((b._status = 0), (b._result = U));
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var ne =
    typeof reportError == "function"
      ? reportError
      : function (b) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var U = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof b == "object" &&
                b !== null &&
                typeof b.message == "string"
                  ? String(b.message)
                  : String(b),
              error: b,
            });
            if (!window.dispatchEvent(U)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", b);
            return;
          }
          console.error(b);
        };
  function Ae() {}
  return (
    (xe.Children = {
      map: k,
      forEach: function (b, U, W) {
        k(
          b,
          function () {
            U.apply(this, arguments);
          },
          W,
        );
      },
      count: function (b) {
        var U = 0;
        return (
          k(b, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (b) {
        return (
          k(b, function (U) {
            return U;
          }) || []
        );
      },
      only: function (b) {
        if (!we(b))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return b;
      },
    }),
    (xe.Component = Q),
    (xe.Fragment = f),
    (xe.Profiler = h),
    (xe.PureComponent = ae),
    (xe.StrictMode = u),
    (xe.Suspense = v),
    (xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
    (xe.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (b) {
        return F.H.useMemoCache(b);
      },
    }),
    (xe.cache = function (b) {
      return function () {
        return b.apply(null, arguments);
      };
    }),
    (xe.cloneElement = function (b, U, W) {
      if (b == null)
        throw Error(
          "The argument must be a React element, but you passed " + b + ".",
        );
      var K = z({}, b.props),
        re = b.key,
        Ee = void 0;
      if (U != null)
        for (fe in (U.ref !== void 0 && (Ee = void 0),
        U.key !== void 0 && (re = "" + U.key),
        U))
          !Ne.call(U, fe) ||
            fe === "key" ||
            fe === "__self" ||
            fe === "__source" ||
            (fe === "ref" && U.ref === void 0) ||
            (K[fe] = U[fe]);
      var fe = arguments.length - 2;
      if (fe === 1) K.children = W;
      else if (1 < fe) {
        for (var St = Array(fe), qe = 0; qe < fe; qe++)
          St[qe] = arguments[qe + 2];
        K.children = St;
      }
      return je(b.type, re, void 0, void 0, Ee, K);
    }),
    (xe.createContext = function (b) {
      return (
        (b = {
          $$typeof: A,
          _currentValue: b,
          _currentValue2: b,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (b.Provider = b),
        (b.Consumer = { $$typeof: m, _context: b }),
        b
      );
    }),
    (xe.createElement = function (b, U, W) {
      var K,
        re = {},
        Ee = null;
      if (U != null)
        for (K in (U.key !== void 0 && (Ee = "" + U.key), U))
          Ne.call(U, K) &&
            K !== "key" &&
            K !== "__self" &&
            K !== "__source" &&
            (re[K] = U[K]);
      var fe = arguments.length - 2;
      if (fe === 1) re.children = W;
      else if (1 < fe) {
        for (var St = Array(fe), qe = 0; qe < fe; qe++)
          St[qe] = arguments[qe + 2];
        re.children = St;
      }
      if (b && b.defaultProps)
        for (K in ((fe = b.defaultProps), fe))
          re[K] === void 0 && (re[K] = fe[K]);
      return je(b, Ee, void 0, void 0, null, re);
    }),
    (xe.createRef = function () {
      return { current: null };
    }),
    (xe.forwardRef = function (b) {
      return { $$typeof: j, render: b };
    }),
    (xe.isValidElement = we),
    (xe.lazy = function (b) {
      return { $$typeof: S, _payload: { _status: -1, _result: b }, _init: $ };
    }),
    (xe.memo = function (b, U) {
      return { $$typeof: x, type: b, compare: U === void 0 ? null : U };
    }),
    (xe.startTransition = function (b) {
      var U = F.T,
        W = {};
      F.T = W;
      try {
        var K = b(),
          re = F.S;
        re !== null && re(W, K),
          typeof K == "object" &&
            K !== null &&
            typeof K.then == "function" &&
            K.then(Ae, ne);
      } catch (Ee) {
        ne(Ee);
      } finally {
        F.T = U;
      }
    }),
    (xe.unstable_useCacheRefresh = function () {
      return F.H.useCacheRefresh();
    }),
    (xe.use = function (b) {
      return F.H.use(b);
    }),
    (xe.useActionState = function (b, U, W) {
      return F.H.useActionState(b, U, W);
    }),
    (xe.useCallback = function (b, U) {
      return F.H.useCallback(b, U);
    }),
    (xe.useContext = function (b) {
      return F.H.useContext(b);
    }),
    (xe.useDebugValue = function () {}),
    (xe.useDeferredValue = function (b, U) {
      return F.H.useDeferredValue(b, U);
    }),
    (xe.useEffect = function (b, U, W) {
      var K = F.H;
      if (typeof W == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return K.useEffect(b, U);
    }),
    (xe.useId = function () {
      return F.H.useId();
    }),
    (xe.useImperativeHandle = function (b, U, W) {
      return F.H.useImperativeHandle(b, U, W);
    }),
    (xe.useInsertionEffect = function (b, U) {
      return F.H.useInsertionEffect(b, U);
    }),
    (xe.useLayoutEffect = function (b, U) {
      return F.H.useLayoutEffect(b, U);
    }),
    (xe.useMemo = function (b, U) {
      return F.H.useMemo(b, U);
    }),
    (xe.useOptimistic = function (b, U) {
      return F.H.useOptimistic(b, U);
    }),
    (xe.useReducer = function (b, U, W) {
      return F.H.useReducer(b, U, W);
    }),
    (xe.useRef = function (b) {
      return F.H.useRef(b);
    }),
    (xe.useState = function (b) {
      return F.H.useState(b);
    }),
    (xe.useSyncExternalStore = function (b, U, W) {
      return F.H.useSyncExternalStore(b, U, W);
    }),
    (xe.useTransition = function () {
      return F.H.useTransition();
    }),
    (xe.version = "19.1.0"),
    xe
  );
}
var gh;
function zu() {
  return gh || ((gh = 1), (Au.exports = a0())), Au.exports;
}
var T = zu();
const n0 = Dh(T);
var Eu = { exports: {} },
  Yi = {},
  Cu = { exports: {} },
  Ru = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xh;
function i0() {
  return (
    xh ||
      ((xh = 1),
      (function (r) {
        function d(k, $) {
          var ne = k.length;
          k.push($);
          e: for (; 0 < ne; ) {
            var Ae = (ne - 1) >>> 1,
              b = k[Ae];
            if (0 < h(b, $)) (k[Ae] = $), (k[ne] = b), (ne = Ae);
            else break e;
          }
        }
        function f(k) {
          return k.length === 0 ? null : k[0];
        }
        function u(k) {
          if (k.length === 0) return null;
          var $ = k[0],
            ne = k.pop();
          if (ne !== $) {
            k[0] = ne;
            e: for (var Ae = 0, b = k.length, U = b >>> 1; Ae < U; ) {
              var W = 2 * (Ae + 1) - 1,
                K = k[W],
                re = W + 1,
                Ee = k[re];
              if (0 > h(K, ne))
                re < b && 0 > h(Ee, K)
                  ? ((k[Ae] = Ee), (k[re] = ne), (Ae = re))
                  : ((k[Ae] = K), (k[W] = ne), (Ae = W));
              else if (re < b && 0 > h(Ee, ne))
                (k[Ae] = Ee), (k[re] = ne), (Ae = re);
              else break e;
            }
          }
          return $;
        }
        function h(k, $) {
          var ne = k.sortIndex - $.sortIndex;
          return ne !== 0 ? ne : k.id - $.id;
        }
        if (
          ((r.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var m = performance;
          r.unstable_now = function () {
            return m.now();
          };
        } else {
          var A = Date,
            j = A.now();
          r.unstable_now = function () {
            return A.now() - j;
          };
        }
        var v = [],
          x = [],
          S = 1,
          B = null,
          L = 3,
          q = !1,
          z = !1,
          J = !1,
          Q = !1,
          H = typeof setTimeout == "function" ? setTimeout : null,
          ae = typeof clearTimeout == "function" ? clearTimeout : null,
          Z = typeof setImmediate < "u" ? setImmediate : null;
        function P(k) {
          for (var $ = f(x); $ !== null; ) {
            if ($.callback === null) u(x);
            else if ($.startTime <= k)
              u(x), ($.sortIndex = $.expirationTime), d(v, $);
            else break;
            $ = f(x);
          }
        }
        function F(k) {
          if (((J = !1), P(k), !z))
            if (f(v) !== null) (z = !0), Ne || ((Ne = !0), He());
            else {
              var $ = f(x);
              $ !== null && nt(F, $.startTime - k);
            }
        }
        var Ne = !1,
          je = -1,
          Se = 5,
          we = -1;
        function Qe() {
          return Q ? !0 : !(r.unstable_now() - we < Se);
        }
        function Xe() {
          if (((Q = !1), Ne)) {
            var k = r.unstable_now();
            we = k;
            var $ = !0;
            try {
              e: {
                (z = !1), J && ((J = !1), ae(je), (je = -1)), (q = !0);
                var ne = L;
                try {
                  t: {
                    for (
                      P(k), B = f(v);
                      B !== null && !(B.expirationTime > k && Qe());

                    ) {
                      var Ae = B.callback;
                      if (typeof Ae == "function") {
                        (B.callback = null), (L = B.priorityLevel);
                        var b = Ae(B.expirationTime <= k);
                        if (((k = r.unstable_now()), typeof b == "function")) {
                          (B.callback = b), P(k), ($ = !0);
                          break t;
                        }
                        B === f(v) && u(v), P(k);
                      } else u(v);
                      B = f(v);
                    }
                    if (B !== null) $ = !0;
                    else {
                      var U = f(x);
                      U !== null && nt(F, U.startTime - k), ($ = !1);
                    }
                  }
                  break e;
                } finally {
                  (B = null), (L = ne), (q = !1);
                }
                $ = void 0;
              }
            } finally {
              $ ? He() : (Ne = !1);
            }
          }
        }
        var He;
        if (typeof Z == "function")
          He = function () {
            Z(Xe);
          };
        else if (typeof MessageChannel < "u") {
          var qt = new MessageChannel(),
            vt = qt.port2;
          (qt.port1.onmessage = Xe),
            (He = function () {
              vt.postMessage(null);
            });
        } else
          He = function () {
            H(Xe, 0);
          };
        function nt(k, $) {
          je = H(function () {
            k(r.unstable_now());
          }, $);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (r.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Se = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return L;
          }),
          (r.unstable_next = function (k) {
            switch (L) {
              case 1:
              case 2:
              case 3:
                var $ = 3;
                break;
              default:
                $ = L;
            }
            var ne = L;
            L = $;
            try {
              return k();
            } finally {
              L = ne;
            }
          }),
          (r.unstable_requestPaint = function () {
            Q = !0;
          }),
          (r.unstable_runWithPriority = function (k, $) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                k = 3;
            }
            var ne = L;
            L = k;
            try {
              return $();
            } finally {
              L = ne;
            }
          }),
          (r.unstable_scheduleCallback = function (k, $, ne) {
            var Ae = r.unstable_now();
            switch (
              (typeof ne == "object" && ne !== null
                ? ((ne = ne.delay),
                  (ne = typeof ne == "number" && 0 < ne ? Ae + ne : Ae))
                : (ne = Ae),
              k)
            ) {
              case 1:
                var b = -1;
                break;
              case 2:
                b = 250;
                break;
              case 5:
                b = 1073741823;
                break;
              case 4:
                b = 1e4;
                break;
              default:
                b = 5e3;
            }
            return (
              (b = ne + b),
              (k = {
                id: S++,
                callback: $,
                priorityLevel: k,
                startTime: ne,
                expirationTime: b,
                sortIndex: -1,
              }),
              ne > Ae
                ? ((k.sortIndex = ne),
                  d(x, k),
                  f(v) === null &&
                    k === f(x) &&
                    (J ? (ae(je), (je = -1)) : (J = !0), nt(F, ne - Ae)))
                : ((k.sortIndex = b),
                  d(v, k),
                  z || q || ((z = !0), Ne || ((Ne = !0), He()))),
              k
            );
          }),
          (r.unstable_shouldYield = Qe),
          (r.unstable_wrapCallback = function (k) {
            var $ = L;
            return function () {
              var ne = L;
              L = $;
              try {
                return k.apply(this, arguments);
              } finally {
                L = ne;
              }
            };
          });
      })(Ru)),
    Ru
  );
}
var ph;
function s0() {
  return ph || ((ph = 1), (Cu.exports = i0())), Cu.exports;
}
var Tu = { exports: {} },
  Nt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bh;
function r0() {
  if (bh) return Nt;
  bh = 1;
  var r = zu();
  function d(v) {
    var x = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      x += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++)
        x += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return (
      "Minified React error #" +
      v +
      "; visit " +
      x +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f() {}
  var u = {
      d: {
        f,
        r: function () {
          throw Error(d(522));
        },
        D: f,
        C: f,
        L: f,
        m: f,
        X: f,
        S: f,
        M: f,
      },
      p: 0,
      findDOMNode: null,
    },
    h = Symbol.for("react.portal");
  function m(v, x, S) {
    var B =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: B == null ? null : "" + B,
      children: v,
      containerInfo: x,
      implementation: S,
    };
  }
  var A = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function j(v, x) {
    if (v === "font") return "";
    if (typeof x == "string") return x === "use-credentials" ? x : "";
  }
  return (
    (Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (Nt.createPortal = function (v, x) {
      var S =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!x || (x.nodeType !== 1 && x.nodeType !== 9 && x.nodeType !== 11))
        throw Error(d(299));
      return m(v, x, null, S);
    }),
    (Nt.flushSync = function (v) {
      var x = A.T,
        S = u.p;
      try {
        if (((A.T = null), (u.p = 2), v)) return v();
      } finally {
        (A.T = x), (u.p = S), u.d.f();
      }
    }),
    (Nt.preconnect = function (v, x) {
      typeof v == "string" &&
        (x
          ? ((x = x.crossOrigin),
            (x =
              typeof x == "string"
                ? x === "use-credentials"
                  ? x
                  : ""
                : void 0))
          : (x = null),
        u.d.C(v, x));
    }),
    (Nt.prefetchDNS = function (v) {
      typeof v == "string" && u.d.D(v);
    }),
    (Nt.preinit = function (v, x) {
      if (typeof v == "string" && x && typeof x.as == "string") {
        var S = x.as,
          B = j(S, x.crossOrigin),
          L = typeof x.integrity == "string" ? x.integrity : void 0,
          q = typeof x.fetchPriority == "string" ? x.fetchPriority : void 0;
        S === "style"
          ? u.d.S(v, typeof x.precedence == "string" ? x.precedence : void 0, {
              crossOrigin: B,
              integrity: L,
              fetchPriority: q,
            })
          : S === "script" &&
            u.d.X(v, {
              crossOrigin: B,
              integrity: L,
              fetchPriority: q,
              nonce: typeof x.nonce == "string" ? x.nonce : void 0,
            });
      }
    }),
    (Nt.preinitModule = function (v, x) {
      if (typeof v == "string")
        if (typeof x == "object" && x !== null) {
          if (x.as == null || x.as === "script") {
            var S = j(x.as, x.crossOrigin);
            u.d.M(v, {
              crossOrigin: S,
              integrity: typeof x.integrity == "string" ? x.integrity : void 0,
              nonce: typeof x.nonce == "string" ? x.nonce : void 0,
            });
          }
        } else x == null && u.d.M(v);
    }),
    (Nt.preload = function (v, x) {
      if (
        typeof v == "string" &&
        typeof x == "object" &&
        x !== null &&
        typeof x.as == "string"
      ) {
        var S = x.as,
          B = j(S, x.crossOrigin);
        u.d.L(v, S, {
          crossOrigin: B,
          integrity: typeof x.integrity == "string" ? x.integrity : void 0,
          nonce: typeof x.nonce == "string" ? x.nonce : void 0,
          type: typeof x.type == "string" ? x.type : void 0,
          fetchPriority:
            typeof x.fetchPriority == "string" ? x.fetchPriority : void 0,
          referrerPolicy:
            typeof x.referrerPolicy == "string" ? x.referrerPolicy : void 0,
          imageSrcSet:
            typeof x.imageSrcSet == "string" ? x.imageSrcSet : void 0,
          imageSizes: typeof x.imageSizes == "string" ? x.imageSizes : void 0,
          media: typeof x.media == "string" ? x.media : void 0,
        });
      }
    }),
    (Nt.preloadModule = function (v, x) {
      if (typeof v == "string")
        if (x) {
          var S = j(x.as, x.crossOrigin);
          u.d.m(v, {
            as: typeof x.as == "string" && x.as !== "script" ? x.as : void 0,
            crossOrigin: S,
            integrity: typeof x.integrity == "string" ? x.integrity : void 0,
          });
        } else u.d.m(v);
    }),
    (Nt.requestFormReset = function (v) {
      u.d.r(v);
    }),
    (Nt.unstable_batchedUpdates = function (v, x) {
      return v(x);
    }),
    (Nt.useFormState = function (v, x, S) {
      return A.H.useFormState(v, x, S);
    }),
    (Nt.useFormStatus = function () {
      return A.H.useHostTransitionStatus();
    }),
    (Nt.version = "19.1.0"),
    Nt
  );
}
var vh;
function c0() {
  if (vh) return Tu.exports;
  vh = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (d) {
        console.error(d);
      }
  }
  return r(), (Tu.exports = r0()), Tu.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yh;
function u0() {
  if (yh) return Yi;
  yh = 1;
  var r = s0(),
    d = zu(),
    f = c0();
  function u(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function h(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function m(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function A(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function j(e) {
    if (m(e) !== e) throw Error(u(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = m(e)), t === null)) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var i = l.return;
      if (i === null) break;
      var s = i.alternate;
      if (s === null) {
        if (((a = i.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (i.child === s.child) {
        for (s = i.child; s; ) {
          if (s === l) return j(i), e;
          if (s === a) return j(i), t;
          s = s.sibling;
        }
        throw Error(u(188));
      }
      if (l.return !== a.return) (l = i), (a = s);
      else {
        for (var c = !1, o = i.child; o; ) {
          if (o === l) {
            (c = !0), (l = i), (a = s);
            break;
          }
          if (o === a) {
            (c = !0), (a = i), (l = s);
            break;
          }
          o = o.sibling;
        }
        if (!c) {
          for (o = s.child; o; ) {
            if (o === l) {
              (c = !0), (l = s), (a = i);
              break;
            }
            if (o === a) {
              (c = !0), (a = s), (l = i);
              break;
            }
            o = o.sibling;
          }
          if (!c) throw Error(u(189));
        }
      }
      if (l.alternate !== a) throw Error(u(190));
    }
    if (l.tag !== 3) throw Error(u(188));
    return l.stateNode.current === l ? e : t;
  }
  function x(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = x(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var S = Object.assign,
    B = Symbol.for("react.element"),
    L = Symbol.for("react.transitional.element"),
    q = Symbol.for("react.portal"),
    z = Symbol.for("react.fragment"),
    J = Symbol.for("react.strict_mode"),
    Q = Symbol.for("react.profiler"),
    H = Symbol.for("react.provider"),
    ae = Symbol.for("react.consumer"),
    Z = Symbol.for("react.context"),
    P = Symbol.for("react.forward_ref"),
    F = Symbol.for("react.suspense"),
    Ne = Symbol.for("react.suspense_list"),
    je = Symbol.for("react.memo"),
    Se = Symbol.for("react.lazy"),
    we = Symbol.for("react.activity"),
    Qe = Symbol.for("react.memo_cache_sentinel"),
    Xe = Symbol.iterator;
  function He(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Xe && e[Xe]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var qt = Symbol.for("react.client.reference");
  function vt(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === qt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case z:
        return "Fragment";
      case Q:
        return "Profiler";
      case J:
        return "StrictMode";
      case F:
        return "Suspense";
      case Ne:
        return "SuspenseList";
      case we:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case q:
          return "Portal";
        case Z:
          return (e.displayName || "Context") + ".Provider";
        case ae:
          return (e._context.displayName || "Context") + ".Consumer";
        case P:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case je:
          return (
            (t = e.displayName || null), t !== null ? t : vt(e.type) || "Memo"
          );
        case Se:
          (t = e._payload), (e = e._init);
          try {
            return vt(e(t));
          } catch {}
      }
    return null;
  }
  var nt = Array.isArray,
    k = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    $ = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ne = { pending: !1, data: null, method: null, action: null },
    Ae = [],
    b = -1;
  function U(e) {
    return { current: e };
  }
  function W(e) {
    0 > b || ((e.current = Ae[b]), (Ae[b] = null), b--);
  }
  function K(e, t) {
    b++, (Ae[b] = e.current), (e.current = t);
  }
  var re = U(null),
    Ee = U(null),
    fe = U(null),
    St = U(null);
  function qe(e, t) {
    switch ((K(fe, t), K(Ee, e), K(re, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Yf(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = Yf(t)), (e = qf(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    W(re), K(re, e);
  }
  function xl() {
    W(re), W(Ee), W(fe);
  }
  function Yl(e) {
    e.memoizedState !== null && K(St, e);
    var t = re.current,
      l = qf(t, e.type);
    t !== l && (K(Ee, e), K(re, l));
  }
  function Xa(e) {
    Ee.current === e && (W(re), W(Ee)),
      St.current === e && (W(St), (Oi._currentValue = ne));
  }
  var On = Object.prototype.hasOwnProperty,
    zn = r.unstable_scheduleCallback,
    Ln = r.unstable_cancelCallback,
    br = r.unstable_shouldYield,
    vr = r.unstable_requestPaint,
    Gt = r.unstable_now,
    yr = r.unstable_getCurrentPriorityLevel,
    Wi = r.unstable_ImmediatePriority,
    Bn = r.unstable_UserBlockingPriority,
    Za = r.unstable_NormalPriority,
    jr = r.unstable_LowPriority,
    Un = r.unstable_IdlePriority,
    pl = r.log,
    Fi = r.unstable_setDisableYieldValue,
    Qt = null,
    dt = null;
  function Pt(e) {
    if (
      (typeof pl == "function" && Fi(e),
      dt && typeof dt.setStrictMode == "function")
    )
      try {
        dt.setStrictMode(Qt, e);
      } catch {}
  }
  var wt = Math.clz32 ? Math.clz32 : wr,
    Nr = Math.log,
    Sr = Math.LN2;
  function wr(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Nr(e) / Sr) | 0)) | 0;
  }
  var Ka = 256,
    ba = 4194304;
  function bl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ja(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0,
      s = e.suspendedLanes,
      c = e.pingedLanes;
    e = e.warmLanes;
    var o = a & 134217727;
    return (
      o !== 0
        ? ((a = o & ~s),
          a !== 0
            ? (i = bl(a))
            : ((c &= o),
              c !== 0
                ? (i = bl(c))
                : l || ((l = o & ~e), l !== 0 && (i = bl(l)))))
        : ((o = a & ~s),
          o !== 0
            ? (i = bl(o))
            : c !== 0
              ? (i = bl(c))
              : l || ((l = a & ~e), l !== 0 && (i = bl(l)))),
      i === 0
        ? 0
        : t !== 0 &&
            t !== i &&
            (t & s) === 0 &&
            ((s = i & -i),
            (l = t & -t),
            s >= l || (s === 32 && (l & 4194048) !== 0))
          ? t
          : i
    );
  }
  function va(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Hn(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Yn() {
    var e = Ka;
    return (Ka <<= 1), (Ka & 4194048) === 0 && (Ka = 256), e;
  }
  function qn() {
    var e = ba;
    return (ba <<= 1), (ba & 62914560) === 0 && (ba = 4194304), e;
  }
  function Gn(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function ql(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Gl(e, t, l, a, i, s) {
    var c = e.pendingLanes;
    (e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0);
    var o = e.entanglements,
      g = e.expirationTimes,
      E = e.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var D = 31 - wt(l),
        O = 1 << D;
      (o[D] = 0), (g[D] = -1);
      var C = E[D];
      if (C !== null)
        for (E[D] = null, D = 0; D < C.length; D++) {
          var R = C[D];
          R !== null && (R.lane &= -536870913);
        }
      l &= ~O;
    }
    a !== 0 && p(e, a, 0),
      s !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(c & ~t));
  }
  function p(e, t, l) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var a = 31 - wt(t);
    (e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 4194090));
  }
  function _(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - wt(l),
        i = 1 << a;
      (i & t) | (e[a] & t) && (e[a] |= t), (l &= ~i);
    }
  }
  function V(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function oe(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ze() {
    var e = $.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : sh(e.type));
  }
  function $e(e, t) {
    var l = $.p;
    try {
      return ($.p = e), t();
    } finally {
      $.p = l;
    }
  }
  var I = Math.random().toString(36).slice(2),
    G = "__reactFiber$" + I,
    le = "__reactProps$" + I,
    Ve = "__reactContainer$" + I,
    Ke = "__reactEvents$" + I,
    ya = "__reactListeners$" + I,
    Qn = "__reactHandles$" + I,
    $a = "__reactResources$" + I,
    ja = "__reactMarker$" + I;
  function Na(e) {
    delete e[G], delete e[le], delete e[Ke], delete e[ya], delete e[Qn];
  }
  function Ql(e) {
    var t = e[G];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[Ve] || l[G])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = Xf(e); e !== null; ) {
            if ((l = e[G])) return l;
            e = Xf(e);
          }
        return t;
      }
      (e = l), (l = e.parentNode);
    }
    return null;
  }
  function Vl(e) {
    if ((e = e[G] || e[Ve])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Sa(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function vl(e) {
    var t = e[$a];
    return (
      t ||
        (t = e[$a] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function We(e) {
    e[ja] = !0;
  }
  var Ii = new Set(),
    Pi = {};
  function yl(e, t) {
    At(e, t), At(e + "Capture", t);
  }
  function At(e, t) {
    for (Pi[e] = t, e = 0; e < t.length; e++) Ii.add(t[e]);
  }
  var es = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Vn = {},
    ts = {};
  function Ar(e) {
    return On.call(ts, e)
      ? !0
      : On.call(Vn, e)
        ? !1
        : es.test(e)
          ? (ts[e] = !0)
          : ((Vn[e] = !0), !1);
  }
  function Wa(e, t, l) {
    if (Ar(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function jl(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function el(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  var Y, ie;
  function ge(e) {
    if (Y === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        (Y = (t && t[1]) || ""),
          (ie =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      Y +
      e +
      ie
    );
  }
  var _e = !1;
  function Fe(e, t) {
    if (!e || _e) return "";
    _e = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var O = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(O.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(O, []);
                } catch (R) {
                  var C = R;
                }
                Reflect.construct(e, [], O);
              } else {
                try {
                  O.call();
                } catch (R) {
                  C = R;
                }
                e.call(O.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (R) {
                C = R;
              }
              (O = e()) &&
                typeof O.catch == "function" &&
                O.catch(function () {});
            }
          } catch (R) {
            if (R && C && typeof R.stack == "string") return [R.stack, C.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      i &&
        i.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var s = a.DetermineComponentFrameRoot(),
        c = s[0],
        o = s[1];
      if (c && o) {
        var g = c.split(`
`),
          E = o.split(`
`);
        for (
          i = a = 0;
          a < g.length && !g[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; i < E.length && !E[i].includes("DetermineComponentFrameRoot"); )
          i++;
        if (a === g.length || i === E.length)
          for (
            a = g.length - 1, i = E.length - 1;
            1 <= a && 0 <= i && g[a] !== E[i];

          )
            i--;
        for (; 1 <= a && 0 <= i; a--, i--)
          if (g[a] !== E[i]) {
            if (a !== 1 || i !== 1)
              do
                if ((a--, i--, 0 > i || g[a] !== E[i])) {
                  var D =
                    `
` + g[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      D.includes("<anonymous>") &&
                      (D = D.replace("<anonymous>", e.displayName)),
                    D
                  );
                }
              while (1 <= a && 0 <= i);
            break;
          }
      }
    } finally {
      (_e = !1), (Error.prepareStackTrace = l);
    }
    return (l = e ? e.displayName || e.name : "") ? ge(l) : "";
  }
  function _t(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ge(e.type);
      case 16:
        return ge("Lazy");
      case 13:
        return ge("Suspense");
      case 19:
        return ge("SuspenseList");
      case 0:
      case 15:
        return Fe(e.type, !1);
      case 11:
        return Fe(e.type.render, !1);
      case 1:
        return Fe(e.type, !0);
      case 31:
        return ge("Activity");
      default:
        return "";
    }
  }
  function tl(e) {
    try {
      var t = "";
      do (t += _t(e)), (e = e.return);
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function gt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function yt(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Vt(e) {
    var t = yt(e) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var i = l.get,
        s = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (c) {
            (a = "" + c), s.call(this, c);
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function wa(e) {
    e._valueTracker || (e._valueTracker = Vt(e));
  }
  function Xn(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return (
      e && (a = yt(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function Aa(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Er = /[\n"\\]/g;
  function Ct(e) {
    return e.replace(Er, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Zn(e, t, l, a, i, s, c, o) {
    (e.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (e.type = c)
        : e.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + gt(t))
          : e.value !== "" + gt(t) && (e.value = "" + gt(t))
        : (c !== "submit" && c !== "reset") || e.removeAttribute("value"),
      t != null
        ? Xl(e, c, gt(t))
        : l != null
          ? Xl(e, c, gt(l))
          : a != null && e.removeAttribute("value"),
      i == null && s != null && (e.defaultChecked = !!s),
      i != null &&
        (e.checked = i && typeof i != "function" && typeof i != "symbol"),
      o != null &&
      typeof o != "function" &&
      typeof o != "symbol" &&
      typeof o != "boolean"
        ? (e.name = "" + gt(o))
        : e.removeAttribute("name");
  }
  function ls(e, t, l, a, i, s, c, o) {
    if (
      (s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        typeof s != "boolean" &&
        (e.type = s),
      t != null || l != null)
    ) {
      if (!((s !== "submit" && s !== "reset") || t != null)) return;
      (l = l != null ? "" + gt(l) : ""),
        (t = t != null ? "" + gt(t) : l),
        o || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (a = a ?? i),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = o ? e.checked : !!a),
      (e.defaultChecked = !!a),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (e.name = c);
  }
  function Xl(e, t, l) {
    (t === "number" && Aa(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function Nl(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < l.length; i++) t["$" + l[i]] = !0;
      for (l = 0; l < e.length; l++)
        (i = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== i && (e[l].selected = i),
          i && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + gt(l), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === l) {
          (e[i].selected = !0), a && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Mt(e, t, l) {
    if (
      t != null &&
      ((t = "" + gt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + gt(l) : "";
  }
  function as(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(u(92));
        if (nt(a)) {
          if (1 < a.length) throw Error(u(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (t = l);
    }
    (l = gt(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== "" && a !== null && (e.value = a);
  }
  function rl(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var me = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Kn(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, l)
        : typeof l != "number" || l === 0 || me.has(t)
          ? t === "float"
            ? (e.cssFloat = l)
            : (e[t] = ("" + l).trim())
          : (e[t] = l + "px");
  }
  function it(e, t, l) {
    if (t != null && typeof t != "object") throw Error(u(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""));
      for (var i in t)
        (a = t[i]), t.hasOwnProperty(i) && l[i] !== a && Kn(e, i, a);
    } else for (var s in t) t.hasOwnProperty(s) && Kn(e, s, t[s]);
  }
  function Me(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Fa = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Sl =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Zl(e) {
    return Sl.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Ea = null;
  function X(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ee = null,
    he = null;
  function Te(e) {
    var t = Vl(e);
    if (t && (e = t.stateNode)) {
      var l = e[le] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Zn(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + Ct("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var i = a[le] || null;
                if (!i) throw Error(u(90));
                Zn(
                  a,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name,
                );
              }
            }
            for (t = 0; t < l.length; t++)
              (a = l[t]), a.form === e.form && Xn(a);
          }
          break e;
        case "textarea":
          Mt(e, l.value, l.defaultValue);
          break e;
        case "select":
          (t = l.value), t != null && Nl(e, !!l.multiple, t, !1);
      }
    }
  }
  var st = !1;
  function Xt(e, t, l) {
    if (st) return e(t, l);
    st = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((st = !1),
        (ee !== null || he !== null) &&
          (Gs(), ee && ((t = ee), (e = he), (he = ee = null), Te(t), e)))
      )
        for (t = 0; t < e.length; t++) Te(e[t]);
    }
  }
  function Ca(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[le] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(u(231, t, typeof l));
    return l;
  }
  var ll = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Cr = !1;
  if (ll)
    try {
      var Jn = {};
      Object.defineProperty(Jn, "passive", {
        get: function () {
          Cr = !0;
        },
      }),
        window.addEventListener("test", Jn, Jn),
        window.removeEventListener("test", Jn, Jn);
    } catch {
      Cr = !1;
    }
  var Kl = null,
    Rr = null,
    ns = null;
  function Gu() {
    if (ns) return ns;
    var e,
      t = Rr,
      l = t.length,
      a,
      i = "value" in Kl ? Kl.value : Kl.textContent,
      s = i.length;
    for (e = 0; e < l && t[e] === i[e]; e++);
    var c = l - e;
    for (a = 1; a <= c && t[l - a] === i[s - a]; a++);
    return (ns = i.slice(e, 1 < a ? 1 - a : void 0));
  }
  function is(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ss() {
    return !0;
  }
  function Qu() {
    return !1;
  }
  function Rt(e) {
    function t(l, a, i, s, c) {
      (this._reactName = l),
        (this._targetInst = i),
        (this.type = a),
        (this.nativeEvent = s),
        (this.target = c),
        (this.currentTarget = null);
      for (var o in e)
        e.hasOwnProperty(o) && ((l = e[o]), (this[o] = l ? l(s) : s[o]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? ss
          : Qu),
        (this.isPropagationStopped = Qu),
        this
      );
    }
    return (
      S(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = ss));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = ss));
        },
        persist: function () {},
        isPersistent: ss,
      }),
      t
    );
  }
  var Ra = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    rs = Rt(Ra),
    $n = S({}, Ra, { view: 0, detail: 0 }),
    tm = Rt($n),
    Tr,
    kr,
    Wn,
    cs = S({}, $n, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: _r,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Wn &&
              (Wn && e.type === "mousemove"
                ? ((Tr = e.screenX - Wn.screenX), (kr = e.screenY - Wn.screenY))
                : (kr = Tr = 0),
              (Wn = e)),
            Tr);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : kr;
      },
    }),
    Vu = Rt(cs),
    lm = S({}, cs, { dataTransfer: 0 }),
    am = Rt(lm),
    nm = S({}, $n, { relatedTarget: 0 }),
    Dr = Rt(nm),
    im = S({}, Ra, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sm = Rt(im),
    rm = S({}, Ra, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    cm = Rt(rm),
    um = S({}, Ra, { data: 0 }),
    Xu = Rt(um),
    om = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    dm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    fm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function hm(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = fm[e])
        ? !!t[e]
        : !1;
  }
  function _r() {
    return hm;
  }
  var mm = S({}, $n, {
      key: function (e) {
        if (e.key) {
          var t = om[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = is(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? dm[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: _r,
      charCode: function (e) {
        return e.type === "keypress" ? is(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? is(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    gm = Rt(mm),
    xm = S({}, cs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Zu = Rt(xm),
    pm = S({}, $n, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: _r,
    }),
    bm = Rt(pm),
    vm = S({}, Ra, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ym = Rt(vm),
    jm = S({}, cs, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Nm = Rt(jm),
    Sm = S({}, Ra, { newState: 0, oldState: 0 }),
    wm = Rt(Sm),
    Am = [9, 13, 27, 32],
    Mr = ll && "CompositionEvent" in window,
    Fn = null;
  ll && "documentMode" in document && (Fn = document.documentMode);
  var Em = ll && "TextEvent" in window && !Fn,
    Ku = ll && (!Mr || (Fn && 8 < Fn && 11 >= Fn)),
    Ju = " ",
    $u = !1;
  function Wu(e, t) {
    switch (e) {
      case "keyup":
        return Am.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Fu(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ia = !1;
  function Cm(e, t) {
    switch (e) {
      case "compositionend":
        return Fu(t);
      case "keypress":
        return t.which !== 32 ? null : (($u = !0), Ju);
      case "textInput":
        return (e = t.data), e === Ju && $u ? null : e;
      default:
        return null;
    }
  }
  function Rm(e, t) {
    if (Ia)
      return e === "compositionend" || (!Mr && Wu(e, t))
        ? ((e = Gu()), (ns = Rr = Kl = null), (Ia = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ku && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Tm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Tm[e.type] : t === "textarea";
  }
  function Pu(e, t, l, a) {
    ee ? (he ? he.push(a) : (he = [a])) : (ee = a),
      (t = Js(t, "onChange")),
      0 < t.length &&
        ((l = new rs("onChange", "change", null, l, a)),
        e.push({ event: l, listeners: t }));
  }
  var In = null,
    Pn = null;
  function km(e) {
    zf(e, 0);
  }
  function us(e) {
    var t = Sa(e);
    if (Xn(t)) return e;
  }
  function eo(e, t) {
    if (e === "change") return t;
  }
  var to = !1;
  if (ll) {
    var Or;
    if (ll) {
      var zr = "oninput" in document;
      if (!zr) {
        var lo = document.createElement("div");
        lo.setAttribute("oninput", "return;"),
          (zr = typeof lo.oninput == "function");
      }
      Or = zr;
    } else Or = !1;
    to = Or && (!document.documentMode || 9 < document.documentMode);
  }
  function ao() {
    In && (In.detachEvent("onpropertychange", no), (Pn = In = null));
  }
  function no(e) {
    if (e.propertyName === "value" && us(Pn)) {
      var t = [];
      Pu(t, Pn, e, X(e)), Xt(km, t);
    }
  }
  function Dm(e, t, l) {
    e === "focusin"
      ? (ao(), (In = t), (Pn = l), In.attachEvent("onpropertychange", no))
      : e === "focusout" && ao();
  }
  function _m(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return us(Pn);
  }
  function Mm(e, t) {
    if (e === "click") return us(t);
  }
  function Om(e, t) {
    if (e === "input" || e === "change") return us(t);
  }
  function zm(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ot = typeof Object.is == "function" ? Object.is : zm;
  function ei(e, t) {
    if (Ot(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var i = l[a];
      if (!On.call(t, i) || !Ot(e[i], t[i])) return !1;
    }
    return !0;
  }
  function io(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function so(e, t) {
    var l = io(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = io(l);
    }
  }
  function ro(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ro(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function co(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Aa(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Aa(e.document);
    }
    return t;
  }
  function Lr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var Lm = ll && "documentMode" in document && 11 >= document.documentMode,
    Pa = null,
    Br = null,
    ti = null,
    Ur = !1;
  function uo(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Ur ||
      Pa == null ||
      Pa !== Aa(a) ||
      ((a = Pa),
      "selectionStart" in a && Lr(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (ti && ei(ti, a)) ||
        ((ti = a),
        (a = Js(Br, "onSelect")),
        0 < a.length &&
          ((t = new rs("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = Pa))));
  }
  function Ta(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var en = {
      animationend: Ta("Animation", "AnimationEnd"),
      animationiteration: Ta("Animation", "AnimationIteration"),
      animationstart: Ta("Animation", "AnimationStart"),
      transitionrun: Ta("Transition", "TransitionRun"),
      transitionstart: Ta("Transition", "TransitionStart"),
      transitioncancel: Ta("Transition", "TransitionCancel"),
      transitionend: Ta("Transition", "TransitionEnd"),
    },
    Hr = {},
    oo = {};
  ll &&
    ((oo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete en.animationend.animation,
      delete en.animationiteration.animation,
      delete en.animationstart.animation),
    "TransitionEvent" in window || delete en.transitionend.transition);
  function ka(e) {
    if (Hr[e]) return Hr[e];
    if (!en[e]) return e;
    var t = en[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in oo) return (Hr[e] = t[l]);
    return e;
  }
  var fo = ka("animationend"),
    ho = ka("animationiteration"),
    mo = ka("animationstart"),
    Bm = ka("transitionrun"),
    Um = ka("transitionstart"),
    Hm = ka("transitioncancel"),
    go = ka("transitionend"),
    xo = new Map(),
    Yr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Yr.push("scrollEnd");
  function al(e, t) {
    xo.set(e, t), yl(t, [e]);
  }
  var po = new WeakMap();
  function Zt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = po.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: tl(t) }), po.set(e, t), t);
    }
    return { value: e, source: t, stack: tl(t) };
  }
  var Kt = [],
    tn = 0,
    qr = 0;
  function os() {
    for (var e = tn, t = (qr = tn = 0); t < e; ) {
      var l = Kt[t];
      Kt[t++] = null;
      var a = Kt[t];
      Kt[t++] = null;
      var i = Kt[t];
      Kt[t++] = null;
      var s = Kt[t];
      if (((Kt[t++] = null), a !== null && i !== null)) {
        var c = a.pending;
        c === null ? (i.next = i) : ((i.next = c.next), (c.next = i)),
          (a.pending = i);
      }
      s !== 0 && bo(l, i, s);
    }
  }
  function ds(e, t, l, a) {
    (Kt[tn++] = e),
      (Kt[tn++] = t),
      (Kt[tn++] = l),
      (Kt[tn++] = a),
      (qr |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a);
  }
  function Gr(e, t, l, a) {
    return ds(e, t, l, a), fs(e);
  }
  function ln(e, t) {
    return ds(e, null, null, t), fs(e);
  }
  function bo(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var i = !1, s = e.return; s !== null; )
      (s.childLanes |= l),
        (a = s.alternate),
        a !== null && (a.childLanes |= l),
        s.tag === 22 &&
          ((e = s.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = s),
        (s = s.return);
    return e.tag === 3
      ? ((s = e.stateNode),
        i &&
          t !== null &&
          ((i = 31 - wt(l)),
          (e = s.hiddenUpdates),
          (a = e[i]),
          a === null ? (e[i] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        s)
      : null;
  }
  function fs(e) {
    if (50 < Ei) throw ((Ei = 0), (Jc = null), Error(u(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var an = {};
  function Ym(e, t, l, a) {
    (this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function zt(e, t, l, a) {
    return new Ym(e, t, l, a);
  }
  function Qr(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function wl(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = zt(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function vo(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function hs(e, t, l, a, i, s) {
    var c = 0;
    if (((a = e), typeof e == "function")) Qr(e) && (c = 1);
    else if (typeof e == "string")
      c = G1(e, l, re.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case we:
          return (e = zt(31, l, t, i)), (e.elementType = we), (e.lanes = s), e;
        case z:
          return Da(l.children, i, s, t);
        case J:
          (c = 8), (i |= 24);
          break;
        case Q:
          return (
            (e = zt(12, l, t, i | 2)), (e.elementType = Q), (e.lanes = s), e
          );
        case F:
          return (e = zt(13, l, t, i)), (e.elementType = F), (e.lanes = s), e;
        case Ne:
          return (e = zt(19, l, t, i)), (e.elementType = Ne), (e.lanes = s), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case H:
              case Z:
                c = 10;
                break e;
              case ae:
                c = 9;
                break e;
              case P:
                c = 11;
                break e;
              case je:
                c = 14;
                break e;
              case Se:
                (c = 16), (a = null);
                break e;
            }
          (c = 29),
            (l = Error(u(130, e === null ? "null" : typeof e, ""))),
            (a = null);
      }
    return (
      (t = zt(c, l, t, i)), (t.elementType = e), (t.type = a), (t.lanes = s), t
    );
  }
  function Da(e, t, l, a) {
    return (e = zt(7, e, a, t)), (e.lanes = l), e;
  }
  function Vr(e, t, l) {
    return (e = zt(6, e, null, t)), (e.lanes = l), e;
  }
  function Xr(e, t, l) {
    return (
      (t = zt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var nn = [],
    sn = 0,
    ms = null,
    gs = 0,
    Jt = [],
    $t = 0,
    _a = null,
    Al = 1,
    El = "";
  function Ma(e, t) {
    (nn[sn++] = gs), (nn[sn++] = ms), (ms = e), (gs = t);
  }
  function yo(e, t, l) {
    (Jt[$t++] = Al), (Jt[$t++] = El), (Jt[$t++] = _a), (_a = e);
    var a = Al;
    e = El;
    var i = 32 - wt(a) - 1;
    (a &= ~(1 << i)), (l += 1);
    var s = 32 - wt(t) + i;
    if (30 < s) {
      var c = i - (i % 5);
      (s = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (i -= c),
        (Al = (1 << (32 - wt(t) + i)) | (l << i) | a),
        (El = s + e);
    } else (Al = (1 << s) | (l << i) | a), (El = e);
  }
  function Zr(e) {
    e.return !== null && (Ma(e, 1), yo(e, 1, 0));
  }
  function Kr(e) {
    for (; e === ms; )
      (ms = nn[--sn]), (nn[sn] = null), (gs = nn[--sn]), (nn[sn] = null);
    for (; e === _a; )
      (_a = Jt[--$t]),
        (Jt[$t] = null),
        (El = Jt[--$t]),
        (Jt[$t] = null),
        (Al = Jt[--$t]),
        (Jt[$t] = null);
  }
  var Et = null,
    et = null,
    De = !1,
    Oa = null,
    cl = !1,
    Jr = Error(u(519));
  function za(e) {
    var t = Error(u(418, ""));
    throw (ni(Zt(t, e)), Jr);
  }
  function jo(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[G] = e), (t[le] = a), l)) {
      case "dialog":
        ye("cancel", t), ye("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ye("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ri.length; l++) ye(Ri[l], t);
        break;
      case "source":
        ye("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ye("error", t), ye("load", t);
        break;
      case "details":
        ye("toggle", t);
        break;
      case "input":
        ye("invalid", t),
          ls(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ),
          wa(t);
        break;
      case "select":
        ye("invalid", t);
        break;
      case "textarea":
        ye("invalid", t), as(t, a.value, a.defaultValue, a.children), wa(t);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      Hf(t.textContent, l)
        ? (a.popover != null && (ye("beforetoggle", t), ye("toggle", t)),
          a.onScroll != null && ye("scroll", t),
          a.onScrollEnd != null && ye("scrollend", t),
          a.onClick != null && (t.onclick = $s),
          (t = !0))
        : (t = !1),
      t || za(e);
  }
  function No(e) {
    for (Et = e.return; Et; )
      switch (Et.tag) {
        case 5:
        case 13:
          cl = !1;
          return;
        case 27:
        case 3:
          cl = !0;
          return;
        default:
          Et = Et.return;
      }
  }
  function li(e) {
    if (e !== Et) return !1;
    if (!De) return No(e), (De = !0), !1;
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || ou(e.type, e.memoizedProps))),
        (l = !l)),
      l && et && za(e),
      No(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((l = e.data), l === "/$")) {
              if (t === 0) {
                et = il(e.nextSibling);
                break e;
              }
              t--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || t++;
          e = e.nextSibling;
        }
        et = null;
      }
    } else
      t === 27
        ? ((t = et), ua(e.type) ? ((e = mu), (mu = null), (et = e)) : (et = t))
        : (et = Et ? il(e.stateNode.nextSibling) : null);
    return !0;
  }
  function ai() {
    (et = Et = null), (De = !1);
  }
  function So() {
    var e = Oa;
    return (
      e !== null &&
        (Dt === null ? (Dt = e) : Dt.push.apply(Dt, e), (Oa = null)),
      e
    );
  }
  function ni(e) {
    Oa === null ? (Oa = [e]) : Oa.push(e);
  }
  var $r = U(null),
    La = null,
    Cl = null;
  function Jl(e, t, l) {
    K($r, t._currentValue), (t._currentValue = l);
  }
  function Rl(e) {
    (e._currentValue = $r.current), W($r);
  }
  function Wr(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function Fr(e, t, l, a) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var s = i.dependencies;
      if (s !== null) {
        var c = i.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var o = s;
          s = i;
          for (var g = 0; g < t.length; g++)
            if (o.context === t[g]) {
              (s.lanes |= l),
                (o = s.alternate),
                o !== null && (o.lanes |= l),
                Wr(s.return, l, e),
                a || (c = null);
              break e;
            }
          s = o.next;
        }
      } else if (i.tag === 18) {
        if (((c = i.return), c === null)) throw Error(u(341));
        (c.lanes |= l),
          (s = c.alternate),
          s !== null && (s.lanes |= l),
          Wr(c, l, e),
          (c = null);
      } else c = i.child;
      if (c !== null) c.return = i;
      else
        for (c = i; c !== null; ) {
          if (c === e) {
            c = null;
            break;
          }
          if (((i = c.sibling), i !== null)) {
            (i.return = c.return), (c = i);
            break;
          }
          c = c.return;
        }
      i = c;
    }
  }
  function ii(e, t, l, a) {
    e = null;
    for (var i = t, s = !1; i !== null; ) {
      if (!s) {
        if ((i.flags & 524288) !== 0) s = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var c = i.alternate;
        if (c === null) throw Error(u(387));
        if (((c = c.memoizedProps), c !== null)) {
          var o = i.type;
          Ot(i.pendingProps.value, c.value) ||
            (e !== null ? e.push(o) : (e = [o]));
        }
      } else if (i === St.current) {
        if (((c = i.alternate), c === null)) throw Error(u(387));
        c.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(Oi) : (e = [Oi]));
      }
      i = i.return;
    }
    e !== null && Fr(t, e, l, a), (t.flags |= 262144);
  }
  function xs(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ot(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ba(e) {
    (La = e),
      (Cl = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function jt(e) {
    return wo(La, e);
  }
  function ps(e, t) {
    return La === null && Ba(e), wo(e, t);
  }
  function wo(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Cl === null)) {
      if (e === null) throw Error(u(308));
      (Cl = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Cl = Cl.next = t;
    return l;
  }
  var qm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                });
            };
          },
    Gm = r.unstable_scheduleCallback,
    Qm = r.unstable_NormalPriority,
    ut = {
      $$typeof: Z,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ir() {
    return { controller: new qm(), data: new Map(), refCount: 0 };
  }
  function si(e) {
    e.refCount--,
      e.refCount === 0 &&
        Gm(Qm, function () {
          e.controller.abort();
        });
  }
  var ri = null,
    Pr = 0,
    rn = 0,
    cn = null;
  function Vm(e, t) {
    if (ri === null) {
      var l = (ri = []);
      (Pr = 0),
        (rn = tu()),
        (cn = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return Pr++, t.then(Ao, Ao), t;
  }
  function Ao() {
    if (--Pr === 0 && ri !== null) {
      cn !== null && (cn.status = "fulfilled");
      var e = ri;
      (ri = null), (rn = 0), (cn = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Xm(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (i) {
          l.push(i);
        },
      };
    return (
      e.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var i = 0; i < l.length; i++) (0, l[i])(t);
        },
        function (i) {
          for (a.status = "rejected", a.reason = i, i = 0; i < l.length; i++)
            (0, l[i])(void 0);
        },
      ),
      a
    );
  }
  var Eo = k.S;
  k.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      Vm(e, t),
      Eo !== null && Eo(e, t);
  };
  var Ua = U(null);
  function ec() {
    var e = Ua.current;
    return e !== null ? e : Ge.pooledCache;
  }
  function bs(e, t) {
    t === null ? K(Ua, Ua.current) : K(Ua, t.pool);
  }
  function Co() {
    var e = ec();
    return e === null ? null : { parent: ut._currentValue, pool: e };
  }
  var ci = Error(u(460)),
    Ro = Error(u(474)),
    vs = Error(u(542)),
    tc = { then: function () {} };
  function To(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function ys() {}
  function ko(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(ys, ys), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), _o(e), e);
      default:
        if (typeof t.status == "string") t.then(ys, ys);
        else {
          if (((e = Ge), e !== null && 100 < e.shellSuspendCounter))
            throw Error(u(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var i = t;
                  (i.status = "fulfilled"), (i.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var i = t;
                  (i.status = "rejected"), (i.reason = a);
                }
              },
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), _o(e), e);
        }
        throw ((ui = t), ci);
    }
  }
  var ui = null;
  function Do() {
    if (ui === null) throw Error(u(459));
    var e = ui;
    return (ui = null), e;
  }
  function _o(e) {
    if (e === ci || e === vs) throw Error(u(483));
  }
  var $l = !1;
  function lc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ac(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Wl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Fl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Oe & 2) !== 0)) {
      var i = a.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (a.pending = t),
        (t = fs(e)),
        bo(e, null, l),
        t
      );
    }
    return ds(e, a, t, l), fs(e);
  }
  function oi(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), _(e, l);
    }
  }
  function nc(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var i = null,
        s = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          s === null ? (i = s = c) : (s = s.next = c), (l = l.next);
        } while (l !== null);
        s === null ? (i = s = t) : (s = s.next = t);
      } else i = s = t;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: s,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l);
      return;
    }
    (e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t);
  }
  var ic = !1;
  function di() {
    if (ic) {
      var e = cn;
      if (e !== null) throw e;
    }
  }
  function fi(e, t, l, a) {
    ic = !1;
    var i = e.updateQueue;
    $l = !1;
    var s = i.firstBaseUpdate,
      c = i.lastBaseUpdate,
      o = i.shared.pending;
    if (o !== null) {
      i.shared.pending = null;
      var g = o,
        E = g.next;
      (g.next = null), c === null ? (s = E) : (c.next = E), (c = g);
      var D = e.alternate;
      D !== null &&
        ((D = D.updateQueue),
        (o = D.lastBaseUpdate),
        o !== c &&
          (o === null ? (D.firstBaseUpdate = E) : (o.next = E),
          (D.lastBaseUpdate = g)));
    }
    if (s !== null) {
      var O = i.baseState;
      (c = 0), (D = E = g = null), (o = s);
      do {
        var C = o.lane & -536870913,
          R = C !== o.lane;
        if (R ? (Ce & C) === C : (a & C) === C) {
          C !== 0 && C === rn && (ic = !0),
            D !== null &&
              (D = D.next =
                {
                  lane: 0,
                  tag: o.tag,
                  payload: o.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var de = e,
              ce = o;
            C = t;
            var Ue = l;
            switch (ce.tag) {
              case 1:
                if (((de = ce.payload), typeof de == "function")) {
                  O = de.call(Ue, O, C);
                  break e;
                }
                O = de;
                break e;
              case 3:
                de.flags = (de.flags & -65537) | 128;
              case 0:
                if (
                  ((de = ce.payload),
                  (C = typeof de == "function" ? de.call(Ue, O, C) : de),
                  C == null)
                )
                  break e;
                O = S({}, O, C);
                break e;
              case 2:
                $l = !0;
            }
          }
          (C = o.callback),
            C !== null &&
              ((e.flags |= 64),
              R && (e.flags |= 8192),
              (R = i.callbacks),
              R === null ? (i.callbacks = [C]) : R.push(C));
        } else
          (R = {
            lane: C,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            D === null ? ((E = D = R), (g = O)) : (D = D.next = R),
            (c |= C);
        if (((o = o.next), o === null)) {
          if (((o = i.shared.pending), o === null)) break;
          (R = o),
            (o = R.next),
            (R.next = null),
            (i.lastBaseUpdate = R),
            (i.shared.pending = null);
        }
      } while (!0);
      D === null && (g = O),
        (i.baseState = g),
        (i.firstBaseUpdate = E),
        (i.lastBaseUpdate = D),
        s === null && (i.shared.lanes = 0),
        (ia |= c),
        (e.lanes = c),
        (e.memoizedState = O);
    }
  }
  function Mo(e, t) {
    if (typeof e != "function") throw Error(u(191, e));
    e.call(t);
  }
  function Oo(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) Mo(l[e], t);
  }
  var un = U(null),
    js = U(0);
  function zo(e, t) {
    (e = zl), K(js, e), K(un, t), (zl = e | t.baseLanes);
  }
  function sc() {
    K(js, zl), K(un, un.current);
  }
  function rc() {
    (zl = js.current), W(un), W(js);
  }
  var Il = 0,
    pe = null,
    Le = null,
    rt = null,
    Ns = !1,
    on = !1,
    Ha = !1,
    Ss = 0,
    hi = 0,
    dn = null,
    Zm = 0;
  function lt() {
    throw Error(u(321));
  }
  function cc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Ot(e[l], t[l])) return !1;
    return !0;
  }
  function uc(e, t, l, a, i, s) {
    return (
      (Il = s),
      (pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (k.H = e === null || e.memoizedState === null ? bd : vd),
      (Ha = !1),
      (s = l(a, i)),
      (Ha = !1),
      on && (s = Bo(t, l, a, i)),
      Lo(e),
      s
    );
  }
  function Lo(e) {
    k.H = Ts;
    var t = Le !== null && Le.next !== null;
    if (((Il = 0), (rt = Le = pe = null), (Ns = !1), (hi = 0), (dn = null), t))
      throw Error(u(300));
    e === null ||
      ft ||
      ((e = e.dependencies), e !== null && xs(e) && (ft = !0));
  }
  function Bo(e, t, l, a) {
    pe = e;
    var i = 0;
    do {
      if ((on && (dn = null), (hi = 0), (on = !1), 25 <= i))
        throw Error(u(301));
      if (((i += 1), (rt = Le = null), e.updateQueue != null)) {
        var s = e.updateQueue;
        (s.lastEffect = null),
          (s.events = null),
          (s.stores = null),
          s.memoCache != null && (s.memoCache.index = 0);
      }
      (k.H = Pm), (s = t(l, a));
    } while (on);
    return s;
  }
  function Km() {
    var e = k.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? mi(t) : t),
      (e = e.useState()[0]),
      (Le !== null ? Le.memoizedState : null) !== e && (pe.flags |= 1024),
      t
    );
  }
  function oc() {
    var e = Ss !== 0;
    return (Ss = 0), e;
  }
  function dc(e, t, l) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l);
  }
  function fc(e) {
    if (Ns) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      Ns = !1;
    }
    (Il = 0), (rt = Le = pe = null), (on = !1), (hi = Ss = 0), (dn = null);
  }
  function Tt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return rt === null ? (pe.memoizedState = rt = e) : (rt = rt.next = e), rt;
  }
  function ct() {
    if (Le === null) {
      var e = pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = rt === null ? pe.memoizedState : rt.next;
    if (t !== null) (rt = t), (Le = e);
    else {
      if (e === null)
        throw pe.alternate === null ? Error(u(467)) : Error(u(310));
      (Le = e),
        (e = {
          memoizedState: Le.memoizedState,
          baseState: Le.baseState,
          baseQueue: Le.baseQueue,
          queue: Le.queue,
          next: null,
        }),
        rt === null ? (pe.memoizedState = rt = e) : (rt = rt.next = e);
    }
    return rt;
  }
  function hc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function mi(e) {
    var t = hi;
    return (
      (hi += 1),
      dn === null && (dn = []),
      (e = ko(dn, e, t)),
      (t = pe),
      (rt === null ? t.memoizedState : rt.next) === null &&
        ((t = t.alternate),
        (k.H = t === null || t.memoizedState === null ? bd : vd)),
      e
    );
  }
  function ws(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return mi(e);
      if (e.$$typeof === Z) return jt(e);
    }
    throw Error(u(438, String(e)));
  }
  function mc(e) {
    var t = null,
      l = pe.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = pe.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (i) {
                return i.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = hc()), (pe.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = Qe;
    return t.index++, l;
  }
  function Tl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function As(e) {
    var t = ct();
    return gc(t, Le, e);
  }
  function gc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(u(311));
    a.lastRenderedReducer = l;
    var i = e.baseQueue,
      s = a.pending;
    if (s !== null) {
      if (i !== null) {
        var c = i.next;
        (i.next = s.next), (s.next = c);
      }
      (t.baseQueue = i = s), (a.pending = null);
    }
    if (((s = e.baseState), i === null)) e.memoizedState = s;
    else {
      t = i.next;
      var o = (c = null),
        g = null,
        E = t,
        D = !1;
      do {
        var O = E.lane & -536870913;
        if (O !== E.lane ? (Ce & O) === O : (Il & O) === O) {
          var C = E.revertLane;
          if (C === 0)
            g !== null &&
              (g = g.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: E.action,
                  hasEagerState: E.hasEagerState,
                  eagerState: E.eagerState,
                  next: null,
                }),
              O === rn && (D = !0);
          else if ((Il & C) === C) {
            (E = E.next), C === rn && (D = !0);
            continue;
          } else
            (O = {
              lane: 0,
              revertLane: E.revertLane,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null,
            }),
              g === null ? ((o = g = O), (c = s)) : (g = g.next = O),
              (pe.lanes |= C),
              (ia |= C);
          (O = E.action),
            Ha && l(s, O),
            (s = E.hasEagerState ? E.eagerState : l(s, O));
        } else
          (C = {
            lane: O,
            revertLane: E.revertLane,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          }),
            g === null ? ((o = g = C), (c = s)) : (g = g.next = C),
            (pe.lanes |= O),
            (ia |= O);
        E = E.next;
      } while (E !== null && E !== t);
      if (
        (g === null ? (c = s) : (g.next = o),
        !Ot(s, e.memoizedState) && ((ft = !0), D && ((l = cn), l !== null)))
      )
        throw l;
      (e.memoizedState = s),
        (e.baseState = c),
        (e.baseQueue = g),
        (a.lastRenderedState = s);
    }
    return i === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function xc(e) {
    var t = ct(),
      l = t.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      i = l.pending,
      s = t.memoizedState;
    if (i !== null) {
      l.pending = null;
      var c = (i = i.next);
      do (s = e(s, c.action)), (c = c.next);
      while (c !== i);
      Ot(s, t.memoizedState) || (ft = !0),
        (t.memoizedState = s),
        t.baseQueue === null && (t.baseState = s),
        (l.lastRenderedState = s);
    }
    return [s, a];
  }
  function Uo(e, t, l) {
    var a = pe,
      i = ct(),
      s = De;
    if (s) {
      if (l === void 0) throw Error(u(407));
      l = l();
    } else l = t();
    var c = !Ot((Le || i).memoizedState, l);
    c && ((i.memoizedState = l), (ft = !0)), (i = i.queue);
    var o = qo.bind(null, a, i, e);
    if (
      (gi(2048, 8, o, [e]),
      i.getSnapshot !== t || c || (rt !== null && rt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        fn(9, Es(), Yo.bind(null, a, i, l, t), null),
        Ge === null)
      )
        throw Error(u(349));
      s || (Il & 124) !== 0 || Ho(a, t, l);
    }
    return l;
  }
  function Ho(e, t, l) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = pe.updateQueue),
      t === null
        ? ((t = hc()), (pe.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
  }
  function Yo(e, t, l, a) {
    (t.value = l), (t.getSnapshot = a), Go(t) && Qo(e);
  }
  function qo(e, t, l) {
    return l(function () {
      Go(t) && Qo(e);
    });
  }
  function Go(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Ot(e, l);
    } catch {
      return !0;
    }
  }
  function Qo(e) {
    var t = ln(e, 2);
    t !== null && Yt(t, e, 2);
  }
  function pc(e) {
    var t = Tt();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), Ha)) {
        Pt(!0);
        try {
          l();
        } finally {
          Pt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tl,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Vo(e, t, l, a) {
    return (e.baseState = l), gc(e, Le, typeof a == "function" ? a : Tl);
  }
  function Jm(e, t, l, a, i) {
    if (Rs(e)) throw Error(u(485));
    if (((e = t.action), e !== null)) {
      var s = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          s.listeners.push(c);
        },
      };
      k.T !== null ? l(!0) : (s.isTransition = !1),
        a(s),
        (l = t.pending),
        l === null
          ? ((s.next = t.pending = s), Xo(t, s))
          : ((s.next = l.next), (t.pending = l.next = s));
    }
  }
  function Xo(e, t) {
    var l = t.action,
      a = t.payload,
      i = e.state;
    if (t.isTransition) {
      var s = k.T,
        c = {};
      k.T = c;
      try {
        var o = l(i, a),
          g = k.S;
        g !== null && g(c, o), Zo(e, t, o);
      } catch (E) {
        bc(e, t, E);
      } finally {
        k.T = s;
      }
    } else
      try {
        (s = l(i, a)), Zo(e, t, s);
      } catch (E) {
        bc(e, t, E);
      }
  }
  function Zo(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            Ko(e, t, a);
          },
          function (a) {
            return bc(e, t, a);
          },
        )
      : Ko(e, t, l);
  }
  function Ko(e, t, l) {
    (t.status = "fulfilled"),
      (t.value = l),
      Jo(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), Xo(e, l)));
  }
  function bc(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = l), Jo(t), (t = t.next);
      while (t !== a);
    }
    e.action = null;
  }
  function Jo(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function $o(e, t) {
    return t;
  }
  function Wo(e, t) {
    if (De) {
      var l = Ge.formState;
      if (l !== null) {
        e: {
          var a = pe;
          if (De) {
            if (et) {
              t: {
                for (var i = et, s = cl; i.nodeType !== 8; ) {
                  if (!s) {
                    i = null;
                    break t;
                  }
                  if (((i = il(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                (s = i.data), (i = s === "F!" || s === "F" ? i : null);
              }
              if (i) {
                (et = il(i.nextSibling)), (a = i.data === "F!");
                break e;
              }
            }
            za(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = Tt()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $o,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = gd.bind(null, pe, a)),
      (a.dispatch = l),
      (a = pc(!1)),
      (s = Sc.bind(null, pe, !1, a.queue)),
      (a = Tt()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = i),
      (l = Jm.bind(null, pe, i, s, l)),
      (i.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function Fo(e) {
    var t = ct();
    return Io(t, Le, e);
  }
  function Io(e, t, l) {
    if (
      ((t = gc(e, t, $o)[0]),
      (e = As(Tl)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = mi(t);
      } catch (c) {
        throw c === ci ? vs : c;
      }
    else a = t;
    t = ct();
    var i = t.queue,
      s = i.dispatch;
    return (
      l !== t.memoizedState &&
        ((pe.flags |= 2048), fn(9, Es(), $m.bind(null, i, l), null)),
      [a, s, e]
    );
  }
  function $m(e, t) {
    e.action = t;
  }
  function Po(e) {
    var t = ct(),
      l = Le;
    if (l !== null) return Io(t, l, e);
    ct(), (t = t.memoizedState), (l = ct());
    var a = l.queue.dispatch;
    return (l.memoizedState = e), [t, a, !1];
  }
  function fn(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = pe.updateQueue),
      t === null && ((t = hc()), (pe.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Es() {
    return { destroy: void 0, resource: void 0 };
  }
  function ed() {
    return ct().memoizedState;
  }
  function Cs(e, t, l, a) {
    var i = Tt();
    (a = a === void 0 ? null : a),
      (pe.flags |= e),
      (i.memoizedState = fn(1 | t, Es(), l, a));
  }
  function gi(e, t, l, a) {
    var i = ct();
    a = a === void 0 ? null : a;
    var s = i.memoizedState.inst;
    Le !== null && a !== null && cc(a, Le.memoizedState.deps)
      ? (i.memoizedState = fn(t, s, l, a))
      : ((pe.flags |= e), (i.memoizedState = fn(1 | t, s, l, a)));
  }
  function td(e, t) {
    Cs(8390656, 8, e, t);
  }
  function ld(e, t) {
    gi(2048, 8, e, t);
  }
  function ad(e, t) {
    return gi(4, 2, e, t);
  }
  function nd(e, t) {
    return gi(4, 4, e, t);
  }
  function id(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function sd(e, t, l) {
    (l = l != null ? l.concat([e]) : null), gi(4, 4, id.bind(null, t, e), l);
  }
  function vc() {}
  function rd(e, t) {
    var l = ct();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && cc(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function cd(e, t) {
    var l = ct();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && cc(t, a[1])) return a[0];
    if (((a = e()), Ha)) {
      Pt(!0);
      try {
        e();
      } finally {
        Pt(!1);
      }
    }
    return (l.memoizedState = [a, t]), a;
  }
  function yc(e, t, l) {
    return l === void 0 || (Il & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = ff()), (pe.lanes |= e), (ia |= e), l);
  }
  function ud(e, t, l, a) {
    return Ot(l, t)
      ? l
      : un.current !== null
        ? ((e = yc(e, l, a)), Ot(e, t) || (ft = !0), e)
        : (Il & 42) === 0
          ? ((ft = !0), (e.memoizedState = l))
          : ((e = ff()), (pe.lanes |= e), (ia |= e), t);
  }
  function od(e, t, l, a, i) {
    var s = $.p;
    $.p = s !== 0 && 8 > s ? s : 8;
    var c = k.T,
      o = {};
    (k.T = o), Sc(e, !1, t, l);
    try {
      var g = i(),
        E = k.S;
      if (
        (E !== null && E(o, g),
        g !== null && typeof g == "object" && typeof g.then == "function")
      ) {
        var D = Xm(g, a);
        xi(e, t, D, Ht(e));
      } else xi(e, t, a, Ht(e));
    } catch (O) {
      xi(e, t, { then: function () {}, status: "rejected", reason: O }, Ht());
    } finally {
      ($.p = s), (k.T = c);
    }
  }
  function Wm() {}
  function jc(e, t, l, a) {
    if (e.tag !== 5) throw Error(u(476));
    var i = dd(e).queue;
    od(
      e,
      i,
      t,
      ne,
      l === null
        ? Wm
        : function () {
            return fd(e), l(a);
          },
    );
  }
  function dd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ne,
      baseState: ne,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tl,
        lastRenderedState: ne,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Tl,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function fd(e) {
    var t = dd(e).next.queue;
    xi(e, t, {}, Ht());
  }
  function Nc() {
    return jt(Oi);
  }
  function hd() {
    return ct().memoizedState;
  }
  function md() {
    return ct().memoizedState;
  }
  function Fm(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Ht();
          e = Wl(l);
          var a = Fl(t, e, l);
          a !== null && (Yt(a, t, l), oi(a, t, l)),
            (t = { cache: Ir() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Im(e, t, l) {
    var a = Ht();
    (l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Rs(e)
        ? xd(t, l)
        : ((l = Gr(e, t, l, a)), l !== null && (Yt(l, e, a), pd(l, t, a)));
  }
  function gd(e, t, l) {
    var a = Ht();
    xi(e, t, l, a);
  }
  function xi(e, t, l, a) {
    var i = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Rs(e)) xd(t, i);
    else {
      var s = e.alternate;
      if (
        e.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = t.lastRenderedReducer), s !== null)
      )
        try {
          var c = t.lastRenderedState,
            o = s(c, l);
          if (((i.hasEagerState = !0), (i.eagerState = o), Ot(o, c)))
            return ds(e, t, i, 0), Ge === null && os(), !1;
        } catch {
        } finally {
        }
      if (((l = Gr(e, t, i, a)), l !== null))
        return Yt(l, e, a), pd(l, t, a), !0;
    }
    return !1;
  }
  function Sc(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: tu(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Rs(e))
    ) {
      if (t) throw Error(u(479));
    } else (t = Gr(e, l, a, 2)), t !== null && Yt(t, e, 2);
  }
  function Rs(e) {
    var t = e.alternate;
    return e === pe || (t !== null && t === pe);
  }
  function xd(e, t) {
    on = Ns = !0;
    var l = e.pending;
    l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t);
  }
  function pd(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), _(e, l);
    }
  }
  var Ts = {
      readContext: jt,
      use: ws,
      useCallback: lt,
      useContext: lt,
      useEffect: lt,
      useImperativeHandle: lt,
      useLayoutEffect: lt,
      useInsertionEffect: lt,
      useMemo: lt,
      useReducer: lt,
      useRef: lt,
      useState: lt,
      useDebugValue: lt,
      useDeferredValue: lt,
      useTransition: lt,
      useSyncExternalStore: lt,
      useId: lt,
      useHostTransitionStatus: lt,
      useFormState: lt,
      useActionState: lt,
      useOptimistic: lt,
      useMemoCache: lt,
      useCacheRefresh: lt,
    },
    bd = {
      readContext: jt,
      use: ws,
      useCallback: function (e, t) {
        return (Tt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: jt,
      useEffect: td,
      useImperativeHandle: function (e, t, l) {
        (l = l != null ? l.concat([e]) : null),
          Cs(4194308, 4, id.bind(null, t, e), l);
      },
      useLayoutEffect: function (e, t) {
        return Cs(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Cs(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = Tt();
        t = t === void 0 ? null : t;
        var a = e();
        if (Ha) {
          Pt(!0);
          try {
            e();
          } finally {
            Pt(!1);
          }
        }
        return (l.memoizedState = [a, t]), a;
      },
      useReducer: function (e, t, l) {
        var a = Tt();
        if (l !== void 0) {
          var i = l(t);
          if (Ha) {
            Pt(!0);
            try {
              l(t);
            } finally {
              Pt(!1);
            }
          }
        } else i = t;
        return (
          (a.memoizedState = a.baseState = i),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i,
          }),
          (a.queue = e),
          (e = e.dispatch = Im.bind(null, pe, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Tt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = pc(e);
        var t = e.queue,
          l = gd.bind(null, pe, t);
        return (t.dispatch = l), [e.memoizedState, l];
      },
      useDebugValue: vc,
      useDeferredValue: function (e, t) {
        var l = Tt();
        return yc(l, e, t);
      },
      useTransition: function () {
        var e = pc(!1);
        return (
          (e = od.bind(null, pe, e.queue, !0, !1)),
          (Tt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = pe,
          i = Tt();
        if (De) {
          if (l === void 0) throw Error(u(407));
          l = l();
        } else {
          if (((l = t()), Ge === null)) throw Error(u(349));
          (Ce & 124) !== 0 || Ho(a, t, l);
        }
        i.memoizedState = l;
        var s = { value: l, getSnapshot: t };
        return (
          (i.queue = s),
          td(qo.bind(null, a, s, e), [e]),
          (a.flags |= 2048),
          fn(9, Es(), Yo.bind(null, a, s, l, t), null),
          l
        );
      },
      useId: function () {
        var e = Tt(),
          t = Ge.identifierPrefix;
        if (De) {
          var l = El,
            a = Al;
          (l = (a & ~(1 << (32 - wt(a) - 1))).toString(32) + l),
            (t = "«" + t + "R" + l),
            (l = Ss++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "»");
        } else (l = Zm++), (t = "«" + t + "r" + l.toString(32) + "»");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Nc,
      useFormState: Wo,
      useActionState: Wo,
      useOptimistic: function (e) {
        var t = Tt();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = Sc.bind(null, pe, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: mc,
      useCacheRefresh: function () {
        return (Tt().memoizedState = Fm.bind(null, pe));
      },
    },
    vd = {
      readContext: jt,
      use: ws,
      useCallback: rd,
      useContext: jt,
      useEffect: ld,
      useImperativeHandle: sd,
      useInsertionEffect: ad,
      useLayoutEffect: nd,
      useMemo: cd,
      useReducer: As,
      useRef: ed,
      useState: function () {
        return As(Tl);
      },
      useDebugValue: vc,
      useDeferredValue: function (e, t) {
        var l = ct();
        return ud(l, Le.memoizedState, e, t);
      },
      useTransition: function () {
        var e = As(Tl)[0],
          t = ct().memoizedState;
        return [typeof e == "boolean" ? e : mi(e), t];
      },
      useSyncExternalStore: Uo,
      useId: hd,
      useHostTransitionStatus: Nc,
      useFormState: Fo,
      useActionState: Fo,
      useOptimistic: function (e, t) {
        var l = ct();
        return Vo(l, Le, e, t);
      },
      useMemoCache: mc,
      useCacheRefresh: md,
    },
    Pm = {
      readContext: jt,
      use: ws,
      useCallback: rd,
      useContext: jt,
      useEffect: ld,
      useImperativeHandle: sd,
      useInsertionEffect: ad,
      useLayoutEffect: nd,
      useMemo: cd,
      useReducer: xc,
      useRef: ed,
      useState: function () {
        return xc(Tl);
      },
      useDebugValue: vc,
      useDeferredValue: function (e, t) {
        var l = ct();
        return Le === null ? yc(l, e, t) : ud(l, Le.memoizedState, e, t);
      },
      useTransition: function () {
        var e = xc(Tl)[0],
          t = ct().memoizedState;
        return [typeof e == "boolean" ? e : mi(e), t];
      },
      useSyncExternalStore: Uo,
      useId: hd,
      useHostTransitionStatus: Nc,
      useFormState: Po,
      useActionState: Po,
      useOptimistic: function (e, t) {
        var l = ct();
        return Le !== null
          ? Vo(l, Le, e, t)
          : ((l.baseState = e), [e, l.queue.dispatch]);
      },
      useMemoCache: mc,
      useCacheRefresh: md,
    },
    hn = null,
    pi = 0;
  function ks(e) {
    var t = pi;
    return (pi += 1), hn === null && (hn = []), ko(hn, e, t);
  }
  function bi(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Ds(e, t) {
    throw t.$$typeof === B
      ? Error(u(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          u(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function yd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function jd(e) {
    function t(N, y) {
      if (e) {
        var w = N.deletions;
        w === null ? ((N.deletions = [y]), (N.flags |= 16)) : w.push(y);
      }
    }
    function l(N, y) {
      if (!e) return null;
      for (; y !== null; ) t(N, y), (y = y.sibling);
      return null;
    }
    function a(N) {
      for (var y = new Map(); N !== null; )
        N.key !== null ? y.set(N.key, N) : y.set(N.index, N), (N = N.sibling);
      return y;
    }
    function i(N, y) {
      return (N = wl(N, y)), (N.index = 0), (N.sibling = null), N;
    }
    function s(N, y, w) {
      return (
        (N.index = w),
        e
          ? ((w = N.alternate),
            w !== null
              ? ((w = w.index), w < y ? ((N.flags |= 67108866), y) : w)
              : ((N.flags |= 67108866), y))
          : ((N.flags |= 1048576), y)
      );
    }
    function c(N) {
      return e && N.alternate === null && (N.flags |= 67108866), N;
    }
    function o(N, y, w, M) {
      return y === null || y.tag !== 6
        ? ((y = Vr(w, N.mode, M)), (y.return = N), y)
        : ((y = i(y, w)), (y.return = N), y);
    }
    function g(N, y, w, M) {
      var te = w.type;
      return te === z
        ? D(N, y, w.props.children, M, w.key)
        : y !== null &&
            (y.elementType === te ||
              (typeof te == "object" &&
                te !== null &&
                te.$$typeof === Se &&
                yd(te) === y.type))
          ? ((y = i(y, w.props)), bi(y, w), (y.return = N), y)
          : ((y = hs(w.type, w.key, w.props, null, N.mode, M)),
            bi(y, w),
            (y.return = N),
            y);
    }
    function E(N, y, w, M) {
      return y === null ||
        y.tag !== 4 ||
        y.stateNode.containerInfo !== w.containerInfo ||
        y.stateNode.implementation !== w.implementation
        ? ((y = Xr(w, N.mode, M)), (y.return = N), y)
        : ((y = i(y, w.children || [])), (y.return = N), y);
    }
    function D(N, y, w, M, te) {
      return y === null || y.tag !== 7
        ? ((y = Da(w, N.mode, M, te)), (y.return = N), y)
        : ((y = i(y, w)), (y.return = N), y);
    }
    function O(N, y, w) {
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return (y = Vr("" + y, N.mode, w)), (y.return = N), y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case L:
            return (
              (w = hs(y.type, y.key, y.props, null, N.mode, w)),
              bi(w, y),
              (w.return = N),
              w
            );
          case q:
            return (y = Xr(y, N.mode, w)), (y.return = N), y;
          case Se:
            var M = y._init;
            return (y = M(y._payload)), O(N, y, w);
        }
        if (nt(y) || He(y))
          return (y = Da(y, N.mode, w, null)), (y.return = N), y;
        if (typeof y.then == "function") return O(N, ks(y), w);
        if (y.$$typeof === Z) return O(N, ps(N, y), w);
        Ds(N, y);
      }
      return null;
    }
    function C(N, y, w, M) {
      var te = y !== null ? y.key : null;
      if (
        (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
      )
        return te !== null ? null : o(N, y, "" + w, M);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case L:
            return w.key === te ? g(N, y, w, M) : null;
          case q:
            return w.key === te ? E(N, y, w, M) : null;
          case Se:
            return (te = w._init), (w = te(w._payload)), C(N, y, w, M);
        }
        if (nt(w) || He(w)) return te !== null ? null : D(N, y, w, M, null);
        if (typeof w.then == "function") return C(N, y, ks(w), M);
        if (w.$$typeof === Z) return C(N, y, ps(N, w), M);
        Ds(N, w);
      }
      return null;
    }
    function R(N, y, w, M, te) {
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return (N = N.get(w) || null), o(y, N, "" + M, te);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case L:
            return (
              (N = N.get(M.key === null ? w : M.key) || null), g(y, N, M, te)
            );
          case q:
            return (
              (N = N.get(M.key === null ? w : M.key) || null), E(y, N, M, te)
            );
          case Se:
            var be = M._init;
            return (M = be(M._payload)), R(N, y, w, M, te);
        }
        if (nt(M) || He(M)) return (N = N.get(w) || null), D(y, N, M, te, null);
        if (typeof M.then == "function") return R(N, y, w, ks(M), te);
        if (M.$$typeof === Z) return R(N, y, w, ps(y, M), te);
        Ds(y, M);
      }
      return null;
    }
    function de(N, y, w, M) {
      for (
        var te = null, be = null, se = y, ue = (y = 0), mt = null;
        se !== null && ue < w.length;
        ue++
      ) {
        se.index > ue ? ((mt = se), (se = null)) : (mt = se.sibling);
        var ke = C(N, se, w[ue], M);
        if (ke === null) {
          se === null && (se = mt);
          break;
        }
        e && se && ke.alternate === null && t(N, se),
          (y = s(ke, y, ue)),
          be === null ? (te = ke) : (be.sibling = ke),
          (be = ke),
          (se = mt);
      }
      if (ue === w.length) return l(N, se), De && Ma(N, ue), te;
      if (se === null) {
        for (; ue < w.length; ue++)
          (se = O(N, w[ue], M)),
            se !== null &&
              ((y = s(se, y, ue)),
              be === null ? (te = se) : (be.sibling = se),
              (be = se));
        return De && Ma(N, ue), te;
      }
      for (se = a(se); ue < w.length; ue++)
        (mt = R(se, N, ue, w[ue], M)),
          mt !== null &&
            (e &&
              mt.alternate !== null &&
              se.delete(mt.key === null ? ue : mt.key),
            (y = s(mt, y, ue)),
            be === null ? (te = mt) : (be.sibling = mt),
            (be = mt));
      return (
        e &&
          se.forEach(function (ma) {
            return t(N, ma);
          }),
        De && Ma(N, ue),
        te
      );
    }
    function ce(N, y, w, M) {
      if (w == null) throw Error(u(151));
      for (
        var te = null,
          be = null,
          se = y,
          ue = (y = 0),
          mt = null,
          ke = w.next();
        se !== null && !ke.done;
        ue++, ke = w.next()
      ) {
        se.index > ue ? ((mt = se), (se = null)) : (mt = se.sibling);
        var ma = C(N, se, ke.value, M);
        if (ma === null) {
          se === null && (se = mt);
          break;
        }
        e && se && ma.alternate === null && t(N, se),
          (y = s(ma, y, ue)),
          be === null ? (te = ma) : (be.sibling = ma),
          (be = ma),
          (se = mt);
      }
      if (ke.done) return l(N, se), De && Ma(N, ue), te;
      if (se === null) {
        for (; !ke.done; ue++, ke = w.next())
          (ke = O(N, ke.value, M)),
            ke !== null &&
              ((y = s(ke, y, ue)),
              be === null ? (te = ke) : (be.sibling = ke),
              (be = ke));
        return De && Ma(N, ue), te;
      }
      for (se = a(se); !ke.done; ue++, ke = w.next())
        (ke = R(se, N, ue, ke.value, M)),
          ke !== null &&
            (e &&
              ke.alternate !== null &&
              se.delete(ke.key === null ? ue : ke.key),
            (y = s(ke, y, ue)),
            be === null ? (te = ke) : (be.sibling = ke),
            (be = ke));
      return (
        e &&
          se.forEach(function (e0) {
            return t(N, e0);
          }),
        De && Ma(N, ue),
        te
      );
    }
    function Ue(N, y, w, M) {
      if (
        (typeof w == "object" &&
          w !== null &&
          w.type === z &&
          w.key === null &&
          (w = w.props.children),
        typeof w == "object" && w !== null)
      ) {
        switch (w.$$typeof) {
          case L:
            e: {
              for (var te = w.key; y !== null; ) {
                if (y.key === te) {
                  if (((te = w.type), te === z)) {
                    if (y.tag === 7) {
                      l(N, y.sibling),
                        (M = i(y, w.props.children)),
                        (M.return = N),
                        (N = M);
                      break e;
                    }
                  } else if (
                    y.elementType === te ||
                    (typeof te == "object" &&
                      te !== null &&
                      te.$$typeof === Se &&
                      yd(te) === y.type)
                  ) {
                    l(N, y.sibling),
                      (M = i(y, w.props)),
                      bi(M, w),
                      (M.return = N),
                      (N = M);
                    break e;
                  }
                  l(N, y);
                  break;
                } else t(N, y);
                y = y.sibling;
              }
              w.type === z
                ? ((M = Da(w.props.children, N.mode, M, w.key)),
                  (M.return = N),
                  (N = M))
                : ((M = hs(w.type, w.key, w.props, null, N.mode, M)),
                  bi(M, w),
                  (M.return = N),
                  (N = M));
            }
            return c(N);
          case q:
            e: {
              for (te = w.key; y !== null; ) {
                if (y.key === te)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === w.containerInfo &&
                    y.stateNode.implementation === w.implementation
                  ) {
                    l(N, y.sibling),
                      (M = i(y, w.children || [])),
                      (M.return = N),
                      (N = M);
                    break e;
                  } else {
                    l(N, y);
                    break;
                  }
                else t(N, y);
                y = y.sibling;
              }
              (M = Xr(w, N.mode, M)), (M.return = N), (N = M);
            }
            return c(N);
          case Se:
            return (te = w._init), (w = te(w._payload)), Ue(N, y, w, M);
        }
        if (nt(w)) return de(N, y, w, M);
        if (He(w)) {
          if (((te = He(w)), typeof te != "function")) throw Error(u(150));
          return (w = te.call(w)), ce(N, y, w, M);
        }
        if (typeof w.then == "function") return Ue(N, y, ks(w), M);
        if (w.$$typeof === Z) return Ue(N, y, ps(N, w), M);
        Ds(N, w);
      }
      return (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
        ? ((w = "" + w),
          y !== null && y.tag === 6
            ? (l(N, y.sibling), (M = i(y, w)), (M.return = N), (N = M))
            : (l(N, y), (M = Vr(w, N.mode, M)), (M.return = N), (N = M)),
          c(N))
        : l(N, y);
    }
    return function (N, y, w, M) {
      try {
        pi = 0;
        var te = Ue(N, y, w, M);
        return (hn = null), te;
      } catch (se) {
        if (se === ci || se === vs) throw se;
        var be = zt(29, se, null, N.mode);
        return (be.lanes = M), (be.return = N), be;
      } finally {
      }
    };
  }
  var mn = jd(!0),
    Nd = jd(!1),
    Wt = U(null),
    ul = null;
  function Pl(e) {
    var t = e.alternate;
    K(ot, ot.current & 1),
      K(Wt, e),
      ul === null &&
        (t === null || un.current !== null || t.memoizedState !== null) &&
        (ul = e);
  }
  function Sd(e) {
    if (e.tag === 22) {
      if ((K(ot, ot.current), K(Wt, e), ul === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (ul = e);
      }
    } else ea();
  }
  function ea() {
    K(ot, ot.current), K(Wt, Wt.current);
  }
  function kl(e) {
    W(Wt), ul === e && (ul = null), W(ot);
  }
  var ot = U(0);
  function _s(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || hu(l))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function wc(e, t, l, a) {
    (t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : S({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Ac = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = Ht(),
        i = Wl(a);
      (i.payload = t),
        l != null && (i.callback = l),
        (t = Fl(e, i, a)),
        t !== null && (Yt(t, e, a), oi(t, e, a));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = Ht(),
        i = Wl(a);
      (i.tag = 1),
        (i.payload = t),
        l != null && (i.callback = l),
        (t = Fl(e, i, a)),
        t !== null && (Yt(t, e, a), oi(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = Ht(),
        a = Wl(l);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = Fl(e, a, l)),
        t !== null && (Yt(t, e, l), oi(t, e, l));
    },
  };
  function wd(e, t, l, a, i, s, c) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, s, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ei(l, a) || !ei(i, s)
          : !0
    );
  }
  function Ad(e, t, l, a) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && Ac.enqueueReplaceState(t, t.state, null);
  }
  function Ya(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = S({}, l));
      for (var i in e) l[i] === void 0 && (l[i] = e[i]);
    }
    return l;
  }
  var Ms =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function Ed(e) {
    Ms(e);
  }
  function Cd(e) {
    console.error(e);
  }
  function Rd(e) {
    Ms(e);
  }
  function Os(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Td(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Ec(e, t, l) {
    return (
      (l = Wl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Os(e, t);
      }),
      l
    );
  }
  function kd(e) {
    return (e = Wl(e)), (e.tag = 3), e;
  }
  function Dd(e, t, l, a) {
    var i = l.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var s = a.value;
      (e.payload = function () {
        return i(s);
      }),
        (e.callback = function () {
          Td(t, l, a);
        });
    }
    var c = l.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (e.callback = function () {
        Td(t, l, a),
          typeof i != "function" &&
            (sa === null ? (sa = new Set([this])) : sa.add(this));
        var o = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: o !== null ? o : "",
        });
      });
  }
  function e1(e, t, l, a, i) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && ii(t, l, i, !0),
        (l = Wt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              ul === null ? Wc() : l.alternate === null && tt === 0 && (tt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = i),
              a === tc
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  Ic(e, a, i)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === tc
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  Ic(e, a, i)),
              !1
            );
        }
        throw Error(u(435, l.tag));
      }
      return Ic(e, a, i), Wc(), !1;
    }
    if (De)
      return (
        (t = Wt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            a !== Jr && ((e = Error(u(422), { cause: a })), ni(Zt(e, l))))
          : (a !== Jr && ((t = Error(u(423), { cause: a })), ni(Zt(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (a = Zt(a, l)),
            (i = Ec(e.stateNode, a, i)),
            nc(e, i),
            tt !== 4 && (tt = 2)),
        !1
      );
    var s = Error(u(520), { cause: a });
    if (
      ((s = Zt(s, l)),
      Ai === null ? (Ai = [s]) : Ai.push(s),
      tt !== 4 && (tt = 2),
      t === null)
    )
      return !0;
    (a = Zt(a, l)), (l = t);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = i & -i),
            (l.lanes |= e),
            (e = Ec(l.stateNode, a, e)),
            nc(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (s = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (s !== null &&
                  typeof s.componentDidCatch == "function" &&
                  (sa === null || !sa.has(s)))))
          )
            return (
              (l.flags |= 65536),
              (i &= -i),
              (l.lanes |= i),
              (i = kd(i)),
              Dd(i, e, l, a),
              nc(l, i),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var _d = Error(u(461)),
    ft = !1;
  function xt(e, t, l, a) {
    t.child = e === null ? Nd(t, null, l, a) : mn(t, e.child, l, a);
  }
  function Md(e, t, l, a, i) {
    l = l.render;
    var s = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var o in a) o !== "ref" && (c[o] = a[o]);
    } else c = a;
    return (
      Ba(t),
      (a = uc(e, t, l, c, s, i)),
      (o = oc()),
      e !== null && !ft
        ? (dc(e, t, i), Dl(e, t, i))
        : (De && o && Zr(t), (t.flags |= 1), xt(e, t, a, i), t.child)
    );
  }
  function Od(e, t, l, a, i) {
    if (e === null) {
      var s = l.type;
      return typeof s == "function" &&
        !Qr(s) &&
        s.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = s), zd(e, t, s, a, i))
        : ((e = hs(l.type, null, a, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((s = e.child), !Oc(e, i))) {
      var c = s.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : ei), l(c, a) && e.ref === t.ref)
      )
        return Dl(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = wl(s, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function zd(e, t, l, a, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (ei(s, a) && e.ref === t.ref)
        if (((ft = !1), (t.pendingProps = a = s), Oc(e, i)))
          (e.flags & 131072) !== 0 && (ft = !0);
        else return (t.lanes = e.lanes), Dl(e, t, i);
    }
    return Cc(e, t, l, a, i);
  }
  function Ld(e, t, l) {
    var a = t.pendingProps,
      i = a.children,
      s = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((a = s !== null ? s.baseLanes | l : l), e !== null)) {
          for (i = t.child = e.child, s = 0; i !== null; )
            (s = s | i.lanes | i.childLanes), (i = i.sibling);
          t.childLanes = s & ~a;
        } else (t.childLanes = 0), (t.child = null);
        return Bd(e, t, a, l);
      }
      if ((l & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && bs(t, s !== null ? s.cachePool : null),
          s !== null ? zo(t, s) : sc(),
          Sd(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          Bd(e, t, s !== null ? s.baseLanes | l : l, l)
        );
    } else
      s !== null
        ? (bs(t, s.cachePool), zo(t, s), ea(), (t.memoizedState = null))
        : (e !== null && bs(t, null), sc(), ea());
    return xt(e, t, i, l), t.child;
  }
  function Bd(e, t, l, a) {
    var i = ec();
    return (
      (i = i === null ? null : { parent: ut._currentValue, pool: i }),
      (t.memoizedState = { baseLanes: l, cachePool: i }),
      e !== null && bs(t, null),
      sc(),
      Sd(t),
      e !== null && ii(e, t, a, !0),
      null
    );
  }
  function zs(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(u(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Cc(e, t, l, a, i) {
    return (
      Ba(t),
      (l = uc(e, t, l, a, void 0, i)),
      (a = oc()),
      e !== null && !ft
        ? (dc(e, t, i), Dl(e, t, i))
        : (De && a && Zr(t), (t.flags |= 1), xt(e, t, l, i), t.child)
    );
  }
  function Ud(e, t, l, a, i, s) {
    return (
      Ba(t),
      (t.updateQueue = null),
      (l = Bo(t, a, l, i)),
      Lo(e),
      (a = oc()),
      e !== null && !ft
        ? (dc(e, t, s), Dl(e, t, s))
        : (De && a && Zr(t), (t.flags |= 1), xt(e, t, l, s), t.child)
    );
  }
  function Hd(e, t, l, a, i) {
    if ((Ba(t), t.stateNode === null)) {
      var s = an,
        c = l.contextType;
      typeof c == "object" && c !== null && (s = jt(c)),
        (s = new l(a, s)),
        (t.memoizedState =
          s.state !== null && s.state !== void 0 ? s.state : null),
        (s.updater = Ac),
        (t.stateNode = s),
        (s._reactInternals = t),
        (s = t.stateNode),
        (s.props = a),
        (s.state = t.memoizedState),
        (s.refs = {}),
        lc(t),
        (c = l.contextType),
        (s.context = typeof c == "object" && c !== null ? jt(c) : an),
        (s.state = t.memoizedState),
        (c = l.getDerivedStateFromProps),
        typeof c == "function" && (wc(t, l, c, a), (s.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function" ||
          (typeof s.UNSAFE_componentWillMount != "function" &&
            typeof s.componentWillMount != "function") ||
          ((c = s.state),
          typeof s.componentWillMount == "function" && s.componentWillMount(),
          typeof s.UNSAFE_componentWillMount == "function" &&
            s.UNSAFE_componentWillMount(),
          c !== s.state && Ac.enqueueReplaceState(s, s.state, null),
          fi(t, a, s, i),
          di(),
          (s.state = t.memoizedState)),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (e === null) {
      s = t.stateNode;
      var o = t.memoizedProps,
        g = Ya(l, o);
      s.props = g;
      var E = s.context,
        D = l.contextType;
      (c = an), typeof D == "object" && D !== null && (c = jt(D));
      var O = l.getDerivedStateFromProps;
      (D =
        typeof O == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function"),
        (o = t.pendingProps !== o),
        D ||
          (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function") ||
          ((o || E !== c) && Ad(t, s, a, c)),
        ($l = !1);
      var C = t.memoizedState;
      (s.state = C),
        fi(t, a, s, i),
        di(),
        (E = t.memoizedState),
        o || C !== E || $l
          ? (typeof O == "function" && (wc(t, l, O, a), (E = t.memoizedState)),
            (g = $l || wd(t, l, g, a, C, E, c))
              ? (D ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = E)),
            (s.props = a),
            (s.state = E),
            (s.context = c),
            (a = g))
          : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (s = t.stateNode),
        ac(e, t),
        (c = t.memoizedProps),
        (D = Ya(l, c)),
        (s.props = D),
        (O = t.pendingProps),
        (C = s.context),
        (E = l.contextType),
        (g = an),
        typeof E == "object" && E !== null && (g = jt(E)),
        (o = l.getDerivedStateFromProps),
        (E =
          typeof o == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function") ||
          (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function") ||
          ((c !== O || C !== g) && Ad(t, s, a, g)),
        ($l = !1),
        (C = t.memoizedState),
        (s.state = C),
        fi(t, a, s, i),
        di();
      var R = t.memoizedState;
      c !== O ||
      C !== R ||
      $l ||
      (e !== null && e.dependencies !== null && xs(e.dependencies))
        ? (typeof o == "function" && (wc(t, l, o, a), (R = t.memoizedState)),
          (D =
            $l ||
            wd(t, l, D, a, C, R, g) ||
            (e !== null && e.dependencies !== null && xs(e.dependencies)))
            ? (E ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(a, R, g),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(a, R, g)),
              typeof s.componentDidUpdate == "function" && (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (c === e.memoizedProps && C === e.memoizedState) ||
                (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (c === e.memoizedProps && C === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = R)),
          (s.props = a),
          (s.state = R),
          (s.context = g),
          (a = D))
        : (typeof s.componentDidUpdate != "function" ||
            (c === e.memoizedProps && C === e.memoizedState) ||
            (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (c === e.memoizedProps && C === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (s = a),
      zs(e, t),
      (a = (t.flags & 128) !== 0),
      s || a
        ? ((s = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : s.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = mn(t, e.child, null, i)),
              (t.child = mn(t, null, l, i)))
            : xt(e, t, l, i),
          (t.memoizedState = s.state),
          (e = t.child))
        : (e = Dl(e, t, i)),
      e
    );
  }
  function Yd(e, t, l, a) {
    return ai(), (t.flags |= 256), xt(e, t, l, a), t.child;
  }
  var Rc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Tc(e) {
    return { baseLanes: e, cachePool: Co() };
  }
  function kc(e, t, l) {
    return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= Ft), e;
  }
  function qd(e, t, l) {
    var a = t.pendingProps,
      i = !1,
      s = (t.flags & 128) !== 0,
      c;
    if (
      ((c = s) ||
        (c =
          e !== null && e.memoizedState === null ? !1 : (ot.current & 2) !== 0),
      c && ((i = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (De) {
        if ((i ? Pl(t) : ea(), De)) {
          var o = et,
            g;
          if ((g = o)) {
            e: {
              for (g = o, o = cl; g.nodeType !== 8; ) {
                if (!o) {
                  o = null;
                  break e;
                }
                if (((g = il(g.nextSibling)), g === null)) {
                  o = null;
                  break e;
                }
              }
              o = g;
            }
            o !== null
              ? ((t.memoizedState = {
                  dehydrated: o,
                  treeContext: _a !== null ? { id: Al, overflow: El } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (g = zt(18, null, null, 0)),
                (g.stateNode = o),
                (g.return = t),
                (t.child = g),
                (Et = t),
                (et = null),
                (g = !0))
              : (g = !1);
          }
          g || za(t);
        }
        if (
          ((o = t.memoizedState),
          o !== null && ((o = o.dehydrated), o !== null))
        )
          return hu(o) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        kl(t);
      }
      return (
        (o = a.children),
        (a = a.fallback),
        i
          ? (ea(),
            (i = t.mode),
            (o = Ls({ mode: "hidden", children: o }, i)),
            (a = Da(a, i, l, null)),
            (o.return = t),
            (a.return = t),
            (o.sibling = a),
            (t.child = o),
            (i = t.child),
            (i.memoizedState = Tc(l)),
            (i.childLanes = kc(e, c, l)),
            (t.memoizedState = Rc),
            a)
          : (Pl(t), Dc(t, o))
      );
    }
    if (
      ((g = e.memoizedState), g !== null && ((o = g.dehydrated), o !== null))
    ) {
      if (s)
        t.flags & 256
          ? (Pl(t), (t.flags &= -257), (t = _c(e, t, l)))
          : t.memoizedState !== null
            ? (ea(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (ea(),
              (i = a.fallback),
              (o = t.mode),
              (a = Ls({ mode: "visible", children: a.children }, o)),
              (i = Da(i, o, l, null)),
              (i.flags |= 2),
              (a.return = t),
              (i.return = t),
              (a.sibling = i),
              (t.child = a),
              mn(t, e.child, null, l),
              (a = t.child),
              (a.memoizedState = Tc(l)),
              (a.childLanes = kc(e, c, l)),
              (t.memoizedState = Rc),
              (t = i));
      else if ((Pl(t), hu(o))) {
        if (((c = o.nextSibling && o.nextSibling.dataset), c)) var E = c.dgst;
        (c = E),
          (a = Error(u(419))),
          (a.stack = ""),
          (a.digest = c),
          ni({ value: a, source: null, stack: null }),
          (t = _c(e, t, l));
      } else if (
        (ft || ii(e, t, l, !1), (c = (l & e.childLanes) !== 0), ft || c)
      ) {
        if (
          ((c = Ge),
          c !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : V(a)),
            (a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== g.retryLane))
        )
          throw ((g.retryLane = a), ln(e, a), Yt(c, e, a), _d);
        o.data === "$?" || Wc(), (t = _c(e, t, l));
      } else
        o.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = g.treeContext),
            (et = il(o.nextSibling)),
            (Et = t),
            (De = !0),
            (Oa = null),
            (cl = !1),
            e !== null &&
              ((Jt[$t++] = Al),
              (Jt[$t++] = El),
              (Jt[$t++] = _a),
              (Al = e.id),
              (El = e.overflow),
              (_a = t)),
            (t = Dc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? (ea(),
        (i = a.fallback),
        (o = t.mode),
        (g = e.child),
        (E = g.sibling),
        (a = wl(g, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = g.subtreeFlags & 65011712),
        E !== null ? (i = wl(E, i)) : ((i = Da(i, o, l, null)), (i.flags |= 2)),
        (i.return = t),
        (a.return = t),
        (a.sibling = i),
        (t.child = a),
        (a = i),
        (i = t.child),
        (o = e.child.memoizedState),
        o === null
          ? (o = Tc(l))
          : ((g = o.cachePool),
            g !== null
              ? ((E = ut._currentValue),
                (g = g.parent !== E ? { parent: E, pool: E } : g))
              : (g = Co()),
            (o = { baseLanes: o.baseLanes | l, cachePool: g })),
        (i.memoizedState = o),
        (i.childLanes = kc(e, c, l)),
        (t.memoizedState = Rc),
        a)
      : (Pl(t),
        (l = e.child),
        (e = l.sibling),
        (l = wl(l, { mode: "visible", children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [e]), (t.flags |= 16)) : c.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function Dc(e, t) {
    return (
      (t = Ls({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ls(e, t) {
    return (
      (e = zt(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function _c(e, t, l) {
    return (
      mn(t, e.child, null, l),
      (e = Dc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Gd(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Wr(e.return, t, l);
  }
  function Mc(e, t, l, a, i) {
    var s = e.memoizedState;
    s === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: i,
        })
      : ((s.isBackwards = t),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = a),
        (s.tail = l),
        (s.tailMode = i));
  }
  function Qd(e, t, l) {
    var a = t.pendingProps,
      i = a.revealOrder,
      s = a.tail;
    if ((xt(e, t, a.children, l), (a = ot.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Gd(e, l, t);
          else if (e.tag === 19) Gd(e, l, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      a &= 1;
    }
    switch ((K(ot, a), i)) {
      case "forwards":
        for (l = t.child, i = null; l !== null; )
          (e = l.alternate),
            e !== null && _s(e) === null && (i = l),
            (l = l.sibling);
        (l = i),
          l === null
            ? ((i = t.child), (t.child = null))
            : ((i = l.sibling), (l.sibling = null)),
          Mc(t, !1, i, l, s);
        break;
      case "backwards":
        for (l = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && _s(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = l), (l = i), (i = e);
        }
        Mc(t, !0, l, null, s);
        break;
      case "together":
        Mc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Dl(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (ia |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((ii(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (
        e = t.child, l = wl(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (l = l.sibling = wl(e, e.pendingProps)),
          (l.return = t);
      l.sibling = null;
    }
    return t.child;
  }
  function Oc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && xs(e)));
  }
  function t1(e, t, l) {
    switch (t.tag) {
      case 3:
        qe(t, t.stateNode.containerInfo),
          Jl(t, ut, e.memoizedState.cache),
          ai();
        break;
      case 27:
      case 5:
        Yl(t);
        break;
      case 4:
        qe(t, t.stateNode.containerInfo);
        break;
      case 10:
        Jl(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (Pl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? qd(e, t, l)
              : (Pl(t), (e = Dl(e, t, l)), e !== null ? e.sibling : null);
        Pl(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (ii(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          i)
        ) {
          if (a) return Qd(e, t, l);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          K(ot, ot.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Ld(e, t, l);
      case 24:
        Jl(t, ut, e.memoizedState.cache);
    }
    return Dl(e, t, l);
  }
  function Vd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) ft = !0;
      else {
        if (!Oc(e, l) && (t.flags & 128) === 0) return (ft = !1), t1(e, t, l);
        ft = (e.flags & 131072) !== 0;
      }
    else (ft = !1), De && (t.flags & 1048576) !== 0 && yo(t, gs, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType,
            i = a._init;
          if (((a = i(a._payload)), (t.type = a), typeof a == "function"))
            Qr(a)
              ? ((e = Ya(a, e)), (t.tag = 1), (t = Hd(null, t, a, e, l)))
              : ((t.tag = 0), (t = Cc(null, t, a, e, l)));
          else {
            if (a != null) {
              if (((i = a.$$typeof), i === P)) {
                (t.tag = 11), (t = Md(null, t, a, e, l));
                break e;
              } else if (i === je) {
                (t.tag = 14), (t = Od(null, t, a, e, l));
                break e;
              }
            }
            throw ((t = vt(a) || a), Error(u(306, t, "")));
          }
        }
        return t;
      case 0:
        return Cc(e, t, t.type, t.pendingProps, l);
      case 1:
        return (a = t.type), (i = Ya(a, t.pendingProps)), Hd(e, t, a, i, l);
      case 3:
        e: {
          if ((qe(t, t.stateNode.containerInfo), e === null))
            throw Error(u(387));
          a = t.pendingProps;
          var s = t.memoizedState;
          (i = s.element), ac(e, t), fi(t, a, null, l);
          var c = t.memoizedState;
          if (
            ((a = c.cache),
            Jl(t, ut, a),
            a !== s.cache && Fr(t, [ut], l, !0),
            di(),
            (a = c.element),
            s.isDehydrated)
          )
            if (
              ((s = { element: a, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
            ) {
              t = Yd(e, t, a, l);
              break e;
            } else if (a !== i) {
              (i = Zt(Error(u(424)), t)), ni(i), (t = Yd(e, t, a, l));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                et = il(e.firstChild),
                  Et = t,
                  De = !0,
                  Oa = null,
                  cl = !0,
                  l = Nd(t, null, a, l),
                  t.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((ai(), a === i)) {
              t = Dl(e, t, l);
              break e;
            }
            xt(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          zs(e, t),
          e === null
            ? (l = $f(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : De ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = Ws(fe.current).createElement(l)),
                (a[G] = t),
                (a[le] = e),
                bt(a, l, e),
                We(a),
                (t.stateNode = a))
            : (t.memoizedState = $f(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Yl(t),
          e === null &&
            De &&
            ((a = t.stateNode = Zf(t.type, t.pendingProps, fe.current)),
            (Et = t),
            (cl = !0),
            (i = et),
            ua(t.type) ? ((mu = i), (et = il(a.firstChild))) : (et = i)),
          xt(e, t, t.pendingProps.children, l),
          zs(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            De &&
            ((i = a = et) &&
              ((a = T1(a, t.type, t.pendingProps, cl)),
              a !== null
                ? ((t.stateNode = a),
                  (Et = t),
                  (et = il(a.firstChild)),
                  (cl = !1),
                  (i = !0))
                : (i = !1)),
            i || za(t)),
          Yl(t),
          (i = t.type),
          (s = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (a = s.children),
          ou(i, s) ? (a = null) : c !== null && ou(i, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((i = uc(e, t, Km, null, null, l)), (Oi._currentValue = i)),
          zs(e, t),
          xt(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            De &&
            ((e = l = et) &&
              ((l = k1(l, t.pendingProps, cl)),
              l !== null
                ? ((t.stateNode = l), (Et = t), (et = null), (e = !0))
                : (e = !1)),
            e || za(t)),
          null
        );
      case 13:
        return qd(e, t, l);
      case 4:
        return (
          qe(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = mn(t, null, a, l)) : xt(e, t, a, l),
          t.child
        );
      case 11:
        return Md(e, t, t.type, t.pendingProps, l);
      case 7:
        return xt(e, t, t.pendingProps, l), t.child;
      case 8:
        return xt(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return xt(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          Jl(t, t.type, a.value),
          xt(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (i = t.type._context),
          (a = t.pendingProps.children),
          Ba(t),
          (i = jt(i)),
          (a = a(i)),
          (t.flags |= 1),
          xt(e, t, a, l),
          t.child
        );
      case 14:
        return Od(e, t, t.type, t.pendingProps, l);
      case 15:
        return zd(e, t, t.type, t.pendingProps, l);
      case 19:
        return Qd(e, t, l);
      case 31:
        return (
          (a = t.pendingProps),
          (l = t.mode),
          (a = { mode: a.mode, children: a.children }),
          e === null
            ? ((l = Ls(a, l)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l))
            : ((l = wl(e.child, a)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l)),
          t
        );
      case 22:
        return Ld(e, t, l);
      case 24:
        return (
          Ba(t),
          (a = jt(ut)),
          e === null
            ? ((i = ec()),
              i === null &&
                ((i = Ge),
                (s = Ir()),
                (i.pooledCache = s),
                s.refCount++,
                s !== null && (i.pooledCacheLanes |= l),
                (i = s)),
              (t.memoizedState = { parent: a, cache: i }),
              lc(t),
              Jl(t, ut, i))
            : ((e.lanes & l) !== 0 && (ac(e, t), fi(t, null, null, l), di()),
              (i = e.memoizedState),
              (s = t.memoizedState),
              i.parent !== a
                ? ((i = { parent: a, cache: a }),
                  (t.memoizedState = i),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = i),
                  Jl(t, ut, a))
                : ((a = s.cache),
                  Jl(t, ut, a),
                  a !== i.cache && Fr(t, [ut], l, !0))),
          xt(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  function _l(e) {
    e.flags |= 4;
  }
  function Xd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !eh(t))) {
      if (
        ((t = Wt.current),
        t !== null &&
          ((Ce & 4194048) === Ce
            ? ul !== null
            : ((Ce & 62914560) !== Ce && (Ce & 536870912) === 0) || t !== ul))
      )
        throw ((ui = tc), Ro);
      e.flags |= 8192;
    }
  }
  function Bs(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? qn() : 536870912), (e.lanes |= t), (bn |= t));
  }
  function vi(e, t) {
    if (!De)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), (t = t.sibling);
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (l |= i.lanes | i.childLanes),
          (a |= i.subtreeFlags & 65011712),
          (a |= i.flags & 65011712),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (l |= i.lanes | i.childLanes),
          (a |= i.subtreeFlags),
          (a |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= a), (e.childLanes = l), t;
  }
  function l1(e, t, l) {
    var a = t.pendingProps;
    switch ((Kr(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ie(t), null;
      case 1:
        return Ie(t), null;
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Rl(ut),
          xl(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (li(t)
              ? _l(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), So())),
          Ie(t),
          null
        );
      case 26:
        return (
          (l = t.memoizedState),
          e === null
            ? (_l(t),
              l !== null ? (Ie(t), Xd(t, l)) : (Ie(t), (t.flags &= -16777217)))
            : l
              ? l !== e.memoizedState
                ? (_l(t), Ie(t), Xd(t, l))
                : (Ie(t), (t.flags &= -16777217))
              : (e.memoizedProps !== a && _l(t), Ie(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        Xa(t), (l = fe.current);
        var i = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== a && _l(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(u(166));
            return Ie(t), null;
          }
          (e = re.current),
            li(t) ? jo(t) : ((e = Zf(i, a, l)), (t.stateNode = e), _l(t));
        }
        return Ie(t), null;
      case 5:
        if ((Xa(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && _l(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(u(166));
            return Ie(t), null;
          }
          if (((e = re.current), li(t))) jo(t);
          else {
            switch (((i = Ws(fe.current)), e)) {
              case 1:
                e = i.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                e = i.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    e = i.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    e = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l,
                    );
                    break;
                  case "script":
                    (e = i.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (e.multiple = !0)
                        : a.size && (e.size = a.size);
                    break;
                  default:
                    e =
                      typeof a.is == "string"
                        ? i.createElement(l, { is: a.is })
                        : i.createElement(l);
                }
            }
            (e[G] = t), (e[le] = a);
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                (i.child.return = i), (i = i.child);
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break e;
                i = i.return;
              }
              (i.sibling.return = i.return), (i = i.sibling);
            }
            t.stateNode = e;
            e: switch ((bt(e, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!a.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && _l(t);
          }
        }
        return Ie(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && _l(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(u(166));
          if (((e = fe.current), li(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (i = Et),
              i !== null)
            )
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            (e[G] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Hf(e.nodeValue, l)
              )),
              e || za(t);
          } else (e = Ws(e).createTextNode(a)), (e[G] = t), (t.stateNode = e);
        }
        return Ie(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = li(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(u(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(u(317));
              i[G] = t;
            } else
              ai(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Ie(t), (i = !1);
          } else
            (i = So()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = i),
              (i = !0);
          if (!i) return t.flags & 256 ? (kl(t), t) : (kl(t), null);
        }
        if ((kl(t), (t.flags & 128) !== 0)) return (t.lanes = l), t;
        if (
          ((l = a !== null), (e = e !== null && e.memoizedState !== null), l)
        ) {
          (a = t.child),
            (i = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (i = a.alternate.memoizedState.cachePool.pool);
          var s = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (s = a.memoizedState.cachePool.pool),
            s !== i && (a.flags |= 2048);
        }
        return (
          l !== e && l && (t.child.flags |= 8192),
          Bs(t, t.updateQueue),
          Ie(t),
          null
        );
      case 4:
        return xl(), e === null && iu(t.stateNode.containerInfo), Ie(t), null;
      case 10:
        return Rl(t.type), Ie(t), null;
      case 19:
        if ((W(ot), (i = t.memoizedState), i === null)) return Ie(t), null;
        if (((a = (t.flags & 128) !== 0), (s = i.rendering), s === null))
          if (a) vi(i, !1);
          else {
            if (tt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((s = _s(e)), s !== null)) {
                  for (
                    t.flags |= 128,
                      vi(i, !1),
                      e = s.updateQueue,
                      t.updateQueue = e,
                      Bs(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;

                  )
                    vo(l, e), (l = l.sibling);
                  return K(ot, (ot.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Gt() > Ys &&
              ((t.flags |= 128), (a = !0), vi(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = _s(s)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Bs(t, e),
                vi(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !s.alternate &&
                  !De)
              )
                return Ie(t), null;
            } else
              2 * Gt() - i.renderingStartTime > Ys &&
                l !== 536870912 &&
                ((t.flags |= 128), (a = !0), vi(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : ((e = i.last),
              e !== null ? (e.sibling = s) : (t.child = s),
              (i.last = s));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Gt()),
            (t.sibling = null),
            (e = ot.current),
            K(ot, a ? (e & 1) | 2 : e & 1),
            t)
          : (Ie(t), null);
      case 22:
      case 23:
        return (
          kl(t),
          rc(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ie(t),
          (l = t.updateQueue),
          l !== null && Bs(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && W(Ua),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Rl(ut),
          Ie(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function a1(e, t) {
    switch ((Kr(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Rl(ut),
          xl(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Xa(t), null;
      case 13:
        if (
          (kl(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(u(340));
          ai();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return W(ot), null;
      case 4:
        return xl(), null;
      case 10:
        return Rl(t.type), null;
      case 22:
      case 23:
        return (
          kl(t),
          rc(),
          e !== null && W(Ua),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return Rl(ut), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Zd(e, t) {
    switch ((Kr(t), t.tag)) {
      case 3:
        Rl(ut), xl();
        break;
      case 26:
      case 27:
      case 5:
        Xa(t);
        break;
      case 4:
        xl();
        break;
      case 13:
        kl(t);
        break;
      case 19:
        W(ot);
        break;
      case 10:
        Rl(t.type);
        break;
      case 22:
      case 23:
        kl(t), rc(), e !== null && W(Ua);
        break;
      case 24:
        Rl(ut);
    }
  }
  function yi(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        l = i;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var s = l.create,
              c = l.inst;
            (a = s()), (c.destroy = a);
          }
          l = l.next;
        } while (l !== i);
      }
    } catch (o) {
      Ye(t, t.return, o);
    }
  }
  function ta(e, t, l) {
    try {
      var a = t.updateQueue,
        i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        a = s;
        do {
          if ((a.tag & e) === e) {
            var c = a.inst,
              o = c.destroy;
            if (o !== void 0) {
              (c.destroy = void 0), (i = t);
              var g = l,
                E = o;
              try {
                E();
              } catch (D) {
                Ye(i, g, D);
              }
            }
          }
          a = a.next;
        } while (a !== s);
      }
    } catch (D) {
      Ye(t, t.return, D);
    }
  }
  function Kd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Oo(t, l);
      } catch (a) {
        Ye(e, e.return, a);
      }
    }
  }
  function Jd(e, t, l) {
    (l.props = Ya(e.type, e.memoizedProps)), (l.state = e.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      Ye(e, t, a);
    }
  }
  function ji(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (i) {
      Ye(e, t, i);
    }
  }
  function ol(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (i) {
          Ye(e, t, i);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (i) {
          Ye(e, t, i);
        }
      else l.current = null;
  }
  function $d(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (i) {
      Ye(e, e.return, i);
    }
  }
  function zc(e, t, l) {
    try {
      var a = e.stateNode;
      w1(a, e.type, l, t), (a[le] = t);
    } catch (i) {
      Ye(e, e.return, i);
    }
  }
  function Wd(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && ua(e.type)) ||
      e.tag === 4
    );
  }
  function Lc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Wd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && ua(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Bc(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = $s));
    else if (
      a !== 4 &&
      (a === 27 && ua(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Bc(e, t, l), e = e.sibling; e !== null; )
        Bc(e, t, l), (e = e.sibling);
  }
  function Us(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (
      a !== 4 &&
      (a === 27 && ua(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (Us(e, t, l), e = e.sibling; e !== null; )
        Us(e, t, l), (e = e.sibling);
  }
  function Fd(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      bt(t, a, l), (t[G] = e), (t[le] = l);
    } catch (s) {
      Ye(e, e.return, s);
    }
  }
  var Ml = !1,
    at = !1,
    Uc = !1,
    Id = typeof WeakSet == "function" ? WeakSet : Set,
    ht = null;
  function n1(e, t) {
    if (((e = e.containerInfo), (cu = lr), (e = co(e)), Lr(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var i = a.anchorOffset,
              s = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, s.nodeType;
            } catch {
              l = null;
              break e;
            }
            var c = 0,
              o = -1,
              g = -1,
              E = 0,
              D = 0,
              O = e,
              C = null;
            t: for (;;) {
              for (
                var R;
                O !== l || (i !== 0 && O.nodeType !== 3) || (o = c + i),
                  O !== s || (a !== 0 && O.nodeType !== 3) || (g = c + a),
                  O.nodeType === 3 && (c += O.nodeValue.length),
                  (R = O.firstChild) !== null;

              )
                (C = O), (O = R);
              for (;;) {
                if (O === e) break t;
                if (
                  (C === l && ++E === i && (o = c),
                  C === s && ++D === a && (g = c),
                  (R = O.nextSibling) !== null)
                )
                  break;
                (O = C), (C = O.parentNode);
              }
              O = R;
            }
            l = o === -1 || g === -1 ? null : { start: o, end: g };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      uu = { focusedElem: e, selectionRange: l }, lr = !1, ht = t;
      ht !== null;

    )
      if (
        ((t = ht), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = t), (ht = e);
      else
        for (; ht !== null; ) {
          switch (((t = ht), (s = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && s !== null) {
                (e = void 0),
                  (l = t),
                  (i = s.memoizedProps),
                  (s = s.memoizedState),
                  (a = l.stateNode);
                try {
                  var de = Ya(l.type, i, l.elementType === l.type);
                  (e = a.getSnapshotBeforeUpdate(de, s)),
                    (a.__reactInternalSnapshotBeforeUpdate = e);
                } catch (ce) {
                  Ye(l, l.return, ce);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  fu(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      fu(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(u(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (ht = e);
            break;
          }
          ht = t.return;
        }
  }
  function Pd(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        la(e, l), a & 4 && yi(5, l);
        break;
      case 1:
        if ((la(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (c) {
              Ye(l, l.return, c);
            }
          else {
            var i = Ya(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              Ye(l, l.return, c);
            }
          }
        a & 64 && Kd(l), a & 512 && ji(l, l.return);
        break;
      case 3:
        if ((la(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Oo(e, t);
          } catch (c) {
            Ye(l, l.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Fd(l);
      case 26:
      case 5:
        la(e, l), t === null && a & 4 && $d(l), a & 512 && ji(l, l.return);
        break;
      case 12:
        la(e, l);
        break;
      case 13:
        la(e, l),
          a & 4 && lf(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = h1.bind(null, l)), D1(e, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Ml), !a)) {
          (t = (t !== null && t.memoizedState !== null) || at), (i = Ml);
          var s = at;
          (Ml = a),
            (at = t) && !s ? aa(e, l, (l.subtreeFlags & 8772) !== 0) : la(e, l),
            (Ml = i),
            (at = s);
        }
        break;
      case 30:
        break;
      default:
        la(e, l);
    }
  }
  function ef(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), ef(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Na(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Je = null,
    kt = !1;
  function Ol(e, t, l) {
    for (l = l.child; l !== null; ) tf(e, t, l), (l = l.sibling);
  }
  function tf(e, t, l) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(Qt, l);
      } catch {}
    switch (l.tag) {
      case 26:
        at || ol(l, t),
          Ol(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        at || ol(l, t);
        var a = Je,
          i = kt;
        ua(l.type) && ((Je = l.stateNode), (kt = !1)),
          Ol(e, t, l),
          ki(l.stateNode),
          (Je = a),
          (kt = i);
        break;
      case 5:
        at || ol(l, t);
      case 6:
        if (
          ((a = Je),
          (i = kt),
          (Je = null),
          Ol(e, t, l),
          (Je = a),
          (kt = i),
          Je !== null)
        )
          if (kt)
            try {
              (Je.nodeType === 9
                ? Je.body
                : Je.nodeName === "HTML"
                  ? Je.ownerDocument.body
                  : Je
              ).removeChild(l.stateNode);
            } catch (s) {
              Ye(l, t, s);
            }
          else
            try {
              Je.removeChild(l.stateNode);
            } catch (s) {
              Ye(l, t, s);
            }
        break;
      case 18:
        Je !== null &&
          (kt
            ? ((e = Je),
              Vf(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                l.stateNode,
              ),
              Ui(e))
            : Vf(Je, l.stateNode));
        break;
      case 4:
        (a = Je),
          (i = kt),
          (Je = l.stateNode.containerInfo),
          (kt = !0),
          Ol(e, t, l),
          (Je = a),
          (kt = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        at || ta(2, l, t), at || ta(4, l, t), Ol(e, t, l);
        break;
      case 1:
        at ||
          (ol(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && Jd(l, t, a)),
          Ol(e, t, l);
        break;
      case 21:
        Ol(e, t, l);
        break;
      case 22:
        (at = (a = at) || l.memoizedState !== null), Ol(e, t, l), (at = a);
        break;
      default:
        Ol(e, t, l);
    }
  }
  function lf(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ui(e);
      } catch (l) {
        Ye(t, t.return, l);
      }
  }
  function i1(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Id()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Id()),
          t
        );
      default:
        throw Error(u(435, e.tag));
    }
  }
  function Hc(e, t) {
    var l = i1(e);
    t.forEach(function (a) {
      var i = m1.bind(null, e, a);
      l.has(a) || (l.add(a), a.then(i, i));
    });
  }
  function Lt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var i = l[a],
          s = e,
          c = t,
          o = c;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (ua(o.type)) {
                (Je = o.stateNode), (kt = !1);
                break e;
              }
              break;
            case 5:
              (Je = o.stateNode), (kt = !1);
              break e;
            case 3:
            case 4:
              (Je = o.stateNode.containerInfo), (kt = !0);
              break e;
          }
          o = o.return;
        }
        if (Je === null) throw Error(u(160));
        tf(s, c, i),
          (Je = null),
          (kt = !1),
          (s = i.alternate),
          s !== null && (s.return = null),
          (i.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) af(t, e), (t = t.sibling);
  }
  var nl = null;
  function af(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Lt(t, e),
          Bt(e),
          a & 4 && (ta(3, e, e.return), yi(3, e), ta(5, e, e.return));
        break;
      case 1:
        Lt(t, e),
          Bt(e),
          a & 512 && (at || l === null || ol(l, l.return)),
          a & 64 &&
            Ml &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var i = nl;
        if (
          (Lt(t, e),
          Bt(e),
          a & 512 && (at || l === null || ol(l, l.return)),
          a & 4)
        ) {
          var s = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  (a = e.type),
                    (l = e.memoizedProps),
                    (i = i.ownerDocument || i);
                  t: switch (a) {
                    case "title":
                      (s = i.getElementsByTagName("title")[0]),
                        (!s ||
                          s[ja] ||
                          s[G] ||
                          s.namespaceURI === "http://www.w3.org/2000/svg" ||
                          s.hasAttribute("itemprop")) &&
                          ((s = i.createElement(a)),
                          i.head.insertBefore(
                            s,
                            i.querySelector("head > title"),
                          )),
                        bt(s, a, l),
                        (s[G] = e),
                        We(s),
                        (a = s);
                      break e;
                    case "link":
                      var c = If("link", "href", i).get(a + (l.href || ""));
                      if (c) {
                        for (var o = 0; o < c.length; o++)
                          if (
                            ((s = c[o]),
                            s.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              s.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              s.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              s.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            c.splice(o, 1);
                            break t;
                          }
                      }
                      (s = i.createElement(a)),
                        bt(s, a, l),
                        i.head.appendChild(s);
                      break;
                    case "meta":
                      if (
                        (c = If("meta", "content", i).get(
                          a + (l.content || ""),
                        ))
                      ) {
                        for (o = 0; o < c.length; o++)
                          if (
                            ((s = c[o]),
                            s.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              s.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              s.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              s.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              s.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            c.splice(o, 1);
                            break t;
                          }
                      }
                      (s = i.createElement(a)),
                        bt(s, a, l),
                        i.head.appendChild(s);
                      break;
                    default:
                      throw Error(u(468, a));
                  }
                  (s[G] = e), We(s), (a = s);
                }
                e.stateNode = a;
              } else Pf(i, e.type, e.stateNode);
            else e.stateNode = Ff(i, a, e.memoizedProps);
          else
            s !== a
              ? (s === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : s.count--,
                a === null
                  ? Pf(i, e.type, e.stateNode)
                  : Ff(i, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                zc(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        Lt(t, e),
          Bt(e),
          a & 512 && (at || l === null || ol(l, l.return)),
          l !== null && a & 4 && zc(e, e.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (Lt(t, e),
          Bt(e),
          a & 512 && (at || l === null || ol(l, l.return)),
          e.flags & 32)
        ) {
          i = e.stateNode;
          try {
            rl(i, "");
          } catch (R) {
            Ye(e, e.return, R);
          }
        }
        a & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), zc(e, i, l !== null ? l.memoizedProps : i)),
          a & 1024 && (Uc = !0);
        break;
      case 6:
        if ((Lt(t, e), Bt(e), a & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          (a = e.memoizedProps), (l = e.stateNode);
          try {
            l.nodeValue = a;
          } catch (R) {
            Ye(e, e.return, R);
          }
        }
        break;
      case 3:
        if (
          ((Ps = null),
          (i = nl),
          (nl = Fs(t.containerInfo)),
          Lt(t, e),
          (nl = i),
          Bt(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ui(t.containerInfo);
          } catch (R) {
            Ye(e, e.return, R);
          }
        Uc && ((Uc = !1), nf(e));
        break;
      case 4:
        (a = nl),
          (nl = Fs(e.stateNode.containerInfo)),
          Lt(t, e),
          Bt(e),
          (nl = a);
        break;
      case 12:
        Lt(t, e), Bt(e);
        break;
      case 13:
        Lt(t, e),
          Bt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Xc = Gt()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Hc(e, a)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var g = l !== null && l.memoizedState !== null,
          E = Ml,
          D = at;
        if (
          ((Ml = E || i),
          (at = D || g),
          Lt(t, e),
          (at = D),
          (Ml = E),
          Bt(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (l === null || g || Ml || at || qa(e)),
              l = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                g = l = t;
                try {
                  if (((s = g.stateNode), i))
                    (c = s.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    o = g.stateNode;
                    var O = g.memoizedProps.style,
                      C =
                        O != null && O.hasOwnProperty("display")
                          ? O.display
                          : null;
                    o.style.display =
                      C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (R) {
                  Ye(g, g.return, R);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                g = t;
                try {
                  g.stateNode.nodeValue = i ? "" : g.memoizedProps;
                } catch (R) {
                  Ye(g, g.return, R);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), (t = t.return);
            }
            l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Hc(e, l))));
        break;
      case 19:
        Lt(t, e),
          Bt(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Hc(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Lt(t, e), Bt(e);
    }
  }
  function Bt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (Wd(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(u(160));
        switch (l.tag) {
          case 27:
            var i = l.stateNode,
              s = Lc(e);
            Us(e, s, i);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (rl(c, ""), (l.flags &= -33));
            var o = Lc(e);
            Us(e, o, c);
            break;
          case 3:
          case 4:
            var g = l.stateNode.containerInfo,
              E = Lc(e);
            Bc(e, E, g);
            break;
          default:
            throw Error(u(161));
        }
      } catch (D) {
        Ye(e, e.return, D);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function nf(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        nf(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function la(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Pd(e, t.alternate, t), (t = t.sibling);
  }
  function qa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ta(4, t, t.return), qa(t);
          break;
        case 1:
          ol(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Jd(t, t.return, l),
            qa(t);
          break;
        case 27:
          ki(t.stateNode);
        case 26:
        case 5:
          ol(t, t.return), qa(t);
          break;
        case 22:
          t.memoizedState === null && qa(t);
          break;
        case 30:
          qa(t);
          break;
        default:
          qa(t);
      }
      e = e.sibling;
    }
  }
  function aa(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        i = e,
        s = t,
        c = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          aa(i, s, l), yi(4, s);
          break;
        case 1:
          if (
            (aa(i, s, l),
            (a = s),
            (i = a.stateNode),
            typeof i.componentDidMount == "function")
          )
            try {
              i.componentDidMount();
            } catch (E) {
              Ye(a, a.return, E);
            }
          if (((a = s), (i = a.updateQueue), i !== null)) {
            var o = a.stateNode;
            try {
              var g = i.shared.hiddenCallbacks;
              if (g !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < g.length; i++)
                  Mo(g[i], o);
            } catch (E) {
              Ye(a, a.return, E);
            }
          }
          l && c & 64 && Kd(s), ji(s, s.return);
          break;
        case 27:
          Fd(s);
        case 26:
        case 5:
          aa(i, s, l), l && a === null && c & 4 && $d(s), ji(s, s.return);
          break;
        case 12:
          aa(i, s, l);
          break;
        case 13:
          aa(i, s, l), l && c & 4 && lf(i, s);
          break;
        case 22:
          s.memoizedState === null && aa(i, s, l), ji(s, s.return);
          break;
        case 30:
          break;
        default:
          aa(i, s, l);
      }
      t = t.sibling;
    }
  }
  function Yc(e, t) {
    var l = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && si(l));
  }
  function qc(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && si(e));
  }
  function dl(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) sf(e, t, l, a), (t = t.sibling);
  }
  function sf(e, t, l, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        dl(e, t, l, a), i & 2048 && yi(9, t);
        break;
      case 1:
        dl(e, t, l, a);
        break;
      case 3:
        dl(e, t, l, a),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && si(e)));
        break;
      case 12:
        if (i & 2048) {
          dl(e, t, l, a), (e = t.stateNode);
          try {
            var s = t.memoizedProps,
              c = s.id,
              o = s.onPostCommit;
            typeof o == "function" &&
              o(
                c,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (g) {
            Ye(t, t.return, g);
          }
        } else dl(e, t, l, a);
        break;
      case 13:
        dl(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        (s = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? s._visibility & 2
              ? dl(e, t, l, a)
              : Ni(e, t)
            : s._visibility & 2
              ? dl(e, t, l, a)
              : ((s._visibility |= 2),
                gn(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
          i & 2048 && Yc(c, t);
        break;
      case 24:
        dl(e, t, l, a), i & 2048 && qc(t.alternate, t);
        break;
      default:
        dl(e, t, l, a);
    }
  }
  function gn(e, t, l, a, i) {
    for (i = i && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var s = e,
        c = t,
        o = l,
        g = a,
        E = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          gn(s, c, o, g, i), yi(8, c);
          break;
        case 23:
          break;
        case 22:
          var D = c.stateNode;
          c.memoizedState !== null
            ? D._visibility & 2
              ? gn(s, c, o, g, i)
              : Ni(s, c)
            : ((D._visibility |= 2), gn(s, c, o, g, i)),
            i && E & 2048 && Yc(c.alternate, c);
          break;
        case 24:
          gn(s, c, o, g, i), i && E & 2048 && qc(c.alternate, c);
          break;
        default:
          gn(s, c, o, g, i);
      }
      t = t.sibling;
    }
  }
  function Ni(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          i = a.flags;
        switch (a.tag) {
          case 22:
            Ni(l, a), i & 2048 && Yc(a.alternate, a);
            break;
          case 24:
            Ni(l, a), i & 2048 && qc(a.alternate, a);
            break;
          default:
            Ni(l, a);
        }
        t = t.sibling;
      }
  }
  var Si = 8192;
  function xn(e) {
    if (e.subtreeFlags & Si)
      for (e = e.child; e !== null; ) rf(e), (e = e.sibling);
  }
  function rf(e) {
    switch (e.tag) {
      case 26:
        xn(e),
          e.flags & Si &&
            e.memoizedState !== null &&
            V1(nl, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        xn(e);
        break;
      case 3:
      case 4:
        var t = nl;
        (nl = Fs(e.stateNode.containerInfo)), xn(e), (nl = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Si), (Si = 16777216), xn(e), (Si = t))
            : xn(e));
        break;
      default:
        xn(e);
    }
  }
  function cf(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function wi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (ht = a), of(a, e);
        }
      cf(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) uf(e), (e = e.sibling);
  }
  function uf(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        wi(e), e.flags & 2048 && ta(9, e, e.return);
        break;
      case 3:
        wi(e);
        break;
      case 12:
        wi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Hs(e))
          : wi(e);
        break;
      default:
        wi(e);
    }
  }
  function Hs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (ht = a), of(a, e);
        }
      cf(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          ta(8, t, t.return), Hs(t);
          break;
        case 22:
          (l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Hs(t));
          break;
        default:
          Hs(t);
      }
      e = e.sibling;
    }
  }
  function of(e, t) {
    for (; ht !== null; ) {
      var l = ht;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ta(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          si(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (ht = a);
      else
        e: for (l = e; ht !== null; ) {
          a = ht;
          var i = a.sibling,
            s = a.return;
          if ((ef(a), a === l)) {
            ht = null;
            break e;
          }
          if (i !== null) {
            (i.return = s), (ht = i);
            break e;
          }
          ht = s;
        }
    }
  }
  var s1 = {
      getCacheForType: function (e) {
        var t = jt(ut),
          l = t.data.get(e);
        return l === void 0 && ((l = e()), t.data.set(e, l)), l;
      },
    },
    r1 = typeof WeakMap == "function" ? WeakMap : Map,
    Oe = 0,
    Ge = null,
    ve = null,
    Ce = 0,
    ze = 0,
    Ut = null,
    na = !1,
    pn = !1,
    Gc = !1,
    zl = 0,
    tt = 0,
    ia = 0,
    Ga = 0,
    Qc = 0,
    Ft = 0,
    bn = 0,
    Ai = null,
    Dt = null,
    Vc = !1,
    Xc = 0,
    Ys = 1 / 0,
    qs = null,
    sa = null,
    pt = 0,
    ra = null,
    vn = null,
    yn = 0,
    Zc = 0,
    Kc = null,
    df = null,
    Ei = 0,
    Jc = null;
  function Ht() {
    if ((Oe & 2) !== 0 && Ce !== 0) return Ce & -Ce;
    if (k.T !== null) {
      var e = rn;
      return e !== 0 ? e : tu();
    }
    return Ze();
  }
  function ff() {
    Ft === 0 && (Ft = (Ce & 536870912) === 0 || De ? Yn() : 536870912);
    var e = Wt.current;
    return e !== null && (e.flags |= 32), Ft;
  }
  function Yt(e, t, l) {
    ((e === Ge && (ze === 2 || ze === 9)) || e.cancelPendingCommit !== null) &&
      (jn(e, 0), ca(e, Ce, Ft, !1)),
      ql(e, l),
      ((Oe & 2) === 0 || e !== Ge) &&
        (e === Ge &&
          ((Oe & 2) === 0 && (Ga |= l), tt === 4 && ca(e, Ce, Ft, !1)),
        fl(e));
  }
  function hf(e, t, l) {
    if ((Oe & 6) !== 0) throw Error(u(327));
    var a = (!l && (t & 124) === 0 && (t & e.expiredLanes) === 0) || va(e, t),
      i = a ? o1(e, t) : Fc(e, t, !0),
      s = a;
    do {
      if (i === 0) {
        pn && !a && ca(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), s && !c1(l))) {
          (i = Fc(e, t, !1)), (s = !1);
          continue;
        }
        if (i === 2) {
          if (((s = t), e.errorRecoveryDisabledLanes & s)) var c = 0;
          else
            (c = e.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            t = c;
            e: {
              var o = e;
              i = Ai;
              var g = o.current.memoizedState.isDehydrated;
              if ((g && (jn(o, c).flags |= 256), (c = Fc(o, c, !1)), c !== 2)) {
                if (Gc && !g) {
                  (o.errorRecoveryDisabledLanes |= s), (Ga |= s), (i = 4);
                  break e;
                }
                (s = Dt),
                  (Dt = i),
                  s !== null && (Dt === null ? (Dt = s) : Dt.push.apply(Dt, s));
              }
              i = c;
            }
            if (((s = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          jn(e, 0), ca(e, t, 0, !0);
          break;
        }
        e: {
          switch (((a = e), (s = i), s)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ca(a, t, Ft, !na);
              break e;
            case 2:
              Dt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((t & 62914560) === t && ((i = Xc + 300 - Gt()), 10 < i)) {
            if ((ca(a, t, Ft, !na), Ja(a, 0, !0) !== 0)) break e;
            a.timeoutHandle = Gf(
              mf.bind(null, a, l, Dt, qs, Vc, t, Ft, Ga, bn, na, s, 2, -0, 0),
              i,
            );
            break e;
          }
          mf(a, l, Dt, qs, Vc, t, Ft, Ga, bn, na, s, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    fl(e);
  }
  function mf(e, t, l, a, i, s, c, o, g, E, D, O, C, R) {
    if (
      ((e.timeoutHandle = -1),
      (O = t.subtreeFlags),
      (O & 8192 || (O & 16785408) === 16785408) &&
        ((Mi = { stylesheets: null, count: 0, unsuspend: Q1 }),
        rf(t),
        (O = X1()),
        O !== null))
    ) {
      (e.cancelPendingCommit = O(
        jf.bind(null, e, t, s, l, a, i, c, o, g, D, 1, C, R),
      )),
        ca(e, s, c, !E);
      return;
    }
    jf(e, t, s, l, a, i, c, o, g);
  }
  function c1(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var i = l[a],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Ot(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        (l.return = t), (t = l);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function ca(e, t, l, a) {
    (t &= ~Qc),
      (t &= ~Ga),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes);
    for (var i = t; 0 < i; ) {
      var s = 31 - wt(i),
        c = 1 << s;
      (a[s] = -1), (i &= ~c);
    }
    l !== 0 && p(e, l, t);
  }
  function Gs() {
    return (Oe & 6) === 0 ? (Ci(0), !1) : !0;
  }
  function $c() {
    if (ve !== null) {
      if (ze === 0) var e = ve.return;
      else (e = ve), (Cl = La = null), fc(e), (hn = null), (pi = 0), (e = ve);
      for (; e !== null; ) Zd(e.alternate, e), (e = e.return);
      ve = null;
    }
  }
  function jn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && ((e.timeoutHandle = -1), E1(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      $c(),
      (Ge = e),
      (ve = l = wl(e.current, null)),
      (Ce = t),
      (ze = 0),
      (Ut = null),
      (na = !1),
      (pn = va(e, t)),
      (Gc = !1),
      (bn = Ft = Qc = Ga = ia = tt = 0),
      (Dt = Ai = null),
      (Vc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - wt(a),
          s = 1 << i;
        (t |= e[i]), (a &= ~s);
      }
    return (zl = t), os(), l;
  }
  function gf(e, t) {
    (pe = null),
      (k.H = Ts),
      t === ci || t === vs
        ? ((t = Do()), (ze = 3))
        : t === Ro
          ? ((t = Do()), (ze = 4))
          : (ze =
              t === _d
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Ut = t),
      ve === null && ((tt = 1), Os(e, Zt(t, e.current)));
  }
  function xf() {
    var e = k.H;
    return (k.H = Ts), e === null ? Ts : e;
  }
  function pf() {
    var e = k.A;
    return (k.A = s1), e;
  }
  function Wc() {
    (tt = 4),
      na || ((Ce & 4194048) !== Ce && Wt.current !== null) || (pn = !0),
      ((ia & 134217727) === 0 && (Ga & 134217727) === 0) ||
        Ge === null ||
        ca(Ge, Ce, Ft, !1);
  }
  function Fc(e, t, l) {
    var a = Oe;
    Oe |= 2;
    var i = xf(),
      s = pf();
    (Ge !== e || Ce !== t) && ((qs = null), jn(e, t)), (t = !1);
    var c = tt;
    e: do
      try {
        if (ze !== 0 && ve !== null) {
          var o = ve,
            g = Ut;
          switch (ze) {
            case 8:
              $c(), (c = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Wt.current === null && (t = !0);
              var E = ze;
              if (((ze = 0), (Ut = null), Nn(e, o, g, E), l && pn)) {
                c = 0;
                break e;
              }
              break;
            default:
              (E = ze), (ze = 0), (Ut = null), Nn(e, o, g, E);
          }
        }
        u1(), (c = tt);
        break;
      } catch (D) {
        gf(e, D);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Cl = La = null),
      (Oe = a),
      (k.H = i),
      (k.A = s),
      ve === null && ((Ge = null), (Ce = 0), os()),
      c
    );
  }
  function u1() {
    for (; ve !== null; ) bf(ve);
  }
  function o1(e, t) {
    var l = Oe;
    Oe |= 2;
    var a = xf(),
      i = pf();
    Ge !== e || Ce !== t
      ? ((qs = null), (Ys = Gt() + 500), jn(e, t))
      : (pn = va(e, t));
    e: do
      try {
        if (ze !== 0 && ve !== null) {
          t = ve;
          var s = Ut;
          t: switch (ze) {
            case 1:
              (ze = 0), (Ut = null), Nn(e, t, s, 1);
              break;
            case 2:
            case 9:
              if (To(s)) {
                (ze = 0), (Ut = null), vf(t);
                break;
              }
              (t = function () {
                (ze !== 2 && ze !== 9) || Ge !== e || (ze = 7), fl(e);
              }),
                s.then(t, t);
              break e;
            case 3:
              ze = 7;
              break e;
            case 4:
              ze = 5;
              break e;
            case 7:
              To(s)
                ? ((ze = 0), (Ut = null), vf(t))
                : ((ze = 0), (Ut = null), Nn(e, t, s, 7));
              break;
            case 5:
              var c = null;
              switch (ve.tag) {
                case 26:
                  c = ve.memoizedState;
                case 5:
                case 27:
                  var o = ve;
                  if (!c || eh(c)) {
                    (ze = 0), (Ut = null);
                    var g = o.sibling;
                    if (g !== null) ve = g;
                    else {
                      var E = o.return;
                      E !== null ? ((ve = E), Qs(E)) : (ve = null);
                    }
                    break t;
                  }
              }
              (ze = 0), (Ut = null), Nn(e, t, s, 5);
              break;
            case 6:
              (ze = 0), (Ut = null), Nn(e, t, s, 6);
              break;
            case 8:
              $c(), (tt = 6);
              break e;
            default:
              throw Error(u(462));
          }
        }
        d1();
        break;
      } catch (D) {
        gf(e, D);
      }
    while (!0);
    return (
      (Cl = La = null),
      (k.H = a),
      (k.A = i),
      (Oe = l),
      ve !== null ? 0 : ((Ge = null), (Ce = 0), os(), tt)
    );
  }
  function d1() {
    for (; ve !== null && !br(); ) bf(ve);
  }
  function bf(e) {
    var t = Vd(e.alternate, e, zl);
    (e.memoizedProps = e.pendingProps), t === null ? Qs(e) : (ve = t);
  }
  function vf(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ud(l, t, t.pendingProps, t.type, void 0, Ce);
        break;
      case 11:
        t = Ud(l, t, t.pendingProps, t.type.render, t.ref, Ce);
        break;
      case 5:
        fc(t);
      default:
        Zd(l, t), (t = ve = vo(t, zl)), (t = Vd(l, t, zl));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Qs(e) : (ve = t);
  }
  function Nn(e, t, l, a) {
    (Cl = La = null), fc(t), (hn = null), (pi = 0);
    var i = t.return;
    try {
      if (e1(e, i, t, l, Ce)) {
        (tt = 1), Os(e, Zt(l, e.current)), (ve = null);
        return;
      }
    } catch (s) {
      if (i !== null) throw ((ve = i), s);
      (tt = 1), Os(e, Zt(l, e.current)), (ve = null);
      return;
    }
    t.flags & 32768
      ? (De || a === 1
          ? (e = !0)
          : pn || (Ce & 536870912) !== 0
            ? (e = !1)
            : ((na = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Wt.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        yf(t, e))
      : Qs(t);
  }
  function Qs(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        yf(t, na);
        return;
      }
      e = t.return;
      var l = l1(t.alternate, t, zl);
      if (l !== null) {
        ve = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ve = t;
        return;
      }
      ve = t = e;
    } while (t !== null);
    tt === 0 && (tt = 5);
  }
  function yf(e, t) {
    do {
      var l = a1(e.alternate, e);
      if (l !== null) {
        (l.flags &= 32767), (ve = l);
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ve = e;
        return;
      }
      ve = e = l;
    } while (e !== null);
    (tt = 6), (ve = null);
  }
  function jf(e, t, l, a, i, s, c, o, g) {
    e.cancelPendingCommit = null;
    do Vs();
    while (pt !== 0);
    if ((Oe & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      if (
        ((s = t.lanes | t.childLanes),
        (s |= qr),
        Gl(e, l, s, c, o, g),
        e === Ge && ((ve = Ge = null), (Ce = 0)),
        (vn = t),
        (ra = e),
        (yn = l),
        (Zc = s),
        (Kc = i),
        (df = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            g1(Za, function () {
              return Ef(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = k.T), (k.T = null), (i = $.p), ($.p = 2), (c = Oe), (Oe |= 4);
        try {
          n1(e, t, l);
        } finally {
          (Oe = c), ($.p = i), (k.T = a);
        }
      }
      (pt = 1), Nf(), Sf(), wf();
    }
  }
  function Nf() {
    if (pt === 1) {
      pt = 0;
      var e = ra,
        t = vn,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        (l = k.T), (k.T = null);
        var a = $.p;
        $.p = 2;
        var i = Oe;
        Oe |= 4;
        try {
          af(t, e);
          var s = uu,
            c = co(e.containerInfo),
            o = s.focusedElem,
            g = s.selectionRange;
          if (
            c !== o &&
            o &&
            o.ownerDocument &&
            ro(o.ownerDocument.documentElement, o)
          ) {
            if (g !== null && Lr(o)) {
              var E = g.start,
                D = g.end;
              if ((D === void 0 && (D = E), "selectionStart" in o))
                (o.selectionStart = E),
                  (o.selectionEnd = Math.min(D, o.value.length));
              else {
                var O = o.ownerDocument || document,
                  C = (O && O.defaultView) || window;
                if (C.getSelection) {
                  var R = C.getSelection(),
                    de = o.textContent.length,
                    ce = Math.min(g.start, de),
                    Ue = g.end === void 0 ? ce : Math.min(g.end, de);
                  !R.extend && ce > Ue && ((c = Ue), (Ue = ce), (ce = c));
                  var N = so(o, ce),
                    y = so(o, Ue);
                  if (
                    N &&
                    y &&
                    (R.rangeCount !== 1 ||
                      R.anchorNode !== N.node ||
                      R.anchorOffset !== N.offset ||
                      R.focusNode !== y.node ||
                      R.focusOffset !== y.offset)
                  ) {
                    var w = O.createRange();
                    w.setStart(N.node, N.offset),
                      R.removeAllRanges(),
                      ce > Ue
                        ? (R.addRange(w), R.extend(y.node, y.offset))
                        : (w.setEnd(y.node, y.offset), R.addRange(w));
                  }
                }
              }
            }
            for (O = [], R = o; (R = R.parentNode); )
              R.nodeType === 1 &&
                O.push({ element: R, left: R.scrollLeft, top: R.scrollTop });
            for (
              typeof o.focus == "function" && o.focus(), o = 0;
              o < O.length;
              o++
            ) {
              var M = O[o];
              (M.element.scrollLeft = M.left), (M.element.scrollTop = M.top);
            }
          }
          (lr = !!cu), (uu = cu = null);
        } finally {
          (Oe = i), ($.p = a), (k.T = l);
        }
      }
      (e.current = t), (pt = 2);
    }
  }
  function Sf() {
    if (pt === 2) {
      pt = 0;
      var e = ra,
        t = vn,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        (l = k.T), (k.T = null);
        var a = $.p;
        $.p = 2;
        var i = Oe;
        Oe |= 4;
        try {
          Pd(e, t.alternate, t);
        } finally {
          (Oe = i), ($.p = a), (k.T = l);
        }
      }
      pt = 3;
    }
  }
  function wf() {
    if (pt === 4 || pt === 3) {
      (pt = 0), vr();
      var e = ra,
        t = vn,
        l = yn,
        a = df;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (pt = 5)
        : ((pt = 0), (vn = ra = null), Af(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (sa = null),
        oe(l),
        (t = t.stateNode),
        dt && typeof dt.onCommitFiberRoot == "function")
      )
        try {
          dt.onCommitFiberRoot(Qt, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = k.T), (i = $.p), ($.p = 2), (k.T = null);
        try {
          for (var s = e.onRecoverableError, c = 0; c < a.length; c++) {
            var o = a[c];
            s(o.value, { componentStack: o.stack });
          }
        } finally {
          (k.T = t), ($.p = i);
        }
      }
      (yn & 3) !== 0 && Vs(),
        fl(e),
        (i = e.pendingLanes),
        (l & 4194090) !== 0 && (i & 42) !== 0
          ? e === Jc
            ? Ei++
            : ((Ei = 0), (Jc = e))
          : (Ei = 0),
        Ci(0);
    }
  }
  function Af(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), si(t)));
  }
  function Vs(e) {
    return Nf(), Sf(), wf(), Ef();
  }
  function Ef() {
    if (pt !== 5) return !1;
    var e = ra,
      t = Zc;
    Zc = 0;
    var l = oe(yn),
      a = k.T,
      i = $.p;
    try {
      ($.p = 32 > l ? 32 : l), (k.T = null), (l = Kc), (Kc = null);
      var s = ra,
        c = yn;
      if (((pt = 0), (vn = ra = null), (yn = 0), (Oe & 6) !== 0))
        throw Error(u(331));
      var o = Oe;
      if (
        ((Oe |= 4),
        uf(s.current),
        sf(s, s.current, c, l),
        (Oe = o),
        Ci(0, !1),
        dt && typeof dt.onPostCommitFiberRoot == "function")
      )
        try {
          dt.onPostCommitFiberRoot(Qt, s);
        } catch {}
      return !0;
    } finally {
      ($.p = i), (k.T = a), Af(e, t);
    }
  }
  function Cf(e, t, l) {
    (t = Zt(l, t)),
      (t = Ec(e.stateNode, t, 2)),
      (e = Fl(e, t, 2)),
      e !== null && (ql(e, 2), fl(e));
  }
  function Ye(e, t, l) {
    if (e.tag === 3) Cf(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Cf(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (sa === null || !sa.has(a)))
          ) {
            (e = Zt(l, e)),
              (l = kd(2)),
              (a = Fl(t, l, 2)),
              a !== null && (Dd(l, a, t, e), ql(a, 2), fl(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ic(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new r1();
      var i = new Set();
      a.set(t, i);
    } else (i = a.get(t)), i === void 0 && ((i = new Set()), a.set(t, i));
    i.has(l) ||
      ((Gc = !0), i.add(l), (e = f1.bind(null, e, t, l)), t.then(e, e));
  }
  function f1(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      Ge === e &&
        (Ce & l) === l &&
        (tt === 4 || (tt === 3 && (Ce & 62914560) === Ce && 300 > Gt() - Xc)
          ? (Oe & 2) === 0 && jn(e, 0)
          : (Qc |= l),
        bn === Ce && (bn = 0)),
      fl(e);
  }
  function Rf(e, t) {
    t === 0 && (t = qn()), (e = ln(e, t)), e !== null && (ql(e, t), fl(e));
  }
  function h1(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), Rf(e, l);
  }
  function m1(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          i = e.memoizedState;
        i !== null && (l = i.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    a !== null && a.delete(t), Rf(e, l);
  }
  function g1(e, t) {
    return zn(e, t);
  }
  var Xs = null,
    Sn = null,
    Pc = !1,
    Zs = !1,
    eu = !1,
    Qa = 0;
  function fl(e) {
    e !== Sn &&
      e.next === null &&
      (Sn === null ? (Xs = Sn = e) : (Sn = Sn.next = e)),
      (Zs = !0),
      Pc || ((Pc = !0), p1());
  }
  function Ci(e, t) {
    if (!eu && Zs) {
      eu = !0;
      do
        for (var l = !1, a = Xs; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var s = 0;
            else {
              var c = a.suspendedLanes,
                o = a.pingedLanes;
              (s = (1 << (31 - wt(42 | e) + 1)) - 1),
                (s &= i & ~(c & ~o)),
                (s = s & 201326741 ? (s & 201326741) | 1 : s ? s | 2 : 0);
            }
            s !== 0 && ((l = !0), _f(a, s));
          } else
            (s = Ce),
              (s = Ja(
                a,
                a === Ge ? s : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (s & 3) === 0 || va(a, s) || ((l = !0), _f(a, s));
          a = a.next;
        }
      while (l);
      eu = !1;
    }
  }
  function x1() {
    Tf();
  }
  function Tf() {
    Zs = Pc = !1;
    var e = 0;
    Qa !== 0 && (A1() && (e = Qa), (Qa = 0));
    for (var t = Gt(), l = null, a = Xs; a !== null; ) {
      var i = a.next,
        s = kf(a, t);
      s === 0
        ? ((a.next = null),
          l === null ? (Xs = i) : (l.next = i),
          i === null && (Sn = l))
        : ((l = a), (e !== 0 || (s & 3) !== 0) && (Zs = !0)),
        (a = i);
    }
    Ci(e);
  }
  function kf(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        i = e.expirationTimes,
        s = e.pendingLanes & -62914561;
      0 < s;

    ) {
      var c = 31 - wt(s),
        o = 1 << c,
        g = i[c];
      g === -1
        ? ((o & l) === 0 || (o & a) !== 0) && (i[c] = Hn(o, t))
        : g <= t && (e.expiredLanes |= o),
        (s &= ~o);
    }
    if (
      ((t = Ge),
      (l = Ce),
      (l = Ja(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (ze === 2 || ze === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Ln(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || va(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && Ln(a), oe(l))) {
        case 2:
        case 8:
          l = Bn;
          break;
        case 32:
          l = Za;
          break;
        case 268435456:
          l = Un;
          break;
        default:
          l = Za;
      }
      return (
        (a = Df.bind(null, e)),
        (l = zn(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && Ln(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Df(e, t) {
    if (pt !== 0 && pt !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var l = e.callbackNode;
    if (Vs() && e.callbackNode !== l) return null;
    var a = Ce;
    return (
      (a = Ja(
        e,
        e === Ge ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (hf(e, a, t),
          kf(e, Gt()),
          e.callbackNode != null && e.callbackNode === l
            ? Df.bind(null, e)
            : null)
    );
  }
  function _f(e, t) {
    if (Vs()) return null;
    hf(e, t, !0);
  }
  function p1() {
    C1(function () {
      (Oe & 6) !== 0 ? zn(Wi, x1) : Tf();
    });
  }
  function tu() {
    return Qa === 0 && (Qa = Yn()), Qa;
  }
  function Mf(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Zl("" + e);
  }
  function Of(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function b1(e, t, l, a, i) {
    if (t === "submit" && l && l.stateNode === i) {
      var s = Mf((i[le] || null).action),
        c = a.submitter;
      c &&
        ((t = (t = c[le] || null)
          ? Mf(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((s = t), (c = null)));
      var o = new rs("action", "action", null, a, i);
      e.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Qa !== 0) {
                  var g = c ? Of(i, c) : new FormData(i);
                  jc(
                    l,
                    { pending: !0, data: g, method: i.method, action: s },
                    null,
                    g,
                  );
                }
              } else
                typeof s == "function" &&
                  (o.preventDefault(),
                  (g = c ? Of(i, c) : new FormData(i)),
                  jc(
                    l,
                    { pending: !0, data: g, method: i.method, action: s },
                    s,
                    g,
                  ));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var lu = 0; lu < Yr.length; lu++) {
    var au = Yr[lu],
      v1 = au.toLowerCase(),
      y1 = au[0].toUpperCase() + au.slice(1);
    al(v1, "on" + y1);
  }
  al(fo, "onAnimationEnd"),
    al(ho, "onAnimationIteration"),
    al(mo, "onAnimationStart"),
    al("dblclick", "onDoubleClick"),
    al("focusin", "onFocus"),
    al("focusout", "onBlur"),
    al(Bm, "onTransitionRun"),
    al(Um, "onTransitionStart"),
    al(Hm, "onTransitionCancel"),
    al(go, "onTransitionEnd"),
    At("onMouseEnter", ["mouseout", "mouseover"]),
    At("onMouseLeave", ["mouseout", "mouseover"]),
    At("onPointerEnter", ["pointerout", "pointerover"]),
    At("onPointerLeave", ["pointerout", "pointerover"]),
    yl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    yl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    yl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    yl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    yl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    yl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var Ri =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    j1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ri),
    );
  function zf(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        i = a.event;
      a = a.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var o = a[c],
              g = o.instance,
              E = o.currentTarget;
            if (((o = o.listener), g !== s && i.isPropagationStopped()))
              break e;
            (s = o), (i.currentTarget = E);
            try {
              s(i);
            } catch (D) {
              Ms(D);
            }
            (i.currentTarget = null), (s = g);
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((o = a[c]),
              (g = o.instance),
              (E = o.currentTarget),
              (o = o.listener),
              g !== s && i.isPropagationStopped())
            )
              break e;
            (s = o), (i.currentTarget = E);
            try {
              s(i);
            } catch (D) {
              Ms(D);
            }
            (i.currentTarget = null), (s = g);
          }
      }
    }
  }
  function ye(e, t) {
    var l = t[Ke];
    l === void 0 && (l = t[Ke] = new Set());
    var a = e + "__bubble";
    l.has(a) || (Lf(t, e, 2, !1), l.add(a));
  }
  function nu(e, t, l) {
    var a = 0;
    t && (a |= 4), Lf(l, e, a, t);
  }
  var Ks = "_reactListening" + Math.random().toString(36).slice(2);
  function iu(e) {
    if (!e[Ks]) {
      (e[Ks] = !0),
        Ii.forEach(function (l) {
          l !== "selectionchange" && (j1.has(l) || nu(l, !1, e), nu(l, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ks] || ((t[Ks] = !0), nu("selectionchange", !1, t));
    }
  }
  function Lf(e, t, l, a) {
    switch (sh(t)) {
      case 2:
        var i = J1;
        break;
      case 8:
        i = $1;
        break;
      default:
        i = vu;
    }
    (l = i.bind(null, t, l, e)),
      (i = void 0),
      !Cr ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      a
        ? i !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: i })
          : e.addEventListener(t, l, !0)
        : i !== void 0
          ? e.addEventListener(t, l, { passive: i })
          : e.addEventListener(t, l, !1);
  }
  function su(e, t, l, a, i) {
    var s = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var o = a.stateNode.containerInfo;
          if (o === i) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var g = c.tag;
              if ((g === 3 || g === 4) && c.stateNode.containerInfo === i)
                return;
              c = c.return;
            }
          for (; o !== null; ) {
            if (((c = Ql(o)), c === null)) return;
            if (((g = c.tag), g === 5 || g === 6 || g === 26 || g === 27)) {
              a = s = c;
              continue e;
            }
            o = o.parentNode;
          }
        }
        a = a.return;
      }
    Xt(function () {
      var E = s,
        D = X(l),
        O = [];
      e: {
        var C = xo.get(e);
        if (C !== void 0) {
          var R = rs,
            de = e;
          switch (e) {
            case "keypress":
              if (is(l) === 0) break e;
            case "keydown":
            case "keyup":
              R = gm;
              break;
            case "focusin":
              (de = "focus"), (R = Dr);
              break;
            case "focusout":
              (de = "blur"), (R = Dr);
              break;
            case "beforeblur":
            case "afterblur":
              R = Dr;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              R = Vu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              R = am;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              R = bm;
              break;
            case fo:
            case ho:
            case mo:
              R = sm;
              break;
            case go:
              R = ym;
              break;
            case "scroll":
            case "scrollend":
              R = tm;
              break;
            case "wheel":
              R = Nm;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = cm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              R = Zu;
              break;
            case "toggle":
            case "beforetoggle":
              R = wm;
          }
          var ce = (t & 4) !== 0,
            Ue = !ce && (e === "scroll" || e === "scrollend"),
            N = ce ? (C !== null ? C + "Capture" : null) : C;
          ce = [];
          for (var y = E, w; y !== null; ) {
            var M = y;
            if (
              ((w = M.stateNode),
              (M = M.tag),
              (M !== 5 && M !== 26 && M !== 27) ||
                w === null ||
                N === null ||
                ((M = Ca(y, N)), M != null && ce.push(Ti(y, M, w))),
              Ue)
            )
              break;
            y = y.return;
          }
          0 < ce.length &&
            ((C = new R(C, de, null, l, D)),
            O.push({ event: C, listeners: ce }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((C = e === "mouseover" || e === "pointerover"),
            (R = e === "mouseout" || e === "pointerout"),
            C &&
              l !== Ea &&
              (de = l.relatedTarget || l.fromElement) &&
              (Ql(de) || de[Ve]))
          )
            break e;
          if (
            (R || C) &&
            ((C =
              D.window === D
                ? D
                : (C = D.ownerDocument)
                  ? C.defaultView || C.parentWindow
                  : window),
            R
              ? ((de = l.relatedTarget || l.toElement),
                (R = E),
                (de = de ? Ql(de) : null),
                de !== null &&
                  ((Ue = m(de)),
                  (ce = de.tag),
                  de !== Ue || (ce !== 5 && ce !== 27 && ce !== 6)) &&
                  (de = null))
              : ((R = null), (de = E)),
            R !== de)
          ) {
            if (
              ((ce = Vu),
              (M = "onMouseLeave"),
              (N = "onMouseEnter"),
              (y = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ce = Zu),
                (M = "onPointerLeave"),
                (N = "onPointerEnter"),
                (y = "pointer")),
              (Ue = R == null ? C : Sa(R)),
              (w = de == null ? C : Sa(de)),
              (C = new ce(M, y + "leave", R, l, D)),
              (C.target = Ue),
              (C.relatedTarget = w),
              (M = null),
              Ql(D) === E &&
                ((ce = new ce(N, y + "enter", de, l, D)),
                (ce.target = w),
                (ce.relatedTarget = Ue),
                (M = ce)),
              (Ue = M),
              R && de)
            )
              t: {
                for (ce = R, N = de, y = 0, w = ce; w; w = wn(w)) y++;
                for (w = 0, M = N; M; M = wn(M)) w++;
                for (; 0 < y - w; ) (ce = wn(ce)), y--;
                for (; 0 < w - y; ) (N = wn(N)), w--;
                for (; y--; ) {
                  if (ce === N || (N !== null && ce === N.alternate)) break t;
                  (ce = wn(ce)), (N = wn(N));
                }
                ce = null;
              }
            else ce = null;
            R !== null && Bf(O, C, R, ce, !1),
              de !== null && Ue !== null && Bf(O, Ue, de, ce, !0);
          }
        }
        e: {
          if (
            ((C = E ? Sa(E) : window),
            (R = C.nodeName && C.nodeName.toLowerCase()),
            R === "select" || (R === "input" && C.type === "file"))
          )
            var te = eo;
          else if (Iu(C))
            if (to) te = Om;
            else {
              te = _m;
              var be = Dm;
            }
          else
            (R = C.nodeName),
              !R ||
              R.toLowerCase() !== "input" ||
              (C.type !== "checkbox" && C.type !== "radio")
                ? E && Me(E.elementType) && (te = eo)
                : (te = Mm);
          if (te && (te = te(e, E))) {
            Pu(O, te, l, D);
            break e;
          }
          be && be(e, C, E),
            e === "focusout" &&
              E &&
              C.type === "number" &&
              E.memoizedProps.value != null &&
              Xl(C, "number", C.value);
        }
        switch (((be = E ? Sa(E) : window), e)) {
          case "focusin":
            (Iu(be) || be.contentEditable === "true") &&
              ((Pa = be), (Br = E), (ti = null));
            break;
          case "focusout":
            ti = Br = Pa = null;
            break;
          case "mousedown":
            Ur = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ur = !1), uo(O, l, D);
            break;
          case "selectionchange":
            if (Lm) break;
          case "keydown":
          case "keyup":
            uo(O, l, D);
        }
        var se;
        if (Mr)
          e: {
            switch (e) {
              case "compositionstart":
                var ue = "onCompositionStart";
                break e;
              case "compositionend":
                ue = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ue = "onCompositionUpdate";
                break e;
            }
            ue = void 0;
          }
        else
          Ia
            ? Wu(e, l) && (ue = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (ue = "onCompositionStart");
        ue &&
          (Ku &&
            l.locale !== "ko" &&
            (Ia || ue !== "onCompositionStart"
              ? ue === "onCompositionEnd" && Ia && (se = Gu())
              : ((Kl = D),
                (Rr = "value" in Kl ? Kl.value : Kl.textContent),
                (Ia = !0))),
          (be = Js(E, ue)),
          0 < be.length &&
            ((ue = new Xu(ue, e, null, l, D)),
            O.push({ event: ue, listeners: be }),
            se
              ? (ue.data = se)
              : ((se = Fu(l)), se !== null && (ue.data = se)))),
          (se = Em ? Cm(e, l) : Rm(e, l)) &&
            ((ue = Js(E, "onBeforeInput")),
            0 < ue.length &&
              ((be = new Xu("onBeforeInput", "beforeinput", null, l, D)),
              O.push({ event: be, listeners: ue }),
              (be.data = se))),
          b1(O, e, E, l, D);
      }
      zf(O, t);
    });
  }
  function Ti(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Js(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var i = e,
        s = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          s === null ||
          ((i = Ca(e, l)),
          i != null && a.unshift(Ti(e, i, s)),
          (i = Ca(e, t)),
          i != null && a.push(Ti(e, i, s))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function wn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Bf(e, t, l, a, i) {
    for (var s = t._reactName, c = []; l !== null && l !== a; ) {
      var o = l,
        g = o.alternate,
        E = o.stateNode;
      if (((o = o.tag), g !== null && g === a)) break;
      (o !== 5 && o !== 26 && o !== 27) ||
        E === null ||
        ((g = E),
        i
          ? ((E = Ca(l, s)), E != null && c.unshift(Ti(l, E, g)))
          : i || ((E = Ca(l, s)), E != null && c.push(Ti(l, E, g)))),
        (l = l.return);
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var N1 = /\r\n?/g,
    S1 = /\u0000|\uFFFD/g;
  function Uf(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        N1,
        `
`,
      )
      .replace(S1, "");
  }
  function Hf(e, t) {
    return (t = Uf(t)), Uf(e) === t;
  }
  function $s() {}
  function Be(e, t, l, a, i, s) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || rl(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            rl(e, "" + a);
        break;
      case "className":
        jl(e, "class", a);
        break;
      case "tabIndex":
        jl(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        jl(e, l, a);
        break;
      case "style":
        it(e, a, s);
        break;
      case "data":
        if (t !== "object") {
          jl(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        (a = Zl("" + a)), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof s == "function" &&
            (l === "formAction"
              ? (t !== "input" && Be(e, t, "name", i.name, i, null),
                Be(e, t, "formEncType", i.formEncType, i, null),
                Be(e, t, "formMethod", i.formMethod, i, null),
                Be(e, t, "formTarget", i.formTarget, i, null))
              : (Be(e, t, "encType", i.encType, i, null),
                Be(e, t, "method", i.method, i, null),
                Be(e, t, "target", i.target, i, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        (a = Zl("" + a)), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = $s);
        break;
      case "onScroll":
        a != null && ye("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ye("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(u(61));
          if (((l = a.__html), l != null)) {
            if (i.children != null) throw Error(u(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (l = Zl("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "" + a)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(l, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? e.setAttribute(l, a)
            : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case "popover":
        ye("beforetoggle", e), ye("toggle", e), Wa(e, "popover", a);
        break;
      case "xlinkActuate":
        el(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        el(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        el(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        el(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        el(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        el(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        el(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        el(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        el(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Wa(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Fa.get(l) || l), Wa(e, l, a));
    }
  }
  function ru(e, t, l, a, i, s) {
    switch (l) {
      case "style":
        it(e, a, s);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(u(61));
          if (((l = a.__html), l != null)) {
            if (i.children != null) throw Error(u(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? rl(e, a)
          : (typeof a == "number" || typeof a == "bigint") && rl(e, "" + a);
        break;
      case "onScroll":
        a != null && ye("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ye("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = $s);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Pi.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((i = l.endsWith("Capture")),
              (t = l.slice(2, i ? l.length - 7 : void 0)),
              (s = e[le] || null),
              (s = s != null ? s[l] : null),
              typeof s == "function" && e.removeEventListener(t, s, i),
              typeof a == "function")
            ) {
              typeof s != "function" &&
                s !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, i);
              break e;
            }
            l in e
              ? (e[l] = a)
              : a === !0
                ? e.setAttribute(l, "")
                : Wa(e, l, a);
          }
    }
  }
  function bt(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ye("error", e), ye("load", e);
        var a = !1,
          i = !1,
          s;
        for (s in l)
          if (l.hasOwnProperty(s)) {
            var c = l[s];
            if (c != null)
              switch (s) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, t));
                default:
                  Be(e, t, s, c, l, null);
              }
          }
        i && Be(e, t, "srcSet", l.srcSet, l, null),
          a && Be(e, t, "src", l.src, l, null);
        return;
      case "input":
        ye("invalid", e);
        var o = (s = c = i = null),
          g = null,
          E = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var D = l[a];
            if (D != null)
              switch (a) {
                case "name":
                  i = D;
                  break;
                case "type":
                  c = D;
                  break;
                case "checked":
                  g = D;
                  break;
                case "defaultChecked":
                  E = D;
                  break;
                case "value":
                  s = D;
                  break;
                case "defaultValue":
                  o = D;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (D != null) throw Error(u(137, t));
                  break;
                default:
                  Be(e, t, a, D, l, null);
              }
          }
        ls(e, s, o, g, E, c, i, !1), wa(e);
        return;
      case "select":
        ye("invalid", e), (a = c = s = null);
        for (i in l)
          if (l.hasOwnProperty(i) && ((o = l[i]), o != null))
            switch (i) {
              case "value":
                s = o;
                break;
              case "defaultValue":
                c = o;
                break;
              case "multiple":
                a = o;
              default:
                Be(e, t, i, o, l, null);
            }
        (t = s),
          (l = c),
          (e.multiple = !!a),
          t != null ? Nl(e, !!a, t, !1) : l != null && Nl(e, !!a, l, !0);
        return;
      case "textarea":
        ye("invalid", e), (s = i = a = null);
        for (c in l)
          if (l.hasOwnProperty(c) && ((o = l[c]), o != null))
            switch (c) {
              case "value":
                a = o;
                break;
              case "defaultValue":
                i = o;
                break;
              case "children":
                s = o;
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(u(91));
                break;
              default:
                Be(e, t, c, o, l, null);
            }
        as(e, a, i, s), wa(e);
        return;
      case "option":
        for (g in l)
          if (l.hasOwnProperty(g) && ((a = l[g]), a != null))
            switch (g) {
              case "selected":
                e.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Be(e, t, g, a, l, null);
            }
        return;
      case "dialog":
        ye("beforetoggle", e), ye("toggle", e), ye("cancel", e), ye("close", e);
        break;
      case "iframe":
      case "object":
        ye("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ri.length; a++) ye(Ri[a], e);
        break;
      case "image":
        ye("error", e), ye("load", e);
        break;
      case "details":
        ye("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ye("error", e), ye("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (E in l)
          if (l.hasOwnProperty(E) && ((a = l[E]), a != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, t));
              default:
                Be(e, t, E, a, l, null);
            }
        return;
      default:
        if (Me(t)) {
          for (D in l)
            l.hasOwnProperty(D) &&
              ((a = l[D]), a !== void 0 && ru(e, t, D, a, l, void 0));
          return;
        }
    }
    for (o in l)
      l.hasOwnProperty(o) && ((a = l[o]), a != null && Be(e, t, o, a, l, null));
  }
  function w1(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null,
          s = null,
          c = null,
          o = null,
          g = null,
          E = null,
          D = null;
        for (R in l) {
          var O = l[R];
          if (l.hasOwnProperty(R) && O != null)
            switch (R) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = O;
              default:
                a.hasOwnProperty(R) || Be(e, t, R, null, a, O);
            }
        }
        for (var C in a) {
          var R = a[C];
          if (((O = l[C]), a.hasOwnProperty(C) && (R != null || O != null)))
            switch (C) {
              case "type":
                s = R;
                break;
              case "name":
                i = R;
                break;
              case "checked":
                E = R;
                break;
              case "defaultChecked":
                D = R;
                break;
              case "value":
                c = R;
                break;
              case "defaultValue":
                o = R;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(u(137, t));
                break;
              default:
                R !== O && Be(e, t, C, R, a, O);
            }
        }
        Zn(e, c, o, g, E, D, s, i);
        return;
      case "select":
        R = c = o = C = null;
        for (s in l)
          if (((g = l[s]), l.hasOwnProperty(s) && g != null))
            switch (s) {
              case "value":
                break;
              case "multiple":
                R = g;
              default:
                a.hasOwnProperty(s) || Be(e, t, s, null, a, g);
            }
        for (i in a)
          if (
            ((s = a[i]),
            (g = l[i]),
            a.hasOwnProperty(i) && (s != null || g != null))
          )
            switch (i) {
              case "value":
                C = s;
                break;
              case "defaultValue":
                o = s;
                break;
              case "multiple":
                c = s;
              default:
                s !== g && Be(e, t, i, s, a, g);
            }
        (t = o),
          (l = c),
          (a = R),
          C != null
            ? Nl(e, !!l, C, !1)
            : !!a != !!l &&
              (t != null ? Nl(e, !!l, t, !0) : Nl(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        R = C = null;
        for (o in l)
          if (
            ((i = l[o]),
            l.hasOwnProperty(o) && i != null && !a.hasOwnProperty(o))
          )
            switch (o) {
              case "value":
                break;
              case "children":
                break;
              default:
                Be(e, t, o, null, a, i);
            }
        for (c in a)
          if (
            ((i = a[c]),
            (s = l[c]),
            a.hasOwnProperty(c) && (i != null || s != null))
          )
            switch (c) {
              case "value":
                C = i;
                break;
              case "defaultValue":
                R = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(u(91));
                break;
              default:
                i !== s && Be(e, t, c, i, a, s);
            }
        Mt(e, C, R);
        return;
      case "option":
        for (var de in l)
          if (
            ((C = l[de]),
            l.hasOwnProperty(de) && C != null && !a.hasOwnProperty(de))
          )
            switch (de) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Be(e, t, de, null, a, C);
            }
        for (g in a)
          if (
            ((C = a[g]),
            (R = l[g]),
            a.hasOwnProperty(g) && C !== R && (C != null || R != null))
          )
            switch (g) {
              case "selected":
                e.selected =
                  C && typeof C != "function" && typeof C != "symbol";
                break;
              default:
                Be(e, t, g, C, a, R);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ce in l)
          (C = l[ce]),
            l.hasOwnProperty(ce) &&
              C != null &&
              !a.hasOwnProperty(ce) &&
              Be(e, t, ce, null, a, C);
        for (E in a)
          if (
            ((C = a[E]),
            (R = l[E]),
            a.hasOwnProperty(E) && C !== R && (C != null || R != null))
          )
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(u(137, t));
                break;
              default:
                Be(e, t, E, C, a, R);
            }
        return;
      default:
        if (Me(t)) {
          for (var Ue in l)
            (C = l[Ue]),
              l.hasOwnProperty(Ue) &&
                C !== void 0 &&
                !a.hasOwnProperty(Ue) &&
                ru(e, t, Ue, void 0, a, C);
          for (D in a)
            (C = a[D]),
              (R = l[D]),
              !a.hasOwnProperty(D) ||
                C === R ||
                (C === void 0 && R === void 0) ||
                ru(e, t, D, C, a, R);
          return;
        }
    }
    for (var N in l)
      (C = l[N]),
        l.hasOwnProperty(N) &&
          C != null &&
          !a.hasOwnProperty(N) &&
          Be(e, t, N, null, a, C);
    for (O in a)
      (C = a[O]),
        (R = l[O]),
        !a.hasOwnProperty(O) ||
          C === R ||
          (C == null && R == null) ||
          Be(e, t, O, C, a, R);
  }
  var cu = null,
    uu = null;
  function Ws(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Yf(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function qf(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function ou(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var du = null;
  function A1() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === du
        ? !1
        : ((du = e), !0)
      : ((du = null), !1);
  }
  var Gf = typeof setTimeout == "function" ? setTimeout : void 0,
    E1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Qf = typeof Promise == "function" ? Promise : void 0,
    C1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Qf < "u"
          ? function (e) {
              return Qf.resolve(null).then(e).catch(R1);
            }
          : Gf;
  function R1(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ua(e) {
    return e === "head";
  }
  function Vf(e, t) {
    var l = t,
      a = 0,
      i = 0;
    do {
      var s = l.nextSibling;
      if ((e.removeChild(l), s && s.nodeType === 8))
        if (((l = s.data), l === "/$")) {
          if (0 < a && 8 > a) {
            l = a;
            var c = e.ownerDocument;
            if ((l & 1 && ki(c.documentElement), l & 2 && ki(c.body), l & 4))
              for (l = c.head, ki(l), c = l.firstChild; c; ) {
                var o = c.nextSibling,
                  g = c.nodeName;
                c[ja] ||
                  g === "SCRIPT" ||
                  g === "STYLE" ||
                  (g === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(c),
                  (c = o);
              }
          }
          if (i === 0) {
            e.removeChild(s), Ui(t);
            return;
          }
          i--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? i++
            : (a = l.charCodeAt(0) - 48);
      else a = 0;
      l = s;
    } while (l);
    Ui(t);
  }
  function fu(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          fu(l), Na(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function T1(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var i = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[ja])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((s = e.getAttribute("rel")),
                s === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                s !== i.rel ||
                e.getAttribute("href") !==
                  (i.href == null || i.href === "" ? null : i.href) ||
                e.getAttribute("crossorigin") !==
                  (i.crossOrigin == null ? null : i.crossOrigin) ||
                e.getAttribute("title") !== (i.title == null ? null : i.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((s = e.getAttribute("src")),
                (s !== (i.src == null ? null : i.src) ||
                  e.getAttribute("type") !== (i.type == null ? null : i.type) ||
                  e.getAttribute("crossorigin") !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  s &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var s = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === s) return e;
      } else return e;
      if (((e = il(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function k1(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = il(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function hu(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function D1(e, t) {
    var l = e.ownerDocument;
    if (e.data !== "$?" || l.readyState === "complete") t();
    else {
      var a = function () {
        t(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (e._reactRetry = a);
    }
  }
  function il(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var mu = null;
  function Xf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (t === 0) return e;
          t--;
        } else l === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Zf(e, t, l) {
    switch (((t = Ws(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(u(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(u(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  function ki(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Na(e);
  }
  var It = new Map(),
    Kf = new Set();
  function Fs(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Ll = $.d;
  $.d = { f: _1, r: M1, D: O1, C: z1, L: L1, m: B1, X: H1, S: U1, M: Y1 };
  function _1() {
    var e = Ll.f(),
      t = Gs();
    return e || t;
  }
  function M1(e) {
    var t = Vl(e);
    t !== null && t.tag === 5 && t.type === "form" ? fd(t) : Ll.r(e);
  }
  var An = typeof document > "u" ? null : document;
  function Jf(e, t, l) {
    var a = An;
    if (a && typeof t == "string" && t) {
      var i = Ct(t);
      (i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof l == "string" && (i += '[crossorigin="' + l + '"]'),
        Kf.has(i) ||
          (Kf.add(i),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(i) === null &&
            ((t = a.createElement("link")),
            bt(t, "link", e),
            We(t),
            a.head.appendChild(t)));
    }
  }
  function O1(e) {
    Ll.D(e), Jf("dns-prefetch", e, null);
  }
  function z1(e, t) {
    Ll.C(e, t), Jf("preconnect", e, t);
  }
  function L1(e, t, l) {
    Ll.L(e, t, l);
    var a = An;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + Ct(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((i += '[imagesrcset="' + Ct(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (i += '[imagesizes="' + Ct(l.imageSizes) + '"]'))
        : (i += '[href="' + Ct(e) + '"]');
      var s = i;
      switch (t) {
        case "style":
          s = En(e);
          break;
        case "script":
          s = Cn(e);
      }
      It.has(s) ||
        ((e = S(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l,
        )),
        It.set(s, e),
        a.querySelector(i) !== null ||
          (t === "style" && a.querySelector(Di(s))) ||
          (t === "script" && a.querySelector(_i(s))) ||
          ((t = a.createElement("link")),
          bt(t, "link", e),
          We(t),
          a.head.appendChild(t)));
    }
  }
  function B1(e, t) {
    Ll.m(e, t);
    var l = An;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        i =
          'link[rel="modulepreload"][as="' + Ct(a) + '"][href="' + Ct(e) + '"]',
        s = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Cn(e);
      }
      if (
        !It.has(s) &&
        ((e = S({ rel: "modulepreload", href: e }, t)),
        It.set(s, e),
        l.querySelector(i) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(_i(s))) return;
        }
        (a = l.createElement("link")),
          bt(a, "link", e),
          We(a),
          l.head.appendChild(a);
      }
    }
  }
  function U1(e, t, l) {
    Ll.S(e, t, l);
    var a = An;
    if (a && e) {
      var i = vl(a).hoistableStyles,
        s = En(e);
      t = t || "default";
      var c = i.get(s);
      if (!c) {
        var o = { loading: 0, preload: null };
        if ((c = a.querySelector(Di(s)))) o.loading = 5;
        else {
          (e = S({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = It.get(s)) && gu(e, l);
          var g = (c = a.createElement("link"));
          We(g),
            bt(g, "link", e),
            (g._p = new Promise(function (E, D) {
              (g.onload = E), (g.onerror = D);
            })),
            g.addEventListener("load", function () {
              o.loading |= 1;
            }),
            g.addEventListener("error", function () {
              o.loading |= 2;
            }),
            (o.loading |= 4),
            Is(c, t, a);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: o }),
          i.set(s, c);
      }
    }
  }
  function H1(e, t) {
    Ll.X(e, t);
    var l = An;
    if (l && e) {
      var a = vl(l).hoistableScripts,
        i = Cn(e),
        s = a.get(i);
      s ||
        ((s = l.querySelector(_i(i))),
        s ||
          ((e = S({ src: e, async: !0 }, t)),
          (t = It.get(i)) && xu(e, t),
          (s = l.createElement("script")),
          We(s),
          bt(s, "link", e),
          l.head.appendChild(s)),
        (s = { type: "script", instance: s, count: 1, state: null }),
        a.set(i, s));
    }
  }
  function Y1(e, t) {
    Ll.M(e, t);
    var l = An;
    if (l && e) {
      var a = vl(l).hoistableScripts,
        i = Cn(e),
        s = a.get(i);
      s ||
        ((s = l.querySelector(_i(i))),
        s ||
          ((e = S({ src: e, async: !0, type: "module" }, t)),
          (t = It.get(i)) && xu(e, t),
          (s = l.createElement("script")),
          We(s),
          bt(s, "link", e),
          l.head.appendChild(s)),
        (s = { type: "script", instance: s, count: 1, state: null }),
        a.set(i, s));
    }
  }
  function $f(e, t, l, a) {
    var i = (i = fe.current) ? Fs(i) : null;
    if (!i) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = En(l.href)),
            (l = vl(i).hoistableStyles),
            (a = l.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = En(l.href);
          var s = vl(i).hoistableStyles,
            c = s.get(e);
          if (
            (c ||
              ((i = i.ownerDocument || i),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              s.set(e, c),
              (s = i.querySelector(Di(e))) &&
                !s._p &&
                ((c.instance = s), (c.state.loading = 5)),
              It.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                It.set(e, l),
                s || q1(i, e, l, c.state))),
            t && a === null)
          )
            throw Error(u(528, ""));
          return c;
        }
        if (t && a !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Cn(l)),
              (l = vl(i).hoistableScripts),
              (a = l.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, e));
    }
  }
  function En(e) {
    return 'href="' + Ct(e) + '"';
  }
  function Di(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Wf(e) {
    return S({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function q1(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        bt(t, "link", l),
        We(t),
        e.head.appendChild(t));
  }
  function Cn(e) {
    return '[src="' + Ct(e) + '"]';
  }
  function _i(e) {
    return "script[async]" + e;
  }
  function Ff(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + Ct(l.href) + '"]');
          if (a) return (t.instance = a), We(a), a;
          var i = S({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            We(a),
            bt(a, "style", i),
            Is(a, l.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          i = En(l.href);
          var s = e.querySelector(Di(i));
          if (s) return (t.state.loading |= 4), (t.instance = s), We(s), s;
          (a = Wf(l)),
            (i = It.get(i)) && gu(a, i),
            (s = (e.ownerDocument || e).createElement("link")),
            We(s);
          var c = s;
          return (
            (c._p = new Promise(function (o, g) {
              (c.onload = o), (c.onerror = g);
            })),
            bt(s, "link", a),
            (t.state.loading |= 4),
            Is(s, l.precedence, e),
            (t.instance = s)
          );
        case "script":
          return (
            (s = Cn(l.src)),
            (i = e.querySelector(_i(s)))
              ? ((t.instance = i), We(i), i)
              : ((a = l),
                (i = It.get(s)) && ((a = S({}, l)), xu(a, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement("script")),
                We(i),
                bt(i, "link", a),
                e.head.appendChild(i),
                (t.instance = i))
          );
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Is(a, l.precedence, e));
    return t.instance;
  }
  function Is(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        i = a.length ? a[a.length - 1] : null,
        s = i,
        c = 0;
      c < a.length;
      c++
    ) {
      var o = a[c];
      if (o.dataset.precedence === t) s = o;
      else if (s !== i) break;
    }
    s
      ? s.parentNode.insertBefore(e, s.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function gu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function xu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Ps = null;
  function If(e, t, l) {
    if (Ps === null) {
      var a = new Map(),
        i = (Ps = new Map());
      i.set(l, a);
    } else (i = Ps), (a = i.get(l)), a || ((a = new Map()), i.set(l, a));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), i = 0;
      i < l.length;
      i++
    ) {
      var s = l[i];
      if (
        !(
          s[ja] ||
          s[G] ||
          (e === "link" && s.getAttribute("rel") === "stylesheet")
        ) &&
        s.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = s.getAttribute(t) || "";
        c = e + c;
        var o = a.get(c);
        o ? o.push(s) : a.set(c, [s]);
      }
    }
    return a;
  }
  function Pf(e, t, l) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null,
      );
  }
  function G1(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function eh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Mi = null;
  function Q1() {}
  function V1(e, t, l) {
    if (Mi === null) throw Error(u(475));
    var a = Mi;
    if (
      t.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var i = En(l.href),
          s = e.querySelector(Di(i));
        if (s) {
          (e = s._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (a.count++, (a = er.bind(a)), e.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = s),
            We(s);
          return;
        }
        (s = e.ownerDocument || e),
          (l = Wf(l)),
          (i = It.get(i)) && gu(l, i),
          (s = s.createElement("link")),
          We(s);
        var c = s;
        (c._p = new Promise(function (o, g) {
          (c.onload = o), (c.onerror = g);
        })),
          bt(s, "link", l),
          (t.instance = s);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = er.bind(a)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function X1() {
    if (Mi === null) throw Error(u(475));
    var e = Mi;
    return (
      e.stylesheets && e.count === 0 && pu(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var l = setTimeout(function () {
              if ((e.stylesheets && pu(e, e.stylesheets), e.unsuspend)) {
                var a = e.unsuspend;
                (e.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function er() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) pu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var tr = null;
  function pu(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (tr = new Map()),
        t.forEach(Z1, e),
        (tr = null),
        er.call(e));
  }
  function Z1(e, t) {
    if (!(t.state.loading & 4)) {
      var l = tr.get(e);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), tr.set(e, l);
        for (
          var i = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            s = 0;
          s < i.length;
          s++
        ) {
          var c = i[s];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (l.set(c.dataset.precedence, c), (a = c));
        }
        a && l.set(null, a);
      }
      (i = t.instance),
        (c = i.getAttribute("data-precedence")),
        (s = l.get(c) || a),
        s === a && l.set(null, i),
        l.set(c, i),
        this.count++,
        (a = er.bind(this)),
        i.addEventListener("load", a),
        i.addEventListener("error", a),
        s
          ? s.parentNode.insertBefore(i, s.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Oi = {
    $$typeof: Z,
    Provider: null,
    Consumer: null,
    _currentValue: ne,
    _currentValue2: ne,
    _threadCount: 0,
  };
  function K1(e, t, l, a, i, s, c, o) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Gn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Gn(0)),
      (this.hiddenUpdates = Gn(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = i),
      (this.onCaughtError = s),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = o),
      (this.incompleteTransitions = new Map());
  }
  function th(e, t, l, a, i, s, c, o, g, E, D, O) {
    return (
      (e = new K1(e, t, l, c, o, g, E, O)),
      (t = 1),
      s === !0 && (t |= 24),
      (s = zt(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (t = Ir()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (s.memoizedState = { element: a, isDehydrated: l, cache: t }),
      lc(s),
      e
    );
  }
  function lh(e) {
    return e ? ((e = an), e) : an;
  }
  function ah(e, t, l, a, i, s) {
    (i = lh(i)),
      a.context === null ? (a.context = i) : (a.pendingContext = i),
      (a = Wl(t)),
      (a.payload = { element: l }),
      (s = s === void 0 ? null : s),
      s !== null && (a.callback = s),
      (l = Fl(e, a, t)),
      l !== null && (Yt(l, e, t), oi(l, e, t));
  }
  function nh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function bu(e, t) {
    nh(e, t), (e = e.alternate) && nh(e, t);
  }
  function ih(e) {
    if (e.tag === 13) {
      var t = ln(e, 67108864);
      t !== null && Yt(t, e, 67108864), bu(e, 67108864);
    }
  }
  var lr = !0;
  function J1(e, t, l, a) {
    var i = k.T;
    k.T = null;
    var s = $.p;
    try {
      ($.p = 2), vu(e, t, l, a);
    } finally {
      ($.p = s), (k.T = i);
    }
  }
  function $1(e, t, l, a) {
    var i = k.T;
    k.T = null;
    var s = $.p;
    try {
      ($.p = 8), vu(e, t, l, a);
    } finally {
      ($.p = s), (k.T = i);
    }
  }
  function vu(e, t, l, a) {
    if (lr) {
      var i = yu(a);
      if (i === null) su(e, t, a, ar, l), rh(e, a);
      else if (F1(i, e, t, l, a)) a.stopPropagation();
      else if ((rh(e, a), t & 4 && -1 < W1.indexOf(e))) {
        for (; i !== null; ) {
          var s = Vl(i);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (((s = s.stateNode), s.current.memoizedState.isDehydrated)) {
                  var c = bl(s.pendingLanes);
                  if (c !== 0) {
                    var o = s;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; c; ) {
                      var g = 1 << (31 - wt(c));
                      (o.entanglements[1] |= g), (c &= ~g);
                    }
                    fl(s), (Oe & 6) === 0 && ((Ys = Gt() + 500), Ci(0));
                  }
                }
                break;
              case 13:
                (o = ln(s, 2)), o !== null && Yt(o, s, 2), Gs(), bu(s, 2);
            }
          if (((s = yu(a)), s === null && su(e, t, a, ar, l), s === i)) break;
          i = s;
        }
        i !== null && a.stopPropagation();
      } else su(e, t, a, null, l);
    }
  }
  function yu(e) {
    return (e = X(e)), ju(e);
  }
  var ar = null;
  function ju(e) {
    if (((ar = null), (e = Ql(e)), e !== null)) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = A(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (ar = e), null;
  }
  function sh(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (yr()) {
          case Wi:
            return 2;
          case Bn:
            return 8;
          case Za:
          case jr:
            return 32;
          case Un:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Nu = !1,
    oa = null,
    da = null,
    fa = null,
    zi = new Map(),
    Li = new Map(),
    ha = [],
    W1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function rh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        oa = null;
        break;
      case "dragenter":
      case "dragleave":
        da = null;
        break;
      case "mouseover":
      case "mouseout":
        fa = null;
        break;
      case "pointerover":
      case "pointerout":
        zi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Li.delete(t.pointerId);
    }
  }
  function Bi(e, t, l, a, i, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: s,
          targetContainers: [i],
        }),
        t !== null && ((t = Vl(t)), t !== null && ih(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function F1(e, t, l, a, i) {
    switch (t) {
      case "focusin":
        return (oa = Bi(oa, e, t, l, a, i)), !0;
      case "dragenter":
        return (da = Bi(da, e, t, l, a, i)), !0;
      case "mouseover":
        return (fa = Bi(fa, e, t, l, a, i)), !0;
      case "pointerover":
        var s = i.pointerId;
        return zi.set(s, Bi(zi.get(s) || null, e, t, l, a, i)), !0;
      case "gotpointercapture":
        return (
          (s = i.pointerId), Li.set(s, Bi(Li.get(s) || null, e, t, l, a, i)), !0
        );
    }
    return !1;
  }
  function ch(e) {
    var t = Ql(e.target);
    if (t !== null) {
      var l = m(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = A(l)), t !== null)) {
            (e.blockedOn = t),
              $e(e.priority, function () {
                if (l.tag === 13) {
                  var a = Ht();
                  a = V(a);
                  var i = ln(l, a);
                  i !== null && Yt(i, l, a), bu(l, a);
                }
              });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function nr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = yu(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        (Ea = a), l.target.dispatchEvent(a), (Ea = null);
      } else return (t = Vl(l)), t !== null && ih(t), (e.blockedOn = l), !1;
      t.shift();
    }
    return !0;
  }
  function uh(e, t, l) {
    nr(e) && l.delete(t);
  }
  function I1() {
    (Nu = !1),
      oa !== null && nr(oa) && (oa = null),
      da !== null && nr(da) && (da = null),
      fa !== null && nr(fa) && (fa = null),
      zi.forEach(uh),
      Li.forEach(uh);
  }
  function ir(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Nu ||
        ((Nu = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, I1)));
  }
  var sr = null;
  function oh(e) {
    sr !== e &&
      ((sr = e),
      r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
        sr === e && (sr = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            i = e[t + 2];
          if (typeof a != "function") {
            if (ju(a || l) === null) continue;
            break;
          }
          var s = Vl(l);
          s !== null &&
            (e.splice(t, 3),
            (t -= 3),
            jc(s, { pending: !0, data: i, method: l.method, action: a }, a, i));
        }
      }));
  }
  function Ui(e) {
    function t(g) {
      return ir(g, e);
    }
    oa !== null && ir(oa, e),
      da !== null && ir(da, e),
      fa !== null && ir(fa, e),
      zi.forEach(t),
      Li.forEach(t);
    for (var l = 0; l < ha.length; l++) {
      var a = ha[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < ha.length && ((l = ha[0]), l.blockedOn === null); )
      ch(l), l.blockedOn === null && ha.shift();
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var i = l[a],
          s = l[a + 1],
          c = i[le] || null;
        if (typeof s == "function") c || oh(l);
        else if (c) {
          var o = null;
          if (s && s.hasAttribute("formAction")) {
            if (((i = s), (c = s[le] || null))) o = c.formAction;
            else if (ju(i) !== null) continue;
          } else o = c.action;
          typeof o == "function" ? (l[a + 1] = o) : (l.splice(a, 3), (a -= 3)),
            oh(l);
        }
      }
  }
  function Su(e) {
    this._internalRoot = e;
  }
  (rr.prototype.render = Su.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      var l = t.current,
        a = Ht();
      ah(l, a, e, t, null, null);
    }),
    (rr.prototype.unmount = Su.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          ah(e.current, 2, null, e, null, null), Gs(), (t[Ve] = null);
        }
      });
  function rr(e) {
    this._internalRoot = e;
  }
  rr.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ze();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < ha.length && t !== 0 && t < ha[l].priority; l++);
      ha.splice(l, 0, e), l === 0 && ch(e);
    }
  };
  var dh = d.version;
  if (dh !== "19.1.0") throw Error(u(527, dh, "19.1.0"));
  $.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(u(188))
        : ((e = Object.keys(e).join(",")), Error(u(268, e)));
    return (
      (e = v(t)),
      (e = e !== null ? x(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var P1 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: k,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var cr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!cr.isDisabled && cr.supportsFiber)
      try {
        (Qt = cr.inject(P1)), (dt = cr);
      } catch {}
  }
  return (
    (Yi.createRoot = function (e, t) {
      if (!h(e)) throw Error(u(299));
      var l = !1,
        a = "",
        i = Ed,
        s = Cd,
        c = Rd,
        o = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (o = t.unstable_transitionCallbacks)),
        (t = th(e, 1, !1, null, null, l, a, i, s, c, o, null)),
        (e[Ve] = t.current),
        iu(e),
        new Su(t)
      );
    }),
    (Yi.hydrateRoot = function (e, t, l) {
      if (!h(e)) throw Error(u(299));
      var a = !1,
        i = "",
        s = Ed,
        c = Cd,
        o = Rd,
        g = null,
        E = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (i = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (s = l.onUncaughtError),
          l.onCaughtError !== void 0 && (c = l.onCaughtError),
          l.onRecoverableError !== void 0 && (o = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (g = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (E = l.formState)),
        (t = th(e, 1, !0, t, l ?? null, a, i, s, c, o, g, E)),
        (t.context = lh(null)),
        (l = t.current),
        (a = Ht()),
        (a = V(a)),
        (i = Wl(a)),
        (i.callback = null),
        Fl(l, i, a),
        (l = a),
        (t.current.lanes = l),
        ql(t, l),
        fl(t),
        (e[Ve] = t.current),
        iu(e),
        new rr(t)
      );
    }),
    (Yi.version = "19.1.0"),
    Yi
  );
}
var jh;
function o0() {
  if (jh) return Eu.exports;
  jh = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (d) {
        console.error(d);
      }
  }
  return r(), (Eu.exports = u0()), Eu.exports;
}
var d0 = o0(),
  qi = {},
  Nh;
function f0() {
  if (Nh) return qi;
  (Nh = 1),
    Object.defineProperty(qi, "__esModule", { value: !0 }),
    (qi.parse = A),
    (qi.serialize = x);
  const r = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    d = /^[\u0021-\u003A\u003C-\u007E]*$/,
    f =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    u = /^[\u0020-\u003A\u003D-\u007E]*$/,
    h = Object.prototype.toString,
    m = (() => {
      const L = function () {};
      return (L.prototype = Object.create(null)), L;
    })();
  function A(L, q) {
    const z = new m(),
      J = L.length;
    if (J < 2) return z;
    const Q = (q == null ? void 0 : q.decode) || S;
    let H = 0;
    do {
      const ae = L.indexOf("=", H);
      if (ae === -1) break;
      const Z = L.indexOf(";", H),
        P = Z === -1 ? J : Z;
      if (ae > P) {
        H = L.lastIndexOf(";", ae - 1) + 1;
        continue;
      }
      const F = j(L, H, ae),
        Ne = v(L, ae, F),
        je = L.slice(F, Ne);
      if (z[je] === void 0) {
        let Se = j(L, ae + 1, P),
          we = v(L, P, Se);
        const Qe = Q(L.slice(Se, we));
        z[je] = Qe;
      }
      H = P + 1;
    } while (H < J);
    return z;
  }
  function j(L, q, z) {
    do {
      const J = L.charCodeAt(q);
      if (J !== 32 && J !== 9) return q;
    } while (++q < z);
    return z;
  }
  function v(L, q, z) {
    for (; q > z; ) {
      const J = L.charCodeAt(--q);
      if (J !== 32 && J !== 9) return q + 1;
    }
    return z;
  }
  function x(L, q, z) {
    const J = (z == null ? void 0 : z.encode) || encodeURIComponent;
    if (!r.test(L)) throw new TypeError(`argument name is invalid: ${L}`);
    const Q = J(q);
    if (!d.test(Q)) throw new TypeError(`argument val is invalid: ${q}`);
    let H = L + "=" + Q;
    if (!z) return H;
    if (z.maxAge !== void 0) {
      if (!Number.isInteger(z.maxAge))
        throw new TypeError(`option maxAge is invalid: ${z.maxAge}`);
      H += "; Max-Age=" + z.maxAge;
    }
    if (z.domain) {
      if (!f.test(z.domain))
        throw new TypeError(`option domain is invalid: ${z.domain}`);
      H += "; Domain=" + z.domain;
    }
    if (z.path) {
      if (!u.test(z.path))
        throw new TypeError(`option path is invalid: ${z.path}`);
      H += "; Path=" + z.path;
    }
    if (z.expires) {
      if (!B(z.expires) || !Number.isFinite(z.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${z.expires}`);
      H += "; Expires=" + z.expires.toUTCString();
    }
    if (
      (z.httpOnly && (H += "; HttpOnly"),
      z.secure && (H += "; Secure"),
      z.partitioned && (H += "; Partitioned"),
      z.priority)
    )
      switch (
        typeof z.priority == "string" ? z.priority.toLowerCase() : void 0
      ) {
        case "low":
          H += "; Priority=Low";
          break;
        case "medium":
          H += "; Priority=Medium";
          break;
        case "high":
          H += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${z.priority}`);
      }
    if (z.sameSite)
      switch (
        typeof z.sameSite == "string" ? z.sameSite.toLowerCase() : z.sameSite
      ) {
        case !0:
        case "strict":
          H += "; SameSite=Strict";
          break;
        case "lax":
          H += "; SameSite=Lax";
          break;
        case "none":
          H += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${z.sameSite}`);
      }
    return H;
  }
  function S(L) {
    if (L.indexOf("%") === -1) return L;
    try {
      return decodeURIComponent(L);
    } catch {
      return L;
    }
  }
  function B(L) {
    return h.call(L) === "[object Date]";
  }
  return qi;
}
f0();
/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Sh = "popstate";
function h0(r = {}) {
  function d(u, h) {
    let { pathname: m, search: A, hash: j } = u.location;
    return Mu(
      "",
      { pathname: m, search: A, hash: j },
      (h.state && h.state.usr) || null,
      (h.state && h.state.key) || "default",
    );
  }
  function f(u, h) {
    return typeof h == "string" ? h : Xi(h);
  }
  return g0(d, f, null, r);
}
function Pe(r, d) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(d);
}
function hl(r, d) {
  if (!r) {
    typeof console < "u" && console.warn(d);
    try {
      throw new Error(d);
    } catch {}
  }
}
function m0() {
  return Math.random().toString(36).substring(2, 10);
}
function wh(r, d) {
  return { usr: r.state, key: r.key, idx: d };
}
function Mu(r, d, f = null, u) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...(typeof d == "string" ? _n(d) : d),
    state: f,
    key: (d && d.key) || u || m0(),
  };
}
function Xi({ pathname: r = "/", search: d = "", hash: f = "" }) {
  return (
    d && d !== "?" && (r += d.charAt(0) === "?" ? d : "?" + d),
    f && f !== "#" && (r += f.charAt(0) === "#" ? f : "#" + f),
    r
  );
}
function _n(r) {
  let d = {};
  if (r) {
    let f = r.indexOf("#");
    f >= 0 && ((d.hash = r.substring(f)), (r = r.substring(0, f)));
    let u = r.indexOf("?");
    u >= 0 && ((d.search = r.substring(u)), (r = r.substring(0, u))),
      r && (d.pathname = r);
  }
  return d;
}
function g0(r, d, f, u = {}) {
  let { window: h = document.defaultView, v5Compat: m = !1 } = u,
    A = h.history,
    j = "POP",
    v = null,
    x = S();
  x == null && ((x = 0), A.replaceState({ ...A.state, idx: x }, ""));
  function S() {
    return (A.state || { idx: null }).idx;
  }
  function B() {
    j = "POP";
    let Q = S(),
      H = Q == null ? null : Q - x;
    (x = Q), v && v({ action: j, location: J.location, delta: H });
  }
  function L(Q, H) {
    j = "PUSH";
    let ae = Mu(J.location, Q, H);
    x = S() + 1;
    let Z = wh(ae, x),
      P = J.createHref(ae);
    try {
      A.pushState(Z, "", P);
    } catch (F) {
      if (F instanceof DOMException && F.name === "DataCloneError") throw F;
      h.location.assign(P);
    }
    m && v && v({ action: j, location: J.location, delta: 1 });
  }
  function q(Q, H) {
    j = "REPLACE";
    let ae = Mu(J.location, Q, H);
    x = S();
    let Z = wh(ae, x),
      P = J.createHref(ae);
    A.replaceState(Z, "", P),
      m && v && v({ action: j, location: J.location, delta: 0 });
  }
  function z(Q) {
    let H = h.location.origin !== "null" ? h.location.origin : h.location.href,
      ae = typeof Q == "string" ? Q : Xi(Q);
    return (
      (ae = ae.replace(/ $/, "%20")),
      Pe(
        H,
        `No window.location.(origin|href) available to create URL for href: ${ae}`,
      ),
      new URL(ae, H)
    );
  }
  let J = {
    get action() {
      return j;
    },
    get location() {
      return r(h, A);
    },
    listen(Q) {
      if (v) throw new Error("A history only accepts one active listener");
      return (
        h.addEventListener(Sh, B),
        (v = Q),
        () => {
          h.removeEventListener(Sh, B), (v = null);
        }
      );
    },
    createHref(Q) {
      return d(h, Q);
    },
    createURL: z,
    encodeLocation(Q) {
      let H = z(Q);
      return { pathname: H.pathname, search: H.search, hash: H.hash };
    },
    push: L,
    replace: q,
    go(Q) {
      return A.go(Q);
    },
  };
  return J;
}
function _h(r, d, f = "/") {
  return x0(r, d, f, !1);
}
function x0(r, d, f, u) {
  let h = typeof d == "string" ? _n(d) : d,
    m = Hl(h.pathname || "/", f);
  if (m == null) return null;
  let A = Mh(r);
  p0(A);
  let j = null;
  for (let v = 0; j == null && v < A.length; ++v) {
    let x = R0(m);
    j = E0(A[v], x, u);
  }
  return j;
}
function Mh(r, d = [], f = [], u = "") {
  let h = (m, A, j) => {
    let v = {
      relativePath: j === void 0 ? m.path || "" : j,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: A,
      route: m,
    };
    v.relativePath.startsWith("/") &&
      (Pe(
        v.relativePath.startsWith(u),
        `Absolute route path "${v.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (v.relativePath = v.relativePath.slice(u.length)));
    let x = Ul([u, v.relativePath]),
      S = f.concat(v);
    m.children &&
      m.children.length > 0 &&
      (Pe(
        m.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${x}".`,
      ),
      Mh(m.children, d, S, x)),
      !(m.path == null && !m.index) &&
        d.push({ path: x, score: w0(x, m.index), routesMeta: S });
  };
  return (
    r.forEach((m, A) => {
      var j;
      if (m.path === "" || !((j = m.path) != null && j.includes("?"))) h(m, A);
      else for (let v of Oh(m.path)) h(m, A, v);
    }),
    d
  );
}
function Oh(r) {
  let d = r.split("/");
  if (d.length === 0) return [];
  let [f, ...u] = d,
    h = f.endsWith("?"),
    m = f.replace(/\?$/, "");
  if (u.length === 0) return h ? [m, ""] : [m];
  let A = Oh(u.join("/")),
    j = [];
  return (
    j.push(...A.map(v => (v === "" ? m : [m, v].join("/")))),
    h && j.push(...A),
    j.map(v => (r.startsWith("/") && v === "" ? "/" : v))
  );
}
function p0(r) {
  r.sort((d, f) =>
    d.score !== f.score
      ? f.score - d.score
      : A0(
          d.routesMeta.map(u => u.childrenIndex),
          f.routesMeta.map(u => u.childrenIndex),
        ),
  );
}
var b0 = /^:[\w-]+$/,
  v0 = 3,
  y0 = 2,
  j0 = 1,
  N0 = 10,
  S0 = -2,
  Ah = r => r === "*";
function w0(r, d) {
  let f = r.split("/"),
    u = f.length;
  return (
    f.some(Ah) && (u += S0),
    d && (u += y0),
    f
      .filter(h => !Ah(h))
      .reduce((h, m) => h + (b0.test(m) ? v0 : m === "" ? j0 : N0), u)
  );
}
function A0(r, d) {
  return r.length === d.length && r.slice(0, -1).every((u, h) => u === d[h])
    ? r[r.length - 1] - d[d.length - 1]
    : 0;
}
function E0(r, d, f = !1) {
  let { routesMeta: u } = r,
    h = {},
    m = "/",
    A = [];
  for (let j = 0; j < u.length; ++j) {
    let v = u[j],
      x = j === u.length - 1,
      S = m === "/" ? d : d.slice(m.length) || "/",
      B = gr(
        { path: v.relativePath, caseSensitive: v.caseSensitive, end: x },
        S,
      ),
      L = v.route;
    if (
      (!B &&
        x &&
        f &&
        !u[u.length - 1].route.index &&
        (B = gr(
          { path: v.relativePath, caseSensitive: v.caseSensitive, end: !1 },
          S,
        )),
      !B)
    )
      return null;
    Object.assign(h, B.params),
      A.push({
        params: h,
        pathname: Ul([m, B.pathname]),
        pathnameBase: _0(Ul([m, B.pathnameBase])),
        route: L,
      }),
      B.pathnameBase !== "/" && (m = Ul([m, B.pathnameBase]));
  }
  return A;
}
function gr(r, d) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [f, u] = C0(r.path, r.caseSensitive, r.end),
    h = d.match(f);
  if (!h) return null;
  let m = h[0],
    A = m.replace(/(.)\/+$/, "$1"),
    j = h.slice(1);
  return {
    params: u.reduce((x, { paramName: S, isOptional: B }, L) => {
      if (S === "*") {
        let z = j[L] || "";
        A = m.slice(0, m.length - z.length).replace(/(.)\/+$/, "$1");
      }
      const q = j[L];
      return (
        B && !q ? (x[S] = void 0) : (x[S] = (q || "").replace(/%2F/g, "/")), x
      );
    }, {}),
    pathname: m,
    pathnameBase: A,
    pattern: r,
  };
}
function C0(r, d = !1, f = !0) {
  hl(
    r === "*" || !r.endsWith("*") || r.endsWith("/*"),
    `Route path "${r}" will be treated as if it were "${r.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/, "/*")}".`,
  );
  let u = [],
    h =
      "^" +
      r
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (A, j, v) => (
            u.push({ paramName: j, isOptional: v != null }),
            v ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    r.endsWith("*")
      ? (u.push({ paramName: "*" }),
        (h += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : f
        ? (h += "\\/*$")
        : r !== "" && r !== "/" && (h += "(?:(?=\\/|$))"),
    [new RegExp(h, d ? void 0 : "i"), u]
  );
}
function R0(r) {
  try {
    return r
      .split("/")
      .map(d => decodeURIComponent(d).replace(/\//g, "%2F"))
      .join("/");
  } catch (d) {
    return (
      hl(
        !1,
        `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`,
      ),
      r
    );
  }
}
function Hl(r, d) {
  if (d === "/") return r;
  if (!r.toLowerCase().startsWith(d.toLowerCase())) return null;
  let f = d.endsWith("/") ? d.length - 1 : d.length,
    u = r.charAt(f);
  return u && u !== "/" ? null : r.slice(f) || "/";
}
function T0(r, d = "/") {
  let {
    pathname: f,
    search: u = "",
    hash: h = "",
  } = typeof r == "string" ? _n(r) : r;
  return {
    pathname: f ? (f.startsWith("/") ? f : k0(f, d)) : d,
    search: M0(u),
    hash: O0(h),
  };
}
function k0(r, d) {
  let f = d.replace(/\/+$/, "").split("/");
  return (
    r.split("/").forEach(h => {
      h === ".." ? f.length > 1 && f.pop() : h !== "." && f.push(h);
    }),
    f.length > 1 ? f.join("/") : "/"
  );
}
function ku(r, d, f, u) {
  return `Cannot include a '${r}' character in a manually specified \`to.${d}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function D0(r) {
  return r.filter(
    (d, f) => f === 0 || (d.route.path && d.route.path.length > 0),
  );
}
function zh(r) {
  let d = D0(r);
  return d.map((f, u) => (u === d.length - 1 ? f.pathname : f.pathnameBase));
}
function Lh(r, d, f, u = !1) {
  let h;
  typeof r == "string"
    ? (h = _n(r))
    : ((h = { ...r }),
      Pe(
        !h.pathname || !h.pathname.includes("?"),
        ku("?", "pathname", "search", h),
      ),
      Pe(
        !h.pathname || !h.pathname.includes("#"),
        ku("#", "pathname", "hash", h),
      ),
      Pe(!h.search || !h.search.includes("#"), ku("#", "search", "hash", h)));
  let m = r === "" || h.pathname === "",
    A = m ? "/" : h.pathname,
    j;
  if (A == null) j = f;
  else {
    let B = d.length - 1;
    if (!u && A.startsWith("..")) {
      let L = A.split("/");
      for (; L[0] === ".."; ) L.shift(), (B -= 1);
      h.pathname = L.join("/");
    }
    j = B >= 0 ? d[B] : "/";
  }
  let v = T0(h, j),
    x = A && A !== "/" && A.endsWith("/"),
    S = (m || A === ".") && f.endsWith("/");
  return !v.pathname.endsWith("/") && (x || S) && (v.pathname += "/"), v;
}
var Ul = r => r.join("/").replace(/\/\/+/g, "/"),
  _0 = r => r.replace(/\/+$/, "").replace(/^\/*/, "/"),
  M0 = r => (!r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r),
  O0 = r => (!r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r);
function z0(r) {
  return (
    r != null &&
    typeof r.status == "number" &&
    typeof r.statusText == "string" &&
    typeof r.internal == "boolean" &&
    "data" in r
  );
}
var Bh = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Bh);
var L0 = ["GET", ...Bh];
new Set(L0);
var Mn = T.createContext(null);
Mn.displayName = "DataRouter";
var xr = T.createContext(null);
xr.displayName = "DataRouterState";
var Uh = T.createContext({ isTransitioning: !1 });
Uh.displayName = "ViewTransition";
var B0 = T.createContext(new Map());
B0.displayName = "Fetchers";
var U0 = T.createContext(null);
U0.displayName = "Await";
var ml = T.createContext(null);
ml.displayName = "Navigation";
var Ki = T.createContext(null);
Ki.displayName = "Location";
var gl = T.createContext({ outlet: null, matches: [], isDataRoute: !1 });
gl.displayName = "Route";
var Lu = T.createContext(null);
Lu.displayName = "RouteError";
function H0(r, { relative: d } = {}) {
  Pe(
    Ji(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: f, navigator: u } = T.useContext(ml),
    { hash: h, pathname: m, search: A } = $i(r, { relative: d }),
    j = m;
  return (
    f !== "/" && (j = m === "/" ? f : Ul([f, m])),
    u.createHref({ pathname: j, search: A, hash: h })
  );
}
function Ji() {
  return T.useContext(Ki) != null;
}
function xa() {
  return (
    Pe(
      Ji(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    T.useContext(Ki).location
  );
}
var Hh =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Yh(r) {
  T.useContext(ml).static || T.useLayoutEffect(r);
}
function Y0() {
  let { isDataRoute: r } = T.useContext(gl);
  return r ? tg() : q0();
}
function q0() {
  Pe(
    Ji(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let r = T.useContext(Mn),
    { basename: d, navigator: f } = T.useContext(ml),
    { matches: u } = T.useContext(gl),
    { pathname: h } = xa(),
    m = JSON.stringify(zh(u)),
    A = T.useRef(!1);
  return (
    Yh(() => {
      A.current = !0;
    }),
    T.useCallback(
      (v, x = {}) => {
        if ((hl(A.current, Hh), !A.current)) return;
        if (typeof v == "number") {
          f.go(v);
          return;
        }
        let S = Lh(v, JSON.parse(m), h, x.relative === "path");
        r == null &&
          d !== "/" &&
          (S.pathname = S.pathname === "/" ? d : Ul([d, S.pathname])),
          (x.replace ? f.replace : f.push)(S, x.state, x);
      },
      [d, f, m, h, r],
    )
  );
}
var G0 = T.createContext(null);
function Q0(r) {
  let d = T.useContext(gl).outlet;
  return d && T.createElement(G0.Provider, { value: r }, d);
}
function $i(r, { relative: d } = {}) {
  let { matches: f } = T.useContext(gl),
    { pathname: u } = xa(),
    h = JSON.stringify(zh(f));
  return T.useMemo(() => Lh(r, JSON.parse(h), u, d === "path"), [r, h, u, d]);
}
function V0(r, d) {
  return qh(r, d);
}
function qh(r, d, f, u) {
  var ae;
  Pe(
    Ji(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: h, static: m } = T.useContext(ml),
    { matches: A } = T.useContext(gl),
    j = A[A.length - 1],
    v = j ? j.params : {},
    x = j ? j.pathname : "/",
    S = j ? j.pathnameBase : "/",
    B = j && j.route;
  {
    let Z = (B && B.path) || "";
    Gh(
      x,
      !B || Z.endsWith("*") || Z.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z === "/" ? "*" : `${Z}/*`}">.`,
    );
  }
  let L = xa(),
    q;
  if (d) {
    let Z = typeof d == "string" ? _n(d) : d;
    Pe(
      S === "/" || ((ae = Z.pathname) == null ? void 0 : ae.startsWith(S)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${Z.pathname}" was given in the \`location\` prop.`,
    ),
      (q = Z);
  } else q = L;
  let z = q.pathname || "/",
    J = z;
  if (S !== "/") {
    let Z = S.replace(/^\//, "").split("/");
    J = "/" + z.replace(/^\//, "").split("/").slice(Z.length).join("/");
  }
  let Q =
    !m && f && f.matches && f.matches.length > 0
      ? f.matches
      : _h(r, { pathname: J });
  hl(
    B || Q != null,
    `No routes matched location "${q.pathname}${q.search}${q.hash}" `,
  ),
    hl(
      Q == null ||
        Q[Q.length - 1].route.element !== void 0 ||
        Q[Q.length - 1].route.Component !== void 0 ||
        Q[Q.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    );
  let H = $0(
    Q &&
      Q.map(Z =>
        Object.assign({}, Z, {
          params: Object.assign({}, v, Z.params),
          pathname: Ul([
            S,
            h.encodeLocation
              ? h.encodeLocation(Z.pathname).pathname
              : Z.pathname,
          ]),
          pathnameBase:
            Z.pathnameBase === "/"
              ? S
              : Ul([
                  S,
                  h.encodeLocation
                    ? h.encodeLocation(Z.pathnameBase).pathname
                    : Z.pathnameBase,
                ]),
        }),
      ),
    A,
    f,
    u,
  );
  return d && H
    ? T.createElement(
        Ki.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...q,
            },
            navigationType: "POP",
          },
        },
        H,
      )
    : H;
}
function X0() {
  let r = eg(),
    d = z0(r)
      ? `${r.status} ${r.statusText}`
      : r instanceof Error
        ? r.message
        : JSON.stringify(r),
    f = r instanceof Error ? r.stack : null,
    u = "rgba(200,200,200, 0.5)",
    h = { padding: "0.5rem", backgroundColor: u },
    m = { padding: "2px 4px", backgroundColor: u },
    A = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", r),
    (A = T.createElement(
      T.Fragment,
      null,
      T.createElement("p", null, "💿 Hey developer 👋"),
      T.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        T.createElement("code", { style: m }, "ErrorBoundary"),
        " or",
        " ",
        T.createElement("code", { style: m }, "errorElement"),
        " prop on your route.",
      ),
    )),
    T.createElement(
      T.Fragment,
      null,
      T.createElement("h2", null, "Unexpected Application Error!"),
      T.createElement("h3", { style: { fontStyle: "italic" } }, d),
      f ? T.createElement("pre", { style: h }, f) : null,
      A,
    )
  );
}
var Z0 = T.createElement(X0, null),
  K0 = class extends T.Component {
    constructor(r) {
      super(r),
        (this.state = {
          location: r.location,
          revalidation: r.revalidation,
          error: r.error,
        });
    }
    static getDerivedStateFromError(r) {
      return { error: r };
    }
    static getDerivedStateFromProps(r, d) {
      return d.location !== r.location ||
        (d.revalidation !== "idle" && r.revalidation === "idle")
        ? { error: r.error, location: r.location, revalidation: r.revalidation }
        : {
            error: r.error !== void 0 ? r.error : d.error,
            location: d.location,
            revalidation: r.revalidation || d.revalidation,
          };
    }
    componentDidCatch(r, d) {
      console.error(
        "React Router caught the following error during render",
        r,
        d,
      );
    }
    render() {
      return this.state.error !== void 0
        ? T.createElement(
            gl.Provider,
            { value: this.props.routeContext },
            T.createElement(Lu.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function J0({ routeContext: r, match: d, children: f }) {
  let u = T.useContext(Mn);
  return (
    u &&
      u.static &&
      u.staticContext &&
      (d.route.errorElement || d.route.ErrorBoundary) &&
      (u.staticContext._deepestRenderedBoundaryId = d.route.id),
    T.createElement(gl.Provider, { value: r }, f)
  );
}
function $0(r, d = [], f = null, u = null) {
  if (r == null) {
    if (!f) return null;
    if (f.errors) r = f.matches;
    else if (d.length === 0 && !f.initialized && f.matches.length > 0)
      r = f.matches;
    else return null;
  }
  let h = r,
    m = f == null ? void 0 : f.errors;
  if (m != null) {
    let v = h.findIndex(
      x => x.route.id && (m == null ? void 0 : m[x.route.id]) !== void 0,
    );
    Pe(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`,
    ),
      (h = h.slice(0, Math.min(h.length, v + 1)));
  }
  let A = !1,
    j = -1;
  if (f)
    for (let v = 0; v < h.length; v++) {
      let x = h[v];
      if (
        ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (j = v),
        x.route.id)
      ) {
        let { loaderData: S, errors: B } = f,
          L =
            x.route.loader &&
            !S.hasOwnProperty(x.route.id) &&
            (!B || B[x.route.id] === void 0);
        if (x.route.lazy || L) {
          (A = !0), j >= 0 ? (h = h.slice(0, j + 1)) : (h = [h[0]]);
          break;
        }
      }
    }
  return h.reduceRight((v, x, S) => {
    let B,
      L = !1,
      q = null,
      z = null;
    f &&
      ((B = m && x.route.id ? m[x.route.id] : void 0),
      (q = x.route.errorElement || Z0),
      A &&
        (j < 0 && S === 0
          ? (Gh(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (L = !0),
            (z = null))
          : j === S &&
            ((L = !0), (z = x.route.hydrateFallbackElement || null))));
    let J = d.concat(h.slice(0, S + 1)),
      Q = () => {
        let H;
        return (
          B
            ? (H = q)
            : L
              ? (H = z)
              : x.route.Component
                ? (H = T.createElement(x.route.Component, null))
                : x.route.element
                  ? (H = x.route.element)
                  : (H = v),
          T.createElement(J0, {
            match: x,
            routeContext: { outlet: v, matches: J, isDataRoute: f != null },
            children: H,
          })
        );
      };
    return f && (x.route.ErrorBoundary || x.route.errorElement || S === 0)
      ? T.createElement(K0, {
          location: f.location,
          revalidation: f.revalidation,
          component: q,
          error: B,
          children: Q(),
          routeContext: { outlet: null, matches: J, isDataRoute: !0 },
        })
      : Q();
  }, null);
}
function Bu(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function W0(r) {
  let d = T.useContext(Mn);
  return Pe(d, Bu(r)), d;
}
function F0(r) {
  let d = T.useContext(xr);
  return Pe(d, Bu(r)), d;
}
function I0(r) {
  let d = T.useContext(gl);
  return Pe(d, Bu(r)), d;
}
function Uu(r) {
  let d = I0(r),
    f = d.matches[d.matches.length - 1];
  return (
    Pe(
      f.route.id,
      `${r} can only be used on routes that contain a unique "id"`,
    ),
    f.route.id
  );
}
function P0() {
  return Uu("useRouteId");
}
function eg() {
  var u;
  let r = T.useContext(Lu),
    d = F0("useRouteError"),
    f = Uu("useRouteError");
  return r !== void 0 ? r : (u = d.errors) == null ? void 0 : u[f];
}
function tg() {
  let { router: r } = W0("useNavigate"),
    d = Uu("useNavigate"),
    f = T.useRef(!1);
  return (
    Yh(() => {
      f.current = !0;
    }),
    T.useCallback(
      async (h, m = {}) => {
        hl(f.current, Hh),
          f.current &&
            (typeof h == "number"
              ? r.navigate(h)
              : await r.navigate(h, { fromRouteId: d, ...m }));
      },
      [r, d],
    )
  );
}
var Eh = {};
function Gh(r, d, f) {
  !d && !Eh[r] && ((Eh[r] = !0), hl(!1, f));
}
T.memo(lg);
function lg({ routes: r, future: d, state: f }) {
  return qh(r, void 0, f, d);
}
function ag(r) {
  return Q0(r.context);
}
function Bl(r) {
  Pe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function ng({
  basename: r = "/",
  children: d = null,
  location: f,
  navigationType: u = "POP",
  navigator: h,
  static: m = !1,
}) {
  Pe(
    !Ji(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let A = r.replace(/^\/*/, "/"),
    j = T.useMemo(
      () => ({ basename: A, navigator: h, static: m, future: {} }),
      [A, h, m],
    );
  typeof f == "string" && (f = _n(f));
  let {
      pathname: v = "/",
      search: x = "",
      hash: S = "",
      state: B = null,
      key: L = "default",
    } = f,
    q = T.useMemo(() => {
      let z = Hl(v, A);
      return z == null
        ? null
        : {
            location: { pathname: z, search: x, hash: S, state: B, key: L },
            navigationType: u,
          };
    }, [A, v, x, S, B, L, u]);
  return (
    hl(
      q != null,
      `<Router basename="${A}"> is not able to match the URL "${v}${x}${S}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    q == null
      ? null
      : T.createElement(
          ml.Provider,
          { value: j },
          T.createElement(Ki.Provider, { children: d, value: q }),
        )
  );
}
function ig({ children: r, location: d }) {
  return V0(Ou(r), d);
}
function Ou(r, d = []) {
  let f = [];
  return (
    T.Children.forEach(r, (u, h) => {
      if (!T.isValidElement(u)) return;
      let m = [...d, h];
      if (u.type === T.Fragment) {
        f.push.apply(f, Ou(u.props.children, m));
        return;
      }
      Pe(
        u.type === Bl,
        `[${typeof u.type == "string" ? u.type : u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Pe(
          !u.props.index || !u.props.children,
          "An index route cannot have child routes.",
        );
      let A = {
        id: u.props.id || m.join("-"),
        caseSensitive: u.props.caseSensitive,
        element: u.props.element,
        Component: u.props.Component,
        index: u.props.index,
        path: u.props.path,
        loader: u.props.loader,
        action: u.props.action,
        hydrateFallbackElement: u.props.hydrateFallbackElement,
        HydrateFallback: u.props.HydrateFallback,
        errorElement: u.props.errorElement,
        ErrorBoundary: u.props.ErrorBoundary,
        hasErrorBoundary:
          u.props.hasErrorBoundary === !0 ||
          u.props.ErrorBoundary != null ||
          u.props.errorElement != null,
        shouldRevalidate: u.props.shouldRevalidate,
        handle: u.props.handle,
        lazy: u.props.lazy,
      };
      u.props.children && (A.children = Ou(u.props.children, m)), f.push(A);
    }),
    f
  );
}
var hr = "get",
  mr = "application/x-www-form-urlencoded";
function pr(r) {
  return r != null && typeof r.tagName == "string";
}
function sg(r) {
  return pr(r) && r.tagName.toLowerCase() === "button";
}
function rg(r) {
  return pr(r) && r.tagName.toLowerCase() === "form";
}
function cg(r) {
  return pr(r) && r.tagName.toLowerCase() === "input";
}
function ug(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function og(r, d) {
  return r.button === 0 && (!d || d === "_self") && !ug(r);
}
var ur = null;
function dg() {
  if (ur === null)
    try {
      new FormData(document.createElement("form"), 0), (ur = !1);
    } catch {
      ur = !0;
    }
  return ur;
}
var fg = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Du(r) {
  return r != null && !fg.has(r)
    ? (hl(
        !1,
        `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mr}"`,
      ),
      null)
    : r;
}
function hg(r, d) {
  let f, u, h, m, A;
  if (rg(r)) {
    let j = r.getAttribute("action");
    (u = j ? Hl(j, d) : null),
      (f = r.getAttribute("method") || hr),
      (h = Du(r.getAttribute("enctype")) || mr),
      (m = new FormData(r));
  } else if (sg(r) || (cg(r) && (r.type === "submit" || r.type === "image"))) {
    let j = r.form;
    if (j == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let v = r.getAttribute("formaction") || j.getAttribute("action");
    if (
      ((u = v ? Hl(v, d) : null),
      (f = r.getAttribute("formmethod") || j.getAttribute("method") || hr),
      (h =
        Du(r.getAttribute("formenctype")) ||
        Du(j.getAttribute("enctype")) ||
        mr),
      (m = new FormData(j, r)),
      !dg())
    ) {
      let { name: x, type: S, value: B } = r;
      if (S === "image") {
        let L = x ? `${x}.` : "";
        m.append(`${L}x`, "0"), m.append(`${L}y`, "0");
      } else x && m.append(x, B);
    }
  } else {
    if (pr(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (f = hr), (u = null), (h = mr), (A = r);
  }
  return (
    m && h === "text/plain" && ((A = m), (m = void 0)),
    { action: u, method: f.toLowerCase(), encType: h, formData: m, body: A }
  );
}
function Hu(r, d) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(d);
}
async function mg(r, d) {
  if (r.id in d) return d[r.id];
  try {
    let f = await import(r.module);
    return (d[r.id] = f), f;
  } catch (f) {
    return (
      console.error(
        `Error loading route module \`${r.module}\`, reloading page...`,
      ),
      console.error(f),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function gg(r) {
  return r == null
    ? !1
    : r.href == null
      ? r.rel === "preload" &&
        typeof r.imageSrcSet == "string" &&
        typeof r.imageSizes == "string"
      : typeof r.rel == "string" && typeof r.href == "string";
}
async function xg(r, d, f) {
  let u = await Promise.all(
    r.map(async h => {
      let m = d.routes[h.route.id];
      if (m) {
        let A = await mg(m, f);
        return A.links ? A.links() : [];
      }
      return [];
    }),
  );
  return yg(
    u
      .flat(1)
      .filter(gg)
      .filter(h => h.rel === "stylesheet" || h.rel === "preload")
      .map(h =>
        h.rel === "stylesheet"
          ? { ...h, rel: "prefetch", as: "style" }
          : { ...h, rel: "prefetch" },
      ),
  );
}
function Ch(r, d, f, u, h, m) {
  let A = (v, x) => (f[x] ? v.route.id !== f[x].route.id : !0),
    j = (v, x) => {
      var S;
      return (
        f[x].pathname !== v.pathname ||
        (((S = f[x].route.path) == null ? void 0 : S.endsWith("*")) &&
          f[x].params["*"] !== v.params["*"])
      );
    };
  return m === "assets"
    ? d.filter((v, x) => A(v, x) || j(v, x))
    : m === "data"
      ? d.filter((v, x) => {
          var B;
          let S = u.routes[v.route.id];
          if (!S || !S.hasLoader) return !1;
          if (A(v, x) || j(v, x)) return !0;
          if (v.route.shouldRevalidate) {
            let L = v.route.shouldRevalidate({
              currentUrl: new URL(
                h.pathname + h.search + h.hash,
                window.origin,
              ),
              currentParams: ((B = f[0]) == null ? void 0 : B.params) || {},
              nextUrl: new URL(r, window.origin),
              nextParams: v.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof L == "boolean") return L;
          }
          return !0;
        })
      : [];
}
function pg(r, d, { includeHydrateFallback: f } = {}) {
  return bg(
    r
      .map(u => {
        let h = d.routes[u.route.id];
        if (!h) return [];
        let m = [h.module];
        return (
          h.clientActionModule && (m = m.concat(h.clientActionModule)),
          h.clientLoaderModule && (m = m.concat(h.clientLoaderModule)),
          f &&
            h.hydrateFallbackModule &&
            (m = m.concat(h.hydrateFallbackModule)),
          h.imports && (m = m.concat(h.imports)),
          m
        );
      })
      .flat(1),
  );
}
function bg(r) {
  return [...new Set(r)];
}
function vg(r) {
  let d = {},
    f = Object.keys(r).sort();
  for (let u of f) d[u] = r[u];
  return d;
}
function yg(r, d) {
  let f = new Set();
  return (
    new Set(d),
    r.reduce((u, h) => {
      let m = JSON.stringify(vg(h));
      return f.has(m) || (f.add(m), u.push({ key: m, link: h })), u;
    }, [])
  );
}
function jg(r, d) {
  let f =
    typeof r == "string"
      ? new URL(
          r,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : r;
  return (
    f.pathname === "/"
      ? (f.pathname = "_root.data")
      : d && Hl(f.pathname, d) === "/"
        ? (f.pathname = `${d.replace(/\/$/, "")}/_root.data`)
        : (f.pathname = `${f.pathname.replace(/\/$/, "")}.data`),
    f
  );
}
function Qh() {
  let r = T.useContext(Mn);
  return (
    Hu(
      r,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    r
  );
}
function Ng() {
  let r = T.useContext(xr);
  return (
    Hu(
      r,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    r
  );
}
var Yu = T.createContext(void 0);
Yu.displayName = "FrameworkContext";
function Vh() {
  let r = T.useContext(Yu);
  return (
    Hu(r, "You must render this element inside a <HydratedRouter> element"), r
  );
}
function Sg(r, d) {
  let f = T.useContext(Yu),
    [u, h] = T.useState(!1),
    [m, A] = T.useState(!1),
    {
      onFocus: j,
      onBlur: v,
      onMouseEnter: x,
      onMouseLeave: S,
      onTouchStart: B,
    } = d,
    L = T.useRef(null);
  T.useEffect(() => {
    if ((r === "render" && A(!0), r === "viewport")) {
      let J = H => {
          H.forEach(ae => {
            A(ae.isIntersecting);
          });
        },
        Q = new IntersectionObserver(J, { threshold: 0.5 });
      return (
        L.current && Q.observe(L.current),
        () => {
          Q.disconnect();
        }
      );
    }
  }, [r]),
    T.useEffect(() => {
      if (u) {
        let J = setTimeout(() => {
          A(!0);
        }, 100);
        return () => {
          clearTimeout(J);
        };
      }
    }, [u]);
  let q = () => {
      h(!0);
    },
    z = () => {
      h(!1), A(!1);
    };
  return f
    ? r !== "intent"
      ? [m, L, {}]
      : [
          m,
          L,
          {
            onFocus: Gi(j, q),
            onBlur: Gi(v, z),
            onMouseEnter: Gi(x, q),
            onMouseLeave: Gi(S, z),
            onTouchStart: Gi(B, q),
          },
        ]
    : [!1, L, {}];
}
function Gi(r, d) {
  return f => {
    r && r(f), f.defaultPrevented || d(f);
  };
}
function wg({ page: r, ...d }) {
  let { router: f } = Qh(),
    u = T.useMemo(() => _h(f.routes, r, f.basename), [f.routes, r, f.basename]);
  return u ? T.createElement(Eg, { page: r, matches: u, ...d }) : null;
}
function Ag(r) {
  let { manifest: d, routeModules: f } = Vh(),
    [u, h] = T.useState([]);
  return (
    T.useEffect(() => {
      let m = !1;
      return (
        xg(r, d, f).then(A => {
          m || h(A);
        }),
        () => {
          m = !0;
        }
      );
    }, [r, d, f]),
    u
  );
}
function Eg({ page: r, matches: d, ...f }) {
  let u = xa(),
    { manifest: h, routeModules: m } = Vh(),
    { basename: A } = Qh(),
    { loaderData: j, matches: v } = Ng(),
    x = T.useMemo(() => Ch(r, d, v, h, u, "data"), [r, d, v, h, u]),
    S = T.useMemo(() => Ch(r, d, v, h, u, "assets"), [r, d, v, h, u]),
    B = T.useMemo(() => {
      if (r === u.pathname + u.search + u.hash) return [];
      let z = new Set(),
        J = !1;
      if (
        (d.forEach(H => {
          var Z;
          let ae = h.routes[H.route.id];
          !ae ||
            !ae.hasLoader ||
            ((!x.some(P => P.route.id === H.route.id) &&
              H.route.id in j &&
              (Z = m[H.route.id]) != null &&
              Z.shouldRevalidate) ||
            ae.hasClientLoader
              ? (J = !0)
              : z.add(H.route.id));
        }),
        z.size === 0)
      )
        return [];
      let Q = jg(r, A);
      return (
        J &&
          z.size > 0 &&
          Q.searchParams.set(
            "_routes",
            d
              .filter(H => z.has(H.route.id))
              .map(H => H.route.id)
              .join(","),
          ),
        [Q.pathname + Q.search]
      );
    }, [A, j, u, h, x, d, r, m]),
    L = T.useMemo(() => pg(S, h), [S, h]),
    q = Ag(S);
  return T.createElement(
    T.Fragment,
    null,
    B.map(z =>
      T.createElement("link", {
        key: z,
        rel: "prefetch",
        as: "fetch",
        href: z,
        ...f,
      }),
    ),
    L.map(z =>
      T.createElement("link", { key: z, rel: "modulepreload", href: z, ...f }),
    ),
    q.map(({ key: z, link: J }) => T.createElement("link", { key: z, ...J })),
  );
}
function Cg(...r) {
  return d => {
    r.forEach(f => {
      typeof f == "function" ? f(d) : f != null && (f.current = d);
    });
  };
}
var Xh =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Xh && (window.__reactRouterVersion = "7.5.0");
} catch {}
function Rg({ basename: r, children: d, window: f }) {
  let u = T.useRef();
  u.current == null && (u.current = h0({ window: f, v5Compat: !0 }));
  let h = u.current,
    [m, A] = T.useState({ action: h.action, location: h.location }),
    j = T.useCallback(
      v => {
        T.startTransition(() => A(v));
      },
      [A],
    );
  return (
    T.useLayoutEffect(() => h.listen(j), [h, j]),
    T.createElement(ng, {
      basename: r,
      children: d,
      location: m.location,
      navigationType: m.action,
      navigator: h,
    })
  );
}
var Zh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Re = T.forwardRef(function (
    {
      onClick: d,
      discover: f = "render",
      prefetch: u = "none",
      relative: h,
      reloadDocument: m,
      replace: A,
      state: j,
      target: v,
      to: x,
      preventScrollReset: S,
      viewTransition: B,
      ...L
    },
    q,
  ) {
    let { basename: z } = T.useContext(ml),
      J = typeof x == "string" && Zh.test(x),
      Q,
      H = !1;
    if (typeof x == "string" && J && ((Q = x), Xh))
      try {
        let we = new URL(window.location.href),
          Qe = x.startsWith("//") ? new URL(we.protocol + x) : new URL(x),
          Xe = Hl(Qe.pathname, z);
        Qe.origin === we.origin && Xe != null
          ? (x = Xe + Qe.search + Qe.hash)
          : (H = !0);
      } catch {
        hl(
          !1,
          `<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let ae = H0(x, { relative: h }),
      [Z, P, F] = Sg(u, L),
      Ne = _g(x, {
        replace: A,
        state: j,
        target: v,
        preventScrollReset: S,
        relative: h,
        viewTransition: B,
      });
    function je(we) {
      d && d(we), we.defaultPrevented || Ne(we);
    }
    let Se = T.createElement("a", {
      ...L,
      ...F,
      href: Q || ae,
      onClick: H || m ? d : je,
      ref: Cg(q, P),
      target: v,
      "data-discover": !J && f === "render" ? "true" : void 0,
    });
    return Z && !J
      ? T.createElement(T.Fragment, null, Se, T.createElement(wg, { page: ae }))
      : Se;
  });
Re.displayName = "Link";
var Tg = T.forwardRef(function (
  {
    "aria-current": d = "page",
    caseSensitive: f = !1,
    className: u = "",
    end: h = !1,
    style: m,
    to: A,
    viewTransition: j,
    children: v,
    ...x
  },
  S,
) {
  let B = $i(A, { relative: x.relative }),
    L = xa(),
    q = T.useContext(xr),
    { navigator: z, basename: J } = T.useContext(ml),
    Q = q != null && Bg(B) && j === !0,
    H = z.encodeLocation ? z.encodeLocation(B).pathname : B.pathname,
    ae = L.pathname,
    Z =
      q && q.navigation && q.navigation.location
        ? q.navigation.location.pathname
        : null;
  f ||
    ((ae = ae.toLowerCase()),
    (Z = Z ? Z.toLowerCase() : null),
    (H = H.toLowerCase())),
    Z && J && (Z = Hl(Z, J) || Z);
  const P = H !== "/" && H.endsWith("/") ? H.length - 1 : H.length;
  let F = ae === H || (!h && ae.startsWith(H) && ae.charAt(P) === "/"),
    Ne =
      Z != null &&
      (Z === H || (!h && Z.startsWith(H) && Z.charAt(H.length) === "/")),
    je = { isActive: F, isPending: Ne, isTransitioning: Q },
    Se = F ? d : void 0,
    we;
  typeof u == "function"
    ? (we = u(je))
    : (we = [
        u,
        F ? "active" : null,
        Ne ? "pending" : null,
        Q ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Qe = typeof m == "function" ? m(je) : m;
  return T.createElement(
    Re,
    {
      ...x,
      "aria-current": Se,
      className: we,
      ref: S,
      style: Qe,
      to: A,
      viewTransition: j,
    },
    typeof v == "function" ? v(je) : v,
  );
});
Tg.displayName = "NavLink";
var kg = T.forwardRef(
  (
    {
      discover: r = "render",
      fetcherKey: d,
      navigate: f,
      reloadDocument: u,
      replace: h,
      state: m,
      method: A = hr,
      action: j,
      onSubmit: v,
      relative: x,
      preventScrollReset: S,
      viewTransition: B,
      ...L
    },
    q,
  ) => {
    let z = zg(),
      J = Lg(j, { relative: x }),
      Q = A.toLowerCase() === "get" ? "get" : "post",
      H = typeof j == "string" && Zh.test(j),
      ae = Z => {
        if ((v && v(Z), Z.defaultPrevented)) return;
        Z.preventDefault();
        let P = Z.nativeEvent.submitter,
          F = (P == null ? void 0 : P.getAttribute("formmethod")) || A;
        z(P || Z.currentTarget, {
          fetcherKey: d,
          method: F,
          navigate: f,
          replace: h,
          state: m,
          relative: x,
          preventScrollReset: S,
          viewTransition: B,
        });
      };
    return T.createElement("form", {
      ref: q,
      method: Q,
      action: J,
      onSubmit: u ? v : ae,
      ...L,
      "data-discover": !H && r === "render" ? "true" : void 0,
    });
  },
);
kg.displayName = "Form";
function Dg(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Kh(r) {
  let d = T.useContext(Mn);
  return Pe(d, Dg(r)), d;
}
function _g(
  r,
  {
    target: d,
    replace: f,
    state: u,
    preventScrollReset: h,
    relative: m,
    viewTransition: A,
  } = {},
) {
  let j = Y0(),
    v = xa(),
    x = $i(r, { relative: m });
  return T.useCallback(
    S => {
      if (og(S, d)) {
        S.preventDefault();
        let B = f !== void 0 ? f : Xi(v) === Xi(x);
        j(r, {
          replace: B,
          state: u,
          preventScrollReset: h,
          relative: m,
          viewTransition: A,
        });
      }
    },
    [v, j, x, f, u, d, r, h, m, A],
  );
}
var Mg = 0,
  Og = () => `__${String(++Mg)}__`;
function zg() {
  let { router: r } = Kh("useSubmit"),
    { basename: d } = T.useContext(ml),
    f = P0();
  return T.useCallback(
    async (u, h = {}) => {
      let { action: m, method: A, encType: j, formData: v, body: x } = hg(u, d);
      if (h.navigate === !1) {
        let S = h.fetcherKey || Og();
        await r.fetch(S, f, h.action || m, {
          preventScrollReset: h.preventScrollReset,
          formData: v,
          body: x,
          formMethod: h.method || A,
          formEncType: h.encType || j,
          flushSync: h.flushSync,
        });
      } else
        await r.navigate(h.action || m, {
          preventScrollReset: h.preventScrollReset,
          formData: v,
          body: x,
          formMethod: h.method || A,
          formEncType: h.encType || j,
          replace: h.replace,
          state: h.state,
          fromRouteId: f,
          flushSync: h.flushSync,
          viewTransition: h.viewTransition,
        });
    },
    [r, d, f],
  );
}
function Lg(r, { relative: d } = {}) {
  let { basename: f } = T.useContext(ml),
    u = T.useContext(gl);
  Pe(u, "useFormAction must be used inside a RouteContext");
  let [h] = u.matches.slice(-1),
    m = { ...$i(r || ".", { relative: d }) },
    A = xa();
  if (r == null) {
    m.search = A.search;
    let j = new URLSearchParams(m.search),
      v = j.getAll("index");
    if (v.some(S => S === "")) {
      j.delete("index"), v.filter(B => B).forEach(B => j.append("index", B));
      let S = j.toString();
      m.search = S ? `?${S}` : "";
    }
  }
  return (
    (!r || r === ".") &&
      h.route.index &&
      (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"),
    f !== "/" && (m.pathname = m.pathname === "/" ? f : Ul([f, m.pathname])),
    Xi(m)
  );
}
function Bg(r, d = {}) {
  let f = T.useContext(Uh);
  Pe(
    f != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: u } = Kh("useViewTransitionState"),
    h = $i(r, { relative: d.relative });
  if (!f.isTransitioning) return !1;
  let m = Hl(f.currentLocation.pathname, u) || f.currentLocation.pathname,
    A = Hl(f.nextLocation.pathname, u) || f.nextLocation.pathname;
  return gr(h.pathname, A) != null || gr(h.pathname, m) != null;
}
new TextEncoder();
const Jh = "/assets/darklang-logo-Bda2fDDO.png",
  $h = "/assets/darklang-logo-dbg-Cuw34hvW.png",
  Ug = "/assets/github-logo-DkTr3Tul.png",
  Hg =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEwSURBVHgB3VXRdYMwDBRZoB6BERihIzCCN2g2gA1gg3SDdoOMkHYCtxPQDVTpBcLF0cN28pd7Tw8hTnfYCCB6ajCzk/ASHxKBV5zmmqd7Ic2txMRphGIjaRi4HF2ueMf3Y0iJeyAfJBqJ9/lctyvMsWzdKPHK5+exoN0yCEDsoe4MroO8h74Jr+3w7uVQg8aFVFXVX2wQ1VyU364iWqaipkwoN+r9tEgnIBypENoD/WGp74DTQP5D5fiFvLYMHsXL5tVogiYqRNRvbtEX5PoN2lO++BtdT+C3RdrDHC8vUtJExfkW3iI6Xt/WBsZWzweDf2D7Yxi27qYF0RpGdzS4I9vwlFjy0tgleL0hPlIOwOQ4b0WbYZAnDgKe19HrNwwmfvDPpkaNUddB0Mlz9NT4B/MZs2XOy6QiAAAAAElFTkSuQmCC",
  Rh = ({ label: r, labelColor: d, items: f }) => {
    const [u, h] = T.useState(!1),
      m = T.useRef(null),
      A = () => {
        h(!u);
      };
    return (
      T.useEffect(() => {
        const j = v => {
          m.current && !m.current.contains(v.target) && h(!1);
        };
        return (
          document.addEventListener("mousedown", j),
          () => {
            document.removeEventListener("mousedown", j);
          }
        );
      }, []),
      n.jsxs("div", {
        className: "relative mt-1",
        ref: m,
        children: [
          n.jsxs("button", {
            onClick: A,
            className: `flex items-center text-sm font-medium ${d} hover:text-blue-dbg focus:outline-none`,
            children: [
              n.jsx("span", { children: r }),
              n.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: `ml-1 transition-transform ${u ? "rotate-180" : ""}`,
                children: n.jsx("path", { d: "m6 9 6 6 6-6" }),
              }),
            ],
          }),
          u &&
            n.jsx("div", {
              className:
                "absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white z-10",
              children: n.jsx("div", {
                className:
                  "py-1 rounded-md bg-white-custom border border-gray-200",
                children: f.map((j, v) =>
                  n.jsxs(
                    n0.Fragment,
                    {
                      children: [
                        n.jsx(Re, {
                          to: j.href,
                          target: j.target,
                          className:
                            "block px-4 py-3 text-sm text-black-custom hover:bg-purple-50",
                          onClick: () => h(!1),
                          children: j.text,
                        }),
                        v < f.length - 1 &&
                          n.jsx("div", {
                            className: "mx-4 border-t border-gray-100",
                          }),
                      ],
                    },
                    j.text,
                  ),
                ),
              }),
            }),
        ],
      })
    );
  },
  Yg = ({ currentPage: r }) => {
    const d = {
        home: "bg-white",
        about: "bg-dark text-white",
        signup: "bg-dark text-white",
        roadmap: "bg-white",
        cli: "bg-dark text-white",
        cloud: "bg-dark text-white",
        default: "bg-white",
      },
      f = d[r] || d.default,
      u = f.includes("bg-dark"),
      h = u ? $h : Jh,
      m = u ? Hg : Ug,
      [A, j] = T.useState(!1),
      v = () => {
        j(!A);
      };
    return n.jsxs("header", {
      className: `${f} py-4`,
      children: [
        n.jsxs("div", {
          className:
            "max-w-7xl 2xl:max-w-[100rem] mx-auto px-6 flex justify-between items-center",
          children: [
            n.jsx(Re, {
              to: "/",
              className: "flex items-center",
              children: n.jsx("img", {
                src: h,
                alt: "Darklang Logo",
                className: "h-11",
              }),
            }),
            n.jsx("nav", {
              className: "hidden md:block",
              children: n.jsxs("ul", {
                className: "flex space-x-8",
                children: [
                  n.jsx("li", {
                    children: n.jsx(Re, {
                      to: "/",
                      className: " hover:text-blue-dbg text-sm font-medium",
                      children: "Get Started",
                    }),
                  }),
                  n.jsx("li", {
                    children: n.jsx(Re, {
                      to: "https://docs.darklang.com/next/introduction",
                      target: "_blank",
                      className: " hover:text-blue-dbg text-sm font-medium",
                      children: "Docs",
                    }),
                  }),
                  n.jsx("li", {
                    children: n.jsx(Re, {
                      to: "/cli",
                      className: " hover:text-blue-dbg text-sm font-medium",
                      children: "CLI",
                    }),
                  }),
                  n.jsx("li", {
                    children: n.jsx(Re, {
                      to: "/cloud",
                      className: " hover:text-blue-dbg text-sm font-medium",
                      children: "Cloud",
                    }),
                  }),
                  n.jsx("li", {
                    children: n.jsx(Re, {
                      to: "/packages",
                      className: " hover:text-blue-dbg text-sm font-medium",
                      children: "Packages",
                    }),
                  }),
                  n.jsx("li", {
                    children: n.jsx(Re, {
                      to: "/examples",
                      className: " hover:text-blue-dbg text-sm font-medium",
                      children: "Examples",
                    }),
                  }),
                  n.jsx("li", {
                    children: n.jsx(Re, {
                      to: "/try",
                      className: " hover:text-blue-dbg text-sm font-medium",
                      children: "Try",
                    }),
                  }),
                  n.jsx("li", {
                    children: n.jsx(Rh, {
                      label: "Company",
                      items: [
                        { text: "Roadmap", href: "/roadmap" },
                        {
                          text: "Blog",
                          href: "https://blog.darklang.com/",
                          target: "_blank",
                        },
                        {
                          text: "Sponsor us",
                          href: "https://github.com/sponsors/darklang",
                          target: "_blank",
                        },
                      ],
                    }),
                  }),
                ],
              }),
            }),
            n.jsxs("div", {
              className: "hidden md:flex items-center space-x-3",
              children: [
                n.jsx("a", {
                  href: "https://darklang.com/discord",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: " hover:text-blue-dbg mt-1",
                  children: n.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "23",
                    height: "17",
                    viewBox: "0 0 23 17",
                    fill: "none",
                    children: n.jsx("path", {
                      d: "M19.071 1.55192C17.6856 0.906087 16.1856 0.437337 14.6231 0.166504C14.5956 0.166895 14.5694 0.178128 14.5502 0.197754C14.3627 0.541504 14.1439 0.98942 13.9981 1.33317C12.3408 1.08333 10.6554 1.08333 8.99809 1.33317C8.85225 0.979004 8.6335 0.541504 8.43559 0.197754C8.42517 0.176921 8.39392 0.166504 8.36267 0.166504C6.80017 0.437337 5.31059 0.906087 3.91475 1.55192C3.90434 1.55192 3.89392 1.56234 3.8835 1.57275C1.05017 5.81234 0.268921 9.93734 0.654338 14.0207C0.654338 14.0415 0.664754 14.0623 0.685588 14.0728C2.56059 15.4478 4.36267 16.2811 6.14392 16.8332C6.17517 16.8436 6.20642 16.8332 6.21684 16.8123C6.6335 16.2394 7.0085 15.6353 7.33142 14.9998C7.35225 14.9582 7.33142 14.9165 7.28975 14.9061C6.696 14.6769 6.1335 14.4061 5.58142 14.0936C5.53975 14.0728 5.53975 14.0103 5.571 13.979C5.68559 13.8957 5.80017 13.8019 5.91475 13.7186C5.93559 13.6978 5.96684 13.6978 5.98767 13.7082C9.571 15.3436 13.4356 15.3436 16.9773 13.7082C16.9981 13.6978 17.0293 13.6978 17.0502 13.7186C17.1648 13.8123 17.2793 13.8957 17.3939 13.9894C17.4356 14.0207 17.4356 14.0832 17.3835 14.104C16.8418 14.4269 16.2689 14.6873 15.6752 14.9165C15.6335 14.9269 15.6231 14.979 15.6335 15.0103C15.9668 15.6457 16.3418 16.2498 16.7481 16.8228C16.7793 16.8332 16.8106 16.8436 16.8418 16.8332C18.6335 16.2811 20.4356 15.4478 22.3106 14.0728C22.3314 14.0623 22.3418 14.0415 22.3418 14.0207C22.8002 9.30192 21.5814 5.20817 19.1127 1.57275C19.1023 1.56234 19.0918 1.55192 19.071 1.55192ZM7.87309 11.5311C6.80017 11.5311 5.90434 10.5415 5.90434 9.32275C5.90434 8.104 6.77934 7.11442 7.87309 7.11442C8.97725 7.11442 9.85225 8.11442 9.84184 9.32275C9.84184 10.5415 8.96684 11.5311 7.87309 11.5311ZM15.1335 11.5311C14.0606 11.5311 13.1648 10.5415 13.1648 9.32275C13.1648 8.104 14.0398 7.11442 15.1335 7.11442C16.2377 7.11442 17.1127 8.11442 17.1023 9.32275C17.1023 10.5415 16.2377 11.5311 15.1335 11.5311Z",
                      fill: "#7B85FF",
                    }),
                  }),
                }),
                n.jsx("a", {
                  href: "https://github.com/darklang/dark",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: " hover:text-blue-dbg",
                  children: n.jsx("img", {
                    src: m,
                    alt: "GitHub",
                    className: "h-5",
                  }),
                }),
                n.jsx("div", {
                  className: "border-l border-gray-200 h-6 mx-3",
                }),
                n.jsx(Rh, {
                  label: "Darklang Classic",
                  labelColor: "",
                  items: [
                    { text: "About", href: "/about" },
                    {
                      text: "Log in",
                      href: "https://login.darklang.com",
                      target: "_blank",
                    },
                    { text: "Sign up", href: "/signup" },
                  ],
                }),
              ],
            }),
            n.jsx("button", {
              className: "md:hidden focus:outline-none",
              onClick: v,
              "aria-label": "Toggle menu",
              children: n.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-6 w-6",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: A
                  ? n.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M6 18L18 6M6 6l12 12",
                    })
                  : n.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M4 6h16M4 12h16M4 18h16",
                    }),
              }),
            }),
          ],
        }),
        A &&
          n.jsx("div", {
            className: `md:hidden ${f} py-4 px-6 absolute w-full z-50 shadow-lg`,
            children: n.jsx("nav", {
              children: n.jsxs("ul", {
                className: "space-y-4",
                children: [
                  n.jsx("li", {
                    children: n.jsx(Re, {
                      to: "/",
                      className:
                        "block hover:text-blue-dbg text-sm font-medium",
                      onClick: () => j(!1),
                      children: "Get Started",
                    }),
                  }),
                  n.jsx("li", {
                    children: n.jsx(Re, {
                      to: "https://docs.darklang.com/next/introduction",
                      target: "_blank",
                      className:
                        "block hover:text-blue-dbg text-sm font-medium",
                      onClick: () => j(!1),
                      children: "Docs",
                    }),
                  }),
                  n.jsx("li", {
                    children: n.jsx(Re, {
                      to: "/cli",
                      className:
                        "block hover:text-blue-dbg text-sm font-medium",
                      onClick: () => j(!1),
                      children: "CLI",
                    }),
                  }),
                  n.jsx("li", {
                    children: n.jsx(Re, {
                      to: "/cloud",
                      className:
                        "block hover:text-blue-dbg text-sm font-medium",
                      onClick: () => j(!1),
                      children: "Cloud",
                    }),
                  }),
                  n.jsx("li", {
                    children: n.jsx(Re, {
                      to: "/packages",
                      className:
                        "block hover:text-blue-dbg text-sm font-medium",
                      onClick: () => j(!1),
                      children: "Packages",
                    }),
                  }),
                  n.jsx("li", {
                    children: n.jsx(Re, {
                      to: "/examples",
                      className:
                        "block hover:text-blue-dbg text-sm font-medium",
                      onClick: () => j(!1),
                      children: "Examples",
                    }),
                  }),
                  n.jsx("li", {
                    children: n.jsx(Re, {
                      to: "/try",
                      className:
                        "block hover:text-blue-dbg text-sm font-medium",
                      onClick: () => j(!1),
                      children: "Try",
                    }),
                  }),
                  n.jsxs("li", {
                    className: "py-2",
                    children: [
                      n.jsx("div", {
                        className: "font-medium text-sm",
                        children: "Company",
                      }),
                      n.jsxs("ul", {
                        className: "pl-4 mt-2 space-y-2",
                        children: [
                          n.jsx("li", {
                            children: n.jsx(Re, {
                              to: "/roadmap",
                              className: "block hover:text-blue-dbg text-sm",
                              onClick: () => j(!1),
                              children: "Roadmap",
                            }),
                          }),
                          n.jsx("li", {
                            children: n.jsx(Re, {
                              to: "https://blog.darklang.com/",
                              target: "_blank",
                              className: "block hover:text-blue-dbg text-sm",
                              onClick: () => j(!1),
                              children: "Blog",
                            }),
                          }),
                          n.jsx("li", {
                            children: n.jsx(Re, {
                              to: "https://github.com/sponsors/darklang",
                              target: "_blank",
                              className: "block hover:text-blue-dbg text-sm",
                              onClick: () => j(!1),
                              children: "Sponsor us",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsxs("li", {
                    className: "pt-2",
                    children: [
                      n.jsx("div", {
                        className: "font-medium text-sm",
                        children: "Darklang Classic",
                      }),
                      n.jsxs("ul", {
                        className: "pl-4 mt-2 space-y-2",
                        children: [
                          n.jsx("li", {
                            children: n.jsx(Re, {
                              to: "/about",
                              className: "block hover:text-blue-dbg text-sm",
                              onClick: () => j(!1),
                              children: "About",
                            }),
                          }),
                          n.jsx("li", {
                            children: n.jsx(Re, {
                              to: "https://login.darklang.com",
                              className: "block hover:text-blue-dbg text-sm",
                              target: "_blank",
                              onClick: () => j(!1),
                              children: "Log in",
                            }),
                          }),
                          n.jsx("li", {
                            children: n.jsx(Re, {
                              to: "/signup",
                              className: "block hover:text-blue-dbg text-sm",
                              onClick: () => j(!1),
                              children: "Sign up",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsx("li", {
                    className: "pt-4",
                    children: n.jsxs("div", {
                      className: "flex justify-end space-x-4 items-center",
                      children: [
                        n.jsx("a", {
                          href: "https://darklang.com/discord",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "hover:text-blue-dbg",
                          onClick: () => j(!1),
                          children: n.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "23",
                            height: "17",
                            viewBox: "0 0 23 17",
                            fill: "none",
                            children: n.jsx("path", {
                              d: "M19.071 1.55192C17.6856 0.906087 16.1856 0.437337 14.6231 0.166504C14.5956 0.166895 14.5694 0.178128 14.5502 0.197754C14.3627 0.541504 14.1439 0.98942 13.9981 1.33317C12.3408 1.08333 10.6554 1.08333 8.99809 1.33317C8.85225 0.979004 8.6335 0.541504 8.43559 0.197754C8.42517 0.176921 8.39392 0.166504 8.36267 0.166504C6.80017 0.437337 5.31059 0.906087 3.91475 1.55192C3.90434 1.55192 3.89392 1.56234 3.8835 1.57275C1.05017 5.81234 0.268921 9.93734 0.654338 14.0207C0.654338 14.0415 0.664754 14.0623 0.685588 14.0728C2.56059 15.4478 4.36267 16.2811 6.14392 16.8332C6.17517 16.8436 6.20642 16.8332 6.21684 16.8123C6.6335 16.2394 7.0085 15.6353 7.33142 14.9998C7.35225 14.9582 7.33142 14.9165 7.28975 14.9061C6.696 14.6769 6.1335 14.4061 5.58142 14.0936C5.53975 14.0728 5.53975 14.0103 5.571 13.979C5.68559 13.8957 5.80017 13.8019 5.91475 13.7186C5.93559 13.6978 5.96684 13.6978 5.98767 13.7082C9.571 15.3436 13.4356 15.3436 16.9773 13.7082C16.9981 13.6978 17.0293 13.6978 17.0502 13.7186C17.1648 13.8123 17.2793 13.8957 17.3939 13.9894C17.4356 14.0207 17.4356 14.0832 17.3835 14.104C16.8418 14.4269 16.2689 14.6873 15.6752 14.9165C15.6335 14.9269 15.6231 14.979 15.6335 15.0103C15.9668 15.6457 16.3418 16.2498 16.7481 16.8228C16.7793 16.8332 16.8106 16.8436 16.8418 16.8332C18.6335 16.2811 20.4356 15.4478 22.3106 14.0728C22.3314 14.0623 22.3418 14.0415 22.3418 14.0207C22.8002 9.30192 21.5814 5.20817 19.1127 1.57275C19.1023 1.56234 19.0918 1.55192 19.071 1.55192ZM7.87309 11.5311C6.80017 11.5311 5.90434 10.5415 5.90434 9.32275C5.90434 8.104 6.77934 7.11442 7.87309 7.11442C8.97725 7.11442 9.85225 8.11442 9.84184 9.32275C9.84184 10.5415 8.96684 11.5311 7.87309 11.5311ZM15.1335 11.5311C14.0606 11.5311 13.1648 10.5415 13.1648 9.32275C13.1648 8.104 14.0398 7.11442 15.1335 7.11442C16.2377 7.11442 17.1127 8.11442 17.1023 9.32275C17.1023 10.5415 16.2377 11.5311 15.1335 11.5311Z",
                              fill: "#7B85FF",
                            }),
                          }),
                        }),
                        n.jsx("a", {
                          href: "https://github.com/darklang/dark",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "hover:text-blue-dbg",
                          onClick: () => j(!1),
                          children: n.jsx("img", {
                            src: m,
                            alt: "GitHub",
                            className: "h-5",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
      ],
    });
  },
  qg = ({ currentPage: r }) => {
    const d = {
        home: "bg-white",
        about: "bg-dark text-white",
        signup: "bg-dark text-white",
        roadmap: "bg-white",
        cli: "bg-dark text-white",
        cloud: "bg-dark text-white",
        default: "bg-white",
      },
      f = d[r] || d.default,
      h = f.includes("bg-dark") ? $h : Jh;
    return n.jsx("footer", {
      className: `${f} p-8 mt-auto`,
      children: n.jsx("div", {
        className: "max-w-7xl mx-auto",
        children: n.jsxs("div", {
          className: "flex flex-col md:flex-row justify-between mb-8",
          children: [
            n.jsxs("div", {
              className: "mb-8 md:mb-0",
              children: [
                n.jsx("div", {
                  className: "flex items-center mb-4",
                  children: n.jsx("img", {
                    src: h,
                    alt: "Darklang",
                    className: "h-8 mr-2",
                  }),
                }),
                n.jsxs("p", {
                  className: "text-sm",
                  children: [
                    "Copyright © ",
                    new Date().getFullYear(),
                    " Dark Inc.",
                  ],
                }),
                n.jsxs("div", {
                  className: "flex space-x-4 mt-4",
                  children: [
                    n.jsx("a", {
                      href: "https://github.com/darklang",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": "GitHub",
                      className: "hover:text-purple-lbg transition-colors",
                      children: n.jsx("svg", {
                        className: "w-6 h-6",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: n.jsx("path", {
                          fillRule: "evenodd",
                          d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                          clipRule: "evenodd",
                        }),
                      }),
                    }),
                    n.jsx("a", {
                      href: "https://twitter.com/darklang",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": "Twitter",
                      className: "hover:text-purple-lbg transition-colors",
                      children: n.jsx("svg", {
                        className: "w-6 h-6",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: n.jsx("path", {
                          d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                        }),
                      }),
                    }),
                    n.jsx("a", {
                      href: "https://discord.gg/darklang",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": "Discord",
                      className: "hover:text-purple-lbg transition-colors",
                      children: n.jsx("svg", {
                        className: "w-6 h-6",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: n.jsx("path", {
                          d: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",
                        }),
                      }),
                    }),
                    n.jsx("a", {
                      href: "https://www.youtube.com/channel/UCYFfCbYcqGe3ZPZrEoiVR2A",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": "YouTube",
                      className: "hover:text-purple-lbg transition-colors",
                      children: n.jsx("svg", {
                        className: "w-6 h-6",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: n.jsx("path", {
                          d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            n.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-4 gap-12",
              children: [
                n.jsxs("div", {
                  children: [
                    n.jsx("h3", {
                      className: "font-semibold mb-4",
                      children: "Darklang Classic",
                    }),
                    n.jsxs("ul", {
                      className: "space-y-2 text-sm",
                      children: [
                        n.jsx("li", {
                          children: n.jsx(Re, {
                            to: "https://login.darklang.com",
                            className:
                              "hover:text-purple-lbg transition-colors",
                            target: "_blank",
                            children: "Sign in",
                          }),
                        }),
                        n.jsx("li", {
                          children: n.jsx(Re, {
                            to: "/signup",
                            className:
                              "hover:text-purple-lbg transition-colors",
                            target: "_blank",
                            children: "Sign up",
                          }),
                        }),
                        n.jsx("li", {
                          children: n.jsx(Re, {
                            to: "https://darklang.com/desktop-client",
                            className:
                              "hover:text-purple-lbg transition-colors",
                            target: "_blank",
                            children: "Desktop client",
                          }),
                        }),
                        n.jsx("li", {
                          children: n.jsx("a", {
                            href: "https://darklang.com/mailing-list",
                            className:
                              "hover:text-purple-lbg transition-colors",
                            target: "_blank",
                            children: "Mailing list",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                n.jsxs("div", {
                  children: [
                    n.jsx("h3", {
                      className: "font-semibold mb-4",
                      children: "Learning Darklang Classic",
                    }),
                    n.jsxs("ul", {
                      className: "space-y-2 text-sm",
                      children: [
                        n.jsx("li", {
                          children: n.jsx(Re, {
                            to: "https://www.youtube.com/watch?v=orRn2kTtRXQ",
                            className:
                              "hover:text-purple-lbg transition-colors",
                            target: "_blank",
                            children: "Demo video",
                          }),
                        }),
                        n.jsx("li", {
                          children: n.jsx(Re, {
                            to: "https://youtube.com/c/Darklang/videos",
                            className:
                              "hover:text-purple-lbg transition-colors",
                            target: "_blank",
                            children: "Tutorial video",
                          }),
                        }),
                        n.jsx("li", {
                          children: n.jsx(Re, {
                            to: "https://docs.darklang.com/introduction",
                            className:
                              "hover:text-purple-lbg transition-colors",
                            target: "_blank",
                            children: "Documentation",
                          }),
                        }),
                        n.jsx("li", {
                          children: n.jsx(Re, {
                            to: "https://docs.darklang.com/tutorials/first-dark-application",
                            className:
                              "hover:text-purple-lbg transition-colors",
                            target: "_blank",
                            children: "Tutorial",
                          }),
                        }),
                        n.jsx("li", {
                          children: n.jsx(Re, {
                            to: "https://docs.darklang.com/category/walk-throughs",
                            className:
                              "hover:text-purple-lbg transition-colors",
                            target: "_blank",
                            children: "Walk-throughs",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                n.jsxs("div", {
                  children: [
                    n.jsx("h3", {
                      className: "font-semibold mb-4",
                      children: "Development",
                    }),
                    n.jsxs("ul", {
                      className: "space-y-2 text-sm",
                      children: [
                        n.jsx("li", {
                          children: n.jsx("a", {
                            href: "https://blog.darklang.com",
                            className:
                              "hover:text-purple-lbg transition-colors",
                            target: "_blank",
                            children: "Blog",
                          }),
                        }),
                        n.jsx("li", {
                          children: n.jsx("a", {
                            href: "https://github.com/darklang/dark",
                            className:
                              "hover:text-purple-lbg transition-colors",
                            target: "_blank",
                            children: "Source",
                          }),
                        }),
                        n.jsx("li", {
                          children: n.jsx("a", {
                            href: "https://darklang.com/notion",
                            className:
                              "hover:text-purple-lbg transition-colors",
                            target: "_blank",
                            children: "Roadmap",
                          }),
                        }),
                        n.jsx("li", {
                          children: n.jsx("a", {
                            href: "https://github.com/darklang/dark/issues",
                            className:
                              "hover:text-purple-lbg transition-colors",
                            target: "_blank",
                            children: "Issues",
                          }),
                        }),
                        n.jsx("li", {
                          children: n.jsx("a", {
                            href: "https://docs.darklang.com/changelog",
                            className:
                              "hover:text-purple-lbg transition-colors",
                            target: "_blank",
                            children: "Changelog",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                n.jsxs("div", {
                  children: [
                    n.jsx("h3", {
                      className: "font-semibold mb-4",
                      children: "Community",
                    }),
                    n.jsxs("ul", {
                      className: "space-y-2 text-sm",
                      children: [
                        n.jsx("li", {
                          children: n.jsx("a", {
                            href: "https://darklang.com/discord",
                            className:
                              "hover:text-purple-lbg transition-colors",
                            target: "_blank",
                            children: "Discord",
                          }),
                        }),
                        n.jsx("li", {
                          children: n.jsx("a", {
                            href: "https://darklang.com/code-of-conduct",
                            className:
                              "hover:text-purple-lbg transition-colors",
                            target: "_blank",
                            children: "Code of conduct",
                          }),
                        }),
                        n.jsx("li", {
                          children: n.jsx("a", {
                            href: "https://docs.darklang.com/contributing/getting-started",
                            className:
                              "hover:text-purple-lbg transition-colors",
                            target: "_blank",
                            children: "Contributor docs",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Gg = () => {
    const d = xa().pathname.substring(1) || "home";
    return n.jsxs("div", {
      className: "flex flex-col min-h-screen bg-transparent",
      children: [
        n.jsx(Yg, { currentPage: d }),
        n.jsx("main", { className: "flex-grow", children: n.jsx(ag, {}) }),
        n.jsx(qg, { currentPage: d }),
      ],
    });
  },
  ga = ({
    variant: r = "primary",
    size: d = "md",
    children: f,
    className: u = "",
    ...h
  }) => {
    let m = "rounded font-medium transition-colors focus:outline-none";
    const A = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        outline: "border bg-transparent hover:bg-gray-100",
      },
      j = { sm: "px-2 py-1 text-sm", md: "px-4 py-2", lg: "px-6 py-3" },
      v = `${m} ${A[r]} ${j[d]} ${u}`;
    return n.jsx("button", { className: v, ...h, children: f });
  },
  Qg = () =>
    n.jsx("section", {
      className:
        "w-full max-w-7xl 2xl:max-w-[100rem] mx-auto px-4 py-20 md:py-32",
      children: n.jsxs("div", {
        className: "flex flex-col items-center text-center",
        children: [
          n.jsxs("h1", {
            className:
              "text-4xl md:text-6xl lg:text-[80px] font-bold mb-10 tracking-tight",
            children: [
              "Build above the ",
              n.jsx("span", {
                className: "text-blue-primary",
                children: "cloud",
              }),
            ],
          }),
          n.jsx("p", {
            className:
              "text-lg md:text-2xl lg:text-3xl mb-12 max-w-6xl text-dark",
            children:
              "Darklang is an integrated language, framework, runtime, and editor for building software— CLI scripts and REPLs, cloud apps, and more",
          }),
          n.jsxs("p", {
            className:
              "text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl text-gray-dark font-medium",
            children: [
              "Write ",
              n.jsx("span", { className: "italic", children: "simple" }),
              " code that runs everywhere. No setup.",
              " ",
              n.jsx("span", {
                className: "text-purple-lbg font-semibold",
                children: "Just code.",
              }),
            ],
          }),
          n.jsx(ga, {
            variant: "primary",
            size: "lg",
            className:
              "bg-purple-lbg hover:bg-purple-secondry text-white-custom mb-16",
            onClick: () => (window.location.href = "#"),
            children: "Get Started →",
          }),
          n.jsx("div", {
            className:
              "w-full max-w-4xl 2xl:max-w-7xl h-96 2xl:h-[45rem] bg-gray-300 rounded-md mb-16",
          }),
        ],
      }),
    }),
  Vg = () => {
    const [r, d] = T.useState(0),
      [f, u] = T.useState({ setup: 1 }),
      [h, m] = T.useState([]),
      [A, j] = T.useState(0),
      [v, x] = T.useState("script"),
      S = [
        {
          id: "setup",
          title: "Setup",
          substeps: [
            { id: "install-nodejs", title: "Install Node.js and NPM" },
            { id: "create-project", title: "Create a new Node.js project" },
            { id: "npm-init", title: "Initialize project with npm init" },
          ],
        },
        {
          id: "development",
          title: "Development",
          substeps: [
            { id: "write-code", title: "Write application code" },
            { id: "env-vars", title: "Set up environment variables" },
            { id: "dependencies", title: "Install required dependencies" },
            { id: "env-vars2", title: "Set up environment variables" },
            {
              id: "config-files",
              title:
                "Create configuration files (.gitignore, package.json, etc)",
            },
          ],
        },
        {
          id: "database",
          title: "Database Setup",
          substeps: [
            { id: "choose-db", title: "Choose a database system" },
            { id: "setup-db", title: "Set up database" },
            { id: "create-schema", title: "Create database schema" },
            { id: "config-connection", title: "Configure database connection" },
            { id: "setup-orm", title: "Set up ORM" },
          ],
        },
        {
          id: "version-control",
          title: "Version Control",
          substeps: [
            { id: "init-git", title: "Initialize Git repository" },
            {
              id: "commit-push",
              title: "Create branch, commit, and push code",
            },
          ],
        },
        {
          id: "testing",
          title: "Testing",
          substeps: [
            { id: "unit-tests", title: "Write unit tests" },
            { id: "integration-tests", title: "Write integration tests" },
            { id: "test-env", title: "Set up test environment" },
            { id: "run-tests", title: "Run tests locally" },
          ],
        },
        {
          id: "infrastructure",
          title: "Infrastructure",
          substeps: [
            { id: "choose-hosting", title: "Choose a hosting provider" },
            {
              id: "create-account",
              title: "Create an account with the hosting provider",
            },
            {
              id: "register-domain",
              title: "Register a domain name (optional)",
            },
            { id: "prod-db", title: "Set up production database" },
          ],
        },
        {
          id: "deployment",
          title: "Deployment",
          substeps: [
            { id: "build-process", title: "Configure Build process" },
            {
              id: "env-hosting",
              title: "Setup environment variables on hosting platform",
            },
            { id: "deploy-app", title: "Deploy application to hosting" },
            { id: "setup-cicd", title: "Set up CI/CD" },
            { id: "test-deployed", title: "Test deployed application" },
            { id: "launch", title: "Launch application to users" },
          ],
        },
      ],
      q =
        v === "script"
          ? [
              {
                id: "get-cli",
                title: "Get CLI",
                description: "from https://github.com/darklang/dark/releases",
              },
              {
                id: "open-cli",
                title: "Open CLI",
                optional: !0,
                description: "Install is optional",
              },
              { id: "write-code", title: "Write code" },
              {
                id: "debug-code",
                title: "Debug code",
                notice: "nothing to setup",
                description: "using traces",
              },
              {
                id: "run-code",
                title: "Run code",
                description:
                  "As soon as functions/types/constants are created they are accessible publicly (or privately) in the package manager",
              },
              {
                id: "share-code",
                title: "Share code",
                optional: !0,
                description:
                  "Run $ darklang share @user/myModule.myFnName to instantly generate a shareable link for your code",
              },
              {
                id: "deploy-code",
                title: "Deploy code",
                optional: !0,
                description:
                  "Run $ darklang deploy @user/myModule.myFnName to deploy your code to our cloud or yours",
              },
            ]
          : [
              {
                id: "go-to-editor",
                title: "Go to editor.darklang.com",
                description:
                  "or download our extension from https://marketplace.visualstudio.com/items?itemName=Darklang.darklang-vs-code-extension",
              },
              {
                id: "write-code",
                title: "Write code",
                notice: "Ready to go—no setup needed",
                description:
                  "create functions, types, DBs, HTTP handlers, Crons, Workers, etc.",
              },
              {
                id: "debug-code",
                title: "Debug code",
                notice: "no setup needed",
                description: "using traces",
              },
              {
                id: "run-code",
                title: "Run code",
                description:
                  "As soon as functions/types/constants are created they are accessible publicly (or privately) in the package manager.",
              },
              {
                id: "share-code",
                title: "Share code",
                optional: !0,
                description:
                  "Click the share button to instantly generate a shareable link for your code.",
              },
              { id: "instant-deploy", title: "Instant Deploy", optional: !0 },
            ],
      z = {
        timeSpent: "12mins 34s",
        dependencyIssues: "5 errors",
        packagesInstalled: "67 packages",
      },
      J = {
        timeSpent: "1mins 23s",
        dependencyIssues: "0 errors",
        packagesInstalled: "0 packages",
      };
    T.useEffect(() => {
      let P;
      return (
        (P = setInterval(() => {
          const Ne = r;
          if (Ne >= S.length) return;
          const je = S[Ne],
            Se = je.id,
            we = je.substeps.length,
            Qe = f[Se] ?? -1;
          if (Qe < we - 1) u(Xe => ({ ...Xe, [Se]: Qe + 1 }));
          else {
            m(He => [...He, Ne]);
            const Xe = Ne + 1;
            Xe < S.length &&
              setTimeout(() => {
                d(Xe), u(He => ({ ...He, [S[Xe].id]: -1 }));
              }, 400);
          }
        }, 700)),
        () => {
          P && clearInterval(P);
        }
      );
    }, [r, f, S]),
      T.useEffect(() => {
        h.includes(S.length - 1) && d(S.length);
      }, [h, S.length]),
      T.useEffect(() => {
        if (A < q.length) {
          const P = setInterval(() => {
            j(F => (F < q.length ? F + 1 : F));
          }, 1200);
          return () => clearInterval(P);
        }
      }, [A, q.length]);
    const Q = P => h.includes(P) || P < r,
      H = P => P === r && r < S.length,
      ae = (P, F) => {
        if (Q(P)) return !0;
        const Ne = S[P].id,
          je = f[Ne] || -1;
        return P === r && F <= je;
      },
      Z = P => P < A;
    return n.jsx("section", {
      className: "py-16",
      children: n.jsxs("div", {
        className: "max-w-7xl mx-auto px-4",
        children: [
          n.jsxs("h2", {
            className: "text-4xl font-bold text-center mb-12",
            children: [
              "Get started in ",
              n.jsx("span", {
                className: "text-purple-lbg",
                children: "no time",
              }),
            ],
          }),
          n.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-18",
            children: [
              n.jsxs("div", {
                className:
                  "bg-white rounded-xl shadow-md inset-shadow-2xs p-6 md:p-10",
                children: [
                  n.jsx("h3", {
                    className: "md:text-xl font-bold mb-4",
                    children: "Building a Node app",
                  }),
                  n.jsxs("div", {
                    className:
                      "flex justify-between p-4 mb-6 rounded-lg bg-neutral-100",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx("div", {
                            className: "mr-1 md:mr-3",
                            children: n.jsx("svg", {
                              className: "h-3 w-3 md:h-5 md:w-5 text-gray-500",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: n.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                              }),
                            }),
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsx("div", {
                                className:
                                  "text-xs font-semibold text-gray-500",
                                children: "Time Spent on Setup",
                              }),
                              n.jsx("div", {
                                className: "text-xs text-gray-400",
                                children: z.timeSpent,
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx("div", {
                            className: "mr-1 md:mr-3",
                            children: n.jsx("svg", {
                              className: "h-3 w-3 md:h-5 md:w-5 text-gray-500",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: n.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                              }),
                            }),
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsx("div", {
                                className:
                                  "text-xs font-semibold text-gray-500",
                                children: "Dependency Issues",
                              }),
                              n.jsx("div", {
                                className: "text-xs text-gray-400",
                                children: z.dependencyIssues,
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx("div", {
                            className: "mr-1 md:mr-3",
                            children: n.jsx("svg", {
                              className: "h-3 w-3 md:h-5 md:w-5 text-gray-500",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: n.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                              }),
                            }),
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsx("div", {
                                className:
                                  "text-xs font-semibold text-gray-500",
                                children: "Packages Installed",
                              }),
                              n.jsx("div", {
                                className: "text-xs text-gray-400",
                                children: z.packagesInstalled,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "relative ml-7",
                    children: [
                      n.jsx("div", {
                        className:
                          "absolute left-0 top-2 bottom-0 w-0.5 bg-gray-200",
                      }),
                      n.jsx("div", {
                        className: "space-y-6",
                        children: S.map((P, F) =>
                          n.jsxs(
                            "div",
                            {
                              className: "relative",
                              children: [
                                n.jsxs("div", {
                                  className: "flex mb-2",
                                  children: [
                                    n.jsx("div", {
                                      className: `absolute left-0 w-5 h-5 -ml-2.5 rounded-full flex items-center justify-center ${Q(F) || H(F) ? "bg-purple-lbg" : "bg-white border-2 border-gray-300"}`,
                                      children:
                                        (Q(F) || H(F)) &&
                                        n.jsx("svg", {
                                          className: "h-3 w-3 text-white",
                                          fill: "currentColor",
                                          viewBox: "0 0 20 20",
                                          children: n.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                            clipRule: "evenodd",
                                          }),
                                        }),
                                    }),
                                    n.jsx("div", {
                                      className:
                                        "ml-8 text-sm 2xl:text-base font-medium",
                                      children: P.title,
                                    }),
                                  ],
                                }),
                                H(F) &&
                                  n.jsx("div", {
                                    className: "ml-10 mt-2 space-y-6",
                                    children: P.substeps.map((Ne, je) => {
                                      const Se = ae(F, je),
                                        we =
                                          F === r && je === (f[P.id] || -1) + 1;
                                      return n.jsxs(
                                        "div",
                                        {
                                          className: "relative",
                                          children: [
                                            n.jsx("div", {
                                              className:
                                                "absolute left-0 top-0 -bottom-6 -mt-1 w-0.5 bg-gray-200",
                                            }),
                                            n.jsxs("div", {
                                              className: "flex items-center",
                                              children: [
                                                n.jsx("div", {
                                                  className: `absolute left-0 w-4 h-4 -ml-2 rounded-full ${Se ? "bg-white border-2 border-purple-lbg" : we ? "bg-white border-2 border-gray-400 animate-pulse" : "bg-white border-2 border-gray-200"}`,
                                                  children:
                                                    Se &&
                                                    n.jsx("div", {
                                                      className:
                                                        "absolute inset-1 rounded-full bg-purple-200",
                                                    }),
                                                }),
                                                n.jsx("div", {
                                                  className:
                                                    "text-sm 2xl:text-base ml-6",
                                                  children: Ne.title,
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        Ne.id,
                                      );
                                    }),
                                  }),
                              ],
                            },
                            P.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              n.jsxs("div", {
                className:
                  "bg-white rounded-xl shadow-md inset-shadow-2xs p-6 md:p-10",
                children: [
                  n.jsx("h3", {
                    className: "text-xl font-bold mb-4",
                    children: "Building a Dark app",
                  }),
                  n.jsxs("div", {
                    className:
                      "flex justify-between p-4 mb-6 rounded-lg bg-neutral-100",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx("div", {
                            className: "mr-1 md:mr-3",
                            children: n.jsx("svg", {
                              className: "h-3 w-3 md:h-5 md:w-5 text-gray-500",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: n.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                              }),
                            }),
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsx("div", {
                                className:
                                  "text-xs font-semibold text-gray-500",
                                children: "Time Spent on Setup",
                              }),
                              n.jsx("div", {
                                className: "text-xs text-gray-400",
                                children: J.timeSpent,
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx("div", {
                            className: "mr-1 md:mr-3",
                            children: n.jsx("svg", {
                              className: "h-3 w-3 md:h-5 md:w-5 text-gray-500",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: n.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                              }),
                            }),
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsx("div", {
                                className:
                                  "text-xs font-semibold text-gray-500",
                                children: "Dependency Issues",
                              }),
                              n.jsx("div", {
                                className: "text-xs text-gray-400",
                                children: J.dependencyIssues,
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx("div", {
                            className: "mr-1 md:mr-3",
                            children: n.jsx("svg", {
                              className: "h-3 w-3 md:h-5 md:w-5 text-gray-500",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: n.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                              }),
                            }),
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsx("div", {
                                className:
                                  "text-xs font-semibold text-gray-500",
                                children: "Packages Installed",
                              }),
                              n.jsx("div", {
                                className: "text-xs text-gray-400",
                                children: J.packagesInstalled,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsx("div", {
                    className: "mb-6 mx-10 border-b text-gray-200",
                    children: n.jsxs("div", {
                      className: "flex justify-evenly",
                      children: [
                        n.jsx("button", {
                          onClick: () => {
                            x("script"), j(0);
                          },
                          className: `px-4 py-2 text-sm md:text-base font-medium ${v === "script" ? "text-purple-lbg border-b-2 border-purple-lbg" : "text-gray-400"}`,
                          children: "CLI script",
                        }),
                        n.jsx("button", {
                          onClick: () => {
                            x("cloud"), j(0);
                          },
                          className: `px-4 py-2 text-sm md:text-base font-medium ${v === "cloud" ? "text-purple-lbg border-b-2 border-purple-lbg" : "text-gray-400"}`,
                          children: "Cloud app",
                        }),
                      ],
                    }),
                  }),
                  n.jsxs("div", {
                    className: "relative ml-7",
                    children: [
                      n.jsx("div", {
                        className:
                          "absolute left-0 top-2 bottom-0 w-0.5 bg-gray-200",
                      }),
                      n.jsx("div", {
                        className: "space-y-6",
                        children: q.map((P, F) =>
                          n.jsx(
                            "div",
                            {
                              className: "relative",
                              children: n.jsxs("div", {
                                className: "flex",
                                children: [
                                  n.jsx("div", {
                                    className: `absolute left-0 w-5 h-5 -ml-2.5 rounded-full flex items-center justify-center ${Z(F) ? "bg-purple-lbg" : "bg-white border-2 border-gray-300"}`,
                                    children:
                                      Z(F) &&
                                      n.jsx("svg", {
                                        className: "h-3 w-3 text-white",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: n.jsx("path", {
                                          fillRule: "evenodd",
                                          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                          clipRule: "evenodd",
                                        }),
                                      }),
                                  }),
                                  n.jsxs("div", {
                                    className: "ml-8",
                                    children: [
                                      n.jsxs("div", {
                                        className: "flex items-center",
                                        children: [
                                          n.jsx("span", {
                                            className:
                                              "text-sm 2xl:text-base font-medium",
                                            children: P.title,
                                          }),
                                          P.optional &&
                                            n.jsx("span", {
                                              className:
                                                "ml-2 px-2 py-0.5 text-xs bg-blue-lbg/10 text-blue-lbg rounded",
                                              children: "Optional",
                                            }),
                                          P.notice &&
                                            n.jsx("span", {
                                              className:
                                                "ml-2 px-2 py-0.5 text-xs bg-blue-lbg/10 text-blue-lbg rounded",
                                              children: P.notice,
                                            }),
                                        ],
                                      }),
                                      P.description &&
                                        n.jsx("div", {
                                          className:
                                            "mt-1 text-xs md:text-sm text-gray-500",
                                          children: P.description,
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            P.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  pa = ({ subtitle: r, children: d, align: f = "left", className: u = "" }) => {
    const h = { left: "text-left", center: "text-center", right: "text-right" }[
      f
    ];
    return n.jsxs("div", {
      className: `${h} ${u}`,
      children: [
        r &&
          n.jsx("div", {
            className: "mb-4 text-purple-lbg text-lg font-medium",
            children: r,
          }),
        n.jsx("h2", {
          className:
            "text-3xl md:text-4xl md:text-5xl md:leading-16 font-bold mb-8 text-black-custom",
          children: d,
        }),
      ],
    });
  };
var _u, Th;
function Xg() {
  if (Th) return _u;
  Th = 1;
  function r(p) {
    return (
      p instanceof Map
        ? (p.clear =
            p.delete =
            p.set =
              function () {
                throw new Error("map is read-only");
              })
        : p instanceof Set &&
          (p.add =
            p.clear =
            p.delete =
              function () {
                throw new Error("set is read-only");
              }),
      Object.freeze(p),
      Object.getOwnPropertyNames(p).forEach(_ => {
        const V = p[_],
          oe = typeof V;
        (oe === "object" || oe === "function") && !Object.isFrozen(V) && r(V);
      }),
      p
    );
  }
  class d {
    constructor(_) {
      _.data === void 0 && (_.data = {}),
        (this.data = _.data),
        (this.isMatchIgnored = !1);
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function f(p) {
    return p
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;");
  }
  function u(p, ..._) {
    const V = Object.create(null);
    for (const oe in p) V[oe] = p[oe];
    return (
      _.forEach(function (oe) {
        for (const Ze in oe) V[Ze] = oe[Ze];
      }),
      V
    );
  }
  const h = "</span>",
    m = p => !!p.scope,
    A = (p, { prefix: _ }) => {
      if (p.startsWith("language:")) return p.replace("language:", "language-");
      if (p.includes(".")) {
        const V = p.split(".");
        return [
          `${_}${V.shift()}`,
          ...V.map((oe, Ze) => `${oe}${"_".repeat(Ze + 1)}`),
        ].join(" ");
      }
      return `${_}${p}`;
    };
  class j {
    constructor(_, V) {
      (this.buffer = ""), (this.classPrefix = V.classPrefix), _.walk(this);
    }
    addText(_) {
      this.buffer += f(_);
    }
    openNode(_) {
      if (!m(_)) return;
      const V = A(_.scope, { prefix: this.classPrefix });
      this.span(V);
    }
    closeNode(_) {
      m(_) && (this.buffer += h);
    }
    value() {
      return this.buffer;
    }
    span(_) {
      this.buffer += `<span class="${_}">`;
    }
  }
  const v = (p = {}) => {
    const _ = { children: [] };
    return Object.assign(_, p), _;
  };
  class x {
    constructor() {
      (this.rootNode = v()), (this.stack = [this.rootNode]);
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    add(_) {
      this.top.children.push(_);
    }
    openNode(_) {
      const V = v({ scope: _ });
      this.add(V), this.stack.push(V);
    }
    closeNode() {
      if (this.stack.length > 1) return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); );
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    walk(_) {
      return this.constructor._walk(_, this.rootNode);
    }
    static _walk(_, V) {
      return (
        typeof V == "string"
          ? _.addText(V)
          : V.children &&
            (_.openNode(V),
            V.children.forEach(oe => this._walk(_, oe)),
            _.closeNode(V)),
        _
      );
    }
    static _collapse(_) {
      typeof _ != "string" &&
        _.children &&
        (_.children.every(V => typeof V == "string")
          ? (_.children = [_.children.join("")])
          : _.children.forEach(V => {
              x._collapse(V);
            }));
    }
  }
  class S extends x {
    constructor(_) {
      super(), (this.options = _);
    }
    addText(_) {
      _ !== "" && this.add(_);
    }
    startScope(_) {
      this.openNode(_);
    }
    endScope() {
      this.closeNode();
    }
    __addSublanguage(_, V) {
      const oe = _.root;
      V && (oe.scope = `language:${V}`), this.add(oe);
    }
    toHTML() {
      return new j(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function B(p) {
    return p ? (typeof p == "string" ? p : p.source) : null;
  }
  function L(p) {
    return J("(?=", p, ")");
  }
  function q(p) {
    return J("(?:", p, ")*");
  }
  function z(p) {
    return J("(?:", p, ")?");
  }
  function J(...p) {
    return p.map(V => B(V)).join("");
  }
  function Q(p) {
    const _ = p[p.length - 1];
    return typeof _ == "object" && _.constructor === Object
      ? (p.splice(p.length - 1, 1), _)
      : {};
  }
  function H(...p) {
    return (
      "(" + (Q(p).capture ? "" : "?:") + p.map(oe => B(oe)).join("|") + ")"
    );
  }
  function ae(p) {
    return new RegExp(p.toString() + "|").exec("").length - 1;
  }
  function Z(p, _) {
    const V = p && p.exec(_);
    return V && V.index === 0;
  }
  const P = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function F(p, { joinWith: _ }) {
    let V = 0;
    return p
      .map(oe => {
        V += 1;
        const Ze = V;
        let $e = B(oe),
          I = "";
        for (; $e.length > 0; ) {
          const G = P.exec($e);
          if (!G) {
            I += $e;
            break;
          }
          (I += $e.substring(0, G.index)),
            ($e = $e.substring(G.index + G[0].length)),
            G[0][0] === "\\" && G[1]
              ? (I += "\\" + String(Number(G[1]) + Ze))
              : ((I += G[0]), G[0] === "(" && V++);
        }
        return I;
      })
      .map(oe => `(${oe})`)
      .join(_);
  }
  const Ne = /\b\B/,
    je = "[a-zA-Z]\\w*",
    Se = "[a-zA-Z_]\\w*",
    we = "\\b\\d+(\\.\\d+)?",
    Qe =
      "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    Xe = "\\b(0b[01]+)",
    He =
      "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    qt = (p = {}) => {
      const _ = /^#![ ]*\//;
      return (
        p.binary && (p.begin = J(_, /.*\b/, p.binary, /\b.*/)),
        u(
          {
            scope: "meta",
            begin: _,
            end: /$/,
            relevance: 0,
            "on:begin": (V, oe) => {
              V.index !== 0 && oe.ignoreMatch();
            },
          },
          p,
        )
      );
    },
    vt = { begin: "\\\\[\\s\\S]", relevance: 0 },
    nt = {
      scope: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [vt],
    },
    k = {
      scope: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [vt],
    },
    $ = {
      begin:
        /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
    },
    ne = function (p, _, V = {}) {
      const oe = u({ scope: "comment", begin: p, end: _, contains: [] }, V);
      oe.contains.push({
        scope: "doctag",
        begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
        excludeBegin: !0,
        relevance: 0,
      });
      const Ze = H(
        "I",
        "a",
        "is",
        "so",
        "us",
        "to",
        "at",
        "if",
        "in",
        "it",
        "on",
        /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
        /[A-Za-z]+[-][a-z]+/,
        /[A-Za-z][a-z]{2,}/,
      );
      return (
        oe.contains.push({
          begin: J(/[ ]+/, "(", Ze, /[.]?[:]?([.][ ]|[ ])/, "){3}"),
        }),
        oe
      );
    },
    Ae = ne("//", "$"),
    b = ne("/\\*", "\\*/"),
    U = ne("#", "$"),
    W = { scope: "number", begin: we, relevance: 0 },
    K = { scope: "number", begin: Qe, relevance: 0 },
    re = { scope: "number", begin: Xe, relevance: 0 },
    Ee = {
      scope: "regexp",
      begin: /\/(?=[^/\n]*\/)/,
      end: /\/[gimuy]*/,
      contains: [vt, { begin: /\[/, end: /\]/, relevance: 0, contains: [vt] }],
    },
    fe = { scope: "title", begin: je, relevance: 0 },
    St = { scope: "title", begin: Se, relevance: 0 },
    qe = { begin: "\\.\\s*" + Se, relevance: 0 };
  var Yl = Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: nt,
    BACKSLASH_ESCAPE: vt,
    BINARY_NUMBER_MODE: re,
    BINARY_NUMBER_RE: Xe,
    COMMENT: ne,
    C_BLOCK_COMMENT_MODE: b,
    C_LINE_COMMENT_MODE: Ae,
    C_NUMBER_MODE: K,
    C_NUMBER_RE: Qe,
    END_SAME_AS_BEGIN: function (p) {
      return Object.assign(p, {
        "on:begin": (_, V) => {
          V.data._beginMatch = _[1];
        },
        "on:end": (_, V) => {
          V.data._beginMatch !== _[1] && V.ignoreMatch();
        },
      });
    },
    HASH_COMMENT_MODE: U,
    IDENT_RE: je,
    MATCH_NOTHING_RE: Ne,
    METHOD_GUARD: qe,
    NUMBER_MODE: W,
    NUMBER_RE: we,
    PHRASAL_WORDS_MODE: $,
    QUOTE_STRING_MODE: k,
    REGEXP_MODE: Ee,
    RE_STARTERS_RE: He,
    SHEBANG: qt,
    TITLE_MODE: fe,
    UNDERSCORE_IDENT_RE: Se,
    UNDERSCORE_TITLE_MODE: St,
  });
  function Xa(p, _) {
    p.input[p.index - 1] === "." && _.ignoreMatch();
  }
  function On(p, _) {
    p.className !== void 0 && ((p.scope = p.className), delete p.className);
  }
  function zn(p, _) {
    _ &&
      p.beginKeywords &&
      ((p.begin =
        "\\b(" + p.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)"),
      (p.__beforeBegin = Xa),
      (p.keywords = p.keywords || p.beginKeywords),
      delete p.beginKeywords,
      p.relevance === void 0 && (p.relevance = 0));
  }
  function Ln(p, _) {
    Array.isArray(p.illegal) && (p.illegal = H(...p.illegal));
  }
  function br(p, _) {
    if (p.match) {
      if (p.begin || p.end)
        throw new Error("begin & end are not supported with match");
      (p.begin = p.match), delete p.match;
    }
  }
  function vr(p, _) {
    p.relevance === void 0 && (p.relevance = 1);
  }
  const Gt = (p, _) => {
      if (!p.beforeMatch) return;
      if (p.starts) throw new Error("beforeMatch cannot be used with starts");
      const V = Object.assign({}, p);
      Object.keys(p).forEach(oe => {
        delete p[oe];
      }),
        (p.keywords = V.keywords),
        (p.begin = J(V.beforeMatch, L(V.begin))),
        (p.starts = {
          relevance: 0,
          contains: [Object.assign(V, { endsParent: !0 })],
        }),
        (p.relevance = 0),
        delete V.beforeMatch;
    },
    yr = [
      "of",
      "and",
      "for",
      "in",
      "not",
      "or",
      "if",
      "then",
      "parent",
      "list",
      "value",
    ],
    Wi = "keyword";
  function Bn(p, _, V = Wi) {
    const oe = Object.create(null);
    return (
      typeof p == "string"
        ? Ze(V, p.split(" "))
        : Array.isArray(p)
          ? Ze(V, p)
          : Object.keys(p).forEach(function ($e) {
              Object.assign(oe, Bn(p[$e], _, $e));
            }),
      oe
    );
    function Ze($e, I) {
      _ && (I = I.map(G => G.toLowerCase())),
        I.forEach(function (G) {
          const le = G.split("|");
          oe[le[0]] = [$e, Za(le[0], le[1])];
        });
    }
  }
  function Za(p, _) {
    return _ ? Number(_) : jr(p) ? 0 : 1;
  }
  function jr(p) {
    return yr.includes(p.toLowerCase());
  }
  const Un = {},
    pl = p => {
      console.error(p);
    },
    Fi = (p, ..._) => {
      console.log(`WARN: ${p}`, ..._);
    },
    Qt = (p, _) => {
      Un[`${p}/${_}`] ||
        (console.log(`Deprecated as of ${p}. ${_}`), (Un[`${p}/${_}`] = !0));
    },
    dt = new Error();
  function Pt(p, _, { key: V }) {
    let oe = 0;
    const Ze = p[V],
      $e = {},
      I = {};
    for (let G = 1; G <= _.length; G++)
      (I[G + oe] = Ze[G]), ($e[G + oe] = !0), (oe += ae(_[G - 1]));
    (p[V] = I), (p[V]._emit = $e), (p[V]._multi = !0);
  }
  function wt(p) {
    if (Array.isArray(p.begin)) {
      if (p.skip || p.excludeBegin || p.returnBegin)
        throw (
          (pl(
            "skip, excludeBegin, returnBegin not compatible with beginScope: {}",
          ),
          dt)
        );
      if (typeof p.beginScope != "object" || p.beginScope === null)
        throw (pl("beginScope must be object"), dt);
      Pt(p, p.begin, { key: "beginScope" }),
        (p.begin = F(p.begin, { joinWith: "" }));
    }
  }
  function Nr(p) {
    if (Array.isArray(p.end)) {
      if (p.skip || p.excludeEnd || p.returnEnd)
        throw (
          (pl("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
          dt)
        );
      if (typeof p.endScope != "object" || p.endScope === null)
        throw (pl("endScope must be object"), dt);
      Pt(p, p.end, { key: "endScope" }), (p.end = F(p.end, { joinWith: "" }));
    }
  }
  function Sr(p) {
    p.scope &&
      typeof p.scope == "object" &&
      p.scope !== null &&
      ((p.beginScope = p.scope), delete p.scope);
  }
  function wr(p) {
    Sr(p),
      typeof p.beginScope == "string" &&
        (p.beginScope = { _wrap: p.beginScope }),
      typeof p.endScope == "string" && (p.endScope = { _wrap: p.endScope }),
      wt(p),
      Nr(p);
  }
  function Ka(p) {
    function _(I, G) {
      return new RegExp(
        B(I),
        "m" +
          (p.case_insensitive ? "i" : "") +
          (p.unicodeRegex ? "u" : "") +
          (G ? "g" : ""),
      );
    }
    class V {
      constructor() {
        (this.matchIndexes = {}),
          (this.regexes = []),
          (this.matchAt = 1),
          (this.position = 0);
      }
      addRule(G, le) {
        (le.position = this.position++),
          (this.matchIndexes[this.matchAt] = le),
          this.regexes.push([le, G]),
          (this.matchAt += ae(G) + 1);
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const G = this.regexes.map(le => le[1]);
        (this.matcherRe = _(F(G, { joinWith: "|" }), !0)), (this.lastIndex = 0);
      }
      exec(G) {
        this.matcherRe.lastIndex = this.lastIndex;
        const le = this.matcherRe.exec(G);
        if (!le) return null;
        const Ve = le.findIndex((ya, Qn) => Qn > 0 && ya !== void 0),
          Ke = this.matchIndexes[Ve];
        return le.splice(0, Ve), Object.assign(le, Ke);
      }
    }
    class oe {
      constructor() {
        (this.rules = []),
          (this.multiRegexes = []),
          (this.count = 0),
          (this.lastIndex = 0),
          (this.regexIndex = 0);
      }
      getMatcher(G) {
        if (this.multiRegexes[G]) return this.multiRegexes[G];
        const le = new V();
        return (
          this.rules.slice(G).forEach(([Ve, Ke]) => le.addRule(Ve, Ke)),
          le.compile(),
          (this.multiRegexes[G] = le),
          le
        );
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      addRule(G, le) {
        this.rules.push([G, le]), le.type === "begin" && this.count++;
      }
      exec(G) {
        const le = this.getMatcher(this.regexIndex);
        le.lastIndex = this.lastIndex;
        let Ve = le.exec(G);
        if (
          this.resumingScanAtSamePosition() &&
          !(Ve && Ve.index === this.lastIndex)
        ) {
          const Ke = this.getMatcher(0);
          (Ke.lastIndex = this.lastIndex + 1), (Ve = Ke.exec(G));
        }
        return (
          Ve &&
            ((this.regexIndex += Ve.position + 1),
            this.regexIndex === this.count && this.considerAll()),
          Ve
        );
      }
    }
    function Ze(I) {
      const G = new oe();
      return (
        I.contains.forEach(le =>
          G.addRule(le.begin, { rule: le, type: "begin" }),
        ),
        I.terminatorEnd && G.addRule(I.terminatorEnd, { type: "end" }),
        I.illegal && G.addRule(I.illegal, { type: "illegal" }),
        G
      );
    }
    function $e(I, G) {
      const le = I;
      if (I.isCompiled) return le;
      [On, br, wr, Gt].forEach(Ke => Ke(I, G)),
        p.compilerExtensions.forEach(Ke => Ke(I, G)),
        (I.__beforeBegin = null),
        [zn, Ln, vr].forEach(Ke => Ke(I, G)),
        (I.isCompiled = !0);
      let Ve = null;
      return (
        typeof I.keywords == "object" &&
          I.keywords.$pattern &&
          ((I.keywords = Object.assign({}, I.keywords)),
          (Ve = I.keywords.$pattern),
          delete I.keywords.$pattern),
        (Ve = Ve || /\w+/),
        I.keywords && (I.keywords = Bn(I.keywords, p.case_insensitive)),
        (le.keywordPatternRe = _(Ve, !0)),
        G &&
          (I.begin || (I.begin = /\B|\b/),
          (le.beginRe = _(le.begin)),
          !I.end && !I.endsWithParent && (I.end = /\B|\b/),
          I.end && (le.endRe = _(le.end)),
          (le.terminatorEnd = B(le.end) || ""),
          I.endsWithParent &&
            G.terminatorEnd &&
            (le.terminatorEnd += (I.end ? "|" : "") + G.terminatorEnd)),
        I.illegal && (le.illegalRe = _(I.illegal)),
        I.contains || (I.contains = []),
        (I.contains = [].concat(
          ...I.contains.map(function (Ke) {
            return bl(Ke === "self" ? I : Ke);
          }),
        )),
        I.contains.forEach(function (Ke) {
          $e(Ke, le);
        }),
        I.starts && $e(I.starts, G),
        (le.matcher = Ze(le)),
        le
      );
    }
    if (
      (p.compilerExtensions || (p.compilerExtensions = []),
      p.contains && p.contains.includes("self"))
    )
      throw new Error(
        "ERR: contains `self` is not supported at the top-level of a language.  See documentation.",
      );
    return (p.classNameAliases = u(p.classNameAliases || {})), $e(p);
  }
  function ba(p) {
    return p ? p.endsWithParent || ba(p.starts) : !1;
  }
  function bl(p) {
    return (
      p.variants &&
        !p.cachedVariants &&
        (p.cachedVariants = p.variants.map(function (_) {
          return u(p, { variants: null }, _);
        })),
      p.cachedVariants
        ? p.cachedVariants
        : ba(p)
          ? u(p, { starts: p.starts ? u(p.starts) : null })
          : Object.isFrozen(p)
            ? u(p)
            : p
    );
  }
  var Ja = "11.11.1";
  class va extends Error {
    constructor(_, V) {
      super(_), (this.name = "HTMLInjectionError"), (this.html = V);
    }
  }
  const Hn = f,
    Yn = u,
    qn = Symbol("nomatch"),
    Gn = 7,
    ql = function (p) {
      const _ = Object.create(null),
        V = Object.create(null),
        oe = [];
      let Ze = !0;
      const $e =
          "Could not find the language '{}', did you forget to load/include a language module?",
        I = { disableAutodetect: !0, name: "Plain text", contains: [] };
      let G = {
        ignoreUnescapedHTML: !1,
        throwUnescapedHTML: !1,
        noHighlightRe: /^(no-?highlight)$/i,
        languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
        classPrefix: "hljs-",
        cssSelector: "pre code",
        languages: null,
        __emitter: S,
      };
      function le(Y) {
        return G.noHighlightRe.test(Y);
      }
      function Ve(Y) {
        let ie = Y.className + " ";
        ie += Y.parentNode ? Y.parentNode.className : "";
        const ge = G.languageDetectRe.exec(ie);
        if (ge) {
          const _e = At(ge[1]);
          return (
            _e ||
              (Fi($e.replace("{}", ge[1])),
              Fi("Falling back to no-highlight mode for this block.", Y)),
            _e ? ge[1] : "no-highlight"
          );
        }
        return ie.split(/\s+/).find(_e => le(_e) || At(_e));
      }
      function Ke(Y, ie, ge) {
        let _e = "",
          Fe = "";
        typeof ie == "object"
          ? ((_e = Y), (ge = ie.ignoreIllegals), (Fe = ie.language))
          : (Qt(
              "10.7.0",
              "highlight(lang, code, ...args) has been deprecated.",
            ),
            Qt(
              "10.7.0",
              `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`,
            ),
            (Fe = Y),
            (_e = ie)),
          ge === void 0 && (ge = !0);
        const _t = { code: _e, language: Fe };
        jl("before:highlight", _t);
        const tl = _t.result ? _t.result : ya(_t.language, _t.code, ge);
        return (tl.code = _t.code), jl("after:highlight", tl), tl;
      }
      function ya(Y, ie, ge, _e) {
        const Fe = Object.create(null);
        function _t(X, ee) {
          return X.keywords[ee];
        }
        function tl() {
          if (!me.keywords) {
            it.addText(Me);
            return;
          }
          let X = 0;
          me.keywordPatternRe.lastIndex = 0;
          let ee = me.keywordPatternRe.exec(Me),
            he = "";
          for (; ee; ) {
            he += Me.substring(X, ee.index);
            const Te = Mt.case_insensitive ? ee[0].toLowerCase() : ee[0],
              st = _t(me, Te);
            if (st) {
              const [Xt, Ca] = st;
              if (
                (it.addText(he),
                (he = ""),
                (Fe[Te] = (Fe[Te] || 0) + 1),
                Fe[Te] <= Gn && (Fa += Ca),
                Xt.startsWith("_"))
              )
                he += ee[0];
              else {
                const ll = Mt.classNameAliases[Xt] || Xt;
                Vt(ee[0], ll);
              }
            } else he += ee[0];
            (X = me.keywordPatternRe.lastIndex),
              (ee = me.keywordPatternRe.exec(Me));
          }
          (he += Me.substring(X)), it.addText(he);
        }
        function gt() {
          if (Me === "") return;
          let X = null;
          if (typeof me.subLanguage == "string") {
            if (!_[me.subLanguage]) {
              it.addText(Me);
              return;
            }
            (X = ya(me.subLanguage, Me, !0, Kn[me.subLanguage])),
              (Kn[me.subLanguage] = X._top);
          } else X = $a(Me, me.subLanguage.length ? me.subLanguage : null);
          me.relevance > 0 && (Fa += X.relevance),
            it.__addSublanguage(X._emitter, X.language);
        }
        function yt() {
          me.subLanguage != null ? gt() : tl(), (Me = "");
        }
        function Vt(X, ee) {
          X !== "" && (it.startScope(ee), it.addText(X), it.endScope());
        }
        function wa(X, ee) {
          let he = 1;
          const Te = ee.length - 1;
          for (; he <= Te; ) {
            if (!X._emit[he]) {
              he++;
              continue;
            }
            const st = Mt.classNameAliases[X[he]] || X[he],
              Xt = ee[he];
            st ? Vt(Xt, st) : ((Me = Xt), tl(), (Me = "")), he++;
          }
        }
        function Xn(X, ee) {
          return (
            X.scope &&
              typeof X.scope == "string" &&
              it.openNode(Mt.classNameAliases[X.scope] || X.scope),
            X.beginScope &&
              (X.beginScope._wrap
                ? (Vt(
                    Me,
                    Mt.classNameAliases[X.beginScope._wrap] ||
                      X.beginScope._wrap,
                  ),
                  (Me = ""))
                : X.beginScope._multi && (wa(X.beginScope, ee), (Me = ""))),
            (me = Object.create(X, { parent: { value: me } })),
            me
          );
        }
        function Aa(X, ee, he) {
          let Te = Z(X.endRe, he);
          if (Te) {
            if (X["on:end"]) {
              const st = new d(X);
              X["on:end"](ee, st), st.isMatchIgnored && (Te = !1);
            }
            if (Te) {
              for (; X.endsParent && X.parent; ) X = X.parent;
              return X;
            }
          }
          if (X.endsWithParent) return Aa(X.parent, ee, he);
        }
        function Er(X) {
          return me.matcher.regexIndex === 0
            ? ((Me += X[0]), 1)
            : ((Ea = !0), 0);
        }
        function Ct(X) {
          const ee = X[0],
            he = X.rule,
            Te = new d(he),
            st = [he.__beforeBegin, he["on:begin"]];
          for (const Xt of st)
            if (Xt && (Xt(X, Te), Te.isMatchIgnored)) return Er(ee);
          return (
            he.skip
              ? (Me += ee)
              : (he.excludeBegin && (Me += ee),
                yt(),
                !he.returnBegin && !he.excludeBegin && (Me = ee)),
            Xn(he, X),
            he.returnBegin ? 0 : ee.length
          );
        }
        function Zn(X) {
          const ee = X[0],
            he = ie.substring(X.index),
            Te = Aa(me, X, he);
          if (!Te) return qn;
          const st = me;
          me.endScope && me.endScope._wrap
            ? (yt(), Vt(ee, me.endScope._wrap))
            : me.endScope && me.endScope._multi
              ? (yt(), wa(me.endScope, X))
              : st.skip
                ? (Me += ee)
                : (st.returnEnd || st.excludeEnd || (Me += ee),
                  yt(),
                  st.excludeEnd && (Me = ee));
          do
            me.scope && it.closeNode(),
              !me.skip && !me.subLanguage && (Fa += me.relevance),
              (me = me.parent);
          while (me !== Te.parent);
          return Te.starts && Xn(Te.starts, X), st.returnEnd ? 0 : ee.length;
        }
        function ls() {
          const X = [];
          for (let ee = me; ee !== Mt; ee = ee.parent)
            ee.scope && X.unshift(ee.scope);
          X.forEach(ee => it.openNode(ee));
        }
        let Xl = {};
        function Nl(X, ee) {
          const he = ee && ee[0];
          if (((Me += X), he == null)) return yt(), 0;
          if (
            Xl.type === "begin" &&
            ee.type === "end" &&
            Xl.index === ee.index &&
            he === ""
          ) {
            if (((Me += ie.slice(ee.index, ee.index + 1)), !Ze)) {
              const Te = new Error(`0 width match regex (${Y})`);
              throw ((Te.languageName = Y), (Te.badRule = Xl.rule), Te);
            }
            return 1;
          }
          if (((Xl = ee), ee.type === "begin")) return Ct(ee);
          if (ee.type === "illegal" && !ge) {
            const Te = new Error(
              'Illegal lexeme "' +
                he +
                '" for mode "' +
                (me.scope || "<unnamed>") +
                '"',
            );
            throw ((Te.mode = me), Te);
          } else if (ee.type === "end") {
            const Te = Zn(ee);
            if (Te !== qn) return Te;
          }
          if (ee.type === "illegal" && he === "")
            return (
              (Me += `
`),
              1
            );
          if (Zl > 1e5 && Zl > ee.index * 3)
            throw new Error(
              "potential infinite loop, way more iterations than matches",
            );
          return (Me += he), he.length;
        }
        const Mt = At(Y);
        if (!Mt)
          throw (
            (pl($e.replace("{}", Y)),
            new Error('Unknown language: "' + Y + '"'))
          );
        const as = Ka(Mt);
        let rl = "",
          me = _e || as;
        const Kn = {},
          it = new G.__emitter(G);
        ls();
        let Me = "",
          Fa = 0,
          Sl = 0,
          Zl = 0,
          Ea = !1;
        try {
          if (Mt.__emitTokens) Mt.__emitTokens(ie, it);
          else {
            for (me.matcher.considerAll(); ; ) {
              Zl++,
                Ea ? (Ea = !1) : me.matcher.considerAll(),
                (me.matcher.lastIndex = Sl);
              const X = me.matcher.exec(ie);
              if (!X) break;
              const ee = ie.substring(Sl, X.index),
                he = Nl(ee, X);
              Sl = X.index + he;
            }
            Nl(ie.substring(Sl));
          }
          return (
            it.finalize(),
            (rl = it.toHTML()),
            {
              language: Y,
              value: rl,
              relevance: Fa,
              illegal: !1,
              _emitter: it,
              _top: me,
            }
          );
        } catch (X) {
          if (X.message && X.message.includes("Illegal"))
            return {
              language: Y,
              value: Hn(ie),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: X.message,
                index: Sl,
                context: ie.slice(Sl - 100, Sl + 100),
                mode: X.mode,
                resultSoFar: rl,
              },
              _emitter: it,
            };
          if (Ze)
            return {
              language: Y,
              value: Hn(ie),
              illegal: !1,
              relevance: 0,
              errorRaised: X,
              _emitter: it,
              _top: me,
            };
          throw X;
        }
      }
      function Qn(Y) {
        const ie = {
          value: Hn(Y),
          illegal: !1,
          relevance: 0,
          _top: I,
          _emitter: new G.__emitter(G),
        };
        return ie._emitter.addText(Y), ie;
      }
      function $a(Y, ie) {
        ie = ie || G.languages || Object.keys(_);
        const ge = Qn(Y),
          _e = ie
            .filter(At)
            .filter(Vn)
            .map(yt => ya(yt, Y, !1));
        _e.unshift(ge);
        const Fe = _e.sort((yt, Vt) => {
            if (yt.relevance !== Vt.relevance)
              return Vt.relevance - yt.relevance;
            if (yt.language && Vt.language) {
              if (At(yt.language).supersetOf === Vt.language) return 1;
              if (At(Vt.language).supersetOf === yt.language) return -1;
            }
            return 0;
          }),
          [_t, tl] = Fe,
          gt = _t;
        return (gt.secondBest = tl), gt;
      }
      function ja(Y, ie, ge) {
        const _e = (ie && V[ie]) || ge;
        Y.classList.add("hljs"), Y.classList.add(`language-${_e}`);
      }
      function Na(Y) {
        let ie = null;
        const ge = Ve(Y);
        if (le(ge)) return;
        if (
          (jl("before:highlightElement", { el: Y, language: ge }),
          Y.dataset.highlighted)
        ) {
          console.log(
            "Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",
            Y,
          );
          return;
        }
        if (
          Y.children.length > 0 &&
          (G.ignoreUnescapedHTML ||
            (console.warn(
              "One of your code blocks includes unescaped HTML. This is a potentially serious security risk.",
            ),
            console.warn(
              "https://github.com/highlightjs/highlight.js/wiki/security",
            ),
            console.warn("The element with unescaped HTML:"),
            console.warn(Y)),
          G.throwUnescapedHTML)
        )
          throw new va(
            "One of your code blocks includes unescaped HTML.",
            Y.innerHTML,
          );
        ie = Y;
        const _e = ie.textContent,
          Fe = ge ? Ke(_e, { language: ge, ignoreIllegals: !0 }) : $a(_e);
        (Y.innerHTML = Fe.value),
          (Y.dataset.highlighted = "yes"),
          ja(Y, ge, Fe.language),
          (Y.result = {
            language: Fe.language,
            re: Fe.relevance,
            relevance: Fe.relevance,
          }),
          Fe.secondBest &&
            (Y.secondBest = {
              language: Fe.secondBest.language,
              relevance: Fe.secondBest.relevance,
            }),
          jl("after:highlightElement", { el: Y, result: Fe, text: _e });
      }
      function Ql(Y) {
        G = Yn(G, Y);
      }
      const Vl = () => {
        We(),
          Qt(
            "10.6.0",
            "initHighlighting() deprecated.  Use highlightAll() now.",
          );
      };
      function Sa() {
        We(),
          Qt(
            "10.6.0",
            "initHighlightingOnLoad() deprecated.  Use highlightAll() now.",
          );
      }
      let vl = !1;
      function We() {
        function Y() {
          We();
        }
        if (document.readyState === "loading") {
          vl || window.addEventListener("DOMContentLoaded", Y, !1), (vl = !0);
          return;
        }
        document.querySelectorAll(G.cssSelector).forEach(Na);
      }
      function Ii(Y, ie) {
        let ge = null;
        try {
          ge = ie(p);
        } catch (_e) {
          if (
            (pl(
              "Language definition for '{}' could not be registered.".replace(
                "{}",
                Y,
              ),
            ),
            Ze)
          )
            pl(_e);
          else throw _e;
          ge = I;
        }
        ge.name || (ge.name = Y),
          (_[Y] = ge),
          (ge.rawDefinition = ie.bind(null, p)),
          ge.aliases && es(ge.aliases, { languageName: Y });
      }
      function Pi(Y) {
        delete _[Y];
        for (const ie of Object.keys(V)) V[ie] === Y && delete V[ie];
      }
      function yl() {
        return Object.keys(_);
      }
      function At(Y) {
        return (Y = (Y || "").toLowerCase()), _[Y] || _[V[Y]];
      }
      function es(Y, { languageName: ie }) {
        typeof Y == "string" && (Y = [Y]),
          Y.forEach(ge => {
            V[ge.toLowerCase()] = ie;
          });
      }
      function Vn(Y) {
        const ie = At(Y);
        return ie && !ie.disableAutodetect;
      }
      function ts(Y) {
        Y["before:highlightBlock"] &&
          !Y["before:highlightElement"] &&
          (Y["before:highlightElement"] = ie => {
            Y["before:highlightBlock"](Object.assign({ block: ie.el }, ie));
          }),
          Y["after:highlightBlock"] &&
            !Y["after:highlightElement"] &&
            (Y["after:highlightElement"] = ie => {
              Y["after:highlightBlock"](Object.assign({ block: ie.el }, ie));
            });
      }
      function Ar(Y) {
        ts(Y), oe.push(Y);
      }
      function Wa(Y) {
        const ie = oe.indexOf(Y);
        ie !== -1 && oe.splice(ie, 1);
      }
      function jl(Y, ie) {
        const ge = Y;
        oe.forEach(function (_e) {
          _e[ge] && _e[ge](ie);
        });
      }
      function el(Y) {
        return (
          Qt("10.7.0", "highlightBlock will be removed entirely in v12.0"),
          Qt("10.7.0", "Please use highlightElement now."),
          Na(Y)
        );
      }
      Object.assign(p, {
        highlight: Ke,
        highlightAuto: $a,
        highlightAll: We,
        highlightElement: Na,
        highlightBlock: el,
        configure: Ql,
        initHighlighting: Vl,
        initHighlightingOnLoad: Sa,
        registerLanguage: Ii,
        unregisterLanguage: Pi,
        listLanguages: yl,
        getLanguage: At,
        registerAliases: es,
        autoDetection: Vn,
        inherit: Yn,
        addPlugin: Ar,
        removePlugin: Wa,
      }),
        (p.debugMode = function () {
          Ze = !1;
        }),
        (p.safeMode = function () {
          Ze = !0;
        }),
        (p.versionString = Ja),
        (p.regex = {
          concat: J,
          lookahead: L,
          either: H,
          optional: z,
          anyNumberOfTimes: q,
        });
      for (const Y in Yl) typeof Yl[Y] == "object" && r(Yl[Y]);
      return Object.assign(p, Yl), p;
    },
    Gl = ql({});
  return (
    (Gl.newInstance = () => ql({})),
    (_u = Gl),
    (Gl.HighlightJS = Gl),
    (Gl.default = Gl),
    _u
  );
}
var Zg = Xg();
const qu = Dh(Zg);
function Kg(r) {
  return new RegExp(r.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m");
}
function Wh(r) {
  return r ? (typeof r == "string" ? r : r.source) : null;
}
function Qi(r) {
  return sl("(?=", r, ")");
}
function sl(...r) {
  return r.map(f => Wh(f)).join("");
}
function Jg(r) {
  const d = r[r.length - 1];
  return typeof d == "object" && d.constructor === Object
    ? (r.splice(r.length - 1, 1), d)
    : {};
}
function Va(...r) {
  return "(" + (Jg(r).capture ? "" : "?:") + r.map(u => Wh(u)).join("|") + ")";
}
function Fh(r) {
  const d = [
      "abstract",
      "and",
      "as",
      "assert",
      "base",
      "begin",
      "class",
      "default",
      "delegate",
      "do",
      "done",
      "downcast",
      "downto",
      "elif",
      "else",
      "end",
      "exception",
      "extern",
      "finally",
      "fixed",
      "for",
      "fun",
      "function",
      "global",
      "if",
      "in",
      "inherit",
      "inline",
      "interface",
      "internal",
      "lazy",
      "let",
      "match",
      "member",
      "module",
      "mutable",
      "namespace",
      "new",
      "of",
      "open",
      "or",
      "override",
      "private",
      "public",
      "rec",
      "return",
      "static",
      "struct",
      "then",
      "to",
      "try",
      "type",
      "upcast",
      "use",
      "val",
      "void",
      "when",
      "while",
      "with",
      "yield",
    ],
    f = { scope: "keyword", match: /\b(yield|return|let|do|match|use)!/ },
    u = [
      "if",
      "else",
      "endif",
      "line",
      "nowarn",
      "light",
      "r",
      "i",
      "I",
      "load",
      "time",
      "help",
      "quit",
    ],
    h = [
      "true",
      "false",
      "null",
      "Some",
      "None",
      "Ok",
      "Error",
      "infinity",
      "infinityf",
      "nan",
      "nanf",
    ],
    m = ["__LINE__", "__SOURCE_DIRECTORY__", "__SOURCE_FILE__"],
    A = [
      "bool",
      "byte",
      "sbyte",
      "int8",
      "int16",
      "int32",
      "uint8",
      "uint16",
      "uint32",
      "int",
      "uint",
      "int64",
      "uint64",
      "nativeint",
      "unativeint",
      "decimal",
      "float",
      "double",
      "float32",
      "single",
      "char",
      "string",
      "unit",
      "bigint",
      "option",
      "voption",
      "list",
      "array",
      "seq",
      "byref",
      "exn",
      "inref",
      "nativeptr",
      "obj",
      "outref",
      "voidptr",
      "Result",
    ],
    v = {
      keyword: d,
      literal: h,
      built_in: [
        "not",
        "ref",
        "raise",
        "reraise",
        "dict",
        "readOnlyDict",
        "set",
        "get",
        "enum",
        "sizeof",
        "typeof",
        "typedefof",
        "nameof",
        "nullArg",
        "invalidArg",
        "invalidOp",
        "id",
        "fst",
        "snd",
        "ignore",
        "lock",
        "using",
        "box",
        "unbox",
        "tryUnbox",
        "printf",
        "printfn",
        "sprintf",
        "eprintf",
        "eprintfn",
        "fprintf",
        "fprintfn",
        "failwith",
        "failwithf",
      ],
      "variable.constant": m,
    },
    S = {
      variants: [
        r.COMMENT(/\(\*(?!\))/, /\*\)/, { contains: ["self"] }),
        r.C_LINE_COMMENT_MODE,
      ],
    },
    B = /[a-zA-Z_](\w|')*/,
    L = { scope: "variable", begin: /``/, end: /``/ },
    q = /\B('|\^)/,
    z = {
      scope: "symbol",
      variants: [
        { match: sl(q, /``.*?``/) },
        { match: sl(q, r.UNDERSCORE_IDENT_RE) },
      ],
      relevance: 0,
    },
    J = function ({ includeEqual: ne }) {
      let Ae;
      ne ? (Ae = "!%&*+-/<=>@^|~?") : (Ae = "!%&*+-/<>@^|~?");
      const b = Array.from(Ae),
        U = sl("[", ...b.map(Kg), "]"),
        W = Va(U, /\./),
        K = sl(W, Qi(W)),
        re = Va(sl(K, W, "*"), sl(U, "+"));
      return {
        scope: "operator",
        match: Va(re, /:\?>/, /:\?/, /:>/, /:=/, /::?/, /\$/),
        relevance: 0,
      };
    },
    Q = J({ includeEqual: !0 }),
    H = J({ includeEqual: !1 }),
    ae = function (ne, Ae) {
      return {
        begin: sl(
          ne,
          Qi(sl(/\s*/, Va(/\w/, /'/, /\^/, /#/, /``/, /\(/, /{\|/))),
        ),
        beginScope: Ae,
        end: Qi(Va(/\n/, /=/)),
        relevance: 0,
        keywords: r.inherit(v, { type: A }),
        contains: [S, z, r.inherit(L, { scope: null }), H],
      };
    },
    Z = ae(/:/, "operator"),
    P = ae(/\bof\b/, "keyword"),
    F = {
      begin: [/(^|\s+)/, /type/, /\s+/, B],
      beginScope: { 2: "keyword", 4: "title.class" },
      end: Qi(/\(|=|$/),
      keywords: v,
      contains: [
        S,
        r.inherit(L, { scope: null }),
        z,
        { scope: "operator", match: /<|>/ },
        Z,
      ],
    },
    Ne = { scope: "computation-expression", match: /\b[_a-z]\w*(?=\s*\{)/ },
    je = {
      begin: [/^\s*/, sl(/#/, Va(...u)), /\b/],
      beginScope: { 2: "meta" },
      end: Qi(/\s|$/),
    },
    Se = { variants: [r.BINARY_NUMBER_MODE, r.C_NUMBER_MODE] },
    we = {
      scope: "string",
      begin: /"/,
      end: /"/,
      contains: [r.BACKSLASH_ESCAPE],
    },
    Qe = {
      scope: "string",
      begin: /@"/,
      end: /"/,
      contains: [{ match: /""/ }, r.BACKSLASH_ESCAPE],
    },
    Xe = { scope: "string", begin: /"""/, end: /"""/, relevance: 2 },
    He = { scope: "subst", begin: /\{/, end: /\}/, keywords: v },
    qt = {
      scope: "string",
      begin: /\$"/,
      end: /"/,
      contains: [{ match: /\{\{/ }, { match: /\}\}/ }, r.BACKSLASH_ESCAPE, He],
    },
    vt = {
      scope: "string",
      begin: /(\$@|@\$)"/,
      end: /"/,
      contains: [
        { match: /\{\{/ },
        { match: /\}\}/ },
        { match: /""/ },
        r.BACKSLASH_ESCAPE,
        He,
      ],
    },
    nt = {
      scope: "string",
      begin: /\$"""/,
      end: /"""/,
      contains: [{ match: /\{\{/ }, { match: /\}\}/ }, He],
      relevance: 2,
    },
    k = {
      scope: "string",
      match: sl(
        /'/,
        Va(
          /[^\\']/,
          /\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8})/,
        ),
        /'/,
      ),
    };
  return (
    (He.contains = [vt, qt, Qe, we, k, f, S, L, Z, Ne, je, Se, z, Q]),
    {
      name: "F#",
      aliases: ["fs", "f#"],
      keywords: v,
      illegal: /\/\*/,
      classNameAliases: { "computation-expression": "keyword" },
      contains: [
        f,
        { variants: [nt, vt, qt, Xe, Qe, we, k] },
        S,
        L,
        F,
        {
          scope: "meta",
          begin: /\[</,
          end: />\]/,
          relevance: 2,
          contains: [L, Xe, Qe, we, k, Se],
        },
        P,
        Z,
        Ne,
        je,
        Se,
        z,
        Q,
      ],
    }
  );
}
const Zi = ({ code: r, language: d = "fsharp", showLineNumbers: f = !0 }) => {
  const [u, h] = T.useState("");
  return (
    T.useEffect(() => {
      const j = qu
        .highlight(r, { language: d })
        .value.split(
          `
`,
        )
        .map((v, x) => {
          const S = x + 1;
          return `<div class="code-line">
                ${f ? `<span class="line-number">${S}</span>` : ""}
                <span class="line-content">${v}</span>
              </div>`;
        })
        .join("");
      h(j);
    }, [r, d, f]),
    n.jsx("div", {
      className: "hljs-pre code-with-line-numbers",
      children: n.jsx("code", {
        className: `language-${d}`,
        dangerouslySetInnerHTML: { __html: u },
      }),
    })
  );
};
qu.registerLanguage("fsharp", Fh);
const or = ({
    icon: r,
    isMonoFont: d = !1,
    label: f,
    isActive: u,
    hasDropdown: h = !1,
    onClick: m,
  }) =>
    n.jsxs("div", {
      className: `flex items-center p-3 rounded-lg border cursor-pointer
                 ${u ? "bg-purple-50 border-purple-200 shadow-sm" : "bg-white border-gray-200 shadow-sm"}`,
      onClick: m,
      children: [
        n.jsx("span", {
          className: `text-purple-lbg mr-2 ${d ? "font-mono" : ""}`,
          children: r,
        }),
        n.jsx("span", { className: "font-medium", children: f }),
        h && n.jsx("span", { className: "ml-1 text-gray-500", children: "▾" }),
      ],
    }),
  $g = {
    httpHandler: `[<HttpHandler("GET", "/hello")>]
let _handler _req =
  let message = "Hello, World!"
  let body =
    message
  |> Stdlib.String.toBytes
 
  Stdlib.Http.response body 200L`,
    dataStores: `[<Model>]
type User = {
  id: UUID
  username: String
  email: String
  createdAt: Date
}

let getUser (id: UUID) : Option<User> =
  DB.findOne<User>("users", { id })
  
let createUser (username: String) (email: String) : User =
  let user = {
    id = UUID.generate()
    username = username
    email = email
    createdAt = Date.now()
  }
  DB.insert "users" user
  user`,
    scheduledJobs: `[<ScheduledJob(interval = "1 day")>]
let dailyReport () =
  let users = DB.query "SELECT COUNT(*) FROM users"
  let active = DB.query "SELECT COUNT(*) FROM sessions WHERE active = true"
  
  Email.send {
    to = "admin@example.com"
    subject = "Daily Report"
    body = $"Users: {users}
Active: {active}"
  }`,
    backgroundWorkers: `[<QueueWorker("image-processing")>]
let processImage (data: { imageId: UUID }) =
  let image = Storage.get data.imageId
  
  let resized = Image.resize image {
    width = 800
    height = 600
  }
  
  Storage.put ($"{data.imageId}_thumbnail") resized
  DB.update "images" { id = data.imageId } { status = "processed" }`,
  },
  Wg = () => {
    const [r, d] = T.useState("httpHandler"),
      f = $g[r];
    return n.jsx("section", {
      className: "w-full bg-white py-20 md:py-32",
      children: n.jsxs("div", {
        className: "max-w-7xl 2xl:max-w-[100rem] mx-auto px-4",
        children: [
          n.jsxs("div", {
            className: "mb-8",
            children: [
              n.jsx(pa, {
                subtitle: "Darklang Cloud",
                children: "Build a complete backend with Darklang",
              }),
              n.jsx("p", {
                className: "text-lg md:text-xl max-w-6xl text-dark",
                children:
                  "Darklang lets you easily develop backend cloud applications. You can build tiny applications to connect two services, or large scale applications with tens of thousands of users. Code is written in collaboration with AI and is instantly and safely deployed on our hosted platform or yours, so you can focus on writing code while we handle the rest",
              }),
              n.jsx("p", {
                className: "text-xl mt-8 text-black-custom",
                children: "You can build any backend that need:",
              }),
            ],
          }),
          n.jsxs("div", {
            children: [
              n.jsxs("div", {
                className:
                  "flex flex-wrap gap-4 mb-8 max-w-5xl justify-center mx-auto",
                children: [
                  n.jsx(or, {
                    icon: "://",
                    isMonoFont: !0,
                    label: "Http Handler",
                    isActive: r === "httpHandler",
                    hasDropdown: !1,
                    onClick: () => d("httpHandler"),
                  }),
                  n.jsx(or, {
                    icon: n.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "28",
                      height: "28",
                      viewBox: "0 0 28 28",
                      fill: "none",
                      children: [
                        n.jsx("path", {
                          d: "M5.83301 14V21C5.83301 21 5.83301 24.5 13.9997 24.5C22.1663 24.5 22.1663 21 22.1663 21V14",
                          stroke: "#755580",
                          "stroke-width": "1.5",
                        }),
                        n.jsx("path", {
                          d: "M5.83301 7V14C5.83301 14 5.83301 17.5 13.9997 17.5C22.1663 17.5 22.1663 14 22.1663 14V7",
                          stroke: "#755580",
                          "stroke-width": "1.5",
                        }),
                        n.jsx("path", {
                          d: "M13.9997 3.5C22.1663 3.5 22.1663 7 22.1663 7C22.1663 7 22.1663 10.5 13.9997 10.5C5.83301 10.5 5.83301 7 5.83301 7C5.83301 7 5.83301 3.5 13.9997 3.5Z",
                          stroke: "#755580",
                          "stroke-width": "1.5",
                        }),
                      ],
                    }),
                    label: "Data stores",
                    isActive: r === "dataStores",
                    onClick: () => d("dataStores"),
                  }),
                  n.jsx(or, {
                    icon: "⏱",
                    label: "Scheduled jobs",
                    isActive: r === "scheduledJobs",
                    onClick: () => d("scheduledJobs"),
                  }),
                  n.jsx(or, {
                    icon: n.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "22",
                      height: "23",
                      viewBox: "0 0 22 23",
                      fill: "none",
                      children: n.jsx("path", {
                        d: "M7.07795 2.97927C7.9785 2.82422 8.90317 2.8889 9.77337 3.16781C10.6436 3.44672 11.4336 3.9316 12.0762 4.58126C12.7188 5.23091 13.1951 6.02612 13.4645 6.89929C13.734 7.77246 13.7886 8.69778 13.6238 9.5966C13.5135 10.1983 13.6309 10.726 13.9406 11.0348L18.8515 15.9466C19.2893 16.4069 19.5298 17.0201 19.5219 17.6553C19.5139 18.2905 19.258 18.8975 18.8088 19.3467C18.3596 19.7959 17.7527 20.0518 17.1175 20.0597C16.4822 20.0677 15.8691 19.8271 15.4087 19.3894L10.4978 14.4784C10.189 14.1696 9.66047 14.0514 9.05962 14.1608C8.16092 14.3253 7.23579 14.2706 6.36279 14.0011C5.4898 13.7316 4.69475 13.2554 4.04517 12.6129C3.39559 11.9705 2.91068 11.1807 2.63162 10.3107C2.35257 9.44074 2.28762 8.51626 2.44229 7.61581C2.48373 7.3541 2.60302 7.11093 2.78463 6.91799C2.96624 6.72505 3.20175 6.59128 3.46048 6.5341C3.93692 6.42557 4.46013 6.56939 4.83688 6.94614L7.08236 9.19073C7.11469 9.22159 7.15766 9.2388 7.20235 9.2388C7.24704 9.2388 7.29002 9.22159 7.32235 9.19073L8.65287 7.86021C8.68372 7.82788 8.70094 7.78491 8.70094 7.74022C8.70094 7.69553 8.68372 7.65255 8.65287 7.62022L6.40916 5.37474C6.23011 5.19859 6.09846 4.98006 6.02643 4.73944C5.9544 4.49882 5.94431 4.2439 5.99712 3.99834C6.10917 3.50424 6.49209 3.08074 7.07795 2.97927Z",
                        fill: "#755580",
                      }),
                    }),
                    label: "Background workers",
                    isActive: r === "backgroundWorkers",
                    onClick: () => d("backgroundWorkers"),
                  }),
                ],
              }),
              n.jsxs("div", {
                className:
                  "bg-white rounded-4xl shadow-lg inset-shadow-xs overflow-hidden mb-8 max-w-5xl mx-auto",
                children: [
                  n.jsx("div", {
                    className: "flex justify-end items-center px-8 pt-8",
                    children: n.jsxs("div", {
                      className: "flex space-x-2",
                      children: [
                        n.jsx("div", {
                          className: "w-4 h-4 rounded-full bg-purple-lbg",
                        }),
                        n.jsx("div", {
                          className: "w-4 h-4 rounded-full bg-sand",
                        }),
                        n.jsx("div", {
                          className: "w-4 h-4 rounded-full bg-olive",
                        }),
                      ],
                    }),
                  }),
                  n.jsx("div", {
                    className: "code-container p-8 mb-2 overflow-x-auto",
                    children: n.jsx(Zi, { code: f, language: "fsharp" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  };
qu.registerLanguage("fsharp", Fh);
const Fg = ({ isActive: r, label: d, onClick: f }) =>
    n.jsx("button", {
      className: `px-5 2xl:px-10 py-3 text-sm text-purple-lbg ${r ? "bg-purple-lbg/10" : "hover:text-black-custom"}`,
      onClick: f,
      children: d,
    }),
  Ig = ({ children: r }) =>
    n.jsxs("div", {
      className: "flex items-start mb-3",
      children: [
        n.jsx("div", {
          className: "text-purple-lbg mr-3",
          children: n.jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "27",
            height: "27",
            viewBox: "0 0 27 27",
            fill: "none",
            children: [
              n.jsx("path", {
                d: "M20.25 23.3438H6.75C5.92949 23.3438 5.14258 23.0178 4.56239 22.4376C3.9822 21.8574 3.65625 21.0705 3.65625 20.25V6.75C3.65625 5.92949 3.9822 5.14258 4.56239 4.56239C5.14258 3.9822 5.92949 3.65625 6.75 3.65625H16.7175C16.9413 3.65625 17.1559 3.74514 17.3141 3.90338C17.4724 4.06161 17.5612 4.27622 17.5612 4.5C17.5612 4.72378 17.4724 4.93839 17.3141 5.09662C17.1559 5.25486 16.9413 5.34375 16.7175 5.34375H6.75C6.37704 5.34375 6.01935 5.49191 5.75563 5.75563C5.49191 6.01935 5.34375 6.37704 5.34375 6.75V20.25C5.34375 20.623 5.49191 20.9806 5.75563 21.2444C6.01935 21.5081 6.37704 21.6562 6.75 21.6562H20.25C20.623 21.6562 20.9806 21.5081 21.2444 21.2444C21.5081 20.9806 21.6562 20.623 21.6562 20.25V11.5763C21.6562 11.3525 21.7451 11.1379 21.9034 10.9796C22.0616 10.8214 22.2762 10.7325 22.5 10.7325C22.7238 10.7325 22.9384 10.8214 23.0966 10.9796C23.2549 11.1379 23.3438 11.3525 23.3438 11.5763V20.25C23.3438 21.0705 23.0178 21.8574 22.4376 22.4376C21.8574 23.0178 21.0705 23.3438 20.25 23.3438Z",
                fill: "#95589F",
              }),
              n.jsx("path", {
                d: "M11.8128 17.1563C11.5958 17.1397 11.3939 17.0387 11.2503 16.875L7.87535 13.5C7.80015 13.3426 7.77562 13.1657 7.80512 12.9937C7.83463 12.8217 7.91672 12.6631 8.0401 12.5398C8.16348 12.4164 8.32207 12.3343 8.49404 12.3048C8.66601 12.2753 8.8429 12.2998 9.00035 12.375L11.7791 15.1538L21.3753 5.62501C21.5328 5.54981 21.7097 5.52528 21.8817 5.55478C22.0536 5.58429 22.2122 5.66638 22.3356 5.78976C22.459 5.91314 22.5411 6.07173 22.5706 6.2437C22.6001 6.41567 22.5755 6.59256 22.5003 6.75001L12.3753 16.875C12.2318 17.0387 12.0299 17.1397 11.8128 17.1563Z",
                fill: "#95589F",
              }),
            ],
          }),
        }),
        n.jsx("div", { children: r }),
      ],
    }),
  Pg = () => {
    const r = [
        {
          id: "functional",
          label: "Functional Style",
          code: `// Simple types
type UserAction = 
| Click of String
| Type of String
| Submit

// Match patterns
let handleAction (action:UserAction) : String = 
  match action with
  | Click button -> $"Button '{button}' clicked."
  | Type input -> $"User typed: '{input}'"
  | Submit -> "Form submitted!"

let actions = [Click "Login"; Type "Hello"; Submit]
// First-class functions
let logs = actions |> Stdlib.List.map handleAction
// Immutable and composable
logs |> List.iter printLine`,
        },
        {
          id: "records",
          label: "Records & Enums",
          code: `// Record
type Url = {
  scheme : HttpScheme
  domain : String
  port : UInt16
  path : String
  query : Option<String>
}

// Enum (aka Variant, Sum Type, or Abstract Data Types)
type UrlError =
| InvalidScheme(String)
| EmptyDomain
| InvalidPort(Int64)
| Unparseable(msg:String, context:String)

// Aliases are just shorthands

type UrlParseResult = Result<Url, UrlError>`,
        },
        {
          id: "option",
          label: "Option & Result types",
          code: `// Option type instead of null
type Option<'v> =
| Some of 'v
| None

let findUser (users: List<User>) (id: int) : Option<User> =
  users |> List.tryFind (fun user → user.Id = id)

// Result type instead of exceptions
type Result<'Ok, 'Err> =
| Ok of 'Ok
| Error of 'Err

let findUser
(users: List<User>)
(id: int)
: Result<User, Error> =
  let user = users |> List.tryFind (fun user → user.Id = id)
  match user with
  | Some user → Ok user
  | None → Error NotFound`,
        },
        {
          id: "unicode",
          label: "Unicode-First",
          code: `// All characters in Darklang represent Extended Grapheme
// Clusters.

// Characters represent what you see on screen
String.length "hello" // 5
String.length "👨‍👩‍👧‍👦" // 1`,
        },
      ],
      d = [
        "Built-in immutability and strong type system",
        "Garbage-collected",
        "Unicode-first",
        "Records and Enums for straightforward data modeling",
        "Option and Result types keep errors explicit",
      ],
      [f, u] = T.useState(r[0].id),
      h = () => {
        const m = r.find(A => A.id === f);
        return m ? m.code : "";
      };
    return n.jsx("section", {
      className: "py-20",
      children: n.jsx("div", {
        className: "max-w-7xl 2xl:max-w-[100rem] mx-auto px-4",
        children: n.jsxs("div", {
          className: "grid md:grid-cols-2 gap-12 items-start",
          children: [
            n.jsxs("div", {
              children: [
                n.jsx(pa, {
                  subtitle: "Language",
                  children: "Functional, Composable, and Fun to use",
                }),
                n.jsx("p", {
                  className: "text-lg mb-8 text-dark",
                  children:
                    "Darklang is a statically-typed functional language built for simplicity and composability. No null, no unexpected exceptions —just predictable code that's easy to write, read, and maintain.",
                }),
                n.jsx("div", {
                  className: "space-y-4",
                  children: d.map((m, A) =>
                    n.jsx(
                      Ig,
                      {
                        children: n.jsx("span", {
                          className: "font-medium",
                          children: m,
                        }),
                      },
                      A,
                    ),
                  ),
                }),
              ],
            }),
            n.jsx("div", {
              className: "pt-30",
              children: n.jsxs("div", {
                className:
                  "bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200",
                children: [
                  n.jsx("div", {
                    className:
                      "flex overflow-x-auto justify-between border-b border-gray-200",
                    children: r.map(m =>
                      n.jsx(
                        Fg,
                        {
                          isActive: f === m.id,
                          label: m.label,
                          onClick: () => u(m.id),
                        },
                        m.id,
                      ),
                    ),
                  }),
                  n.jsx("div", {
                    className:
                      "px-4 md:px-8 py-10 font-mono text-xs md:text-sm overflow-x-auto bg-white",
                    style: { minHeight: "250px" },
                    children: n.jsx("div", {
                      className: "text-gray-800",
                      children: n.jsx(Zi, {
                        code: h(),
                        language: "fsharp",
                        showLineNumbers: !1,
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  },
  dr = ({ title: r, description: d, className: f = "" }) =>
    n.jsxs("div", {
      className: `bg-[#F9F9FB] p-10 rounded-xl flex flex-col ${f}`,
      children: [
        n.jsxs("div", {
          className: "mb-5",
          children: [
            n.jsxs("div", {
              className: "flex items-center mb-4",
              children: [
                n.jsx("div", {
                  className: "w-1 h-1 rounded-full bg-purple-lbg mr-1",
                }),
                n.jsx("div", { className: "w-15 h-0.5 bg-purple-lbg" }),
              ],
            }),
            n.jsx("h3", { className: "text-xl font-semibold", children: r }),
          ],
        }),
        n.jsx("div", { className: "text-lg", children: d }),
      ],
    }),
  ex = () =>
    n.jsx("section", {
      className: "py-20",
      children: n.jsxs("div", {
        className: "max-w-7xl 2xl:max-w-[100rem] mx-auto px-4",
        children: [
          n.jsx(pa, { subtitle: "Something here", children: "Async Runtime" }),
          n.jsxs("div", {
            className: "grid md:grid-cols-3 gap-4",
            children: [
              n.jsx("div", {
                className: "md:col-span-2",
                children: n.jsx(dr, {
                  title: n.jsxs(n.Fragment, {
                    children: [
                      "No ",
                      n.jsx("span", {
                        className: "text-purple-lbg",
                        children: "async / await",
                      }),
                    ],
                  }),
                  description: n.jsx("p", {
                    className: "text-gray-700",
                    children:
                      "Adding async and await keywords to every language was a mistake. It exposes the complexity of concurrency and multi-threading to languages which were originally designed for simplicity.",
                  }),
                }),
              }),
              n.jsx("div", {
                className: "md:row-span-2",
                children: n.jsx(dr, {
                  className: "h-full",
                  title: n.jsxs(n.Fragment, {
                    children: [
                      n.jsx("span", {
                        className: "text-purple-lbg",
                        children: "Concurrent",
                      }),
                      " and",
                      " ",
                      n.jsx("span", {
                        className: "text-purple-lbg",
                        children: "parallel",
                      }),
                      " execution via data-dependencies",
                    ],
                  }),
                  description: n.jsxs("div", {
                    className:
                      "space-y-4 text-gray-700 flex flex-col justify-between h-full",
                    children: [
                      n.jsx("p", {
                        children:
                          "When you make an async request, it first waits for any arguments that are async, and starts when they're done. If another function call needs to use the result, it will wait for it before starting.",
                      }),
                      n.jsx("p", {
                        children:
                          "Since darklang values are immutable, there won't be any race conditions from this.",
                      }),
                    ],
                  }),
                }),
              }),
              n.jsxs("div", {
                className: "md:col-span-2 grid md:grid-cols-2 gap-4",
                children: [
                  n.jsx(dr, {
                    title: n.jsxs(n.Fragment, {
                      children: [
                        "Fully ",
                        n.jsx("span", {
                          className: "text-purple-lbg",
                          children: "asynchronous",
                        }),
                        " ",
                        "runtime",
                      ],
                    }),
                    description: n.jsx("p", {
                      className: "text-gray-700",
                      children:
                        "Darklang has a fully asynchronous runtime, so making a Http call or reading a file doesn't block the runtime.",
                    }),
                  }),
                  n.jsx(dr, {
                    title: n.jsxs(n.Fragment, {
                      children: [
                        "Powerful",
                        " ",
                        n.jsx("span", {
                          className: "text-purple-lbg",
                          children: "escape hatches",
                        }),
                      ],
                    }),
                    description: n.jsx("p", {
                      className: "text-gray-700",
                      children:
                        "We provide powerful escape hatches if you need async ordering that doesn't match the data dependencies of your program.",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  tx = () => {
    const r = [
      { text: "While prototyping, just run code until you hit a type error" },
      {
        text: "After prototyping, run the full type checker to gain confidence your whole program works",
      },
      {
        text: "! and ? operators allow easy error handling while you prototype",
        year: "2025",
      },
      {
        text: "Automatic refactoring converts ! into proper error handling",
        year: "2025",
      },
      { text: "Full type-checking hints in VSCode or in LSP editors" },
    ];
    return n.jsx("section", {
      className: "w-full bg-white py-16 md:py-24",
      children: n.jsxs("div", {
        className: "max-w-7xl 2xl:max-w-[100rem] mx-auto px-4",
        children: [
          n.jsx(pa, {
            subtitle: "Prototype Quickly",
            children: "Gradual Static Typing",
          }),
          n.jsx("p", {
            className: "md:text-lg md:text-xl text-gray-800 mb-12 max-w-3xl",
            children:
              "Gradual Static Typing allows running incomplete programs so you don't need to ensure everything type checks when you're getting one path working",
          }),
          n.jsxs("div", {
            className: "space-y-8 relative",
            children: [
              n.jsx("div", {
                className: "absolute left-3 top-3 bottom-0 w-0.5 bg-gray-200",
              }),
              r.map((d, f) =>
                n.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-8",
                    children: [
                      n.jsx("div", {
                        className:
                          "relative flex-shrink-0 z-10 flex justify-center w-6",
                        children: n.jsx("div", {
                          className:
                            "w-5 h-5 rounded-full bg-white border-2 border-gray-300",
                        }),
                      }),
                      n.jsx("div", {
                        className: "flex-1 pt-1",
                        children: n.jsxs("p", {
                          className: "md:text-lg text-gray-800",
                          children: [
                            d.text,
                            d.year &&
                              n.jsx("span", {
                                className:
                                  "ml-3 text-xs md:text-sm bg-blue-dbg/10 text-blue-dbg py-1 px-2 rounded-md",
                                children: d.year,
                              }),
                          ],
                        }),
                      }),
                    ],
                  },
                  f,
                ),
              ),
            ],
          }),
        ],
      }),
    });
  },
  lx = "/assets/packageManager-qLmZY2mX.png",
  ax = () => {
    const r = [
      {
        id: 1,
        title: "No Install Step",
        description:
          "Built-in package management without npm-style installation processes or Python's painful package compatibility issues.",
      },
      {
        id: 2,
        title: "Immutable",
        description:
          "Updates never overwrite existing code but create new versions with unique identifiers.",
      },
      {
        id: 3,
        title: "Precise Package Item Control",
        description:
          "Only download and upgrade the specific package items you use.",
      },
      {
        id: 4,
        title: "Source-Controlled Package Management",
        description: "The package manager functions as a source repository.",
      },
      {
        id: 5,
        title: "Smart Dependency Management",
        description:
          "Automated dependency upgrades, as we track deprecation status, and know what functions are pure and safe to update.",
      },
      {
        id: 6,
        title: "Version Flexibility",
        description:
          "Different packages can rely on different versions of other packages.",
      },
      {
        id: 7,
        title: "Parallel Versioning",
        description:
          "Use multiple versions of the same package item at once: allows testing new versions without having to change an entire package version, lowering risk.",
      },
      {
        id: 8,
        title: "Effortless Pre-Release Sharing",
        description:
          "Share pre-release functions trivially, without contributors needing to check out your git repo or set up anything.",
      },
      {
        id: 9,
        title: "Zero Overhead Workflow",
        description:
          "No need for uploads, releases or other synchronization. No git or GitHub required (but you can sync to GitHub if you prefer).",
      },
    ];
    return n.jsx("section", {
      className: "w-full bg-white py-20 md:py-32",
      children: n.jsxs("div", {
        className: "max-w-7xl 2xl:max-w-[100rem] mx-auto px-4",
        children: [
          n.jsx(pa, {
            subtitle: "Package Management",
            children: "Next-gen Package Manager",
          }),
          n.jsx("div", {
            className: "mb-2",
            children: n.jsx("p", {
              className: "text-lg md:text-xl text-gray-700 max-w-3xl mb-10",
              children:
                "Darklang has a rather unique package manager built directly into the runtime, where functions and types are individually versioned and immutable, taking a lot of the hassle out of package management.",
            }),
          }),
          n.jsxs("div", {
            className: "flex flex-col md:flex-row gap-16 items-center",
            children: [
              n.jsx("div", {
                className: "md:w-1/2 space-y-5 order-2 md:order-1",
                children: r.map(d =>
                  n.jsxs(
                    "div",
                    {
                      className: "flex items-start space-x-3",
                      children: [
                        n.jsx("div", {
                          className: "flex-shrink-0 my-1.5",
                          children: n.jsx("div", {
                            className: "w-5 h-5 text-purple-lbg",
                            children: n.jsxs("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "21",
                              height: "22",
                              viewBox: "0 0 21 22",
                              fill: "none",
                              children: [
                                n.jsx("path", {
                                  opacity: "0.2",
                                  d: "M10.1562 11.042V21.0918C10.025 21.0913 9.89607 21.0577 9.78125 20.9941L1.1875 16.2891C1.06479 16.2219 0.962355 16.1231 0.890895 16.0028C0.819434 15.8826 0.781568 15.7453 0.78125 15.6055V6.26562C0.78156 6.15621 0.80485 6.04808 0.849609 5.94824L10.1562 11.042Z",
                                  fill: "#95589F",
                                }),
                                n.jsx("path", {
                                  d: "M19.5 4.89557L10.9062 0.193423C10.6766 0.0665499 10.4186 0 10.1562 0C9.89391 0 9.63587 0.0665499 9.40625 0.193423L0.8125 4.89752C0.567079 5.03181 0.36221 5.22952 0.219289 5.47001C0.0763674 5.7105 0.000635017 5.98496 0 6.26471V15.6046C0.000635017 15.8843 0.0763674 16.1588 0.219289 16.3993C0.36221 16.6398 0.567079 16.8375 0.8125 16.9717L9.40625 21.6758C9.63587 21.8027 9.89391 21.8693 10.1562 21.8693C10.4186 21.8693 10.6766 21.8027 10.9062 21.6758L19.5 16.9717C19.7454 16.8375 19.9503 16.6398 20.0932 16.3993C20.2361 16.1588 20.3119 15.8843 20.3125 15.6046V6.26569C20.3124 5.98544 20.2369 5.71037 20.094 5.46932C19.951 5.22826 19.7459 5.03009 19.5 4.89557ZM10.1562 1.56061L18.002 5.85749L15.0947 7.44928L7.24805 3.15241L10.1562 1.56061ZM10.1562 10.1544L2.31055 5.85749L5.62109 4.04499L13.4668 8.34186L10.1562 10.1544ZM1.5625 7.22467L9.375 11.5001V19.878L1.5625 15.6055V7.22467ZM18.75 15.6016L10.9375 19.878V11.504L14.0625 9.79401V13.2794C14.0625 13.4866 14.1448 13.6853 14.2913 13.8318C14.4378 13.9783 14.6365 14.0606 14.8438 14.0606C15.051 14.0606 15.2497 13.9783 15.3962 13.8318C15.5427 13.6853 15.625 13.4866 15.625 13.2794V8.93854L18.75 7.22467V15.6007V15.6016Z",
                                  fill: "#95589F",
                                }),
                              ],
                            }),
                          }),
                        }),
                        n.jsxs("div", {
                          children: [
                            n.jsx("h4", {
                              className: "text-lg font-semibold text-dark mb-1",
                              children: d.title,
                            }),
                            n.jsx("p", {
                              className: "md:text-lg text-gray-600",
                              children: d.description,
                            }),
                          ],
                        }),
                      ],
                    },
                    d.id,
                  ),
                ),
              }),
              n.jsx("div", {
                className:
                  "order-1 md:order-2 md:w-1/2 mt-8 md:mt-0 flex items-center justify-center",
                children: n.jsx("img", {
                  src: lx,
                  alt: "Package Manager Architecture",
                  className: "max-w-full h-auto",
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  nx = ({ className: r = "" }) =>
    n.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: `w-5 h-5 text-blue-600 ${r}`,
      children: n.jsx("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" }),
    }),
  ix = ({ className: r = "" }) =>
    n.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: `w-5 h-5 text-orange-600 ${r}`,
      children: [
        n.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
        n.jsx("circle", { cx: "8.5", cy: "7", r: "4" }),
        n.jsx("path", { d: "M20 8v6" }),
        n.jsx("path", { d: "M23 11h-6" }),
      ],
    }),
  sx = ({ className: r = "" }) =>
    n.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: `w-5 h-5 text-orange-600 ${r}`,
      children: [
        n.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        n.jsx("polyline", { points: "12 6 12 12 16 14" }),
      ],
    }),
  kh = ({ className: r = "" }) =>
    n.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: `w-5 h-5 text-blue-600 ${r}`,
      children: n.jsx("polyline", { points: "9 18 15 12 9 6" }),
    }),
  rx = ({ className: r = "" }) =>
    n.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: `w-5 h-5 text-gray-600 ${r}`,
      children: [
        n.jsx("circle", { cx: "12", cy: "12", r: "1" }),
        n.jsx("circle", { cx: "19", cy: "12", r: "1" }),
        n.jsx("circle", { cx: "5", cy: "12", r: "1" }),
      ],
    }),
  Rn = ({
    title: r,
    icon: d,
    description: f,
    codeSample: u,
    className: h = "",
    color: m = "blue",
  }) => {
    const j = {
      blue: { title: "text-blue-500", icon: "bg-blue-100", code: "bg-blue-50" },
      purple: {
        title: "text-blue-lbg",
        icon: "bg-indigo-100",
        code: "bg-indigo-50",
      },
      magenta: {
        title: "text-purple-lbg",
        icon: "bg-purple-lbg/10",
        code: "bg-purple-lbg/10",
      },
      orange: {
        title: "text-tan",
        icon: "bg-orange-100",
        code: "bg-orange-50",
      },
      taupe: { title: "text-taupe", icon: "bg-taupe/30", code: "bg-taupe/30" },
      gray: { title: "text-gray-500", icon: "bg-gray-200", code: "bg-gray-50" },
    }[m];
    return n.jsxs("div", {
      className: `bg-white rounded-xl px-5 pt-6 shadow-sm border border-gray-100 ${h}`,
      children: [
        n.jsx("div", {
          className: "flex items-start mb-3",
          children:
            d &&
            n.jsx("div", {
              className: `mr-3 ${j.icon} rounded-md p-2 flex items-center justify-center w-8 h-8`,
              children: d,
            }),
        }),
        n.jsx("h3", {
          className: `text-sm lg:text-base font-semibold mb-2 ${j.title}`,
          children: r,
        }),
        n.jsx("div", {
          className: "text-[10px] text-gray-600 mb-5",
          children: f,
        }),
        u &&
          n.jsx("div", {
            className: `${j.code} p-2 rounded-t-md text-xs md:text-[8px] font-mono overflow-x-auto h-30 2xl:h-40 overflow-y-scroll`,
            children: n.jsx("pre", {
              className: "whitespace-pre-wrap overflow-hidden",
              children: u,
            }),
          }),
      ],
    });
  },
  Tn = `Made less than a minute ago
request: {
  body: {
    info: "testinfo",
  },
  fullBody:"{\\"info\\":\\"testinfo\\"}",
  headers: {
    accept: "*/*",
    content-length: "37",
    ...
  }
}`,
  cx = () =>
    n.jsx("section", {
      className: "w-full bg-white py-20 md:py-32",
      children: n.jsx("div", {
        className: "max-w-7xl 2xl:max-w-[100rem] mx-auto px-4",
        children: n.jsxs("div", {
          className: "grid md:grid-cols-5 gap-2",
          children: [
            n.jsxs("div", {
              className: "md:col-span-3 flex flex-col justify-center ",
              children: [
                n.jsx(pa, {
                  subtitle: "Trace-driven development",
                  children: "Development with Real Data",
                }),
                n.jsxs("p", {
                  className:
                    "text-base md:text-lg lg:text-xl text-gray-700 mr-8 mb-6",
                  children: [
                    "The best way to debug and refactor code is with the help of",
                    " ",
                    n.jsx("a", {
                      href: "#",
                      className: "text-blue-lbg hover:underline",
                      children: "real user data",
                    }),
                    ". As your code executes, whether",
                    " ",
                    n.jsx("a", {
                      href: "#",
                      className: "text-purple-lbg hover:underline",
                      children: "locally",
                    }),
                    " ",
                    "or in the",
                    " ",
                    n.jsx("a", {
                      href: "#",
                      className: "text-purple-lbg hover:underline",
                      children: "cloud",
                    }),
                    ", traces are captured and made available in your development workflow, making it easier to refactor code and debug issues.",
                  ],
                }),
                n.jsx("p", {
                  className:
                    "text-base md:text-lg lg:text-xl text-gray-700 mr-8 mb-6",
                  children:
                    "Traces are captured centrally in the package manager, stored locally first, and securely available in your editing environment - you control when and if they sync.",
                }),
                n.jsx("a", {
                  href: "#",
                  className:
                    "inline-block mt-6 text-blue-lbg hover:underline text-lg xl:text-xl font-semibold",
                  children: "See how traces work with real examples →",
                }),
              ],
            }),
            n.jsx("div", {
              className: "md:col-span-2 relative",
              children: n.jsxs("div", {
                className: "grid grid-cols-2 gap-5",
                children: [
                  n.jsxs("div", {
                    className: "space-y-5",
                    children: [
                      n.jsx(Rn, {
                        title: "HTTP Handlers",
                        icon: n.jsx(nx, { className: "w-4 h-4" }),
                        description:
                          "Lorem ipsum dolor sit amet consectetur. Cras a montes vitae id sit duis lectus amet.",
                        codeSample: Tn,
                        color: "blue",
                      }),
                      n.jsx(Rn, {
                        title: "Function calls",
                        icon: n.jsx(kh, {
                          className: "w-4 h-4 text-purple-lbg",
                        }),
                        description:
                          "Lorem ipsum dolor sit amet consectetur. Cras a montes vitae id sit duis lectus amet.",
                        codeSample: Tn,
                        color: "magenta",
                      }),
                      n.jsx(Rn, {
                        title: "CLI application calls",
                        icon: n.jsx(kh, { className: "w-4 h-4 text-blue-lbg" }),
                        description:
                          "Lorem ipsum dolor sit amet consectetur. Cras a montes vitae id sit duis lectus amet.",
                        codeSample: Tn,
                        color: "purple",
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "space-y-5 mt-12",
                    children: [
                      n.jsx(Rn, {
                        title: "Worker emits",
                        icon: n.jsx(ix, { className: "w-4 h-4 text-taupe" }),
                        description:
                          "Lorem ipsum dolor sit amet consectetur. Cras a montes vitae id sit duis lectus amet.",
                        codeSample: Tn,
                        color: "taupe",
                      }),
                      n.jsx(Rn, {
                        title: "CRON responses",
                        icon: n.jsx(sx, { className: "w-4 h-4 text-tan" }),
                        description:
                          "Lorem ipsum dolor sit amet consectetur. Cras a montes vitae id sit duis lectus amet.",
                        codeSample: Tn,
                        color: "orange",
                      }),
                      n.jsx(Rn, {
                        title: "Whatever else you wish",
                        icon: n.jsx(rx, { className: "w-4 h-4 text-gray-500" }),
                        description:
                          "Lorem ipsum dolor sit amet consectetur. Cras a montes vitae id sit duis lectus amet.",
                        codeSample: Tn,
                        color: "gray",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  ux = "/assets/editing3-ChJywPB1.png",
  ox = () => {
    const r = [
      {
        id: 1,
        description:
          "Darklang has a Language Server that provides real-time feedback, AI-powered completions, instant diagnostics, and easy access to language features. It wraps a lightweight VS Code extension for seamless integration and an intuitive coding experience.",
      },
      {
        id: 2,
        description:
          "Built entirely in Darklang, the language server follows the Language Server Protocol (LSP), making it easy to expand support to more editors so you can use Darklang in your favourite development environment.",
      },
      {
        id: 3,
        description:
          "The Language Server is designed to be flexible, so users can configure it to fit their needs",
      },
    ];
    return n.jsx("section", {
      className: "w-full bg-white py-20 md:py-32",
      children: n.jsx("div", {
        className: "max-w-7xl 2xl:max-w-[100rem] mx-auto px-4",
        children: n.jsxs("div", {
          className: "flex flex-col md:flex-row gap-16 items-center",
          children: [
            n.jsxs("div", {
              className: "md:w-1/2 space-y-6",
              children: [
                n.jsxs("div", {
                  className: "mb-2",
                  children: [
                    n.jsx(pa, {
                      subtitle: "Editing",
                      children: "Powerful, Familiar, and Extensible editing",
                    }),
                    n.jsx("p", {
                      className:
                        "text-lg lg:text-xl text-gray-700 max-w-3xl mb-8",
                      children:
                        "Edit code in your preferred environment—whether it's your local editor, a browser-based IDE, or directly in the CLI. This is made possible by Darklang's Language Server:",
                    }),
                  ],
                }),
                r.map(d =>
                  n.jsxs(
                    "div",
                    {
                      className: "flex items-start space-x-2",
                      children: [
                        n.jsx("div", {
                          className: "flex-shrink-0",
                          children: n.jsx("div", {
                            className: "text-purple-lbg",
                            children: n.jsx("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "32",
                              height: "32",
                              viewBox: "0 0 32 32",
                              fill: "none",
                              children: n.jsx("path", {
                                d: "M18 8L13.3333 24.6667M8.66667 11.3333L4 16L8.66667 20.6667M23.3333 11.3333L28 16L23.3333 20.6667",
                                stroke: "#95589F",
                                "stroke-width": "2.625",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                            }),
                          }),
                        }),
                        n.jsx("div", {
                          children: n.jsx("p", {
                            className: "text-gray-600 lg:text-lg",
                            children: d.description,
                          }),
                        }),
                      ],
                    },
                    d.id,
                  ),
                ),
                n.jsx("div", {
                  className: "mt-8",
                  children: n.jsx("a", {
                    href: "#learn-more",
                    className:
                      "md:text-lg text-purple-lbg hover:text-purple-secondary font-medium",
                    children: "Learn more about Darklang's LSP →",
                  }),
                }),
              ],
            }),
            n.jsx("div", {
              className:
                "md:w-1/2 mt-8 md:mt-0 hidden md:flex items-center justify-center",
              children: n.jsx("img", {
                src: ux,
                alt: "Darklang Editor Environment",
                className:
                  "md:max-w-4xl 2xl:max-w-7xl max-h-fit md:absolute md:-right-40 2xl:-right-38",
              }),
            }),
          ],
        }),
      }),
    });
  },
  Ih = "/assets/cli-BoLunor5.png",
  dx = () => {
    const [r, d] = T.useState("typescript"),
      f = [
        { id: "typescript", label: "Hello World script" },
        { id: "bash", label: "Simple bash script" },
        { id: "deployment", label: "Deployment Script" },
      ],
      u = `find_large_typescript_commonjs_files() {
    local search_path="$1"
    
    find "$search_path" -type f | while read -r file_path; do
      
      if [[ "$file_path" != *.ts && "$file_path" != *.mjs && 
          "$file_path" != *.cjs ]]; then
        echo "Skipping - wrong file type:$file_path"
        continue
      fi
      
      line_count=$(wc -l < "$file_path")
      if [ "$line_count" -le 600 ]; then
        echo "Skipping - too short: $file_path"
        continue
      fi
      
      if grep -q -E "const .* = require\\(.*\\)" "$file_path"; then
        echo "Found one: $file_path"
      fi
    done
  }

  find_large_typescript_commonjs_files "./"`,
      h = `let findLargeTypescriptCommonJSFiles (path : String) =
  Directory.traverse (fun path →
    if not (List.oneOf (File.extension path) [".ts", ".mjs", ".cjs"])
    then
      print $"Skipping - wrong file type: {path}"
    else
      let contents = File.readString path
      let lines = String.splitNewlines contents
      if (List.length lines) < 600 then
        print $"Skipping - too short: {path}"
      else
        let isCommonjs =
          lines |> List.any (fun line →
            line |> Regex.matches "/const .* = require\\(.*\\)/"
          )
        if isCommonjs then
          print $"Found one: {path}"
  )

findLargeTypescriptCommonJSFiles "./"`,
      m = `#!/bin/bash

# Simple script to backup a directory
BACKUP_DIR="/home/user/documents"
TARGET_DIR="/backup/$(date +%Y-%m-%d)"

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Copy files with progress indicator
echo "Backing up $BACKUP_DIR to $TARGET_DIR..."
rsync -av --progress "$BACKUP_DIR/" "$TARGET_DIR/"

# Check if backup was successful
if [ $? -eq 0 ]; then
  echo "Backup completed successfully!"
else
  echo "Backup failed with error code $?"
  exit 1
fi

# Cleanup old backups (keep last 7 days)
find /backup -type d -mtime +7 -exec rm -rf {} \\; 2>/dev/null

echo "Backup process completed."`,
      A = `// Simple script to backup a directory
let backupDirectory = (sourcePath : String, keepDays : Int) : Result<String, String> =
  // Create timestamp for backup folder
  let timestamp = Date.now() |> Date.format "yyyy-MM-dd"
  let targetDir = $"/backup/{timestamp}"
  
  // Ensure target directory exists
  FileSystem.createDirectory targetDir
  |> Result.map (fun _ -> 
    // Copy files with built-in progress tracking
    let result = FileSystem.copyDirectory sourcePath targetDir
    
    match result with
    | Ok _ -> 
      // Cleanup old backups
      let oldBackups = 
        FileSystem.listDirectories "/backup"
        |> List.filter (fun dir -> 
          let dirDate = Path.basename dir |> Date.parse
          let daysOld = Date.diffDays dirDate (Date.now())
          daysOld > keepDays
        )
      
      // Delete old backups
      List.forEach oldBackups FileSystem.deleteDirectory
      
      Ok $"Backup completed successfully to {targetDir}"
    | Error e -> 
      Error $"Backup failed: {e}"
  )

// Execute backup with 7 day retention
backupDirectory "/home/user/documents" 7
|> Result.match
   (\\success -> Console.log success)
   (\\error -> Console.error error)`,
      j = `#!/bin/bash

# Deployment script for web application

APP_NAME="mywebapp"
DEPLOY_ENV=$1
SOURCE_DIR="./dist"
SERVER_USER="deploy"

# Validate environment argument
if [[ "$DEPLOY_ENV" != "staging" && "$DEPLOY_ENV" != "production" ]]; then
  echo "Error: Please specify either 'staging' or 'production' as environment"
  echo "Usage: $0 <environment>"
  exit 1
fi

# Set server based on environment
if [[ "$DEPLOY_ENV" == "production" ]]; then
  SERVER="production.example.com"
  TARGET_DIR="/var/www/production/$APP_NAME"
else
  SERVER="staging.example.com"
  TARGET_DIR="/var/www/staging/$APP_NAME"
fi

echo "Deploying $APP_NAME to $DEPLOY_ENV environment..."

# Build the application
echo "Building application..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Build failed! Aborting deployment."
  exit 1
fi

# Create backup of current deployment if it exists
ssh $SERVER_USER@$SERVER "if [ -d $TARGET_DIR ]; then cp -r $TARGET_DIR _backup_$(date +%Y%m%d%H%M%S); fi"

# Deploy application to server
echo "Uploading to $SERVER..."
rsync -avz --delete $SOURCE_DIR/ $SERVER_USER@$SERVER:$TARGET_DIR/

# Run post-deployment tasks
echo "Running post-deployment tasks..."
ssh $SERVER_USER@$SERVER "cd $TARGET_DIR && ./post-deploy.sh $DEPLOY_ENV"

echo "Deployment to $DEPLOY_ENV completed successfully!"`,
      v = `// Deployment script for web application

type Environment = Production | Staging

let deployApplication = (env : Environment, appName : String) : Result<String, String> =
  // Set server and paths based on environment
  let (server, targetDir) = 
    match env with
    | Production -> 
      ("production.example.com", $"/var/www/production/{appName}")
    | Staging -> 
      ("staging.example.com", $"/var/www/staging/{appName}")
  
  Console.log $"Deploying {appName} to {env} environment..."
  
  // Build the application
  Console.log "Building application..."
  let buildResult = Process.run "npm" ["run", "build"]
  
  // Check if build was successful
  match buildResult with
  | Error e -> Error $"Build failed: {e}"
  | Ok _ ->
    // Create backup of current deployment
    Server.execute server $"
      if [ -d {targetDir} ]; then 
        cp -r {targetDir} {targetDir}_backup_$(date +%Y%m%d%H%M%S)
      fi"
    |> ignore
    
    // Deploy files to server
    Console.log $"Uploading to {server}..."
    let deployResult = 
      RemoteFS.sync 
        { sourcePath = "./dist"
          targetServer = server
          targetPath = targetDir
          deleteExtraFiles = true }
    
    match deployResult with
    | Error e -> Error $"Deployment failed: {e}"
    | Ok _ ->
      // Run post-deployment tasks
      Console.log "Running post-deployment tasks..."
      let postDeployResult = 
        Server.execute server $"cd {targetDir} && ./post-deploy.sh {env}"
      
      match postDeployResult with
      | Error e -> Error $"Post-deployment tasks failed: {e}"
      | Ok _ -> Ok $"Deployment to {env} completed successfully!"

// Execute deployment
deployApplication Staging "mywebapp"
|> Result.match
   (\\success -> Console.log success)
   (\\error -> Console.error error)`,
      S = (B => {
        switch (B) {
          case "typescript":
            return { bash: u, darklang: h };
          case "bash":
            return { bash: m, darklang: A };
          case "deployment":
            return { bash: j, darklang: v };
          default:
            return { bash: u, darklang: h };
        }
      })(r);
    return n.jsx("section", {
      className: "w-full py-20 md:py-28",
      children: n.jsxs("div", {
        className: "max-w-7xl 2xl:max-w-[100rem] mx-auto px-6",
        children: [
          n.jsxs(pa, {
            subtitle: "Darklang CLI",
            children: [
              " ",
              "A CLI Runtime to Replace your Bash",
              n.jsx("br", {}),
              "and Python Scripts",
            ],
          }),
          n.jsxs("div", {
            className: "flex flex-col lg:flex-row items-start justify-start",
            children: [
              n.jsxs("div", {
                className:
                  "lg:w-2/3 max-w-3xl space-y-10 mt-8 order-2 md:order-1",
                children: [
                  n.jsxs("div", {
                    className: "flex space-x-4",
                    children: [
                      n.jsx("div", {
                        className: "flex-shrink-0 text-blue-lbg",
                        children: n.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "38",
                          height: "38",
                          viewBox: "0 0 38 38",
                          fill: "none",
                          children: n.jsx("path", {
                            d: "M7.91699 11.0835L15.8337 19.0002L7.91699 26.9168M19.0003 30.0835H30.0837",
                            stroke: "#6D74C5",
                            "stroke-width": "4",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                          }),
                        }),
                      }),
                      n.jsx("p", {
                        className: "text-lg text-gray-800 leading-relaxed mr-5",
                        children:
                          "Darklang's CLI is a better alternative to Bash, combining its power with the simplicity and safety of modern programming languages. Enabling you to write scripts without confusing errors or dependency issues.",
                      }),
                    ],
                  }),
                  n.jsx("div", {
                    className: "bg-blue-lbg/5 p-8 rounded-lg",
                    children: n.jsxs("div", {
                      className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center space-x-3",
                          children: [
                            n.jsx("div", {
                              className: "flex-shrink-0",
                              children: n.jsxs("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "31",
                                height: "31",
                                viewBox: "0 0 31 31",
                                fill: "none",
                                children: [
                                  n.jsx("path", {
                                    d: "M15.5 1.9375L3.875 5.8125V17.4375C3.875 23.8585 9.079 29.0625 15.5 29.0625C21.921 29.0625 27.125 23.8585 27.125 17.4375V5.8125L15.5 1.9375ZM24.9453 17.4375C24.9453 22.6536 20.7161 26.8828 15.5 26.8828C10.2839 26.8828 6.05469 22.6536 6.05469 17.4375V7.44727L15.5 4.11719L24.9453 7.44727V17.4375Z",
                                    fill: "#6D74C5",
                                  }),
                                  n.jsx("path", {
                                    d: "M11.4558 14.383C11.3548 14.2816 11.2347 14.201 11.1025 14.1461C10.9703 14.0912 10.8285 14.0629 10.6853 14.0629C10.5422 14.0629 10.4004 14.0912 10.2682 14.1461C10.136 14.201 10.0159 14.2816 9.91489 14.383C9.81342 14.484 9.7329 14.6041 9.67795 14.7363C9.62301 14.8685 9.59473 15.0103 9.59473 15.1535C9.59473 15.2967 9.62301 15.4384 9.67795 15.5707C9.7329 15.7029 9.81342 15.8229 9.91489 15.924L13.8323 19.8413L13.8958 19.9049C13.9914 20.0006 14.1049 20.0766 14.2298 20.1284C14.3547 20.1802 14.4887 20.2069 14.6239 20.2069C14.7592 20.2069 14.8931 20.1802 15.018 20.1284C15.143 20.0766 15.2565 20.0006 15.352 19.9049L22.1181 13.1388C22.2138 13.0432 22.2898 12.9298 22.3416 12.8048C22.3934 12.6799 22.4201 12.546 22.4201 12.4107C22.4201 12.2755 22.3934 12.1415 22.3416 12.0166C22.2898 11.8917 22.2138 11.7782 22.1181 11.6826L22.0333 11.5979C21.9378 11.5021 21.8243 11.4262 21.6994 11.3744C21.5744 11.3226 21.4405 11.2959 21.3053 11.2959C21.17 11.2959 21.0361 11.3226 20.9112 11.3744C20.7862 11.4262 20.6727 11.5021 20.5772 11.5979L14.6224 17.5496L11.4558 14.383Z",
                                    fill: "#6D74C5",
                                  }),
                                ],
                              }),
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("h3", {
                                  className: "font-semibold text-blue-lbg mb-1",
                                  children: "Type-safe by design",
                                }),
                                n.jsx("p", {
                                  className:
                                    "text-sm 2xl:text-base text-gray-700",
                                  children:
                                    "Using static types to help ensure correctness",
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-3",
                          children: [
                            n.jsx("div", {
                              className: "flex-shrink-0",
                              children: n.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "34",
                                height: "34",
                                viewBox: "0 0 34 34",
                                fill: "none",
                                children: n.jsx("path", {
                                  d: "M29.58 9.01912L17.8925 2.62021C17.6192 2.4693 17.3122 2.39014 17 2.39014C16.6878 2.39014 16.3808 2.4693 16.1075 2.62021L4.42 9.01912C4.12755 9.17913 3.8835 9.41483 3.7134 9.70152C3.5433 9.98822 3.45341 10.3154 3.45312 10.6487V23.3509C3.45341 23.6843 3.5433 24.0114 3.7134 24.2981C3.8835 24.5848 4.12755 24.8205 4.42 24.9805L16.1075 31.3794C16.3808 31.5301 16.6879 31.6091 17 31.6091C17.3121 31.6091 17.6192 31.5301 17.8925 31.3794L29.58 24.9805C29.8724 24.8205 30.1165 24.5848 30.2866 24.2981C30.4567 24.0114 30.5466 23.6843 30.5469 23.3509V10.6487C30.5466 10.3154 30.4567 9.98822 30.2866 9.70152C30.1165 9.41483 29.8724 9.17913 29.58 9.01912ZM16.8672 4.0174C16.9063 3.99601 16.9501 3.9848 16.9947 3.9848C17.0392 3.9848 17.0831 3.99601 17.1222 4.0174L28.224 10.0936L23.7163 12.5599L12.491 6.416L16.8672 4.0174ZM16.2031 29.617L5.17969 23.5833C5.13896 23.5598 5.1052 23.5259 5.08186 23.4851C5.05853 23.4442 5.04645 23.3979 5.04688 23.3509V11.5094L16.2031 17.6187V29.617ZM5.77602 10.0936L10.8322 7.32443L22.0562 13.4683L17 16.2348L5.77602 10.0936ZM28.9531 23.3509C28.9535 23.3979 28.9415 23.4442 28.9181 23.4851C28.8948 23.5259 28.861 23.5598 28.8203 23.5833L17.7969 29.617V17.6161L22.5781 14.9983V20.1873C22.5781 20.3987 22.6621 20.6014 22.8115 20.7508C22.961 20.9002 23.1637 20.9842 23.375 20.9842C23.5863 20.9842 23.789 20.9002 23.9385 20.7508C24.0879 20.6014 24.1719 20.3987 24.1719 20.1873V14.1271L28.9531 11.5094V23.3509Z",
                                  fill: "#6D74C5",
                                }),
                              }),
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("h3", {
                                  className: "font-semibold text-blue-lbg mb-1",
                                  children: "Built-in Packages",
                                }),
                                n.jsx("p", {
                                  className:
                                    "text-sm 2xl:text-base text-gray-700",
                                  children:
                                    "No Npm install, no dependency headaches",
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-3",
                          children: [
                            n.jsx("div", {
                              className: "flex-shrink-0",
                              children: n.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "33",
                                height: "33",
                                viewBox: "0 0 33 33",
                                fill: "none",
                                children: n.jsx("path", {
                                  d: "M21.9141 9.79688C21.9141 8.72608 21.5965 7.67932 21.0016 6.78899C20.4067 5.89865 19.5612 5.20471 18.5719 4.79494C17.5826 4.38516 16.494 4.27794 15.4438 4.48684C14.3935 4.69575 13.4289 5.21139 12.6717 5.96856C11.9145 6.72573 11.3989 7.69042 11.19 8.74065C10.9811 9.79087 11.0883 10.8795 11.4981 11.8688C11.9078 12.858 12.6018 13.7036 13.4921 14.2985C14.3824 14.8934 15.4292 15.2109 16.5 15.2109C17.9359 15.2109 19.313 14.6405 20.3283 13.6252C21.3437 12.6099 21.9141 11.2328 21.9141 9.79688ZM16.5 13.6641C15.7351 13.6641 14.9875 13.4373 14.3515 13.0123C13.7156 12.5874 13.2199 11.9834 12.9272 11.2768C12.6345 10.5702 12.5579 9.79259 12.7071 9.04243C12.8563 8.29227 13.2247 7.6032 13.7655 7.06236C14.3063 6.52153 14.9954 6.15321 15.7456 6.004C16.4957 5.85478 17.2733 5.93136 17.9799 6.22406C18.6865 6.51676 19.2905 7.01243 19.7155 7.64838C20.1404 8.28434 20.3672 9.03202 20.3672 9.79688C20.3672 10.8225 19.9598 11.8062 19.2345 12.5314C18.5093 13.2566 17.5256 13.6641 16.5 13.6641ZM24.2344 16.7578C23.1636 16.7578 22.1168 17.0753 21.2265 17.6702C20.3361 18.2652 19.6422 19.1107 19.2324 20.1C18.8227 21.0893 18.7154 22.1779 18.9243 23.2281C19.1332 24.2783 19.6489 25.243 20.4061 26.0002C21.1632 26.7574 22.1279 27.273 23.1781 27.4819C24.2284 27.6908 25.317 27.5836 26.3062 27.1738C27.2955 26.764 28.1411 26.0701 28.736 25.1798C29.3309 24.2894 29.6484 23.2427 29.6484 22.1719C29.6484 20.736 29.078 19.3589 28.0627 18.3436C27.0474 17.3282 25.6703 16.7578 24.2344 16.7578ZM24.2344 26.0391C23.4695 26.0391 22.7218 25.8123 22.0859 25.3873C21.4499 24.9624 20.9543 24.3584 20.6616 23.6518C20.3689 22.9452 20.2923 22.1676 20.4415 21.4174C20.5907 20.6673 20.959 19.9782 21.4999 19.4374C22.0407 18.8965 22.7298 18.5282 23.4799 18.379C24.2301 18.2298 25.0076 18.3064 25.7143 18.5991C26.4209 18.8918 27.0249 19.3874 27.4498 20.0234C27.8748 20.6593 28.1016 21.407 28.1016 22.1719C28.1016 23.1975 27.6941 24.1812 26.9689 24.9064C26.2437 25.6316 25.26 26.0391 24.2344 26.0391ZM8.76563 16.7578C7.69483 16.7578 6.64807 17.0753 5.75774 17.6702C4.8674 18.2652 4.17346 19.1107 3.76369 20.1C3.35391 21.0893 3.24669 22.1779 3.45559 23.2281C3.6645 24.2783 4.18014 25.243 4.93731 26.0002C5.69448 26.7574 6.65917 27.273 7.7094 27.4819C8.75962 27.6908 9.84821 27.5836 10.8375 27.1738C11.8268 26.764 12.6724 26.0701 13.2673 25.1798C13.8622 24.2894 14.1797 23.2427 14.1797 22.1719C14.1797 20.736 13.6093 19.3589 12.5939 18.3436C11.5786 17.3282 10.2015 16.7578 8.76563 16.7578ZM8.76563 26.0391C8.00077 26.0391 7.25309 25.8123 6.61713 25.3873C5.98118 24.9624 5.48551 24.3584 5.19281 23.6518C4.90011 22.9452 4.82353 22.1676 4.97275 21.4174C5.12196 20.6673 5.49028 19.9782 6.03111 19.4374C6.57195 18.8965 7.26102 18.5282 8.01118 18.379C8.76134 18.2298 9.5389 18.3064 10.2455 18.5991C10.9522 18.8918 11.5561 19.3874 11.9811 20.0234C12.406 20.6593 12.6328 21.407 12.6328 22.1719C12.6328 23.1975 12.2254 24.1812 11.5001 24.9064C10.7749 25.6316 9.79127 26.0391 8.76563 26.0391Z",
                                  fill: "#6D74C5",
                                }),
                              }),
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("h3", {
                                  className: "font-semibold text-blue-lbg mb-1",
                                  children: "Cross-platform",
                                }),
                                n.jsx("p", {
                                  className:
                                    "text-sm 2xl:text-base text-gray-700",
                                  children:
                                    "Running on macOS, Linux, and Windows",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  n.jsx("a", {
                    href: "#",
                    className:
                      "inline-flex items-center font-medium text-blue-lbg hover:text-purple-lbg transition-colors",
                    children:
                      "Discover Darklang CLI features and how it solves scripting problems →",
                  }),
                ],
              }),
              n.jsx("div", {
                className: "md:w-1/3 relative order-1 md:order-2",
                children: n.jsx("div", {
                  className: "md:absolute md:-right-88 2xl:block",
                  children: n.jsx("img", {
                    src: Ih,
                    alt: "Darklang CLI interface",
                    className: "h-auto",
                  }),
                }),
              }),
            ],
          }),
          n.jsxs("div", {
            className: "mt-35",
            children: [
              n.jsx("h2", {
                className:
                  "text-2xl md:text-3xl font-semibold mb-20 text-purple-lbg",
                children: "Darklang compared to Bash and Python",
              }),
              n.jsxs("div", {
                className: "flex flex-col lg:flex-row w-full gap-6",
                children: [
                  n.jsx("div", {
                    className: "lg:w-1/6",
                    children: n.jsx("ul", {
                      className: "space-y-2",
                      children: f.map(B =>
                        n.jsx(
                          "li",
                          {
                            className: `px-4 py-2 border-l-4 cursor-pointer ${r === B.id ? "border-purple-lbg text-purple-lbg font-medium" : "border-gray-200 text-gray-600 hover:border-purple-lbg/20 hover:text-purple-lbg"}`,
                            onClick: () => d(B.id),
                            children: B.label,
                          },
                          B.id,
                        ),
                      ),
                    }),
                  }),
                  n.jsxs("div", {
                    className: "lg:w-5/6 grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsxs("div", {
                            className:
                              "rounded-lg h-150 overflow-scroll shadow-lg inset-shadow-xs bg-white p-4",
                            children: [
                              n.jsxs("div", {
                                className:
                                  "p-4 flex items-center justify-end space-x-2",
                                children: [
                                  n.jsx("div", {
                                    className:
                                      "w-3 h-3 rounded-full bg-red-500",
                                  }),
                                  n.jsx("div", {
                                    className:
                                      "w-3 h-3 rounded-full bg-yellow-500",
                                  }),
                                  n.jsx("div", {
                                    className:
                                      "w-3 h-3 rounded-full bg-green-500",
                                  }),
                                ],
                              }),
                              n.jsx("div", {
                                className: "p-5 text-sm 2xl:text-base",
                                children: n.jsx(Zi, {
                                  code: S.bash,
                                  showLineNumbers: !1,
                                }),
                              }),
                            ],
                          }),
                          n.jsx("div", {
                            className: "py-8 text-center text-gray-400",
                            children: "-Bash-",
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsxs("div", {
                            className:
                              "rounded-lg h-150 overflow-scroll shadow-md bg-dark p-4 text-white",
                            children: [
                              n.jsxs("div", {
                                className:
                                  "p-4 flex items-center space-x-2 justify-end border-gray-700",
                                children: [
                                  n.jsx("div", {
                                    className:
                                      "w-3 h-3 rounded-full bg-purple-dbg",
                                  }),
                                  n.jsx("div", {
                                    className: "w-3 h-3 rounded-full bg-sand",
                                  }),
                                  n.jsx("div", {
                                    className: "w-3 h-3 rounded-full bg-olive",
                                  }),
                                ],
                              }),
                              n.jsx("div", {
                                className: "p-5 text-sm 2xl:text-base",
                                children: n.jsx(Zi, {
                                  code: S.darklang,
                                  language: "fsharp",
                                  showLineNumbers: !1,
                                }),
                              }),
                            ],
                          }),
                          n.jsx("div", {
                            className: "py-8 text-center text-gray-400",
                            children: "-Darklang-",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  kn = ({ icon: r, title: d, description: f }) =>
    n.jsxs("div", {
      className: "flex items-start gap-6",
      children: [
        n.jsx("div", { className: "mt-1 flex-shrink-0", children: r }),
        n.jsxs("div", {
          children: [
            n.jsx("h3", {
              className: "text-lg md:text-xl font-semibold mb-2",
              children: d,
            }),
            n.jsx("p", { className: "text-gray-700", children: f }),
          ],
        }),
      ],
    }),
  Dn = ({ color: r = "text-purple-lbg" }) =>
    n.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "28",
      height: "28",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: r,
      children: n.jsx("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" }),
    }),
  fx = () => {
    const [r, d] = T.useState("deployless");
    return n.jsx("section", {
      className: "w-full bg-white py-24",
      children: n.jsxs("div", {
        className: "max-w-7xl 2xl:max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          n.jsxs("div", {
            className: "text-center mb-20",
            children: [
              n.jsx("button", {
                className:
                  "inline-flex items-center justify-center px-6 py-2 border border-purple-lbg font-medium rounded-full text-purple-lbg bg-white",
                children: "No Setup",
              }),
              n.jsx("h2", {
                className:
                  "text-3xl md:text-4xl md:text-5xl font-bold mt-6 mb-8",
                children: "Deployless, Infraless Cloud Apps",
              }),
              n.jsx("p", {
                className:
                  "text-lg md:text-2xl max-w-6xl mx-auto text-gray-700 leading-relaxed",
                children:
                  "Instant cloud deployment of code (to our cloud or yours), with instant creation of DBs, API endpoints, and worker queues, with no containers, no cold starts, no orchestration, or other devops/cloud engineering required",
              }),
            ],
          }),
          n.jsxs("div", {
            className:
              "flex justify-center max-w-5xl 2xl:max-w-6xl mx-auto text-center mb-4",
            children: [
              n.jsx("div", {
                className: `flex-1 pb-2 ${r === "deployless" ? "border-b-2 border-purple-lbg" : "border-b border-gray-200"}`,
                children: n.jsx("button", {
                  onClick: () => d("deployless"),
                  className: `md:text-2xl font-semibold py-2 ${r === "deployless" ? "text-purple-lbg" : "text-gray-700"}`,
                  children: "Deployless",
                }),
              }),
              n.jsx("div", {
                className: `flex-1 pb-2 ${r === "nosetup" ? "border-b-2 border-purple-lbg" : "border-b border-gray-200"}`,
                children: n.jsx("button", {
                  onClick: () => d("nosetup"),
                  className: `md:text-2xl font-semibold py-2 ${r === "nosetup" ? "text-purple-lbg" : "text-gray-700"}`,
                  children: "No setup required",
                }),
              }),
            ],
          }),
          n.jsxs("div", {
            className:
              "mt-10 flex justify-start max-w-4xl 2xl:max-w-6xl mx-auto",
            children: [
              r === "deployless" &&
                n.jsxs("div", {
                  className: "space-y-12",
                  children: [
                    n.jsx(kn, {
                      icon: n.jsx(Dn, {}),
                      title: "Write code and it's immediately available",
                      description:
                        "No build step, no wait time, no deployment pipeline your code is live as soon as you type.",
                    }),
                    n.jsx(kn, {
                      icon: n.jsx(Dn, {}),
                      title: "Feature flags for controlled rollouts",
                      description:
                        "Control exactly when and for whom new features go live. Test in production safely with instant rollback capability",
                    }),
                    n.jsx(kn, {
                      icon: n.jsx(Dn, {}),
                      title: "Development/Production Parity",
                      description:
                        "Your development environment matches the production environment, so you can test with confidence.",
                    }),
                    n.jsx(kn, {
                      icon: n.jsx(Dn, {}),
                      title: "Integrated code review and testing",
                      description:
                        "Review code, run tests, and collaborate seamlessly in one place",
                    }),
                  ],
                }),
              r === "nosetup" &&
                n.jsxs("div", {
                  className: "space-y-12",
                  children: [
                    n.jsx(kn, {
                      icon: n.jsx(Dn, {}),
                      title: "Instant infrastructure creation",
                      description:
                        "Language-native HTTP handlers, Databases, CRONs and queues, without thinking about servers, containers, or deployment",
                    }),
                    n.jsx(kn, {
                      icon: n.jsx(Dn, {}),
                      title: "Simplified Architecture",
                      description:
                        "No need to worry about connection poolers, sharding, indexes, load balancers, cloud services, or system administration—everything runs seamlessly in the background",
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
    });
  },
  hx = () => {
    const [r, d] = T.useState(""),
      [f, u] = T.useState(!1),
      [h, m] = T.useState(!1),
      [A, j] = T.useState(""),
      v = async x => {
        if ((x.preventDefault(), !r)) {
          j("Please enter your email address");
          return;
        }
        try {
          u(!0),
            j(""),
            await new Promise(S => setTimeout(S, 1e3)),
            console.log("Subscribed email:", r),
            m(!0),
            d("");
        } catch (S) {
          j("Failed to subscribe. Please try again."),
            console.error("Subscription error:", S);
        } finally {
          u(!1);
        }
      };
    return n.jsx("section", {
      className: "w-full py-20",
      children: n.jsx("div", {
        className: "max-w-7xl 2xl:max-w-[100rem] mx-auto px-4",
        children: n.jsxs("div", {
          className:
            "bg-white rounded-lg shadow-md inset-shadow-sm p-8 md:p-12 max-w-4xl mx-auto",
          children: [
            n.jsxs("div", {
              className: "text-center mb-8",
              children: [
                n.jsx("h2", {
                  className:
                    "text-3xl md:text-4xl font-bold mb-4 text-black-custom tracking-tight",
                  children: "Send me project updates",
                }),
                n.jsx("p", {
                  className: "text-lg text-gray-700",
                  children:
                    "Get notified about new features, updates, Bug Fixes, project milestones, and more",
                }),
              ],
            }),
            h
              ? n.jsxs("div", {
                  className: "text-center py-8",
                  children: [
                    n.jsx("div", {
                      className: "mb-4 flex justify-center",
                      children: n.jsx("svg", {
                        className: "w-16 h-16 text-green-500",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: n.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                        }),
                      }),
                    }),
                    n.jsx("h3", {
                      className: "text-2xl font-bold mb-2 text-black-custom",
                      children: "Thanks for subscribing!",
                    }),
                    n.jsx("p", {
                      className: "text-gray-600",
                      children:
                        "We'll send you updates about Darklang project milestones.",
                    }),
                    n.jsx("button", {
                      onClick: () => m(!1),
                      className:
                        "mt-6 text-purple-lbg hover:text-purple-700 underline",
                      children: "Subscribe another email",
                    }),
                  ],
                })
              : n.jsxs("form", {
                  onSubmit: v,
                  className: "space-y-4",
                  children: [
                    n.jsxs("div", {
                      className: "flex flex-col md:flex-row gap-3",
                      children: [
                        n.jsx("input", {
                          type: "email",
                          value: r,
                          onChange: x => d(x.target.value),
                          placeholder: "Your email",
                          className:
                            "flex-grow py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-lbg focus:border-transparent",
                          disabled: f,
                        }),
                        n.jsx(ga, {
                          type: "submit",
                          variant: "primary",
                          size: "md",
                          className:
                            "bg-purple-lbg hover:bg-purple-secondary text-white-custom",
                          disabled: f,
                          children: f ? "Subscribing..." : "send me updates",
                        }),
                      ],
                    }),
                    A &&
                      n.jsx("p", {
                        className: "text-red-500 text-sm mt-2",
                        children: A,
                      }),
                    n.jsxs("div", {
                      className:
                        "flex items-center justify-start mt-4 text-sm text-gray-500",
                      children: [
                        n.jsx("svg", {
                          className: "w-5 h-5 mx-2 text-gray-400",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: n.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                          }),
                        }),
                        "Monthly updates, no spam, unsubscribe anytime",
                      ],
                    }),
                  ],
                }),
          ],
        }),
      }),
    });
  },
  mx = ({ author: r, date: d, title: f, excerpt: u, imageUrl: h, slug: m }) =>
    n.jsx("div", {
      className:
        "bg-white rounded-2xl overflow-hidden shadow-sm inset-shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col h-full",
      children: n.jsxs("a", {
        href: m,
        className: "block flex flex-col h-full",
        target: "_blank",
        children: [
          n.jsxs("div", {
            className: "px-8 py-6 flex-1",
            children: [
              n.jsxs("div", {
                className: "flex justify-between items-center mb-2",
                children: [
                  n.jsxs("span", {
                    className: "text-xs text-gray-400 mt-6 mb-2",
                    children: ["By ", r],
                  }),
                  n.jsx("span", {
                    className: "text-xs text-gray-400",
                    children: d,
                  }),
                ],
              }),
              n.jsx("h3", {
                className: "text-xl font-bold text-blue-lbg mb-2",
                children: f,
              }),
              n.jsx("p", {
                className:
                  "text-gray-700 overflow-hidden text-ellipsis line-clamp-4 text-sm",
                children: u,
              }),
            ],
          }),
          n.jsx("div", {
            className: "mt-auto mx-8",
            children: n.jsx("img", {
              src: h,
              alt: f,
              className: "w-full h-40 object-fit rounded-t-md",
            }),
          }),
        ],
      }),
    }),
  gx = ({ posts: r }) =>
    n.jsx("section", {
      className: "py-16 mb-64 bg-white",
      children: n.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          n.jsxs("div", {
            className: "text-center mb-12",
            children: [
              n.jsx("button", {
                className:
                  "inline-flex items-center justify-center px-6 py-2 border border-purple-lbg text-sm font-medium rounded-full text-purple-lbg bg-white",
                children: "Latest insights & updates",
              }),
              n.jsx("h2", {
                className:
                  "mt-6 text-3xl md:text-6xl font-bold text-black-custom",
                children: "Recent Blog Posts",
              }),
            ],
          }),
          n.jsx("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto",
            children: r.map(d =>
              n.jsx(
                mx,
                {
                  author: d.author,
                  date: d.date,
                  title: d.title,
                  excerpt: d.excerpt,
                  imageUrl: d.imageUrl,
                  slug: d.slug,
                },
                d.id,
              ),
            ),
          }),
        ],
      }),
    }),
  xx = [
    {
      id: "1",
      author: "Stachu Korick",
      date: "12 Mar 2024",
      title: "An overdue status update on Darklang",
      excerpt:
        "An overdue status update on Darklang. We've been working hard at Darklang for the past year, but haven't been very vocal about what we've been up to...",
      imageUrl: "src/assets/The_Sower-1.jpg",
      slug: "https://blog.darklang.com/an-overdue-status-update/",
    },
    {
      id: "2",
      author: "Paul Biggar",
      date: "28 Mar 2023",
      title: "Darklang is going all-in on AI",
      excerpt:
        "Like an aging rock star making a final stab at glory, I'm delighted to announce that Darklang is going all in on AI/GPT. As everyone knows, the folks over at...",
      imageUrl: "src/assets/murmuration.webp",
      slug: "https://blog.darklang.com/gpt/",
    },
    {
      id: "3",
      author: "Paul Biggar",
      date: "24 Feb 2023",
      title: "Sponsoring Darklang",
      excerpt:
        "We'd love you to sponsor Darklang's development! Long term, we'd like Darklang to be sustainable from the community. In the future, we expect paid accounts will support our development...",
      imageUrl: "src/assets/John_Constable_-_The_Hay_Wain_-1821-.jpg",
      slug: "https://blog.darklang.com/sponsor-darklang/",
    },
  ],
  px = () => n.jsx(gx, { posts: xx }),
  bx = () =>
    n.jsxs(n.Fragment, {
      children: [
        n.jsx(Qg, {}),
        n.jsx(Vg, {}),
        n.jsx(Pg, {}),
        n.jsx(ex, {}),
        n.jsx(tx, {}),
        n.jsx(ax, {}),
        n.jsx(cx, {}),
        n.jsx(ox, {}),
        n.jsx(Wg, {}),
        n.jsx(dx, {}),
        n.jsx(fx, {}),
        n.jsx(hx, {}),
        n.jsx(px, {}),
      ],
    }),
  Ph = "/assets/darklang-classic-DuICTlwE.png",
  vx = "/assets/dark-classic-toplevel-BHOMv1aL.png",
  yx = () =>
    n.jsx("div", {
      className: "min-h-screen py-16 bg-dark-gray",
      children: n.jsxs("div", {
        className:
          "max-w-7xl 2xl:max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center",
        children: [
          n.jsx("div", {
            className: "w-full flex justify-center my-12 2xl:my-18",
            children: n.jsx("img", {
              src: Ph,
              alt: "Darklang Classic",
              className: "max-w-full sm:max-w-2xl",
            }),
          }),
          n.jsxs("div", {
            className: "text-center mb-18 text-xl md:text-3xl xl:text-[28px]",
            children: [
              n.jsxs("div", {
                className: "mb-12",
                children: [
                  n.jsx("span", {
                    className: "font-semibold text-purple-dbg",
                    children: "Dark",
                  }),
                  n.jsxs("span", {
                    className: "text-white",
                    children: [
                      " ",
                      "is a new way of building serverless backends. Just code your backend, with no infra, framework or deployment nightmares. Build",
                      " ",
                    ],
                  }),
                  n.jsx("span", {
                    className: "text-classic-green",
                    children: "APIs",
                  }),
                  n.jsx("span", { className: "text-white", children: ", " }),
                  n.jsx("span", {
                    className: "text-classic-brown",
                    children: "CRUD",
                  }),
                  n.jsx("span", {
                    className: "text-white",
                    children: " apps, ",
                  }),
                  n.jsx("span", {
                    className: "text-classic-yellow",
                    children: "internal tools",
                  }),
                  n.jsx("span", { className: "text-white", children: " and " }),
                  n.jsx("span", {
                    className: "text-classic-blue",
                    children: "bots",
                  }),
                  n.jsx("span", {
                    className: "text-white",
                    children: " - whatever your backend needs.",
                  }),
                ],
              }),
              n.jsx("p", {
                className: "text-gray-300 text-base 2xl:text-lg mt-8",
                children:
                  "The classic version of darklang is still accessible but is currently in maintenance mode, with no ongoing development. Darklang-next is the next iteration of Dark, applicable to both the cloud runtime and to local scripts and CLIs",
              }),
            ],
          }),
          n.jsx("div", {
            className: "mx-auto mb-16",
            children: n.jsx("img", {
              src: vx,
              alt: "Darklang Editor Interface",
              className: "w-full rounded-lg shadow-2xl border border-gray-800",
            }),
          }),
          n.jsx("div", {
            className: "mb-16 w-full",
            children: n.jsxs("div", {
              className: "space-y-6",
              children: [
                n.jsxs("div", {
                  className: "bg-dark-black rounded-lg p-8 text-white",
                  children: [
                    n.jsxs("h3", {
                      className: "flex items-center text-xl font-semibold mb-4",
                      children: [
                        n.jsx("span", { children: "Internal Tools" }),
                        n.jsx("span", {
                          className: "mx-2 text-purple-dbg",
                          children: "&",
                        }),
                        n.jsx("span", { children: "Bots" }),
                      ],
                    }),
                    n.jsx("p", {
                      className: "text-gray-300 text-xl mb-4",
                      children:
                        "Dark is ideal for quickly building slackbots and automating internal tools. Receive webhooks live, call out to 3rd party APIs, store data, and schedule jobs - while building no infrastructure.",
                    }),
                    n.jsx("a", {
                      href: "https://docs.darklang.com/using-dark-with-slack",
                      className:
                        "inline-block text-blue-dbg hover:text-purple-dbg",
                      children: "Read more about using dark with Slack",
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className: "bg-dark-black rounded-lg p-8 text-white",
                  children: [
                    n.jsxs("h3", {
                      className: "flex items-center text-lg font-semibold mb-4",
                      children: [
                        n.jsx("span", { children: "REST APIs" }),
                        n.jsx("span", {
                          className: "text-purple-dbg mx-2",
                          children: "&",
                        }),
                        n.jsx("span", { children: "Webhooks" }),
                      ],
                    }),
                    n.jsx("p", {
                      className: "text-gray-300 text-lg",
                      children:
                        "Set up an API endpoint quickly enough to use it as a proof of concept during a call. Immediately see the data from a webhook to your endpoint. Call an external API using the HttpClient library and see responses within the editor, or use workers to do them in the background. Use the built-in package manager to make external API calls really easily, and contribute your own API integrations.",
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className: "bg-dark-black rounded-lg p-8",
                  children: [
                    n.jsxs("h3", {
                      className: "text-xl font-semibold mb-4",
                      children: [
                        n.jsx("span", {
                          className: "text-purple-dbg",
                          children: "CRUD",
                        }),
                        n.jsx("span", {
                          className: "text-white ml-2",
                          children: "apps",
                        }),
                      ],
                    }),
                    n.jsx("p", {
                      className: "text-gray-300 text-lg",
                      children:
                        "Get a working CRUD application in less than ten minutes by setting up a few API endpoints and a datastore. Build out the backend for a web or mobile app, whether a simple HTML form or an entire product.",
                    }),
                  ],
                }),
              ],
            }),
          }),
          n.jsxs("div", {
            className: "mb-20",
            children: [
              n.jsxs("h2", {
                className: "text-4xl mb-12 pl-0 text-white",
                children: [
                  n.jsx("span", { className: "text-white", children: "Any " }),
                  n.jsx("span", { children: "Backend" }),
                  n.jsx("span", {
                    className: "text-white",
                    children: " That Requires...",
                  }),
                ],
              }),
              n.jsxs("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12",
                children: [
                  n.jsx("div", {
                    className: "bg-dark-black p-6 rounded-lg",
                    children: n.jsxs("h3", {
                      className: "text-xl font-semibold",
                      children: [
                        n.jsx("span", {
                          className: "text-purple-dbg",
                          children: "API",
                        }),
                        n.jsx("span", {
                          className: "text-white",
                          children: " Endpoints",
                        }),
                      ],
                    }),
                  }),
                  n.jsx("div", {
                    className: "bg-dark-black p-6 rounded-lg",
                    children: n.jsxs("h3", {
                      className: "text-xl font-semibold",
                      children: [
                        n.jsx("span", {
                          className: "text-purple-dbg",
                          children: " Data",
                        }),
                        n.jsx("span", {
                          className: "text-white",
                          children: " Stores",
                        }),
                      ],
                    }),
                  }),
                  n.jsx("div", {
                    className: "bg-dark-black p-6 rounded-lg",
                    children: n.jsxs("h3", {
                      className: "text-xl font-semibold",
                      children: [
                        n.jsx("span", {
                          className: "text-purple-dbg",
                          children: "Background",
                        }),
                        n.jsx("span", {
                          className: "text-white",
                          children: " Workers",
                        }),
                      ],
                    }),
                  }),
                  n.jsx("div", {
                    className: "bg-dark-black p-6 rounded-lg",
                    children: n.jsxs("h3", {
                      className: "text-xl font-semibold",
                      children: [
                        n.jsx("span", {
                          className: "text-purple-dbg",
                          children: "Scheduled",
                        }),
                        n.jsx("span", {
                          className: "text-white",
                          children: " Jobs",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              n.jsx("p", {
                className: "text-gray-300 text-lg md:text-xl mb-16 px-0",
                children:
                  "Dark lets you build any backend that needs API endpoints, data stores, background workers, scheduled jobs, and calling HTTP APIs. You just write the code in Dark, and we'll manage the rest.",
              }),
              n.jsx("div", {
                className: "flex justify-center mb-20",
                children: n.jsx("a", {
                  href: "https://www.youtube.com/watch?v=orRn2kTtRXQ&t=38s",
                  target: "_blank",
                  className:
                    "flex justify-center items-center text-decoration-none",
                  children: n.jsxs("div", {
                    className: "flex justify-center items-center",
                    children: [
                      n.jsxs("button", {
                        className:
                          "bg-classic-purple text-white font-bold py-2 px-2 rounded-full inline-flex items-center justify-center relative",
                        children: [
                          n.jsx("span", {
                            className:
                              "absolute w-full h-full bg-classic-purple rounded-full opacity-75 animate-ping",
                          }),
                          n.jsx("svg", {
                            viewBox: "0 0 16 16",
                            className: "z-10 h-4 w-4",
                            fill: "currentColor",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: n.jsx("path", {
                              d: "M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z",
                            }),
                          }),
                        ],
                      }),
                      n.jsx("p", {
                        className: "mx-4 text-white text-lg",
                        children: "see it in action!",
                      }),
                    ],
                  }),
                }),
              }),
              n.jsxs("div", {
                className:
                  "bg-dark-black rounded-lg p-8 flex flex-col md:flex-row items-center justify-between mx-auto w-full max-w-4xl",
                children: [
                  n.jsx("h3", {
                    className: "text-xl font-semibold text-white mb-4 md:mb-0",
                    children: "Access Darklang-classic",
                  }),
                  n.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      n.jsx("a", {
                        href: "/signup",
                        className: "py-2 px-6 rounded-md text-white text-sm",
                        style: { backgroundColor: "#9380ff" },
                        children: "Sign up",
                      }),
                      n.jsx("span", {
                        className: "text-gray-400 text-sm",
                        children: "or",
                      }),
                      n.jsx("a", {
                        href: "https://login.darklang.com",
                        className: "py-2 px-6 rounded-md text-white text-sm",
                        target: "_blank",
                        children: "Log in",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  jx = () => {
    const [r, d] = T.useState([]),
      [f, u] = T.useState(!1),
      [h, m] = T.useState(!1),
      A = () => {
        d([]), u(!1);
      },
      j = S => {
        A(), d(S), u(!0);
      },
      v = () => {
        m(!0);
      },
      x = async S => {
        S.preventDefault();
        const B = S.currentTarget;
        if (!B.querySelector("#code-of-conduct").checked) {
          j(["Please agree to our code of conduct"]);
          return;
        }
        const q = B.querySelector("#name"),
          z = B.querySelector("#email"),
          J = B.querySelector("#username"),
          Q = {
            name: q.value,
            email: z.value.toLowerCase(),
            username: J.value,
          };
        try {
          const H = await fetch(
            "https://ops-adduser.builtwithdark.com/v3/create-account",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(Q),
            },
          );
          if (H.status === 200) B.reset(), v();
          else {
            const ae = await H.text();
            j([ae]);
          }
        } catch (H) {
          j(["An error occurred. Please try again later."]),
            console.error("Signup error:", H);
        }
      };
    return n.jsx("div", {
      className: "flex items-center justify-center py-20 px-4 bg-dark ",
      children: n.jsxs("div", {
        className: "w-full max-w-6xl mx-auto",
        children: [
          n.jsxs("div", {
            className: "text-center mb-20",
            children: [
              n.jsx("img", {
                src: Ph,
                alt: "Darklang Classic",
                className: "md:max-w-3xl mx-auto",
              }),
              n.jsxs("p", {
                className: "mt-20 text-white md:text-2xl",
                children: [
                  "We're currently focused on the ",
                  n.jsx("a", { children: "next version of Darklang" }),
                  ", but you can still try Darklang Classic!",
                ],
              }),
            ],
          }),
          n.jsxs("div", {
            className:
              "max-w-md bg-dark shadow-md rounded-lg p-8 border-2 border-purple-dbg mx-auto",
            children: [
              f &&
                n.jsx("div", {
                  id: "errors",
                  className:
                    "flex flex-col items-center justify-center mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded",
                  children: n.jsx("ul", {
                    id: "error-list",
                    children: r.map((S, B) => n.jsx("li", { children: S }, B)),
                  }),
                }),
              n.jsxs("div", {
                id: "success",
                className: h
                  ? "flex flex-col items-center justify-center"
                  : "hidden",
                children: [
                  n.jsx("h2", {
                    className: "text-xl text-green-500 mb-4",
                    children: "Successfully signed up!",
                  }),
                  n.jsx("p", {
                    className: "text-gray-200",
                    children:
                      "Thank you for signing up. Check your email for further instructions.",
                  }),
                ],
              }),
              !h &&
                n.jsxs("form", {
                  id: "sign-up-form",
                  className: "space-y-6",
                  onSubmit: x,
                  children: [
                    n.jsxs("div", {
                      children: [
                        n.jsx("label", {
                          htmlFor: "name",
                          className:
                            "block text-sm font-medium text-gray-200 mb-1",
                          children: "Name",
                        }),
                        n.jsx("input", {
                          id: "name",
                          name: "name",
                          type: "text",
                          required: !0,
                          className:
                            "text-white appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm placeholder-gray-100 focus:outline-none focus:ring-purple-lbg focus:border-purple-lbg",
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      children: [
                        n.jsx("label", {
                          htmlFor: "username",
                          className:
                            "block text-sm font-medium text-gray-200 mb-1",
                          children: "Username",
                        }),
                        n.jsx("input", {
                          id: "username",
                          name: "username",
                          type: "text",
                          required: !0,
                          className:
                            "text-white appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm placeholder-gray-100 focus:outline-none focus:ring-purple-lbg focus:border-purple-lbg",
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      children: [
                        n.jsx("label", {
                          htmlFor: "email",
                          className:
                            "block text-sm font-medium text-gray-200 mb-1",
                          children: "Email address",
                        }),
                        n.jsx("input", {
                          id: "email",
                          name: "email",
                          type: "email",
                          autoComplete: "email",
                          required: !0,
                          className:
                            " text-white appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-purple-lbg focus:border-purple-lbg",
                          placeholder: "your@email.com",
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className: "flex items-start my-10",
                      children: [
                        n.jsx("input", {
                          id: "code-of-conduct",
                          name: "code-of-conduct",
                          type: "checkbox",
                          required: !0,
                          className:
                            "h-4 w-4 text-purple-lbg focus:ring-purple-lbg border-gray-500 rounded",
                        }),
                        n.jsxs("label", {
                          htmlFor: "code-of-conduct",
                          className: "ml-2 block text-sm text-gray-100",
                          children: [
                            "I promise to abide by the",
                            " ",
                            n.jsxs("a", {
                              href: "https://darklang.com/code-of-conduct",
                              target: "_Blank",
                              className:
                                "font-medium text-purple-lbg hover:text-purple-secondary",
                              children: ["Code of Conduct", " "],
                            }),
                            " ",
                            "when using Dark services or participating in the Dark community.",
                          ],
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      children: n.jsx("button", {
                        type: "submit",
                        className:
                          "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-lbg hover:bg-purple-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-lbg",
                        children: "Create account",
                      }),
                    }),
                  ],
                }),
            ],
          }),
          n.jsxs("p", {
            className: "mt-8 text-center text-sm text-white",
            children: [
              "Already have an account?",
              " ",
              n.jsx(Re, {
                to: "https://login.darklang.com",
                className:
                  "font-medium text-purple-lbg hover:text-purple-secondary",
                target: "_blank",
                children: "Log in",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Nx = () =>
    n.jsxs("div", {
      className: "max-w-4xl mx-auto py-16 px-4",
      children: [
        n.jsx("h1", {
          className: "text-3xl font-bold mb-8 text-black-custom",
          children: "Darklang Roadmap",
        }),
        n.jsxs("div", {
          className: "prose max-w-none",
          children: [
            n.jsx("p", {
              className: "text-lg mb-8",
              children:
                "At Darklang, we're committed to building a powerful yet simple platform for backend development. Our roadmap outlines our vision for the future and the features we're working on.",
            }),
            n.jsxs("div", {
              className: "space-y-12 mt-8",
              children: [
                n.jsxs("div", {
                  className: "border-l-4 border-purple-lbg pl-6 relative",
                  children: [
                    n.jsx("div", {
                      className:
                        "absolute w-4 h-4 rounded-full bg-purple-lbg -left-[10px] top-0",
                    }),
                    n.jsx("h2", {
                      className: "text-2xl font-semibold mb-4",
                      children: "Q2 2025",
                    }),
                    n.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2 mb-6",
                      children: [
                        n.jsx("li", {
                          children:
                            "Enhanced debugging tools with time-travel capabilities",
                        }),
                        n.jsx("li", {
                          children: "Extended package management system",
                        }),
                        n.jsx("li", {
                          children:
                            "Performance optimizations for large-scale applications",
                        }),
                        n.jsx("li", { children: "New UI components library" }),
                      ],
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className: "border-l-4 border-blue-primary pl-6 relative",
                  children: [
                    n.jsx("div", {
                      className:
                        "absolute w-4 h-4 rounded-full bg-blue-primary -left-[10px] top-0",
                    }),
                    n.jsx("h2", {
                      className: "text-2xl font-semibold mb-4",
                      children: "Q3 2025",
                    }),
                    n.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2 mb-6",
                      children: [
                        n.jsx("li", {
                          children:
                            "Advanced deployment strategies (canary, blue-green)",
                        }),
                        n.jsx("li", {
                          children: "AI-assisted coding features",
                        }),
                        n.jsx("li", {
                          children: "Enhanced data visualization tools",
                        }),
                        n.jsx("li", {
                          children: "Expanded third-party service integrations",
                        }),
                      ],
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className: "border-l-4 border-purple-secondary pl-6 relative",
                  children: [
                    n.jsx("div", {
                      className:
                        "absolute w-4 h-4 rounded-full bg-purple-secondary -left-[10px] top-0",
                    }),
                    n.jsx("h2", {
                      className: "text-2xl font-semibold mb-4",
                      children: "Q4 2025",
                    }),
                    n.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2 mb-6",
                      children: [
                        n.jsx("li", {
                          children: "Multi-region deployment support",
                        }),
                        n.jsx("li", {
                          children:
                            "Advanced monitoring and observability tools",
                        }),
                        n.jsx("li", {
                          children:
                            "Expanded language features for complex applications",
                        }),
                        n.jsx("li", {
                          children:
                            "Large-scale enterprise features and support",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            n.jsxs("div", {
              className: "mt-12 p-6 bg-gray-50 rounded-lg",
              children: [
                n.jsx("h3", {
                  className: "text-xl font-semibold mb-4",
                  children: "Help Shape Our Future",
                }),
                n.jsx("p", {
                  className: "mb-4",
                  children:
                    "We believe in building in public and with our community. Have suggestions or feature requests? We'd love to hear from you!",
                }),
                n.jsx("button", {
                  className:
                    "px-5 py-2 bg-purple-lbg text-white rounded-md hover:bg-purple-secondary transition-colors",
                  children: "Submit Feedback",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Sx = "/assets/double-grid-CeO-NKhN.png",
  wx = "/assets/grid-C0yZgzuY.png",
  Ax = "/assets/logo-ascii-CRmfeuc-.png",
  Ex = "/assets/darklang-cli-ascii-B754__27.png",
  fr = ({ children: r, className: d = "" }) =>
    n.jsxs("div", {
      className: `bg-dark-black rounded-2xl wrap-break-word ${d}`,
      children: [
        n.jsx("div", {
          className: "px- py-2",
          children: n.jsxs("div", {
            className: "flex space-x-2 pl-5 pt-5",
            children: [
              n.jsx("div", { className: "w-3 h-3 rounded-full bg-purple-dbg" }),
              n.jsx("div", { className: "w-3 h-3 rounded-full bg-sand" }),
              n.jsx("div", { className: "w-3 h-3 rounded-full bg-olive" }),
            ],
          }),
        }),
        n.jsx("div", {
          className:
            "pl-10 pr-5 pt-4 pb-6 font-mono text-sm 2xl:text-base leading-6",
          children: r,
        }),
      ],
    }),
  em = ({ children: r, className: d = "" }) =>
    n.jsx("section", {
      className: `py-54 px-6 max-w-7xl mx-auto ${d}`,
      children: n.jsxs("div", {
        className:
          "relative w-full max-w-4xl mx-auto flex items-center justify-center py-12",
        children: [
          n.jsx("div", {
            className:
              "absolute top-0 -left-5 -right-5 md:-left-20 md:-right-20 h-[1px] bg-gradient-to-r from-transparent via-gray-300/70 to-transparent",
          }),
          n.jsx("div", {
            className:
              "absolute top-0 -left-5 -right-5 md:-left-20 md:-right-20 h-[2px] bg-gradient-to-r from-transparent via-gray-300/20 to-transparent blur-[1px] opacity-50",
          }),
          n.jsx("div", {
            className:
              "absolute bottom-0 -left-5 -right-5 md:-left-20 md:-right-20 h-[1px] bg-gradient-to-r from-transparent via-gray-300/70 to-transparent",
          }),
          n.jsx("div", {
            className:
              "absolute bottom-0 -left-5 -right-5 md:-left-20 md:-right-20 h-[2px] bg-gradient-to-r from-transparent via-gray-300/20 to-transparent blur-[1px] opacity-50",
          }),
          n.jsx("div", {
            className:
              "absolute left-0 -top-5 -bottom-5 md:-top-20 md:-bottom-20 w-[1px] bg-gradient-to-b from-transparent via-gray-300/70 to-transparent",
          }),
          n.jsx("div", {
            className:
              "absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gray-300/20 to-transparent blur-[1px] opacity-50",
          }),
          n.jsx("div", {
            className:
              "absolute right-0 -top-5 -bottom-5 md:-top-20 md:-bottom-20 w-[1px] bg-gradient-to-b from-transparent via-gray-300/70 to-transparent",
          }),
          n.jsx("div", {
            className:
              "absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gray-300/20 to-transparent blur-[1px] opacity-50",
          }),
          n.jsx("div", {
            className: "relative z-10 w-full py-10 px-8",
            children: r,
          }),
        ],
      }),
    }),
  Cx = () =>
    n.jsxs("div", {
      className: "bg-dark text-white font-code",
      children: [
        n.jsx("section", {
          className: "py-18 px-6 max-w-7xl mx-auto text-center",
          children: n.jsx("div", {
            className: "md:my-20",
            children: n.jsx("img", {
              src: Ex,
              alt: "Darklang CLI ASCII",
              className: "mx-auto",
            }),
          }),
        }),
        n.jsx("section", {
          className: "py-12 pl-6 pr-8 max-w-7xl 2xl:max-w-[100rem] mx-auto",
          children: n.jsxs("div", {
            className:
              "flex flex-col lg:flex-row items-center justify-between gap-8",
            children: [
              n.jsxs("div", {
                className: "md:w-2/3",
                children: [
                  n.jsx("div", {
                    className:
                      "text-lg md:text-2xl font-medium text-purple-dbg mb-4",
                    children: "$ darklang platform |",
                  }),
                  n.jsx("h2", {
                    className: "md:text-xl mb-12 mr-10",
                    children:
                      "Darklang's CLI is fully cross-platform, seamlessly running on macOS, Linux, and Windows for a consistent development experience everywhere",
                  }),
                  n.jsx(ga, {
                    variant: "primary",
                    size: "lg",
                    className:
                      "bg-blue-dbg hover:bg-purple-dbg font-semibold transition duration-200 tracking-widest px-8",
                    onClick: () => (window.location.href = "#"),
                    children: ">_ Try It Now!",
                  }),
                ],
              }),
              n.jsx("div", {
                className:
                  "w-full md:w-[700px] md:absolute md:-right-30 2xl:right-30",
                children: n.jsx("img", {
                  src: Ih,
                  alt: "Darklang CLI Terminal",
                  className: "rounded-lg shadow-lg 2xl:w-7xl",
                }),
              }),
            ],
          }),
        }),
        n.jsx("section", {
          className: "py-32 px-6 max-w-7xl 2xl:max-w-[100rem] mx-auto",
          children: n.jsx("div", {
            className: "text-purple-dbg mb-6 text-lg md:text-2xl font-medium",
            children: "$ darklang get started |",
          }),
        }),
        n.jsxs("section", {
          className: "py-16 px-6 max-w-7xl 2xl:max-w-[100rem] mx-auto",
          children: [
            n.jsx("div", {
              className: "text-purple-dbg mb-6 text-lg md:text-2xl font-medium",
              children: "$ darklang solving bash complexities |",
            }),
            n.jsxs("div", {
              className: "space-y-8 flex flex-row",
              children: [
                n.jsxs("div", {
                  className: "md:w-3/4 text-white md:text-lg",
                  children: [
                    n.jsx("p", {
                      className: "leading-relaxed",
                      children:
                        "Darklang CLI is a better replacement for traditional file-based scripts, such as in bash, python, lua, js, etc.",
                    }),
                    n.jsx("p", {
                      className: "leading-relaxed",
                      children:
                        "bash is super hard to read, using weird variable names. While lots of us can read and write bash scripts, since there are few experts, it's not a great language.",
                    }),
                    n.jsxs("ul", {
                      className: "space-y-8 mt-8 text-white",
                      children: [
                        n.jsxs("li", {
                          className: "flex",
                          children: [
                            n.jsx("span", {
                              className: " md:text-xl mr-4",
                              children: "-",
                            }),
                            n.jsx("span", {
                              className: "leading-relaxed",
                              children:
                                "lack of a package manager means the generated code has to use cli tools, which each have different interfaces, which may not be installed, and are often opaque",
                            }),
                          ],
                        }),
                        n.jsxs("li", {
                          className: "flex",
                          children: [
                            n.jsx("span", { className: "mr-4", children: "-" }),
                            n.jsx("span", {
                              className: "leading-relaxed",
                              children:
                                "different versions of the tools might be installed with subtly different behaviour (esp gnu vs bsd)",
                            }),
                          ],
                        }),
                        n.jsxs("li", {
                          className: "flex",
                          children: [
                            n.jsx("span", { className: "mr-4", children: "-" }),
                            n.jsx("span", {
                              className: "leading-relaxed",
                              children:
                                "lack of real types and functions (which are a mess in bash) contributes to these problems",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                n.jsx("div", {
                  className:
                    "hidden md:block md:w-1/4 md:absolute md:-right-20 2xl:-right-80",
                  children: n.jsx("img", {
                    src: Sx,
                    alt: "grid",
                    className: "w-2xs 2xl:w-xs",
                  }),
                }),
              ],
            }),
          ],
        }),
        n.jsxs("section", {
          className: "py-16 px-6  max-w-7xl 2xl:max-w-[100rem] mx-auto",
          children: [
            n.jsx("div", {
              className:
                "text-purple-dbg mb-6 text-lg md:text-2xl font-semibold",
              children: "$ darklang for your scripts |",
            }),
            n.jsxs("div", {
              className: "relative",
              children: [
                n.jsx("img", {
                  src: wx,
                  alt: "grid",
                  className:
                    "hidden md:block w-2xs 2xl:w-sm absolute -right-40 -bottom-45 2xl:-right-120",
                }),
                n.jsxs("div", {
                  className: "space-y-8",
                  children: [
                    n.jsx("p", {
                      className: "text-white text-xl leading-6",
                      children:
                        "Darklang is used as a better language for scripts:",
                    }),
                    n.jsxs("ul", {
                      className: "space-y-6 mt-6 ml-4",
                      children: [
                        n.jsxs("li", {
                          className: "flex items-start",
                          children: [
                            n.jsx("span", {
                              className: "text-blue-dbg mr-3",
                              children: "›",
                            }),
                            n.jsx("span", {
                              className: "text-white text-xl leading-6",
                              children: "Static types help ensure correctness",
                            }),
                          ],
                        }),
                        n.jsxs("li", {
                          className: "flex items-start",
                          children: [
                            n.jsx("span", {
                              className: "text-blue-dbg mr-3",
                              children: "›",
                            }),
                            n.jsx("span", {
                              className: "text-white text-xl leading-6",
                              children:
                                "Immutable values make code easier to understand and verify",
                            }),
                          ],
                        }),
                        n.jsxs("li", {
                          className: "flex items-start",
                          children: [
                            n.jsx("span", {
                              className: "text-blue-dbg mr-3",
                              children: "›",
                            }),
                            n.jsx("span", {
                              className: "text-white text-xl leading-6",
                              children: "Built-in package manager",
                            }),
                          ],
                        }),
                        n.jsxs("li", {
                          className: "flex items-start ml-8",
                          children: [
                            n.jsx("span", {
                              className: "text-mint mr-3",
                              children: "✓",
                            }),
                            n.jsx("span", {
                              className: "text-white text-xl leading-6",
                              children: "without an npm install step",
                            }),
                          ],
                        }),
                        n.jsxs("li", {
                          className: "flex items-start ml-8",
                          children: [
                            n.jsx("span", {
                              className: "text-mint mr-3",
                              children: "✓",
                            }),
                            n.jsx("span", {
                              className: "text-white text-base leading-6",
                              children:
                                "versioned immutable functions and packages",
                            }),
                          ],
                        }),
                        n.jsxs("li", {
                          className: "flex items-start",
                          children: [
                            n.jsx("span", {
                              className: "text-blue-dbg mr-3",
                              children: "›",
                            }),
                            n.jsx("span", {
                              className: "text-white text-xl leading-6",
                              children:
                                "Easy to take a script and move it to the cloud",
                            }),
                          ],
                        }),
                        n.jsxs("li", {
                          className: "flex items-start",
                          children: [
                            n.jsx("span", {
                              className: "text-blue-dbg mr-3",
                              children: "›",
                            }),
                            n.jsx("span", {
                              className: "text-white text-xl leading-6",
                              children: "Easy to use traces",
                            }),
                          ],
                        }),
                        n.jsxs("li", {
                          className: "flex items-start",
                          children: [
                            n.jsx("span", {
                              className: "text-blue-dbg mr-3",
                              children: "›",
                            }),
                            n.jsx("span", {
                              className: "text-white text-xl leading-6",
                              children:
                                "Easy to test, and be sure it's working",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        n.jsxs("section", {
          className:
            "py-16 px-6  max-w-7xl 2xl:max-w-[100rem] mx-auto relative",
          children: [
            n.jsx("div", {
              className:
                "text-purple-dbg mb-10 text-lg md:text-2xl font-semibold",
              children: "$ darklang examples |",
            }),
            n.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-8 z-20",
              children: [
                n.jsxs(fr, {
                  className: "z-2",
                  children: [
                    n.jsxs("div", {
                      className: "md:flex",
                      children: [
                        n.jsx("span", {
                          className: "text-white mr-2",
                          children: "$",
                        }),
                        n.jsx("span", {
                          className: "text-blue-dbg mr-2",
                          children: "curl",
                        }),
                        n.jsx("span", {
                          className: "text-white",
                          children: "https://darklang.com/download",
                        }),
                        n.jsx("span", {
                          className: "text-gray-500 mx-2",
                          children: "|",
                        }),
                        n.jsx("span", {
                          className: "text-purple-lbg",
                          children: "bash",
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className: "mt-4 text-white",
                      children: [
                        "Darklang installed in",
                        " ",
                        n.jsx("span", {
                          className: "text-gray-400",
                          children: "~/.darklang/bin/darklang",
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className: "mt-2 md:flex",
                      children: [
                        n.jsx("span", {
                          className: "text-white mr-2",
                          children: "Add to",
                        }),
                        n.jsx("span", {
                          className: "text-purple-dbg",
                          children: "PATH",
                        }),
                        n.jsx("span", {
                          className: "text-white mx-2",
                          children: "via .bashrc",
                        }),
                        n.jsx("span", {
                          className: "text-gray-400 mx-2",
                          children: "[y, n, ?]:",
                        }),
                        n.jsx("span", {
                          className: "text-white",
                          children: "y",
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className: "mt-2 flex",
                      children: [
                        n.jsx("span", {
                          className: "text-mint mr-2",
                          children: "✓",
                        }),
                        n.jsx("span", {
                          className: "text-white",
                          children: "Added to .bashrc.",
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      className: "mt-4 text-white",
                      children: "Next you can:",
                    }),
                    n.jsx("p", {
                      className: "text-blue-300 mr-2 my-3",
                      children: "# Try the tutorial",
                    }),
                    n.jsx("p", {
                      className: "text-white mr-2",
                      children: "darklang tutorial",
                    }),
                    n.jsx("p", {
                      className: "text-blue-300 mr-2 my-3",
                      children:
                        "# Run some code from the package manager darklang",
                    }),
                    n.jsx("p", {
                      className: "text-white mr-2 my-3",
                      children: "@paul.fizzbuzz 3",
                    }),
                    n.jsx("p", {
                      className: "text-blue-300 mr-2 my-3",
                      children: "# Generate some code",
                    }),
                    n.jsxs("p", {
                      className: "text-white mr-2",
                      children: [
                        "darklang prompt",
                        " ",
                        n.jsx("span", {
                          className: "text-gray-400",
                          children:
                            '"Find ts scripts with more than 600 lines which use the commonjs format"',
                        }),
                      ],
                    }),
                    n.jsx("p", {
                      className: "text-blue-300 mr-2 my-3",
                      children: "# See available command line options",
                    }),
                    n.jsx("p", {
                      className: "text-white mr-2 my-3",
                      children: "darklang help",
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className: "space-y-8",
                  children: [
                    n.jsxs(fr, {
                      children: [
                        n.jsxs("div", {
                          className: "flex",
                          children: [
                            n.jsx("span", {
                              className: "text-white mr-2",
                              children: "$",
                            }),
                            n.jsx("span", {
                              className: "text-purple-dbg mr-2",
                              children: "darklang",
                            }),
                            n.jsx("span", {
                              className: "text-white",
                              children: "@paul.fizzbuzz 3",
                            }),
                          ],
                        }),
                        n.jsx("div", {
                          className: "mt-2 text-white",
                          children: "1",
                        }),
                        n.jsx("div", {
                          className: "text-white",
                          children: "2",
                        }),
                        n.jsx("div", {
                          className: "text-white",
                          children: "Fizz",
                        }),
                      ],
                    }),
                    n.jsxs(fr, {
                      children: [
                        n.jsxs("div", {
                          className: "md:flex",
                          children: [
                            n.jsx("span", {
                              className: "text-white mr-2",
                              children: "$",
                            }),
                            n.jsx("span", {
                              className: "text-purple-dbg mr-2",
                              children: "darklang",
                            }),
                            n.jsx("span", {
                              className: "text-white",
                              children: "deploy @paul.fizzbuzz /fizzbuzz",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "text-gray-400 mt-2",
                          children: [
                            " ",
                            n.jsx("span", {
                              className: "text-white",
                              children: "Deployed to",
                            }),
                            " ",
                            "https://furry-squirrel-3562.darklang.io/fizzbuzz",
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex",
                          children: [
                            n.jsx("span", {
                              className: "text-white mr-2",
                              children: "in",
                            }),
                            n.jsx("span", {
                              className: "text-olive",
                              children: "0.135s",
                            }),
                          ],
                        }),
                      ],
                    }),
                    n.jsxs(fr, {
                      children: [
                        n.jsxs("div", {
                          className: "md:flex",
                          children: [
                            n.jsx("span", {
                              className: "text-white mr-2",
                              children: "$ curl -sSO",
                            }),
                            n.jsx("span", {
                              className: "text-gray-400",
                              children:
                                "https://furry-squirrel-3562.darklang.io/fizzbuzz/3",
                            }),
                          ],
                        }),
                        n.jsx("div", {
                          className: "mt-2 text-white",
                          children: "1",
                        }),
                        n.jsx("div", {
                          className: "text-white",
                          children: "2",
                        }),
                        n.jsx("div", {
                          className: "text-white",
                          children: "Fizz",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            n.jsx("img", {
              src: Ax,
              alt: "logo-ascii",
              className:
                "hidden md:block absolute -left-40 w-xs z-1 -bottom-10",
            }),
          ],
        }),
        n.jsxs("section", {
          className: "py-16 px-6 max-w-7xl 2xl:max-w-[100rem] mx-auto",
          children: [
            n.jsx("div", {
              className:
                "text-purple-dbg mb-10 text-lg md:text-2xl font-semibold",
              children: "$ darklang commands |",
            }),
            n.jsxs("div", {
              className: "space-y-6 md:ml-6 md:text-lg 2xl:text-xl",
              children: [
                n.jsxs("div", {
                  className:
                    "flex flex-col space-y-2 md:grid md:grid-cols-12 md:gap-4 md:space-y-0 md:items-start",
                  children: [
                    n.jsxs("div", {
                      className: "md:col-span-3",
                      children: [
                        "dark ",
                        n.jsx("span", {
                          className: "text-blue-dbg",
                          children: "help",
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      className: "text-white md:col-span-9",
                      children: "Show this help message and exit",
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className:
                    "flex flex-col space-y-2 md:grid md:grid-cols-12 md:gap-4 md:space-y-0 md:items-start",
                  children: [
                    n.jsxs("div", {
                      className: "md:col-span-3",
                      children: [
                        "dark ",
                        n.jsx("span", {
                          className: "text-tan",
                          children: "[function name]",
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      className: "text-white md:col-span-9",
                      children:
                        "Run a function in the package manager i.e. `dark @Darklang.Stdlib.Bool.not true`",
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className:
                    "flex flex-col space-y-2 md:grid md:grid-cols-12 md:gap-4 md:space-y-0 md:items-start",
                  children: [
                    n.jsxs("div", {
                      className: "md:col-span-3",
                      children: [
                        "dark ",
                        n.jsx("span", {
                          className: "text-mint",
                          children: "run [script path]",
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      className: "text-white md:col-span-9",
                      children:
                        "Run a .dark script i.e. `dark ./my-script.dark`",
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className:
                    "flex flex-col space-y-2 md:grid md:grid-cols-12 md:gap-4 md:space-y-0 md:items-start",
                  children: [
                    n.jsxs("div", {
                      className: "md:col-span-3",
                      children: [
                        "dark ",
                        n.jsx("span", {
                          className: "text-purple-dbg",
                          children: "install",
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      className: "text-white md:col-span-9",
                      children:
                        "Install the darklang CLI so it's available globally in your terminal",
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className:
                    "flex flex-col space-y-2 md:grid md:grid-cols-12 md:gap-4 md:space-y-0 md:items-start",
                  children: [
                    n.jsxs("div", {
                      className: "md:col-span-3",
                      children: [
                        "dark ",
                        n.jsx("span", {
                          className: "text-sand",
                          children: "http",
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      className: "text-white md:col-span-9",
                      children: "Lists both local and cloud handlers",
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className:
                    "flex flex-col space-y-2 md:grid md:grid-cols-12 md:gap-4 md:space-y-0 md:items-start",
                  children: [
                    n.jsxs("div", {
                      className: "md:col-span-3",
                      children: [
                        "dark ",
                        n.jsx("span", {
                          className: "text-olive",
                          children: "dbs",
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      className: "text-white md:col-span-9",
                      children: "Lists both local and cloud dbs",
                    }),
                  ],
                }),
              ],
            }),
            n.jsx("div", {
              className: "flex justify-end mt-8",
              children: n.jsx(ga, {
                variant: "outline",
                size: "lg",
                className:
                  "hover:bg-purple-dbg text-white py-3 px-6 rounded-md border border-blue-dbg hover:border-purple-dbg transition duration-200 ml-4",
                onClick: () => (window.location.href = "#"),
                children: ">_ See Full List",
              }),
            }),
          ],
        }),
        n.jsx(em, {
          children: n.jsxs("div", {
            className: "text-center",
            children: [
              n.jsx("h1", {
                className: "text-lg md:text-2xl 2xl:text-4xl font-bold my-8",
                children: "Getting Started with Darklang CLI",
              }),
              n.jsx("p", {
                className: "text-gray-300 md:text-lg mb-12",
                children:
                  "Write your first script in Darklang today and have it running in minutes",
              }),
              n.jsx(ga, {
                variant: "primary",
                size: "lg",
                className:
                  "bg-blue-dbg hover:bg-purple-dbg rounded-md transition duration-200 tracking-widest",
                onClick: () => (window.location.href = "#"),
                children: ">_ Try It Now!",
              }),
            ],
          }),
        }),
      ],
    }),
  Rx =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZYAAAFvCAYAAABpZe1HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAtpSURBVHgB7dzBilvXGcDx78ojaHd6hPEDFALSQouCFQLNxiRdmGz9CMZP4PGm65lVt/YuCy+a4lUX8RQM0SKCKel+5gladRUHYd0euRaUkkDSfNLNOfP7gTjKbPJ9ItH/XkueLhoxm80W5VjE4Vy+PxdRn8v35yLqc/n+XERl+r6/6rpuHWY/qt3so9Hoppy/j8rUPvtqtfrT7vlJtGNRFnsSh3Nv/++J+ph9GFflv8kq35yj8tm32+1NOat7c47KZ//ggw8ur66u1l004tB3LPtolau4p1EZsw+jzP6oHBOzH9d+9vK4eH/XVY0WZh+Px3ebCcuhTafTfneWW73qXjOzD6PMfl2OU7Mf13723Rvccrm8iYq0MvsoACCRsACQSlgASCUsAKQSFgBSCQsAqYQFgFTCAkAqYQEglbAAkEpYAEglLACkEhYAUgkLAKmEBYBUwgJAKmEBIJWwAJBKWABIJSwApBIWAFIJCwCphAWAVMICQCphASCVsACQSlgASCUsAKQSFgBSCQsAqYQFgFTCAkAqYQEglbAAkEpYAEglLACkEhYAUgkLAKmEBYBUwgJAKmEBIJWwAJBKWABIJSwApBIWAFIJCwCpumjEbDZblGMRB9L3/ZPd2XXd06iM2YdRZn9UjonZj2s/e3lclPnXUZEWZh+Px3dbCsvZ/k0IgOPbRWW5XN6cRDsuS+HjUFz1D8MdyzDcsQyj9tk3m831fD5v547l0KbTab87V6tVda+Z2YdRZr8ux6nZj2s/+/7qOSrSyuw+vAcglbAAkEpYAEglLACkEhYAUgkLAKmEBYBUwgJAKmEBIJWwAJBKWABIJSwApBIWAFIJCwCphAWAVMICQCphASCVsACQSlgASCUsAKQSFgBSCQsAqYQFgFTCAkAqYQEglbAAkEpYAEglLACkEhYAUgkLAKmEBYBUwgJAKmEBIJWwAJBKWABIJSwApBIWAFIJCwCphAWAVMICQCphASCVsACQSlgASCUsAKQSFgBSCQsAqbpoxGw2W5RjEQfS9/2T3dl13dOojNmHUWZ/VI6J2Y9rP3t5XJT511GRFmYfj8d3WwrL2f5NCIDj20VluVzenEQ7Lkvh41Bc9Q/DHcsw3LEMo/bZN5vN9Xw+b+eO5dCm02m/O1erVXWvmdmHUWa/Lsep2Y9rP/v+6jkq0srsPrwHIJWwAJBKWABIJSwApBIWAFIJCwCphAWAVMICQCphASCVsACQSlgASCUsAKQSFgBSCQsAqYQFgFTCAkAqYQEglbAAkEpYAEglLACkEhYAUgkLAKmEBYBUwgJAKmEBIJWwAJBKWABIJSwApBIWAFIJCwCphAWAVMICQCphASCVsACQSlgASCUsAKQSFgBSCQsAqYQFgFTCAkAqYQEglbAAkEpYAEglLACkEhYAUgkLAKm6aMRsNluUYxEH0vf9k93Zdd3TqIzZh1Fmf1SOidmPaz97eVyU+ddRkRZmH4/Hd7sXL189jG2clx+sYzQ6e3D/3vOoUAnL2f5N6DcfzOKjjz+N7958G6//+pf45urrqJ2d6tDiTvBj7aKyXC5vTuJtnPXdu0JOYrvdBabKsBSXpfDvnvz23u+e/OpXv47dY/c/+d//tvrZV11DXzn/nJ1+qVf9P2an2u5Y/nenXVjcsRyXO5Zh7GbfbDbX8/m83LH8+dU/+/8sEuW8+eyTD+9G5Q6x03Q67XfnarUa5I8Pf85OQ8/+Q37MTr/U2X/If+/0r/U/4o8Xf6hm9v9WXvfrcpzWPPv+6jkq0srso23E476Pm/KD9Z2I6q5Ovo+d6tD6Tl+9/rKqK07IclKuEp+V81k0xE51aH2n91dwk4BbxteNAUglLACkEhYAUgkLAKmEBYBUwgJAKmEBIJWwAJBKWABIJSwApBIWAFIJCwCphAWAVMICQCphASCVsACQSlgASCUsAKQSFgBSCQsAqYQFgFTCAkAqYQEglbAAkEpYAEglLACkEhYAUgkLAKmEBYBUwgJAKmEBIJWwAJBKWABIJSwApBIWAFIJCwCphAWAVMICQCphASCVsACQSlgASCUsAKQSFgBSCQsAqbpoxGw2W5RjEQfS9/2T3dl13dOojNmHUWZ/VI6J2Y9rP3t5XJT511GRFmYfj8d3WwrL2f5NCIDj20VluVzenEQ7Lkvh41Bc9Q/DHcsw3LEMo/bZN5vN9Xw+b+eO5dCm02m/O1erVXWvmdmHUWa/Lsep2Y9rP/v+6jkq0srsJy9evnoY2zgvP1jHaHT24P6951E5O9Wh9Z1efvH56TdXXwfcNqN4G2flknBSHqf9dnseLbBTHRrf6aOPPw24jUbRvfvzvHf63ZVjC+xUh8Z3+u7NtwG30Wgb8bjv46Y8X9+JqO6Duu9jpzq0vtNXr79sI5bwE5189smHz8r5LBpipzq0vtP7DzMnAbeMv3kPQCphASCVsACQSlgASCUsAKQSFgBSCQsAqYQFgFTCAkAqYQEglbAAkEpYAEglLACkEhYAUgkLAKmEBYBUwgJAKmEBIJWwAJBKWABIJSwApBIWAFIJCwCphAWAVMICQCphASCVsACQSlgASCUsAKQSFgBSCQsAqYQFgFTCAkAqYQEglbAAkEpYAEglLACkEhYAUgkLAKmEBYBUwgJAqi4aMZvNFuVYxIH0ff9kd3Zd9zQqY/ZhlNkflWNi9uPaz14eF2X+dVSkhdnH4/HdlsJytn8TAuD4dlFZLpc3J9GOy1L4OBRX/cNwxzIMdyzDqH32zWZzPZ/P27ljObTpdNrvztVqVd1rZvZhlNmvy3Fq9uPaz76/eo6KtDK7D+8BSCUsAKQSFgBSnbx4+ephbOO8PF/HaHT24P6951E5O9Wh9Z1efvH56TdXXwfcNqN4G2fl09FJeZz22+15tMBOdWh8p48+/jTgNhpF9+6rbe/0uyvHFtipDo3v9N2bbwNuo9E24nHfx015vr4TUd131r+PnerQ+k5fvf6yjVjCT3Ty2ScfPivns2iInerQ+k7vv9c/CbhlfCsMgFTCAkAqYQEglbAAkEpYAEglLACkEhYAUgkLAKmEBYBUwgJAKmEBIJWwAJBKWABIJSwApBIWAFIJCwCphAWAVMICQCphASCVsACQSlgASCUsAKQSFgBSCQsAqYQFgFTCAkAqYQEglbAAkEpYAEglLACkEhYAUgkLAKmEBYBUwgJAKmEBIJWwAJBKWABIJSwApOqiEbPZbFGORRxI3/dPdmfXdU+jMmYfRpn9UTkmZj+u/ezlcVHmX0dFWph9PB7fbSksZ/s3IQCObxeV5XJ5cxLtuCyFj0Nx1T8MdyzDcMcyjNpn32w21/P5vJ07lkObTqf97lytVtW9ZmYfRpn9uhynZj+u/ez7q+eoSCuz+/AegFTCAkAqYQEglbAAkEpYAEglLACkOnnx8tXD2MZ5eb6O0ejswf17z6NydqpD6zu9/OLz02+uvg64bUbxNs76iEl5nPbb7Xm0wE51aHynjz7+NOA2GkX37m95vtPvrhxbYKc6NL7Td2++DbiNRtuIx30fN+X5+k5Edb++4fvYqQ6t7/TV6y/biCX8RCefffLhs3I+i4bYqQ6t7/T+V1xMAm4Z3woDIJWwAJBKWABIJSwApBIWAFIJCwCphAWAVMICQCphASCVsACQSlgASCUsAKQ6CX6Uruuq/e27Zh9Gmf0iKv0llC3M/ubNm+p+u7TZAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP5v3YuXrx7GNs7L83WMRmcP7t97HpWzUx3sBG0axds46yMm5XHab7fn0QI71cFO0KRRdDHZ/0O/u8pqgZ3qYCdo0mgb8bjv46Y8X9+JeBoNsFMd7ARt+jdw6rjDTfgl8AAAAABJRU5ErkJggg==",
  Tx = "/assets/darklang-logo-framed-DFHQrxf3.png",
  kx = {
    keyword: "#C586C0",
    type: "#4FC1FF",
    string: "#CE9178",
    punctuation: "#CCCCCC",
    bracket: "#D4D4D4",
    comment: "#6A9955",
    default: "#D4D4D4",
  },
  Dx = [
    "let",
    "const",
    "function",
    "return",
    "if",
    "else",
    "import",
    "export",
    "from",
    "class",
    "interface",
    "type",
    "module",
    "for",
    "while",
    "of",
    "in",
    "=>",
    "match",
    "with",
    "fun",
  ],
  _x = [
    "Stdlib",
    "List",
    "Int64",
    "Builtin",
    "printLine",
    "helloWorld",
    "Result",
    "String",
    "Option",
    "Some",
    "None",
  ],
  Vi = ({
    code: r,
    showCompletion: d = !1,
    showHover: f = !1,
    showDiagnostics: u = !1,
    showGoToDef: h = !1,
  }) => {
    const m = r.split(`
`),
      A = Array.from({ length: Math.max(7, m.length) }, (j, v) => v + 1);
    return n.jsxs("div", {
      className:
        "rounded-md overflow-hidden bg-[#1A1A1A] border border-gray-800 relative",
      children: [
        n.jsx("div", {
          className:
            "flex items-center px-3 py-2 bg-[#252525] border-b border-gray-800",
          children: n.jsxs("div", {
            className: "flex space-x-1.5",
            children: [
              n.jsx("div", {
                className: "w-2.5 h-2.5 rounded-full bg-[#FF5F56]",
              }),
              n.jsx("div", {
                className: "w-2.5 h-2.5 rounded-full bg-[#FFBD2E]",
              }),
              n.jsx("div", {
                className: "w-2.5 h-2.5 rounded-full bg-[#27C93F]",
              }),
            ],
          }),
        }),
        n.jsxs("div", {
          className: "p-4 font-mono text-sm overflow-x-auto relative",
          children: [
            n.jsxs("div", {
              className: "flex",
              children: [
                n.jsx("div", {
                  className: "pr-4 text-right text-gray-500 select-none",
                  children: A.map(j =>
                    n.jsx("div", { className: "h-6", children: j }, j),
                  ),
                }),
                n.jsxs("div", {
                  className: "text-white flex-grow",
                  children: [
                    m.map((j, v) =>
                      n.jsx(
                        "div",
                        {
                          className: "h-6 overflow-hidden",
                          children: Ox(j).map((x, S) =>
                            n.jsx(
                              "span",
                              {
                                style: { color: kx[x.type] },
                                children: x.text,
                              },
                              S,
                            ),
                          ),
                        },
                        v,
                      ),
                    ),
                    Mx(Math.max(0, 7 - m.length)),
                  ],
                }),
              ],
            }),
            d &&
              n.jsx("div", {
                className:
                  "absolute left-20 top-9 w-48 bg-[#252525] border border-gray-700 shadow-lg rounded-md overflow-hidden z-20",
                children: n.jsxs("ul", {
                  className: "py-1",
                  children: [
                    n.jsx("li", {
                      className: "px-2 py-1 text-xs bg-blue-600 text-white",
                      children: n.jsx("div", {
                        className: "flex items-start",
                        children: n.jsx("span", {
                          className: "text-white font-bold block",
                          children: "empty",
                        }),
                      }),
                    }),
                    n.jsx("li", {
                      className:
                        "px-2 py-1 text-xs hover:bg-gray-700 cursor-pointer",
                      children: n.jsx("div", {
                        className: "flex items-start",
                        children: n.jsx("span", {
                          className: "text-white font-bold block",
                          children: "toArray",
                        }),
                      }),
                    }),
                    n.jsx("li", {
                      className:
                        "px-2 py-1 text-xs hover:bg-gray-700 cursor-pointer",
                      children: n.jsx("div", {
                        className: "flex items-start",
                        children: n.jsx("span", {
                          className: "text-white font-bold block",
                          children: "map",
                        }),
                      }),
                    }),
                    n.jsx("li", {
                      className:
                        "px-2 py-1 text-xs hover:bg-gray-700 cursor-pointer",
                      children: n.jsx("div", {
                        className: "flex items-start",
                        children: n.jsx("span", {
                          className: "text-white font-bold block",
                          children: "filter",
                        }),
                      }),
                    }),
                    n.jsx("li", {
                      className:
                        "px-2 py-1 text-xs hover:bg-gray-700 cursor-pointer",
                      children: n.jsx("div", {
                        className: "flex items-start",
                        children: n.jsx("span", {
                          className: "text-white font-bold block",
                          children: "length",
                        }),
                      }),
                    }),
                    n.jsx("li", {
                      className:
                        "px-2 py-1 text-xs hover:bg-gray-700 cursor-pointer",
                      children: n.jsx("div", {
                        className: "flex items-start",
                        children: n.jsx("span", {
                          className: "text-white font-bold block",
                          children: "forEach",
                        }),
                      }),
                    }),
                    n.jsx("li", {
                      className:
                        "px-2 py-1 text-xs hover:bg-gray-700 cursor-pointer",
                      children: n.jsx("div", {
                        className: "flex items-start",
                        children: n.jsx("span", {
                          className: "text-white font-bold block",
                          children: "foldr",
                        }),
                      }),
                    }),
                    n.jsx("li", {
                      className:
                        "px-2 py-1 text-xs hover:bg-gray-700 cursor-pointer",
                      children: n.jsx("div", {
                        className: "flex items-start",
                        children: n.jsx("span", {
                          className: "text-white font-bold block",
                          children: "foldl",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            f &&
              n.jsx("div", {
                className:
                  "absolute left-28 top-9 w-64 bg-[#252525] border border-gray-700 shadow-lg rounded-md p-2 text-xs z-20",
                children: n.jsxs("div", {
                  className: "text-white",
                  children: [
                    n.jsx("div", {
                      className: "font-bold mb-1",
                      children: "List.empty",
                    }),
                    n.jsx("div", {
                      className: "text-gray-300",
                      children: "Create an empty list of any type",
                    }),
                    n.jsx("div", {
                      className: "mt-1 text-blue-300",
                      children: "a' list",
                    }),
                  ],
                }),
              }),
            u &&
              n.jsxs("div", {
                className: "absolute left-24 top-8 right-4",
                children: [
                  n.jsx("div", { className: "border-b-2 border-red-500" }),
                  n.jsxs("div", {
                    className:
                      "absolute top-4 left-0 w-64 bg-[#252525] border border-red-500 shadow-lg rounded-md p-2 text-xs z-20",
                    children: [
                      n.jsx("div", {
                        className: "text-red-500 font-bold",
                        children: "Error",
                      }),
                      n.jsx("div", {
                        className: "text-white",
                        children:
                          "Cannot use List without completing the method call",
                      }),
                    ],
                  }),
                ],
              }),
            h &&
              n.jsxs(n.Fragment, {
                children: [
                  n.jsx("div", {
                    className:
                      "absolute left-28 top-9 w-24 border-b border-blue-400",
                  }),
                  n.jsx("div", {
                    className: "absolute inset-0 bg-[#1A1A1A] opacity-50 z-10",
                  }),
                  n.jsx("div", {
                    className:
                      "absolute left-20 right-0 top-15 bottom-0 flex items-center justify-center z-20",
                    children: n.jsxs("div", {
                      className:
                        "max-w-2xl bg-[#252525] border border-gray-700 shadow-lg rounded-md overflow-hidden",
                      children: [
                        n.jsxs("div", {
                          className:
                            "flex items-center px-3 py-2 bg-[#2D2D2D] border-b border-gray-800",
                          children: [
                            n.jsxs("div", {
                              className: "flex space-x-1.5",
                              children: [
                                n.jsx("div", {
                                  className:
                                    "w-2.5 h-2.5 rounded-full bg-[#FF5F56]",
                                }),
                                n.jsx("div", {
                                  className:
                                    "w-2.5 h-2.5 rounded-full bg-[#FFBD2E]",
                                }),
                                n.jsx("div", {
                                  className:
                                    "w-2.5 h-2.5 rounded-full bg-[#27C93F]",
                                }),
                              ],
                            }),
                            n.jsx("div", {
                              className: "ml-4 text-xs text-gray-400 truncate",
                              children: "darklang/packages/stdlib/List.dark",
                            }),
                          ],
                        }),
                        n.jsx("div", {
                          className: "p-2 font-mono text-xs overflow-x-auto",
                          children: n.jsx(Zi, {
                            code: `/// Returns the first element of a list, or None if the list is empty
                      
let head (list: List<a>) : Option<a> =
  match list with
  | [] -> None
  | head::_ -> Some head`,
                            language: "fsharp",
                            showLineNumbers: !0,
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  Mx = r =>
    Array.from({ length: r }, (d, f) =>
      n.jsx("div", { className: "h-6", children: " " }, `empty-${f}`),
    ),
  Ox = r => {
    const d = [],
      f = r.match(/(\/\/.*?)$/);
    let u = r,
      h = "";
    f && f.index !== void 0 && ((h = f[0]), (u = r.substring(0, f.index)));
    let m = 0;
    for (; m < u.length; ) {
      if (u[m] === '"') {
        let j = u.indexOf('"', m + 1);
        j === -1 && (j = u.length),
          d.push({ text: u.substring(m, j + 1), type: "string" }),
          (m = j + 1);
        continue;
      }
      if (u[m] === "." || u[m] === ":") {
        d.push({ text: u[m], type: "punctuation" }), m++;
        continue;
      }
      if ("()[]{}<>".includes(u[m])) {
        d.push({ text: u[m], type: "bracket" }), m++;
        continue;
      }
      const A = u.substring(m).match(/^[A-Za-z0-9_']+/);
      if (A) {
        const j = A[0];
        let v = "default";
        Dx.includes(j) ? (v = "keyword") : _x.includes(j) && (v = "type"),
          d.push({ text: j, type: v }),
          (m += j.length);
        continue;
      }
      d.push({ text: u[m], type: "default" }), m++;
    }
    return h && d.push({ text: h, type: "comment" }), d;
  },
  zx = () =>
    n.jsxs("div", {
      className: "bg-[#1F1F1F] text-white min-h-screen font-code",
      children: [
        n.jsxs("section", {
          className: "relative pt-16 pb-20",
          children: [
            n.jsx("div", {
              className: "absolute -top-1 right-0 z-0",
              children: n.jsx("img", {
                src: Rx,
                alt: "Grid Pattern",
                className: "w-full max-w-sm",
              }),
            }),
            n.jsx("div", {
              className: "max-w-7xl mx-auto px-6 pt-24 relative z-10",
              children: n.jsxs("div", {
                className: "flex flex-col md:flex-row items-center",
                children: [
                  n.jsx("div", {
                    className: "mb-10 md:mb-0",
                    children: n.jsx("div", {
                      className: "w-54 h-54 relative mx-auto md:mx-0",
                      children: n.jsx("img", {
                        src: Tx,
                        alt: "Darklang Logo",
                        className: "w-full",
                      }),
                    }),
                  }),
                  n.jsxs("div", {
                    className: "md:pl-12",
                    children: [
                      n.jsx("h1", {
                        className: "text-3xl font-bold mb-4",
                        children: "Multi-Editor Support",
                      }),
                      n.jsx("p", {
                        className: "text-lg mb-6 max-w-2xl",
                        children:
                          "Darklang's language server is designed to work across multiple editing environments, providing a consistent experience regardless of your preferred editor.",
                      }),
                      n.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-4",
                        children: [
                          n.jsx(ga, {
                            variant: "primary",
                            className:
                              "bg-blue-dbg hover:bg-purple-dbg text-white text-sm tracking-widest",
                            children: ">_ Get Extension!",
                          }),
                          n.jsx(ga, {
                            variant: "outline",
                            className:
                              "border border-blue-dbg hover:bg-gray-800 text-white text-sm tracking-widest",
                            children: "Try it on editor.darklang.com →",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        n.jsxs("section", {
          className: "py-16 px-6 max-w-7xl mx-auto",
          children: [
            n.jsx("div", {
              className: "text-blue-dbg text-2xl mb-8",
              children: "Darklang LSP Server",
            }),
            n.jsx("p", {
              className: "text-white text-lg leading-relaxed max-w-6xl",
              children:
                "Our language server is fully written in Darklang and follows the Language Server Protocol (LSP), providing features like autocompletion, real-time error checking, and hover documentation. It is currently integrated with a lightweight VS Code extension, and we plan to support more editors like Vim, Rider, and Sublime in the future.",
            }),
          ],
        }),
        n.jsxs("section", {
          className: "py-16 px-6 max-w-7xl mx-auto",
          children: [
            n.jsx("div", {
              className: " text-blue-dbg text-2xl mb-12",
              children: "Basic Features",
            }),
            n.jsxs("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16",
              children: [
                n.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    n.jsx("h3", {
                      className:
                        "text-white text-xl font-medium mb-4 text-center",
                      children: "Code completion",
                    }),
                    n.jsx(Vi, { code: "Stdlib.List.", showCompletion: !0 }),
                  ],
                }),
                n.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    n.jsx("h3", {
                      className:
                        "text-white text-xl font-medium mb-4 text-center",
                      children: "Syntax highlighting",
                    }),
                    n.jsx(Vi, {
                      code: `let helloWorld () : Int64 =
  Builtin.printLine ("Hello, World!")

helloWorld ()
`,
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    n.jsx("h3", {
                      className:
                        "text-white text-xl font-medium mb-4 text-center",
                      children: "Diagnostics",
                    }),
                    n.jsx(Vi, {
                      code: `let x : List = 
  Stdlib.List.
// Error: Cannot use List without completing the method call`,
                      showDiagnostics: !0,
                    }),
                  ],
                }),
              ],
            }),
            n.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-8",
              children: [
                n.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    n.jsx("h3", {
                      className:
                        "text-white text-xl font-medium mb-4 text-center",
                      children: "Hover",
                    }),
                    n.jsx(Vi, { code: "Stdlib.List.push", showHover: !0 }),
                  ],
                }),
                n.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    n.jsx("h3", {
                      className:
                        "text-white text-xl font-medium mb-4 text-center",
                      children: "Go to definition",
                    }),
                    n.jsx(Vi, { code: "Stdlib.List.head", showGoToDef: !0 }),
                  ],
                }),
              ],
            }),
          ],
        }),
        n.jsxs("section", {
          className: "py-16 px-6 max-w-7xl mx-auto",
          children: [
            n.jsx("div", {
              className: " text-blue-dbg text-2xl mb-8",
              children: "Customizing & Creating Language Servers",
            }),
            n.jsxs("div", {
              className: "text-white text-lg space-y-8 max-w-6xl",
              children: [
                n.jsx("p", {
                  className: "leading-relaxed",
                  children:
                    "Many of our language tools are fully accessible to users. Just like forking and editing your own code, you can fork the language server to change how features like onHover, autocompletion, or diagnostics work.",
                }),
                n.jsx("p", {
                  className: "leading-relaxed",
                  children:
                    "It's also easy to create your own language servers, whether for testing new ideas or developing specialized tools",
                }),
              ],
            }),
          ],
        }),
        n.jsxs("section", {
          className: "py-16 px-6 max-w-7xl mx-auto",
          children: [
            n.jsx("div", {
              className: " text-blue-dbg text-2xl mb-8",
              children: "Extension",
            }),
            n.jsxs("div", {
              className: "text-white text-lg space-y-8 max-w-6xl",
              children: [
                n.jsx("p", {
                  className: "leading-relaxed",
                  children:
                    "We are currently focused on building a VS Code extension because of its rich API ecosystem and powerful FileSystemProvider (FSP) capabilities. Unlike traditional development where code exists as plain text files on disk, Darklang's code is stored in a package manager, making VS Code's FSP particularly valuable for our implementation.",
                }),
                n.jsx("p", {
                  className: "leading-relaxed",
                  children:
                    "While VS Code is our starting point, we're actively planning support for additional editors including Vim, Sublime Text, and Rider.",
                }),
              ],
            }),
          ],
        }),
        n.jsx(em, {
          children: n.jsxs("div", {
            className: "text-center",
            children: [
              n.jsx("h2", {
                className: "text-3xl font-bold mb-6",
                children: "Getting Started",
              }),
              n.jsxs("p", {
                className: "text-lg mb-6",
                children: [
                  "Try the VS Code extension or use it instantly on",
                  " ",
                  n.jsx("a", {
                    href: "https://editor.darklang.com",
                    className: "text-blue-dbg hover:text-purple-400",
                    children: "editor.darklang.com",
                  }),
                  "!",
                ],
              }),
              n.jsx("div", {
                className: "flex justify-center mt-8",
                children: n.jsx(ga, {
                  variant: "primary",
                  className:
                    "bg-blue-dbg hover:bg-purple-dbg text-white px-8 py-3 rounded-md",
                  children: ">_ Get Extension!",
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  Lx = () =>
    n.jsxs("div", {
      className:
        "flex flex-col items-center justify-center py-20 px-4 text-center",
      children: [
        n.jsx("h1", {
          className: "text-7xl font-bold text-purple-lbg mb-4",
          children: "404",
        }),
        n.jsx("h2", {
          className: "text-3xl font-semibold text-black-custom mb-6",
          children: "Page Not Found",
        }),
        n.jsx("p", {
          className: "text-lg text-gray-custom max-w-md mb-8",
          children:
            "The page you're looking for doesn't exist or has been moved.",
        }),
        n.jsxs("div", {
          className: "space-x-4",
          children: [
            n.jsx(Re, {
              to: "/",
              className:
                "px-6 py-3 bg-purple-lbg text-white rounded-md hover:bg-purple-secondary transition-colors",
              children: "Go Home",
            }),
            n.jsx("a", {
              href: "https://docs.darklang.com",
              className:
                "px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
              children: "Visit Docs",
            }),
          ],
        }),
      ],
    });
function Bx() {
  return n.jsx(Rg, {
    children: n.jsx(ig, {
      children: n.jsxs(Bl, {
        path: "/",
        element: n.jsx(Gg, {}),
        children: [
          n.jsx(Bl, { index: !0, element: n.jsx(bx, {}) }),
          n.jsx(Bl, { path: "about", element: n.jsx(yx, {}) }),
          n.jsx(Bl, { path: "signup", element: n.jsx(jx, {}) }),
          n.jsx(Bl, { path: "roadmap", element: n.jsx(Nx, {}) }),
          n.jsx(Bl, { path: "cli", element: n.jsx(Cx, {}) }),
          n.jsx(Bl, { path: "cloud", element: n.jsx(zx, {}) }),
          n.jsx(Bl, { path: "*", element: n.jsx(Lx, {}) }),
        ],
      }),
    }),
  });
}
d0.createRoot(document.getElementById("root")).render(
  n.jsx(T.StrictMode, { children: n.jsx(Bx, {}) }),
);
