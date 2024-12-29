const form = document.getElementById('form');
const input = document.getElementById('city');
const weatherDiv = document.querySelector('.weather');
const iconDiv = document.getElementById('icon');
const temperatureDiv = document.getElementById('temperature');
const descriptionDiv = document.getElementById('description');
const detailsDiv = document.getElementById('details');
const apiKey = "b6cbb914ca994e0cbca142434241309";






form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityValue = input.value;
    getWeather(cityValue);
});


async function getWeather(cityValue) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityValue}`);
        const data = await response.json();
        const temperature = Math.round(data.current.temp_c);
        const feelslike = Math.round(data.current.feelslike_c);
        const icon = data.current.condition.icon;
        const details = [
            `Hissedilen: ${feelslike}`,
            `Nem Oranı: ${data.current.humidity}%`,
            `Rüzgar: ${data.current.wind_kph} m/s`,
        ];


        iconDiv.innerHTML = `<img src="${icon}" alt="">`;
        temperatureDiv.textContent = `${temperature}°C`;

        let detailsNew = details.map((detail) => `<div>${detail}</div>`).join('');
        detailsDiv.innerHTML = detailsNew;
        descriptionDiv.textContent = '';
    } catch (error) {
        iconDiv.innerHTML = '';
        detailsDiv.innerHTML = '';
        temperatureDiv.textContent = '';
        descriptionDiv.textContent = "Lütfen geçerli bir konum giriniz!";
    }



}