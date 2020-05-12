import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import Cancellation from "axios";

import PlaceList from "../components/PlaceList";
import ErrorModal from "../../components/UI/Error";
import Spinner from "../../components/UI/Spinner";

const UserPlaces = () => {
  const CancelToken = Cancellation.CancelToken;
  const source = CancelToken.source();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [loadedPlaces, setLoadedPlaces] = useState(undefined);

  const userId = useParams().userId;

  useEffect(() => {
    const fetchPlaces = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`/places/user/${userId}`, {
          cancelToken: source.token
        });

        setLoadedPlaces(response.data.places);
      } catch (err) {
        setError(err.message);
        source.cancel("Operation canceled by the user.");
        throw err;
      }
      setIsLoading(false);
    };
    fetchPlaces();
    // eslint-disable-next-line
  }, [userId]);

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && (
        <div className="center">
          <Spinner />
        </div>
      )}
      {!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} />}
    </>
  );
};

export default UserPlaces;
