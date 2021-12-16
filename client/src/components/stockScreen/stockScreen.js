import React, { useState } from 'react';
//import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
//import Stack from '@mui/material/Stack';
//tabel components
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
//axios
//import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Box } from '@mui/system';
//typography
import useStyles from '../../styles';
//import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

export default function Find(){
  const classes = useStyles();


  const [stock, setStock] = useState({
    ticker: ''
  });

  //var price = 0;

  const getTime = (ticker) => {
    axios.get(`http://localhost:5000/stocks/${ticker}`).then( (stockData) => {
      //price = stockData.price;
      console.log('hello');
      console.log(stockData);
    })
  }

  return(
    <>
    <h2>Find Stock</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Ticker" variant="outlined" value={stock.ticker} onChange={(event) => {
        setStock({ ...stock, ticker: event.target.value})
      }} 
      />

      <Button variant="contained" onClick={getTime(stock.ticker)}>
        Search
      </Button>
    </Box>
    </>

    
  );
}
