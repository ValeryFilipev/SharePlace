//test!!!
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { withNamespaces } from "react-i18next";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../util/validators";
import { PLACES } from "../../api/routes";
import { useForm } from "../../hooks/form-hook";
import axios from "../../api/axios";
import Cancellation from "axios";

import "./NewPlace/index.css";

import Input from "../../components/UI/Form/Input";
import Button from "../../components/UI/Form/Button";
import Card from "../../components/UI/Card";
import Spinner from "../../components/UI/Spinner";
import ErrorModal from "../../components/UI/Error";

const UpdatePlace = ({ t }) => {
  const placeId = useParams().placeId;
  const CancelToken = Cancellation.CancelToken;
  const source = CancelToken.source();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [loadedPlace, setLoadedPlace] = useState(undefined);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false
      },
      description: {
        value: "",
        isValid: false
      }
    },
    false
  );

  useEffect(() => {
    const fetchPlace = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(PLACES + placeId, {
          cancelToken: source.token
        });

        setLoadedPlace(response.data.place);

        setFormData(
          {
            title: {
              value: response.data.place.title,
              isValid: true
            },
            description: {
              value: response.data.place.description,
              isValid: true
            }
          },
          true
        );
      } catch (err) {
        setError(err.message);
        source.cancel("Operation canceled by the user.");
        throw err;
      }
      setIsLoading(false);
    };
    fetchPlace();
    // eslint-disable-next-line
  }, [placeId, setFormData]);

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();

    console.log(formState.inputs);
  };

  if (isLoading) {
    return (
      <div className="center">
        <Spinner />
      </div>
    );
  }

  if (!loadedPlace && !error) {
    return (
      <div className="center">
        <Card>
          <h2>{t("Not found")}</h2>
        </Card>
      </div>
    );
  }

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      <ErrorModal error={error} onClear={errorHandler} />
      {!isLoading && loadedPlace && <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label={t("Title")}
          validators={[VALIDATOR_REQUIRE()]}
          errorText={t("Error text title")}
          onInput={inputHandler}
          initialValue={loadedPlace.title}
          initialValid={true}
        />
        <Input
          id="description"
          element="textarea"
          label={t("Description")}
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText={t("Error text description")}
          onInput={inputHandler}
          initialValue={loadedPlace.description}
          initialValid={true}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {t("Update Place")}
        </Button>
      </form>}
    </>
  );
};

export default withNamespaces()(UpdatePlace);
