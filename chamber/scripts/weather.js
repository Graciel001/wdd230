document.addEventListener('DOMContentLoaded', function() {
    const apikey = 'ed5b51f9b7ca46d07d0eac1110a1776c';
    const location = 'Sunshine Valley, British Columbia';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperature').textContent = data.main.temp + '°C';
            document.getElementById('description').textContent = data.weather[0].description;
        });

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apikey}&units=metric`;

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            const forecastList = document.getElementById('forecast');
            for (let i = 0; i < 3; i++) {
                const forecastItem = document.createElement('li');
                forecastItem.textContent = `${new Date(data.list[i].dt * 1000).toLocaleDateString()}: ${data.list[i].main.temp_min}°C - ${data.list[i].main.temp_max}°C, ${data.list[i].weather[0].description}`;
                forecastList.appendChild(forecastItem);
            }
        });
});
