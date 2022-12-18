import Footer from "components/Footer.tsx/Footer";
import Header from "components/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
