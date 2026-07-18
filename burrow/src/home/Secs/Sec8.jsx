import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Pagination, Navigation } from "swiper/modules";

const Sec8 = () => {
  // Array of objects containing data for each slide
const slidesData = [
  {
    src: "https://res.cloudinary.com/dz2hoghhp/image/upload/v1784385582/FLRST-SL-RGPL-S4-A1-C0-SGF-LW_FA_bwgokd.webp",
    alt: "Range Fabric Sectional",
    title: "Range Fabric Sectional",
  },
  {
    src: "https://res.cloudinary.com/dz2hoghhp/image/upload/v1784385582/FLRTB-ST-KT-WN-BZ_2a861d4f-44d4-4db3-8bd2-f575aaa4c1e7_b4yecw.webp",
    alt: "Kettle Side Table",
    title: "Kettle Side Table",
  },
  {
    src: "https://res.cloudinary.com/dz2hoghhp/image/upload/v1784385582/NVSFPL-GG-2-MD-DW_yuwpm4.webp",
    alt: "Nomad Velvet Sofa",
    title: "Nomad Velvet Sofa",
  },
  {
    src: "https://res.cloudinary.com/dz2hoghhp/image/upload/v1784385582/NLSFPL-CN-3-MD-DW_f083145f-243e-4a15-ae4d-ce91d7f27622_y8k18j.webp",
    alt: "Nomad Leather Sofa",
    title: "Nomad Leather Sofa",
  },
  {
    src: "https://res.cloudinary.com/dz2hoghhp/image/upload/v1784385582/05_Prospect_Nightstand_Lifestyle_a7680c65-658a-4218-864b-b682aa715bb7_ouy4kq.webp",
    alt: "Serif Credenza",
    title: "Serif Credenza",
  },
  {
    src: "https://res.cloudinary.com/dz2hoghhp/image/upload/v1784385581/FLRSR-CZ-TT-OK-Front_b7a36d7a-28f1-4f77-84fa-dd945979c638_n01wzg.webp",
    alt: "Serif Side Table",
    title: "Serif Side Table",
  },
  {
    src: "https://res.cloudinary.com/dz2hoghhp/image/upload/v1783267509/44a8f7e7ed0549e740c0eddaeef729e8852a11c8-750x750_s58ysr.avif",
    alt: "Range Fabric Sectional",
    title: "Range Fabric Sectional",
  },
  {
    src: "https://res.cloudinary.com/dz2hoghhp/image/upload/v1784385581/FLRTB-ST-SR-WN_01_d01fc362-8380-4d7f-b880-0847c858d2ee_tkd4rb.webp",
    alt: "Prospect Nightstand",
    title: "Prospect Nightstand",
  },
];

  return (
    <div className='2xl:pb-20 xl:pb-20 2xl:px-14 px-4 md:px-16 xs:pb-4 sm:pb-4'>
    <div className='flex justify-center 2xl:mb-6 sm:mb-2'>
      <h2 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-6 2xl:text-center xl:text-center text-left '>
          Shop these real-life spaces
        </h2>
      </div>

      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
        //   pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-[250px] object-cover rounded-lg shadow-md"
                />
                <p className="mt-2 font-bold text-base sm:text-lg md:text-xl 2xl:text-center xs:text-left">
                  {slide.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Sec8;
