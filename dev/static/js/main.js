$(document).ready(function () {
  svg4everybody({});
  var mySwiper = new Swiper('.banner-slider', {
    speed: 400,
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
  var recommendedSliderTop = new Swiper('.recommended-slider--top', {
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

  var recommendedSliderBottom = new Swiper('.recommended-slider--bottom', {
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

  function change(objName, min, max, step) {
    var obj = document.getElementById(objName);
    var tmp = +obj.value + step;
    if (tmp < min) tmp = min;
    if (tmp > max) tmp = max;
    obj.value = tmp;
  }

  $('.icon-bar').on('click', function() {
    event.preventDefault();
    $(this).addClass('active')
    $('.icon-stroke').removeClass('active')
    $('.product-list').addClass('product-list--bar')
  });

  $('.icon-stroke').on('click', function() {
    event.preventDefault();
    $(this).addClass('active')
    $('.icon-bar').removeClass('active')
    $('.product-list').removeClass('product-list--bar')
  });

  var elheight = $('.normal-slide').width()
  $('.big-slide').css('height', elheight)

  $(window).resize(function() {
      $('.big-slide').css('height', elheight);
      console.log($('.big-slide').height())
    });
    
});