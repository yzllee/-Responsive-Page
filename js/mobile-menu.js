/**
 * Created by mac on 16/7/11.
 */
$(function () {
    function main() {
        $("#navbarA").on("click", function () {
            $("#mobile-menu").show();
            $(".menu-right").bind("click", function (event) {
                event.stopPropagation();
            });
        });
        $("#mobile-menu").on("click", function () {
            $(this).hide();
        });
    }

    main();
});