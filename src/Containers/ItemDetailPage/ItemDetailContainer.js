import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getSingleProduct } from "../../services/getSingleProduct";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    getSingleProduct(itemId).then((item) => setItem(item));
  }, []);

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
