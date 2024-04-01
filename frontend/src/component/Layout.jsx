import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div style={{ width: "80vw" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
