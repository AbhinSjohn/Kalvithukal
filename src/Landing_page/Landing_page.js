import React from 'react'
import Body from './Body'
import Header from "./Header"
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import Services from './Services'
import Downloads from './Downloads'
import "./Landing_page.css"
import Donate from './Donate'
function Landing_page() {
  return (
    <div>

    <Header/>
    <Body/>
    <Services/>
    <Downloads/>
    <Donate/>
    <NewsLetter/>
    <Footer/>

     </div> 
  )
}

export default Landing_page