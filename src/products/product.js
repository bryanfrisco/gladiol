const dropdowns = document.querySelectorAll('.dropdown')
const numbers = document.querySelectorAll('.number-select')
const radio_tiles = document.querySelectorAll('.input-container')
const modal_box = document.querySelector('.modal.fade')
const priceFill = document.querySelector('#price-fill')
const pricePcs = document.querySelector('#price-pcs')
const submit = document.querySelector('.submit-interest')


radio_tiles.forEach(radio_tile => {
    radio_tile.addEventListener('click', () => {
        update_price();
    })
})

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.dropdown-select')
    const caret = dropdown.querySelector('.caret')
    const menu = dropdown.querySelector('.dropdown-main')
    const options = dropdown.querySelectorAll('.dropdown-main li')
    const selected = dropdown.querySelector('.selected')

    select.addEventListener('click', () => {
        select.classList.toggle('clicked')
        caret.classList.toggle('rotate')
        menu.classList.toggle('open')
        update_price();
    })

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('clicked')
            caret.classList.remove('rotate')
            menu.classList.remove('open')

            options.forEach(option => {
                option.classList.remove('dropdown-main-active')
            })

            option.classList.add('dropdown-main-active')
            update_price();
        })
    })
});

numbers.forEach(num => {
    const numInput = num.querySelector('.num-input')
    const left = num.querySelector('.decrement')
    const right = num.querySelector('.increment')
    const min = parseInt(numInput.getAttribute('min'))
    const max = parseInt(numInput.getAttribute('max'))

    numInput.addEventListener('input', () => {
        update_price();
    })

    left.addEventListener('click', () => {
        if (numInput.value > max) {
            numInput.value = max
        }
        else if (numInput.value < min) {
            numInput.value = min
        }
        numInput.stepDown();
        update_price();
    })
    right.addEventListener('click', () => {
        if (numInput.value > max) {
            numInput.value = max
        }
        else if (numInput.value < min) {
            numInput.value = min
        }
        numInput.stepUp();
        update_price();
    })
})

window.setInterval(() => {
    if (!modal_box.classList.contains('show')) {
        dropdowns.forEach(dropdown => {
            const menu = dropdown.querySelector('.dropdown-main')
            menu.classList.remove('open')
        })
    }
}, 10)

document.addEventListener("DOMContentLoaded", function() {
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
                    $('.cert-title').text(certContent.name)
                    $('.cert-desc').text(certContent.desc)
                })
            }
        })
    })
});