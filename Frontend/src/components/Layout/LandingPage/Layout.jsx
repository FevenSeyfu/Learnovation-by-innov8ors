import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../LandingPage/Header/Header";
import Footer from "../../LandingPage/Footer/Footer";

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
