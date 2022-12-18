import Header from "components/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default PageLayout;
