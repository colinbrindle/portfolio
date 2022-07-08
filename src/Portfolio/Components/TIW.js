import React from "react";

import { Image } from "react-bootstrap";
import tiw from "../imgs/thisiswar.png";

function TIW() {
  return (
    <div className="item-box">
      <Image
        fluid
        src={tiw}
        alt="Image of This is War landing page"
        className="image-sizing"
      ></Image>
    </div>
  );
}

export default TIW;
