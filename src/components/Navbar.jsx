import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Employee Finder</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
