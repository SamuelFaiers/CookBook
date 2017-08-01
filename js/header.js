$(document).ready(function () {

    "use strict";

    updateLogo();

    $(window).resize(function () {
        updateLogo();
    });

    $(window).scroll(function () {
        stickyHeader();
    });

    $(".menu1 .link, .menu2 .link").click(function (event) {
        if (window.innerWidth < 641) {
            event.preventDefault();
        }
    });

    $(".menu1").on("click", function () {
        if (window.innerWidth < 641) {
            $(".menu1 > .drop-down").toggleClass("show-drop-down");
        }
    });

    $(".menu2").on("click", function () {
        if (window.innerWidth < 641) {
            $(".menu2 > .drop-down").toggleClass("show-drop-down");
        }
    });

});

function updateLogo() {

    "use strict";
    if (window.innerWidth >= 641 && $(window).scrollTop() < 1) {
        $(".logo img").attr("src", "img/svg/logo.svg");
    } else {
        $(".logo img").attr("src", "img/svg/logo-mini.svg");
    }
}

function stickyHeader() {

    "use strict";
    if ($(window).scrollTop() >= 1) {
        $(".header").addClass("sticky");
        $(".logo-wrapper").addClass("sticky");
        $(".logo").addClass("sticky");
        stickyLogo();
        $(".nav-wrapper>li").addClass("sticky");
    } else {
        $(".header").removeClass("sticky");
        $(".logo-wrapper").removeClass("sticky");
        $(".logo").removeClass("sticky");
        unstickyLogo();
        $(".nav-wrapper>li").removeClass("sticky");
    }
}

function stickyLogo() {

    "use strict";
    $(".logo img").attr("src", "img/svg/logo-mini.svg");
}

function unstickyLogo() {

    "use strict";
    if (window.innerWidth >= 641) {
        $(".logo img").attr("src", "img/svg/logo.svg");
    }
}
