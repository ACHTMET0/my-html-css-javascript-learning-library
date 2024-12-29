const remainingDiv = document.getElementById('remainingDiv');
const remainingForm = document.getElementById('remainingForm');
const dateInput = document.getElementById('datePicker');
const timeDiv = document.getElementById('timeDiv');
const timeSpans = document.querySelectorAll('span');
const resetButton = document.getElementById('resetButton');
const completeDiv = document.getElementById('complete');
const completeButton = document.getElementById('completeButton');


let choosenDate = '';
let currentDateValue = new Date().getTime();
let currentTimeInterval;
let localStorageTime;
// console.log(new Date().toISOString().split('T')[0]);
const second = 1000; //milisaniye türünden
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const today = new Date().toISOString().split('T')[0];

dateInput.setAttribute('min', today);

function updateDom() {
    currentTimeInterval = setInterval(() => {
        const now = new Date().getTime();
        const betweenDate = currentDateValue - now;
        const days = Math.floor(betweenDate / day);
        const hours = Math.floor((betweenDate % day) / hour);
        const minutes = Math.floor((betweenDate % hour) / minute);
        const seconds = Math.floor((betweenDate % minute) / second);
        remainingDiv.hidden = true;

        if (betweenDate < 0) {
            timeDiv.hidden = true;
            completeDiv.hidden = false;
            clearInterval(currentTimeInterval);
        } else {
            timeDiv.hidden = false;
            timeSpans[0].textContent = `${days}`;
            timeSpans[1].textContent = `${hours}`;
            timeSpans[2].textContent = `${minutes}`;
            timeSpans[3].textContent = `${seconds}`;
        }

    }, 1000);

}

function calculateTime(e) {
    e.preventDefault();
    choosenDate = remainingForm.date.value;
    // console.log(choosenDate);
    // console.log(new Date(choosenDate).getTime());
    localStorageTime = {
        date: choosenDate,
    }
    localStorage.setItem('time', JSON.stringify(localStorageTime));
    if (choosenDate == '') {
        alert('Lütfen tarih seçiniz!');
    } else {
        currentDateValue = new Date(choosenDate).getTime();
        updateDom();
    }
}

function reset() {
    clearInterval(currentTimeInterval);
    remainingDiv.hidden = false;
    timeDiv.hidden = true;
    completeDiv.hidden = true;
}

completeButton.addEventListener('click', reset);
remainingForm.addEventListener('submit', calculateTime);
resetButton.addEventListener('click', reset);


function refreshTime() {
    if (localStorage.getItem('time')) {
        localStorageTime = JSON.parse(localStorage.getItem('time'));
        choosenDate = localStorageTime.data;
        currentDateValue = new Date(choosenDate).getTime();
        updateDom();
    }
}

refreshTime();