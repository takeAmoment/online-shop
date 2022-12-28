import { useActions } from "hooks/actions";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { UserCardProps } from "types/types";
import "./UserCard.css";

const UserCard: FC<UserCardProps> = ({ user }) => {
  const { setUser } = useActions();
  const handleClick = () => {
    setUser(user);
  };

  return (
    <div className="user__card">
      <div className="user__image"></div>
      <div className="user__info">
        <h4 className="user__name">
          <span>{user.name.firstname.toUpperCase()}</span>
          <span> {user.name.lastname.toUpperCase()}</span>
        </h4>
        <p className="text">
          <strong>E-mail:</strong> {user.email}
        </p>
        <p className="text">
          <strong>Phone:</strong> {user.phone}
        </p>
        <Link to={`/users/${user.id}`}>
          <button className="user__button" onClick={handleClick}>
            More info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
