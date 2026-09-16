import { Link } from "react-router-dom";
import { useState } from 'react';
import './NavBar.scss';
import { Mail} from 'lucide-react';
import { Linkedin, GitHub } from "../Icon/Icons.jsx"
import IconMenu from "../Icon/IconMenu.jsx"
import { motion } from "motion/react"


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);   
  // 1. Iniciar en false para que empiece cerrado

  return (
    <header className="navbar-header">

      <nav className="navbar-container">
        {/* LOGO O NOMBRE */}
        <Link to="/" className="navbar-logo">Gs<span className="logo">.</span></Link>

        {/* MENÚ DE NAVEGACIÓN */}
        
        <ul className={`navbar-menu ${!isOpen ? 'is-active' : ''}`}>
          
          <div className="closed">
            <Link to="/"  onClick={() => setIsOpen(true)}> </Link>
          </div>

            <Link to="/"          onClick={() => setIsOpen(false)}>Home  </Link>
            <Link to="/about"     onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/projects"  onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/contact"   onClick={() => setIsOpen(false)}>Contact</Link>
      
          <div className="redes">
              <Link to="/contact"><Linkedin/></Link>
              <Link to="/contact"><Mail/></Link>
              <Link to="/contact"><GitHub/></Link>
          </div>

        </ul>
      

        {/* BOTÓN HAMBURGUESA  */ }
      
      <motion.div
          className="x"
          initial={{x: 100}}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
>

          <IconMenu color="white" 
              className={`navbar-toggle-btn ${isOpen ? 'is-active' : ''}`}
              isOpen={isOpen} //2. PASO PROPIEDAD DEL ESTADO
              onClick={() => setIsOpen(!isOpen)}
              />

       </motion.div>
      </nav>

    
      
 
    </header>

    
  );
}

export default NavBar;