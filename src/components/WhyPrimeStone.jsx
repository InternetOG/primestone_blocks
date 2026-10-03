import React from "react";
import { Link } from "react-router";

const WhyPrimeStone = () => {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-heading"
      className="bg-[#030f27] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d69a7f]">
              Why choose PrimeStone
            </p>
            <h2
              id="why-choose-heading"
              className="mt-3 font-[Montserrat] text-3xl font-bold leading-tight text-[#f5f0e8] sm:text-4xl"
            >
              Practical support for your next build.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-white/70 sm:text-base">
              Get the block options you need, delivery support for your site,
              and a team you can contact about your project.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex min-h-11 items-center justify-center bg-[#c97d5a] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#b76f4e]"
            >
              Discuss your project
            </Link>
          </div>

          <div className="divide-y divide-white/15 border-y border-white/15">
            <article className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-6">
              <span className="font-[Montserrat] text-lg font-bold text-[#d69a7f]">
                01
              </span>
              <div>
                <h3 className="font-[Montserrat] text-lg font-bold text-white">
                  Block options for different projects
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Choose between 6-inch and 9-inch blocks, then ask our team
                  which option suits your requirements.
                </p>
              </div>
            </article>

            <article className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-6">
              <span className="font-[Montserrat] text-lg font-bold text-[#d69a7f]">
                02
              </span>
              <div>
                <h3 className="font-[Montserrat] text-lg font-bold text-white">
                  Delivery to your site
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Arrange block delivery for your project by sharing your site
                  location and required quantity with us.
                </p>
              </div>
            </article>

            <article className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-6">
              <span className="font-[Montserrat] text-lg font-bold text-[#d69a7f]">
                03
              </span>
              <div>
                <h3 className="font-[Montserrat] text-lg font-bold text-white">
                  A team you can reach
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Talk with PrimeStone about product availability, quantities,
                  and delivery arrangements before you order.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPrimeStone;
