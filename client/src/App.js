//import logo from './logo.svg';
import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import './App.css';
import User from './components/showUser/showUser.js';
import Create from './components/createUser/createUser.js';
import FindStock from './components/stockScreen/stockScreen.js';
//import { mergeClasses } from '@material-ui/styles';
import useStyles from './styles';


function App() {
  const classes = useStyles();
  return (
    <div className="App">
     <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h3' align='center'> User Create and Show</Typography>
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch'>
            <Grid item xs={12} sm={7}>
              <AppBar className={classes.appBar} position='static' color='inherit'>
                <User />
              </AppBar>
            </Grid>
            <Grid item xs={12} sm={4}>
              <AppBar className={classes.appBar} position='static' color='inherit'>
                <Create />
              </AppBar>
            </Grid>
          </Grid>
        </Container>
      </Grow>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <FindStock />
      </AppBar>
     </Container>
    </div>
  );
}

export default App;
