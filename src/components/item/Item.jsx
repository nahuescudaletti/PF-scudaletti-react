import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Item = ({ id, name, color, price, image, stock }) => {
  return (
    <article>
      <Card className="m-2 border border-dark">
        <Link to={`/item/${id}`}>
          <Card.Img
            variant="top"
            src={image}
            alt={name}
            className="img-fluid"
          />
        </Link>
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Text className="text-center">{color}</Card.Text>
          <Card.Text className="text-center">Stock: {stock}</Card.Text>
          <Card.Text className="text-center">Precio: {price}</Card.Text>
          <Link to={`/item/${id}`} className="d-flex justify-content-center">
            ver detalle
          </Link>
        </Card.Body>
      </Card>
    </article>
  );
};

export default Item;