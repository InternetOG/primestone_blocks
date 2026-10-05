import React from "react";
import { Link } from "react-router";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import WhyPrimeStone from "../components/WhyPrimeStone";
import Gallery from "../components/Gallery";
import TeamSection from "../components/TeamSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Products />
      <WhyPrimeStone />
      {/* <TeamSection /> */}
      <Gallery />
    </>
  );
};

export default Home;
