import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {MdOutlineEmail} from 'react-icons/md'
import './contact.css'
const Contact = () => {
 const form = useRef();

 


 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_ii3h5kx', 'template_t28slyz', form.current, 'iW1XOtrL22MwcnJn0') //public key found in the integrationm template in template..
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  document.getElementById('email').value="";
  document.getElementById('fullname').value="";
  document.getElementById('textbox').value="";

};
 
  return (
   <section id='contact'>
   <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
  

  <div className="container contact__container">
 <div className="contact__options">
  <article className="contact__option">
    <MdOutlineEmail/>
  <h4>Email</h4>
  <h6>osm.warsame@gmail.com</h6>
  <a href="mailtp:dummyegator">Send a message</a>
  </article>
 </div>
{/* END OF CONTACT OPTIONS */}
<form ref={form} onSubmit={sendEmail}>
<input type="text" name='name' placeholder='Your Full Name' id="fullname" required />
<input type="text" name='name' placeholder='Your Email' required id="email" />
<textarea  name='message' rows="7" placeholder='Enter about your Inquiry here' id="textbox" required >
  </textarea>
  <button type="submit" className="btn btn-primary">Send Message</button>
</form>
  </div>
   </section>
    
  )
}

export default Contact
