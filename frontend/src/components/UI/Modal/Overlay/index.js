//test!!!
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "../index.css";

const ModalOverlay = props => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : event => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

ModalOverlay.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  headerClass: PropTypes.string,
  header: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  contentClass: PropTypes.string,
  children: PropTypes.element.isRequired,
  footerClass: PropTypes.string,
  footer: PropTypes.object.isRequired
};

export default ModalOverlay;
