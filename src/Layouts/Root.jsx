import React from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Navbar from '../Components/Navbar';

const Root = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <ToastContainer />
        </>
    );
};

export default Root;