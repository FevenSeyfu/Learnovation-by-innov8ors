import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../LandingPage/common/Header";
import Footer from "../../LandingPage/common/Footer";

const Layout = () => {
  return (
    <div >
      <Header />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
