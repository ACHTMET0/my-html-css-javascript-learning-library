const music = document.querySelector('audio');
const image = document.querySelector('img');
const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const title = document.getElementById('title');
const creator = document.getElementById('creator');
const progressDiv = document.getElementById('progressDiv');
const progress = document.getElementById('progress');
const currentTimeSpan = document.getElementById('currentTime');
const totalTime = document.getElementById('totalTime');
let volume = document.getElementById('volume-slider');


const songs = [{
    name: 'bootstrap',
    title: "Bootstrap 5 Eğitimi",
    creator: 'Ahmet Ceylan',
}, {
    name: 'c',
    title: "C Programlama Eğitimi",
    creator: 'Ahmet Ceylan',
}];


let songIndex = 0;
let isPlaying = false;

function loadSong(song) {
    title.textContent = song.title;
    creator.textContent = song.creator;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.png`;
}

loadSong(songs[songIndex]);

function playMusic() {
    isPlaying = true;
    playButton.classList.replace('fa-play', 'fa-pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    playButton.classList.replace('fa-pause', 'fa-play');
    music.pause();
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playMusic();
}

function nextSong() {
    songIndex++;
    if (songIndex >= songs.length) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playMusic();
}

function updateProgressBar(e) {
    if (isPlaying) {
        const { currentTime, duration } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;

        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);

        if (durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`;
        }

        if (durationSeconds) {
            totalTime.textContent = `${durationMinutes}:${durationSeconds}`;
        }


        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);

        if (currentSeconds < 10) {
            currentSeconds = `0${currentSeconds}`;
        }

        if (currentSeconds) {
            currentTimeSpan.textContent = `${currentMinutes}:${currentSeconds}`;
        }

    }
}

function setProgressBar(e) {
    const width = e.srcElement.clientWidth;
    const clickX = e.offsetX;
    const { duration } = music;
    const newTime = (clickX / width) * duration;
    music.currentTime = newTime;
}

playButton.addEventListener('click', () => isPlaying ? pauseMusic() : playMusic());
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
music.addEventListener('ended', nextSong);
progressDiv.addEventListener('click', setProgressBar);
volume.addEventListener("change", function (e) {
    music.volume = e.currentTarget.value / 100;
})