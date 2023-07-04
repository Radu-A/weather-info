import React, { useState } from "react";
import './WeatherCard.css'
// Images
import ClearSun from '../../../assets/img/clear-sun.png';
import CloudySun from '../../../assets/img/cloudy-sun.png';
import CloudySoft from '../../../assets/img/cloudy-soft-rain.png';
import CloudyHard from '../../../assets/img/cloudy-hard-rain.png';
// Mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const WeatherCard = ({info}) => {
  const [image, setImage] = useState()

  const WeatherImage = ()=> {
    if (info.clouds.all === 0) {
      return (
      <img src={ClearSun} alt="" />
      )
    } else if (info.clouds.all > 0 && info.clouds.all < 25) {
      return (
      <img src={CloudySun} alt="" />
      )
    } else if (info.clouds.all >= 25 && info.clouds.all < 75) {
      return (
        <img src={CloudySoft} alt="" />
        )
    } else {
      return (
        <img src={CloudyHard} alt="" />
        )
    }
  }

  return (
    <TableRow
      key={info.dt_txt}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {info.dt_txt}
      </TableCell>
      <TableCell className="table-cell-img" component="th" scope="row">
        <WeatherImage />
      </TableCell>
      <TableCell align="right">{info.main.temp_min}</TableCell>
      <TableCell align="right">{info.main.temp_max}</TableCell>
      <TableCell align="right">{info.main.feels_like}</TableCell>
      <TableCell align="right">{info.weather[0].description}</TableCell>
      <TableCell align="right">{info.main.humidity}</TableCell>
    </TableRow>
  );
};

export default WeatherCard;
