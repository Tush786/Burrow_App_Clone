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
      src: "https://media.graphassets.com/resize=w:864,fit:crop/output=format:webp/compress/h13af6npSFm5c6TIRBCs",
      alt: "Range Fabric Sectional",
      title: "Range Fabric Sectional",
    },
    {
      src: "https://media.graphassets.com/resize=w:864,fit:crop/output=format:webp/compress/DfgAqQl1Ss61JvUKqTTA",
      alt: "Kettle Side Table",
      title: "Kettle Side Table",
    },
    {
      src: "https://media.graphassets.com/resize=w:864,fit:crop/output=format:webp/compress/clBhY2LRSWCiQHRKwDiN",
      alt: "Nomad Velvet Sofa",
      title: "Nomad Velvet Sofa",
    },
    {
      src: "https://media.graphassets.com/resize=w:864,fit:crop/output=format:webp/compress/6mS98agT3q6pFlYxeJHc",
      alt: "Nomad Leather Sofa",
      title: "Nomad Leather Sofa",
    },
    {
      src: "https://media.graphassets.com/resize=w:864,fit:crop/output=format:webp/compress/WEAbwsgZQ5WjVdMP0CRK",
      alt: "Serif Credenza",
      title: "Serif Credenza",
    },
    {
      src: "https://media.graphassets.com/resize=w:864,fit:crop/output=format:webp/compress/DJWCPKF2QF6Gmz941nPe",
      alt: "Serif Side Table",
      title: "Serif Side Table",
    },
    {
      src: "https://media.graphassets.com/resize=w:864,fit:crop/output=format:webp/compress/IlhLkl0GRnK3kvQjZibS",
      alt: "Range Fabric Sectional",
      title: "Range Fabric Sectional",
    },
    {
      src: "https://media.graphassets.com/resize=w:864,fit:crop/output=format:webp/compress/p1y243YTfWgdnyeviX52",
      alt: "Prospect Nightstand",
      title: "Prospect Nightstand",
    },
    {
      src: "https://media.graphassets.com/resize=w:864,fit:crop/output=format:webp/compress/mhOjruyvSuKoCU0C9RTu",
      alt: "Nomad Leather Sectional",
      title: "Nomad Leather Sectional",
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
                  className="w-full h-auto object-cover rounded-lg shadow-md"
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
