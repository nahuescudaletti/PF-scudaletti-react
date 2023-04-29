import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Card from 'react-bootstrap/Card';
import remeras from "../productos/remeras.jsx";
import ItemCount from "../ItemCount.jsx/ItemCount.jsx";

export const RemerasContainer = ({greeting}) => {
  const onAdd=(quantity)=>{
    console.log("compraste"+quantity+ "unidades" );
  }
  return (
 <>
 <h1 className="d-flex justify-content-center">{greeting}</h1>
<div className="card-container row m-2 justify-content-around">
  {remeras.map((remera) => (
    <div className="col col-md-3 col-lg-3">
      <Card className="m-2 border- border-dark" key={remera.id}>
        <Card.Img
          variant="top"
          src={remera.image}
          style={{ height: "300px", objectFit: "cover", objectPosition: "center" }}
        />
        <Card.Body >
          <Card.Title className="d-flex justify-content-center">{remera.name}</Card.Title>
          <Card.Text className="d-flex justify-content-center">{remera.color}</Card.Text>
          <Card.Text className="d-flex justify-content-center">Stock: {remera.stock}</Card.Text>
          <Card.Text className="d-flex justify-content-center">Precio: {remera.price}</Card.Text>

          
          <div className="d-flex justify-content-center">
              <ItemCount initial={1} stock={remera.stock} onAdd={onAdd}/>
          </div>
        </Card.Body>
      </Card>
    </div>
  ))}
</div>
</>
  );
}

export default RemerasContainer;