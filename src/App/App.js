import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Bio from "../Bio/Bio";
import Portfolio from "../Portfolio/Portfolio";

function App() {
  return (
    <div>
      <Container fluid className="vh-100 d-flex flex-column g-0">
        <Row className="h-100 g-0">
          <Col s={12} md={4} className="col-spacing">
            <Bio />
          </Col>
          <Col s={12} md={8} className="bg-danger col-spacing">
            <Portfolio />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
