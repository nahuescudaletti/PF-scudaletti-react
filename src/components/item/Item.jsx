import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { getProductById } from "../productos/asyncMock";
import { useState } from "react";


const Item = ({ id, name, color, price, image, stock }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    getProductById(id).then((product) => {
      console.log(product);
      setProduct(product);
      setLoading(false);
    });
  };

  return (
    <article>
      <Card className="m-2 border border-dark">
        {image ? (
          <Link to={`/item/${id}`}>
            <Card.Img variant="top" src={image} alt={name} className="img-fluid" />
          </Link>
        ) : null}
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Text className="text-center">{color}</Card.Text>
          <Card.Text className="text-center">Stock: {stock}</Card.Text>
          <Card.Text className="text-center">Precio: {price}</Card.Text>
          {product ? (
            <div>
              <Card.Text className="text-center">{product.description}</Card.Text>
              <Card.Text className="text-center">Categoría: {product.category}</Card.Text>
              <Card.Text className="text-center">Subcategoría: {product.subcategory}</Card.Text>
            </div>
          ) : (
            <div className="d-flex justify-content-center">
              {loading ? (
                <span>Cargando información adicional del producto...</span>
              ) : (
                <Link to={`/item/${id}`} onClick={handleClick}>
                  ver detalle
                </Link>
              )}
            </div>
          )}
        </Card.Body>
      </Card>
    </article>
  );
};

export default Item;
