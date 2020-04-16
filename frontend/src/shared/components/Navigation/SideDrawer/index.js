import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { CSSTransition } from "react-transition-group";

import "./index.css";

const SideDrawer = props => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
};

export default SideDrawer;
