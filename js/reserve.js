$('.login_submit').click(function () {
    $(".login").css('display', 'none')
    $("li.login").css('display', 'none')
    $("div.user").css('display', 'inline-block')
    $("div.login-box").slideToggle();
});

$(function () {
    $('.fade').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $("div.form_sign").delay(900).slideToggle()
    $("button.click_sign").toggleClass("on3")


    $("button.click_sign").click(function () {
        $("div.form_sign").delay(900).slideToggle()
        $(this).toggleClass("on3")
        $("button.click_class").removeClass("on")
        $("button.click_room").removeClass("on2")
        $("div.form_class").css('display', 'none')
        $("div.form_room").css('display', 'none')

    });
    $("button.click_class").click(function () {
        $("div.form_class").delay(900).slideToggle()
        $(this).toggleClass("on")

        $("button.click_room").removeClass("on2")
        $("button.click_sign").removeClass("on3")
        $("div.form_sign").css('display', 'none')
        $("div.form_room").css('display', 'none')

    });
    $("button.click_room").click(function () {
        $("div.form_room").delay(900).slideToggle()
        $(this).toggleClass("on2")

        $("button.click_class").removeClass("on")
        $("button.click_sign").removeClass("on3")
        $("div.form_sign").css('display', 'none')
        $("div.form_class").css('display', 'none')


    });

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