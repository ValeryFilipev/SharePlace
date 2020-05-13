//test!!!
import React, { useContext } from "react";
import i18n from "../../../i18n";
import { withNamespaces } from "react-i18next";
import { NavLink } from "react-router-dom";
import { ROOT, MY_PLACES, ADD_PLACE, AUTH } from "../../../api/routes";

import { AuthContext } from "../../../context/auth-context";

import "./index.css";

const NavLinks = ({ t }) => {
  const auth = useContext(AuthContext);

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <ul className="nav-links">
      <li>
        <button onClick={() => changeLanguage("ru")}>{t("ru")}</button>
        <button onClick={() => changeLanguage("en")}>{t("en")}</button>
      </li>
      <li>
        <NavLink to={ROOT} exact>
          {t("All Users")}
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to={ROOT + auth.userId + MY_PLACES}>{t("My Places")}</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to={ADD_PLACE}>{t("Add Place")}</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to={AUTH}>{t("Authentication")}</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>{t("Log Out")}</button>
        </li>
      )}
    </ul>
  );
};

export default withNamespaces()(NavLinks);
