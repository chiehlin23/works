$(function () {
    $("li.login").on("click", function () {
        $("div.login-box").slideToggle();
        event.stopPropagation();
    });
    $("body").on("click", function () {
        $("div.login-box").css("display", 'none');
        event.stopPropagation();
    });
    $('div.login-box').on('click', function () {
        $(this).css('display', 'block')
        event.stopPropagation();
    })
});

$(function () {
    $("button.hamburger").on("click", function () {
        $(this).toggleClass("is-active");
    });

});
$(function () {
    $("div.burger").on("click", function () {
        $("div.nav").slideToggle();
    });
});
$(function () {
    $("div.instruction").on("click", function () {
        $("ul.list").slideToggle();
    });
});

$(function () {
    $("div.new1").on("click", function () {
        if ($('.light1').css("display") == 'block') {
            $(".light1").stop(true).slideToggle()
        } else if ($('.light1').css("display") == 'none') {
            $(".light1").slideToggle(2000, 'easeOutBounce')
        }
    });
    $("div.new2").on("click", function () {
        if ($('.light2').css("display") == 'block') {
            $(".light2").stop(true).slideToggle()
        } else if ($('.light2').css("display") == 'none') {
            $(".light2").slideToggle(2000, 'easeOutBounce')
        }
    });
    $("div.new3").on("click", function () {
        if ($('.light3').css("display") == 'block') {
            $(".light3").stop(true).slideToggle()
        } else if ($('.light3').css("display") == 'none') {
            $(".light3").slideToggle(2000, 'easeOutBounce')
        }
    });
    $("div.come1").on("click", function () {
        if ($('.light1').css("display") == 'block') {
            $(".light1").stop(true).slideToggle()
        } else if ($('.light1').css("display") == 'none') {
            $(".light1").slideToggle(2000, 'easeOutBounce')
        }
    });
    $("div.come2").on("click", function () {
        if ($('.light2').css("display") == 'block') {
            $(".light2").stop(true).slideToggle()
        } else if ($('.light1').css("display") == 'none') {
            $(".light2").slideToggle(2000, 'easeOutBounce')
        }
    });
    $("div.come3").on("click", function () {
        if ($('.light3').css("display") == 'block') {
            $(".light3").stop(true).slideToggle()
        } else if ($('.light1').css("display") == 'none') {
            $(".light3").slideToggle(2000, 'easeOutBounce')
        }
    });
    $("button.close1").on("click", function () {
        $(".light1").slideToggle()
    });
    $("button.close2").on("click", function () {
        $(".light2").slideToggle()
    });
    $("button.close3").on("click", function () {
        $(".light3").slideToggle()
    });
});