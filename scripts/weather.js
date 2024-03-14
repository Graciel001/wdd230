document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'ed5b51f9b7ca46d07d0eac1110a1776c';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Tijuana,mx&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;

            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('description').textContent = `Description: ${description}`;
            document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
