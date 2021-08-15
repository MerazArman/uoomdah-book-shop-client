import React , { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import './Login.css';
import logo from '../../images/uoomda-logo.PNG'
import { useHistory, useLocation} from 'react-router-dom';
import { firebaseConfigInitializeApp, googleHandler, googleSignOutHandler } from './LoginSettings';
import Header from '../Header/Header';

const Login = () => {

    const [userLogged, setUserLogged, users, setUsers] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };




//============================================= firebase configuration start now===============================   
firebaseConfigInitializeApp()

// ============================================== Google Sign in Handler Option start now ======================
    const googleBtn = () => {
        console.log('click');
        googleHandler()
        .then(res => {
            setUsers(res)
            setUserLogged(res)
            history.replace(from);
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

//========================= google sign out method =========================== =================================
 const googleSignOut = () => {
     googleSignOutHandler()
     .then(res => {
        setUsers(res)
        setUserLogged(res)
     })
     .catch(err =>{
         console.log(err);
     })
 }    


    return (
        <div className="container-fluid">
            <Header></Header>
        {/* <button onClick={googleSignOut}></button> */}
        <div className="row content-margin">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                    <div className="card-body">
                        <div className='text-center'>
                            <img src={logo} className="w-50 " alt="" />
                        </div>
                        <h5 className="card-title text-center">Sign In</h5>
                        <section className="form-signin">
                            {/* <div className="form-label-group">
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                                <label for="inputEmail">Email address</label>
                            </div>

                            <div className="form-label-group">
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                <label for="inputPassword">Password</label>
                            </div>

                            <div className="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" for="customCheck1">Remember password</label>
                            </div>
                            <button className="btn btn-lg btn-success btn-block text-uppercase" type="submit">Sign in</button>
                            

                            <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                <div className="border-bottom w-100 ml-5"></div>
                                <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                                <div className="border-bottom w-100 mr-5"></div>
                            </div>
                            <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button> */}
                            <button className="btn btn-lg btn-google btn-block text-uppercase"  onClick={googleBtn}><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;