import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import { BsMoon, BsSun } from "react-icons/bs";

const NavigationBar = () => {
  const [theme, setTheme] = useState("light");
  // dark/light theme changer
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-bs-theme", theme);
  }, [theme]);

  // handling state change of dark/light theme
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
          <Navbar.Brand className="fw-bold" href="#home">
            <img className="img-fluid" style={{width: "4.9rem"}} src={logo} alt="" />
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
            </Nav>
            <div className="d-flex">
              <Button
                className="ms-2 rounded-circle"
                onClick={handleThemeChange}
              >
                {theme == "light" ? <BsMoon /> : <BsSun />}
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
