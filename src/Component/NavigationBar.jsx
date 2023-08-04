import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";

const NavigationBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-white sticky-top mb-5 mb-lg-0 py-3 borderBottom">
        <Container className="">
          <Navbar.Brand className="fw-bold fs-2" href="#home">
            <img className="img-fluid w-25" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="mx-2 fs-5 fw-semibold nav-hover" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="mx-2 fs-5 fw-semibold nav-hover" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="mx-2 fs-5 fw-semibold nav-hover" href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link className="mx-2 fs-5 fw-semibold nav-hover" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
