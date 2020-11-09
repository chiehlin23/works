$(function () {
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
        $("div.instruction").on("click", function () {
            $("ul.list").slideToggle();
        });
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



    $("div.open").on("click", function () {
        $("aside.aside").toggleClass("-on")
        $("div.open").css("display", "none")
        $("div.close").css("display", "block")
    });
    $("div.close").on("click", function () {
        $("aside.aside").toggleClass("-on")
        $("div.close").css("display", "none")
        $("div.open").css("display", "block")
    });
    $("div.user_nav1").on("click", function () {
        $("div.user_box").css("display", "block")
        $("div.class_list_box").css("display", "none")
        $("div.video_box").css("display", "none")
        $("div.item_box").css("display", "none")
    });
    $("div.user_nav2").on("click", function () {
        $("div.user_box").css("display", "none")
        $("div.class_list_box").css("display", "block")
        $("div.video_box").css("display", "none")
        $("div.item_box").css("display", "none")
    });
    $("div.user_nav3").on("click", function () {
        $("div.video_box").css("display", "block")
        $("div.user_box").css("display", "none")
        $("div.class_list_box").css("display", "none")
        $("div.item_box").css("display", "none")
    });
    $("div.user_nav4").on("click", function () {
        $("div.video_box").css("display", "none")
        $("div.user_box").css("display", "none")
        $("div.class_list_box").css("display", "none")
        $("div.item_box").css("display", "block")
    });
})