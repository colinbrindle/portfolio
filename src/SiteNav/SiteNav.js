import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import logo from "../Portfolio/imgs/logoW.svg";

function SiteNav() {
  return (
    <header className="primary-header d-flex">
      <img src={logo} className="logo" alt="My site logo"></img>
      <nav>
        <ul className="primary-nav d-flex">
          <li>
            <a
              href="https://github.com/colinbrindle"
              target="_blank"
              className="primary-nav-link"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/colin-brindle"
              target="_blank"
              className="primary-nav-link"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default SiteNav;
