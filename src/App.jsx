import { useState } from 'react'
import './App.css'
import WeatherWidget from './WeatherWidget.jsx';
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <WeatherWidget/>
  );
}

export default App
