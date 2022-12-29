import Spinner from "components/Spinner/Spinner";
import UserCard from "components/UserCard/UserCard";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import React from "react";
import { useGetUsersQuery } from "redux/fakestore/fakestore.api";
import "./UsersPage.css";

const UsersPage = () => {
  const { data, isLoading, isError } = useGetUsersQuery();
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <ErrorPage />;
  }
  return (
    <div className="users__container">
      <h2 className="title">Users</h2>
      <ul className="users">
        {data &&
          data.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
      </ul>
    </div>
  );
};

export default UsersPage;
