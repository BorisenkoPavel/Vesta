$(document).ready(function () {
  AOS.init();

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
    breakpoints: {
      992: {
        navigation: false,
      },
      768: {
        pagination: false,
      },
    }
  });

  var catalogSlider = new Swiper('.catalog-slider', {
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next.catalog-button-next',
      prevEl: '.swiper-button-prev.catalog-button-prev',
    },
    pagination: {
      el: '.swiper-pagination.catalog-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      // when window width is <= 480px
      576: {
        slidesPerView: 1,
      },
      // when window width is <= 640px
      992: {
        slidesPerView: 2,
      }
    }
  });

  var reviewsSlider = new Swiper('.reviews-slider', {
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next.reviews-button-next',
      prevEl: '.swiper-button-prev.reviews-button-prev',
    },
    pagination: {
      el: '.swiper-pagination.reviews-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      // when window width is <= 480px
      768: {
        slidesPerView: 1,
      },
      // when window width is <= 640px
      992: {
        slidesPerView: 2,
      }
    }
  });
  var recommendedSliderTop = new Swiper('.recommended-slider--top', {
    speed: 400,
    slidesPerView: 3,
    slidesPerGroup: 2,
    simulateTouch: false,
    loop: true,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next.rec-button-next',
      prevEl: '.swiper-button-prev.rec-button-prev',
    },
    pagination: {
      el: '.swiper-pagination.rec-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      // when window width is <= 480px
      768: {
        slidesPerView: 1,
      },
      // when window width is <= 640px
      992: {
        slidesPerView: 2,
      }
    }
  });

  var recommendedSliderBottom = new Swiper('.recommended-slider--bottom', {
    freeMode: true,
    speed: 400,
    slidesPerView: 3,
    slidesPerGroup: 2,
    simulateTouch: false,
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
    breakpoints: {
      // when window width is <= 480px
      768: {
        slidesPerView: 1,
      },
      // when window width is <= 640px
      992: {
        slidesPerView: 2,
      }
    }
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

  $('.icon-bar').on('click', function () {
    event.preventDefault();
    $(this).addClass('active')
    $('.icon-stroke').removeClass('active')
    $('.product-list').addClass('product-list--bar')
  });

  $('.icon-stroke').on('click', function () {
    event.preventDefault();
    $(this).addClass('active')
    $('.icon-bar').removeClass('active')
    $('.product-list').removeClass('product-list--bar')
  });

  $('.product-list').addClass('product-list--bar')

var recItem = $('.big-slide')

  $(window).resize(function () {
    if ( $(window).width() < 992)  {
      $('.product-list').addClass('product-list--bar')
    }
    if ( $(window).width() < 992)  {
      $(recItem).addClass('change-slide')
      $(recItem).removeClass('big-slide')
    }
    var elheight = $('.normal-slide').width()
    $('.big-slide').css('height', elheight)
    $('.change-slide').css('height', elheight)
  })

  var elheight = $('.normal-slide').width()

  $('.big-slide').css('height', elheight)

  $(".js-range-slider").ionRangeSlider();

  //  $(document).ready(function(){
  //   $("#header-fixed").sticky({topSpacing:0});
  // });
  $(window).scroll(function () {
    var sticky = $('.header-fixed'),
      scroll = $(window).scrollTop();

    if (scroll >= 500) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  $('.header-menu__title').on('click', function(){
    event.preventDefault();
  if ($(window).width() < 576) {
    $(this).siblings('.header-menu__list').slideToggle(200)
  }
  })

});