/**
 * Created by mac on 16/7/14.
 */
(function () {
    var readMore = $("#hidemore>.more-btn>a");
    var oUl = $("#hidemore");
    var text = $("#hidemore>.more-btn>a>.text")
    var paint = $("#hidemore>.more-btn>a>.glyphicon");
    var disable = $(".old");

    function upDown() {
        readMore.on("click", function (event) {
            if (oUl.css("height") !== 25 + "px") {
                oUl.css("height","25px");
                text.html("更多");
                paint.removeClass().addClass("glyphicon glyphicon-menu-down");
            } else{
                oUl.css("height","auto");
                text.html("收起");
                paint.removeClass().addClass("glyphicon glyphicon-menu-up");
            }
        });
    }
    
    function main() {
        upDown();
    }

    main();
})();