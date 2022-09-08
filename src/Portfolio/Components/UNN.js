import React from "react";

import { Image } from "react-bootstrap";
import unn from "../imgs/unn.png";
import unnLogo from "../imgs/unnlogo.png";
import GitHub from "../imgs/GitHub.png";

function UNN() {
  return (
    <div className="item-box hov-container">
      <Image
        fluid
        src={unn}
        alt="Image of Ukraine News Now news page"
        className="image-sizing"
      ></Image>
      <div className="hov-overlay">
        <div className="hov-text">
          <h1>Ukraine News Now</h1>
          <div>
            <p>
              Ukraine News Now is a one stop shop for relevant and up-to-date
              news on the illegal Russian invasion of Ukraine.
            </p>
            <p>
              <a>Technologies:</a> Node.js, CSS, BootStrap, News API, Charity
              Navigator API.
            </p>
            <p>
              <a>Role / Responsibilities:</a> Concept, Get Informed Page, API
              Integration
            </p>
          </div>
          <a
            href="https://fisher-davis.github.io/Ukraine-News-Now/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              fluid
              src={unnLogo}
              alt="UNN logo that links to deployed site"
              className="icon-size"
            ></Image>
          </a>
          <a
            href="https://github.com/colinbrindle/Ukraine-News-Now"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              fluid
              src={GitHub}
              alt="GitHub logo that links to UNN repository"
              className="icon-size"
            ></Image>
          </a>
        </div>
      </div>
    </div>
  );
}

export default UNN;
