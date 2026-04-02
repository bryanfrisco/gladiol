var submitted = localStorage.getItem("submit-form")
console.log(submitted)

if (!submitted) {
    window.location.assign("/")
}

localStorage.removeItem("submit-form")

$(document).ready(function() {
    let redirect_timer = 22
    let redirect_text = document.querySelector(".redirect-timer")
    setTimeout(function () {
        $(".load-animation").fadeOut("slow")
    }, 500)
    setInterval(() => {
        redirect_text.innerHTML = redirect_timer
        if(redirect_timer == 0) {
            window.location.assign("/")
        }
        redirect_timer = redirect_timer - 1
    }, 1000)
})