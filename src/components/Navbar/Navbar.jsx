import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const NAVBAR_ROUTE = [
    { title: "Главная", link: "/", id: 1 },
    { title: "Все курсы", link: "/courses", id: 2 },
    { title: "О нас", link: "/about", id: 3 },
  ];
  return (
    <div className="main_navbar">
      <div className="main_navbar-section container">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="main_navbar-three">
          {NAVBAR_ROUTE.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className={
                location.pathname === item.link
                  ? "navbar_route-active"
                  : "navbar_route"
              }
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div>
          <Link to="/auth">Войти</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
