import UserCard from "components/UserCard/UserCard";
import React from "react";
import { useGetUsersQuery } from "redux/fakestore/fakestore.api";
import "./UsersPage.css";

const UsersPage = () => {
  const { data, isLoading } = useGetUsersQuery();
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
