import React, { useContext } from "react";
import i18n from "../../../../i18n";
import { withNamespaces } from "react-i18next";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../../context/auth-context";

import "./index.css";

const NavLinks = ({ t }) => {
  const auth = useContext(AuthContext);

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <ul className="nav-links">
      <button onClick={() => changeLanguage("ru")}>ru</button>
      <button onClick={() => changeLanguage("en")}>en</button>
      <li>
        <NavLink to="/" exact>
          {t("All Users")}
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/places">{t("My Places")}</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">{t("Add Place")}</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">{t("Authentication")}</NavLink>
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
