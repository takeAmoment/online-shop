import PageLayout from "components/PageLayout/PageLayout";
import AboutPage from "pages/AboutPage/AboutPage";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import MainPage from "pages/MainPage/MainPage";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
