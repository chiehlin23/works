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
$(function () {
    $("div.space_img1").on("click", function () {
        $("div.space_img1").css("bottom", "50%");
        $("div.space_img1").css("left", "20%");
        $("div.space_img1").css("transform", "rotateY(0deg) scale(2.5)");
        $("div.space_img2").css("bottom", "0%");
        $("div.space_img2").css("left", "50%");
        $("div.space_img2").css("transform", "rotateY(30deg) scale(1)");
        $("div.space_img3").css("bottom", "0%");
        $("div.space_img3").css("left", "58%");
        $("div.space_img3").css("transform", "rotateY(30deg) scale(1)");
        $("div.space_img4").css("bottom", "0%");
        $("div.space_img4").css("left", "66%");
        $("div.space_img4").css("transform", "rotateY(30deg) scale(1)");
        $("div.space_img5").css("bottom", "0%");
        $("div.space_img5").css("left", "73%");
        $("div.space_img5").css("transform", "rotateY(30deg) scale(1)");
        $("div.text").css("opacity", "0");
        $("div.text1").css("opacity", "1");
        $("div.text2").css("opacity", "0");
        $("div.text3").css("opacity", "0");
        $("div.text4").css("opacity", "0");
        $("div.text5").css("opacity", "0");

    });
});
$(function () {
    $("div.space_img5").on("click", function () {
        $("div.space_img5").css("bottom", "50%");
        $("div.space_img5").css("left", "20%");
        $("div.space_img5").css("transform", "rotateY(0deg) scale(2.5)");
        $("div.space_img2").css("bottom", "0%");
        $("div.space_img2").css("left", "50%");
        $("div.space_img2").css("transform", "rotateY(30deg) scale(1)");
        $("div.space_img3").css("bottom", "0%");
        $("div.space_img3").css("left", "58%");
        $("div.space_img3").css("transform", "rotateY(30deg) scale(1)");
        $("div.space_img4").css("bottom", "0%");
        $("div.space_img4").css("left", "66%");
        $("div.space_img4").css("transform", "rotateY(30deg) scale(1)");
        $("div.space_img1").css("bottom", "0%");
        $("div.space_img1").css("left", "40%");
        $("div.space_img1").css("transform", "rotateY(30deg) scale(1)");
        $("div.text").css("opacity", "0");
        $("div.text1").css("opacity", "0");
        $("div.text2").css("opacity", "0");
        $("div.text3").css("opacity", "0");
        $("div.text4").css("opacity", "0");
        $("div.text5").css("opacity", "1");

    });
});
$(function () {
    $("div.space_img3").on("click", function () {
        $("div.space_img3").css("bottom", "50%");
        $("div.space_img3").css("left", "20%");
        $("div.space_img3").css("transform", "rotateY(0deg) scale(2.5)");
        $("div.space_img2").css("bottom", "0%");
        $("div.space_img2").css("left", "50%");
        $("div.space_img2").css("transform", "rotateY(30deg) scale(1)");
        $("div.space_img1").css("bottom", "0%");
        $("div.space_img1").css("left", "40%");
        $("div.space_img1").css("transform", "rotateY(30deg) scale(1)");
        $("div.space_img4").css("bottom", "0%");
        $("div.space_img4").css("left", "66%");
        $("div.space_img4").css("transform", "rotateY(30deg) scale(1)");
        $("div.space_img5").css("bottom", "0%");
        $("div.space_img5").css("left", "73%");
        $("div.space_img5").css("transform", "rotateY(30deg) scale(1)");
        $("div.text").css("opacity", "0");
        $("div.text1").css("opacity", "0");
        $("div.text2").css("opacity", "0");
        $("div.text3").css("opacity", "1");
        $("div.text4").css("opacity", "0");
        $("div.text5").css("opacity", "0");
    });
});
$(function () {
    $("div.space_img2").on("click", function () {
        $("div.space_img2").css("bottom", "50%");
        $("div.space_img2").css("left", "20%");
        $("div.space_img2").css("transform", "rotateY(0deg) scale(2.5)");
        $("div.space_img1").css("bottom", "0%");
        $("div.space_img1").css("left", "40%");
        $("div.space_img1").css("transform", "rotateY(30deg) scale(1)");
        $("div.space_img3").css("bottom", "0%");
        $("div.space_img3").css("left", "58%");
        $("div.space_img3").css("transform", "rotateY(30deg) scale(1)");
        $("div.space_img4").css("bottom", "0%");
        $("div.space_img4").css("left", "66%");
        $("div.space_img4").css("transform", "rotateY(30deg) scale(1)");
        $("div.space_img5").css("bottom", "0%");
        $("div.space_img5").css("left", "73%");
        $("div.space_img5").css("transform", "rotateY(30deg) scale(1)");
        $("div.text").css("opacity", "0");
        $("div.text1").css("opacity", "0");
        $("div.text2").css("opacity", "1");
        $("div.text3").css("opacity", "0");
        $("div.text4").css("opacity", "0");
        $("div.text5").css("opacity", "0");
    });
});
$(function () {
    $("div.space_img4").on("click", function () {
        $("div.space_img4").css("bottom", "50%");
        $("div.space_img4").css("left", "20%");
        $("div.space_img4").css("transform", "rotateY(0deg) scale(2.5)");
        $("div.space_img2").css("bottom", "0%");
        $("div.space_img2").css("left", "50%");
        $("div.space_img2").css("transform", "rotateY(30deg) scale(1)");
        $("div.space_img3").css("bottom", "0%");
        $("div.space_img3").css("left", "58%");
        $("div.space_img3").css("transform", "rotateY(30deg) scale(1)");
        $("div.space_img1").css("bottom", "0%");
        $("div.space_img1").css("left", "40%");
        $("div.space_img1").css("transform", "rotateY(30deg) scale(1)");
        $("div.space_img5").css("bottom", "0%");
        $("div.space_img5").css("left", "73%");
        $("div.space_img5").css("transform", "rotateY(30deg) scale(1)");
        $("div.text").css("opacity", "0");
        $("div.text1").css("opacity", "0");
        $("div.text2").css("opacity", "0");
        $("div.text3").css("opacity", "0");
        $("div.text4").css("opacity", "1");
        $("div.text5").css("opacity", "0");
    });
});


$('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,

});