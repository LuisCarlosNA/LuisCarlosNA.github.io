const btnCart = document.querySelector('.add-cart')
const containerCartProducts = document.querySelector('.contador-productos')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('.contador-productos')
})