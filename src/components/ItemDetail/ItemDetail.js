import React from "react";
import { Jumbotron, Container, Row, Col, Image, Badge } from "react-bootstrap";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({ itemsList, itemId }) {
  const onAdd = (counter) => {
    alert(`${counter} items have been added to the cart.`);
  };

  return (
    <div>
      {itemsList
        .filter((item) => item.id == itemId)
        .map((filteredItem) => (
          <div>
            <Container className="item-detail">
              <Jumbotron>
                <Row>
                  <Col className="item-detail-left">
                    <Image
                      className="item-detail--image"
                      src={filteredItem.pictureUrl}
                      rounded
                    />
                  </Col>
                  <Col className="item-detail-right">
                    <h2 className="item-detail--title">{filteredItem.title}</h2>
                    <Badge
                      className="item-detail--badge"
                      pill
                      variant="success"
                    >
                      stock
                    </Badge>
                    Quantity: {filteredItem.stock}
                    <h3 className="item-detail--price">
                      $USD {filteredItem.price}
                    </h3>
                    <p className="item-detail--description">
                      {filteredItem.description}
                    </p>
                    <ItemCount
                      initial={1}
                      stock={filteredItem.stock}
                      onAdd={onAdd}
                    />
                  </Col>
                </Row>
              </Jumbotron>
            </Container>
          </div>
        ))}
    </div>
  );
}
