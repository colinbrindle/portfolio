import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";

function Nav() {
  return (
    <Navbar sticky="top" expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#">
          Hello, my name is Colin. Welcome to my portfolio site!
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Nav;
