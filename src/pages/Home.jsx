import React from "react";
import { Link } from "react-router";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import WhyPrimeStone from "../components/WhyPrimeStone";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Products />
      <WhyPrimeStone />
      <section
        id="how-it-works"
        aria-labelledby="ordering-heading"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a96548]">
              How ordering works
            </p>
            <h2
              id="ordering-heading"
              className="mt-3 font-[Montserrat] text-3xl font-bold leading-tight text-[#030f27] sm:text-4xl"
            >
              Get your project moving in three steps.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#59616b] sm:text-base">
              Tell us what you need, and our team can discuss product
              availability and delivery with you.
            </p>
          </div>

          <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
            <li className="border-t-2 border-[#c97d5a] pt-5">
              <span className="font-[Montserrat] text-sm font-bold text-[#a96548]">
                STEP 01
              </span>
              <h3 className="mt-3 font-[Montserrat] text-xl font-bold text-[#030f27]">
                Tell us what you need
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#59616b]">
                Let us know whether you need 6-inch or 9-inch blocks and the
                quantity you have in mind.
              </p>
            </li>

            <li className="border-t-2 border-[#c97d5a] pt-5">
              <span className="font-[Montserrat] text-sm font-bold text-[#a96548]">
                STEP 02
              </span>
              <h3 className="mt-3 font-[Montserrat] text-xl font-bold text-[#030f27]">
                Share your site location
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#59616b]">
                If you need delivery, share where the blocks are needed so the
                team can discuss the arrangements.
              </p>
            </li>

            <li className="border-t-2 border-[#c97d5a] pt-5">
              <span className="font-[Montserrat] text-sm font-bold text-[#a96548]">
                STEP 03
              </span>
              <h3 className="mt-3 font-[Montserrat] text-xl font-bold text-[#030f27]">
                Discuss the details
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#59616b]">
                Contact PrimeStone to confirm availability, pricing, and
                delivery options for your project.
              </p>
            </li>
          </ol>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center bg-[#030f27] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a96548]"
            >
              Start an enquiry
            </Link>
          </div>
        </div>
      </section>
      <Gallery />
    </>
  );
};

export default Home;
