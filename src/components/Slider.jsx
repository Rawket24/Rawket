import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

const Slider = () => {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000, // Autoplay delay in ms
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img
            src="/Images/img1.jpg"
            alt="Fabrication"
            className="swiper-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Images/img2.jpg"
            alt="Fabrication"
            className="swiper-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Images/img3.jpg"
            alt="Fabrication"
            className="swiper-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Images/img4.jpg"
            alt="Fabrication"
            className="swiper-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Images/img5.jpg"
            alt="Fabrication"
            className="swiper-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Images/img6.jpg"
            alt="Fabrication"
            className="swiper-slide-image"
          />
        </SwiperSlide>

        {/* Repeat other SwiperSlides */}

        <div className="slider-controler mt-10">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
