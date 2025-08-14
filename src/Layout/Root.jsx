import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <NavBar />
      <main className="flex justify-center items-center min-h-[400px] text-5xl font-semibold">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
