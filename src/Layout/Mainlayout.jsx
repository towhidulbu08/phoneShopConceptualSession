import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header/NavBar/NavBar";

const Mainlayout = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <NavBar></NavBar>
      <div className="py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Mainlayout;
