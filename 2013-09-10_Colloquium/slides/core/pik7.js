var requirejs, require, define;
(function (e) {
    function t(e, t) {
        return y.call(e, t)
    }
    function n(e, t) {
        var n, r, i, o, s, a, u, l, c, p, f = t && t.split("/"),
            d = g.map,
            h = d && d["*"] || {};
        if (e && "." === e.charAt(0)) if (t) {
                for (f = f.slice(0, f.length - 1), e = f.concat(e.split("/")), l = 0; e.length > l; l += 1) if (p = e[l], "." === p) e.splice(l, 1), l -= 1;
                    else if (".." === p) {
                    if (1 === l && (".." === e[2] || ".." === e[0])) break;
                    l > 0 && (e.splice(l - 1, 2), l -= 2)
                }
                e = e.join("/")
            } else 0 === e.indexOf("./") && (e = e.substring(2));
        if ((f || h) && d) {
            for (n = e.split("/"), l = n.length; l > 0; l -= 1) {
                if (r = n.slice(0, l).join("/"), f) for (c = f.length; c > 0; c -= 1) if (i = d[f.slice(0, c).join("/")], i && (i = i[r])) {
                            o = i, s = l;
                            break
                        }
                if (o) break;
                !a && h && h[r] && (a = h[r], u = l)
            }!o && a && (o = a, s = u), o && (n.splice(0, s, o), e = n.join("/"))
        }
        return e
    }
    function r(t, n) {
        return function () {
            return c.apply(e, v.call(arguments, 0).concat([t, n]))
        }
    }
    function i(e) {
        return function (t) {
            return n(t, e)
        }
    }
    function o(e) {
        return function (t) {
            d[e] = t
        }
    }
    function s(n) {
        if (t(h, n)) {
            var r = h[n];
            delete h[n], m[n] = !0, l.apply(e, r)
        }
        if (!t(d, n) && !t(m, n)) throw Error("No " + n);
        return d[n]
    }
    function a(e) {
        var t, n = e ? e.indexOf("!") : -1;
        return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
    }
    function u(e) {
        return function () {
            return g && g.config && g.config[e] || {}
        }
    }
    var l, c, p, f, d = {}, h = {}, g = {}, m = {}, y = Object.prototype.hasOwnProperty,
        v = [].slice;
    p = function (e, t) {
        var r, o = a(e),
            u = o[0];
        return e = o[1], u && (u = n(u, t), r = s(u)), u ? e = r && r.normalize ? r.normalize(e, i(t)) : n(e, t) : (e = n(e, t), o = a(e), u = o[0], e = o[1], u && (r = s(u))), {
            f: u ? u + "!" + e : e,
            n: e,
            pr: u,
            p: r
        }
    }, f = {
        require: function (e) {
            return r(e)
        },
        exports: function (e) {
            var t = d[e];
            return t !== void 0 ? t : d[e] = {}
        },
        module: function (e) {
            return {
                id: e,
                uri: "",
                exports: d[e],
                config: u(e)
            }
        }
    }, l = function (n, i, a, u) {
        var l, c, g, y, v, x, w = [];
        if (u = u || n, "function" == typeof a) {
            for (i = !i.length && a.length ? ["require", "exports", "module"] : i, v = 0; i.length > v; v += 1) if (y = p(i[v], u), c = y.f, "require" === c) w[v] = f.require(n);
                else if ("exports" === c) w[v] = f.exports(n), x = !0;
            else if ("module" === c) l = w[v] = f.module(n);
            else if (t(d, c) || t(h, c) || t(m, c)) w[v] = s(c);
            else {
                if (!y.p) throw Error(n + " missing " + c);
                y.p.load(y.n, r(u, !0), o(c), {}), w[v] = d[c]
            }
            g = a.apply(d[n], w), n && (l && l.exports !== e && l.exports !== d[n] ? d[n] = l.exports : g === e && x || (d[n] = g))
        } else n && (d[n] = a)
    }, requirejs = require = c = function (t, n, r, i, o) {
        return "string" == typeof t ? f[t] ? f[t](n) : s(p(t, n).f) : (t.splice || (g = t, n.splice ? (t = n, n = r, r = null) : t = e), n = n || function () {}, "function" == typeof r && (r = i, i = o), i ? l(e, t, n, r) : setTimeout(function () {
            l(e, t, n, r)
        }, 4), c)
    }, c.config = function (e) {
        return g = e, g.deps && c(g.deps, g.callback), c
    }, define = function (e, n, r) {
        n.splice || (r = n, n = []), t(d, e) || t(h, e) || (h[e] = [e, n, r])
    }, define.amd = {
        jQuery: !0
    }
})(), define("almond", function () {}), Function.prototype.bind || (Function.prototype.bind = function (e) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var t = Array.prototype.slice.call(arguments, 1),
        n = this,
        r = function () {}, i = function () {
            return n.apply(this instanceof r && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
        };
    return r.prototype = this.prototype, i.prototype = new r, i
}), define("lib/polyfill/bind", function () {});
var __slice = [].slice,
    __indexOf = [].indexOf || function (e) {
        for (var t = 0, n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
        return -1
    };
define("lib/emitter", [], function () {
    var e;
    return e = function () {
        function e() {
            var e, t, n, r;
            if (e = arguments.length >= 1 ? __slice.call(arguments, 0) : [], this.topics = {}, 0 === e.length) throw Error("Got empty topic list");
            for (n = 0, r = e.length; r > n; n++) t = e[n], this.topics[t] = []
        }
        return e.prototype.on = function (e, t) {
            if ("function" != typeof t) throw Error("Can't add callback to '" + e + "', '" + t + "' is not        a function");
            if (e in this.topics) {
                if (__indexOf.call(this.topics[e], t) >= 0) throw Error("Can't add callback, already subscribed to '" + e + "'");
                return this.topics[e].push(t)
            }
            throw Error("Can't add callback, '" + e + "' is not a topic")
        }, e.prototype.off = function (e, t) {
            if ("function" != typeof t) throw Error("Can't remove callback from '" + e + "', '" + t + "' is        not a function");
            if (e in this.topics) {
                if (0 > __indexOf.call(this.topics[e], t)) throw Error("Can't remove callback, not subscribed to '" + e + "'");
                return this.topics[e].splice(this.topics[e].indexOf(t), 1)
            }
            throw Error("Can't remove callback, no such topic: '" + e + "'")
        }, e.prototype.offAll = function (e) {
            var t, n, r;
            if (t = function (e, t) {
                if (t in e) return e[t] = [];
                throw Error("Can't remove callbacks from non-existant          topic '" + t + "'")
            }, null != e) return t(this.topics, e);
            r = [];
            for (n in this.topics) r.push(t(this.topics, n));
            return r
        }, e.prototype.trigger = function () {
            var e, t, n, r, i, o, s;
            if (n = arguments[0], e = arguments.length >= 2 ? __slice.call(arguments, 1) : [], n in this.topics) {
                for (o = this.topics[n], s = [], r = 0, i = o.length; i > r; r++) t = o[r], s.push(t.apply(null, e));
                return s
            }
            throw Error("Can't trigger event, no such topic: '" + n + "'")
        }, e
    }()
});
var __hasProp = {}.hasOwnProperty,
    __extends = function (e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) __hasProp.call(t, r) && (e[r] = t[r]);
        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
    }, __slice = [].slice;
define("lib/smartEmitter", ["lib/emitter"], function (e) {
    var t, n, r;
    return n = function (e, t) {
        var n, r, i, o;
        if (e.sort(), t.sort(), e.length !== t.length) return !1;
        for (n = i = 0, o = e.length; o > i; n = ++i) if (r = e[n], r !== t[n]) return !1;
        return !0
    }, t = function (e) {
        function t() {
            return r = t.__super__.constructor.apply(this, arguments)
        }
        return __extends(t, e), t.prototype.on = function (e, n, r) {
            var i, o;
            if (i = arguments.length, 3 > i) throw o = [].join.call(arguments, ", "), Error("Missing arguments for 'on()' - expected 3,          got " + i + " (" + o + ")");
            return t.__super__.on.call(this, e, r), null != n ? r.__subscriber__ = n : void 0
        }, t.prototype.trigger = function () {
            var e, n, r, i, o, s, a, u;
            if (o = arguments[0], r = arguments[1], e = arguments.length >= 3 ? __slice.call(arguments, 2) : [], null != r) {
                s = {}, a = this.topics;
                for (u in a) n = a[u], s[u] = function () {
                        var e, t, o;
                        for (o = [], e = 0, t = n.length; t > e; e++) i = n[e], i.__subscriber__ !== r && o.push(i);
                        return o
                }()
            } else s = this.topics;
            return e.unshift(o), t.__super__.trigger.apply({
                topics: s
            }, e)
        }, t.prototype.onAll = function (e) {
            var t, r, i, o, s, a, u;
            if (i = Object.keys(this.topics), r = Object.keys(e.topics), !n(i, r)) throw Error("Can't connect emitters; incompatible topic lists:          [" + i + "] and [" + r + "]");
            o = this, a = this.topics, u = [];
            for (s in a) t = a[s], u.push(e.on(s, function () {
                    var t;
                    return t = arguments.length >= 1 ? __slice.call(arguments, 0) : [], o.trigger.apply(o, [s, e].concat(__slice.call(t)))
                }));
            return u
        }, t
    }(e)
});
var __hasProp = {}.hasOwnProperty,
    __extends = function (e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) __hasProp.call(t, r) && (e[r] = t[r]);
        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
    };
define("lib/state", ["lib/smartEmitter"], function (e) {
    var t;
    return t = function (e) {
        function t(e) {
            var n, r, i, o;
            for (t.__super__.constructor.call(this, "file", "slide", "hidden"), n = ["file", "slide", "hidden", "numSlides"], i = 0, o = n.length; o > i; i++) if (r = n[i], !(r in e) || null == e[r]) throw Error("Missing " + r + " value in state defaults        (actual value: " + e[r] + ")");
            this.addState(e)
        }
        return __extends(t, e), t.prototype.addState = function (e) {
            var t;
            return t = this, this.state = {
                current: {
                    file: e.file,
                    slide: e.slide,
                    hidden: e.hidden,
                    numSlides: e.numSlides
                },
                update: function (e, n) {
                    var r, i, o;
                    o = [];
                    for (r in e) i = e[r], i !== this.current[r] ? "slide" === r ? (0 > i && (i = 0), i >= this.current.numSlides && (i = this.current.numSlides - 1), i !== this.current[r] ? (this.current[r] = i, o.push(t.trigger("slide", n, i))) : o.push(void 0)) : (this.current[r] = i, o.push(t.trigger(r, n, i))) : o.push(void 0);
                    return o
                }
            }
        }, t.prototype.set = function (e, t) {
            if (null != e) {
                if ("numSlides" in e) throw Error("Can't modify 'numSlides' after init");
                return this.state.update(e, t)
            }
        }, t.prototype.get = function (e) {
            return this.state.current[e]
        }, t
    }(e)
});
var __hasProp = {}.hasOwnProperty,
    __extends = function (e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) __hasProp.call(t, r) && (e[r] = t[r]);
        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
    }, __indexOf = [].indexOf || function (e) {
        for (var t = 0, n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
        return -1
    };
define("lib/sync", ["lib/emitter"], function (e) {
    var t;
    return t = function (e) {
        function t(e) {
            this.storageArea = null != e ? e : window.localStorage, this.validKeys = ["file", "slide", "hidden"], t.__super__.constructor.call(this, "change"), this.initEvents(), this.storageKey = this.storageArea === window.localStorage ? "localStorage" : "sessionStorage"
        }
        return __extends(t, e), t.prototype.initEvents = function () {
            var e = this;
            return this.onStorage = function (t) {
                var n, r;
                return r = t.newValue, r ? (n = JSON.parse(r), e.trigger("change", n, t)) : void 0
            }, window.addEventListener("storage", this.onStorage, !1)
        }, t.prototype.setState = function (e) {
            var t;
            return t = JSON.stringify(e), t ? this.storageArea.setItem("pik", t) : void 0
        }, t.prototype.getState = function () {
            var e;
            return e = this.storageArea.getItem("pik"), JSON.parse(e)
        }, t.prototype.set = function (e, t) {
            var n;
            if (0 > __indexOf.call(this.validKeys, e)) throw Error("Can't set " + e + "; not a valid key for storage");
            return n = this.getState(), n[e] = t, this.setState(n)
        }, t.prototype.get = function (e) {
            var t;
            if (0 > __indexOf.call(this.validKeys, e)) throw Error("Can't get " + e + " from storage; not a valid key");
            switch (t = this.getState(), e) {
            case "file":
                return t.file;
            case "slide":
                return Number(t.slide);
            case "hidden":
                return /^true$/i.test(t.hidden)
            }
        }, t.prototype.wipe = function () {
            return this.storageArea.removeItem("pik")
        }, t.prototype.offAll = function () {
            return t.__super__.offAll.call(this), this.wipe()
        }, t
    }(e)
});
var __bind = function (e, t) {
    return function () {
        return e.apply(t, arguments)
    }
}, __hasProp = {}.hasOwnProperty,
    __extends = function (e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) __hasProp.call(t, r) && (e[r] = t[r]);
        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
    };
define("lib/hash", ["lib/emitter"], function (e) {
    var t;
    return t = function (e) {
        function t(e) {
            this.format = null != e ? e : /(?:#!\/?(.*)@([0-9]*)(!hidden)?)/, this.onchange = __bind(this.onchange, this), t.__super__.constructor.call(this, "change"), this.addEvents()
        }
        return __extends(t, e), t.prototype.addEvents = function () {
            return window.addEventListener("hashchange", this.onchange, !1)
        }, t.prototype.onchange = function (e) {
            var t;
            return t = this.parse(e.newURL), null != t ? this.trigger("change", t, e) : void 0
        }, t.prototype.parse = function (e) {
            var t, n, r, i;
            return r = this.format.exec(e), r ? ("undefined" !== r[1] && (t = r[1] || null), r[2] && (i = Number(r[2]) - 1), n = "!hidden" === r[3] ? !0 : !1, {
                file: t,
                slide: i,
                hidden: n
            }) : void 0
        }, t.prototype.commonPath = function (e, t) {
            var n, r;
            for (n = 0; Math.min(e.length, t.length) > n && e[n] === t[n];) n++;
            return 1 > n ? null != (r = e[0] === t[0] && "/" === e[0]) ? r : {
                "/": ""
            } : ("/" !== e[n] && (n = e.substring(0, n).lastIndexOf("/")), e.substring(0, n + 1))
        }, t.prototype.createHash = function (e, t, n) {
            var r;
            return e += "", t = "" + (Number(t) + 1), n = Boolean(n), r = "!", "/" !== e[0] && (r += "/"), r += e, r += "@", r += t, n === !0 && (r += "!hidden"), r
        }, t.prototype.set = function (e, t, n) {
            return window.location.hash = this.createHash(e, t, n)
        }, t.prototype.update = function (e, t, n) {
            var r;
            return r = this.parse(window.location.hash) || n, r[e] = t, this.set(r.file, r.slide, r.hidden)
        }, t.prototype.offAll = function () {
            return window.removeEventListener("hashchange", this.onchange, !1), window.location.hash = "", t.__super__.offAll.call(this)
        }, t
    }(e)
}),
function (e, t) {
    function n(e) {
        var t = e.length,
            n = ot.type(e);
        return ot.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e) {
        var t = ht[e] = {};
        return ot.each(e.match(at) || [], function (e, n) {
            t[n] = !0
        }), t
    }
    function i() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = ot.expando + Math.random()
    }
    function o(e, n, r) {
        var i;
        if (r === t && 1 === e.nodeType) if (i = "data-" + n.replace(vt, "-$1").toLowerCase(), r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : yt.test(r) ? JSON.parse(r) : r
                } catch (o) {}
                gt.set(e, n, r)
            } else r = t;
        return r
    }
    function s() {
        return !0
    }
    function a() {
        return !1
    }
    function u() {
        try {
            return X.activeElement
        } catch (e) {}
    }
    function l(e, t) {
        for (;
        (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    function c(e, t, n) {
        if (ot.isFunction(t)) return ot.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType) return ot.grep(e, function (e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (Nt.test(t)) return ot.filter(t, e, n);
            t = ot.filter(t, e)
        }
        return ot.grep(e, function (e) {
            return tt.call(t, e) >= 0 !== n
        })
    }
    function p(e, t) {
        return ot.nodeName(e, "table") && ot.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function f(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }
    function d(e) {
        var t = Rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function h(e, t) {
        for (var n = e.length, r = 0; n > r; r++) mt.set(e[r], "globalEval", !t || mt.get(t[r], "globalEval"))
    }
    function g(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (mt.hasData(e) && (o = mt.access(e), s = ot.extend({}, o), l = o.events, mt.set(t, s), l)) {
                delete s.handle, s.events = {};
                for (i in l) for (n = 0, r = l[i].length; r > n; n++) ot.event.add(t, i, l[i][n])
            }
            gt.hasData(e) && (a = gt.access(e), u = ot.extend({}, a), gt.set(t, u))
        }
    }
    function m(e, n) {
        var r = e.getElementsByTagName ? e.getElementsByTagName(n || "*") : e.querySelectorAll ? e.querySelectorAll(n || "*") : [];
        return n === t || n && ot.nodeName(e, n) ? ot.merge([e], r) : r
    }
    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ht.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
    function v(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Qt.length; i--;) if (t = Qt[i] + n, t in e) return t;
        return r
    }
    function x(e, t) {
        return e = t || e, "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e)
    }
    function w(t) {
        return e.getComputedStyle(t, null)
    }
    function b(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = mt.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && x(r) && (o[s] = mt.access(r, "olddisplay", S(r.nodeName)))) : o[s] || (i = x(r), (n && "none" !== n || !i) && mt.set(r, "olddisplay", i ? n : ot.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }
    function k(e, t, n) {
        var r = Xt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function _(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += ot.css(e, n + Vt[o], !0, i)), r ? ("content" === n && (s -= ot.css(e, "padding" + Vt[o], !0, i)), "margin" !== n && (s -= ot.css(e, "border" + Vt[o] + "Width", !0, i))) : (s += ot.css(e, "padding" + Vt[o], !0, i), "padding" !== n && (s += ot.css(e, "border" + Vt[o] + "Width", !0, i)));
        return s
    }
    function C(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = w(e),
            s = ot.support.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ut.test(i)) return i;
            r = s && (ot.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + _(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }
    function S(e) {
        var t = X,
            n = Yt[e];
        return n || (n = T(e, t), "none" !== n && n || (It = (It || ot("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = T(e, t), It.detach()), Yt[e] = n), n
    }
    function T(e, t) {
        var n = ot(t.createElement(e)).appendTo(t.body),
            r = ot.css(n[0], "display");
        return n.remove(), r
    }
    function E(e, t, n, r) {
        var i;
        if (ot.isArray(t)) ot.each(t, function (t, i) {
                n || en.test(e) ? r(e, i) : E(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== ot.type(t)) r(e, t);
        else for (i in t) E(e + "[" + i + "]", t[i], n, r)
    }
    function N(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(at) || [];
            if (ot.isFunction(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function P(e, n, r, i) {
        function o(u) {
            var l;
            return s[u] = !0, ot.each(e[u] || [], function (e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || a || s[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var s = {}, a = e === vn;
        return o(n.dataTypes[0]) || !s["*"] && o("*")
    }
    function A(e, n) {
        var r, i, o = ot.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        return i && ot.extend(!0, e, i), e
    }
    function j(e, n, r) {
        for (var i, o, s, a, u = e.contents, l = e.dataTypes;
        "*" === l[0];) l.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
        if (i) for (o in u) if (u[o] && u[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in r) s = l[0];
        else {
            for (o in r) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    s = o;
                    break
                }
                a || (a = o)
            }
            s = s || a
        }
        return s ? (s !== l[0] && l.unshift(s), r[s]) : t
    }
    function D(e, t, n, r) {
        var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s) for (i in l) if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0) if (s && e["throws"]) t = s(t);
                else try {
                        t = s(t)
                } catch (p) {
                return {
                    state: "parsererror",
                    error: s ? p : "No conversion from " + u + " to " + o
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    function F() {
        return setTimeout(function () {
            En = t
        }), En = ot.now()
    }
    function O(e, t) {
        ot.each(t, function (t, n) {
            for (var r = (Fn[t] || []).concat(Fn["*"]), i = 0, o = r.length; o > i; i++) if (r[i].call(e, t, n)) return
        })
    }
    function H(e, t, n) {
        var r, i, o = 0,
            s = Dn.length,
            a = ot.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                for (var t = En || F(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
                return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
            }, l = a.promise({
                elem: e,
                props: ot.extend({}, t),
                opts: ot.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: En || F(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = ot.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (q(c, l.opts.specialEasing); s > o; o++) if (r = Dn[o].call(l, e, c, l.opts)) return r;
        return O(l, c), ot.isFunction(l.opts.start) && l.opts.start.call(e, l), ot.fx.timer(ot.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function q(e, t) {
        var n, r, i, o, s;
        for (n in e) if (r = ot.camelCase(n), i = t[r], o = e[n], ot.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = ot.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }
    function L(e, n, r) {
        var i, o, s, a, u, l, c, p, f, d = this,
            h = e.style,
            g = {}, m = [],
            y = e.nodeType && x(e);
        r.queue || (p = ot._queueHooks(e, "fx"), null == p.unqueued && (p.unqueued = 0, f = p.empty.fire, p.empty.fire = function () {
            p.unqueued || f()
        }), p.unqueued++, d.always(function () {
            d.always(function () {
                p.unqueued--, ot.queue(e, "fx").length || p.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in n || "width" in n) && (r.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ot.css(e, "display") && "none" === ot.css(e, "float") && (h.display = "inline-block")), r.overflow && (h.overflow = "hidden", d.always(function () {
            h.overflow = r.overflow[0], h.overflowX = r.overflow[1], h.overflowY = r.overflow[2]
        })), u = mt.get(e, "fxshow");
        for (i in n) if (s = n[i], Pn.exec(s)) {
                if (delete n[i], l = l || "toggle" === s, s === (y ? "hide" : "show")) {
                    if ("show" !== s || u === t || u[i] === t) continue;
                    y = !0
                }
                m.push(i)
            }
        if (a = m.length) {
            u = mt.get(e, "fxshow") || mt.access(e, "fxshow", {}), "hidden" in u && (y = u.hidden), l && (u.hidden = !y), y ? ot(e).show() : d.done(function () {
                ot(e).hide()
            }), d.done(function () {
                var t;
                mt.remove(e, "fxshow");
                for (t in g) ot.style(e, t, g[t])
            });
            for (i = 0; a > i; i++) o = m[i], c = d.createTween(o, y ? u[o] : 0), g[o] = u[o] || ot.style(e, o), o in u || (u[o] = c.start, y && (c.end = c.start, c.start = "width" === o || "height" === o ? 1 : 0))
        }
    }
    function R(e, t, n, r, i) {
        return new R.prototype.init(e, t, n, r, i)
    }
    function $(e, t) {
        var n, r = {
                height: e
            }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Vt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    function M(e) {
        return ot.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var W, I, B = typeof t,
        z = e.location,
        X = e.document,
        U = X.documentElement,
        K = e.jQuery,
        Y = e.$,
        G = {}, J = [],
        V = "2.0.0",
        Q = J.concat,
        Z = J.push,
        et = J.slice,
        tt = J.indexOf,
        nt = G.toString,
        rt = G.hasOwnProperty,
        it = V.trim,
        ot = function (e, t) {
            return new ot.fn.init(e, t, W)
        }, st = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        at = /\S+/g,
        ut = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        lt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ct = /^-ms-/,
        pt = /-([\da-z])/gi,
        ft = function (e, t) {
            return t.toUpperCase()
        }, dt = function () {
            X.removeEventListener("DOMContentLoaded", dt, !1), e.removeEventListener("load", dt, !1), ot.ready()
        };
    ot.fn = ot.prototype = {
        jquery: V,
        constructor: ot,
        init: function (e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ut.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof ot ? n[0] : n, ot.merge(this, ot.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : X, !0)), lt.test(i[1]) && ot.isPlainObject(n)) for (i in n) ot.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                return o = X.getElementById(i[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = X, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ot.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ot.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function () {
            return et.call(this)
        },
        get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function (e) {
            var t = ot.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return ot.each(this, e, t)
        },
        ready: function (e) {
            return ot.ready.promise().done(e), this
        },
        slice: function () {
            return this.pushStack(et.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function (e) {
            return this.pushStack(ot.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: Z,
        sort: [].sort,
        splice: [].splice
    }, ot.fn.init.prototype = ot.fn, ot.extend = ot.fn.extend = function () {
        var e, n, r, i, o, s, a = arguments[0] || {}, u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, u = 2), "object" == typeof a || ot.isFunction(a) || (a = {}), l === u && (a = this, --u); l > u; u++) if (null != (e = arguments[u])) for (n in e) r = a[n], i = e[n], a !== i && (c && i && (ot.isPlainObject(i) || (o = ot.isArray(i))) ? (o ? (o = !1, s = r && ot.isArray(r) ? r : []) : s = r && ot.isPlainObject(r) ? r : {}, a[n] = ot.extend(c, s, i)) : i !== t && (a[n] = i));
        return a
    }, ot.extend({
        expando: "jQuery" + (V + Math.random()).replace(/\D/g, ""),
        noConflict: function (t) {
            return e.$ === ot && (e.$ = Y), t && e.jQuery === ot && (e.jQuery = K), ot
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? ot.readyWait++ : ot.ready(!0)
        },
        ready: function (e) {
            (e === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, e !== !0 && --ot.readyWait > 0 || (I.resolveWith(X, [ot]), ot.fn.trigger && ot(X).trigger("ready").off("ready")))
        },
        isFunction: function (e) {
            return "function" === ot.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? G[nt.call(e)] || "object" : typeof e
        },
        isPlainObject: function (e) {
            if ("object" !== ot.type(e) || e.nodeType || ot.isWindow(e)) return !1;
            try {
                if (e.constructor && !rt.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            return !0
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw Error(e)
        },
        parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || X;
            var r = lt.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = ot.buildFragment([e], t, i), i && ot(i).remove(), ot.merge([], r.childNodes))
        },
        parseJSON: JSON.parse,
        parseXML: function (e) {
            var n, r;
            if (!e || "string" != typeof e) return null;
            try {
                r = new DOMParser, n = r.parseFromString(e, "text/xml")
            } catch (i) {
                n = t
            }
            return (!n || n.getElementsByTagName("parsererror").length) && ot.error("Invalid XML: " + e), n
        },
        noop: function () {},
        globalEval: function (e) {
            var t, n = eval;
            e = ot.trim(e), e && (1 === e.indexOf("use strict") ? (t = X.createElement("script"), t.text = e, X.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function (e) {
            return e.replace(ct, "ms-").replace(pt, ft)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, r) {
            var i, o = 0,
                s = e.length,
                a = n(e);
            if (r) {
                if (a) for (; s > o && (i = t.apply(e[o], r), i !== !1); o++);
                else for (o in e) if (i = t.apply(e[o], r), i === !1) break
            } else if (a) for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: function (e) {
            return null == e ? "" : it.call(e)
        },
        makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ot.merge(r, "string" == typeof e ? [e] : e) : Z.call(r, e)), r
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : tt.call(t, e, n)
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
            else for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                o = 0,
                s = e.length;
            for (n = !! n; s > o; o++) r = !! t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function (e, t, r) {
            var i, o = 0,
                s = e.length,
                a = n(e),
                u = [];
            if (a) for (; s > o; o++) i = t(e[o], o, r), null != i && (u[u.length] = i);
            else for (o in e) i = t(e[o], o, r), null != i && (u[u.length] = i);
            return Q.apply([], u)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (r = e[n], n = e, e = r), ot.isFunction(e) ? (i = et.call(arguments, 2), o = function () {
                return e.apply(n || this, i.concat(et.call(arguments)))
            }, o.guid = e.guid = e.guid || ot.guid++, o) : t
        },
        access: function (e, n, r, i, o, s, a) {
            var u = 0,
                l = e.length,
                c = null == r;
            if ("object" === ot.type(r)) {
                o = !0;
                for (u in r) ot.access(e, n, u, r[u], !0, s, a)
            } else if (i !== t && (o = !0, ot.isFunction(i) || (a = !0), c && (a ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                return c.call(ot(e), n)
            })), n)) for (; l > u; u++) n(e[u], r, a ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : s
        },
        now: Date.now,
        swap: function (e, t, n, r) {
            var i, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = s[o];
            return i
        }
    }), ot.ready.promise = function (t) {
        return I || (I = ot.Deferred(), "complete" === X.readyState ? setTimeout(ot.ready) : (X.addEventListener("DOMContentLoaded", dt, !1), e.addEventListener("load", dt, !1))), I.promise(t)
    }, ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        G["[object " + t + "]"] = t.toLowerCase()
    }), W = ot(X),
    function (e, t) {
        function n(e) {
            return xt.test(e + "")
        }
        function r() {
            var e, t = [];
            return e = function (n, r) {
                return t.push(n += " ") > T.cacheLength && delete e[t.shift()], e[n] = r
            }
        }
        function i(e) {
            return e[M] = !0, e
        }
        function o(e) {
            var t = F.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }
        function s(e, t, n, r) {
            var i, o, s, a, u, l, c, p, f, g;
            if ((t ? t.ownerDocument || t : W) !== F && D(t), t = t || F, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (a = t.nodeType) && 9 !== a) return [];
            if (H && !r) {
                if (i = wt.exec(e)) if (s = i[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(s), !o || !o.parentNode) return n;
                            if (o.id === s) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && $(t, o) && o.id === s) return n.push(o), n
                    } else {
                        if (i[2]) return tt.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = i[3]) && I.getElementsByClassName && t.getElementsByClassName) return tt.apply(n, t.getElementsByClassName(s)), n
                    }
                if (I.qsa && (!q || !q.test(e))) {
                    if (p = c = M, f = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (l = d(e), (c = t.getAttribute("id")) ? p = c.replace(_t, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;) l[u] = p + h(l[u]);
                        f = ht.test(e) && t.parentNode || t, g = l.join(",")
                    }
                    if (g) try {
                            return tt.apply(n, f.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return k(e.replace(pt, "$1"), t, n, r)
        }
        function a(e, t) {
            var n = t && e,
                r = n && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }
        function u(e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
        }
        function l(e, n, r) {
            var i;
            return r ? t : i = e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }
        function c(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function p(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function f(e) {
            return i(function (t) {
                return t = +t, i(function (n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function d(e, t) {
            var n, r, i, o, a, u, l, c = U[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, u = [], l = T.preFilter; a;) {
                (!n || (r = ft.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(i = [])), n = !1, (r = dt.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(pt, " ")
                }), a = a.slice(n.length));
                for (o in T.filter)!(r = vt[o].exec(a)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? s.error(e) : U(e, u).slice(0)
        }
        function h(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }
        function g(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = z++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
            } : function (t, n, s) {
                var a, u, l, c = B + " " + o;
                if (s) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                } else for (; t = t[r];) if (1 === t.nodeType || i) if (l = t[M] || (t[M] = {}), (u = l[r]) && u[0] === c) {
                                if ((a = u[1]) === !0 || a === S) return a === !0
                            } else if (u = l[r] = [c], u[1] = e(t, n, s) || S, u[1] === !0) return !0
            }
        }
        function m(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }
        function y(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
            return s
        }
        function v(e, t, n, r, o, s) {
            return r && !r[M] && (r = v(r)), o && !o[M] && (o = v(o, s)), i(function (i, s, a, u) {
                var l, c, p, f = [],
                    d = [],
                    h = s.length,
                    g = i || b(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !i && t ? g : y(g, f, e, a, u),
                    v = n ? o || (i ? e : h || r) ? [] : s : m;
                if (n && n(m, v, a, u), r) for (l = y(v, d), r(l, [], a, u), c = l.length; c--;)(p = l[c]) && (v[d[c]] = !(m[d[c]] = p));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = v.length; c--;)(p = v[c]) && l.push(m[c] = p);
                            o(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(p = v[c]) && (l = o ? rt.call(i, p) : f[c]) > -1 && (i[l] = !(s[l] = p))
                    }
                } else v = y(v === s ? v.splice(h, v.length) : v), o ? o(null, s, v, u) : tt.apply(s, v)
            })
        }
        function x(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = g(function (e) {
                    return e === t
                }, s, !0), l = g(function (e) {
                    return rt.call(t, e) > -1
                }, s, !0), c = [
                    function (e, n, r) {
                        return !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                    }
                ]; i > a; a++) if (n = T.relative[e[a].type]) c = [g(m(c), n)];
                else {
                    if (n = T.filter[e[a].type].apply(null, e[a].matches), n[M]) {
                        for (r = ++a; i > r && !T.relative[e[r].type]; r++);
                        return v(a > 1 && m(c), a > 1 && h(e.slice(0, a - 1)).replace(pt, "$1"), n, r > a && x(e.slice(a, r)), i > r && x(e = e.slice(r)), i > r && h(e))
                    }
                    c.push(n)
                }
            return m(c)
        }
        function w(e, t) {
            var n = 0,
                r = t.length > 0,
                o = e.length > 0,
                a = function (i, a, u, l, c) {
                    var p, f, d, h = [],
                        g = 0,
                        m = "0",
                        v = i && [],
                        x = null != c,
                        w = A,
                        b = i || o && T.find.TAG("*", c && a.parentNode || a),
                        k = B += null == w ? 1 : Math.random() || .1;
                    for (x && (A = a !== F && a, S = n); null != (p = b[m]); m++) {
                        if (o && p) {
                            for (f = 0; d = e[f++];) if (d(p, a, u)) {
                                    l.push(p);
                                    break
                                }
                            x && (B = k, S = ++n)
                        }
                        r && ((p = !d && p) && g--, i && v.push(p))
                    }
                    if (g += m, r && m !== g) {
                        for (f = 0; d = t[f++];) d(v, h, a, u);
                        if (i) {
                            if (g > 0) for (; m--;) v[m] || h[m] || (h[m] = Z.call(l));
                            h = y(h)
                        }
                        tt.apply(l, h), x && !i && h.length > 0 && g + t.length > 1 && s.uniqueSort(l)
                    }
                    return x && (B = k, A = w), v
                };
            return r ? i(a) : a
        }
        function b(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++) s(e, t[r], n);
            return n
        }
        function k(e, t, n, r) {
            var i, o, s, a, u, l = d(e);
            if (!r && 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && H && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(Ct, St), t) || [])[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = vt.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);) if ((u = T.find[a]) && (r = u(s.matches[0].replace(Ct, St), ht.test(o[0].type) && t.parentNode || t))) {
                        if (o.splice(i, 1), e = r.length && h(o), !e) return tt.apply(n, r), n;
                        break
                    }
            }
            return P(e, l)(r, t, !H, n, ht.test(e)), n
        }
        function _() {}
        var C, S, T, E, N, P, A, j, D, F, O, H, q, L, R, $, M = "sizzle" + -new Date,
            W = e.document,
            I = {}, B = 0,
            z = 0,
            X = r(),
            U = r(),
            K = r(),
            Y = !1,
            G = function () {
                return 0
            }, J = typeof t,
            V = 1 << 31,
            Q = [],
            Z = Q.pop,
            et = Q.push,
            tt = Q.push,
            nt = Q.slice,
            rt = Q.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
                return -1
            }, it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            st = "[\\x20\\t\\r\\n\\f]",
            at = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ut = at.replace("w", "w#"),
            lt = "\\[" + st + "*(" + at + ")" + st + "*(?:([*^$|!~]?=)" + st + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ut + ")|)|)" + st + "*\\]",
            ct = ":(" + at + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + lt.replace(3, 8) + ")*)|.*)\\)|)",
            pt = RegExp("^" + st + "+|((?:^|[^\\\\])(?:\\\\.)*)" + st + "+$", "g"),
            ft = RegExp("^" + st + "*," + st + "*"),
            dt = RegExp("^" + st + "*([>+~]|" + st + ")" + st + "*"),
            ht = RegExp(st + "*[+~]"),
            gt = RegExp("=" + st + "*([^\\]'\"]*)" + st + "*\\]", "g"),
            mt = RegExp(ct),
            yt = RegExp("^" + ut + "$"),
            vt = {
                ID: RegExp("^#(" + at + ")"),
                CLASS: RegExp("^\\.(" + at + ")"),
                TAG: RegExp("^(" + at.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + lt),
                PSEUDO: RegExp("^" + ct),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + st + "*(even|odd|(([+-]|)(\\d*)n|)" + st + "*(?:([+-]|)" + st + "*(\\d+)|))" + st + "*\\)|)", "i"),
                "boolean": RegExp("^(?:" + it + ")$", "i"),
                needsContext: RegExp("^" + st + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + st + "*((?:-\\d)?\\d*)" + st + "*\\)|)(?=[^-]|$)", "i")
            }, xt = /^[^{]+\{\s*\[native \w/,
            wt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /^(?:input|select|textarea|button)$/i,
            kt = /^h\d$/i,
            _t = /'|\\/g,
            Ct = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
            St = function (e, t) {
                var n = "0x" + t - 65536;
                return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
            };
        try {
            tt.apply(Q = nt.call(W.childNodes), W.childNodes), Q[W.childNodes.length].nodeType
        } catch (Tt) {
            tt = {
                apply: Q.length ? function (e, t) {
                    et.apply(e, nt.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        N = s.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, D = s.setDocument = function (e) {
            var r = e ? e.ownerDocument || e : W;
            return r !== F && 9 === r.nodeType && r.documentElement ? (F = r, O = r.documentElement, H = !N(r), I.getElementsByTagName = o(function (e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), I.attributes = o(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), I.getElementsByClassName = o(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), I.sortDetached = o(function (e) {
                return 1 & e.compareDocumentPosition(F.createElement("div"))
            }), I.getById = o(function (e) {
                return O.appendChild(e).id = M, !r.getElementsByName || !r.getElementsByName(M).length
            }), I.getById ? (T.find.ID = function (e, t) {
                if (typeof t.getElementById !== J && H) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(Ct, St);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (T.find.ID = function (e, n) {
                if (typeof n.getElementById !== J && H) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== J && r.getAttributeNode("id").value === e ? [r] : t : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(Ct, St);
                return function (e) {
                    var n = typeof e.getAttributeNode !== J && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = I.getElementsByTagName ? function (e, n) {
                return typeof n.getElementsByTagName !== J ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = I.getElementsByClassName && function (e, n) {
                return typeof n.getElementsByClassName !== J && H ? n.getElementsByClassName(e) : t
            }, L = [], q = [], (I.qsa = n(r.querySelectorAll)) && (o(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || q.push("\\[" + st + "*(?:value|" + it + ")"), e.querySelectorAll(":checked").length || q.push(":checked")
            }), o(function (e) {
                var t = F.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && q.push("[*^$]=" + st + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
            })), (I.matchesSelector = n(R = O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function (e) {
                I.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), L.push("!=", ct)
            }), q = q.length && RegExp(q.join("|")), L = L.length && RegExp(L.join("|")), $ = n(O.contains) || O.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, G = O.compareDocumentPosition ? function (e, t) {
                if (e === t) return Y = !0, 0;
                var n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return n ? 1 & n || !I.sortDetached && t.compareDocumentPosition(e) === n ? e === r || $(W, e) ? -1 : t === r || $(W, t) ? 1 : j ? rt.call(j, e) - rt.call(j, t) : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var n, i = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    u = [e],
                    l = [t];
                if (e === t) return Y = !0, 0;
                if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : j ? rt.call(j, e) - rt.call(j, t) : 0;
                if (o === s) return a(e, t);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; u[i] === l[i];) i++;
                return i ? a(u[i], l[i]) : u[i] === W ? -1 : l[i] === W ? 1 : 0
            }, F) : F
        }, s.matches = function (e, t) {
            return s(e, null, null, t)
        }, s.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== F && D(e), t = t.replace(gt, "='$1']"), !(!I.matchesSelector || !H || L && L.test(t) || q && q.test(t))) try {
                    var n = R.call(e, t);
                    if (n || I.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (r) {}
            return s(t, F, null, [e]).length > 0
        }, s.contains = function (e, t) {
            return (e.ownerDocument || e) !== F && D(e), $(e, t)
        }, s.attr = function (e, n) {
            (e.ownerDocument || e) !== F && D(e);
            var r = T.attrHandle[n.toLowerCase()],
                i = r && r(e, n, !H);
            return i === t ? I.attributes || !H ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
        }, s.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, s.uniqueSort = function (e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (Y = !I.detectDuplicates, j = !I.sortStable && e.slice(0), e.sort(G), Y) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return e
        }, E = s.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r]; r++) n += E(t);
            return n
        }, T = s.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: vt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Ct, St), e[3] = (e[4] || e[5] || "").replace(Ct, St), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || s.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && s.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return vt.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && mt.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Ct, St).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = X[e + " "];
                    return t || (t = RegExp("(^|" + st + ")" + e + "(" + st + "|$)")) && X(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== J && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = s.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, p, f, d, h, g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            y = a && t.nodeName.toLowerCase(),
                            v = !u && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (p = t; p = p[g];) if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild], s && v) {
                                for (c = m[M] || (m[M] = {}), l = c[e] || [], d = l[0] === B && l[1], f = l[0] === B && l[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (f = d = 0) || h.pop();) if (1 === p.nodeType && ++f && p === t) {
                                        c[e] = [B, d, f];
                                        break
                                    }
                            } else if (v && (l = (t[M] || (t[M] = {}))[e]) && l[0] === B) f = l[1];
                            else for (;
                                (p = ++d && p && p[g] || (f = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++f || (v && ((p[M] || (p[M] = {}))[e] = [B, f]), p !== t)););
                            return f -= i, f === r || 0 === f % r && f / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, r = T.pseudos[e] || T.setFilters[e.toLowerCase()] || s.error("unsupported pseudo: " + e);
                    return r[M] ? r(t) : r.length > 1 ? (n = [e, e, "", t], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, n) {
                        for (var i, o = r(e, t), s = o.length; s--;) i = rt.call(e, o[s]), e[i] = !(n[i] = o[s])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [],
                        n = [],
                        r = P(e.replace(pt, "$1"));
                    return r[M] ? i(function (e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }),
                has: i(function (e) {
                    return function (t) {
                        return s(e, t).length > 0
                    }
                }),
                contains: i(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function (e) {
                    return yt.test(e || "") || s.error("unsupported lang: " + e), e = e.replace(Ct, St).toLowerCase(),
                    function (t) {
                        var n;
                        do if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === O
                },
                focus: function (e) {
                    return e === F.activeElement && (!F.hasFocus || F.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                },
                parent: function (e) {
                    return !T.pseudos.empty(e)
                },
                header: function (e) {
                    return kt.test(e.nodeName)
                },
                input: function (e) {
                    return bt.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: f(function () {
                    return [0]
                }),
                last: f(function (e, t) {
                    return [t - 1]
                }),
                eq: f(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: f(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: f(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: f(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: f(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
                    return e
                })
            }
        };
        for (C in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) T.pseudos[C] = c(C);
        for (C in {
            submit: !0,
            reset: !0
        }) T.pseudos[C] = p(C);
        P = s.compile = function (e, t) {
            var n, r = [],
                i = [],
                o = K[e + " "];
            if (!o) {
                for (t || (t = d(e)), n = t.length; n--;) o = x(t[n]), o[M] ? r.push(o) : i.push(o);
                o = K(e, w(i, r))
            }
            return o
        }, T.pseudos.nth = T.pseudos.eq, _.prototype = T.filters = T.pseudos, T.setFilters = new _, I.sortStable = M.split("").sort(G).join("") === M, D(), [0, 0].sort(G), I.detectDuplicates = Y, o(function (e) {
            if (e.innerHTML = "<a href='#'></a>", "#" !== e.firstChild.getAttribute("href")) for (var t = "type|href|height|width".split("|"), n = t.length; n--;) T.attrHandle[t[n]] = l
        }), o(function (e) {
            if (null != e.getAttribute("disabled")) for (var t = it.split("|"), n = t.length; n--;) T.attrHandle[t[n]] = u
        }), ot.find = s, ot.expr = s.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = s.uniqueSort, ot.text = s.getText, ot.isXMLDoc = s.isXML, ot.contains = s.contains
    }(e);
    var ht = {};
    ot.Callbacks = function (e) {
        e = "string" == typeof e ? ht[e] || r(e) : ot.extend({}, e);
        var n, i, o, s, a, u, l = [],
            c = !e.once && [],
            p = function (t) {
                for (n = e.memory && t, i = !0, u = s || 0, s = 0, a = l.length, o = !0; l && a > u; u++) if (l[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                o = !1, l && (c ? c.length && p(c.shift()) : n ? l = [] : f.disable())
            }, f = {
                add: function () {
                    if (l) {
                        var t = l.length;
                        (function r(t) {
                            ot.each(t, function (t, n) {
                                var i = ot.type(n);
                                "function" === i ? e.unique && f.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        })(arguments), o ? a = l.length : n && (s = t, p(n))
                    }
                    return this
                },
                remove: function () {
                    return l && ot.each(arguments, function (e, t) {
                        for (var n;
                        (n = ot.inArray(t, l, n)) > -1;) l.splice(n, 1), o && (a >= n && a--, u >= n && u--)
                    }), this
                },
                has: function (e) {
                    return e ? ot.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], a = 0, this
                },
                disable: function () {
                    return l = c = n = t, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return c = t, n || f.disable(), this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !l || i && !c || (o ? c.push(t) : p(t)), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return f
    }, ot.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                ["notify", "progress", ot.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return ot.Deferred(function (n) {
                            ot.each(t, function (t, o) {
                                var s = o[0],
                                    a = ot.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && ot.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? ot.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, ot.each(t, function (e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t, n, r, i = 0,
                o = et.call(arguments),
                s = o.length,
                a = 1 !== s || e && ot.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : ot.Deferred(),
                l = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? et.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1) for (t = Array(s), n = Array(s), r = Array(s); s > i; i++) o[i] && ot.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    }), ot.support = function (t) {
        var n = X.createElement("input"),
            r = X.createDocumentFragment(),
            i = X.createElement("div"),
            o = X.createElement("select"),
            s = o.appendChild(X.createElement("option"));
        return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = s.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled, n = X.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in e, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === i.style.backgroundClip, ot(function () {
            var n, r, o = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                s = X.getElementsByTagName("body")[0];
            s && (n = X.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(i), i.innerHTML = "", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", ot.swap(s, null != s.style.zoom ? {
                zoom: 1
            } : {}, function () {
                t.boxSizing = 4 === i.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
                width: "4px"
            }).width, r = i.appendChild(X.createElement("div")), r.style.cssText = i.style.cssText = o, r.style.marginRight = r.style.width = "0", i.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), s.removeChild(n))
        }), t) : t
    }({});
    var gt, mt, yt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        vt = /([A-Z])/g;
    i.uid = 1, i.accepts = function (e) {
        return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0
    }, i.prototype = {
        key: function (e) {
            if (!i.accepts(e)) return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = i.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, ot.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function (e, t, n) {
            var r, i = this.key(e),
                o = this.cache[i];
            if ("string" == typeof t) o[t] = n;
            else if (ot.isEmptyObject(o)) this.cache[i] = t;
            else for (r in t) o[r] = t[r]
        },
        get: function (e, n) {
            var r = this.cache[this.key(e)];
            return n === t ? r : r[n]
        },
        access: function (e, n, r) {
            return n === t || n && "string" == typeof n && r === t ? this.get(e, n) : (this.set(e, n, r), r !== t ? r : n)
        },
        remove: function (e, n) {
            var r, i, o = this.key(e),
                s = this.cache[o];
            if (n === t) this.cache[o] = {};
            else {
                ot.isArray(n) ? i = n.concat(n.map(ot.camelCase)) : n in s ? i = [n] : (i = ot.camelCase(n), i = i in s ? [i] : i.match(at) || []), r = i.length;
                for (; r--;) delete s[i[r]]
            }
        },
        hasData: function (e) {
            return !ot.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function (e) {
            delete this.cache[this.key(e)]
        }
    }, gt = new i, mt = new i, ot.extend({
        acceptData: i.accepts,
        hasData: function (e) {
            return gt.hasData(e) || mt.hasData(e)
        },
        data: function (e, t, n) {
            return gt.access(e, t, n)
        },
        removeData: function (e, t) {
            gt.remove(e, t)
        },
        _data: function (e, t, n) {
            return mt.access(e, t, n)
        },
        _removeData: function (e, t) {
            mt.remove(e, t)
        }
    }), ot.fn.extend({
        data: function (e, n) {
            var r, i, s = this[0],
                a = 0,
                u = null;
            if (e === t) {
                if (this.length && (u = gt.get(s), 1 === s.nodeType && !mt.get(s, "hasDataAttrs"))) {
                    for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.substring(5)), o(s, i, u[i]));
                    mt.set(s, "hasDataAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function () {
                gt.set(this, e)
            }) : ot.access(this, function (n) {
                var r, i = ot.camelCase(e);
                if (s && n === t) {
                    if (r = gt.get(s, e), r !== t) return r;
                    if (r = gt.get(s, i), r !== t) return r;
                    if (r = o(s, i, t), r !== t) return r
                } else this.each(function () {
                        var r = gt.get(this, i);
                        gt.set(this, i, n), -1 !== e.indexOf("-") && r !== t && gt.set(this, e, n)
                    })
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                gt.remove(this, e)
            })
        }
    }), ot.extend({
        queue: function (e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = mt.get(e, n), r && (!i || ot.isArray(r) ? i = mt.access(e, n, ot.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = ot.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ot._queueHooks(e, t),
                s = function () {
                    ot.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return mt.get(e, n) || mt.access(e, n, {
                empty: ot.Callbacks("once memory").add(function () {
                    mt.remove(e, [t + "queue", n])
                })
            })
        }
    }), ot.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? ot.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = ot.queue(this, e, n);
                ot._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ot.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                ot.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = ot.fx ? ot.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                o = ot.Deferred(),
                s = this,
                a = this.length,
                u = function () {
                    --i || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;) r = mt.get(s[a], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var xt, wt, bt = /[\t\r\n]/g,
        kt = /\r/g,
        _t = /^(?:input|select|textarea|button)$/i;
    ot.fn.extend({
        attr: function (e, t) {
            return ot.access(this, ot.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                ot.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return ot.access(this, ot.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[ot.propFix[e] || e]
            })
        },
        addClass: function (e) {
            var t, n, r, i, o, s = 0,
                a = this.length,
                u = "string" == typeof e && e;
            if (ot.isFunction(e)) return this.each(function (t) {
                    ot(this).addClass(e.call(this, t, this.className))
                });
            if (u) for (t = (e || "").match(at) || []; a > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(bt, " ") : " ")) {
                        for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = ot.trim(r)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, s = 0,
                a = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (ot.isFunction(e)) return this.each(function (t) {
                    ot(this).removeClass(e.call(this, t, this.className))
                });
            if (u) for (t = (e || "").match(at) || []; a > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(bt, " ") : "")) {
                        for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        n.className = e ? ot.trim(r) : ""
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return ot.isFunction(e) ? this.each(function (n) {
                ot(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) for (var i, o = 0, s = ot(this), a = t, u = e.match(at) || []; i = u[o++];) a = r ? a : !s.hasClass(i), s[a ? "addClass" : "removeClass"](i);
                else(n === B || "boolean" === n) && (this.className && mt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : mt.get(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(bt, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = ot.isFunction(e), this.each(function (r) {
                        var o, s = ot(this);
                        1 === this.nodeType && (o = i ? e.call(this, r, s.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ot.isArray(o) && (o = ot.map(o, function (e) {
                            return null == e ? "" : e + ""
                        })), n = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                    });
                if (o) return n = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(kt, "") : null == r ? "" : r)
            }
        }
    }), ot.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++) if (n = r[u], !(!n.selected && u !== i || (ot.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ot(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function (e, t) {
                    for (var n, r, i = e.options, o = ot.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = ot.inArray(ot(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function (e, n, r) {
            var i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === B ? ot.prop(e, n, r) : (1 === s && ot.isXMLDoc(e) || (n = n.toLowerCase(), i = ot.attrHooks[n] || (ot.expr.match.boolean.test(n) ? wt : xt)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : (o = ot.find.attr(e, n), null == o ? t : o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : (ot.removeAttr(e, n), t))
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                o = t && t.match(at);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = ot.propFix[n] || n, ot.expr.match.boolean.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ot.support.radioValue && "radio" === t && ot.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, n, r) {
            var i, o, s, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !ot.isXMLDoc(e), s && (n = ot.propFix[n] || n, o = ot.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || _t.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), wt = {
        set: function (e, t, n) {
            return t === !1 ? ot.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ot.each(ot.expr.match.boolean.source.match(/\w+/g), function (e, n) {
        var r = ot.expr.attrHandle[n] || ot.find.attr;
        ot.expr.attrHandle[n] = function (e, n, i) {
            var o = ot.expr.attrHandle[n],
                s = i ? t : (ot.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return ot.expr.attrHandle[n] = o, s
        }
    }), ot.support.optSelected || (ot.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ot.propFix[this.toLowerCase()] = this
    }), ot.each(["radio", "checkbox"], function () {
        ot.valHooks[this] = {
            set: function (e, n) {
                return ot.isArray(n) ? e.checked = ot.inArray(ot(e).val(), n) >= 0 : t
            }
        }, ot.support.checkOn || (ot.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ct = /^key/,
        St = /^(?:mouse|contextmenu)|click/,
        Tt = /^(?:focusinfocus|focusoutblur)$/,
        Et = /^([^.]*)(?:\.(.+)|)$/;
    ot.event = {
        global: {},
        add: function (e, n, r, i, o) {
            var s, a, u, l, c, p, f, d, h, g, m, y = mt.get(e);
            if (y) {
                for (r.handler && (s = r, r = s.handler, o = s.selector), r.guid || (r.guid = ot.guid++), (l = y.events) || (l = y.events = {}), (a = y.handle) || (a = y.handle = function (e) {
                    return typeof ot === B || e && ot.event.triggered === e.type ? t : ot.event.dispatch.apply(a.elem, arguments)
                }, a.elem = e), n = (n || "").match(at) || [""], c = n.length; c--;) u = Et.exec(n[c]) || [], h = m = u[1], g = (u[2] || "").split(".").sort(), h && (f = ot.event.special[h] || {}, h = (o ? f.delegateType : f.bindType) || h, f = ot.event.special[h] || {}, p = ot.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: o,
                        needsContext: o && ot.expr.match.needsContext.test(o),
                        namespace: g.join(".")
                    }, s), (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, f.setup && f.setup.call(e, i, g, a) !== !1 || e.addEventListener && e.addEventListener(h, a, !1)), f.add && (f.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), ot.event.global[h] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, s, a, u, l, c, p, f, d, h, g, m = mt.hasData(e) && mt.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(at) || [""], l = t.length; l--;) if (a = Et.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                        for (p = ot.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = u[d] || [], a = a[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) c = f[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, p.remove && p.remove.call(e, c));
                        s && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || ot.removeEvent(e, d, m.handle), delete u[d])
                    } else for (d in u) ot.event.remove(e, d + t[l], n, r, !0);
                ot.isEmptyObject(u) && (delete m.handle, mt.remove(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var s, a, u, l, c, p, f, d = [i || X],
                h = rt.call(n, "type") ? n.type : n,
                g = rt.call(n, "namespace") ? n.namespace.split(".") : [];
            if (a = u = i = i || X, 3 !== i.nodeType && 8 !== i.nodeType && !Tt.test(h + ot.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), c = 0 > h.indexOf(":") && "on" + h, n = n[ot.expando] ? n : new ot.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ot.makeArray(r, [n]), f = ot.event.special[h] || {}, o || !f.trigger || f.trigger.apply(i, r) !== !1)) {
                if (!o && !f.noBubble && !ot.isWindow(i)) {
                    for (l = f.delegateType || h, Tt.test(l + h) || (a = a.parentNode); a; a = a.parentNode) d.push(a), u = a;
                    u === (i.ownerDocument || X) && d.push(u.defaultView || u.parentWindow || e)
                }
                for (s = 0;
                (a = d[s++]) && !n.isPropagationStopped();) n.type = s > 1 ? l : f.bindType || h, p = (mt.get(a, "events") || {})[n.type] && mt.get(a, "handle"), p && p.apply(a, r), p = c && a[c], p && ot.acceptData(a) && p.apply && p.apply(a, r) === !1 && n.preventDefault();
                return n.type = h, o || n.isDefaultPrevented() || f._default && f._default.apply(d.pop(), r) !== !1 || !ot.acceptData(i) || c && ot.isFunction(i[h]) && !ot.isWindow(i) && (u = i[c], u && (i[c] = null), ot.event.triggered = h, i[h](), ot.event.triggered = t, u && (i[c] = u)), n.result
            }
        },
        dispatch: function (e) {
            e = ot.event.fix(e);
            var n, r, i, o, s, a = [],
                u = et.call(arguments),
                l = (mt.get(this, "events") || {})[e.type] || [],
                c = ot.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = ot.event.handlers.call(this, e, l), n = 0;
                (o = a[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, r = 0;
                    (s = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(s.namespace)) && (e.handleObj = s, e.data = s.data, i = ((ot.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, s, a = [],
                u = n.delegateCount,
                l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l !== this; l = l.parentNode || this) if (l.disabled !== !0 || "click" !== e.type) {
                        for (i = [], r = 0; u > r; r++) s = n[r], o = s.selector + " ", i[o] === t && (i[o] = s.needsContext ? ot(o, this).index(l) >= 0 : ot.find(o, this, null, [l]).length), i[o] && i.push(s);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return n.length > u && a.push({
                elem: this,
                handlers: n.slice(u)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, s = n.button;
                return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || X, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[ot.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = St.test(i) ? this.mouseHooks : Ct.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new ot.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== u() && this.focus ? (this.focus(), !1) : t
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === u() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), !1) : t
                },
                _default: function (e) {
                    return ot.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = ot.extend(new ot.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ot.event.trigger(i, null, t) : ot.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ot.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, ot.Event = function (e, n) {
        return this instanceof ot.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? s : a) : this.type = e, n && ot.extend(this, n), this.timeStamp = e && e.timeStamp || ot.now(), this[ot.expando] = !0, t) : new ot.Event(e, n)
    }, ot.Event.prototype = {
        isDefaultPrevented: a,
        isPropagationStopped: a,
        isImmediatePropagationStopped: a,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = s, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = s, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = s, this.stopPropagation()
        }
    }, ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        ot.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !ot.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ot.support.focusinBubbles || ot.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                ot.event.simulate(t, e.target, ot.event.fix(e), !0)
            };
        ot.event.special[t] = {
            setup: function () {
                0 === n++ && X.addEventListener(e, r, !0)
            },
            teardown: function () {
                0 === --n && X.removeEventListener(e, r, !0)
            }
        }
    }), ot.fn.extend({
        on: function (e, n, r, i, o) {
            var s, u;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (u in e) this.on(u, n, r, e[u], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = a;
            else if (!i) return this;
            return 1 === o && (s = i, i = function (e) {
                return ot().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = ot.guid++)), this.each(function () {
                ot.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ot(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = a), this.each(function () {
                ot.event.remove(this, e, r, n)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                ot.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, n) {
            var r = this[0];
            return r ? ot.event.trigger(e, n, r, !0) : t
        }
    });
    var Nt = /^.[^:#\[\.,]*$/,
        Pt = ot.expr.match.needsContext,
        At = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ot.fn.extend({
        find: function (e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return t = this, this.pushStack(ot(e).filter(function () {
                    for (r = 0; i > r; r++) if (ot.contains(t[r], this)) return !0
                }));
            for (n = [], r = 0; i > r; r++) ot.find(e, this[r], n);
            return n = this.pushStack(i > 1 ? ot.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function (e) {
            var t = ot(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++) if (ot.contains(this, t[e])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(c(this, e || [], !0))
        },
        filter: function (e) {
            return this.pushStack(c(this, e || [], !1))
        },
        is: function (e) {
            return !!e && ("string" == typeof e ? Pt.test(e) ? ot(e, this.context).index(this[0]) >= 0 : ot.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], s = Pt.test(e) || "string" != typeof e ? ot(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ot.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? tt.call(ot(e), this[0]) : tt.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = "string" == typeof e ? ot(e, t) : ot.makeArray(e && e.nodeType ? [e] : e),
                r = ot.merge(this.get(), n);
            return this.pushStack(ot.unique(r))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ot.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return ot.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return ot.dir(e, "parentNode", n)
        },
        next: function (e) {
            return l(e, "nextSibling")
        },
        prev: function (e) {
            return l(e, "previousSibling")
        },
        nextAll: function (e) {
            return ot.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return ot.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return ot.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return ot.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return ot.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return ot.sibling(e.firstChild)
        },
        contents: function (e) {
            return ot.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ot.merge([], e.childNodes)
        }
    }, function (e, t) {
        ot.fn[e] = function (n, r) {
            var i = ot.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ot.filter(r, i)), this.length > 1 && (At[e] || ot.unique(i), "p" === e[0] && i.reverse()), this.pushStack(i)
        }
    }), ot.extend({
        filter: function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ot.find.matchesSelector(r, e) ? [r] : [] : ot.find.matches(e, ot.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        },
        dir: function (e, n, r) {
            for (var i = [], o = r !== t;
            (e = e[n]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                    if (o && ot(e).is(r)) break;
                    i.push(e)
                }
            return i
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Dt = /<([\w:]+)/,
        Ft = /<|&#?\w+;/,
        Ot = /<(?:script|style|link)/i,
        Ht = /^(?:checkbox|radio)$/i,
        qt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Lt = /^$|\/(?:java|ecma)script/i,
        Rt = /^true\/(.*)/,
        $t = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Mt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Mt.optgroup = Mt.option, Mt.tbody = Mt.tfoot = Mt.colgroup = Mt.caption = Mt.col = Mt.thead, Mt.th = Mt.td, ot.fn.extend({
        text: function (e) {
            return ot.access(this, function (e) {
                return e === t ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || X).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, r = e ? ot.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ot.cleanData(m(n)), n.parentNode && (t && ot.contains(n.ownerDocument, n) && h(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ot.cleanData(m(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return ot.clone(this, e, t)
            })
        },
        html: function (e) {
            return ot.access(this, function (e) {
                var n = this[0] || {}, r = 0,
                    i = this.length;
                if (e === t && 1 === n.nodeType) return n.innerHTML;
                if ("string" == typeof e && !Ot.test(e) && !Mt[(Dt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(jt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (ot.cleanData(m(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = ot.map(this, function (e) {
                return [e.nextSibling, e.parentNode]
            }),
                t = 0;
            return this.domManip(arguments, function (n) {
                var r = e[t++],
                    i = e[t++];
                i && (ot(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t, n) {
            e = Q.apply([], e);
            var r, i, o, s, a, u, l = 0,
                c = this.length,
                p = this,
                h = c - 1,
                g = e[0],
                y = ot.isFunction(g);
            if (y || !(1 >= c || "string" != typeof g || ot.support.checkClone) && qt.test(g)) return this.each(function (r) {
                    var i = p.eq(r);
                    y && (e[0] = g.call(this, r, i.html())), i.domManip(e, t, n)
                });
            if (c && (r = ot.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
                for (o = ot.map(m(r, "script"), f), s = o.length; c > l; l++) a = r, l !== h && (a = ot.clone(a, !0, !0), s && ot.merge(o, m(a, "script"))), t.call(this[l], a, l);
                if (s) for (u = o[o.length - 1].ownerDocument, ot.map(o, d), l = 0; s > l; l++) a = o[l], Lt.test(a.type || "") && !mt.access(a, "globalEval") && ot.contains(u, a) && (a.src ? ot._evalUrl(a.src) : ot.globalEval(a.textContent.replace($t, "")))
            }
            return this
        }
    }), ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        ot.fn[e] = function (e) {
            for (var n, r = [], i = ot(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), ot(i[s])[t](n), Z.apply(r, n.get());
            return this.pushStack(r)
        }
    }), ot.extend({
        clone: function (e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                u = ot.contains(e.ownerDocument, e);
            if (!(ot.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ot.isXMLDoc(e))) for (s = m(a), o = m(e), r = 0, i = o.length; i > r; r++) y(o[r], s[r]);
            if (t) if (n) for (o = o || m(e), s = s || m(a), r = 0, i = o.length; i > r; r++) g(o[r], s[r]);
                else g(e, a);
            return s = m(a, "script"), s.length > 0 && h(s, !u && m(e, "script")), a
        },
        buildFragment: function (e, t, n, r) {
            for (var i, o, s, a, u, l, c = 0, p = e.length, f = t.createDocumentFragment(), d = []; p > c; c++) if (i = e[c], i || 0 === i) if ("object" === ot.type(i)) ot.merge(d, i.nodeType ? [i] : i);
                    else if (Ft.test(i)) {
                for (o = o || f.appendChild(t.createElement("div")), s = (Dt.exec(i) || ["", ""])[1].toLowerCase(), a = Mt[s] || Mt._default, o.innerHTML = a[1] + i.replace(jt, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.firstChild;
                ot.merge(d, o.childNodes), o = f.firstChild, o.textContent = ""
            } else d.push(t.createTextNode(i));
            for (f.textContent = "", c = 0; i = d[c++];) if ((!r || -1 === ot.inArray(i, r)) && (u = ot.contains(i.ownerDocument, i), o = m(f.appendChild(i), "script"), u && h(o), n)) for (l = 0; i = o[l++];) Lt.test(i.type || "") && n.push(i);
            return f
        },
        cleanData: function (e) {
            for (var t, n, r, i = e.length, o = 0, s = ot.event.special; i > o; o++) {
                if (n = e[o], ot.acceptData(n) && (t = mt.access(n))) for (r in t.events) s[r] ? ot.event.remove(n, r) : ot.removeEvent(n, r, t.handle);
                gt.discard(n), mt.discard(n)
            }
        },
        _evalUrl: function (e) {
            return ot.ajax({
                url: e,
                type: "GET",
                dataType: "text",
                async: !1,
                global: !1,
                success: ot.globalEval
            })
        }
    }), ot.fn.extend({
        wrapAll: function (e) {
            var t;
            return ot.isFunction(e) ? this.each(function (t) {
                ot(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = ot(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function (e) {
            return ot.isFunction(e) ? this.each(function (t) {
                ot(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = ot(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = ot.isFunction(e);
            return this.each(function (n) {
                ot(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Wt, It, Bt = /^(none|table(?!-c[ea]).+)/,
        zt = /^margin/,
        Xt = RegExp("^(" + st + ")(.*)$", "i"),
        Ut = RegExp("^(" + st + ")(?!px)[a-z%]+$", "i"),
        Kt = RegExp("^([+-])=(" + st + ")", "i"),
        Yt = {
            BODY: "block"
        }, Gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Jt = {
            letterSpacing: 0,
            fontWeight: 400
        }, Vt = ["Top", "Right", "Bottom", "Left"],
        Qt = ["Webkit", "O", "Moz", "ms"];
    ot.fn.extend({
        css: function (e, n) {
            return ot.access(this, function (e, n, r) {
                var i, o, s = {}, a = 0;
                if (ot.isArray(n)) {
                    for (i = w(e), o = n.length; o > a; a++) s[n[a]] = ot.css(e, n[a], !1, i);
                    return s
                }
                return r !== t ? ot.style(e, n, r) : ot.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return b(this, !0)
        },
        hide: function () {
            return b(this)
        },
        toggle: function (e) {
            var t = "boolean" == typeof e;
            return this.each(function () {
                (t ? e : x(this)) ? ot(this).show() : ot(this).hide()
            })
        }
    }), ot.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, a, u = ot.camelCase(n),
                    l = e.style;
                return n = ot.cssProps[u] || (ot.cssProps[u] = v(l, u)), a = ot.cssHooks[n] || ot.cssHooks[u], r === t ? a && "get" in a && (o = a.get(e, !1, i)) !== t ? o : l[n] : (s = typeof r, "string" === s && (o = Kt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ot.css(e, n)), s = "number"), null == r || "number" === s && isNaN(r) || ("number" !== s || ot.cssNumber[u] || (r += "px"), ot.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), a && "set" in a && (r = a.set(e, r, i)) === t || (l[n] = r)), t)
            }
        },
        css: function (e, n, r, i) {
            var o, s, a, u = ot.camelCase(n);
            return n = ot.cssProps[u] || (ot.cssProps[u] = v(e.style, u)), a = ot.cssHooks[n] || ot.cssHooks[u], a && "get" in a && (o = a.get(e, !0, r)), o === t && (o = Wt(e, n, i)), "normal" === o && n in Jt && (o = Jt[n]), "" === r || r ? (s = parseFloat(o), r === !0 || ot.isNumeric(s) ? s || 0 : o) : o
        }
    }), Wt = function (e, n, r) {
        var i, o, s, a = r || w(e),
            u = a ? a.getPropertyValue(n) || a[n] : t,
            l = e.style;
        return a && ("" !== u || ot.contains(e.ownerDocument, e) || (u = ot.style(e, n)), Ut.test(u) && zt.test(n) && (i = l.width, o = l.minWidth, s = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = a.width, l.width = i, l.minWidth = o, l.maxWidth = s)), u
    }, ot.each(["height", "width"], function (e, n) {
        ot.cssHooks[n] = {
            get: function (e, r, i) {
                return r ? 0 === e.offsetWidth && Bt.test(ot.css(e, "display")) ? ot.swap(e, Gt, function () {
                    return C(e, n, i)
                }) : C(e, n, i) : t
            },
            set: function (e, t, r) {
                var i = r && w(e);
                return k(e, t, r ? _(e, n, r, ot.support.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ot(function () {
        ot.support.reliableMarginRight || (ot.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? ot.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }), !ot.support.pixelPosition && ot.fn.position && ot.each(["top", "left"], function (e, n) {
            ot.cssHooks[n] = {
                get: function (e, r) {
                    return r ? (r = Wt(e, n), Ut.test(r) ? ot(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), ot.expr && ot.expr.filters && (ot.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight
    }, ot.expr.filters.visible = function (e) {
        return !ot.expr.filters.hidden(e)
    }), ot.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        ot.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Vt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, zt.test(e) || (ot.cssHooks[e + t].set = k)
    });
    var Zt = /%20/g,
        en = /\[\]$/,
        tn = /\r?\n/g,
        nn = /^(?:submit|button|image|reset|file)$/i,
        rn = /^(?:input|select|textarea|keygen)/i;
    ot.fn.extend({
        serialize: function () {
            return ot.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = ot.prop(this, "elements");
                return e ? ot.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ot(this).is(":disabled") && rn.test(this.nodeName) && !nn.test(e) && (this.checked || !Ht.test(e))
            }).map(function (e, t) {
                var n = ot(this).val();
                return null == n ? null : ot.isArray(n) ? ot.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(tn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(tn, "\r\n")
                }
            }).get()
        }
    }), ot.param = function (e, n) {
        var r, i = [],
            o = function (e, t) {
                t = ot.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(e) || e.jquery && !ot.isPlainObject(e)) ot.each(e, function () {
                o(this.name, this.value)
            });
        else for (r in e) E(r, e[r], n, o);
        return i.join("&").replace(Zt, "+")
    }, ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        ot.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ot.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var on, sn, an = ot.now(),
        un = /\?/,
        ln = /#.*$/,
        cn = /([?&])_=[^&]*/,
        pn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        fn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        dn = /^(?:GET|HEAD)$/,
        hn = /^\/\//,
        gn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        mn = ot.fn.load,
        yn = {}, vn = {}, xn = "*/".concat("*");
    try {
        sn = z.href
    } catch (wn) {
        sn = X.createElement("a"), sn.href = "", sn = sn.href
    }
    on = gn.exec(sn.toLowerCase()) || [], ot.fn.load = function (e, n, r) {
        if ("string" != typeof e && mn) return mn.apply(this, arguments);
        var i, o, s, a = this,
            u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u), e = e.slice(0, u)), ot.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), a.length > 0 && ot.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function (e) {
            s = arguments, a.html(i ? ot("<div>").append(ot.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            a.each(r, s || [e.responseText, t, e])
        }), this
    }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ot.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: sn,
            type: "GET",
            isLocal: fn.test(on[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? A(A(e, ot.ajaxSettings), t) : A(ot.ajaxSettings, e)
        },
        ajaxPrefilter: N(yn),
        ajaxTransport: N(vn),
        ajax: function (e, n) {
            function r(e, n, r, a) {
                var l, p, v, x, b, _ = n;
                2 !== w && (w = 2, u && clearTimeout(u), i = t, s = a || "", k.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, r && (x = j(f, k, r)), x = D(f, x, k, l), l ? (f.ifModified && (b = k.getResponseHeader("Last-Modified"), b && (ot.lastModified[o] = b), b = k.getResponseHeader("etag"), b && (ot.etag[o] = b)), 204 === e ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = x.state, p = x.data, v = x.error, l = !v)) : (v = _, (e || !_) && (_ = "error", 0 > e && (e = 0))), k.status = e, k.statusText = (n || _) + "", l ? g.resolveWith(d, [p, _, k]) : g.rejectWith(d, [k, _, v]), k.statusCode(y), y = t, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [k, f, l ? p : v]), m.fireWith(d, [k, _]), c && (h.trigger("ajaxComplete", [k, f]), --ot.active || ot.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, s, a, u, l, c, p, f = ot.ajaxSetup({}, n),
                d = f.context || f,
                h = f.context && (d.nodeType || d.jquery) ? ot(d) : ot.event,
                g = ot.Deferred(),
                m = ot.Callbacks("once memory"),
                y = f.statusCode || {}, v = {}, x = {}, w = 0,
                b = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!a) for (a = {}; t = pn.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return w || (e = x[n] = x[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return w || (f.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e) if (2 > w) for (t in e) y[t] = [y[t], e[t]];
                            else k.always(e[k.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || b;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (g.promise(k).complete = m.add, k.success = k.done, k.error = k.fail, f.url = ((e || f.url || sn) + "").replace(ln, "").replace(hn, on[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ot.trim(f.dataType || "*").toLowerCase().match(at) || [""], null == f.crossDomain && (l = gn.exec(f.url.toLowerCase()), f.crossDomain = !(!l || l[1] === on[1] && l[2] === on[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (on[3] || ("http:" === on[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = ot.param(f.data, f.traditional)), P(yn, f, n, k), 2 === w) return k;
            c = f.global, c && 0 === ot.active++ && ot.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !dn.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (un.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = cn.test(o) ? o.replace(cn, "$1_=" + an++) : o + (un.test(o) ? "&" : "?") + "_=" + an++)), f.ifModified && (ot.lastModified[o] && k.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && k.setRequestHeader("If-None-Match", ot.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + xn + "; q=0.01" : "") : f.accepts["*"]);
            for (p in f.headers) k.setRequestHeader(p, f.headers[p]);
            if (f.beforeSend && (f.beforeSend.call(d, k, f) === !1 || 2 === w)) return k.abort();
            b = "abort";
            for (p in {
                success: 1,
                error: 1,
                complete: 1
            }) k[p](f[p]);
            if (i = P(vn, f, n, k)) {
                k.readyState = 1, c && h.trigger("ajaxSend", [k, f]), f.async && f.timeout > 0 && (u = setTimeout(function () {
                    k.abort("timeout")
                }, f.timeout));
                try {
                    w = 1, i.send(v, r)
                } catch (_) {
                    if (!(2 > w)) throw _;
                    r(-1, _)
                }
            } else r(-1, "No Transport");
            return k
        },
        getJSON: function (e, t, n) {
            return ot.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return ot.get(e, t, n, "script")
        }
    }), ot.each(["get", "post"], function (e, n) {
        ot[n] = function (e, r, i, o) {
            return ot.isFunction(r) && (o = o || i, i = r, r = t), ot.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), ot.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return ot.globalEval(e), e
            }
        }
    }), ot.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ot.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = ot("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), X.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var bn = [],
        kn = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = bn.pop() || ot.expando + "_" + an++;
            return this[e] = !0, e
        }
    }), ot.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, s, a, u = n.jsonp !== !1 && (kn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && kn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ot.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(kn, "$1" + o) : n.jsonp !== !1 && (n.url += (un.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return a || ot.error(o + " was not called"), a[0]
        }, n.dataTypes[0] = "json", s = e[o], e[o] = function () {
            a = arguments
        }, i.always(function () {
            e[o] = s, n[o] && (n.jsonpCallback = r.jsonpCallback, bn.push(o)), a && ot.isFunction(s) && s(a[0]), a = s = t
        }), "script") : t
    }), ot.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var _n = ot.ajaxSettings.xhr(),
        Cn = {
            0: 200,
            1223: 204
        }, Sn = 0,
        Tn = {};
    e.ActiveXObject && ot(e).on("unload", function () {
        for (var e in Tn) Tn[e]();
        Tn = t
    }), ot.support.cors = !! _n && "withCredentials" in _n, ot.support.ajax = _n = !! _n, ot.ajaxTransport(function (e) {
        var n;
        return ot.support.cors || _n && !e.crossDomain ? {
            send: function (r, i) {
                var o, s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) a[o] = e.xhrFields[o];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (o in r) a.setRequestHeader(o, r[o]);
                n = function (e) {
                    return function () {
                        n && (delete Tn[s], n = a.onload = a.onerror = null, "abort" === e ? a.abort() : "error" === e ? i(a.status || 404, a.statusText) : i(Cn[a.status] || a.status, a.statusText, "string" == typeof a.responseText ? {
                            text: a.responseText
                        } : t, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), a.onerror = n("error"), n = Tn[s = Sn++] = n("abort"), a.send(e.hasContent && e.data || null)
            },
            abort: function () {
                n && n()
            }
        } : t
    });
    var En, Nn, Pn = /^(?:toggle|show|hide)$/,
        An = RegExp("^(?:([+-])=|)(" + st + ")([a-z%]*)$", "i"),
        jn = /queueHooks$/,
        Dn = [L],
        Fn = {
            "*": [
                function (e, t) {
                    var n, r, i = this.createTween(e, t),
                        o = An.exec(t),
                        s = i.cur(),
                        a = +s || 0,
                        u = 1,
                        l = 20;
                    if (o) {
                        if (n = +o[2], r = o[3] || (ot.cssNumber[e] ? "" : "px"), "px" !== r && a) {
                            a = ot.css(i.elem, e, !0) || n || 1;
                            do u = u || ".5", a /= u, ot.style(i.elem, e, a + r); while (u !== (u = i.cur() / s) && 1 !== u && --l)
                        }
                        i.unit = r, i.start = a, i.end = o[1] ? a + (o[1] + 1) * n : n
                    }
                    return i
                }
            ]
        };
    ot.Animation = ot.extend(H, {
        tweener: function (e, t) {
            ot.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], Fn[n] = Fn[n] || [], Fn[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Dn.unshift(e) : Dn.push(e)
        }
    }), ot.Tween = R, R.prototype = {
        constructor: R,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ot.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = R.propHooks[this.prop];
            return e && e.get ? e.get(this) : R.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = R.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ot.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ot.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                ot.fx.step[e.prop] ? ot.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ot.cssProps[e.prop]] || ot.cssHooks[e.prop]) ? ot.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ot.each(["toggle", "show", "hide"], function (e, t) {
        var n = ot.fn[t];
        ot.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, r, i)
        }
    }), ot.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(x).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = ot.isEmptyObject(e),
                o = ot.speed(t, n, r),
                s = function () {
                    var t = H(this, ot.extend({}, e), o);
                    s.finish = function () {
                        t.stop(!0)
                    }, (i || mt.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = ot.timers,
                    s = mt.get(this);
                if (n) s[n] && s[n].stop && i(s[n]);
                else for (n in s) s[n] && s[n].stop && jn.test(n) && i(s[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && ot.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = mt.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = ot.timers,
                    s = r ? r.length : 0;
                for (n.finish = !0, ot.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), ot.each({
        slideDown: $("show"),
        slideUp: $("hide"),
        slideToggle: $("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        ot.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), ot.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? ot.extend({}, e) : {
            complete: n || !n && t || ot.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ot.isFunction(t) && t
        };
        return r.duration = ot.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ot.fx.speeds ? ot.fx.speeds[r.duration] : ot.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            ot.isFunction(r.old) && r.old.call(this), r.queue && ot.dequeue(this, r.queue)
        }, r
    }, ot.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ot.timers = [], ot.fx = R.prototype.init, ot.fx.tick = function () {
        var e, n = ot.timers,
            r = 0;
        for (En = ot.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || ot.fx.stop(), En = t
    }, ot.fx.timer = function (e) {
        e() && ot.timers.push(e) && ot.fx.start()
    }, ot.fx.interval = 13, ot.fx.start = function () {
        Nn || (Nn = setInterval(ot.fx.tick, ot.fx.interval))
    }, ot.fx.stop = function () {
        clearInterval(Nn), Nn = null
    }, ot.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ot.fx.step = {}, ot.expr && ot.expr.filters && (ot.expr.filters.animated = function (e) {
        return ot.grep(ot.timers, function (t) {
            return e === t.elem
        }).length
    }), ot.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
                ot.offset.setOffset(this, e, t)
            });
        var n, r, i = this[0],
            o = {
                top: 0,
                left: 0
            }, s = i && i.ownerDocument;
        if (s) return n = s.documentElement, ot.contains(n, i) ? (typeof i.getBoundingClientRect !== B && (o = i.getBoundingClientRect()), r = M(s), {
                top: o.top + r.pageYOffset - n.clientTop,
                left: o.left + r.pageXOffset - n.clientLeft
            }) : o
    }, ot.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, s, a, u, l, c = ot.css(e, "position"),
                p = ot(e),
                f = {};
            "static" === c && (e.style.position = "relative"), a = p.offset(), o = ot.css(e, "top"), u = ot.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = p.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), ot.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : p.css(f)
        }
    }, ot.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ot.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ot.nodeName(e[0], "html") || (r = e.offset()), r.top += ot.css(e[0], "borderTopWidth", !0), r.left += ot.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - ot.css(n, "marginTop", !0),
                    left: t.left - r.left - ot.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || U; e && !ot.nodeName(e, "html") && "static" === ot.css(e, "position");) e = e.offsetParent;
                return e || U
            })
        }
    }), ot.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (n, r) {
        var i = "pageYOffset" === r;
        ot.fn[n] = function (o) {
            return ot.access(this, function (n, o, s) {
                var a = M(n);
                return s === t ? a ? a[r] : n[o] : (a ? a.scrollTo(i ? e.pageXOffset : s, i ? s : e.pageYOffset) : n[o] = s, t)
            }, n, o, arguments.length, null)
        }
    }), ot.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        ot.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            ot.fn[i] = function (i, o) {
                var s = arguments.length && (r || "boolean" != typeof i),
                    a = r || (i === !0 || o === !0 ? "margin" : "border");
                return ot.access(this, function (n, r, i) {
                    var o;
                    return ot.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ot.css(n, r, a) : ot.style(n, r, i, a)
                }, n, s ? i : t, s, null)
            }
        })
    }), ot.fn.size = function () {
        return this.length
    }, ot.fn.andSelf = ot.fn.addBack, "object" == typeof module && "object" == typeof module.exports ? module.exports = ot : "function" == typeof define && define.amd && define("jquery", [], function () {
        return ot
    }), "object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = ot)
}(window);
var __hasProp = {}.hasOwnProperty,
    __extends = function (e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) __hasProp.call(t, r) && (e[r] = t[r]);
        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
    }, __indexOf = [].indexOf || function (e) {
        for (var t = 0, n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
        return -1
    };
define("lib/controls", ["lib/emitter", "jquery"], function (e) {
    var t;
    return t = function (e) {
        function t() {
            t.__super__.constructor.call(this, "next", "prev", "toggleHidden"), this.addKeyEvents(), this.addTouchEvents()
        }
        return __extends(t, e), t.prototype.nonTargets = ["a", "input", "textarea", "select", "button"], t.prototype.addKeyEvents = function () {
            var e = this;
            return $(window).keydown(function (t) {
                return e.filterTargets(t) ? e.dispatchKeyEvent(t) : void 0
            })
        }, t.prototype.addTouchEvents = function () {
            var e = this;
            return $(window).bind("touchstart", function (t) {
                return e.filterTargets(t) ? e.dispatchTouchEvents(t) : void 0
            })
        }, t.prototype.stopEvent = function (e) {
            return e.preventDefault()
        }, t.prototype.filterTargets = function (e) {
            var t;
            return 1 !== e.target.nodeType ? !0 : (t = e.target.nodeName.toLowerCase(), 0 > __indexOf.call(this.nonTargets, t))
        }, t.prototype.dispatchKeyEvent = function (e) {
            var t;
            return t = e.keyCode, 37 === t || 33 === t || 38 === t ? (this.trigger("prev", e), this.stopEvent(e)) : 39 === t || 34 === t || 40 === t || 32 === t ? (this.trigger("next", e), this.stopEvent(e)) : 116 === t || 27 === t ? (this.trigger("toggleHidden", e), this.stopEvent(e)) : void 0
        }, t.prototype.dispatchTouchEvents = function (e) {
            return e.originalEvent.touches[0].pageX > window.innerWidth / 2 ? (this.trigger("next", e), this.stopEvent(e)) : (this.trigger("prev", e), this.stopEvent(e))
        }, t
    }(e)
});
var __slice = [].slice;
define("lib/controller", ["lib/state", "lib/sync", "lib/hash", "lib/controls"], function (e, t, n, r) {
    var i;
    return i = function () {
        function i(e) {
            this.createEmitters(e), this.initialUpdate()
        }
        return i.prototype.createEmitters = function (i) {
            var o, s = this;
            return o = [new n, new t, new r], this.hash = o[0], this.sync = o[1], this.controls = o[2], this.state = new e(function () {
                var e, t;
                return t = s.hash.parse(window.location.hash) || {}, e = s.sync.getState() || {}, {
                    file: t.file || e.file || i.file,
                    slide: t.slide || e.slide || i.slide,
                    hidden: t.hidden || e.hidden || i.hidden,
                    numSlides: i.numSlides
                }
            }()), this.connectHash(this.hash), this.connectSync(this.sync), this.connectControls(this.controls)
        }, i.prototype.initialUpdate = function () {
            var e, t, n;
            return e = this.state.get("file"), n = this.state.get("slide"), t = this.state.get("hidden"), this.hash.set(e, n, t), this.sync.setState({
                file: e,
                slide: n,
                hidden: t
            })
        }, i.prototype.connectHash = function (e) {
            var t, n = this;
            return e.on("change", function (t) {
                return n.state.set(t, e)
            }), t = function (t, r) {
                return e.update(t, r, {
                    file: n.state.get("file"),
                    slide: n.state.get("slide"),
                    hidden: n.state.get("hidden")
                })
            }, this.state.on("file", e, t.bind(this, "file")), this.state.on("slide", e, t.bind(this, "slide")), this.state.on("hidden", e, t.bind(this, "hidden"))
        }, i.prototype.connectSync = function (e) {
            var t, n = this;
            return e.on("change", function () {
                return n.state.set(n.sync.getState(), e)
            }), t = function (t, n) {
                return e.set(t, n)
            }, this.state.on("file", e, function (e) {
                return t("file", e)
            }), this.state.on("slide", e, function (e) {
                return t("slide", e)
            }), this.state.on("hidden", e, function (e) {
                return t("hidden", e)
            })
        }, i.prototype.connectControls = function (e) {
            var t = this;

            // window.pik = { next: t.goNext, prev: t.goPrev };
            // consol
            return e.on("prev", function () {
                return t.goPrev()
            }), e.on("next", function () {
                return t.goNext()
            }), e.on("toggleHidden", function () {
                return t.toggleHidden()
            })
        }, i.prototype.on = function () {
            var e, t;
            return e = arguments.length >= 1 ? __slice.call(arguments, 0) : [], 2 === e.length && e.splice(1, 0, null), (t = this.state).on.apply(t, e)
        }, i.prototype.trigger = function () {
            var e, t;
            return e = arguments.length >= 1 ? __slice.call(arguments, 0) : [], 2 === e.length && e.splice(1, 0, null), (t = this.state).trigger.apply(t, e)
        }, i.prototype.off = function () {
            var e, t;
            return e = arguments.length >= 1 ? __slice.call(arguments, 0) : [], (t = this.state).off.apply(t, e)
        }, i.prototype.offAll = function () {
            var e, t, n, r, i;
            return e = arguments.length >= 1 ? __slice.call(arguments, 0) : [], (t = this.state).offAll.apply(t, e), (n = this.hash).offAll.apply(n, e), (r = this.sync).offAll.apply(r, e), (i = this.controls).offAll.apply(i, e)
        }, i.prototype.getFile = function () {
            return this.state.get("file")
        }, i.prototype.openFile = function (e) {
            return this.state.set({
                file: e
            })
        }, i.prototype.getSlide = function () {
            return this.state.get("slide")
        }, i.prototype.goTo = function (e) {
            return this.state.set({
                slide: Number(e)
            })
        }, i.prototype.goNext = function () {
            return this.goTo(this.getSlide() + 1)
        }, i.prototype.goPrev = function () {
            return this.goTo(this.getSlide() - 1)
        }, i.prototype.getHidden = function () {
            return this.state.get("hidden")
        }, i.prototype.setHidden = function (e) {
            return this.state.set({
                hidden: e
            })
        }, i.prototype.toggleHidden = function () {
            return this.setHidden(!this.getHidden())
        }, i
    }()
});
var __hasProp = {}.hasOwnProperty,
    __extends = function (e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) __hasProp.call(t, r) && (e[r] = t[r]);
        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
    };
define("lib/iframe", ["lib/emitter", "jquery"], function (e, t) {
    var n;
    return n = function (e) {
        function n(e) {
            if (this.frame = t(e).first(), 0 === this.frame.length) throw Error("Iframe error: frame " + e + " not found");
            this.window = this.frame[0].contentWindow, n.__super__.constructor.call(this, "load"), this.initFrame()
        }
        return __extends(n, e), n.prototype.initFrame = function () {
            var e = this;
            return this.frame.load(function () {
                var t, n, r, i;
                if (r = e.window.location.href, i = e.window.Pik !== void 0, n = -1 !== r.lastIndexOf("."), t = "/" === r[r.length - 1], n || t) {
                    if (null != e.window.Pik) return e.trigger("load", e.window.location.href)
                } else if (i) return e["do"]("file", r += "/")
            })
        }, n.prototype["do"] = function (e, t) {
            if ("file" === e) {
                if (t !== "" + this.window.location) return this.window.location.href = t
            } else if (null != this.window.Pik && ("slide" === e && this.window.Pik.goTo(t), "hidden" === e)) return this.window.Pik.setHidden(t)
        }, n.prototype.getNumSlides = function () {
            return null != this.window.Pik ? this.window.Pik.numSlides : void 0
        }, n
    }(e)
});
var __hasProp = {}.hasOwnProperty,
    __extends = function (e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) __hasProp.call(t, r) && (e[r] = t[r]);
        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
    };
define("app", ["lib/emitter", "lib/controller", "lib/iframe", "lib/hash"], function (e, t, n, r) {
    var i;
    return i = function (i) {
        function o(t) {
            o.__super__.constructor.call(this, "load"), window.Pik = {
                app: new e("ready")
            }, this.initialized = !1, this.connectIframe(t)
        }
        return __extends(o, i), o.prototype.connectIframe = function (e) {
            var t = this;
            return this.iframe = new n("iframe"), this.initialized || this.init(e), window.Pik.app.on("ready", function () {
                return t.onReady()
            })
        }, o.prototype.onReady = function () {
            return this.connectController(), this.connectControls(), this.trigger("load"), this.onSlide(this.controller.getSlide()), this.onHidden(this.controller.getHidden())
        }, o.prototype.connectControls = function () {
            var e;
            return e = this.iframe.window.Pik.controls, e.on("next", this.controller.goNext.bind(this.controller)), e.on("prev", this.controller.goPrev.bind(this.controller)), e.on("toggleHidden", this.controller.toggleHidden.bind(this.controller))
        }, o.prototype.onFile = function (e) {
            var t;
            return t = e !== this.iframe.window.location.href.slice(-e.length), t && this.iframe["do"]("file", e), t
        }, o.prototype.onSlide = function (e) {
            return this.iframe["do"]("slide", e)
        }, o.prototype.onHidden = function (e) {
            return this.iframe["do"]("hidden", e)
        }, o.prototype.init = function (e) {
            return this.initialized = !0, this.controller = new t(e), this.iframe["do"]("file", this.controller.getFile())
        }, o.prototype.connectController = function () {
            var e, n, i, o, s, a;
            return i = window.location.href, n = this.iframe.window.location.href, e = r.prototype.commonPath(i, n), s = n.substring(e.length, n.length), o = s !== this.controller.getFile(), a = {
                file: s,
                numSlides: this.iframe.window.Pik.numSlides,
                slide: o ? 0 : this.controller.getSlide(),
                hidden: o ? !1 : this.controller.getHidden()
            }, this.disconnectController(), this.controller = new t(a), this.controller.on("file", this.onFile.bind(this)), this.controller.on("slide", this.onSlide.bind(this)), this.controller.on("hidden", this.onHidden.bind(this))
        }, o.prototype.disconnectController = function () {
            return null != this.controller ? (this.controller.offAll(), this.controller = null) : void 0
        }, o
    }(e)
});
var __hasProp = {}.hasOwnProperty,
    __extends = function (e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) __hasProp.call(t, r) && (e[r] = t[r]);
        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
    }, __slice = [].slice;
define("lib/statefulEmitter", ["lib/emitter"], function (e) {
    var t;
    return t = function (e) {
        function t(e, n) {
            var r, i;
            if (this.storageKey = n, r = this.readStorage() || e, null == r) throw Error("Failed to create state, no stored state and no default        state found");
            i = Object.keys(r), t.__super__.constructor.apply(this, i), this.createState(r), this.writeStorage(), this.watchStorage()
        }
        return __extends(t, e), t.prototype.readStorage = function () {
            return null != this.storageKey ? JSON.parse(window.localStorage.getItem(this.storageKey)) : void 0
        }, t.prototype.writeStorage = function () {
            return null != this.storageKey ? window.localStorage.setItem(this.storageKey, JSON.stringify(this.state)) : void 0
        }, t.prototype.watchStorage = function () {
            var e, t = this;
            return null != this.storageKey ? (e = function (e) {
                return e.storageArea === window.localStorage && e.key === t.storageKey ? t.compareWithStorage() : void 0
            }, window.addEventListener("storage", e, !1)) : void 0
        }, t.prototype.compareWithStorage = function () {
            var e, t, n, r;
            t = this.readStorage(), n = this.state, r = [];
            for (e in n) if (__hasProp.call(n, e)) if (this.state[e] !== t[e]) {
                        if (null == this.state[e] || null == t[e]) throw Error("Incompatible states detected (key '" + e + "'            not found)");
                        r.push(this.trigger(e, t[e]))
                    } else r.push(void 0);
            return r
        }, t.prototype.createState = function (e) {
            var t, n, r, i = this;
            this.state = {}, r = [];
            for (t in e) __hasProp.call(e, t) && (n = e[t], this.state[t] = n, r.push(function (e) {
                    return i.on(e, function (t) {
                        return i.state[e] = t, i.writeStorage()
                    })
                }(t)));
            return r
        }, t.prototype.trigger = function () {
            var e, n, r;
            if (e = arguments[0], r = arguments[1], n = arguments.length >= 3 ? __slice.call(arguments, 2) : [], null == r) throw Error("StatefulEmitter requires a value for triggers,        got " + typeof r);
            if (n.length > 0) throw Error("StatefulEmitter can only pass one value,        got " + (n.length + 1));
            return t.__super__.trigger.call(this, e, r)
        }, t.prototype.set = function (e, t) {
            return this.trigger(e, t)
        }, t.prototype.get = function (e) {
            return this.state[e]
        }, t
    }(e)
});
var __hasProp = {}.hasOwnProperty,
    __extends = function (e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) __hasProp.call(t, r) && (e[r] = t[r]);
        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
    };
define("presenterApp", ["app", "lib/statefulEmitter", "lib/iframe", "jquery"], function (e, t, n) {
    var r;
    return r = function (e) {
        function r(e, t) {
            var n = this;
            this.setOptions(t), r.__super__.constructor.call(this, e), this.on("load", function () {
                return n.switchNotes(n.iframe, n.options.get("mainFrameContent")), n.switchNotes(n.secondaryIframe, n.options.get("secondaryFrameContent"))
            })
        }
        return __extends(r, e), r.prototype.setOptions = function (e) {
            var n = this;
            return this.options = new t(e, "pikOptions"), this.options.on("mainFrameContent", function (e) {
                return n.switchNotes(n.iframe, e), n.onSlide(n.controller.getSlide())
            }), this.options.on("secondaryFrameContent", function (e) {
                return n.switchNotes(n.secondaryIframe, e), n.onSlide(n.controller.getSlide())
            })
        }, r.prototype.switchNotes = function (e, t) {
            var n, r;
            return r = "currentNotes" === t ? "addClass" : "removeClass", e.window.$("html")[r]("pikOnlyNotes"), n = "NoNotes" === t.substr(-7) ? "addClass" : "removeClass", e.window.$("html")[n]("pikNoNotes")
        }, r.prototype.connectIframe = function (e) {
            return this.secondaryIframe = new n("#PikFramePreview"), r.__super__.connectIframe.call(this, e)
        }, r.prototype.init = function (e) {
            return r.__super__.init.call(this, e), this.secondaryIframe["do"]("file", this.controller.getFile())
        }, r.prototype.onReady = function () {
            var e;
            return e = function () {
                var t;
                return this.initialized && (t = this.iframe.frame[0].contentWindow.location.href, this.secondaryIframe["do"]("file", t)), r.prototype.onReady = function () {
                    return r.__super__.onReady.call(this), r.prototype.onReady = e
                }
            }
        }(), r.prototype.onFile = function (e) {
            var t;
            return t = r.__super__.onFile.call(this, e), t ? this.secondaryIframe["do"]("file", e) : void 0
        }, r.prototype.onSlide = function (e) {
            var t, n, i, o;
            return t = e, ("nextSlide" === (i = this.options.get("mainFrameContent")) || "nextSlideNoNotes" === i) && t++, r.__super__.onSlide.call(this, t), n = e, ("nextSlide" === (o = this.options.get("secondaryFrameContent")) || "nextSlideNoNotes" === o) && n++, this.secondaryIframe["do"]("slide", n)
        }, r.prototype.onHidden = function (e) {
            return r.__super__.onHidden.call(this, e), this.secondaryIframe["do"]("hidden", e)
        }, r
    }(e)
}), define("ui/app", ["jquery"], function (e) {
    return function (t) {
        var n;
        return e(".reloadLink").click(function () {
            return e("iframe")[0].contentWindow.location.reload(!0)
        }), e(".printLink").click(function () {
            var t;
            return t = e("iframe")[0].contentWindow.location.href + "#print", window.open(t)
        }), n = e("#PikControlsContainer"), n.bind("mouseover", function () {
            return e(this).addClass("open")
        }), n.bind("mouseout", function () {
            return e(this).removeClass("open")
        }), n.bind("touchstart", function (t) {
            return t.stopPropagation(), t.preventDefault(), e(this).toggleClass("open")
        }), n.find("a").bind("touchstart", function (e) {
            return e.stopPropagation(), setTimeout(function () {
                return n.removeClass("open")
            }, 600)
        }), t.on("load", function () {
            var t, r, i, o, s, a;
            for (r = e("iframe")[0].contentWindow.$("title").text(), e("title").text(r), s = e("iframe"), a = [], i = 0, o = s.length; o > i; i++) t = s[i], a.push(t.contentWindow.$("body").bind("touchstart", function (e) {
                    return n.hasClass("open") ? (n.removeClass("open"), e.preventDefault(), e.stopPropagation()) : void 0
                }));
            return a
        })
    }
}), define("lib/forceAspectRatio", ["jquery"], function (e) {
    return function (t, n, r, i, o, s, a) {
        return null == r && (r = "html"), null == i && (i = 1), null == o && (o = !0), null == s && (s = !0), null == a && (a = "top"),
        function () {
            var u, l, c, p, f, d;
            return p = {
                x: e(r).width(),
                y: e(r).height()
            }, c = Math.floor(p.x > p.y * t ? p.y * t : p.x) * i, l = Math.floor(p.x > p.y * t ? p.y : p.x / t) * i, f = {
                width: "" + c + "px",
                height: "" + l + "px"
            }, o && (d = Math.floor((p.y - l) / 2), f[a] = "" + d + "px"), s && (u = (l + c) / 6.5, f["font-size"] = "" + u + "%"), e(n).css(f)
        }
    }
}), define("ui/presenterApp", ["lib/forceAspectRatio", "jquery"], function (e, t) {
    return function (n) {
        var r, i, o, s, a, u, l, c, p, f, d, h;
        return e = e.bind(null, 4 / 3), h = e("#PikPresenterAppWrapper", "html", 1, !0, !0, "margin-top"), l = e("#PikFrame", "#PikPresenterAppWrapper", .75), f = e("#PikFramePreview", "#PikPresenterAppWrapper", .425), p = e("#PikPresenterOptions", "#PikPresenterAppWrapper", .7, !0, !1), d = function () {
            return h(), l(), f(), p()
        }, d(), t(window).bind("resize", d), window.matchMedia && (c = window.matchMedia("(orientation: portrait)"), c.addListener(d)), a = null, n.on("load", function () {
            var e, r, i, o, s, u, l, c, p, f, d, h, g, m, y;
            for (u = t("#PikFrame")[0].contentWindow, c = u.Pik, y = t("iframe"), g = 0, m = y.length; m > g; g++) s = y[g], s.contentWindow.$("html").addClass("pikInPresenter");
            return p = u.$("title").text(), t("title").text(p), t("#PikSlideCount").text(u.Pik.numSlides), t("#PikSlideCurrent").text(n.controller.getSlide() + 1), n.controller.on("slide", function (e) {
                return t("#PikSlideCurrent").text(e + 1)
            }), e = t("#PikControlsSelect"), c.slides.each(function (n, r) {
                var i;
                return i = t(r).find("h1, h2, h3, h4, h5, h6, p").first().text() || n, t("<option />").attr("value", n).text(i).appendTo(e)
            }), e.val(n.controller.getSlide()), e.change(function () {
                return n.controller.goTo(t(this).val())
            }), n.controller.on("slide", function (t) {
                return e.val(t)
            }), i = t("#PikTimeCurrent"), r = t("#PikTimeCountdown"), f = Date.now(), l = function (e) {
                return 1 === (e + "").length ? "0" + e : "" + e
            }, o = 1, d = function () {
                var e;
                return e = 0,
                function () {
                    var t;
                    return e += o, t = new Date(1e3 * e), r.html(l(t.getHours() - 1) + ":" + l(t.getMinutes()) + ":" + l(t.getSeconds()))
                }
            }(), null != a && clearInterval(a), a = setInterval(d, 1e3), h = function () {
                var e, t;
                return t = Date.now(), e = new Date(t - f), i.html(new Date(t).toLocaleTimeString())
            }, setInterval(h, 1e3), t("#PikCountdownControl").click(function (e) {
                var n;
                return e.preventDefault(), n = t(this), n.hasClass("running") ? (clearInterval(a), n.toggleClass("running paused"), n.children().first().html("Start")) : (a = setInterval(d, 1e3), n.toggleClass("running paused"), n.children().first().html("Stop"))
            })
        }), t("#PikPresenterOptionsLink").click(function () {
            return t("#PikPresenterOptions").addClass("open"), t("#PikPresenterOptionsOverlay").addClass("open")
        }), t("#PikOptionsCloseButton").click(function () {
            return t("#PikPresenterOptions").removeClass("open"), t("#PikPresenterOptionsOverlay").removeClass("open")
        }), i = t("#PikOptionsMainFrameContent"), i.val(n.options.get("mainFrameContent")), i.change(function () {
            return n.options.set("mainFrameContent", this.value)
        }), n.options.on("mainFrameContent", function (e) {
            return i.val(e)
        }), o = t("#PikOptionsSecondaryFrameContent"), o.val(n.options.get("secondaryFrameContent")), o.change(function () {
            return n.options.set("secondaryFrameContent", this.value)
        }), n.options.on("secondaryFrameContent", function (e) {
            return o.val(e)
        }), s = t("#PikNoEvents"), s.prop("checked", n.options.get("suppressEvents")), s.change(function () {
            return n.options.set("suppressEvents", this.checked)
        }), n.options.on("suppressEvents", function (e) {
            var n, r, i, o, a;
            for (s.prop("checked", e), o = t("iframe"), a = [], r = 0, i = o.length; i > r; r++) n = o[r], "about:blank" !== n.contentWindow.location.href ? e === !0 ? a.push(n.contentWindow.$("html").addClass("pikNoEvents")) : a.push(n.contentWindow.$("html").removeClass("pikNoEvents")) : a.push(void 0);
            return a
        }), n.options.trigger("suppressEvents", n.options.get("suppressEvents")), u = Element.prototype.requestFullScreen ? "requestFullScreen" : Element.prototype.mozRequestFullScreen ? "mozRequestFullScreen" : Element.prototype.webkitRequestFullScreen ? "webkitRequestFullScreen" : null, u ? (r = t("#PikTimer"), t("<a />").attr({
            id: "PikFullScreenMain",
            title: "Fullsceen for main frame",
            "class": "iconFullscreen pikFullScreen"
        }).appendTo(r).click(function () {
            return t("#PikFrame")[0][u]()
        }), t("<a />").attr({
            id: "PikFullScreenPreview",
            title: "Fullsceen for secondary frame",
            "class": "iconFullscreen pikFullScreen"
        }).appendTo(r).click(function () {
            return t("#PikFramePreview")[0][u]()
        })) : void 0
    }
});
var __hasProp = {}.hasOwnProperty,
    __extends = function (e, t) {
        function n() {
            this.constructor = e
        }
        for (var r in t) __hasProp.call(t, r) && (e[r] = t[r]);
        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
    };
define("lib/presentation", ["lib/emitter", "lib/controls", "jquery"], function (e, t) {
    var n;
    return n = function (e) {
        function n(e) {
            var t = this;
            n.__super__.constructor.call(this, "slide", "hidden"), $(window).ready(function () {
                return t.numSlides = $(".pikSlide").length, t.createApi(), null != e ? e.call(t) : void 0
            })
        }
        return __extends(n, e), n.prototype.createApi = function () {
            var e;
            return e = this, window.Pik = {
                slides: $(".pikSlide"),
                numSlides: e.numSlides,
                controls: new t,
                goTo: function (t) {
                    return e.trigger("slide", t)
                },
                setHidden: function (t) {
                    return e.trigger("hidden", t)
                },
                inPrint: "#print" === window.location.hash
            }
        }, n
    }(e)
});
var __bind = function (e, t) {
    return function () {
        return e.apply(t, arguments)
    }
};
define("slides", ["lib/presentation", "lib/hash", "lib/forceAspectRatio", "jquery"], function (e, t, n, r) {
    var i;
    return i = function () {
        function i() {
            this.goTo = __bind(this.goTo, this);
            var t;
            t = this, this.presentation = new e(function () {
                return t.setupDom(), t.setupSizes(), this.on("slide", t.goTo), this.on("hidden", t.setHidden), window !== window.parent && window.parent.Pik.app.trigger("ready"), r(window).load(function () {
                    return t.print()
                })
            })
        }
        return i.prototype.curr = 0, i.prototype.next = 1, i.prototype.prev = -1, i.prototype.slides = null, i.prototype.wrapper = null, i.prototype.hideLayer = null, i.prototype.getBasePath = function () {
            var e, n;
            return n = null != window.parent && window.parent !== window ? window.parent.location.href : null != window.opener ? window.opener.location.href : "", e = n ? t.prototype.commonPath(window.location.href, n) : "../../"
        }, i.prototype.setupDom = function () {
            var e, t;
            return e = this.getBasePath(), this.slides = r(".pikSlide"), r("<link></link>").attr({
                rel: "stylesheet",
                href: "" + e + "core/pik7.css"
            }).appendTo("head"), this.wrapper = r("<div></div>").attr({
                id: "PikSlideWrapper"
            }), this.wrapper.append(this.slides).appendTo("body"), this.hideLayer = r("<div></div>").attr({
                id: "PikHide"
            }).appendTo("body"), t = r("script[data-theme]").data("theme") || "default", r("<link></link>").attr({
                rel: "stylesheet",
                // href: "" + e + "themes/" + t + ".css"
                href: "" + e + "pg/custom.css"
            }).appendTo("head"), r("html, body").css("height", "100%")
        }, i.prototype.setupSizes = function () {
            var e, t;
            return t = n(4 / 3, this.wrapper), t(), r(window).bind("resize", t), window.matchMedia ? (e = window.matchMedia("(orientation: portrait)"), e.addListener(t)) : void 0
        }, i.prototype.print = function () {
            return "#print" === window.location.hash ? window.print() : void 0
        }, i.prototype.goTo = function (e) {
            return r("html").hasClass("pikNoEvents") || r(this.slides[this.curr]).trigger("pikDeactivate"), r(this.slides[this.curr]).removeClass("pikCurrent"), r(this.slides[this.next]).removeClass("pikNext"), r(this.slides[this.prev]).removeClass("pikPrev"), this.curr = e, this.next = e + 1, this.prev = e - 1, r("html").hasClass("pikNoEvents") || r(this.slides[this.curr]).trigger("pikActivate"), r(this.slides[this.curr]).addClass("pikCurrent"), r(this.slides[this.next]).addClass("pikNext"), r(this.slides[this.prev]).addClass("pikPrev"), r("html").hasClass("pikNoEvents") ? void 0 : r(window).trigger("pikSlide", [this.curr])
        }, i.prototype.setHidden = function (e) {
            return e ? (r(window).trigger("pikHide", [this.curr]), r("#PikHide").addClass("pikActive")) : (r(window).trigger("pikShow", [this.curr]), r("#PikHide").removeClass("pikActive"))
        }, i
    }()
}),
function () {
    function e(e, t) {
        return [].slice.call((t || document).querySelectorAll(e))
    }
    if (window.addEventListener) {
        var t = window.StyleFix = {
            link: function (e) {
                try {
                    if ("stylesheet" !== e.rel || e.hasAttribute("data-noprefix")) return
                } catch (n) {
                    return
                }
                var r, i = e.href || e.getAttribute("data-href"),
                    o = i.replace(/[^\/]+$/, ""),
                    s = (/^[a-z]{3,10}:/.exec(o) || [""])[0],
                    a = (/^[a-z]{3,10}:\/\/[^\/]+/.exec(o) || [""])[0],
                    u = /^([^?]*)\??/.exec(i)[1],
                    l = e.parentNode,
                    c = new XMLHttpRequest;
                c.onreadystatechange = function () {
                    4 === c.readyState && r()
                }, r = function () {
                    var n = c.responseText;
                    if (n && e.parentNode && (!c.status || 400 > c.status || c.status > 600)) {
                        if (n = t.fix(n, !0, e), o) {
                            n = n.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi, function (e, t, n) {
                                return /^([a-z]{3,10}:|#)/i.test(n) ? e : /^\/\//.test(n) ? 'url("' + s + n + '")' : /^\//.test(n) ? 'url("' + a + n + '")' : /^\?/.test(n) ? 'url("' + u + n + '")' : 'url("' + o + n + '")'
                            });
                            var r = o.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g, "\\$1");
                            n = n.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)" + r, "gi"), "$1")
                        }
                        var i = document.createElement("style");
                        i.textContent = n, i.media = e.media, i.disabled = e.disabled, i.setAttribute("data-href", e.getAttribute("href")), l.insertBefore(i, e), l.removeChild(e), i.media = e.media
                    }
                };
                try {
                    c.open("GET", i), c.send(null)
                } catch (n) {
                    "undefined" != typeof XDomainRequest && (c = new XDomainRequest, c.onerror = c.onprogress = function () {}, c.onload = r, c.open("GET", i), c.send(null))
                }
                e.setAttribute("data-inprogress", "")
            },
            styleElement: function (e) {
                if (!e.hasAttribute("data-noprefix")) {
                    var n = e.disabled;
                    e.textContent = t.fix(e.textContent, !0, e), e.disabled = n
                }
            },
            styleAttribute: function (e) {
                var n = e.getAttribute("style");
                n = t.fix(n, !1, e), e.setAttribute("style", n)
            },
            process: function () {
                e('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link), e("style").forEach(StyleFix.styleElement), e("[style]").forEach(StyleFix.styleAttribute)
            },
            register: function (e, n) {
                (t.fixers = t.fixers || []).splice(void 0 === n ? t.fixers.length : n, 0, e)
            },
            fix: function (e, n, r) {
                for (var i = 0; t.fixers.length > i; i++) e = t.fixers[i](e, n, r) || e;
                return e
            },
            camelCase: function (e) {
                return e.replace(/-([a-z])/g, function (e, t) {
                    return t.toUpperCase()
                }).replace("-", "")
            },
            deCamelCase: function (e) {
                return e.replace(/[A-Z]/g, function (e) {
                    return "-" + e.toLowerCase()
                })
            }
        };
        (function () {
            setTimeout(function () {
                e('link[rel="stylesheet"]').forEach(StyleFix.link)
            }, 10), document.addEventListener("DOMContentLoaded", StyleFix.process, !1)
        })()
    }
}(),
function (e) {
    function t(e, t, r, i, o) {
        if (e = n[e], e.length) {
            var s = RegExp(t + "(" + e.join("|") + ")" + r, "gi");
            o = o.replace(s, i)
        }
        return o
    }
    if (window.StyleFix && window.getComputedStyle) {
        var n = window.PrefixFree = {
            prefixCSS: function (e, r) {
                var i = n.prefix;
                if (n.functions.indexOf("linear-gradient") > -1 && (e = e.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/gi, function (e, t, n, r) {
                    return t + (n || "") + "linear-gradient(" + (90 - r) + "deg"
                })), e = t("functions", "(\\s|:|,)", "\\s*\\(", "$1" + i + "$2(", e), e = t("keywords", "(\\s|:)", "(\\s|;|\\}|$)", "$1" + i + "$2$3", e), e = t("properties", "(^|\\{|\\s|;)", "\\s*:", "$1" + i + "$2:", e), n.properties.length) {
                    var o = RegExp("\\b(" + n.properties.join("|") + ")(?!:)", "gi");
                    e = t("valueProperties", "\\b", ":(.+?);", function (e) {
                        return e.replace(o, i + "$1")
                    }, e)
                }
                return r && (e = t("selectors", "", "\\b", n.prefixSelector, e), e = t("atrules", "@", "\\b", "@" + i + "$1", e)), e = e.replace(RegExp("-" + i, "g"), "-"), e = e.replace(/-\*-(?=[a-z]+)/gi, n.prefix)
            },
            property: function (e) {
                return (n.properties.indexOf(e) ? n.prefix : "") + e
            },
            value: function (e) {
                return e = t("functions", "(^|\\s|,)", "\\s*\\(", "$1" + n.prefix + "$2(", e), e = t("keywords", "(^|\\s)", "(\\s|$)", "$1" + n.prefix + "$2$3", e)
            },
            prefixSelector: function (e) {
                return e.replace(/^:{1,2}/, function (e) {
                    return e + n.prefix
                })
            },
            prefixProperty: function (e, t) {
                var r = n.prefix + e;
                return t ? StyleFix.camelCase(r) : r
            }
        };
        (function () {
            var e = {}, t = [],
                r = getComputedStyle(document.documentElement, null),
                i = document.createElement("div").style,
                o = function (n) {
                    if ("-" === n.charAt(0)) {
                        t.push(n);
                        var r = n.split("-"),
                            i = r[1];
                        for (e[i] = ++e[i] || 1; r.length > 3;) {
                            r.pop();
                            var o = r.join("-");
                            s(o) && -1 === t.indexOf(o) && t.push(o)
                        }
                    }
                }, s = function (e) {
                    return StyleFix.camelCase(e) in i
                };
            if (r.length > 0) for (var a = 0; r.length > a; a++) o(r[a]);
            else for (var u in r) o(StyleFix.deCamelCase(u));
            var l = {
                uses: 0
            };
            for (var c in e) {
                var p = e[c];
                p > l.uses && (l = {
                    prefix: c,
                    uses: p
                })
            }
            n.prefix = "-" + l.prefix + "-", n.Prefix = StyleFix.camelCase(n.prefix), n.properties = [];
            for (var a = 0; t.length > a; a++) {
                var u = t[a];
                if (0 === u.indexOf(n.prefix)) {
                    var f = u.slice(n.prefix.length);
                    s(f) || n.properties.push(f)
                }
            }
            "Ms" != n.Prefix || "transform" in i || "MsTransform" in i || !("msTransform" in i) || n.properties.push("transform", "transform-origin"), n.properties.sort()
        })(),
        function () {
            function e(e, t) {
                return i[t] = "", i[t] = e, !! i[t]
            }
            var t = {
                "linear-gradient": {
                    property: "backgroundImage",
                    params: "red, teal"
                },
                calc: {
                    property: "width",
                    params: "1px + 5%"
                },
                element: {
                    property: "backgroundImage",
                    params: "#foo"
                },
                "cross-fade": {
                    property: "backgroundImage",
                    params: "url(a.png), url(b.png), 50%"
                }
            };
            t["repeating-linear-gradient"] = t["repeating-radial-gradient"] = t["radial-gradient"] = t["linear-gradient"];
            var r = {
                initial: "color",
                "zoom-in": "cursor",
                "zoom-out": "cursor",
                box: "display",
                flexbox: "display",
                "inline-flexbox": "display",
                flex: "display",
                "inline-flex": "display",
                grid: "display",
                "inline-grid": "display",
                "min-content": "width"
            };
            n.functions = [], n.keywords = [];
            var i = document.createElement("div").style;
            for (var o in t) {
                var s = t[o],
                    a = s.property,
                    u = o + "(" + s.params + ")";
                !e(u, a) && e(n.prefix + u, a) && n.functions.push(o)
            }
            for (var l in r) {
                var a = r[l];
                !e(l, a) && e(n.prefix + l, a) && n.keywords.push(l)
            }
        }(),
        function () {
            function t(e) {
                return o.textContent = e + "{}", !! o.sheet.cssRules.length
            }
            var r = {
                ":read-only": null,
                ":read-write": null,
                ":any-link": null,
                "::selection": null
            }, i = {
                    keyframes: "name",
                    viewport: null,
                    document: 'regexp(".")'
                };
            n.selectors = [], n.atrules = [];
            var o = e.appendChild(document.createElement("style"));
            for (var s in r) {
                var a = s + (r[s] ? "(" + r[s] + ")" : "");
                !t(a) && t(n.prefixSelector(a)) && n.selectors.push(s)
            }
            for (var u in i) {
                var a = u + " " + (i[u] || "");
                !t("@" + a) && t("@" + n.prefix + a) && n.atrules.push(u)
            }
            e.removeChild(o)
        }(), n.valueProperties = ["transition", "transition-property"], e.className += " " + n.prefix, StyleFix.register(n.prefixCSS)
    }
}(document.documentElement), define("prefixfree", function () {}), require(["almond", "lib/polyfill/bind", "app", "presenterApp", "ui/app", "ui/presenterApp", "slides", "jquery", "prefixfree"], function (e, t, n, r, i, o, s) {
    var a, u, l, c, p;
    return a = {


        // file: "core/welcome.html",
        file: "pg/",

        slide: 0,
        hidden: !1,
        numSlides: 1

    }, p = {
        mainFrameContent: "currentSlide",
        secondaryFrameContent: "nextSlide",
        suppressEvents: !1,
        countdown: !1,
        countdownRunning: !1,
        countdownAmount: 30,
        countdownWarnAmount: 1
    }, u = $("#PikApp").length > 0, l = $("#PikPresenterApp").length > 0, c = $("#PikSlides").length > 0, u ? i(new n(a)) : l ? o(new r(a, p)) : c ? new s : void 0
}), define("pik7", function () {});
