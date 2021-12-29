import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/effect-coverflow";

const CoverFlowCarousel = ({ items, autoplayDuration = 2000 }) => {

    return (
        <>
            <Swiper
                className='coverflow-carousel'
                grabCursor={true}
                effect='coverflow'
                modules={[EffectCoverflow, Autoplay]}
                autoplay={{
                    delay: autoplayDuration,
                    disableOnInteraction: false
                }}
                centeredSlides='true'
                slidesPerView='auto'
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true,
                }}
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            {item}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};


export default CoverFlowCarousel;