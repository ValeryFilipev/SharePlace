//test!!!
import React from "react";
import { withNamespaces } from "react-i18next";
import PropTypes from "prop-types";

import Card from "../../../components/UI/Card";
import PlaceItem from "../PlaceItem";
import Button from "../../../components/UI/Form/Button";
import { ADD_PLACE } from "../../../api/routes";

import "./index.css";

const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>{props.t("No places found")}</h2>
          <Button to={ADD_PLACE}>{props.t("Share place")}</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

PlaceList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    _id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    address: PropTypes.string,
    location: PropTypes.objectOf(PropTypes.number),
    creator: PropTypes.string,
    __v: PropTypes.number
  }))
};

export default withNamespaces()(PlaceList);
