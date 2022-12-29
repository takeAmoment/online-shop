import Spinner from "components/Spinner/Spinner";
import UserCart from "components/UserCart/UserCart";
import { useAppSelector } from "hooks/useSelector";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import React, { useEffect } from "react";
import { useLazyGetUserCartQuery } from "redux/fakestore/fakestore.api";
import "./UserPage.css";

const UserPage = () => {
  const { user } = useAppSelector((state) => state.user);
  const [fetchCart, { data, isLoading, isError }] = useLazyGetUserCartQuery();
  useEffect(() => {
    if (user) {
      fetchCart(user.id);
    }
  }, [user, fetchCart]);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div className="user__container">
      <div className="user__information">
        <div className="information__image"></div>
        <div className="information__block">
          <h4 className="user__name">
            <span>{user?.name.firstname.toUpperCase()}</span>
            <span> {user?.name.lastname.toUpperCase()}</span>
          </h4>
          <div className="block__columns">
            <ul className="personal__block">
              <span className="text__italic">Personal data:</span>
              <li>
                <strong>E-Mail:</strong> {user?.email}
              </li>
              <li>
                <strong>Phone:</strong> {user?.phone}
              </li>
              <li>
                <strong>Username:</strong> {user?.username}
              </li>
            </ul>
            <ul className="address__block">
              <span className="text__italic">Address:</span>
              <li>
                <strong>City:</strong> {user?.address.city}
              </li>
              <li>
                <strong>Street:</strong> {user?.address.street}{" "}
                {user?.address.number}
              </li>
              <li>
                <strong>Zipcode:</strong> {user?.address.zipcode}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="user__cart">
        <h3 className="title_underline">
          Cart of {""}
          {user &&
            user?.name.firstname.slice(0, 1).toUpperCase() +
              user?.name.firstname.slice(1)}
        </h3>
        <ul className="cart__products">
          {data &&
            data.map((item) => {
              return <UserCart key={item.id} cartElement={item} />;
            })}
        </ul>
      </div>
    </div>
  );
};

export default UserPage;
