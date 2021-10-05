!(function () {
	"use strict";
	if ("querySelector" in document && "addEventListener" in window) {
		Element.prototype.matches ||
			(Element.prototype.matches =
				Element.prototype.msMatchesSelector ||
				Element.prototype.webkitMatchesSelector),
			Element.prototype.closest ||
				(Element.prototype.closest = function (e) {
					var t = this;
					if (!document.documentElement.contains(this)) return null;
					do {
						if (t.matches(e)) return t;
						t = t.parentElement;
					} while (null !== t);
					return null;
				});
		for (
			var e = document.querySelectorAll(".menu-toggle"),
				t = document.querySelectorAll("nav .dropdown-menu-toggle"),
				n = document.querySelectorAll("nav ul a"),
				c = document.querySelector(".mobile-menu-control-wrapper"),
				i = document.body,
				u = document.documentElement,
				d = function (e) {
					if (i.classList.contains("dropdown-hover"))
						for (
							var t = e.querySelectorAll("li.menu-item-has-children"), n = 0;
							n < t.length;
							n++
						)
							t[n]
								.querySelector(".dropdown-menu-toggle")
								.removeAttribute("tabindex"),
								t[n]
									.querySelector(".dropdown-menu-toggle")
									.setAttribute("role", "presentation"),
								t[n]
									.querySelector(".dropdown-menu-toggle")
									.removeAttribute("aria-expanded"),
								t[n]
									.querySelector(".dropdown-menu-toggle")
									.removeAttribute("aria-label");
				},
				l = function (e) {
					"false" !== e.getAttribute("aria-expanded") &&
					e.getAttribute("aria-expanded")
						? (e.setAttribute("aria-expanded", "false"),
						  e.setAttribute("aria-label", generatepressMenu.openSubMenuLabel))
						: (e.setAttribute("aria-expanded", "true"),
						  e.setAttribute(
								"aria-label",
								generatepressMenu.closeSubMenuLabel
						  ));
				},
				s = function (e, t) {
					var n,
						s,
						o = "";
					(o = (t = t || this).getAttribute("data-nav")
						? document.getElementById(t.getAttribute("data-nav"))
						: document.getElementById(t.closest("nav").getAttribute("id"))) &&
						((n = !1),
						t.closest(".mobile-menu-control-wrapper") && (n = !0),
						(s = o.getElementsByTagName("ul")[0]),
						o.classList.contains("toggled")
							? (o.classList.remove("toggled"),
							  u.classList.remove("mobile-menu-open"),
							  s.setAttribute("aria-hidden", "true"),
							  t.setAttribute("aria-expanded", "false"),
							  (n || (c && o.classList.contains("main-navigation"))) &&
									c.classList.remove("toggled"),
							  d(s))
							: (o.classList.add("toggled"),
							  u.classList.add("mobile-menu-open"),
							  s.setAttribute("aria-hidden", "false"),
							  t.setAttribute("aria-expanded", "true"),
							  n
									? (c.classList.add("toggled"),
									  c.querySelector(".search-item") &&
											c
												.querySelector(".search-item")
												.classList.contains("active") &&
											c.querySelector(".search-item").click())
									: c &&
									  o.classList.contains("main-navigation") &&
									  c.classList.add("toggled"),
							  (function (e) {
									if (i.classList.contains("dropdown-hover"))
										for (
											var t = e.querySelectorAll("li.menu-item-has-children"),
												n = 0;
											n < t.length;
											n++
										)
											t[n]
												.querySelector(".dropdown-menu-toggle")
												.setAttribute("tabindex", "0"),
												t[n]
													.querySelector(".dropdown-menu-toggle")
													.setAttribute("role", "button"),
												t[n]
													.querySelector(".dropdown-menu-toggle")
													.setAttribute("aria-expanded", "false"),
												t[n]
													.querySelector(".dropdown-menu-toggle")
													.setAttribute(
														"aria-label",
														generatepressMenu.openSubMenuLabel
													);
							  })(s)));
				},
				o = 0;
			o < e.length;
			o++
		)
			e[o].addEventListener("click", s, !1);
		for (
			var r = function (e, t) {
					var n;
					if (
						((t = t || this).closest("nav").classList.contains("toggled") ||
							u.classList.contains("slide-opened")) &&
						!i.classList.contains("dropdown-click")
					) {
						e.preventDefault();
						var s,
							o = t.closest("li");
						if (
							(l(o.querySelector(".dropdown-menu-toggle")),
							(s = o.querySelector(".sub-menu")
								? o.querySelector(".sub-menu")
								: o.querySelector(".children")),
							generatepressMenu.toggleOpenedSubMenus)
						)
							for (
								var r =
										((n = o),
										Array.prototype.filter.call(
											n.parentNode.children,
											function (e) {
												return e !== n;
											}
										)),
									a = 0;
								a < r.length;
								a++
							)
								r[a].classList.contains("sfHover") &&
									(r[a].classList.remove("sfHover"),
									r[a]
										.querySelector(".toggled-on")
										.classList.remove("toggled-on"),
									l(r[a].querySelector(".dropdown-menu-toggle")));
						o.classList.toggle("sfHover"), s.classList.toggle("toggled-on");
					}
					e.stopPropagation();
				},
				o = 0;
			o < t.length;
			o++
		)
			t[o].addEventListener("click", r, !1),
				t[o].addEventListener(
					"keypress",
					function (e) {
						13 === (e.which || e.keyCode) && r(e, this);
					},
					!1
				);
		var a = function () {
			for (
				var e = document.querySelectorAll(".toggled, .has-active-search"),
					t = 0;
				t < e.length;
				t++
			) {
				var n = e[t].querySelector(".menu-toggle");
				if (
					(c &&
						!n
							.closest("nav")
							.classList.contains("mobile-menu-control-wrapper") &&
						(n = c.querySelector(".menu-toggle")),
					n && null === n.offsetParent)
				) {
					if (e[t].classList.contains("toggled")) {
						var s,
							o,
							r,
							a = !1;
						if (
							(e[t].classList.contains("mobile-menu-control-wrapper") &&
								(a = !0),
							a ||
								((o = (s =
									e[t].getElementsByTagName("ul")[0]).getElementsByTagName(
									"li"
								)),
								(r = s.getElementsByTagName("ul"))),
							document.activeElement.blur(),
							e[t].classList.remove("toggled"),
							u.classList.remove("mobile-menu-open"),
							n.setAttribute("aria-expanded", "false"),
							!a)
						) {
							for (var i = 0; i < o.length; i++)
								o[i].classList.remove("sfHover");
							for (var l = 0; l < r.length; l++)
								r[l].classList.remove("toggled-on");
							s && s.removeAttribute("aria-hidden");
						}
						d(e[t]);
					}
					c.querySelector(".search-item") &&
						c.querySelector(".search-item").classList.contains("active") &&
						c.querySelector(".search-item").click();
				}
			}
		};
		if (
			(window.addEventListener("resize", a, !1),
			window.addEventListener("orientationchange", a, !1),
			i.classList.contains("dropdown-hover"))
		)
			for (o = 0; o < n.length; o++)
				n[o].addEventListener(
					"click",
					function (e) {
						var t, n, s;
						this.hostname !== window.location.hostname &&
							document.activeElement.blur(),
							(this.closest("nav").classList.contains("toggled") ||
								u.classList.contains("slide-opened")) &&
								(("#" != (t = this.getAttribute("href")) && "" != t) ||
									(e.preventDefault(),
									(n = this.closest("li")).classList.toggle("sfHover"),
									(s = n.querySelector(".sub-menu")) &&
										s.classList.toggle("toggled-on")));
					},
					!1
				);
	}
})(),
	(function () {
		"use strict";
		if ("querySelector" in document && "addEventListener" in window) {
			var e = document.body;
			if (
				(e.addEventListener("mousedown", function () {
					e.classList.add("using-mouse");
				}),
				e.addEventListener("keydown", function () {
					e.classList.remove("using-mouse");
				}),
				e.classList.contains("dropdown-hover"))
			) {
				for (
					var t = document.querySelectorAll("nav .main-nav ul a"),
						n = document.querySelectorAll(".menu-bar-items .menu-bar-item > a"),
						s = function () {
							if (
								!this.closest("nav").classList.contains("toggled") &&
								!this.closest("nav").classList.contains("slideout-navigation")
							)
								for (var e = this; -1 === e.className.indexOf("main-nav"); )
									"li" === e.tagName.toLowerCase() &&
										e.classList.toggle("sfHover"),
										(e = e.parentElement);
						},
						o = function () {
							if (
								!this.closest("nav").classList.contains("toggled") &&
								!this.closest("nav").classList.contains("slideout-navigation")
							)
								for (
									var e = this;
									-1 === e.className.indexOf("menu-bar-items");

								)
									e.classList.contains("menu-bar-item") &&
										e.classList.toggle("sfHover"),
										(e = e.parentElement);
						},
						r = 0;
					r < t.length;
					r++
				)
					t[r].addEventListener("focus", s), t[r].addEventListener("blur", s);
				for (r = 0; r < n.length; r++)
					n[r].addEventListener("focus", o), n[r].addEventListener("blur", o);
			}
		}
		if (
			"ontouchend" in document.documentElement &&
			document.body.classList.contains("dropdown-hover")
		)
			for (
				var a = document.querySelectorAll(".sf-menu .menu-item-has-children"),
					r = 0;
				r < a.length;
				r++
			)
				a[r].addEventListener("touchend", function (e) {
					var t;
					if (
						!this.closest("nav").classList.contains("toggled") &&
						(1 === e.touches.length || 0 === e.touches.length) &&
						(e.stopPropagation(), !this.classList.contains("sfHover"))
					) {
						(e.target !== this &&
							e.target.parentNode !== this &&
							!e.target.parentNode.parentNode) ||
							e.preventDefault();
						for (
							var n = this.closest("li"),
								s =
									((t = n),
									Array.prototype.filter.call(
										t.parentNode.children,
										function (e) {
											return e !== t;
										}
									)),
								o = 0;
							o < s.length;
							o++
						)
							s[o].classList.contains("sfHover") &&
								s[o].classList.remove("sfHover");
						this.classList.add("sfHover");
						var r,
							a = this;
						document.addEventListener(
							"touchend",
							(r = function (e) {
								e.stopPropagation(),
									a.classList.remove("sfHover"),
									document.removeEventListener("touchend", r);
							})
						);
					}
				});
	})();
