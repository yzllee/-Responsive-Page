/**
 * Created by mac on 16/7/15.
 */
$(function () {
    $(".article-detail h3").on("click", function () {
        $(this).parent().toggleClass("active").find("div").slideToggle(400)
            .end().siblings().removeClass("active").find("div").slideUp(400);
    })
});