import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-fluid-md max-smd:text-fluid-sm bg-[#030F27] bg-[url('https://demo.bosathemes.com/builderon/wp-content/uploads/sites/4/2021/06/builderon-img31.png')] bg-right bg-no-repeat bg-">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          {/* Logo goes here */}
          {/* <div className="text-teal-600">
            <svg
              className="h-8"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                fill="currentColor"
              />
            </svg>
          </div> */}

          <div className="mt-8 grid grid-cols-4 max-smd:grid w-full gap-8 lg:mt-0">
            <div className="col-span-5 mb-2">
              <div className="grid w-full justify-between gap-8 md:flex border border-white/15 bg-white/4 p-6 ">
                <div className="">
                  <p className="font-['Montserrat'] text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    PRIMESTONE <span className="text-[#e87844]">BLOCKS</span>
                  </p>
                  <p className="mt-2 font-['Poppins'] text-sm text-[#e0e0da]">
                    Building a solid future brick by brick
                  </p>
                </div>

                <div className="">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e87844]">
                    The PrimeStone newsletter
                  </p>
                  <h2 className="mt-2 font-['Montserrat'] text-2xl font-bold text-white sm:text-3xl">
                    Good things are building.
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
                    Get occasional product news, practical building updates, and
                    a closer look at what is happening at PrimeStone.
                  </p>

                  <form className="mt-5 w-full">
                    <label htmlFor="UserEmail" className="sr-only">
                      Email address
                    </label>
                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 sm:border sm:border-white/25 sm:bg-[#030f27] sm:p-1.5">
                      <input
                        type="email"
                        id="UserEmail"
                        placeholder="Enter your email address"
                        autoComplete="email"
                        className="min-h-12 w-full border border-white/25 bg-[#030f27] px-4 text-sm text-white placeholder:text-white/45 focus:border-[#e87844] focus:outline-none sm:border-0 sm:bg-transparent"
                      />
                      <button
                        type="submit"
                        className="inline-flex min-h-12 shrink-0 items-center justify-center bg-[#e87844] px-6 text-sm font-bold text-white transition-colors hover:bg-[#c96537] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e87844]"
                      >
                        Subscribe{" "}
                        <span className="ml-3" aria-hidden="true">
                          &rarr;
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className=" max-smd:col-span-2 w-full">
              <p className="font-medium text-white">Products</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#products"
                    className="text-[#D5D5D5] transition hover:opacity-75"
                  >
                    {" "}
                    6 Inch Block{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#products"
                    className="text-[#D5D5D5] transition hover:opacity-75"
                  >
                    {" "}
                    9 Inch Block{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="max-smd:col-span-2 w-full">
              <p className="font-medium text-white">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-[#D5D5D5] transition hover:opacity-75"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <Link
                    to="/#meet-the-team"
                    className="text-[#D5D5D5] transition hover:opacity-75"
                  >
                    {" "}
                    Meet the Team{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="max-smd:col-span-2 w-full">
              <p className="font-medium text-white">Contact Information</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="tel:+234 815 354 4441"
                    className="flex items-center text-[#D5D5D5] transition hover:opacity-75"
                  >
                    {" "}
                    <FaPhone className="text-[#FD5D14] mr-2" />
                    <span className="text-[#D5D5D5]">(+234) 815 354 4441</span>
                  </a>
                </li>

                <li>
                  <a
                    href="tel:+234 912 815 9045"
                    className="flex items-center text-[#D5D5D5] transition hover:opacity-75"
                  >
                    <FaMobileAlt className="text-[#FD5D14] mr-2" />
                    <span className="text-[#D5D5D5]">(+234) 912 815 9045</span>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:primestoneblocks@gmail.com"
                    className="flex items-center text-[#D5D5D5] transition hover:opacity-75"
                  >
                    <MdEmail className="text-[#FD5D14] mr-2" />
                    <span>primestoneblocks</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="max-smd:col-span-2 w-full">
              <p className="font-medium text-white">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-[#D5D5D5] transition hover:opacity-75"
                  >
                    {" "}
                    Returns Policy{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-[#D5D5D5] transition hover:opacity-75"
                  >
                    {" "}
                    Refund Policy{" "}
                  </a>
                </li>
              </ul>
            </div>

            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end text-white">
              <li>
                <a className="no-underline" href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  className="no-underline"
                  href="https://www.instagram.com/primestone_blocks_and_concrete/"
                >
                  <IoLogoInstagram />
                </a>
              </li>
              <li>
                <a className="no-underline" href="#">
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a className="no-underline" href="#">
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a className="no-underline" href="#">
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 max-xl:col-span-3">
          <hr className="text-white dark:text-white opacity-20" />
        </div>
        <div className="mt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-white">
              &copy; 2026. PrimeStone Concrete & Blocks. All rights reserved.
            </p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>

              <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  {" "}
                  Cookies{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
