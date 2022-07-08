import React from "react";

import { Image } from "react-bootstrap";
import unn from "../imgs/unn.png";

function UNN() {
  return (
    <div className="item-box">
      <Image
        fluid
        src={unn}
        alt="Image of Ukraine News Now news page"
        className="image-sizing"
      ></Image>
    </div>
  );
}

export default UNN;
