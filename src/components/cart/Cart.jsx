import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { CartContext } from '../../Context/CartContext';
import CartItem from "../CartItem/CartItem";


const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items</h1>
        <Link to="/" className="Option">Productos</Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} id={p.id} name={p.name} price={p.price} quantity={p.quantity} />
      ))}
      <h3>Total ${total}</h3>
      <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
      <Link to="/checkout" className="Option">Checkout</Link>
    </div>
  );
};

export default Cart;
