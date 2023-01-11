
import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from "react-router-dom";


import Header from './Components/HeaderFooter/header';
import Footer from './Components/HeaderFooter/footer';
import Signup from './Pages/Signup';
import LoginAdmin from './Pages/LoginAdmin';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<><Header /><LoginAdmin /><Footer /> </>}></Route>
        <Route exact path='/Signup' element={<><Header /><Signup /><Footer /> </>}></Route>
      {/* <Route exact path='/part1verification' element={<><Header />< Part1verification /> <Footer /></>}></Route> */}

        {/* <Route exact path='/signup' element={<><Header />< Signup /> <Footer /></>}></Route>
        <Route exact path='/profile' element={<><Header />< Profile /> <Footer /></>}></Route> */}

      </Routes>

    </Router>




  );
}

export default App;