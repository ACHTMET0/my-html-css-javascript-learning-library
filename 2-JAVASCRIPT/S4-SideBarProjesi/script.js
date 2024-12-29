const menuIcon = document.querySelector('.fa-bars');
const sideBar = document.querySelector('.sideBar');
const closeIcon = document.querySelector('.fa-xmark');

menuIcon.addEventListener('click', () => {
    sideBar.classList.toggle('showSideBar');
});

closeIcon.addEventListener('click', () => {
    sideBar.classList.remove('showSideBar');
});
