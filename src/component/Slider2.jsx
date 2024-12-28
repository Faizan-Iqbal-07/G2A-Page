import {G2ACards} from "../data/G2ACard";
import {NavLink} from "react-router-dom";
import {FaGreaterThan} from "react-icons/fa6";

import React, {useRef, useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../index.css";
import {Pagination} from "swiper/modules";

const Slider2 = () => {
  return (
    <div className="pt-[3rem] pr-[2rem]  ">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {G2ACards.map((data, idx) => (
          <SwiperSlide key={idx} className="max-w-[27rem] " >
            <div >
              <img src={data.img} alt="" />

              <h3 className="mt-[2rem] mb-[1.5rem] text-[2rem] text-[#000000de] font-semibold	 ">
                {data.heading.slice(0,60 )}...
              </h3>
              <p className="text-[1.5rem]">{data.paragraph.slice(0,160)} ... </p>
              <div className="text-[#318fff] text-[1.4rem] flex items-center gap-6 ">
                <NavLink to= {data.links} >Read More</NavLink>
                <div className="font-bold  ">
                  <FaGreaterThan />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider2;
