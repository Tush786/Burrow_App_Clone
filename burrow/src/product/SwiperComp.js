import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function SwiperComp({imagesurl}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [images,setImages]=useState(imagesurl)

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`nature ${index + 1}`}
              className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`nature ${index + 1}`}
              className="rounded-md transition-transform duration-300 ease-in-out hover:scale-110 opacity-80 hover:opacity-100"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
