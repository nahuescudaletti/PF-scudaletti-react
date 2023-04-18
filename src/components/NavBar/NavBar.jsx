import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js" 
import React from 'react'
import CartWidget from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid d-flex justify-content-center">
    <h3 className="navbar-brand text-dark me-auto">MODA</h3>
    <ul className="navbar-nav">
      <li className="nav-item">
        <button className="nav-link text-dark mx-3 border-0 bg-transparent">pantalones</button>
      </li>
      <li className="nav-item">
        <button className="nav-link text-dark mx-3 border-0 bg-transparent">remeras</button>
      </li>
      <li className="nav-item">
        <button className="nav-link text-dark mx-3 border-0 bg-transparent">conjuntos</button>
      </li>
    </ul>
    <li className="nav-item ms-auto list-unstyled">
        <CartWidget />
      </li>
  </div>
</nav>
  );
};

export default NavBar;