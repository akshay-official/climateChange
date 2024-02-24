import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import WeatherInfo from "./WeatherInfo";
import WeatherWebsiteName from "./WeatherWebsiteName";

export default function WeatherWidget() {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "33caf2ff039257312266bfb1f4b8f36c";
    const city = "lucknow";
    let [weather, setWeather] = useState({
        city : "lucknow",
        temp : 21,
        temp_max : 21,
        temp_min : 21,
        humidity : 21,
        feels_like : 21,
        weather : "haze",
    });
    useEffect(() => {
        async function getFirstWeather() {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            setWeather({
                city: city,
                temp: jsonResponse.main.temp,
                temp_max: jsonResponse.main.temp_max,
                temp_min: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            });
        }
        getFirstWeather();
    }, []);
    let handleWeatherChange = (newWeather) => {
        setWeather(newWeather);
    }
    return (
    <>
        <WeatherWebsiteName/>
        <SearchBox handleWeatherChange = {handleWeatherChange}/>
        <br/>
        <WeatherInfo result={weather}/>
    </>
    );
};