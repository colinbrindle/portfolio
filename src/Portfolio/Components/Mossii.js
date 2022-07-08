import React from "react";

import { Image } from "react-bootstrap";
import mossii from "../imgs/drmossii.png";

function Mossii() {
  return (
    <div className="item-box">
      <Image
        fluid
        src={mossii}
        alt="Still from Dr Mossii promotional video"
        className="image-sizing"
      ></Image>
    </div>
  );
}

export default Mossii;
