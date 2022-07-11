import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { Container, Navbar, Nav, Image } from "react-bootstrap";

import logo from "../Portfolio/imgs/logoW.svg";

// UPDATE NAVBAR TO BE COLLAPSABLE LOOKS WEIRD RN

function SiteNav() {
  return (
    // <Navbar sticky="top" expand="lg" variant="dark" bg="dark">
    //   <Container>
    //     <Navbar.Brand href="#">
    //       Hello, my name is Colin. Welcome to my portfolio site!
    //     </Navbar.Brand>
    //     <div className="d-flex justify-content-end">
    //       <Nav className="me-auto navbar-link-main">
    //         <Nav.Link href="https://github.com/colinbrindle" target="_blank">
    //           GitHub
    //         </Nav.Link>
    //         <Navbar.Text>/</Navbar.Text>
    //         <Nav.Link
    //           href="https://www.linkedin.com/in/colin-brindle"
    //           target="_blank"
    //         >
    //           LinkedIn
    //         </Nav.Link>
    //         {/* <Navbar.Text>/</Navbar.Text>
    //         <Nav.Link href="#">Contact</Nav.Link> */}
    //       </Nav>
    //     </div>
    //   </Container>
    // </Navbar>
    <header className="primary-header d-flex">
      <img src={logo} className="logo"></img>
      <nav>
        <ul className="primary-nav d-flex">
          <li>
            <a
              href="https://github.com/colinbrindle"
              target="_blank"
              className="primary-nav-link"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/colin-brindle"
              target="_blank"
              className="primary-nav-link"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default SiteNav;
