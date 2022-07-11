import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Portfolio.css";

// Importing portfolio components
import Pedestal from "./Components/Pedestal";
import TIW from "./Components/TIW";
import UNN from "./Components/UNN";
import Mossii from "./Components/Mossii";
import Placeholder from "./Components/Placeholder";

function Portfolio() {
  return (
    // <Container fluid className="port-container">
    //   <Row>
    //     <Col s={12}>
    //       <Pedestal />
    //     </Col>
    //   </Row>
    //   <Row className="g-0">
    //     <Col s={12} xl={6}>
    //       <TIW />
    //     </Col>
    //     <Col s={12} xl={6}>
    //       <UNN />
    //     </Col>
    //     <Col s={12} xl={6}>
    //       <Mossii />
    //     </Col>
    //     <Col s={12} xl={6}>
    //       <Placeholder />
    //     </Col>
    //   </Row>
    // </Container>
    <main className="portfolio-grid">
      <article>
        <Pedestal />
      </article>
      <article>
        <TIW />
      </article>
      <article>
        <UNN />
      </article>
      <article>
        <Mossii />
      </article>
    </main>
  );
}

export default Portfolio;
