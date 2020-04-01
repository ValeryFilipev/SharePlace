import React from "react";

import Input from "../../../shared/components/UI/Form/Input";

import "./index.css";

const NewPlace = () => (
  <form className="place-form">
    <Input element="input" type="text" label="Title" />
  </form>
);

export default NewPlace;
