//test!!!
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { withNamespaces } from "react-i18next";

import Input from "../../../components/UI/Form/Input";
import Button from "../../../components/UI/Form/Button";
import ErrorModal from "../../../components/UI/Error";
import Spinner from "../../../components/UI/Spinner";
import ImageUpload from "../../../components/UI/Form/ImageUpload";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../../util/validators";
import { useForm } from "../../../hooks/form-hook";
import { AuthContext } from "../../../context/auth-context";
import { ROOT } from "../../../api/routes";
import Cancellation from "axios";

import "./index.css";

const NewPlace = ({ t }) => {
  const CancelToken = Cancellation.CancelToken;
  const source = CancelToken.source();
  const auth = useContext(AuthContext);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

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
      },
      image: {
        value: null,
        isValid: false
      }
    },
    false
  );

  const placeSubmitHandler = async event => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", formState.inputs.title.value);
      formData.append("description", formState.inputs.description.value);
      formData.append("address", formState.inputs.address.value);
      formData.append("creator", auth.userId);
      formData.append("image", formState.inputs.image.value);

      await Cancellation({
        method: "post",
        url: "http://localhost:5000/api/places",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + auth.token
        }
      });

      setIsLoading(false);
      history.push(ROOT);
    } catch (err) {
      setError(err.message || t("Error message"));
      setIsLoading(false);
      source.cancel("Operation canceled by the user.");
      throw err;
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      <ErrorModal error={error} onClear={errorHandler} />
      <form className="place-form" onSubmit={placeSubmitHandler}>
        {isLoading && <Spinner asOverlay />}
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
        <ImageUpload id="image" onInput={inputHandler} errorText={t("Error image")} />
        <Button type="submit" disabled={!formState.isValid}>
          {t("Add Place")}
        </Button>
      </form>
    </>
  );
};

export default withNamespaces()(NewPlace);
