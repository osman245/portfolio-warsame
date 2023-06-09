import React from 'react'
import { ReactDOM } from 'react-dom'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Testimonials from './components/testimonials/Testimonials'
import "./index.css";




const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Portfolio/>  
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
   