# Weatherly – Weather Dashboard

**Weatherly** is a modern, React-based weather dashboard built with **React** (a JavaScript library for building user interfaces) and **Vite** (a blazing-fast frontend build tool). The app fetches real-time weather data from the **OpenWeatherMap API** to display current conditions (temperature, humidity, wind, etc.), along with forecasts. Users can search for any city to view its weather. The interface is styled with **Tailwind CSS** (a utility-first CSS framework) for rapid, customizable design. State management is handled via the React Context API to share data (like the last searched city and selected units) across components.

## Demo

Deployed the app via Github Pages. Check it out: https://harsha0x3.github.io/Weatherly/

## Features

- Search for a city to retrieve its weather.
- Display **current weather** details: temperature, humidity, wind speed, and sky condition.
- Show **weather icons** representing current conditions.
- **5-day forecast** with daily high/low and conditions.
- **Hourly forecast** breakdown for any selected day.
- Toggle between **Celsius and Fahrenheit** units.
- **Error handling** for invalid city names or network/API issues.
- Store the **last searched city** in localStorage, so it’s remembered on revisit.
- Automatic **refresh** of weather data every 30 seconds.

## Installation

1. Ensure you have **Node.js** (v14+) and npm installed.
2. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Weatherly.git
   cd Weatherly
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and add your OpenWeatherMap API key (see Environment Setup).
5. Run the development server:

   ```bash
   npm run dev
   ```

   The app will be accessible at `http://localhost:5173`.

## Environment Setup

- Create a `.env` file in the project root directory.
- Define the OpenWeatherMap API key:

  ```env
  VITE_API_KEY=your_openweathermap_api_key_here
  ```

  Only environment variables prefixed with `VITE_` are exposed to your code in Vite.

- Save the file and restart the development server if it’s running.

## Usage

- Open the app in your browser (e.g., `http://localhost:5173`).
- Use the search input to enter a city name and press Enter or click Search.
- Current weather details for that city will be displayed, along with icons.
- Scroll or click through the forecast section to see the 5-day outlook.
- Click on any day to expand an hourly forecast for that day.
- Use the unit toggle to switch between Celsius and Fahrenheit.
- If you enter an invalid city or there’s a network error, an error message will appear.
- The last searched city is saved: if you reload or return later, the app will automatically load that city’s weather.
- Weather data is automatically refreshed every 30 seconds to stay up-to-date.

## Technologies Used

- **React** – A JavaScript library for building user interfaces.
- **Vite** – A next-generation frontend build tool, known for instant dev server start and fast HMR.
- **Tailwind CSS** – A highly customizable, utility-first CSS framework for rapid UI development.
- **OpenWeatherMap API** – Provides current, hourly, and daily weather data.
- **React Context API** – For global state management without prop drilling.
- **JavaScript (ES6+), HTML, CSS** – Core web technologies.
- **LocalStorage** – Browser storage for persisting the last searched city.
- **GitHub Pages** (planned) – For deployment as a static site.

## Folder Structure

```
Weatherly/
├── public/
│   └── index.html
├── src/
│   ├── components/        # React components (SearchBar, WeatherDisplay, Forecast, etc.)
│   ├── context/           # React Context (e.g., WeatherContext.jsx)
│   ├── App.jsx
│   └── main.jsx
├── .env                   # Environment variables (API key)
├── vite.config.js
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! To contribute:

1. Fork this repository and create your branch (`git checkout -b feature/my-feature`).
2. Commit your changes and push your branch (`git push origin feature/my-feature`).
3. Open a pull request describing your changes.
4. Ensure code style consistency and include tests if applicable.

Please follow the existing code style and conventions. Report issues or feature requests via GitHub issues.

Developed by **Harsha Vardhan** (GitHub: harsha0x3(https://github.com/harsha0x3)).

_Happy coding!_
