import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { CartContext } from '../../../Context/CartContext.jsx';

export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  
  return (
    <Link to="/cart" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      <i className="bi bi-cart3"></i>
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
