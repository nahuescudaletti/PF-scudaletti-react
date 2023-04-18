import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const AddToCartButton = ({ stock }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity <= stock) {
      // agregar al carrito la cantidad de items
    } else {
      alert("No hay suficiente stock");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Button
        variant="primary"
        onClick={handleAddToCart}
        disabled={stock <= 0}
      >
        Agregar al carrito ({quantity})
      </Button>
      <div className="mx-2">
        <Button
          variant="secondary"
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          disabled={quantity <= 1}
        >
          -
        </Button>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={() => setQuantity(quantity < stock ? quantity + 1 : stock)}
          disabled={quantity >= stock}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default AddToCartButton;