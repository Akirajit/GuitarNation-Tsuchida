import React from "react";

export default function ItemDetail({ itemsList, itemId }) {
  return (
    <div>
      {itemsList
        .filter((item) => item.id == itemId)
        .map((filteredItem) => (
          <h1>{filteredItem.title}</h1>
        ))}
    </div>
  );
}
