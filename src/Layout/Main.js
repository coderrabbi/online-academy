import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Common/Footer/Footer';
import Navbar from '../components/Common/Navbar/Navbar';
const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </>
    );
};

export default Main;
