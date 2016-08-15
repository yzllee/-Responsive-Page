/**
 * Created by mac on 16/7/13.
 */
$(function () {

    var timer = function () {
        var time_start = new Date().getTime();
        var time_end = new Date("2016/8/16 00:00:00").getTime();
        var time_distance = time_end - time_start;

        var int_day = Math.floor(time_distance / 86400000);
        time_distance -= int_day * 86400000;
        var int_hour = Math.floor(time_distance / 3600000);
        time_distance -= int_hour * 3600000;
        var int_minute = Math.floor(time_distance / 60000);
        time_distance -= int_minute * 60000;
        var int_second = Math.floor(time_distance / 1000);
        if (int_day < 10) {
            int_day = "0" + int_day;
        }
        if (int_hour < 10) {
            int_hour = "0" + int_hour;
        }
        if (int_minute < 10) {
            int_minute = "0" + int_minute;
        }
        if (int_second < 10) {
            int_second = "0" + int_second;
        }
        $(".time").html(int_day + "天" + int_hour + "小时" + int_minute + "分" + int_second + "秒");

    };
    setInterval(timer, 1000);

});