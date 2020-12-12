var posNow = 5;
var posLast = 5;

$(document).keydown(function (e) {
    posNow = $('#range').val();
    var elementsList = $('#list');
    var pixelsOffset = 313;
    var currentLeftValue = elementsList.offset().left + 1252 - 157;

    if ((e.keyCode == 39) && (posNow != 9)) {//ВПРАВО
        console.log(posNow);
        $('#range').val(posNow-1+2);
        posNow = $('#range').val();
        console.log(posNow);
        currentLeftValue -= pixelsOffset;
        elementsList.animate({ left: currentLeftValue + "px" }, 1000);
        //$('#list > :first-child').appendTo('#list');
    }
    if ((e.keyCode == 37) && (posNow != 1)) {//ВЛЕВО
        console.log(posNow);
        $('#range').val(posNow - 1);
        posNow = $('#range').val();
        console.log(posNow);
        currentLeftValue += pixelsOffset;
        elementsList.animate({ left: currentLeftValue + "px" }, 1000);
        //$('#list > :last-child').prependTo('#list');
    }
    posLast = posNow;
});

jQuery(document).ready(function () {
    $('#range').change(function () {
        posNow = $(this).val();
        var elementsList = $('#list');
        //var step = elementsList.offset().left + 313;
        var pixelsOffset = 313;
        var currentLeftValue = elementsList.offset().left + 1252 - 157;
        if (posNow > posLast) {
            currentLeftValue -= pixelsOffset;
            elementsList.animate({ left: currentLeftValue + "px" }, 1000);
        }
        if (posNow < posLast) {
            currentLeftValue += pixelsOffset;
            elementsList.animate({ left: currentLeftValue + "px" }, 1000);
        }
        posLast = posNow;
    });
});