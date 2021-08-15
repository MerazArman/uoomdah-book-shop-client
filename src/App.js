import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import Checkout from './components/Checkout/Checkout';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';






export const UserContext = createContext()

function App() {

  const [userLogged, setUserLogged] = useState({});
  const [users, setUsers] = useState({
    isSignIn:false,
    name:'',
    email:'',
    password:'',
    confirmPassword: '',
    photo:'',
    error:'',
    success:false
});

  return (

   <UserContext.Provider value={[userLogged, setUserLogged, users, setUsers]}>
      <Router>
      <Switch>
        <Route exact path="/">
              <Home></Home>
        </Route>
        <Route  path="/home">
              <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/checkout/:key">
          <Checkout></Checkout>
        </PrivateRoute>
        <PrivateRoute  path="/orders">
          <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>
        <Route  path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
   </UserContext.Provider>
  );
}

export default App;
