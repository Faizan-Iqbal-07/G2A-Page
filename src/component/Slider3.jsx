import {MediaCard} from "../data/MediaCard";
import {NavLink} from "react-router-dom";
import {FaGreaterThan} from "react-icons/fa6";

import React, {useRef, useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../index.css";
import {Pagination} from "swiper/modules";

const Slider3 = () => {
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
        {MediaCard.map((data, idx) => (
          <SwiperSlide key={idx} className="max-w-[28rem] pr-[2rem] pt-[3rem] ">
            <div  >
              <img src={data.img} alt="" className="h-[3.3rem]"/>

              <h4
                className="italic mt-[2rem] mb-[1.5rem] text-[1.8rem] text-[#000000de] font-semibold	 "

              >
                {data.paragraph.slice(0, 110)}
              </h4>

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

export default Slider3;
