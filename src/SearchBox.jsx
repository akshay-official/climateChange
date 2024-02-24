import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({ handleWeatherChange }) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "33caf2ff039257312266bfb1f4b8f36c";
    let [city, setCity] = useState("");
    // let [err, setErr] = useState(false);

    let getWeather = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            return {
                city: city,
                temp: jsonResponse.main.temp,
                temp_max: jsonResponse.main.temp_max,
                temp_min: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
        } catch {
            return { error: true };
        }
    }
    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async (event) => {
        event.preventDefault();
        let newWeather = await getWeather();
        handleWeatherChange(newWeather);
        setCity("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        fullWidth
                        label="City"
                        id="fullWidth"
                        value={city}
                        onChange={handleChange}
                        style={{ marginRight: '10px' }}
                    />
                    <div style={{ marginLeft: '10px' }}>
                        <Button variant="contained" type='submit'>Search</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};