const watchButton = document.querySelector('.watchButton');
const closeIcon = document.querySelector('.closeIcon');
const videoContainer = document.querySelector('.videoContainer');
const video = document.querySelector('video');


watchButton.addEventListener('click', () => {
    videoContainer.classList.remove('active');
});

closeIcon.addEventListener('click', () => {
    videoContainer.classList.add('active');
    video.pause();
    video.currentTime = 0;
});