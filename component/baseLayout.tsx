import React from "react";
import Sidebar from "./sideNavbar";

const BaseLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout__main-content">{children}</main>;
    </div>
  );
};

export default BaseLayout;