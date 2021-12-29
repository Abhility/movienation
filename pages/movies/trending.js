



import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"




// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

function Slider() {



    return (
        <>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                "rotate": 50,
                "stretch": 0,
                "depth": 100,
                "modifier": 1,
                "slideShadows": true
            }} pagination={true} className="mySwiper">
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-7.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-8.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-9.jpg" /></SwiperSlide>
            </Swiper>
        </>
    )
}
const TrendingMoviesPage = () => {
    return (
        <>
            <h1>Trending...</h1>
            <Slider />
        </>
    )
};



export default TrendingMoviesPage;