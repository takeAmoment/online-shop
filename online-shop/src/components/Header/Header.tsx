import { useAppSelector } from "hooks/useSelector";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <header className="header">
      <div className="header__logo">EShop</div>
      <nav className="header__menu">
        <ul className="menu__list">
          <li className="list__link">
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li className="list__link">
            <NavLink to="/about" className="link">
              About
            </NavLink>
          </li>
          <li className="list__link">
            <NavLink to="/login" className="link">
              Login
            </NavLink>
          </li>
          <li className="list__link">
            <NavLink to="/registration" className="link">
              Sign up
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="/cart" className="cart">
        <span className="cart__amount">{cart.length}</span>
      </NavLink>
    </header>
  );
};

export default Header;
