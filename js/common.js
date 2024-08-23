$(document).ready(function () {
    // input mask
    $('.telinp').inputmask({
        "mask": "+ 99 /999/ 999-9999",
        showMaskOnHover: false,
        showMaskOnFocus: false,
    });



    // Slider
    $('.halfslider').slick({
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });


    //   More Plans
    // ------------------------------------------------------
    // $('.moreplans').click(function () {
    //     $(this).find('text').toggle();
    //     $(this).parents('.popularplans').find('.popularplans-wrap').toggleClass('showall');
    // });
      // ------------------------------------------------------

    $('.howwework-more').click(function () {
        $(this).find('text').toggle();
        $(this).parents('.col-3').find('.howwework-wrap').toggleClass('hiddenbott');
        $(this).toggleClass('rotate');
    });


    //    tabs
    $('.tab-a').click(function (e) {
        e.preventDefault();

        $(".tab.sing").removeClass('tab-active');
        $(".tab.sing[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
        $(".tab-a").removeClass('active-a');
        $(this).parent().find(".tab-a").addClass('active-a');
    });


    $('.tab-b').click(function (e) {
        e.preventDefault();

        $(".tab.sub").removeClass('tab-active');
        $(".tab.sub[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
        $(".tab-b").removeClass('active-b');
        $(this).parent().find(".tab-b").addClass('active-b');
    });

    $('.tab-c').click(function (e) {
        e.preventDefault();

        $(".tab.sub2").removeClass('tab-active2');
        $(".tab.sub2[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active2");
        $(".tab-c").removeClass('active-c');
        $(this).parent().find(".tab-c").addClass('active-c');
    });



    // TAB SLIDERS

    $('.tabslider1').slick({
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });


    // container side width
    var winWidth = $(window).width(),
        containerWidth = $('.container').width(),
        padd = (winWidth - containerWidth) / 2;
    $('.buildsteps .slick-next').css('right', padd + 'px');
    $('.buildsteps .slick-prev').css('right', padd + 80 + 'px');

    $(window).resize(function () {
        var winWidth = $(window).width(),
            containerWidth = $('.container').width(),
            padd = (winWidth - containerWidth) / 2;
        $('.buildsteps .slick-next').css('right', padd + 'px');
        $('.buildsteps .slick-prev').css('right', padd + 80 + 'px');
    });



    $('.faq__block-title').click(function () {
        $(this).siblings('.faq__block-body').slideToggle();
        $(this).parent().toggleClass('active');
    });


    // menu scrollto

    $(".mainpage .header__nav ul li:not(.pagelink) a, .mainpage .footer__nav ul li:not(.pagelink) a,  .welcome .transparentbtn, .welcome__address").on("click", function (event) {
        var headerHeight = 110;
        if ($(window).width() < 1651 && $(window).width() > 1024) {
            var headerHeight = 80;
        }
        else if ($(window).width() < 992 && $(window).width() > 575) {
            var headerHeight = 60;
        } else if ($(window).width() < 576) {
            var headerHeight = 55;
        }
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top - headerHeight
        }, 1500);
    });

    

    $('.burgerbtn').click(function () {
        $('.header__nav').addClass('show');
    });

    $('.closemenu').click(function () {
        $('.header__nav').removeClass('show');
    });

    $('.mobtelbox > span').click(function () {
        $(this).next('.header__tel').slideToggle();
    });


    // sliders APARTAMENTS
    $('.varplan__slider').slick({
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
    });



    // top
    $(function () {
        $('.footer__up a').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        })

    });

    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.footer__up').fadeIn();
        } else {
            $('.footer__up').fadeOut();
        }
    });






});