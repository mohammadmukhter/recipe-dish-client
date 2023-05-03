import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../pages/shared/Banner";
import Footer from "../pages/shared/Footer";
import NavBar from "../pages/shared/NavBar";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar></NavBar>

      <Banner></Banner>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
