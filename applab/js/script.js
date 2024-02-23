$(document).ready(function() {
    $('.multiple-items').slick({
        dots: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 5,
    });

    $('.product-item').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });


    $(".add-remove").click(function() {
        if ($($(this).next()).hasClass("show")) {
            $(".add-remove").removeClass("active");
            $(".accordion-contant").removeClass("show");
            $(".accordion-contant").slideUp();

        } else {
            $(".add-remove").removeClass("active");
            $(".accordion-contant").removeClass("show");
            $(".accordion-contant").slideUp();
            $(this).addClass("active");
            $(this).next().addClass("show");
            $(this).next().slideDown();
        }
    });


});