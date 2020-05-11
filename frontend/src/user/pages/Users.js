import React, { useEffect, useState } from "react";
import axios from "../../api/axios";

import UsersList from "../components/UserList";
import ErrorModal from "../../components/UI/Error";
import Spinner from "../../components/UI/Spinner";

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [loadedUsers, setLoadedUsers] = useState(undefined);

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get("/users");

        setLoadedUsers(response.data.users);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

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
