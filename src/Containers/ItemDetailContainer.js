import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../components/ItemDetail/ItemDetail";

function ItemDetailContainer({ itemId }) {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setItemsList(data));
    }, 2000);
  }, []);

  return <div>{<ItemDetail itemsList={itemsList} itemId={itemId} />}</div>;
}

export default ItemDetailContainer;
