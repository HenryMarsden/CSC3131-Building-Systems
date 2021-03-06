import React, { useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ShowUser() {

const [usersList, setUserList] = useState([])

const deleteUser = (id) => {
  axios.delete(`http://localhost:5000/users/${id}`).then( () => {
    window.location.reload(false);
  })
}

useEffect(() => {
  axios.get('http://localhost:5000/users').then( (allUsers) => {
    setUserList(allUsers.data);
  } )
}, [])

  return (
    <>
    <h2>All Stocks</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ticker</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Earnings</TableCell>
            <TableCell align="right">P/E</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersList.map((user, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.userName}
              </TableCell>
              <TableCell align="right">{user.regNo}</TableCell>
              <TableCell align="right">{user.grade}</TableCell>
              <TableCell align="right">{user.section}</TableCell>
              <TableCell align="right">
              <IconButton aria-label="delete" size="small" onClick={() => deleteUser(user._id)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
