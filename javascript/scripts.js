$(function() {
    $("input, textarea").placeholder(), $("input[type=radio]").parents("li").addClass("radio"), $("input[type=checkbox]").parents("li").addClass("checkbox"), $(".container").fitVids(), $(".gform_wrapper .gfield_required").html("(required)"), $("p:empty").remove(), $(".wp-caption").removeAttr("style"), $(".wp-content img, .wp-post-image, .wp-post-thumb").removeAttr("width").removeAttr("height")
}), $(window).bind("load", function() {
    $(".header-wrap").delay(50).animate({
        opacity: 1
    }, 400), $(".site-wrap").delay(400).animate({
        opacity: 1
    }, 500)
}),
function() {
    $(".slide-down__trigger").click(function(a) {
        a.preventDefault();
        var b = $(".slide-down__section").height();
        if (b > 0) $(".slide-down__section").css("height", "0");
        else {
            var c = ($(".slide-down__section").clone().css({
                position: "absolute",
                visibility: "hidden",
                height: "auto"
            }).addClass("slideClone").appendTo("body"), $(".slideClone").height());
            $(".slideClone").remove(), $(".slide-down__section").css("height", c + "px")
        }
    }), $(".slide-down__trigger--close").click(function(a) {
        a.preventDefault(), $(".slide-down__section").css("height", "0")
    })
}(), width = $(window).width(), width >= 620 && $(".portfolio-piece__link").each(function() {
    var a = $(this);
    a.data("original-text", a.text())
}).hover(function() {
    var a = $(this),
        b = a.attr("data-portfolio");
    a.fadeOut(300, function() {
        a.text(b).fadeIn(300)
    })
}, function() {
    var a = $(this),
        b = a.data("original-text");
    a.fadeOut(300, function() {
        a.text(b).fadeIn(300)
    })
}),
function(a, b, c) {
    function d(a) {
        var b = {},
            d = /^jQuery\d+$/;
        return c.each(a.attributes, function(a, c) {
            c.specified && !d.test(c.name) && (b[c.name] = c.value)
        }), b
    }

    function e(a, d) {
        var e = this,
            f = c(e);
        if (e.value == f.attr("placeholder") && f.hasClass("placeholder"))
            if (f.data("placeholder-password")) {
                if (f = f.hide().next().show().attr("id", f.removeAttr("id").data("placeholder-id")), a === !0) return f[0].value = d;
                f.focus()
            } else e.value = "", f.removeClass("placeholder"), e == b.activeElement && e.select()
    }

    function f() {
        var a, b = this,
            f = c(b),
            g = this.id;
        if ("" == b.value) {
            if ("password" == b.type) {
                if (!f.data("placeholder-textinput")) {
                    try {
                        a = f.clone().attr({
                            type: "text"
                        })
                    } catch (h) {
                        a = c("<input>").attr(c.extend(d(this), {
                            type: "text"
                        }))
                    }
                    a.removeAttr("name").data({
                        "placeholder-password": !0,
                        "placeholder-id": g
                    }).bind("focus.placeholder", e), f.data({
                        "placeholder-textinput": a,
                        "placeholder-id": g
                    }).before(a)
                }
                f = f.removeAttr("id").hide().prev().attr("id", g).show()
            }
            f.addClass("placeholder"), f[0].value = f.attr("placeholder")
        } else f.removeClass("placeholder")
    }
    var g, h, i = "placeholder" in b.createElement("input"),
        j = "placeholder" in b.createElement("textarea"),
        k = c.fn,
        l = c.valHooks;
    i && j ? (h = k.placeholder = function() {
        return this
    }, h.input = h.textarea = !0) : (h = k.placeholder = function() {
        var a = this;
        return a.filter((i ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": e,
            "blur.placeholder": f
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), a
    }, h.input = i, h.textarea = j, g = {
        get: function(a) {
            var b = c(a);
            return b.data("placeholder-enabled") && b.hasClass("placeholder") ? "" : a.value
        },
        set: function(a, d) {
            var g = c(a);
            return g.data("placeholder-enabled") ? ("" == d ? (a.value = d, a != b.activeElement && f.call(a)) : g.hasClass("placeholder") ? e.call(a, !0, d) || (a.value = d) : a.value = d, g) : a.value = d
        }
    }, i || (l.input = g), j || (l.textarea = g), c(function() {
        c(b).delegate("form", "submit.placeholder", function() {
            var a = c(".placeholder", this).each(e);
            setTimeout(function() {
                a.each(f)
            }, 10)
        })
    }), c(a).bind("beforeunload.placeholder", function() {
        c(".placeholder").each(function() {
            this.value = ""
        })
    }))
}(this, document, jQuery),
function(a) {
    a.fn.fitVids = function(b) {
        var c = {
                customSelector: null
            },
            d = document.createElement("div"),
            e = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
        return d.className = "fit-vids-style", d.innerHTML = "&shy;<style>.fluid-width-video-wrapper{width: 100%;                              position: relative;padding: 0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position: absolute;top: 0;left: 0;width: 100%;height: 100%;}</style>", e.parentNode.insertBefore(d, e), b && a.extend(c, b), this.each(function() {
            var b = ["iframe[src*='player.vimeo.com']", "iframe[src*='www.youtube.com']", "iframe[src*='www.kickstarter.com']", "object", "embed"];
            c.customSelector && b.push(c.customSelector);
            var d = a(this).find(b.join(","));
            d.each(function() {
                var b = a(this);
                if (!("embed" == this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
                    var c = "object" == this.tagName.toLowerCase() || b.attr("height") ? b.attr("height") : b.height(),
                        d = b.attr("width") ? b.attr("width") : b.width(),
                        e = c / d;
                    if (!b.attr("id")) {
                        var f = "fitvid" + Math.floor(999999 * Math.random());
                        b.attr("id", f)
                    }
                    b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * e + "%"), b.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(jQuery),
function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
}(navigator.userAgent || navigator.vendor || window.opera);