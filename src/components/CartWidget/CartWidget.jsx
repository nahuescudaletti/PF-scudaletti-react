import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import cart from './assets/cart.svg'

import React from 'react';

export const CartWidget = () => {
  return (
    <div className="d-flex overflow-hidden align-items-center">
    <img src={cart} alt="cart-widget" className="navbar-brand pe-3" style={{ width: "40px", height: "40px" }} />
    <span>0</span>
  </div>
  );
};

export default CartWidget;