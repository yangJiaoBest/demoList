//"v7.5.8 Geetest Inc.";
! function(a, b) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
		if(!a.document) throw new Error("Geetest requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
	function c() {
		this.ib = {}
	}

	function d(a, b) {
		return a.type || (a.type = "slide"), new d[a.type](a, b)
	}

	function e(a) {
		this.Ab = a
	}

	function f(a) {
		this.cc = a || []
	}

	function g(a) {
		this.jc = a
	}

	function h(a) {
		this.j = "string" == typeof a ? t.createElement(a) : a
	}

	function i(a, b) {
		this.lc = b, this.j = a
	}

	function j() {
		var a = this;
		a.Fb = a.vd()
	}

	function k() {
		var a = this;
		a.Fb = [], a.Ce = 0, a.De = [], a.Ee = t.body.nodeType, new h(t).ka("click", function(b) {
			a.fa(b.lc)
		})
	}

	function l() {
		var a = this;
		a.Fb = [], a.L()
	}

	function m(a, b) {
		var d = this,
			f = new n(a);
		f.https ? f.protocol = "https://" : f.protocol = y, a.debugConfig && f.Lc(a.debugConfig), "float" !== f.product && "popup" !== f.product && "custom" !== f.product && "bind" !== f.product && (f.product = "float"), (C || D) && "float" === f.product && (f.product = "popup"), D && "custom" === f.product && (f.product = "popup"), d.B = f, d.A = a, d.C = new c, d.D = new e(function(a, b) {
			d.F(a, b)
		}), d.mc = b, d.D.G(ea), d.Mc = new l, d.Dd = new j, d.Ta = new k
	}

	function n(a) {
		var b = this;
		b.h = aa(), b.Lc({
			protocol: y
		}).Lc(a)
	}

	function o(a, b) {
		var c = this;
		c.Za = aa(), c.ye = !0, R.G(c.Za, new m(a, b))
	}

	function p() {}

	function q(a) {
		var b = this,
			c = a.B;
		b.D = a.D, b.ma = a, b.B = c, b.A = a.A, b.na = Ba(b.B.lang), b.$ = ba(), b.Wc = Aa(), b.Xc = function(a) {
			return b.Wc ? a : 0
		};
		var d;
		d = b.Wc ? ".holder." + c.theme : ".holder.ie." + c.theme, c.offline && (d += ".fallback"), b.oa = Da(d, Ca, b.$), b.L()
	}
	var r = function() {
			return {
				Be: function() {
					return(a.XDomainRequest || a.XMLHttpRequest && "withCredentials" in new a.XMLHttpRequest) && a.JSON
				},
				Ae: function(b, c, d, e) {
					var f = a.JSON.stringify(c);
					if(!a.XMLHttpRequest || "withCredentials" in new a.XMLHttpRequest) {
						if(a.XMLHttpRequest) {
							var g = new a.XMLHttpRequest;
							g.open("POST", b, !0), g.setRequestHeader("Content-Type", "text/plain;charset=utf-8"), g.setRequestHeader("Accept", "application/json"), g.withCredentials = !0, g.onload = function() {
								d(a.JSON.parse(g.responseText))
							}, g.onreadystatechange = function() {
								4 === g.readyState && (200 === g.status ? d(a.JSON.parse(g.responseText)) : e({
									error: "status: " + g.status
								}))
							}, g.send(f)
						}
					} else {
						var h = a.location.protocol,
							i = new a.XDomainRequest; - 1 === b.indexOf(h) && (b = b.replace(/^https?:/, h)), i.open("POST", b), i.ontimeout = function() {
							"functon" == typeof e && e({
								error: "timeout"
							})
						}, i.onerror = function() {
							"functon" == typeof e && e({
								error: "error"
							})
						}, i.onload = function() {
							"functon" == typeof d && d(a.JSON.parse(i.responseText))
						}, i.send(f)
					}
				}
			}
		}(),
		s = {
			Qd: {
				Rd: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
				Sd: ".",
				Td: 7274496,
				Ud: 9483264,
				Vd: 19220,
				Wd: 235,
				Xd: 24
			},
			Rd: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
			Sd: ".",
			Td: 7274496,
			Ud: 9483264,
			Vd: 19220,
			Wd: 235,
			Xd: 24,
			Yd: function(a) {
				for(var b = [], c = 0, d = a.length; c < d; c += 1) b.push(a.charCodeAt(c));
				return b
			},
			Zd: function(a) {
				for(var b = "", c = 0, d = a.length; c < d; c += 1) b += String.fromCharCode(a[c]);
				return b
			},
			$d: function(a) {
				var b = this.Rd;
				return a < 0 || a >= b.length ? "." : b.charAt(a)
			},
			_d: function(a) {
				return this.Rd.indexOf(a)
			},
			ae: function(a, b) {
				return a >> b & 1
			},
			be: function(a, b) {
				var c = this;
				b || (b = c);
				for(var d = function(a, d) {
						for(var e = 0, f = b.Xd - 1; f >= 0; f -= 1) 1 === c.ae(d, f) && (e = (e << 1) + c.ae(a, f));
						return e
					}, e = "", f = "", g = a.length, h = 0; h < g; h += 3) {
					var i;
					if(h + 2 < g) i = (a[h] << 16) + (a[h + 1] << 8) + a[h + 2], e += c.$d(d(i, b.Td)) + c.$d(d(i, b.Ud)) + c.$d(d(i, b.Vd)) + c.$d(d(i, b.Wd));
					else {
						var j = g % 3;
						2 === j ? (i = (a[h] << 16) + (a[h + 1] << 8), e += c.$d(d(i, b.Td)) + c.$d(d(i, b.Ud)) + c.$d(d(i, b.Vd)), f = b.Sd) : 1 === j && (i = a[h] << 16, e += c.$d(d(i, b.Td)) + c.$d(d(i, b.Ud)), f = b.Sd + b.Sd)
					}
				}
				return {
					res: e,
					end: f
				}
			},
			Hb: function(a) {
				var b = this,
					c = b.be(b.Yd(a));
				return c.res + c.end
			},
			ce: function(a) {
				return this.be(a).res
			},
			de: function(a, b) {
				var c = this;
				b || (b = c);
				for(var d = function(a, d) {
						if(a < 0) return 0;
						for(var e = 5, f = 0, g = b.Xd - 1; g >= 0; g -= 1) 1 === c.ae(d, g) && (f += c.ae(a, e) << g, e -= 1);
						return f
					}, e = a.length, f = "", g = 0; g < e; g += 4) {
					var h = d(c._d(a.charAt(g)), b.Td) + d(c._d(a.charAt(g + 1)), b.Ud) + d(c._d(a.charAt(g + 2)), b.Vd) + d(c._d(a.charAt(g + 3)), b.Wd),
						i = h >> 16 & 255;
					if(f += String.fromCharCode(i), a.charAt(g + 2) !== b.Sd) {
						var j = h >> 8 & 255;
						if(f += String.fromCharCode(j), a.charAt(g + 3) !== b.Sd) {
							var k = 255 & h;
							f += String.fromCharCode(k)
						}
					}
				}
				return f
			},
			Pd: function(a) {
				var b = this,
					c = 4 - a.length % 4;
				if(c < 4)
					for(var d = 0; d < c; d += 1) a += b.Sd;
				return b.de(a)
			},
			ze: function(a) {
				return this.Pd(a)
			}
		},
		t = a.document,
		u = a.location,
		v = t.body || t.getElementsByTagName("body")[0],
		w = t.head || t.getElementsByTagName("head")[0],
		x = t.documentElement || v,
		y = u.protocol + "//",
		z = a.navigator,
		A = function(b, c) {
			return a.setTimeout(b, c)
		},
		B = function(b) {
			a.clearTimeout(b)
		},
		C = (function() {
			var a = t.createElement("canvas"),
				b = a.getContext && a.getContext("2d"),
				c = /msie/i.test(z.userAgent)
		}(), /Mobi/i.test(z.userAgent)),
		D = /msie 6\.0/i.test(z.userAgent),
		E = (/msie 7\.0/i.test(z.userAgent), t.compatMode, v.style, function(a, b) {
			return new W(function(c, d) {
				var e = new h("script"),
					f = e.j,
					g = !1,
					i = function() {
						g || f.readyState && "loaded" !== f.readyState && "complete" !== f.readyState || (g = !0, A(function() {
							c(e)
						}, 0))
					},
					j = function() {
						e.$b(), d(P)
					};
				e._b({
					charset: "UTF-8",
					aysnc: !1,
					onload: i,
					onreadystatechange: i,
					onerror: j,
					src: a
				}).ca(new h(w)), A(function() {
					g || e.$b(), d(Q)
				}, b || 3e4)
			})
		}),
		F = function(a, b) {
			return new W(function(c, d) {
				var e = new h("link"),
					f = !1,
					g = function() {
						e.$b(), d(P)
					},
					i = function() {
						f = !0, c(e)
					};
				A(function() {
					f = !0, c(e)
				}, 1e3), e._b({
					onerror: g,
					onload: i,
					href: a,
					rel: "stylesheet"
				}).ca(new h(w)), A(function() {
					f || e.$b(), d(Q)
				}, b || 3e4)
			})
		},
		G = function(a, b) {
			return new W(function(c, d) {
				var e = new h("img"),
					f = function() {
						d(P)
					},
					g = function() {
						c(e)
					};
				e._b({
					onerror: f,
					onload: g,
					crossOrigin: "anonymous"
				}).Dc({
					crossorigin: "anonymous",
					src: a
				}), A(function() {
					d(Q)
				}, b || 3e4)
			})
		},
		H = function(a) {
			return a.replace(/^https?:\/\/|\/$/g, "")
		},
		I = function(a) {
			return a = a.replace(/\/+/g, "/"), 0 !== a.indexOf("/") && (a = "/" + a), a
		},
		J = function(a) {
			if(!a) return "";
			var b = "?";
			return new g(a).sb(function(a, c) {
				(Z(c) || Y(c) || $(c)) && (b = b + encodeURIComponent(a) + "=" + encodeURIComponent(c) + "&")
			}), "?" === b && (b = ""), b.replace(/&$/, "")
		},
		K = function(a, b, c, d) {
			b = H(b);
			var e = I(c) + J(d);
			return b && (e = a + b + e), e
		},
		L = function(a, b, c, d, e, f) {
			var g;
			"js" == b ? g = E : "css" == b ? g = F : "img" == b && (g = G);
			for(var h = [], i = 0, j = d.length; i < j; i += 1) h.push(function(b) {
				return function(c, d) {
					g(b, a.timeout).K(function(a) {
						d(a)
					}, function() {
						c()
					})
				}
			}(K(c, d[i], e, f)));
			return new W(function(a, b) {
				W.step(h).K(function() {
					b()
				}, function(b) {
					a(b)
				})
			})
		},
		M = function(a, b, c) {
			return new W(function(d, e) {
				for(var f in c) c.hasOwnProperty(f) && "number" == typeof c[f] && (c[f] = "" + c[f]);
				c.a && (c.a = decodeURIComponent(c.a)), r.Ae(K(a.protocol, a.api_server || a.apiserver, b), c, function(a) {
					d(a)
				}, function(a) {
					e(a)
				})
			})
		},
		N = function(b, c, d) {
			return b.offline ? p.N(b, c, d) : void 0 !== r && r.Be() && b.post ? M(b, c, d) : new W(function(e, f) {
				var g = "geetest_" + aa();
				a[g] = function(b) {
					e(b), a[g] = undefined;
					try {
						delete a[g]
					} catch(c) {}
				}, d.callback = g, L(b, "js", b.protocol, [b.api_server || b.apiserver], c, d).K(function() {}, function(a) {
					f(a)
				})
			})
		},
		O = "geetest_",
		P = "err001",
		Q = "err002",
		R = function() {
			var a = [];
			return {
				G: function(b, c) {
					a[b] = c
				},
				$a: function(b) {
					return a[b]
				}
			}
		}(),
		S = function(a, b) {
			return T({
				api_appendTo: {
					msg: "传给appendTo接口的参数有误：只接受id选择器和DOM元素，并且需保证其存在于页面中",
					code: "error_100"
				},
				api_bindOn: {
					msg: "传给bindOn接口的参数有误：只接受id选择器和DOM元素，并且需保证其存在于页面中",
					code: "error_101"
				},
				api_onXxx: {
					msg: "传给各回调的参数不是函数类型：请传入函数类型参数",
					code: "error_102"
				},
				config_gt: {
					msg: "配置参数gt有误：请检查初始化时传入的配置参数gt（对应申请时的ID）",
					code: "error_103"
				},
				url_get: {
					msg: "/get.php请求报错：1.请保持网络畅通；2.检查初始化时传入的配置参数gt和challenge",
					code: "error_104"
				},
				url_ajax: {
					msg: "/ajax.php请求报错：1.请保持网络畅通；2.请联系极验运维（QQ:3050372802）",
					code: "error_105"
				},
				url_refresh: {
					msg: "/refresh.php请求报错：1.请保持网络畅通；2.刷新次数本身有限制（10次以内），超过限制请刷新整个页面再试",
					code: "error_106"
				},
				url_skin: {
					msg: "皮肤加载失败：1.请保持网络畅通；2.请联系极验运维（QQ:3050372802）",
					code: "error_107"
				},
				url_picture: {
					msg: "验证图片加载失败：1.请保持网络畅通；2.请联系极验运维（QQ:3050372802）",
					code: "error_108"
				},
				url_reset: {
					msg: "/reset.php请求报错：1.请保持网络畅通；2.请联系极验运维（QQ:3050372802）",
					code: "error_109"
				},
				js_not_exist: {
					msg: "验证的js地址不存在",
					code: "error_110"
				},
				js_unload: {
					msg: "验证的js地址无法加载",
					code: "error_111"
				},
				config_area: {
					msg: "配置参数area有误：只接受id选择器和DOM元素，并且需保证其存在于页面中",
					code: "error_112"
				},
				server_forbidden: {
					msg: "服务端forbidden： 请联系极验运维（QQ:3050372802）",
					code: "error_113"
				}
			}[a], b)
		},
		T = function(a, b) {
			var c = "",
				d = b.A;
			return X(d) && new g(d).sb(function(a, b) {
				(Z(b) || Y(b) || $(b)) && (c += a + ": " + b + "\n")
			}), b.rd(a), new Error("GeetestError: " + (a && a.msg) + "\n" + c)
		},
		U = function(a) {
			return console && console.error && console.error(a), new W(function(b, c) {
				c(a)
			})
		},
		V = function(a) {
			function b(a, b) {
				return a << b | a >>> 32 - b
			}

			function c(a, b) {
				var c, d, e, f, g;
				return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f
			}

			function d(a, b, c) {
				return a & b | ~a & c
			}

			function e(a, b, c) {
				return a & c | b & ~c
			}

			function f(a, b, c) {
				return a ^ b ^ c
			}

			function g(a, b, c) {
				return b ^ (a | ~c)
			}

			function h(a, e, f, g, h, i, j) {
				return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e)
			}

			function i(a, d, f, g, h, i, j) {
				return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d)
			}

			function j(a, d, e, g, h, i, j) {
				return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d)
			}

			function k(a, d, e, f, h, i, j) {
				return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d)
			}

			function l(a) {
				var b, c, d = "",
					e = "";
				for(c = 0; c <= 3; c++) b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2);
				return d
			}
			var m, n, o, p, q, r, s, t, u, v = [];
			for(a = function(a) {
					a = a.replace(/\r\n/g, "\n");
					for(var b = "", c = 0; c < a.length; c++) {
						var d = a.charCodeAt(c);
						d < 128 ? b += String.fromCharCode(d) : d > 127 && d < 2048 ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128))
					}
					return b
				}(a), v = function(a) {
					for(var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = Array(f - 1), h = 0, i = 0; i < c;) b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++;
					return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g
				}(a), r = 1732584193, s = 4023233417, t = 2562383102, u = 271733878, m = 0; m < v.length; m += 16) n = r, o = s, p = t, q = u, r = h(r, s, t, u, v[m + 0], 7, 3614090360), u = h(u, r, s, t, v[m + 1], 12, 3905402710), t = h(t, u, r, s, v[m + 2], 17, 606105819), s = h(s, t, u, r, v[m + 3], 22, 3250441966), r = h(r, s, t, u, v[m + 4], 7, 4118548399), u = h(u, r, s, t, v[m + 5], 12, 1200080426), t = h(t, u, r, s, v[m + 6], 17, 2821735955), s = h(s, t, u, r, v[m + 7], 22, 4249261313), r = h(r, s, t, u, v[m + 8], 7, 1770035416), u = h(u, r, s, t, v[m + 9], 12, 2336552879), t = h(t, u, r, s, v[m + 10], 17, 4294925233), s = h(s, t, u, r, v[m + 11], 22, 2304563134), r = h(r, s, t, u, v[m + 12], 7, 1804603682), u = h(u, r, s, t, v[m + 13], 12, 4254626195), t = h(t, u, r, s, v[m + 14], 17, 2792965006), s = h(s, t, u, r, v[m + 15], 22, 1236535329), r = i(r, s, t, u, v[m + 1], 5, 4129170786), u = i(u, r, s, t, v[m + 6], 9, 3225465664), t = i(t, u, r, s, v[m + 11], 14, 643717713), s = i(s, t, u, r, v[m + 0], 20, 3921069994), r = i(r, s, t, u, v[m + 5], 5, 3593408605), u = i(u, r, s, t, v[m + 10], 9, 38016083), t = i(t, u, r, s, v[m + 15], 14, 3634488961), s = i(s, t, u, r, v[m + 4], 20, 3889429448), r = i(r, s, t, u, v[m + 9], 5, 568446438), u = i(u, r, s, t, v[m + 14], 9, 3275163606), t = i(t, u, r, s, v[m + 3], 14, 4107603335), s = i(s, t, u, r, v[m + 8], 20, 1163531501), r = i(r, s, t, u, v[m + 13], 5, 2850285829), u = i(u, r, s, t, v[m + 2], 9, 4243563512), t = i(t, u, r, s, v[m + 7], 14, 1735328473), s = i(s, t, u, r, v[m + 12], 20, 2368359562), r = j(r, s, t, u, v[m + 5], 4, 4294588738), u = j(u, r, s, t, v[m + 8], 11, 2272392833), t = j(t, u, r, s, v[m + 11], 16, 1839030562), s = j(s, t, u, r, v[m + 14], 23, 4259657740), r = j(r, s, t, u, v[m + 1], 4, 2763975236), u = j(u, r, s, t, v[m + 4], 11, 1272893353), t = j(t, u, r, s, v[m + 7], 16, 4139469664), s = j(s, t, u, r, v[m + 10], 23, 3200236656), r = j(r, s, t, u, v[m + 13], 4, 681279174), u = j(u, r, s, t, v[m + 0], 11, 3936430074), t = j(t, u, r, s, v[m + 3], 16, 3572445317), s = j(s, t, u, r, v[m + 6], 23, 76029189), r = j(r, s, t, u, v[m + 9], 4, 3654602809), u = j(u, r, s, t, v[m + 12], 11, 3873151461), t = j(t, u, r, s, v[m + 15], 16, 530742520), s = j(s, t, u, r, v[m + 2], 23, 3299628645), r = k(r, s, t, u, v[m + 0], 6, 4096336452), u = k(u, r, s, t, v[m + 7], 10, 1126891415), t = k(t, u, r, s, v[m + 14], 15, 2878612391), s = k(s, t, u, r, v[m + 5], 21, 4237533241), r = k(r, s, t, u, v[m + 12], 6, 1700485571), u = k(u, r, s, t, v[m + 3], 10, 2399980690), t = k(t, u, r, s, v[m + 10], 15, 4293915773), s = k(s, t, u, r, v[m + 1], 21, 2240044497), r = k(r, s, t, u, v[m + 8], 6, 1873313359), u = k(u, r, s, t, v[m + 15], 10, 4264355552), t = k(t, u, r, s, v[m + 6], 15, 2734768916), s = k(s, t, u, r, v[m + 13], 21, 1309151649), r = k(r, s, t, u, v[m + 4], 6, 4149444226), u = k(u, r, s, t, v[m + 11], 10, 3174756917), t = k(t, u, r, s, v[m + 2], 15, 718787259), s = k(s, t, u, r, v[m + 9], 21, 3951481745), r = c(r, n), s = c(s, o), t = c(t, p), u = c(u, q);
			return(l(r) + l(s) + l(t) + l(u)).toLowerCase()
		},
		W = function(a) {
			function b() {
				var a = this;
				a.vb = a.wb = null
			}

			function c(a) {
				var e = this;
				if(e.mb = e.PENDING, e.nb = new b, e.ob = new b, d(a)) try {
					a(function(a) {
						e.lb(a)
					}, function(a) {
						e.kb(a)
					})
				} catch(f) {
					c.Bc(f)
				}
			}
			var d = function(a) {
					return "function" == typeof a
				},
				e = function(a) {
					return "object" == typeof a && null !== a
				},
				f = function(a) {
					a()
				};
			b.prototype = {
				enqueue: function(a) {
					var b = this,
						c = {
							ele: a,
							next: null
						};
					null === b.vb ? b.vb = this.wb = c : (b.wb.next = c, b.wb = b.wb.next)
				},
				dequeue: function() {
					var a = this;
					if(null === a.vb) throw new Error("queue is empty");
					var b = a.vb.ele;
					return a.vb = a.vb.next, b
				},
				isEmpty: function() {
					return null === this.vb
				},
				clear: function() {
					var a = this;
					a.vb = a.zb = null
				},
				each: function(a) {
					var b = this;
					b.isEmpty() || (a(b.dequeue()), b.each(a))
				}
			};
			var g = function(a, b) {
					if(a === b) a.kb(new TypeError);
					else if(b instanceof c) b.then(function(b) {
						g(a, b)
					}, function(b) {
						a.kb(b)
					});
					else if(d(b) || e(b)) {
						var f;
						try {
							f = b.then
						} catch(i) {
							return c.Bc(i), void a.kb(i)
						}
						var h = !1;
						if(d(f)) try {
							f.call(b, function(b) {
								h || (h = !0, g(a, b))
							}, function(b) {
								h || (h = !0, a.kb(b))
							})
						} catch(i) {
							if(h) return;
							h = !0, a.kb(i)
						} else a.lb(b)
					} else a.lb(b)
				},
				h = !1;
			return c.debug = function() {
				h = !0
			}, c.Bc = function(a) {
				h && "undefined" != typeof console && console.error(a)
			}, c.prototype = {
				PENDING: 0,
				RESOLVED: 1,
				REJECTED: -1,
				lb: function(a) {
					var b = this;
					b.mb === b.PENDING && (b.mb = b.RESOLVED, b.pb = a, b.qb())
				},
				kb: function(a) {
					var b = this;
					b.mb === b.PENDING && (b.mb = b.REJECTED, b.rb = a, b.qb())
				},
				qb: function() {
					var a, b, c = this,
						d = c.mb;
					d === c.RESOLVED ? (a = c.nb, c.ob.clear(), b = c.pb) : d === c.REJECTED && (a = c.ob, c.nb.clear(), b = c.rb), a.each(function(a) {
						f(function() {
							a(d, b)
						})
					})
				},
				tb: function(a, b, e) {
					var h = this;
					f(function() {
						if(d(b)) {
							var f;
							try {
								f = b(e)
							} catch(i) {
								return c.Bc(i), void h.kb(i)
							}
							g(h, f)
						} else a === h.RESOLVED ? h.lb(e) : a === h.REJECTED && h.kb(e)
					})
				},
				then: function(a, b) {
					var d = this,
						e = new c;
					return d.nb.enqueue(function(b, c) {
						e.tb(b, a, c)
					}), d.ob.enqueue(function(a, c) {
						e.tb(a, b, c)
					}), d.mb === d.RESOLVED ? d.qb() : d.mb === d.REJECTED && d.qb(), e
				}
			}, c.all = function(a) {
				return new c(function(b, d) {
					function e(a, c, e) {
						h || (null !== a && (h = !0, d(a)), i[e] = c, (g += 1) === f && (h = !0, b(i)))
					}
					for(var f = a.length, g = 0, h = !1, i = [], j = 0; j < f; j += 1) ! function(b) {
						var d = a[b];
						d instanceof c || (d = new c(d)), d.then(function(a) {
							e(null, a, b)
						}, function(a) {
							e(a || !0)
						})
					}(j)
				})
			}, c.race = function(a) {
				return new c(function(b, d) {
					function e(a, c) {
						g || (null == a ? (g = !0, b(c)) : (h += 1) >= f && (g = !0, d(a)))
					}
					for(var f = a.length, g = !1, h = 0, i = 0; i < f; i += 1) ! function(b) {
						var d = a[b];
						d instanceof c || (d = new c(d)), d.then(function(a) {
							e(null, a)
						}, function(a) {
							e(a || !0)
						})
					}(i)
				})
			}, c.step = function(a) {
				var b = a.length,
					d = new c,
					e = function(f, g) {
						if(f >= b) return d.lb(g);
						new c(a[f]).then(function(a) {
							e(f + 1, a)
						}, function(a) {
							d.kb(a)
						})
					};
				return new c(a[0]).then(function(a) {
					e(1, a)
				}, function(a) {
					d.kb(a)
				}), d
			}, c.prototype.K = function(a, b) {
				return this.then(a, b)
			}, c
		}();
	W.debug(), c.prototype = {
		ka: function(a, b) {
			var c = this;
			return c.ib[a] ? c.ib[a].push(b) : c.ib[a] = [b], c
		},
		M: function(a, b) {
			var c = this,
				d = c.ib[a];
			if(d) {
				for(var e = 0, f = d.length; e < f; e += 1) d[e](b);
				return c
			}
		},
		he: function() {
			this.ib = {}
		}
	}, d.type = "shell", d.noConflict = function(a, b) {
		a.Geetest ? a.Geetest.type === d.type ? a.Geetest[b.type] = b : (d[b.type] = b, d[a.Geetest.type] = a.Geetest, a.Geetest = d) : (d[b.type] = b, a.Geetest = d)
	}, e.prototype = {
		G: function(a) {
			var b = this;
			return b.Bb = b.D, b.D = a, b.Ab(b.D, b.Bb), b
		},
		$a: function() {
			return this.D
		},
		Cc: function(a) {
			for(var b = this, c = f.ic(a) ? a : [a], d = 0, e = c.length; d < e; d += 1)
				if(c[d] === b.$a()) return !0;
			return !1
		}
	};
	var X = function(a) {
			return "object" == typeof a && null !== a
		},
		Y = function(a) {
			return "number" == typeof a
		},
		Z = function(a) {
			return "string" == typeof a
		},
		$ = function(a) {
			return "boolean" == typeof a
		},
		_ = function(a) {
			return "function" == typeof a
		},
		aa = function() {
			return function() {
				return parseInt(1e4 * Math.random()) + (new Date).valueOf()
			}
		}(),
		ba = function() {
			var a = {};
			return function(b, c) {
				if(!c) return a[b.replace(O, "")];
				a[b] = c
			}
		},
		ca = function() {
			return(new Date).getTime()
		},
		da = function(a, b) {
			new g(b).sb(function(b, c) {
				a[b] = c
			})
		};
	f.prototype = {
		$a: function(a) {
			return this.cc[a]
		},
		jd: function() {
			return this.cc.length
		},
		Ya: function(a, b) {
			var c, d = this;
			return c = Y(b) ? d.cc.slice(a, b) : d.cc.slice(a), new f(c)
		},
		dc: function(a) {
			var b = this;
			return b.cc.push(a), b
		},
		ec: function(a, b) {
			return this.cc.splice(a, b || 1)
		},
		ac: function(a) {
			return this.cc.join(a)
		},
		fc: function(a) {
			return new f(this.cc.concat(a))
		},
		jb: function(a) {
			var b = this,
				c = b.cc;
			if(c.map) return new f(c.map(a));
			for(var d = [], e = 0, g = c.length; e < g; e += 1) d[e] = a(c[e], e, b);
			return new f(d)
		},
		gc: function(a) {
			var b = this,
				c = b.cc;
			if(c.filter) return new f(c.filter(a));
			for(var d = [], e = 0, g = c.length; e < g; e += 1) a(c[e], e, b) && d.push(c[e]);
			return new f(d)
		},
		hc: function(a) {
			var b = this,
				c = b.cc;
			if(!c.indexOf) {
				for(var d = 0, e = c.length; d < e; d += 1)
					if(c[d] === a) return d;
				return -1
			}
			return c.indexOf(a)
		}
	}, f.ic = function(a) {
		return Array.isArray ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
	}, g.prototype = {
		sb: function(a) {
			var b = this.jc;
			for(var c in b) b.hasOwnProperty(c) && a(c, b[c]);
			return this
		},
		yb: function() {
			var a = this.jc;
			for(var b in a)
				if(a.hasOwnProperty(b)) return !1;
			return !0
		}
	}, h.prototype = {
		kc: {
			down: ["mousedown", "touchstart", "pointerdown", "MSPointerDown"],
			move: ["mousemove", "touchmove", "pointermove", "MSPointerMove"],
			up: ["mouseup", "touchend", "pointerup", "MSPointerUp"],
			enter: ["mouseenter"],
			leave: ["mouseleave"],
			cancel: ["touchcancel"],
			click: ["click"],
			scroll: ["scroll"],
			resize: ["resize"],
			blur: ["blur"],
			focus: ["focus"],
			unload: ["unload"],
			input: ["input"],
			keyup: ["keyup"]
		},
		s: function() {
			var a = this;
			return a.j.innerHTML = "", a
		},
		ia: function() {
			return this.Ia({
				display: "none"
			})
		},
		ha: function() {
			return this.Ia({
				display: "block"
			})
		},
		Ka: function(a) {
			return this.Ia({
				opacity: a
			})
		},
		Ec: function(a) {
			return this.j.getAttribute(a)
		},
		Dc: function(a) {
			var b = this,
				c = b.j;
			return new g(a).sb(function(a, b) {
				c.setAttribute(a, b)
			}), b
		},
		Fc: function(a) {
			var b = this,
				c = b.j;
			return new f(a).jb(function(a) {
				c.removeAttribute(a)
			}), b
		},
		_b: function(a) {
			var b = this,
				c = b.j;
			return new g(a).sb(function(a, b) {
				c[a] = b
			}), b
		},
		Ia: function(a) {
			var b = this,
				c = b.j;
			return new g(a).sb(function(a, b) {
				c.style[a] = b
			}), b
		},
		zc: function() {
			return new h(this.j.parentNode)
		},
		ca: function(a) {
			return a.j.appendChild(this.j), this
		},
		vc: function(a) {
			var b = this,
				c = b.j;
			return c.parentNode.removeChild(c), b.ca(a), b
		},
		Ob: function(a) {
			var b = this;
			return a.j.parentNode.insertBefore(b.j, a.j), b
		},
		bc: function(a) {
			var b = this;
			return a.ca(b), b
		},
		$b: function() {
			var a = this,
				b = a.j,
				c = b.parentNode;
			return c && c.removeChild(b), a
		},
		kd: function(a) {
			var b = this,
				c = b.j;
			return -1 === new f(c.className ? c.className.split(" ") : []).hc(O + a) ? b.xa(a) : b.wa(a), b
		},
		xa: function(a) {
			var b = this,
				c = b.j,
				d = c.className ? c.className.split(" ") : [],
				e = new f(d);
			return a = O + a, -1 == e.hc(a) && (e.dc(a), c.className = e.ac(" ")), b
		},
		wa: function(a) {
			var b = this,
				c = b.j,
				d = new f(c.className.split(" "));
			a = O + a;
			var e = d.hc(a);
			return e > -1 && (d.ec(e), c.className = d.ac(" ")), b
		},
		qa: function(a, b) {
			var c = this;
			return c.wa(b).xa(a), c
		},
		ve: function(a, b) {
			var c = this,
				d = c.j,
				e = c.kc[a],
				g = function(a) {
					b(new i(c, a))
				};
			return new f(e).jb(function(a) {
				if(t.addEventListener) d.addEventListener(a, g);
				else if(t.attachEvent) d.attachEvent("on" + a, g);
				else {
					var e = d["on" + a];
					d["on" + a] = function(a) {
						b(new i(c, a)), "function" == typeof e && e.call(this, a)
					}
				}
			}), {
				he: function() {
					new f(e).jb(function(a) {
						t.removeEventListener ? d.removeEventListener(a, g) : t.detachEvent ? d.detachEvent("on" + a, g) : d["on" + a] = null
					})
				}
			}
		},
		ka: function(a, b) {
			var c = this;
			return c.ve(a, b), c
		},
		Sb: function() {
			return this.j.getBoundingClientRect()
		},
		ue: function(b) {
			var c = this.Sb(),
				d = t.body,
				e = t.documentElement,
				f = a.pageYOffset || e.scrollTop || d.scrollTop,
				g = a.pageXOffset || e.scrollLeft || d.scrollLeft,
				h = e.clientTop || d.clientTop || 0,
				i = e.clientLeft || d.clientLeft || 0,
				j = c.top + f - h,
				k = c.left + g - i;
			return {
				top: Math.round(j),
				left: Math.round(k),
				width: c.right - c.left,
				height: c.bottom - c.top
			}
		},
		sa: function(a) {
			var b = this,
				c = b.j;
			return b.s(), c.appendChild(t.createTextNode(a)), b
		},
		Gc: function(a) {
			var b = this;
			return b.j.innerHTML = a, b
		},
		Nb: function(a) {
			var b, c = this,
				d = c.j,
				e = function() {
					var a = t.createElement("canvas");
					return !(a.getContext && a.getContext("2d"))
				}();
			if(a) {
				if(e) {
					var f = t.createElement("div");
					f.innerHTML = d.outerHTML, b = new h(f.childNodes[0])
				} else b = new h(c.j.cloneNode(!0));
				d.id = "origin_" + d.id, b.Fc(["href"])
			} else b = new h(c.j.cloneNode(!1)), b.xa("sandbox");
			return b
		},
		Ta: function() {
			var a = this;
			return a.j.click(), a
		},
		pc: function() {
			var a = this,
				b = a.Sb();
			return b.right - b.left
		},
		tc: function(b) {
			var c = this.j;
			return a.getComputedStyle ? a.getComputedStyle(c)[b] : c.currentStyle[b]
		},
		Ac: function() {
			var b = this;
			try {
				for(var c = b.j, d = c; d.parentNode != t.body && c.offsetTop - d.parentNode.offsetTop < 160;) d = d.parentNode, "hidden" == function(b, c) {
					var d;
					return b.currentStyle ? d = b.currentStyle[c] : a.getComputedStyle && (d = a.getComputedStyle(b, null).getPropertyValue(c)), d
				}(d, "overflow") && (d.style.overflow = "visible")
			} catch(e) {}
			return b
		},
		xc: function() {
			for(var a = this, b = a.j, c = b.offsetLeft, d = b.offsetParent; null !== d;) c += d.offsetLeft, d = d.offsetParent;
			return c
		},
		wc: function() {
			for(var a = this, b = a.j, c = b.offsetTop, d = b.offsetParent; null !== d;) c += d.offsetTop, d = d.offsetParent;
			return c
		}
	}, h.$ = function(b) {
		var c;
		"string" == typeof b ? "#" === b[0] ? c = t.getElementById(b.slice(1)) : "querySelector" in t ? c = t.querySelector(b) : _(a.jQuery) && (c = a.jQuery(b)[0]) : c = b.length ? b[0] : b;
		var d;
		try {
			d = Node.ELEMENT_NODE
		} catch(e) {
			d = 1
		}
		try {
			if(c.nodeType === d) return new h(c)
		} catch(e) {
			return !1
		}
	}, i.prototype = {
		Vb: function() {
			var a = this.lc;
			return Y(a.clientX) ? a.clientX : (a.changedTouches && a.changedTouches[0]).clientX
		},
		Xb: function() {
			var a = this.lc;
			return Y(a.clientY) ? a.clientY : (a.changedTouches && a.changedTouches[0]).clientY
		},
		Qb: function() {
			var a = this,
				b = a.lc;
			return b.cancelable && _(b.preventDefault) ? b.preventDefault() : b.returnValue = !1, a
		},
		Jb: function() {
			var a = this,
				b = a.lc;
			return _(b.stopPropagation) && b.stopPropagation(), a
		}
	}, j.prototype = {
		wd: -1,
		xd: 1,
		yd: 0,
		zd: function(a) {
			var b = this;
			return a ? b.xd : b.yd
		},
		Ad: function(a) {
			return void 0 === a
		},
		Bd: ["A", "ARTICLE", "ASIDE", "AUDIO", "BASE", "BUTTON", "CANVAS", "CODE", "IFRAME", "IMG", "INPUT", "LABEL", "LINK", "NAV", "OBJECT", "OL", "PICTURE", "PRE", "SECTION", "SELECT", "SOURCE", "SPAN", "STYLE", "TABLE", "TEXTAREA", "VIDEO"],
		Cd: function() {
			return ["textLength", "HTMLLength", "documentMode"].concat(this.Bd).concat(["screenLeft", "screenTop", "screenAvailLeft", "screenAvailTop", "innerWidth", "innerHeight", "outerWidth", "outerHeight", "browserLanguage", "browserLanguages", "systemLanguage", "devicePixelRatio", "colorDepth", "userAgent", "cookieEnabled", "netEnabled", "screenWidth", "screenHeight", "screenAvailWidth", "screenAvailHeight", "localStorageEnabled", "sessionStorageEnabled", "indexedDBEnabled", "CPUClass", "platform", "doNotTrack", "timezone", "canvas2DFP", "canvas3DFP", "plugins", "maxTouchPoints", "flashEnabled", "javaEnabled", "hardwareConcurrency", "jsFonts", "timestamp", "performanceTiming"])
		},
		vd: function() {
			var b = a,
				c = b.screen,
				d = b.document,
				e = b.navigator,
				g = d.documentElement,
				h = d.body,
				i = h.nodeType,
				j = this,
				k = {},
				l = function(a) {
					if(a) {
						var b = a.nodeType,
							c = a.nodeName.toUpperCase();
						b === i && new f(j.Bd).hc(c) > -1 && (k[c] ? k[c] += 1 : k[c] = 1);
						for(var d = a.childNodes, e = 0, g = d.length; e < g; e += 1) l(d[e])
					}
				};
			l(d);
			var m = g.textContent || g.innerText;
			k.textLength = m.length;
			var n = g.innerHTML;
			return k.HTMLLength = n.length, k.documentMode = d.documentMode || d.compatMode, k.browserLanguage = e.language || e.userLanguage, k.browserLanguages = e.languages && e.languages.join(","), k.systemLanguage = b.systemLanguage, k.devicePixelRatio = b.devicePixelRatio, k.colorDepth = c.colorDepth, k.userAgent = e.userAgent, k.cookieEnabled = j.zd(e.cookieEnabled), k.netEnabled = j.zd(e.onLine), k.innerWidth = b.innerWidth, k.innerHeight = b.innerHeight, k.outerWidth = b.outerWidth, k.outerHeight = b.outerHeight, k.screenWidth = c.width, k.screenHeight = c.height, k.screenAvailWidth = c.availWidth, k.screenAvailHeight = c.availHeight, k.screenLeft = c.left || b.screenLeft, k.screenTop = c.top || b.screenTop, k.screenAvailLeft = c.availLeft, k.screenAvailTop = c.availTop, k.localStorageEnabled = j.zd(b.localStorage), k.sessionStorageEnabled = j.zd(b.sessionStorage), k.indexedDBEnabled = j.zd(b.indexedDB), k.CPUClass = e.cpuClass, k.platform = e.platform, k.doNotTrack = j.zd(e.doNotTrack), k.timezone = (new Date).getTimezoneOffset() / 60, k.canvas2DFP = function() {
				var a = d.createElement("canvas"),
					b = a.getContext && a.getContext("2d");
				if(b) {
					var c = [];
					return a.width = 2e3, a.height = 200, a.style.display = "inline", b.rect(0, 0, 11, 11), b.rect(3, 3, 6, 6), c.push("canvas winding:" + (!1 === b.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), b.textBaseline = "alphabetic", b.fillStyle = "#f60", b.fillRect(125, 1, 62, 20), b.fillStyle = "#069", b.font = "11pt Arial", b.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), b.fillStyle = "rgba(102, 204, 0, 0.7)", b.font = "18pt Arial", b.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), b.globalCompositeOperation = "multiply", b.fillStyle = "rgb(255,0,255)", b.beginPath(), b.arc(52, 50, 50, 0, 2 * Math.PI, !0), b.closePath(), b.fill(), b.fillStyle = "rgb(0,255,255)", b.beginPath(), b.arc(100, 50, 50, 0, 2 * Math.PI, !0), b.closePath(), b.fill(), b.fillStyle = "rgb(255,255,0)", b.beginPath(), b.arc(75, 100, 50, 0, 2 * Math.PI, !0), b.closePath(), b.fill(), b.fillStyle = "rgb(255,0,255)", b.arc(75, 75, 75, 0, 2 * Math.PI, !0), b.arc(75, 75, 25, 0, 2 * Math.PI, !0), b.fill("evenodd"), c.push("canvas fp:" + a.toDataURL()), V(c.join("~"))
				}
				return j.yd
			}(), k.canvas3DFP = function() {
				var a = d.createElement("canvas"),
					b = a.getContext && (a.getContext("webgl") || a.getContext("experimental-webgl"));
				if(b) {
					var c = function(a) {
							return b.clearColor(0, 0, 0, 1), b.enable(b.DEPTH_TEST), b.depthFunc(b.LEQUAL), b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT), "[" + a[0] + ", " + a[1] + "]"
						},
						e = [],
						f = b.createBuffer();
					b.bindBuffer(b.ARRAY_BUFFER, f);
					var g = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
					b.bufferData(b.ARRAY_BUFFER, g, b.STATIC_DRAW), f.itemSize = 3, f.numItems = 3;
					var h = b.createProgram(),
						i = b.createShader(b.VERTEX_SHADER);
					b.shaderSource(i, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), b.compileShader(i);
					var k = b.createShader(b.FRAGMENT_SHADER);
					return b.shaderSource(k, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), (b.compileShader(k), b.attachShader(h, i), b.attachShader(h, k), b.linkProgram(h), b.useProgram(h), h.vertexPosAttrib = b.getAttribLocation(h, "attrVertex"), h.offsetUniform = b.getUniformLocation(h, "uniformOffset"), b.enableVertexAttribArray(h.vertexPosArray), b.vertexAttribPointer(h.vertexPosAttrib, f.itemSize, b.FLOAT, !1, 0, 0), b.uniform2f(h.offsetUniform, 1, 1), b.drawArrays(b.TRIANGLE_STRIP, 0, f.numItems), null != b.canvas && e.push(b.canvas.toDataURL()), e.push("extensions:" + b.getSupportedExtensions().join(";")), e.push("webgl aliased line width range:" + c(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE))), e.push("webgl aliased point size range:" + c(b.getParameter(b.ALIASED_POINT_SIZE_RANGE))), e.push("webgl alpha bits:" + b.getParameter(b.ALPHA_BITS)), e.push("webgl antialiasing:" + (b.getContextAttributes().antialias ? "yes" : "no")), e.push("webgl blue bits:" + b.getParameter(b.BLUE_BITS)), e.push("webgl depth bits:" + b.getParameter(b.DEPTH_BITS)), e.push("webgl green bits:" + b.getParameter(b.GREEN_BITS)), e.push("webgl max anisotropy:" + function(a) {
						var b, c = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic");
						return c ? (b = a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === b && (b = 2), b) : null
					}(b)), e.push("webgl max combined texture image units:" + b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), e.push("webgl max cube map texture size:" + b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE)), e.push("webgl max fragment uniform vectors:" + b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS)), e.push("webgl max render buffer size:" + b.getParameter(b.MAX_RENDERBUFFER_SIZE)), e.push("webgl max texture image units:" + b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS)), e.push("webgl max texture size:" + b.getParameter(b.MAX_TEXTURE_SIZE)), e.push("webgl max varying vectors:" + b.getParameter(b.MAX_VARYING_VECTORS)), e.push("webgl max vertex attribs:" + b.getParameter(b.MAX_VERTEX_ATTRIBS)), e.push("webgl max vertex texture image units:" + b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), e.push("webgl max vertex uniform vectors:" + b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS)), e.push("webgl max viewport dims:" + c(b.getParameter(b.MAX_VIEWPORT_DIMS))), e.push("webgl red bits:" + b.getParameter(b.RED_BITS)), e.push("webgl renderer:" + b.getParameter(b.RENDERER)), e.push("webgl shading language version:" + b.getParameter(b.SHADING_LANGUAGE_VERSION)), e.push("webgl stencil bits:" + b.getParameter(b.STENCIL_BITS)), e.push("webgl vendor:" + b.getParameter(b.VENDOR)), e.push("webgl version:" + b.getParameter(b.VERSION)), b.getShaderPrecisionFormat) ? (e.push("webgl vertex shader high float precision:" + b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.HIGH_FLOAT).precision), e.push("webgl vertex shader high float precision rangeMin:" + b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.HIGH_FLOAT).rangeMin), e.push("webgl vertex shader high float precision rangeMax:" + b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.HIGH_FLOAT).rangeMax), e.push("webgl vertex shader medium float precision:" + b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.MEDIUM_FLOAT).precision), e.push("webgl vertex shader medium float precision rangeMin:" + b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.MEDIUM_FLOAT).rangeMin), e.push("webgl vertex shader medium float precision rangeMax:" + b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.MEDIUM_FLOAT).rangeMax), e.push("webgl vertex shader low float precision:" + b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.LOW_FLOAT).precision), e.push("webgl vertex shader low float precision rangeMin:" + b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.LOW_FLOAT).rangeMin), e.push("webgl vertex shader low float precision rangeMax:" + b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.LOW_FLOAT).rangeMax), e.push("webgl fragment shader high float precision:" + b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.HIGH_FLOAT).precision), e.push("webgl fragment shader high float precision rangeMin:" + b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.HIGH_FLOAT).rangeMin), e.push("webgl fragment shader high float precision rangeMax:" + b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.HIGH_FLOAT).rangeMax), e.push("webgl fragment shader medium float precision:" + b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.MEDIUM_FLOAT).precision), e.push("webgl fragment shader medium float precision rangeMin:" + b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.MEDIUM_FLOAT).rangeMin), e.push("webgl fragment shader medium float precision rangeMax:" + b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.MEDIUM_FLOAT).rangeMax), e.push("webgl fragment shader low float precision:" + b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.LOW_FLOAT).precision), e.push("webgl fragment shader low float precision rangeMin:" + b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.LOW_FLOAT).rangeMin), e.push("webgl fragment shader low float precision rangeMax:" + b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.LOW_FLOAT).rangeMax), e.push("webgl vertex shader high int precision:" + b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.HIGH_INT).precision), e.push("webgl vertex shader high int precision rangeMin:" + b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.HIGH_INT).rangeMin), e.push("webgl vertex shader high int precision rangeMax:" + b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.HIGH_INT).rangeMax), e.push("webgl vertex shader medium int precision:" + b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.MEDIUM_INT).precision), e.push("webgl vertex shader medium int precision rangeMin:" + b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.MEDIUM_INT).rangeMin), e.push("webgl vertex shader medium int precision rangeMax:" + b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.MEDIUM_INT).rangeMax), e.push("webgl vertex shader low int precision:" + b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.LOW_INT).precision), e.push("webgl vertex shader low int precision rangeMin:" + b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.LOW_INT).rangeMin), e.push("webgl vertex shader low int precision rangeMax:" + b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.LOW_INT).rangeMax), e.push("webgl fragment shader high int precision:" + b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.HIGH_INT).precision), e.push("webgl fragment shader high int precision rangeMin:" + b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.HIGH_INT).rangeMin),
						e.push("webgl fragment shader high int precision rangeMax:" + b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.HIGH_INT).rangeMax), e.push("webgl fragment shader medium int precision:" + b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.MEDIUM_INT).precision), e.push("webgl fragment shader medium int precision rangeMin:" + b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.MEDIUM_INT).rangeMin), e.push("webgl fragment shader medium int precision rangeMax:" + b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.MEDIUM_INT).rangeMax), e.push("webgl fragment shader low int precision:" + b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.LOW_INT).precision), e.push("webgl fragment shader low int precision rangeMin:" + b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.LOW_INT).rangeMin), e.push("webgl fragment shader low int precision rangeMax:" + b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.LOW_INT).rangeMax), V(e.join("~"))) : V(e.join("~"))
				}
				return j.yd
			}(), k.plugins = function() {
				if(!e.plugins) return j.wd;
				for(var a = [], b = 0, c = e.plugins.length; b < c; b += 1) {
					var d = e.plugins[b];
					a.push(d.name.replace(/\s/g, "")), a.push(d.filename.replace(/\s/g, ""))
				}
				return a.join(",")
			}(), k.maxTouchPoints = function() {
				return j.Ad(e.maxTouchPoints) ? j.Ad(e.msMaxTouchPoints) ? 0 : e.msMaxTouchPoints : e.maxTouchPoints
			}(), k.flashEnabled = function() {
				return j.Ad(b.swfobject) ? j.wd : j.zd(b.swfobject.hasFlashPlayerVersion("9.0.0"))
			}(), k.javaEnabled = function() {
				try {
					return j.Ad(e.javaEnabled) ? j.wd : j.zd(e.javaEnabled())
				} catch(a) {
					return j.wd
				}
			}(), k.hardwareConcurrency = e.hardwareConcurrency, k.jsFonts = function() {
				var a = ["monospace", "sans-serif", "serif"],
					b = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
					c = t.getElementsByTagName("body")[0],
					d = t.createElement("div"),
					e = t.createElement("div"),
					f = {},
					g = {},
					h = function() {
						var a = t.createElement("span");
						return a.style.position = "absolute", a.style.left = "-9999px", a.style.fontSize = "72px", a.innerHTML = "mmmmmmmmmmlli", a
					},
					i = function(a, b) {
						var c = h();
						return c.style.fontFamily = "'" + a + "'," + b, c
					},
					j = function() {
						for(var b = [], c = 0, e = a.length; c < e; c++) {
							var f = h();
							f.style.fontFamily = a[c], d.appendChild(f), b.push(f)
						}
						return b
					}();
				c.appendChild(d);
				for(var k = 0, l = a.length; k < l; k++) f[a[k]] = j[k].offsetWidth, g[a[k]] = j[k].offsetHeight;
				var m = function() {
					for(var c = {}, d = 0, f = b.length; d < f; d++) {
						for(var g = [], h = 0, j = a.length; h < j; h++) {
							var k = i(b[d], a[h]);
							e.appendChild(k), g.push(k)
						}
						c[b[d]] = g
					}
					return c
				}();
				c.appendChild(e);
				for(var n = [], o = 0, p = b.length; o < p; o++)(function(b) {
					for(var c = !1, d = 0; d < a.length; d++)
						if(c = b[d].offsetWidth !== f[a[d]] || b[d].offsetHeight !== g[a[d]]) return c;
					return c
				})(m[b[o]]) && n.push(b[o].replace(/\s/g, ""));
				var q = n.join(",");
				return c.removeChild(e), c.removeChild(d), q
			}(), k
		},
		Jc: function() {
			return this.Kc().length
		},
		Od: function(a, b) {
			var c = this,
				d = c.Fb,
				e = [];
			return new f(c.Cd()).jb(function(a) {
				var b = d[a];
				e.push(c.Ad(b) ? c.wd : b)
			}), e.join("magic data")
		},
		Kc: function() {
			var b = a,
				c = this,
				d = c.Fb;
			d.performanceTiming = function() {
				if(c.Ad(b.performance)) return c.wd;
				var a, d, e = b.performance.timing,
					f = ["navigationStart", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart"],
					g = ["responseEnd", "unloadEventStart", "unloadEventEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", "msFirstPaint"],
					h = [];
				for(a = 1, d = f.length; a < d; a += 1) {
					var i = e[f[a]];
					if(0 === i) h.push(c.wd);
					else
						for(var j = a - 1; j >= 0; j -= 1) {
							var k = e[f[j]];
							if(0 !== k) {
								h.push(i - k);
								break
							}
						}
				}
				var l = e[f[f.length - 1]];
				for(a = 0, d = g.length; a < d; a += 1) {
					var m = e[g[a]];
					0 === m || c.Ad(m) ? h.push(c.wd) : h.push(m - l)
				}
				return h.join(",")
			}(), d.timestamp = (new Date).getTime();
			var e = [];
			return new f(c.Cd()).jb(function(a) {
				var b = d[a];
				e.push(c.Ad(b) ? c.wd : b)
			}), encodeURIComponent(e.join("!!"))
		}
	}, k.prototype = {
		Jc: function() {
			return this.Fb.join("|").length
		},
		Kc: function() {
			var a = this,
				b = a.Fb;
			return a.Fb = [], a.Ce = 0, a.De = [], b.join("|")
		},
		fa: function(a) {
			var b = this,
				c = b.Fb,
				d = a.target || a.srcElement;
			if(d && d.nodeType === b.Ee) {
				for(var e = null, f = b.De.length - 1; f >= 0; f--)
					if(b.De[f].el === d) {
						e = b.De[f];
						break
					}
				e ? c.push(e.el.tagName + "_" + e.index) : (b.De.push({
					el: d,
					index: b.Ce
				}), c.push(d.tagName + "_" + b.Ce), b.Ce++)
			} else c.push("")
		}
	}, l.prototype = {
		ud: 300,
		L: function() {
			var b, c, d = this;
			new h(t).ka("move", function(a) {
				var e = a.Vb(),
					f = a.Xb();
				e === b && f === c || (b = e, c = f, d.Gb("move", e, f))
			}).ka("down", function(a) {
				d.Gb("down", a.Vb(), a.Xb())
			}).ka("up", function(a) {
				d.Gb("up", a.Vb(), a.Xb())
			}), new h(a).ka("scroll", function() {
				var b = "pageXOffset" in a,
					c = "CSS1Compat" === (t.compatMode || ""),
					e = b ? a.pageXOffset : c ? t.documentElement.scrollLeft : t.body.scrollLeft,
					f = b ? a.pageYOffset : c ? t.documentElement.scrollTop : t.body.scrollTop;
				d.Gb("scroll", e, f)
			}).ka("focus", function() {
				d.Gb("focus")
			}).ka("blur", function() {
				d.Gb("blur")
			}).ka("unload", function() {
				d.Gb("unload")
			})
		},
		Gb: function(a, b, c) {
			var d = this,
				e = d.Fb;
			return new f(["move", "down", "up", "scroll"]).hc(a) > -1 ? e.push([a, d.Hc(b), d.Hc(c), ca()]) : e.push([a, ca()]), d
		},
		Ic: function(a) {
			var b = 0,
				c = 0,
				d = 0,
				e = 0,
				g = 0,
				h = [],
				i = this;
			if(a.length <= 0) return [];
			for(var j = a.length, k = j < this.ud ? 0 : j - this.ud; k < j; k += 1) {
				var l = a[k],
					m = l[0];
				"scroll" === m ? (h.push([m, [l[1] - d, l[2] - e], i.Hc(g ? l[3] - g : 0)]), d = l[1], e = l[2], g = l[3]) : new f(["down", "move", "up"]).hc(m) > -1 ? (h.push([m, [l[1] - b, l[2] - c], i.Hc(g ? l[3] - g : 0)]), b = l[1], c = l[2], g = l[3]) : new f(["blur", "focus", "unload"]).hc(m) > -1 && (h.push([m, i.Hc(g ? l[1] - g : 0)]), g = l[1])
			}
			return h
		},
		Hb: function(b) {
			function c(b) {
				for(var c = "", d = b.length / 6, e = 0; e < d; e += 1) c += j.charAt(a.parseInt(b.slice(6 * e, 6 * (e + 1)), 2));
				return c
			}

			function d(a, b) {
				for(var c = a.toString(2), d = c.length, e = "", f = d + 1; f <= b; f += 1) e += "0";
				return c = e + c
			}

			function e(a, b) {
				for(var c = [], d = 0, e = a.length; d < e; d += 1) c.push(b(a[d]));
				return c
			}

			function f(a, b) {
				var c = [];
				return e(a, function(a) {
					b(a) && c.push(a)
				}), c
			}

			function g(a) {
				a = e(a, function(a) {
					return a > 32767 ? 32767 : a < -32767 ? -32767 : a
				});
				for(var b = a.length, c = 0, d = []; c < b;) {
					for(var f = 1, g = a[c], h = Math.abs(g);;) {
						if(c + f >= b) break;
						if(a[c + f] !== g) break;
						if(h >= 127 || f >= 127) break;
						f += 1
					}
					f > 1 ? d.push((g < 0 ? 49152 : 32768) | f << 7 | h) : d.push(g), c += f
				}
				return d
			}

			function h(a, b) {
				return 0 === a ? 0 : Math.log(a) / Math.log(b)
			}

			function i(a, b) {
				a = g(a);
				var c, i = [],
					j = [];
				e(a, function(a) {
					var b = Math.ceil(h(Math.abs(a) + 1, 16));
					0 === b && (b = 1), i.push(d(b - 1, 2)), j.push(d(Math.abs(a), 4 * b))
				});
				var k = i.join(""),
					l = j.join("");
				return c = b ? e(f(a, function(a) {
					return 0 != a && a >> 15 != 1
				}), function(a) {
					return a < 0 ? "1" : "0"
				}).join("") : "", d(32768 | a.length, 16) + k + l + c
			}
			var j = "()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~",
				k = {
					move: 0,
					down: 1,
					up: 2,
					scroll: 3,
					focus: 4,
					blur: 5,
					unload: 6,
					unknown: 7
				},
				l = function(a) {
					for(var b = [], c = a.length, e = 0; e < c;) {
						for(var f = a[e], g = 0;;) {
							if(g >= 16) break;
							var h = e + g + 1;
							if(h >= c) break;
							if(a[h] !== f) break;
							g += 1
						}
						e = e + 1 + g;
						var i = k[f];
						0 != g ? (b.push(8 | i), b.push(g - 1)) : b.push(i)
					}
					for(var j = d(32768 | c, 16), l = "", m = 0, n = b.length; m < n; m += 1) l += d(b[m], 4);
					return j + l
				};
			return function(a) {
				for(var b = [], e = [], f = [], g = [], h = 0, j = a.length; h < j; h += 1) {
					var k = a[h],
						m = k.length;
					b.push(k[0]), e.push(2 === m ? k[1] : k[2]), 3 === m && (f.push(k[1][0]), g.push(k[1][1]))
				}
				var n = l(b),
					o = i(e, !1),
					p = i(f, !0),
					q = i(g, !0),
					r = n + o + p + q,
					s = r.length;
				return s % 6 != 0 && (r += d(0, 6 - s % 6)), c(r)
			}(b)
		},
		Hc: function(a) {
			return "number" != typeof a ? a : (a > 32767 ? a = 32767 : a < -32767 && (a = -32767), Math.round(a))
		},
		Jc: function() {
			var a = this;
			return a.Hb(a.Ic(a.Fb)).length
		},
		Kc: function() {
			var a = this,
				b = a.Fb;
			return a.Fb = [], a.Hb(a.Ic(b))
		},
		Od: function() {
			var a = this;
			return a.Hb(a.Fb)
		}
	}, m.prototype = {
		F: function(a, b) {
			var c = this,
				d = c.H,
				e = c.D,
				f = c.C,
				g = c.B,
				h = "bind" === g.product;
			e.Cc(b) || b !== ua && (e.Cc(ea) || (d && d.Nc(a, b), d && d.Fa()), e.Cc(ea) ? c.J = c.L().K(function() {
				e.G(fa), f.M(ea)
			}) : e.Cc(oa) ? A(function() {
				d.zb(c.Oc)
			}, h ? 0 : 500) : e.Cc(pa) ? (d.md(), h && g.pure && f.M(pa)) : e.Cc(qa) ? (d.nd(), f.M(wa)) : e.Cc([ma]) ? (d.V(c.W), f.M(sa), h && A(function() {
				e.Cc(ma) && d.me()
			}, 1e3)) : e.Cc([na, ra]) ? (h && (g.pure ? d && d.me() : d && d.ne()), f.M(ta, c.we)) : e.Cc(la) && (h && !g.pure && d.oe(), d.bd()))
		},
		L: function() {
			var a = this,
				b = a.B;
			return N(b, s.Pd("fFtZ0VaY4Gg"), a.A).K(function(c) {
				return c.status === ta ? U(T({
					msg: c.error,
					code: c.error_code
				}, a)) : (b.Lc(c.data), b.apiserver && (b.api_server = b.apiserver), b.staticservers && (b.static_servers = b.staticservers), b.debugConfig && b.Lc(b.debugConfig), a.H = new q(a), a.H.ba)
			}, function() {
				return U(S("url_get", a))
			})
		},
		he: function() {
			var a = this;
			a.H && a.H.he(), a.C.he()
		},
		rd: function(a) {
			var b = this;
			return b.we = a, b.D.G(na), b
		},
		ca: function(a) {
			var b = this;
			return "bind" === b.B.product ? b : (b.J.K(function() {
				b.H.ca(a)
			}), b)
		},
		Fd: function(a) {
			var b = this;
			b.J.K(function() {
				b.H.Fd(a)
			})
		},
		Gd: function(a) {
			var b = this;
			b.J.K(function() {
				b.H.Gd(a)
			})
		},
		Rc: function(a) {
			var b = this,
				c = b.B,
				d = b.Mc.Kc(),
				e = b.Mc.Od(),
				f = b.Dd.Kc(),
				g = b.Dd.Od(),
				h = b.Ta.Kc(),
				i = {
					type: "fullpage",
					gt: c.gt,
					challenge: c.challenge,
					t: d,
					light: s.Hb(h),
					s: V(s.Hb(e)),
					h: V(s.Hb(g)),
					hh: V(g),
					i: s.Hb(f),
					hi: V(f),
					passtime: ca() - Ea
				};
			N(b.B, s.Pd("fEkexGxOwUyY"), i).K(function(c) {
				if(c.status === ta) return U(T({
					msg: c.error,
					code: c.error_code
				}, b));
				var d = ca() - b.qd;
				A(function() {
					b.Sc(c.data)
				}, a ? 0 : d > 1e3 ? 0 : 1e3 - d)
			}, function() {
				return U(S("url_ajax", b))
			})
		},
		Sc: function(a) {
			var b, c = this,
				d = c.B;
			if("success" === a.result) {
				var e = a.validate.split("|")[0];
				c.W = {
					geetest_challenge: d.challenge,
					geetest_validate: e,
					geetest_seccode: e + "|jordan"
				}, b = ma
			} else {
				if("forbidden" === a.result) return U(S("server_forbidden", c));
				b = oa, c.Oc = a.result
			}
			c.D.G(b)
		},
		ga: function() {
			return this.W
		},
		ka: function(a, b) {
			var c = this;
			return c.C.ka(a, b), c
		},
		Hd: function() {
			var a = this;
			return a.H && a.H.Hd(), a
		},
		ia: function() {
			this.D.G(qa)
		},
		ha: function() {
			this.D.G(pa)
		},
		ea: function() {
			var a = this,
				b = a.H,
				c = a.B,
				d = a.D;
			"bind" === c.product && (d.Cc(fa) ? d.G(la) : d.Cc(qa) ? d.G(pa) : d.Cc([na, ma]) && b && b.Hd().K(function() {
				d.G(la)
			}))
		}
	}, n.prototype = {
		challenge: "",
		gt: "",
		type: "fullpage",
		api_server: "api.geetest.com",
		static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
		product: "popup",
		lang: "zh-cn",
		width: "300px",
		logo: !0,
		protocol: "http://",
		https: !1,
		version: "7.5.8",
		theme: "wind",
		theme_version: "1.4.3",
		homepage: "http://www.geetest.com/first_page",
		Lc: function(a) {
			var b = this;
			return da(b, a), b
		}
	}, o.prototype = {
		appendTo: function(a) {
			var b = this;
			return b.ye && R.$a(b.Za).ca(a), b
		},
		bindForm: function(a) {
			var b = this;
			return b.ye && R.$a(b.Za).Fd(a), b
		},
		bindButton: function(a) {
			var b = this;
			return b.ye && R.$a(b.Za).Gd(a), b
		},
		destroy: function() {
			var a, b = this;
			b.ye && (a = R.$a(b.Za), a.he(), R.G(b.Za, null), b.ye = !1)
		},
		reset: function() {
			var a = this;
			return a.ye && R.$a(a.Za).Hd(), a
		},
		getValidate: function() {
			var a = this;
			return !!a.ye && R.$a(a.Za).ga()
		},
		onReady: function(a) {
			var b = this;
			return b.ye && R.$a(b.Za).ka(ea, a), b
		},
		onSuccess: function(a) {
			var b = this;
			return b.ye && R.$a(b.Za).ka(sa, a), b
		},
		onError: function(a) {
			var b = this;
			return b.ye && R.$a(b.Za).ka(ta, a), b
		},
		onClose: function(a) {
			var b = this;
			return b.ye && R.$a(b.Za).ka(wa, a), b
		},
		hide: function() {
			var a = this;
			return a.ye && R.$a(a.Za).ia(), a
		},
		show: function() {
			var a = this;
			return a.ye && R.$a(a.Za).ha(), a
		},
		verify: function() {
			var a = this;
			return a.ye && R.$a(a.Za).ea(), a
		},
		onNextReady: function(a) {
			var b = this;
			return b.ye && R.$a(b.Za).ka(pa, a), b
		}
	}, o.type = "fullpage", p.$a = function(a, b, c) {
		return new W(function(a) {
			a({
				status: "success",
				data: {}
			})
		})
	}, p.hb = function(a, b, c) {
		return new W(function(b) {
			b({
				status: "success",
				data: {
					result: "success",
					validate: V(a.challenge)
				}
			})
		})
	}, p.Hd = function(a, b, c) {
		return new W(function(b) {
			b({
				status: "success",
				data: {
					challenge: a.challenge
				}
			})
		})
	}, p.N = function(a, b, c) {
		return "/get.php" === b ? p.$a(a, b, c) : "/ajax.php" === b ? p.hb(a, b, c) : "/reset.php" === b ? p.Hd(a, b, c) : void 0
	}, q.prototype = {
		Yc: 260,
		Ib: 200,
		Na: 0,
		Id: 54e4,
		Fa: function() {
			var a = this,
				b = a.na,
				c = a.D,
				d = a.$;
			if(d) {
				var e = !1;
				if(c.Cc([fa, qa]) ? e = "ready" : c.Cc([ka, la]) ? e = "fullpage" : c.Cc([ma]) ? e = "success" : c.Cc([na]) ? e = "error" : c.Cc([oa]) ? e = "next" : c.Cc([pa]) ? e = "next_ready" : c.Cc(ua) && (e = "not_compatible"), e) {
					if(c.Cc(ma)) d(".success_radar_tip_content").sa(b[e]);
					else if(c.Cc([na])) {
						var f = a.ma.we;
						if(f && f.code) {
							var g = a.B;
							"bind" === g.product ? d(".panel_error_title").sa(f.code) : d(".radar_tip_content").sa(f.code)
						} else d(".radar_tip_content").sa(b[e])
					} else d(".radar_tip_content").sa(b[e]);
					a.Zc && c.Cc(na) && (d(".radar_tip_content").sa("error"), a.Zc = !1)
				}
			}
		},
		L: function() {
			var a = this;
			a.fb = 1, a.$c = 0, a.la(), a.ba = a._c().K(null, function() {
				return U(S("url_skin", a.ma))
			});
			var b = a.$,
				c = a.B,
				d = a.na,
				e = a.ma,
				f = a.D;
			return a.Kd = A(function() {
				a.Ld()
			}, a.Id), "bind" === c.product || C && c.logo || (c.logo ? (b(".logo")._b({
				target: "_blank",
				href: c.homepage
			}), b(".success_logo")._b({
				target: "_blank",
				href: c.homepage
			})) : (b(".logo").ia(), b(".success_logo").ia())), C && "bind" !== c.product ? (b(".goto_content_tip").sa(d.goto_homepage), b(".goto_confirm").sa(d.goto_confirm)._b({
				href: c.homepage
			}), b(".goto_cancel").sa(d.goto_cancel), b(".goto").xa(c.theme).vc(new h(v))) : b(".goto").ia(), "bind" === c.product && (b(".panel").ia().xa(c.theme).vc(new h(v)), b(".panel_loading_title").sa(d.loading_title), b(".panel_loading_content").sa(d.loading_content), b(".panel_success_title").sa(d.success_title), b(".panel_error_title").sa(d.error_title), b(".panel_error_content").sa(d.error_content), b(".panel_footer_copyright").sa(d.copyright), b(".panel_error_content").ka("click", function() {
				e.ea()
			}), b(".panel_ghost").ka("click", function() {
				f.Cc([ma, na]) ? a.me() : f.Cc(pa) && f.G(qa)
			})), b(".reset_tip_content").sa(d.reset), a
		},
		he: function() {
			var a = this,
				b = a.B,
				c = a.$;
			switch(a.od && a.od.destroy(), b.product) {
				case "bind":
					c(".panel").$b();
					break;
				case "popup":
				case "float":
					c(".holder").$b(), c(".fullpage_click").$b();
					break;
				case "custom":
					c(".holder").$b()
			}
		},
		ka: function() {
			var a = this,
				b = a.$,
				c = a.D;
			return a.Jd = !1, C ? (new f([b(".logo"), b(".success_logo")]).jb(function(c) {
				c.ka("click", function() {
					a.Jd = !0, b(".goto").ha(), A(function() {
						b(".goto").Ka(1)
					}, 300)
				})
			}), new f([b(".goto_cancel"), b(".goto_ghost")]).jb(function(c) {
				c.ka("click", function() {
					a.Jd = !1, b(".goto").Ka(0), A(function() {
						b(".goto").ia()
					}, 300)
				})
			})) : (b(".logo").ka("click", function(b) {
				a.Jd = !0, A(function() {
					a.Jd = !1
				}, 10)
			}), b(".success_logo").ka("click", function(b) {
				a.Jd = !0, A(function() {
					a.Jd = !1
				}, 10)
			})), a.Wc && new h(t).ka("move", function(a) {
				return function(b) {
					A(function() {
						a(b)
					}, 10)
				}
			}(function(b) {
				if(c.Cc(fa)) c.G(ga), A(function() {
					c.Cc(ga) && c.G(ha)
				}, 500);
				else if(c.Cc(ia) && C) {
					if(a.Jd) return;
					c.G(ja), A(function() {
						c.Cc(ja) && (c.G(ka), a.Mc())
					}, 10)
				}
				c.Cc([ga, ha]) && a.ad(b)
			})), b(".holder").ka("click", function() {
				a.Jd || (c.Cc([ia, ga, ha]) ? (c.G(ja), A(function() {
					c.Cc(ja) && (c.G(ka), a.Mc())
				}, 10)) : c.Cc([fa]) && (c.G(ka), a.Mc()))
			}).ka("enter", function() {
				c.Cc([fa, ga, ha]) && c.G(ia)
			}).ka("leave", function() {
				c.Cc([fa, ga, ha, ia]) && c.G(ha)
			}), b(".reset_tip_content").ka("click", function() {
				a.Hd().K(function() {
					c.G(la)
				})
			}), a
		},
		ad: function(a) {
			var b = this,
				c = b.$,
				d = c(".dot"),
				e = c(".sector"),
				f = a.Vb(),
				g = a.Xb(),
				h = d.Sb(),
				i = h.left + 8,
				j = h.top + 8,
				k = f - i,
				l = j - g,
				m = 180 * Math.atan(k / l) / Math.PI;
			l < 0 && (m += 180), e.Ia({
				transform: "rotate(" + m + "deg)"
			})
		},
		Mc: function() {
			var a = this,
				b = a.D;
			A(function() {
				b.Cc(ka) && b.G(la)
			}, a.Xc(500))
		},
		bd: function(a) {
			var b = this,
				c = (b.D, b.ma);
			c.qd = ca(), c.Rc(a)
		},
		pd: function() {
			var b = this,
				c = b.B,
				d = b.Oc;
			if("slide" === d && (d = "slide3"), a.Geetest && a.Geetest[d]) b.td();
			else {
				var e = c[d] || c.slide;
				if(!e) return U(S("js_not_exist", b.ma));
				L(c, "js", c.protocol, c.static_servers, e).K(function() {
					b.td()
				}, function() {
					return U(S("js_unload", b.ma))
				})
			}
		},
		td: function() {
			var b = this,
				c = b.B,
				d = b.$,
				e = b.D,
				f = b.ma,
				g = b.Oc;
			"slide" === g && (g = "slide3");
			var h = {
				is_next: !0,
				type: g,
				gt: c.gt,
				challenge: c.challenge,
				lang: c.lang,
				https: c.https,
				offline: c.offline,
				product: c.product,
				skin_path: c.skin_path,
				api_server: c.api_server,
				static_servers: c.static_servers,
				timeout: c.timeout,
				post: c.post,
				debugConfig: c.nextDebugConfig
			};
			"custom" === c.product ? (h.width = c.width, h.area = c.area, h.width = c.next_width || "90%", c.bg_color && (h.bg_color = c.bg_color)) : h.width = "100%", "bind" === c.product && (h.product = "embed"), "slide3" === g && "float" === c.product && (h.product = "embed");
			var i = a.Geetest(h);
			d(".fullpage_click").xa(g), "bind" === c.product ? (d(".panel_next").Gc(""), i.appendTo(d(".panel_next").j)) : (d(".fullpage_click_box").Gc(""), i.appendTo(d(".fullpage_click_box").j)), i.onReady(function() {
				e.G(pa)
			}).onSuccess(function() {
				f.W = i.getValidate(), f.X = b.Ga / 200, "bind" === c.product ? e.G(ma) : A(function() {
					e.G(qa), A(function() {
						e.G(ma)
					}, 100)
				}, 1500)
			}).onFail(function() {
				d(".fullpage_click_wrap").xa("shake"), A(function() {
					d(".fullpage_click_wrap").wa("shake")
				}, 400), "bind" === c.product && d(".panel_box") && (d(".panel_box").xa("shake"), A(function() {
					d(".panel_box").wa("shake")
				}, 400))
			}).onError(function(a) {
				"bind" !== c.product && b.nd(), f.rd(a)
			}).onClose(function() {
				e.Cc([na, ma, va]) || e.G(qa)
			}), b.od = i
		},
		md: function() {
			var a = this,
				b = a.$,
				c = a.B,
				d = (a.D, a.Oc);
			if(a.od) {
				var c = a.B;
				"float" === c.product ? (a.Ed(), b(".fullpage_click").ha().Ka(1)) : "bind" === c.product ? "click" === d ? a.pe() : a.qe() : "popup" !== c.product && "custom" !== c.product || a.od.show()
			}
		},
		nd: function() {
			var a = this,
				b = (a.D, a.$);
			if(a.od) {
				var c = a.B;
				"float" === c.product ? (b(".fullpage_click").Ka(1), A(function() {
					b(".fullpage_click").ia()
				}, 10)) : "popup" === c.product || "custom" === c.product ? a.od.hide() : "bind" === c.product && a.me()
			}
		},
		zb: function(b) {
			var c = this,
				d = c.$,
				e = c.B,
				f = c.D;
			if(c.Oc = b, f.Cc(oa)) {
				"popup" === e.product ? d(".fullpage_click").xa("popup").xa(e.theme).vc(new h(v)) : "float" === e.product && (d(".fullpage_click").xa("float").xa(e.theme).vc(new h(v)), c.Ed(), new h(a).ka("resize", function() {
					c.Ed()
				}).ka("scroll", function() {
					c.Ed()
				})), c.pd(), d(".fullpage_ghost").ka("click", function() {
					c.od && f.G(qa)
				});
				var g = function() {
					c.Jd || c.od && f.Cc([qa]) && f.G(pa)
				};
				c.Md ? c.Md.ka("click", g) : d(".holder").ka("click", g)
			}
		},
		Ed: function() {
			var a, b, c = this,
				d = function(a) {
					var b = 0;
					return a && (b = parseInt(a)) !== b && (b = 0), b
				},
				e = c.$,
				f = c.Oc,
				g = new h(x),
				i = g.Sb(),
				j = d(g.tc("margin-left")),
				k = d(g.tc("margin-right")),
				l = d(g.tc("margin-top")),
				m = e(".wait").Sb(),
				n = m.right - (i.left - j) + 9,
				o = m.top - (i.top - l) - 3,
				p = i.right + k - m.right - 10;
			"slide" === f ? (p = 278, a = 235) : "click" === f && (p > 348 ? p = 348 : p < 260 && (p = 260), a = 446 * p / 348 - 50), b = o - 10 - 5 < a / 2 ? o - 10 - 5 : a / 2;
			var q = e(".fullpage_click"),
				r = e(".fullpage_pointer"),
				s = e(".fullpage_click_box");
			r.ha(), q.Ia({
				left: n + "px",
				top: o + "px"
			}), s.Ia({
				width: p + "px",
				top: -b + "px"
			})
		},
		Q: function() {
			var a = this;
			a.Ma(a.Na)
		},
		la: function() {
			var a = this,
				b = a.B;
			return a.oa.Ia({
				width: b.width || a.Yc + "px"
			}), a
		},
		_c: function() {
			var a = this,
				b = a.B,
				c = "/static/" + b.theme + "/style" + ("https://" === b.protocol ? "_https" : "") + "." + b.theme_version + ".css",
				d = b.debugConfig;
			return d && d.skin_path && (c = c.replace("/static", d.skin_path)), L(b, "css", b.protocol, b.static_servers, c)
		},
		Nc: function(a, b) {
			var c = this,
				d = c.$;
			return a === ma ? (d(".holder").qa(a, b || null), c.Wc ? (d(".ghost_success").xa("success_animate"), d(".success_btn").Ia({
				width: d(".holder").pc() + "px"
			}), A(function() {
				d(".success_btn").Ia({
					width: "100%"
				})
			}, 2e3)) : d(".ghost_success").ha().xa("success_animate")) : d(".holder").qa(a, b || null), c
		},
		ca: function(a) {
			var b = this,
				c = b.B,
				d = c.product;
			if(d === xa || d === ya || d === za) return b.Lb || b.Md ? b : (b.Lb = h.$(a), b.Lb ? (b.Mb = ca(), b.ka(), b.oa.ca(b.Lb), b) : U(S("api_appendTo", b.ma)))
		},
		Fd: function(a) {
			var b = this,
				c = b.$;
			return b.Nd = h.$(a), b.Nd ? (c(".form").vc(b.Nd), b) : U(S("api_bindForm", b.ma))
		},
		Gd: function(a) {
			var b = this;
			if(b.Md || b.Lb) return b;
			var c = b.D;
			if(b.Md = h.$(a), !b.Md) return U(S("api_bindButton", b.ma));
			b.Md.ka("click", function() {
				c.Cc([fa]) && (c.G(la), b.bd(!0))
			})
		},
		V: function(a) {
			var b = this,
				c = b.B;
			"bind" !== c.product || c.pure || b.te(), b.Pa(a)
		},
		Pa: function(a) {
			var b = this,
				c = b.$;
			c(".challenge").Dc({
				value: a.geetest_challenge
			}), c(".validate").Dc({
				value: a.geetest_validate
			}), c(".seccode").Dc({
				value: a.geetest_seccode
			})
		},
		U: function() {
			var a = this,
				b = a.$;
			return b(".challenge").Fc(["value"]), b(".validate").Fc(["value"]), b(".seccode").Fc(["value"]), a
		},
		Ld: function() {
			var a = this,
				b = a.B;
			return B(a.Kd), N(b, s.Pd("fGpZzVnYeGgcwQ"), {
				gt: b.gt,
				challenge: b.challenge
			}).K(function(c) {
				if(c.status === ta) return U(T({
					msg: c.error,
					code: c.error_code
				}, a.ma));
				b.Lc(c.data), a.Kd = A(function() {
					a.Ld()
				}, a.Id)
			}, function() {
				return U(S("url_reset", a.ma))
			})
		},
		Hd: function() {
			var a = this,
				b = a.D,
				c = a.$,
				d = b.$a();
			return b.Cc([ma, na]) ? (b.G(va), a.Ld().K(function() {
				d === ma ? (a.U(), c(".ghost_success").ia(), a.Wc && A(function() {
					c(".ghost_success").wa("success_animate").ha()
				}, 10)) : d = na, b.G(fa)
			})) : a
		},
		se: function() {
			var a = this,
				b = a.$;
			b(".panel_loading").ia(), b(".panel_success").ia(), b(".panel_error").ia(), b(".panel_footer").ia(), b(".panel_next").ia(), b(".panel").ha(), A(function() {
				b(".panel").Ka(1)
			}, 10), D && b(".panel_box").Ia({
				marginLeft: "0",
				marginTop: "0"
			})
		},
		me: function() {
			var a = this,
				b = a.$;
			b(".panel").Ka(0), A(function() {
				b(".panel").ia()
			}, 500)
		},
		pe: function() {
			var a = this,
				b = a.$;
			D ? b(".panel_box").Ia({
				width: "348px",
				height: "445px",
				marginLeft: "-174px",
				marginTop: "-223px"
			}).ha() : b(".panel_box").Ia({
				width: "320px",
				height: "410px",
				marginLeft: "-160px",
				marginTop: "-205px"
			}).ha(), a.se(), b(".panel_next").ha()
		},
		re: function() {
			var a = this,
				b = a.$;
			b(".panel_box").Ia({
				width: "220px",
				height: "140px",
				marginLeft: "-110px",
				marginTop: "-70px"
			}), a.se(), b(".panel_next").ia()
		},
		qe: function() {
			var a = this,
				b = a.$;
			b(".panel_box").Ia({
				width: "278px",
				height: "285px",
				marginLeft: "-139px",
				marginTop: "-143px"
			}), a.se(), b(".panel_next").ha()
		},
		ne: function() {
			var a = this,
				b = a.$;
			a.re(), b(".panel_error").ha(), b(".panel_footer").ha()
		},
		oe: function() {
			var a = this,
				b = a.$;
			a.re(), b(".panel_loading").ha(), b(".panel_footer").ha()
		},
		te: function() {
			var a = this,
				b = a.$;
			a.re(), b(".panel_success").ha(), b(".panel_footer").ha()
		}
	};
	var P = "Network Error",
		O = "geetest_",
		ea = "init",
		fa = "ready",
		ga = "start_detect",
		ha = "detect",
		ia = "wait_compute",
		ja = "start_compute",
		ka = "compute_1",
		la = "compute_2",
		ma = "radar_success",
		na = "radar_error",
		oa = "radar_click",
		pa = "radar_click_ready",
		qa = "radar_click_hide",
		ra = "click_error",
		sa = "success",
		ta = "error",
		ua = "not_compatible",
		va = "reset",
		wa = "close",
		xa = "float",
		ya = "popup",
		za = "custom",
		Aa = function() {
			return "transition" in v.style || "webkitTransition" in v.style || "mozTransition" in v.style || "msTransition" in v.style
		},
		Ba = function(a) {
			var b = {
				"zh-cn": {
					ready: "点击按钮进行验证",
					fullpage: "智能检测中",
					success: "验证成功",
					error_00: "未知错误",
					error_01: "未联网",
					error_02: "网络故障",
					error_03: "服务器故障",
					error_10: "刷新过多",
					error: "网络故障",
					reset: "请点击重试",
					next: "正在加载验证",
					next_ready: "请完成验证",
					not_compatible: "浏览器版本过低，请更新至最新版",
					goto_homepage: "是否前往验证服务Geetest官网？",
					goto_confirm: "前往",
					goto_cancel: "取消",
					loading_title: "正在判别",
					loading_content: "您是否为真实用户",
					success_title: "通过验证",
					error_title: "网络超时",
					error_content: "请点击此处重试",
					copyright: "由极验提供技术支持"
				},
				en: {
					ready: "Click to pass",
					fullpage: "Detecting",
					success: "Succeeded",
					error_00: "Unknown error",
					error_01: "No connection",
					error_02: "Network failure",
					error_03: "Server failure",
					error_10: "Over refreshed",
					error: "Network failure",
					reset: "Click to retry",
					next: "Loading",
					next_ready: "Please finish it",
					not_compatible: "The browser version is too low，please update it",
					goto_homepage: "Going to Geetest（verification service provider）？",
					goto_confirm: "Yes",
					goto_cancel: "Cancel",
					loading_title: "正在判别",
					loading_content: "您是否为真实用户",
					success_title: "通过验证",
					error_title: "网络超时",
					error_content: "请点击此处重试",
					copyright: "由极验提供技术支持"
				},
				"zh-tw": {
					ready: "點擊按鈕進行驗證",
					fullpage: "智能檢測中",
					success: "驗證成功",
					error_00: "未知錯誤",
					error_01: "未聯網",
					error_02: "網絡故障",
					error_03: "服務器故障",
					error_10: "刷新過多",
					error: "網絡故障",
					reset: "請點擊重試",
					next: "正在加載驗證",
					next_ready: "請完成驗證",
					not_compatible: "瀏覽器版本過低，請更新至最新版",
					goto_homepage: "是否前往驗證服務Geetest官網？",
					goto_confirm: "前往",
					goto_cancel: "取消",
					loading_title: "正在判别",
					loading_content: "您是否為真實用戶",
					success_title: "通過驗證",
					error_title: "網絡超時",
					error_content: "請點擊此處重試",
					copyright: "由極驗提供技術支持"
				}
			};
			if("string" != typeof a) return b["zh-cn"];
			a = a.toLowerCase();
			var c = a.indexOf("-"),
				d = c > -1 ? a.slice(0, c) : a;
			return "zh" === d && (a.indexOf("tw") > -1 || a.indexOf("hk") > -1 ? d += "-tw" : d += "-cn"), b[d] || b["zh-cn"]
		},
		Ca = {
			".form": {
				"input.challenge": {},
				"input.validate": {},
				"input.seccode": {}
			},
			".btn": {
				".radar_btn": {
					".radar": {
						".ring": {
							".small": {}
						},
						".sector": {
							".small": {}
						},
						".cross": {
							".h": {},
							".v": {}
						},
						".dot": {},
						".scan": {
							".h": {}
						},
						".status": {
							".bg": {},
							".hook": {}
						}
					},
					".ie_radar": {},
					".radar_tip": {
						"span.radar_tip_content": {},
						"span.reset_tip_content": {}
					},
					"a.logo": {},
					".other_offline.offline": {}
				},
				".ghost_success": {
					".success_btn": {
						".success_box": {
							".success_show": {
								".success_pie": {},
								".success_filter": {},
								".success_mask": {}
							},
							".success_correct": {
								".success_icon": {}
							}
						},
						".success_radar_tip": {
							"span.success_radar_tip_content": {}
						},
						"a.success_logo": {},
						".success_offline.offline": {}
					}
				},
				".slide_icon": {}
			},
			".wait": {
				"span.wait_dot.dot_1": {},
				"span.wait_dot.dot_2": {},
				"span.wait_dot.dot_3": {}
			},
			".fullpage_click": {
				".fullpage_ghost": {},
				".fullpage_click_wrap": {
					".fullpage_click_box": {},
					".fullpage_pointer": {
						".fullpage_pointer_out": {},
						".fullpage_pointer_in": {}
					}
				}
			},
			".goto": {
				".goto_ghost": {},
				".goto_wrap": {
					".goto_content": {
						".goto_content_tip": {}
					},
					".goto_cancel": {},
					"a.goto_confirm": {}
				}
			},
			".panel": {
				".panel_ghost": {},
				".panel_box": {
					".panel_loading": {
						".panel_loading_icon": {},
						".panel_loading_title": {},
						".panel_loading_content": {}
					},
					".panel_success": {
						".panel_success_icon": {},
						".panel_success_title": {}
					},
					".panel_error": {
						".panel_error_icon": {},
						".panel_error_title": {},
						".panel_error_content": {}
					},
					".panel_footer": {
						".panel_footer_logo": {},
						".panel_footer_copyright": {}
					},
					".panel_next": {}
				}
			}
		},
		Da = function(a, b, c) {
			var d = a.split("."),
				e = d[0] || "div",
				i = new f(d).Ya(1).jb(function(a) {
					return O + a
				}).ac(" "),
				j = new h(e);
			return c("." + d[1], j), "input" == e ? j.Dc({
				type: "hidden",
				name: i
			}) : j._b({
				className: i
			}), Z(b) ? j.Dc({
				textContent: b
			}) : new g(b).sb(function(a, b) {
				j.bc(Da(a, b, c))
			}), j
		};
	d.noConflict(a, o);
	var Ea = ca();
	if(b) return o
});