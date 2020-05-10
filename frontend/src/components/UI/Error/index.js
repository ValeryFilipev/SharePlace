import React from "react";
import PropTypes from "prop-types";

import Modal from "../Modal";
import Button from "../Form/Button";

const ErrorModal = props => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An error occurred!"
      show={!!props.error}
      footer={<Button onClick={props.onClear}>Okay</Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

ErrorModal.propTypes = {
  onClear: PropTypes.func.isRequired,
  error: PropTypes.any
};

export default ErrorModal;
