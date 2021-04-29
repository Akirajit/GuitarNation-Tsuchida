import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
// import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState([]);

  const isItemId = (item) => {
    return item.id == itemId;
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setItem(data.find(isItemId)));
    }, 2000);
  }, []);

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
