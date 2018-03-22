jQuery(document).ready(function(t) {
    var e = window.myTheme || {},
        o = t(window);
    e.Isotope = function() {
        var e = t(".isotopeContainer");
        if (e.length && jQuery().isotope) {
            o.load(function() {
                e.isotope({
                    itemSelector: ".isotopeSelector"
                }), t(".isotopeFilters").on("click", "a", function(o) {
                    t(".isotopeFilters").find(".active").removeClass("active"), t(this).parent().addClass("active");
                    var i = t(this).attr("data-filter");
                    e.isotope({
                        filter: i
                    }), o.preventDefault()
                })
            });
            var i = t(".isotopeContainer2");
            if (i.length && jQuery().isotope) {
                o.load(function() {
                    i.isotope({
                        itemSelector: ".isotopeSelector"
                    }), t(".isotopeFilters2").on("click", "a", function(e) {
                        t(".isotopeFilters2").find(".active").removeClass("active"), t(this).parent().addClass("active");
                        var o = t(this).attr("data-filter");
                        i.isotope({
                            filter: o
                        }), e.preventDefault()
                    })
                });
                var a = t(".isotopeContainer3");
                if (a.length && jQuery().isotope) {
                    o.load(function() {
                        a.isotope({
                            itemSelector: ".isotopeSelector"
                        }), t(".isotopeFilters3").on("click", "a", function(e) {
                            t(".isotopeFilters3").find(".active").removeClass("active"), t(this).parent().addClass("active");
                            var o = t(this).attr("data-filter");
                            a.isotope({
                                filter: o
                            }), e.preventDefault()
                        })
                    });
                    var s = t(".isotopeContainer4");
                    s.length && jQuery().isotope && o.load(function() {
                        s.isotope({
                            itemSelector: ".isotopeSelector"
                        }), t(".isotopeFilters4").on("click", "a", function(e) {
                            t(".isotopeFilters4").find(".active").removeClass("active"), t(this).parent().addClass("active");
                            var o = t(this).attr("data-filter");
                            s.isotope({
                                filter: o
                            }), e.preventDefault()
                        })
                    })
                }
            }
        }
    }, e.Fancybox = function() {
        t(".fancybox-pop").fancybox({
            maxWidth: 900,
            maxHeight: 700,
            fitToView: !0,
            width: "100%",
            height: "100%",
            autoSize: !0,
            closeClick: !1,
            openEffect: "elastic",
            closeEffect: "none"
        })
    }, e.Isotope(), e.Fancybox()
});