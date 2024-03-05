const apiKey = '621d3c1a0703454d96d171055240203';
const apiUrl = 'https://api.weatherapi.com/v1/current.json';




async function fetchWeatherData(city) {
    try {
        const response = await fetch(`${apiUrl}?key=${apiKey}&q=${city}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cityForm');

    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent default form submission

        const cityInput = document.getElementById('cityInput').value; // Get the value of the input field

        const data = await fetchWeatherData(cityInput);
        if (data) {
            console.log('Weather data:', data);
            // Update HTML with weather data
            document.querySelector(".city").innerHTML = data.location.name;
            document.querySelector(".temp").innerHTML = data.current.temp_c + "°C";
            document.querySelector(".humidity").innerHTML = data.current.humidity + "  "+"H u m i d i t y";
            document.querySelector(".wind").innerHTML = data.current.wind_kph + "kph";
            document.querySelector(".h22").innerHTML = data.current.condition.text;
            
            const bgv = document.querySelector(".bgvideo");
            if (data.current.condition.text == "Sunny") {
                bgv.src = "res/sunny.mp4";
            }
            else if (data.current.condition.text == "Mist"){
                bgv.src = "res/clouds.mp4";
            }
            else if (data.current.condition.text == "Partly cloudy"){
                bgv.src = "res/clouds.mp4";
            }
            else if (data.current.condition.text == "Light drizzle"){
                bgv.src = "res/rainy.mp4";
            }
            else if (data.current.condition.text == "wWindy"){
                bgv.src = "res/windy.mp4";
            }
            else if (data.current.condition.text == "Mist"){
                bgv.src = "res/clouds.mp4";
            }
            else if (data.current.condition.text == "Mist"){
                bgv.src = "res/clouds.mp4";
            }
            else if (data.current.condition.text == "Mist"){
                bgv.src = "res/clouds.mp4";
            }
            else if (data.current.condition.text == "Mist"){
                bgv.src = "res/clouds.mp4";
            }
            else if (data.current.condition.text == "Mist"){
                bgv.src = "res/clouds.mp4";
            }
            else if (data.current.condition.text == "Mist"){
                bgv.src = "res/clouds.mp4";
            }
            else if (data.current.condition.text == "Mist"){
                bgv.src = "res/clouds.mp4";
            }
        } else {
            console.log('No weather data available.');
        }
    });
});


