import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
<div className="footer__socials">
 <a href="https://medium.com/@warsameosman" target="_blank"><BsMedium/></a>
 <a href="https://twitter.com/Warsame_Osman99" target="_blank"><FaTwitter/></a>
 <a
        href="https://www.linkedin.com/in/warsame-osman-7998b2152/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/osman245" target="_blank">
        <FaGithub />
      </a>

</div>

    </footer>
     
  )
}

export default Footer
