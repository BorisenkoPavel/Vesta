$(document).ready(function () {
    svg4everybody({});
    var mySwiper = new Swiper('.banner-slider', {
      speed: 400,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });    
    var Slider = new Swiper('.main-slider', {
      speed: 400,
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
  });
    var recommendedSlider = new Swiper('.recommended-slider', {
      speed: 400,
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerColumn: 2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
  });

});