$(function () {
    $('.mbtn').on('click', function () {
        $('#gnb').toggleClass('on');
        $(this).toggleClass('on');

        $('#header h1').toggleClass('on');
    })

    $('#gnb>ul>li>a').on('click', function (e) {
        if ($(window).width() < 769) {
            e.preventDefault();
            $(this).parent().siblings().find('.smenu').hide();
            $(this).next().toggle();
        }

    })

    $(window).on('resize', function () {
        if ($(window).width() > 768) {
            $('.smenu').removeAttr('style');
        }
    })
})