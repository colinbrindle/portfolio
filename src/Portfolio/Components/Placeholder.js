import React from "react";

import { Image } from "react-bootstrap";
import placeholderImg from "../imgs/placeholder.png";

function Placeholder() {
  return (
    <div className="item-box">
      <Image
        fluid
        src={placeholderImg}
        alt="Placeholder image for new projects"
        className="image-sizing"
      ></Image>
    </div>
  );
}

export default Placeholder;
