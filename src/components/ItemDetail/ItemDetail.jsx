import { Card, Image } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";

const ItemDetail = ({ id, name, color, price, stock, img }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      color,
      price,
      img,
    };

    addItem(item, quantity);
  };

  return (
    <Card className="m-2 border border-dark justify-content-center">
      <Card.Body className="text-center">
        <Card.Title>{name}</Card.Title>
        <Image src={img} alt={name} fluid />
        <Card.Text>{color}</Card.Text>
        <Card.Text>Stock: {stock}</Card.Text>
        <Card.Text>Precio: {price}</Card.Text>
        <footer>
          {quantityAdded > 0 ? (
            <Link to="/cart">terminar compra</Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )}
        </footer>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
