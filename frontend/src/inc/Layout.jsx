import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="mx-auto" style={{ maxWidth: "1128px" }}>
        <div className="flex pt-20">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
