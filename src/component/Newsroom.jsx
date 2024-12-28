import React from "react";
import {NavLink} from "react-router-dom";
import Slider2 from "./Slider2";
const Newsroom = () => {
  return (
    <div className="min-h-[100vh] px-[3%] md:px-[7%] w-full pt-[2.5rem] pb-[4rem] ">
      <div className="flex flex-col md:flex-row items-start  md:items-center justify-between" >
        <div className="flex flex-col ">
          <p className="text-[#2f82fb] tracking-[1rem] uppercase text-[1.6rem] lg:text-[1.3rem] mt-[2.5rem] lg:mt-0 text-center md:text-start">
            Newsroom
          </p>
          <h1 className="uppercase text-[4rem] leading-[4rem] lg:text-[6rem] lg:leading-[7rem]	font-bold text-[#212529] text-center md:text-start ">
            What's new on G2A
          </h1>
        </div>

        <div className="w-[20rem] text-[#fff] text-[1.6rem] mt-[3rem]  ">
          <NavLink
            to={"https://www.g2a.co/fact-sheet/"}
            className=" bg-[#2F82FB] py-[1.3rem] px-[4.6rem]  hover:bg-[#318fff] transition ease-in-out duration-500 "
          >
            View All
          </NavLink>
        </div>
      </div>

      <Slider2 />
    </div>
  );
};

export default Newsroom;
