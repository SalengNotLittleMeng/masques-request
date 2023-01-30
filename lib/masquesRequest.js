function ke(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Me } = Object.prototype, { getPrototypeOf: de } = Object, ye = ((t) => (e) => {
  const r = Me.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), P = (t) => (t = t.toLowerCase(), (e) => ye(e) === t), Z = (t) => (e) => typeof e === t, { isArray: D } = Array, M = Z("undefined");
function ct(t) {
  return t !== null && !M(t) && t.constructor !== null && !M(t.constructor) && F(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Le = P("ArrayBuffer");
function ut(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Le(t.buffer), e;
}
const lt = Z("string"), F = Z("function"), qe = Z("number"), he = (t) => t !== null && typeof t == "object", pt = (t) => t === !0 || t === !1, W = (t) => {
  if (ye(t) !== "object")
    return !1;
  const e = de(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, ft = P("Date"), dt = P("File"), yt = P("Blob"), ht = P("FileList"), mt = (t) => he(t) && F(t.pipe), bt = (t) => {
  const e = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || Me.call(t) === e || F(t.toString) && t.toString() === e);
}, gt = P("URLSearchParams"), Et = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function L(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, o;
  if (typeof t != "object" && (t = [t]), D(t))
    for (n = 0, o = t.length; n < o; n++)
      e.call(null, t[n], n, t);
  else {
    const s = r ? Object.getOwnPropertyNames(t) : Object.keys(t), i = s.length;
    let c;
    for (n = 0; n < i; n++)
      c = s[n], e.call(null, t[c], c, t);
  }
}
function $e(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], e === o.toLowerCase())
      return o;
  return null;
}
const He = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Je = (t) => !M(t) && t !== He;
function ce() {
  const { caseless: t } = Je(this) && this || {}, e = {}, r = (n, o) => {
    const s = t && $e(e, o) || o;
    W(e[s]) && W(n) ? e[s] = ce(e[s], n) : W(n) ? e[s] = ce({}, n) : D(n) ? e[s] = n.slice() : e[s] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && L(arguments[n], r);
  return e;
}
const At = (t, e, r, { allOwnKeys: n } = {}) => (L(e, (o, s) => {
  r && F(o) ? t[s] = ke(o, r) : t[s] = o;
}, { allOwnKeys: n }), t), St = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), wt = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Ot = (t, e, r, n) => {
  let o, s, i;
  const c = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (o = Object.getOwnPropertyNames(t), s = o.length; s-- > 0; )
      i = o[s], (!n || n(i, t, e)) && !c[i] && (e[i] = t[i], c[i] = !0);
    t = r !== !1 && de(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Rt = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, Pt = (t) => {
  if (!t)
    return null;
  if (D(t))
    return t;
  let e = t.length;
  if (!qe(e))
    return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Tt = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && de(Uint8Array)), vt = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const s = o.value;
    e.call(t, s[0], s[1]);
  }
}, xt = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, Ft = P("HTMLFormElement"), Nt = (t) => t.toLowerCase().replace(
  /[_-\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Oe = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Ct = P("RegExp"), We = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  L(r, (o, s) => {
    e(o, s, t) !== !1 && (n[s] = o);
  }), Object.defineProperties(t, n);
}, It = (t) => {
  We(t, (e, r) => {
    if (F(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (F(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Ut = (t, e) => {
  const r = {}, n = (o) => {
    o.forEach((s) => {
      r[s] = !0;
    });
  };
  return D(t) ? n(t) : n(String(t).split(e)), r;
}, Bt = () => {
}, jt = (t, e) => (t = +t, Number.isFinite(t) ? t : e), Dt = (t) => {
  const e = new Array(10), r = (n, o) => {
    if (he(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[o] = n;
        const s = D(n) ? [] : {};
        return L(n, (i, c) => {
          const f = r(i, o + 1);
          !M(f) && (s[c] = f);
        }), e[o] = void 0, s;
      }
    }
    return n;
  };
  return r(t, 0);
}, a = {
  isArray: D,
  isArrayBuffer: Le,
  isBuffer: ct,
  isFormData: bt,
  isArrayBufferView: ut,
  isString: lt,
  isNumber: qe,
  isBoolean: pt,
  isObject: he,
  isPlainObject: W,
  isUndefined: M,
  isDate: ft,
  isFile: dt,
  isBlob: yt,
  isRegExp: Ct,
  isFunction: F,
  isStream: mt,
  isURLSearchParams: gt,
  isTypedArray: Tt,
  isFileList: ht,
  forEach: L,
  merge: ce,
  extend: At,
  trim: Et,
  stripBOM: St,
  inherits: wt,
  toFlatObject: Ot,
  kindOf: ye,
  kindOfTest: P,
  endsWith: Rt,
  toArray: Pt,
  forEachEntry: vt,
  matchAll: xt,
  isHTMLForm: Ft,
  hasOwnProperty: Oe,
  hasOwnProp: Oe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: We,
  freezeMethods: It,
  toObjectSet: Ut,
  toCamelCase: Nt,
  noop: Bt,
  toFiniteNumber: jt,
  findKey: $e,
  global: He,
  isContextDefined: Je,
  toJSONObject: Dt
};
function m(t, e, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const ze = m.prototype, Ge = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  Ge[t] = { value: t };
});
Object.defineProperties(m, Ge);
Object.defineProperty(ze, "isAxiosError", { value: !0 });
m.from = (t, e, r, n, o, s) => {
  const i = Object.create(ze);
  return a.toFlatObject(t, i, function(f) {
    return f !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(i, t.message, e, r, n, o), i.cause = t, i.name = t.name, s && Object.assign(i, s), i;
};
var _t = typeof self == "object" ? self.FormData : window.FormData;
const kt = _t;
function ue(t) {
  return a.isPlainObject(t) || a.isArray(t);
}
function Ve(t) {
  return a.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Re(t, e, r) {
  return t ? t.concat(e).map(function(o, s) {
    return o = Ve(o), !r && s ? "[" + o + "]" : o;
  }).join(r ? "." : "") : e;
}
function Mt(t) {
  return a.isArray(t) && !t.some(ue);
}
const Lt = a.toFlatObject(a, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function qt(t) {
  return t && a.isFunction(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator];
}
function ee(t, e, r) {
  if (!a.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new (kt || FormData)(), r = a.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, O) {
    return !a.isUndefined(O[y]);
  });
  const n = r.metaTokens, o = r.visitor || l, s = r.dots, i = r.indexes, f = (r.Blob || typeof Blob < "u" && Blob) && qt(e);
  if (!a.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null)
      return "";
    if (a.isDate(p))
      return p.toISOString();
    if (!f && a.isBlob(p))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(p) || a.isTypedArray(p) ? f && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function l(p, y, O) {
    let A = p;
    if (p && !O && typeof p == "object") {
      if (a.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), p = JSON.stringify(p);
      else if (a.isArray(p) && Mt(p) || a.isFileList(p) || a.endsWith(y, "[]") && (A = a.toArray(p)))
        return y = Ve(y), A.forEach(function(H, at) {
          !(a.isUndefined(H) || H === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Re([y], at, s) : i === null ? y : y + "[]",
            u(H)
          );
        }), !1;
    }
    return ue(p) ? !0 : (e.append(Re(O, y, s), u(p)), !1);
  }
  const d = [], b = Object.assign(Lt, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: ue
  });
  function g(p, y) {
    if (!a.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(p), a.forEach(p, function(A, N) {
        (!(a.isUndefined(A) || A === null) && o.call(
          e,
          A,
          a.isString(N) ? N.trim() : N,
          y,
          b
        )) === !0 && g(A, y ? y.concat(N) : [N]);
      }), d.pop();
    }
  }
  if (!a.isObject(t))
    throw new TypeError("data must be an object");
  return g(t), e;
}
function Pe(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(n) {
    return e[n];
  });
}
function me(t, e) {
  this._pairs = [], t && ee(t, this, e);
}
const Ke = me.prototype;
Ke.append = function(e, r) {
  this._pairs.push([e, r]);
};
Ke.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, Pe);
  } : Pe;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function $t(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Xe(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || $t, o = r && r.serialize;
  let s;
  if (o ? s = o(e, r) : s = a.isURLSearchParams(e) ? e.toString() : new me(e, r).toString(n), s) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class Ht {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, r, n) {
    return this.handlers.push({
      fulfilled: e,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    a.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const Te = Ht, Qe = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Jt = typeof URLSearchParams < "u" ? URLSearchParams : me, Wt = FormData, zt = (() => {
  let t;
  return typeof navigator < "u" && ((t = navigator.product) === "ReactNative" || t === "NativeScript" || t === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Gt = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), w = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Jt,
    FormData: Wt,
    Blob
  },
  isStandardBrowserEnv: zt,
  isStandardBrowserWebWorkerEnv: Gt,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Vt(t, e) {
  return ee(t, new w.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, s) {
      return w.isNode && a.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Kt(t) {
  return a.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Xt(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const o = r.length;
  let s;
  for (n = 0; n < o; n++)
    s = r[n], e[s] = t[s];
  return e;
}
function Ye(t) {
  function e(r, n, o, s) {
    let i = r[s++];
    const c = Number.isFinite(+i), f = s >= r.length;
    return i = !i && a.isArray(o) ? o.length : i, f ? (a.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !c) : ((!o[i] || !a.isObject(o[i])) && (o[i] = []), e(r, n, o[i], s) && a.isArray(o[i]) && (o[i] = Xt(o[i])), !c);
  }
  if (a.isFormData(t) && a.isFunction(t.entries)) {
    const r = {};
    return a.forEachEntry(t, (n, o) => {
      e(Kt(n), o, r, 0);
    }), r;
  }
  return null;
}
const Qt = {
  "Content-Type": void 0
};
function Yt(t, e, r) {
  if (a.isString(t))
    try {
      return (e || JSON.parse)(t), a.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const te = {
  transitional: Qe,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = a.isObject(e);
    if (s && a.isHTMLForm(e) && (e = new FormData(e)), a.isFormData(e))
      return o && o ? JSON.stringify(Ye(e)) : e;
    if (a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e))
      return e;
    if (a.isArrayBufferView(e))
      return e.buffer;
    if (a.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let c;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Vt(e, this.formSerializer).toString();
      if ((c = a.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return ee(
          c ? { "files[]": e } : e,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return s || o ? (r.setContentType("application/json", !1), Yt(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || te.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (e && a.isString(e) && (n && !this.responseType || o)) {
      const i = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: w.classes.FormData,
    Blob: w.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
a.forEach(["delete", "get", "head"], function(e) {
  te.headers[e] = {};
});
a.forEach(["post", "put", "patch"], function(e) {
  te.headers[e] = a.merge(Qt);
});
const be = te, Zt = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), er = (t) => {
  const e = {};
  let r, n, o;
  return t && t.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), r = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), !(!r || e[r] && Zt[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, ve = Symbol("internals");
function k(t) {
  return t && String(t).trim().toLowerCase();
}
function z(t) {
  return t === !1 || t == null ? t : a.isArray(t) ? t.map(z) : String(t);
}
function tr(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
function rr(t) {
  return /^[-_a-zA-Z]+$/.test(t.trim());
}
function xe(t, e, r, n) {
  if (a.isFunction(n))
    return n.call(this, e, r);
  if (a.isString(e)) {
    if (a.isString(n))
      return e.indexOf(n) !== -1;
    if (a.isRegExp(n))
      return n.test(e);
  }
}
function nr(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function or(t, e) {
  const r = a.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(o, s, i) {
        return this[n].call(this, e, o, s, i);
      },
      configurable: !0
    });
  });
}
class re {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const o = this;
    function s(c, f, u) {
      const l = k(f);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = a.findKey(o, l);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || f] = z(c));
    }
    const i = (c, f) => a.forEach(c, (u, l) => s(u, l, f));
    return a.isPlainObject(e) || e instanceof this.constructor ? i(e, r) : a.isString(e) && (e = e.trim()) && !rr(e) ? i(er(e), r) : e != null && s(r, e, n), this;
  }
  get(e, r) {
    if (e = k(e), e) {
      const n = a.findKey(this, e);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return tr(o);
        if (a.isFunction(r))
          return r.call(this, o, n);
        if (a.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = k(e), e) {
      const n = a.findKey(this, e);
      return !!(n && (!r || xe(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let o = !1;
    function s(i) {
      if (i = k(i), i) {
        const c = a.findKey(n, i);
        c && (!r || xe(n, n[c], c, r)) && (delete n[c], o = !0);
      }
    }
    return a.isArray(e) ? e.forEach(s) : s(e), o;
  }
  clear() {
    return Object.keys(this).forEach(this.delete.bind(this));
  }
  normalize(e) {
    const r = this, n = {};
    return a.forEach(this, (o, s) => {
      const i = a.findKey(n, s);
      if (i) {
        r[i] = z(o), delete r[s];
        return;
      }
      const c = e ? nr(s) : String(s).trim();
      c !== s && delete r[s], r[c] = z(o), n[c] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = e && a.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...r) {
    const n = new this(e);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(e) {
    const n = (this[ve] = this[ve] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const c = k(i);
      n[c] || (or(o, i), n[c] = !0);
    }
    return a.isArray(e) ? e.forEach(s) : s(e), this;
  }
}
re.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
a.freezeMethods(re.prototype);
a.freezeMethods(re);
const R = re;
function ne(t, e) {
  const r = this || be, n = e || r, o = R.from(n.headers);
  let s = n.data;
  return a.forEach(t, function(c) {
    s = c.call(r, s, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), s;
}
function Ze(t) {
  return !!(t && t.__CANCEL__);
}
function q(t, e, r) {
  m.call(this, t ?? "canceled", m.ERR_CANCELED, e, r), this.name = "CanceledError";
}
a.inherits(q, m, {
  __CANCEL__: !0
});
const sr = null;
function ir(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new m(
    "Request failed with status code " + r.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const ar = w.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, o, s, i, c) {
        const f = [];
        f.push(r + "=" + encodeURIComponent(n)), a.isNumber(o) && f.push("expires=" + new Date(o).toGMTString()), a.isString(s) && f.push("path=" + s), a.isString(i) && f.push("domain=" + i), c === !0 && f.push("secure"), document.cookie = f.join("; ");
      },
      read: function(r) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(r) {
        this.write(r, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function cr(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function ur(t, e) {
  return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function et(t, e) {
  return t && !cr(e) ? ur(t, e) : e;
}
const lr = w.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function o(s) {
      let i = s;
      return e && (r.setAttribute("href", i), i = r.href), r.setAttribute("href", i), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = o(window.location.href), function(i) {
      const c = a.isString(i) ? o(i) : i;
      return c.protocol === n.protocol && c.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function pr(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function fr(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let o = 0, s = 0, i;
  return e = e !== void 0 ? e : 1e3, function(f) {
    const u = Date.now(), l = n[s];
    i || (i = u), r[o] = f, n[o] = u;
    let d = s, b = 0;
    for (; d !== o; )
      b += r[d++], d = d % t;
    if (o = (o + 1) % t, o === s && (s = (s + 1) % t), u - i < e)
      return;
    const g = l && u - l;
    return g ? Math.round(b * 1e3 / g) : void 0;
  };
}
function Fe(t, e) {
  let r = 0;
  const n = fr(50, 250);
  return (o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, c = s - r, f = n(c), u = s <= i;
    r = s;
    const l = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: c,
      rate: f || void 0,
      estimated: f && i && u ? (i - s) / f : void 0,
      event: o
    };
    l[e ? "download" : "upload"] = !0, t(l);
  };
}
const dr = typeof XMLHttpRequest < "u", yr = dr && function(t) {
  return new Promise(function(r, n) {
    let o = t.data;
    const s = R.from(t.headers).normalize(), i = t.responseType;
    let c;
    function f() {
      t.cancelToken && t.cancelToken.unsubscribe(c), t.signal && t.signal.removeEventListener("abort", c);
    }
    a.isFormData(o) && (w.isStandardBrowserEnv || w.isStandardBrowserWebWorkerEnv) && s.setContentType(!1);
    let u = new XMLHttpRequest();
    if (t.auth) {
      const g = t.auth.username || "", p = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(g + ":" + p));
    }
    const l = et(t.baseURL, t.url);
    u.open(t.method.toUpperCase(), Xe(l, t.params, t.paramsSerializer), !0), u.timeout = t.timeout;
    function d() {
      if (!u)
        return;
      const g = R.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), y = {
        data: !i || i === "text" || i === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: g,
        config: t,
        request: u
      };
      ir(function(A) {
        r(A), f();
      }, function(A) {
        n(A), f();
      }, y), u = null;
    }
    if ("onloadend" in u ? u.onloadend = d : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, u.onabort = function() {
      u && (n(new m("Request aborted", m.ECONNABORTED, t, u)), u = null);
    }, u.onerror = function() {
      n(new m("Network Error", m.ERR_NETWORK, t, u)), u = null;
    }, u.ontimeout = function() {
      let p = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const y = t.transitional || Qe;
      t.timeoutErrorMessage && (p = t.timeoutErrorMessage), n(new m(
        p,
        y.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        t,
        u
      )), u = null;
    }, w.isStandardBrowserEnv) {
      const g = (t.withCredentials || lr(l)) && t.xsrfCookieName && ar.read(t.xsrfCookieName);
      g && s.set(t.xsrfHeaderName, g);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in u && a.forEach(s.toJSON(), function(p, y) {
      u.setRequestHeader(y, p);
    }), a.isUndefined(t.withCredentials) || (u.withCredentials = !!t.withCredentials), i && i !== "json" && (u.responseType = t.responseType), typeof t.onDownloadProgress == "function" && u.addEventListener("progress", Fe(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Fe(t.onUploadProgress)), (t.cancelToken || t.signal) && (c = (g) => {
      u && (n(!g || g.type ? new q(null, t, u) : g), u.abort(), u = null);
    }, t.cancelToken && t.cancelToken.subscribe(c), t.signal && (t.signal.aborted ? c() : t.signal.addEventListener("abort", c)));
    const b = pr(l);
    if (b && w.protocols.indexOf(b) === -1) {
      n(new m("Unsupported protocol " + b + ":", m.ERR_BAD_REQUEST, t));
      return;
    }
    u.send(o || null);
  });
}, G = {
  http: sr,
  xhr: yr
};
a.forEach(G, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const hr = {
  getAdapter: (t) => {
    t = a.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    for (let o = 0; o < e && (r = t[o], !(n = a.isString(r) ? G[r.toLowerCase()] : r)); o++)
      ;
    if (!n)
      throw n === !1 ? new m(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        a.hasOwnProp(G, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!a.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: G
};
function oe(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new q(null, t);
}
function Ne(t) {
  return oe(t), t.headers = R.from(t.headers), t.data = ne.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), hr.getAdapter(t.adapter || be.adapter)(t).then(function(n) {
    return oe(t), n.data = ne.call(
      t,
      t.transformResponse,
      n
    ), n.headers = R.from(n.headers), n;
  }, function(n) {
    return Ze(n) || (oe(t), n && n.response && (n.response.data = ne.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = R.from(n.response.headers))), Promise.reject(n);
  });
}
const Ce = (t) => t instanceof R ? t.toJSON() : t;
function B(t, e) {
  e = e || {};
  const r = {};
  function n(u, l, d) {
    return a.isPlainObject(u) && a.isPlainObject(l) ? a.merge.call({ caseless: d }, u, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function o(u, l, d) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return n(void 0, u, d);
    } else
      return n(u, l, d);
  }
  function s(u, l) {
    if (!a.isUndefined(l))
      return n(void 0, l);
  }
  function i(u, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return n(void 0, u);
    } else
      return n(void 0, l);
  }
  function c(u, l, d) {
    if (d in e)
      return n(u, l);
    if (d in t)
      return n(void 0, u);
  }
  const f = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (u, l) => o(Ce(u), Ce(l), !0)
  };
  return a.forEach(Object.keys(t).concat(Object.keys(e)), function(l) {
    const d = f[l] || o, b = d(t[l], e[l], l);
    a.isUndefined(b) && d !== c || (r[l] = b);
  }), r;
}
const tt = "1.2.5", ge = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  ge[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ie = {};
ge.transitional = function(e, r, n) {
  function o(s, i) {
    return "[Axios v" + tt + "] Transitional option '" + s + "'" + i + (n ? ". " + n : "");
  }
  return (s, i, c) => {
    if (e === !1)
      throw new m(
        o(i, " has been removed" + (r ? " in " + r : "")),
        m.ERR_DEPRECATED
      );
    return r && !Ie[i] && (Ie[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(s, i, c) : !0;
  };
};
function mr(t, e, r) {
  if (typeof t != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], i = e[s];
    if (i) {
      const c = t[s], f = c === void 0 || i(c, s, t);
      if (f !== !0)
        throw new m("option " + s + " must be " + f, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new m("Unknown option " + s, m.ERR_BAD_OPTION);
  }
}
const le = {
  assertOptions: mr,
  validators: ge
}, T = le.validators;
class K {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Te(),
      response: new Te()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = B(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: s } = r;
    n !== void 0 && le.assertOptions(n, {
      silentJSONParsing: T.transitional(T.boolean),
      forcedJSONParsing: T.transitional(T.boolean),
      clarifyTimeoutError: T.transitional(T.boolean)
    }, !1), o !== void 0 && le.assertOptions(o, {
      encode: T.function,
      serialize: T.function
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = s && a.merge(
      s.common,
      s[r.method]
    ), i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete s[p];
      }
    ), r.headers = R.concat(i, s);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(r) === !1 || (f = f && y.synchronous, c.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let l, d = 0, b;
    if (!f) {
      const p = [Ne.bind(this), void 0];
      for (p.unshift.apply(p, c), p.push.apply(p, u), b = p.length, l = Promise.resolve(r); d < b; )
        l = l.then(p[d++], p[d++]);
      return l;
    }
    b = c.length;
    let g = r;
    for (d = 0; d < b; ) {
      const p = c[d++], y = c[d++];
      try {
        g = p(g);
      } catch (O) {
        y.call(this, O);
        break;
      }
    }
    try {
      l = Ne.call(this, g);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, b = u.length; d < b; )
      l = l.then(u[d++], u[d++]);
    return l;
  }
  getUri(e) {
    e = B(this.defaults, e);
    const r = et(e.baseURL, e.url);
    return Xe(r, e.params, e.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(e) {
  K.prototype[e] = function(r, n) {
    return this.request(B(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(s, i, c) {
      return this.request(B(c || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  K.prototype[e] = r(), K.prototype[e + "Form"] = r(!0);
});
const V = K;
class Ee {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((c) => {
        n.subscribe(c), s = c;
      }).then(o);
      return i.cancel = function() {
        n.unsubscribe(s);
      }, i;
    }, e(function(s, i, c) {
      n.reason || (n.reason = new q(s, i, c), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(e);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Ee(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
}
const br = Ee;
function gr(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Er(t) {
  return a.isObject(t) && t.isAxiosError === !0;
}
const pe = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(pe).forEach(([t, e]) => {
  pe[e] = t;
});
const Ar = pe;
function rt(t) {
  const e = new V(t), r = ke(V.prototype.request, e);
  return a.extend(r, V.prototype, e, { allOwnKeys: !0 }), a.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(o) {
    return rt(B(t, o));
  }, r;
}
const E = rt(be);
E.Axios = V;
E.CanceledError = q;
E.CancelToken = br;
E.isCancel = Ze;
E.VERSION = tt;
E.toFormData = ee;
E.AxiosError = m;
E.Cancel = E.CanceledError;
E.all = function(e) {
  return Promise.all(e);
};
E.spread = gr;
E.isAxiosError = Er;
E.mergeConfig = B;
E.AxiosHeaders = R;
E.formToJSON = (t) => Ye(a.isHTMLForm(t) ? new FormData(t) : t);
E.HttpStatusCode = Ar;
E.default = E;
const nt = E;
function Sr(t, e = {}) {
  const r = e.tokenName && localStorage.getItem(e.tokenName);
  r && typeof window < "u" && (t.headers[e.headerToken] = r);
}
function wr(t, e = {}) {
  e.auth && e.auth && (t.auth = e.auth);
}
const Ue = (t) => Promise.reject(t);
class Or {
  constructor(e) {
    this.instance = e, this.interceptorsRequest = [], this.interceptorsResponse = [];
  }
  // 添加请求拦截器
  addRequestInterceptors(e, r = Ue) {
    this.interceptorsRequest.unshift({ success: e, error: r });
  }
  // 添加响应拦截器
  addResponseInterceptors(e, r = Ue) {
    this.interceptorsResponse.push({ success: e, error: r });
  }
  // 使用所有拦截器，由于要考虑插件情况所以需要多封装一层
  useAllInterceptors() {
    this.getResponseDataInterceptor(), this.interceptorsRequest.forEach((e) => {
      this.instance.interceptors.request.use(...Object.values(e));
    }), this.interceptorsResponse.forEach((e) => {
      this.instance.interceptors.response.use(...Object.values(e));
    });
  }
  // 添加工具配置的拦截器
  addUtilsConfig(e = {}) {
    this.addRequestInterceptors(function(r) {
      return Sr(r, e), wr(r, e), r;
    });
  }
  // 过滤请求配置，这个方法应该是最后执行的响应拦截器
  getResponseDataInterceptor() {
    this.addResponseInterceptors((e) => e.data);
  }
}
var Rr = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var o = 42;
  e[r] = o;
  for (r in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var s = Object.getOwnPropertySymbols(e);
  if (s.length !== 1 || s[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var i = Object.getOwnPropertyDescriptor(e, r);
    if (i.value !== o || i.enumerable !== !0)
      return !1;
  }
  return !0;
}, Be = typeof Symbol < "u" && Symbol, Pr = Rr, Tr = function() {
  return typeof Be != "function" || typeof Symbol != "function" || typeof Be("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Pr();
}, vr = "Function.prototype.bind called on incompatible ", se = Array.prototype.slice, xr = Object.prototype.toString, Fr = "[object Function]", Nr = function(e) {
  var r = this;
  if (typeof r != "function" || xr.call(r) !== Fr)
    throw new TypeError(vr + r);
  for (var n = se.call(arguments, 1), o, s = function() {
    if (this instanceof o) {
      var l = r.apply(
        this,
        n.concat(se.call(arguments))
      );
      return Object(l) === l ? l : this;
    } else
      return r.apply(
        e,
        n.concat(se.call(arguments))
      );
  }, i = Math.max(0, r.length - n.length), c = [], f = 0; f < i; f++)
    c.push("$" + f);
  if (o = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(s), r.prototype) {
    var u = function() {
    };
    u.prototype = r.prototype, o.prototype = new u(), u.prototype = null;
  }
  return o;
}, Cr = Nr, Ae = Function.prototype.bind || Cr, Ir = Ae, Ur = Ir.call(Function.call, Object.prototype.hasOwnProperty), h, j = SyntaxError, ot = Function, U = TypeError, ie = function(t) {
  try {
    return ot('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, v = Object.getOwnPropertyDescriptor;
if (v)
  try {
    v({}, "");
  } catch {
    v = null;
  }
var ae = function() {
  throw new U();
}, Br = v ? function() {
  try {
    return arguments.callee, ae;
  } catch {
    try {
      return v(arguments, "callee").get;
    } catch {
      return ae;
    }
  }
}() : ae, C = Tr(), S = Object.getPrototypeOf || function(t) {
  return t.__proto__;
}, I = {}, jr = typeof Uint8Array > "u" ? h : S(Uint8Array), x = {
  "%AggregateError%": typeof AggregateError > "u" ? h : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? h : ArrayBuffer,
  "%ArrayIteratorPrototype%": C ? S([][Symbol.iterator]()) : h,
  "%AsyncFromSyncIteratorPrototype%": h,
  "%AsyncFunction%": I,
  "%AsyncGenerator%": I,
  "%AsyncGeneratorFunction%": I,
  "%AsyncIteratorPrototype%": I,
  "%Atomics%": typeof Atomics > "u" ? h : Atomics,
  "%BigInt%": typeof BigInt > "u" ? h : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? h : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? h : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? h : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? h : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? h : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? h : FinalizationRegistry,
  "%Function%": ot,
  "%GeneratorFunction%": I,
  "%Int8Array%": typeof Int8Array > "u" ? h : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? h : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? h : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": C ? S(S([][Symbol.iterator]())) : h,
  "%JSON%": typeof JSON == "object" ? JSON : h,
  "%Map%": typeof Map > "u" ? h : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !C ? h : S((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? h : Promise,
  "%Proxy%": typeof Proxy > "u" ? h : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? h : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? h : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !C ? h : S((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? h : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": C ? S(""[Symbol.iterator]()) : h,
  "%Symbol%": C ? Symbol : h,
  "%SyntaxError%": j,
  "%ThrowTypeError%": Br,
  "%TypedArray%": jr,
  "%TypeError%": U,
  "%Uint8Array%": typeof Uint8Array > "u" ? h : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? h : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? h : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? h : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? h : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? h : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? h : WeakSet
};
try {
  null.error;
} catch (t) {
  var Dr = S(S(t));
  x["%Error.prototype%"] = Dr;
}
var _r = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = ie("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = ie("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = ie("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var o = t("%AsyncGenerator%");
    o && (r = S(o.prototype));
  }
  return x[e] = r, r;
}, je = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, $ = Ae, X = Ur, kr = $.call(Function.call, Array.prototype.concat), Mr = $.call(Function.apply, Array.prototype.splice), De = $.call(Function.call, String.prototype.replace), Q = $.call(Function.call, String.prototype.slice), Lr = $.call(Function.call, RegExp.prototype.exec), qr = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, $r = /\\(\\)?/g, Hr = function(e) {
  var r = Q(e, 0, 1), n = Q(e, -1);
  if (r === "%" && n !== "%")
    throw new j("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new j("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return De(e, qr, function(s, i, c, f) {
    o[o.length] = c ? De(f, $r, "$1") : i || s;
  }), o;
}, Jr = function(e, r) {
  var n = e, o;
  if (X(je, n) && (o = je[n], n = "%" + o[0] + "%"), X(x, n)) {
    var s = x[n];
    if (s === I && (s = _r(n)), typeof s > "u" && !r)
      throw new U("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: n,
      value: s
    };
  }
  throw new j("intrinsic " + e + " does not exist!");
}, Se = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new U("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new U('"allowMissing" argument must be a boolean');
  if (Lr(/^%?[^%]*%?$/, e) === null)
    throw new j("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = Hr(e), o = n.length > 0 ? n[0] : "", s = Jr("%" + o + "%", r), i = s.name, c = s.value, f = !1, u = s.alias;
  u && (o = u[0], Mr(n, kr([0, 1], u)));
  for (var l = 1, d = !0; l < n.length; l += 1) {
    var b = n[l], g = Q(b, 0, 1), p = Q(b, -1);
    if ((g === '"' || g === "'" || g === "`" || p === '"' || p === "'" || p === "`") && g !== p)
      throw new j("property names with quotes must have matching quotes");
    if ((b === "constructor" || !d) && (f = !0), o += "." + b, i = "%" + o + "%", X(x, i))
      c = x[i];
    else if (c != null) {
      if (!(b in c)) {
        if (!r)
          throw new U("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (v && l + 1 >= n.length) {
        var y = v(c, b);
        d = !!y, d && "get" in y && !("originalValue" in y.get) ? c = y.get : c = c[b];
      } else
        d = X(c, b), c = c[b];
      d && !f && (x[i] = c);
    }
  }
  return c;
}, fe = {}, Wr = {
  get exports() {
    return fe;
  },
  set exports(t) {
    fe = t;
  }
};
(function(t) {
  var e = Ae, r = Se, n = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), s = r("%Reflect.apply%", !0) || e.call(o, n), i = r("%Object.getOwnPropertyDescriptor%", !0), c = r("%Object.defineProperty%", !0), f = r("%Math.max%");
  if (c)
    try {
      c({}, "a", { value: 1 });
    } catch {
      c = null;
    }
  t.exports = function(d) {
    var b = s(e, o, arguments);
    if (i && c) {
      var g = i(b, "length");
      g.configurable && c(
        b,
        "length",
        { value: 1 + f(0, d.length - (arguments.length - 1)) }
      );
    }
    return b;
  };
  var u = function() {
    return s(e, n, arguments);
  };
  c ? c(t.exports, "apply", { value: u }) : t.exports.apply = u;
})(Wr);
var st = Se, it = fe, zr = it(st("String.prototype.indexOf")), Gr = function(e, r) {
  var n = st(e, !!r);
  return typeof n == "function" && zr(e, ".prototype.") > -1 ? it(n) : n;
}, we = Se, _ = Gr;
we("%TypeError%");
we("%WeakMap%", !0);
we("%Map%", !0);
_("WeakMap.prototype.get", !0);
_("WeakMap.prototype.set", !0);
_("WeakMap.prototype.has", !0);
_("Map.prototype.get", !0);
_("Map.prototype.set", !0);
_("Map.prototype.has", !0);
(function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
})();
class Vr {
  constructor() {
  }
  // 浅层合并
  mergeObjectOptions(e, r) {
    return Object.assign(e, r);
  }
  // 获取默认的请求配置
  getRequestDefaultOptions() {
    return {
      method: "post",
      type: "json",
      repeat_request_cancel: !0
    };
  }
  // 获取默认的axios配置
  getAxiosDefaultOptions() {
    return {
      timeout: 5e3,
      baseUrl: ""
    };
  }
  mergeAxiosDefaultOptons(e = {}) {
    return this.mergeObjectOptions(this.getAxiosDefaultOptions(), e);
  }
  mergeRequestDefaultOptons(e = {}) {
    return this.mergeObjectOptions(this.getRequestDefaultOptions(), e);
  }
}
const Kr = {
  json: (t) => {
    t.headers = {
      "Content-Type": "application/json"
    };
  },
  // 这里抹平formData,urlencoded与json的配置差异，不论格式如何都传一个对象
  formData: (t) => {
    t.headers = {
      "Content-Type": "multipart/form-data"
    };
    const e = t.data;
    let r = null;
    if (e) {
      r = new FormData();
      for (const n in e)
        r.append(n, e[n]);
    }
    t.data = r;
  },
  // urlencoded类型请求需要进行序列化操作
  urlencoded: (t) => {
    t.headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    }, t.transformRequest = [
      (e) => Qs.stringify(e)
    ];
  }
};
class Xr {
  constructor() {
    this.event = {};
  }
  emit(e, r) {
    this.event[e] ? this.event[e].push(r) : this.event[e] = [r];
  }
  on(e, ...r) {
    if (this.event[e])
      this.event[e].forEach((n) => {
        n(...r);
      });
    else
      throw Error("no Event");
  }
}
const Y = new Xr(), Qr = Y.on.bind(Y), Yr = Y.emit.bind(Y);
class _e {
  constructor(e = {}) {
    this.merge = new Vr(), this.instance = nt.create(this.merge.getAxiosDefaultOptions(e.axiosOptions)), this.interceptor = new Or(this.instance), this.interceptor.addUtilsConfig(e);
  }
  // 设置请求拦截器
  setRequestInterceptors(e, r) {
    this.interceptor.addRequestInterceptors(e, r);
  }
  // 设置响应拦截器
  setResponseInterceptors(e, r) {
    this.interceptor.addResponseInterceptors(e, r);
  }
  // 重新设置请求头
  setRequestHeadConfig(e) {
    const r = e.type;
    return Kr[r](e), e;
  }
  // 为了确保处理顺序的可维护性，这里采用职责链遍历
  setConfigFunctionLine(e) {
    const r = [
      this.merge.mergeRequestDefaultOptons.bind(this.merge),
      this.setRequestHeadConfig,
      (n) => (n.method === "get" && (n.params = n.data), n)
    ];
    return r.reduce((n, o, s) => r[s](n), e);
  }
  // 返回请求实例
  create() {
    const e = this;
    return Qr("beforeCreateRequsetFunction", this), this.interceptor.useAllInterceptors(), function(r) {
      return r = e.setConfigFunctionLine(r), e.instance(r);
    };
  }
}
class Zr {
  constructor() {
    this.pendingMap = /* @__PURE__ */ new Map();
  }
  getPendingKey(e) {
    return en(e);
  }
  // 存储每个键的值
  addPending(e) {
    const r = this.getPendingKey(e);
    e.cancelToken = e.cancelToken || new nt.CancelToken((n) => {
      this.pendingMap.has(r) || this.pendingMap.set(r, n);
    });
  }
  // 删除取消重复请求
  removePending(e, r = !1) {
    const n = this.getPendingKey(e);
    r || this.pendingMap.has(this.pendingKey) && (this.pendingMap.get(n)(n), this.pendingMap.delete(n));
  }
}
function en(t) {
  const { url: e, method: r, params: n } = t;
  let { data: o } = t;
  if (typeof o == "string")
    try {
      o = JSON.parse(o);
    } catch {
      return;
    }
  return [e, r, JSON.stringify(n), JSON.stringify(o)].join("&");
}
const J = new Zr(), tn = {
  beforeCreateRequsetFunction: function(t) {
    const { interceptor: e } = t;
    e.addRequestInterceptors(function(r) {
      return r.repeat_request_cancel && J.removePending(r, Boolean(r.retryTimes)), J.addPending(r), r;
    }), e.addResponseInterceptors(
      function(r) {
        return J.removePending(r.config), r;
      },
      function(r) {
        const { config: n, response: o } = r;
        return n && J.removePending(n, Boolean(n == null ? void 0 : n.retryTimes)), Promise.reject(r);
      }
    );
  }
};
class rn {
  constructor(e) {
    this.options = e, this.httpFactory = new _e(e), this.use(tn);
  }
  createRequestFunction(e = {}) {
    return new _e(Object.assign(e, this.options)).create();
  }
  install(e) {
    const r = this.httpFactory.create();
    e.prototype ? e.prototype.$http = r : e.config.globalProperties.$http = r;
  }
  use(e) {
    Object.keys(e).forEach((r) => {
      Yr(r, e[r]);
    });
  }
}
export {
  rn as default
};
//# sourceMappingURL=masquesRequest.js.map
