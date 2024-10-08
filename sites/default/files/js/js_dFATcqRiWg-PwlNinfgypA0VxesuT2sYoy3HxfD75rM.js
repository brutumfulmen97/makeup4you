Drupal.locale = {
  pluralFormula: function ($n) {
    return Number(
      $n % 10 == 1 && $n % 100 != 11
        ? 0
        : $n % 10 >= 2 && $n % 10 <= 4 && ($n % 100 < 10 || $n % 100 >= 20)
        ? 1
        : 2
    );
  },
  strings: {
    "": {
      "Drag to re-order": "Prevuci da bi preuredio",
      Enabled: "Uklju\u010deno",
      "This field is required.": "Ovo polje je obavezno.",
      Disabled: "Isklju\u010deno",
      "Select all rows in this table": "Izaberi sve redove u ovoj tabeli",
      "Only files with the following extensions are allowed: %files-allowed.":
        "Dozvoljeni su samo fajlovi sa slede\u0107im nastavcima: %files-allowed.",
      January: "Januar",
      February: "Februar",
      March: "Mart",
      May: "Maj",
      June: "Jun",
      July: "Jul",
      August: "Avgust",
      September: "Septembar",
      October: "Oktobar",
      November: "Novembar",
      December: "Decembar",
    },
  },
};
/*!
	Colorbox 1.5.14
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function (t, e, i) {
  function n(i, n, o) {
    var r = e.createElement(i);
    return n && (r.id = Z + n), o && (r.style.cssText = o), t(r);
  }
  function o() {
    return i.innerHeight ? i.innerHeight : t(i).height();
  }
  function r(e, i) {
    i !== Object(i) && (i = {}),
      (this.cache = {}),
      (this.el = e),
      (this.value = function (e) {
        var n;
        return (
          void 0 === this.cache[e] &&
            ((n = t(this.el).attr("data-cbox-" + e)),
            void 0 !== n
              ? (this.cache[e] = n)
              : void 0 !== i[e]
              ? (this.cache[e] = i[e])
              : void 0 !== X[e] && (this.cache[e] = X[e])),
          this.cache[e]
        );
      }),
      (this.get = function (e) {
        var i = this.value(e);
        return t.isFunction(i) ? i.call(this.el, this) : i;
      });
  }
  function h(t) {
    var e = W.length,
      i = (z + t) % e;
    return 0 > i ? e + i : i;
  }
  function a(t, e) {
    return Math.round(
      (/%/.test(t) ? ("x" === e ? E.width() : o()) / 100 : 1) * parseInt(t, 10)
    );
  }
  function s(t, e) {
    return t.get("photo") || t.get("photoRegex").test(e);
  }
  function l(t, e) {
    return t.get("retinaUrl") && i.devicePixelRatio > 1
      ? e.replace(t.get("photoRegex"), t.get("retinaSuffix"))
      : e;
  }
  function d(t) {
    "contains" in y[0] &&
      !y[0].contains(t.target) &&
      t.target !== v[0] &&
      (t.stopPropagation(), y.focus());
  }
  function c(t) {
    c.str !== t && (y.add(v).removeClass(c.str).addClass(t), (c.str = t));
  }
  function g(e) {
    (z = 0),
      e && e !== !1 && "nofollow" !== e
        ? ((W = t("." + te).filter(function () {
            var i = t.data(this, Y),
              n = new r(this, i);
            return n.get("rel") === e;
          })),
          (z = W.index(_.el)),
          -1 === z && ((W = W.add(_.el)), (z = W.length - 1)))
        : (W = t(_.el));
  }
  function u(i) {
    t(e).trigger(i), ae.triggerHandler(i);
  }
  function f(i) {
    var o;
    if (!G) {
      if (((o = t(i).data(Y)), (_ = new r(i, o)), g(_.get("rel")), !$)) {
        ($ = q = !0),
          c(_.get("className")),
          y.css({ visibility: "hidden", display: "block", opacity: "" }),
          (L = n(
            se,
            "LoadedContent",
            "width:0; height:0; overflow:hidden; visibility:hidden"
          )),
          b.css({ width: "", height: "" }).append(L),
          (D = T.height() + k.height() + b.outerHeight(!0) - b.height()),
          (j = C.width() + H.width() + b.outerWidth(!0) - b.width()),
          (A = L.outerHeight(!0)),
          (N = L.outerWidth(!0));
        var h = a(_.get("initialWidth"), "x"),
          s = a(_.get("initialHeight"), "y"),
          l = _.get("maxWidth"),
          f = _.get("maxHeight");
        (_.w = (l !== !1 ? Math.min(h, a(l, "x")) : h) - N - j),
          (_.h = (f !== !1 ? Math.min(s, a(f, "y")) : s) - A - D),
          L.css({ width: "", height: _.h }),
          J.position(),
          u(ee),
          _.get("onOpen"),
          O.add(F).hide(),
          y.focus(),
          _.get("trapFocus") &&
            e.addEventListener &&
            (e.addEventListener("focus", d, !0),
            ae.one(re, function () {
              e.removeEventListener("focus", d, !0);
            })),
          _.get("returnFocus") &&
            ae.one(re, function () {
              t(_.el).focus();
            });
      }
      var p = parseFloat(_.get("opacity"));
      v
        .css({
          opacity: p === p ? p : "",
          cursor: _.get("overlayClose") ? "pointer" : "",
          visibility: "visible",
        })
        .show(),
        _.get("closeButton")
          ? B.html(_.get("close")).appendTo(b)
          : B.appendTo("<div/>"),
        w();
    }
  }
  function p() {
    y ||
      ((V = !1),
      (E = t(i)),
      (y = n(se)
        .attr({
          id: Y,
          class: t.support.opacity === !1 ? Z + "IE" : "",
          role: "dialog",
          tabindex: "-1",
        })
        .hide()),
      (v = n(se, "Overlay").hide()),
      (S = t([n(se, "LoadingOverlay")[0], n(se, "LoadingGraphic")[0]])),
      (x = n(se, "Wrapper")),
      (b = n(se, "Content").append(
        (F = n(se, "Title")),
        (I = n(se, "Current")),
        (P = t('<button type="button"/>').attr({ id: Z + "Previous" })),
        (K = t('<button type="button"/>').attr({ id: Z + "Next" })),
        (R = n("button", "Slideshow")),
        S
      )),
      (B = t('<button type="button"/>').attr({ id: Z + "Close" })),
      x
        .append(
          n(se).append(
            n(se, "TopLeft"),
            (T = n(se, "TopCenter")),
            n(se, "TopRight")
          ),
          n(se, !1, "clear:left").append(
            (C = n(se, "MiddleLeft")),
            b,
            (H = n(se, "MiddleRight"))
          ),
          n(se, !1, "clear:left").append(
            n(se, "BottomLeft"),
            (k = n(se, "BottomCenter")),
            n(se, "BottomRight")
          )
        )
        .find("div div")
        .css({ float: "left" }),
      (M = n(
        se,
        !1,
        "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"
      )),
      (O = K.add(P).add(I).add(R))),
      e.body && !y.parent().length && t(e.body).append(v, y.append(x, M));
  }
  function m() {
    function i(t) {
      t.which > 1 ||
        t.shiftKey ||
        t.altKey ||
        t.metaKey ||
        t.ctrlKey ||
        (t.preventDefault(), f(this));
    }
    return y
      ? (V ||
          ((V = !0),
          K.click(function () {
            J.next();
          }),
          P.click(function () {
            J.prev();
          }),
          B.click(function () {
            J.close();
          }),
          v.click(function () {
            _.get("overlayClose") && J.close();
          }),
          t(e).bind("keydown." + Z, function (t) {
            var e = t.keyCode;
            $ && _.get("escKey") && 27 === e && (t.preventDefault(), J.close()),
              $ &&
                _.get("arrowKey") &&
                W[1] &&
                !t.altKey &&
                (37 === e
                  ? (t.preventDefault(), P.click())
                  : 39 === e && (t.preventDefault(), K.click()));
          }),
          t.isFunction(t.fn.on)
            ? t(e).on("click." + Z, "." + te, i)
            : t("." + te).live("click." + Z, i)),
        !0)
      : !1;
  }
  function w() {
    var e,
      o,
      r,
      h = J.prep,
      d = ++le;
    if (
      ((q = !0),
      (U = !1),
      u(he),
      u(ie),
      _.get("onLoad"),
      (_.h = _.get("height")
        ? a(_.get("height"), "y") - A - D
        : _.get("innerHeight") && a(_.get("innerHeight"), "y")),
      (_.w = _.get("width")
        ? a(_.get("width"), "x") - N - j
        : _.get("innerWidth") && a(_.get("innerWidth"), "x")),
      (_.mw = _.w),
      (_.mh = _.h),
      _.get("maxWidth") &&
        ((_.mw = a(_.get("maxWidth"), "x") - N - j),
        (_.mw = _.w && _.w < _.mw ? _.w : _.mw)),
      _.get("maxHeight") &&
        ((_.mh = a(_.get("maxHeight"), "y") - A - D),
        (_.mh = _.h && _.h < _.mh ? _.h : _.mh)),
      (e = _.get("href")),
      (Q = setTimeout(function () {
        S.show();
      }, 100)),
      _.get("inline"))
    ) {
      var c = t(e);
      (r = t("<div>").hide().insertBefore(c)),
        ae.one(he, function () {
          r.replaceWith(c);
        }),
        h(c);
    } else
      _.get("iframe")
        ? h(" ")
        : _.get("html")
        ? h(_.get("html"))
        : s(_, e)
        ? ((e = l(_, e)),
          (U = new Image()),
          t(U)
            .addClass(Z + "Photo")
            .bind("error", function () {
              h(n(se, "Error").html(_.get("imgError")));
            })
            .one("load", function () {
              d === le &&
                setTimeout(function () {
                  var e;
                  t.each(
                    ["alt", "longdesc", "aria-describedby"],
                    function (e, i) {
                      var n = t(_.el).attr(i) || t(_.el).attr("data-" + i);
                      n && U.setAttribute(i, n);
                    }
                  ),
                    _.get("retinaImage") &&
                      i.devicePixelRatio > 1 &&
                      ((U.height = U.height / i.devicePixelRatio),
                      (U.width = U.width / i.devicePixelRatio)),
                    _.get("scalePhotos") &&
                      ((o = function () {
                        (U.height -= U.height * e), (U.width -= U.width * e);
                      }),
                      _.mw &&
                        U.width > _.mw &&
                        ((e = (U.width - _.mw) / U.width), o()),
                      _.mh &&
                        U.height > _.mh &&
                        ((e = (U.height - _.mh) / U.height), o())),
                    _.h &&
                      (U.style.marginTop =
                        Math.max(_.mh - U.height, 0) / 2 + "px"),
                    W[1] &&
                      (_.get("loop") || W[z + 1]) &&
                      ((U.style.cursor = "pointer"),
                      (U.onclick = function () {
                        J.next();
                      })),
                    (U.style.width = U.width + "px"),
                    (U.style.height = U.height + "px"),
                    h(U);
                }, 1);
            }),
          (U.src = e))
        : e &&
          M.load(e, _.get("data"), function (e, i) {
            d === le &&
              h(
                "error" === i
                  ? n(se, "Error").html(_.get("xhrError"))
                  : t(this).contents()
              );
          });
  }
  var v,
    y,
    x,
    b,
    T,
    C,
    H,
    k,
    W,
    E,
    L,
    M,
    S,
    F,
    I,
    R,
    K,
    P,
    B,
    O,
    _,
    D,
    j,
    A,
    N,
    z,
    U,
    $,
    q,
    G,
    Q,
    J,
    V,
    X = {
      html: !1,
      photo: !1,
      iframe: !1,
      inline: !1,
      transition: "elastic",
      speed: 300,
      fadeOut: 300,
      width: !1,
      initialWidth: "600",
      innerWidth: !1,
      maxWidth: !1,
      height: !1,
      initialHeight: "450",
      innerHeight: !1,
      maxHeight: !1,
      scalePhotos: !0,
      scrolling: !0,
      opacity: 0.9,
      preloading: !0,
      className: !1,
      overlayClose: !0,
      escKey: !0,
      arrowKey: !0,
      top: !1,
      bottom: !1,
      left: !1,
      right: !1,
      fixed: !1,
      data: void 0,
      closeButton: !0,
      fastIframe: !0,
      open: !1,
      reposition: !0,
      loop: !0,
      slideshow: !1,
      slideshowAuto: !0,
      slideshowSpeed: 2500,
      slideshowStart: "start slideshow",
      slideshowStop: "stop slideshow",
      photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
      retinaImage: !1,
      retinaUrl: !1,
      retinaSuffix: "@2x.$1",
      current: "image {current} of {total}",
      previous: "previous",
      next: "next",
      close: "close",
      xhrError: "This content failed to load.",
      imgError: "This image failed to load.",
      returnFocus: !0,
      trapFocus: !0,
      onOpen: !1,
      onLoad: !1,
      onComplete: !1,
      onCleanup: !1,
      onClosed: !1,
      rel: function () {
        return this.rel;
      },
      href: function () {
        return t(this).attr("href");
      },
      title: function () {
        return this.title;
      },
    },
    Y = "colorbox",
    Z = "cbox",
    te = Z + "Element",
    ee = Z + "_open",
    ie = Z + "_load",
    ne = Z + "_complete",
    oe = Z + "_cleanup",
    re = Z + "_closed",
    he = Z + "_purge",
    ae = t("<a/>"),
    se = "div",
    le = 0,
    de = {},
    ce = (function () {
      function t() {
        clearTimeout(h);
      }
      function e() {
        (_.get("loop") || W[z + 1]) &&
          (t(), (h = setTimeout(J.next, _.get("slideshowSpeed"))));
      }
      function i() {
        R.html(_.get("slideshowStop")).unbind(s).one(s, n),
          ae.bind(ne, e).bind(ie, t),
          y.removeClass(a + "off").addClass(a + "on");
      }
      function n() {
        t(),
          ae.unbind(ne, e).unbind(ie, t),
          R.html(_.get("slideshowStart"))
            .unbind(s)
            .one(s, function () {
              J.next(), i();
            }),
          y.removeClass(a + "on").addClass(a + "off");
      }
      function o() {
        (r = !1),
          R.hide(),
          t(),
          ae.unbind(ne, e).unbind(ie, t),
          y.removeClass(a + "off " + a + "on");
      }
      var r,
        h,
        a = Z + "Slideshow_",
        s = "click." + Z;
      return function () {
        r
          ? _.get("slideshow") || (ae.unbind(oe, o), o())
          : _.get("slideshow") &&
            W[1] &&
            ((r = !0),
            ae.one(oe, o),
            _.get("slideshowAuto") ? i() : n(),
            R.show());
      };
    })();
  t[Y] ||
    (t(p),
    (J =
      t.fn[Y] =
      t[Y] =
        function (e, i) {
          var n,
            o = this;
          if (((e = e || {}), t.isFunction(o))) (o = t("<a/>")), (e.open = !0);
          else if (!o[0]) return o;
          return o[0]
            ? (p(),
              m() &&
                (i && (e.onComplete = i),
                o
                  .each(function () {
                    var i = t.data(this, Y) || {};
                    t.data(this, Y, t.extend(i, e));
                  })
                  .addClass(te),
                (n = new r(o[0], e)),
                n.get("open") && f(o[0])),
              o)
            : o;
        }),
    (J.position = function (e, i) {
      function n() {
        (T[0].style.width =
          k[0].style.width =
          b[0].style.width =
            parseInt(y[0].style.width, 10) - j + "px"),
          (b[0].style.height =
            C[0].style.height =
            H[0].style.height =
              parseInt(y[0].style.height, 10) - D + "px");
      }
      var r,
        h,
        s,
        l = 0,
        d = 0,
        c = y.offset();
      if (
        (E.unbind("resize." + Z),
        y.css({ top: -9e4, left: -9e4 }),
        (h = E.scrollTop()),
        (s = E.scrollLeft()),
        _.get("fixed")
          ? ((c.top -= h), (c.left -= s), y.css({ position: "fixed" }))
          : ((l = h), (d = s), y.css({ position: "absolute" })),
        (d +=
          _.get("right") !== !1
            ? Math.max(E.width() - _.w - N - j - a(_.get("right"), "x"), 0)
            : _.get("left") !== !1
            ? a(_.get("left"), "x")
            : Math.round(Math.max(E.width() - _.w - N - j, 0) / 2)),
        (l +=
          _.get("bottom") !== !1
            ? Math.max(o() - _.h - A - D - a(_.get("bottom"), "y"), 0)
            : _.get("top") !== !1
            ? a(_.get("top"), "y")
            : Math.round(Math.max(o() - _.h - A - D, 0) / 2)),
        y.css({ top: c.top, left: c.left, visibility: "visible" }),
        (x[0].style.width = x[0].style.height = "9999px"),
        (r = { width: _.w + N + j, height: _.h + A + D, top: l, left: d }),
        e)
      ) {
        var g = 0;
        t.each(r, function (t) {
          return r[t] !== de[t] ? ((g = e), void 0) : void 0;
        }),
          (e = g);
      }
      (de = r),
        e || y.css(r),
        y.dequeue().animate(r, {
          duration: e || 0,
          complete: function () {
            n(),
              (q = !1),
              (x[0].style.width = _.w + N + j + "px"),
              (x[0].style.height = _.h + A + D + "px"),
              _.get("reposition") &&
                setTimeout(function () {
                  E.bind("resize." + Z, J.position);
                }, 1),
              t.isFunction(i) && i();
          },
          step: n,
        });
    }),
    (J.resize = function (t) {
      var e;
      $ &&
        ((t = t || {}),
        t.width && (_.w = a(t.width, "x") - N - j),
        t.innerWidth && (_.w = a(t.innerWidth, "x")),
        L.css({ width: _.w }),
        t.height && (_.h = a(t.height, "y") - A - D),
        t.innerHeight && (_.h = a(t.innerHeight, "y")),
        t.innerHeight ||
          t.height ||
          ((e = L.scrollTop()), L.css({ height: "auto" }), (_.h = L.height())),
        L.css({ height: _.h }),
        e && L.scrollTop(e),
        J.position("none" === _.get("transition") ? 0 : _.get("speed")));
    }),
    (J.prep = function (i) {
      function o() {
        return (
          (_.w = _.w || L.width()), (_.w = _.mw && _.mw < _.w ? _.mw : _.w), _.w
        );
      }
      function a() {
        return (
          (_.h = _.h || L.height()),
          (_.h = _.mh && _.mh < _.h ? _.mh : _.h),
          _.h
        );
      }
      if ($) {
        var d,
          g = "none" === _.get("transition") ? 0 : _.get("speed");
        L.remove(),
          (L = n(se, "LoadedContent").append(i)),
          L.hide()
            .appendTo(M.show())
            .css({
              width: o(),
              overflow: _.get("scrolling") ? "auto" : "hidden",
            })
            .css({ height: a() })
            .prependTo(b),
          M.hide(),
          t(U).css({ float: "none" }),
          c(_.get("className")),
          (d = function () {
            function i() {
              t.support.opacity === !1 && y[0].style.removeAttribute("filter");
            }
            var n,
              o,
              a = W.length;
            $ &&
              ((o = function () {
                clearTimeout(Q), S.hide(), u(ne), _.get("onComplete");
              }),
              F.html(_.get("title")).show(),
              L.show(),
              a > 1
                ? ("string" == typeof _.get("current") &&
                    I.html(
                      _.get("current")
                        .replace("{current}", z + 1)
                        .replace("{total}", a)
                    ).show(),
                  K[_.get("loop") || a - 1 > z ? "show" : "hide"]().html(
                    _.get("next")
                  ),
                  P[_.get("loop") || z ? "show" : "hide"]().html(
                    _.get("previous")
                  ),
                  ce(),
                  _.get("preloading") &&
                    t.each([h(-1), h(1)], function () {
                      var i,
                        n = W[this],
                        o = new r(n, t.data(n, Y)),
                        h = o.get("href");
                      h &&
                        s(o, h) &&
                        ((h = l(o, h)),
                        (i = e.createElement("img")),
                        (i.src = h));
                    }))
                : O.hide(),
              _.get("iframe")
                ? ((n = e.createElement("iframe")),
                  "frameBorder" in n && (n.frameBorder = 0),
                  "allowTransparency" in n && (n.allowTransparency = "true"),
                  _.get("scrolling") || (n.scrolling = "no"),
                  t(n)
                    .attr({
                      src: _.get("href"),
                      name: new Date().getTime(),
                      class: Z + "Iframe",
                      allowFullScreen: !0,
                    })
                    .one("load", o)
                    .appendTo(L),
                  ae.one(he, function () {
                    n.src = "//about:blank";
                  }),
                  _.get("fastIframe") && t(n).trigger("load"))
                : o(),
              "fade" === _.get("transition") ? y.fadeTo(g, 1, i) : i());
          }),
          "fade" === _.get("transition")
            ? y.fadeTo(g, 0, function () {
                J.position(0, d);
              })
            : J.position(g, d);
      }
    }),
    (J.next = function () {
      !q && W[1] && (_.get("loop") || W[z + 1]) && ((z = h(1)), f(W[z]));
    }),
    (J.prev = function () {
      !q && W[1] && (_.get("loop") || z) && ((z = h(-1)), f(W[z]));
    }),
    (J.close = function () {
      $ &&
        !G &&
        ((G = !0),
        ($ = !1),
        u(oe),
        _.get("onCleanup"),
        E.unbind("." + Z),
        v.fadeTo(_.get("fadeOut") || 0, 0),
        y.stop().fadeTo(_.get("fadeOut") || 0, 0, function () {
          y.hide(),
            v.hide(),
            u(he),
            L.remove(),
            setTimeout(function () {
              (G = !1), u(re), _.get("onClosed");
            }, 1);
        }));
    }),
    (J.remove = function () {
      y &&
        (y.stop(),
        t[Y].close(),
        y.stop(!1, !0).remove(),
        v.remove(),
        (G = !1),
        (y = null),
        t("." + te)
          .removeData(Y)
          .removeClass(te),
        t(e)
          .unbind("click." + Z)
          .unbind("keydown." + Z));
    }),
    (J.element = function () {
      return t(_.el);
    }),
    (J.settings = X));
})(jQuery, document, window);
/**
 * @file
 * Colorbox module init js.
 */

