import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./Containers/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer
        greeting="Welcome! This
          site is still under contruction. 🚧"
      />
    </div>
  );
}

export default App;
