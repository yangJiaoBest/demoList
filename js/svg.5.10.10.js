Geetest.define("SVG", ["Global", "getLang", "Data", "Event", "Dom", "DomEvent", "Decoder", "Tool", "Analyse", "Request", "Slide", "Input", "getModule", "Flow"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
	var o = function(a, b) {
			for(var c = [], d = 0, e = a.length; d < e; d += 1) c[d] = b(a[d]);
			return c
		},
		p = function(a) {
			return function(b) {
				var d = c.t("status", a.id);
				if("ready" == d && "slide" == a.config.type && 2 != b.button) {
					if(c.G("status", "moving", a.id), b.preventDefault ? b.preventDefault() : b.returnValue = !1, a.config.fullpage) {
						var e = m("Fullpage");
						e.g(a), e.i()
					}
					"pointerdown" !== b.type || c.t("pointerdown", a.id) || c.G("pointerdown", !0, a.id), c.G("startTime", (new Date).getTime(), a.id);
					var f = c.t("eles", a.id);
					D.Ba({
						hide: [f.useFullbg, f.refresh],
						active: [f.slider]
					}), E.j(300, F.Ca(f), function() {
						D.Ba({
							hide: [f.slideText]
						})
					}), c.G("setLeft", 0, a.id), c.G("moveConsole", E.j(-1, x(a)), a.id);
					var g = a.dom.getBoundingClientRect(),
						h = (g.right - g.left) / B.bb;
					c.G("scale", h, a.id);
					var j = (b.clientX || b.changedTouches && b.changedTouches[0].clientX) / h,
						k = (b.clientY || b.changedTouches && b.changedTouches[0].clientY) / h,
						l = f.slider.getBoundingClientRect();
					c.G("startX", j, a.id), c.G("startY", k, a.id), i.c([Math.round(l.left / h - j), Math.round(l.top / h - k), 0], a.id), i.na([0, 0, 0], a.id)
				}
			}
		},
		q = function(a) {
			return function(b) {
				var d = c.t("status", a.id);
				if("moving" == d && "slide" == a.config.type && (!c.t("pointerdown", a.id) || "pointermove" === b.type)) {
					b.preventDefault ? b.preventDefault() : b.returnValue = !1;
					var e = c.t("startX", a.id),
						f = c.t("startY", a.id),
						g = c.t("scale", a.id),
						h = (b.changedTouches && b.changedTouches[0].clientX || b.clientX) / g - e,
						j = f - (b.changedTouches && b.changedTouches[0].clientY || b.clientY) / g,
						k = parseInt(h);
					k < B.ya ? k = B.ya : k > B.sa && (k = B.sa), c.G("setLeft", k, a.id), i.na([Math.round(h), Math.round(j), (new Date).getTime() - c.t("startTime", a.id)], a.id)
				}
			}
		},
		r = function(a) {
			return function(b) {
				var d = c.t("status", a.id);
				if("moving" == d && "slide" == a.config.type && (!c.t("pointerdown", a.id) || "pointerup" === b.type)) {
					if(a.config.fullpage) {
						var e = m("Fullpage");
						e.j()
					}
					c.G("status", "lock", a.id);
					var f = c.t("startX", a.id),
						g = c.t("startY", a.id),
						l = c.t("scale", a.id),
						n = (b.changedTouches && b.changedTouches[0].clientX || b.clientX) / l - f,
						o = g - (b.changedTouches && b.changedTouches[0].clientY || b.clientY) / l,
						p = new Date;
					c.G("endTime", p, a.id), i.na([Math.round(n), Math.round(o), p.getTime() - c.t("startTime", a.id)], a.id);
					var q = parseInt(n),
						r = i.qa(a.id);
					if(E.Da(c.t("moveConsole", a.id)), setTimeout(function() {
							if(!c.t("verifyStart", a.id)) {
								var b;
								b = q < 130 ? "right" : "left", c.G("verifyConsole", E.j(-1, F.Ea(a, b)), a.id)
							}
						}, 500), a.config.offline) {
						var s = m("Offline");
						return void v.call(a, !1, s.ajax(q, c.t("endTime", a.id).getTime() - c.t("startTime", a.id), a))
					}
					j(a.config.api_server + "/ajax.php?" + h.toParam({
						gt: a.config.gt,
						challenge: a.config.challenge,
						userresponse: k.ra(q, a.config.challenge),
						passtime: c.t("endTime", a.id).getTime() - c.t("startTime", a.id),
						imgload: c.t("imgload", a.id),
						a: encodeURIComponent(r)
					}), v, a)
				}
			}
		},
		s = function(a, b) {
			var d = c.t("successText", a.id),
				e = (c.t("endTime", a.id).getTime() - c.t("startTime", a.id)) / 1e3,
				f = e.toFixed(1),
				g = 100 - c.t("score", a.id);
			y.Fa(b, d.replace("sec", String(f)).replace("score", String(g)))
		},
		t = function(a) {
			var b = a.to - a.from,
				c = {
					easeIn: function(b) {
						return Math.pow(b / a.time, 2)
					},
					easeOut: function(b) {
						return Math.sqrt(b / a.time)
					},
					linear: function(b) {
						return b / a.time
					}
				},
				d = c[a.name];
			return function(c) {
				return a.from + d(c) * b
			}
		},
		u = function(a, b, c, d) {
			"success" === c ? D.Ba({
				show: [b.success, b.useFullbg]
			}) : "fail" === c && D.Ba({
				show: [b.fail]
			}), E.j(1e3, F.Ga({
				eles: [b[c]],
				from: 0,
				to: .9,
				time: 300
			}), function() {
				var e;
				e = "fail" === c ? function(d) {
					F.Ga({
						eles: [b[c]],
						from: .9,
						to: 0,
						time: 300
					})(d), F.Ha(a)(d)
				} : F.Ga({
					eles: [b[c]],
					from: .9,
					to: 0,
					time: 300
				}), E.j(300, e, function() {
					"success" === c ? D.Ba({
						show: [b.refresh],
						hide: [b.success]
					}) : "fail" === c && D.Ba({
						show: [b.slideText]
					}), d && d()
				})
			})
		},
		v = function(a, b) {
			var e = this;
			c.G("verifyStart", !0, e.id);
			var f = c.t("eles", e.id);
			if(D.Ba({
					hide: [f.verify]
				}), E.Da(c.t("verifyConsole", e.id)), b && b.success || D.Ba({
					normal: [f.slider]
				}), a || "error" === b.message) E.j(1500, F.Ia(f), function() {
				c.G("status", "error", e.id), d.v("error", e.id)
			});
			else if(b.success) {
				c.G("score", b.score, e.id), s(e, f.successText), l.la(b.validate, e);
				var g = e.config.callback_delay;
				setTimeout(function() {
					d.v("success", e.id)
				}, "number" == typeof g ? g : 1300), u(e, f, "success", function() {
					c.G("status", "success", e.id)
				})
			} else "fail" == b.message ? u(e, f, "fail", function() {
				D.Ba({
					show: [f.refresh],
					hide: [f.fail],
					nonTransparent: [f.slideText]
				}), c.G("status", "ready", e.id), d.v("fail", e.id)
			}) : "forbidden" == b.message ? (d.v("forbidden", e.id), E.j(3e3, F.Ja(f, c.t("forbiddenText", e.id)), function() {
				c.G("status", "auto", e.id), e.refresh()
			})) : "abuse" == b.message && (d.v("abuse", e.id), E.j(1500, F.Ka(f), function() {
				c.G("status", "auto", e.id), e.refresh()
			}))
		},
		w = function(a) {
			var b = c.t("eles", a.id);
			d.B("SvgError", function() {
				E.j(1500, F.Ia(b), function() {
					c.G("status", "error", a.id), D.Ba({
						hide: [b.verify]
					}), E.Da(c.t("verifyConsole", a.id))
				})
			}, a.id), f.e(b.slider, "down", p(a)), f.e(document, "move", q(a)), f.e(document, "up", r(a)), f.e(document, "cancel", r(a))
		},
		x = function(a) {
			var b = c.t("eles", a.id),
				d = B.ya;
			return function() {
				var e = c.t("setLeft", a.id);
				d !== e && (d = e, y.La(b.slice, d + a.config.xpos), y.La(b.slider, d + B.Ma))
			}
		},
		y = {};
	y.Na = "http://www.w3.org/2000/svg", y.Oa = "http://www.w3.org/1999/xlink", y.Pa = function(a) {
		return document.createElementNS(y.Na, a)
	}, y.Fa = function(a, b) {
		a.childNodes[0].data = b
	}, y.Qa = function(a) {
		return function(b, c) {
			h.isArray(b) || (b = [b]), o(b, function(b) {
				for(var d in c) c.hasOwnProperty(d) && a(b, d, c[d])
			})
		}
	}, y.Ra = y.Qa(function(a, b, c) {
		b.indexOf("xlink:") > -1 ? a.setAttributeNS(y.Oa, b, c) : a.setAttribute(b, c)
	}), y.Sa = function(a, b) {
		o(a, function(a) {
			o(b, function(b) {
				b.indexOf("xlink:") > -1 ? a.removeAttributeNS(y.Oa, b) : a.removeAttribute(b)
			})
		})
	}, y.Ta = y.Qa(function(a, b, c) {
		"undefined" == typeof a[b].baseVal.value ? a[b].baseVal = c : a[b].baseVal.value = c
	}), y.Ua = y.Qa(function(a, b, c) {
		a.style[b] = c
	}), y.P = function(a, b) {
		a.appendChild(b)
	}, y.Va = function(a) {
		return a.transform.baseVal.getItem(0).matrix.e
	}, y.Wa = function(a, b, c) {
		"number" == typeof b && (a.transform.baseVal.getItem(0).matrix.e = b), "number" == typeof c && (a.transform.baseVal.getItem(0).matrix.f = c)
	}, y.La = function(a, b) {
		a.transform.baseVal.getItem(0).matrix.e = b
	}, y.Xa = function(a, b) {
		a.transform.baseVal.getItem(0).matrix.f = b
	}, y.Ya = function(a, b, c, d) {
		a.transform.baseVal.getItem(0).setRotate(b, c, d)
	};
	var z = function() {
			if(0 === document.getElementsByTagName("base").length) return "";
			var a = location.href,
				b = a.indexOf("#");
			return b > -1 && (a = a.slice(0, b)), a
		},
		A = function() {
			var a = function(a, b, c, d, e) {
					var f = {
							tag: "rect",
							value: {}
						},
						g = {
							tag: "clipPath",
							id: "gt_clip_" + d + "_" + e,
							sub: []
						};
					return f.value.x = c.cx, f.value.y = c.cy, f.value.width = b, f.value.height = a, g.sub[0] = f, g
				},
				b = function(b, c) {
					for(var d = {
							name: "clips",
							tag: "defs",
							sub: []
						}, e = b.all, f = 0, g = e.length; f < g; f += 1) d.sub.push(a(b.h, b.w, e[f], f, c));
					return d
				},
				c = function(a, b, c) {
					return {
						tag: "g",
						sub: [{
							tag: "image",
							value: {
								x: b.ix,
								y: b.iy,
								width: 0,
								height: 0
							},
							atts: {
								"clip-path": 'url("' + z() + "#gt_clip_" + a + "_" + c + '")'
							}
						}]
					}
				},
				d = function(a, b, d) {
					for(var e = a.all, f = {
							name: b,
							id: "gt_" + b + "_" + d,
							tag: "g",
							sub: []
						}, g = {
							tag: "defs",
							sub: [f]
						}, h = 0, i = e.length; h < i; h += 1) f.sub.push(c(h, e[h], d));
					return g
				},
				e = function(a, b, c) {
					var d = y.Pa(a.tag);
					if(c || "svg" !== a.tag || (c = d), "text" === a.tag && d.appendChild(document.createTextNode(a.text)), a.value && y.Ta(d, a.value), a.style && y.Ua(d, a.style), a.atts && y.Ra(d, a.atts), a.href && (d.href = a.href), a.id && (d.id = a.id), a.name && (b[a.name] = d), a.sub)
						for(var f = 0, g = a.sub.length; f < g; f += 1) y.P(d, e(a.sub[f], b, c));
					return d
				};
			return {
				Za: b,
				$a: d,
				_a: e
			}
		}(),
		B = {
			ab: 0,
			bb: 260,
			Ma: 6,
			cb: 4,
			ya: 0,
			sa: 200,
			db: "#55C6F0",
			eb: "#AAAAAA"
		},
		C = {
			".gt_input": {
				"input.geetest_challenge": {},
				"input.geetest_validate": {},
				"input.geetest_seccode": {}
			}
		},
		D = {};
	D.Ba = function(a) {
		a.transparent && o(a.transparent, function(a) {
			y.Ua(a, {
				fillOpacity: "0",
				strokeOpacity: "0"
			})
		}), a.nonTransparent && o(a.nonTransparent, function(a) {
			y.Ua(a, {
				fillOpacity: "1",
				strokeOpacity: "1"
			})
		}), a.active && o(a.active, function(a) {
			y.Ua(a, {
				stroke: B.db
			})
		}), a.normal && o(a.normal, function(a) {
			y.Ua(a, {
				stroke: B.eb
			})
		}), a.show && o(a.show, function(a) {
			y.Ua(a, {
				display: "inline"
			})
		}), a.hide && o(a.hide, function(a) {
			y.Ua(a, {
				display: "none"
			})
		})
	}, D.fb = function(a, b) {
		var d, e, f, g = c.t("eles", a.id);
		for(d = g.bg.childNodes, e = d.length / 2, f = 0; f < e; f += 1) y.Ta([d[f].firstChild, d[f + e].firstChild], {
			href: b.bg.src,
			width: b.bg.width,
			height: b.bg.height
		});
		if(b.fullbg)
			for(d = g.fullbg.childNodes, f = 0; f < e; f += 1) y.Ta([d[f].firstChild, d[f + e].firstChild], {
				href: b.fullbg.src,
				width: b.fullbg.width,
				height: b.fullbg.height
			});
		y.Ta(g.slice, {
			href: b.slice.src,
			width: b.slice.width,
			height: b.slice.height
		})
	}, D.gb = function(a) {
		var b = c.t("oldHeight", a.id),
			d = a.config.height;
		if(b !== d) {
			c.G("oldHeight", d, a.id);
			var e = c.t("eles", a.id);
			c.t("scale", a.id);
			e.svg.setAttribute("viewBox", "0 0 260 " + (d + c.t("panelHeight", a.id))), y.Wa(e.panel, null, a.config.height);
			var f, g, h;
			for(f = e.clips.childNodes, h = f.length / 2, g = 0; g < h; g += 1) y.Ta(f[g].firstChild, {
				height: d / 2 + 1,
				y: 0
			}), y.Ta(f[g + h].firstChild, {
				height: d / 2 + 1,
				y: d / 2
			});
			for(f = e.fullbg.childNodes, g = 0; g < h; g += 1) y.Ta(f[g].firstChild, {
				y: -d / 2
			}), y.Ta(f[g + h].firstChild, {
				y: d / 2
			});
			for(f = e.bg.childNodes, g = 0; g < h; g += 1) y.Ta(f[g].firstChild, {
				y: -d / 2
			}), y.Ta(f[g + h].firstChild, {
				y: d / 2
			});
			var i = ["success", "fail", "forbidden", "abuse", "error", "loading"];
			o(i, function(a) {
				y.Ta(e[a + "Rect"], {
					height: d
				}), y.Wa(e[a + "Content"], null, d / 2 - 58)
			}), a.zoom(a.config.width || B.bb)
		}
	}, D.hb = function(a, b) {
		var d = c.t("eles", a.id);
		b < B.ya ? b = B.ya : b > B.sa && (b = B.sa), y.Wa(d.slider, b + B.Ma, B.cb), y.Wa(d.slice, b + a.config.xpos, a.config.ypos)
	};
	var E = function() {
			var a = function() {
					var a = (new Date).getTime();
					return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(b) {
						var c = (new Date).getTime(),
							d = Math.max(0, 16 - (c - a)),
							e = window.setTimeout(function() {
								b(c + d)
							}, d);
						return a = c + d, e
					}
				}(),
				b = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || clearTimeout,
				c = function(b, c, d) {
					var e = {
							id: null,
							start: null
						},
						f = function(g) {
							var h = g - e.start;
							return c(b >= 0 && h >= b ? b : h), b >= 0 && h >= b ? void(d && d()) : void(e.id = a(f))
						};
					return e.id = a(function(a) {
						e.start = a, f(a)
					}), e
				},
				d = function(a) {
					a && b(a.id)
				};
			return {
				j: c,
				Da: d
			}
		}(),
		F = function() {
			var a = function(a) {
					var b = a.to - a.from,
						c = function(c) {
							return String(a.from + (a.from < a.to ? Math.sqrt(c / a.time) : Math.pow(c / a.time, 2)) * b)
						};
					return function(b) {
						if(!(b > a.time)) {
							var d = c(b);
							o(a.eles, function(a) {
								y.Ua(a, {
									fillOpacity: d,
									strokeOpacity: d
								})
							})
						}
					}
				},
				b = function(b) {
					var c = a({
							eles: [b.loading],
							from: 1,
							to: 0,
							time: 500
						}),
						d = a({
							eles: [b.refresh, b.slideText],
							from: 0,
							to: 1,
							time: 500
						});
					return function(a) {
						c(a), d(a)
					}
				},
				d = function(a) {
					var b = t({
						name: "linear",
						from: c.t("setLeft", a.id) || 0,
						to: 0,
						time: 300
					});
					return function(c) {
						D.hb(a, b(c))
					}
				},
				e = function(b) {
					return D.Ba({
						show: [b.abuse]
					}), a({
						eles: [b.abuse],
						from: 0,
						to: .9,
						time: 600
					})
				},
				f = function(b, c) {
					D.Ba({
						show: [b.forbidden]
					});
					var d = a({
							eles: [b.forbidden],
							from: 0,
							to: .9,
							time: 600
						}),
						e = 4;
					return function(a) {
						d(a), a <= 1e3 && 4 === e ? (y.Fa(b.forbiddenText, c.replace("count", "3")), e = 3) : a > 1e3 && a <= 2e3 && 3 === e ? (y.Fa(b.forbiddenText, c.replace("count", "2")), e = 2) : a > 2e3 && 2 === e && (y.Fa(b.forbiddenText, c.replace("count", "1")), e = 1)
					}
				},
				g = function(b) {
					return D.Ba({
						show: [b.error]
					}), a({
						eles: [b.error],
						from: 0,
						to: .9,
						time: 600
					})
				},
				h = function(b) {
					return a({
						eles: [b.slideText],
						from: 1,
						to: 0,
						time: 300
					})
				},
				i = function(a) {
					var b = 800,
						c = 360 / b;
					return function(d) {
						var e = d % b * c;
						y.Ya(a.loadingCircle, e, 130, 38)
					}
				},
				j = function(a, b) {
					var d = c.t("eles", a.id);
					D.Ba({
						show: [d.verify]
					});
					var e = 400,
						f = 4 * e,
						g = d.verify.childNodes,
						h = 0,
						i = !1;
					"left" === b ? y.Wa(d.verify, 20, 23) : "right" === b && y.Wa(d.verify, 200, 23);
					var j = function(a) {
						for(var b = 0; b < a; b += 1) y.Ua(g[b], {
							fillOpacity: "1"
						});
						for(var c = a; c < 3; c += 1) y.Ua(g[c], {
							fillOpacity: "0"
						})
					};
					return function(a) {
						a %= f, a >= 0 && a < e ? 1 !== h && (h = 1, i = !0) : a >= e && a < 2 * e ? 2 !== h && (h = 2, i = !0) : a >= 2 * e && a < 3 * e ? 3 !== h && (h = 3, i = !0) : a >= 3 * e && a < 4 * e && 0 !== h && (h = 0, i = !0), i && (j(h), i = !1)
					}
				};
			return {
				Ga: a,
				S: i,
				xa: b,
				Ha: d,
				Ka: e,
				Ja: f,
				Ia: g,
				Ea: j,
				Ca: h
			}
		}();
	y.ib = function(a) {
		var d = c.t("eles", a.id),
			e = b(a.config.lang);
		c.G("successText", e.success[1], a.id), c.G("forbiddenText", e.forbidden[1], a.id), d.loadingTitle.childNodes[0].data = e.loading, d.slideText.childNodes[0].data = e.slide, d.feedbackText.childNodes[0].data = e.feedback, d.successTitle.childNodes[0].data = e.success[0].replace(":", ""), d.successText.childNodes[0].data = e.success[1], d.failTitle.childNodes[0].data = e.fail[0].replace(":", ""), d.failText.childNodes[0].data = e.fail[1], d.forbiddenTitle.childNodes[0].data = e.forbidden[0].replace(":", ""), d.forbiddenText.childNodes[0].data = e.forbidden[1], d.abuseTitle.childNodes[0].data = e.abuse[0].replace(":", ""), d.abuseText.childNodes[0].data = e.abuse[1], d.errorTitle.childNodes[0].data = e.error[0].replace(":", ""), d.errorText.childNodes[0].data = e.error[1]
	};
	var G = {};
	G.c = function(b) {
		B.ab += 1;
		var d = b.$;
		b.dom = e.H(C, !1, d);
		var f = a.mobileSkins[b.config.theme],
			i = g.ga(0),
			j = A.Za(i, B.ab),
			k = A.$a(i, "fullbg", B.ab),
			l = A.$a(i, "bg", B.ab);
		c.G("svgCount", B.ab, b.id);
		var m = {
			name: "link",
			tag: "a",
			value: {
				target: "_blank"
			},
			sub: [{
				name: "useGhost",
				tag: "use",
				value: {
					y: 1
				}
			}, {
				name: "useBg",
				tag: "use"
			}, f.slice, {
				name: "useFullbg",
				tag: "use"
			}]
		};
		c.G("panelHeight", 90, b.id), b.config.logo ? (f.homepage.value.href = a.homepage, f.homepage.style.display = "inline") : f.homepage.style.display = "none", "" !== b.config.feedback ? f.feedback.value.href = b.config.feedback : (f.feedback.style || (f.feedback.style = {}), f.feedback.style.display = "none", b.config.logo || c.G("panelHeight", 56, b.id));
		var n = {
				name: "svg",
				tag: "svg",
				style: {
					display: "block",
					position: "absolute",
					top: "0",
					left: "0",
					width: "100%",
					height: "100%",
					margin: "0",
					overflow: "hidden",
					backgroundColor: "#FFFFFF"
				},
				sub: [f.loadingDefs, j, l, k, m, f.refresh, f.loading, f.success, f.fail, f.forbidden, f.abuse, f.error, f.panel]
			},
			o = {};
		A._a(n, o, null), c.G("eles", o, b.id), b.config.logo && h.getResource(b, b.config.theme + "/logo." + b.config.theme_version + ".png", function(a, b) {
			return a ? (h.log("svg logo not loaded"), void y.Ua(o.homepage, {
				display: "none"
			})) : void y.Ta(o.logo, {
				href: b.src
			})
		}), b.dom.style.height = "0", b.dom.style.position = "relative", b.dom.appendChild(o.svg), y.ib(b), c.G("oldHeight", 0, b.id), w(b), c.G("status", "init", b.id), h.isArray(window.GeeTest) || (window.GeeTest = []), window.GeeTest.push(b)
	}, G.S = function(a) {
		var b = c.t("eles", a.id),
			d = E.j(-1, F.S(b));
		c.G("loadingConsole", d, a.id), y.Ra([b.useGhost, b.useBg, b.useFullbg], {
			"xlink:href": ""
		}), D.Ba({
			hide: [b.refresh, b.success, b.fail, b.forbidden, b.abuse, b.error, b.slideText],
			transparent: [b.success, b.fail, b.forbidden, b.abuse, b.error],
			show: [b.loading, b.useFullbg],
			nonTransparent: [b.loading],
			normal: [b.slider]
		})
	};
	var H = function(a, b, d) {
			var e = c.t("eles", a.id);
			D.hb(a, B.ya), D.fb(a, b), y.Ra([e.useFullbg], {
				"xlink:href": z() + "#gt_fullbg_" + c.t("svgCount", a.id)
			}), y.Ra([e.useGhost, e.useBg], {
				"xlink:href": z() + "#gt_bg_" + c.t("svgCount", a.id)
			}), D.Ba({
				transparent: [e.refresh, e.slideText],
				show: [e.refresh, e.slideText]
			}), E.Da(c.t("loadingConsole", a.id)), E.j(500, F.xa(e), function() {
				D.Ba({
					hide: [e.loading]
				}), c.G("imgload", d, a.id), c.G("status", "ready", a.id)
			})
		},
		I = function(a) {
			for(var b = a.dom.parentNode; b && b !== document.body && "none" !== getComputedStyle(b).display && "hidden" !== getComputedStyle(b).visibility;) b = b.parentNode;
			return b !== document.body
		},
		J = function(a, b) {
			setTimeout(function() {
				I(a) ? J(a, b) : b()
			}, 10)
		};
	return G.R = function(a) {
		D.gb(a);
		var b = c.t("eles", a.id);
		a.config.link ? y.Ra([b.link], {
			"xlink:href": a.config.link
		}) : y.Sa([b.link], ["xlink:href"]), e.ca(a, {
			fullbg: a.config.fullbg,
			bg: a.config.bg,
			slice: a.config.slice
		}, function(b, c) {
			I(a) ? J(a, function() {
				H(a, b, c)
			}) : H(a, b, c)
		})
	}, G
});