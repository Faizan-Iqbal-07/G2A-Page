import { Slider1Data } from "../data/Slider1Data";

import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";

import {Navigation, Pagination} from "swiper/modules";

const Slider1 = () => {
  return (
    <div>
      <Swiper
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        
        modules={[Navigation]}
        className="mySwiper"
      >

{Slider1Data.map((data , idx )=>(
        <SwiperSlide key={idx} >
        <div className="px-[2rem] flex ">
          <img src={data.img} alt="world" />
          <div>
            <p className="text-[#202020] text-[3.5rem] font-bold">{data.Million}</p>
            <p>{data.text} </p>
          </div>
        </div>
      </SwiperSlide>
))}

      </Swiper>
    </div>
  );
};

export default Slider1;
