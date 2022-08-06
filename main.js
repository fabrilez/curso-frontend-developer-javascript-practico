const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const menuHamburguer = document.querySelector('.menu');
const listMenuHamburger = document.querySelector('.mobile-menu')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click', toggleHamburguerMenu);

function toggleDesktopMenu() {
    DesktopMenu.classList.toggle('inactive');
}

function toggleHamburguerMenu() {
    listMenuHamburger.classList.toggle('inactive');
}