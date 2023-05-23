import { NextPage } from "next";
import Image from "next/image";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import dishArr from "@/pages/api/api";
import { DishType } from "./DishType";

SwiperCore.use([Navigation]);

const Slider: NextPage = () => {
  return (
    <Swiper
      className="w-full max-w-[1200px] z-0 mt-8"
      spaceBetween={50}
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },

        480: {
          slidesPerView: 2,
        },

        1000: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
    >
      {dishArr.map(({ id, to, dish }: DishType) => (
        <SwiperSlide key={id}>
          <div className="max-w-[250px] min-h-[250px]">
            <Image
              className="w-full h-full object-cover"
              src={`/images/${to}.jpg`}
              alt={dish}
              fill={true}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Slider;
