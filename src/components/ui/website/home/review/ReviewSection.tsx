"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";

const ReviewSection = () => {
  return (
    <div className="bg-[#F6F2EE] py-10">
      <div className="flex items-center justify-center text-center my-10">
        <h1 className="text-3xl font-bold max-w-md">
          What the People Thinks About Us
        </h1>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewSection;
