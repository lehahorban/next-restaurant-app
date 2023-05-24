import { NextPage } from "next";
import Image from "next/image";

import { useState } from "react";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import dishArr from "@/pages/api/api";
import { DishType } from "./DishType";
import Modal from "../Modal/Modal";

SwiperCore.use([Navigation]);

const Slider: NextPage = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedDish, setSelectedDish] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string | undefined>("");

  const handleImageClick = (
    image: string,
    dish: string,
    price: string | undefined
  ) => {
    setSelectedImage(image);
    setSelectedDish(dish);
    setSelectedPrice(price);
  };

  const handleCloseModal = () => {
    setSelectedImage("");
  };

  return (
    <>
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
        {dishArr.map(({ id, to, dish, price }: DishType) => (
          <SwiperSlide
            key={id}
            onClick={() => handleImageClick(`/images/${to}.jpg`, dish, price)}
          >
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

      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          handleCloseModal={handleCloseModal}
          selectedDish={selectedDish}
          selectedPrice={selectedPrice}
        />
      )}
    </>
  );
};

export default Slider;
