$(document).ready(function() {

  /* Подключаем валидацию формы с телефоном */
  $('.consultation-form').validate( {
    errorClass: "errors",
    rules: {
        name:  "required",
        tel: "required"
    },
    messages: {
      name: false,
      tel: false
    }
  });

  /* Подключаем маску для callback-form */
  $('.phone').mask('+7 (999) 999-9999');
  /* Подключаем валидацию для callback-form */
  $('#callback-form').validate( {
    errorClass: "errors",
    rules: {
        tel: "required"
    },
    messages: {
      name: false,
      tel: false
    }
  });



  /* Подключаем маску для consultation-form */
  $('#phone').mask('+7 (999) 999-9999');



  
  /* открытие модального окна по клику на .burger */
  $('.burger').click(function() {
    $('.modal').slideDown();
  });

  /* закрытие модального окна по клику на .close */
  $('.close').click(function() {
    $('.modal').slideToggle();
  });


  
  /* плавное открытие модального окна по клику на .border-btn */
  $('.border-btn').click(function() {
    $('.modal-callback').fadeIn(300).css({'display':'flex'});
    $('.modal').fadeOut(300);

  });

  /* закрытие модального окна по клику на .close-callback */
  $('.close-callback').click(function() {
    $('.modal-callback').css({'display':'none'});
  });




  /* скрываем все элементы после 5-го */
  $('.content-contacts:gt(5)').addClass('hide');

  /* делаем видимыми скрытые элементы с классом .content-contacts по клику на ссылку с классом .show-more */
  $('.show-more').click(function() {
    $('.content-contacts').toggleClass('hide').slideDown();
    $('.show-more').hide();
  });

  /* плавная прокрутка к якорю #contacts-title по клику на ссылку с классом .show-more */
  $("a.show-more").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 1000,
       easing: "swing"
    });
    return false;
 });

  /* плавная прокрутка к якорю #contacts-title по клику на пункт меню с классом .menu */
  $("a.menu").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 1000,
       easing: "swing"
    });
    $('.modal').hide();
    return false;
 });




  /* Подключаем маску и валидацию для footer-form */
  $('#footer-phone').mask('+7 (999) 999-9999');
  $('.footer-form').validate( {
    errorClass: "errors",
    rules: {
        name:  "required",
        tel: "required"
    },
    messages: {
      name: false,
      tel: false
    }
  });

});