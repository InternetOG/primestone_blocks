import React from "react";
import { Link } from "react-router";
import TeamSection from "../components/TeamSection";
import blockworkImage from "../assets/hero_section/6.jpg";

const About = () => {
  return (
    <div className="bg-[#f5f0e8]">
      <section
        aria-labelledby="about-heading"
        className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-2 md:items-center lg:px-8 lg:py-24"
      >
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a96548]">
            About Primestone
          </p>
          <h1
            id="about-heading"
            className="mt-4 font-[Montserrat] text-4xl font-bold leading-tight tracking-[-0.03em] text-[#030f27] sm:text-5xl"
          >
            The right blocks for a strong foundation.
          </h1>
          <p className="mt-5 text-base leading-7 text-[#59616b]">
            Primestone Blocks supplies high-quality 6-inch and 9-inch concrete
            blocks across Lekki, Lagos. We partner with homeowners, builders,
            and contractors to deliver dependable materials directly to their
            project sites.
          </p>
          <p className="mt-4 text-base leading-7 text-[#59616b]">
            Whether you need assistance calculating quantities or arranging
            site delivery, our team is ready to assist.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex min-h-12 items-center justify-center bg-[#c97d5a] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#b76f4e]"
          >
            Contact Us
          </Link>
        </div>

        <img
          src={blockworkImage}
          alt="Concrete blockwork on a building project"
          className="aspect-[4/3] w-full object-cover"
        />
      </section>

      <TeamSection />
    </div>
  );
};

export default About;