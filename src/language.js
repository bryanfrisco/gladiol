var referUrl = localStorage.getItem("from-prev-page")
if (!referUrl) {
    var referUrl = "/index.html"
}

console.log(referUrl)

setLanguage = (lang) => {
    sessionStorage.setItem("lang-pref", lang)
    window.location.assign(referUrl)
}

$(document).ready(function() {
    setTimeout(function () {
        $(".load-animation").fadeOut("slow")
    }, 500)
    $("#ENG-BUTTON").on('click', function() {
        setLanguage("en")
    })
    $("#IDR-BUTTON").on('click', function() {
        setLanguage("id")
    })
})