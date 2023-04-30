import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js" 
import React from 'react'
import CartWidget from "./CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-center">
        <div className="d-flex me-auto">
          <NavLink to="/" className="nav-link">
            <h3 className="navbar-brand text-dark">MODA</h3>
          </NavLink>
        </div>

        <ul className="navbar-nav mx-auto flex-nowrap">
          <li className="nav-item">
            <NavLink to="/category/pantalones" className="nav-link">Pantalones</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/remeras" className="nav-link">Remeras</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/camperas" className="nav-link">Camperas</NavLink>
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
