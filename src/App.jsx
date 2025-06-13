import React, { useContext } from "react";
import { WeatherContext } from "./context/WeatherContext";
import SearchBar from "./components/SearchBar";
import UnitToggle from "./components/UnitToggle";
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";
import HourlyForecast from "./components/HourlyForecast";
import ErrorDisplay from "./components/ErrorDisplay";

const App = () => {
  const { showHourly } = useContext(WeatherContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-slate-800 p-6 font-sans relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-2">
            Weather<span className="text-blue-600">ly.</span>
          </h1>
          <p className="text-white font-light">
            <span className="text-blue-600 font-medium">Curious?</span> Just
            check the forecast.
          </p>
          <div className="w-16 h-0.5 bg-white/50 mx-auto"></div>
        </div>

        <SearchBar />
        <UnitToggle />
        <WeatherInfo />
        {showHourly && <HourlyForecast />}

        <Forecast />

        <ErrorDisplay />
      </div>
    </div>
  );
};

export default App;
