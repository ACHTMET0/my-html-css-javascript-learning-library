const jokeButton = document.getElementById('jokeButton');
const joke = document.getElementById('joke');

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
const options = {
    method: 'GET',
    headers: { 'X-Api-Key': '71Kqrul95Lpule9dxMZnYA==x4NebeIDgvRom5Kw' },
};


async function getJoke() {
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    joke.textContent = data[0].joke;
}


jokeButton.addEventListener('click', getJoke);