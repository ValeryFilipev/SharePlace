import React from "react";
import { CSSTransition } from "react-transition-group";

import "./index.css";
import Backdrop from "../Backdrop";
import ModalOverlay from "./Overlay";

const Modal = (props) => (
  <>
    {props.show && <Backdrop onClick={props.onCancel} />}
    <CSSTransition
      in={props.show}
      mountOnEnter
      unmountOnExit
      timeout={200}
      classNames="modal"
    >
      <ModalOverlay {...props} />
    </CSSTransition>
  </>
);

export default Modal;
