import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.css";

// Importing portfolio components
import Pedestal from "./Components/Pedestal";
import TIW from "./Components/TIW";
import UNN from "./Components/UNN";
import Mossii from "./Components/Mossii";
import Placeholder from "./Components/Placeholder";

function Portfolio() {
  return (
    <main className="portfolio-grid">
      <article className="grid-col-over-2">
        <Pedestal />
      </article>
      <article>
        <TIW />
      </article>
      <article>
        <UNN />
      </article>
      <article>
        <Mossii />
      </article>
      <article>
        <Placeholder />
      </article>
    </main>
  );
}

export default Portfolio;
