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
    $('div.popp').on('click', function () {
        $('div.popp1').slideToggle();
    });
    $('div.loc').on('click', function () {
        $('div.loc1').slideToggle();
    });
    $('div.bre').on('click', function () {
        $('div.bre1').slideToggle();
    });
    $('div.fre').on('click', function () {
        $('div.fre1').slideToggle();
    });
});