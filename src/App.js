import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import HomePageContainer from "./Containers/homePage/HomePageContainer";
import ItemsListContainer from "./Containers/itemsListPage/ItemsListContainer";
import ItemDetailContainer from "./Containers/ItemDetailPage/ItemDetailContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ItemsListContainer greeting="This is the all section 🚧" />
        </Route>

        <Route exact path="/category/:categoryId">
          <ItemsListContainer greeting="Welcome! This is a specific category. 🚧" />
        </Route>

        <Route exact path="/item/:itemId">
          <ItemDetailContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
