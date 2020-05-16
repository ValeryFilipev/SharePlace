import React, { useRef } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";

import Button from "../Button";

import "./index.css";

const ImageUpload = props => {
  const filePickerRef = useRef();

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const pickedHandler = event => {
    console.log(event.target);
  };

  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg, .png, .jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          <img src="" alt="Preview" />
        </div>
        <Button type="button" onClick={pickImageHandler}>
          {props.t("Pick Image")}
        </Button>
      </div>
    </div>
  );
};

ImageUpload.propTypes = {
  id: PropTypes.string.isRequired,
  center: PropTypes.bool
};

export default withNamespaces()(ImageUpload);
