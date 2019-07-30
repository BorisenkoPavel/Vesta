$(document).ready(function () {
  svg4everybody({});

  var mySwiper = new Swiper('.banner-slider', {
    speed: 400,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next.banner-button-next',
      prevEl: '.swiper-button-prev.banner-button-prev',
    },
    pagination: {
      el: '.swiper-pagination.banner-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  var slider = new Swiper('.main-slider', {
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next.main-button-next',
      prevEl: '.swiper-button-prev.main-button-prev',
    },
    pagination: {
      el: '.swiper-pagination.main-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
  var recommendedSliderTop = new Swiper('.recommended-slider--top', {
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next.rec-button-next',
      prevEl: '.swiper-button-prev.rec-button-prev',
    },
    pagination: {
      el: '.swiper-pagination.rec-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  var recommendedSliderBottom = new Swiper('.recommended-slider--bottom', {
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next.rec-button-next',
      prevEl: '.swiper-button-prev.rec-button-prev',
    },
    pagination: {
      el: '.swiper-pagination.rec-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  $('.minus').click(function () {
    var $input = $(this).parent().find('#amount');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

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
  var elheight = $('.normal-slide').width()
  $('.big-slide').css('height', elheight)
    });
    
 $(".js-range-slider").ionRangeSlider();

 $(document).ready(function(){
  $("#header-fixed").sticky({topSpacing:0});
});

});