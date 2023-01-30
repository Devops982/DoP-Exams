
import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from "react-router-dom";


import Header from './Components/HeaderFooter/header';
import Footer from './Components/HeaderFooter/footer';
import Signup from './Pages/Signup';
import LoginAdmin from './Pages/LoginAdmin';
import ProfileVerification from './Pages/ProfileVerification';
import TransferVerification from './Pages/TransferVerification';
import PromotionVerification from './Pages/PromotionVerification';
import UserManagement from './Pages/UserManagement';
import AdminProfile from './Pages/AdminProfile';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<><Header /><LoginAdmin /><Footer /> </>}></Route>
        <Route exact path='/Signup' element={<><Header /><Signup /><Footer /> </>}></Route>
        <Route exact path='/ProfileVerification' element={<><Header /><ProfileVerification /><Footer /> </>}></Route>
        <Route exact path='/TransferVerification' element={<><Header /><TransferVerification /><Footer /> </>}></Route>
        <Route exact path='/PromotionVerification' element={<><Header /><PromotionVerification /><Footer /> </>}></Route>
        <Route exact path='/UserManagement' element={<><Header /><UserManagement /><Footer /> </>}></Route>
        <Route exact path='/AdminProfile' element={<><Header /><AdminProfile /><Footer /> </>}></Route>
      </Routes>

    </Router>




  );
}

export default App;