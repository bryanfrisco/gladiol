document.addEventListener("DOMContentLoaded", function() {
    $('.gallery').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 5000,
        stagePadding: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
})