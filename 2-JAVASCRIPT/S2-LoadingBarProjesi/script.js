const counter = document.querySelector('.counter');
const loadingBarFront = document.querySelector('.loadingBarFront');

let number = 0;

updateNumber();


function updateNumber() {
    counter.textContent = number + '%';
    loadingBarFront.style.width = number + '%';
    number++;


    if (number <= 100) {
        setTimeout(updateNumber, 50);
    }
}