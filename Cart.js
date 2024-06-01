const menu_btn = document.querySelector('.hamburger');
const mobmenu = document.querySelector('.mobnav');

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('is-active');
    mobmenu.classList.toggle('is-active');
})

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountContainer = document.getElementById('total-amount');
    const checkoutButton = document.querySelector('.payBtn');

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let cart = JSON.parse(localStorage.getItem('cart')) || {};
        let totalAmount = 0;

        Object.keys(cart).forEach(title => {
            const { imgSrc, price, count } = cart[title];
            const itemPrice = parseFloat(price.replace('Rs. ', '').replace(',', '')) * count;
            totalAmount += itemPrice;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="${imgSrc}" alt="${title}">
                <div>
                    <h3>${title}</h3>
                    <p>Price: ${price}</p>
                    <p>Count: <button class="decrease">-</button> <span>${count}</span> <button class="increase">+</button></p>
                </div>
            `;

            cartItemsContainer.appendChild(cartItem);

            cartItem.querySelector('.increase').addEventListener('click', () => {
                cart[title].count += 1;
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
            });

            cartItem.querySelector('.decrease').addEventListener('click', () => {
                if (cart[title].count > 1) {
                    cart[title].count -= 1;
                } else {
                    delete cart[title];
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
            });
        });

        totalAmountContainer.innerText = `Total: Rs. ${totalAmount.toLocaleString()}`;
    }

    checkoutButton.addEventListener('click', () => {
        localStorage.removeItem('cart');
        renderCart();
        window.location.href = 'Thankyou.html';
    });

    renderCart();
});

const prodBtn = document.querySelector('.btn')
const payment = document.querySelector('.payment')
const close = document.querySelector('.close')

prodBtn.addEventListener("click", () => {
    payment.style.display = "block"
})

close.addEventListener("click", () => {
    payment.style.display = "none"
})