(function ($) {
  Drupal.behaviors.initColorbox = {
    attach: function (context, settings) {
      if (
        !$.isFunction($.colorbox) ||
        typeof settings.colorbox === "undefined"
      ) {
        return;
      }

      // if (settings.colorbox.mobiledetect && window.matchMedia) {
      //   // Disable Colorbox for small screens.
      //   var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      //   if (mq.matches) {
      //     return;
      //   }
      // }

      // Use "data-colorbox-gallery" if set otherwise use "rel".
      settings.colorbox.rel = function () {
        if ($(this).data("colorbox-gallery")) {
          return $(this).data("colorbox-gallery");
        } else {
          return $(this).attr("rel");
        }
      };

      $(".colorbox", context).once("init-colorbox").colorbox(settings.colorbox);

      $(context).bind("cbox_complete", function () {
        Drupal.attachBehaviors("#cboxLoadedContent");
      });
    },
  };
})(jQuery);
/**
 * @file
 * Colorbox module style js.
 */

(function ($) {
  Drupal.behaviors.initColorboxDefaultStyle = {
    attach: function (context, settings) {
      $(context).bind("cbox_complete", function () {
        // Only run if there is a title.
        if ($("#cboxTitle:empty", context).length == false) {
          $("#cboxLoadedContent img", context).bind("mouseover", function () {
            $("#cboxTitle", context).slideDown();
          });
          $("#cboxOverlay", context).bind("mouseover", function () {
            $("#cboxTitle", context).slideUp();
          });
        } else {
          $("#cboxTitle", context).hide();
        }
      });
    },
  };
})(jQuery);
/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2013 M. Alsup
 * Version: 3.0.3 (11-JUL-2013)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.7.1 or later
 */
