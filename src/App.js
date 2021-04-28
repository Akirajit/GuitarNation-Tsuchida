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
          <HomePageContainer />
        </Route>
        <Route exact path="/all">
          <ItemsListContainer greeting="This is the all section 🚧" />
        </Route>
        <Route exact path="/guitars">
          <ItemsListContainer
            greeting="Welcome! This
          site is still under contruction. 🚧"
          />
        </Route>
        <Route exact path="/amps">
          <ItemsListContainer greeting="This is the amps section 🚧" />
        </Route>
        <Route exact path="/effects">
          <ItemsListContainer greeting="This is the effects section. 🚧" />
        </Route>
        <Route path="/itemdetail">
          <ItemDetailContainer itemId={1} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
