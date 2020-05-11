import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const Spinner = props => {
  return (
    <div className={`${props.asOverlay && "loading-spinner__overlay"}`}>
      <div className="lds-dual-ring" />
    </div>
  );
};

Spinner.propTypes = {
  asOverlay: PropTypes.bool
};

export default Spinner;
