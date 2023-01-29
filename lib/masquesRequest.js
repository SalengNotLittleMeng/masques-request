function Qt(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Xt } = Object.prototype, { getPrototypeOf: at } = Object, st = ((t) => (e) => {
  const r = Xt.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), I = (t) => (t = t.toLowerCase(), (e) => st(e) === t), Ce = (t) => (e) => typeof e === t, { isArray: oe } = Array, he = Ce("undefined");
function Fr(t) {
  return t !== null && !he(t) && t.constructor !== null && !he(t.constructor) && G(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Yt = I("ArrayBuffer");
function Cr(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Yt(t.buffer), e;
}
const Dr = Ce("string"), G = Ce("function"), Zt = Ce("number"), ct = (t) => t !== null && typeof t == "object", Br = (t) => t === !0 || t === !1, Oe = (t) => {
  if (st(t) !== "object")
    return !1;
  const e = at(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, $r = I("Date"), Ir = I("File"), _r = I("Blob"), Ur = I("FileList"), Mr = (t) => ct(t) && G(t.pipe), Lr = (t) => {
  const e = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || Xt.call(t) === e || G(t.toString) && t.toString() === e);
}, kr = I("URLSearchParams"), jr = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function me(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, o;
  if (typeof t != "object" && (t = [t]), oe(t))
    for (n = 0, o = t.length; n < o; n++)
      e.call(null, t[n], n, t);
  else {
    const i = r ? Object.getOwnPropertyNames(t) : Object.keys(t), a = i.length;
    let s;
    for (n = 0; n < a; n++)
      s = i[n], e.call(null, t[s], s, t);
  }
}
function er(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], e === o.toLowerCase())
      return o;
  return null;
}
const tr = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), rr = (t) => !he(t) && t !== tr;
function Ge() {
  const { caseless: t } = rr(this) && this || {}, e = {}, r = (n, o) => {
    const i = t && er(e, o) || o;
    Oe(e[i]) && Oe(n) ? e[i] = Ge(e[i], n) : Oe(n) ? e[i] = Ge({}, n) : oe(n) ? e[i] = n.slice() : e[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && me(arguments[n], r);
  return e;
}
const qr = (t, e, r, { allOwnKeys: n } = {}) => (me(e, (o, i) => {
  r && G(o) ? t[i] = Qt(o, r) : t[i] = o;
}, { allOwnKeys: n }), t), Hr = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Wr = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, zr = (t, e, r, n) => {
  let o, i, a;
  const s = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
      a = o[i], (!n || n(a, t, e)) && !s[a] && (e[a] = t[a], s[a] = !0);
    t = r !== !1 && at(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Jr = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, Vr = (t) => {
  if (!t)
    return null;
  if (oe(t))
    return t;
  let e = t.length;
  if (!Zt(e))
    return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Gr = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && at(Uint8Array)), Kr = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    e.call(t, i[0], i[1]);
  }
}, Qr = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, Xr = I("HTMLFormElement"), Yr = (t) => t.toLowerCase().replace(
  /[_-\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Ot = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Zr = I("RegExp"), nr = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  me(r, (o, i) => {
    e(o, i, t) !== !1 && (n[i] = o);
  }), Object.defineProperties(t, n);
}, en = (t) => {
  nr(t, (e, r) => {
    if (G(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (G(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, tn = (t, e) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return oe(t) ? n(t) : n(String(t).split(e)), r;
}, rn = () => {
}, nn = (t, e) => (t = +t, Number.isFinite(t) ? t : e), on = (t) => {
  const e = new Array(10), r = (n, o) => {
    if (ct(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[o] = n;
        const i = oe(n) ? [] : {};
        return me(n, (a, s) => {
          const u = r(a, o + 1);
          !he(u) && (i[s] = u);
        }), e[o] = void 0, i;
      }
    }
    return n;
  };
  return r(t, 0);
}, l = {
  isArray: oe,
  isArrayBuffer: Yt,
  isBuffer: Fr,
  isFormData: Lr,
  isArrayBufferView: Cr,
  isString: Dr,
  isNumber: Zt,
  isBoolean: Br,
  isObject: ct,
  isPlainObject: Oe,
  isUndefined: he,
  isDate: $r,
  isFile: Ir,
  isBlob: _r,
  isRegExp: Zr,
  isFunction: G,
  isStream: Mr,
  isURLSearchParams: kr,
  isTypedArray: Gr,
  isFileList: Ur,
  forEach: me,
  merge: Ge,
  extend: qr,
  trim: jr,
  stripBOM: Hr,
  inherits: Wr,
  toFlatObject: zr,
  kindOf: st,
  kindOfTest: I,
  endsWith: Jr,
  toArray: Vr,
  forEachEntry: Kr,
  matchAll: Qr,
  isHTMLForm: Xr,
  hasOwnProperty: Ot,
  hasOwnProp: Ot,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: nr,
  freezeMethods: en,
  toObjectSet: tn,
  toCamelCase: Yr,
  noop: rn,
  toFiniteNumber: nn,
  findKey: er,
  global: tr,
  isContextDefined: rr,
  toJSONObject: on
};
function S(t, e, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
l.inherits(S, Error, {
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
      config: l.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const or = S.prototype, ir = {};
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
  ir[t] = { value: t };
});
Object.defineProperties(S, ir);
Object.defineProperty(or, "isAxiosError", { value: !0 });
S.from = (t, e, r, n, o, i) => {
  const a = Object.create(or);
  return l.toFlatObject(t, a, function(u) {
    return u !== Error.prototype;
  }, (s) => s !== "isAxiosError"), S.call(a, t.message, e, r, n, o), a.cause = t, a.name = t.name, i && Object.assign(a, i), a;
};
function an(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      if (this instanceof n) {
        var o = [null];
        o.push.apply(o, arguments);
        var i = Function.bind.apply(e, o);
        return new i();
      }
      return e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var sn = typeof self == "object" ? self.FormData : window.FormData;
const cn = sn;
function Ke(t) {
  return l.isPlainObject(t) || l.isArray(t);
}
function ar(t) {
  return l.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Et(t, e, r) {
  return t ? t.concat(e).map(function(o, i) {
    return o = ar(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : e;
}
function un(t) {
  return l.isArray(t) && !t.some(Ke);
}
const ln = l.toFlatObject(l, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function fn(t) {
  return t && l.isFunction(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator];
}
function De(t, e, r) {
  if (!l.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new (cn || FormData)(), r = l.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, b) {
    return !l.isUndefined(b[m]);
  });
  const n = r.metaTokens, o = r.visitor || f, i = r.dots, a = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && fn(e);
  if (!l.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null)
      return "";
    if (l.isDate(p))
      return p.toISOString();
    if (!u && l.isBlob(p))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(p) || l.isTypedArray(p) ? u && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function f(p, m, b) {
    let g = p;
    if (p && !b && typeof p == "object") {
      if (l.endsWith(m, "{}"))
        m = n ? m : m.slice(0, -2), p = JSON.stringify(p);
      else if (l.isArray(p) && un(p) || l.isFileList(p) || l.endsWith(m, "[]") && (g = l.toArray(p)))
        return m = ar(m), g.forEach(function(P, _) {
          !(l.isUndefined(P) || P === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Et([m], _, i) : a === null ? m : m + "[]",
            c(P)
          );
        }), !1;
    }
    return Ke(p) ? !0 : (e.append(Et(b, m, i), c(p)), !1);
  }
  const y = [], d = Object.assign(ln, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: Ke
  });
  function h(p, m) {
    if (!l.isUndefined(p)) {
      if (y.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      y.push(p), l.forEach(p, function(g, A) {
        (!(l.isUndefined(g) || g === null) && o.call(
          e,
          g,
          l.isString(A) ? A.trim() : A,
          m,
          d
        )) === !0 && h(g, m ? m.concat(A) : [A]);
      }), y.pop();
    }
  }
  if (!l.isObject(t))
    throw new TypeError("data must be an object");
  return h(t), e;
}
function At(t) {
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
function ut(t, e) {
  this._pairs = [], t && De(t, this, e);
}
const sr = ut.prototype;
sr.append = function(e, r) {
  this._pairs.push([e, r]);
};
sr.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, At);
  } : At;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function pn(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function cr(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || pn, o = r && r.serialize;
  let i;
  if (o ? i = o(e, r) : i = l.isURLSearchParams(e) ? e.toString() : new ut(e, r).toString(n), i) {
    const a = t.indexOf("#");
    a !== -1 && (t = t.slice(0, a)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class yn {
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
    l.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const Rt = yn, ur = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, dn = typeof URLSearchParams < "u" ? URLSearchParams : ut, hn = FormData, mn = (() => {
  let t;
  return typeof navigator < "u" && ((t = navigator.product) === "ReactNative" || t === "NativeScript" || t === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), gn = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), C = {
  isBrowser: !0,
  classes: {
    URLSearchParams: dn,
    FormData: hn,
    Blob
  },
  isStandardBrowserEnv: mn,
  isStandardBrowserWebWorkerEnv: gn,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function vn(t, e) {
  return De(t, new C.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, i) {
      return C.isNode && l.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Sn(t) {
  return l.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function bn(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], e[i] = t[i];
  return e;
}
function lr(t) {
  function e(r, n, o, i) {
    let a = r[i++];
    const s = Number.isFinite(+a), u = i >= r.length;
    return a = !a && l.isArray(o) ? o.length : a, u ? (l.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !s) : ((!o[a] || !l.isObject(o[a])) && (o[a] = []), e(r, n, o[a], i) && l.isArray(o[a]) && (o[a] = bn(o[a])), !s);
  }
  if (l.isFormData(t) && l.isFunction(t.entries)) {
    const r = {};
    return l.forEachEntry(t, (n, o) => {
      e(Sn(n), o, r, 0);
    }), r;
  }
  return null;
}
const wn = {
  "Content-Type": void 0
};
function On(t, e, r) {
  if (l.isString(t))
    try {
      return (e || JSON.parse)(t), l.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const Be = {
  transitional: ur,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = l.isObject(e);
    if (i && l.isHTMLForm(e) && (e = new FormData(e)), l.isFormData(e))
      return o && o ? JSON.stringify(lr(e)) : e;
    if (l.isArrayBuffer(e) || l.isBuffer(e) || l.isStream(e) || l.isFile(e) || l.isBlob(e))
      return e;
    if (l.isArrayBufferView(e))
      return e.buffer;
    if (l.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return vn(e, this.formSerializer).toString();
      if ((s = l.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return De(
          s ? { "files[]": e } : e,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), On(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Be.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (e && l.isString(e) && (n && !this.responseType || o)) {
      const a = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? S.from(s, S.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: C.classes.FormData,
    Blob: C.classes.Blob
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
l.forEach(["delete", "get", "head"], function(e) {
  Be.headers[e] = {};
});
l.forEach(["post", "put", "patch"], function(e) {
  Be.headers[e] = l.merge(wn);
});
const lt = Be, En = l.toObjectSet([
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
]), An = (t) => {
  const e = {};
  let r, n, o;
  return t && t.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || e[r] && En[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, Pt = Symbol("internals");
function le(t) {
  return t && String(t).trim().toLowerCase();
}
function Ee(t) {
  return t === !1 || t == null ? t : l.isArray(t) ? t.map(Ee) : String(t);
}
function Rn(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
function Pn(t) {
  return /^[-_a-zA-Z]+$/.test(t.trim());
}
function xt(t, e, r, n) {
  if (l.isFunction(n))
    return n.call(this, e, r);
  if (l.isString(e)) {
    if (l.isString(n))
      return e.indexOf(n) !== -1;
    if (l.isRegExp(n))
      return n.test(e);
  }
}
function xn(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function Nn(t, e) {
  const r = l.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(o, i, a) {
        return this[n].call(this, e, o, i, a);
      },
      configurable: !0
    });
  });
}
class $e {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const o = this;
    function i(s, u, c) {
      const f = le(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const y = l.findKey(o, f);
      (!y || o[y] === void 0 || c === !0 || c === void 0 && o[y] !== !1) && (o[y || u] = Ee(s));
    }
    const a = (s, u) => l.forEach(s, (c, f) => i(c, f, u));
    return l.isPlainObject(e) || e instanceof this.constructor ? a(e, r) : l.isString(e) && (e = e.trim()) && !Pn(e) ? a(An(e), r) : e != null && i(r, e, n), this;
  }
  get(e, r) {
    if (e = le(e), e) {
      const n = l.findKey(this, e);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return Rn(o);
        if (l.isFunction(r))
          return r.call(this, o, n);
        if (l.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = le(e), e) {
      const n = l.findKey(this, e);
      return !!(n && (!r || xt(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let o = !1;
    function i(a) {
      if (a = le(a), a) {
        const s = l.findKey(n, a);
        s && (!r || xt(n, n[s], s, r)) && (delete n[s], o = !0);
      }
    }
    return l.isArray(e) ? e.forEach(i) : i(e), o;
  }
  clear() {
    return Object.keys(this).forEach(this.delete.bind(this));
  }
  normalize(e) {
    const r = this, n = {};
    return l.forEach(this, (o, i) => {
      const a = l.findKey(n, i);
      if (a) {
        r[a] = Ee(o), delete r[i];
        return;
      }
      const s = e ? xn(i) : String(i).trim();
      s !== i && delete r[i], r[s] = Ee(o), n[s] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = e && l.isArray(n) ? n.join(", ") : n);
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
    const n = (this[Pt] = this[Pt] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = le(a);
      n[s] || (Nn(o, a), n[s] = !0);
    }
    return l.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
$e.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
l.freezeMethods($e.prototype);
l.freezeMethods($e);
const $ = $e;
function _e(t, e) {
  const r = this || lt, n = e || r, o = $.from(n.headers);
  let i = n.data;
  return l.forEach(t, function(s) {
    i = s.call(r, i, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), i;
}
function fr(t) {
  return !!(t && t.__CANCEL__);
}
function ge(t, e, r) {
  S.call(this, t ?? "canceled", S.ERR_CANCELED, e, r), this.name = "CanceledError";
}
l.inherits(ge, S, {
  __CANCEL__: !0
});
const Tn = null;
function Fn(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new S(
    "Request failed with status code " + r.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Cn = C.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, o, i, a, s) {
        const u = [];
        u.push(r + "=" + encodeURIComponent(n)), l.isNumber(o) && u.push("expires=" + new Date(o).toGMTString()), l.isString(i) && u.push("path=" + i), l.isString(a) && u.push("domain=" + a), s === !0 && u.push("secure"), document.cookie = u.join("; ");
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
function Dn(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Bn(t, e) {
  return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function pr(t, e) {
  return t && !Dn(e) ? Bn(t, e) : e;
}
const $n = C.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function o(i) {
      let a = i;
      return e && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
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
    return n = o(window.location.href), function(a) {
      const s = l.isString(a) ? o(a) : a;
      return s.protocol === n.protocol && s.host === n.host;
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
function In(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function _n(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let o = 0, i = 0, a;
  return e = e !== void 0 ? e : 1e3, function(u) {
    const c = Date.now(), f = n[i];
    a || (a = c), r[o] = u, n[o] = c;
    let y = i, d = 0;
    for (; y !== o; )
      d += r[y++], y = y % t;
    if (o = (o + 1) % t, o === i && (i = (i + 1) % t), c - a < e)
      return;
    const h = f && c - f;
    return h ? Math.round(d * 1e3 / h) : void 0;
  };
}
function Nt(t, e) {
  let r = 0;
  const n = _n(50, 250);
  return (o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, s = i - r, u = n(s), c = i <= a;
    r = i;
    const f = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && a && c ? (a - i) / u : void 0,
      event: o
    };
    f[e ? "download" : "upload"] = !0, t(f);
  };
}
const Un = typeof XMLHttpRequest < "u", Mn = Un && function(t) {
  return new Promise(function(r, n) {
    let o = t.data;
    const i = $.from(t.headers).normalize(), a = t.responseType;
    let s;
    function u() {
      t.cancelToken && t.cancelToken.unsubscribe(s), t.signal && t.signal.removeEventListener("abort", s);
    }
    l.isFormData(o) && (C.isStandardBrowserEnv || C.isStandardBrowserWebWorkerEnv) && i.setContentType(!1);
    let c = new XMLHttpRequest();
    if (t.auth) {
      const h = t.auth.username || "", p = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(h + ":" + p));
    }
    const f = pr(t.baseURL, t.url);
    c.open(t.method.toUpperCase(), cr(f, t.params, t.paramsSerializer), !0), c.timeout = t.timeout;
    function y() {
      if (!c)
        return;
      const h = $.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), m = {
        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: h,
        config: t,
        request: c
      };
      Fn(function(g) {
        r(g), u();
      }, function(g) {
        n(g), u();
      }, m), c = null;
    }
    if ("onloadend" in c ? c.onloadend = y : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, c.onabort = function() {
      c && (n(new S("Request aborted", S.ECONNABORTED, t, c)), c = null);
    }, c.onerror = function() {
      n(new S("Network Error", S.ERR_NETWORK, t, c)), c = null;
    }, c.ontimeout = function() {
      let p = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const m = t.transitional || ur;
      t.timeoutErrorMessage && (p = t.timeoutErrorMessage), n(new S(
        p,
        m.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        t,
        c
      )), c = null;
    }, C.isStandardBrowserEnv) {
      const h = (t.withCredentials || $n(f)) && t.xsrfCookieName && Cn.read(t.xsrfCookieName);
      h && i.set(t.xsrfHeaderName, h);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in c && l.forEach(i.toJSON(), function(p, m) {
      c.setRequestHeader(m, p);
    }), l.isUndefined(t.withCredentials) || (c.withCredentials = !!t.withCredentials), a && a !== "json" && (c.responseType = t.responseType), typeof t.onDownloadProgress == "function" && c.addEventListener("progress", Nt(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Nt(t.onUploadProgress)), (t.cancelToken || t.signal) && (s = (h) => {
      c && (n(!h || h.type ? new ge(null, t, c) : h), c.abort(), c = null);
    }, t.cancelToken && t.cancelToken.subscribe(s), t.signal && (t.signal.aborted ? s() : t.signal.addEventListener("abort", s)));
    const d = In(f);
    if (d && C.protocols.indexOf(d) === -1) {
      n(new S("Unsupported protocol " + d + ":", S.ERR_BAD_REQUEST, t));
      return;
    }
    c.send(o || null);
  });
}, Ae = {
  http: Tn,
  xhr: Mn
};
l.forEach(Ae, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Ln = {
  getAdapter: (t) => {
    t = l.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    for (let o = 0; o < e && (r = t[o], !(n = l.isString(r) ? Ae[r.toLowerCase()] : r)); o++)
      ;
    if (!n)
      throw n === !1 ? new S(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        l.hasOwnProp(Ae, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!l.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: Ae
};
function Ue(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new ge(null, t);
}
function Tt(t) {
  return Ue(t), t.headers = $.from(t.headers), t.data = _e.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Ln.getAdapter(t.adapter || lt.adapter)(t).then(function(n) {
    return Ue(t), n.data = _e.call(
      t,
      t.transformResponse,
      n
    ), n.headers = $.from(n.headers), n;
  }, function(n) {
    return fr(n) || (Ue(t), n && n.response && (n.response.data = _e.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = $.from(n.response.headers))), Promise.reject(n);
  });
}
const Ft = (t) => t instanceof $ ? t.toJSON() : t;
function ee(t, e) {
  e = e || {};
  const r = {};
  function n(c, f, y) {
    return l.isPlainObject(c) && l.isPlainObject(f) ? l.merge.call({ caseless: y }, c, f) : l.isPlainObject(f) ? l.merge({}, f) : l.isArray(f) ? f.slice() : f;
  }
  function o(c, f, y) {
    if (l.isUndefined(f)) {
      if (!l.isUndefined(c))
        return n(void 0, c, y);
    } else
      return n(c, f, y);
  }
  function i(c, f) {
    if (!l.isUndefined(f))
      return n(void 0, f);
  }
  function a(c, f) {
    if (l.isUndefined(f)) {
      if (!l.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, f);
  }
  function s(c, f, y) {
    if (y in e)
      return n(c, f);
    if (y in t)
      return n(void 0, c);
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (c, f) => o(Ft(c), Ft(f), !0)
  };
  return l.forEach(Object.keys(t).concat(Object.keys(e)), function(f) {
    const y = u[f] || o, d = y(t[f], e[f], f);
    l.isUndefined(d) && y !== s || (r[f] = d);
  }), r;
}
const yr = "1.2.5", ft = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  ft[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ct = {};
ft.transitional = function(e, r, n) {
  function o(i, a) {
    return "[Axios v" + yr + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, s) => {
    if (e === !1)
      throw new S(
        o(a, " has been removed" + (r ? " in " + r : "")),
        S.ERR_DEPRECATED
      );
    return r && !Ct[a] && (Ct[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(i, a, s) : !0;
  };
};
function kn(t, e, r) {
  if (typeof t != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], a = e[i];
    if (a) {
      const s = t[i], u = s === void 0 || a(s, i, t);
      if (u !== !0)
        throw new S("option " + i + " must be " + u, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new S("Unknown option " + i, S.ERR_BAD_OPTION);
  }
}
const Qe = {
  assertOptions: kn,
  validators: ft
}, L = Qe.validators;
class Pe {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Rt(),
      response: new Rt()
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
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = ee(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && Qe.assertOptions(n, {
      silentJSONParsing: L.transitional(L.boolean),
      forcedJSONParsing: L.transitional(L.boolean),
      clarifyTimeoutError: L.transitional(L.boolean)
    }, !1), o !== void 0 && Qe.assertOptions(o, {
      encode: L.function,
      serialize: L.function
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = i && l.merge(
      i.common,
      i[r.method]
    ), a && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete i[p];
      }
    ), r.headers = $.concat(a, i);
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(r) === !1 || (u = u && m.synchronous, s.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let f, y = 0, d;
    if (!u) {
      const p = [Tt.bind(this), void 0];
      for (p.unshift.apply(p, s), p.push.apply(p, c), d = p.length, f = Promise.resolve(r); y < d; )
        f = f.then(p[y++], p[y++]);
      return f;
    }
    d = s.length;
    let h = r;
    for (y = 0; y < d; ) {
      const p = s[y++], m = s[y++];
      try {
        h = p(h);
      } catch (b) {
        m.call(this, b);
        break;
      }
    }
    try {
      f = Tt.call(this, h);
    } catch (p) {
      return Promise.reject(p);
    }
    for (y = 0, d = c.length; y < d; )
      f = f.then(c[y++], c[y++]);
    return f;
  }
  getUri(e) {
    e = ee(this.defaults, e);
    const r = pr(e.baseURL, e.url);
    return cr(r, e.params, e.paramsSerializer);
  }
}
l.forEach(["delete", "get", "head", "options"], function(e) {
  Pe.prototype[e] = function(r, n) {
    return this.request(ee(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(i, a, s) {
      return this.request(ee(s || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  Pe.prototype[e] = r(), Pe.prototype[e + "Form"] = r(!0);
});
const Re = Pe;
class pt {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const a = new Promise((s) => {
        n.subscribe(s), i = s;
      }).then(o);
      return a.cancel = function() {
        n.unsubscribe(i);
      }, a;
    }, e(function(i, a, s) {
      n.reason || (n.reason = new ge(i, a, s), r(n.reason));
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
      token: new pt(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
}
const jn = pt;
function qn(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Hn(t) {
  return l.isObject(t) && t.isAxiosError === !0;
}
const Xe = {
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
Object.entries(Xe).forEach(([t, e]) => {
  Xe[e] = t;
});
const Wn = Xe;
function dr(t) {
  const e = new Re(t), r = Qt(Re.prototype.request, e);
  return l.extend(r, Re.prototype, e, { allOwnKeys: !0 }), l.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(o) {
    return dr(ee(t, o));
  }, r;
}
const w = dr(lt);
w.Axios = Re;
w.CanceledError = ge;
w.CancelToken = jn;
w.isCancel = fr;
w.VERSION = yr;
w.toFormData = De;
w.AxiosError = S;
w.Cancel = w.CanceledError;
w.all = function(e) {
  return Promise.all(e);
};
w.spread = qn;
w.isAxiosError = Hn;
w.mergeConfig = ee;
w.AxiosHeaders = $;
w.formToJSON = (t) => lr(l.isHTMLForm(t) ? new FormData(t) : t);
w.HttpStatusCode = Wn;
w.default = w;
const zn = w;
function Jn(t, e = {}) {
  const r = e.tokenName && localStorage.getItem(e.tokenName);
  r && typeof window < "u" && (t.headers[e.headerToken] = r);
}
function Vn(t, e = {}) {
  e.auth && e.auth && (t.auth = e.auth);
}
const Dt = (t) => Promise.reject(t);
class Gn {
  constructor(e) {
    this.instance = e;
  }
  request(e, r = Dt) {
    this.instance.interceptors.request.use(e, r);
  }
  response(e, r = Dt) {
    this.instance.interceptors.response.use(e, r);
  }
  // 添加工具配置的拦截器
  addUtilsConfig(e = {}) {
    this.request(function(r) {
      return Jn(r, e), Vn(r, e), r;
    });
  }
}
var Kn = function() {
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
  var i = Object.getOwnPropertySymbols(e);
  if (i.length !== 1 || i[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var a = Object.getOwnPropertyDescriptor(e, r);
    if (a.value !== o || a.enumerable !== !0)
      return !1;
  }
  return !0;
}, Bt = typeof Symbol < "u" && Symbol, Qn = Kn, Xn = function() {
  return typeof Bt != "function" || typeof Symbol != "function" || typeof Bt("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Qn();
}, Yn = "Function.prototype.bind called on incompatible ", Me = Array.prototype.slice, Zn = Object.prototype.toString, eo = "[object Function]", to = function(e) {
  var r = this;
  if (typeof r != "function" || Zn.call(r) !== eo)
    throw new TypeError(Yn + r);
  for (var n = Me.call(arguments, 1), o, i = function() {
    if (this instanceof o) {
      var f = r.apply(
        this,
        n.concat(Me.call(arguments))
      );
      return Object(f) === f ? f : this;
    } else
      return r.apply(
        e,
        n.concat(Me.call(arguments))
      );
  }, a = Math.max(0, r.length - n.length), s = [], u = 0; u < a; u++)
    s.push("$" + u);
  if (o = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(i), r.prototype) {
    var c = function() {
    };
    c.prototype = r.prototype, o.prototype = new c(), c.prototype = null;
  }
  return o;
}, ro = to, yt = Function.prototype.bind || ro, no = yt, oo = no.call(Function.call, Object.prototype.hasOwnProperty), v, te = SyntaxError, hr = Function, Z = TypeError, Le = function(t) {
  try {
    return hr('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, J = Object.getOwnPropertyDescriptor;
if (J)
  try {
    J({}, "");
  } catch {
    J = null;
  }
var ke = function() {
  throw new Z();
}, io = J ? function() {
  try {
    return arguments.callee, ke;
  } catch {
    try {
      return J(arguments, "callee").get;
    } catch {
      return ke;
    }
  }
}() : ke, X = Xn(), T = Object.getPrototypeOf || function(t) {
  return t.__proto__;
}, Y = {}, ao = typeof Uint8Array > "u" ? v : T(Uint8Array), V = {
  "%AggregateError%": typeof AggregateError > "u" ? v : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? v : ArrayBuffer,
  "%ArrayIteratorPrototype%": X ? T([][Symbol.iterator]()) : v,
  "%AsyncFromSyncIteratorPrototype%": v,
  "%AsyncFunction%": Y,
  "%AsyncGenerator%": Y,
  "%AsyncGeneratorFunction%": Y,
  "%AsyncIteratorPrototype%": Y,
  "%Atomics%": typeof Atomics > "u" ? v : Atomics,
  "%BigInt%": typeof BigInt > "u" ? v : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? v : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? v : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? v : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? v : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? v : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? v : FinalizationRegistry,
  "%Function%": hr,
  "%GeneratorFunction%": Y,
  "%Int8Array%": typeof Int8Array > "u" ? v : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? v : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? v : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": X ? T(T([][Symbol.iterator]())) : v,
  "%JSON%": typeof JSON == "object" ? JSON : v,
  "%Map%": typeof Map > "u" ? v : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !X ? v : T((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? v : Promise,
  "%Proxy%": typeof Proxy > "u" ? v : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? v : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? v : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !X ? v : T((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? v : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": X ? T(""[Symbol.iterator]()) : v,
  "%Symbol%": X ? Symbol : v,
  "%SyntaxError%": te,
  "%ThrowTypeError%": io,
  "%TypedArray%": ao,
  "%TypeError%": Z,
  "%Uint8Array%": typeof Uint8Array > "u" ? v : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? v : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? v : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? v : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? v : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? v : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? v : WeakSet
};
try {
  null.error;
} catch (t) {
  var so = T(T(t));
  V["%Error.prototype%"] = so;
}
var co = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = Le("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = Le("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = Le("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var o = t("%AsyncGenerator%");
    o && (r = T(o.prototype));
  }
  return V[e] = r, r;
}, $t = {
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
}, ve = yt, xe = oo, uo = ve.call(Function.call, Array.prototype.concat), lo = ve.call(Function.apply, Array.prototype.splice), It = ve.call(Function.call, String.prototype.replace), Ne = ve.call(Function.call, String.prototype.slice), fo = ve.call(Function.call, RegExp.prototype.exec), po = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, yo = /\\(\\)?/g, ho = function(e) {
  var r = Ne(e, 0, 1), n = Ne(e, -1);
  if (r === "%" && n !== "%")
    throw new te("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new te("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return It(e, po, function(i, a, s, u) {
    o[o.length] = s ? It(u, yo, "$1") : a || i;
  }), o;
}, mo = function(e, r) {
  var n = e, o;
  if (xe($t, n) && (o = $t[n], n = "%" + o[0] + "%"), xe(V, n)) {
    var i = V[n];
    if (i === Y && (i = co(n)), typeof i > "u" && !r)
      throw new Z("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: n,
      value: i
    };
  }
  throw new te("intrinsic " + e + " does not exist!");
}, dt = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new Z("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Z('"allowMissing" argument must be a boolean');
  if (fo(/^%?[^%]*%?$/, e) === null)
    throw new te("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = ho(e), o = n.length > 0 ? n[0] : "", i = mo("%" + o + "%", r), a = i.name, s = i.value, u = !1, c = i.alias;
  c && (o = c[0], lo(n, uo([0, 1], c)));
  for (var f = 1, y = !0; f < n.length; f += 1) {
    var d = n[f], h = Ne(d, 0, 1), p = Ne(d, -1);
    if ((h === '"' || h === "'" || h === "`" || p === '"' || p === "'" || p === "`") && h !== p)
      throw new te("property names with quotes must have matching quotes");
    if ((d === "constructor" || !y) && (u = !0), o += "." + d, a = "%" + o + "%", xe(V, a))
      s = V[a];
    else if (s != null) {
      if (!(d in s)) {
        if (!r)
          throw new Z("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (J && f + 1 >= n.length) {
        var m = J(s, d);
        y = !!m, y && "get" in m && !("originalValue" in m.get) ? s = m.get : s = s[d];
      } else
        y = xe(s, d), s = s[d];
      y && !u && (V[a] = s);
    }
  }
  return s;
}, Ye = {}, go = {
  get exports() {
    return Ye;
  },
  set exports(t) {
    Ye = t;
  }
};
(function(t) {
  var e = yt, r = dt, n = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), i = r("%Reflect.apply%", !0) || e.call(o, n), a = r("%Object.getOwnPropertyDescriptor%", !0), s = r("%Object.defineProperty%", !0), u = r("%Math.max%");
  if (s)
    try {
      s({}, "a", { value: 1 });
    } catch {
      s = null;
    }
  t.exports = function(y) {
    var d = i(e, o, arguments);
    if (a && s) {
      var h = a(d, "length");
      h.configurable && s(
        d,
        "length",
        { value: 1 + u(0, y.length - (arguments.length - 1)) }
      );
    }
    return d;
  };
  var c = function() {
    return i(e, n, arguments);
  };
  s ? s(t.exports, "apply", { value: c }) : t.exports.apply = c;
})(go);
var mr = dt, gr = Ye, vo = gr(mr("String.prototype.indexOf")), So = function(e, r) {
  var n = mr(e, !!r);
  return typeof n == "function" && vo(e, ".prototype.") > -1 ? gr(n) : n;
};
const bo = {}, wo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bo
}, Symbol.toStringTag, { value: "Module" })), Oo = /* @__PURE__ */ an(wo);
var ht = typeof Map == "function" && Map.prototype, je = Object.getOwnPropertyDescriptor && ht ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Te = ht && je && typeof je.get == "function" ? je.get : null, _t = ht && Map.prototype.forEach, mt = typeof Set == "function" && Set.prototype, qe = Object.getOwnPropertyDescriptor && mt ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Fe = mt && qe && typeof qe.get == "function" ? qe.get : null, Ut = mt && Set.prototype.forEach, Eo = typeof WeakMap == "function" && WeakMap.prototype, pe = Eo ? WeakMap.prototype.has : null, Ao = typeof WeakSet == "function" && WeakSet.prototype, ye = Ao ? WeakSet.prototype.has : null, Ro = typeof WeakRef == "function" && WeakRef.prototype, Mt = Ro ? WeakRef.prototype.deref : null, Po = Boolean.prototype.valueOf, xo = Object.prototype.toString, No = Function.prototype.toString, To = String.prototype.match, gt = String.prototype.slice, j = String.prototype.replace, Fo = String.prototype.toUpperCase, Lt = String.prototype.toLowerCase, vr = RegExp.prototype.test, kt = Array.prototype.concat, F = Array.prototype.join, Co = Array.prototype.slice, jt = Math.floor, Ze = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, He = Object.getOwnPropertySymbols, et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, re = typeof Symbol == "function" && typeof Symbol.iterator == "object", R = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === re || "symbol") ? Symbol.toStringTag : null, Sr = Object.prototype.propertyIsEnumerable, qt = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function Ht(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || vr.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -jt(-t) : jt(t);
    if (n !== t) {
      var o = String(n), i = gt.call(e, o.length + 1);
      return j.call(o, r, "$&_") + "." + j.call(j.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return j.call(e, r, "$&_");
}
var tt = Oo, Wt = tt.custom, zt = wr(Wt) ? Wt : null, Do = function t(e, r, n, o) {
  var i = r || {};
  if (k(i, "quoteStyle") && i.quoteStyle !== "single" && i.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (k(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var a = k(i, "customInspect") ? i.customInspect : !0;
  if (typeof a != "boolean" && a !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (k(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (k(i, "numericSeparator") && typeof i.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = i.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return Er(e, i);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var u = String(e);
    return s ? Ht(e, u) : u;
  }
  if (typeof e == "bigint") {
    var c = String(e) + "n";
    return s ? Ht(e, c) : c;
  }
  var f = typeof i.depth > "u" ? 5 : i.depth;
  if (typeof n > "u" && (n = 0), n >= f && f > 0 && typeof e == "object")
    return rt(e) ? "[Array]" : "[Object]";
  var y = Qo(i, n);
  if (typeof o > "u")
    o = [];
  else if (Or(o, e) >= 0)
    return "[Circular]";
  function d(x, M, D) {
    if (M && (o = Co.call(o), o.push(M)), D) {
      var ue = {
        depth: i.depth
      };
      return k(i, "quoteStyle") && (ue.quoteStyle = i.quoteStyle), t(x, ue, n + 1, o);
    }
    return t(x, i, n + 1, o);
  }
  if (typeof e == "function" && !Jt(e)) {
    var h = jo(e), p = Se(e, d);
    return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (p.length > 0 ? " { " + F.call(p, ", ") + " }" : "");
  }
  if (wr(e)) {
    var m = re ? j.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : et.call(e);
    return typeof e == "object" && !re ? fe(m) : m;
  }
  if (Vo(e)) {
    for (var b = "<" + Lt.call(String(e.nodeName)), g = e.attributes || [], A = 0; A < g.length; A++)
      b += " " + g[A].name + "=" + br(Bo(g[A].value), "double", i);
    return b += ">", e.childNodes && e.childNodes.length && (b += "..."), b += "</" + Lt.call(String(e.nodeName)) + ">", b;
  }
  if (rt(e)) {
    if (e.length === 0)
      return "[]";
    var P = Se(e, d);
    return y && !Ko(P) ? "[" + nt(P, y) + "]" : "[ " + F.call(P, ", ") + " ]";
  }
  if (Io(e)) {
    var _ = Se(e, d);
    return !("cause" in Error.prototype) && "cause" in e && !Sr.call(e, "cause") ? "{ [" + String(e) + "] " + F.call(kt.call("[cause]: " + d(e.cause), _), ", ") + " }" : _.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + F.call(_, ", ") + " }";
  }
  if (typeof e == "object" && a) {
    if (zt && typeof e[zt] == "function" && tt)
      return tt(e, { depth: f - n });
    if (a !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (qo(e)) {
    var ae = [];
    return _t && _t.call(e, function(x, M) {
      ae.push(d(M, e, !0) + " => " + d(x, e));
    }), Vt("Map", Te.call(e), ae, y);
  }
  if (zo(e)) {
    var se = [];
    return Ut && Ut.call(e, function(x) {
      se.push(d(x, e));
    }), Vt("Set", Fe.call(e), se, y);
  }
  if (Ho(e))
    return We("WeakMap");
  if (Jo(e))
    return We("WeakSet");
  if (Wo(e))
    return We("WeakRef");
  if (Uo(e))
    return fe(d(Number(e)));
  if (Lo(e))
    return fe(d(Ze.call(e)));
  if (Mo(e))
    return fe(Po.call(e));
  if (_o(e))
    return fe(d(String(e)));
  if (!$o(e) && !Jt(e)) {
    var H = Se(e, d), ce = qt ? qt(e) === Object.prototype : e instanceof Object || e.constructor === Object, U = e instanceof Object ? "" : "null prototype", K = !ce && R && Object(e) === e && R in e ? gt.call(q(e), 8, -1) : U ? "Object" : "", W = ce || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", Q = W + (K || U ? "[" + F.call(kt.call([], K || [], U || []), ": ") + "] " : "");
    return H.length === 0 ? Q + "{}" : y ? Q + "{" + nt(H, y) + "}" : Q + "{ " + F.call(H, ", ") + " }";
  }
  return String(e);
};
function br(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function Bo(t) {
  return j.call(String(t), /"/g, "&quot;");
}
function rt(t) {
  return q(t) === "[object Array]" && (!R || !(typeof t == "object" && R in t));
}
function $o(t) {
  return q(t) === "[object Date]" && (!R || !(typeof t == "object" && R in t));
}
function Jt(t) {
  return q(t) === "[object RegExp]" && (!R || !(typeof t == "object" && R in t));
}
function Io(t) {
  return q(t) === "[object Error]" && (!R || !(typeof t == "object" && R in t));
}
function _o(t) {
  return q(t) === "[object String]" && (!R || !(typeof t == "object" && R in t));
}
function Uo(t) {
  return q(t) === "[object Number]" && (!R || !(typeof t == "object" && R in t));
}
function Mo(t) {
  return q(t) === "[object Boolean]" && (!R || !(typeof t == "object" && R in t));
}
function wr(t) {
  if (re)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !et)
    return !1;
  try {
    return et.call(t), !0;
  } catch {
  }
  return !1;
}
function Lo(t) {
  if (!t || typeof t != "object" || !Ze)
    return !1;
  try {
    return Ze.call(t), !0;
  } catch {
  }
  return !1;
}
var ko = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function k(t, e) {
  return ko.call(t, e);
}
function q(t) {
  return xo.call(t);
}
function jo(t) {
  if (t.name)
    return t.name;
  var e = To.call(No.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Or(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
function qo(t) {
  if (!Te || !t || typeof t != "object")
    return !1;
  try {
    Te.call(t);
    try {
      Fe.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function Ho(t) {
  if (!pe || !t || typeof t != "object")
    return !1;
  try {
    pe.call(t, pe);
    try {
      ye.call(t, ye);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Wo(t) {
  if (!Mt || !t || typeof t != "object")
    return !1;
  try {
    return Mt.call(t), !0;
  } catch {
  }
  return !1;
}
function zo(t) {
  if (!Fe || !t || typeof t != "object")
    return !1;
  try {
    Fe.call(t);
    try {
      Te.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function Jo(t) {
  if (!ye || !t || typeof t != "object")
    return !1;
  try {
    ye.call(t, ye);
    try {
      pe.call(t, pe);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Vo(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function Er(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return Er(gt.call(t, 0, e.maxStringLength), e) + n;
  }
  var o = j.call(j.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Go);
  return br(o, "single", e);
}
function Go(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + Fo.call(e.toString(16));
}
function fe(t) {
  return "Object(" + t + ")";
}
function We(t) {
  return t + " { ? }";
}
function Vt(t, e, r, n) {
  var o = n ? nt(r, n) : F.call(r, ", ");
  return t + " (" + e + ") {" + o + "}";
}
function Ko(t) {
  for (var e = 0; e < t.length; e++)
    if (Or(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function Qo(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = F.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: F.call(Array(e + 1), r)
  };
}
function nt(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + F.call(t, "," + r) + `
` + e.prev;
}
function Se(t, e) {
  var r = rt(t), n = [];
  if (r) {
    n.length = t.length;
    for (var o = 0; o < t.length; o++)
      n[o] = k(t, o) ? e(t[o], t) : "";
  }
  var i = typeof He == "function" ? He(t) : [], a;
  if (re) {
    a = {};
    for (var s = 0; s < i.length; s++)
      a["$" + i[s]] = i[s];
  }
  for (var u in t)
    k(t, u) && (r && String(Number(u)) === u && u < t.length || re && a["$" + u] instanceof Symbol || (vr.call(/[^\w$]/, u) ? n.push(e(u, t) + ": " + e(t[u], t)) : n.push(u + ": " + e(t[u], t))));
  if (typeof He == "function")
    for (var c = 0; c < i.length; c++)
      Sr.call(t, i[c]) && n.push("[" + e(i[c]) + "]: " + e(t[i[c]], t));
  return n;
}
var vt = dt, ie = So, Xo = Do, Yo = vt("%TypeError%"), be = vt("%WeakMap%", !0), we = vt("%Map%", !0), Zo = ie("WeakMap.prototype.get", !0), ei = ie("WeakMap.prototype.set", !0), ti = ie("WeakMap.prototype.has", !0), ri = ie("Map.prototype.get", !0), ni = ie("Map.prototype.set", !0), oi = ie("Map.prototype.has", !0), St = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = t.next, t.next = n, n;
}, ii = function(t, e) {
  var r = St(t, e);
  return r && r.value;
}, ai = function(t, e, r) {
  var n = St(t, e);
  n ? n.value = r : t.next = {
    // eslint-disable-line no-param-reassign
    key: e,
    next: t.next,
    value: r
  };
}, si = function(t, e) {
  return !!St(t, e);
}, ci = function() {
  var e, r, n, o = {
    assert: function(i) {
      if (!o.has(i))
        throw new Yo("Side channel does not contain " + Xo(i));
    },
    get: function(i) {
      if (be && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return Zo(e, i);
      } else if (we) {
        if (r)
          return ri(r, i);
      } else if (n)
        return ii(n, i);
    },
    has: function(i) {
      if (be && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return ti(e, i);
      } else if (we) {
        if (r)
          return oi(r, i);
      } else if (n)
        return si(n, i);
      return !1;
    },
    set: function(i, a) {
      be && i && (typeof i == "object" || typeof i == "function") ? (e || (e = new be()), ei(e, i, a)) : we ? (r || (r = new we()), ni(r, i, a)) : (n || (n = { key: {}, next: null }), ai(n, i, a));
    }
  };
  return o;
}, ui = String.prototype.replace, li = /%20/g, ze = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, bt = {
  default: ze.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return ui.call(t, li, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: ze.RFC1738,
  RFC3986: ze.RFC3986
}, fi = bt, Je = Object.prototype.hasOwnProperty, z = Array.isArray, N = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), pi = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (z(n)) {
      for (var o = [], i = 0; i < n.length; ++i)
        typeof n[i] < "u" && o.push(n[i]);
      r.obj[r.prop] = o;
    }
  }
}, Ar = function(e, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = 0; o < e.length; ++o)
    typeof e[o] < "u" && (n[o] = e[o]);
  return n;
}, yi = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object") {
    if (z(e))
      e.push(r);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Je.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var o = e;
  return z(e) && !z(r) && (o = Ar(e, n)), z(e) && z(r) ? (r.forEach(function(i, a) {
    if (Je.call(e, a)) {
      var s = e[a];
      s && typeof s == "object" && i && typeof i == "object" ? e[a] = t(s, i, n) : e.push(i);
    } else
      e[a] = i;
  }), e) : Object.keys(r).reduce(function(i, a) {
    var s = r[a];
    return Je.call(i, a) ? i[a] = t(i[a], s, n) : i[a] = s, i;
  }, o);
}, di = function(e, r) {
  return Object.keys(r).reduce(function(n, o) {
    return n[o] = r[o], n;
  }, e);
}, hi = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, mi = function(e, r, n, o, i) {
  if (e.length === 0)
    return e;
  var a = e;
  if (typeof e == "symbol" ? a = Symbol.prototype.toString.call(e) : typeof e != "string" && (a = String(e)), n === "iso-8859-1")
    return escape(a).replace(/%u[0-9a-f]{4}/gi, function(f) {
      return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
    });
  for (var s = "", u = 0; u < a.length; ++u) {
    var c = a.charCodeAt(u);
    if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || i === fi.RFC1738 && (c === 40 || c === 41)) {
      s += a.charAt(u);
      continue;
    }
    if (c < 128) {
      s = s + N[c];
      continue;
    }
    if (c < 2048) {
      s = s + (N[192 | c >> 6] + N[128 | c & 63]);
      continue;
    }
    if (c < 55296 || c >= 57344) {
      s = s + (N[224 | c >> 12] + N[128 | c >> 6 & 63] + N[128 | c & 63]);
      continue;
    }
    u += 1, c = 65536 + ((c & 1023) << 10 | a.charCodeAt(u) & 1023), s += N[240 | c >> 18] + N[128 | c >> 12 & 63] + N[128 | c >> 6 & 63] + N[128 | c & 63];
  }
  return s;
}, gi = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], o = 0; o < r.length; ++o)
    for (var i = r[o], a = i.obj[i.prop], s = Object.keys(a), u = 0; u < s.length; ++u) {
      var c = s[u], f = a[c];
      typeof f == "object" && f !== null && n.indexOf(f) === -1 && (r.push({ obj: a, prop: c }), n.push(f));
    }
  return pi(r), e;
}, vi = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, Si = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, bi = function(e, r) {
  return [].concat(e, r);
}, wi = function(e, r) {
  if (z(e)) {
    for (var n = [], o = 0; o < e.length; o += 1)
      n.push(r(e[o]));
    return n;
  }
  return r(e);
}, Rr = {
  arrayToObject: Ar,
  assign: di,
  combine: bi,
  compact: gi,
  decode: hi,
  encode: mi,
  isBuffer: Si,
  isRegExp: vi,
  maybeMap: wi,
  merge: yi
}, Pr = ci, ot = Rr, de = bt, Oi = Object.prototype.hasOwnProperty, Gt = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, r) {
    return e + "[" + r + "]";
  },
  repeat: function(e) {
    return e;
  }
}, B = Array.isArray, Ei = String.prototype.split, Ai = Array.prototype.push, xr = function(t, e) {
  Ai.apply(t, B(e) ? e : [e]);
}, Ri = Date.prototype.toISOString, Kt = de.default, E = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: ot.encode,
  encodeValuesOnly: !1,
  format: Kt,
  formatter: de.formatters[Kt],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return Ri.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Pi = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Ve = {}, xi = function t(e, r, n, o, i, a, s, u, c, f, y, d, h, p, m, b) {
  for (var g = e, A = b, P = 0, _ = !1; (A = A.get(Ve)) !== void 0 && !_; ) {
    var ae = A.get(e);
    if (P += 1, typeof ae < "u") {
      if (ae === P)
        throw new RangeError("Cyclic object value");
      _ = !0;
    }
    typeof A.get(Ve) > "u" && (P = 0);
  }
  if (typeof u == "function" ? g = u(r, g) : g instanceof Date ? g = y(g) : n === "comma" && B(g) && (g = ot.maybeMap(g, function(Ie) {
    return Ie instanceof Date ? y(Ie) : Ie;
  })), g === null) {
    if (i)
      return s && !p ? s(r, E.encoder, m, "key", d) : r;
    g = "";
  }
  if (Pi(g) || ot.isBuffer(g)) {
    if (s) {
      var se = p ? r : s(r, E.encoder, m, "key", d);
      if (n === "comma" && p) {
        for (var H = Ei.call(String(g), ","), ce = "", U = 0; U < H.length; ++U)
          ce += (U === 0 ? "" : ",") + h(s(H[U], E.encoder, m, "value", d));
        return [h(se) + (o && B(g) && H.length === 1 ? "[]" : "") + "=" + ce];
      }
      return [h(se) + "=" + h(s(g, E.encoder, m, "value", d))];
    }
    return [h(r) + "=" + h(String(g))];
  }
  var K = [];
  if (typeof g > "u")
    return K;
  var W;
  if (n === "comma" && B(g))
    W = [{ value: g.length > 0 ? g.join(",") || null : void 0 }];
  else if (B(u))
    W = u;
  else {
    var Q = Object.keys(g);
    W = c ? Q.sort(c) : Q;
  }
  for (var x = o && B(g) && g.length === 1 ? r + "[]" : r, M = 0; M < W.length; ++M) {
    var D = W[M], ue = typeof D == "object" && typeof D.value < "u" ? D.value : g[D];
    if (!(a && ue === null)) {
      var Tr = B(g) ? typeof n == "function" ? n(x, D) : x : x + (f ? "." + D : "[" + D + "]");
      b.set(e, P);
      var wt = Pr();
      wt.set(Ve, b), xr(K, t(
        ue,
        Tr,
        n,
        o,
        i,
        a,
        s,
        u,
        c,
        f,
        y,
        d,
        h,
        p,
        m,
        wt
      ));
    }
  }
  return K;
}, Ni = function(e) {
  if (!e)
    return E;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || E.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = de.default;
  if (typeof e.format < "u") {
    if (!Oi.call(de.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var o = de.formatters[n], i = E.filter;
  return (typeof e.filter == "function" || B(e.filter)) && (i = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : E.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? E.allowDots : !!e.allowDots,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : E.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? E.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : E.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : E.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : E.encodeValuesOnly,
    filter: i,
    format: n,
    formatter: o,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : E.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : E.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : E.strictNullHandling
  };
}, Ti = function(t, e) {
  var r = t, n = Ni(e), o, i;
  typeof n.filter == "function" ? (i = n.filter, r = i("", r)) : B(n.filter) && (i = n.filter, o = i);
  var a = [];
  if (typeof r != "object" || r === null)
    return "";
  var s;
  e && e.arrayFormat in Gt ? s = e.arrayFormat : e && "indices" in e ? s = e.indices ? "indices" : "repeat" : s = "indices";
  var u = Gt[s];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var c = u === "comma" && e && e.commaRoundTrip;
  o || (o = Object.keys(r)), n.sort && o.sort(n.sort);
  for (var f = Pr(), y = 0; y < o.length; ++y) {
    var d = o[y];
    n.skipNulls && r[d] === null || xr(a, xi(
      r[d],
      d,
      u,
      c,
      n.strictNullHandling,
      n.skipNulls,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      f
    ));
  }
  var h = a.join(n.delimiter), p = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? p += "utf8=%26%2310003%3B&" : p += "utf8=%E2%9C%93&"), h.length > 0 ? p + h : "";
}, ne = Rr, it = Object.prototype.hasOwnProperty, Fi = Array.isArray, O = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: ne.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, Ci = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Nr = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, Di = "utf8=%26%2310003%3B", Bi = "utf8=%E2%9C%93", $i = function(e, r) {
  var n = {}, o = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, a = o.split(r.delimiter, i), s = -1, u, c = r.charset;
  if (r.charsetSentinel)
    for (u = 0; u < a.length; ++u)
      a[u].indexOf("utf8=") === 0 && (a[u] === Bi ? c = "utf-8" : a[u] === Di && (c = "iso-8859-1"), s = u, u = a.length);
  for (u = 0; u < a.length; ++u)
    if (u !== s) {
      var f = a[u], y = f.indexOf("]="), d = y === -1 ? f.indexOf("=") : y + 1, h, p;
      d === -1 ? (h = r.decoder(f, O.decoder, c, "key"), p = r.strictNullHandling ? null : "") : (h = r.decoder(f.slice(0, d), O.decoder, c, "key"), p = ne.maybeMap(
        Nr(f.slice(d + 1), r),
        function(m) {
          return r.decoder(m, O.decoder, c, "value");
        }
      )), p && r.interpretNumericEntities && c === "iso-8859-1" && (p = Ci(p)), f.indexOf("[]=") > -1 && (p = Fi(p) ? [p] : p), it.call(n, h) ? n[h] = ne.combine(n[h], p) : n[h] = p;
    }
  return n;
}, Ii = function(t, e, r, n) {
  for (var o = n ? e : Nr(e, r), i = t.length - 1; i >= 0; --i) {
    var a, s = t[i];
    if (s === "[]" && r.parseArrays)
      a = [].concat(o);
    else {
      a = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var u = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s, c = parseInt(u, 10);
      !r.parseArrays && u === "" ? a = { 0: o } : !isNaN(c) && s !== u && String(c) === u && c >= 0 && r.parseArrays && c <= r.arrayLimit ? (a = [], a[c] = o) : u !== "__proto__" && (a[u] = o);
    }
    o = a;
  }
  return o;
}, _i = function(e, r, n, o) {
  if (e) {
    var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, a = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, u = n.depth > 0 && a.exec(i), c = u ? i.slice(0, u.index) : i, f = [];
    if (c) {
      if (!n.plainObjects && it.call(Object.prototype, c) && !n.allowPrototypes)
        return;
      f.push(c);
    }
    for (var y = 0; n.depth > 0 && (u = s.exec(i)) !== null && y < n.depth; ) {
      if (y += 1, !n.plainObjects && it.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      f.push(u[1]);
    }
    return u && f.push("[" + i.slice(u.index) + "]"), Ii(f, r, n, o);
  }
}, Ui = function(e) {
  if (!e)
    return O;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof e.charset > "u" ? O.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? O.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : O.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : O.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : O.arrayLimit,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : O.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : O.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : O.decoder,
    delimiter: typeof e.delimiter == "string" || ne.isRegExp(e.delimiter) ? e.delimiter : O.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : O.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : O.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : O.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : O.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : O.strictNullHandling
  };
}, Mi = function(t, e) {
  var r = Ui(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof t == "string" ? $i(t, r) : t, o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(n), a = 0; a < i.length; ++a) {
    var s = i[a], u = _i(s, n[s], r, typeof t == "string");
    o = ne.merge(o, u, r);
  }
  return r.allowSparse === !0 ? o : ne.compact(o);
}, Li = Ti, ki = Mi, ji = bt, qi = {
  formats: ji,
  parse: ki,
  stringify: Li
};
class Hi {
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
class Wi {
  constructor(e = {}) {
    this.merge = new Hi(), this.instance = zn.create(this.merge.getAxiosDefaultOptions(e.axiosOptions)), this.interceptor = new Gn(this.instance), this.interceptor.addUtilsConfig(e);
  }
  // 设置请求拦截器
  setRequestInterceptors(e, r) {
    this.interceptor.request(e, r);
  }
  // 设置响应拦截器
  setResponseInterceptors(e, r) {
    this.interceptor.response(e, r);
  }
  // 重新设置请求头
  setRequestHeadConfig(e) {
    const r = e.type;
    return {
      json: (o) => {
        o.headers = {
          "Content-Type": "application/json"
        };
      },
      // 这里抹平formData,urlencoded与json的配置差异，不论格式如何都传一个对象
      formData: (o) => {
        o.headers = {
          "Content-Type": "multipart/form-data"
        };
        const i = o.data;
        let a = null;
        if (i) {
          a = new FormData();
          for (const s in i)
            a.append(s, i[s]);
        }
        o.data = a;
      },
      // urlencoded类型请求需要进行序列化操作
      urlencoded: (o) => {
        o.headers = {
          "Content-Type": "application/x-www-form-urlencoded"
        }, o.transformRequest = [
          (i) => qi.stringify(i)
        ];
      }
    }[r](e), e;
  }
  // 为了确保处理顺序的可维护性，这里采用职责链遍历
  setConfigFunctionLine(e) {
    const r = [
      this.merge.mergeRequestDefaultOptons.bind(this.merge),
      this.setRequestHeadConfig,
      (n) => (n.method === "get" && (n.params = n.data), n)
    ];
    return r.reduce((n, o, i) => r[i](n), e);
  }
  // 返回请求实例
  create() {
    const e = this;
    return function(r) {
      return r = e.setConfigFunctionLine(r), e.instance(r);
    };
  }
}
class zi {
  constructor(e) {
    this.httpFactory = new Wi(e), this.$http = this.httpFactory.create();
  }
  install(e) {
    e.prototype ? e.prototype.$http = this.$http : e.config.globalProperties.$http = this.$http;
  }
}
export {
  zi as default
};
//# sourceMappingURL=masquesRequest.js.map
