'use client'

import React , { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Card from './Card';

const CustomSlider = ({addToCart}) => {
    const [Data, setData] = useState([]);


  

    useEffect(() => {
      fetchData();
    }, [])
  
  
  
    // fetching data here 
  
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.API_FETCH_URL}/Admin/product`);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error('Failed to fetch data')
        }
  
      } catch (error) {
        console.log(error)
      }
    }
  







    return (
        <>

            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={50}
               
                navigation
                breakpoints={{
                  // When window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                  },
                  // When window width is >= 480px
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  // When window width is >= 640px
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 30
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30
                  }
                }}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                // onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >


                

        {
          Data.map(item => (
            <SwiperSlide key={item._id}>
                <Card   product={item} addToCart={addToCart}/>
            </SwiperSlide>


          ))
        }

               
              

            </Swiper>


        </>
    )
}




export default CustomSlider