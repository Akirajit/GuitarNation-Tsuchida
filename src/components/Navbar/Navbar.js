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
            <Nav.Link href="/all">View All</Nav.Link>
            <NavDropdown title="By cattegory" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/guitars">Guitars</NavDropdown.Item>
              <NavDropdown.Item href="/amps">Amps</NavDropdown.Item>
              <NavDropdown.Item href="/effects">Effects</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="/guitars">Guitars</Nav.Link>
            <Nav.Link href="/amps">Amps</Nav.Link>
            <Nav.Link href="/effects">Effects</Nav.Link> */}
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
