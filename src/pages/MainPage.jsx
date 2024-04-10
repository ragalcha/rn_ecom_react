import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Toaster } from 'react-hot-toast'

const MainPage = () => {
    return (
        <>
            <Header />
            <Toaster position="top-center" />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainPage