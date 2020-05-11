import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import Cancellation from "axios";

import UsersList from "../components/UserList";
import ErrorModal from "../../components/UI/Error";
import Spinner from "../../components/UI/Spinner";

const Users = () => {
  const CancelToken = Cancellation.CancelToken;
  const source = CancelToken.source();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [loadedUsers, setLoadedUsers] = useState(undefined);

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get("/users", {
          cancelToken: source.token
        });

        setLoadedUsers(response.data.users);
      } catch (err) {
        setError(err.message);
        source.cancel("Operation canceled by the user.");
      }
      setIsLoading(false);
    };
    sendRequest();
  }, [source]);

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
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
    </>
  );
};

export default Users;
