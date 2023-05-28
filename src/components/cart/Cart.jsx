import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      {cart.map(p=><CartItem key={p.id} {...p}/>)}
      <h3>Total: ${total}</h3>
      <Button variant="danger" onClick={() => clearCart()} className="m-2">Limpiar carrito</Button>
      <Link to="/checkout" className="btn btn-primary m-2">finalizar compra</Link>
    </div>
  );
};

export default Cart;
