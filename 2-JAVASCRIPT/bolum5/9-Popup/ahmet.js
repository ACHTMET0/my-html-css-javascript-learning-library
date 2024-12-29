const button = document.querySelector('button');
const mainPopup = document.querySelector('.main-popup');
const closePopup = document.querySelector('.popup-close');


button.addEventListener('click', () => {
    mainPopup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
    mainPopup.style.display = 'none';
});

mainPopup.addEventListener('click', (e) => {
    if (e.target.className === "main-popup") {
        mainPopup.style.display = 'none';
    }
});