const menu_btn = document.querySelector('.hamburger');
const mobmenu = document.querySelector('.mobnav');

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('is-active');
    mobmenu.classList.toggle('is-active');
})

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.closest('.details');
            const imgSrc = product.querySelector('img').src;
            const title = product.querySelector('li:nth-child(2)').innerText;
            const price = product.querySelector('li:nth-child(3)').innerText;

            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            if (cart[title]) {
                cart[title].count += 1;
            } else {
                cart[title] = { imgSrc, price, count: 1 };
            }

            localStorage.setItem('cart', JSON.stringify(cart));
        });
    });
});
