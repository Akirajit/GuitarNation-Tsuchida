import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h3 className="title">
        Welcome to <span className="brand-text">GuitarNation</span> , this site
        is currently under contruction.
      </h3>
      <img
        id="main-image"
        src="https://sleekbundle.com/wp-content/uploads/2020/01/18-Site-under-construction-1.png"
        alt="site-under-construction"
      />
    </div>
  );
}

export default App;
