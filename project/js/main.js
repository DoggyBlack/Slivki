$(document).ready(function() {
    $("#content").hide();
    $("#menu").click(function() {
        if ($("#content").is(":hidden")) {

            $("#content").show("slow");

        } else {

            $("#content").hide("slow");

        }
    });


    $("#calculation-content").hide();
    $("#calculation").click(function() {
        $("#calculation-content").show("slow");
    });
    $("#close").click(function() {
        $("#calculation-content").hide("slow");
    });

    $(window).on("resize", function() {
        $(window).width() < 481 ? start() : false
    }).resize();

    function start() {

        var dimention = $(".footer__logos").offset().left == 0;
        console.log(dimention);

        $(".footer__logos").delay(4000).animate({
            marginLeft: dimention ? -($(".footer__logos").width()) / 2 : "0"
        }, 1000, 'linear', function() {
            if (!dimention) {
                $(".footer__right-point").removeClass("active")
                $(".footer__left-point").addClass("active")
            } else {
                $(".footer__left-point").removeClass("active")
                $(".footer__right-point").addClass("active")
            }
            start();
        });
    }
});
