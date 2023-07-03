import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard/WeatherCard';

const WeatherList = ({weather}) => {
  return (
    <>
        <section className="list-section">
          {weather && weather.list.map((info, i)=>(
              <WeatherCard info={info} key={i} />
          ))}
        </section>
    </>

  );
};

export default WeatherList;