(function ($, undefined) {
  "use strict";

  var ver = "3.0.3";

  function debug(s) {
    if ($.fn.cycle.debug) log(s);
  }
  function log() {
    /*global console */
    if (window.console && console.log)
      console.log("[cycle] " + Array.prototype.join.call(arguments, " "));
  }
  $.expr[":"].paused = function (el) {
    return el.cyclePause;
  };

  // the options arg can be...
  //   a number  - indicates an immediate transition should occur to the given slide index
  //   a string  - 'pause', 'resume', 'toggle', 'next', 'prev', 'stop', 'destroy' or the name of a transition effect (ie, 'fade', 'zoom', etc)
  //   an object - properties to control the slideshow
  //
  // the arg2 arg can be...
  //   the name of an fx (only used in conjunction with a numeric value for 'options')
  //   the value true (only used in first arg == 'resume') and indicates
  //	 that the resume should occur immediately (not wait for next timeout)

  $.fn.cycle = function (options, arg2) {
    var o = { s: this.selector, c: this.context };

    // in 1.3+ we can fix mistakes with the ready state
    if (this.length === 0 && options != "stop") {
      if (!$.isReady && o.s) {
        log("DOM not ready, queuing slideshow");
        $(function () {
          $(o.s, o.c).cycle(options, arg2);
        });
        return this;
      }
      // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
      log(
        "terminating; zero elements found by selector" +
          ($.isReady ? "" : " (DOM not ready)")
      );
      return this;
    }

    // iterate the matched nodeset
    return this.each(function () {
      var opts = handleArguments(this, options, arg2);
      if (opts === false) return;

      opts.updateActivePagerLink =
        opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;

      // stop existing slideshow for this container (if there is one)
      if (this.cycleTimeout) clearTimeout(this.cycleTimeout);
      this.cycleTimeout = this.cyclePause = 0;
      this.cycleStop = 0; // issue #108

      var $cont = $(this);
      var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
      var els = $slides.get();

      if (els.length < 2) {
        log("terminating; too few slides: " + els.length);
        return;
      }

      var opts2 = buildOptions($cont, $slides, els, opts, o);
      if (opts2 === false) return;

      var startTime = opts2.continuous
        ? 10
        : getTimeout(
            els[opts2.currSlide],
            els[opts2.nextSlide],
            opts2,
            !opts2.backwards
          );

      // if it's an auto slideshow, kick it off
      if (startTime) {
        startTime += opts2.delay || 0;
        if (startTime < 10) startTime = 10;
        debug("first timeout: " + startTime);
        this.cycleTimeout = setTimeout(function () {
          go(els, opts2, 0, !opts.backwards);
        }, startTime);
      }
    });
  };

  function triggerPause(cont, byHover, onPager) {
    var opts = $(cont).data("cycle.opts");
    if (!opts) return;
    var paused = !!cont.cyclePause;
    if (paused && opts.paused) opts.paused(cont, opts, byHover, onPager);
    else if (!paused && opts.resumed)
      opts.resumed(cont, opts, byHover, onPager);
  }

  // process the args that were passed to the plugin fn
  function handleArguments(cont, options, arg2) {
    if (cont.cycleStop === undefined) cont.cycleStop = 0;
    if (options === undefined || options === null) options = {};
    if (options.constructor == String) {
      switch (options) {
        case "destroy":
        case "stop":
          var opts = $(cont).data("cycle.opts");
          if (!opts) return false;
          cont.cycleStop++; // callbacks look for change
          if (cont.cycleTimeout) clearTimeout(cont.cycleTimeout);
          cont.cycleTimeout = 0;
          if (opts.elements) $(opts.elements).stop();
          $(cont).removeData("cycle.opts");
          if (options == "destroy") destroy(cont, opts);
          return false;
        case "toggle":
          cont.cyclePause = cont.cyclePause === 1 ? 0 : 1;
          checkInstantResume(cont.cyclePause, arg2, cont);
          triggerPause(cont);
          return false;
        case "pause":
          cont.cyclePause = 1;
          triggerPause(cont);
          return false;
        case "resume":
          cont.cyclePause = 0;
          checkInstantResume(false, arg2, cont);
          triggerPause(cont);
          return false;
        case "prev":
        case "next":
          opts = $(cont).data("cycle.opts");
          if (!opts) {
            log('options not found, "prev/next" ignored');
            return false;
          }
          if (typeof arg2 == "string") opts.oneTimeFx = arg2;
          $.fn.cycle[options](opts);
          return false;
        default:
          options = { fx: options };
      }
      return options;
    } else if (options.constructor == Number) {
      // go to the requested slide
      var num = options;
      options = $(cont).data("cycle.opts");
      if (!options) {
        log("options not found, can not advance slide");
        return false;
      }
      if (num < 0 || num >= options.elements.length) {
        log("invalid slide index: " + num);
        return false;
      }
      options.nextSlide = num;
      if (cont.cycleTimeout) {
        clearTimeout(cont.cycleTimeout);
        cont.cycleTimeout = 0;
      }
      if (typeof arg2 == "string") options.oneTimeFx = arg2;
      go(options.elements, options, 1, num >= options.currSlide);
      return false;
    }
    return options;

    function checkInstantResume(isPaused, arg2, cont) {
      if (!isPaused && arg2 === true) {
        // resume now!
        var options = $(cont).data("cycle.opts");
        if (!options) {
          log("options not found, can not resume");
          return false;
        }
        if (cont.cycleTimeout) {
          clearTimeout(cont.cycleTimeout);
          cont.cycleTimeout = 0;
        }
        go(options.elements, options, 1, !options.backwards);
      }
    }
  }

  function removeFilter(el, opts) {
    if (!$.support.opacity && opts.cleartype && el.style.filter) {
      try {
        el.style.removeAttribute("filter");
      } catch (smother) {} // handle old opera versions
    }
  }

  // unbind event handlers
  function destroy(cont, opts) {
    if (opts.next) $(opts.next).unbind(opts.prevNextEvent);
    if (opts.prev) $(opts.prev).unbind(opts.prevNextEvent);

    if (opts.pager || opts.pagerAnchorBuilder)
      $.each(opts.pagerAnchors || [], function () {
        this.unbind().remove();
      });
    opts.pagerAnchors = null;
    $(cont).unbind("mouseenter.cycle mouseleave.cycle");
    if (opts.destroy)
      // callback
      opts.destroy(opts);
  }

  // one-time initialization
  function buildOptions($cont, $slides, els, options, o) {
    var startingSlideSpecified;
    // support metadata plugin (v1.0 and v2.0)
    var opts = $.extend(
      {},
      $.fn.cycle.defaults,
      options || {},
      $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {}
    );
    var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
    if (meta) opts = $.extend(opts, meta);
    if (opts.autostop) opts.countdown = opts.autostopCount || els.length;

    var cont = $cont[0];
    $cont.data("cycle.opts", opts);
    opts.$cont = $cont;
    opts.stopCount = cont.cycleStop;
    opts.elements = els;
    opts.before = opts.before ? [opts.before] : [];
    opts.after = opts.after ? [opts.after] : [];

    // push some after callbacks
    if (!$.support.opacity && opts.cleartype)
      opts.after.push(function () {
        removeFilter(this, opts);
      });
    if (opts.continuous)
      opts.after.push(function () {
        go(els, opts, 0, !opts.backwards);
      });

    saveOriginalOpts(opts);

    // clearType corrections
    if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
      clearTypeFix($slides);

    // container requires non-static position so that slides can be position within
    if ($cont.css("position") == "static") $cont.css("position", "relative");
    if (opts.width) $cont.width(opts.width);
    if (opts.height && opts.height != "auto") $cont.height(opts.height);

    if (opts.startingSlide !== undefined) {
      opts.startingSlide = parseInt(opts.startingSlide, 10);
      if (opts.startingSlide >= els.length || opts.startSlide < 0)
        opts.startingSlide = 0; // catch bogus input
      else startingSlideSpecified = true;
    } else if (opts.backwards) opts.startingSlide = els.length - 1;
    else opts.startingSlide = 0;

    // if random, mix up the slide array
    if (opts.random) {
      opts.randomMap = [];
      for (var i = 0; i < els.length; i++) opts.randomMap.push(i);
      opts.randomMap.sort(function (a, b) {
        return Math.random() - 0.5;
      });
      if (startingSlideSpecified) {
        // try to find the specified starting slide and if found set start slide index in the map accordingly
        for (var cnt = 0; cnt < els.length; cnt++) {
          if (opts.startingSlide == opts.randomMap[cnt]) {
            opts.randomIndex = cnt;
          }
        }
      } else {
        opts.randomIndex = 1;
        opts.startingSlide = opts.randomMap[1];
      }
    } else if (opts.startingSlide >= els.length) opts.startingSlide = 0; // catch bogus input
    opts.currSlide = opts.startingSlide || 0;
    var first = opts.startingSlide;

    // set position and zIndex on all the slides
    $slides
      .css({ position: "absolute", top: 0, left: 0 })
      .hide()
      .each(function (i) {
        var z;
        if (opts.backwards)
          z = first
            ? i <= first
              ? els.length + (i - first)
              : first - i
            : els.length - i;
        else
          z = first
            ? i >= first
              ? els.length - (i - first)
              : first - i
            : els.length - i;
        $(this).css("z-index", z);
      });

    // make sure first slide is visible
    $(els[first]).css("opacity", 1).show(); // opacity bit needed to handle restart use case
    removeFilter(els[first], opts);

    // stretch slides
    if (opts.fit) {
      if (!opts.aspect) {
        if (opts.width) $slides.width(opts.width);
        if (opts.height && opts.height != "auto") $slides.height(opts.height);
      } else {
        $slides.each(function () {
          var $slide = $(this);
          var ratio =
            opts.aspect === true
              ? $slide.width() / $slide.height()
              : opts.aspect;
          if (opts.width && $slide.width() != opts.width) {
            $slide.width(opts.width);
            $slide.height(opts.width / ratio);
          }

          if (opts.height && $slide.height() < opts.height) {
            $slide.height(opts.height);
            $slide.width(opts.height * ratio);
          }
        });
      }
    }

    if (opts.center && (!opts.fit || opts.aspect)) {
      $slides.each(function () {
        var $slide = $(this);
        $slide.css({
          "margin-left": opts.width
            ? (opts.width - $slide.width()) / 2 + "px"
            : 0,
          "margin-top": opts.height
            ? (opts.height - $slide.height()) / 2 + "px"
            : 0,
        });
      });
    }

    if (opts.center && !opts.fit && !opts.slideResize) {
      $slides.each(function () {
        var $slide = $(this);
        $slide.css({
          "margin-left": opts.width
            ? (opts.width - $slide.width()) / 2 + "px"
            : 0,
          "margin-top": opts.height
            ? (opts.height - $slide.height()) / 2 + "px"
            : 0,
        });
      });
    }

    // stretch container
    var reshape =
      (opts.containerResize || opts.containerResizeHeight) &&
      $cont.innerHeight() < 1;
    if (reshape) {
      // do this only if container has no size http://tinyurl.com/da2oa9
      var maxw = 0,
        maxh = 0;
      for (var j = 0; j < els.length; j++) {
        var $e = $(els[j]),
          e = $e[0],
          w = $e.outerWidth(),
          h = $e.outerHeight();
        if (!w) w = e.offsetWidth || e.width || $e.attr("width");
        if (!h) h = e.offsetHeight || e.height || $e.attr("height");
        maxw = w > maxw ? w : maxw;
        maxh = h > maxh ? h : maxh;
      }
      if (opts.containerResize && maxw > 0 && maxh > 0)
        $cont.css({ width: maxw + "px", height: maxh + "px" });
      if (opts.containerResizeHeight && maxh > 0)
        $cont.css({ height: maxh + "px" });
    }

    var pauseFlag = false; // https://github.com/malsup/cycle/issues/44
    if (opts.pause)
      $cont
        .bind("mouseenter.cycle", function () {
          pauseFlag = true;
          this.cyclePause++;
          triggerPause(cont, true);
        })
        .bind("mouseleave.cycle", function () {
          if (pauseFlag) this.cyclePause--;
          triggerPause(cont, true);
        });

    if (supportMultiTransitions(opts) === false) return false;

    // apparently a lot of people use image slideshows without height/width attributes on the images.
    // Cycle 2.50+ requires the sizing info for every slide; this block tries to deal with that.
    var requeue = false;
    options.requeueAttempts = options.requeueAttempts || 0;
    $slides.each(function () {
      // try to get height/width of each slide
      var $el = $(this);
      this.cycleH =
        opts.fit && opts.height
          ? opts.height
          : $el.height() ||
            this.offsetHeight ||
            this.height ||
            $el.attr("height") ||
            0;
      this.cycleW =
        opts.fit && opts.width
          ? opts.width
          : $el.width() ||
            this.offsetWidth ||
            this.width ||
            $el.attr("width") ||
            0;

      if ($el.is("img")) {
        var loading = this.cycleH === 0 && this.cycleW === 0 && !this.complete;
        // don't requeue for images that are still loading but have a valid size
        if (loading) {
          if (
            o.s &&
            opts.requeueOnImageNotLoaded &&
            ++options.requeueAttempts < 100
          ) {
            // track retry count so we don't loop forever
            log(
              options.requeueAttempts,
              " - img slide not loaded, requeuing slideshow: ",
              this.src,
              this.cycleW,
              this.cycleH
            );
            setTimeout(function () {
              $(o.s, o.c).cycle(options);
            }, opts.requeueTimeout);
            requeue = true;
            return false; // break each loop
          } else {
            log(
              "could not determine size of image: " + this.src,
              this.cycleW,
              this.cycleH
            );
          }
        }
      }
      return true;
    });

    if (requeue) return false;

    opts.cssBefore = opts.cssBefore || {};
    opts.cssAfter = opts.cssAfter || {};
    opts.cssFirst = opts.cssFirst || {};
    opts.animIn = opts.animIn || {};
    opts.animOut = opts.animOut || {};

    $slides.not(":eq(" + first + ")").css(opts.cssBefore);
    $($slides[first]).css(opts.cssFirst);

    if (opts.timeout) {
      opts.timeout = parseInt(opts.timeout, 10);
      // ensure that timeout and speed settings are sane
      if (opts.speed.constructor == String)
        opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed, 10);
      if (!opts.sync) opts.speed = opts.speed / 2;

      var buffer = opts.fx == "none" ? 0 : opts.fx == "shuffle" ? 500 : 250;
      while (opts.timeout - opts.speed < buffer)
        // sanitize timeout
        opts.timeout += opts.speed;
    }
    if (opts.easing) opts.easeIn = opts.easeOut = opts.easing;
    if (!opts.speedIn) opts.speedIn = opts.speed;
    if (!opts.speedOut) opts.speedOut = opts.speed;

    opts.slideCount = els.length;
    opts.currSlide = opts.lastSlide = first;
    if (opts.random) {
      if (++opts.randomIndex == els.length) opts.randomIndex = 0;
      opts.nextSlide = opts.randomMap[opts.randomIndex];
    } else if (opts.backwards)
      opts.nextSlide =
        opts.startingSlide === 0 ? els.length - 1 : opts.startingSlide - 1;
    else
      opts.nextSlide =
        opts.startingSlide >= els.length - 1 ? 0 : opts.startingSlide + 1;

    // run transition init fn
    if (!opts.multiFx) {
      var init = $.fn.cycle.transitions[opts.fx];
      if ($.isFunction(init)) init($cont, $slides, opts);
      else if (opts.fx != "custom" && !opts.multiFx) {
        log("unknown transition: " + opts.fx, "; slideshow terminating");
        return false;
      }
    }

    // fire artificial events
    var e0 = $slides[first];
    if (!opts.skipInitializationCallbacks) {
      if (opts.before.length) opts.before[0].apply(e0, [e0, e0, opts, true]);
      if (opts.after.length) opts.after[0].apply(e0, [e0, e0, opts, true]);
    }
    if (opts.next)
      $(opts.next).bind(opts.prevNextEvent, function () {
        return advance(opts, 1);
      });
    if (opts.prev)
      $(opts.prev).bind(opts.prevNextEvent, function () {
        return advance(opts, 0);
      });
    if (opts.pager || opts.pagerAnchorBuilder) buildPager(els, opts);

    exposeAddSlide(opts, els);

    return opts;
  }

  // save off original opts so we can restore after clearing state
  function saveOriginalOpts(opts) {
    opts.original = { before: [], after: [] };
    opts.original.cssBefore = $.extend({}, opts.cssBefore);
    opts.original.cssAfter = $.extend({}, opts.cssAfter);
    opts.original.animIn = $.extend({}, opts.animIn);
    opts.original.animOut = $.extend({}, opts.animOut);
    $.each(opts.before, function () {
      opts.original.before.push(this);
    });
    $.each(opts.after, function () {
      opts.original.after.push(this);
    });
  }

  function supportMultiTransitions(opts) {
    var i,
      tx,
      txs = $.fn.cycle.transitions;
    // look for multiple effects
    if (opts.fx.indexOf(",") > 0) {
      opts.multiFx = true;
      opts.fxs = opts.fx.replace(/\s*/g, "").split(",");
      // discard any bogus effect names
      for (i = 0; i < opts.fxs.length; i++) {
        var fx = opts.fxs[i];
        tx = txs[fx];
        if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
          log("discarding unknown transition: ", fx);
          opts.fxs.splice(i, 1);
          i--;
        }
      }
      // if we have an empty list then we threw everything away!
      if (!opts.fxs.length) {
        log("No valid transitions named; slideshow terminating.");
        return false;
      }
    } else if (opts.fx == "all") {
      // auto-gen the list of transitions
      opts.multiFx = true;
      opts.fxs = [];
      for (var p in txs) {
        if (txs.hasOwnProperty(p)) {
          tx = txs[p];
          if (txs.hasOwnProperty(p) && $.isFunction(tx)) opts.fxs.push(p);
        }
      }
    }
    if (opts.multiFx && opts.randomizeEffects) {
      // munge the fxs array to make effect selection random
      var r1 = Math.floor(Math.random() * 20) + 30;
      for (i = 0; i < r1; i++) {
        var r2 = Math.floor(Math.random() * opts.fxs.length);
        opts.fxs.push(opts.fxs.splice(r2, 1)[0]);
      }
      debug("randomized fx sequence: ", opts.fxs);
    }
    return true;
  }

  // provide a mechanism for adding slides after the slideshow has started
  function exposeAddSlide(opts, els) {
    opts.addSlide = function (newSlide, prepend) {
      var $s = $(newSlide),
        s = $s[0];
      if (!opts.autostopCount) opts.countdown++;
      els[prepend ? "unshift" : "push"](s);
      if (opts.els) opts.els[prepend ? "unshift" : "push"](s); // shuffle needs this
      opts.slideCount = els.length;

      // add the slide to the random map and resort
      if (opts.random) {
        opts.randomMap.push(opts.slideCount - 1);
        opts.randomMap.sort(function (a, b) {
          return Math.random() - 0.5;
        });
      }

      $s.css("position", "absolute");
      $s[prepend ? "prependTo" : "appendTo"](opts.$cont);

      if (prepend) {
        opts.currSlide++;
        opts.nextSlide++;
      }

      if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
        clearTypeFix($s);

      if (opts.fit && opts.width) $s.width(opts.width);
      if (opts.fit && opts.height && opts.height != "auto")
        $s.height(opts.height);
      s.cycleH = opts.fit && opts.height ? opts.height : $s.height();
      s.cycleW = opts.fit && opts.width ? opts.width : $s.width();

      $s.css(opts.cssBefore);

      if (opts.pager || opts.pagerAnchorBuilder)
        $.fn.cycle.createPagerAnchor(
          els.length - 1,
          s,
          $(opts.pager),
          els,
          opts
        );

      if ($.isFunction(opts.onAddSlide)) opts.onAddSlide($s);
      else $s.hide(); // default behavior
    };
  }

  // reset internal state; we do this on every pass in order to support multiple effects
  $.fn.cycle.resetState = function (opts, fx) {
    fx = fx || opts.fx;
    opts.before = [];
    opts.after = [];
    opts.cssBefore = $.extend({}, opts.original.cssBefore);
    opts.cssAfter = $.extend({}, opts.original.cssAfter);
    opts.animIn = $.extend({}, opts.original.animIn);
    opts.animOut = $.extend({}, opts.original.animOut);
    opts.fxFn = null;
    $.each(opts.original.before, function () {
      opts.before.push(this);
    });
    $.each(opts.original.after, function () {
      opts.after.push(this);
    });

    // re-init
    var init = $.fn.cycle.transitions[fx];
    if ($.isFunction(init)) init(opts.$cont, $(opts.elements), opts);
  };

  // this is the main engine fn, it handles the timeouts, callbacks and slide index mgmt
  function go(els, opts, manual, fwd) {
    var p = opts.$cont[0],
      curr = els[opts.currSlide],
      next = els[opts.nextSlide];

    // opts.busy is true if we're in the middle of an animation
    if (manual && opts.busy && opts.manualTrump) {
      // let manual transitions requests trump active ones
      debug("manualTrump in go(), stopping active transition");
      $(els).stop(true, true);
      opts.busy = 0;
      clearTimeout(p.cycleTimeout);
    }

    // don't begin another timeout-based transition if there is one active
    if (opts.busy) {
      debug("transition active, ignoring new tx request");
      return;
    }

    // stop cycling if we have an outstanding stop request
    if (p.cycleStop != opts.stopCount || (p.cycleTimeout === 0 && !manual))
      return;

    // check to see if we should stop cycling based on autostop options
    if (
      !manual &&
      !p.cyclePause &&
      !opts.bounce &&
      ((opts.autostop && --opts.countdown <= 0) ||
        (opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))
    ) {
      if (opts.end) opts.end(opts);
      return;
    }

    // if slideshow is paused, only transition on a manual trigger
    var changed = false;
    if ((manual || !p.cyclePause) && opts.nextSlide != opts.currSlide) {
      changed = true;
      var fx = opts.fx;
      // keep trying to get the slide size if we don't have it yet
      curr.cycleH = curr.cycleH || $(curr).height();
      curr.cycleW = curr.cycleW || $(curr).width();
      next.cycleH = next.cycleH || $(next).height();
      next.cycleW = next.cycleW || $(next).width();

      // support multiple transition types
      if (opts.multiFx) {
        if (
          fwd &&
          (opts.lastFx === undefined || ++opts.lastFx >= opts.fxs.length)
        )
          opts.lastFx = 0;
        else if (!fwd && (opts.lastFx === undefined || --opts.lastFx < 0))
          opts.lastFx = opts.fxs.length - 1;
        fx = opts.fxs[opts.lastFx];
      }

      // one-time fx overrides apply to:  $('div').cycle(3,'zoom');
      if (opts.oneTimeFx) {
        fx = opts.oneTimeFx;
        opts.oneTimeFx = null;
      }

      $.fn.cycle.resetState(opts, fx);

      // run the before callbacks
      if (opts.before.length)
        $.each(opts.before, function (i, o) {
          if (p.cycleStop != opts.stopCount) return;
          o.apply(next, [curr, next, opts, fwd]);
        });

      // stage the after callacks
      var after = function () {
        opts.busy = 0;
        $.each(opts.after, function (i, o) {
          if (p.cycleStop != opts.stopCount) return;
          o.apply(next, [curr, next, opts, fwd]);
        });
        if (!p.cycleStop) {
          // queue next transition
          queueNext();
        }
      };

      debug(
        "tx firing(" +
          fx +
          "); currSlide: " +
          opts.currSlide +
          "; nextSlide: " +
          opts.nextSlide
      );

      // get ready to perform the transition
      opts.busy = 1;
      if (opts.fxFn)
        // fx function provided?
        opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
      else if ($.isFunction($.fn.cycle[opts.fx]))
        // fx plugin ?
        $.fn.cycle[opts.fx](
          curr,
          next,
          opts,
          after,
          fwd,
          manual && opts.fastOnEvent
        );
      else
        $.fn.cycle.custom(
          curr,
          next,
          opts,
          after,
          fwd,
          manual && opts.fastOnEvent
        );
    } else {
      queueNext();
    }

    if (changed || opts.nextSlide == opts.currSlide) {
      // calculate the next slide
      var roll;
      opts.lastSlide = opts.currSlide;
      if (opts.random) {
        opts.currSlide = opts.nextSlide;
        if (++opts.randomIndex == els.length) {
          opts.randomIndex = 0;
          opts.randomMap.sort(function (a, b) {
            return Math.random() - 0.5;
          });
        }
        opts.nextSlide = opts.randomMap[opts.randomIndex];
        if (opts.nextSlide == opts.currSlide)
          opts.nextSlide =
            opts.currSlide == opts.slideCount - 1 ? 0 : opts.currSlide + 1;
      } else if (opts.backwards) {
        roll = opts.nextSlide - 1 < 0;
        if (roll && opts.bounce) {
          opts.backwards = !opts.backwards;
          opts.nextSlide = 1;
          opts.currSlide = 0;
        } else {
          opts.nextSlide = roll ? els.length - 1 : opts.nextSlide - 1;
          opts.currSlide = roll ? 0 : opts.nextSlide + 1;
        }
      } else {
        // sequence
        roll = opts.nextSlide + 1 == els.length;
        if (roll && opts.bounce) {
          opts.backwards = !opts.backwards;
          opts.nextSlide = els.length - 2;
          opts.currSlide = els.length - 1;
        } else {
          opts.nextSlide = roll ? 0 : opts.nextSlide + 1;
          opts.currSlide = roll ? els.length - 1 : opts.nextSlide - 1;
        }
      }
    }
    if (changed && opts.pager)
      opts.updateActivePagerLink(
        opts.pager,
        opts.currSlide,
        opts.activePagerClass
      );

    function queueNext() {
      // stage the next transition
      var ms = 0,
        timeout = opts.timeout;
      if (opts.timeout && !opts.continuous) {
        ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
        if (opts.fx == "shuffle") ms -= opts.speedOut;
      } else if (opts.continuous && p.cyclePause)
        // continuous shows work off an after callback, not this timer logic
        ms = 10;
      if (ms > 0)
        p.cycleTimeout = setTimeout(function () {
          go(els, opts, 0, !opts.backwards);
        }, ms);
    }
  }

  // invoked after transition
  $.fn.cycle.updateActivePagerLink = function (pager, currSlide, clsName) {
    $(pager).each(function () {
      $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
    });
  };

  // calculate timeout value for current transition
  function getTimeout(curr, next, opts, fwd) {
    if (opts.timeoutFn) {
      // call user provided calc fn
      var t = opts.timeoutFn.call(curr, curr, next, opts, fwd);
      while (opts.fx != "none" && t - opts.speed < 250)
        // sanitize timeout
        t += opts.speed;
      debug("calculated timeout: " + t + "; speed: " + opts.speed);
      if (t !== false) return t;
    }
    return opts.timeout;
  }

  // expose next/prev function, caller must pass in state
  $.fn.cycle.next = function (opts) {
    advance(opts, 1);
  };
  $.fn.cycle.prev = function (opts) {
    advance(opts, 0);
  };

  // advance slide forward or back
  function advance(opts, moveForward) {
    var val = moveForward ? 1 : -1;
    var els = opts.elements;
    var p = opts.$cont[0],
      timeout = p.cycleTimeout;
    if (timeout) {
      clearTimeout(timeout);
      p.cycleTimeout = 0;
    }
    if (opts.random && val < 0) {
      // move back to the previously display slide
      opts.randomIndex--;
      if (--opts.randomIndex == -2) opts.randomIndex = els.length - 2;
      else if (opts.randomIndex == -1) opts.randomIndex = els.length - 1;
      opts.nextSlide = opts.randomMap[opts.randomIndex];
    } else if (opts.random) {
      opts.nextSlide = opts.randomMap[opts.randomIndex];
    } else {
      opts.nextSlide = opts.currSlide + val;
      if (opts.nextSlide < 0) {
        if (opts.nowrap) return false;
        opts.nextSlide = els.length - 1;
      } else if (opts.nextSlide >= els.length) {
        if (opts.nowrap) return false;
        opts.nextSlide = 0;
      }
    }

    var cb = opts.onPrevNextEvent || opts.prevNextClick; // prevNextClick is deprecated
    if ($.isFunction(cb)) cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
    go(els, opts, 1, moveForward);
    return false;
  }

  function buildPager(els, opts) {
    var $p = $(opts.pager);
    $.each(els, function (i, o) {
      $.fn.cycle.createPagerAnchor(i, o, $p, els, opts);
    });
    opts.updateActivePagerLink(
      opts.pager,
      opts.startingSlide,
      opts.activePagerClass
    );
  }

  $.fn.cycle.createPagerAnchor = function (i, el, $p, els, opts) {
    var a;
    if ($.isFunction(opts.pagerAnchorBuilder)) {
      a = opts.pagerAnchorBuilder(i, el);
      debug("pagerAnchorBuilder(" + i + ", el) returned: " + a);
    } else a = '<a href="#">' + (i + 1) + "</a>";

    if (!a) return;
    var $a = $(a);
    // don't reparent if anchor is in the dom
    if ($a.parents("body").length === 0) {
      var arr = [];
      if ($p.length > 1) {
        $p.each(function () {
          var $clone = $a.clone(true);
          $(this).append($clone);
          arr.push($clone[0]);
        });
        $a = $(arr);
      } else {
        $a.appendTo($p);
      }
    }

    opts.pagerAnchors = opts.pagerAnchors || [];
    opts.pagerAnchors.push($a);

    var pagerFn = function (e) {
      e.preventDefault();
      opts.nextSlide = i;
      var p = opts.$cont[0],
        timeout = p.cycleTimeout;
      if (timeout) {
        clearTimeout(timeout);
        p.cycleTimeout = 0;
      }
      var cb = opts.onPagerEvent || opts.pagerClick; // pagerClick is deprecated
      if ($.isFunction(cb)) cb(opts.nextSlide, els[opts.nextSlide]);
      go(els, opts, 1, opts.currSlide < i); // trigger the trans
      //		return false; // <== allow bubble
    };

    if (/mouseenter|mouseover/i.test(opts.pagerEvent)) {
      $a.hover(pagerFn, function () {
        /* no-op */
      });
    } else {
      $a.bind(opts.pagerEvent, pagerFn);
    }

    if (!/^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
      $a.bind("click.cycle", function () {
        return false;
      }); // suppress click

    var cont = opts.$cont[0];
    var pauseFlag = false; // https://github.com/malsup/cycle/issues/44
    if (opts.pauseOnPagerHover) {
      $a.hover(
        function () {
          pauseFlag = true;
          cont.cyclePause++;
          triggerPause(cont, true, true);
        },
        function () {
          if (pauseFlag) cont.cyclePause--;
          triggerPause(cont, true, true);
        }
      );
    }
  };

  // helper fn to calculate the number of slides between the current and the next
  $.fn.cycle.hopsFromLast = function (opts, fwd) {
    var hops,
      l = opts.lastSlide,
      c = opts.currSlide;
    if (fwd) hops = c > l ? c - l : opts.slideCount - l;
    else hops = c < l ? l - c : l + opts.slideCount - c;
    return hops;
  };

  // fix clearType problems in ie6 by setting an explicit bg color
  // (otherwise text slides look horrible during a fade transition)
  function clearTypeFix($slides) {
    debug("applying clearType background-color hack");
    function hex(s) {
      s = parseInt(s, 10).toString(16);
      return s.length < 2 ? "0" + s : s;
    }
    function getBg(e) {
      for (; e && e.nodeName.toLowerCase() != "html"; e = e.parentNode) {
        var v = $.css(e, "background-color");
        if (v && v.indexOf("rgb") >= 0) {
          var rgb = v.match(/\d+/g);
          return "#" + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
        }
        if (v && v != "transparent") return v;
      }
      return "#ffffff";
    }
    $slides.each(function () {
      $(this).css("background-color", getBg(this));
    });
  }

  // reset common props before the next transition
  $.fn.cycle.commonReset = function (curr, next, opts, w, h, rev) {
    $(opts.elements).not(curr).hide();
    if (typeof opts.cssBefore.opacity == "undefined")
      opts.cssBefore.opacity = 1;
    opts.cssBefore.display = "block";
    if (opts.slideResize && w !== false && next.cycleW > 0)
      opts.cssBefore.width = next.cycleW;
    if (opts.slideResize && h !== false && next.cycleH > 0)
      opts.cssBefore.height = next.cycleH;
    opts.cssAfter = opts.cssAfter || {};
    opts.cssAfter.display = "none";
    $(curr).css("zIndex", opts.slideCount + (rev === true ? 1 : 0));
    $(next).css("zIndex", opts.slideCount + (rev === true ? 0 : 1));
  };

  // the actual fn for effecting a transition
  $.fn.cycle.custom = function (curr, next, opts, cb, fwd, speedOverride) {
    var $l = $(curr),
      $n = $(next);
    var speedIn = opts.speedIn,
      speedOut = opts.speedOut,
      easeIn = opts.easeIn,
      easeOut = opts.easeOut,
      animInDelay = opts.animInDelay,
      animOutDelay = opts.animOutDelay;
    $n.css(opts.cssBefore);
    if (speedOverride) {
      if (typeof speedOverride == "number") speedIn = speedOut = speedOverride;
      else speedIn = speedOut = 1;
      easeIn = easeOut = null;
    }
    var fn = function () {
      $n.delay(animInDelay).animate(opts.animIn, speedIn, easeIn, function () {
        cb();
      });
    };
    $l.delay(animOutDelay).animate(
      opts.animOut,
      speedOut,
      easeOut,
      function () {
        $l.css(opts.cssAfter);
        if (!opts.sync) fn();
      }
    );
    if (opts.sync) fn();
  };

  // transition definitions - only fade is defined here, transition pack defines the rest
  $.fn.cycle.transitions = {
    fade: function ($cont, $slides, opts) {
      $slides.not(":eq(" + opts.currSlide + ")").css("opacity", 0);
      opts.before.push(function (curr, next, opts) {
        $.fn.cycle.commonReset(curr, next, opts);
        opts.cssBefore.opacity = 0;
      });
      opts.animIn = { opacity: 1 };
      opts.animOut = { opacity: 0 };
      opts.cssBefore = { top: 0, left: 0 };
    },
  };

  $.fn.cycle.ver = function () {
    return ver;
  };

  // override these globally if you like (they are all optional)
  $.fn.cycle.defaults = {
    activePagerClass: "activeSlide", // class name used for the active pager link
    after: null, // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
    allowPagerClickBubble: false, // allows or prevents click event on pager anchors from bubbling
    animIn: null, // properties that define how the slide animates in
    animInDelay: 0, // allows delay before next slide transitions in
    animOut: null, // properties that define how the slide animates out
    animOutDelay: 0, // allows delay before current slide transitions out
    aspect: false, // preserve aspect ratio during fit resizing, cropping if necessary (must be used with fit option)
    autostop: 0, // true to end slideshow after X transitions (where X == slide count)
    autostopCount: 0, // number of transitions (optionally used with autostop to define X)
    backwards: false, // true to start slideshow at last slide and move backwards through the stack
    before: null, // transition callback (scope set to element to be shown):     function(currSlideElement, nextSlideElement, options, forwardFlag)
    center: null, // set to true to have cycle add top/left margin to each slide (use with width and height options)
    cleartype: !$.support.opacity, // true if clearType corrections should be applied (for IE)
    cleartypeNoBg: false, // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
    containerResize: 1, // resize container to fit largest slide
    containerResizeHeight: 0, // resize containers height to fit the largest slide but leave the width dynamic
    continuous: 0, // true to start next transition immediately after current one completes
    cssAfter: null, // properties that defined the state of the slide after transitioning out
    cssBefore: null, // properties that define the initial state of the slide before transitioning in
    delay: 0, // additional delay (in ms) for first transition (hint: can be negative)
    easeIn: null, // easing for "in" transition
    easeOut: null, // easing for "out" transition
    easing: null, // easing method for both in and out transitions
    end: null, // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
    fastOnEvent: 0, // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
    fit: 0, // force slides to fit container
    fx: "fade", // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle')
    fxFn: null, // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
    height: "auto", // container height (if the 'fit' option is true, the slides will be set to this height as well)
    manualTrump: true, // causes manual transition to stop an active transition instead of being ignored
    metaAttr: "cycle", // data- attribute that holds the option data for the slideshow
    next: null, // element, jQuery object, or jQuery selector string for the element to use as event trigger for next slide
    nowrap: 0, // true to prevent slideshow from wrapping
    onPagerEvent: null, // callback fn for pager events: function(zeroBasedSlideIndex, slideElement)
    onPrevNextEvent: null, // callback fn for prev/next events: function(isNext, zeroBasedSlideIndex, slideElement)
    pager: null, // element, jQuery object, or jQuery selector string for the element to use as pager container
    pagerAnchorBuilder: null, // callback fn for building anchor links:  function(index, DOMelement)
    pagerEvent: "click.cycle", // name of event which drives the pager navigation
    pause: 0, // true to enable "pause on hover"
    pauseOnPagerHover: 0, // true to pause when hovering over pager link
    prev: null, // element, jQuery object, or jQuery selector string for the element to use as event trigger for previous slide
    prevNextEvent: "click.cycle", // event which drives the manual transition to the previous or next slide
    random: 0, // true for random, false for sequence (not applicable to shuffle fx)
    randomizeEffects: 1, // valid when multiple effects are used; true to make the effect sequence random
    requeueOnImageNotLoaded: true, // requeue the slideshow if any image slides are not yet loaded
    requeueTimeout: 250, // ms delay for requeue
    rev: 0, // causes animations to transition in reverse (for effects that support it such as scrollHorz/scrollVert/shuffle)
    shuffle: null, // coords for shuffle animation, ex: { top:15, left: 200 }
    skipInitializationCallbacks: false, // set to true to disable the first before/after callback that occurs prior to any transition
    slideExpr: null, // expression for selecting slides (if something other than all children is required)
    slideResize: 1, // force slide width/height to fixed size before every transition
    speed: 1000, // speed of the transition (any valid fx speed value)
    speedIn: null, // speed of the 'in' transition
    speedOut: null, // speed of the 'out' transition
    startingSlide: undefined, // zero-based index of the first slide to be displayed
    sync: 1, // true if in/out transitions should occur simultaneously
    timeout: 4000, // milliseconds between slide transitions (0 to disable auto advance)
    timeoutFn: null, // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
    updateActivePagerLink: null, // callback fn invoked to update the active pager link (adds/removes activePagerClass style)
    width: null, // container width (if the 'fit' option is true, the slides will be set to this width as well)
  };
})(jQuery);

