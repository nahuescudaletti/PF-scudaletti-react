import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const CartItem = ({ name, price, quantity, id }) => {
  const { removeItem } = useContext(CartContext);

  const subtotal = price * quantity;

  return (
    <div className="container principal">
      <section className="cartitem">
        <h4>{name}</h4>
        <div>Precio: ${price}</div>
        <div>Cantidad: {quantity}</div>
        <div>Subtotal: ${subtotal}</div>
        <button onClick={() => removeItem(id)} className="boton">X</button>
      </section>
    </div>
  );
};

export default CartItem;
