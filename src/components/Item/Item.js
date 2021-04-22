import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

import ItemCount from "../ItemCount/ItemCount";
import "./item.css";

function Item({ item }) {
  const onAdd = (counter) => {
    alert(`${counter} items have been added to the cart.`);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.pictureUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
      </Card.Body>
    </Card>
  );
}

export default Item;
