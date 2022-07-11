import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import SiteNav from "../SiteNav/SiteNav";
import Bio from "../Bio/Bio";
import Portfolio from "../Portfolio/Portfolio";

function App() {
  return (
    <div>
      <div className="main-grid">
        <article>
          <Bio />
        </article>
        <article className="port-container">
          <Portfolio />
        </article>
      </div>
      <SiteNav />
    </div>
  );
}

export default App;
