import { Container, Row, Col } from "react-bootstrap";
import Item from "../item/Item";

const ItemList = ({ products }) => {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((prod) => (
          <Col key={prod.id}>
            <Item {...prod} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;