import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick} />,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
