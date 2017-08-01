$(document).ready(function () {

    "use strict";

    $("a[href='#top']").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    $("a[href='#about']").click(function () {
        $("html, body").animate({
            scrollTop: $("#about").offset().top
        }, "slow");
        return false;
    });

});
