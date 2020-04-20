import React, { useState, useContext } from "react";
import { withNamespaces } from "react-i18next";
import PropTypes from "prop-types";

import Card from "../../../components/UI/Card";
import Button from "../../../components/UI/Form/Button";
import Modal from "../../../components/UI/Modal";
import Map from "../../../components/UI/Map";
import { AuthContext } from "../../../context/auth-context";
import "./index.css";

const PlaceItem = props => {
  const auth = useContext(AuthContext);

  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("Deleting...");
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>{props.t("Close")}</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header={props.t("Are you sure")}
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={cancelDeleteHandler}>
              {props.t("Cancel")}
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              {props.t("Delete")}
            </Button>
          </>
        }
      >
        <p>{props.t("Delete modal body")}</p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              {props.t("View on Map")}
            </Button>
            {auth.isLoggedIn && (
              <Button to={`/places/${props.id}`}>{props.t("Edit")}</Button>
            )}
            {auth.isLoggedIn && (
              <Button danger onClick={showDeleteWarningHandler}>
                {props.t("Delete")}
              </Button>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};

PlaceItem.propTypes = {
  address: PropTypes.string.isRequired,
  coordinates: PropTypes.objectOf(PropTypes.number).isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default withNamespaces()(PlaceItem);
