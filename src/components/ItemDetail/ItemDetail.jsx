import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
    console.log(props);
    const { id, name, color, price, image, stock } = props;
  return (
<Card  className="m-2 border border-dark justify-content-center">
  <Card.Img variant="top" src={image} alt={name} className="img-fluid" />
  <Card.Body className="text-center">
    <Card.Title>{name}</Card.Title>
    <Card.Text>{color}</Card.Text>
    <Card.Text>Stock: {stock}</Card.Text>
    <Card.Text>Precio: {price}</Card.Text>
    <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log("compraste " + quantity + " unidades")}/>
  </Card.Body>
</Card>

  );
};

export default ItemDetail;
