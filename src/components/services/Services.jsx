import React from 'react'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
   <section id="services">
<h5> What I Offer</h5>
<h2>Services</h2>

<div className="container services__container">
<article className="service">
<div className="service__head">
  <h3>Web Development</h3>
</div>

<ul className="service__list">
<li>
<BiCheck className="service__list-icon"/>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus amet illum sapiente aliquam est, vero quo. Reiciendis sunt praesentium perspiciatis un
  de atque neque! Quos cumque velit inventore mollitia tempore dignissimos.</p>
</li>
</ul>
</article>

<article className="service">
<div className="service__head">
  <h3>Blogger</h3>
</div>

<ul className="service__list">
<li>
<BiCheck className="service__list-icon"/>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus amet illum sapiente aliquam est, vero quo. Reiciendis sunt praesentium perspiciatis un
  de atque neque! Quos cumque velit inventore mollitia tempore dignissimos.</p>
</li>
</ul>
</article>




</div>




   </section>
  )
}

export default Services
