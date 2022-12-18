import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
      <div className="cart">
        <span className="cart__amount">0</span>
      </div>
    </header>
  );
};

export default Header;
