var basePrice, baseMult

fetch('/assets/databases/UTY-Price.json')
.then(response => response.json())
.then(data => {
    basePrice = data
})

fetch('/assets/databases/cubic-to-pcs.json')
.then(response => response.json())
.then(data => {
    baseMult = data
})

const calculate_price = (matSel, glueSel, thick, quantity) => {
    let thickness = parseInt(thick)
    let qty = parseInt(quantity)
    let base = basePrice[glueSel][matSel][thickness]
    let metric_base = Math.round(base * baseMult[thickness])
    let final_price = metric_base * qty
    if (!final_price) {
        return [0, 0]
    }
    return [final_price, base]
}

const update_price = () => {
    var matSel = document.querySelector(".radio-tile-group input[type='radio'][name='mat-radio']:checked")
    var glueSel = document.querySelector(".radio-tile-group input[type='radio'][name='glue-radio']:checked")
    if (matSel) {
        matSel = matSel.value
    }
    if (glueSel) {
        glueSel = glueSel.value
    }
    const thick = document.querySelector(".dropdown-select .selected").innerText
    const quantity = document.querySelector(".num-input").value
    const [price, pcs_price]= calculate_price(matSel, glueSel, thick, quantity)
    priceFill.innerHTML = price.toLocaleString('en-US')
    pricePcs.innerHTML = pcs_price
}

submit.addEventListener('click', () => {
    var matSel = document.querySelector(".radio-tile-group input[type='radio'][name='mat-radio']:checked")
    var glueSel = document.querySelector(".radio-tile-group input[type='radio'][name='glue-radio']:checked")
    if (matSel) {
        matSel = matSel.value
    }
    if (glueSel) {
        glueSel = glueSel.value
    }
    const product = document.querySelector("title").innerText
    const thick = document.querySelector(".dropdown-select .selected").innerText
    const quantity = document.querySelector(".num-input").value
    const prefillString = "I'm interested in " + quantity + "m3 of " + product + " with thickness of " + thick + ", " + matSel + " and " + glueSel
    sessionStorage.setItem("prefill-text", prefillString)
})