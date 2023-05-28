import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Resto del código del componente CheckoutForm


const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name: name,
      phone: phone,
      email: email,
    };

    onConfirm(userData);
  };

  return (
    <div className="container">
      <form onSubmit={handleConfirm} className="form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre:
          </label>
          <input
            id="name"
            className="form-control"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            id="email"
            className="form-control"
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Teléfono:
          </label>
          <input
            id="phone"
            className="form-control"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
