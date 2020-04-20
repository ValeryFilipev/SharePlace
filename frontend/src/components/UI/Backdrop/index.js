import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./index.css";

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick} />,
    document.getElementById("backdrop-hook")
  );
};

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Backdrop;
