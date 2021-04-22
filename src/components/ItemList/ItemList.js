import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "../Item/Item";

function ItemList({ itemsListProp }) {
  return (
    <Container className="itemContainer">
      <Row>
        {itemsListProp.map((item) => (
          <Col>
            <Item key={item.id} item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
