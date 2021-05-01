import React, { useEffect } from "react";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
// import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { itemId } = useParams();
  // const [item, setItem] = useState([]);

  // const isItemId = (item) => {
  //   return item.id == itemId;
  // };

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const items = await data.json();
    console.log("hi herlo");
  };

  return <ItemDetail item={itemId} />;
}

export default ItemDetailContainer;
