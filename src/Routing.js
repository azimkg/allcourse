import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import CoursesPage from "./pages/Courses/CoursesPage";
import HomePage from "./pages/HomePages/HomePage";

const Routing = () => {
  const ROUTE_PATH = [
    { element: <HomePage />, link: "/", id: 1 },
    { element: <CoursesPage />, link: "/courses", id: 2 },
    { element: <AuthorizationPage />, link: "/auth", id: 3 },
    { element: <AboutPage />, link: "/about", id: 4 },
  ];
  return (
    <BrowserRouter>
      <Routes>
        {ROUTE_PATH.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
