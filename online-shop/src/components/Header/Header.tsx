import { useAppSelector } from "hooks/useSelector";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const [isBurgerActive, setBurgerActive] = useState<boolean>(false);
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const handleClick = () => {
    console.log("click");
    if (isBurgerActive) {
      setBurgerActive(false);
      setIsMenuActive(false);
    } else {
      setBurgerActive(true);
      setIsMenuActive(true);
    }
  };

  return (
    <header className="header">
      <div className="header__logo">EShop</div>
      <nav className={isMenuActive ? "header__menu active" : "header__menu"}>
        <ul className="menu__list">
          <li className="list__link">
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li className="list__link">
            <NavLink to="/users" className="link">
              Users
            </NavLink>
          </li>
          <li className="list__link">
            <NavLink to="/login" className="link">
              Login
            </NavLink>
          </li>
          <li className="list__link">
            <NavLink to="/registration" className="link">
              Create User
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="/cart" className="cart">
        <span className="cart__amount">{cart.length}</span>
      </NavLink>
      <div className="menu__burger" onClick={handleClick}>
        <span className={isBurgerActive ? "line1 active" : "line1"}></span>
        <span className={isBurgerActive ? "line2 active" : "line2"}></span>
        <span className={isBurgerActive ? "line3 active" : "line3"}></span>
      </div>
    </header>
  );
};

export default Header;
