(function() {
	var c9h = NEJ.P,
		I0x = c9h("nej.ut"),
		w0x = c9h("nm.w"),
		O0x = c9h("nej.p"),
		b9i, L0x;
	w0x.vM7F = NEJ.C();
	b9i = w0x.vM7F.N0x(I0x.ny4C);
	L0x = w0x.vM7F.cs0x;
	b9i.bl0x = function(e9f) {
		e9f.onbeforelistload = e9f.onbeforelistload ||
		function(d9g) {
			d9g.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
		};
		e9f.onemptylist = e9f.onemptylist ||
		function(d9g) {
			d9g.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>暂无数据！</h3></div>'
		};
		var cutTitle = function(eo1x, bq0x) {
				var JS1x = O0x.dr1x.browser;
				var Tf4j = O0x.dr1x.version;
				if (JS1x == "ie" && Tf4j == "6.0" && eo1x.length > bq0x) {
					return eo1x.substring(0, bq0x)
				} else {
					return eo1x
				}
			};
		if ( !! e9f.item && typeof e9f.item == "object") {
			e9f.item.cutTitle = cutTitle
		} else {
			var cnl4p = e9f.item;
			e9f.item = {
				klass: cnl4p,
				cutTitle: cutTitle
			}
		}
		e9f.delta = e9f.delta || 200;
		e9f.sbody = e9f.sbody || window;
		this.bn0x(e9f)
	}
})();
(function() {
	var c9h = NEJ.P,
		q0x = c9h("nm.d"),
		k9b = c9h("nej.u"),
		n0x = c9h("nm.l"),
		b9i, L0x;
	q0x.Sk4o = NEJ.C();
	b9i = q0x.Sk4o.N0x(q0x.hJ2x);
	q0x.fq2x({
		"follows-list": {
			url: "/api/user/getfollows/{uid}",
			format: function(m0x, e9f) {
				if (m0x.code == 200) {
					for (var i = 0; i < m0x.follow.length; i++) {
						m0x.follow[i].nickname = this.Yb6V(m0x.follow[i].nickname, 16, true);
						m0x.follow[i].signature = this.Yb6V(m0x.follow[i].signature, 18, true)
					}
					return m0x.follow
				}
			},
			filter: function(e9f) {}
		},
		follow: {
			url: "/api/user/follow/{followId}",
			format: function(m0x, e9f) {
				return m0x
			},
			filter: function(e9f) {},
			onmessage: function() {
				var mc4g = {
					320: "关注已达上限",
					250: "关注异常"
				};
				return function(bY0x, m0x) {
					if (bY0x == 250) {
						n0x.Z0x.J0x({
							tip: m0x.message || mc4g[bY0x],
							type: 2
						});
						return
					}
					n0x.Z0x.J0x({
						tip: mc4g[bY0x] || "关注失败",
						type: 2
					})
				}
			}()
		},
		delfollow: {
			url: "/api/user/delfollow/{followId}",
			format: function(m0x, e9f) {
				m0x.user = {
					userId: e9f.data.followId
				};
				return m0x
			},
			filter: function(e9f) {}
		},
		"followeds-list": {
			url: "/api/user/getfolloweds",
			format: function(m0x, e9f) {
				if (m0x.code == 200) {
					m0x.newCount = m0x.newCount || 0;
					if ( !! m0x.followeds.length) {
						if (e9f.offset == 0) {
							this.z0x("onnewcount", m0x.newCount || 0);
							this.caO1x = m0x.newCount
						}
						var bfu8m = this.caO1x - e9f.offset;
						for (var i = 0; i < m0x.followeds.length; i++) {
							var ji3x = m0x.followeds[i].nickname;
							m0x.followeds[i].nickname = this.Yb6V(m0x.followeds[i].nickname, 16, true);
							m0x.followeds[i].signature = this.Yb6V(m0x.followeds[i].signature, 18, true);
							if (i < bfu8m) m0x.followeds[i].isNewFans = true
						}
					}
				}
				return {
					list: m0x.followeds
				}
			},
			filter: function(e9f) {}
		},
		"playlist-list": {
			url: "/api/user/playlist",
			format: function(m0x, e9f) {
				if (m0x.code == 200) return m0x.playlist
			},
			filter: function(e9f) {
				if (e9f.data.offset > 0) {
					e9f.data.offset -= 1
				}
			}
		},
		"listen-list": {
			url: "/user/listenedSongs/",
			format: function(Q0x) {
				return Q0x
			},
			type: "GET"
		},
		"dj-list": {
			url: "/api/dj/program/{userId}",
			format: function(m0x, e9f) {
				if (m0x.code == 200) {
					if ( !! e9f.data.wordwrap) {
						k9b.bd0x(m0x.programs, function(p0x, r0x, i9b) {
							if ( !! p0x.brand && p0x.brand.length > 5) {
								p0x.brand = p0x.brand.substring(0, 5) + "..."
							}
						})
					}
					return m0x.programs
				}
			},
			type: "GET"
		}
	});
	b9i.Yb6V = function(cM1x, bq0x, eY2x) {
		if (cM1x) {
			if (eY2x) cM1x = cM1x.replace(/[\r\n]/g, "");
			return cM1x.length > bq0x ? cM1x.substr(0, bq0x) + "..." : cM1x
		}
		return ""
	};
	b9i.byb3x = function(e9f) {
		e9f.onload = function(j9a) {
			this.z0x("onlisten", j9a)
		}.f9e(this);
		this.cp0x(q0x.B0x("listen-list"), e9f)
	};
	b9i.cIh9Y = function(e9f) {
		e9f.onload = function(j9a) {
			this.z0x("ondjs", j9a)
		}.f9e(this);
		this.cp0x(q0x.B0x("dj-list"), e9f)
	};
	b9i.Ta4e = function(e9f) {
		e9f.onload = function(j9a) {
			this.z0x("onfollow", j9a)
		}.f9e(this);
		this.cp0x(q0x.B0x("follow"), e9f)
	};
	b9i.caS1x = function(e9f) {
		e9f.onload = function(j9a) {
			this.z0x("ondelfollow", j9a)
		}.f9e(this);
		this.cp0x(q0x.B0x("delfollow"), e9f)
	}
})();
(function() {
	var c9h = NEJ.P,
		bb0x = NEJ.O,
		k9b = c9h("nej.u"),
		I0x = c9h("nej.ut"),
		O0x = c9h("nej.ut.p"),
		qk5p;
	if ( !! O0x.DR9I) return;
	O0x.DR9I = NEJ.C();
	qk5p = O0x.DR9I.N0x(I0x.cK1x);
	qk5p.cw0x = function() {
		this.cC1x();
		this.CT9K = []
	};
	qk5p.bl0x = function(e9f) {
		this.bn0x(e9f);
		this.beE8w(e9f.parent);
		this.js3x = e9f.name || "/";
		this.bk0x = e9f.data || {}
	};
	qk5p.bC0x = function() {
		var TA5F = function(g9d, r0x, i9b) {
				i9b.splice(r0x, 1);
				g9d.T0x()
			};
		return function() {
			this.bF0x();
			delete this.bk0x;
			k9b.nI4M(this.CT9K, TA5F);
			this.beE8w(null)
		}
	}();
	qk5p.bwV3x = function(g9d) {
		return g9d instanceof O0x.DR9I
	};
	qk5p.cDo7h = function(nG4K) {
		return k9b.dj1x(this.CT9K, nG4K) >= 0
	};
	qk5p.VB5G = function() {
		return this.js3x
	};
	qk5p.hX2x = function() {
		return this.bk0x
	};
	qk5p.vK7D = function() {
		var bH0x = this.Cz9q(),
			W0x = this.VB5G();
		if (!bH0x) return W0x;
		var DP9G = bH0x.VB5G();
		if (DP9G != "/" && W0x != "/") W0x = "/" + W0x;
		return bH0x.vK7D() + W0x
	};
	qk5p.Cz9q = function() {
		return this.gm2x
	};
	qk5p.dm1x = function() {
		return this.CT9K
	};
	qk5p.bxc3x = function(W0x) {
		var r0x = k9b.dj1x(this.CT9K, function(g9d) {
			return W0x == g9d.VB5G()
		});
		return this.CT9K[r0x] || null
	};
	qk5p.beE8w = function(bH0x) {
		bH0x = this.bwV3x(bH0x) ? bH0x : null;
		if (bH0x == this.gm2x) return; !! bH0x ? bH0x.bxd3x(this) : this.gm2x.cCF7y(this);
		this.gm2x = bH0x;
		return this
	};
	qk5p.bxd3x = function(nG4K) {
		nG4K = this.bwV3x(nG4K) ? nG4K : null;
		if (!nG4K || this.cDo7h(nG4K)) return;
		this.CT9K.push(nG4K);
		nG4K.beE8w(this);
		return this
	};
	qk5p.cCF7y = function(nG4K) {
		nG4K = this.bwV3x(nG4K) ? nG4K : null;
		var r0x = k9b.dj1x(this.CT9K, nG4K);
		if (r0x >= 0) {
			this.CT9K.splice(r0x, 1);
			nG4K.beE8w(null)
		}
		return nG4K
	}
})();
(function() {
	var c9h = NEJ.P,
		br0x = NEJ.F,
		k9b = c9h("nej.u"),
		I0x = c9h("nej.ut"),
		O0x = c9h("nej.ut.p");
	var VG5L = function(gb2x, cl0x, VH5M) {
			var g9d = gb2x,
				VH5M = VH5M || br0x;
			if (cl0x != "/") {
				k9b.bd0x(cl0x.split("/"), function(W0x) {
					var m0x = VH5M(g9d, W0x);
					if (!m0x) return !0;
					g9d = m0x
				})
			}
			return g9d
		};
	O0x.DN9E = function() {
		var Ub5g = function(bH0x, W0x) {
				var W0x = W0x || "/",
					DP9G = bH0x.VB5G();
				if (DP9G == "/" && W0x == "/") return bH0x;
				return bH0x.bxc3x(W0x)
			};
		return function(gb2x, cl0x) {
			return VG5L(gb2x, cl0x, Ub5g)
		}
	}();
	O0x.cCu7n = function() {
		var cBb7U = function(bH0x, W0x) {
				var DP9G = bH0x.VB5G();
				if (!W0x && DP9G == "/") return bH0x;
				var g9d = null;
				if (DP9G != "/") {
					g9d = bH0x.bxc3x("/");
					if (!g9d) {
						g9d = O0x.DR9I.A0x();
						bH0x.bxd3x(g9d)
					}
				}
				if ( !! W0x) {
					g9d = bH0x.bxc3x(W0x);
					if (!g9d) {
						g9d = O0x.DR9I.A0x({
							name: W0x
						});
						bH0x.bxd3x(g9d)
					}
				}
				return g9d
			};
		return function(gb2x, cl0x) {
			return VG5L(gb2x, cl0x, cBb7U)
		}
	}();
	O0x.cur5w = function(gb2x, jJ3x, cR1x) {
		if (!jJ3x || !cR1x) return gb2x;
		var jJ3x = jJ3x.vK7D().split("/"),
			cR1x = cR1x.vK7D().split("/"),
			ctu5z = k9b.eI1x(jJ3x, function(D0x, r0x) {
				if (D0x != cR1x[r0x]) return !0
			}) || 1,
			cl0x = jJ3x.splice(0, ctu5z).join("/") || "/";
		return O0x.DN9E(gb2x, cl0x)
	};
	O0x.cqF4J = function(gb2x, dv1x) {
		var bs0x = [gb2x],
			g9d = bs0x.shift(),
			dv1x = dv1x || br0x;
		while ( !! g9d) {
			bs0x.push.apply(bs0x, g9d.dm1x());
			dv1x(g9d);
			g9d = bs0x.shift()
		}
		return this
	};
	O0x.VK5P = function(g9d) {
		return g9d instanceof O0x.DR9I
	};
	O0x.KB1x = function(eU2x) {
		return eU2x instanceof I0x.dg1x
	};
	O0x.bxq3x = function() {
		var dh1x = /^\/?\?(?=\/|$)/;
		return function(cl0x) {
			return dh1x.test(cl0x || "")
		}
	}();
	O0x.cnz4D = function() {
		var dh1x = /[\?#]/;
		return function(Y0x) {
			var bs0x = (Y0x || "").trim().split(dh1x),
				cjV3x = bs0x[0] == "/" && (bs0x[1] || "").indexOf("/") == 0;
			return bs0x[0] + (cjV3x ? "?" + bs0x[1] : "")
		}
	}()
})();
(function() {
	var c9h = NEJ.P,
		bb0x = NEJ.O,
		em1x = c9h("nej.g"),
		a8i = c9h("nej.e"),
		v0x = c9h("nej.j"),
		k9b = c9h("nej.u"),
		I0x = c9h("nej.ut"),
		O0x = c9h("nej.ut.p"),
		ol4p;
	if ( !! O0x.bfa8S) return;
	O0x.bfa8S = NEJ.C();
	ol4p = O0x.bfa8S.N0x(I0x.cK1x);
	ol4p.bl0x = function(e9f) {
		this.bn0x(e9f);
		this.oZ4d = e9f.root;
		this.Bi8a = e9f.dispatcher;
		this.bfc8U = {}
	};
	ol4p.bC0x = function() {
		this.bF0x();
		delete this.oZ4d;
		delete this.bfc8U
	};
	ol4p.bxx3x = function(g9d) {
		if (!O0x.VK5P(g9d)) return !1;
		return !!g9d.hX2x().stopped || this.bxx3x(g9d.Cz9q())
	};
	ol4p.bxy3x = function(g9d) {
		if (!O0x.VK5P(g9d)) return;
		delete g9d.hX2x().stopped;
		this.bxy3x(g9d.Cz9q())
	};
	ol4p.byx3x = function(eb1x, mW4a) {
		this.bfd8V("onhide", eb1x, mW4a)
	};
	ol4p.bxB3x = function(eb1x, mW4a) {
		this.bfd8V("onshow", eb1x, mW4a);
		this.VP5U(eb1x)
	};
	ol4p.byw3x = function(g9d) {
		this.bfd8V("onrefresh", g9d);
		this.VP5U(g9d)
	};
	ol4p.bfd8V = function(u0x, eb1x, mW4a) {
		if (eb1x == mW4a || !O0x.VK5P(eb1x)) return;
		if (u0x == "onhide") this.bxE3x(eb1x, u0x);
		this.bfd8V(u0x, eb1x.Cz9q(), mW4a);
		if (u0x != "onhide") this.bxE3x(eb1x, u0x)
	};
	ol4p.VP5U = function(g9d) {
		if (!O0x.VK5P(g9d)) return !0;
		var j9a = g9d.hX2x(),
			V0x = j9a.action,
			eU2x = j9a.module;
		if (!this.VP5U(g9d.Cz9q()) || !! V0x && k9b.fG2x(eU2x)) return !1;
		if ( !! eU2x && !! eU2x.A0x && !! V0x && V0x != "onhide") {
			if (this.bxx3x(g9d)) return;
			var e9f = {
				umi: g9d.vK7D(),
				composite: j9a.composite,
				dispatcher: this.Bi8a
			};
			eU2x = eU2x.A0x(e9f);
			if (O0x.KB1x(eU2x)) {
				j9a.module = eU2x;
				this.bxE3x(g9d, "onshow")
			} else {
				delete j9a.module
			}
		}
		delete j9a.action;
		return !0
	};
	ol4p.bxE3x = function() {
		var ccS1x = function(g9d) {
				var eU2x;
				g9d = g9d.Cz9q();
				while ( !! g9d) {
					eU2x = g9d.hX2x().module;
					if (O0x.KB1x(eU2x)) {
						return eU2x.cjt3x()
					}
					g9d = g9d.Cz9q()
				}
				return null
			};
		return function(g9d, W0x) {
			if (!O0x.VK5P(g9d)) return;
			var j9a = g9d.hX2x(),
				eU2x = j9a.module,
				bxG3x = W0x != "onhide";
			if (O0x.KB1x(eU2x)) {
				if (bxG3x && this.bxx3x(g9d)) return;
				var d9g = !this.md4h ? j9a.event : this.md4h.hX2x().event;
				if ( !! d9g) {
					d9g.umi = g9d.vK7D();
					d9g.data = ccS1x(g9d)
				}
				var byv3x = j9a.xname || "onhide";
				if (W0x == "onshow" && byv3x != "onhide") W0x = "onrefresh";
				if (W0x == "onrefresh" && byv3x == "onhide") W0x = "onshow";
				j9a.xname = W0x;
				eU2x.z0x(W0x, d9g || {});
				if (bxG3x && !! d9g && !! d9g.pos && d9g.umi == d9g.target) {
					a8i.nc4g(d9g.pos)
				}
				if (bxG3x && !! d9g) {
					j9a.stopped = d9g.stopped;
					delete d9g.stopped
				}
			} else if ( !! eU2x) {
				j9a.action = W0x;
				if (W0x == "onshow" && k9b.fG2x(eU2x)) {
					var F0x = a8i.B0x("umi://" + eU2x);
					if ( !! F0x) {
						a8i.cX1x(F0x)
					} else {
						var bQ0x = location.config || bb0x;
						v0x.bUE9v((bQ0x.root || "") + eU2x, {
							version: (bQ0x.ver || bb0x)[eU2x],
							onloaded: a8i.cX1x
						})
					}
				}
			}
		}
	}();
	ol4p.Lg1x = function(cl0x) {
		return !!this.bfc8U[cl0x]
	};
	ol4p.bXe0x = function(cl0x) {
		this.bfc8U[cl0x] = !0;
		return this
	};
	ol4p.cKu9l = function(cl0x) {
		delete this.bfc8U[cl0x];
		return this
	};
	ol4p.byp3x = function(cl0x) {
		if (this.Lg1x(cl0x)) this.VP5U(O0x.DN9E(this.oZ4d, cl0x));
		return this
	};
	ol4p.bxN3x = function(cl0x) {
		if (this.Lg1x(cl0x)) {
			var g9d = O0x.DN9E(this.oZ4d, cl0x);
			this.bxy3x(g9d);
			this.bxB3x(g9d)
		}
		return this
	};
	ol4p.byl3x = function(cl0x) {
		if (this.Lg1x(cl0x)) {
			this.byx3x(O0x.DN9E(this.oZ4d, cl0x))
		}
		return this
	}
})();
(function() {
	var c9h = NEJ.P,
		bb0x = NEJ.O,
		br0x = NEJ.F,
		a8i = c9h("nej.e"),
		O0x = c9h("nej.ut.p"),
		Cp9g;
	if ( !! O0x.bxQ3x) return;
	O0x.bxQ3x = NEJ.C();
	Cp9g = O0x.bxQ3x.N0x(O0x.bfa8S);
	Cp9g.bl0x = function(e9f) {
		this.bn0x(e9f);
		this.byg3x = !! e9f.classed
	};
	Cp9g.bC0x = function() {
		this.bF0x();
		delete this.DD9u;
		delete this.md4h
	};
	Cp9g.ccW1x = function(d9g) {
		if (!this.md4h) return !0;
		var eU2x = this.md4h.hX2x().module;
		if (O0x.KB1x(eU2x)) eU2x.z0x("onbeforehide", d9g);
		return !d9g.stopped
	};
	Cp9g.gI2x = function() {
		if (!this.md4h) return;
		window.setTimeout(this.bxN3x.f9e(this, this.md4h.vK7D()), 0)
	};
	Cp9g.bxN3x = function(cl0x) {
		if (!this.Lg1x(cl0x)) return this;
		var cR1x = O0x.DN9E(this.oZ4d, cl0x),
			j9a = cR1x.hX2x();
		if (!j9a.module) return this;
		var jJ3x = this.md4h,
			d9g = j9a.event,
			bxU3x = bb0x;
		this.md4h = cR1x;
		this.bxy3x(cR1x);
		if ( !! jJ3x) {
			bxU3x = jJ3x.hX2x().event;
			d9g.referer = bxU3x.href || ""
		}
		if (jJ3x == cR1x) {
			this.byw3x(this.md4h);
			return this
		}
		this.DD9u = O0x.cur5w(this.oZ4d, jJ3x, cR1x);
		if (jJ3x != null) {
			if (jJ3x != this.DD9u) {
				if (this.byg3x) a8i.x0x(document.body, bxU3x.clazz);
				this.byx3x(jJ3x, this.DD9u)
			}
			this.byw3x(this.DD9u)
		} else {
			this.bxB3x(this.DD9u)
		}
		if (cR1x != this.DD9u) {
			if (this.byg3x) a8i.y0x(document.body, d9g.clazz);
			this.bxB3x(cR1x, this.DD9u)
		}
		return this
	};
	Cp9g.byp3x = function(cl0x) {
		if (this.Lg1x(cl0x)) this.VP5U(this.md4h);
		return this
	};
	Cp9g.byl3x = br0x
})();
(function() {
	var c9h = NEJ.P,
		bb0x = NEJ.O,
		br0x = NEJ.F,
		a8i = c9h("nej.e"),
		h9c = c9h("nej.v"),
		k9b = c9h("nej.u"),
		O0x = c9h("nej.ut"),
		nb4f = c9h("nej.ut.p"),
		b9i;
	if ( !! O0x.bxW3x) return;
	O0x.bxW3x = NEJ.C();
	b9i = O0x.bxW3x.N0x(O0x.cK1x);
	b9i.cw0x = function() {
		this.cC1x();
		var gO2x = +(new Date);
		this.IK0x = "pb-" + gO2x;
		this.bxY3x = "pv-" + gO2x
	};
	b9i.bl0x = function(e9f) {
		this.bxZ3x = {};
		this.bya3x = !! e9f.rest;
		this.oZ4d = nb4f.DR9I.A0x();
		this.hQ2x = {
			m: {},
			mg: {},
			r: [],
			rr: {},
			al: {},
			am: {}
		};
		this.qO5T = {};
		this.bAf3x(this.IK0x);
		this.qO5T[this.bxY3x] = nb4f.bfa8S.A0x({
			root: this.oZ4d,
			dispatcher: this
		});
		this.bX0x([
			[location, "urlchange", this.byd3x.f9e(this)]
		]);
		this.bn0x(e9f);
		this.byf3x(e9f.rules);
		this.Xm6g(e9f.modules)
	};
	b9i.bC0x = function() {
		var TA5F = function(io2x, K0x, bz0x) {
				delete bz0x[K0x];
				io2x.T0x()
			};
		return function() {
			delete this.hQ2x;
			this.oZ4d = this.oZ4d.T0x();
			k9b.eI1x(this.qO5T, TA5F);
			this.bF0x()
		}
	}();
	b9i.byc3x = function(cl0x, K0x, D0x) {
		var FQ0x = this.hQ2x.m[cl0x];
		if (!FQ0x) {
			FQ0x = {};
			this.hQ2x.m[cl0x] = FQ0x
		}
		FQ0x[K0x] = D0x
	};
	b9i.bKr6l = function(cl0x, K0x) {
		var FQ0x = this.hQ2x.m[cl0x];
		return !FQ0x ? "" : FQ0x[K0x]
	};
	b9i.bAf3x = function(he2x) {
		if (!he2x) return;
		var io2x = this.qO5T[he2x];
		if (!io2x) {
			io2x = nb4f.bxQ3x.A0x({
				root: this.oZ4d,
				dispatcher: this,
				classed: he2x == this.IK0x
			});
			this.qO5T[he2x] = io2x
		}
		return io2x
	};
	b9i.cdh1x = function(cl0x, he2x) {
		var io2x = this.bAf3x(he2x);
		if (!io2x) {
			he2x = nb4f.bxq3x(cl0x) ? this.bxY3x : this.IK0x;
			io2x = this.qO5T[he2x]
		}
		io2x.bXe0x(cl0x);
		this.hQ2x.mg[cl0x] = he2x
	};
	b9i.byh3x = function() {
		var dh1x = /\$\d/;
		return function(cl0x, hl2x) {
			var m0x;
			k9b.eI1x(this.hQ2x.r, function(bQ0x) {
				k9b.eI1x(bQ0x, function(D0x, K0x) {
					if ( !! D0x.test && (D0x.test(cl0x) || D0x.test(hl2x))) {
						m0x = dh1x.test(K0x) ? cl0x.replace(D0x, K0x) : K0x;
						return !0
					}
					if (D0x === cl0x || D0x === hl2x) {
						m0x = K0x;
						return !0
					}
				});
				return !!m0x
			});
			return m0x || cl0x
		}
	}();
	b9i.byd3x = function() {
		var JO1x = /(?:^\/+)|(?:\/+$)/gi,
			gG2x = /#(\$.*?)$/;
		var cuN5S = function(cl0x, g9d) {
				var jZ3x = g9d.vK7D(),
					cl0x = cl0x.replace(jZ3x, "").replace(JO1x, "");
				return cl0x.split("/")
			};
		var byi3x = function(cl0x, bz0x) {
				var D0x, bs0x = cl0x.split("/");
				while (bs0x.length > 0) {
					if (!bs0x[bs0x.length - 1]) {
						bs0x.pop()
					} else {
						bs0x[bs0x.length - 1] = ""
					}
					D0x = bz0x[bs0x.join("/")];
					if ( !! D0x) return D0x
				}
				return ""
			};
		return function(jE3x) {
			if (jE3x.path.indexOf("$") == 0) return;
			var dn1x = this.bxZ3x[jE3x.path];
			delete this.bxZ3x[jE3x.path];
			this.z0x("onbeforechange", jE3x);
			var cl0x = this.byh3x(jE3x.path, jE3x.href),
				he2x = this.hQ2x.mg[cl0x];
			if (!he2x && this.bya3x) he2x = byi3x(cl0x, this.hQ2x.mg);
			if (!he2x && !nb4f.bxq3x(cl0x)) {
				cl0x = this.hQ2x.rr["404"];
				he2x = this.hQ2x.mg[cl0x]
			}
			if (!he2x && this.bya3x) he2x = byi3x(cl0x, this.hQ2x.mg);
			if (!he2x) return;
			var g9d = nb4f.DN9E(this.oZ4d, cl0x),
				byj3x = null;
			if (this.bya3x) byj3x = cuN5S(cl0x, g9d);
			var jJ3x = cl0x;
			cl0x = g9d.vK7D();
			g9d.hX2x().event = {
				target: cl0x,
				source: jJ3x,
				href: jE3x.href,
				param: jE3x.query,
				input: dn1x,
				prest: byj3x,
				clazz: this.bKr6l(cl0x, "clazz"),
				pos: gG2x.test(jE3x.href) ? RegExp.$1 : ""
			};
			var eo1x = this.bKr6l(jJ3x, "title");
			if ( !! eo1x) document.title = eo1x;
			this.qO5T[he2x].bxN3x(cl0x)
		}
	}();
	b9i.eB1x = function() {
		var byk3x = function(Y0x, hl2x) {
				if (!Y0x) return;
				var bx0x = location.parse(Y0x);
				this.z0x("onbeforechange", bx0x);
				var cl0x = this.byh3x(bx0x.path, hl2x || bx0x.href);
				return this.qO5T[this.IK0x].Lg1x(cl0x)
			};
		var VG5L = function(g9d) {
				var cl0x = a8i.t0x(g9d, "href");
				if ( !! cl0x) return cl0x;
				var hl2x = a8i.gK2x(g9d, "href");
				if ( !! hl2x && !a8i.t0x(g9d, "notUmi")) {
					var bs0x = hl2x.split("#");
					bs0x.shift();
					var cl0x = bs0x.join("#");
					if (byk3x.call(this, cl0x, hl2x)) {
						return cl0x
					}
					if (byk3x.call(this, hl2x)) {
						var bx0x = location.parse(hl2x);
						return bx0x.path + "?" + k9b.cE1x(bx0x.query)
					}
				}
			};
		var crR5W = function(g9d) {
				return !!VG5L.call(this, g9d)
			};
		return function(d9g) {
			var F0x = h9c.X0x(d9g, crR5W.f9e(this));
			if ( !! F0x) {
				h9c.cn0x(d9g);
				this.iB3x(VG5L.call(this, F0x))
			}
		}
	}();
	b9i.csd5i = function(d9g) {
		var VR5W = this.hQ2x.am,
			bh0x = VR5W[d9g.type];
		if (!bh0x) return;
		var F0x = h9c.X0x(d9g, "d:resAction");
		if (!F0x) return;
		var V0x = a8i.t0x(F0x, "resAction"),
			dv1x = bh0x[V0x];
		if (!dv1x) return;
		var e9f = {
			action: V0x,
			target: F0x,
			id: a8i.t0x(F0x, "resId"),
			type: a8i.t0x(F0x, "resType"),
			extra: a8i.t0x(F0x, "resExtra")
		};
		this.z0x("onbeforeaction", {
			event: d9g,
			target: F0x,
			result: e9f
		});
		dv1x.call(this, e9f)
	};
	b9i.byf3x = function() {
		var cxF6z = ["404"];
		var czP7I = function(bQ0x, K0x) {
				this.byf3x(K0x, bQ0x)
			};
		var bZn0x = function(eo1x, cl0x) {
				this.byc3x(cl0x, "title", eo1x)
			};
		var ccq1x = function(cl0x, bym3x) {
				this.hQ2x.al[bym3x] = cl0x
			};
		var byn3x = function(bQ0x) {
				if (!bQ0x) return;
				this.hQ2x.r.push(bQ0x);
				k9b.bd0x(cxF6z, function(K0x) {
					if (!bQ0x[K0x]) return;
					this.hQ2x.rr[K0x] = bQ0x[K0x];
					delete bQ0x[K0x]
				}, this)
			};
		var cfN2x = function(V0x, W0x) {
				var VR5W = this.hQ2x.am;
				var d9g = "click",
					dv1x = V0x,
					W0x = (W0x || "").toLowerCase();
				if (k9b.lA3x(V0x)) {
					d9g = V0x.event || d9g;
					dv1x = V0x.value
				}
				if (k9b.fG2x(dv1x)) {
					dv1x = function(cl0x, e9f) {
						this.iB3x(cl0x, {
							force: !0,
							input: e9f
						})
					}.f9e(this, dv1x)
				} else if (k9b.gP2x(dv1x)) {
					dv1x = dv1x.eF1x(null, function(d9g) {
						var m0x = d9g.value;
						if (k9b.fG2x(m0x)) {
							this.iB3x(m0x, {
								force: !0,
								input: d9g.args[0]
							})
						}
					}.f9e(this))
				}
				if (k9b.gP2x(dv1x)) {
					if (!VR5W[d9g]) {
						this.bX0x([
							[document, d9g, this.csd5i.f9e(this)]
						]);
						VR5W[d9g] = {}
					}
					VR5W[d9g][W0x] = dv1x
				}
			};
		var vq6k = {
			title: function(bQ0x) {
				k9b.eI1x(bQ0x, bZn0x, this)
			},
			rewrite: function(bQ0x) {
				if (!k9b.eL1x(bQ0x)) {
					byn3x.call(this, bQ0x)
				} else {
					k9b.bd0x(bQ0x, byn3x, this)
				}
			},
			alias: function(bQ0x) {
				k9b.eI1x(bQ0x, ccq1x, this)
			},
			action: function(bQ0x) {
				k9b.eI1x(bQ0x, cfN2x, this)
			}
		};
		return function(K0x, bQ0x) {
			if (k9b.eL1x(K0x)) {
				bQ0x = K0x;
				K0x = "rewrite"
			} else if (!k9b.fG2x(K0x)) {
				k9b.eI1x(K0x, czP7I, this);
				return this
			}(vq6k[K0x] || br0x).call(this, bQ0x);
			return this
		}
	}();
	b9i.Xm6g = function() {
		var cgW2x = function(bQ0x, cl0x) {
				this.Xm6g(cl0x, bQ0x)
			};
		var byo3x = function(eU2x) {
				return !!eU2x && !! eU2x.N0x
			};
		return function(cl0x, bQ0x) {
			if (!k9b.fG2x(cl0x)) {
				k9b.eI1x(cl0x, cgW2x, this);
				return this
			}
			var j9a = nb4f.cCu7n(this.oZ4d, cl0x).hX2x(),
				eU2x = j9a.module;
			if (nb4f.KB1x(eU2x) || byo3x(eU2x)) return this;
			var he2x = this.hQ2x.mg[cl0x],
				eU2x;
			if (k9b.fG2x(bQ0x) || byo3x(bQ0x)) {
				eU2x = bQ0x
			} else {
				bQ0x = bQ0x || bb0x;
				he2x = bQ0x.gid;
				eU2x = bQ0x.module;
				if ( !! bQ0x.title) this.byc3x(cl0x, "title", bQ0x.title);
				if ( !! bQ0x.clazz) this.byc3x(cl0x, "clazz", bQ0x.clazz);
				if ( !! bQ0x.composite) j9a.composite = bQ0x.composite
			}
			this.cdh1x(cl0x, he2x);
			j9a.module = eU2x;
			return this
		}
	}();
	b9i.btp2x = function() {
		var bxM3x = function(g9d, bG0x) {
				var eU2x = g9d.hX2x().module;
				if (nb4f.KB1x(eU2x)) eU2x.z0x("onmessage", bG0x)
			};
		var vq6k = [bxM3x, function(cR1x, bG0x) {
			var eb1x = bG0x.from;
			while ( !! cR1x) {
				if (cR1x.vK7D() != eb1x) bxM3x(cR1x, bG0x);
				cR1x = cR1x.Cz9q()
			}
		}, function(cR1x, bG0x) {
			var eb1x = bG0x.from;
			nb4f.cqF4J(cR1x, function(g9d) {
				if (g9d.vK7D() != eb1x) bxM3x(g9d, bG0x)
			})
		}];
		return function(bG0x) {
			var d9g = NEJ.X({}, bG0x),
				cR1x = nb4f.DN9E(this.oZ4d, d9g.to);
			d9g.path = cR1x.vK7D();
			(vq6k[d9g.mode] || vq6k[0]).call(this, cR1x, d9g)
		}
	}();
	b9i.Br8j = function(u0x, bG0x) {
		var bG0x = NEJ.X({}, bG0x);
		bG0x.type = u0x || "";
		this.z0x((bG0x.from || "") + ":" + bG0x.type, bG0x)
	};
	b9i.mE4I = function(cl0x, u0x, cA0x) {
		cl0x = this.hQ2x.al[cl0x] || cl0x;
		this.bkM0x((cl0x || "") + ":" + (u0x || ""), cA0x)
	};
	b9i.byq3x = function(cl0x, u0x, cA0x) {
		cl0x = this.hQ2x.al[cl0x] || cl0x;
		this.mp4t((cl0x || "") + ":" + (u0x || ""), cA0x)
	};
	b9i.bbJ7C = function(Y0x) {
		return this.iB3x(Y0x)
	};
	b9i.bt0x = function(cl0x) {
		var he2x = this.hQ2x.mg[cl0x];
		if (he2x == this.bxY3x) {
			this.qO5T[he2x].byl3x(cl0x)
		}
		return this
	};
	b9i.iB3x = function(Y0x, e9f) {
		e9f = e9f || bb0x;
		var cl0x = nb4f.cnz4D(Y0x),
			jE3x = location.parse(Y0x);
		this.bxZ3x[jE3x.path] = e9f.input;
		if (nb4f.bxq3x(cl0x)) {
			this.byd3x(jE3x)
		} else {
			var io2x = this.qO5T[this.IK0x],
				d9g = {
					target: jE3x,
					umi: cl0x
				};
			if ( !! io2x.ccW1x(d9g)) {
				if (location.same(Y0x) && !! e9f.force) {
					this.byd3x(jE3x)
				} else {
					location.ignored = !! e9f.ignored;
					location.redirect(Y0x, !! e9f.replace)
				}
			}
		}
		return this
	};
	b9i.gI2x = function(Y0x) {
		if ( !! Y0x) {
			this.iB3x(Y0x, {
				replace: !0,
				force: !0
			})
		} else {
			this.qO5T[this.IK0x].gI2x()
		}
	};
	b9i.cKv9m = function() {
		this.bX0x([
			[document, "click", this.eB1x.f9e(this)]
		]);
		return this
	};
	b9i.cwR6L = function() {
		location.active();
		return this
	};
	b9i.bNT7M = function(cl0x, eU2x) {
		cl0x = this.hQ2x.al[cl0x] || cl0x;
		if (!k9b.eL1x(cl0x)) {
			this.Xm6g(cl0x, eU2x);
			this.qO5T[this.hQ2x.mg[cl0x]].byp3x(cl0x)
		} else {
			k9b.bd0x(cl0x, function(K0x) {
				this.bNT7M(K0x, eU2x)
			}, this)
		}
		return this
	};
	a8i.vw7p = function(e9f) {
		window.dispatcher = O0x.bxW3x.gk2x(e9f);
		a8i.cX1x((e9f || bb0x).tid || "template-box", location.config);
		h9c.s0x(document, "templateready", function() {
			window.setTimeout(dispatcher.cwR6L.f9e(dispatcher), 0)
		});
		return window.dispatcher
	}
})();
(function() {
	var p = NEJ.P("nej.u");
	var np4t = 8;
	var bca7T = function(ha2x, cz0x) {
			return ha2x << cz0x | ha2x >>> 32 - cz0x
		};
	var mj4n = function(x, y) {
			var bIf5k = (x & 65535) + (y & 65535),
				bWk0x = (x >> 16) + (y >> 16) + (bIf5k >> 16);
			return bWk0x << 16 | bIf5k & 65535
		};
	var bWj0x = function(t, b, c, d) {
			if (t < 20) return b & c | ~b & d;
			if (t < 40) return b ^ c ^ d;
			if (t < 60) return b & c | b & d | c & d;
			return b ^ c ^ d
		};
	var bWh0x = function(t) {
			if (t < 20) return 1518500249;
			if (t < 40) return 1859775393;
			if (t < 60) return -1894007588;
			return -899497514
		};
	var uT6N = function() {
			var Hq0x = function(i) {
					return i % 32
				},
				Hr0x = function(i) {
					return 32 - np4t - i % 32
				};
			return function(cM1x, Hs0x) {
				var Oz3x = [],
					ll3x = (1 << np4t) - 1,
					lU3x = Hs0x ? Hq0x : Hr0x;
				for (var i = 0, l = cM1x.length * np4t; i < l; i += np4t) Oz3x[i >> 5] |= (cM1x.charCodeAt(i / np4t) & ll3x) << lU3x(i);
				return Oz3x
			}
		}();
	var Ov3x = function() {
			var bId5i = "0123456789abcdef",
				Hq0x = function(i) {
					return i % 4
				},
				Hr0x = function(i) {
					return 3 - i % 4
				};
			return function(is2x, Hs0x) {
				var bs0x = [],
					lU3x = Hs0x ? Hq0x : Hr0x;
				for (var i = 0, l = is2x.length * 4; i < l; i++) {
					bs0x.push(bId5i.charAt(is2x[i >> 2] >> lU3x(i) * 8 + 4 & 15) + bId5i.charAt(is2x[i >> 2] >> lU3x(i) * 8 & 15))
				}
				return bs0x.join("")
			}
		}();
	var baG7z = function() {
			var Hq0x = function(i) {
					return i % 32
				},
				Hr0x = function(i) {
					return 32 - np4t - i % 32
				};
			return function(Oz3x, Hs0x) {
				var bs0x = [],
					ll3x = (1 << np4t) - 1,
					lU3x = Hs0x ? Hq0x : Hr0x;
				for (var i = 0, l = Oz3x.length * 32; i < l; i += np4t) bs0x.push(String.fromCharCode(Oz3x[i >> 5] >>> lU3x(i) & ll3x));
				return bs0x.join("")
			}
		}();
	var IY0x = function() {
			var bWf0x = "=",
				bWb0x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
				Hq0x = function(i) {
					return i % 4
				},
				Hr0x = function(i) {
					return 3 - i % 4
				};
			return function(is2x, Hs0x) {
				var bs0x = [],
					lU3x = Hs0x ? Hq0x : Hr0x;
				for (var i = 0, bIa5f; i < is2x.length * 4; i += 3) {
					bIa5f = (is2x[i >> 2] >> 8 * lU3x(i) & 255) << 16 | (is2x[i + 1 >> 2] >> 8 * lU3x(i + 1) & 255) << 8 | is2x[i + 2 >> 2] >> 8 * lU3x(i + 2) & 255;
					for (var j = 0; j < 4; j++) bs0x.push(i * 8 + j * 6 > is2x.length * 32 ? bWf0x : bWb0x.charAt(bIa5f >> 6 * (3 - j) & 63))
				}
				return bs0x.join("")
			}
		}();
	var bao7h = function(q, a, b, x, s, t) {
			return mj4n(bca7T(mj4n(mj4n(a, q), mj4n(x, t)), s), b)
		};
	var pc4g = function(a, b, c, d, x, s, t) {
			return bao7h(b & c | ~b & d, a, b, x, s, t)
		};
	var oP4T = function(a, b, c, d, x, s, t) {
			return bao7h(b & d | c & ~d, a, b, x, s, t)
		};
	var po4s = function(a, b, c, d, x, s, t) {
			return bao7h(b ^ c ^ d, a, b, x, s, t)
		};
	var pm4q = function(a, b, c, d, x, s, t) {
			return bao7h(c ^ (b | ~d), a, b, x, s, t)
		};
	var Ly1x = function(x, y) {
			x[y >> 5] |= 128 << y % 32;
			x[(y + 64 >>> 9 << 4) + 14] = y;
			var a = 1732584193,
				b = -271733879,
				c = -1732584194,
				d = 271733878;
			for (var i = 0, l = x.length, bHV5a, bHU5Z, bHT5Y, bHR5W; i < l; i += 16) {
				bHV5a = a;
				bHU5Z = b;
				bHT5Y = c;
				bHR5W = d;
				a = pc4g(a, b, c, d, x[i + 0], 7, -680876936);
				d = pc4g(d, a, b, c, x[i + 1], 12, -389564586);
				c = pc4g(c, d, a, b, x[i + 2], 17, 606105819);
				b = pc4g(b, c, d, a, x[i + 3], 22, -1044525330);
				a = pc4g(a, b, c, d, x[i + 4], 7, -176418897);
				d = pc4g(d, a, b, c, x[i + 5], 12, 1200080426);
				c = pc4g(c, d, a, b, x[i + 6], 17, -1473231341);
				b = pc4g(b, c, d, a, x[i + 7], 22, -45705983);
				a = pc4g(a, b, c, d, x[i + 8], 7, 1770035416);
				d = pc4g(d, a, b, c, x[i + 9], 12, -1958414417);
				c = pc4g(c, d, a, b, x[i + 10], 17, -42063);
				b = pc4g(b, c, d, a, x[i + 11], 22, -1990404162);
				a = pc4g(a, b, c, d, x[i + 12], 7, 1804603682);
				d = pc4g(d, a, b, c, x[i + 13], 12, -40341101);
				c = pc4g(c, d, a, b, x[i + 14], 17, -1502002290);
				b = pc4g(b, c, d, a, x[i + 15], 22, 1236535329);
				a = oP4T(a, b, c, d, x[i + 1], 5, -165796510);
				d = oP4T(d, a, b, c, x[i + 6], 9, -1069501632);
				c = oP4T(c, d, a, b, x[i + 11], 14, 643717713);
				b = oP4T(b, c, d, a, x[i + 0], 20, -373897302);
				a = oP4T(a, b, c, d, x[i + 5], 5, -701558691);
				d = oP4T(d, a, b, c, x[i + 10], 9, 38016083);
				c = oP4T(c, d, a, b, x[i + 15], 14, -660478335);
				b = oP4T(b, c, d, a, x[i + 4], 20, -405537848);
				a = oP4T(a, b, c, d, x[i + 9], 5, 568446438);
				d = oP4T(d, a, b, c, x[i + 14], 9, -1019803690);
				c = oP4T(c, d, a, b, x[i + 3], 14, -187363961);
				b = oP4T(b, c, d, a, x[i + 8], 20, 1163531501);
				a = oP4T(a, b, c, d, x[i + 13], 5, -1444681467);
				d = oP4T(d, a, b, c, x[i + 2], 9, -51403784);
				c = oP4T(c, d, a, b, x[i + 7], 14, 1735328473);
				b = oP4T(b, c, d, a, x[i + 12], 20, -1926607734);
				a = po4s(a, b, c, d, x[i + 5], 4, -378558);
				d = po4s(d, a, b, c, x[i + 8], 11, -2022574463);
				c = po4s(c, d, a, b, x[i + 11], 16, 1839030562);
				b = po4s(b, c, d, a, x[i + 14], 23, -35309556);
				a = po4s(a, b, c, d, x[i + 1], 4, -1530992060);
				d = po4s(d, a, b, c, x[i + 4], 11, 1272893353);
				c = po4s(c, d, a, b, x[i + 7], 16, -155497632);
				b = po4s(b, c, d, a, x[i + 10], 23, -1094730640);
				a = po4s(a, b, c, d, x[i + 13], 4, 681279174);
				d = po4s(d, a, b, c, x[i + 0], 11, -358537222);
				c = po4s(c, d, a, b, x[i + 3], 16, -722521979);
				b = po4s(b, c, d, a, x[i + 6], 23, 76029189);
				a = po4s(a, b, c, d, x[i + 9], 4, -640364487);
				d = po4s(d, a, b, c, x[i + 12], 11, -421815835);
				c = po4s(c, d, a, b, x[i + 15], 16, 530742520);
				b = po4s(b, c, d, a, x[i + 2], 23, -995338651);
				a = pm4q(a, b, c, d, x[i + 0], 6, -198630844);
				d = pm4q(d, a, b, c, x[i + 7], 10, 1126891415);
				c = pm4q(c, d, a, b, x[i + 14], 15, -1416354905);
				b = pm4q(b, c, d, a, x[i + 5], 21, -57434055);
				a = pm4q(a, b, c, d, x[i + 12], 6, 1700485571);
				d = pm4q(d, a, b, c, x[i + 3], 10, -1894986606);
				c = pm4q(c, d, a, b, x[i + 10], 15, -1051523);
				b = pm4q(b, c, d, a, x[i + 1], 21, -2054922799);
				a = pm4q(a, b, c, d, x[i + 8], 6, 1873313359);
				d = pm4q(d, a, b, c, x[i + 15], 10, -30611744);
				c = pm4q(c, d, a, b, x[i + 6], 15, -1560198380);
				b = pm4q(b, c, d, a, x[i + 13], 21, 1309151649);
				a = pm4q(a, b, c, d, x[i + 4], 6, -145523070);
				d = pm4q(d, a, b, c, x[i + 11], 10, -1120210379);
				c = pm4q(c, d, a, b, x[i + 2], 15, 718787259);
				b = pm4q(b, c, d, a, x[i + 9], 21, -343485551);
				a = mj4n(a, bHV5a);
				b = mj4n(b, bHU5Z);
				c = mj4n(c, bHT5Y);
				d = mj4n(d, bHR5W)
			}
			return [a, b, c, d]
		};
	var bmr0x = function(K0x, j9a) {
			var uF6z = uT6N(K0x, !0);
			if (uF6z.length > 16) uF6z = Ly1x(uF6z, K0x.length * np4t);
			var Oj3x = Array(16),
				Oh3x = Array(16);
			for (var i = 0; i < 16; i++) {
				Oj3x[i] = uF6z[i] ^ 909522486;
				Oh3x[i] = uF6z[i] ^ 1549556828
			}
			var dR1x = Ly1x(Oj3x.concat(uT6N(j9a, !0)), 512 + j9a.length * np4t);
			return Ly1x(Oh3x.concat(dR1x), 512 + 128)
		};
	var LG1x = function(x, bq0x) {
			x[bq0x >> 5] |= 128 << 24 - bq0x % 32;
			x[(bq0x + 64 >> 9 << 4) + 15] = bq0x;
			var w = Array(80),
				a = 1732584193,
				b = -271733879,
				c = -1732584194,
				d = 271733878,
				e = -1009589776;
			for (var i = 0, l = x.length, bHQ5V, bHO5T, bdZ8R, bHN5S, bHM5R; i < l; i += 16) {
				bHQ5V = a;
				bHO5T = b;
				bdZ8R = c;
				bHN5S = d;
				bHM5R = e;
				for (var j = 0; j < 80; j++) {
					w[j] = j < 16 ? x[i + j] : bca7T(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
					var t = mj4n(mj4n(bca7T(a, 5), bWj0x(j, b, c, d)), mj4n(mj4n(e, w[j]), bWh0x(j)));
					e = d;
					d = c;
					c = bca7T(b, 30);
					b = a;
					a = t
				}
				a = mj4n(a, bHQ5V);
				b = mj4n(b, bHO5T);
				c = mj4n(c, bdZ8R);
				d = mj4n(d, bHN5S);
				e = mj4n(e, bHM5R)
			}
			return [a, b, c, d, e]
		};
	var bmA0x = function(K0x, j9a) {
			var uF6z = uT6N(K0x);
			if (uF6z.length > 16) uF6z = LG1x(uF6z, K0x.length * np4t);
			var Oj3x = Array(16),
				Oh3x = Array(16);
			for (var i = 0; i < 16; i++) {
				Oj3x[i] = uF6z[i] ^ 909522486;
				Oh3x[i] = uF6z[i] ^ 1549556828
			}
			var dR1x = LG1x(Oj3x.concat(uT6N(j9a)), 512 + j9a.length * np4t);
			return LG1x(Oh3x.concat(dR1x), 512 + 160)
		};
	p.cIJ9A = function(K0x, j9a) {
		return Ov3x(bmA0x(K0x, j9a))
	};
	p.cIK9B = function(K0x, j9a) {
		return IY0x(bmA0x(K0x, j9a))
	};
	p.cIL9C = function(K0x, j9a) {
		return baG7z(bmA0x(K0x, j9a))
	};
	p.cIM9D = function(K0x, j9a) {
		return Ov3x(bmr0x(K0x, j9a), !0)
	};
	p.cIO9F = function(K0x, j9a) {
		return IY0x(bmr0x(K0x, j9a), !0)
	};
	p.cIP9G = function(K0x, j9a) {
		return baG7z(bmr0x(K0x, j9a), !0)
	};
	p.cIU9L = function(j9a) {
		return Ov3x(LG1x(uT6N(j9a), j9a.length * np4t))
	};
	p.cIV9M = function(j9a) {
		return IY0x(LG1x(uT6N(j9a), j9a.length * np4t))
	};
	p.cIW9N = function(j9a) {
		return baG7z(LG1x(uT6N(j9a), j9a.length * np4t))
	};
	p.le3x = function(j9a) {
		return Ov3x(Ly1x(uT6N(j9a, !0), j9a.length * np4t), !0)
	};
	p.cIX9O = function(j9a) {
		return IY0x(Ly1x(uT6N(j9a, !0), j9a.length * np4t), !0)
	};
	p.cIZ9Q = function(j9a) {
		return baG7z(Ly1x(uT6N(j9a, !0), j9a.length * np4t), !0)
	};
	p.cJa9R = function(j9a) {
		return Ov3x(uT6N(j9a, !0), !0)
	}
})();
(function() {
	var c9h = NEJ.P,
		a8i = c9h("nej.e"),
		v0x = c9h("nej.j"),
		bb0x = c9h("nej.o"),
		k9b = c9h("nej.u"),
		h9c = c9h("nej.v"),
		bD0x = c9h("nej.ui"),
		q0x = c9h("nm.d"),
		l0x = c9h("nm.x"),
		n0x = c9h("nm.l"),
		b9i, L0x;
	n0x.qr5w = NEJ.C();
	b9i = n0x.qr5w.N0x(n0x.ep1x, !0);
	b9i.cw0x = function() {
		this.cC1x()
	};
	b9i.bW0x = function() {
		this.ci0x();
		var i9b = a8i.H0x(this.o0x, "j-flag");
		this.bmU0x = i9b[0];
		h9c.s0x(i9b[1], "click", this.bmV0x.f9e(this))
	};
	b9i.ch0x = function() {
		this.cg0x = "m-layer-tip"
	};
	b9i.bl0x = function(e9f) {
		e9f.parent = e9f.parent || document.body;
		this.bn0x(e9f);
		this.bmU0x.innerHTML = e9f.mesg || ""
	};
	b9i.bC0x = function() {
		this.bF0x()
	};
	b9i.bmV0x = function(d9g) {
		this.z0x("onnotice");
		this.bt0x()
	};
	n0x.nz4D = function(e9f) {
		if (this.xQ7J) {
			this.xQ7J.T0x();
			delete this.xQ7J
		}
		this.xQ7J = n0x.qr5w.A0x(e9f);
		this.xQ7J.J0x()
	}
})();
(function() {
	var c9h = NEJ.P,
		bb0x = NEJ.O,
		br0x = NEJ.F,
		a8i = c9h("nej.e"),
		h9c = c9h("nej.v"),
		k9b = c9h("nej.u"),
		dw1x = c9h("nej.p"),
		bc0x = c9h("nej.ui"),
		v0x = c9h("nej.j"),
		l0x = c9h("nm.x"),
		q0x = c9h("nm.d"),
		n0x = c9h("nm.l"),
		w0x = c9h("nm.w"),
		gw2x = c9h("nm.ut"),
		b9i, L0x;
	w0x.Dx9o = NEJ.C();
	b9i = w0x.Dx9o.N0x(bc0x.ej1x);
	L0x = w0x.Dx9o.cs0x;
	b9i.bl0x = function(e9f) {
		this.bn0x(e9f);
		this.ev1x = e9f.type || 1;
		if (a8i.iF3x("program-data")) {
			this.gz2x = JSON.parse(a8i.iF3x("program-data"))
		}
		this.ec1x = e9f.resource || {};
		this.su5z = a8i.nR4V(a8i.cc0x("m-wgt-input-" + this.ev1x, {
			placeholder: e9f.placeholder || ""
		}));
		this.bEQ4U = e9f.type == 2 ? true : false;
		var i9b = a8i.H0x(this.su5z, "j-flag");
		this.gg2x = i9b[0];
		this.bxn3x = a8i.H0x(this.su5z, "btns")[0];
		this.lQ3x = i9b[3];
		this.ckV3x = i9b[4];
		a8i.gt2x(this.gg2x, "holder");
		if (a8i.bE0x(this.gg2x.parentNode, "holder-parent")) {
			a8i.ba0x(this.gg2x.parentNode, "display", "block")
		}
		this.gg2x.value = e9f.input || "";
		this.o0x.appendChild(this.su5z);
		this.oK4O = {
			start: 0,
			end: 0
		};
		if (!e9f.nomention) {
			this.hC2x = w0x.Rx4B.A0x({
				parent: document.body,
				target: this.gg2x
			})
		} else {
			a8i.ba0x(i9b[2], "display", "none")
		}
		this.bfC8u = e9f.numLimit || 140;
		this.gh2x();
		this.ckG3x();
		this.bX0x([
			[this.lQ3x, "click", this.tG6A.f9e(this)],
			[i9b[2], "click", this.bxt3x.f9e(this)],
			[i9b[1], "click", this.bxu3x.f9e(this)],
			[this.gg2x, "focus", this.lq3x.f9e(this)],
			[this.gg2x, "blur", this.nP4T.f9e(this)],
			[this.gg2x, "input", this.fW2x.f9e(this)],
			[this.gg2x, "keyup", this.vi6c.f9e(this)],
			[this.gg2x, "click", this.mi4m.f9e(this)]
		]);
		if (!k9b.gP2x(e9f.onbeforesubmit)) this.s0x("onbeforesubmit", this.cku3x.f9e(this));
		if (!k9b.gP2x(e9f.onloading)) this.s0x("onloading", this.ckt3x.f9e(this))
	};
	b9i.bC0x = function() {
		this.gg2x.value = "";
		if (this.hm2x) {
			this.hm2x.T0x();
			delete this.hm2x
		}
		if (this.hC2x) {
			this.hC2x.T0x();
			delete this.hC2x
		}
		this.bF0x();
		a8i.cN1x(this.su5z)
	};
	b9i.cku3x = function() {
		var D0x = this.gg2x.value;
		if (this.lQ3x.className.indexOf("dis") >= 0) return;
		if (!this.Hg0x() || !this.Di9Z()) return;
		if (l0x.kz3x(D0x)) {
			n0x.Z0x.J0x({
				type: 2,
				tip: "输入点内容再提交吧"
			});
			return
		}
		if (k9b.fx2x(D0x) > 2 * this.bfC8u) {
			n0x.Z0x.J0x({
				type: 2,
				tip: "输入不能超过" + this.bfC8u + "个字符"
			});
			return
		}
		return !0
	};
	b9i.ckt3x = function() {
		a8i.y0x(this.lQ3x, "u-btn-1-dis");
		if (this.lQ3x.innerText.indexOf("...") < 0) {
			this.lQ3x.innerText = this.lQ3x.innerText + "..."
		}
		this.sV6P = !0
	};
	b9i.zZ8R = function() {
		if (!this.sV6P) return;
		this.sV6P = !1;
		a8i.x0x(this.lQ3x, "u-btn-1-dis");
		var cJ1x = this.lQ3x.innerText;
		this.lQ3x.innerText = cJ1x.substring(0, cJ1x.length - 3)
	};
	b9i.mi4m = function() {
		this.oK4O = gw2x.uE6y(this.gg2x)
	};
	b9i.tG6A = function(hG2x) {
		h9c.bg0x(hG2x);
		var D0x = this.gg2x.value;
		if (!this.z0x("onbeforesubmit", {
			value: D0x
		})) return;
		if (this.ev1x != 4) this.z0x("onloading");
		gw2x.bJI6C(D0x);
		if (this.hC2x) {
			this.hC2x.Fh9Y()
		}
		if (this.hm2x) {
			this.hm2x.bt0x()
		}
		this.z0x("onsubmit", D0x);
		this.gh2x();
		return false
	};
	b9i.tN6H = function() {
		this.gg2x.value = "";
		this.gh2x()
	};
	b9i.ga2x = function() {
		return this.gg2x.value || ""
	};
	b9i.mQ4U = function() {
		var iQ3x = this.gg2x;
		var u0x = a8i.t0x(iQ3x, "type");
		this.lZ4d = u0x;
		if (!this.Di9Z()) return;
		var bq0x = this.ga2x().length;
		this.gg2x.focus();
		gw2x.XJ6D(this.gg2x, {
			start: bq0x,
			end: bq0x
		});
		this.mi4m()
	};
	b9i.bxt3x = function(d9g) {
		h9c.bg0x(d9g);
		if (!this.Di9Z()) return; !! this.hm2x && this.hm2x.bt0x();
		this.hC2x.Rz4D();
		this.gh2x()
	};
	b9i.bxu3x = function(d9g) {
		h9c.bg0x(d9g);
		if (!this.Di9Z()) return;
		if (!this.hm2x) {
			this.hm2x = n0x.KY1x.A0x({
				parent: this.bxn3x,
				rightwards: this.ev1x == 6
			});
			this.hm2x.s0x("onselect", this.xK7D.f9e(this));
			a8i.ba0x(this.hm2x.lC3x().parentNode, "position", "relative")
		}
		this.hm2x.J0x();
		this.z0x("onemotlayershow");
		if (this.hC2x) {
			this.hC2x.Fh9Y()
		}
	};
	b9i.xK7D = function(d9g) {
		var bo0x = "[" + d9g.text + "]";
		h9c.z0x(this.gg2x, "focus");
		this.gg2x.focus();
		gw2x.La1x(this.gg2x, this.oK4O, bo0x);
		this.gh2x();
		h9c.z0x(this.gg2x, "keyup")
	};
	b9i.fW2x = function(d9g) {
		dw1x.dr1x.browser == "ie" && dw1x.dr1x.version < "7.0" ? setTimeout(this.gh2x.f9e(this), 0) : this.gh2x()
	};
	b9i.vi6c = function(d9g) {
		this.mi4m();
		if (this.bEQ4U) this.ckr3x();
		this.fW2x()
	};
	b9i.Hg0x = function() {
		if (!GUser || !GUser.userId || GUser.userId < 0) {
			top.login();
			return
		}
		return true
	};
	b9i.lq3x = function(d9g) {
		var g9d = h9c.X0x(d9g, "d:type");
		var u0x = a8i.t0x(g9d, "type");
		this.lZ4d = u0x;
		if (!this.Hg0x()) {
			this.gg2x.blur();
			return
		}
		if (!this.Di9Z()) {
			this.gg2x.blur();
			return
		}
		this.z0x("onfocus")
	};
	b9i.nP4T = function() {
		this.z0x("onblur")
	};
	b9i.gh2x = function() {
		var bq0x = this.bfC8u - Math.ceil(k9b.fx2x(this.gg2x.value) / 2);
		this.ckV3x.innerHTML = bq0x >= 0 ? bq0x : '<em class="s-fc6">' + bq0x + "</em>"
	};
	b9i.ckr3x = function() {
		var GP0x = 76;
		var ckq3x = function() {
				if (parseInt(ce0x) > GP0x) {
					a8i.ba0x(this.gg2x, "height", "auto");
					a8i.ba0x(this.gg2x, "height", GP0x + "px");
					a8i.ba0x(this.gg2x, "overflowY", "scroll")
				} else {
					a8i.ba0x(this.gg2x, "height", "auto");
					a8i.ba0x(this.gg2x, "height", ce0x);
					a8i.ba0x(this.gg2x, "overflowY", "hidden")
				}
			}.f9e(this);
		var ue6Y = function(string, number) {
				for (var i = 0, r = ""; i < number; i++) r += string;
				return r
			};
		this.Kn1x.innerHTML = this.gg2x.value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/\n$/, "<br/>&nbsp;").replace(/\n/g, "<br/>").replace(/ {2,}/g, function(space) {
			return ue6Y("&nbsp;", space.length - 1) + " "
		}) + "&nbsp";
		var ce0x = this.Kn1x.offsetHeight > this.Kk1x ? this.Kn1x.offsetHeight : this.Kk1x;
		ce0x += "px";
		var cJs9j = a8i.df1x(this.gg2x, "height");
		setTimeout(ckq3x, 10)
	};
	b9i.Tj4n = function() {
		var pC5H = ["overflowX", "overflowY", "fontSize", "fontFamily", "lineHeight"];
		for (var i = 0; i < pC5H.length; i++) {
			a8i.ba0x(this.Kn1x, pC5H[i], a8i.df1x(this.gg2x, pC5H[i]))
		}
		var cF1x = this.gg2x.offsetWidth - parseInt(a8i.df1x(this.gg2x, "paddingLeft")) - parseInt(a8i.df1x(this.gg2x, "paddingRight")) + "px";
		a8i.ba0x(this.Kn1x, "width", cF1x)
	};
	b9i.ckG3x = function() {
		if (this.bEQ4U) {
			if (!a8i.H0x(document.body, "shadow-textarea")[0]) {
				var dU1x = '<div style="position:absolute;border: none;left:-10000px;word-wrap: break-word;overflow: hidden;resize:none" class="shadow-textarea"></div>';
				var g9d = a8i.nR4V(dU1x);
				document.body.appendChild(g9d);
				this.Kn1x = a8i.H0x(document.body, "shadow-textarea")[0]
			} else {
				this.Kn1x = a8i.H0x(document.body, "shadow-textarea")[0]
			}
			this.Kk1x = parseInt(a8i.df1x(this.gg2x, "height"));
			a8i.ba0x(this.gg2x, "overflow", "hidden");
			this.Tj4n()
		}
	};
	b9i.Di9Z = function() {
		var d9g = {};
		if (this.gz2x && this.gz2x.buyed != true && this.gz2x.programFeeType >= 10 || this.gz2x && this.gz2x.buyed != true && this.gz2x.programFeeType == 5 && this.gz2x.radio.radioFeeType == 2 || this.gz2x && this.gz2x.buyed != true && this.gz2x.radio.feeScope == 1 && !(this.gz2x.radio.radioFeeType == 0 && this.lZ4d == 11)) {
			var bkk9b = this.gz2x.radio.id,
				bkj9a = "djradio";
			l0x.bjU9L({
				id: bkk9b,
				radiotype: bkj9a
			})
		} else {
			this.z0x("oncheckvalid", d9g);
			return !d9g.stopped
		}
	}
})();
(function() {
	var c9h = NEJ.P,
		bb0x = NEJ.O,
		k9b = c9h("nej.u"),
		h9c = c9h("nej.v"),
		I0x = c9h("nej.ut"),
		l0x = c9h("nm.x"),
		q0x = c9h("nm.d"),
		n0x = c9h("nm.l"),
		b9i, L0x;
	q0x.fq2x({
		"message_chat-add": {
			url: "/api/msg/private/send",
			filter: function(e9f) {
				this.Jw1x(e9f, 0)
			},
			format: function(m0x, e9f) {
				this.bqG1x(m0x.newMsgs);
				if (e9f.justSend) {
					return m0x
				} else {
					return m0x.newMsgs.reverse()
				}
			},
			finaly: function(d9g, e9f) {
				if (!d9g) return;
				if (!e9f.justSend) {
					h9c.z0x(q0x.mI4M, "listchange", {
						key: e9f.key,
						action: "unshift",
						limit: d9g.limit,
						offset: 0
					})
				}
				this.z0x("onafteritemaddd")
			},
			onmessage: function(bY0x) {
				var cW1x = "";
				if (bY0x == 407) {
					cW1x = "发送内容中不得包含非法字符"
				} else if (bY0x == 406 || bY0x == 405) {
					cW1x = "输入过于频繁，请稍后再试"
				} else if (bY0x == 408) {
					cW1x = "请不要重复发送"
				} else if (bY0x == 315) {
					cW1x = "根据对方设置，你没有该操作权限"
				}
				if ( !! cW1x) n0x.Z0x.J0x({
					tip: cW1x,
					type: 2
				})
			}
		},
		"message_chat-del": {
			url: "/api/msg/private/delete/single",
			format: function(Q0x, e9f) {
				return Q0x.code == 200
			},
			finaly: function(d9g, e9f) {
				h9c.z0x(q0x.mI4M, "listchange", {
					key: e9f.key,
					action: "delete",
					data: e9f.data
				});
				this.z0x("onafteritemdelete")
			},
			onmessage: function(bY0x) {}
		},
		"message_chat-list": {
			url: "/api/msg/private/history",
			filter: function(e9f) {
				this.Jw1x(e9f);
				delete e9f.data.offset
			},
			format: function(m0x, e9f) {
				var To4s = m0x.msgs;
				this.bqG1x(To4s);
				if (m0x.more) {
					for (var i = To4s.length; i < e9f.limit; i++) {
						To4s.push(null)
					}
				} else {
					return {
						total: e9f.offset + e9f.limit,
						list: To4s
					}
				}
				return To4s
			}
		},
		"message_chat-pull": {
			url: "/api/msg/private/new",
			filter: function(e9f) {
				this.Jw1x(e9f, 0)
			},
			format: function(m0x) {
				return m0x.msgs
			}
		},
		"message_private-list": {
			url: "/api/msg/private/users",
			filter: function(e9f) {},
			format: function(m0x, e9f) {
				var cB0x = m0x.size || 0,
					i9b = m0x.msgs;
				this.bqJ1x(i9b);
				if (e9f.offset + e9f.limit < cB0x) {
					i9b.length = e9f.limit
				}
				return {
					total: cB0x,
					list: i9b
				}
			}
		},
		"message_private-pull": {
			url: "/api/msg/private/users",
			filter: function(e9f) {
				e9f.data.time = -1
			},
			format: function(m0x, e9f) {
				this.vA7t(e9f.key);
				this.bqJ1x(m0x.msgs);
				return m0x.msgs
			}
		},
		"message_private-del": {
			type: "GET",
			url: "/api/msg/private/delete",
			filter: function(e9f) {
				var C0x = e9f.id;
				if (C0x) e9f.data = {
					userId: C0x.split("-")[1]
				}
			},
			format: function(Q0x, e9f) {
				return Q0x
			},
			finaly: function(d9g, e9f) {
				h9c.z0x(q0x.mI4M, "listchange", {
					key: e9f.key,
					action: "refresh"
				})
			},
			onmessage: function(bY0x) {}
		},
		"message_comment-list": {
			url: "/api/v1/user/comments/{uid}",
			filter: function(e9f) {
				this.Jw1x(e9f);
				e9f.data.beforeTime = e9f.data.time;
				delete e9f.data.time;
				delete e9f.data.offset
			},
			format: function(m0x, e9f) {
				if (e9f.data.offset == 0) this.z0x("onnewcount", m0x.newCount);
				this.cjL3x(m0x);
				return {
					list: m0x.comments
				}
			}
		},
		"message_comment-del": {
			url: "/api/user/comments/delete",
			finaly: function(d9g, e9f) {
				h9c.z0x(q0x.mI4M, "listchange", {
					key: e9f.key,
					action: "refresh"
				})
			}
		},
		"message_user_comment-reply": {
			url: "/api/user/comments/reply",
			format: function(Q0x) {
				this.z0x("onreply");
				n0x.Z0x.J0x({
					tip: "回复成功"
				});
				return Q0x
			},
			onmessage: function(bY0x, m0x) {
				if (bY0x == 250) {
					n0x.Z0x.J0x({
						tip: m0x.message || m0x.msg || "评论异常",
						type: 2
					});
					return
				}
				n0x.Z0x.J0x({
					tip: "回复失败，请稍后再试",
					type: 2
				})
			}
		},
		"message_resource_comment-reply": {
			url: "/api/resource/comments/reply",
			onmessage: function(bY0x, m0x) {
				if (bY0x == 250) {
					n0x.Z0x.J0x({
						tip: m0x.message || m0x.msg || "评论异常",
						type: 2
					});
					return
				}
			}
		},
		"message_notify-list": {
			url: "/api/msg/notices",
			filter: function(e9f) {
				this.Jw1x(e9f);
				delete e9f.data.offset
			},
			format: function(m0x, e9f) {
				if (e9f.data.offset == 0) this.z0x("onnewcount", m0x.newCount);
				this.cjF3x(m0x);
				return {
					list: m0x.notices
				}
			}
		},
		"message_notify-del": {
			url: "TODO",
			format: function(Q0x, e9f) {
				return e9f.ext
			},
			finaly: function(d9g, e9f) {
				h9c.z0x(q0x.mI4M, "listchange", {
					key: e9f.key,
					action: "refresh"
				})
			},
			onmessage: function(bY0x) {
				l0x.bny0x({
					txt: "通知删除失败！"
				})
			}
		},
		"message_at-list": {
			url: "/api/forwards/get",
			filter: function(e9f) {},
			format: function(m0x, e9f) {
				k9b.bd0x(m0x.forwards, function(p0x, r0x) {
					p0x.isNew = r0x < m0x.newCount
				});
				m0x.forwards.length = e9f.limit;
				return {
					total: m0x.size,
					list: m0x.forwards
				}
			}
		},
		"message_at-pull": {
			url: "/api/forwards/get",
			filter: function(e9f) {
				this.Jw1x(e9f, 0)
			},
			format: function(m0x, e9f) {
				return m0x.forwards
			}
		},
		"message_at-del": {
			url: "TODO",
			format: function(Q0x, e9f) {
				return e9f.ext
			},
			finaly: function(d9g, e9f) {
				h9c.z0x(q0x.mI4M, "listchange", {
					key: e9f.key,
					action: "refresh"
				})
			},
			onmessage: function(bY0x) {
				l0x.bny0x({
					txt: "@消息删除失败！"
				})
			}
		},
		"event-like": {
			url: "/api/resource/like",
			onload: "oneventlike",
			filter: function(e9f, bh0x) {
				if (e9f.like) {
					bh0x.url = "/api/resource/like";
					bh0x.onload = "oneventlike"
				} else {
					bh0x.url = "/api/resource/unlike";
					bh0x.onload = "oneventunlike"
				}
			},
			format: function(m0x, e9f) {
				m0x.id = e9f.id;
				m0x.isInner = !! e9f.isInner;
				return m0x
			}
		}
	});
	q0x.mI4M = NEJ.C();
	b9i = q0x.mI4M.N0x(q0x.hJ2x);
	L0x = q0x.mI4M.cs0x;
	b9i.zi8a = function(e9f, p0x) {
		if (!k9b.eL1x(p0x)) {
			return L0x.zi8a.apply(this, arguments)
		}
		k9b.bd0x(p0x, function(j9a) {
			L0x.zi8a.apply(this, [e9f, j9a])
		}, this);
		return {
			limit: p0x.length
		}
	};
	b9i.cjz3x = function(p0x) {
		if (!k9b.eL1x(p0x)) {
			if (p0x.type == 1) {
				p0x.json = this.bBi4m(p0x.json, p0x.id)
			} else if (p0x.type == 2) {
				p0x.json = JSON.parse(p0x.json);
				p0x.json.resource = this.bBi4m(p0x.json.resource)
			} else if (p0x.type == 3) {
				p0x.json = JSON.parse(p0x.json)
			}
			return
		}
		k9b.bd0x(p0x, this.cjz3x, this)
	};
	b9i.bBi4m = function(st5y) {
		if (k9b.fG2x(st5y)) {
			st5y = JSON.parse(st5y)
		}
		if ( !! st5y.json && k9b.fG2x(st5y.json)) {
			st5y.json = JSON.parse(st5y.json);
			if ( !! st5y.json.event && !! st5y.json.event.json && k9b.fG2x(st5y.json.event.json)) {
				st5y.json.event.json = JSON.parse(st5y.json.event.json)
			}
		}
		return st5y
	};
	b9i.bqG1x = function(p0x) {
		if (!k9b.eL1x(p0x)) {
			p0x.msg = JSON.parse(p0x.msg);
			return
		}
		k9b.bd0x(p0x, this.bqG1x, this)
	};
	b9i.bqJ1x = function(p0x) {
		if (!k9b.eL1x(p0x)) {
			p0x.id = p0x.toUser.userId + "-" + p0x.fromUser.userId;
			p0x.lastMsg = JSON.parse(p0x.lastMsg);
			return
		}
		k9b.bd0x(p0x, this.bqJ1x, this)
	};
	b9i.cjL3x = function(j9a) {
		var bz0x = {
			0: "/playlist?id={id}",
			1: "/dj?id={id}",
			2: "/event?id={id}&uid={userId}",
			3: "/album?id={id}",
			4: "/song?id={id}",
			5: "/mv?id={id}",
			6: "/topic?id={id}",
			62: "/video?id={id}&toast=true"
		};
		k9b.bd0x(j9a.comments, function(p0x, r0x) {
			try {
				p0x.resourceJson = JSON.parse(p0x.resourceJson)
			} catch (e) {
				p0x.resourceJson = null
			}
			if (p0x.resourceJson) {
				if (p0x.resourceType !== 62 || p0x.resourceJson.id) {
					p0x.resUrl = l0x.beM8E(bz0x[p0x.resourceType], p0x.resourceJson)
				}
			}
		}, this)
	};
	b9i.cjF3x = function() {
		var cih2x = function(bP0x) {
				var Q0x, cM1x = "";
				try {
					Q0x = JSON.parse(bP0x.json)
				} catch (e) {
					Q0x = {}
				}
				switch (bP0x.type) {
				case 12:
					cM1x = "我创建了歌单";
					cM1x = cM1x + "「" + Q0x.playlist.name + "」by " + Q0x.playlist.creator.nickname;
					break;
				case 13:
					cM1x = "我分享了歌单";
					cM1x = cM1x + "「" + k9b.dG1x(Q0x.playlist.name) + "」by " + Q0x.playlist.creator.nickname;
					break;
				case 14:
					cM1x = "我收藏了歌单";
					cM1x = cM1x + "「" + k9b.dG1x(Q0x.playlist.name) + "」by " + Q0x.playlist.creator.nickname;
					break;
				case 15:
				case 16:
					cM1x = "我创建了节目";
					cM1x = cM1x + "「" + Q0x.program.name + "」by " + Q0x.program.dj.nickname;
					break;
				case 17:
					cM1x = "我分享了节目";
					cM1x = cM1x + "「" + Q0x.program.name + "」by " + Q0x.program.dj.nickname;
					break;
				case 18:
					cM1x = "我分享了歌曲";
					cM1x = cM1x + "「" + Q0x.song.name + "」by ";
					for (var i = 0, l = Q0x.song.artists.length; i < l; i++) {
						cM1x = cM1x + Q0x.song.artists[i].name;
						if (i < l - 1) cM1x = cM1x + "/"
					}
					break;
				case 19:
					cM1x = "我分享了专辑";
					cM1x = cM1x + "「" + Q0x.album.name + "」by " + Q0x.album.artist.name;
					break;
				case 36:
					cM1x = "我分享了歌手";
					cM1x = cM1x + "「" + Q0x.resource.name + "」";
					break;
				case 21:
					cM1x = "我分享了MV";
					cM1x = cM1x + "「" + Q0x.mv.name + "」by " + Q0x.mv.artistName;
					break;
				case 22:
					cM1x = "我的动态:" + (l0x.xD7w(k9b.dG1x(Q0x.msg), "s-fc3") || "转发");
					break;
				case 23:
					cM1x = "我收藏了节目";
					cM1x = cM1x + "「" + Q0x.program.name + "」by " + Q0x.program.dj.nickname;
					break;
				case 24:
					cM1x = "我分享了专栏文章";
					cM1x = cM1x + "「" + Q0x.topic.mainTitle + "」";
					break;
				case 28:
					cM1x = "我分享了电台";
					cM1x = cM1x + "「" + Q0x.djRadio.name + "」by " + Q0x.djRadio.dj.nickname;
					break;
				case 31:
					cM1x = "我分享了评论：";
					cM1x = cM1x + l0x.xD7w((Q0x.resource || bb0x).content || "");
					break;
				case 35:
					cM1x = "我的动态:" + l0x.xD7w(k9b.dG1x(Q0x.msg), "s-fc3") + (bP0x.pics && bP0x.pics.length ? "[图片]" : "");
					break;
				case 39:
					cM1x = "我发布了视频";
					cM1x = cM1x + "「" + Q0x.video.title + "」";
					break;
				case 41:
					cM1x = "我分享了视频";
					cM1x = cM1x + "「" + Q0x.video.title + "」";
					break
				}
				Q0x.str = cM1x;
				return Q0x
			};
		var chE2x = function(Gg0x) {
				var bz0x = {
					A_PL_0: "playlist",
					R_MV_5: "mv",
					A_TO_6: "topic",
					A_DJ_1: "dj",
					A_EV_2: "event",
					R_AL_3: "album",
					R_SO_4: "song",
					A_DR_14: "radio",
					R_VI_62: "video"
				};
				if (/^(\w_\w{2}_\d+)+_(.+)$/.test(Gg0x)) {
					var u0x = bz0x[RegExp.$1],
						cm0x = RegExp.$2.split("_");
					return "/" + u0x + "?id=" + cm0x[0] + (u0x == "event" ? "&uid=" + cm0x[1] : "") + "&_hash=comment-box&toast=true"
				}
			};
		var chd2x = function(eE1x) {
				var eE1x = JSON.parse(eE1x);
				switch (eE1x.type) {
				case 1:
					if (!eE1x.track) return;
					eE1x.msg = "赞了你的动态";
					eE1x.url = "/event?toast=true&id=" + eE1x.track.id + "&uid=" + GUser.userId;
					eE1x.track = cih2x(eE1x.track);
					break;
				case 2:
					eE1x.msg = "收藏了你的歌单";
					eE1x.url = "/playlist?id=" + eE1x.playlist.id;
					eE1x.res = eE1x.playlist;
					break;
				case 3:
					eE1x.msg = "分享了你的歌单";
					eE1x.url = "/playlist?id=" + eE1x.playlist.id;
					eE1x.res = eE1x.playlist;
					break;
				case 4:
					eE1x.msg = "分享了你的节目";
					eE1x.url = "/dj?id=" + eE1x.program.id;
					eE1x.res = eE1x.program;
					break;
				case 5:
					eE1x.msg = "收藏了你的节目";
					eE1x.url = "/dj?id=" + eE1x.program.id;
					eE1x.res = eE1x.program;
					break;
				case 6:
					eE1x.msg = "赞了你的评论";
					eE1x.url = chE2x(eE1x.comment.threadId);
					eE1x.comment = eE1x.comment;
					break;
				case 7:
					eE1x.msg = "赞了你的节目";
					eE1x.url = "/dj?id=" + eE1x.program.id;
					eE1x.res = eE1x.program;
					break;
				case 8:
					eE1x.msg = "订阅了你的电台";
					eE1x.url = "/radio?id=" + eE1x.djRadio.id;
					eE1x.res = eE1x.djRadio;
					break;
				case 9:
					eE1x.msg = "赞了你的专栏文章";
					eE1x.url = "/topic?id=" + eE1x.topic.id;
					eE1x.topic = eE1x.topic;
					break;
				case 10:
					if (!eE1x.generalNotice) return;
					eE1x.msg = eE1x.generalNotice.actionDesc;
					eE1x.url = eE1x.generalNotice.webUrl;
					if (eE1x.url.indexOf("/video?id=") == 0) {
						eE1x.url += "&toast=true"
					}
					eE1x.generalContent = eE1x.generalNotice.content;
					break
				}
				return eE1x
			};
		return function(j9a) {
			k9b.bd0x(j9a.notices, function(p0x, r0x) {
				p0x.notice = chd2x(p0x.notice)
			}, this)
		}
	}();
	b9i.Jw1x = function(e9f, r0x, K0x) {
		var bA0x = -1,
			i9b = this.hv2x(e9f.key),
			bi0x = e9f.offset;
		bi0x = bi0x != null ? bi0x : i9b.length;
		if (bi0x > 0 && i9b.length > 0) {
			var chc2x = 0;
			r0x = r0x != null ? r0x : bi0x - 1;
			while (r0x >= 0 && !i9b[r0x]) {
				r0x--;
				chc2x++
			}
			if (r0x >= 0 && i9b[r0x]) {
				bA0x = i9b[r0x][K0x || "time"]
			}
		}
		e9f.data.time = bA0x
	};
	b9i.cgY2x = function(e9f) {
		e9f.onload = this.bBe4i.f9e(this);
		e9f.onerror = this.bBe4i.f9e(this);
		this.cp0x("message_resource_comment-reply", e9f)
	};
	b9i.bBe4i = function(d9g) {
		this.z0x("onreply2", d9g)
	};
	b9i.bxS3x = function(e9f) {
		this.cp0x("message_user_comment-reply", e9f)
	};
	b9i.GV0x = function(d9g) {
		this.z0x("onreply", d9g)
	};
	b9i.bpN1x = function(e9f) {
		e9f.onload = this.Tv5A.f9e(this);
		this.cp0x("message_chat-add", e9f)
	};
	b9i.Tv5A = function(d9g) {
		this.z0x("onsend", d9g)
	};
	b9i.pr5w = function(e9f) {
		this.cp0x("event-like", e9f)
	};
	I0x.fK2x.A0x({
		element: q0x.mI4M,
		event: "listchange"
	})
})();
(function() {
	var c9h = NEJ.P,
		a8i = c9h("nej.e"),
		v0x = c9h("nej.j"),
		bb0x = c9h("nej.o"),
		k9b = c9h("nej.u"),
		h9c = c9h("nej.v"),
		dw1x = c9h("nej.p"),
		w0x = c9h("nm.w"),
		l0x = c9h("nm.x"),
		bD0x = c9h("nej.ui"),
		q0x = c9h("nm.d"),
		n0x = c9h("nm.l"),
		b9i, L0x;
	n0x.wB7u = NEJ.C();
	b9i = n0x.wB7u.N0x(n0x.ep1x, !0);
	L0x = n0x.wB7u.prototype;
	b9i.ch0x = function() {
		this.cg0x = "m-msg-private-send"
	};
	b9i.bW0x = function() {
		this.ci0x();
		var bS0x = a8i.H0x(this.o0x, "j-flag");
		this.uk6e = {
			parent: bS0x[1],
			err: bS0x[0]
		};
		this.fh2x = {
			parent: bS0x[2],
			type: 4,
			nomention: true,
			numLimit: 200,
			onsubmit: this.Tw5B.f9e(this)
		};
		if (dw1x.dr1x.browser == "ie" && dw1x.dr1x.version < "8.0") {
			a8i.ba0x(bS0x[0], "position", "relative");
			a8i.ba0x(bS0x[0], "zIndex", "10")
		}
	};
	b9i.bl0x = function(e9f) {
		e9f.parent = document.body;
		e9f.clazz = "";
		e9f.onclose = function() {
			this.bC0x()
		}.f9e(this);
		e9f.mask = true;
		this.bn0x(e9f); !! e9f.receiver && (this.uk6e.receiver = e9f.receiver);
		this.pp4t = w0x.EU9L.A0x(this.uk6e);
		this.eg1x = w0x.Dx9o.A0x(this.fh2x);
		this.S0x = q0x.mI4M.A0x({
			onsend: this.Tv5A.f9e(this),
			onerror: function() {
				this.eg1x.zZ8R()
			}.f9e(this)
		})
	};
	b9i.bC0x = function() {
		this.bF0x();
		if ( !! this.pp4t) {
			this.pp4t.T0x();
			delete this.pp4t
		}
		if ( !! this.eg1x) {
			this.eg1x.T0x();
			delete this.eg1x
		}
	};
	b9i.Tw5B = function(D0x) {
		if ( !! D0x) {
			var SB4F = this.pp4t.SQ4U();
			if ( !! SB4F.length) {
				this.S0x.bpN1x({
					data: {
						type: "text",
						msg: D0x,
						userIds: JSON.stringify(SB4F)
					},
					justSend: true
				});
				this.eg1x.z0x("onloading")
			} else {
				l0x.ft2x({
					title: "提示",
					message: "请选择私信发送对象"
				})
			}
		} else {
			l0x.ft2x({
				title: "提示",
				message: "私信内容不能为空"
			})
		}
	};
	b9i.Tv5A = function(m0x) {
		this.bt0x();
		if (m0x.code == 200) {
			n0x.Z0x.J0x({
				tip: "发送成功"
			})
		} else {
			n0x.Z0x.J0x({
				tip: "发送失败",
				type: 2
			})
		}
	}
})();
(function() {
	var c9h = NEJ.P,
		a8i = c9h("nej.e"),
		h9c = c9h("nej.v"),
		k9b = c9h("nej.u"),
		I0x = c9h("nej.ut"),
		E0x = c9h("nm.m"),
		q0x = c9h("nm.d"),
		M0x = c9h("nm.m.personal"),
		n0x = c9h("nm.l"),
		l0x = c9h("nm.x"),
		b9i, L0x;
	M0x.Sq4u = NEJ.C();
	b9i = M0x.Sq4u.N0x(E0x.dg1x);
	b9i.bK0x = function() {
		this.bR0x();
		a8i.cX1x("template-box");
		a8i.tW6Q("ava", "z-hvr");
		var bxL3x = a8i.B0x("age");
		if ( !! bxL3x) bxL3x.lastChild.innerHTML = this.caV1x(a8i.t0x(bxL3x, "age"));
		this.of4j = a8i.dm1x("head-oper");
		if ( !! this.of4j) {
			var Fg9X = nej.p.dr1x.browser == "ie";
			h9c.s0x(this.of4j[1], Fg9X ? "mouseenter" : "mouseover", function(d9g) {
				this.of4j[1].firstChild.innerText = "取消关注"
			}.f9e(this));
			h9c.s0x(this.of4j[1], Fg9X ? "mouseleave" : "mouseout", function(d9g) {
				this.of4j[1].firstChild.innerText = "已关注"
			}.f9e(this));
			h9c.s0x(this.of4j[2], Fg9X ? "mouseenter" : "mouseover", function(d9g) {
				this.of4j[2].firstChild.innerText = "取消关注"
			}.f9e(this));
			h9c.s0x(this.of4j[2], Fg9X ? "mouseleave" : "mouseout", function(d9g) {
				this.of4j[2].firstChild.innerText = "相互关注"
			}.f9e(this));
			h9c.s0x("head-oper", "click", this.caY1x.f9e(this))
		}
		h9c.s0x("main-box", "click", this.caZ1x.f9e(this));
		l0x.nN4R();
		this.S0x = q0x.Sk4o.A0x({
			onfollow: this.bye3x.f9e(this, 1),
			ondelfollow: this.bye3x.f9e(this, -1)
		});
		this.bxw3x = a8i.B0x("fan_count");
		this.bKs6m = a8i.B0x("fan_count_down");
		this.bxk3x = a8i.B0x("follow_count");
		this.bKu6o = a8i.B0x("follow_count_down");
		this.bKv6p = a8i.B0x("newCount");
		h9c.s0x(q0x.tT6N, "message", this.cbg1x.f9e(this))
	};
	b9i.cbg1x = function(j9a) {
		if (j9a.code == 200 && window.visitorId == window.hostId) {
			this.bKv6p.style.display = !! j9a.follow ? "" : "none"
		} else {
			this.bKv6p.style.display = "none"
		}
	};
	b9i.caZ1x = function(d9g) {
		var g9d = h9c.X0x(d9g, "d:account");
		if (a8i.t0x(g9d, "account") == "deleted") {
			g9d = h9c.X0x(d9g);
			if (a8i.df1x(g9d, "cursor") == "pointer") {
				n0x.nz4D({
					title: "帐号已注销",
					mesg: "该用户已主动注销帐号"
				});
				h9c.bg0x(d9g);
				return
			}
		}
		g9d = h9c.X0x(d9g, "d:action");
		if (!g9d) return;
		h9c.bg0x(d9g);
		switch (a8i.t0x(g9d, "action")) {
		case "send":
			this.YP6J({
				userId: a8i.t0x(g9d, "userid"),
				nickname: a8i.t0x(g9d, "nickname")
			});
			break;
		case "follow":
			this.bwS2x = a8i.t0x(g9d, "userid");
			l0x.rS5X(this.cbj1x.f9e(this));
			break
		}
	};
	b9i.cbj1x = function(cH1x) {
		this.Zc6W({
			userId: this.bwS2x,
			checkToken: cH1x || ""
		});
		delete this.bwS2x
	};
	b9i.caY1x = function(d9g) {
		var g9d = h9c.X0x(d9g, "d:action");
		if (!g9d) return;
		h9c.bg0x(d9g);
		switch (a8i.t0x(g9d, "action")) {
		case "send":
			this.YP6J({
				userId: window.hostId,
				nickname: profile.nickname
			});
			break;
		case "delfollow":
			this.cbl1x({
				userId: window.hostId
			});
			break;
		case "follow":
			l0x.rS5X(this.cbm1x.f9e(this));
			break
		}
	};
	b9i.cbm1x = function(cH1x) {
		this.Zc6W({
			userId: window.hostId,
			checkToken: cH1x || ""
		});
		delete this.bwS2x
	};
	b9i.YP6J = function(e9f) {
		if ( !! GUser && GUser.userId > 0) {
			if ( !! this.pN5S) this.pN5S.T0x();
			this.pN5S = n0x.wB7u.A0x({
				title: "发新私信",
				draggable: true,
				clazz: "m-layer m-layer-w2",
				receiver: {
					userId: e9f.userId,
					nickname: e9f.nickname
				}
			});
			this.pN5S.J0x()
		} else {
			top.login()
		}
	};
	b9i.Zc6W = function(e9f) {
		if ( !! GUser && GUser.userId > 0) {
			this.S0x.Ta4e({
				data: {
					followId: e9f.userId,
					checkToken: e9f.checkToken
				}
			})
		} else {
			top.login()
		}
	};
	b9i.cbl1x = function(e9f) {
		if ( !! GUser && GUser.userId > 0) {
			this.S0x.caS1x({
				data: {
					followId: e9f.userId
				}
			})
		} else {
			top.login()
		}
	};
	b9i.bye3x = function(eY2x, m0x) {
		if (m0x.code == 250) {
			n0x.Z0x.J0x({
				tip: m0x.message || m0x.msg || "关注异常",
				type: 2
			})
		}
		if (this.dM1x) {
			if (m0x.user.userId == window.hostId && this.cf0x.cache.lkey == "followeds") {
				this.cf0x.cache.total += eY2x
			}
			if (this.cf0x.cache.lkey == "follows") {
				this.S0x.vA7t("follows");
				this.S0x.Qe3x("follows", this.cf0x.cache.total)
			} else if (this.cf0x.cache.lkey == "followeds") {
				this.S0x.vA7t("followeds");
				this.S0x.Qe3x("followeds", this.cf0x.cache.total)
			}
			this.dM1x.gI2x()
		}
		if (m0x.user.userId == window.hostId) {
			for (var i = 0; i < this.of4j.length; i++) {
				this.of4j[i].style.display = "none"
			}
			if ( !! m0x.user.mutual) {
				this.of4j[0].style.display = "";
				this.of4j[2].style.display = ""
			} else if ( !! m0x.user.followed) {
				this.of4j[0].style.display = "";
				this.of4j[1].style.display = ""
			} else {
				this.of4j[0].style.display = "";
				this.of4j[3].style.display = ""
			}
		}
		if (window.hostId == window.visitorId) {
			var cz0x = parseInt(this.bxk3x.innerHTML) + eY2x;
			this.bxk3x.innerHTML = cz0x;
			if (this.bKu6o) this.bKu6o.innerHTML = cz0x
		} else {
			if (window.hostId == m0x.user.userId) {
				var cz0x = parseInt(this.bxw3x.innerHTML) + eY2x;
				this.bxw3x.innerHTML = cz0x;
				if (this.bKs6m) this.bKs6m.innerHTML = cz0x
			}
		}
	};
	b9i.caV1x = function(yh7a) {
		if (k9b.fG2x(yh7a)) yh7a = parseInt(yh7a);
		var Bb8T, Zy6s;
		yh7a = new Date(yh7a);
		yh7a = yh7a.getFullYear();
		Bb8T = yh7a % 10;
		Zy6s = yh7a % 100;
		Zy6s = parseInt(Zy6s / 10);
		return Zy6s + "" + (Bb8T >= 5 ? 5 : 0) + "后"
	};
	b9i.eD1x = function(e9f) {
		this.gi2x(e9f)
	}
})();
(function() {
	var c9h = NEJ.P,
		bb0x = NEJ.O,
		a8i = c9h("nej.e"),
		h9c = c9h("nej.v"),
		k9b = c9h("nej.u"),
		I0x = c9h("nej.ut"),
		v0x = c9h("nej.j"),
		q0x = c9h("nm.d"),
		E0x = c9h("nm.m"),
		w0x = c9h("nm.w"),
		M0x = c9h("nm.m.personal"),
		b9i, L0x;
	M0x.bKx6r = NEJ.C();
	b9i = M0x.bKx6r.N0x(M0x.Sq4u);
	b9i.bK0x = function() {
		this.bR0x();
		this.Al8d = a8i.B0x("page");
		this.JR1x()
	};
	b9i.JR1x = function() {
		var cB0x = parseInt(this.bxw3x.innerHTML);
		this.cf0x = {
			limit: 20,
			parent: "main-box",
			pager: {
				parent: this.Al8d,
				clazz: "u-page"
			},
			item: {
				klass: "m-profile-fans-item"
			},
			cache: {
				clear: true,
				lkey: "followeds",
				data: {
					userId: window.hostId
				},
				klass: q0x.Sk4o,
				total: cB0x > 1e3 ? 1e3 : cB0x,
				onnewcount: function(bfu8m) {
					a8i.B0x("newCount").style.display = !! bfu8m ? "" : "none"
				}
			},
			onbeforelistload: function(d9g) {
				d9g.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
			},
			onemptylist: function(d9g) {
				this.Al8d.innerHTML = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>还没有粉丝</h3></div>';
				this.Al8d.style.display = "";
				d9g.value = " "
			}.f9e(this)
		};
		if ( !! this.dM1x) this.dM1x.T0x();
		this.dM1x = I0x.kk3x.A0x(this.cf0x)
	};
	new M0x.bKx6r
})()