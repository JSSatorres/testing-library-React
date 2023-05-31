import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'

const Layout = () => (
  <main>
    <Header />
    <Outlet />
    <Footer />
  </main>
)

export default Layout