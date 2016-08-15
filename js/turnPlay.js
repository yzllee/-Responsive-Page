/**
 * Created by mac on 16/7/16.
 */
!function (e) {
    function t(a) {
        if (n[a])return n[a].exports;
        var i = n[a] = {exports: {}, id: a, loaded: !1};
        return e[a].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}({
    0: function (e, t, n) {
        e.exports = n(41)
    }, 2: function (e, t) {
        function n() {
        }

        var a = function (e, t) {
            return function () {
                try {
                    ga("send", {hitType: "event", eventCategory: "VideoPlay", eventAction: e, eventLabel: t})
                } catch (a) {
                    n()
                }
            }
        }, i = function (e, t) {
            t = t || "未命名", this.startCallback && e.off("play", this.startCallback), this.endCallback && e.off("ended", this.endCallback), this.startCallback = a("Start", t), this.endCallback = a("End", t), e.one("play", this.startCallback), e.one("ended", this.endCallback)
        };
        e.exports = {videoBind: i}
    }, 41: function (e, t, n) {
        function a(e) {
            $.magnificPopup.open({
                type: "inline",
                preloader: !1,
                showCloseBtn: !0,
                closeBtnInside: !0,
                closeOnContentClick: !1,
                closeOnBgClick: !1,
                enableEscapeKey: !1,
                items: {src: $("#popup-video")}
            }), $(window).on("resize", function () {
                var e = $("#popup-video").width();
                e = 1920 >= e ? e : 1920, o.width(e + "px"), o.height(9 * e / 16 + "px")
            }).trigger("resize"), o.src(e), i.videoBind(o, e.split("com/")[1]), o.play()
        }

        n(42);
        var i = n(2);
        !function () {
            $(".rslides").responsiveSlides({
                namespace: "rslides",
                pager: !0,
                nav: !0,
                prevText: '<span class="icon-prev"></span>',
                nextText: '<span class="icon-next"></span>'
            });
            var e = {};
            $(".slider-area").on("touchstart", function (t) {
                var n = t.originalEvent.touches[0];
                e.x1 = n.pageX, e.y1 = n.pageY
            }), $(".slider-area").on("touchmove", function (t) {
                var n = t.originalEvent.touches[0];
                e.x2 = n.pageX, e.y2 = n.pageY
            }), $(".slider-area").on("touchend", function () {
                e.x2 && Math.abs(e.x1 - e.x2) > 80 && (e.x2 - e.x1 > 0 ? $(".rslides_nav.next").click() : $(".rslides_nav.prev").click())
            })
        }(), videojs.options.flash.swf = $("#videojs_swfurl").val();
        var o = videojs("video-tag");
        $(".js-video-btn").on("click", function () {
            a($(this).data("url"))
        }), $(".js-banner-btn").on("click", function () {
            var e = $(this).data("url").split("!"), t = e[0], n = e[1];
            switch (t) {
                case"video":
                    a(n);
                    break;
                case"project":
                    location.href = "/project/" + n;
                    break;
                case"page":
                    location.href = n
            }
        }), $(".time-count").timeCount()
    }, 42: function (e, t) {
        !function (e, t) {
            e.fn.timeCount = function () {
                return this.each(function () {
                    var t = e(this), n = function (e) {
                        function n(e) {
                            return ("0" + e).slice(-2)
                        }

                        var a = Math.floor(e / 86400), i = Math.floor(e / 3600) % 24, o = Math.floor(e / 60) % 60, r = Math.floor(e % 60), s = n(a) + "天 " + n(i) + "小时 " + n(o) + "分 " + n(r) + "秒";
                        t.find(".time").html(s)
                    };
                    if (t.length > 0) {
                        var a = new Date(t.data("start-time")), i = Math.floor((a - Date.now()) / 1e3);
                        n(i);
                        var o = setTimeout(function r() {
                            i -= 1, i ? (n(i), o = setTimeout(r, 1e3)) : clearTimeout(o)
                        }, 1e3)
                    }
                })
            }
        }(jQuery, this)
    }
});