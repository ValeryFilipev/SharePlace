import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "../../api/axios";
// import { GET_PLACES_USER } from "../../api/routes";
// import Cancellation from "axios";
import { useHttpClient } from "../../hooks/http-hook";

import PlaceList from "../components/PlaceList";
import ErrorModal from "../../components/UI/Error";
import Spinner from "../../components/UI/Spinner";

const UserPlaces = () => {
  // const CancelToken = Cancellation.CancelToken;
  // const source = CancelToken.source();

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(undefined);
  const [loadedPlaces, setLoadedPlaces] = useState(undefined);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  // useEffect(() => {
  //   const fetchPlaces = async () => {
  //     setIsLoading(true);
  //
  //     try {
  //       const response = await axios.get(GET_PLACES_USER + userId, {
  //         cancelToken: source.token
  //       });
  //
  //       setLoadedPlaces(response.data.places);
  //     } catch (err) {
  //       setError(err.message);
  //       source.cancel("Operation canceled by the user.");
  //       throw err;
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchPlaces();
  //   // eslint-disable-next-line
  // }, [userId]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/places/user/${userId}`
        );
        setLoadedPlaces(responseData.places);
      } catch (err) {}
    };
    fetchPlaces();
  }, [sendRequest, userId]);

  // const errorHandler = () => {
  //   setError(null);
  // };

  const placeDeleteHandler = deletedPlaceId => {
    setLoadedPlaces(prevPlaces =>
      prevPlaces.filter(place => place.id !== deletedPlaceId)
    );
  };

  return (
    <>
      {/*<ErrorModal error={error} onClear={errorHandler} />*/}
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <Spinner />
        </div>
      )}
      {!isLoading && loadedPlaces && (
        <PlaceList items={loadedPlaces} onDeletePlace={placeDeleteHandler} />
      )}
    </>
  );
};

export default UserPlaces;
