import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import './CompanyInfo.css';

const CompanyInfo = () => {
  return (
    <section className="block bg-[#030F27] font-['Montserrat'] text-fluid-md max-smd:text-fluid-sm">
      <div className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-xl:grid max-xl:grid-cols-3 max-xl:gap-y-6 py-6">
        <div className="max-xl:col-span-3 ">
          <h1 className="text-[#FFFFFF] font-extrabold  max-xl:text-center companyName max-sm:text-[1.4rem]!">
            PRIMESTONE <span className="text-[#e87844] ">BLOCKS</span>
          </h1>
          <span className="block text-center font-['Poppins'] font-normal leading-tight text-[#e0e0da]">
            Building a solid future brick by brick
          </span>
        </div>

        <div className="max-xl:col-span-3 max-md:hidden"><hr className="text-[#FD5D14] dark:text-[#FD5D14] opacity-20"/></div>

        <div className="flex gap-3 justify-center items-center max-md:hidden">
          <div className="border border-solid border-[#FD5D14] p-2">
            <FaPhone className="text-[#FD5D14] " />
          </div>
          <p className="grid">
            <a
              href="tel:+234 803 123 4567"
              className="font-extrabold leading-tight text-[#e0e0da] hover:text-[#FD5D14]"
            >
              (+234) 815 354 4441
            </a>
          </p>
        </div>

        <div className="flex gap-3 justify-center items-center max-md:hidden">
          <div className="border border-solid border-[#FD5D14] p-2">
            <MdEmail className=" text-[#FD5D14]" />
          </div>
          <p className="grid">
            <a
              href="mailto:primestoneblocks@gmail.com"
              className=" font-extrabold leading-tight text-[#e0e0da] hover:text-[#FD5D14]"
            >
              primestoneblocks@gmail.com
            </a>
          </p>
        </div>

        <div className="flex gap-3 justify-center items-center max-md:hidden">
          <div className="border border-solid border-[#FD5D14] p-2">
            <MdLocationPin className=" text-[#FD5D14]" />
          </div>
          <p className="grid font-extrabold leading-tight text-[#e0e0da] hover:text-[#FD5D14]">
            Lekki-Lagos, Nigeria
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;