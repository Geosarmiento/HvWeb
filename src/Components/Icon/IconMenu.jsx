

import "../Icon/IconMenu.scss"


const IconMenu = ( { isOpen, onClick } ) => {
  return (
    <>
        
        <div
          onClick={onClick}
          className={`menu-toggle-btn ${isOpen ? 'is-open' : ''}`}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
        <div className="burger-icon">
          <span className="line line-top"></span>
          <span className="line line-bottom"></span>
        </div>
      </div>


    </>
  )
}

export default IconMenu
