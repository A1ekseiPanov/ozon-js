const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModel = document.querySelector('.cart');
    const cartCloseBtn = cartModel.querySelector('.cart-close');

    const openCart = () => {
        cartModel.style.display = 'flex';
    };

    const closeCart = () => {
        cartModel.style.display = '';
    };

    cartBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);
};

export default cart;