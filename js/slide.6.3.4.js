//"v6.3.4 Geetest Inc.";
! function(a, b) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
		if(!a.document) throw new Error("Geetest requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
	function c(a) {
		this.b = a
	}

	function d() {
		this.ib = {}
	}

	function e(a, b) {
		return a.type || (a.type = "slide"), new e[a.type](a, b)
	}

	function f(a) {
		this.Fb = [a]
	}

	function g(a) {
		this.Ab = a
	}

	function h(a) {
		this.cc = a || []
	}

	function i(a) {
		this.jc = a
	}

	function j(a) {
		this.j = "string" == typeof a ? w.createElement(a) : a
	}

	function k(a, b) {
		this.lc = b, this.j = a
	}

	function l(a, b) {
		var c = this,
			e = new n(a);
		e.https ? e.protocol = "https://" : e.protocol = A, a.debugConfig && e.Hc(a.debugConfig), c.B = e, c.A = a, c.C = new d, c.D = new g(function(a, b) {
			c.F(a, b)
		}), c.D.G(ka), c.Ic = ja()
	}

	function m(a) {
		var b = this,
			c = a.j;
		c.height = c.width = 0, b.k = c.getContext("2d"), b.l = b.m = b.n = b.o = 0, b.p = c
	}

	function n(a) {
		var b = this;
		b.h = ea(), b.Hc({
			protocol: A
		}).Hc(a)
	}

	function o(a) {
		var b = this,
			c = a.B;
		b.D = a.D, b.ma = a, b.B = c, b.A = a.A, b.C = a.C, b.na = Aa(b.B.lang), b.$ = fa();
		var d = c.product,
			e = ".holder." + c.theme;
		E && (e += ".ie8"), "popup" === d ? b.oa = Fa(e + ".popup", Ea(Ca), b.$) : "float" === d ? b.oa = Fa(e + ".float", Ca, b.$) : "embed" === d && (b.oa = Fa(e + ".embed", Ca, b.$)), b.L().ka()
	}

	function p(a, b) {
		var c = this;
		c.Za = ea(), c.td = !0, U.G(c.Za, new l(a, b))
	}

	function q(a, b, c, d, e) {
		var f = this;
		f._a = d, f.qc = e, f.Ya = a, b = b.j, F ? a.Ia({
			filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + b.src + '")'
		}) : a.Ia({
			backgroundImage: 'url("' + b.src + '")'
		}), a.Ia({
			left: f._a / 260 + "px",
			top: f.qc + "px",
			width: b.width + "px",
			height: b.height + "px"
		})
	}

	function r(a) {
		var b = this,
			c = a.B;
		c.mobile && "float" === c.product && (c.product = "embed"), b.D = a.D, b.ma = a, b.B = c, b.A = a.A, b.C = a.C, b.na = Aa(b.B.lang), b.$ = fa();
		var d = c.product,
			e = ".holder.mobile." + c.theme;
		"popup" === d || "custom" === c.product ? (b.oa = Fa(e + ".popup", Ea(Da), b.$), "custom" === c.product && (c.width && b.$(".popup_box").Ia({
			width: c.width
		}), c.bg_color && b.$(".popup_ghost").Ia({
			backgroundColor: c.bg_color
		}), b.Zc())) : b.oa = Fa(e + ".embed", Da, b.$), c.is_next && b.$(".result").wa("absolute").wa("fade"), b.L().ka()
	}

	function s() {}

	function t(a, b) {
		var c = this;
		c.Cb = a(".result_icon"), c.Db = a(".result_title"), c.Eb = a(".result_content"), c.$ = a, c.na = b
	}

	function u() {}
	var v = function() {
		return {
			vd: function() {
				return(a.XDomainRequest || a.XMLHttpRequest && "withCredentials" in new a.XMLHttpRequest) && a.JSON
			},
			ud: function(b, c, d, e) {
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
	}();
	c.prototype = {
		c: function(b) {
			var c = (new a.Date).getTime();
			return(a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || function(b) {
				var d = (new Date).getTime(),
					e = a.Math.max(0, 16 - (d - c)),
					f = a.setTimeout(function() {
						b(d + e)
					}, e);
				return c = d + e, f
			})(b)
		},
		d: function(b) {
			return(a.cancelAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || D)(b)
		},
		e: function() {
			var a = this;
			return a.f = !0, a
		},
		g: function() {
			var a = this;
			return a.h = a.c(function() {
				a.f || (a.b(), a.g())
			}), a
		},
		i: function() {
			var a = this;
			return a.f = !1, a.d(a.h), a.g()
		}
	};
	var w = a.document,
		x = a.location,
		y = w.body || w.getElementsByTagName("body")[0],
		z = w.head || w.getElementsByTagName("head")[0],
		A = (w.documentElement, x.protocol + "//"),
		B = a.navigator,
		C = function(b, c) {
			return a.setTimeout(b, c)
		},
		D = function(b) {
			a.clearTimeout(b)
		},
		E = function() {
			var a = w.createElement("canvas"),
				b = a.getContext && a.getContext("2d"),
				c = /msie/i.test(B.userAgent);
			return !b && c
		}(),
		F = (/Mobi/i.test(B.userAgent), /msie 6\.0/i.test(B.userAgent)),
		G = (/msie 7\.0/i.test(B.userAgent), "BackCompat" === w.compatMode),
		H = (y.style, function(a, b) {
			return new $(function(c, d) {
				var e = new j("script"),
					f = e.j,
					g = !1,
					h = function() {
						g || f.readyState && "loaded" !== f.readyState && "complete" !== f.readyState || (g = !0, C(function() {
							c(e)
						}, 0))
					},
					i = function() {
						e.$b(), d(S)
					};
				e._b({
					charset: "UTF-8",
					aysnc: !1,
					onload: h,
					onreadystatechange: h,
					onerror: i,
					src: a
				}).ca(new j(z)), C(function() {
					g || e.$b(), d(T)
				}, b || 3e4)
			})
		}),
		I = function(a, b) {
			return new $(function(c, d) {
				var e = new j("link"),
					f = !1,
					g = function() {
						e.$b(), d(S)
					},
					h = function() {
						f = !0, c(e)
					};
				C(function() {
					f = !0, c(e)
				}, 1e3), e._b({
					onerror: g,
					onload: h,
					href: a,
					rel: "stylesheet"
				}).ca(new j(z)), C(function() {
					f || e.$b(), d(T)
				}, b || 3e4)
			})
		},
		J = function(a, b) {
			return new $(function(c, d) {
				var e = new j("img"),
					f = function() {
						d(S)
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
				}), C(function() {
					d(T)
				}, b || 3e4)
			})
		},
		K = function(a) {
			return a.replace(/^https?:\/\/|\/$/g, "")
		},
		L = function(a) {
			return a = a.replace(/\/+/g, "/"), 0 !== a.indexOf("/") && (a = "/" + a), a
		},
		M = function(a) {
			if(!a) return "";
			var b = "?";
			return new i(a).sb(function(a, c) {
				(ba(c) || aa(c) || ca(c)) && (b = b + encodeURIComponent(a) + "=" + encodeURIComponent(c) + "&")
			}), "?" === b && (b = ""), b.replace(/&$/, "")
		},
		N = function(a, b, c, d) {
			b = K(b);
			var e = L(c) + M(d);
			return b && (e = a + b + e), e
		},
		O = function(a, b, c, d, e, f) {
			var g;
			"js" == b ? g = H : "css" == b ? g = I : "img" == b && (g = J);
			for(var h = [], i = 0, j = d.length; i < j; i += 1) h.push(function(b) {
				return function(c, d) {
					g(b, a.timeout).K(function(a) {
						d(a)
					}, function() {
						c()
					})
				}
			}(N(c, d[i], e, f)));
			return new $(function(a, b) {
				$.step(h).K(function() {
					b()
				}, function(b) {
					a(b)
				})
			})
		},
		P = function(a, b, c) {
			return new $(function(d, e) {
				for(var f in c) c.hasOwnProperty(f) && "number" == typeof c[f] && (c[f] = "" + c[f]);
				c.a && (c.a = decodeURIComponent(c.a)), v.ud(N(a.protocol, a.api_server || a.apiserver, b), c, function(a) {
					d(a)
				}, function(a) {
					e(a)
				})
			})
		},
		Q = function(b, c, d) {
			return b.offline ? s.N(b, c, d) : void 0 !== v && v.vd() && b.post ? P(b, c, d) : new $(function(e, f) {
				var g = "geetest_" + ea();
				a[g] = function(b) {
					e(b), a[g] = undefined;
					try {
						delete a[g]
					} catch(c) {}
				}, d.callback = g, O(b, "js", b.protocol, [b.api_server || b.apiserver], c, d).K(function() {}, function(a) {
					f(a)
				})
			})
		},
		R = "geetest_",
		S = "err001",
		T = "err002",
		U = function() {
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
		V = function(a, b) {
			for(var c = b.slice(32), d = [], e = 0; e < c.length; e++) {
				var f = c.charCodeAt(e);
				d[e] = f > 57 ? f - 87 : f - 48
			}
			c = 36 * d[0] + d[1];
			var g = Math.round(a) + c;
			b = b.slice(0, 32);
			var h, i = [
					[],
					[],
					[],
					[],
					[]
				],
				j = {},
				k = 0;
			e = 0;
			for(var l = b.length; e < l; e++) h = b.charAt(e), j[h] || (j[h] = 1, i[k].push(h), k++, k = 5 == k ? 0 : k);
			for(var m, n = g, o = 4, p = "", q = [1, 2, 5, 10, 50]; n > 0;) n - q[o] >= 0 ? (m = parseInt(Math.random() * i[o].length, 10), p += i[o][m], n -= q[o]) : (i.splice(o, 1), q.splice(o, 1), o -= 1);
			return p
		},
		W = function(a, b) {
			return X({
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
		X = function(a, b) {
			var c = "",
				d = b.A;
			return _(d) && new i(d).sb(function(a, b) {
				(ba(b) || aa(b) || ca(b)) && (c += a + ": " + b + "\n")
			}), b.Wc(a), new Error("GeetestError: " + (a && a.msg) + "\n" + c)
		},
		Y = function(a) {
			return console && console.error && console.error(a), new $(function(b, c) {
				c(a)
			})
		},
		Z = function(a) {
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
		$ = function(a) {
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
	$.debug(), d.prototype = {
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
		_c: function() {
			this.ib = {}
		}
	}, e.type = "shell", e.noConflict = function(a, b) {
		a.Geetest ? a.Geetest.type === e.type ? a.Geetest[b.type] = b : (e[b.type] = b, e[a.Geetest.type] = a.Geetest, a.Geetest = e) : (e[b.type] = b, a.Geetest = e)
	}, f.prototype = {
		Gb: function(a) {
			var b = this;
			return b.Fb.push(a), b
		},
		Hb: function() {
			var a = function(a) {
					var b = "()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqr",
						c = b.length,
						d = "",
						e = Math.abs(a),
						f = parseInt(e / c);
					f >= c && (f = c - 1), f && (d = b.charAt(f)), e %= c;
					var g = "";
					return a < 0 && (g += "!"), d && (g += "$"), g + d + b.charAt(e)
				},
				b = function(a) {
					for(var b = [
							[1, 0],
							[2, 0],
							[1, -1],
							[1, 1],
							[0, 1],
							[0, -1],
							[3, 0],
							[2, -1],
							[2, 1]
						], c = 0, d = b.length; c < d; c++)
						if(a[0] == b[c][0] && a[1] == b[c][1]) return "stuvwxyz~" [c];
					return 0
				},
				c = function(a) {
					for(var b, c, d, e = [], f = 0, g = 0, h = a.length - 1; g < h; g++) b = Math.round(a[g + 1][0] - a[g][0]), c = Math.round(a[g + 1][1] - a[g][1]), d = Math.round(a[g + 1][2] - a[g][2]), 0 == b && 0 == c && 0 == d || (0 == b && 0 == c ? f += d : (e.push([b, c, d + f]), f = 0));
					return 0 !== f && e.push([b, c, f]), e
				}(this.Fb),
				d = [],
				e = [],
				f = [];
			return new h(c).jb(function(c) {
				var g = b(c);
				g ? e.push(g) : (d.push(a(c[0])), e.push(a(c[1]))), f.push(a(c[2]))
			}), d.join("") + "!!" + e.join("") + "!!" + f.join("")
		}
	}, g.prototype = {
		G: function(a) {
			var b = this;
			return b.Bb = b.D, b.D = a, b.Ab(b.D, b.Bb), b
		},
		$a: function() {
			return this.D
		},
		Cc: function(a) {
			for(var b = this, c = h.ic(a) ? a : [a], d = 0, e = c.length; d < e; d += 1)
				if(c[d] === b.$a()) return !0;
			return !1
		}
	};
	var _ = function(a) {
			return "object" == typeof a && null !== a
		},
		aa = function(a) {
			return "number" == typeof a
		},
		ba = function(a) {
			return "string" == typeof a
		},
		ca = function(a) {
			return "boolean" == typeof a
		},
		da = function(a) {
			return "function" == typeof a
		},
		ea = function() {
			return function() {
				return parseInt(1e4 * Math.random()) + (new Date).valueOf()
			}
		}(),
		fa = function() {
			var a = {};
			return function(b, c) {
				if(!c) return a[b.replace(R, "")];
				a[b] = c
			}
		},
		ga = function() {
			return(new Date).getTime()
		},
		ha = function(a, b) {
			new i(b).sb(function(b, c) {
				a[b] = c
			})
		},
		ia = function(a) {
			return a.status ? a.data : a
		};
	h.prototype = {
		$a: function(a) {
			return this.cc[a]
		},
		Sc: function() {
			return this.cc.length
		},
		Ya: function(a, b) {
			var c, d = this;
			return c = aa(b) ? d.cc.slice(a, b) : d.cc.slice(a), new h(c)
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
			return new h(this.cc.concat(a))
		},
		jb: function(a) {
			var b = this,
				c = b.cc;
			if(c.map) return new h(c.map(a));
			for(var d = [], e = 0, f = c.length; e < f; e += 1) d[e] = a(c[e], e, b);
			return new h(d)
		},
		gc: function(a) {
			var b = this,
				c = b.cc;
			if(c.filter) return new h(c.filter(a));
			for(var d = [], e = 0, f = c.length; e < f; e += 1) a(c[e], e, b) && d.push(c[e]);
			return new h(d)
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
	}, h.ic = function(a) {
		return Array.isArray ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
	}, i.prototype = {
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
	}, j.prototype = {
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
			return new i(a).sb(function(a, b) {
				c.setAttribute(a, b)
			}), b
		},
		Fc: function(a) {
			var b = this,
				c = b.j;
			return new h(a).jb(function(a) {
				c.removeAttribute(a)
			}), b
		},
		_b: function(a) {
			var b = this,
				c = b.j;
			return new i(a).sb(function(a, b) {
				c[a] = b
			}), b
		},
		Ia: function(a) {
			var b = this,
				c = b.j;
			return new i(a).sb(function(a, b) {
				c.style[a] = b
			}), b
		},
		zc: function() {
			return new j(this.j.parentNode)
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
		Tc: function(a) {
			var b = this,
				c = b.j;
			return -1 === new h(c.className ? c.className.split(" ") : []).hc(R + a) ? b.xa(a) : b.wa(a), b
		},
		xa: function(a) {
			var b = this,
				c = b.j,
				d = c.className ? c.className.split(" ") : [],
				e = new h(d);
			return a = R + a, -1 == e.hc(a) && (e.dc(a), c.className = e.ac(" ")), b
		},
		wa: function(a) {
			var b = this,
				c = b.j,
				d = new h(c.className.split(" "));
			a = R + a;
			var e = d.hc(a);
			return e > -1 && (d.ec(e), c.className = d.ac(" ")), b
		},
		qa: function(a, b) {
			var c = this;
			return c.wa(b).xa(a), c
		},
		$c: function(a, b) {
			var c = this,
				d = c.j,
				e = c.kc[a],
				f = function(a) {
					b(new k(c, a))
				};
			return new h(e).jb(function(a) {
				if(w.addEventListener) d.addEventListener(a, f);
				else if(w.attachEvent) d.attachEvent("on" + a, f);
				else {
					var e = d["on" + a];
					d["on" + a] = function(a) {
						b(new k(c, a)), "function" == typeof e && e.call(this, a)
					}
				}
			}), {
				_c: function() {
					new h(e).jb(function(a) {
						w.removeEventListener ? d.removeEventListener(a, f) : w.detachEvent ? d.detachEvent("on" + a, f) : d["on" + a] = null
					})
				}
			}
		},
		ka: function(a, b) {
			var c = this;
			return c.$c(a, b), c
		},
		Sb: function() {
			return this.j.getBoundingClientRect()
		},
		Yc: function(b) {
			var c = this.Sb(),
				d = w.body,
				e = w.documentElement,
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
			return b.s(), c.appendChild(w.createTextNode(a)), b
		},
		Gc: function(a) {
			var b = this;
			return b.j.innerHTML = a, b
		},
		Nb: function(a) {
			var b, c = this,
				d = c.j,
				e = function() {
					var a = w.createElement("canvas");
					return !(a.getContext && a.getContext("2d"))
				}();
			if(a) {
				if(e) {
					var f = w.createElement("div");
					f.innerHTML = d.outerHTML, b = new j(f.childNodes[0])
				} else b = new j(c.j.cloneNode(!0));
				d.id = "origin_" + d.id, b.Fc(["href"])
			} else b = new j(c.j.cloneNode(!1)), b.xa("sandbox");
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
				for(var c = b.j, d = c; d.parentNode != w.body && c.offsetTop - d.parentNode.offsetTop < 160;) d = d.parentNode, "hidden" == function(b, c) {
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
	}, j.$ = function(b) {
		var c;
		"string" == typeof b ? "#" === b[0] ? c = w.getElementById(b.slice(1)) : "querySelector" in w ? c = w.querySelector(b) : da(a.jQuery) && (c = a.jQuery(b)[0]) : c = b.length ? b[0] : b;
		var d;
		try {
			d = Node.ELEMENT_NODE
		} catch(e) {
			d = 1
		}
		try {
			if(c.nodeType === d) return new j(c)
		} catch(e) {
			return !1
		}
	}, k.prototype = {
		Vb: function() {
			var a = this.lc;
			return aa(a.clientX) ? a.clientX : (a.changedTouches && a.changedTouches[0]).clientX
		},
		Xb: function() {
			var a = this.lc;
			return aa(a.clientY) ? a.clientY : (a.changedTouches && a.changedTouches[0]).clientY
		},
		Qb: function() {
			var a = this,
				b = a.lc;
			return b.cancelable && da(b.preventDefault) ? b.preventDefault() : b.returnValue = !1, a
		},
		Jb: function() {
			var a = this,
				b = a.lc;
			return da(b.stopPropagation) && b.stopPropagation(), a
		}
	};
	var ja = function() {
		return new $(function(a) {
			var b = w.createElement("img");
			b.onload = b.onerror = function() {
				a(2 === b.height ? !0 : !1)
			}, b.src = "data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA"
		})
	};
	l.prototype = {
		F: function(a, b) {
			var c = this,
				d = c.H,
				e = c.D,
				f = c.C,
				g = c.B;
			if(a !== b)
				if(null !== b && d && d.I(a, b), a === ka) c.J = c.L().K(function(a) {
					return a.status === ra ? Y(X({
						msg: a.error,
						code: a.error_code
					}, c)) : (g.Hc(ia(a)), g.debugConfig && g.Hc(g.debugConfig), g.mobile ? c.H = new r(c) : c.H = new o(c), c.nc(), f.M(ka), e.G(la), c.H.ba)
				}, function() {
					return Y(W("url_get", c))
				});
				else if(a === la) {
				var i = ga();
				c.N().K(function(a) {
					d.O(a), c.P = ga() - i, e.G(ma)
				}, function() {
					return Y(W("url_picture", c))
				})
			} else a === ma ? d.Q() : a === ta ? d.R() : a === sa ? d.S(b) : a === ua ? (new h([ma, pa, qa, na]).hc(b) > -1 && (f.M(ua), d.T(), d.U()), D(c.oc), c.nc()) : a === na ? (f.M(na), d.V(c.W, c.X)) : a === oa ? (f.M(oa), d.Y().K(function() {
				e.G(ma)
			})) : a === qa ? (f.M(qa), d.Z().K(function() {
				e.G(ua)
			})) : a === pa ? (f.M(pa), d._().K(function() {
				e.G(ua)
			})) : a === ra && (f.M(ra, c.sd), d && d.aa())
		},
		L: function() {
			var a = this,
				b = a.B;
			return Q(b, "/get.php", a.A)
		},
		nc: function() {
			var a = this,
				b = a.D;
			return a.oc = C(function() {
				b.G(ua)
			}, 54e4), a
		},
		Wc: function(a) {
			var b = this;
			return b.sd = a, b.D.G(ra), b
		},
		ca: function(a) {
			var b = this;
			return b.J.K(function() {
				b.H.ca(a)
			}), b
		},
		da: function(a) {
			var b = this;
			return b.J.K(function() {
				b.H.da(a)
			}), b
		},
		N: function() {
			var a = this,
				b = a.B,
				c = b.protocol,
				d = b.static_servers || b.staticservers;
			return a.Ic.K(function(a) {
				var e = a ? ".webp" : ".jpg";
				return $.all([new $(function(a) {
					O(b, "img", c, d, b.fullbg.replace(".jpg", e)).K(function(b) {
						a(b)
					}, function() {
						a(!1)
					})
				}), O(b, "img", c, d, b.bg.replace(".jpg", e)), O(b, "img", c, d, b.slice.replace(".jpg", e))])
			})
		},
		ea: function(a, b, c) {
			var d = this,
				e = d.B,
				f = {
					gt: e.gt,
					challenge: e.challenge,
					userresponse: V(a, e.challenge),
					passtime: c,
					imgload: d.P,
					a: b
				};
			e.offline && (f.x = a), Q(d.B, "/ajax.php", f).K(function(a) {
				if(a.status == ra) return Y(X({
					msg: a.error,
					code: a.error_code
				}, d));
				d.fa(ia(a))
			}, function() {
				return Y(W("url_ajax", d))
			})
		},
		fa: function(a) {
			var b = this,
				c = b.B,
				d = ra,
				e = a && a.result,
				f = a && a.message;
			if(a)
				if("success" == e || "success" == f) {
					var g = a.validate.split("|")[0];
					b.X = a.score, b.W = {
						geetest_challenge: c.challenge,
						geetest_validate: g,
						geetest_seccode: g + "|jordan"
					}, d = na
				} else "fail" == e || "fail" == f ? d = oa : "forbidden" == e || "forbidden" == f ? d = pa : "abuse" != e && "abuse" != f || (d = qa);
			else d = ra;
			b.D.G(d)
		},
		ga: function() {
			return this.W
		},
		ha: function() {
			var a = this;
			return a.H && a.H.ha(), a
		},
		ia: function() {
			var a = this;
			return a.H && a.H.ia(), a
		},
		ka: function(b, c) {
			var d = this,
				e = d.B;
			return d.C.ka(b, function(f) {
				c(f), new h([na, oa, pa, qa]).hc(b) > -1 ? (d.C.M(va), da(a.gt_custom_ajax) && (e.mobile ? a.gt_custom_ajax(b === na ? 1 : 0, !1, b) : a.gt_custom_ajax(b === na ? 1 : 0, d.$, b))) : b === ua ? da(a.gt_custom_refresh) && a.gt_custom_refresh(d.$) : b === ra ? da(a.gt_custom_error) && a.gt_custom_error(d, d.$) : b === ka && da(a.onGeetestLoaded) && a.onGeetestLoaded(d)
			}), d
		},
		T: function() {
			var a = this;
			return a.D.G(ua), a
		},
		la: function(a) {
			var b = this;
			return b.B.mobile && b.H.la(a), b
		},
		_c: function() {
			var a = this;
			a.H && a.H._c(), a.C._c()
		}
	}, m.prototype = {
		q: function(a, b) {
			var c = this,
				d = c.p;
			return d.height !== b && (d.height = b), d.width !== a && (d.width = a), c
		},
		r: function(a, b, c) {
			var d = this;
			return d.s(), d.t = a.j, d.u = b, d.v = c, d.n = a.width, d.w = a.height, d.y(b), d
		},
		s: function() {
			var a = this,
				b = a.k,
				c = a.p;
			return b.clearRect(0, 0, c.width, c.height), a
		},
		y: function(a) {
			var b = this;
			return b.k.drawImage(b.t, a + b.u, b.v), b
		},
		z: function(a) {
			return this.s().y(a)
		}
	}, n.prototype = {
		protocol: "http://",
		apiserver: "api.geetest.com",
		staticservers: ["static.geetest.com", "dn-staticdown.qbox.me"],
		product: "embed",
		lang: "zh-cn",
		bg: "",
		fullbg: "",
		slice: "",
		xpos: 0,
		ypos: 0,
		height: 116,
		width: "300px",
		type: "slide",
		sandbox: !1,
		challenge: "",
		gt: "",
		https: !1,
		logo: !0,
		mobile: !1,
		theme: "ant",
		theme_version: "1.1.2",
		version: "6.3.4",
		feedback: "http://www.geetest.com/contact",
		homepage: "http://www.geetest.com/first_page",
		show_delay: 250,
		hide_delay: 800,
		Hc: function(a) {
			var b = this;
			return new i(a).sb(function(a, c) {
				b[a] = c
			}), b
		}
	}, o.prototype = {
		L: function() {
			var a = this,
				b = a.$,
				c = a.na;
			return a.ra(), b(".refresh_tip").sa(c.refresh), a
		},
		Jc: function() {
			var a = this;
			return a.yc ? (a.yc.Ia({
				top: a.oa.wc() - 10 + "px",
				left: a.oa.xc() + "px"
			}), a) : a
		},
		uc: function() {
			var a = this,
				b = a.$,
				c = a.oa,
				d = c.Nb(!1);
			return b(".widget").vc(d), d.ca(new j(y)), a.yc = d, d.ka("enter", function() {
				a.ya(!0)
			}).ka("leave", function() {
				a.ya(!1)
			}), a.Jc(), a
		},
		ta: function() {
			var a = this,
				b = a.B,
				c = a.$;
			a.ua || a.va ? (a.Jc(), c(".widget").ha(), C(function() {
				(a.ua || a.va) && c(".widget").xa("show")
			}, b.show_delay)) : C(function() {
				a.ua || a.va || (c(".widget").wa("show"), C(function() {
					c(".widget").ia()
				}, 500))
			}, b.hide_delay)
		},
		ya: function(a) {
			var b = this;
			b.ua !== a && (b.ua = a, b.ta())
		},
		za: function(a) {
			var b = this;
			b.va !== a && (b.va = a, b.ta())
		},
		Aa: function(a) {
			var b = this;
			C(function() {
				b.za(!1)
			}, a)
		},
		Ba: function(a) {
			var b = this;
			return b.Ca(a, function() {
				b.za(!0)
			})
		},
		Da: function(a, b, c) {
			var d = this,
				e = d.$,
				f = e(".result");
			return a == na ? d.Fa.Ea(a, {
				sec: (d.Ga / 1e3).toFixed(1),
				score: 100 - d.X
			}) : d.Fa.Ea(a), e(".result").qa(a, d.Ha || null), d.Ha = a, new $(function(a) {
				f.Ia({
					bottom: "0"
				}), C(function() {
					a()
				}, c || 1500)
			}).K(function() {
				if(!b) return new $(function(a) {
					f.Ia({
						bottom: "-22px"
					}), C(function() {
						a()
					}, 200)
				})
			})
		},
		Ja: function() {
			var a = this,
				b = a.$,
				c = b(".slice").xa("flicker"),
				d = 100;
			return new $(function(a) {
				c.Ka(0), C(a, d)
			}).K(function() {
				return new $(function(a) {
					c.Ka(1), C(a, d)
				})
			}).K(function() {
				return new $(function(a) {
					c.Ka(0), C(a, d)
				})
			}).K(function() {
				return new $(function(a) {
					c.Ka(1), C(a, 200)
				})
			}).K(function() {
				c.wa("flicker")
			})
		},
		La: function() {
			var a = this,
				b = a.$;
			return b(".slice").xa("animate"), b(".slider_button").xa("animate"), a.Ma(a.Na), new $(function(a) {
				C(function() {
					b(".slice").wa("animate"), b(".slider_button").wa("animate"), a()
				}, 400)
			})
		},
		Oa: function() {
			var a = this,
				b = a.$,
				c = b(".flashlight").xa("flash").Ia({
					left: "-260px"
				});
			return new $(function(a) {
				C(function() {
					c.wa("flash").Ia({
						left: "260px"
					}), a()
				}, 1500)
			})
		},
		V: function(a, b) {
			var c = this;
			c.X = b;
			var d = c.$,
				e = c.B;
			d(".fullbg").Ka(1).ha(), c.Pa(a), c.Oa(), c.Da(na), "float" === e.product ? c.Aa(800) : "popup" === e.product && c.Qa().K(function() {
				c.Ra().K(function() {
					c.Sa && c.Sa.Ta()
				})
			})
		},
		Y: function() {
			var a = this;
			return a.Da(oa), "float" === a.B.product && a.Aa(1e3), a.Ja().K(function() {
				return a.La()
			})
		},
		aa: function() {
			var a = this;
			"float" === a.B.product && a.Aa(800), a.Ua()
		},
		Z: function() {
			var a = this;
			return a.Va().K(function() {
				"float" === a.B.product && a.Aa(1e3)
			})
		},
		_: function() {
			var a = this;
			return a.Wa().K(function() {
				"float" === a.B.product && a.Aa(1e3)
			})
		},
		O: function(a) {
			var b = this,
				c = b.$,
				d = b.B;
			G && c(".widget").Ia({
				width: "290px"
			}), c(".window").Ia({
				height: d.height + 2 + "px"
			}), c(".loading").Ia({
				paddingTop: 8 * (d.height - b.Xa) / 44 + "%"
			});
			var e = a[0],
				f = a[1],
				g = a[2];
			if(Ba) try {
				e && ya(e, c(".fullbg"), d.height), ya(f, c(".bg"), d.height)
			} catch(h) {
				e && za(e, c(".fullbg"), d.height), za(f, c(".bg"), d.height)
			} else e && za(e, c(".fullbg"), d.height), za(f, c(".bg"), d.height);
			return b.Ya = new q(c(".slice"), g, d.height, d.xpos, d.ypos), b
		},
		Q: function() {
			var a = this,
				b = a.$;
			a.Ma(0), b(".loading").ia()
		},
		la: function() {
			var a = this;
			return a.fb = 1, a
		}
	}, p.type = "slide3", p.prototype = {
		appendTo: function(a) {
			var b = this;
			return b.td && U.$a(b.Za).ca(a), b
		},
		bindOn: function(a) {
			var b = this;
			return b.td && U.$a(b.Za).da(a), b
		},
		refresh: function() {
			var a = this;
			return a.td && U.$a(a.Za).T(), a
		},
		show: function() {
			var a = this;
			return a.td && U.$a(a.Za).ha(), a
		},
		hide: function() {
			var a = this;
			return a.td && U.$a(a.Za).ia(), a
		},
		getValidate: function() {
			return !!this.td && U.$a(this.Za).ga()
		},
		onStatusChange: function(a) {
			var b = this;
			b.td && U.$a(b.Za).ka(va, a)
		},
		onReady: function(a) {
			var b = this;
			return b.td && U.$a(b.Za).ka(ka, a), b
		},
		onRefresh: function(a) {
			var b = this;
			return b.td && U.$a(b.Za).ka(ua, a), b
		},
		onSuccess: function(a) {
			var b = this;
			return b.td && U.$a(b.Za).ka(na, a), b
		},
		onFail: function(a) {
			var b = this;
			return b.td && U.$a(b.Za).ka(oa, a), b
		},
		onError: function(a) {
			var b = this;
			return b.td && U.$a(b.Za).ka(ra, a), b
		},
		onForbidden: function(a) {
			var b = this;
			return b.td && U.$a(b.Za).ka(pa, a), b
		},
		onAbuse: function(a) {
			var b = this;
			return b.td && U.$a(b.Za).ka(qa, a), b
		},
		onClose: function(a) {
			var b = this;
			return b.td && U.$a(b.Za).ka(wa, a), b
		},
		zoom: function(a) {
			var b = this;
			return b.td && U.$a(b.Za).la(a), b
		},
		destroy: function() {
			var a = this;
			a.td && (a.td = !1, U.$a(a.Za)._c(), U.G(a.Za, null))
		}
	}, q.prototype = {
		z: function(a) {
			var b = this;
			if("webkitTransform" in w.body.style || "transform" in w.body.style) {
				var c = "translate(" + (a - b._a) + "px, 0px)";
				b.Ya.Ia({
					transform: c,
					webkitTransform: c
				})
			} else b.Ya.Ia({
				left: a + "px"
			})
		}
	}, r.prototype = {
		Zc: function() {
			var a = this,
				b = a.B,
				c = a.$,
				d = j.$(b.area);
			d || Y(W("config_area", a.ma));
			var e = d.Yc();
			c(".holder").Ia({
				position: "absolute",
				left: e.left + "px",
				top: e.top + "px",
				width: e.width + "px",
				height: e.height + "px"
			})
		},
		L: function() {
			var a = this,
				b = a.B,
				c = a.$;
			return a.ra(), b.feedback || b.logo || b.is_next || c(".panel").ia(), a
		},
		Ba: function(a) {
			var b = this,
				c = b.$,
				d = c(".window").Sb();
			return b.fb = (d.right - d.left) / b.db, b.Ca(a, function() {
				c(".refresh").ia(), b.l = b.Na, b.cb.i()
			})
		},
		Da: function(a, b, c) {
			var d = this,
				e = d.$,
				f = e(".result");
			return a == na ? d.Fa.Ea(a, {
				sec: (d.Ga / 1e3).toFixed(1),
				score: 100 - d.X
			}) : d.Fa.Ea(a), f.qa(a, d.Ha || null), e(".result_icon").qa(a, d.Ha || null), d.Ha = a, d.B.is_next ? new $(function(a) {
				f.Ia({
					bottom: "0"
				}), C(function() {
					a()
				}, c || 1500)
			}).K(function() {
				if(!b) return new $(function(a) {
					f.Ia({
						bottom: "-25px"
					}), C(function() {
						a()
					}, 200)
				})
			}) : new $(function(a) {
				f.Ia({
					opacity: "1",
					zIndex: "0"
				}), C(function() {
					a()
				}, c || 1500)
			}).K(function() {
				if(!b) return new $(function(a) {
					f.Ia({
						opacity: "0"
					}), C(function() {
						a(), f.Ia({
							zIndex: "-1"
						})
					}, 200)
				})
			})
		},
		La: function() {
			var a = this,
				b = a.$;
			return b(".slider_button").xa("animate"), b(".slice").ia(), a.Ma(a.Na), new $(function(a) {
				C(function() {
					b(".slider_button").wa("animate"), b(".slice").ha(), a()
				}, 400)
			})
		},
		Q: function() {
			var a = this,
				b = a.$;
			return a.Ma(a.Na), b(".loading").Ka(0), C(function() {
				b(".loading").ia()
			}, 500), b(".refresh").ha(), a
		},
		V: function(a, b) {
			var c = this;
			c.X = b;
			var d = c.$,
				e = c.B;
			c.Pa(a), c.Da(na), d(".fullbg").ha().Ka(1), d(".refresh").ha(), "popup" !== e.product && "custom" !== e.product || c.Qa().K(function() {
				c.Ra().K(function() {
					c.Sa && c.Sa.Ta()
				})
			})
		},
		Y: function() {
			var a = this,
				b = a.$;
			a.Da(oa), b(".slice").Ka(1);
			var c = a.B;
			return "popup" !== c.product && "custom" !== c.product || (b(".popup_box").xa("shake"), C(function() {
				b(".popup_box").wa("shake")
			}, 400)), new $(function(a) {
				C(function() {
					a()
				}, 1500)
			}).K(function() {
				return a.La()
			})
		},
		aa: function() {
			return this.Ua()
		},
		Z: function() {
			return this.Va()
		},
		_: function() {
			return this.Wa()
		},
		O: function(a) {
			var b = this,
				c = b.$,
				d = b.B;
			c(".window").Ia({
				paddingBottom: Number(d.height / b.db * 100).toFixed(2) + "%"
			}), c(".loading").Ia({
				paddingTop: 10 * (d.height - b.Xa) / 44 + "%"
			}), c(".result_box").Ia({
				paddingTop: 10 * (d.height - b.Xa) / 44 + "%"
			});
			var e = a[0],
				f = a[1],
				g = a[2],
				h = function() {
					c(".canvas_img").ia(), c(".div_img").ha(), c(".fullbg", c(".div_fullbg")), c(".bg", c(".div_bg")), c(".slice", c(".div_slice")), e && za(e, c(".fullbg"), d.height), za(f, c(".bg"), d.height), b.Ya = new q(c(".slice"), g, d.height, d.xpos, d.ypos), "popup" === d.product || "custom" === d.product ? c(".popup_box").Ia({
						width: "278px"
					}) : (c(".holder").Ia({
						width: "278px"
					}), c(".div_bg").Ia({
						height: d.height + "px"
					}), c(".div_fullbg").Ia({
						height: d.height + "px"
					}))
				};
			if(Ba) try {
				c(".canvas_img").ha(), c(".div_img").ia(), c(".fullbg", c(".canvas_fullbg")), c(".bg", c(".canvas_bg")), c(".slice", c(".canvas_slice")), e && ya(e, c(".fullbg"), d.height), ya(f, c(".bg"), d.height), b.Ya = new m(c(".slice")).q(260, d.height).r(g, d.xpos, d.ypos)
			} catch(i) {
				h()
			} else h();
			return b
		},
		la: function(a) {
			var b = this,
				c = b.$,
				d = b.B;
			b.sc = a;
			var e = a;
			return aa(a) && (e = a + "px"), "popup" === d.product || "custom" === d.product || c(".holder").Ia({
				width: e
			}), b
		}
	}, s.$a = function(a, b, c) {
		for(var d = parseInt(6 * Math.random()), e = parseInt(300 * Math.random()), f = Z(d + "").slice(0, 9), g = Z(e + "").slice(10, 19), h = "", i = 0; i < 9; i++) h += i % 2 == 0 ? f.charAt(i) : g.charAt(i);
		var j = h.slice(0, 4),
			k = h.slice(4),
			l = function(a) {
				if(5 == a.length) {
					var b = parseInt(a, 16) || 0,
						c = b % 200;
					return c < 40 && (c = 40), c
				}
			}(k),
			m = function(a) {
				if(4 == a.length) {
					return(parseInt(a, 16) || 0) % 70
				}
			}(j);
		return a.gb = ea(), U.G(a.gb, {
			rand0: d,
			rand1: e,
			x_pos: l
		}), new $(function(a) {
			a({
				bg: "/pictures/gt/" + f + "/bg/" + g + ".jpg",
				fullbg: "/pictures/gt/" + f + "/" + f + ".jpg",
				slice: "/pictures/gt/" + f + "/slice/" + g + ".png",
				type: "slide",
				ypos: m,
				xpos: 0
			})
		})
	}, s.hb = function(a, b, c) {
		var d, e = U.$a(a.gb),
			f = c.x,
			g = e.x_pos,
			h = e.rand0,
			i = e.rand1;
		return d = f >= g - 3 && f <= g + 3 ? {
			success: !0,
			message: "success",
			validate: V(f, a.challenge) + "_" + V(h, a.challenge) + "_" + V(i, a.challenge),
			score: Math.round(c.passtime / 200)
		} : {
			success: 0,
			message: "fail"
		}, new $(function(a) {
			a(d)
		})
	}, s.N = function(a, b, c) {
		return "/get.php" === b || "/refresh.php" === b ? s.$a(a, b, c) : "/ajax.php" === b ? s.hb(a, b, c) : void 0
	}, t.prototype = {
		Ea: function(a, b, c) {
			var d = this,
				e = d.na[a],
				f = e[1];
			return d.Db.sa(e[0].replace(c, "")), b && new i(b).sb(function(a, b) {
				f = f.replace(a, b)
			}), d.Eb.sa(f), d
		}
	}, u.prototype = {
		db: 260,
		eb: 300,
		Xa: 116,
		Na: 0,
		Ib: 200,
		Kc: function() {
			var a = this,
				b = a.B,
				c = "/static/" + b.theme + "/style" + ("https://" === b.protocol ? "_https" : "") + "." + b.theme_version + ".css",
				d = b.debugConfig;
			return d && d.skin_path && (c = c.replace("/static", d.skin_path)), O(b, "css", b.protocol, b.static_servers || b.staticservers, c)
		},
		I: function(a, b) {
			var c = this,
				d = c.$;
			c.B;
			return d(".slider").qa(a, b || null), c
		},
		ra: function() {
			var a = this,
				b = a.B,
				d = a.$,
				e = a.na;
			return d(".slider_tip").sa(e.slide), d(".feedback_tip").sa(e.feedback), d(".loading_tip").sa(e.loading), d(".refresh").Dc({
				href: "javascript:;"
			}), "popup" !== b.product && "custom" !== b.product || d(".popup_tip").sa(e.popup_ready), b.feedback ? d(".feedback").Dc({
				target: "_blank",
				href: b.feedback
			}) : d(".feedback").ia(), b.is_next ? (d(".refresh_tip").sa(e.refresh), d(".refresh_1").Dc({
				href: "javascript:;"
			}), d(".close_tip").sa(e.close), d(".copyright_tip").sa(e.logo), b.logo ? d(".copyright").Dc({
				target: "_blank",
				href: b.homepage
			}) : d(".copyright").ia()) : b.logo ? d(".logo").Dc({
				target: "_blank",
				href: b.homepage
			}) : d(".logo").ia(), a.Fa = new t(d, e), a.ba = a.Kc(), a.cb = new c(function() {
				a.Ma(a.l || a.Na)
			}), a.fb = 1, a.la(b.width), a
		},
		ka: function() {
			var a = this,
				b = a.$,
				c = a.B;
			"float" === c.product ? b(".holder").ka("enter", function() {
				a.ya(!0)
			}).ka("leave", function() {
				a.ya(!1)
			}) : "popup" !== c.product && "custom" !== c.product || (b(".popup_ghost").ka("click", function() {
				a.Ra()
			}), b(".popup_close").ka("click", function() {
				a.Ra()
			})), c.is_next && (b(".close").ka("click", function() {
				"popup" === c.product || "custom" === c.product ? a.Ra() : a.C.M(wa)
			}), b(".refresh_1").ka("click", function(b) {
				a.D.G(ua), b.Qb()
			})), b(".slider_button").ka("down", function(b) {
				a.Ba(b)
			}), new j(w).ka("move", function(b) {
				a.z(b)
			}).ka("up", function(b) {
				a.Kb(b)
			}), b(".refresh").ka("click", function(b) {
				a.D.G(ua), b.Qb()
			})
		},
		ca: function(a) {
			var b = this,
				c = b.B,
				d = b.$;
			if(b.Lb = j.$(a), !b.Lb) return Y(W("api_appendTo", b.ma));
			"popup" === c.product || "custom" === c.product ? (b.oa.ca(new j(y)), d(".form").ca(b.Lb)) : b.oa.ca(b.Lb), "float" === c.product && (c.sandbox ? b.uc() : b.oa.Ac()), b.Mb = ga()
		},
		da: function(a) {
			var b = this;
			if("popup" !== b.B.product || "custom" === b.B.product) return b;
			if(b.Sa = j.$(a), !b.Sa) return Y(W("api_bindOn", b.ma));
			var c = b.Sa.Nb(!0);
			return c.Ob(b.Sa), b.Sa.ia(), c.ka("click", function(a) {
				b.Pb(), a.Qb()
			}), b
		},
		ha: function() {
			var a = this;
			return "popup" !== a.B.product && "custom" !== a.B.product ? a : (a.Pb(), a)
		},
		ia: function() {
			var a = this;
			return "popup" !== a.B.product && "custom" !== a.B.product ? a : (a.Ra(), a)
		},
		Pb: function() {
			var a = this,
				b = a.$,
				c = a.na;
			"custom" === a.B.product && a.Zc(), b(".popup_tip").sa(c.popup_ready), a.oa.ha(), C(function() {
				a.oa.Ka(1)
			}, 10)
		},
		Ra: function() {
			var a = this;
			return a.oa.Ka(0), new $(function(b) {
				C(function() {
					a.oa.ia(), a.C.M(wa), b()
				}, 400)
			})
		},
		Qa: function() {
			var a = this,
				b = a.na;
			return(0, a.$)(".popup_tip").sa(b.popup_finish), new $(function(a) {
				C(a, 2e3)
			})
		},
		Ca: function(a, b) {
			var c = this,
				d = c.D;
			if(d.$a() === ma) {
				d.G(ta), a.Qb(), c.Rb = "pointerdown" == a.type;
				var e = c.$(".slider_button").Sb();
				c.Tb = ga();
				var g = c.fb;
				return c.Ub = a.Vb() / g, c.Wb = a.Xb() / g, c.Yb = new f([Math.round(e.left / g - c.Ub), Math.round(e.top / g - c.Wb), 0]).Gb([0, 0, 0]), c.l = c.Na, c.cb.i(), da(b) && b(), c
			}
		},
		z: function(a) {
			var b = this;
			if(b.D.$a() === ta && (!b.Rb || "pointermove" == a.type)) {
				a.Qb();
				var c = b.fb,
					d = a.Vb() / c - b.Ub,
					e = b.Wb - a.Xb() / c;
				b.l = d, b.Yb.Gb([Math.round(d), Math.round(e), ga() - b.Tb])
			}
		},
		Kb: function(a) {
			var b = this,
				c = b.ma,
				d = b.D;
			if(d.$a() === ta && (!b.Rb || "pointerup" == a.type)) {
				a.Qb(), d.G(sa);
				var e = b.fb,
					f = a.Vb() / e - b.Ub,
					g = b.Wb - a.Xb() / e;
				b.Ga = ga() - b.Tb, b.Yb.Gb([Math.round(f), Math.round(g), b.Ga]);
				var h = parseInt(f);
				return c.ea(h, b.Yb.Hb(), b.Ga), b.cb.e(), b
			}
		},
		T: function() {
			var a = this,
				b = a.$,
				c = a.B,
				d = a.D;
			b(".loading").ha().Ka(1), b(".fullbg").Ka(1).ha(), b(".slice").Ka(1), Q(c, "/refresh.php", {
				gt: c.gt,
				challenge: c.challenge,
				type: c.type
			}).K(function(e) {
				if(e.status == ra) return Y(X({
					msg: e.error,
					code: e.error_code
				}, a.ma));
				a.La(), a.Ma(a.Na), c.Hc(ia(e)), c.link && b(".link").Dc({
					target: "_blank",
					href: c.link
				}), d.G(la)
			}, function() {
				return Y(W("url_refresh", a.ma))
			})
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
			return a.ma.W = !1, b(".challenge").Fc(["value"]), b(".validate").Fc(["value"]), b(".seccode").Fc(["value"]), a
		},
		S: function() {
			var a = this,
				b = a.$;
			return a.B.mobile || b(".slice").Ka(.8), a
		},
		R: function() {
			var a = this,
				b = a.$;
			b(".fullbg").Ka(0), C(function() {
				b(".fullbg").ia()
			}, 200)
		},
		Ua: function() {
			this.Da(ra, !0)
		},
		Va: function() {
			return this.Da(qa), new $(function(a) {
				C(a, 1500)
			})
		},
		Wa: function() {
			return this.Da(pa), new $(function(a) {
				C(a, 1500)
			})
		},
		Ma: function(a) {
			var b = this,
				c = b.$;
			if(a < b.Na ? a = b.Na : a > b.Ib && (a = b.Ib), "webkitTransform" in w.body.style || "transform" in w.body.style) {
				var d = "translate(" + a * b.fb + "px, 0px)";
				c(".slider_button").Ia({
					transform: d,
					webkitTransform: d
				})
			} else c(".slider_button").Ia({
				left: a * b.fb + "px"
			});
			b.Ya.z(a)
		},
		_c: function() {
			var a = this,
				b = a.$;
			b(".form").$b(), b(".holder").$b()
		}
	};
	var E = function() {
			var a = w.createElement("canvas"),
				b = a.getContext && a.getContext("2d"),
				c = /msie/i.test(B.userAgent);
			return !b && c
		}(),
		F = /msie 6\.0/i.test(B.userAgent),
		G = "BackCompat" === w.compatMode,
		S = "Network Error",
		ka = "init",
		la = "load",
		ma = "ready",
		na = "success",
		oa = "fail",
		pa = "forbidden",
		qa = "abuse",
		ra = "error",
		sa = "lock",
		ta = "move",
		ua = "refresh",
		va = "status_change",
		wa = "close",
		xa = function() {
			for(var a, b = "6_11_7_10_4_12_3_1_0_5_2_9_8".split("_"), c = [], d = 0; d < 52; d++) a = 2 * parseInt(b[parseInt(d % 26 / 2)]) + d % 2, parseInt(d / 2) % 2 || (a += d % 2 ? -1 : 1), a += d < 26 ? 26 : 0, c.push(a);
			return c
		}(),
		ya = function(a, b) {
			a = a.j, b = b.j;
			var c = a.width,
				d = a.height,
				e = w.createElement("canvas");
			e.width = c, e.height = d;
			var f = e.getContext("2d");
			f.drawImage(a, 0, 0);
			var g = b.getContext("2d");
			b.height = d, b.width = 260;
			for(var h = d / 2, i = 0; i < 52; i += 1) {
				var j = xa[i] % 26 * 12 + 1,
					k = xa[i] > 25 ? h : 0,
					l = f.getImageData(j, k, 10, h);
				g.putImageData(l, i % 26 * 10, i > 25 ? h : 0)
			}
		},
		za = function(a, b) {
			var c = a.j,
				d = c.src,
				e = c.height,
				f = e / 2;
			b.s();
			for(var g = 0; g < 52; g += 1) {
				var h = xa[g] % 26 * 12 + 1,
					i = xa[g] > 25 ? f : 0,
					k = "-" + h + "px -" + i + "px";
				new j("div").Ia({
					backgroundImage: "url(" + d + ")",
					backgroundPosition: k
				}).ca(b)
			}
		},
		Aa = function(a) {
			var b = {
				"zh-cn": {
					popup_ready: "请先完成下方验证",
					popup_finish: "页面将在2秒后跳转",
					loading: "加载中...",
					slide: "拖动左边滑块完成上方拼图",
					refresh: "刷新验证",
					feedback: "帮助反馈",
					fail: ["验证失败:", "拖动滑块将悬浮图像正确拼合"],
					success: ["验证通过:", "sec 秒的速度超过 score% 的用户"],
					abuse: ["尝试过多:", "系统正在自动刷新图片"],
					forbidden: ["再来一次:", "哇哦～怪物吃了拼图 3 秒后重试"],
					error: ["出现错误:", "请关闭验证重试"],
					logo: "由极验提供技术支持",
					f_slide: "请_拖动_下方滑块进行拼图",
					close: "关闭验证"
				},
				en: {
					popup_ready: "Complete verification below",
					popup_finish: "You will be redirected in 2 seconds",
					loading: "loading...",
					slide: "Drag the left slider to verify",
					refresh: "Refresh",
					feedback: "Feedback",
					fail: ["Unsuccessful:", "Complete the puzzles"],
					success: ["Success:", "Take secs and defeat score% users"],
					abuse: ["Excessive:", "Server is refreshing the image"],
					forbidden: ["Try Again:", "Wow~ Monster eats the image"],
					error: ["Server Error:", "Please try again later"],
					logo: "Provided by Geetest",
					f_slide: "_Drag_ the left slider to verify",
					close: "Close"
				},
				"zh-tw": {
					popup_ready: "請先完成下方驗證",
					popup_finish: "頁面將在2秒後跳轉",
					loading: "載入中...",
					slide: "拖動左邊滑塊完成上方拼圖",
					refresh: "刷新驗證",
					feedback: "幫助反饋",
					fail: ["驗證失敗:", "拖動滑塊將懸浮圖像正確拼合"],
					success: ["驗證通過:", "sec 秒的速度超過 score% 的用戶"],
					abuse: ["嘗試過多:", "系統正在自動刷新圖片"],
					forbidden: ["再來一次:", "哇哦～怪物吃了拼圖 3 秒後重試"],
					error: ["出現錯誤:", "請關閉驗證重試"],
					logo: "由極驗提供技術支持",
					f_slide: "請_拖動_下方滑塊進行拼圖",
					close: "關閉驗證"
				}
			};
			if("string" != typeof a) return b["zh-cn"];
			a = a.toLowerCase();
			var c = a.indexOf("-"),
				d = c > -1 ? a.slice(0, c) : a;
			return "zh" === d && (a.indexOf("tw") > -1 || a.indexOf("hk") > -1 ? d += "-tw" : d += "-cn"), b[d] || b["zh-cn"]
		},
		Ba = function() {
			var a = w.createElement("canvas"),
				b = a.getContext && a.getContext("2d"),
				c = /msie (?:9|10)\.0/i.test(B.userAgent);
			return b && !c
		}(),
		Ca = {
			".form": {
				"input.challenge": {},
				"input.validate": {},
				"input.seccode": {}
			},
			".widget": {
				".window": {
					"a.link.absolute": Ba ? {
						".slicebg.absolute": {
							"canvas.bg.absolute": {},
							".slice": {}
						},
						"canvas.fullbg.fade.absolute": {}
					} : {
						".slicebg.absolute": {
							".bg.absolute": {},
							".slice": {}
						},
						".fullbg.fade.absolute": {}
					},
					".flashlight.absolute": {},
					".loading.absolute": {
						".loading_icon": {},
						".loading_tip": {}
					},
					".result.enter": {
						".result_icon": {},
						".result_title": {},
						".result_content": {}
					}
				},
				".panel": {
					"a.close": {
						".close_tip": {}
					},
					"a.refresh": {
						".refresh_tip": {}
					},
					"a.feedback": {
						".feedback_tip": {}
					},
					"a.logo": {}
				}
			},
			".slider": {
				".slider_tip": {},
				".slider_button": {},
				".slider_status": {}
			}
		},
		Da = {
			".form": {
				"input.challenge": {},
				"input.validate": {},
				"input.seccode": {}
			},
			".wrap": {
				".widget": {
					".window": {
						"a.link": {
							".canvas_img.absolute": {
								".slicebg.absolute": {
									"canvas.canvas_bg.absolute": {},
									"canvas.canvas_slice.absolute": {}
								},
								"canvas.canvas_fullbg.fade.absolute": {}
							},
							".div_img.absolute": {
								".slicebg.absolute": {
									".div_bg.absolute": {},
									".div_slice.absolute": {}
								},
								".div_fullbg.fade.absolute": {}
							}
						},
						".refresh": {
							".refresh_tip": {}
						},
						".loading.absolute.fade": {
							".loading_icon": {},
							".loading_tip": {}
						},
						".result.absolute.fade": {
							".result_box": {
								".result_icon": {},
								".result_title": {},
								".result_content": {}
							}
						}
					}
				},
				".slider": {
					".slider_track": {
						".slider_tip.fade": {}
					},
					".slider_button": {}
				}
			},
			".panel": {
				".small": {
					"a.close": {
						".close_tip": {}
					},
					"a.refresh_1": {
						".refresh_icon": {},
						".refresh_tip": {}
					},
					"a.feedback": {
						".feedback_icon": {},
						".feedback_tip": {}
					}
				},
				"a.copyright": {
					".logo": {},
					".copyright_tip": {}
				}
			}
		},
		Ea = function(a) {
			return {
				".popup_ghost": {},
				".popup_box": {
					".popup_header": {
						"span.popup_tip": {},
						"span.popup_close": {}
					},
					".popup_wrap": a
				}
			}
		},
		Fa = function(a, b, c) {
			var d = a.split("."),
				e = d[0] || "div",
				f = new h(d).Ya(1).jb(function(a, b, c) {
					return R + a
				}).ac(" "),
				g = new j(e);
			return c("." + d[1], g), "input" == e && g.Dc({
				type: "hidden",
				name: f
			}), g._b({
				className: f
			}), ba(b) ? g.Dc({
				textContent: b
			}) : new i(b).sb(function(a, b) {
				g.bc(Fa(a, b, c))
			}), g
		};
	ha(r.prototype, u.prototype), ha(o.prototype, u.prototype), e.noConflict(a, p)
});