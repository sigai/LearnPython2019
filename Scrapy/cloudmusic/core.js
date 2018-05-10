(function() {
	window.NEJ = window.NEJ || {};
	NEJ.O = {};
	NEJ.R = [];
	NEJ.F = function() {
		return !1
	};
	NEJ.P = function(DC4G) {
		if (!DC4G || !DC4G.length) return null;
		var bem5r = window;
		for (var a = DC4G.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; bem5r = bem5r[a[i]] = bem5r[a[i]] || {}, i++);
		return bem5r
	};
	NEJ.Q = function(bL4P, DC4G) {
		bL4P = bL4P || NEJ.O;
		var bs4w = DC4G.split(".");
		for (var i = 0, l = bs4w.length; i < l; i++) {
			bL4P = bL4P[bs4w[i]];
			if (!bL4P) break
		}
		return bL4P
	};
	NEJ.C = function() {
		var bJD3x = function() {
				return NEJ.O.toString.call(arguments[0]) != "[object Function]"
			};
		var bEl2x = function(D4H, bz4D) {
				for (var x in bz4D) if (D4H == bz4D[x]) return x;
				return null
			};
		var byb0x = {
			cw5B: 0,
			bl4p: 1,
			bC4G: 2,
			bW4a: 3,
			bJ4N: 4,
			fe6Y: 5,
			kg8Y: 6,
			eD6x: 7
		},
			us1x = {
				cE5J: 0,
				bn4r: 1,
				bF4J: 2,
				ci4m: 3,
				bQ4U: 4,
				gM7F: 5,
				lq8i: 6,
				gj6d: 7
			};
		return function() {
			var fP6J = function() {
					this.bEI2x();
					return this.cw5B.apply(this, arguments)
				};
			fP6J.prototype.bEI2x = NEJ.F;
			fP6J.prototype.cw5B = NEJ.F;
			fP6J.N4R = function(BM3x, bKv3x) {
				if (bJD3x(BM3x)) return;
				if (bKv3x == null || !! bKv3x) NEJ.X(this, BM3x, bJD3x);
				this.bWb7U = BM3x;
				this.cs5x = BM3x.prototype;
				var bI4M = function() {};
				bI4M.prototype = BM3x.prototype;
				this.prototype = new bI4M;
				var DF4J = this.prototype;
				DF4J.constructor = this;
				var cl4p;
				for (var x in byb0x) {
					cl4p = bEl2x(byb0x[x], us1x);
					if (!cl4p || !this.cs5x[x]) continue;
					DF4J[x] = function(W4a) {
						return function() {
							this[W4a].apply(this, arguments)
						}
					}(cl4p)
				}
				var DG4K = {};
				for (var x in us1x) {
					cl4p = bEl2x(us1x[x], byb0x);
					if (!cl4p || !this.cs5x[cl4p]) continue;
					DG4K[cl4p] = BM3x;
					DF4J[x] = function(W4a) {
						return function() {
							var m4q, bI4M = this.bxT0x[W4a],
								bag3x = bI4M.prototype[W4a];
							this.bxT0x[W4a] = bI4M.bWb7U || BM3x;
							if ( !! bag3x) m4q = bag3x.apply(this, arguments);
							this.bxT0x[W4a] = BM3x;
							return m4q
						}
					}(cl4p)
				}
				DF4J.bEI2x = function() {
					this.bxT0x = NEJ.X({}, DG4K)
				};
				DF4J.cKt8l = DF4J.cE5J;
				return DF4J
			};
			return fP6J
		}
	}();
	NEJ.X = function(gq6k, bR4V, dZ6T) {
		if (!gq6k || !bR4V) return gq6k;
		dZ6T = dZ6T || NEJ.F;
		for (var x in bR4V) {
			if (bR4V.hasOwnProperty(x) && !dZ6T(bR4V[x], x)) gq6k[x] = bR4V[x]
		}
		return gq6k
	};
	NEJ.EX = function(gq6k, bR4V) {
		if (!gq6k || !bR4V) return gq6k;
		for (var x in gq6k) {
			if (gq6k.hasOwnProperty(x) && bR4V[x] != null) gq6k[x] = bR4V[x]
		}
		return gq6k
	};
	var Ij5o = Function.prototype;
	Ij5o.eH6B = function(lM8E, wJ2x) {
		var f = NEJ.F,
			wJ2x = wJ2x || f,
			lM8E = lM8E || f,
			dx5C = this;
		return function() {
			var d4h = {
				args: NEJ.R.slice.call(arguments, 0)
			};
			lM8E(d4h);
			if (!d4h.stopped) {
				d4h.value = dx5C.apply(this, d4h.args);
				wJ2x(d4h)
			}
			return d4h.value
		}
	};
	Ij5o.f4j = function() {
		var bf4j = arguments,
			gq6k = arguments[0],
			bxO0x = this;
		return function() {
			var tG1x = NEJ.R.slice.call(bf4j, 1);
			NEJ.R.push.apply(tG1x, arguments);
			return bxO0x.apply(gq6k || window, tG1x)
		}
	};
	Ij5o.eA6u = function() {
		var bf4j = arguments,
			gq6k = NEJ.R.shift.call(bf4j),
			bxO0x = this;
		return function() {
			NEJ.R.push.apply(arguments, bf4j);
			return bxO0x.apply(gq6k || window, arguments)
		}
	};
	var Ij5o = String.prototype;
	if (!Ij5o.trim) {
		Ij5o.trim = function() {
			var df5k = /(?:^\s+)|(?:\s+$)/g;
			return function() {
				return this.replace(df5k, "")
			}
		}()
	}
	if (!window.MWF) window.MWF = NEJ;
	if (!window.mwf) window.mwf = NEJ.P("nej");
	if (!window.console) {
		NEJ.P("console").log = NEJ.F;
		NEJ.P("console").error = NEJ.F
	}
	var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		O4S = c3x("nej.p"),
		wg2x = window.navigator.platform,
		uA1x = window.navigator.userAgent;
	var lt8l = {
		mac: wg2x,
		win: wg2x,
		linux: wg2x,
		ipad: uA1x,
		ipod: uA1x,
		iphone: wg2x,
		android: uA1x
	};
	O4S.Ik5p = lt8l;
	for (var x in lt8l) lt8l[x] = (new RegExp(x, "i")).test(lt8l[x]);
	lt8l.ios = lt8l.ipad || lt8l.iphone || lt8l.ipod;
	lt8l.tablet = lt8l.ipad;
	lt8l.desktop = lt8l.mac || lt8l.win || lt8l.linux && !lt8l.android;
	var iC7v = {
		engine: "unknow",
		release: "unknow",
		browser: "unknow",
		version: "unknow",
		prefix: {
			css: "",
			pro: "",
			clz: ""
		}
	};
	O4S.dr5w = iC7v;
	if (/msie\s+(.*?);/i.test(uA1x) || /trident\/.+rv:([\d\.]+)/i.test(uA1x)) {
		iC7v.engine = "trident";
		iC7v.browser = "ie";
		iC7v.version = RegExp.$1;
		iC7v.prefix = {
			css: "ms",
			pro: "ms",
			clz: "MS",
			evt: "MS"
		};
		var mM9D = {
			6: "2.0",
			7: "3.0",
			8: "4.0",
			9: "5.0",
			10: "6.0",
			11: "7.0"
		};
		iC7v.release = mM9D[document.documentMode] || mM9D[parseInt(iC7v.version)]
	} else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(uA1x)) {
		iC7v.engine = "webkit";
		iC7v.release = RegExp.$1 || "";
		iC7v.prefix = {
			css: "webkit",
			pro: "webkit",
			clz: "WebKit"
		}
	} else if (/rv\:(.*?)\)\s+gecko\//i.test(uA1x)) {
		iC7v.engine = "gecko";
		iC7v.release = RegExp.$1 || "";
		iC7v.browser = "firefox";
		iC7v.prefix = {
			css: "Moz",
			pro: "moz",
			clz: "Moz"
		};
		if (/firefox\/(.*?)(?=\s|$)/i.test(uA1x)) iC7v.version = RegExp.$1 || ""
	} else if (/presto\/(.*?)\s/i.test(uA1x)) {
		iC7v.engine = "presto";
		iC7v.release = RegExp.$1 || "";
		iC7v.browser = "opera";
		iC7v.prefix = {
			css: "O",
			pro: "o",
			clz: "O"
		};
		if (/version\/(.*?)(?=\s|$)/i.test(uA1x)) iC7v.version = RegExp.$1 || ""
	}
	if (iC7v.browser == "unknow") {
		var mM9D = ["chrome", "maxthon", "safari"];
		for (var i = 0, l = mM9D.length, W4a; i < l; i++) {
			W4a = mM9D[i] == "safari" ? "version" : mM9D[i];
			if ((new RegExp(W4a + "/(.*?)(?=\\s|$)", "i")).test(uA1x)) {
				iC7v.browser = mM9D[i];
				iC7v.version = RegExp.$1.trim();
				break
			}
		}
	}
	O4S.bMe4i = {};
	var bah3x = iC7v.engine != "trident";
	O4S.nB9s = {
		gecko: iC7v.engine != "gecko",
		webkit: iC7v.engine != "webkit",
		presto: iC7v.engine != "presto",
		trident0: bah3x || iC7v.release > "2.0",
		trident1: bah3x || iC7v.release < "6.0",
		trident2: bah3x || iC7v.release > "3.0",
		trident: bah3x || iC7v.release >= "6.0"
	}
})();
(function() {
	var iB7u = NEJ.P("nej.c"),
		R4V = {};
	var bxD0x = function() {
			var df5k = /^([\w]+?:\/\/.*?(?=\/|$))/i;
			return function(Y4c) {
				Y4c = Y4c || "";
				if (df5k.test(Y4c)) return RegExp.$1;
				return location.protocol + "//" + location.host
			}
		}();
	var Qt0x = function() {
			var bOK4O = function(i4m, bz4D) {
					if (!i4m || !i4m.length) return;
					for (var i = 0, l = i4m.length, jR8J; i < l; i++) {
						jR8J = i4m[i];
						if (jR8J.indexOf("://") > 0) bz4D[bxD0x(jR8J)] = jR8J
					}
				};
			var bh4l = {
				portrait: {
					name: "portrait",
					dft: "portrait/"
				},
				"ajax.swf": {
					name: "ajax",
					dft: "nej_proxy_flash.swf"
				},
				"chart.swf": {
					name: "chart",
					dft: "nej_flex_chart.swf"
				},
				"audio.swf": {
					name: "audio",
					dft: "nej_player_audio.swf"
				},
				"video.swf": {
					name: "video",
					dft: "nej_player_video.swf"
				},
				"clipboard.swf": {
					name: "clipboard",
					dft: "nej_clipboard.swf"
				}
			};
			return function(bR4V) {
				iB7u.It5y("root", bR4V.root || "/res/");
				var bxb0x, fZ6T = iB7u.B4F("root");
				for (var x in bh4l) {
					bxb0x = bh4l[x];
					iB7u.It5y(x, bR4V[bxb0x.name] || fZ6T + bxb0x.dft)
				}
				var CY4c = bR4V.p_csrf;
				if (CY4c == !0) {
					CY4c = {
						cookie: "AntiCSRF",
						param: "AntiCSRF"
					}
				}
				iB7u.It5y("csrf", NEJ.EX({
					cookie: "",
					param: ""
				}, CY4c));
				R4V.frames = {};
				bOK4O(bR4V.p_frame, R4V.frames);
				R4V.flashs = {};
				bOK4O(bR4V.p_flash, R4V.flashs)
			}
		}();
	iB7u.It5y = function(K4O, D4H) {
		R4V[K4O] = D4H
	};
	iB7u.B4F = function(K4O) {
		return R4V[K4O]
	};
	iB7u.bWh7a = function(Y4c) {
		var qk0x = bxD0x(Y4c);
		return R4V.frames[qk0x] || qk0x + "/res/nej_proxy_frame.html"
	};
	iB7u.bWi7b = function(Y4c) {
		return R4V.flashs[bxD0x(Y4c)]
	};
	Qt0x(window.NEJ_CONF || NEJ.O)
})();
(function() {
	var c3x = NEJ.P,
		O4S = c3x("nej.p"),
		iB7u = c3x("nej.c"),
		bR4V = window.NEJ_CONF || NEJ.O;
	if (O4S.nB9s.trident) return;
	iB7u.It5y("storage.swf", bR4V.storage || iB7u.B4F("root") + "nej_storage.swf");
	if (O4S.dr5w.release < "4.0") {
		iB7u.It5y("blank.png", bR4V.blank || iB7u.B4F("root") + "nej_blank.gif")
	}
	var i4m = bR4V.xdr,
		gL7E = /^(https?:\/\/.*?)(?=\/|$)/i,
		kn8f = /[\/?=&]/i;
	var bJG3x = function(Y4c) {
			return (gL7E.test(Y4c) ? RegExp.$1 : "").toLowerCase()
		};
	if ( !! i4m && !! i4m.length) for (var i = i4m.length - 1, Y4c, K4O; i >= 0; i--) {
		Y4c = i4m[i];
		K4O = bJG3x(Y4c);
		if ( !! K4O) iB7u.It5y(K4O, Y4c)
	}
	iB7u.cKo7h = function(Y4c) {
		var K4O = bJG3x(Y4c);
		if (!K4O) {
			if (kn8f.test(Y4c)) {
				K4O = location.protocol + "//" + location.host
			} else if (Y4c.indexOf("://") < 0) {
				K4O = location.protocol + "//" + Y4c
			} else {
				K4O = Y4c
			}
		}
		return iB7u.B4F(K4O) || K4O + "/res/nej_xdomain.html"
	}
})();
(function() {
	var c3x = NEJ.P,
		iB7u = c3x("nej.c"),
		O4S = c3x("nej.g"),
		gG7z = +(new Date);
	O4S.cKn7g = 1e4 - gG7z;
	O4S.bwV0x = 10001 - gG7z;
	O4S.cKl7e = 10002 - gG7z;
	O4S.bSM7F = 10003 - gG7z;
	O4S.bWp7i = 10004 - gG7z;
	O4S.cKj7c = 10005 - gG7z;
	O4S.bwC0x = 10006 - gG7z;
	O4S.bWt7m = 10007 - gG7z;
	O4S.yg2x = "Content-Type";
	O4S.cKf7Y = "text/plain";
	O4S.DH4L = "multipart/form-data";
	O4S.bWv8n = "application/x-www-form-urlencoded";
	O4S.bwt0x = iB7u.B4F("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function() {
	var c3x = NEJ.P,
		fy6s = NEJ.R,
		O4S = c3x("nej.p"),
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		be4i = c3x("nej.h");
	var kh8Z = O4S.dr5w.prefix,
		bPD5I = O4S.bMe4i,
		bWz8r = {
			scale: "scale({x|1},{y|1})",
			rotate: "rotate({a})",
			translate: "translate({x},{y})"
		},
		bWD8v = {
			scale: "scale3d({x|1},{y|1},{z|1})",
			rotate: "rotate3d({x},{y},{z},{a})",
			translate: "translate3d({x},{y},{z})"
		},
		Te1x = {
			transition: !0,
			transform: !0,
			animation: !0,
			keyframes: !0,
			box: !0,
			"box-pack": !0,
			"box-flex": !0,
			marquee: !0,
			"border-radius": !0,
			"user-select": !0
		};
	var Qt0x = function() {
			var sX1x = be4i.bBR1x();
			bPD5I.css3d = !! sX1x && sX1x.m41 != null;
			var df5k = /-([a-z])/g;
			for (var x in Te1x) {
				Te1x[bBT1x(x)] = Te1x[x]
			}
		};
	var bBT1x = function() {
			var df5k = /-([a-z])/g;
			return function(W4a) {
				W4a = W4a || "";
				return W4a.replace(df5k, function($1, $2) {
					return $2.toUpperCase()
				})
			}
		}();
	var bBX1x = function(W4a) {
			return (!bPD5I.css3d ? bWz8r : bWD8v)[W4a]
		};
	var bCu1x = function() {
			var df5k = /\s+/;
			return function(fP6J) {
				fP6J = (fP6J || "").trim();
				return !!fP6J ? fP6J.split(df5k) : null
			}
		}();
	var bbv4z = function(F4J, u4y, fP6J) {
			F4J = a3x.B4F(F4J);
			if (!F4J) return;
			k4o.bd4h(bCu1x(fP6J), function(ed6X) {
				F4J.classList[u4y](ed6X)
			})
		};
	be4i.Ix5C = function(i4m) {
		return fy6s.slice.call(i4m, 0)
	};
	be4i.bwi0x = function(F4J) {
		return be4i.Ix5C(F4J.children)
	};
	be4i.bwc0x = function(F4J, fP6J) {
		return be4i.Ix5C(F4J.getElementsByClassName(fP6J))
	};
	be4i.bwb0x = function(F4J, Iy5D) {
		bbv4z(F4J, "add", Iy5D)
	};
	be4i.bvV9M = function(F4J, Iz5E) {
		bbv4z(F4J, "remove", Iz5E)
	};
	be4i.Ux1x = function(F4J, Iz5E, Iy5D) {
		bbv4z(F4J, "remove", Iz5E);
		bbv4z(F4J, "add", Iy5D)
	};
	be4i.bvO9F = function(F4J, fP6J) {
		F4J = a3x.B4F(F4J);
		if (!F4J) return !1;
		var i4m = F4J.classList;
		if (!i4m || !i4m.length) return !1;
		return k4o.di5n(bCu1x(fP6J), function(ed6X) {
			return i4m.contains(ed6X)
		}) >= 0
	};
	be4i.bvN9E = function(F4J, ed6X) {};
	be4i.bvG9x = function(F4J) {};
	be4i.bvC9t = function(gf6Z, nJ9A) {
		gf6Z.selectionEnd = nJ9A.end || 0;
		gf6Z.selectionStart = nJ9A.start || 0;
		gf6Z.focus()
	};
	be4i.bvB9s = function(gf6Z) {
		return {
			end: gf6Z.selectionEnd,
			start: gf6Z.selectionStart
		}
	};
	be4i.bvy9p = function() {
		var DL4P = function(ed6X, d4h) {
				var F4J = h4l.X4b(d4h);
				if (!F4J.value) a3x.x4B(F4J, ed6X)
			};
		var IJ6D = function(ed6X, d4h) {
				a3x.y4C(h4l.X4b(d4h), ed6X)
			};
		return function(F4J, fk6e, ed6X) {
			if (fk6e == 1) {
				h4l.s4w(F4J, "blur", DL4P.f4j(null, ed6X))
			}
			if (fk6e == 1 || fk6e == -1) {
				h4l.s4w(F4J, "focus", IJ6D.f4j(null, ed6X))
			}
		}
	}();
	be4i.buT9K = function(G4K) {
		return (new XMLSerializer).serializeToString(G4K) || ""
	};
	be4i.buK9B = function(CV4Z) {
		var fZ6T = (new DOMParser).parseFromString(CV4Z, "text/xml").documentElement;
		return fZ6T.nodeName == "parsererror" ? null : fZ6T
	};
	be4i.buG9x = function(F4J) {};
	be4i.nN9E = function(F4J) {
		return null
	};
	be4i.buD9u = function(F4J) {
		return null
	};
	be4i.buy9p = function(dR5W) {};
	be4i.but9k = function() {
		var bf4j = be4i.Ix5C(arguments);
		bf4j[0] = a3x.B4F(bf4j[0]);
		if (!bf4j[0]) return null;
		bf4j[1] = (bf4j[1] || "").toLowerCase();
		if (!bf4j[1]) return null;
		return bf4j
	};
	be4i.BF3x = function() {
		var wx2x = {
			touchstart: "mousedown",
			touchmove: "mousemove",
			touchend: "mouseup"
		},
			jl8d = {
				transitionend: "TransitionEnd",
				animationend: "AnimationEnd",
				animationstart: "AnimationStart",
				animationiteration: "AnimationIteration"
			};
		var bWE8w = function(u4y) {
				return (kh8Z.evt || kh8Z.pro) + u4y
			};
		return function() {
			var bf4j = be4i.but9k.apply(be4i, arguments);
			if (!bf4j) return;
			var bcP4T = jl8d[bf4j[1]],
				bcR4V = wx2x[bf4j[1]];
			if ( !! bcP4T) {
				bf4j[4] = bf4j[1];
				bf4j[1] = bWE8w(bcP4T)
			} else if ( !! bcR4V) {
				var W4a = "on" + bf4j[1];
				if (!(W4a in bf4j[0])) {
					bf4j[4] = bf4j[1];
					bf4j[1] = bcR4V
				}
			}
			return bf4j
		}
	}();
	be4i.bul9c = function() {
		var bf4j = arguments;
		bf4j[0].addEventListener(bf4j[1], bf4j[2], !! bf4j[3])
	};
	be4i.bdr4v = function() {
		var bf4j = arguments;
		bf4j[0].removeEventListener(bf4j[1], bf4j[2], !! bf4j[3])
	};
	be4i.buh9Y = function(F4J, u4y, e4i) {
		var d4h = document.createEvent("Event");
		d4h.initEvent(u4y, !0, !0);
		NEJ.X(d4h, e4i);
		F4J.dispatchEvent(d4h)
	};
	be4i.bBR1x = function() {
		var gL7E = /\((.*?)\)/,
			kn8f = /\s*,\s*/,
			i4m = ["m11", "m12", "m21", "m22", "m41", "m42"];
		var beP5U = function(sX1x) {
				var in7g = {};
				if (gL7E.test(sX1x || "")) {
					k4o.bd4h(RegExp.$1.split(kn8f), function(D4H, r4v) {
						in7g[i4m[r4v]] = D4H || ""
					})
				}
				return in7g
			};
		return function(sX1x) {
			if ( !! window.CSSMatrix) return new CSSMatrix(sX1x);
			var W4a = kh8Z.clz + "CSSMatrix";
			if ( !! window[W4a]) return new window[W4a](sX1x || "");
			return beP5U(sX1x)
		}
	}();
	be4i.bFY2x = function() {
		var df5k = /\{(.*?)\}/g;
		return function(W4a, bz4D) {
			bz4D = bz4D || o;
			var oW9N = bBX1x(W4a);
			return !oW9N ? "" : oW9N.replace(df5k, function($1, $2) {
				var bs4w = $2.split("|");
				return bz4D[bs4w[0]] || bs4w[1] || "0"
			})
		}
	}();
	be4i.buc9T = function(F4J, W4a, D4H) {
		F4J.style[be4i.bJA3x(W4a)] = D4H
	};
	be4i.bJA3x = function() {
		var df5k = /^[a-z]/,
			btZ9Q = kh8Z.css;
		var bWF8x = function(W4a) {
				return W4a.replace(df5k, function($1) {
					return btZ9Q + $1.toUpperCase()
				})
			};
		return function(W4a) {
			W4a = bBT1x(W4a);
			var bWL8D = be4i.bWQ8I(W4a, Te1x);
			return bWL8D ? bWF8x(W4a) : W4a
		}
	}();
	be4i.bWQ8I = function() {
		var df5k = /^([a-z]+?)[A-Z]/;
		return function(W4a, bz4D) {
			if (!bz4D[W4a]) {
				if (df5k.test(W4a)) W4a = RegExp.$1
			}
			return !!bz4D[W4a]
		}
	}();
	be4i.bWW8O = function() {
		var df5k = /\$<(.*?)>/gi,
			btZ9Q = "-" + kh8Z.css.toLowerCase() + "-";
		return function(km8e) {
			return km8e.replace(df5k, function($1, $2) {
				var fu6o = $2,
					bs4w = fu6o.split("|"),
					oW9N = bBX1x(bs4w[0]);
				if ( !! oW9N) {
					return be4i.bFY2x(bs4w[0], k4o.hq7j(bs4w[1]))
				}
				return !be4i.bWX8P(fu6o, Te1x) ? fu6o : btZ9Q + fu6o
			})
		}
	}();
	be4i.bWX8P = function(W4a, bz4D) {
		return !!bz4D[W4a]
	};
	be4i.btR9I = function(cj4n, km8e) {
		cj4n.textContent = km8e
	};
	be4i.btQ9H = function(cj4n, km8e) {
		var zH3x = cj4n.sheet,
			bq4u = zH3x.cssRules.length;
		zH3x.insertRule(km8e, bq4u);
		return zH3x.cssRules[bq4u]
	};
	be4i.cJS7L = function(F4J, e4i) {};
	be4i.WF2x = function(WL2x) {
		return (WL2x || "").toLowerCase() != "transparent"
	};
	be4i.bXb8T = function(F4J) {};
	be4i.btx9o = function(F4J, W4a) {
		if ( !! F4J.getAttribute) return F4J.getAttribute(W4a);
		return ""
	};
	be4i.XC2x = function(eO6I) {
		a3x.cL5Q(eO6I)
	};
	Qt0x()
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		O4S = c3x("nej.p"),
		be4i = c3x("nej.h");
	if (O4S.nB9s.trident0) return;
	var gG7z = +(new Date);
	R4V = {};
	be4i.bvN9E = be4i.bvN9E.eH6B(function(d4h) {
		d4h.stopped = !0;
		var bf4j = d4h.args,
			C4G = a3x.lP8H(bf4j[0]),
			K4O = "hover-" + C4G;
		if (!C4G || !! R4V[K4O]) return;
		R4V[K4O] = !0;
		h4l.s4w(C4G, "mouseenter", a3x.y4C.f4j(a3x, C4G, bf4j[1]));
		h4l.s4w(C4G, "mouseleave", a3x.x4B.f4j(a3x, C4G, bf4j[1]))
	});
	be4i.bvG9x = function() {
		var cJQ7J = function() {};
		return be4i.bvG9x.eH6B(function(d4h) {
			d4h.stopped = !0;
			var F4J = d4h.args[0],
				C4G = "fixed-" + a3x.lP8H(F4J);
			if ( !! R4V[C4G]) return;
			var bh4l = {};
			R4V[C4G] = bh4l
		})
	}();
	be4i.buG9x = be4i.buG9x.eH6B(function(d4h) {
		d4h.stopped = !0;
		var F4J = d4h.args[0],
			cj4n = F4J.style,
			bFF2x = a3x.oy9p();
		cj4n.width = bFF2x.scrollWidth + "px";
		cj4n.height = bFF2x.scrollHeight + "px"
	});
	be4i.nN9E = be4i.nN9E.eH6B(function(d4h) {
		d4h.stopped = !0;
		var F4J = d4h.args[0],
			lp8h = R4V[F4J.msk];
		if (!lp8h) {
			F4J.msk = gG7z++;
			lp8h = a3x.dj5o("iframe");
			lp8h.style.position = "absolute";
			R4V[F4J.msk] = lp8h
		}
		d4h.value = lp8h;
		var cj4n = lp8h.style;
		cj4n.top = (parseInt(a3x.dh5m(F4J, "top")) || 0) + "px";
		cj4n.left = (parseInt(a3x.dh5m(F4J, "left")) || 0) + "px";
		cj4n.width = F4J.offsetWidth + "px";
		cj4n.height = F4J.offsetHeight + "px";
		F4J.insertAdjacentElement("beforeBegin", lp8h)
	});
	be4i.buD9u = be4i.buD9u.eH6B(function(d4h) {
		d4h.stopped = !0;
		var lp8h = R4V[d4h.args[0].msk];
		if ( !! lp8h) a3x.mS9J(lp8h)
	})
})();
(function() {
	var c3x = NEJ.P,
		O4S = c3x("nej.p"),
		a3x = c3x("nej.e"),
		be4i = c3x("nej.h");
	if (O4S.nB9s.trident1) return;
	be4i.BF3x = function() {
		var wx2x = {
			touchcancel: "MSPointerCancel",
			touchstart: "MSPointerDown",
			touchmove: "MSPointerMove",
			touchend: "MSPointerUp"
		};
		return be4i.BF3x.eH6B(function(d4h) {
			var bf4j = be4i.but9k.apply(be4i, d4h.args);
			if (!bf4j) {
				d4h.stopped = !0;
				return
			}
			var u4y = wx2x[bf4j[1]];
			if ( !! u4y && ("on" + u4y).toLowerCase() in bf4j[0]) {
				bf4j[4] = bf4j[1];
				bf4j[1] = u4y;
				d4h.stopped = !0;
				d4h.value = bf4j
			}
		})
	}();
	be4i.WF2x = function(WL2x) {
		return !0
	};
	be4i.XC2x = be4i.XC2x.eH6B(function(d4h) {
		d4h.stopped = !0;
		var eO6I = d4h.args[0];
		a3x.ba4e(eO6I, "display", "none");
		try {
			eO6I.contentWindow.document.body.innerHTML = "&nbsp;"
		} catch (ex) {}
	})
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		O4S = c3x("nej.p"),
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		be4i = c3x("nej.h"),
		btv9m = {};
	if (O4S.nB9s.trident) return;
	be4i.Ix5C = be4i.Ix5C.eH6B(function(d4h) {
		d4h.stopped = !0;
		var i4m = d4h.args[0];
		if (!i4m) {
			d4h.value = null;
			return
		}
		var r4v = 0,
			m4q = [];
		while ( !! i4m[r4v]) {
			m4q.push(i4m[r4v++])
		}
		d4h.value = m4q
	});
	be4i.bwi0x = be4i.bwi0x.eH6B(function(d4h) {
		d4h.stopped = !0;
		var bs4w = [];
		k4o.bd4h(d4h.args[0].childNodes, function(g4k) {
			if (g4k.nodeType == 1) bs4w.push(g4k)
		});
		d4h.value = bs4w
	});
	be4i.bwc0x = be4i.bwc0x.eH6B(function(d4h) {
		var F4J = d4h.args[0];
		if ( !! F4J.getElementsByClassName) return;
		d4h.stopped = !0;
		var m4q = [],
			QP0x = new RegExp("(\\s|^)(?:" + d4h.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
		k4o.bd4h(F4J.getElementsByTagName("*"), function(g4k) {
			if (QP0x.test(g4k.className)) m4q.push(g4k)
		});
		d4h.value = m4q
	});
	be4i.bvC9t = be4i.bvC9t.eH6B(function(d4h) {
		var gf6Z = d4h.args[0],
			nJ9A = d4h.args[1];
		if (gf6Z.selectionStart == null) {
			d4h.stopped = !0;
			var dd5i = gf6Z.createTextRange();
			dd5i.collapse(!0);
			dd5i.moveStart("character", nJ9A.start);
			dd5i.moveEnd("character", nJ9A.end - nJ9A.start);
			dd5i.select();
			gf6Z.focus()
		}
	});
	be4i.bvB9s = be4i.bvB9s.eH6B(function(d4h) {
		var gf6Z = d4h.args[0];
		gf6Z.focus();
		if (gf6Z.selectionStart == null) {
			d4h.stopped = !0;
			var bMS4W = document.selection.createRange();
			var bOi4m = gf6Z.createTextRange();
			bOi4m.moveToBookmark(bMS4W.getBookmark());
			var btp9g = gf6Z.createTextRange();
			btp9g.collapse(!0);
			btp9g.setEndPoint("EndToStart", bOi4m);
			var hA7t = btp9g.text.length;
			d4h.value = {
				start: hA7t,
				end: hA7t + bMS4W.text.length
			}
		}
	});
	be4i.buT9K = be4i.buT9K.eH6B(function(d4h) {
		if ( !! window.XMLSerializer) return;
		d4h.stopped = !0;
		var F4J = d4h.args[0];
		d4h.value = F4J.xml != null ? F4J.xml : F4J.outHTML
	});
	be4i.buK9B = function() {
		var Ra0x = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
		var bXJ8B = function() {
				try {
					for (var i = 0, l = Ra0x.length; i < l; i++) return new ActiveXObject(Ra0x[i])
				} catch (ex) {
					return null
				}
			};
		return be4i.buK9B.eH6B(function(d4h) {
			if ( !! window.DOMParser) return;
			d4h.stopped = !0;
			var nY9P = bXJ8B();
			if ( !! nY9P && nY9P.loadXML(d4h.args[0]) && !nY9P.parseError.errorCode) d4h.value = nY9P.documentElement
		})
	}();
	be4i.BF3x = function() {
		var jl8d = {
			input: "propertychange",
			load: "readystatechange"
		};
		for (var x in jl8d) btv9m[jl8d[x]] = !0;
		var bYb8T = function(F4J, u4y) {
				if ("on" + u4y in F4J) return null;
				return jl8d[u4y] || ""
			};
		var bYg8Y = function(u4y, dx5C) {
				var cA5F = dx5C;
				switch (u4y) {
				case "readystatechange":
					cA5F = function(d4h) {
						var F4J = h4l.X4b(d4h) || this;
						if (F4J.readyState == "loaded" || F4J.readyState == "complete") {
							d4h.target = F4J;
							dx5C.call(F4J, d4h)
						}
					};
					break;
				case "propertychange":
					cA5F = function(d4h) {
						var F4J = h4l.X4b(d4h) || this;
						if ("value" in F4J && d4h.propertyName == "value") {
							d4h.target = F4J;
							dx5C.call(F4J, d4h)
						}
					};
					break
				}
				return cA5F
			};
		return be4i.BF3x.eH6B(function(d4h) {
			var bf4j = be4i.but9k.apply(be4i, d4h.args);
			if (!bf4j) {
				d4h.stopped = !0;
				return
			}
			var u4y = bYb8T(bf4j[0], bf4j[1]);
			if ( !! u4y) {
				d4h.stopped = !0;
				bf4j[4] = bf4j[1];
				bf4j[1] = u4y;
				if ( !! bf4j[2]) {
					bf4j[5] = bf4j[2];
					bf4j[2] = bYg8Y(bf4j[1], bf4j[2])
				}
				d4h.value = bf4j
			}
		}, function(d4h) {
			var bf4j = d4h.value;
			if (!bf4j[0] || !k4o.gK7D(bf4j[2])) return;
			if (!k4o.gK7D(bf4j[5])) bf4j[5] = bf4j[2];
			bf4j[2] = bf4j[2].f4j(bf4j[0])
		})
	}();
	be4i.bul9c = be4i.bul9c.eH6B(function(d4h) {
		var bf4j = d4h.args;
		if ( !! btv9m[bf4j[1]] || !document.addEventListener) {
			d4h.stopped = !0;
			bf4j[0].attachEvent("on" + bf4j[1], bf4j[2])
		}
	});
	be4i.bdr4v = be4i.bdr4v.eH6B(function(d4h) {
		var bf4j = d4h.args;
		if ( !! btv9m[bf4j[1]] || !document.removeEventListener) {
			d4h.stopped = !0;
			bf4j[0].detachEvent("on" + bf4j[1], bf4j[2])
		}
	});
	be4i.buh9Y = be4i.buh9Y.eH6B(function(d4h) {
		if (!document.createEvent) {
			d4h.stopped = !0;
			var bf4j = d4h.args,
				bTU7N = document.createEventObject();
			NEJ.X(bTU7N, bf4j[2]);
			try {
				bf4j[0].fireEvent("on" + bf4j[1], bTU7N)
			} catch (ex) {
				console.error(ex.message);
				console.error(ex.stack)
			}
		}
	});
	be4i.buc9T = be4i.buc9T.eH6B(function(d4h) {
		var bf4j = d4h.args,
			W4a = bf4j[1].toLowerCase();
		if (W4a == "opacity" && !(W4a in document.body.style)) {
			bf4j[1] = "filter";
			bf4j[2] = "alpha(opacity=" + bf4j[2] * 100 + ")"
		}
	});
	be4i.btR9I = function() {
		var fo6i = 30;
		return be4i.btR9I.eH6B(function(d4h) {
			var F4J = d4h.args[0];
			if (!F4J.styleSheet) return;
			d4h.stopped = !0;
			var km8e = d4h.args[1];
			var i4m = document.styleSheets;
			if (i4m.length > fo6i) {
				F4J = i4m[fo6i];
				km8e = F4J.cssText + km8e
			} else {
				F4J = F4J.styleSheet
			}
			F4J.cssText = km8e
		})
	}();
	be4i.btQ9H = be4i.btQ9H.eH6B(function(d4h) {
		var bf4j = d4h.args,
			zH3x = bf4j[0].sheet;
		if ( !! zH3x) return;
		d4h.stopped = !0;
		var zH3x = bf4j[0].styleSheet,
			bq4u = zH3x.rules.length,
			bs4w = bf4j[1].split(/[\{\}]/);
		zH3x.addRule(bs4w[0], bs4w[1], bq4u);
		d4h.value = zH3x.rules[bq4u]
	});
	be4i.bvy9p = function() {
		var DL4P = function(ed6X, d4h) {
				a3x.x4B(h4l.X4b(d4h), ed6X)
			};
		return be4i.bvy9p.eH6B(function(d4h) {
			if (O4S.dr5w.release >= "4.0") return;
			var bf4j = d4h.args;
			if (bf4j[1] != 1) {
				h4l.s4w(bf4j[0], "blur", DL4P.f4j(null, bf4j[2]));
				bf4j[1] = -1
			}
		})
	}();
	be4i.WF2x = function(WL2x) {
		return !0
	};
	be4i.btx9o = be4i.btx9o.eH6B(function(d4h) {
		var bf4j = d4h.args,
			g4k = (bf4j[0].attributes || bb4f)[bf4j[1]];
		if ( !! g4k) {
			d4h.stopped = !0;
			d4h.value = g4k.value
		}
	}, function(d4h) {
		var bf4j = d4h.args;
		if (bf4j[1] == "maxlength" && d4h.value == 2147483647) d4h.value = ""
	});
	if (O4S.dr5w.release < 5) {
		be4i.buy9p = function() {
			var eg6a, eO6I, kt8l = [],
				bth9Y = "cb-" + +(new Date),
				bo4s = '<script>parent.nej.h["' + bth9Y + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
			var bBY1x = function() {
					eg6a = window.clearTimeout(eg6a);
					if (!kt8l.length) return;
					var dR5W = kt8l.shift();
					try {
						var xv2x = eO6I.contentWindow.document;
						xv2x.open();
						xv2x.write("<head><title>");
						xv2x.write(document.title);
						xv2x.write("</title>");
						xv2x.write(bo4s.replace("#<HASH>", encodeURIComponent(dR5W)));
						xv2x.write("</head><body></body>");
						if (location.hostname != document.domain) xv2x.domain = document.domain;
						xv2x.close();
						be4i[bth9Y] = !1
					} catch (ex) {
						console.log(ex.message || ex);
						kt8l.unshift(dR5W)
					}
					eg6a = window.setTimeout(bBY1x, 50)
				};
			return be4i.buy9p.eH6B(function(d4h) {
				d4h.stopped = !0;
				var dR5W = d4h.args[0];
				if ( !! be4i[bth9Y] || !eO6I && !dR5W) return;
				kt8l.push(dR5W);
				if (!eO6I) eO6I = a3x.YH2x();
				bBY1x()
			})
		}()
	}
	try {
		document.execCommand("BackgroundImageCache", !1, !0)
	} catch (e) {}
})();
(function() {
	var c3x = NEJ.P,
		h4l = c3x("nej.v"),
		be4i = c3x("nej.h"),
		O4S = c3x("nej.p"),
		YW3x = O4S.bMe4i;
	if (O4S.nB9s.gecko) return;
	var Qt0x = function() {
			YW3x.css3d = YW3x.css3d || "MozPerspective" in document.body.style;
			if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function(iP7I, F4J) {
				if (!iP7I || !F4J) return;
				switch (iP7I) {
				case "beforeEnd":
					this.appendChild(F4J);
					return;
				case "beforeBegin":
					this.parentNode.insertBefore(F4J, this);
					return;
				case "afterBegin":
					!this.firstChild ? this.appendChild(F4J) : this.insertBefore(F4J, this.firstChild);
					return;
				case "afterEnd":
					!this.nextSibling ? this.parentNode.appendChild(F4J) : this.parentNode.insertBefore(F4J, this.nextSibling);
					return
				}
			};
			if (!("innerText" in document.body)) {
				HTMLElement.prototype["__defineGetter__"]("innerText", function() {
					return this.textContent
				});
				HTMLElement.prototype["__defineSetter__"]("innerText", function(bo4s) {
					this.textContent = bo4s
				})
			}
		};
	be4i.BF3x = function() {
		var gL7E = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
		return be4i.BF3x.eH6B(function(d4h) {
			var bf4j = d4h.args;
			if (gL7E.test(bf4j[1] || "")) {
				d4h.stopped = !0;
				d4h.value = bf4j
			}
		})
	}();
	be4i.bXb8T = function() {
		var bYi8a = function(d4h) {
				h4l.bg4k(d4h);
				h4l.X4b(d4h).control.click()
			};
		return function(F4J) {
			h4l.s4w(F4J, "click", bYi8a)
		}
	}();
	Qt0x()
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		be4i = c3x("nej.h");
	var Zi3x = function() {
			var mM9D = !! document.body.classList;
			return function() {
				return mM9D
			}
		}();
	var bFw2x = function() {
			var df5k = /\s+/g;
			return function(fP6J) {
				fP6J = (fP6J || "").trim();
				return !fP6J ? null : new RegExp("(\\s|^)(?:" + fP6J.replace(df5k, "|") + ")(?=\\s|$)", "g")
			}
		}();
	be4i.Ux1x = be4i.Ux1x.eH6B(function(d4h) {
		if (Zi3x()) return;
		d4h.stopped = !0;
		var bf4j = d4h.args,
			F4J = a3x.B4F(bf4j[0]);
		if (!F4J || !bf4j[1] && !bf4j[2]) return;
		var fP6J = F4J.className || "";
		var Iy5D = " " + (bf4j[2] || ""),
			Iz5E = bFw2x((bf4j[1] || "") + Iy5D); !! Iz5E && (fP6J = fP6J.replace(Iz5E, "$1"));
		F4J.className = (fP6J + Iy5D).replace(/\s+/g, " ").trim()
	});
	be4i.bwb0x = be4i.bwb0x.eH6B(function(d4h) {
		if (Zi3x()) return;
		d4h.stopped = !0;
		var bf4j = d4h.args;
		be4i.Ux1x(bf4j[0], "", bf4j[1])
	});
	be4i.bvV9M = be4i.bvV9M.eH6B(function(d4h) {
		if (Zi3x()) return;
		d4h.stopped = !0;
		var bf4j = d4h.args;
		be4i.Ux1x(bf4j[0], bf4j[1], "")
	});
	be4i.bvO9F = be4i.bvO9F.eH6B(function(d4h) {
		if (Zi3x()) return;
		d4h.stopped = !0;
		var bf4j = d4h.args,
			F4J = a3x.B4F(bf4j[0]);
		if (!F4J) {
			d4h.value = !1;
			return
		}
		var df5k = bFw2x(bf4j[1]);
		d4h.value = !df5k ? !1 : df5k.test(F4J.className || "")
	})
})();
(function() {
	var c3x = NEJ.P,
		O4S = c3x("nej.p"),
		be4i = c3x("nej.h");
	if (O4S.nB9s.webkit) return;
	be4i.WF2x = function(WL2x) {
		return !0
	}
})();
(function() {
	var c3x = NEJ.P,
		be4i = c3x("nej.h"),
		a3x = c3x("nej.e"),
		k4o = c3x("nej.u"),
		h4l = c3x("nej.v"),
		cZ5e = c3x("nej.x"),
		R4V = {};
	var bFG2x = function(F4J) {
			F4J = a3x.B4F(F4J);
			if (!F4J || !R4V[F4J.id]) return;
			var Zj3x = !0,
				C4G = F4J.id;
			k4o.eI6C(R4V[C4G], function() {
				Zj3x = !1;
				return !0
			});
			if (Zj3x) delete R4V[C4G]
		};
	h4l.s4w = cZ5e.s4w = function() {
		var bZe8W = function() {
				var bf4j = be4i.BF3x.apply(be4i, arguments);
				if (!bf4j || !bf4j[2]) return;
				var uo1x = a3x.lP8H(bf4j[0]),
					pk9b = R4V[uo1x] || {};
				R4V[uo1x] = pk9b;
				uo1x = bf4j[4] || bf4j[1];
				var BP3x = pk9b[uo1x] || [];
				pk9b[uo1x] = BP3x;
				BP3x.push({
					type: bf4j[1],
					func: bf4j[2],
					capt: !! bf4j[3],
					sfun: bf4j[5] || bf4j[2]
				});
				return bf4j.slice(0, 4)
			};
		return function() {
			var bf4j = bZe8W.apply(null, arguments);
			if ( !! bf4j) be4i.bul9c.apply(be4i, bf4j);
			return this
		}
	}();
	h4l.mo8g = cZ5e.mo8g = function() {
		var bZf8X = function() {
				var tG1x = arguments,
					uo1x = a3x.lP8H(tG1x[0]),
					pk9b = R4V[uo1x],
					u4y = (tG1x[1] || "").toLowerCase(),
					d4h = tG1x[2];
				if (!pk9b || !u4y || !d4h) return;
				pk9b = pk9b[u4y];
				if (!pk9b) return;
				var bZg8Y = !! tG1x[3],
					r4v = k4o.di5n(pk9b, function(jl8d) {
						return d4h == jl8d.sfun && bZg8Y == jl8d.capt
					});
				if (r4v < 0) return;
				var jl8d = pk9b.splice(r4v, 1)[0];
				return !jl8d ? null : [a3x.B4F(uo1x), jl8d.type, jl8d.func, jl8d.capt]
			};
		return function() {
			var bf4j = bZf8X.apply(null, arguments);
			if ( !! bf4j) {
				be4i.bdr4v.apply(be4i, bf4j);
				bFG2x(bf4j[0])
			}
			return this
		}
	}();
	h4l.he7X = cZ5e.he7X = function() {
		var bKB3x = function() {
				var tG1x = arguments,
					uo1x = a3x.lP8H(tG1x[0]),
					pk9b = R4V[uo1x],
					BP3x = (tG1x[1] || "").toLowerCase();
				if (!pk9b || !BP3x) return;
				var F4J = a3x.B4F(uo1x);
				k4o.nk9b(pk9b[BP3x], function(jl8d, r4v, i4m) {
					be4i.bdr4v(F4J, jl8d.type, jl8d.func, jl8d.capt);
					i4m.splice(r4v, 1)
				});
				delete pk9b[BP3x]
			};
		var bZh8Z = function(F4J) {
				F4J = a3x.B4F(F4J);
				if (!F4J) return;
				var C4G = F4J.id;
				k4o.eI6C(R4V[C4G], function(i4m, u4y) {
					bKB3x(C4G, u4y)
				});
				delete R4V[C4G]
			};
		return function(F4J, u4y) {
			!u4y ? bZh8Z(F4J) : bKB3x(F4J, u4y);
			bFG2x(F4J);
			return this
		}
	}();
	h4l.X4b = function() {
		var bsH9y;
		var Jl6f = function(W4a, F4J) {
				var bs4w = W4a.split(":");
				if (bs4w.length > 1) {
					if (!bsH9y) bsH9y = {
						c: a3x.bE4I,
						d: a3x.t4x,
						a: a3x.gJ7C
					};
					var Jm6g = bsH9y[bs4w[0]];
					if ( !! Jm6g) return !!Jm6g(F4J, bs4w[1]);
					W4a = bs4w[1]
				}
				return !!a3x.gJ7C(F4J, W4a) || !! a3x.t4x(F4J, W4a) || a3x.bE4I(F4J, W4a)
			};
		return function(d4h) {
			if (!d4h) return null;
			var F4J = d4h.target || d4h.srcElement,
				dZ6T = arguments[1];
			if (!dZ6T) return F4J;
			if (k4o.fC6w(dZ6T)) dZ6T = Jl6f.f4j(null, dZ6T);
			if (k4o.gK7D(dZ6T)) {
				while (F4J) {
					if ( !! dZ6T(F4J)) return F4J;
					F4J = F4J.parentNode
				}
				return null
			}
			return F4J
		}
	}();
	h4l.bg4k = function(d4h) {
		h4l.tW1x(d4h);
		h4l.cn4r(d4h);
		return this
	};
	h4l.tW1x = function(d4h) {
		if ( !! d4h) { !! d4h.stopPropagation ? d4h.stopPropagation() : d4h.cancelBubble = !0
		}
		return this
	};
	h4l.cn4r = function(d4h) {
		if ( !! d4h) { !! d4h.preventDefault ? d4h.preventDefault() : d4h.returnValue = !1
		}
		return this
	};
	h4l.cJG7z = function() {
		var ru0x = !1;
		var bZv8n = function() {
				if (ru0x) return;
				ru0x = !0;
				h4l.s4w(document, "click", bZK8C, !0)
			};
		var bZK8C = function(d4h) {
				var F4J = h4l.X4b(d4h),
					bZW8O = a3x.t4x(F4J, "stopped");
				if (bZW8O == "true") {
					h4l.bg4k(d4h);
					a3x.t4x(F4J, "stopped", "false")
				}
			};
		return function(d4h) {
			if (!d4h) return;
			if (d4h.type == "click") {
				h4l.bg4k(d4h);
				return
			}
			bZv8n();
			a3x.t4x(h4l.X4b(d4h), "stopped", "true")
		}
	}();
	h4l.jG8y = function(d4h) {
		return d4h.pageX != null ? d4h.pageX : d4h.clientX + a3x.oy9p().scrollLeft
	};
	h4l.lZ8R = function(d4h) {
		return d4h.pageY != null ? d4h.pageY : d4h.clientY + a3x.oy9p().scrollTop
	};
	h4l.z4D = cZ5e.z4D = function(F4J, u4y, e4i) {
		var bf4j = be4i.BF3x(F4J, u4y);
		if ( !! bf4j) be4i.buh9Y(bf4j[0], bf4j[1], e4i);
		return this
	};
	c3x("dbg").dumpEV = function() {
		return R4V
	};
	cZ5e.isChange = !0
})();
(function() {
	var o = !0,
		w = null;
	(function(B) {
		function v(a) {
			if ("bug-string-char-index" == a) return "a" != "a" [0];
			var f, c = "json" == a;
			if (c || "json-stringify" == a || "json-parse" == a) {
				if ("json-stringify" == a || c) {
					var d = k.stringify,
						b = "function" == typeof d && l;
					if (b) {
						(f = function() {
							return 1
						}).toJSON = f;
						try {
							b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
								a: [f, o, !1, w, "\0\b\n\f\r\t"]
							}) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
						} catch (n) {
							b = !1
						}
					}
					if (!c) return b
				}
				if ("json-parse" == a || c) {
					a = k.parse;
					if ("function" == typeof a) try {
						if (0 === a("0") && !a(!1)) {
							f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
							var e = 5 == f.a.length && 1 === f.a[0];
							if (e) {
								try {
									e = !a('"\t"')
								} catch (g) {}
								if (e) try {
									e = 1 !== a("01")
								} catch (i) {}
							}
						}
					} catch (O) {
						e = !1
					}
					if (!c) return e
				}
				return b && e
			}
		}
		var m = {}.toString,
			p, C, r, D = typeof define === "function" && define.amd,
			k = "object" == typeof exports && exports;
		k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
		var l = new Date(-0xc782b5b800cec);
		try {
			l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
		} catch (P) {}
		if (!v("json")) {
			var s = v("bug-string-char-index");
			if (!l) var t = Math.floor,
				J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
				z = function(a, f) {
					return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
				};
			if (!(p = {}.hasOwnProperty)) p = function(a) {
				var f = {},
					c;
				if ((f.__proto__ = w, f.__proto__ = {
					toString: 1
				}, f).toString != m) p = function(a) {
					var f = this.__proto__,
						a = a in (this.__proto__ = w, this);
					this.__proto__ = f;
					return a
				};
				else {
					c = f.constructor;
					p = function(a) {
						var f = (this.constructor || c).prototype;
						return a in this && !(a in f && this[a] === f[a])
					}
				}
				f = w;
				return p.call(this, a)
			};
			var K = {
				"boolean": 1,
				number: 1,
				string: 1,
				"undefined": 1
			};
			C = function(a, f) {
				var c = 0,
					b, h, n;
				(b = function() {
					this.valueOf = 0
				}).prototype.valueOf = 0;
				h = new b;
				for (n in h) p.call(h, n) && c++;
				b = h = w;
				if (c) c = c == 2 ?
				function(a, f) {
					var c = {},
						b = m.call(a) == "[object Function]",
						d;
					for (d in a)!(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
				} : function(a, f) {
					var c = m.call(a) == "[object Function]",
						b, d;
					for (b in a)!(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
					(d || p.call(a, b = "constructor")) && f(b)
				};
				else {
					h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
					c = function(a, f) {
						var c = m.call(a) == "[object Function]",
							b, d;
						if (d = !c) if (d = typeof a.constructor != "function") {
							d = typeof a.hasOwnProperty;
							d = d == "object" ? !! a.hasOwnProperty : !K[d]
						}
						d = d ? a.hasOwnProperty : p;
						for (b in a)!(c && b == "prototype") && d.call(a, b) && f(b);
						for (c = h.length; b = h[--c]; d.call(a, b) && f(b));
					}
				}
				c(a, f)
			};
			if (!v("json-stringify")) {
				var L = {
					92: "\\\\",
					34: '\\"',
					8: "\\b",
					12: "\\f",
					10: "\\n",
					13: "\\r",
					9: "\\t"
				},
					u = function(a, f) {
						return ("000000" + (f || 0)).slice(-a)
					},
					G = function(a) {
						var f = '"',
							b = 0,
							d = a.length,
							h = d > 10 && s,
							n;
						for (h && (n = a.split("")); b < d; b++) {
							var e = a.charCodeAt(b);
							switch (e) {
							case 8:
							case 9:
							case 10:
							case 12:
							case 13:
							case 34:
							case 92:
								f = f + L[e];
								break;
							default:
								if (e < 32) {
									f = f + ("\\u00" + u(2, e.toString(16)));
									break
								}
								f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
							}
						}
						return f + '"'
					},
					E = function(a, b, c, d, h, n, e) {
						var g = b[a],
							i, j, k, l, q, s, v, x, y;
						try {
							g = b[a]
						} catch (A) {}
						if (typeof g == "object" && g) {
							i = m.call(g);
							if (i == "[object Date]" && !p.call(g, "toJSON")) if (g > -1 / 0 && g < 1 / 0) {
								if (z) {
									k = t(g / 864e5);
									for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++);
									for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++);
									k = 1 + k - z(i, j);
									l = (g % 864e5 + 864e5) % 864e5;
									q = t(l / 36e5) % 24;
									s = t(l / 6e4) % 60;
									v = t(l / 1e3) % 60;
									l = l % 1e3
								} else {
									i = g.getUTCFullYear();
									j = g.getUTCMonth();
									k = g.getUTCDate();
									q = g.getUTCHours();
									s = g.getUTCMinutes();
									v = g.getUTCSeconds();
									l = g.getUTCMilliseconds()
								}
								g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
							} else g = w;
							else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
						}
						c && (g = c.call(b, a, g));
						if (g === w) return "null";
						i = m.call(g);
						if (i == "[object Boolean]") return "" + g;
						if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
						if (i == "[object String]") return G("" + g);
						if (typeof g == "object") {
							for (a = e.length; a--;) if (e[a] === g) throw TypeError();
							e.push(g);
							x = [];
							b = n;
							n = n + h;
							if (i == "[object Array]") {
								j = 0;
								for (a = g.length; j < a; y || (y = o), j++) {
									i = E(j, g, c, d, h, n, e);
									x.push(i === r ? "null" : i)
								}
								a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
							} else {
								C(d || g, function(a) {
									var b = E(a, g, c, d, h, n, e);
									b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
									y || (y = o)
								});
								a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
							}
							e.pop();
							return a
						}
					};
				k.stringify = function(a, b, c) {
					var d, h, j;
					if (typeof b == "function" || typeof b == "object" && b) if (m.call(b) == "[object Function]") h = b;
					else if (m.call(b) == "[object Array]") {
						j = {};
						for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1));
					}
					if (c) if (m.call(c) == "[object Number]") {
						if ((c = c - c % 1) > 0) {
							d = "";
							for (c > 10 && (c = 10); d.length < c; d = d + " ");
						}
					} else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
					return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
				}
			}
			if (!v("json-parse")) {
				var M = String.fromCharCode,
					N = {
						92: "\\",
						34: '"',
						47: "/",
						98: "\b",
						116: "\t",
						110: "\n",
						102: "\f",
						114: "\r"
					},
					b, A, j = function() {
						b = A = w;
						throw SyntaxError()
					},
					q = function() {
						for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
							e = a.charCodeAt(b);
							switch (e) {
							case 9:
							case 10:
							case 13:
							case 32:
								b++;
								break;
							case 123:
							case 125:
							case 91:
							case 93:
							case 58:
							case 44:
								c = s ? a.charAt(b) : a[b];
								b++;
								return c;
							case 34:
								c = "@";
								for (b++; b < f;) {
									e = a.charCodeAt(b);
									if (e < 32) j();
									else if (e == 92) {
										e = a.charCodeAt(++b);
										switch (e) {
										case 92:
										case 34:
										case 47:
										case 98:
										case 116:
										case 110:
										case 102:
										case 114:
											c = c + N[e];
											b++;
											break;
										case 117:
											d = ++b;
											for (h = b + 4; b < h; b++) {
												e = a.charCodeAt(b);
												e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
											}
											c = c + M("0x" + a.slice(d, b));
											break;
										default:
											j()
										}
									} else {
										if (e == 34) break;
										e = a.charCodeAt(b);
										for (d = b; e >= 32 && e != 92 && e != 34;) e = a.charCodeAt(++b);
										c = c + a.slice(d, b)
									}
								}
								if (a.charCodeAt(b) == 34) {
									b++;
									return c
								}
								j();
							default:
								d = b;
								if (e == 45) {
									k = o;
									e = a.charCodeAt(++b)
								}
								if (e >= 48 && e <= 57) {
									for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++);
									if (a.charCodeAt(b) == 46) {
										for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
										h == b && j();
										b = h
									}
									e = a.charCodeAt(b);
									if (e == 101 || e == 69) {
										e = a.charCodeAt(++b);
										(e == 43 || e == 45) && b++;
										for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
										h == b && j();
										b = h
									}
									return +a.slice(d, b)
								}
								k && j();
								if (a.slice(b, b + 4) == "true") {
									b = b + 4;
									return o
								}
								if (a.slice(b, b + 5) == "false") {
									b = b + 5;
									return false
								}
								if (a.slice(b, b + 4) == "null") {
									b = b + 4;
									return w
								}
								j()
							}
						}
						return "$"
					},
					F = function(a) {
						var b, c;
						a == "$" && j();
						if (typeof a == "string") {
							if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
							if (a == "[") {
								for (b = [];; c || (c = o)) {
									a = q();
									if (a == "]") break;
									if (c) if (a == ",") {
										a = q();
										a == "]" && j()
									} else j();
									a == "," && j();
									b.push(F(a))
								}
								return b
							}
							if (a == "{") {
								for (b = {};; c || (c = o)) {
									a = q();
									if (a == "}") break;
									if (c) if (a == ",") {
										a = q();
										a == "}" && j()
									} else j();
									(a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
									b[a.slice(1)] = F(q())
								}
								return b
							}
							j()
						}
						return a
					},
					I = function(a, b, c) {
						c = H(a, b, c);
						c === r ? delete a[b] : a[b] = c
					},
					H = function(a, b, c) {
						var d = a[b],
							h;
						if (typeof d == "object" && d) if (m.call(d) == "[object Array]") for (h = d.length; h--;) I(d, h, c);
						else C(d, function(a) {
							I(d, a, c)
						});
						return c.call(a, b, d)
					};
				k.parse = function(a, f) {
					var c, d;
					b = 0;
					A = "" + a;
					c = F(q());
					q() != "$" && j();
					b = A = w;
					return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
				}
			}
		}
		D && define(function() {
			return k
		})
	})(this)
})();
(function() {
	var c3x = NEJ.P,
		O4S = c3x("nej.p");
	if (O4S.nB9s.trident0) return;
	JSON.parse = JSON.parse.eH6B(function(d4h) {
		var cO5T = d4h.args[0] || "";
		if (cO5T.length >= 5e5) {
			d4h.stopped = !0;
			d4h.value = eval("(" + cO5T + ")")
		}
	})
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		em6g = c3x("nej.g"),
		a3x = c3x("nej.e"),
		k4o = c3x("nej.u"),
		h4l = c3x("nej.v"),
		be4i = c3x("nej.h"),
		cZ5e = c3x("nej.x"),
		Jt6n, brW8O = {},
		R4V = document.createDocumentFragment();
	a3x.lP8H = cZ5e.lP8H = function(F4J) {
		F4J = a3x.B4F(F4J);
		if (!F4J) return;
		var C4G = !! F4J.id ? F4J.id : "auto-id-" + k4o.TV1x(16);
		F4J.id = C4G;
		if (a3x.B4F(C4G) != F4J) brW8O[C4G] = F4J;
		return C4G
	};
	a3x.B4F = cZ5e.B4F = function(F4J) {
		var g4k = brW8O["" + F4J];
		if ( !! g4k) return g4k;
		if (!k4o.fC6w(F4J) && !k4o.sN1x(F4J)) return F4J;
		return document.getElementById(F4J)
	};
	a3x.dk5p = cZ5e.dk5p = function(F4J, ed6X) {
		F4J = a3x.B4F(F4J);
		if (!F4J) return null;
		var i4m = be4i.bwi0x(F4J);
		if ( !! ed6X) k4o.nk9b(i4m, function(g4k, r4v) {
			if (!a3x.bE4I(g4k, ed6X)) i4m.splice(r4v, 1)
		});
		return i4m
	};
	a3x.H4L = cZ5e.H4L = function(F4J, fP6J) {
		F4J = a3x.B4F(F4J);
		return !F4J ? null : be4i.bwc0x(F4J, fP6J.trim())
	};
	a3x.bFa2x = cZ5e.bFa2x = function(F4J) {
		F4J = a3x.B4F(F4J);
		if ( !! F4J) {
			F4J = F4J.parentNode;
			while ( !! F4J) {
				if (F4J.scrollHeight > F4J.clientHeight) break;
				F4J = F4J.parentNode
			}
			if ( !! F4J) return F4J
		}
		var pk9b = document.body.scrollHeight,
			BP3x = document.documentElement.scrollHeight;
		return BP3x >= pk9b ? document.documentElement : document.body
	};
	a3x.oy9p = function() {
		var bFs2x = function(i4m) {
				var m4q = 0;
				k4o.bd4h(i4m, function(eG6A) {
					if (!eG6A) return;
					if (!m4q) {
						m4q = eG6A
					} else {
						m4q = Math.min(m4q, eG6A)
					}
				});
				return m4q
			};
		return function(xv2x) {
			var JB6v = xv2x || document,
				By3x = JB6v.body,
				BA3x = JB6v.documentElement,
				m4q = {
					scrollTop: Math.max(By3x.scrollTop, BA3x.scrollTop),
					scrollLeft: Math.max(By3x.scrollLeft, BA3x.scrollLeft),
					clientWidth: bFs2x([By3x.clientWidth, By3x.offsetWidth, BA3x.clientWidth, BA3x.offsetWidth]),
					clientHeight: bFs2x([By3x.clientHeight, By3x.offsetHeight, BA3x.clientHeight, BA3x.offsetHeight])
				};
			m4q.scrollWidth = Math.max(m4q.clientWidth, By3x.scrollWidth, BA3x.scrollWidth);
			m4q.scrollHeight = Math.max(m4q.clientHeight, By3x.scrollHeight, BA3x.scrollHeight);
			return m4q
		}
	}();
	a3x.cJA7t = function(fo6i, pq9h) {
		var m4q = NEJ.X({}, pq9h),
			bHp2x = fo6i.width / fo6i.height,
			beE5J = pq9h.width / pq9h.height;
		if (bHp2x > beE5J && pq9h.height > fo6i.height) {
			m4q.height = fo6i.height;
			m4q.width = m4q.height * beE5J
		}
		if (bHp2x < beE5J && pq9h.width > fo6i.width) {
			m4q.width = fo6i.width;
			m4q.height = m4q.width / beE5J
		}
		return m4q
	};
	a3x.cJz7s = function() {
		var df5k = /\s+/;
		var vj1x = {
			left: function() {
				return 0
			},
			center: function(hF7y, pq9h) {
				return (hF7y.width - pq9h.width) / 2
			},
			right: function(hF7y, pq9h) {
				return hF7y.width - pq9h.width
			},
			top: function() {
				return 0
			},
			middle: function(hF7y, pq9h) {
				return (hF7y.height - pq9h.height) / 2
			},
			bottom: function(hF7y, pq9h) {
				return hF7y.height - pq9h.height
			}
		};
		return function(hF7y, pq9h, or9i) {
			var m4q = {},
				bs4w = (or9i || "").split(df5k),
				gy7r = vj1x[bs4w[1]] || vj1x.middle,
				gW7P = vj1x[bs4w[0]] || vj1x.center;
			m4q.top = gy7r(hF7y, pq9h);
			m4q.left = gW7P(hF7y, pq9h);
			return m4q
		}
	}();
	a3x.sO1x = cZ5e.sO1x = function(F4J, ed6X) {
		be4i.bvN9E(F4J, ed6X || a3x.t4x(F4J, "hover") || "js-hover");
		return this
	};
	a3x.JF6z = cZ5e.JF6z = function(F4J) {
		F4J = a3x.B4F(F4J);
		if (!F4J) return;
		be4i.bvG9x(F4J)
	};
	a3x.caw9n = cZ5e.caw9n = function() {
		var R4V = {},
			bKU3x = 2;
		var caQ9H = function(C4G, ed6X, d4h) {
				R4V[C4G] = [h4l.jG8y(d4h), h4l.lZ8R(d4h)];
				a3x.y4C(C4G, ed6X)
			};
		var cbo9f = function(C4G, ed6X, d4h) {
				var bM4Q = R4V[C4G];
				if (!k4o.eL6F(bM4Q)) return;
				var cbF9w = Math.abs(h4l.jG8y(d4h) - bM4Q[0]),
					cbH9y = Math.abs(h4l.lZ8R(d4h) - bM4Q[1]);
				if (cbF9w > bKU3x || cbH9y > bKU3x) bqA8s(C4G, ed6X)
			};
		var bqA8s = function(C4G, ed6X) {
				if (k4o.eL6F(R4V[C4G])) {
					R4V[C4G] = -1;
					a3x.x4B(C4G, ed6X)
				}
			};
		return function(F4J, ed6X) {
			var C4G = a3x.lP8H(F4J);
			if (!C4G || R4V[C4G] != null) return;
			R4V[C4G] = -1;
			ed6X = ed6X || a3x.t4x(C4G, "highlight") || "js-highlight";
			h4l.s4w(C4G, "touchstart", caQ9H.f4j(null, C4G, ed6X));
			h4l.s4w(document, "touchmove", cbo9f.f4j(null, C4G, ed6X));
			h4l.s4w(document, "touchend", bqA8s.f4j(null, C4G, ed6X));
			h4l.s4w(document, "touchcancel", bqA8s.f4j(null, C4G, ed6X))
		}
	}();
	a3x.AE3x = cZ5e.AE3x = function() {
		var cbX9O = function(C4G, ed6X, cbY9P) {
				var F4J = a3x.B4F(C4G),
					d4h = {
						clazz: ed6X,
						target: F4J
					};
				if (a3x.bE4I(F4J, ed6X)) {
					d4h.toggled = !1;
					a3x.x4B(F4J, ed6X)
				} else {
					d4h.toggled = !0;
					a3x.y4C(F4J, ed6X)
				}
				cbY9P.call(null, d4h)
			};
		return function(F4J, e4i) {
			F4J = a3x.B4F(F4J);
			if ( !! F4J) {
				var in7g = {
					ontoggle: br4v,
					clazz: "js-toggle",
					element: F4J.parentNode
				};
				if (k4o.fC6w(e4i)) {
					var g4k = a3x.B4F(e4i); !! g4k ? in7g.element = g4k : in7g.clazz = e4i
				} else {
					NEJ.EX(in7g, e4i);
					in7g.element = a3x.B4F(in7g.element)
				}
				var C4G = a3x.lP8H(in7g.element);
				h4l.s4w(F4J, "click", cbX9O.f4j(null, C4G, in7g.clazz, in7g.ontoggle || br4v))
			}
			return this
		}
	}();
	a3x.my9p = cZ5e.my9p = function(F4J, e4i) {
		F4J = a3x.B4F(F4J);
		if (!F4J) return;
		var fk6e = 0,
			ed6X = "js-focus";
		if (k4o.sN1x(e4i)) {
			fk6e = e4i
		} else if (k4o.fC6w(e4i)) {
			ed6X = e4i
		} else if (k4o.lG8y(e4i)) {
			fk6e = e4i.mode || fk6e;
			ed6X = e4i.clazz || ed6X
		}
		var D4H = parseInt(a3x.t4x(F4J, "mode"));
		if (!isNaN(D4H)) fk6e = D4H;
		D4H = a3x.t4x(F4J, "focus");
		if ( !! D4H) ed6X = D4H;
		be4i.bvy9p(F4J, fk6e, ed6X);
		return this
	};
	a3x.dj5o = function() {
		var bz4D = {
			a: {
				href: "#",
				hideFocus: !0
			},
			style: {
				type: "text/css"
			},
			link: {
				type: "text/css",
				rel: "stylesheet"
			},
			iframe: {
				frameBorder: 0
			},
			script: {
				defer: !0,
				type: "text/javascript"
			}
		};
		return function(fw6q, fP6J, bI4M) {
			var F4J = document.createElement(fw6q);
			NEJ.X(F4J, bz4D[fw6q.toLowerCase()]);
			if ( !! fP6J) F4J.className = fP6J;
			bI4M = a3x.B4F(bI4M);
			if ( !! bI4M) bI4M.appendChild(F4J);
			return F4J
		}
	}();
	a3x.YH2x = function() {
		var ccA9r = function() {
				if (location.hostname == document.domain) return "about:blank";
				return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
			};
		var cdc9T = function(W4a) {
				W4a = W4a.trim();
				if (!W4a) return a3x.dj5o("iframe");
				var eO6I;
				try {
					eO6I = document.createElement('<iframe name="' + W4a + '"></iframe>');
					eO6I.frameBorder = 0
				} catch (e) {
					eO6I = a3x.dj5o("iframe");
					eO6I.name = W4a
				}
				return eO6I
			};
		return function(e4i) {
			e4i = e4i || bb4f;
			var eO6I = cdc9T(e4i.name || "");
			if (!e4i.visible) eO6I.style.display = "none";
			if (k4o.gK7D(e4i.onload)) h4l.s4w(eO6I, "load", function(d4h) {
				if (!eO6I.src) return;
				h4l.he7X(eO6I, "load");
				e4i.onload(d4h)
			});
			var bI4M = e4i.parent;
			if (k4o.gK7D(bI4M)) {
				try {
					bI4M(eO6I)
				} catch (e) {}
			} else {
				(a3x.B4F(bI4M) || document.body).appendChild(eO6I)
			}
			var cV5a = e4i.src || ccA9r();
			window.setTimeout(function() {
				eO6I.src = cV5a
			}, 0);
			return eO6I
		}
	}();
	a3x.cL5Q = cZ5e.cL5Q = function() {
		var bTt7m = function(Af3x) {
				Af3x.src = em6g.bwt0x
			};
		var bUy7r = function(en6h) {
				en6h.src = "about:blank"
			};
		return function(F4J, cds9j) {
			F4J = a3x.B4F(F4J);
			if (!F4J) return this;
			if (!cds9j) h4l.he7X(F4J);
			delete brW8O[F4J.id];
			var fw6q = F4J.tagName;
			if (fw6q == "IFRAME") {
				bUy7r(F4J)
			} else if (fw6q == "IMG") {
				bTt7m(F4J)
			} else if ( !! F4J.getElementsByTagName) {
				k4o.bd4h(F4J.getElementsByTagName("img"), bTt7m);
				k4o.bd4h(F4J.getElementsByTagName("iframe"), bUy7r)
			}
			if ( !! F4J.parentNode) {
				F4J.parentNode.removeChild(F4J)
			}
			return this
		}
	}();
	a3x.mS9J = cZ5e.mS9J = function(F4J) {
		F4J = a3x.B4F(F4J);
		if ( !! F4J) R4V.appendChild(F4J);
		return this
	};
	a3x.bVz7s = cZ5e.bVz7s = function(F4J) {
		F4J = a3x.B4F(F4J);
		if (!F4J) return;
		k4o.nk9b(F4J.childNodes, function(g4k) {
			a3x.cL5Q(g4k)
		})
	};
	a3x.JW6Q = cZ5e.JW6Q = function() {
		var ed6X, gL7E = /\s+/;
		var cdL9C = function() {
				if ( !! ed6X) return;
				ed6X = a3x.to1x(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
				a3x.bzT1x()
			};
		return function(F4J, e4i) {
			F4J = a3x.B4F(F4J);
			if (!F4J) return;
			cdL9C();
			e4i = e4i || bb4f;
			var bI4M = F4J.parentNode;
			if (!a3x.bE4I(bI4M, ed6X)) {
				bI4M = a3x.dj5o("span", ed6X);
				F4J.insertAdjacentElement("beforeBegin", bI4M);
				bI4M.appendChild(F4J)
			}
			var bBk1x = e4i.nid || "",
				g4k = a3x.H4L(bI4M, bBk1x || ed6X + "-show")[0];
			if (!g4k) {
				var ec6W = ((e4i.clazz || "") + " " + bBk1x).trim();
				ec6W = ed6X + "-show" + (!ec6W ? "" : " ") + ec6W;
				g4k = a3x.dj5o(e4i.tag || "span", ec6W);
				bI4M.appendChild(g4k)
			}
			var ec6W = e4i.clazz;
			if ( !! ec6W) {
				ec6W = (ec6W || "").trim().split(gL7E)[0] + "-parent";
				a3x.y4C(bI4M, ec6W)
			}
			return g4k
		}
	}();
	a3x.t4x = cZ5e.t4x = function() {
		var bqi8a = {},
			fw6q = "data-",
			df5k = /\-(.{1})/gi;
		var Eh4l = function(F4J) {
				var C4G = a3x.lP8H(F4J);
				if ( !! bqi8a[C4G]) return;
				var bz4D = {};
				k4o.bd4h(F4J.attributes, function(g4k) {
					var K4O = g4k.nodeName;
					if (K4O.indexOf(fw6q) != 0) return;
					K4O = K4O.replace(fw6q, "").replace(df5k, function($1, $2) {
						return $2.toUpperCase()
					});
					bz4D[K4O] = g4k.nodeValue || ""
				});
				bqi8a[C4G] = bz4D
			};
		return function(F4J, K4O, D4H) {
			F4J = a3x.B4F(F4J);
			if (!F4J) return null;
			var XB2x = F4J.dataset;
			if (!XB2x) {
				Eh4l(F4J);
				XB2x = bqi8a[F4J.id]
			}
			if (D4H !== undefined) XB2x[K4O] = D4H;
			return XB2x[K4O]
		}
	}();
	a3x.gJ7C = cZ5e.gJ7C = function(F4J, W4a, D4H) {
		F4J = a3x.B4F(F4J);
		if (!F4J) return "";
		if (D4H !== undefined && !! F4J.setAttribute) F4J.setAttribute(W4a, D4H);
		return be4i.btx9o(F4J, W4a)
	};
	a3x.nR9I = function(dV5a) {
		var rK0x = document.createElement("div");
		rK0x.innerHTML = dV5a;
		var i4m = a3x.dk5p(rK0x);
		return i4m.length > 1 ? rK0x : i4m[0]
	};
	a3x.cdX9O = cZ5e.cdX9O = function(F4J) {
		F4J = a3x.B4F(F4J);
		return !F4J ? "" : be4i.buT9K(F4J)
	};
	a3x.bEb2x = function(CV4Z) {
		CV4Z = (CV4Z || "").trim();
		return !CV4Z ? null : be4i.buK9B(CV4Z)
	};
	a3x.ces9j = function(cK5P, u4y) {
		cK5P = cK5P || "";
		switch (u4y) {
		case "xml":
			cK5P = a3x.bEb2x(cK5P);
			break;
		case "json":
			try {
				cK5P = JSON.parse(cK5P)
			} catch (ex) {
				cK5P = null
			}
			break
		}
		return cK5P
	};
	a3x.hU7N = cZ5e.hU7N = function() {
		var cfl0x = function(F4J) {
				return F4J == document.body || F4J == document.documentElement
			};
		return function(ee6Y, nb9S) {
			ee6Y = a3x.B4F(ee6Y);
			if (!ee6Y) return null;
			nb9S = a3x.B4F(nb9S) || null;
			var m4q = {
				x: 0,
				y: 0
			},
				bpG8y, dq5v, Yx2x;
			while ( !! ee6Y && ee6Y != nb9S) {
				bpG8y = cfl0x(ee6Y);
				dq5v = bpG8y ? 0 : ee6Y.scrollLeft;
				Yx2x = parseInt(a3x.dh5m(ee6Y, "borderLeftWidth")) || 0;
				m4q.x += ee6Y.offsetLeft + Yx2x - dq5v;
				dq5v = bpG8y ? 0 : ee6Y.scrollTop;
				Yx2x = parseInt(a3x.dh5m(ee6Y, "borderTopWidth")) || 0;
				m4q.y += ee6Y.offsetTop + Yx2x - dq5v;
				ee6Y = ee6Y.offsetParent
			}
			return m4q
		}
	}();
	a3x.mX9O = cZ5e.mX9O = function(F4J) {
		var bi4m = a3x.hU7N(F4J);
		window.scrollTo(bi4m.x, bi4m.y);
		return this
	};
	a3x.cIY7R = function(sX1x) {
		sX1x = (sX1x || "").trim();
		return be4i.bBR1x(sX1x)
	};
	a3x.cfp0x = cZ5e.cfp0x = function(F4J, W4a, bz4D) {
		F4J = a3x.B4F(F4J);
		if (!F4J) return this;
		var D4H = be4i.bFY2x(W4a, bz4D);
		if (!D4H) return this;
		a3x.ba4e(F4J, "transform", D4H);
		return this
	};
	a3x.fb6V = cZ5e.fb6V = function(F4J, bz4D) {
		F4J = a3x.B4F(F4J);
		if ( !! F4J) k4o.eI6C(bz4D, function(D4H, W4a) {
			a3x.ba4e(F4J, W4a, D4H)
		});
		return this
	};
	a3x.cfE0x = cZ5e.cfE0x = function(gf6Z, e4i) {
		gf6Z = a3x.B4F(gf6Z);
		if (!gf6Z) return {
			start: 0,
			end: 0
		};
		if (k4o.sN1x(e4i)) e4i = {
			start: e4i,
			end: e4i
		};
		if (e4i != null) {
			if (e4i.end == null) e4i.end = e4i.start || 0;
			be4i.bvC9t(gf6Z, e4i)
		} else {
			e4i = be4i.bvB9s(gf6Z)
		}
		return e4i
	};
	a3x.ba4e = cZ5e.ba4e = function(F4J, W4a, D4H) {
		F4J = a3x.B4F(F4J);
		if ( !! F4J) be4i.buc9T(F4J, W4a, D4H);
		return this
	};
	a3x.dh5m = cZ5e.dh5m = function(F4J, W4a) {
		F4J = a3x.B4F(F4J);
		if (!F4J) return "";
		var hi7b = !window.getComputedStyle ? F4J.currentStyle || bb4f : window.getComputedStyle(F4J, null);
		return hi7b[be4i.bJA3x(W4a)] || ""
	};
	a3x.bHG2x = function() {
		var df5k = /[\s\r\n]+/gi;
		return function(cj4n) {
			cj4n = (cj4n || "").trim().replace(df5k, " ");
			if (!cj4n) return;
			var g4k = a3x.dj5o("style");
			document.head.appendChild(g4k);
			be4i.btR9I(g4k, be4i.bWW8O(cj4n));
			return g4k
		}
	}();
	a3x.bHS3x = function(Av3x) {
		try {
			Av3x = Av3x.trim();
			if ( !! Av3x) return (new Function(Av3x))()
		} catch (ex) {
			console.error(ex.message);
			console.error(ex.stack)
		}
	};
	a3x.to1x = function() {
		var df5k = /#<.*?>/g,
			gG7z = +(new Date);
		return function(km8e) {
			if (!Jt6n) Jt6n = [];
			var fP6J = "auto-" + gG7z++;
			Jt6n.push(km8e.replace(df5k, fP6J));
			return fP6J
		}
	}();
	a3x.bzT1x = function() {
		if ( !! Jt6n) {
			a3x.bHG2x(Jt6n.join(""));
			Jt6n = null
		}
		return this
	};
	a3x.cIV7O = function(cj4n, km8e) {
		cj4n = a3x.B4F(cj4n);
		return !cj4n ? null : be4i.btQ9H(cj4n, km8e)
	};
	a3x.y4C = cZ5e.y4C = function() {
		be4i.bwb0x.apply(be4i, arguments);
		return this
	};
	a3x.x4B = cZ5e.x4B = function() {
		be4i.bvV9M.apply(be4i, arguments);
		return this
	};
	a3x.fj6d = cZ5e.fj6d = function() {
		be4i.Ux1x.apply(be4i, arguments);
		return this
	};
	a3x.bE4I = cZ5e.bE4I = function() {
		return be4i.bvO9F.apply(be4i, arguments)
	};
	if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
	cZ5e.isChange = !0
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		fy6s = NEJ.R,
		br4v = NEJ.F,
		a3x = c3x("nej.e"),
		be4i = c3x("nej.h"),
		k4o = c3x("nej.u");
	var El4p = function(j4n, u4y) {
			try {
				u4y = u4y.toLowerCase();
				if (j4n === null) return u4y == "null";
				if (j4n === undefined) return u4y == "undefined";
				return bb4f.toString.call(j4n).toLowerCase() == "[object " + u4y + "]"
			} catch (e) {
				return !1
			}
		};
	k4o.gK7D = function(j4n) {
		return El4p(j4n, "function")
	};
	k4o.fC6w = function(j4n) {
		return El4p(j4n, "string")
	};
	k4o.sN1x = function(j4n) {
		return El4p(j4n, "number")
	};
	k4o.cIU7N = function(j4n) {
		return El4p(j4n, "boolean")
	};
	k4o.Em4q = function(j4n) {
		return El4p(j4n, "date")
	};
	k4o.eL6F = function(j4n) {
		return El4p(j4n, "array")
	};
	k4o.lG8y = function(j4n) {
		return El4p(j4n, "object")
	};
	k4o.fv6p = function() {
		var df5k = /[^\x00-\xfff]/g;
		return function(bo4s) {
			return ("" + (bo4s || "")).replace(df5k, "**").length
		}
	}();
	k4o.di5n = function(i4m, p4t) {
		var dZ6T = k4o.gK7D(p4t) ? p4t : function(D4H) {
				return D4H === p4t
			},
			r4v = k4o.eI6C(i4m, dZ6T);
		return r4v != null ? r4v : -1
	};
	k4o.cIQ7J = function() {
		var bKM3x;
		var NS9J = function(i4m, pp9g, po9f) {
				if (pp9g > po9f) return -1;
				var Eq4u = Math.ceil((pp9g + po9f) / 2),
					m4q = bKM3x(i4m[Eq4u], Eq4u, i4m);
				if (m4q == 0) return Eq4u;
				if (m4q < 0) return NS9J(i4m, pp9g, Eq4u - 1);
				return NS9J(i4m, Eq4u + 1, po9f)
			};
		return function(i4m, Jm6g) {
			bKM3x = Jm6g || br4v;
			return NS9J(i4m, 0, i4m.length - 1)
		}
	}();
	k4o.nk9b = function(i4m, cA5F, P4T) {
		if (!i4m || !i4m.length || !k4o.gK7D(cA5F)) return null;
		for (var i = i4m.length - 1; i >= 0; i--) if ( !! cA5F.call(P4T, i4m[i], i, i4m)) return i;
		return null
	};
	k4o.bd4h = function(i4m, cA5F, P4T) {
		if (!i4m || !i4m.length || !k4o.gK7D(cA5F)) return this;
		if ( !! i4m.forEach) {
			i4m.forEach(cA5F, P4T);
			return this
		}
		for (var i = 0, l = i4m.length; i < l; i++) cA5F.call(P4T, i4m[i], i, i4m);
		return this
	};
	k4o.eI6C = function(i4m, cA5F, P4T) {
		if (!i4m || !k4o.gK7D(cA5F)) return null;
		if (i4m.length != null) {
			if (i4m.length > 0) for (var i = 0, l = i4m.length; i < l; i++) if ( !! cA5F.call(P4T, i4m[i], i, i4m)) return i
		}
		if (k4o.lG8y(i4m)) {
			for (var x in i4m) if (i4m.hasOwnProperty(x) && !! cA5F.call(P4T, i4m[x], x, i4m)) return x
		}
		return null
	};
	k4o.cgp0x = function(jq8i, cgs0x, e4i) {
		jq8i = jq8i || [];
		e4i = e4i || bb4f;
		var bPr4v = !! e4i.union,
			xt2x = !! e4i.begin,
			Zu3x = e4i.compare,
			cgP0x = bPr4v && xt2x ? k4o.nk9b : k4o.bd4h;
		cgP0x(cgs0x, function(p4t) {
			if ( !! Zu3x) Zu3x = Zu3x.eA6u(p4t);
			var r4v = k4o.di5n(jq8i, Zu3x || p4t);
			if (r4v >= 0) jq8i.splice(r4v, 1);
			if (bPr4v) jq8i[xt2x ? "unshift" : "push"](p4t)
		});
		return jq8i
	};
	k4o.Dq4u = function(bz4D, bo4s) {
		if (!bz4D || !bo4s || !bo4s.replace) return bo4s || "";
		return bo4s.replace(bz4D.r, function($1) {
			var m4q = bz4D[!bz4D.i ? $1.toLowerCase() : $1];
			return m4q != null ? m4q : $1
		})
	};
	k4o.dH5M = function() {
		var bz4D = {
			r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
			"<": "&lt;",
			">": "&gt;",
			"&": "&amp;",
			" ": "&nbsp;",
			'"': "&quot;",
			"'": "&#39;",
			"\n": "<br/>",
			"\r": "",
			"&lt;": "&lt;",
			"&gt;": "&gt;"
		};
		return function(bo4s) {
			return k4o.Dq4u(bz4D, bo4s)
		}
	}();
	k4o.Dw4A = function() {
		var bz4D = {
			r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
			"&lt;": "<",
			"&gt;": ">",
			"&amp;": "&",
			"&nbsp;": " ",
			"&#39;": "'",
			"&quot;": '"',
			"<br/>": "\n"
		};
		return function(bo4s) {
			return k4o.Dq4u(bz4D, bo4s)
		}
	}();
	k4o.ih7a = function() {
		var bz4D = {
			i: !0,
			r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
		},
			cgV0x = ["上午", "下午"],
			cgX0x = ["A.M.", "P.M."],
			boE8w = ["日", "一", "二", "三", "四", "五", "六"],
			chc0x = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
			chI0x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
		var Oo9f = function(gX7Q) {
				gX7Q = parseInt(gX7Q) || 0;
				return (gX7Q < 10 ? "0" : "") + gX7Q
			};
		var chO0x = function(qf0x) {
				return qf0x < 12 ? 0 : 1
			};
		return function(bA4E, Kr6l, cia0x) {
			if (!bA4E || !Kr6l) return "";
			bA4E = k4o.baa3x(bA4E);
			bz4D.yyyy = bA4E.getFullYear();
			bz4D.yy = ("" + bz4D.yyyy).substr(2);
			bz4D.M = bA4E.getMonth() + 1;
			bz4D.MM = Oo9f(bz4D.M);
			bz4D.eM = chI0x[bz4D.M - 1];
			bz4D.cM = chc0x[bz4D.M - 1];
			bz4D.d = bA4E.getDate();
			bz4D.dd = Oo9f(bz4D.d);
			bz4D.H = bA4E.getHours();
			bz4D.HH = Oo9f(bz4D.H);
			bz4D.m = bA4E.getMinutes();
			bz4D.mm = Oo9f(bz4D.m);
			bz4D.s = bA4E.getSeconds();
			bz4D.ss = Oo9f(bz4D.s);
			bz4D.ms = bA4E.getMilliseconds();
			bz4D.w = boE8w[bA4E.getDay()];
			var bzH0x = chO0x(bz4D.H);
			bz4D.ct = cgV0x[bzH0x];
			bz4D.et = cgX0x[bzH0x];
			if ( !! cia0x) {
				bz4D.H = bz4D.H % 12
			}
			return k4o.Dq4u(bz4D, Kr6l)
		}
	}();
	k4o.baa3x = function(bA4E) {
		var da5f = bA4E;
		if (k4o.fC6w(bA4E)) da5f = new Date(Date.parse(bA4E));
		if (!k4o.Em4q(bA4E)) da5f = new Date(bA4E);
		return da5f
	};
	k4o.JF6z = function(cii1x, ciE1x) {
		return (new Number(cii1x)).toFixed(ciE1x)
	};
	k4o.bot7m = function() {
		var gL7E = /([^\/:])\/.*$/,
			kn8f = /\/[^\/]+$/,
			Ev4z = /[#\?]/,
			boq7j = location.href.split(/[?#]/)[0],
			tz1x = document.createElement("a");
		var bom7f = function(jn8f) {
				return (jn8f || "").indexOf("://") > 0
			};
		var bCe1x = function(jn8f) {
				return (jn8f || "").split(Ev4z)[0].replace(kn8f, "/")
			};
		var ciI1x = function(jn8f, fZ6T) {
				if (jn8f.indexOf("/") == 0) return fZ6T.replace(gL7E, "$1") + jn8f;
				return bCe1x(fZ6T) + jn8f
			};
		boq7j = bCe1x(boq7j);
		return function(jn8f, fZ6T) {
			jn8f = (jn8f || "").trim();
			if (!bom7f(fZ6T)) fZ6T = boq7j;
			if (!jn8f) return fZ6T;
			if (bom7f(jn8f)) return jn8f;
			jn8f = ciI1x(jn8f, fZ6T);
			tz1x.href = jn8f;
			jn8f = tz1x.href;
			return bom7f(jn8f) ? jn8f : tz1x.getAttribute("href", 4)
		}
	}();
	k4o.cjc1x = function() {
		var df5k = /^([\w]+?:\/\/.*?(?=\/|$))/i;
		return function(Y4c) {
			if (df5k.test(Y4c || "")) return RegExp.$1.toLowerCase();
			return ""
		}
	}();
	k4o.bCN1x = function(G4K, in7g) {
		if (!G4K) return in7g;
		var W4a = G4K.tagName.toLowerCase(),
			i4m = a3x.dk5p(G4K);
		if (!i4m || !i4m.length) {
			in7g[W4a] = G4K.textContent || G4K.text || "";
			return in7g
		}
		var cl4p = {};
		in7g[W4a] = cl4p;
		k4o.bd4h(i4m, function(g4k) {
			k4o.bCN1x(g4k, cl4p)
		});
		return in7g
	};
	k4o.cIt7m = function(CV4Z) {
		try {
			return k4o.bCN1x(a3x.bEb2x(CV4Z), {})
		} catch (ex) {
			return null
		}
	};
	k4o.OE9v = function(hX7Q, OI0x) {
		var in7g = {};
		k4o.bd4h((hX7Q || "").split(OI0x), function(W4a) {
			var bbu4y = W4a.split("=");
			if (!bbu4y || !bbu4y.length) return;
			var K4O = bbu4y.shift();
			if (!K4O) return;
			in7g[decodeURIComponent(K4O)] = decodeURIComponent(bbu4y.join("="))
		});
		return in7g
	};
	k4o.vH1x = function(gq6k, OI0x, ckh1x) {
		if (!gq6k) return "";
		var bs4w = [];
		for (var x in gq6k) {
			bs4w.push(encodeURIComponent(x) + "=" + ( !! ckh1x ? encodeURIComponent(gq6k[x]) : gq6k[x]))
		}
		return bs4w.join(OI0x || ",")
	};
	k4o.hq7j = function(bv4z) {
		return k4o.OE9v(bv4z, "&")
	};
	k4o.cD5I = function(gq6k) {
		return k4o.vH1x(gq6k, "&", !0)
	};
	k4o.cIr7k = function(gq6k) {
		return be4i.Ix5C(gq6k)
	};
	k4o.cIq7j = function(i4m, dZ6T) {
		var m4q = {};
		k4o.bd4h(i4m, function(p4t) {
			var K4O = p4t;
			if ( !! dZ6T) {
				K4O = dZ6T(p4t)
			}
			m4q[K4O] = p4t
		});
		return m4q
	};
	k4o.cIp7i = function(gX7Q, gc6W) {
		var ckn1x = ("" + gX7Q).length,
			ckq1x = Math.max(1, parseInt(gc6W) || 0),
			dq5v = ckq1x - ckn1x;
		if (dq5v > 0) {
			gX7Q = (new Array(dq5v + 1)).join("0") + gX7Q
		}
		return "" + gX7Q
	};
	k4o.bbS4W = function(gq6k, W4a) {
		if (!k4o.eL6F(W4a)) {
			try {
				delete gq6k[W4a]
			} catch (e) {
				gq6k[W4a] = undefined
			}
			return this
		}
		k4o.bd4h(W4a, k4o.bbS4W.f4j(k4o, gq6k));
		return this
	};
	k4o.TV1x = function() {
		var bGr2x = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
		return function(bq4u) {
			bq4u = bq4u || 10;
			var m4q = [];
			for (var i = 0, bGs2x; i < bq4u; ++i) {
				bGs2x = Math.floor(Math.random() * bGr2x.length);
				m4q.push(bGr2x.charAt(bGs2x))
			}
			return m4q.join("")
		}
	}();
	k4o.DA4E = function(fE6y, fo6i) {
		return Math.floor(Math.random() * (fo6i - fE6y) + fE6y)
	};
	k4o.ol9c = function(bq4u) {
		bq4u = Math.max(0, Math.min(bq4u || 8, 30));
		var fE6y = Math.pow(10, bq4u - 1),
			fo6i = fE6y * 10;
		return k4o.DA4E(fE6y, fo6i).toString()
	};
	k4o.bbZ4d = function() {
		var gG7z = +(new Date);
		return function() {
			return "" + gG7z++
		}
	}()
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		fy6s = NEJ.R,
		br4v = NEJ.F,
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		O4S = c3x("nej.ut"),
		oI9z;
	if ( !! O4S.cJ5O) return;
	O4S.cJ5O = NEJ.C();
	oI9z = O4S.cJ5O.prototype;
	O4S.cJ5O.A4E = function(e4i) {
		e4i = e4i || {};
		var cF5K = !! this.AV3x && this.AV3x.shift();
		if (!cF5K) {
			cF5K = new this(e4i);
			this.ckw1x = (this.ckw1x || 0) + 1
		}
		cF5K.bl4p(e4i);
		return cF5K
	};
	O4S.cJ5O.T4X = function() {
		var Po0x = function(p4t, r4v, i4m) {
				p4t.T4X();
				i4m.splice(r4v, 1)
			};
		return function(cF5K) {
			if (!cF5K) return null;
			if (!k4o.eL6F(cF5K)) {
				if (!(cF5K instanceof this)) {
					var fP6J = cF5K.constructor;
					if ( !! fP6J.T4X) fP6J.T4X(cF5K);
					return null
				}
				if (cF5K == this.fg6a) delete this.fg6a;
				if (cF5K == this.BB3x) delete this.BB3x;
				cF5K.bC4G();
				if (!this.AV3x) this.AV3x = [];
				if (k4o.di5n(this.AV3x, cF5K) < 0) {
					this.AV3x.push(cF5K)
				}
				return null
			}
			k4o.nk9b(cF5K, Po0x, this)
		}
	}();
	O4S.cJ5O.gm6g = function(e4i) {
		e4i = e4i || {};
		if (!this.fg6a) this.fg6a = this.A4E(e4i);
		return this.fg6a
	};
	O4S.cJ5O.bKi3x = function(e4i, rT0x) {
		e4i = e4i || {};
		if ( !! rT0x && !! this.BB3x) {
			this.BB3x.T4X();
			delete this.BB3x
		}
		if (!this.BB3x) {
			this.BB3x = this.A4E(e4i)
		} else {
			this.BB3x.bl4p(e4i)
		}
		return this.BB3x
	};
	oI9z.cw5B = function() {
		var gG7z = +(new Date);
		return function() {
			this.id = gG7z++;
			this.lV8N = {};
			this.bKJ3x = {}
		}
	}();
	oI9z.bl4p = function(e4i) {
		this.bne7X(e4i)
	};
	oI9z.bC4G = function() {
		this.he7X();
		this.KO6I()
	};
	oI9z.bX4b = function() {
		var gG7z = +(new Date);
		var ckT1x = function(bf4j) {
				if (!bf4j || bf4j.length < 3) return;
				this.bKJ3x["de-" + gG7z++] = bf4j;
				h4l.s4w.apply(h4l, bf4j)
			};
		return function(i4m) {
			k4o.bd4h(i4m, ckT1x, this)
		}
	}();
	oI9z.KO6I = function() {
		var ckV1x = function(bf4j, K4O, bz4D) {
				delete bz4D[K4O];
				h4l.mo8g.apply(h4l, bf4j)
			};
		return function() {
			k4o.eI6C(this.bKJ3x, ckV1x)
		}
	}();
	oI9z.cIi7b = function(dZ6T) {
		dZ6T = dZ6T || br4v;
		k4o.eI6C(this, function(EC4G, K4O, bz4D) {
			if ( !! EC4G && !! EC4G.T4X && !dZ6T(EC4G)) {
				delete bz4D[K4O];
				EC4G.T4X()
			}
		})
	};
	oI9z.T4X = function() {
		this.constructor.T4X(this)
	};
	oI9z.bmH7A = function(u4y) {
		var d4h = this.lV8N[u4y.toLowerCase()];
		return !!d4h && d4h !== br4v
	};
	oI9z.s4w = function(u4y, d4h) {
		this.wq2x.apply(this, arguments);
		return this
	};
	oI9z.mo8g = function(u4y, d4h) {
		var u4y = (u4y || "").toLowerCase(),
			eh6b = this.lV8N[u4y];
		if (!k4o.eL6F(eh6b)) {
			if (eh6b == d4h) delete this.lV8N[u4y];
			return
		}
		k4o.nk9b(eh6b, function(ev6p, r4v, i4m) {
			if (ev6p == d4h) i4m.splice(r4v, 1)
		})
	};
	oI9z.wq2x = function(u4y, d4h) {
		if ( !! u4y && k4o.gK7D(d4h)) this.lV8N[u4y.toLowerCase()] = d4h;
		return this
	};
	oI9z.bne7X = function() {
		var cmQ2x = function(d4h, u4y) {
				this.wq2x(u4y, d4h)
			};
		return function(eh6b) {
			k4o.eI6C(eh6b, cmQ2x, this);
			return this
		}
	}();
	oI9z.he7X = function() {
		var bmC7v = function(d4h, u4y) {
				this.he7X(u4y)
			};
		return function(u4y) {
			var u4y = (u4y || "").toLowerCase();
			if ( !! u4y) {
				delete this.lV8N[u4y]
			} else {
				k4o.eI6C(this.lV8N, bmC7v, this)
			}
			return this
		}
	}();
	oI9z.bmB7u = function(u4y, d4h) {
		if (!u4y || !k4o.gK7D(d4h)) return this;
		u4y = u4y.toLowerCase();
		var eh6b = this.lV8N[u4y];
		if (!eh6b) {
			this.lV8N[u4y] = d4h;
			return this
		}
		if (!k4o.eL6F(eh6b)) {
			this.lV8N[u4y] = [eh6b]
		}
		this.lV8N[u4y].push(d4h);
		return this
	};
	oI9z.z4D = function(u4y) {
		var d4h = this.lV8N[(u4y || "").toLowerCase()];
		if (!d4h) return this;
		var bf4j = fy6s.slice.call(arguments, 1);
		if (!k4o.eL6F(d4h)) return d4h.apply(this, bf4j);
		k4o.bd4h(d4h, function(dx5C) {
			try {
				dx5C.apply(this, bf4j)
			} catch (ex) {
				console.error(ex.message);
				console.error(ex.stack)
			}
		}, this);
		return this
	};
	O4S.beT5Y = function() {
		var R4V = {};
		return function(C4G, fP6J, e4i) {
			var fh6b = fP6J.cnQ2x;
			if (!fh6b) {
				fh6b = k4o.TV1x(10);
				fP6J.cnQ2x = fh6b
			}
			var K4O = C4G + "-" + fh6b,
				cF5K = R4V[K4O];
			if ( !! e4i && !cF5K) {
				cF5K = fP6J.A4E(e4i);
				cF5K.T4X = cF5K.T4X.eH6B(function(d4h) {
					delete R4V[K4O];
					delete cF5K.T4X
				});
				R4V[K4O] = cF5K
			}
			return cF5K
		}
	}()
})();
(function() {
	var o = NEJ.O,
		u = NEJ.P("nej.u"),
		j = NEJ.P("nej.j");
	j.gx6r = function() {
		var da5f = new Date,
			con2x = +da5f,
			bmp7i = 864e5;
		var coC2x = function(W4a) {
				var rE0x = document.cookie,
					ui1x = "\\b" + W4a + "=",
					Wt2x = rE0x.search(ui1x);
				if (Wt2x < 0) return "";
				Wt2x += ui1x.length - 2;
				var xe2x = rE0x.indexOf(";", Wt2x);
				if (xe2x < 0) xe2x = rE0x.length;
				return rE0x.substring(Wt2x, xe2x) || ""
			};
		return function(W4a, j4n) {
			if (j4n === undefined) return coC2x(W4a);
			if (u.fC6w(j4n)) {
				if ( !! j4n) {
					document.cookie = W4a + "=" + j4n + ";";
					return j4n
				}
				j4n = {
					expires: -100
				}
			}
			j4n = j4n || o;
			var rE0x = W4a + "=" + (j4n.value || "") + ";";
			delete j4n.value;
			if (j4n.expires !== undefined) {
				da5f.setTime(con2x + j4n.expires * bmp7i);
				j4n.expires = da5f.toGMTString()
			}
			rE0x += u.vH1x(j4n, ";");
			document.cookie = rE0x
		}
	}()
})();
(function() {
	var c3x = NEJ.P,
		br4v = NEJ.F,
		iB7u = c3x("nej.c"),
		em6g = c3x("nej.g"),
		a3x = c3x("nej.e"),
		v4z = c3x("nej.j"),
		I4M = c3x("nej.ut"),
		O4S = c3x("nej.ut.j"),
		k4o = c3x("nej.u"),
		b3x;
	if ( !! O4S.Lg6a) return;
	O4S.Lg6a = NEJ.C();
	b3x = O4S.Lg6a.N4R(I4M.cJ5O);
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.qb0x = {
			noescape: false,
			url: "",
			sync: !1,
			cookie: !1,
			type: "text",
			method: "GET",
			timeout: 6e4
		};
		NEJ.EX(this.qb0x, e4i);
		var CY4c = iB7u.B4F("csrf");
		if ((/^\/[^\/]/.test(this.qb0x.url) || this.qb0x.url.indexOf(location.protocol + "//" + location.host) == 0) && !! CY4c.cookie && !! CY4c.param) {
			var bv4z = encodeURIComponent(CY4c.param) + "=" + encodeURIComponent(v4z.gx6r(CY4c.cookie) || ""),
				OI0x = this.qb0x.url.indexOf("?") < 0 ? "?" : "&";
			this.qb0x.url += OI0x + bv4z
		}
		this.WB2x = e4i.headers || {};
		var bo4s = this.WB2x[em6g.yg2x];
		if (bo4s == null) this.WB2x[em6g.yg2x] = em6g.bWv8n
	};
	b3x.bC4G = function() {
		this.bF4J();
		delete this.AH3x;
		delete this.qb0x;
		delete this.WB2x
	};
	b3x.coJ2x = function(bo4s) {
		var bz4D = {
			r: /\<|\>/g,
			"<": "&lt;",
			">": "&gt;"
		};
		if (!this.qb0x.noescape) {
			return k4o.Dq4u(bz4D, bo4s)
		} else {
			return bo4s
		}
	};
	b3x.vy1x = function(d4h) {
		var ex6r = d4h.status;
		if (ex6r == -1) {
			this.z4D("onerror", {
				code: em6g.bSM7F,
				message: "请求[" + this.qb0x.url + "]超时！"
			});
			return
		}
		if (("" + ex6r).indexOf("2") != 0) {
			this.z4D("onerror", {
				data: ex6r,
				code: em6g.bwC0x,
				message: "服务器返回异常状态[" + ex6r + "]!",
				extData: d4h.result
			});
			return
		}
		this.z4D("onload", a3x.ces9j(this.coJ2x(d4h.result), this.qb0x.type))
	};
	b3x.cp5u = br4v;
	b3x.blW7P = function(j4n) {
		var Y4c = this.qb0x.url;
		if (!Y4c) {
			this.z4D("onerror", {
				code: em6g.bwV0x,
				message: "没有输入请求地址！"
			});
			return this
		}
		try {
			this.qb0x.data = j4n == null ? null : j4n;
			var d4h = {
				request: this.qb0x,
				headers: this.WB2x
			};
			try {
				this.z4D("onbeforerequest", d4h)
			} catch (ex) {
				console.error(ex.message);
				console.error(ex.stack)
			}
			this.cp5u(d4h)
		} catch (e) {
			this.z4D("onerror", {
				code: em6g.bwC0x,
				message: "请求[" + Y4c + "]失败:" + e.message + "！"
			})
		}
		return this
	};
	b3x.ky8q = br4v
})();
(function() {
	var c3x = NEJ.P,
		br4v = NEJ.F,
		be4i = c3x("nej.h"),
		em6g = c3x("nej.g"),
		k4o = c3x("nej.u"),
		O4S = c3x("nej.ut.j"),
		R4V = {},
		QG0x;
	if ( !! O4S.WR2x) return;
	O4S.WR2x = NEJ.C();
	QG0x = O4S.WR2x.N4R(O4S.Lg6a);
	QG0x.bC4G = function() {
		this.bF4J();
		window.clearTimeout(this.ei6c);
		delete this.ei6c;
		try {
			this.sK1x.onreadystatechange = br4v;
			this.sK1x.abort()
		} catch (e) {}
		delete this.sK1x
	};
	QG0x.cp5u = function() {
		var coQ2x = function(D4H, K4O) {
				this.sK1x.setRequestHeader(K4O, D4H)
			};
		return function(e4i) {
			var gl6f = e4i.request,
				pe9V = e4i.headers;
			this.sK1x = be4i.blM7F();
			if (pe9V[em6g.yg2x] === em6g.DH4L) {
				delete pe9V[em6g.yg2x];
				this.sK1x.upload.onprogress = this.gu6o.f4j(this, 1);
				if (gl6f.data.tagName === "FORM") gl6f.data = new FormData(gl6f.data)
			}
			this.sK1x.onreadystatechange = this.gu6o.f4j(this, 2);
			if (gl6f.timeout != 0) {
				this.ei6c = window.setTimeout(this.gu6o.f4j(this, 3), gl6f.timeout)
			}
			this.sK1x.open(gl6f.method, gl6f.url, !gl6f.sync);
			k4o.eI6C(pe9V, coQ2x, this);
			if ( !! this.qb0x.cookie && "withCredentials" in this.sK1x) this.sK1x.withCredentials = !0;
			this.sK1x.send(gl6f.data)
		}
	}();
	QG0x.gu6o = function(u4y) {
		switch (u4y) {
		case 1:
			this.z4D("onuploading", arguments[1]);
			break;
		case 2:
			if (this.sK1x.readyState == 4) this.vy1x({
				status: this.sK1x.status,
				result: this.sK1x.responseText || ""
			});
			break;
		case 3:
			this.vy1x({
				status: -1
			});
			break
		}
	};
	QG0x.ky8q = function() {
		this.vy1x({
			status: 0
		});
		return this
	}
})();
(function() {
	if (typeof TrimPath === "undefined") {
		TrimPath = {};
		if (typeof exports !== "undefined") TrimPath = exports
	}
	var QZ0x = {},
		XF2x = [],
		bDS2x = /\s+/g,
		gG7z = +(new Date),
		Lw6q, bR4V, hI7B;
	var EJ4N = function() {
			var gL7E = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
				kn8f = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
				Ev4z = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
				blm7f = /^new\s+/,
				cpm2x = /['"]/;
			var cpo2x = function(D4H) {
					if (gL7E.test(D4H)) return;
					D4H = D4H.split(".")[0].trim();
					if (!D4H || cpm2x.test(D4H)) return;
					D4H = D4H.replace(blm7f, "");
					try {
						if (Ev4z.test(D4H)) return;
						hI7B[D4H] = 1
					} catch (e) {}
				};
			return function(bo4s) {
				bo4s = bo4s || "";
				if (!bo4s || gL7E.test(bo4s)) return;
				var bs4w = bo4s.split(kn8f);
				for (var i = 0, l = bs4w.length; i < l; i++) cpo2x(bs4w[i])
			}
		}();
	var cpq2x = function(dL5Q) {
			if (dL5Q[2] != "in") throw "bad for loop statement: " + dL5Q.join(" ");
			XF2x.push(dL5Q[1]);
			EJ4N(dL5Q[3]);
			return "var __HASH__" + dL5Q[1] + " = " + dL5Q[3] + "," + dL5Q[1] + "," + dL5Q[1] + "_count=0;" + "if (!!__HASH__" + dL5Q[1] + ")" + "for(var " + dL5Q[1] + "_key in __HASH__" + dL5Q[1] + "){" + dL5Q[1] + " = __HASH__" + dL5Q[1] + "[" + dL5Q[1] + "_key];" + "if (typeof(" + dL5Q[1] + ')=="function") continue;' + dL5Q[1] + "_count++;"
		};
	var cps2x = function() {
			var dL5Q = XF2x[XF2x.length - 1];
			return "}; if(!__HASH__" + dL5Q + "||!" + dL5Q + "_count){"
		};
	var cpt2x = function() {
			XF2x.pop();
			return "};"
		};
	var cpu2x = function(dL5Q) {
			if (dL5Q[2] != "as") throw "bad for list loop statement: " + dL5Q.join(" ");
			var RP0x = dL5Q[1].split("..");
			if (RP0x.length > 1) {
				EJ4N(RP0x[0]);
				EJ4N(RP0x[1]);
				return "for(var " + dL5Q[3] + "," + dL5Q[3] + "_index=0," + dL5Q[3] + "_beg=" + RP0x[0] + "," + dL5Q[3] + "_end=" + RP0x[1] + "," + dL5Q[3] + "_length=parseInt(" + dL5Q[3] + "_end-" + dL5Q[3] + "_beg+1);" + dL5Q[3] + "_index<" + dL5Q[3] + "_length;" + dL5Q[3] + "_index++){" + dL5Q[3] + " = " + dL5Q[3] + "_beg+" + dL5Q[3] + "_index;"
			} else {
				EJ4N(dL5Q[1]);
				return "for(var __LIST__" + dL5Q[3] + " = " + dL5Q[1] + "," + dL5Q[3] + "," + dL5Q[3] + "_index=0," + dL5Q[3] + "_length=__LIST__" + dL5Q[3] + ".length;" + dL5Q[3] + "_index<" + dL5Q[3] + "_length;" + dL5Q[3] + "_index++){" + dL5Q[3] + " = __LIST__" + dL5Q[3] + "[" + dL5Q[3] + "_index];"
			}
		};
	var cpv2x = function(dL5Q) {
			if (!dL5Q || !dL5Q.length) return;
			dL5Q.shift();
			var W4a = dL5Q[0].split("(")[0];
			return "var " + W4a + " = function" + dL5Q.join("").replace(W4a, "") + "{var __OUT=[];"
		};
	var cpw2x = function(dL5Q) {
			if (!dL5Q[1]) throw "bad include statement: " + dL5Q.join(" ");
			return 'if (typeof inline == "function"){__OUT.push(inline('
		};
	var blb7U = function(kh8Z, dL5Q) {
			EJ4N(dL5Q.slice(1).join(" "));
			return kh8Z
		};
	var cpB2x = function(dL5Q) {
			return blb7U("if(", dL5Q)
		};
	var cpI2x = function(dL5Q) {
			return blb7U("}else if(", dL5Q)
		};
	var cpM2x = function(dL5Q) {
			return blb7U("var ", dL5Q)
		};
	bR4V = {
		blk: /^\{(cdata|minify|eval)/i,
		tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
		def: {
			"if": {
				pfix: cpB2x,
				sfix: "){",
				pmin: 1
			},
			"else": {
				pfix: "}else{"
			},
			elseif: {
				pfix: cpI2x,
				sfix: "){",
				pdft: "true"
			},
			"/if": {
				pfix: "}"
			},
			"for": {
				pfix: cpq2x,
				pmin: 3
			},
			forelse: {
				pfix: cps2x
			},
			"/for": {
				pfix: cpt2x
			},
			list: {
				pfix: cpu2x,
				pmin: 3
			},
			"/list": {
				pfix: "};"
			},
			"break": {
				pfix: "break;"
			},
			"var": {
				pfix: cpM2x,
				sfix: ";"
			},
			macro: {
				pfix: cpv2x
			},
			"/macro": {
				pfix: 'return __OUT.join("");};'
			},
			trim: {
				pfix: function() {
					Lw6q = !0
				}
			},
			"/trim": {
				pfix: function() {
					Lw6q = null
				}
			},
			inline: {
				pfix: cpw2x,
				pmin: 1,
				sfix: "));}"
			}
		},
		ext: {
			seed: function(kh8Z) {
				return (kh8Z || "") + "" + gG7z
			},
			"default": function(D4H, kx8p) {
				return D4H || kx8p
			}
		}
	};
	var cpO2x = function() {
			var cqe3x = /\\([\{\}])/g;
			return function(bo4s, jJ8B) {
				bo4s = bo4s.replace(cqe3x, "$1");
				var dL5Q = bo4s.slice(1, -1).split(bDS2x),
					bh4l = bR4V.def[dL5Q[0]];
				if (!bh4l) {
					YS3x(bo4s, jJ8B);
					return
				}
				if ( !! bh4l.pmin && bh4l.pmin >= dL5Q.length) throw "Statement needs more parameters:" + bo4s;
				jJ8B.push( !! bh4l.pfix && typeof bh4l.pfix != "string" ? bh4l.pfix(dL5Q) : bh4l.pfix || "");
				if ( !! bh4l.sfix) {
					if (dL5Q.length <= 1) {
						if ( !! bh4l.pdft) jJ8B.push(bh4l.pdft)
					} else {
						for (var i = 1, l = dL5Q.length; i < l; i++) {
							if (i > 1) jJ8B.push(" ");
							jJ8B.push(dL5Q[i])
						}
					}
					jJ8B.push(bh4l.sfix)
				}
			}
		}();
	var bIj3x = function(LG6A, jJ8B) {
			if (!LG6A || !LG6A.length) return;
			if (LG6A.length == 1) {
				var bkJ7C = LG6A.pop();
				EJ4N(bkJ7C);
				jJ8B.push(bkJ7C == "" ? '""' : bkJ7C);
				return
			}
			var bkH7A = LG6A.pop().split(":");
			jJ8B.push("__MDF['" + bkH7A.shift() + "'](");
			bIj3x(LG6A, jJ8B);
			if (bkH7A.length > 0) {
				var bf4j = bkH7A.join(":");
				EJ4N(bf4j);
				jJ8B.push("," + bf4j)
			}
			jJ8B.push(")")
		};
	var YS3x = function(bo4s, jJ8B) {
			if (!bo4s) return;
			var wo2x = bo4s.split("\n");
			if (!wo2x || !wo2x.length) return;
			for (var i = 0, l = wo2x.length, hB7u; i < l; i++) {
				hB7u = wo2x[i];
				if ( !! Lw6q) {
					hB7u = hB7u.trim();
					if (!hB7u) continue
				}
				cqi3x(hB7u, jJ8B);
				if ( !! Lw6q && i < l - 1) jJ8B.push("__OUT.push('\\n');")
			}
		};
	var cqi3x = function() {
			var cql3x = /\|\|/g,
				cqp3x = /#@@#/g;
			return function(bo4s, jJ8B) {
				var Sz1x = "}",
					SH1x = -1,
					bq4u = bo4s.length,
					xt2x, fX6R, LV7O, bar3x, Td1x;
				while (SH1x + Sz1x.length < bq4u) {
					xt2x = "${";
					fX6R = "}";
					LV7O = bo4s.indexOf(xt2x, SH1x + Sz1x.length);
					if (LV7O < 0) break;
					if (bo4s.charAt(LV7O + 2) == "%") {
						xt2x = "${%";
						fX6R = "%}"
					}
					bar3x = bo4s.indexOf(fX6R, LV7O + xt2x.length);
					if (bar3x < 0) break;
					bav3x(bo4s.substring(SH1x + Sz1x.length, LV7O), jJ8B);
					Td1x = bo4s.substring(LV7O + xt2x.length, bar3x).replace(cql3x, "#@@#").split("|");
					for (var i = 0, l = Td1x.length; i < l; Td1x[i] = Td1x[i].replace(cqp3x, "||"), i++);
					jJ8B.push("__OUT.push(");
					bIj3x(Td1x, jJ8B);
					jJ8B.push(");");
					Sz1x = fX6R;
					SH1x = bar3x
				}
				bav3x(bo4s.substring(SH1x + Sz1x.length), jJ8B)
			}
		}();
	var bav3x = function() {
			var bz4D = {
				r: /\n|\\|\'/g,
				"\n": "\\n",
				"\\": "\\\\",
				"'": "\\'"
			};
			var cqx3x = function(bo4s) {
					return (bo4s || "").replace(bz4D.r, function($1) {
						return bz4D[$1] || $1
					})
				};
			return function(bo4s, jJ8B) {
				if (!bo4s) return;
				jJ8B.push("__OUT.push('" + cqx3x(bo4s) + "');")
			}
		}();
	var cqy3x = function() {
			var cqz3x = /\t/g,
				cqA3x = /\n/g,
				cqD3x = /\r\n?/g;
			var bND4H = function(bo4s, xt2x) {
					var r4v = bo4s.indexOf("}", xt2x + 1);
					while (bo4s.charAt(r4v - 1) == "\\") {
						r4v = bo4s.indexOf("}", r4v + 1)
					}
					return r4v
				};
			var cqF3x = function() {
					var bs4w = [],
						ES4W = arguments[0];
					for (var x in ES4W) {
						x = (x || "").trim();
						if (!x) continue;
						bs4w.push(x + "=$v('" + x + "')")
					}
					return bs4w.length > 0 ? "var " + bs4w.join(",") + ";" : ""
				};
			return function(bo4s) {
				hI7B = {};
				bo4s = bo4s.replace(cqD3x, "\n").replace(cqz3x, "    ");
				var sL1x = ["if(!__CTX) return '';", ""];
				sL1x.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
				sL1x.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
				sL1x.push("__OUT=[];");
				var EU4Y = -1,
					bq4u = bo4s.length;
				var nA9r, Mg7Z, Tv1x, Tz1x, Cj3x, TA1x, biT6N, TD1x;
				while (EU4Y + 1 < bq4u) {
					nA9r = EU4Y;
					nA9r = bo4s.indexOf("{", nA9r + 1);
					while (nA9r >= 0) {
						Mg7Z = bND4H(bo4s, nA9r);
						Tv1x = bo4s.substring(nA9r, Mg7Z);
						Tz1x = Tv1x.match(bR4V.blk);
						if ( !! Tz1x) {
							Cj3x = Tz1x[1].length + 1;
							TA1x = bo4s.indexOf("}", nA9r + Cj3x);
							if (TA1x >= 0) {
								biT6N = TA1x - nA9r - Cj3x <= 0 ? "{/" + Tz1x[1] + "}" : Tv1x.substr(Cj3x + 1);
								Cj3x = bo4s.indexOf(biT6N, TA1x + 1);
								if (Cj3x >= 0) {
									YS3x(bo4s.substring(EU4Y + 1, nA9r), sL1x);
									TD1x = bo4s.substring(TA1x + 1, Cj3x);
									switch (Tz1x[1]) {
									case "cdata":
										bav3x(TD1x, sL1x);
										break;
									case "minify":
										bav3x(TD1x.replace(cqA3x, " ").replace(bDS2x, " "), sL1x);
										break;
									case "eval":
										if ( !! TD1x) sL1x.push("__OUT.push((function(){" + TD1x + "})());");
										break
									}
									nA9r = EU4Y = Cj3x + biT6N.length - 1
								}
							}
						} else if (bo4s.charAt(nA9r - 1) != "$" && bo4s.charAt(nA9r - 1) != "\\" && Tv1x.substr(Tv1x.charAt(1) == "/" ? 2 : 1).search(bR4V.tag) == 0) {
							break
						}
						nA9r = bo4s.indexOf("{", nA9r + 1)
					}
					if (nA9r < 0) break;
					Mg7Z = bND4H(bo4s, nA9r);
					if (Mg7Z < 0) break;
					YS3x(bo4s.substring(EU4Y + 1, nA9r), sL1x);
					cpO2x(bo4s.substring(nA9r, Mg7Z + 1), sL1x);
					EU4Y = Mg7Z
				}
				YS3x(bo4s.substring(EU4Y + 1), sL1x);
				sL1x.push(';return __OUT.join("");');
				sL1x[1] = cqF3x(hI7B);
				hI7B = null;
				return new Function("__CTX", "__MDF", sL1x.join(""))
			}
		}();
	TrimPath.seed = function() {
		return gG7z
	};
	TrimPath.merge = function() {
		var TF1x = {};
		TrimPath.dump = function() {
			return {
				func: TF1x,
				text: QZ0x
			}
		};
		return function(fh6b, j4n, kc8U) {
			try {
				j4n = j4n || {};
				if (!TF1x[fh6b] && !QZ0x[fh6b]) return "";
				if (!TF1x[fh6b]) {
					TF1x[fh6b] = cqy3x(QZ0x[fh6b]);
					delete QZ0x[fh6b]
				}
				if ( !! kc8U) {
					for (var x in bR4V.ext) if (!kc8U[x]) kc8U[x] = bR4V.ext[x]
				}
				return TF1x[fh6b](j4n, kc8U || bR4V.ext)
			} catch (ex) {
				return ex.message || ""
			}
		}
	}();
	TrimPath.parse = function() {
		var cqJ3x = +(new Date);
		return function(bo4s, fh6b) {
			if (!bo4s) return "";
			fh6b = fh6b || "ck_" + cqJ3x++;
			QZ0x[fh6b] = bo4s;
			return fh6b
		}
	}()
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		k4o = c3x("nej.u"),
		ey6s = {},
		bST7M = {};
	a3x.Mi7b = TrimPath.seed;
	a3x.cd4h = function() {
		var bTv7o = function(C4G) {
				return !a3x.iH7A ? "" : a3x.iH7A(C4G)
			};
		return function(fh6b, j4n, kc8U) {
			j4n = NEJ.X(NEJ.X({}, bST7M), j4n);
			j4n.inline = bTv7o;
			kc8U = NEJ.X(NEJ.X({}, ey6s), kc8U);
			kc8U.rand = k4o.ol9c;
			kc8U.format = k4o.ih7a;
			kc8U.escape = k4o.dH5M;
			kc8U.inline = bTv7o;
			return TrimPath.merge(fh6b, j4n, kc8U)
		}
	}();
	a3x.eB6v = function(bo4s, crg3x) {
		if (!bo4s) return "";
		var fh6b, F4J = a3x.B4F(bo4s);
		if ( !! F4J) {
			fh6b = F4J.id;
			bo4s = F4J.value || F4J.innerText;
			if (!crg3x) a3x.cL5Q(F4J)
		}
		return TrimPath.parse(bo4s, fh6b)
	};
	a3x.dA5F = function(bI4M, fh6b, j4n, kc8U) {
		bI4M = a3x.B4F(bI4M);
		if ( !! bI4M) bI4M.innerHTML = a3x.cd4h(fh6b, j4n, kc8U);
		return this
	};
	a3x.cHv7o = function(bz4D) {
		NEJ.X(ey6s, bz4D)
	};
	a3x.crv3x = function(bz4D) {
		NEJ.X(bST7M, bz4D)
	};
	c3x("dbg").dumpJST = function() {
		return TrimPath.dump()
	}
})();
(function() {
	var dy5D = NEJ.P("nej.p"),
		O4S = window,
		lt8l = dy5D.Ik5p,
		bVd7W = lt8l.ipad || lt8l.iphone;
	if (!bVd7W && !! O4S.requestAnimationFrame && !! O4S.cancelRequestAnimationFrame) return;
	var kh8Z = dy5D.dr5w.prefix.pro;
	if (!bVd7W && !! O4S[kh8Z + "RequestAnimationFrame"] && !! O4S[kh8Z + "CancelRequestAnimationFrame"]) {
		O4S.requestAnimationFrame = O4S[kh8Z + "RequestAnimationFrame"];
		O4S.cancelRequestAnimationFrame = O4S[kh8Z + "CancelRequestAnimationFrame"];
		return
	}
	var bbz4D = lt8l.desktop ? 80 : lt8l.ios ? 50 : 30;
	O4S.requestAnimationFrame = function(cA5F) {
		return window.setTimeout(function() {
			try {
				cA5F(+(new Date))
			} catch (ex) {}
		}, 1e3 / bbz4D)
	};
	O4S.cancelRequestAnimationFrame = function(C4G) {
		window.clearTimeout(C4G);
		return this
	}
})();
(function() {
	var c3x = NEJ.P,
		br4v = NEJ.F,
		k4o = c3x("nej.u"),
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		be4i = c3x("nej.h"),
		cZ5e = c3x("nej.x"),
		bbA4E = c3x("nej.ut.j.cb"),
		ge6Y;
	if ( !! a3x.sv0x) return;
	a3x.sv0x = cZ5e.sv0x = function() {
		var R4V = {},
			gL7E = /^(?:mouse.*|(?:dbl)?click)$/i;
		window.onflashevent = function(d4h) {
			var C4G = decodeURIComponent(d4h.target),
				u4y = d4h.type.toLowerCase();
			var dx5C = R4V[C4G + "-on" + u4y];
			if ( !! dx5C) {
				try {
					dx5C(d4h)
				} catch (e) {}
				return
			}
			var cR5W = R4V[C4G + "-tgt"];
			if ( !! cR5W && gL7E.test(u4y)) {
				bzJ0x(cR5W, d4h)
			}
		};
		var biz6t = function(e4i) {
				var bI4M = a3x.B4F(e4i.parent) || document.body,
					dV5a = a3x.cd4h(ge6Y, e4i);
				bI4M.insertAdjacentHTML(!e4i.hidden ? "beforeEnd" : "afterBegin", dV5a)
			};
		var bzJ0x = function(C4G, d4h) {
				var u4y = d4h.type.toLowerCase();
				requestAnimationFrame(function() {
					h4l.z4D(C4G, u4y)
				})
			};
		var crA3x = function(hW7P) {
				return !!hW7P && !! hW7P.inited && !! hW7P.inited()
			};
		var TQ1x = function(C4G) {
				var bs4w = [document.embeds[C4G], a3x.B4F(C4G), document[C4G], window[C4G]],
					r4v = k4o.eI6C(bs4w, crA3x),
					hW7P = bs4w[r4v],
					biw6q = C4G + "-count";
				R4V[biw6q]++;
				if ( !! hW7P || R4V[biw6q] > 100) {
					R4V[C4G](hW7P);
					delete R4V[C4G];
					delete R4V[biw6q];
					return
				}
				window.setTimeout(TQ1x.f4j(null, C4G), 300)
			};
		var crI3x = function(e4i) {
				var C4G = e4i.id,
					cm4q = e4i.params;
				if (!cm4q) {
					cm4q = {};
					e4i.params = cm4q
				}
				var hI7B = cm4q.flashvars || "";
				hI7B += (!hI7B ? "" : "&") + ("id=" + C4G);
				if (!e4i.hidden && ( !! e4i.target || be4i.WF2x(cm4q.wmode))) {
					var hV7O = a3x.lP8H(e4i.target) || a3x.lP8H(e4i.parent),
						bbP4T = k4o.bbZ4d();
					bbA4E["cb" + bbP4T] = bzJ0x.f4j(null, hV7O);
					hI7B += "&onevent=nej.ut.j.cb.cb" + bbP4T;
					R4V[C4G + "-tgt"] = hV7O
				}
				cm4q.flashvars = hI7B;
				k4o.eI6C(e4i, function(D4H, K4O) {
					if (k4o.gK7D(D4H) && K4O != "onready") {
						R4V[C4G + "-" + K4O] = D4H
					}
				})
			};
		return function(e4i) {
			e4i = NEJ.X({}, e4i);
			if (!e4i.src) return;
			var C4G = "flash_" + k4o.bbZ4d();
			e4i.id = C4G;
			crI3x(e4i);
			biz6t(e4i);
			if (!e4i.onready) return;
			R4V[C4G] = e4i.onready;
			R4V[C4G + "-count"] = 0;
			TQ1x(C4G)
		}
	}();
	ge6Y = a3x.eB6v('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
	cZ5e.isChange = !0
})();
(function() {
	var c3x = NEJ.P,
		iB7u = c3x("nej.c"),
		a3x = c3x("nej.e"),
		k4o = c3x("nej.u"),
		O4S = c3x("nej.ut.j"),
		bbA4E = c3x("nej.ut.j.cb"),
		R4V = {},
		gG7z = +(new Date),
		bir6l;
	if ( !! O4S.bij6d) return;
	bbA4E["ld" + gG7z] = function(K4O, cK5P) {
		var jZ8R = R4V[K4O];
		if (!jZ8R) return;
		delete R4V[K4O];
		jZ8R.vy1x({
			status: 200,
			result: cK5P
		})
	};
	bbA4E["er" + gG7z] = function(K4O, ex6r) {
		var jZ8R = R4V[K4O];
		if (!jZ8R) return;
		delete R4V[K4O];
		jZ8R.vy1x({
			status: ex6r || 0
		})
	};
	O4S.bij6d = NEJ.C();
	bir6l = O4S.bij6d.N4R(O4S.Lg6a);
	bir6l.cp5u = function(e4i) {
		var hW7P = R4V.flash;
		if (k4o.eL6F(hW7P)) {
			hW7P.push(this.cp5u.f4j(this, e4i));
			return
		}
		if (!hW7P) {
			R4V.flash = [this.cp5u.f4j(this, e4i)];
			a3x.sv0x({
				hidden: !0,
				src: iB7u.B4F("ajax.swf"),
				onready: function(hW7P) {
					if (!hW7P) return;
					var i4m = R4V.flash;
					R4V.flash = hW7P;
					k4o.nk9b(i4m, function(dx5C) {
						try {
							dx5C()
						} catch (e) {}
					})
				}
			});
			return
		}
		this.AH3x = "swf-" + k4o.ol9c();
		R4V[this.AH3x] = this;
		var j4n = NEJ.EX({
			url: "",
			data: null,
			method: "GET"
		}, e4i.request);
		j4n.key = this.AH3x;
		j4n.headers = e4i.headers;
		j4n.onerror = "nej.ut.j.cb.er" + gG7z;
		j4n.onloaded = "nej.ut.j.cb.ld" + gG7z;
		var bCG1x = iB7u.bWi7b(j4n.url);
		if ( !! bCG1x) j4n.policyURL = bCG1x;
		hW7P.request(j4n)
	};
	bir6l.ky8q = function() {
		delete R4V[this.AH3x];
		this.vy1x({
			status: 0
		});
		return this
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		be4i = c3x("nej.h");
	be4i.bCM1x = function() {
		var df5k = /^([\w]+?:\/\/.*?(?=\/|$))/i;
		return function(kR8J) {
			kR8J = kR8J || "";
			if (df5k.test(kR8J)) return RegExp.$1;
			return "*"
		}
	}();
	be4i.big6a = function(j4n) {
		return j4n
	};
	be4i.bid6X = function(bci4m, e4i) {
		if (!bci4m.postMessage) return;
		e4i = e4i || bb4f;
		bci4m.postMessage(be4i.big6a(e4i.data), be4i.bCM1x(e4i.origin))
	}
})();
(function() {
	var c3x = NEJ.P,
		br4v = NEJ.F,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		O4S = c3x("nej.ut"),
		b3x;
	if ( !! O4S.fK6E) return;
	O4S.fK6E = NEJ.C();
	b3x = O4S.fK6E.N4R(O4S.cJ5O);
	b3x.cw5B = function() {
		this.S4W = {};
		this.cE5J()
	};
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.Uh1x = a3x.B4F(e4i.element) || window;
		this.bEG2x(e4i.event);
		this.crW3x();
		this.z4D("oninit")
	};
	b3x.bC4G = function() {
		var Ff4j = function(D4H, K4O, bz4D) {
				if (!k4o.eL6F(D4H)) {
					k4o.bbS4W(this.Uh1x, K4O)
				}
				delete bz4D[K4O]
			};
		return function() {
			this.bF4J();
			k4o.eI6C(this.S4W, Ff4j, this);
			delete this.Uh1x
		}
	}();
	b3x.bcp4t = function(F4J, u4y) {
		F4J = a3x.B4F(F4J);
		return F4J == this.Uh1x && (!u4y || !! this.S4W["on" + u4y])
	};
	b3x.bEG2x = function(d4h) {
		if (k4o.fC6w(d4h)) {
			var W4a = "on" + d4h;
			if (!this.S4W[W4a]) {
				this.S4W[W4a] = this.crY3x.f4j(this, d4h)
			}
			this.bER2x(d4h);
			return
		}
		if (k4o.eL6F(d4h)) {
			k4o.bd4h(d4h, this.bEG2x, this)
		}
	};
	b3x.bER2x = function(u4y) {
		var d4h = "on" + u4y,
			dx5C = this.Uh1x[d4h],
			bES2x = this.S4W[d4h];
		if (dx5C != bES2x) {
			this.bcs4w(u4y);
			if ( !! dx5C && dx5C != br4v) this.bFf2x(u4y, dx5C);
			this.Uh1x[d4h] = bES2x
		}
	};
	b3x.bFf2x = function(u4y, dx5C, crZ3x) {
		var i4m = this.S4W[u4y];
		if (!i4m) {
			i4m = [];
			this.S4W[u4y] = i4m
		}
		if (k4o.gK7D(dx5C)) {
			!crZ3x ? i4m.push(dx5C) : i4m.unshift(dx5C)
		}
	};
	b3x.bcs4w = function(u4y, dx5C) {
		var i4m = this.S4W[u4y];
		if (!i4m || !i4m.length) return;
		if (!dx5C) {
			delete this.S4W[u4y];
			return
		}
		k4o.nk9b(i4m, function(D4H, r4v, Mu7n) {
			if (dx5C === D4H) {
				Mu7n.splice(r4v, 1);
				return !0
			}
		})
	};
	b3x.crY3x = function(u4y, d4h) {
		d4h = d4h || {
			noargs: !0
		};
		d4h.type = u4y;
		this.z4D("ondispatch", d4h);
		if ( !! d4h.stopped) return;
		k4o.bd4h(this.S4W[u4y], function(dx5C) {
			try {
				dx5C(d4h)
			} catch (ex) {
				console.error(ex.message);
				console.error(ex.stack)
			}
		})
	};
	b3x.crW3x = function() {
		var bhq6k = function(d4h) {
				var bf4j = d4h.args,
					u4y = bf4j[1].toLowerCase();
				if (this.bcp4t(bf4j[0], u4y)) {
					d4h.stopped = !0;
					this.bER2x(u4y);
					this.bFf2x(u4y, bf4j[2], bf4j[3]);
					this.z4D("oneventadd", {
						type: u4y,
						listener: bf4j[2]
					})
				}
			};
		var csa3x = function(d4h) {
				var bf4j = d4h.args,
					u4y = bf4j[1].toLowerCase();
				if (this.bcp4t(bf4j[0], u4y)) {
					d4h.stopped = !0;
					this.bcs4w(u4y, bf4j[2])
				}
			};
		var bmC7v = function(d4h) {
				var bf4j = d4h.args,
					u4y = (bf4j[1] || "").toLowerCase();
				if (this.bcp4t(bf4j[0])) {
					if ( !! u4y) {
						this.bcs4w(u4y);
						return
					}
					k4o.eI6C(this.S4W, function(D4H, K4O) {
						if (k4o.eL6F(D4H)) {
							this.bcs4w(K4O)
						}
					}, this)
				}
			};
		var csK3x = function(d4h) {
				var bf4j = d4h.args,
					u4y = bf4j[1].toLowerCase();
				if (this.bcp4t(bf4j[0], u4y)) {
					d4h.stopped = !0;
					bf4j[0]["on" + u4y].apply(bf4j[0], bf4j.slice(2))
				}
			};
		return function() {
			if ( !! this.csN3x) return;
			this.csN3x = true;
			h4l.s4w = h4l.s4w.eH6B(bhq6k.f4j(this));
			h4l.mo8g = h4l.mo8g.eH6B(csa3x.f4j(this));
			h4l.he7X = h4l.he7X.eH6B(bmC7v.f4j(this));
			h4l.z4D = h4l.z4D.eH6B(csK3x.f4j(this))
		}
	}()
})();
(function() {
	var c3x = NEJ.P,
		O4S = c3x("nej.p"),
		be4i = c3x("nej.h"),
		k4o = c3x("nej.u"),
		h4l = c3x("nej.v"),
		I4M = c3x("nej.ut");
	if (O4S.nB9s.trident) return;
	if ( !! window.postMessage) {
		be4i.big6a = be4i.big6a.eH6B(function(d4h) {
			d4h.stopped = !0;
			d4h.value = JSON.stringify(d4h.args[0])
		});
		return
	}
	var K4O = "MSG|",
		kt8l = [];
	var ctY3x = function() {
			var W4a = unescape(window.name || "").trim();
			if (!W4a || W4a.indexOf(K4O) != 0) return;
			window.name = "";
			var m4q = k4o.OE9v(W4a.replace(K4O, ""), "|"),
				kR8J = (m4q.origin || "").toLowerCase();
			if ( !! kR8J && kR8J != "*" && location.href.toLowerCase().indexOf(kR8J) != 0) return;
			h4l.z4D(window, "message", {
				data: JSON.parse(m4q.data || "null"),
				source: window.frames[m4q.self] || m4q.self,
				origin: be4i.bCM1x(m4q.ref || document.referrer)
			})
		};
	var cut4x = function() {
			var bdo4s;
			var cuN4R = function(bz4D, r4v, i4m) {
					if (k4o.di5n(bdo4s, bz4D.w) < 0) {
						bdo4s.push(bz4D.w);
						i4m.splice(r4v, 1);
						bz4D.w.name = bz4D.d
					}
				};
			return function() {
				bdo4s = [];
				k4o.nk9b(kt8l, cuN4R);
				bdo4s = null
			}
		}();
	be4i.bid6X = function() {
		var cve4i = function(j4n) {
				var m4q = {};
				j4n = j4n || bb4f;
				m4q.origin = j4n.origin || "";
				m4q.ref = location.href;
				m4q.self = j4n.source;
				m4q.data = JSON.stringify(j4n.data);
				return K4O + k4o.vH1x(m4q, "|", !0)
			};
		return be4i.bid6X.eH6B(function(d4h) {
			d4h.stopped = !0;
			var bf4j = d4h.args;
			kt8l.unshift({
				w: bf4j[0],
				d: escape(cve4i(bf4j[1]))
			})
		})
	}();
	I4M.fK6E.A4E({
		element: window,
		event: "message"
	});
	window.setInterval(cut4x, 100);
	window.setInterval(ctY3x, 20)
})();
(function() {
	var c3x = NEJ.P,
		be4i = c3x("nej.h"),
		a3x = c3x("nej.e"),
		v4z = c3x("nej.j");
	v4z.cvr4v = function() {
		var gC7v = window.name || "_parent",
			cvu4y = {
				gy7r: window.top,
				gC7v: window,
				bI4M: window.parent
			};
		return function(cR5W, e4i) {
			if (typeof cR5W == "string") {
				cR5W = cvu4y[cR5W] || window.frames[cR5W];
				if (!cR5W) return this
			}
			var j4n = NEJ.X({
				origin: "*",
				source: gC7v
			}, e4i);
			be4i.bid6X(cR5W, j4n);
			return this
		}
	}()
})();
(function() {
	var c3x = NEJ.P,
		iB7u = c3x("nej.c"),
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		v4z = c3x("nej.j"),
		O4S = c3x("nej.ut.j"),
		R4V = {},
		bdx5C;
	if ( !! O4S.bgK5P) return;
	O4S.bgK5P = NEJ.C();
	bdx5C = O4S.bgK5P.N4R(O4S.Lg6a);
	bdx5C.cw5B = function() {
		var fa6U = "NEJ-AJAX-DATA:",
			Eh4l = !1;
		var bgH5M = function(d4h) {
				var j4n = d4h.data;
				if (j4n.indexOf(fa6U) != 0) return;
				j4n = JSON.parse(j4n.replace(fa6U, ""));
				var jZ8R = R4V[j4n.key];
				if (!jZ8R) return;
				delete R4V[j4n.key];
				j4n.result = decodeURIComponent(j4n.result || "");
				jZ8R.vy1x(j4n)
			};
		var bgz5E = function() {
				if (!Eh4l) {
					Eh4l = !0;
					h4l.s4w(window, "message", bgH5M)
				}
			};
		return function() {
			this.cE5J();
			bgz5E()
		}
	}();
	bdx5C.cp5u = function(e4i) {
		var gl6f = e4i.request,
			jZ8R = iB7u.bWh7a(gl6f.url),
			en6h = R4V[jZ8R];
		if (k4o.eL6F(en6h)) {
			en6h.push(this.cp5u.f4j(this, e4i));
			return
		}
		if (!en6h) {
			R4V[jZ8R] = [this.cp5u.f4j(this, e4i)];
			a3x.YH2x({
				src: jZ8R,
				visible: !1,
				onload: function(d4h) {
					var i4m = R4V[jZ8R];
					R4V[jZ8R] = h4l.X4b(d4h).contentWindow;
					k4o.nk9b(i4m, function(dx5C) {
						try {
							dx5C()
						} catch (e) {}
					})
				}
			});
			return
		}
		this.AH3x = "frm-" + k4o.ol9c();
		R4V[this.AH3x] = this;
		var j4n = NEJ.EX({
			url: "",
			data: null,
			timeout: 0,
			method: "GET"
		}, gl6f);
		j4n.key = this.AH3x;
		j4n.headers = e4i.headers;
		v4z.cvr4v(R4V[jZ8R], {
			data: j4n
		})
	};
	bdx5C.ky8q = function() {
		delete R4V[this.AH3x];
		this.vy1x({
			status: 0
		});
		return this
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		em6g = c3x("nej.g"),
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		v4z = c3x("nej.j"),
		O4S = c3x("nej.ut.j"),
		R4V = {},
		MC7v;
	if ( !! O4S.bgs5x) return;
	O4S.bgs5x = NEJ.C();
	MC7v = O4S.bgs5x.N4R(O4S.Lg6a);
	MC7v.cw5B = function() {
		var fa6U = "NEJ-UPLOAD-RESULT:",
			Eh4l = !1;
		var bgH5M = function(d4h) {
				var j4n = d4h.data;
				if (j4n.indexOf(fa6U) != 0) return;
				j4n = JSON.parse(j4n.replace(fa6U, ""));
				var jZ8R = R4V[j4n.key];
				if (!jZ8R) return;
				delete R4V[j4n.key];
				jZ8R.vy1x(decodeURIComponent(j4n.result))
			};
		var bgz5E = function() {
				if (!Eh4l) {
					Eh4l = !0;
					h4l.s4w(window, "message", bgH5M)
				}
			};
		return function() {
			this.cE5J();
			bgz5E()
		}
	}();
	MC7v.bC4G = function() {
		this.bF4J();
		a3x.cL5Q(this.bgo5t);
		delete this.bgo5t;
		window.clearTimeout(this.ei6c);
		delete this.ei6c
	};
	MC7v.vy1x = function(cK5P) {
		var Q4U;
		try {
			Q4U = JSON.parse(cK5P);
			this.z4D("onload", Q4U)
		} catch (e) {
			this.z4D("onerror", {
				code: em6g.bWp7i,
				message: cK5P
			})
		}
	};
	MC7v.cp5u = function() {
		var cvA4E = function() {
				var mT9K, cK5P;
				try {
					var mT9K = this.bgo5t.contentWindow.document.body,
						cK5P = mT9K.innerText || mT9K.textContent
				} catch (e) {
					return
				}
				this.vy1x(cK5P)
			};
		var bgm5r = function(Y4c, fk6e, rE0x) {
				v4z.bm4q(Y4c, {
					type: "json",
					method: "POST",
					cookie: rE0x,
					mode: parseInt(fk6e) || 0,
					onload: function(j4n) {
						if (!this.ei6c) return;
						this.z4D("onuploading", j4n);
						this.ei6c = window.setTimeout(bgm5r.f4j(this, Y4c, fk6e, rE0x), 1e3)
					}.f4j(this),
					onerror: function(ca4e) {
						if (!this.ei6c) return;
						this.ei6c = window.setTimeout(bgm5r.f4j(this, Y4c, fk6e, rE0x), 1e3)
					}.f4j(this)
				})
			};
		return function(e4i) {
			var gl6f = e4i.request,
				pe9V = e4i.headers,
				fm6g = gl6f.data,
				W4a = "fom-" + k4o.ol9c();
			R4V[W4a] = this;
			fm6g.target = W4a;
			fm6g.method = "POST";
			fm6g.enctype = em6g.DH4L;
			fm6g.encoding = em6g.DH4L;
			var Y4c = fm6g.action || "",
				lw8o = Y4c.indexOf("?") <= 0 ? "?" : "&";
			fm6g.action = Y4c + lw8o + "_proxy_=form";
			this.bgo5t = a3x.YH2x({
				name: W4a,
				onload: function(d4h) {
					var en6h = h4l.X4b(d4h);
					h4l.s4w(en6h, "load", cvA4E.f4j(this));
					fm6g.submit();
					var bKC3x = (fm6g.nej_query || bb4f).value;
					if (!bKC3x) return;
					var fk6e = (fm6g.nej_mode || bb4f).value,
						rE0x = (fm6g.nej_cookie || bb4f).value == "true";
					this.ei6c = window.setTimeout(bgm5r.f4j(this, bKC3x, fk6e, rE0x), 100)
				}.f4j(this)
			})
		}
	}();
	MC7v.ky8q = function() {
		this.z4D("onerror", {
			code: em6g.bWt7m,
			message: "客户端终止文件上传"
		});
		return this
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		be4i = c3x("nej.h"),
		O4S = c3x("nej.ut.j");
	be4i.blM7F = function() {
		return new XMLHttpRequest
	};
	be4i.bgg5l = function(fk6e, bei5n, e4i) {
		var bz4D = !! bei5n ? {
			2: O4S.bgs5x
		} : {
			2: O4S.bgK5P,
			3: O4S.bij6d
		};
		return (bz4D[fk6e] || O4S.WR2x).A4E(e4i)
	}
})();
(function() {
	var c3x = NEJ.P,
		O4S = c3x("nej.p"),
		be4i = c3x("nej.h");
	if (O4S.nB9s.trident) return;
	be4i.blM7F = function() {
		var Ra0x = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
		var cwj4n = function() {
				for (var i = 0, l = Ra0x.length; i < l; i++) {
					try {
						return new ActiveXObject(Ra0x[i])
					} catch (e) {}
				}
				return null
			};
		return be4i.blM7F.eH6B(function(d4h) {
			if ( !! window.XMLHttpRequest) return;
			d4h.stopped = !0;
			d4h.value = cwj4n()
		})
	}();
	be4i.bgg5l = function() {
		var DG4K = {
			0: 2,
			1: 3
		};
		return be4i.bgg5l.eH6B(function(d4h) {
			var bf4j = d4h.args,
				fk6e = bf4j[0] || 0;
			bf4j[0] = !! bf4j[1] ? 2 : DG4K[fk6e] || fk6e
		})
	}()
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		be4i = c3x("nej.h"),
		em6g = c3x("nej.g"),
		k4o = c3x("nej.u"),
		v4z = c3x("nej.j"),
		O4S = c3x("nej.ut.j"),
		oj9a = {},
		Jl6f = br4v;
	v4z.ky8q = function(fh6b) {
		var R4V = oj9a[fh6b];
		if (!R4V) return this;
		R4V.req.ky8q();
		return this
	};
	v4z.ben5s = function(dZ6T) {
		Jl6f = dZ6T || br4v;
		return this
	};
	v4z.bm4q = function() {
		var jL8D = (location.protocol + "//" + location.host).toLowerCase();
		var cwo4s = function(Y4c) {
				var kR8J = k4o.cjc1x(Y4c);
				return !!kR8J && kR8J != jL8D
			};
		var cwq4u = function(pe9V) {
				return (pe9V || bb4f)[em6g.yg2x] == em6g.DH4L
			};
		var cwv4z = function(e4i) {
				var bei5n = cwq4u(e4i.headers);
				if (!cwo4s(e4i.url) && !bei5n) return O4S.WR2x.A4E(e4i);
				return be4i.bgg5l(e4i.mode, bei5n, e4i)
			};
		var Ff4j = function(fh6b) {
				var R4V = oj9a[fh6b];
				if (!R4V) return;
				if ( !! R4V.req) R4V.req.T4X();
				delete oj9a[fh6b]
			};
		var bNu4y = function(fh6b, u4y) {
				var R4V = oj9a[fh6b];
				if (!R4V) return;
				Ff4j(fh6b);
				try {
					var d4h = {
						type: u4y,
						result: arguments[2]
					};
					Jl6f(d4h);
					if (!d4h.stopped)(R4V[u4y] || br4v)(d4h.result)
				} catch (ex) {
					console.error(ex.message);
					console.error(ex)
				}
			};
		var yX2x = function(fh6b, j4n) {
				bNu4y(fh6b, "onload", j4n)
			};
		var Az3x = function(fh6b, ca4e) {
				bNu4y(fh6b, "onerror", ca4e)
			};
		return function(Y4c, e4i) {
			e4i = e4i || {};
			var fh6b = k4o.ol9c(),
				R4V = {
					onload: e4i.onload || br4v,
					onerror: e4i.onerror || br4v
				};
			oj9a[fh6b] = R4V;
			e4i.onload = yX2x.f4j(null, fh6b);
			e4i.onerror = Az3x.f4j(null, fh6b);
			if ( !! e4i.query) {
				var lw8o = Y4c.indexOf("?") < 0 ? "?" : "&",
					bv4z = e4i.query;
				if (k4o.lG8y(bv4z)) bv4z = k4o.cD5I(bv4z);
				if ( !! bv4z) Y4c += lw8o + bv4z
			}
			e4i.url = Y4c;
			R4V.req = cwv4z(e4i);
			R4V.req.blW7P(e4i.data);
			return fh6b
		}
	}();
	v4z.hP7I = function(fm6g, e4i) {
		var dM5R = {
			mode: 0,
			type: "json",
			query: null,
			cookie: !1,
			headers: {},
			onload: null,
			onerror: null,
			onuploading: null,
			onbeforerequest: null
		};
		NEJ.EX(dM5R, e4i);
		dM5R.data = fm6g;
		dM5R.method = "POST";
		dM5R.timeout = 0;
		dM5R.headers[em6g.yg2x] = em6g.DH4L;
		return v4z.bm4q(fm6g.action, dM5R)
	}
})();
(function() {
	var c3x = NEJ.P,
		br4v = NEJ.F,
		em6g = c3x("nej.g"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		I4M = c3x("nej.ut"),
		O4S = c3x("nej.ut.j"),
		mv9m, gS7L = 6e4;
	if ( !! O4S.Vw2x) return;
	O4S.Vw2x = NEJ.C();
	mv9m = O4S.Vw2x.N4R(I4M.cJ5O);
	mv9m.cw5B = function() {
		this.cE5J();
		this.Vz2x = {
			onerror: this.cww4A.f4j(this),
			onloaded: this.cwx4B.f4j(this)
		};
		if (!this.constructor.S4W) this.constructor.S4W = {
			loaded: {}
		}
	};
	mv9m.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.MP7I = e4i.version;
		this.bfP5U = e4i.timeout;
		this.Vz2x.version = this.MP7I;
		this.Vz2x.timeout = this.bfP5U
	};
	mv9m.bRR6L = function(K4O) {
		delete this.constructor.S4W[K4O]
	};
	mv9m.AX3x = function(K4O) {
		return this.constructor.S4W[K4O]
	};
	mv9m.bSh6b = function(K4O, j4n) {
		this.constructor.S4W[K4O] = j4n
	};
	mv9m.beQ5V = br4v;
	mv9m.bSt6n = function(gl6f) {
		h4l.he7X(gl6f)
	};
	mv9m.bfL5Q = function(gl6f) {
		gl6f.src = this.ld8V;
		document.head.appendChild(gl6f)
	};
	mv9m.Bm3x = function() {
		var R4V = this.AX3x(this.ld8V);
		if (!R4V) return;
		window.clearTimeout(R4V.timer);
		this.bSt6n(R4V.request);
		delete R4V.bind;
		delete R4V.timer;
		delete R4V.request;
		this.bRR6L(this.ld8V);
		this.AX3x("loaded")[this.ld8V] = !0
	};
	mv9m.beW5b = function(W4a) {
		var R4V = this.AX3x(this.ld8V);
		if (!R4V) return;
		var i4m = R4V.bind;
		this.Bm3x();
		if ( !! i4m && i4m.length > 0) {
			var cF5K;
			while (i4m.length) {
				cF5K = i4m.shift();
				try {
					cF5K.z4D(W4a, arguments[1])
				} catch (ex) {
					console.error(ex.message);
					console.error(ex.stack)
				}
				cF5K.T4X()
			}
		}
	};
	mv9m.dO5T = function(ca4e) {
		this.beW5b("onerror", ca4e)
	};
	mv9m.bTh7a = function() {
		this.beW5b("onloaded")
	};
	mv9m.cwz4D = function(Y4c) {
		this.constructor.A4E(this.Vz2x).MU7N(Y4c)
	};
	mv9m.bTx7q = function(ca4e) {
		var R4V = this.AX3x(this.xy2x);
		if (!R4V) return;
		if ( !! ca4e) R4V.error++;
		R4V.loaded++;
		if (R4V.loaded < R4V.total) return;
		this.bRR6L(this.xy2x);
		this.z4D(R4V.error > 0 ? "onerror" : "onloaded")
	};
	mv9m.cww4A = function(ca4e) {
		this.bTx7q(!0)
	};
	mv9m.cwx4B = function() {
		this.bTx7q()
	};
	mv9m.MU7N = function(Y4c) {
		Y4c = k4o.bot7m(Y4c);
		if (!Y4c) {
			this.z4D("onerror", {
				code: em6g.bwV0x,
				message: "请指定要载入的资源地址！"
			});
			return this
		}
		this.ld8V = Y4c;
		if ( !! this.MP7I) this.ld8V += (this.ld8V.indexOf("?") < 0 ? "?" : "&") + this.MP7I;
		if (this.AX3x("loaded")[this.ld8V]) {
			try {
				this.z4D("onloaded")
			} catch (ex) {
				console.error(ex.message);
				console.error(ex.stack)
			}
			this.T4X();
			return this
		}
		var R4V = this.AX3x(this.ld8V),
			gl6f;
		if ( !! R4V) {
			R4V.bind.unshift(this);
			R4V.timer = window.clearTimeout(R4V.timer)
		} else {
			gl6f = this.beQ5V();
			R4V = {
				request: gl6f,
				bind: [this]
			};
			this.bSh6b(this.ld8V, R4V);
			h4l.s4w(gl6f, "load", this.bTh7a.f4j(this));
			h4l.s4w(gl6f, "error", this.dO5T.f4j(this, {
				code: em6g.bwC0x,
				message: "无法加载指定资源文件[" + this.ld8V + "]！"
			}))
		}
		if (this.bfP5U != 0) R4V.timer = window.setTimeout(this.dO5T.f4j(this, {
			code: em6g.bSM7F,
			message: "指定资源文件[" + this.ld8V + "]载入超时！"
		}), this.bfP5U || gS7L);
		if ( !! gl6f) this.bfL5Q(gl6f);
		this.z4D("onloading");
		return this
	};
	mv9m.bTN7G = function(i4m) {
		if (!i4m || !i4m.length) {
			this.z4D("onerror", {
				code: em6g.bwV0x,
				message: "请指定要载入的资源队列！"
			});
			return this
		}
		this.xy2x = k4o.ol9c();
		var R4V = {
			error: 0,
			loaded: 0,
			total: i4m.length
		};
		this.bSh6b(this.xy2x, R4V);
		for (var i = 0, l = i4m.length; i < l; i++) {
			if (!i4m[i]) {
				R4V.total--;
				continue
			}
			this.cwz4D(i4m[i])
		}
		this.z4D("onloading");
		return this
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		a3x = c3x("nej.e"),
		be4i = c3x("nej.h"),
		O4S = c3x("nej.ut.j"),
		VR2x;
	if ( !! O4S.bfx5C) return;
	O4S.bfx5C = NEJ.C();
	VR2x = O4S.bfx5C.N4R(O4S.Vw2x);
	VR2x.beQ5V = function() {
		var eO6I = a3x.dj5o("iframe");
		eO6I.width = 0;
		eO6I.height = 0;
		eO6I.style.display = "none";
		return eO6I
	};
	VR2x.bfL5Q = function(gl6f) {
		gl6f.src = this.ld8V;
		document.body.appendChild(gl6f)
	};
	VR2x.dO5T = function(ca4e) {
		var eO6I = (this.AX3x(this.ld8V) || bb4f).request;
		this.beW5b("onerror", ca4e);
		be4i.XC2x(eO6I)
	};
	VR2x.bTh7a = function() {
		var mT9K = null,
			eO6I = (this.AX3x(this.ld8V) || bb4f).request;
		try {
			mT9K = eO6I.contentWindow.document.body
		} catch (ex) {}
		this.beW5b("onloaded", mT9K);
		be4i.XC2x(eO6I)
	}
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		O4S = c3x("nej.ut.j"),
		bfy5D;
	if ( !! O4S.bfb5g) return;
	O4S.bfb5g = NEJ.C();
	bfy5D = O4S.bfb5g.N4R(O4S.Vw2x);
	bfy5D.beQ5V = function() {
		return a3x.dj5o("link")
	};
	bfy5D.bfL5Q = function(gl6f) {
		gl6f.href = this.ld8V;
		document.head.appendChild(gl6f)
	}
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		O4S = c3x("nej.ut.j"),
		beZ5e;
	if ( !! O4S.beV5a) return;
	O4S.beV5a = NEJ.C();
	beZ5e = O4S.beV5a.N4R(O4S.Vw2x);
	beZ5e.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.bVa7T = e4i.async;
		this.bfK5P = e4i.charset;
		this.Vz2x.async = !1;
		this.Vz2x.charset = this.bfK5P
	};
	beZ5e.beQ5V = function() {
		var gl6f = a3x.dj5o("script");
		if (this.bVa7T != null) gl6f.async = !! this.bVa7T;
		if (this.bfK5P != null) gl6f.charset = this.bfK5P;
		return gl6f
	};
	beZ5e.bSt6n = function(gl6f) {
		a3x.cL5Q(gl6f)
	}
})();
(function() {
	var c3x = NEJ.P,
		v4z = c3x("nej.j"),
		O4S = c3x("nej.ut.j");
	v4z.cwA4E = function(Y4c, e4i) {
		O4S.beV5a.A4E(e4i).MU7N(Y4c);
		return this
	};
	v4z.cwB4F = function(i4m, e4i) {
		O4S.beV5a.A4E(e4i).bTN7G(i4m);
		return this
	};
	v4z.cGp6j = function(Y4c, e4i) {
		O4S.bfb5g.A4E(e4i).MU7N(Y4c);
		return this
	};
	v4z.cxv4z = function(i4m, e4i) {
		O4S.bfb5g.A4E(e4i).bTN7G(i4m);
		return this
	};
	v4z.bzg0x = function(Y4c, e4i) {
		O4S.bfx5C.A4E(e4i).MU7N(Y4c);
		return this
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		v4z = c3x("nej.j"),
		I4M = c3x("nej.ut"),
		R4V = {},
		sU1x = +(new Date) + "-";
	a3x.cX5c = function() {
		var cz5E = 0;
		var VA2x = function() {
				if (cz5E > 0) return;
				cz5E = 0;
				h4l.z4D(document, "templateready");
				h4l.he7X(document, "templateready")
			};
		var beM5R = function(gf6Z, e4i) {
				var cV5a = a3x.t4x(gf6Z, "src");
				if (!cV5a) return;
				e4i = e4i || bb4f;
				var fZ6T = e4i.root;
				if (!fZ6T) {
					fZ6T = gf6Z.ownerDocument.location.href
				} else {
					fZ6T = k4o.bot7m(fZ6T)
				}
				cV5a = cV5a.split(",");
				k4o.bd4h(cV5a, function(D4H, r4v, i4m) {
					i4m[r4v] = k4o.bot7m(D4H, fZ6T)
				});
				return cV5a
			};
		var cxE4I = function(gf6Z, e4i) {
				if (!gf6Z) return;
				var cV5a = beM5R(gf6Z, e4i);
				if ( !! cV5a) v4z.cxv4z(cV5a, {
					version: a3x.t4x(gf6Z, "version")
				});
				a3x.bHG2x(gf6Z.value)
			};
		var cxF4J = function(D4H) {
				cz5E--;
				a3x.bHS3x(D4H);
				VA2x()
			};
		var cxI4M = function(gf6Z, e4i) {
				if (!gf6Z) return;
				var cV5a = beM5R(gf6Z, e4i),
					fu6o = gf6Z.value;
				if ( !! cV5a) {
					cz5E++;
					var e4i = {
						version: a3x.t4x(gf6Z, "version"),
						onloaded: cxF4J.f4j(null, fu6o)
					};
					window.setTimeout(v4z.cwB4F.f4j(v4z, cV5a, e4i), 0);
					return
				}
				a3x.bHS3x(fu6o)
			};
		var cxK4O = function(mT9K) {
				cz5E--;
				a3x.cX5c(mT9K);
				VA2x()
			};
		var cxL4P = function(gf6Z, e4i) {
				if (!gf6Z) return;
				var cV5a = beM5R(gf6Z, e4i)[0];
				if ( !! cV5a) {
					cz5E++;
					var e4i = {
						version: a3x.t4x(gf6Z, "version"),
						onloaded: cxK4O
					};
					window.setTimeout(v4z.bzg0x.f4j(v4z, cV5a, e4i), 0)
				}
			};
		var cxM4Q = function(C4G, cK5P) {
				cz5E--;
				a3x.ML7E(C4G, cK5P || "");
				VA2x()
			};
		var cxN4R = function(gf6Z, e4i) {
				if (!gf6Z || !gf6Z.id) return;
				var C4G = gf6Z.id,
					cV5a = beM5R(gf6Z, e4i)[0];
				if ( !! cV5a) {
					cz5E++;
					var Y4c = cV5a + (cV5a.indexOf("?") < 0 ? "?" : "&") + (a3x.t4x(gf6Z, "version") || ""),
						e4i = {
							type: "text",
							method: "GET",
							onload: cxM4Q.f4j(null, C4G)
						};
					window.setTimeout(v4z.bm4q.f4j(v4z, Y4c, e4i), 0)
				}
			};
		var cyk4o = function(g4k, e4i) {
				var u4y = g4k.name.toLowerCase();
				switch (u4y) {
				case "jst":
					a3x.eB6v(g4k, !0);
					return;
				case "txt":
					a3x.ML7E(g4k.id, g4k.value || "");
					return;
				case "ntp":
					a3x.jm8e(g4k.value || "", g4k.id);
					return;
				case "js":
					cxI4M(g4k, e4i);
					return;
				case "css":
					cxE4I(g4k, e4i);
					return;
				case "html":
					cxL4P(g4k, e4i);
					return;
				case "res":
					cxN4R(g4k, e4i);
					return
				}
			};
		I4M.fK6E.A4E({
			element: document,
			event: "templateready",
			oneventadd: VA2x
		});
		return function(F4J, e4i) {
			F4J = a3x.B4F(F4J);
			if ( !! F4J) {
				var i4m = F4J.tagName == "TEXTAREA" ? [F4J] : F4J.getElementsByTagName("textarea");
				k4o.bd4h(i4m, function(g4k) {
					cyk4o(g4k, e4i)
				});
				a3x.cL5Q(F4J, !0)
			}
			VA2x();
			return this
		}
	}();
	a3x.ML7E = function(K4O, D4H) {
		R4V[K4O] = D4H || "";
		return this
	};
	a3x.iH7A = function(K4O) {
		return R4V[K4O] || ""
	};
	a3x.jm8e = function(F4J, K4O) {
		K4O = K4O || k4o.ol9c();
		F4J = a3x.B4F(F4J) || F4J;
		a3x.ML7E(sU1x + K4O, F4J);
		a3x.mS9J(F4J);
		return K4O
	};
	a3x.dD5I = function(K4O) {
		if (!K4O) return null;
		K4O = sU1x + K4O;
		var D4H = a3x.iH7A(K4O);
		if (!D4H) return null;
		if (k4o.fC6w(D4H)) {
			D4H = a3x.nR9I(D4H);
			a3x.ML7E(K4O, D4H)
		}
		return D4H.cloneNode(!0)
	};
	a3x.CH4L = function() {
		var Jl6f = function(D4H, K4O) {
				return K4O == "offset" || K4O == "limit"
			};
		return function(i4m, p4t, e4i) {
			var bs4w = [];
			if (!i4m || !i4m.length || !p4t) return bs4w;
			e4i = e4i || bb4f;
			var dt5y = i4m.length,
				jY8Q = parseInt(e4i.offset) || 0,
				fX6R = Math.min(dt5y, jY8Q + (parseInt(e4i.limit) || dt5y)),
				ct5y = {
					total: i4m.length,
					range: [jY8Q, fX6R]
				};
			NEJ.X(ct5y, e4i, Jl6f);
			for (var i = jY8Q, cF5K; i < fX6R; i++) {
				ct5y.index = i;
				ct5y.data = i4m[i];
				cF5K = p4t.A4E(ct5y);
				var C4G = cF5K.Fp4t();
				R4V[C4G] = cF5K;
				cF5K.T4X = cF5K.T4X.eH6B(function(C4G, cF5K) {
					delete R4V[C4G];
					delete cF5K.T4X
				}.f4j(null, C4G, cF5K));
				bs4w.push(cF5K)
			}
			return bs4w
		}
	}();
	a3x.bCH1x = function(C4G) {
		return R4V[C4G]
	};
	a3x.cFZ6T = function(ec6W, e4i) {
		e4i = e4i || bb4f;
		a3x.cX5c(e4i.tid || "template-box");
		h4l.s4w(document, "templateready", function() {
			ec6W.A4E().z4D("onshow", e4i)
		})
	};
	c3x("dbg").dumpTC = function() {
		return R4V
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		a3x = c3x("nej.e"),
		k4o = c3x("nej.u"),
		I4M = c3x("nej.ut"),
		O4S = c3x("nej.ui"),
		b3x;
	if ( !! O4S.el6f) return;
	O4S.el6f = NEJ.C();
	b3x = O4S.el6f.N4R(I4M.cJ5O);
	b3x.cw5B = function() {
		this.cE5J();
		a3x.bzT1x();
		this.ch4l();
		this.bW4a()
	};
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.cym4q(e4i.clazz);
		this.bDm1x(e4i.parent)
	};
	b3x.bC4G = function() {
		this.bF4J();
		this.bDE1x();
		delete this.gh6b;
		a3x.mS9J(this.o4s);
		a3x.x4B(this.o4s, this.bfZ5e);
		delete this.bfZ5e
	};
	b3x.ch4l = br4v;
	b3x.bW4a = function() {
		if (!this.cf4j) this.MJ7C();
		this.o4s = a3x.dD5I(this.cf4j);
		if (!this.o4s) this.o4s = a3x.dj5o("div", this.mj8b);
		a3x.y4C(this.o4s, this.mj8b)
	};
	b3x.MJ7C = br4v;
	b3x.cym4q = function(ed6X) {
		this.bfZ5e = ed6X || "";
		a3x.y4C(this.o4s, this.bfZ5e)
	};
	b3x.czS5X = function() {
		if (!this.mj8b) return;
		a3x.y4C(this.gh6b, this.mj8b + "-parent")
	};
	b3x.bDE1x = function() {
		if (!this.mj8b) return;
		a3x.x4B(this.gh6b, this.mj8b + "-parent")
	};
	b3x.lB8t = function() {
		return this.o4s
	};
	b3x.bDm1x = function(bI4M) {
		if (!this.o4s) return this;
		this.bDE1x();
		if (k4o.gK7D(bI4M)) {
			this.gh6b = bI4M(this.o4s)
		} else {
			this.gh6b = a3x.B4F(bI4M);
			if ( !! this.gh6b) this.gh6b.appendChild(this.o4s)
		}
		this.czS5X();
		return this
	};
	b3x.J4N = function() {
		if (!this.gh6b || !this.o4s || this.o4s.parentNode == this.gh6b) return this;
		this.gh6b.appendChild(this.o4s);
		return this
	};
	b3x.bt4x = function() {
		a3x.mS9J(this.o4s);
		return this
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		a3x = c3x("nej.e"),
		k4o = c3x("nej.u"),
		be4i = c3x("nej.h"),
		O4S = c3x("nej.ui"),
		wB2x, bEU2x;
	if ( !! O4S.Vk1x) return;
	O4S.Vk1x = NEJ.C();
	wB2x = O4S.Vk1x.N4R(O4S.el6f);
	bEU2x = O4S.Vk1x.cs5x;
	wB2x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.wq2x("oncontentready", e4i.oncontentready || this.czV5a.f4j(this));
		this.cAq5v = !! e4i.nohack;
		this.cAv5A = !! e4i.destroyable;
		this.MG7z(e4i.content)
	};
	wB2x.bC4G = function() {
		this.z4D("onbeforerecycle");
		this.bF4J();
		this.bdW5b();
		this.MG7z("");
		a3x.fb6V(this.o4s, {
			top: "",
			left: ""
		})
	};
	wB2x.czV5a = br4v;
	wB2x.ME7x = br4v;
	wB2x.bdW5b = function() {
		a3x.mS9J(this.o4s);
		if ( !! this.nN9E) {
			this.nN9E = be4i.buD9u(this.o4s);
			delete this.nN9E
		}
	};
	wB2x.MG7z = function(bo4s) {
		if (!this.o4s || !this.AF3x || bo4s == null) return this;
		bo4s = bo4s || "";
		k4o.fC6w(bo4s) ? this.AF3x.innerHTML = bo4s : this.AF3x.appendChild(bo4s);
		this.z4D("oncontentready", this.AF3x);
		return this
	};
	wB2x.gD7w = function(bi4m) {
		var D4H = bi4m.top;
		if (D4H != null) {
			D4H += "px";
			a3x.ba4e(this.o4s, "top", D4H);
			a3x.ba4e(this.nN9E, "top", D4H)
		}
		var D4H = bi4m.left;
		if (D4H != null) {
			D4H += "px";
			a3x.ba4e(this.o4s, "left", D4H);
			a3x.ba4e(this.nN9E, "left", D4H)
		}
		return this
	};
	wB2x.J4N = function() {
		a3x.ba4e(this.o4s, "visibility", "hidden");
		bEU2x.J4N.apply(this, arguments);
		this.ME7x();
		a3x.ba4e(this.o4s, "visibility", "");
		if (!this.cAq5v) {
			this.nN9E = be4i.nN9E(this.o4s)
		}
		return this
	};
	wB2x.bt4x = function() {
		this.cAv5A ? this.T4X() : this.bdW5b();
		return this
	}
})();
(function() {
	var c3x = NEJ.P,
		br4v = NEJ.F,
		k4o = c3x("nej.u"),
		a3x = c3x("nej.e"),
		O4S = c3x("nej.ui"),
		BW3x;
	if ( !! O4S.bdS5X) return;
	O4S.bdS5X = NEJ.C();
	BW3x = O4S.bdS5X.N4R(O4S.el6f);
	BW3x.bl4p = function(e4i) {
		this.UY1x();
		this.bn4r(this.cAA5F(e4i));
		this.cg4k.onbeforerecycle = this.T4X.f4j(this);
		this.oU9L = this.bgC5H()
	};
	BW3x.bC4G = function() {
		this.z4D("onbeforerecycle");
		this.bF4J();
		delete this.cg4k;
		a3x.mS9J(this.o4s);
		var AU3x = this.oU9L;
		if ( !! AU3x) {
			delete this.oU9L;
			AU3x.T4X()
		}
	};
	BW3x.bgC5H = br4v;
	BW3x.cAA5F = function(e4i) {
		var m4q = {};
		k4o.eI6C(e4i, function(p4t, K4O) {
			this.cg4k.hasOwnProperty(K4O) ? this.cg4k[K4O] = p4t : m4q[K4O] = p4t
		}, this);
		return m4q
	};
	BW3x.UY1x = function() {
		this.cg4k = {
			clazz: "",
			parent: null,
			content: this.o4s,
			destroyable: !1,
			oncontentready: null,
			nohack: !1
		}
	};
	BW3x.J4N = function() {
		if ( !! this.oU9L) this.oU9L.J4N();
		this.z4D("onaftershow");
		return this
	};
	BW3x.bt4x = function() {
		if ( !! this.oU9L) this.oU9L.bt4x();
		return this
	}
})();
(function() {
	var c3x = NEJ.P,
		em6g = c3x("nej.g"),
		be4i = c3x("nej.h"),
		a3x = c3x("nej.e"),
		k4o = c3x("nej.u"),
		h4l = c3x("nej.v"),
		O4S = c3x("nej.ui"),
		UR1x, bHh2x;
	if ( !! O4S.MB7u) return;
	var iX7Q = a3x.to1x(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + em6g.bwt0x + ");}");
	O4S.MB7u = NEJ.C();
	UR1x = O4S.MB7u.N4R(O4S.el6f);
	bHh2x = O4S.MB7u.cs5x;
	UR1x.bl4p = function(e4i) {
		this.bn4r(e4i);
		var bo4s = e4i.content || "&nbsp;";
		k4o.fC6w(bo4s) ? this.o4s.innerHTML = bo4s : this.o4s.appendChild(bo4s)
	};
	UR1x.bC4G = function() {
		this.bF4J();
		this.o4s.innerHTML = "&nbsp;"
	};
	UR1x.ch4l = function() {
		this.mj8b = iX7Q
	};
	UR1x.J4N = function() {
		be4i.buG9x(this.o4s);
		bHh2x.J4N.apply(this, arguments);
		return this
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		O4S = c3x("nej.ut"),
		wp2x;
	if ( !! O4S.wb2x) return;
	O4S.wb2x = NEJ.C();
	wp2x = O4S.wb2x.N4R(O4S.cJ5O);
	wp2x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.cAW5b = !! e4i.overflow;
		this.o4s = a3x.B4F(e4i.body);
		this.Bk3x = a3x.B4F(e4i.view) || a3x.bFa2x(this.o4s);
		this.bJi3x = a3x.B4F(e4i.mbar) || this.o4s;
		this.bdC5H = parseInt(e4i.direction) || 0;
		if ( !! e4i.isRelative) {
			this.o4s.style.position = "relative";
			this.bgL5Q = true;
			this.bgM5R()
		}
		this.bX4b([
			[document, "mouseup", this.bgR5W.f4j(this)],
			[document, "mousemove", this.bgX6R.f4j(this)],
			[this.bJi3x, "mousedown", this.UJ1x.f4j(this)]
		])
	};
	wp2x.bgM5R = function() {
		if ( !! this.bgL5Q) {
			this.My7r = a3x.hU7N(this.o4s, this.Bk3x);
			this.My7r.x -= parseInt(a3x.dh5m(this.o4s, "left")) || 0;
			this.My7r.y -= parseInt(a3x.dh5m(this.o4s, "top")) || 0
		}
	};
	wp2x.bC4G = function() {
		this.bF4J();
		delete this.o4s;
		delete this.bJi3x;
		delete this.Bk3x
	};
	wp2x.bhl6f = function() {
		return {
			x: Math.max(this.Bk3x.clientWidth, this.Bk3x.scrollWidth) - this.o4s.offsetWidth,
			y: Math.max(this.Bk3x.clientHeight, this.Bk3x.scrollHeight) - this.o4s.offsetHeight
		}
	};
	wp2x.UJ1x = function(d4h) {
		h4l.bg4k(d4h);
		if ( !! this.hT7M) return;
		this.hT7M = {
			x: h4l.jG8y(d4h),
			y: h4l.lZ8R(d4h)
		};
		this.bKA3x = this.bhl6f();
		this.z4D("ondragstart", d4h)
	};
	wp2x.bgX6R = function(d4h) {
		if (!this.hT7M) return;
		var bi4m = {
			x: h4l.jG8y(d4h),
			y: h4l.lZ8R(d4h)
		};
		var pu0x = bi4m.x - this.hT7M.x,
			px0x = bi4m.y - this.hT7M.y,
			D4H = {
				top: (parseInt(a3x.dh5m(this.o4s, "top")) || 0) + px0x,
				left: (parseInt(a3x.dh5m(this.o4s, "left")) || 0) + pu0x
			};
		if (this.bgL5Q) {
			this.bgM5R();
			D4H.top = D4H.top + this.My7r.y;
			D4H.left = D4H.left + this.My7r.x
		}
		this.hT7M = bi4m;
		this.gD7w(D4H)
	};
	wp2x.bgR5W = function(d4h) {
		if (!this.hT7M) return;
		delete this.bKA3x;
		delete this.hT7M;
		this.z4D("ondragend", this.bhp6j())
	};
	wp2x.gD7w = function(d4h) {
		if (!this.cAW5b) {
			var bKL3x = this.bKA3x || this.bhl6f();
			d4h.top = Math.min(bKL3x.y, Math.max(0, d4h.top));
			d4h.left = Math.min(bKL3x.x, Math.max(0, d4h.left))
		}
		var cj4n = this.o4s.style;
		if (this.bgL5Q) {
			this.bgM5R();
			d4h.top = d4h.top - this.My7r.y;
			d4h.left = d4h.left - this.My7r.x
		}
		if (this.bdC5H == 0 || this.bdC5H == 2) cj4n.top = d4h.top + "px";
		if (this.bdC5H == 0 || this.bdC5H == 1) cj4n.left = d4h.left + "px";
		this.z4D("onchange", d4h);
		return this
	};
	wp2x.bhp6j = function() {
		return {
			left: parseInt(a3x.dh5m(this.o4s, "left")) || 0,
			top: parseInt(a3x.dh5m(this.o4s, "top")) || 0
		}
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		a3x = NEJ.P("nej.e"),
		h4l = NEJ.P("nej.v"),
		k4o = NEJ.P("nej.u"),
		I4M = NEJ.P("nej.ut"),
		O4S = NEJ.P("nej.ui"),
		iX7Q, ge6Y, b3x, L4P;
	if ( !! O4S.bcS4W) return;
	O4S.bcS4W = NEJ.C();
	b3x = O4S.bcS4W.N4R(O4S.Vk1x);
	L4P = O4S.bcS4W.cs5x;
	b3x.cw5B = function() {
		this.rP0x = {};
		this.kG8y = {
			onchange: this.bgX6R.f4j(this)
		};
		this.cE5J()
	};
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.cBA5F(e4i.mask);
		this.cBI5N(e4i.align);
		this.BR3x(e4i.title);
		if (!e4i.draggable) return;
		this.iS7L = I4M.wb2x.A4E(this.kG8y)
	};
	b3x.bC4G = function() {
		this.bF4J();
		delete this.qH0x;
		delete this.Uy1x;
		if ( !! this.BX3x) {
			this.BX3x.T4X();
			delete this.BX3x
		}
		if ( !! this.iS7L) {
			this.iS7L.T4X();
			delete this.iS7L
		}
	};
	b3x.ch4l = function() {
		this.mj8b = iX7Q;
		this.cf4j = ge6Y
	};
	b3x.bW4a = function() {
		this.ci4m();
		var i4m = a3x.dk5p(this.o4s);
		this.AF3x = i4m[1];
		this.kG8y.mbar = i4m[0];
		this.kG8y.body = this.o4s;
		h4l.s4w(i4m[2], "mousedown", this.cCa5f.f4j(this));
		h4l.s4w(this.kG8y.mbar, "mousedown", this.UJ1x.f4j(this));
		this.bNR4V = a3x.dk5p(this.kG8y.mbar)[0]
	};
	b3x.cCa5f = function(d4h) {
		h4l.bg4k(d4h);
		this.z4D("onclose", d4h);
		if (!d4h.stopped) {
			this.bt4x()
		}
	};
	b3x.UJ1x = function(d4h) {
		h4l.z4D(document, "click")
	};
	b3x.bgX6R = function(d4h) {
		if (!this.nN9E) return;
		a3x.fb6V(this.nN9E, {
			top: d4h.top + "px",
			left: d4h.left + "px"
		})
	};
	b3x.ME7x = function() {
		var ev6p = [function() {
			return 0
		}, function(nW9N, mR9I, bi4m, K4O) {
			if (K4O == "top" && window.top != window.self) {
				var bcJ4N = 0,
					Fw5B = 0;
				if (top.g_topBarHeight) bcJ4N = top.g_topBarHeight;
				if (top.g_bottomBarShow && top.g_bottomBarHeight) Fw5B = top.g_bottomBarHeight;
				if (nW9N.top <= bcJ4N) {
					var bhA6u = Math.max(0, (mR9I.height - (bcJ4N - nW9N.top) - Fw5B - bi4m.height) / 2);
					return bhA6u + bcJ4N
				} else {
					var bhA6u = Math.max(0, (mR9I.height - Fw5B - bi4m.height) / 2);
					return bhA6u + nW9N.top
				}
			}
			return Math.max(0, nW9N[K4O] + (mR9I[iy7r[K4O]] - bi4m[iy7r[K4O]]) / 2)
		}, function(nW9N, mR9I, bi4m, K4O) {
			return nW9N[K4O] + (mR9I[iy7r[K4O]] - bi4m[iy7r[K4O]])
		}],
			cCr5w = ["left", "top"],
			iy7r = {
				left: "width",
				top: "height"
			};
		return function() {
			var D4H = {},
				cj4n = this.o4s.style,
				jD8v = a3x.oy9p(),
				nW9N = {
					left: jD8v.scrollLeft,
					top: jD8v.scrollTop
				},
				mR9I = {
					width: jD8v.clientWidth,
					height: jD8v.clientHeight
				},
				bi4m = {
					width: this.o4s.offsetWidth,
					height: this.o4s.offsetHeight
				},
				dq5v = {
					left: jD8v.clientWidth - this.o4s.offsetWidth,
					top: jD8v.clientHeight - this.o4s.offsetHeight
				};
			k4o.bd4h(cCr5w, function(K4O, r4v) {
				var dx5C = ev6p[this.qH0x[r4v]];
				if (!dx5C) return;
				D4H[K4O] = dx5C(nW9N, mR9I, bi4m, K4O)
			}, this);
			this.gD7w(D4H)
		}
	}();
	b3x.cCw6q = function() {
		if (!this.BX3x) {
			if (!this.Uy1x) return;
			this.rP0x.parent = this.gh6b;
			this.BX3x = this.Uy1x.A4E(this.rP0x)
		}
		this.BX3x.J4N()
	};
	b3x.bdW5b = function() {
		if ( !! this.BX3x) this.BX3x.bt4x();
		L4P.bdW5b.apply(this, arguments)
	};
	b3x.cBA5F = function(lp8h) {
		if ( !! lp8h) {
			if (lp8h instanceof O4S.MB7u) {
				this.BX3x = lp8h;
				return
			}
			if (k4o.gK7D(lp8h)) {
				this.Uy1x = lp8h;
				return
			}
			this.Uy1x = O4S.MB7u;
			if (k4o.fC6w(lp8h)) this.rP0x.clazz = lp8h;
			return
		}
		this.Uy1x = null
	};
	b3x.BR3x = function(ep6j, dV5a) {
		if ( !! this.bNR4V) {
			var bag3x = !dV5a ? "innerText" : "innerHTML";
			this.bNR4V[bag3x] = ep6j || "标题"
		}
		return this
	};
	b3x.cBI5N = function() {
		var df5k = /\s+/,
			cCx6r = {
				left: 0,
				center: 1,
				right: 2,
				auto: 3
			},
			cCy6s = {
				top: 0,
				middle: 1,
				bottom: 2,
				auto: 3
			};
		return function(or9i) {
			this.qH0x = (or9i || "").split(df5k);
			var cl4p = cCx6r[this.qH0x[0]];
			if (cl4p == null) cl4p = 1;
			this.qH0x[0] = cl4p;
			var cl4p = cCy6s[this.qH0x[1]];
			if (cl4p == null) cl4p = 1;
			this.qH0x[1] = cl4p;
			return this
		}
	}();
	b3x.J4N = function() {
		L4P.J4N.apply(this, arguments);
		this.cCw6q();
		return this
	};
	iX7Q = a3x.to1x(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
	ge6Y = a3x.jm8e('<div class="' + iX7Q + '"><div class="zbar"><div class="zttl f-thide">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function() {
	var c3x = NEJ.P,
		k4o = c3x("nej.u"),
		O4S = c3x("nej.ui"),
		bhD6x;
	if ( !! O4S.bcA4E) return;
	O4S.bcA4E = NEJ.C();
	bhD6x = O4S.bcA4E.N4R(O4S.bdS5X);
	bhD6x.bgC5H = function() {
		return O4S.bcS4W.A4E(this.cg4k)
	};
	bhD6x.UY1x = function() {
		O4S.bcA4E.cs5x.UY1x.apply(this, arguments);
		this.cg4k.mask = null;
		this.cg4k.title = "标题";
		this.cg4k.align = "";
		this.cg4k.draggable = !1;
		this.cg4k.onclose = null
	}
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		bc4g = c3x("nej.ui"),
		n4r = c3x("nm.l"),
		b3x, L4P;
	n4r.eo6i = NEJ.C();
	b3x = n4r.eo6i.N4R(bc4g.bcA4E);
	b3x.bl4p = function(e4i) {
		e4i.clazz = "m-layer z-show " + (e4i.clazz || "");
		e4i.nohack = true;
		e4i.draggable = true;
		this.bn4r(e4i)
	};
	b3x.dY6S = function(g4k, bG4K) {
		if (!g4k) return;
		a3x.ba4e(g4k, "display", !bG4K ? "none" : "");
		g4k.lastChild.innerText = bG4K || ""
	};
	b3x.dS5X = function(gP7I, db5g, Ur1x, Up1x) {
		var ec6W = "js-lock";
		if (db5g === undefined) return a3x.bE4I(gP7I, ec6W);
		!db5g ? a3x.x4B(gP7I, ec6W) : a3x.y4C(gP7I, ec6W);
		gP7I.firstChild.innerText = !db5g ? Ur1x : Up1x
	};
	n4r.eo6i.J4N = function(e4i) {
		e4i = e4i || {};
		if (e4i.mask === undefined) e4i.mask = "m-mask";
		if (e4i.parent === undefined) e4i.parent = document.body;
		if (e4i.draggable === undefined) e4i.draggable = true; !! this.fg6a && this.fg6a.T4X();
		this.fg6a = this.A4E(e4i);
		this.fg6a.J4N(e4i);
		return this.fg6a
	};
	n4r.eo6i.bt4x = function() { !! this.fg6a && this.fg6a.T4X()
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		q4u = c3x("nm.d"),
		l4p = c3x("nm.x"),
		n4r = c3x("nm.l"),
		b3x, L4P;
	n4r.bhK6E = NEJ.C();
	b3x = n4r.bhK6E.N4R(n4r.eo6i);
	L4P = n4r.bhK6E.cs5x;
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		if (e4i.bubble === undefined) e4i.bubble = true;
		this.Uj1x = e4i.bubble;
		this.qR0x = e4i.message || ""
	};
	b3x.ch4l = function() {
		this.cf4j = a3x.jm8e('<div class="lyct f-cb f-tc"></div>')
	};
	b3x.bW4a = function() {
		this.ci4m();
		h4l.s4w(this.o4s, "click", this.cM5R.f4j(this))
	};
	b3x.cM5R = function(d4h) {
		var g4k = h4l.X4b(d4h, "d:action");
		if (!g4k) return;
		if (g4k.href) h4l.cn4r(d4h);
		if (a3x.t4x(g4k, "action") == "close") this.bt4x();
		if (this.Uj1x === !1) h4l.tW1x(d4h);
		this.z4D("onaction", a3x.t4x(g4k, "action"))
	};
	b3x.J4N = function() {
		L4P.J4N.call(this);
		this.o4s.innerHTML = this.qR0x
	};
	var gG7z = a3x.eB6v('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
	l4p.mV9M = function() {
		var eg6a;
		var cF5K;
		var bhQ6K = function(eN6H, V4Z) {
				if (k4o.gK7D(eN6H, "function") && eN6H(V4Z) != -1) cF5K.T4X()
			};
		var Dt4x = function() { !! cF5K && cF5K.bt4x()
			};
		return function(e4i) {
			clearTimeout(eg6a);
			e4i = e4i || {};
			e4i.title = e4i.title || "提示";
			e4i.clazz = e4i.clazz || "";
			e4i.parent = e4i.parent || document.body;
			e4i.buttons = e4i.buttons || [];
			e4i.message = a3x.cd4h(gG7z, e4i);
			e4i.onaction = bhQ6K.f4j(null, e4i.action);
			if (e4i.mask === undefined) e4i.mask = true;
			if (e4i.draggable === undefined) e4i.draggable = true; !! cF5K && cF5K.T4X();
			cF5K = n4r.bhK6E.A4E(e4i);
			cF5K.J4N();
			if (e4i.autoclose) eg6a = setTimeout(Dt4x.f4j(null), 2e3);
			return cF5K
		}
	}();
	l4p.fs6m = function(e4i) {
		e4i = e4i || {};
		e4i.clazz = e4i.clazz || "m-layer-w1";
		e4i.buttons = [{
			klass: "u-btn2-2",
			action: "close",
			text: e4i.btntxt || "确定"
		}];
		var cF5K = l4p.mV9M(e4i);
		return cF5K
	};
	l4p.ho7h = function(e4i) {
		e4i = e4i || {};
		e4i.clazz = e4i.clazz || "m-layer-w2";
		e4i.buttons = [{
			klass: "u-btn2-2",
			action: "ok",
			text: e4i.btnok || "确定",
			style: e4i.okstyle || ""
		}, {
			klass: "u-btn2-1",
			action: "close",
			text: e4i.btncc || "取消",
			style: e4i.ccstyle || ""
		}];
		var cF5K = l4p.mV9M(e4i);
		return cF5K
	}
})();
(function() {
	var c3x = NEJ.P,
		br4v = NEJ.F,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u");
	a3x.cCD6x = function() {
		var gL7E = /[\r\n]/gi,
			R4V = {};
		var cCJ6D = function(cO5T) {
				return (cO5T || "").replace(gL7E, "aa").length
			};
		var bVs7l = function(C4G) {
				var bh4l = R4V[C4G],
					bVy7r = a3x.B4F(C4G),
					qV0x = a3x.B4F(C4G + "-counter");
				if (!bVy7r || !bh4l) return;
				var d4h = {
					input: bVy7r.value
				};
				d4h.length = bh4l.onlength(d4h.input);
				d4h.delta = bh4l.max - d4h.length;
				bh4l.onchange(d4h);
				qV0x.innerHTML = d4h.value || "剩余" + d4h.delta + "个字"
			};
		return function(F4J, e4i) {
			var C4G = a3x.lP8H(F4J);
			if (!C4G || !! R4V[C4G]) return;
			var bh4l = NEJ.X({}, e4i);
			bh4l.onchange = bh4l.onchange || br4v;
			bh4l.onlength = cCJ6D;
			if (!bh4l.max) {
				var bVT7M = parseInt(a3x.gJ7C(C4G, "maxlength")),
					byx0x = parseInt(a3x.t4x(C4G, "maxLength"));
				bh4l.max = bVT7M || byx0x || 100;
				if (!bVT7M && !! byx0x) bh4l.onlength = k4o.fv6p
			}
			R4V[C4G] = bh4l;
			h4l.s4w(C4G, "input", bVs7l.f4j(null, C4G));
			var g4k = a3x.JW6Q(C4G, {
				nid: bh4l.nid || "js-counter",
				clazz: bh4l.clazz
			});
			bh4l.xid = C4G + "-counter";
			g4k.id = bh4l.xid;
			bVs7l(C4G)
		}
	}()
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		be4i = c3x("nej.h");
	be4i.bhV6P = function(F4J, ed6X) {}
})();
(function() {
	var c3x = NEJ.P,
		br4v = NEJ.F,
		O4S = c3x("nej.p"),
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		be4i = c3x("nej.h");
	if (O4S.nB9s.trident) return;
	be4i.bhV6P = function() {
		var R4V = {};
		var IJ6D = function(d4h) {
				var dn5s = h4l.X4b(d4h);
				if ( !! dn5s.value) return;
				a3x.ba4e(a3x.JW6Q(dn5s), "display", "none")
			};
		var DL4P = function(d4h) {
				var dn5s = h4l.X4b(d4h);
				if ( !! dn5s.value) return;
				a3x.ba4e(a3x.JW6Q(dn5s), "display", "")
			};
		var cCM6G = function(dn5s, ed6X) {
				var C4G = a3x.lP8H(dn5s),
					iV7O = a3x.JW6Q(dn5s, {
						tag: "label",
						clazz: ed6X
					});
				iV7O.htmlFor = C4G;
				var cK5P = a3x.gJ7C(dn5s, "placeholder") || "";
				iV7O.innerText = cK5P == "null" ? "" : cK5P;
				var ce4i = dn5s.offsetHeight + "px";
				a3x.fb6V(iV7O, {
					left: 0,
					display: !dn5s.value ? "" : "none"
				})
			};
		return be4i.bhV6P.eH6B(function(d4h) {
			d4h.stopped = !0;
			var bf4j = d4h.args,
				dn5s = a3x.B4F(bf4j[0]);
			if ( !! R4V[dn5s.id]) return;
			cCM6G(dn5s, bf4j[1]);
			R4V[dn5s.id] = !0;
			h4l.s4w(dn5s, "blur", DL4P.f4j(null));
			h4l.s4w(dn5s, "focus", IJ6D.f4j(null))
		})
	}()
})();
(function() {
	var c3x = NEJ.P,
		be4i = c3x("nej.h"),
		a3x = c3x("nej.e"),
		cZ5e = c3x("nej.x");
	a3x.gr6l = cZ5e.gr6l = function(F4J, ed6X) {
		be4i.bhV6P(F4J, a3x.t4x(F4J, "holder") || ed6X || "js-placeholder");
		return this
	};
	cZ5e.isChange = !0
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		O4S = c3x("nej.ut"),
		hN7G;
	if ( !! O4S.Ue1x) return;
	O4S.Ue1x = NEJ.C();
	hN7G = O4S.Ue1x.N4R(O4S.cJ5O);
	hN7G.cw5B = function() {
		this.cE5J();
		this.Fz5E = {
			tp: {
				nid: "js-nej-tp"
			},
			ok: {
				nid: "js-nej-ok"
			},
			er: {
				nid: "js-nej-er"
			}
		}
	};
	hN7G.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.go6i = document.forms[e4i.form] || a3x.B4F(e4i.form);
		this.bX4b([
			[this.go6i, "keypress", this.cCQ6K.f4j(this)]
		]);
		this.qR0x = e4i.message || {};
		this.qR0x.pass = this.qR0x.pass || "&nbsp;";
		var fk6e = this.pS0x(this.go6i, "focusMode", 1);
		if (!isNaN(fk6e)) {
			this.bAi1x = {
				mode: fk6e,
				clazz: e4i.focus
			}
		}
		this.AQ3x = e4i.holder;
		this.Fz5E.tp.clazz = "js-mhd " + (e4i.tip || "js-tip");
		this.Fz5E.ok.clazz = "js-mhd " + (e4i.pass || "js-pass");
		this.Fz5E.er.clazz = "js-mhd " + (e4i.error || "js-error");
		this.bAs1x = e4i.invalid || "js-invalid";
		this.cCZ6T(e4i);
		this.gI7B();
		if ( !! this.AS3x) this.AS3x.focus()
	};
	hN7G.bC4G = function() {
		this.bF4J();
		delete this.qR0x;
		delete this.AS3x;
		delete this.FA5F;
		delete this.go6i;
		delete this.bBt1x;
		delete this.TR1x
	};
	hN7G.pS0x = function(g4k, xA2x, u4y) {
		var D4H = a3x.t4x(g4k, xA2x);
		switch (u4y) {
		case 1:
			return parseInt(D4H);
		case 2:
			return (D4H || "").toLowerCase() == "true";
		case 3:
			return this.biA6u(D4H)
		}
		return D4H
	};
	hN7G.Bb3x = function(D4H, u4y) {
		if (u4y == "date") return this.biA6u(D4H);
		return parseInt(D4H)
	};
	hN7G.bbH4L = function() {
		var kn8f = /^button|submit|reset|image|hidden|file$/i;
		return function(g4k) {
			g4k = this.B4F(g4k) || g4k;
			var u4y = g4k.type;
			return !!g4k.name && !kn8f.test(g4k.type || "")
		}
	}();
	hN7G.cDd6X = function() {
		var kn8f = /^hidden$/i;
		return function(g4k) {
			if (this.bbH4L(g4k)) return !0;
			g4k = this.B4F(g4k) || g4k;
			var u4y = g4k.type || "";
			return kn8f.test(u4y)
		}
	}();
	hN7G.biA6u = function() {
		var df5k = /[-\/]/;
		var cDS6M = function(D4H) {
				if (!D4H) return "";
				D4H = D4H.split(df5k);
				D4H.push(D4H.shift());
				return D4H.join("/")
			};
		return function(D4H) {
			if ((D4H || "").toLowerCase() == "now") return +(new Date);
			return Date.parse(cDS6M(D4H))
		}
	}();
	hN7G.cCQ6K = function(d4h) {
		if (d4h.keyCode != 13) return;
		this.z4D("onenter", d4h)
	};
	hN7G.cEa6U = function(C4G, W4a) {
		var sq0x = this.TR1x[W4a],
			D4H = this.pS0x(C4G, W4a);
		if (!D4H || !sq0x) return;
		this.bbE4I(C4G, sq0x);
		this.biC6w(C4G, W4a, D4H)
	};
	hN7G.cEc6W = function(C4G, W4a) {
		try {
			var bCL1x = this.pS0x(C4G, W4a);
			if (!bCL1x) return;
			var D4H = new RegExp(bCL1x);
			this.biC6w(C4G, W4a, D4H);
			this.bbE4I(C4G, this.TR1x[W4a])
		} catch (e) {}
	};
	hN7G.cEj6d = function(C4G, W4a) {
		var sq0x = this.TR1x[W4a];
		if ( !! sq0x && this.pS0x(C4G, W4a, 2)) this.bbE4I(C4G, sq0x)
	};
	hN7G.biI6C = function(C4G, W4a, D4H) {
		D4H = parseInt(D4H);
		if (isNaN(D4H)) return;
		this.biC6w(C4G, W4a, D4H);
		this.bbE4I(C4G, this.TR1x[W4a])
	};
	hN7G.bCW1x = function(C4G, W4a) {
		this.biI6C(C4G, W4a, this.pS0x(C4G, W4a))
	};
	hN7G.bCY1x = function(C4G, W4a) {
		this.biI6C(C4G, W4a, a3x.gJ7C(C4G, W4a))
	};
	hN7G.bDa1x = function(C4G, W4a, u4y) {
		var D4H = this.Bb3x(this.pS0x(C4G, W4a), this.pS0x(C4G, "type"));
		this.biI6C(C4G, W4a, D4H)
	};
	hN7G.cEo6i = function() {
		var gL7E = /^input|textarea$/i;
		var IJ6D = function(d4h) {
				this.pZ0x(h4l.X4b(d4h))
			};
		var DL4P = function(d4h) {
				var g4k = h4l.X4b(d4h);
				if (!this.pS0x(g4k, "ignore", 2)) {
					this.bDl1x(g4k)
				}
			};
		return function(g4k) {
			if (this.pS0x(g4k, "autoFocus", 2)) this.AS3x = g4k;
			var rl0x = a3x.gJ7C(g4k, "placeholder");
			if ( !! rl0x && rl0x != "null") a3x.gr6l(g4k, this.AQ3x);
			if ( !! this.bAi1x && gL7E.test(g4k.tagName)) a3x.my9p(g4k, this.bAi1x);
			var C4G = a3x.lP8H(g4k);
			this.cEj6d(C4G, "required");
			this.cEa6U(C4G, "type");
			this.cEc6W(C4G, "pattern");
			this.bCY1x(C4G, "maxlength");
			this.bCY1x(C4G, "minlength");
			this.bCW1x(C4G, "maxLength");
			this.bCW1x(C4G, "minLength");
			this.bDa1x(C4G, "min");
			this.bDa1x(C4G, "max");
			var W4a = g4k.name;
			this.qR0x[W4a + "-tip"] = this.pS0x(g4k, "tip");
			this.qR0x[W4a + "-error"] = this.pS0x(g4k, "message");
			this.pZ0x(g4k);
			var bx4B = this.FA5F[C4G],
				j4n = (bx4B || bb4f).data || bb4f,
				TH1x = this.pS0x(g4k, "counter", 2);
			if (TH1x && (j4n.maxlength || j4n.maxLength)) {
				a3x.cCD6x(C4G, {
					nid: this.Fz5E.tp.nid,
					clazz: "js-counter"
				})
			}
			if ( !! bx4B && gL7E.test(g4k.tagName)) {
				this.bX4b([
					[g4k, "focus", IJ6D.f4j(this)],
					[g4k, "blur", DL4P.f4j(this)]
				])
			} else if (this.pS0x(g4k, "focus", 2)) {
				this.bX4b([
					[g4k, "focus", IJ6D.f4j(this)]
				])
			}
		}
	}();
	hN7G.cCZ6T = function() {
		var FC5H = {
			number: /^[\d]+$/i,
			url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
			email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
			date: function(v) {
				return !v || !isNaN(this.biA6u(v))
			}
		};
		var cEp6j = {
			required: function(g4k) {
				var u4y = g4k.type,
					cEv6p = !g4k.value,
					cEy6s = (u4y == "checkbox" || u4y == "radio") && !g4k.checked;
				if (cEy6s || cEv6p) return -1
			},
			type: function(g4k, e4i) {
				var df5k = this.bBt1x[e4i.type],
					fu6o = g4k.value.trim(),
					cEA6u = !! df5k.test && !df5k.test(fu6o),
					cEU6O = k4o.gK7D(df5k) && !df5k.call(this, fu6o);
				if (cEA6u || cEU6O) return -2
			},
			pattern: function(g4k, e4i) {
				if (!e4i.pattern.test(g4k.value)) return -3
			},
			maxlength: function(g4k, e4i) {
				if (g4k.value.length > e4i.maxlength) return -4
			},
			minlength: function(g4k, e4i) {
				if (g4k.value.length < e4i.minlength) return -5
			},
			maxLength: function(g4k, e4i) {
				if (k4o.fv6p(g4k.value) > e4i.maxLength) return -4
			},
			minLength: function(g4k, e4i) {
				if (k4o.fv6p(g4k.value) < e4i.minLength) return -5
			},
			min: function(g4k, e4i) {
				var gX7Q = this.Bb3x(g4k.value, e4i.type);
				if (isNaN(gX7Q) || gX7Q < e4i.min) return -6
			},
			max: function(g4k, e4i) {
				var gX7Q = this.Bb3x(g4k.value, e4i.type);
				if (isNaN(gX7Q) || gX7Q > e4i.max) return -7
			}
		};
		return function(e4i) {
			this.bBt1x = NEJ.X(NEJ.X({}, FC5H), e4i.type);
			this.TR1x = NEJ.X(NEJ.X({}, cEp6j), e4i.attr)
		}
	}();
	hN7G.bbE4I = function(C4G, zc2x) {
		if (!k4o.gK7D(zc2x)) return;
		var bx4B = this.FA5F[C4G];
		if (!bx4B || !bx4B.func) {
			bx4B = bx4B || {};
			bx4B.func = [];
			this.FA5F[C4G] = bx4B
		}
		bx4B.func.push(zc2x)
	};
	hN7G.biC6w = function(C4G, W4a, D4H) {
		if (!W4a) return;
		var bx4B = this.FA5F[C4G];
		if (!bx4B || !bx4B.data) {
			bx4B = bx4B || {};
			bx4B.data = {};
			this.FA5F[C4G] = bx4B
		}
		bx4B.data[W4a] = D4H
	};
	hN7G.bDl1x = function(g4k) {
		g4k = this.B4F(g4k) || g4k;
		var bx4B = this.FA5F[a3x.lP8H(g4k)];
		if (!g4k || !bx4B || !this.bbH4L(g4k)) return !0;
		var m4q;
		k4o.eI6C(bx4B.func, function(ev6p) {
			m4q = ev6p.call(this, g4k, bx4B.data);
			return m4q != null
		}, this);
		if (m4q == null) {
			var d4h = {
				target: g4k,
				form: this.go6i
			};
			this.z4D("oncheck", d4h);
			m4q = d4h.value
		}
		var d4h = {
			target: g4k,
			form: this.go6i
		};
		if (m4q != null) {
			d4h.code = m4q;
			this.z4D("oninvalid", d4h);
			if (!d4h.stopped) {
				this.cEZ6T(g4k, d4h.value || this.qR0x[g4k.name + m4q])
			}
		} else {
			this.z4D("onvalid", d4h);
			if (!d4h.stopped) this.cEY6S(g4k, d4h.value)
		}
		return m4q == null
	};
	hN7G.zk3x = function() {
		var cEX6R = function(bcP4T, bcR4V) {
				return bcP4T == bcR4V ? "block" : "none"
			};
		var cEW6Q = function(g4k, u4y, bG4K) {
				var rl0x = bEX2x.call(this, g4k, u4y);
				if (!rl0x && !! bG4K) rl0x = a3x.JW6Q(g4k, this.Fz5E[u4y]);
				return rl0x
			};
		var bEX2x = function(g4k, u4y) {
				var rl0x;
				if (u4y == "tp") rl0x = a3x.B4F(g4k.name + "-tip");
				if (!rl0x) rl0x = a3x.H4L(g4k.parentNode, this.Fz5E[u4y].nid)[0];
				return rl0x
			};
		return function(g4k, bG4K, u4y) {
			g4k = this.B4F(g4k) || g4k;
			if (!g4k) return;
			u4y == "er" ? a3x.y4C(g4k, this.bAs1x) : a3x.x4B(g4k, this.bAs1x);
			var rl0x = cEW6Q.call(this, g4k, u4y, bG4K);
			if ( !! rl0x && !! bG4K) rl0x.innerHTML = bG4K;
			k4o.eI6C(this.Fz5E, function(D4H, K4O) {
				a3x.ba4e(bEX2x.call(this, g4k, K4O), "display", cEX6R(u4y, K4O))
			}, this)
		}
	}();
	hN7G.pZ0x = function(g4k, bG4K) {
		this.zk3x(g4k, bG4K || this.qR0x[g4k.name + "-tip"], "tp");
		return this
	};
	hN7G.cEY6S = function(g4k, bG4K) {
		this.zk3x(g4k, bG4K || this.qR0x[g4k.name + "-pass"] || this.qR0x.pass, "ok");
		return this
	};
	hN7G.cEZ6T = function(g4k, bG4K) {
		this.zk3x(g4k, bG4K || this.qR0x[g4k.name + "-error"], "er");
		return this
	};
	hN7G.iO7H = function() {
		var gL7E = /^(?:radio|checkbox)$/i;
		var cEV6P = function(D4H) {
				return D4H == null ? "" : D4H
			};
		var bFk2x = function(D4H, g4k) {
				if (gL7E.test(g4k.type || "")) {
					g4k.checked = D4H == g4k.value
				} else {
					g4k.value = cEV6P(D4H)
				}
			};
		return function(W4a, D4H) {
			var g4k = this.B4F(W4a);
			if (!g4k) return this;
			if (g4k.tagName == "SELECT" || !g4k.length) {
				bFk2x(D4H, g4k)
			} else {
				k4o.bd4h(g4k, bFk2x.f4j(null, D4H))
			}
			return this
		}
	}();
	hN7G.B4F = function(W4a) {
		return this.go6i.elements[W4a]
	};
	hN7G.cFb6V = function() {
		return this.go6i
	};
	hN7G.baX4b = function() {
		var gL7E = /^radio|checkbox$/i,
			kn8f = /^number|date$/;
		var cET6N = function(bz4D, g4k) {
				var W4a = g4k.name,
					D4H = g4k.value,
					bx4B = bz4D[W4a],
					u4y = this.pS0x(g4k, "type");
				if (kn8f.test(u4y)) D4H = this.Bb3x(D4H, u4y);
				if (gL7E.test(g4k.type) && !g4k.checked) {
					D4H = this.pS0x(g4k, "value");
					if (!D4H) return
				}
				if ( !! bx4B) {
					if (!k4o.eL6F(bx4B)) {
						bx4B = [bx4B];
						bz4D[W4a] = bx4B
					}
					bx4B.push(D4H)
				} else {
					bz4D[W4a] = D4H
				}
			};
		return function() {
			var m4q = {};
			k4o.bd4h(this.go6i.elements, function(g4k) {
				if (this.cDd6X(g4k)) cET6N.call(this, m4q, g4k)
			}, this);
			return m4q
		}
	}();
	hN7G.To1x = function() {
		var cES6M = function(g4k) {
				if (this.bbH4L(g4k)) this.pZ0x(g4k)
			};
		return function() {
			this.go6i.reset();
			k4o.bd4h(this.go6i.elements, cES6M, this);
			return this
		}
	}();
	hN7G.cHL7E = function() {
		this.go6i.submit();
		return this
	};
	hN7G.gI7B = function() {
		var cEF6z = function(g4k) {
				if (this.bbH4L(g4k)) this.cEo6i(g4k)
			};
		return function() {
			this.FA5F = {};
			k4o.bd4h(this.go6i.elements, cEF6z, this);
			return this
		}
	}();
	hN7G.cEE6y = function(g4k) {
		g4k = this.B4F(g4k) || g4k;
		if ( !! g4k) return this.bDl1x(g4k);
		var m4q = !0;
		k4o.bd4h(this.go6i.elements, function(g4k) {
			var jw8o = this.cEE6y(g4k);
			m4q = m4q && jw8o
		}, this);
		return m4q
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		I4M = c3x("nej.ut"),
		k4o = c3x("nej.u"),
		l4p = c3x("nm.x"),
		n4r = c3x("nm.l"),
		b3x, L4P;
	n4r.baG3x = NEJ.C();
	b3x = n4r.baG3x.N4R(n4r.eo6i);
	L4P = n4r.baG3x.cs5x;
	b3x.bW4a = function() {
		this.ci4m();
		h4l.s4w(this.o4s, "click", this.cM5R.f4j(this));
		h4l.s4w(document, "mousewheel", this.Co4s.f4j(this));
		if ( !! document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.Co4s.f4j(this))
	};
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		if (e4i.jst) {
			this.o4s.innerHTML = a3x.cd4h(e4i.jst, e4i.data)
		} else if (e4i.ntp) {
			this.o4s.appendChild(a3x.dD5I(e4i.ntp))
		} else if (e4i.txt) {
			this.o4s.innerHTML = a3x.iH7A(e4i.txt)
		} else if (e4i.html) {
			this.o4s.innerHTML = e4i.html
		}
		var Tf1x = this.o4s.getElementsByTagName("form");
		if (Tf1x.length) {
			this.go6i = I4M.Ue1x.A4E({
				form: Tf1x[0]
			})
		}
		this.FG5L = a3x.dk5p(this.o4s)[0]
	};
	b3x.bC4G = function() {
		this.z4D("ondestroy");
		this.bF4J();
		this.o4s.innerHTML = "";
		delete this.FG5L
	};
	b3x.cM5R = function(d4h) {
		var g4k = h4l.X4b(d4h, "d:action"),
			j4n = this.go6i ? this.go6i.baX4b() : null,
			d4h = {
				action: a3x.t4x(g4k, "action")
			};
		if (j4n) d4h.data = j4n;
		if (d4h.action) {
			this.z4D("onaction", d4h);
			if (d4h.stopped) return;
			this.bt4x()
		}
	};
	b3x.Co4s = function(d4h) {
		if (!this.FG5L) return;
		h4l.bg4k(d4h);
		var dq5v = d4h.wheelDelta || -d4h.detail;
		this.FG5L.scrollTop -= dq5v
	};
	l4p.ki8a = function(e4i) {
		e4i.destroyable = e4i.destroyable || true;
		e4i.title = e4i.title || "提示";
		e4i.draggable = true;
		e4i.parent = e4i.parent || document.body;
		e4i.mask = e4i.mask || true;
		var AU3x = n4r.baG3x.A4E(e4i);
		AU3x.J4N();
		return AU3x
	}
})();
(function() {
	var p = NEJ.P("nej.u");
	var bGB2x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
		Tb1x = {},
		FH5M = {};
	for (var i = 0, l = bGB2x.length, c; i < l; i++) {
		c = bGB2x.charAt(i);
		Tb1x[i] = c;
		FH5M[c] = i
	}
	var cED6x = function(iD7w) {
			var r4v = 0,
				c, m4q = [];
			while (r4v < iD7w.length) {
				c = iD7w[r4v];
				if (c < 128) {
					m4q.push(String.fromCharCode(c));
					r4v++
				} else if (c > 191 && c < 224) {
					m4q.push(String.fromCharCode((c & 31) << 6 | iD7w[r4v + 1] & 63));
					r4v += 2
				} else {
					m4q.push(String.fromCharCode((c & 15) << 12 | (iD7w[r4v + 1] & 63) << 6 | iD7w[r4v + 2] & 63));
					r4v += 3
				}
			}
			return m4q.join("")
		};
	var cEz6t = function() {
			var hB7u = /\r\n/g;
			return function(j4n) {
				j4n = j4n.replace(hB7u, "\n");
				var m4q = [],
					mM9D = String.fromCharCode(237);
				if (mM9D.charCodeAt(0) < 0) for (var i = 0, l = j4n.length, c; i < l; i++) {
					c = j4n.charCodeAt(i);
					c > 0 ? m4q.push(c) : m4q.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
				} else for (var i = 0, l = j4n.length, c; i < l; i++) {
					c = j4n.charCodeAt(i);
					if (c < 128) m4q.push(c);
					else if (c > 127 && c < 2048) m4q.push(c >> 6 | 192, c & 63 | 128);
					else m4q.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
				}
				return m4q
			}
		}();
	var LY7R = function(iD7w) {
			var r4v = 0,
				m4q = [],
				fk6e = iD7w.length % 3;
			if (fk6e == 1) iD7w.push(0, 0);
			if (fk6e == 2) iD7w.push(0);
			while (r4v < iD7w.length) {
				m4q.push(Tb1x[iD7w[r4v] >> 2], Tb1x[(iD7w[r4v] & 3) << 4 | iD7w[r4v + 1] >> 4], Tb1x[(iD7w[r4v + 1] & 15) << 2 | iD7w[r4v + 2] >> 6], Tb1x[iD7w[r4v + 2] & 63]);
				r4v += 3
			}
			if (fk6e == 1) m4q[m4q.length - 1] = m4q[m4q.length - 2] = "=";
			if (fk6e == 2) m4q[m4q.length - 1] = "=";
			return m4q.join("")
		};
	var bHl2x = function() {
			var rT0x = /\n|\r|=/g;
			return function(j4n) {
				var r4v = 0,
					m4q = [];
				j4n = j4n.replace(rT0x, "");
				for (var i = 0, l = j4n.length; i < l; i += 4) m4q.push(FH5M[j4n.charAt(i)] << 2 | FH5M[j4n.charAt(i + 1)] >> 4, (FH5M[j4n.charAt(i + 1)] & 15) << 4 | FH5M[j4n.charAt(i + 2)] >> 2, (FH5M[j4n.charAt(i + 2)] & 3) << 6 | FH5M[j4n.charAt(i + 3)]);
				var bq4u = m4q.length,
					fk6e = j4n.length % 4;
				if (fk6e == 2) m4q = m4q.slice(0, bq4u - 2);
				if (fk6e == 3) m4q = m4q.slice(0, bq4u - 1);
				return m4q
			}
		}();
	p.cFe6Y = function(j4n) {
		return cED6x(bHl2x(j4n))
	};
	p.cEu6o = function(j4n) {
		var iD7w = bHl2x(j4n),
			dt5y = iD7w.length,
			iB7u;
		var r4v = 0;
		while (iB7u = iD7w[r4v]) {
			if (iB7u > 128) {
				iD7w[r4v] = iB7u - 256
			}
			r4v++
		}
		return iD7w
	};
	p.cEt6n = function(j4n) {
		try {
			return window.btoa(j4n)
		} catch (ex) {
			return LY7R(cEz6t(j4n))
		}
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		h4l = c3x("nej.v"),
		a3x = c3x("nej.e"),
		v4z = c3x("nej.j"),
		O4S = c3x("nej.p"),
		k4o = c3x("nej.u"),
		n4r = c3x("nm.l"),
		w4A = c3x("nm.w"),
		bD4H = c3x("nej.ui"),
		q4u = c3x("nm.d"),
		l4p = c3x("nm.x"),
		b3x, L4P;
	var TYPE_MAP = {
		13: "playlist",
		17: "program",
		18: "song",
		19: "album"
	};
	n4r.bII3x = NEJ.C();
	b3x = n4r.bII3x.N4R(n4r.eo6i);
	b3x.ch4l = function() {
		this.cf4j = "m-download-layer"
	};
	b3x.bW4a = function() {
		this.ci4m();
		var i4m = a3x.H4L(this.o4s, "j-flag");
		this.bjX6R = i4m[0];
		this.bka6U = i4m[1];
		this.bJf3x = i4m[2];
		v4z.bm4q("/client/version/get", {
			type: "json",
			onload: this.cEs6m.f4j(this)
		});
		if (O4S.Ik5p.mac) {
			a3x.x4B(this.bjX6R.parentNode, "f-hide");
			a3x.y4C(this.bka6U.parentNode, "f-hide");
			a3x.y4C(this.bJf3x, "f-hide")
		} else {
			a3x.y4C(this.bjX6R.parentNode, "f-hide");
			a3x.x4B(this.bka6U.parentNode, "f-hide");
			a3x.x4B(this.bJf3x, "f-hide")
		}
	};
	b3x.bl4p = function(e4i) {
		e4i.clazz = " m-layer-down";
		e4i.parent = e4i.parent || document.body;
		e4i.title = "下载";
		e4i.draggable = !0;
		e4i.destroyalbe = !0;
		e4i.mask = true;
		this.bn4r(e4i);
		this.bX4b([
			[this.o4s, "click", this.bT4X.f4j(this)]
		]);
		this.ez6t = TYPE_MAP[e4i.type];
		this.gY7R = e4i.id
	};
	b3x.bC4G = function() {
		this.bF4J()
	};
	b3x.De4i = function() {
		this.bt4x()
	};
	b3x.FK5P = function(d4h) {
		this.z4D("onok", D4H);
		this.bt4x()
	};
	b3x.bT4X = function(d4h) {
		var g4k = h4l.X4b(d4h, "d:action");
		switch (a3x.t4x(g4k, "action")) {
		case "download":
			this.bt4x();
			window.open(a3x.t4x(g4k, "src"));
			break;
		case "orpheus":
			this.bt4x();
			location.href = "orpheus://" + k4o.cEt6n(JSON.stringify({
				type: this.ez6t,
				id: this.gY7R,
				cmd: "download"
			}));
			break
		}
	};
	b3x.cEs6m = function(d4h) {
		if ((d4h || bb4f).code == 200) {
			this.MP7I = d4h.data;
			this.bjX6R.innerText = "V" + this.MP7I.mac;
			this.bka6U.innerText = "V" + this.MP7I.pc
		}
	};
	l4p.LU7N = function(e4i) {
		n4r.bII3x.A4E(e4i).J4N()
	}
})();
(function() {
	var c3x = NEJ.P,
		l4p = c3x("nm.x");
	var FullscreenApi = {};
	var apiMap = [
		["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
		["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
		["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
		["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
		["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
	];
	var specApi = apiMap[0];
	var browserApi;
	for (var i = 0; i < apiMap.length; i++) {
		if (apiMap[i][1] in document) {
			browserApi = apiMap[i];
			break
		}
	}
	if (browserApi) {
		for (var i = 0; i < browserApi.length; i++) {
			FullscreenApi[specApi[i]] = browserApi[i]
		}
	}
	l4p.FL5Q = FullscreenApi
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		k4o = c3x("nej.u"),
		q4u = c3x("nm.d"),
		bR4V = {};
	q4u.B4F = function(K4O) {
		return bR4V[K4O]
	};
	q4u.ne9V = function(K4O, bh4l) {
		bR4V[K4O] = bh4l
	};
	q4u.fp6j = function(j4n) {
		k4o.eI6C(j4n, function(p4t, K4O) {
			var bh4l = bR4V[K4O] || {};
			NEJ.X(bh4l, p4t);
			bR4V[K4O] = bh4l
		})
	}
})();
(function() {
	var c3x = NEJ.P,
		br4v = NEJ.F,
		be4i = c3x("nej.h");
	be4i.ZL3x = function(K4O) {
		return localStorage.getItem(K4O)
	};
	be4i.ZH3x = function(K4O, D4H) {
		localStorage.setItem(K4O, D4H)
	};
	be4i.bkg6a = function(K4O) {
		localStorage.removeItem(K4O)
	};
	be4i.bkh6b = function() {
		localStorage.clear()
	};
	be4i.cEr6l = function() {
		var m4q = [];
		for (var i = 0, l = localStorage.length; i < l; i++) m4q.push(localStorage.key(i));
		return m4q
	};
	be4i.bkn6h = function() {
		(document.onstorageready || br4v)()
	};
	be4i.bko6i = function() {
		return !0
	}
})();
(function() {
	var c3x = NEJ.P,
		O4S = c3x("nej.p"),
		iB7u = c3x("nej.c"),
		be4i = c3x("nej.h"),
		ti1x;
	if (O4S.nB9s.trident || !! window.localStorage) return;
	var cEq6k = function() {
			var rK0x, eg6a;
			var biz6t = function() {
					rK0x = document.createElement("div");
					NEJ.X(rK0x.style, {
						position: "absolute",
						top: 0,
						left: 0,
						width: "1px",
						height: "1px",
						zIndex: 1e4,
						overflow: "hidden"
					});
					document.body.insertAdjacentElement("afterBegin", rK0x);
					rK0x.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iB7u.B4F("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
				};
			var TQ1x = function() {
					eg6a = window.clearTimeout(eg6a);
					var hW7P = rK0x.getElementsByTagName("object")[0];
					if ( !! hW7P.initStorage) {
						delete rK0x;
						ti1x = hW7P;
						ti1x.initStorage("nej-storage");
						(document.onstorageready || br4v)();
						return
					}
					eg6a = window.setTimeout(TQ1x, 500)
				};
			return function() {
				if ( !! ti1x) return;
				biz6t();
				TQ1x()
			}
		}();
	be4i.ZL3x = be4i.ZL3x.eH6B(function(d4h) {
		d4h.stopped = !0;
		if (!ti1x) return;
		d4h.value = ti1x.getItem(d4h.args[0])
	});
	be4i.ZH3x = be4i.ZH3x.eH6B(function(d4h) {
		d4h.stopped = !0;
		if (!ti1x) return;
		var bf4j = d4h.args;
		ti1x.setItem(bf4j[0], bf4j[1])
	});
	be4i.bkg6a = be4i.bkg6a.eH6B(function(d4h) {
		d4h.stopped = !0;
		if (!ti1x) return;
		ti1x.removeItem(d4h.args[0])
	});
	be4i.bkh6b = be4i.bkh6b.eH6B(function(d4h) {
		d4h.stopped = !0;
		if ( !! ti1x) ti1x.clear()
	});
	be4i.bkn6h = be4i.bkn6h.eH6B(function(d4h) {
		d4h.stopped = !0;
		cEq6k()
	});
	be4i.bko6i = be4i.bko6i.eH6B(function(d4h) {
		d4h.stopped = !0;
		d4h.value = !! ti1x
	})
})();
(function() {
	var c3x = NEJ.P,
		k4o = c3x("nej.u"),
		h4l = c3x("nej.v"),
		be4i = c3x("nej.h"),
		v4z = c3x("nej.j"),
		I4M = c3x("nej.ut"),
		R4V = {};
	v4z.vF1x = function(K4O, D4H) {
		var bLo3x = JSON.stringify(D4H);
		try {
			be4i.ZH3x(K4O, bLo3x)
		} catch (ex) {
			console.error(ex.message);
			console.error(ex)
		}
		if (bLo3x != be4i.ZL3x(K4O)) R4V[K4O] = D4H;
		return this
	};
	v4z.tu1x = function(K4O) {
		var j4n = JSON.parse(be4i.ZL3x(K4O) || "null");
		return j4n == null ? R4V[K4O] : j4n
	};
	v4z.bLI4M = function(K4O, D4H) {
		var j4n = v4z.tu1x(K4O);
		if (j4n == null) {
			j4n = D4H;
			v4z.vF1x(K4O, j4n)
		}
		return j4n
	};
	v4z.LP7I = function(K4O) {
		delete R4V[K4O];
		be4i.bkg6a(K4O);
		return this
	};
	v4z.cFg6a = function() {
		var bkA6u = function(p4t, K4O, bz4D) {
				delete bz4D[K4O]
			};
		return function() {
			k4o.eI6C(R4V, bkA6u);
			be4i.bkh6b();
			return this
		}
	}();
	v4z.cFh6b = function(m4q) {
		m4q = m4q || {};
		k4o.bd4h(be4i.cEr6l(), function(K4O) {
			m4q[K4O] = v4z.tu1x(K4O)
		});
		return m4q
	};
	I4M.fK6E.A4E({
		element: document,
		event: "storageready",
		oneventadd: function() {
			if (be4i.bko6i()) {
				document.onstorageready()
			}
		}
	});
	var cEn6h = function() {
			var cEl6f = function(D4H, K4O, bz4D) {
					be4i.ZH3x(K4O, JSON.stringify(D4H));
					delete bz4D[K4O]
				};
			return function() {
				k4o.eI6C(R4V, cEl6f)
			}
		}();
	h4l.s4w(document, "storageready", cEn6h);
	be4i.bkn6h()
})();
(function() {
	var c3x = NEJ.P,
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		O4S = c3x("nej.ut"),
		LK6E;
	if ( !! O4S.bkI7B) return;
	O4S.bkI7B = NEJ.C();
	LK6E = O4S.bkI7B.N4R(O4S.cJ5O);
	LK6E.cw5B = function() {
		var gG7z = +(new Date),
			na9R = "dat-" + gG7z;
		return function() {
			this.cE5J();
			var R4V = this.constructor[na9R];
			if (!R4V) {
				R4V = {};
				this.constructor[na9R] = R4V
			}
			this.S4W = R4V
		}
	}();
	LK6E.B4F = function(K4O) {
		return this.S4W[K4O]
	};
	LK6E.ne9V = function(K4O, D4H) {
		var mZ9Q = this.S4W[K4O];
		this.S4W[K4O] = D4H;
		h4l.z4D(localCache, "cachechange", {
			key: K4O,
			type: "set",
			oldValue: mZ9Q,
			newValue: D4H
		});
		return this
	};
	LK6E.cL5Q = function(K4O) {
		var mZ9Q = this.S4W[K4O];
		k4o.bbS4W(this.S4W, K4O);
		h4l.z4D(localCache, "cachechange", {
			key: K4O,
			type: "delete",
			oldValue: mZ9Q,
			newValue: undefined
		});
		return mZ9Q
	};
	LK6E.Za3x = function(DC4G) {
		return NEJ.Q(this.S4W, DC4G)
	};
	window.localCache = O4S.bkI7B.A4E();
	O4S.fK6E.A4E({
		element: localCache,
		event: "cachechange"
	})
})();
(function() {
	var c3x = NEJ.P,
		fy6s = NEJ.R,
		br4v = NEJ.F,
		k4o = c3x("nej.u"),
		v4z = c3x("nej.j"),
		O4S = c3x("nej.ut"),
		na9R = "dat-" + +(new Date),
		mY9P;
	if ( !! O4S.bkK7D) return;
	O4S.bkK7D = NEJ.C();
	mY9P = O4S.bkK7D.N4R(O4S.cJ5O);
	mY9P.cw5B = function() {
		this.cE5J();
		this.S4W = this.constructor[na9R];
		if (!this.S4W) {
			this.S4W = {};
			this.S4W[na9R + "-l"] = {};
			this.constructor[na9R] = this.S4W
		}
	};
	mY9P.rC0x = function(K4O) {
		return this.S4W[K4O]
	};
	mY9P.qu0x = function(K4O, D4H) {
		this.S4W[K4O] = D4H
	};
	mY9P.lQ8I = function(K4O, kx8p) {
		var j4n = this.rC0x(K4O);
		if (j4n == null) {
			j4n = kx8p;
			this.qu0x(K4O, j4n)
		}
		return j4n
	};
	mY9P.cEk6e = function(K4O) {
		if (K4O != null) {
			delete this.S4W[K4O];
			return
		}
		k4o.eI6C(this.S4W, function(p4t, K4O) {
			if (K4O == na9R + "-l") return;
			this.cEk6e(K4O)
		}, this)
	};
	mY9P.cFi6c = function(K4O) {
		if ( !! v4z.LP7I) return v4z.LP7I(K4O)
	};
	mY9P.cEf6Z = function(K4O) {
		if ( !! v4z.tu1x) return v4z.tu1x(K4O)
	};
	mY9P.cEe6Y = function(K4O, D4H) {
		if ( !! v4z.vF1x) v4z.vF1x(K4O, D4H)
	};
	mY9P.FX5c = function(K4O, kx8p) {
		var j4n = this.RR0x(K4O);
		if (j4n == null) {
			j4n = kx8p;
			this.wI2x(K4O, j4n)
		}
		return j4n
	};
	mY9P.RR0x = function(K4O) {
		var j4n = this.rC0x(K4O);
		if (j4n != null) return j4n;
		j4n = this.cEf6Z(K4O);
		if (j4n != null) this.qu0x(K4O, j4n);
		return j4n
	};
	mY9P.wI2x = function(K4O, D4H) {
		this.cEe6Y(K4O, D4H);
		this.qu0x(K4O, D4H)
	};
	mY9P.bRz6t = function(K4O) {
		if (K4O != null) {
			delete this.S4W[K4O];
			if ( !! v4z.LP7I) v4z.LP7I(K4O);
			return
		}
		k4o.eI6C(this.S4W, function(p4t, K4O) {
			if (K4O == na9R + "-l") return;
			this.bRz6t(K4O)
		}, this)
	};
	mY9P.cFj6d = function() {
		this.bRz6t();
		return this
	};
	mY9P.cFk6e = function(K4O) {
		var j4n = this.S4W[na9R + "-l"];
		delete j4n[K4O]
	};
	mY9P.blc7V = function(K4O) {
		var j4n = this.S4W[na9R + "-l"],
			bf4j = fy6s.slice.call(arguments, 1);
		k4o.bd4h(j4n[K4O], function(cA5F) {
			try {
				cA5F.apply(null, bf4j)
			} catch (ex) {
				console.error(ex.message);
				console.error(ex.stack)
			}
		});
		delete j4n[K4O]
	};
	mY9P.bld7W = function(K4O, cA5F) {
		cA5F = cA5F || br4v;
		var i4m = this.S4W[na9R + "-l"][K4O];
		if (!i4m) {
			i4m = [cA5F];
			this.S4W[na9R + "-l"][K4O] = i4m;
			return !1
		}
		i4m.push(cA5F);
		return !0
	};
	mY9P.cDZ6T = function(i4m, bi4m, gc6W) {
		if (!i4m) return !1;
		bi4m = parseInt(bi4m) || 0;
		gc6W = parseInt(gc6W) || 0;
		if (!gc6W) {
			if (!i4m.loaded) return !1;
			gc6W = i4m.length
		}
		if ( !! i4m.loaded) gc6W = Math.min(gc6W, i4m.length - bi4m);
		for (var i = 0; i < gc6W; i++) if (!i4m[bi4m + i]) return !1;
		return !0
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		k4o = c3x("nej.u"),
		O4S = c3x("nej.ut"),
		b3x, L4P;
	if ( !! O4S.RO0x) return;
	O4S.RO0x = NEJ.C();
	b3x = O4S.RO0x.N4R(O4S.bkK7D);
	L4P = O4S.RO0x.cs5x;
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.xy2x = e4i.key || "id";
		this.bk4o = e4i.data || bb4f;
		this.cDY6S = !! e4i.autogc;
		this.cDW6Q(e4i.id)
	};
	b3x.bC4G = function() {
		this.bF4J();
		if ( !! this.ei6c) {
			this.bSL7E()
		}
	};
	b3x.cDW6Q = function(C4G) {
		var R4V;
		if ( !! C4G) {
			R4V = this.S4W[C4G];
			if (!R4V) {
				R4V = {};
				this.S4W[C4G] = R4V
			}
		}
		R4V = R4V || this.S4W;
		R4V.hash = R4V.hash || {};
		this.RN0x = R4V
	};
	b3x.bSL7E = function() {
		this.ei6c = window.clearTimeout(this.ei6c);
		var bz4D = {};
		k4o.eI6C(this.RN0x, function(i4m, K4O) {
			if (K4O == "hash") return;
			if (!k4o.eL6F(i4m)) return;
			k4o.bd4h(i4m, function(p4t) {
				if (!p4t) return;
				bz4D[p4t[this.xy2x]] = !0
			}, this)
		}, this);
		k4o.eI6C(this.Yq2x(), function(p4t, C4G, dR5W) {
			if (!bz4D[C4G]) {
				delete dR5W[C4G]
			}
		})
	};
	b3x.cDV6P = function() {
		if ( !! this.ei6c) {
			this.ei6c = window.clearTimeout(this.ei6c)
		}
		this.ei6c = window.setTimeout(this.bSL7E.f4j(this), 150)
	};
	b3x.Bs3x = function(p4t, Yj2x) {
		p4t = this.bTf7Y(p4t, Yj2x) || p4t;
		if (!p4t) return null;
		var K4O = p4t[this.xy2x];
		if (K4O != null) {
			var ib7U = this.Yq2x()[K4O];
			if ( !! ib7U) p4t = NEJ.X(ib7U, p4t);
			this.Yq2x()[K4O] = p4t
		}
		delete p4t.bTi7b;
		return p4t
	};
	b3x.bTf7Y = br4v;
	b3x.blh7a = function(K4O, p4t) {
		if (!p4t) return;
		if (!k4o.eL6F(p4t)) {
			var i4m = this.hD7w(K4O),
				p4t = this.Bs3x(p4t, K4O);
			if ( !! p4t) i4m.unshift(p4t);
			return
		}
		k4o.nk9b(p4t, this.blh7a.f4j(this, K4O))
	};
	b3x.RA0x = function(K4O, cB5G) {
		var i4m = this.hD7w(K4O);
		i4m.length = Math.max(i4m.length, cB5G);
		this.bli7b(K4O);
		return this
	};
	b3x.kw8o = function(K4O) {
		return this.hD7w(K4O).length
	};
	b3x.bli7b = function(K4O, ox9o) {
		this.hD7w(K4O).loaded = ox9o != !1;
		return this
	};
	b3x.Ye2x = function(K4O) {
		return !!this.hD7w(K4O).loaded
	};
	b3x.wh2x = function(K4O, i4m) {
		this.vw1x(K4O);
		this.blj7c({
			key: K4O,
			offset: 0,
			limit: i4m.length + 1
		}, {
			list: i4m,
			total: i4m.length
		})
	};
	b3x.hD7w = function() {
		var FY5d = function(K4O) {
				return (K4O || "") + (!K4O ? "" : "-") + "list"
			};
		return function(K4O) {
			var K4O = FY5d(K4O),
				i4m = this.RN0x[K4O];
			if (!i4m) {
				i4m = [];
				this.RN0x[K4O] = i4m
			}
			return i4m
		}
	}();
	b3x.Yq2x = function() {
		var dR5W = this.RN0x.hash;
		if (!dR5W) {
			dR5W = {};
			this.RN0x.hash = dR5W
		}
		return dR5W
	};
	b3x.blp7i = function() {
		var FY5d = function(e4i) {
				return "r-" + e4i.key
			};
		return function(e4i) {
			var iY7R = NEJ.X({}, e4i),
				nZ9Q = FY5d(iY7R);
			if (!this.bld7W(nZ9Q, this.z4D.f4j(this))) {
				iY7R.rkey = nZ9Q;
				iY7R.onload = this.cDU6O.f4j(this, iY7R);
				this.z4D("dopullrefresh", iY7R)
			}
			return this
		}
	}();
	b3x.cDU6O = function(e4i, i4m) {
		this.blh7a(e4i.key, i4m);
		this.blc7V(e4i.rkey, "onpullrefresh", e4i)
	};
	b3x.lO8G = function() {
		var FY5d = function(e4i) {
				return "r-" + e4i.key + "-" + e4i.offset + "-" + e4i.limit
			};
		return function(e4i) {
			e4i = e4i || bb4f;
			var iY7R = {
				key: "" + e4i.key || "",
				ext: e4i.ext || null,
				data: e4i.data || null,
				offset: parseInt(e4i.offset) || 0,
				limit: parseInt(e4i.limit) || 0
			},
				i4m = this.hD7w(iY7R.key);
			if (this.cDZ6T(i4m, iY7R.offset, iY7R.limit)) {
				this.z4D("onlistload", iY7R);
				return this
			}
			var nZ9Q = FY5d(iY7R);
			if (!this.bld7W(nZ9Q, this.z4D.f4j(this))) {
				iY7R.rkey = nZ9Q;
				iY7R.onload = this.blj7c.f4j(this, iY7R);
				this.z4D("doloadlist", iY7R)
			}
			return this
		}
	}();
	b3x.blj7c = function() {
		var Ff4j = function(p4t, r4v, i4m) {
				if ( !! p4t) {
					return !0
				}
				i4m.splice(r4v, 1)
			};
		return function(e4i, m4q) {
			e4i = e4i || bb4f;
			var K4O = e4i.key,
				bi4m = e4i.offset,
				bVJ7C = this.hD7w(K4O);
			var i4m = m4q || [];
			if (!k4o.eL6F(i4m)) {
				i4m = m4q.result || m4q.list || [];
				var cB5G = parseInt(m4q.total);
				if (!isNaN(cB5G) || cB5G > i4m.length) {
					this.RA0x(K4O, cB5G)
				}
			}
			k4o.bd4h(i4m, function(p4t, r4v) {
				bVJ7C[bi4m + r4v] = this.Bs3x(p4t, K4O)
			}, this);
			if (i4m.length < e4i.limit) {
				this.bli7b(K4O);
				k4o.nk9b(bVJ7C, Ff4j)
			}
			this.blc7V(e4i.rkey, "onlistload", e4i)
		}
	}();
	b3x.vw1x = function() {
		var Ff4j = function(p4t, r4v, i4m) {
				i4m.splice(r4v, 1)
			};
		return function(K4O) {
			var i4m = this.hD7w(K4O);
			k4o.nk9b(i4m, Ff4j);
			this.bli7b(K4O, !1);
			if (this.cDY6S) {
				this.cDV6P()
			}
			return this
		}
	}();
	b3x.bVS7L = function(p4t, Yj2x) {
		return !p4t.bTi7b
	};
	b3x.eJ6D = function(C4G) {
		return this.Yq2x()[C4G]
	};
	b3x.cFl6f = function(C4G) {
		var p4t = this.eJ6D(C4G);
		if ( !! p4t) p4t.bTi7b = !0
	};
	b3x.XY2x = function() {
		var FY5d = function(e4i) {
				return "r-" + e4i.key + "-" + e4i.id
			};
		return function(e4i) {
			e4i = e4i || bb4f;
			var C4G = e4i[this.xy2x],
				iY7R = {
					id: C4G,
					ext: e4i.ext,
					data: e4i.data || {},
					key: "" + e4i.key || ""
				};
			p4t = this.eJ6D(C4G);
			iY7R.data[this.xy2x] = C4G;
			if ( !! p4t && this.bVS7L(p4t, iY7R.key)) {
				this.z4D("onitemload", iY7R);
				return this
			}
			var nZ9Q = FY5d(iY7R);
			if (!this.bld7W(nZ9Q, this.z4D.f4j(this))) {
				iY7R.rkey = nZ9Q;
				iY7R.onload = this.cDR6L.f4j(this, iY7R);
				this.z4D("doloaditem", iY7R)
			}
			return this
		}
	}();
	b3x.cDR6L = function(e4i, p4t) {
		e4i = e4i || bb4f;
		this.Bs3x(p4t, e4i.key);
		this.blc7V(e4i.rkey, "onitemload", e4i)
	};
	b3x.jI8A = function(e4i) {
		e4i = NEJ.X({}, e4i);
		e4i.onload = this.yM2x.f4j(this, e4i);
		this.z4D("doadditem", e4i)
	};
	b3x.yM2x = function(e4i, p4t) {
		var K4O = e4i.key;
		p4t = this.Bs3x(p4t, K4O);
		if ( !! p4t) {
			var fa6U = 0,
				i4m = this.hD7w(K4O);
			if (!e4i.push) {
				fa6U = -1;
				var bi4m = e4i.offset || 0;
				i4m.splice(bi4m, 0, p4t)
			} else if (i4m.loaded) {
				fa6U = 1;
				i4m.push(p4t)
			} else {
				i4m.length++
			}
		}
		var d4h = {
			key: K4O,
			flag: fa6U,
			data: p4t,
			action: "add",
			ext: e4i.ext
		};
		this.z4D("onitemadd", d4h);
		return d4h
	};
	b3x.Lx6r = function(e4i) {
		e4i = NEJ.X({}, e4i);
		e4i.onload = this.bls7l.f4j(this, e4i);
		this.z4D("dodeleteitem", e4i)
	};
	b3x.bls7l = function(e4i, bzq0x) {
		var p4t, K4O = e4i.key;
		if ( !! bzq0x) {
			p4t = this.eJ6D(e4i.id) || null;
			var C4G = e4i.id,
				cDQ6K = this.xy2x,
				i4m = this.hD7w(K4O),
				r4v = k4o.di5n(i4m, function(ib7U) {
					return !!ib7U && ib7U[cDQ6K] == C4G
				});
			if (r4v >= 0) i4m.splice(r4v, 1)
		}
		var d4h = {
			key: K4O,
			data: p4t,
			action: "delete",
			ext: e4i.ext
		};
		this.z4D("onitemdelete", d4h);
		return d4h
	};
	b3x.XU2x = function(e4i) {
		e4i = NEJ.X({}, e4i);
		e4i.onload = this.cDO6I.f4j(this, e4i);
		this.z4D("doupdateitem", e4i)
	};
	b3x.cDO6I = function(e4i, p4t) {
		var K4O = e4i.key;
		if ( !! p4t) p4t = this.Bs3x(p4t, K4O);
		var d4h = {
			key: K4O,
			data: p4t,
			action: "update",
			ext: e4i.ext
		};
		this.z4D("onitemupdate", d4h);
		return d4h
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		k4o = c3x("nej.u"),
		O4S = c3x("nej.ut"),
		b3x;
	if ( !! O4S.blv7o) return;
	O4S.blv7o = NEJ.C();
	b3x = O4S.blv7o.N4R(O4S.RO0x);
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.bne7X({
			doloadlist: this.XR2x.f4j(this),
			doloaditem: this.blw7p.f4j(this),
			doadditem: this.bzO0x.f4j(this),
			dodeleteitem: this.XP2x.f4j(this),
			doupdateitem: this.XN2x.f4j(this),
			dopullrefresh: this.bAb1x.f4j(this)
		})
	};
	b3x.XR2x = br4v;
	b3x.bAb1x = br4v;
	b3x.blw7p = br4v;
	b3x.bzO0x = br4v;
	b3x.XP2x = br4v;
	b3x.XN2x = br4v
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		k4o = c3x("nej.u"),
		h4l = c3x("nej.v"),
		v4z = c3x("nej.j"),
		I4M = c3x("nej.ut"),
		l4p = c3x("nm.x"),
		q4u = c3x("nm.d"),
		b3x, L4P;
	q4u.hJ7C = NEJ.C();
	b3x = q4u.hJ7C.N4R(I4M.blv7o);
	b3x.cp5u = function() {
		var CI4M = location.protocol + "//" + location.host;
		var cDN6H = function(bs4w, j4n) {
				var bz4D = {
					conf: {},
					data: {},
					urls: []
				};
				k4o.bd4h(bs4w, function(K4O, r4v, i4m) {
					var bh4l = q4u.B4F(K4O);
					if (!bh4l) return;
					var bly7r = bAz1x(bh4l.url, j4n[K4O]);
					bz4D.urls.push(bly7r);
					bz4D.conf[bly7r] = bh4l;
					bz4D.data[bly7r] = JSON.stringify(j4n[K4O] == null ? "" : j4n[K4O])
				});
				return bz4D
			};
		var bAz1x = function(Y4c, j4n) {
				return Y4c.replace(/\{(.*?)\}/gi, function($1, $2) {
					return j4n[$2] || $1
				})
			};
		var bAF1x = function(bh4l, e4i, d4h) {
				h4l.z4D(window, "requesterror", d4h);
				if ( !! d4h.stopped) return;
				var CN4R = bh4l.onerror || e4i.onerror;
				if (k4o.fC6w(CN4R)) {
					this.z4D(CN4R, d4h, e4i)
				} else {
					(CN4R || br4v).call(this, d4h, e4i)
				}
				var d4h = {
					result: d4h,
					option: e4i
				};
				this.z4D("onerror", d4h);
				if (!d4h.stopped)(bh4l.onmessage || br4v).call(this, d4h.result.code, d4h.result)
			};
		var bBb1x = function(Q4U, bh4l, e4i) {
				var m4q = Q4U;
				if (k4o.gK7D(bh4l.format)) {
					m4q = bh4l.format.call(this, Q4U, e4i)
				}
				return m4q
			};
		var yX2x = function(Q4U, bh4l, e4i, us1x) {
				if (k4o.gK7D(bh4l.beforeload)) {
					bh4l.beforeload.call(this, Q4U, e4i, bh4l)
				}
				if (Q4U && Q4U.code != null && Q4U.code != 200) {
					bAF1x.call(this, bh4l, e4i, {
						key: e4i.key,
						code: Q4U.code,
						message: Q4U.message || "",
						captchaId: Q4U.captchaId,
						ext: Q4U
					});
					return
				}
				var m4q = Q4U;
				if (!us1x) {
					m4q = bBb1x.call(this, Q4U, bh4l, e4i)
				} else if (k4o.gK7D(bh4l.format)) {
					var blz7s = [];
					k4o.bd4h(us1x.urls, function(Y4c) {
						blz7s.push(bBb1x.call(this, Q4U[Y4c], us1x.conf[Y4c], e4i))
					}, this);
					blz7s.push(e4i);
					m4q = bh4l.format.apply(this, blz7s)
				}
				var ou9l = bh4l.onload || e4i.onload,
					bBs1x = bh4l.finaly || e4i.finaly || br4v;
				if (k4o.fC6w(ou9l)) {
					bBs1x.call(this, this.z4D(ou9l, m4q), e4i)
				} else {
					bBs1x.call(this, (ou9l || br4v).call(this, m4q), e4i)
				}
			};
		var Az3x = function(bh4l, e4i, ca4e) {
				bAF1x.call(this, bh4l, e4i, {
					key: e4i.key,
					code: ca4e.code || -1,
					message: ca4e.message || ""
				})
			};
		return function(bh4l, e4i) {
			if (k4o.fC6w(bh4l)) {
				bh4l = q4u.B4F(bh4l)
			}
			delete e4i.value;
			(bh4l.filter || br4v).call(this, e4i, bh4l);
			var Q4U = e4i.value;
			if ( !! Q4U) {
				yX2x.call(this, Q4U, bh4l, e4i);
				return
			}
			var Y4c, j4n = e4i.data || bb4f,
				Ai3x = {
					cookie: !0,
					type: bh4l.rtype || "json",
					method: bh4l.type || "POST",
					onerror: Az3x.f4j(this, bh4l, e4i),
					noescape: bh4l.noescape
				};
			if (k4o.eL6F(bh4l.url)) {
				var us1x = cDN6H(bh4l.url, j4n);
				Y4c = CI4M + "/api/batch";
				Ai3x.data = k4o.cD5I(us1x.data);
				Ai3x.onload = yX2x.eA6u(this, bh4l, e4i, us1x);
				Ai3x.headers = {
					"batch-method": "POST"
				};
				delete us1x.data
			} else {
				var kh8Z = bh4l.url.indexOf(":") < 0 ? CI4M : "";
				Y4c = bAz1x(kh8Z + bh4l.url, j4n);
				Ai3x.data = k4o.cD5I(e4i.data);
				Ai3x.onload = yX2x.eA6u(this, bh4l, e4i)
			}
			if (Ai3x.method == "GET") Ai3x.query = Ai3x.data;
			return v4z.bm4q(Y4c, Ai3x)
		}
	}();
	b3x.Gb5g = function() {
		var gL7E = /^get|list|pull$/i;
		return function(bBF1x, e4i) {
			var K4O = e4i.key,
				bh4l = q4u.B4F(K4O.split("-")[0] + "-" + bBF1x);
			if (gL7E.test(bBF1x) && K4O.indexOf("post-") < 0) bh4l.type = "GET";
			this.cp5u(bh4l, e4i)
		}
	}();
	b3x.cFm6g = function(K4O, i4m) {
		var cB5G = i4m.length;
		this.blj7c({
			key: K4O,
			offset: 0,
			limit: cB5G + 1
		}, {
			list: i4m,
			total: cB5G
		})
	};
	b3x.XR2x = function(e4i) {
		this.Gb5g("list", e4i)
	};
	b3x.blw7p = function(e4i) {
		this.Gb5g("get", e4i)
	};
	b3x.bAb1x = function(e4i) {
		this.Gb5g("pull", e4i)
	};
	b3x.bzO0x = function(e4i) {
		this.Gb5g("add", e4i)
	};
	b3x.XP2x = function(e4i) {
		this.Gb5g("del", e4i)
	};
	b3x.XN2x = function(e4i) {
		this.Gb5g("update", e4i)
	};
	b3x.cDI6C = function(p4t) {
		this.Bs3x(p4t)
	};
	I4M.fK6E.A4E({
		element: window,
		event: "requesterror"
	})
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		h4l = c3x("nej.v"),
		I4M = c3x("nej.ut"),
		q4u = c3x("nm.d"),
		blB7u = {},
		b3x, L4P;
	var vq1x = function(m4q, e4i) {
			m4q.conf = e4i.conf;
			return m4q
		};
	q4u.fp6j({
		"res-mv-get": {
			type: "GET",
			url: "/api/v1/mv/detail",
			format: function(Q4U, e4i) {
				return vq1x({
					mv: Q4U
				}, e4i)
			}
		},
		"res-song-get": {
			type: "GET",
			url: "/api/song/detail",
			format: function(m4q, e4i) {
				if ( !! m4q.songs && m4q.songs.length > 0) m4q.song = m4q.songs[0];
				else m4q.song = blB7u;
				delete m4q.songs;
				return vq1x(m4q, e4i)
			},
			filter: function(e4i) {
				e4i.data.ids = "[" + e4i.data.id + "]"
			}
		},
		"res-program-get": {
			type: "GET",
			url: "/api/dj/program/detail",
			format: vq1x
		},
		"res-album-get": {
			type: "GET",
			url: "/api/album/{id}",
			format: vq1x
		},
		"res-playlist-get": {
			type: "GET",
			url: "/api/playlist/detail",
			format: function(m4q, e4i) {
				m4q.playlist = m4q.result;
				delete m4q.result;
				return vq1x(m4q, e4i)
			}
		},
		"res-mv-play": {
			type: "GET",
			url: "/api/song/mv/play",
			format: vq1x
		},
		"res-playlist-play": {
			type: "GET",
			url: "/api/playlist/update/playcount",
			format: vq1x
		},
		"res-program-play": {
			type: "GET",
			url: "/api/dj/program/listen",
			format: vq1x
		},
		"res-djradio-get": {
			type: "GET",
			url: "/api/dj/program/byradio",
			filter: function(e4i) {
				var i4m = e4i.data.id.split("-");
				e4i.data.radioId = i4m[0];
				e4i.data.asc = i4m[1] == 2;
				e4i.data.limit = 1e3;
				delete e4i.data.id
			},
			format: function(Q4U, e4i) {
				var cDH6B = {
					id: e4i.data.radioId,
					programs: Q4U.programs
				};
				return vq1x({
					djradio: cDH6B
				}, e4i)
			}
		},
		"res-hotSongs-get": {
			type: "GET",
			url: "/api/artist/{id}",
			format: vq1x
		},
		"res-lyric-get": {
			type: "GET",
			url: "/api/song/lyric",
			filter: function(e4i) {
				e4i.data.lv = 0;
				e4i.data.tv = 0
			},
			format: function(m4q, e4i) {
				var wy2x = {
					lyric: "",
					nolyric: true
				};
				if (m4q.code == 200 && m4q.lrc && m4q.lrc.lyric) {
					wy2x.lyric = m4q.lrc.lyric;
					wy2x.nolyric = false
				} else {
					wy2x.nolyric = true
				}
				return vq1x({
					lyric: wy2x
				}, e4i)
			}
		}
	});
	q4u.wC2x = NEJ.C();
	b3x = q4u.wC2x.N4R(q4u.hJ7C);
	b3x.cDF6z = function(u4y, cS5X) {
		return this.rC0x(this.XE2x(u4y, cS5X))
	};
	b3x.Rn0x = function(u4y, cS5X, e4i) {
		e4i = e4i || {};
		var j4n = this.rC0x(this.XE2x(u4y, cS5X));
		if (j4n && (u4y != 13 && u4y != 19 || e4i.conf && e4i.conf.useCache)) {
			this.z4D("onresourceload", u4y, cS5X, j4n, e4i.conf);
			return
		}
		e4i.data = {
			id: cS5X
		};
		e4i.onload = this.cDE6y.f4j(this, u4y, cS5X);
		e4i.onerror = this.cDD6x.f4j(this, u4y, cS5X);
		this.cp5u("res-" + this.Do4s(u4y) + "-get", e4i)
	};
	b3x.cDE6y = function(u4y, cS5X, m4q) {
		var j4n = m4q[this.Do4s(u4y)];
		this.qu0x(this.XE2x(u4y, cS5X), j4n);
		this.z4D("onresourceload", u4y, cS5X, j4n, m4q.conf)
	};
	b3x.cDD6x = function(u4y, cS5X, m4q, e4i) {
		if (m4q.code != 404) {
			this.z4D("onresourceerror", u4y, cS5X, m4q.code);
			return
		}
		this.qu0x(this.XE2x(u4y, cS5X), blB7u);
		this.z4D("onresourceload", u4y, cS5X, blB7u, e4i.conf)
	};
	b3x.cFn6h = function(u4y, e4i) {
		this.cp5u("res-" + this.Do4s(u4y) + "-play", e4i)
	};
	b3x.XE2x = function(u4y, cS5X) {
		return "res-" + this.Do4s(u4y) + "-" + cS5X
	};
	b3x.Do4s = function(u4y) {
		var bz4D = {
			2: "hotSongs",
			13: "playlist",
			17: "program",
			18: "song",
			19: "album",
			21: "mv",
			41: "lyric",
			70: "djradio"
		};
		return bz4D[u4y]
	};
	q4u.wC2x.Ls6m = function(u4y, cS5X) {
		if (!this.fg6a) this.fg6a = q4u.wC2x.A4E({});
		return this.fg6a.cDF6z(u4y, cS5X)
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		I4M = c3x("nej.ut"),
		q4u = c3x("nm.d"),
		l4p = c3x("nm.x"),
		blF7y = /^[1-9][0-9]*$/,
		b3x, L4P;
	var LOCAL_LOG_KEY = "local-log";
	q4u.fp6j({
		"bi-log": {
			url: "/api/feedback/weblog"
		},
		"bi-batch-log": {
			url: "/api/feedback/weblog"
		},
		"plus-mv-count": {
			url: "/api/song/mv/play"
		},
		"plus-song-count": {
			url: "/api/song/play"
		},
		"plus-dj-count": {
			type: "GET",
			url: "/api/dj/program/listen"
		},
		"plus-playlist-count": {
			type: "GET",
			url: "/api/playlist/update/playcount"
		}
	});
	q4u.hO7H = NEJ.C();
	b3x = q4u.hO7H.N4R(q4u.hJ7C);
	b3x.eV6P = function(V4Z, bh4l) {
		if (!V4Z || !bh4l) return;
		if (k4o.fC6w(bh4l)) {
			try {
				bh4l = JSON.parse(bh4l)
			} catch (_e) {
				if (console && console.warn) {
					console.warn("bilog error: ", a3x)
				}
			}
		}
		if (!k4o.lG8y(bh4l)) return;
		this.cp5u("bi-log", {
			data: {
				logs: JSON.stringify([{
					action: V4Z,
					json: bh4l
				}])
			}
		});
		if (typeof GEnvType == "string" && GEnvType == "local") {
			console.log("[BI LOG] action=" + V4Z + ", json=" + JSON.stringify(bh4l))
		}
	};
	b3x.Xk2x = function(on9e) {
		if (!k4o.eL6F(on9e)) return;
		this.cp5u("bi-batch-log", {
			data: {
				logs: JSON.stringify(on9e)
			}
		})
	};
	b3x.bDh1x = function(bh4l) {
		if (!bh4l || !bh4l.type || !bh4l.rid) return;
		var om9d = bh4l.type;
		if (blF7y.test(om9d)) {
			om9d = this.Do4s(om9d)
		}
		if (!om9d) return;
		if (om9d == "playlist") om9d = "list";
		this.eV6P("search", {
			type: om9d,
			id: bh4l.rid || null,
			keyword: bh4l.keyword || null
		})
	};
	b3x.QY0x = function() {
		var cDy6s = /^\/m\/(song|album|playlist)\?id=(\d+)/;
		return function(bh4l) {
			if (!bh4l || !bh4l.type || !bh4l.rid) return;
			if (bh4l.play === undefined) bh4l.play = true;
			var om9d = bh4l.type;
			if (blF7y.test(om9d)) {
				om9d = this.Do4s(om9d)
			}
			if (!om9d) return;
			if (om9d == "playlist") om9d = "list";
			var Q4U = {
				id: bh4l.rid,
				type: om9d
			};
			if (om9d == "song" && bh4l.source) {
				Q4U.source = this.bDz1x(bh4l.source);
				if ( !! bh4l.sourceid) Q4U.sourceid = bh4l.sourceid
			}
			this.eV6P(!bh4l.play ? "addto" : "play", Q4U);
			if (om9d == "song" && bh4l.hash && bh4l.hash.match(cDy6s)) {
				this.eV6P(!bh4l.play ? "addto" : "play", {
					type: RegExp.$1,
					id: RegExp.$2
				})
			}
		}
	}();
	b3x.blN7G = function(C4G, bA4E, ee6Y, Gc5h) {
		var Q4U = {
			type: "song",
			wifi: 0,
			download: 0
		};
		var cDv6p = {
			1: "ui",
			2: "playend",
			3: "interrupt",
			4: "exception"
		};
		Q4U.id = C4G;
		Q4U.time = Math.round(bA4E);
		Q4U.end = k4o.fC6w(Gc5h) ? Gc5h : cDv6p[Gc5h] || "";
		if (ee6Y && ee6Y.fid) {
			Q4U.source = this.bDz1x(ee6Y.fid);
			Q4U.sourceId = ee6Y.fdata
		}
		this.eV6P("play", Q4U)
	};
	b3x.bDT2x = function(u4y, cS5X) {
		if (!u4y || !cS5X) return;
		if (blF7y.test(u4y)) u4y = this.Do4s(u4y);
		if (u4y != "playlist" && u4y != "dj") return;
		var bh4l = q4u.B4F("plus-" + u4y + "-count");
		if (!bh4l) return !1;
		this.cp5u(bh4l, {
			data: {
				id: cS5X
			}
		});
		var R4V = this.lQ8I("play-hist-" + u4y, []);
		if (k4o.di5n(R4V, cS5X) < 0) {
			R4V.push(cS5X);
			return !0
		}
		return !1
	};
	b3x.Do4s = function(u4y) {
		var bz4D = {
			1: "user",
			2: "artist",
			13: "playlist",
			17: "dj",
			18: "song",
			19: "album",
			21: "mv",
			31: "toplist"
		};
		return bz4D[u4y]
	};
	b3x.bDz1x = function(Lm6g) {
		var bz4D = {
			1: "user",
			2: "artist",
			13: "list",
			17: "dj",
			18: "song",
			19: "album",
			21: "mv",
			31: "toplist",
			32: "search",
			33: "search",
			34: "event",
			35: "msg"
		};
		return bz4D[Lm6g]
	};
	b3x.bEi2x = function(hc7V) {
		var on9e = this.FX5c(LOCAL_LOG_KEY, []);
		on9e.unshift(hc7V);
		if (on9e.length > 200) {
			on9e.length = 200
		}
		this.wI2x(LOCAL_LOG_KEY, on9e)
	};
	b3x.cDt6n = function() {
		return this.RR0x(LOCAL_LOG_KEY)
	};
	b3x.eq6k = function(Q4U) {
		this.eV6P("play", Q4U)
	};
	var bEy2x = q4u.hO7H.gm6g();
	l4p.sA0x = function() {
		bEy2x.eV6P.apply(bEy2x, arguments)
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		h4l = c3x("nej.v"),
		v4z = c3x("nej.j"),
		I4M = c3x("nej.ut"),
		a3x = c3x("nej.e"),
		k4o = c3x("nej.u"),
		n4r = c3x("nm.l"),
		l4p = c3x("nm.x"),
		q4u = c3x("nm.d");
	var FullscreenApi = l4p.FL5Q || {};
	if (!q4u.wC2x) return;
	var R4V = q4u.wC2x.A4E({
		onresourceload: cDr6l
	});
	var wd2x = q4u.hO7H.gm6g();

	function cDr6l(u4y, cS5X, j4n, bh4l) {
		var i4m = [];
		switch (parseInt(u4y)) {
		case 2:
			i4m = j4n;
			break;
		case 13:
			i4m = j4n.tracks;
			break;
		case 18:
			i4m.push(j4n);
			break;
		case 19:
			i4m = j4n.songs;
			break;
		case 21:
			if (j4n.mp && j4n.mp.fee && j4n.mp.pl <= 0) {
				l4p.WX2x(j4n.data.id, j4n.mp.fee);
				return
			}
			break
		}
		if (l4p.Lj6d(i4m, true, null, u4y == 19 ? {
			source: "album",
			sourceid: cS5X
		} : null) == 0) {
			return
		}
		l4p.fs6m({
			clazz: "m-layer-w2",
			bubble: !1,
			message: bh4l.message
		})
	}
	function cDq6k(d4h, oc9T, yo2x, ey6s) {
		ey6s = ey6s || {};
		if (d4h.action == "ok") {
			if (yo2x) {
				location.dispatch2("/payfee?songId=" + yo2x)
			} else {
				location.dispatch2("/payfee?fee=" + oc9T || 1)
			}
			wd2x.eV6P("click", {
				type: "tobuyvip",
				name: "box",
				source: ey6s.source || "song",
				sourceid: ey6s.sourceid || yo2x || 0
			})
		} else if (d4h.action == "song") {
			location.dispatch2("/payfee?singleSong=true&songId=" + yo2x);
			wd2x.eV6P("click", {
				type: "tobuyone",
				name: "box",
				source: ey6s.source || "song",
				sourceid: ey6s.sourceid || yo2x || 0
			})
		}
	}
	function QI0x(bG4K) {
		l4p.fs6m({
			clazz: "m-layer-w2",
			bubble: !1,
			message: bG4K,
			btntxt: "知道了"
		})
	}
	function QH0x(bG4K, Q4U) {
		QI0x((Q4U || bb4f).toast || bG4K)
	}
	l4p.iu7n = function(bG4K, C4G, u4y, cDo6i, bj4n) {
		bG4K = bG4K || "由于版权保护，您所在的地区暂时无法使用。";
		if (cDo6i && bj4n && bj4n.privilege && bj4n.privilege.toast) {
			v4z.bm4q("/api/song/toast", {
				query: {
					id: bj4n.id
				},
				type: "json",
				onload: QH0x.f4j(this, bG4K),
				onerror: QH0x.f4j(this, bG4K)
			})
		} else if (C4G && u4y) {
			R4V.Rn0x(u4y, C4G, {
				conf: {
					message: bG4K,
					useCache: u4y != 18
				}
			})
		} else {
			QI0x(bG4K)
		}
	};
	l4p.uX1x = function(oc9T, yo2x, u4y, ey6s, nq9h) {
		var bR4V, oW9N = "m-popup-info",
			blU7N = "单首购买",
			bmb7U = "马上去开通",
			cU5Z = "唱片公司要求，当前歌曲须付费使用。",
			bFx2x = true;
		try {
			bR4V = top.api.feeMessage || {}
		} catch (e) {
			bR4V = {}
		}
		if (oc9T == 1 || oc9T == 8 || oc9T == 16) {
			if (u4y == "song") {
				oW9N = "m-popup-song-buy";
				cU5Z = bR4V["vip2"] || cU5Z;
				bmb7U = bR4V["vip2button"] || "包月购买";
				blU7N = bR4V["vip2link"] || blU7N;
				if (nq9h && nq9h.flag !== undefined) {
					var bs4w = nq9h.flag.toString(2).split("");
					if (parseInt(bs4w.pop(), 10) == 1) {
						bFx2x = false
					}
				}
			} else {
				cU5Z = bR4V["vip"] || cU5Z
			}
		} else if (oc9T == 4) {
			cU5Z = bR4V["album"] || cU5Z;
			bmb7U = "立即订购"
		} else {
			cU5Z = bR4V["unknow"] || cU5Z
		}
		l4p.ki8a({
			clazz: "m-layer-w5",
			html: a3x.cd4h(oW9N, {
				songTxt: blU7N,
				tip: cU5Z,
				oktext: bmb7U,
				cctext: "以后再说",
				showSongText: bFx2x
			}),
			onaction: cDq6k.eA6u(null, oc9T, yo2x, ey6s)
		})
	};
	l4p.bFB2x = function(hy7r, gi6c) {
		l4p.ho7h({
			title: "提示",
			message: "唱片公司要求，该歌曲须下载后播放",
			btnok: "下载",
			btncc: "取消",
			okstyle: "u-btn2-w1",
			ccstyle: "u-btn2-w1",
			action: function(u4y) {
				if (u4y == "ok") {
					l4p.LU7N({
						id: hy7r,
						type: gi6c
					})
				}
			}
		})
	};
	l4p.WX2x = function(kB8t, oc9T) {
		var bR4V, cU5Z = "唱片公司要求，当前歌曲须付费使用。";
		try {
			bR4V = top.api.feeMessage || {}
		} catch (e) {
			bR4V = {}
		}
		if (oc9T == 1 || oc9T == 8) {
			cU5Z = bR4V["vip"] || cU5Z
		} else if (oc9T == 4) {
			cU5Z = bR4V["album"] || cU5Z
		} else {
			cU5Z = bR4V["unknow"] || cU5Z
		}
		return l4p.ki8a({
			parent: document[FullscreenApi.fullscreenElement] || document.body,
			clazz: "m-layer-w5",
			html: a3x.cd4h("m-popup-info", {
				tip: cU5Z,
				oktext: "马上去开通",
				cctext: "以后再说"
			}),
			onaction: function(d4h) {
				if (d4h.action == "ok") {
					location.dispatch2("/payfee?mvId=" + kB8t);
					wd2x.eV6P("click", {
						type: "tobuyone",
						name: "box",
						source: "mv",
						sourceid: kB8t || 0
					})
				}
			}
		})
	};
	l4p.Lj6d = function() {
		function compareFee(cDn6h, cDk6e) {
			var bz4D = {
				1: 99,
				8: 99,
				4: 88,
				16: 99
			};
			return (bz4D[cDn6h] || 0) - (bz4D[cDk6e] || 0)
		}
		return function(i4m, cU5Z, rQ0x, ey6s) {
			rQ0x = rQ0x || {};
			var zc2x = [],
				Li6c = {},
				bFZ2x = 0,
				bGc2x = 0,
				Lh6b = null;
			if (!i4m || !i4m.length) return zc2x;
			k4o.bd4h(i4m, function(bj4n) {
				var fA6u = l4p.qq0x(bj4n);
				if (fA6u == 0) {
					zc2x.push(bj4n)
				} else if (fA6u == 10) {
					if (bj4n.privilege) {
						bj4n.fee = bj4n.privilege.fee
					}
					if (compareFee(bj4n.fee, Li6c.fee) > 0) {
						Li6c = bj4n
					}
				} else if (fA6u == 11) {
					++bFZ2x;
					if (!rQ0x.play) zc2x.push(bj4n)
				} else if (fA6u == 1e3) {
					++bGc2x;
					if (!rQ0x.download) zc2x.push(bj4n)
				} else if (fA6u == 100) {
					Lh6b = bj4n
				}
			});
			if (zc2x.length == 0 && cU5Z) {
				if (bFZ2x == i4m.length) {
					var uj1x = i4m[0].privilege || {};
					if (uj1x.payed) {
						l4p.iu7n("唱片公司要求，该歌曲须下载后播放")
					} else {
						l4p.uX1x(uj1x.fee, null, null, ey6s)
					}
				} else if (bGc2x == i4m.length) {
					l4p.iu7n("因版权方要求，该歌曲不支持下载")
				} else if (Li6c.id) {
					l4p.uX1x(Li6c.fee, Li6c.id, null, ey6s, Li6c.privilege)
				} else {
					if (Lh6b && i4m.length == 1 && Lh6b.privilege && Lh6b.privilege.st < 0 && Lh6b.privilege.toast) {
						l4p.iu7n(null, null, null, true, Lh6b)
					} else {
						l4p.iu7n()
					}
				}
			}
			return zc2x
		}
	}();
	l4p.qq0x = function(bj4n) {
		if (!bj4n) return 0;
		var fA6u = bj4n.privilege;
		if (bj4n.program) return 0;
		if (window.GAbroad) return 100;
		if (fA6u) {
			if (fA6u.st != null && fA6u.st < 0) {
				return 100
			}
			if (fA6u.fee > 0 && fA6u.fee != 8 && fA6u.payed == 0 && fA6u.pl <= 0) return 10;
			if (fA6u.fee == 16) return 11;
			if ((fA6u.fee == 0 || fA6u.payed) && fA6u.pl > 0 && fA6u.dl == 0) return 1e3;
			if (fA6u.pl == 0 && fA6u.dl == 0) return 100;
			return 0
		} else {
			var ex6r = bj4n.status != null ? bj4n.status : bj4n.st != null ? bj4n.st : 0;
			if (bj4n.status >= 0) return 0;
			if (bj4n.fee > 0) return 10;
			return 100
		}
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		fy6s = NEJ.R,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		I4M = c3x("nej.ut"),
		w4A = c3x("nm.w"),
		b3x;
	if ( !! w4A.bGt2x) return;
	var cl4p = ~ [];
	cl4p = {
		bGw2x: ++cl4p,
		cDi6c: (![] + "")[cl4p],
		kl8d: ++cl4p,
		Lf6Z: (![] + "")[cl4p],
		Wq2x: (cl4p[cl4p] + "")[cl4p],
		bGX2x: ++cl4p,
		cFp6j: ({} + "")[cl4p],
		cDf6Z: (cl4p[cl4p] + "")[cl4p],
		cDe6Y: (![] + "")[cl4p],
		Qj0x: ++cl4p,
		VZ2x: (!"" + "")[cl4p],
		cFq6k: ++cl4p,
		BD3x: ++cl4p,
		bHr2x: ({} + "")[cl4p],
		wW2x: ++cl4p,
		cDb6V: ++cl4p,
		cFr6l: ++cl4p,
		cFs6m: ++cl4p
	};
	cl4p.KY6S = (cl4p.KY6S = cl4p + "")[cl4p.BD3x] + (cl4p.KX6R = cl4p.KY6S[cl4p.kl8d]) + (cl4p.bfp5u = (cl4p.Gl5q + "")[cl4p.kl8d]) + (!cl4p + "")[cl4p.Qj0x] + (cl4p.Gm5r = cl4p.KY6S[cl4p.wW2x]) + (cl4p.Gl5q = (!"" + "")[cl4p.kl8d]) + (cCW6Q = (!"" + "")[cl4p.bGX2x]) + cl4p.KY6S[cl4p.BD3x] + cl4p.Gm5r + cl4p.KX6R + cl4p.Gl5q;
	cl4p.bfp5u = cl4p.Gl5q + (!"" + "")[cl4p.Qj0x] + cl4p.Gm5r + cCW6Q + cl4p.Gl5q + cl4p.bfp5u;
	cl4p.Gl5q = cl4p.bGw2x[cl4p.KY6S][cl4p.KY6S];
	w4A.bGt2x = cl4p
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		h4l = c3x("nej.v"),
		a3x = c3x("nej.e"),
		O4S = c3x("nej.ui"),
		b3x;
	if ( !! O4S.bfj5o) return;
	var iX7Q = a3x.to1x(".#<uispace>{position:absolute;background:#fff;}");
	O4S.bfj5o = NEJ.C();
	b3x = O4S.bfj5o.N4R(O4S.Vk1x);
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.bX4b([
			[document, "click", this.sV1x.f4j(this)]
		]);
		this.cCU6O = !! e4i.nostop;
		this.bJB3x = {
			top: e4i.top,
			left: e4i.left
		}
	};
	b3x.bC4G = function() {
		delete this.xO2x;
		delete this.bmy7r;
		delete this.qH0x;
		delete this.bJH3x;
		delete this.bfe5j;
		delete this.bJB3x;
		this.bF4J()
	};
	b3x.ch4l = function() {
		this.mj8b = iX7Q
	};
	b3x.bW4a = function() {
		this.ci4m();
		this.AF3x = this.o4s;
		h4l.s4w(this.o4s, "click", this.cCT6N.f4j(this))
	};
	b3x.sV1x = function(d4h) {
		if (d4h.button != 2) this.bt4x()
	};
	b3x.cCT6N = function(d4h) {
		if (this.cCU6O) return;
		h4l.tW1x(d4h);
		var F4J = h4l.X4b(d4h);
		if (F4J.tagName == "A") h4l.cn4r(d4h)
	};
	b3x.cCS6M = function() {
		var df5k = /\s+/i;
		return function(or9i) {
			or9i = (or9i || "").trim().toLowerCase().split(df5k);
			or9i[0] = or9i[0] || "bottom";
			or9i[1] = or9i[1] || "left";
			this.qH0x = or9i
		}
	}();
	b3x.cCR6L = function(or9i) {
		var m4q = {},
			nd9U = this.bmy7r,
			cFt6n = a3x.oy9p(),
			cC5H = this.o4s.offsetWidth,
			ce4i = this.o4s.offsetHeight;
		switch (or9i[0]) {
		case "top":
			m4q.top = nd9U.top - ce4i;
			m4q.left = or9i[1] == "right" ? nd9U.left + nd9U.width - cC5H : nd9U.left;
			break;
		case "left":
			m4q.left = nd9U.left - cC5H;
			m4q.top = or9i[1] == "bottom" ? nd9U.top + nd9U.height - ce4i : nd9U.top;
			break;
		case "right":
			m4q.left = nd9U.left + nd9U.width;
			m4q.top = or9i[1] == "bottom" ? nd9U.top + nd9U.height - ce4i : nd9U.top;
			break;
		default:
			m4q.top = nd9U.top + nd9U.height;
			m4q.left = or9i[1] == "right" ? nd9U.left + nd9U.width - cC5H : nd9U.left;
			break
		}
		return m4q
	};
	b3x.ME7x = function() {
		if (!this.bJH3x) {
			this.gD7w(this.bJB3x);
			return
		}
		if ( !! this.bfe5j) {
			this.gD7w(this.xO2x);
			return
		}
		if ( !! this.bmy7r) this.gD7w(this.cCR6L(this.qH0x))
	};
	b3x.cCP6J = function(F4J, dq5v, d4h) {
		dq5v = dq5v || bb4f;
		var bKE3x = a3x.oy9p(),
			cZ5e = h4l.jG8y(d4h) + (dq5v.left || 0),
			hv7o = h4l.lZ8R(d4h) + (dq5v.top || 0),
			cC5H = F4J.offsetWidth + (dq5v.right || 0),
			ce4i = F4J.offsetHeight + (dq5v.bottom || 0),
			KS6M = bKE3x.scrollWidth,
			bmN7G = bKE3x.scrollHeight,
			bmO7H = cZ5e + cC5H,
			bmP7I = hv7o + ce4i;
		switch (this.qH0x[0]) {
		case "top":
			hv7o = bmP7I > bmN7G ? hv7o - ce4i : hv7o;
			if (this.qH0x[1] == "right") {
				cZ5e = cZ5e - cC5H < 0 ? 0 : cZ5e - cC5H
			} else {
				cZ5e = bmO7H > KS6M ? KS6M - cC5H : cZ5e
			}
			break;
		case "left":
			cZ5e = bmO7H > KS6M ? KS6M - cC5H : cZ5e;
			if (this.qH0x[1] == "top") {
				hv7o = bmP7I > bmN7G ? hv7o - ce4i : hv7o
			} else {
				hv7o = hv7o - ce4i < 0 ? hv7o : hv7o - ce4i
			}
			break;
		case "right":
			cZ5e = cZ5e - cC5H < 0 ? 0 : cZ5e - cC5H;
			if (this.qH0x[1] == "top") {
				hv7o = bmP7I > bmN7G ? hv7o - ce4i : hv7o
			} else {
				hv7o = hv7o - ce4i < 0 ? hv7o : hv7o - ce4i
			}
			break;
		default:
			hv7o = hv7o - ce4i < 0 ? hv7o : hv7o - ce4i;
			if (this.qH0x[1] == "left") {
				cZ5e = bmO7H > KS6M ? KS6M - cC5H : cZ5e
			} else {
				cZ5e = cZ5e - cC5H < 0 ? 0 : cZ5e - cC5H
			}
			break
		}
		return {
			top: hv7o,
			left: cZ5e
		}
	};
	b3x.bmQ7J = function() {
		var cCN6H = function(F4J, dq5v) {
				F4J = a3x.B4F(F4J);
				if (!F4J) return;
				dq5v = dq5v || bb4f;
				var bi4m = a3x.hU7N(F4J);
				return {
					top: bi4m.y - (dq5v.top || 0),
					left: bi4m.x - (dq5v.left || 0),
					width: F4J.offsetWidth + (dq5v.right || 0),
					height: F4J.offsetHeight + (dq5v.bottom || 0)
				}
			};
		return function(e4i) {
			e4i = e4i || bb4f;
			this.bfe5j = e4i.event;
			this.cCS6M(e4i.align);
			if ( !! this.bfe5j) this.xO2x = this.cCP6J(e4i.target, e4i.delta, this.bfe5j);
			this.bmy7r = cCN6H(e4i.target, e4i.delta);
			this.bJH3x = !! e4i.fitable;
			this.J4N();
			return this
		}
	}()
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		O4S = c3x("nej.ui"),
		b3x, L4P;
	if ( !! O4S.CE4I) return;
	O4S.CE4I = NEJ.C();
	b3x = O4S.CE4I.N4R(O4S.bdS5X);
	L4P = O4S.CE4I.cs5x;
	O4S.CE4I.cFu6o = function() {
		var cCL6F = function(d4h, C4G, fP6J, kr8j, PH0x) {
				var cF5K, K4O = C4G + "-i",
					R4V = fP6J.zg3x,
					bMs4w = !! kr8j.noclear,
					bMI4M = !! kr8j.toggled;
				if (k4o.gK7D(kr8j.onbeforeclick)) {
					var bdL5Q = kr8j.noclear,
						cCK6E = kr8j.toggled;
					try {
						kr8j.onbeforeclick(kr8j)
					} catch (e) {}
					bMs4w = !! kr8j.noclear;
					bMI4M = !! kr8j.toggled;
					kr8j.toggled = cCK6E;
					kr8j.noclear = bdL5Q
				}
				var EC4G = R4V[K4O];
				if (bMI4M && !! EC4G) {
					EC4G.bt4x();
					return
				}
				h4l.bg4k(d4h);
				if (!bMs4w) {
					h4l.z4D(document, "click");
					cF5K = fP6J.A4E(kr8j)
				} else {
					cF5K = fP6J.bKi3x(kr8j, !0)
				}
				R4V[K4O] = cF5K;
				cF5K.wq2x("onbeforerecycle", function() {
					delete R4V[K4O]
				});
				cF5K.bmQ7J(PH0x)
			};
		return function(g4k, e4i) {
			g4k = a3x.B4F(g4k);
			if (!g4k) return this;
			if (!this.zg3x) this.zg3x = {};
			var C4G = a3x.lP8H(g4k);
			if ( !! this.zg3x[C4G]) return this;
			e4i = NEJ.X({}, e4i);
			var PH0x = NEJ.EX({
				align: "",
				delta: null,
				fitable: !1
			}, e4i);
			PH0x.target = C4G;
			e4i.destroyable = !0;
			if (!e4i.fixed) {
				PH0x.fitable = !0;
				e4i.parent = document.body
			}
			this.zg3x[C4G] = [C4G, e4i.event || "click", cCL6F.eA6u(null, C4G, this, e4i, PH0x)];
			h4l.s4w.apply(h4l, this.zg3x[C4G]);
			return this
		}
	}();
	O4S.CE4I.cFv6p = function(g4k) {
		if (!this.zg3x) return this;
		var C4G = a3x.lP8H(g4k),
			d4h = this.zg3x[C4G];
		if (!d4h) return this;
		delete this.zg3x[C4G];
		h4l.mo8g.apply(h4l, d4h);
		var cF5K = this.zg3x[C4G + "-i"];
		if ( !! cF5K) cF5K.bt4x();
		return this
	};
	b3x.bgC5H = function() {
		return O4S.bfj5o.A4E(this.cg4k)
	};
	b3x.UY1x = function() {
		L4P.UY1x.apply(this, arguments);
		this.cg4k.top = null;
		this.cg4k.left = null;
		this.cg4k.nostop = !1
	};
	b3x.bmQ7J = function(e4i) {
		if ( !! this.oU9L) this.oU9L.bmQ7J(e4i);
		return this
	}
})();
(function() {
	var c3x = NEJ.P,
		bc4g = c3x("nej.ui"),
		n4r = c3x("nm.l"),
		b3x, L4P;
	n4r.bna7T = NEJ.C();
	b3x = n4r.bna7T.N4R(bc4g.CE4I);
	b3x.bl4p = function(e4i) {
		e4i.nohack = true;
		this.bn4r(e4i)
	}
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		n4r = c3x("nm.l"),
		l4p = c3x("nm.x"),
		b3x, L4P;
	var FullscreenApi = l4p.FL5Q || {};
	n4r.Z4d = NEJ.C();
	b3x = n4r.Z4d.N4R(n4r.bna7T);
	L4P = n4r.Z4d.cs5x;
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.ez6t = e4i.type || 1
	};
	b3x.bW4a = function() {
		this.ci4m();
		this.o4s = a3x.nR9I(this.cCH6B());
		var i4m = a3x.dk5p(this.o4s);
		this.ry0x = i4m[0];
		this.cu5z = i4m[1]
	};
	b3x.cCH6B = function() {
		return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
	};
	b3x.ME7x = function() {
		var D4H = {},
			cj4n = this.o4s.style,
			jD8v = a3x.oy9p(),
			nW9N = {
				left: jD8v.scrollLeft,
				top: jD8v.scrollTop
			},
			dq5v = {
				left: jD8v.clientWidth - this.o4s.offsetWidth,
				top: jD8v.clientHeight - this.o4s.offsetHeight
			};
		D4H.top = Math.max(0, nW9N.top + dq5v.top / 2);
		D4H.left = Math.max(0, nW9N.left + dq5v.left / 2);
		this.oU9L.gD7w(D4H)
	};
	b3x.J4N = function(e4i) {
		L4P.J4N.call(this);
		this.ME7x();
		this.ez6t == 1 ? a3x.fj6d(this.ry0x, "u-icn-32", "u-icn-31") : a3x.fj6d(this.ry0x, "u-icn-31", "u-icn-32");
		this.cu5z.innerHTML = e4i.tip || ""
	};
	window.g_showTipCard = n4r.Z4d.J4N = function() {
		var eg6a;
		return function(e4i) {
			clearTimeout(eg6a);
			if (e4i.parent === undefined) e4i.parent = document[FullscreenApi.fullscreenElement] || document.body;
			if (e4i.autoclose === undefined) e4i.autoclose = true;
			e4i.clazz = "m-sysmsg"; !! this.fg6a && this.fg6a.T4X();
			this.fg6a = this.A4E(e4i);
			this.fg6a.J4N(e4i);
			if (e4i.autoclose) eg6a = setTimeout(this.bt4x.f4j(this), 2e3)
		}.f4j(n4r.Z4d)
	}();
	n4r.Z4d.bt4x = function() { !! this.fg6a && this.fg6a.bt4x()
	}
})();
(function() {
	var c3x = NEJ.P,
		v4z = c3x("nej.j"),
		k4o = c3x("nej.u");
	if (window["GRef"] && window["GRef"] == "mail") {
		v4z.bm4q = v4z.bm4q.eH6B(function(d4h) {
			e4i = d4h.args[1];
			e4i.query = e4i.query || {};
			if (k4o.fC6w(e4i.query)) e4i.query = k4o.hq7j(e4i.query);
			e4i.query.ref = "mail"
		})
	}
})();
(function() {
	var c3x = NEJ.P,
		br4v = NEJ.F,
		fy6s = NEJ.R,
		I4M = c3x("nej.ut"),
		k4o = c3x("nej.u"),
		h4l = c3x("nej.v"),
		v4z = c3x("nej.j"),
		q4u = c3x("nm.d"),
		n4r = c3x("nm.l"),
		K4O = "playlist-tracks_",
		b3x;
	q4u.fp6j({
		"playlist_my-list": {
			url: "/api/user/playlist",
			type: "GET",
			format: function(Q4U, e4i) {
				this.cCG6A(Q4U.playlist);
				return {
					total: 0,
					list: fy6s
				}
			},
			onerror: function() {
				this.z4D("onlisterror")
			}
		},
		"playlist_new-add": {
			url: "/api/playlist/create",
			format: function(Q4U, e4i) {
				var np9g = Q4U.playlist;
				np9g.creator = GUser;
				np9g.isHost = !0;
				np9g.typeFlag = "playlist";
				return np9g
			},
			finaly: function(d4h, e4i) {
				h4l.z4D(q4u.ic7V, "listchange", d4h)
			},
			onmessage: function() {
				var mk8c = {
					507: "歌单数量超过上限！",
					405: "你操作太快了，请休息一会再试！",
					406: "你操作太快了，请休息一会再试！"
				};
				return function(bY4c) {
					n4r.Z4d.J4N({
						tip: mk8c[bY4c] || "创建失败",
						type: 2
					})
				}
			}()
		},
		"playlist_new-del": {
			url: "/api/playlist/delete",
			type: "GET",
			filter: function(e4i) {
				e4i.id = e4i.data.pid
			},
			finaly: function(d4h, e4i) {
				h4l.z4D(q4u.ic7V, "listchange", d4h)
			},
			onmessage: function() {
				var mk8c = {
					404: "歌单不存在！",
					405: "你操作太快了，请休息一会再试！",
					406: "你操作太快了，请休息一会再试！"
				};
				return function(bY4c) {
					n4r.Z4d.J4N({
						tip: mk8c[bY4c] || "删除失败",
						type: 2
					})
				}
			}()
		},
		"playlist_fav-add": {
			type: "GET",
			url: "/api/playlist/subscribe",
			filter: function(e4i) {
				var ey6s = e4i.ext || {};
				e4i.ext = NEJ.X(ey6s, e4i.data);
				e4i.data = {
					id: e4i.ext.id
				}
			},
			format: function(Q4U, e4i) {
				n4r.Z4d.J4N({
					tip: "收藏成功" + (Q4U.point > 0 ? ' 获得<em class="s-fc6">' + Q4U.point + "积分</em>" : "")
				});
				var p4t = e4i.ext;
				p4t.subscribedCount++;
				return p4t
			},
			finaly: function(d4h, e4i) {
				h4l.z4D(q4u.cCF6z, "listchange", d4h);
				h4l.z4D(q4u.cCF6z, "itemchange", {
					attr: "subscribedCount",
					data: d4h.data
				})
			},
			onmessage: function() {
				var mk8c = {
					404: "歌单不存在！",
					501: "歌单已经收藏！",
					506: "歌单收藏数量超过上限！"
				};
				return function(bY4c) {
					n4r.Z4d.J4N({
						type: 2,
						tip: mk8c[bY4c] || "收藏失败，请稍后再试！"
					})
				}
			}()
		},
		"playlist_fav-del": {
			url: "/api/playlist/unsubscribe",
			type: "GET",
			filter: function(e4i) {
				e4i.id = e4i.data.id = e4i.data.pid
			},
			finaly: function(d4h, e4i) {
				h4l.z4D(q4u.ic7V, "listchange", d4h)
			},
			onmessage: function() {
				var mk8c = {
					404: "歌单不存在！",
					405: "你操作太快了，请休息一会再试！",
					406: "你操作太快了，请休息一会再试！"
				};
				return function(bY4c) {
					n4r.Z4d.J4N({
						tip: mk8c[bY4c],
						type: 2
					})
				}
			}()
		},
		"playlist_new-update": {
			url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
			filter: function(e4i) {
				var j4n = e4i.data,
					bdu5z = {};
				bdu5z["playlist-update-name"] = {
					id: j4n.id,
					name: j4n.name
				};
				bdu5z["playlist-update-tag"] = {
					id: j4n.id,
					tags: j4n.tags.join(";")
				};
				bdu5z["playlist-update-desc"] = {
					id: j4n.id,
					desc: j4n.description
				};
				e4i.data = bdu5z;
				e4i.ext = j4n
			},
			format: function(W4a, qB0x, PA0x, e4i) {
				if (W4a.code == 200 && qB0x.code == 200 && PA0x.code == 200) {
					e4i.ext.allSuccess = true;
					n4r.Z4d.J4N({
						tip: "保存成功"
					})
				} else if (W4a.code == 407 || qB0x.code == 407 || PA0x.code == 407) {
					e4i.ext.allSuccess = false;
					n4r.Z4d.J4N({
						type: 2,
						tip: "输入内容包含关键字"
					})
				} else {
					e4i.ext.allSuccess = false;
					n4r.Z4d.J4N({
						type: 2,
						tip: "保存失败"
					})
				}
				return this.eJ6D(e4i.ext.id)
			},
			finaly: function(d4h, e4i) {
				h4l.z4D(q4u.ic7V, "listchange", d4h)
			},
			onmessage: function(bY4c) {
				n4r.Z4d.J4N({
					type: 2,
					tip: "保存失败"
				})
			}
		},
		"playlist-update-name": {
			url: "/api/playlist/update/name",
			format: function(Q4U, e4i) {
				var p4t = this.eJ6D(e4i.ext.id);
				if (Q4U.code == 200) p4t.name = e4i.ext.name;
				return Q4U
			}
		},
		"playlist-update-tag": {
			url: "/api/playlist/tags/update",
			format: function(Q4U, e4i) {
				var p4t = this.eJ6D(e4i.ext.id);
				if (Q4U.code == 200) p4t.tags = e4i.ext.tags;
				return Q4U
			}
		},
		"playlist-update-desc": {
			url: "/api/playlist/desc/update",
			format: function(Q4U, e4i) {
				var p4t = this.eJ6D(e4i.ext.id);
				if (Q4U.code == 200) p4t.description = e4i.ext.description;
				return Q4U
			}
		},
		"playlist-update-cover": {
			url: "/api/playlist/cover/update",
			filter: function(e4i) {
				e4i.url = e4i.data.url;
				delete e4i.data.url
			},
			format: function(Q4U, e4i) {
				n4r.Z4d.J4N({
					tip: "保存成功"
				});
				var p4t = this.eJ6D(e4i.data.id);
				p4t.coverImgUrl = e4i.url;
				e4i.ext = p4t;
				return p4t
			},
			onmessage: function(bY4c) {
				n4r.Z4d.J4N({
					type: 2,
					tip: "保存失败"
				})
			},
			finaly: function(d4h, e4i) {
				h4l.z4D(q4u.ic7V, "itemchange", {
					attr: "coverImgUrl",
					data: e4i.ext
				})
			}
		},
		"playlist-upcount": {
			url: "/api/playlist/update/playcount",
			type: "GET",
			format: function(Q4U, e4i) {
				var np9g = this.eJ6D(e4i.data.id);
				if (!np9g) return;
				np9g.playCount++;
				h4l.z4D(q4u.ic7V, "itemchange", {
					attr: "playcount",
					data: np9g
				})
			}
		}
	});
	q4u.ic7V = NEJ.C();
	b3x = q4u.ic7V.N4R(q4u.hJ7C);
	b3x.cw5B = function() {
		this.cE5J()
	};
	b3x.bQa5f = function() {
		var do5t = GUser.userId;
		this.lO8G({
			limit: 1001,
			key: "playlist_my-" + do5t,
			data: {
				offset: 0,
				limit: 1001,
				uid: do5t
			}
		})
	};
	b3x.cCG6A = function(i4m) {
		var do5t = GUser.userId,
			iQ7J = [],
			bQq5v = [];
		k4o.bd4h(i4m, function(p4t) {
			p4t.typeFlag = "playlist";
			if (p4t.creator && p4t.creator.userId == do5t) {
				if (p4t.specialType == 5) p4t.name = "我喜欢的音乐";
				p4t.isHost = !0;
				iQ7J.push(p4t)
			} else {
				bQq5v.push(p4t)
			}
		});
		this.wh2x("playlist_new-" + do5t, iQ7J);
		this.wh2x("playlist_fav-" + do5t, bQq5v)
	};
	b3x.cCE6y = function(j4n) {
		this.cp5u("playlist-update-cover", {
			data: j4n
		})
	};
	b3x.cFw6q = function() {
		var Pl0x = this.cCC6w.B4F("host-plist");
		if (Pl0x.length == 0) {
			return
		}
		if (Pl0x.length == 1 && Pl0x[0].trackCount <= 0) {
			return
		}
		for (var i = 0, len = Pl0x.length; i < len; i++) {
			var p4t = Pl0x[i];
			if (p4t.trackCount > 0) return p4t.id
		}
		return this.cCC6w.B4F("host-plist")[0].id
	};
	b3x.cCB6v = function(C4G) {
		if (GUser && GUser.userId > 0) {
			this.cp5u("playlist-upcount", {
				data: {
					id: C4G
				}
			})
		}
	};
	b3x.Gz5E = function() {
		if (GUser && GUser.userId > 0) {
			return !0
		} else {
			top.login();
			return !1
		}
	};
	b3x.cFx6r = function() {
		return GUser.userId
	};
	b3x.GA5F = function(p4t) {
		if (p4t.userId == GUser.userId && p4t.specialType == 5) p4t.name = "我喜欢的音乐";
		h4l.z4D(this.constructor, "itemchange", {
			data: this.Bs3x(p4t)
		});
		return p4t
	};
	I4M.fK6E.A4E({
		element: q4u.ic7V,
		event: ["listchange", "playcountchange", "itemchange"]
	})
})();
(function() {
	var c3x = NEJ.P,
		fy6s = NEJ.R,
		br4v = NEJ.F,
		bb4f = NEJ.O,
		I4M = c3x("nej.ut"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		l4p = c3x("nm.x"),
		q4u = c3x("nm.d"),
		n4r = c3x("nm.l"),
		b3x, L4P;
	q4u.fp6j({
		"program-get": {
			url: "/api/dj/program/detail",
			format: function(Q4U) {
				return Q4U.program
			}
		},
		"program_djradio-list": {
			type: "GET",
			url: "/api/dj/program/byradio",
			filter: function(e4i) {
				e4i.data.limit = 1e3;
				delete e4i.data.id
			},
			format: function(Q4U, e4i) {
				var bRn6h = [],
					qs0x = Q4U.programs;
				if (qs0x) {
					for (var i = 0, l = qs0x.length; i < l; i++) {
						if (qs0x[i].programFeeType < 10 || qs0x[i].buyed) {
							bRn6h.push(qs0x[i])
						}
					}
				}
				return bRn6h
			}
		},
		"program_fav-list": {
			url: "/api/djprogram/subscribed/paged",
			format: function(Q4U, e4i) {
				return Q4U.programs
			},
			onerror: "onlisterror"
		},
		"program_fav-add": {
			url: "/api/djprogram/subscribe",
			filter: function(e4i) {
				e4i.ext = e4i.data;
				e4i.data = {
					id: e4i.ext.id
				};
				e4i.id = e4i.data.id
			},
			format: function(Q4U, e4i) {
				n4r.Z4d.J4N({
					tip: "收藏成功"
				});
				var p4t = e4i.ext;
				p4t.subscribedCount++;
				p4t.subscribed = !0;
				return p4t
			},
			finaly: function(d4h, e4i) {
				h4l.z4D(q4u.rb0x, "listchange", d4h)
			},
			onmessage: function() {
				var mk8c = {
					404: "节目不存在！",
					501: "节目已收藏！"
				};
				return function(bY4c) {
					n4r.Z4d.J4N({
						type: 2,
						tip: mk8c[bY4c] || "收藏失败！"
					})
				}
			}()
		},
		"program_fav-del": {
			url: "/api/djprogram/unsubscribe",
			finaly: function(d4h, e4i) {
				h4l.z4D(q4u.rb0x, "listchange", d4h)
			},
			onmessage: function() {
				var mk8c = {
					404: "节目不存在！",
					502: "没有收藏此节目！"
				};
				return function(bY4c) {
					l4p.bnC7v({
						txt: mk8c[bY4c] || "取消收藏失败！"
					})
				}
			}()
		},
		"program-update-count": {
			type: "GET",
			url: "/api/dj/program/listen",
			filter: function(e4i) {
				var p4t = this.eJ6D(e4i.data.id) || bb4f;
				e4i.ext = (p4t.listenerCount || 0) + 1
			},
			format: function(Q4U, e4i) {
				var p4t = this.eJ6D(e4i.data.id);
				if ( !! p4t) {
					p4t.listenerCount = Math.max(e4i.ext, p4t.listenerCount || 0)
				}
			},
			finaly: function(d4h, e4i) {
				h4l.z4D(q4u.rb0x, "itemchange", {
					attr: "playCount",
					data: this.eJ6D(e4i.data.id)
				})
			}
		},
		"program-like": {
			url: "/api/resource/like",
			filter: function(e4i) {
				e4i.data = {
					threadId: "A_DJ_1_" + e4i.id
				}
			},
			format: function(Q4U, e4i) {
				var p4t = e4i.ext.data || this.eJ6D(e4i.id);
				p4t.liked = true;
				p4t.likedCount++;
				e4i.ext.data = p4t;
				try {
					top.player.setLike(p4t)
				} catch (e) {}
				return p4t
			},
			finaly: function(d4h, e4i) {
				h4l.z4D(q4u.rb0x, "itemchange", {
					attr: "likedCount",
					data: e4i.ext.data
				})
			}
		},
		"program-unlike": {
			url: "/api/resource/unlike",
			filter: function(e4i) {
				e4i.data = {
					threadId: "A_DJ_1_" + e4i.id
				}
			},
			format: function(Q4U, e4i) {
				var p4t = e4i.ext.data || this.eJ6D(e4i.id);
				p4t.liked = false;
				p4t.likedCount--;
				e4i.ext.data = p4t;
				try {
					top.player.setLike(p4t)
				} catch (e) {}
				return p4t
			},
			finaly: function(d4h, e4i) {
				h4l.z4D(q4u.rb0x, "itemchange", {
					attr: "likedCount",
					data: e4i.ext.data
				})
			}
		}
	});
	q4u.rb0x = NEJ.C();
	b3x = q4u.rb0x.N4R(q4u.hJ7C);
	b3x.cFy6s = function() {
		var do5t = GUser.userId;
		this.lO8G({
			limit: 1001,
			key: "program_fav-" + do5t,
			data: {
				offset: 0,
				limit: 1e3,
				uid: do5t
			}
		})
	};
	b3x.cFz6t = function(de5j) {
		var qr0x = de5j[this.xy2x];
		l4p.cCv6p(4, function(R4V) {
			R4V.wh2x("track_program-" + qr0x, de5j.songs)
		});
		delete de5j.songs;
		var bP4T = de5j.mainSong;
		l4p.cCv6p(4, function(R4V) {
			R4V.wh2x("track_program_main-" + qr0x, !bP4T ? [] : [bP4T])
		});
		de5j.mainSong = (bP4T || bb4f).id
	};
	b3x.cFB6v = function(C4G) {
		var de5j = this.eJ6D(C4G),
			do5t = localCache.Za3x("host.profile.userId");
		return !!de5j && de5j.dj.userId == do5t
	};
	b3x.cFC6w = function(C4G) {
		return !1
	};
	b3x.GA5F = function(p4t) {
		h4l.z4D(this.constructor, "itemchange", {
			attr: "detail",
			data: this.Bs3x(p4t)
		});
		return p4t
	};
	b3x.cCB6v = function(C4G) {
		this.cp5u("program-update-count", {
			data: {
				id: C4G
			}
		})
	};
	l4p.bSI7B = function(e4i) {
		var R4V = q4u.rb0x.A4E({
			onitemadd: function() {
				(e4i.onsuccess || br4v)()
			},
			onerror: function() {
				(e4i.onerror || br4v)()
			}
		});
		if (e4i.data.liked) {
			R4V.ux1x(e4i.data)
		} else {
			R4V.ps9j(e4i.data)
		}
	};
	b3x.ps9j = function(de5j) {
		if (!l4p.gT7M()) return;
		var ct5y = {
			ext: {}
		};
		if (k4o.lG8y(de5j)) {
			ct5y.id = de5j.id;
			ct5y.ext.data = de5j
		} else {
			ct5y.id = de5j
		}
		this.cp5u("program-like", ct5y)
	};
	b3x.ux1x = function(de5j) {
		if (!l4p.gT7M()) return;
		var ct5y = {
			ext: {}
		};
		if (k4o.lG8y(de5j)) {
			ct5y.id = de5j.id;
			ct5y.ext.data = de5j
		} else {
			ct5y.id = de5j
		}
		this.cp5u("program-unlike", ct5y)
	};
	I4M.fK6E.A4E({
		element: q4u.rb0x,
		event: ["listchange", "itemchange"]
	})
})();
(function() {
	var c3x = NEJ.P,
		br4v = NEJ.F,
		fy6s = NEJ.R,
		I4M = c3x("nej.ut"),
		k4o = c3x("nej.u"),
		h4l = c3x("nej.v"),
		v4z = c3x("nej.j"),
		q4u = c3x("nm.d"),
		n4r = c3x("nm.l"),
		l4p = c3x("nm.x"),
		K4O = "playlist-tracks_",
		l4p = c3x("nm.x"),
		b3x;
	q4u.fp6j({
		"track-get": {
			url: "/api/v3/song/detail",
			filter: function(e4i) {
				e4i.data.c = JSON.stringify([{
					id: e4i.data.id
				}])
			},
			format: function(Q4U, e4i) {
				var bj4n = l4p.GB5G(Q4U.songs[0]);
				bj4n.privilege = Q4U.privileges[0];
				return bj4n
			}
		},
		"track_playlist-list": {
			url: "/api/v3/playlist/detail",
			filter: function(e4i) {
				e4i.data.n = 1e3
			},
			format: function(Q4U, e4i) {
				var hC7v = [];
				this.tR1x.GA5F(Q4U.playlist);
				k4o.bd4h(Q4U.playlist.tracks, function(bP4T, r4v) {
					var bTa7T = l4p.GB5G(bP4T);
					bTa7T.privilege = Q4U.privileges[r4v];
					hC7v.push(bTa7T)
				}, this);
				return hC7v
			}
		},
		"track_album-list": {
			url: "/api/v1/album/{id}",
			format: function(Q4U, e4i) {
				var hC7v = [];
				k4o.bd4h(Q4U.songs, function(bj4n) {
					hC7v.push(l4p.GB5G(bj4n))
				});
				return hC7v
			}
		},
		"track_playlist-add": {
			url: "/api/playlist/manipulate/tracks",
			filter: function(e4i) {
				var bz4D = {},
					j4n = e4i.data,
					cCj5o = this.hD7w(e4i.key) || [];
				GC5H = [];
				k4o.bd4h(cCj5o, function(bP4T) {
					var C4G = k4o.lG8y(bP4T) ? bP4T.id : bP4T;
					bz4D[C4G] = true
				});
				e4i.ext = [];
				k4o.bd4h(j4n.tracks, function(bP4T) {
					var C4G = k4o.lG8y(bP4T) ? bP4T.id : bP4T;
					if (!bz4D[C4G]) {
						GC5H.push(C4G);
						bz4D[C4G] = true;
						e4i.ext.push(bP4T)
					}
				});
				j4n.trackIds = JSON.stringify(GC5H);
				j4n.op = "add";
				if (!GC5H.length) {
					e4i.value = {
						code: 502
					}
				}
			},
			format: function(Q4U, e4i) {
				n4r.Z4d.J4N({
					tip: "已添加至歌单"
				});
				var np9g = this.tR1x.eJ6D(e4i.data.pid);
				if ( !! Q4U.coverImgUrl) np9g.coverImgUrl = Q4U.coverImgUrl;
				k4o.nk9b(e4i.ext, function(bP4T) {
					this.yM2x(e4i, k4o.lG8y(bP4T) ? bP4T : null);
					if ( !! np9g) np9g.trackCount++
				}, this);
				h4l.z4D(q4u.ic7V, "itemchange", {
					data: np9g || {},
					cmd: "add"
				});
				this.z4D("onaddsuccess");
				return null
			},
			finaly: function(d4h, e4i) {
				h4l.z4D(q4u.ws2x, "listchange", {
					key: e4i.key,
					action: "refresh"
				});
				var qr0x = e4i.data.pid,
					cB5G = this.kw8o(e4i.key)
			},
			onmessage: function() {
				var mk8c = {
					502: "歌曲已存在！",
					505: "歌单已满！"
				};
				return function(bY4c) {
					setTimeout(function() {
						n4r.Z4d.J4N({
							tip: mk8c[bY4c] || "添加失败，请稍后再试！",
							type: 2
						})
					}, 0)
				}
			}()
		},
		"track_playlist-del": {
			url: "/api/playlist/manipulate/tracks",
			filter: function(e4i) {
				var j4n = e4i.data;
				e4i.ext = j4n.trackIds;
				j4n.trackIds = JSON.stringify(j4n.trackIds);
				j4n.op = "del"
			},
			format: function(Q4U, e4i) {
				var np9g = this.tR1x.eJ6D(e4i.data.pid);
				k4o.bd4h(e4i.ext, function(C4G) {
					this.bls7l({
						id: C4G,
						key: "track_playlist-" + e4i.data.pid
					}, !0);
					if ( !! np9g) np9g.trackCount = Math.max(0, np9g.trackCount - 1)
				}, this);
				h4l.z4D(q4u.ic7V, "itemchange", {
					data: np9g || {},
					cmd: "del"
				});
				return null
			},
			finaly: function(d4h, e4i) {
				h4l.z4D(q4u.ws2x, "listchange", {
					key: e4i.key,
					action: "refresh"
				})
			},
			onmessage: function(bY4c) {
				l4p.bnC7v({
					text: "歌曲删除失败！"
				})
			}
		},
		"track_program-list": {
			url: "/api/dj/program/detail",
			format: function(Q4U, e4i) {
				return this.bTm7f.GA5F(Q4U.program).songs
			},
			onerror: "onlisterror"
		},
		"track_listen_record-list": {
			url: "/api/v1/play/record",
			format: function(Q4U, e4i) {
				var i4m = [];
				if (e4i.data.type == -1) {
					if (Q4U.weekData && Q4U.weekData.length) {
						e4i.data.type = 1
					} else {
						e4i.data.type = 0
					}
				}
				if (e4i.data.type == 1) {
					i4m = this.bTp7i(Q4U.weekData)
				} else {
					i4m = this.bTp7i(Q4U.allData)
				}
				return i4m
			},
			onerror: "onlisterror"
		},
		"track_day-list": {
			url: "/api/v2/discovery/recommend/songs",
			format: function(Q4U, e4i) {
				var on9e = [],
					i4m = Q4U.recommend || [];
				k4o.bd4h(i4m, function(bj4n, r4v) {
					on9e.push({
						action: "recommendimpress",
						json: {
							alg: bj4n.alg,
							scene: "user-song",
							position: r4v,
							id: bj4n.id
						}
					})
				});
				this.kI8A.Xk2x(on9e);
				e4i.limit = i4m.length;
				return i4m
			},
			onerror: "onlisterror"
		},
		"track_lyric-get": {
			type: "GET",
			url: "/api/song/lyric",
			filter: function(e4i) {
				e4i.data.lv = 0;
				e4i.data.tv = 0
			},
			format: function(m4q, e4i) {
				return m4q
			},
			onload: "onlyricload",
			onerror: "onlyricerror"
		}
	});
	q4u.ws2x = NEJ.C();
	b3x = q4u.ws2x.N4R(q4u.hJ7C);
	b3x.cw5B = function() {
		this.cE5J();
		this.tR1x = q4u.ic7V.A4E();
		this.bTm7f = q4u.rb0x.A4E();
		this.kI8A = q4u.hO7H.A4E()
	};
	b3x.bTp7i = function(i4m) {
		var m4q = [],
			fo6i = 0;
		k4o.bd4h(i4m, function(p4t, r4v) {
			var bj4n = l4p.GB5G(p4t.song);
			if (r4v == 0) {
				fo6i = p4t.score
			}
			bj4n.max = fo6i;
			bj4n.playCount = p4t.playCount;
			bj4n.score = p4t.score;
			m4q.push(bj4n)
		});
		return m4q
	};
	I4M.fK6E.A4E({
		element: q4u.ws2x,
		event: ["listchange"]
	})
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		cy5D = c3x("nm.pc");
	var bnH7A = {
		playlist: "A_PL_0_",
		dj: "A_DJ_1_",
		program: "A_DJ_1_",
		album: "R_AL_3_",
		song: "R_SO_4_"
	};
	var qK0x = function(bR4V) {
			var CI4M = "orpheus://orpheus";
			window.top.postMessage(JSON.stringify(bR4V), CI4M)
		};
	var cCi5n = function(lY8Q) {
			var kR8J = "http://" + location.host + "/",
				Pe0x = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/,
				dQ5V = Pe0x.exec(lY8Q);
			if (!dQ5V) return cCh5m(lY8Q);
			var gi6c = dQ5V[2],
				hy7r = dQ5V[3],
				do5t = dQ5V[4] || "",
				jt8l = "";
			switch (gi6c) {
			case "album":
				jt8l = "#/m/album/comment/?rid=" + bnH7A[gi6c] + hy7r + "&id=" + hy7r;
				break;
			case "playlist":
				jt8l = "#/m/playlist/comment/?rid=" + bnH7A[gi6c] + hy7r + "&id=" + hy7r;
				break;
			case "song":
			case "dj":
			case "program":
				jt8l = "#/m/song?rid=" + bnH7A[gi6c] + hy7r;
				break;
			case "event":
				jt8l = "#/m/friend/event/?id=" + hy7r + "&uid=" + do5t;
				break;
			case "user/home":
				jt8l = "#/m/personal/?uid=" + hy7r;
				break;
			case "mv":
				jt8l = "#/m2/mv/?id=" + hy7r;
				break;
			case "activity":
				jt8l = "#/m/friend/activity?id=" + hy7r;
				break;
			case "video":
				jt8l = "#/m2/mv/?id=" + hy7r + "&type=1";
				break;
			default:
				jt8l = "#/m/" + gi6c + "/?id=" + hy7r
			}
			return kR8J + jt8l
		};
	var cCh5m = function(lY8Q) {
			var cCe5j = /http:\/\/player\.youku\.com\/embed\/(.+)/;
			var dQ5V = cCe5j.exec(lY8Q);
			if (dQ5V) return "http://v.youku.com/v_show/id_" + dQ5V[1];
			return lY8Q
		};
	cy5D.eq6k = function(gi6c, hy7r) {
		qK0x({
			name: "play",
			args: {
				type: gi6c,
				id: hy7r
			}
		})
	};
	cy5D.fD6x = function() {
		qK0x({
			name: "pause"
		})
	};
	cy5D.AW3x = function(lY8Q) {
		qK0x({
			name: "open",
			args: {
				link: cCi5n(lY8Q)
			}
		})
	};
	cy5D.kL8D = function(gi6c, hy7r, cK5P) {
		qK0x({
			name: "share",
			args: {
				type: gi6c,
				id: hy7r,
				shareContent: cK5P
			}
		})
	};
	cy5D.bVp7i = function(gi6c, hy7r) {
		qK0x({
			name: "comment",
			args: {
				type: gi6c,
				id: hy7r
			}
		})
	};
	cy5D.cCd5i = function() {
		qK0x({
			name: "init"
		})
	};
	cy5D.AZ3x = function(ce4i) {
		qK0x({
			name: "setHeight",
			args: {
				height: ce4i
			}
		})
	};
	cy5D.im7f = function(bG4K, U4Y) {
		qK0x({
			name: "toast",
			args: {
				message: bG4K || "",
				state: U4Y
			}
		})
	};
	cy5D.GE5J = function(lY8Q) {
		qK0x({
			name: "login",
			args: {
				link: lY8Q
			}
		})
	};
	cy5D.bVP7I = function(Bh3x) {
		qK0x({
			name: "topbar",
			args: {
				show: !! Bh3x
			}
		})
	};
	cy5D.cCc5h = function(bx4B) {
		qK0x({
			name: "refreshtopbar",
			args: {
				info: bx4B
			}
		})
	};
	cy5D.cBZ5e = function(bs4w, r4v) {
		qK0x({
			name: "big",
			args: {
				arr: bs4w,
				index: r4v
			}
		})
	};
	cy5D.LU7N = function(cx5C) {
		qK0x({
			name: "download",
			args: {
				img: cx5C
			}
		})
	};
	cy5D.byy0x = function(cBX5c) {
		qK0x({
			name: "scrollable",
			args: {
				scrollable: cBX5c
			}
		})
	}
})();
(function() {
	function J() {
		var d = "6skV4PUYecGhx07l".split("");
		this.d = function(f) {
			if (null == f || void 0 == f) return f;
			if (0 != f.length % 2) throw Error("1100");
			for (var b = [], c = 0; c < f.length; c++) {
				0 == c % 2 && b.push("%");
				for (var g = d, a = 0; a < g.length; a++) if (f.charAt(c) == g[a]) {
					b.push(a.toString(16));
					break
				}
			}
			return decodeURIComponent(b.join(""))
		}
	}
	var k = (new J).d,
		d = (new J).d,
		e = (new J).d,
		f = (new J).d,
		g = (new J).d;
	(function() {
		var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
			J = [g("YPU7UcUUUlYkU0VkUU")],
			b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
			c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
			Ja = [e("40UlUlUx4kUlYkUsU7")];
		(function() {
			var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
			(function() {
				function d(b, c) {
					if (null == b) return null;
					for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++) f.push(Y(b[e], l++));
					return f
				}
				function f(b) {
					if (null == b) return null;
					for (var c = [], l = a[15], d = b.length; l < d; l++) {
						var g = b[l];
						c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
					}
					return c
				}
				function g(h) {
					var c = [];
					if (null == h || void 0 == h || h.length == a[15]) return za(L);
					if (h.length >= L) {
						var c = a[15],
							l = [];
						if (null != h && h.length != a[15]) {
							if (h.length < L) throw Error(b[134]);
							for (var d = a[15]; d < L; d++) l[d] = h[c + d]
						}
						return l
					}
					for (l = a[15]; l < L; l++) c[l] = h[l % h.length];
					return c
				}
				function e(h) {
					var c = a[405];
					if (null != h) for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
					h = Aa(c ^ a[405]);
					c = h.length;
					if (null == h || c < a[15]) h = new String(b[0]);
					else {
						for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
						h = l.join(b[0])
					}
					return h
				}
				function k(h, c, l) {
					var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
						g = b[74],
						e = [];
					if (l == a[541]) l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g);
					else if (l == a[16]) l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g);
					else if (l == a[19]) l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]);
					else throw Error(b[111]);
					return e.join(b[0])
				}
				function za(b) {
					for (var c = [], l = a[15]; l < b; l++) c[l] = a[15];
					return c
				}
				function Z(h, c, l, d, f) {
					if (null != h && h.length != a[15]) {
						if (null == l) throw Error(b[131]);
						if (h.length < f) throw Error(b[134]);
						for (var e = a[15]; e < f; e++) l[d + e] = h[c + e]
					}
				}
				function Aa(b) {
					var c = [];
					c[0] = b >>> a[74] & a[299];
					c[1] = b >>> a[58] & a[299];
					c[2] = b >>> a[38] & a[299];
					c[3] = b & a[299];
					return c
				}
				function ma(h) {
					if (null == h || void 0 == h) return h;
					h = encodeURIComponent(h);
					for (var c = [], l = h.length, d = a[15]; d < l; d++) if (h.charAt(d) == b[27]) if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
					else throw Error(b[146]);
					else c.push(h.charCodeAt(d));
					return c
				}
				function Na(b) {
					if (null == b || b.length == a[15]) return [];
					b = new String(b);
					for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
						var e = parseInt(b.charAt(d++), a[58]) << a[23],
							g = parseInt(b.charAt(d++), a[58]);
						c[f] = x(e + g)
					}
					return c
				}
				function Ma(c) {
					var d = [];
					d.push(aa[c >>> a[23] & a[56]]);
					d.push(aa[c & a[56]]);
					return d.join(b[0])
				}
				function na(b, c) {
					if (null == b || null == c || b.length != c.length) return b;
					for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]);
					return d
				}
				function Y(a, b) {
					a = x(a);
					b = x(b);
					return x(a ^ b)
				}
				function Oa(a, b) {
					return x(a + b)
				}
				function x(c) {
					if (c < a[290]) return x(a[291] - (a[290] - c));
					if (c >= a[290] && c <= a[282]) return c;
					if (c > a[282]) return x(a[292] + c - a[282]);
					throw Error(b[136])
				}
				function Pa(h) {
					function d() {
						for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++) try {
							var g = h[e];
							l()(g) && f.push(g)
						} catch (k) {}
						return f.join(b[56])
					}
					function l() {
						function h(a) {
							var c = {};
							return k.style.fontFamily = a, g.appendChild(k), c.height = k.offsetHeight, c.width = k.offsetWidth, g[b[307]](k), c
						}
						var d = [c[21], c[141], B[6]],
							l = [],
							f = c[139],
							e = b[327],
							g = C[b[258]],
							k = C[b[167]](c[123]);
						k.style.fontSize = e;
						k.style.visibility = c[37];
						k.innerHTML = f;
						for (f = a[15]; f < d.length; f++) l[f] = h(d[f]);
						return function(c) {
							for (var f = a[15]; f < l.length; f++) {
								var e = h(c + b[34] + d[f]),
									g = l[f];
								if (e.height !== g.height || e.width !== g.width) return !0
							}
							return !1
						}
					}
					function f() {
						var a = null,
							h = null,
							d = [];
						try {
							h = C[b[167]](c[79]), a = h[B[7]](b[255]) || h[B[7]](c[112])
						} catch (l) {}
						if (!a) return d;
						try {
							d.push(a[b[20]]())
						} catch (g) {}
						try {
							d.push(e(a, h))
						} catch (k) {}
						return d.join(b[56])
					}
					function e(h, d) {
						try {
							var f = c[76],
								l = b[240],
								g = h[c[43]]();
							h[c[33]](h[c[113]], g);
							var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
							h.bufferData(h[c[113]], k, h[c[24]]);
							g.k = a[19];
							g.l = a[19];
							var t = h[c[20]](),
								X = h[c[48]](h[b[267]]);
							h[c[63]](X, f);
							h[b[341]](X);
							var la = h[c[48]](h[c[149]]);
							return h[c[63]](la, l), h[b[341]](la), h[b[177]](t, X), h[b[177]](t, la), h[c[45]](t), h[b[309]](t), t.n = h[c[92]](t, b[205]), t.m = h[c[62]](t, c[29]), h[c[74]](t.o), h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]), h[J[0]](t.m, a[541], a[541]), h[b[139]](h[b[259]], a[15], g.l), M(d[b[149]]())
						} catch ($a) {
							return b[324]
						}
					}
					function g() {
						var h = C[b[167]](b[155]),
							d = [],
							f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
						if (!window[c[154]]) return d.join(b[0]);
						for (var l = a[15]; l < f.length; l++) try {
							C[b[258]].appendChild(h), h.style.color = f[l], d.push(f[l]), d.push(window[c[154]](h).getPropertyValue(c[36])), C[b[258]][b[307]](h)
						} catch (e) {
							d.push(b[349])
						}
						return d.join(b[54])
					}
					function k() {
						try {
							var h = C[b[167]](c[79]),
								d = h[B[7]](b[354]),
								f = c[105];
							d[c[169]] = b[235];
							d[b[145]] = b[333];
							d[c[169]] = b[202];
							d[b[219]] = c[10];
							d[c[11]](a[281], a[541], a[152], a[66]);
							d[b[219]] = c[170];
							d.fillText(f, a[16], a[56]);
							d[b[219]] = b[313];
							d.fillText(f, a[23], a[60]);
							return h[b[149]]()
						} catch (l) {
							return b[237]
						}
					}
					function m() {
						try {
							return window[b[355]] && n.h ? q() : r()
						} catch (a) {
							return b[31]
						}
					}
					function r() {
						if (!y[b[4]]) return b[0];
						var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
							d = [],
							f = {};
						d.push(p(y[b[4]], function(h) {
							f[h.name] = a[541];
							var d = p(h, function(a) {
								return [a.type, a.suffixes].join(b[144])
							}).join(b[34]);
							return [h.name, h.description, d].join(c[88])
						}, this).join(b[25]));
						d.push(p(h, function(a) {
							if (f[a]) return b[0];
							a = y[b[4]][a];
							if (!a) return b[0];
							var h = p(a, function(a) {
								return [a.type, a.suffixes].join(b[144])
							}).join(b[34]);
							return [a.name, a.description, h].join(c[88])
						}, this).join(b[56]));
						return d.join(b[56])
					}
					function q() {
						return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function(a) {
							try {
								return new window[b[355]](a), a
							} catch (h) {
								return null
							}
						}).join(b[56]) : b[0]
					}
					function p(a, b, h) {
						var c = [];
						if (null == a) return c;
						if (I && a.map === I) return a.map(b, h);
						E(a, function(a, d, f) {
							c[c.length] = b.call(h, a, d, f)
						});
						return c
					}
					function E(b, h) {
						if (null !== b) if (z && b.forEach === z) b.forEach(h, void 0);
						else if (b.length === +b.length) for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++);
						else for (c in b) if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
					}
					var z = Array.prototype.forEach,
						I = Array.prototype.map,
						n = {
							e: M,
							j: !0,
							i: !0,
							h: !0,
							b: !0,
							a: !0
						};
					typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
					this.get = function() {
						var h = [],
							l = [];
						if (Qa) {
							var e;
							try {
								e = !! window[b[339]]
							} catch (X) {
								e = !0
							}
							h.push(e);
							var p;
							try {
								p = !! window[c[38]]
							} catch (z) {
								p = !0
							}
							h.push(p);
							h.push( !! window[c[40]]);
							C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
							h.push(typeof window[c[78]]);
							h.push(y[b[193]]);
							h.push(y[c[155]]);
							if (e = n.i) try {
								var u = C[b[167]](c[79]);
								e = !(!u[B[7]] || !u[B[7]](b[354]))
							} catch (r) {
								e = !1
							}
							if (e) try {
								h.push(k()), n.b && h.push(f())
							} catch (E) {
								h.push(b[59])
							}
							h.push(g());
							n.a && l.push(d());
							l.push(y[c[110]]);
							l.push(y[b[151]]);
							l.push(window[b[257]][b[359]]);
							n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
							l.push((new Date)[b[128]]());
							l.push(y[b[122]]);
							l.push(m())
						}
						u = [];
						n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
						return u
					}
				}
				function M(h) {
					var c = a[88],
						d, f, e, g, k, m;
					d = h.length & a[19];
					f = h.length - d;
					e = c;
					c = a[21];
					g = a[375];
					for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
					k = a[15];
					switch (d) {
					case a[19]:
						k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
					case a[16]:
						k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
					case a[541]:
						k ^= h.charCodeAt(m) & a[299], k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k
					}
					e ^= h.length;
					e ^= e >>> a[58];
					e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
					e ^= e >>> a[50];
					e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
					e ^= e >>> a[58];
					h = e >>> a[15];
					d = [];
					d.push(h);
					try {
						for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++) try {
							var q = parseInt(B.charAt(z) + b[0]),
								p = q || q === a[15] ? p + q : p + a[541];
							E++
						} catch (n) {
							p += a[541], E++
						}
						E = E == a[15] ? a[541] : E;
						r = ba(p * a[541] / E, N);
						for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try {
							var v = parseInt(G.charAt(F) + b[0]);
							v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
						} catch (A) {
							u++, H += C
						}
						u = u == a[15] ? a[541] : u;
						D = D == a[15] ? a[541] : D;
						x = ba(H * a[541] / u - w * a[541] / D, T);
						d.push(ca(r, N, b[41]));
						d.push(ca(x, T, b[41]))
					} catch (y) {
						d = [], d.push(h), d.push(U(N, b[35]).join(b[0])), d.push(U(T, b[35]).join(b[0]))
					}
					return d.join(b[0])
				}
				function ba(h, c) {
					if (h < a[15] || h >= a[43]) throw Error(b[30]);
					for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++) e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
					return parseInt(d.join(b[0]))
				}
				function ca(a, c, d) {
					a = b[0] + a;
					if (a.length > c) throw Error(b[87]);
					if (a.length == c) return a;
					for (var e = [], f = a.length; f < c; f++) e.push(d);
					e.push(a);
					return e.join(b[0])
				}
				function U(b, c) {
					if (b <= a[15]) return [a[15]];
					for (var d = [], e = a[15]; e < b; e++) d.push(c);
					return d
				}
				function r(a) {
					return null == a || void 0 == a
				}
				function m(a, b, c) {
					this.f = a;
					this.c = b;
					this.g = r(c) ? !0 : c
				}
				function Ra(a) {
					if (r(a) || r(a.f) || r(a.c)) return !1;
					try {
						if (r(window[a.f])) return !1
					} catch (b) {
						return !1
					}
					return !0
				}
				function v(c, d) {
					if (r(c)) return b[0];
					for (var e = a[15]; e < c.length; e++) {
						var f = c[e];
						if (!r(f) && f.f == d) return f
					}
				}
				function da() {
					var h;
					a: {
						if (!r(q)) for (h = a[15]; h < q.length; h++) {
							var d = q[h];
							if (d.g && !Ra(d)) {
								h = d;
								break a
							}
						}
						h = null
					}
					var e;
					if (r(h)) {
						try {
							e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
						} catch (f) {
							e = !1
						}
						if (e) {
							var g;
							try {
								g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
							} catch (k) {
								g = !1
							}
							if (g) {
								var m;
								try {
									m = window.decodeURI(b[208]) === b[24]
								} catch (C) {
									m = !1
								}
								if (m) {
									var x;
									try {
										x = window.decodeURIComponent(b[209]) === b[28]
									} catch (F) {
										x = !1
									}
									if (x) {
										var p;
										try {
											p = window.encodeURI(b[24]) === b[208]
										} catch (E) {
											p = !1
										}
										if (p) {
											var z;
											try {
												z = window.encodeURIComponent(b[28]) === b[209]
											} catch (I) {
												z = !1
											}
											if (z) {
												var n;
												try {
													n = window.escape(b[28]) === b[209]
												} catch (A) {
													n = !1
												}
												if (n) {
													var y;
													try {
														y = window.unescape(b[209]) === b[28]
													} catch (G) {
														y = !1
													}
													if (y) {
														var w;
														try {
															w = window.eval(b[304]) === a[273]
														} catch (D) {
															w = !1
														}
														e = w ? null : v(q, b[171])
													} else e = v(q, c[172])
												} else e = v(q, b[342])
											} else e = v(q, c[30])
										} else e = v(q, c[16])
									} else e = v(q, B[2])
								} else e = v(q, b[320])
							} else e = v(q, c[58])
						} else e = v(q, c[89])
					} else e = h;
					return e
				}
				function Sa() {
					var a = da();
					if (!r(a)) return a.c;
					try {
						a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
					} catch (c) {
						a = null
					}
					if (!r(a)) return a.c;
					try {
						a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
					} catch (d) {
						a = null
					}
					return r(a) ? null : a.c
				}
				function Ba(c) {
					for (var d = [], e = a[15]; e < c; e++) {
						var f = Math.random() * Ta,
							f = Math.floor(f);
						d.push(ea.charAt(f))
					}
					return d.join(b[0])
				}
				function P(h) {
					for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
						var f = d[e].indexOf(b[57]);
						if (f >= a[15]) {
							var g = d[e].substring(f + a[541], d[e].length);
							if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g)
						}
					}
					return null
				}
				function Ca(h) {
					var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]],
						e = b[0];
					if (null == h || void 0 == h) return h;
					if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
						for (var e = e + b[142], f = a[15]; f < d.length; f++) if (h.hasOwnProperty(d[f])) {
							var g = b[29] + d[f] + b[262],
								k;
							k = b[0] + h[d[f]];
							k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
							e += g + k + b[191]
						}
						e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
						return e += b[143]
					}
					return null
				}
				function oa(a, d, e, f) {
					var g = [];
					g.push(a + b[57] + encodeURIComponent(d));
					e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
					g.push(c[91]);
					g.push(b[302]);
					g.push(b[216]);
					null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
					C[b[207]] = g.join(b[0])
				}
				function Da(a) {
					window[pa] = a
				}
				function Ea(a) {
					window[qa] = a
				}
				function Fa(c, d) {
					for (var e = [], f = a[15]; f < d; f++) e.push(c);
					return e.join(b[0])
				}
				function Ga(a, c) {
					var d = P(a);
					null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
				}
				function ra() {
					var a = P(V);
					if (null == a || void 0 == a || a == b[0]) a = window[qa];
					return a
				}
				function Ua() {
					var a = ra();
					if (null == a || void 0 == a || a == b[0]) return !1;
					try {
						return (a = parseInt(a)) && a >= fa ? !0 : !1
					} catch (c) {
						return !1
					}
				}
				function ga(c) {
					if (null == c || void 0 == c || c == b[0]) return null;
					c = c.split(b[54]);
					return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
				}
				function Q() {
					var a = P(S);
					if (null == a || void 0 == a || a == b[0]) a = window[pa];
					return a
				}
				function Va() {
					var c = Q();
					if (null == c || void 0 == c || c == b[0]) return a[15];
					c = ga(c);
					return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
				}
				function Ha(d, e) {
					var f = new window[B[0]];
					f[b[21]](f[b[179]]() - a[326]);
					window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
				}
				function Ia() {
					if (!(null == K || void 0 == K || K.length <= a[15])) for (var c = a[15]; c < K.length; c++) {
						var d = K[c];
						(null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
					}
				}
				function ua() {
					Ia();
					window[qa] = null;
					window[pa] = null;
					var h = !0,
						t = {
							v: b[227]
						},
						l = Sa();
					l && (t[c[18]] = l);
					l = null;
					t[b[108]] = Wa;
					var m = (new window[B[0]])[b[179]]() + sa,
						r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
					t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
					try {
						var q = (new Pa({
							b: Xa,
							a: Ya
						})).get();
						null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
					} catch (C) {
						t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1
					}
					try {
						var v = l = Ca(t),
							t = Za;
						if (null == t || void 0 == t) throw Error(b[120]);
						if (null == v || void 0 == v) v = b[0];
						var q = v,
							y;
						y = null == v ? e([]) : e(ma(v));
						var A = ma(q + y),
							p = ma(t);
						null == A && (A = []);
						y = [];
						for (var E = a[15]; E < va; E++) {
							var z = Math.random() * a[301],
								z = Math.floor(z);
							y[E] = x(z)
						}
						var p = g(p),
							p = na(p, g(y)),
							E = p = g(p),
							I;
						if (null == A || void 0 == A || A.length == a[15]) I = za(F);
						else {
							var n = A.length,
								J = a[15],
								J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
								z = [];
							Z(A, a[15], z, a[15], n);
							for (var K = a[15]; K < J; K++) z[n + K] = a[15];
							Z(Aa(n), a[15], z, n + J, ha);
							I = z
						}
						n = I;
						if (null == n || n.length % F != a[15]) throw Error(b[130]);
						I = [];
						for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
							I[D] = [];
							for (var H = a[15]; H < F; H++) I[D][H] = n[G++]
						}
						G = [];
						Z(y, a[15], G, a[15], va);
						for (var u = I.length, L = a[15]; L < u; L++) {
							var O, M;
							var N = I[L];
							if (null == N) M = null;
							else {
								for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++) w.push(Oa(N[P], T++));
								M = w
							}
							var Q;
							w = M;
							if (null == w) Q = null;
							else {
								for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++) D.push(Y(w[wa], aa--));
								Q = D
							}
							var ca = d(Q, a[127]);
							O = d(ca, a[36]);
							var xa = na(O, p),
								ia;
							w = xa;
							D = E;
							if (null == w) ia = null;
							else if (null == D) ia = w;
							else {
								for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++) H[W] = x(w[W] + D[W % da]);
								ia = H
							}
							var xa = na(ia, E),
								ja = f(xa),
								ja = f(ja);
							Z(ja, a[15], G, L * F + va, F);
							E = ja
						}
						var ka;
						if (null == G || void 0 == G) ka = null;
						else if (G.length == a[15]) ka = b[0];
						else {
							var ya = a[19];
							try {
								for (var u = [], R = a[15]; R < G.length;) if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya;
								else {
									u.push(k(G, R, G.length - R));
									break
								}
								ka = u.join(b[0])
							} catch (ra) {
								throw Error(b[111])
							}
						}
						l = ka
					} catch (ga) {
						l = Ca({
							ec: b[43],
							em: ga.message
						}), h = !1
					}
					l = l + b[54] + m;
					oa(S, l, h, r);
					Ga(S, l);
					Da(l);
					oa(V, fa, h, r);
					Ga(V, fa);
					Ea(fa);
					window[b[124]] && window[b[124]](ua, ta)
				}
				m.prototype = {
					toString: function() {
						return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
					}
				};
				var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
					Qa = da() ? !1 : !0,
					Wa = window && window[c[65]] && window[c[65]].host || b[353],
					C = window[b[330]],
					y = window[c[6]],
					N = a[16],
					T = a[16],
					aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
					La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
					Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
					F = a[158],
					L = a[158],
					ha = a[23],
					va = a[23],
					d = function(b, c) {
						if (null == b) return null;
						for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++) e.push(Y(b[g], d++));
						return e
					},
					Za = b[345],
					S = b[299],
					V = c[100],
					fa = a[91],
					ea = b[275],
					Ta = ea.length,
					sa = a[444],
					ta = a[396],
					Ya = !1,
					Xa = !1,
					O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
					A = c[56],
					A = function(d, e) {
						if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
						e = e.split(b[56]);
						for (var f = a[15]; f < e.length; f++) {
							var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
							if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f]
						}
						return null
					}(O, A),
					pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
					qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
					K = function(c) {
						var d = [];
						if (!c) return d;
						c = c.split(b[38]);
						for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
						return d
					}(O);
				K.push(null);
				K.push(b[38] + O);
				(function(d) {
					for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
						var k = f[g].indexOf(b[57]);
						k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
					}
					return e
				})(S) > a[541] && Ia();
				(function() {
					var a = Q();
					if (null == a || void 0 == a || a == b[0]) a = !1;
					else {
						var c;
						if (c = Ua()) a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
						a = c
					}
					return a
				})() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
			})()
		})()
	})()
})();
(function() {})();
(function() {
	var byD0x;
	var ut1x = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
	var cBW5b = 0;
	var byX0x = 0;
	var bzb0x = 1;
	var bzf0x = 0;
	var bnT7M = "";
	var bzj0x = "";
	var bzn0x = "";
	var bbg4k = "";
	var bbd4h = "";
	var bnU7N = "";
	var bzC0x = 0;
	var bzF0x = "";
	var Kx6r = "";
	var GI5N = 0;
	var bnW7P = ntes_get_domain();
	var bnX7Q = null;
	var cFF6z = "//analytics.163.com";
	var cBP5U = function() {};

	function is_spider() {
		return /baiduspider/gi.test(window.navigator.userAgent)
	}
	function ntes_get_domain() {
		var f = document.domain;
		var d = f.split(".");
		var c = d.length;
		var e = /^\d+$/g;
		if (e.test(d[c - 1])) {
			return f
		}
		if (d.length < 3) {
			return "." + f
		}
		var g = ["com", "net", "org", "gov", "co"];
		var b, a = false;
		for (b = 0; b < g.length; b++) {
			if (d[c - 2] == g[b]) {
				a = true
			}
		}
		if (!a) {
			return "." + d[c - 2] + "." + d[c - 1]
		} else {
			return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
		}
	}
	function ntes_set_cookie_long(a, c) {
		var b = new Date;
		b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
		document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bnW7P
	}
	function ntes_set_cookie(a, c) {
		var b = new Date;
		b.setTime(b.getTime() + 0);
		document.cookie = a + "=" + c + "; path=/; domain=" + bnW7P
	}
	function ntes_set_cookie_new(b, d, a) {
		if (!a || a == "") {
			a = 1e3 * 60 * 60 * 24 * 365 * 1
		}
		var c = new Date;
		c.setTime(c.getTime() + a);
		document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bnW7P
	}
	function ntes_get_cookie(c) {
		var a = document.cookie;
		var d = c + "=";
		var g = a.length;
		var b = 0;
		while (b < g) {
			var e = b + d.length;
			if (a.substring(b, e) == d) {
				var f = a.indexOf(";", e);
				if (f == -1) {
					f = g
				}
				return unescape(a.substring(e, f))
			}
			b = a.indexOf(" ", b) + 1;
			if (b == 0) {
				break
			}
		}
		return -1
	}
	function ntes_get_flashver() {
		var f = "",
			n = navigator;
		if (n.plugins && n.plugins.length) {
			for (var ii = 0; ii < n.plugins.length; ii++) {
				if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
					f = n.plugins[ii].description.split("Shockwave Flash")[1];
					break
				}
			}
		} else {
			if (window.ActiveXObject) {
				for (var ii = 10; ii >= 2; ii--) {
					try {
						var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
						if (fl) {
							f = ii + ".0";
							break
						}
					} catch (e) {}
				}
			}
		}
		return f
	}
	var cBO5T = 0;
	var OD9u = 8;

	function ntes_hex_md5(a) {
		return binl2hex(ntes_core_md5(str2binl(a), a.length * OD9u))
	}
	function ntes_core_md5(p, k) {
		p[k >> 5] |= 128 << k % 32;
		p[(k + 64 >>> 9 << 4) + 14] = k;
		var o = 1732584193;
		var n = -271733879;
		var m = -1732584194;
		var l = 271733878;
		for (var g = 0; g < p.length; g += 16) {
			var j = o;
			var h = n;
			var f = m;
			var e = l;
			o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
			l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
			m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
			n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
			o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
			l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
			m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
			n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
			o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
			l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
			m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
			n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
			o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
			l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
			m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
			n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
			o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
			l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
			m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
			n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
			o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
			l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
			m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
			n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
			o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
			l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
			m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
			n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
			o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
			l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
			m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
			n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
			o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
			l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
			m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
			n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
			o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
			l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
			m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
			n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
			o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
			l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
			m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
			n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
			o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
			l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
			m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
			n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
			o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
			l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
			m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
			n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
			o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
			l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
			m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
			n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
			o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
			l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
			m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
			n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
			o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
			l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
			m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
			n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
			o = safe_add(o, j);
			n = safe_add(n, h);
			m = safe_add(m, f);
			l = safe_add(l, e)
		}
		return Array(o, n, m, l)
	}
	function md5_cmn(h, e, d, c, g, f) {
		return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
	}
	function md5_ff(g, f, k, j, e, i, h) {
		return md5_cmn(f & k | ~f & j, g, f, e, i, h)
	}
	function md5_gg(g, f, k, j, e, i, h) {
		return md5_cmn(f & j | k & ~j, g, f, e, i, h)
	}
	function md5_hh(g, f, k, j, e, i, h) {
		return md5_cmn(f ^ k ^ j, g, f, e, i, h)
	}
	function md5_ii(g, f, k, j, e, i, h) {
		return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
	}
	function safe_add(a, d) {
		var c = (a & 65535) + (d & 65535);
		var b = (a >> 16) + (d >> 16) + (c >> 16);
		return b << 16 | c & 65535
	}
	function bit_rol(a, b) {
		return a << b | a >>> 32 - b
	}
	function str2binl(d) {
		var c = new Array;
		var a = (1 << OD9u) - 1;
		for (var b = 0; b < d.length * OD9u; b += OD9u) {
			c[b >> 5] |= (d.charCodeAt(b / OD9u) & a) << b % 32
		}
		return c
	}
	function binl2hex(c) {
		var b = cBO5T ? "0123456789ABCDEF" : "0123456789abcdef";
		var d = "";
		for (var a = 0; a < c.length * 4; a++) {
			d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
		}
		return d
	}
	function str_to_ent(e) {
		var a = "";
		var d;
		for (d = 0; d < e.length; d++) {
			var f = e.charCodeAt(d);
			var b = "";
			if (f > 255) {
				while (f >= 1) {
					b = "0123456789".charAt(f % 10) + b;
					f = f / 10
				}
				if (b == "") {
					b = "0"
				}
				b = "#" + b;
				b = "&" + b;
				b = b + ";";
				a += b
			} else {
				a += e.charAt(d)
			}
		}
		return a
	}
	function ntes_get_navigation_info() {
		bbg4k = "-";
		bnU7N = "-";
		bbd4h = "-";
		var c = window.self,
			b = window.screen,
			a = window.navigator;
		if (c.screen) {
			bbg4k = b.width + "x" + b.height;
			bnU7N = b.colorDepth + "-bit"
		} else {
			if (c.java) {
				var e = java.awt.Toolkit.getDefaultToolkit();
				var f = e.getScreenSize();
				bbg4k = f.width + "x" + f.height
			}
		}
		if (a.language) {
			bbd4h = a.language.toLowerCase()
		} else {
			if (a.browserLanguage) {
				bbd4h = a.browserLanguage.toLowerCase()
			}
		}
		var g = new Date(document.lastModified);
		bzC0x = g.getTime() / 1e3
	}
	function fetch_visitor_hash() {
		var c = new Date;
		var b = document.body.clientWidth + ":" + document.body.clientHeight;
		var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
		return ntes_hex_md5(a)
	}
	function cFG6A(c, b, f) {
		var e = c + "_" + +(new Date) + parseInt(Math.random() * 100),
			a, d = f || cBP5U;
		a = window[e] = new Image;
		a.onload = function() {
			window[e] = null;
			d()
		};
		a.onerror = function() {
			window[e] = null;
			d()
		};
		a.src = b;
		a = null
	}
	function neteaseTracker(l, a, m, k) {
		if (is_spider()) {
			return
		}
		var e = k || byD0x;
		bnT7M = escape(a || document.location);
		bzj0x = escape(m || document.title);
		bzn0x = l === true ? "" : escape(l || document.referrer);
		bzF0x = ntes_get_flashver();
		var b = (new Date).getTime();
		if (bnX7Q == null) {
			document.cookie = "__ntes__test__cookies=" + b;
			bnX7Q = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
			document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
		}
		if (e == "undefined" || !e) {
			return
		}
		if (bnT7M.indexOf("http") != 0) {
			return
		}
		var h = ntes_get_cookie("_ntes_nnid");
		if (h == -1) {
			if (bnX7Q) {
				ut1x = fetch_visitor_hash();
				byX0x = 1;
				ntes_set_cookie_long("_ntes_nnid", ut1x + "," + (new Date).getTime());
				ntes_set_cookie_long("_ntes_nuid", ut1x)
			}
		} else {
			var o = h.indexOf(",");
			var p = h.indexOf("|");
			var f = false;
			if (p == -1) {
				p = h.length
			}
			ut1x = h.substr(0, o);
			GI5N = h.substr(o + 1, p - o - 1);
			if (GI5N == 0) {
				GI5N = (new Date).getTime();
				f = true
			}
			if (!ut1x) {
				ut1x = fetch_visitor_hash();
				f = true
			}
			if (f) {
				ntes_set_cookie_long("_ntes_nnid", ut1x + "," + GI5N);
				ntes_set_cookie_long("_ntes_nuid", ut1x)
			}
			if (GI5N != 0 && b - GI5N > 365 * 86400 * 1e3) {
				GI5N = 0;
				ntes_set_cookie_long("_ntes_nnid", ut1x + "," + (new Date).getTime());
				ntes_set_cookie_long("_ntes_nuid", ut1x)
			}
		}
		function c(q, i) {
			var s = ntes_get_cookie(q),
				r = ntes_get_cookie(i);
			return s == -1 ? r == -1 ? "" : r : s
		}
		Kx6r = c("P_INFO", "P_OINFO");
		Kx6r = Kx6r ? Kx6r.substr(0, Kx6r.indexOf("|")) : "";
		bzf0x = c("S_INFO", "S_OINFO") ? 1 : 0;
		ntes_get_navigation_info();
		var n = ["_nacc=", e, "&_nvid=", ut1x, "&_nvtm=", cBW5b, "&_nvsf=", bzb0x, "&_nvfi=", byX0x, "&_nlag=", bbd4h, "&_nlmf=", bzC0x, "&_nres=", bbg4k, "&_nscd=", bnU7N, "&_nstm=", bzf0x, "&_nurl=", bnT7M, "&_ntit=", bzj0x, "&_nref=", bzn0x, "&_nfla=", bzF0x, "&_nssn=", Kx6r, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
		bzb0x = 0;
		neteaseTracker.callback = null
	}
	byD0x = "iad";
	neteaseTracker()
})();
(function() {})();
var CryptoJS = CryptoJS ||
function(u, p) {
	var d = {},
		l = d.lib = {},
		s = function() {},
		t = l.Base = {
			extend: function(a) {
				s.prototype = this;
				var c = new s;
				a && c.mixIn(a);
				c.hasOwnProperty("init") || (c.init = function() {
					c.$super.init.apply(this, arguments)
				});
				c.init.prototype = c;
				c.$super = this;
				return c
			},
			create: function() {
				var a = this.extend();
				a.init.apply(a, arguments);
				return a
			},
			init: function() {},
			mixIn: function(a) {
				for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
				a.hasOwnProperty("toString") && (this.toString = a.toString)
			},
			clone: function() {
				return this.init.prototype.extend(this)
			}
		},
		r = l.WordArray = t.extend({
			init: function(a, c) {
				a = this.words = a || [];
				this.sigBytes = c != p ? c : 4 * a.length
			},
			toString: function(a) {
				return (a || v).stringify(this)
			},
			concat: function(a) {
				var c = this.words,
					e = a.words,
					j = this.sigBytes;
				a = a.sigBytes;
				this.clamp();
				if (j % 4) for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
				else if (65535 < e.length) for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
				else c.push.apply(c, e);
				this.sigBytes += a;
				return this
			},
			clamp: function() {
				var a = this.words,
					c = this.sigBytes;
				a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
				a.length = u.ceil(c / 4)
			},
			clone: function() {
				var a = t.clone.call(this);
				a.words = this.words.slice(0);
				return a
			},
			random: function(a) {
				for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
				return new r.init(c, a)
			}
		}),
		w = d.enc = {},
		v = w.Hex = {
			stringify: function(a) {
				var c = a.words;
				a = a.sigBytes;
				for (var e = [], j = 0; j < a; j++) {
					var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
					e.push((k >>> 4).toString(16));
					e.push((k & 15).toString(16))
				}
				return e.join("")
			},
			parse: function(a) {
				for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
				return new r.init(e, c / 2)
			}
		},
		b = w.Latin1 = {
			stringify: function(a) {
				var c = a.words;
				a = a.sigBytes;
				for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
				return e.join("")
			},
			parse: function(a) {
				for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
				return new r.init(e, c)
			}
		},
		x = w.Utf8 = {
			stringify: function(a) {
				try {
					return decodeURIComponent(escape(b.stringify(a)))
				} catch (c) {
					throw Error("Malformed UTF-8 data")
				}
			},
			parse: function(a) {
				return b.parse(unescape(encodeURIComponent(a)))
			}
		},
		q = l.BufferedBlockAlgorithm = t.extend({
			reset: function() {
				this.j4n = new r.init;
				this.bAp1x = 0
			},
			baH3x: function(a) {
				"string" == typeof a && (a = x.parse(a));
				this.j4n.concat(a);
				this.bAp1x += a.sigBytes
			},
			BI3x: function(a) {
				var c = this.j4n,
					e = c.words,
					j = c.sigBytes,
					k = this.blockSize,
					b = j / (4 * k),
					b = a ? u.ceil(b) : u.max((b | 0) - this.bAn1x, 0);
				a = b * k;
				j = u.min(4 * a, j);
				if (a) {
					for (var q = 0; q < a; q += k) this.bAr1x(e, q);
					q = e.splice(0, a);
					c.sigBytes -= j
				}
				return new r.init(q, j)
			},
			clone: function() {
				var a = t.clone.call(this);
				a.j4n = this.j4n.clone();
				return a
			},
			bAn1x: 0
		});
	l.Hasher = q.extend({
		cfg: t.extend(),
		init: function(a) {
			this.cfg = this.cfg.extend(a);
			this.reset()
		},
		reset: function() {
			q.reset.call(this);
			this.bog7Z()
		},
		update: function(a) {
			this.baH3x(a);
			this.BI3x();
			return this
		},
		finalize: function(a) {
			a && this.baH3x(a);
			return this.baw3x()
		},
		blockSize: 16,
		bof7Y: function(a) {
			return function(b, e) {
				return (new a.init(e)).finalize(b)
			}
		},
		cBH5M: function(a) {
			return function(b, e) {
				return (new n.HMAC.init(a, e)).finalize(b)
			}
		}
	});
	var n = d.algo = {};
	return d
}(Math);
(function() {
	var u = CryptoJS,
		p = u.lib.WordArray;
	u.enc.Base64 = {
		stringify: function(d) {
			var l = d.words,
				p = d.sigBytes,
				t = this.bz4D;
			d.clamp();
			d = [];
			for (var r = 0; r < p; r += 3) for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
			if (l = t.charAt(64)) for (; d.length % 4;) d.push(l);
			return d.join("")
		},
		parse: function(d) {
			var l = d.length,
				s = this.bz4D,
				t = s.charAt(64);
			t && (t = d.indexOf(t), -1 != t && (l = t));
			for (var t = [], r = 0, w = 0; w < l; w++) if (w % 4) {
				var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
					b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
				t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
				r++
			}
			return p.create(t, r)
		},
		bz4D: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
	}
})();
(function(u) {
	function p(b, n, a, c, e, j, k) {
		b = b + (n & a | ~n & c) + e + k;
		return (b << j | b >>> 32 - j) + n
	}
	function d(b, n, a, c, e, j, k) {
		b = b + (n & c | a & ~c) + e + k;
		return (b << j | b >>> 32 - j) + n
	}
	function l(b, n, a, c, e, j, k) {
		b = b + (n ^ a ^ c) + e + k;
		return (b << j | b >>> 32 - j) + n
	}
	function s(b, n, a, c, e, j, k) {
		b = b + (a ^ (n | ~c)) + e + k;
		return (b << j | b >>> 32 - j) + n
	}
	for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
	r = r.MD5 = v.extend({
		bog7Z: function() {
			this.dR5W = new w.init([1732584193, 4023233417, 2562383102, 271733878])
		},
		bAr1x: function(q, n) {
			for (var a = 0; 16 > a; a++) {
				var c = n + a,
					e = q[c];
				q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
			}
			var a = this.dR5W.words,
				c = q[n + 0],
				e = q[n + 1],
				j = q[n + 2],
				k = q[n + 3],
				z = q[n + 4],
				r = q[n + 5],
				t = q[n + 6],
				w = q[n + 7],
				v = q[n + 8],
				A = q[n + 9],
				B = q[n + 10],
				C = q[n + 11],
				u = q[n + 12],
				D = q[n + 13],
				E = q[n + 14],
				x = q[n + 15],
				f = a[0],
				m = a[1],
				g = a[2],
				h = a[3],
				f = p(f, m, g, h, c, 7, b[0]),
				h = p(h, f, m, g, e, 12, b[1]),
				g = p(g, h, f, m, j, 17, b[2]),
				m = p(m, g, h, f, k, 22, b[3]),
				f = p(f, m, g, h, z, 7, b[4]),
				h = p(h, f, m, g, r, 12, b[5]),
				g = p(g, h, f, m, t, 17, b[6]),
				m = p(m, g, h, f, w, 22, b[7]),
				f = p(f, m, g, h, v, 7, b[8]),
				h = p(h, f, m, g, A, 12, b[9]),
				g = p(g, h, f, m, B, 17, b[10]),
				m = p(m, g, h, f, C, 22, b[11]),
				f = p(f, m, g, h, u, 7, b[12]),
				h = p(h, f, m, g, D, 12, b[13]),
				g = p(g, h, f, m, E, 17, b[14]),
				m = p(m, g, h, f, x, 22, b[15]),
				f = d(f, m, g, h, e, 5, b[16]),
				h = d(h, f, m, g, t, 9, b[17]),
				g = d(g, h, f, m, C, 14, b[18]),
				m = d(m, g, h, f, c, 20, b[19]),
				f = d(f, m, g, h, r, 5, b[20]),
				h = d(h, f, m, g, B, 9, b[21]),
				g = d(g, h, f, m, x, 14, b[22]),
				m = d(m, g, h, f, z, 20, b[23]),
				f = d(f, m, g, h, A, 5, b[24]),
				h = d(h, f, m, g, E, 9, b[25]),
				g = d(g, h, f, m, k, 14, b[26]),
				m = d(m, g, h, f, v, 20, b[27]),
				f = d(f, m, g, h, D, 5, b[28]),
				h = d(h, f, m, g, j, 9, b[29]),
				g = d(g, h, f, m, w, 14, b[30]),
				m = d(m, g, h, f, u, 20, b[31]),
				f = l(f, m, g, h, r, 4, b[32]),
				h = l(h, f, m, g, v, 11, b[33]),
				g = l(g, h, f, m, C, 16, b[34]),
				m = l(m, g, h, f, E, 23, b[35]),
				f = l(f, m, g, h, e, 4, b[36]),
				h = l(h, f, m, g, z, 11, b[37]),
				g = l(g, h, f, m, w, 16, b[38]),
				m = l(m, g, h, f, B, 23, b[39]),
				f = l(f, m, g, h, D, 4, b[40]),
				h = l(h, f, m, g, c, 11, b[41]),
				g = l(g, h, f, m, k, 16, b[42]),
				m = l(m, g, h, f, t, 23, b[43]),
				f = l(f, m, g, h, A, 4, b[44]),
				h = l(h, f, m, g, u, 11, b[45]),
				g = l(g, h, f, m, x, 16, b[46]),
				m = l(m, g, h, f, j, 23, b[47]),
				f = s(f, m, g, h, c, 6, b[48]),
				h = s(h, f, m, g, w, 10, b[49]),
				g = s(g, h, f, m, E, 15, b[50]),
				m = s(m, g, h, f, r, 21, b[51]),
				f = s(f, m, g, h, u, 6, b[52]),
				h = s(h, f, m, g, k, 10, b[53]),
				g = s(g, h, f, m, B, 15, b[54]),
				m = s(m, g, h, f, e, 21, b[55]),
				f = s(f, m, g, h, v, 6, b[56]),
				h = s(h, f, m, g, x, 10, b[57]),
				g = s(g, h, f, m, t, 15, b[58]),
				m = s(m, g, h, f, D, 21, b[59]),
				f = s(f, m, g, h, z, 6, b[60]),
				h = s(h, f, m, g, C, 10, b[61]),
				g = s(g, h, f, m, j, 15, b[62]),
				m = s(m, g, h, f, A, 21, b[63]);
			a[0] = a[0] + f | 0;
			a[1] = a[1] + m | 0;
			a[2] = a[2] + g | 0;
			a[3] = a[3] + h | 0
		},
		baw3x: function() {
			var b = this.j4n,
				n = b.words,
				a = 8 * this.bAp1x,
				c = 8 * b.sigBytes;
			n[c >>> 5] |= 128 << 24 - c % 32;
			var e = u.floor(a / 4294967296);
			n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
			n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
			b.sigBytes = 4 * (n.length + 1);
			this.BI3x();
			b = this.dR5W;
			n = b.words;
			for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
			return b
		},
		clone: function() {
			var b = v.clone.call(this);
			b.dR5W = this.dR5W.clone();
			return b
		}
	});
	t.MD5 = v.bof7Y(r);
	t.HmacMD5 = v.cBH5M(r)
})(Math);
(function() {
	var u = CryptoJS,
		p = u.lib,
		d = p.Base,
		l = p.WordArray,
		p = u.algo,
		s = p.EvpKDF = d.extend({
			cfg: d.extend({
				keySize: 4,
				hasher: p.MD5,
				iterations: 1
			}),
			init: function(d) {
				this.cfg = this.cfg.extend(d)
			},
			compute: function(d, r) {
				for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
					n && s.update(n);
					var n = s.update(d).finalize(r);
					s.reset();
					for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
					b.concat(n)
				}
				b.sigBytes = 4 * q;
				return b
			}
		});
	u.EvpKDF = function(d, l, p) {
		return s.create(p).compute(d, l)
	}
})();
CryptoJS.lib.Cipher ||
function(u) {
	var p = CryptoJS,
		d = p.lib,
		l = d.Base,
		s = d.WordArray,
		t = d.BufferedBlockAlgorithm,
		r = p.enc.Base64,
		w = p.algo.EvpKDF,
		v = d.Cipher = t.extend({
			cfg: l.extend(),
			createEncryptor: function(e, a) {
				return this.create(this.boh7a, e, a)
			},
			createDecryptor: function(e, a) {
				return this.create(this.cBy5D, e, a)
			},
			init: function(e, a, b) {
				this.cfg = this.cfg.extend(b);
				this.bAO1x = e;
				this.K4O = a;
				this.reset()
			},
			reset: function() {
				t.reset.call(this);
				this.bog7Z()
			},
			process: function(e) {
				this.baH3x(e);
				return this.BI3x()
			},
			finalize: function(e) {
				e && this.baH3x(e);
				return this.baw3x()
			},
			keySize: 4,
			ivSize: 4,
			boh7a: 1,
			cBy5D: 2,
			bof7Y: function(e) {
				return {
					encrypt: function(b, k, d) {
						return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
					},
					decrypt: function(b, k, d) {
						return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
					}
				}
			}
		});
	d.StreamCipher = v.extend({
		baw3x: function() {
			return this.BI3x(!0)
		},
		blockSize: 1
	});
	var b = p.mode = {},
		x = function(e, a, b) {
			var c = this.bAV1x;
			c ? this.bAV1x = u : c = this.bAW1x;
			for (var d = 0; d < b; d++) e[a + d] ^= c[d]
		},
		q = (d.BlockCipherMode = l.extend({
			createEncryptor: function(e, a) {
				return this.Encryptor.create(e, a)
			},
			createDecryptor: function(e, a) {
				return this.Decryptor.create(e, a)
			},
			init: function(e, a) {
				this.bAX1x = e;
				this.bAV1x = a
			}
		})).extend();
	q.Encryptor = q.extend({
		processBlock: function(e, a) {
			var b = this.bAX1x,
				c = b.blockSize;
			x.call(this, e, a, c);
			b.encryptBlock(e, a);
			this.bAW1x = e.slice(a, a + c)
		}
	});
	q.Decryptor = q.extend({
		processBlock: function(e, a) {
			var b = this.bAX1x,
				c = b.blockSize,
				d = e.slice(a, a + c);
			b.decryptBlock(e, a);
			x.call(this, e, a, c);
			this.bAW1x = d
		}
	});
	b = b.CBC = q;
	q = (p.pad = {}).Pkcs7 = {
		pad: function(a, b) {
			for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
			c = s.create(l, c);
			a.concat(c)
		},
		unpad: function(a) {
			a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
		}
	};
	d.BlockCipher = v.extend({
		cfg: v.cfg.extend({
			mode: b,
			padding: q
		}),
		reset: function() {
			v.reset.call(this);
			var a = this.cfg,
				b = a.iv,
				a = a.mode;
			if (this.bAO1x == this.boh7a) var c = a.createEncryptor;
			else c = a.createDecryptor, this.bAn1x = 1;
			this.fk6e = c.call(a, this, b && b.words)
		},
		bAr1x: function(a, b) {
			this.fk6e.processBlock(a, b)
		},
		baw3x: function() {
			var a = this.cfg.padding;
			if (this.bAO1x == this.boh7a) {
				a.pad(this.j4n, this.blockSize);
				var b = this.BI3x(!0)
			} else b = this.BI3x(!0), a.unpad(b);
			return b
		},
		blockSize: 4
	});
	var n = d.CipherParams = l.extend({
		init: function(a) {
			this.mixIn(a)
		},
		toString: function(a) {
			return (a || this.formatter).stringify(this)
		}
	}),
		b = (p.format = {}).OpenSSL = {
			stringify: function(a) {
				var b = a.ciphertext;
				a = a.salt;
				return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
			},
			parse: function(a) {
				a = r.parse(a);
				var b = a.words;
				if (1398893684 == b[0] && 1701076831 == b[1]) {
					var c = s.create(b.slice(2, 4));
					b.splice(0, 4);
					a.sigBytes -= 16
				}
				return n.create({
					ciphertext: a,
					salt: c
				})
			}
		},
		a = d.SerializableCipher = l.extend({
			cfg: l.extend({
				format: b
			}),
			encrypt: function(a, b, c, d) {
				d = this.cfg.extend(d);
				var l = a.createEncryptor(c, d);
				b = l.finalize(b);
				l = l.cfg;
				return n.create({
					ciphertext: b,
					key: c,
					iv: l.iv,
					algorithm: a,
					mode: l.mode,
					padding: l.padding,
					blockSize: a.blockSize,
					formatter: d.format
				})
			},
			decrypt: function(a, b, c, d) {
				d = this.cfg.extend(d);
				b = this.beP5U(b, d.format);
				return a.createDecryptor(c, d).finalize(b.ciphertext)
			},
			beP5U: function(a, b) {
				return "string" == typeof a ? b.parse(a, this) : a
			}
		}),
		p = (p.kdf = {}).OpenSSL = {
			execute: function(a, b, c, d) {
				d || (d = s.random(8));
				a = w.create({
					keySize: b + c
				}).compute(a, d);
				c = s.create(a.words.slice(b), 4 * c);
				a.sigBytes = 4 * b;
				return n.create({
					key: a,
					iv: c,
					salt: d
				})
			}
		},
		c = d.PasswordBasedCipher = a.extend({
			cfg: a.cfg.extend({
				kdf: p
			}),
			encrypt: function(b, c, d, l) {
				l = this.cfg.extend(l);
				d = l.kdf.execute(d, b.keySize, b.ivSize);
				l.iv = d.iv;
				b = a.encrypt.call(this, b, c, d.key, l);
				b.mixIn(d);
				return b
			},
			decrypt: function(b, c, d, l) {
				l = this.cfg.extend(l);
				c = this.beP5U(c, l.format);
				d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
				l.iv = d.iv;
				return a.decrypt.call(this, b, c, d.key, l)
			}
		})
}();
(function() {
	for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
	for (var e = 0, j = 0, c = 0; 256 > c; c++) {
		var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
			k = k >>> 8 ^ k & 255 ^ 99;
		l[e] = k;
		s[k] = e;
		var z = a[e],
			F = a[z],
			G = a[F],
			y = 257 * a[k] ^ 16843008 * k;
		t[e] = y << 24 | y >>> 8;
		r[e] = y << 16 | y >>> 16;
		w[e] = y << 8 | y >>> 24;
		v[e] = y;
		y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
		b[k] = y << 24 | y >>> 8;
		x[k] = y << 16 | y >>> 16;
		q[k] = y << 8 | y >>> 24;
		n[k] = y;
		e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
	}
	var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
		d = d.AES = p.extend({
			bog7Z: function() {
				for (var a = this.K4O, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cBw5B = d + 6) + 1), e = this.cBv5A = [], j = 0; j < a; j++) if (j < d) e[j] = c[j];
				else {
					var k = e[j - 1];
					j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
					e[j] = e[j - d] ^ k
				}
				c = this.cBu5z = [];
				for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
			},
			encryptBlock: function(a, b) {
				this.bAY1x(a, b, this.cBv5A, t, r, w, v, l)
			},
			decryptBlock: function(a, c) {
				var d = a[c + 1];
				a[c + 1] = a[c + 3];
				a[c + 3] = d;
				this.bAY1x(a, c, this.cBu5z, b, x, q, n, s);
				d = a[c + 1];
				a[c + 1] = a[c + 3];
				a[c + 3] = d
			},
			bAY1x: function(a, b, c, d, e, j, l, f) {
				for (var m = this.cBw5B, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
					s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
					t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
					n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
					g = q,
					h = s,
					k = t;
				q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
				s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
				t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
				n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
				a[b] = q;
				a[b + 1] = s;
				a[b + 2] = t;
				a[b + 3] = n
			},
			keySize: 8
		});
	u.AES = p.bof7Y(d)
})();

function RSAKeyPair(a, b, c) {
	this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m)
}
function twoDigit(a) {
	return (10 > a ? "0" : "") + String(a)
}
function encryptedString(a, b) {
	for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;) c[e] = b.charCodeAt(e), e++;
	for (; 0 != c.length % a.chunkSize;) c[e++] = 0;
	for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
		for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
		k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
	}
	return g.substring(0, g.length - 1)
}
function decryptedString(a, b) {
	var e, f, g, h, c = b.split(" "),
		d = "";
	for (e = 0; e < c.length; ++e) for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
	return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
}
function setMaxDigits(a) {
	maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
	for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
	bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
}
function BigInt(a) {
	this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1
}
function biFromDecimal(a) {
	for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);)++c;
	if (c == a.length) d = new BigInt;
	else {
		for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
		d.isNeg = b
	}
	return d
}
function biCopy(a) {
	var b = new BigInt(!0);
	return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
}
function biFromNumber(a) {
	var c, b = new BigInt;
	for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
	return b
}
function reverseStr(a) {
	var c, b = "";
	for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
	return b
}
function biToString(a, b) {
	var d, e, c = new BigInt;
	for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
	return (a.isNeg ? "-" : "") + reverseStr(e)
}
function biToDecimal(a) {
	var c, d, b = new BigInt;
	for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
	return (a.isNeg ? "-" : "") + reverseStr(d)
}
function digitToHex(a) {
	var b = 15,
		c = "";
	for (i = 0; 4 > i; ++i) c += hexToChar[a & b], a >>>= 4;
	return reverseStr(c)
}
function biToHex(a) {
	var d, b = "";
	for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]);
	return b
}
function charToHex(a) {
	var h, b = 48,
		c = b + 9,
		d = 97,
		e = d + 25,
		f = 65,
		g = 90;
	return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}
function hexToDigit(a) {
	var d, b = 0,
		c = Math.min(a.length, 4);
	for (d = 0; c > d; ++d) b <<= 4, b |= charToHex(a.charCodeAt(d));
	return b
}
function biFromHex(a) {
	var d, e, b = new BigInt,
		c = a.length;
	for (d = c, e = 0; d > 0; d -= 4, ++e) b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
	return b
}
function biFromString(a, b) {
	var g, h, i, j, c = "-" == a.charAt(0),
		d = c ? 1 : 0,
		e = new BigInt,
		f = new BigInt;
	for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
	return e.isNeg = c, e
}
function biDump(a) {
	return (a.isNeg ? "-" : "") + a.digits.join(" ")
}
function biAdd(a, b) {
	var c, d, e, f;
	if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg;
	else {
		for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
		c.isNeg = a.isNeg
	}
	return c
}
function biSubtract(a, b) {
	var c, d, e, f;
	if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg;
	else {
		for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
		if (-1 == e) {
			for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
			c.isNeg = !a.isNeg
		} else c.isNeg = a.isNeg
	}
	return c
}
function biHighIndex(a) {
	for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];)--b;
	return b
}
function biNumBits(a) {
	var e, b = biHighIndex(a),
		c = a.digits[b],
		d = (b + 1) * bitsPerDigit;
	for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1;
	return e
}
function biMultiply(a, b) {
	var d, h, i, k, c = new BigInt,
		e = biHighIndex(a),
		f = biHighIndex(b);
	for (k = 0; f >= k; ++k) {
		for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
		c.digits[k + e + 1] = d
	}
	return c.isNeg = a.isNeg != b.isNeg, c
}
function biMultiplyDigit(a, b) {
	var c, d, e, f;
	for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
	return result.digits[1 + c] = d, result
}
function arrayCopy(a, b, c, d, e) {
	var g, h, f = Math.min(b + e, a.length);
	for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g]
}
function biShiftLeft(a, b) {
	var e, f, g, h, c = Math.floor(b / bitsPerDigit),
		d = new BigInt;
	for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
	return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
}
function biShiftRight(a, b) {
	var e, f, g, h, c = Math.floor(b / bitsPerDigit),
		d = new BigInt;
	for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
	return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
}
function biMultiplyByRadixPower(a, b) {
	var c = new BigInt;
	return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
}
function biDivideByRadixPower(a, b) {
	var c = new BigInt;
	return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
}
function biModuloByRadixPower(a, b) {
	var c = new BigInt;
	return arrayCopy(a.digits, 0, c.digits, 0, b), c
}
function biCompare(a, b) {
	if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
	for (var c = a.digits.length - 1; c >= 0; --c) if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
	return 0
}
function biDivideModulo(a, b) {
	var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a),
		d = biNumBits(b),
		e = b.isNeg;
	if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
	for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
	for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); - 1 != biCompare(g, k);)++f.digits[j - h], g = biSubtract(g, k);
	for (l = j; l > h; --l) {
		for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;)--f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
		k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
	}
	return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
}
function biDivide(a, b) {
	return biDivideModulo(a, b)[0]
}
function biModulo(a, b) {
	return biDivideModulo(a, b)[1]
}
function biMultiplyMod(a, b, c) {
	return biModulo(biMultiply(a, b), c)
}
function biPow(a, b) {
	for (var c = bigOne, d = a;;) {
		if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
		d = biMultiply(d, d)
	}
	return c
}
function biPowMod(a, b, c) {
	for (var d = bigOne, e = a, f = b;;) {
		if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
		e = biMultiplyMod(e, e, c)
	}
	return d
}
function BarrettMu(a) {
	this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
	var b = new BigInt;
	b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
}
function BarrettMu_modulo(a) {
	var i, b = biDivideByRadixPower(a, this.k - 1),
		c = biMultiply(b, this.mu),
		d = biDivideByRadixPower(c, this.k + 1),
		e = biModuloByRadixPower(a, this.k + 1),
		f = biMultiply(d, this.modulus),
		g = biModuloByRadixPower(f, this.k + 1),
		h = biSubtract(e, g);
	for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
	return h
}
function BarrettMu_multiplyMod(a, b) {
	var c = biMultiply(a, b);
	return this.modulo(c)
}
function BarrettMu_powMod(a, b) {
	var d, e, c = new BigInt;
	for (c.digits[0] = 1, d = a, e = b;;) {
		if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e)) break;
		d = this.multiplyMod(d, d)
	}
	return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2,
	biRadixBits = 16,
	bitsPerDigit = biRadixBits,
	biRadix = 65536,
	biHalfRadix = biRadix >>> 1,
	biRadixSquared = biRadix * biRadix,
	maxDigitVal = biRadix - 1,
	maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
!
function() {
	function a(a) {
		var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
			c = "";
		for (d = 0; a > d; d += 1) e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
		return c
	}
	function b(a, b) {
		var c = CryptoJS.enc.Utf8.parse(b),
			d = CryptoJS.enc.Utf8.parse("0102030405060708"),
			e = CryptoJS.enc.Utf8.parse(a),
			f = CryptoJS.AES.encrypt(e, c, {
				iv: d,
				mode: CryptoJS.mode.CBC
			});
		return f.toString()
	}
	function c(a, b, c) {
		var d, e;
		return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
	}
	function d(d, e, f, g) {
		var h = {},
			i = a(16);
		return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
	}
	function e(a, b, d, e) {
		var f = {};
		return f.encText = c(a + e, b, d), f
	}
	window.asrsea = d, window.ecnonasr = e
}();
(function() {
	var c3x = NEJ.P,
		em6g = c3x("nej.g"),
		v4z = c3x("nej.j"),
		k4o = c3x("nej.u"),
		Ow9n = c3x("nm.x.ek");
	Ow9n.emj = {
		"色": "00e0b",
		"流感": "509f6",
		"这边": "259df",
		"弱": "8642d",
		"嘴唇": "bc356",
		"亲": "62901",
		"开心": "477df",
		"呲牙": "22677",
		"憨笑": "ec152",
		"猫": "b5ff6",
		"皱眉": "8ace6",
		"幽灵": "15bb7",
		"蛋糕": "b7251",
		"发怒": "52b3a",
		"大哭": "b17a8",
		"兔子": "76aea",
		"星星": "8a5aa",
		"钟情": "76d2e",
		"牵手": "41762",
		"公鸡": "9ec4e",
		"爱意": "e341f",
		"禁止": "56135",
		"狗": "fccf6",
		"亲亲": "95280",
		"叉": "104e0",
		"礼物": "312ec",
		"晕": "bda92",
		"呆": "557c9",
		"生病": "38701",
		"钻石": "14af6",
		"拜": "c9d05",
		"怒": "c4f7f",
		"示爱": "0c368",
		"汗": "5b7a4",
		"小鸡": "6bee2",
		"痛苦": "55932",
		"撇嘴": "575cc",
		"惶恐": "e10b4",
		"口罩": "24d81",
		"吐舌": "3cfe4",
		"心碎": "875d3",
		"生气": "e8204",
		"可爱": "7b97d",
		"鬼脸": "def52",
		"跳舞": "741d5",
		"男孩": "46b8e",
		"奸笑": "289dc",
		"猪": "6935b",
		"圈": "3ece0",
		"便便": "462db",
		"外星": "0a22b",
		"圣诞": "8e7",
		"流泪": "01000",
		"强": "1",
		"爱心": "0CoJU",
		"女孩": "m6Qyw",
		"惊恐": "8W8ju",
		"大笑": "d"
	};
	Ow9n.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function() {
	var c3x = NEJ.P,
		em6g = c3x("nej.g"),
		v4z = c3x("nej.j"),
		k4o = c3x("nej.u"),
		Ow9n = c3x("nm.x.ek"),
		l4p = c3x("nm.x");
	if (v4z.bm4q.redefine) return;
	window.GEnc = true;
	var bor7k = function(cBs5x) {
			var m4q = [];
			k4o.bd4h(cBs5x, function(cBr5w) {
				m4q.push(Ow9n.emj[cBr5w])
			});
			return m4q.join("")
		};
	var cBq5v = v4z.bm4q;
	v4z.bm4q = function(Y4c, e4i) {
		var j4n = {},
			e4i = NEJ.X({}, e4i),
			lw8o = Y4c.indexOf("?");
		if (window.GEnc && /(^|\.com)\/api/.test(Y4c) && !(e4i.headers && e4i.headers[em6g.yg2x] == em6g.DH4L) && !e4i.noEnc) {
			if (lw8o != -1) {
				j4n = k4o.hq7j(Y4c.substring(lw8o + 1));
				Y4c = Y4c.substring(0, lw8o)
			}
			if (e4i.query) {
				j4n = NEJ.X(j4n, k4o.fC6w(e4i.query) ? k4o.hq7j(e4i.query) : e4i.query)
			}
			if (e4i.data) {
				j4n = NEJ.X(j4n, k4o.fC6w(e4i.data) ? k4o.hq7j(e4i.data) : e4i.data)
			}
			j4n["csrf_token"] = v4z.gx6r("__csrf");
			Y4c = Y4c.replace("api", "weapi");
			e4i.method = "post";
			delete e4i.query;
			var bBB1x = window.asrsea(JSON.stringify(j4n), bor7k(["流泪", "强"]), bor7k(Ow9n.md), bor7k(["爱心", "女孩", "惊恐", "大笑"]));
			e4i.data = k4o.cD5I({
				params: bBB1x.encText,
				encSecKey: bBB1x.encSecKey
			})
		}
		cBq5v(Y4c, e4i)
	};
	v4z.bm4q.redefine = true
})();
(function() {
	window.setTimeout(function() {
		if (!location.href.match(/^https?:\/\/([a-zA-Z0-9\-]+?\.)*?music\.163\.com($|\/)/gi)) return;
		var getNode = function(tagName, attrName, attrValue) {
				if (!tagName || !attrName || !attrValue) return null;
				var nodes = document.getElementsByTagName(tagName);
				if (nodes && nodes.length) {
					for (var i = 0, ii = nodes.length; i < ii; i++) {
						if ((nodes[i][attrName] || "").toLowerCase() == attrValue.toLowerCase()) {
							return nodes[i]
						}
					}
				}
				return null
			};
		var meta = getNode("meta", "name", "robots");
		if (meta && (meta.content || "").toLowerCase() == "nofollow") return;
		var canonicalURL, curProtocol;
		var link = getNode("link", "rel", "canonical");
		if (link && link.href) canonicalURL = link.href;
		if (!canonicalURL) {
			curProtocol = location.protocol.split(":")[0]
		} else {
			curProtocol = canonicalURL.split(":")[0]
		}
		if (!canonicalURL) canonicalURL = location.href;
		var pushHref = String(curProtocol).toLowerCase() === "https" ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif" : "//api.share.baidu.com/s.gif";
		var params = [];
		if (document.referrer) {
			params.push("r=" + encodeURIComponent(document.referrer))
		}
		params.push("l=" + encodeURIComponent(canonicalURL));
		(new Image).src = pushHref + "?" + params.join("&")
	}, 3e3)
})();
(function() {})();
(function() {})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		dy5D = c3x("nej.p"),
		k4o = c3x("nej.u"),
		h4l = c3x("nej.v"),
		v4z = c3x("nej.j"),
		dE5J = c3x("nm.u"),
		l4p = c3x("nm.x"),
		q4u = c3x("nm.d"),
		n4r = c3x("nm.l"),
		cy5D = c3x("nm.pc"),
		boF8x = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
		j4n = {
			"大笑": "86",
			"可爱": "85",
			"憨笑": "359",
			"色": "95",
			"亲亲": "363",
			"惊恐": "96",
			"流泪": "356",
			"亲": "362",
			"呆": "352",
			"哀伤": "342",
			"呲牙": "343",
			"吐舌": "348",
			"撇嘴": "353",
			"怒": "361",
			"奸笑": "341",
			"汗": "97",
			"痛苦": "346",
			"惶恐": "354",
			"生病": "350",
			"口罩": "351",
			"大哭": "357",
			"晕": "355",
			"发怒": "115",
			"开心": "360",
			"鬼脸": "94",
			"皱眉": "87",
			"流感": "358",
			"爱心": "33",
			"心碎": "34",
			"钟情": "303",
			"星星": "309",
			"生气": "314",
			"便便": "89",
			"强": "13",
			"弱": "372",
			"拜": "14",
			"牵手": "379",
			"跳舞": "380",
			"禁止": "374",
			"这边": "262",
			"爱意": "106",
			"示爱": "376",
			"嘴唇": "367",
			"狗": "81",
			"猫": "78",
			"猪": "100",
			"兔子": "459",
			"小鸡": "450",
			"公鸡": "461",
			"幽灵": "116",
			"圣诞": "411",
			"外星": "101",
			"钻石": "52",
			"礼物": "107",
			"男孩": "0",
			"女孩": "1",
			"蛋糕": "337",
			18: "186",
			"圈": "312",
			"叉": "313"
		},
		cBm5r = function() {
			if (h4l && h4l.z4D) {
				h4l.dispatchEventalias = h4l.z4D
			}
		};
	cBm5r();
	l4p.boH8z = function(bP4T) {
		if (!bP4T || bP4T.copyrightId === undefined || !! bP4T.program) return false;
		if (window.GAbroad) {
			bP4T.fee = 0;
			return true
		}
		if (bP4T.status < 0) return true;
		var Om9d;
		if (typeof GCopyrights !== "undefined") Om9d = GCopyrights;
		try {
			if (!Om9d && !! top.GCopyrights) Om9d = top.GCopyrights
		} catch (e) {}
		if (Om9d) {
			var r4v = k4o.di5n(Om9d, bP4T.copyrightId);
			if (r4v >= 0) return true
		}
		return false
	};
	l4p.boQ8I = function() {
		var Ce3x = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
			wx2x = {
				2: "artist",
				13: "playlist",
				17: "dj",
				19: "album",
				18: "song",
				31: "toplist",
				32: "searchsong",
				33: "searchlyric",
				34: "event",
				70: "djradio",
				24: "day",
				50: "record"
			},
			cBh5m = {
				song: "单曲",
				album: "专辑",
				artist: "歌手",
				playlist: "歌单",
				dj: "电台节目",
				searchsong: "单曲搜索",
				searchlyric: "歌词搜索",
				toplist: "榜单",
				event: "动态",
				djradio: "电台",
				day: "每日歌曲推荐",
				record: "听歌排行榜"
			};
		var cBg5l = function(K4O, j4n, Og9X) {
				switch (K4O) {
				case "event":
					j4n = j4n.split("|");
					return "/event?id=" + j4n[0] + "&uid=" + j4n[1];
				case "searchsong":
				case "searchlyric":
					var u4y = K4O == "searchsong" ? 1 : 1006;
					return "/search/m/?s=" + encodeURIComponent(j4n) + "&type=" + u4y;
				case "toplist":
					return "/discover/toplist?id=" + j4n + "&_hash=songlist-" + Og9X;
				case "day":
					return "/discover/recommend/taste" + "?_hash=songlist-" + Og9X;;
				case "record":
					j4n = j4n.split("|");
					return "/user/songs/rank?id=" + j4n[0] + "&cat=" + j4n[1];
					break;
				default:
					return "/" + K4O + "?id=" + j4n + "&_hash=songlist-" + Og9X
				}
			};
		return function(ee6Y, Og9X) {
			if (!ee6Y) return null;
			var Lm6g = ee6Y.fid || (ee6Y.type != 18 ? ee6Y.type : null),
				boT8L = ee6Y.fdata || ee6Y.rid,
				bCm1x = ee6Y.page || ee6Y.fhref;
			var K4O = wx2x[Lm6g];
			if (!K4O) {
				var zz3x = (bCm1x || "").match(Ce3x);
				if (zz3x) K4O = zz3x[1]
			}
			if (!K4O) return null;
			return {
				title: cBh5m[K4O],
				link: !wx2x[Lm6g] ? bCm1x : cBg5l(K4O, boT8L, Og9X),
				fid: Lm6g,
				fdata: boT8L
			}
		}
	}();
	l4p.Zp3x = function(kx8p) {
		var dp5u = kx8p;
		if (typeof GUser !== "undefined" && GUser.userId > 0) dp5u = GUser;
		return dp5u
	};
	l4p.gT7M = function() {
		if (typeof GUser !== "undefined" && GUser.userId > 0) {
			return true
		} else {
			top.login();
			return false
		}
	};
	l4p.Kl6f = function() {
		var Ce3x = /#(.*?)$/;
		return function(gy7r) {
			var jL8D = gy7r === false ? location : top.location;
			return Ce3x.test(jL8D.href) ? RegExp.$1 : ""
		}
	}();
	l4p.Ct4x = function() {
		var Cu4y = a3x.dj5o("audio"),
			cBd5i = Cu4y.canPlayType && Cu4y.canPlayType("audio/mpeg");
		if (cBd5i) return 2;
		var cBb5g = l4p.bpk8c().supported;
		if (cBb5g) return 1;
		return 0
	};
	l4p.bpk8c = function() {
		var gq6k, bpo8g = !1,
			bpr8j = "";
		if (dy5D.dr5w.browser == "ie") {
			try {
				gq6k = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
			} catch (e) {
				gq6k = null
			}
			if (gq6k) {
				bpo8g = !0;
				bpr8j = gq6k.GetVariable("$version")
			}
		} else {
			if (navigator.plugins && navigator.plugins.length > 0) {
				gq6k = navigator.plugins["Shockwave Flash"];
				if (gq6k) {
					bpo8g = !0;
					bpr8j = gq6k.description
				}
			}
		}
		return {
			supported: bpo8g,
			version: bpr8j
		}
	};
	l4p.sI1x = function() {
		return "网易云音乐"
	};
	l4p.cBa5f = function() {
		return j4n
	};
	l4p.bDg1x = function(cK5P) {
		var C4G = j4n[cK5P];
		return C4G == null ? "" : boF8x.replace("{ID}", C4G)
	};
	l4p.wO2x = function(bo4s, ec6W, CG4K) {
		if (!bo4s) return "";
		if ( !! CG4K) {
			bo4s = l4p.cAZ5e(bo4s)
		}
		return l4p.YE2x(l4p.cAY5d(bo4s, ec6W))
	};
	l4p.YC2x = function() {
		var Pe0x = {
			AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
			LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
			ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
			ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
			LING: /\n/g,
			BLANK: /\s/g,
			MLINE: /([ \f\r\t\v]*\n){2,}/g
		},
			bpF8x = {
				LINK: '<a href="${url}" class="${klass}">${value}</a>',
				AT: '<a href="${url}" class="${klass}">@${value}</a>',
				ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
			},
			cAX5c = {
				r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
				"<": "&lt;",
				">": "&gt;",
				"&": "&amp;",
				" ": "&nbsp;",
				'"': "&quot;",
				"'": "&#39;",
				"&lt;": "&lt;",
				"&gt;": "&gt;"
			},
			cAT5Y = ["AT", "LINK", "ACT_NOLINK", "ACT"];
		var cAQ5V = function(dJ5O, bpH8z) {
				dJ5O = Ke6Y(dJ5O);
				if ( !! bpH8z) {
					dJ5O = dJ5O.replace(Pe0x.MLINE, "\n\n").replace(Pe0x.LING, "</br>")
				}
				dJ5O = l4p.YE2x(dJ5O);
				return dJ5O
			};
		var Ke6Y = function(bo4s) {
				return k4o.Dq4u(cAX5c, bo4s)
			};
		return function(dJ5O, e4i, dC5H) {
			e4i = e4i || {};
			dC5H = dC5H || {};
			dC5H.actHash = {};
			var cAK5P = !! e4i.parseLink,
				cAF5K = !! e4i.parseAct,
				cAE5J = e4i.linkTpl || bpF8x.LINK,
				cAD5I = e4i.atTpl || bpF8x.AT,
				cAC5H = e4i.atUrl || "/user/home?nickname=",
				cAB5G = e4i.actTpl || bpF8x.ACT,
				bpH8z = !! e4i.keepSpace,
				bpR8J = e4i.linkKlass || "s-fc7";
			cFP6J = e4i.actBiJson || "";
			if (!dJ5O) return "";
			dJ5O = dJ5O.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
			var lH8z = cAT5Y[cAK5P + 2 * cAF5K],
				df5k = Pe0x[lH8z],
				bs4w = null,
				jN8F = null,
				gt6n = 0,
				cFQ6K = "",
				cFR6L = "";
			var qh0x = [];
			df5k.lastIndex = 0;
			while (bs4w = df5k.exec(dJ5O)) {
				var dQ5V = {
					html: "",
					before: bs4w.index - 1,
					after: bs4w.index + bs4w[0].length
				};
				if (bs4w[1]) {
					var jN8F = bs4w[2].replace(/[^\x00-\xff]/g, "**");
					if (jN8F.length < 4 || jN8F.length > 32) {} else {
						var GV5a = a3x.eB6v(cAD5I);
						dQ5V.html = a3x.cd4h(GV5a, {
							value: Ke6Y(bs4w[2]),
							url: encodeURI(cAC5H + bs4w[2]),
							klass: bpR8J
						});
						qh0x.push(dQ5V)
					}
				} else if (bs4w.length > 8 && bs4w[4]) {
					var GV5a = a3x.eB6v(cAE5J);
					dQ5V.html = a3x.cd4h(GV5a, {
						value: Ke6Y(bs4w[4]),
						url: bs4w[4],
						klass: bpR8J
					});
					qh0x.push(dQ5V)
				} else {
					var bET2x = lH8z == "ACT_NOLINK" ? 4 : 9;
					var GV5a = a3x.eB6v(cAB5G);
					dQ5V.html = a3x.cd4h(GV5a, {
						value: Ke6Y(bs4w[bET2x]),
						klass: bpR8J
					});
					qh0x.push(dQ5V);
					dC5H.actHash[bs4w[bET2x].slice(1, -1)] = true
				}
			}
			var bpU8M = qh0x.length,
				kx8p = {
					before: dJ5O.length - 1,
					after: 0
				},
				bqc8U = "";
			for (var i = 0; i <= bpU8M; i++) {
				var hA7t, fX6R;
				hA7t = (qh0x[i - 1] || kx8p).after;
				fX6R = (qh0x[i] || kx8p).before;
				if (fX6R >= hA7t && hA7t >= 0 && fX6R <= dJ5O.length - 1) {
					bqc8U += cAQ5V(dJ5O.substring(hA7t, fX6R + 1), bpH8z)
				}
				if (qh0x[i]) {
					bqc8U += qh0x[i].html
				}
			}
			return bqc8U
		}
	}();
	l4p.cAZ5e = function() {
		var df5k = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
		return function(bo4s) {
			return (bo4s || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(df5k, function($0, $1) {
				return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
			})
		}
	}();
	l4p.cAY5d = function() {
		var df5k = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
		var ev6p = function(jN8F, ec6W) {
				return '<a href="/user/home?nickname=' + encodeURIComponent(jN8F) + '" class="' + (ec6W || "") + '">@' + jN8F + "</a>"
			};
		return function(bo4s, ec6W) {
			return (bo4s || "").replace(df5k, function($0, $1) {
				return ev6p($1, ec6W)
			})
		}
	}();
	l4p.YE2x = function() {
		var df5k = /\[(.*?)\]/g;
		return function(bo4s) {
			return (bo4s || "").replace(df5k, function($1, $2) {
				var Y4c = l4p.bDg1x($2);
				return !Y4c ? $1 : '<img src="' + Y4c + '"/>'
			})
		}
	}();
	l4p.AE3x = function(F4J, ec6W) {
		a3x.bE4I(F4J, ec6W) ? a3x.x4B(F4J, ec6W) : a3x.y4C(F4J, ec6W)
	};
	l4p.JZ6T = function(cR5W, kR8J) {
		cR5W = a3x.B4F(cR5W);
		kR8J = a3x.B4F(kR8J);
		if (!cR5W || !kR8J) return !1;
		for (kR8J = kR8J.parentNode; !! kR8J && kR8J != cR5W; kR8J = kR8J.parentNode);
		return kR8J == cR5W
	};
	l4p.lj8b = function() {
		var bFe2x = function(gX7Q) {
				return (gX7Q < 10 ? "0" : "") + gX7Q
			};
		return function(kX8P) {
			kX8P = parseInt(kX8P) || 0;
			if (!kX8P) return "00:00";
			var ze3x = Math.floor(kX8P % 60),
				cAr5w = Math.floor(kX8P / 60);
			return bFe2x(cAr5w) + ":" + bFe2x(ze3x)
		}
	}();
	l4p.zb2x = function(fR6L, wY2x) {
		if (!fR6L || fR6L.length == 0) return "";
		wY2x = wY2x || "/";
		var bs4w = [];
		for (var i = fR6L.length - 1; i >= 0; i--) {
			bs4w.unshift(fR6L[i].name)
		}
		return bs4w.join(wY2x)
	};
	l4p.rU0x = function() {
		var Ni7b = function(ij7c, ec6W, cR5W, WT2x) {
				var ev6p = WT2x ? l4p.bqt8l : k4o.dH5M;
				if (!ij7c || !ij7c.name) return "";
				if (!ij7c.id) return '<span class="' + ec6W + '">' + ev6p(ij7c.name) + "</span>";
				return "<a" + (cR5W ? ' target="_blank"' : "") + ' class="' + ec6W + '" href="/artist?id=' + ij7c.id + '" hidefocus="true">' + ev6p(ij7c.name) + "</a>"
			};
		return function(fR6L, W4a, wY2x, cR5W, bFL2x, WT2x) {
			if (!fR6L || !fR6L.length) return "";
			wY2x = wY2x || "/";
			W4a = W4a || "";
			JT6N = "";
			var ep6j = [];
			for (var i = 0, i4m = [], tB1x = [], fH6B; i < fR6L.length; ++i) {
				ep6j.push(fR6L[i].name);
				if (!fR6L[i] || fR6L[i].id <= 0) {
					tB1x.push(fR6L[i]);
					continue
				}
				if (k4o.gK7D(W4a)) {
					fH6B = W4a(fR6L[i])
				} else {
					fH6B = Ni7b(fR6L[i], W4a, cR5W, WT2x)
				}
				if (fH6B && bFL2x && fR6L[i].tns && fR6L[i].tns.length > 0) {
					JT6N = k4o.dH5M(fR6L[i].tns[0]);
					fH6B += '<span class="s-fc8" title="' + JT6N + '"> - (' + JT6N + ")</span>"
				} !! fH6B && i4m.push(fH6B)
			}
			for (var i = 0, fH6B; i < tB1x.length; ++i) {
				if (k4o.gK7D(W4a)) {
					fH6B = W4a(tB1x[i])
				} else {
					fH6B = Ni7b(tB1x[i], W4a, cR5W, WT2x)
				}
				if (fH6B && bFL2x && tB1x[i].tns && tB1x[i].tns.length > 0) {
					JT6N = k4o.dH5M(tB1x[i].tns[0]);
					fH6B += '<span class="s-fc8" title="' + JT6N + '"> - (' + JT6N + ")</span>"
				} !! fH6B && i4m.push(fH6B)
			}
			return '<span title="' + ep6j.join(wY2x) + '">' + i4m.join(wY2x) + "</span>"
		}
	}();
	l4p.yT2x = function(fz6t, qd0x) {
		qd0x = qd0x || "86";
		return !!fz6t && (qd0x == "86" ? /^\d{11}$/ : /^\d+$/).test(fz6t)
	};
	l4p.cFS6M = function(fz6t) {
		if (!l4p.yT2x(fz6t)) return fz6t;
		return fz6t.substring(0, 3) + "****" + fz6t.substr(7)
	};
	l4p.kv8n = function() {
		var df5k = /^\s+$/g;
		return function(hX7Q) {
			return !hX7Q || df5k.test(hX7Q)
		}
	}();
	l4p.Na7T = function() {
		var bqF8x = /[^\x00-\xfff]/g;
		return function(hX7Q) {
			var cAp5u = hX7Q.match(bqF8x) || [],
				dt5y = cAp5u.length;
			return hX7Q.length + dt5y
		}
	}();
	l4p.AM3x = function() {
		var bqF8x = /[^\x00-\xfff]/;
		return function(hX7Q, eG6A) {
			for (var i = 0, len = hX7Q.length; i < len && eG6A > 0; i++) {
				if (bqF8x.test(hX7Q.charAt(i))) {
					eG6A -= 2;
					if (eG6A < 0) {
						break
					}
				} else {
					eG6A -= 1
				}
			}
			return hX7Q.substring(0, i)
		}
	}();
	l4p.AN3x = function(hX7Q, eG6A, TH1x) {
		eG6A = eG6A || 10;
		TH1x = TH1x || nej.p.dr5w.engine == "trident" && parseInt(nej.p.dr5w.release) < 5;
		if (TH1x && l4p.Na7T(hX7Q) > eG6A) {
			return l4p.AM3x(hX7Q, eG6A) + "..."
		} else {
			return hX7Q
		}
	};
	l4p.bGA2x = function(g4k) {
		return g4k === document.activeElement && (!document.hasFocus || document.hasFocus()) && !! (g4k.type || g4k.href || ~g4k.tabIndex)
	};
	l4p.cAn5s = function(d4h, cR5W) {
		if (!d4h || !cR5W) return !0;
		var g4k, u4y = d4h.type.toLowerCase();
		if (u4y == "mouseout") {
			g4k = d4h.relatedTarget || d4h.toElement
		} else if (u4y == "mouseover") {
			g4k = d4h.relatedTarget || d4h.fromElement
		}
		return !g4k || g4k !== cR5W && !l4p.JZ6T(cR5W, g4k)
	};
	l4p.sO1x = function() {
		R4V = {};
		return function(g4k, ed6X) {
			var C4G = a3x.lP8H(g4k),
				K4O = "hover-" + C4G;
			if (!ed6X || !C4G || !! R4V[K4O]) return;
			R4V[K4O] = !0;
			h4l.s4w(C4G, "mouseover", function() {
				var bqN8F = a3x.H4L(g4k, "hshow") || [];
				var bqO8G = a3x.H4L(g4k, "icn-dislike") || [];
				a3x.y4C(C4G, "z-hover");
				a3x.ba4e(bqN8F[0], "display", "block");
				a3x.ba4e(bqO8G[0], "display", "block")
			});
			h4l.s4w(C4G, "mouseout", function() {
				var bqN8F = a3x.H4L(g4k, "hshow") || [];
				var bqO8G = a3x.H4L(g4k, "icn-dislike") || [];
				a3x.x4B(C4G, "z-hover");
				a3x.ba4e(bqN8F[0], "display", "none");
				a3x.ba4e(bqO8G[0], "display", "none")
			})
		}
	}();
	l4p.bGT2x = function() {
		var bz4D = {
			r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
			"(": "\\(",
			")": "\\)",
			"[": "\\[",
			"]": "\\]",
			"{": "\\{",
			"}": "\\}",
			"*": "\\*",
			"+": "\\+",
			"^": "\\^",
			$: "\\$",
			"?": "\\?",
			"!": "\\!",
			"\\": "\\\\",
			"|": "\\|",
			".": "\\."
		};
		return function(hX7Q) {
			return k4o.Dq4u(bz4D, hX7Q)
		}
	}();
	l4p.yF2x = function(bA4E) {
		if (k4o.Em4q(bA4E)) bA4E = bA4E.getTime();
		var eS6M = new Date,
			kf8X = eS6M.getTime() - bA4E;
		if (kf8X <= 6e4) return "刚刚";
		var nm9d = eS6M.getHours() * 36e5 + eS6M.getMinutes() * 6e4 + eS6M.getSeconds() * 1e3;
		if (kf8X <= nm9d) {
			if (kf8X < 36e5) {
				var Ha5f = Math.floor(kf8X / 6e4);
				return Ha5f + "分钟前"
			}
			return k4o.ih7a(bA4E, "HH:mm")
		} else {
			if (kf8X < nm9d + 864e5) {
				return "昨天" + k4o.ih7a(bA4E, "HH:mm")
			} else {
				var gE7x = eS6M.getFullYear(),
					Vv2x = new Date(gE7x, 0, 1);
				var nm9d = eS6M.getTime() - Vv2x.getTime();
				if (kf8X < nm9d) {
					return k4o.ih7a(bA4E, "M月d日 HH:mm")
				}
				return k4o.ih7a(bA4E, "yyyy年M月d日")
			}
		}
	};
	l4p.cAm5r = function(bA4E) {
		if (k4o.Em4q(bA4E)) bA4E = bA4E.getTime();
		var eS6M = new Date,
			kf8X = eS6M.getTime() - bA4E;
		var nm9d = eS6M.getHours() * 36e5 + eS6M.getMinutes() * 6e4 + eS6M.getSeconds() * 1e3;
		if (kf8X <= nm9d) {
			return "今天" + k4o.ih7a(bA4E, "HH:mm")
		} else {
			if (kf8X < nm9d + 864e5) {
				return "昨天" + k4o.ih7a(bA4E, "HH:mm")
			} else {
				return k4o.ih7a(bA4E, "yy-MM-dd HH:mm")
			}
		}
	};
	l4p.cAl5q = function(bA4E) {
		if (k4o.Em4q(bA4E)) bA4E = bA4E.getTime();
		var eS6M = new Date,
			kf8X = eS6M.getTime() - bA4E;
		if (kf8X <= 6e4) return "刚刚";
		var nm9d = eS6M.getHours() * 36e5 + eS6M.getMinutes() * 6e4 + eS6M.getSeconds() * 1e3;
		if (kf8X <= nm9d) {
			if (kf8X < 36e5) {
				var Ha5f = Math.floor(kf8X / 6e4);
				return Ha5f + "分钟前"
			}
			return k4o.ih7a(bA4E, "HH:mm")
		} else {
			if (kf8X < nm9d + 864e5) {
				return "昨天" + k4o.ih7a(bA4E, "HH:mm")
			} else if (kf8X < nm9d + 864e5 * 6) {
				var gE7x = eS6M.getFullYear(),
					Vv2x = new Date(gE7x, 0, 1);
				var nm9d = eS6M.getTime() - Vv2x.getTime();
				if (kf8X < nm9d) {
					return k4o.ih7a(bA4E, "M月d日 HH:mm")
				}
				return k4o.ih7a(bA4E, "yyyy年M月d日")
			} else {
				return "最近"
			}
		}
	};
	l4p.VT2x = function() {
		var df5k = /\{(.*?)\}/gi;
		return function(oW9N, j4n) {
			return (oW9N || "").replace(df5k, function($1, $2) {
				var D4H = j4n[$2];
				return D4H == null ? $1 : D4H
			})
		}
	}();
	l4p.fp6j = function() {
		var bf4j = Array.prototype.slice.call(arguments, 0),
			oW9N = bf4j.shift();
		if (oW9N) {
			return oW9N.replace(/{(\d+)}/g, function($1, $2) {
				return $2 < bf4j.length ? bf4j[$2] : $1
			})
		}
		return ""
	};
	l4p.JI6C = function(i4m, ec6W, kh8Z) {
		return "";
		kh8Z = kh8Z || " - ";
		if (i4m && i4m.length) {
			return kh8Z + ( !! ec6W ? '<span class="' + ec6W + '">' + i4m[0] + "</span>" : i4m[0])
		}
		return ""
	};
	l4p.bHR3x = function() {
		if (window.getSelection) {
			var sk0x = window.getSelection();
			if (sk0x && sk0x.focusNode && sk0x.focusNode.tagName) {
				var Bd3x = a3x.dk5p(sk0x.focusNode);
				for (var i = 0, yu2x; i < Bd3x.length; ++i) {
					yu2x = Bd3x[i].tagName;
					if (!yu2x) continue;
					yu2x = yu2x.toLowerCase();
					if (yu2x == "textarea" || yu2x == "input") return !0
				}
			}
		} else if (document.selection) {
			var dd5i = document.selection.createRange();
			if (dd5i) {
				var g4k = dd5i.parentElement();
				if (g4k && g4k.tagName) {
					var yu2x = g4k.tagName.toLowerCase();
					if (yu2x == "textarea" || yu2x == "input") return !0
				}
			}
		}
		return !1
	};
	l4p.Bg3x = function(fG6A) {
		if (/^[A-Z]\:\\/i.test(fG6A)) {
			fG6A = fG6A.split("\\")
		} else {
			fG6A = fG6A.split("/")
		}
		fG6A = fG6A[fG6A.length - 1];
		return fG6A
	};
	l4p.cAk5p = function() {
		var FC5H = [13, 17, 34, 19, 18, 21];
		return function(C4G) {
			var bs4w = (C4G || "").split("_");
			return {
				type: FC5H[bs4w[2]] || -1,
				id: bs4w[3] || ""
			}
		}
	}();
	l4p.bJd3x = function(gq6k) {
		if (!gq6k) {
			return true
		}
		for (var k in gq6k) {
			return false
		}
		return true
	};
	l4p.brb8T = function(dp5u) {
		if (!dp5u) {
			return ""
		}
		if (4 == dp5u.userType) {
			return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
		} else if (dp5u.authStatus == 1) {
			return '<sup class="u-icn u-icn-1"></sup>'
		} else if (dp5u.expertTags && dp5u.expertTags.length || !l4p.bJd3x(dp5u.experts)) {
			return '<sup class="u-icn u-icn-84"></sup>'
		}
	};
	l4p.Vd1x = function(hH7A) {
		if (!hH7A) return "";
		var dt5y = hH7A.length,
			iq7j = [];
		iq7j[0] = dt5y / 3 | 0;
		iq7j[1] = iq7j[0] + ((dt5y - iq7j[0]) / 2 | 0);
		return hH7A.substring(0, iq7j[0]) + hH7A.substring(iq7j[0], iq7j[1]).replace(/\d/g, "*") + hH7A.substring(iq7j[1], dt5y)
	};
	l4p.cFT6N = function(r4v, cB5G) {
		return (r4v % cB5G + cB5G) % cB5G
	};
	l4p.brg8Y = function() {
		var FC5H = {
			0: "playlist",
			1: "program",
			2: "event",
			3: "album",
			4: "song",
			5: "mv",
			6: "topic",
			62: "video"
		};
		return function(C4G) {
			var bs4w = (C4G || "").split("_"),
				m4q = {
					type: FC5H[bs4w[2]] || -1,
					id: bs4w[3] || ""
				};
			if (m4q.type == "event") {
				m4q.uid = bs4w[4] || "";
				return "/" + m4q.type + "?id=" + m4q.id + "&uid=" + m4q.uid
			}
			return "/" + m4q.type + "?id=" + m4q.id
		}
	}();
	l4p.bri8a = function() {
		var FC5H = {
			0: "歌单",
			1: "电台节目",
			2: "动态",
			3: "专辑",
			4: "单曲",
			5: "MV",
			6: "专栏文章",
			62: "视频"
		};
		return function(C4G) {
			var bs4w = (C4G || "").split("_");
			return FC5H[bs4w[2]] || "资源"
		}
	}();
	l4p.cAh5m = function(bv4z) {
		var qs = bv4z.length > 0 ? bv4z.substring(1) : "",
			args = {},
			items = qs.length ? qs.split("&") : [],
			item = null,
			name = null,
			value = null,
			i = 0,
			len = items.length;
		for (i = 0; i < len; i++) {
			item = items[i].split("=");
			name = decodeURIComponent(item[0]);
			value = decodeURIComponent(item[1]);
			if (name.length) {
				args[name] = value
			}
		}
		return args
	};
	l4p.brs8k = function(os9j, UP1x) {
		var bdY5d = 0,
			ex6r = new Array;
		k4o.bd4h(os9j, function(Y4c, r4v) {
			var cx5C = a3x.dj5o("img");
			cx5C.src = Y4c;
			h4l.s4w(cx5C, "load", function(r4v, d4h) {
				ex6r[r4v] = 1;
				bdY5d++;
				if (bdY5d == os9j.length) UP1x(os9j, ex6r)
			}.f4j(this, r4v));
			h4l.s4w(cx5C, "error", function(d4h, r4v) {
				ex6r[r4v] = 0;
				bdY5d++;
				if (bdY5d == os9j.length) UP1x(os9j, ex6r)
			}.f4j(this, r4v))
		})
	};
	l4p.JC6w = function(i4m, dZ6T) {
		var m4q = [];
		k4o.bd4h(i4m, function(p4t, r4v, P4T) {
			m4q.push(dZ6T(p4t, r4v, P4T))
		});
		return m4q
	};
	l4p.ben5s = function(i4m, dZ6T, P4T) {
		var m4q = [];
		k4o.bd4h(i4m, function(p4t, r4v) {
			if (dZ6T.call(P4T, p4t, r4v, i4m)) {
				m4q.push(p4t)
			}
		});
		return m4q
	};
	l4p.bJY3x = function(bo4s) {
		return k4o.dH5M((bo4s || "").replace(/\s{2,}/g, " ").trim())
	};
	var cAe5j = {
		r: /\<|\>/g,
		"<": "&lt;",
		">": "&gt;"
	};
	l4p.cAd5i = function(bo4s) {
		return k4o.Dq4u(cAe5j, bo4s)
	};
	l4p.brK8C = function(bj4n) {
		if (bj4n.transNames && bj4n.transNames.length) {
			return bj4n.transNames[0]
		} else if (bj4n.alias && bj4n.alias.length) {
			return bj4n.alias[0]
		}
	};
	l4p.brL8D = function(PA0x) {
		if (PA0x) {
			return PA0x.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
		}
	};
	l4p.brT8L = function(g4k) {
		var g4k = a3x.B4F(g4k),
			cK5P = g4k && g4k.getElementsByTagName("textarea")[0],
			K4O = a3x.t4x(g4k, "key"),
			brU8M = a3x.t4x(g4k, "simple") == "1",
			cAc5h = a3x.t4x(g4k, "pvnamed") == "1",
			cAb5g = q4u.ws2x.gm6g();
		if (!(g4k && cK5P && K4O)) return;
		var bbQ4U, bsc8U, bbB4F;
		bbQ4U = a3x.H4L(a3x.B4F("m-playlist"), "j-img");
		k4o.bd4h(bbQ4U, function(iZ7S) {
			if (!bbB4F && a3x.t4x(iZ7S, "key")) {
				bbB4F = a3x.t4x(iZ7S, "key");
				iZ7S.removeAttribute("data-key")
			}
		});
		bbQ4U = a3x.H4L(a3x.B4F("m-playlist"), "m-info");
		k4o.bd4h(bbQ4U, function(iZ7S) {
			if (!bsc8U && iZ7S.id && iZ7S.id.indexOf("auto-id-") == 0) {
				bsc8U = iZ7S.id.slice(8, 12)
			}
		});
		var D4H = cK5P.value || cK5P.defaultValue;
		if (bbB4F) {
			D4H = decodeURIComponent(k4o.cAa5f(D4H, "param=" + bsc8U + bbB4F))
		}
		D4H = JSON.parse(D4H);
		if (cAc5h) {
			l4p.czX5c(D4H)
		}
		if (brU8M) {
			D4H = l4p.GB5G(D4H)
		}
		cAb5g.wh2x(K4O, D4H);
		g4k.innerHTML = "";
		return K4O
	};
	l4p.czW5b = function(pT0x) {
		if (!pT0x.onbeforelistload) {
			pT0x.onbeforelistload = function(d4h) {
				d4h.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
			}
		}
		if (!pT0x.onemptylist) {
			pT0x.onemptylist = function(d4h) {
				d4h.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (pT0x.emptyMsg || "暂时还没有数据") + "</h3></div>"
			}
		}
		return pT0x
	};
	l4p.czX5c = function(hC7v) {
		k4o.bd4h(hC7v, function(bP4T) {
			bP4T.privilege = bP4T.pv;
			delete bP4T.pv
		})
	};
	l4p.GB5G = function(ik7d) {
		if (k4o.eL6F(ik7d)) {
			var dC5H = [];
			k4o.bd4h(ik7d, function(brU8M) {
				dC5H.push(bLA3x(brU8M))
			});
			return dC5H
		} else {
			return bLA3x(ik7d)
		}
		function bLA3x(ik7d) {
			if (!ik7d) return null;
			var dC5H = {
				album: ik7d.al,
				alias: ik7d.alia || ik7d.ala || [],
				artists: ik7d.ar || [],
				commentThreadId: "R_SO_4_" + ik7d.id,
				copyrightId: ik7d.cp || 0,
				duration: ik7d.dt || 0,
				id: ik7d.id,
				mvid: ik7d.mv || 0,
				name: ik7d.name || "",
				cd: ik7d.cd,
				position: ik7d.no || 0,
				ringtone: ik7d.rt,
				rtUrl: ik7d.rtUrl,
				status: ik7d.st || 0,
				pstatus: ik7d.pst || 0,
				fee: ik7d.fee || 0,
				version: ik7d.v || 0,
				eq: ik7d.eq,
				songType: ik7d.t || 0,
				mst: ik7d.mst,
				score: ik7d.pop || 0,
				ftype: ik7d.ftype,
				rtUrls: ik7d.rtUrls,
				transNames: ik7d.tns,
				privilege: ik7d.privilege,
				lyrics: ik7d.lyrics
			};
			return dC5H
		}
	};
	l4p.cFU6O = function() {
		var g4k = a3x.nR9I('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
		document.body.appendChild(g4k);
		h4l.s4w(g4k, "click", function(d4h) {
			h4l.bg4k(d4h);
			a3x.cL5Q(g4k)
		})
	};
	l4p.iJ7C = function(cz5E) {
		if (cz5E < 1e5) {
			return cz5E
		} else if (cz5E < 1e8) {
			return Math.floor(cz5E / 1e3) / 10 + "万"
		} else {
			return Math.floor(cz5E / 1e7) / 10 + "亿"
		}
	};
	l4p.vv1x = function(cz5E, cK5P) {
		return "<i>" + (cz5E ? "(" + cz5E + ")" : cK5P) + "</i>"
	};
	l4p.bMg4k = function(u4y, hZ7S) {
		var e4i = {};
		if (!k4o.lG8y(hZ7S)) {
			return e4i
		}
		switch (parseInt(u4y)) {
		case 17:
			e4i.title = hZ7S.name;
			e4i.author = (hZ7S.radio || []).name;
			e4i.picUrl = hZ7S.coverUrl;
			e4i.category = hZ7S.radio.category;
			break;
		case 19:
			e4i.title = hZ7S.name;
			e4i.author = l4p.zb2x(hZ7S.artists);
			e4i.authors = l4p.zb2x(hZ7S.artists, " / ");
			e4i.picUrl = hZ7S.picUrl;
			break;
		case 13:
			e4i.title = hZ7S.name;
			e4i.author = (hZ7S.creator || []).nickname;
			e4i.picUrl = hZ7S.coverImgUrl;
			break;
		case 18:
			e4i.title = hZ7S.name;
			e4i.author = l4p.zb2x(hZ7S.artists);
			e4i.picUrl = (hZ7S.album || []).picUrl;
			break;
		case 20:
			e4i.title = hZ7S.name;
			e4i.author = "";
			e4i.picUrl = hZ7S.img1v1Url;
			break;
		case 21:
			e4i.title = hZ7S.name;
			e4i.author = hZ7S.artistName;
			e4i.authors = l4p.zb2x(hZ7S.artists, " / ");
			e4i.picUrl = hZ7S.newCover || hZ7S.cover;
			break;
		case 70:
			e4i.title = hZ7S.name;
			e4i.author = (hZ7S.dj || []).nickname;
			e4i.picUrl = hZ7S.picUrl;
			e4i.category = hZ7S.category;
			break;
		default:
			break
		}
		return e4i
	};
	l4p.bMy4C = function() {
		return location.hostname.indexOf("igame.163.com") >= 0
	};
	l4p.SY1x = function(ev6p, nX9O, e4i) {
		var bL4P, bf4j, m4q;
		var gS7L = null;
		var vB1x = 0;
		if (!e4i) e4i = {};
		var xQ2x = function() {
				vB1x = e4i.leading === false ? 0 : +(new Date);
				gS7L = null;
				m4q = ev6p.apply(bL4P, bf4j);
				if (!gS7L) bL4P = bf4j = null
			};
		return function() {
			var eS6M = +(new Date);
			if (!vB1x && e4i.leading === false) vB1x = eS6M;
			var Hl5q = nX9O - (eS6M - vB1x);
			bL4P = this;
			bf4j = arguments;
			if (Hl5q <= 0 || Hl5q > nX9O) {
				if (gS7L) {
					clearTimeout(gS7L);
					gS7L = null
				}
				vB1x = eS6M;
				m4q = ev6p.apply(bL4P, bf4j);
				if (!gS7L) bL4P = bf4j = null
			} else if (!gS7L && e4i.trailing !== false) {
				gS7L = setTimeout(xQ2x, Hl5q)
			}
			return m4q
		}
	};
	l4p.Jo6i = function(ev6p, nX9O, pf9W) {
		var gS7L, bf4j, bL4P, Cc3x, m4q;
		var xQ2x = function() {
				var gt6n = new Date - Cc3x;
				if (gt6n < nX9O && gt6n >= 0) {
					gS7L = setTimeout(xQ2x, nX9O - gt6n)
				} else {
					gS7L = null;
					if (!pf9W) {
						m4q = ev6p.apply(bL4P, bf4j);
						if (!gS7L) bL4P = bf4j = null
					}
				}
			};
		return function() {
			bL4P = this;
			bf4j = arguments;
			Cc3x = new Date;
			var SJ1x = pf9W && !gS7L;
			if (!gS7L) gS7L = setTimeout(xQ2x, nX9O);
			if (SJ1x) {
				m4q = ev6p.apply(bL4P, bf4j);
				bL4P = bf4j = null
			}
			return m4q
		}
	};
	l4p.SF1x = function(g4k, hs7l) {
		if (g4k) {
			var g4k = g4k.firstElementChild;
			if (g4k) {
				g4k.firstElementChild && (g4k = g4k.firstElementChild);
				g4k.setAttribute("xlink:href", "/style/pc/svg/" + hs7l)
			}
		}
	};
	l4p.bNO4S = function(ep6j) {
		if (!ep6j || !ep6j.length) {
			return
		}
		ep6j = /^#(.+?)#$/.exec(ep6j)[1];
		ep6j = ep6j.replace(/\s/g, " ");
		v4z.bm4q("/api/act/detail", {
			type: "json",
			method: "post",
			data: k4o.cD5I({
				actname: ep6j
			}),
			onload: function(Q4U) {
				if (!Q4U || Q4U.code != 200 || !Q4U.act) {
					n4r.Z4d.J4N({
						type: 2,
						tip: "该话题暂未创建"
					})
				} else {
					location.dispatch2("/activity?id=" + Q4U.act.actId)
				}
			},
			onerror: function(ca4e) {
				n4r.Z4d.J4N({
					type: 2,
					tip: "操作失败，请稍后再试"
				})
			}
		})
	};
	l4p.czU5Z = function(ep6j) {
		if (!ep6j || !ep6j.length) {
			return
		}
		var SA1x = location.host;
		ep6j = /^#(.+?)#$/.exec(ep6j)[1];
		ep6j = ep6j.replace(/\s/g, " ");
		v4z.bm4q("/api/act/detail", {
			type: "json",
			method: "post",
			data: k4o.cD5I({
				actname: ep6j
			}),
			onload: function(Q4U) {
				if (!Q4U || Q4U.code != 200 || !Q4U.act) {
					cy5D.im7f("该话题暂未创建")
				} else {
					cy5D.AW3x(SA1x + "/activity?id=" + Q4U.act.actId)
				}
			},
			onerror: function(ca4e) {
				cy5D.im7f("操作失败，请稍后再试")
			}
		})
	};
	l4p.bsq9h = function(xL2x, sJ1x) {
		if (!xL2x || !sJ1x) return false;
		if (xL2x == sJ1x) return true;
		return l4p.bsq9h(xL2x, sJ1x.parentNode)
	};
	a3x.cH5M = function(bI4M, iT7M) {
		if (!bI4M) return null;
		if (!iT7M) return bI4M.firstChild;
		return a3x.H4L(bI4M, iT7M)[0]
	};
	l4p.bOO4S = function(hX7Q) {
		return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(hX7Q)
	};
	l4p.bPp4t = function(hX7Q, Sy1x) {
		Sy1x = Sy1x || "86";
		if (Sy1x == "86") return /^\d{11}$/.test(hX7Q);
		return /^\d+$/.test(hX7Q)
	};
	l4p.cFV6P = function(vY2x) {
		if (!vY2x) {
			return "0b"
		}
		var czR5W = ["Bytes", "KB", "MB", "GB"];
		var bc4g = Math.floor(Math.log(vY2x) / Math.log(1024));
		return (vY2x / Math.pow(1024, Math.floor(bc4g))).toFixed(bc4g == 1 ? 0 : 1) + czR5W[bc4g]
	};
	l4p.bPK5P = function(dJ5O, fo6i, czQ5V) {
		if (!dJ5O) return dJ5O;
		var dt5y = k4o.fv6p(dJ5O);
		if (dt5y <= fo6i) return dJ5O;
		var bsy9p = dt5y - dJ5O.length,
			bsz9q = dJ5O.length - bsy9p;
		var fE6y = Math.ceil(fo6i / 2),
			czO5T = fo6i,
			bQk5p = 0;
		if (bsy9p < fE6y) fE6y = fo6i - bsy9p;
		if (bsz9q < fo6i) fo6i = bsz9q + Math.ceil((fo6i - bsz9q) / 2);
		while (fE6y <= fo6i) {
			bQk5p = k4o.fv6p(dJ5O.substr(0, fE6y));
			var bsA9r = czO5T - bQk5p;
			if (bsA9r == 0) break;
			if (bsA9r == 1) {
				var czN5S = k4o.fv6p(dJ5O.charAt(fE6y));
				if (czN5S == 1) {
					fE6y++;
					break
				} else {
					break
				}
			}
			fE6y += Math.floor(bsA9r / 2)
		}
		return dJ5O.substr(0, fE6y) + ( !! czQ5V ? "" : "...")
	};
	l4p.czL5Q = function(bq4u) {
		bq4u = bq4u || 10;
		var cO5T = "";
		for (var i = 0; i < bq4u; i++) {
			cO5T += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
		}
		return cO5T
	};
	var czK5P = /([A-Za-z0-9 \.\-\(\)\!\?])/,
		czJ5O = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/,
		czI5N = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
	var bQY6S = function(czH5M) {
			var bq4u = k4o.DA4E(1, 5),
				czG5L = Math.random() < .5,
				iQ7J = "";
			if (czH5M) {
				if (czG5L) {
					while (bq4u >= 0) {
						iQ7J += czI5N[k4o.DA4E(0, 500)];
						bq4u--
					}
				} else {
					iQ7J = l4p.czL5Q(bq4u)
				}
			} else {
				iQ7J = k4o.TV1x(bq4u)
			}
			return '<div class="soil">' + iQ7J + "</div>"
		};
	l4p.bqt8l = function(eu6o) {
		eu6o = k4o.Dw4A(eu6o);
		try {
			var bq4u = eu6o.length,
				r4v = k4o.DA4E(1, bq4u - 1);
			while (r4v < bq4u) {
				if (czJ5O.test(eu6o.charAt(r4v))) {
					return k4o.dH5M(eu6o.slice(0, r4v)) + bQY6S(true) + k4o.dH5M(eu6o.slice(r4v))
				} else if (czK5P.test(eu6o.charAt(r4v))) {
					return k4o.dH5M(eu6o.slice(0, r4v)) + bQY6S() + k4o.dH5M(eu6o.slice(r4v))
				} else {
					r4v++
				}
			}
			return k4o.dH5M(eu6o)
		} catch (e) {
			return k4o.dH5M(eu6o)
		}
	};
	l4p.ZG3x = function(lo8g, mJ9A) {
		return "//nos.netease.com/" + lo8g + "/" + mJ9A
	};
	l4p.czE5J = function(fG6A) {
		var dQ5V = /(.+)(\.[^\.]+$)/.exec(fG6A);
		return dQ5V ? {
			filename: dQ5V[1],
			suffix: dQ5V[2]
		} : {
			filename: fG6A || "",
			suffix: ""
		}
	};
	l4p.bRp6j = function(bs4w, czB5G) {
		var dC5H = [];
		k4o.bd4h(bs4w, function(ib7U) {
			dC5H.push(czB5G(ib7U))
		});
		return dC5H
	};
	var czA5F = {
		title: "name",
		durationms: "duration",
		coverUrl: "cover",
		playTime: "playCount",
		vid: "id",
		subscribed: "subed"
	};
	l4p.bRy6s = function(yd2x) {
		var j4n = NEJ.X({}, yd2x);
		k4o.eI6C(yd2x, function(p4t, K4O) {
			var bRC6w = czA5F[K4O];
			if (bRC6w) {
				j4n[bRC6w] = p4t
			}
		});
		var RJ0x = yd2x.creator || [];
		if (!k4o.eL6F(RJ0x)) {
			RJ0x = [RJ0x]
		}
		if (RJ0x) {
			j4n.artists = [];
			k4o.bd4h(RJ0x, function(p4t) {
				j4n.artists.push({
					name: p4t.nickname || p4t.userName,
					id: p4t.userId
				})
			})
		}
		if ( !! yd2x.aliaName) {
			j4n.alias = [yd2x.aliaName]
		}
		if ( !! yd2x.transName) {
			j4n.transNames = [yd2x.transName]
		}
		return j4n
	};
	l4p.czy5D = function(Y4c) {
		return (Y4c || "").replace(/^https?:/, "")
	};
	l4p.GA5F = function(cO5T) {
		if (!k4o.fC6w(cO5T)) return cO5T;
		var dC5H = null;
		try {
			dC5H = JSON.parse(cO5T)
		} catch (_e) {}
		return dC5H
	};
	var czv5A = '<span class="s-fc7 f-tdn">${value}</span>';
	l4p.czu5z = function(cK5P, td1x, e4i) {
		e4i = e4i || {};
		if (!td1x) {
			return k4o.dH5M(cK5P)
		}
		cK5P = k4o.Dw4A(cK5P);
		var qh0x = [],
			bs4w = null,
			QP0x = new RegExp(l4p.bGT2x(td1x), "gi"),
			oW9N = e4i.tpl || czv5A;
		while (bs4w = QP0x.exec(cK5P)) {
			var dQ5V = {
				html: "",
				before: bs4w.index - 1,
				after: bs4w.index + bs4w[0].length
			};
			var GV5a = a3x.eB6v(oW9N);
			dQ5V.html = a3x.cd4h(GV5a, {
				value: k4o.dH5M(bs4w[0])
			});
			qh0x.push(dQ5V)
		}
		var bpU8M = qh0x.length,
			kx8p = {
				before: cK5P.length - 1,
				after: 0
			},
			dC5H = "";
		for (var i = 0; i <= bpU8M; i++) {
			var hA7t, fX6R;
			hA7t = (qh0x[i - 1] || kx8p).after;
			fX6R = (qh0x[i] || kx8p).before;
			if (fX6R >= hA7t && hA7t >= 0 && fX6R <= cK5P.length - 1) {
				dC5H += k4o.dH5M(cK5P.substring(hA7t, fX6R + 1))
			}
			if (qh0x[i]) {
				dC5H += qh0x[i].html
			}
		}
		return dC5H
	};
	l4p.oe9V = function() {
		if (!window.WM) {
			var g4k = document.createElement("script");
			var qk0x = window.location.hostname;
			var bSj6d = window.location.protocol;
			a3x.gJ7C(g4k, "type", "text/javascript");
			if (qk0x === "music.163.com") {
				a3x.gJ7C(g4k, "src", bSj6d + "//s3.music.126.net/js/web2/3rd/acstatic-dun.min.js")
			} else {
				a3x.gJ7C(g4k, "src", bSj6d + "//" + qk0x + "/js/web2/3rd/acstatic-dun.min.js")
			}
			g4k.onload = function(data) {
				initWatchman({
					productNumber: "YD00000558929251",
					onload: function(instance) {
						window.WM = instance
					}
				})
			};
			document.body.appendChild(g4k)
		}
	};
	l4p.sy0x = function(ou9l) {
		if (window.WM) {
			window.WM.getToken("bd5d2f973ef74cd2a61325a412ae54d9", ou9l)
		}
	};
	l4p.CS4W = function(ou9l) {
		if (window.WM) {
			window.WM.getToken("0b0cdd23ed1144a0b78de049edc09824", ou9l)
		}
	}
})();
(function() {
	var k4o = NEJ.P("nej.u");

	function czr5w() {
		var CU4Y = function(hY7R) {
				if (hY7R < -128) {
					return CU4Y(128 - (-128 - hY7R))
				} else if (hY7R >= -128 && hY7R <= 127) {
					return hY7R
				} else if (hY7R > 127) {
					return CU4Y(-129 + hY7R - 127)
				} else {
					throw new Error("1001")
				}
			};
		var czq5v = function(hY7R, bi4m) {
				return CU4Y(hY7R + bi4m)
			};
		var czp5u = function(Zc3x, btg9X) {
				if (Zc3x == null) {
					return null
				}
				if (btg9X == null) {
					return Zc3x
				}
				var qO0x = [];
				var czo5t = btg9X.length;
				for (var i = 0, bq4u = Zc3x.length; i < bq4u; i++) {
					qO0x[i] = czq5v(Zc3x[i], btg9X[i % czo5t])
				}
				return qO0x
			};
		var czn5s = function(Yv2x) {
				if (Yv2x == null) {
					return Yv2x
				}
				var qO0x = [];
				var czk5p = Yv2x.length;
				for (var i = 0, bq4u = czk5p; i < bq4u; i++) {
					qO0x[i] = CU4Y(0 - Yv2x[i])
				}
				return qO0x
			};
		var czh5m = function(btl9c, QS0x) {
				btl9c = CU4Y(btl9c);
				QS0x = CU4Y(QS0x);
				return CU4Y(btl9c ^ QS0x)
			};
		var bTq7j = function(QR0x, bts9j) {
				if (QR0x == null || bts9j == null || QR0x.length != bts9j.length) {
					return QR0x
				}
				var qO0x = [];
				var czg5l = QR0x.length;
				for (var i = 0, bq4u = czg5l; i < bq4u; i++) {
					qO0x[i] = czh5m(QR0x[i], bts9j[i])
				}
				return qO0x
			};
		var bTB7u = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
		var czf5k = function(dy5D) {
				var IX6R = [];
				IX6R.push(bTB7u[dy5D >>> 4 & 15]);
				IX6R.push(bTB7u[dy5D & 15]);
				return IX6R.join("")
			};
		var bTK7D = function(vY2x) {
				var bq4u = vY2x.length;
				if (vY2x == null || bq4u < 0) {
					return new String("")
				}
				var IX6R = [];
				for (var i = 0; i < bq4u; i++) {
					IX6R.push(czf5k(vY2x[i]))
				}
				return IX6R.join("")
			};
		var bTL7E = function(Ya2x) {
				if (Ya2x == null || Ya2x.length == 0) {
					return Ya2x
				}
				var btw9n = new String(Ya2x);
				var qO0x = [];
				var bq4u = btw9n.length / 2;
				var bi4m = 0;
				for (var i = 0; i < bq4u; i++) {
					var po9f = parseInt(btw9n.charAt(bi4m++), 16) << 4;
					var pp9g = parseInt(btw9n.charAt(bi4m++), 16);
					qO0x[i] = CU4Y(po9f + pp9g)
				}
				return qO0x
			};
		var bTW7P = function(cO5T) {
				if (cO5T == null || cO5T == undefined) {
					return cO5T
				}
				var Qy0x = encodeURIComponent(cO5T);
				var vY2x = [];
				var bUi7b = Qy0x.length;
				for (var i = 0; i < bUi7b; i++) {
					if (Qy0x.charAt(i) == "%") {
						if (i + 2 < bUi7b) {
							vY2x.push(bTL7E(Qy0x.charAt(++i) + "" + Qy0x.charAt(++i))[0])
						} else {
							throw new Error("1009")
						}
					} else {
						vY2x.push(Qy0x.charCodeAt(i))
					}
				}
				return vY2x
			};
		var czc5h = function(xh2x) {
				var bc4g = 0;
				bc4g += (xh2x[0] & 255) << 24;
				bc4g += (xh2x[1] & 255) << 16;
				bc4g += (xh2x[2] & 255) << 8;
				bc4g += xh2x[3] & 255;
				return bc4g
			};
		var cFX6R = function(bc4g) {
				var xh2x = [];
				xh2x[0] = bc4g >>> 24 & 255;
				xh2x[1] = bc4g >>> 16 & 255;
				xh2x[2] = bc4g >>> 8 & 255;
				xh2x[3] = bc4g & 255;
				return xh2x
			};
		var cyY5d = function(cV5a, btE9v, bq4u) {
				var dC5H = [];
				if (cV5a == null || cV5a.length == 0) {
					return dC5H
				}
				if (cV5a.length < bq4u) {
					throw new Error("1003")
				}
				for (var i = 0; i < bq4u; i++) {
					dC5H[i] = cV5a[btE9v + i]
				}
				return dC5H
			};
		var btI9z = function(cV5a, btE9v, se0x, cyT5Y, bq4u) {
				if (cV5a == null || cV5a.length == 0) {
					return se0x
				}
				if (se0x == null) {
					throw new Error("1004")
				}
				if (cV5a.length < bq4u) {
					throw new Error("1003")
				}
				for (var i = 0; i < bq4u; i++) {
					se0x[cyT5Y + i] = cV5a[btE9v + i]
				}
				return se0x
			};
		var cyQ5V = function(bq4u) {
				var bs4w = [];
				for (var i = 0; i < bq4u; i++) {
					bs4w[i] = 0
				}
				return bs4w
			};
		var cyP5U = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
		var IV6P = 64;
		var WZ2x = 64;
		var bVw7p = 4;
		var cyO5T = function(qJ0x) {
				var bVE7x = [];
				if (qJ0x == null || qJ0x == undefined || qJ0x.length == 0) {
					return cyQ5V(WZ2x)
				}
				if (qJ0x.length >= WZ2x) {
					return cyY5d(qJ0x, 0, WZ2x)
				} else {
					for (var i = 0; i < WZ2x; i++) {
						bVE7x[i] = qJ0x[i % qJ0x.length]
					}
				}
				return bVE7x
			};
		var cyN5S = function(WJ2x) {
				if (WJ2x == null || WJ2x.length % IV6P != 0) {
					throw new Error("1005")
				}
				var btP9G = [];
				var bi4m = 0;
				var cyM5R = WJ2x.length / IV6P;
				for (var i = 0; i < cyM5R; i++) {
					btP9G[i] = [];
					for (var j = 0; j < IV6P; j++) {
						btP9G[i][j] = WJ2x[bi4m++]
					}
				}
				return btP9G
			};
		var cyL5Q = function(bVU7N) {
				var po9f = bVU7N >>> 4 & 15;
				var pp9g = bVU7N & 15;
				var bi4m = po9f * 16 + pp9g;
				return cyP5U[bi4m]
			};
		var byh0x = function(btT9K) {
				if (btT9K == null) {
					return null
				}
				var byt0x = [];
				for (var i = 0, bq4u = btT9K.length; i < bq4u; i++) {
					byt0x[i] = cyL5Q(btT9K[i])
				}
				return byt0x
			};
		var byu0x = function(IS6M, qJ0x) {
				if (IS6M == null) {
					return null
				}
				if (IS6M.length == 0) {
					return []
				}
				if (IS6M.length % IV6P != 0) {
					throw new Error("1005")
				}
				qJ0x = cyO5T(qJ0x);
				var btY9P = qJ0x;
				var bub9S = cyN5S(IS6M);
				var Pu0x = [];
				var cyK5P = bub9S.length;
				for (var i = 0; i < cyK5P; i++) {
					var bue9V = byh0x(bub9S[i]);
					bue9V = byh0x(bue9V);
					var buf9W = bTq7j(bue9V, btY9P);
					var cyJ5O = czp5u(buf9W, czn5s(btY9P));
					buf9W = bTq7j(cyJ5O, qJ0x);
					btI9z(buf9W, 0, Pu0x, i * IV6P, IV6P);
					btY9P = bub9S[i]
				}
				var bze0x = [];
				btI9z(Pu0x, Pu0x.length - bVw7p, bze0x, 0, bVw7p);
				var bq4u = czc5h(bze0x);
				if (bq4u > Pu0x.length) {
					throw new Error("1006")
				}
				var qO0x = [];
				btI9z(Pu0x, 0, qO0x, 0, bq4u);
				return qO0x
			};
		var cyI5N = function(beA5F, K4O) {
				if (beA5F == null) {
					return null
				}
				var bzi0x = new String(beA5F);
				if (bzi0x.length == 0) {
					return []
				}
				var IS6M = bTL7E(bzi0x);
				if (K4O == null || K4O == undefined) {
					throw new Error("1007")
				}
				var qJ0x = bTW7P(K4O);
				return byu0x(IS6M, qJ0x)
			};
		this.cyH5M = function(beA5F, K4O) {
			var bui9Z = cyI5N(beA5F, K4O);
			var Hw5B = new String(bTK7D(bui9Z));
			var zy3x = [];
			var bun9e = Hw5B.length / 2;
			var bi4m = 0;
			for (var i = 0; i < bun9e; i++) {
				zy3x.push("%");
				zy3x.push(Hw5B.charAt(bi4m++));
				zy3x.push(Hw5B.charAt(bi4m++))
			}
			return zy3x.join("")
		};
		k4o.cAa5f = function(buo9f, K4O) {
			return k4o.cyG5L(k4o.cEu6o(buo9f), K4O)
		};
		k4o.cyG5L = function(buo9f, K4O) {
			var bui9Z = byu0x(buo9f, bTW7P(K4O));
			var Hw5B = new String(bTK7D(bui9Z));
			var zy3x = [];
			var bun9e = Hw5B.length / 2;
			var bi4m = 0;
			for (var i = 0; i < bun9e; i++) {
				zy3x.push("%");
				zy3x.push(Hw5B.charAt(bi4m++));
				zy3x.push(Hw5B.charAt(bi4m++))
			}
			return zy3x.join("")
		}
	}
	window.settmusic = (new czr5w).cyH5M
})();
(function() {
	var c3x = NEJ.P,
		br4v = NEJ.F,
		I4M = c3x("nej.ut"),
		k4o = c3x("nej.u"),
		h4l = c3x("nej.v"),
		v4z = c3x("nej.j"),
		q4u = c3x("nm.d"),
		l4p = c3x("nm.x"),
		K4O = "Search-tracks_",
		b3x;
	q4u.fp6j({
		"search-suggest": {
			url: "/api/search/suggest/web",
			type: "POST",
			format: function(Q4U) {
				return Q4U
			},
			onerror: function(Q4U, e4i) {
				if (Q4U.code == 407) {
					e4i.onForbidden()
				}
			}
		},
		"search-multimatch": {
			url: "/api/search/suggest/multimatch",
			type: "GET"
		},
		"search-list": {
			url: "/api/cloudsearch/get/web",
			type: "post",
			noescape: true,
			filter: function(e4i, bh4l) {
				window.log && window.log("searchkeywordclient", {
					type: this.cyF5K(parseInt(e4i.data.type)) || "suggest",
					keyword: e4i.data.s,
					offset: e4i.offset
				})
			},
			format: function(Q4U, e4i) {
				if (Q4U.abroad) {
					try {
						Q4U.result = JSON.parse(decodeURIComponent(settmusic(Q4U.result, q4u.sk)))
					} catch (e) {}
				}
				Q4U.result = Q4U.result || {};
				var i4m, cB5G, hM7F = [],
					pA0x = e4i.data.s || "",
					gc6W = e4i.data.limit,
					u4y = parseInt(e4i.data.type) || 1,
					m4q = Q4U.result;
				switch (u4y) {
				case 1:
					i4m = this.bzK0x(m4q.songs, e4i.data.hlpretag, e4i.data.hlposttag);
					cB5G = m4q.songCount;
					break;
				case 10:
					i4m = m4q.albums;
					cB5G = m4q.albumCount;
					break;
				case 100:
					i4m = m4q.artists;
					cB5G = m4q.artistCount;
					break;
				case 1e3:
					i4m = m4q.playlists;
					cB5G = m4q.playlistCount;
					break;
				case 1002:
					i4m = m4q.userprofiles;
					cB5G = m4q.userprofileCount;
					break;
				case 1004:
					i4m = m4q.mvs;
					cB5G = m4q.mvCount;
					break;
				case 1014:
					i4m = l4p.bRp6j(m4q.videos, l4p.bRy6s);
					cB5G = m4q.videoCount;
					break;
				case 1006:
					i4m = this.bzK0x(m4q.songs, e4i.data.hlpretag, e4i.data.hlposttag);
					cB5G = m4q.songCount;
					break;
				case 1009:
					var qG0x = m4q.djRadios;
					if ( !! qG0x) {
						k4o.bd4h(qG0x, function(D4H, r4v, cyE5J) {
							D4H.xid = D4H.id;
							D4H.id = D4H.id + "_rad"
						});
						if (qG0x.length) {
							this.wh2x("radio_search-" + e4i.data.s, qG0x)
						}
					}
					cB5G = Math.min(m4q.djprogramCount, 500);
					i4m = m4q.djprograms || [];
					if (e4i.data.isPub) {
						k4o.nk9b(qG0x, function(D4H, r4v, cyE5J) {
							D4H.stype = 1;
							i4m.unshift(D4H)
						});
						cB5G = Math.min(i4m.length, 500)
					}
					break
				}
				this.z4D("onsearchload", Q4U);
				if (i4m && i4m.length) {
					for (var i = 0; i < gc6W; i++) {
						if (i < i4m.length) {
							hM7F.push(i4m[i])
						} else {
							hM7F.push(null)
						}
					}
				}
				return {
					more: !0,
					total: Math.min(cB5G || 0, pA0x.length < 3 ? 500 : 5e3),
					list: hM7F
				}
			},
			onerror: function(Q4U, e4i) {
				e4i.onload(e4i, []);
				if (k4o.gK7D(e4i.onerror)) {
					e4i.onerror(Q4U)
				}
			}
		}
	});
	q4u.HB5G = NEJ.C();
	b3x = q4u.HB5G.N4R(q4u.hJ7C);
	b3x.cw5B = function() {
		this.cE5J()
	};
	b3x.cyD5I = function(K4O, e4i) {
		if (!K4O) return;
		if ( !! this.bzQ1x) v4z.ky8q(this.bzQ1x);
		this.bzQ1x = this.cp5u("search-suggest", NEJ.X({
			data: {
				s: K4O,
				limit: 8
			}
		}, e4i))
	};
	b3x.cyA5F = function(K4O, e4i) {
		if (!K4O) return;
		this.cp5u("search-multimatch", NEJ.X({
			data: {
				s: K4O
			}
		}, e4i))
	};
	b3x.bzK0x = function() {
		var cyz5E = function(hB7u, bzU1x, bzV1x) {
				var cyy5D = hB7u.match(new RegExp(bzU1x + "(.+?)" + bzV1x, "gi")),
					cz5E = 0;
				k4o.bd4h(cyy5D, function(p4t) {
					cz5E += p4t.replace(new RegExp(bzU1x, "g"), "").replace(new RegExp(bzV1x, "g"), "").length
				});
				return cz5E
			};
		return function(jx8p, cyx5C, cyw5B) {
			var bAj1x = [];
			k4o.bd4h(jx8p, function(bj4n, bc4g) {
				bj4n = l4p.GB5G(bj4n);
				var baD3x = bj4n.lyrics || [],
					dt5y = baD3x.length,
					jY8Q = 0,
					cB5G = 4,
					ban3x = {
						l: 0,
						v: 0
					},
					buW9N;
				if (dt5y > 4) {
					k4o.bd4h(baD3x, function(hB7u, r4v) {
						var bAq1x = cyz5E(hB7u, cyx5C, cyw5B);
						if (bAq1x > ban3x.v) {
							ban3x.v = bAq1x;
							ban3x.l = r4v
						}
					});
					jY8Q = ban3x.l;
					jY8Q = Math.max(jY8Q, 0);
					buW9N = dt5y - jY8Q - 4;
					if (buW9N < 0) jY8Q += buW9N;
					bj4n.lrcAbstractEnd = jY8Q + cB5G - 1
				} else {
					bj4n.lrcAbstractEnd = dt5y - 1
				}
				bj4n.lrcAbstractStart = jY8Q;
				bj4n.indexId = (baD3x && baD3x.length ? "L" : "NL") + bj4n.id;
				bAj1x.push(bj4n)
			});
			return bAj1x
		}
	}();
	b3x.cyF5K = function(u4y) {
		switch (u4y) {
		case 1:
			return "song";
			break;
		case 100:
			return "artist";
			break;
		case 10:
			return "album";
			break;
		case 1004:
			return "mv";
			break;
		case 1014:
			return "video";
			break;
		case 1006:
			return "lyric";
			break;
		case 1e3:
			return "list";
			break;
		case 1009:
			return "djradio";
			break;
		case 1002:
			return "user";
			break;
		default:
			return "suggest";
			break
		}
	}
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		I4M = c3x("nej.ut"),
		v4z = c3x("nej.j"),
		q4u = c3x("nm.d"),
		l4p = c3x("nm.x"),
		E4I = c3x("nm.m"),
		n4r = c3x("nm.l"),
		dw5B = c3x("nm.i"),
		M4Q = c3x("nm.m.sch"),
		b3x, L4P;
	var ZW3x = {
		songs: 1,
		artists: 100,
		albums: 10,
		playlists: 1e3,
		mvs: 1004
	};
	M4Q.NK9B = NEJ.C();
	b3x = M4Q.NK9B.N4R(I4M.cJ5O);
	b3x.cw5B = function(g4k) {
		this.cE5J();
		this.bW4a(g4k);
		this.S4W = q4u.HB5G.gm6g()
	};
	b3x.bW4a = function(g4k) {
		this.o4s = g4k;
		var i4m = a3x.H4L(g4k, "j-flag");
		this.eT6N = i4m[0];
		this.buZ9Q = i4m[1];
		this.cr5w = i4m[2];
		this.nu9l = i4m[3];
		h4l.s4w(this.eT6N, "input", this.gg6a.f4j(this));
		h4l.s4w(this.eT6N, "keyup", this.gg6a.f4j(this));
		h4l.s4w(this.eT6N, "focus", this.gQ7J.f4j(this));
		h4l.s4w(this.buZ9Q, "click", this.gQ7J.f4j(this));
		h4l.s4w(this.eT6N, "blur", this.bva9R.f4j(this));
		h4l.s4w(this.cr5w, "click", this.Zw3x.f4j(this));
		h4l.s4w(this.o4s, "keydown", this.bve9V.f4j(this));
		h4l.s4w(this.o4s, "keypress", this.Zo3x.f4j(this));
		h4l.s4w(this.nu9l, "mouseover", this.Ny9p.f4j(this));
		h4l.s4w(this.nu9l, "mouseout", this.Ny9p.f4j(this));
		if (this.eT6N.value) {
			this.eT6N.value = ""
		}
		if (this.eT6N.style.opacity != null) {
			this.eT6N.style.opacity = 1
		}
	};
	b3x.gg6a = function(d4h) {
		if (d4h.type == "keyup" && d4h.keyCode == 8 || d4h.keyCode == 46) {
			this.HI5N()
		} else if (d4h.type == "input" || d4h.type == "propertychange") {
			setTimeout(this.HI5N.f4j(this), 0)
		}
	};
	b3x.gQ7J = function() {
		this.Aj3x(this.buZ9Q, !1);
		a3x.y4C(this.o4s, "m-srch-fcs");
		this.eT6N.focus();
		this.HI5N();
		a3x.y4C((a3x.H4L("g-topbar", "j-showoff") || [])[0], "f-hide")
	};
	b3x.bva9R = function() {
		if (!this.eT6N.value) {
			this.Aj3x(this.buZ9Q, !0)
		}
		var HJ5O = a3x.H4L(this.nu9l, "slt");
		if (this.Yl2x(this.nu9l) && HJ5O.length > 0 && a3x.t4x(HJ5O[0], "type")) {
			var hs7l = HJ5O[0].href;
			if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hs7l)) {
				window.log("search", {
					rid: RegExp.$2,
					type: RegExp.$1,
					keyword: this.eT6N.value
				})
			}
			this.bvn9e(HJ5O[0].href)
		}
		this.Aj3x(this.nu9l, !1);
		a3x.x4B(this.o4s, "m-srch-fcs")
	};
	b3x.Aj3x = function(g4k, mi8a) {
		a3x.ba4e(g4k, "display", !mi8a ? "none" : "")
	};
	b3x.Yl2x = function(g4k) {
		return a3x.dh5m(g4k, "display") != "none"
	};
	b3x.HI5N = function() {
		var cyv5A = function(hX7Q) {
				hX7Q = k4o.Dw4A(hX7Q);
				var eG6A = this.o4s.clientWidth > 250 ? 41 : 17;
				if (l4p.Na7T(hX7Q) > eG6A) {
					hX7Q = l4p.AM3x(hX7Q, eG6A) + "..."
				}
				return k4o.dH5M(hX7Q)
			};
		var XK2x = function(m4q) {
				return m4q.songs && m4q.songs.length || m4q.albums && m4q.albums.length || m4q.artists && m4q.artists.length || m4q.playlists && m4q.playlists.length
			};
		var ou9l = function(td1x, d4h) {
				if (!l4p.bGA2x(this.eT6N) || l4p.kv8n(this.eT6N.value)) {
					this.Aj3x(this.nu9l, !1);
					return
				}
				d4h.keyword = k4o.dH5M(td1x);
				var dV5a = a3x.cd4h("m-search-suggest", d4h, {
					mark: l4p.czu5z.eA6u(this, td1x),
					cutStr: cyv5A.f4j(this)
				}),
					ug1x = d4h.result.order;
				this.nu9l.innerHTML = dV5a;
				this.Aj3x(this.nu9l, XK2x(d4h.result) ? !0 : !1);
				if ( !! ug1x && !! ug1x.length && ZW3x[ug1x[0]]) {
					this.bvq9h = {
						keyword: td1x,
						type: ZW3x[ug1x[0]]
					}
				}
			};
		var cyu5z = function() {
				this.Aj3x(this.nu9l, !1);
				return
			};
		return function() {
			var D4H = this.eT6N.value;
			if (l4p.kv8n(D4H)) {
				this.Aj3x(this.nu9l, !1);
				return
			}
			this.S4W.cyD5I(D4H, {
				onload: ou9l.f4j(this, D4H),
				onForbidden: cyu5z.f4j(this)
			})
		}
	}();
	b3x.Zo3x = function(d4h) {
		if (d4h.keyCode != 13) return;
		var HJ5O = a3x.H4L(this.nu9l, "slt");
		if (this.Yl2x(this.nu9l) && HJ5O.length > 0) {
			this.bvn9e(HJ5O[0].href);
			this.Aj3x(this.nu9l, !1);
			return
		}
		this.Zw3x();
		this.Aj3x(this.nu9l, !1)
	};
	b3x.bve9V = function(d4h) {
		if (!this.Yl2x(this.nu9l)) return;
		var i4m = a3x.H4L(this.nu9l, "xtag"),
			dt5y = i4m.length,
			r4v = k4o.di5n(i4m, function(p4t) {
				return a3x.bE4I(p4t, "slt")
			});
		switch (d4h.keyCode) {
		case 38:
			if (r4v >= 0) a3x.x4B(i4m[r4v], "slt");
			a3x.y4C(i4m[r4v <= 0 ? dt5y - 1 : r4v - 1], "slt");
			break;
		case 40:
			if (r4v >= 0) a3x.x4B(i4m[r4v], "slt");
			a3x.y4C(i4m[(r4v + 1) % dt5y], "slt");
			break
		}
	};
	b3x.Ny9p = function(d4h) {
		if (!this.Yl2x(this.nu9l)) return;
		var MY7R, F4J = h4l.X4b(d4h),
			i4m = a3x.H4L(this.nu9l, "xtag");
		if (F4J.tagName.toLowerCase() == "a") MY7R = F4J;
		else if (F4J.parentNode.tagName.toLowerCase() == "a") MY7R = F4J.parentNode;
		if (!MY7R) return;
		k4o.bd4h(i4m, function(p4t) {
			a3x.x4B(p4t, "slt");
			a3x.t4x(p4t, "type", "")
		});
		if (d4h.type == "mouseout") return;
		a3x.y4C(MY7R, "slt");
		a3x.t4x(MY7R, "type", "mouse")
	};
	b3x.Zw3x = function() {
		var dR5W = location.hash,
			r4v = dR5W.indexOf("?"),
			bv4z = k4o.hq7j(dR5W.substring(r4v + 1));
		bv4z.s = this.eT6N.value;
		if (l4p.kv8n(bv4z.s)) return;
		if (!bv4z.type && this.bvq9h && this.bvq9h.keyword == bv4z.s) {
			bv4z.type = this.bvq9h.type
		}
		this.bvn9e("/search/#/?" + k4o.cD5I(bv4z));
		this.eT6N.blur()
	};
	b3x.bvn9e = function(Y4c) {
		if (location.dispatch2) {
			location.dispatch2(Y4c)
		} else {
			location.href = Y4c
		}
	};
	M4Q.NK9B.cyt5y = function() {
		var i4m = a3x.H4L(document.body, "j-suggest");
		k4o.bd4h(i4m, function(p4t) {
			new M4Q.NK9B(p4t)
		})
	};
	M4Q.NK9B.cyt5y()
})();
(function() {
	var c3x = NEJ.P,
		br4v = NEJ.F,
		I4M = c3x("nej.ut"),
		k4o = c3x("nej.u"),
		h4l = c3x("nej.v"),
		v4z = c3x("nej.j"),
		q4u = c3x("nm.d"),
		b3x;
	q4u.fp6j({
		"mv_artist-list": {
			url: "/api/artist/mvs",
			type: "get",
			format: function(Q4U) {
				return {
					total: Q4U.size || 0,
					list: Q4U.mvs || []
				}
			}
		},
		"album_artist-list": {
			url: "/api/artist/albums/{id}",
			type: "get",
			format: function(Q4U) {
				return {
					total: Q4U.size || 0,
					list: Q4U.hotAlbums || []
				}
			}
		},
		"ydcailing_post-list": {
			url: "/api/cailing/all",
			type: "POST",
			format: function(Q4U) {
				return Q4U.result.songs
			}
		},
		"wo-list": {
			url: "/api/unicom/wo/content",
			format: function(Q4U, e4i) {
				if (e4i.offset == 0) {
					var qt0x = Q4U.data[0];
					this.z4D("onfirstload", qt0x);
					Q4U.data.splice(0, 1);
					return Q4U.data
				} else {
					return Q4U.data
				}
			}
		}
	});
	q4u.HL5Q = NEJ.C();
	b3x = q4u.HL5Q.N4R(q4u.hJ7C);
	b3x.cw5B = function() {
		this.cE5J()
	};
	b3x.bvw9n = function() {
		var sU1x = "LOCAL_FLAG";
		return function(u4y, cyr5w) {
			var j4n = this.FX5c(sU1x, {});
			if (j4n[u4y]) {
				return true
			} else {
				if (!cyr5w) {
					j4n[u4y] = true;
					this.wI2x(sU1x, j4n)
				}
				return false
			}
		}
	}()
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		k4o = c3x("nej.u"),
		O4S = c3x("nej.ut"),
		bvE9v;
	if ( !! O4S.op9g) return;
	O4S.op9g = NEJ.C();
	bvE9v = O4S.op9g.N4R(O4S.cJ5O);
	bvE9v.bl4p = function() {
		var cyq5v = function(d4h) {
				d4h.matched = d4h.source == d4h.target
			};
		return function(e4i) {
			e4i.oncheck = e4i.oncheck || cyq5v;
			this.bn4r(e4i);
			this.bU4Y = e4i.list;
			this.ji8a = e4i.dataset || "id";
			this.kQ8I = e4i.selected || "js-selected"
		}
	}();
	bvE9v.oa9R = function(D4H) {
		var F4J, d4h = {
			target: D4H
		};
		k4o.bd4h(this.bU4Y, function(g4k) {
			delete d4h.matched;
			d4h.source = a3x.t4x(g4k, this.ji8a);
			this.z4D("oncheck", d4h);
			if (!d4h.matched) {
				a3x.x4B(g4k, this.kQ8I)
			} else {
				F4J = g4k;
				a3x.y4C(g4k, this.kQ8I)
			}
		}, this);
		return F4J
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		a3x = c3x("nej.e"),
		O4S = c3x("nej.ut"),
		qm0x;
	if ( !! O4S.dg5l) return;
	O4S.dg5l = NEJ.C();
	qm0x = O4S.dg5l.N4R(O4S.cJ5O);
	qm0x.cw5B = function() {
		this.je7X = {};
		this.cE5J();
		this.bJ4N()
	};
	qm0x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.bvH9y = e4i.umi || "";
		this.Ci3x = e4i.dispatcher;
		this.IA5F = e4i.composite || bb4f;
		this.bne7X({
			onshow: this.fe6Y.f4j(this),
			onhide: this.kg8Y.f4j(this),
			onrefresh: this.eD6x.f4j(this),
			onmessage: this.qy0x.f4j(this),
			onbeforehide: this.cyp4t.f4j(this)
		})
	};
	qm0x.bC4G = function() {
		delete this.bvH9y;
		this.je7X = {};
		this.bF4J()
	};
	qm0x.vP1x = function(d4h) {
		if ( !! d4h) d4h.stopped = !0
	};
	qm0x.bJ4N = br4v;
	qm0x.fe6Y = br4v;
	qm0x.kg8Y = br4v;
	qm0x.eD6x = br4v;
	qm0x.qy0x = br4v;
	qm0x.cyp4t = br4v;
	qm0x.nw9n = function(nb9S, bG4K, fk6e) {
		this.Ci3x.bwp0x({
			to: nb9S,
			mode: fk6e || 0,
			data: bG4K,
			from: this.bvH9y
		})
	};
	qm0x.cFY6S = function(u4y, j4n) {
		this.Ci3x.Cp4t(u4y, {
			from: this.bvH9y,
			data: j4n
		})
	};
	qm0x.cGa6U = function() {
		this.Ci3x.ms9j.apply(this.Ci3x, arguments)
	};
	qm0x.cyj4n = function() {
		return this.je7X
	};
	a3x.bbh4l = function() {
		if ( !! window.dispatcher) {
			dispatcher.bDG1x.apply(dispatcher, arguments)
		}
	}
})();
(function() {
	var c3x = NEJ.P,
		br4v = NEJ.F,
		bb4f = NEJ.O,
		a3x = c3x("nej.e"),
		k4o = c3x("nej.u"),
		O4S = c3x("nej.ut"),
		zU3x;
	if ( !! O4S.du5z) return;
	O4S.du5z = NEJ.C();
	zU3x = O4S.du5z.N4R(O4S.dg5l);
	zU3x.cyi4m = function(e4i) {
		var bI4M;
		if (!bI4M) {
			var j4n = e4i.input || bb4f;
			bI4M = a3x.B4F(j4n.parent)
		}
		if (!bI4M) {
			var j4n = e4i.data || bb4f;
			bI4M = a3x.B4F(j4n.parent)
		}
		if (!bI4M) {
			bI4M = a3x.B4F(e4i.parent)
		}
		return bI4M
	};
	zU3x.fe6Y = function(e4i) {
		var bI4M = this.cyi4m(e4i);
		if ( !! bI4M && !! this.o4s) bI4M.appendChild(this.o4s);
		this.gM7F(e4i);
		this.bDW2x("onshow", e4i);
		this.eD6x(e4i)
	};
	zU3x.eD6x = function(e4i) {
		this.gj6d(e4i);
		this.bDW2x("onrefresh", e4i)
	};
	zU3x.kg8Y = function() {
		this.lq8i();
		this.cyh4l();
		a3x.mS9J(this.o4s)
	};
	zU3x.bEa2x = function() {
		var gL7E = /^onshow|onrefresh|delay$/;
		return function(ck4o) {
			return gL7E.test(ck4o)
		}
	}();
	zU3x.bEc2x = br4v;
	zU3x.bDW2x = function() {
		var bEd2x = function(bv4z, e4i, ck4o, qr0x) {
				if (this.bEa2x(qr0x)) return;
				if ( !! bv4z) ck4o += (ck4o.indexOf("?") > 1 ? "&" : "?") + bv4z;
				var dn5s = this.bEc2x(qr0x, e4i) || {};
				dn5s.location = e4i;
				dn5s.parent = this.je7X[qr0x];
				this.Ci3x.is7l(ck4o, {
					input: dn5s
				})
			};
		return function(u4y, e4i) {
			if (!e4i.nodelay) {
				if ( !! this.IA5F.delay) return;
				var bEj2x = this.IA5F[u4y] || bb4f;
				if (bEj2x.delay) return
			}
			var bv4z = k4o.cD5I(e4i.param) || "";
			if (u4y == "onrefresh") {
				k4o.eI6C(this.IA5F, bEd2x.f4j(this, bv4z, e4i))
			}
			k4o.eI6C(bEj2x, bEd2x.f4j(this, bv4z, e4i))
		}
	}();
	zU3x.cyh4l = function() {
		var Dt4x = function(ck4o, qr0x) {
				if (!this.bEa2x(qr0x)) this.Ci3x.bt4x(ck4o)
			};
		return function() {
			k4o.eI6C(this.IA5F, Dt4x, this);
			k4o.eI6C(this.IA5F.onshow, Dt4x, this);
			k4o.eI6C(this.IA5F.onrefresh, Dt4x, this)
		}
	}()
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		I4M = c3x("nej.ut"),
		v4z = c3x("nej.j"),
		k4o = c3x("nej.u"),
		E4I = c3x("nm.m"),
		l4p = c3x("nm.x"),
		q4u = c3x("nm.d"),
		b3x, L4P;
	E4I.SS1x = NEJ.C();
	b3x = E4I.SS1x.N4R(I4M.cJ5O);
	b3x.cw5B = function() {
		this.cE5J();
		this.o4s = a3x.B4F("g-topbar");
		var i4m = a3x.H4L(this.o4s, "j-tflag");
		this.bws0x = i4m[0];
		this.HO5T = i4m[1];
		this.bEo2x = i4m[2];
		this.bwy0x = i4m[3];
		this.cyg4k = I4M.op9g.A4E({
			list: this.bws0x.getElementsByTagName("a"),
			selected: "z-slt",
			dataset: "module"
		});
		this.bwB0x = I4M.op9g.A4E({
			list: this.bwy0x.getElementsByTagName("a"),
			selected: "z-slt",
			dataset: "module"
		});
		this.bX4b([
			[this.o4s, "click", this.Sg1x.f4j(this)],
			[this.HO5T, "click", this.cM5R.f4j(this)],
			[this.HO5T, "mouseout", this.bEA2x.f4j(this, 0)],
			[this.HO5T, "mouseover", this.bEA2x.f4j(this, 1)]
		]);
		window.scrollTopbar = this.cyf4j.f4j(this);
		window.matchNav = this.bED2x.f4j(this);
		window.polling = this.vr1x.f4j(this);
		this.bwJ0x = q4u.HL5Q.A4E();
		this.cye4i();
		this.Iu5z();
		var bv4z = k4o.hq7j(location.href.split("?")[1]) || {};
		if (bv4z.market) {
			a3x.B4F("topbar-download-link").href = "/download?market=" + bv4z.market
		}
		var bxd0x = a3x.H4L(this.o4s, "j-showoff");
		if (bxd0x && !this.bwJ0x.bvw9n("newMvSearch")) {
			a3x.x4B(bxd0x[0], "f-hide");
			window.setTimeout(function() {
				a3x.y4C(bxd0x[0], "f-hide")
			}, 5e3)
		}
		l4p.oe9V()
	};
	b3x.vr1x = function(d4h) {
		var dR5W = l4p.Kl6f();
		if (!/^\/msg/.test(dR5W)) {
			var wS2x = 0;
			wS2x += d4h.comment;
			wS2x += d4h.forward;
			wS2x += d4h.msg;
			wS2x += d4h.notice;
			if (wS2x > 0) {
				wS2x = wS2x > 99 ? "99+" : wS2x;
				this.Ri0x.innerText = wS2x;
				this.Is5x.innerText = wS2x;
				a3x.x4B(this.Ri0x, "f-hide");
				a3x.x4B(this.Is5x, "f-hide");
				this.bfk5p = true
			} else {
				a3x.y4C(this.Ri0x, "f-hide");
				a3x.y4C(this.Is5x, "f-hide");
				this.bfk5p = false
			}
			var eW6Q = "/at";
			if (d4h.notice) eW6Q = "/notify";
			if (d4h.comment) eW6Q = "/comment";
			if (d4h.msg > 0) eW6Q = "/private";
			if (d4h.forward > 0) eW6Q = "/at";
			this.Is5x.parentNode.href = "/msg/#" + eW6Q
		} else {
			this.Is5x.parentNode.href = "javascript:;";
			a3x.y4C(this.Ri0x, "f-hide");
			a3x.y4C(this.Is5x, "f-hide");
			this.bfk5p = false
		}
		var i4m = a3x.H4L(this.bws0x, "j-t");
		if (!/^\/friend/.test(dR5W)) {
			if (i4m && i4m.length) {
				a3x.ba4e(i4m[0], "display", d4h.event > 0 ? "" : "none")
			}
		} else {
			a3x.ba4e(i4m[0], "display", "none")
		}
	};
	b3x.cM5R = function(d4h) {
		var g4k = h4l.X4b(d4h, "d:action");
		if (g4k) {
			switch (a3x.t4x(g4k, "action")) {
			case "login":
				h4l.cn4r(d4h);
				var u4y = a3x.t4x(g4k, "type");
				if (u4y) {
					if (u4y == "sina" || u4y == "tencent") {
						this.CQ4U = g4k.href;
						l4p.CS4W(this.kV8N.f4j(this))
					} else top.login(u4y == "mobile" ? 0 : 3)
				} else {
					top.login()
				}
				break;
			case "logout":
				h4l.cn4r(d4h);
				top.logout();
				break;
			case "viewStore":
				if (!this.bwJ0x.bvw9n("storeNew")) {
					a3x.y4C(this.cGb6V, "f-vhide")
				}
				break;
			case "viewLevel":
				if (!this.bwJ0x.bvw9n("levelNew")) {
					a3x.y4C(this.cGc6W, "f-vhide")
				}
				break
			}
		}
	};
	b3x.kV8N = function(cG5L) {
		this.CQ4U += "&checkToken=" + cG5L || "";
		top.open(this.CQ4U)
	};
	b3x.Sg1x = function(d4h) {
		var g4k = h4l.X4b(d4h, "d:action");
		if (!g4k) return;
		var V4Z = a3x.t4x(g4k, "action");
		switch (V4Z) {
		case "bilog":
			var bxv0x = a3x.t4x(g4k, "logAction"),
				bxz0x = a3x.t4x(g4k, "logJson");
			window.log(bxv0x, bxz0x);
			break
		}
	};
	b3x.bEA2x = function(Ir5w, d4h) {
		if (this.bxA0x) {
			this.bxA0x.style.display = !Ir5w ? "none" : "";
			(Ir5w || !this.bfk5p ? a3x.y4C : a3x.x4B).call(window, this.Ri0x, "f-hide")
		}
	};
	b3x.cyf4j = function(ga6U) {
		a3x.ba4e(this.o4s, "top", -ga6U + "px")
	};
	b3x.bED2x = function(eW6Q, cyb4f) {
		this.cyg4k.oa9R(eW6Q);
		if (eW6Q == "discover") {
			a3x.y4C(this.bEo2x, "f-hide");
			a3x.x4B(this.bwy0x, "f-hide");
			window.g_topBarHeight = 105;
			this.bwB0x.oa9R(cyb4f)
		} else {
			a3x.x4B(this.bEo2x, "f-hide");
			a3x.y4C(this.bwy0x, "f-hide");
			window.g_topBarHeight = 75
		}
	};
	b3x.cye4i = function() {
		var en6h = a3x.B4F("g_iframe");
		if (!en6h) return;
		var gy7r = en6h.contentWindow.document.getElementById("g_top");
		this.bED2x(a3x.t4x(gy7r, "module"), a3x.t4x(gy7r, "sub"))
	};
	var Xd2x = {},
		bFt2x = /\/\/\w+/,
		cya4e = {
			avatarUrl: function(a, b) {
				a = a || "";
				b = b || "";
				return a.replace(bFt2x, "") !== b.replace(bFt2x, "")
			},
			userId: true,
			nickname: true,
			reward: true,
			topic: true,
			djStatus: true
		};
	b3x.cxW4a = function(bcQ4U) {
		var nU9L = k4o.di5n(cya4e, function(D4H, K4O) {
			if (k4o.gK7D(D4H)) {
				return D4H(bcQ4U[K4O], Xd2x[K4O])
			} else {
				return bcQ4U[K4O] !== Xd2x[K4O]
			}
		});
		Xd2x = bcQ4U;
		return bcQ4U[nU9L]
	};
	b3x.Iu5z = function() {
		var dp5u = GUser || {},
			cxV4Z = GUserAcc || {};
		if (dp5u && dp5u.userId) {
			var bFH2x = NEJ.X(dp5u, cxV4Z);
			if (this.cxW4a(bFH2x)) {
				a3x.dA5F(this.HO5T, "m-topbar-user-login", bFH2x)
			}
		} else {
			Xd2x = {};
			this.HO5T.innerHTML = a3x.iH7A("m-topbar-user-unlogin");
			var i4m = a3x.H4L(this.bws0x, "j-t");
			a3x.ba4e(i4m[0], "display", "none")
		}
		a3x.x4B(this.HO5T, "f-hide");
		this.bfk5p = false;
		var i4m = a3x.H4L(this.HO5T, "j-uflag");
		if (dp5u && dp5u.userId) {
			this.Ri0x = i4m.shift();
			this.bxA0x = i4m.shift();
			this.Is5x = i4m.shift()
		} else {
			this.bxA0x = i4m.shift()
		}
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		h4l = c3x("nej.v"),
		I4M = c3x("nej.ut"),
		q4u = c3x("nm.d"),
		b3x, L4P;
	q4u.fp6j({
		"polling-get": {
			type: "GET",
			url: "/api/pl/count",
			format: function(Q4U) {
				h4l.z4D(q4u.tq1x, "message", Q4U)
			}
		}
	});
	q4u.tq1x = NEJ.C();
	b3x = q4u.tq1x.N4R(q4u.hJ7C);
	b3x.bce4i = function() {
		this.cp5u("polling-get", {})
	};
	b3x.uL1x = function() {
		var eg6a;
		return function() {
			if ( !! eg6a) return;
			eg6a = window.setInterval(this.bce4i.f4j(this), 1e5);
			this.bce4i()
		}
	}();
	I4M.fK6E.A4E({
		event: "message",
		element: q4u.tq1x
	})
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function() {
	(function(exports, global) {
		var io = exports;
		io.version = "0.9.16";
		io.protocol = 1;
		io.transports = [];
		io.j = [];
		io.sockets = {};
		io.connect = function(host, details) {
			var uri = io.util.parseUri(host),
				uuri, socket;
			if (global && global.location) {
				uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
				uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
				uri.port = uri.port || global.location.port
			}
			uuri = io.util.uniqueUri(uri);
			var options = {
				host: uri.host,
				secure: "https" == uri.protocol,
				port: uri.port || ("https" == uri.protocol ? 443 : 80),
				query: uri.query || ""
			};
			io.util.merge(options, details);
			if (options["force new connection"] || !io.sockets[uuri]) {
				socket = new io.Socket(options)
			}
			if (!options["force new connection"] && socket) {
				io.sockets[uuri] = socket
			}
			socket = socket || io.sockets[uuri];
			return socket.of(uri.path.length > 1 ? uri.path : "")
		}
	})("object" === typeof module ? module.exports : this.io = {}, this);
	(function(exports, global) {
		var util = exports.util = {};
		var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
		var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
		util.parseUri = function(str) {
			var m = re.exec(str || ""),
				uri = {},
				i = 14;
			while (i--) {
				uri[parts[i]] = m[i] || ""
			}
			return uri
		};
		util.uniqueUri = function(uri) {
			var protocol = uri.protocol,
				host = uri.host,
				port = uri.port;
			if ("document" in global) {
				host = host || document.domain;
				port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
			} else {
				host = host || "localhost";
				if (!port && protocol == "https") {
					port = 443
				}
			}
			return (protocol || "http") + "://" + host + ":" + (port || 80)
		};
		util.query = function(base, addition) {
			var query = util.chunkQuery(base || ""),
				components = [];
			util.merge(query, util.chunkQuery(addition || ""));
			for (var part in query) {
				if (query.hasOwnProperty(part)) {
					components.push(part + "=" + query[part])
				}
			}
			return components.length ? "?" + components.join("&") : ""
		};
		util.chunkQuery = function(qs) {
			var query = {},
				params = qs.split("&"),
				i = 0,
				l = params.length,
				kv;
			for (; i < l; ++i) {
				kv = params[i].split("=");
				if (kv[0]) {
					query[kv[0]] = kv[1]
				}
			}
			return query
		};
		var pageLoaded = false;
		util.load = function(fn) {
			if ("document" in global && document.readyState === "complete" || pageLoaded) {
				return fn()
			}
			util.on(global, "load", fn, false)
		};
		util.on = function(element, event, fn, capture) {
			if (element.attachEvent) {
				element.attachEvent("on" + event, fn)
			} else if (element.addEventListener) {
				element.addEventListener(event, fn, capture)
			}
		};
		util.request = function(xdomain) {
			if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
				return new XDomainRequest
			}
			if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
				return new XMLHttpRequest
			}
			if (!xdomain) {
				try {
					return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
				} catch (e) {}
			}
			return null
		};
		if ("undefined" != typeof window) {
			util.load(function() {
				pageLoaded = true
			})
		}
		util.defer = function(fn) {
			if (!util.ua.webkit || "undefined" != typeof importScripts) {
				return fn()
			}
			util.load(function() {
				setTimeout(fn, 100)
			})
		};
		util.merge = function merge(target, additional, deep, lastseen) {
			var seen = lastseen || [],
				depth = typeof deep == "undefined" ? 2 : deep,
				prop;
			for (prop in additional) {
				if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
					if (typeof target[prop] !== "object" || !depth) {
						target[prop] = additional[prop];
						seen.push(additional[prop])
					} else {
						util.merge(target[prop], additional[prop], depth - 1, seen)
					}
				}
			}
			return target
		};
		util.mixin = function(ctor, ctor2) {
			util.merge(ctor.prototype, ctor2.prototype)
		};
		util.inherit = function(ctor, ctor2) {
			function f() {}
			f.prototype = ctor2.prototype;
			ctor.prototype = new f
		};
		util.isArray = Array.isArray ||
		function(obj) {
			return Object.prototype.toString.call(obj) === "[object Array]"
		};
		util.intersect = function(arr, arr2) {
			var ret = [],
				longest = arr.length > arr2.length ? arr : arr2,
				shortest = arr.length > arr2.length ? arr2 : arr;
			for (var i = 0, l = shortest.length; i < l; i++) {
				if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
			}
			return ret
		};
		util.indexOf = function(arr, o, i) {
			for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {}
			return j <= i ? -1 : i
		};
		util.toArray = function(enu) {
			var arr = [];
			for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]);
			return arr
		};
		util.ua = {};
		util.ua.hasCORS = "undefined" != typeof XMLHttpRequest &&
		function() {
			try {
				var a = new XMLHttpRequest
			} catch (e) {
				return false
			}
			return a.withCredentials != undefined
		}();
		util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
		util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
	})("undefined" != typeof io ? io : module.exports, this);
	(function(exports, io) {
		exports.EventEmitter = EventEmitter;

		function EventEmitter() {}
		EventEmitter.prototype.on = function(name, fn) {
			if (!this.$events) {
				this.$events = {}
			}
			if (!this.$events[name]) {
				this.$events[name] = fn
			} else if (io.util.isArray(this.$events[name])) {
				this.$events[name].push(fn)
			} else {
				this.$events[name] = [this.$events[name], fn]
			}
			return this
		};
		EventEmitter.prototype.addListener = EventEmitter.prototype.on;
		EventEmitter.prototype.once = function(name, fn) {
			var self = this;

			function on() {
				self.removeListener(name, on);
				fn.apply(this, arguments)
			}
			on.listener = fn;
			this.on(name, on);
			return this
		};
		EventEmitter.prototype.removeListener = function(name, fn) {
			if (this.$events && this.$events[name]) {
				var list = this.$events[name];
				if (io.util.isArray(list)) {
					var pos = -1;
					for (var i = 0, l = list.length; i < l; i++) {
						if (list[i] === fn || list[i].listener && list[i].listener === fn) {
							pos = i;
							break
						}
					}
					if (pos < 0) {
						return this
					}
					list.splice(pos, 1);
					if (!list.length) {
						delete this.$events[name]
					}
				} else if (list === fn || list.listener && list.listener === fn) {
					delete this.$events[name]
				}
			}
			return this
		};
		EventEmitter.prototype.removeAllListeners = function(name) {
			if (name === undefined) {
				this.$events = {};
				return this
			}
			if (this.$events && this.$events[name]) {
				this.$events[name] = null
			}
			return this
		};
		EventEmitter.prototype.listeners = function(name) {
			if (!this.$events) {
				this.$events = {}
			}
			if (!this.$events[name]) {
				this.$events[name] = []
			}
			if (!io.util.isArray(this.$events[name])) {
				this.$events[name] = [this.$events[name]]
			}
			return this.$events[name]
		};
		EventEmitter.prototype.emit = function(name) {
			if (!this.$events) {
				return false
			}
			var handler = this.$events[name];
			if (!handler) {
				return false
			}
			var args = Array.prototype.slice.call(arguments, 1);
			if ("function" == typeof handler) {
				handler.apply(this, args)
			} else if (io.util.isArray(handler)) {
				var listeners = handler.slice();
				for (var i = 0, l = listeners.length; i < l; i++) {
					listeners[i].apply(this, args)
				}
			} else {
				return false
			}
			return true
		}
	})("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
	(function(exports, nativeJSON) {
		"use strict";
		if (nativeJSON && nativeJSON.parse) {
			return exports.JSON = {
				parse: nativeJSON.parse,
				stringify: nativeJSON.stringify
			}
		}
		var JSON = exports.JSON = {};

		function f(n) {
			return n < 10 ? "0" + n : n
		}
		function date(d, key) {
			return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
		}
		var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			gap, indent, meta = {
				"\b": "\\b",
				"\t": "\\t",
				"\n": "\\n",
				"\f": "\\f",
				"\r": "\\r",
				'"': '\\"',
				"\\": "\\\\"
			},
			rep;

		function quote(string) {
			escapable.lastIndex = 0;
			return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
				var c = meta[a];
				return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
			}) + '"' : '"' + string + '"'
		}
		function str(key, holder) {
			var i, k, v, length, mind = gap,
				partial, value = holder[key];
			if (value instanceof Date) {
				value = date(key)
			}
			if (typeof rep === "function") {
				value = rep.call(holder, key, value)
			}
			switch (typeof value) {
			case "string":
				return quote(value);
			case "number":
				return isFinite(value) ? String(value) : "null";
			case "boolean":
			case "null":
				return String(value);
			case "object":
				if (!value) {
					return "null"
				}
				gap += indent;
				partial = [];
				if (Object.prototype.toString.apply(value) === "[object Array]") {
					length = value.length;
					for (i = 0; i < length; i += 1) {
						partial[i] = str(i, value) || "null"
					}
					v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
					gap = mind;
					return v
				}
				if (rep && typeof rep === "object") {
					length = rep.length;
					for (i = 0; i < length; i += 1) {
						if (typeof rep[i] === "string") {
							k = rep[i];
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (gap ? ": " : ":") + v)
							}
						}
					}
				} else {
					for (k in value) {
						if (Object.prototype.hasOwnProperty.call(value, k)) {
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (gap ? ": " : ":") + v)
							}
						}
					}
				}
				v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
				gap = mind;
				return v
			}
		}
		JSON.stringify = function(value, replacer, space) {
			var i;
			gap = "";
			indent = "";
			if (typeof space === "number") {
				for (i = 0; i < space; i += 1) {
					indent += " "
				}
			} else if (typeof space === "string") {
				indent = space
			}
			rep = replacer;
			if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
				throw new Error("JSON.stringify")
			}
			return str("", {
				"": value
			})
		};
		JSON.parse = function(text, reviver) {
			var j;

			function walk(holder, key) {
				var k, v, value = holder[key];
				if (value && typeof value === "object") {
					for (k in value) {
						if (Object.prototype.hasOwnProperty.call(value, k)) {
							v = walk(value, k);
							if (v !== undefined) {
								value[k] = v
							} else {
								delete value[k]
							}
						}
					}
				}
				return reviver.call(holder, key, value)
			}
			text = String(text);
			cx.lastIndex = 0;
			if (cx.test(text)) {
				text = text.replace(cx, function(a) {
					return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
				})
			}
			if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
				j = eval("(" + text + ")");
				return typeof reviver === "function" ? walk({
					"": j
				}, "") : j
			}
			throw new SyntaxError("JSON.parse")
		}
	})("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
	(function(exports, io) {
		var parser = exports.parser = {};
		var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
		var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
		var advice = parser.advice = ["reconnect"];
		var JSON = io.JSON,
			indexOf = io.util.indexOf;
		parser.encodePacket = function(packet) {
			var type = indexOf(packets, packet.type),
				id = packet.id || "",
				endpoint = packet.endpoint || "",
				ack = packet.ack,
				data = null;
			switch (packet.type) {
			case "error":
				var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
					adv = packet.advice ? indexOf(advice, packet.advice) : "";
				if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv : "");
				break;
			case "message":
				if (packet.data !== "") data = packet.data;
				break;
			case "event":
				var ev = {
					name: packet.name
				};
				if (packet.args && packet.args.length) {
					ev.args = packet.args
				}
				data = JSON.stringify(ev);
				break;
			case "json":
				data = JSON.stringify(packet.data);
				break;
			case "connect":
				if (packet.qs) data = packet.qs;
				break;
			case "ack":
				data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
				break
			}
			var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
			if (data !== null && data !== undefined) encoded.push(data);
			return encoded.join(":")
		};
		parser.encodePayload = function(packets) {
			var decoded = "";
			if (packets.length == 1) return packets[0];
			for (var i = 0, l = packets.length; i < l; i++) {
				var packet = packets[i];
				decoded += "�" + packet.length + "�" + packets[i]
			}
			return decoded
		};
		var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
		parser.decodePacket = function(data) {
			var pieces = data.match(regexp);
			if (!pieces) return {};
			var id = pieces[2] || "",
				data = pieces[5] || "",
				packet = {
					type: packets[pieces[1]],
					endpoint: pieces[4] || ""
				};
			if (id) {
				packet.id = id;
				if (pieces[3]) packet.ack = "data";
				else packet.ack = true
			}
			switch (packet.type) {
			case "error":
				var pieces = data.split("+");
				packet.reason = reasons[pieces[0]] || "";
				packet.advice = advice[pieces[1]] || "";
				break;
			case "message":
				packet.data = data || "";
				break;
			case "event":
				try {
					var opts = JSON.parse(data);
					packet.name = opts.name;
					packet.args = opts.args
				} catch (e) {}
				packet.args = packet.args || [];
				break;
			case "json":
				try {
					packet.data = JSON.parse(data)
				} catch (e) {}
				break;
			case "connect":
				packet.qs = data || "";
				break;
			case "ack":
				var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
				if (pieces) {
					packet.ackId = pieces[1];
					packet.args = [];
					if (pieces[3]) {
						try {
							packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
						} catch (e) {}
					}
				}
				break;
			case "disconnect":
			case "heartbeat":
				break
			}
			return packet
		};
		parser.decodePayload = function(data) {
			if (data.charAt(0) == "�") {
				var ret = [];
				for (var i = 1, length = ""; i < data.length; i++) {
					if (data.charAt(i) == "�") {
						ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
						i += Number(length) + 1;
						length = ""
					} else {
						length += data.charAt(i)
					}
				}
				return ret
			} else {
				return [parser.decodePacket(data)]
			}
		}
	})("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
	(function(exports, io) {
		exports.Transport = Transport;

		function Transport(socket, sessid) {
			this.socket = socket;
			this.sessid = sessid
		}
		io.util.mixin(Transport, io.EventEmitter);
		Transport.prototype.heartbeats = function() {
			return true
		};
		Transport.prototype.onData = function(data) {
			this.clearCloseTimeout();
			if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
				this.setCloseTimeout()
			}
			if (data !== "") {
				var msgs = io.parser.decodePayload(data);
				if (msgs && msgs.length) {
					for (var i = 0, l = msgs.length; i < l; i++) {
						this.onPacket(msgs[i])
					}
				}
			}
			return this
		};
		Transport.prototype.onPacket = function(packet) {
			this.socket.setHeartbeatTimeout();
			if (packet.type == "heartbeat") {
				return this.onHeartbeat()
			}
			if (packet.type == "connect" && packet.endpoint == "") {
				this.onConnect()
			}
			if (packet.type == "error" && packet.advice == "reconnect") {
				this.isOpen = false
			}
			this.socket.onPacket(packet);
			return this
		};
		Transport.prototype.setCloseTimeout = function() {
			if (!this.closeTimeout) {
				var self = this;
				this.closeTimeout = setTimeout(function() {
					self.onDisconnect()
				}, this.socket.closeTimeout)
			}
		};
		Transport.prototype.onDisconnect = function() {
			if (this.isOpen) this.close();
			this.clearTimeouts();
			this.socket.onDisconnect();
			return this
		};
		Transport.prototype.onConnect = function() {
			this.socket.onConnect();
			return this
		};
		Transport.prototype.clearCloseTimeout = function() {
			if (this.closeTimeout) {
				clearTimeout(this.closeTimeout);
				this.closeTimeout = null
			}
		};
		Transport.prototype.clearTimeouts = function() {
			this.clearCloseTimeout();
			if (this.reopenTimeout) {
				clearTimeout(this.reopenTimeout)
			}
		};
		Transport.prototype.packet = function(packet) {
			this.send(io.parser.encodePacket(packet))
		};
		Transport.prototype.onHeartbeat = function(heartbeat) {
			this.packet({
				type: "heartbeat"
			})
		};
		Transport.prototype.onOpen = function() {
			this.isOpen = true;
			this.clearCloseTimeout();
			this.socket.onOpen()
		};
		Transport.prototype.onClose = function() {
			var self = this;
			this.isOpen = false;
			this.socket.onClose();
			this.onDisconnect()
		};
		Transport.prototype.prepareUrl = function() {
			var options = this.socket.options;
			return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
		};
		Transport.prototype.ready = function(socket, fn) {
			fn.call(this)
		}
	})("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
	(function(exports, io, global) {
		exports.Socket = Socket;

		function Socket(options) {
			this.options = {
				port: 80,
				secure: false,
				document: "document" in global ? document : false,
				resource: "socket.io",
				transports: io.transports,
				"connect timeout": 1e4,
				"try multiple transports": true,
				reconnect: true,
				"reconnection delay": 500,
				"reconnection limit": Infinity,
				"reopen delay": 3e3,
				"max reconnection attempts": 10,
				"sync disconnect on unload": false,
				"auto connect": true,
				"flash policy port": 10843,
				manualFlush: false
			};
			io.util.merge(this.options, options);
			this.connected = false;
			this.open = false;
			this.connecting = false;
			this.reconnecting = false;
			this.namespaces = {};
			this.buffer = [];
			this.doBuffer = false;
			if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
				var self = this;
				io.util.on(global, "beforeunload", function() {
					self.disconnectSync()
				}, false)
			}
			if (this.options["auto connect"]) {
				this.connect()
			}
		}
		io.util.mixin(Socket, io.EventEmitter);
		Socket.prototype.of = function(name) {
			if (!this.namespaces[name]) {
				this.namespaces[name] = new io.SocketNamespace(this, name);
				if (name !== "") {
					this.namespaces[name].packet({
						type: "connect"
					})
				}
			}
			return this.namespaces[name]
		};
		Socket.prototype.publish = function() {
			this.emit.apply(this, arguments);
			var nsp;
			for (var i in this.namespaces) {
				if (this.namespaces.hasOwnProperty(i)) {
					nsp = this.of(i);
					nsp.$emit.apply(nsp, arguments)
				}
			}
		};

		function empty() {}
		Socket.prototype.handshake = function(fn) {
			var self = this,
				options = this.options;

			function complete(data) {
				if (data instanceof Error) {
					self.connecting = false;
					self.onError(data.message)
				} else {
					fn.apply(null, data.split(":"))
				}
			}
			var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
			if (this.isXDomain() && !io.util.ua.hasCORS) {
				var insertAt = document.getElementsByTagName("script")[0],
					script = document.createElement("script");
				script.src = url + "&jsonp=" + io.j.length;
				insertAt.parentNode.insertBefore(script, insertAt);
				io.j.push(function(data) {
					complete(data);
					script.parentNode.removeChild(script)
				})
			} else {
				var xhr = io.util.request();
				xhr.open("GET", url, true);
				if (this.isXDomain()) {
					xhr.withCredentials = true
				}
				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4) {
						xhr.onreadystatechange = empty;
						if (xhr.status == 200) {
							complete(xhr.responseText)
						} else if (xhr.status == 403) {
							self.onError(xhr.responseText)
						} else {
							self.connecting = false;
							!self.reconnecting && self.onError(xhr.responseText)
						}
					}
				};
				xhr.send(null)
			}
		};
		Socket.prototype.getTransport = function(override) {
			var transports = override || this.transports,
				match;
			for (var i = 0, transport; transport = transports[i]; i++) {
				if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
					return new io.Transport[transport](this, this.sessionid)
				}
			}
			return null
		};
		Socket.prototype.connect = function(fn) {
			if (this.connecting && this.transports != "jsonp-polling") {
				return this
			}
			var self = this;
			self.connecting = true;
			this.handshake(function(sid, heartbeat, close, transports) {
				self.sessionid = sid;
				self.closeTimeout = close * 1e3;
				self.heartbeatTimeout = heartbeat * 1e3;
				var check = function() {
						return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
					};
				if (!check()) {
					transports = "jsonp-polling"
				}
				if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
				self.setHeartbeatTimeout();

				function connect(transports) {
					if (self.transport) self.transport.clearTimeouts();
					self.transport = self.getTransport(transports);
					if (!self.transport) return self.publish("connect_failed");
					self.transport.ready(self, function() {
						self.connecting = true;
						self.publish("connecting", self.transport.name);
						self.transport.open();
						if (self.options["connect timeout"]) {
							self.connectTimeoutTimer = setTimeout(function() {
								if (!self.connected) {
									self.connecting = false;
									if (self.options["try multiple transports"]) {
										var remaining = self.transports;
										while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {}
										if (remaining.length) {
											connect(remaining)
										} else {
											self.publish("connect_failed")
										}
									}
								}
							}, self.options["connect timeout"])
						}
					})
				}
				connect(self.transports);
				self.once("connect", function() {
					clearTimeout(self.connectTimeoutTimer);
					fn && typeof fn == "function" && fn()
				})
			});
			return this
		};
		Socket.prototype.setHeartbeatTimeout = function() {
			clearTimeout(this.heartbeatTimeoutTimer);
			if (this.transport && !this.transport.heartbeats()) return;
			var self = this;
			this.heartbeatTimeoutTimer = setTimeout(function() {
				self.transport.onClose()
			}, this.heartbeatTimeout)
		};
		Socket.prototype.packet = function(data) {
			if (this.connected && !this.doBuffer) {
				this.transport.packet(data)
			} else {
				this.buffer.push(data)
			}
			return this
		};
		Socket.prototype.setBuffer = function(v) {
			this.doBuffer = v;
			if (!v && this.connected && this.buffer.length) {
				if (!this.options["manualFlush"]) {
					this.flushBuffer()
				}
			}
		};
		Socket.prototype.flushBuffer = function() {
			this.transport.payload(this.buffer);
			this.buffer = []
		};
		Socket.prototype.disconnect = function() {
			if (this.connected || this.connecting) {
				if (this.open) {
					this.of("").packet({
						type: "disconnect"
					})
				}
				this.onDisconnect("booted")
			}
			return this
		};
		Socket.prototype.disconnectSync = function() {
			var xhr = io.util.request();
			var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
			xhr.open("GET", uri, false);
			xhr.send(null);
			this.onDisconnect("booted")
		};
		Socket.prototype.isXDomain = function() {
			var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
			return this.options.host !== global.location.hostname || this.options.port != port
		};
		Socket.prototype.onConnect = function() {
			if (!this.connected) {
				this.connected = true;
				this.connecting = false;
				if (!this.doBuffer) {
					this.setBuffer(false)
				}
				this.emit("connect")
			}
		};
		Socket.prototype.onOpen = function() {
			this.open = true
		};
		Socket.prototype.onClose = function() {
			this.open = false;
			clearTimeout(this.heartbeatTimeoutTimer)
		};
		Socket.prototype.onPacket = function(packet) {
			this.of(packet.endpoint).onPacket(packet)
		};
		Socket.prototype.onError = function(err) {
			if (err && err.advice) {
				if (err.advice === "reconnect" && (this.connected || this.connecting)) {
					this.disconnect();
					if (this.options.reconnect) {
						this.reconnect()
					}
				}
			}
			this.publish("error", err && err.reason ? err.reason : err)
		};
		Socket.prototype.onDisconnect = function(reason) {
			var wasConnected = this.connected,
				wasConnecting = this.connecting;
			this.connected = false;
			this.connecting = false;
			this.open = false;
			if (wasConnected || wasConnecting) {
				this.transport.close();
				this.transport.clearTimeouts();
				if (wasConnected) {
					this.publish("disconnect", reason);
					if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
						this.reconnect()
					}
				}
			}
		};
		Socket.prototype.reconnect = function() {
			this.reconnecting = true;
			this.reconnectionAttempts = 0;
			this.reconnectionDelay = this.options["reconnection delay"];
			var self = this,
				maxAttempts = this.options["max reconnection attempts"],
				tryMultiple = this.options["try multiple transports"],
				limit = this.options["reconnection limit"];

			function reset() {
				if (self.connected) {
					for (var i in self.namespaces) {
						if (self.namespaces.hasOwnProperty(i) && "" !== i) {
							self.namespaces[i].packet({
								type: "connect"
							})
						}
					}
					self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
				}
				clearTimeout(self.reconnectionTimer);
				self.removeListener("connect_failed", maybeReconnect);
				self.removeListener("connect", maybeReconnect);
				self.reconnecting = false;
				delete self.reconnectionAttempts;
				delete self.reconnectionDelay;
				delete self.reconnectionTimer;
				delete self.redoTransports;
				self.options["try multiple transports"] = tryMultiple
			}
			function maybeReconnect() {
				if (!self.reconnecting) {
					return
				}
				if (self.connected) {
					return reset()
				}
				if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
					return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
				}
				if (self.reconnectionAttempts++ >= maxAttempts) {
					if (!self.redoTransports) {
						self.on("connect_failed", maybeReconnect);
						self.options["try multiple transports"] = true;
						self.transports = self.origTransports;
						self.transport = self.getTransport();
						self.redoTransports = true;
						self.connect()
					} else {
						self.publish("reconnect_failed");
						reset()
					}
				} else {
					if (self.reconnectionDelay < limit) {
						self.reconnectionDelay *= 2
					}
					self.connect();
					self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
					self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
				}
			}
			this.options["try multiple transports"] = false;
			this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
			this.on("connect", maybeReconnect)
		}
	})("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
	(function(exports, io) {
		exports.SocketNamespace = SocketNamespace;

		function SocketNamespace(socket, name) {
			this.socket = socket;
			this.name = name || "";
			this.flags = {};
			this.json = new Flag(this, "json");
			this.ackPackets = 0;
			this.acks = {}
		}
		io.util.mixin(SocketNamespace, io.EventEmitter);
		SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
		SocketNamespace.prototype.of = function() {
			return this.socket.of.apply(this.socket, arguments)
		};
		SocketNamespace.prototype.packet = function(packet) {
			packet.endpoint = this.name;
			this.socket.packet(packet);
			this.flags = {};
			return this
		};
		SocketNamespace.prototype.send = function(data, fn) {
			var packet = {
				type: this.flags.json ? "json" : "message",
				data: data
			};
			if ("function" == typeof fn) {
				packet.id = ++this.ackPackets;
				packet.ack = true;
				this.acks[packet.id] = fn
			}
			return this.packet(packet)
		};
		SocketNamespace.prototype.emit = function(name) {
			var args = Array.prototype.slice.call(arguments, 1),
				lastArg = args[args.length - 1],
				packet = {
					type: "event",
					name: name
				};
			if ("function" == typeof lastArg) {
				packet.id = ++this.ackPackets;
				packet.ack = "data";
				this.acks[packet.id] = lastArg;
				args = args.slice(0, args.length - 1)
			}
			packet.args = args;
			return this.packet(packet)
		};
		SocketNamespace.prototype.disconnect = function() {
			if (this.name === "") {
				this.socket.disconnect()
			} else {
				this.packet({
					type: "disconnect"
				});
				this.$emit("disconnect")
			}
			return this
		};
		SocketNamespace.prototype.onPacket = function(packet) {
			var self = this;

			function ack() {
				self.packet({
					type: "ack",
					args: io.util.toArray(arguments),
					ackId: packet.id
				})
			}
			switch (packet.type) {
			case "connect":
				this.$emit("connect");
				break;
			case "disconnect":
				if (this.name === "") {
					this.socket.onDisconnect(packet.reason || "booted")
				} else {
					this.$emit("disconnect", packet.reason)
				}
				break;
			case "message":
			case "json":
				var params = ["message", packet.data];
				if (packet.ack == "data") {
					params.push(ack)
				} else if (packet.ack) {
					this.packet({
						type: "ack",
						ackId: packet.id
					})
				}
				this.$emit.apply(this, params);
				break;
			case "event":
				var params = [packet.name].concat(packet.args);
				if (packet.ack == "data") params.push(ack);
				this.$emit.apply(this, params);
				break;
			case "ack":
				if (this.acks[packet.ackId]) {
					this.acks[packet.ackId].apply(this, packet.args);
					delete this.acks[packet.ackId]
				}
				break;
			case "error":
				if (packet.advice) {
					this.socket.onError(packet)
				} else {
					if (packet.reason == "unauthorized") {
						this.$emit("connect_failed", packet.reason)
					} else {
						this.$emit("error", packet.reason)
					}
				}
				break
			}
		};

		function Flag(nsp, name) {
			this.namespace = nsp;
			this.name = name
		}
		Flag.prototype.send = function() {
			this.namespace.flags[this.name] = true;
			this.namespace.send.apply(this.namespace, arguments)
		};
		Flag.prototype.emit = function() {
			this.namespace.flags[this.name] = true;
			this.namespace.emit.apply(this.namespace, arguments)
		}
	})("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
	(function(exports, io, global) {
		exports.websocket = WS;

		function WS(socket) {
			io.Transport.apply(this, arguments)
		}
		io.util.inherit(WS, io.Transport);
		WS.prototype.name = "websocket";
		WS.prototype.open = function() {
			var query = io.util.query(this.socket.options.query),
				self = this,
				Socket;
			if (!Socket) {
				Socket = global.MozWebSocket || global.WebSocket
			}
			this.websocket = new Socket(this.prepareUrl() + query);
			this.websocket.onopen = function() {
				self.onOpen();
				self.socket.setBuffer(false)
			};
			this.websocket.onmessage = function(ev) {
				self.onData(ev.data)
			};
			this.websocket.onclose = function() {
				self.onClose();
				self.socket.setBuffer(true)
			};
			this.websocket.onerror = function(e) {
				self.onError(e)
			};
			return this
		};
		if (io.util.ua.iDevice) {
			WS.prototype.send = function(data) {
				var self = this;
				setTimeout(function() {
					self.websocket.send(data)
				}, 0);
				return this
			}
		} else {
			WS.prototype.send = function(data) {
				this.websocket.send(data);
				return this
			}
		}
		WS.prototype.payload = function(arr) {
			for (var i = 0, l = arr.length; i < l; i++) {
				this.packet(arr[i])
			}
			return this
		};
		WS.prototype.close = function() {
			this.websocket.close();
			return this
		};
		WS.prototype.onError = function(e) {
			this.socket.onError(e)
		};
		WS.prototype.scheme = function() {
			return this.socket.options.secure ? "wss" : "ws"
		};
		WS.check = function() {
			return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
		};
		WS.xdomainCheck = function() {
			return true
		};
		io.transports.push("websocket")
	})("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
	(function(exports, io) {
		exports.flashsocket = Flashsocket;

		function Flashsocket() {
			io.Transport.websocket.apply(this, arguments)
		}
		io.util.inherit(Flashsocket, io.Transport.websocket);
		Flashsocket.prototype.name = "flashsocket";
		Flashsocket.prototype.open = function() {
			var self = this,
				args = arguments;
			WebSocket.ZO3x(function() {
				io.Transport.websocket.prototype.open.apply(self, args)
			});
			return this
		};
		Flashsocket.prototype.send = function() {
			var self = this,
				args = arguments;
			WebSocket.ZO3x(function() {
				io.Transport.websocket.prototype.send.apply(self, args)
			});
			return this
		};
		Flashsocket.prototype.close = function() {
			WebSocket.Uk1x.length = 0;
			io.Transport.websocket.prototype.close.call(this);
			return this
		};
		Flashsocket.prototype.ready = function(socket, fn) {
			function init() {
				var options = socket.options,
					port = options["flash policy port"],
					path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
				if (!Flashsocket.loaded) {
					if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
						WEB_SOCKET_SWF_LOCATION = path.join("/")
					}
					if (port !== 843) {
						WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
					}
					WebSocket.bxI0x();
					Flashsocket.loaded = true
				}
				fn.call(self)
			}
			var self = this;
			if (document.body) return init();
			io.util.load(init)
		};
		Flashsocket.check = function() {
			if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
			return swfobject.getFlashPlayerVersion().major >= 10
		};
		Flashsocket.xdomainCheck = function() {
			return true
		};
		if (typeof window != "undefined") {
			WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
		}
		io.transports.push("flashsocket")
	})("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
	if ("undefined" != typeof window) {
		var swfobject = function() {
				var D = "undefined",
					r = "object",
					S = "Shockwave Flash",
					W = "ShockwaveFlash.ShockwaveFlash",
					q = "application/x-shockwave-flash",
					R = "SWFObjectExprInst",
					x = "onreadystatechange",
					O = window,
					j = document,
					t = navigator,
					T = false,
					U = [h],
					o = [],
					N = [],
					I = [],
					l, Q, E, B, J = false,
					a = false,
					n, G, m = true,
					M = function() {
						var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
							ah = t.userAgent.toLowerCase(),
							Y = t.platform.toLowerCase(),
							ae = Y ? /win/.test(Y) : /win/.test(ah),
							ac = Y ? /mac/.test(Y) : /mac/.test(ah),
							af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
							X = !+"1",
							ag = [0, 0, 0],
							ab = null;
						if (typeof t.plugins != D && typeof t.plugins[S] == r) {
							ab = t.plugins[S].description;
							if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
								T = true;
								X = false;
								ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
								ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
								ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
								ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
							}
						} else {
							if (typeof O[["Active"].concat("Object").join("X")] != D) {
								try {
									var ad = new(window[["Active"].concat("Object").join("X")])(W);
									if (ad) {
										ab = ad.GetVariable("$version");
										if (ab) {
											X = true;
											ab = ab.split(" ")[1].split(",");
											ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
										}
									}
								} catch (Z) {}
							}
						}
						return {
							w3: aa,
							pv: ag,
							wk: af,
							ie: X,
							win: ae,
							mac: ac
						}
					}(),
					k = function() {
						if (!M.w3) {
							return
						}
						if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
							f()
						}
						if (!J) {
							if (typeof j.addEventListener != D) {
								j.addEventListener("DOMContentLoaded", f, false)
							}
							if (M.ie && M.win) {
								j.attachEvent(x, function() {
									if (j.readyState == "complete") {
										j.detachEvent(x, arguments.callee);
										f()
									}
								});
								if (O == top) {
									(function() {
										if (J) {
											return
										}
										try {
											j.documentElement.doScroll("left")
										} catch (X) {
											setTimeout(arguments.callee, 0);
											return
										}
										f()
									})()
								}
							}
							if (M.wk) {
								(function() {
									if (J) {
										return
									}
									if (!/loaded|complete/.test(j.readyState)) {
										setTimeout(arguments.callee, 0);
										return
									}
									f()
								})()
							}
							s(f)
						}
					}();

				function f() {
					if (J) {
						return
					}
					try {
						var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
						Z.parentNode.removeChild(Z)
					} catch (aa) {
						return
					}
					J = true;
					var X = U.length;
					for (var Y = 0; Y < X; Y++) {
						U[Y]()
					}
				}
				function K(X) {
					if (J) {
						X()
					} else {
						U[U.length] = X
					}
				}
				function s(Y) {
					if (typeof O.addEventListener != D) {
						O.addEventListener("load", Y, false)
					} else {
						if (typeof j.addEventListener != D) {
							j.addEventListener("load", Y, false)
						} else {
							if (typeof O.attachEvent != D) {
								i(O, "onload", Y)
							} else {
								if (typeof O.onload == "function") {
									var X = O.onload;
									O.onload = function() {
										X();
										Y()
									}
								} else {
									O.onload = Y
								}
							}
						}
					}
				}
				function h() {
					if (T) {
						V()
					} else {
						H()
					}
				}
				function V() {
					var X = j.getElementsByTagName("body")[0];
					var aa = C(r);
					aa.setAttribute("type", q);
					aa.style.visibility = "hidden";
					var Z = X.appendChild(aa);
					if (Z) {
						var Y = 0;
						(function() {
							if (typeof Z.GetVariable != D) {
								var ab = Z.GetVariable("$version");
								if (ab) {
									ab = ab.split(" ")[1].split(",");
									M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
								}
							} else {
								if (Y < 10) {
									Y++;
									setTimeout(arguments.callee, 10);
									return
								}
							}
							X.removeChild(aa);
							Z = null;
							H()
						})()
					} else {
						H()
					}
				}
				function H() {
					var ag = o.length;
					if (ag > 0) {
						for (var af = 0; af < ag; af++) {
							var Y = o[af].id;
							var ab = o[af].callbackFn;
							var aa = {
								success: false,
								id: Y
							};
							if (M.pv[0] > 0) {
								var ae = c(Y);
								if (ae) {
									if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
										w(Y, true);
										if (ab) {
											aa.success = true;
											aa.ref = z(Y);
											ab(aa)
										}
									} else {
										if (o[af].expressInstall && A()) {
											var ai = {};
											ai.data = o[af].expressInstall;
											ai.width = ae.getAttribute("width") || "0";
											ai.height = ae.getAttribute("height") || "0";
											if (ae.getAttribute("class")) {
												ai.styleclass = ae.getAttribute("class")
											}
											if (ae.getAttribute("align")) {
												ai.align = ae.getAttribute("align")
											}
											var ah = {};
											var X = ae.getElementsByTagName("param");
											var ac = X.length;
											for (var ad = 0; ad < ac; ad++) {
												if (X[ad].getAttribute("name").toLowerCase() != "movie") {
													ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
												}
											}
											P(ai, ah, Y, ab)
										} else {
											p(ae);
											if (ab) {
												ab(aa)
											}
										}
									}
								}
							} else {
								w(Y, true);
								if (ab) {
									var Z = z(Y);
									if (Z && typeof Z.SetVariable != D) {
										aa.success = true;
										aa.ref = Z
									}
									ab(aa)
								}
							}
						}
					}
				}
				function z(aa) {
					var X = null;
					var Y = c(aa);
					if (Y && Y.nodeName == "OBJECT") {
						if (typeof Y.SetVariable != D) {
							X = Y
						} else {
							var Z = Y.getElementsByTagName(r)[0];
							if (Z) {
								X = Z
							}
						}
					}
					return X
				}
				function A() {
					return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
				}
				function P(aa, ab, X, Z) {
					a = true;
					E = Z || null;
					B = {
						success: false,
						id: X
					};
					var ae = c(X);
					if (ae) {
						if (ae.nodeName == "OBJECT") {
							l = g(ae);
							Q = null
						} else {
							l = ae;
							Q = X
						}
						aa.id = R;
						if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
							aa.width = "310"
						}
						if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
							aa.height = "137"
						}
						j.title = j.title.slice(0, 47) + " - Flash Player Installation";
						var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
							ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
						if (typeof ab.flashvars != D) {
							ab.flashvars += "&" + ac
						} else {
							ab.flashvars = ac
						}
						if (M.ie && M.win && ae.readyState != 4) {
							var Y = C("div");
							X += "SWFObjectNew";
							Y.setAttribute("id", X);
							ae.parentNode.insertBefore(Y, ae);
							ae.style.display = "none";
							(function() {
								if (ae.readyState == 4) {
									ae.parentNode.removeChild(ae)
								} else {
									setTimeout(arguments.callee, 10)
								}
							})()
						}
						u(aa, ab, X)
					}
				}
				function p(Y) {
					if (M.ie && M.win && Y.readyState != 4) {
						var X = C("div");
						Y.parentNode.insertBefore(X, Y);
						X.parentNode.replaceChild(g(Y), X);
						Y.style.display = "none";
						(function() {
							if (Y.readyState == 4) {
								Y.parentNode.removeChild(Y)
							} else {
								setTimeout(arguments.callee, 10)
							}
						})()
					} else {
						Y.parentNode.replaceChild(g(Y), Y)
					}
				}
				function g(ab) {
					var aa = C("div");
					if (M.win && M.ie) {
						aa.innerHTML = ab.innerHTML
					} else {
						var Y = ab.getElementsByTagName(r)[0];
						if (Y) {
							var ad = Y.childNodes;
							if (ad) {
								var X = ad.length;
								for (var Z = 0; Z < X; Z++) {
									if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
										aa.appendChild(ad[Z].cloneNode(true))
									}
								}
							}
						}
					}
					return aa
				}
				function u(ai, ag, Y) {
					var X, aa = c(Y);
					if (M.wk && M.wk < 312) {
						return X
					}
					if (aa) {
						if (typeof ai.id == D) {
							ai.id = Y
						}
						if (M.ie && M.win) {
							var ah = "";
							for (var ae in ai) {
								if (ai[ae] != Object.prototype[ae]) {
									if (ae.toLowerCase() == "data") {
										ag.movie = ai[ae]
									} else {
										if (ae.toLowerCase() == "styleclass") {
											ah += ' class="' + ai[ae] + '"'
										} else {
											if (ae.toLowerCase() != "classid") {
												ah += " " + ae + '="' + ai[ae] + '"'
											}
										}
									}
								}
							}
							var af = "";
							for (var ad in ag) {
								if (ag[ad] != Object.prototype[ad]) {
									af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
								}
							}
							aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
							N[N.length] = ai.id;
							X = c(ai.id)
						} else {
							var Z = C(r);
							Z.setAttribute("type", q);
							for (var ac in ai) {
								if (ai[ac] != Object.prototype[ac]) {
									if (ac.toLowerCase() == "styleclass") {
										Z.setAttribute("class", ai[ac])
									} else {
										if (ac.toLowerCase() != "classid") {
											Z.setAttribute(ac, ai[ac])
										}
									}
								}
							}
							for (var ab in ag) {
								if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
									e(Z, ab, ag[ab])
								}
							}
							aa.parentNode.replaceChild(Z, aa);
							X = Z
						}
					}
					return X
				}
				function e(Z, X, Y) {
					var aa = C("param");
					aa.setAttribute("name", X);
					aa.setAttribute("value", Y);
					Z.appendChild(aa)
				}
				function y(Y) {
					var X = c(Y);
					if (X && X.nodeName == "OBJECT") {
						if (M.ie && M.win) {
							X.style.display = "none";
							(function() {
								if (X.readyState == 4) {
									b(Y)
								} else {
									setTimeout(arguments.callee, 10)
								}
							})()
						} else {
							X.parentNode.removeChild(X)
						}
					}
				}
				function b(Z) {
					var Y = c(Z);
					if (Y) {
						for (var X in Y) {
							if (typeof Y[X] == "function") {
								Y[X] = null
							}
						}
						Y.parentNode.removeChild(Y)
					}
				}
				function c(Z) {
					var X = null;
					try {
						X = j.getElementById(Z)
					} catch (Y) {}
					return X
				}
				function C(X) {
					return j.createElement(X)
				}
				function i(Z, X, Y) {
					Z.attachEvent(X, Y);
					I[I.length] = [Z, X, Y]
				}
				function F(Z) {
					var Y = M.pv,
						X = Z.split(".");
					X[0] = parseInt(X[0], 10);
					X[1] = parseInt(X[1], 10) || 0;
					X[2] = parseInt(X[2], 10) || 0;
					return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
				}
				function v(ac, Y, ad, ab) {
					if (M.ie && M.mac) {
						return
					}
					var aa = j.getElementsByTagName("head")[0];
					if (!aa) {
						return
					}
					var X = ad && typeof ad == "string" ? ad : "screen";
					if (ab) {
						n = null;
						G = null
					}
					if (!n || G != X) {
						var Z = C("style");
						Z.setAttribute("type", "text/css");
						Z.setAttribute("media", X);
						n = aa.appendChild(Z);
						if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
							n = j.styleSheets[j.styleSheets.length - 1]
						}
						G = X
					}
					if (M.ie && M.win) {
						if (n && typeof n.addRule == r) {
							n.addRule(ac, Y)
						}
					} else {
						if (n && typeof j.createTextNode != D) {
							n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
						}
					}
				}
				function w(Z, X) {
					if (!m) {
						return
					}
					var Y = X ? "visible" : "hidden";
					if (J && c(Z)) {
						c(Z).style.visibility = Y
					} else {
						v("#" + Z, "visibility:" + Y)
					}
				}
				function L(Y) {
					var Z = /[\\\"<>\.;]/;
					var X = Z.exec(Y) != null;
					return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
				}
				var d = function() {
						if (M.ie && M.win) {
							window.attachEvent("onunload", function() {
								var ac = I.length;
								for (var ab = 0; ab < ac; ab++) {
									I[ab][0].detachEvent(I[ab][1], I[ab][2])
								}
								var Z = N.length;
								for (var aa = 0; aa < Z; aa++) {
									y(N[aa])
								}
								for (var Y in M) {
									M[Y] = null
								}
								M = null;
								for (var X in swfobject) {
									swfobject[X] = null
								}
								swfobject = null
							})
						}
					}();
				return {
					registerObject: function(ab, X, aa, Z) {
						if (M.w3 && ab && X) {
							var Y = {};
							Y.id = ab;
							Y.swfVersion = X;
							Y.expressInstall = aa;
							Y.callbackFn = Z;
							o[o.length] = Y;
							w(ab, false)
						} else {
							if (Z) {
								Z({
									success: false,
									id: ab
								})
							}
						}
					},
					getObjectById: function(X) {
						if (M.w3) {
							return z(X)
						}
					},
					embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
						var X = {
							success: false,
							id: ah
						};
						if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
							w(ah, false);
							K(function() {
								ae += "";
								ag += "";
								var aj = {};
								if (af && typeof af === r) {
									for (var al in af) {
										aj[al] = af[al]
									}
								}
								aj.data = ab;
								aj.width = ae;
								aj.height = ag;
								var am = {};
								if (ad && typeof ad === r) {
									for (var ak in ad) {
										am[ak] = ad[ak]
									}
								}
								if (Z && typeof Z === r) {
									for (var ai in Z) {
										if (typeof am.flashvars != D) {
											am.flashvars += "&" + ai + "=" + Z[ai]
										} else {
											am.flashvars = ai + "=" + Z[ai]
										}
									}
								}
								if (F(Y)) {
									var an = u(aj, am, ah);
									if (aj.id == ah) {
										w(ah, true)
									}
									X.success = true;
									X.ref = an
								} else {
									if (aa && A()) {
										aj.data = aa;
										P(aj, am, ah, ac);
										return
									} else {
										w(ah, true)
									}
								}
								if (ac) {
									ac(X)
								}
							})
						} else {
							if (ac) {
								ac(X)
							}
						}
					},
					switchOffAutoHideShow: function() {
						m = false
					},
					ua: M,
					getFlashPlayerVersion: function() {
						return {
							major: M.pv[0],
							minor: M.pv[1],
							release: M.pv[2]
						}
					},
					hasFlashPlayerVersion: F,
					createSWF: function(Z, Y, X) {
						if (M.w3) {
							return u(Z, Y, X)
						} else {
							return undefined
						}
					},
					showExpressInstall: function(Z, aa, X, Y) {
						if (M.w3 && A()) {
							P(Z, aa, X, Y)
						}
					},
					removeSWF: function(X) {
						if (M.w3) {
							y(X)
						}
					},
					createCSS: function(aa, Z, Y, X) {
						if (M.w3) {
							v(aa, Z, Y, X)
						}
					},
					addDomLoadEvent: K,
					addLoadEvent: s,
					getQueryParamValue: function(aa) {
						var Z = j.location.search || j.location.hash;
						if (Z) {
							if (/\?/.test(Z)) {
								Z = Z.split("?")[1]
							}
							if (aa == null) {
								return L(Z)
							}
							var Y = Z.split("&");
							for (var X = 0; X < Y.length; X++) {
								if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
									return L(Y[X].substring(Y[X].indexOf("=") + 1))
								}
							}
						}
						return ""
					},
					expressInstallCallback: function() {
						if (a) {
							var X = c(R);
							if (X && l) {
								X.parentNode.replaceChild(l, X);
								if (Q) {
									w(Q, true);
									if (M.ie && M.win) {
										l.style.display = "block"
									}
								}
								if (E) {
									E(B)
								}
							}
							a = false
						}
					}
				}
			}()
	}(function() {
		if ("undefined" == typeof window || window.WebSocket) return;
		var console = window.console;
		if (!console || !console.log || !console.error) {
			console = {
				log: function() {},
				error: function() {}
			}
		}
		if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
			console.error("Flash Player >= 10.0.0 is required.");
			return
		}
		if (location.protocol == "file:") {
			console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
		}
		WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
			var self = this;
			self.gY7R = WebSocket.cxU4Y++;
			WebSocket.bGb2x[self.gY7R] = self;
			self.readyState = WebSocket.CONNECTING;
			self.bufferedAmount = 0;
			self.lV8N = {};
			if (!protocols) {
				protocols = []
			} else if (typeof protocols == "string") {
				protocols = [protocols]
			}
			setTimeout(function() {
				WebSocket.ZO3x(function() {
					WebSocket.pF0x.create(self.gY7R, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
				})
			}, 0)
		};
		WebSocket.prototype.send = function(data) {
			if (this.readyState == WebSocket.CONNECTING) {
				throw "INVALID_STATE_ERR: Web Socket connection has not been established"
			}
			var result = WebSocket.pF0x.send(this.gY7R, encodeURIComponent(data));
			if (result < 0) {
				return true
			} else {
				this.bufferedAmount += result;
				return false
			}
		};
		WebSocket.prototype.close = function() {
			if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
				return
			}
			this.readyState = WebSocket.CLOSING;
			WebSocket.pF0x.close(this.gY7R)
		};
		WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
			if (!(type in this.lV8N)) {
				this.lV8N[type] = []
			}
			this.lV8N[type].push(listener)
		};
		WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
			if (!(type in this.lV8N)) return;
			var events = this.lV8N[type];
			for (var i = events.length - 1; i >= 0; --i) {
				if (events[i] === listener) {
					events.splice(i, 1);
					break
				}
			}
		};
		WebSocket.prototype.dispatchEvent = function(event) {
			var events = this.lV8N[event.type] || [];
			for (var i = 0; i < events.length; ++i) {
				events[i](event)
			}
			var handler = this["on" + event.type];
			if (handler) handler(event)
		};
		WebSocket.prototype.cxT4X = function(flashEvent) {
			if ("readyState" in flashEvent) {
				this.readyState = flashEvent.readyState
			}
			if ("protocol" in flashEvent) {
				this.protocol = flashEvent.protocol
			}
			var jsEvent;
			if (flashEvent.type == "open" || flashEvent.type == "error") {
				jsEvent = this.bGf2x(flashEvent.type)
			} else if (flashEvent.type == "close") {
				jsEvent = this.bGf2x("close")
			} else if (flashEvent.type == "message") {
				var data = decodeURIComponent(flashEvent.message);
				jsEvent = this.cxQ4U("message", data)
			} else {
				throw "unknown event type: " + flashEvent.type
			}
			this.dispatchEvent(jsEvent)
		};
		WebSocket.prototype.bGf2x = function(type) {
			if (document.createEvent && window.Event) {
				var event = document.createEvent("Event");
				event.initEvent(type, false, false);
				return event
			} else {
				return {
					type: type,
					bubbles: false,
					cancelable: false
				}
			}
		};
		WebSocket.prototype.cxQ4U = function(type, data) {
			if (document.createEvent && window.MessageEvent && !window.opera) {
				var event = document.createEvent("MessageEvent");
				event.initMessageEvent("message", false, false, data, null, null, window, null);
				return event
			} else {
				return {
					type: type,
					data: data,
					bubbles: false,
					cancelable: false
				}
			}
		};
		WebSocket.CONNECTING = 0;
		WebSocket.OPEN = 1;
		WebSocket.CLOSING = 2;
		WebSocket.CLOSED = 3;
		WebSocket.pF0x = null;
		WebSocket.bGb2x = {};
		WebSocket.Uk1x = [];
		WebSocket.cxU4Y = 0;
		WebSocket.loadFlashPolicyFile = function(url) {
			WebSocket.ZO3x(function() {
				WebSocket.pF0x.loadManualPolicyFile(url)
			})
		};
		WebSocket.bxI0x = function() {
			if (WebSocket.pF0x) return;
			if (WebSocket.cxP4T) {
				window.WEB_SOCKET_SWF_LOCATION = WebSocket.cxP4T
			}
			if (!window.WEB_SOCKET_SWF_LOCATION) {
				console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
				return
			}
			var container = document.createElement("div");
			container.id = "webSocketContainer";
			container.style.position = "absolute";
			if (WebSocket.cxO4S()) {
				container.style.left = "0px";
				container.style.top = "0px"
			} else {
				container.style.left = "-100px";
				container.style.top = "-100px"
			}
			var holder = document.createElement("div");
			holder.id = "webSocketFlash";
			container.appendChild(holder);
			document.body.appendChild(container);
			swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
				hasPriority: true,
				swliveconnect: true,
				allowScriptAccess: "always"
			}, null, function(e) {
				if (!e.success) {
					console.error("[WebSocket] swfobject.embedSWF failed")
				}
			})
		};
		WebSocket.cGd6X = function() {
			setTimeout(function() {
				WebSocket.pF0x = document.getElementById("webSocketFlash");
				WebSocket.pF0x.setCallerUrl(location.href);
				WebSocket.pF0x.setDebug( !! window.WEB_SOCKET_DEBUG);
				for (var i = 0; i < WebSocket.Uk1x.length; ++i) {
					WebSocket.Uk1x[i]()
				}
				WebSocket.Uk1x = []
			}, 0)
		};
		WebSocket.cGe6Y = function() {
			setTimeout(function() {
				try {
					var events = WebSocket.pF0x.receiveEvents();
					for (var i = 0; i < events.length; ++i) {
						WebSocket.bGb2x[events[i].webSocketId].cxT4X(events[i])
					}
				} catch (e) {
					console.error(e)
				}
			}, 0);
			return true
		};
		WebSocket.cGf6Z = function(message) {
			console.log(decodeURIComponent(message))
		};
		WebSocket.dY6S = function(message) {
			console.error(decodeURIComponent(message))
		};
		WebSocket.ZO3x = function(task) {
			if (WebSocket.pF0x) {
				task()
			} else {
				WebSocket.Uk1x.push(task)
			}
		};
		WebSocket.cxO4S = function() {
			if (!window.navigator || !window.navigator.mimeTypes) {
				return false
			}
			var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
			if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
				return false
			}
			return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
		};
		if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
			if (window.addEventListener) {
				window.addEventListener("load", function() {
					WebSocket.bxI0x()
				}, false)
			} else {
				window.attachEvent("onload", function() {
					WebSocket.bxI0x()
				})
			}
		}
	})();
	(function(exports, io, global) {
		exports.XHR = XHR;

		function XHR(socket) {
			if (!socket) return;
			io.Transport.apply(this, arguments);
			this.sendBuffer = []
		}
		io.util.inherit(XHR, io.Transport);
		XHR.prototype.open = function() {
			this.socket.setBuffer(false);
			this.onOpen();
			this.get();
			this.setCloseTimeout();
			return this
		};
		XHR.prototype.payload = function(payload) {
			var msgs = [];
			for (var i = 0, l = payload.length; i < l; i++) {
				msgs.push(io.parser.encodePacket(payload[i]))
			}
			this.send(io.parser.encodePayload(msgs))
		};
		XHR.prototype.send = function(data) {
			this.post(data);
			return this
		};

		function empty() {}
		XHR.prototype.post = function(data) {
			var self = this;
			this.socket.setBuffer(true);

			function stateChange() {
				if (this.readyState == 4) {
					this.onreadystatechange = empty;
					self.posting = false;
					if (this.status == 200) {
						self.socket.setBuffer(false)
					} else {
						self.onClose()
					}
				}
			}
			function onload() {
				this.onload = empty;
				self.socket.setBuffer(false)
			}
			this.sendXHR = this.request("POST");
			if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
				this.sendXHR.onload = this.sendXHR.onerror = onload
			} else {
				this.sendXHR.onreadystatechange = stateChange
			}
			this.sendXHR.send(data)
		};
		XHR.prototype.close = function() {
			this.onClose();
			return this
		};
		XHR.prototype.request = function(method) {
			var req = io.util.request(this.socket.isXDomain()),
				query = io.util.query(this.socket.options.query, "t=" + +(new Date));
			req.open(method || "GET", this.prepareUrl() + query, true);
			if (method == "POST") {
				try {
					if (req.setRequestHeader) {
						req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
					} else {
						req.contentType = "text/plain"
					}
				} catch (e) {}
			}
			return req
		};
		XHR.prototype.scheme = function() {
			return this.socket.options.secure ? "https" : "http"
		};
		XHR.check = function(socket, xdomain) {
			try {
				var request = io.util.request(xdomain),
					usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
					socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
					isXProtocol = global.location && socketProtocol != global.location.protocol;
				if (request && !(usesXDomReq && isXProtocol)) {
					return true
				}
			} catch (e) {}
			return false
		};
		XHR.xdomainCheck = function(socket) {
			return XHR.check(socket, true)
		}
	})("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
	(function(exports, io) {
		exports.htmlfile = HTMLFile;

		function HTMLFile(socket) {
			io.Transport.XHR.apply(this, arguments)
		}
		io.util.inherit(HTMLFile, io.Transport.XHR);
		HTMLFile.prototype.name = "htmlfile";
		HTMLFile.prototype.get = function() {
			this.doc = new(window[["Active"].concat("Object").join("X")])("htmlfile");
			this.doc.open();
			this.doc.write("<html></html>");
			this.doc.close();
			this.doc.parentWindow.s = this;
			var iframeC = this.doc.createElement("div");
			iframeC.className = "socketio";
			this.doc.body.appendChild(iframeC);
			this.iframe = this.doc.createElement("iframe");
			iframeC.appendChild(this.iframe);
			var self = this,
				query = io.util.query(this.socket.options.query, "t=" + +(new Date));
			this.iframe.src = this.prepareUrl() + query;
			io.util.on(window, "unload", function() {
				self.destroy()
			})
		};
		HTMLFile.prototype.c3x = function(data, doc) {
			data = data.replace(/\\\//g, "/");
			this.onData(data);
			try {
				var script = doc.getElementsByTagName("script")[0];
				script.parentNode.removeChild(script)
			} catch (e) {}
		};
		HTMLFile.prototype.destroy = function() {
			if (this.iframe) {
				try {
					this.iframe.src = "about:blank"
				} catch (e) {}
				this.doc = null;
				this.iframe.parentNode.removeChild(this.iframe);
				this.iframe = null;
				CollectGarbage()
			}
		};
		HTMLFile.prototype.close = function() {
			this.destroy();
			return io.Transport.XHR.prototype.close.call(this)
		};
		HTMLFile.check = function(socket) {
			if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
				try {
					var a = new(window[["Active"].concat("Object").join("X")])("htmlfile");
					return a && io.Transport.XHR.check(socket)
				} catch (e) {}
			}
			return false
		};
		HTMLFile.xdomainCheck = function() {
			return false
		};
		io.transports.push("htmlfile")
	})("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
	(function(exports, io, global) {
		exports["xhr-polling"] = XHRPolling;

		function XHRPolling() {
			io.Transport.XHR.apply(this, arguments)
		}
		io.util.inherit(XHRPolling, io.Transport.XHR);
		io.util.merge(XHRPolling, io.Transport.XHR);
		XHRPolling.prototype.name = "xhr-polling";
		XHRPolling.prototype.heartbeats = function() {
			return false
		};
		XHRPolling.prototype.open = function() {
			var self = this;
			io.Transport.XHR.prototype.open.call(self);
			return false
		};

		function empty() {}
		XHRPolling.prototype.get = function() {
			if (!this.isOpen) return;
			var self = this;

			function stateChange() {
				if (this.readyState == 4) {
					this.onreadystatechange = empty;
					if (this.status == 200) {
						self.onData(this.responseText);
						self.get()
					} else {
						self.onClose()
					}
				}
			}
			function onload() {
				this.onload = empty;
				this.onerror = empty;
				self.retryCounter = 1;
				self.onData(this.responseText);
				self.get()
			}
			function onerror() {
				self.retryCounter++;
				if (!self.retryCounter || self.retryCounter > 3) {
					self.onClose()
				} else {
					self.get()
				}
			}
			this.xhr = this.request();
			if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
				this.xhr.onload = onload;
				this.xhr.onerror = onerror
			} else {
				this.xhr.onreadystatechange = stateChange
			}
			this.xhr.send(null)
		};
		XHRPolling.prototype.onClose = function() {
			io.Transport.XHR.prototype.onClose.call(this);
			if (this.xhr) {
				this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
				try {
					this.xhr.abort()
				} catch (e) {}
				this.xhr = null
			}
		};
		XHRPolling.prototype.ready = function(socket, fn) {
			var self = this;
			io.util.defer(function() {
				fn.call(self)
			})
		};
		io.transports.push("xhr-polling")
	})("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
	(function(exports, io, global) {
		var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
		exports["jsonp-polling"] = JSONPPolling;

		function JSONPPolling(socket) {
			io.Transport["xhr-polling"].apply(this, arguments);
			this.index = io.j.length;
			var self = this;
			io.j.push(function(msg) {
				self.c3x(msg)
			})
		}
		io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
		JSONPPolling.prototype.name = "jsonp-polling";
		JSONPPolling.prototype.post = function(data) {
			var self = this,
				query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
			if (!this.form) {
				var form = document.createElement("form"),
					area = document.createElement("textarea"),
					id = this.iframeId = "socketio_iframe_" + this.index,
					iframe;
				form.className = "socketio";
				form.style.position = "absolute";
				form.style.top = "0px";
				form.style.left = "0px";
				form.style.display = "none";
				form.target = id;
				form.method = "POST";
				form.setAttribute("accept-charset", "utf-8");
				area.name = "d";
				form.appendChild(area);
				document.body.appendChild(form);
				this.form = form;
				this.area = area
			}
			this.form.action = this.prepareUrl() + query;

			function complete() {
				initIframe();
				self.socket.setBuffer(false)
			}
			function initIframe() {
				if (self.iframe) {
					self.form.removeChild(self.iframe)
				}
				try {
					iframe = document.createElement('<iframe name="' + self.iframeId + '">')
				} catch (e) {
					iframe = document.createElement("iframe");
					iframe.name = self.iframeId
				}
				iframe.id = self.iframeId;
				self.form.appendChild(iframe);
				self.iframe = iframe
			}
			initIframe();
			this.area.value = io.JSON.stringify(data);
			try {
				this.form.submit()
			} catch (e) {}
			if (this.iframe.attachEvent) {
				iframe.onreadystatechange = function() {
					if (self.iframe.readyState == "complete") {
						complete()
					}
				}
			} else {
				this.iframe.onload = complete
			}
			this.socket.setBuffer(true)
		};
		JSONPPolling.prototype.get = function() {
			var self = this,
				script = document.createElement("script"),
				query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
			if (this.script) {
				this.script.parentNode.removeChild(this.script);
				this.script = null
			}
			script.async = true;
			script.src = this.prepareUrl() + query;
			script.onerror = function() {
				self.onClose()
			};
			var insertAt = document.getElementsByTagName("script")[0];
			insertAt.parentNode.insertBefore(script, insertAt);
			this.script = script;
			if (indicator) {
				setTimeout(function() {
					var iframe = document.createElement("iframe");
					document.body.appendChild(iframe);
					document.body.removeChild(iframe)
				}, 100)
			}
		};
		JSONPPolling.prototype.c3x = function(msg) {
			this.onData(msg);
			if (this.isOpen) {
				this.get()
			}
			return this
		};
		JSONPPolling.prototype.ready = function(socket, fn) {
			var self = this;
			if (!indicator) return fn.call(this);
			io.util.load(function() {
				fn.call(self)
			})
		};
		JSONPPolling.check = function() {
			return "document" in global
		};
		JSONPPolling.xdomainCheck = function() {
			return true
		};
		io.transports.push("jsonp-polling")
	})("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
	if (typeof define === "function" && define.amd) {
		define([], function() {
			return io
		})
	}
})();
(function() {
	var isArray = Array.isArray;
	if (isArray === undefined) {
		isArray = function(arr) {
			return Object.prototype.toString.call(arr) === "[object Array]"
		}
	}
	var root = this;

	function EventEmitter() {}
	if (typeof module !== "undefined" && module.exports) {
		module.exports.EventEmitter = EventEmitter
	} else {
		root = window;
		root.EventEmitter = EventEmitter
	}
	var defaultMaxListeners = 10;
	EventEmitter.prototype.setMaxListeners = function(n) {
		if (!this.eh6b) this.eh6b = {};
		this.bGp2x = n
	};
	EventEmitter.prototype.emit = function() {
		var type = arguments[0];
		if (type === "error") {
			if (!this.eh6b || !this.eh6b.error || isArray(this.eh6b.error) && !this.eh6b.error.length) {
				if (this.domain) {
					var er = arguments[1];
					er.domain_emitter = this;
					er.domain = this.domain;
					er.domain_thrown = false;
					this.domain.emit("error", er);
					return false
				}
				if (arguments[1] instanceof Error) {
					throw arguments[1]
				} else {
					throw new Error("Uncaught, unspecified 'error' event.")
				}
				return false
			}
		}
		if (!this.eh6b) return false;
		var handler = this.eh6b[type];
		if (!handler) return false;
		if (typeof handler == "function") {
			if (this.domain) {
				this.domain.enter()
			}
			switch (arguments.length) {
			case 1:
				handler.call(this);
				break;
			case 2:
				handler.call(this, arguments[1]);
				break;
			case 3:
				handler.call(this, arguments[1], arguments[2]);
				break;
			default:
				var l = arguments.length;
				var args = new Array(l - 1);
				for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
				handler.apply(this, args)
			}
			if (this.domain) {
				this.domain.exit()
			}
			return true
		} else if (isArray(handler)) {
			if (this.domain) {
				this.domain.enter()
			}
			var l = arguments.length;
			var args = new Array(l - 1);
			for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
			var listeners = handler.slice();
			for (var i = 0, l = listeners.length; i < l; i++) {
				listeners[i].apply(this, args)
			}
			if (this.domain) {
				this.domain.exit()
			}
			return true
		} else {
			return false
		}
	};
	EventEmitter.prototype.addListener = function(type, listener) {
		if ("function" !== typeof listener) {
			throw new Error("addListener only takes instances of Function")
		}
		if (!this.eh6b) this.eh6b = {};
		this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
		if (!this.eh6b[type]) {
			this.eh6b[type] = listener
		} else if (isArray(this.eh6b[type])) {
			this.eh6b[type].push(listener)
		} else {
			this.eh6b[type] = [this.eh6b[type], listener]
		}
		if (isArray(this.eh6b[type]) && !this.eh6b[type].warned) {
			var m;
			if (this.bGp2x !== undefined) {
				m = this.bGp2x
			} else {
				m = defaultMaxListeners
			}
			if (m && m > 0 && this.eh6b[type].length > m) {
				this.eh6b[type].warned = true;
				console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.eh6b[type].length);
				console.trace()
			}
		}
		return this
	};
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	EventEmitter.prototype.once = function(type, listener) {
		if ("function" !== typeof listener) {
			throw new Error(".once only takes instances of Function")
		}
		var self = this;

		function g() {
			self.removeListener(type, g);
			listener.apply(this, arguments)
		}
		g.listener = listener;
		self.on(type, g);
		return this
	};
	EventEmitter.prototype.removeListener = function(type, listener) {
		if ("function" !== typeof listener) {
			throw new Error("removeListener only takes instances of Function")
		}
		if (!this.eh6b || !this.eh6b[type]) return this;
		var list = this.eh6b[type];
		if (isArray(list)) {
			var position = -1;
			for (var i = 0, length = list.length; i < length; i++) {
				if (list[i] === listener || list[i].listener && list[i].listener === listener) {
					position = i;
					break
				}
			}
			if (position < 0) return this;
			list.splice(position, 1)
		} else if (list === listener || list.listener && list.listener === listener) {
			delete this.eh6b[type]
		}
		return this
	};
	EventEmitter.prototype.removeAllListeners = function(type) {
		if (arguments.length === 0) {
			this.eh6b = {};
			return this
		}
		var events = this.eh6b && this.eh6b[type];
		if (!events) return this;
		if (isArray(events)) {
			events.splice(0)
		} else {
			this.eh6b[type] = null
		}
		return this
	};
	EventEmitter.prototype.listeners = function(type) {
		if (!this.eh6b) this.eh6b = {};
		if (!this.eh6b[type]) this.eh6b[type] = [];
		if (!isArray(this.eh6b[type])) {
			this.eh6b[type] = [this.eh6b[type]]
		}
		return this.eh6b[type]
	}
})();
(function() {
	if (typeof Object.create !== "function") {
		Object.create = function(o) {
			function F() {}
			F.prototype = o;
			return new F
		}
	}
	var root = window;
	var pomelo = Object.create(EventEmitter.prototype);
	root.pomelo = pomelo;
	var socket = null;
	var id = 1;
	var callbacks = {};
	var route = "web-connector.messageHandler.";
	var isRegister = false;
	var success = 200;
	var register_ack = "register";
	var bind_ack = "bind";
	var regBind_ack = "registerAndBind";
	var cancelBind_ack = "cancelBind";
	var message_store = {};
	var heartbeat_interval = 1e3 * 60;
	var heartbeat_timer;
	var current_user;
	var current_domain;
	var cacheMessageIds = [];
	var cacheSize = 100;
	pomelo.init = function(host, port, reconnect, cb) {
		var url = "ws://" + host;
		if (port) {
			url += ":" + port
		}
		var params;
		if (reconnect) {
			params = {
				"force new connection": true,
				reconnect: true,
				"max reconnection attempts": 50
			}
		} else {
			params = {
				"force new connection": true,
				reconnect: false
			}
		}
		socket = io.connect(url, params);
		socket.on("connect", function() {
			console.log("[pomeloclient.init] websocket connected!");
			cb()
		});
		socket.on("reconnect", function() {
			pomelo.emit("reconnect")
		});
		socket.on("message", function(data) {
			message_store = {};
			if (typeof data === "string") {
				data = JSON.parse(data)
			}
			if (data instanceof Array) {
				processMessageBatch(data)
			} else {
				processMessage(data);
				emitMessage()
			}
		});
		socket.on("error", function(err) {
			cb(err)
		});
		socket.on("disconnect", function(reason) {
			isRegister = false;
			pomelo.emit("disconnect", reason)
		})
	};
	var request = function(method, opts, cb) {
			if (!method) {
				console.error("request message error with no method.");
				return
			}
			id++;
			callbacks[id] = cb;
			sendMsg(method, id, opts)
		};
	var notify = function(method, msg) {
			if (!method) {
				console.error("notify message error with no method.");
				return
			}
			sendMsg(method, 0, msg)
		};
	var sendMsg = function(method, msgId, msg) {
			var path = route + method;
			var rs = {
				id: msgId,
				route: path,
				msg: msg
			};
			var sg = JSON.stringify(rs);
			socket.send(sg)
		};
	var processMessageBatch = function(msgs) {
			for (var i = 0, l = msgs.length; i < l; i++) {
				processMessage(msgs[i])
			}
			emitMessage()
		};
	var emitMessage = function() {
			for (var key in message_store) {
				pomelo.emit(key, message_store[key])
			}
		};
	var processMessage = function(msg) {
			if (msg.id) {
				var cb = callbacks[msg.id];
				delete callbacks[msg.id];
				if (typeof cb !== "function") {
					console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
					return
				}
				cb(msg.body);
				if (msg.body.type === register_ack && msg.body.code == success) {
					isRegister = true
				}
				if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
					heartbeat_timer = setInterval(function() {
						notify("heartbeat", {
							flag: "online",
							domain: current_domain,
							user: current_user
						})
					}, heartbeat_interval)
				}
				if (msg.body.type === cancelBind_ack && msg.body.code == success) {
					clearInterval(heartbeat_timer)
				}
				return
			} else {
				if (!filterMessage(msg)) {
					return
				}
				if (!message_store[msg.route]) {
					if (msg.body instanceof Array) {
						message_store[msg.route] = msg.body
					} else {
						message_store[msg.route] = [msg.body]
					}
				} else {
					var arr = message_store[msg.route];
					if (msg.body instanceof Array) {
						var messages = msg.body;
						for (var i = 0; i < messages.length; i++) {
							arr.push(messages[i])
						}
					} else {
						arr.push(msg.body)
					}
					message_store[msg.route] = arr
				}
			}
		};
	var filterMessage = function(message) {
			var msgs = message.body;
			var ids = [];
			var results = {};
			if (msgs instanceof Array) {
				for (var i = 0; i < msgs.length; i++) {
					var id = msgs[i].msgId;
					ids.push(id)
				}
				var duplicatedIds = checkMessage(ids);
				if (duplicatedIds.length !== 0) {
					return false
				} else {
					cacheMessageIds = cacheMessageIds.concat(ids);
					if (cacheMessageIds.length > cacheSize) {
						var length = cacheMessageIds - cacheSize;
						for (var i = 0; i < length; i++) {
							cacheMessageIds.shift()
						}
					}
				}
			}
			return true
		};
	var checkMessage = function(ids) {
			var array = [];
			for (var i = 0; i < cacheMessageIds.length; i++) {
				var id = cacheMessageIds[i];
				for (var j = 0; j < ids.length; j++) {
					if (ids[j] === id) {
						array.push(id)
					}
				}
			}
			return array
		};
	pomelo.register = function(opts, cb) {
		request("register", opts, cb)
	};
	pomelo.bind = function(opts, cb) {
		if (isRegister) {
			current_domain = opts.domain;
			current_user = opts.user;
			request("bind", opts, cb)
		} else {
			console.log("cannot bind without registration.")
		}
	};
	pomelo.registerAndBind = function(opts, cb) {
		current_domain = opts.domain;
		current_user = opts.user;
		request("registerAndBind", opts, cb)
	};
	pomelo.cancelBind = function(opts, cb) {
		current_domain = null;
		current_user = null;
		request("cancelBind", opts, cb)
	};
	pomelo.getOnlineUser = function(opts, cb) {
		request("getOnlineUser", opts, cb)
	};
	pomelo.disconnect = function() {
		if (socket) {
			socket.disconnect();
			socket = null
		}
	};
	pomelo.ackMessage = function(domain, msgs) {
		var msgIds = "";
		var types = "";
		var message = {};
		var user;
		for (var i = 0; i < msgs.length; i++) {
			var data = msgs[i];
			if (!user) {
				user = data.user
			}
			msgIds += data.msgId;
			types += data.type;
			if (i !== msgs.length - 1) {
				msgIds += ";";
				types += ";"
			}
		}
		var message = {
			user: user,
			msgIds: msgIds,
			types: types,
			domain: domain
		};
		notify("ack", message)
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		I4M = c3x("nej.ut"),
		l4p = c3x("nm.x"),
		dE5J = c3x("nm.u"),
		q4u = c3x("nm.d"),
		Rq0x = c3x("pomelo"),
		U4Y = 0,
		b3x, L4P;
	q4u.fp6j({
		"polling-init": {
			url: "/api/push/init",
			format: function(Q4U) {
				U4Y = 2;
				var tc1x = {
					domain: "music.163.com",
					host: MUSIC_CONFIG.pushHost,
					port: MUSIC_CONFIG.pushPort,
					key: MUSIC_CONFIG.pushKey,
					secret: "bec0b878892740c498505a85eb3dcec9"
				},
					j4n = Q4U.account || bb4f,
					do5t = GUser.userId;
				Rq0x.init(tc1x.host, tc1x.port, true, this.cxJ4N.f4j(this, {
					user: do5t,
					nonce: j4n.nonce,
					domain: tc1x.domain,
					productKey: tc1x.key,
					signature: j4n.signature,
					expire_time: j4n.expireTime
				}))
			},
			onerror: function() {
				return this.bxR0x()
			}
		}
	});
	q4u.Dv4z = NEJ.C();
	b3x = q4u.Dv4z.N4R(q4u.hJ7C);
	b3x.cw5B = function() {
		var ru0x = !1;
		return function(e4i) {
			if (!ru0x) {
				ru0x = !0
			}
			this.cE5J(e4i);
			Rq0x.on("specify", this.qy0x.f4j(this));
			Rq0x.on("broadcast", this.qy0x.f4j(this))
		}
	}();
	b3x.qy0x = function(d4h) {
		k4o.bd4h(d4h, function(bG4K) {
			h4l.z4D(q4u.Dv4z, "message", bG4K)
		}, this)
	};
	b3x.bxR0x = function() {
		var bA4E = 500;
		return function() {
			U4Y = 0;
			Rq0x.disconnect();
			if (bA4E > 6e4) bA4E = 500;
			bA4E *= 2
		}
	}();
	b3x.cxJ4N = function(e4i, ca4e) {
		if ( !! ca4e) {
			return this.bxR0x()
		}
		U4Y = 3;
		Rq0x.registerAndBind(e4i, function(m4q) {
			if (m4q.code != 200) {
				return this.bxR0x()
			}
			U4Y = 4
		}.f4j(this))
	};
	b3x.cGh6b = function() {
		dE5J.cxG4K.gm6g().cGi6c()
	};
	b3x.cGj6d = function() {
		dE5J.cxG4K.gm6g().cGk6e()
	};
	b3x.bxX0x = function() {
		var ru0x = !1;
		return function() {
			if (ru0x) return;
			ru0x = !0;
			this.cp5u("polling-init", {})
		}
	}();
	I4M.fK6E.A4E({
		event: "message",
		element: q4u.Dv4z
	})
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		v4z = c3x("nej.j"),
		dy5D = c3x("nej.p"),
		k4o = c3x("nej.u"),
		n4r = c3x("nm.l"),
		q4u = c3x("nm.d"),
		l4p = c3x("nm.x"),
		cy5D = c3x("api"),
		b3x, L4P;
	var ge6Y = a3x.jm8e('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
	n4r.bxY0x = NEJ.C();
	b3x = n4r.bxY0x.N4R(n4r.eo6i);
	L4P = n4r.bxY0x.cs5x;
	b3x.bl4p = function(e4i) {
		e4i.title = "意见反馈";
		this.bn4r(e4i)
	};
	b3x.ch4l = function() {
		this.cf4j = ge6Y
	};
	b3x.bW4a = function() {
		this.ci4m();
		this.hE7x = {};
		var KA6u = a3x.H4L;
		var Id5i = h4l.s4w;
		this.hE7x.submit_btn = KA6u(this.o4s, "u-btn2")[0];
		this.hE7x.cancle_btn = KA6u(this.o4s, "u-btn2")[1];
		this.hE7x.prompt_msg = KA6u(this.o4s, "u-err")[0];
		this.hE7x.zs = KA6u(this.o4s, "zs")[0];
		a3x.ba4e(this.hE7x.zs, "display", "none");
		this.hE7x.fb_txt = KA6u(this.o4s, "u-txt")[0];
		this.hE7x.contact = KA6u(this.o4s, "u-txt")[1];
		a3x.gr6l(this.hE7x.fb_txt, "holder");
		a3x.gr6l(this.hE7x.contact, "holder");
		if (a3x.bE4I(this.hE7x.fb_txt.parentNode, "holder-parent")) {
			a3x.ba4e(this.hE7x.fb_txt.parentNode, "display", "block")
		}
		if (a3x.bE4I(this.hE7x.contact.parentNode, "holder-parent")) {
			a3x.ba4e(this.hE7x.contact.parentNode, "display", "block")
		}
		Id5i(this.hE7x.submit_btn, "click", this.cxC4G.f4j(this));
		Id5i(this.hE7x.cancle_btn, "click", this.cxB4F.f4j(this));
		Id5i(this.hE7x.prompt_msg, "msgShow", this.cxA4E.f4j(this));
		Id5i(this.hE7x.fb_txt, "keyup", this.wf2x.f4j(this));
		Id5i(this.hE7x.fb_txt, "input", this.fW6Q.f4j(this));
		Id5i(this.hE7x.contact, "keyup", this.cxz4D.f4j(this));
		Id5i(this.hE7x.contact, "input", this.bHq2x.f4j(this));
		this.kI8A = q4u.hO7H.A4E()
	};
	b3x.cxC4G = function(d4h) {
		h4l.bg4k(d4h);
		if (this.cQ5V()) return;
		var bo4s = this.hE7x.fb_txt.value.trim();
		var bq4u = bo4s.length;
		var e4i = {
			type: "json",
			method: "post",
			noEnc: true
		};
		var bHF2x = this.hE7x.contact.value.trim();
		var bcF4J = {
			ua: navigator.userAgent,
			hash: top.location.hash,
			href: location.href,
			flash: l4p.bpk8c(),
			contact: bHF2x
		};
		var j4n = {
			content: bo4s,
			client: "web",
			xInfo: JSON.stringify(bcF4J)
		},
			on9e = this.kI8A.cDt6n();
		if (on9e && on9e.length) {
			j4n.log = on9e.join("\n")
		}
		if (bq4u == 0) {
			this.hE7x.prompt_msg.innerHTML = "反馈内容不能为空";
			a3x.ba4e(this.hE7x.prompt_msg, "display", "block");
			return
		}
		if (bHF2x.length > 100) {
			this.hE7x.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
			a3x.ba4e(this.hE7x.prompt_msg, "display", "block");
			return
		}
		this.cQ5V(true);
		e4i.data = k4o.cD5I(j4n);
		e4i.onload = this.cxy4C.f4j(this);
		e4i.onerror = this.jb7U.f4j(this);
		v4z.bm4q("/api/feedback/web", e4i)
	};
	b3x.fW6Q = function(d4h) {
		var bq4u = this.hE7x.fb_txt.value.trim().length;
		if (bq4u > 0) a3x.ba4e(this.hE7x.prompt_msg, "display", "none");
		dy5D.dr5w.browser == "ie" && dy5D.dr5w.version < "7.0" ? setTimeout(this.gg6a.f4j(this), 0) : this.gg6a()
	};
	b3x.wf2x = function(d4h) {
		if (d4h.keyCode === 8) this.gg6a()
	};
	b3x.gg6a = function() {
		var bq4u = this.hE7x.fb_txt.value.trim().length;
		this.hE7x.zs.innerHTML = !bq4u ? "0/140" : bq4u + "/140"
	};
	b3x.bHq2x = function(d4h) {
		var bq4u = this.hE7x.contact.value.trim().length;
		if (bq4u > 0) a3x.ba4e(this.hE7x.prompt_msg, "display", "none")
	};
	b3x.cxz4D = function(d4h) {
		if (d4h.keyCode === 8) this.bHq2x()
	};
	b3x.cxB4F = function(d4h) {
		h4l.cn4r(d4h);
		this.bt4x()
	};
	b3x.cxA4E = function(d4h) {
		var g4k = h4l.X4b(d4h);
		g4k.innerHTML = "请输入反馈内容"
	};
	b3x.cGm6g = function(cGn6h) {
		var g4k = h4l.X4b(d4h);
		g4k.innerHTML = ""
	};
	b3x.cxy4C = function(m4q) {
		this.cQ5V(false);
		this.bt4x();
		n4r.Z4d.J4N({
			tip: "意见发送成功",
			autoclose: true
		})
	};
	b3x.jb7U = function(m4q) {
		this.cQ5V(false);
		n4r.Z4d.J4N({
			tip: "意见发送失败",
			autoclose: true
		})
	};
	b3x.cQ5V = function(db5g) {
		return this.dS5X(this.hE7x.submit_btn, db5g, "发送意见", "发送中...")
	};
	b3x.J4N = function() {
		L4P.J4N.call(this);
		this.cQ5V(false);
		this.hE7x.fb_txt.value = "";
		this.hE7x.contact.value = "";
		a3x.ba4e(this.hE7x.prompt_msg, "display", "none");
		this.gg6a()
	};
	l4p.cxt4x = function(e4i) {
		e4i = e4i || {};
		if (e4i.title === undefined) e4i.title = "意见反馈";
		n4r.bxY0x.J4N(e4i)
	};
	cy5D.feedback = l4p.feedback = l4p.cxt4x
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		O4S = c3x("nej.ui"),
		b3x;
	if ( !! O4S.xR2x) return;
	O4S.xR2x = NEJ.C();
	b3x = O4S.xR2x.N4R(O4S.el6f);
	b3x.cw5B = function() {
		this.gY7R = this.bIE3x();
		this.cE5J()
	};
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.cq5v = e4i.index;
		this.gz7s = e4i.total;
		this.hw7p = e4i.range;
		this.gI7B(e4i.data)
	};
	b3x.bC4G = function() {
		this.bF4J();
		delete this.bk4o;
		delete this.cq5v;
		delete this.gz7s;
		delete this.hw7p
	};
	b3x.iA7t = br4v;
	b3x.bIE3x = function() {
		var gG7z = +(new Date);
		return function() {
			return "itm-" + ++gG7z
		}
	}();
	b3x.Fp4t = function() {
		return this.gY7R
	};
	b3x.ii7b = function() {
		return this.bk4o
	};
	b3x.gI7B = function(j4n) {
		this.bk4o = j4n || {};
		this.iA7t(this.bk4o)
	}
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		O4S = c3x("nej.ui"),
		b3x, L4P;
	if ( !! O4S.vs1x) return;
	O4S.vs1x = NEJ.C();
	b3x = O4S.vs1x.N4R(O4S.xR2x);
	L4P = O4S.vs1x.cs5x;
	b3x.bl4p = function(e4i) {
		this.cxs4w = e4i.pkey || "id";
		this.bn4r(e4i)
	};
	b3x.HY5d = function(j4n) {
		this.z4D("ondelete", {
			ext: j4n,
			id: this.Fp4t(),
			data: this.ii7b(),
			body: this.lB8t()
		})
	};
	b3x.sY1x = function(j4n) {
		this.z4D("onupdate", {
			ext: j4n,
			id: this.Fp4t(),
			data: this.ii7b(),
			body: this.lB8t()
		})
	};
	b3x.gI7B = function(j4n) {
		L4P.gI7B.apply(this, arguments);
		this.gY7R = this.bk4o[this.cxs4w] || this.bIE3x()
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		fy6s = NEJ.R,
		a3x = c3x("nej.e"),
		k4o = c3x("nej.u"),
		O4S = c3x("nej.ui"),
		b3x, iX7Q, bxG0x;
	if ( !! O4S.bxF0x) return;
	O4S.bxF0x = NEJ.C();
	b3x = O4S.bxF0x.N4R(O4S.el6f);
	b3x.bl4p = function(e4i) {
		this.bdq4u = NEJ.X({}, e4i);
		this.fT6N = NEJ.X({}, e4i);
		delete this.bdq4u.onchange;
		this.fT6N.onchange = this.fY6S.f4j(this);
		this.bn4r(e4i);
		this.cxr4v({
			number: e4i.number,
			label: e4i.label || bb4f
		})
	};
	b3x.bC4G = function() {
		this.bF4J();
		if ( !! this.ll8d) {
			this.ll8d.T4X();
			delete this.ll8d
		}
		delete this.bdq4u;
		delete this.fT6N;
		this.cxq4u();
		this.o4s.innerHTML = "&nbsp;"
	};
	b3x.ch4l = function() {
		this.mj8b = iX7Q
	};
	b3x.cxr4v = function(j4n) {
		a3x.dA5F(this.o4s, bxG0x, j4n);
		var gG7z = a3x.Mi7b();
		this.fT6N.list = a3x.H4L(this.o4s, "js-i-" + gG7z);
		this.fT6N.pbtn = (a3x.H4L(this.o4s, "js-p-" + gG7z) || fy6s)[0];
		this.fT6N.nbtn = (a3x.H4L(this.o4s, "js-n-" + gG7z) || fy6s)[0]
	};
	b3x.bW4a = function() {
		this.ci4m()
	};
	b3x.cGq6k = function(j4n) {
		return a3x.cd4h(bxG0x, j4n)
	};
	b3x.fY6S = function(d4h) {
		if (this.Nl7e) return;
		var r4v = d4h.index,
			cB5G = d4h.total;
		this.Nl7e = !0;
		this.No7h(r4v, cB5G);
		k4o.bd4h(this.ZB3x, function(tj1x) {
			tj1x.No7h(r4v, cB5G)
		});
		this.Nl7e = !1;
		this.z4D("onchange", d4h)
	};
	b3x.f4j = function(bI4M) {
		bI4M = a3x.B4F(bI4M);
		if (!bI4M) return this;
		var ct5y = NEJ.X({}, this.bdq4u);
		ct5y.parent = bI4M;
		ct5y.index = this.tm1x();
		ct5y.total = this.kw8o();
		var tj1x = this.constructor.A4E(ct5y);
		tj1x.wq2x("onchange", this.fT6N.onchange);
		if (!this.ZB3x) this.ZB3x = [];
		this.ZB3x.push(tj1x);
		return this
	};
	b3x.cxq4u = function() {
		var bkA6u = function(tj1x, r4v, i4m) {
				tj1x.T4X();
				i4m.splice(r4v, 1)
			};
		return function() {
			k4o.nk9b(this.ZB3x, bkA6u)
		}
	}();
	b3x.lb8T = function(r4v) {
		if (!this.ll8d) return;
		this.ll8d.lb8T(r4v)
	};
	b3x.tm1x = function() {
		if (!this.ll8d) return 1;
		return this.ll8d.tm1x()
	};
	b3x.kw8o = function() {
		if (!this.ll8d) return 1;
		return this.ll8d.kw8o()
	};
	b3x.No7h = function(r4v, cB5G) {
		if (!this.ll8d) return;
		this.ll8d.No7h(r4v, cB5G)
	};
	b3x.buA9r = function(cB5G) {
		if (!this.ll8d) return;
		this.ll8d.buA9r(cB5G)
	};
	iX7Q = a3x.to1x(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
	bxG0x = a3x.eB6v('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		O4S = c3x("nej.ut"),
		b3x;
	if ( !! O4S.bdT5Y) return;
	O4S.bdT5Y = NEJ.C();
	b3x = O4S.bdT5Y.N4R(O4S.cJ5O);
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.bdV5a = e4i.pbtn;
		this.cr5w = e4i.nbtn;
		this.bee5j = e4i.sbtn;
		this.WU2x = e4i.ebtn;
		this.ji8a = e4i.event || "click";
		this.kQ8I = e4i.selected || "js-selected";
		this.nV9M = e4i.disabled || "js-disabled";
		this.cxo4s(e4i.list);
		this.No7h(e4i.index || 1, e4i.total || 1)
	};
	b3x.bC4G = function() {
		this.bF4J();
		delete this.bU4Y;
		delete this.ji8a;
		delete this.bdV5a;
		delete this.cr5w;
		delete this.bee5j;
		delete this.WU2x;
		delete this.bLh3x;
		delete this.gz7s;
		delete this.cq5v;
		delete this.kQ8I;
		delete this.nV9M
	};
	b3x.cxo4s = function() {
		var brG8y = function(g4k) {
				this.bU4Y.push(g4k);
				this.bX4b([
					[g4k, this.ji8a, this.cv5A.eA6u(this, 0)]
				])
			};
		return function(i4m) {
			this.bU4Y = [];
			this.bX4b([
				[this.bdV5a, "click", this.cv5A.eA6u(this, -1)],
				[this.cr5w, "click", this.cv5A.eA6u(this, 1)],
				[this.bee5j, "click", this.cv5A.eA6u(this, -2)],
				[this.WU2x, "click", this.cv5A.eA6u(this, 2)]
			]);
			k4o.bd4h(i4m, brG8y, this)
		}
	}();
	b3x.He5j = function(g4k, r4v) {
		if (r4v == null) {
			g4k.innerText = "";
			a3x.ba4e(g4k, "display", "none");
			a3x.x4B(g4k, this.kQ8I)
		} else {
			g4k.innerText = r4v;
			a3x.ba4e(g4k, "display", "");
			r4v == this.cq5v ? a3x.y4C(g4k, this.kQ8I) : a3x.x4B(g4k, this.kQ8I)
		}
	};
	b3x.bro8g = function() {
		if (this.cq5v <= 1) {
			a3x.y4C(this.bdV5a, this.nV9M);
			a3x.y4C(this.bee5j, this.nV9M)
		} else {
			a3x.x4B(this.bdV5a, this.nV9M);
			a3x.x4B(this.bee5j, this.nV9M)
		}
		if (this.cq5v >= this.gz7s) {
			a3x.y4C(this.cr5w, this.nV9M);
			a3x.y4C(this.WU2x, this.nV9M)
		} else {
			a3x.x4B(this.cr5w, this.nV9M);
			a3x.x4B(this.WU2x, this.nV9M)
		}
	};
	b3x.WI2x = br4v;
	b3x.bpO8G = function() {
		this.WI2x();
		this.bro8g();
		this.z4D("onchange", {
			last: this.bLh3x,
			total: this.gz7s,
			index: this.cq5v,
			ext: this.boO8G
		})
	};
	b3x.bLR4V = function(r4v) {
		r4v = parseInt(r4v);
		if (isNaN(r4v) || this.gz7s == null) return !1;
		r4v = Math.max(1, Math.min(r4v, this.gz7s));
		this.bLh3x = this.cq5v;
		this.cq5v = r4v;
		return !0
	};
	b3x.boA8s = function(cB5G) {
		cB5G = parseInt(cB5G);
		if (isNaN(cB5G) || cB5G < 1) return !1;
		this.gz7s = cB5G;
		return !0
	};
	b3x.cv5A = function(d4h, fa6U) {
		h4l.cn4r(d4h);
		var F4J = h4l.X4b(d4h);
		if (!F4J || a3x.bE4I(F4J, this.kQ8I) || a3x.bE4I(F4J, this.nV9M)) return;
		var r4v = F4J.innerText;
		switch (fa6U) {
		case 1:
		case -1:
			r4v = this.cq5v + fa6U;
			break;
		case 2:
			r4v = this.gz7s;
			break;
		case -2:
			r4v = 1;
			break
		}
		this.lb8T(r4v)
	};
	b3x.tm1x = function() {
		return this.cq5v
	};
	b3x.lb8T = function(r4v) {
		var cxn4r = this.cq5v;
		this.bLR4V(r4v);
		if (cxn4r != this.cq5v) this.bpO8G();
		return this
	};
	b3x.kw8o = function() {
		return this.gz7s
	};
	b3x.RA0x = function(cB5G) {
		if (this.boA8s(cB5G) && this.cq5v != null) {
			this.cq5v = 1;
			this.bpO8G()
		}
		return this
	};
	b3x.buA9r = function(cB5G) {
		if (this.boA8s(cB5G)) {
			this.WI2x();
			this.bro8g()
		}
		return this
	};
	b3x.No7h = function(r4v, cB5G) {
		if (!this.boA8s(cB5G) || !this.bLR4V(r4v)) return this;
		this.bpO8G();
		return this
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		a3x = c3x("nej.e"),
		k4o = c3x("nej.u"),
		cZ5e = c3x("nej.x"),
		O4S = c3x("nej.ut"),
		b3x;
	if ( !! O4S.OG0x) return;
	O4S.OG0x = NEJ.C();
	b3x = O4S.OG0x.N4R(O4S.bdT5Y);
	b3x.cw5B = function() {
		this.cE5J();
		var g4k = a3x.dj5o("span", "zdot");
		g4k.innerText = "...";
		this.bbb4f = [g4k.cloneNode(true), g4k]
	};
	b3x.bC4G = function() {
		this.bF4J();
		this.bMH4L()
	};
	b3x.bMH4L = function() {
		a3x.mS9J(this.bbb4f[0]);
		a3x.mS9J(this.bbb4f[1])
	};
	b3x.WI2x = function() {
		this.boO8G = {
			last: !1,
			first: !1,
			list: this.bU4Y
		};
		this.bMH4L();
		this.He5j(this.bU4Y[0], 1);
		var bM4Q = 1,
			bq4u = this.bU4Y.length;
		if (this.gz7s < bq4u) {
			for (var rj0x; bM4Q < bq4u; bM4Q++) {
				rj0x = bM4Q + 1;
				this.He5j(this.bU4Y[bM4Q], rj0x > this.gz7s ? null : rj0x)
			}
			return
		}
		if (this.cq5v > 1) {
			var cz5E = Math.floor((bq4u - 2) / 2),
				cxm4q = this.gz7s - bq4u + 2,
				hA7t = Math.max(2, this.cq5v - cz5E);
			if (this.gz7s >= bq4u) {
				hA7t = Math.min(hA7t, cxm4q)
			}
			if (hA7t > 2) {
				this.bU4Y[0].insertAdjacentElement("afterEnd", this.bbb4f[0]);
				this.boO8G.first = !0
			}
			for (var r4v;; bM4Q++) {
				r4v = hA7t + bM4Q - 1;
				if (r4v > this.cq5v) break;
				this.He5j(this.bU4Y[bM4Q], r4v)
			}
		}
		if (this.cq5v < this.gz7s) {
			var r4v, hA7t = this.cq5v + 1;
			for (var i = 0, l = bq4u - 2;; i++, bM4Q++) {
				r4v = hA7t + i;
				if (bM4Q > l || r4v > this.gz7s) break;
				this.He5j(this.bU4Y[bM4Q], r4v)
			}
			if (r4v < this.gz7s) {
				this.bU4Y[bM4Q].insertAdjacentElement("beforeBegin", this.bbb4f[1]);
				this.boO8G.last = !0
			}
			if (r4v <= this.gz7s) {
				this.He5j(this.bU4Y[bM4Q++], this.gz7s)
			}
		}
		for (; bM4Q < bq4u; bM4Q++) {
			this.He5j(this.bU4Y[bM4Q])
		}
	};
	a3x.cxl4p = cZ5e.cxl4p = function(bI4M, e4i) {
		var C4G = a3x.lP8H(bI4M);
		if (!C4G) return null;
		if (!O4S.beT5Y(C4G, O4S.OG0x)) {
			e4i = e4i || {};
			var i4m = !e4i.clazz ? a3x.dk5p(C4G) : a3x.H4L(C4G, e4i.clazz);
			e4i.pbtn = i4m.shift();
			e4i.nbtn = i4m.pop();
			e4i.list = i4m;
			delete e4i.clazz
		}
		return O4S.beT5Y(C4G, O4S.OG0x, e4i || bb4f)
	};
	cZ5e.isChange = !0
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		fy6s = NEJ.R,
		a3x = c3x("nej.e"),
		k4o = c3x("nej.u"),
		I4M = c3x("nej.ut"),
		O4S = c3x("nej.ui"),
		b3x, L4P, ge6Y;
	if ( !! O4S.OQ0x) return;
	O4S.OQ0x = NEJ.C();
	b3x = O4S.OQ0x.N4R(O4S.bxF0x);
	L4P = O4S.OQ0x.cs5x;
	b3x.bl4p = function(e4i) {
		e4i.number = parseInt(e4i.number) || 9;
		this.bn4r(e4i);
		this.ll8d = I4M.OG0x.A4E(this.fT6N)
	};
	b3x.fY6S = function(d4h) {
		if ( !! this.bdq4u.noend) {
			var bMZ4d = d4h.ext || bb4f,
				i4m = bMZ4d.list || fy6s;
			if (bMZ4d.last) {
				a3x.ba4e(i4m[i4m.length - 1], "display", "none")
			}
		}
		L4P.fY6S.apply(this, arguments)
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		bc4g = c3x("nej.ui"),
		O4S = c3x("nej.ut"),
		b3x;
	if ( !! O4S.bbX4b) return;
	O4S.bbX4b = NEJ.C();
	b3x = O4S.bbX4b.N4R(O4S.cJ5O);
	b3x.bl4p = function(e4i) {
		this.iU7N = {};
		this.bn4r(e4i);
		this.il7e = a3x.B4F(e4i.parent);
		this.ff6Z = {
			parent: this.il7e
		};
		this.oH9y = parseInt(e4i.limit) || 10;
		this.yN2x = parseInt(e4i.first) || this.oH9y;
		this.cxk4o(e4i.item);
		this.cxj4n(e4i.cache || bb4f);
		this.cxi4m(e4i.pager || bb4f);
		this.gI7B()
	};
	b3x.bC4G = function() {
		this.z4D("onbeforerecycle");
		this.Pk0x();
		this.bF4J();
		if (this.iU7N.clear) {
			this.S4W.vw1x(this.iU7N.key)
		}
		this.S4W.T4X();
		if ( !! this.jy8q) {
			this.jy8q.T4X();
			delete this.jy8q
		}
		delete this.bOa4e;
		delete this.fT6N;
		delete this.bcD4H;
		delete this.S4W;
		delete this.il7e;
		delete this.Pr0x;
		delete this.ff6Z;
		delete this.iU7N
	};
	b3x.bOr4v = function() {
		var df5k = /\{(.*?)\}/gi,
			cxh4l = function(oW9N, j4n) {
				return (oW9N || "{id}{seed}").replace(df5k, function($1, $2) {
					var D4H = j4n[$2];
					return D4H == null ? $1 : D4H
				})
			};
		return function(C4G) {
			var K4O = cxh4l(this.ff6Z.jstIdTempalte, {
				id: C4G,
				seed: a3x.Mi7b()
			});
			if (!this.ff6Z.jstIdType) {
				return a3x.B4F(K4O)
			} else if (this.ff6Z.jstIdType == 1) {
				return (a3x.H4L(this.il7e, K4O) || [])[0]
			}
		}
	}();
	b3x.BT3x = function(bM4Q, bi4m, gc6W, bq4u) {
		var m4q = {
			index: 1,
			total: 1
		};
		if (bi4m >= bM4Q) {
			m4q.index = Math.floor((bi4m - bM4Q) / gc6W) + 2
		}
		if (bq4u > bM4Q) {
			m4q.total = Math.ceil((bq4u - bM4Q) / gc6W) + 1
		}
		return m4q
	};
	b3x.bOF4J = function(K4O) {
		delete this.Pr0x;
		this.KI6C = K4O;
		this.bX4b([
			[this.il7e, "click", this.cxg4k.f4j(this)]
		])
	};
	b3x.cxk4o = function(p4t) {
		if (k4o.fC6w(p4t)) {
			this.bOF4J(p4t);
			return
		}
		NEJ.X(this.ff6Z, p4t);
		var ec6W = this.ff6Z.klass;
		delete this.ff6Z.klass;
		if (k4o.fC6w(ec6W)) {
			this.bOF4J(ec6W);
			return
		}
		delete this.KI6C;
		this.Pr0x = ec6W;
		this.ff6Z.ondelete = this.z4D.f4j(this, "ondelete");
		this.ff6Z.onupdate = this.z4D.f4j(this, "onupdate")
	};
	b3x.cxj4n = function(R4V) {
		var ec6W = R4V.klass,
			kr8j = NEJ.X({}, R4V);
		this.iU7N.key = kr8j.lkey;
		this.iU7N.data = kr8j.data || {};
		this.iU7N.clear = !! kr8j.clear;
		this.ff6Z.pkey = kr8j.key || "id";
		kr8j.onlistload = this.bng7Z.f4j(this);
		kr8j.onpullrefresh = this.cxf4j.f4j(this);
		if ( !! ec6W && "onlistchange" in ec6W) {
			this.bX4b([
				[ec6W, "listchange", this.bmu7n.f4j(this)]
			])
		} else {
			kr8j.onitemadd = this.bfn5s.f4j(this);
			kr8j.onitemdelete = this.VX2x.f4j(this);
			kr8j.onitemupdate = this.bPF5K.f4j(this)
		}
		this.S4W = (ec6W || O4S.RO0x).A4E(kr8j);
		if (R4V.total != null) {
			this.S4W.RA0x(this.iU7N.key, R4V.total)
		}
		if ( !! R4V.list) {
			this.S4W.wh2x(this.iU7N.key, R4V.list)
		}
	};
	b3x.cxi4m = function(tj1x) {
		this.bOa4e = tj1x.klass || bc4g.OQ0x;
		this.fT6N = NEJ.X({}, tj1x);
		if (k4o.eL6F(tj1x.parent)) {
			this.fT6N.parent = tj1x.parent[0];
			this.Qm0x = tj1x.parent.slice(1);
			if (!this.Qm0x || !this.Qm0x.length) {
				delete this.Qm0x
			}
		}
		delete this.fT6N.klass
	};
	b3x.Pk0x = function() {
		var gL7E = /^(?:table|tr|tbody|ul|ol|select)$/i;
		return function() {
			this.z4D("onbeforelistclear", {
				parent: this.il7e
			});
			if ( !! this.fQ6K && this.fQ6K.length > 0) {
				this.fQ6K = this.Pr0x.T4X(this.fQ6K);
				delete this.fQ6K
			}
			if (gL7E.test(this.il7e.tagName)) {
				a3x.bVz7s(this.il7e)
			} else {
				this.il7e.innerHTML = ""
			}
		}
	}();
	b3x.bkG6A = function(Zl3x) {
		if ( !! this.fT6N.fixed) return;
		a3x.ba4e(this.fT6N.parent, "display", Zl3x);
		k4o.bd4h(this.Qm0x, function(bI4M) {
			a3x.ba4e(bI4M, "display", Zl3x)
		}, this)
	};
	b3x.bks6m = function() {
		var r4v = this.fT6N.index || 1;
		delete this.fT6N.index;
		if ( !! this.jy8q) {
			r4v = this.jy8q.tm1x()
		}
		this.Cg3x({
			last: r4v,
			index: r4v
		})
	};
	b3x.Cg3x = function(d4h) {
		this.z4D("onpagechange", d4h)
	};
	b3x.bQh5m = function(bi4m) {
		this.iU7N.offset = bi4m;
		this.XR2x()
	};
	b3x.bQi5n = function(e4i) {
		return e4i
	};
	b3x.XR2x = function() {
		this.SB1x();
		var j4n = this.iU7N.data;
		j4n.offset = this.iU7N.offset;
		var qt0x = j4n.offset == 0;
		j4n.total = qt0x;
		this.iU7N.limit = qt0x ? this.yN2x : this.oH9y;
		j4n.limit = this.iU7N.limit;
		this.S4W.lO8G(this.bQi5n(NEJ.X({}, this.iU7N)))
	};
	b3x.bng7Z = function(e4i) {
		if (e4i.key != this.iU7N.key || e4i.offset != this.iU7N.offset) return;
		this.ZQ3x();
		var i4m = this.S4W.hD7w(e4i.key);
		if (!i4m || !i4m.length) {
			this.bjT6N();
			return
		}
		var gc6W = e4i.limit,
			bi4m = e4i.offset;
		if (this.bjf6Z(i4m, bi4m, gc6W)) return;
		this.z4D("onbeforelistrender", {
			list: i4m,
			offset: bi4m,
			parent: this.il7e
		});
		if ( !! this.KI6C) {
			this.ff6Z.xlist = i4m;
			this.ff6Z.beg = bi4m;
			this.ff6Z.end = Math.min(i4m.length, bi4m + gc6W) - 1;
			this.ff6Z.act = "list";
			var dV5a = a3x.cd4h(this.KI6C, this.ff6Z);
			this.Ub1x(dV5a)
		} else {
			this.ff6Z.limit = gc6W;
			this.ff6Z.offset = bi4m;
			var hu7n = a3x.CH4L(i4m, this.Pr0x, this.ff6Z);
			this.Uv1x(hu7n)
		}
		this.z4D("onafterlistrender", {
			list: i4m,
			offset: bi4m,
			parent: this.il7e
		})
	};
	b3x.cxf4j = function(e4i) {
		if (!this.bcD4H) return;
		delete this.bcD4H;
		this.ZQ3x("onafterpullrefresh");
		this.gI7B()
	};
	b3x.bQU6O = function(r4v, cB5G) {
		if ( !! this.jy8q) {
			var xe2x = this.jy8q.tm1x(),
				cxd4h = this.jy8q.kw8o();
			if (xe2x > cB5G || cB5G != cxd4h) {
				this.jy8q.T4X();
				delete this.jy8q;
				this.Cg3x({
					last: xe2x,
					index: Math.min(r4v, cB5G)
				});
				return !0
			}
		} else {
			this.fT6N.index = r4v;
			this.fT6N.total = cB5G;
			this.jy8q = this.bOa4e.A4E(this.fT6N);
			this.jy8q.wq2x("onchange", this.Cg3x.f4j(this));
			k4o.bd4h(this.Qm0x, function(bI4M) {
				this.jy8q.f4j(bI4M)
			}, this)
		}
	};
	b3x.bcO4S = function() {
		var gG7z = +(new Date);
		return function(j4n) {
			var C4G = j4n[this.ff6Z.pkey];
			if (!C4G) {
				j4n["dirty-data"] = !0;
				j4n[this.ff6Z.pkey] = "dirty-" + gG7z++
			}
			return j4n
		}
	}();
	b3x.bdE5J = function(j4n) {
		var C4G = j4n[this.ff6Z.pkey];
		if ( !! j4n["dirty-data"]) {
			delete j4n["dirty-data"];
			delete j4n[this.ff6Z.pkey]
		}
		return C4G
	};
	b3x.beh5m = function() {
		var cxc4g = function(kW8O, mT9K) {
				this.il7e.insertAdjacentElement(kW8O, mT9K)
			};
		return function(kW8O, j4n) {
			var Mu7n = [j4n];
			if ( !! this.KI6C) {
				this.ff6Z.xlist = Mu7n;
				this.ff6Z.beg = 0;
				this.ff6Z.end = 0;
				this.ff6Z.act = "add";
				this.Ub1x(a3x.cd4h(this.KI6C, this.ff6Z), kW8O)
			} else {
				this.ff6Z.limit = 1;
				this.ff6Z.offset = 0;
				this.ff6Z.parent = cxc4g.f4j(this, kW8O);
				var hu7n = a3x.CH4L(Mu7n, this.Pr0x, this.ff6Z);
				this.ff6Z.parent = this.il7e;
				this.Uv1x(hu7n)
			}
		}
	}();
	b3x.SB1x = br4v;
	b3x.ZQ3x = function(W4a) {
		var d4h = {
			parent: this.il7e
		};
		this.z4D(W4a || "onafterlistload", d4h);
		if (!d4h.stopped) {
			a3x.mS9J(this.cu5z)
		}
	};
	b3x.bjf6Z = br4v;
	b3x.beo5t = function(bG4K, kW8O) {
		if (k4o.fC6w(bG4K)) {
			if (!this.cu5z) this.cu5z = a3x.dj5o("div");
			this.cu5z.innerHTML = bG4K
		} else {
			this.cu5z = bG4K
		}
		this.il7e.insertAdjacentElement(kW8O || "beforeEnd", this.cu5z)
	};
	b3x.zk3x = function(W4a, kx8p, kW8O) {
		var d4h = {
			parent: this.il7e
		};
		this.z4D(W4a, d4h);
		if (!d4h.stopped) {
			this.beo5t(d4h.value || kx8p, kW8O)
		}
	};
	b3x.bjT6N = br4v;
	b3x.Ub1x = br4v;
	b3x.Uv1x = br4v;
	b3x.cxg4k = function() {
		var gL7E = /^(?:delete|update)$/;
		return function(d4h) {
			var g4k = h4l.X4b(d4h, "d:action");
			if (!g4k) return;
			var V4Z = a3x.t4x(g4k, "action");
			if (!gL7E.test(V4Z)) return;
			var C4G = a3x.t4x(g4k, "id");
			if (!C4G) return;
			var p4t = this.S4W.eJ6D(C4G);
			if (!p4t) return;
			h4l.bg4k(d4h);
			this.z4D("on" + V4Z, {
				data: p4t,
				id: p4t[this.ff6Z.pkey],
				body: a3x.B4F(this.bOr4v(C4G))
			})
		}
	}();
	b3x.bfn5s = br4v;
	b3x.XP2x = function(d4h) {
		var j4n = d4h.data || {},
			e4i = {
				data: j4n,
				key: this.iU7N.key,
				id: j4n[this.ff6Z.pkey]
			};
		this.z4D("onbeforedelete", e4i);
		this.S4W.Lx6r(e4i)
	};
	b3x.VX2x = br4v;
	b3x.XN2x = function(d4h) {
		var j4n = d4h.data || {},
			e4i = {
				data: j4n,
				key: this.iU7N.key
			};
		this.z4D("onbeforeupdate", e4i);
		this.S4W.XU2x(e4i)
	};
	b3x.bPF5K = function(d4h) {
		this.VJ2x(d4h, "onafterupdate");
		if (d4h.stopped) return;
		var C4G = d4h.data[this.ff6Z.pkey];
		if ( !! this.fQ6K) {
			var p4t = a3x.bCH1x(C4G);
			if ( !! p4t) p4t.gI7B(d4h.data)
		} else {
			var g4k = a3x.B4F(C4G + "" + a3x.Mi7b());
			if (!g4k) return;
			var i4m = this.S4W.hD7w(d4h.key),
				r4v = k4o.di5n(i4m, d4h.data);
			if (r4v < 0) return;
			this.ff6Z.list = i4m;
			this.ff6Z.beg = r4v;
			this.ff6Z.end = r4v;
			this.ff6Z.act = "update";
			var dV5a = a3x.cd4h(this.KI6C, this.ff6Z);
			g4k.insertAdjacentHTML("afterEnd", dV5a);
			a3x.cL5Q(g4k)
		}
	};
	b3x.VJ2x = function(d4h, W4a) {
		var p4t = d4h.data;
		if (!p4t || p4t[this.ff6Z.pkey] == null) {
			this.z4D("onerror", d4h);
			d4h.stopped = !0
		}
		if (!d4h.stopped) {
			this.z4D(W4a, d4h)
		}
	};
	b3x.bin6h = br4v;
	b3x.bip6j = br4v;
	b3x.bmu7n = function(d4h) {
		if (d4h.key != this.iU7N.key) return;
		switch (d4h.action) {
		case "add":
			this.bfn5s(d4h);
			break;
		case "delete":
			this.VX2x(d4h);
			break;
		case "update":
			this.bPF5K(d4h);
			break;
		case "refresh":
			this.gI7B();
			break;
		case "unshift":
			this.bip6j(d4h.offset, d4h.limit);
			break;
		case "append":
			this.bin6h(d4h.offset, d4h.limit);
			break
		}
	};
	b3x.qe0x = function(p4t) {
		this.XN2x({
			data: p4t
		})
	};
	b3x.mB9s = function(p4t) {
		this.XP2x({
			data: p4t
		})
	};
	b3x.ud1x = function(p4t) {
		this.S4W.jI8A({
			data: p4t,
			key: this.iU7N.key
		})
	};
	b3x.uc1x = function() {
		return this.S4W
	};
	b3x.biG6A = function(j4n) {
		this.beh5m("afterBegin", this.bcO4S(j4n));
		return this.bdE5J(j4n)
	};
	b3x.bRM6G = function(j4n) {
		this.beh5m("beforeEnd", this.bcO4S(j4n));
		return this.bdE5J(j4n)
	};
	b3x.gI7B = function() {
		this.Pk0x();
		this.bks6m()
	};
	b3x.cGr7k = function() {
		this.S4W.vw1x(this.iU7N.key);
		this.gI7B()
	};
	b3x.blp7i = function() {
		if ( !! this.bcD4H) return;
		this.bcD4H = !0;
		this.zk3x("onbeforepullrefresh", "列表刷新中...", "afterBegin");
		var i4m = this.S4W.hD7w(this.iU7N.key);
		if (i4m && i4m[0]) {
			this.iU7N.data.aftertime = i4m[0].eventTime || ""
		}
		this.S4W.blp7i({
			key: this.iU7N.key,
			data: this.iU7N.data
		})
	};
	b3x.kw8o = function() {
		return this.S4W.kw8o(this.iU7N.key)
	};
	b3x.bRP6J = function() {
		return this.jy8q
	};
	b3x.Ye2x = function() {
		return this.S4W.Ye2x(this.iU7N.key)
	};
	b3x.cxa4e = function() {
		return this.fQ6K
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		fy6s = NEJ.R,
		k4o = c3x("nej.u"),
		a3x = c3x("nej.e"),
		O4S = c3x("nej.ut"),
		b3x, L4P;
	if ( !! O4S.kk8c) return;
	O4S.kk8c = NEJ.C();
	b3x = O4S.kk8c.N4R(O4S.bbX4b);
	L4P = O4S.kk8c.cs5x;
	b3x.BT3x = function(bi4m, bq4u) {
		return L4P.BT3x.call(this, this.yN2x, bi4m, this.oH9y, bq4u)
	};
	b3x.bjb6V = function(r4v) {
		var bi4m = 0;
		if (r4v > 1) bi4m = this.yN2x + (r4v - 2) * this.oH9y;
		return bi4m
	};
	b3x.Cg3x = function(d4h) {
		L4P.Cg3x.apply(this, arguments);
		if (!d4h.stopped) {
			this.bQh5m(this.bjb6V(d4h.index))
		}
	};
	b3x.SB1x = function() {
		this.Pk0x();
		this.zk3x("onbeforelistload", "列表加载中...")
	};
	b3x.ZQ3x = function() {
		L4P.ZQ3x.apply(this, arguments);
		this.Pk0x()
	};
	b3x.bjf6Z = function(i4m, bi4m, gc6W) {
		var bx4B = this.BT3x(bi4m, i4m.length);
		if (this.bQU6O(bx4B.index, bx4B.total)) return !0;
		this.bkG6A(bx4B.total > 1 ? "" : "none")
	};
	b3x.bjT6N = function() {
		this.zk3x("onemptylist", "没有列表数据！")
	};
	b3x.beo5t = function(bG4K, kW8O) {
		if (!kW8O && k4o.fC6w(bG4K)) {
			this.il7e.innerHTML = bG4K;
			return
		}
		L4P.beo5t.apply(this, arguments)
	};
	b3x.Ub1x = function(dV5a) {
		this.il7e.innerHTML = dV5a
	};
	b3x.Uv1x = function(hu7n) {
		this.fQ6K = hu7n
	};
	b3x.bfn5s = function(d4h) {
		this.VJ2x(d4h, "onafteradd");
		if (!d4h.stopped) this.gI7B()
	};
	b3x.VX2x = function(d4h) {
		this.VJ2x(d4h, "onafterdelete");
		if (!d4h.stopped) this.gI7B()
	};
	b3x.bin6h = function(bi4m, gc6W) {
		var r4v = 1;
		if ( !! this.jy8q) {
			r4v = this.jy8q.tm1x()
		}
		var jY8Q = this.bjb6V(r4v),
			fX6R = jY8Q + (r4v > 1 ? this.oH9y : this.yN2x);
		if (bi4m >= fX6R && !! this.jy8q) {
			var bx4B = this.BT3x(0, this.kw8o());
			this.jy8q.buA9r(bx4B.total);
			this.bkG6A(bx4B.total > 1 ? "" : "none")
		} else {
			this.gI7B()
		}
	};
	b3x.bip6j = function(bi4m, gc6W) {
		var r4v = 1;
		if ( !! this.jy8q) {
			r4v = this.jy8q.tm1x()
		}
		var jY8Q = this.bjb6V(r4v),
			bx4B = this.BT3x(jY8Q, this.kw8o());
		this.Cg3x({
			last: r4v,
			index: bx4B.index
		})
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		I4M = c3x("nej.ut"),
		k4o = c3x("nej.u"),
		l4p = c3x("nm.x"),
		q4u = c3x("nm.d"),
		w4A = c3x("nm.w"),
		fo6i = 40,
		b3x, L4P;
	w4A.baP4T = NEJ.C();
	b3x = w4A.baP4T.N4R(I4M.cJ5O);
	L4P = w4A.baP4T.cs5x;
	b3x.cw5B = function() {
		this.cE5J()
	};
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.Tn1x = e4i.inputer;
		this.bjx6r = e4i.tipper;
		this.bX4b([
			[this.Tn1x, "input", this.fW6Q.f4j(this)]
		])
	};
	b3x.bC4G = function() {
		this.bF4J();
		this.LR7K(null, null)
	};
	b3x.fW6Q = function(d4h) {
		if (d4h && d4h.type == "keyup" && (d4h.keyCode != 8 || d4h.keyCode != 68)) return;
		var W4a = this.Tn1x.value,
			cGs7l;
		if (l4p.Na7T(W4a) > fo6i) {
			this.Tn1x.value = l4p.AM3x(W4a, fo6i);
			this.LR7K("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.f4j(this))
		} else if (W4a.indexOf("#") >= 0 || W4a.indexOf("@") >= 0) {
			this.LR7K("歌单名不能包含字符“@”和“#”！")
		} else {
			this.LR7K(null, null);
			this.z4D("onchange", {
				value: W4a
			})
		}
	};
	b3x.cwY4c = function() {
		this.fW6Q()
	};
	b3x.LR7K = function() {
		var C4G = 0;
		return function(dJ5O, bSE6y) {
			if ( !! C4G) window.clearTimeout(C4G);
			if (!dJ5O) {
				a3x.y4C(this.bjx6r, "f-vhide");
				this.bSG6A = !1;
				return
			}
			this.bjx6r.innerHTML = '<i class="u-icn u-icn-25"></i>' + dJ5O;
			a3x.x4B(this.bjx6r, "f-vhide");
			this.bSG6A = !0;
			if (k4o.gK7D(bSE6y)) C4G = window.setTimeout(function() {
				this.LR7K(null, null);
				bSE6y()
			}.f4j(this), 1e3)
		}
	}();
	b3x.bSH7A = function() {
		if (this.bSG6A) return !1;
		if (l4p.kv8n(this.Tn1x.value)) {
			this.LR7K("歌单名不能为空");
			return !1
		}
		return !0
	};
	b3x.gb6V = function() {
		return this.Tn1x.value
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		h4l = c3x("nej.v"),
		a3x = c3x("nej.e"),
		v4z = c3x("nej.j"),
		n4r = c3x("nm.l"),
		w4A = c3x("nm.w"),
		bD4H = c3x("nej.ui"),
		q4u = c3x("nm.d"),
		l4p = c3x("nm.x"),
		b3x, L4P;
	n4r.Zt3x = NEJ.C();
	b3x = n4r.Zt3x.N4R(n4r.eo6i);
	L4P = n4r.Zt3x.cs5x;
	b3x.cw5B = function() {
		this.cE5J()
	};
	b3x.bW4a = function() {
		this.ci4m();
		var i4m = a3x.H4L(this.o4s, "j-flag");
		this.Yz2x = {
			inputer: i4m[0],
			tipper: i4m[1]
		};
		this.iK7D = {
			onerror: this.bSP7I.f4j(this),
			onitemadd: this.bSP7I.f4j(this)
		};
		this.lN8F = i4m[2];
		h4l.s4w(i4m[2], "click", this.EH4L.f4j(this));
		h4l.s4w(i4m[3], "click", this.De4i.f4j(this));
		h4l.s4w(this.o4s, "keypress", this.bSY7R.f4j(this))
	};
	b3x.ch4l = function() {
		this.cf4j = "m-wgt-create"
	};
	b3x.bl4p = function(e4i) {
		e4i.clazz = " m-layer-w2";
		e4i.parent = e4i.parent || document.body;
		e4i.title = "新建歌单";
		e4i.draggable = !0;
		e4i.destroyalbe = !0;
		e4i.mask = true;
		this.bn4r(e4i);
		this.Yz2x.inputer.value = e4i.name || "";
		this.uP1x = w4A.baP4T.A4E(this.Yz2x);
		this.uP1x.cwY4c();
		this.S4W = q4u.ic7V.A4E(this.iK7D);
		setTimeout(function() {
			this.Yz2x.inputer.focus()
		}.f4j(this), 0)
	};
	b3x.bC4G = function() {
		this.bF4J();
		if (this.uP1x) {
			this.uP1x.T4X();
			delete this.uP1x
		}
		this.sR1x(!1);
		this.Yz2x.inputer.value = ""
	};
	b3x.sR1x = function(PQ0x) {
		this.oB9s = PQ0x;
		if (PQ0x) {
			this.lN8F.innerHTML = "<i>新建中...</i>";
			a3x.y4C(this.lN8F, "u-btn2-dis")
		} else {
			this.lN8F.innerHTML = "<i>新 建</i>";
			a3x.x4B(this.lN8F, "u-btn2-dis")
		}
	};
	b3x.EH4L = function() {
		if (this.oB9s || !this.uP1x.bSH7A()) return;
		var ct5y = {
			key: "playlist_new-" + GUser.userId,
			data: {
				name: this.uP1x.gb6V()
			},
			offset: 1
		};
		this.S4W.jI8A(ct5y);
		this.sR1x(!0)
	};
	b3x.bSP7I = function(d4h) {
		var bY4c = (d4h.result || bb4f).code;
		if (!bY4c) {
			this.z4D("onsuccess", d4h.data)
		} else {
			this.z4D("onerror", d4h)
		}
		this.bt4x()
	};
	b3x.De4i = function() {
		this.bt4x()
	};
	b3x.bSY7R = function(d4h) {
		if (d4h.keyCode == 13) this.EH4L()
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		I4M = c3x("nej.ut"),
		v4z = c3x("nej.j"),
		l4p = c3x("nm.x"),
		q4u = c3x("nm.d"),
		n4r = c3x("nm.l"),
		b3x, L4P;
	n4r.bpy8q = NEJ.C();
	b3x = n4r.bpy8q.N4R(n4r.eo6i);
	L4P = n4r.bpy8q.cs5x;
	b3x.cw5B = function() {
		this.cE5J()
	};
	b3x.bW4a = function() {
		this.ci4m();
		var i4m = a3x.H4L(this.o4s, "j-flag");
		this.iI7B = {
			limit: 301,
			parent: i4m[1],
			cache: {
				klass: q4u.ic7V,
				lkey: "playlist_new-" + GUser.userId,
				onlisterror: this.bpz8r.f4j(this)
			},
			item: {
				klass: "m-wgt-subscribe-item",
				cutStr: l4p.AN3x,
				escape: k4o.dH5M
			}
		};
		this.iK7D = {
			onsuccess: this.XW2x.f4j(this),
			onerror: this.dO5T.f4j(this)
		};
		h4l.s4w(i4m[0], "click", this.EH4L.f4j(this));
		h4l.s4w(i4m[1], "click", this.kH8z.f4j(this))
	};
	b3x.ch4l = function() {
		this.cf4j = "m-wgt-subscribe"
	};
	b3x.bl4p = function(e4i) {
		e4i.parent = e4i.parent || document.body;
		e4i.clazz = " m-layer-w2";
		e4i.title = "添加到歌单";
		e4i.draggable = !0;
		e4i.mask = !0;
		this.bn4r(e4i);
		this.XG2x = (e4i.tracks || []).reverse();
		this.iI7B.item.size = this.XG2x.length;
		this.iK7D.name = e4i.name || "";
		this.bTw7p = q4u.ws2x.A4E({
			onaddsuccess: this.Dd4h.f4j(this)
		});
		this.tR1x = q4u.ic7V.A4E({
			onlistload: this.cwX4b.f4j(this)
		});
		this.tR1x.bQa5f();
		k4o.bd4h(this.XG2x, function(p4t, r4v, i4m) {
			if (!k4o.lG8y(p4t)) {
				i4m[r4v] = this.bTw7p.eJ6D(p4t) || p4t
			}
		}, this)
	};
	b3x.cwX4b = function() {
		if (this.dK5P) this.dK5P.T4X();
		this.dK5P = I4M.kk8c.A4E(this.iI7B)
	};
	b3x.EH4L = function() {
		this.bt4x();
		if (this.Eg4k) this.Eg4k.T4X();
		this.Eg4k = n4r.Zt3x.A4E(this.iK7D);
		this.Eg4k.J4N()
	};
	b3x.kH8z = function() {
		var cwV4Z = function(g4k) {
				while (g4k && g4k != document) {
					if (g4k.tagName.toLowerCase() == "li") {
						return g4k
					}
					g4k = g4k.parentNode
				}
			};
		return function(d4h) {
			h4l.cn4r(d4h);
			var F4J = h4l.X4b(d4h),
				Ae3x = cwV4Z(F4J);
			if ( !! Ae3x && !a3x.bE4I(Ae3x, "dis")) {
				this.XW2x({
					id: a3x.t4x(Ae3x, "id")
				})
			}
		}
	}();
	b3x.XW2x = function(d4h) {
		var C4G = d4h.id;
		if (!C4G || !this.XG2x.length) return;
		this.bTw7p.jI8A({
			key: "track_playlist-" + C4G,
			data: {
				tracks: this.XG2x,
				pid: C4G
			}
		});
		this.bt4x()
	};
	b3x.Dd4h = function() {
		this.z4D("onsuccess");
		n4r.Z4d.J4N({
			tip: "收藏成功"
		})
	};
	b3x.dO5T = function(d4h) {
		this.bt4x();
		this.z4D("onerror", d4h);
		var cU5Z = "收藏失败";
		switch (d4h.code) {
		case 405:
			cU5Z = "操作过于频繁，先休息一下再试吧";
			break;
		case 507:
			cU5Z = "歌单数量超过限制";
			break;
		case 502:
			cU5Z = "歌曲已经存在"
		}
		n4r.Z4d.J4N({
			tip: cU5Z,
			type: 2
		})
	};
	b3x.bpz8r = function() {
		this.bt4x();
		n4r.Z4d.J4N({
			tip: "列表下载失败，请稍后再试",
			type: 2
		})
	};
	l4p.ms9j = function(e4i) {
		if (!GUser || !GUser.userId || GUser.userId <= 0) {
			top.login();
			return
		}
		n4r.bpy8q.J4N(e4i)
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		dy5D = c3x("nej.p"),
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		v4z = c3x("nej.j"),
		k4o = c3x("nej.u"),
		l4p = c3x("nm.x");
	var bqR8J, ox9o, Y4c = decodeURIComponent(location.href),
		jZ8R = /.+(https?:\/\/.+\/proxy.html)/.test(Y4c) ? RegExp.$1 : "";
	if ( !! jZ8R) {
		v4z.vF1x("mail_proxy_url", jZ8R)
	} else {
		jZ8R = v4z.tu1x("mail_proxy_url") || "about:blank"
	}
	bqR8J = a3x.YH2x({
		src: jZ8R,
		onload: function() {
			ox9o = true
		}
	});
	var bTM7F = function() {
			v4z.gx6r("USER_TRIGGER", {
				value: true,
				expire: 1 / (24 * 60),
				path: "/"
			})
		};
	var cwU4Y = function() {
			if (dy5D.dr5w.browser == "ie" && parseInt(dy5D.dr5w.version) < 9) {
				l4p.fs6m({
					clazz: "m-layer-w2",
					message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
				});
				return false
			}
			return true
		};
	l4p.Js6m = function(u4y, C4G, V4Z) {
		if (!cwU4Y()) return;
		bTM7F();
		if (V4Z == "stop") {
			if (!ox9o) throw "proxy not loaded";
			bTM7F();
			bqR8J.contentWindow.location.replace(jZ8R + "#" + k4o.cD5I({
				to: "ifrmMusic",
				message: JSON.stringify({
					s: +(new Date),
					action: "stop"
				})
			}))
		} else {
			bqR8J.contentWindow.location.replace(jZ8R + "#" + k4o.cD5I({
				to: "ifrmMusic",
				message: JSON.stringify({
					type: u4y,
					id: C4G,
					s: +(new Date),
					action: V4Z
				})
			}))
		}
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		v4z = c3x("nej.j"),
		k4o = c3x("nej.u"),
		l4p = c3x("nm.x"),
		n4r = c3x("nm.l"),
		q4u = c3x("nm.d");
	var kI8A = q4u.hO7H.A4E();
	var oz9q = q4u.ws2x.A4E({
		onlistload: cwT4X,
		onitemload: cwS4W,
		onerror: dO5T
	});
	var DY4c = q4u.rb0x.A4E({
		onlistload: cwR4V,
		onitemload: cwQ4U,
		onerror: dO5T
	});
	var bUw7p = {};

	function wt2x(d4h) {
		var g4k = h4l.X4b(d4h, "d:resAction"),
			V4Z = a3x.t4x(g4k, "resAction");
		if (g4k && (V4Z == "play" || V4Z == "addto")) {
			var u4y = parseInt(a3x.t4x(g4k, "resType"));
			bUE7x({
				action: V4Z,
				type: u4y,
				id: a3x.t4x(g4k, "resId"),
				from: a3x.t4x(g4k, "resFrom"),
				data: a3x.t4x(g4k, "resData"),
				order: a3x.t4x(g4k, "resOrder"),
				node: g4k
			});
			if (u4y != 13) bUF7y(g4k)
		}
	}
	function bUE7x(bR4V) {
		var V4Z = bR4V.action,
			u4y = bR4V.type,
			C4G = bR4V.id,
			ee6Y = bR4V.from,
			j4n = bR4V.data,
			ug1x = bR4V.order,
			e4i = {
				limit: 1e3,
				offset: 0,
				data: {
					id: C4G
				},
				ext: {
					id: C4G,
					action: V4Z,
					type: u4y,
					from: ee6Y,
					data: j4n,
					node: bR4V.node
				}
			};
		if (V4Z != "play" && V4Z != "addto" || !u4y) return;
		if (window.GRef && GRef == "mail") {
			l4p.Js6m(u4y, C4G, V4Z);
			return
		}
		switch (u4y) {
		case 13:
			e4i.key = "track_playlist-" + C4G;
			oz9q.lO8G(e4i);
			break;
		case 17:
			e4i.key = "program";
			e4i.id = C4G;
			DY4c.XY2x(e4i);
			if (V4Z == "play") {
				v4z.bm4q("/api/dj/program/listen", {
					query: {
						id: C4G
					}
				})
			}
			break;
		case 18:
			e4i.key = "track";
			e4i.id = C4G;
			oz9q.XY2x(e4i);
			break;
		case 19:
			e4i.key = "track_album-" + C4G;
			oz9q.lO8G(e4i);
			break;
		case 24:
			e4i.key = "track_day";
			oz9q.lO8G(e4i);
			break;
		case 2:
			e4i.key = "track_artist_top-" + C4G;
			oz9q.lO8G(e4i);
			break;
		case 70:
			e4i.key = "program_djradio-" + C4G + "-" + ug1x;
			e4i.data.radioId = C4G;
			e4i.data.asc = ug1x == 2;
			DY4c.lO8G(e4i);
			break
		}
	}
	function bUJ7C(i4m) {
		var m4q = [];
		k4o.bd4h(i4m, function(p4t) {
			if (p4t.mainSong) {
				p4t.mainSong.program = p4t;
				m4q.push(p4t.mainSong);
				p4t.localupdatetime = +(new Date);
				oz9q.cDI6C(p4t.mainSong);
				p4t.mainTrackId = p4t.mainSong.id;
				delete p4t.mainSong
			} else {
				var bUK7D = oz9q.eJ6D(p4t.mainTrackId);
				bUK7D && m4q.push(bUK7D)
			}
		});
		return m4q
	}
	function ZZ3x(i4m, e4i) {
		var rT0x = e4i.action == "play" && e4i.type != 17 && e4i.type != 18,
			gd6X = e4i.action == "play";
		if (!i4m.length) return;
		if (e4i.type == 19) {
			i4m = l4p.Lj6d(i4m, true, {
				play: true
			}, {
				source: "album",
				sourceid: e4i.id
			})
		} else {
			i4m = l4p.Lj6d(i4m, true, {
				play: true
			})
		}
		k4o.bd4h(i4m, function(p4t) {
			p4t.source = l4p.boQ8I({
				fid: e4i.from,
				fdata: e4i.data,
				type: e4i.type,
				rid: e4i.id
			}, p4t.id)
		});
		top.player.addTo(i4m, rT0x, gd6X);
		kI8A.QY0x({
			rid: e4i.id,
			type: e4i.type,
			hash: l4p.Kl6f(),
			play: gd6X,
			source: e4i.from,
			sourceid: e4i.data
		})
	}
	function cwT4X(d4h) {
		var ey6s = d4h.ext || {};
		i4m = oz9q.hD7w(d4h.key);
		ZZ3x(i4m, ey6s);
		if (ey6s.type == 13 && ey6s.action == "play" && i4m && i4m.length > 0) {
			bUF7y(ey6s.node);
			v4z.bm4q("/api/playlist/update/playcount", {
				query: {
					id: ey6s.id
				}
			})
		}
	}
	function cwS4W(d4h) {
		var i4m = [oz9q.eJ6D(d4h.id)],
			bj4n = i4m[0],
			qz0x = l4p.qq0x(bj4n),
			uj1x = bj4n.privilege || {};
		if (qz0x == 10) {
			l4p.uX1x(uj1x.fee || bj4n.fee, bj4n.id, "song", null, uj1x)
		} else if (qz0x == 100) {
			l4p.iu7n(null, null, null, true, bj4n)
		} else if (qz0x == 11) {
			l4p.bFB2x(bj4n.id, 18)
		} else {
			ZZ3x(i4m, d4h.ext)
		}
	}
	function cwR4V(d4h) {
		var i4m = bUJ7C(DY4c.hD7w(d4h.key));
		ZZ3x(i4m, d4h.ext)
	}
	function cwQ4U(d4h) {
		var i4m = bUJ7C([DY4c.eJ6D(d4h.id)]);
		ZZ3x(i4m, d4h.ext)
	}
	function dO5T() {
		top.player.tipPlay("无法播放，音乐已下线")
	}
	function bUF7y(g4k) {
		var u4y = a3x.t4x(g4k, "resType"),
			C4G = a3x.t4x(g4k, "resId"),
			K4O = u4y + "-" + C4G;
		if (bUw7p[K4O]) return;
		var bUV7O = a3x.B4F("play-count"),
			btf9W = a3x.H4L(g4k.parentNode, "nb"),
			Rc0x = null;
		if (bUV7O) {
			Rc0x = bUV7O
		} else {
			Rc0x = !! btf9W && !! btf9W[0] ? btf9W[0] : null
		}
		if (Rc0x) {
			var cz5E = Rc0x.innerHTML;
			if (/^\d+$/.test(cz5E)) {
				Rc0x.innerText = +cz5E + 1
			}
			bUw7p[K4O] = true
		}
	}
	l4p.cwP4T = function(g4k) {
		h4l.s4w(g4k || document.body, "click", wt2x.f4j(this))
	};
	l4p.cwO4S = function(V4Z, u4y, C4G) {
		bUE7x({
			action: V4Z,
			type: u4y,
			id: C4G
		})
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		v4z = c3x("nej.j"),
		I4M = c3x("nej.ut"),
		q4u = c3x("nm.d"),
		l4p = c3x("nm.x"),
		b3x, L4P;
	q4u.fp6j({
		"share-all": {
			url: "/api/share/friends/resource",
			format: function(m4q, e4i) {
				this.cwM4Q(m4q, e4i)
			},
			onerror: "onshareerror"
		},
		"share-sns": {
			url: "/api/share/resource/sns",
			format: function(m4q, e4i) {
				this.z4D("onshareall", e4i.result)
			},
			onerror: function(m4q, e4i) {
				this.z4D("onshareall", e4i.result)
			}
		},
		"share-private": {
			url: "/api/msg/private/send",
			onload: "onshareprivate",
			onerror: "onshareerror"
		},
		share_img_compound: {
			url: "/upload/event/img/compound",
			type: "POST",
			format: function(m4q, e4i) {
				e4i.options.picUrl = m4q.picUrl;
				this.bVj7c(e4i.options, e4i.result)
			},
			onerror: function(m4q, e4i) {
				this.z4D("onshareall", e4i.result)
			}
		},
		"vid-get": {
			url: "/api/video/coversvid/get",
			format: function(Q4U, e4i) {
				this.qu0x("vid_info-" + e4i.data.nosKey, Q4U);
				return Q4U
			}
		},
		"video-submit": {
			url: "/api/cloudvideo/video/event/submit",
			filter: function(e4i) {},
			format: function(m4q, e4i) {
				e4i.data = e4i.data2;
				this.cp5u("share-all", e4i)
			},
			onerror: "onshareerror"
		}
	});
	q4u.bug9X = NEJ.C();
	b3x = q4u.bug9X.N4R(q4u.hJ7C);
	b3x.cwL4P = function() {
		var vU2x = function(Q4U, e4i) {
				e4i.times++;
				if (e4i.times > 10) {
					this.z4D("onvinfoerror", e4i.key, Q4U)
				} else {
					setTimeout(ev6p.f4j(this, e4i), e4i.times * 1e3)
				}
			};
		var Aw3x = function(Q4U, e4i) {
				this.z4D("onvinfo", e4i.key, Q4U)
			};
		var ev6p = function(e4i) {
				var Y4c = e4i.url;
				v4z.bm4q(Y4c + "?vinfo", {
					method: "GET",
					type: "json",
					mode: 1,
					onload: Aw3x.eA6u(this, e4i),
					onerror: vU2x.eA6u(this, e4i)
				})
			};
		return function(e4i) {
			e4i.times = 0;
			ev6p.call(this, e4i)
		}
	}();
	b3x.cGu7n = function() {
		var DD4H;
		var vU2x = function(Q4U, e4i) {
				if (Q4U.code > 0) {
					clearInterval(this.DB4F);
					this.z4D("onviderror", e4i.data.nosKey)
				}
			};
		var Aw3x = function(K4O, Q4U) {
				if (Q4U.vid && Q4U.covers) {
					clearInterval(this.DB4F);
					this.z4D("onvid", K4O, Q4U)
				}
			};
		var ev6p = function(e4i) {
				if (+(new Date) - DD4H > 60 * 60 * 1e3) {
					clearInterval(this.DB4F);
					this.z4D("onviderror", e4i.data.nosKey);
					return
				}
				e4i.onload = Aw3x.f4j(this, e4i.data.nosKey);
				e4i.onerror = vU2x.f4j(this);
				this.cp5u("vid-get", e4i)
			};
		return function(e4i) {
			if (!e4i || !e4i.data) return;
			DD4H = +(new Date);
			this.DB4F = clearInterval(this.DB4F);
			this.DB4F = setInterval(ev6p.f4j(this, e4i), 1e4);
			ev6p.apply(this, arguments)
		}
	}();
	b3x.cwI4M = function() {
		this.DB4F = clearInterval(this.DB4F)
	};
	b3x.cwM4Q = function(m4q, ot9k) {
		if (m4q.event && ot9k.snsTypes) {
			if (ot9k.pics) {
				var bVH7A = [];
				for (var i = 0, len = ot9k.pics.length; i < len; i++) {
					bVH7A[i] = ot9k.pics[i].originId
				}
				this.cp5u("share_img_compound", {
					data: {
						picIds: bVH7A.join(",")
					},
					options: ot9k,
					result: m4q
				})
			} else {
				ot9k.picUrl = ot9k.picUrl;
				this.bVj7c(ot9k, m4q)
			}
		} else {
			this.z4D("onshareall", m4q)
		}
		var wd2x = q4u.hO7H.A4E();
		wd2x.eV6P(ot9k.isPub ? "pubevent" : "shareevent", {
			id: m4q.id
		})
	};
	b3x.bVj7c = function(ot9k, m4q) {
		var ct5y = {},
			d4h = m4q.event || {};
		ct5y.eventid = d4h.id;
		ct5y.eventtype = d4h.type;
		ot9k.picUrl && (ct5y.picUrl = ot9k.picUrl);
		ct5y.snsTypes = ot9k.snsTypes;
		ct5y.msg = ot9k.data.msg || "";
		ct5y.type = ot9k.data.type;
		ot9k.data.id && (ct5y.id = ot9k.data.id);
		if (ct5y.eventtype == 41) {
			var Q4U = l4p.GA5F(d4h.json);
			ct5y.eventtype = 39;
			if (ct5y.msg) {
				ct5y.msg += "  "
			}
			ct5y.msg += "分享" + Q4U.video.creator.nickname + "的视频《" + Q4U.video.title + "》";
			delete ct5y.id
		}
		this.cp5u("share-sns", {
			data: ct5y,
			result: m4q
		})
	};
	b3x.cwH4L = function(e4i) {
		var j4n = {
			type: "",
			id: 0,
			threadId: "",
			msg: "",
			actId: 0,
			pics: "",
			checkToken: "",
			uuid: "publish-" + +(new Date) + k4o.ol9c(5)
		};
		j4n = NEJ.EX(j4n, e4i);
		if (j4n.id < 0) {
			delete j4n.id;
			j4n.type = "noresource"
		}
		if (!j4n.threadId) {
			delete j4n.threadId
		}
		if (!j4n.actId) {
			delete j4n.actId
		}
		if (!j4n.pics) {
			delete j4n.pics
		} else {
			j4n.pics = JSON.stringify(j4n.pics)
		}
		this.cp5u("share-all", {
			data: j4n,
			snsTypes: e4i.snsTypes,
			picUrl: e4i.picUrl,
			pics: e4i.pics,
			isPub: e4i.isPub
		})
	};
	b3x.cwG4K = function(e4i) {
		this.cp5u("share-private", e4i)
	};
	b3x.cwE4I = function(e4i) {
		this.cp5u("video-submit", e4i)
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		I4M = c3x("nej.ut"),
		q4u = c3x("nm.d"),
		l4p = c3x("nm.x"),
		n4r = c3x("nm.l"),
		b3x, L4P;
	var cwD4H = {
		40: !0
	};
	q4u.fp6j({
		"event-list": {
			url: "/api/v1/event/get",
			filter: function(e4i) {
				e4i.data.getcounts = true;
				e4i.data.pagesize = e4i.data.limit;
				if (e4i.data.offset == 0) {
					e4i.data.lasttime = -1
				}
				delete e4i.data.offset
			},
			format: function(Q4U, e4i) {
				Q4U.event = l4p.ben5s(Q4U.event, function(p4t, r4v) {
					return !cwD4H[p4t.type]
				});
				this.cwC4G(Q4U.event);
				e4i.data.lasttime = Q4U.lasttime;
				if (Q4U.event.length) {
					Q4U.event.length = e4i.limit
				}
				return {
					list: Q4U.event,
					total: Q4U.size
				}
			}
		},
		"event_latest-list": {
			url: "/api/act/event/getnews",
			format: function(Q4U, e4i) {
				return {
					list: Q4U.events,
					total: Q4U.count
				}
			}
		},
		"event-pull": {
			url: "/api/event/getnews",
			filter: function(e4i) {
				e4i.data.pagesize = 20
			},
			format: function(Q4U, e4i) {
				return Q4U.event
			}
		},
		"ievent-get": {
			type: "GET",
			url: "/api/event/get",
			onload: "oneventload",
			onerror: "oneventloaderror"
		},
		"ievent-new-get": {
			type: "GET",
			url: "/api/event/getnews",
			onload: "oneventnewload"
		},
		"ievent_user-list": {
			type: "GET",
			url: "/api/event/get/{userId}",
			filter: function(e4i) {
				if (e4i.data.offset == 0) {
					e4i.data.time = -1
				}
				delete e4i.data.offset;
				e4i.data.getcounts = true
			},
			format: function(Q4U, e4i) {
				e4i.data.time = Q4U.lasttime;
				var i4m = Q4U.events;
				if (Q4U.more && i4m.length < e4i.data.limit) {
					i4m = this.Iw5B(i4m, e4i.data.limit)
				}
				return {
					list: i4m,
					total: Q4U.size
				}
			}
		},
		"ievent-res-get": {
			url: "/api/res/status",
			format: function(m4q, e4i) {
				m4q.conf = e4i.conf;
				return m4q
			}
		},
		"ievent-like": {
			url: "/api/resource/like",
			onload: "oneventlike",
			filter: function(e4i, bh4l) {
				if (e4i.like) {
					if (e4i.comment) {
						bh4l.url = "/api/v1/comment/like"
					} else {
						bh4l.url = "/api/resource/like"
					}
					bh4l.onload = "oneventlike";
					bh4l.onerror = "oneventlikeerr"
				} else {
					if (e4i.comment) {
						bh4l.url = "/api/v1/comment/unlike"
					} else {
						bh4l.url = "/api/resource/unlike"
					}
					bh4l.onload = "oneventunlike";
					bh4l.onerror = "oneventunlikeerr"
				}
			},
			format: function(m4q, e4i) {
				m4q.eid = e4i.eid;
				m4q.origin = e4i.origin;
				m4q.ext = e4i.ext;
				return m4q
			},
			onmessage: function(bY4c, m4q) {
				if (bY4c == 250) {
					n4r.Z4d.J4N({
						tip: m4q.message || m4q.msg || "点赞异常",
						type: 2
					});
					return
				}
			}
		},
		"ievent_user-del": {
			url: "/api/event/delete",
			format: function(m4q, e4i) {
				m4q.id = e4i.data.id;
				return m4q
			}
		},
		"event-del": {
			url: "/api/event/delete",
			filter: function(e4i, bh4l) {
				if (e4i.data.type == "nointer") {
					bh4l.url = "/api/event/rcmd/reject"
				} else if (e4i.data.transcoding) {
					bh4l.url = "/api/event/video/transcoding/delete"
				} else {
					bh4l.url = "/api/event/delete"
				}
			},
			format: function(m4q, e4i) {
				m4q.id = e4i.data.id;
				return m4q
			}
		},
		"event_activity-del": {
			url: "/api/event/delete",
			format: function(m4q, e4i) {
				m4q.id = e4i.data.id;
				return m4q
			}
		},
		"event_activity-list": {
			url: "/api/act/event",
			filter: function(e4i) {
				e4i.data.lasttime = e4i.data.lasttime || -1;
				e4i.data.pagesize = e4i.data.limit;
				e4i.data.getcounts = true;
				delete e4i.data.offset
			},
			format: function(Q4U, e4i) {
				e4i.data.lasttime = Q4U.lasttime;
				var i4m = Q4U.events;
				if (Q4U.more) i4m = this.Iw5B(i4m, e4i.data.pagesize);
				return {
					list: i4m,
					total: Q4U.size
				}
			},
			onerror: "onlisterror"
		}
	});
	q4u.Au3x = NEJ.C();
	b3x = q4u.Au3x.N4R(q4u.hJ7C);
	b3x.cw5B = function() {
		this.cE5J()
	};
	b3x.bvM9D = function(u4y, cS5X) {
		return u4y + "-" + cS5X
	};
	b3x.cGv7o = function(e4i) {
		this.cp5u("ievent-get", e4i)
	};
	b3x.cGx7q = function(e4i) {
		this.cp5u("ievent-new-get", e4i)
	};
	b3x.cGy7r = function(e4i) {
		this.cp5u("ievent-user-get", e4i)
	};
	b3x.cGz7s = function(u4y, cS5X) {
		return this.rC0x(this.bvM9D(u4y, cS5X))
	};
	b3x.cGA7t = function(IR6L, e4i) {
		if (!IR6L || !IR6L.length) return;
		e4i = e4i || {};
		var bz4D = {
			song: 2,
			album: 4,
			playlist: 1,
			mv: 3,
			program: 5
		};
		for (var i = 0, GC5H = [], byC0x = [], j4n; i < IR6L.length; ++i) {
			j4n = IR6L[i];
			j4n = this.rC0x(this.bvM9D(j4n.type, j4n.id));
			if (!j4n) {
				GC5H.push(IR6L[i].id);
				byC0x.push(bz4D[IR6L[i].type] || 0)
			}
		}
		if (!GC5H.length) {
			this.z4D("oneventresload", e4i.conf);
			return
		}
		e4i.data = {
			ids: JSON.stringify(GC5H),
			types: JSON.stringify(byC0x)
		};
		e4i.onload = this.cwu4y.f4j(this);
		this.cp5u("ievent-res-get", e4i)
	};
	b3x.cwu4y = function(m4q) {
		if (m4q.code != 200) {
			this.z4D("oneventreserror", m4q.code);
			return
		}
		var bz4D = {
			1: "playlist",
			2: "song",
			3: "mv",
			4: "album",
			5: "program"
		};
		for (var i = 0, i4m = m4q.results; i < i4m.length; ++i) {
			this.qu0x(this.bvM9D(bz4D[i4m[i].type], i4m[i].id), i4m[i])
		}
		this.z4D("oneventresload", m4q.conf)
	};
	b3x.byE0x = function(j4n) {
		var K4O = "event-list";
		this.blh7a(K4O, j4n);
		this.z4D("onitemadd", {
			key: K4O,
			action: "add",
			data: j4n,
			flag: -1
		})
	};
	b3x.ps9j = function(e4i) {
		this.cp5u("ievent-like", e4i)
	};
	b3x.mB9s = function(e4i) {
		this.cp5u("ievent-delete", e4i)
	};
	b3x.Iw5B = function(i4m, gc6W) {
		for (var i = i4m.length; i < gc6W; i++) i4m.push(null);
		return i4m
	};
	b3x.cwC4G = function(i4m) {
		var m4q = [];
		if (!i4m || !i4m.length) return;
		k4o.bd4h(i4m, function(d4h) {
			d4h.biData = this.byG0x(d4h)
		}, this)
	};
	b3x.byG0x = function() {
		var ZW3x = {
			32: "comment",
			33: "activity",
			34: "recomment_artist"
		},
			cws4w = [13, 17, 18, 19, 20, 21, 22, 28, 31];
		return function(d4h) {
			var Q4U = {
				id: d4h.id,
				sourceid: d4h.user.userId,
				alg: d4h.rcmdInfo ? d4h.rcmdInfo.alg : null,
				contentType: ZW3x[d4h.type] || (k4o.di5n(cws4w, d4h.type) != -1 ? "user_event" : "other")
			};
			return Q4U
		}
	}();
	b3x.DS4W = function(cwp4t, d4h) {
		var Q4U = this.byG0x(d4h);
		Q4U.actionType = cwp4t;
		if (window.log) log("eventclick", Q4U)
	};
	b3x.cGC7v = function(e4i) {
		this.cp5u("event_latest-list", e4i)
	}
})();
(function(factory) {
	window.SparkMD5 = factory()
})(function(undefined) {
	"use strict";
	var add32 = function(a, b) {
			return a + b & 4294967295
		},
		hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

	function cmn(q, a, b, x, s, t) {
		a = add32(add32(a, q), add32(x, t));
		return add32(a << s | a >>> 32 - s, b)
	}
	function md5cycle(x, k) {
		var a = x[0],
			b = x[1],
			c = x[2],
			d = x[3];
		a += (b & c | ~b & d) + k[0] - 680876936 | 0;
		a = (a << 7 | a >>> 25) + b | 0;
		d += (a & b | ~a & c) + k[1] - 389564586 | 0;
		d = (d << 12 | d >>> 20) + a | 0;
		c += (d & a | ~d & b) + k[2] + 606105819 | 0;
		c = (c << 17 | c >>> 15) + d | 0;
		b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
		b = (b << 22 | b >>> 10) + c | 0;
		a += (b & c | ~b & d) + k[4] - 176418897 | 0;
		a = (a << 7 | a >>> 25) + b | 0;
		d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
		d = (d << 12 | d >>> 20) + a | 0;
		c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
		c = (c << 17 | c >>> 15) + d | 0;
		b += (c & d | ~c & a) + k[7] - 45705983 | 0;
		b = (b << 22 | b >>> 10) + c | 0;
		a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
		a = (a << 7 | a >>> 25) + b | 0;
		d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
		d = (d << 12 | d >>> 20) + a | 0;
		c += (d & a | ~d & b) + k[10] - 42063 | 0;
		c = (c << 17 | c >>> 15) + d | 0;
		b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
		b = (b << 22 | b >>> 10) + c | 0;
		a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
		a = (a << 7 | a >>> 25) + b | 0;
		d += (a & b | ~a & c) + k[13] - 40341101 | 0;
		d = (d << 12 | d >>> 20) + a | 0;
		c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
		c = (c << 17 | c >>> 15) + d | 0;
		b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
		b = (b << 22 | b >>> 10) + c | 0;
		a += (b & d | c & ~d) + k[1] - 165796510 | 0;
		a = (a << 5 | a >>> 27) + b | 0;
		d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
		d = (d << 9 | d >>> 23) + a | 0;
		c += (d & b | a & ~b) + k[11] + 643717713 | 0;
		c = (c << 14 | c >>> 18) + d | 0;
		b += (c & a | d & ~a) + k[0] - 373897302 | 0;
		b = (b << 20 | b >>> 12) + c | 0;
		a += (b & d | c & ~d) + k[5] - 701558691 | 0;
		a = (a << 5 | a >>> 27) + b | 0;
		d += (a & c | b & ~c) + k[10] + 38016083 | 0;
		d = (d << 9 | d >>> 23) + a | 0;
		c += (d & b | a & ~b) + k[15] - 660478335 | 0;
		c = (c << 14 | c >>> 18) + d | 0;
		b += (c & a | d & ~a) + k[4] - 405537848 | 0;
		b = (b << 20 | b >>> 12) + c | 0;
		a += (b & d | c & ~d) + k[9] + 568446438 | 0;
		a = (a << 5 | a >>> 27) + b | 0;
		d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
		d = (d << 9 | d >>> 23) + a | 0;
		c += (d & b | a & ~b) + k[3] - 187363961 | 0;
		c = (c << 14 | c >>> 18) + d | 0;
		b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
		b = (b << 20 | b >>> 12) + c | 0;
		a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
		a = (a << 5 | a >>> 27) + b | 0;
		d += (a & c | b & ~c) + k[2] - 51403784 | 0;
		d = (d << 9 | d >>> 23) + a | 0;
		c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
		c = (c << 14 | c >>> 18) + d | 0;
		b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
		b = (b << 20 | b >>> 12) + c | 0;
		a += (b ^ c ^ d) + k[5] - 378558 | 0;
		a = (a << 4 | a >>> 28) + b | 0;
		d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
		d = (d << 11 | d >>> 21) + a | 0;
		c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
		c = (c << 16 | c >>> 16) + d | 0;
		b += (c ^ d ^ a) + k[14] - 35309556 | 0;
		b = (b << 23 | b >>> 9) + c | 0;
		a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
		a = (a << 4 | a >>> 28) + b | 0;
		d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
		d = (d << 11 | d >>> 21) + a | 0;
		c += (d ^ a ^ b) + k[7] - 155497632 | 0;
		c = (c << 16 | c >>> 16) + d | 0;
		b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
		b = (b << 23 | b >>> 9) + c | 0;
		a += (b ^ c ^ d) + k[13] + 681279174 | 0;
		a = (a << 4 | a >>> 28) + b | 0;
		d += (a ^ b ^ c) + k[0] - 358537222 | 0;
		d = (d << 11 | d >>> 21) + a | 0;
		c += (d ^ a ^ b) + k[3] - 722521979 | 0;
		c = (c << 16 | c >>> 16) + d | 0;
		b += (c ^ d ^ a) + k[6] + 76029189 | 0;
		b = (b << 23 | b >>> 9) + c | 0;
		a += (b ^ c ^ d) + k[9] - 640364487 | 0;
		a = (a << 4 | a >>> 28) + b | 0;
		d += (a ^ b ^ c) + k[12] - 421815835 | 0;
		d = (d << 11 | d >>> 21) + a | 0;
		c += (d ^ a ^ b) + k[15] + 530742520 | 0;
		c = (c << 16 | c >>> 16) + d | 0;
		b += (c ^ d ^ a) + k[2] - 995338651 | 0;
		b = (b << 23 | b >>> 9) + c | 0;
		a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
		a = (a << 6 | a >>> 26) + b | 0;
		d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
		d = (d << 10 | d >>> 22) + a | 0;
		c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
		c = (c << 15 | c >>> 17) + d | 0;
		b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
		b = (b << 21 | b >>> 11) + c | 0;
		a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
		a = (a << 6 | a >>> 26) + b | 0;
		d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
		d = (d << 10 | d >>> 22) + a | 0;
		c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
		c = (c << 15 | c >>> 17) + d | 0;
		b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
		b = (b << 21 | b >>> 11) + c | 0;
		a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
		a = (a << 6 | a >>> 26) + b | 0;
		d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
		d = (d << 10 | d >>> 22) + a | 0;
		c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
		c = (c << 15 | c >>> 17) + d | 0;
		b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
		b = (b << 21 | b >>> 11) + c | 0;
		a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
		a = (a << 6 | a >>> 26) + b | 0;
		d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
		d = (d << 10 | d >>> 22) + a | 0;
		c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
		c = (c << 15 | c >>> 17) + d | 0;
		b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
		b = (b << 21 | b >>> 11) + c | 0;
		x[0] = a + x[0] | 0;
		x[1] = b + x[1] | 0;
		x[2] = c + x[2] | 0;
		x[3] = d + x[3] | 0
	}
	function md5blk(s) {
		var md5blks = [],
			i;
		for (i = 0; i < 64; i += 4) {
			md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
		}
		return md5blks
	}
	function md5blk_array(a) {
		var md5blks = [],
			i;
		for (i = 0; i < 64; i += 4) {
			md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
		}
		return md5blks
	}
	function md51(s) {
		var n = s.length,
			state = [1732584193, -271733879, -1732584194, 271733878],
			i, length, tail, tmp, lo, hi;
		for (i = 64; i <= n; i += 64) {
			md5cycle(state, md5blk(s.substring(i - 64, i)))
		}
		s = s.substring(i - 64);
		length = s.length;
		tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		for (i = 0; i < length; i += 1) {
			tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
		}
		tail[i >> 2] |= 128 << (i % 4 << 3);
		if (i > 55) {
			md5cycle(state, tail);
			for (i = 0; i < 16; i += 1) {
				tail[i] = 0
			}
		}
		tmp = n * 8;
		tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
		lo = parseInt(tmp[2], 16);
		hi = parseInt(tmp[1], 16) || 0;
		tail[14] = lo;
		tail[15] = hi;
		md5cycle(state, tail);
		return state
	}
	function md51_array(a) {
		var n = a.length,
			state = [1732584193, -271733879, -1732584194, 271733878],
			i, length, tail, tmp, lo, hi;
		for (i = 64; i <= n; i += 64) {
			md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
		}
		a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
		length = a.length;
		tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		for (i = 0; i < length; i += 1) {
			tail[i >> 2] |= a[i] << (i % 4 << 3)
		}
		tail[i >> 2] |= 128 << (i % 4 << 3);
		if (i > 55) {
			md5cycle(state, tail);
			for (i = 0; i < 16; i += 1) {
				tail[i] = 0
			}
		}
		tmp = n * 8;
		tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
		lo = parseInt(tmp[2], 16);
		hi = parseInt(tmp[1], 16) || 0;
		tail[14] = lo;
		tail[15] = hi;
		md5cycle(state, tail);
		return state
	}
	function rhex(n) {
		var s = "",
			j;
		for (j = 0; j < 4; j += 1) {
			s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
		}
		return s
	}
	function hex(x) {
		var i;
		for (i = 0; i < x.length; i += 1) {
			x[i] = rhex(x[i])
		}
		return x.join("")
	}
	if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
		add32 = function(x, y) {
			var lsw = (x & 65535) + (y & 65535),
				msw = (x >> 16) + (y >> 16) + (lsw >> 16);
			return msw << 16 | lsw & 65535
		}
	}
	if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
		(function() {
			function clamp(val, length) {
				val = val | 0 || 0;
				if (val < 0) {
					return Math.max(val + length, 0)
				}
				return Math.min(val, length)
			}
			ArrayBuffer.prototype.slice = function(from, to) {
				var length = this.byteLength,
					begin = clamp(from, length),
					end = length,
					num, target, targetArray, sourceArray;
				if (to !== undefined) {
					end = clamp(to, length)
				}
				if (begin > end) {
					return new ArrayBuffer(0)
				}
				num = end - begin;
				target = new ArrayBuffer(num);
				targetArray = new Uint8Array(target);
				sourceArray = new Uint8Array(this, begin, num);
				targetArray.set(sourceArray);
				return target
			}
		})()
	}
	function toUtf8(str) {
		if (/[\u0080-\uFFFF]/.test(str)) {
			str = unescape(encodeURIComponent(str))
		}
		return str
	}
	function utf8Str2ArrayBuffer(str, returnUInt8Array) {
		var length = str.length,
			buff = new ArrayBuffer(length),
			arr = new Uint8Array(buff),
			i;
		for (i = 0; i < length; i += 1) {
			arr[i] = str.charCodeAt(i)
		}
		return returnUInt8Array ? arr : buff
	}
	function arrayBuffer2Utf8Str(buff) {
		return String.fromCharCode.apply(null, new Uint8Array(buff))
	}
	function concatenateArrayBuffers(first, second, returnUInt8Array) {
		var result = new Uint8Array(first.byteLength + second.byteLength);
		result.set(new Uint8Array(first));
		result.set(new Uint8Array(second), first.byteLength);
		return returnUInt8Array ? result : result.buffer
	}
	function hexToBinaryString(hex) {
		var bytes = [],
			length = hex.length,
			x;
		for (x = 0; x < length - 1; x += 2) {
			bytes.push(parseInt(hex.substr(x, 2), 16))
		}
		return String.fromCharCode.apply(String, bytes)
	}
	function SparkMD5() {
		this.reset()
	}
	SparkMD5.prototype.append = function(str) {
		this.appendBinary(toUtf8(str));
		return this
	};
	SparkMD5.prototype.appendBinary = function(contents) {
		this.rH0x += contents;
		this.bq4u += contents.length;
		var length = this.rH0x.length,
			i;
		for (i = 64; i <= length; i += 64) {
			md5cycle(this.dR5W, md5blk(this.rH0x.substring(i - 64, i)))
		}
		this.rH0x = this.rH0x.substring(i - 64);
		return this
	};
	SparkMD5.prototype.end = function(raw) {
		var buff = this.rH0x,
			length = buff.length,
			i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			ret;
		for (i = 0; i < length; i += 1) {
			tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
		}
		this.oV9M(tail, length);
		ret = hex(this.dR5W);
		if (raw) {
			ret = hexToBinaryString(ret)
		}
		this.reset();
		return ret
	};
	SparkMD5.prototype.reset = function() {
		this.rH0x = "";
		this.bq4u = 0;
		this.dR5W = [1732584193, -271733879, -1732584194, 271733878];
		return this
	};
	SparkMD5.prototype.getState = function() {
		return {
			buff: this.rH0x,
			length: this.bq4u,
			hash: this.dR5W
		}
	};
	SparkMD5.prototype.setState = function(state) {
		this.rH0x = state.buff;
		this.bq4u = state.length;
		this.dR5W = state.hash;
		return this
	};
	SparkMD5.prototype.destroy = function() {
		delete this.dR5W;
		delete this.rH0x;
		delete this.bq4u
	};
	SparkMD5.prototype.oV9M = function(tail, length) {
		var i = length,
			tmp, lo, hi;
		tail[i >> 2] |= 128 << (i % 4 << 3);
		if (i > 55) {
			md5cycle(this.dR5W, tail);
			for (i = 0; i < 16; i += 1) {
				tail[i] = 0
			}
		}
		tmp = this.bq4u * 8;
		tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
		lo = parseInt(tmp[2], 16);
		hi = parseInt(tmp[1], 16) || 0;
		tail[14] = lo;
		tail[15] = hi;
		md5cycle(this.dR5W, tail)
	};
	SparkMD5.hash = function(str, raw) {
		return SparkMD5.hashBinary(toUtf8(str), raw)
	};
	SparkMD5.hashBinary = function(content, raw) {
		var hash = md51(content),
			ret = hex(hash);
		return raw ? hexToBinaryString(ret) : ret
	};
	SparkMD5.ArrayBuffer = function() {
		this.reset()
	};
	SparkMD5.ArrayBuffer.prototype.append = function(arr) {
		var buff = concatenateArrayBuffers(this.rH0x.buffer, arr, true),
			length = buff.length,
			i;
		this.bq4u += arr.byteLength;
		for (i = 64; i <= length; i += 64) {
			md5cycle(this.dR5W, md5blk_array(buff.subarray(i - 64, i)))
		}
		this.rH0x = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
		return this
	};
	SparkMD5.ArrayBuffer.prototype.end = function(raw) {
		var buff = this.rH0x,
			length = buff.length,
			tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			i, ret;
		for (i = 0; i < length; i += 1) {
			tail[i >> 2] |= buff[i] << (i % 4 << 3)
		}
		this.oV9M(tail, length);
		ret = hex(this.dR5W);
		if (raw) {
			ret = hexToBinaryString(ret)
		}
		this.reset();
		return ret
	};
	SparkMD5.ArrayBuffer.prototype.reset = function() {
		this.rH0x = new Uint8Array(0);
		this.bq4u = 0;
		this.dR5W = [1732584193, -271733879, -1732584194, 271733878];
		return this
	};
	SparkMD5.ArrayBuffer.prototype.getState = function() {
		var state = SparkMD5.prototype.getState.call(this);
		state.buff = arrayBuffer2Utf8Str(state.buff);
		return state
	};
	SparkMD5.ArrayBuffer.prototype.setState = function(state) {
		state.buff = utf8Str2ArrayBuffer(state.buff, true);
		return SparkMD5.prototype.setState.call(this, state)
	};
	SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
	SparkMD5.ArrayBuffer.prototype.oV9M = SparkMD5.prototype.oV9M;
	SparkMD5.ArrayBuffer.hash = function(arr, raw) {
		var hash = md51_array(new Uint8Array(arr)),
			ret = hex(hash);
		return raw ? hexToBinaryString(ret) : ret
	};
	return SparkMD5
});
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		v4z = c3x("nej.j"),
		em6g = c3x("nej.g"),
		k4o = c3x("nej.u"),
		fH6B = c3x("nej.n"),
		I4M = c3x("nej.ut"),
		l4p = c3x("nm.x"),
		q4u = c3x("nm.d"),
		iE7x = c3x("nm.x.nos"),
		w4A = c3x("nm.w");
	var cwn4r = 1024 * 256,
		cwm4q = 1024 * 1024 * 2,
		qN0x = {
			TOKEN_ERROR: -100,
			DNS_ERROR: -101
		},
		bzl0x = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : br4v,
		qP0x = {
			MD5_DONE: .2,
			TOKEN_GET: .22,
			DNS_GET: .24,
			UPLOADED: 1
		},
		jz8r = {
			AUDIO: "audio",
			IMAGE: "image",
			TXT: "txt",
			RAR: "rar",
			OTHER: "other",
			VIDEO: "video"
		};
	var oj9a = {};
	var wd2x = q4u.hO7H.A4E();
	iE7x.cGD7w = function() {
		return jz8r
	};
	var cwi4m = function() {
			return k4o.ol9c(6) + +(new Date)
		};
	var JR6L = function(iM7F, e4i) {
			if (!oj9a[e4i.taskId]) {
				return
			}(e4i.onuploading || br4v).call(this, iM7F)
		};
	var bqb8T = function(R4V) {
			var cwh4l = R4V.md5,
				cT5Y = R4V.file,
				cwg4k = cwh4l + cT5Y.size;
			return "nos_file_hash_" + cwg4k
		};
	var cwf4j = function(R4V) {
			var K4O = bqb8T(R4V),
				j4n = v4z.bLI4M(K4O, "{}");
			try {
				j4n = JSON.parse(j4n)
			} catch (e) {
				j4n = {}
			}
			return j4n
		};
	var cwe4i = function(R4V, e4i) {
			if (!R4V.md5) {
				return
			}
			var K4O = bqb8T(R4V),
				j4n = v4z.bLI4M(K4O, "{}");
			try {
				j4n = JSON.parse(j4n)
			} catch (e) {
				j4n = {}
			}
			NEJ.X(j4n, e4i);
			v4z.vF1x(K4O, JSON.stringify(j4n))
		};
	var cwd4h = function(R4V) {
			var K4O = bqb8T(R4V);
			v4z.LP7I(K4O)
		};
	var cwb4f = function(R4V, eN6H) {
			var Y4c = R4V.urls[Math.min(R4V.urlIndex, R4V.urls.length - 1)],
				cT5Y = R4V.file,
				lo8g = R4V.bucket,
				mJ9A = R4V.objectKey,
				cG5L = R4V.token,
				bL4P = R4V.context,
				pe9V = {},
				NU9L = bzl0x.call(cT5Y, R4V.beg, R4V.end),
				bv4z = {
					offset: R4V.beg,
					complete: R4V.lastChunk || false,
					version: "1.0"
				};
			if (bL4P) {
				bv4z.context = bL4P
			}
			pe9V["x-nos-token"] = cG5L;
			pe9V[em6g.yg2x] = cT5Y.type;
			R4V.reqId = v4z.bm4q(Y4c + "/" + lo8g + "/" + mJ9A, {
				type: "json",
				method: "POST",
				headers: pe9V,
				query: bv4z,
				data: NU9L,
				onload: eN6H.onload,
				onerror: eN6H.onerror
			})
		};
	var cwa4e = function(m4q, R4V, e4i) {
			m4q = {
				code: 200,
				fileName: e4i.file.name,
				size: e4i.file.size,
				type: e4i.file.type,
				bucket: R4V.bucket,
				docId: R4V.docId,
				objectKey: R4V.objectKey,
				url: "//nos.netease.com/" + R4V.bucket + "/" + R4V.objectKey
			};
			cwd4h(R4V);
			if (!oj9a[e4i.taskId]) {
				return
			}
			delete oj9a[e4i.taskId];
			wd2x.eV6P("sysaction", {
				type: "nosuploadsuccess",
				location: location.href,
				result: JSON.stringify(m4q)
			});
			(e4i.onsuccess || br4v).call(this, m4q)
		};
	var cvZ4d = function(m4q, e4i) {
			(e4i.onerror || br4v).call(this, m4q)
		};
	var cvW4a = function(m4q, R4V, e4i) {
			R4V.context = m4q.context;
			R4V.beg = m4q.offset;
			var iM7F = R4V.beg / R4V.file.size;
			cwe4i(R4V, {
				bucket: R4V.bucket,
				objectKey: R4V.objectKey,
				token: R4V.token,
				context: R4V.context,
				beg: R4V.beg,
				updateTime: +(new Date)
			});
			iM7F = qP0x.DNS_GET + (qP0x.UPLOADED - qP0x.DNS_GET) * iM7F;
			JR6L(iM7F, e4i);
			if (R4V.lastChunk) {
				cwa4e(m4q, R4V, e4i)
			} else {
				ZR3x(R4V, e4i)
			}
		};
	var cvV4Z = function(m4q, R4V, e4i) {
			wd2x.eV6P("sysaction", {
				type: "noschunkuploaderror",
				location: location.href,
				code: m4q.data,
				body: m4q.extData,
				ext: JSON.stringify(R4V),
				timging: +(new Date) - R4V.chuckUploadStartTime
			});
			if (R4V.urlIndex < Math.max(R4V.urls.length - 1, 5)) {
				R4V.urlIndex++;
				ZR3x(R4V, e4i)
			} else {
				cvZ4d(m4q, e4i)
			}
		};
	var ZR3x = function(R4V, e4i) {
			if (!R4V || R4V.step == -1) {
				return
			}
			R4V.end = R4V.beg + cwn4r;
			if (R4V.end >= R4V.file.size) {
				R4V.end = R4V.file.size;
				R4V.lastChunk = true
			}
			R4V.chuckUploadStartTime = +(new Date);
			cwb4f(R4V, {
				onload: cvW4a.eA6u(this, R4V, e4i),
				onerror: cvV4Z.eA6u(this, R4V, e4i)
			})
		};
	var cvT4X = function(m4q, R4V, e4i) {
			R4V.beg = m4q.offset;
			var iM7F = R4V.beg / R4V.file.size;
			iM7F = qP0x.DNS_GET + (qP0x.UPLOADED - qP0x.DNS_GET) * iM7F;
			JR6L(iM7F, e4i);
			ZR3x(R4V, e4i)
		};
	var cvS4W = function(m4q, R4V, e4i) {
			R4V.beg = 0;
			delete R4V.context;
			boe7X(R4V, e4i)
		};
	var bAh1x = function(Pv0x, R4V, e4i) {
			R4V.lastChunk = false;
			R4V.urls = Pv0x;
			R4V.urlIndex = 0;
			JR6L(qP0x.DNS_GET, e4i);
			if (R4V.fromExist) {
				delete R4V.fromExist;
				var Y4c = R4V.urls[Math.min(R4V.urlIndex, R4V.urls.length - 1)],
					lo8g = R4V.bucket,
					mJ9A = R4V.objectKey,
					cG5L = R4V.token,
					bL4P = R4V.context,
					pe9V = {},
					bv4z = {
						context: bL4P,
						version: "1.0"
					};
				pe9V["x-nos-token"] = cG5L;
				R4V.reqId = v4z.bm4q(Y4c + "/" + lo8g + "/" + mJ9A + "?uploadContext", {
					type: "json",
					method: "GET",
					headers: pe9V,
					query: bv4z,
					onload: cvT4X.eA6u(this, R4V, e4i),
					onerror: cvS4W.eA6u(this, R4V, e4i)
				})
			} else {
				R4V.beg = 0;
				ZR3x(R4V, e4i)
			}
		};
	var cvN4R = function(m4q, R4V, e4i) {
			m4q.code = qN0x.DNS_ERROR;
			(e4i.onerror || br4v).call(this, m4q)
		};
	var bAk1x = function(j4n, e4i) {
			var m4q = j4n.result || {},
				lo8g = m4q.bucket,
				mJ9A = m4q.objectKey,
				cG5L = m4q.token,
				R4V = oj9a[e4i.taskId];
			if (!lo8g || !mJ9A || !cG5L || !R4V) {
				m4q.code = qN0x.TOKEN_ERROR;
				(e4i.onerror || br4v).call(this, m4q);
				return
			}
			R4V.bucket = lo8g;
			R4V.objectKey = mJ9A;
			R4V.docId = m4q.docId;
			R4V.token = cG5L;
			JR6L(qP0x.TOKEN_GET, e4i);
			if (location.protocol == "https:") {
				bAh1x(["//nosup-hz1.127.net"], R4V, e4i)
			} else {
				R4V.reqId = iE7x.cvM4Q({
					bucket: lo8g,
					onload: bAh1x.eA6u(this, R4V, e4i),
					onerror: cvN4R.eA6u(this, R4V, e4i)
				})
			}
			R4V.step = 1
		};
	var cvL4P = function(m4q, e4i) {
			m4q.code = qN0x.TOKEN_ERROR;
			(e4i.onerror || br4v).call(this, m4q)
		};
	var boe7X = function(R4V, e4i) {
			var cT5Y = e4i.file,
				eP6J = cT5Y.name || "",
				ey6s = eP6J.split(".").pop();
			iE7x.beI5N(NEJ.X({
				filename: eP6J,
				ext: ey6s,
				onload: bAk1x.eA6u(this, e4i),
				onerror: cvL4P.eA6u(this, e4i)
			}, e4i, function(p4t) {
				return k4o.gK7D(p4t) || k4o.lG8y(p4t)
			}))
		};
	var cvK4O = function(R4V, e4i) {
			if (!R4V || R4V.step == -1) {
				return
			}
			R4V.md5 = R4V.spark.end();
			var La6U = cwf4j(R4V) || {},
				lo8g = La6U.bucket,
				mJ9A = La6U.objectKey,
				cG5L = La6U.token;
			if (!lo8g || !mJ9A || !cG5L) {
				boe7X(R4V, e4i)
			} else {
				R4V.context = La6U.context;
				R4V.beg = La6U.beg;
				R4V.fromExist = true;
				bAk1x({
					result: La6U
				}, e4i)
			}
		};
	var cvJ4N = function(EG4K, R4V, e4i) {
			if (!R4V || R4V.step == -1) {
				return
			}
			R4V.beg = R4V.end;
			var iM7F = R4V.beg / R4V.file.size;
			iM7F = 0 + qP0x.MD5_DONE * iM7F;
			JR6L(iM7F, e4i);
			R4V.spark.append(EG4K.result);
			if (R4V.lastChunk) {
				cvK4O(R4V, e4i)
			} else {
				bAC1x(R4V, e4i)
			}
		};
	var cvI4M = function(m4q, R4V, e4i) {
			R4V.md5 = "";
			boe7X(R4V, e4i)
		};
	var bAC1x = function(R4V, e4i) {
			if (!R4V || R4V.step == -1) {
				return
			}
			R4V.end = R4V.beg + cwm4q;
			if (R4V.end >= R4V.file.size) {
				R4V.end = R4V.file.size;
				R4V.lastChunk = true
			}
			var EG4K = new FileReader;
			EG4K.onload = cvJ4N.f4j(this, EG4K, R4V, e4i);
			EG4K.onerror = cvI4M.f4j(this, EG4K, R4V, e4i);
			EG4K.readAsArrayBuffer(bzl0x.call(R4V.file, R4V.beg, R4V.end))
		};
	iE7x.hP7I = function(e4i) {
		var cT5Y = e4i.file,
			eP6J = cT5Y.name || "",
			ey6s = eP6J.split(".").pop(),
			EI4M = cwi4m();
		e4i.taskId = EI4M;
		oj9a[EI4M] = {
			step: 0
		};
		JR6L(0, e4i);
		var R4V = oj9a[EI4M];
		R4V.id = EI4M;
		R4V.file = cT5Y;
		R4V.beg = 0;
		R4V.lastChunk = false;
		R4V.spark = new SparkMD5.ArrayBuffer;
		var cvG4K = e4i.onerror || br4v;
		e4i.onerror = function() {
			if (!oj9a[EI4M]) {
				return
			}
			delete oj9a[EI4M];
			cvG4K.apply(this, arguments)
		};
		wd2x.eV6P("sysaction", {
			type: "nosuploadstart",
			location: location.href
		});
		bAC1x(R4V, e4i);
		return EI4M
	};
	iE7x.ky8q = function(C4G) {
		var R4V = oj9a[C4G];
		if (R4V) {
			if (R4V.step == 0) {
				delete oj9a[C4G]
			} else {
				R4V.step = -1;
				if (R4V.reqId) {
					v4z.ky8q(R4V.reqId)
				}
				delete oj9a[C4G]
			}
		}
	};
	iE7x.beI5N = function() {
		var yX2x = function(m4q, e4i) {
				(e4i.onload || br4v).call(this, m4q)
			};
		var Az3x = function(m4q, e4i) {
				(e4i.onerror || br4v).call(this, m4q)
			};
		var bAN1x = JSON.stringify({
			code: 200,
			size: "$(ObjectSize)"
		});
		return function(e4i) {
			var XT2x = e4i.returnBody || bAN1x;
			if (k4o.lG8y(XT2x)) {
				try {
					JSON.stringify(XT2x)
				} catch (e) {
					XT2x = bAN1x
				}
			}
			return v4z.bm4q("/api/nos/token/alloc", {
				method: "POST",
				type: "json",
				query: {
					filename: e4i.filename || "",
					ext: e4i.ext || "",
					type: e4i.type || jz8r.OTHER,
					bucket: e4i.bucket || "",
					local: e4i.local || false,
					nos_product: e4i.nosProduct || 0,
					return_body: XT2x
				},
				onload: yX2x.eA6u(this, e4i),
				onerror: Az3x.eA6u(this, e4i)
			})
		}
	}();
	iE7x.cvM4Q = function() {
		var cvC4G = "//wanproxy.127.net/lbs";
		var yX2x = function(m4q, e4i) {
				if (m4q.lbs) {}
				var Pv0x = m4q.upload;
				if (!Pv0x || !Pv0x.length) {
					Az3x(m4q, e4i)
				}(e4i.onload || br4v).call(this, Pv0x)
			};
		var Az3x = function(m4q, e4i) {
				(e4i.onerror || br4v).call(this, m4q)
			};
		return function(e4i) {
			var lo8g = e4i.bucket;
			return v4z.bm4q(cvC4G, {
				method: "GET",
				type: "json",
				query: {
					version: "1.0",
					bucketname: lo8g
				},
				onload: yX2x.eA6u(this, e4i),
				onerror: Az3x.eA6u(this, e4i)
			})
		}
	}();
	iE7x.XV2x = function() {
		return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && ( !! Blob.prototype.webkitSlice || !! Blob.prototype.mozSlice || !! Blob.prototype.slice || false)
	}
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		v4z = c3x("nej.j"),
		cb4f = c3x("nej.ut"),
		bD4H = c3x("nej.ui"),
		q4u = c3x("nm.d"),
		l4p = c3x("nm.x"),
		iE7x = c3x("nm.x.nos"),
		E4I = c3x("nm.m"),
		n4r = c3x("nm.l"),
		w4A = c3x("nm.w"),
		b3x, L4P;
	var ge6Y = a3x.jm8e('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
	w4A.LI6C = NEJ.C();
	b3x = w4A.LI6C.N4R(bD4H.el6f);
	b3x.ch4l = function() {
		this.cf4j = ge6Y
	};
	b3x.bW4a = function() {
		this.ci4m();
		this.bH4L = this.o4s;
		this.hz7s = a3x.H4L(this.o4s, "j-file")[0];
		h4l.s4w(this.hz7s, "change", this.pE0x.f4j(this))
	};
	b3x.bl4p = function(e4i) {
		e4i = e4i || {};
		this.bn4r(e4i);
		this.hz7s.id = e4i.inputId || "";
		this.hz7s.accept = e4i.accept || "*";
		this.wK2x = e4i
	};
	b3x.baJ4N = function() {
		return a3x.lP8H(this.hz7s)
	};
	b3x.pE0x = function(d4h) {
		if (this.hz7s.value == "") return;
		var kK8C = this.hz7s.value.split("\\"),
			eP6J = kK8C.length > 0 ? kK8C[kK8C.length - 1] : kK8C[0],
			oD9u = (this.hz7s.files || [{}])[0];
		var cm4q = {
			files: this.hz7s.files,
			filename: eP6J,
			size: oD9u.size,
			cancelUpload: false
		};
		this.z4D("onchange", cm4q);
		if (cm4q.cancelUpload) {
			this.hz7s.value = "";
			return
		}
		if (cm4q.stopped) {
			return
		}
		this.Tu1x()
	};
	b3x.Tu1x = function() {
		if (this.hz7s.value == "") return;
		var kK8C = this.hz7s.value.split("\\"),
			eP6J = kK8C.length > 0 ? kK8C[kK8C.length - 1] : kK8C[0],
			ey6s = (eP6J.split(".") || []).pop(),
			oD9u = (this.hz7s.files || [{}])[0],
			EW4a = (oD9u.type || "").split("/").shift();
		if (oD9u.size > 100 * 1024 * 1024) {
			return this.lX8P("onerror", {
				code: -200
			})
		}
		this.z4D("onuploading", 0);
		this.bBD1x = iE7x.beI5N(NEJ.X({
			onload: this.TB1x.eA6u(this, eP6J),
			onerror: this.lX8P.f4j(this)
		}, this.wK2x, function(p4t) {
			return k4o.gK7D(p4t) || k4o.lG8y(p4t)
		}))
	};
	b3x.TB1x = function(bN4R, eP6J) {
		var m4q = bN4R.result || {},
			lo8g = m4q.bucket,
			mJ9A = m4q.objectKey,
			cG5L = m4q.token;
		if (!lo8g || !mJ9A || !cG5L) {
			bN4R.code = -100;
			this.lX8P.call(this, bN4R);
			return
		}
		var oD9u = (this.hz7s.files || [{}])[0];
		var hM7F = a3x.dk5p(this.bH4L);
		hM7F[0].value = mJ9A;
		hM7F[1].value = cG5L;
		hM7F[2].value = "json";
		if (oD9u.type && oD9u.type.indexOf("audio") == 0) {
			hM7F[3].value = "audio/mpeg"
		} else {
			hM7F[3].value = oD9u.type || ""
		}
		this.bH4L.action = "//nos.netease.com/" + lo8g;
		this.Fa4e = m4q;
		this.rx0x = eP6J;
		this.z4D("onuploading", .2);
		this.hP7I()
	};
	b3x.hP7I = function() {
		this.bBD1x = v4z.hP7I(this.bH4L, {
			type: "json",
			onload: this.vL1x.f4j(this),
			onerror: this.lX8P.f4j(this),
			onuploading: this.bcf4j.f4j(this)
		})
	};
	b3x.ky8q = function() {
		v4z.ky8q(this.bBD1x);
		this.bH4L.reset()
	};
	b3x.vL1x = function(bN4R) {
		var cG5L = this.Fa4e,
			eP6J = this.rx0x,
			oD9u = (this.hz7s.files || [{}])[0],
			kx8p = {
				code: 200,
				fileName: eP6J,
				size: oD9u.size,
				bucket: cG5L.bucket,
				docId: cG5L.docId,
				objectKey: cG5L.objectKey,
				url: "//nos.netease.com/" + cG5L.bucket + "/" + cG5L.objectKey
			};
		if (!bN4R) {
			bN4R = kx8p
		}
		if (!bN4R.code || bN4R.code == 200) {
			this.z4D("onsuccess", NEJ.X(kx8p, bN4R))
		} else {
			this.z4D("onerror", bN4R)
		}
		this.bH4L.reset()
	};
	b3x.lX8P = function(bN4R) {
		this.z4D("onerror", bN4R);
		this.bH4L.reset()
	};
	b3x.bcf4j = function(iM7F) {
		this.z4D("onuploading", .2 + iM7F.loaded / iM7F.total * .8)
	}
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		v4z = c3x("nej.j"),
		cb4f = c3x("nej.ut"),
		bD4H = c3x("nej.ui"),
		q4u = c3x("nm.d"),
		l4p = c3x("nm.x"),
		iE7x = c3x("nm.x.nos"),
		E4I = c3x("nm.m"),
		n4r = c3x("nm.l"),
		w4A = c3x("nm.w"),
		b3x, L4P;
	w4A.Ui1x = NEJ.C();
	b3x = w4A.Ui1x.N4R(cb4f.cJ5O);
	b3x.bl4p = function(e4i) {
		e4i = e4i || {};
		this.bn4r(e4i);
		this.bcm4q = w4A.LI6C.A4E(NEJ.X({
			parent: e4i.parent,
			onchange: this.pE0x.f4j(this),
			onuploading: this.z4D.f4j(this, "onuploading"),
			onsuccess: this.z4D.f4j(this, "onsuccess"),
			onerror: this.z4D.f4j(this, "onerror")
		}, e4i, function(p4t) {
			return k4o.gK7D(p4t) || k4o.lG8y(p4t)
		}));
		if (e4i.multiple && iE7x.XV2x()) {
			a3x.gJ7C(this.bcm4q.baJ4N(), "multiple", true)
		}
		this.wK2x = e4i
	};
	b3x.pE0x = function(e4i) {
		var eP6J = e4i.filename,
			ey6s = (eP6J.split(".") || []).pop();
		this.bCb1x = (e4i.files || [{}])[0];
		this.z4D("onchange", e4i);
		if (iE7x.XV2x() && !e4i.stopped && !e4i.cancelUpload) {
			this.Tu1x(true);
			e4i.stopped = true
		}
	};
	b3x.baJ4N = function() {
		return this.bcm4q.baJ4N()
	};
	b3x.cvB4F = function() {
		return this.bCb1x
	};
	b3x.Tu1x = function(fa6U, cT5Y) {
		cT5Y = cT5Y || this.bCb1x;
		if (iE7x.XV2x()) {
			this.bCd1x = iE7x.hP7I(NEJ.X({
				file: cT5Y,
				local: this.wK2x.bucket && this.wK2x.bucket.length,
				onuploading: this.z4D.f4j(this, "onuploading"),
				onsuccess: this.z4D.f4j(this, "onsuccess"),
				onerror: this.z4D.f4j(this, "onerror")
			}, this.wK2x, function(p4t) {
				return k4o.gK7D(p4t) || k4o.lG8y(p4t)
			}));
			return this.bCd1x
		} else if (!fa6U) {
			this.bcm4q.Tu1x()
		}
	};
	b3x.ky8q = function(C4G) {
		C4G = C4G || this.bCd1x;
		if (C4G) {
			iE7x.ky8q(C4G)
		}
		this.bcm4q.ky8q()
	}
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		em6g = c3x("nej.g"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		v4z = c3x("nej.j"),
		fH6B = c3x("nej.n"),
		I4M = c3x("nej.ut"),
		bc4g = c3x("nej.ui"),
		w4A = c3x("nm.w"),
		n4r = c3x("nm.l"),
		q4u = c3x("nm.d"),
		l4p = c3x("nm.x"),
		M4Q = c3x("nm.x.f"),
		iE7x = c3x("nm.x.nos"),
		b3x, L4P, bhm6g = {
			0: "",
			"-1": "不能添加重复图片",
			"-10": "最多只能添加9张",
			"-3": "请选择不超过5M的图片"
		},
		bhg6a = 5 * 1024 * 1024,
		cGE7x = 80,
		bdh4l = /\.(bmp|jpg|jpeg|png|gif)$/i;
	w4A.bCk1x = NEJ.C();
	b3x = w4A.bCk1x.N4R(I4M.wb2x);
	b3x.bhl6f = function() {
		return {
			x: this.Bk3x.clientWidth - this.o4s.offsetWidth,
			y: this.Bk3x.clientHeight - this.o4s.offsetHeight
		}
	};
	w4A.bgY6S = NEJ.C();
	b3x = w4A.bgY6S.N4R(bc4g.el6f);
	b3x.ch4l = function() {
		this.cf4j = "m-xwgt-share-upload"
	};
	b3x.bW4a = function() {
		this.ci4m();
		var i4m = a3x.H4L(this.o4s, "j-flag");
		this.bef5k = i4m.shift();
		this.MR7K = i4m.shift();
		this.VL2x = i4m.shift();
		this.bCv1x = {
			onchange: this.bCC1x.eA6u(this, 0),
			onerror: this.dO5T.f4j(this),
			onsuccess: this.rA0x.f4j(this),
			multiple: true,
			parent: this.MR7K,
			accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
		};
		this.bfD5I = {
			onchange: this.bCC1x.eA6u(this, 1),
			onerror: this.dO5T.f4j(this),
			onsuccess: this.rA0x.f4j(this),
			multiple: true,
			accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
		};
		this.cvz4D = w4A.Ui1x.A4E(this.bCv1x)
	};
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.bfD5I.parent = e4i.button;
		this.MK7D && this.MK7D.T4X();
		this.MK7D = w4A.Ui1x.A4E(this.bfD5I);
		this.o4s.style.display = "none";
		if ( !! this.eY6S) {
			for (var i = this.eY6S.length - 1; i >= 0; i--) {
				a3x.cL5Q(this.eY6S[i].element, false);
				if (this.eY6S[i].dragger) this.eY6S[i].dragger.T4X()
			}
		}
		this.eY6S = [];
		if (this.Cr4v) {
			clearTimeout(this.Cr4v)
		}
		this.bea5f(0);
		this.UW1x = 0;
		this.bX4b([
			[this.bCv1x.parent, "click", this.bCX1x.f4j(this)],
			[this.bfD5I.parent, "click", this.bCX1x.f4j(this)]
		])
	};
	b3x.bC4G = function() {
		h4l.he7X(this.uf1x, "click");
		if ( !! this.eY6S) {
			for (var i = this.eY6S.length - 1; i >= 0; i--) {
				a3x.cL5Q(this.eY6S[i].element, false);
				if (this.eY6S[i].dragger) this.eY6S[i].dragger.T4X()
			}
		}
		this.eY6S = [];
		if (this.Cr4v) {
			clearTimeout(this.Cr4v)
		}
		this.Cr4v = 0;
		this.MK7D && this.MK7D.T4X();
		delete this.MK7D;
		this.bF4J()
	};
	b3x.bCX1x = function(d4h) {
		if (!iE7x.XV2x() && this.eY6S.doing) {
			h4l.bg4k(d4h)
		}
	};
	b3x.bCC1x = function(e4i, r4v) {
		var nE9v = e4i.files,
			ha7T;
		e4i.stopped = true;
		if (!nE9v) {
			if (e4i.filename) {
				nE9v = [{
					name: e4i.filename,
					isIE: true
				}]
			}
		}
		for (var i = 0, len = nE9v.length; i < len; i++) {
			if (!bdh4l.test(nE9v[i].name)) {
				this.bhF6z({
					path: nE9v[i].name,
					index: r4v,
					status: -4,
					fail: "这不是<br>图片"
				})
			} else if (nE9v[i].size > bhg6a) {
				this.bhO6I(-3);
				this.bhF6z({
					path: nE9v[i].name,
					index: r4v,
					status: -3,
					fail: "上传<br>失败"
				})
			} else {
				this.bhF6z({
					path: nE9v[i].name,
					file: nE9v[i],
					index: r4v,
					status: 0
				})
			}
		}
	};
	b3x.bhF6z = function(tV1x) {
		if (this.eY6S.length >= 9) {
			this.bhO6I(-10, 3e3, this.bDi1x.f4j(this));
			return
		}
		this.cvy4C(tV1x);
		this.eY6S.push(tV1x);
		if ( !! this.eY6S.length) {
			this.o4s.style.display = ""
		}
		if (this.eY6S.length >= 9) {
			this.MR7K.style.display = "none"
		} else {
			this.MR7K.style.display = ""
		}
		this.Mo7h()
	};
	b3x.Mo7h = function() {
		var bim6g = -1,
			bDn1x = 0;
		for (var i = 0, l = this.eY6S.length; i < l; i++) {
			if (this.eY6S[i].status == 1) {
				return
			}
			if (this.eY6S[i].status == 0 && bim6g < 0) {
				bim6g = i
			}
			if (this.eY6S[i].status == 2 || this.eY6S[i].status < 0) {
				bDn1x++
			}
		}
		var p4t = this.eY6S[bim6g];
		if (p4t) {
			(p4t.index == 0 ? this.cvz4D : this.MK7D).Tu1x(false, p4t.file);
			p4t.status = 1;
			this.eY6S.doing = p4t;
			this.z4D("onstartupload", {})
		} else if (bDn1x == this.eY6S.length) {
			this.z4D("onfinishupload", {})
		}
	};
	b3x.biJ6D = function() {
		return this.eY6S.doing || {}
	};
	b3x.dO5T = function(d4h) {
		var tV1x = this.biJ6D();
		tV1x.status = -4;
		tV1x.fail = "上传<br>失败";
		this.bDq1x(tV1x);
		this.eY6S.doing = null;
		this.Mo7h()
	};
	b3x.rA0x = function(d4h) {
		var tV1x = this.biJ6D(),
			dQ5V = d4h.fileName.match(bdh4l);
		tV1x.picUrl = d4h.url;
		v4z.bm4q("/upload/event/img/v1", {
			query: {
				imgid: d4h.docId,
				format: dQ5V[1]
			},
			type: "json",
			onload: this.bDr1x.f4j(this),
			onerror: this.bDr1x.f4j(this)
		})
	};
	b3x.bDr1x = function(d4h) {
		if (d4h && d4h.code == 200 && d4h.picInfo) {
			var tV1x = this.biJ6D();
			tV1x.status = 2;
			var bx4B = NEJ.X({}, d4h.picInfo);
			bx4B.originId = bx4B.originIdStr;
			bx4B.squareId = bx4B.squareIdStr;
			bx4B.rectangleId = bx4B.rectangleIdStr;
			bx4B.pcSquareId = bx4B.pcSquareIdStr;
			bx4B.pcRectangleId = bx4B.pcRectangleIdStr;
			bx4B.originJpgId = bx4B.originJpgIdStr || bx4B.originJpgId;
			tV1x.picInfo = bx4B;
			this.bDq1x(tV1x);
			this.eY6S.doing = null;
			this.Mo7h()
		} else {
			this.dO5T(d4h)
		}
	};
	b3x.bhO6I = function(r4v, kX8P, eN6H) {
		if (this.UW1x < r4v) {
			return
		}
		if (this.Cr4v) {
			clearTimeout(this.Cr4v);
			this.Cr4v = 0
		}
		if (kX8P) {
			this.VL2x.innerText = bhm6g[r4v * 1];
			this.UW1x = r4v;
			this.Cr4v = setTimeout(this.bea5f.f4j(this, r4v, eN6H), kX8P)
		} else {
			this.VL2x.innerText = bhm6g[r4v];
			this.UW1x = r4v
		}
		this.VL2x.style.display = ""
	};
	b3x.bea5f = function(r4v, eN6H) {
		if (r4v && this.UW1x !== r4v) {
			return
		}
		this.UW1x = 0;
		this.VL2x.innerText = bhm6g[0];
		this.VL2x.style.display = "none";
		eN6H && eN6H()
	};
	b3x.cvy4C = function(cT5Y) {
		var j4n = {};
		if (cT5Y.fail) {
			j4n.fail = cT5Y.fail
		}
		var dV5a = a3x.cd4h("m-xwgt-share-upload-preview", j4n);
		cT5Y.element = a3x.nR9I(dV5a);
		h4l.s4w(a3x.H4L(cT5Y.element, "del")[0], "mousedown", this.cvx4B.f4j(this, cT5Y), false);
		this.bef5k.insertBefore(cT5Y.element, this.bef5k.lastElementChild);
		cT5Y.dragger = w4A.bCk1x.A4E({
			view: this.bef5k.parentNode,
			body: cT5Y.element,
			overflow: false,
			direction: 0,
			isRelative: 1,
			ondragstart: this.UJ1x.f4j(this, cT5Y),
			onchange: this.cvv4z.f4j(this, cT5Y),
			ondragend: this.bgR5W.f4j(this, cT5Y)
		})
	};
	b3x.bDq1x = function(cT5Y) {
		if (!cT5Y || !cT5Y.element) {
			return false
		}
		var j4n = {};
		if (cT5Y.fail) {
			j4n.fail = cT5Y.fail
		} else {
			j4n.url = cT5Y.picUrl
		}
		a3x.y4C(cT5Y.element, "z-fail");
		cT5Y.element.firstChild.outerHTML = a3x.cd4h("m-xwgt-share-upload-preview-img", j4n)
	};
	b3x.UJ1x = function(p4t, kW8O) {
		a3x.y4C(p4t.element, "z-sel")
	};
	b3x.cvv4z = function(p4t, kW8O) {
		var cGF7y, gt6n = this.eY6S.length - 1,
			nU9L;
		for (var i = gt6n; i >= 0; i--) {
			a3x.x4B(this.eY6S[i].element, "z-jump");
			if (this.eY6S[i] == p4t) {
				nU9L = i
			} else {
				a3x.fb6V(this.eY6S[i].element, {
					left: "",
					top: ""
				})
			}
		}
		var Tr1x = {
			x: 46 + 92 * (nU9L % 5) + kW8O.left,
			y: 46 + 92 * (nU9L / 5 >> 0) + kW8O.top
		};
		var bjN6H = Tr1x.x / 92 >> 0,
			bjQ6K = Tr1x.y / 92 >> 0,
			zi3x = Math.max(0, Math.min(gt6n, bjQ6K * 5 + bjN6H));
		if (zi3x == nU9L) {
			return
		}
		var cvs4w = zi3x < nU9L;
		for (var i = Math.min(zi3x, nU9L); i <= Math.max(zi3x, nU9L); i++) {
			if (i !== nU9L) {
				var bDL1x = i % 5;
				if (cvs4w) {
					if (bDL1x == 4) {
						a3x.fb6V(this.eY6S[i].element, {
							left: "-368px",
							top: "92px"
						})
					} else {
						a3x.fb6V(this.eY6S[i].element, {
							left: "92px",
							top: ""
						})
					}
				} else {
					if (bDL1x == 0) {
						a3x.fb6V(this.eY6S[i].element, {
							left: "368px",
							top: "-92px"
						})
					} else {
						a3x.fb6V(this.eY6S[i].element, {
							left: "-92px",
							top: ""
						})
					}
				}
			}
		}
	};
	b3x.bgR5W = function(p4t, kW8O) {
		var cGG7z, gt6n = this.eY6S.length - 1,
			nU9L;
		for (var i = gt6n; i >= 0; i--) {
			a3x.fb6V(this.eY6S[i].element, {
				left: "",
				top: ""
			});
			if (this.eY6S[i] == p4t) {
				nU9L = i
			}
		}
		a3x.x4B(p4t.element, "z-sel");
		var Tr1x = {
			x: 46 + 92 * (nU9L % 5) + kW8O.left,
			y: 46 + 92 * (nU9L / 5 >> 0) + kW8O.top
		};
		var bjN6H = Tr1x.x / 92 >> 0,
			bjQ6K = Tr1x.y / 92 >> 0,
			zi3x = Math.max(0, Math.min(gt6n, bjQ6K * 5 + bjN6H));
		if (zi3x == nU9L) {
			return
		}
		this.bef5k.insertBefore(p4t.element, (this.eY6S[zi3x + (zi3x > nU9L ? 1 : 0)] || {}).element || this.MR7K);
		this.eY6S.splice(nU9L, 1);
		this.eY6S.splice(zi3x, 0, p4t)
	};
	b3x.cvx4B = function(p4t, d4h) {
		a3x.cL5Q(p4t.element, false);
		if (p4t.dragger) p4t.dragger.T4X();
		delete p4t.dragger;
		var r4v = -1;
		for (var i = this.eY6S.length - 1; i >= 0; i--) {
			if (this.eY6S[i] == p4t) {
				r4v = i;
				break
			}
		}
		this.eY6S.splice(r4v, r4v >= 0 ? 1 : 0);
		delete p4t;
		if (this.eY6S.length >= 9) {
			this.MR7K.style.display = "none"
		} else {
			this.MR7K.style.display = ""
		}
		if (!this.eY6S.length) {
			this.o4s.style.display = "none";
			this.bea5f(0)
		} else {
			this.bDi1x()
		}
		if (this.eY6S.doing == p4t) {
			this.eY6S.doing = null
		}
		this.Mo7h()
	};
	b3x.bDi1x = function() {
		var bDR2x = false;
		for (var i = 0, len = this.eY6S.length; i < len; i++) {
			if (this.eY6S[i].status == -3) {
				bDR2x = true
			}
		}
		if (bDR2x) {
			this.bhO6I(-3)
		} else {
			this.bea5f(-3)
		}
	};
	b3x.SK1x = function() {
		var dC5H = [];
		for (var i = this.eY6S.length - 1; i >= 0; i--) {
			if (this.eY6S[i].status == 2) {
				dC5H.unshift(this.eY6S[i].picInfo)
			}
		}
		return dC5H
	};
	I4M.fK6E.A4E({
		element: w4A.bgY6S,
		event: ["onstartupload", "onfinishupload"]
	})
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		fy6s = NEJ.R,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		bc4g = c3x("nej.ui"),
		O4S = c3x("nej.ut"),
		b3x, L4P;
	if ( !! O4S.nD9u) return;
	O4S.nD9u = NEJ.C();
	b3x = O4S.nD9u.N4R(O4S.bbX4b);
	L4P = O4S.nD9u.cs5x;
	b3x.bl4p = function(e4i) {
		this.cvp4t(e4i.more);
		this.FM5R = a3x.B4F(e4i.sbody);
		this.cvn4r = e4i.fixScrollPosition;
		this.bX4b([
			[this.FM5R, "scroll", this.cvm4q.f4j(this)]
		]);
		var dq5v = e4i.delta;
		if (dq5v == null) dq5v = 30;
		this.SD1x = Math.max(0, dq5v);
		var cz5E = parseInt(e4i.count) || 0;
		this.jH8z = Math.max(0, cz5E);
		var gX7Q = parseInt(e4i.number) || 0;
		if (gX7Q > 1 && gX7Q <= cz5E) {
			this.Bb3x = gX7Q
		}
		this.bn4r(e4i)
	};
	b3x.bC4G = function() {
		this.bF4J();
		delete this.Cf3x;
		delete this.FM5R;
		delete this.tQ1x;
		delete this.Zh3x
	};
	b3x.BT3x = function(bi4m, bq4u) {
		var bM4Q = this.yN2x + (this.jH8z - 1) * this.oH9y,
			gc6W = this.jH8z * this.oH9y;
		return L4P.BT3x.call(this, bM4Q, bi4m, gc6W, bq4u)
	};
	b3x.cvp4t = function(Zg3x) {
		this.Cf3x = a3x.B4F(Zg3x);
		this.bX4b([
			[this.Cf3x, "click", this.oE9v.f4j(this)]
		])
	};
	b3x.bkV7O = function(F4J) {
		F4J = F4J || {};
		if (this.tQ1x || !F4J) return;
		if (!F4J.scrollHeight) F4J = a3x.oy9p();
		var bi4m = a3x.hU7N(this.il7e, this.cvn4r ? F4J : null),
			dq5v = bi4m.y + this.il7e.offsetHeight - F4J.scrollTop - F4J.clientHeight,
			bkW7P = F4J.scrollHeight <= F4J.clientHeight;
		if (dq5v <= this.SD1x || bkW7P && !this.tQ1x) {
			this.oE9v()
		}
	};
	b3x.cvm4q = function(d4h) {
		if (this.tQ1x) return;
		this.bkV7O(h4l.X4b(d4h))
	};
	b3x.Cg3x = function(d4h) {
		L4P.Cg3x.apply(this, arguments);
		if (!d4h.stopped) {
			this.Pk0x();
			var bi4m = 0;
			if (d4h.index > 1) {
				bi4m = this.yN2x + ((d4h.index - 1) * this.jH8z - 1) * this.oH9y
			}
			this.hT7M = bi4m;
			this.oE9v()
		}
	};
	b3x.bQi5n = function(e4i) {
		if ( !! this.Bb3x) {
			var dq5v = e4i.offset > 0 ? this.oH9y : this.yN2x,
				gc6W = dq5v + this.oH9y * (this.Bb3x - 1);
			this.hT7M = e4i.offset + gc6W;
			e4i.data.limit = gc6W;
			e4i.limit = gc6W;
			delete this.Bb3x
		}
		return e4i
	};
	b3x.bng7Z = function(e4i) {
		delete this.Zh3x;
		L4P.bng7Z.apply(this, arguments);
		this.bEp2x()
	};
	b3x.bmu7n = function(d4h) {
		if (d4h.key != this.iU7N.key) return;
		switch (d4h.action) {
		case "refresh":
		case "append":
			delete this.Zh3x;
			break
		}
		L4P.bmu7n.apply(this, arguments)
	};
	b3x.SB1x = function() {
		this.zk3x("onbeforelistload", "列表加载中...");
		a3x.ba4e(this.Cf3x, "display", "none")
	};
	b3x.bjf6Z = function(i4m, bi4m, gc6W) {
		var bq4u = i4m.length,
			blk7d = i4m.loaded ? bi4m + gc6W >= bq4u : bi4m + gc6W > bq4u;
		this.hT7M = Math.min(this.hT7M, bq4u);
		a3x.ba4e(this.Cf3x, "display", blk7d ? "none" : "");
		if (blk7d) this.tQ1x = !0;
		if (this.jH8z > 0) {
			var bx4B = this.BT3x(bi4m, i4m.length);
			if (this.bQU6O(bx4B.index, bx4B.total)) return !0;
			var dq5v = this.yN2x - this.oH9y,
				gX7Q = this.jH8z * this.oH9y;
			this.tQ1x = (bi4m + gc6W - dq5v) % gX7Q == 0 || blk7d;
			a3x.ba4e(this.Cf3x, "display", this.tQ1x ? "none" : "");
			this.bkG6A(this.tQ1x && bx4B.total > 1 ? "" : "none")
		}
	};
	b3x.bjT6N = function() {
		this.hT7M = 0;
		this.tQ1x = !0;
		this.zk3x("onemptylist", "没有列表数据！")
	};
	b3x.Ub1x = function(dV5a, kW8O) {
		this.il7e.insertAdjacentHTML(kW8O || "beforeEnd", dV5a)
	};
	b3x.Uv1x = function(hu7n) {
		this.fQ6K = this.fQ6K || [];
		if (k4o.eL6F(hu7n)) {
			fy6s.push.apply(this.fQ6K, hu7n)
		} else {
			this.fQ6K.push(hu7n)
		}
	};
	b3x.bfn5s = function(d4h) {
		a3x.mS9J(this.cu5z);
		this.VJ2x(d4h, "onafteradd");
		var fa6U = d4h.flag;
		if (d4h.stopped || !fa6U) return;
		if (this.jH8z > 0) {
			this.bks6m();
			return
		}
		this.hT7M += 1;
		fa6U == -1 ? this.biG6A(d4h.data) : this.bRM6G(d4h.data)
	};
	b3x.VX2x = function(d4h) {
		this.VJ2x(d4h, "onafterdelete");
		if (d4h.stopped) return;
		if (this.jH8z > 0) {
			this.bks6m();
			return
		}
		var C4G = d4h.data[this.ff6Z.pkey];
		if ( !! this.fQ6K) {
			var p4t = a3x.bCH1x(C4G),
				r4v = k4o.di5n(this.fQ6K, p4t);
			if (r4v >= 0) {
				this.fQ6K.splice(r4v, 1);
				this.hT7M -= 1
			}
			if ( !! p4t) p4t.T4X()
		} else {
			var g4k = a3x.B4F(this.bOr4v(C4G));
			if ( !! g4k) this.hT7M -= 1;
			a3x.cL5Q(g4k)
		}
		if (this.hT7M <= 0) this.oE9v()
	};
	b3x.bin6h = function(bi4m, gc6W) {
		if (bi4m != this.hT7M) return;
		if (this.Ye2x()) {
			this.tQ1x = !1;
			this.bEp2x()
		}
	};
	b3x.bip6j = function(bi4m, gc6W) {
		if (bi4m != 0) return;
		var Mu7n = this.S4W.hD7w(this.iU7N.key);
		for (var i = gc6W - 1; i >= 0; i--) {
			this.biG6A(Mu7n[i])
		}
	};
	b3x.bEp2x = function() {
		var F4J = this.FM5R;
		if (!F4J || this.tQ1x) return;
		this.bkV7O(this.FM5R)
	};
	b3x.gI7B = function() {
		delete this.tQ1x;
		L4P.gI7B.apply(this, arguments)
	};
	b3x.oE9v = function() {
		if ( !! this.Zh3x) return;
		this.Zh3x = !0;
		var bi4m = this.hT7M;
		this.hT7M += bi4m == 0 ? this.yN2x : this.oH9y;
		this.bQh5m(bi4m)
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		a3x = c3x("nej.e"),
		k4o = c3x("nej.u"),
		h4l = c3x("nej.v"),
		cZ5e = c3x("nej.x"),
		O4S = c3x("nej.ut"),
		b3x;
	if ( !! O4S.FZ5e) return;
	O4S.FZ5e = NEJ.C();
	b3x = O4S.FZ5e.N4R(O4S.cJ5O);
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.ji8a = e4i.event || "click";
		this.kQ8I = e4i.selected || "js-selected";
		this.nV9M = e4i.disabled || "js-disabled";
		this.bEs2x = !! e4i.inverse;
		this.cvj4n(e4i.list);
		this.Rt0x(e4i.index || 0)
	};
	b3x.bC4G = function() {
		var cvi4m = function(g4k) {
				this.blP7I(g4k, !1)
			};
		return function() {
			this.bF4J();
			k4o.bd4h(this.bU4Y, cvi4m, this);
			delete this.bU4Y;
			delete this.ji8a;
			delete this.cq5v;
			delete this.nV9M;
			delete this.kQ8I;
			delete this.bEs2x
		}
	}();
	b3x.cvj4n = function() {
		var brG8y = function(p4t) {
				if (!p4t) return;
				this.bU4Y.push(p4t);
				var r4v = this.bU4Y.length - 1,
					dx5C = this.blS7L[r4v];
				if (!dx5C) {
					dx5C = this.Rt0x.f4j(this, r4v);
					this.blS7L[r4v] = dx5C
				}
				this.bX4b([
					[p4t, this.ji8a, dx5C]
				])
			};
		return function(i4m) {
			this.bU4Y = [];
			if (!this.blS7L) this.blS7L = [];
			k4o.bd4h(i4m, brG8y, this)
		}
	}();
	b3x.blP7I = function(F4J, cvh4l) { !! cvh4l && !this.bEs2x ? a3x.y4C(F4J, this.kQ8I) : a3x.x4B(F4J, this.kQ8I)
	};
	b3x.Rt0x = function(r4v, Qx0x, j4n) {
		var F4J = this.bU4Y[r4v];
		if (Qx0x != !0 && (r4v == this.cq5v || !F4J || a3x.bE4I(F4J, this.nV9M))) {
			h4l.cn4r(arguments[1]);
			return this
		}
		var d4h = {
			index: r4v,
			last: this.cq5v,
			list: this.lO8G(),
			data: j4n || a3x.t4x(F4J, "value")
		};
		this.cq5v = r4v;
		F4J = this.bU4Y[d4h.last];
		if ( !! F4J) this.blP7I(F4J, !1);
		F4J = this.bU4Y[this.cq5v];
		this.blP7I(F4J, !0);
		this.z4D("onchange", d4h);
		if (!d4h.nostop) h4l.cn4r(arguments[1]);
		return this
	};
	b3x.tm1x = function() {
		return this.cq5v
	};
	b3x.lO8G = function() {
		return this.bU4Y
	};
	a3x.cvg4k = cZ5e.cvg4k = function(bI4M, e4i) {
		var C4G = a3x.lP8H(bI4M);
		if (!C4G) return null;
		if (!O4S.beT5Y(C4G, O4S.FZ5e)) {
			e4i = e4i || {};
			e4i.list = !e4i.clazz ? a3x.dk5p(C4G) : a3x.H4L(C4G, e4i.clazz);
			delete e4i.clazz
		}
		return O4S.beT5Y(C4G, O4S.FZ5e, e4i || bb4f)
	};
	cZ5e.isChange = !0
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		k4o = c3x("nej.u"),
		v4z = c3x("nej.j"),
		l4p = c3x("nm.x");
	var SETTING_KEY = "player-setting";
	var nC9t = {
		mode: 4,
		volume: .8,
		autoPlay: false,
		index: 0,
		lock: false
	};
	nC9t = v4z.tu1x(SETTING_KEY) || nC9t;
	l4p.bmr7k = function() {
		return nC9t
	};
	l4p.Gi5n = function(Gj5o) {
		if (Gj5o) {
			nC9t = Gj5o;
			v4z.vF1x(SETTING_KEY, Gj5o)
		}
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		I4M = c3x("nej.ut"),
		l4p = c3x("nm.x"),
		q4u = c3x("nm.d"),
		hc7V = c3x("nm.w.player.log");
	var kI8A = q4u.hO7H.A4E();
	var LogLevel = {
		ERROR: 10,
		INFO: 6,
		DEBUG: 2
	};
	var hh7a = function(u4y, bG4K, qz0x) {
			var cK5P = l4p.fp6j("{0} {1} {2}", k4o.ih7a(new Date, "yyyy-MM-dd HH:mm:ss"), u4y, bG4K);
			if (qz0x == LogLevel.ERROR) {
				kI8A.eV6P("playerror", {
					message: bG4K
				})
			}
			if (qz0x >= LogLevel.INFO) {
				kI8A.bEi2x(cK5P)
			}
			if (location.hostname.indexOf("igame.163.com") != -1) {
				console.log(cK5P)
			}
		};
	hc7V.cc4g = function() {
		hh7a("PLAY_ERROR", l4p.fp6j.apply(null, arguments), LogLevel.ERROR)
	};
	hc7V.pG0x = function() {
		hh7a("PLAY_INFO", l4p.fp6j.apply(null, arguments), LogLevel.INFO)
	};
	hc7V.cGH7A = function() {
		hh7a("PLAY_DEBUG", l4p.fp6j.apply(null, arguments), LogLevel.DEBUG)
	}
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		I4M = c3x("nej.ut"),
		k4o = c3x("nej.u"),
		w4A = c3x("nm.w"),
		eN6H = c3x("flash.cb");
	var eh6b = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
	var Go5t, bez5E, vC1x;
	w4A.cvc4g = function(u4y, cA5F) {
		if (u4y != "flash") {
			if (!Go5t) {
				Go5t = a3x.dj5o("audio");
				k4o.bd4h(eh6b, function(u4y) {
					h4l.s4w(Go5t, u4y, onMediaCallBack)
				})
			}
			if (Go5t && Go5t.canPlayType && Go5t.canPlayType("audio/mpeg")) {
				cA5F(new MediaWrap("audio"));
				return
			}
		}
		if (!bez5E) {
			a3x.sv0x({
				src: "/style/swf/music/music.swf?v=20151204",
				hidden: true,
				params: {
					allowscriptaccess: "always"
				},
				onready: function(hW7P) {
					bez5E = hW7P;
					k4o.bd4h(eh6b, function(u4y) {
						eN6H[u4y] = onMediaCallBack;
						bez5E.addCallback(u4y, "flash.cb." + u4y)
					});
					cA5F(new MediaWrap("flash"))
				}.f4j(this)
			})
		} else {
			cA5F(new MediaWrap("flash"))
		}
	};

	function MediaWrap(Gs5x) {
		var gU7N;
		I4M.fK6E.A4E({
			element: this,
			event: eh6b.concat(["interrupt", "recover"])
		});
		gU7N = Gs5x == "audio" ? Go5t : bez5E;
		this.type = Gs5x;
		this.destroy = function() {};
		this.setSrc = function(Y4c) {
			if (vC1x != this) {
				var gt6n = vC1x;
				if (gt6n) {
					gt6n.interrupt()
				}
				vC1x = this
			}
			if (Gs5x == "flash") {
				gU7N.setSrc(Y4c)
			} else {
				gU7N.src = Y4c
			}
		};
		this.play = function() {
			if (vC1x != this) {
				var gt6n = vC1x;
				if (gt6n) {
					gt6n.interrupt();
					vC1x = this;
					this.recover()
				} else {
					vC1x = this
				}
			}
			if (Gs5x == "flash") {
				gU7N.as_play()
			} else {
				gU7N.play()
			}
		};
		this.pause = function() {
			if (vC1x != this) return;
			if (Gs5x == "flash") {
				gU7N.as_pause()
			} else {
				gU7N.pause()
			}
		};
		this.load = function() {
			if (vC1x != this) return;
			if (Gs5x == "flash") {
				gU7N.as_load()
			} else {
				gU7N.load()
			}
		};
		this.interrupt = function() {
			onMediaCallBack({
				type: "interrupt"
			})
		};
		this.recover = function() {
			onMediaCallBack({
				type: "recover"
			})
		};
		this.getMedia = function() {
			return gU7N
		};
		var oF9w = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
		k4o.bd4h(oF9w, function(W4a) {
			var Pt0x = "get" + W4a,
				Ps0x = "set" + W4a;
			if (Gs5x == "flash") {
				if (!this[Pt0x]) {
					this[Pt0x] = function() {
						return gU7N[Pt0x]()
					}
				}
				if (!this[Ps0x]) {
					this[Ps0x] = function(value) {
						gU7N[Ps0x](value)
					}
				}
			} else {
				var bFg2x = W4a.slice(0, 1).toLowerCase() + W4a.slice(1);
				if (!this[Pt0x]) {
					this[Pt0x] = function() {
						return gU7N[bFg2x]
					}
				}
				if (!this[Ps0x]) {
					this[Ps0x] = function(value) {
						gU7N[bFg2x] = value
					}
				}
			}
		}, this)
	}
	function onMediaCallBack(d4h) {
		if (vC1x) {
			h4l.z4D(vC1x, d4h.type, d4h)
		}
	}
})();
(function() {
	var c3x = NEJ.P,
		h4l = c3x("nej.v"),
		v4z = c3x("nej.j"),
		I4M = c3x("nej.ut"),
		dy5D = c3x("nej.p"),
		w4A = c3x("nm.w"),
		l4p = c3x("nm.x"),
		hc7V = c3x("nm.w.player.log"),
		b3x;
	var DEFAULT_BR = 128e3;
	var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
	var MAX_STALLED_RETRY = 2;
	var MediaError = {
		MEDIA_ERR_ABORTED: 1,
		MEDIA_ERR_NETWORK: 2,
		MEDIA_ERR_DECODE: 3,
		MEDIA_ERR_SRC_NOT_SUPPORTED: 4
	};
	var ErrorType = {
		INFO_GET_ERR: 1,
		NET_ERR: 2,
		UNKNOWN_ERR: 10
	};
	var LoadState = {
		LOAD_START: 1,
		LOADED_META: 2,
		IN_RELOAD: 3,
		IN_RE_GET_URL: 4,
		IN_SWITCH_CDN: 5,
		IN_SWITCH_MEDIA: 6
	};
	var RetryLevel = {
		NONE: 0,
		GET_URL: 1,
		RELOAD: 2,
		SWITCH_CDN: 3
	};
	var bFj2x = false;
	w4A.fS6M = NEJ.C();
	b3x = w4A.fS6M.N4R(I4M.cJ5O);
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.cP5U = {};
		this.bcn4r(e4i.media);
		v4z.bm4q("/api/cdns", {
			type: "json",
			onload: function(d4h) {
				if (d4h.code) {
					this.ro0x = d4h.data
				}
			}.f4j(this)
		})
	};
	b3x.bC4G = function() {
		this.bF4J();
		delete this.cP5U
	};
	b3x.bch4l = function(bj4n) {
		if (!bj4n) return;
		var xd2x = this.cP5U.volume;
		if (this.dW5b) {
			this.dW5b.pause()
		}
		this.cP5U = {
			time: 0,
			id: bj4n.id,
			duration: bj4n.duration / 1e3,
			play: this.cP5U.play,
			stalledRetryCount: 0
		};
		if (xd2x != null) {
			this.cP5U.volume = xd2x
		}
		this.cP5U.loadState = LoadState.LOAD_START;
		this.bFy2x(bj4n.id);
		hc7V.pG0x("play song id: {0}", bj4n.id)
	};
	b3x.eq6k = function() {
		if (this.cP5U.error) {
			this.cP5U.error = null;
			if (this.cP5U.error == ErrorType.INFO_GET_ERR || this.bFz2x()) {
				this.bFA2x()
			} else {
				this.Pd0x()
			}
		} else {
			if (this.dW5b) {
				this.dW5b.play()
			}
		}
		this.cP5U.play = true;
		this.qn0x("play")
	};
	b3x.fD6x = function() {
		if (this.dW5b) {
			this.dW5b.pause()
		}
		this.cP5U.play = false;
		this.qn0x("pause")
	};
	b3x.oJ9A = function(bA4E) {
		if (this.dW5b) {
			this.dW5b.setCurrentTime(bA4E)
		}
		this.cP5U.time = bA4E;
		hc7V.pG0x("seek to: {0}", bA4E)
	};
	b3x.bnV7O = function() {
		return this.cP5U.duration || 0
	};
	b3x.up1x = function() {
		return !!this.cP5U.play
	};
	b3x.mF9w = function(Ou9l) {
		this.cP5U.volume = Ou9l;
		if (this.dW5b) {
			this.dW5b.setVolume(Ou9l)
		}
	};
	b3x.bak3x = function() {
		return this.cP5U.time
	};
	b3x.bcn4r = function(u4y) {
		w4A.cvc4g(u4y, function(gU7N) {
			this.dW5b = gU7N;
			hc7V.pG0x("media loaded: {0}", gU7N.type);
			this.bX4b([
				[this.dW5b, "loadedmetadata", this.cvb4f.f4j(this)],
				[this.dW5b, "ended", this.cva4e.f4j(this)],
				[this.dW5b, "waiting", this.yB2x.f4j(this)],
				[this.dW5b, "play", this.uq1x.f4j(this)],
				[this.dW5b, "pause", this.bpi8a.f4j(this)],
				[this.dW5b, "playing", this.NQ9H.f4j(this)],
				[this.dW5b, "timeupdate", this.cuY4c.f4j(this)],
				[this.dW5b, "progress", this.ri0x.f4j(this)],
				[this.dW5b, "stalled", this.bpP8H.f4j(this)],
				[this.dW5b, "interrupt", this.fD6x.f4j(this)],
				[this.dW5b, "recover", this.cuX4b.f4j(this)],
				[this.dW5b, "error", this.dO5T.f4j(this)]
			]);
			if (this.cP5U) {
				if (this.cP5U.loadState == LoadState.LOAD_START || this.cP5U.loadState == LoadState.IN_SWITCH_MEDIA) {
					this.bqd8V();
					if (this.cP5U.volume != null) {
						this.dW5b.setVolume(this.cP5U.volume)
					}
				}
			}
		}.f4j(this))
	};
	b3x.cuV4Z = function(u4y) {
		this.KO6I();
		this.dW5b.destroy();
		this.cP5U.loadState = LoadState.IN_SWITCH_MEDIA;
		this.yB2x();
		this.bcn4r(u4y);
		hc7V.pG0x("switch media")
	};
	b3x.cGI7B = function() {
		return this.dW5b
	};
	b3x.bFy2x = function() {
		this.yB2x();
		v4z.bm4q("/api/song/enhance/player/url", {
			type: "json",
			query: {
				ids: JSON.stringify([this.cP5U.id]),
				br: DEFAULT_BR
			},
			onload: this.bGn2x.f4j(this),
			onerror: this.bGn2x.f4j(this)
		})
	};
	b3x.bGn2x = function(d4h) {
		if (d4h.code == 200 && d4h.data && d4h.data.length) {
			var bx4B = d4h.data[0];
			if (!bx4B.url) {
				this.cP5U.error = ErrorType.INFO_GET_ERR;
				this.qn0x("error", {
					code: this.cP5U.error
				});
				return
			}
			this.cP5U.playUrl = bx4B.url;
			this.cP5U.expireTime = (new Date).getTime() + bx4B.expi * 1e3;
			this.bqd8V()
		} else {
			this.cP5U.error = ErrorType.INFO_GET_ERR;
			this.qn0x("error", {
				code: this.cP5U.error
			});
			hc7V.cc4g("info load error")
		}
	};
	b3x.bqd8V = function() {
		if (this.dW5b) {
			var Y4c = this.cP5U.playUrl;
			if (this.cP5U.time > 0 && (this.cP5U.loadState == LoadState.IN_RE_GET_URL || this.cP5U.loadState == LoadState.IN_RE_GET_URL)) {
				Y4c += "#t=" + this.cP5U.time
			}
			this.dW5b.setSrc(Y4c);
			hc7V.pG0x("load mp3: {0},loadState: {1}.", Y4c, this.cP5U.loadState)
		}
	};
	b3x.bGo2x = function() {
		if (/#t=(\d+)$/.test(this.dW5b.getSrc())) {
			return parseInt(RegExp.$1) || 0
		} else {
			return 0
		}
	};
	b3x.Pd0x = function() {
		var bA4E = parseInt(this.cP5U.time) || 0,
			cuT4X = this.bGo2x();
		if (bA4E === cuT4X) {
			this.dW5b.load()
		} else {
			this.dW5b.setSrc(this.cP5U.playUrl + "#t=" + bA4E)
		}
		this.cP5U.loadState = LoadState.IN_RELOAD;
		this.yB2x();
		hc7V.pG0x("reload from: {0}", bA4E)
	};
	b3x.bFA2x = function() {
		this.cP5U.loadState = LoadState.IN_RE_GET_URL;
		this.bFy2x()
	};
	b3x.bGq2x = function() {
		var qk0x = getHost(this.cP5U.playUrl);
		if (qk0x) {
			for (var i = 0; i < this.ro0x.length; i++) {
				var iq7j = this.ro0x[i] || [],
					r4v = iq7j.indexOf(qk0x);
				if (r4v >= 0 && iq7j.length > 1) {
					return iq7j[(r4v + 1) % iq7j.length]
				}
			}
		}
		function getHost(Y4c) {
			if (CDN_HOST_REG.test(Y4c)) return RegExp.$1
		}
	};
	b3x.cuS4W = function() {
		this.cP5U.playUrl = this.cP5U.playUrl.replace(CDN_HOST_REG, this.bGq2x());
		this.cP5U.loadState = LoadState.IN_SWITCH_CDN;
		this.bqd8V();
		this.yB2x()
	};
	b3x.cvb4f = function() {
		if (this.cP5U.loadState == LoadState.LOAD_START) {
			this.cP5U.loadState = LoadState.LOADED_META;
			if (this.dW5b.type == "audio") {
				this.cP5U.duration = this.dW5b.getDuration()
			}
			this.qn0x("loadedmeta", {
				duration: this.cP5U.duration
			})
		} else {
			this.cP5U.loadState = LoadState.LOADED_META
		}
		if (this.cP5U.play) {
			this.dW5b.play()
		} else {
			this.dW5b.pause()
		}
		if (this.cP5U.time && parseInt(this.cP5U.time) != this.bGo2x()) {
			this.dW5b.setCurrentTime(this.cP5U.time)
		}
		this.JL6F();
		this.NQ9H();
		bFj2x = true;
		hc7V.pG0x("loaded meta")
	};
	b3x.cva4e = function() {
		this.cP5U.ended = true;
		this.qn0x("ended")
	};
	b3x.yB2x = function() {
		if (!this.cP5U.waiting) {
			this.cP5U.waiting = true;
			this.cP5U.waitTimestamp = +(new Date);
			this.qn0x("waiting")
		}
	};
	b3x.NQ9H = function() {
		this.cP5U.waiting = false;
		this.cP5U.waitTimestamp = 0;
		this.qn0x("playing")
	};
	b3x.uq1x = function() {
		this.qn0x("play")
	};
	b3x.bpi8a = function() {
		this.qn0x("pause")
	};
	b3x.cuY4c = function() {
		if (this.cP5U.loadState != LoadState.LOADED_META) return;
		var bA4E = this.dW5b.getCurrentTime();
		if (this.cP5U.waiting && bA4E > this.cP5U.time) {
			this.NQ9H()
		}
		this.cP5U.time = bA4E;
		this.qn0x("timeupdate", {
			time: this.cP5U.time,
			duration: this.cP5U.duration
		})
	};
	b3x.ri0x = function(d4h) {
		if (this.cP5U.loadState != LoadState.LOADED_META) return;
		var m4q = {};
		if (d4h.data) {
			m4q.total = d4h.data.total;
			m4q.loaded = d4h.data.loaded
		} else {
			var yy2x = this.dW5b.getBuffered(),
				bA4E = this.dW5b.getCurrentTime(),
				ox9o = 0;
			for (var i = 0; i < yy2x.length; i++) {
				if (bA4E > yy2x.start(i) && bA4E < yy2x.end(i)) {
					ox9o = yy2x.end(i);
					break
				}
			}
			m4q.total = this.cP5U.duration;
			m4q.loaded = Math.min(ox9o, m4q.total)
		}
		this.qn0x("progress", m4q)
	};
	b3x.JL6F = function() {
		if (this.cP5U.retry) {
			clearTimeout(this.cP5U.retry.tid);
			this.cP5U.retry = null
		}
	};
	b3x.dO5T = function() {
		var ca4e = this.dW5b.getError();
		hc7V.cc4g("media error code: {0}, netState: {1}", ca4e.code, this.dW5b.getNetworkState());
		if (ca4e.code == MediaError.MEDIA_ERR_NETWORK || ca4e.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
			var Gj5o = l4p.bmr7k();
			if (!this.cP5U.retry) {
				this.cP5U.retry = {
					level: RetryLevel.NONE
				}
			} else {
				window.clearTimeout(this.cP5U.retry.tid)
			}
			if (this.cP5U.retry.level == RetryLevel.NONE) {
				if (this.bFz2x()) {
					this.cP5U.retry.level = RetryLevel.GET_URL;
					this.bFA2x();
					hc7V.pG0x("Url expired, get url.")
				} else {
					this.cP5U.retry.level = RetryLevel.RELOAD;
					this.cP5U.retry.tid = setTimeout(this.Pd0x.f4j(this), 3e3);
					hc7V.pG0x("Reload mp3 3s later.")
				}
			} else if (this.cP5U.retry.level == RetryLevel.GET_URL) {
				this.cP5U.retry.level = RetryLevel.RELOAD;
				this.cP5U.retry.tid = setTimeout(this.Pd0x.f4j(this), 3e3);
				hc7V.pG0x("Reload mp3 3s later.")
			} else if (this.cP5U.retry.level == RetryLevel.RELOAD) {
				this.cP5U.retry.level = RetryLevel.SWITCH_CDN;
				if (this.bGq2x()) {
					this.cP5U.retry.tid = setTimeout(this.cuS4W.f4j(this), 5e3);
					hc7V.pG0x("Switch CDN 5s later.")
				} else {
					this.cP5U.retry.tid = setTimeout(this.Pd0x.f4j(this), 5e3);
					hc7V.pG0x("Reload mp3 5s later.")
				}
			} else if (!bFj2x && this.dW5b.type == "audio" && !Gj5o.useFlash && !dy5D.Ik5p.mac && l4p.bpk8c().supported) {
				Gj5o.useFlash = true;
				l4p.Gi5n(Gj5o);
				this.cuV4Z("flash")
			} else {
				this.JL6F();
				this.fD6x();
				this.cP5U.error = ErrorType.NET_ERR;
				this.qn0x("error", {
					code: this.cP5U.error
				});
				hc7V.cc4g("error can not retry.")
			}
		} else {
			this.JL6F();
			this.fD6x();
			this.cP5U.error = ErrorType.UNKNOWN_ERR;
			this.qn0x("error", {
				code: this.cP5U.error
			});
			hc7V.cc4g("error can not retry.")
		}
	};
	b3x.bpP8H = function() {
		var hV7O = 0,
			bGv2x = 5e3;
		return function() {
			this.yB2x();
			clearTimeout(hV7O);
			setTimeout(function() {
				var eS6M = +(new Date);
				if (this.cP5U.waiting && eS6M - this.cP5U.waitTimestamp >= bGv2x && this.cP5U.stalledRetryCount < MAX_STALLED_RETRY) {
					hc7V.pG0x("stalled too long retry.");
					this.cP5U.stalledRetryCount++;
					this.Pd0x()
				}
			}.f4j(this), bGv2x);
			hc7V.pG0x("stalled")
		}
	}();
	b3x.bFz2x = function() {
		var eS6M = +(new Date);
		return eS6M > this.cP5U.expireTime
	};
	b3x.cuX4b = function() {
		var bA4E = parseInt(this.cP5U.time) || 0;
		this.dW5b.setSrc(this.cP5U.playUrl + "#t=" + bA4E);
		this.cP5U.loadState = LoadState.IN_RELOAD;
		this.yB2x();
		hc7V.pG0x("recover from: {0}", bA4E)
	};
	b3x.qn0x = function(V4Z, j4n) {
		h4l.z4D(w4A.fS6M, "playaction", {
			action: V4Z,
			data: j4n || {}
		})
	};
	I4M.fK6E.A4E({
		element: w4A.fS6M,
		event: ["playaction"]
	})
})();
(function() {
	if (!(window == top)) {
		return
	}
	var c3x = NEJ.P,
		h4l = c3x("nej.v"),
		I4M = c3x("nej.ut"),
		w4A = c3x("nm.w"),
		b3x;
	w4A.Hd5i = NEJ.C();
	b3x = w4A.Hd5i.N4R(w4A.fS6M);
	L4P = w4A.Hd5i.cs5x;
	b3x.cw5B = function() {
		this.cE5J()
	};
	b3x.cuR4V = function(bP4T) {
		this.bch4l(bP4T);
		this.eq6k()
	};
	b3x.brp8h = function() {
		this.fD6x()
	};
	b3x.wt2x = function(d4h) {
		if (d4h.action == "play") {
			this.fD6x()
		}
	};
	b3x.qn0x = function(V4Z, j4n) {
		h4l.z4D(w4A.Hd5i, "tmpplayaction", {
			action: V4Z,
			data: j4n || {},
			tmp: true
		})
	};
	b3x.tt1x = function() {
		return this.cP5U
	};
	I4M.fK6E.A4E({
		element: w4A.Hd5i,
		event: ["tmpplayaction"]
	})
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		fH6B = c3x("nej.n"),
		v4z = c3x("nej.j"),
		I4M = c3x("nej.ut"),
		bc4g = c3x("nej.ui"),
		w4A = c3x("nm.w"),
		n4r = c3x("nm.l"),
		lc8U = c3x("nm.c"),
		q4u = c3x("nm.d"),
		l4p = c3x("nm.x"),
		b3x, L4P, bcN4R = [{
			item: "m-publish-search-single",
			type: 1
		}, {
			item: "m-publish-search-artist",
			type: 100
		}, {
			item: "m-publish-search-album",
			type: 10
		}, {
			item: "m-publish-search-mv",
			type: 1004
		}, {
			item: "m-publish-search-playlist",
			type: 1e3
		}, {
			item: "m-publish-search-djRadio",
			type: 1009
		}];
	var brS8K = {
		song: 0,
		artist: 1,
		album: 2,
		mv: 3,
		playlist: 4,
		djradio: 5
	};
	w4A.bsf8X = NEJ.C();
	b3x = w4A.bsf8X.N4R(bc4g.el6f);
	b3x.cw5B = function(e4i) {
		this.cE5J(e4i);
		var i4m = a3x.H4L(this.o4s, "j-flag");
		this.cGJ7C = i4m.shift();
		this.cuO4S = i4m.shift();
		this.Jj6d = i4m.shift();
		this.btk9b = i4m.shift();
		this.btC9t = [i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift()];
		this.Xq2x = i4m.shift();
		this.bHg2x = i4m.shift();
		this.so0x = {
			list: this.btC9t,
			selected: "z-curr",
			onchange: this.bHi2x.f4j(this)
		};
		h4l.s4w(this.Jj6d, "input", this.Wg2x.f4j(this));
		h4l.s4w(this.Jj6d, "propertychange", this.Wg2x.f4j(this));
		h4l.s4w(this.Jj6d, "keyup", this.Wg2x.f4j(this));
		h4l.s4w(this.cuO4S, "click", this.Wg2x.f4j(this));
		h4l.s4w(this.Xq2x, "click", this.cM5R.f4j(this));
		h4l.s4w(this.bHg2x, "click", function() {
			this.z4D("oncancel", {})
		}.f4j(this));
		this.S4W = q4u.HB5G.gm6g();
		this.Pp0x = top.nm.w.Hd5i.gm6g();
		I4M.fK6E.A4E({
			element: top.nm.w.Hd5i,
			event: ["tmpplayaction"]
		});
		this.rP0x = {
			limit: 100,
			offset: 0,
			parent: this.Xq2x,
			onbeforelistload: this.qv0x.f4j(this)
		};
		q4u.sk = "fuck" + a3x.t4x(this.btk9b, "xname") + "458";
		h4l.s4w(top.nm.w.Hd5i, "tmpplayaction", this.wt2x.f4j(this))
	};
	b3x.ch4l = function() {
		this.cf4j = "m-xwgt-publish-search"
	};
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		if ( !! this.Bn3x) {
			this.Bn3x.T4X();
			delete this.Bn3x
		}
		this.so0x.index = brS8K[e4i.type || "song"];
		this.Bn3x = I4M.FZ5e.A4E(this.so0x);
		this.Jj6d.value = "";
		this.Jj6d.focus();
		this.uN1x = "";
		this.cGK7D = 0;
		if (e4i.showMV == true) {
			this.btC9t[brS8K["mv"]].parentNode.style.display = "";
			a3x.y4C(this.btk9b, "srchtab-1")
		} else {
			this.btC9t[brS8K["mv"]].parentNode.style.display = "none";
			a3x.x4B(this.btk9b, "srchtab-1")
		}
		if ( !! this.dK5P) {
			this.dK5P = this.dK5P.T4X()
		}
		if (e4i.hideBack) {
			a3x.y4C(this.bHg2x.parentNode, "f-hide")
		}
	};
	b3x.bC4G = function() {
		this.Pp0x.brp8h();
		this.bF4J()
	};
	b3x.Wg2x = function() {
		var value = this.Jj6d.value.trim();
		if (value && value.length) {
			if (value != this.uN1x) {
				this.uN1x = value;
				this.bHi2x({
					index: this.Bn3x.tm1x()
				})
			}
		} else {
			if (this.dK5P) {
				this.dK5P = this.dK5P.T4X()
			}
		}
		this.uN1x = value
	};
	b3x.cM5R = function() {
		var cuM4Q = function(F4J) {
				return a3x.bE4I(F4J, "sitm") || a3x.bE4I(F4J, "itm") || a3x.bE4I(F4J, "mv-item")
			},
			cuL4P = function(F4J) {
				return a3x.bE4I(F4J, "ply")
			},
			bHz2x = function() {
				n4r.Z4d.J4N({
					type: 2,
					tip: "因合作方要求，该资源需付费使用"
				})
			},
			cuK4O = function() {
				n4r.Z4d.J4N({
					type: 2,
					tip: "因合作方要求，该资源需下载后播放"
				})
			},
			buk9b = function(bj4n) {
				if (bj4n && bj4n.privilege && bj4n.privilege.toast) {
					v4z.bm4q("/api/song/toast", {
						query: {
							id: bj4n.id
						},
						type: "json",
						onload: QH0x.f4j(this),
						onerror: QH0x.f4j(this)
					})
				} else {
					QI0x()
				}
			},
			QH0x = function(Q4U) {
				QI0x((Q4U || bb4f).toast)
			},
			QI0x = function(bG4K) {
				n4r.Z4d.J4N({
					type: 2,
					tip: bG4K || "因合作方要求，该资源暂时下架>_<"
				})
			};
		return function(d4h) {
			var Hy5D = h4l.X4b(d4h, cuL4P),
				i4m = h4l.X4b(d4h, cuM4Q),
				ex6r = this.Pp0x.tt1x();
			if ( !! i4m) {
				h4l.bg4k(d4h);
				this.OS0x = a3x.t4x(i4m, "id");
				this.OO0x = a3x.t4x(i4m, "type");
				if (this.OO0x == 18) {
					var bP4T = this.S4W.eJ6D(this.OS0x),
						qz0x = l4p.qq0x(bP4T);
					if (!Hy5D) {
						if (qz0x == 10) {
							bHz2x();
							return
						} else if (qz0x == 100) {
							buk9b(bP4T);
							return
						}
					} else {
						if (qz0x == 10) {
							bHz2x();
							return
						} else if (qz0x == 100) {
							buk9b(bP4T);
							return
						} else if (qz0x == 11) {
							cuK4O();
							return
						} else {
							a3x.x4B(this.Bl3x, "z-pause z-loading");
							if (Hy5D == this.Bl3x && ex6r.play && !ex6r.ended) {
								this.Pp0x.brp8h()
							} else {
								this.Bl3x = Hy5D;
								this.Pp0x.cuR4V(bP4T)
							}
							return
						}
					}
				} else if (this.OO0x == 70) {
					if (a3x.bE4I(i4m, "z-noprogram")) {
						n4r.Z4d.J4N({
							type: 2,
							tip: "不能分享没有节目的电台"
						});
						return
					}
				}
				this.cuH4L()
			}
		}
	}();
	b3x.cuH4L = function() {
		var hZ7S = this.S4W.eJ6D(this.OS0x),
			th1x = l4p.bMg4k(this.OO0x, hZ7S);
		th1x.title = th1x.title || "";
		th1x.author = th1x.author || "";
		th1x.picUrl = th1x.picUrl || "";
		th1x.authors = th1x.authors || "";
		if (this.OO0x == 70) {
			this.OS0x = this.OS0x.slice(0, -4)
		}
		this.z4D("onfinish", {
			id: this.OS0x,
			type: this.OO0x,
			data: th1x
		})
	};
	b3x.wt2x = function(d4h) {
		var j4n = d4h.data;
		if (!this.Bl3x) {
			return
		}
		switch (d4h.action) {
		case "play":
			a3x.fj6d(this.Bl3x, "z-pause z-play", "z-loading");
			break;
		case "pause":
		case "ended":
			a3x.x4B(this.Bl3x, "z-pause z-loading");
			break;
		case "error":
			n4r.Z4d.J4N({
				type: 2,
				tip: "试听遇到问题，播放失败"
			});
			a3x.x4B(this.Bl3x, "z-pause z-loading");
			break;
		case "playing":
			a3x.fj6d(this.Bl3x, "z-loading", "z-pause");
			break;
		case "waiting":
			a3x.fj6d(this.Bl3x, "z-pause", "z-loading");
			break
		}
	};
	b3x.cuF4J = function(d4h) {
		if (d4h.result.code == 407) {
			this.Xq2x.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
			return
		}
		this.Xq2x.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
	};
	b3x.bHi2x = function(d4h) {
		if (!this.uN1x || d4h.index < 0 || d4h.index > 5) {
			return
		}
		this.Pp0x.brp8h();
		var bh4l = bcN4R[d4h.index],
			e4i = NEJ.X({}, this.rP0x);
		e4i.cache = {
			klass: q4u.HB5G,
			clear: true,
			onerror: this.cuF4J.f4j(this)
		};
		e4i.cache.lkey = "search-publish-" + bh4l.type + "-" + this.uN1x;
		e4i.item = {
			klass: bh4l.item,
			getRestrictLevel: l4p.qq0x,
			dur2time: l4p.lj8b
		};
		if (!e4i.cache.data) {
			e4i.cache.data = {}
		}
		e4i.cache.data.s = this.uN1x;
		e4i.cache.data.type = bh4l.type;
		e4i.cache.data.isPub = true;
		if (bh4l.type == 1) {
			e4i.cache.data.hlpretag = '<span class="s-fc7">';
			e4i.cache.data.hlposttag = "</span>"
		}
		e4i.onemptylist = this.cuE4I.f4j(this, this.uN1x);
		if ( !! this.HF5K) this.S4W.vw1x(this.HF5K);
		if ( !! this.dK5P) {
			this.dK5P = this.dK5P.T4X()
		}
		this.dK5P = I4M.nD9u.A4E(e4i);
		this.HF5K = e4i.cache.lkey
	};
	b3x.qv0x = function(d4h) {
		d4h.value = a3x.iH7A("m-publish-search-loading")
	};
	b3x.cuE4I = function(K4O, d4h) {
		a3x.dA5F(d4h.parent, "m-publish-emtpy-message", {
			key: K4O
		});
		d4h.stopped = true
	}
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		dy5D = c3x("nej.p"),
		v4z = c3x("nej.j"),
		cb4f = c3x("nej.ut"),
		bD4H = c3x("nej.ui"),
		w4A = c3x("nm.w"),
		b3x, L4P;
	var cuC4G = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
	w4A.HG5L = NEJ.C();
	b3x = w4A.HG5L.N4R(bD4H.el6f);
	var ge6Y = a3x.eB6v("m-wgt-receiverInput");
	var cuq4u = a3x.eB6v("m-wgt-receiverList");
	var iX7Q = a3x.to1x(cuC4G);
	var cun4r = a3x.eB6v('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
	b3x.cw5B = function(e4i) {
		this.bk4o = [];
		this.xw2x = e4i.receiver || null;
		this.cul4p = e4i.unique || false;
		this.nz9q = e4i.err;
		this.bJb3x(this.bJc3x, e4i.uid);
		this.cE5J(e4i)
	};
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.Nf7Y();
		this.Nd7W();
		this.WV2x();
		if (e4i.receiver) this.bwd0x(e4i.receiver.nickname, e4i.receiver.userId);
		a3x.ba4e(this.AQ3x, "display", "block");
		a3x.ba4e(this.bwl0x, "cursor", "text");
		a3x.ba4e(this.AQ3x, "cursor", "text")
	};
	b3x.ch4l = function() {
		var j4n = this.bJw3x();
		this.cf4j = a3x.jm8e(a3x.cd4h(ge6Y, {
			receiver: this.xw2x,
			users: j4n
		}));
		this.mj8b = iX7Q
	};
	b3x.bW4a = function() {
		this.ci4m();
		var bS4W = a3x.H4L(this.o4s, "j-flag");
		var hu7n = a3x.H4L(this.o4s, "j-item");
		this.bwl0x = bS4W[0];
		this.bJz3x = bS4W[1];
		this.ef6Z = bS4W[2];
		this.AQ3x = bS4W[3];
		this.ZN3x = bS4W[4];
		this.bxe0x = bS4W[5];
		this.fQ6K = hu7n;
		a3x.y4C(this.fQ6K[0], "j-selected");
		h4l.s4w(this.ef6Z, "keyup", this.bxp0x.f4j(this));
		h4l.s4w(this.ef6Z, "keydown", this.QB0x.f4j(this));
		h4l.s4w(this.ef6Z, "focus", this.lr8j.f4j(this));
		h4l.s4w(this.ZN3x, "click", this.cuk4o.f4j(this));
		h4l.s4w(this.bwl0x, "click", this.cuj4n.f4j(this));
		h4l.s4w(document.body, "click", this.oK9B.f4j(this));
		h4l.s4w(this.ef6Z, "input", this.fW6Q.f4j(this));
		h4l.s4w(this.ef6Z, "blur", this.nT9K.f4j(this))
	};
	b3x.bC4G = function(e4i) {
		h4l.mo8g(document.body, "click", this.oK9B.f4j(this));
		this.bF4J();
		this.WV2x();
		this.cug3x();
		this.oK9B()
	};
	b3x.bxp0x = function(d4h) {
		h4l.bg4k(d4h);
		var jX8P = d4h.keyCode || d4h.which;
		var bo4s = this.ef6Z.value;
		var bq4u = this.fQ6K.length;
		var sD0x = a3x.H4L(this.o4s, "j-selected")[0];
		switch (jX8P) {
		case 13:
			var lg8Y = a3x.gJ7C(sD0x, "data-username");
			var ip7i = a3x.gJ7C(sD0x, "data-userId");
			this.bwd0x(lg8Y, ip7i);
			this.oK9B();
			this.ef6Z.value = "";
			break;
		case 38:
			var r4v = a3x.gJ7C(sD0x, "data-index") - 1 < 0 ? bq4u - 1 : a3x.gJ7C(sD0x, "data-index") - 1;
			a3x.x4B(sD0x, "j-selected");
			a3x.y4C(this.fQ6K[r4v], "j-selected");
			break;
		case 40:
			var r4v = parseInt(a3x.gJ7C(sD0x, "data-index")) + 1 >= bq4u ? 0 : parseInt(a3x.gJ7C(sD0x, "data-index")) + 1;
			a3x.x4B(sD0x, "j-selected");
			a3x.y4C(this.fQ6K[r4v], "j-selected");
			break;
		default:
			this.xH2x()
		}
	};
	b3x.QB0x = function(d4h) {
		var jX8P = d4h.keyCode || d4h.which;
		var bo4s = this.ef6Z.value;
		var r4v = a3x.H4L(this.o4s, "j-receiver").length - 1;
		if (jX8P === 8 && bo4s === "") this.cuf3x(r4v)
	};
	b3x.fW6Q = function(d4h) {
		var bo4s = this.ef6Z.value;
		if (bo4s.length > 10) {
			this.ef6Z.value = bo4s.substring(0, 10);
			return
		}
		dy5D.dr5w.browser == "ie" && dy5D.dr5w.version < "7.0" ? setTimeout(this.bxU0x.f4j(this), 0) : this.bxU0x();
		this.Nd7W()
	};
	b3x.lr8j = function() {
		if (this.bk4o[0]) this.xH2x();
		else this.bJb3x(this.cuc3x);
		a3x.ba4e(this.AQ3x, "display", "none")
	};
	b3x.nT9K = function() {
		var bq4u = a3x.H4L(this.o4s, "j-receiver").length;
		if (this.ef6Z.value.trim() == "" && bq4u <= 0) a3x.ba4e(this.AQ3x, "display", "block")
	};
	b3x.bwd0x = function(lg8Y, ip7i) {
		var KD6x = this.Ve1x();
		if (KD6x.length >= 10) {
			this.dY6S();
			return
		}
		var bc4g;
		for (bc4g = 0; bc4g < KD6x.length; bc4g++) {
			if (KD6x[bc4g] == ip7i) {
				this.oK9B();
				return
			}
		}
		if (!lg8Y || !ip7i) return;
		var g4k = a3x.dD5I(a3x.jm8e(a3x.cd4h(cun4r, {
			username: lg8Y,
			userId: ip7i
		})));
		var bI4M = this.bJz3x.parentNode;
		if (this.cul4p) {
			this.WV2x()
		}
		bI4M.insertBefore(g4k, this.bJz3x);
		this.ef6Z.value = "";
		var bq4u = a3x.H4L(this.o4s, "j-receiver").length;
		if (bq4u > 1) a3x.ba4e(this.AQ3x, "display", "none");
		this.bxU0x();
		this.Nd7W()
	};
	b3x.WV2x = function() {
		var Ul1x = a3x.H4L(this.o4s, "j-receiver");
		var bc4g;
		if (Ul1x.length > 0) {
			for (bc4g = 0; bc4g < Ul1x.length; bc4g++) {
				a3x.cL5Q(Ul1x[bc4g], false)
			}
		}
	};
	b3x.cug3x = function() {
		this.ef6Z.value = ""
	};
	b3x.cuf3x = function(r4v) {
		this.dY6S(!0);
		var Ul1x = a3x.H4L(this.o4s, "j-receiver");
		a3x.cL5Q(Ul1x[r4v], false);
		this.Nd7W()
	};
	b3x.xH2x = function() {
		var bo4s = this.ef6Z.value;
		var bv4z = bo4s.trim().toLowerCase();
		var j4n;
		bv4z = bv4z.replace(/\[/g, "\\[");
		bv4z = bv4z.replace(/\]/g, "\\]");
		j4n = this.bJw3x(bv4z);
		this.cub3x(j4n)
	};
	b3x.oK9B = function(d4h) {
		a3x.ba4e(this.ZN3x, "display", "none")
	};
	b3x.dY6S = function(dM5R) {
		if (dM5R && this.nz9q) {
			a3x.ba4e(this.nz9q, "display", "none");
			return
		}
		if (this.nz9q) a3x.ba4e(this.nz9q, "display", "block")
	};
	b3x.cuk4o = function(d4h) {
		h4l.cn4r(d4h);
		var bO4S = d4h.target || d4h.srcElement;
		if (a3x.bE4I(bO4S, "j-flag")) return;
		var bI4M = bO4S.nodeName.toLowerCase() == "a" ? bO4S.parentNode : bO4S.parentNode.parentNode;
		var lg8Y = a3x.gJ7C(bI4M, "data-username");
		var ip7i = a3x.gJ7C(bI4M, "data-userId");
		this.bwd0x(lg8Y, ip7i);
		this.oK9B();
		a3x.ba4e(this.AQ3x, "display", "none")
	};
	b3x.cuj4n = function(d4h) {
		h4l.bg4k(d4h);
		var bO4S = d4h.target || d4h.srcElement;
		if (a3x.bE4I(bO4S.parentNode, "j-receiver")) {
			a3x.cL5Q(bO4S.parentNode, false);
			this.dY6S(!0);
			this.Nd7W()
		} else this.ef6Z.focus()
	};
	b3x.bxU0x = function() {
		this.bxe0x.innerHTML = this.ef6Z.value;
		var cC5H = this.bxe0x.offsetWidth + 2;
		a3x.ba4e(this.ef6Z, "width", cC5H + "px")
	};
	b3x.Nd7W = function() {
		var Xv2x = a3x.hU7N(this.ef6Z, this.o4s).y;
		var bLc3x = Math.floor((Xv2x - 8) / 27);
		if (bLc3x < 0) return;
		a3x.ba4e(this.bwl0x, "height", 19 + bLc3x * 29 + "px")
	};
	b3x.Nf7Y = function() {
		var pC0x = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
		for (var i = 0; i < pC0x.length; i++) {
			a3x.ba4e(this.bxe0x, pC0x[i], a3x.dh5m(this.ef6Z, pC0x[i]))
		}
	};
	b3x.bJb3x = function(cA5F, C4G) {
		var do5t = C4G ? C4G : window.GUser.userId;
		var Y4c = "/api/user/getfollows/" + do5t;
		var gl6f = v4z.bm4q(Y4c, {
			sync: false,
			method: "get",
			query: "offset = 0&limit=1000&order=true",
			onload: cA5F.f4j(this),
			onerror: function(j4n) {
				this.bk4o = []
			},
			onbeforerequest: function(j4n) {}
		})
	};
	b3x.bJc3x = function(j4n) {
		this.bk4o = JSON.parse(j4n).follow || [];
		var C4G = GUser.userId;
		for (var i = 0; i < this.bk4o.length; i++) {
			if (this.bk4o[i].userId == C4G) {
				this.bk4o.splice(i, 1);
				continue
			}
			this.bk4o[i].avatarUrl = this.bk4o[i].avatarUrl + "?param=30y30"
		}
	};
	b3x.cuc3x = function(j4n) {
		if (this.bk4o[0]) return;
		this.bJc3x(j4n);
		this.xH2x()
	};
	b3x.bJw3x = function(bv4z) {
		var bv4z = bv4z ? bv4z : "";
		this.bk4o = this.bk4o[0] ? this.bk4o : [];
		var bq4u = this.bk4o.length;
		var NF9w = this.Ve1x();
		var sZ1x = [];
		var Rg0x, Uu1x, bxW0x;
		if (!this.bk4o[0]) return sZ1x;
		for (var bc4g = 0; bc4g < bq4u; bc4g++) {
			bxW0x = false;
			for (var v4z = 0; v4z < NF9w.length; v4z++) {
				if (this.bk4o[bc4g].userId == NF9w[v4z]) {
					bxW0x = true;
					break
				}
			}
			if (bxW0x) continue;
			Rg0x = this.bk4o[bc4g].nickname.toLowerCase().search(bv4z);
			Uu1x = this.bk4o[bc4g].py ? this.bk4o[bc4g].py.toLowerCase().search(bv4z) : -1;
			if (Rg0x !== -1 || Uu1x != -1) sZ1x.push(this.bk4o[bc4g])
		}
		return sZ1x
	};
	b3x.cub3x = function(j4n) {
		a3x.dA5F(this.ZN3x, cuq4u, {
			users: j4n
		});
		a3x.y4C(a3x.H4L(this.o4s, "j-item")[0], "j-selected");
		this.fQ6K = a3x.H4L(this.o4s, "j-item");
		a3x.ba4e(this.ZN3x, "display", "block")
	};
	b3x.Ve1x = function() {
		var sZ1x = a3x.H4L(this.o4s, "j-receiver") || [];
		var ip7i = [];
		for (var i = 0; i < sZ1x.length; i++) {
			ip7i.push(a3x.gJ7C(sZ1x[i], "data-id"))
		}
		return ip7i
	};
	b3x.cGN7G = function() {
		var ip7i = this.Ve1x();
		var sZ1x = [];
		for (var i = 0; i < ip7i.length; i++) {
			for (var j = 0; j < this.bk4o.length; j++) {
				if (ip7i[i] == this.bk4o[j].userId) sZ1x.push(this.bk4o[j])
			}
		}
		return sZ1x
	};
	b3x.ctZ3x = function() {
		this.WV2x()
	};
	w4A.HG5L.J4N = function(e4i) {
		if (!GUser || !GUser.userId || GUser.userId <= 0) {
			n4r.oL9C.J4N({
				title: "登录"
			});
			return
		}
		e4i = e4i || {};
		if (e4i.parent === undefined) e4i.parent = document.body; !! this.fg6a && this.fg6a.T4X();
		this.fg6a = this.A4E(e4i)
	};
	w4A.HG5L.bt4x = function() { !! this.fg6a && this.fg6a.T4X()
	};
	w4A.HG5L.Ic5h = function() {
		return this.oK9B()
	};
	w4A.HG5L.cGO7H = function() {
		return this.xH2x()
	}
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		k4o = c3x("nej.u"),
		h4l = c3x("nej.v"),
		l4p = c3x("nm.x"),
		n4r = c3x("nm.l"),
		b3x, L4P;
	n4r.Ii5n = NEJ.C();
	b3x = n4r.Ii5n.N4R(n4r.bna7T);
	L4P = n4r.Ii5n.cs5x;
	b3x.bl4p = function() {
		var Ib5g;
		var ctV3x = function(D4H, K4O) {
				Ib5g = Ib5g || [];
				if (K4O != "18") Ib5g.push({
					key: K4O,
					value: D4H
				})
			};
		return function(e4i) {
			this.bn4r(e4i);
			if (e4i.upwards) {
				a3x.y4C(this.o4s, "m-emts-up")
			} else {
				a3x.x4B(this.o4s, "m-emts-up")
			}
			if (e4i.rightwards) {
				a3x.y4C(this.o4s, "m-emts-right")
			} else {
				a3x.x4B(this.o4s, "m-emts-right")
			}
			if (!Ib5g) {
				var bz4D = l4p.cBa5f();
				k4o.eI6C(bz4D, ctV3x)
			}
			var bq4u = Ib5g.length;
			Ib5g.splice(bq4u - 2, 0, {
				key: "18",
				value: "186"
			});
			this.Yh2x = Ib5g;
			this.ctS3x = !! e4i.autoHide
		}
	}();
	b3x.ch4l = function() {
		this.cf4j = "ntp-portrait"
	};
	b3x.bW4a = function() {
		this.ci4m();
		var i4m = a3x.H4L(this.o4s, "j-flag");
		this.bK4O = i4m[0];
		this.ctQ3x = i4m[1];
		this.ctP3x = i4m[2];
		this.ctM3x = i4m[3];
		h4l.s4w(this.bK4O, "click", this.yk2x.f4j(this));
		h4l.s4w(this.ctQ3x, "click", this.HZ5e.f4j(this, 1));
		h4l.s4w(this.ctM3x, "click", this.HZ5e.f4j(this, 2))
	};
	b3x.bxM0x = function(r4v) {
		this.ber5w = r4v;
		var bi4m = (r4v - 1) * 50;
		var i4m = this.Yh2x.slice(bi4m, Math.min(bi4m + 50, this.Yh2x.length));
		this.bK4O.innerHTML = a3x.cd4h("jst-portrait", {
			plist: i4m
		}, {
			purl: l4p.bDg1x
		});
		this.ctP3x.innerText = r4v + "/" + Math.ceil(this.Yh2x.length / 50)
	};
	b3x.HZ5e = function(r4v) {
		var ctL3x = Math.ceil(this.Yh2x.length / 50);
		if (r4v == 1 && this.ber5w == 1 || r4v == 2 && this.ber5w == ctL3x) return;
		r4v == 1 ? this.bxM0x(this.ber5w - 1) : this.bxM0x(this.ber5w + 1)
	};
	b3x.yk2x = function(d4h) {
		var F4J = h4l.X4b(d4h, "d:text");
		if (!F4J) return;
		var d4h = {
			url: a3x.t4x(F4J, "url"),
			text: a3x.t4x(F4J, "text")
		};
		this.z4D("onselect", d4h);
		if (this.ctS3x && !d4h.stopped) {
			this.bt4x()
		}
	};
	b3x.J4N = function() {
		L4P.J4N.call(this);
		this.bxM0x(1)
	}
})();
(function() {
	var c3x = NEJ.P,
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		dy5D = c3x("nej.p"),
		be4i = c3x("nej.h"),
		I4M = c3x("nej.ut"),
		kn8f = /^[#?]+/,
		Ev4z = /#(.*?)$/,
		yl2x = window,
		bxL0x = !history.pushState || dy5D.Ik5p.android || !history.auto;
	var Xb2x = function(Y4c, bxK0x) {
			yl2x.history[!bxK0x ? "pushState" : "replaceState"](null, document.title, Y4c)
		};
	var Xx2x = function() {
			return location.parse(yl2x.location.href)
		};
	Xb2x = Xb2x.eH6B(function(d4h) {
		if (!bxL0x) return;
		var bf4j = d4h.args;
		d4h.stopped = !0;
		Y4c = bf4j[0].replace(kn8f, "");
		!bf4j[1] ? yl2x.location.hash = Y4c : yl2x.location.replace("#" + Y4c)
	});
	Xx2x = Xx2x.eH6B(function(d4h) {
		if (!bxL0x) return;
		d4h.stopped = !0;
		var dR5W = Ev4z.test(yl2x.location.href) ? RegExp.$1 : "";
		d4h.value = location.parse(dR5W.replace(kn8f, ""))
	});
	location.redirect = function(Y4c, bxK0x) {
		Xb2x(Y4c, bxK0x);
		return this
	};
	location.active = function() {
		var eg6a, Y4c, jL8D, db5g, UP1x;
		var bxJ0x = function(hs7l) {
				if ( !! db5g) {
					db5g = !1;
					return
				}
				var d4h = {
					oldValue: jL8D,
					newValue: Xx2x()
				};
				if ( !! location.ignored) {
					location.ignored = !1
				} else {
					h4l.z4D(location, "beforeurlchange", d4h);
					if (d4h.stopped) {
						if ( !! jL8D) {
							db5g = !0;
							Xb2x(jL8D.href, !0)
						}
						return
					}
				}
				Y4c = yl2x.location.href;
				jL8D = d4h.newValue;
				h4l.z4D(location, "urlchange", jL8D);
				be4i.buy9p(jL8D.href)
			};
		var bNB4F = function() {
				if (Y4c != yl2x.location.href) bxJ0x();
				eg6a = requestAnimationFrame(bNB4F)
			};
		return function(bL4P) {
			if ( !! UP1x) return this;
			UP1x = !0;
			yl2x = bL4P || window;
			if (bxL0x && "onhashchange" in window && dy5D.nB9s.trident2) {
				h4l.s4w(yl2x, "hashchange", bxJ0x);
				bxJ0x()
			} else if (!eg6a) {
				eg6a = requestAnimationFrame(bNB4F)
			}
			return this
		}
	}();
	location.parse = function() {
		var gL7E = /^https?:\/\/.*?\//i,
			kn8f = /[?#]/;
		return function(Y4c) {
			var m4q = {
				href: Y4c
			};
			Y4c = (Y4c || "").replace(gL7E, "/").split(kn8f);
			var cz5E = 1;
			if (Y4c[0] == "/" && (Y4c[1] || "").indexOf("/") == 0) cz5E = 2;
			m4q.path = Y4c.splice(0, cz5E).join("?");
			m4q.query = k4o.hq7j(Y4c.join("&"));
			return m4q
		}
	}();
	location.same = function(Y4c) {
		return Xx2x().href == Y4c
	};
	I4M.fK6E.A4E({
		element: location,
		event: ["beforeurlchange", "urlchange"]
	})
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		gv6p = c3x("nm.ut");
	gv6p.uz1x = function(eu6o) {
		var hk7d = {
			text: "",
			start: 0,
			end: 0
		};
		if (eu6o.setSelectionRange) {
			hk7d.start = eu6o.selectionStart;
			hk7d.end = eu6o.selectionEnd;
			hk7d.text = hk7d.start != hk7d.end ? eu6o.value.substring(hk7d.start, hk7d.end) : ""
		} else if (document.selection) {
			var i, Zm3x = document.selection.createRange(),
				yw2x = document.body.createTextRange();
			yw2x.moveToElementText(eu6o);
			hk7d.text = Zm3x.text;
			hk7d.bookmark = Zm3x.getBookmark();
			for (i = 0; yw2x.compareEndPoints("StartToStart", Zm3x) < 0 && Zm3x.moveStart("character", -1) !== 0; i++) {
				if (eu6o.value.charAt(i) == "\n") {
					i++
				}
			}
			hk7d.start = i;
			hk7d.end = hk7d.text.length + hk7d.start
		}
		return hk7d
	};
	gv6p.ZP3x = function(eu6o, hk7d) {
		var yw2x;
		if (!hk7d) {
			hk7d = {
				text: "",
				start: 0,
				end: 0
			}
		}
		eu6o.focus();
		if (eu6o.setSelectionRange) {
			eu6o.setSelectionRange(hk7d.start, hk7d.end)
		} else if (eu6o.createTextRange) {
			yw2x = eu6o.createTextRange();
			if (eu6o.value.length === hk7d.start) {
				yw2x.collapse(false);
				yw2x.select()
			} else {
				yw2x.moveToBookmark(hk7d.bookmark);
				yw2x.select()
			}
		}
	};
	gv6p.Il5q = function(eu6o, hk7d, cK5P) {
		var hk7d = hk7d || {
			text: "",
			start: 0,
			end: 0
		};
		var bxH0x, bOh4l, yw2x, Uw1x, bOk4o, bOn4r, HX5c;
		this.ZP3x(eu6o, hk7d);
		if (eu6o.setSelectionRange) {
			bxH0x = eu6o.value;
			bOh4l = bxH0x.substring(0, hk7d.start) + cK5P + bxH0x.substring(hk7d.end);
			bOk4o = bOn4r = hk7d.start + cK5P.length;
			HX5c = eu6o.scrollTop;
			eu6o.value = bOh4l;
			if (eu6o.scrollTop != HX5c) {
				eu6o.scrollTop = HX5c
			}
			eu6o.setSelectionRange(bOk4o, bOn4r)
		} else if (eu6o.createTextRange) {
			Uw1x = document.selection.createRange();
			Uw1x.text = cK5P;
			Uw1x.setEndPoint("StartToEnd", Uw1x);
			Uw1x.select()
		}
		h4l.z4D(eu6o, "keyup")
	}
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		dy5D = c3x("nej.p"),
		k4o = c3x("nej.u"),
		cb4f = c3x("nej.ut"),
		w4A = c3x("nm.w"),
		gv6p = c3x("nm.ut"),
		b3x;
	w4A.bOt4x = NEJ.C();
	b3x = w4A.bOt4x.N4R(cb4f.cJ5O);
	b3x.cw5B = function(e4i) {
		this.cE5J(e4i)
	};
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.gn6h = e4i.txt;
		this.HW5b = e4i.sgtsContainer;
		this.bOB4F = e4i.sgtsList[0];
		this.bcI4M = e4i.sgtsItem;
		this.oN9E = e4i.rangeData;
		this.In5s = e4i.atIndex;
		a3x.y4C(this.bcI4M[0], "selected-item");
		this.Vp1x()
	};
	b3x.bC4G = function() {
		this.bF4J();
		h4l.mo8g(document.body, "keyup", this.bPj4n.f4j(this));
		h4l.mo8g(document.body, "click", this.bPl4p.f4j(this))
	};
	b3x.Vp1x = function() {
		this.bX4b([
			[document.body, "keyup", this.bPj4n.f4j(this)],
			[document.body, "click", this.bPl4p.f4j(this)],
			[this.gn6h, "keydown", this.bPm4q.f4j(this)],
			[this.gn6h, "keypress", this.bPm4q.f4j(this)],
			[this.bOB4F, "click", this.bPn4r.f4j(this)],
			[this.bOB4F, "mouseover", this.HV5a.f4j(this)]
		])
	};
	b3x.HV5a = function(d4h) {
		var bO4S = h4l.X4b(d4h);
		var p4t = a3x.H4L(this.HW5b, "selected-item");
		if (a3x.bE4I(bO4S, "j-sgt")) {
			a3x.x4B(p4t[0], "selected-item");
			a3x.y4C(bO4S, "selected-item")
		}
	};
	b3x.bPj4n = function(d4h) {
		var p4t = a3x.H4L(this.HW5b, "selected-item");
		var bq4u = this.bcI4M.length;
		var jX8P = d4h.keyCode || d4h.which;
		var r4v, j4n;
		switch (jX8P) {
		case 38:
			r4v = a3x.gJ7C(p4t[0], "data-index") - 1 < 0 ? bq4u - 1 : a3x.gJ7C(p4t[0], "data-index") - 1;
			a3x.x4B(p4t[0], "selected-item");
			a3x.y4C(this.bcI4M[r4v], "selected-item");
			break;
		case 40:
			r4v = parseInt(a3x.gJ7C(p4t[0], "data-index")) + 1 >= bq4u ? 0 : parseInt(a3x.gJ7C(p4t[0], "data-index")) + 1;
			a3x.x4B(p4t[0], "selected-item");
			a3x.y4C(this.bcI4M[r4v], "selected-item");
			break;
		case 13:
			this.bPn4r(d4h);
			break;
		case 27:
			this.oK9B();
			break;
		case 32:
			var bo4s = this.gn6h.value;
			var r4v = gv6p.uz1x(this.gn6h);
			if (bo4s.charAt(r4v.start - 1) !== " ") return;
			this.oK9B();
			break
		}
	};
	b3x.bPm4q = function(d4h) {
		var jX8P = d4h.keyCode || d4h.which;
		if (jX8P === 13 || jX8P === 38 || jX8P === 40) {
			h4l.cn4r(d4h);
			d4h.keyCode = 0;
			d4h.which = 0;
			d4h.returnvalue = false
		}
	};
	b3x.bPl4p = function(d4h) {
		var bO4S = d4h.target || d4h.srcElement;
		if (bO4S === this.gn6h) return;
		this.oK9B()
	};
	b3x.bPn4r = function(d4h) {
		h4l.bg4k(d4h);
		var p4t = a3x.H4L(this.HW5b, "selected-item")[0];
		var sD0x = d4h.target || d4h.srcElement;
		var u4y = d4h.type;
		if (a3x.bE4I(sD0x, "lst")) return;
		if (u4y == "click") {
			a3x.x4B(p4t, "selected-item");
			a3x.y4C(sD0x, "selected-item")
		} else sD0x = p4t;
		var j4n = sD0x.innerHTML + " ";
		this.oK9B();
		var hk7d = this.oN9E;
		hk7d.start = this.In5s + 1;
		if (dy5D.dr5w.browser == "ie" && dy5D.dr5w.version < "9.0") {
			this.gn6h.value = this.gn6h.value.substring(0, hk7d.start) + this.gn6h.value.substring(hk7d.end, this.gn6h.value.length);
			hk7d.end = hk7d.start
		}
		gv6p.Il5q(this.gn6h, hk7d, j4n);
		h4l.z4D(this.gn6h, "keyup")
	};
	b3x.oK9B = function(d4h) {
		if ( !! this.HW5b) a3x.ba4e(this.HW5b, "display", "none");
		this.T4X()
	};
	b3x.xH2x = function(d4h) {
		if ( !! this.HW5b) a3x.ba4e(this.HW5b, "display", "block")
	}
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		v4z = c3x("nej.j"),
		w4A = c3x("nm.w"),
		cb4f = c3x("nej.ut"),
		bD4H = c3x("nej.ui"),
		b3x;
	var ctK3x = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
	var ctJ3x = a3x.eB6v("m-wgt-atlist");
	var iX7Q = a3x.to1x(ctK3x);
	w4A.bPv4z = NEJ.C();
	b3x = w4A.bPv4z.N4R(bD4H.el6f);
	b3x.cw5B = function(e4i) {
		this.fT6N = {};
		this.cE5J()
	};
	b3x.bl4p = function(e4i) {
		this.fT6N.txt = a3x.B4F(e4i.target);
		this.fT6N.data = e4i.data;
		this.fT6N.offset = e4i.offset;
		this.fT6N.rangeData = e4i.rangeData;
		this.fT6N.atIndex = e4i.atIndex;
		this.ctI3x(e4i);
		this.bn4r(e4i);
		this.fT6N.sgtsContainer = this.o4s;
		this.fT6N.sgtsList = a3x.H4L(this.o4s, "lst");
		this.fT6N.sgtsItem = a3x.H4L(this.o4s, "f-thide");
		this.To1x(e4i);
		this.ctF3x = w4A.bOt4x.A4E(this.fT6N)
	};
	b3x.bC4G = function(e4i) {
		this.bF4J();
		this.ctF3x.T4X()
	};
	b3x.ch4l = function() {
		this.mj8b = iX7Q
	};
	b3x.bW4a = function() {
		this.ci4m()
	};
	b3x.ctI3x = function(e4i) {
		this.o4s = a3x.dD5I(a3x.jm8e(a3x.cd4h(ctJ3x, e4i.data)))
	};
	b3x.To1x = function(e4i) {
		var bPy4C = a3x.H4L(this.o4s, "selected-item")[0];
		if (bPy4C) a3x.x4B(bPy4C, "selected-item");
		var cZ5e = e4i.offset.x + "px";
		var hv7o = e4i.offset.y + "px";
		a3x.ba4e(this.o4s, "left", cZ5e);
		a3x.ba4e(this.o4s, "top", hv7o)
	}
})();
(function() {
	var c3x = NEJ.P,
		v4z = c3x("nej.j"),
		gv6p = c3x("nm.ut");
	gv6p.bPC4G = function(bo4s) {
		if (!GUser || !GUser.userId || GUser.userId <= 0) return;
		var df5k = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
		var Ip5u = bo4s.match(df5k) || [];
		for (var bc4g = 0; bc4g < Ip5u.length; bc4g++) {
			Ip5u[bc4g] = Ip5u[bc4g].split("@")[1]
		}
		Ip5u = Ip5u.reverse();
		var ip7i = GUser.userId;
		var ctE3x = v4z.tu1x("mentioners" + ip7i) || [];
		var ka8S = Ip5u.concat(ctE3x);
		if (ka8S.length > 10) ka8S = ka8S.slice(0, 10);
		v4z.vF1x("mentioners" + ip7i, ka8S)
	};
	gv6p.ctD3x = function() {
		if (!GUser || !GUser.userId || GUser.userId <= 0) return;
		var ip7i = GUser.userId;
		return v4z.tu1x("mentioners" + ip7i) || []
	}
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		dy5D = c3x("nej.p"),
		v4z = c3x("nej.j"),
		k4o = c3x("nej.u"),
		cb4f = c3x("nej.ut"),
		w4A = c3x("nm.w"),
		gv6p = c3x("nm.ut"),
		l4p = c3x("nm.x"),
		b3x;
	var FullscreenApi = l4p.FL5Q || {};
	w4A.bPL5Q = NEJ.C();
	b3x = w4A.bPL5Q.N4R(cb4f.cJ5O);
	b3x.cw5B = function(e4i) {
		this.cE5J(e4i);
		this.bPN5S()
	};
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.gn6h = e4i.txt;
		this.o4s = e4i.body;
		this.bPV5a = e4i.before;
		this.Nl7e = e4i.flag;
		this.ctB3x = e4i.after;
		this.qI0x = [];
		if (dy5D.dr5w.browser != "ie") {
			setTimeout(function() {
				this.mc8U()
			}.f4j(this), 0)
		}
		this.Vp1x()
	};
	b3x.bC4G = function() {
		this.bF4J();
		if (this.vf1x) this.vf1x.T4X();
		delete this.vf1x
	};
	b3x.Vp1x = function() {
		this.bX4b([
			[this.gn6h, "keyup", this.bQe5j.f4j(this, this.gn6h)],
			[this.gn6h, "click", this.bQe5j.f4j(this, this.gn6h)],
			[this.gn6h, "focus", this.mc8U.f4j(this)]
		])
	};
	b3x.mc8U = function(d4h) {
		this.oN9E = gv6p.uz1x(this.gn6h)
	};
	b3x.bPN5S = function() {
		if (!GUser || !GUser.userId || GUser.userId <= 0) {
			window.GFollowers = [];
			return
		}
		var do5t = window.GUser.userId;
		var Y4c = "/api/user/getfollows/" + do5t;
		var gl6f = v4z.bm4q(Y4c, {
			sync: false,
			method: "get",
			query: "offset = 0&limit=1000&order=true",
			onload: function(j4n) {
				window.GFollowers = JSON.parse(j4n).follow
			}.f4j(this),
			onerror: function(j4n) {},
			onbeforerequest: function(j4n) {}
		})
	};
	b3x.bQf5k = function(index) {
		var D4H = this.gn6h.value,
			bi4m, bxx0x, bxw0x, Px0x;
		this.bPV5a.innerHTML = k4o.dH5M(D4H.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
		var mM9D = a3x.H4L(this.bPV5a, "j-test");
		for (var bc4g = 0; bc4g < mM9D.length; bc4g++) {
			mM9D[bc4g].innerText = " "
		}
		this.Nl7e.innerHTML = D4H.charAt(index);
		this.ctB3x.innerHTML = k4o.dH5M(D4H.substr(index + 1, D4H.length));
		Px0x = parseInt(a3x.dh5m(this.gn6h, "lineHeight"));
		a3x.ba4e(this.o4s, "display", "block");
		bxx0x = a3x.hU7N(this.Nl7e, this.o4s);
		bxw0x = a3x.hU7N(this.gn6h);
		a3x.ba4e(this.o4s, "display", "none");
		var cZ5e = bxx0x.x + bxw0x.x;
		var hv7o = bxx0x.y + bxw0x.y + Px0x;
		bi4m = {
			x: cZ5e,
			y: hv7o
		};
		this.ctz3x(bi4m)
	};
	b3x.bQe5j = function(eu6o, d4h) {
		h4l.cn4r(d4h);
		var eu6o = eu6o;
		var D4H = eu6o.value;
		var bq4u = D4H.length;
		var r4v = gv6p.uz1x(eu6o).start;
		var bQn5s = 0;
		var jX8P = d4h.keyCode || d4h.which;
		var ka8S;
		this.oN9E = gv6p.uz1x(eu6o);
		var bQo5t = false;
		for (var i = 1; i < 20; i++) {
			ka8S = r4v - i;
			if (D4H.charAt(ka8S) === " ") break;
			if (D4H.charAt(ka8S) === "@") {
				bQo5t = true;
				this.In5s = bQn5s = ka8S;
				break
			}
		}
		if (bQo5t && d4h.shiftKey === false && jX8P !== 38 && jX8P !== 40) {
			if (jX8P !== 27 && jX8P !== 13) {
				this.vf1x ? this.vf1x.T4X() : null;
				this.bQf5k(bQn5s)
			}
		} else if (jX8P !== 38 && jX8P !== 40 && d4h.keyCode !== 32) {
			this.vf1x ? this.vf1x.T4X() : null
		}
	};
	b3x.ctz3x = function(bi4m) {
		var bi4m = bi4m;
		var j4n = this.vh1x();
		var e4i = {
			parent: document[FullscreenApi.fullscreenElement] || document.body,
			offset: bi4m,
			data: j4n,
			target: this.gn6h,
			rangeData: this.oN9E,
			atIndex: this.In5s
		};
		this.vf1x ? this.vf1x.T4X() : null;
		this.vf1x = w4A.bPv4z.A4E(e4i)
	};
	b3x.vh1x = function() {
		var cty3x = gv6p.uz1x(this.gn6h).start;
		var ctw3x = this.In5s + 1;
		var bQs5x = gv6p.ctD3x() || [];
		var bQt5y = [];
		var bv4z = this.gn6h.value.substring(ctw3x, cty3x).toLowerCase();
		bv4z = bv4z.replace(/\[/g, "\\[");
		bv4z = bv4z.replace(/\]/g, "\\]");
		if (window.GFollowers) {
			this.qI0x = window.GFollowers[0] ? window.GFollowers : []
		} else this.qI0x = [];
		if (!this.qI0x[0]) this.bPN5S();
		for (var bc4g = 0; bc4g < bQs5x.length; bc4g++) {
			for (var v4z = 0; v4z < this.qI0x.length; v4z++) {
				if (this.qI0x[v4z].nickname == bQs5x[bc4g]) bQt5y.push(this.qI0x[v4z])
			}
		}
		this.qI0x = k4o.cgp0x(this.qI0x, bQt5y, {
			union: true,
			begin: true
		});
		var ctv3x = this.qI0x.length;
		var baW4a = [];
		var Rg0x, Uu1x;
		if (!this.qI0x[0]) return {
			suggests: baW4a
		};
		for (var i = 0; i < ctv3x; i++) {
			Rg0x = this.qI0x[i].nickname.toLowerCase().search(bv4z);
			Uu1x = this.qI0x[i].py ? this.qI0x[i].py.toLowerCase().search(bv4z) : -1;
			if (Rg0x !== -1 || Uu1x != -1) baW4a.push(this.qI0x[i]);
			if (baW4a.length === 10) break
		}
		return {
			suggests: baW4a
		}
	};
	b3x.PW0x = function() {
		var hk7d = this.oN9E || {
			text: "",
			start: 0,
			end: 0
		};
		h4l.z4D(this.gn6h, "focus");
		gv6p.Il5q(this.gn6h, hk7d, "@");
		this.oN9E = gv6p.uz1x(this.gn6h);
		this.In5s = hk7d.start;
		this.bQf5k(this.In5s)
	};
	b3x.Ic5h = function() {
		if (this.vf1x) this.vf1x.T4X()
	}
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		v4z = c3x("nej.j"),
		w4A = c3x("nm.w"),
		cb4f = c3x("nej.ut"),
		bD4H = c3x("nej.ui"),
		b3x;
	var ctt3x = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
	var cts3x = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
	var ge6Y = a3x.jm8e(cts3x);
	var iX7Q = a3x.to1x(ctt3x);
	w4A.PX0x = NEJ.C();
	b3x = w4A.PX0x.N4R(bD4H.el6f);
	b3x.cw5B = function(e4i) {
		this.fT6N = {};
		this.cE5J()
	};
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i);
		this.fT6N.txt = a3x.B4F(e4i.target);
		this.Nf7Y();
		this.Qe0x = w4A.bPL5Q.A4E(this.fT6N)
	};
	b3x.bC4G = function(e4i) {
		this.bF4J();
		this.Qe0x.T4X()
	};
	b3x.ch4l = function() {
		this.cf4j = ge6Y;
		this.mj8b = iX7Q
	};
	b3x.bW4a = function() {
		this.ci4m();
		var i4m = a3x.dk5p(a3x.B4F(this.o4s));
		this.fT6N.body = this.o4s;
		this.fT6N.before = i4m[0];
		this.fT6N.flag = i4m[1];
		this.fT6N.after = i4m[2]
	};
	b3x.Nf7Y = function() {
		var pC0x = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
		for (var i = 0; i < pC0x.length; i++) {
			if (pC0x[i] === "width" && a3x.dh5m(this.fT6N.txt, pC0x[i]) == "100%") {
				var ctr3x = this.fT6N.txt.offsetWidth;
				if (!ctr3x) {
					setTimeout(function() {
						a3x.ba4e(this.o4s, pC0x[i], this.fT6N.txt.offsetWidth + "px")
					}.f4j(this), 300)
				} else {
					a3x.ba4e(this.o4s, pC0x[i], this.fT6N.txt.offsetWidth + "px")
				}
				continue
			}
			a3x.ba4e(this.o4s, pC0x[i], a3x.dh5m(this.fT6N.txt, pC0x[i]))
		}
	};
	b3x.PW0x = function() {
		this.Qe0x.PW0x()
	};
	b3x.Ic5h = function() {
		this.Qe0x.Ic5h()
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		fy6s = NEJ.R,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		I4M = c3x("nej.ut"),
		lc8U = c3x("nm.c"),
		R4V = {},
		b3x;
	if ( !! lc8U.bxs0x) return;
	lc8U.bxs0x = NEJ.C();
	b3x = lc8U.bxs0x.N4R(I4M.cJ5O);
	b3x.cw5B = function() {
		this.cE5J()
	};
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i)
	};
	b3x.bC4G = function() {
		this.bF4J()
	};
	b3x.HU5Z = function(fh6b, cA5F, bdQ5V) {
		if (R4V[fh6b]) {
			this.gA7t("register commonJST[" + fh6b + "] duplicate");
			return
		}
		if (!k4o.gK7D(cA5F)) {
			cA5F = ctl.comJST.cti3x(fh6b, cA5F, bdQ5V)
		}
		R4V[fh6b] = cA5F
	};
	b3x.ctg3x = function(beL5Q) {
		if (k4o.eL6F(beL5Q)) {
			k4o.bd4h(beL5Q, function(p4t) {
				ctl.comJST.HU5Z.apply(this, p4t)
			}, this)
		} else if (k4o.lG8y(beL5Q)) {
			k4o.eI6C(beL5Q, function(fu6o, K4O) {
				ctl.comJST.HU5Z(K4O, fu6o)
			})
		}
	};
	b3x.cti3x = function(fh6b, vl1x, bdQ5V) {
		vl1x = vl1x || {};
		NEJ.X(vl1x, {
			comJST: this.nx9o
		});
		if (vl1x.resetDataName && !k4o.eL6F(vl1x.resetDataName)) {
			vl1x.resetDataName = [vl1x.resetDataName]
		}
		return function() {
			var j4n = arguments[0],
				kc8U = arguments[1];
			if (vl1x.resetDataName) {
				var ka8S = {};
				for (var i = 0, ii = vl1x.resetDataName.length; i < ii; i++) {
					ka8S[vl1x.resetDataName[i]] = arguments[i]
				}
				j4n = ka8S;
				kc8U = arguments[ii]
			}
			NEJ.X(j4n, vl1x, dZ6T);
			if (bdQ5V) {
				kc8U = kc8U || {};
				NEJ.X(kc8U, bdQ5V)
			}
			return a3x.cd4h(fh6b, j4n, kc8U)
		}
	};
	b3x.nx9o = function(fh6b) {
		if (!R4V[fh6b]) {
			this.gA7t("commonJST[" + fh6b + "] is unregister");
			return ""
		} else {
			return R4V[fh6b].apply(null, fy6s.slice.call(arguments, 1))
		}
	};
	b3x.dump = function() {
		return R4V
	};
	b3x.gA7t = function(ctc3x) {
		if (console && console.log) {
			console.log(ctc3x)
		}
	};
	var dZ6T = function(fu6o, K4O) {
			return K4O == "resetDataName"
		};
	c3x("ctl").comJST = lc8U.bxs0x.gm6g();
	a3x.crv3x({
		comJST: c3x("ctl").comJST.nx9o
	})
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		br4v = NEJ.F,
		fy6s = NEJ.R,
		a3x = c3x("nej.e"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		I4M = c3x("nej.ut"),
		lc8U = c3x("nm.c"),
		l4p = c3x("nm.x"),
		R4V = {},
		b3x;
	if ( !! lc8U.bxo0x) return;
	lc8U.bxo0x = NEJ.C();
	b3x = lc8U.bxo0x.N4R(I4M.cJ5O);
	b3x.cw5B = function() {
		this.cE5J();
		var e4i = {
			"com-mv-artists": function(fR6L, ed6X, Rf0x, bxn0x) {
				return a3x.cd4h("com-mv-artists", {
					artists: fR6L,
					clazz: ed6X,
					boxClazz: bxn0x,
					mark: Rf0x ||
					function(cO5T) {
						return cO5T
					},
					escape: k4o.dH5M,
					comJST: ctl.comJST.nx9o
				})
			},
			"com-album-artists": function(fR6L, ed6X, Rf0x, bxn0x) {
				return a3x.cd4h("com-album-artists", {
					artists: fR6L,
					clazz: ed6X,
					boxClazz: bxn0x,
					mark: Rf0x ||
					function(cO5T) {
						return cO5T
					},
					escape: k4o.dH5M,
					comJST: ctl.comJST.nx9o
				})
			},
			"com-artists-title": {
				resetDataName: ["artists"],
				escape: k4o.dH5M
			},
			"com-user-type": function(dp5u, ed6X, lM8E, wJ2x, bRA6u) {
				return a3x.cd4h("com-user-type", {
					x: dp5u,
					clazz: ed6X || "",
					clazz2: typeof bRA6u == "undefined" ? "icn" : bRA6u,
					before: lM8E || "",
					after: wJ2x || "",
					isEmptyObject: l4p.bJd3x
				})
			}
		};
		for (var C4G in e4i) {
			ctl.comJST.HU5Z(C4G, e4i[C4G])
		}
	};
	b3x.bl4p = function(e4i) {
		this.bn4r(e4i)
	};
	b3x.bC4G = function() {
		this.bF4J()
	};
	c3x("ctl").comJSTUtil = lc8U.bxo0x.gm6g()
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		a3x = c3x("nej.e"),
		dy5D = c3x("nej.p"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		I4M = c3x("nej.ut"),
		v4z = c3x("nej.j"),
		w4A = c3x("nm.w"),
		gv6p = c3x("nm.ut"),
		q4u = c3x("nm.d"),
		l4p = c3x("nm.x"),
		n4r = c3x("nm.l"),
		bxg0x = [2, 3],
		ec6W = ["sn", "db"],
		b3x, L4P, ctb3x = {
			13: "playlist",
			17: "djprogram",
			18: "song",
			19: "album",
			20: "artist",
			21: "mv",
			24: "topic",
			25: "activity",
			70: "djradio",
			38: "concert",
			39: "video",
			41: "cloudvideo"
		},
		Wy2x = {
			djprogram: "节目",
			album: "专辑",
			playlist: "歌单",
			song: "单曲",
			yunsong: "单曲",
			artist: "歌手",
			mv: "MV",
			topic: "音乐专栏",
			djradio: "电台",
			concert: "演出",
			video: "视频",
			cloudvideo: "视频"
		},
		bRG6A = {
			djprogram: " - ",
			album: " - ",
			playlist: " by ",
			song: " - ",
			yunsong: " - ",
			artist: "",
			mv: " - ",
			djradio: " by ",
			cloudvideo: " by "
		},
		csX3x = {
			0: 13,
			1: 17,
			3: 19,
			4: 18,
			5: 21,
			6: 24,
			14: 70,
			17: 20
		},
		HR5W = {
			pubEventWithPics: false,
			pubEventWithoutResource: false,
			pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
		},
		FullscreenApi = l4p.FL5Q || {};
	n4r.oP9G = NEJ.C();
	b3x = n4r.oP9G.N4R(n4r.eo6i);
	L4P = n4r.oP9G.cs5x;
	b3x.bl4p = function(e4i) {
		if (e4i.onclose === undefined) {
			e4i.onclose = this.bRQ6K.f4j(this)
		}
		this.bn4r(e4i);
		this.zr3x = e4i.isPub;
		this.jM8E = e4i.rid || -1;
		this.ez6t = e4i.type || -1;
		this.bwZ0x = e4i.purl;
		this.Rv0x = e4i.name || "";
		this.RI0x = e4i.author || "";
		this.bwW0x = e4i.authors || "";
		this.Yk2x = e4i.actId;
		this.Yn2x = e4i.actName;
		this.bSy6s = e4i.title;
		this.Yo2x = {};
		this.csW3x = e4i.mesg || "";
		this.csV3x = e4i.placeholder || "说点什么吧";
		this.bwO0x = e4i.hideTip;
		this.csU3x = e4i.videoJumpUrl;
		var i4m, eS6M = +(new Date);
		try {
			i4m = top.localCache.B4F("user") || {}
		} catch (e) {
			i4m = {}
		}
		for (var i = 0, i4m = i4m.bindings || [], cG5L; i < i4m.length; ++i) {
			cG5L = !i4m[i].tokenJsonStr ? null : JSON.parse(i4m[i].tokenJsonStr);
			if (!cG5L || cG5L.expires_in === undefined) continue;
			var YZ3x = parseInt(cG5L.expires_in),
				Zf3x = parseInt(i4m[i].refreshTime),
				csT3x = (YZ3x + Zf3x) * 1e3 - 5 * 60 * 1e3;
			if (csT3x > eS6M) this.Yo2x[i4m[i].type] = !0
		}
		this.xw2x = w4A.HG5L.A4E({
			parent: this.Zv3x,
			err: this.bSO7H
		});
		if (this.hx7q) {
			this.hx7q.T4X()
		}
		this.hx7q = w4A.PX0x.A4E({
			parent: document.body,
			target: this.ew6q
		});
		if (this.ez6t == 24 || this.ez6t == 21 || this.ez6t == 41 || this.HQ5V()) {
			this.zB3x.style.display = "none"
		} else {
			this.zB3x.style.display = "";
			this.oR9I = w4A.bgY6S.A4E({
				parent: this.bwz0x,
				button: this.zB3x,
				onstartupload: this.bTd7W.f4j(this, true),
				onfinishupload: this.bTd7W.f4j(this, false)
			})
		}
		if (this.HQ5V()) {
			this.qi0x.innerText = "";
			a3x.y4C(this.qi0x, "info-video");
			a3x.y4C(this.bwu0x, "f-hide")
		} else {
			a3x.x4B(this.bwu0x, "f-hide")
		}
	};
	b3x.bC4G = function() {
		this.bF4J();
		if (this.xw2x) {
			this.xw2x.T4X();
			delete this.xw2x
		}
		if (this.hx7q) {
			this.hx7q.T4X();
			delete this.hx7q
		}
		if (this.oR9I) {
			this.oR9I.T4X();
			delete this.oR9I
		}
		if (this.mO9F) {
			this.mO9F.T4X();
			delete this.mO9F
		}
	};
	b3x.ch4l = function() {
		this.cf4j = "m-wgt-sharewin"
	};
	b3x.bW4a = function() {
		this.ci4m();
		this.bTl7e = a3x.dk5p(this.o4s)[0];
		var bu4y = a3x.H4L(this.o4s, "j-flag");
		this.qF0x = bu4y.shift();
		this.bSO7H = bu4y.shift();
		this.Zv3x = bu4y.shift();
		this.ew6q = bu4y.shift();
		this.qi0x = bu4y.shift();
		this.bwr0x = bu4y.shift();
		this.csS3x = bu4y.shift();
		this.zB3x = bu4y.shift();
		this.cu5z = bu4y.shift();
		this.bwz0x = bu4y.shift();
		this.Cs4w = bu4y.shift();
		this.cGS7L = bu4y.shift();
		this.bwu0x = bu4y.shift();
		this.ek6e = bu4y.shift();
		this.bbx4B = a3x.H4L(this.bwu0x, "j-t");
		this.Bn3x = I4M.FZ5e.A4E({
			list: a3x.dk5p(this.qF0x),
			selected: "z-slt",
			onchange: this.bwm0x.f4j(this)
		});
		if (dy5D.dr5w.browser == "ie" && dy5D.dr5w.version < "8.0") {
			a3x.ba4e(this.Zv3x, "position", "relative");
			a3x.ba4e(this.Zv3x, "zIndex", "10")
		}
		h4l.s4w(window, "snsbind", this.Tg1x.f4j(this));
		h4l.s4w(this.ew6q, "input", this.fW6Q.f4j(this));
		h4l.s4w(this.ew6q, "keyup", this.wf2x.f4j(this));
		h4l.s4w(this.o4s, "click", this.cM5R.f4j(this));
		this.S4W = q4u.bug9X.A4E();
		this.S4W.s4w("onshareall", this.bbU4Y.f4j(this, 0));
		this.S4W.s4w("onshareerror", this.jb7U.f4j(this));
		this.S4W.s4w("onshareprivate", this.bbU4Y.f4j(this, 1));
		this.bbV4Z = q4u.Au3x.A4E();
		this.gA7t = q4u.hO7H.A4E();
		try {
			this.Tm1x = top.api.sharePermission
		} catch (e) {}
		if (!this.Tm1x) {
			this.Tm1x = HR5W;
			v4z.bm4q("/api/event/user/permission", {
				type: "json",
				onload: function(d4h) {
					if (d4h.code == 200) {
						this.Tm1x = NEJ.EX(HR5W, d4h)
					}
				}.f4j(this)
			})
		}
		l4p.oe9V()
	};
	b3x.bwm0x = function(d4h) {
		d4h.index == 0 ? a3x.x4B(this.bTl7e, "m-plshare") : a3x.y4C(this.bTl7e, "m-plshare");
		this.Zv3x.style.display = d4h.index == 0 ? "none" : "";
		this.csS3x.style.display = d4h.index == 0 ? "" : "none";
		this.zB3x.style.display = d4h.index == 0 ? "" : "none";
		if (this.ez6t == 24 || this.ez6t == 21) {
			this.zB3x.style.display = "none"
		}
		this.bSO7H.style.display = "none";
		this.ew6q.value = "";
		this.cc4g();
		this.HN5S();
		if (d4h.index == 0) {
			var cC5H = a3x.dh5m(this.ew6q, "width");
			if (cC5H == "auto" || !cC5H) {
				return
			} else {
				if (this.hx7q) {
					this.hx7q.T4X()
				}
				this.hx7q = w4A.PX0x.A4E({
					parent: document.body,
					target: this.ew6q
				})
			}
			this.bwz0x.style.display = ""
		} else {
			if (this.hx7q) {
				this.hx7q.T4X();
				delete this.hx7q
			}
			this.bwz0x.style.display = "none"
		}
	};
	b3x.cM5R = function(d4h) {
		var g4k = h4l.X4b(d4h, "d:action");
		if (!g4k) return;
		if (a3x.t4x(g4k, "action") == "search") {
			h4l.cn4r(d4h)
		} else if (a3x.t4x(g4k, "default") === undefined) {
			h4l.cn4r(d4h)
		}
		switch (a3x.t4x(g4k, "action")) {
		case "txt":
			this.mc8U();
			break;
		case "search":
			if (this.HQ5V()) {
				top.location.href = this.csU3x
			} else if (this.zr3x && this.ez6t != 24) {
				if (this.mO9F) {
					this.mO9F.T4X()
				}
				this.mO9F = w4A.bsf8X.A4E({
					parent: this.o4s.parentNode,
					onfinish: this.bwj0x.f4j(this),
					oncancel: this.csM3x.f4j(this)
				});
				this.bwe0x = true;
				this.o4s.style.display = "none";
				this.HM5R(this.jM8E < 0 ? "添加音乐" : "更换音乐")
			}
			break;
		case "at":
			h4l.tW1x(d4h); !! this.hp7i && this.hp7i.bt4x();
			this.hx7q.PW0x();
			this.gg6a();
			break;
		case "emot":
			h4l.tW1x(d4h); !! this.hx7q && this.hx7q.Ic5h();
			if (!this.hp7i) {
				this.hp7i = n4r.Ii5n.A4E({
					parent: this.bwr0x
				});
				this.hp7i.s4w("onselect", this.yk2x.f4j(this))
			}
			this.hp7i.J4N();
			break;
		case "upload":
			break;
		case "sns":
			h4l.bg4k(d4h);
			var bvW9N, bv4z, u4y = a3x.t4x(g4k, "type");
			if (!this.Yo2x[u4y]) {
				bvW9N = g4k.href.split("?");
				bv4z = k4o.hq7j(bvW9N[1]);
				bv4z["csrf_token"] = v4z.gx6r("__csrf");
				top.open(bvW9N[0] + "?" + k4o.cD5I(bv4z));
				return
			}
			var bz4D = {
				2: "sn",
				3: "db",
				4: "rr"
			};
			l4p.AE3x(g4k, "u-slg-" + bz4D[u4y] + "-gray");
			break;
		case "close":
			!! this.hp7i && this.hp7i.bt4x();
			this.bRQ6K();
			break;
		case "share":
			h4l.bg4k(d4h);
			if (this.HQ5V()) {
				if (!a3x.bE4I(g4k, "u-btn2-2-dis")) {
					this.csL3x()
				}
			} else if (a3x.bE4I(g4k, "u-btn2-2-dis")) {
				if (!this.Tm1x.pubEventWithoutResource && this.jM8E < 0) {
					this.csJ3x()
				} else {}
			} else if (this.jM8E < 0 && !this.ew6q.value && this.oR9I && this.oR9I.SK1x().length == 0) {
				n4r.Z4d.J4N({
					type: 2,
					tip: "请输入内容"
				})
			} else {
				this.csI3x()
			}
			break
		}
	};
	b3x.csJ3x = function() {
		var ue1x = 0,
			bvT9K = function() {
				if (ue1x % 2) {
					a3x.x4B(this.qi0x, "z-show")
				} else {
					a3x.y4C(this.qi0x, "z-show")
				}
				ue1x++;
				if (ue1x > 5) {
					clearInterval(eg6a)
				}
			},
			eg6a;
		return function() {
			ue1x = 0;
			clearInterval(eg6a);
			eg6a = setInterval(bvT9K.f4j(this), 200)
		}
	}();
	b3x.Tg1x = function(m4q) {
		m4q = m4q.result;
		this.Yo2x[m4q.type] = !0;
		var r4v = k4o.di5n(bxg0x, m4q.type),
			cj4n = "u-slg-" + ec6W[r4v] + "-gray";
		a3x.x4B(this.bbx4B[r4v], cj4n)
	};
	b3x.bwj0x = function(bx4B) {
		var j4n = bx4B.data;
		this.jM8E = bx4B.id;
		this.ez6t = bx4B.type;
		this.o4s.style.display = "";
		this.HM5R(this.bSy6s);
		this.mO9F && this.mO9F.T4X();
		this.bwe0x = false;
		this.bwZ0x = j4n.picUrl;
		this.Rv0x = j4n.title || "";
		this.RI0x = j4n.author || "";
		this.bwW0x = j4n.authors || "";
		this.csH3x();
		this.bfd5i()
	};
	b3x.csM3x = function() {
		this.mO9F && this.mO9F.T4X();
		this.o4s.style.display = "";
		this.HM5R(this.bSy6s);
		this.bwe0x = false;
		this.bfd5i()
	};
	b3x.yk2x = function(d4h) {
		var bo4s = "[" + d4h.text + "]";
		gv6p.Il5q(this.ew6q, this.oN9E, bo4s);
		this.gg6a()
	};
	b3x.fW6Q = function(d4h) {
		dy5D.dr5w.browser == "ie" && dy5D.dr5w.version < "7.0" ? setTimeout(this.gg6a.f4j(this), 0) : this.gg6a()
	};
	b3x.wf2x = function(d4h) {
		this.mc8U();
		if (d4h.keyCode == 8) this.gg6a()
	};
	b3x.gg6a = function() {
		this.mc8U();
		this.HN5S()
	};
	b3x.HN5S = function() {
		var bq4u = Math.ceil(k4o.fv6p(this.ew6q.value.trim()) / 2);
		this.cu5z.innerText = 140 - bq4u;
		bq4u > 140 ? a3x.fj6d(this.cu5z, "s-fc4", "s-fc6") : a3x.fj6d(this.cu5z, "s-fc6", "s-fc4")
	};
	b3x.csI3x = function() {
		if (this.cQ5V()) return;
		if (k4o.fv6p(this.ew6q.value.trim()) > 280) {
			this.cc4g("字数超过140个字符");
			return
		}
		l4p.sy0x(this.csF3x.f4j(this))
	};
	b3x.csF3x = function(cG5L) {
		var u4y = this.Bn3x.tm1x(),
			j4n;
		if (u4y == 0) {
			for (var i = 0, IB5G = []; i < this.bbx4B.length; ++i) {
				if (!a3x.bE4I(this.bbx4B[i], "u-slg-" + ec6W[i] + "-gray")) IB5G.push(bxg0x[i])
			}
			this.cQ5V(!0);
			j4n = {
				id: this.jM8E,
				msg: this.ew6q.value.trim(),
				type: this.bfq5v(this.ez6t),
				picUrl: this.bwZ0x,
				snsTypes: IB5G.join(","),
				isPub: this.zr3x,
				checkToken: cG5L || ""
			};
			if (this.Yk2x > 0) {
				j4n.actId = this.Yk2x;
				if (this.Yn2x) {
					j4n.msg = "#" + this.Yn2x + "#" + j4n.msg
				}
			}
			var ov9m = this.oR9I && this.oR9I.SK1x();
			if (ov9m && ov9m.length) {
				j4n.pics = ov9m
			}
			this.S4W.cwH4L(j4n)
		} else {
			var sZ1x = this.xw2x.Ve1x();
			if (sZ1x.length <= 0) {
				this.cc4g("请至少选择一位好友");
				return
			}
			this.S4W.cwG4K({
				data: {
					id: this.jM8E,
					msg: this.ew6q.value.trim(),
					type: this.bfq5v(this.ez6t == 41 ? 39 : this.ez6t),
					userIds: "[" + sZ1x.join(",") + "]",
					checkToken: cG5L || ""
				}
			})
		}
	};
	b3x.csL3x = function() {
		if (this.cQ5V()) {
			return
		}
		this.gA7t.eV6P("click", {
			target: "share",
			targetid: "button",
			page: "sharevideo"
		});
		if (k4o.fv6p(this.ew6q.value.trim()) > 280) {
			this.cc4g("字数超过140个字符");
			return
		}
		l4p.sy0x(this.csD3x.bind(this))
	};
	b3x.csD3x = function(cG5L) {
		this.cQ5V(!0);
		var j4n = {
			msg: this.ew6q.value.trim() || "",
			type: "video",
			checkToken: cG5L || ""
		},
			csC3x = {
				videoId: this.jM8E
			};
		if (this.Yk2x > 0) {
			j4n.actId = this.Yk2x;
			if (this.Yn2x) {
				j4n.msg = "#" + this.Yn2x + "#" + j4n.msg
			}
		}
		j4n.videoinfo = JSON.stringify(csC3x);
		this.S4W.cwE4I({
			data: {
				videoId: this.jM8E,
				commit: true
			},
			data2: j4n,
			snsTypes: ""
		})
	};
	b3x.bbU4Y = function(u4y, m4q) {
		this.cQ5V(!1);
		this.bt4x();
		if (!this.bwO0x) {
			if (this.HQ5V()) {
				n4r.Z4d.J4N({
					tip: "视频将在转码完成后自动发出",
					autoclose: true
				})
			} else {
				n4r.Z4d.J4N({
					tip: "分享成功" + (m4q.point > 0 ? ' 获得<em class="s-fc6">' + m4q.point + "积分</em>" : ""),
					autoclose: true
				})
			}
		}
		h4l.z4D(n4r.oP9G, "sharesuccess", {
			isPrivate: u4y,
			rid: this.jM8E,
			rtype: this.ez6t,
			data: m4q.event
		});
		this.z4D("onshare")
	};
	b3x.jb7U = function(m4q) {
		this.cQ5V(!1);
		var bG4K = "分享失败";
		if (m4q.code) {
			switch (m4q.code) {
			case 250:
				bG4K = m4q.message || m4q.msg || (this.zr3x ? "发布异常" : "分享异常");
				break;
			case 404:
				bG4K = "分享的资源不存在";
				break;
			case 407:
				bG4K = "输入内容包含有关键字";
				break;
			case 408:
				bG4K = "分享太快了，过会再分享吧";
				break;
			case 315:
				bG4K = m4q.message || "根据对方设置，你没有该操作权限";
				break;
			case 329:
				return l4p.fs6m({
					clazz: "m-layer-w2",
					btntxt: "知道了",
					message: "当前账号存在较多未完成发布的视频<br>请稍后再试"
				})
			}
		}
		this.cc4g(bG4K)
	};
	b3x.mc8U = function() {
		this.oN9E = gv6p.uz1x(this.ew6q)
	};
	b3x.cc4g = function(bG4K) {
		this.dY6S(this.ek6e, bG4K)
	};
	b3x.cQ5V = function(db5g) {
		return this.dS5X(this.Cs4w, db5g, "分享", "分享中...")
	};
	b3x.bfq5v = function(hY7R) {
		return ctb3x[hY7R] || ""
	};
	b3x.csB3x = function() {
		var eu6o, wi2x = this.bfq5v(this.ez6t);
		this.qi0x.style.display = "";
		if (this.jM8E < 0) {
			this.qi0x.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
		} else {
			if (!this.Rv0x) {
				this.qi0x.style.display = "none";
				return
			}
			var Wl2x = this.zr3x && this.ez6t != 24;
			eu6o = (Wy2x[wi2x] ? Wy2x[wi2x] + "：" : "") + this.Rv0x + (bRG6A[wi2x] || " ") + (wi2x == "mv" || wi2x == "album" ? this.bwW0x || this.RI0x : this.RI0x);
			a3x.dA5F(this.qi0x, "m-xwgt-share-infobar", {
				canChange: Wl2x,
				info: eu6o
			});
			if (Wl2x) {
				a3x.x4B(this.qi0x, "z-dis")
			} else {
				a3x.y4C(this.qi0x, "z-dis")
			}
		}
		a3x.x4B(this.qi0x, "info-video")
	};
	b3x.csH3x = function() {
		var wi2x = this.bfq5v(this.ez6t),
			eu6o = (Wy2x[wi2x] ? Wy2x[wi2x] + "：" : "") + this.Rv0x + (bRG6A[wi2x] || " ") + (wi2x == "mv" || wi2x == "album" ? this.bwW0x || this.RI0x : this.RI0x);
		Wl2x = this.zr3x && this.ez6t != 24;
		if (this.HQ5V()) {} else {
			a3x.x4B(this.qi0x, "info-video");
			a3x.dA5F(this.qi0x, "m-xwgt-share-infobar", {
				canChange: Wl2x,
				isPub: this.zr3x,
				info: eu6o
			})
		}
	};
	b3x.csA3x = function() {
		var ID5I = this.ew6q.value;
		if (this.zr3x) {
			if ( !! this.bwe0x) {
				return !!ID5I && !! ID5I.length || !! this.oR9I && this.oR9I.SK1x().length > 0
			} else {
				return !(this.jM8E < 0) || !! ID5I && !! ID5I.length || !! this.oR9I && this.oR9I.SK1x().length > 0
			}
		} else {
			return !!ID5I && !! ID5I.length || !! this.oR9I && this.oR9I.SK1x().length > 0
		}
	};
	b3x.bfd5i = function() {
		var bVb7U = false;
		if (!this.zr3x || this.Tm1x.pubEventWithoutResource || !(this.jM8E < 0)) {
			bVb7U = true
		}
		if (bVb7U) {
			a3x.x4B(this.Cs4w, "u-btn2-2-dis")
		} else {
			a3x.y4C(this.Cs4w, "u-btn2-2-dis")
		}
	};
	b3x.bTd7W = function(bvv9m) {
		if (bvv9m) {
			a3x.y4C(this.Cs4w, "u-btn2-2-dis")
		} else {
			this.bfd5i()
		}
	};
	b3x.bRQ6K = function(d4h) {
		if (d4h) {
			d4h.stopped = true
		}
		if (this.csA3x()) {
			l4p.ho7h({
				parent: document[FullscreenApi.fullscreenElement] || document.body,
				title: "提示",
				message: "是否退出本次编辑？",
				btnok: "退出",
				action: function(V4Z) {
					if (V4Z == "ok") {
						this.z4D("forceclose", {});
						this.bt4x();
						h4l.z4D(n4r.oP9G, "shareclose", {})
					}
				}.f4j(this)
			})
		} else {
			this.z4D("forceclose", {});
			this.bt4x();
			h4l.z4D(n4r.oP9G, "shareclose", {})
		}
	};
	b3x.HM5R = function(ep6j, dV5a) {
		this.oU9L.BR3x(ep6j, dV5a)
	};
	b3x.Wz2x = function(u4y) {
		this.gA7t.eV6P("page", {
			type: u4y
		})
	};
	b3x.HQ5V = function() {
		return this.ez6t == 39
	};
	b3x.J4N = function() {
		var csz3x = function(p4t, r4v) {
				var cj4n = "u-slg-" + ec6W[r4v] + "-gray";
				!this.Yo2x[bxg0x[r4v]] ? a3x.y4C(p4t, cj4n) : a3x.x4B(p4t, cj4n)
			};
		return function() {
			L4P.J4N.call(this);
			this.o4s.style.display = "";
			this.cc4g();
			this.cQ5V(!1);
			this.Bn3x.Rt0x(0);
			this.ew6q.focus();
			this.ew6q.value = this.csW3x || "";
			this.ew6q.placeholder = this.csV3x || "";
			if (!this.HQ5V()) {
				this.csB3x()
			} else {
				a3x.y4C(this.qi0x, "info-video");
				a3x.dA5F(this.qi0x, "m-xwgt-share-videobar", {
					title: this.Rv0x,
					picUrl: this.bwZ0x
				})
			}
			this.gg6a();
			this.xw2x.ctZ3x();
			k4o.bd4h(this.bbx4B, csz3x, this);
			this.mc8U();
			if (this.zr3x) {
				this.qF0x.style.display = "none"
			} else {
				this.qF0x.style.display = ""
			}
			this.bfd5i()
		}
	}();
	b3x.bt4x = function(d4h) {
		L4P.bt4x.call(this); !! this.hp7i && this.hp7i.bt4x();
		if (this.xw2x) {
			this.xw2x.T4X();
			delete this.xw2x
		}
		if (this.hx7q) {
			this.hx7q.T4X();
			delete this.hx7q
		}
		if (this.oR9I) {
			this.oR9I.T4X();
			delete this.oR9I
		}
		if (this.bVh7a) {
			this.bVh7a = this.bVh7a.T4X()
		}
		if (this.mO9F) {
			this.mO9F.T4X();
			delete this.mO9F
		}
	};
	l4p.kL8D = function(e4i) {
		if (!GUser || !GUser.userId || GUser.userId <= 0) {
			top.login();
			return
		}
		if (e4i.title === undefined) {
			e4i.title = "分享"
		}
		if (e4i.actId && e4i.type != 39) {
			var u4y = csX3x[e4i.resourceType],
				bV4Z = e4i.resourceJson,
				hZ7S;
			if (k4o.fC6w(bV4Z)) {
				try {
					bV4Z = JSON.parse(bV4Z)
				} catch (e) {}
			}
			if (u4y) {
				hZ7S = l4p.bMg4k(u4y, bV4Z);
				e4i.name = hZ7S.title;
				e4i.author = hZ7S.author;
				e4i.picUrl = hZ7S.picUrl;
				e4i.type = u4y;
				e4i.rid = (bV4Z || []).id
			}
		}
		n4r.oP9G.J4N(e4i)
	};
	I4M.fK6E.A4E({
		element: n4r.oP9G,
		event: ["sharesuccess", "shareclose"]
	})
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		h4l = c3x("nej.v"),
		a3x = c3x("nej.e"),
		v4z = c3x("nej.j"),
		n4r = c3x("nm.l"),
		w4A = c3x("nm.w"),
		bD4H = c3x("nej.ui"),
		q4u = c3x("nm.d"),
		l4p = c3x("nm.x"),
		b3x, L4P;
	n4r.WY2x = NEJ.C();
	b3x = n4r.WY2x.N4R(n4r.eo6i);
	L4P = n4r.WY2x.cs5x;
	b3x.cw5B = function() {
		this.cE5J()
	};
	b3x.bW4a = function() {
		this.ci4m();
		var i4m = a3x.H4L(this.o4s, "j-flag");
		h4l.s4w(i4m[0], "click", this.FK5P.f4j(this))
	};
	b3x.ch4l = function() {
		this.cf4j = "m-import-ok"
	};
	b3x.bl4p = function(e4i) {
		e4i.parent = e4i.parent || document.body;
		e4i.title = "歌曲同步完成";
		this.bn4r(e4i)
	};
	b3x.bC4G = function() {
		this.bF4J()
	};
	b3x.FK5P = function(d4h) {
		this.bt4x();
		if (location.pathname.indexOf("my") >= 0) {
			location.reload()
		} else {
			location.dispatch2("/my/")
		}
	};
	b3x.De4i = function() {
		this.bt4x()
	};
	b3x.bSY7R = function(d4h) {
		if (d4h.keyCode == 13) this.EH4L()
	}
})();
(function() {
	var c3x = NEJ.P,
		bb4f = NEJ.O,
		h4l = c3x("nej.v"),
		a3x = c3x("nej.e"),
		v4z = c3x("nej.j"),
		O4S = c3x("nej.p"),
		k4o = c3x("nej.u"),
		n4r = c3x("nm.l"),
		w4A = c3x("nm.w"),
		bD4H = c3x("nej.ui"),
		q4u = c3x("nm.d"),
		l4p = c3x("nm.x"),
		b3x, L4P;
	n4r.bVl7e = NEJ.C();
	b3x = n4r.bVl7e.N4R(n4r.eo6i);
	b3x.ch4l = function() {
		this.cf4j = "m-programtips-layer"
	};
	b3x.bW4a = function() {
		this.ci4m();
		this.bU4Y = a3x.H4L(this.o4s, "j-flag")
	};
	b3x.bl4p = function(e4i) {
		if (e4i.inner) {
			var innerNode = a3x.H4L(this.o4s, "wrap-p")[0];
			if (innerNode) {
				innerNode.innerHTML = e4i.inner
			}
		}
		e4i.clazz = " m-layer-programtips " + (e4i.clazz || "");
		e4i.parent = e4i.parent || document.body;
		e4i.title = e4i.title || "付费内容提示";
		e4i.draggable = !0;
		e4i.destroyalbe = !0;
		e4i.mask = true;
		this.bn4r(e4i);
		this.gY7R = e4i.id;
		this.cst3x = e4i.radiotype;
		this.ld8V = location.protocol + "//" + (this.bvs9j() || "music.163.com") + "/m/" + this.cst3x + "?id=" + this.gY7R;
		this.ld8V = e4i.url || this.ld8V;
		this.csq3x()
	};
	b3x.bC4G = function() {
		this.bF4J()
	};
	b3x.De4i = function() {
		this.bt4x()
	};
	b3x.FK5P = function(d4h) {
		this.z4D("onok", D4H);
		this.bt4x()
	};
	l4p.bvr9i = function(e4i) {
		n4r.bVl7e.A4E(e4i).J4N()
	};
	b3x.csq3x = function() {
		v4z.bm4q("/api/web/qrcode/get", {
			method: "POST",
			type: "json",
			data: k4o.cD5I({
				url: this.ld8V,
				size: 180
			}),
			onload: function(j4n) {
				if (j4n.code == 200) {
					this.csp3x(j4n.qrcodeImageUrl)
				} else {
					alert("二维码获取失败")
				}
			}.f4j(this)
		})
	};
	b3x.bvs9j = function() {
		var SA1x = location.host;
		if (SA1x.indexOf("music") >= 0) {
			return "music.163.com"
		} else {
			return "igame.163.com"
		}
	};
	b3x.csp3x = function(jU8M) {
		this.bU4Y[0].style.backgroundImage = "url(" + jU8M + ")"
	}
})();
(function() {
	var c3x = NEJ.P,
		a3x = c3x("nej.e"),
		dy5D = c3x("nej.p"),
		h4l = c3x("nej.v"),
		k4o = c3x("nej.u"),
		I4M = c3x("nej.ut"),
		v4z = c3x("nej.j"),
		q4u = c3x("nm.d"),
		l4p = c3x("nm.x"),
		E4I = c3x("nm.m"),
		n4r = c3x("nm.l"),
		M4Q = c3x("nm.m.f"),
		b3x, L4P;
	E4I.dg5l = NEJ.C();
	b3x = E4I.dg5l.N4R(I4M.du5z);
	b3x.bJ4N = function() {
		var ru0x = !1;
		return function() {
			if (ru0x) return;
			ru0x = !0;
			this.bQ4U();
			if (top == self) {
				return
			}
			this.uh1x = a3x.B4F("g_backtop");
			if (window.GRef != "mail") {} else {
				this.bVA7t()
			}
			I4M.fK6E.A4E({
				element: window,
				event: ["share", "playchange", "snsbind", "playstatechange"]
			});
			this.bX4b([
				[window, "scroll", this.BN3x.f4j(this)],
				[document, "keyup", this.cso3x.f4j(this)],
				[document.body, "click", this.sV1x.f4j(this)],
				[document, "mouseup", this.csn3x.f4j(this)],
				[this.uh1x, "click", this.Nb7U.f4j(this)],
				[q4u.tq1x, "message", this.vr1x.f4j(this)]
			]);
			l4p.cwP4T(document.body);
			this.BN3x();
			if (this.BK3x !== false && typeof GUser !== "undefined" && GUser.userId > 0) q4u.tq1x.gm6g().uL1x();
			try {
				top.GUser = NEJ.X(top.GUser, GUser);
				top.api.refreshUserInfo();
				if (dy5D.dr5w.browser == "ie" && parseInt(dy5D.dr5w.version) < 9 && /#(.*?)$/.test(top.document.title)) {
					top.document.title = "网易云音乐"
				} else {
					var hi7b = top.player.getPlaying();
					if (hi7b && hi7b.track && hi7b.playing) {
						top.document.title = decodeURIComponent("%E2%96%B6%20") + hi7b.track.name
					} else {
						top.document.title = document.title
					}
				}
			} catch (e) {}
			window.share = this.Ap3x.f4j(this);
			this.kz8r = q4u.hO7H.A4E();
			window.log = this.hh7a.f4j(this);
			var ui1x = location.search;
			if (ui1x) {
				var bv4z = ui1x.substr(ui1x.indexOf("?") + 1),
					gq6k = k4o.hq7j(bv4z);
				if (gq6k && gq6k["_hash"]) location.hash = gq6k["_hash"]
			}
		}
	}();
	b3x.cso3x = function(d4h) {
		var g4k = h4l.X4b(d4h);
		try {
			if (d4h.keyCode == 80 && l4p.bHR3x() || ["textarea", "input"].indexOf(g4k.tagName.toLowerCase()) >= 0) return;
			h4l.z4D(top.document, "keyup", {
				ctrlKey: d4h.ctrlKey,
				keyCode: d4h.keyCode
			})
		} catch (e) {}
	};
	b3x.sV1x = function(d4h) {
		var g4k = h4l.X4b(d4h);
		if (g4k && g4k.tagName == "INPUT") return;
		var g4k = h4l.X4b(d4h, "d:pid");
		if (g4k) {
			h4l.cn4r(d4h);
			var qr0x = a3x.t4x(g4k, "pid"),
				BG3x = a3x.t4x(g4k, "ptype"),
				V4Z = a3x.t4x(g4k, "action") || "play";
			switch (V4Z) {
			case "subscribe":
				l4p.ms9j({
					tracks: [qr0x]
				});
				break
			}
		}
		g4k = h4l.X4b(d4h, "d:resAction");
		if (g4k && g4k.className.indexOf("-dis") == -1) {
			var cS5X = a3x.t4x(g4k, "resId"),
				u4y = a3x.t4x(g4k, "resType"),
				bvm9d = a3x.t4x(g4k, "resRadiotype"),
				bvj9a = a3x.t4x(g4k, "resRadioid"),
				ee6Y = a3x.t4x(g4k, "resFrom"),
				j4n = a3x.t4x(g4k, "resData"),
				V4Z = a3x.t4x(g4k, "resAction"),
				buk9b = a3x.t4x(g4k, "resCopyright"),
				Yt2x = a3x.t4x(g4k, "resAuditstatus");
			if (V4Z != "log" && V4Z != "bilog") h4l.cn4r(d4h);
			switch (V4Z) {
			case "log":
				j4n = (j4n || "").split("|");
				if ( !! j4n[0]) {
					var bh4l = {
						id: cS5X,
						alg: j4n[2] || "itembased",
						scene: j4n[3],
						position: j4n[1] || 0
					};
					if ( !! j4n[4]) bh4l.srcid = j4n[4];
					window.log(j4n[0], bh4l)
				}
				break;
			case "bilog":
				var bxv0x = a3x.t4x(g4k, "logAction"),
					bxz0x = a3x.t4x(g4k, "logJson");
				window.log(bxv0x, bxz0x);
				break;
			case "share":
				if (Yt2x && Yt2x == 1) {
					l4p.iu7n("由于版权问题，该节目暂时无法分享。")
				} else {
					share(cS5X, u4y, a3x.t4x(g4k, "resPic"), a3x.t4x(g4k, "resName"), a3x.t4x(g4k, "resAuthor"), a3x.t4x(g4k, "resAuthors"))
				}
				break;
			case "fav":
			case "subscribe":
				if (u4y == 18) {
					var qz0x = a3x.t4x(g4k, "resLevel"),
						oc9T = a3x.t4x(g4k, "resFee");
					if (qz0x == 10) {
						l4p.uX1x(oc9T, cS5X, "song");
						break
					}
					l4p.ms9j({
						tracks: [cS5X]
					})
				}
				break;
			case "download":
				l4p.LU7N({
					id: cS5X,
					type: u4y
				});
				break;
			case "programtips":
				if (Yt2x && Yt2x == 1) {
					l4p.iu7n("由于版权问题，该节目暂时无法分享。")
				} else {
					l4p.bvr9i({
						id: bvj9a,
						radiotype: bvm9d
					})
				}
				break
			}
		}
		if (top == self) return;
		try {
			top.onIframeClick(d4h)
		} catch (e) {}
	};
	b3x.csn3x = function(d4h) {
		try {
			h4l.z4D(top.document, "mouseup")
		} catch (e) {}
	};
	b3x.BN3x = function() {
		var csm3x = function() {
				var ce4i = window.innerHeight;
				if (!k4o.sN1x(ce4i)) ce4i = (document.documentElement || document.body).clientHeight;
				return ce4i
			};
		return function(d4h) {
			if (!this.uh1x) return;
			var Yw2x = csm3x(),
				ga6U = document.documentElement.scrollTop || document.body.scrollTop;
			a3x.ba4e(this.uh1x, "display", ga6U > 0 ? "" : "none");
			if (dy5D.dr5w.browser == "ie" && dy5D.dr5w.version < "7.0") {
				var gy7r = Math.min(document.body.clientHeight, Yw2x + ga6U) - 204;
				a3x.ba4e(this.uh1x, "top", gy7r + "px")
			}
		}
	}();
	b3x.Nb7U = function(d4h) {
		h4l.cn4r(d4h);
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0
	};
	b3x.Ap3x = function() {
		var bvi9Z = function(d4h) {
				h4l.z4D(window, "share", d4h)
			};
		return function(cS5X, u4y, Ah3x, W4a, HH5M, HE5J) {
			l4p.kL8D({
				rid: cS5X,
				type: u4y,
				purl: Ah3x,
				name: W4a,
				author: HH5M,
				authors: HE5J,
				onshare: bvi9Z.f4j(this)
			})
		}
	}();
	b3x.hh7a = function(V4Z, bh4l) {
		try {
			top.log(V4Z, bh4l)
		} catch (e) {
			if (V4Z.indexOf("new|") == 0) {
				return this.kz8r.eV6P(V4Z.slice(4), bh4l)
			}
			switch (V4Z) {
			case "play":
				this.kz8r.eq6k(bh4l);
				break;
			case "search":
				this.kz8r.bDh1x(bh4l);
				break;
			default:
				this.kz8r.eV6P(V4Z, bh4l)
			}
		}
	};
	b3x.bVA7t = function() {
		var Zd3x, bvf9W = false,
			bs4w = [45, 60];
		var csl3x = function(bG4K) {
				if (bG4K.title != "MailBoxImport") return;
				var Q4U = JSON.parse(bG4K.content || "null") || bb4f;
				if (Q4U.status == 10) {
					n4r.WY2x.A4E().J4N();
					window.clearTimeout(Zd3x)
				}
			};
		var ou9l = function(d4h) {
				if (d4h.code == 200) {
					if (d4h.status == 1) {
						h4l.s4w(q4u.Dv4z, "message", csl3x.f4j(this));
						q4u.Dv4z.A4E().bxX0x();
						bvf9W = true
					} else {
						if (bvf9W) {
							if (d4h.status == 10) {
								n4r.WY2x.A4E().J4N();
								h4l.he7X(q4u.Dv4z, "message");
								window.clearTimeout(Zd3x);
								bvf9W = false
							}
						} else {
							window.clearTimeout(Zd3x)
						}
					}
				}
			};
		return function() {
			var ub1x = bs4w.shift() * 1e3;
			v4z.bm4q("/api/musicbox/mail/status", {
				type: "json",
				method: "get",
				onload: ou9l.f4j(this)
			});
			if (ub1x) {
				Zd3x = window.setTimeout(arguments.callee, ub1x)
			}
		}
	}();
	b3x.vr1x = function(d4h) {
		try {
			top.polling(d4h)
		} catch (e) {}
	}
})()