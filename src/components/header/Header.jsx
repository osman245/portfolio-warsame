import React from 'react'
import './header.css'

import ME from '../../assets/gradphoto.jpeg'
import HeaderSocial from './HeaderSocials.jsx'
import CTA from './CTA.jsx'
const Header = () => {
  return (

    <header>
<div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Warsame Osman</h1>
      <h5 className="text-light">Full Stack Developer | DevOps</h5>

      <CTA/>
       <HeaderSocial/> 

   




      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
    </header>
    
  )
}

export default Header
