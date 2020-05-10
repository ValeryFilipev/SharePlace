import React from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";

import Modal from "../Modal";
import Button from "../Form/Button";

const ErrorModal = props => {
  return (
    <Modal
      onCancel={props.onClear}
      header={props.t("Error modal header")}
      show={!!props.error}
      footer={<Button onClick={props.onClear}>{props.t("Okay")}</Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

ErrorModal.propTypes = {
  onClear: PropTypes.func.isRequired,
  error: PropTypes.any
};

export default withNamespaces()(ErrorModal);
