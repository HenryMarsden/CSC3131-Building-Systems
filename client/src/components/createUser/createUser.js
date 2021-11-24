import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Create() {

  const [user, setUser] = useState({
    regNo: 0,
    userName: '',
    grade: '',
    section: ''
  });

  const createUser = () => {
    axios.post('http://localhost:5000/users', user).then( () => {
      window.location.reload(false);
    })
  }

  return (
    <>
    <h2>Create User</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Registration No." variant="outlined" value={user.regNo} onChange={(event) => {
        setUser({ ...user, regNo: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Name" variant="outlined" value={user.userName} onChange={(event) => {
        setUser({ ...user, userName: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Grade" variant="outlined" value={user.grade} onChange={(event) => {
        setUser({ ...user, grade: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Section" variant="outlined" value={user.section} onChange={(event) => {
        setUser({ ...user, section: event.target.value})
      }}/>

      <Button variant="contained" onClick={createUser}>
        Create
      </Button>
    </Box>
    </>
  );
}
