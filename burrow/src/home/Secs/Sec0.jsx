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
    imgSrc: "https://res.cloudinary.com/dz2hoghhp/image/upload/v1784378873/ad986b10cfda1dd89eae5dd9ba11d7e727b4a9cf-3840x988_ylswwj.avif",
  },
  {
    title: "Discover Nomad, our best-selling and most-awarded modular seating",
    buttonLabel: "SHOP NOMAD",
    imgSrc: "https://res.cloudinary.com/dz2hoghhp/image/upload/v1784378873/879f41a39ad9be249a41526d7685f6216b1ceeb9-1200x675_v4hzq3.avif",
  },
  {
    title: "A better suite of bedroom furniture starts with a solid frame",
    buttonLabel: "SHOP BEDROOM",
    imgSrc: "https://res.cloudinary.com/dz2hoghhp/image/upload/v1716368874/hujx3edthjehxsaltg9u.webp",
  },
  {
    title: "Lean into Scandinavian comfort with the Range Collection",
    buttonLabel: "SHOP RANGE",
    imgSrc: "https://res.cloudinary.com/dz2hoghhp/image/upload/v1784378873/95af0a7e464f9657137ad1f70675210424beb16b-1664x1184_1_fhsubj.avif",
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
            <div className="absolute top-0 left-0  md:ml-8 ml-4 md:pt-14 pt-6">
              <h2 className="2xl:text-3xl xl:text-3xl sm:text-[24px] text-left font-mono md:w-[60%] w-[92%]">
                {slide.title}
              </h2>
              <div className="mt-4 flex justify-start">
                <button type="button" className="py-3.5 px-8 text-sm font-medium text-gray-900 rounded bg-amber-200 hover:bg-amber-300">
                  {slide.buttonLabel}
                </button>
              </div>
            </div>
            <img src={slide.imgSrc} className="w-full h-[600px]" alt={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
