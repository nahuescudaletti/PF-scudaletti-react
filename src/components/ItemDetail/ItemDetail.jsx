import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const ItemDetail = ({id, name, color, image, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const {addItem} = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
  
    const item = {
      id,
      name,
      price,
    };
  
    addItem(item, quantity);
  };
  

  return (
<Card  className="m-2 border border-dark justify-content-center">
  <Card.Img variant="top" src={image} alt={name} className="img-fluid" />
  <Card.Body className="text-center">
    <Card.Title>{name}</Card.Title>
    <Card.Text>{color}</Card.Text>
    <Card.Text>Stock: {stock}</Card.Text>
    <Card.Text>Precio: {price}</Card.Text>
    <footer>
      {quantityAdded> 0 ?(
       <Link to='/cart'>terminar compra</Link>
      ) :(
        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
      )
      }
    </footer>
  </Card.Body>
</Card>

  );
};

export default ItemDetail;
