import React, { useContext, useEffect, useState } from 'react';
import './Checkout.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';




const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

// function ccyFormat(num) {
//   return `${num.toFixed(2)}`;
// }

// function priceRow(qty, unit) {
//   return qty * unit;
// }

// function createRow(desc, qty, unit) {
//   const price = priceRow(qty, unit);
//   return { desc, qty, unit, price };
// }

// function subtotal(items) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

// const rows = [
//   createRow('Paperclips (Box)', 100, 1.15),
//   createRow('Paper (Case)', 10, 45.99),
//   createRow('Waste Basket', 2, 17.99),
// ];



// const invoiceSubtotal = subtotal();
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;


const Checkout = () => {
  
    const history = useHistory()
    const [userLogged, setUserLogged] = useContext(UserContext)
    const [addToCart, setAddToCart] = useState({});
    const {key} = useParams();
    useEffect(() =>{
      fetch(`https://arcane-brook-16157.herokuapp.com/addToCart/${key}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setAddToCart(data)
      })
    },[])

    const checkoutProsesHandle = () => {
      const booksUserCollection = {...addToCart, ...userLogged}
      fetch(`https://arcane-brook-16157.herokuapp.com/addNewUsers`,{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(booksUserCollection)
      })
      .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        history.push('/orders')
    }
    // console.log(fakeData);

//     const invoiceSubtotal = subtotal(product.price);
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;
    const classes = useStyles();
    return (
        <div className="container">
            <h1>checkout Process </h1>

            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          {/* <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow> */}
          <TableRow>
            <TableCell  align="left">Description</TableCell>
            <TableCell align="left">Author</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow key={addToCart}>
              <TableCell  align="left" >{addToCart.bookName}</TableCell>
              <TableCell align="left">{addToCart.author}</TableCell>
              <TableCell align="right">{addToCart.stock}</TableCell>
              <TableCell align="right">{addToCart.price}</TableCell>
            </TableRow>
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2} align="center">Subtotal</TableCell>
            <TableCell align="right">{addToCart.price * addToCart.stock}</TableCell>
          </TableRow>
          {/* <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(addToCart.price*TAX_RATE)}</TableCell>
          </TableRow> */}
          <TableRow>
            <TableCell colSpan={2} align="center">Total</TableCell>
            <TableCell align="right">{addToCart.price*addToCart.stock}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
            
    <button className="btn btn-primary float-end" onClick={checkoutProsesHandle} style={{marginTop:"1%"}} >Checkout</button>
        </div>
    );
};

export default Checkout;






          {/* {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))} */}