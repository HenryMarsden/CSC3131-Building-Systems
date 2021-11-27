import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//tabel components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
//axios
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Box } from '@mui/system';
//typography
import useStyles from '../../styles';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

export default function Find(){
  const classes = useStyles();
  var stockData = '';

  const searchStock = () => {
    const finnhub = require('finnhub');

    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "c6gf6qqad3iegn0iq5o0"
    const finnhubClient = new finnhub.DefaultApi()

    finnhubClient.symbolSearch('GOOG', (error, data, response) => {
      console.log(data)
      stockData = data;
    });
  }

  return(
    <Container>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={searchStock}>Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
      <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} variant='body1' align='center'> {stockData} </Typography>
        </AppBar>
      </Stack>
    </Container>
  );
}
