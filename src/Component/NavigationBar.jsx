import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import { BsMoon, BsSun } from "react-icons/bs";

const NavigationBar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-bs-theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      <Navbar
        expand="lg"
        className={`${
          theme === "light" ? "bg-white" : "bg-dark"
        } sticky-top mb-5 mb-lg-0 borderBottom`}
      >
        <Container>
          <Navbar.Brand className="fw-bold fs-2" href="#home">
            <img className="img-fluid w-25" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="mx-2 fw-semibold nav-hover" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="mx-2 fw-semibold nav-hover" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="mx-2 fw-semibold nav-hover" href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link className="mx-2 fw-semibold nav-hover" href="#contact">
                Contact
              </Nav.Link>
              <button
                className="btn btn-primary rounded-circle"
                onClick={handleThemeChange}
              >
                {theme === "light" ? <BsMoon /> : <BsSun />}
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