/*!
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function ($) {
  "use strict";

  //
  // These functions define slide initialization and properties for the named
  // transitions. To save file size feel free to remove any of these that you
  // don't need.
  //
  $.fn.cycle.transitions.none = function ($cont, $slides, opts) {
    opts.fxFn = function (curr, next, opts, after) {
      $(next).show();
      $(curr).hide();
      after();
    };
  };

  // not a cross-fade, fadeout only fades out the top slide
  $.fn.cycle.transitions.fadeout = function ($cont, $slides, opts) {
    $slides
      .not(":eq(" + opts.currSlide + ")")
      .css({ display: "block", opacity: 1 });
    opts.before.push(function (curr, next, opts, w, h, rev) {
      $(curr).css("zIndex", opts.slideCount + (rev !== true ? 1 : 0));
      $(next).css("zIndex", opts.slideCount + (rev !== true ? 0 : 1));
    });
    opts.animIn.opacity = 1;
    opts.animOut.opacity = 0;
    opts.cssBefore.opacity = 1;
    opts.cssBefore.display = "block";
    opts.cssAfter.zIndex = 0;
  };

  // scrollUp/Down/Left/Right
  $.fn.cycle.transitions.scrollUp = function ($cont, $slides, opts) {
    $cont.css("overflow", "hidden");
    opts.before.push($.fn.cycle.commonReset);
    var h = $cont.height();
    opts.cssBefore.top = h;
    opts.cssBefore.left = 0;
    opts.cssFirst.top = 0;
    opts.animIn.top = 0;
    opts.animOut.top = -h;
  };
  $.fn.cycle.transitions.scrollDown = function ($cont, $slides, opts) {
    $cont.css("overflow", "hidden");
    opts.before.push($.fn.cycle.commonReset);
    var h = $cont.height();
    opts.cssFirst.top = 0;
    opts.cssBefore.top = -h;
    opts.cssBefore.left = 0;
    opts.animIn.top = 0;
    opts.animOut.top = h;
  };
  $.fn.cycle.transitions.scrollLeft = function ($cont, $slides, opts) {
    $cont.css("overflow", "hidden");
    opts.before.push($.fn.cycle.commonReset);
    var w = $cont.width();
    opts.cssFirst.left = 0;
    opts.cssBefore.left = w;
    opts.cssBefore.top = 0;
    opts.animIn.left = 0;
    opts.animOut.left = 0 - w;
  };
  $.fn.cycle.transitions.scrollRight = function ($cont, $slides, opts) {
    $cont.css("overflow", "hidden");
    opts.before.push($.fn.cycle.commonReset);
    var w = $cont.width();
    opts.cssFirst.left = 0;
    opts.cssBefore.left = -w;
    opts.cssBefore.top = 0;
    opts.animIn.left = 0;
    opts.animOut.left = w;
  };
  $.fn.cycle.transitions.scrollHorz = function ($cont, $slides, opts) {
    $cont.css("overflow", "hidden").width();
    opts.before.push(function (curr, next, opts, fwd) {
      if (opts.rev) fwd = !fwd;
      $.fn.cycle.commonReset(curr, next, opts);
      opts.cssBefore.left = fwd ? next.cycleW - 1 : 1 - next.cycleW;
      opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
    });
    opts.cssFirst.left = 0;
    opts.cssBefore.top = 0;
    opts.animIn.left = 0;
    opts.animOut.top = 0;
  };
  $.fn.cycle.transitions.scrollVert = function ($cont, $slides, opts) {
    $cont.css("overflow", "hidden");
    opts.before.push(function (curr, next, opts, fwd) {
      if (opts.rev) fwd = !fwd;
      $.fn.cycle.commonReset(curr, next, opts);
      opts.cssBefore.top = fwd ? 1 - next.cycleH : next.cycleH - 1;
      opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
    });
    opts.cssFirst.top = 0;
    opts.cssBefore.left = 0;
    opts.animIn.top = 0;
    opts.animOut.left = 0;
  };

  // slideX/slideY
  $.fn.cycle.transitions.slideX = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $(opts.elements).not(curr).hide();
      $.fn.cycle.commonReset(curr, next, opts, false, true);
      opts.animIn.width = next.cycleW;
    });
    opts.cssBefore.left = 0;
    opts.cssBefore.top = 0;
    opts.cssBefore.width = 0;
    opts.animIn.width = "show";
    opts.animOut.width = 0;
  };
  $.fn.cycle.transitions.slideY = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $(opts.elements).not(curr).hide();
      $.fn.cycle.commonReset(curr, next, opts, true, false);
      opts.animIn.height = next.cycleH;
    });
    opts.cssBefore.left = 0;
    opts.cssBefore.top = 0;
    opts.cssBefore.height = 0;
    opts.animIn.height = "show";
    opts.animOut.height = 0;
  };

  // shuffle
  $.fn.cycle.transitions.shuffle = function ($cont, $slides, opts) {
    var i,
      w = $cont.css("overflow", "visible").width();
    $slides.css({ left: 0, top: 0 });
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, true, true);
    });
    // only adjust speed once!
    if (!opts.speedAdjusted) {
      opts.speed = opts.speed / 2; // shuffle has 2 transitions
      opts.speedAdjusted = true;
    }
    opts.random = 0;
    opts.shuffle = opts.shuffle || { left: -w, top: 15 };
    opts.els = [];
    for (i = 0; i < $slides.length; i++) opts.els.push($slides[i]);

    for (i = 0; i < opts.currSlide; i++) opts.els.push(opts.els.shift());

    // custom transition fn (hat tip to Benjamin Sterling for this bit of sweetness!)
    opts.fxFn = function (curr, next, opts, cb, fwd) {
      if (opts.rev) fwd = !fwd;
      var $el = fwd ? $(curr) : $(next);
      $(next).css(opts.cssBefore);
      var count = opts.slideCount;
      $el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function () {
        var hops = $.fn.cycle.hopsFromLast(opts, fwd);
        for (var k = 0; k < hops; k++) {
          if (fwd) opts.els.push(opts.els.shift());
          else opts.els.unshift(opts.els.pop());
        }
        if (fwd) {
          for (var i = 0, len = opts.els.length; i < len; i++)
            $(opts.els[i]).css("z-index", len - i + count);
        } else {
          var z = $(curr).css("z-index");
          $el.css("z-index", parseInt(z, 10) + 1 + count);
        }
        $el.animate(
          { left: 0, top: 0 },
          opts.speedOut,
          opts.easeOut,
          function () {
            $(fwd ? this : curr).hide();
            if (cb) cb();
          }
        );
      });
    };
    $.extend(opts.cssBefore, { display: "block", opacity: 1, top: 0, left: 0 });
  };

  // turnUp/Down/Left/Right
  $.fn.cycle.transitions.turnUp = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, false);
      opts.cssBefore.top = next.cycleH;
      opts.animIn.height = next.cycleH;
      opts.animOut.width = next.cycleW;
    });
    opts.cssFirst.top = 0;
    opts.cssBefore.left = 0;
    opts.cssBefore.height = 0;
    opts.animIn.top = 0;
    opts.animOut.height = 0;
  };
  $.fn.cycle.transitions.turnDown = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, false);
      opts.animIn.height = next.cycleH;
      opts.animOut.top = curr.cycleH;
    });
    opts.cssFirst.top = 0;
    opts.cssBefore.left = 0;
    opts.cssBefore.top = 0;
    opts.cssBefore.height = 0;
    opts.animOut.height = 0;
  };
  $.fn.cycle.transitions.turnLeft = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, false, true);
      opts.cssBefore.left = next.cycleW;
      opts.animIn.width = next.cycleW;
    });
    opts.cssBefore.top = 0;
    opts.cssBefore.width = 0;
    opts.animIn.left = 0;
    opts.animOut.width = 0;
  };
  $.fn.cycle.transitions.turnRight = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, false, true);
      opts.animIn.width = next.cycleW;
      opts.animOut.left = curr.cycleW;
    });
    $.extend(opts.cssBefore, { top: 0, left: 0, width: 0 });
    opts.animIn.left = 0;
    opts.animOut.width = 0;
  };

  // zoom
  $.fn.cycle.transitions.zoom = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, false, false, true);
      opts.cssBefore.top = next.cycleH / 2;
      opts.cssBefore.left = next.cycleW / 2;
      $.extend(opts.animIn, {
        top: 0,
        left: 0,
        width: next.cycleW,
        height: next.cycleH,
      });
      $.extend(opts.animOut, {
        width: 0,
        height: 0,
        top: curr.cycleH / 2,
        left: curr.cycleW / 2,
      });
    });
    opts.cssFirst.top = 0;
    opts.cssFirst.left = 0;
    opts.cssBefore.width = 0;
    opts.cssBefore.height = 0;
  };

  // fadeZoom
  $.fn.cycle.transitions.fadeZoom = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, false, false);
      opts.cssBefore.left = next.cycleW / 2;
      opts.cssBefore.top = next.cycleH / 2;
      $.extend(opts.animIn, {
        top: 0,
        left: 0,
        width: next.cycleW,
        height: next.cycleH,
      });
    });
    opts.cssBefore.width = 0;
    opts.cssBefore.height = 0;
    opts.animOut.opacity = 0;
  };

  // blindX
  $.fn.cycle.transitions.blindX = function ($cont, $slides, opts) {
    var w = $cont.css("overflow", "hidden").width();
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts);
      opts.animIn.width = next.cycleW;
      opts.animOut.left = curr.cycleW;
    });
    opts.cssBefore.left = w;
    opts.cssBefore.top = 0;
    opts.animIn.left = 0;
    opts.animOut.left = w;
  };
  // blindY
  $.fn.cycle.transitions.blindY = function ($cont, $slides, opts) {
    var h = $cont.css("overflow", "hidden").height();
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts);
      opts.animIn.height = next.cycleH;
      opts.animOut.top = curr.cycleH;
    });
    opts.cssBefore.top = h;
    opts.cssBefore.left = 0;
    opts.animIn.top = 0;
    opts.animOut.top = h;
  };
  // blindZ
  $.fn.cycle.transitions.blindZ = function ($cont, $slides, opts) {
    var h = $cont.css("overflow", "hidden").height();
    var w = $cont.width();
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts);
      opts.animIn.height = next.cycleH;
      opts.animOut.top = curr.cycleH;
    });
    opts.cssBefore.top = h;
    opts.cssBefore.left = w;
    opts.animIn.top = 0;
    opts.animIn.left = 0;
    opts.animOut.top = h;
    opts.animOut.left = w;
  };

  // growX - grow horizontally from centered 0 width
  $.fn.cycle.transitions.growX = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, false, true);
      opts.cssBefore.left = this.cycleW / 2;
      opts.animIn.left = 0;
      opts.animIn.width = this.cycleW;
      opts.animOut.left = 0;
    });
    opts.cssBefore.top = 0;
    opts.cssBefore.width = 0;
  };
  // growY - grow vertically from centered 0 height
  $.fn.cycle.transitions.growY = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, false);
      opts.cssBefore.top = this.cycleH / 2;
      opts.animIn.top = 0;
      opts.animIn.height = this.cycleH;
      opts.animOut.top = 0;
    });
    opts.cssBefore.height = 0;
    opts.cssBefore.left = 0;
  };

  // curtainX - squeeze in both edges horizontally
  $.fn.cycle.transitions.curtainX = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, false, true, true);
      opts.cssBefore.left = next.cycleW / 2;
      opts.animIn.left = 0;
      opts.animIn.width = this.cycleW;
      opts.animOut.left = curr.cycleW / 2;
      opts.animOut.width = 0;
    });
    opts.cssBefore.top = 0;
    opts.cssBefore.width = 0;
  };
  // curtainY - squeeze in both edges vertically
  $.fn.cycle.transitions.curtainY = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, false, true);
      opts.cssBefore.top = next.cycleH / 2;
      opts.animIn.top = 0;
      opts.animIn.height = next.cycleH;
      opts.animOut.top = curr.cycleH / 2;
      opts.animOut.height = 0;
    });
    opts.cssBefore.height = 0;
    opts.cssBefore.left = 0;
  };

  // cover - curr slide covered by next slide
  $.fn.cycle.transitions.cover = function ($cont, $slides, opts) {
    var d = opts.direction || "left";
    var w = $cont.css("overflow", "hidden").width();
    var h = $cont.height();
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts);
      opts.cssAfter.display = "";
      if (d == "right") opts.cssBefore.left = -w;
      else if (d == "up") opts.cssBefore.top = h;
      else if (d == "down") opts.cssBefore.top = -h;
      else opts.cssBefore.left = w;
    });
    opts.animIn.left = 0;
    opts.animIn.top = 0;
    opts.cssBefore.top = 0;
    opts.cssBefore.left = 0;
  };

  // uncover - curr slide moves off next slide
  $.fn.cycle.transitions.uncover = function ($cont, $slides, opts) {
    var d = opts.direction || "left";
    var w = $cont.css("overflow", "hidden").width();
    var h = $cont.height();
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, true, true);
      if (d == "right") opts.animOut.left = w;
      else if (d == "up") opts.animOut.top = -h;
      else if (d == "down") opts.animOut.top = h;
      else opts.animOut.left = -w;
    });
    opts.animIn.left = 0;
    opts.animIn.top = 0;
    opts.cssBefore.top = 0;
    opts.cssBefore.left = 0;
  };

  // toss - move top slide and fade away
  $.fn.cycle.transitions.toss = function ($cont, $slides, opts) {
    var w = $cont.css("overflow", "visible").width();
    var h = $cont.height();
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, true, true);
      // provide default toss settings if animOut not provided
      if (!opts.animOut.left && !opts.animOut.top)
        $.extend(opts.animOut, { left: w * 2, top: -h / 2, opacity: 0 });
      else opts.animOut.opacity = 0;
    });
    opts.cssBefore.left = 0;
    opts.cssBefore.top = 0;
    opts.animIn.left = 0;
  };

  // wipe - clip animation
  $.fn.cycle.transitions.wipe = function ($cont, $slides, opts) {
    var w = $cont.css("overflow", "hidden").width();
    var h = $cont.height();
    opts.cssBefore = opts.cssBefore || {};
    var clip;
    if (opts.clip) {
      if (/l2r/.test(opts.clip)) clip = "rect(0px 0px " + h + "px 0px)";
      else if (/r2l/.test(opts.clip))
        clip = "rect(0px " + w + "px " + h + "px " + w + "px)";
      else if (/t2b/.test(opts.clip)) clip = "rect(0px " + w + "px 0px 0px)";
      else if (/b2t/.test(opts.clip))
        clip = "rect(" + h + "px " + w + "px " + h + "px 0px)";
      else if (/zoom/.test(opts.clip)) {
        var top = parseInt(h / 2, 10);
        var left = parseInt(w / 2, 10);
        clip =
          "rect(" + top + "px " + left + "px " + top + "px " + left + "px)";
      }
    }

    opts.cssBefore.clip =
      opts.cssBefore.clip || clip || "rect(0px 0px 0px 0px)";

    var d = opts.cssBefore.clip.match(/(\d+)/g);
    var t = parseInt(d[0], 10),
      r = parseInt(d[1], 10),
      b = parseInt(d[2], 10),
      l = parseInt(d[3], 10);

    opts.before.push(function (curr, next, opts) {
      if (curr == next) return;
      var $curr = $(curr),
        $next = $(next);
      $.fn.cycle.commonReset(curr, next, opts, true, true, false);
      opts.cssAfter.display = "block";

      var step = 1,
        count = parseInt(opts.speedIn / 13, 10) - 1;
      (function f() {
        var tt = t ? t - parseInt(step * (t / count), 10) : 0;
        var ll = l ? l - parseInt(step * (l / count), 10) : 0;
        var bb = b < h ? b + parseInt(step * ((h - b) / count || 1), 10) : h;
        var rr = r < w ? r + parseInt(step * ((w - r) / count || 1), 10) : w;
        $next.css({
          clip: "rect(" + tt + "px " + rr + "px " + bb + "px " + ll + "px)",
        });
        step++ <= count ? setTimeout(f, 13) : $curr.css("display", "none");
      })();
    });
    $.extend(opts.cssBefore, { display: "block", opacity: 1, top: 0, left: 0 });
    opts.animIn = { left: 0 };
    opts.animOut = { left: 0 };
  };
})(jQuery);
/**
 *  @file
 *  A simple jQuery Cycle Div Slideshow Rotator.
 */

