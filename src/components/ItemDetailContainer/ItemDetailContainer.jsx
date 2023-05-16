import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../productos/asyncMock";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    getProductById(parseInt(itemId))
      .then((response) => {
        setProduct(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className="d-flex justify-content-center mt-4">
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Card style={{ width: "30rem" }}>
          <ItemDetail {...product} />
        </Card>
      )}
    </div>
  );
};

export default ItemDetailContainer;
