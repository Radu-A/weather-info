import React from "react";

const WeatherCard = ({info}) => {
  return (
    <article className="card-article">
      <h3>{info.dt_txt}</h3>
      <p>Min: {info.main.temp_min}</p>
      <p>Max: {info.main.temp_max}</p>
      <p>Feels like: {info.main.feels_like}</p>
      <p>Humidity: {info.main.humidity}</p>
    </article>
  );
};

export default WeatherCard;
