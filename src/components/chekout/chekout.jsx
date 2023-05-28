import { useContext, useState } from "react";
import CartContext from "../../Context/CartContext";
import { Timestamp, writeBatch, collection, addDoc, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import CheckoutForm from "../../chekoutform/ChekoutForm";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date())
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map(prod => prod.id);

      const productsRef = collection(db, 'products');

      const productsAddedFromFirestore = await getDocs (query(productsRef, where (documentId(), 'in', ids))) 

      const { docs } = productsAddedFromFirestore;

      docs.forEach(doc => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find(item => item.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {

        await batch.commit();

        const orderRef = collection(db, 'orders')
        
        const orderAdded= await addDoc(orderRef, objOrder)
        setOrderId(orderAdded.id)
        clearCart();
      } else {
        console.log('Productos sin stock:', outOfStock);
        // Puedes mostrar un mensaje al usuario informando que algunos productos no están disponibles.
      }
    } catch (error) {
      console.erro('xddd');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se está generando su orden...</h1>;
  }
  if (orderId) {
    return (
      <div className="text-center">
        <h1>¡Gracias por confiar en nuestra tienda!</h1>
        <h3>Se enviarán detalles de su compra por correo.</h3>
        <h2>El ID de su orden es: {orderId}</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
