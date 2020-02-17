import React from 'react'
import {Link} from 'react-router-dom'

/**
 * renderisara en Menu el cual sera mostrado en todas las paginas
 * boton para listar artistas
 */


const Menu = () => (
  <nav className="navbar navbar-dark bg-dark">
    <Link className="navbar-brand btn_nav" to="/">
      <strong>Prueba</strong>
    </Link>
    <Link className="navbar-brand btn_nav" to="/">
      <strong>LISTA DE ARTISTAS</strong>
    </Link>
  </nav>
);



export default Menu