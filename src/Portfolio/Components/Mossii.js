import React from "react";

import { Image } from "react-bootstrap";
import mossii from "../imgs/drmossii.png";

function Mossii() {
  return (
    <div className="item-box hov-container">
      <Image
        fluid
        src={mossii}
        alt="Still from Dr Mossii promotional video"
        className="image-sizing"
      ></Image>
      <div className="hov-overlay">
        <div className="hov-text">
          <h1>Dr Mossii</h1>
          <div>
            <p>
              My current focus! A new, natural based analgesic remedy. Stay
              tuned for something great...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mossii;
