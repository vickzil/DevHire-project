import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Hambugar from "../header/Hambugar";
import PageTitle from "../header/PageTitle";
import Sidebar from "../sidebar/Sidebar";

const Layouts = () => {
  return (
    <div className="main_wrapper">
      <Sidebar />

      <div className="content-wrapper">
        <Hambugar />
        <PageTitle />
        <Outlet />

        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
