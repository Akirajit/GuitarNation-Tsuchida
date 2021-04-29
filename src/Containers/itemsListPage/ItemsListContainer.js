import React, { useState, useEffect } from "react";
import "./ItemsListContainer.css";
// import { useParams } from "react-router-dom";
import ItemsList from "../../components/ItemsList/ItemsList";

export default function ItemsListContainer({ greeting }) {
  // const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setItems(data));
    }, 2000);
  }, []);

  return (
    <div>
      <h3 id="greeting-message" className="title">
        {greeting}
      </h3>
      <ItemsList itemsListProp={items} />
    </div>
  );
}
