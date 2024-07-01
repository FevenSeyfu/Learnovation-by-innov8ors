import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Dashboard/Header/Header";
import LeftSideBar from "../../Dashboard/Sidebar/LeftSideBar";
import RightSideBar from "../../Dashboard/Sidebar/RightSideBar";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-20 border overflow-y-auto">
          <LeftSideBar />
        </aside>
        <div className="flex flex-col flex-1">
          <Header className="w-auto" />
          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
        <aside className="w-20 border overflow-y-auto">
          <RightSideBar />
        </aside>
      </div>
    </div>
  );
};

export default Layout;
