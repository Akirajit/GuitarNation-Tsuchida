import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidgeet from "../CartWidget/CartWidget";

function Menu() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <div className="container">
        <Navbar.Brand href="#home">Guitar Nation</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Instruments" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Guitars</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Basses</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#amps">Amps</Nav.Link>
            <Nav.Link href="#pricing">Effects</Nav.Link>
          </Nav>
          <Nav>
            <a href="#">
              <CartWidgeet />
            </a>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Menu;
