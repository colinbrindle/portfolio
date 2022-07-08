import React from "react";

import { Image } from "react-bootstrap";
import tiw2 from "../imgs/thisiswar2.png";

function Pedestal() {
  return (
    <div className="pedestal">
      <Image fluid src={tiw2} alt="Image of This is War 2 landing page"></Image>
    </div>
  );
}

export default Pedestal;
