import "./Contact.scss";
import { Link } from "react-router-dom"
import { MapPin,MessageCircleMore  } from 'lucide-react';

import { GitHub, Linkedin, Mail }from "../../Components/Icon/Icons.jsx"

const Contact = () => {
  return (
    <div className="contact-container">
      
      <div className="intro_contact">
        <h1> Let's Talk</h1>

        <p> Have a project in mind? 
          We'd love to hear from you. Send us a message and we'll 
          respond as soon as possible.
        </p>
      </div>



<div className="form_container">
  <h2>Send Message</h2>
      
    <div className="form_fondo">
      <form className="form">
         <label> Your name</label>
         <input type="text" placeholder="   your name"/>  
<br />
         <label> Email</label>
         <input type="email" placeholder="   your@mail.com"/> 
      <br />
         <label> Message</label>
         <input type="text" placeholder="  Tell us about your proyect... "/> 
<br />
         <button>Send Message</button>    
        
      </form>

<div>
  <h2> Contact Information</h2>

    <div className="icon_contact">
      <span><Mail/></span>
      <div>
        <small>Email</small>
        <p>Jhova29@gmail.com</p>
      </div>
    </div>

    <div className="icon_contact">
      <MessageCircleMore/>
      <div>
        <small>WhatsApp</small>
        <p>+48 510 004 762</p>
      </div>
    </div>

    <div className="icon_contact">
      <MapPin />
      <div>
        <small>Location</small>
        <p>Poland</p>
      </div>
    </div>

</div>



<div className="fallow">
  <h3>Fallow Us</h3>
    <div>
      <Link to="https://github.com/Geosarmiento"><GitHub className="logoGitHub"/></Link>
      <Link to="https://github.com/Geosarmiento"><Mail className="logoGitHub"/></Link>
      <Link to="https://github.com/Geosarmiento"><Linkedin className="logoGitHub"/></Link>

    
    
    </div>

</div>

    </div> 


</div>
    </div>
  )
}

export default Contact
