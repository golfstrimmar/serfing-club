

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
      $(".sliderbords-js").slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,     
        // infinite: false,
        slideToscroll: 1,
        speed: 800, 
        easing: "ease",
        adapitveHeight: true,  
        rows: 1,
        // nextArrow: $(".control-slider-lots__arrow_next"),
        // prevArrow: $(".control-slider-lots__arrow_prev"),
        responsive: [
          {
            breakpoint: 819,
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
    // $(Document).ready(function () {
    //   $(".slider1-js").slick({
    //     arrows: true,
    //     dots: false,
    //     slidesToShow: 1,     
    //     // infinite: false,
    //     slideToscroll: 1,
    //     speed: 800, 
    //     easing: "ease",
    //     adapitveHeight: true,  
    //     rows: 1,
    //     // nextArrow: $(".control-slider-lots__arrow_next"),
    //     // prevArrow: $(".control-slider-lots__arrow_prev"),
    //     responsive: [
    //       {
    //         breakpoint: 819,
    //         settings: {
    //           // arrows: false,

    //           slidesToShow: 2,
    //         },
    //       },
    //       {
    //         breakpoint: 620,
    //         settings: {
    //           // arrows: false,
    //           // centerPadding: "40px",
    //           slidesToShow: 1,
    //         },
    //       },
    //     ],
    //   });
    // });  