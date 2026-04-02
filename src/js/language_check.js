readLanguage = () => {
    var lang_pref = sessionStorage.getItem("lang-pref")
    if (!lang_pref) {
        var currentURL = window.location.pathname
        localStorage.setItem("from-prev-page", currentURL)
        window.location.assign("/language.html")
    }
    return lang_pref
}

removeLanguage = () => {
    sessionStorage.removeItem("lang-pref")
    window.location.assign("/index.html")
}

const lang_list = ["en", 'id']

document.addEventListener("DOMContentLoaded", () => {
    var setLang = readLanguage()
    lang_list.forEach(lang => {
        if(lang !== setLang) {
            var remove = document.querySelectorAll(`[lang=${lang}]`)
            if(remove) {
                remove.forEach(element => {element.remove()})
            }
        }
    })
})