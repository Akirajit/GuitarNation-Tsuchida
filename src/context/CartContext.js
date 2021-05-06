import { createContext, useState } from "react";
export const CartContext = createContext(null);

export default function AppContextProvider({ children }) {
  return (
    <CartContext.Provider value={{ brand: "fender" }}>
      {children}
    </CartContext.Provider>
  );
}
