import React from 'react';
import './Header.css'
import logo from '../../images/uoomda-logo.PNG'
import {Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {

    const [userLogged, setUserLogged] = useContext(UserContext)

    return (
            
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top header-margin" style={{marginBottom:''}} >
            <div className="container-fluid">
                <a className="navbar-brand" href="#navbar"> <img className="header-logo w-50" src={logo} alt="" /> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className=" nav-item mt-3 mr-4 ">
                            <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li className=" nav-item mt-3 mr-4">
                            <Link to="/orders" className="nav-link" >Orders</Link>
                        </li>
                        <li className=" nav-item mt-3 mr-4">
                            <Link to="/admin" className="nav-link" >Admin</Link>
                        </li>
                        <li className=" nav-item mt-3 mr-4">
                            <a className="nav-link" href="#blog">Deals</a>
                        </li>
                        <li className=" nav-item mt-3 mr-4">
                        <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className=" nav-item mt-3 mr-4">
                        <a className="nav-link" href="#a"> {userLogged.name} </a>
                        </li>
                        <li className=" nav-item  ml-auto">
                            {
                                userLogged.success ? <button className="btn btn-all"  onClick={() =>setUserLogged({ })}> Logout</button>
                                : <Link to="/login" className="nav-link">
                                <button className="btn btn-all" > Login</button>
                                </Link>
                            }
                 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
   
    );
};

export default Header;