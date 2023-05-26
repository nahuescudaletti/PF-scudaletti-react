import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartItem = ({ name, price, quantity, id, image, color }) => {
  const { removeItem } = useContext(CartContext);

  const subtotal = price * quantity;

  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: '50%' }} className="border border-dark">
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{color}</Card.Text>
          <Card.Text>Precio: ${price}</Card.Text>
          <Card.Text>Cantidad: {quantity}</Card.Text>
          <Card.Text>Subtotal: ${subtotal}</Card.Text>
          <Button onClick={() => removeItem(id)} className="btn btn-danger">X</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CartItem;
