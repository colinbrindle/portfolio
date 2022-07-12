import React from "react";

import { Image } from "react-bootstrap";
import tiw from "../imgs/thisiswar.png";
import tiwLogo from "../imgs/tiwlogo.svg";
import GitHub from "../imgs/GitHub.png";

function TIW() {
  return (
    <div className="item-box hov-container">
      <Image
        fluid
        src={tiw}
        alt="Image of This is War landing page"
        className="image-sizing"
      ></Image>
      <div className="hov-overlay">
        <div className="hov-text">
          <h1>This is War!</h1>
          <div>
            <p>
              This is War! was my first foray into developing a full-stack
              application (and the first game in the{" "}
              <strong>
                <i>highly coveted</i>
              </strong>{" "}
              This is War series).
            </p>
            <p>
              <a>Technologies:</a> Node.js, MySQL, Express Sessions, Handlebars,
              Dotenv, Bcrypt, and BootStrap.
            </p>
            <p>
              <a>Role / Responsibilities:</a> MySQL Database, Log In / Log Out
              Function, Landing Page Design
            </p>
          </div>
          <a
            href="http://thisiswar.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              fluid
              src={tiwLogo}
              alt="This is War! logo that links to deployed site"
              className="icon-size"
            ></Image>
          </a>
          <a
            href="https://github.com/jdmill/this-is-war"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              fluid
              src={GitHub}
              alt="GitHub logo that links to This is War! repository"
              className="icon-size"
            ></Image>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TIW;
