import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, EffectCreative, Autoplay, } from 'swiper';
import "swiper/css";
import "swiper/css/effect-coverflow";

const CoverFlowCarousel = ({ items, autoplayDuration = 2000 , effect='coverflow' }) => {

    return (
        <>
            <Swiper
                className={`${effect}-carousel`}
                grabCursor={true}
                effect={effect}
                modules={[EffectCoverflow, EffectCreative, Autoplay]}
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
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [
                            0,
                            0,
                            -400
                        ]
                    },
                    next: {
                        translate: [
                            '100%',
                            0,
                            0
                        ]
                    }
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