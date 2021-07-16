$(document).ready(function () {
  $(".slide__img").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: ".slide__top-arrow-prev",
    nextArrow: ".slide__top-arrow-next",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          draggable: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
          dots: false,
          draggable: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
          dots: false,
          draggable: true,
          infinite: true,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
          dots: false,
          draggable: true,
          infinite: true,
        },
      },
    ],
  });

  $(".category__slide").slick({
    slidesToShow: 10,
    slidesToScroll: 3,
    arrows: true,
    dots: false,
    infinite: false,
    prevArrow:
      '<span class="slick-prev"><i class="fas fa-angle-left"></i></span>',
    nextArrow:
      '<span class="slick-next"><i class="fas fa-angle-right"></i></span>',
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 4,
            autoplay: false,
            arrows: false,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 4,
            autoplay: false,
            arrows: false,
            dots: false,
            draggable: true,
            infinite: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: false,
            arrows: false,
            dots: false,
            draggable: true,
            infinite: false,
          },
        },
      ],
  });
  var currentSlide = $(".category__slide").slick("slickCurrentSlide");
  if (currentSlide == 0) {
    $(".slick-prev").hide();
  } else if (currentSlide == 3) {
    $(".slick-next").hide();
  }

  $(".category__slide").on("afterChange", function () {
    var currentSlide = $(".category__slide").slick("slickCurrentSlide");
    if (currentSlide == 0) {
      $(".slick-prev").hide();
      $(".slick-next").show();
    } else if (currentSlide == 3) {
      $(".slick-next").hide();
      $(".slick-prev").show();
    }
    // if(currentSlide>0 && currentSlide<3)
    // {
    //     $('.slick-prev').show();
    //     $('.slick-next').show();
    // }
  
  });

  // END CATEGORY SLIDE

  $(".shopee__mall-content-left").slick({
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    prevArrow: false,
    nextArrow: false,
  });

  $(".flash__sale-slide").slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    dots: false,
    infinite: false,
    prevArrow:
      '<span class="slick-prev"><i class="fas fa-angle-left"></i></span>',
    nextArrow:
      '<span class="slick-next"><i class="fas fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          arrows: false,
          dots: false,
          draggable: true,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: false,
          dots: false,
          draggable: true,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: false,
          draggable: true,
          infinite: false,
        },
      },
    ],
  });
  var currentSlide = $(".category__slide").slick("slickCurrentSlide");
  if (currentSlide == 0) {
    $(".slick-prev").hide();
  } else if (currentSlide == 6) {
    $(".slick-next").hide();
  }

  $(".flash__sale-slide").on("afterChange", function () {
    var currentSlide = $(".flash__sale-slide").slick("slickCurrentSlide");
    if (currentSlide == 0) {
      $(".slick-prev").hide();
      $(".slick-next").show();
    } else if (currentSlide == 6) {
      $(".slick-next").hide();
      $(".slick-prev").show();
    }
  });

  // END FLASH SALE SLIDE

  $(".top__search-content-slide").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: false,
    draggable: false,
    infinite: false,
    prevArrow:
      '<span class="slick-prev"><i class="fas fa-angle-left"></i></span>',
    nextArrow:
      '<span class="slick-next"><i class="fas fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: false,
          draggable: true,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          draggable: true,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          draggable: true,
          infinite: false,
        },
      },
    ],
  });
  var currentSlide = $(".top__search-content-slide").slick("slickCurrentSlide");
  if (currentSlide == 0) {
    $(".slick-prev").hide();
  } else if (currentSlide == 3) {
    $(".slick-next").hide();
  }

  $(".top__search-content-slide").on("afterChange", function () {
    var currentSlide = $(".top__search-content-slide").slick(
      "slickCurrentSlide"
    );
    if (currentSlide == 0) {
      $(".slick-prev").hide();
      $(".slick-next").show();
    } else if (currentSlide == 3) {
      $(".slick-next").hide();
      $(".slick-prev").show();
    }
  });

  // END TOP SEARCH SLIDE

  $(".hightlight__trend-content").slick({
    slidesToShow: 5,
    arrows: true,
    dots: false,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          draggable: true,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          draggable: true,
          infinite: false,
        },
      },
    ],
  });

  // END HIGHT LIGHT TREND

  $(".shopee__mall-content-left-sub").slick({
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
  });

  // END SHOPEE MALL SUB

  $(".refund__list").slick({
    slidesToShow: 6,
    arrows: true,
    dots: false,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: false,
          draggable: true,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: false,
          draggable: true,
          infinite: false,
        },
      },
    ],
  });
});

var deadline = new Date("march 12, 2021 20:30:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var t = deadline - now;
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
}, 1000);
