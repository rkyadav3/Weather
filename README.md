# Weather Forecasting Website

This project is a simple and interactive weather forecasting website that allows users to get real-time weather data for any city in the world. It leverages the **WeatherAPI** to fetch live weather details such as temperature, humidity, wind speed, and general weather conditions. The webpage dynamically updates based on the input provided by the user, and it even changes the background video based on the current weather condition (e.g., sunny, rainy, cloudy).

## Features
- **Real-time Weather Data:** Get the current weather details like temperature, humidity, and wind speed.
- **Dynamic Backgrounds:** The background video changes based on the weather condition (e.g., sunny, cloudy, rainy).
- **Search Functionality:** Users can search for weather in any city by entering its name in the search bar.
- **Responsive Design:** Optimized for various screen sizes, making it accessible from both desktop and mobile devices.

## Technologies Used
- **HTML5:** For structuring the website.
- **CSS3:** For styling the webpage and making it responsive.
- **JavaScript (ES6):** For adding interactivity, fetching data from the WeatherAPI, and updating the webpage dynamically.
- **WeatherAPI:** Provides live weather data using its REST API.

## How It Works
1. **User Input:** The user inputs a city name into the search bar.
2. **API Call:** The website makes an API call to WeatherAPI to fetch current weather data for the specified city.
3. **Display Weather Data:** The page displays the current weather, including:
   - City name
   - Temperature (in Celsius)
   - Humidity level
   - Wind speed
   - General weather condition (e.g., sunny, cloudy, mist, etc.)
4. **Dynamic Background:** Based on the weather condition, the background video of the page changes to match the weather. For example:
   - Sunny → Sunny video
   - Rainy → Rainy video
   - Cloudy → Cloudy video

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-forecasting-site.git
2. Open index.html in your browser or run the Flask server if applicable.

## Future Enhancements
- **Extended Forecast:** Add a 7-day forecast feature.
- **Geolocation:** Automatically detect the user's location for weather updates without requiring city input.
- **More Conditions:** Support more weather conditions for background videos (e.g., snow, thunderstorms).
- **Backend Integration:** Add a Flask or Node.js backend for managing API keys and serving content securely.

## License
This project is licensed under the MIT License.


