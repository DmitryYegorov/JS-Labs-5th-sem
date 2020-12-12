$(document).ready(function () {
    $('#list li').mouseover(function () {
        $(this).find("h3").css('color', '#ff0036');
        $(this).find("#block").animate({ opacity: "90%", },400);
        $(this).css('border', '1.5px solid #262626');
    });
    $('#list li').mouseout(function () {
        $(this).find("h3").css('color', 'black');
        $(this).find("#block").animate({ opacity: "0%", }, 0);
        $(this).css('border', '1.5px solid #e7e7e7');
    });
});