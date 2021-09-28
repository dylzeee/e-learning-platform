import React from 'react'
import Footer from '../footer/Footer.component'
import Navbar from '../navbar/Navbar.component'

export default function Layout({ children, user }) {
  return (
    <>
      <Navbar user={user} />
      {children}
      <Footer />
    </>
  )
}
