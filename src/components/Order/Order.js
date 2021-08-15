import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import {UserContext} from '../../App'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Header from '../Header/Header';





const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#fd6001',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    }
  });

const Order = () => {

    const classes = useStyles();
    const [userLogged, setUserLogged] = useContext(UserContext);
    const [userList, setUserList] = useState([]);
    useEffect(() =>{
        fetch(`https://arcane-brook-16157.herokuapp.com/showUsersList?email=${userLogged.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setUserList(data)
        })
    },[])
    return (
        <div className="container-fluid">
          <Header></Header>
           <div className=" content-margin">
           <h1> Orders List </h1>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">User-Id</StyledTableCell>
            <StyledTableCell align="right">Book</StyledTableCell>
            <StyledTableCell align="right">Author</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((user) => (
            <StyledTableRow key={user.email}>
              <StyledTableCell component="th" scope="row">
                {user.email}
              </StyledTableCell>
              <StyledTableCell align="right">{user.name}</StyledTableCell>
              <StyledTableCell align="right">{user.key}</StyledTableCell>
              <StyledTableCell align="right">{user.bookName}</StyledTableCell>
              <StyledTableCell align="right">{user.author}</StyledTableCell>
              <StyledTableCell align="right">{user.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           </div>
        </div>
    );
};

export default Order;