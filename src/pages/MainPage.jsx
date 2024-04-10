import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const MainPage = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default MainPage