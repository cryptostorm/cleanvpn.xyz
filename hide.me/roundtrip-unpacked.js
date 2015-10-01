// // https://www.hybrid-analysis.com/sample/5010b59e7f1430e298b1120201b195373b0cd800566caecae1188a52fc9ff8e7?environmentId=1

(function(a) {
    a.__adroll = a.__adroll || {
        exp: 5E4,
        eexp: 720,
        pv: 1E11 * Math.random(),
        __adc: "__ar_v4",
        _nad: 0,
        _lce: null,
        _broken: !1,
        _loaded: !1,
        _url: 2E3,
        _r: {},
        _kwl: 300,
        _logs: [],
        _secure: function() {
            return "https:" === this._protocol()
        },
        _head: function() {
            return (a.document.getElementsByTagName("head") || [null])[0] || (a.document.getElementsByTagName("body") || [null])[0] || a.document.getElementsByTagName("script")[0].parentNode
        },
        _protocol: function() {
            return a.document.location.protocol
        },
        _native: function() {
            try {
                return "http" !==
                    this._protocol().slice(0, 4)
            } catch (b) {
                return !0
            }
        },
        _has_email: function() {
            return "undefined" !== typeof a.adroll_email && "username@example.com" !== a.adroll_email
        },
        _has_user_identifier: function() {
            return "undefined" !== typeof a.adroll_user_identifier && "example_user_id" !== a.adroll_user_identifier
        },
        _srv: function(b) {
            return (this._native() || this._has_email() ? "https:" : "") + "//d.adroll.com" + ("undefined" === typeof b ? "" : b)
        },
        _cdn: function(b) {
            b = "undefined" === typeof b ? "" : b;
            return this._secure() ? "https://s.adroll.com" + b : "http://a.adroll.com" +
                b
        },
        is_email_valid: function(b) {
            return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(b)
        },
        md5: function(b) {
            function d(b, c) {
                var d = (b & 65535) + (c & 65535);
                return (b >> 16) + (c >> 16) + (d >> 16) << 16 | d & 65535
            }

            function c(b, c, a, e, f, g) {
                c = d(d(c, b), d(e, g));
                return d(c << f | c >>> 32 - f, a)
            }

            function e(b, d, a, e, f, g, k) {
                return c(d & a | ~d & e, b, d, f, g, k)
            }

            function k(b, d, a, e, f, g, k) {
                return c(d & e | a & ~e, b, d, f, g, k)
            }

            function l(b, d, a, e, f, g, k) {
                return c(a ^ (d | ~e),
                    b, d, f, g, k)
            }

            function q(b, a) {
                var h = b[0],
                    j = b[1],
                    f = b[2],
                    g = b[3],
                    h = e(h, j, f, g, a[0], 7, -680876936),
                    g = e(g, h, j, f, a[1], 12, -389564586),
                    f = e(f, g, h, j, a[2], 17, 606105819),
                    j = e(j, f, g, h, a[3], 22, -1044525330),
                    h = e(h, j, f, g, a[4], 7, -176418897),
                    g = e(g, h, j, f, a[5], 12, 1200080426),
                    f = e(f, g, h, j, a[6], 17, -1473231341),
                    j = e(j, f, g, h, a[7], 22, -45705983),
                    h = e(h, j, f, g, a[8], 7, 1770035416),
                    g = e(g, h, j, f, a[9], 12, -1958414417),
                    f = e(f, g, h, j, a[10], 17, -42063),
                    j = e(j, f, g, h, a[11], 22, -1990404162),
                    h = e(h, j, f, g, a[12], 7, 1804603682),
                    g = e(g, h, j, f, a[13], 12, -40341101),
                    f = e(f, g, h, j, a[14], 17, -1502002290),
                    j = e(j, f, g, h, a[15], 22, 1236535329),
                    h = k(h, j, f, g, a[1], 5, -165796510),
                    g = k(g, h, j, f, a[6], 9, -1069501632),
                    f = k(f, g, h, j, a[11], 14, 643717713),
                    j = k(j, f, g, h, a[0], 20, -373897302),
                    h = k(h, j, f, g, a[5], 5, -701558691),
                    g = k(g, h, j, f, a[10], 9, 38016083),
                    f = k(f, g, h, j, a[15], 14, -660478335),
                    j = k(j, f, g, h, a[4], 20, -405537848),
                    h = k(h, j, f, g, a[9], 5, 568446438),
                    g = k(g, h, j, f, a[14], 9, -1019803690),
                    f = k(f, g, h, j, a[3], 14, -187363961),
                    j = k(j, f, g, h, a[8], 20, 1163531501),
                    h = k(h, j, f, g, a[13], 5, -1444681467),
                    g = k(g, h, j, f, a[2], 9, -51403784),
                    f = k(f, g, h, j, a[7], 14, 1735328473),
                    j = k(j, f, g, h, a[12], 20, -1926607734),
                    h = c(j ^ f ^ g, h, j, a[5], 4, -378558),
                    g = c(h ^ j ^ f, g, h, a[8], 11, -2022574463),
                    f = c(g ^ h ^ j, f, g, a[11], 16, 1839030562),
                    j = c(f ^ g ^ h, j, f, a[14], 23, -35309556),
                    h = c(j ^ f ^ g, h, j, a[1], 4, -1530992060),
                    g = c(h ^ j ^ f, g, h, a[4], 11, 1272893353),
                    f = c(g ^ h ^ j, f, g, a[7], 16, -155497632),
                    j = c(f ^ g ^ h, j, f, a[10], 23, -1094730640),
                    h = c(j ^ f ^ g, h, j, a[13], 4, 681279174),
                    g = c(h ^ j ^ f, g, h, a[0], 11, -358537222),
                    f = c(g ^ h ^ j, f, g, a[3], 16, -722521979),
                    j = c(f ^ g ^ h, j, f, a[6], 23, 76029189),
                    h = c(j ^ f ^ g, h, j, a[9], 4, -640364487),
                    g = c(h ^ j ^ f, g, h, a[12], 11, -421815835),
                    f = c(g ^ h ^ j, f, g, a[15], 16, 530742520),
                    j = c(f ^ g ^ h, j, f, a[2], 23, -995338651),
                    h = l(h, j, f, g, a[0], 6, -198630844),
                    g = l(g, h, j, f, a[7], 10, 1126891415),
                    f = l(f, g, h, j, a[14], 15, -1416354905),
                    j = l(j, f, g, h, a[5], 21, -57434055),
                    h = l(h, j, f, g, a[12], 6, 1700485571),
                    g = l(g, h, j, f, a[3], 10, -1894986606),
                    f = l(f, g, h, j, a[10], 15, -1051523),
                    j = l(j, f, g, h, a[1], 21, -2054922799),
                    h = l(h, j, f, g, a[8], 6, 1873313359),
                    g = l(g, h, j, f, a[15], 10, -30611744),
                    f = l(f, g, h, j, a[6], 15, -1560198380),
                    j = l(j, f, g, h, a[13], 21, 1309151649),
                    h = l(h, j, f, g,
                        a[4], 6, -145523070),
                    g = l(g, h, j, f, a[11], 10, -1120210379),
                    f = l(f, g, h, j, a[2], 15, 718787259),
                    j = l(j, f, g, h, a[9], 21, -343485551);
                b[0] = d(h, b[0]);
                b[1] = d(j, b[1]);
                b[2] = d(f, b[2]);
                b[3] = d(g, b[3])
            }
            var r = "0123456789abcdef".split(""),
                n = b;
            /[\x80-\xFF]/.test(n) && (n = a.unescape(encodeURI(n)));
            var p = n.length;
            b = [1732584193, -271733879, -1732584194, 271733878];
            var m;
            for (m = 64; m <= n.length; m += 64) {
                for (var s = b, t = n.substring(m - 64, m), v = [], u = void 0, u = 0; 64 > u; u += 4) v[u >> 2] = t.charCodeAt(u) + (t.charCodeAt(u + 1) << 8) + (t.charCodeAt(u + 2) << 16) + (t.charCodeAt(u +
                    3) << 24);
                q(s, v)
            }
            n = n.substring(m - 64);
            s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (m = 0; m < n.length; m++) s[m >> 2] |= n.charCodeAt(m) << (m % 4 << 3);
            s[m >> 2] |= 128 << (m % 4 << 3);
            if (55 < m) {
                q(b, s);
                for (m = 0; 16 > m; m++) s[m] = 0
            }
            s[14] = 8 * p;
            q(b, s);
            for (n = 0; n < b.length; n++) {
                p = b;
                m = n;
                s = b[n];
                t = "";
                for (v = 0; 4 > v; v++) t += r[s >> 8 * v + 4 & 15] + r[s >> 8 * v & 15];
                p[m] = t
            }
            return b.join("")
        },
        log: function(b) {
            this._logs.push(b)
        },
        read_log: function(b) {
            return this._logs.join(b ? "\n" : "<br>\n")
        },
        cookieEnabled: function(b) {
            if (a.adroll_ext_network || a.adroll_optout || this._broken) return !1;
            if (2 <= this._nad || b) return this._lce;
            this.set("_te_", "1");
            return "1" === this.get("_te_") ? (this.del("_te_"), 0 < this._nad && !this.get(this.__adc) ? this._lce = !1 : this._lce = !0) : this._lce = !1
        },
        parseUri: function(b) {
            b = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(b);
            for (var a = {}, c = 14, e = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "); c--;) a[e[c]] =
                b[c] || "";
            a.queryKey = {};
            a[e[12]].replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(b, c, e) {
                c && (a.queryKey[c] = e)
            });
            return a
        },
        get_keywords: function() {
            try {
                var b = a.document.referrer || "";
                if (!b) return "";
                var d = this.parseUri(b);
                return -1 !== d.host.indexOf("google.com") ? d.queryKey.q.substring(0, this._kwl) : ""
            } catch (c) {
                return ""
            }
        },
        get: function(b) {
            var d = a.document.cookie;
            if (null === d) return this._broken = !0, null;
            var c;
            0 > d.indexOf(b + "=") ? d = null : (b = d.indexOf(b + "=") + b.length + 1, c = d.indexOf(";", b), -1 === c && (c = d.length), d = d.substring(b,
                c), d = "" === d ? null : a.unescape(d));
            return d
        },
        set: function(b, d, c) {
            var e;
            !c || "number" !== typeof c ? c = "" : (e = new Date, e.setTime(e.getTime() + 36E5 * c), c = e.toGMTString(), c = "; expires=" + c);
            e = "; domain=" + a.location.hostname;
            d = a.escape(d);
            a.document.cookie = b + "=" + d + c + "; path=/" + e
        },
        del: function(b) {
            this.set(b, "", -8760)
        },
        generate_link: function() {
            return ""
        },
        get_base_url: function(b, d, c, e, k, l) {
            b = b + "/" + d + "/" + c + (e ? "/" + e : "") + (k ? "/" + k : "");
            var q = "";
            this.cookieEnabled(!1) ? (q = a.escape(this.get_eids()), b += "?pv=" + this.pv + "&cookie=" +
                q) : b += "?no-cookies=1&pv=" + this.pv;
            l && (b += "&" + l.join("&"));
            if (b.length > this._url) {
                this.del(this.__adc);
                if (b.length - q.length > this._url) return "#";
                this.log("Url was too big, shrinking it");
                return this.get_url(d, c, e, k, l)
            }
            this.log("Generated url: " + b);
            return b
        },
        get_url: function(b, a, c, e, k) {
            var l = !c ? this._srv("/r") : this._srv("/c");
            return this.get_base_url(l, b, a, c, e, k)
        },
        get_eids: function() {
            if (a.adroll_ext_network || a.adroll_optout) return "";
            try {
                for (var b = this.get(this.__adc), d = b ? b.split("|") : "", b = [], c = d.length -
                        1; 0 <= c; c--)
                    if (d[c]) {
                        var e = d[c].split(":");
                        b.push([e[0], e[2]].join(":"))
                    }
                return b.join("|")
            } catch (k) {
                return this.del(this.__adc), ""
            }
        },
        get_date: function(b) {
            var a = new Date;
            b && a.setTime(a.getTime() + 36E5 * b);
            b = "" + a.getUTCFullYear();
            var c = a.getUTCMonth(),
                c = 10 <= c ? c : "0" + c,
                a = a.getUTCDate();
            return [b, c, 10 <= a ? a : "0" + a].join("")
        },
        normalize_url: function(a) {
            return a.toLowerCase()
        },
        check_cookie: function(b, d) {
            if (a.adroll_ext_network || a.adroll_optout) return "";
            for (var c = b.split("|"), e = c.length - 1; 0 <= e; e--)
                if (c[e]) {
                    var k =
                        c[e].split(":");
                    d === k[0] && (k[2] = "" + (parseInt(k[2]) + 1), c[e] = k.join(":"))
                }
            return c.join("|")
        },
        handle: function(a) {
            var d = this.get(this.__adc) || ""; - 1 !== d.indexOf(a) ? this.set(this.__adc, this.check_cookie(d, a), this.exp) : (a = [d, [a, this.get_date(this.eexp), "1"].join(":")].join("|"), this.set(this.__adc, a, this.exp))
        },
        expire_old: function() {
            if (!a.adroll_ext_network && !a.adroll_optout) {
                for (var b = this.get_date(), d = this.get(this.__adc), d = d ? d.split("|") : [""], c = [], e = d.length - 1; 0 <= e; e--) d[e] && d[e].split(":")[1] > b && c.push(d[e]);
                this.set(this.__adc, c.join("|"), this.exp)
            }
        },
        render_win_notification: function(b) {
            if (b.adroll_cpm_macro && b.adroll_win_notif) {
                var d = new a.Image,
                    c = this._secure() ? "https://" : "http://";
                d.src = c + b.adroll_win_notif + b.adroll_cpm_macro;
                d.setAttribute("width", "1");
                d.setAttribute("height", "1");
                d.setAttribute("border", "0");
                this._head().appendChild(d)
            }
        },
        render_ad_code: function(b, d, c, e) {
            e = "undefined" === typeof e ? null : e;
            if ("undefined" === typeof this._r[d] || e) {
                var k = ["width=" + a.adroll_width, "height=" + a.adroll_height,
                    "x=0", "y=0"
                ];
                if (c) this.log("Rendering test ad " + c + " in space " + d), k.push("test_ad=" + c), b = this.get_url(b, d, null, "ad", k);
                else if (e) {
                    this.log("Rendering adgroup " + e);
                    c = this.macro_values();
                    var l = this.macro_url_params(c, !1, !1, !1, !1);
                    k.push(l);
                    this.render_win_notification(c);
                    b = this.get_url(b, d, e, null, k)
                } else this.log("Rendering ad space " + d), b = this.get_url(b, d, null, "ad", k);
                this.expire_old();
                a.document.write('<script src="' + b + '">\x3c/script>');
                this._nad += 1;
                this._r[d] = 1
            }
        },
        endswith: function(a, d) {
            return -1 !==
                a.indexOf(d, a.length - d.length)
        },
        macro_values: function() {
            a.adroll_cpm_macro = "undefined" === typeof a.adroll_cpm_macro ? null : a.adroll_cpm_macro;
            a.adroll_url_macro = "undefined" === typeof a.adroll_url_macro ? null : a.adroll_url_macro;
            a.adroll_c_macro = "undefined" === typeof a.adroll_c_macro ? null : a.adroll_c_macro;
            a.adroll_subnetwork = "undefined" === typeof a.adroll_subnetwork ? null : a.adroll_subnetwork;
            a.adroll_ad_payload = "undefined" === typeof a.adroll_ad_payload ? null : a.adroll_ad_payload;
            a.adroll_win_notif = "undefined" ===
                typeof a.adroll_win_notif ? null : a.adroll_win_notif;
            var b = {
                    r: /^\$\{.*\}$/i,
                    g: /^%%.*%%$/i,
                    b: /^\[.*\]$/i,
                    x: /^\$\{.*\}$/i,
                    t: /INSERTCLICKTRACKER/
                }[a.adroll_ext_network],
                b = "undefined" === typeof b ? /CANNOT_MATCH_THIS/ : b,
                d = {};
            a.adroll_cpm_macro && !b.test(a.adroll_cpm_macro) && (d.adroll_cpm_macro = a.adroll_cpm_macro);
            a.adroll_url_macro && !b.test(a.adroll_url_macro) && (d.adroll_url_macro = a.adroll_url_macro);
            a.adroll_c_macro && !b.test(a.adroll_c_macro) && (d.adroll_c_macro = a.adroll_c_macro);
            a.adroll_subnetwork && !b.test(a.adroll_subnetwork) &&
                (d.adroll_subnetwork = a.adroll_subnetwork);
            a.adroll_ad_payload && !b.test(a.adroll_ad_payload) && (d.adroll_ad_payload = a.adroll_ad_payload);
            a.adroll_win_notif && !b.test(a.adroll_win_notif) && (d.adroll_win_notif = a.adroll_win_notif);
            return d
        },
        format_macros: function(a, d, c, e) {
            return this.macro_url_params(this.macro_values(), a, d, c, e)
        },
        macro_url_params: function(b, d, c, e, k) {
            k = "undefined" === typeof k ? !1 : k;
            var l = e ? a.escape : function(a) {
                    return a
                },
                q = b.adroll_cpm_macro,
                r = b.adroll_url_macro,
                n = c ? b.adroll_c_macro : null,
                p = [],
                m = d ? this.parseUri(d) : null,
                m = m ? this.endswith(m.path, ".tp") : !1;
            !m && k && p.push(["desturl", ""]);
            n && 0 === n.indexOf("http") ? (k = l, "g" === a.adroll_ext_network && (k = e ? function(a) {
                return a
            } : a.unescape), p.push(["clickurl", k(n)])) : m && k && p.push(["clickurl", ""]);
            a.adroll_ext_network && p.push(["adroll_network", a.adroll_ext_network]);
            q && p.push(["cpm", q]);
            b.adroll_subnetwork && p.push(["adroll_subnetwork", b.adroll_subnetwork]);
            b.adroll_ad_payload && p.push(["adroll_ad_payload", b.adroll_ad_payload]);
            r && (b = this.parseUri(a.unescape(r)),
                p.push(["site_url", l("http://" + b.host)]), c && (p.push(["adroll_width", l(a.adroll_width)]), p.push(["adroll_height", l(a.adroll_height)])));
            this.log("Macros found " + this.serialize(p));
            return d ? this.buildurl(d, p) : this.serialize(p)
        },
        view: function(b) {
            var d = new a.Image;
            d.src = this._srv("/view/" + b);
            d.setAttribute("width", "1");
            d.setAttribute("height", "1");
            d.setAttribute("border", "0");
            this._head().appendChild(d)
        },
        serialize: function(a) {
            if (a.length) {
                for (var d = [], c = a.length - 1; 0 <= c; c--) d.push(a[c].join("="));
                return d.join("&")
            }
            return ""
        },
        buildurl: function(a, d) {
            var c = this.serialize(d),
                e = a.indexOf("?");
            return !c ? a : e === a.length - 1 ? a + c : -1 !== e ? "&" === a[a.length - 1] ? a + c : a + "&" + c : a + "?" + c
        },
        set_cookie: function() {},
        reset: function() {
            a.adroll_c_id = null;
            a.adroll_url_macro = "";
            a.adroll_c_macro = "";
            a.adroll_cpm_macro = "";
            a.adroll_ext_network = null;
            a.adroll_subnetwork = null;
            a.adroll_ad_payload = null;
            a.adroll_win_notif = null
        },
        addLoadEvent: function(b) {
            if ("undefined" !== typeof a.__adroll_loaded && a.__adroll_loaded || "undefined" !== typeof a._adroll_ie && a._adroll_ie ||
                /msie/i.test(a.navigator.userAgent)) return b();
            if (/WebKit/i.test(a.navigator.userAgent)) {
                var d = a.setInterval(function() {
                    /loaded|complete/.test(a.document.readyState) && a.clearInterval(d);
                    b()
                }, 10);
                return null
            }
            var c = a.onload;
            a.onload = function() {
                b();
                c && c()
            }
        },
        render_pixel_code: function(b, d) {
            this.expire_old();
            var c = this._srv("/pixel"),
                e = a.document.createElement("script");
            e.setAttribute("async", "true");
            e.type = "text/javascript";
            var k = a.__adroll.get_keywords();
            this.addLoadEvent(function() {
                var l = [];
                try {
                    l.push("keyw=" +
                        a.escape(k))
                } catch (q) {}
                try {
                    "undefined" !== typeof a.adroll_segments && l.push("name=" + a.escape(a.adroll_segments.toLowerCase()))
                } catch (r) {}
                try {
                    var n = a.__adroll.get_conversion_value();
                    n.conv_value && l.push("conv_value=" + n.conv_value);
                    n.currency && l.push("adroll_currency=" + n.currency)
                } catch (p) {}
                try {
                    if (a.__adroll._has_email()) {
                        var m = a.adroll_email,
                            m = m.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
                        l.push("email=" + a.escape(m));
                        a.__adroll.is_email_valid(m) ? l.push("hashed_email=" + a.__adroll.md5(m.toLowerCase())) :
                            (l.push("data_error=email"), l.push("data_error_message=invalid_format"))
                    }
                } catch (s) {}
                try {
                    if (a.__adroll._has_user_identifier()) {
                        var t = a.adroll_user_identifier,
                            t = t.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
                        l.push("user_identifier=" + a.__adroll.md5(t))
                    }
                } catch (v) {}
                try {
                    var u = a.__adroll.external_data_to_qs(!0);
                    u && l.push(u)
                } catch (w) {}
                l = a.__adroll.get_base_url(c, b, d, null, "", l);
                e.src = l;
                a.__adroll._head().appendChild(e)
            })
        },
        record_user: function(b) {
            var d = "adroll_conversion_value adroll_conversion_value_in_dollars adroll_segments adroll_email adroll_user_identifier adroll_currency".split(" "),
                c, e;
            b = b || {};
            var k = {
                adroll_email: !0,
                adroll_user_identifier: !0
            };
            for (c = 0; c < d.length; c++) {
                try {
                    delete a[d[c]]
                } catch (l) {}
                if (d[c] in b) {
                    a[d[c]] = d[c] in k ? a.escape(b[d[c]]) : b[d[c]];
                    try {
                        delete b[d[c]]
                    } catch (q) {}
                }
            }
            try {
                delete a.adroll_custom_data
            } catch (r) {}
            for (e in b)
                if (b.hasOwnProperty(e)) {
                    a.adroll_custom_data = b;
                    break
                }
            this.render_pixel_code(a.adroll_adv_id, a.adroll_pix_id)
        },
        normalize_var: function(b, d) {
            if (!b) return "";
            b = b.toString().substr(0, this._kwl).replace(/,/gi, ".");
            d && (b = a.escape(b));
            return b
        },
        get_conversion_value: function() {
            a.adroll_currency =
                "undefined" === typeof a.adroll_currency ? null : a.adroll_currency;
            a.adroll_conversion_value = "undefined" === typeof a.adroll_conversion_value ? null : a.adroll_conversion_value;
            a.adroll_conversion_value_in_dollars = "undefined" === typeof a.adroll_conversion_value_in_dollars ? null : a.adroll_conversion_value_in_dollars;
            return a.adroll_conversion_value ? {
                conv_value: "" + a.adroll_conversion_value,
                currency: a.adroll_currency
            } : a.adroll_conversion_value_in_dollars ? {
                conv_value: "" + parseInt(100 * a.adroll_conversion_value_in_dollars),
                currency: "USC"
            } : null
        },
        get_external_data: function() {
            if ("undefined" !== typeof a.adroll_custom_data) {
                var b = a.adroll_custom_data,
                    d = {},
                    c;
                for (c in b) b.hasOwnProperty(c) && (d[c.toLowerCase()] = b[c]);
                return d
            }
            return null
        },
        _gurl: function() {
            var b = a.location;
            return this.normalize_url(b.pathname + b.search)
        },
        extract_pid: function(a, d, c, e, k, l) {
            function q(a) {
                return a ? (a = RegExp(a, "gi"), !!a.exec(n)) : null
            }
            var r = e = null,
                n = this._gurl(),
                p = this.get_external_data();
            p && p.product_id && (r = p.product_id);
            p && p.product_group && (e = p.product_group);
            if (!r && c && !("string" === c && c instanceof String) && "html" === c.scheme) {
                if (q(d) || !0 !== q(a)) return "";
                r = this.get_product_id_from_dom(c)
            } else if (!r) {
                if (q(d)) return "";
                r = this.get_product_id_from_url(n, a, c)
            }!e && l && !("string" === l && l instanceof String) && "html" === l.scheme ? e = this.get_product_id_from_dom(l) : e || k && (e = this.get_product_id_from_url(n, k, l));
            if (!r) return null;
            e || (e = "");
            return {
                product_id: r,
                product_group: e,
                product_action: p ? p.product_action : null
            }
        },
        get_pid: function(b, d, c, e, k, l) {
            c = this.extract_pid(b, d, c, e,
                k, l);
            if (!c) return "";
            b = c.product_id;
            d = c.product_group;
            c = c.product_action;
            k = "";
            if (b instanceof Array) {
                k = "?";
                for (l = 0; l < b.length; l++) k += "adroll_product_id=" + this.normalize_var((b[l] + "").toLowerCase(), e), l < b.length - 1 && (k += "&")
            } else k = "?adroll_product_id=" + this.normalize_var((b + "").toLowerCase(), e);
            d = d ? "&adroll_product_group=" + this.normalize_var((d + "").toLowerCase(), e) : "";
            c = c ? "&adroll_product_action=" + this.normalize_var(c + "").toLowerCase() : "";
            return '<img src="' + this._srv("/p/" + a.adroll_adv_id + "/" + k + d + c) +
                '" width="1" height="1" border="0"/>'
        },
        get_product_id_from_dom: function(b) {
            var d = null,
                c;
            b.path && (a.jQuery ? (c = a.jQuery(b.path), c.length && (c = c.eq(0), d = "text" === b.attribute ? c.text() : c.attr(b.attribute))) : a.Prototype && a.$$ ? (c = a.$$(b.path), c.length && (c = c[0], d = "text" === b.attribute ? c.innerText && !a.opera ? c.innerText : c.innerHTML.stripScripts().unescapeHTML().replace(/[\n\r\s]+/g, " ") : c.readAttribute(b.attribute))) : a.YUI ? (c = a.YUI().use("node"), c.one && (c = c.one(b.path), d = null, c && (d = "text" === b.attribute ? c.get("text") :
                c.getAttribute(b.attribute)))) : a.$$ && (c = a.$$(b.path), c.length && (c = c[0], d = "text" === b.attribute ? c.get("text") : c.getProperty(b.attribute))));
            if (d && (d = d.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), b.regular_expression && b.regular_expression_replace))
                if (c = RegExp(b.regular_expression, "gi"), d = c.exec(d), null !== d) {
                    b = b.regular_expression_replace;
                    for (c = 0; c < d.length; c++) b = b.replace(RegExp("\\\\" + c, "gi"), d[c] || "");
                    d = b
                } else d = "";
            return d
        },
        get_product_id_from_url: function(a, d, c) {
            var e = null;
            try {
                e = parseInt(c)
            } catch (k) {}
            return null !==
                e && (!isNaN(e) && d) && (a = RegExp(d, "gi").exec(a), null !== a && e in a) ? a[e] : null
        },
        external_data_to_qs: function(b) {
            var d = [],
                c = this.get_external_data();
            if (!c) return null;
            for (var e in c) c.hasOwnProperty(e) && d.push(this.normalize_var(a.escape("" + e) + "=" + a.escape("" + c[e])));
            d = d.join("&");
            b && (d = a.escape(d));
            return "adroll_external_data=" + d
        },
        replace_external_data: function(b) {
            var d = this.get_external_data(),
                c = this.get_conversion_value(),
                e = null,
                k;
            if (d)
                for (k in d) d.hasOwnProperty(k) && (e = RegExp("\\[" + k + "\\]", "gi"), b = b.replace(e,
                    d[k]), e = RegExp("\\[" + k + "_ESC\\]", "gi"), b = b.replace(e, a.escape(d[k])));
            if (c)
                for (k in c) c.hasOwnProperty(k) && (e = RegExp("\\[" + k + "\\]", "gi"), b = b.replace(e, c[k]), e = RegExp("\\[" + k + "_ESC\\]", "gi"), b = b.replace(e, a.escape(c[k])));
            return b
        },
        set_pixel_cookie: function(b, d, c) {
            a.adroll_optout || (this.handle(b), this.handle(d), this.handle(c), this.pixel_loaded())
        },
        add_pixel_load_callback: function(b) {
            this._loaded ? b() : a.adroll_callbacks.push(b)
        },
        pixel_loaded: function() {
            this._loaded = !0;
            for (var b = 0; b < a.adroll_callbacks.length; b++) a.adroll_callbacks[b]()
        }
    };
    a.adroll_optout = !1;
    a.adroll_ext_network = null;
    a.adroll_callbacks = "undefined" === typeof a.adroll_callbacks ? [] : a.adroll_callbacks;
    a.__adroll.render_pixel_code(a.adroll_adv_id, a.adroll_pix_id)
})(window);
