import React, { useState } from "react";
import { NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#FD5D14] text-fluid-md max-smd:text-fluid-sm text-white font-medium">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center  py-4">
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          className="inline-flex h-8 w-8 items-center justify-center border border-white bg-white text-[#030F27] transition hover:bg-[#030F27] hover:text-white lg:hidden"
        >
          {isMenuOpen ? <IoClose className="text-3xl" /> : <GiHamburgerMenu className="text-xl" />}
        </button>

        <nav className="">
          {isMenuOpen && (
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              className="fixed inset-0 z-10 bg-[#030F27]/50 lg:hidden"
            />
          )}

          <div className={`${isMenuOpen ? "translate-x-0" : "-translate-x-full"} fixed left-0 top-0 z-20 flex h-full w-72 flex-col bg-[#030F27] px-6 pb-8 pt-6 shadow-2xl transition-transform duration-300 lg:hidden`}>
            <div className="mb-12 flex items-center justify-between border-b border-white/20 pb-5">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FD5D14]">Menu</span>
              <button type="button" aria-label="Close navigation menu" onClick={closeMenu} className="text-2xl text-white hover:text-[#FD5D14]">
                <IoClose />
              </button>
            </div>
            <ul className="flex list-none flex-col gap-3 p-0">
              {[
                ["Home", "/"],
                // ["Our Blocks", "services"],
                ["About", "about"],
                ["Contact", "contact"],
              ].map(([label, path]) => (
                <li key={label}>
                  <NavLink onClick={closeMenu} className="block border-b border-white/10 py-4 text-lg no-underline transition hover:pl-2 hover:text-[#FD5D14]" to={path}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar max-lg:hidden">
            <ul className="flex justify-center items-center list-none gap-10">
              <li className="flex ">
                <NavLink className="no-underline" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <a className="products no-underline" to="ourblocks" href="#products">
                  Our Blocks
                </a>
              </li>
              <li>
                <NavLink className="no-underline" to="about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="no-underline" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

        </nav>

        <div className="flex gap-4">
          <ul className="list-none flex gap-8 text-white">
            <li>
              <a className="no-underline" href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a className="no-underline" href="#">
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
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
