import React from "react";

import { Image } from "react-bootstrap";
import tiw2 from "../imgs/thisiswar2.png";
import GitHub from "../imgs/GitHub.png";
import tiw2Logo from "../imgs/tiw2logo.png";

function Pedestal() {
  return (
    <div className="pedestal hov-container">
      <Image fluid src={tiw2} alt="Image of This is War 2 landing page"></Image>
      <div className="hov-overlay">
        <div className="hov-text">
          <h1>This is War 2</h1>
          <div>
            <p>
              This project is a full stack MERN web application that allows
              users to sign up, create and equip their champions, and fight
              bosses. My designs were heavily inspired by classic 16-bit
              medieval fantasy games.
            </p>
            <p>
              <a>Technologies:</a> MongoDB, Express, React, Node.js, React
              BootStrap, Bcrypt, JWT
            </p>
            <p>
              <a>Role / Responsibilities:</a> Project Manager, Front-End Concept
              & Design, Landing Page, Log In / Sign-Up Function
            </p>
          </div>
          <a
            href="http://this-is-war-2.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={tiw2Logo}
              alt="This is War 2 logo that links to the deployed site"
              className="icon-size"
            ></Image>
          </a>
          <a
            href="https://github.com/Samuels1996/this-is-war-2"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={GitHub}
              alt="GitHub logo that links to This is War 2 repository"
              className="icon-size"
            ></Image>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pedestal;
