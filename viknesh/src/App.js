
import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from "react-router-dom";


import Header from './Components/HeaderFooter/header';
import Footer from './Components/HeaderFooter/footer';
import Signup from './Pages/Signup';
import LoginAdmin from './Pages/LoginAdmin';
import Part1Verification from './Pages/Part1Verification';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<><Header /><LoginAdmin /><Footer /> </>}></Route>
        <Route exact path='/Signup' element={<><Header /><Signup /><Footer /> </>}></Route>
        <Route exact path='/Part1Verification' element={<><Header /><Part1Verification /><Footer /> </>}></Route>
    

      </Routes>

    </Router>




  );
}

export default App;