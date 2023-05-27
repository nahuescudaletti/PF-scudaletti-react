import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDocs, doc } from "firebase/firestore";
import { db } from "../firebase-config";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", itemId);

    getDocs(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
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
