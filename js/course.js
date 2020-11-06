AOS.init();
$('.login_submit').click(function () {
    $(".login").css('display', 'none')
    $("li.login").css('display', 'none')
    $("div.user").css('display', 'inline-block')
    $("div.login-box").slideToggle();
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