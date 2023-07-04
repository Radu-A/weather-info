import React, { useEffect, useState } from 'react';
import './App.css'

import CityForm from './components/CityForm'
import WeatherList from './components/WeatherList/WeatherList'

function App() {

  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    
    const getWeather = async () =>{
      try {
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city ? city : 'Madrid'}&appid=${import.meta.env.VITE_API_KEY}`);
        const data = await resp.json();
        setWeather(data)
      } catch (error) {
        console.log(error);
      }
    }
    getWeather();
  }, [city]);

  return (
    <>
      <CityForm setCity={setCity}/>
      <WeatherList weather={weather} />
    </>
  )
}

export default App
