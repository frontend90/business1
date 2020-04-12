/*********************  плавный скролл    ***************/
$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if ($.browser) {
      $('body').animate({
        scrollTop: destination
      }, 1000);
    } else {
      $('html').animate({
        scrollTop: destination
      }, 1000);
    }
    return false;
  });
});

/************    header slick    **************/
$('.header-slider').slick({
  arrows: false,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
});