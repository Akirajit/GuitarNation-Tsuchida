import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./ItemCount.css";
import fender from "../../assets/images/01-fender.jpg";

function ItemCount({ initial, stock, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const incrementCounter = () => {
    if (counter <= stock) {
      setCounter(counter + 1);
    }
  };

  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={fender} />
        <Card.Body>
          <Card.Title>Fender Stratocaster</Card.Title>
          <Card.Text>
            Experience the peerless Strat style of Slowhand himself with the
            Eric Clapton Stratocaster, one of our most acclaimed and enduring
            artist signature models. With classic design and special features
            that give it exceptional tonal versatility and effortless feel
            worthy of one of the world’s greatest names in rock and blues, it
            puts pure Clapton Stratocaster tone and feel straight into your
            hands
          </Card.Text>
          <div id="counterContainer">
            <a
              class="unselectable"
              id="counterContainerLeft"
              onClick={decrementCounter}
            >
              -
            </a>
            <h6 id="counterContainerMiddle">{counter}</h6>
            <a
              class="unselectable"
              id="counterContainerRight"
              onClick={counter < stock ? incrementCounter : null}
            >
              +
            </a>
          </div>
          <Button
            id="addToCartBtn"
            variant="primary"
            onClick={
              counter <= stock
                ? () => onAdd(counter)
                : () =>
                    alert("Producto out of stock. Please try a lower number.")
            }
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ItemCount;
