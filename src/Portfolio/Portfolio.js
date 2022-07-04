import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Image, Col, Card } from "react-bootstrap";
import "./Portfolio.css";

import unn from "./imgs/unn.png";
import tiw from "./imgs/thisiswar.png";
import tiw2 from "./imgs/thisiswar2.png";
import mossii from "./imgs/drmossii.png";

function Portfolio() {
  return (
    <Container fluid className="port-container">
      <Row>
        <div className="pedestal">
          <Image
            fluid
            src={tiw2}
            className="item-fit"
            alt="Image of This is War 2 landing page"
          ></Image>
        </div>
      </Row>
      <Row>
        <div className="item">
          <Image
            fluid
            src={tiw}
            className="item-fit"
            alt="Image of This is War landing page"
          ></Image>
        </div>
        <div className="item">
          <Image
            fluid
            src={unn}
            className="item-fit"
            alt="Image of Ukraine News Now news page"
          ></Image>
        </div>
        <div className="item">
          <Image
            fluid
            src={mossii}
            className="item-fit"
            alt="Still from Dr Mossii promotional video"
          ></Image>
        </div>
        <div className="item">
          <h1 className="placeholder-item">?</h1>
        </div>
      </Row>
    </Container>
  );
}

export default Portfolio;
