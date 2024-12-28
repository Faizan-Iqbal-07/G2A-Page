import {NavLink} from "react-router-dom";
import Slider1 from "./Slider1";

import React from "react";

const FactSheet = () => {
  return (
    <div className="px-[3%] md:px-[7%] w-full pt-[3rem] md:pt-[5rem] bg-[#e8e8e8] py-[5rem] mb-[2.5rem] flex flex-col justify-between   ">
      <p className="text-[#2f82fb] tracking-[1rem] uppercase text-[1.6rem] lg:text-[1.3rem] mt-[2.5rem] lg:mt-0 text-center md:text-start ">
        G2A fact sheet
      </p>
      <div className="flex flex-col md:flex-row w-full justify-between gap-[3rem] ">
        <div className="flex flex-col ">
          <h3 className="text-[3rem] uppercase font-bold text-[#212529] text-center md:text-start ">
            Key Numbers
          </h3>
        </div>
        <div className="w-[80rem]  ">
          <Slider1 />
        </div>
      </div>

      <div className=" w-full   text-[#fff] text-[1.6rem] mt-[5rem]  md:mt-[2rem]  ">
        <NavLink
          to={"https://www.g2a.co/fact-sheet/"}
          className=" bg-[#2F82FB] py-[1.3rem] px-[4rem]  md:w-[20rem]  flex justify-center  hover:bg-[#318fff] transition ease-in-out duration-500 "
        >
          Read more
        </NavLink>
      </div>
    </div>
  );
};

export default FactSheet;
