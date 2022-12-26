$(function () {
    $('.mbtn').on('click', function () {
        $('#gnb').toggleClass('on');
        $(this).toggleClass('on');

        $('#header h1').toggleClass('on');
    })
})