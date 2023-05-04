import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { FaTwitter } from 'react-icons/fa';


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/warsame-osman-7998b2152/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/osman245" target="_blank">
        <FaGithub />
      </a>
      <a href="https://medium.com/@warsameosman" target="_blank"><BsMedium/></a>
    </div>
  );
};

export default HeaderSocials;
