import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/Home'));
const AboutUs = React.lazy(() => import('../pages/AboutUs'));
const ContactUs = React.lazy(() => import('../pages/ContactUs'));
const Login = React.lazy(() => import('../pages/Login'));
const Registration = React.lazy(() => import('../pages/Registration'));

const NavigationRoutes = () => {

    return (
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/about' element={<AboutUs />}></Route>
            <Route exact path='/contact' element={<ContactUs />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/register' element={<Registration />}></Route>

            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    );
}

export default NavigationRoutes;
