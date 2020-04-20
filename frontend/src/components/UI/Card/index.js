import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const Card = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Card;
