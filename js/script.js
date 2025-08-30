//     open menu
jQuery(function ($) {
    $('.menu-btn').on('click', function () {
        $('.header').toggleClass('open');
    });

    $('.category-btn').on('click', function () {
        $('.categories').toggleClass('open');
    });
});