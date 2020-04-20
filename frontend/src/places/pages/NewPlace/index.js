import React from "react";
import { withNamespaces } from "react-i18next";

import Input from "../../../components/UI/Form/Input";
import Button from "../../../components/UI/Form/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../../util/validators";
import { useForm } from "../../../hooks/form-hook";

import "./index.css";

const NewPlace = ({ t }) => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false
      },
      description: {
        value: "",
        isValid: false
      },
      address: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // ToDo: send this to the back-end!
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label={t("Title")}
        validators={[VALIDATOR_REQUIRE()]}
        errorText={t("Error text title")}
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label={t("Description")}
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText={t("Error text description")}
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label={t("Address")}
        validators={[VALIDATOR_REQUIRE()]}
        errorText={t("Error text address")}
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        {t("Add Place")}
      </Button>
    </form>
  );
};

export default withNamespaces()(NewPlace);
