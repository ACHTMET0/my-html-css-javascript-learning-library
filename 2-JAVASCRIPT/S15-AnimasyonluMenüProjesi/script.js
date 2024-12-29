const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navMainPage = document.getElementById('navMainPage');
const navAbout = document.getElementById('navAbout');
const navServices = document.getElementById('navServices');
const navPrices = document.getElementById('navPrices');
const navContact = document.getElementById('navContact');
const navItems = [navMainPage, navAbout, navServices, navPrices, navContact];


function toggleNav() {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        overlay.classList.add('overlay-slide-right');
        overlay.classList.remove('overlay-slide-left');
    } else {
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
    }
}


menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});