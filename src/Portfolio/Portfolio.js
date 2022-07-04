import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Image, Col } from "react-bootstrap";
import "./Portfolio.css";

import unn from "./imgs/unn.png";
import tiw from "./imgs/thisiswar.png";
import tiw2 from "./imgs/thisiswar2.png";
import mossii from "./imgs/drmossii.png";
import placeholderImg from "./imgs/placeholder.png";

function Portfolio() {
  return (
    <Container fluid className="port-container">
      <Row>
        <Col s={12}>
          <div className="pedestal">
            <Image
              fluid
              src={tiw2}
              alt="Image of This is War 2 landing page"
            ></Image>
          </div>
        </Col>
      </Row>
      <Row className="g-0">
        <Col s={12} xl={6}>
          <div className="item-box">
            <Image
              fluid
              src={tiw}
              alt="Image of This is War landing page"
              className="image-sizing"
            ></Image>
          </div>
        </Col>
        <Col s={12} xl={6}>
          <div className="item-box">
            <Image
              fluid
              src={unn}
              alt="Image of Ukraine News Now news page"
              className="image-sizing"
            ></Image>
          </div>
        </Col>
        <Col s={12} xl={6}>
          <div className="item-box">
            <Image
              fluid
              src={mossii}
              alt="Still from Dr Mossii promotional video"
              className="image-sizing"
            ></Image>
          </div>
        </Col>
        <Col s={12} xl={6}>
          <div className="item-box">
            <Image
              fluid
              src={placeholderImg}
              alt="Placeholder image for new projects"
              className="image-sizing"
            ></Image>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