/**
 * This will set our initial behavior, by starting up each individual slideshow.
 */
(function ($) {
  Drupal.behaviors.viewsSlideshowCycle = {
    attach: function (context) {
      $(
        ".views_slideshow_cycle_main:not(.viewsSlideshowCycle-processed)",
        context
      )
        .addClass("viewsSlideshowCycle-processed")
        .each(function () {
          var fullId = "#" + $(this).attr("id");
          var settings = Drupal.settings.viewsSlideshowCycle[fullId];
          settings.targetId = "#" + $(fullId + " :first").attr("id");

          settings.slideshowId = settings.targetId.replace(
            "#views_slideshow_cycle_teaser_section_",
            ""
          );
          // Pager after function.
          var pager_after_fn = function (curr, next, opts) {
            // Need to do some special handling on first load.
            var slideNum = opts.currSlide;
            if (
              typeof settings.processedAfter == "undefined" ||
              !settings.processedAfter
            ) {
              settings.processedAfter = 1;
              slideNum =
                typeof settings.opts.startingSlide == "undefined"
                  ? 0
                  : settings.opts.startingSlide;
            }
            if (settings.pause_after_slideshow) {
              opts.counter += 1;
              if (opts.counter == settings.num_divs + 1) {
                opts.counter = 1;
                Drupal.viewsSlideshow.action({
                  action: "pause",
                  slideshowID: settings.slideshowId,
                  force: true,
                });
              }
            }
            Drupal.viewsSlideshow.action({
              action: "transitionEnd",
              slideshowID: settings.slideshowId,
              slideNum: slideNum,
            });
          };
          // Pager before function.
          var pager_before_fn = function (curr, next, opts) {
            $(document).trigger("drupal:views_slideshow_cycle:before", {
              curr: curr,
              next: next,
              opts: opts,
              settings: settings,
            });

            var slideNum = opts.nextSlide;

            // Remember last slide.
            if (settings.remember_slide) {
              createCookie(
                settings.vss_id,
                slideNum,
                settings.remember_slide_days
              );
            }

            // Make variable height.
            if (!settings.fixed_height) {
              //get the height of the current slide
              var $ht = $(next).height();
              //set the container's height to that of the current slide
              $(next).parent().animate({ height: $ht });
            }

            // Need to do some special handling on first load.
            if (
              typeof settings.processedBefore == "undefined" ||
              !settings.processedBefore
            ) {
              settings.processedBefore = 1;
              slideNum =
                typeof opts.startingSlide == "undefined"
                  ? 0
                  : opts.startingSlide;
            }

            Drupal.viewsSlideshow.action({
              action: "transitionBegin",
              slideshowID: settings.slideshowId,
              slideNum: slideNum,
            });
          };
          settings.loaded = false;

          settings.opts = {
            speed: settings.speed,
            timeout: settings.timeout,
            delay: settings.delay,
            sync: settings.sync,
            random: settings.random,
            nowrap: settings.nowrap,
            pause_after_slideshow: settings.pause_after_slideshow,
            counter: 0,
            after: pager_after_fn,
            before: pager_before_fn,
            cleartype: settings.cleartype ? true : false,
            cleartypeNoBg: settings.cleartypenobg ? true : false,
          };

          // Set the starting slide if we are supposed to remember the slide
          if (settings.remember_slide) {
            var startSlide = readCookie(settings.vss_id);
            if (startSlide == null) {
              startSlide = 0;
            }
            settings.opts.startingSlide = parseInt(startSlide);
          }

          if (settings.effect == "none") {
            settings.opts.speed = 1;
          } else {
            settings.opts.fx = settings.effect;
          }

          // Take starting item from fragment.
          var hash = location.hash;
          if (hash) {
            var hash = hash.replace("#", "");
            var aHash = hash.split(";");
            var aHashLen = aHash.length;

            // Loop through all the possible starting points.
            for (var i = 0; i < aHashLen; i++) {
              // Split the hash into two parts. One part is the slideshow id the
              // other is the slide number.
              var initialInfo = aHash[i].split(":");
              // The id in the hash should match our slideshow.
              // The slide number chosen shouldn't be larger than the number of
              // slides we have.
              if (
                settings.slideshowId == initialInfo[0] &&
                settings.num_divs > initialInfo[1]
              ) {
                settings.opts.startingSlide = parseInt(initialInfo[1]);
              }
            }
          }

          // Pause on hover.
          if (settings.pause) {
            var mouseIn = function () {
              Drupal.viewsSlideshow.action({
                action: "pause",
                slideshowID: settings.slideshowId,
              });
            };

            var mouseOut = function () {
              Drupal.viewsSlideshow.action({
                action: "play",
                slideshowID: settings.slideshowId,
              });
            };

            if (jQuery.fn.hoverIntent) {
              $(
                "#views_slideshow_cycle_teaser_section_" + settings.vss_id
              ).hoverIntent(mouseIn, mouseOut);
            } else {
              $(
                "#views_slideshow_cycle_teaser_section_" + settings.vss_id
              ).hover(mouseIn, mouseOut);
            }
          }

          // Play on hover.
          if (settings.play_on_hover) {
            var mouseIn = function () {
              Drupal.viewsSlideshow.action({
                action: "play",
                slideshowID: settings.slideshowId,
                force: true,
              });
            };

            var mouseOut = function () {
              Drupal.viewsSlideshow.action({
                action: "pause",
                slideshowID: settings.slideshowId,
              });
            };

            if (jQuery.fn.hoverIntent) {
              $(
                "#views_slideshow_cycle_teaser_section_" + settings.vss_id
              ).hoverIntent(mouseIn, mouseOut);
            } else {
              $(
                "#views_slideshow_cycle_teaser_section_" + settings.vss_id
              ).hover(mouseIn, mouseOut);
            }
          }

          // Pause on clicking of the slide.
          if (settings.pause_on_click) {
            $("#views_slideshow_cycle_teaser_section_" + settings.vss_id).click(
              function () {
                Drupal.viewsSlideshow.action({
                  action: "pause",
                  slideshowID: settings.slideshowId,
                  force: true,
                });
              }
            );
          }

          if (typeof JSON != "undefined") {
            var advancedOptions = JSON.parse(settings.advanced_options);
            for (var option in advancedOptions) {
              switch (option) {
                // Standard Options
                case "activePagerClass":
                case "allowPagerClickBubble":
                case "autostop":
                case "autostopCount":
                case "backwards":
                case "bounce":
                case "cleartype":
                case "cleartypeNoBg":
                case "containerResize":
                case "continuous":
                case "delay":
                case "easeIn":
                case "easeOut":
                case "easing":
                case "fastOnEvent":
                case "fit":
                case "fx":
                case "manualTrump":
                case "metaAttr":
                case "next":
                case "nowrap":
                case "pager":
                case "pagerEvent":
                case "pause":
                case "pauseOnPagerHover":
                case "prev":
                case "prevNextEvent":
                case "random":
                case "randomizeEffects":
                case "requeueOnImageNotLoaded":
                case "requeueTimeout":
                case "rev":
                case "slideExpr":
                case "slideResize":
                case "speed":
                case "speedIn":
                case "speedOut":
                case "startingSlide":
                case "sync":
                case "timeout":
                  var optionValue = advancedOptions[option];
                  optionValue =
                    Drupal.viewsSlideshowCycle.advancedOptionCleanup(
                      optionValue
                    );
                  settings.opts[option] = optionValue;
                  break;

                // If width is set we need to disable resizing.
                case "width":
                  var optionValue = advancedOptions["width"];
                  optionValue =
                    Drupal.viewsSlideshowCycle.advancedOptionCleanup(
                      optionValue
                    );
                  settings.opts["width"] = optionValue;
                  settings.opts["containerResize"] = 0;
                  break;

                // If height is set we need to set fixed_height to true.
                case "height":
                  var optionValue = advancedOptions["height"];
                  optionValue =
                    Drupal.viewsSlideshowCycle.advancedOptionCleanup(
                      optionValue
                    );
                  settings.opts["height"] = optionValue;
                  settings.fixed_height = 1;
                  break;

                // These process options that look like {top:50, bottom:20}
                case "animIn":
                case "animInDelay":
                case "animOut":
                case "animOutDelay":
                case "cssBefore":
                case "cssAfter":
                case "shuffle":
                  var cssValue = advancedOptions[option];
                  cssValue =
                    Drupal.viewsSlideshowCycle.advancedOptionCleanup(cssValue);
                  settings.opts[option] = eval("(" + cssValue + ")");
                  break;

                // These options have their own functions.
                case "after":
                  var afterValue = advancedOptions[option];
                  afterValue =
                    Drupal.viewsSlideshowCycle.advancedOptionCleanup(
                      afterValue
                    );
                  // transition callback (scope set to element that was shown): function(currSlideElement, nextSlideElement, options, forwardFlag)
                  settings.opts[option] = function (
                    currSlideElement,
                    nextSlideElement,
                    options,
                    forwardFlag
                  ) {
                    pager_after_fn(currSlideElement, nextSlideElement, options);
                    eval(afterValue);
                  };
                  break;

                case "before":
                  var beforeValue = advancedOptions[option];
                  beforeValue =
                    Drupal.viewsSlideshowCycle.advancedOptionCleanup(
                      beforeValue
                    );
                  // transition callback (scope set to element to be shown):     function(currSlideElement, nextSlideElement, options, forwardFlag)
                  settings.opts[option] = function (
                    currSlideElement,
                    nextSlideElement,
                    options,
                    forwardFlag
                  ) {
                    pager_before_fn(
                      currSlideElement,
                      nextSlideElement,
                      options
                    );
                    eval(beforeValue);
                  };
                  break;

                case "end":
                  var endValue = advancedOptions[option];
                  endValue =
                    Drupal.viewsSlideshowCycle.advancedOptionCleanup(endValue);
                  // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
                  settings.opts[option] = function (options) {
                    eval(endValue);
                  };
                  break;

                case "fxFn":
                  var fxFnValue = advancedOptions[option];
                  fxFnValue =
                    Drupal.viewsSlideshowCycle.advancedOptionCleanup(fxFnValue);
                  // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
                  settings.opts[option] = function (
                    currSlideElement,
                    nextSlideElement,
                    options,
                    afterCalback,
                    forwardFlag
                  ) {
                    eval(fxFnValue);
                  };
                  break;

                case "onPagerEvent":
                  var onPagerEventValue = advancedOptions[option];
                  onPagerEventValue =
                    Drupal.viewsSlideshowCycle.advancedOptionCleanup(
                      onPagerEventValue
                    );
                  settings.opts[option] = function (
                    zeroBasedSlideIndex,
                    slideElement
                  ) {
                    eval(onPagerEventValue);
                  };
                  break;

                case "onPrevNextEvent":
                  var onPrevNextEventValue = advancedOptions[option];
                  onPrevNextEventValue =
                    Drupal.viewsSlideshowCycle.advancedOptionCleanup(
                      onPrevNextEventValue
                    );
                  settings.opts[option] = function (
                    isNext,
                    zeroBasedSlideIndex,
                    slideElement
                  ) {
                    eval(onPrevNextEventValue);
                  };
                  break;

                case "pagerAnchorBuilder":
                  var pagerAnchorBuilderValue = advancedOptions[option];
                  pagerAnchorBuilderValue =
                    Drupal.viewsSlideshowCycle.advancedOptionCleanup(
                      pagerAnchorBuilderValue
                    );
                  // callback fn for building anchor links:  function(index, DOMelement)
                  settings.opts[option] = function (index, DOMelement) {
                    var returnVal = "";
                    eval(pagerAnchorBuilderValue);
                    return returnVal;
                  };
                  break;

                case "pagerClick":
                  var pagerClickValue = advancedOptions[option];
                  pagerClickValue =
                    Drupal.viewsSlideshowCycle.advancedOptionCleanup(
                      pagerClickValue
                    );
                  // callback fn for pager clicks:    function(zeroBasedSlideIndex, slideElement)
                  settings.opts[option] = function (
                    zeroBasedSlideIndex,
                    slideElement
                  ) {
                    eval(pagerClickValue);
                  };
                  break;

                case "paused":
                  var pausedValue = advancedOptions[option];
                  pausedValue =
                    Drupal.viewsSlideshowCycle.advancedOptionCleanup(
                      pausedValue
                    );
                  // undocumented callback when slideshow is paused:    function(cont, opts, byHover)
                  settings.opts[option] = function (cont, opts, byHover) {
                    eval(pausedValue);
                  };
                  break;

                case "resumed":
                  var resumedValue = advancedOptions[option];
                  resumedValue =
                    Drupal.viewsSlideshowCycle.advancedOptionCleanup(
                      resumedValue
                    );
                  // undocumented callback when slideshow is resumed:    function(cont, opts, byHover)
                  settings.opts[option] = function (cont, opts, byHover) {
                    eval(resumedValue);
                  };
                  break;

                case "timeoutFn":
                  var timeoutFnValue = advancedOptions[option];
                  timeoutFnValue =
                    Drupal.viewsSlideshowCycle.advancedOptionCleanup(
                      timeoutFnValue
                    );
                  settings.opts[option] = function (
                    currSlideElement,
                    nextSlideElement,
                    options,
                    forwardFlag
                  ) {
                    // Set a sane return value unless function overrides it.
                    var returnVal = settings.timeout;
                    eval(timeoutFnValue);
                    return returnVal;
                  };
                  break;

                case "updateActivePagerLink":
                  var updateActivePagerLinkValue = advancedOptions[option];
                  updateActivePagerLinkValue =
                    Drupal.viewsSlideshowCycle.advancedOptionCleanup(
                      updateActivePagerLinkValue
                    );
                  // callback fn invoked to update the active pager link (adds/removes activePagerClass style)
                  settings.opts[option] = function (pager, currSlideIndex) {
                    eval(updateActivePagerLinkValue);
                  };
                  break;
              }
            }
          }

          // If selected wait for the images to be loaded.
          // otherwise just load the slideshow.
          if (settings.wait_for_image_load) {
            // For IE/Chrome/Opera we if there are images then we need to make
            // sure the images are loaded before starting the slideshow.
            settings.totalImages = $(settings.targetId + " img").length;
            if (settings.totalImages) {
              settings.loadedImages = 0;

              // Add a load event for each image.
              $(settings.targetId + " img").each(function () {
                var $imageElement = $(this);
                $imageElement.bind("load", function () {
                  Drupal.viewsSlideshowCycle.imageWait(fullId);
                });

                // Removing the source and adding it again will fire the load event.
                var imgSrc = $imageElement.attr("src");
                $imageElement.attr("src", "");
                $imageElement.attr("src", imgSrc);
              });

              // We need to set a timeout so that the slideshow doesn't wait
              // indefinitely for all images to load.
              setTimeout(
                "Drupal.viewsSlideshowCycle.load('" + fullId + "')",
                settings.wait_for_image_load_timeout
              );
            } else {
              Drupal.viewsSlideshowCycle.load(fullId);
            }
          } else {
            Drupal.viewsSlideshowCycle.load(fullId);
          }
        });
    },
  };

  /**
   * Views Slideshow swipe support.
   */
  Drupal.behaviors.viewsSlideshowSwipe = {
    attach: function (context) {
      var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
      if (isTouch === true && $(".views-slideshow-cycle-main-frame").length) {
        var $slider = $(".views-slideshow-cycle-main-frame"),
          opts = {
            start: { x: 0, y: 0 },
            end: { x: 0, y: 0 },
            hdiff: 0,
            vdiff: 0,
            length: 0,
            angle: null,
            direction: null,
          },
          optsReset = $.extend(true, {}, opts),
          H_THRESHOLD = 110, // roughly one inch effective resolution on ipad
          V_THRESHOLD = 50;
        $slider
          .data("bw", opts)
          .bind("touchstart.cycle", function (e) {
            var touch =
              e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            if (e.originalEvent.touches.length == 1) {
              var data = $(this).data("bw");
              data.start.x = touch.pageX;
              data.start.y = touch.pageY;
              $(this).data("bw", data);
            }
          })
          .bind("touchend.cycle", function (e) {
            var touch =
              e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            var data = $(this).data("bw");
            data.end.x = touch.pageX;
            data.end.y = touch.pageY;
            $(this).data("bw", data);
            if (data.start.x != 0 && data.start.y != 0) {
              data.vdiff = data.start.x - data.end.x;
              data.hdiff = data.end.y - data.start.y;
              if (
                Math.abs(data.vdiff) == data.start.x &&
                Math.abs(data.hdiff) == data.start.y
              ) {
                data.vdiff = 0;
                data.hdiff = 0;
              }
              var length = Math.round(
                Math.sqrt(Math.pow(data.vdiff, 2) + Math.pow(data.hdiff, 2))
              );
              var rads = Math.atan2(data.hdiff, data.vdiff);
              var angle = Math.round((rads * 180) / Math.PI);
              if (angle < 0) {
                angle = 360 - Math.abs(angle);
              }
              if (length > H_THRESHOLD && V_THRESHOLD > data.hdiff) {
                e.preventDefault();
                if (angle > 135 && angle < 225) {
                  var cyopt = $slider.data("cycle.opts");
                  if (cyopt.currSlide > 0) {
                    $slider.cycle(cyopt.currSlide - 1, "scrollRight");
                  } else {
                    $slider.cycle(cyopt.slideCount - 1, "scrollRight");
                  }
                } else if (angle > 315 || angle < 45) {
                  $slider.cycle("next");
                }
              }
            }
            data = $.extend(true, {}, optsReset);
          });
      }
    },
  };

  Drupal.viewsSlideshowCycle = Drupal.viewsSlideshowCycle || {};

  // Cleanup the values of advanced options.
  Drupal.viewsSlideshowCycle.advancedOptionCleanup = function (value) {
    value = $.trim(value);
    value = value.replace(/\n/g, "");
    if (value.match(/^[\d.]+%$/)) {
      // noop
    } else if (!isNaN(parseInt(value))) {
      value = parseInt(value);
    } else if (value.toLowerCase() == "true") {
      value = true;
    } else if (value.toLowerCase() == "false") {
      value = false;
    }

    return value;
  };

  // This checks to see if all the images have been loaded.
  // If they have then it starts the slideshow.
  Drupal.viewsSlideshowCycle.imageWait = function (fullId) {
    if (
      ++Drupal.settings.viewsSlideshowCycle[fullId].loadedImages ==
      Drupal.settings.viewsSlideshowCycle[fullId].totalImages
    ) {
      Drupal.viewsSlideshowCycle.load(fullId);
    }
  };

  // Start the slideshow.
  Drupal.viewsSlideshowCycle.load = function (fullId) {
    var settings = Drupal.settings.viewsSlideshowCycle[fullId];

    // Make sure the slideshow isn't already loaded.
    if (!settings.loaded) {
      $(settings.targetId).cycle(settings.opts);
      $(settings.targetId)
        .parent()
        .parent()
        .addClass("views-slideshow-cycle-processed");
      settings.loaded = true;

      // Start Paused
      if (settings.start_paused) {
        Drupal.viewsSlideshow.action({
          action: "pause",
          slideshowID: settings.slideshowId,
          force: true,
        });
      }

      // Pause if hidden.
      if (settings.pause_when_hidden) {
        var checkPause = function (settings) {
          // If the slideshow is visible and it is paused then resume.
          // otherwise if the slideshow is not visible and it is not paused then
          // pause it.
          var visible = viewsSlideshowCycleIsVisible(
            settings.targetId,
            settings.pause_when_hidden_type,
            settings.amount_allowed_visible
          );
          if (visible) {
            Drupal.viewsSlideshow.action({
              action: "play",
              slideshowID: settings.slideshowId,
            });
          } else {
            Drupal.viewsSlideshow.action({
              action: "pause",
              slideshowID: settings.slideshowId,
            });
          }
        };

        // Check when scrolled.
        $(window).scroll(function () {
          checkPause(settings);
        });

        // Check when the window is resized.
        $(window).resize(function () {
          checkPause(settings);
        });
      }
    }
  };

  Drupal.viewsSlideshowCycle.pause = function (options) {
    //Eat TypeError, cycle doesn't handle pause well if options isn't defined.
    try {
      if (options.pause_in_middle && $.fn.pause) {
        $(
          "#views_slideshow_cycle_teaser_section_" + options.slideshowID
        ).pause();
      } else {
        $("#views_slideshow_cycle_teaser_section_" + options.slideshowID).cycle(
          "pause"
        );
      }
    } catch (e) {
      if (!e instanceof TypeError) {
        throw e;
      }
    }
  };

  Drupal.viewsSlideshowCycle.play = function (options) {
    Drupal.settings.viewsSlideshowCycle[
      "#views_slideshow_cycle_main_" + options.slideshowID
    ].paused = false;
    if (options.pause_in_middle && $.fn.resume) {
      $(
        "#views_slideshow_cycle_teaser_section_" + options.slideshowID
      ).resume();
    } else {
      $("#views_slideshow_cycle_teaser_section_" + options.slideshowID).cycle(
        "resume"
      );
    }
  };

  Drupal.viewsSlideshowCycle.previousSlide = function (options) {
    $("#views_slideshow_cycle_teaser_section_" + options.slideshowID).cycle(
      "prev"
    );
  };

  Drupal.viewsSlideshowCycle.nextSlide = function (options) {
    $("#views_slideshow_cycle_teaser_section_" + options.slideshowID).cycle(
      "next"
    );
  };

  Drupal.viewsSlideshowCycle.goToSlide = function (options) {
    $("#views_slideshow_cycle_teaser_section_" + options.slideshowID).cycle(
      options.slideNum
    );
  };

  // Verify that the value is a number.
  function IsNumeric(sText) {
    var ValidChars = "0123456789";
    var IsNumber = true;
    var Char;

    for (var i = 0; i < sText.length && IsNumber == true; i++) {
      Char = sText.charAt(i);
      if (ValidChars.indexOf(Char) == -1) {
        IsNumber = false;
      }
    }
    return IsNumber;
  }

  /**
   * Cookie Handling Functions
   */
  function createCookie(name, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      var expires = "; expires=" + date.toGMTString();
    } else {
      var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }

  function eraseCookie(name) {
    createCookie(name, "", -1);
  }

  /**
   * Checks to see if the slide is visible enough.
   * elem = element to check.
   * type = The way to calculate how much is visible.
   * amountVisible = amount that should be visible. Either in percent or px. If
   *                it's not defined then all of the slide must be visible.
   *
   * Returns true or false
   */
  function viewsSlideshowCycleIsVisible(elem, type, amountVisible) {
    // Get the top and bottom of the window;
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var docViewLeft = $(window).scrollLeft();
    var docViewRight = docViewLeft + $(window).width();

    // Get the top, bottom, and height of the slide;
    var elemTop = $(elem).offset().top;
    var elemHeight = $(elem).height();
    var elemBottom = elemTop + elemHeight;
    var elemLeft = $(elem).offset().left;
    var elemWidth = $(elem).width();
    var elemRight = elemLeft + elemWidth;
    var elemArea = elemHeight * elemWidth;

    // Calculate what's hiding in the slide.
    var missingLeft = 0;
    var missingRight = 0;
    var missingTop = 0;
    var missingBottom = 0;

    // Find out how much of the slide is missing from the left.
    if (elemLeft < docViewLeft) {
      missingLeft = docViewLeft - elemLeft;
    }

    // Find out how much of the slide is missing from the right.
    if (elemRight > docViewRight) {
      missingRight = elemRight - docViewRight;
    }

    // Find out how much of the slide is missing from the top.
    if (elemTop < docViewTop) {
      missingTop = docViewTop - elemTop;
    }

    // Find out how much of the slide is missing from the bottom.
    if (elemBottom > docViewBottom) {
      missingBottom = elemBottom - docViewBottom;
    }

    // If there is no amountVisible defined then check to see if the whole slide
    // is visible.
    if (type == "full") {
      return (
        elemBottom >= docViewTop &&
        elemTop <= docViewBottom &&
        elemBottom <= docViewBottom &&
        elemTop >= docViewTop &&
        elemLeft >= docViewLeft &&
        elemRight <= docViewRight &&
        elemLeft <= docViewRight &&
        elemRight >= docViewLeft
      );
    } else if (type == "vertical") {
      var verticalShowing = elemHeight - missingTop - missingBottom;

      // If user specified a percentage then find out if the current shown percent
      // is larger than the allowed percent.
      // Otherwise check to see if the amount of px shown is larger than the
      // allotted amount.
      if (typeof amountVisible === "string" && amountVisible.indexOf("%")) {
        return (verticalShowing / elemHeight) * 100 >= parseInt(amountVisible);
      } else {
        return verticalShowing >= parseInt(amountVisible);
      }
    } else if (type == "horizontal") {
      var horizontalShowing = elemWidth - missingLeft - missingRight;

      // If user specified a percentage then find out if the current shown percent
      // is larger than the allowed percent.
      // Otherwise check to see if the amount of px shown is larger than the
      // allotted amount.
      if (typeof amountVisible === "string" && amountVisible.indexOf("%")) {
        return (horizontalShowing / elemWidth) * 100 >= parseInt(amountVisible);
      } else {
        return horizontalShowing >= parseInt(amountVisible);
      }
    } else if (type == "area") {
      var areaShowing =
        (elemWidth - missingLeft - missingRight) *
        (elemHeight - missingTop - missingBottom);

      // If user specified a percentage then find out if the current shown percent
      // is larger than the allowed percent.
      // Otherwise check to see if the amount of px shown is larger than the
      // allotted amount.
      if (typeof amountVisible === "string" && amountVisible.indexOf("%")) {
        return (areaShowing / elemArea) * 100 >= parseInt(amountVisible);
      } else {
        return areaShowing >= parseInt(amountVisible);
      }
    }
  }
})(jQuery);
/**
 * JavaScript behaviors for the front-end display of webforms.
 */

