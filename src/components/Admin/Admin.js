import React from 'react';
import './Admin.css'
import { useState } from 'react';
import AllBooksList from '../AllBooksList/AllBooksList';
import AddNewBooks from '../AddNewBooks/AddNewBooks';
import { FiEdit  } from 'react-icons/fi';
import { IoAdd } from 'react-icons/io5';
import Header from '../Header/Header';
// import fakeData from '../fakeData/fakeData';


const Admin = () => {


    const [useToggle, setUseToggle] = useState(false);
  



    return (
        <div className="container-fluid">
            <Header></Header>
             <div className="row admin-box content-margin">
                <div className="col-4 col-md-3 menu">
                    
                    <ul className="mt-5 list-style">
                        <li   onClick={() => setUseToggle(true)}> <IoAdd className="fs-3" ></IoAdd> <span className="ml-3 fw-bold">  Add Book </span> </li>
                        <li className="mt-3"  onClick={() => setUseToggle(false)}><FiEdit className="fs-4 "></FiEdit>  <span className="ml-3 fw-bold">  Edit Book </span> </li>
                    </ul>
                </div>
                <div className="col-8 col-md-9">
                    {
                        useToggle? <AddNewBooks></AddNewBooks> : <AllBooksList></AllBooksList>
                    }
                    {/* <button className="btn btn-success" onClick={addBooksHandler}>add books</button> */}
                </div>
            </div>
        </div>
    );
};

export default Admin;




