function De(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: _e } = Object.prototype, { getPrototypeOf: fe } = Object, pe = ((t) => (e) => {
  const r = _e.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), P = (t) => (t = t.toLowerCase(), (e) => pe(e) === t), Q = (t) => (e) => typeof e === t, { isArray: D } = Array, L = Q("undefined");
function st(t) {
  return t !== null && !L(t) && t.constructor !== null && !L(t.constructor) && F(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const ke = P("ArrayBuffer");
function it(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && ke(t.buffer), e;
}
const at = Q("string"), F = Q("function"), Le = Q("number"), de = (t) => t !== null && typeof t == "object", ct = (t) => t === !0 || t === !1, J = (t) => {
  if (pe(t) !== "object")
    return !1;
  const e = fe(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, ut = P("Date"), lt = P("File"), ft = P("Blob"), pt = P("FileList"), dt = (t) => de(t) && F(t.pipe), yt = (t) => {
  const e = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || _e.call(t) === e || F(t.toString) && t.toString() === e);
}, ht = P("URLSearchParams"), mt = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function M(t, e, { allOwnKeys: r = !1 } = {}) {
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
function Me(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], e === o.toLowerCase())
      return o;
  return null;
}
const qe = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), $e = (t) => !L(t) && t !== qe;
function ie() {
  const { caseless: t } = $e(this) && this || {}, e = {}, r = (n, o) => {
    const s = t && Me(e, o) || o;
    J(e[s]) && J(n) ? e[s] = ie(e[s], n) : J(n) ? e[s] = ie({}, n) : D(n) ? e[s] = n.slice() : e[s] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && M(arguments[n], r);
  return e;
}
const bt = (t, e, r, { allOwnKeys: n } = {}) => (M(e, (o, s) => {
  r && F(o) ? t[s] = De(o, r) : t[s] = o;
}, { allOwnKeys: n }), t), Et = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), At = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, gt = (t, e, r, n) => {
  let o, s, i;
  const c = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (o = Object.getOwnPropertyNames(t), s = o.length; s-- > 0; )
      i = o[s], (!n || n(i, t, e)) && !c[i] && (e[i] = t[i], c[i] = !0);
    t = r !== !1 && fe(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, St = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, wt = (t) => {
  if (!t)
    return null;
  if (D(t))
    return t;
  let e = t.length;
  if (!Le(e))
    return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Ot = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && fe(Uint8Array)), Rt = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const s = o.value;
    e.call(t, s[0], s[1]);
  }
}, Pt = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, Tt = P("HTMLFormElement"), xt = (t) => t.toLowerCase().replace(
  /[_-\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Se = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), vt = P("RegExp"), He = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  M(r, (o, s) => {
    e(o, s, t) !== !1 && (n[s] = o);
  }), Object.defineProperties(t, n);
}, Ft = (t) => {
  He(t, (e, r) => {
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
}, Nt = (t, e) => {
  const r = {}, n = (o) => {
    o.forEach((s) => {
      r[s] = !0;
    });
  };
  return D(t) ? n(t) : n(String(t).split(e)), r;
}, Ct = () => {
}, Ut = (t, e) => (t = +t, Number.isFinite(t) ? t : e), It = (t) => {
  const e = new Array(10), r = (n, o) => {
    if (de(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[o] = n;
        const s = D(n) ? [] : {};
        return M(n, (i, c) => {
          const p = r(i, o + 1);
          !L(p) && (s[c] = p);
        }), e[o] = void 0, s;
      }
    }
    return n;
  };
  return r(t, 0);
}, a = {
  isArray: D,
  isArrayBuffer: ke,
  isBuffer: st,
  isFormData: yt,
  isArrayBufferView: it,
  isString: at,
  isNumber: Le,
  isBoolean: ct,
  isObject: de,
  isPlainObject: J,
  isUndefined: L,
  isDate: ut,
  isFile: lt,
  isBlob: ft,
  isRegExp: vt,
  isFunction: F,
  isStream: dt,
  isURLSearchParams: ht,
  isTypedArray: Ot,
  isFileList: pt,
  forEach: M,
  merge: ie,
  extend: bt,
  trim: mt,
  stripBOM: Et,
  inherits: At,
  toFlatObject: gt,
  kindOf: pe,
  kindOfTest: P,
  endsWith: St,
  toArray: wt,
  forEachEntry: Rt,
  matchAll: Pt,
  isHTMLForm: Tt,
  hasOwnProperty: Se,
  hasOwnProp: Se,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: He,
  freezeMethods: Ft,
  toObjectSet: Nt,
  toCamelCase: xt,
  noop: Ct,
  toFiniteNumber: Ut,
  findKey: Me,
  global: qe,
  isContextDefined: $e,
  toJSONObject: It
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
const Je = m.prototype, We = {};
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
  We[t] = { value: t };
});
Object.defineProperties(m, We);
Object.defineProperty(Je, "isAxiosError", { value: !0 });
m.from = (t, e, r, n, o, s) => {
  const i = Object.create(Je);
  return a.toFlatObject(t, i, function(p) {
    return p !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(i, t.message, e, r, n, o), i.cause = t, i.name = t.name, s && Object.assign(i, s), i;
};
var Bt = typeof self == "object" ? self.FormData : window.FormData;
const jt = Bt;
function ae(t) {
  return a.isPlainObject(t) || a.isArray(t);
}
function ze(t) {
  return a.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function we(t, e, r) {
  return t ? t.concat(e).map(function(o, s) {
    return o = ze(o), !r && s ? "[" + o + "]" : o;
  }).join(r ? "." : "") : e;
}
function Dt(t) {
  return a.isArray(t) && !t.some(ae);
}
const _t = a.toFlatObject(a, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function kt(t) {
  return t && a.isFunction(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator];
}
function Y(t, e, r) {
  if (!a.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new (jt || FormData)(), r = a.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, O) {
    return !a.isUndefined(O[y]);
  });
  const n = r.metaTokens, o = r.visitor || l, s = r.dots, i = r.indexes, p = (r.Blob || typeof Blob < "u" && Blob) && kt(e);
  if (!a.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(f) {
    if (f === null)
      return "";
    if (a.isDate(f))
      return f.toISOString();
    if (!p && a.isBlob(f))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f) ? p && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, y, O) {
    let g = f;
    if (f && !O && typeof f == "object") {
      if (a.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), f = JSON.stringify(f);
      else if (a.isArray(f) && Dt(f) || a.isFileList(f) || a.endsWith(y, "[]") && (g = a.toArray(f)))
        return y = ze(y), g.forEach(function(H, ot) {
          !(a.isUndefined(H) || H === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? we([y], ot, s) : i === null ? y : y + "[]",
            u(H)
          );
        }), !1;
    }
    return ae(f) ? !0 : (e.append(we(O, y, s), u(f)), !1);
  }
  const d = [], b = Object.assign(_t, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: ae
  });
  function E(f, y) {
    if (!a.isUndefined(f)) {
      if (d.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(f), a.forEach(f, function(g, N) {
        (!(a.isUndefined(g) || g === null) && o.call(
          e,
          g,
          a.isString(N) ? N.trim() : N,
          y,
          b
        )) === !0 && E(g, y ? y.concat(N) : [N]);
      }), d.pop();
    }
  }
  if (!a.isObject(t))
    throw new TypeError("data must be an object");
  return E(t), e;
}
function Oe(t) {
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
function ye(t, e) {
  this._pairs = [], t && Y(t, this, e);
}
const Ge = ye.prototype;
Ge.append = function(e, r) {
  this._pairs.push([e, r]);
};
Ge.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, Oe);
  } : Oe;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function Lt(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ve(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || Lt, o = r && r.serialize;
  let s;
  if (o ? s = o(e, r) : s = a.isURLSearchParams(e) ? e.toString() : new ye(e, r).toString(n), s) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class Mt {
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
const Re = Mt, Ke = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, qt = typeof URLSearchParams < "u" ? URLSearchParams : ye, $t = FormData, Ht = (() => {
  let t;
  return typeof navigator < "u" && ((t = navigator.product) === "ReactNative" || t === "NativeScript" || t === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Jt = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), w = {
  isBrowser: !0,
  classes: {
    URLSearchParams: qt,
    FormData: $t,
    Blob
  },
  isStandardBrowserEnv: Ht,
  isStandardBrowserWebWorkerEnv: Jt,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Wt(t, e) {
  return Y(t, new w.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, s) {
      return w.isNode && a.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function zt(t) {
  return a.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Gt(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const o = r.length;
  let s;
  for (n = 0; n < o; n++)
    s = r[n], e[s] = t[s];
  return e;
}
function Xe(t) {
  function e(r, n, o, s) {
    let i = r[s++];
    const c = Number.isFinite(+i), p = s >= r.length;
    return i = !i && a.isArray(o) ? o.length : i, p ? (a.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !c) : ((!o[i] || !a.isObject(o[i])) && (o[i] = []), e(r, n, o[i], s) && a.isArray(o[i]) && (o[i] = Gt(o[i])), !c);
  }
  if (a.isFormData(t) && a.isFunction(t.entries)) {
    const r = {};
    return a.forEachEntry(t, (n, o) => {
      e(zt(n), o, r, 0);
    }), r;
  }
  return null;
}
const Vt = {
  "Content-Type": void 0
};
function Kt(t, e, r) {
  if (a.isString(t))
    try {
      return (e || JSON.parse)(t), a.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const Z = {
  transitional: Ke,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = a.isObject(e);
    if (s && a.isHTMLForm(e) && (e = new FormData(e)), a.isFormData(e))
      return o && o ? JSON.stringify(Xe(e)) : e;
    if (a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e))
      return e;
    if (a.isArrayBufferView(e))
      return e.buffer;
    if (a.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let c;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Wt(e, this.formSerializer).toString();
      if ((c = a.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return Y(
          c ? { "files[]": e } : e,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return s || o ? (r.setContentType("application/json", !1), Kt(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Z.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
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
  Z.headers[e] = {};
});
a.forEach(["post", "put", "patch"], function(e) {
  Z.headers[e] = a.merge(Vt);
});
const he = Z, Xt = a.toObjectSet([
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
]), Qt = (t) => {
  const e = {};
  let r, n, o;
  return t && t.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), r = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), !(!r || e[r] && Xt[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, Pe = Symbol("internals");
function k(t) {
  return t && String(t).trim().toLowerCase();
}
function W(t) {
  return t === !1 || t == null ? t : a.isArray(t) ? t.map(W) : String(t);
}
function Yt(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
function Zt(t) {
  return /^[-_a-zA-Z]+$/.test(t.trim());
}
function Te(t, e, r, n) {
  if (a.isFunction(n))
    return n.call(this, e, r);
  if (a.isString(e)) {
    if (a.isString(n))
      return e.indexOf(n) !== -1;
    if (a.isRegExp(n))
      return n.test(e);
  }
}
function er(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function tr(t, e) {
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
class ee {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const o = this;
    function s(c, p, u) {
      const l = k(p);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = a.findKey(o, l);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || p] = W(c));
    }
    const i = (c, p) => a.forEach(c, (u, l) => s(u, l, p));
    return a.isPlainObject(e) || e instanceof this.constructor ? i(e, r) : a.isString(e) && (e = e.trim()) && !Zt(e) ? i(Qt(e), r) : e != null && s(r, e, n), this;
  }
  get(e, r) {
    if (e = k(e), e) {
      const n = a.findKey(this, e);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return Yt(o);
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
      return !!(n && (!r || Te(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let o = !1;
    function s(i) {
      if (i = k(i), i) {
        const c = a.findKey(n, i);
        c && (!r || Te(n, n[c], c, r)) && (delete n[c], o = !0);
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
        r[i] = W(o), delete r[s];
        return;
      }
      const c = e ? er(s) : String(s).trim();
      c !== s && delete r[s], r[c] = W(o), n[c] = !0;
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
    const n = (this[Pe] = this[Pe] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const c = k(i);
      n[c] || (tr(o, i), n[c] = !0);
    }
    return a.isArray(e) ? e.forEach(s) : s(e), this;
  }
}
ee.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
a.freezeMethods(ee.prototype);
a.freezeMethods(ee);
const R = ee;
function te(t, e) {
  const r = this || he, n = e || r, o = R.from(n.headers);
  let s = n.data;
  return a.forEach(t, function(c) {
    s = c.call(r, s, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), s;
}
function Qe(t) {
  return !!(t && t.__CANCEL__);
}
function q(t, e, r) {
  m.call(this, t ?? "canceled", m.ERR_CANCELED, e, r), this.name = "CanceledError";
}
a.inherits(q, m, {
  __CANCEL__: !0
});
const rr = null;
function nr(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new m(
    "Request failed with status code " + r.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const or = w.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, o, s, i, c) {
        const p = [];
        p.push(r + "=" + encodeURIComponent(n)), a.isNumber(o) && p.push("expires=" + new Date(o).toGMTString()), a.isString(s) && p.push("path=" + s), a.isString(i) && p.push("domain=" + i), c === !0 && p.push("secure"), document.cookie = p.join("; ");
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
function sr(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function ir(t, e) {
  return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Ye(t, e) {
  return t && !sr(e) ? ir(t, e) : e;
}
const ar = w.isStandardBrowserEnv ? (
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
function cr(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function ur(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let o = 0, s = 0, i;
  return e = e !== void 0 ? e : 1e3, function(p) {
    const u = Date.now(), l = n[s];
    i || (i = u), r[o] = p, n[o] = u;
    let d = s, b = 0;
    for (; d !== o; )
      b += r[d++], d = d % t;
    if (o = (o + 1) % t, o === s && (s = (s + 1) % t), u - i < e)
      return;
    const E = l && u - l;
    return E ? Math.round(b * 1e3 / E) : void 0;
  };
}
function xe(t, e) {
  let r = 0;
  const n = ur(50, 250);
  return (o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, c = s - r, p = n(c), u = s <= i;
    r = s;
    const l = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: c,
      rate: p || void 0,
      estimated: p && i && u ? (i - s) / p : void 0,
      event: o
    };
    l[e ? "download" : "upload"] = !0, t(l);
  };
}
const lr = typeof XMLHttpRequest < "u", fr = lr && function(t) {
  return new Promise(function(r, n) {
    let o = t.data;
    const s = R.from(t.headers).normalize(), i = t.responseType;
    let c;
    function p() {
      t.cancelToken && t.cancelToken.unsubscribe(c), t.signal && t.signal.removeEventListener("abort", c);
    }
    a.isFormData(o) && (w.isStandardBrowserEnv || w.isStandardBrowserWebWorkerEnv) && s.setContentType(!1);
    let u = new XMLHttpRequest();
    if (t.auth) {
      const E = t.auth.username || "", f = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(E + ":" + f));
    }
    const l = Ye(t.baseURL, t.url);
    u.open(t.method.toUpperCase(), Ve(l, t.params, t.paramsSerializer), !0), u.timeout = t.timeout;
    function d() {
      if (!u)
        return;
      const E = R.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), y = {
        data: !i || i === "text" || i === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: E,
        config: t,
        request: u
      };
      nr(function(g) {
        r(g), p();
      }, function(g) {
        n(g), p();
      }, y), u = null;
    }
    if ("onloadend" in u ? u.onloadend = d : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, u.onabort = function() {
      u && (n(new m("Request aborted", m.ECONNABORTED, t, u)), u = null);
    }, u.onerror = function() {
      n(new m("Network Error", m.ERR_NETWORK, t, u)), u = null;
    }, u.ontimeout = function() {
      let f = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const y = t.transitional || Ke;
      t.timeoutErrorMessage && (f = t.timeoutErrorMessage), n(new m(
        f,
        y.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        t,
        u
      )), u = null;
    }, w.isStandardBrowserEnv) {
      const E = (t.withCredentials || ar(l)) && t.xsrfCookieName && or.read(t.xsrfCookieName);
      E && s.set(t.xsrfHeaderName, E);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in u && a.forEach(s.toJSON(), function(f, y) {
      u.setRequestHeader(y, f);
    }), a.isUndefined(t.withCredentials) || (u.withCredentials = !!t.withCredentials), i && i !== "json" && (u.responseType = t.responseType), typeof t.onDownloadProgress == "function" && u.addEventListener("progress", xe(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", xe(t.onUploadProgress)), (t.cancelToken || t.signal) && (c = (E) => {
      u && (n(!E || E.type ? new q(null, t, u) : E), u.abort(), u = null);
    }, t.cancelToken && t.cancelToken.subscribe(c), t.signal && (t.signal.aborted ? c() : t.signal.addEventListener("abort", c)));
    const b = cr(l);
    if (b && w.protocols.indexOf(b) === -1) {
      n(new m("Unsupported protocol " + b + ":", m.ERR_BAD_REQUEST, t));
      return;
    }
    u.send(o || null);
  });
}, z = {
  http: rr,
  xhr: fr
};
a.forEach(z, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const pr = {
  getAdapter: (t) => {
    t = a.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    for (let o = 0; o < e && (r = t[o], !(n = a.isString(r) ? z[r.toLowerCase()] : r)); o++)
      ;
    if (!n)
      throw n === !1 ? new m(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        a.hasOwnProp(z, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!a.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: z
};
function re(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new q(null, t);
}
function ve(t) {
  return re(t), t.headers = R.from(t.headers), t.data = te.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), pr.getAdapter(t.adapter || he.adapter)(t).then(function(n) {
    return re(t), n.data = te.call(
      t,
      t.transformResponse,
      n
    ), n.headers = R.from(n.headers), n;
  }, function(n) {
    return Qe(n) || (re(t), n && n.response && (n.response.data = te.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = R.from(n.response.headers))), Promise.reject(n);
  });
}
const Fe = (t) => t instanceof R ? t.toJSON() : t;
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
  const p = {
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
    headers: (u, l) => o(Fe(u), Fe(l), !0)
  };
  return a.forEach(Object.keys(t).concat(Object.keys(e)), function(l) {
    const d = p[l] || o, b = d(t[l], e[l], l);
    a.isUndefined(b) && d !== c || (r[l] = b);
  }), r;
}
const Ze = "1.2.5", me = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  me[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ne = {};
me.transitional = function(e, r, n) {
  function o(s, i) {
    return "[Axios v" + Ze + "] Transitional option '" + s + "'" + i + (n ? ". " + n : "");
  }
  return (s, i, c) => {
    if (e === !1)
      throw new m(
        o(i, " has been removed" + (r ? " in " + r : "")),
        m.ERR_DEPRECATED
      );
    return r && !Ne[i] && (Ne[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(s, i, c) : !0;
  };
};
function dr(t, e, r) {
  if (typeof t != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], i = e[s];
    if (i) {
      const c = t[s], p = c === void 0 || i(c, s, t);
      if (p !== !0)
        throw new m("option " + s + " must be " + p, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new m("Unknown option " + s, m.ERR_BAD_OPTION);
  }
}
const ce = {
  assertOptions: dr,
  validators: me
}, T = ce.validators;
class V {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Re(),
      response: new Re()
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
    n !== void 0 && ce.assertOptions(n, {
      silentJSONParsing: T.transitional(T.boolean),
      forcedJSONParsing: T.transitional(T.boolean),
      clarifyTimeoutError: T.transitional(T.boolean)
    }, !1), o !== void 0 && ce.assertOptions(o, {
      encode: T.function,
      serialize: T.function
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = s && a.merge(
      s.common,
      s[r.method]
    ), i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete s[f];
      }
    ), r.headers = R.concat(i, s);
    const c = [];
    let p = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(r) === !1 || (p = p && y.synchronous, c.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let l, d = 0, b;
    if (!p) {
      const f = [ve.bind(this), void 0];
      for (f.unshift.apply(f, c), f.push.apply(f, u), b = f.length, l = Promise.resolve(r); d < b; )
        l = l.then(f[d++], f[d++]);
      return l;
    }
    b = c.length;
    let E = r;
    for (d = 0; d < b; ) {
      const f = c[d++], y = c[d++];
      try {
        E = f(E);
      } catch (O) {
        y.call(this, O);
        break;
      }
    }
    try {
      l = ve.call(this, E);
    } catch (f) {
      return Promise.reject(f);
    }
    for (d = 0, b = u.length; d < b; )
      l = l.then(u[d++], u[d++]);
    return l;
  }
  getUri(e) {
    e = B(this.defaults, e);
    const r = Ye(e.baseURL, e.url);
    return Ve(r, e.params, e.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(e) {
  V.prototype[e] = function(r, n) {
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
  V.prototype[e] = r(), V.prototype[e + "Form"] = r(!0);
});
const G = V;
class be {
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
      token: new be(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
}
const yr = be;
function hr(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function mr(t) {
  return a.isObject(t) && t.isAxiosError === !0;
}
const ue = {
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
Object.entries(ue).forEach(([t, e]) => {
  ue[e] = t;
});
const br = ue;
function et(t) {
  const e = new G(t), r = De(G.prototype.request, e);
  return a.extend(r, G.prototype, e, { allOwnKeys: !0 }), a.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(o) {
    return et(B(t, o));
  }, r;
}
const A = et(he);
A.Axios = G;
A.CanceledError = q;
A.CancelToken = yr;
A.isCancel = Qe;
A.VERSION = Ze;
A.toFormData = Y;
A.AxiosError = m;
A.Cancel = A.CanceledError;
A.all = function(e) {
  return Promise.all(e);
};
A.spread = hr;
A.isAxiosError = mr;
A.mergeConfig = B;
A.AxiosHeaders = R;
A.formToJSON = (t) => Xe(a.isHTMLForm(t) ? new FormData(t) : t);
A.HttpStatusCode = br;
A.default = A;
const Er = A;
function Ar(t, e = {}) {
  const r = e.tokenName && localStorage.getItem(e.tokenName);
  r && typeof window < "u" && (t.headers[e.headerToken] = r);
}
function gr(t, e = {}) {
  e.auth && e.auth && (t.auth = e.auth);
}
const Ce = (t) => Promise.reject(t);
class Sr {
  constructor(e) {
    this.instance = e, this.interceptorsRequest = [], this.interceptorsResponse = [];
  }
  // 添加请求拦截器
  addRequestInterceptors(e, r = Ce) {
    this.interceptorsRequest.unshift({ success: e, error: r });
  }
  // 添加响应拦截器
  addResponseInterceptors(e, r = Ce) {
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
      return Ar(r, e), gr(r, e), r;
    });
  }
  // 过滤请求配置，这个方法应该是最后执行的响应拦截器
  getResponseDataInterceptor() {
    this.addResponseInterceptors((e) => e.data);
  }
}
var wr = function() {
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
}, Ue = typeof Symbol < "u" && Symbol, Or = wr, Rr = function() {
  return typeof Ue != "function" || typeof Symbol != "function" || typeof Ue("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Or();
}, Pr = "Function.prototype.bind called on incompatible ", ne = Array.prototype.slice, Tr = Object.prototype.toString, xr = "[object Function]", vr = function(e) {
  var r = this;
  if (typeof r != "function" || Tr.call(r) !== xr)
    throw new TypeError(Pr + r);
  for (var n = ne.call(arguments, 1), o, s = function() {
    if (this instanceof o) {
      var l = r.apply(
        this,
        n.concat(ne.call(arguments))
      );
      return Object(l) === l ? l : this;
    } else
      return r.apply(
        e,
        n.concat(ne.call(arguments))
      );
  }, i = Math.max(0, r.length - n.length), c = [], p = 0; p < i; p++)
    c.push("$" + p);
  if (o = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(s), r.prototype) {
    var u = function() {
    };
    u.prototype = r.prototype, o.prototype = new u(), u.prototype = null;
  }
  return o;
}, Fr = vr, Ee = Function.prototype.bind || Fr, Nr = Ee, Cr = Nr.call(Function.call, Object.prototype.hasOwnProperty), h, j = SyntaxError, tt = Function, I = TypeError, oe = function(t) {
  try {
    return tt('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, x = Object.getOwnPropertyDescriptor;
if (x)
  try {
    x({}, "");
  } catch {
    x = null;
  }
var se = function() {
  throw new I();
}, Ur = x ? function() {
  try {
    return arguments.callee, se;
  } catch {
    try {
      return x(arguments, "callee").get;
    } catch {
      return se;
    }
  }
}() : se, C = Rr(), S = Object.getPrototypeOf || function(t) {
  return t.__proto__;
}, U = {}, Ir = typeof Uint8Array > "u" ? h : S(Uint8Array), v = {
  "%AggregateError%": typeof AggregateError > "u" ? h : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? h : ArrayBuffer,
  "%ArrayIteratorPrototype%": C ? S([][Symbol.iterator]()) : h,
  "%AsyncFromSyncIteratorPrototype%": h,
  "%AsyncFunction%": U,
  "%AsyncGenerator%": U,
  "%AsyncGeneratorFunction%": U,
  "%AsyncIteratorPrototype%": U,
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
  "%Function%": tt,
  "%GeneratorFunction%": U,
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
  "%ThrowTypeError%": Ur,
  "%TypedArray%": Ir,
  "%TypeError%": I,
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
  var Br = S(S(t));
  v["%Error.prototype%"] = Br;
}
var jr = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = oe("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = oe("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = oe("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var o = t("%AsyncGenerator%");
    o && (r = S(o.prototype));
  }
  return v[e] = r, r;
}, Ie = {
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
}, $ = Ee, K = Cr, Dr = $.call(Function.call, Array.prototype.concat), _r = $.call(Function.apply, Array.prototype.splice), Be = $.call(Function.call, String.prototype.replace), X = $.call(Function.call, String.prototype.slice), kr = $.call(Function.call, RegExp.prototype.exec), Lr = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Mr = /\\(\\)?/g, qr = function(e) {
  var r = X(e, 0, 1), n = X(e, -1);
  if (r === "%" && n !== "%")
    throw new j("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new j("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return Be(e, Lr, function(s, i, c, p) {
    o[o.length] = c ? Be(p, Mr, "$1") : i || s;
  }), o;
}, $r = function(e, r) {
  var n = e, o;
  if (K(Ie, n) && (o = Ie[n], n = "%" + o[0] + "%"), K(v, n)) {
    var s = v[n];
    if (s === U && (s = jr(n)), typeof s > "u" && !r)
      throw new I("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: n,
      value: s
    };
  }
  throw new j("intrinsic " + e + " does not exist!");
}, Ae = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new I("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new I('"allowMissing" argument must be a boolean');
  if (kr(/^%?[^%]*%?$/, e) === null)
    throw new j("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = qr(e), o = n.length > 0 ? n[0] : "", s = $r("%" + o + "%", r), i = s.name, c = s.value, p = !1, u = s.alias;
  u && (o = u[0], _r(n, Dr([0, 1], u)));
  for (var l = 1, d = !0; l < n.length; l += 1) {
    var b = n[l], E = X(b, 0, 1), f = X(b, -1);
    if ((E === '"' || E === "'" || E === "`" || f === '"' || f === "'" || f === "`") && E !== f)
      throw new j("property names with quotes must have matching quotes");
    if ((b === "constructor" || !d) && (p = !0), o += "." + b, i = "%" + o + "%", K(v, i))
      c = v[i];
    else if (c != null) {
      if (!(b in c)) {
        if (!r)
          throw new I("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (x && l + 1 >= n.length) {
        var y = x(c, b);
        d = !!y, d && "get" in y && !("originalValue" in y.get) ? c = y.get : c = c[b];
      } else
        d = K(c, b), c = c[b];
      d && !p && (v[i] = c);
    }
  }
  return c;
}, le = {}, Hr = {
  get exports() {
    return le;
  },
  set exports(t) {
    le = t;
  }
};
(function(t) {
  var e = Ee, r = Ae, n = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), s = r("%Reflect.apply%", !0) || e.call(o, n), i = r("%Object.getOwnPropertyDescriptor%", !0), c = r("%Object.defineProperty%", !0), p = r("%Math.max%");
  if (c)
    try {
      c({}, "a", { value: 1 });
    } catch {
      c = null;
    }
  t.exports = function(d) {
    var b = s(e, o, arguments);
    if (i && c) {
      var E = i(b, "length");
      E.configurable && c(
        b,
        "length",
        { value: 1 + p(0, d.length - (arguments.length - 1)) }
      );
    }
    return b;
  };
  var u = function() {
    return s(e, n, arguments);
  };
  c ? c(t.exports, "apply", { value: u }) : t.exports.apply = u;
})(Hr);
var rt = Ae, nt = le, Jr = nt(rt("String.prototype.indexOf")), Wr = function(e, r) {
  var n = rt(e, !!r);
  return typeof n == "function" && Jr(e, ".prototype.") > -1 ? nt(n) : n;
}, ge = Ae, _ = Wr;
ge("%TypeError%");
ge("%WeakMap%", !0);
ge("%Map%", !0);
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
class zr {
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
      type: "json"
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
const Gr = {
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
class je {
  constructor(e = {}) {
    this.merge = new zr(), this.instance = Er.create(this.merge.getAxiosDefaultOptions(e.axiosOptions)), this.interceptor = new Sr(this.instance), this.interceptor.addUtilsConfig(e);
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
    return Gr[r](e), e;
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
    return this.interceptor.useAllInterceptors(), function(r) {
      return r = e.setConfigFunctionLine(r), e.instance(r);
    };
  }
}
class Vr {
  constructor(e) {
    this.options = e, this.httpFactory = new je(e);
  }
  createRequestFunction(e = {}) {
    return new je(Object.assign(e, this.options)).create();
  }
  install(e) {
    const r = this.httpFactory.create();
    e.prototype ? e.prototype.$http = r : e.config.globalProperties.$http = r;
  }
}
export {
  Vr as default
};
//# sourceMappingURL=masquesRequest.js.map
