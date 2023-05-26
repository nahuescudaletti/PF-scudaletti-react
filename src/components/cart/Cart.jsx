import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h1>No hay items</h1>
        <Link to="/" className="Option">Productos</Link>
      </div>
    );
  }

  const total = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);

  return (
    <div>
      {cart.map((product) => (
        <CartItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
      <Link to="/checkout" className="Option">Checkout</Link>
    </div>
  );
};

export default Cart;
