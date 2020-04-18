import React from "react";
import PropTypes from "prop-types";

import Card from "../../../shared/components/UI/Card";
import PlaceItem from "../PlaceItem";
import Button from "../../../shared/components/UI/Form/Button";
import "./index.css";

const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. May be create one?</h2>
          <Button to="/places/new">Share place</Button>
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
          image={place.imageUrl}
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
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    address: PropTypes.string,
    location: PropTypes.objectOf(PropTypes.number),
    creator: PropTypes.string
  }))
};

export default PlaceList;
