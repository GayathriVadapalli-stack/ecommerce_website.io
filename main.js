const menu_btn = document.querySelector('.hamburger');
const mobmenu = document.querySelector('.mobnav');

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('is-active');
    mobmenu.classList.toggle('is-active');
})