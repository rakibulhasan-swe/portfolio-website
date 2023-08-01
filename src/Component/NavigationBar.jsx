import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-light shadow">
        <Container>
          <Navbar.Brand className="fw-bold fs-2" href="#home">Rakib</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="mx-2 fw-bold fs-5" href="#home">Home</Nav.Link>
              <Nav.Link className="mx-2 fw-bold fs-5" href="#about">About</Nav.Link>
              <Nav.Link className="mx-2 fw-bold fs-5" href="#projects">Projects</Nav.Link>
              <Nav.Link className="mx-2 fw-bold fs-5" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
