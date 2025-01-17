import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet-async";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../Assets/Company_Logo.png";
import { frontend_data } from "../../Page_Components/ServicePage/ServicesDisplayPage/servicesData";
const HomeNav = ({ linksList }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <Helmet>
        <title>Valsco Technology - Navigation</title>
      </Helmet>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo">
            <img src={logo} alt="icon" className="navbar-icon" />
            <h1>VALSCO TECHNOLOGY</h1>
          </NavLink>
          <div className="nav-menu">
            {linksList.map((navItem, index) => (
              <li
                className={
                  navItem.title === "Register"
                    ? "register-navbtn nav-item"
                    : "nav-item"
                }
                key={index}
              >
                {navItem.type === "Link" ? (
                  <Link
                    to={navItem.link}
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    {navItem.title}
                  </Link>
                ) : (
                  <NavLink
                    to={navItem.link}
                    state={navItem.title === "Register" ? frontend_data : {}}
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    {navItem.title}
                  </NavLink>
                )}
              </li>
            ))}
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
      <div className={click ? "mob-nav nav-menu active" : "mob-nav nav-menu"}>
        {linksList.map((navItem, index) => (
          <li className="nav-item" key={index}>
            {navItem.type === "Link" ? (
              <Link
                to={navItem.link}
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                {navItem.title}
              </Link>
            ) : (
              <NavLink
                to={navItem.link}
                state={navItem.title === "Register" ? frontend_data : {}}
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                {navItem.title}
              </NavLink>
            )}
          </li>
        ))}
      </div>
    </>
  );
};

export default HomeNav;
