import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const MainUserLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainUserLayout;
