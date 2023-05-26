import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { CartContext } from '../../../Context/CartContext';

export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  
  return (
    <Link to="/cart" style={{ display: totalQuantity > 0 ? 'block' : 'none', textDecoration: 'none' }}>
      <i className="bi bi-cart3 fs-4 text-dark"></i>
      <span style={{ color: 'black' }}>{totalQuantity}</span>
    </Link>
  );
};

export default CartWidget;
