import renderCart from "./renderCart";
import postData from "./postData";

const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModel = document.querySelector('.cart');
    const cartCloseBtn = cartModel.querySelector('.cart-close');
    const cartTotal = cartModel.querySelector('.cart-total > span');
    const goodsWrapper = document.querySelector('.goods');
    const counterCart = document.querySelector('.counter');
    const cartWrapper = cartModel.querySelector('.cart-wrapper');
    const cartSendBtn = cartModel.querySelector('.cart-confirm');

    const openCart = () => {
        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : [];

        cartModel.style.display = 'flex';

        renderCart(cart);

        cartTotal.textContent = cart.reduce((acc, item) => acc + item.price, 0);
    };

    const closeCart = () => {
        cartModel.style.display = '';
    };

    cartBtn.addEventListener('click', openCart);

    cartCloseBtn.addEventListener('click', closeCart);

    goodsWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const card = event.target.closest('.card');
            const key = card.dataset.key;
            const goods = JSON.parse(localStorage.getItem('goods'));
            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : [];
            const goodItem = goods.find(item => item.id === +key);

            cart.push(goodItem);

            localStorage.setItem('cart', JSON.stringify(cart));

            counterCart.textContent = cart.length;
        }
    });

    cartWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const card = event.target.closest('.card');
            const key = card.dataset.key;
            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : [];
            const index = cart.findIndex(item => item.id === +key);

            cart.splice(index, 1);

            localStorage.setItem('cart', JSON.stringify(cart));
            counterCart.textContent = cart.length;

            renderCart(cart);

            cartTotal.textContent = cart.reduce((acc, item) => acc + item.price, 0);
        }
    });

    cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : [];

        postData(cart).then((data) => {
            localStorage.removeItem('cart');
            renderCart([]);
            counterCart.textContent = 0;
            cartTotal.textContent = 0;
        });
    });
};

export default cart;