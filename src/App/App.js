import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Bio from "../Bio/Bio";
import Portfolio from "../Portfolio/Portfolio";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="bg-secondary">
            <Bio />
          </Col>
          <Col className="bg-danger">
            <Portfolio />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
