
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Card from 'react-bootstrap/Card';
import pantalones from "../productos/pantalones.jsx";
import ItemCount from "../ItemCount.jsx/ItemCount.jsx";

export const PantalonesContainer = ({greeting}) => {
  
  return (
 <>
 <h1 className="d-flex justify-content-center">{greeting}</h1>
<div className="card-container row m-2 justify-content-around">
  {pantalones.map((pantalon) => (
    <div className="col col-md-3 col-lg-3">
      <Card className="m-2 border- border-dark" key={pantalon.id}>
        <Card.Img
          variant="top"
          src={pantalon.image}
          style={{ height: "300px", objectFit: "cover", objectPosition: "center" }}
        />
        <Card.Body >
          <Card.Title className="d-flex justify-content-center">{pantalon.name}</Card.Title>
          <Card.Text className="d-flex justify-content-center">{pantalon.color}</Card.Text>
          <Card.Text className="d-flex justify-content-center">Stock: {pantalon.stock}</Card.Text>
          <Card.Text className="d-flex justify-content-center">Precio: {pantalon.price}</Card.Text>

          
          {/*
        CONTADOR
          <div className="d-flex justify-content-center">
              <ItemCount initial={1} stock={pantalon.stock} onAdd={onAdd}/>
          </div> */}
        </Card.Body>
      </Card>
    </div>
  ))}
</div>
</>
  );
}

export default PantalonesContainer;