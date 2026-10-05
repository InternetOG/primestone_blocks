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
                  Tell us what you need
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Let us know whether you need 6-inch or 9-inch blocks and the quantity you have in mind.
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
                  If you need delivery, share where the blocks are needed so the team can discuss the arrangements.
                </p>
              </div>
            </article>

            <article className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-6">
              <span className="font-[Montserrat] text-lg font-bold text-[#d69a7f]">
                03
              </span>
              <div>
                <h3 className="font-[Montserrat] text-lg font-bold text-white">
                  Discuss the details
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Contact PrimeStone to confirm availability, pricing, and delivery options for your project.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    // Second Why Prime Stone Section
    // <section
    //     id="how-it-works"
    //     aria-labelledby="ordering-heading"
    //     className="bg-white py-16 sm:py-20 lg:py-24"
    //   >
    //     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //       <div className="mx-auto max-w-2xl text-center">
    //         <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a96548]">
    //           How ordering works
    //         </p>
    //         <h2
    //           id="ordering-heading"
    //           className="mt-3 font-[Montserrat] text-3xl font-bold leading-tight text-[#030f27] sm:text-4xl"
    //         >
    //           Get your project moving in three steps.
    //         </h2>
    //         <p className="mt-4 text-sm leading-6 text-[#59616b] sm:text-base">
    //           Tell us what you need, and our team can discuss product
    //           availability and delivery with you.
    //         </p>
    //       </div>

    //       <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
    //         <li className="border-t-2 border-[#c97d5a] pt-5">
    //           <span className="font-[Montserrat] text-sm font-bold text-[#a96548]">
    //             STEP 01
    //           </span>
    //           <h3 className="mt-3 font-[Montserrat] text-xl font-bold text-[#030f27]">
    //             Tell us what you need
    //           </h3>
    //           <p className="mt-2 text-sm leading-6 text-[#59616b]">
    //             Let us know whether you need 6-inch or 9-inch blocks and the
    //             quantity you have in mind.
    //           </p>
    //         </li>

    //         <li className="border-t-2 border-[#c97d5a] pt-5">
    //           <span className="font-[Montserrat] text-sm font-bold text-[#a96548]">
    //             STEP 02
    //           </span>
    //           <h3 className="mt-3 font-[Montserrat] text-xl font-bold text-[#030f27]">
    //             Share your site location
    //           </h3>
    //           <p className="mt-2 text-sm leading-6 text-[#59616b]">
    //             If you need delivery, share where the blocks are needed so the
    //             team can discuss the arrangements.
    //           </p>
    //         </li>

    //         <li className="border-t-2 border-[#c97d5a] pt-5">
    //           <span className="font-[Montserrat] text-sm font-bold text-[#a96548]">
    //             STEP 03
    //           </span>
    //           <h3 className="mt-3 font-[Montserrat] text-xl font-bold text-[#030f27]">
    //             Discuss the details
    //           </h3>
    //           <p className="mt-2 text-sm leading-6 text-[#59616b]">
    //             Contact PrimeStone to confirm availability, pricing, and
    //             delivery options for your project.
    //           </p>
    //         </li>
    //       </ol>

    //       <div className="mt-10 text-center">
    //         <Link
    //           to="/contact"
    //           className="inline-flex min-h-12 items-center justify-center bg-[#030f27] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a96548]"
    //         >
    //           Start an enquiry
    //         </Link>
    //       </div>
    //     </div>
    //   </section>
  );
};

export default WhyPrimeStone;
