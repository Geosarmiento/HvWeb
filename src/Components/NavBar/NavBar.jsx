import { Link } from "react-router-dom";
import { useState } from 'react';
import './NavBar.scss';
import { Menu, X } from 'lucide-react';
import mailIcon from "../../assets/mail.svg"
import linkedinIcon from "../../assets/linkedin.svg"
import githubIcon from "../../assets/github.svg"



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header className="navbar-header">

      <nav className="navbar-container">
        {/* LOGO O NOMBRE */}
        <Link to="/" className="navbar-logo">Gs<span className="logo">.</span></Link>

        {/* MENÚ DE NAVEGACIÓN */}
        
        <ul className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          
          <div className="closed">
            <Link to="/"  onClick={() => setIsOpen(true)}><X/></Link>
          </div>

            <Link to="/"          onClick={() => setIsOpen(true)}>Home  </Link>
            <Link to="/about"     onClick={() => setIsOpen(true)}>About</Link>
            <Link to="/projects"  onClick={() => setIsOpen(true)}>Projects</Link>
            <Link to="/contact"   onClick={() => setIsOpen(true)}>Contact</Link>
      
      <div className="redes">

          <Link to="/contact"><img src={mailIcon }
            alt="mail"
            width="28"
            height="28"
           /></Link>
          
          <Link to="/contact"><img src={linkedinIcon}
            alt="mail"
            width="28"
            height="28"
          /></Link>
          
          <Link to="/contact"><img src={githubIcon}
            alt="mail"
            width="28"
            height="28"
            /></Link>    
      
    </div>

      </ul>
      

        {/* BOTÓN HAMBURGUESA  */ }
      
        
        <Menu color="white" width={32}
          className={`navbar-toggle ${isOpen ? 'is-active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          />
      </nav>

    
      
 
    </header>

    
  );
}

export default NavBar;