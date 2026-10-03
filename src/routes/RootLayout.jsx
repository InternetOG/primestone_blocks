import React from "react";
import {Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CompanyInfo from "../components/CompanyInfo";


const RootLayout = () => {
  return (
    <>
    <CompanyInfo />
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  );
};

export default RootLayout;
