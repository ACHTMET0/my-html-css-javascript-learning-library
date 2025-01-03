const righticon = document.querySelector('.RIGHT');
const lefticon = document.querySelector('.LEFT');
const imageContainer = document.querySelector('.imageContainer');
const imgs = document.querySelectorAll('img');

let currentImg = 1;
let timeout;

righticon.addEventListener('click', () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
});

lefticon.addEventListener('click', () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});


function updateImg() {
    if (currentImg > imgs.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgs.length;
    }
    imageContainer.style.transform = `translateX(-${(currentImg - 1) * 700}px)`;
    timeout = setTimeout(() => { currentImg++; updateImg(); }, 4000);
}

updateImg();