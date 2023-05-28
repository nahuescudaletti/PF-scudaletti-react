import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Spinner } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import CartContext from "../../Context/CartContext";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);

    const getProductData = async () => {
      try {
        const docRef = doc(db, "products", itemId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const productData = docSnap.data();
          setProduct({ id: docSnap.id, ...productData });
        } else {
          console.log("No se encontró el producto");
        }
      } catch (error) {
        console.log("Error al obtener los datos del producto:", error);
      } finally {
        setLoading(false);
      }
    };

    getProductData();
  }, [itemId]);

  const handleOnAdd = (quantity) => {
    if (product) {
      const item = {
        id: product.id,
        name: product.name,
        price: product.price,
      };

      addItem(item, quantity);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Card style={{ width: "30rem" }}>
          <ItemDetail
            id={product?.id}
            name={product?.name}
            color={product?.color}
            price={product?.price}
            stock={product?.stock}
            img={product?.img}
            onAdd={handleOnAdd}
          />
        </Card>
      )}
    </div>
  );
};

export default ItemDetailContainer;
