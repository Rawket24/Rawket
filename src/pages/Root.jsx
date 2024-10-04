// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        {/* This is where child components (pages) will be rendered */}
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
