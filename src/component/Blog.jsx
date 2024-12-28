import React from "react";
import {NavLink} from "react-router-dom";
import intern from "../assets/intern.png";

const Blog = () => {
  return (
    <div className="px-[3rem]  md:pl-[13rem]	pr-[7%]	bg-[#212121]	py-[5rem] flex flex-col  items-center">
      <div>
        <p className="text-[#2f82fb] tracking-[1rem] uppercase text-[1.6rem] lg:text-[1.3rem] mt-[2.5rem] lg:mt-0 text-center md:text-start mb-[1.5rem] md:mb-0 ">
          Employee blog
        </p>
        <NavLink>
          <img src={intern} alt="" />
        </NavLink>
        <h3 className="text-[#ffffffde] text-[3rem] font-black pt-[3rem] pb-[2rem] mb-[0.8rem] text-center md:text-start">
          <NavLink> Interns had an awesome summer at G2A this year! </NavLink>
        </h3>
        <p className="text-[#ffffffb3] text-[1.6rem] text-center md:text-start">
          So, where did it all start? We needed new marketing &amp; UX
          specialists, but they were hard to find using old-fashioned methods.
          Our local job market seemed to lack such experts, and potential
          relocation proved to be too much of
        </p>
        <div className="w-full text-[#fff] text-[1.6rem] mt-[6.3rem]  ">
          <NavLink
            to={"https://www.g2a.co/fact-sheet/"}
            className=" bg-[#2F82FB] py-[1.3rem] px-[4rem]  md:w-[20rem]  flex justify-center   hover:bg-[#318fff] transition ease-in-out duration-500 "
          >
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Blog;
