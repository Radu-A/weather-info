import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard/WeatherCard';
// Mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// UUID
import { v4 as uuidv4 } from 'uuid';

const WeatherList = ({weather}) => {
  return (
    <>
      <section>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Date & hour</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">Min</TableCell>
            <TableCell align="right">Max</TableCell>
            <TableCell align="right">Feels</TableCell>
            <TableCell align="right">Weather</TableCell>
            <TableCell align="right">Humidity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weather && weather.list.map((info) => (
            <WeatherCard info={info} key={uuidv4()} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </section>
    </>

  );
};

export default WeatherList;
