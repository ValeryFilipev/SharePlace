import React from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";

import UserItem from "../UserItem";
import Card from "../../../shared/components/UI/Card";

import "./index.css";

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>{props.t("No users")}</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

UsersList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    places: PropTypes.number
  }))
};

export default withNamespaces()(UsersList);
