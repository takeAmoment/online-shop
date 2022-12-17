import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default PageLayout;
