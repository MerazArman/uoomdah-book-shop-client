import React, { useContext } from 'react';
import { useState } from 'react';
import './AddNewBooks.css';
import {UserContext} from '../../App'






const AddNewBooks = () => {

    const [userLogged, setUserLogged] = useContext(UserContext);
    const [newBooks, setNewBooks] = useState({
        bookName:'',
        author:'',
        type:'',
        stock:'',
        key:'',
        price: Number,
        date: '',
        img: ''
    });

    const addBookInputHandler = (e) =>{
            console.log(e.target.name, e.target.value);
            let newBooksInfo = {...newBooks};
            newBooksInfo[e.target.name] = e.target.value;
            setNewBooks(newBooksInfo)
    }

    const newBooksSubmitHandler = (e) =>{
        const newBooksAddInfo = {...newBooks, userLogged};
        fetch(`https://arcane-brook-16157.herokuapp.com/addNewBooks`,{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(newBooksAddInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        e.preventDefault()
    }

    return (
        <div className="container">
            <h1>New Books Add</h1>

            <form onSubmit={newBooksSubmitHandler} action="" className="edit-box">
                <div className="row">
                    <div className="col-md-4  ">
                        <label for="">Book Name</label> <br />
                         <input onBlur={addBookInputHandler} type="text" className="form-control"  name="bookName"></input>
                    </div>
                    <div className="col-md-4">
                        <label for="bName">Author Name</label> <br />
                        <input onBlur={addBookInputHandler} type="text" name="author"></input>
                    </div>
                    <div className="col-md-3">
                        <label for="stock">Type</label> <br />
                        <input onBlur={addBookInputHandler} type="text" name="type" id="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label for="stock">Stock</label> <br />
                        <input onBlur={addBookInputHandler} type="text" name="stock" id="" />
                    </div>
                    <div className="col-md-4">
                        <label for="stock">id</label> <br />
                        <input onBlur={addBookInputHandler} type="text" name="key" id="" />
                    </div>
                    <div className="col-md-4">
                        <label for="stock">Price</label> <br />
                        <input onBlur={addBookInputHandler} type="text" name="price" id="" />
                    </div>
                </div>

                <div className="row  d-flex align-items-center">
                    <div className="col-md-4">
                        <label for="date">Date</label> <br />
                        <input onBlur={addBookInputHandler} type="datetime-local" name="date" id="" />
                    </div>
                    <div className="col-md-4">
                        <label for="file">Upload Cover Photo</label> <br />
                        <input onBlur={addBookInputHandler} type="file" name="img" id="" />
                    </div>
                    <div className="col-md-4">
                        <input className=" btn btn-all mt-4" type="submit" value="Save Your Product" />
                    </div>
                </div>
            </form>


        </div>
    );
};

export default AddNewBooks;