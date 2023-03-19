import React from 'react'
import './about.css'
import ME from "../../assets/gradphoto.jpeg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'> 
    <h5>Get to know</h5> 
    <h2> About Me</h2>
    
<div className="container about__container">
I am a coder!

I graduated with Computer Science Degree in 2022. I have tutored for a Java Course and I have created several projects where I incorporated what Ive learnt through out my Computer Science studies aswell as alot of self-study. One project to highlight would be my EventbriteX project. Where I used HTML,CSS and JavaScript for the frontend and Springboot for the backend. I used POSTGRESQL docker container as a database and I used AWS S3 for clients to store pictures. I also deployed the whole application on docker-compose. You can check the demo for that  below ⬇️
<a href="">EventbriteX Clone</a>
I am an aspiring Dev Ops engineer who is proficient with Linux, Docker, and Kubernetes and I am eager to learn more.
</div>    
    </section>
  )
}

export default About
