import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image, Row } from "react-bootstrap";
import "./Bio.css";

import headshot from "./imgs/bigshot.png";

function Bio() {
  return (
    <div fluid className="bio-body hov-container">
      <div className="img-container">
        <img fluid src={headshot} className="img-sizing"></img>
        <div className="hov-overlay">
          <div className="hov-text">
            <h1>Hi, I'm Colin!</h1>
            <p className="chinese-text">歡迎您來到我的網站！</p>
            <p>
              It's a pleasure to{" "}
              <strong>
                <i>sort of</i>
              </strong>{" "}
              meet you. I'm a former management consultant turned full stack
              JavaScript developer! I'm very passionate about front end design,
              but I'm well versed with the full MERN stack (MongoDB, Express,
              React, Node.js).
            </p>
            <p>
              A little bit about myself: I am half Taiwanese-American (my mom's
              side is Taiwanese and my dad's side is from Seattle) and I
              currently live in Atlanta, GA with my boyfriend, Mikey, and my
              wonderful cat, Katya Ravioli Brindle — we call her Kat for short.
              You'll usually find me busy in the kitchen or glued to my couch or
              desk playing Elden Ring, Hearthstone, or Overwatch in my free
              time. I'm also a big fan of the outdoors and love a good hike!
            </p>
            <p>
              If you like what you see here, don't hesitate to reach out through{" "}
              <a
                href="https://www.linkedin.com/in/colin-brindle"
                target="_blank"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
