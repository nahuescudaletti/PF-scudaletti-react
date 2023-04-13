import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js" 
import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
export const NavBar = () => {
  return (
    <div >
        <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">MODA</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#">REMERAS</a></li>
            <li><a href="#">PANTALONES</a></li>
            <li><a href="#">CONJUNTOS</a></li>
          </ul>
        </div>
        <CartWidget />
      </nav>
    </div>
  )
}

export default NavBar;