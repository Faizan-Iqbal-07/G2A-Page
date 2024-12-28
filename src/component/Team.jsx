import React from "react";
import {NavLink} from "react-router-dom";

const Team = () => {
  return (
    <div className="px-[3%]  md:pl-[7%] pr-[2rem] bg-[#212121] min-w-[50%] py-[5rem]  ">
      <p className="text-[#2f82fb] tracking-[1rem]  uppercase text-[1.6rem] md:text-[1.3rem] mt-[2.5rem] md:mt-0  mb-[1rem] md:mb-0 text-center md:text-start ">
        We want you!
      </p>
      <h2 className="uppercase text-[4rem] leading-[4rem] md:text-[6rem] md:leading-[7rem]	font-bold text-center md:text-start  ">
        Join our team
      </h2>
      <ul className="pt-[4rem] pb-[5rem] ">
        <li className="border-b border-b-[#d8d8d8] py-[2rem]">
          <NavLink
            to="https://www.g2a.co/job-offer/senior-etl-engineer/64a54f57-6f2e-40d6-8fb7-9c312e7ab8da/"
            className="text-[1.8rem] text-[#ffffffde] font-bold "
          >
            Senior ETL Engineer
          </NavLink>
          <div className="flex justify-between pt-[0.7rem]">
            <p className="text-[1.4rem] text-[#ffffffde]">product-and-it</p>
            <p className="text-[1.6rem] text-[#ffffffb3]">
              Cracow Warsaw Rzeszow Remote
            </p>
          </div>
        </li>
        <li className="border-b border-b-[#d8d8d8] py-[2rem] ">
          <NavLink
            to="https://www.g2a.co/job-offer/junior-account-manager/35ef8476-dbdd-41a2-b5f6-f77950b912bf/"
            className="text-[1.8rem] text-[#ffffffde] font-bold "
          >
            Senior ETL Engineer
          </NavLink>
          <div className="flex justify-between pt-[0.7rem]">
            <p className="text-[1.4rem] text-[#ffffffde]">product-and-it</p>
            <p className="text-[1.6rem] text-[#ffffffb3]">
              Cracow Warsaw Rzeszow Remote
            </p>
          </div>
        </li>
        <li className="border-b border-b-[#d8d8d8] py-[2rem]">
          <NavLink
            to="https://www.g2a.co/job-offer/people-and-culture-business-partner/f99fc2d2-74f4-4b3c-9a45-d67ce06658b1/"
            className="text-[1.8rem] text-[#ffffffde] font-bold "
          >
            Senior ETL Engineer
          </NavLink>
          <div className="flex justify-between pt-[0.7rem]">
            <p className="text-[1.4rem] text-[#ffffffde]">product-and-it</p>
            <p className="text-[1.6rem] text-[#ffffffb3]">
              Cracow Warsaw Rzeszow Remote
            </p>
          </div>
        </li>
        <li className=" py-[2rem]">
          <NavLink
            to="https://www.g2a.co/job-offer/senior-sem-specialist/ec4a3673-539b-4844-a546-d4f64bc7be7d/"
            className="text-[1.8rem] text-[#ffffffde] font-bold "
          >
            Senior ETL Engineer
          </NavLink>
          <div className="flex justify-between pt-[0.7rem]">
            <p className="text-[1.4rem] text-[#ffffffde]">product-and-it</p>
            <p className="text-[1.6rem] text-[#ffffffb3]">
              Cracow Warsaw Rzeszow Remote
            </p>
          </div>
        </li>
      </ul>
      <div className="w-full text-[#fff] text-[1.5rem] mt-[3rem]  ">
        <NavLink
          to={"https://www.g2a.co/fact-sheet/"}
          className=" bg-[#2F82FB] py-[1.3rem] px-[4rem] md:w-[23rem]  flex justify-center   hover:bg-[#318fff] transition ease-in-out duration-500 "
        >
          Check out all offers
        </NavLink>
      </div>
    </div>
  );
};

export default Team;
