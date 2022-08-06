const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const listBurguerMenu = document.querySelector('.mobile-menu');
const shoppingCard = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

shoppingCard.addEventListener('click', toggleProductDetail)
menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleBurguerMenu);

function toggleDesktopMenu() {
    DesktopMenu.classList.toggle('inactive');
}

function toggleBurguerMenu() {
    listBurguerMenu.classList.toggle('inactive');
}

function toggleProductDetail() {
    productDetail.classList.toggle('inactive')
}