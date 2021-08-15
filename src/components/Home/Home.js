import React, { useState } from 'react';
import './Home.css'
import { useEffect } from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import baner1 from '../../images/uoomdah-banar1.PNG';
import baner2 from '../../images/uoomdah-bok-2.PNG';
const Home = () => {

    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch('https://arcane-brook-16157.herokuapp.com/showAllBooks')
            .then(res => res.json())
            .then(data => {
                setAllBooks(data)
            })
    }, [])
    console.log(allBooks);
    return (
        <main className="container-fluid">
                <Header></Header>
            <div className="row content-margin">
                <div className="col-md-4">
                    <img src={baner1} className="img-fluid" alt="" />
                </div>
                <div className="col-md-4"> 
                    <div className="row  d-flex justify-content-center  ">
                <div className="col-12 d-flex align-items-center search-box">
                    <div className="input-group mb-3 ">
                        <input type="text" class="form-control form-control-lg" placeholder="Search Your Book" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn btn-outline-light" type="button" id="button-addon2" style={{ backgroundColor: '#fd6001' }}>Search</button>
                    </div>
                </div>
            </div> 
             
                </div>
                <div className="col-md-4">
                    <img src={baner2} className="img-fluid" alt="" />
                </div>
            </div>

            <div className="row mt-3">

                {
                    allBooks.map(book => <Main book={book}></Main>)
                }
                {/* <div className="col">
                    {
                        allBooks.map(book => <Main book={book}></Main>)
                    }
                </div> */}
            </div>

        </main>
    );
};

export default Home;