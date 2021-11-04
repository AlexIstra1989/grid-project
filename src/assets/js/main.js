$(function() {
 $(".menu").on("click", "a", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({ scrollTop: top }, 1000);
});

  $('.menu__burger').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('.menu__burger').toggleClass('menu__burger--active');
  })

  $('.menu__burger').click(function (event) {
   event.preventDefault();
   $('body').toggleClass('overflow');
 });
});

