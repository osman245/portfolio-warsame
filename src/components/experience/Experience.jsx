import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
   <section id="experience">
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
      <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon"   />
      <div>
      <h4>HTML</h4>
      <small className="text-light">Experienced</small>
      </div>
      </article>
      <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon" />
      <div>
      <h4>CSS</h4>
      <small className="text-light">Intermediate</small>
      </div>
      </article>
      <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon" />
      <div>
      <h4>JavaScript</h4>
      <small className="text-light">Intermediate</small>
      </div>
      </article>
      <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon" />
      <div>
      <h4>React</h4>
      <small className="text-light">Intermediate</small>
      </div>
      </article>
      <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon" />
      <div>
      <h4>BootStrap</h4>
      <small className="text-light">Intermediate</small>
      </div>
      </article>
    </div>

      </div>
    
<div className="experience__backend">
<h3>Backend Development</h3>
<div className="experience__content">
      <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon" />
      <div>
      <h4>MYSQL</h4>
      <small className="text-light">Intermediate</small>
      </div>
      </article>
      <article className="experience__details">
      <BsPatchCheckFill className='experience__details-icon'/>
      <div>
      <h4>POSTGRESQL</h4>
      <small className="text-light">Intermediate</small>
      </div>
      </article>
      <article className="experience__details"> 
      <BsPatchCheckFill className='experience__details-icon' />
      <div>
      <h4>AWS S3</h4>
      <small className="text-light">Intermediate</small>
      </div>
      </article>
      <article className="experience__details">
      <BsPatchCheckFill className='experience__details-icon' />
      <div>
      <h4>Java</h4>
      <small className="text-light">Intermediate</small>
      </div>
      </article>
      <article className="experience__details">
      <BsPatchCheckFill className='experience__details-icon' />
      <div>
      <h4>SpringBoot</h4>
      <small className="text-light">Beginner</small>
      </div>
      </article>
    </div>

    




</div>




<div className="experience__backend">
<h3>DevOps</h3>
<div className="experience__content">
      <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon" />
      <div>
      <h4>Docker</h4>
      <small className="text-light">Intermediate</small>
      </div>
      </article>
      <article className="experience__details">
      <BsPatchCheckFill className='experience__details-icon'/>
      <div>
      <h4>Kubernetes</h4>
      <small className="text-light">Intermediate</small>
      </div>
      </article>
      <article className="experience__details"> 
      <BsPatchCheckFill className='experience__details-icon' />
      <div>
      <h4>Linux</h4>
      <small className="text-light">Intermediate</small>
      </div>
      </article>
      <article className="experience__details">
      <BsPatchCheckFill className='experience__details-icon' />
      <div>
      <h4>Helm</h4>
      <small className="text-light">Intermediate</small>
      </div>

      </article>
     
    </div>

    




</div>
















    </div>
   </section>
  )
}

export default Experience
