import React from "react";
import {Slider4Data} from "../data/Slider4Data";
import Slider4 from "./Slider4";
import {NavLink} from "react-router-dom";

const Awards = () => {
  return (
    <div className="bg-[#2f82fb] px-[7%]  flex flex-col  py-[3rem]   ">
      <p className="text-[#212529] text-center tracking-[1rem] uppercase text-[1.6rem] lg:text-[1.3rem] mt-[2.5rem] lg:mt-0 ">
        Media
      </p>
      <Slider4 />
      <div className=" text-[#fff] text-[1.6rem] mt-[3rem] text-center ">
        <NavLink
          to={"https://www.g2a.co/fact-sheet/"}
          className=" bg-[#fff] py-[1.3rem] px-[4.6rem]  text-[#000000] transition ease-in-out duration-500 "

        >
          See more Awards
        </NavLink>
      </div>
    </div>
  );
};

export default Awards;
