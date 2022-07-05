import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import SiteNav from "../SiteNav/SiteNav";
import Bio from "../Bio/Bio";
import Portfolio from "../Portfolio/Portfolio";

function App() {
  return (
    <>
      <SiteNav />
      <Container fluid className="d-flex flex-column g-0 bg-black">
        <Row className="g-0">
          <Col s={12} md={6} xl={4}>
            <Bio />
          </Col>
          <Col s={12} md={6} xl={8}>
            <Portfolio />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
