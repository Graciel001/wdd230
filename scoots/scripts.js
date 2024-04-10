// OpenWeatherMap API key
const apiKey = 'ed5b51f9b7ca46d07d0eac1110a1776c';

// Function to fetch weather data
async function getWeather() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cozumel&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        displayWeather(data); // Call function to display weather
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const condition = data.weather[0].description;
    const windSpeed = data.wind.speed;
    const weatherElement = document.getElementById('weather');
    weatherElement.innerHTML = `
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${condition}</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `;
}

getWeather();
