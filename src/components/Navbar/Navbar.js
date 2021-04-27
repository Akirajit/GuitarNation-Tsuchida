import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidgeet from "../CartWidget/CartWidget";
import "./Navbar.css";

function Menu() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <div className="container">
        <Navbar.Brand href="/" class="navbar-home">
          Guitar Nation
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Instruments" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/guitars">Guitars</NavDropdown.Item>
              <NavDropdown.Item href="/itemdetail">Basses</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/amps">Amps</Nav.Link>
            <Nav.Link href="/effects">Effects</Nav.Link>
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
