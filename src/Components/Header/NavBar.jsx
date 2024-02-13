import React, { useState } from "react";
import "./NavBar.css";
import Logo from "../../../public/assets/shared/logo.svg";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg navbar-expand-md ps-lg-5 ps-md-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Space Website
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <div className="glass-container justify-content-end navbar-nav pe-3">
                <li className="nav-item li-color" data-bs-dismiss="offcanvas">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    aria-current="page"
                    to="/"
                  >
                    00 HOME
                  </NavLink>
                </li>
                <li className="nav-item li-color" data-bs-dismiss="offcanvas">
                  <NavLink
                    className="nav-link li-color"
                    activeclassname="active"
                    aria-current="page"
                    to="/Destination"
                  >
                    01 DESTINATION
                  </NavLink>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <NavLink
                    className="nav-link li-color"
                    activeclassname="active"
                    aria-current="page"
                    to="/Crew"
                  >
                    02 CREW
                  </NavLink>
                </li>
                <li className="nav-item li-color" data-bs-dismiss="offcanvas">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/Technology"
                  >
                    03 TECHNOLOGY
                  </NavLink>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
