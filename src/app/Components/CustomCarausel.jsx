'use client'
import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';

const CustomCarousel = () => {
  const [Data, setData] = useState([]);




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.API_FETCH_URL}/Admin/Banner`);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
          console.log(jsonData);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);






  return (
    <>

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >



        {
          Data.map(item => (
            <SwiperSlide key={item._id}>
              <div className='w-full h-96'>
                <Image  width={100} height={100}  className="object-fill w-full h-full rounded-t-lg pb-8" src={item.BannerImg} alt="product image" />
              </div>
            </SwiperSlide>


          ))
        }



      </Swiper>
    </>
  );
};

export default CustomCarousel;
