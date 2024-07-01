import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Dashboard/Header/Header";
import LeftSideBar from "../../Dashboard/Sidebar/LeftSideBar";
import RightSideBar from "../../Dashboard/Sidebar/RightSideBar";

const Layout = () => {
  return (
    <div >
      
      <LeftSideBar />
      <Header />
      <RightSideBar />
      <main >
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
