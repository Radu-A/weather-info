import React, { useState } from "react";
import ClearSun from '../../../assets/img/clear-sun.png';
import CloudySun from '../../../assets/img/cloudy-sun.png';
import CloudySoft from '../../../assets/img/cloudy-soft-rain.png';
import CloudyHard from '../../../assets/img/cloudy-hard-rain.png';

const WeatherCard = ({info}) => {
  const [image, setImage] = useState()

  return (
    <article className="card-article">
      <div>
        <h3>{info.dt_txt}</h3>
        <p>Min: {info.main.temp_min}</p>
        <p>Max: {info.main.temp_max}</p>
        <p>Feels like: {info.main.feels_like}</p>
        <p>Weather: {info.weather[0].description}</p>
        <p>Weather: {info.weather[0].main}</p>
        <p>Humidity: {info.main.humidity}</p>
      </div>
      <div>
      </div>
    </article>
  );
};

export default WeatherCard;
