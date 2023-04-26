import React from 'react'
import IMG1 from '../../assets/pexels-gül-işık-13794311.jpg'
import IMG2 from '../../assets/techpic2.png'
import IMG3 from '../../assets/techpic3.png'
import IMG4 from '../../assets/238exceptself.png'
import IMG5 from '../../assets/238exceptself.png'
import IMG6 from '../../assets/238exceptself.png'
import './portfolio.css'

const data = [
{
id:1,
image: IMG1,
title:"EventBriteX",
github:"https://github.com/osman245/EventBriteX",
demo: "https://www.youtube.com/watch?v=S-gv4tM1jsE"
}  
]



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        
        
        {
       data.map(({id,image,title,github,demo}) => {   
       return (
<article key={id} className="portfolio__item">
         <div className="portfolio__item-image">
          <img src={image} alt="img1"/>
         </div>
         <h3>{title}</h3>
         <div className="portfolio__item-cta">
         <a className="btn" href={github}>Github</a>
         <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
         </div>
        </article>
       );

//
      }
       )}        
    
      </div>

    </section>
  )
}

export default Portfolio
