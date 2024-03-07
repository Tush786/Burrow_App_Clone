import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../../home.css";

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Sec8() {
  const [swiperRef, setSwiperRef] = useState(null);


  return (
    <div className='mt-10'>

   
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div>
                <div>
                <img src='https://media.graphassets.com/resize=w:864,fit:crop/output=format:webp/compress/h13af6npSFm5c6TIRBCs'/>
                </div>
                <div className='text-left mt-2'>
                    <p className='font-bold text-lg'>Range Fabric Sectional</p>
                </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
        <div>
                <div>
                <img src='https://media.graphassets.com/resize=w:864,fit:crop/output=format:webp/compress/DfgAqQl1Ss61JvUKqTTA'/>
                </div>
                <div className='text-left mt-2'>
                    <p className='font-bold text-lg'>Kettle Side Table</p>
                </div>
            </div>
           </SwiperSlide>
        <SwiperSlide>
        <div>
                <div>
                <img src='https://media.graphassets.com/resize=w:864,fit:crop/output=format:webp/compress/clBhY2LRSWCiQHRKwDiN'/>
                </div>
                <div className='text-left mt-2'>
                    <p className='font-bold text-lg'>Nomad Velvet Sofa</p>
                </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
        <div>
                <div>
                <img src='https://media.graphassets.com/resize=w:864,fit:crop/output=format:webp/compress/6mS98agT3q6pFlYxeJHc'/>
                </div>
                <div className='text-left mt-2'>
                    <p className='font-bold text-lg'>Nomad Leather Sofa</p>
                </div>
            </div>
          </SwiperSlide>
        <SwiperSlide>
        <div>
                <div>
                <img src='https://media.graphassets.com/resize=w:864,fit:crop/output=format:webp/compress/WEAbwsgZQ5WjVdMP0CRK'/>
                </div>
                <div className='text-left mt-2'>
                    <p className='font-bold text-lg'>Serif Credenza</p>
                </div>
            </div>
           </SwiperSlide>
        <SwiperSlide>
        <div>
                <div>
                <img src='https://media.graphassets.com/resize=w:864,fit:crop/output=format:webp/compress/DJWCPKF2QF6Gmz941nPe'/>
                </div>
                <div className='text-left mt-2'>
                    <p className='font-bold text-lg'>Serif Side Table</p>
                </div>
            </div>
           </SwiperSlide>
        <SwiperSlide>
        <div>
                <div>
                <img src='https://media.graphassets.com/resize=w:864,fit:crop/output=format:webp/compress/IlhLkl0GRnK3kvQjZibS'/>
                </div>
                <div className='text-left mt-2'>
                    <p className='font-bold text-lg'>Range Fabric Sectional</p>
                </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
        <div>
                <div>
                <img src='https://media.graphassets.com/resize=w:864,fit:crop/output=format:webp/compress/p1y243YTfWgdnyeviX52'/>
                </div>
                <div className='text-left mt-2'>
                    <p className='font-bold text-lg'>Prospect Nightstand</p>
                </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
        <div>
                <div>
                <img src='https://media.graphassets.com/resize=w:864,fit:crop/output=format:webp/compress/mhOjruyvSuKoCU0C9RTu'/>
                </div>
                <div className='text-left mt-2'>
                    <p className='font-bold text-lg'>Nomad Leather Sectional</p>
                </div>
            </div>
           </SwiperSlide>
      </Swiper>

   
    </>
    </div>
  );
}
