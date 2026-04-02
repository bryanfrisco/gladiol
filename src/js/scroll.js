var last_scroll_top = -1;

document.addEventListener("DOMContentLoaded", function () {
    var langButton = document.getElementsByClassName('nav-lang')[0]

    langButton.addEventListener("click", function () {
        var currentURL = window.location.pathname
        localStorage.setItem("from-prev-page", currentURL)
    })

    navbar = document.querySelector('.fancy-navbar')
    navup = document.querySelector('.nav-up')

    if (navbar) {
        window.addEventListener('scroll', function () {
            let scroll_top = window.scrollY;
            if (scroll_top != 0) {
                navbar.classList.add('scrolled');
                navup.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
                navup.classList.remove('scrolled');
            }
            if (scroll_top < last_scroll_top) {
                navbar.classList.remove('scrolled-down');
                navbar.classList.add('scrolled-up');
            } else {
                navbar.classList.remove('scrolled-up');
                navbar.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
    }
})