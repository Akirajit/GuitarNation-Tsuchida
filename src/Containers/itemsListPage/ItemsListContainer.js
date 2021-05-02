import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemsListContainer.css";
import ItemsList from "../../components/ItemsList/ItemsList";

const { getProducts } = require("../../services/getProducts");

export default function ItemsListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // console.log(categoryId);
    getProducts().then((data) => {
      !categoryId
        ? setItems(data)
        : setItems(data.filter((item) => item.categoryId == categoryId));
    });
  }, []);

  return (
    <div>
      <h3 id="greeting-message" className="title">
        {greeting} {categoryId}
      </h3>
      <ItemsList itemsListProp={items} />
    </div>
  );
}
