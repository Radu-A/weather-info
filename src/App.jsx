import React, { useEffect, useState } from 'react';
import './App.css'

import CityForm from './components/CityForm'
import WeatherList from './components/WeatherList/WeatherList'

import forecastIcon from './assets/img/weather-forecast.png'

function App() {

  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  let lat = 0;
  let lon = 0;
  function success(pos) {
    const crd = pos.coords;
    
    lat = crd.latitude;
    lon = crd.longitude;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error);

  useEffect(() => {
    
    const getWeather = async () =>{
      try {
        if (city) {
          const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city ? city : 'Madrid'}&appid=${import.meta.env.VITE_API_KEY}`);
          const data = await resp.json();
          setWeather(data)
        } else {
          const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`);
          const data = await resp.json();
          setWeather(data)
        }

      } catch (error) {
        console.log(error);
      }
    }
    getWeather();
  }, [city]);

  return (
    <>
      <section className='title-section'>
        <img src={forecastIcon} alt="" />
        <h1>Forecast 5d / 3h</h1>
      </section>
      <CityForm setCity={setCity}/>
      <WeatherList weather={weather} />
      <a href="https://www.flaticon.com/free-icons/weather-forecast" title="weather forecast icons">Weather forecast icons created by Rosa Suave - Flaticon</a>
    </>
  )
}

export default App
