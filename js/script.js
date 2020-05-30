$(document).ready(function () {
    $(".burger-menu").click(function () {
        $(".burger-menu").toggleClass("burger-menu__active");
        $(".header-navigation").toggleClass("header-navigation__active");
        $("body").toggleClass("body__no-scroll");
    })

    $(".slider__content").slick({
        slideShow:1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 5000,
    })
    $(".market__content").slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        responsive: [
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
        }
    ]
    })
})

