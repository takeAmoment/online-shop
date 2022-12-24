import PageLayout from "components/PageLayout/PageLayout";
import AboutPage from "pages/AboutPage/AboutPage";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import LoginPage from "pages/LoginPage/LoginPage";
import MainPage from "pages/MainPage/MainPage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddUserPage from "pages/AddUserPage/AddUserPage";
import CartPage from "pages/CartPage/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<AddUserPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
