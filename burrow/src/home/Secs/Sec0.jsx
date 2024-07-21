import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const slidesData = [
  {
    title: "Meet Mambo, a new design with deep seats and a sculpted backrest",
    buttonLabel: "SHOP MAMBO",
    imgSrc: "https://media.graphassets.com/resize=w:2304,fit:crop/output=format:webp/compress/3PNy6pUrRV1hUpKjnK0A",
  },
  {
    title: "Discover Nomad, our best-selling and most-awarded modular seating",
    buttonLabel: "SHOP NOMAD",
    imgSrc: "https://media.graphassets.com/resize=w:2304,fit:crop/output=format:webp/compress/KgmsrOumQNm6nvPTbhwK",
  },
  {
    title: "A better suite of bedroom furniture starts with a solid frame",
    buttonLabel: "SHOP BEDROOM",
    imgSrc: "https://media.graphassets.com/resize=w:2304,fit:crop/output=format:webp/compress/A6fHCSq9SKdPCkJY2RpA",
  },
  {
    title: "Lean into Scandinavian comfort with the Range Collection",
    buttonLabel: "SHOP RANGE",
    imgSrc: "https://media.graphassets.com/resize=w:2304,fit:crop/output=format:webp/compress/uIF1X41RR64ILO3BtjtU",
  },
];

export default function Sec0() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="absolute top-0 left-0 text-3xl md:ml-8 ml-4 md:pt-14 pt-6">
              <h2 className="text-3xl text-left font-mono md:w-7/12 w-11/12">
                {slide.title}
              </h2>
              <div className="mt-4 flex justify-start">
                <button type="button" className="py-3.5 px-8 text-sm font-medium text-gray-900 rounded bg-amber-200 hover:bg-amber-300">
                  {slide.buttonLabel}
                </button>
              </div>
            </div>
            <img src={slide.imgSrc} className="w-full h-auto" alt={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
