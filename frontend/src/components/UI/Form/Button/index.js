import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./index.css";

const Button = props => {
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || "default"} ${props.inverse &&
          "button--inverse"} ${props.danger && "button--danger"}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button button--${props.size || "default"} ${props.inverse &&
          "button--inverse"} ${props.danger && "button--danger"}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button button--${props.size || "default"} ${props.inverse &&
        "button--inverse"} ${props.danger && "button--danger"}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  size: PropTypes.string,
  inverse: PropTypes.bool,
  danger: PropTypes.bool,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  exact: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
