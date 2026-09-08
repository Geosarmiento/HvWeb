import { useState } from 'react';
import './NavBar.css';
import { Menu } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header className="navbar-header">

      <nav className="navbar-container">
        {/* LOGO O NOMBRE */}
        <a href="#hero" className="navbar-logo">
          Gs<span className="logo">.</span>
        </a>

        {/* MENÚ DE NAVEGACIÓN */}
        <ul className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <li>
            <a href="#about" onClick={() => setIsOpen(true)}>About</a>
          </li>
          <li>
            <a href="#proyect" onClick={() => setIsOpen(true)}>Projects</a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsOpen(true)}>Skills</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(true)}>Contact</a>
          </li>
        </ul>

        {/* BOTÓN HAMBURGUESA PARA MÓVILES */ }
        <button 
          className={`navbar-toggle ${isOpen ? 'is-active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >

        <Menu color="white"/>

        </button>


      </nav>
    </header>
  );
}

export default NavBar;