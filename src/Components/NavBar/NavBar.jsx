import { Link } from "react-router-dom";
import { useState } from 'react';
import './NavBar.scss';
import { Menu } from 'lucide-react';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header className="navbar-header">

      <nav className="navbar-container">
        {/* LOGO O NOMBRE */}
        <Link to="/" className="navbar-logo">Gs<span className="logo">.</span></Link>

        {/* MENÚ DE NAVEGACIÓN */}
        <ul className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>

            <Link to="/"          onClick={() => setIsOpen(true)}>Hero</Link>
            <Link to="/about"     onClick={() => setIsOpen(true)}>About</Link>
            <Link to="/projects"  onClick={() => setIsOpen(true)}>Projects</Link>
            <Link to="/contact"   onClick={() => setIsOpen(true)}>Contact</Link>
      </ul>

        {/* BOTÓN HAMBURGUESA  */ }
      
        
        <Menu 
          className={`navbar-toggle ${isOpen ? 'is-active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          />
      </nav>


      
 
    </header>

    
  );
}

export default NavBar;