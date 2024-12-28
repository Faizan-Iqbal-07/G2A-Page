import {Slider4Data} from "../data/Slider4Data";

import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';

const Slider4 = () => {
  return (
    <div  >
      <Swiper

        className="mySwiper"
      >
        {Slider4Data.map((data, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex items-center justify-center gap-[3rem] ">
              <img src={data.img} alt="" className="max-h-[12rem]  " />

              <h4 className="text-[#fff] uppercase text-[3rem] font-black leading-[3rem] max-w-[45rem] ">
                {data.heading}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider4;
