import React from "react";
import Header from "../components/layouts/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/layouts/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="container mt-28">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
