import React, { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const { setCity, fetchWeather } = useContext(WeatherContext);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setCity(input);
    fetchWeather(input);
    setInput("");
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSearch} className="relative max-w-md mx-auto">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter city"
          className="w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
        />
        <button
          type="submit"
          onClick={handleSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/40 rounded-full p-2 transition-all duration-300"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
