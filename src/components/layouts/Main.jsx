import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
