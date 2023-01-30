import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import Home from 'views/pages/Home';
import SignInSide from 'components/Login';
import Signup from 'components/Signup';
import LoginAdmin from 'components/LoginAdmin'


// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    // element: <MinimalLayout />,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/Login',
            element: <SignInSide />
        },
        {
            path: '/LoginAdmin',
            element: <LoginAdmin />
        },
        {
            path: '/Signup',
            element: <Signup/>
        },

       
    ]
            
};

export default AuthenticationRoutes;
