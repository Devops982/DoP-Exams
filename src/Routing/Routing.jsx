import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from '../Components/Footer';
import Header from '../Components/Header/Header';

import Login from '../Components/Login';
import Signup from '../Components/Signup/Signup';
import Profile from '../Pages/Profile';



const Routing = () => {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<>< Login /><Footer/> </>}></Route>
      <Route exact path='/signup' element={<><Header/><Signup/> <Footer/></>}></Route>
      <Route exact path='/profile' element={<><Profile/></>}></Route>
           
    </Routes>
  </Router>
  )
}

export default Routing