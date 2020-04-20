import React, { useState, useContext } from "react";
import { withNamespaces } from "react-i18next";

import Card from "../../../components/UI/Card";
import Input from "../../../components/UI/Form/Input";
import Button from "../../../components/UI/Form/Button";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from "../../../util/validators";
import { useForm } from "../../../hooks/form-hook";
import { AuthContext } from "../../../context/auth-context";

import "./index.css";

const Auth = ({ t }) => {
  const auth = useContext(AuthContext);

  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false
      },
      password: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false
          }
        },
        false
      );
    }

    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = event => {
    event.preventDefault();

    console.log(formState.inputs);

    auth.login();
  };

  return (
    <Card className="authentication">
      <h2>{t("Login auth")}</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label={t("Your Name")}
            validators={[VALIDATOR_REQUIRE()]}
            errorText={t("Enter name")}
            onInput={inputHandler}
          />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label={t("E-Mail")}
          validators={[VALIDATOR_EMAIL()]}
          errorText={t("Valid email")}
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label={t("Password")}
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText={t("Valid password")}
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? t("Login") : t("SignUp")}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        {t("Switch to")} {isLoginMode ? t("SignUp") : t("Login")}
      </Button>
    </Card>
  );
};

export default withNamespaces()(Auth);
