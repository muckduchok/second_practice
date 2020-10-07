$(document).ready(function(){
    $('.carusel__inner').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/next.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            }
          ]
    });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

function toggleSlide(item) {
  $(item).each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  });
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

  //model

  $('[data-model=consulting]').on('click', function() {
    $('.overlay, #consulting').fadeIn('slow');
  });

  $('.model__close').on('click', function() {
    $('.overlay, #consulting, #order, #thanks').fadeOut('slow');
  });

  $('.button_catalog').on('click', function() {
    $('.overlay, #order').fadeIn('slow');
  });

  $('.button_catalog').each(function(i) {
    $(this).on('click', function() {
      $('#order .model__descr').text($('.catalog-item__subtitle').eq(i).text());

    });
  });

  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consulting, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});

//smooth scroll

$ (window).scroll(function() {
  if ($(this).scrollTop() > 1600) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});

$("[href^='#']").click(function() {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
});