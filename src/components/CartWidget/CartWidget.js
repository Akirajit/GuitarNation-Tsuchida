import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div>
      <FiShoppingCart id="FiShoppingCart" size="1.5em" color="#dadada" />
    </div>
  );
}

export default CartWidget;
