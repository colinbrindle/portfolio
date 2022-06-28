import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Nav from "../Nav/Nav";
import Bio from "../Bio/Bio";
import Portfolio from "../Portfolio/Portfolio";

function App() {
  return (
    <Container fluid className="vh-100 d-flex flex-column g-0">
      <Nav />
      <Row className="g-0">
        <Col s={12} md={4} className="col-spacing">
          <Bio />
        </Col>
        <Col s={12} md={8} className="bg-danger col-spacing">
          <Portfolio />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
