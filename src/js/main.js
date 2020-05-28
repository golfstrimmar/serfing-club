// $(Document).ready(function () {
//   $(".icon-menu").click(function (event) {
//     $(this).toggleClass("active"),
//       $(".menu").toggleClass("menu_active");
//       $("body").toggleClass("lock");
//     });
// });

// ==========================================================
function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}

ibg();

// -------------burger----------------------

$(Document).ready(function () {
  $(".icon-menu").click(function (event) {
    $(this).toggleClass("active"),
      $(".menu").toggleClass("menu_active");
    $("body").toggleClass("lock");
  });
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.icon-menu')) {
    let user_menu = document.querySelector('.menu');
    user_menu.classList.remove('menu_active'),
      $('.icon-menu').removeClass("active")
    $("body").removeClass("lock");
  }
});
// -------------burger2----------------------
$(Document).ready(function () {
  $(".icon-menu2").click(function (event) {
    $(this).toggleClass("active"),
      $(".menu2-js").toggleClass("menu2_active");
    $("body").toggleClass("lock");
  });
});
document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.icon-menu2')) {
    let user_menu = document.querySelector('.menu2-js');
    user_menu.classList.remove('menu2_active'),
      $('.icon-menu2').removeClass("active")
    $("body").removeClass("lock");
  }
});

// --------------burger-thanks---------------------
document.documentElement.addEventListener("click", function (e) {
    $(".popup-thanks").fadeOut(300);
    $("body").removeClass("lock");
});

// --------------------------------
// // ==скроллинг==================
$(function () {
  $('a[href^="#slider"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 800);//800 - длительность скроллинга в мс
    return false;
  });
});

$(function () {
  $('a[href^="#lots"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 800);//800 - длительность скроллинга в мс
    return false;
  });
});

$(function () {
  $('a[href^="#categories"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 800);//800 - длительность скроллинга в мс
    return false;
  });
});

$(function () {
  $('a[href^="#servis"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 1200);//800 - длительность скроллинга в мс
    return false;
  });
});

$(function () {
  $('a[href^="#mail"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 800);//800 - длительность скроллинга в мс
    return false;
  });
});

$(function () {
  $('a[href^="#contacts"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 800);//800 - длительность скроллинга в мс
    return false;
  });
});

// =================.popup-action==========https://www.youtube.com/watch?v=rIb0OoNWDEs============
// открыть по кнопке
$('.js-button-campaign').click(function () {
  // $('').css('filter','blur(5px)');
  $('.js-overlay-campaign').fadeIn();
  $('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function () {
  $('.js-overlay-campaign').fadeOut();
  // $('').css('filter','none');

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
  var popup = $('.js-popup-campaign');
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $('.js-overlay-campaign').fadeOut();

  }
});

// открыть по таймеру 
$(window).on('load', function () {
  setTimeout(function () {
    if ($('.js-overlay-campaign').hasClass('disabled')) {
      return false;
    } else {

      $(".js-overlay-campaign").fadeIn();
    }
  }, 5000);
});


// -------------------------







