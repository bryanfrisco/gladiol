document.addEventListener("DOMContentLoaded", function() {
    $('.jumbotron').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: false,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 10000,
        animateOut: 'fadeOutUp',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.gallery').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        mouseDrag: true,
        touchDrag: true,
        autoplay: true,
        autoplayTimeout: 3000,
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

    $('.testimonial-slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        margin: 10,
        nav: true,
        navText: ["<i class='fa-solid fa-angle-left'></i>",
            "<i class='fa-solid fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: true
            },
            768: {
                items: 2
            },
        }
    });
    
    $('.cert-pop').click(function() {
        let certID = $(this).attr('cert')
        let certSrc =  $(this).children().attr('src')
        let setLang = sessionStorage.getItem("lang-pref")
        $('#cert-imagePrev').attr('src', certSrc)
        lang_list.forEach(lang => {
            if(lang === setLang) {
                fetch(`/assets/databases/certifications-${lang}.json`)
                .then(response => response.json())
                .then(data => {
                    let certContent = data[certID]
                    $('.cert-title').html(certContent.name)
                    $('.cert-desc').html(certContent.desc)
                    $('.cert-link').attr('href', `/certifications.html#${certID}`)
                })
            }
        })
    })
});

const carousel = document.querySelector(".slider-carousel");
const slider_icon = document.querySelectorAll(".slider-nav i");
const firstImg = carousel.querySelectorAll("img")[0];

let isDragStart = false,
    isDragging = false,
    prevPageX, prevScrollLeft, positionDiff;

slider_icon.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 4.5;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSnap();
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const autoSnap = () => {
    if (carousel.scrollLEft == (carousel.scrollWidth - carousel.clientWidth)) return;
    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 4.5;
    let valDifference = firstImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImgWidth / 6 ? valDifference : -positionDiff;
    }
    carousel.scrollLeft -= positionDiff > firstImgWidth / 6 ? valDifference : -positionDiff;
}

// Desktop
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("mousemove", dragging);

// Mobile
carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("touchmove", dragging);
carousel.addEventListener("touchend", dragStop)