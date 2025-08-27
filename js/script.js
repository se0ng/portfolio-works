//     open menu
jQuery(function ($) {
  $('.menu-btn').on('click', function () {
    $('body').toggleClass('open');
  });

  $('.gallery').each(function () {
    $(this).modaal({
      type: 'image'
    });
  });

  /*$('.gallery').modaal({
    type: 'image'
  });*/
});
