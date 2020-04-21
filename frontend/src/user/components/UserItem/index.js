//test!!!
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";

import Avatar from "../../../components/UI/Avatar";
import Card from "../../../components/UI/Card";
import { generateCorrectText } from "../../../util/declensionNouns";
import "./index.css";

const UserItem = props => {
  const places = [props.t("place"), props.t("places"), props.t("Places")];

  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount}{" "}
              {props.placeCount >= 0 &&
                generateCorrectText(places, props.placeCount)}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

UserItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeCount: PropTypes.number.isRequired
};

export default withNamespaces()(UserItem);
