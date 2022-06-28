import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="port-container">
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
    </div>
  );
}

export default Portfolio;
