import React from "react";
import {NavLink} from "react-router-dom";
import contactpage from "../assets/contactpage.png";
const Home = () => {
  return (
    <div className="bg-[#212121] flex flex-col-reverse lg:flex-row  px-[3%] sm:px-[7%] w-full pb-[5rem] md:pb-0  pt-[1rem] lg:pt-[10rem]  ">
      <div className="flex  flex-col gap-[2rem]">
        <p className="text-[#2f82fb] tracking-[1.2rem] uppercase text-[1.6rem] lg:text-[1.3rem] mt-[2.5rem] lg:mt-0 text-center md:text-start ">
          what is g2a
        </p>
        <h1 className="uppercase text-[4rem] leading-[4rem] lg:text-[6rem] lg:leading-[7rem]	font-bold text-[#fff] ">
          Global <br /> E-Commerce
        </h1>
        <h3 className=" text-[1.8rem]   lg:text-[2rem] text-[#fff] opacity-70 leading-[1rem] lg:leading-[3rem]	">
          World's largest marketplace for digital entertainment
        </h3>
        <div className="w-full text-[#fff] text-[1.6rem] flex flex-col  lg:flex-row lg:items-center ">
          <NavLink
            to={"https://www.g2a.co/how-to-sell-on-g2a/"}
            className="flex justify-center  bg-[#F05F00] py-[1.3rem] lg:py-[1rem] px-[4rem] mt-[2.3rem]  hover:bg-[#f05f00b3] transition ease-in-out duration-500 "
          >
            Start Selling
          </NavLink>
          <NavLink
            to={"https://www.g2a.com/"}
            className="flex justify-center  bg-[#2F82FB] py-[1.3rem] lg:py-[1rem] px-[4rem]   mt-[2.3rem] lg:ml-[3rem] hover:bg-[#318fff] transition ease-in-out duration-500 "
          >
            Start Buying
          </NavLink>
        </div>
      </div>

      <div className="pt-[8rem] mx-auto lg:mx-0 lg:mr-[3rem]">
        <img src={contactpage} alt="" />
      </div>
    </div>
  );
};

export default Home;
