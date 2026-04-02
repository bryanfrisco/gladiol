$(document).ready(() => {
    const search_bar = document.querySelector(".search-bar")
    const products = document.querySelectorAll(".product-box")
    const categories = document.querySelectorAll(".pixel-radio")
    search_bar.addEventListener("keyup", (e) => {
        let searchText = e.target.value.toLowerCase().trim()
        products.forEach((product) => {
            let productName = product.dataset.name.toLowerCase().trim()
            console.log(searchText, productName)
            if(productName.includes(searchText)){
                product.style.display="block"
            }
            else{
                product.style.display="none"
            }
        })
    })

    categories.forEach((category) => {
        category.addEventListener('click', () => {
            let selectedFilter = category.dataset.filter
            products.forEach((product) => {
                if(selectedFilter=='all'){
                    product.style.display="block"
                }
                else{
                    let productCategory = product.dataset.item
                    if(selectedFilter==productCategory){
                        product.style.display="block"
                    }
                    else{
                        product.style.display="none"
                    }
                }
            })
        })
    })
})