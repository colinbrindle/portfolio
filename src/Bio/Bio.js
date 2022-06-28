import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image, Card } from "react-bootstrap";
import "./Bio.css";

import headshot from "./imgs/bigshot.png";

function Bio() {
  return (
    <Container fluid className="bio-body bg-primary">
      <div className="img-container">
        <Image fluid src={headshot}></Image>
      </div>
    </Container>
  );
}

export default Bio;
