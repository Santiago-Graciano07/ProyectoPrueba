import React from 'react'
import {Link} from 'react-router-dom'


const Menu = () => (
  <nav className="navbar navbar-dark bg-dark">
    <Link className="navbar-brand btn_nav" href="/">
      <strong>Prueba</strong>
    </Link>
    <Link className="navbar-brand btn_nav" href="/">
      <strong>LISTA DE ARTISTAS</strong>
    </Link>
  </nav>
);



export default Menu