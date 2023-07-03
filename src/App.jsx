import React, { useEffect, useState } from 'react';
import './App.css'

import CityForm from './components/CityForm'
import WeatherList from './components/WeatherList/WeatherList'

function App() {

  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    const getWeather = async () =>{
      const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city ? city : 'Madrid'}&appid=d96ac8728492b4bae1caf1e47f7501d8`);
      const data = await resp.json();
      setWeather(data)
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
