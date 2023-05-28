import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { useState, useEffect } from "react";

const Item = ({ id, name, color, price, img, stock }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProductData = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const productData = docSnap.data();
          setProduct(productData);
        } else {
          console.log('No se encontró el producto');
        }
      } catch (error) {
        console.log('Error al obtener los datos del producto:', error);
      }
      setLoading(false);
    };

    getProductData();
  }, [id]);

  return (
    <article>
      <Card className="m-2 border border-dark">
        {img ? (
          <Link to={`/item/${id}`}>
            <Card.Img variant="top" src={img} alt={name} className="img-fluid" />
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
            </div>
          ) : null}
          <div className="d-flex justify-content-center">
            {loading ? (
              <span>Cargando información adicional del producto...</span>
            ) : (
              <Link to={`/item/${id}`}>
                Ver detalle
              </Link>
            )}
          </div>
        </Card.Body>
      </Card>
    </article>
  );
};

export default Item;
