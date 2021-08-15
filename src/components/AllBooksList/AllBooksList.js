import React, { useEffect } from 'react';
import { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { AiFillDelete , AiFillEdit} from 'react-icons/ai';




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
    },
    rooto: {
        backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      },
  });

const AllBooksList = () => {

    const classes = useStyles();
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() =>{
        fetch('https://arcane-brook-16157.herokuapp.com/showAllBooks')
        .then(res => res.json())
        .then(data => {
            setAllBooks(data)
        })
    },[])

    const deleteBookHandler = (bookId) =>{
          console.log('key', bookId);
          fetch(`https://arcane-brook-16157.herokuapp.com/deleteBook/${bookId}`, {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          })
    }

    return (
        <div>
            <h4 style={{color:'#1b1642'}}>Book List </h4>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell align="center">Books</StyledTableCell>
            <StyledTableCell align="center">Author</StyledTableCell>
            <StyledTableCell align="center">Stock</StyledTableCell>
            <StyledTableCell align="center">id</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center" colSpan={2}>Action</StyledTableCell>
            {/* <StyledTableCell align="left">Delete</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {allBooks.map((book) => (
            <StyledTableRow key={book.bookName}>
              <StyledTableCell component="th" scope="row" align="center">
                {book.bookName}
              </StyledTableCell>
              <StyledTableCell align="center">{book.author}</StyledTableCell>
              <StyledTableCell align="center">{book.stock}</StyledTableCell>
              <StyledTableCell align="center">{book.key}</StyledTableCell>
              <StyledTableCell align="center">{book.price}</StyledTableCell>
              <StyledTableCell align="right" > <AiFillEdit style={{color:'green'}}></AiFillEdit> </StyledTableCell>
              <StyledTableCell align="left" onClick={() => deleteBookHandler(book.key)}> <AiFillDelete style={{color:'red'}}></AiFillDelete> </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default AllBooksList;