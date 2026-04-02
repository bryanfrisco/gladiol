$(window).on('load', () => {
    $(".gladiol-loader").delay(1000).fadeOut(250)
    $(".load-animation").delay(1500).fadeOut(500)
    $("body").delay(2000).addClass("loaded")
})

// document.addEventListener("DOMContentLoaded", function() {
//     setInterval(function () {
//         if (!$("body").hasClass("loaded")) {
//             $("body").addClass("loaded")
//             $(".load-animation").fadeOut("slow")
//         }
//     }, 2000)
// })