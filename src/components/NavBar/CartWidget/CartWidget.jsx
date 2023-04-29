import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export const CartWidget = () => {
  return (
    <div className="d-flex overflow-hidden align-items-center">
      <i className="bi bi-cart3 fs-4"></i>
      <span>0</span>
    </div>
  );
};

export default CartWidget;