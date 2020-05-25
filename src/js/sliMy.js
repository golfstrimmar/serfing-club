$(Document).ready(function () {
  $(".slider-js").slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    // infinite: false,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",
    // fade: true,
    cssEase: 'linear',
    // rows: 1,
    nextArrow: $(".arrows-slider__next"),
    prevArrow: $(".arrows-slider__prev"),
    responsive: [
      {
        breakpoint: 819,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      { 
        breakpoint: 480,
        settings: {
          arrows: false,

          // centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
}); 






    $(Document).ready(function () {
      $(".slider-shop-js").slick({
        arrows: true,
        // dots: true,   
        
        slidesToShow: 3,
        // infinite: false,
        slideToscroll: 1,
        speed: 800, 
        // easing: "ease",
        adapitveHeight: true,  
        rows: 1,
        nextArrow: $(".arrows-slider-shop__arrow_prev"),
        prevArrow: $(".arrows-slider-shop__arrow_next"),
        responsive: [
          {
            breakpoint: 960,
            settings: {
              // arrows: false,

              slidesToShow: 2,
            },
          },
          {
            breakpoint: 620,
            settings: {
              // arrows: false,
              // centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
      });
    });  

