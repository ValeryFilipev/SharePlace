import React from "react";

import Input from "../../../shared/components/UI/Form/Input";
import { VALIDATOR_REQUIRE } from "../../../shared/util/validators";

import "./index.css";

const NewPlace = () => (
  <form className="place-form">
    <Input
      element="input"
      type="text"
      label="Title"
      validators={[VALIDATOR_REQUIRE()]}
      errorText="Please enter a valid title."
    />
  </form>
);

export default NewPlace;
