import React from "react";
import { Link } from "react-router";
import { FaArrowRight, FaEnvelope, FaPhone } from "react-icons/fa6";
import sixInchBlock from "../assets/products/sixinch.png";
import nineInchBlock from "../assets/products/nineinch.png";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#f5f0e8] text-[#030f27]">
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-8">
        <section aria-labelledby="not-found-heading" className="max-w-xl">
          <p className="font-[Montserrat] text-sm font-bold uppercase tracking-[0.24em] text-[#a96548]">
            Error 404
          </p>
          <h1
            id="not-found-heading"
            className="mt-4 font-[Montserrat] text-4xl font-extrabold leading-[1.08] text-[#030f27] sm:text-5xl lg:text-6xl"
          >
            Looks like you took a wrong turn.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#59616b]">
            This page may have moved, or the address may be incorrect. Let&apos;s get you back to the blocks and information you need.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#030f27] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a96548] focus:outline-none focus:ring-2 focus:ring-[#a96548] focus:ring-offset-2"
            >
              Back to Home <FaArrowRight aria-hidden="true" />
            </Link>
            <Link
              to="/ourblocks"
              className="inline-flex min-h-12 items-center justify-center border border-[#030f27]/20 px-6 text-sm font-semibold text-[#030f27] transition-colors hover:border-[#a96548] hover:text-[#a96548] focus:outline-none focus:ring-2 focus:ring-[#a96548] focus:ring-offset-2"
            >
              Browse Our Blocks
            </Link>
          </div>

          <div className="mt-10 border-t border-[#030f27]/15 pt-5">
            <p className="text-sm font-semibold text-[#030f27]">
              Need a hand finding something?
            </p>
            <div className="mt-3 flex flex-col gap-3 text-sm sm:flex-row sm:gap-6">
              <a
                href="tel:+2348031234567"
                className="inline-flex items-center gap-2 text-[#59616b] transition-colors hover:text-[#a96548]"
              >
                <FaPhone aria-hidden="true" className="text-[#a96548]" />
                (+234) 803 123 4567
              </a>
              <a
                href="mailto:primestoneblocks@gmail.com"
                className="inline-flex items-center gap-2 text-[#59616b] transition-colors hover:text-[#a96548]"
              >
                <FaEnvelope aria-hidden="true" className="text-[#a96548]" />
                Email PrimeStone
              </a>
            </div>
          </div>
        </section>

        <aside aria-label="PrimeStone concrete block products" className="relative mx-auto w-full max-w-lg">
          <div className="absolute -right-3 -top-3 h-20 w-20 border-r-2 border-t-2 border-[#c97d5a] sm:-right-5 sm:-top-5 sm:h-28 sm:w-28" />
          <div className="relative grid grid-cols-2 items-end gap-3 border border-[#ded7ce] bg-white px-4 pb-5 pt-8 sm:gap-6 sm:px-8 sm:pb-8 sm:pt-12">
            <figure className="m-0 text-center">
              <div className="flex h-48 items-center justify-center sm:h-64">
                <img
                  src={sixInchBlock}
                  alt="6-inch concrete block"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <figcaption className="mt-3 border-t border-[#ded7ce] pt-3 font-[Montserrat] text-xs font-bold uppercase tracking-[0.12em] text-[#030f27] sm:text-sm">
                6-inch block
              </figcaption>
            </figure>
            <figure className="m-0 text-center">
              <div className="flex h-48 items-center justify-center sm:h-64">
                <img
                  src={nineInchBlock}
                  alt="9-inch concrete block"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <figcaption className="mt-3 border-t border-[#ded7ce] pt-3 font-[Montserrat] text-xs font-bold uppercase tracking-[0.12em] text-[#030f27] sm:text-sm">
                9-inch block
              </figcaption>
            </figure>
          </div>
          <div className="absolute -bottom-3 -left-3 h-20 w-20 border-b-2 border-l-2 border-[#c97d5a] sm:-bottom-5 sm:-left-5 sm:h-28 sm:w-28" />
        </aside>
      </div>
    </main>
  );
};

export default NotFound;