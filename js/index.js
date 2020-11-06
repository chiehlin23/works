$('.login_submit').click(function () {
    $(".login").css('display', 'none')
    $("li.login").css('display', 'none')
    $("div.user").css('display', 'inline-block')
    $("div.login-box").slideToggle();
});
$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1439,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }

    ]
});


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
    $("button.close1").on("click", function () {
        $(".light1").slideUp()
    });
    $("button.close2").on("click", function () {
        $(".light2").slideUp()
    });
    $("button.close3").on("click", function () {
        $(".light3").slideUp()
    });
    $(function () {
        $("button.class").on("click", function () {
            $("div.class_block").css('display', 'block');
            $("div.class_style").css('display', 'none');
            $("div.line_style").slideToggle();
            $("div.line_class").slideToggle();

        });


        $("button.style").on("click", function () {
            $("div.class_style").css('display', 'block');
            $("div.class_block").css('display', 'none');
            $("div.line_class").slideToggle();
            $("div.line_style").slideToggle();

        });
    });

});