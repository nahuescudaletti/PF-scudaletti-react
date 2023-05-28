import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calcula el total cada vez que el carrito cambie
    calculateTotal();
  }, [cart]);

  const calculateTotal = () => {
    const newTotal = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    setTotal(newTotal);
  };

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((prod) => prod.id !== itemId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, total, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
