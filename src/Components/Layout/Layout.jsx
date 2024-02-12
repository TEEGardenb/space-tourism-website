import React from "react";
import "../Layout/Layout.css";
import NavBar from "../Header/NavBar";
import MyRoutes from "../MyRoutes/MyRoutes";

const Layout = () => {
  return (
    <div className="all-content">
      <NavBar />
      <MyRoutes />
    </div>
  );
};

export default Layout;