(function ($) {
  Drupal.behaviors.webform = Drupal.behaviors.webform || {};

  Drupal.behaviors.webform.attach = function (context) {
    // Calendar datepicker behavior.
    Drupal.webform.datepicker(context);
  };

  Drupal.webform = Drupal.webform || {};

  Drupal.webform.datepicker = function (context) {
    $("div.webform-datepicker").each(function () {
      var $webformDatepicker = $(this);
      var $calendar = $webformDatepicker.find("input.webform-calendar");

      // Ensure the page we're on actually contains a datepicker.
      if ($calendar.length == 0) {
        return;
      }

      var startDate = $calendar[0].className
        .replace(/.*webform-calendar-start-(\d{4}-\d{2}-\d{2}).*/, "$1")
        .split("-");
      var endDate = $calendar[0].className
        .replace(/.*webform-calendar-end-(\d{4}-\d{2}-\d{2}).*/, "$1")
        .split("-");
      var firstDay = $calendar[0].className.replace(
        /.*webform-calendar-day-(\d).*/,
        "$1"
      );
      // Convert date strings into actual Date objects.
      startDate = new Date(startDate[0], startDate[1] - 1, startDate[2]);
      endDate = new Date(endDate[0], endDate[1] - 1, endDate[2]);

      // Ensure that start comes before end for datepicker.
      if (startDate > endDate) {
        var laterDate = startDate;
        startDate = endDate;
        endDate = laterDate;
      }

      var startYear = startDate.getFullYear();
      var endYear = endDate.getFullYear();

      // Set up the jQuery datepicker element.
      $calendar.datepicker({
        dateFormat: "yy-mm-dd",
        yearRange: startYear + ":" + endYear,
        firstDay: parseInt(firstDay),
        minDate: startDate,
        maxDate: endDate,
        onSelect: function (dateText, inst) {
          var date = dateText.split("-");
          $webformDatepicker
            .find("select.year, input.year")
            .val(+date[0])
            .trigger("change");
          $webformDatepicker
            .find("select.month")
            .val(+date[1])
            .trigger("change");
          $webformDatepicker.find("select.day").val(+date[2]).trigger("change");
        },
        beforeShow: function (input, inst) {
          // Get the select list values.
          var year = $webformDatepicker.find("select.year, input.year").val();
          var month = $webformDatepicker.find("select.month").val();
          var day = $webformDatepicker.find("select.day").val();

          // If empty, default to the current year/month/day in the popup.
          var today = new Date();
          year = year ? year : today.getFullYear();
          month = month ? month : today.getMonth() + 1;
          day = day ? day : today.getDate();

          // Make sure that the default year fits in the available options.
          year = year < startYear || year > endYear ? startYear : year;

          // jQuery UI Datepicker will read the input field and base its date off
          // of that, even though in our case the input field is a button.
          $(input).val(year + "-" + month + "-" + day);
        },
      });

      // Prevent the calendar button from submitting the form.
      $calendar.click(function (event) {
        $(this).focus();
        event.preventDefault();
      });
    });
  };
})(jQuery);
(function ($) {
  Drupal.googleanalytics = {};

  $(document).ready(function () {
    // Attach mousedown, keyup, touchstart events to document only and catch
    // clicks on all elements.
    $(document.body).bind("mousedown keyup touchstart", function (event) {
      // Catch the closest surrounding link of a clicked element.
      $(event.target)
        .closest("a,area")
        .each(function () {
          // Is the clicked URL internal?
          if (Drupal.googleanalytics.isInternal(this.href)) {
            // Skip 'click' tracking, if custom tracking events are bound.
            if (
              $(this).is(".colorbox") &&
              Drupal.settings.googleanalytics.trackColorbox
            ) {
              // Do nothing here. The custom event will handle all tracking.
              //console.info("Click on .colorbox item has been detected.");
            }
            // Is download tracking activated and the file extension configured for download tracking?
            else if (
              Drupal.settings.googleanalytics.trackDownload &&
              Drupal.googleanalytics.isDownload(this.href)
            ) {
              // Download link clicked.
              ga("send", {
                hitType: "event",
                eventCategory: "Downloads",
                eventAction: Drupal.googleanalytics
                  .getDownloadExtension(this.href)
                  .toUpperCase(),
                eventLabel: Drupal.googleanalytics.getPageUrl(this.href),
                transport: "beacon",
              });
            } else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
              // Keep the internal URL for Google Analytics website overlay intact.
              ga("send", {
                hitType: "pageview",
                page: Drupal.googleanalytics.getPageUrl(this.href),
                transport: "beacon",
              });
            }
          } else {
            if (
              Drupal.settings.googleanalytics.trackMailto &&
              $(this).is("a[href^='mailto:'],area[href^='mailto:']")
            ) {
              // Mailto link clicked.
              ga("send", {
                hitType: "event",
                eventCategory: "Mails",
                eventAction: "Click",
                eventLabel: this.href.substring(7),
                transport: "beacon",
              });
            } else if (
              Drupal.settings.googleanalytics.trackOutbound &&
              this.href.match(/^\w+:\/\//i)
            ) {
              if (
                Drupal.settings.googleanalytics.trackDomainMode !== 2 ||
                (Drupal.settings.googleanalytics.trackDomainMode === 2 &&
                  !Drupal.googleanalytics.isCrossDomain(
                    this.hostname,
                    Drupal.settings.googleanalytics.trackCrossDomains
                  ))
              ) {
                // External link clicked / No top-level cross domain clicked.
                ga("send", {
                  hitType: "event",
                  eventCategory: "Outbound links",
                  eventAction: "Click",
                  eventLabel: this.href,
                  transport: "beacon",
                });
              }
            }
          }
        });
    });

    // Track hash changes as unique pageviews, if this option has been enabled.
    if (Drupal.settings.googleanalytics.trackUrlFragments) {
      window.onhashchange = function () {
        ga("send", {
          hitType: "pageview",
          page: location.pathname + location.search + location.hash,
        });
      };
    }

    // Colorbox: This event triggers when the transition has completed and the
    // newly loaded content has been revealed.
    if (Drupal.settings.googleanalytics.trackColorbox) {
      $(document).bind("cbox_complete", function () {
        var href = $.colorbox.element().attr("href");
        if (href) {
          ga("send", {
            hitType: "pageview",
            page: Drupal.googleanalytics.getPageUrl(href),
          });
        }
      });
    }
  });

  /**
   * Check whether the hostname is part of the cross domains or not.
   *
   * @param string hostname
   *   The hostname of the clicked URL.
   * @param array crossDomains
   *   All cross domain hostnames as JS array.
   *
   * @return boolean
   */
  Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
    /**
     * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
     * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
     * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
     *
     * @todo: Remove/Refactor in D8
     */
    if (!crossDomains) {
      return false;
    } else {
      return $.inArray(hostname, crossDomains) > -1 ? true : false;
    }
  };

  /**
   * Check whether this is a download URL or not.
   *
   * @param string url
   *   The web url to check.
   *
   * @return boolean
   */
  Drupal.googleanalytics.isDownload = function (url) {
    var isDownload = new RegExp(
      "\\.(" +
        Drupal.settings.googleanalytics.trackDownloadExtensions +
        ")([?#].*)?$",
      "i"
    );
    return isDownload.test(url);
  };

  /**
   * Check whether this is an absolute internal URL or not.
   *
   * @param string url
   *   The web url to check.
   *
   * @return boolean
   */
  Drupal.googleanalytics.isInternal = function (url) {
    var isInternal = new RegExp("^(https?)://" + window.location.host, "i");
    return isInternal.test(url);
  };

  /**
   * Check whether this is a special URL or not.
   *
   * URL types:
   *  - gotwo.module /go/* links.
   *
   * @param string url
   *   The web url to check.
   *
   * @return boolean
   */
  Drupal.googleanalytics.isInternalSpecial = function (url) {
    var isInternalSpecial = new RegExp("(/go/.*)$", "i");
    return isInternalSpecial.test(url);
  };

  /**
   * Extract the relative internal URL from an absolute internal URL.
   *
   * Examples:
   * - http://mydomain.com/node/1 -> /node/1
   * - http://example.com/foo/bar -> http://example.com/foo/bar
   *
   * @param string url
   *   The web url to check.
   *
   * @return string
   *   Internal website URL
   */
  Drupal.googleanalytics.getPageUrl = function (url) {
    var extractInternalUrl = new RegExp(
      "^(https?)://" + window.location.host,
      "i"
    );
    return url.replace(extractInternalUrl, "");
  };

  /**
   * Extract the download file extension from the URL.
   *
   * @param string url
   *   The web url to check.
   *
   * @return string
   *   The file extension of the passed url. e.g. "zip", "txt"
   */
  Drupal.googleanalytics.getDownloadExtension = function (url) {
    var extractDownloadextension = new RegExp(
      "\\.(" +
        Drupal.settings.googleanalytics.trackDownloadExtensions +
        ")([?#].*)?$",
      "i"
    );
    var extension = extractDownloadextension.exec(url);
    return extension === null ? "" : extension[1];
  };
})(jQuery);
