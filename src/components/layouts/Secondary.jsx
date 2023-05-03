import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import NavBar from "../pages/shared/NavBar";

const Secondary = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Secondary;
