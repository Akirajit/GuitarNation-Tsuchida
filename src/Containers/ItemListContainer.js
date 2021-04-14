import React, { Component } from "react";
import "./ItemListContainer.css";

export class ItemListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3 className="title">{this.props.greeting}</h3>
        <img
          id="main-image"
          src="https://sleekbundle.com/wp-content/uploads/2020/01/18-Site-under-construction-1.png"
          alt="site-under-construction"
        />
      </div>
    );
  }
}

export default ItemListContainer;
